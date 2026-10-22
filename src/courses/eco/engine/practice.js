import { parses } from './num.js';

/** Resposta buida d'un exercici de la pràctica. */
export function emptyAnswer(card) {
  if (card.tipus === 'num') return card.num.map(() => '');
  if (card.tipus === 'mc') return null;
  return card.items.map(() => null);
}

/**
 * Corregeix un exercici (com l'original). v: resposta (num: textos; mc: opció; multi: opció per ítem).
 * Retorna { marks, fb: { c: 'y'|'p'|'n', m: 'ok'|'part'|'ko'|'empty'|'choose' }, solved }.
 * marks: num → 'y'|'n'|null per fila; mc → { i, ok } o null; multi → 'y'|'n'|null per ítem.
 */
export function grade(card, v) {
  const A = card.a;
  let good = 0, total = 0, blank = false, marks;
  if (card.tipus === 'num') {
    marks = card.num.map((_, i) => {
      const c = parses(v[i] || '');
      total++;
      if (!c.length) { blank = true; return null; }
      const ok = c.some((x) => Math.abs(x - A.r[i]) <= A.t[i] + 1e-9);
      if (ok) good++;
      return ok ? 'y' : 'n';
    });
    if (blank && good === 0) return { marks, fb: { c: 'p', m: 'empty' }, solved: false };
  } else if (card.tipus === 'mc') {
    if (v === null || v === undefined) return { marks: null, fb: { c: 'p', m: 'choose' }, solved: false };
    total = 1;
    const ok = +v === A.c;
    if (ok) good = 1;
    marks = { i: v, ok };
  } else {
    marks = card.items.map((_, i) => {
      total++;
      if (v[i] === null || v[i] === undefined) { blank = true; return null; }
      const ok = +v[i] === A.c[i];
      if (ok) good++;
      return ok ? 'y' : 'n';
    });
    if (blank && good === 0) return { marks, fb: { c: 'p', m: 'choose' }, solved: false };
  }
  if (good === total) return { marks, fb: { c: 'y', m: 'ok' }, solved: true };
  if (good > 0) return { marks, fb: { c: 'p', m: 'part' }, solved: false };
  return { marks, fb: { c: 'n', m: 'ko' }, solved: false };
}

/** L'exercici o el títol es veu amb aquests filtres? */
export function visible(item, tema, niv) {
  const t = item.ex ? item.ex.tema : item.tema, n = item.ex ? item.ex.nivell : item.nivell;
  if (item.h === 2) return tema === 'all' || t === tema;
  return (tema === 'all' || t === tema) && (niv === 'all' || n === niv);
}

/** Identificadors (àncores) d'un element de la llista: títols, exercici i el seu títol. */
export const anchorsOf = (item) => (item.ex ? [item.ex.id, 'ex-' + item.ex.id] : [item.id]);
