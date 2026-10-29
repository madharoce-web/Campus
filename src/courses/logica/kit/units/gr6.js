/**
 * Grafs · G6. Isomorfisme (definició, invariants) i grafs planars (cares, fórmula d'Euler, corol·laris,
 * reduccions en sèrie, Kuratowski i graf dual).
 */
import { D, X, L3, p, h, box, boxi, table, lab, check, ref, example, fig, figs, hr } from '../../graphs/lesson.js';
import { invariants, isomorphism, planarBounds } from '../../graphs/model.js';
import { grid } from '../../graphs/svg.js';
import { make, complete, cycle, bipartiteK, PRESETS } from '../../graphs/presets.js';
import { EX } from '../../graphs/fixed.js';

const C5 = cycle(['A', 'B', 'C', 'D', 'E']);
const ST = make('PQRST', 'PR RT TQ QS SP');
const f = isomorphism(C5, ST);
const PR = PRESETS.prisma;
const K33 = bipartiteK(['P', 'Q', 'R'], ['S', 'T', 'U']);
const K33P = grid({ P: [1, 1], Q: [5, 1], R: [9, 1], S: [1, 9], T: [5, 9], U: [9, 9] }, { w: 230, h: 190 });
const ip = invariants(PR.G), ik = invariants(K33);
const yes = L3('sí', 'sí', 'yes');

