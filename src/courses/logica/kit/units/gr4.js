/**
 * Grafs · G4. Circuits d'Euler (caracterització, circuits parcials, Fleury) i de Hamilton (condicions
 * suficients, grafs bipartits, mètodes exhaustius).
 */
import { D, X, L3, p, h, box, boxi, table, lab, check, ref, example, fig, figs, steps, hr } from '../../graphs/lesson.js';
import { degrees, hierholzer, hamilton } from '../../graphs/model.js';
import { grid, pathEdges } from '../../graphs/svg.js';
import { make, complete, cycle, PRESETS } from '../../graphs/presets.js';
import { EX } from '../../graphs/fixed.js';

const K = PRESETS.konigsberg;
const dK = degrees(K.G);
// «flor» de tres triangles units per C: tot parell, té circuit d'Euler però no de Hamilton
const F = make('ABCDEFG', 'AB BC CA CD DE EC CF FG GC');
const FP = grid({ A: [0, 0], B: [3, 0], C: [5, 5], D: [10, 0], E: [10, 4], F: [3, 10], G: [7, 10] });
const H = hierholzer(F, 'A');
const K4 = complete(['A', 'B', 'C', 'D']);
const K4P = grid({ A: [0, 0], B: [10, 0], C: [10, 10], D: [0, 10] });

