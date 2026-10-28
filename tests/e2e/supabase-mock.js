/**
 * Supabase simulat per a les proves de comptes (tests/e2e/comptes.spec.js).
 * Intercepta les peticions del navegador a SUPABASE_TEST_URL i imita les parts
 * de l'API que fa servir la web: Auth (codi per correu, Google amb PKCE, sortir)
 * i PostgREST (profiles, user_state, activity i les funcions join_waitlist,
 * delete_my_account i les del tauler d'administració). Les dades viuen en memòria i les proves les poden mirar.
 */
export const SUPABASE_TEST_URL = 'https://proves.supabase.co';
export const TEST_CODE = '123456';

const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
const jwt = (sub) => `${b64({ alg: 'HS256', typ: 'JWT' })}.${b64({ sub, role: 'authenticated', exp: Math.floor(Date.now() / 1000) + 3600 })}.firma`;

export async function mockSupabase(context, seed = {}) {
  const db = {
    users: [],          // { id, email }
    profiles: [],       // { id, display_name, degree, lang, role, plan, created_at }
    user_state: [],     // { user_id, key, value, updated_at }
    waitlist: [],       // { email, degree, lang }
    activity: [],       // { user_id, subject, item, kind, correct, score, duration_ms, created_at }
    otps: [],           // correus als quals s'ha «enviat» un codi
    calls: [],          // [mètode, camí] de cada petició
  };
  const tokens = new Map(); // access_token → user id

  function userFor(email) {
    let u = db.users.find((x) => x.email === email);
    if (!u) {
      u = { id: crypto.randomUUID(), email };
      db.users.push(u);
      db.profiles.push({ id: u.id, display_name: null, degree: null, lang: 'ca', role: 'user', plan: 'free', created_at: new Date().toISOString() });
    }
    return u;
  }
  function session(u) {
    const access_token = jwt(u.id);
    tokens.set(access_token, u.id);
    return {
      access_token, token_type: 'bearer', expires_in: 3600, expires_at: Math.floor(Date.now() / 1000) + 3600,
      refresh_token: 'refresc-' + u.id,
      user: { id: u.id, aud: 'authenticated', role: 'authenticated', email: u.email, app_metadata: { provider: 'email' }, user_metadata: {}, created_at: new Date().toISOString() },
    };
  }
  for (const s of seed.users || []) {
    const u = userFor(s.email);
    Object.assign(db.profiles.find((p) => p.id === u.id), s.profile || {});
    for (const [key, value, updated_at] of s.state || []) db.user_state.push({ user_id: u.id, key, value, updated_at });
  }

  /** Filtres de PostgREST que fa servir la web: col=eq.x i col=in.(a,b). */
  const matches = (row, params) => {
    for (const [col, f] of params) {
      if (['select', 'on_conflict', 'order', 'columns', 'limit'].includes(col)) continue;
      if (f.startsWith('eq.') && String(row[col]) !== f.slice(3)) return false;
      if (f.startsWith('in.(')) {
        const list = f.slice(4, -1).split(',').map((x) => x.replace(/^"|"$/g, ''));
        if (!list.includes(String(row[col]))) return false;
      }
    }
    return true;
  };

  await context.route(SUPABASE_TEST_URL + '/**', async (route) => {
    const req = route.request();
    const url = new URL(req.url());
    const path = url.pathname;
    const origin = req.headers().origin || '*';
    const cors = {
      'access-control-allow-origin': origin,
      'access-control-allow-methods': 'GET,POST,PATCH,DELETE,OPTIONS',
      'access-control-allow-headers': req.headers()['access-control-request-headers'] || '*',
      'access-control-expose-headers': 'content-range, x-supabase-api-version',
    };
    const json = (status, body, extra = {}) => route.fulfill({ status, headers: { ...cors, 'content-type': 'application/json', ...extra }, body: body === undefined ? '' : JSON.stringify(body) });
    if (req.method() === 'OPTIONS') return route.fulfill({ status: 204, headers: cors });
    db.calls.push([req.method(), path]);
    const body = (() => { try { return req.postDataJSON(); } catch { return null; } })();
    const uid = tokens.get((req.headers().authorization || '').replace(/^Bearer /, ''));

    // ---------- Auth
    if (path === '/auth/v1/otp') { db.otps.push(body.email); return json(200, {}); }
    if (path === '/auth/v1/verify') {
      if (body.token !== TEST_CODE) return json(403, { code: 403, error_code: 'otp_expired', msg: 'Token has expired or is invalid' });
      return json(200, session(userFor(body.email)));
    }
    if (path === '/auth/v1/authorize') {
      // «Google» accepta a l'instant i torna a la web amb un codi
      const back = new URL(url.searchParams.get('redirect_to'));
      back.searchParams.set('code', 'codi-google');
      return route.fulfill({ status: 302, headers: { location: back.toString() } });
    }
    if (path === '/auth/v1/token') {
      if (url.searchParams.get('grant_type') === 'pkce' && body.auth_code === 'codi-google' && body.code_verifier) {
        return json(200, session(userFor('google@example.com')));
      }
      if (url.searchParams.get('grant_type') === 'refresh_token') {
        const u = db.users.find((x) => 'refresc-' + x.id === body.refresh_token);
        return u ? json(200, session(u)) : json(400, { error_code: 'refresh_token_not_found', msg: 'Invalid Refresh Token' });
      }
      return json(400, { error_code: 'bad_code_verifier', msg: 'invalid flow state' });
    }
    if (path === '/auth/v1/logout') return route.fulfill({ status: 204, headers: cors });
    if (path === '/auth/v1/user') {
      const u = db.users.find((x) => x.id === uid);
      return u ? json(200, session(u).user) : json(401, { msg: 'invalid JWT' });
    }

    // ---------- PostgREST
    const params = [...url.searchParams.entries()];
    const single = (req.headers().accept || '').includes('vnd.pgrst.object');
    if (path === '/rest/v1/rpc/join_waitlist') {
      const email = String(body.p_email).trim().toLowerCase();
      if (!db.waitlist.some((w) => w.email === email && w.degree === body.p_degree)) db.waitlist.push({ email, degree: body.p_degree, lang: body.p_lang });
      return route.fulfill({ status: 204, headers: cors });
    }
    if (!uid) return json(401, { code: '42501', message: 'permission denied' });
    if (path === '/rest/v1/rpc/delete_my_account') {
      db.users = db.users.filter((u) => u.id !== uid);
      db.profiles = db.profiles.filter((p) => p.id !== uid);
      db.user_state = db.user_state.filter((r) => r.user_id !== uid);
      return route.fulfill({ status: 204, headers: cors });
    }
    if (path === '/rest/v1/profiles') {
      const mine = db.profiles.filter((p) => p.id === uid && matches(p, params));
      if (req.method() === 'PATCH') {
        for (const p of mine) for (const k of ['display_name', 'degree', 'lang']) if (k in body) p[k] = body[k];
      }
      return single ? json(200, mine[0]) : json(200, mine);
    }
    if (path === '/rest/v1/user_state') {
      if (req.method() === 'GET') {
        return json(200, db.user_state.filter((r) => r.user_id === uid).map(({ key, value, updated_at }) => ({ key, value, updated_at })));
      }
      if (req.method() === 'POST') {
        for (const r of Array.isArray(body) ? body : [body]) {
          if (r.user_id !== uid) return json(403, { code: '42501', message: 'new row violates row-level security policy' });
          const old = db.user_state.find((x) => x.user_id === uid && x.key === r.key);
          if (old) Object.assign(old, r); else db.user_state.push({ ...r });
        }
        return route.fulfill({ status: 201, headers: cors });
      }
      if (req.method() === 'DELETE') {
        db.user_state = db.user_state.filter((r) => r.user_id !== uid || !matches(r, params));
        return route.fulfill({ status: 204, headers: cors });
      }
    }
    if (path === '/rest/v1/activity') {
      if (req.method() === 'POST') {
        for (const r of Array.isArray(body) ? body : [body]) {
          if (r.user_id !== uid) return json(403, { code: '42501', message: 'new row violates row-level security policy' });
          db.activity.push({ ...r, created_at: new Date().toISOString() });
        }
        return route.fulfill({ status: 201, headers: cors });
      }
      return json(200, db.activity.filter((r) => r.user_id === uid));
    }
    if (path.startsWith('/rest/v1/rpc/admin_')) {
      // com les funcions del servidor: només per a administradors
      if (db.profiles.find((p) => p.id === uid)?.role !== 'admin') return json(403, { code: '42501', message: 'només administradors' });
      if (path.endsWith('admin_signups')) return json(200, db.profiles.map((p) => ({ day: p.created_at.slice(0, 10), degree: p.degree || '', plan: p.plan, n: 1 })));
      if (path.endsWith('admin_waitlist')) {
        const degs = [...new Set(db.waitlist.map((w) => w.degree))];
        return json(200, degs.map((d) => ({ degree: d, n: db.waitlist.filter((w) => w.degree === d).length, last_at: new Date().toISOString() })));
      }
      if (path.endsWith('admin_item_stats')) {
        const m = new Map();
        for (const a of db.activity) {
          const k = a.subject + '|' + a.item + '|' + a.kind;
          const o = m.get(k) || { subject: a.subject, item: a.item, kind: a.kind, attempts: 0, graded: 0, correct: 0, users: new Set(), last_at: a.created_at };
          o.attempts++;
          if (a.correct != null) o.graded++;
          if (a.correct) o.correct++;
          o.users.add(a.user_id);
          m.set(k, o);
        }
        return json(200, [...m.values()].map((o) => ({ ...o, users: o.users.size })));
      }
    }
    return json(404, { message: 'no simulat: ' + req.method() + ' ' + path });
  });

  return {
    db,
    /** Progrés desat al «núvol» per a un correu: { clau: valor }. */
    state(email) {
      const u = db.users.find((x) => x.email === email);
      return Object.fromEntries(db.user_state.filter((r) => u && r.user_id === u.id).map((r) => [r.key, r.value]));
    },
    profile(email) {
      const u = db.users.find((x) => x.email === email);
      return u && db.profiles.find((p) => p.id === u.id);
    },
  };
}
