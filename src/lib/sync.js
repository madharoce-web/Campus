/**
 * Sincronització del progrés amb el compte (Supabase, taula user_state).
 *
 * Els cursos no en saben res: desen l'estat a localStorage com sempre (src/lib/storage.js)
 * i aquí s'apunta quan s'ha escrit cada clau. Amb la sessió iniciada:
 *  - en entrar (i en tornar a la pestanya), es baixa el progrés del compte i es fusiona
 *    amb el del navegador, clau per clau, guanyant l'escriptura més recent (syncplan.js);
 *  - cada canvi es puja al cap d'uns segons.
 * En tancar la sessió, el progrés s'esborra d'aquest navegador (ja és al compte).
 */
import { lsGet, lsKeys, onStoredChange } from './storage.js';
import { mergePlan } from './syncplan.js';

const META = 'am-sync-meta'; // { [clau]: ms de la darrera escriptura; negatiu si s'ha esborrat }
/** Claus que no es sincronitzen: preferències d'aquest dispositiu. */
const LOCAL_ONLY = new Set(['sem1-lang', 'sem1-drawer', 'kit-dock']);
export const isSynced = (k) => !!k && !k.startsWith('am-') && !k.startsWith('sb-') && !LOCAL_ONLY.has(k);

const PUSH_DELAY = 2000, RETRY_DELAY = 15000, PULL_EVERY = 60000;

let meta = null;
let metaTimer = 0;
let session = null;          // { sb, uid, onRemoteChange }
const pending = new Set();   // claus per pujar
let pushTimer = 0;
let chain = Promise.resolve();
let lastPull = 0;
let status = { state: 'idle', at: 0 }; // idle | syncing | ok | error
const statusListeners = new Set();

function setStatus(state) {
  status = { state, at: state === 'ok' ? Date.now() : status.at };
  for (const fn of statusListeners) fn(status);
}
export function getSyncStatus() { return status; }
export function onSyncStatus(fn) { statusListeners.add(fn); return () => statusListeners.delete(fn); }

function loadMeta() {
  if (!meta) {
    try { meta = JSON.parse(localStorage.getItem(META)) || {}; } catch { meta = {}; }
  }
  return meta;
}
function saveMeta() {
  clearTimeout(metaTimer); metaTimer = 0;
  try { localStorage.setItem(META, JSON.stringify(loadMeta())); } catch { /* sense emmagatzematge */ }
}
function saveMetaSoon() {
  clearTimeout(metaTimer);
  metaTimer = setTimeout(saveMeta, 300);
}

/** Estat local de les claus sincronitzables: { clau: { value, ts } }. */
function localSnapshot() {
  const m = loadMeta(), out = {};
  for (const k of lsKeys()) if (isSynced(k)) out[k] = { value: lsGet(k), ts: Math.max(0, m[k] || 0) };
  for (const [k, t] of Object.entries(m)) if (t < 0 && !(k in out)) out[k] = { value: null, ts: -t };
  return out;
}

/** Escriu una clau que ve del núvol (sense tornar-la a pujar). */
function writeFromRemote(key, value, ts) {
  try { localStorage.setItem(key, value); } catch { return; }
  loadMeta()[key] = ts;
}

let installed = false;
/** Comença a apuntar les escriptures (s'ha de cridar abans que els cursos escriguin). */
export function installTracking() {
  if (installed) return;
  installed = true;
  onStoredChange((key, value) => {
    if (!isSynced(key)) return;
    const now = Date.now();
    loadMeta()[key] = value === null ? -now : now;
    saveMetaSoon();
    if (session) { pending.add(key); schedulePush(PUSH_DELAY); }
  });
  // una altra pestanya ha desat les seves marques: ens quedem la més recent de cada clau
  window.addEventListener('storage', (e) => {
    if (e.key !== META || !e.newValue) return;
    let other;
    try { other = JSON.parse(e.newValue) || {}; } catch { return; }
    const m = loadMeta();
    for (const [k, t] of Object.entries(other)) if (Math.abs(t) > Math.abs(m[k] || 0)) m[k] = t;
  });
  document.addEventListener('visibilitychange', () => {
    if (!session) return;
    if (document.visibilityState === 'hidden') { saveMeta(); if (pending.size) pushNow(); }
    else if (Date.now() - lastPull > PULL_EVERY) pull();
  });
  window.addEventListener('pagehide', saveMeta);
}

