/**
 * Motor de grafs de Lògica i grafs: funcions pures, sense DOM, provades a tests/e2e/grafs.spec.js.
 * Les fan servir les figures (svg.js), els laboratoris i els generadors d'exercicis.
 *
 * Un graf és { V: ['A', 'B', …], E: [['A', 'B'], ['B', 'C', 4], …], dir?: true }:
 *   - els vèrtexs són noms curts;
 *   - cada costat és [origen, destí, pes?]; un bucle és ['D', 'D'];
 *   - si no és dirigit, ['A', 'B'] i ['B', 'A'] són el mateix costat (poden repetir-se: multigraf).
 * Els algorismes que trien entre vèrtexs empatats fan servir l'ordre de V, com a classe.
 */

export const graph = (V, E, dir = false) => ({ V: [...V], E: E.map((e) => [...e]), dir });
export const weight = (e) => (e[2] == null ? 1 : e[2]);
export const sameEdge = (G, a, b) => (a[0] === b[0] && a[1] === b[1]) || (!G.dir && a[0] === b[1] && a[1] === b[0]);
const ord = (G) => { const m = new Map(G.V.map((v, i) => [v, i])); return (a, b) => m.get(a) - m.get(b); };

/** Veïns de cada vèrtex (amb repeticions si hi ha costats múltiples). En un dirigit, els successors. */
export function neighbours(G) {
  const N = new Map(G.V.map((v) => [v, []]));
  for (const [a, b] of G.E) {
    N.get(a).push(b);
    if (!G.dir && a !== b) N.get(b).push(a);
  }
  const by = ord(G);
  for (const l of N.values()) l.sort(by);
  return N;
}
/** Antecessors (graf dirigit). */
export function predecessors(G) {
  const P = new Map(G.V.map((v) => [v, []]));
  for (const [a, b] of G.E) P.get(b).push(a);
  const by = ord(G);
  for (const l of P.values()) l.sort(by);
  return P;
}
export const isSimple = (G) => G.E.every((e, i) => e[0] !== e[1] && G.E.findIndex((f) => sameEdge(G, e, f)) === i);

/** València de cada vèrtex: un bucle hi suma 2. En un dirigit: { in, out }. */
export function degrees(G) {
  const d = Object.fromEntries(G.V.map((v) => [v, G.dir ? { in: 0, out: 0 } : 0]));
  for (const [a, b] of G.E) {
    if (G.dir) { d[a].out++; d[b].in++; } else { d[a]++; d[b]++; }
  }
  return d;
}
/** Seqüència de valències, de més gran a més petita. */
export const degreeSeq = (G) => Object.values(degrees(G)).sort((x, y) => y - x);

/** Matriu d'adjacència: a_ij = nombre de costats de vi a vj (un bucle compta 1). */
export function adjMatrix(G) {
  const i = new Map(G.V.map((v, k) => [v, k]));
  const M = G.V.map(() => G.V.map(() => 0));
  for (const [a, b] of G.E) {
    M[i.get(a)][i.get(b)]++;
    if (!G.dir && a !== b) M[i.get(b)][i.get(a)]++;
  }
  return M;
}
/** Matriu d'incidència (files: vèrtexs; columnes: costats). No dirigit: 1, o 2 si és un bucle. Dirigit: 1 a l'origen, −1 al destí. */
export function incMatrix(G) {
  return G.V.map((v) => G.E.map(([a, b]) => {
    if (G.dir) return a === b ? 0 : a === v ? 1 : b === v ? -1 : 0;
    return a === v && b === v ? 2 : a === v || b === v ? 1 : 0;
  }));
}
export function matMul(A, B) {
  return A.map((r) => B[0].map((_, j) => r.reduce((s, x, k) => s + x * B[k][j], 0)));
}
export function matPow(A, n) {
  let R = A.map((r, i) => r.map((_, j) => (i === j ? 1 : 0)));
  for (let k = 0; k < n; k++) R = matMul(R, A);
  return R;
}
/** Graf a partir d'una matriu d'adjacència (no dirigit: només es llegeix el triangle superior). */
export function fromMatrix(V, M, dir = false) {
  const E = [];
  for (let i = 0; i < V.length; i++) {
    for (let j = dir ? 0 : i; j < V.length; j++) for (let k = 0; k < M[i][j]; k++) E.push([V[i], V[j]]);
  }
  return graph(V, E, dir);
}

