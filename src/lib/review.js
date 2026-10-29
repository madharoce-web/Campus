/**
 * Repàs a mida: repetició espaciada amb caixes (Leitner). Un exercici entra al repàs quan es falla; cada
 * encert el puja una caixa i el torna a demanar més endavant; un error el torna a la primera caixa.
 *
 *   caixa      1  2  3   4   5
 *   torna als  1  3  7  16  35 dies       un encert a la caixa 5: dominat, surt del repàs
 *
 * Estat a localStorage 'review-v1' (es sincronitza amb el compte com la resta del progrés, lib/sync.js):
 *   { cards: { [assignatura]: { [id]: { ref, seed?, box, due, last, wrong, n } } },
 *     stats: { days: ['2026-10-29', …] (dies amb repàs), done: { d, n } (repassats avui), mastered: n } }
 * L'id és el de l'exercici; per a una família, «família@llavor» (la llavor torna a generar el mateix enunciat).
 * Les funcions pures (nextState, isDue, pickSession, streak) es proven a tests/e2e/review.spec.js.
 */
import { useSyncExternalStore } from 'react';
import { lsJSON, lsSetJSON } from './storage.js';

export const KEY = 'review-v1';
export const INTERVALS = [1, 3, 7, 16, 35];

/** Data local 'aaaa-mm-dd'. */
export const dayOf = (ms) => { const d = new Date(ms); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
/** Mitjanit (hora local) del dia de ms + n dies. */
const midnight = (ms, n = 0) => { const d = new Date(ms); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() + n); return d.getTime(); };

/** id de l'exercici → { ref, seed } ('gr4-troba@4' → { ref: 'gr4-troba', seed: 4 }). */
export function parseId(id, seed) {
  const m = /^(.*)@(\d+)$/.exec(String(id));
  if (m) return { ref: m[1], seed: +m[2] };
  return seed != null ? { ref: String(id), seed: +seed } : { ref: String(id) };
}
export const cardId = ({ ref, seed }) => (seed != null ? `${ref}@${seed}` : ref);

/**
 * Nou estat d'una targeta després d'un intent. card pot ser null (l'exercici no és al repàs).
 * Torna la targeta nova, null (no entra o surt del repàs) o 'mastered' (s'acaba de dominar).
 */
export function nextState(card, correct, now, where = {}) {
  if (!card) {
    if (correct) return null; // només hi entren els errors
    return { ...where, box: 1, due: midnight(now, INTERVALS[0]), last: now, wrong: 1, n: 1 };
  }
  if (!correct) return { ...card, box: 1, due: midnight(now, INTERVALS[0]), last: now, wrong: (card.wrong || 0) + 1, n: (card.n || 0) + 1 };
  if (card.box >= INTERVALS.length) return 'mastered';
  const box = card.box + 1;
  return { ...card, box, due: midnight(now, INTERVALS[box - 1]), last: now, n: (card.n || 0) + 1 };
}

/** Toca repassar-la avui (o abans)? */
export const isDue = (card, now) => card.due <= midnight(now, 1) - 1;

/**
 * Sessió de repàs: les targetes vençudes de les assignatures donades, les més endarrerides primer i
 * alternant assignatures (no deu exercicis seguits de la mateixa). max: quantes com a molt.
 */
export function pickSession(cards, now, { max = 10, subjects } = {}) {
  const by = Object.entries(cards || {})
    .filter(([k]) => !subjects || subjects.includes(k))
    .map(([k, cs]) => Object.entries(cs || {}).filter(([, c]) => isDue(c, now)).map(([id, c]) => ({ k, id, card: c }))
      .sort((a, b) => a.card.due - b.card.due || b.card.wrong - a.card.wrong || (a.id < b.id ? -1 : 1)))
    .filter((l) => l.length)
    .sort((a, b) => a[0].card.due - b[0].card.due);
  const out = [];
  for (let i = 0; out.length < max && by.some((l) => l.length > i); i++) for (const l of by) if (l[i] && out.length < max) out.push(l[i]);
  return out;
}

/** Dies seguits de repàs que acaben avui o ahir. */
export function streak(days, now) {
  const set = new Set(days || []);
  let d = set.has(dayOf(now)) ? 0 : 1, n = 0;
  while (set.has(dayOf(midnight(now, -d)))) { n++; d++; }
  return n;
}

/* ---------- estat ---------- */
const EMPTY = { cards: {}, stats: { days: [], mastered: 0 } };
let cache = null;
const subs = new Set();
function load() {
  const v = lsJSON(KEY, null);
  return v && typeof v === 'object' && v.cards && typeof v.cards === 'object' ? { cards: v.cards, stats: { ...EMPTY.stats, ...(v.stats || {}) } } : EMPTY;
}
export function getReview() { if (!cache) cache = load(); return cache; }
function save(next) {
  cache = next;
  lsSetJSON(KEY, next);
  subs.forEach((f) => f());
}
const reload = () => { cache = null; subs.forEach((f) => f()); };
// la sincronització ha escrit dades del compte (o les ha esborrat en sortir)
if (typeof window !== 'undefined') window.addEventListener('am-remote', reload);
export function useReview() {
  return useSyncExternalStore((f) => { subs.add(f); return () => subs.delete(f); }, getReview, () => EMPTY);
}

/**
 * Apunta un intent d'un exercici (comprovació, pràctica, tipus examen o simulacre).
 * review: true quan l'intent és dins d'una sessió de repàs (compta per a la ratxa).
 */
export function recordReview(k, id, correct, { seed, review = false, now = Date.now() } = {}) {
  if (correct == null || !k || !id) return;
  const where = parseId(id, seed), key = cardId(where);
  const st = getReview();
  const cs = st.cards[k] || {};
  const nx = nextState(cs[key] || null, !!correct, now, where);
  if (nx === null && !cs[key] && !review) return;
  const cards = { ...st.cards, [k]: { ...cs } };
  if (nx === 'mastered' || nx === null) delete cards[k][key]; else cards[k][key] = nx;
  if (!Object.keys(cards[k]).length) delete cards[k];
  const today = dayOf(now);
  const days = review && !st.stats.days.includes(today) ? [...st.stats.days, today].slice(-60) : st.stats.days;
  const done = review ? { d: today, n: (st.stats.done?.d === today ? st.stats.done.n : 0) + 1 } : st.stats.done;
  save({ cards, stats: { ...st.stats, days, done, mastered: st.stats.mastered + (nx === 'mastered' ? 1 : 0) } });
}

/** Treu una targeta que ja no es pot mostrar (l'exercici ha desaparegut del curs). */
export function dropCard(k, id) {
  const st = getReview();
  if (!st.cards[k] || !st.cards[k][id]) return;
  const cards = { ...st.cards, [k]: { ...st.cards[k] } };
  delete cards[k][id];
  save({ ...st, cards });
}

/** Quantes en toquen avui per assignatura: { k: n }. */
export function dueCounts(st, now = Date.now()) {
  return Object.fromEntries(Object.entries(st.cards).map(([k, cs]) => [k, Object.values(cs).filter((c) => isDue(c, now)).length]).filter(([, n]) => n));
}
/** Exercicis repassats avui (per al límit diari del pla gratuït). */
export const reviewedToday = (st, now = Date.now()) => (st.stats.done?.d === dayOf(now) ? st.stats.done.n : 0);
