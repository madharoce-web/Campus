/**
 * Grafs · G8. Arbres (caracteritzacions, arbres amb arrel, m-aris), arbres generadors (per nivells, en
 * profunditat, Prim i Kruskal) i recorreguts en profunditat (DFS) i en amplada (BFS).
 */
import { D, X, L3, p, h, box, boxi, table, lab, check, ref, example, fig, figs, hr } from '../../graphs/lesson.js';
import { bfs, dfs, kruskal, prim } from '../../graphs/model.js';
import { grid, layered } from '../../graphs/svg.js';
import { make, PRESETS } from '../../graphs/presets.js';
import { EX } from '../../graphs/fixed.js';

// arbre amb arrel R (un organigrama)
const TR = make('RABCDEFGH', 'RA RB RC AD AE CF CG FH');
const TRP = layered(TR, 'R');
const lev = { R: 0, A: 1, B: 1, C: 1, D: 2, E: 2, F: 2, G: 2, H: 3 };
// graf per als recorreguts
const G = make('ABCDEFG', 'AB AC BD BE CE CF DG EG FG');
const GP = grid({ A: [5, 0], B: [2, 3.5], C: [8, 3.5], D: [0, 7], E: [5, 6.5], F: [10, 7], G: [5, 10] });
const B = bfs(G, 'A'), Df = dfs(G, 'A');
const C = PRESETS.ciutats, K = kruskal(C.G), Pm = prim(C.G, 'S');

