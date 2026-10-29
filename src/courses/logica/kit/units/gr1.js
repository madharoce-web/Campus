/**
 * Grafs · G1. Què és un graf: vèrtexs i costats, valències, grafs especials i operacions.
 * Redacció pròpia sobre el temari del seminari; figures generades amb graphs/svg.js.
 */
import { D, X, L3, p, h, box, boxi, table, lab, check, ref, example, fig, figs, galleryFig, hr } from '../../graphs/lesson.js';
import { graph, complement } from '../../graphs/model.js';
import { grid, graphSvg } from '../../graphs/svg.js';
import { make, complete, cycle, wheel, bipartiteK, PRESETS } from '../../graphs/presets.js';
import { EX } from '../../graphs/fixed.js';

// graf d'exemple de tot el tema: un bucle a D i dos costats entre B i C (multigraf)
const G0 = make('ABCDE', 'AB BC BC AC CE DE AE DD');
const P0 = grid({ A: [3.5, 0], B: [0, 4.5], C: [3.5, 8], E: [7.5, 4], D: [8, 9] });
const elab = Object.fromEntries(G0.E.map((_, i) => [i, 'e' + '₁₂₃₄₅₆₇₈'[i]]));
const DG = make('ABCD', 'AB BC CA CD DD', true);
const DP = grid({ A: [0, 0], B: [10, 0], C: [5, 6], D: [5, 10] });