const s1 = [
  p('L\'any 1736 Euler va resoldre un passatemps de Königsberg: es podia fer una passejada que travessés cadascun dels set ponts de la ciutat **una sola vegada**? Va canviar cada tros de terra per un vèrtex i cada pont per un costat, i va veure que la resposta depèn només de les valències.',
    'En 1736 Euler resolvió un pasatiempo de Königsberg: ¿se podía dar un paseo que cruzara cada uno de los siete puentes de la ciudad **una sola vez**? Cambió cada trozo de tierra por un vértice y cada puente por un lado, y vio que la respuesta depende solo de las valencias.',
    'In 1736 Euler solved a Königsberg puzzle: could you take a walk crossing each of the city\'s seven bridges **exactly once**? He replaced each piece of land by a vertex and each bridge by an edge, and saw that the answer depends only on the degrees.', X),
  fig(K, { tag: Object.fromEntries(K.G.V.map((v) => [v, dK[v]])), tagAbove: true }, L3('Königsberg: A i C, les ribes; B, l\'illa; D, l\'est. Totes les valències (en verd) són senars.', 'Königsberg: A y C, las orillas; B, la isla; D, el este. Todas las valencias (en verde) son impares.', 'Königsberg: A and C, the banks; B, the island; D, the east. All degrees (in green) are odd.'), X),
  box('def', L3('circuit i camí d\'Euler', 'circuito y camino de Euler', 'Euler circuit and path'), L3(
    'Un **circuit d\'Euler** recorre **tots els costats una sola vegada** i torna al vèrtex inicial (pot repetir vèrtexs). Un **camí d\'Euler** fa el mateix sense tornar a l\'inici.',
    'Un **circuito de Euler** recorre **todos los lados una sola vez** y vuelve al vértice inicial (puede repetir vértices). Un **camino de Euler** hace lo mismo sin volver al inicio.',
    'An **Euler circuit** uses **every edge exactly once** and returns to the start (vertices may repeat). An **Euler path** does the same without returning.')),
  box('thm', L3('caracterització (Euler)', 'caracterización (Euler)', 'characterisation (Euler)'), L3(
    'Sigui $G$ un graf connex (sense comptar vèrtexs aïllats). $G$ té un **circuit d\'Euler** si i només si **totes les valències són parelles**. Té un **camí d\'Euler** (i no un circuit) si i només si té **exactament dos vèrtexs de valència senar**; el camí comença en un i acaba en l\'altre.',
    'Sea $G$ un grafo conexo (sin contar vértices aislados). $G$ tiene un **circuito de Euler** si y solo si **todas las valencias son pares**. Tiene un **camino de Euler** (y no un circuito) si y solo si tiene **exactamente dos vértices de valencia impar**; el camino empieza en uno y acaba en el otro.',
    'Let $G$ be connected (ignoring isolated vertices). $G$ has an **Euler circuit** if and only if **every degree is even**. It has an **Euler path** (but no circuit) if and only if it has **exactly two odd vertices**; the path starts at one and ends at the other.')),
  p('Per què? Cada vegada que el recorregut passa per un vèrtex, hi entra per un costat i en surt per un altre: en gasta dos. Els vèrtexs de pas tenen, doncs, valència parella. Només l\'inici i el final poden quedar desaparellats, i si coincideixen (circuit) també queden parells.',
    '¿Por qué? Cada vez que el recorrido pasa por un vértice, entra por un lado y sale por otro: gasta dos. Los vértices de paso tienen, pues, valencia par. Solo el inicio y el final pueden quedar desparejados, y si coinciden (circuito) también quedan pares.',
    'Why? Each time the route passes through a vertex it enters along one edge and leaves along another: it uses two. Intermediate vertices therefore have even degree. Only the start and the end can be unpaired, and if they coincide (circuit) they are even too.', X),
  p(`A Königsberg les valències són ${K.G.V.map((v) => dK[v]).join(', ')}: quatre vèrtexs senars, ni circuit ni camí. La passejada és impossible.`, `En Königsberg las valencias son ${K.G.V.map((v) => dK[v]).join(', ')}: cuatro vértices impares, ni circuito ni camino. El paseo es imposible.`, `In Königsberg the degrees are ${K.G.V.map((v) => dK[v]).join(', ')}: four odd vertices, no circuit and no path. The walk is impossible.`),
  table([L3('Graf', 'Grafo', 'Graph'), L3('Condició', 'Condición', 'Condition'), L3('Té', 'Tiene', 'Has')], [
    [L3('**Eulerià**', '**Euleriano**', '**Eulerian**'), L3('Connex i 0 vèrtexs senars', 'Conexo y 0 vértices impares', 'Connected, 0 odd vertices'), L3('circuit d\'Euler', 'circuito de Euler', 'an Euler circuit')],
    [L3('**Semieulerià**', '**Semieuleriano**', '**Semi-Eulerian**'), L3('Connex i 2 vèrtexs senars', 'Conexo y 2 vértices impares', 'Connected, 2 odd vertices'), L3('camí d\'Euler entre els dos senars', 'camino de Euler entre los dos impares', 'an Euler path between the two odd ones')],
    [L3('Cap dels dos', 'Ninguno', 'Neither'), L3('4, 6, 8… vèrtexs senars', '4, 6, 8… vértices impares', '4, 6, 8… odd vertices'), '—'],
  ]),
  box('note', L3('En un digraf', 'En un digrafo', 'In a digraph'), L3(
    'Un digraf feblement connex té un circuit d\'Euler dirigit si i només si a cada vèrtex **grau d\'entrada = grau de sortida**.',
    'Un digrafo débilmente conexo tiene un circuito de Euler dirigido si y solo si en cada vértice **grado de entrada = grado de salida**.',
    'A weakly connected digraph has a directed Euler circuit if and only if every vertex has **in-degree = out-degree**.'), X),
  h('Mètode I: circuits parcials', 'Método I: circuitos parciales', 'Method I: partial circuits'),
  steps([
    L3('Comprova que el graf és connex i que totes les valències són parelles.', 'Comprueba que el grafo es conexo y que todas las valencias son pares.', 'Check the graph is connected and every degree is even.'),
    L3('Des d\'un vèrtex qualsevol, ves recorrent costats no usats fins que tornis al punt de partida (sempre hi tornaràs).', 'Desde un vértice cualquiera, ve recorriendo lados no usados hasta que vuelvas al punto de partida (siempre volverás).', 'From any vertex, keep using unused edges until you are back at the start (you always will be).'),
    L3('Si queden costats, tria un vèrtex del circuit que en tingui de lliures i fes-hi un altre circuit parcial.', 'Si quedan lados, elige un vértice del circuito que tenga libres y haz otro circuito parcial.', 'If edges remain, pick a vertex on the circuit with free edges and make another partial circuit from it.'),
    L3('Enganxa el circuit nou dins de l\'anterior, al lloc d\'aquell vèrtex. Repeteix fins que no quedin costats.', 'Engancha el circuito nuevo dentro del anterior, en el lugar de ese vértice. Repite hasta que no queden lados.', 'Splice the new circuit into the old one at that vertex. Repeat until no edges are left.'),
  ]),
  example(L3('la flor de tres pètals', 'la flor de tres pétalos', 'the three-petal flower'), L3('Troba un circuit d\'Euler començant per A.', 'Encuentra un circuito de Euler empezando por A.', 'Find an Euler circuit starting at A.'), [
    L3('Valències: C té 6 i els altres, 2. Tot parell: hi ha circuit.', 'Valencias: C tiene 6 y los demás, 2. Todo par: hay circuito.', 'Degrees: C has 6, the rest 2. All even: a circuit exists.'),
    ...H.parts.map((pp, i) => (i === 0
      ? L3(`Primer circuit des d'A: ${pp.join(' ')}. Queden costats a C.`, `Primer circuito desde A: ${pp.join(' ')}. Quedan lados en C.`, `First circuit from A: ${pp.join(' ')}. Edges remain at C.`)
      : L3(`Circuit parcial des de C: ${pp.join(' ')}; s'enganxa al lloc de C.`, `Circuito parcial desde C: ${pp.join(' ')}; se engancha en el lugar de C.`, `Partial circuit from C: ${pp.join(' ')}; spliced in at C.`))),
  ], L3(`Circuit d'Euler: ${H.walk.join(' ')}.`, `Circuito de Euler: ${H.walk.join(' ')}.`, `Euler circuit: ${H.walk.join(' ')}.`)),
  fig({ G: F, pos: FP }, { hlE: pathEdges(H.parts[0]), hlV: ['C'] }, L3('El primer circuit parcial (remarcat) i C, on s\'enganxen els altres.', 'El primer circuito parcial (resaltado) y C, donde se enganchan los demás.', 'The first partial circuit (highlighted) and C, where the others are spliced.'), X),
  h('Mètode II: Fleury', 'Método II: Fleury', 'Method II: Fleury'),
  boxi('method', L3('regles de Fleury', 'reglas de Fleury', 'Fleury\'s rules'), [
    L3('Esborra cada costat després de recórrer-lo (i els vèrtexs que quedin aïllats).', 'Borra cada lado después de recorrerlo (y los vértices que queden aislados).', 'Delete each edge after using it (and any vertex left isolated).'),
    L3('**No travessis un istme** del graf que queda si tens cap altra opció: deixaries costats a l\'altra banda sense poder tornar-hi.', '**No cruces un istmo** del grafo que queda si tienes otra opción: dejarías lados al otro lado sin poder volver.', '**Never cross a bridge** of the remaining graph if you have another option: you would strand edges on the other side.'),
    L3('Per a un camí d\'Euler, comença en un dels dos vèrtexs senars.', 'Para un camino de Euler, empieza en uno de los dos vértices impares.', 'For an Euler path, start at one of the two odd vertices.'),
  ]),
  lab('g-euler'),
  check(EX['g1-c4']),
  check(EX['g1-x2']),
  ref('gr4-tipus', 3),
];

