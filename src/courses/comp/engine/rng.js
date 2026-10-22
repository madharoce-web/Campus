/**
 * Aleatorietat amb llavor: el mateix exercici generat es pot tornar a construir
 * en l'altre idioma amb els mateixos nombres (mulberry32).
 */
export function makeRng(seed) {
  let a = seed >>> 0;
  const random = () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const rnd = n => Math.floor(random() * n);
  const pick = arr => arr[rnd(arr.length)];
  const shuffle = arr => { const r = arr.slice(); for (let i = r.length - 1; i > 0; i--) { const j = rnd(i + 1); [r[i], r[j]] = [r[j], r[i]]; } return r; };
  return { random, rnd, pick, shuffle };
}

/** Llavor nova per a un exercici o un examen. */
export const newSeed = () => Math.floor(Math.random() * 4294967296) >>> 0;
