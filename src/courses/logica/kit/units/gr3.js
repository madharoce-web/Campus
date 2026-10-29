/**
 * Grafs · G3. Camins i circuits, connexió (components, cotes, conjunts de tall) i connectivitat en digrafs.
 */
import { D, X, L3, p, h, box, boxi, table, check, ref, example, fig, figs, steps, hr } from '../../graphs/lesson.js';
import { classifyWalk, components, condensed, strongComponents, neighbours, predecessors } from '../../graphs/model.js';
import { grid, pathEdges } from '../../graphs/svg.js';
import { make, PRESETS } from '../../graphs/presets.js';
import { EX } from '../../graphs/fixed.js';

const G = make('ABCDEFG', 'AB BC CD DE EC CF FG GE AF');
const P = grid({ A: [0, 5], B: [2.5, 0], C: [5, 3], D: [7.5, 0], E: [10, 4], F: [3, 10], G: [8, 10] });
const yes = L3('Sí', 'Sí', 'Yes'), no = 'No';
const walks = ['A B C D E C B A', 'A B C E G F C', 'A B C D E C F A', 'A B C D E G F A'].map((w) => w.split(' '));
const cls = (w) => {
  const c = classifyWalk(G, w);
  return [w.join(' '), c.trail ? yes : no, c.path && !c.closed ? yes : no, c.closed && c.trail ? yes : no, c.closed && c.trail && c.path ? yes : no];
};

const s1 = [
  p('Siguin $v$ i $w$ dos vèrtexs d\'un graf. Escrivim $(v_0, v_1, \\dots, v_n)$ per a la successió de costats $(v_0 v_1), (v_1 v_2), \\dots, (v_{n-1} v_n)$.',
    'Sean $v$ y $w$ dos vértices de un grafo. Escribimos $(v_0, v_1, \\dots, v_n)$ para la sucesión de lados $(v_0 v_1), (v_1 v_2), \\dots, (v_{n-1} v_n)$.',
    'Let $v$ and $w$ be two vertices of a graph. We write $(v_0, v_1, \\dots, v_n)$ for the sequence of edges $(v_0 v_1), (v_1 v_2), \\dots, (v_{n-1} v_n)$.'),
  table([L3('Concepte', 'Concepto', 'Concept'), L3('Definició', 'Definición', 'Definition'), L3('Es pot repetir…', 'Se puede repetir…', 'May repeat…')], [
    [L3('**Camí** de longitud n', '**Camino** de longitud n', '**Walk** of length n'), L3('Successió de n costats que porta de v a w', 'Sucesión de n lados que lleva de v a w', 'Sequence of n edges leading from v to w'), L3('costats i vèrtexs', 'lados y vértices', 'edges and vertices')],
    [L3('**Camí simple**', '**Camino simple**', '**Trail** (simple walk)'), L3('Camí sense cap costat repetit', 'Camino sin ningún lado repetido', 'Walk with no repeated edge'), L3('vèrtexs', 'vértices', 'vertices')],
    [L3('**Camí elemental**', '**Camino elemental**', '**Path** (elementary walk)'), L3('Camí amb tots els vèrtexs diferents', 'Camino con todos los vértices distintos', 'Walk with all vertices distinct'), L3('res', 'nada', 'nothing')],
    [L3('**Circuit** (o cicle)', '**Circuito** (o ciclo)', '**Circuit** (or cycle)'), L3('Camí simple de v a v', 'Camino simple de v a v', 'Trail from v back to v'), L3('vèrtexs', 'vértices', 'vertices')],
    [L3('**Circuit elemental**', '**Circuito elemental**', '**Elementary circuit**'), L3('Circuit on només es repeteix el primer vèrtex (al final)', 'Circuito donde solo se repite el primer vértice (al final)', 'Circuit where only the first vertex repeats (at the end)'), L3('res', 'nada', 'nothing')],
  ]),
  box('tip', L3('Com recordar-ho', 'Cómo recordarlo', 'How to remember'), L3(
    '**Simple** mira els **costats**; **elemental** mira els **vèrtexs**. Si no repeteixes cap vèrtex, tampoc no pots repetir cap costat: tot camí elemental és simple, però no al revés.',
    '**Simple** mira los **lados**; **elemental** mira los **vértices**. Si no repites ningún vértice, tampoco puedes repetir ningún lado: todo camino elemental es simple, pero no al revés.',
    '**Trail** is about **edges**; **path** (elementary) is about **vertices**. If no vertex repeats, no edge can repeat either: every path is a trail, but not the other way round.')),
  figs([
    [{ G, pos: P }, { w: 230, h: 190, hlE: pathEdges(walks[1]), hlV: ['A'] }, L3('A B C E G F C: simple, no elemental (C dues vegades)', 'A B C E G F C: simple, no elemental (C dos veces)', 'A B C E G F C: a trail, not a path (C twice)')],
    [{ G, pos: P }, { w: 230, h: 190, hlE: pathEdges(walks[3]), hlV: ['A'] }, L3('A B C D E G F A: circuit elemental', 'A B C D E G F A: circuito elemental', 'A B C D E G F A: elementary circuit')],
  ]),
  table([L3('Successió', 'Sucesión', 'Sequence'), L3('Simple', 'Simple', 'Trail'), L3('Elemental', 'Elemental', 'Path'), L3('Circuit', 'Circuito', 'Circuit'), L3('Circuit elemental', 'Circuito elemental', 'Elem. circuit')], walks.map(cls), undefined,
    L3('La primera repeteix el costat BC (de tornada): ni tan sols és simple.', 'La primera repite el lado BC (de vuelta): ni siquiera es simple.', 'The first one repeats edge BC (on the way back): it is not even a trail.')),
  ref('gr3-classifica', 2),
];