const s1 = [
  p('Els arbres són a tot arreu en informàtica: el sistema de fitxers (carpetes dins de carpetes), l\'arbre sintàctic d\'una expressió, les estructures de cerca, els arbres de decisió.',
    'Los árboles están en todas partes en informática: el sistema de ficheros (carpetas dentro de carpetas), el árbol sintáctico de una expresión, las estructuras de búsqueda, los árboles de decisión.',
    'Trees are everywhere in computing: the file system (folders inside folders), the syntax tree of an expression, search structures, decision trees.', X),
  box('def', L3('arbre', 'árbol', 'tree'), L3(
    'Un **arbre** és un graf **connex i sense circuits**. Un graf sense circuits (no necessàriament connex) és un **bosc**: cada component és un arbre.',
    'Un **árbol** es un grafo **conexo y sin circuitos**. Un grafo sin circuitos (no necesariamente conexo) es un **bosque**: cada componente es un árbol.',
    'A **tree** is a **connected graph with no circuits**. A graph with no circuits (not necessarily connected) is a **forest**: each component is a tree.')),
  boxi('thm', L3('caracteritzacions', 'caracterizaciones', 'characterisations'), [
    L3('$G$ és un arbre.', '$G$ es un árbol.', '$G$ is a tree.'),
    L3('Entre cada parell de vèrtexs hi ha **un únic** camí elemental.', 'Entre cada par de vértices hay **un único** camino elemental.', 'There is **exactly one** path between any two vertices.'),
    L3('$G$ és connex i té $n - 1$ costats.', '$G$ es conexo y tiene $n - 1$ lados.', '$G$ is connected and has $n - 1$ edges.'),
    L3('$G$ no té circuits i té $n - 1$ costats.', '$G$ no tiene circuitos y tiene $n - 1$ lados.', '$G$ has no circuits and $n - 1$ edges.'),
    L3('$G$ és connex i cada costat és un istme (si en treus un, es desconnecta).', '$G$ es conexo y cada lado es un istmo (si quitas uno, se desconecta).', '$G$ is connected and every edge is a bridge (removing any one disconnects it).'),
    L3('$G$ no té circuits i, si s\'hi afegeix un costat, se\'n forma exactament un.', '$G$ no tiene circuitos y, si se añade un lado, se forma exactamente uno.', '$G$ has no circuits, and adding any edge creates exactly one.'),
  ]),
  p('Totes aquestes condicions són equivalents: n\'hi ha prou de comprovar-ne una. La més pràctica sol ser «connex i $n - 1$ costats». Un arbre amb almenys 2 vèrtexs té almenys dues **fulles** (vèrtexs de valència 1).',
    'Todas estas condiciones son equivalentes: basta con comprobar una. La más práctica suele ser «conexo y $n - 1$ lados». Un árbol con al menos 2 vértices tiene al menos dos **hojas** (vértices de valencia 1).',
    'All these conditions are equivalent: checking one is enough. The handiest is usually «connected with $n - 1$ edges». A tree with at least 2 vertices has at least two **leaves** (degree-1 vertices).'),
  h('Arbres amb arrel', 'Árboles con raíz', 'Rooted trees'),
  p('En un **arbre amb arrel** es tria un vèrtex, l\'**arrel**, i tots els costats s\'orienten cap a fora. El **nivell** d\'un vèrtex és la seva distància a l\'arrel i l\'**altura** de l\'arbre, el nivell més alt.',
    'En un **árbol con raíz** se elige un vértice, la **raíz**, y todos los lados se orientan hacia fuera. El **nivel** de un vértice es su distancia a la raíz y la **altura** del árbol, el nivel más alto.',
    'In a **rooted tree** one vertex is chosen as the **root** and every edge points away from it. The **level** of a vertex is its distance from the root and the **height** of the tree is the highest level.'),
  fig({ G: TR, pos: TRP }, { tag: lev, hlV: ['R'] }, L3('Arbre amb arrel R; l\'etiqueta és el nivell. Altura 3.', 'Árbol con raíz R; la etiqueta es el nivel. Altura 3.', 'Tree rooted at R; labels show the level. Height 3.')),
  table([L3('Relació', 'Relación', 'Relation'), L3('Definició', 'Definición', 'Definition'), L3('A la figura', 'En la figura', 'In the figure')], [
    [L3('**Pare / fill**', '**Padre / hijo**', '**Parent / child**'), L3('Units per un costat, el pare un nivell per sobre', 'Unidos por un lado, el padre un nivel por encima', 'Joined by an edge, the parent one level up'), L3('C és pare de F', 'C es padre de F', 'C is the parent of F')],
    [L3('**Germans**', '**Hermanos**', '**Siblings**'), L3('Fills del mateix pare', 'Hijos del mismo padre', 'Children of the same parent'), 'D, E'],
    [L3('**Avantpassat / descendent**', '**Antepasado / descendiente**', '**Ancestor / descendant**'), L3('En el camí de l\'arrel al vèrtex', 'En el camino de la raíz al vértice', 'On the path from the root to the vertex'), L3('C és avantpassat de H', 'C es antepasado de H', 'C is an ancestor of H')],
    [L3('**Fulla**', '**Hoja**', '**Leaf**'), L3('Sense fills', 'Sin hijos', 'No children'), 'B, D, E, G, H'],
    [L3('**Vèrtex intern**', '**Vértice interno**', '**Internal vertex**'), L3('Té algun fill', 'Tiene algún hijo', 'Has a child'), 'R, A, C, F'],
  ]),
  h('Arbres m-aris', 'Árboles m-arios', 'm-ary trees'),
  p('Un arbre amb arrel és **m-ari** si cada vèrtex té com a molt $m$ fills (**binari** si $m = 2$), i **m-ari regular** (o complet) si cada vèrtex intern en té **exactament** $m$.',
    'Un árbol con raíz es **m-ario** si cada vértice tiene como mucho $m$ hijos (**binario** si $m = 2$), y **m-ario regular** (o completo) si cada vértice interno tiene **exactamente** $m$.',
    'A rooted tree is **m-ary** if each vertex has at most $m$ children (**binary** if $m = 2$), and **full m-ary** if every internal vertex has **exactly** $m$.'),
  box('thm', L3('arbres m-aris regulars', 'árboles m-arios regulares', 'full m-ary trees'), L3(
    'Si un arbre m-ari regular té $i$ vèrtexs interns i $t$ fulles: $$n = m\\,i + 1, \\qquad t = (m-1)\\,i + 1.$$ (Cada vèrtex, menys l\'arrel, és fill d\'un intern, i cada intern té $m$ fills.)',
    'Si un árbol m-ario regular tiene $i$ vértices internos y $t$ hojas: $$n = m\\,i + 1, \\qquad t = (m-1)\\,i + 1.$$ (Cada vértice, menos la raíz, es hijo de un interno, y cada interno tiene $m$ hijos.)',
    'If a full m-ary tree has $i$ internal vertices and $t$ leaves: $$n = m\\,i + 1, \\qquad t = (m-1)\\,i + 1.$$ (Every vertex except the root is a child of an internal one, and each internal vertex has $m$ children.)')),
  example(L3('un torneig d\'eliminatòries', 'un torneo de eliminatorias', 'a knockout tournament'), L3('64 tennistes juguen un torneig d\'eliminació directa. Quants partits es juguen?', '64 tenistas juegan un torneo de eliminación directa. ¿Cuántos partidos se juegan?', '64 tennis players play a knockout tournament. How many matches are played?'), [
    L3('El quadre és un arbre binari regular: les fulles són els jugadors ($t = 64$) i cada vèrtex intern, un partit.', 'El cuadro es un árbol binario regular: las hojas son los jugadores ($t = 64$) y cada vértice interno, un partido.', 'The draw is a full binary tree: leaves are players ($t = 64$) and each internal vertex is a match.'),
    { x: L3('$t = (2 - 1)\\,i + 1 \\Rightarrow i = 63$.', '$t = (2 - 1)\\,i + 1 \\Rightarrow i = 63$.', '$t = (2 - 1)\\,i + 1 \\Rightarrow i = 63$.'), why: L3('Cada partit elimina un jugador i n\'han de quedar eliminats 63.', 'Cada partido elimina a un jugador y tienen que quedar eliminados 63.', 'Each match knocks out one player and 63 must be knocked out.') },
  ], L3('63 partits.', '63 partidos.', '63 matches.')),
  check(EX['g2-c1']),
  check(EX['g2-x2']),
  ref('gr8-arbres', 3),
];

