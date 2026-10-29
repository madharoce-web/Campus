/**
 * Grafs · G7. Acoloriment de vèrtexs (nombre cromàtic, quatre colors, algorisme de Welsh–Powell), de
 * costats (índex cromàtic, graf adjunt) i polinomi cromàtic.
 */
import { D, X, L3, p, h, box, boxi, table, lab, check, ref, example, fig, figs, hr } from '../../graphs/lesson.js';
import { chromatic, lineGraph, welshPowell, degrees } from '../../graphs/model.js';
import { grid } from '../../graphs/svg.js';
import { make, PRESETS } from '../../graphs/presets.js';
import { EX } from '../../graphs/fixed.js';

const M = PRESETS.mapa, cm = chromatic(M.G);
const W = PRESETS.w5, wpW = welshPowell(W.G), dW = degrees(W.G);
const colOf = (steps, k) => Object.fromEntries(steps.slice(0, k).flatMap((s) => s.vs.map((v) => [v, s.c])));
// hexàgon amb noms «dolents»: l'algorisme fa servir 3 colors i en calen 2
const HX = make('ABCDEF', 'AD DE EB BC CF FA');
const HXP = grid({ A: [5, 0], D: [10, 3], E: [10, 7], B: [5, 10], C: [0, 7], F: [0, 3] }, { w: 210, h: 190 });
const wpH = welshPowell(HX);
const SQ = make('ABCD', 'AB BC CD DA AC');
const SQP = grid({ A: [0, 0], B: [10, 0], C: [10, 10], D: [0, 10] }, { w: 210, h: 190 });
const LG = lineGraph(SQ), cl = chromatic(LG);
const ecol = Object.fromEntries(SQ.E.map((e, i) => [i, cl.col[e[0] + e[1]]]));
const T = make('ABCD', 'AB BC CD'), C4 = make('ABCD', 'AB BC CD DA');
const P4 = grid({ A: [0, 0], B: [10, 0], C: [10, 10], D: [0, 10] }, { w: 170, h: 150 });

