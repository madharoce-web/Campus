/**
 * Banc d'exercicis d'una assignatura: { items: [exercici], families: [família] }.
 * Una família genera exercicis nous amb una llavor: { id, unit, level, src?, basedOn?, gen(rng, seed) → exercici }.
 * Cada exercici: { id, unit, level:'easy'|'exam'|'hard', type, q, …, steps, src:'exam'|'new', srcName?, basedOn?, min?, pts? }
 */

/** Generador pseudoaleatori amb llavor (mulberry32): la mateixa llavor dona el mateix exercici. */
export function rngOf(seed) {
  let a = seed >>> 0;
  const r = () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  r.int = (lo, hi) => lo + Math.floor(r() * (hi - lo + 1));
  r.pick = (arr) => arr[Math.floor(r() * arr.length)];
  r.shuffle = (arr) => { const o = arr.slice(); for (let i = o.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [o[i], o[j]] = [o[j], o[i]]; } return o; };
  return r;
}

export const newSeed = () => Math.floor(Math.random() * 2 ** 31);

/** Exercici concret d'una família amb una llavor (l'id inclou la família, per al progrés). */
export function instance(fam, seed) {
  const ex = fam.gen(rngOf(seed), seed);
  return { unit: fam.unit, level: fam.level, src: fam.src || 'new', basedOn: fam.basedOn, ...ex, id: fam.id, seed, family: true };
}

/** Minuts estimats d'un exercici (per omplir un simulacre). */
export const minutesOf = (ex) => ex.min || { easy: 6, exam: 15, hard: 22 }[ex.level] || 12;

/** Tots els exercicis (amb una instància de cada família) que compleixen un filtre. */
export function allExercises(bank, seedOf = () => 1) {
  return [...(bank.items || []), ...(bank.families || []).map((f) => instance(f, seedOf(f)))];
}
