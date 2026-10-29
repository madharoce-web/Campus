/**
 * Grafs · G2. Representació: llista i matriu d'adjacència, potències de la matriu, matriu d'incidència.
 */
import { D, X, L3, p, h, box, boxi, table, lab, check, ref, example, fig, figs, hr } from '../../graphs/lesson.js';
import { adjMatrix, incMatrix, matPow } from '../../graphs/model.js';
import { grid } from '../../graphs/svg.js';
import { make } from '../../graphs/presets.js';
import { EX } from '../../graphs/fixed.js';

const G = make('ABCDE', 'AB AC AE BC BE CE DE DD');
const P = grid({ A: [0, 1], B: [4, 0], C: [2, 7], D: [10, 9], E: [7, 3] });
const A = adjMatrix(G), A2 = matPow(A, 2);
const mt = (M, V = G.V) => ({ head: ['', ...V], rows: M.map((r, i) => [`**${V[i]}**`, ...r.map(String)]) });
const DG = make('ABCD', 'AB BC CA AD DC', true);
const DP = grid({ A: [0, 0], B: [10, 0], C: [10, 10], D: [0, 10] });
const GI = make('ABCD', 'AB BC CD DA AC');
const PI = grid({ A: [0, 0], B: [10, 0], C: [10, 10], D: [0, 10] });
const ei = Object.fromEntries(GI.E.map((_, i) => [i, 'e' + '₁₂₃₄₅'[i]]));

const s1 = [
  p('Per treballar amb un graf (a mà o amb un ordinador) cal escriure\'l. Hi ha tres maneres habituals, i convé saber passar de l\'una a l\'altra.',
    'Para trabajar con un grafo (a mano o con un ordenador) hay que escribirlo. Hay tres maneras habituales, y conviene saber pasar de una a otra.',
    'To work with a graph (by hand or by computer) we need to write it down. There are three usual ways, and you should be able to move between them.'),
  fig({ G, pos: P }, {}, L3('El graf de tot el tema: D té un bucle.', 'El grafo de todo el tema: D tiene un bucle.', 'The graph used throughout: D has a loop.')),
  h('Llista d\'adjacència', 'Lista de adyacencia', 'Adjacency list'),
  p('Per a cada vèrtex, la llista dels seus veïns. És la forma més compacta i la que fan servir els programes.', 'Para cada vértice, la lista de sus vecinos. Es la forma más compacta y la que usan los programas.', 'For each vertex, the list of its neighbours. It is the most compact form and the one programs use.'),
  table(['v', L3('Veïns', 'Vecinos', 'Neighbours')], G.V.map((v) => [`**${v}**`, G.E.filter((e) => e.includes(v)).map((e) => (e[0] === v ? e[1] : e[0])).join(', ')])),
  h('Matriu d\'adjacència', 'Matriz de adyacencia', 'Adjacency matrix'),
  box('def', L3('matriu d\'adjacència', 'matriz de adyacencia', 'adjacency matrix'), L3(
    'Si $V = \\{v_1, \\dots, v_n\\}$, la matriu d\'adjacència és la matriu $n \\times n$ on $a_{ij}$ és el **nombre de costats que uneixen $v_i$ i $v_j$** (en un digraf, que van de $v_i$ a $v_j$). Un bucle a $v_i$ posa un 1 a la diagonal, $a_{ii}$.',
    'Si $V = \\{v_1, \\dots, v_n\\}$, la matriz de adyacencia es la matriz $n \\times n$ donde $a_{ij}$ es el **número de lados que unen $v_i$ y $v_j$** (en un digrafo, que van de $v_i$ a $v_j$). Un bucle en $v_i$ pone un 1 en la diagonal, $a_{ii}$.',
    'If $V = \\{v_1, \\dots, v_n\\}$, the adjacency matrix is the $n \\times n$ matrix where $a_{ij}$ is the **number of edges joining $v_i$ and $v_j$** (in a digraph, going from $v_i$ to $v_j$). A loop at $v_i$ puts a 1 on the diagonal, $a_{ii}$.')),
  table(mt(A).head, mt(A).rows, undefined, L3('Matriu d\'adjacència del graf (ordre A, B, C, D, E).', 'Matriz de adyacencia del grafo (orden A, B, C, D, E).', 'Adjacency matrix of the graph (order A, B, C, D, E).')),
  boxi('prop', L3('què es llegeix a la matriu', 'qué se lee en la matriz', 'what the matrix tells you'), [
    L3('Graf no dirigit: la matriu és **simètrica** ($a_{ij} = a_{ji}$).', 'Grafo no dirigido: la matriz es **simétrica** ($a_{ij} = a_{ji}$).', 'Undirected graph: the matrix is **symmetric** ($a_{ij} = a_{ji}$).'),
    L3('Sense bucles, la suma de la fila $i$ és la valència de $v_i$. Amb un bucle, cal sumar-hi 1 més (el bucle compta 2 a la valència però 1 a la matriu).', 'Sin bucles, la suma de la fila $i$ es la valencia de $v_i$. Con un bucle, hay que sumar 1 más (el bucle cuenta 2 en la valencia pero 1 en la matriz).', 'Without loops, row $i$ sums to the degree of $v_i$. With a loop, add 1 more (a loop counts 2 in the degree but 1 in the matrix).'),
    L3('Graf simple: només 0 i 1, i diagonal de zeros.', 'Grafo simple: solo 0 y 1, y diagonal de ceros.', 'Simple graph: only 0s and 1s, zeros on the diagonal.'),
    L3('Digraf: la suma de la fila és el grau de sortida i la de la columna, el d\'entrada.', 'Digrafo: la suma de la fila es el grado de salida y la de la columna, el de entrada.', 'Digraph: row sums are out-degrees and column sums are in-degrees.'),
  ]),
  figs([
    [{ G: DG, pos: DP }, { w: 220, h: 190 }, L3('Un digraf', 'Un digrafo', 'A digraph')],
  ], X),
  table(mt(adjMatrix(DG), DG.V).head, mt(adjMatrix(DG), DG.V).rows, X, L3('La seva matriu no és simètrica: A → B, però no B → A.', 'Su matriz no es simétrica: A → B, pero no B → A.', 'Its matrix is not symmetric: A → B, but not B → A.')),
  lab('g-editor'),
  ref('gr2-matriu', 3),
];