const s1 = [
  box('def', L3('acoloriment de vèrtexs', 'coloración de vértices', 'vertex colouring'), L3(
    'Acolorir els vèrtexs de $G$ és donar un color a cada vèrtex de manera que **dos vèrtexs adjacents no tinguin el mateix color**. Si es pot fer amb $k$ colors, $G$ és **k-colorable**. El **nombre cromàtic** $\\gamma(G)$ és el mínim nombre de colors necessari.',
    'Colorear los vértices de $G$ es dar un color a cada vértice de manera que **dos vértices adyacentes no tengan el mismo color**. Si se puede hacer con $k$ colores, $G$ es **k-coloreable**. El **número cromático** $\\gamma(G)$ es el mínimo número de colores necesario.',
    'Colouring the vertices of $G$ means giving each vertex a colour so that **adjacent vertices never share a colour**. If $k$ colours suffice, $G$ is **k-colourable**. The **chromatic number** $\\gamma(G)$ is the least number of colours needed.')),
  p('És el model de qualsevol problema d\'incompatibilitats: assignatures que no poden tenir l\'examen el mateix dia (colors = dies), freqüències de ràdio d\'antenes properes, registres d\'un processador.',
    'Es el modelo de cualquier problema de incompatibilidades: asignaturas que no pueden tener el examen el mismo día (colores = días), frecuencias de radio de antenas cercanas, registros de un procesador.',
    'It models any conflict problem: courses that cannot have their exam on the same day (colours = days), radio frequencies of nearby antennas, processor registers.', X),
  fig(M, { col: cm.col }, L3(`Un mapa de cinc països (cada vèrtex és un país; un costat, una frontera): ${cm.k} colors.`, `Un mapa de cinco países (cada vértice es un país; un lado, una frontera): ${cm.k} colores.`, `A map of five countries (each vertex a country, each edge a border): ${cm.k} colours.`)),
  table([L3('Graf', 'Grafo', 'Graph'), 'γ', L3('Per què', 'Por qué', 'Why')], [
    ['$K_n$', '$n$', L3('Tots adjacents entre ells', 'Todos adyacentes entre sí', 'All mutually adjacent')],
    [L3('Bipartit (amb costats)', 'Bipartito (con lados)', 'Bipartite (with edges)'), '2', L3('Un color per part', 'Un color por parte', 'One colour per side')],
    [L3('$C_n$, n parell', '$C_n$, n par', '$C_n$, n even'), '2', L3('Colors alternats', 'Colores alternados', 'Alternating colours')],
    [L3('$C_n$, n senar', '$C_n$, n impar', '$C_n$, n odd'), '3', L3('L\'últim topa amb el primer', 'El último choca con el primero', 'The last clashes with the first')],
    ['$W_n$', L3('3 o 4', '3 o 4', '3 or 4'), L3('El centre + el cicle de fora', 'El centro + el ciclo de fuera', 'The hub + the outer cycle')],
    [L3('Arbre (≥ 2 vèrtexs)', 'Árbol (≥ 2 vértices)', 'Tree (≥ 2 vertices)'), '2', L3('És bipartit', 'Es bipartito', 'It is bipartite')],
  ]),
  boxi('prop', L3('fites', 'cotas', 'bounds'), [
    L3('Si $G$ conté un $K_r$ (per exemple un triangle, $r = 3$), $\\gamma(G) \\ge r$.', 'Si $G$ contiene un $K_r$ (por ejemplo un triángulo, $r = 3$), $\\gamma(G) \\ge r$.', 'If $G$ contains a $K_r$ (e.g. a triangle, $r = 3$), $\\gamma(G) \\ge r$.'),
    L3('$\\gamma(G) \\le 2$ si i només si $G$ és bipartit (no té cicles senars).', '$\\gamma(G) \\le 2$ si y solo si $G$ es bipartito (no tiene ciclos impares).', '$\\gamma(G) \\le 2$ if and only if $G$ is bipartite (no odd cycles).'),
    L3('$\\gamma(G) \\le \\delta_{max} + 1$, on $\\delta_{max}$ és la valència màxima.', '$\\gamma(G) \\le \\delta_{max} + 1$, donde $\\delta_{max}$ es la valencia máxima.', '$\\gamma(G) \\le \\delta_{max} + 1$, where $\\delta_{max}$ is the maximum degree.'),
  ]),
  box('thm', L3('teorema dels quatre colors', 'teorema de los cuatro colores', 'four colour theorem'), L3(
    'Tot graf **planar** es pot acolorir amb **4 colors** com a màxim. Per tant, tot mapa es pot pintar amb 4 colors sense que dos països veïns coincideixin. (Es va demostrar el 1976 amb l\'ajuda d\'un ordinador.)',
    'Todo grafo **planar** se puede colorear con **4 colores** como máximo. Por tanto, todo mapa se puede pintar con 4 colores sin que dos países vecinos coincidan. (Se demostró en 1976 con la ayuda de un ordenador.)',
    'Every **planar** graph can be coloured with at most **4 colours**. So every map can be painted with 4 colours with no two neighbouring countries alike. (Proved in 1976 with computer help.)')),
  h('Algorisme d\'acoloriment (Welsh–Powell)', 'Algoritmo de coloración (Welsh–Powell)', 'Colouring algorithm (Welsh–Powell)'),
  boxi('method', L3('passos', 'pasos', 'steps'), [
    L3('Ordena els vèrtexs per valència **de més gran a més petita**.', 'Ordena los vértices por valencia **de mayor a menor**.', 'Sort the vertices by degree, **largest first**.'),
    L3('Dona el color 1 al primer de la llista i, seguint l\'ordre, a cada vèrtex que no sigui adjacent a cap dels que ja tenen el color 1.', 'Da el color 1 al primero de la lista y, siguiendo el orden, a cada vértice que no sea adyacente a ninguno de los que ya tienen el color 1.', 'Give colour 1 to the first in the list and, in order, to every vertex not adjacent to any vertex already coloured 1.'),
    L3('Repeteix amb el color 2 sobre els vèrtexs sense color, i així successivament fins que no en quedi cap.', 'Repite con el color 2 sobre los vértices sin color, y así sucesivamente hasta que no quede ninguno.', 'Repeat with colour 2 on the uncoloured vertices, and so on until none are left.'),
  ], undefined),
  example(L3('la roda W₆', 'la rueda W₆', 'the wheel W₆'), L3('Acoloreix la roda amb l\'algorisme.', 'Colorea la rueda con el algoritmo.', 'Colour the wheel with the algorithm.'), [
    L3(`Valències: ${W.G.V.map((v) => `${v}:${dW[v]}`).join(', ')}. Ordre: ${wpW.order.join(', ')}.`, `Valencias: ${W.G.V.map((v) => `${v}:${dW[v]}`).join(', ')}. Orden: ${wpW.order.join(', ')}.`, `Degrees: ${W.G.V.map((v) => `${v}:${dW[v]}`).join(', ')}. Order: ${wpW.order.join(', ')}.`),
    ...wpW.steps.map((s) => L3(`Color ${s.c}: ${s.vs.join(', ')}.`, `Color ${s.c}: ${s.vs.join(', ')}.`, `Colour ${s.c}: ${s.vs.join(', ')}.`)),
  ], L3(`${wpW.k} colors. És el mínim: el cicle de fora és senar (3 colors) i el centre és adjacent a tots.`, `${wpW.k} colores. Es el mínimo: el ciclo de fuera es impar (3 colores) y el centro es adyacente a todos.`, `${wpW.k} colours. That is the minimum: the outer cycle is odd (3 colours) and the hub is adjacent to all.`)),
  figs([
    [W, { w: 210, h: 190, col: colOf(wpW.steps, 2) }, L3('Després dels colors 1 i 2', 'Tras los colores 1 y 2', 'After colours 1 and 2')],
    [W, { w: 210, h: 190, col: wpW.col }, L3('Resultat final', 'Resultado final', 'Final result')],
  ], X),
  box('warn', L3('No sempre dona el mínim', 'No siempre da el mínimo', 'It does not always give the minimum'), L3(
    `En aquest hexàgon tots els vèrtexs tenen valència 2 i l'ordre és A, B, C, D, E, F. L'algorisme fa servir ${wpH.k} colors, però com que és un cicle parell n'hi ha prou amb 2. Comprova sempre si se'n podrien fer servir menys (busca un triangle o un cicle senar).`,
    `En este hexágono todos los vértices tienen valencia 2 y el orden es A, B, C, D, E, F. El algoritmo usa ${wpH.k} colores, pero como es un ciclo par bastan 2. Comprueba siempre si se podrían usar menos (busca un triángulo o un ciclo impar).`,
    `In this hexagon every vertex has degree 2 and the order is A, B, C, D, E, F. The algorithm uses ${wpH.k} colours, but it is an even cycle so 2 suffice. Always check whether fewer would do (look for a triangle or an odd cycle).`)),
  figs([
    [{ G: HX, pos: HXP }, { w: 210, h: 190, col: wpH.col }, L3(`Welsh–Powell: ${wpH.k} colors`, `Welsh–Powell: ${wpH.k} colores`, `Welsh–Powell: ${wpH.k} colours`)],
    [{ G: HX, pos: HXP }, { w: 210, h: 190, col: chromatic(HX).col }, L3('γ = 2', 'γ = 2', 'γ = 2')],
  ], X),
  lab('g-color'),
  check(EX['g1-c7']),
  ref('gr7-familia', 5),
];

