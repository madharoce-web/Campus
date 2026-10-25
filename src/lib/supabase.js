/**
 * Client de Supabase (comptes i progrés al núvol). Sense VITE_SUPABASE_URL i
 * VITE_SUPABASE_PUBLISHABLE_KEY la web funciona com sempre, sense comptes.
 *
 * La biblioteca es carrega sota demanda: un visitant sense sessió no la baixa
 * fins que obre la pàgina d'entrar.
 */
const SB_URL = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;

export const AUTH_ENABLED = Boolean(SB_URL && KEY);
/** Clau de localStorage on Supabase desa la sessió. */
export const AUTH_STORAGE_KEY = 'am-auth';

let client = null;
export function getSupabase() {
  if (!AUTH_ENABLED) return Promise.resolve(null);
  client ??= import('@supabase/supabase-js').then(({ createClient }) => createClient(SB_URL, KEY, {
    auth: {
      flowType: 'pkce',
      storageKey: AUTH_STORAGE_KEY,
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }));
  return client;
}

/** Hi ha indicis d'una sessió (desada o tornant de Google / de l'enllaç del correu)? */
export function sessionHint() {
  if (!AUTH_ENABLED) return false;
  try {
    if (localStorage.getItem(AUTH_STORAGE_KEY)) return true;
  } catch { /* sense emmagatzematge */ }
  return /[?&]code=/.test(window.location.search);
}
