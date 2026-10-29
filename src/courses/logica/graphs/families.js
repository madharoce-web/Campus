/**
 * Famílies d'exercicis de grafs (banc de Lògica i grafs): cada una genera un exercici nou amb una llavor,
 * amb la figura a l'enunciat (qb), la solució pas a pas i, als de nivell examen, la rúbrica de correcció.
 * Ids: gr<tema>-<nom>. Els tipus seq, colour i matrix són a ./types.jsx.
 */
import {
  adjMatrix, bfs, bfsDist, bipartition, chromatic, components, cpm, degrees, dfs, dijkstra, eulerInfo, graph,
  hamilton, hierholzer, invariants, isGraphic, isomorphism, kruskal, matPow, pathTo, strongComponents, welshPowell,
} from './model.js';
import { circle, graphSvg } from './svg.js';
import { connected, directed, project, withOdd, LETTERS } from './random.js';
import { bipartiteK, complete, cycle, wheel } from './presets.js';

const L3 = (ca, es, en) => [ca, es, en];
const p = (ca, es, en) => ({ t: 'p', x: L3(ca, es, en) });
const fig = (G, o = {}) => ({ t: 'diagram', svg: graphSvg(G, o) });
const join = (a) => a.join(', ');
const rub = (...xs) => xs.map(([pts, ca, es, en]) => ({ pts, x: L3(ca, es, en) }));
const matTable = (V, M) => ({ head: ['', ...V], rows: M.map((r, i) => [V[i], ...r.map(String)]) });
const degLine = (G) => { const d = degrees(G); return G.V.map((v) => `δ(${v})=${d[v]}`).join(', '); };

/* ================= gr1 · què és un graf ================= */
const gr1 = [
  {
    id: 'gr1-encaixades', unit: 'gr1', level: 'easy', basedOn: L3('Lema de les encaixades de mans', 'Lema del apretón de manos', 'Handshake lemma'),
    gen(r) {
      let seq;
      do { seq = Array.from({ length: r.int(5, 8) }, () => r.int(1, 5)); } while (seq.reduce((a, b) => a + b, 0) % 2);
      seq.sort((a, b) => b - a);
      const s = seq.reduce((a, b) => a + b, 0);
      return {
        type: 'num', answer: s / 2, min: 3,
        q: L3(`Un graf té ${seq.length} vèrtexs amb valències ${join(seq)}. Quants costats té?`, `Un grafo tiene ${seq.length} vértices con valencias ${join(seq)}. ¿Cuántos lados tiene?`, `A graph has ${seq.length} vertices with degrees ${join(seq)}. How many edges does it have?`),
        steps: [
          { x: L3(`Suma de valències: ${seq.join(' + ')} = ${s}.`, `Suma de valencias: ${seq.join(' + ')} = ${s}.`, `Sum of degrees: ${seq.join(' + ')} = ${s}.`), why: L3('Cada costat té dos extrems: suma 2 a la suma de valències.', 'Cada lado tiene dos extremos: suma 2 a la suma de valencias.', 'Each edge has two ends: it adds 2 to the sum of degrees.') },
          { x: L3(`|E| = ${s} / 2 = **${s / 2}**.`, `|E| = ${s} / 2 = **${s / 2}**.`, `|E| = ${s} / 2 = **${s / 2}**.`), done: true },
        ],
      };
    },
  },
  {
    id: 'gr1-llegir', unit: 'gr1', level: 'easy', basedOn: L3('Valències i costats a partir del dibuix', 'Valencias y lados a partir del dibujo', 'Degrees and edges from a drawing'),
    gen(r) {
      const n = r.int(5, 6);
      const { G, pos } = connected(r, n, n + r.int(1, 3));
      if (r() < 0.5) G.E.push([G.V[n - 1], G.V[n - 1]]);
      const v = r.pick(G.V), d = degrees(G);
      return {
        type: 'nums', min: 4,
        qb: [p(`Mira el graf. Escriu la valència de ${v}, el nombre de costats i la suma de totes les valències.`, `Mira el grafo. Escribe la valencia de ${v}, el número de lados y la suma de todas las valencias.`, `Look at the graph. Write the degree of ${v}, the number of edges and the sum of all degrees.`), fig(G, { pos })],
        parts: [
          { label: `δ(${v})`, answer: d[v] },
          { label: '|E|', answer: G.E.length },
          { label: L3('Suma de valències', 'Suma de valencias', 'Sum of degrees'), answer: 2 * G.E.length },
        ],
        steps: [
          L3(`Valències: ${degLine(G)}.`, `Valencias: ${degLine(G)}.`, `Degrees: ${degLine(G)}.`),
          { x: L3('Un bucle suma 2 a la valència del seu vèrtex.', 'Un bucle suma 2 a la valencia de su vértice.', 'A loop adds 2 to the degree of its vertex.') },
          { x: L3(`Hi ha ${G.E.length} costats i la suma és 2 · ${G.E.length} = ${2 * G.E.length}.`, `Hay ${G.E.length} lados y la suma es 2 · ${G.E.length} = ${2 * G.E.length}.`, `There are ${G.E.length} edges and the sum is 2 · ${G.E.length} = ${2 * G.E.length}.`), done: true },
        ],
      };
    },
  },
  {
    id: 'gr1-especials', unit: 'gr1', level: 'exam', basedOn: L3('Grafs especials', 'Grafos especiales', 'Special graphs'),
    gen(r) {
      const n = r.int(5, 9), a = r.int(2, 4), b = r.int(3, 6);
      return {
        type: 'nums', min: 6, pts: 2,
        q: L3(`Quants costats tenen K${sub(n)}, K${sub(a)},${sub(b)}, C${sub(n)} i W${sub(n)}?`, `¿Cuántos lados tienen K${sub(n)}, K${sub(a)},${sub(b)}, C${sub(n)} y W${sub(n)}?`, `How many edges do K${sub(n)}, K${sub(a)},${sub(b)}, C${sub(n)} and W${sub(n)} have?`),
        parts: [
          { label: `K${sub(n)}`, answer: (n * (n - 1)) / 2 }, { label: `K${sub(a)},${sub(b)}`, answer: a * b },
          { label: `C${sub(n)}`, answer: n }, { label: `W${sub(n)}`, answer: 2 * (n - 1) },
        ],
        steps: [
          L3(`Kₙ: cada vèrtex és adjacent a tots els altres, n(n − 1)/2 = ${n}·${n - 1}/2 = ${(n * (n - 1)) / 2}.`, `Kₙ: cada vértice es adyacente a todos los demás, n(n − 1)/2 = ${n}·${n - 1}/2 = ${(n * (n - 1)) / 2}.`, `Kₙ: every vertex is adjacent to all the others, n(n − 1)/2 = ${n}·${n - 1}/2 = ${(n * (n - 1)) / 2}.`),
          L3(`K_{m,n}: cada vèrtex d'una part amb tots els de l'altra, m·n = ${a * b}.`, `K_{m,n}: cada vértice de una parte con todos los de la otra, m·n = ${a * b}.`, `K_{m,n}: each vertex of one side with every vertex of the other, m·n = ${a * b}.`),
          L3(`Cₙ: un cicle de n vèrtexs té n costats = ${n}.`, `Cₙ: un ciclo de n vértices tiene n lados = ${n}.`, `Cₙ: a cycle on n vertices has n edges = ${n}.`),
          { x: L3(`Wₙ = C₍ₙ₋₁₎ + N₁: ${n - 1} costats del cicle i ${n - 1} radis, 2(n − 1) = ${2 * (n - 1)}.`, `Wₙ = C₍ₙ₋₁₎ + N₁: ${n - 1} lados del ciclo y ${n - 1} radios, 2(n − 1) = ${2 * (n - 1)}.`, `Wₙ = C₍ₙ₋₁₎ + N₁: ${n - 1} cycle edges and ${n - 1} spokes, 2(n − 1) = ${2 * (n - 1)}.`), done: true },
        ],
        rubric: rub([0.5, 'Kₙ amb n(n−1)/2', 'Kₙ con n(n−1)/2', 'Kₙ with n(n−1)/2'], [0.5, 'K_{m,n} amb m·n', 'K_{m,n} con m·n', 'K_{m,n} with m·n'], [0.5, 'Cₙ amb n costats', 'Cₙ con n lados', 'Cₙ with n edges'], [0.5, 'Wₙ amb 2(n−1), recordant que té n vèrtexs', 'Wₙ con 2(n−1), recordando que tiene n vértices', 'Wₙ with 2(n−1), remembering it has n vertices']),
      };
    },
  },
  {
    id: 'gr1-grafica', unit: 'gr1', level: 'hard', basedOn: L3('Existència d\'un graf amb unes valències donades', 'Existencia de un grafo con unas valencias dadas', 'Existence of a graph with given degrees'),
    gen(r) {
      let seq;
      do { seq = Array.from({ length: r.int(5, 7) }, () => r.int(1, 5)).sort((a, b) => b - a); } while (seq.reduce((a, b) => a + b, 0) % 2 || seq[0] >= seq.length + (r() < 0.3 ? 1 : 0));
      const ok = isGraphic(seq);
      const steps = hh(seq);
      return {
        type: 'tf', answer: ok, min: 8,
        q: L3(`Existeix un graf **simple** amb valències ${join(seq)}?`, `¿Existe un grafo **simple** con valencias ${join(seq)}?`, `Is there a **simple** graph with degrees ${join(seq)}?`),
        steps: [
          L3('La suma és parella (condició necessària). Ara es redueix: es treu la valència més gran d, i es resta 1 a les d següents.', 'La suma es par (condición necesaria). Ahora se reduce: se quita la valencia más grande d, y se resta 1 a las d siguientes.', 'The sum is even (necessary). Now reduce: remove the largest degree d and subtract 1 from the next d.'),
          ...steps.map((s) => s.join(', ') || '∅'),
          { x: ok ? L3('S\'arriba a zeros: **sí** que existeix.', 'Se llega a ceros: **sí** existe.', 'We reach all zeros: **yes**, it exists.') : L3('Surt una valència negativa o massa gran: **no** existeix.', 'Sale una valencia negativa o demasiado grande: **no** existe.', 'A negative or too-large degree appears: **no**, it does not exist.'), done: true },
        ],
      };
    },
  },
];
function sub(n) { return String(n).split('').map((c) => '₀₁₂₃₄₅₆₇₈₉'[+c]).join(''); }
function hh(seq) {
  const out = [seq.slice()];
  let s = seq.slice();
  while (s.length && s[0] > 0) {
    const d = s.shift();
    if (d > s.length) { out.push(['✗']); break; }
    for (let i = 0; i < d; i++) s[i]--;
    if (s.some((x) => x < 0)) { out.push([...s.map(String), '✗']); break; }
    s.sort((a, b) => b - a);
    out.push(s.slice());
  }
  return out;
}

