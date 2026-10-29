import { createContext, Fragment, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useLang } from './i18n.jsx';
import { AUTH_ENABLED, getSupabase, sessionHint } from './supabase.js';
import { installTracking, startSync, stopSync } from './sync.js';
import { setActivityUser } from './intents.js';

/**
 * Comptes (correu o Google) amb Supabase. `status`:
 *   'disabled'  la web no té comptes configurats (mode local, com sempre)
 *   'loading'   comprovant la sessió
 *   'guest'     sense sessió: el progrés es desa només en aquest navegador
 *   'user'      amb sessió: el progrés es sincronitza amb el compte (src/lib/sync.js)
 */
const AuthContext = createContext(null);

// s'han d'apuntar les escriptures des del principi, abans que cap curs desi res
if (AUTH_ENABLED) installTracking();

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
/** Només camins interns: /cursos sí, //lloc.com o https://… no. */
export function safeNext(next) {
  return typeof next === 'string' && /^\/(?!\/)/.test(next) ? next : '/cursos';
}
const callbackUrl = (next) => window.location.origin + BASE + '/auth/callback?next=' + encodeURIComponent(safeNext(next));

// les columnes del campus (curs, graus, assignatures, registre guiat) vénen de la migració del campus
const BASE_COLS = 'id,display_name,degree,lang,role,plan,created_at';
const PROFILE_COLS = BASE_COLS + ',study_year,degrees,subjects,onboarded_at';
/** El perfil; si la base de dades encara no té les columnes del campus, sense elles. */
const loadProfile = (sb, uid) => sb.from('profiles').select(PROFILE_COLS).eq('id', uid).maybeSingle()
  .then((r) => (r.error ? sb.from('profiles').select(BASE_COLS).eq('id', uid).maybeSingle() : r));

