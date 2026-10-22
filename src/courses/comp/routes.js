import { TABS, SECTION_TAB } from './content/index.js';

/** Ruta del curs i adreça de cada pestanya o secció (les claus de l'original). */
export const BASE = '/computadors';
export const pathOf = (key) => (!key || key === 'inici' ? BASE : BASE + '/' + key);
export const isKey = (key) => TABS.includes(key) || Object.prototype.hasOwnProperty.call(SECTION_TAB, key);
/** Pestanya activa d'una clau: una pestanya o la pestanya on viu la secció. */
export const tabOf = (key) => (!key ? 'inici' : TABS.includes(key) ? key : SECTION_TAB[key]);