/* ================= gr2 · representació ================= */
const gr2 = [
  {
    id: 'gr2-matriu', unit: 'gr2', level: 'easy', basedOn: L3('Matriu d\'adjacència', 'Matriz de adyacencia', 'Adjacency matrix'),
    gen(r) {
      const n = r.int(4, 5), { G, pos } = connected(r, n, n + r.int(0, 2));
      if (r() < 0.4) G.E.push([G.V[0], G.V[1]]);
      return {
        type: 'matrix', G, min: 5,
        qb: [p('Omple la matriu d\'adjacència del graf (si hi ha dos costats entre dos vèrtexs, hi va un 2).', 'Rellena la matriz de adyacencia del grafo (si hay dos lados entre dos vértices, va un 2).', 'Fill in the adjacency matrix of the graph (two edges between two vertices give a 2).'), fig(G, { pos })],
        steps: [{ x: L3('Fila v, columna w: quants costats uneixen v i w. És simètrica i la suma de cada fila és la valència.', 'Fila v, columna w: cuántos lados unen v y w. Es simétrica y la suma de cada fila es la valencia.', 'Row v, column w: how many edges join v and w. It is symmetric and each row sums to the degree.'), table: matTable(G.V, adjMatrix(G)), done: true }],
      };
    },
  },
  {
    id: 'gr2-llegirmatriu', unit: 'gr2', level: 'exam', basedOn: L3('Del graf a la matriu i de la matriu al graf', 'Del grafo a la matriz y de la matriz al grafo', 'From graph to matrix and back'),
    gen(r) {
      const n = r.int(5, 6), { G } = connected(r, n, n + r.int(1, 3));
      const M = adjMatrix(G), v = r.pick(G.V), d = degrees(G);
      return {
        type: 'nums', min: 6, pts: 2,
        qb: [p('Aquesta és la matriu d\'adjacència d\'un graf no dirigit:', 'Esta es la matriz de adyacencia de un grafo no dirigido:', 'This is the adjacency matrix of an undirected graph:'), { t: 'table', ...matTable(G.V, M) },
          p(`Quants costats té? Quina és la valència de ${v}? Quantes components connexes té?`, `¿Cuántos lados tiene? ¿Cuál es la valencia de ${v}? ¿Cuántas componentes conexas tiene?`, `How many edges does it have? What is the degree of ${v}? How many connected components?`)],
        parts: [{ label: '|E|', answer: G.E.length }, { label: `δ(${v})`, answer: d[v] }, { label: L3('Components', 'Componentes', 'Components'), answer: components(G).length }],
        steps: [
          L3(`Suma de tots els elements = ${2 * G.E.length} = 2|E| (cada costat surt dues vegades): |E| = ${G.E.length}.`, `Suma de todos los elementos = ${2 * G.E.length} = 2|E| (cada lado sale dos veces): |E| = ${G.E.length}.`, `Sum of all entries = ${2 * G.E.length} = 2|E| (each edge appears twice): |E| = ${G.E.length}.`),
          L3(`La valència de ${v} és la suma de la seva fila: ${d[v]}.`, `La valencia de ${v} es la suma de su fila: ${d[v]}.`, `The degree of ${v} is its row sum: ${d[v]}.`),
          { x: L3('Es dibuixa el graf a partir de la matriu i s\'hi veu una sola peça.', 'Se dibuja el grafo a partir de la matriz y se ve una sola pieza.', 'Drawing the graph from the matrix shows a single piece.'), done: true },
        ],
        rubric: rub([0.6, '|E| = suma / 2', '|E| = suma / 2', '|E| = sum / 2'], [0.6, 'València = suma de la fila', 'Valencia = suma de la fila', 'Degree = row sum'], [0.8, 'Components justificades (dibuix o camins)', 'Componentes justificadas (dibujo o caminos)', 'Components justified (drawing or paths)']),
      };
    },
  },
  {
    id: 'gr2-a2', unit: 'gr2', level: 'hard', basedOn: L3('Potències de la matriu i successions de costats', 'Potencias de la matriz y sucesiones de lados', 'Matrix powers and walks'),
    gen(r) {
      const n = 5, { G, pos } = connected(r, n, n + 2);
      const k = r.pick([2, 3]), A = adjMatrix(G), P = matPow(A, k);
      const i = r.int(0, n - 1), j = r.int(0, n - 1);
      return {
        type: 'num', answer: P[i][j], min: 10,
        qb: [p(`Quantes successions de costats de longitud ${k} hi ha de ${G.V[i]} a ${G.V[j]}?`, `¿Cuántas sucesiones de lados de longitud ${k} hay de ${G.V[i]} a ${G.V[j]}?`, `How many walks of length ${k} are there from ${G.V[i]} to ${G.V[j]}?`), fig(G, { pos })],
        steps: [
          { x: L3('Matriu d\'adjacència A:', 'Matriz de adyacencia A:', 'Adjacency matrix A:'), table: matTable(G.V, A) },
          { x: L3(`L'element (${G.V[i]}, ${G.V[j]}) de A${sup(k)} compta les successions de longitud ${k}:`, `El elemento (${G.V[i]}, ${G.V[j]}) de A${sup(k)} cuenta las sucesiones de longitud ${k}:`, `Entry (${G.V[i]}, ${G.V[j]}) of A${sup(k)} counts the walks of length ${k}:`), table: matTable(G.V, P) },
          { x: L3(`Resultat: **${P[i][j]}**.`, `Resultado: **${P[i][j]}**.`, `Result: **${P[i][j]}**.`), done: true },
        ],
      };
    },
  },
];
function sup(n) { return String(n).split('').map((c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+c]).join(''); }