/* ---------- connexió ---------- */

/** Components connexes (en un dirigit, del graf no dirigit associat). */
export function components(G) {
  const N = neighbours({ ...G, dir: false });
  const seen = new Set(), out = [];
  for (const s of G.V) {
    if (seen.has(s)) continue;
    const comp = [], st = [s];
    seen.add(s);
    while (st.length) {
      const v = st.pop();
      comp.push(v);
      for (const w of N.get(v)) if (!seen.has(w)) { seen.add(w); st.push(w); }
    }
    out.push(comp.sort(ord(G)));
  }
  return out;
}
export const isConnected = (G) => G.V.length > 0 && components(G).length === 1;

/** Vèrtexs als quals s'arriba des de s (seguint el sentit dels arcs si és dirigit). */
export function reach(G, s) {
  const N = neighbours(G), seen = new Set([s]), st = [s];
  while (st.length) for (const w of N.get(st.pop())) if (!seen.has(w)) { seen.add(w); st.push(w); }
  return seen;
}

/**
 * Components fortament connexes pel mètode de les marques: es marca v amb + i −, + als successors dels
 * marcats amb +, − als antecessors dels marcats amb −; els que tenen les dues marques són la component.
 * Torna també els passos (les marques de cada component) per explicar-ho.
 */
export function strongComponents(G) {
  const rest = new Set(G.V), comps = [], steps = [];
  while (rest.size) {
    const v = G.V.find((x) => rest.has(x));
    const sub = graph(G.V.filter((x) => rest.has(x)), G.E.filter(([a, b]) => rest.has(a) && rest.has(b)), true);
    const plus = reach(sub, v);
    const minus = reach(graph(sub.V, sub.E.map(([a, b]) => [b, a]), true), v);
    const comp = sub.V.filter((x) => plus.has(x) && minus.has(x));
    steps.push({ v, plus: sub.V.filter((x) => plus.has(x)), minus: sub.V.filter((x) => minus.has(x)), comp });
    comps.push(comp);
    for (const x of comp) rest.delete(x);
  }
  return { comps, steps };
}
/** Graf condensat: un vèrtex per component fortament connexa. */
export function condensed(G) {
  const { comps } = strongComponents(G);
  const name = (v) => comps.findIndex((c) => c.includes(v));
  const V = comps.map((c) => c.join(''));
  const E = [];
  for (const [a, b] of G.E) {
    const i = name(a), j = name(b);
    if (i !== j && !E.some(([x, y]) => x === V[i] && y === V[j])) E.push([V[i], V[j]]);
  }
  return graph(V, E, true);
}

/** Bipartició { A, B } si el graf és bipartit; si no, null. */
export function bipartition(G) {
  const N = neighbours({ ...G, dir: false }), side = {};
  for (const s of G.V) {
    if (s in side) continue;
    side[s] = 0;
    const q = [s];
    while (q.length) {
      const v = q.shift();
      for (const w of N.get(v)) {
        if (w === v) return null;
        if (!(w in side)) { side[w] = 1 - side[v]; q.push(w); } else if (side[w] === side[v]) return null;
      }
    }
  }
  return { A: G.V.filter((v) => side[v] === 0), B: G.V.filter((v) => side[v] === 1) };
}

