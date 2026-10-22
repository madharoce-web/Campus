import { Z } from './engine/z.js';
import { newSeed } from './engine/seed.js';

/**
 * Banc d'exercicis: estat i generació (bkMake, bkNew i bkCheck de l'original), sense DOM.
 * Cada exercici es desa com { uid, t, lv, i, seed, s }: tema, nivell, plantilla (índex dins de
 * BKT[t].lv[lv]) i llavor. L'enunciat es torna a generar amb la llavor en l'idioma de la pàgina
 * (el mateix exercici amb els mateixos nombres). `s` són les respostes i l'estat de la targeta.
 */
export const BK0 = { t: 'conj', lv: 1, n: 6, uid: 0, items: [] };

/** Instància d'un exercici (enunciat, solució, resposta) en l'idioma del contingut C. */
const cache = new Map();
export function bkInst(C, it) {
  const key = [C.lang, it.t, it.lv, it.i, it.seed].join('|');
  if (cache.has(key)) return cache.get(key);
  let I = null;
  try { I = C.bkSeeded(it.seed, () => C.BKT[it.t].lv[it.lv][it.i].g()); } catch (e) { console.error(e); }
  cache.set(key, I);
  if (cache.size > 200) cache.delete(cache.keys().next().value);
  return I;
}

/** Un exercici nou d'una plantilla: fins a sis llavors, fins que la plantilla en genera un. */
export function bkMake(C, t, lv, i, uid) {
  for (let tries = 0; tries < 6; tries++) {
    const it = { uid, t, lv, i, seed: newSeed(), s: { v: {} } };
    const I = bkInst(C, it);
    if (I) {
      if (I.a && I.a.k === 'mc') it.s.ord = Z.shuffle(I.a.o.map((_, j) => j));
      return it;
    }
  }
  return null;
}

/** Tanda nova amb el tema, el nivell i la mida de bk (barreja les plantilles). */
export function bkNew(C, bk) {
  const topics = bk.t === 'mix' ? C.BKORD : [bk.t];
  let pool = []; topics.forEach((t) => (C.BKT[t].lv[bk.lv] || []).forEach((tp, i) => pool.push([t, i])));
  pool = Z.shuffle(pool);
  const items = []; let uid = bk.uid;
  for (let k = 0; items.length < bk.n && k < bk.n * 3; k++) { const [t, i] = pool[k % pool.length]; const it = bkMake(C, t, bk.lv, i, ++uid); if (it) items.push(it); }
  return { ...bk, uid, items };
}

/** Tipus d'exercici de la selecció. */
export const bkCount = (C, bk) => (bk.t === 'mix' ? C.BKORD : [bk.t]).reduce((a, t) => a + (C.BKT[t].lv[bk.lv] || []).length, 0);

/** Comprova la resposta: torna el nou estat de la targeta (warn si en falta alguna). */
export function bkCheck(C, I, s) {
  const a = I.a;
  if (a.k === 'mc') return s;
  let ok, res;
  if (a.k === 'tf') {
    if (a.items.some((_, j) => s.v[j] == null)) return { ...s, warn: true };
    ok = a.items.every((x, j) => s.v[j] === x.v);
  } else if (a.k === 'multi') {
    if (a.f.some((f, j) => s.v[j] == null || (f.k !== 'tf' && String(s.v[j]).trim() === ''))) return { ...s, warn: true };
    res = a.f.map((f, j) => (f.k === 'tf' ? s.v[j] === f.v : !!C.bkOk(f.k, s.v[j], f.v, f)));
    ok = res.every(Boolean);
  } else {
    const r = C.bkOk(a.k, s.v[0], a.v, a); if (r === null) return { ...s, warn: true };
    ok = r;
  }
  return { ...s, ...(res ? { res } : null), ok, done: true, warn: false, sol: ok ? s.sol : true };
}
