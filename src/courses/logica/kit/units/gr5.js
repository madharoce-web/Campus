/**
 * Grafs · G5. Camí més curt: grafs ponderats, nombre mínim de costats (per capes) i algorisme de Dijkstra.
 */
import { D, X, L3, p, h, box, boxi, lab, ref, example, fig, figs, steps, hr } from '../../graphs/lesson.js';
import { bfsDist, dijkstra, pathTo } from '../../graphs/model.js';
import { pathEdges } from '../../graphs/svg.js';
import { PRESETS } from '../../graphs/presets.js';

const C = PRESETS.ciutats;
const run = dijkstra(C.G, 'S'), best = pathTo(run.prev, 'T');
const hops = bfsDist(C.G, 'S');
const few = ['S', 'B', 'D', 'T'];
const lenOf = (w) => w.slice(1).reduce((s, v, k) => s + C.G.E.find((e) => (e[0] === w[k] && e[1] === v) || (e[1] === w[k] && e[0] === v))[2], 0);
const table = (k) => ({
  head: [L3('Pas', 'Paso', 'Step'), ...C.G.V],
  rows: [['0', ...C.G.V.map((v) => (v === 'S' ? '(0, –)' : '∞'))], ...run.steps.slice(0, k).map((st, i) => [String(i + 1), ...C.G.V.map((v) => {
    if (i > 0 && run.steps[i - 1].done.includes(v)) return '';
    const l = st.labels[v];
    return (l ? `(${l[0]}, ${l[1] ?? '–'})` : '∞') + (st.fix === v ? ' *' : '');
  })])],
});
const T = (k, ca, es, en) => ({ x: L3(ca, es, en), table: table(k) });
const s = run.steps;

const s1 = [
  box('def', L3('graf ponderat', 'grafo ponderado', 'weighted graph'), L3(
    'Un graf (dirigit o no) és **ponderat** si cada costat $e$ té un nombre $\\lambda(e) \\ge 0$, el **pes**: una distància, un temps, un cost. La **longitud** d\'un camí és la suma dels pesos dels seus costats. Un **camí més curt** entre dos vèrtexs és un de longitud mínima.',
    'Un grafo (dirigido o no) es **ponderado** si cada lado $e$ tiene un número $\\lambda(e) \\ge 0$, el **peso**: una distancia, un tiempo, un coste. La **longitud** de un camino es la suma de los pesos de sus lados. Un **camino más corto** entre dos vértices es uno de longitud mínima.',
    'A graph (directed or not) is **weighted** if each edge $e$ has a number $\\lambda(e) \\ge 0$, its **weight**: a distance, a time, a cost. The **length** of a path is the sum of its edge weights. A **shortest path** between two vertices is one of minimum length.')),
  fig(C, {}, L3('Set ciutats i els minuts de cada carretera. Volem anar de S a T.', 'Siete ciudades y los minutos de cada carretera. Queremos ir de S a T.', 'Seven towns and the minutes on each road. We want to go from S to T.')),
  h('Nombre mínim de costats', 'Número mínimo de lados', 'Fewest edges'),
  p('Si tots els pesos valen 1 (o només importa quants trams es fan), n\'hi ha prou d\'etiquetar per **capes**:', 'Si todos los pesos valen 1 (o solo importa cuántos tramos se hacen), basta con etiquetar por **capas**:', 'If every weight is 1 (or only the number of hops matters), label the vertices in **layers**:'),
  steps([
    L3('Posa l\'etiqueta 0 a l\'origen S.', 'Pon la etiqueta 0 al origen S.', 'Label the source S with 0.'),
    L3('Posa 1 a tots els veïns de S.', 'Pon 1 a todos los vecinos de S.', 'Label every neighbour of S with 1.'),
    L3('Posa $k + 1$ als veïns sense etiqueta dels vèrtexs etiquetats amb $k$. Para quan arribis al destí.', 'Pon $k + 1$ a los vecinos sin etiqueta de los vértices etiquetados con $k$. Para cuando llegues al destino.', 'Label with $k + 1$ the unlabelled neighbours of vertices labelled $k$. Stop when you reach the target.'),
  ]),
  fig(C, { weights: false, tag: hops, tagAbove: true }, L3(`Capes des de S: T és a la capa ${hops.T}.`, `Capas desde S: T está en la capa ${hops.T}.`, `Layers from S: T is in layer ${hops.T}.`)),
  box('warn', L3('Menys costats no vol dir més curt', 'Menos lados no quiere decir más corto', 'Fewer edges is not shorter'), L3(
    `${few.join(' → ')} fa servir només ${few.length - 1} carreteres, però dura ${lenOf(few)} minuts. El camí més curt (el trobarem a l'apartat següent) en fa servir ${best.length - 1} i dura ${run.dist.T}.`,
    `${few.join(' → ')} usa solo ${few.length - 1} carreteras, pero dura ${lenOf(few)} minutos. El camino más corto (lo encontraremos en el apartado siguiente) usa ${best.length - 1} y dura ${run.dist.T}.`,
    `${few.join(' → ')} uses only ${few.length - 1} roads but takes ${lenOf(few)} minutes. The shortest path (found in the next section) uses ${best.length - 1} and takes ${run.dist.T}.`)),
  ref('gr5-salts', 6),
];