/* ================= gr3 · camins i connexió ================= */
const gr3 = [
  {
    id: 'gr3-comps', unit: 'gr3', level: 'easy', basedOn: L3('Components connexes', 'Componentes conexas', 'Connected components'),
    gen(r) {
      const k = r.int(2, 3), parts = [], V = [];
      let used = 0;
      for (let c = 0; c < k; c++) {
        const n = r.int(2, 3), names = LETTERS.slice(used, used + n);
        used += n;
        const g = connected(r, n, n - 1 + (n > 2 && r() < 0.5 ? 1 : 0), { names });
        parts.push(...g.G.E); V.push(...names);
      }
      if (r() < 0.5) V.push(LETTERS[used]);
      const G = graph(V, parts), shuffled = r.shuffle(V);
      const pos = circle(shuffled);
      const c = components(G);
      return {
        type: 'num', answer: c.length, min: 3,
        qb: [p('Quantes components connexes té aquest graf?', '¿Cuántas componentes conexas tiene este grafo?', 'How many connected components does this graph have?'), fig(G, { pos })],
        steps: [{ x: L3(`Les peces són ${c.map((x) => '{' + x.join(',') + '}').join(', ')}: **${c.length}** (un vèrtex aïllat també és una component).`, `Las piezas son ${c.map((x) => '{' + x.join(',') + '}').join(', ')}: **${c.length}** (un vértice aislado también es una componente).`, `The pieces are ${c.map((x) => '{' + x.join(',') + '}').join(', ')}: **${c.length}** (an isolated vertex is a component too).`), done: true }],
      };
    },
  },
  {
    id: 'gr3-classifica', unit: 'gr3', level: 'easy', basedOn: L3('Camins simples, elementals i circuits', 'Caminos simples, elementales y circuitos', 'Trails, paths and circuits'),
    gen(r) {
      const { G, pos } = connected(r, 6, 9);
      const N = new Map(G.V.map((v) => [v, G.E.filter((e) => e.includes(v)).map((e) => (e[0] === v ? e[1] : e[0]))]));
      const len = r.int(4, 6), w = [r.pick(G.V)];
      for (let i = 0; i < len; i++) w.push(r.pick(N.get(w[w.length - 1])));
      if (r() < 0.4) { const h = hamilton(G); if (h) w.splice(0, w.length, ...h.slice(0, r.int(4, h.length))); }
      const used = new Set(), trail = w.slice(1).every((v, k) => { const key = [w[k], v].sort().join(); if (used.has(key)) return false; used.add(key); return true; });
      const closed = w[0] === w[w.length - 1];
      const inner = closed ? w.slice(0, -1) : w, elem = new Set(inner).size === inner.length;
      const ans = !trail ? 0 : closed ? (elem ? 3 : 2) : (elem ? 1 : 4);
      return {
        type: 'mcq', answer: ans, min: 4,
        qb: [p(`Com és la successió ${w.join(' ')}?`, `¿Cómo es la sucesión ${w.join(' ')}?`, `What is the sequence ${w.join(' ')}?`), fig(G, { pos })],
        opts: [L3('Un camí, però no simple (repeteix un costat)', 'Un camino, pero no simple (repite un lado)', 'A walk but not a trail (it repeats an edge)'), L3('Un camí elemental (no repeteix vèrtexs)', 'Un camino elemental (no repite vértices)', 'A path (no repeated vertex)'), L3('Un circuit, però no elemental', 'Un circuito, pero no elemental', 'A circuit, but not elementary'), L3('Un circuit elemental', 'Un circuito elemental', 'An elementary circuit'), L3('Un camí simple que no és elemental', 'Un camino simple que no es elemental', 'A trail that is not a path')],
        steps: [
          L3(`Costats repetits? ${trail ? 'No: és simple.' : 'Sí.'} Vèrtexs repetits? ${elem ? 'No.' : 'Sí.'} Acaba on comença? ${closed ? 'Sí.' : 'No.'}`, `¿Lados repetidos? ${trail ? 'No: es simple.' : 'Sí.'} ¿Vértices repetidos? ${elem ? 'No.' : 'Sí.'} ¿Acaba donde empieza? ${closed ? 'Sí.' : 'No.'}`, `Repeated edges? ${trail ? 'No: it is a trail.' : 'Yes.'} Repeated vertices? ${elem ? 'No.' : 'Yes.'} Ends where it starts? ${closed ? 'Yes.' : 'No.'}`),
        ],
      };
    },
  },
  {
    id: 'gr3-cotes', unit: 'gr3', level: 'exam', basedOn: L3('Nombre de costats d\'un graf simple', 'Número de lados de un grafo simple', 'Number of edges of a simple graph'),
    gen(r) {
      const n = r.int(6, 12), k = r.int(2, 3);
      const mx = ((n - k) * (n - k + 1)) / 2;
      return {
        type: 'nums', min: 8, pts: 2,
        q: L3(`Un graf simple té ${n} vèrtexs. (a) Si és connex, quin és el mínim de costats? (b) I el màxim? (c) Si té exactament ${k} components connexes, quin és el màxim de costats?`, `Un grafo simple tiene ${n} vértices. (a) Si es conexo, ¿cuál es el mínimo de lados? (b) ¿Y el máximo? (c) Si tiene exactamente ${k} componentes conexas, ¿cuál es el máximo de lados?`, `A simple graph has ${n} vertices. (a) If it is connected, what is the minimum number of edges? (b) The maximum? (c) If it has exactly ${k} connected components, what is the maximum?`),
        parts: [{ label: '(a)', answer: n - 1 }, { label: '(b)', answer: (n * (n - 1)) / 2 }, { label: '(c)', answer: mx }],
        steps: [
          L3(`(a) El mínim és un arbre: n − 1 = ${n - 1}.`, `(a) El mínimo es un árbol: n − 1 = ${n - 1}.`, `(a) The minimum is a tree: n − 1 = ${n - 1}.`),
          L3(`(b) El màxim és el complet K${sub(n)}: n(n − 1)/2 = ${(n * (n - 1)) / 2}.`, `(b) El máximo es el completo K${sub(n)}: n(n − 1)/2 = ${(n * (n - 1)) / 2}.`, `(b) The maximum is the complete K${sub(n)}: n(n − 1)/2 = ${(n * (n - 1)) / 2}.`),
          { x: L3(`(c) Amb k components, el màxim s'obté amb k − 1 vèrtexs aïllats i un complet amb la resta: (n − k)(n − k + 1)/2 = ${n - k}·${n - k + 1}/2 = ${mx}.`, `(c) Con k componentes, el máximo se obtiene con k − 1 vértices aislados y un completo con el resto: (n − k)(n − k + 1)/2 = ${n - k}·${n - k + 1}/2 = ${mx}.`, `(c) With k components, the maximum comes from k − 1 isolated vertices and a complete graph on the rest: (n − k)(n − k + 1)/2 = ${n - k}·${n - k + 1}/2 = ${mx}.`), done: true },
        ],
        rubric: rub([0.5, 'Mínim n−1 (arbre)', 'Mínimo n−1 (árbol)', 'Minimum n−1 (tree)'], [0.5, 'Màxim n(n−1)/2 (complet)', 'Máximo n(n−1)/2 (completo)', 'Maximum n(n−1)/2 (complete)'], [1, 'Fórmula (n−k)(n−k+1)/2 aplicada i justificada', 'Fórmula (n−k)(n−k+1)/2 aplicada y justificada', 'Formula (n−k)(n−k+1)/2 applied and justified']),
      };
    },
  },
  {
    id: 'gr3-fort', unit: 'gr3', level: 'hard', basedOn: L3('Components fortament connexes', 'Componentes fuertemente conexas', 'Strongly connected components'),
    gen(r) {
      const { G, pos } = directed(r, 6, r.int(7, 9));
      const sc = strongComponents(G);
      return {
        type: 'num', answer: sc.comps.length, min: 10,
        qb: [p('Quantes components fortament connexes té aquest graf dirigit?', '¿Cuántas componentes fuertemente conexas tiene este grafo dirigido?', 'How many strongly connected components does this directed graph have?'), fig(G, { pos })],
        steps: [
          ...sc.steps.map((s) => L3(`Des de ${s.v}: + a {${s.plus.join(',')}} (hi arribo), − a {${s.minus.join(',')}} (en surto). Les dues marques: {${s.comp.join(',')}}.`, `Desde ${s.v}: + en {${s.plus.join(',')}} (llego), − en {${s.minus.join(',')}} (salgo). Las dos marcas: {${s.comp.join(',')}}.`, `From ${s.v}: + on {${s.plus.join(',')}} (reachable), − on {${s.minus.join(',')}} (can reach it). Both marks: {${s.comp.join(',')}}.`)),
          { x: L3(`Hi ha **${sc.comps.length}** components.`, `Hay **${sc.comps.length}** componentes.`, `There are **${sc.comps.length}** components.`), done: true },
        ],
      };
    },
  },
];