const s1 = [
  p('Un graf és la manera més senzilla de dir **qui està connectat amb qui**: estacions i línies de metro, persones i amistats, ordinadors i cables, tasques i dependències. Només importa la connexió, no la distància ni la forma del dibuix.',
    'Un grafo es la manera más sencilla de decir **quién está conectado con quién**: estaciones y líneas de metro, personas y amistades, ordenadores y cables, tareas y dependencias. Solo importa la conexión, no la distancia ni la forma del dibujo.',
    'A graph is the simplest way to say **who is connected to whom**: stations and metro lines, people and friendships, computers and cables, tasks and dependencies. Only the connection matters, not the distance or the shape of the drawing.', X),
  box('def', L3('graf no dirigit', 'grafo no dirigido', 'undirected graph'), L3(
    'Un **graf** $G = (V, E)$ és un conjunt **V** de **vèrtexs** (o nodes) i un conjunt **E** de **costats** (o arestes). Cada costat uneix dos vèrtexs, sense ordre: el costat $\\{A, B\\}$ és el mateix que $\\{B, A\\}$.',
    'Un **grafo** $G = (V, E)$ es un conjunto **V** de **vértices** (o nodos) y un conjunto **E** de **lados** (o aristas). Cada lado une dos vértices, sin orden: el lado $\\{A, B\\}$ es el mismo que $\\{B, A\\}$.',
    'A **graph** $G = (V, E)$ is a set **V** of **vertices** (or nodes) and a set **E** of **edges**. Each edge joins two vertices, with no order: the edge $\\{A, B\\}$ is the same as $\\{B, A\\}$.')),
  fig({ G: G0, pos: P0 }, { elab }, L3('V = {A, B, C, D, E}; e₂ i e₃ són paral·lels; e₈ és un bucle.', 'V = {A, B, C, D, E}; e₂ y e₃ son paralelos; e₈ es un bucle.', 'V = {A, B, C, D, E}; e₂ and e₃ are parallel; e₈ is a loop.')),
  p('A la figura: $e_1 = \\{A, B\\}$, $e_2 = e_3 = \\{B, C\\}$, $e_4 = \\{A, C\\}$, $e_5 = \\{C, E\\}$, $e_6 = \\{D, E\\}$, $e_7 = \\{A, E\\}$ i $e_8 = \\{D, D\\}$.',
    'En la figura: $e_1 = \\{A, B\\}$, $e_2 = e_3 = \\{B, C\\}$, $e_4 = \\{A, C\\}$, $e_5 = \\{C, E\\}$, $e_6 = \\{D, E\\}$, $e_7 = \\{A, E\\}$ y $e_8 = \\{D, D\\}$.',
    'In the figure: $e_1 = \\{A, B\\}$, $e_2 = e_3 = \\{B, C\\}$, $e_4 = \\{A, C\\}$, $e_5 = \\{C, E\\}$, $e_6 = \\{D, E\\}$, $e_7 = \\{A, E\\}$ and $e_8 = \\{D, D\\}$.'),
  box('note', L3('El dibuix no és el graf', 'El dibujo no es el grafo', 'The drawing is not the graph'), L3(
    'Si mous els vèrtexs, allargues els costats o els corbes, el graf és el mateix: només compten els parells de vèrtexs units. Dos dibuixos molt diferents poden ser el mateix graf (ho veurem al tema G6, *isomorfisme*).',
    'Si mueves los vértices, alargas los lados o los curvas, el grafo es el mismo: solo cuentan los pares de vértices unidos. Dos dibujos muy distintos pueden ser el mismo grafo (lo veremos en el tema G6, *isomorfismo*).',
    'Moving vertices or stretching and bending edges does not change the graph: only the pairs of joined vertices count. Two very different drawings can be the same graph (see unit G6, *isomorphism*).'), X),
  box('def', L3('graf dirigit (digraf)', 'grafo dirigido (digrafo)', 'directed graph (digraph)'), L3(
    'Cada costat (o **arc**) és un parell **ordenat** $(A, B)$: va d\'A cap a B. Es dibuixa amb una fletxa. $(A, B)$ i $(B, A)$ són arcs diferents.',
    'Cada lado (o **arco**) es un par **ordenado** $(A, B)$: va de A hacia B. Se dibuja con una flecha. $(A, B)$ y $(B, A)$ son arcos distintos.',
    'Each edge (or **arc**) is an **ordered** pair $(A, B)$: it goes from A to B. It is drawn with an arrow. $(A, B)$ and $(B, A)$ are different arcs.')),
  fig({ G: DG, pos: DP }, { w: 260, h: 200 }, L3('Un digraf: A → B → C → A és un cicle dirigit; D té un bucle.', 'Un digrafo: A → B → C → A es un ciclo dirigido; D tiene un bucle.', 'A digraph: A → B → C → A is a directed cycle; D has a loop.'), X),
  h('Vocabulari', 'Vocabulario', 'Vocabulary'),
  table([L3('Terme', 'Término', 'Term'), L3('Què vol dir', 'Qué quiere decir', 'Meaning'), L3('A la figura', 'En la figura', 'In the figure')], [
    [L3('**Adjacents**', '**Adyacentes**', '**Adjacent**'), L3('Dos vèrtexs units per un costat', 'Dos vértices unidos por un lado', 'Two vertices joined by an edge'), L3('A i B; no A i D', 'A y B; no A y D', 'A and B; not A and D')],
    [L3('**Incident**', '**Incidente**', '**Incident**'), L3('Un costat és incident als seus extrems', 'Un lado es incidente a sus extremos', 'An edge is incident to its ends'), L3('e₁ és incident a A i a B', 'e₁ es incidente a A y a B', 'e₁ is incident to A and B')],
    [L3('**Bucle** (o llaç)', '**Bucle** (o lazo)', '**Loop**'), L3('Costat que comença i acaba al mateix vèrtex', 'Lado que empieza y acaba en el mismo vértice', 'Edge from a vertex to itself'), 'e₈'],
    [L3('**Costats paral·lels**', '**Lados paralelos**', '**Parallel edges**'), L3('Dos costats o més entre els mateixos vèrtexs', 'Dos lados o más entre los mismos vértices', 'Two or more edges between the same vertices'), L3('e₂ i e₃', 'e₂ y e₃', 'e₂ and e₃')],
    [L3('**Graf simple**', '**Grafo simple**', '**Simple graph**'), L3('Sense bucles ni costats paral·lels', 'Sin bucles ni lados paralelos', 'No loops and no parallel edges'), L3('No ho és (en té tots dos)', 'No lo es (tiene ambos)', 'It is not (it has both)')],
    [L3('**Vèrtex aïllat**', '**Vértice aislado**', '**Isolated vertex**'), L3('València 0: cap costat', 'Valencia 0: ningún lado', 'Degree 0: no edges'), '—'],
  ]),
  h('València d\'un vèrtex', 'Valencia de un vértice', 'Degree of a vertex'),
  box('def', L3('valència', 'valencia', 'degree'), L3(
    'La **valència** (o grau) $\\delta(v)$ és el nombre de costats incidents a $v$. **Un bucle compta dues vegades**, perquè toca el vèrtex pels dos extrems. En un digraf es distingeix el **grau d\'entrada** (arcs que hi arriben) i el **grau de sortida** (arcs que en surten).',
    'La **valencia** (o grado) $\\delta(v)$ es el número de lados incidentes a $v$. **Un bucle cuenta dos veces**, porque toca el vértice por los dos extremos. En un digrafo se distingue el **grado de entrada** (arcos que llegan) y el **grado de salida** (arcos que salen).',
    'The **degree** $\\delta(v)$ is the number of edges incident to $v$. **A loop counts twice**, because it touches the vertex at both ends. In a digraph we distinguish the **in-degree** (arcs arriving) and the **out-degree** (arcs leaving).')),
  table(['v', 'A', 'B', 'C', 'D', 'E'], [['δ(v)', '3', '3', '4', '3', '3']], undefined, L3('Valències del graf d\'exemple: δ(D) = 1 (e₆) + 2 (el bucle) = 3.', 'Valencias del grafo de ejemplo: δ(D) = 1 (e₆) + 2 (el bucle) = 3.', 'Degrees of the example graph: δ(D) = 1 (e₆) + 2 (the loop) = 3.')),
  box('thm', L3('Lema de les encaixades de mans', 'Lema del apretón de manos', 'Handshake lemma'), L3(
    '$$\\sum_{v \\in V} \\delta(v) = 2\\,|E|$$ La suma de totes les valències és el doble del nombre de costats. **Conseqüència:** el nombre de vèrtexs de valència senar és sempre parell.',
    '$$\\sum_{v \\in V} \\delta(v) = 2\\,|E|$$ La suma de todas las valencias es el doble del número de lados. **Consecuencia:** el número de vértices de valencia impar es siempre par.',
    '$$\\sum_{v \\in V} \\delta(v) = 2\\,|E|$$ The sum of all degrees is twice the number of edges. **Consequence:** the number of odd-degree vertices is always even.')),
  p('Per què? Cada costat té dos extrems: quan sumes les valències, cada costat es compta exactament dues vegades (una per extrem). En una festa, si sumes quantes mans ha donat cada persona, obtens el doble del nombre d\'encaixades.',
    '¿Por qué? Cada lado tiene dos extremos: cuando sumas las valencias, cada lado se cuenta exactamente dos veces (una por extremo). En una fiesta, si sumas cuántas manos ha dado cada persona, obtienes el doble del número de apretones.',
    'Why? Each edge has two ends: when you add up the degrees, every edge is counted exactly twice (once per end). At a party, adding up how many hands each person shook gives twice the number of handshakes.', X),
  example(L3('valències i costats', 'valencias y lados', 'degrees and edges'), L3(
    'Hi pot haver un graf amb 5 vèrtexs de valències 3, 3, 3, 2, 2? I amb 3, 3, 3, 3, 1?',
    '¿Puede haber un grafo con 5 vértices de valencias 3, 3, 3, 2, 2? ¿Y con 3, 3, 3, 3, 1?',
    'Can a graph with 5 vertices have degrees 3, 3, 3, 2, 2? And 3, 3, 3, 3, 1?'), [
    { x: L3('3 + 3 + 3 + 2 + 2 = 13, que és senar.', '3 + 3 + 3 + 2 + 2 = 13, que es impar.', '3 + 3 + 3 + 2 + 2 = 13, which is odd.'), why: L3('La suma ha de ser 2|E|, un nombre parell.', 'La suma tiene que ser 2|E|, un número par.', 'The sum must be 2|E|, an even number.') },
    L3('Per tant, **no**: tindria tres vèrtexs de valència senar.', 'Por tanto, **no**: tendría tres vértices de valencia impar.', 'So **no**: it would have three odd vertices.'),
    L3('3 + 3 + 3 + 3 + 1 = 13: tampoc.', '3 + 3 + 3 + 3 + 1 = 13: tampoco.', '3 + 3 + 3 + 3 + 1 = 13: no either.'),
  ], L3('Cap dels dos no existeix.', 'Ninguno de los dos existe.', 'Neither exists.')),
  boxi('warn', L3('Errors habituals', 'Errores habituales', 'Common mistakes'), [
    L3('Comptar un bucle com a 1 en la valència: compta **2**.', 'Contar un bucle como 1 en la valencia: cuenta **2**.', 'Counting a loop as 1 in the degree: it counts **2**.'),
    L3('Dividir per 2 abans de sumar: primer se sumen totes les valències, després es divideix.', 'Dividir entre 2 antes de sumar: primero se suman todas las valencias, después se divide.', 'Halving before adding: first add all degrees, then divide.'),
    L3('Confondre «adjacent» (entre vèrtexs) amb «incident» (entre un costat i un vèrtex).', 'Confundir «adyacente» (entre vértices) con «incidente» (entre un lado y un vértice).', 'Mixing up «adjacent» (vertex–vertex) and «incident» (edge–vertex).'),
  ]),
  lab('g-editor'),
  h('Subgrafs', 'Subgrafos', 'Subgraphs'),
  box('def', L3('subgraf', 'subgrafo', 'subgraph'), L3(
    '$G\' = (V\', E\')$ és un **subgraf** de $G = (V, E)$ si $V\' \\subseteq V$ i $E\' \\subseteq E$ (i els costats de $E\'$ només uneixen vèrtexs de $V\'$). És un tros del graf.',
    '$G\' = (V\', E\')$ es un **subgrafo** de $G = (V, E)$ si $V\' \\subseteq V$ y $E\' \\subseteq E$ (y los lados de $E\'$ solo unen vértices de $V\'$). Es un trozo del grafo.',
    '$G\' = (V\', E\')$ is a **subgraph** of $G = (V, E)$ if $V\' \\subseteq V$ and $E\' \\subseteq E$ (and the edges of $E\'$ only join vertices of $V\'$). It is a piece of the graph.')),
  fig({ G: G0, pos: P0 }, { hlV: ['A', 'B', 'C'], hlE: [['A', 'B'], ['B', 'C'], ['A', 'C']], dimE: [5, 6, 7, 4] }, L3('El triangle ABC (remarcat) és un subgraf del graf d\'exemple.', 'El triángulo ABC (resaltado) es un subgrafo del grafo de ejemplo.', 'The triangle ABC (highlighted) is a subgraph of the example graph.'), X),
  check(EX['g1-c1']),
  ref('gr1-llegir', 7),
];

