// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "**Seminari Lògica i grafs (BInfo-1)** · Universitat d'Andorra · Parts 1 i 2",
    "**Seminario Lógica y grafos (BInfo-1)** · Universitat d'Andorra · Partes 1 y 2",
    "**Logic and graphs seminar (BInfo-1)** · Universitat d'Andorra · Parts 1 and 2"
   ]
  },
  {
   "t": "p",
   "x": [
    "El material cobreix tres mòduls: **teoria de grafs**, **teoria d'arbres** i **planificació de projectes**.",
    "El material cubre tres módulos: **teoría de grafos**, **teoría de árboles** y **planificación de proyectos**.",
    "The material covers three modules: **graph theory**, **tree theory** and **project planning**."
   ]
  },
  {
   "t": "hr"
  },
  {
   "blocks": [
    {
     "t": "p",
     "x": [
      "`G=(V,E)` graf · `V` vèrtexs (nodes) · `E` costats (branques o arestes) · `n=|V|` · `m=|E|` · `δ(v)` valència · `Γ(v)` successors · `Γ⁻¹(v)` antecessors · `γ(G)` nombre cromàtic · `κ(G)` índex cromàtic · `λ(e)` pes d'un costat.",
      "`G=(V,E)` grafo · `V` vértices (nodos) · `E` lados (ramas o aristas) · `n=|V|` · `m=|E|` · `δ(v)` valencia · `Γ(v)` sucesores · `Γ⁻¹(v)` antecesores · `γ(G)` número cromático · `κ(G)` índice cromático · `λ(e)` peso de un lado.",
      "`G=(V,E)` graph · `V` vertices (nodes) · `E` edges · `n=|V|` · `m=|E|` · `δ(v)` degree · `Γ(v)` successors · `Γ⁻¹(v)` predecessors · `γ(G)` chromatic number · `κ(G)` chromatic index · `λ(e)` weight of an edge."
     ]
    }
   ],
   "t": "note",
   "title": [
    "Notació",
    "Notación",
    "Notation"
   ]
  },
  {
   "t": "hr"
  }
 ],
 "sections": {
  "1-conceptes-basics": [
   {
    "id": "1-1-graf-no-dirigit",
    "t": "h",
    "x": [
     "Graf no dirigit",
     "Grafo no dirigido",
     "Undirected graph"
    ]
   },
   {
    "t": "p",
    "x": [
     "Un **graf no dirigit** G consisteix en un conjunt **V** de vèrtexs (o nodes) i un conjunt **E** de costats (o branques o arestes), de manera que cada costat `e ∈ E` està associat a un parell **no ordenat** de vèrtexs de V. Notem `G=(V,E)`.",
     "Un **grafo no dirigido** G consiste en un conjunto **V** de vértices (o nodos) y un conjunto **E** de lados (o ramas o aristas), de manera que cada lado `e ∈ E` está asociado a un par **no ordenado** de vértices de V. Notamos `G=(V,E)`.",
     "An **undirected graph** G consists of a set **V** of vertices (or nodes) and a set **E** of edges, such that each edge `e ∈ E` is associated with an **unordered** pair of vertices of V. We write `G=(V,E)`."
    ]
   },
   {
    "t": "code",
    "lang": "text",
    "src": "<code>V = {A, B, C, D, E}\nE = {e₁, e₂, e₃, e₄, e₅, e₆, e₇, e₈}\n\ne₁={A,B}   e₂={B,C}   e₃={A,C}   e₄={B,E}\ne₅={C,E}   e₆={D,E}   e₇={A,E}   e₈={D,D}\n</code>",
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "`{A,B} = {B,A}`: en un graf no dirigit el parell **no** està ordenat.",
       "`{A,B} = {B,A}`: en un grafo no dirigido el par **no** está ordenado.",
       "`{A,B} = {B,A}`: in an undirected graph the pair is **not** ordered."
      ]
     }
    ],
    "t": "note",
    "title": [
     "Observació",
     "Observación",
     "Remark"
    ],
    "mode": "explained"
   },
   {
    "id": "1-2-graf-dirigit-o-digraf",
    "t": "h",
    "x": [
     "Graf dirigit (o digraf)",
     "Grafo dirigido (o digrafo)",
     "Directed graph (or digraph)"
    ]
   },
   {
    "t": "p",
    "x": [
     "Igual, però cada costat està associat a un parell **ordenat** de vèrtexs.",
     "Igual, pero cada lado está asociado a un par **ordenado** de vértices.",
     "The same, but each edge is associated with an **ordered** pair of vertices."
    ]
   },
   {
    "t": "code",
    "lang": "text",
    "src": "<code>e₁=(A,B)   e₂=(C,B)   e₃=(C,A)   e₄=(B,E)\ne₅=(C,E)   e₆=(D,E)   e₇=(A,E)   e₈=(D,D)   e₉=(A,C)\n</code>",
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "`(A,B) ≠ (B,A)`: aquí l'ordre sí que importa.",
       "`(A,B) ≠ (B,A)`: aquí el orden sí importa.",
       "`(A,B) ≠ (B,A)`: here the order does matter."
      ]
     }
    ],
    "t": "note",
    "title": [
     "Observació",
     "Observación",
     "Remark"
    ],
    "mode": "explained"
   },
   {
    "id": "1-3-terminologia",
    "t": "h",
    "x": [
     "Terminologia",
     "Terminología",
     "Terminology"
    ]
   },
   {
    "head": [
     [
      "Terme",
      "Término",
      "Term"
     ],
     [
      "Definició",
      "Definición",
      "Definition"
     ]
    ],
    "rows": [
     [
      [
       "**Vèrtexs adjacents**",
       "**Vértices adyacentes**",
       "**Adjacent vertices**"
      ],
      [
       "Dos vèrtexs v i w units per un costat e. També es diu que v i w són **incidents** en e",
       "Dos vértices v y w unidos por un lado e. También se dice que v y w son **incidentes** en e",
       "Two vertices v and w joined by an edge e. We also say that v and w are **incident** to e"
      ]
     ],
     [
      [
       "**Graf finit**",
       "**Grafo finito**",
       "**Finite graph**"
      ],
      [
       "Graf amb un nombre finit de vèrtexs i de costats. Són els grafs estudiats a l'assignatura",
       "Grafo con un número finito de vértices y de lados. Son los grafos estudiados en la asignatura",
       "Graph with a finite number of vertices and edges. They are the graphs studied in the course"
      ]
     ],
     [
      [
       "**Llaç**",
       "**Lazo**",
       "**Loop**"
      ],
      [
       "Costat que uneix un vèrtex amb ell mateix, com `e₈={D,D}`",
       "Lado que une un vértice consigo mismo, como `e₈={D,D}`",
       "Edge that joins a vertex to itself, like `e₈={D,D}`"
      ]
     ],
     [
      [
       "**Costats paral·lels**",
       "**Lados paralelos**",
       "**Parallel edges**"
      ],
      [
       "Dos o més costats que uneixen la mateixa parella de vèrtexs",
       "Dos o más lados que unen la misma pareja de vértices",
       "Two or more edges that join the same pair of vertices"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "id": "1-4-valencia-o-grau-d-un-vertex",
    "t": "h",
    "x": [
     "València (o grau) d'un vèrtex",
     "Valencia (o grado) de un vértice",
     "Degree of a vertex"
    ]
   },
   {
    "t": "p",
    "x": [
     "És el nombre de costats que són incidents en un vèrtex. Notem `δ(v)`.",
     "Es el número de lados que son incidentes en un vértice. Notamos `δ(v)`.",
     "It is the number of edges incident to a vertex. We write `δ(v)`."
    ]
   },
   {
    "items": [
     [
      "v és un **vèrtex aïllat** si `δ(v) = 0`.",
      "v es un **vértice aislado** si `δ(v) = 0`.",
      "v is an **isolated vertex** if `δ(v) = 0`."
     ],
     [
      "v és un **vèrtex terminal** o punt extrem si `δ(v) = 1`.",
      "v es un **vértice terminal** o punto extremo si `δ(v) = 1`.",
      "v is a **terminal vertex** or end point if `δ(v) = 1`."
     ]
    ],
    "t": "list"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "La suma de les valències de tots els vèrtexs d'un graf = **2 × (nombre de costats)** ⟹ és un **nombre parell**.",
       "La suma de las valencias de todos los vértices de un grafo = **2 × (número de lados)** ⟹ es un **número par**.",
       "The sum of the degrees of all the vertices of a graph = **2 × (number of edges)** ⟹ it is an **even number**."
      ]
     },
     {
      "t": "p",
      "x": [
       "Conseqüència: **el nombre de vèrtexs amb valència senar és sempre un nombre parell.**",
       "Consecuencia: **el número de vértices con valencia impar es siempre un número par.**",
       "Consequence: **the number of vertices of odd degree is always even.**"
      ]
     }
    ],
    "t": "prop",
    "title": [
     "Lema de les encaixades de mans",
     "Lema de los apretones de manos",
     "Handshaking lemma"
    ]
   },
   {
    "id": "1-5-subgraf",
    "t": "h",
    "x": [
     "Subgraf",
     "Subgrafo",
     "Subgraph"
    ]
   },
   {
    "t": "p",
    "x": [
     "Direm que `G'=(V',E')` és un **subgraf** de `G=(V,E)` quan `V' ⊆ V` i `E' ⊆ E`.",
     "Diremos que `G'=(V',E')` es un **subgrafo** de `G=(V,E)` cuando `V' ⊆ V` y `E' ⊆ E`.",
     "We say that `G'=(V',E')` is a **subgraph** of `G=(V,E)` when `V' ⊆ V` and `E' ⊆ E`."
    ]
   },
   {
    "t": "hr"
   },
   {
    "t": "check",
    "ex": {
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
    }
   }
  ],
  "2-grafs-especials": [
   {
    "head": [
     [
      "Graf",
      "Grafo",
      "Graph"
     ],
     [
      "Definició",
      "Definición",
      "Definition"
     ],
     [
      "Notació",
      "Notación",
      "Notation"
     ]
    ],
    "rows": [
     [
      [
       "**Nul**",
       "**Nulo**",
       "**Null**"
      ],
      [
       "Graf sense costats",
       "Grafo sin lados",
       "Graph without edges"
      ],
      [
       "`Nₙ` (n vèrtexs)",
       "`Nₙ` (n vértices)",
       "`Nₙ` (n vertices)"
      ]
     ],
     [
      "**Simple**",
      [
       "Graf sense llaços ni costats paral·lels",
       "Grafo sin lazos ni lados paralelos",
       "Graph without loops or parallel edges"
      ],
      "—"
     ],
     [
      [
       "**Complet**",
       "**Completo**",
       "**Complete**"
      ],
      [
       "n vèrtexs on tot vèrtex és adjacent a tots els altres",
       "n vértices donde todo vértice es adyacente a todos los demás",
       "n vertices where every vertex is adjacent to all the others"
      ],
      "`Kₙ`"
     ],
     [
      [
       "**Regular de grau r**",
       "**Regular de grado r**",
       "**Regular of degree r**"
      ],
      [
       "Tots els vèrtexs tenen valència r",
       "Todos los vértices tienen valencia r",
       "All the vertices have degree r"
      ],
      "—"
     ],
     [
      [
       "**Platònic**",
       "**Platónico**",
       "**Platonic**"
      ],
      [
       "Format pels vèrtexs i arestes de poliedres regulars (sòlids platònics): tetraedre, cub, octaedre…",
       "Formado por los vértices y aristas de poliedros regulares (sólidos platónicos): tetraedro, cubo, octaedro…",
       "Formed by the vertices and edges of regular polyhedra (Platonic solids): tetrahedron, cube, octahedron…"
      ],
      "—"
     ],
     [
      [
       "**Bipartit**",
       "**Bipartito**",
       "**Bipartite**"
      ],
      [
       "`V=V₁ ∪ V₂` i `V₁ ∩ V₂ = ∅`, i tot costat és incident a un vèrtex de V₁ i a un de V₂",
       "`V=V₁ ∪ V₂` y `V₁ ∩ V₂ = ∅`, y todo lado es incidente a un vértice de V₁ y a uno de V₂",
       "`V=V₁ ∪ V₂` and `V₁ ∩ V₂ = ∅`, and every edge is incident to a vertex of V₁ and to one of V₂"
      ],
      "—"
     ],
     [
      [
       "**Bipartit complet**",
       "**Bipartito completo**",
       "**Complete bipartite**"
      ],
      [
       "Bipartit sense costats paral·lels on tot vèrtex de V₁ és adjacent a **tots** els de V₂",
       "Bipartito sin lados paralelos donde todo vértice de V₁ es adyacente a **todos** los de V₂",
       "Bipartite without parallel edges where every vertex of V₁ is adjacent to **all** those of V₂"
      ],
      "`K_{m,n}`"
     ],
     [
      [
       "**Circuit**",
       "**Circuito**",
       "**Cycle**"
      ],
      [
       "Graf connex i regular de grau 2",
       "Grafo conexo y regular de grado 2",
       "Connected graph that is regular of degree 2"
      ],
      "`Cₙ`"
     ],
     [
      [
       "**Roda**",
       "**Rueda**",
       "**Wheel**"
      ],
      [
       "Suma d'un graf circuit de n-1 vèrtexs amb un graf nul d'un únic vèrtex",
       "Suma de un grafo circuito de n-1 vértices con un grafo nulo de un único vértice",
       "Sum of a cycle graph with n-1 vertices and a null graph with a single vertex"
      ],
      "`Wₙ = C_{n-1} + N₁`"
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "items": [
       [
        "Els grafs complets `Kₙ` són **regulars de grau n-1**.",
        "Los grafos completos `Kₙ` son **regulares de grado n-1**.",
        "Complete graphs `Kₙ` are **regular of degree n-1**."
       ],
       [
        "Els grafs nuls són **regulars de grau 0**.",
        "Los grafos nulos son **regulares de grado 0**.",
        "Null graphs are **regular of degree 0**."
       ],
       [
        "El **graf de Petersen** és un graf regular de grau 3 (cúbic).",
        "El **grafo de Petersen** es un grafo regular de grado 3 (cúbico).",
        "The **Petersen graph** is a regular graph of degree 3 (cubic)."
       ],
       [
        "A `K_{m,n}`, `m=|V₁|` i `n=|V₂|`.",
        "En `K_{m,n}`, `m=|V₁|` y `n=|V₂|`.",
        "In `K_{m,n}`, `m=|V₁|` and `n=|V₂|`."
       ]
      ],
      "t": "list"
     }
    ],
    "t": "tip",
    "title": [
     "Relacions entre famílies",
     "Relaciones entre familias",
     "Relations between families"
    ],
    "mode": "explained"
   },
   {
    "t": "hr"
   },
   {
    "t": "check",
    "ex": {
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
    }
   }
  ],
  "3-operacions-amb-grafs": [
   {
    "t": "p",
    "x": [
     "Siguin `G₁=(V₁,E₁)` i `G₂=(V₂,E₂)` dos grafs **sense cap vèrtex en comú** (`V₁ ∩ V₂ = ∅`):",
     "Sean `G₁=(V₁,E₁)` y `G₂=(V₂,E₂)` dos grafos **sin ningún vértice en común** (`V₁ ∩ V₂ = ∅`):",
     "Let `G₁=(V₁,E₁)` and `G₂=(V₂,E₂)` be two graphs **with no vertex in common** (`V₁ ∩ V₂ = ∅`):"
    ]
   },
   {
    "head": [
     [
      "Operació",
      "Operación",
      "Operation"
     ],
     [
      "Notació",
      "Notación",
      "Notation"
     ],
     [
      "Resultat",
      "Resultado",
      "Result"
     ]
    ],
    "rows": [
     [
      [
       "**Unió**",
       "**Unión**",
       "**Union**"
      ],
      "`G₁ ∪ G₂`",
      [
       "`V = V₁ ∪ V₂` i `E = E₁ ∪ E₂`. Simplement es posen els dos grafs junts",
       "`V = V₁ ∪ V₂` y `E = E₁ ∪ E₂`. Simplemente se ponen los dos grafos juntos",
       "`V = V₁ ∪ V₂` and `E = E₁ ∪ E₂`. The two graphs are simply put together"
      ]
     ],
     [
      "**Suma**",
      "`G₁ + G₂`",
      [
       "La unió **més** tots els costats que uneixen cada vèrtex de G₁ amb tots els de G₂",
       "La unión **más** todos los lados que unen cada vértice de G₁ con todos los de G₂",
       "The union **plus** all the edges joining each vertex of G₁ to all those of G₂"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "**Complementari.** Si `G=(V,E)` és un graf **simple**, el complementari `Ḡ` és un nou graf simple format pels mateixos vèrtexs que G i en el qual dos vèrtexs són adjacents **si no ho són en G**.",
     "**Complementario.** Si `G=(V,E)` es un grafo **simple**, el complementario `Ḡ` es un nuevo grafo simple formado por los mismos vértices que G y en el cual dos vértices son adyacentes **si no lo son en G**.",
     "**Complement.** If `G=(V,E)` is a **simple** graph, its complement `Ḡ` is a new simple graph formed by the same vertices as G in which two vertices are adjacent **if they are not in G**."
    ]
   },
   {
    "t": "hr"
   }
  ],
  "4-representacio-de-grafs": [
   {
    "id": "4-1-matriu-d-adjacencia",
    "t": "h",
    "x": [
     "Matriu d'adjacència",
     "Matriz de adyacencia",
     "Adjacency matrix"
    ]
   },
   {
    "t": "p",
    "x": [
     "Si `V = {v₁, v₂, …, vₙ}`, la matriu d'adjacència és una matriu quadrada d'ordre n on:",
     "Si `V = {v₁, v₂, …, vₙ}`, la matriz de adyacencia es una matriz cuadrada de orden n donde:",
     "If `V = {v₁, v₂, …, vₙ}`, the adjacency matrix is a square matrix of order n where:"
    ]
   },
   {
    "items": [
     [
      "`a_ij = 1` si els vèrtexs vᵢ i vⱼ són adjacents.",
      "`a_ij = 1` si los vértices vᵢ y vⱼ son adyacentes.",
      "`a_ij = 1` if the vertices vᵢ and vⱼ are adjacent."
     ],
     [
      "`a_ij = 0` en cas contrari.",
      "`a_ij = 0` en caso contrario.",
      "`a_ij = 0` otherwise."
     ]
    ],
    "t": "list"
   },
   {
    "t": "p",
    "x": [
     "Exemple per al graf amb `V={A,B,C,D,E}`:",
     "Ejemplo para el grafo con `V={A,B,C,D,E}`:",
     "Example for the graph with `V={A,B,C,D,E}`:"
    ]
   },
   {
    "t": "code",
    "lang": "text",
    "src": "<code>        A  B  C  D  E\n   A ⎡  0  1  1  0  1 ⎤\n   B ⎢  1  0  1  0  1 ⎥\nAD=C ⎢  1  1  0  0  1 ⎥\n   D ⎢  0  0  0  1  1 ⎥\n   E ⎣  1  1  1  1  0 ⎦\n</code>",
    "mode": "explained"
   },
   {
    "head": [
     [
      "Observació",
      "Observación",
      "Remark"
     ]
    ],
    "rows": [
     [
      [
       "Permet representar els **llaços**, però **no els costats paral·lels**",
       "Permite representar los **lazos**, pero **no los lados paralelos**",
       "It can represent **loops**, but **not parallel edges**"
      ]
     ],
     [
      [
       "En un graf **no dirigit** és **simètrica** (excepte la diagonal, on hi ha els llaços) ⟹ duplica informació",
       "En un grafo **no dirigido** es **simétrica** (excepto la diagonal, donde están los lazos) ⟹ duplica información",
       "In an **undirected** graph it is **symmetric** (except for the diagonal, where the loops are) ⟹ it duplicates information"
      ]
     ],
     [
      [
       "Si G és un graf **simple no dirigit**, la **valència** d'un vèrtex s'obté sumant els elements de la seva fila (o columna)",
       "Si G es un grafo **simple no dirigido**, la **valencia** de un vértice se obtiene sumando los elementos de su fila (o columna)",
       "If G is a **simple undirected** graph, the **degree** of a vertex is obtained by adding the entries of its row (or column)"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "id": "4-2-successions-de-costats-i-potencies-de-la-matriu",
    "t": "h",
    "x": [
     "Successions de costats i potències de la matriu",
     "Sucesiones de lados y potencias de la matriz",
     "Edge sequences and powers of the matrix"
    ]
   },
   {
    "t": "p",
    "x": [
     "Donat `G=(V,E)`, una **successió de costats de longitud n** d'un vèrtex inicial x a un vèrtex final y és un subconjunt S de E:",
     "Dado `G=(V,E)`, una **sucesión de lados de longitud n** de un vértice inicial x a un vértice final y es un subconjunto S de E:",
     "Given `G=(V,E)`, an **edge sequence of length n** from an initial vertex x to a final vertex y is a subset S of E:"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>S = {(v₁,v₂), (v₂,v₃), …, (v_{n-1},vₙ)}     on v₁=x i vₙ=y\n</code>",
     "<code>S = {(v₁,v₂), (v₂,v₃), …, (v_{n-1},vₙ)}     donde v₁=x y vₙ=y\n</code>",
     "<code>S = {(v₁,v₂), (v₂,v₃), …, (v_{n-1},vₙ)}     where v₁=x and vₙ=y\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "La definició **no exclou** que es repeteixin vèrtexs o costats.",
       "La definición **no excluye** que se repitan vértices o lados.",
       "The definition **does not exclude** repeated vertices or edges."
      ]
     }
    ],
    "t": "note",
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si x i y són dos vèrtexs d'un **graf simple** G, el nombre de successions de costats de longitud **n** entre ells coincideix amb l'element `a_ij` de la matriu **Aⁿ**, on A és la matriu d'adjacència, x està a la fila i i y a la columna j.",
       "Si x e y son dos vértices de un **grafo simple** G, el número de sucesiones de lados de longitud **n** entre ellos coincide con el elemento `a_ij` de la matriz **Aⁿ**, donde A es la matriz de adyacencia, x está en la fila i e y en la columna j.",
       "If x and y are two vertices of a **simple graph** G, the number of edge sequences of length **n** between them equals the entry `a_ij` of the matrix **Aⁿ**, where A is the adjacency matrix, x is in row i and y in column j."
      ]
     }
    ],
    "t": "prop",
    "title": [
     "Resultat clau",
     "Resultado clave",
     "Key result"
    ]
   },
   {
    "t": "p",
    "x": [
     "**Cas n=2.** L'element (C,E) d'`A²` val 2, i correspon a les dues successions `{(C,A),(A,E)}` i `{(C,B),(B,E)}`:",
     "**Caso n=2.** El elemento (C,E) de `A²` vale 2, y corresponde a las dos sucesiones `{(C,A),(A,E)}` y `{(C,B),(B,E)}`:",
     "**Case n=2.** The entry (C,E) of `A²` is 2, and corresponds to the two sequences `{(C,A),(A,E)}` and `{(C,B),(B,E)}`:"
    ]
   },
   {
    "t": "code",
    "lang": "text",
    "src": "<code>[1  1  0  0  1] × [1 1 1 1 0]ᵀ = 1·1 + 1·1 + 0·1 + 0·1 + 1·0 = 2\n</code>",
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Els elements de la **diagonal principal d'A²** coincideixen amb les **valències dels vèrtexs**: són el nombre de camins de longitud 2 que van d'un vèrtex x a ell mateix.",
       "Los elementos de la **diagonal principal de A²** coinciden con las **valencias de los vértices**: son el número de caminos de longitud 2 que van de un vértice x a sí mismo.",
       "The entries of the **main diagonal of A²** coincide with the **degrees of the vertices**: they are the number of paths of length 2 going from a vertex x to itself."
      ]
     }
    ],
    "t": "tip",
    "mode": "explained"
   },
   {
    "id": "4-3-matriu-d-incidencia",
    "t": "h",
    "x": [
     "Matriu d'incidència",
     "Matriz de incidencia",
     "Incidence matrix"
    ]
   },
   {
    "t": "p",
    "x": [
     "Cada **fila** és un vèrtex i cada **columna** un costat. L'element `b_ij`:",
     "Cada **fila** es un vértice y cada **columna** un lado. El elemento `b_ij`:",
     "Each **row** is a vertex and each **column** an edge. The entry `b_ij`:"
    ]
   },
   {
    "items": [
     [
      "`b_ij = 1` si el costat `e_j` és incident en el vèrtex `v_i`.",
      "`b_ij = 1` si el lado `e_j` es incidente en el vértice `v_i`.",
      "`b_ij = 1` if the edge `e_j` is incident to the vertex `v_i`."
     ],
     [
      "`b_ij = 0` en cas contrari.",
      "`b_ij = 0` en caso contrario.",
      "`b_ij = 0` otherwise."
     ]
    ],
    "t": "list"
   },
   {
    "head": [
     [
      "Observació",
      "Observación",
      "Remark"
     ]
    ],
    "rows": [
     [
      [
       "Permet ressaltar els **costats paral·lels** i els **llaços**",
       "Permite resaltar los **lados paralelos** y los **lazos**",
       "It shows **parallel edges** and **loops** clearly"
      ]
     ],
     [
      [
       "Té exactament **dos 1 a cada columna** (els dos vèrtexs units per l'aresta), excepte les columnes dels **llaços**, que tenen un únic 1",
       "Tiene exactamente **dos 1 en cada columna** (los dos vértices unidos por la arista), excepto las columnas de los **lazos**, que tienen un único 1",
       "It has exactly **two 1s in each column** (the two vertices joined by the edge), except the columns of **loops**, which have a single 1"
      ]
     ],
     [
      [
       "La suma dels valors d'una fila, en un **graf sense llaços**, dona la **valència** d'aquell vèrtex",
       "La suma de los valores de una fila, en un **grafo sin lazos**, da la **valencia** de ese vértice",
       "The sum of the values of a row, in a **graph without loops**, gives the **degree** of that vertex"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "t": "hr"
   },
   {
    "t": "check",
    "ex": {
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
    }
   }
  ],
  "5-camins-i-circuits": [
   {
    "t": "p",
    "x": [
     "Siguin v i w dos vèrtexs d'un graf G:",
     "Sean v y w dos vértices de un grafo G:",
     "Let v and w be two vertices of a graph G:"
    ]
   },
   {
    "head": [
     [
      "Concepte",
      "Concepto",
      "Concept"
     ],
     [
      "Definició",
      "Definición",
      "Definition"
     ]
    ],
    "rows": [
     [
      [
       "**Camí de longitud n**",
       "**Camino de longitud n**",
       "**Path of length n**"
      ],
      [
       "Successió de costats que condueixen del vèrtex v al w",
       "Sucesión de lados que conducen del vértice v al w",
       "Sequence of edges leading from vertex v to w"
      ]
     ],
     [
      [
       "**Camí simple**",
       "**Camino simple**",
       "**Simple path**"
      ],
      [
       "Camí en què **no es repeteix cap costat**",
       "Camino en el que **no se repite ningún lado**",
       "Path in which **no edge is repeated**"
      ]
     ],
     [
      [
       "**Camí elemental**",
       "**Camino elemental**",
       "**Elementary path**"
      ],
      [
       "Camí de longitud n entre v i w on `v₀, v₁, …, vₙ` són **tots vèrtexs diferents**",
       "Camino de longitud n entre v y w donde `v₀, v₁, …, vₙ` son **todos vértices diferentes**",
       "Path of length n between v and w where `v₀, v₁, …, vₙ` are **all different vertices**"
      ]
     ],
     [
      [
       "**Circuit o cicle**",
       "**Circuito o ciclo**",
       "**Circuit or cycle**"
      ],
      [
       "Camí **simple** de v a v",
       "Camino **simple** de v a v",
       "**Simple** path from v to v"
      ]
     ],
     [
      [
       "**Circuit elemental**",
       "**Circuito elemental**",
       "**Elementary circuit**"
      ],
      [
       "Camí de longitud n que va de v a v on `v₀, v₁, …, v_{n-1}` són tots vèrtexs diferents",
       "Camino de longitud n que va de v a v donde `v₀, v₁, …, v_{n-1}` son todos vértices diferentes",
       "Path of length n from v to v where `v₀, v₁, …, v_{n-1}` are all different vertices"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "Notem `(v₀, v₁, v₂, …, vₙ)` per representar la successió de costats `(v₀,v₁), (v₁,v₂), …, (v_{n-1},vₙ)`.",
     "Notamos `(v₀, v₁, v₂, …, vₙ)` para representar la sucesión de lados `(v₀,v₁), (v₁,v₂), …, (v_{n-1},vₙ)`.",
     "We write `(v₀, v₁, v₂, …, vₙ)` to represent the edge sequence `(v₀,v₁), (v₁,v₂), …, (v_{n-1},vₙ)`."
    ]
   },
   {
    "t": "p",
    "x": [
     "**Exemple de classificació:**",
     "**Ejemplo de clasificación:**",
     "**Classification example:**"
    ]
   },
   {
    "head": [
     [
      "Successió de costats",
      "Sucesión de lados",
      "Edge sequence"
     ],
     [
      "Camí simple",
      "Camino simple",
      "Simple path"
     ],
     [
      "Camí elemental",
      "Camino elemental",
      "Elementary path"
     ],
     [
      "Circuit",
      "Circuito",
      "Circuit"
     ],
     [
      "Circuit elemental",
      "Circuito elemental",
      "Elementary circuit"
     ]
    ],
    "rows": [
     [
      "A B C D E C B A",
      "No",
      "No",
      "No",
      "No"
     ],
     [
      "A B C E F G E",
      "Sí",
      "No",
      "No",
      "No"
     ],
     [
      "A B C E F G E A",
      "Sí",
      "No",
      "Sí",
      "No"
     ],
     [
      "A B C D E A",
      "Sí",
      "No",
      "Sí",
      "Sí"
     ]
    ],
    "t": "table"
   },
   {
    "t": "hr"
   }
  ],
  "6-connexio": [
   {
    "t": "p",
    "x": [
     "Un graf **G és connex** si donada una parella qualsevol dels seus vèrtexs v i w (v≠w), existeix un camí de v a w. En cas contrari és **inconnex**. Equivalentment: està constituït per **una sola peça**.",
     "Un grafo **G es conexo** si dada una pareja cualquiera de sus vértices v y w (v≠w), existe un camino de v a w. En caso contrario es **inconexo**. Equivalentemente: está constituido por **una sola pieza**.",
     "A graph **G is connected** if for any pair of its vertices v and w (v≠w) there is a path from v to w. Otherwise it is **disconnected**. Equivalently: it is made of **a single piece**."
    ]
   },
   {
    "t": "p",
    "x": [
     "Qualsevol graf inconnex es pot expressar com la unió d'un nombre finit de grafs connexos; cadascun s'anomena **component connexa** del graf.",
     "Cualquier grafo inconexo se puede expresar como la unión de un número finito de grafos conexos; cada uno se denomina **componente conexa** del grafo.",
     "Any disconnected graph can be expressed as the union of a finite number of connected graphs; each one is called a **connected component** of the graph."
    ]
   },
   {
    "id": "6-1-rang-de-valors-per-al-nombre-de-costats",
    "t": "h",
    "x": [
     "Rang de valors per al nombre de costats",
     "Rango de valores para el número de lados",
     "Range of values for the number of edges"
    ]
   },
   {
    "t": "p",
    "x": [
     "Si G és un graf **simple i connex** de n vèrtexs:",
     "Si G es un grafo **simple y conexo** de n vértices:",
     "If G is a **simple connected** graph with n vertices:"
    ]
   },
   {
    "head": [
     "",
     [
      "Nombre de costats",
      "Número de lados",
      "Number of edges"
     ]
    ],
    "rows": [
     [
      [
       "**Mínim**",
       "**Mínimo**",
       "**Minimum**"
      ],
      [
       "`n-1` (cas particular: els **arbres**)",
       "`n-1` (caso particular: los **árboles**)",
       "`n-1` (special case: **trees**)"
      ]
     ],
     [
      [
       "**Màxim**",
       "**Máximo**",
       "**Maximum**"
      ],
      [
       "`n(n-1)/2` (quan el graf és **complet**)",
       "`n(n-1)/2` (cuando el grafo es **completo**)",
       "`n(n-1)/2` (when the graph is **complete**)"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si G és un graf simple de n vèrtexs amb k components connexes, el nombre de costats m satisfà:",
       "Si G es un grafo simple de n vértices con k componentes conexas, el número de lados m satisface:",
       "If G is a simple graph with n vertices and k connected components, the number of edges m satisfies:"
      ]
     },
     {
      "t": "code",
      "lang": "text",
      "src": "<code>n - k  ≤  m  ≤  (n-k+1)(n-k) / 2\n</code>"
     },
     {
      "t": "p",
      "x": [
       "**Corol·lari:** tot graf simple de n vèrtexs que tingui més de `(n-1)(n-2)/2` costats és **connex**.",
       "**Corolario:** todo grafo simple de n vértices que tenga más de `(n-1)(n-2)/2` lados es **conexo**.",
       "**Corollary:** every simple graph with n vertices that has more than `(n-1)(n-2)/2` edges is **connected**."
      ]
     }
    ],
    "t": "prop",
    "title": [
     "Teorema (generalització per a k components)",
     "Teorema (generalización para k componentes)",
     "Theorem (generalisation to k components)"
    ]
   },
   {
    "id": "6-2-conjunts-desconnectors-i-de-tall",
    "t": "h",
    "x": [
     "Conjunts desconnectors i de tall",
     "Conjuntos desconectores y de corte",
     "Disconnecting sets and cut sets"
    ]
   },
   {
    "head": [
     [
      "Concepte",
      "Concepto",
      "Concept"
     ],
     [
      "Definició",
      "Definición",
      "Definition"
     ]
    ],
    "rows": [
     [
      [
       "**Conjunt desconnector**",
       "**Conjunto desconector**",
       "**Disconnecting set**"
      ],
      [
       "Conjunt de costats d'un graf G connex que, si són eliminats, deixen el graf inconnex",
       "Conjunto de lados de un grafo G conexo que, si son eliminados, dejan el grafo inconexo",
       "Set of edges of a connected graph G that, if removed, leave the graph disconnected"
      ]
     ],
     [
      [
       "**Conjunt de tall**",
       "**Conjunto de corte**",
       "**Cut set**"
      ],
      [
       "Conjunt desconnector **minimal**: no existeix cap altre conjunt desconnector amb menys elements",
       "Conjunto desconector **minimal**: no existe ningún otro conjunto desconector con menos elementos",
       "**Minimal** disconnecting set: there is no other disconnecting set with fewer elements"
      ]
     ],
     [
      [
       "**Istme o pont**",
       "**Istmo o puente**",
       "**Isthmus or bridge**"
      ],
      [
       "Conjunt de tall format per **un únic costat**",
       "Conjunto de corte formado por **un único lado**",
       "Cut set formed by **a single edge**"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "items": [
       [
        "Si eliminem un **conjunt de tall**, el graf queda dividit en **dues** components connexes.",
        "Si eliminamos un **conjunto de corte**, el grafo queda dividido en **dos** componentes conexas.",
        "If we remove a **cut set**, the graph is split into **two** connected components."
       ],
       [
        "Si eliminem un **conjunt desconnector**, el graf pot quedar dividit en **dues o més** components connexes.",
        "Si eliminamos un **conjunto desconector**, el grafo puede quedar dividido en **dos o más** componentes conexas.",
        "If we remove a **disconnecting set**, the graph may be split into **two or more** connected components."
       ]
      ],
      "t": "list"
     },
     {
      "t": "p",
      "x": [
       "Exemple: `{e₂, e₃, e₄}` és desconnector però no de tall, perquè existeix `{e₂, e₄}`, que sí que ho és.",
       "Ejemplo: `{e₂, e₃, e₄}` es desconector pero no de corte, porque existe `{e₂, e₄}`, que sí lo es.",
       "Example: `{e₂, e₃, e₄}` is disconnecting but not a cut set, because there is `{e₂, e₄}`, which is."
      ]
     }
    ],
    "t": "tip",
    "title": [
     "Diferència pràctica",
     "Diferencia práctica",
     "Practical difference"
    ],
    "mode": "explained"
   },
   {
    "t": "hr"
   }
  ],
  "7-connectivitat-en-grafs-dirigits": [
   {
    "id": "7-1-successors-i-antecessors",
    "t": "h",
    "x": [
     "Successors i antecessors",
     "Sucesores y antecesores",
     "Successors and predecessors"
    ]
   },
   {
    "t": "p",
    "x": [
     "Donat `G=(V,E)` dirigit:",
     "Dado `G=(V,E)` dirigido:",
     "Given a directed `G=(V,E)`:"
    ]
   },
   {
    "head": [
     [
      "Relació",
      "Relación",
      "Relation"
     ],
     [
      "Definició",
      "Definición",
      "Definition"
     ],
     [
      "Notació",
      "Notación",
      "Notation"
     ]
    ],
    "rows": [
     [
      [
       "**Successor**",
       "**Sucesor**",
       "**Successor**"
      ],
      [
       "`vⱼ` és successor de `vᵢ` si existeix un arc que uneix `vᵢ` (extrem inicial) amb `vⱼ` (extrem final)",
       "`vⱼ` es sucesor de `vᵢ` si existe un arco que une `vᵢ` (extremo inicial) con `vⱼ` (extremo final)",
       "`vⱼ` is a successor of `vᵢ` if there is an arc joining `vᵢ` (initial end) to `vⱼ` (final end)"
      ],
      "`Γ(vᵢ)`"
     ],
     [
      [
       "**Antecessor**",
       "**Antecesor**",
       "**Predecessor**"
      ],
      [
       "`vⱼ` és antecessor de `vᵢ` si existeix un arc que uneix `vⱼ` (inicial) amb `vᵢ` (final)",
       "`vⱼ` es antecesor de `vᵢ` si existe un arco que une `vⱼ` (inicial) con `vᵢ` (final)",
       "`vⱼ` is a predecessor of `vᵢ` if there is an arc joining `vⱼ` (initial) to `vᵢ` (final)"
      ],
      "`Γ⁻¹(vᵢ)`"
     ]
    ],
    "t": "table"
   },
   {
    "id": "7-2-diccionari-d-un-graf",
    "t": "h",
    "x": [
     "Diccionari d'un graf",
     "Diccionario de un grafo",
     "Dictionary of a graph"
    ]
   },
   {
    "t": "p",
    "x": [
     "Les taules formades pels successors i antecessors de cada vèrtex:",
     "Las tablas formadas por los sucesores y antecesores de cada vértice:",
     "The tables formed by the successors and predecessors of each vertex:"
    ]
   },
   {
    "t": "code",
    "lang": "text",
    "src": "<code>vᵢ │ Γ(vᵢ)            vᵢ │ Γ⁻¹(vᵢ)\n───┼──────────        ───┼──────────────\nv₁ │ v₃, v₄           v₁ │ v₂\nv₂ │ v₁, v₃           v₂ │ v₄\nv₃ │ —                v₃ │ v₁, v₂, v₄\nv₄ │ v₂, v₃           v₄ │ v₁\n</code>",
    "mode": "explained"
   },
   {
    "id": "7-3-components-fortament-connexes",
    "t": "h",
    "x": [
     "Components fortament connexes",
     "Componentes fuertemente conexas",
     "Strongly connected components"
    ]
   },
   {
    "t": "p",
    "x": [
     "Donat un graf dirigit `G=(V,E)`, es defineix la relació binària `C_f` en V:",
     "Dado un grafo dirigido `G=(V,E)`, se define la relación binaria `C_f` en V:",
     "Given a directed graph `G=(V,E)`, we define the binary relation `C_f` on V:"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "`(∀ vᵢ, vⱼ ∈ V)`, `vᵢ C_f vⱼ ⟺` `vᵢ = vⱼ` o bé existeix una seqüència d'arcs de `vᵢ` a `vⱼ` **i** una seqüència d'arcs de `vⱼ` a `vᵢ`.",
       "`(∀ vᵢ, vⱼ ∈ V)`, `vᵢ C_f vⱼ ⟺` `vᵢ = vⱼ` o bien existe una secuencia de arcos de `vᵢ` a `vⱼ` **y** una secuencia de arcos de `vⱼ` a `vᵢ`.",
       "`(∀ vᵢ, vⱼ ∈ V)`, `vᵢ C_f vⱼ ⟺` `vᵢ = vⱼ` or there is a sequence of arcs from `vᵢ` to `vⱼ` **and** a sequence of arcs from `vⱼ` to `vᵢ`."
      ]
     }
    ],
    "t": "summary"
   },
   {
    "t": "p",
    "x": [
     "`C_f` és una **relació d'equivalència**, i les seves classes d'equivalència formen les **components fortament connexes** del graf. Es representa `C_f(vᵢ)` la component que conté el vèrtex `vᵢ`.",
     "`C_f` es una **relación de equivalencia**, y sus clases de equivalencia forman las **componentes fuertemente conexas** del grafo. Se representa `C_f(vᵢ)` la componente que contiene el vértice `vᵢ`.",
     "`C_f` is an **equivalence relation**, and its equivalence classes form the **strongly connected components** of the graph. `C_f(vᵢ)` denotes the component containing the vertex `vᵢ`."
    ]
   },
   {
    "t": "p",
    "x": [
     "Un graf dirigit és **fortament connex** si està format per una única component.",
     "Un grafo dirigido es **fuertemente conexo** si está formado por una única componente.",
     "A directed graph is **strongly connected** if it is made of a single component."
    ]
   },
   {
    "t": "p",
    "x": [
     "**Càlcul de `C_f(vᵢ)`:**",
     "**Cálculo de `C_f(vᵢ)`:**",
     "**Computing `C_f(vᵢ)`:**"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>1- Marcar +  i  −  el vèrtex vᵢ\n2- Marcar +  tot successor d'un vèrtex marcat amb +\n3- Marcar −  tot antecessor d'un vèrtex marcat amb −\n</code>",
     "<code>1- Marcar +  y  −  el vértice vᵢ\n2- Marcar +  todo sucesor de un vértice marcado con +\n3- Marcar −  todo antecesor de un vértice marcado con −\n</code>",
     "<code>1- Mark vertex vᵢ with  +  and  −\n2- Mark with +  every successor of a vertex marked +\n3- Mark with −  every predecessor of a vertex marked −\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "Quan no es pot marcar cap altre vèrtex, els vèrtexs marcats amb **les dues marques (+ i −)** defineixen la component `C_f(vᵢ)`.",
     "Cuando no se puede marcar ningún otro vértice, los vértices marcados con **las dos marcas (+ y −)** definen la componente `C_f(vᵢ)`.",
     "When no other vertex can be marked, the vertices marked with **both marks (+ and −)** define the component `C_f(vᵢ)`."
    ]
   },
   {
    "t": "p",
    "x": [
     "Per calcular les altres components es repeteixen els passos 1, 2 i 3 sobre el subgraf resultant d'eliminar els vèrtexs de les components ja trobades.",
     "Para calcular las otras componentes se repiten los pasos 1, 2 y 3 sobre el subgrafo resultante de eliminar los vértices de las componentes ya encontradas.",
     "To compute the other components, steps 1, 2 and 3 are repeated on the subgraph obtained by removing the vertices of the components already found."
    ]
   },
   {
    "id": "7-4-graf-condensat",
    "t": "h",
    "x": [
     "Graf condensat",
     "Grafo condensado",
     "Condensed graph"
    ]
   },
   {
    "t": "p",
    "x": [
     "El **graf condensat** de G és `G_c=(V_c, E_c)` on:",
     "El **grafo condensado** de G es `G_c=(V_c, E_c)` donde:",
     "The **condensed graph** of G is `G_c=(V_c, E_c)` where:"
    ]
   },
   {
    "items": [
     [
      "`V_c` és el conjunt de components connexes de G.",
      "`V_c` es el conjunto de componentes conexas de G.",
      "`V_c` is the set of connected components of G."
     ],
     [
      "Existeix un arc a `E_c` d'extrem inicial `C_f(vᵢ)` i extrem final `C_f(vⱼ)` **si i només si** existeix un arc en G que té com a extrem inicial algun vèrtex de `C_f(vᵢ)` i com a extrem final algun vèrtex de `C_f(vⱼ)`.",
      "Existe un arco en `E_c` de extremo inicial `C_f(vᵢ)` y extremo final `C_f(vⱼ)` **si y solo si** existe un arco en G que tiene como extremo inicial algún vértice de `C_f(vᵢ)` y como extremo final algún vértice de `C_f(vⱼ)`.",
      "There is an arc in `E_c` with initial end `C_f(vᵢ)` and final end `C_f(vⱼ)` **if and only if** there is an arc in G whose initial end is some vertex of `C_f(vᵢ)` and whose final end is some vertex of `C_f(vⱼ)`."
     ]
    ],
    "t": "list"
   },
   {
    "t": "hr"
   }
  ],
  "8-circuits-d-euler": [
   {
    "t": "p",
    "x": [
     "Un **circuit d'Euler** és un circuit que recorre **una única vegada tots els costats** del graf i passa per **cadascun dels vèrtexs almenys una vegada**.",
     "Un **circuito de Euler** es un circuito que recorre **una única vez todos los lados** del grafo y pasa por **cada uno de los vértices al menos una vez**.",
     "An **Euler circuit** is a circuit that traverses **all the edges** of the graph **exactly once** and passes through **each vertex at least once**."
    ]
   },
   {
    "blocks": [
     {
      "items": [
       [
        "Si en un graf existeix un circuit d'Euler, aleshores **tots els vèrtexs han de tenir valència parella**.",
        "Si en un grafo existe un circuito de Euler, entonces **todos los vértices han de tener valencia par**.",
        "If a graph has an Euler circuit, then **all its vertices must have even degree**."
       ],
       [
        "A més, si un graf té un circuit d'Euler, aleshores és **connex**.",
        "Además, si un grafo tiene un circuito de Euler, entonces es **conexo**.",
        "Moreover, if a graph has an Euler circuit, then it is **connected**."
       ],
       [
        "I recíprocament: **si un graf és connex i tots els seus vèrtexs tenen valència parella, aleshores té un circuit d'Euler.**",
        "Y recíprocamente: **si un grafo es conexo y todos sus vértices tienen valencia par, entonces tiene un circuito de Euler.**",
        "And conversely: **if a graph is connected and all its vertices have even degree, then it has an Euler circuit.**"
       ]
      ],
      "t": "list"
     }
    ],
    "t": "prop",
    "title": [
     "Caracterització",
     "Caracterización",
     "Characterisation"
    ]
   },
   {
    "id": "8-1-metode-i-circuits-parcials",
    "t": "h",
    "x": [
     "Mètode I (circuits parcials)",
     "Método I (circuitos parciales)",
     "Method I (partial circuits)"
    ]
   },
   {
    "t": "p",
    "x": [
     "Donat un graf **connex i amb tots els vèrtexs de valència parella**:",
     "Dado un grafo **conexo y con todos los vértices de valencia par**:",
     "Given a graph that is **connected and with all vertices of even degree**:"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>1- Escollim un vèrtex qualsevol com a vèrtex inicial del circuit.\n\n2- Prenem un dels costats que ens condueix a un nou vèrtex. A partir\n   d'aquest seleccionem un altre costat (compte de no repetir cap).\n   Es repeteix el procés fins arribar al vèrtex inicial.\n\n3.1- Si ja s'han recorregut tots els costats del graf, ja tenim el circuit.\n\n3.2- En cas contrari, eliminem tots els costats que hem recorregut i també\n     els vèrtexs que han quedat aïllats.\n     · El subgraf que ens ha quedat té els vèrtexs amb valència parella.\n     · Com que el graf era connex, el circuit que acabem d'eliminar té\n       almenys un vèrtex en comú amb el subgraf que ens falta per tractar.\n\n4- Escollim un dels vèrtexs que tenen en comú el circuit trobat i el subgraf,\n   i tornem a repetir els passos (2) i (3.1 i 3.2) fins a eliminar tots\n   els costats del graf.\n\n5- El circuit d'Euler s'obté unint els diferents circuits que hem anat\n   eliminant durant el procés, conservant el mateix ordre.\n</code>",
     "<code>1- Escogemos un vértice cualquiera como vértice inicial del circuito.\n\n2- Tomamos uno de los lados que nos conduce a un nuevo vértice. A partir\n   de este seleccionamos otro lado (cuidado de no repetir ninguno).\n   Se repite el proceso hasta llegar al vértice inicial.\n\n3.1- Si ya se han recorrido todos los lados del grafo, ya tenemos el circuito.\n\n3.2- En caso contrario, eliminamos todos los lados que hemos recorrido y\n     también los vértices que han quedado aislados.\n     · El subgrafo que nos ha quedado tiene los vértices con valencia par.\n     · Como el grafo era conexo, el circuito que acabamos de eliminar tiene\n       al menos un vértice en común con el subgrafo que falta por tratar.\n\n4- Escogemos uno de los vértices que tienen en común el circuito encontrado\n   y el subgrafo, y volvemos a repetir los pasos (2) y (3.1 y 3.2) hasta\n   eliminar todos los lados del grafo.\n\n5- El circuito de Euler se obtiene uniendo los diferentes circuitos que\n   hemos ido eliminando durante el proceso, conservando el mismo orden.\n</code>",
     "<code>1- Choose any vertex as the starting vertex of the circuit.\n\n2- Take one of the edges leading to a new vertex. From there choose\n   another edge (careful not to repeat any).\n   Repeat the process until you get back to the starting vertex.\n\n3.1- If all the edges of the graph have been traversed, we have the circuit.\n\n3.2- Otherwise, remove all the edges we have traversed and also the\n     vertices left isolated.\n     · The remaining subgraph has all its vertices of even degree.\n     · Since the graph was connected, the circuit just removed has\n       at least one vertex in common with the subgraph still to be done.\n\n4- Choose one of the vertices shared by the circuit found and the\n   subgraph, and repeat steps (2) and (3.1 and 3.2) until all the\n   edges of the graph have been removed.\n\n5- The Euler circuit is obtained by joining the different circuits\n   removed during the process, keeping the same order.\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "**Exemple.** Sobre un graf connex de vèrtexs A…H amb totes les valències parelles:",
     "**Ejemplo.** Sobre un grafo conexo de vértices A…H con todas las valencias pares:",
     "**Example.** On a connected graph with vertices A…H and all degrees even:"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>Pas 1-2:  A B C E G D A\nPas 4:    B G B          (des del vèrtex B)\nPas 4:    G F D B E H G  (des del vèrtex G)\n\nPas 5 — reconstrucció:\n  A B C E G D A\n    B G B\n          G F D B E H G\n\nCircuit d'Euler:  A B G B C E G F D B E H G D A\n</code>",
     "<code>Paso 1-2:  A B C E G D A\nPaso 4:    B G B          (desde el vértice B)\nPaso 4:    G F D B E H G  (desde el vértice G)\n\nPaso 5 — reconstrucción:\n  A B C E G D A\n    B G B\n          G F D B E H G\n\nCircuito de Euler:  A B G B C E G F D B E H G D A\n</code>",
     "<code>Step 1-2:  A B C E G D A\nStep 4:    B G B          (from vertex B)\nStep 4:    G F D B E H G  (from vertex G)\n\nStep 5 — rebuilding:\n  A B C E G D A\n    B G B\n          G F D B E H G\n\nEuler circuit:  A B G B C E G F D B E H G D A\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "id": "8-2-metode-ii-metode-de-fleury",
    "t": "h",
    "x": [
     "Mètode II (mètode de Fleury)",
     "Método II (método de Fleury)",
     "Method II (Fleury's method)"
    ]
   },
   {
    "t": "p",
    "x": [
     "Escollim un vèrtex qualsevol com a inicial i anem recorrent els costats de forma arbitrària, respectant **dues regles**:",
     "Escogemos un vértice cualquiera como inicial y vamos recorriendo los lados de forma arbitraria, respetando **dos reglas**:",
     "We choose any vertex as the starting one and traverse the edges arbitrarily, following **two rules**:"
    ]
   },
   {
    "items": [
     [
      "S'elimina del graf cada costat que es visita, i també els vèrtexs que puguin quedar aïllats.",
      "Se elimina del grafo cada lado que se visita, y también los vértices que puedan quedar aislados.",
      "Each visited edge is removed from the graph, as are any vertices left isolated."
     ],
     [
      "Si s'ha de decidir entre diferents costats del vèrtex actual, quan es tracti d'un **istme** s'agafarà com a **última opció**.",
      "Si se ha de decidir entre diferentes lados del vértice actual, cuando se trate de un **istmo** se tomará como **última opción**.",
      "If you must choose between different edges of the current vertex, an **isthmus** is taken as the **last option**."
     ]
    ],
    "ordered": true,
    "t": "list"
   },
   {
    "id": "8-3-graf-euleria-i-semi-euleria",
    "t": "h",
    "x": [
     "Graf eulerià i semi-eulerià",
     "Grafo euleriano y semi-euleriano",
     "Eulerian and semi-Eulerian graph"
    ]
   },
   {
    "head": [
     [
      "Concepte",
      "Concepto",
      "Concept"
     ],
     [
      "Definició",
      "Definición",
      "Definition"
     ]
    ],
    "rows": [
     [
      [
       "**Graf eulerià**",
       "**Grafo euleriano**",
       "**Eulerian graph**"
      ],
      [
       "Conté un circuit d'Euler. També: un graf connex és eulerià si i només si el seu conjunt de costats pot descompondre's en **dos circuits disjunts**",
       "Contiene un circuito de Euler. También: un grafo conexo es euleriano si y solo si su conjunto de lados puede descomponerse en **dos circuitos disjuntos**",
       "It contains an Euler circuit. Also: a connected graph is Eulerian if and only if its set of edges can be decomposed into **disjoint circuits**"
      ]
     ],
     [
      [
       "**Graf semi-eulerià**",
       "**Grafo semi-euleriano**",
       "**Semi-Eulerian graph**"
      ],
      [
       "Existeix un **camí** que recorre una única vegada tots els seus costats i passa almenys una vegada per cadascun dels vèrtexs",
       "Existe un **camino** que recorre una única vez todos sus lados y pasa al menos una vez por cada uno de los vértices",
       "There is a **path** that traverses all its edges exactly once and passes at least once through each vertex"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "En el graf **semi-eulerià** només ha d'existir un **camí**; en el **eulerià** exigim que aquest camí comenci i acabi al mateix vèrtex, és a dir, que sigui un **circuit**.",
       "En el grafo **semi-euleriano** solo ha de existir un **camino**; en el **euleriano** exigimos que ese camino empiece y acabe en el mismo vértice, es decir, que sea un **circuito**.",
       "In a **semi-Eulerian** graph only a **path** is required; in an **Eulerian** one we require that path to start and end at the same vertex, that is, to be a **circuit**."
      ]
     },
     {
      "t": "p",
      "x": [
       "Un graf eulerià és també semi-eulerià. **El contrari no és cert sempre.**",
       "Un grafo euleriano es también semi-euleriano. **Lo contrario no es cierto siempre.**",
       "An Eulerian graph is also semi-Eulerian. **The converse is not always true.**"
      ]
     }
    ],
    "t": "prop",
    "title": [
     "Diferència clau",
     "Diferencia clave",
     "Key difference"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un graf és semi-eulerià **si i només si** és connex i no existeixen **més de dos vèrtexs amb valència imparella**.",
       "Un grafo es semi-euleriano **si y solo si** es conexo y no existen **más de dos vértices con valencia impar**.",
       "A graph is semi-Eulerian **if and only if** it is connected and has **no more than two vertices of odd degree**."
      ]
     },
     {
      "t": "p",
      "x": [
       "Si existeixen dos vèrtexs amb valència imparella, el camí **ha de començar i acabar en aquests vèrtexs**.",
       "Si existen dos vértices con valencia impar, el camino **ha de empezar y acabar en esos vértices**.",
       "If there are two vertices of odd degree, the path **must start and end at those vertices**."
      ]
     }
    ],
    "t": "tip",
    "title": [
     "Caracterització del semi-eulerià",
     "Caracterización del semi-euleriano",
     "Characterisation of semi-Eulerian graphs"
    ],
    "mode": "explained"
   },
   {
    "t": "hr"
   },
   {
    "t": "check",
    "ex": {
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
    }
   }
  ],
  "9-circuits-de-hamilton": [
   {
    "t": "p",
    "x": [
     "Un **circuit de Hamilton** (o hamiltonià) en un graf G és un camí que **comença i acaba en un mateix vèrtex**, passant **una única vegada per els altres vèrtexs** del graf.",
     "Un **circuito de Hamilton** (o hamiltoniano) en un grafo G es un camino que **empieza y acaba en un mismo vértice**, pasando **una única vez por los demás vértices** del grafo.",
     "A **Hamilton** (or Hamiltonian) **circuit** in a graph G is a path that **starts and ends at the same vertex**, passing **exactly once through the other vertices** of the graph."
    ]
   },
   {
    "blocks": [
     {
      "items": [
       [
        "**Euler** → recorre tots els **costats** una vegada.",
        "**Euler** → recorre todos los **lados** una vez.",
        "**Euler** → traverses every **edge** once."
       ],
       [
        "**Hamilton** → passa per tots els **vèrtexs** una vegada.",
        "**Hamilton** → pasa por todos los **vértices** una vez.",
        "**Hamilton** → passes through every **vertex** once."
       ]
      ],
      "t": "list"
     }
    ],
    "t": "warn",
    "title": [
     "No confonguis Euler i Hamilton",
     "No confundas Euler y Hamilton",
     "Do not confuse Euler and Hamilton"
    ]
   },
   {
    "id": "9-1-condicions-suficients",
    "t": "h",
    "x": [
     "Condicions suficients",
     "Condiciones suficientes",
     "Sufficient conditions"
    ]
   },
   {
    "t": "p",
    "x": [
     "Existeixen **únicament condicions suficients** per a l'existència de circuits de Hamilton:",
     "Existen **únicamente condiciones suficientes** para la existencia de circuitos de Hamilton:",
     "There are **only sufficient conditions** for the existence of Hamilton circuits:"
    ]
   },
   {
    "head": [
     [
      "Resultat",
      "Resultado",
      "Result"
     ],
     [
      "Enunciat",
      "Enunciado",
      "Statement"
     ]
    ],
    "rows": [
     [
      "**Ore**",
      [
       "Si G és un graf simple de n (≥3) vèrtexs i `δ(u) + δ(v) ≥ n` per a **tota parella de vèrtexs no adjacents**, aleshores G és hamiltonià",
       "Si G es un grafo simple de n (≥3) vértices y `δ(u) + δ(v) ≥ n` para **toda pareja de vértices no adyacentes**, entonces G es hamiltoniano",
       "If G is a simple graph with n (≥3) vertices and `δ(u) + δ(v) ≥ n` for **every pair of non-adjacent vertices**, then G is Hamiltonian"
      ]
     ],
     [
      "**Dirac** (1952)",
      [
       "Si G és un graf simple de n (≥3) vèrtexs i `δ(v) ≥ n/2` per a **tot** vèrtex v, aleshores G és hamiltonià",
       "Si G es un grafo simple de n (≥3) vértices y `δ(v) ≥ n/2` para **todo** vértice v, entonces G es hamiltoniano",
       "If G is a simple graph with n (≥3) vertices and `δ(v) ≥ n/2` for **every** vertex v, then G is Hamiltonian"
      ]
     ],
     [
      [
       "**Per nombre de costats**",
       "**Por número de lados**",
       "**By number of edges**"
      ],
      [
       "Si G és un graf simple amb n (≥3) vèrtexs i almenys `½(n-1)(n-2) + 2` costats, aleshores G és hamiltonià",
       "Si G es un grafo simple con n (≥3) vértices y al menos `½(n-1)(n-2) + 2` lados, entonces G es hamiltoniano",
       "If G is a simple graph with n (≥3) vertices and at least `½(n-1)(n-2) + 2` edges, then G is Hamiltonian"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Aquestes tres condicions permeten **assegurar** que un graf és hamiltonià, però **no són necessàries**: existeixen grafs hamiltonians que no les compleixen. Per exemple `C₆` i `W₇ = C₆ + N₁`.",
       "Estas tres condiciones permiten **asegurar** que un grafo es hamiltoniano, pero **no son necesarias**: existen grafos hamiltonianos que no las cumplen. Por ejemplo `C₆` y `W₇ = C₆ + N₁`.",
       "These three conditions allow you to **guarantee** that a graph is Hamiltonian, but they **are not necessary**: there are Hamiltonian graphs that do not satisfy them. For example `C₆` and `W₇ = C₆ + N₁`."
      ]
     }
    ],
    "t": "warn",
    "title": [
     "Suficients però no necessàries",
     "Suficientes pero no necesarias",
     "Sufficient but not necessary"
    ]
   },
   {
    "id": "9-2-grafs-bipartits-i-circuits-de-hamilton",
    "t": "h",
    "x": [
     "Grafs bipartits i circuits de Hamilton",
     "Grafos bipartitos y circuitos de Hamilton",
     "Bipartite graphs and Hamilton circuits"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sigui `G=(V,E)` bipartit amb `V = V₁ ∪ V₂`, `V₁ ∩ V₂ = ∅`:",
     "Sea `G=(V,E)` bipartito con `V = V₁ ∪ V₂`, `V₁ ∩ V₂ = ∅`:",
     "Let `G=(V,E)` be bipartite with `V = V₁ ∪ V₂`, `V₁ ∩ V₂ = ∅`:"
    ]
   },
   {
    "items": [
     [
      "Si `|V₁| = m` i `|V₂| = n` amb **m ≠ n**, el graf G **no pot contenir cap circuit hamiltonià**.",
      "Si `|V₁| = m` y `|V₂| = n` con **m ≠ n**, el grafo G **no puede contener ningún circuito hamiltoniano**.",
      "If `|V₁| = m` and `|V₂| = n` with **m ≠ n**, the graph G **cannot contain any Hamiltonian circuit**."
     ],
     [
      "Com a conseqüència, un graf bipartit amb un **nombre imparell de vèrtexs** no pot tenir mai circuits de Hamilton.",
      "Como consecuencia, un grafo bipartito con un **número impar de vértices** no puede tener nunca circuitos de Hamilton.",
      "As a consequence, a bipartite graph with an **odd number of vertices** can never have Hamilton circuits."
     ],
     [
      "El graf bipartit complet `K_{n,n}` **sempre és hamiltonià** si `n ≥ 2`.",
      "El grafo bipartito completo `K_{n,n}` **siempre es hamiltoniano** si `n ≥ 2`.",
      "The complete bipartite graph `K_{n,n}` **is always Hamiltonian** if `n ≥ 2`."
     ]
    ],
    "t": "list"
   },
   {
    "id": "9-3-metode-exhaustiu",
    "t": "h",
    "x": [
     "Mètode exhaustiu",
     "Método exhaustivo",
     "Exhaustive method"
    ]
   },
   {
    "t": "p",
    "x": [
     "Algorisme per obtenir els circuits de Hamilton d'un graf, si existeixen. Consisteix a calcular de forma exhaustiva tots els camins del graf en què no es repeteixi cap vèrtex. Si el graf té n vèrtexs:",
     "Algoritmo para obtener los circuitos de Hamilton de un grafo, si existen. Consiste en calcular de forma exhaustiva todos los caminos del grafo en que no se repita ningún vértice. Si el grafo tiene n vértices:",
     "Algorithm to obtain the Hamilton circuits of a graph, if there are any. It consists of computing exhaustively all the paths of the graph in which no vertex is repeated. If the graph has n vertices:"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>1- Calcular els camins de longitud 1 (són els costats) i eliminar els que\n   tenen vèrtex repetit (són els llaços del graf).\n2- A partir dels camins de longitud 1 es calculen els de longitud 2 i\n   s'eliminen aquells camins que presentin algun vèrtex repetit.\n3- Repetir el procés fins a obtenir els camins de longitud n-1 sense\n   vèrtexs repetits.\n4- A partir d'aquests, construir els camins de longitud n; després\n   d'eliminar els vèrtexs repetits, prendre únicament aquells camins en\n   què el vèrtex inicial i final sigui el mateix.\n</code>",
     "<code>1- Calcular los caminos de longitud 1 (son los lados) y eliminar los que\n   tienen vértice repetido (son los lazos del grafo).\n2- A partir de los caminos de longitud 1 se calculan los de longitud 2 y\n   se eliminan aquellos caminos que presenten algún vértice repetido.\n3- Repetir el proceso hasta obtener los caminos de longitud n-1 sin\n   vértices repetidos.\n4- A partir de estos, construir los caminos de longitud n; después de\n   eliminar los vértices repetidos, tomar únicamente aquellos caminos en\n   que el vértice inicial y final sea el mismo.\n</code>",
     "<code>1- Compute the paths of length 1 (the edges) and remove those with a\n   repeated vertex (the loops of the graph).\n2- From the paths of length 1 compute those of length 2 and remove\n   the paths with some repeated vertex.\n3- Repeat the process until you get the paths of length n-1 without\n   repeated vertices.\n4- From these, build the paths of length n; after removing repeated\n   vertices, keep only the paths whose initial and final vertex are\n   the same.\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "Els camins que compleixen aquesta condició són els circuits hamiltonians. Si no n'hi ha cap, o si en algun moment ens quedem sense camins per continuar, el graf **no té circuits hamiltonians**.",
     "Los caminos que cumplen esta condición son los circuitos hamiltonianos. Si no hay ninguno, o si en algún momento nos quedamos sin caminos para continuar, el grafo **no tiene circuitos hamiltonianos**.",
     "The paths that satisfy this condition are the Hamiltonian circuits. If there are none, or if at some point we run out of paths to continue, the graph **has no Hamiltonian circuits**."
    ]
   },
   {
    "id": "9-4-concatenacio-de-successions-producte-llati",
    "t": "h",
    "x": [
     "Concatenació de successions (producte llatí)",
     "Concatenación de sucesiones (producto latino)",
     "Concatenation of sequences (Latin product)"
    ]
   },
   {
    "t": "p",
    "x": [
     "Si `A₁ = a₁, a₂, …, aₙ` i `B₁ = b₁, b₂, …, b_m` són dues successions de costats d'un graf, la seva **concatenació** és:",
     "Si `A₁ = a₁, a₂, …, aₙ` y `B₁ = b₁, b₂, …, b_m` son dos sucesiones de lados de un grafo, su **concatenación** es:",
     "If `A₁ = a₁, a₂, …, aₙ` and `B₁ = b₁, b₂, …, b_m` are two edge sequences of a graph, their **concatenation** is:"
    ]
   },
   {
    "head": [
     [
      "Cas",
      "Caso",
      "Case"
     ],
     [
      "Resultat",
      "Resultado",
      "Result"
     ]
    ],
    "rows": [
     [
      [
       "`aₙ ≠ b₁` i els vèrtexs `aₙ` i `b₁` són **adjacents**",
       "`aₙ ≠ b₁` y los vértices `aₙ` y `b₁` son **adyacentes**",
       "`aₙ ≠ b₁` and the vertices `aₙ` and `b₁` are **adjacent**"
      ],
      "`A₁B₁ = a₁, …, aₙ, b₁, …, b_m`"
     ],
     [
      "`aₙ = b₁`",
      "`A₁B₁ = a₁, …, aₙ, b₂, …, b_m`"
     ],
     [
      [
       "`aₙ ≠ b₁` i **no** són adjacents",
       "`aₙ ≠ b₁` y **no** son adyacentes",
       "`aₙ ≠ b₁` and they are **not** adjacent"
      ],
      [
       "`A₁B₁ = 0` (successió nul·la)",
       "`A₁B₁ = 0` (sucesión nula)",
       "`A₁B₁ = 0` (null sequence)"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "**Exemples:**",
     "**Ejemplos:**",
     "**Examples:**"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>A,D,F  i  G,B,A   →   A,D,F,G,B,A\nA,B,E  i  E,D,A   →   A,B,E,D,A\nA,B,C  i  G,B,E   →   successió nul·la\n</code>",
     "<code>A,D,F  y  G,B,A   →   A,D,F,G,B,A\nA,B,E  y  E,D,A   →   A,B,E,D,A\nA,B,C  y  G,B,E   →   sucesión nula\n</code>",
     "<code>A,D,F  and  G,B,A   →   A,D,F,G,B,A\nA,B,E  and  E,D,A   →   A,B,E,D,A\nA,B,C  and  G,B,E   →   null sequence\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "id": "9-5-matriu-literal-i-producte-llati",
    "t": "h",
    "x": [
     "Matriu literal i producte llatí",
     "Matriz literal y producto latino",
     "Literal matrix and Latin product"
    ]
   },
   {
    "t": "p",
    "x": [
     "**Matriu literal** de G (n×n): cada fila i cada columna corresponen a un vèrtex i, en cada element (fila ∩ columna), es representa:",
     "**Matriz literal** de G (n×n): cada fila y cada columna corresponden a un vértice y, en cada elemento (fila ∩ columna), se representa:",
     "**Literal matrix** of G (n×n): each row and each column corresponds to a vertex and, in each entry (row ∩ column), we write:"
    ]
   },
   {
    "items": [
     [
      "La **seqüència dels noms dels dos vèrtexs**, si aquests són adjacents.",
      "La **secuencia de los nombres de los dos vértices**, si estos son adyacentes.",
      "The **sequence of the names of the two vertices**, if they are adjacent."
     ],
     [
      "En cas contrari, **no es representa res** (seqüència nul·la).",
      "En caso contrario, **no se representa nada** (secuencia nula).",
      "Otherwise, **nothing is written** (null sequence)."
     ]
    ],
    "t": "list"
   },
   {
    "t": "p",
    "x": [
     "**Producte llatí** de dues matrius literals del mateix ordre: a cada intersecció de la fila **i** amb la columna **j** posem els resultats de les concatenacions de successions dels elements *k-èssims* de la fila **i** amb els elements *k-èssims* de la columna **j**, on `1 ≤ k ≤ n`.",
     "**Producto latino** de dos matrices literales del mismo orden: en cada intersección de la fila **i** con la columna **j** ponemos los resultados de las concatenaciones de sucesiones de los elementos *k-ésimos* de la fila **i** con los elementos *k-ésimos* de la columna **j**, donde `1 ≤ k ≤ n`.",
     "**Latin product** of two literal matrices of the same order: at each intersection of row **i** with column **j** we put the results of concatenating the *k-th* entries of row **i** with the *k-th* entries of column **j**, where `1 ≤ k ≤ n`."
    ]
   },
   {
    "id": "9-6-metode-de-la-concatenacio-llatina",
    "t": "h",
    "x": [
     "Mètode de la concatenació llatina",
     "Método de la concatenación latina",
     "Latin concatenation method"
    ]
   },
   {
    "t": "p",
    "x": [
     "Si G és un graf connex amb n vèrtexs:",
     "Si G es un grafo conexo con n vértices:",
     "If G is a connected graph with n vertices:"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>1- Fer k=1\n2- Construir la matriu literal M_k del graf G\n3- Construir la matriu M_k* suprimint de M_k les successions de costats\n   en les quals es repeteixi algun vèrtex\n4- Si k=n, l'algorisme s'ha acabat i els camins que apareixen en Mₙ* són\n   els circuits de Hamilton del graf G\n5- Si k<n, llavors k=k+1 i construir la matriu M_k com a producte llatí\n   de les matrius M_{k-1}* i M₁*, i tornar al pas 3\n</code>",
     "<code>1- Hacer k=1\n2- Construir la matriz literal M_k del grafo G\n3- Construir la matriz M_k* suprimiendo de M_k las sucesiones de lados\n   en las que se repita algún vértice\n4- Si k=n, el algoritmo ha terminado y los caminos que aparecen en Mₙ* son\n   los circuitos de Hamilton del grafo G\n5- Si k<n, entonces k=k+1 y construir la matriz M_k como producto latino\n   de las matrices M_{k-1}* y M₁*, y volver al paso 3\n</code>",
     "<code>1- Set k=1\n2- Build the literal matrix M_k of the graph G\n3- Build the matrix M_k* by removing from M_k the edge sequences\n   in which some vertex is repeated\n4- If k=n, the algorithm has finished and the paths in Mₙ* are\n   the Hamilton circuits of the graph G\n5- If k<n, then k=k+1, build the matrix M_k as the Latin product\n   of the matrices M_{k-1}* and M₁*, and go back to step 3\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "t": "hr"
   },
   {
    "t": "check",
    "ex": {
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
    }
   }
  ],
  "10-cami-mes-curt": [
   {
    "id": "10-1-graf-ponderat",
    "t": "h",
    "x": [
     "Graf ponderat",
     "Grafo ponderado",
     "Weighted graph"
    ]
   },
   {
    "t": "p",
    "x": [
     "Suposem un graf `G=(V,E)`, dirigit o no, de manera que cada costat `e ∈ E` té associat una quantitat **λ(e)**, anomenada **pes del costat e**, que normalment representa una longitud, un cost… Un graf d'aquest tipus s'anomena **graf ponderat**.",
     "Supongamos un grafo `G=(V,E)`, dirigido o no, de manera que cada lado `e ∈ E` tiene asociada una cantidad **λ(e)**, llamada **peso del lado e**, que normalmente representa una longitud, un coste… Un grafo de este tipo se denomina **grafo ponderado**.",
     "Suppose a graph `G=(V,E)`, directed or not, such that each edge `e ∈ E` has an associated quantity **λ(e)**, called the **weight of edge e**, which usually represents a length, a cost… A graph of this kind is called a **weighted graph**."
    ]
   },
   {
    "t": "p",
    "x": [
     "Un **camí més curt** entre dos vèrtexs `x₀` i `xₙ` de G és un camí `e₁ → e₂ → … → e_k` de manera que la quantitat `Σᵢ₌₁ᵏ λ(eᵢ)` sigui **mínima**.",
     "Un **camino más corto** entre dos vértices `x₀` y `xₙ` de G es un camino `e₁ → e₂ → … → e_k` de manera que la cantidad `Σᵢ₌₁ᵏ λ(eᵢ)` sea **mínima**.",
     "A **shortest path** between two vertices `x₀` and `xₙ` of G is a path `e₁ → e₂ → … → e_k` such that the quantity `Σᵢ₌₁ᵏ λ(eᵢ)` is **minimal**."
    ]
   },
   {
    "id": "10-2-nombre-minim-de-costats-pesos-unitaris",
    "t": "h",
    "x": [
     "Nombre mínim de costats (pesos unitaris)",
     "Número mínimo de lados (pesos unitarios)",
     "Minimum number of edges (unit weights)"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sigui G un graf connex, finit i no dirigit, i S i T dos vèrtexs de G:",
     "Sea G un grafo conexo, finito y no dirigido, y S y T dos vértices de G:",
     "Let G be a connected, finite, undirected graph, and S and T two vertices of G:"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>1- Inicialització de variables\n   · Posem l'etiqueta 0 al vèrtex S\n   · Posem a 0 el número de costats del camí més curt (i=0)\n\n2- Etiquetem nous vèrtexs\n   · Busquem tots els vèrtexs NO etiquetats adjacents a aquells que\n     tinguin etiqueta i\n   · Si no s'ha trobat cap vèrtex, no existeix cap camí unint S i T.\n     S'acaba el procés.\n   · Si s'han trobat vèrtexs, s'etiqueten amb el valor i+1\n\n3- Actualitzem la longitud del camí òptim\n   · Si el vèrtex T no està etiquetat, fem i=i+1 i tornem al pas 2\n   · Si el vèrtex T està etiquetat, anem al pas 4\n\n4- Càlcul de la longitud del camí òptim\n   · La longitud del camí més curt entre S i T és i+1\n</code>",
     "<code>1- Inicialización de variables\n   · Ponemos la etiqueta 0 al vértice S\n   · Ponemos a 0 el número de lados del camino más corto (i=0)\n\n2- Etiquetamos nuevos vértices\n   · Buscamos todos los vértices NO etiquetados adyacentes a aquellos que\n     tengan etiqueta i\n   · Si no se ha encontrado ningún vértice, no existe ningún camino uniendo\n     S y T. Se acaba el proceso.\n   · Si se han encontrado vértices, se etiquetan con el valor i+1\n\n3- Actualizamos la longitud del camino óptimo\n   · Si el vértice T no está etiquetado, hacemos i=i+1 y volvemos al paso 2\n   · Si el vértice T está etiquetado, vamos al paso 4\n\n4- Cálculo de la longitud del camino óptimo\n   · La longitud del camino más corto entre S y T es i+1\n</code>",
     "<code>1- Initialise variables\n   · Put the label 0 on vertex S\n   · Set the number of edges of the shortest path to 0 (i=0)\n\n2- Label new vertices\n   · Find all the UNLABELLED vertices adjacent to those that\n     have label i\n   · If no vertex has been found, there is no path joining\n     S and T. The process ends.\n   · If vertices have been found, label them with the value i+1\n\n3- Update the length of the optimal path\n   · If vertex T is not labelled, set i=i+1 and go back to step 2\n   · If vertex T is labelled, go to step 4\n\n4- Compute the length of the optimal path\n   · The length of the shortest path between S and T is i+1\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "id": "10-3-algorisme-de-dijkstra",
    "t": "h",
    "x": [
     "Algorisme de Dijkstra",
     "Algoritmo de Dijkstra",
     "Dijkstra's algorithm"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sigui G un graf **ponderat, connex i amb pesos positius**. Per a cada costat `(i,j)` de G, `w(i,j)` representa el seu pes o longitud. L'algorisme calcula el camí més curt entre dos vèrtexs A i Z, assignant a cada vèrtex v una **marca `L(v)`** que representa la longitud d'un camí que uneix A i v.",
     "Sea G un grafo **ponderado, conexo y con pesos positivos**. Para cada lado `(i,j)` de G, `w(i,j)` representa su peso o longitud. El algoritmo calcula el camino más corto entre dos vértices A y Z, asignando a cada vértice v una **marca `L(v)`** que representa la longitud de un camino que une A y v.",
     "Let G be a **weighted, connected graph with positive weights**. For each edge `(i,j)` of G, `w(i,j)` represents its weight or length. The algorithm computes the shortest path between two vertices A and Z, giving each vertex v a **label `L(v)`** that represents the length of a path joining A and v."
    ]
   },
   {
    "t": "p",
    "x": [
     "Al llarg del procés la marca `L(v)` va **millorant** (obtenint una longitud més petita) fins a arribar a una **marca permanent** (o immillorable). En aquest moment el valor de la marca coincideix amb la longitud d'un dels camins més curts entre A i v.",
     "A lo largo del proceso la marca `L(v)` va **mejorando** (obteniendo una longitud más pequeña) hasta llegar a una **marca permanente** (o inmejorable). En ese momento el valor de la marca coincide con la longitud de uno de los caminos más cortos entre A y v.",
     "Throughout the process the label `L(v)` keeps **improving** (getting a smaller length) until it becomes a **permanent label** (one that cannot be improved). At that moment the value of the label coincides with the length of one of the shortest paths between A and v."
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>1- Inicialització de variables\n   · Marquem amb 0 el vèrtex A:  L(A)=0\n   · Marquem amb ∞ els vèrtexs diferents de A\n   · Prenem com a conjunt T de vèrtexs temporals (marcats com a\n     no permanent) el format per tots els vèrtexs del graf\n   · ∀ x ∈ T, inicialitzem a blanc el vèrtex anterior a(x) = ' '\n\n2- Comprovem si hem arribat al vèrtex Z\n   · Si Z ∉ T, hem acabat el procés i L(Z) és la longitud mínima entre A i Z\n   · Si fem v₀=Z, v₁=a(v₀), v₂=a(v₁) … v_k=a(v_{k-1})=A\n   · El camí determinat pels vèrtexs\n       A=v_k → v_{k-1} → … → v₁ → v₀=Z\n     és un camí de longitud mínima entre A i Z\n\n3- Passem al vèrtex següent\n   · Escollim v ∈ T de manera que L(v) tingui el valor mínim\n   · Fem T = T − {v}\n\n4- Revisem les marques temporals dels vèrtexs\n   · ∀ x ∈ T adjacent a v, prenem:\n\n       a(x) = ⎧ a(x)   si L(x) ≤ L(v) + w(v,x)\n              ⎩ v      si L(x) > L(v) + w(v,x)\n\n       L(x) = mínim { L(x),  L(v) + w(v,x) }\n\n   · Tornem al pas 2\n</code>",
     "<code>1- Inicialización de variables\n   · Marcamos con 0 el vértice A:  L(A)=0\n   · Marcamos con ∞ los vértices diferentes de A\n   · Tomamos como conjunto T de vértices temporales (marcados como\n     no permanente) el formado por todos los vértices del grafo\n   · ∀ x ∈ T, inicializamos en blanco el vértice anterior a(x) = ' '\n\n2- Comprobamos si hemos llegado al vértice Z\n   · Si Z ∉ T, hemos acabado el proceso y L(Z) es la longitud mínima entre A y Z\n   · Si hacemos v₀=Z, v₁=a(v₀), v₂=a(v₁) … v_k=a(v_{k-1})=A\n   · El camino determinado por los vértices\n       A=v_k → v_{k-1} → … → v₁ → v₀=Z\n     es un camino de longitud mínima entre A y Z\n\n3- Pasamos al vértice siguiente\n   · Escogemos v ∈ T de manera que L(v) tenga el valor mínimo\n   · Hacemos T = T − {v}\n\n4- Revisamos las marcas temporales de los vértices\n   · ∀ x ∈ T adyacente a v, tomamos:\n\n       a(x) = ⎧ a(x)   si L(x) ≤ L(v) + w(v,x)\n              ⎩ v      si L(x) > L(v) + w(v,x)\n\n       L(x) = mínimo { L(x),  L(v) + w(v,x) }\n\n   · Volvemos al paso 2\n</code>",
     "<code>1- Initialise variables\n   · Label vertex A with 0:  L(A)=0\n   · Label the vertices other than A with ∞\n   · Take as the set T of temporary vertices (labelled as not\n     permanent) the set of all the vertices of the graph\n   · ∀ x ∈ T, initialise the previous vertex as blank: a(x) = ' '\n\n2- Check whether we have reached vertex Z\n   · If Z ∉ T, the process has finished and L(Z) is the minimum length between A and Z\n   · If we set v₀=Z, v₁=a(v₀), v₂=a(v₁) … v_k=a(v_{k-1})=A\n   · The path determined by the vertices\n       A=v_k → v_{k-1} → … → v₁ → v₀=Z\n     is a path of minimum length between A and Z\n\n3- Move on to the next vertex\n   · Choose v ∈ T such that L(v) has the minimum value\n   · Set T = T − {v}\n\n4- Revise the temporary labels of the vertices\n   · ∀ x ∈ T adjacent to v, take:\n\n       a(x) = ⎧ a(x)   if L(x) ≤ L(v) + w(v,x)\n              ⎩ v      if L(x) > L(v) + w(v,x)\n\n       L(x) = minimum { L(x),  L(v) + w(v,x) }\n\n   · Go back to step 2\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "**Exemple resolt.** Camí més curt de `v₁` a `v₇`:",
     "**Ejemplo resuelto.** Camino más corto de `v₁` a `v₇`:",
     "**Worked example.** Shortest path from `v₁` to `v₇`:"
    ]
   },
   {
    "head": [
     "T",
     [
      "Vèrtex a estudiar",
      "Vértice a estudiar",
      "Vertex being studied"
     ],
     "L(v₁)",
     "L(v₂)",
     "L(v₃)",
     "L(v₄)",
     "L(v₅)",
     "L(v₆)",
     "L(v₇)",
     "v",
     "a(v)"
    ],
    "rows": [
     [
      "v₁…v₇",
      "v₁",
      "**0\\***",
      "∞",
      "∞",
      "∞",
      "∞",
      "∞",
      "∞",
      "v₁",
      "' '"
     ],
     [
      "v₂…v₇",
      "v₂,v₃",
      "0",
      "**3\\***",
      "9",
      "∞",
      "∞",
      "∞",
      "∞",
      "v₂",
      "v₁"
     ],
     [
      "v₃…v₇",
      "v₄,v₅",
      "0",
      "3",
      "9",
      "10",
      "**4\\***",
      "∞",
      "∞",
      "v₅",
      "v₂"
     ],
     [
      "v₃,v₄,v₆,v₇",
      "v₃,v₄,v₆",
      "0",
      "3",
      "**8\\***",
      "9",
      "4",
      "13",
      "∞",
      "v₃",
      "v₅"
     ],
     [
      "v₄,v₆,v₇",
      "v₄",
      "0",
      "3",
      "8",
      "**9\\***",
      "4",
      "13",
      "∞",
      "v₄",
      "v₅"
     ],
     [
      "v₆,v₇",
      "v₆,v₇",
      "0",
      "3",
      "8",
      "9",
      "4",
      "**11\\***",
      "17",
      "v₆",
      "v₄"
     ],
     [
      "v₇",
      "v₇",
      "0",
      "3",
      "8",
      "9",
      "4",
      "11",
      "**15\\***",
      "v₇",
      "v₆"
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "Reconstruint el camí a partir de la columna `a(v)`:",
     "Reconstruyendo el camino a partir de la columna `a(v)`:",
     "Rebuilding the path from the column `a(v)`:"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>Camí més curt:  v₁ → v₂ → v₅ → v₄ → v₆ → v₇       (longitud 15)\n</code>",
     "<code>Camino más corto:  v₁ → v₂ → v₅ → v₄ → v₆ → v₇       (longitud 15)\n</code>",
     "<code>Shortest path:  v₁ → v₂ → v₅ → v₄ → v₆ → v₇       (length 15)\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "t": "hr"
   }
  ],
  "11-grafs-isomorfs": [
   {
    "t": "p",
    "x": [
     "Si es demana a dues persones de representar un graf `G=(V,E)`, és poc probable que els dos dibuixos siguin idèntics, encara que tinguin els mateixos vèrtexs i arestes. Es tracta de **grafs isomorfs**.",
     "Si se pide a dos personas que representen un grafo `G=(V,E)`, es poco probable que los dos dibujos sean idénticos, aunque tengan los mismos vértices y aristas. Se trata de **grafos isomorfos**.",
     "If two people are asked to draw a graph `G=(V,E)`, the two drawings are unlikely to be identical, even though they have the same vertices and edges. These are **isomorphic graphs**."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Siguin `G₁=(V₁,E₁)` i `G₂=(V₂,E₂)` dos grafs no dirigits. Direm que **G₁ i G₂ són isomorfs** si existeix una funció **bijectiva** `f: V₁ → V₂` i una funció **bijectiva** `g: E₁ → E₂` tal que si un costat `e ∈ E₁` és incident en `vᵢ` i `vⱼ`, aleshores el costat `g(e)` és incident a `f(vᵢ)` i `f(vⱼ)`.",
       "Sean `G₁=(V₁,E₁)` y `G₂=(V₂,E₂)` dos grafos no dirigidos. Diremos que **G₁ y G₂ son isomorfos** si existe una función **biyectiva** `f: V₁ → V₂` y una función **biyectiva** `g: E₁ → E₂` tal que si un lado `e ∈ E₁` es incidente en `vᵢ` y `vⱼ`, entonces el lado `g(e)` es incidente en `f(vᵢ)` y `f(vⱼ)`.",
       "Let `G₁=(V₁,E₁)` and `G₂=(V₂,E₂)` be two undirected graphs. We say that **G₁ and G₂ are isomorphic** if there is a **bijective** function `f: V₁ → V₂` and a **bijective** function `g: E₁ → E₂` such that if an edge `e ∈ E₁` is incident to `vᵢ` and `vⱼ`, then the edge `g(e)` is incident to `f(vᵢ)` and `f(vⱼ)`."
      ]
     },
     {
      "t": "p",
      "x": [
       "Notem `G₁ ≈ G₂`.",
       "Notamos `G₁ ≈ G₂`.",
       "We write `G₁ ≈ G₂`."
      ]
     }
    ],
    "t": "note",
    "title": [
     "Definició",
     "Definición",
     "Definition"
    ],
    "mode": "explained"
   },
   {
    "id": "11-1-propietats",
    "t": "h",
    "x": [
     "Propietats",
     "Propiedades",
     "Properties"
    ]
   },
   {
    "t": "p",
    "x": [
     "Si G₁ i G₂ són isomorfs, aleshores tenen característiques comunes:",
     "Si G₁ y G₂ son isomorfos, entonces tienen características comunes:",
     "If G₁ and G₂ are isomorphic, then they share some features:"
    ]
   },
   {
    "items": [
     [
      "Tenen el mateix nombre de vèrtexs: `|V₁| = |V₂|`.",
      "Tienen el mismo número de vértices: `|V₁| = |V₂|`.",
      "They have the same number of vertices: `|V₁| = |V₂|`."
     ],
     [
      "Tenen el mateix nombre de costats: `|E₁| = |E₂|`.",
      "Tienen el mismo número de lados: `|E₁| = |E₂|`.",
      "They have the same number of edges: `|E₁| = |E₂|`."
     ],
     [
      "Tenen el mateix nombre de vèrtexs amb la mateixa valència.",
      "Tienen el mismo número de vértices con la misma valencia.",
      "They have the same number of vertices with the same degree."
     ],
     [
      "Si C és una successió de costats, un camí o un circuit de G₁, la imatge de C per la funció g és també una successió de costats, un camí o un circuit de G₂.",
      "Si C es una sucesión de lados, un camino o un circuito de G₁, la imagen de C por la función g es también una sucesión de lados, un camino o un circuito de G₂.",
      "If C is an edge sequence, a path or a circuit of G₁, the image of C under the function g is also an edge sequence, a path or a circuit of G₂."
     ]
    ],
    "t": "list"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si dos grafs **no** compleixen alguna d'aquestes propietats, podem concloure que **no són isomorfs**. Però aquestes propietats són condicions **necessàries i no suficients**: per assegurar que dos grafs són isomorfs cal trobar les dues aplicacions bijectives f i g, cosa que **pot ser complicada** quan el nombre de vèrtexs i costats és important.",
       "Si dos grafos **no** cumplen alguna de estas propiedades, podemos concluir que **no son isomorfos**. Pero estas propiedades son condiciones **necesarias y no suficientes**: para asegurar que dos grafos son isomorfos hay que encontrar las dos aplicaciones biyectivas f y g, cosa que **puede ser complicada** cuando el número de vértices y lados es importante.",
       "If two graphs do **not** satisfy one of these properties, we can conclude that they **are not isomorphic**. But these properties are **necessary, not sufficient** conditions: to guarantee that two graphs are isomorphic you must find the two bijections f and g, which **can be hard** when the number of vertices and edges is large."
      ]
     }
    ],
    "t": "warn",
    "title": [
     "Necessàries però no suficients",
     "Necesarias pero no suficientes",
     "Necessary but not sufficient"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Dos grafs `G₁` i `G₂` són isomorfs **si i només si** tenen **la mateixa matriu d'incidència** per alguna ordenació dels seus vèrtexs i costats.",
       "Dos grafos `G₁` y `G₂` son isomorfos **si y solo si** tienen **la misma matriz de incidencia** para alguna ordenación de sus vértices y lados.",
       "Two graphs `G₁` and `G₂` are isomorphic **if and only if** they have **the same incidence matrix** for some ordering of their vertices and edges."
      ]
     }
    ],
    "t": "prop",
    "title": "Teorema"
   },
   {
    "t": "hr"
   }
  ],
  "12-grafs-planars": [
   {
    "t": "p",
    "x": [
     "Diem que un graf G és **pla** si es pot traçar sobre una superfície plana sense que es creuin els seus costats, excepte en els vèrtexs on són incidents. Tot graf G **isomorf a un graf pla** s'anomena **graf planar**.",
     "Decimos que un grafo G es **plano** si se puede trazar sobre una superficie plana sin que se crucen sus lados, excepto en los vértices donde son incidentes. Todo grafo G **isomorfo a un grafo plano** se denomina **grafo planar**.",
     "We say that a graph G is **plane** if it can be drawn on a flat surface without its edges crossing, except at the vertices to which they are incident. Every graph G **isomorphic to a plane graph** is called a **planar graph**."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "A partir d'aquí **no distingirem** entre grafs plans i grafs planars. Els grafs planars s'utilitzen en electrònica per al disseny i la fabricació de circuits integrats.",
       "A partir de aquí **no distinguiremos** entre grafos planos y grafos planares. Los grafos planares se utilizan en electrónica para el diseño y la fabricación de circuitos integrados.",
       "From now on we **will not distinguish** between plane and planar graphs. Planar graphs are used in electronics for designing and manufacturing integrated circuits."
      ]
     }
    ],
    "t": "note",
    "mode": "explained"
   },
   {
    "id": "12-1-cares",
    "t": "h",
    "x": [
     "Cares",
     "Caras",
     "Faces"
    ]
   },
   {
    "t": "p",
    "x": [
     "Si tenim un graf planar en una superfície plana, queda dividida en diferents regions anomenades **cares**. Una cara es caracteritza pel **circuit que forma la seva frontera**.",
     "Si tenemos un grafo planar en una superficie plana, queda dividida en diferentes regiones llamadas **caras**. Una cara se caracteriza por el **circuito que forma su frontera**.",
     "If we have a planar graph on a flat surface, the surface is divided into different regions called **faces**. A face is characterised by the **circuit that forms its boundary**."
    ]
   },
   {
    "items": [
     [
      "Sempre hi ha una **cara exterior o infinita**, que no té frontera.",
      "Siempre hay una **cara exterior o infinita**, que no tiene frontera.",
      "There is always an **outer or infinite face**, which has no boundary."
     ],
     [
      "Si G és un graf planar i simple, **cada cara està limitada com a mínim per tres costats**.",
      "Si G es un grafo planar y simple, **cada cara está limitada como mínimo por tres lados**.",
      "If G is a simple planar graph, **each face is bounded by at least three edges**."
     ],
     [
      "Dues cares són **adjacents** si les seves fronteres tenen algun costat en comú. Dues cares que es toquen únicament per un vèrtex **no** són adjacents.",
      "Dos caras son **adyacentes** si sus fronteras tienen algún lado en común. Dos caras que se tocan únicamente por un vértice **no** son adyacentes.",
      "Two faces are **adjacent** if their boundaries have some edge in common. Two faces that only touch at a vertex are **not** adjacent."
     ]
    ],
    "t": "list"
   },
   {
    "id": "12-2-teorema-d-euler-per-a-grafs-planars",
    "t": "h",
    "x": [
     "Teorema d'Euler per a grafs planars",
     "Teorema de Euler para grafos planares",
     "Euler's theorem for planar graphs"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si G és un graf planar i connex de **n** vèrtexs, **m** costats i **c** cares, es verifica que:",
       "Si G es un grafo planar y conexo de **n** vértices, **m** lados y **c** caras, se verifica que:",
       "If G is a connected planar graph with **n** vertices, **m** edges and **c** faces, then:"
      ]
     },
     {
      "t": "code",
      "lang": "text",
      "src": "<code>c = m − n + 2\n</code>"
     }
    ],
    "t": "prop",
    "title": [
     "Fórmula d'Euler (1750)",
     "Fórmula de Euler (1750)",
     "Euler's formula (1750)"
    ]
   },
   {
    "t": "p",
    "x": [
     "**Corol·laris:**",
     "**Corolarios:**",
     "**Corollaries:**"
    ]
   },
   {
    "items": [
     [
      "Si G és un graf planar connex i simple de n vèrtexs (n≥3) i m costats, es compleix la desigualtat: `m ≤ 3n − 6`.",
      "Si G es un grafo planar conexo y simple de n vértices (n≥3) y m lados, se cumple la desigualdad: `m ≤ 3n − 6`.",
      "If G is a connected simple planar graph with n vertices (n≥3) and m edges, the inequality holds: `m ≤ 3n − 6`."
     ],
     [
      "Els grafs **K₅** i **K₃,₃** **no són planars**.",
      "Los grafos **K₅** y **K₃,₃** **no son planares**.",
      "The graphs **K₅** and **K₃,₃** **are not planar**."
     ]
    ],
    "t": "list"
   },
   {
    "id": "12-3-reduccions-en-serie-i-grafs-homeomorfs",
    "t": "h",
    "x": [
     "Reduccions en sèrie i grafs homeomorfs",
     "Reducciones en serie y grafos homeomorfos",
     "Series reductions and homeomorphic graphs"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sigui `G(V,E)` un graf. Si v és un vèrtex de **grau 2** amb dos costats incidents de la forma `eᵢ={vᵢ,v}` i `eⱼ={v,vⱼ}`, direm que els costats `eᵢ` i `eⱼ` **estan en sèrie**.",
     "Sea `G(V,E)` un grafo. Si v es un vértice de **grado 2** con dos lados incidentes de la forma `eᵢ={vᵢ,v}` y `eⱼ={v,vⱼ}`, diremos que los lados `eᵢ` y `eⱼ` **están en serie**.",
     "Let `G(V,E)` be a graph. If v is a vertex of **degree 2** with two incident edges of the form `eᵢ={vᵢ,v}` and `eⱼ={v,vⱼ}`, we say that the edges `eᵢ` and `eⱼ` **are in series**."
    ]
   },
   {
    "t": "p",
    "x": [
     "Fer una **reducció en sèrie** consisteix a eliminar el vèrtex v i substituir els costats `{vᵢ,v}` i `{v,vⱼ}` pel costat `{vᵢ,vⱼ}`.",
     "Hacer una **reducción en serie** consiste en eliminar el vértice v y sustituir los lados `{vᵢ,v}` y `{v,vⱼ}` por el lado `{vᵢ,vⱼ}`.",
     "A **series reduction** consists of removing the vertex v and replacing the edges `{vᵢ,v}` and `{v,vⱼ}` by the edge `{vᵢ,vⱼ}`."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Una reducció en sèrie elimina un vèrtex de grau dos i un costat del graf ⟹ **simplifica el graf**.",
       "Una reducción en serie elimina un vértice de grado dos y un lado del grafo ⟹ **simplifica el grafo**.",
       "A series reduction removes a vertex of degree two and an edge from the graph ⟹ **it simplifies the graph**."
      ]
     }
    ],
    "t": "tip",
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "Dos grafs G₁ i G₂ són **homeomorfs** si són isomorfs o bé si poden transformar-se en grafs isomorfs després d'una successió de reduccions en sèrie.",
     "Dos grafos G₁ y G₂ son **homeomorfos** si son isomorfos o bien si pueden transformarse en grafos isomorfos después de una sucesión de reducciones en serie.",
     "Two graphs G₁ and G₂ are **homeomorphic** if they are isomorphic or if they can be turned into isomorphic graphs after a sequence of series reductions."
    ]
   },
   {
    "t": "h",
    "id": "12-4-teorema-de-kuratowski",
    "x": "Teorema de Kuratowski"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un graf G és **planar si i només si no conté un subgraf homeomorf (o homomorf) a K₅ o a K₃,₃**.",
       "Un grafo G es **planar si y solo si no contiene un subgrafo homeomorfo (u homomorfo) a K₅ o a K₃,₃**.",
       "A graph G is **planar if and only if it does not contain a subgraph homeomorphic to K₅ or to K₃,₃**."
      ]
     }
    ],
    "t": "prop"
   },
   {
    "id": "12-5-graf-dual",
    "t": "h",
    "x": [
     "Graf dual",
     "Grafo dual",
     "Dual graph"
    ]
   },
   {
    "t": "p",
    "x": [
     "Donat un graf planar `G=(V,E)`, podem fer-li correspondre un graf planar `G*` de la manera següent:",
     "Dado un grafo planar `G=(V,E)`, podemos hacerle corresponder un grafo planar `G*` de la siguiente manera:",
     "Given a planar graph `G=(V,E)`, we can associate a planar graph `G*` with it as follows:"
    ]
   },
   {
    "items": [
     [
      "A l'interior de cada **cara** de G tracem un vèrtex `vᵢ*`.",
      "En el interior de cada **cara** de G trazamos un vértice `vᵢ*`.",
      "Inside each **face** of G we draw a vertex `vᵢ*`."
     ],
     [
      "Per cada parella de vèrtexs `vᵢ*` i `vⱼ*` que pertanyin a **dues cares adjacents**, tracem el costat adjacent `e_ij*` incident en `vᵢ*` i `vⱼ*`.",
      "Por cada pareja de vértices `vᵢ*` y `vⱼ*` que pertenezcan a **dos caras adyacentes**, trazamos el lado adyacente `e_ij*` incidente en `vᵢ*` y `vⱼ*`.",
      "For each pair of vertices `vᵢ*` and `vⱼ*` belonging to **two adjacent faces**, we draw the adjacent edge `e_ij*` incident to `vᵢ*` and `vⱼ*`."
     ],
     [
      "Si e és un **istme** de G que es troba a la cara corresponent al vèrtex `vᵢ*` de G*, tracem el **llaç*\\* `(vᵢ*, vᵢ*)`.",
      "Si e es un **istmo** de G que se encuentra en la cara correspondiente al vértice `vᵢ*` de G*, trazamos el **lazo*\\* `(vᵢ*, vᵢ*)`.",
      "If e is an **isthmus** of G lying in the face corresponding to the vertex `vᵢ*` of G*, we draw the **loop*\\* `(vᵢ*, vᵢ*)`."
     ]
    ],
    "t": "list"
   },
   {
    "t": "p",
    "x": [
     "El graf format pels vèrtexs `vᵢ*` i pels costats `e_ij*` s'anomena **graf dual** de G.",
     "El grafo formado por los vértices `vᵢ*` y por los lados `e_ij*` se denomina **grafo dual** de G.",
     "The graph formed by the vertices `vᵢ*` and the edges `e_ij*` is called the **dual graph** of G."
    ]
   },
   {
    "t": "p",
    "x": [
     "**Propietats.** Si G és planar i connex amb n vèrtexs, m costats i c cares, i el seu dual G* té n* vèrtexs, m* costats i c* cares:",
     "**Propiedades.** Si G es planar y conexo con n vértices, m lados y c caras, y su dual G* tiene n* vértices, m* lados y c* caras:",
     "**Properties.** If G is planar and connected with n vertices, m edges and c faces, and its dual G* has n* vertices, m* edges and c* faces:"
    ]
   },
   {
    "t": "code",
    "lang": "text",
    "src": "<code>n* = c        m* = m        c* = n\n</code>",
    "mode": "explained"
   },
   {
    "t": "hr"
   },
   {
    "t": "check",
    "ex": {
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
    }
   }
  ],
  "13-acoloriment": [
   {
    "id": "13-1-acoloriment-dels-vertexs",
    "t": "h",
    "x": [
     "Acoloriment dels vèrtexs",
     "Coloreado de los vértices",
     "Vertex colouring"
    ]
   },
   {
    "t": "p",
    "x": [
     "**Acolorir els vèrtexs** d'un graf `G=(V,E)` consisteix a pintar cadascun dels vèrtexs amb un color, de manera que **dos vèrtexs adjacents no siguin del mateix color**.",
     "**Colorear los vértices** de un grafo `G=(V,E)` consiste en pintar cada uno de los vértices con un color, de manera que **dos vértices adyacentes no sean del mismo color**.",
     "**Colouring the vertices** of a graph `G=(V,E)` consists of painting each vertex with a colour, so that **no two adjacent vertices have the same colour**."
    ]
   },
   {
    "head": [
     [
      "Concepte",
      "Concepto",
      "Concept"
     ],
     [
      "Definició",
      "Definición",
      "Definition"
     ]
    ],
    "rows": [
     [
      [
       "**k-coloració**",
       "**k-coloración**",
       "**k-colouring**"
      ],
      [
       "Coloració que necessita k colors",
       "Coloración que necesita k colores",
       "Colouring that needs k colours"
      ]
     ],
     [
      [
       "**Nombre cromàtic γ(G)**",
       "**Número cromático γ(G)**",
       "**Chromatic number γ(G)**"
      ],
      [
       "El valor més petit de k per al qual existeix una k-coloració dels vèrtexs",
       "El valor más pequeño de k para el cual existe una k-coloración de los vértices",
       "The smallest value of k for which there is a k-colouring of the vertices"
      ]
     ],
     [
      [
       "**Coloració mínima**",
       "**Coloración mínima**",
       "**Minimum colouring**"
      ],
      [
       "Una coloració dels vèrtexs amb `γ(G)` colors",
       "Una coloración de los vértices con `γ(G)` colores",
       "A colouring of the vertices with `γ(G)` colours"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "items": [
       [
        "Es consideren **grafs sense llaços**: si hi ha llaços, la condició d'acoloriment no pot complir-se mai.",
        "Se consideran **grafos sin lazos**: si hay lazos, la condición de coloreado no puede cumplirse nunca.",
        "**Graphs without loops** are considered: if there are loops, the colouring condition can never be met."
       ],
       [
        "Una k-coloració particiona V en k subconjunts on els vèrtexs de cada subconjunt són del mateix color.",
        "Una k-coloración particiona V en k subconjuntos donde los vértices de cada subconjunto son del mismo color.",
        "A k-colouring partitions V into k subsets where the vertices of each subset have the same colour."
       ],
       [
        "`γ(G) = 2` **si i només si** G és un graf **bipartit**.",
        "`γ(G) = 2` **si y solo si** G es un grafo **bipartito**.",
        "`γ(G) = 2` **if and only if** G is a **bipartite** graph."
       ],
       [
        "Si G és un graf complet `Kₙ`, aleshores `γ(G) = n`.",
        "Si G es un grafo completo `Kₙ`, entonces `γ(G) = n`.",
        "If G is a complete graph `Kₙ`, then `γ(G) = n`."
       ],
       [
        "`γ(G) = 1` **si i només si** G és un graf **nul**.",
        "`γ(G) = 1` **si y solo si** G es un grafo **nulo**.",
        "`γ(G) = 1` **if and only if** G is a **null** graph."
       ]
      ],
      "t": "list"
     }
    ],
    "t": "note",
    "title": [
     "Observacions",
     "Observaciones",
     "Remarks"
    ],
    "mode": "explained"
   },
   {
    "id": "13-2-teorema-dels-quatre-colors",
    "t": "h",
    "x": [
     "Teorema dels quatre colors",
     "Teorema de los cuatro colores",
     "Four colour theorem"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Tot graf planar sense llaços és 4-colorable.**",
       "**Todo grafo planar sin lazos es 4-coloreable.**",
       "**Every planar graph without loops is 4-colourable.**"
      ]
     }
    ],
    "t": "prop"
   },
   {
    "t": "p",
    "x": [
     "**Aplicació: acoloriment d'un mapa.** Un mapa és un graf planar que no conté cap istme, on els països estan representats per les cares, les fronteres pels costats i la intersecció de les fronteres pels vèrtexs.",
     "**Aplicación: coloreado de un mapa.** Un mapa es un grafo planar que no contiene ningún istmo, donde los países están representados por las caras, las fronteras por los lados y la intersección de las fronteras por los vértices.",
     "**Application: colouring a map.** A map is a planar graph without any isthmus, where the countries are represented by the faces, the borders by the edges and the meeting points of the borders by the vertices."
    ]
   },
   {
    "t": "p",
    "x": [
     "Un mapa és **k-colorable** si pot acolorir-se amb k colors de manera que dos països veïns no siguin del mateix color.",
     "Un mapa es **k-coloreable** si puede colorearse con k colores de manera que dos países vecinos no sean del mismo color.",
     "A map is **k-colourable** if it can be coloured with k colours so that no two neighbouring countries have the same colour."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Teorema: tot mapa és 4-colorable.** A partir del mapa es construeix el graf dual, que és 4-colorable pel teorema dels quatre colors.",
       "**Teorema: todo mapa es 4-coloreable.** A partir del mapa se construye el grafo dual, que es 4-coloreable por el teorema de los cuatro colores.",
       "**Theorem: every map is 4-colourable.** From the map the dual graph is built, which is 4-colourable by the four colour theorem."
      ]
     }
    ],
    "t": "summary"
   },
   {
    "id": "13-3-algorisme-per-acolorir-els-vertexs",
    "t": "h",
    "x": [
     "Algorisme per acolorir els vèrtexs",
     "Algoritmo para colorear los vértices",
     "Algorithm for colouring the vertices"
    ]
   },
   {
    "t": "p",
    "x": [
     "L'algorisme és senzill, però **no ens dona necessàriament una coloració mínima**:",
     "El algoritmo es sencillo, pero **no nos da necesariamente una coloración mínima**:",
     "The algorithm is simple, but **it does not necessarily give a minimum colouring**:"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>1- Ordeneu els vèrtexs de G en una llista de forma decreixent en funció\n   del seu grau.\n2- Assigneu el color C₁ al vèrtex v₁ (tenint en compte l'ordenació\n   anterior) i assigneu el mateix color C₁ a tots els vèrtexs no\n   adjacents a un dels vèrtexs pintats amb el color C₁.\n3- Repetir el pas 2 amb els colors C₂, …, Cₙ fins que no quedi cap\n   vèrtex per pintar.\n</code>",
     "<code>1- Ordenad los vértices de G en una lista de forma decreciente en función\n   de su grado.\n2- Asignad el color C₁ al vértice v₁ (teniendo en cuenta la ordenación\n   anterior) y asignad el mismo color C₁ a todos los vértices no\n   adyacentes a uno de los vértices pintados con el color C₁.\n3- Repetir el paso 2 con los colores C₂, …, Cₙ hasta que no quede ningún\n   vértice por pintar.\n</code>",
     "<code>1- Sort the vertices of G in a list in decreasing order of\n   their degree.\n2- Give colour C₁ to vertex v₁ (following the previous order) and give\n   the same colour C₁ to every vertex not adjacent to any of the\n   vertices painted with colour C₁.\n3- Repeat step 2 with colours C₂, …, Cₙ until no vertex is left\n   to paint.\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "Com que no dona necessàriament una coloració minimal, convé verificar que el nombre de colors obtinguts no sigui molt superior a `γ(G)`, mitjançant la desigualtat:",
     "Como no da necesariamente una coloración minimal, conviene verificar que el número de colores obtenidos no sea muy superior a `γ(G)`, mediante la desigualdad:",
     "Since it does not necessarily give a minimal colouring, it is worth checking that the number of colours obtained is not much higher than `γ(G)`, using the inequality:"
    ]
   },
   {
    "t": "code",
    "lang": "text",
    "src": "<code>γ(G) ≤ δ_max + 1\n</code>",
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "on `δ_max` representa el grau màxim dels vèrtexs de G.",
     "donde `δ_max` representa el grado máximo de los vértices de G.",
     "where `δ_max` is the maximum degree of the vertices of G."
    ]
   },
   {
    "id": "13-4-acoloriment-dels-costats",
    "t": "h",
    "x": [
     "Acoloriment dels costats",
     "Coloreado de los lados",
     "Edge colouring"
    ]
   },
   {
    "t": "p",
    "x": [
     "**Acolorir els costats** consisteix a assignar a cadascun un color, de manera que **dos costats adjacents no tinguin el mateix color**.",
     "**Colorear los lados** consiste en asignar a cada uno un color, de manera que **dos lados adyacentes no tengan el mismo color**.",
     "**Colouring the edges** consists of giving each one a colour, so that **no two adjacent edges have the same colour**."
    ]
   },
   {
    "t": "p",
    "x": [
     "L'**índex cromàtic** `κ(G)` és el valor més petit de k per al qual existeix una k-coloració dels costats. Una coloració amb `κ(G)` colors s'anomena **coloració minimal**.",
     "El **índice cromático** `κ(G)` es el valor más pequeño de k para el cual existe una k-coloración de los lados. Una coloración con `κ(G)` colores se denomina **coloración minimal**.",
     "The **chromatic index** `κ(G)` is the smallest value of k for which there is a k-colouring of the edges. A colouring with `κ(G)` colours is called a **minimal colouring**."
    ]
   },
   {
    "t": "p",
    "x": [
     "L'algorisme es basa en la construcció del **graf adjunt** de G, `G'`:",
     "El algoritmo se basa en la construcción del **grafo adjunto** de G, `G'`:",
     "The algorithm is based on building the **line graph** of G, `G'`:"
    ]
   },
   {
    "items": [
     [
      "A cada **costat** de G li correspon un **vèrtex** de G'.",
      "A cada **lado** de G le corresponde un **vértice** de G'.",
      "Each **edge** of G corresponds to a **vertex** of G'."
     ],
     [
      "Dos vèrtexs de G' són adjacents si corresponen a dos costats adjacents de G.",
      "Dos vértices de G' son adyacentes si corresponden a dos lados adyacentes de G.",
      "Two vertices of G' are adjacent if they correspond to two adjacent edges of G."
     ]
    ],
    "t": "list"
   },
   {
    "t": "p",
    "x": [
     "Tampoc dona una coloració minimal; la verificació es fa amb:",
     "Tampoco da una coloración minimal; la verificación se hace con:",
     "It does not give a minimal colouring either; the check is done with:"
    ]
   },
   {
    "t": "code",
    "lang": "text",
    "src": "<code>δ_max ≤ κ(G) ≤ δ_max + 1\n</code>",
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si G és **bipartit**, `κ(G) = δ_max`.",
       "Si G es **bipartito**, `κ(G) = δ_max`.",
       "If G is **bipartite**, `κ(G) = δ_max`."
      ]
     }
    ],
    "t": "tip",
    "mode": "explained"
   },
   {
    "id": "13-5-polinomi-cromatic",
    "t": "h",
    "x": [
     "Polinomi cromàtic",
     "Polinomio cromático",
     "Chromatic polynomial"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sigui G un graf simple i **k** un enter positiu que representa el nombre de colors disponibles. L'objectiu és **calcular quantes k-coloracions diferents de G existeixen**.",
     "Sea G un grafo simple y **k** un entero positivo que representa el número de colores disponibles. El objetivo es **calcular cuántas k-coloraciones diferentes de G existen**.",
     "Let G be a simple graph and **k** a positive integer representing the number of available colours. The goal is to **count how many different k-colourings of G there are**."
    ]
   },
   {
    "t": "p",
    "x": [
     "El **polinomi cromàtic** de G és la funció `f_G` que dona el nombre de k-coloracions diferents de G.",
     "El **polinomio cromático** de G es la función `f_G` que da el número de k-coloraciones diferentes de G.",
     "The **chromatic polynomial** of G is the function `f_G` that gives the number of different k-colourings of G."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si `k < γ(G)`, aleshores `f_G(k) = 0`, ja que no es pot efectuar cap k-coloració si k és inferior al nombre cromàtic.",
       "Si `k < γ(G)`, entonces `f_G(k) = 0`, ya que no se puede efectuar ninguna k-coloración si k es inferior al número cromático.",
       "If `k < γ(G)`, then `f_G(k) = 0`, since no k-colouring can be made if k is less than the chromatic number."
      ]
     },
     {
      "t": "p",
      "x": [
       "Per tant, **el nombre cromàtic d'un graf G serà el valor més petit de k tal que `f_G(k) ≠ 0`.**",
       "Por tanto, **el número cromático de un grafo G será el valor más pequeño de k tal que `f_G(k) ≠ 0`.**",
       "Therefore, **the chromatic number of a graph G is the smallest value of k such that `f_G(k) ≠ 0`.**"
      ]
     }
    ],
    "t": "note",
    "title": [
     "Observació",
     "Observación",
     "Remark"
    ],
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "**Exemples:**",
     "**Ejemplos:**",
     "**Examples:**"
    ]
   },
   {
    "head": [
     [
      "Graf",
      "Grafo",
      "Graph"
     ],
     [
      "Polinomi cromàtic",
      "Polinomio cromático",
      "Chromatic polynomial"
     ],
     "γ(G)"
    ],
    "rows": [
     [
      [
       "Camí de 5 vèrtexs A-B-C-D-E",
       "Camino de 5 vértices A-B-C-D-E",
       "Path with 5 vertices A-B-C-D-E"
      ],
      "`f_G(k) = k(k-1)(k-1)(k-1)(k-1) = k(k-1)⁴`",
      "2"
     ],
     [
      "`K₃`",
      "`f_{K₃}(k) = k(k-1)(k-2)`",
      "3"
     ],
     [
      "`Kₙ`",
      "`f_{Kₙ}(k) = k(k-1)(k-2) … (k-n+1)`",
      "n"
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "**Càlcul per a un graf qualsevol.** Sigui G un graf simple i `vᵢ`, `vⱼ` dos vèrtexs **no adjacents**. Es poden construir dos grafs:",
     "**Cálculo para un grafo cualquiera.** Sea G un grafo simple y `vᵢ`, `vⱼ` dos vértices **no adyacentes**. Se pueden construir dos grafos:",
     "**Computation for any graph.** Let G be a simple graph and `vᵢ`, `vⱼ` two **non-adjacent** vertices. Two graphs can be built:"
    ]
   },
   {
    "head": [
     [
      "Graf",
      "Grafo",
      "Graph"
     ],
     [
      "Construcció",
      "Construcción",
      "Construction"
     ]
    ],
    "rows": [
     [
      "`G + {vᵢ,vⱼ}`",
      [
       "S'agrega el costat `{vᵢ,vⱼ}`",
       "Se agrega el lado `{vᵢ,vⱼ}`",
       "The edge `{vᵢ,vⱼ}` is added"
      ]
     ],
     [
      "`Ḡ(vᵢ,vⱼ)`",
      [
       "S'eliminen els vèrtexs `vᵢ` i `vⱼ` i tots els costats incidents en ells, creant un nou vèrtex `v = vᵢ + vⱼ` adjacent a tots els vèrtexs que en G són adjacents a `vᵢ`, a `vⱼ` o a tots dos alhora",
       "Se eliminan los vértices `vᵢ` y `vⱼ` y todos los lados incidentes en ellos, creando un nuevo vértice `v = vᵢ + vⱼ` adyacente a todos los vértices que en G son adyacentes a `vᵢ`, a `vⱼ` o a ambos a la vez",
       "The vertices `vᵢ` and `vⱼ` and all the edges incident to them are removed, creating a new vertex `v = vᵢ + vⱼ` adjacent to all the vertices that in G are adjacent to `vᵢ`, to `vⱼ` or to both"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si `vᵢ` i `vⱼ` són dos vèrtexs no adjacents d'un graf simple G, aleshores:",
       "Si `vᵢ` y `vⱼ` son dos vértices no adyacentes de un grafo simple G, entonces:",
       "If `vᵢ` and `vⱼ` are two non-adjacent vertices of a simple graph G, then:"
      ]
     },
     {
      "t": "code",
      "lang": "text",
      "src": "<code>f_G(k) = f_{G + {vᵢ,vⱼ}}(k) + f_{Ḡ(vᵢ,vⱼ)}(k)\n</code>"
     },
     {
      "t": "p",
      "x": [
       "Aplicant-ho repetidament es descompon un graf qualsevol en **grafs complets**, dels quals el polinomi cromàtic és immediat.",
       "Aplicándolo repetidamente se descompone un grafo cualquiera en **grafos completos**, de los cuales el polinomio cromático es inmediato.",
       "Applying it repeatedly decomposes any graph into **complete graphs**, whose chromatic polynomial is immediate."
      ]
     }
    ],
    "t": "prop",
    "title": "Teorema"
   },
   {
    "t": "hr"
   },
   {
    "t": "check",
    "ex": {
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
    }
   }
  ]
 },
 "examEnd": [
  {
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
  {
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
  {
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
  {
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
  }
 ]
};