/** Successió de costats vàlida (cada parell consecutiu de vèrtexs és un costat): torna els índexs dels costats o null. */
export function walkEdges(G, walk, { distinct = false } = {}) {
  const used = new Set(), out = [];
  for (let k = 0; k + 1 < walk.length; k++) {
    const a = walk[k], b = walk[k + 1];
    let idx = G.E.findIndex((e, i) => !used.has(i) && sameEdge(G, e, [a, b]));
    if (idx < 0 && !distinct) idx = G.E.findIndex((e) => sameEdge(G, e, [a, b]));
    if (idx < 0) return null;
    if (distinct) used.add(idx);
    out.push(idx);
  }
  return out;
}
/**
 * Classifica una successió de vèrtexs: 'none' si no és una successió de costats; si no,
 * { closed, trail (sense costats repetits), path (sense vèrtexs repetits, llevat del primer = últim) }.
 */
export function classifyWalk(G, walk) {
  if (walk.length < 2 || !walkEdges(G, walk)) return 'none';
  const closed = walk[0] === walk[walk.length - 1];
  const trail = !!walkEdges(G, walk, { distinct: true });
  const inner = closed ? walk.slice(0, -1) : walk;
  const path = new Set(inner).size === inner.length;
  return { closed, trail, path };
}

/* ---------- Euler i Hamilton ---------- */

/**
 * Euler: { kind: 'circuit' | 'path' | 'none', odd, why }.
 * No dirigit: connex (sense comptar vèrtexs aïllats) i 0 vèrtexs de valència senar → circuit; 2 → camí.
 */
export function eulerInfo(G) {
  const d = degrees(G);
  const used = G.V.filter((v) => (G.dir ? d[v].in + d[v].out : d[v]) > 0);
  const sub = graph(used, G.E, G.dir);
  const connected = used.length <= 1 || isConnected(sub);
  if (G.dir) {
    const bad = used.filter((v) => d[v].in !== d[v].out);
    const kind = !connected ? 'none' : bad.length === 0 ? 'circuit'
      : bad.length === 2 && bad.every((v) => Math.abs(d[v].in - d[v].out) === 1) ? 'path' : 'none';
    return { kind, odd: bad, connected };
  }
  const odd = G.V.filter((v) => d[v] % 2 === 1);
  const kind = !connected ? 'none' : odd.length === 0 ? 'circuit' : odd.length === 2 ? 'path' : 'none';
  return { kind, odd, connected };
}

/**
 * Circuit (o camí) d'Euler pel mètode dels circuits parcials (Hierholzer): es fa un circuit des de l'inici
 * i, mentre en quedin costats, se n'enganxa un altre des d'un vèrtex del circuit amb costats lliures.
 * Torna { walk, parts: [circuits parcials] } o null. Tria sempre el primer veí lliure en l'ordre de V.
 */
export function hierholzer(G, start) {
  const info = eulerInfo(G);
  if (info.kind === 'none') return null;
  const free = new Set(G.E.map((_, i) => i));
  const by = ord(G);
  const next = (v) => {
    const opts = G.E.map((e, i) => [e, i]).filter(([e, i]) => free.has(i) && (e[0] === v || (!G.dir && e[1] === v)));
    if (!opts.length) return null;
    opts.sort(([a], [b]) => by(a[0] === v ? a[1] : a[0], b[0] === v ? b[1] : b[0]));
    const [e, i] = opts[0];
    free.delete(i);
    return e[0] === v ? e[1] : e[0];
  };
  const tour = (v) => { const w = [v]; let x = next(v); while (x != null) { w.push(x); x = next(x); } return w; };
  const s = start ?? (info.kind === 'path' ? (G.dir ? info.odd.find((v) => degrees(G)[v].out > degrees(G)[v].in) : info.odd[0]) : G.V.find((v) => G.E.some((e) => e.includes(v))));
  let walk = tour(s);
  const parts = [walk.slice()];
  while (free.size) {
    const k = walk.findIndex((v) => G.E.some((e, i) => free.has(i) && (e[0] === v || (!G.dir && e[1] === v))));
    if (k < 0) return null;
    const sub = tour(walk[k]);
    parts.push(sub);
    walk = [...walk.slice(0, k), ...sub, ...walk.slice(k + 1)];
  }
  return { walk, parts };
}

