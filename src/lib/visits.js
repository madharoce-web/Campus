import { lsGet, lsJSON, lsSet, lsSetJSON } from './storage.js';

const DAYS_KEY = 'sem1-days';
const pad = (n) => String(n).padStart(2, '0');
const isoDay = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/** Darrer accés a cada curs (per al tauler i l'ordenació per darrer accés) i dia d'estudi. */
export function recordVisit(course) {
  lsSet('sem1-visit-' + course, String(Date.now()));
  const today = isoDay(new Date());
  const days = studyDays();
  if (days[days.length - 1] !== today) lsSetJSON(DAYS_KEY, [...days, today].slice(-400));
}

/** Dies (AAAA-MM-DD, en ordre) en què s'ha obert algun curs. */
export function studyDays() {
  const v = lsJSON(DAYS_KEY, []);
  return Array.isArray(v) ? v.filter((d) => typeof d === 'string') : [];
}

/** Dies seguits d'estudi fins avui (o fins ahir, si avui encara no s'ha estudiat). */
export function streakOf(days, now = new Date()) {
  const set = new Set(days);
  const d = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (!set.has(isoDay(d))) d.setDate(d.getDate() - 1);
  let n = 0;
  while (set.has(isoDay(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
export function visitOf(course) {
  const v = +lsGet('sem1-visit-' + course);
  return Number.isFinite(v) && v > 0 ? v : 0;
}

/** Darrer accés d'una targeta de curs (el curs i les pàgines que agrupa, `also`). */
export function cardVisitOf(card) {
  return Math.max(visitOf(card.k), ...(card.also || []).map(visitOf));
}

/** «fa 5 min», «ahir»…: Lx porta els textos now, min, h, d1 i d (amb %d). */
export function agoText(t, Lx) {
  if (!t) return null;
  const s = (Date.now() - t) / 1000, m = Math.floor(s / 60), h = Math.floor(m / 60), d = Math.floor(h / 24);
  if (m < 1) return Lx.now;
  if (m < 60) return Lx.min.replace('%d', m);
  if (h < 24) return Lx.h.replace('%d', h);
  if (d === 1) return Lx.d1;
  return Lx.d.replace('%d', d);
}