const s1 = [
  p('Si dues persones dibuixen el mateix graf, és difícil que els dibuixos coincideixin. Com sabem si dos dibuixos són el mateix graf amb els vèrtexs canviats de nom?',
    'Si dos personas dibujan el mismo grafo, es difícil que los dibujos coincidan. ¿Cómo sabemos si dos dibujos son el mismo grafo con los vértices cambiados de nombre?',
    'If two people draw the same graph, their drawings will rarely match. How can we tell whether two drawings are the same graph with the vertices renamed?', X),
  box('def', L3('grafs isomorfs', 'grafos isomorfos', 'isomorphic graphs'), L3(
    '$G_1 = (V_1, E_1)$ i $G_2 = (V_2, E_2)$ són **isomorfs** si hi ha una bijecció $f: V_1 \\to V_2$ que **conserva les adjacències**: $u$ i $v$ són adjacents a $G_1$ si i només si $f(u)$ i $f(v)$ ho són a $G_2$ (amb el mateix nombre de costats). Són el mateix graf amb uns altres noms.',
    '$G_1 = (V_1, E_1)$ y $G_2 = (V_2, E_2)$ son **isomorfos** si hay una biyección $f: V_1 \\to V_2$ que **conserva las adyacencias**: $u$ y $v$ son adyacentes en $G_1$ si y solo si $f(u)$ y $f(v)$ lo son en $G_2$ (con el mismo número de lados). Son el mismo grafo con otros nombres.',
    '$G_1 = (V_1, E_1)$ and $G_2 = (V_2, E_2)$ are **isomorphic** if there is a bijection $f: V_1 \\to V_2$ that **preserves adjacency**: $u$ and $v$ are adjacent in $G_1$ if and only if $f(u)$ and $f(v)$ are in $G_2$ (with the same number of edges). They are the same graph with different names.')),
  figs([
    [C5, { w: 210, h: 190 }, L3('Un pentàgon…', 'Un pentágono…', 'A pentagon…')],
    [ST, { w: 210, h: 190 }, L3('…i una estrella: isomorfs', '…y una estrella: isomorfos', '…and a star: isomorphic')],
  ]),
  p(`Bijecció: ${Object.entries(f).map(([a, b]) => a + '→' + b).join(', ')}. Comprova-ho: AB és un costat i ${f.A}${f.B} també; AC no ho és i ${f.A}${f.C} tampoc.`,
    `Biyección: ${Object.entries(f).map(([a, b]) => a + '→' + b).join(', ')}. Compruébalo: AB es un lado y ${f.A}${f.B} también; AC no lo es y ${f.A}${f.C} tampoco.`,
    `Bijection: ${Object.entries(f).map(([a, b]) => a + '→' + b).join(', ')}. Check it: AB is an edge and so is ${f.A}${f.B}; AC is not and neither is ${f.A}${f.C}.`),
  h('Invariants', 'Invariantes', 'Invariants'),
  boxi('prop', L3('si són isomorfs, coincideixen…', 'si son isomorfos, coinciden…', 'if isomorphic, they share…'), [
    L3('el nombre de vèrtexs i el de costats;', 'el número de vértices y el de lados;', 'the number of vertices and of edges;'),
    L3('la **seqüència de valències** (ordenada);', 'la **secuencia de valencias** (ordenada);', 'the **degree sequence** (sorted);'),
    L3('el nombre de bucles, de costats paral·lels i de components connexes;', 'el número de bucles, de lados paralelos y de componentes conexas;', 'the number of loops, parallel edges and connected components;'),
    L3('els cicles de cada longitud (triangles, quadrats…) i ser bipartit, eulerià, hamiltonià o planar;', 'los ciclos de cada longitud (triángulos, cuadrados…) y ser bipartito, euleriano, hamiltoniano o planar;', 'the cycles of each length (triangles, squares…) and being bipartite, Eulerian, Hamiltonian or planar;'),
    L3('les adjacències entre vèrtexs de cada valència (a qui és veí el vèrtex de valència 4?).', 'las adyacencias entre vértices de cada valencia (¿de quién es vecino el vértice de valencia 4?).', 'the adjacencies between vertices of each degree (who is the degree-4 vertex adjacent to?).'),
  ]),
  box('warn', L3('Necessàries, però no suficients', 'Necesarias, pero no suficientes', 'Necessary, not sufficient'), L3(
    'Si un invariant **no** coincideix, segur que **no** són isomorfs. Si tots els que mires coincideixen, encara no està demostrat: cal donar la bijecció i comprovar-la.',
    'Si un invariante **no** coincide, seguro que **no** son isomorfos. Si todos los que miras coinciden, todavía no está demostrado: hay que dar la biyección y comprobarla.',
    'If an invariant does **not** match, they are certainly **not** isomorphic. If all those you check match, nothing is proved yet: give the bijection and check it.')),
  figs([
    [PR, { w: 230, h: 190 }, L3('Prisma', 'Prisma', 'Prism')],
    [{ G: K33, pos: K33P }, { w: 230, h: 190 }, 'K₃,₃'],
  ]),
  table([L3('Invariant', 'Invariante', 'Invariant'), L3('Prisma', 'Prisma', 'Prism'), 'K₃,₃'], [
    [L3('Vèrtexs / costats', 'Vértices / lados', 'Vertices / edges'), `${ip.n} / ${ip.m}`, `${ik.n} / ${ik.m}`],
    [L3('Valències', 'Valencias', 'Degrees'), ip.seq, ik.seq],
    [L3('Triangles', 'Triángulos', 'Triangles'), String(ip.triangles), String(ik.triangles)],
    [L3('Bipartit', 'Bipartito', 'Bipartite'), 'no', yes],
  ], undefined, L3('Mateixes valències, però el prisma té triangles i K₃,₃ no: **no** són isomorfs.', 'Mismas valencias, pero el prisma tiene triángulos y K₃,₃ no: **no** son isomorfos.', 'Same degrees, but the prism has triangles and K₃,₃ does not: **not** isomorphic.')),
  box('thm', L3('isomorfisme i matrius', 'isomorfismo y matrices', 'isomorphism and matrices'), L3(
    '$G_1$ i $G_2$ són isomorfs si i només si es pot reordenar els vèrtexs de $G_2$ de manera que la seva matriu d\'adjacència sigui igual que la de $G_1$.',
    '$G_1$ y $G_2$ son isomorfos si y solo si se pueden reordenar los vértices de $G_2$ de manera que su matriz de adyacencia sea igual a la de $G_1$.',
    '$G_1$ and $G_2$ are isomorphic if and only if the vertices of $G_2$ can be reordered so that its adjacency matrix equals that of $G_1$.'), X),
  lab('g-iso'),
  ref('gr6-iso', 3),
];