const s2 = [
  p('Una **successió de costats de longitud k** de $x$ a $y$ és una llista de $k$ costats encadenats que comença a $x$ i acaba a $y$ (s\'hi poden repetir costats i vèrtexs). Les potències de la matriu d\'adjacència les compten totes de cop.',
    'Una **sucesión de lados de longitud k** de $x$ a $y$ es una lista de $k$ lados encadenados que empieza en $x$ y acaba en $y$ (se pueden repetir lados y vértices). Las potencias de la matriz de adyacencia las cuentan todas de golpe.',
    'A **walk of length k** from $x$ to $y$ is a list of $k$ chained edges starting at $x$ and ending at $y$ (edges and vertices may repeat). Powers of the adjacency matrix count them all at once.'),
  box('thm', L3('resultat clau', 'resultado clave', 'key result'), L3(
    'L\'element $(i, j)$ de $A^k$ és el **nombre de successions de costats de longitud $k$** de $v_i$ a $v_j$.',
    'El elemento $(i, j)$ de $A^k$ es el **número de sucesiones de lados de longitud $k$** de $v_i$ a $v_j$.',
    'Entry $(i, j)$ of $A^k$ is the **number of walks of length $k$** from $v_i$ to $v_j$.')),
  p('Per què, amb $k = 2$: $(A^2)_{ij} = \\sum_m a_{im}\\,a_{mj}$. Cada terme val 1 exactament quan hi ha un costat $v_i\\,v_m$ **i** un costat $v_m\\,v_j$: és un camí de dos passos passant per $v_m$. La suma els compta tots.',
    'Por qué, con $k = 2$: $(A^2)_{ij} = \\sum_m a_{im}\\,a_{mj}$. Cada término vale 1 exactamente cuando hay un lado $v_i\\,v_m$ **y** un lado $v_m\\,v_j$: es un camino de dos pasos pasando por $v_m$. La suma los cuenta todos.',
    'Why, for $k = 2$: $(A^2)_{ij} = \\sum_m a_{im}\\,a_{mj}$. Each term is 1 exactly when there is an edge $v_i\\,v_m$ **and** an edge $v_m\\,v_j$: a two-step walk through $v_m$. The sum counts them all.', X),
  table(mt(A2).head, mt(A2).rows, undefined, L3('$A^2$ del graf del tema.', '$A^2$ del grafo del tema.', '$A^2$ of the unit\'s graph.')),
  example(L3('llegir A²', 'leer A²', 'reading A²'), L3('Quantes successions de longitud 2 hi ha d\'A a C? Quines són?', '¿Cuántas sucesiones de longitud 2 hay de A a C? ¿Cuáles son?', 'How many walks of length 2 go from A to C? Which ones?'), [
    { x: L3(`Fila A, columna C de $A^2$: **${A2[0][2]}**.`, `Fila A, columna C de $A^2$: **${A2[0][2]}**.`, `Row A, column C of $A^2$: **${A2[0][2]}**.`) },
    { x: L3('Fila A per columna C de A: (0 1 1 0 1)·(1 1 0 0 1) = 0 + 1 + 0 + 0 + 1 = 2.', 'Fila A por columna C de A: (0 1 1 0 1)·(1 1 0 0 1) = 0 + 1 + 0 + 0 + 1 = 2.', 'Row A times column C of A: (0 1 1 0 1)·(1 1 0 0 1) = 0 + 1 + 0 + 0 + 1 = 2.'), why: L3('Els termes que valen 1 diuen per quin vèrtex es passa: B i E.', 'Los términos que valen 1 dicen por qué vértice se pasa: B y E.', 'The terms equal to 1 tell you the middle vertex: B and E.') },
  ], L3('A → B → C i A → E → C.', 'A → B → C y A → E → C.', 'A → B → C and A → E → C.')),
  boxi('tip', L3('dues coses que surten a l\'examen', 'dos cosas que salen en el examen', 'two things that come up in exams'), [
    L3('En un graf simple, la **diagonal de $A^2$** són les valències: $(A^2)_{ii} = \\delta(v_i)$ (anar a un veí i tornar).', 'En un grafo simple, la **diagonal de $A^2$** son las valencias: $(A^2)_{ii} = \\delta(v_i)$ (ir a un vecino y volver).', 'In a simple graph, the **diagonal of $A^2$** gives the degrees: $(A^2)_{ii} = \\delta(v_i)$ (go to a neighbour and back).'),
    L3('$\\frac{1}{6}\\operatorname{tr}(A^3)$ és el nombre de triangles d\'un graf simple (cada triangle es recorre de 6 maneres).', '$\\frac{1}{6}\\operatorname{tr}(A^3)$ es el número de triángulos de un grafo simple (cada triángulo se recorre de 6 maneras).', '$\\frac{1}{6}\\operatorname{tr}(A^3)$ is the number of triangles of a simple graph (each triangle is traversed in 6 ways).'),
  ], X),
  check(EX['g1-c3']),
  ref('gr2-a2', 6),
];

