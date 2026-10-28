/**
 * Progrés d'una assignatura de la plantilla: una sola clau per assignatura, 'kit-<k>-v1'.
 *   read      { secció: ms }                apartats llegits
 *   checks    { exercici: 1 | 0 }           comprovacions de les lliçons
 *   practice  { exercici: { ok, at, self? } }  exercicis de pràctica (self: autoavaluació 0–4)
 *   exams     [{ at, min, mark, n }]        simulacres (els 30 darrers)
 *   last      { unit, sec }                 on s'ha quedat
 *   tot       { sections, ex }              totals (per al tauler)
 *   mig       true                          ja s'ha importat el progrés de la versió anterior
 * S'escriu sempre amb lsSetJSON, de manera que es sincronitza amb el compte (lib/sync.js).
 */
import { useCallback, useSyncExternalStore } from 'react';
import { lsJSON, lsSetJSON } from '../../lib/storage.js';
import { logAttempt } from '../../lib/intents.js';

export const kitKey = (k) => `kit-${k}-v1`;
const EMPTY = { read: {}, checks: {}, practice: {}, exams: [], last: null, tot: null, mig: false };
const obj = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v : {});

function load(k) {
  const v = obj(lsJSON(kitKey(k), {}));
  return {
    ...EMPTY, ...v,
    read: obj(v.read), checks: obj(v.checks), practice: obj(v.practice),
    exams: Array.isArray(v.exams) ? v.exams : [],
  };
}

const cache = new Map();
const subs = new Map();

export function getKit(k) {
  if (!cache.has(k)) cache.set(k, load(k));
  return cache.get(k);
}

export function updateKit(k, fn) {
  const prev = getKit(k);
  const next = fn(prev);
  if (next === prev) return;
  cache.set(k, next);
  lsSetJSON(kitKey(k), next);
  (subs.get(k) || []).forEach((f) => f());
}

/** Torna a llegir de localStorage (p. ex. després que la sincronització hi hagi escrit). */
export function reloadKit(k) {
  cache.delete(k);
  (subs.get(k) || []).forEach((f) => f());
}

// la sincronització ha escrit dades del compte (o les ha esborrat en sortir): fora la memòria cau
if (typeof window !== 'undefined') {
  window.addEventListener('am-remote', () => {
    cache.clear();
    subs.forEach((set) => set.forEach((f) => f()));
  });
}

function subscribe(k, f) {
  if (!subs.has(k)) subs.set(k, new Set());
  subs.get(k).add(f);
  return () => subs.get(k).delete(f);
}

export function useKit(k) {
  const sub = useCallback((f) => subscribe(k, f), [k]);
  return useSyncExternalStore(sub, () => getKit(k));
}

/* ---------- accions ---------- */
export const markRead = (k, sec) => updateKit(k, (s) => (s.read[sec] ? s : { ...s, read: { ...s.read, [sec]: Date.now() } }));
export const setLast = (k, unit, sec) => updateKit(k, (s) => (s.last && s.last.unit === unit && s.last.sec === sec ? s : { ...s, last: { unit, sec } }));
// cada resultat també s'apunta al registre d'intents del compte (lib/intents.js; sense sessió no fa res)
export const recordCheck = (k, id, ok) => {
  logAttempt({ subject: k, item: id, correct: ok, kind: 'quiz' });
  updateKit(k, (s) => ({ ...s, checks: { ...s.checks, [id]: ok ? 1 : 0 } }));
};
export const recordPractice = (k, id, res) => {
  logAttempt({ subject: k, item: id, correct: res.ok, score: res.self ?? null });
  updateKit(k, (s) => {
    const prev = s.practice[id];
    // un exercici fet bé no torna a «pendent» si després es falla
    const ok = !!(res.ok || (prev && prev.ok));
    return { ...s, practice: { ...s.practice, [id]: { ...res, ok, at: Date.now() } } };
  });
};
/** Simulacre lliurat: e = { min, mark, n }; items = [{ id, frac }] per al registre d'intents. */
export const addExam = (k, e, items = []) => {
  for (const it of items) logAttempt({ subject: k, item: it.id, correct: it.frac == null ? null : it.frac >= 1, score: it.frac, kind: 'exam' });
  logAttempt({ subject: k, item: 'simulacre-' + e.min, score: e.mark, kind: 'exam', durationMs: e.ms });
  updateKit(k, (s) => ({ ...s, exams: [...s.exams, { min: e.min, mark: e.mark, n: e.n, at: Date.now() }].slice(-30) }));
};
export const setTotals = (k, tot) => updateKit(k, (s) => (s.tot && s.tot.sections === tot.sections && s.tot.ex === tot.ex ? s : { ...s, tot }));

/** Importa una sola vegada el progrés de la versió anterior del curs (course.migrate). */
export function migrateOnce(k, migrate) {
  const s = getKit(k);
  if (s.mig) return;
  let add = {};
  try { add = migrate ? migrate({ lsJSON }) || {} : {}; } catch { add = {}; }
  updateKit(k, (st) => ({
    ...st,
    read: { ...(add.read || {}), ...st.read },
    practice: { ...(add.practice || {}), ...st.practice },
    exams: st.exams.length ? st.exams : (add.exams || []),
    mig: true,
  }));
}

/** Progrés per al tauler: apartats llegits + exercicis fets, sobre el total. */
export function kitProgress(k) {
  const s = load(k);
  if (!s.tot) return null;
  const done = Object.keys(s.read).length + Object.values(s.practice).filter((p) => p && p.ok).length;
  const total = s.tot.sections + s.tot.ex;
  return { done: Math.min(done, total), total };
}
