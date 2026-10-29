/**
 * Grafs amb nom que surten a les lliçons, als laboratoris i als exercicis, amb el seu dibuix.
 * E s'escriu com a text: 'AB AC BC' (costats), 'AB4 AC2' (amb pesos), 'DD' (bucle).
 * Les posicions són en una quadrícula de 0 a 10 (vegeu grid a svg.js).
 */
import { graph } from './model.js';
import { grid } from './svg.js';

export function edges(s) {
  return s.trim().split(/\s+/).filter(Boolean).map((t) => {
    const m = /^(.)(.)(\d+)?$/u.exec(t);
    return m[3] != null ? [m[1], m[2], +m[3]] : [m[1], m[2]];
  });
}
export const make = (V, E, dir = false) => graph(typeof V === 'string' ? V.split('') : V, edges(E), dir);
const P = (spec, o) => grid(spec, o);

/** Complet Kn amb vèrtexs 1..n o les lletres que es donin. */
export function complete(V) {
  const E = [];
  for (let i = 0; i < V.length; i++) for (let j = i + 1; j < V.length; j++) E.push([V[i], V[j]]);
  return graph(V, E);
}
export function cycle(V) { return graph(V, V.map((v, i) => [v, V[(i + 1) % V.length]])); }
export function pathG(V) { return graph(V, V.slice(1).map((v, i) => [V[i], v])); }
export function bipartiteK(A, B) { return graph([...A, ...B], A.flatMap((a) => B.map((b) => [a, b]))); }
export function wheel(V) { const [c, ...r] = V; return graph(V, [...r.map((v, i) => [v, r[(i + 1) % r.length]]), ...r.map((v) => [c, v])]); }

export const PRESETS = {
  // els set ponts de Königsberg: A i C, les ribes; B, l'illa; D, la part de l'est
  konigsberg: { G: make('ABCD', 'AB AB BC BC AD BD CD'), pos: P({ A: [5, 0], B: [3, 5], C: [5, 10], D: [10, 5] }) },
  // la «caseta»: es pot dibuixar sense aixecar el llapis començant per A o per B
  casa: { G: make('ABCDE', 'AB AC BD CD AD BC CE DE'), pos: P({ A: [1, 10], B: [9, 10], C: [1, 4], D: [9, 4], E: [5, 0] }) },
  sobre: { G: make('ABCDEF', 'AB BC CD DA AC BD AE EB'), pos: P({ A: [1, 3], B: [9, 3], C: [9, 10], D: [1, 10], E: [5, 0] }) },
  k4creu: { G: complete(['A', 'B', 'C', 'D']), pos: P({ A: [0, 0], B: [10, 0], C: [0, 10], D: [10, 10] }) },
  k5: { G: complete(['A', 'B', 'C', 'D', 'E']), pos: null },
  k33: { G: bipartiteK(['A', 'B', 'C'], ['X', 'Y', 'Z']), pos: P({ A: [1, 1], B: [5, 1], C: [9, 1], X: [1, 9], Y: [5, 9], Z: [9, 9] }) },
  // cub Q3 dibuixat enredat (per al laboratori de planaritat) i ben dibuixat
  cubEnredat: { G: make('ABCDEFGH', 'AB BC CD DA EF FG GH HE AE BF CG DH'), pos: P({ A: [0, 0], B: [10, 0], C: [10, 10], D: [0, 10], E: [10, 6], F: [0, 6], G: [0, 3], H: [10, 3] }) },
  cub: { G: make('ABCDEFGH', 'AB BC CD DA EF FG GH HE AE BF CG DH'), pos: P({ A: [0, 0], B: [10, 0], C: [10, 10], D: [0, 10], E: [3, 3], F: [7, 3], G: [7, 7], H: [3, 7] }) },
  prisma: { G: make('ABCDEF', 'AB BC CA DE EF FD AD BE CF'), pos: P({ A: [5, 0], B: [0, 10], C: [10, 10], D: [5, 4], E: [3, 7.5], F: [7, 7.5] }) },
  prismaCreuat: { G: make('ABCDEF', 'AB BC CA DE EF FD AD BE CF'), pos: P({ A: [5, 0], B: [0, 10], C: [10, 10], D: [5, 6], E: [8, 4], F: [2, 4] }) },
  petersen: {
    G: make('ABCDEFGHIJ', 'AB BC CD DE EA AF BG CH DI EJ FH HJ JG GI IF'),
    pos: P({ A: [5, 0], B: [10, 3.7], C: [8.1, 10], D: [1.9, 10], E: [0, 3.7], F: [5, 2.8], G: [7.7, 4.6], H: [6.6, 7.7], I: [3.4, 7.7], J: [2.3, 4.6] }),
  },
  c5: { G: cycle(['A', 'B', 'C', 'D', 'E']), pos: null },
  w5: { G: wheel(['O', 'A', 'B', 'C', 'D', 'E']), pos: P({ O: [5, 5], A: [5, 0], B: [10, 3.8], C: [8, 10], D: [2, 10], E: [0, 3.8] }) },
  // mapa de cinc països (acoloriment)
  mapa: { G: make('ABCDE', 'AB AC BC BD CD CE DE AE'), pos: P({ A: [0, 2], B: [5, 0], C: [5, 5], D: [10, 5], E: [5, 10] }) },
  // graf ponderat de referència per a Dijkstra i els arbres generadors
  ciutats: {
    G: make('SABCDET', 'SA4 SB2 AB1 AC5 BC8 BD10 CD2 CE6 DE2 DT6 ET3'),
    pos: P({ S: [0, 5], A: [3, 0], B: [3, 10], C: [6, 3], D: [6.5, 9], E: [9, 4], T: [10, 10] }),
  },
  // digraf per a la connexió forta
  digraf: {
    G: make('ABCDEF', 'AB BC CA CD DE EF FD BE', true),
    pos: P({ A: [0, 0], B: [4, 0], C: [2, 6], D: [6, 6], E: [8, 0], F: [10, 6] }),
  },
};

/** Projecte de referència per al mètode C.P.M. (tasca, durada, immediatament anteriors). */
export const PROJECTE = [
  { id: 'A', d: 3, pre: [] },
  { id: 'B', d: 5, pre: [] },
  { id: 'C', d: 2, pre: ['A'] },
  { id: 'D', d: 4, pre: ['A', 'B'] },
  { id: 'E', d: 6, pre: ['B'] },
  { id: 'F', d: 3, pre: ['C', 'D'] },
  { id: 'G', d: 2, pre: ['D', 'E'] },
  { id: 'H', d: 4, pre: ['F', 'G'] },
];