/** Circuit (o camí, cycle=false) de Hamilton per cerca exhaustiva, per a grafs petits. null si no n'hi ha. */
export function hamilton(G, { cycle = true, start } = {}) {
  const N = neighbours(G), n = G.V.length;
  const starts = start ? [start] : cycle ? G.V.slice(0, 1) : G.V;
  for (const s of starts) {
    const path = [s], seen = new Set([s]);
    const go = () => {
      const v = path[path.length - 1];
      if (path.length === n) return !cycle || N.get(v).includes(s);
      for (const w of N.get(v)) {
        if (seen.has(w)) continue;
        seen.add(w); path.push(w);
        if (go()) return true;
        seen.delete(w); path.pop();
      }
      return false;
    };
    if (n > 0 && go()) return cycle ? [...path, s] : path;
  }
  return null;
}
/** Condicions suficients (grafs simples de n ≥ 3 vèrtexs). */
export function dirac(G) {
  const d = degrees(G), n = G.V.length;
  return n >= 3 && G.V.every((v) => d[v] >= n / 2);
}
export function ore(G) {
  const d = degrees(G), n = G.V.length, N = neighbours(G);
  if (n < 3) return false;
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
    const a = G.V[i], b = G.V[j];
    if (!N.get(a).includes(b) && d[a] + d[b] < n) return false;
  }
  return true;
}

/* ---------- camí més curt ---------- */

/**
 * Dijkstra des de s, com a classe: cada pas fixa el vèrtex no definitiu amb l'etiqueta més petita (si hi
 * ha empat, el primer de V) i actualitza les etiquetes (L(v), a(v)) dels seus veïns no definitius.
 * Torna { dist, prev, steps: [{ fix, labels: { v: [L, a] | null }, done: [vèrtexs fixats] }] }.
 */
export function dijkstra(G, s) {
  const dist = Object.fromEntries(G.V.map((v) => [v, Infinity]));
  const prev = Object.fromEntries(G.V.map((v) => [v, null]));
  dist[s] = 0;
  const done = new Set(), steps = [];
  const adj = new Map(G.V.map((v) => [v, []]));
  for (const e of G.E) {
    adj.get(e[0]).push([e[1], weight(e)]);
    if (!G.dir) adj.get(e[1]).push([e[0], weight(e)]);
  }
  while (done.size < G.V.length) {
    let u = null;
    for (const v of G.V) if (!done.has(v) && dist[v] < Infinity && (u == null || dist[v] < dist[u])) u = v;
    if (u == null) break;
    done.add(u);
    for (const [w, c] of adj.get(u)) {
      if (!done.has(w) && dist[u] + c < dist[w]) { dist[w] = dist[u] + c; prev[w] = u; }
    }
    steps.push({ fix: u, labels: Object.fromEntries(G.V.map((v) => [v, dist[v] < Infinity ? [dist[v], prev[v]] : null])), done: [...done] });
  }
  return { dist, prev, steps };
}
export function pathTo(prev, t) {
  const p = [];
  for (let v = t; v != null; v = prev[v]) p.unshift(v);
  return p;
}
/** Distància en nombre de costats (pesos 1) des de s. */
export function bfsDist(G, s) {
  const N = neighbours(G), d = { [s]: 0 }, q = [s];
  while (q.length) { const v = q.shift(); for (const w of N.get(v)) if (!(w in d)) { d[w] = d[v] + 1; q.push(w); } }
  return d;
}

/* ---------- recorreguts i arbres ---------- */