const DIS = make('ABCDEFGH', 'AB BC CA DE FG GH');
const DP = grid({ A: [0, 0], B: [3, 0], C: [1.5, 5], D: [5, 1], E: [5, 7], F: [8, 0], G: [10, 5], H: [7.5, 10] });
const comps = components(DIS);
const col = Object.fromEntries(comps.flatMap((c, i) => c.map((v) => [v, i + 1])));
const BR = make('ABCDEF', 'AB BC CA CD DE EF FD');
const BP = grid({ A: [0, 0], B: [0, 10], C: [3.5, 5], D: [6.5, 5], E: [10, 0], F: [10, 10] });
const s2 = [
  box('def', L3('graf connex', 'grafo conexo', 'connected graph'), L3(
    'Un graf és **connex** si entre qualsevol parell de vèrtexs hi ha un camí. Si no, és **inconnex** i es descompon en **components connexes**: els trossos connexos més grans possible. Un vèrtex aïllat és una component.',
    'Un grafo es **conexo** si entre cualquier par de vértices hay un camino. Si no, es **inconexo** y se descompone en **componentes conexas**: los trozos conexos más grandes posibles. Un vértice aislado es una componente.',
    'A graph is **connected** if there is a walk between any two vertices. Otherwise it is **disconnected** and splits into **connected components**: the largest possible connected pieces. An isolated vertex is a component.')),
  fig({ G: DIS, pos: DP }, { col }, L3(`Un graf inconnex amb ${comps.length} components (cada color és una component).`, `Un grafo inconexo con ${comps.length} componentes (cada color es una componente).`, `A disconnected graph with ${comps.length} components (one colour each).`)),
  h('Quants costats pot tenir?', '¿Cuántos lados puede tener?', 'How many edges can it have?'),
  table(['', L3('Graf simple i connex de n vèrtexs', 'Grafo simple y conexo de n vértices', 'Simple connected graph on n vertices')], [
    [L3('**Mínim**', '**Mínimo**', '**Minimum**'), L3('$n - 1$ (els **arbres**, tema G8)', '$n - 1$ (los **árboles**, tema G8)', '$n - 1$ (the **trees**, unit G8)')],
    [L3('**Màxim**', '**Máximo**', '**Maximum**'), L3('$n(n-1)/2$ (el **complet** $K_n$)', '$n(n-1)/2$ (el **completo** $K_n$)', '$n(n-1)/2$ (the **complete** $K_n$)')],
  ]),
  box('thm', L3('graf amb k components', 'grafo con k componentes', 'graph with k components'), L3(
    'Un graf simple de $n$ vèrtexs i $k$ components té com a molt $\\dfrac{(n-k)(n-k+1)}{2}$ costats. **Conseqüència:** si un graf simple té més de $\\dfrac{(n-1)(n-2)}{2}$ costats, és connex.',
    'Un grafo simple de $n$ vértices y $k$ componentes tiene como mucho $\\dfrac{(n-k)(n-k+1)}{2}$ lados. **Consecuencia:** si un grafo simple tiene más de $\\dfrac{(n-1)(n-2)}{2}$ lados, es conexo.',
    'A simple graph with $n$ vertices and $k$ components has at most $\\dfrac{(n-k)(n-k+1)}{2}$ edges. **Consequence:** a simple graph with more than $\\dfrac{(n-1)(n-2)}{2}$ edges is connected.')),
  example(L3('d\'on surt la cota', 'de dónde sale la cota', 'where the bound comes from'), L3('Com es reparteixen n vèrtexs en k components per tenir el màxim de costats?', '¿Cómo se reparten n vértices en k componentes para tener el máximo de lados?', 'How should n vertices be split into k components to get the most edges?'), [
    L3('Dins de cada component, el màxim és un complet.', 'Dentro de cada componente, el máximo es un completo.', 'Inside each component, the maximum is a complete graph.'),
    { x: L3('Convé fer una component tan gran com es pugui: $k - 1$ vèrtexs aïllats i un $K_{n-k+1}$ amb la resta.', 'Conviene hacer una componente tan grande como se pueda: $k - 1$ vértices aislados y un $K_{n-k+1}$ con el resto.', 'Make one component as large as possible: $k - 1$ isolated vertices and a $K_{n-k+1}$ with the rest.'), why: L3('Els costats creixen com el quadrat dels vèrtexs: un grup gran en té més que dos de petits.', 'Los lados crecen como el cuadrado de los vértices: un grupo grande tiene más que dos pequeños.', 'Edges grow like the square of the vertices: one big group has more than two small ones.') },
    L3('$K_{n-k+1}$ té $(n-k+1)(n-k)/2$ costats.', '$K_{n-k+1}$ tiene $(n-k+1)(n-k)/2$ lados.', '$K_{n-k+1}$ has $(n-k+1)(n-k)/2$ edges.'),
  ], L3('Amb 7 vèrtexs: més de 6·5/2 = 15 costats ⇒ connex.', 'Con 7 vértices: más de 6·5/2 = 15 lados ⇒ conexo.', 'With 7 vertices: more than 6·5/2 = 15 edges ⇒ connected.'), X),
  h('Conjunts desconnectors i de tall', 'Conjuntos desconectadores y de corte', 'Disconnecting sets and cut sets'),
  table([L3('Concepte', 'Concepto', 'Concept'), L3('Definició', 'Definición', 'Definition')], [
    [L3('**Conjunt desconnector**', '**Conjunto desconectador**', '**Disconnecting set**'), L3('Costats que, si s\'eliminen, deixen inconnex un graf connex', 'Lados que, si se eliminan, dejan inconexo un grafo conexo', 'Edges whose removal disconnects a connected graph')],
    [L3('**Conjunt de tall**', '**Conjunto de corte**', '**Cut set**'), L3('Conjunt desconnector **minimal**: cap subconjunt propi no desconnecta', 'Conjunto desconectador **minimal**: ningún subconjunto propio desconecta', '**Minimal** disconnecting set: no proper subset disconnects')],
    [L3('**Istme** (o pont)', '**Istmo** (o puente)', '**Bridge**'), L3('Un sol costat que és conjunt de tall', 'Un solo lado que es conjunto de corte', 'A single edge that is a cut set')],
  ]),
  fig({ G: BR, pos: BP }, { badE: [['C', 'D']] }, L3('CD és un istme: si el treus, queden dos triangles separats. Cap altre costat no ho és (és dins d\'un cicle).', 'CD es un istmo: si lo quitas, quedan dos triángulos separados. Ningún otro lado lo es (está dentro de un ciclo).', 'CD is a bridge: removing it leaves two separate triangles. No other edge is (each lies on a cycle).')),
  box('tip', L3('Truc', 'Truco', 'Tip'), L3('Un costat és istme si i només si **no pertany a cap circuit**.', 'Un lado es istmo si y solo si **no pertenece a ningún circuito**.', 'An edge is a bridge if and only if it **lies on no circuit**.'), X),
  check(EX['g1-x4']),
  ref('gr3-comps', 4),
];