/* ================= gr4 · Euler i Hamilton ================= */
const KIND = { circuit: 0, path: 1, none: 2 };
const gr4 = [
  {
    id: 'gr4-tipus', unit: 'gr4', level: 'easy', basedOn: L3('Caracterització dels grafs eulerians', 'Caracterización de los grafos eulerianos', 'Characterising Eulerian graphs'),
    gen(r) {
      const { G, pos } = withOdd(r, r.int(5, 6), r.pick([0, 2, 4]));
      const info = eulerInfo(G);
      return {
        type: 'mcq', answer: KIND[info.kind], min: 3,
        qb: [p('Aquest graf connex té…', 'Este grafo conexo tiene…', 'This connected graph has…'), fig(G, { pos })],
        opts: [L3('un circuit d\'Euler', 'un circuito de Euler', 'an Euler circuit'), L3('un camí d\'Euler, però no un circuit', 'un camino de Euler, pero no un circuito', 'an Euler path but no circuit'), L3('ni circuit ni camí d\'Euler', 'ni circuito ni camino de Euler', 'neither')],
        steps: [
          L3(`Valències: ${degLine(G)}.`, `Valencias: ${degLine(G)}.`, `Degrees: ${degLine(G)}.`),
          { x: L3(`Vèrtexs de valència senar: ${info.odd.length} (${join(info.odd) || 'cap'}). 0 → circuit; 2 → camí; més → cap.`, `Vértices de valencia impar: ${info.odd.length} (${join(info.odd) || 'ninguno'}). 0 → circuito; 2 → camino; más → ninguno.`, `Odd vertices: ${info.odd.length} (${join(info.odd) || 'none'}). 0 → circuit; 2 → path; more → neither.`), done: true },
        ],
      };
    },
  },
  {
    id: 'gr4-troba', unit: 'gr4', level: 'exam', basedOn: L3('Mètode dels circuits parcials', 'Método de los circuitos parciales', 'Method of partial circuits'),
    gen(r) {
      const k = r.pick([0, 2]);
      const { G, pos } = withOdd(r, r.int(5, 6), k);
      const h = hierholzer(G);
      return {
        type: 'seq', want: 'euler', closed: k === 0, G, pos, answer: h.walk, min: 10, pts: 2.5,
        qb: [p(k === 0 ? 'Escriu un circuit d\'Euler d\'aquest graf (la successió de vèrtexs, tornant a l\'inici).' : 'Escriu un camí d\'Euler d\'aquest graf (la successió de vèrtexs).', k === 0 ? 'Escribe un circuito de Euler de este grafo (la sucesión de vértices, volviendo al inicio).' : 'Escribe un camino de Euler de este grafo (la sucesión de vértices).', k === 0 ? 'Write an Euler circuit of this graph (the sequence of vertices, back to the start).' : 'Write an Euler path of this graph (the sequence of vertices).'), fig(G, { pos })],
        steps: [
          L3(`Valències: ${degLine(G)}. ${k === 0 ? 'Totes parelles: circuit.' : `Dos senars (${join(eulerInfo(G).odd)}): el camí va de l'un a l'altre.`}`, `Valencias: ${degLine(G)}. ${k === 0 ? 'Todas pares: circuito.' : `Dos impares (${join(eulerInfo(G).odd)}): el camino va de uno al otro.`}`, `Degrees: ${degLine(G)}. ${k === 0 ? 'All even: circuit.' : `Two odd (${join(eulerInfo(G).odd)}): the path goes from one to the other.`}`),
          ...h.parts.map((pp, i) => L3(`${i === 0 ? 'Primer recorregut' : 'Circuit parcial des d\'un vèrtex amb costats lliures'}: ${pp.join(' ')}`, `${i === 0 ? 'Primer recorrido' : 'Circuito parcial desde un vértice con lados libres'}: ${pp.join(' ')}`, `${i === 0 ? 'First tour' : 'Partial circuit from a vertex with free edges'}: ${pp.join(' ')}`)),
          { x: L3(`Enganxant-los: **${h.walk.join(' ')}** (n'hi ha d'altres de correctes).`, `Enganchándolos: **${h.walk.join(' ')}** (hay otros correctos).`, `Splicing them: **${h.walk.join(' ')}** (others are also correct).`), done: true },
        ],
        rubric: rub([0.5, 'Justifica l\'existència amb les valències', 'Justifica la existencia con las valencias', 'Justifies existence with the degrees'], [1, 'Mètode aplicat (circuits parcials o Fleury) amb els passos', 'Método aplicado (circuitos parciales o Fleury) con los pasos', 'Method applied (partial circuits or Fleury) with steps'], [1, `Successió vàlida amb els ${G.E.length} costats una sola vegada`, `Sucesión válida con los ${G.E.length} lados una sola vez`, `Valid sequence using all ${G.E.length} edges once`]),
      };
    },
  },
  {
    id: 'gr4-hamilton', unit: 'gr4', level: 'hard', basedOn: L3('Circuits de Hamilton', 'Circuitos de Hamilton', 'Hamilton circuits'),
    gen(r) {
      let g, h;
      do { g = connected(r, r.int(6, 7), r.int(9, 11)); h = hamilton(g.G); } while (!h);
      return {
        type: 'seq', want: 'hamilton', G: g.G, pos: g.pos, answer: h, min: 10,
        qb: [p('Escriu un circuit de Hamilton (passa per cada vèrtex una sola vegada i torna a l\'inici).', 'Escribe un circuito de Hamilton (pasa por cada vértice una sola vez y vuelve al inicio).', 'Write a Hamilton circuit (each vertex exactly once, back to the start).'), fig(g.G, { pos: g.pos })],
        steps: [
          L3('Comença pels vèrtexs de valència 2: els seus dos costats hi han de ser per força.', 'Empieza por los vértices de valencia 2: sus dos lados tienen que estar a la fuerza.', 'Start with the degree-2 vertices: both their edges must be used.'),
          { x: L3(`Per exemple: **${h.join(' ')}**.`, `Por ejemplo: **${h.join(' ')}**.`, `For example: **${h.join(' ')}**.`), done: true },
        ],
      };
    },
  },
];