const II = incMatrix(GI);
const s3 = [
  box('def', L3('matriu d\'incidència', 'matriz de incidencia', 'incidence matrix'), L3(
    'Files: vèrtexs; columnes: costats. En un graf no dirigit, $b_{ij} = 1$ si el costat $e_j$ és incident a $v_i$, 2 si $e_j$ és un bucle a $v_i$, i 0 si no. En un digraf, $+1$ al vèrtex d\'on surt l\'arc i $-1$ al vèrtex on arriba.',
    'Filas: vértices; columnas: lados. En un grafo no dirigido, $b_{ij} = 1$ si el lado $e_j$ es incidente a $v_i$, 2 si $e_j$ es un bucle en $v_i$, y 0 si no. En un digrafo, $+1$ en el vértice de donde sale el arco y $-1$ en el vértice al que llega.',
    'Rows: vertices; columns: edges. In an undirected graph, $b_{ij} = 1$ if edge $e_j$ is incident to $v_i$, 2 if $e_j$ is a loop at $v_i$, and 0 otherwise. In a digraph, $+1$ at the vertex the arc leaves and $-1$ at the vertex it enters.')),
  figs([[{ G: GI, pos: PI }, { w: 220, h: 190, elab: ei }, L3('Quadrat amb una diagonal', 'Cuadrado con una diagonal', 'Square with one diagonal')]]),
  table(['', ...GI.E.map((_, i) => 'e' + '₁₂₃₄₅'[i])], II.map((r, i) => [`**${GI.V[i]}**`, ...r.map(String)]), undefined, L3('Matriu d\'incidència: cada columna té exactament dos 1.', 'Matriz de incidencia: cada columna tiene exactamente dos 1.', 'Incidence matrix: each column has exactly two 1s.')),
  boxi('prop', L3('propietats', 'propiedades', 'properties'), [
    L3('Cada columna suma 2 (els dos extrems del costat); en un digraf, suma 0.', 'Cada columna suma 2 (los dos extremos del lado); en un digrafo, suma 0.', 'Each column sums to 2 (the two ends of the edge); in a digraph, to 0.'),
    L3('Cada fila suma la valència del vèrtex: és una altra manera de veure el lema de les encaixades.', 'Cada fila suma la valencia del vértice: es otra manera de ver el lema del apretón de manos.', 'Each row sums to the degree of the vertex: another view of the handshake lemma.'),
    L3('Dues columnes iguals són costats paral·lels.', 'Dos columnas iguales son lados paralelos.', 'Two equal columns are parallel edges.'),
  ]),
  p('Quina convé? La llista ocupa poc i és la més ràpida per recórrer veïns; la matriu d\'adjacència respon a l\'instant si dos vèrtexs són adjacents i permet comptar camins; la d\'incidència és útil quan els costats tenen nom o propietats.',
    '¿Cuál conviene? La lista ocupa poco y es la más rápida para recorrer vecinos; la matriz de adyacencia responde al instante si dos vértices son adyacentes y permite contar caminos; la de incidencia es útil cuando los lados tienen nombre o propiedades.',
    'Which one to use? The list is small and fastest for visiting neighbours; the adjacency matrix answers instantly whether two vertices are adjacent and lets you count walks; the incidence matrix helps when edges have names or properties.', X),
  check({ id: 'gr2-c-inc', type: 'mcq', answer: 2, q: L3('En la matriu d\'incidència d\'un graf no dirigit sense bucles, quant suma cada columna?', 'En la matriz de incidencia de un grafo no dirigido sin bucles, ¿cuánto suma cada columna?', 'In the incidence matrix of a loopless undirected graph, what does each column add up to?'),
    opts: [L3('La valència del vèrtex', 'La valencia del vértice', 'The degree of the vertex'), '1', '2', L3('El nombre de costats', 'El número de lados', 'The number of edges')],
    steps: [L3('Cada columna és un costat, i un costat té exactament dos extrems.', 'Cada columna es un lado, y un lado tiene exactamente dos extremos.', 'Each column is an edge, and an edge has exactly two ends.')] }),
];

