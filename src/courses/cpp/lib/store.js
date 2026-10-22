/**
 * Estat desat del C++ a contrarellotge: la mateixa clau i el mateix format que la versió
 * original ('cpp-contrarellotge-v1'). És un «store» extern (subscribe + getSnapshot) perquè
 * les accions asíncrones (compilar, executar les proves, lliurar) llegeixin sempre l'estat
 * més recent. Cada canvi crea objectes nous (immutables) i es desa amb un retard de 300 ms.
 */
import { useSyncExternalStore } from 'react';
import { lsGet, lsSet } from '../../../lib/storage.js';

export const KEY = 'cpp-contrarellotge-v1';
export const PATI_CODE = 'ip-pati-code';
export const PATI_IN = 'ip-pati-in';

const DEF = {
  lang: 'ca', theme: null, set: { min: 15, strict: false, sound: true, tpl: true, eng: 'auto' }, prog: {}, sess: {},
  filt: { lv: 0, src: 'all', st: 'all', wk: 0 }, view: 'list', cur: null, exam: null, preset: 'exam', exSrc: 'all',
};
const clone = (o) => JSON.parse(JSON.stringify(o));
function merge(a, b) {
  const o = clone(a);
  for (const k in b) {
    o[k] = (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k] && typeof a[k] === 'object') ? Object.assign(clone(a[k]), b[k]) : b[k];
  }
  return o;
}
function load() {
  try { return merge(DEF, JSON.parse(lsGet(KEY) || '{}')); } catch { return clone(DEF); }
}

let S = load();
const subs = new Set();
let saveT = null;

function write() { saveT = null; lsSet(KEY, JSON.stringify(S)); }
/** Desa ara (now) o d'aquí a 300 ms. */
export function save(now) {
  clearTimeout(saveT);
  if (now) write(); else saveT = setTimeout(write, 300);
}
/** Desa immediatament si hi ha un desament pendent. */
export function flush() { if (saveT) save(true); }

export const getS = () => S;
export function subscribe(f) { subs.add(f); return () => { subs.delete(f); }; }
/** Canvia l'estat: setS(S => nouS) o setS(nouS). */
export function setS(fn, now) {
  const next = typeof fn === 'function' ? fn(S) : fn;
  if (next === S) return;
  S = next;
  save(now);
  subs.forEach((f) => { try { f(); } catch { /* subscriptor trencat */ } });
}
export function useS() { return useSyncExternalStore(subscribe, getS); }

/* ---------------------------------------------------------------- sessions i rellotge */
export const newSess = (min) => ({ acc: 0, t0: 0, on: false, lim: min * 60, started: false, fin: false, checks: 0, fails: 0, help: false, beeps: {} });
/** Sessió d'un exercici (si encara no existeix, una de nova amb el límit actual). */
export const sessOf = (st, id) => st.sess[id] || newSess(st.set.min);
export const elapsed = (ss, now = Date.now()) => ss.acc + (ss.on ? (now - ss.t0) / 1000 : 0);
export const startClock = (ss) => (ss.on || ss.fin ? ss : { ...ss, started: true, on: true, t0: Date.now() });
export const pauseClock = (ss) => (!ss.on ? ss : { ...ss, acc: elapsed(ss), on: false });

/* ---------------------------------------------------------------- actualitzacions immutables */
export const putSess = (st, id, ss) => ({ ...st, sess: { ...st.sess, [id]: ss } });
export const putProg = (st, id, patch) => ({ ...st, prog: { ...st.prog, [id]: { ...(st.prog[id] || {}), ...patch } } });
export const updSess = (id, f, now) => setS((st) => putSess(st, id, f(sessOf(st, id))), now);
export const updProg = (id, f, now) => setS((st) => putProg(st, id, typeof f === 'function' ? f(st.prog[id] || {}) : f), now);
export const updSet = (patch) => setS((st) => ({ ...st, set: { ...st.set, ...patch } }));
export const updFilt = (patch) => setS((st) => ({ ...st, filt: { ...st.filt, ...patch } }));
export const updExam = (patch, now) => setS((st) => (st.exam ? { ...st, exam: { ...st.exam, ...patch } } : st), now);

/** Grau actual (sobre 100): cada comprovació fallida resta un 10% (si hi ha penalització). */
export function gradeNow(ex, ss) {
  if ((ex.penalty || '').trim().startsWith('0')) return 100;
  return Math.max(0, 100 - 10 * ss.fails);
}