/* ================= gr5 · camí més curt ================= */
function dijSteps(G, s, t, run) {
  const rows = [[ '0', ...G.V.map((v) => (v === s ? '(0, –)' : '∞'))]];
  run.steps.forEach((st, i) => rows.push([String(i + 1), ...G.V.map((v) => {
    if (i > 0 && run.steps[i - 1].done.includes(v)) return '';
    const l = st.labels[v];
    return (l ? `(${l[0]}, ${l[1] ?? '–'})` : '∞') + (st.fix === v ? ' *' : '');
  })]));
  return { head: [L3('Pas', 'Paso', 'Step'), ...G.V], rows };
}
const gr5 = [
  {
    id: 'gr5-salts', unit: 'gr5', level: 'easy', basedOn: L3('Nombre mínim de costats', 'Número mínimo de lados', 'Fewest edges'),
    gen(r) {
      const { G, pos } = connected(r, 7, 9);
      const s = G.V[0], t = G.V[r.int(3, 6)], d = bfsDist(G, s);
      return {
        type: 'num', answer: d[t], min: 3,
        qb: [p(`Quin és el nombre mínim de costats per anar de ${s} a ${t}?`, `¿Cuál es el número mínimo de lados para ir de ${s} a ${t}?`, `What is the fewest number of edges from ${s} to ${t}?`), fig(G, { pos })],
        steps: [{ x: L3(`S'etiqueten els vèrtexs per capes des de ${s}: ${G.V.map((v) => `${v}:${d[v]}`).join(' ')}. Resultat: **${d[t]}**.`, `Se etiquetan los vértices por capas desde ${s}: ${G.V.map((v) => `${v}:${d[v]}`).join(' ')}. Resultado: **${d[t]}**.`, `Label vertices layer by layer from ${s}: ${G.V.map((v) => `${v}:${d[v]}`).join(' ')}. Result: **${d[t]}**.`), done: true }],
      };
    },
  },
  {
    id: 'gr5-dijkstra', unit: 'gr5', level: 'exam', basedOn: L3('Algorisme de Dijkstra', 'Algoritmo de Dijkstra', 'Dijkstra\'s algorithm'),
    gen(r) {
      const n = r.int(6, 7), { G, pos } = connected(r, n, n + r.int(3, 4), { weights: [1, 9] });
      const s = G.V[0], t = G.V[n - 1], run = dijkstra(G, s), path = pathTo(run.prev, t);
      return {
        type: 'nums', min: 15, pts: 3,
        qb: [p(`Aplica l'algorisme de Dijkstra des de ${s}. Quina és la longitud del camí més curt fins a ${t}? Quants costats té aquest camí?`, `Aplica el algoritmo de Dijkstra desde ${s}. ¿Cuál es la longitud del camino más corto hasta ${t}? ¿Cuántos lados tiene este camino?`, `Apply Dijkstra's algorithm from ${s}. What is the length of the shortest path to ${t}? How many edges does it have?`), fig(G, { pos })],
        parts: [{ label: L3('Longitud', 'Longitud', 'Length'), answer: run.dist[t] }, { label: L3('Costats', 'Lados', 'Edges'), answer: path.length - 1 }],
        steps: [
          { x: L3('Taula de l\'algorisme: (L, a) = distància provisional i vèrtex anterior; * = vèrtex que es fixa.', 'Tabla del algoritmo: (L, a) = distancia provisional y vértice anterior; * = vértice que se fija.', 'Algorithm table: (L, a) = temporary distance and previous vertex; * = vertex fixed.'), table: dijSteps(G, s, t, run) },
          { x: L3(`Es reconstrueix des de ${t} seguint a(v): **${path.join(' → ')}**, longitud **${run.dist[t]}**.`, `Se reconstruye desde ${t} siguiendo a(v): **${path.join(' → ')}**, longitud **${run.dist[t]}**.`, `Rebuild from ${t} following a(v): **${path.join(' → ')}**, length **${run.dist[t]}**.`), done: true },
        ],
        rubric: rub([1, 'Inicialització i etiquetes provisionals correctes', 'Inicialización y etiquetas provisionales correctas', 'Correct initialisation and temporary labels'], [1, 'A cada pas es fixa el mínim no definitiu i s\'actualitzen els veïns', 'En cada paso se fija el mínimo no definitivo y se actualizan los vecinos', 'Each step fixes the smallest non-permanent label and updates neighbours'], [1, 'Camí reconstruït i longitud', 'Camino reconstruido y longitud', 'Path rebuilt and length']),
      };
    },
  },
  {
    id: 'gr5-cami', unit: 'gr5', level: 'hard', basedOn: L3('Camí més curt', 'Camino más corto', 'Shortest path'),
    gen(r) {
      const n = 7, { G, pos } = connected(r, n, n + 4, { weights: [1, 9] });
      const s = G.V[0], t = G.V[r.int(4, 6)], run = dijkstra(G, s), path = pathTo(run.prev, t);
      return {
        type: 'seq', want: 'min', from: s, to: t, best: run.dist[t], G, pos, answer: path, min: 12,
        qb: [p(`Escriu un camí més curt de ${s} a ${t} (la successió de vèrtexs).`, `Escribe un camino más corto de ${s} a ${t} (la sucesión de vértices).`, `Write a shortest path from ${s} to ${t} (the sequence of vertices).`), fig(G, { pos })],
        steps: [
          { x: L3('Dijkstra des de l\'origen:', 'Dijkstra desde el origen:', 'Dijkstra from the source:'), table: dijSteps(G, s, t, run) },
          { x: L3(`**${path.join(' ')}**, de longitud ${run.dist[t]}.`, `**${path.join(' ')}**, de longitud ${run.dist[t]}.`, `**${path.join(' ')}**, of length ${run.dist[t]}.`), done: true },
        ],
      };
    },
  },
];