export default {
  intro: [
    p('Un mateix graf es pot escriure com un dibuix, com una llista o com una matriu. Les matrius, a més, permeten fer càlculs: comptar camins de longitud fixa amb només multiplicar.',
      'Un mismo grafo se puede escribir como un dibujo, como una lista o como una matriz. Las matrices, además, permiten hacer cálculos: contar caminos de longitud fija con solo multiplicar.',
      'The same graph can be written as a drawing, a list or a matrix. Matrices also let us compute: counting walks of a fixed length just by multiplying.'),
    boxi('summary', L3('D\'un cop d\'ull', 'De un vistazo', 'At a glance'), [
      L3('$a_{ij}$ = costats entre $v_i$ i $v_j$; simètrica si no és dirigit.', '$a_{ij}$ = lados entre $v_i$ y $v_j$; simétrica si no es dirigido.', '$a_{ij}$ = edges between $v_i$ and $v_j$; symmetric if undirected.'),
      L3('$(A^k)_{ij}$ = successions de costats de longitud $k$ de $v_i$ a $v_j$.', '$(A^k)_{ij}$ = sucesiones de lados de longitud $k$ de $v_i$ a $v_j$.', '$(A^k)_{ij}$ = walks of length $k$ from $v_i$ to $v_j$.'),
      L3('Incidència: columnes = costats; cada columna suma 2.', 'Incidencia: columnas = lados; cada columna suma 2.', 'Incidence: columns = edges; each column sums to 2.'),
    ], D),
    hr(),
  ],
  sections: { '4-representacio-de-grafs': s1, 'gr2-potencies': s2, 'gr2-incidencia': s3 },
  examEnd: [{ ref: 'gr2-llegirmatriu', seed: 2 }, { ref: 'gr2-a2', seed: 9 }, { ref: 'gr2-matriu', seed: 14 }],
};
