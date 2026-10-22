/**
 * Banc d'exercicis del C++ a contrarellotge (els mateixos de la versió original,
 * amb la setmana `wk` ja resolta) i dades derivades.
 */
import EX from '../data/exercises.json';
import WEEKS from '../data/weeks.json';

export { EX };
export const BY = Object.fromEntries(EX.map((x) => [x.id, x]));

/** Objectiu de temps (minuts) per nivell. */
export const TARGET = { 1: 5, 2: 10, 3: 15, 4: 15 };
export const TPL = '#include <iostream>\nusing namespace std;\n\nint main() {\n    \n    return 0;\n}\n';
export const LEVELS = [1, 2, 3, 4];
export const WEEK_NUMS = [2, 3, 4, 5, 6, 7];

/** Noms dels nivells en l'idioma actual. */
export const levelNames = (L) => ({ 1: L('Fàcil', 'Fácil'), 2: L('Mitjà', 'Medio'), 3: L('Difícil', 'Difícil'), 4: L('Extrem', 'Extremo') });

/** Nom curt de la setmana. */
export const weekName = (w, lang) => (WEEKS[w] ? WEEKS[w][lang === 'es' ? 'es' : 'ca'] : '');

/** Exercicis d'un nivell: primer els del professor. */
export const levelList = (lv) => EX.filter((x) => x.lv === lv).sort((a, b) => (a.src === b.src ? 0 : a.src === 'model' ? -1 : 1));

/** Primera frase de l'enunciat (per als exercicis sense títol). */
export function firstSentence(ex) {
  const p = (ex.body.find((b) => b.p) || {}).p || '';
  const t = p.replace(/\*\*|`/g, '');
  return t.length > 70 ? t.slice(0, 68) + '…' : t;
}
export const exName = (ex) => ex.title || firstSentence(ex);

export const isSolved = (prog, id) => !!(prog[id] && prog[id].solved);

/** Següent exercici per fer (mateix nivell i, si no n'hi ha, de nivells superiors). */
export function nextEx(ex, prog) {
  const list = levelList(ex.lv), i = list.findIndex((x) => x.id === ex.id);
  const after = list.slice(i + 1).concat(list.slice(0, i)).filter((x) => !isSolved(prog, x.id));
  return after[0] || EX.find((x) => x.lv > ex.lv && !isSolved(prog, x.id)) || null;
}

/** Tipus de simulacre. */
export const presets = (L) => ({
  quick: { n: L('Ràpid', 'Rápido'), d: L('2 preguntes: una de nivell mitjà i una de difícil.', '2 preguntas: una de nivel medio y una difícil.'), lv: [2, 3] },
  exam: { n: L('Com un examen', 'Como un examen'), d: L('4 preguntes: una de fàcil, dues de mitjanes i una de difícil.', '4 preguntas: una fácil, dos medias y una difícil.'), lv: [1, 2, 2, 3] },
  hard: { n: L('Exigent', 'Exigente'), d: L('3 preguntes: mitjana, difícil i extrema.', '3 preguntas: media, difícil y extrema.'), lv: [2, 3, 4] },
});