const s2 = [
  p('**Idea.** Es fa créixer una zona de vèrtexs dels quals ja sabem la distància exacta (els **definitius**), començant per l\'origen. A cada pas s\'hi afegeix el vèrtex de fora que és més a prop, i es miren els camins que obre.',
    '**Idea.** Se hace crecer una zona de vértices de los que ya sabemos la distancia exacta (los **definitivos**), empezando por el origen. En cada paso se añade el vértice de fuera que está más cerca, y se miran los caminos que abre.',
    '**Idea.** Grow a region of vertices whose exact distance is known (the **permanent** ones), starting at the source. At each step add the nearest outside vertex and look at the routes it opens.', X),
  box('def', L3('etiquetes', 'etiquetas', 'labels'), L3(
    'Cada vèrtex porta una etiqueta $(L(v), a(v))$: $L(v)$ és la longitud del millor camí trobat **fins ara** i $a(v)$ el vèrtex anterior en aquest camí. Les etiquetes provisionals milloren (baixen) fins que el vèrtex passa a **definitiu**.',
    'Cada vértice lleva una etiqueta $(L(v), a(v))$: $L(v)$ es la longitud del mejor camino encontrado **hasta ahora** y $a(v)$ el vértice anterior en ese camino. Las etiquetas provisionales mejoran (bajan) hasta que el vértice pasa a **definitivo**.',
    'Each vertex carries a label $(L(v), a(v))$: $L(v)$ is the length of the best path found **so far** and $a(v)$ the previous vertex on it. Temporary labels improve (decrease) until the vertex becomes **permanent**.')),
  boxi('method', L3('algorisme de Dijkstra', 'algoritmo de Dijkstra', 'Dijkstra\'s algorithm'), [
    L3('**Inici:** $L(S) = 0$ i $L(v) = \\infty$ per als altres.', '**Inicio:** $L(S) = 0$ y $L(v) = \\infty$ para los demás.', '**Start:** $L(S) = 0$ and $L(v) = \\infty$ for the rest.'),
    L3('**Fixa** el vèrtex no definitiu amb la $L$ més petita (si hi ha empat, qualsevol): passa a definitiu.', '**Fija** el vértice no definitivo con la $L$ más pequeña (si hay empate, cualquiera): pasa a definitivo.', '**Fix** the non-permanent vertex with the smallest $L$ (any one on a tie): it becomes permanent.'),
    L3('**Actualitza** cada veí $w$ no definitiu del vèrtex $u$ que acabes de fixar: si $L(u) + \\lambda(u, w) < L(w)$, posa $L(w) = L(u) + \\lambda(u, w)$ i $a(w) = u$.', '**Actualiza** cada vecino $w$ no definitivo del vértice $u$ que acabas de fijar: si $L(u) + \\lambda(u, w) < L(w)$, pon $L(w) = L(u) + \\lambda(u, w)$ y $a(w) = u$.', '**Update** each non-permanent neighbour $w$ of the vertex $u$ just fixed: if $L(u) + \\lambda(u, w) < L(w)$, set $L(w) = L(u) + \\lambda(u, w)$ and $a(w) = u$.'),
    L3('Repeteix fins que el destí sigui definitiu. El camí es llegeix **enrere** seguint $a(v)$.', 'Repite hasta que el destino sea definitivo. El camino se lee **hacia atrás** siguiendo $a(v)$.', 'Repeat until the target is permanent. Read the path **backwards** following $a(v)$.'),
  ]),
  example(L3('de S a T', 'de S a T', 'from S to T'), L3('Aplica Dijkstra al graf de les ciutats. Cada fila de la taula és un pas; * marca el vèrtex que es fixa.', 'Aplica Dijkstra al grafo de las ciudades. Cada fila de la tabla es un paso; * marca el vértice que se fija.', 'Apply Dijkstra to the towns graph. Each table row is a step; * marks the vertex fixed.'), [
    T(1, 'Es fixa S (0). Veïns: A = 0 + 4, B = 0 + 2.', 'Se fija S (0). Vecinos: A = 0 + 4, B = 0 + 2.', 'Fix S (0). Neighbours: A = 0 + 4, B = 0 + 2.'),
    { ...T(2, `Es fixa B (2), la més petita. A millora: 2 + 1 = 3 < 4, ara a(A) = B. C = 2 + 8 = 10, D = 2 + 10 = 12.`, `Se fija B (2), la más pequeña. A mejora: 2 + 1 = 3 < 4, ahora a(A) = B. C = 2 + 8 = 10, D = 2 + 10 = 12.`, `Fix B (2), the smallest. A improves: 2 + 1 = 3 < 4, now a(A) = B. C = 2 + 8 = 10, D = 2 + 10 = 12.`), why: L3('Anar a A passant per B és més curt que anar-hi directament.', 'Ir a A pasando por B es más corto que ir directamente.', 'Going to A via B is shorter than going directly.') },
    T(3, 'Es fixa A (3). C millora: 3 + 5 = 8 < 10.', 'Se fija A (3). C mejora: 3 + 5 = 8 < 10.', 'Fix A (3). C improves: 3 + 5 = 8 < 10.'),
    T(4, 'Es fixa C (8). D millora: 8 + 2 = 10 < 12. E = 8 + 6 = 14.', 'Se fija C (8). D mejora: 8 + 2 = 10 < 12. E = 8 + 6 = 14.', 'Fix C (8). D improves: 8 + 2 = 10 < 12. E = 8 + 6 = 14.'),
    T(5, 'Es fixa D (10). E millora: 10 + 2 = 12 < 14. T = 10 + 6 = 16.', 'Se fija D (10). E mejora: 10 + 2 = 12 < 14. T = 10 + 6 = 16.', 'Fix D (10). E improves: 10 + 2 = 12 < 14. T = 10 + 6 = 16.'),
    T(s.length, 'Es fixa E (12). T millora: 12 + 3 = 15 < 16. Al final es fixa T (15).', 'Se fija E (12). T mejora: 12 + 3 = 15 < 16. Al final se fija T (15).', 'Fix E (12). T improves: 12 + 3 = 15 < 16. Finally T is fixed (15).'),
    { x: L3(`Enrere des de T: a(T) = E, a(E) = D, a(D) = C, a(C) = A, a(A) = B, a(B) = S.`, `Hacia atrás desde T: a(T) = E, a(E) = D, a(D) = C, a(C) = A, a(A) = B, a(B) = S.`, `Backwards from T: a(T) = E, a(E) = D, a(D) = C, a(C) = A, a(A) = B, a(B) = S.`), done: true },
  ], L3(`Camí més curt: ${best.join(' → ')}, de ${run.dist.T} minuts.`, `Camino más corto: ${best.join(' → ')}, de ${run.dist.T} minutos.`, `Shortest path: ${best.join(' → ')}, ${run.dist.T} minutes.`)),
  figs([
    [C, { w: 260, h: 200, hlE: pathEdges(best), tag: run.dist, tagAbove: true }, L3('El camí més curt i la distància definitiva de cada vèrtex.', 'El camino más corto y la distancia definitiva de cada vértice.', 'The shortest path and each vertex\'s final distance.')],
    [C, { w: 260, h: 200, hlE: C.G.V.filter((v) => run.prev[v]).map((v) => [run.prev[v], v]) }, L3('Els costats $a(v) \\to v$ formen l\'arbre de camins més curts des de S.', 'Los lados $a(v) \\to v$ forman el árbol de caminos más cortos desde S.', 'The edges $a(v) \\to v$ form the shortest-path tree from S.')],
  ]),
  boxi('warn', L3('Errors habituals', 'Errores habituales', 'Common mistakes'), [
    L3('Fixar un vèrtex només perquè és veí del darrer fixat: es fixa el mínim de **tots** els provisionals.', 'Fijar un vértice solo porque es vecino del último fijado: se fija el mínimo de **todos** los provisionales.', 'Fixing a vertex just because it neighbours the last one fixed: fix the minimum of **all** temporary labels.'),
    L3('Oblidar canviar $a(v)$ quan l\'etiqueta millora.', 'Olvidar cambiar $a(v)$ cuando la etiqueta mejora.', 'Forgetting to change $a(v)$ when the label improves.'),
    L3('Fer servir Dijkstra amb pesos negatius: no funciona.', 'Usar Dijkstra con pesos negativos: no funciona.', 'Using Dijkstra with negative weights: it fails.'),
  ]),
  box('tip', L3('A l\'examen', 'En el examen', 'In the exam'), L3(
    'Fes la taula amb una columna per vèrtex i una fila per pas, com aquí. Una casella buida vol dir «ja era definitiu». Al final, escriu el camí i la longitud, i comprova la longitud sumant els pesos del camí.',
    'Haz la tabla con una columna por vértice y una fila por paso, como aquí. Una casilla vacía quiere decir «ya era definitivo». Al final, escribe el camino y la longitud, y comprueba la longitud sumando los pesos del camino.',
    'Draw the table with one column per vertex and one row per step, as here. An empty cell means «already permanent». At the end, write the path and its length, and check the length by adding the path\'s weights.')),
  lab('g-dijkstra'),
  ref('gr5-cami', 4),
];

