/**
 * Principis d'economia en la plantilla d'assignatura (src/courses/_kit; vegeu docs/PLANTILLA.md).
 * Els laboratoris i el seu context s'afegeixen a ../index.jsx (són components).
 */
import toc from './toc.js';

const LOAD = {
  t1: () => import('./units/t1.js'),
  t2: () => import('./units/t2.js'),
  t3: () => import('./units/t3.js'),
};

export const units = toc.map((u) => ({ ...u, load: LOAD[u.id] }));

/** Adreces de la versió anterior: /economia/t2, /economia/prac, /economia/<àncora>. */
function legacy(tab, rest, hash) {
  const base = '/economia';
  const h = decodeURIComponent((hash || '').replace(/^#/, ''));
  if (tab === 'prac') return base + '/practica';
  const unit = units.find((u) => u.id === tab);
  const find = (id) => {
    for (const u of units) {
      const s = u.sections.find((x) => x.orig === id);
      if (s) return base + '/temari/' + u.id + '#' + s.id;
    }
    return null;
  };
  if (unit) return (h && find(h)) || base + '/temari/' + unit.id;
  return find(tab);
}

/** Progrés de la versió anterior: exercicis resolts de la pràctica (eco-prac). */
function migrate({ lsJSON }) {
  const old = lsJSON('eco-prac', null);
  const practice = {};
  if (old && old.done && typeof old.done === 'object') {
    for (const [id, ok] of Object.entries(old.done)) if (ok) practice[id] = { ok: true, at: 0 };
  }
  return { practice };
}

export default {
  k: 'eco',
  path: '/economia',
  title: ["Principis d'economia", 'Principios de economía'],
  sub: ["Principis d'economia i empresa", 'Principios de economía y empresa'],
  summary: [
    "Conceptes bàsics, demanda, oferta i mercat, i magnituds agregades. Cada tema té la lliçó en dos modes (directe o explicat), preguntes de comprovació, pràctica per nivells i el formulari sempre a mà.",
    'Conceptos básicos, demanda, oferta y mercado, y magnitudes agregadas. Cada tema tiene la lección en dos modos (directo o explicado), preguntas de comprobación, práctica por niveles y el formulario siempre a mano.',
  ],
  units,
  bank: () => import('./bank.js'),
  formulas: () => import('./formulas.js'),
  legacy,
  migrate,
};