const s2 = [
  box('def', L3('arbre generador', 'árbol generador', 'spanning tree'), L3(
    'Si $G$ és connex, un **arbre generador** és un subgraf que és un arbre i conté **tots els vèrtexs** de $G$. S\'obté traient costats de circuits fins que no en quedi cap. Tot graf connex en té almenys un.',
    'Si $G$ es conexo, un **árbol generador** es un subgrafo que es un árbol y contiene **todos los vértices** de $G$. Se obtiene quitando lados de circuitos hasta que no quede ninguno. Todo grafo conexo tiene al menos uno.',
    'If $G$ is connected, a **spanning tree** is a subgraph that is a tree and contains **every vertex** of $G$. It is obtained by removing circuit edges until none remain. Every connected graph has at least one.')),
  p('Els recorreguts de l\'apartat següent en donen un directament: el **mètode per nivells** (recorregut en amplada) i el **mètode en profunditat**. Cada vèrtex nou s\'hi afegeix amb el costat pel qual s\'hi ha arribat.',
    'Los recorridos del apartado siguiente dan uno directamente: el **método por niveles** (recorrido en anchura) y el **método en profundidad**. Cada vértice nuevo se añade con el lado por el que se ha llegado.',
    'The traversals in the next section give one directly: the **level method** (breadth-first) and the **depth method**. Each new vertex is added with the edge used to reach it.'),
  figs([
    [{ G, pos: GP }, { w: 210, h: 190, hlE: B.tree }, L3('Per nivells (BFS) des d\'A', 'Por niveles (BFS) desde A', 'By levels (BFS) from A')],
    [{ G, pos: GP }, { w: 210, h: 190, hlE: Df.tree }, L3('En profunditat (DFS) des d\'A', 'En profundidad (DFS) desde A', 'Depth-first (DFS) from A')],
  ], X),
  h('Arbre generador minimal', 'Árbol generador minimal', 'Minimum spanning tree'),
  box('def', L3('arbre generador minimal', 'árbol generador minimal', 'minimum spanning tree'), L3(
    'En un graf ponderat, el **pes** d\'un subgraf és la suma dels pesos dels seus costats. Un **arbre generador minimal** és un arbre generador de pes mínim: per exemple, connectar totes les ciutats amb el mínim de quilòmetres de cable.',
    'En un grafo ponderado, el **peso** de un subgrafo es la suma de los pesos de sus lados. Un **árbol generador minimal** es un árbol generador de peso mínimo: por ejemplo, conectar todas las ciudades con el mínimo de kilómetros de cable.',
    'In a weighted graph, the **weight** of a subgraph is the sum of its edge weights. A **minimum spanning tree** is a spanning tree of least weight: for example, linking every town with the fewest kilometres of cable.')),
  boxi('method', L3('Prim', 'Prim', 'Prim'), [
    L3('Comença amb un vèrtex qualsevol.', 'Empieza con un vértice cualquiera.', 'Start from any vertex.'),
    L3('A cada pas, afegeix el costat **més lleuger que surt de l\'arbre** (un extrem dins, l\'altre fora).', 'En cada paso, añade el lado **más ligero que sale del árbol** (un extremo dentro, el otro fuera).', 'At each step, add the **lightest edge leaving the tree** (one end inside, the other outside).'),
    L3('Para quan hi siguin tots els vèrtexs ($n - 1$ costats).', 'Para cuando estén todos los vértices ($n - 1$ lados).', 'Stop when every vertex is in ($n - 1$ edges).'),
  ]),
  boxi('method', L3('Kruskal', 'Kruskal', 'Kruskal'), [
    L3('Ordena tots els costats de menys a més pes.', 'Ordena todos los lados de menos a más peso.', 'Sort all edges by increasing weight.'),
    L3('Recorre\'ls en ordre: accepta cada costat **si no forma un circuit** amb els ja acceptats; si en forma, rebutja\'l.', 'Recórrelos en orden: acepta cada lado **si no forma un circuito** con los ya aceptados; si lo forma, recházalo.', 'Go through them in order: accept each edge **unless it closes a circuit** with those already accepted.'),
    L3('Para quan tinguis $n - 1$ costats.', 'Para cuando tengas $n - 1$ lados.', 'Stop when you have $n - 1$ edges.'),
  ]),
  example(L3('Kruskal a les ciutats', 'Kruskal en las ciudades', 'Kruskal on the towns'), L3('Troba un arbre generador minimal del graf de les ciutats (tema G5).', 'Encuentra un árbol generador minimal del grafo de las ciudades (tema G5).', 'Find a minimum spanning tree of the towns graph (unit G5).'), [
    ...K.steps.map((s) => (s.ok
      ? L3(`${s.edge[0]}${s.edge[1]} (${s.edge[2]}): s'accepta.`, `${s.edge[0]}${s.edge[1]} (${s.edge[2]}): se acepta.`, `${s.edge[0]}${s.edge[1]} (${s.edge[2]}): accepted.`)
      : { x: L3(`${s.edge[0]}${s.edge[1]} (${s.edge[2]}): es rebutja.`, `${s.edge[0]}${s.edge[1]} (${s.edge[2]}): se rechaza.`, `${s.edge[0]}${s.edge[1]} (${s.edge[2]}): rejected.`), why: L3('Els dos extrems ja estan connectats per costats acceptats: tancaria un circuit.', 'Los dos extremos ya están conectados por lados aceptados: cerraría un circuito.', 'Both ends are already connected by accepted edges: it would close a circuit.') })),
  ], L3(`${K.tree.length} costats, pes ${K.total}. Prim des de S dona el mateix pes: ${Pm.total}.`, `${K.tree.length} lados, peso ${K.total}. Prim desde S da el mismo peso: ${Pm.total}.`, `${K.tree.length} edges, weight ${K.total}. Prim from S gives the same weight: ${Pm.total}.`)),
  fig(C, { hlE: K.tree }, L3(`Arbre generador minimal de pes ${K.total}.`, `Árbol generador minimal de peso ${K.total}.`, `Minimum spanning tree of weight ${K.total}.`)),
  box('tip', L3('Prim o Kruskal?', '¿Prim o Kruskal?', 'Prim or Kruskal?'), L3(
    'Tots dos donen un arbre de pes mínim (si hi ha pesos repetits, potser un arbre diferent però del mateix pes). Prim manté sempre **un sol arbre** que creix; Kruskal pot tenir **diversos trossos** que s\'acaben ajuntant. Kruskal és més còmode a mà si el graf té pocs costats.',
    'Los dos dan un árbol de peso mínimo (si hay pesos repetidos, quizás un árbol distinto pero del mismo peso). Prim mantiene siempre **un solo árbol** que crece; Kruskal puede tener **varios trozos** que acaban juntándose. Kruskal es más cómodo a mano si el grafo tiene pocos lados.',
    'Both give a minimum-weight tree (with repeated weights, maybe a different tree of the same weight). Prim always keeps **one growing tree**; Kruskal may have **several pieces** that eventually join. Kruskal is easier by hand when the graph has few edges.'), X),
  lab('g-tree', { algo: 'kruskal' }),
  check(EX['g2-c2']),
  check(EX['g2-x3']),
  ref('gr8-minim', 5),
];