/* ---------- 2. grafs especials ---------- */
const sm = { w: 150, h: 150 };
const K5 = complete(['1', '2', '3', '4', '5']), C6 = cycle(['1', '2', '3', '4', '5', '6']), W6 = wheel(['0', '1', '2', '3', '4', '5']);
const K33 = bipartiteK(['a', 'b', 'c'], ['x', 'y', 'z']), N4 = graph(['1', '2', '3', '4'], []);
const sv = (G, o = {}) => graphSvg(G, { ...sm, ...o });
const s2 = [
  p('Algunes famílies de grafs surten tan sovint que tenen nom propi. Convé reconèixer-les a cop d\'ull i saber-ne comptar els costats sense dibuixar-les.',
    'Algunas familias de grafos salen tan a menudo que tienen nombre propio. Conviene reconocerlas a simple vista y saber contar sus lados sin dibujarlas.',
    'Some families of graphs come up so often that they have their own names. Learn to recognise them at a glance and count their edges without drawing them.', X),
  galleryFig([
    { svg: sv(N4), cap: 'N₄' }, { svg: sv(K5), cap: 'K₅' }, { svg: sv(C6), cap: 'C₆' },
    { svg: sv(W6, { pos: grid({ 0: [5, 5], 1: [5, 0], 2: [10, 3.5], 3: [8, 10], 4: [2, 10], 5: [0, 3.5] }, sm) }), cap: 'W₆' },
    { svg: sv(K33, { pos: grid({ a: [1, 1], b: [5, 1], c: [9, 1], x: [1, 9], y: [5, 9], z: [9, 9] }, sm), col: { a: 1, b: 1, c: 1, x: 2, y: 2, z: 2 } }), cap: 'K₃,₃' },
    { svg: sv(PRESETS.cub.G, { pos: grid({ A: [0, 0], B: [10, 0], C: [10, 10], D: [0, 10], E: [3, 3], F: [7, 3], G: [7, 7], H: [3, 7] }, sm) }), cap: 'Q₃' },
  ], L3('Nul, complet, cicle, roda, bipartit complet i el cub (un graf platònic).', 'Nulo, completo, ciclo, rueda, bipartito completo y el cubo (un grafo platónico).', 'Null, complete, cycle, wheel, complete bipartite and the cube (a Platonic graph).')),
  table([L3('Graf', 'Grafo', 'Graph'), L3('Definició', 'Definición', 'Definition'), L3('Costats', 'Lados', 'Edges')], [
    [L3('**Nul** $N_n$', '**Nulo** $N_n$', '**Null** $N_n$'), L3('n vèrtexs i cap costat', 'n vértices y ningún lado', 'n vertices, no edges'), '0'],
    [L3('**Complet** $K_n$', '**Completo** $K_n$', '**Complete** $K_n$'), L3('Cada vèrtex és adjacent a tots els altres', 'Cada vértice es adyacente a todos los demás', 'Every vertex is adjacent to all the others'), '$\\frac{n(n-1)}{2}$'],
    [L3('**Regular de grau r**', '**Regular de grado r**', '**r-regular**'), L3('Tots els vèrtexs tenen valència r', 'Todos los vértices tienen valencia r', 'Every vertex has degree r'), '$\\frac{r\\,n}{2}$'],
    [L3('**Cicle** $C_n$', '**Ciclo** $C_n$', '**Cycle** $C_n$'), L3('Connex i regular de grau 2', 'Conexo y regular de grado 2', 'Connected and 2-regular'), '$n$'],
    [L3('**Roda** $W_n$', '**Rueda** $W_n$', '**Wheel** $W_n$'), L3('Un cicle de n − 1 vèrtexs i un centre unit a tots: $W_n = C_{n-1} + N_1$', 'Un ciclo de n − 1 vértices y un centro unido a todos: $W_n = C_{n-1} + N_1$', 'A cycle on n − 1 vertices plus a hub joined to all: $W_n = C_{n-1} + N_1$'), '$2(n-1)$'],
    [L3('**Bipartit**', '**Bipartito**', '**Bipartite**'), L3('$V = V_1 \\cup V_2$ disjunts i cada costat va d\'una part a l\'altra', '$V = V_1 \\cup V_2$ disjuntos y cada lado va de una parte a la otra', '$V = V_1 \\cup V_2$ disjoint, every edge goes from one part to the other'), '—'],
    [L3('**Bipartit complet** $K_{m,n}$', '**Bipartito completo** $K_{m,n}$', '**Complete bipartite** $K_{m,n}$'), L3('Bipartit simple amb tots els costats possibles entre les dues parts', 'Bipartito simple con todos los lados posibles entre las dos partes', 'Simple bipartite with every possible edge between the parts'), '$m\\,n$'],
    [L3('**Platònic**', '**Platónico**', '**Platonic**'), L3('Vèrtexs i arestes d\'un poliedre regular (tetraedre $K_4$, cub $Q_3$, octaedre…)', 'Vértices y aristas de un poliedro regular (tetraedro $K_4$, cubo $Q_3$, octaedro…)', 'Vertices and edges of a regular polyhedron (tetrahedron $K_4$, cube $Q_3$, octahedron…)'), '—'],
  ]),
  example(L3('per què $K_n$ té $n(n-1)/2$ costats', 'por qué $K_n$ tiene $n(n-1)/2$ lados', 'why $K_n$ has $n(n-1)/2$ edges'), L3('Compta els costats de $K_n$ amb el lema de les encaixades.', 'Cuenta los lados de $K_n$ con el lema del apretón de manos.', 'Count the edges of $K_n$ with the handshake lemma.'), [
    L3('Cada vèrtex està unit als altres $n - 1$: és regular de grau $n - 1$.', 'Cada vértice está unido a los otros $n - 1$: es regular de grado $n - 1$.', 'Each vertex is joined to the other $n - 1$: it is $(n-1)$-regular.'),
    L3('Suma de valències: $n(n-1) = 2|E|$.', 'Suma de valencias: $n(n-1) = 2|E|$.', 'Sum of degrees: $n(n-1) = 2|E|$.'),
  ], L3('$|E(K_n)| = n(n-1)/2$; per exemple, $K_5$ té 10 costats.', '$|E(K_n)| = n(n-1)/2$; por ejemplo, $K_5$ tiene 10 lados.', '$|E(K_n)| = n(n-1)/2$; for instance, $K_5$ has 10 edges.'), X),
  boxi('tip', L3('Relacions entre famílies', 'Relaciones entre familias', 'How the families relate'), [
    L3('$K_n$ és regular de grau $n - 1$; $C_n$ és regular de grau 2; $Q_3$ és regular de grau 3.', '$K_n$ es regular de grado $n - 1$; $C_n$ es regular de grado 2; $Q_3$ es regular de grado 3.', '$K_n$ is $(n-1)$-regular; $C_n$ is 2-regular; $Q_3$ is 3-regular.'),
    L3('$K_{m,n}$ és bipartit; un cicle $C_n$ és bipartit **només si n és parell**.', '$K_{m,n}$ es bipartito; un ciclo $C_n$ es bipartito **solo si n es par**.', '$K_{m,n}$ is bipartite; a cycle $C_n$ is bipartite **only if n is even**.'),
    L3('Un graf és bipartit si i només si no té cap cicle de longitud senar.', 'Un grafo es bipartito si y solo si no tiene ningún ciclo de longitud impar.', 'A graph is bipartite if and only if it has no odd cycle.'),
  ], X),
  check(EX['g1-c2']),
  ref('gr1-especials', 11),
];

