import { getContent } from './content/index.js';

/** Pestanyes de l'original (les claus són ara rutes: /mates/<pestanya>). */
export const TABS = ['inici', 'conj', 'rel', 'nomb', 'cx', 'mat', 'det', 'exer', 'banc', 'exam', 'prac'];

/** Pestanya on viu cada secció de teoria (c-conj → conj): /mates/<secció> obre la pestanya i hi baixa. */
export const SECTION_TAB = (() => {
  const { TH } = getContent('ca');
  const m = {};
  Object.keys(TH).forEach((k) => TH[k].forEach((s) => { m[s.id] = k; }));
  return m;
})();

export const BASE = '/mates';
export const pathOf = (key) => (!key || key === 'inici' ? BASE : BASE + '/' + key);
export const isKey = (key) => TABS.includes(key) || Object.prototype.hasOwnProperty.call(SECTION_TAB, key);
/** Pestanya activa d'una clau: una pestanya o la pestanya on viu la secció. */
export const tabOf = (key) => (!key ? 'inici' : TABS.includes(key) ? key : SECTION_TAB[key]);