/* ================= gr6 · isomorfisme i planaritat ================= */
const gr6 = [
  {
    id: 'gr6-cares', unit: 'gr6', level: 'easy', basedOn: L3('Fórmula d\'Euler', 'Fórmula de Euler', 'Euler\'s formula'),
    gen(r) {
      const v = r.int(6, 14), e = r.int(v, 3 * v - 6);
      return {
        type: 'num', answer: 2 - v + e, min: 3,
        q: L3(`Un graf planar i connex té ${v} vèrtexs i ${e} costats. Quantes cares té qualsevol dibuix pla seu (comptant la cara exterior)?`, `Un grafo planar y conexo tiene ${v} vértices y ${e} lados. ¿Cuántas caras tiene cualquier dibujo plano suyo (contando la cara exterior)?`, `A connected planar graph has ${v} vertices and ${e} edges. How many faces does any plane drawing of it have (counting the outer face)?`),
        steps: [{ x: L3(`v − e + c = 2 ⇒ c = 2 − ${v} + ${e} = **${2 - v + e}**.`, `v − e + c = 2 ⇒ c = 2 − ${v} + ${e} = **${2 - v + e}**.`, `v − e + f = 2 ⇒ f = 2 − ${v} + ${e} = **${2 - v + e}**.`), done: true }],
      };
    },
  },
  {
    id: 'gr6-cota', unit: 'gr6', level: 'exam', basedOn: L3('Corol·laris de la fórmula d\'Euler', 'Corolarios de la fórmula de Euler', 'Corollaries of Euler\'s formula'),
    gen(r) {
      const v = r.int(6, 15), tri = r() < 0.5;
      const ans = tri ? 2 * v - 4 : 3 * v - 6;
      return {
        type: 'num', answer: ans, min: 8, pts: 2,
        q: tri ? L3(`Un graf simple, connex i planar, sense cap triangle (cap cicle de longitud 3), té ${v} vèrtexs. Quants costats pot tenir com a màxim?`, `Un grafo simple, conexo y planar, sin ningún triángulo (ningún ciclo de longitud 3), tiene ${v} vértices. ¿Cuántos lados puede tener como máximo?`, `A simple connected planar graph with no triangle (no cycle of length 3) has ${v} vertices. At most how many edges can it have?`)
          : L3(`Un graf simple, connex i planar té ${v} vèrtexs. Quants costats pot tenir com a màxim?`, `Un grafo simple, conexo y planar tiene ${v} vértices. ¿Cuántos lados puede tener como máximo?`, `A simple connected planar graph has ${v} vertices. At most how many edges can it have?`),
        steps: [
          tri ? L3('Sense triangles, cada cara té almenys 4 costats al voltant: 4c ≤ 2e.', 'Sin triángulos, cada cara tiene al menos 4 lados alrededor: 4c ≤ 2e.', 'With no triangles, each face is bounded by at least 4 edges: 4f ≤ 2e.') : L3('Cada cara té almenys 3 costats al voltant i cada costat toca com a molt 2 cares: 3c ≤ 2e.', 'Cada cara tiene al menos 3 lados alrededor y cada lado toca como mucho 2 caras: 3c ≤ 2e.', 'Each face has at least 3 edges around it and each edge touches at most 2 faces: 3f ≤ 2e.'),
          L3('Amb v − e + c = 2 s\'obté la cota:', 'Con v − e + c = 2 se obtiene la cota:', 'With v − e + f = 2 we get the bound:'),
          { x: tri ? `e ≤ 2v − 4 = 2·${v} − 4 = **${ans}**` : `e ≤ 3v − 6 = 3·${v} − 6 = **${ans}**`, done: true },
        ],
        rubric: rub([1, 'Fa servir la cota correcta (3v−6 o 2v−4) i en sap el motiu', 'Usa la cota correcta (3v−6 o 2v−4) y sabe el motivo', 'Uses the right bound (3v−6 or 2v−4) and knows why'], [1, 'Càlcul correcte', 'Cálculo correcto', 'Correct calculation']),
      };
    },
  },
  {
    id: 'gr6-iso', unit: 'gr6', level: 'exam', basedOn: L3('Grafs isomorfs', 'Grafos isomorfos', 'Isomorphic graphs'),
    gen(r) {
      const n = 6, a = connected(r, n, r.int(7, 8));
      const yes = r() < 0.5;
      const P = 'PQRSTU'.split(''), perm = r.shuffle(P), map = Object.fromEntries(a.G.V.map((v, i) => [v, perm[i]]));
      let G2 = graph(P, a.G.E.map(([x, y]) => [map[x], map[y]]));
      if (!yes) {
        // canvi que conserva les valències (dos costats AB, CD → AD, CB) fins que deixa de ser isomorf
        for (let t = 0; t < 60; t++) {
          const E = G2.E.map((e) => [...e]), i = r.int(0, E.length - 1), j = r.int(0, E.length - 1);
          const [x, y] = E[i], [u, w] = E[j];
          if (new Set([x, y, u, w]).size < 4 || E.some((e) => (e[0] === x && e[1] === w) || (e[0] === w && e[1] === x) || (e[0] === u && e[1] === y) || (e[0] === y && e[1] === u))) continue;
          E[i] = [x, w]; E[j] = [u, y];
          const H = graph(P, E);
          if (components(H).length === 1 && !isomorphism(a.G, H)) { G2 = H; break; }
        }
      }
      const iso = isomorphism(a.G, G2), i1 = invariants(a.G), i2 = invariants(G2);
      const diff = ['triangles', 'bipartite', 'comps'].find((k) => i1[k] !== i2[k]);
      return {
        type: 'tf', answer: !!iso, min: 12, pts: 2,
        qb: [p('Són isomorfs aquests dos grafs?', '¿Son isomorfos estos dos grafos?', 'Are these two graphs isomorphic?'), { t: 'cols', cols: [[fig(a.G, { pos: a.pos, w: 240, h: 200 })], [fig(G2, { w: 240, h: 200 })]] }],
        steps: [
          L3(`Mateix nombre de vèrtexs (${n}) i de costats (${a.G.E.length}), i mateixes valències (${i1.seq}).`, `Mismo número de vértices (${n}) y de lados (${a.G.E.length}), y mismas valencias (${i1.seq}).`, `Same number of vertices (${n}) and edges (${a.G.E.length}), and same degrees (${i1.seq}).`),
          iso ? { x: L3(`**Sí.** Una correspondència que conserva les adjacències: ${Object.entries(iso).map(([x, y]) => x + '→' + y).join(', ')}.`, `**Sí.** Una correspondencia que conserva las adyacencias: ${Object.entries(iso).map(([x, y]) => x + '→' + y).join(', ')}.`, `**Yes.** A mapping that preserves adjacency: ${Object.entries(iso).map(([x, y]) => x + '→' + y).join(', ')}.`), done: true }
            : { x: diff ? L3(`**No.** ${diffText(diff, i1, i2, 'ca')}`, `**No.** ${diffText(diff, i1, i2, 'es')}`, `**No.** ${diffText(diff, i1, i2, 'en')}`) : L3('**No.** Les valències coincideixen, però cap correspondència no conserva les adjacències: mira a qui són adjacents els vèrtexs de cada valència.', '**No.** Las valencias coinciden, pero ninguna correspondencia conserva las adyacencias: mira a quién son adyacentes los vértices de cada valencia.', '**No.** The degrees match, but no mapping preserves adjacency: look at what the vertices of each degree are adjacent to.'), done: true },
        ],
        rubric: rub([0.5, 'Compara vèrtexs, costats i valències', 'Compara vértices, lados y valencias', 'Compares vertices, edges and degrees'], [1.5, 'Dona la biyecció i la comprova, o un invariant que no es conserva', 'Da la biyección y la comprueba, o un invariante que no se conserva', 'Gives and checks the bijection, or an invariant that differs']),
      };
    },
  },
];
function diffText(k, a, b, l) {
  const T = {
    triangles: { ca: `G₁ té ${a.triangles} triangles i G₂ en té ${b.triangles}.`, es: `G₁ tiene ${a.triangles} triángulos y G₂ tiene ${b.triangles}.`, en: `G₁ has ${a.triangles} triangles and G₂ has ${b.triangles}.` },
    bipartite: { ca: `Un és bipartit i l'altre no (té un cicle senar).`, es: `Uno es bipartito y el otro no (tiene un ciclo impar).`, en: `One is bipartite and the other is not (it has an odd cycle).` },
    comps: { ca: `Tenen un nombre diferent de components.`, es: `Tienen un número distinto de componentes.`, en: `They have a different number of components.` },
  };
  return T[k][l];
}

