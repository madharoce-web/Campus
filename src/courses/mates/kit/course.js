/**
 * Teoria Mates CP1 en la plantilla d'assignatura (src/courses/_kit; vegeu docs/PLANTILLA.md).
 * Els laboratoris, el seu context i els tipus d'exercici propis s'afegeixen a ../index.jsx.
 */
import toc from './toc.js';

const LOAD = Object.fromEntries(toc.map((u) => [u.id, () => import(`./units/${u.id}.js`)]));
export const units = toc.map((u) => ({ ...u, load: LOAD[u.id] }));

/** Adreces de la versió anterior: /mates/conj, /mates/c-desc (apartat), /mates/banc, /mates#exam… */
function legacy(tab) {
  const base = '/mates';
  if (tab === 'inici') return base;
  if (tab === 'exer' || tab === 'banc' || tab === 'prac') return base + '/practica';
  if (tab === 'exam') return base + '/simulacre';
  if (units.some((u) => u.id === tab)) return base + '/temari/' + tab;
  for (const u of units) if (u.sections.some((s) => s.id === tab)) return base + '/temari/' + u.id + '#' + tab;
  return null;
}

/** Progrés de la versió anterior: el simulacre lliurat i puntuat (teoria-mates-exam-v2). */
const EXMIN = { cp: 90, hard: 105, ext: 120 };
function migrate({ lsJSON }) {
  const ex = lsJSON('teoria-mates-exam-v2', null);
  const sc = ex && ex.done && ex.sc && typeof ex.sc === 'object' ? Object.values(ex.sc).filter((x) => Number.isFinite(+x)) : [];
  const exams = sc.length ? [{ at: 0, min: EXMIN[ex.mode] || 90, mark: Math.round(sc.reduce((a, b) => a + +b, 0) * 100) / 100, n: 6 }] : [];
  return { exams };
}

export default {
  k: 'mates',
  path: '/mates',
  title: ['Teoria Mates CP1', 'Teoría Mates CP1', 'Maths Theory CP1'],
  sub: ['Matemàtica Computacional', 'Matemática Computacional', 'Computational Mathematics'],
  summary: [
    'Conjunts i relacions, nombres reals, inducció i complexos, i matrius i determinants. Cada tema té la teoria de classe (i, en mode Explicat, el «Per entendre-ho»), laboratoris, exercicis resolts amb el formulari de l\'examen, un banc d\'exercicis per nivells que es generen sense fi i el simulacre amb el format del CP.',
    'Conjuntos y relaciones, números reales, inducción y complejos, y matrices y determinantes. Cada tema tiene la teoría de clase (y, en modo Explicado, el «Para entenderlo»), laboratorios, ejercicios resueltos con el formulario del examen, un banco de ejercicios por niveles que se generan sin fin y el simulacro con el formato del CP.',
    'Sets and relations, real numbers, induction and complex numbers, and matrices and determinants. Each unit has the class theory (and, in Explained mode, the «To understand it» boxes), labs, exercises solved with the exam formula sheet, an endless bank of generated exercises by level and the mock exam in the CP format.',
  ],
  units,
  bank: () => import('./bank.js'),
  methods: () => import('./methods.js'),
  formulas: () => import('./formulas.js'),
  legacy,
  migrate,
};
