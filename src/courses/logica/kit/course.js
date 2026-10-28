/**
 * Lògica i grafs en la plantilla d'assignatura (src/courses/_kit; vegeu docs/PLANTILLA.md).
 * Els laboratoris i el seu context s'afegeixen a ../index.jsx.
 */
import toc from './toc.js';
import { rngOf } from '../../_kit/bank.js';

const LOAD = Object.fromEntries(toc.map((u) => [u.id, () => import(`./units/${u.id}.js`)]));
export const units = toc.map((u) => ({ ...u, load: LOAD[u.id] }));

/** Apartat (o àncora de dins d'un apartat) → adreça del temari. */
function findAnchor(id) {
  for (const u of units) {
    const s = u.sections.find((x) => x.id === id || (x.aliases || []).includes(id));
    if (s) return '/logica/temari/' + u.id + '#' + id;
  }
  return null;
}

/** Adreces de la versió anterior: /logica/u5, /logica/grafs#…, /logica/xr, /logica/sim, /logica/<àncora>. */
function legacy(tab, rest, hash) {
  const base = '/logica';
  const h = decodeURIComponent((hash || '').replace(/^#/, ''));
  if (/^x[rabef]$/.test(tab)) return base + '/practica';
  if (tab === 'sim') return base + '/simulacre';
  if (tab === 'fs') return base;
  if (tab === 'logica') return base + '/temari/u0';
  if (tab === 'grafs') return (h && findAnchor(h)) || base + '/temari/g1';
  if (units.some((u) => u.id === tab)) return (h && findAnchor(h)) || base + '/temari/' + tab;
  return findAnchor(tab);
}

/** Progrés de la versió anterior: exercicis fets (lx-done) i simulacres (lx-sim-hist). */
function migrate({ lsJSON }) {
  const done = lsJSON('lx-done', null), hist = lsJSON('lx-sim-hist', null);
  const practice = {};
  if (done && typeof done === 'object') for (const [id, ok] of Object.entries(done)) if (ok) practice['lg-' + id] = { ok: true, at: 0 };
  const exams = Array.isArray(hist) ? hist.filter((h) => h && Number.isFinite(+h.g)).map((h) => ({ at: +h.d || 0, min: 90, mark: +h.g, n: 3 })) : [];
  return { practice, exams };
}

/** Models de control: [tipus d'exercici, pes en punts]. */
const L3 = (ca, es, en) => [ca, es, en];
const MODELS = [
  { id: 'cp1', t: L3('Control CP1 (proposicions)', 'Control CP1 (proposiciones)', 'CP1 test (propositional logic)'), units: ['u1', 'u2', 'u3'], slots: [['R', 5], ['A', 3], ['B', 2]],
    desc: L3('Com el control real: un raonament en CP0 (5 punts), una formalització (3) i una taula de veritat (2), en una hora i mitja.', 'Como el control real: un razonamiento en CP0 (5 puntos), una formalización (3) y una tabla de verdad (2), en una hora y media.', 'Like the real test: a CP0 argument (5 points), a formalisation (3) and a truth table (2), in an hour and a half.') },
  { id: 'cp2', t: L3('Control CP2 (predicats)', 'Control CP2 (predicados)', 'CP2 test (predicate logic)'), units: ['u3', 'u5', 'u8'], slots: [['R', 2], ['E', 4], ['F', 4]],
    desc: L3('Com el control real: un raonament (2 punts), una formalització en CP1 (4) i una resolució en CP1 (4), en una hora i mitja.', 'Como el control real: un razonamiento (2 puntos), una formalización en CP1 (4) y una resolución en CP1 (4), en una hora y media.', 'Like the real test: an argument (2 points), a CP1 formalisation (4) and a CP1 resolution (4), in an hour and a half.') },
];
export const formats = MODELS.map((M) => ({
  ...M, min: 90,
  build: (seed, bank) => {
    const r = rngOf(seed), used = new Set();
    return M.slots.map(([kind, pts]) => {
      const pool = (bank?.items || []).filter((x) => x.kind === kind && !used.has(x.id));
      const ex = r.pick(pool.length ? pool : (bank?.items || []).filter((x) => x.kind === kind));
      used.add(ex.id);
      return { ...ex, pts };
    });
  },
}));

export default {
  k: 'logica',
  path: '/logica',
  title: ['Lògica i grafs', 'Lógica y grafos', 'Logic and Graphs'],
  sub: ['Seminari Lògica i grafs', 'Seminario Lógica y grafos', 'Logic and Graphs Seminar'],
  summary: [
    'Lògica de proposicions i de predicats en deu temes, amb calculadores, laboratoris i els exercicis dels controls resolts pas a pas; i teoria de grafs: conceptes, camins, acoloriment, arbres i planificació de projectes.',
    'Lógica de proposiciones y de predicados en diez temas, con calculadoras, laboratorios y los ejercicios de los controles resueltos paso a paso; y teoría de grafos: conceptos, caminos, coloreado, árboles y planificación de proyectos.',
    'Propositional and predicate logic in ten units, with calculators, labs and past test exercises solved step by step; plus graph theory: concepts, paths, colouring, trees and project planning.',
  ],
  units,
  bank: () => import('./bank.js'),
  formulas: () => import('./formulas.js'),
  methods: () => import('./methods.js'),
  formats,
  // les taules, els arbres i les calculadores d'abans tenen els estils dins de .doc
  legacyClass: 'doc',
  legacy,
  migrate,
};