const s2 = [
  box('def', L3('acoloriment de costats', 'coloración de lados', 'edge colouring'), L3(
    'Ara es pinten els **costats**: dos costats **adjacents** (que comparteixen un extrem) han de tenir colors diferents. L\'**índex cromàtic** $\\kappa(G)$ és el mínim nombre de colors. Exemple: torns d\'un torneig on cada equip juga com a molt un partit per jornada.',
    'Ahora se pintan los **lados**: dos lados **adyacentes** (que comparten un extremo) deben tener colores distintos. El **índice cromático** $\\kappa(G)$ es el mínimo número de colores. Ejemplo: jornadas de un torneo donde cada equipo juega como mucho un partido por jornada.',
    'Now the **edges** are painted: two **adjacent** edges (sharing an end) must get different colours. The **chromatic index** $\\kappa(G)$ is the least number of colours. Example: rounds of a tournament where each team plays at most once per round.')),
  box('thm', L3('Vizing', 'Vizing', 'Vizing'), L3(
    'Per a un graf simple, $\\delta_{max} \\le \\kappa(G) \\le \\delta_{max} + 1$. Com a mínim calen $\\delta_{max}$ colors, perquè tots els costats d\'un vèrtex de valència màxima són adjacents entre ells.',
    'Para un grafo simple, $\\delta_{max} \\le \\kappa(G) \\le \\delta_{max} + 1$. Como mínimo hacen falta $\\delta_{max}$ colores, porque todos los lados de un vértice de valencia máxima son adyacentes entre sí.',
    'For a simple graph, $\\delta_{max} \\le \\kappa(G) \\le \\delta_{max} + 1$. At least $\\delta_{max}$ colours are needed, since all edges at a maximum-degree vertex are mutually adjacent.')),
  box('method', L3('graf adjunt', 'grafo adjunto', 'line graph'), L3(
    'El **graf adjunt** $G\'$ té un vèrtex per cada costat de $G$; dos vèrtexs de $G\'$ són adjacents si els costats corresponents ho són a $G$. Acolorir els costats de $G$ és acolorir els vèrtexs de $G\'$: $\\kappa(G) = \\gamma(G\')$. Es pot fer servir Welsh–Powell sobre $G\'$.',
    'El **grafo adjunto** $G\'$ tiene un vértice por cada lado de $G$; dos vértices de $G\'$ son adyacentes si los lados correspondientes lo son en $G$. Colorear los lados de $G$ es colorear los vértices de $G\'$: $\\kappa(G) = \\gamma(G\')$. Se puede usar Welsh–Powell sobre $G\'$.',
    'The **line graph** $G\'$ has a vertex for each edge of $G$; two vertices of $G\'$ are adjacent if the corresponding edges are in $G$. Colouring the edges of $G$ is colouring the vertices of $G\'$: $\\kappa(G) = \\gamma(G\')$. You can run Welsh–Powell on $G\'$.')),
  figs([
    [{ G: SQ, pos: SQP }, { w: 210, h: 190, ecol }, L3(`G: ${cl.k} colors de costat (δmax = 3)`, `G: ${cl.k} colores de lado (δmax = 3)`, `G: ${cl.k} edge colours (δmax = 3)`)],
    [LG, { w: 210, h: 190, col: cl.col }, L3('El graf adjunt G\', amb els mateixos colors', 'El grafo adjunto G\', con los mismos colores', 'The line graph G\', with the same colours')],
  ]),
  check({ id: 'gr7-c-index', type: 'num', answer: 3, q: L3('Quin és l\'índex cromàtic κ(K₄)?', '¿Cuál es el índice cromático κ(K₄)?', 'What is the chromatic index κ(K₄)?'),
    steps: [L3('δmax = 3, així que κ ≥ 3.', 'δmax = 3, así que κ ≥ 3.', 'δmax = 3, so κ ≥ 3.'), { x: L3('Els 6 costats es reparteixen en 3 parells de costats oposats (sense extrems en comú): 3 colors. κ(K₄) = 3.', 'Los 6 lados se reparten en 3 pares de lados opuestos (sin extremos en común): 3 colores. κ(K₄) = 3.', 'The 6 edges split into 3 pairs of opposite edges (no common ends): 3 colours. κ(K₄) = 3.'), done: true }] }),
];