/** Recorregut en amplada (cua): { order, tree: [[pare, fill]], steps: [{ visit, queue }] }. */
export function bfs(G, s) {
  const N = neighbours(G), seen = new Set([s]), q = [s], order = [], tree = [], steps = [];
  while (q.length) {
    const v = q.shift();
    order.push(v);
    for (const w of N.get(v)) if (!seen.has(w)) { seen.add(w); q.push(w); tree.push([v, w]); }
    steps.push({ visit: v, queue: q.slice() });
  }
  return { order, tree, steps };
}
/** Recorregut en profunditat (pila, amb tornada enrere): { order, tree, steps: [{ visit | back, stack }] }. */
export function dfs(G, s) {
  const N = neighbours(G), seen = new Set([s]), st = [s], order = [s], tree = [], steps = [{ visit: s, stack: [s] }];
  while (st.length) {
    const v = st[st.length - 1];
    const w = N.get(v).find((x) => !seen.has(x));
    if (w == null) { st.pop(); steps.push({ back: v, stack: st.slice() }); continue; }
    seen.add(w); st.push(w); order.push(w); tree.push([v, w]);
    steps.push({ visit: w, stack: st.slice() });
  }
  return { order, tree, steps };
}
export const isTree = (G) => isConnected(G) && G.E.length === G.V.length - 1 && G.E.every((e) => e[0] !== e[1]);

/** Kruskal: costats per pes creixent (empat: ordre de E), s'accepten si no fan cicle. */
export function kruskal(G) {
  const parent = Object.fromEntries(G.V.map((v) => [v, v]));
  const find = (v) => (parent[v] === v ? v : (parent[v] = find(parent[v])));
  const sorted = G.E.map((e, i) => [e, i]).sort(([a, i], [b, j]) => weight(a) - weight(b) || i - j);
  const tree = [], steps = [];
  for (const [e] of sorted) {
    if (tree.length === G.V.length - 1) break;
    const ra = find(e[0]), rb = find(e[1]);
    const ok = ra !== rb;
    if (ok) { parent[ra] = rb; tree.push(e); }
    steps.push({ edge: e, ok });
  }
  return { tree, total: tree.reduce((s, e) => s + weight(e), 0), steps };
}
/** Prim des de s: a cada pas, el costat més lleuger que surt de l'arbre (empat: ordre de E). */
export function prim(G, s = G.V[0]) {
  const inT = new Set([s]), tree = [], steps = [];
  while (inT.size < G.V.length) {
    let best = null;
    for (const e of G.E) {
      const a = inT.has(e[0]), b = inT.has(e[1]);
      if (a !== b && (best == null || weight(e) < weight(best))) best = e;
    }
    if (!best) break;
    const v = inT.has(best[0]) ? best[1] : best[0];
    inT.add(v); tree.push(best);
    steps.push({ edge: best, add: v });
  }
  return { tree, total: tree.reduce((x, e) => x + weight(e), 0), steps };
}

/* ---------- acoloriment ---------- */

export const isProperColouring = (G, col) => G.E.every(([a, b]) => a !== b && col[a] != null && col[b] != null && col[a] !== col[b]);

/**
 * Algorisme de classe (Welsh–Powell): vèrtexs per valència decreixent (empat: ordre de V); el color 1 al
 * primer i als següents no adjacents a cap del color 1; es repeteix amb el color 2 sobre els que queden…
 * Torna { col: { v: 1.. }, order, k, steps: [{ c, vs }] }.
 */
export function welshPowell(G) {
  const d = degrees(G), N = neighbours(G), by = ord(G);
  const order = [...G.V].sort((a, b) => d[b] - d[a] || by(a, b));
  const col = {}, steps = [];
  let c = 0;
  while (order.some((v) => col[v] == null)) {
    c++;
    const vs = [];
    for (const v of order) if (col[v] == null && !vs.some((w) => N.get(v).includes(w))) { col[v] = c; vs.push(v); }
    steps.push({ c, vs });
  }
  return { col, order, k: c, steps };
}
/** Nombre cromàtic (cerca exhaustiva, grafs petits). Torna { k, col }. */
export function chromatic(G) {
  const N = neighbours(G);
  if (G.E.some(([a, b]) => a === b)) return { k: Infinity, col: null };
  const vs = [...G.V].sort((a, b) => N.get(b).length - N.get(a).length);
  for (let k = 1; k <= G.V.length; k++) {
    const col = {};
    const go = (i) => {
      if (i === vs.length) return true;
      const v = vs[i];
      for (let c = 1; c <= k; c++) {
        if (N.get(v).some((w) => col[w] === c)) continue;
        col[v] = c;
        if (go(i + 1)) return true;
        delete col[v];
      }
      return false;
    };
    if (go(0)) return { k, col };
  }
  return { k: G.V.length, col: null };
}
/** Graf adjunt (de línia): un vèrtex per costat; adjacents si els costats comparteixen un extrem. */
export function lineGraph(G) {
  const V = G.E.map((e) => e[0] + e[1]);
  const E = [];
  for (let i = 0; i < G.E.length; i++) for (let j = i + 1; j < G.E.length; j++) {
    if (G.E[i].slice(0, 2).some((x) => G.E[j].slice(0, 2).includes(x))) E.push([V[i], V[j]]);
  }
  return graph(V, E);
}

