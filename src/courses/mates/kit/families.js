/**
 * Exercicis generats de Matemàtiques en la plantilla: els generadors d'abans, tal qual, com a famílies.
 *   mb-<tema>-<nivell>-<plantilla>  banc per nivells (tipus mbank): cada plantilla del banc antic
 *   mp-<tipus>                      pràctica ràpida (tipus mprac): Venn, Hasse, classes mòdul n…
 * I els models d'examen (simulacre amb el format del CP, difícil i extrem) com a formats (tipus mexam).
 * Els enunciats es tornen a generar amb la llavor en l'idioma de la pàgina (vegeu types.jsx).
 */
import { getContent } from '../content/index.js';
import { mdToMk } from './mtex.js';

const L3 = (ca, es, en) => [ca, es, en];
// tema del banc antic → tema de la plantilla
const UNIT = { conj: 'conj', rel: 'rel', hasse: 'rel', nomb: 'nomb', ind: 'nomb', cx: 'cx', arr: 'cx', mat: 'mat', det: 'det' };
const LEVEL = { 1: 'easy', 2: 'exam', 3: 'hard' };
const MIN = { 1: 6, 2: 12, 3: 18 };

const C = { ca: getContent('ca'), es: getContent('es') };

/** Banc per nivells: una família per plantilla. */
export const bankFamilies = () => C.ca.BKORD.flatMap((t) => Object.keys(C.ca.BKT[t].lv).flatMap((lv) => C.ca.BKT[t].lv[lv].map((tp, i) => {
  const title = [C.ca.BKT[t].n() + ' · ' + tp.n(), C.es.BKT[t].n() + ' · ' + C.es.BKT[t].lv[lv][i].n()];
  return { id: `mb-${t}-${lv}-${i}`, unit: UNIT[t], level: LEVEL[lv], gen: () => ({ type: 'mbank', t, lv: +lv, i, title, min: MIN[lv] }) };
})));

/** Pràctica ràpida: els deu tipus d'exercici curt (interactius: no entren al simulacre). */
const PRAC_UNIT = { comp: 'conj', buit: 'conj', venn: 'conj', ident: 'conj', rel: 'rel', mod: 'rel', hasse: 'rel', num: 'nomb', cx: 'cx', ind: 'nomb' };
export const pracFamilies = () => C.ca.PRK().map(([k, n], j) => ({
  id: 'mp-' + k, unit: PRAC_UNIT[k], level: 'easy',
  gen: () => ({ type: 'mprac', k, title: [n, C.es.PRK()[j][1]], examOk: false, min: 3 }),
}));

/** Models d'examen: { id, t, desc, units, min, build(seed) → exercicis amb punts }. */
const UNITS_OF = { 0: 'conj', 1: 'conj', 2: 'rel', 3: 'rel', 4: 'cx', 5: 'nomb', 6: 'nomb' };
const EXM = { ca: C.ca.EXM(), es: C.es.EXM() };
export const formats = ['cp', 'hard', 'ext'].map((mode) => ({
  id: mode,
  t: mode === 'cp' ? L3('Com el CP', 'Como el CP', 'Like the CP') : [EXM.ca[mode].n, EXM.es[mode].n],
  desc: [mdToMk(EXM.ca[mode].d), mdToMk(EXM.es[mode].d)],
  units: ['conj', 'rel', 'nomb', 'cx'],
  min: EXM.ca[mode].min,
  build: (seed) => {
    const es = C.es.bkSeeded(seed, () => C.es.exBuild(mode));
    return C.ca.bkSeeded(seed, () => C.ca.exBuild(mode)).map((e, i) => ({
      id: 'mx-' + mode + '-' + i, type: 'mexam', mode, i, seed, unit: UNITS_OF[i] || 'conj', level: 'exam',
      title: [e.t(), es[i].t()], pts: e.parts.reduce((a, p) => a + p.pts, 0),
    }));
  },
}));