const s3 = [
  box('def', L3('polinomi cromàtic', 'polinomio cromático', 'chromatic polynomial'), L3(
    'Si $G$ és simple i disposem de $k$ colors, $P_G(k)$ és el **nombre d\'acoloriments diferents** dels vèrtexs de $G$ amb aquests $k$ colors (no cal fer-los servir tots). És un polinomi en $k$, i $\\gamma(G)$ és el $k$ més petit amb $P_G(k) > 0$.',
    'Si $G$ es simple y disponemos de $k$ colores, $P_G(k)$ es el **número de coloraciones distintas** de los vértices de $G$ con esos $k$ colores (no hace falta usarlos todos). Es un polinomio en $k$, y $\\gamma(G)$ es el $k$ más pequeño con $P_G(k) > 0$.',
    'If $G$ is simple and $k$ colours are available, $P_G(k)$ is the **number of different colourings** of the vertices of $G$ with those $k$ colours (not all need be used). It is a polynomial in $k$, and $\\gamma(G)$ is the smallest $k$ with $P_G(k) > 0$.')),
  table([L3('Graf', 'Grafo', 'Graph'), '$P_G(k)$', L3('Raonament', 'Razonamiento', 'Reasoning')], [
    ['$N_n$', '$k^n$', L3('Cada vèrtex, lliurement', 'Cada vértice, libremente', 'Each vertex freely')],
    ['$K_n$', '$k(k-1)(k-2)\\cdots(k-n+1)$', L3('Cada vèrtex, diferent de tots els anteriors', 'Cada vértice, distinto de todos los anteriores', 'Each vertex differs from all previous ones')],
    [L3('Arbre de n vèrtexs', 'Árbol de n vértices', 'Tree on n vertices'), '$k(k-1)^{n-1}$', L3('L\'arrel lliure; cada fill, diferent del pare', 'La raíz libre; cada hijo, distinto del padre', 'Root free; each child differs from its parent')],
    ['$C_n$', '$(k-1)^n + (-1)^n (k-1)$', L3('Per inducció amb la fórmula de sota', 'Por inducción con la fórmula de abajo', 'By induction with the formula below')],
  ]),
  box('thm', L3('afegir i contraure', 'añadir y contraer', 'add and contract'), L3(
    'Si $u$ i $v$ són dos vèrtexs **no adjacents** de $G$: $$P_G(k) = P_{G + uv}(k) + P_{G / uv}(k),$$ on $G + uv$ és $G$ amb el costat $uv$ afegit (acoloriments on $u$ i $v$ tenen colors diferents) i $G / uv$ és $G$ amb $u$ i $v$ fusionats en un sol vèrtex (acoloriments on tenen el mateix color).',
    'Si $u$ y $v$ son dos vértices **no adyacentes** de $G$: $$P_G(k) = P_{G + uv}(k) + P_{G / uv}(k),$$ donde $G + uv$ es $G$ con el lado $uv$ añadido (coloraciones donde $u$ y $v$ tienen colores distintos) y $G / uv$ es $G$ con $u$ y $v$ fusionados en un solo vértice (coloraciones donde tienen el mismo color).',
    'If $u$ and $v$ are **non-adjacent** vertices of $G$: $$P_G(k) = P_{G + uv}(k) + P_{G / uv}(k),$$ where $G + uv$ is $G$ with edge $uv$ added (colourings where $u$ and $v$ differ) and $G / uv$ is $G$ with $u$ and $v$ merged into one vertex (colourings where they match).')),
  figs([
    [{ G: T, pos: P4 }, { w: 170, h: 150 }, L3('Arbre: $k(k-1)^3$', 'Árbol: $k(k-1)^3$', 'Tree: $k(k-1)^3$')],
    [{ G: C4, pos: P4 }, { w: 170, h: 150 }, '$C_4$'],
  ], X),
  example(L3('el polinomi de C₄', 'el polinomio de C₄', 'the polynomial of C₄'), L3('Calcula $P_{C_4}(k)$ fent servir els vèrtexs no adjacents A i C.', 'Calcula $P_{C_4}(k)$ usando los vértices no adyacentes A y C.', 'Compute $P_{C_4}(k)$ using the non-adjacent vertices A and C.'), [
    L3('$C_4 + AC$: dos triangles que comparteixen AC. A i C: $k(k-1)$; B i D, cadascun diferent d\'A i de C: $(k-2)^2$. Total $k(k-1)(k-2)^2$.', '$C_4 + AC$: dos triángulos que comparten AC. A y C: $k(k-1)$; B y D, cada uno distinto de A y de C: $(k-2)^2$. Total $k(k-1)(k-2)^2$.', '$C_4 + AC$: two triangles sharing AC. A and C: $k(k-1)$; B and D, each different from A and C: $(k-2)^2$. Total $k(k-1)(k-2)^2$.'),
    L3('$C_4 / AC$: el camí B – (AC) – D, un arbre de 3 vèrtexs: $k(k-1)^2$.', '$C_4 / AC$: el camino B – (AC) – D, un árbol de 3 vértices: $k(k-1)^2$.', '$C_4 / AC$: the path B – (AC) – D, a tree on 3 vertices: $k(k-1)^2$.'),
    { x: L3('Suma: $k(k-1)\\left[(k-2)^2 + (k-1)\\right] = k(k-1)(k^2 - 3k + 3)$.', 'Suma: $k(k-1)\\left[(k-2)^2 + (k-1)\\right] = k(k-1)(k^2 - 3k + 3)$.', 'Sum: $k(k-1)\\left[(k-2)^2 + (k-1)\\right] = k(k-1)(k^2 - 3k + 3)$.'), why: L3('Coincideix amb $(k-1)^4 + (k-1)$, la fórmula dels cicles.', 'Coincide con $(k-1)^4 + (k-1)$, la fórmula de los ciclos.', 'It matches $(k-1)^4 + (k-1)$, the cycle formula.') },
  ], L3('Amb 2 colors: $2 \\cdot 1 \\cdot 1 = 2$ acoloriments (els dos alternats). Amb 1 color, 0: $\\gamma(C_4) = 2$.', 'Con 2 colores: $2 \\cdot 1 \\cdot 1 = 2$ coloraciones (las dos alternadas). Con 1 color, 0: $\\gamma(C_4) = 2$.', 'With 2 colours: $2 \\cdot 1 \\cdot 1 = 2$ colourings (the two alternating ones). With 1 colour, 0: $\\gamma(C_4) = 2$.')),
  ref('gr7-cromatic', 4),
];

