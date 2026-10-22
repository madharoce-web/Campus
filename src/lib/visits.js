import { lsGet, lsSet } from './storage.js';

/** Darrer accés a cada curs (per al tauler i l'ordenació per darrer accés). */
export function recordVisit(course) {
  lsSet('sem1-visit-' + course, String(Date.now()));
}
export function visitOf(course) {
  const v = +lsGet('sem1-visit-' + course);
  return Number.isFinite(v) && v > 0 ? v : 0;
}
