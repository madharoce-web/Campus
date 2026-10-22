import { makeCore } from './core.js';
import { makeTheory } from './theory.js';
import { makeExercises } from './exercises.js';
import { makeGenerators } from './generators.js';
import { makeRng } from '../engine/rng.js';

/** Tot el contingut en un idioma (es construeix una sola vegada per idioma). */
const cache = {};
export function getContent(lang) {
  if (!cache[lang]) {
    const C = makeCore(lang);
    const G = makeGenerators(C, makeRng(1));
    cache[lang] = { C, ...makeTheory(C), ...makeExercises(C), PRK: G.PRK, EXBLK: G.EXBLK, prIsOK: G.prIsOK };
  }
  return cache[lang];
}

/** Pestanyes i seccions de teoria (les claus de l'original, que ara són rutes). */
export const TABS = ['inici', 't1', 't21', 't22', 'exer', 'prac', 'exam'];

/** Pestanya on viu cada secció de teoria (t1-info → t1). */
export const SECTION_TAB = (() => {
  const { TH } = getContent('ca');
  const m = {};
  Object.keys(TH).forEach((k) => TH[k].forEach((s) => { m[s.id] = k; }));
  return m;
})();

/* memòria petita per als exercicis generats (es tornen a construir en canviar d'idioma) */
const qcache = new Map();
function remember(key, make) {
  if (qcache.has(key)) return qcache.get(key);
  const v = make();
  qcache.set(key, v);
  if (qcache.size > 40) qcache.delete(qcache.keys().next().value);
  return v;
}

/**
 * Exercici de la pràctica a partir de la seva llavor: el mateix enunciat i els mateixos
 * nombres en qualsevol idioma. Retorna { q, seen } (seen: conceptes vistos després).
 */
export function practiceQuestion(lang, spec) {
  return remember(['pr', lang, spec.k, spec.lvl, spec.seed, spec.seen.join(',')].join('|'), () => {
    const G = makeGenerators(getContent(lang).C, makeRng(spec.seed), spec.seen.slice());
    const q = G.GEN[spec.k](spec.lvl === 'dur');
    return { q, seen: G.seen };
  });
}

/** Preguntes d'un simulacre a partir de la seva llavor. */
export function examQuestions(lang, seed) {
  return remember(['ex', lang, seed].join('|'), () => makeGenerators(getContent(lang).C, makeRng(seed)).exBuild());
}