const s3 = [
  p('**Recórrer** un graf és visitar tots els seus vèrtexs, cadascun una vegada, seguint els costats. És la base de la cerca (camins, connexió, laberints, jocs).',
    '**Recorrer** un grafo es visitar todos sus vértices, cada uno una vez, siguiendo los lados. Es la base de la búsqueda (caminos, conexión, laberintos, juegos).',
    '**Traversing** a graph means visiting every vertex once, following the edges. It is the basis of search (paths, connectivity, mazes, games).'),
  table([L3('Mètode', 'Método', 'Method'), L3('Idea', 'Idea', 'Idea'), L3('Estructura', 'Estructura', 'Structure')], [
    [L3('**Profunditat** (DFS)', '**Profundidad** (DFS)', '**Depth-first** (DFS)'), L3('Avança tant com pots; quan no pots, torna enrere', 'Avanza tanto como puedas; cuando no puedas, vuelve atrás', 'Go as deep as you can; when stuck, back up'), L3('**Pila** (l\'últim que entra, el primer que surt)', '**Pila** (el último que entra, el primero que sale)', '**Stack** (last in, first out)')],
    [L3('**Amplada** (BFS)', '**Anchura** (BFS)', '**Breadth-first** (BFS)'), L3('Visita tots els veïns abans d\'allunyar-te', 'Visita todos los vecinos antes de alejarte', 'Visit every neighbour before moving further'), L3('**Cua** (el primer que entra, el primer que surt)', '**Cola** (el primero que entra, el primero que sale)', '**Queue** (first in, first out)')],
  ]),
  p('Conveni de classe: quan es pot triar, els veïns es visiten per **ordre alfabètic** (o de numeració).', 'Convenio de clase: cuando se puede elegir, los vecinos se visitan por **orden alfabético** (o de numeración).', 'Class convention: when there is a choice, neighbours are visited in **alphabetical** (or numerical) order.'),
  fig({ G, pos: GP }, {}, L3('El graf dels recorreguts. Comencem per A.', 'El grafo de los recorridos. Empezamos por A.', 'The traversal graph. We start at A.')),
  h('DFS (profunditat)', 'DFS (profundidad)', 'DFS (depth-first)'),
  example(L3('DFS des d\'A', 'DFS desde A', 'DFS from A'), L3('Escriu l\'estat de la pila a cada pas.', 'Escribe el estado de la pila en cada paso.', 'Write the stack at each step.'),
    Df.steps.map((s) => (s.visit
      ? L3(`Visita ${s.visit} · pila [${s.stack.join(', ')}]`, `Visita ${s.visit} · pila [${s.stack.join(', ')}]`, `Visit ${s.visit} · stack [${s.stack.join(', ')}]`)
      : L3(`${s.back} no té veïns nous: es desempila · [${s.stack.join(', ')}]`, `${s.back} no tiene vecinos nuevos: se desapila · [${s.stack.join(', ')}]`, `${s.back} has no new neighbours: pop · [${s.stack.join(', ')}]`))),
    L3(`Ordre DFS: ${Df.order.join(', ')}.`, `Orden DFS: ${Df.order.join(', ')}.`, `DFS order: ${Df.order.join(', ')}.`)),
  h('BFS (amplada)', 'BFS (anchura)', 'BFS (breadth-first)'),
  example(L3('BFS des d\'A', 'BFS desde A', 'BFS from A'), L3('Escriu l\'estat de la cua a cada pas.', 'Escribe el estado de la cola en cada paso.', 'Write the queue at each step.'),
    B.steps.map((s) => L3(`Visita ${s.visit} i encua els veïns nous · cua [${s.queue.join(', ')}]`, `Visita ${s.visit} y encola los vecinos nuevos · cola [${s.queue.join(', ')}]`, `Visit ${s.visit} and enqueue new neighbours · queue [${s.queue.join(', ')}]`)),
    L3(`Ordre BFS: ${B.order.join(', ')}.`, `Orden BFS: ${B.order.join(', ')}.`, `BFS order: ${B.order.join(', ')}.`)),
  box('tip', L3('Compara\'ls', 'Compáralos', 'Compare them'), L3(
    `DFS: ${Df.order.join(' ')}; BFS: ${B.order.join(' ')}. BFS visita per capes (distància a A), per això troba els camins amb menys costats; DFS s'endinsa i torna enrere, i és el que fa servir la cerca de sortida d'un laberint.`,
    `DFS: ${Df.order.join(' ')}; BFS: ${B.order.join(' ')}. BFS visita por capas (distancia a A), por eso encuentra los caminos con menos lados; DFS se adentra y vuelve atrás, y es lo que usa la búsqueda de salida de un laberinto.`,
    `DFS: ${Df.order.join(' ')}; BFS: ${B.order.join(' ')}. BFS visits in layers (distance from A), which is why it finds the paths with fewest edges; DFS dives in and backs up, as when searching for a maze exit.`)),
  lab('g-tree', { algo: 'bfs' }),
  check(EX['g2-c3']),
  ref('gr8-dfs', 2),
];