export default {
  intro: [
    p('Acolorir un graf és repartir recursos entre elements incompatibles: dies d\'examen, freqüències, aules. Volem fer-ho amb tan pocs colors com puguem.',
      'Colorear un grafo es repartir recursos entre elementos incompatibles: días de examen, frecuencias, aulas. Queremos hacerlo con tan pocos colores como podamos.',
      'Colouring a graph shares resources among incompatible items: exam days, frequencies, rooms. We want to use as few colours as possible.'),
    boxi('summary', L3('D\'un cop d\'ull', 'De un vistazo', 'At a glance'), [
      L3('$\\gamma(K_n) = n$; bipartit ⇔ $\\gamma \\le 2$; cicle senar: 3; $\\gamma \\le \\delta_{max} + 1$; planar: $\\gamma \\le 4$.', '$\\gamma(K_n) = n$; bipartito ⇔ $\\gamma \\le 2$; ciclo impar: 3; $\\gamma \\le \\delta_{max} + 1$; planar: $\\gamma \\le 4$.', '$\\gamma(K_n) = n$; bipartite ⇔ $\\gamma \\le 2$; odd cycle: 3; $\\gamma \\le \\delta_{max} + 1$; planar: $\\gamma \\le 4$.'),
      L3('Welsh–Powell: per valència decreixent, color a color. No sempre és òptim.', 'Welsh–Powell: por valencia decreciente, color a color. No siempre es óptimo.', 'Welsh–Powell: by decreasing degree, colour by colour. Not always optimal.'),
      L3('$\\delta_{max} \\le \\kappa(G) \\le \\delta_{max} + 1$; $P_G = P_{G+uv} + P_{G/uv}$.', '$\\delta_{max} \\le \\kappa(G) \\le \\delta_{max} + 1$; $P_G = P_{G+uv} + P_{G/uv}$.', '$\\delta_{max} \\le \\kappa(G) \\le \\delta_{max} + 1$; $P_G = P_{G+uv} + P_{G/uv}$.'),
    ], D),
    hr(),
  ],
  sections: { '13-acoloriment': s1, 'gr7-costats': s2, 'gr7-polinomi': s3 },
  examEnd: [{ ref: 'gr7-acoloreix', seed: 2 }, { ref: 'gr7-cromatic', seed: 9 }, { ref: 'gr7-familia', seed: 13 }],
};
