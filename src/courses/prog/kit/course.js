/**
 * Iniciació a la Programació en la plantilla d'assignatura (src/courses/_kit; vegeu docs/PLANTILLA.md):
 * la teoria i les pràctiques d'abans, el pseudocodi (exercicis amb intèrpret, preguntes curtes, xuleta)
 * i el C++ a contrarellotge (exercicis amb proves, pati) en una sola assignatura.
 * Els laboratoris, el codi executable i els tipus d'exercici propis s'afegeixen a ../index.jsx.
 */
import toc from './toc.js';

const LOAD = Object.fromEntries(toc.map((u) => [u.id, () => import(`./units/${u.id}.js`)]));
export const units = toc.map((u) => ({ ...u, load: LOAD[u.id] }));

/** Adreces de la versió anterior: /programacio/s3, /programacio/s3/s3-2, /programacio#s3/s3-2, /programacio/progres. */
function legacy(tab, rest = []) {
  const base = '/programacio';
  // rest: els trossos de l'adreça (el primer és tab); des del # arriba «s3/s3-2»
  const [page, anchor] = tab.includes('/') ? tab.split('/') : [tab, rest[1]];
  if (page === 'progres' || page === 'curs') return base;
  if (units.some((u) => u.id === page)) return base + '/temari/' + page + (anchor ? '#' + anchor : '');
  for (const u of units) if (u.sections.some((s) => s.id === page)) return base + '/temari/' + u.id + '#' + page;
  return null;
}

/**
 * Progrés de les tres webs d'abans: pàgines fetes (ip-curs-v1), exercicis de C++ resolts
 * (cpp-contrarellotge-v1), exercicis de pseudocodi i simulacres (uda-pseudo-v1).
 */
function migrate({ lsJSON }) {
  const obj = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v : {});
  const read = {}, practice = {};
  const pages = obj(obj(lsJSON('ip-curs-v1', {})).done);
  for (const u of units) if (pages[u.id]) u.sections.forEach((s) => { read[s.id] = 1; });
  const cpp = obj(obj(lsJSON('cpp-contrarellotge-v1', {})).prog);
  for (const [id, p] of Object.entries(cpp)) if (p && p.solved) practice['cpp-' + id] = { ok: true, at: 0 };
  const ps = obj(lsJSON('uda-pseudo-v1', {}));
  for (const [id, ok] of Object.entries(obj(ps.done))) if (ok) practice['ps-' + id] = { ok: true, at: 0 };
  const exams = (Array.isArray(ps.exams) ? ps.exams : []).filter((e) => e && Number.isFinite(+e.n)).map((e) => ({ at: 0, min: 90, mark: +e.n, n: 11 }));
  return { read, practice, exams };
}

export default {
  k: 'prog',
  path: '/programacio',
  title: ['Iniciació a la Programació', 'Iniciación a la Programación', 'Introduction to Programming'],
  sub: ['Programació · teoria, pseudocodi i C++', 'Programación · teoría, pseudocódigo y C++', 'Programming · theory, pseudocode and C++'],
  summary: [
    "De què és programar a les funcions en C++: la teoria setmana a setmana, les pràctiques amb codi que s'executa al navegador (Clang real), el pseudocodi del curs amb un intèrpret que en revisa la notació, 71 exercicis de C++ amb proves ocultes com el CodeRunner, preguntes curtes, la xuleta i els simulacres del CP1 de pseudocodi i de C++.",
    'De qué es programar a las funciones en C++: la teoría semana a semana, las prácticas con código que se ejecuta en el navegador (Clang real), el pseudocódigo del curso con un intérprete que revisa su notación, 71 ejercicios de C++ con pruebas ocultas como el CodeRunner, preguntas cortas, la chuleta y los simulacros del CP1 de pseudocódigo y de C++.',
    'From what programming is to functions in C++: the theory week by week, the practical sessions with code that runs in the browser (real Clang), the course pseudocode with an interpreter that checks its notation, 71 C++ exercises with hidden tests like CodeRunner, short questions, the cheat sheet and the CP1 mock exams for pseudocode and C++.',
  ],
  units,
  bank: () => import('./bank.js'),
  formulas: () => import('./formulas.js'),
  methods: () => import('./methods.js'),
  legacy,
  migrate,
};
