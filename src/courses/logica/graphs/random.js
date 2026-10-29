/**
 * Grafs aleatoris amb llavor (rng de _kit/bank.js), per als laboratoris i els exercicis generats.
 * Tots tornen { G, pos } amb un dibuix llegible: vèrtexs en cercle i, si cal, sense costats repetits.
 */
import { graph, isConnected, sameEdge, eulerInfo, degrees } from './model.js';
import { circle } from './svg.js';

export const LETTERS = 'ABCDEFGHIJ'.split('');

/** Graf simple i connex de n vèrtexs i m costats (n − 1 ≤ m ≤ n(n − 1)/2); pesos entre wmin i wmax si es demanen. */
export function connected(rng, n, m, { weights = null, names = LETTERS, w = 320, h = 230 } = {}) {
  const V = names.slice(0, n), E = [];
  const has = (a, b) => E.some((e) => sameEdge({ dir: false }, e, [a, b]));
  // primer un arbre generador aleatori; després costats que no hi siguin, preferint vèrtexs propers al cercle
  const order = rng.shuffle(V);
  for (let i = 1; i < n; i++) E.push([order[i], order[rng.int(Math.max(0, i - 2), i - 1)]]);
  const pairs = [];
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (!has(V[i], V[j])) pairs.push([V[i], V[j], Math.min(j - i, n - (j - i))]);
  // una clau aleatòria fixa per parell (no una comparació aleatòria: el resultat dependria de l'algorisme
  // d'ordenació del navegador i la mateixa llavor no donaria el mateix graf a tot arreu)
  const near = pairs.map((q) => [q, q[2] + rng() * 2.2]).sort((x, y) => x[1] - y[1]).map((x) => x[0]);
  for (const [a, b] of near) { if (E.length >= m) break; E.push([a, b]); }
  for (const e of E) e.sort((x, y) => V.indexOf(x) - V.indexOf(y));
  E.sort((x, y) => V.indexOf(x[0]) - V.indexOf(y[0]) || V.indexOf(x[1]) - V.indexOf(y[1]));
  if (weights) for (const e of E) e[2] = rng.int(weights[0], weights[1]);
  return { G: graph(V, E), pos: circle(V, { w, h }) };
}

/** Graf connex amb exactament k vèrtexs de valència senar (k = 0: eulerià; 2: semieulerià; 4: cap dels dos). */
export function withOdd(rng, n, k, opts = {}) {
  for (let t = 0; t < 400; t++) {
    const g = connected(rng, n, rng.int(n + 1, Math.min(n + 4, (n * (n - 1)) / 2)), opts);
    if (eulerInfo(g.G).odd.length === k && isConnected(g.G)) return g;
  }
  throw new Error('withOdd');
}

/** Graf dirigit amb m arcs (sense bucles ni arcs repetits). */
export function directed(rng, n, m, { names = LETTERS, w = 320, h = 230 } = {}) {
  const V = names.slice(0, n), E = [];
  while (E.length < m) {
    const a = rng.pick(V), b = rng.pick(V);
    if (a !== b && !E.some((e) => e[0] === a && e[1] === b)) E.push([a, b]);
  }
  return { G: graph(V, E, true), pos: circle(V, { w, h }) };
}

/** Projecte aleatori de n tasques (lletres), amb durades d'1 a 9 i dependències cap enrere. */
export function project(rng, n) {
  const ids = LETTERS.slice(0, n), tasks = [];
  ids.forEach((id, i) => {
    const pre = i < 2 ? [] : rng.shuffle(ids.slice(Math.max(0, i - 4), i)).slice(0, rng.int(1, 2)).sort();
    tasks.push({ id, d: rng.int(1, 9), pre });
  });
  return tasks;
}

export const sumDeg = (G) => Object.values(degrees(G)).reduce((a, b) => a + b, 0);