/* ---------- isomorfisme i planaritat ---------- */

/** Invariants que s'han de conservar: vèrtexs, costats, seqüència de valències, bucles, components, triangles, bipartit. */
export function invariants(G) {
  const N = neighbours(G);
  let tri = 0;
  for (let i = 0; i < G.V.length; i++) for (let j = i + 1; j < G.V.length; j++) for (let k = j + 1; k < G.V.length; k++) {
    const [a, b, c] = [G.V[i], G.V[j], G.V[k]];
    if (N.get(a).includes(b) && N.get(b).includes(c) && N.get(a).includes(c)) tri++;
  }
  return {
    n: G.V.length, m: G.E.length, seq: degreeSeq(G).join(','), loops: G.E.filter(([a, b]) => a === b).length,
    comps: components(G).length, triangles: tri, bipartite: !!bipartition(G),
  };
}
/** Comprova si f (un objecte v → w) és un isomorfisme de G1 en G2. */
export function isIsomorphism(G1, G2, f) {
  if (G1.V.length !== G2.V.length || G1.E.length !== G2.E.length) return false;
  if (new Set(G1.V.map((v) => f[v])).size !== G1.V.length || G1.V.some((v) => !G2.V.includes(f[v]))) return false;
  const A1 = adjMatrix(G1), A2 = adjMatrix(G2), i2 = new Map(G2.V.map((v, k) => [v, k]));
  return G1.V.every((a, i) => G1.V.every((b, j) => A1[i][j] === A2[i2.get(f[a])][i2.get(f[b])]));
}
/** Isomorfisme per cerca (grafs petits): torna la biyecció o null. */
export function isomorphism(G1, G2) {
  const a = invariants(G1), b = invariants(G2);
  if (JSON.stringify(a) !== JSON.stringify(b)) return null;
  const d1 = degrees(G1), d2 = degrees(G2), A1 = adjMatrix(G1), A2 = adjMatrix(G2);
  const i1 = new Map(G1.V.map((v, k) => [v, k])), i2 = new Map(G2.V.map((v, k) => [v, k]));
  const f = {}, used = new Set();
  const go = (k) => {
    if (k === G1.V.length) return true;
    const v = G1.V[k];
    for (const w of G2.V) {
      if (used.has(w) || d1[v] !== d2[w]) continue;
      if (G1.V.slice(0, k + 1).some((u) => A1[i1.get(v)][i1.get(u)] !== A2[i2.get(w)][i2.get(u === v ? w : f[u])])) continue;
      f[v] = w; used.add(w);
      if (go(k + 1)) return true;
      used.delete(w); delete f[v];
    }
    return false;
  };
  return go(0) ? { ...f } : null;
}

/** Cotes que ha de complir un graf simple, connex i planar amb v ≥ 3. */
export function planarBounds(G) {
  const v = G.V.length, e = G.E.length, triFree = invariants(G).triangles === 0;
  return { v, e, triFree, max3: 3 * v - 6, max2: 2 * v - 4, ok3: e <= 3 * v - 6, ok2: !triFree || e <= 2 * v - 4 };
}
/** Nombre de cares d'un graf planar connex (fórmula d'Euler: v − e + c = 2). */
export const faces = (G) => 2 - G.V.length + G.E.length;

