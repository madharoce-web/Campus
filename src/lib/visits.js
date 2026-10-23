import { lsGet, lsSet } from './storage.js';

/** Darrer accés a cada curs (per al tauler i l'ordenació per darrer accés). */
export function recordVisit(course) {
  lsSet('sem1-visit-' + course, String(Date.now()));
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
