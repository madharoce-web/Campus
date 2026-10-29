/**
 * Exercicis fixos de grafs de la versió anterior del temari (es conserven els ids, per al progrés).
 * EX: comprovacions i tipus examen; REPAS: les qüestions de repàs obertes.
 */
export const EX = {
 "g1-c1": {
  "id": "g1-c1",
  "type": "num",
  "q": [
   "Un graf té valències 3, 3, 2, 2, 2. Quants costats té?",
   "Un grafo tiene valencias 3, 3, 2, 2, 2. ¿Cuántos lados tiene?",
   "A graph has degrees 3, 3, 2, 2, 2. How many edges does it have?"
  ],
  "answer": 6,
  "sol": [
   {
    "t": "p",
    "x": [
     "Suma de valències = 12 = 2m, per tant m = 6.",
     "Suma de valencias = 12 = 2m, por tanto m = 6.",
     "Sum of degrees = 12 = 2m, so m = 6."
    ]
   }
  ]
 },
 "g1-c2": {
  "id": "g1-c2",
  "type": "num",
  "q": [
   "Quants costats té K₆?",
   "¿Cuántos lados tiene K₆?",
   "How many edges does K₆ have?"
  ],
  "answer": 15,
  "sol": [
   {
    "t": "p",
    "x": [
     "`n(n − 1)/2 = 6 · 5 / 2 = 15`.",
     "`n(n − 1)/2 = 6 · 5 / 2 = 15`.",
     "`n(n − 1)/2 = 6 · 5 / 2 = 15`."
    ]
   }
  ]
 },
 "g1-c3": {
  "id": "g1-c3",
  "type": "mcq",
  "q": [
   "En un graf simple, la diagonal de A² dona…",
   "En un grafo simple, la diagonal de A² da…",
   "In a simple graph, the diagonal of A² gives…"
  ],
  "opts": [
   [
    "les valències",
    "las valencias",
    "the degrees"
   ],
   [
    "els llaços",
    "los lazos",
    "the loops"
   ],
   [
    "el nombre de costats",
    "el número de lados",
    "the number of edges"
   ],
   [
    "res: sempre és 0",
    "nada: siempre es 0",
    "nothing: it is always 0"
   ]
  ],
  "answer": 0,
  "sol": [
   {
    "t": "p",
    "x": [
     "Cada camí de longitud 2 de x a x és anar a un veí i tornar: n'hi ha tants com veïns.",
     "Cada camino de longitud 2 de x a x es ir a un vecino y volver: hay tantos como vecinos.",
     "Each path of length 2 from x to x goes to a neighbour and back: there are as many as neighbours."
    ]
   }
  ]
 },
 "g1-c4": {
  "id": "g1-c4",
  "type": "mcq",
  "q": [
   "Un graf connex té valències 2, 2, 3, 3, 4. És…",
   "Un grafo conexo tiene valencias 2, 2, 3, 3, 4. Es…",
   "A connected graph has degrees 2, 2, 3, 3, 4. It is…"
  ],
  "opts": [
   [
    "eulerià",
    "euleriano",
    "Eulerian"
   ],
   [
    "semieulerià: camí entre els dos vèrtexs senars",
    "semieuleriano: camino entre los dos vértices impares",
    "semi-Eulerian: a path between the two odd vertices"
   ],
   [
    "ni una cosa ni l'altra",
    "ni una cosa ni la otra",
    "neither"
   ]
  ],
  "answer": 1,
  "sol": [
   {
    "t": "p",
    "x": [
     "Té exactament dos vèrtexs de valència senar: el camí comença en un i acaba en l'altre.",
     "Tiene exactamente dos vértices de valencia impar: el camino empieza en uno y acaba en el otro.",
     "It has exactly two vertices of odd degree: the path starts at one and ends at the other."
    ]
   }
  ]
 },
 "g1-c5": {
  "id": "g1-c5",
  "type": "tf",
  "q": [
   "Si un graf no compleix la condició de Dirac, no és hamiltonià.",
   "Si un grafo no cumple la condición de Dirac, no es hamiltoniano.",
   "If a graph does not satisfy Dirac's condition, it is not Hamiltonian."
  ],
  "answer": false,
  "sol": [
   {
    "t": "p",
    "x": [
     "Dirac és suficient però no necessària: `C₆` és hamiltonià i no la compleix.",
     "Dirac es suficiente pero no necesaria: `C₆` es hamiltoniano y no la cumple.",
     "Dirac's condition is sufficient but not necessary: `C₆` is Hamiltonian and does not satisfy it."
    ]
   }
  ]
 },
 "g1-c6": {
  "id": "g1-c6",
  "type": "num",
  "q": [
   "Un graf planar connex té 8 vèrtexs i 12 costats. Quantes cares té?",
   "Un grafo planar conexo tiene 8 vértices y 12 lados. ¿Cuántas caras tiene?",
   "A connected planar graph has 8 vertices and 12 edges. How many faces does it have?"
  ],
  "answer": 6,
  "sol": [
   {
    "t": "p",
    "x": [
     "Euler: `c = m − n + 2 = 12 − 8 + 2 = 6`.",
     "Euler: `c = m − n + 2 = 12 − 8 + 2 = 6`.",
     "Euler: `c = m − n + 2 = 12 − 8 + 2 = 6`."
    ]
   }
  ]
 },
 "g1-c7": {
  "id": "g1-c7",
  "type": "num",
  "q": [
   "Quin és el nombre cromàtic de K₃,₄?",
   "¿Cuál es el número cromático de K₃,₄?",
   "What is the chromatic number of K₃,₄?"
  ],
  "answer": 2,
  "sol": [
   {
    "t": "p",
    "x": [
     "És bipartit: `γ = 2`.",
     "Es bipartito: `γ = 2`.",
     "It is bipartite: `γ = 2`."
    ]
   }
  ]
 },
 "g1-x1": {
  "id": "g1-x1",
  "type": "num",
  "q": [
   "Un graf simple, connex i planar té 10 vèrtexs. Quants costats pot tenir com a màxim?",
   "Un grafo simple, conexo y planar tiene 10 vértices. ¿Cuántos lados puede tener como máximo?",
   "A simple connected planar graph has 10 vertices. At most how many edges can it have?"
  ],
  "answer": 24,
  "sol": [
   {
    "t": "p",
    "x": [
     "Corol·lari d'Euler: `m ≤ 3n − 6 = 24`.",
     "Corolario de Euler: `m ≤ 3n − 6 = 24`.",
     "Corollary of Euler's formula: `m ≤ 3n − 6 = 24`."
    ]
   }
  ]
 },
 "g1-x2": {
  "id": "g1-x2",
  "type": "mcq",
  "q": [
   "Quin d'aquests grafs té un circuit d'Euler?",
   "¿Cuál de estos grafos tiene un circuito de Euler?",
   "Which of these graphs has an Euler circuit?"
  ],
  "opts": [
   "K₄",
   "K₅",
   "K₂,₃",
   [
    "el cub Q₃",
    "el cubo Q₃",
    "the cube Q₃"
   ]
  ],
  "answer": 1,
  "sol": [
   {
    "t": "p",
    "x": [
     "A K₅ totes les valències són 4 (parelles). K₄ i Q₃ tenen valència 3, i K₂,₃ té vèrtexs de valència 3.",
     "En K₅ todas las valencias son 4 (pares). K₄ y Q₃ tienen valencia 3, y K₂,₃ tiene vértices de valencia 3.",
     "In K₅ every degree is 4 (even). K₄ and Q₃ have degree 3, and K₂,₃ has vertices of degree 3."
    ]
   }
  ]
 },
 "g1-x3": {
  "id": "g1-x3",
  "type": "tf",
  "q": [
   "K₃,₃ és hamiltonià.",
   "K₃,₃ es hamiltoniano.",
   "K₃,₃ is Hamiltonian."
  ],
  "answer": true,
  "sol": [
   {
    "t": "p",
    "x": [
     "`K_{n,n}` amb `n ≥ 2` sempre ho és: s'alternen els dos costats.",
     "`K_{n,n}` con `n ≥ 2` siempre lo es: se alternan los dos lados.",
     "`K_{n,n}` with `n ≥ 2` always is: you alternate between the two sides."
    ]
   }
  ]
 },
 "g1-x4": {
  "id": "g1-x4",
  "type": "num",
  "q": [
   "Un graf simple té 7 vèrtexs. A partir de quants costats és segur que és connex?",
   "Un grafo simple tiene 7 vértices. ¿A partir de cuántos lados es seguro que es conexo?",
   "A simple graph has 7 vertices. From how many edges is it certainly connected?"
  ],
  "answer": 16,
  "sol": [
   {
    "t": "p",
    "x": [
     "Si `m > (n − 1)(n − 2)/2 = 15`, és connex: amb 16 costats.",
     "Si `m > (n − 1)(n − 2)/2 = 15`, es conexo: con 16 lados.",
     "If `m > (n − 1)(n − 2)/2 = 15`, it is connected: with 16 edges."
    ]
   }
  ]
 },
 "g2-c1": {
  "id": "g2-c1",
  "type": "num",
  "q": [
   "Quants costats té un arbre de 12 vèrtexs?",
   "¿Cuántos lados tiene un árbol de 12 vértices?",
   "How many edges does a tree with 12 vertices have?"
  ],
  "answer": 11,
  "sol": [
   {
    "t": "p",
    "x": [
     "Un arbre de n vèrtexs té `n − 1` costats.",
     "Un árbol de n vértices tiene `n − 1` lados.",
     "A tree with n vertices has `n − 1` edges."
    ]
   }
  ]
 },
 "g2-c2": {
  "id": "g2-c2",
  "type": "mcq",
  "q": [
   "Kruskal tria a cada pas…",
   "Kruskal elige en cada paso…",
   "At each step Kruskal chooses…"
  ],
  "opts": [
   [
    "el costat més barat que toca l'arbre",
    "el lado más barato que toca el árbol",
    "the cheapest edge touching the tree"
   ],
   [
    "el costat més barat del graf que no fa circuit",
    "el lado más barato del grafo que no forma circuito",
    "the cheapest edge of the graph that does not form a circuit"
   ],
   [
    "el costat més car",
    "el lado más caro",
    "the most expensive edge"
   ]
  ],
  "answer": 1,
  "sol": [
   {
    "t": "p",
    "x": [
     "La primera opció és Prim.",
     "La primera opción es Prim.",
     "The first option is Prim."
    ]
   }
  ]
 },
 "g2-c3": {
  "id": "g2-c3",
  "type": "mcq",
  "q": [
   "Quina estructura fa servir el recorregut en amplada (BFS)?",
   "¿Qué estructura usa el recorrido en anchura (BFS)?",
   "Which structure does breadth-first search (BFS) use?"
  ],
  "opts": [
   [
    "una cua",
    "una cola",
    "a queue"
   ],
   [
    "una pila",
    "una pila",
    "a stack"
   ],
   [
    "un arbre binari",
    "un árbol binario",
    "a binary tree"
   ]
  ],
  "answer": 0,
  "sol": [
   {
    "t": "p",
    "x": [
     "BFS fa servir una cua; DFS, una pila.",
     "BFS usa una cola; DFS, una pila.",
     "BFS uses a queue; DFS, a stack."
    ]
   }
  ]
 },
 "g2-x1": {
  "id": "g2-x1",
  "type": "num",
  "q": [
   "Un arbre binari regular té 20 vèrtexs interns. Quantes fulles té?",
   "Un árbol binario regular tiene 20 vértices internos. ¿Cuántas hojas tiene?",
   "A full binary tree has 20 internal vertices. How many leaves does it have?"
  ],
  "answer": 21,
  "sol": [
   {
    "t": "p",
    "x": [
     "`t = i + 1 = 21`.",
     "`t = i + 1 = 21`.",
     "`t = i + 1 = 21`."
    ]
   }
  ]
 },
 "g2-x2": {
  "id": "g2-x2",
  "type": "num",
  "q": [
   "Un arbre 3-ari regular té 10 vèrtexs interns. Quants vèrtexs té en total?",
   "Un árbol 3-ario regular tiene 10 vértices internos. ¿Cuántos vértices tiene en total?",
   "A full 3-ary tree has 10 internal vertices. How many vertices does it have in total?"
  ],
  "answer": 31,
  "sol": [
   {
    "t": "p",
    "x": [
     "`n = m·i + 1 = 3 · 10 + 1 = 31`.",
     "`n = m·i + 1 = 3 · 10 + 1 = 31`.",
     "`n = m·i + 1 = 3 · 10 + 1 = 31`."
    ]
   }
  ]
 },
 "g2-x3": {
  "id": "g2-x3",
  "type": "num",
  "q": [
   "Costats amb pes: AB = 1, BC = 2, AC = 3, CD = 4, BD = 5. Quant pesa l'arbre generador minimal?",
   "Lados con peso: AB = 1, BC = 2, AC = 3, CD = 4, BD = 5. ¿Cuánto pesa el árbol generador minimal?",
   "Weighted edges: AB = 1, BC = 2, AC = 3, CD = 4, BD = 5. What is the weight of the minimum spanning tree?"
  ],
  "answer": 7,
  "sol": [
   {
    "t": "p",
    "x": [
     "Kruskal: AB (1), BC (2); AC faria circuit; CD (4). Total `1 + 2 + 4 = 7`.",
     "Kruskal: AB (1), BC (2); AC formaría circuito; CD (4). Total `1 + 2 + 4 = 7`.",
     "Kruskal: AB (1), BC (2); AC would form a circuit; CD (4). Total `1 + 2 + 4 = 7`."
    ]
   }
  ]
 },
 "g3-x1": {
  "id": "g3-x1",
  "type": "num",
  "q": [
   "Projecte: A (3 dies, inicial), B (2, després d'A), C (4, després d'A), D (1, després de B i C). Quina és la durada del projecte?",
   "Proyecto: A (3 días, inicial), B (2, después de A), C (4, después de A), D (1, después de B y C). ¿Cuál es la duración del proyecto?",
   "Project: A (3 days, initial), B (2, after A), C (4, after A), D (1, after B and C). What is the duration of the project?"
  ],
  "answer": 8,
  "sol": [
   {
    "t": "p",
    "x": [
     "Early: A 0, B 3, C 3, D = max(3 + 2, 3 + 4) = 7; final = 7 + 1 = 8.",
     "Early: A 0, B 3, C 3, D = max(3 + 2, 3 + 4) = 7; final = 7 + 1 = 8.",
     "Early: A 0, B 3, C 3, D = max(3 + 2, 3 + 4) = 7; end = 7 + 1 = 8."
    ]
   }
  ]
 },
 "g3-x2": {
  "id": "g3-x2",
  "type": "num",
  "q": [
   "Al mateix projecte, quin és el marge total de B?",
   "En el mismo proyecto, ¿cuál es el margen total de B?",
   "In the same project, what is the total slack of B?"
  ],
  "answer": 2,
  "sol": [
   {
    "t": "p",
    "x": [
     "Last de D = 7, per tant last de B = 7 − 2 = 5. Marge = 5 − 3 = 2.",
     "Last de D = 7, por tanto last de B = 7 − 2 = 5. Margen = 5 − 3 = 2.",
     "Last of D = 7, so last of B = 7 − 2 = 5. Slack = 5 − 3 = 2."
    ]
   }
  ]
 },
 "g3-x3": {
  "id": "g3-x3",
  "type": "mcq",
  "q": [
   "Al mateix projecte, quin és el camí crític?",
   "En el mismo proyecto, ¿cuál es el camino crítico?",
   "In the same project, what is the critical path?"
  ],
  "opts": [
   "A → C → D",
   "A → B → D",
   "A → B → C → D",
   [
    "no n'hi ha",
    "no hay",
    "there is none"
   ]
  ],
  "answer": 0,
  "sol": [
   {
    "t": "p",
    "x": [
     "A, C i D tenen marge 0; B en té 2.",
     "A, C y D tienen margen 0; B tiene 2.",
     "A, C and D have zero slack; B has 2."
    ]
   }
  ]
 }
};