/* ---------- 3. operacions ---------- */
const A1 = make('AB', 'AB'), A2 = make('XYZ', 'XY YZ');
const U = graph(['A', 'B', 'X', 'Y', 'Z'], [...A1.E, ...A2.E]);
const S = graph(U.V, [...U.E, ...['X', 'Y', 'Z'].flatMap((v) => [['A', v], ['B', v]])]);
const UP = grid({ A: [1, 2], B: [1, 8], X: [9, 0], Y: [9, 5], Z: [9, 10] }, { w: 200, h: 180 });
const C5 = cycle(['A', 'B', 'C', 'D', 'E']);
const s3 = [
  p('Siguin $G_1 = (V_1, E_1)$ i $G_2 = (V_2, E_2)$ dos grafs **sense cap vèrtex en comú** ($V_1 \\cap V_2 = \\varnothing$).',
    'Sean $G_1 = (V_1, E_1)$ y $G_2 = (V_2, E_2)$ dos grafos **sin ningún vértice en común** ($V_1 \\cap V_2 = \\varnothing$).',
    'Let $G_1 = (V_1, E_1)$ and $G_2 = (V_2, E_2)$ be two graphs with **no vertex in common** ($V_1 \\cap V_2 = \\varnothing$).'),
  table([L3('Operació', 'Operación', 'Operation'), L3('Notació', 'Notación', 'Notation'), L3('Resultat', 'Resultado', 'Result')], [
    [L3('**Unió**', '**Unión**', '**Union**'), '$G_1 \\cup G_2$', L3('$V_1 \\cup V_2$ i $E_1 \\cup E_2$: els dos grafs junts, sense unir-los', '$V_1 \\cup V_2$ y $E_1 \\cup E_2$: los dos grafos juntos, sin unirlos', '$V_1 \\cup V_2$ and $E_1 \\cup E_2$: both graphs side by side, not joined')],
    [L3('**Suma**', '**Suma**', '**Join**'), '$G_1 + G_2$', L3('La unió **i** un costat de cada vèrtex de $G_1$ a cada vèrtex de $G_2$', 'La unión **y** un lado de cada vértice de $G_1$ a cada vértice de $G_2$', 'The union **plus** an edge from every vertex of $G_1$ to every vertex of $G_2$')],
  ]),
  figs([
    [{ G: U, pos: UP }, { w: 200, h: 180 }, L3('$G_1 \\cup G_2$: 3 costats', '$G_1 \\cup G_2$: 3 lados', '$G_1 \\cup G_2$: 3 edges')],
    [{ G: S, pos: UP }, { w: 200, h: 180, hlE: S.E.slice(3) }, L3('$G_1 + G_2$: 3 + 2·3 = 9 costats', '$G_1 + G_2$: 3 + 2·3 = 9 lados', '$G_1 + G_2$: 3 + 2·3 = 9 edges')],
  ]),
  p('Amb la suma es construeixen famílies conegudes: $W_n = C_{n-1} + N_1$ (un cicle més un centre) i $K_{m,n} = N_m + N_n$ (dos grups sense costats, units del tot). Si $G_1$ i $G_2$ tenen $n_1$ i $n_2$ vèrtexs, $|E(G_1 + G_2)| = |E_1| + |E_2| + n_1 n_2$.',
    'Con la suma se construyen familias conocidas: $W_n = C_{n-1} + N_1$ (un ciclo más un centro) y $K_{m,n} = N_m + N_n$ (dos grupos sin lados, unidos del todo). Si $G_1$ y $G_2$ tienen $n_1$ y $n_2$ vértices, $|E(G_1 + G_2)| = |E_1| + |E_2| + n_1 n_2$.',
    'The join builds known families: $W_n = C_{n-1} + N_1$ (a cycle plus a hub) and $K_{m,n} = N_m + N_n$ (two edgeless groups, fully joined). If $G_1$ and $G_2$ have $n_1$ and $n_2$ vertices, $|E(G_1 + G_2)| = |E_1| + |E_2| + n_1 n_2$.', X),
  box('def', L3('complementari', 'complementario', 'complement'), L3(
    'Si $G$ és **simple**, el complementari $\\overline{G}$ té els mateixos vèrtexs i dos vèrtexs hi són adjacents **si i només si no ho són a G**. Per tant $|E(G)| + |E(\\overline{G})| = \\frac{n(n-1)}{2}$.',
    'Si $G$ es **simple**, el complementario $\\overline{G}$ tiene los mismos vértices y dos vértices son adyacentes **si y solo si no lo son en G**. Por tanto $|E(G)| + |E(\\overline{G})| = \\frac{n(n-1)}{2}$.',
    'If $G$ is **simple**, its complement $\\overline{G}$ has the same vertices, and two vertices are adjacent **if and only if they are not in G**. Hence $|E(G)| + |E(\\overline{G})| = \\frac{n(n-1)}{2}$.')),
  figs([
    [C5, { w: 200, h: 180 }, '$C_5$'],
    [complement(C5), { w: 200, h: 180 }, L3('$\\overline{C_5}$: és un altre $C_5$ (l\'estrella)', '$\\overline{C_5}$: es otro $C_5$ (la estrella)', '$\\overline{C_5}$: another $C_5$ (the star)')],
  ], X),
  p('$G$ i $\\overline{G}$ junts formen $K_n$. El complementari de $K_n$ és el graf nul $N_n$.', '$G$ y $\\overline{G}$ juntos forman $K_n$. El complementario de $K_n$ es el grafo nulo $N_n$.', '$G$ and $\\overline{G}$ together make $K_n$. The complement of $K_n$ is the null graph $N_n$.'),
  check({ id: 'gr1-c-compl', type: 'num', answer: 9, q: L3('Un graf simple té 7 vèrtexs i 12 costats. Quants costats té el seu complementari?', 'Un grafo simple tiene 7 vértices y 12 lados. ¿Cuántos lados tiene su complementario?', 'A simple graph has 7 vertices and 12 edges. How many edges does its complement have?'),
    steps: [L3('$K_7$ té $7 \\cdot 6 / 2 = 21$ costats.', '$K_7$ tiene $7 \\cdot 6 / 2 = 21$ lados.', '$K_7$ has $7 \\cdot 6 / 2 = 21$ edges.'), { x: L3('$21 - 12 = 9$.', '$21 - 12 = 9$.', '$21 - 12 = 9$.'), done: true }] }),
];