/* ================= gr7 · acoloriment ================= */
const FAMS = (r) => {
  const n = r.int(5, 9), a = r.int(2, 4), b = r.int(2, 5);
  return r.pick([
    { G: complete(LETTERS.slice(0, Math.min(n, 7))), name: `K${sub(Math.min(n, 7))}`, k: Math.min(n, 7), why: L3('En un complet tots els vèrtexs són adjacents: cal un color per vèrtex.', 'En un completo todos los vértices son adyacentes: hace falta un color por vértice.', 'In a complete graph all vertices are adjacent: one colour per vertex.') },
    { G: bipartiteK(LETTERS.slice(0, a), LETTERS.slice(a, a + b)), name: `K${sub(a)},${sub(b)}`, k: 2, why: L3('És bipartit: un color per a cada part.', 'Es bipartito: un color para cada parte.', 'It is bipartite: one colour per side.') },
    { G: cycle(LETTERS.slice(0, n)), name: `C${sub(n)}`, k: n % 2 ? 3 : 2, why: n % 2 ? L3('Cicle senar: alternant dos colors, l\'últim vèrtex topa amb el primer; en cal un tercer.', 'Ciclo impar: alternando dos colores, el último vértice choca con el primero; hace falta un tercero.', 'Odd cycle: alternating two colours, the last vertex clashes with the first; a third is needed.') : L3('Cicle parell: dos colors alternats.', 'Ciclo par: dos colores alternados.', 'Even cycle: two alternating colours.') },
    { G: wheel(['O', ...LETTERS.slice(0, n - 1)]), name: `W${sub(n)}`, k: (n - 1) % 2 ? 4 : 3, why: (n - 1) % 2 ? L3('El centre necessita un color propi i el cicle de fora és senar (3 colors): 4.', 'El centro necesita un color propio y el ciclo de fuera es impar (3 colores): 4.', 'The hub needs its own colour and the rim is an odd cycle (3 colours): 4.') : L3('El centre necessita un color propi i el cicle de fora és parell (2 colors): 3.', 'El centro necesita un color propio y el ciclo de fuera es par (2 colores): 3.', 'The hub needs its own colour and the rim is an even cycle (2 colours): 3.') },
  ]);
};
const gr7 = [
  {
    id: 'gr7-familia', unit: 'gr7', level: 'easy', basedOn: L3('Nombre cromàtic de les famílies conegudes', 'Número cromático de las familias conocidas', 'Chromatic number of known families'),
    gen(r) {
      const f = FAMS(r);
      return {
        type: 'num', answer: f.k, min: 3,
        q: L3(`Quin és el nombre cromàtic γ(${f.name})?`, `¿Cuál es el número cromático γ(${f.name})?`, `What is the chromatic number γ(${f.name})?`),
        steps: [{ x: f.why, done: true }],
      };
    },
  },
  {
    id: 'gr7-acoloreix', unit: 'gr7', level: 'exam', basedOn: L3('Acoloriment amb el mínim de colors', 'Coloración con el mínimo de colores', 'Colouring with the fewest colours'),
    gen(r) {
      const { G, pos } = connected(r, r.int(6, 7), r.int(8, 11));
      const c = chromatic(G), wp = welshPowell(G);
      return {
        type: 'colour', G, pos, k: c.k, min: 8, pts: 2,
        qb: [p(`Acoloreix els vèrtexs amb ${c.k} colors com a màxim (dos vèrtexs adjacents, colors diferents).`, `Colorea los vértices con ${c.k} colores como máximo (dos vértices adyacentes, colores distintos).`, `Colour the vertices with at most ${c.k} colours (adjacent vertices get different colours).`), fig(G, { pos })],
        steps: [
          L3(`Welsh–Powell: ordre ${join(wp.order)}. ${wp.steps.map((s) => `Color ${s.c}: ${join(s.vs)}`).join('. ')}.`, `Welsh–Powell: orden ${join(wp.order)}. ${wp.steps.map((s) => `Color ${s.c}: ${join(s.vs)}`).join('. ')}.`, `Welsh–Powell: order ${join(wp.order)}. ${wp.steps.map((s) => `Colour ${s.c}: ${join(s.vs)}`).join('. ')}.`),
          { x: L3(`Amb ${c.k} colors: ${G.V.map((v) => `${v}:${c.col[v]}`).join(' ')}.${wp.k > c.k ? ` (Welsh–Powell n'ha fet servir ${wp.k}: no sempre troba el mínim.)` : ''}`, `Con ${c.k} colores: ${G.V.map((v) => `${v}:${c.col[v]}`).join(' ')}.${wp.k > c.k ? ` (Welsh–Powell ha usado ${wp.k}: no siempre encuentra el mínimo.)` : ''}`, `With ${c.k} colours: ${G.V.map((v) => `${v}:${c.col[v]}`).join(' ')}.${wp.k > c.k ? ` (Welsh–Powell used ${wp.k}: it does not always find the minimum.)` : ''}`), done: true },
        ],
        rubric: rub([1, 'Acoloriment vàlid (cap costat amb els extrems del mateix color)', 'Coloración válida (ningún lado con los extremos del mismo color)', 'Proper colouring (no edge with both ends the same colour)'], [1, `Amb ${c.k} colors i justifica que no se'n poden fer servir menys (un triangle, un cicle senar…)`, `Con ${c.k} colores y justifica que no se pueden usar menos (un triángulo, un ciclo impar…)`, `With ${c.k} colours, justifying no fewer is possible (a triangle, an odd cycle…)`]),
      };
    },
  },
  {
    id: 'gr7-cromatic', unit: 'gr7', level: 'hard', basedOn: L3('Nombre cromàtic', 'Número cromático', 'Chromatic number'),
    gen(r) {
      const { G, pos } = connected(r, 7, r.int(10, 13));
      const c = chromatic(G), bip = bipartition(G);
      return {
        type: 'num', answer: c.k, min: 8,
        qb: [p('Quin és el nombre cromàtic d\'aquest graf?', '¿Cuál es el número cromático de este grafo?', 'What is the chromatic number of this graph?'), fig(G, { pos })],
        steps: [
          L3(bip ? 'És bipartit: 2 colors n\'hi ha prou.' : `Fita inferior: ${c.k >= 3 ? 'té un cicle senar (o un triangle), així que almenys 3' : ''}${c.k >= 4 ? '; i un subgraf que en necessita 4' : ''}.`, bip ? 'Es bipartito: bastan 2 colores.' : `Cota inferior: ${c.k >= 3 ? 'tiene un ciclo impar (o un triángulo), así que al menos 3' : ''}${c.k >= 4 ? '; y un subgrafo que necesita 4' : ''}.`, bip ? 'It is bipartite: 2 colours suffice.' : `Lower bound: ${c.k >= 3 ? 'it has an odd cycle (or a triangle), so at least 3' : ''}${c.k >= 4 ? '; and a subgraph needing 4' : ''}.`),
          { x: L3(`Un acoloriment amb ${c.k}: ${G.V.map((v) => `${v}:${c.col[v]}`).join(' ')}. γ(G) = **${c.k}**.`, `Una coloración con ${c.k}: ${G.V.map((v) => `${v}:${c.col[v]}`).join(' ')}. γ(G) = **${c.k}**.`, `A colouring with ${c.k}: ${G.V.map((v) => `${v}:${c.col[v]}`).join(' ')}. γ(G) = **${c.k}**.`), done: true },
        ],
      };
    },
  },
];

/* ================= gr8 · arbres i recorreguts ================= */
const gr8 = [
  {
    id: 'gr8-arbres', unit: 'gr8', level: 'easy', basedOn: L3('Propietats dels arbres', 'Propiedades de los árboles', 'Properties of trees'),
    gen(r) {
      const n = r.int(8, 40), m = r.pick([2, 3]), i = r.int(4, 20);
      return {
        type: 'nums', min: 4,
        q: L3(`(a) Quants costats té un arbre de ${n} vèrtexs? (b) Un arbre ${m === 2 ? 'binari' : 'ternari'} regular (cada vèrtex intern té exactament ${m} fills) té ${i} vèrtexs interns: quantes fulles té?`, `(a) ¿Cuántos lados tiene un árbol de ${n} vértices? (b) Un árbol ${m === 2 ? 'binario' : 'ternario'} regular (cada vértice interno tiene exactamente ${m} hijos) tiene ${i} vértices internos: ¿cuántas hojas tiene?`, `(a) How many edges does a tree on ${n} vertices have? (b) A full ${m === 2 ? 'binary' : 'ternary'} tree (each internal vertex has exactly ${m} children) has ${i} internal vertices: how many leaves?`),
        parts: [{ label: '(a)', answer: n - 1 }, { label: '(b)', answer: (m - 1) * i + 1 }],
        steps: [L3(`(a) n − 1 = ${n - 1}.`, `(a) n − 1 = ${n - 1}.`, `(a) n − 1 = ${n - 1}.`), { x: L3(`(b) t = (m − 1)·i + 1 = ${m - 1}·${i} + 1 = ${(m - 1) * i + 1}.`, `(b) t = (m − 1)·i + 1 = ${m - 1}·${i} + 1 = ${(m - 1) * i + 1}.`, `(b) t = (m − 1)·i + 1 = ${m - 1}·${i} + 1 = ${(m - 1) * i + 1}.`), done: true }],
      };
    },
  },
  ...['bfs', 'dfs'].map((a) => ({
    id: 'gr8-' + a, unit: 'gr8', level: 'exam', basedOn: a === 'bfs' ? L3('Recorregut en amplada', 'Recorrido en anchura', 'Breadth-first search') : L3('Recorregut en profunditat', 'Recorrido en profundidad', 'Depth-first search'),
    gen(r) {
      const { G, pos } = connected(r, 7, r.int(8, 10));
      const run = a === 'bfs' ? bfs(G, 'A') : dfs(G, 'A');
      const ds = a === 'bfs' ? run.steps.map((s) => `${s.visit} → [${join(s.queue)}]`) : run.steps.map((s) => (s.visit ? `+${s.visit} [${join(s.stack)}]` : `−${s.back} [${join(s.stack)}]`));
      return {
        type: 'seq', want: 'exact', G, pos, answer: run.order, min: 8, pts: 2,
        qb: [p(a === 'bfs' ? 'Escriu l\'ordre en què el recorregut en **amplada** (BFS) visita els vèrtexs, començant per A i prenent els veïns per ordre alfabètic.' : 'Escriu l\'ordre en què el recorregut en **profunditat** (DFS) visita els vèrtexs, començant per A i prenent els veïns per ordre alfabètic.', a === 'bfs' ? 'Escribe el orden en que el recorrido en **anchura** (BFS) visita los vértices, empezando por A y tomando los vecinos por orden alfabético.' : 'Escribe el orden en que el recorrido en **profundidad** (DFS) visita los vértices, empezando por A y tomando los vecinos por orden alfabético.', a === 'bfs' ? 'Write the order in which **breadth-first** search (BFS) visits the vertices, starting at A and taking neighbours alphabetically.' : 'Write the order in which **depth-first** search (DFS) visits the vertices, starting at A and taking neighbours alphabetically.'), fig(G, { pos })],
        steps: [
          L3(a === 'bfs' ? 'Cua: es visita el primer de la cua i s\'hi afegeixen els seus veïns no vistos.' : 'Pila: es va al primer veí no vist del vèrtex de dalt; si no n\'hi ha, es desempila (tornada enrere).', a === 'bfs' ? 'Cola: se visita el primero de la cola y se añaden sus vecinos no vistos.' : 'Pila: se va al primer vecino no visto del vértice de arriba; si no hay, se desapila (vuelta atrás).', a === 'bfs' ? 'Queue: visit the front and enqueue its unseen neighbours.' : 'Stack: go to the first unseen neighbour of the top vertex; if none, pop (backtrack).'),
          ds.join(' · '),
          { x: `**${run.order.join(' ')}**`, done: true },
        ],
        rubric: rub([1, a === 'bfs' ? 'Fa servir una cua i ho mostra' : 'Fa servir una pila amb tornada enrere', a === 'bfs' ? 'Usa una cola y lo muestra' : 'Usa una pila con vuelta atrás', a === 'bfs' ? 'Uses a queue and shows it' : 'Uses a stack with backtracking'], [1, 'Ordre correcte respectant l\'ordre alfabètic', 'Orden correcto respetando el orden alfabético', 'Correct order respecting alphabetical order']),
      };
    },
  })),
  {
    id: 'gr8-minim', unit: 'gr8', level: 'exam', basedOn: L3('Arbre generador minimal', 'Árbol generador minimal', 'Minimum spanning tree'),
    gen(r) {
      const n = r.int(6, 7), { G, pos } = connected(r, n, n + r.int(3, 5), { weights: [1, 9] });
      const k = kruskal(G);
      return {
        type: 'num', answer: k.total, min: 10, pts: 2.5,
        qb: [p('Quin és el pes d\'un arbre generador minimal d\'aquest graf? (Fes servir Kruskal o Prim.)', '¿Cuál es el peso de un árbol generador minimal de este grafo? (Usa Kruskal o Prim.)', 'What is the weight of a minimum spanning tree of this graph? (Use Kruskal or Prim.)'), fig(G, { pos })],
        steps: [
          L3('Kruskal: costats de menys a més pes; s\'accepta si no fa cicle.', 'Kruskal: lados de menos a más peso; se acepta si no hace ciclo.', 'Kruskal: edges by increasing weight; accept unless it closes a cycle.'),
          k.steps.map((s) => `${s.edge[0]}${s.edge[1]}(${s.edge[2]})${s.ok ? '✓' : '✗'}`).join('  '),
          { x: L3(`${n - 1} costats acceptats: pes **${k.total}**.`, `${n - 1} lados aceptados: peso **${k.total}**.`, `${n - 1} edges accepted: weight **${k.total}**.`), done: true },
        ],
        rubric: rub([1, 'Ordena els costats i rebutja els que fan cicle (o Prim pas a pas)', 'Ordena los lados y rechaza los que hacen ciclo (o Prim paso a paso)', 'Sorts edges and rejects cycle-forming ones (or Prim step by step)'], [0.5, `Té n − 1 = ${n - 1} costats`, `Tiene n − 1 = ${n - 1} lados`, `Has n − 1 = ${n - 1} edges`], [1, 'Pes total correcte', 'Peso total correcto', 'Correct total weight']),
      };
    },
  },
];

/* ================= gr9 · planificació de projectes ================= */
const projTable = (T) => ({ t: 'table', head: [L3('Tasca', 'Tarea', 'Task'), L3('Durada', 'Duración', 'Duration'), L3('Immediatament anteriors', 'Inmediatamente anteriores', 'Immediately before')], rows: T.map((t) => [t.id, String(t.d), t.pre.join(', ') || '—']) });
const gr9 = [
  {
    id: 'gr9-nivells', unit: 'gr9', level: 'easy', basedOn: L3('Nivells de les tasques', 'Niveles de las tareas', 'Task levels'),
    gen(r) {
      const T = project(r, 6), c = cpm(T);
      return {
        type: 'nums', min: 5,
        qb: [p('Calcula el nivell de cada tasca.', 'Calcula el nivel de cada tarea.', 'Compute the level of each task.'), projTable(T)],
        parts: T.map((t) => ({ label: t.id, answer: c.level[t.id] })),
        steps: [L3('Nivell 0: les que no tenen anteriors. Nivell i: les que ja no tenen anteriors quan s\'han tret les de nivells més baixos.', 'Nivel 0: las que no tienen anteriores. Nivel i: las que ya no tienen anteriores cuando se han quitado las de niveles más bajos.', 'Level 0: tasks with nothing before. Level i: those with nothing before once lower levels are removed.'), { x: T.map((t) => `${t.id}:${c.level[t.id]}`).join('  '), done: true }],
      };
    },
  },
  {
    id: 'gr9-cpm', unit: 'gr9', level: 'exam', basedOn: L3('Mètode C.P.M.', 'Método C.P.M.', 'CPM method'),
    gen(r) {
      let T, c;
      do { T = project(r, r.int(6, 8)); c = cpm(T); } while (c.paths.length !== 1);
      const x = r.pick(T.filter((t) => c.total[t.id] > 0).map((t) => t.id).concat(T[0].id));
      return {
        type: 'nums', min: 18, pts: 3,
        qb: [p(`Dibuixa el graf del projecte i calcula: la durada mínima, les dates early i last de la tasca ${x} i el seu marge total.`, `Dibuja el grafo del proyecto y calcula: la duración mínima, las fechas early y last de la tarea ${x} y su margen total.`, `Draw the project graph and compute: the minimum duration, the early and last dates of task ${x} and its total slack.`), projTable(T)],
        parts: [
          { label: L3('Durada', 'Duración', 'Duration'), answer: c.duration }, { label: `T_${x}`, answer: c.early[x] },
          { label: `T′_${x}`, answer: c.late[x] }, { label: `Mᵀ(${x})`, answer: c.total[x] },
        ],
        steps: [
          { x: L3('Dates early (endavant, el màxim) i last (enrere, el mínim):', 'Fechas early (hacia delante, el máximo) y last (hacia atrás, el mínimo):', 'Early dates (forward, take the max) and last dates (backward, take the min):'), table: { head: [L3('Tasca', 'Tarea', 'Task'), L3('Nivell', 'Nivel', 'Level'), 'T', 'T′', 'Mᵀ'], rows: T.map((t) => [t.id, String(c.level[t.id]), String(c.early[t.id]), String(c.late[t.id]), String(c.total[t.id])]) } },
          { x: L3(`Durada ${c.duration}; camí crític ${c.paths[0].join(' → ')}.`, `Duración ${c.duration}; camino crítico ${c.paths[0].join(' → ')}.`, `Duration ${c.duration}; critical path ${c.paths[0].join(' → ')}.`), done: true },
        ],
        rubric: rub([0.5, 'Nivells i graf del projecte (amb inici i final)', 'Niveles y grafo del proyecto (con inicio y final)', 'Levels and project graph (with start and end)'], [1, 'Dates early correctes (màxim)', 'Fechas early correctas (máximo)', 'Correct early dates (maximum)'], [1, 'Dates last correctes (mínim)', 'Fechas last correctas (mínimo)', 'Correct last dates (minimum)'], [0.5, 'Durada, marge i camí crític', 'Duración, margen y camino crítico', 'Duration, slack and critical path']),
      };
    },
  },
  {
    id: 'gr9-critic', unit: 'gr9', level: 'hard', basedOn: L3('Camí crític', 'Camino crítico', 'Critical path'),
    gen(r) {
      let T, c;
      do { T = project(r, 8); c = cpm(T); } while (c.paths.length !== 1);
      return {
        type: 'seq', want: 'exact', G: graph(T.map((t) => t.id), []), answer: c.paths[0], min: 15,
        qb: [p('Escriu les tasques del camí crític, en ordre.', 'Escribe las tareas del camino crítico, en orden.', 'Write the tasks on the critical path, in order.'), projTable(T)],
        steps: [
          { x: L3('Marges totals:', 'Márgenes totales:', 'Total slacks:'), table: { head: [L3('Tasca', 'Tarea', 'Task'), 'T', 'T′', 'Mᵀ'], rows: T.map((t) => [t.id, String(c.early[t.id]), String(c.late[t.id]), String(c.total[t.id])]) } },
          { x: L3(`Les tasques crítiques (marge 0) formen **${c.paths[0].join(' → ')}**, de durada ${c.duration}.`, `Las tareas críticas (margen 0) forman **${c.paths[0].join(' → ')}**, de duración ${c.duration}.`, `The critical tasks (slack 0) form **${c.paths[0].join(' → ')}**, of duration ${c.duration}.`), done: true },
        ],
      };
    },
  },
];

export const GRAPH_FAMILIES = [...gr1, ...gr2, ...gr3, ...gr4, ...gr5, ...gr6, ...gr7, ...gr8, ...gr9];