const K4 = complete(['A', 'B', 'C', 'D']);
const K4X = grid({ A: [0, 0], B: [10, 0], C: [0, 10], D: [10, 10] }, { w: 210, h: 190 });
const K4P = grid({ A: [5, 0], B: [0, 10], C: [10, 10], D: [5, 6.2] }, { w: 210, h: 190 });
const K5 = complete(['A', 'B', 'C', 'D', 'E']);
const b5 = planarBounds(K5), b33 = planarBounds(K33);
// reducció en sèrie: un K₃,₃ amb un costat subdividit (vèrtex M de valència 2)
const SUB = make('PQRSTUM', 'PS PT PM MU QS QT QU RS RT RU');
const SUBP = grid({ P: [1, 1], Q: [5, 1], R: [9, 1], S: [1, 9], T: [5, 9], U: [9, 9], M: [6.5, 4] }, { w: 230, h: 190 });
const s2 = [
  box('def', L3('graf planar', 'grafo planar', 'planar graph'), L3(
    'Un graf és **planar** si es pot dibuixar al pla **sense que cap costat en talli un altre** (només es toquen als vèrtexs). Un dibuix així és un **graf pla**. Un graf planar pot tenir dibuixos amb encreuaments: n\'hi ha prou que en tingui un sense.',
    'Un grafo es **planar** si se puede dibujar en el plano **sin que ningún lado corte a otro** (solo se tocan en los vértices). Un dibujo así es un **grafo plano**. Un grafo planar puede tener dibujos con cruces: basta con que tenga uno sin ellos.',
    'A graph is **planar** if it can be drawn in the plane **with no two edges crossing** (they meet only at vertices). Such a drawing is a **plane graph**. A planar graph may also have drawings with crossings: one without is enough.')),
  figs([
    [{ G: K4, pos: K4X }, { w: 210, h: 190, badE: [['A', 'D'], ['B', 'C']] }, L3('K₄ amb un encreuament…', 'K₄ con un cruce…', 'K₄ with a crossing…')],
    [{ G: K4, pos: K4P }, { w: 210, h: 190 }, L3('…i sense: K₄ és planar (4 cares)', '…y sin él: K₄ es planar (4 caras)', '…and without: K₄ is planar (4 faces)')],
  ]),
  box('def', L3('cares', 'caras', 'faces'), L3(
    'Un graf pla divideix el pla en regions, les **cares**. Una d\'elles, la **cara exterior**, no està fitada. El **grau d\'una cara** és el nombre de costats que la voregen (un istme dins d\'una cara compta dues vegades).',
    'Un grafo plano divide el plano en regiones, las **caras**. Una de ellas, la **cara exterior**, no está acotada. El **grado de una cara** es el número de lados que la bordean (un istmo dentro de una cara cuenta dos veces).',
    'A plane graph splits the plane into regions, the **faces**. One of them, the **outer face**, is unbounded. The **degree of a face** is the number of edges around it (a bridge inside a face counts twice).')),
  box('thm', L3('fórmula d\'Euler (1750)', 'fórmula de Euler (1750)', 'Euler\'s formula (1750)'), L3(
    'Si $G$ és un graf planar **connex** amb $v$ vèrtexs, $e$ costats i $c$ cares, $$v - e + c = 2.$$ Totes les maneres de dibuixar-lo sense encreuaments tenen, doncs, el mateix nombre de cares.',
    'Si $G$ es un grafo planar **conexo** con $v$ vértices, $e$ lados y $c$ caras, $$v - e + c = 2.$$ Todas las maneras de dibujarlo sin cruces tienen, pues, el mismo número de caras.',
    'If $G$ is a **connected** planar graph with $v$ vertices, $e$ edges and $f$ faces, $$v - e + f = 2.$$ So every crossing-free drawing has the same number of faces.')),
  p('Comprova-ho amb el cub: 8 vèrtexs, 12 costats i 6 cares (les sis cares del dau): 8 − 12 + 6 = 2. Amb $k$ components, la fórmula és $v - e + c = k + 1$.', 'Compruébalo con el cubo: 8 vértices, 12 lados y 6 caras (las seis caras del dado): 8 − 12 + 6 = 2. Con $k$ componentes, la fórmula es $v - e + c = k + 1$.', 'Check it on the cube: 8 vertices, 12 edges and 6 faces (the six faces of a die): 8 − 12 + 6 = 2. With $k$ components, the formula is $v - e + f = k + 1$.'),
  box('prop', L3('corol·laris', 'corolarios', 'corollaries'), L3(
    'Si $G$ és simple, connex i planar amb $v \\ge 3$: **(1)** $e \\le 3v - 6$; **(2)** si no té triangles, $e \\le 2v - 4$; **(3)** té algun vèrtex de valència $\\le 5$.',
    'Si $G$ es simple, conexo y planar con $v \\ge 3$: **(1)** $e \\le 3v - 6$; **(2)** si no tiene triángulos, $e \\le 2v - 4$; **(3)** tiene algún vértice de valencia $\\le 5$.',
    'If $G$ is simple, connected and planar with $v \\ge 3$: **(1)** $e \\le 3v - 6$; **(2)** with no triangles, $e \\le 2v - 4$; **(3)** some vertex has degree $\\le 5$.')),
  example(L3('d\'on surt e ≤ 3v − 6', 'de dónde sale e ≤ 3v − 6', 'where e ≤ 3v − 6 comes from'), L3('Dedueix la cota a partir de la fórmula d\'Euler.', 'Deduce la cota a partir de la fórmula de Euler.', 'Derive the bound from Euler\'s formula.'), [
    { x: L3('Cada cara està voltada d\'almenys 3 costats i cada costat voreja com a molt 2 cares: $3c \\le 2e$.', 'Cada cara está rodeada de al menos 3 lados y cada lado bordea como mucho 2 caras: $3c \\le 2e$.', 'Each face has at least 3 edges around it and each edge borders at most 2 faces: $3f \\le 2e$.'), why: L3('El graf és simple: no hi ha cares de 1 o 2 costats.', 'El grafo es simple: no hay caras de 1 o 2 lados.', 'The graph is simple: no faces with 1 or 2 edges.') },
    L3('$c = 2 - v + e$, i per tant $3(2 - v + e) \\le 2e$.', '$c = 2 - v + e$, y por tanto $3(2 - v + e) \\le 2e$.', '$f = 2 - v + e$, so $3(2 - v + e) \\le 2e$.'),
    L3('$6 - 3v + 3e \\le 2e \\Rightarrow e \\le 3v - 6$. Sense triangles, cada cara té almenys 4 costats: $4c \\le 2e \\Rightarrow e \\le 2v - 4$.', '$6 - 3v + 3e \\le 2e \\Rightarrow e \\le 3v - 6$. Sin triángulos, cada cara tiene al menos 4 lados: $4c \\le 2e \\Rightarrow e \\le 2v - 4$.', '$6 - 3v + 3e \\le 2e \\Rightarrow e \\le 3v - 6$. With no triangles each face has at least 4 edges: $4f \\le 2e \\Rightarrow e \\le 2v - 4$.'),
  ], undefined, X),
  example(L3('K₅ i K₃,₃ no són planars', 'K₅ y K₃,₃ no son planares', 'K₅ and K₃,₃ are not planar'), L3('Demostra-ho amb els corol·laris.', 'Demuéstralo con los corolarios.', 'Prove it with the corollaries.'), [
    L3(`K₅: v = ${b5.v}, e = ${b5.e} i 3v − 6 = ${b5.max3}. Com que ${b5.e} > ${b5.max3}, no pot ser planar.`, `K₅: v = ${b5.v}, e = ${b5.e} y 3v − 6 = ${b5.max3}. Como ${b5.e} > ${b5.max3}, no puede ser planar.`, `K₅: v = ${b5.v}, e = ${b5.e} and 3v − 6 = ${b5.max3}. Since ${b5.e} > ${b5.max3}, it cannot be planar.`),
    { x: L3(`K₃,₃: e = ${b33.e} ≤ 3v − 6 = ${b33.max3} es compleix i no prova res. Però és bipartit, sense triangles: 2v − 4 = ${b33.max2} < ${b33.e}.`, `K₃,₃: e = ${b33.e} ≤ 3v − 6 = ${b33.max3} se cumple y no prueba nada. Pero es bipartito, sin triángulos: 2v − 4 = ${b33.max2} < ${b33.e}.`, `K₃,₃: e = ${b33.e} ≤ 3v − 6 = ${b33.max3} holds and proves nothing. But it is bipartite, with no triangles: 2v − 4 = ${b33.max2} < ${b33.e}.`), why: L3('Un graf bipartit no té cicles senars, i el triangle és un cicle de longitud 3.', 'Un grafo bipartito no tiene ciclos impares, y el triángulo es un ciclo de longitud 3.', 'A bipartite graph has no odd cycles, and a triangle is a cycle of length 3.') },
  ], L3('Cap dels dos no és planar.', 'Ninguno de los dos es planar.', 'Neither is planar.')),
  box('warn', L3('Les cotes només serveixen per dir que NO', 'Las cotas solo sirven para decir que NO', 'The bounds can only say NO'), L3(
    'Si un graf compleix $e \\le 3v - 6$, pot ser planar o no. Per demostrar que **sí** que ho és, dibuixa\'l sense encreuaments.',
    'Si un grafo cumple $e \\le 3v - 6$, puede ser planar o no. Para demostrar que **sí** lo es, dibújalo sin cruces.',
    'A graph satisfying $e \\le 3v - 6$ may or may not be planar. To prove it **is**, draw it with no crossings.')),
  lab('g-planar'),
  h('Reduccions en sèrie i teorema de Kuratowski', 'Reducciones en serie y teorema de Kuratowski', 'Series reductions and Kuratowski\'s theorem'),
  p('Si un vèrtex $v$ té valència 2 amb costats $\\{u, v\\}$ i $\\{v, w\\}$, una **reducció en sèrie** l\'elimina i posa el costat $\\{u, w\\}$. És «treure un punt del mig d\'una línia»: no canvia si el graf és planar. Dos grafs són **homeomorfs** si són isomorfs després de fer-los reduccions en sèrie.',
    'Si un vértice $v$ tiene valencia 2 con lados $\\{u, v\\}$ y $\\{v, w\\}$, una **reducción en serie** lo elimina y pone el lado $\\{u, w\\}$. Es «quitar un punto del medio de una línea»: no cambia si el grafo es planar. Dos grafos son **homeomorfos** si son isomorfos después de hacerles reducciones en serie.',
    'If a vertex $v$ has degree 2 with edges $\\{u, v\\}$ and $\\{v, w\\}$, a **series reduction** removes it and adds the edge $\\{u, w\\}$. It «removes a point from the middle of a line»: planarity does not change. Two graphs are **homeomorphic** if they become isomorphic after series reductions.'),
  fig({ G: SUB, pos: SUBP }, { hlV: ['M'], hlE: [['P', 'M'], ['M', 'U']] }, L3('M té valència 2: si el treus i uneixes P i U, surt K₃,₃. Aquest graf és homeomorf a K₃,₃ i, per tant, no és planar.', 'M tiene valencia 2: si lo quitas y unes P y U, sale K₃,₃. Este grafo es homeomorfo a K₃,₃ y, por tanto, no es planar.', 'M has degree 2: remove it and join P and U to get K₃,₃. This graph is homeomorphic to K₃,₃, so it is not planar.'), X),
  box('thm', L3('Kuratowski (1930)', 'Kuratowski (1930)', 'Kuratowski (1930)'), L3(
    'Un graf és planar si i només si **no conté cap subgraf homeomorf a $K_5$ ni a $K_{3,3}$**.',
    'Un grafo es planar si y solo si **no contiene ningún subgrafo homeomorfo a $K_5$ ni a $K_{3,3}$**.',
    'A graph is planar if and only if it **contains no subgraph homeomorphic to $K_5$ or $K_{3,3}$**.')),
  h('Graf dual', 'Grafo dual', 'Dual graph'),
  p('Donat un graf pla $G$, el **dual** $G^*$ té un vèrtex dins de cada cara de $G$ i, per cada costat $e$ de $G$, un costat $e^*$ que l\'encreua i uneix les dues cares que $e$ separa. Si $G$ és connex amb $n$ vèrtexs, $m$ costats i $c$ cares: $n^* = c$, $m^* = m$ i $c^* = n$.',
    'Dado un grafo plano $G$, el **dual** $G^*$ tiene un vértice dentro de cada cara de $G$ y, por cada lado $e$ de $G$, un lado $e^*$ que lo cruza y une las dos caras que $e$ separa. Si $G$ es conexo con $n$ vértices, $m$ lados y $c$ caras: $n^* = c$, $m^* = m$ y $c^* = n$.',
    'Given a plane graph $G$, the **dual** $G^*$ has one vertex inside each face of $G$ and, for each edge $e$ of $G$, an edge $e^*$ crossing it and joining the two faces $e$ separates. If $G$ is connected with $n$ vertices, $m$ edges and $f$ faces: $n^* = f$, $m^* = m$ and $f^* = n$.', X),
  p('El dual del cub és l\'octaedre, i el de $K_4$ és un altre $K_4$. Acolorir un mapa és acolorir els vèrtexs del seu dual (tema G7).', 'El dual del cubo es el octaedro, y el de $K_4$ es otro $K_4$. Colorear un mapa es colorear los vértices de su dual (tema G7).', 'The dual of the cube is the octahedron, and the dual of $K_4$ is another $K_4$. Colouring a map means colouring the vertices of its dual (unit G7).', X),
  check(EX['g1-c6']),
  ref('gr6-cares', 5),
];