const P = PRESETS.petersen;
const C8 = cycle(['1', '2', '3', '4', '5', '6', '7', '8']);
const s2 = [
  box('def', L3('circuit de Hamilton', 'circuito de Hamilton', 'Hamilton circuit'), L3(
    'Un **circuit de Hamilton** (o hamiltonià) passa per **tots els vèrtexs una sola vegada** i torna a l\'inici. No cal fer servir tots els costats. Un graf que en té és **hamiltonià**.',
    'Un **circuito de Hamilton** (o hamiltoniano) pasa por **todos los vértices una sola vez** y vuelve al inicio. No hace falta usar todos los lados. Un grafo que lo tiene es **hamiltoniano**.',
    'A **Hamilton circuit** visits **every vertex exactly once** and returns to the start. It need not use every edge. A graph that has one is **Hamiltonian**.')),
  box('warn', L3('No confonguis Euler i Hamilton', 'No confundas Euler y Hamilton', 'Don\'t mix up Euler and Hamilton'), L3(
    'Euler: **tots els costats** una vegada. Hamilton: **tots els vèrtexs** una vegada. Són independents: un graf pot tenir l\'un, l\'altre, tots dos o cap.',
    'Euler: **todos los lados** una vez. Hamilton: **todos los vértices** una vez. Son independientes: un grafo puede tener uno, otro, los dos o ninguno.',
    'Euler: **every edge** once. Hamilton: **every vertex** once. They are independent: a graph can have either, both or neither.')),
  figs([
    [{ G: F, pos: FP }, { w: 230, h: 190 }, L3('Euler sí (tot parell), Hamilton no (cal passar dues vegades per C)', 'Euler sí (todo par), Hamilton no (hay que pasar dos veces por C)', 'Euler yes (all even), Hamilton no (C must be visited twice)')],
    [{ G: K4, pos: K4P }, { w: 230, h: 190, hlE: pathEdges(hamilton(K4)) }, L3('Hamilton sí (remarcat), Euler no (valències 3)', 'Hamilton sí (resaltado), Euler no (valencias 3)', 'Hamilton yes (highlighted), Euler no (degrees 3)')],
  ]),
  p('Per a Euler n\'hi ha prou de mirar les valències. Per a Hamilton **no es coneix cap condició senzilla que sigui alhora necessària i suficient**: és un dels grans problemes difícils de la informàtica. Hi ha condicions que garanteixen que existeix i maneres de veure que no.',
    'Para Euler basta con mirar las valencias. Para Hamilton **no se conoce ninguna condición sencilla que sea a la vez necesaria y suficiente**: es uno de los grandes problemas difíciles de la informática. Hay condiciones que garantizan que existe y maneras de ver que no.',
    'For Euler, the degrees are enough. For Hamilton **no simple condition is known that is both necessary and sufficient**: it is one of the great hard problems of computer science. Some conditions guarantee one exists, and there are ways to show none does.'),
  h('Condicions suficients', 'Condiciones suficientes', 'Sufficient conditions'),
  table([L3('Resultat', 'Resultado', 'Result'), L3('Si G és simple, amb n ≥ 3 vèrtexs, i…', 'Si G es simple, con n ≥ 3 vértices, y…', 'If G is simple with n ≥ 3 vertices and…')], [
    [L3('**Complet**', '**Completo**', '**Complete**'), L3('$G = K_n$: sempre és hamiltonià', '$G = K_n$: siempre es hamiltoniano', '$G = K_n$: always Hamiltonian')],
    [L3('**Dirac** (1952)', '**Dirac** (1952)', '**Dirac** (1952)'), L3('$\\delta(v) \\ge n/2$ per a tot vèrtex ⇒ hamiltonià', '$\\delta(v) \\ge n/2$ para todo vértice ⇒ hamiltoniano', '$\\delta(v) \\ge n/2$ for every vertex ⇒ Hamiltonian')],
    [L3('**Ore** (1960)', '**Ore** (1960)', '**Ore** (1960)'), L3('$\\delta(u) + \\delta(v) \\ge n$ per a cada parell **no adjacent** ⇒ hamiltonià', '$\\delta(u) + \\delta(v) \\ge n$ para cada par **no adyacente** ⇒ hamiltoniano', '$\\delta(u) + \\delta(v) \\ge n$ for every **non-adjacent** pair ⇒ Hamiltonian')],
  ]),
  box('warn', L3('Suficients, no necessàries', 'Suficientes, no necesarias', 'Sufficient, not necessary'), L3(
    'Si es compleix Dirac, segur que n\'hi ha. Si **no** es compleix, no en sabem res: $C_8$ té totes les valències 2 < 8/2 i, tanmateix, ell mateix és un circuit de Hamilton.',
    'Si se cumple Dirac, seguro que lo hay. Si **no** se cumple, no sabemos nada: $C_8$ tiene todas las valencias 2 < 8/2 y, sin embargo, él mismo es un circuito de Hamilton.',
    'If Dirac holds, there is one for sure. If it does **not** hold, we know nothing: $C_8$ has every degree 2 < 8/2 and yet it is itself a Hamilton circuit.')),
  fig(C8, { w: 200, h: 180, hlE: C8.E }, L3('$C_8$: no compleix Dirac i és hamiltonià.', '$C_8$: no cumple Dirac y es hamiltoniano.', '$C_8$: fails Dirac yet is Hamiltonian.'), X),
  h('Quan segur que no n\'hi ha', 'Cuándo seguro que no lo hay', 'When there surely is none'),
  boxi('prop', L3('obstacles', 'obstáculos', 'obstacles'), [
    L3('Un vèrtex de valència 1 (no es pot entrar i sortir).', 'Un vértice de valencia 1 (no se puede entrar y salir).', 'A vertex of degree 1 (you cannot enter and leave).'),
    L3('Un **vèrtex de tall** (si el treus, el graf es desconnecta): s\'hauria de passar dues vegades per ell.', 'Un **vértice de corte** (si lo quitas, el grafo se desconecta): habría que pasar dos veces por él.', 'A **cut vertex** (removing it disconnects the graph): you would have to pass through it twice.'),
    L3('**Bipartit** amb $|V_1| \\ne |V_2|$: el circuit alterna les dues parts, així que han de tenir els mateixos vèrtexs. $K_{m,n}$ és hamiltonià si i només si $m = n \\ge 2$.', '**Bipartito** con $|V_1| \\ne |V_2|$: el circuito alterna las dos partes, así que deben tener los mismos vértices. $K_{m,n}$ es hamiltoniano si y solo si $m = n \\ge 2$.', '**Bipartite** with $|V_1| \\ne |V_2|$: the circuit alternates sides, so both must be the same size. $K_{m,n}$ is Hamiltonian if and only if $m = n \\ge 2$.'),
    L3('Si un vèrtex té valència 2, els seus dos costats hi han de ser per força; si això obliga a tancar un cicle massa curt, no n\'hi ha.', 'Si un vértice tiene valencia 2, sus dos lados tienen que estar a la fuerza; si eso obliga a cerrar un ciclo demasiado corto, no lo hay.', 'If a vertex has degree 2, both its edges are forced; if that closes a cycle too early, there is none.'),
  ]),
  fig(P, { w: 260, h: 220 }, L3('El graf de Petersen: 3-regular, connex i **no** hamiltonià (es pot comprovar al laboratori).', 'El grafo de Petersen: 3-regular, conexo y **no** hamiltoniano (se puede comprobar en el laboratorio).', 'The Petersen graph: 3-regular, connected and **not** Hamiltonian (try it in the lab).'), X),
  h('Mètodes exhaustius', 'Métodos exhaustivos', 'Exhaustive methods'),
  p('Quan cap condició no decideix, cal provar-ho. El **mètode exhaustiu** construeix tots els camins elementals: primer els de longitud 1 (els costats), després els allarga d\'un en un costat i descarta els que repeteixen vèrtex. Els de longitud $n - 1$ que es poden tancar amb un costat al vèrtex inicial són els circuits de Hamilton.',
    'Cuando ninguna condición decide, hay que probarlo. El **método exhaustivo** construye todos los caminos elementales: primero los de longitud 1 (los lados), después los alarga de uno en uno y descarta los que repiten vértice. Los de longitud $n - 1$ que se pueden cerrar con un lado al vértice inicial son los circuitos de Hamilton.',
    'When no condition decides, you must search. The **exhaustive method** builds every path: first those of length 1 (the edges), then extends them one edge at a time, discarding any that repeat a vertex. Those of length $n - 1$ that close with an edge back to the start are the Hamilton circuits.'),
  box('method', L3('concatenació llatina', 'concatenación latina', 'Latin concatenation'), L3(
    'És el mateix mètode fet amb matrius. La **matriu literal** $M$ té a la posició $(i, j)$ el text «$v_i v_j$» si hi ha costat i 0 si no. La **concatenació** de dues successions només s\'accepta si l\'última lletra de la primera és la primera de la segona i no es repeteix cap vèrtex: $ABC \\cdot CD = ABCD$, però $ABC \\cdot CA = 0$. El **producte llatí** $M_k \\cdot M^*$ (on $M^*$ és $M$ sense la primera lletra de cada element) dona tots els camins elementals de longitud $k + 1$. Després de $n - 1$ productes, els camins que acaben en un veí del vèrtex inicial tanquen un circuit de Hamilton.',
    'Es el mismo método hecho con matrices. La **matriz literal** $M$ tiene en la posición $(i, j)$ el texto «$v_i v_j$» si hay lado y 0 si no. La **concatenación** de dos sucesiones solo se acepta si la última letra de la primera es la primera de la segunda y no se repite ningún vértice: $ABC \\cdot CD = ABCD$, pero $ABC \\cdot CA = 0$. El **producto latino** $M_k \\cdot M^*$ (donde $M^*$ es $M$ sin la primera letra de cada elemento) da todos los caminos elementales de longitud $k + 1$. Tras $n - 1$ productos, los caminos que acaban en un vecino del vértice inicial cierran un circuito de Hamilton.',
    'It is the same method done with matrices. The **literal matrix** $M$ holds the text «$v_i v_j$» at $(i, j)$ if there is an edge and 0 otherwise. **Concatenation** of two sequences is accepted only if the last letter of the first is the first of the second and no vertex repeats: $ABC \\cdot CD = ABCD$, but $ABC \\cdot CA = 0$. The **Latin product** $M_k \\cdot M^*$ (where $M^*$ is $M$ without the first letter of each entry) gives every path of length $k + 1$. After $n - 1$ products, the paths ending at a neighbour of the start close a Hamilton circuit.'), X),
  check(EX['g1-c5']),
  check(EX['g1-x3']),
  ref('gr4-hamilton', 2),
];

