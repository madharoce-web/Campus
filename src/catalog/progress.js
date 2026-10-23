/**
 * Progrés de cada assignatura per al tauler, llegit de l'estat que ja desen els cursos.
 * Els totals són fixos per no carregar les dades dels cursos al tauler; la prova
 * tests/e2e/progress.spec.js comprova que coincideixen amb les dades.
 * Mates i Computadors no desen el progrés entre visites (null: «sense seguiment»).
 */
import { lsJSON } from '../lib/storage.js';

export const TOTALS = { logica: 46, eco: 43, progPages: 10, cpp: 71, pseudo: 29 };

const obj = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v : {});
const count = (o) => Object.values(obj(o)).filter(Boolean).length;

/** { done, total } de cada targeta del tauler; null si el curs no en desa. */
export const PROGRESS = {
  logica: () => ({ done: count(lsJSON('lx-done', {})), total: TOTALS.logica }),
  eco: () => ({ done: count(obj(lsJSON('eco-prac', {})).done), total: TOTALS.eco }),
  prog: () => {
    const pages = count(obj(lsJSON('ip-curs-v1', {})).done);
    const cpp = Object.values(obj(obj(lsJSON('cpp-contrarellotge-v1', {})).prog)).filter((p) => p && p.solved).length;
    const pseudo = count(obj(lsJSON('uda-pseudo-v1', {})).done);
    return { done: pages + cpp + pseudo, total: TOTALS.progPages + TOTALS.cpp + TOTALS.pseudo };
  },
  mates: () => null,
  comp: () => null,
};

/** Progrés d'una targeta, amb el percentatge; null si no se'n desa. */
export function progressOf(k) {
  const p = PROGRESS[k]?.();
  if (!p) return null;
  const done = Math.min(p.done, p.total);
  return { done, total: p.total, pct: p.total ? Math.round((done / p.total) * 100) : 0 };
}