export default {
  intro: [
    p('Dues preguntes sobre la forma: quan dos dibuixos diferents són el mateix graf (isomorfisme), i quan un graf es pot dibuixar sense que es creuin els costats (planaritat), com un circuit imprès d\'una sola capa.',
      'Dos preguntas sobre la forma: cuándo dos dibujos distintos son el mismo grafo (isomorfismo), y cuándo un grafo se puede dibujar sin que se crucen los lados (planaridad), como un circuito impreso de una sola capa.',
      'Two questions about shape: when two different drawings are the same graph (isomorphism), and when a graph can be drawn with no crossing edges (planarity), like a single-layer printed circuit.'),
    boxi('summary', L3('D\'un cop d\'ull', 'De un vistazo', 'At a glance'), [
      L3('Isomorfs: bijecció que conserva adjacències. Per dir que no, un invariant diferent.', 'Isomorfos: biyección que conserva adyacencias. Para decir que no, un invariante distinto.', 'Isomorphic: a bijection preserving adjacency. To show they are not, a differing invariant.'),
      L3('Planar connex: $v - e + c = 2$; simple: $e \\le 3v - 6$; sense triangles: $e \\le 2v - 4$.', 'Planar conexo: $v - e + c = 2$; simple: $e \\le 3v - 6$; sin triángulos: $e \\le 2v - 4$.', 'Connected planar: $v - e + f = 2$; simple: $e \\le 3v - 6$; triangle-free: $e \\le 2v - 4$.'),
      L3('Kuratowski: no planar ⇔ conté un $K_5$ o un $K_{3,3}$ «subdividit».', 'Kuratowski: no planar ⇔ contiene un $K_5$ o un $K_{3,3}$ «subdividido».', 'Kuratowski: non-planar ⇔ contains a «subdivided» $K_5$ or $K_{3,3}$.'),
    ], D),
    hr(),
  ],
  sections: { '11-grafs-isomorfs': s1, '12-grafs-planars': s2 },
  examEnd: [EX['g1-x1'], { ref: 'gr6-cota', seed: 6 }, { ref: 'gr6-iso', seed: 9 }],
};