/** Encreuaments entre costats en un dibuix amb posicions pos[v] = [x, y] (costats que no comparteixen extrems). */
export function crossings(G, pos) {
  const cross = (p1, p2, p3, p4) => {
    const d = (a, b, c) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
    const d1 = d(p3, p4, p1), d2 = d(p3, p4, p2), d3 = d(p1, p2, p3), d4 = d(p1, p2, p4);
    return ((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0));
  };
  const out = [];
  for (let i = 0; i < G.E.length; i++) for (let j = i + 1; j < G.E.length; j++) {
    const [a, b] = G.E[i], [c, d] = G.E[j];
    if (a === b || c === d || [a, b].some((x) => x === c || x === d)) continue;
    if (cross(pos[a], pos[b], pos[c], pos[d])) out.push([i, j]);
  }
  return out;
}

/* ---------- operacions ---------- */

/** Complementari d'un graf simple. */
export function complement(G) {
  const E = [];
  for (let i = 0; i < G.V.length; i++) for (let j = i + 1; j < G.V.length; j++) {
    if (!G.E.some((e) => sameEdge(G, e, [G.V[i], G.V[j]]))) E.push([G.V[i], G.V[j]]);
  }
  return graph(G.V, E);
}
/** Successió gràfica (Havel–Hakimi): si existeix un graf simple amb aquestes valències. */
export function isGraphic(seq) {
  let s = [...seq].sort((a, b) => b - a);
  if (s.some((x) => x < 0) || s.reduce((a, b) => a + b, 0) % 2) return false;
  while (s.length && s[0] > 0) {
    const d = s.shift();
    if (d > s.length) return false;
    for (let i = 0; i < d; i++) if (--s[i] < 0) return false;
    s.sort((a, b) => b - a);
  }
  return true;
}

/* ---------- planificació de projectes (C.P.M.) ---------- */

/**
 * Tasques [{ id, d (durada), pre: [immediatament anteriors] }].
 * Torna { level, early, late, total (marge total), free (marge lliure), duration, critical: [tasques],
 * paths: [camins crítics] }. La tasca final fictícia «ω» comença quan acaben totes.
 */
export function cpm(tasks) {
  const T = new Map(tasks.map((t) => [t.id, t]));
  const succ = new Map(tasks.map((t) => [t.id, []]));
  for (const t of tasks) for (const p of t.pre) succ.get(p).push(t.id);
  const level = {};
  let rest = tasks.map((t) => t.id), lv = 0;
  while (rest.length) {
    const now = rest.filter((id) => T.get(id).pre.every((p) => p in level));
    if (!now.length) throw new Error('cicle');
    for (const id of now) level[id] = lv;
    rest = rest.filter((id) => !(id in level));
    lv++;
  }
  const byLevel = tasks.map((t) => t.id).sort((a, b) => level[a] - level[b]);
  const early = {};
  for (const id of byLevel) early[id] = Math.max(0, ...T.get(id).pre.map((p) => early[p] + T.get(p).d));
  const duration = Math.max(...tasks.map((t) => early[t.id] + t.d));
  const late = {};
  for (const id of [...byLevel].reverse()) {
    const s = succ.get(id);
    late[id] = s.length ? Math.min(...s.map((y) => late[y] - T.get(id).d)) : duration - T.get(id).d;
  }
  const total = {}, free = {};
  for (const t of tasks) {
    total[t.id] = late[t.id] - early[t.id];
    const s = succ.get(t.id);
    free[t.id] = (s.length ? Math.min(...s.map((y) => early[y])) : duration) - early[t.id] - t.d;
  }
  const critical = byLevel.filter((id) => total[id] === 0);
  const paths = [];
  const walk = (id, acc) => {
    const nx = succ.get(id).filter((y) => total[y] === 0 && early[y] === early[id] + T.get(id).d);
    if (!succ.get(id).length) { if (early[id] + T.get(id).d === duration) paths.push(acc); return; }
    for (const y of nx) walk(y, [...acc, y]);
  };
  for (const id of critical) if (!T.get(id).pre.length) walk(id, [id]);
  return { level, early, late, total, free, duration, critical, paths, succ };
}
