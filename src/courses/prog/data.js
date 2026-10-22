/* Metadades del curs: pàgines, setmanes, eines i exercicis (de la versió original). */
import META from './data/meta.json';

export const PAGES = META.pages;
export const PG = Object.fromEntries(PAGES.map((p) => [p.id, p]));
export const WEEKS = META.weeks;
export const WEEK_NUMS = Object.keys(WEEKS).map(Number);
export const TOOLS = META.tools;
export const EX = META.ex;
export const pagesOf = (w) => PAGES.filter((p) => p.wk === w);

/** Text bilingüe {ca, es} de les dades (com T() de l'original). */
export const tx = (o, lang) => (o == null ? '' : typeof o === 'string' ? o : (lang === 'es' ? (o.es || o.ca) : o.ca));

/** Contingut de cada pàgina (un fragment per pàgina i idioma, carregat sota demanda). */
const FILES = import.meta.glob('./data/pages/*.json', { import: 'default' });
export function loadPage(lang, id) {
  const f = FILES[`./data/pages/${lang}-${id}.json`] || FILES[`./data/pages/ca-${id}.json`];
  return f ? f() : Promise.resolve(null);
}