const DG = PRESETS.digraf;
const N = neighbours(DG.G), Pr = predecessors(DG.G);
const sc = strongComponents(DG.G);
const scol = Object.fromEntries(sc.comps.flatMap((c, i) => c.map((v) => [v, i + 1])));
const CG = condensed(DG.G);
const s3 = [
  h('Successors i antecessors', 'Sucesores y antecesores', 'Successors and predecessors'),
  p('En un graf dirigit, $\\Gamma(v)$ són els **successors** de $v$ (vèrtexs on es pot anar amb un arc des de $v$) i $\\Gamma^{-1}(v)$ els **antecessors** (els que tenen un arc cap a $v$). La taula de tots dos és el **diccionari** del graf.',
    'En un grafo dirigido, $\\Gamma(v)$ son los **sucesores** de $v$ (vértices a los que se puede ir con un arco desde $v$) y $\\Gamma^{-1}(v)$ los **antecesores** (los que tienen un arco hacia $v$). La tabla de ambos es el **diccionario** del grafo.',
    'In a directed graph, $\\Gamma(v)$ are the **successors** of $v$ (vertices reached by one arc from $v$) and $\\Gamma^{-1}(v)$ its **predecessors** (those with an arc into $v$). The table of both is the graph\'s **dictionary**.'),
  fig(DG, {}, L3('El digraf de l\'apartat.', 'El digrafo del apartado.', 'The section\'s digraph.')),
  table(['v', 'Γ(v)', 'Γ⁻¹(v)'], DG.G.V.map((v) => [`**${v}**`, N.get(v).join(', ') || '—', Pr.get(v).join(', ') || '—'])),
  h('Connexió forta i feble', 'Conexión fuerte y débil', 'Strong and weak connectivity'),
  table([L3('El digraf és…', 'El digrafo es…', 'The digraph is…'), L3('si…', 'si…', 'if…')], [
    [L3('**fortament connex**', '**fuertemente conexo**', '**strongly connected**'), L3('per a tot parell $v, w$ hi ha camí **dirigit** de $v$ a $w$ **i** de $w$ a $v$', 'para todo par $v, w$ hay camino **dirigido** de $v$ a $w$ **y** de $w$ a $v$', 'for every pair $v, w$ there is a **directed** walk from $v$ to $w$ **and** from $w$ to $v$')],
    [L3('**feblement connex**', '**débilmente conexo**', '**weakly connected**'), L3('és connex si s\'ignoren les fletxes', 'es conexo si se ignoran las flechas', 'it is connected when arrows are ignored')],
  ]),
  box('def', L3('components fortament connexes', 'componentes fuertemente conexas', 'strongly connected components'), L3(
    'La relació «$v$ i $w$ són mútuament accessibles» és d\'equivalència; les seves classes són les **components fortament connexes**. El graf és fortament connex si en té una sola.',
    'La relación «$v$ y $w$ son mutuamente accesibles» es de equivalencia; sus clases son las **componentes fuertemente conexas**. El grafo es fuertemente conexo si tiene una sola.',
    'The relation «$v$ and $w$ reach each other» is an equivalence; its classes are the **strongly connected components**. The graph is strongly connected if there is only one.')),
  h('Mètode de les marques', 'Método de las marcas', 'Marking method'),
  steps([
    L3('Tria un vèrtex $v$ i marca\'l amb **+** i **−**.', 'Elige un vértice $v$ y márcalo con **+** y **−**.', 'Pick a vertex $v$ and mark it **+** and **−**.'),
    L3('Marca amb **+** tot successor d\'un vèrtex marcat amb + (on puc arribar des de $v$).', 'Marca con **+** todo sucesor de un vértice marcado con + (adonde puedo llegar desde $v$).', 'Mark **+** every successor of a + vertex (where I can get from $v$).'),
    L3('Marca amb **−** tot antecessor d\'un vèrtex marcat amb − (des d\'on puc arribar a $v$).', 'Marca con **−** todo antecesor de un vértice marcado con − (desde dónde puedo llegar a $v$).', 'Mark **−** every predecessor of a − vertex (from where I can reach $v$).'),
    L3('Els vèrtexs amb **les dues marques** formen la component de $v$. Treu-los i repeteix amb el que quedi.', 'Los vértices con **las dos marcas** forman la componente de $v$. Quítalos y repite con lo que quede.', 'Vertices with **both marks** form the component of $v$. Remove them and repeat on the rest.'),
  ]),
  example(L3('marques al digraf de l\'apartat', 'marcas en el digrafo del apartado', 'marks on the section\'s digraph'), L3('Troba les components fortament connexes.', 'Encuentra las componentes fuertemente conexas.', 'Find the strongly connected components.'),
    sc.steps.map((s) => L3(`Des de ${s.v}: + {${s.plus.join(', ')}}; − {${s.minus.join(', ')}} ⇒ component {${s.comp.join(', ')}}.`, `Desde ${s.v}: + {${s.plus.join(', ')}}; − {${s.minus.join(', ')}} ⇒ componente {${s.comp.join(', ')}}.`, `From ${s.v}: + {${s.plus.join(', ')}}; − {${s.minus.join(', ')}} ⇒ component {${s.comp.join(', ')}}.`)),
    L3(`${sc.comps.length} components: ${sc.comps.map((c) => '{' + c.join(', ') + '}').join(' i ')}.`, `${sc.comps.length} componentes: ${sc.comps.map((c) => '{' + c.join(', ') + '}').join(' y ')}.`, `${sc.comps.length} components: ${sc.comps.map((c) => '{' + c.join(', ') + '}').join(' and ')}.`)),
  figs([
    [DG, { w: 230, h: 190, col: scol }, L3('Components fortament connexes', 'Componentes fuertemente conexas', 'Strongly connected components')],
    [CG, { w: 230, h: 190, pos: grid({ [CG.V[0]]: [1, 5], [CG.V[1]]: [9, 5] }, { w: 230, h: 190 }), names: { [CG.V[0]]: 'C₁', [CG.V[1]]: 'C₂' } }, L3(`Graf condensat: C₁ = {${sc.comps[0].join(', ')}}, C₂ = {${sc.comps[1].join(', ')}}`, `Grafo condensado: C₁ = {${sc.comps[0].join(', ')}}, C₂ = {${sc.comps[1].join(', ')}}`, `Condensed graph: C₁ = {${sc.comps[0].join(', ')}}, C₂ = {${sc.comps[1].join(', ')}}`)],
  ], X),
  box('def', L3('graf condensat', 'grafo condensado', 'condensed graph'), L3(
    'El **graf condensat** $G_c$ té un vèrtex per cada component fortament connexa i un arc de la component $C_i$ a la $C_j$ si a $G$ hi ha algun arc d\'un vèrtex de $C_i$ a un de $C_j$. Mai no té cicles.',
    'El **grafo condensado** $G_c$ tiene un vértice por cada componente fuertemente conexa y un arco de la componente $C_i$ a la $C_j$ si en $G$ hay algún arco de un vértice de $C_i$ a uno de $C_j$. Nunca tiene ciclos.',
    'The **condensed graph** $G_c$ has one vertex per strongly connected component, and an arc from $C_i$ to $C_j$ if $G$ has some arc from a vertex of $C_i$ to one of $C_j$. It never has cycles.'), X),
  ref('gr3-fort', 5),
];