function queue(fn) {
  chain = chain.then(fn, fn);
  return chain;
}

function schedulePush(delay) {
  clearTimeout(pushTimer);
  pushTimer = setTimeout(pushNow, delay);
}

/** Puja ara els canvis pendents. */
export function pushNow() {
  clearTimeout(pushTimer); pushTimer = 0;
  return queue(async () => {
    if (!session || !pending.size) return;
    const { sb, uid } = session;
    const keys = [...pending];
    pending.clear();
    const m = loadMeta(), rows = [], gone = [];
    for (const key of keys) {
      const value = lsGet(key);
      if (value === null) gone.push(key);
      else rows.push({ user_id: uid, key, value, updated_at: new Date(Math.max(0, m[key] || 0)).toISOString() });
    }
    try {
      setStatus('syncing');
      if (rows.length) {
        const { error } = await sb.from('user_state').upsert(rows, { onConflict: 'user_id,key' });
        if (error) throw error;
      }
      if (gone.length) {
        const { error } = await sb.from('user_state').delete().eq('user_id', uid).in('key', gone);
        if (error) throw error;
      }
      setStatus('ok');
    } catch (e) {
      console.warn('sync: no s’ha pogut pujar el progrés', e);
      if (session) { keys.forEach((k) => pending.add(k)); schedulePush(RETRY_DELAY); }
      setStatus('error');
    }
  });
}

/** Baixa el progrés del compte i el fusiona amb el del navegador. */
export function pull() {
  return queue(async () => {
    if (!session) return;
    const { sb, uid, onRemoteChange } = session;
    try {
      setStatus('syncing');
      const { data, error } = await sb.from('user_state').select('key,value,updated_at');
      if (error) throw error;
      if (session?.uid !== uid) return;
      const plan = mergePlan(localSnapshot(), data || []);
      for (const r of plan.toLocal) writeFromRemote(r.key, r.value, r.ts);
      if (plan.toRemote.length) {
        const rows = plan.toRemote.map((r) => ({ user_id: uid, key: r.key, value: r.value, updated_at: new Date(r.ts).toISOString() }));
        const { error: e2 } = await sb.from('user_state').upsert(rows, { onConflict: 'user_id,key' });
        if (e2) throw e2;
      }
      if (plan.toDelete.length) {
        const { error: e3 } = await sb.from('user_state').delete().eq('user_id', uid).in('key', plan.toDelete);
        if (e3) throw e3;
      }
      // les marques d'esborrat ja no calen
      const m = loadMeta();
      for (const [k, t] of Object.entries(m)) if (t < 0) delete m[k];
      saveMeta();
      lastPull = Date.now();
      setStatus('ok');
      if (plan.toLocal.length) {
        // avisa els «stores» amb memòria cau (p. ex. la plantilla d'assignatures) i torna a muntar la pàgina
        window.dispatchEvent(new CustomEvent('am-remote', { detail: plan.toLocal.map((r) => r.key) }));
        onRemoteChange?.();
      }
    } catch (e) {
      console.warn('sync: no s’ha pogut baixar el progrés', e);
      setStatus('error');
    }
  });
}

/** Comença a sincronitzar amb el compte `uid`. onRemoteChange: el núvol ha canviat dades locals. */
export function startSync(sb, uid, onRemoteChange) {
  if (session?.uid === uid) return chain;
  session = { sb, uid, onRemoteChange };
  return pull();
}

/** Deixa de sincronitzar. Amb clear, esborra el progrés d'aquest navegador. */
export async function stopSync({ clear = false } = {}) {
  if (session) await pushNow();
  session = null;
  pending.clear();
  clearTimeout(pushTimer);
  lastPull = 0;
  setStatus('idle');
  if (clear) {
    for (const k of lsKeys()) if (isSynced(k)) { try { localStorage.removeItem(k); } catch { /* res */ } }
    meta = {};
    saveMeta();
    window.dispatchEvent(new CustomEvent('am-remote', { detail: null }));
  }
}
