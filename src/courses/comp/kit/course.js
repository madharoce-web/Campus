/**
 * Computadors CP1 en la plantilla d'assignatura (src/courses/_kit; vegeu docs/PLANTILLA.md).
 * Els laboratoris, el seu context i els tipus d'exercici propis s'afegeixen a ../index.jsx.
 */
import toc from './toc.js';
import t3 from './t3/toc.js';

const LOAD = {
  t1: () => import('./units/t1.js'),
  t21: () => import('./units/t21.js'),
  t22: () => import('./units/t22.js'),
  t3: () => import('./t3/unit.js'),
};

// T1–T2.2 vénen de la versió anterior (tools/kit-import/comp.mjs); el T3 s'ha escrit per a la plantilla
export const units = [...toc, t3].map((u) => ({ ...u, load: LOAD[u.id] }));

/** Adreces de la versió anterior: /computadors/t21, /computadors/b-conv, /exer, /prac, /exam. */
function legacy(tab) {
  const base = '/computadors';
  if (tab === 'exer' || tab === 'prac') return base + '/practica';
  if (tab === 'exam') return base + '/simulacre';
  if (units.some((u) => u.id === tab)) return base + '/temari/' + tab;
  for (const u of units) if (u.sections.some((s) => s.id === tab)) return base + '/temari/' + u.id + '#' + tab;
  return null;
}

/** Progrés de la versió anterior: notes dels simulacres (uda-computadors-cp1-v1). */
function migrate({ lsJSON }) {
  const old = lsJSON('uda-computadors-cp1-v1', null);
  const hist = old && Array.isArray(old.hist) ? old.hist : [];
  const exams = hist.filter((h) => h && Number.isFinite(+h.g)).map((h) => ({ at: Date.parse(h.d) || 0, min: 90, mark: +h.g, n: 19 }));
  return { exams };
}

export default {
  k: 'comp',
  path: '/computadors',
  title: ['Computadors CP1', 'Computadores CP1', 'Computers CP1'],
  sub: ['Iniciació als Computadors', 'Iniciación a los Computadores', 'Introduction to Computers'],
  summary: [
    "Introducció als computadors, representació de la informació, formats multimèdia i àlgebra de Boole. Cada tema té la lliçó, laboratoris per experimentar, exercicis resolts pas a pas, pràctica generada sense fi i el simulacre amb el format del CP1.",
    'Introducción a los computadores, representación de la información, formatos multimedia y álgebra de Boole. Cada tema tiene la lección, laboratorios para experimentar, ejercicios resueltos paso a paso, práctica generada sin fin y el simulacro con el formato del CP1.',
    'Introduction to computers, data representation, multimedia formats and Boolean algebra. Each unit has the lesson, labs to experiment with, exercises solved step by step, endless generated practice and the mock exam in the CP1 format.',
  ],
  units,
  bank: () => import('./bank.js'),
  methods: () => import('./methods.js'),
  formulas: () => import('./formulas.js'),
  legacy,
  migrate,
};