export default {
  intro: [
    p('Els arbres són els grafs més senzills que encara són connexos: si en treus un costat, es trenquen; si n\'hi afegeixes un, apareix un circuit. Aquí veurem com són, com trobar-ne dins d\'un graf (el de pes mínim, sobretot) i com recórrer un graf.',
      'Los árboles son los grafos más sencillos que todavía son conexos: si les quitas un lado, se rompen; si les añades uno, aparece un circuito. Aquí veremos cómo son, cómo encontrarlos dentro de un grafo (el de peso mínimo, sobre todo) y cómo recorrer un grafo.',
      'Trees are the simplest graphs that are still connected: remove an edge and they break; add one and a circuit appears. Here we see what they look like, how to find one inside a graph (the minimum-weight one, above all) and how to traverse a graph.'),
    boxi('summary', L3('D\'un cop d\'ull', 'De un vistazo', 'At a glance'), [
      L3('Arbre = connex sense circuits = connex amb $n - 1$ costats.', 'Árbol = conexo sin circuitos = conexo con $n - 1$ lados.', 'Tree = connected without circuits = connected with $n - 1$ edges.'),
      L3('m-ari regular: $n = mi + 1$, $t = (m-1)i + 1$.', 'm-ario regular: $n = mi + 1$, $t = (m-1)i + 1$.', 'Full m-ary: $n = mi + 1$, $t = (m-1)i + 1$.'),
      L3('Prim: el més lleuger que surt de l\'arbre. Kruskal: el més lleuger que no fa circuit.', 'Prim: el más ligero que sale del árbol. Kruskal: el más ligero que no hace circuito.', 'Prim: lightest edge leaving the tree. Kruskal: lightest edge closing no circuit.'),
      L3('DFS amb pila; BFS amb cua; veïns per ordre alfabètic.', 'DFS con pila; BFS con cola; vecinos por orden alfabético.', 'DFS with a stack; BFS with a queue; neighbours alphabetically.'),
    ], D),
    hr(),
  ],
  sections: { '14-arbres': s1, '15-arbres-generadors': s2, '16-recorreguts-d-un-graf': s3 },
  examEnd: [EX['g2-x1'], { ref: 'gr8-minim', seed: 7 }, { ref: 'gr8-bfs', seed: 4 }, { ref: 'gr8-dfs', seed: 9 }],
};