export default {
  intro: [
    p('Dos problemes de recorregut que semblen iguals i no ho són gens: passar per **tots els costats** (Euler) es decideix mirant les valències; passar per **tots els vèrtexs** (Hamilton) és un problema difícil de debò.',
      'Dos problemas de recorrido que parecen iguales y no lo son en absoluto: pasar por **todos los lados** (Euler) se decide mirando las valencias; pasar por **todos los vértices** (Hamilton) es un problema difícil de verdad.',
      'Two routing problems that look alike and are not at all: travelling **every edge** (Euler) is decided by the degrees; visiting **every vertex** (Hamilton) is genuinely hard.'),
    boxi('summary', L3('D\'un cop d\'ull', 'De un vistazo', 'At a glance'), [
      L3('Connex + 0 senars ⇒ circuit d\'Euler; 2 senars ⇒ camí d\'Euler; més ⇒ cap.', 'Conexo + 0 impares ⇒ circuito de Euler; 2 impares ⇒ camino de Euler; más ⇒ ninguno.', 'Connected + 0 odd ⇒ Euler circuit; 2 odd ⇒ Euler path; more ⇒ none.'),
      L3('Hamilton: Dirac ($\\delta \\ge n/2$) o Ore ($\\delta(u) + \\delta(v) \\ge n$) ho garanteixen; no són necessàries.', 'Hamilton: Dirac ($\\delta \\ge n/2$) u Ore ($\\delta(u) + \\delta(v) \\ge n$) lo garantizan; no son necesarias.', 'Hamilton: Dirac ($\\delta \\ge n/2$) or Ore ($\\delta(u) + \\delta(v) \\ge n$) guarantee it; they are not necessary.'),
      L3('Bipartit amb parts desiguals o vèrtex de tall ⇒ no hamiltonià.', 'Bipartito con partes desiguales o vértice de corte ⇒ no hamiltoniano.', 'Bipartite with unequal sides or a cut vertex ⇒ not Hamiltonian.'),
    ], D),
    hr(),
  ],
  sections: { '8-circuits-d-euler': s1, '9-circuits-de-hamilton': s2 },
  examEnd: [{ ref: 'gr4-troba', seed: 4 }, { ref: 'gr4-troba', seed: 10 }, { ref: 'gr4-hamilton', seed: 7 }],
};
