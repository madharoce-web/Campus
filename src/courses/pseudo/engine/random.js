/** Atzar: enters, elecció i barreja (com a l'original). */
export const rnd = (n) => Math.floor(Math.random() * n);
export const pick = (a) => a[rnd(a.length)];
export const shuffle = (a) => {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) { const j = rnd(i + 1); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
};
/** Barreja la bona amb les dolentes: { opts, gi } (gi: posició de la bona). */
export function shuffled(good, bads) {
  const all = shuffle([good].concat(bads));
  return { opts: all, gi: all.indexOf(good) };
}