export default {
  intro: [
    p('Navegadors GPS, xarxes d\'ordinadors, rutes de repartiment: tots busquen el camí més curt en un graf amb pesos. L\'algorisme de Dijkstra ho resol amb una taula que es fa a mà en deu minuts.',
      'Navegadores GPS, redes de ordenadores, rutas de reparto: todos buscan el camino más corto en un grafo con pesos. El algoritmo de Dijkstra lo resuelve con una tabla que se hace a mano en diez minutos.',
      'GPS navigation, computer networks, delivery routes: all look for the shortest path in a weighted graph. Dijkstra\'s algorithm solves it with a table you can fill in by hand in ten minutes.'),
    boxi('summary', L3('D\'un cop d\'ull', 'De un vistazo', 'At a glance'), [
      L3('Pesos 1: capes des de l\'origen.', 'Pesos 1: capas desde el origen.', 'Unit weights: layers from the source.'),
      L3('Dijkstra: fixa el mínim provisional; actualitza veïns amb $L(u) + \\lambda(u, w)$.', 'Dijkstra: fija el mínimo provisional; actualiza vecinos con $L(u) + \\lambda(u, w)$.', 'Dijkstra: fix the smallest temporary label; update neighbours with $L(u) + \\lambda(u, w)$.'),
      L3('El camí es llegeix enrere amb $a(v)$.', 'El camino se lee hacia atrás con $a(v)$.', 'Read the path backwards with $a(v)$.'),
    ], D),
    hr(),
  ],
  sections: { '10-cami-mes-curt': s1, 'gr5-dijkstra': s2 },
  examEnd: [{ ref: 'gr5-dijkstra', seed: 3 }, { ref: 'gr5-dijkstra', seed: 11 }, { ref: 'gr5-cami', seed: 8 }],
};