export const REPAS = [
 {
  "id": "18-questions-de-repas-q1",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Quina diferència hi ha entre un graf dirigit i un de no dirigit?",
     "¿Qué diferencia hay entre un grafo dirigido y uno no dirigido?",
     "What is the difference between a directed and an undirected graph?"
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "En el **no dirigit** cada costat s'associa a un parell **no ordenat** de vèrtexs (`{A,B} = {B,A}`); en el **dirigit** el parell és **ordenat** (`(A,B) ≠ (B,A)`).",
     "En el **no dirigido** cada lado se asocia a un par **no ordenado** de vértices (`{A,B} = {B,A}`); en el **dirigido** el par es **ordenado** (`(A,B) ≠ (B,A)`).",
     "In the **undirected** one each edge is associated with an **unordered** pair of vertices (`{A,B} = {B,A}`); in the **directed** one the pair is **ordered** (`(A,B) ≠ (B,A)`)."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q2",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Per què el nombre de vèrtexs de valència senar és sempre parell?",
     "¿Por qué el número de vértices de valencia impar es siempre par?",
     "Why is the number of vertices of odd degree always even?"
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "Perquè la suma de totes les valències val `2m` (cada costat aporta 1 a cadascun dels seus dos extrems), que és parell. Si hi hagués un nombre senar de vèrtexs de valència senar, la suma seria senar. Contradicció.",
     "Porque la suma de todas las valencias vale `2m` (cada lado aporta 1 a cada uno de sus dos extremos), que es par. Si hubiera un número impar de vértices de valencia impar, la suma sería impar. Contradicción.",
     "Because the sum of all the degrees is `2m` (each edge adds 1 to each of its two ends), which is even. If there were an odd number of vertices of odd degree, the sum would be odd. Contradiction."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q3",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Què representa l'element (i,j) d'Aⁿ?",
     "¿Qué representa el elemento (i,j) de Aⁿ?",
     "What does entry (i,j) of Aⁿ represent?"
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "El **nombre de successions de costats de longitud n** entre el vèrtex de la fila i i el de la columna j, en un graf simple. La diagonal d'A² dona les valències.",
     "El **número de sucesiones de lados de longitud n** entre el vértice de la fila i y el de la columna j, en un grafo simple. La diagonal de A² da las valencias.",
     "The **number of edge sequences of length n** between the vertex of row i and that of column j, in a simple graph. The diagonal of A² gives the degrees."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q4",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Diferència entre camí simple i camí elemental.",
     "Diferencia entre camino simple y camino elemental.",
     "Difference between a simple path and an elementary path."
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "Al **camí simple** no es repeteix cap **costat**; al **camí elemental** no es repeteix cap **vèrtex** (i per tant tampoc cap costat).",
     "En el **camino simple** no se repite ningún **lado**; en el **camino elemental** no se repite ningún **vértice** (y por tanto tampoco ningún lado).",
     "In a **simple path** no **edge** is repeated; in an **elementary path** no **vertex** is repeated (and therefore no edge either)."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q5",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Diferència entre conjunt desconnector, conjunt de tall i istme.",
     "Diferencia entre conjunto desconector, conjunto de corte e istmo.",
     "Difference between a disconnecting set, a cut set and an isthmus."
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "Un **desconnector** és un conjunt de costats que en eliminar-se deixa el graf inconnex. Un **conjunt de tall** és un desconnector **minimal** (en eliminar-lo queden exactament dues components). Un **istme o pont** és un conjunt de tall d'**un únic costat**.",
     "Un **desconector** es un conjunto de lados que al eliminarse deja el grafo inconexo. Un **conjunto de corte** es un desconector **minimal** (al eliminarlo quedan exactamente dos componentes). Un **istmo o puente** es un conjunto de corte de **un único lado**.",
     "A **disconnecting set** is a set of edges whose removal leaves the graph disconnected. A **cut set** is a **minimal** disconnecting set (removing it leaves exactly two components). An **isthmus or bridge** is a cut set of **a single edge**."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q6",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Quan té un graf un circuit d'Euler?",
     "¿Cuándo tiene un grafo un circuito de Euler?",
     "When does a graph have an Euler circuit?"
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "Si i només si és **connex** i **tots els seus vèrtexs tenen valència parella**. És semi-eulerià (camí, no circuit) si és connex i no té més de dos vèrtexs de valència imparella.",
     "Si y solo si es **conexo** y **todos sus vértices tienen valencia par**. Es semi-euleriano (camino, no circuito) si es conexo y no tiene más de dos vértices de valencia impar.",
     "If and only if it is **connected** and **all its vertices have even degree**. It is semi-Eulerian (a path, not a circuit) if it is connected and has no more than two vertices of odd degree."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q7",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Diferència entre un circuit d'Euler i un de Hamilton.",
     "Diferencia entre un circuito de Euler y uno de Hamilton.",
     "Difference between an Euler circuit and a Hamilton circuit."
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "**Euler** recorre tots els **costats** exactament una vegada. **Hamilton** passa per tots els **vèrtexs** exactament una vegada.",
     "**Euler** recorre todos los **lados** exactamente una vez. **Hamilton** pasa por todos los **vértices** exactamente una vez.",
     "**Euler** traverses every **edge** exactly once. **Hamilton** passes through every **vertex** exactly once."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q8",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Per què les condicions d'Ore i Dirac no serveixen per descartar un graf hamiltonià?",
     "¿Por qué las condiciones de Ore y Dirac no sirven para descartar un grafo hamiltoniano?",
     "Why can the Ore and Dirac conditions not be used to rule out a Hamiltonian graph?"
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "Perquè són condicions **suficients però no necessàries**: si es compleixen, el graf és hamiltonià; si no es compleixen, no se'n pot concloure res. `C₆` i `W₇` són hamiltonians i no les compleixen.",
     "Porque son condiciones **suficientes pero no necesarias**: si se cumplen, el grafo es hamiltoniano; si no se cumplen, no se puede concluir nada. `C₆` y `W₇` son hamiltonianos y no las cumplen.",
     "Because they are **sufficient but not necessary** conditions: if they hold, the graph is Hamiltonian; if they do not, nothing can be concluded. `C₆` and `W₇` are Hamiltonian and do not satisfy them."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q9",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Quan un graf bipartit no pot ser hamiltonià?",
     "¿Cuándo un grafo bipartito no puede ser hamiltoniano?",
     "When can a bipartite graph not be Hamiltonian?"
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "Quan `|V₁| ≠ |V₂|`. En conseqüència, un bipartit amb un nombre **imparell** de vèrtexs no pot tenir mai circuits de Hamilton. `K_{n,n}` sempre és hamiltonià si `n ≥ 2`.",
     "Cuando `|V₁| ≠ |V₂|`. En consecuencia, un bipartito con un número **impar** de vértices no puede tener nunca circuitos de Hamilton. `K_{n,n}` siempre es hamiltoniano si `n ≥ 2`.",
     "When `|V₁| ≠ |V₂|`. Consequently, a bipartite graph with an **odd** number of vertices can never have Hamilton circuits. `K_{n,n}` is always Hamiltonian if `n ≥ 2`."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q10",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Enuncia la fórmula d'Euler per a grafs planars i el seu corol·lari.",
     "Enuncia la fórmula de Euler para grafos planares y su corolario.",
     "State Euler's formula for planar graphs and its corollary."
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "`c = m − n + 2` (cares, costats, vèrtexs) per a un graf planar i connex. Corol·lari: si a més és simple i `n ≥ 3`, aleshores `m ≤ 3n − 6`. D'aquí se'n dedueix que `K₅` i `K₃,₃` no són planars.",
     "`c = m − n + 2` (caras, lados, vértices) para un grafo planar y conexo. Corolario: si además es simple y `n ≥ 3`, entonces `m ≤ 3n − 6`. De aquí se deduce que `K₅` y `K₃,₃` no son planares.",
     "`c = m − n + 2` (faces, edges, vertices) for a connected planar graph. Corollary: if it is also simple and `n ≥ 3`, then `m ≤ 3n − 6`. From this it follows that `K₅` and `K₃,₃` are not planar."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q11",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": "Enuncia el teorema de Kuratowski."
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "Un graf G és planar **si i només si no conté cap subgraf homeomorf a K₅ o a K₃,₃**.",
     "Un grafo G es planar **si y solo si no contiene ningún subgrafo homeomorfo a K₅ o a K₃,₃**.",
     "A graph G is planar **if and only if it contains no subgraph homeomorphic to K₅ or K₃,₃**."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q12",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Quines relacions compleix el graf dual?",
     "¿Qué relaciones cumple el grafo dual?",
     "Which relations does the dual graph satisfy?"
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "Si G és planar i connex amb n vèrtexs, m costats i c cares, el seu dual G\\* compleix `n* = c`, `m* = m` i `c* = n`.",
     "Si G es planar y conexo con n vértices, m lados y c caras, su dual G\\* cumple `n* = c`, `m* = m` y `c* = n`.",
     "If G is planar and connected with n vertices, m edges and c faces, its dual G\\* satisfies `n* = c`, `m* = m` and `c* = n`."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q13",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Què és el nombre cromàtic i què val en els casos coneguts?",
     "¿Qué es el número cromático y cuánto vale en los casos conocidos?",
     "What is the chromatic number and what is it in the known cases?"
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "`γ(G)` és el menor nombre de colors amb què es poden acolorir els vèrtexs sense que dos adjacents comparteixin color. `γ(G)=1` sii G és nul; `γ(G)=2` sii G és bipartit; `γ(Kₙ)=n`. Fita: `γ(G) ≤ δ_max + 1`.",
     "`γ(G)` es el menor número de colores con que se pueden colorear los vértices sin que dos adyacentes compartan color. `γ(G)=1` sii G es nulo; `γ(G)=2` sii G es bipartito; `γ(Kₙ)=n`. Cota: `γ(G) ≤ δ_max + 1`.",
     "`γ(G)` is the smallest number of colours with which the vertices can be coloured without two adjacent ones sharing a colour. `γ(G)=1` iff G is null; `γ(G)=2` iff G is bipartite; `γ(Kₙ)=n`. Bound: `γ(G) ≤ δ_max + 1`."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q14",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Enuncia les quatre caracteritzacions equivalents d'un arbre.",
     "Enuncia las cuatro caracterizaciones equivalentes de un árbol.",
     "State the four equivalent characterisations of a tree."
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "Per a un graf G de n vèrtexs: (1) G és un arbre; (2) G és connex i sense circuits; (3) G és connex i té n−1 costats; (4) G no té circuits i té n−1 costats.",
     "Para un grafo G de n vértices: (1) G es un árbol; (2) G es conexo y sin circuitos; (3) G es conexo y tiene n−1 lados; (4) G no tiene circuitos y tiene n−1 lados.",
     "For a graph G with n vertices: (1) G is a tree; (2) G is connected and without circuits; (3) G is connected and has n−1 edges; (4) G has no circuits and has n−1 edges."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q15",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Quantes fulles i quants vèrtexs té un arbre m-ari regular?",
     "¿Cuántas hojas y cuántos vértices tiene un árbol m-ario regular?",
     "How many leaves and how many vertices does a full m-ary tree have?"
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "Amb **i** vèrtexs interns: `n = m·i + 1` vèrtexs en total i `t = (m−1)·i + 1` vèrtexs terminals. Per al binari: `n = 2i+1` i `t = i+1`.",
     "Con **i** vértices internos: `n = m·i + 1` vértices en total y `t = (m−1)·i + 1` vértices terminales. Para el binario: `n = 2i+1` y `t = i+1`.",
     "With **i** internal vertices: `n = m·i + 1` vertices in total and `t = (m−1)·i + 1` terminal vertices. For the binary one: `n = 2i+1` and `t = i+1`."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q16",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Diferència entre Prim i Kruskal.",
     "Diferencia entre Prim y Kruskal.",
     "Difference between Prim and Kruskal."
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "Tots dos generen un arbre generador **minimal**. **Prim** fa créixer un únic arbre des d'un vèrtex inicial: cada costat afegit ha de tocar l'arbre ja construït. **Kruskal** parteix de tots els vèrtexs solts i afegeix sempre el costat més barat del graf que no formi circuit.",
     "Ambos generan un árbol generador **minimal**. **Prim** hace crecer un único árbol desde un vértice inicial: cada lado añadido ha de tocar el árbol ya construido. **Kruskal** parte de todos los vértices sueltos y añade siempre el lado más barato del grafo que no forme circuito.",
     "Both produce a **minimum** spanning tree. **Prim** grows a single tree from a starting vertex: each added edge must touch the tree already built. **Kruskal** starts from all the vertices on their own and always adds the cheapest edge of the graph that does not form a circuit."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q17",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Quina estructura de dades usa cada recorregut?",
     "¿Qué estructura de datos usa cada recorrido?",
     "Which data structure does each traversal use?"
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "**DFS** (profunditat) fa servir una **pila**; **BFS** (amplada) fa servir una **cua**.",
     "**DFS** (profundidad) usa una **pila**; **BFS** (anchura) usa una **cola**.",
     "**DFS** (depth) uses a **stack**; **BFS** (breadth) uses a **queue**."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q18",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Com es calculen les dates early i last?",
     "¿Cómo se calculan las fechas early y last?",
     "How are the early and last dates computed?"
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "**Early** (camí més llarg des de l'inici): `T_Y = max_{X∈C} [T_X + t(X,Y)]` sobre les tasques immediatament anteriors. **Last** (camí més curt fins al final): `T'_X = min_{Y∈C'} [T'_Y − t(X,Y)]` sobre les immediatament posteriors. L'*early* de la tasca final és la durada del projecte.",
     "**Early** (camino más largo desde el inicio): `T_Y = max_{X∈C} [T_X + t(X,Y)]` sobre las tareas inmediatamente anteriores. **Last** (camino más corto hasta el final): `T'_X = min_{Y∈C'} [T'_Y − t(X,Y)]` sobre las inmediatamente posteriores. El *early* de la tarea final es la duración del proyecto.",
     "**Early** (longest path from the start): `T_Y = max_{X∈C} [T_X + t(X,Y)]` over the immediately preceding tasks. **Last** (shortest path to the end): `T'_X = min_{Y∈C'} [T'_Y − t(X,Y)]` over the immediately following ones. The *early* date of the final task is the duration of the project."
    ]
   }
  ]
 },
 {
  "id": "18-questions-de-repas-q19",
  "type": "open",
  "qb": [
   {
    "t": "p",
    "x": [
     "Què és una tasca crítica?",
     "¿Qué es una tarea crítica?",
     "What is a critical task?"
    ]
   }
  ],
  "sol": [
   {
    "t": "p",
    "x": [
     "Una tasca amb **marge total zero**: `Mᵀ(X) = T'_X − T_X = 0`. No es pot retardar gens sense allargar tot el projecte. El camí que les uneix totes és el **camí crític**.",
     "Una tarea con **margen total cero**: `Mᵀ(X) = T'_X − T_X = 0`. No se puede retrasar nada sin alargar todo el proyecto. El camino que las une todas es el **camino crítico**.",
     "A task with **zero total slack**: `Mᵀ(X) = T'_X − T_X = 0`. It cannot be delayed at all without lengthening the whole project. The path that joins them all is the **critical path**."
    ]
   }
  ]
 }
];