export default {
  intro: [
    p('Comencem pel llenguatge: què és un graf, com es mesura cada vèrtex i quines famílies de grafs convé conèixer. Tot el que ve després (camins, colors, arbres, projectes) es construeix sobre aquestes idees.',
      'Empezamos por el lenguaje: qué es un grafo, cómo se mide cada vértice y qué familias de grafos conviene conocer. Todo lo que viene después (caminos, colores, árboles, proyectos) se construye sobre estas ideas.',
      'We start with the language: what a graph is, how to measure each vertex and which families of graphs to know. Everything that follows (paths, colours, trees, projects) builds on these ideas.'),
    box('note', L3('Notació', 'Notación', 'Notation'), L3(
      '$G = (V, E)$ graf · $n = |V|$ vèrtexs · $m = |E|$ costats · $\\delta(v)$ valència · $\\Gamma(v)$ successors · $\\Gamma^{-1}(v)$ antecessors · $\\gamma(G)$ nombre cromàtic · $\\kappa(G)$ índex cromàtic · $\\lambda(e)$ pes d\'un costat.',
      '$G = (V, E)$ grafo · $n = |V|$ vértices · $m = |E|$ lados · $\\delta(v)$ valencia · $\\Gamma(v)$ sucesores · $\\Gamma^{-1}(v)$ antecesores · $\\gamma(G)$ número cromático · $\\kappa(G)$ índice cromático · $\\lambda(e)$ peso de un lado.',
      '$G = (V, E)$ graph · $n = |V|$ vertices · $m = |E|$ edges · $\\delta(v)$ degree · $\\Gamma(v)$ successors · $\\Gamma^{-1}(v)$ predecessors · $\\gamma(G)$ chromatic number · $\\kappa(G)$ chromatic index · $\\lambda(e)$ weight of an edge.')),
    boxi('summary', L3('D\'un cop d\'ull', 'De un vistazo', 'At a glance'), [
      L3('$\\sum \\delta(v) = 2|E|$; un bucle suma 2.', '$\\sum \\delta(v) = 2|E|$; un bucle suma 2.', '$\\sum \\delta(v) = 2|E|$; a loop adds 2.'),
      L3('$|E(K_n)| = n(n-1)/2$, $|E(K_{m,n})| = mn$, $|E(C_n)| = n$, $|E(W_n)| = 2(n-1)$.', '$|E(K_n)| = n(n-1)/2$, $|E(K_{m,n})| = mn$, $|E(C_n)| = n$, $|E(W_n)| = 2(n-1)$.', '$|E(K_n)| = n(n-1)/2$, $|E(K_{m,n})| = mn$, $|E(C_n)| = n$, $|E(W_n)| = 2(n-1)$.'),
      L3('$|E(G)| + |E(\\overline{G})| = n(n-1)/2$.', '$|E(G)| + |E(\\overline{G})| = n(n-1)/2$.', '$|E(G)| + |E(\\overline{G})| = n(n-1)/2$.'),
    ], D),
    hr(),
  ],
  sections: { '1-conceptes-basics': s1, '2-grafs-especials': s2, '3-operacions-amb-grafs': s3 },
  examEnd: [{ ref: 'gr1-especials', seed: 4 }, { ref: 'gr1-llegir', seed: 12 }, { ref: 'gr1-grafica', seed: 5 }, { ref: 'gr1-encaixades', seed: 9 }],
};