export default {
  intro: [
    p('Com es va d\'un vèrtex a un altre? Aquest tema posa nom als recorreguts (camins, circuits) i mesura fins a quin punt un graf està «d\'una peça».',
      '¿Cómo se va de un vértice a otro? Este tema pone nombre a los recorridos (caminos, circuitos) y mide hasta qué punto un grafo está «de una pieza».',
      'How do you get from one vertex to another? This unit names the routes (walks, circuits) and measures how much a graph is «in one piece».'),
    boxi('summary', L3('D\'un cop d\'ull', 'De un vistazo', 'At a glance'), [
      L3('Simple: sense costats repetits. Elemental: sense vèrtexs repetits.', 'Simple: sin lados repetidos. Elemental: sin vértices repetidos.', 'Trail: no repeated edges. Path: no repeated vertices.'),
      L3('Simple i connex: $n - 1 \\le m \\le n(n-1)/2$; amb $k$ components, $m \\le (n-k)(n-k+1)/2$.', 'Simple y conexo: $n - 1 \\le m \\le n(n-1)/2$; con $k$ componentes, $m \\le (n-k)(n-k+1)/2$.', 'Simple and connected: $n - 1 \\le m \\le n(n-1)/2$; with $k$ components, $m \\le (n-k)(n-k+1)/2$.'),
      L3('Components fortes: marques + (successors) i − (antecessors).', 'Componentes fuertes: marcas + (sucesores) y − (antecesores).', 'Strong components: + marks (successors) and − marks (predecessors).'),
    ], D),
    hr(),
  ],
  sections: { '5-camins-i-circuits': s1, '6-connexio': s2, '7-connectivitat-en-grafs-dirigits': s3 },
  examEnd: [{ ref: 'gr3-cotes', seed: 3 }, { ref: 'gr3-fort', seed: 8 }, { ref: 'gr3-classifica', seed: 6 }],
};