export function AuthProvider({ children }) {
  const { ui } = useLang();
  const [state, setState] = useState(() => ({
    status: !AUTH_ENABLED ? 'disabled' : sessionHint() ? 'loading' : 'guest', user: null, profile: null,
  }));
  // canviar `rev` torna a muntar la pàgina perquè llegeixi el progrés que ha arribat del núvol
  const [rev, setRev] = useState(0);
  // la persona acaba de sortir (o d'esborrar el compte): el campus la porta a la portada, no a /entrar
  const [farewell, setFarewell] = useState(false);
  const sbRef = useRef(null);
  const uidRef = useRef(null);

  const onSession = useCallback(async (session) => {
    const sb = sbRef.current;
    const user = session?.user ?? null;
    const uid = user?.id ?? null;
    if (uid && uid === uidRef.current) { setState((s) => ({ ...s, user })); return; }
    if (uid) {
      uidRef.current = uid;
      setFarewell(false);
      // profileReady: ja se sap si té perfil (la porta del registre guiat espera a saber-ho)
      setState({ status: 'user', user, profile: null, profileReady: false });
      setActivityUser(sb, uid);
      loadProfile(sb, uid)
        .then(({ data }) => { if (uidRef.current === uid) setState((s) => ({ ...s, profile: data, profileReady: true })); },
          () => { if (uidRef.current === uid) setState((s) => ({ ...s, profileReady: true })); });
      await startSync(sb, uid, () => setRev((r) => r + 1));
      return;
    }
    if (uidRef.current) {
      // s'ha tancat la sessió (aquí o en una altra pestanya): fora el progrés d'aquest navegador
      uidRef.current = null;
      setActivityUser(null);
      await stopSync({ clear: true });
      setRev((r) => r + 1);
    }
    setState({ status: 'guest', user: null, profile: null });
  }, []);

  /** Carrega Supabase (només quan cal) i escolta els canvis de sessió. */
  const ensureClient = useCallback(async () => {
    if (sbRef.current) return sbRef.current;
    const sb = await getSupabase();
    if (!sb || sbRef.current) return sbRef.current || sb;
    sbRef.current = sb;
    // fora del callback: Supabase recomana no fer-hi crides que esperin
    sb.auth.onAuthStateChange((_event, session) => { setTimeout(() => onSession(session), 0); });
    return sb;
  }, [onSession]);

  useEffect(() => {
    if (state.status === 'loading') ensureClient();
  }, [state.status, ensureClient]);

  // l'idioma del perfil (el dels correus) segueix el de la web
  const profileLang = state.profile?.lang;
  useEffect(() => {
    if (!profileLang || profileLang === ui || !uidRef.current) return;
    const uid = uidRef.current;
    sbRef.current?.from('profiles').update({ lang: ui }).eq('id', uid)
      .then(({ error }) => { if (!error && uidRef.current === uid) setState((s) => ({ ...s, profile: s.profile && { ...s.profile, lang: ui } })); });
  }, [profileLang, ui]);

  const value = useMemo(() => {
    const need = async () => {
      const sb = await ensureClient();
      if (!sb) throw new Error('auth-disabled');
      return sb;
    };
    return {
      ...state,
      enabled: AUTH_ENABLED,
      farewell,
      clearFarewell: () => setFarewell(false),
      ensureClient,
      /** Envia el correu amb l'enllaç i el codi d'accés (crea el compte si no existeix). */
      async signInWithEmail(email, next) {
        const sb = await need();
        const { error } = await sb.auth.signInWithOtp({
          email, options: { emailRedirectTo: callbackUrl(next), shouldCreateUser: true, data: { lang: ui } },
        });
        if (error) throw error;
      },
      /** Entra amb el codi de 6 xifres del correu. */
      async verifyCode(email, token) {
        const sb = await need();
        const { error } = await sb.auth.verifyOtp({ email, token, type: 'email' });
        if (error) throw error;
      },
      async signInWithGoogle(next) {
        const sb = await need();
        const { error } = await sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: callbackUrl(next) } });
        if (error) throw error;
      },
      async signOut() {
        const sb = await need();
        await stopSync();              // puja els darrers canvis abans de tancar
        setFarewell(true);
        await sb.auth.signOut({ scope: 'local' });
      },
      async updateProfile(patch) {
        const sb = await need();
        const uid = uidRef.current;
        const { error } = await sb.from('profiles').update(patch).eq('id', uid);
        if (error) throw error;
        const { data } = await loadProfile(sb, uid);
        if (data) setState((s) => ({ ...s, profile: data }));
      },
      /** Totes les dades del compte, per descarregar-les (dret d'accés). */
      async exportData() {
        const sb = await need();
        const [p, st, act] = await Promise.all([
          loadProfile(sb, uidRef.current),
          sb.from('user_state').select('key,value,updated_at'),
          sb.from('activity').select('subject,item,kind,correct,score,duration_ms,created_at').order('created_at'),
        ]);
        const err = p.error || st.error || act.error;
        if (err) throw err;
        return { exported_at: new Date().toISOString(), email: state.user?.email, profile: p.data, progress: st.data, activity: act.data };
      },
      /** «Avisa'm» d'un grau que encara no hi és (no cal tenir compte). */
      async joinWaitlist(email, degree) {
        const sb = await need();
        const { error } = await sb.rpc('join_waitlist', { p_email: email, p_degree: degree, p_lang: ui });
        if (error) throw error;
      },
      /** Esborra el compte i totes les seves dades (dret de supressió). */
      async deleteAccount() {
        const sb = await need();
        await stopSync();
        const { error } = await sb.rpc('delete_my_account');
        if (error) throw error;
        setFarewell(true);
        await sb.auth.signOut({ scope: 'local' });
      },
    };
  }, [state, farewell, ensureClient, ui]);

  return (
    <AuthContext.Provider value={value}>
      <Fragment key={rev}>{children}</Fragment>
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth() fora de <AuthProvider>');
  return ctx;
}
