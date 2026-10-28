// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "sections": {
  "14-arbres": [
   {
    "t": "p",
    "x": [
     "Els arbres són útils en el món de la informàtica:",
     "Los árboles son útiles en el mundo de la informática:",
     "Trees are useful in computing:"
    ]
   },
   {
    "items": [
     [
      "Per representar **estructures jeràrquiques** (E.D's).",
      "Para representar **estructuras jerárquicas** (E.D's).",
      "To represent **hierarchical structures** (data structures)."
     ],
     [
      "En **algorismes d'ordenació** de dades.",
      "En **algoritmos de ordenación** de datos.",
      "In data **sorting algorithms**."
     ],
     [
      "En els llenguatges **orientats a objectes** (en el cas d'herència simple expressa una relació jeràrquica).",
      "En los lenguajes **orientados a objetos** (en el caso de herencia simple expresa una relación jerárquica).",
      "In **object-oriented** languages (with single inheritance it expresses a hierarchical relation)."
     ],
     [
      "**Teoria de jocs** (camp d'I.A.).",
      "**Teoría de juegos** (campo de I.A.).",
      "**Game theory** (a field of AI)."
     ]
    ],
    "t": "list"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un **arbre** és un graf `G=(V,E)` **simple** en el qual **existeix un únic camí entre cada parella de vèrtexs**.",
       "Un **árbol** es un grafo `G=(V,E)` **simple** en el cual **existe un único camino entre cada pareja de vértices**.",
       "A **tree** is a **simple** graph `G=(V,E)` in which **there is a unique path between each pair of vertices**."
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
    "id": "14-1-arbres-amb-arrel",
    "t": "h",
    "x": [
     "Arbres amb arrel",
     "Árboles con raíz",
     "Rooted trees"
    ]
   },
   {
    "t": "p",
    "x": [
     "Un graf dirigit `H=(V,E)` s'anomena **arbre** si el graf no dirigit associat és un arbre.",
     "Un grafo dirigido `H=(V,E)` se denomina **árbol** si el grafo no dirigido asociado es un árbol.",
     "A directed graph `H=(V,E)` is called a **tree** if the associated undirected graph is a tree."
    ]
   },
   {
    "t": "p",
    "x": [
     "Un element **a** de V s'anomena **arrel** de H si per a tot vèrtex `v ∈ V` (a≠v) existeix un camí de **a** a v.",
     "Un elemento **a** de V se denomina **raíz** de H si para todo vértice `v ∈ V` (a≠v) existe un camino de **a** a v.",
     "An element **a** of V is called the **root** of H if for every vertex `v ∈ V` (a≠v) there is a path from **a** to v."
    ]
   },
   {
    "items": [
     [
      "Els vèrtexs s'organitzen per **nivells**: l'arrel és el nivell 0.",
      "Los vértices se organizan por **niveles**: la raíz es el nivel 0.",
      "The vertices are organised by **levels**: the root is level 0."
     ],
     [
      "El nivell màxim s'anomena **alçada de l'arbre**.",
      "El nivel máximo se denomina **altura del árbol**.",
      "The maximum level is called the **height of the tree**."
     ],
     [
      "Quan es dibuixa sense fletxes, se sobreentén que el sentit dels costats va de l'arrel cap als vèrtexs de nivell superior.",
      "Cuando se dibuja sin flechas, se sobreentiende que el sentido de los lados va de la raíz hacia los vértices de nivel superior.",
      "When it is drawn without arrows, it is understood that the edges go from the root towards the vertices of higher level."
     ]
    ],
    "t": "list"
   },
   {
    "id": "14-2-propietats-dels-arbres",
    "t": "h",
    "x": [
     "Propietats dels arbres",
     "Propiedades de los árboles",
     "Properties of trees"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si G és un arbre amb n vèrtexs, hi ha **equivalència** entre els següents enunciats:",
       "Si G es un árbol con n vértices, hay **equivalencia** entre los siguientes enunciados:",
       "If G is a tree with n vertices, the following statements are **equivalent**:"
      ]
     },
     {
      "items": [
       [
        "G és un arbre.",
        "G es un árbol.",
        "G is a tree."
       ],
       [
        "G és connex i **no té circuits**.",
        "G es conexo y **no tiene circuitos**.",
        "G is connected and **has no circuits**."
       ],
       [
        "G és connex i té **(n-1) costats**.",
        "G es conexo y tiene **(n-1) lados**.",
        "G is connected and has **(n-1) edges**."
       ],
       [
        "G **no té circuits** i té **(n-1) costats**.",
        "G **no tiene circuitos** y tiene **(n-1) lados**.",
        "G **has no circuits** and has **(n-1) edges**."
       ]
      ],
      "ordered": true,
      "t": "list"
     }
    ],
    "t": "prop",
    "title": "Teorema"
   },
   {
    "id": "14-3-relacions-entre-elements-d-un-arbre",
    "t": "h",
    "x": [
     "Relacions entre elements d'un arbre",
     "Relaciones entre elementos de un árbol",
     "Relations between elements of a tree"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sigui G un arbre amb arrel en `v₀`, i `C=(v₀, v₁, v₂, …, vₙ)` un camí de G (`v₀` de nivell 0, `v₁` de nivell 1, …, `vₙ` de nivell n). Per a tot k (0 ≤ k ≤ n):",
     "Sea G un árbol con raíz en `v₀`, y `C=(v₀, v₁, v₂, …, vₙ)` un camino de G (`v₀` de nivel 0, `v₁` de nivel 1, …, `vₙ` de nivel n). Para todo k (0 ≤ k ≤ n):",
     "Let G be a tree rooted at `v₀`, and `C=(v₀, v₁, v₂, …, vₙ)` a path of G (`v₀` of level 0, `v₁` of level 1, …, `vₙ` of level n). For every k (0 ≤ k ≤ n):"
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
     ]
    ],
    "rows": [
     [
      [
       "**Antecessor**",
       "**Antecesor**",
       "**Parent**"
      ],
      [
       "`v_{k-1}` és l'antecessor de `v_k`",
       "`v_{k-1}` es el antecesor de `v_k`",
       "`v_{k-1}` is the parent of `v_k`"
      ]
     ],
     [
      [
       "**Ascendents**",
       "**Ascendientes**",
       "**Ancestors**"
      ],
      [
       "`v₀, v₁, v₂, …, v_{k-1}` són ascendents de `v_k`",
       "`v₀, v₁, v₂, …, v_{k-1}` son ascendientes de `v_k`",
       "`v₀, v₁, v₂, …, v_{k-1}` are ancestors of `v_k`"
      ]
     ],
     [
      [
       "**Descendent**",
       "**Descendiente**",
       "**Descendant**"
      ],
      [
       "Si a és un ascendent de b, aleshores b és un descendent d'a",
       "Si a es un ascendiente de b, entonces b es un descendiente de a",
       "If a is an ancestor of b, then b is a descendant of a"
      ]
     ],
     [
      [
       "**Germans**",
       "**Hermanos**",
       "**Siblings**"
      ],
      [
       "Si a i b són successors de c, aleshores a i b són germans",
       "Si a y b son sucesores de c, entonces a y b son hermanos",
       "If a and b are children of c, then a and b are siblings"
      ]
     ],
     [
      [
       "**Vèrtex terminal o fulla**",
       "**Vértice terminal u hoja**",
       "**Terminal vertex or leaf**"
      ],
      [
       "Vèrtex que no té successors",
       "Vértice que no tiene sucesores",
       "Vertex that has no children"
      ]
     ],
     [
      [
       "**Vèrtex intern**",
       "**Vértice interno**",
       "**Internal vertex**"
      ],
      [
       "Vèrtex que no és terminal",
       "Vértice que no es terminal",
       "Vertex that is not terminal"
      ]
     ],
     [
      [
       "**Subarbre**",
       "**Subárbol**",
       "**Subtree**"
      ],
      [
       "El subgraf de G format per a i tots els seus descendents, amb arrel en a",
       "El subgrafo de G formado por a y todos sus descendientes, con raíz en a",
       "The subgraph of G formed by a and all its descendants, rooted at a"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "id": "14-4-arbres-m-aris-i-binaris",
    "t": "h",
    "x": [
     "Arbres m-aris i binaris",
     "Árboles m-arios y binarios",
     "m-ary and binary trees"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sigui G un arbre amb arrel:",
     "Sea G un árbol con raíz:",
     "Let G be a rooted tree:"
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
       "**Arbre m-ari**",
       "**Árbol m-ario**",
       "**m-ary tree**"
      ],
      [
       "Cada vèrtex té com a molt **m** fills",
       "Cada vértice tiene como mucho **m** hijos",
       "Each vertex has at most **m** children"
      ]
     ],
     [
      [
       "**Arbre m-ari regular**",
       "**Árbol m-ario regular**",
       "**Full m-ary tree**"
      ],
      [
       "Cada vèrtex **no terminal** té exactament **m** fills",
       "Cada vértice **no terminal** tiene exactamente **m** hijos",
       "Each **non-terminal** vertex has exactly **m** children"
      ]
     ],
     [
      [
       "**Arbre binari**",
       "**Árbol binario**",
       "**Binary tree**"
      ],
      [
       "Arbre m-ari amb **m=2**",
       "Árbol m-ario con **m=2**",
       "m-ary tree with **m=2**"
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
       "Si `G=(V,E)` és un arbre m-ari **regular** de n vèrtexs i **i** d'aquests vèrtexs són interns, es compleixen:",
       "Si `G=(V,E)` es un árbol m-ario **regular** de n vértices y **i** de estos vértices son internos, se cumplen:",
       "If `G=(V,E)` is a **full** m-ary tree with n vertices and **i** of these vertices are internal, then:"
      ]
     },
     {
      "lang": "text",
      "src": [
       "<code>n = m·i + 1\nt = (m-1)·i + 1        (t = nombre de vèrtexs terminals)\n</code>",
       "<code>n = m·i + 1\nt = (m-1)·i + 1        (t = número de vértices terminales)\n</code>",
       "<code>n = m·i + 1\nt = (m-1)·i + 1        (t = number of terminal vertices)\n</code>"
      ],
      "t": "code"
     },
     {
      "t": "p",
      "x": [
       "Per a un arbre **binari regular**: `n = 2i + 1` i `t = i + 1`.",
       "Para un árbol **binario regular**: `n = 2i + 1` y `t = i + 1`.",
       "For a **full binary tree**: `n = 2i + 1` and `t = i + 1`."
      ]
     }
    ],
    "t": "prop",
    "title": [
     "Teorema (propietats dels arbres m-aris)",
     "Teorema (propiedades de los árboles m-arios)",
     "Theorem (properties of m-ary trees)"
    ]
   },
   {
    "t": "p",
    "x": [
     "**Exemple.** Un torneig de tennis és un campionat d'eliminació directa. Amb 64 participants (P₁ … P₆₄), modelem el problema amb un arbre binari:",
     "**Ejemplo.** Un torneo de tenis es un campeonato de eliminación directa. Con 64 participantes (P₁ … P₆₄), modelamos el problema con un árbol binario:",
     "**Example.** A tennis tournament is a knockout competition. With 64 players (P₁ … P₆₄), we model the problem with a binary tree:"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>t = 64        El nombre de partits és el nombre de vèrtexs interns.\nt = i + 1  ⟹  i = 63 partits\n</code>",
     "<code>t = 64        El número de partidos es el número de vértices internos.\nt = i + 1  ⟹  i = 63 partidos\n</code>",
     "<code>t = 64        The number of matches is the number of internal vertices.\nt = i + 1  ⟹  i = 63 matches\n</code>"
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
    }
   }
  ],
  "15-arbres-generadors": [
   {
    "t": "p",
    "x": [
     "Sigui `G=(V,E)` un graf **connex**. Un subgraf `A=(V',E')` de G s'anomena **arbre generador** de G si és un arbre i si `V = V'`.",
     "Sea `G=(V,E)` un grafo **conexo**. Un subgrafo `A=(V',E')` de G se denomina **árbol generador** de G si es un árbol y si `V = V'`.",
     "Let `G=(V,E)` be a **connected** graph. A subgraph `A=(V',E')` of G is called a **spanning tree** of G if it is a tree and `V = V'`."
    ]
   },
   {
    "items": [
     [
      "Un arbre generador A s'obté a partir de G **eliminant alguns dels seus costats**.",
      "Un árbol generador A se obtiene a partir de G **eliminando algunos de sus lados**.",
      "A spanning tree A is obtained from G by **removing some of its edges**."
     ],
     [
      "Normalment un graf té **diferents arbres generadors**.",
      "Normalmente un grafo tiene **diferentes árboles generadores**.",
      "A graph usually has **several different spanning trees**."
     ]
    ],
    "t": "list"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un graf G té un arbre generador **si i només si és un graf connex**.",
       "Un grafo G tiene un árbol generador **si y solo si es un grafo conexo**.",
       "A graph G has a spanning tree **if and only if it is connected**."
      ]
     }
    ],
    "t": "prop",
    "title": "Teorema"
   },
   {
    "t": "p",
    "x": [
     "Sigui `G=(V,E)` un graf connex de n vèrtexs ordenats `v₁, v₂, …, vₙ`. Els algorismes següents construeixen un arbre generador A **amb arrel en el vèrtex v₁**.",
     "Sea `G=(V,E)` un grafo conexo de n vértices ordenados `v₁, v₂, …, vₙ`. Los siguientes algoritmos construyen un árbol generador A **con raíz en el vértice v₁**.",
     "Let `G=(V,E)` be a connected graph with n ordered vertices `v₁, v₂, …, vₙ`. The following algorithms build a spanning tree A **rooted at vertex v₁**."
    ]
   },
   {
    "id": "15-1-metode-1-per-nivells",
    "t": "h",
    "x": [
     "Mètode 1 (per nivells)",
     "Método 1 (por niveles)",
     "Method 1 (by levels)"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>1- Iniciar variables\n   · Sigui S el conjunt format per v₁\n   · Sigui A el subgraf format per v₁\n\n2- Estudi dels costats\n   · Per a cada costat x ∈ S (seguint l'ordre inicial) afegim el costat\n     (x,y) a A si (x,y) ∈ E i si la inclusió d'aquest costat no forma\n     un circuit en A\n   · Si no es poden afegir més costats, el procés s'ha acabat i A és un\n     arbre generador de G\n\n3- Actualització de S\n   · Substituïm S pel conjunt dels fills de S\n   · Tornem al pas 2\n</code>",
     "<code>1- Iniciar variables\n   · Sea S el conjunto formado por v₁\n   · Sea A el subgrafo formado por v₁\n\n2- Estudio de los lados\n   · Para cada lado x ∈ S (siguiendo el orden inicial) añadimos el lado\n     (x,y) a A si (x,y) ∈ E y si la inclusión de este lado no forma\n     un circuito en A\n   · Si no se pueden añadir más lados, el proceso ha terminado y A es un\n     árbol generador de G\n\n3- Actualización de S\n   · Sustituimos S por el conjunto de los hijos de S\n   · Volvemos al paso 2\n</code>",
     "<code>1- Initialise variables\n   · Let S be the set formed by v₁\n   · Let A be the subgraph formed by v₁\n\n2- Study the edges\n   · For each x ∈ S (following the initial order) add the edge\n     (x,y) to A if (x,y) ∈ E and including this edge does not form\n     a circuit in A\n   · If no more edges can be added, the process has finished and A is a\n     spanning tree of G\n\n3- Update S\n   · Replace S by the set of the children of S\n   · Go back to step 2\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "id": "15-2-metode-2-en-profunditat",
    "t": "h",
    "x": [
     "Mètode 2 (en profunditat)",
     "Método 2 (en profundidad)",
     "Method 2 (depth-first)"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>1- Iniciar variables\n   · Sigui w = v₁ (v₁ és l'arrel)\n   · Sigui A el subgraf format per v₁\n\n2- Estudi dels costats\n   · Considerem el costat (w,vᵢ) per i mínim (seguint l'ordre inicial)\n     si (w,vᵢ) ∈ E i no forma un circuit en A\n   · Si no existeix un costat que verifiqui aquestes condicions, anem al pas 3\n   · En cas contrari, afegim el costat (w,vᵢ) a A, fem w = vᵢ i tornem al pas 2\n\n3- Verificar si hem acabat\n   · Si (w = v₁), hem acabat i A és un arbre generador\n   · En cas contrari, anem al pas 4\n\n4- Tornem al nivell anterior\n   · Sigui x el pare de w. Fem w = x i tornem al pas 2\n</code>",
     "<code>1- Iniciar variables\n   · Sea w = v₁ (v₁ es la raíz)\n   · Sea A el subgrafo formado por v₁\n\n2- Estudio de los lados\n   · Consideramos el lado (w,vᵢ) para i mínimo (siguiendo el orden inicial)\n     si (w,vᵢ) ∈ E y no forma un circuito en A\n   · Si no existe un lado que verifique estas condiciones, vamos al paso 3\n   · En caso contrario, añadimos el lado (w,vᵢ) a A, hacemos w = vᵢ y\n     volvemos al paso 2\n\n3- Verificar si hemos acabado\n   · Si (w = v₁), hemos acabado y A es un árbol generador\n   · En caso contrario, vamos al paso 4\n\n4- Volvemos al nivel anterior\n   · Sea x el padre de w. Hacemos w = x y volvemos al paso 2\n</code>",
     "<code>1- Initialise variables\n   · Let w = v₁ (v₁ is the root)\n   · Let A be the subgraph formed by v₁\n\n2- Study the edges\n   · Consider the edge (w,vᵢ) for the smallest i (following the initial order)\n     if (w,vᵢ) ∈ E and it does not form a circuit in A\n   · If no edge meets these conditions, go to step 3\n   · Otherwise, add the edge (w,vᵢ) to A, set w = vᵢ and\n     go back to step 2\n\n3- Check whether we have finished\n   · If (w = v₁), we have finished and A is a spanning tree\n   · Otherwise, go to step 4\n\n4- Go back to the previous level\n   · Let x be the parent of w. Set w = x and go back to step 2\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "id": "15-3-arbres-generadors-minimals",
    "t": "h",
    "x": [
     "Arbres generadors minimals",
     "Árboles generadores minimales",
     "Minimum spanning trees"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sigui `G=(V,E)` un graf **ponderat** i G' un subgraf de G:",
     "Sea `G=(V,E)` un grafo **ponderado** y G' un subgrafo de G:",
     "Let `G=(V,E)` be a **weighted** graph and G' a subgraph of G:"
    ]
   },
   {
    "items": [
     [
      "El **pes** del subgraf G' és la **suma dels pesos** de tots els costats de G'.",
      "El **peso** del subgrafo G' es la **suma de los pesos** de todos los lados de G'.",
      "The **weight** of the subgraph G' is the **sum of the weights** of all the edges of G'."
     ],
     [
      "Un **arbre generador minimal** de G és un arbre generador A que tingui un pes **inferior o igual** a qualsevol altre arbre generador de G.",
      "Un **árbol generador minimal** de G es un árbol generador A que tenga un peso **inferior o igual** a cualquier otro árbol generador de G.",
      "A **minimum spanning tree** of G is a spanning tree A whose weight is **less than or equal to** that of any other spanning tree of G."
     ]
    ],
    "t": "list"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si el graf `G=(V,E)` **no és ponderat**, podem assignar un pes igual a 1 a cada costat; llavors **tots** els arbres generadors de G són minimals i el seu pes és `|V| − 1`.",
       "Si el grafo `G=(V,E)` **no es ponderado**, podemos asignar un peso igual a 1 a cada lado; entonces **todos** los árboles generadores de G son minimales y su peso es `|V| − 1`.",
       "If the graph `G=(V,E)` **is not weighted**, we can give each edge a weight of 1; then **all** the spanning trees of G are minimum and their weight is `|V| − 1`."
      ]
     }
    ],
    "t": "note",
    "mode": "explained"
   },
   {
    "id": "metode-1-algorisme-de-prim",
    "t": "h",
    "x": [
     "Mètode 1 — algorisme de Prim",
     "Método 1 — algoritmo de Prim",
     "Method 1 — Prim's algorithm"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sigui `G=(V,E)` un graf connex i ponderat de n vèrtexs ordenats `v₁, v₂, …, vₙ`:",
     "Sea `G=(V,E)` un grafo conexo y ponderado de n vértices ordenados `v₁, v₂, …, vₙ`:",
     "Let `G=(V,E)` be a connected weighted graph with n ordered vertices `v₁, v₂, …, vₙ`:"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>1- Iniciar variables\n   · Sigui A l'arbre sense costats format únicament pel vèrtex v₁\n\n2- Comprovar si hem acabat\n   · Si V(A) = V hem acabat. En cas contrari, seguim amb el pas 3\n\n3- Afegir costat\n   · El costat ha d'ésser tal que: tingui pes mínim, pertanyi a E i no a A,\n     sigui incident en algun vèrtex d'A i en afegir-lo no pugui formar cap\n     circuit en A (si més d'un costat compleix les condicions, escollim el\n     que tingui subíndex més petit)\n   · Tornem al pas 2\n</code>",
     "<code>1- Iniciar variables\n   · Sea A el árbol sin lados formado únicamente por el vértice v₁\n\n2- Comprobar si hemos acabado\n   · Si V(A) = V hemos acabado. En caso contrario, seguimos con el paso 3\n\n3- Añadir lado\n   · El lado ha de ser tal que: tenga peso mínimo, pertenezca a E y no a A,\n     sea incidente en algún vértice de A y al añadirlo no pueda formar\n     ningún circuito en A (si más de un lado cumple las condiciones,\n     escogemos el que tenga subíndice más pequeño)\n   · Volvemos al paso 2\n</code>",
     "<code>1- Initialise variables\n   · Let A be the tree without edges formed only by vertex v₁\n\n2- Check whether we have finished\n   · If V(A) = V we have finished. Otherwise, continue with step 3\n\n3- Add an edge\n   · The edge must: have minimum weight, belong to E and not to A,\n     be incident to some vertex of A and, when added, not form\n     any circuit in A (if more than one edge meets the conditions,\n     choose the one with the smallest subscript)\n   · Go back to step 2\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "El mètode 1 és l'anomenat **algorisme de Prim**. Donat un graf connex i ponderat G, la seva aplicació **genera un arbre generador minimal** A de G.",
       "El método 1 es el llamado **algoritmo de Prim**. Dado un grafo conexo y ponderado G, su aplicación **genera un árbol generador minimal** A de G.",
       "Method 1 is the so-called **Prim's algorithm**. Given a connected weighted graph G, applying it **produces a minimum spanning tree** A of G."
      ]
     }
    ],
    "t": "prop",
    "title": "Teorema"
   },
   {
    "id": "metode-2-algorisme-de-kruskal",
    "t": "h",
    "x": [
     "Mètode 2 — algorisme de Kruskal",
     "Método 2 — algoritmo de Kruskal",
     "Method 2 — Kruskal's algorithm"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sigui `G=(V,E)` un graf connex i ponderat de n vèrtexs, amb `E={e₁, e₂, …, eₙ}` on el pes de cada costat `ℓ(eᵢ)` compleix `ℓ(e₁) ≤ ℓ(e₂) ≤ … ≤ ℓ(eₙ)`:",
     "Sea `G=(V,E)` un grafo conexo y ponderado de n vértices, con `E={e₁, e₂, …, eₙ}` donde el peso de cada lado `ℓ(eᵢ)` cumple `ℓ(e₁) ≤ ℓ(e₂) ≤ … ≤ ℓ(eₙ)`:",
     "Let `G=(V,E)` be a connected weighted graph with n vertices, with `E={e₁, e₂, …, eₙ}` where the weight of each edge `ℓ(eᵢ)` satisfies `ℓ(e₁) ≤ ℓ(e₂) ≤ … ≤ ℓ(eₙ)`:"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>1- Iniciar variables\n   · Sigui A l'arbre sense costats E(A)=∅ format per tots els vèrtexs\n     de G, V(A)=V\n\n2- Comprovar si hem acabat\n   · Si A conté n-1 costats, hem acabat. En cas contrari, seguim amb el pas 3\n\n3- Afegir costat\n   · El costat ha d'ésser tal que: tingui pes mínim, pertanyi a E i no a A,\n     i en afegir-lo no pugui formar cap circuit en A (si més d'un costat\n     compleix les condicions, escollim el costat segons l'ordre inicialment\n     definit per ℓ(eᵢ))\n   · Tornem al pas 2\n</code>",
     "<code>1- Iniciar variables\n   · Sea A el árbol sin lados E(A)=∅ formado por todos los vértices\n     de G, V(A)=V\n\n2- Comprobar si hemos acabado\n   · Si A contiene n-1 lados, hemos acabado. En caso contrario, seguimos\n     con el paso 3\n\n3- Añadir lado\n   · El lado ha de ser tal que: tenga peso mínimo, pertenezca a E y no a A,\n     y al añadirlo no pueda formar ningún circuito en A (si más de un lado\n     cumple las condiciones, escogemos el lado según el orden inicialmente\n     definido por ℓ(eᵢ))\n   · Volvemos al paso 2\n</code>",
     "<code>1- Initialise variables\n   · Let A be the tree without edges E(A)=∅ formed by all the vertices\n     of G, V(A)=V\n\n2- Check whether we have finished\n   · If A contains n-1 edges, we have finished. Otherwise, continue\n     with step 3\n\n3- Add an edge\n   · The edge must: have minimum weight, belong to E and not to A,\n     and, when added, not form any circuit in A (if more than one edge\n     meets the conditions, choose the edge according to the order\n     initially defined by ℓ(eᵢ))\n   · Go back to step 2\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "El mètode 2 és l'anomenat **algorisme de Kruskal**. Donat un graf connex i ponderat G, la seva aplicació **genera un arbre generador minimal** A de G.",
       "El método 2 es el llamado **algoritmo de Kruskal**. Dado un grafo conexo y ponderado G, su aplicación **genera un árbol generador minimal** A de G.",
       "Method 2 is the so-called **Kruskal's algorithm**. Given a connected weighted graph G, applying it **produces a minimum spanning tree** A of G."
      ]
     }
    ],
    "t": "prop",
    "title": "Teorema"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Prim** fa créixer **un únic arbre** des d'un vèrtex inicial: cada costat que afegeix ha de tocar l'arbre que ja té. **Kruskal** parteix de tots els vèrtexs solts i va afegint els costats **més barats del graf sencer**, formant diversos trossos que acaben unint-se.",
       "**Prim** hace crecer **un único árbol** desde un vértice inicial: cada lado que añade ha de tocar el árbol que ya tiene. **Kruskal** parte de todos los vértices sueltos y va añadiendo los lados **más baratos del grafo entero**, formando varios trozos que acaban uniéndose.",
       "**Prim** grows **a single tree** from a starting vertex: each edge it adds must touch the tree it already has. **Kruskal** starts from all the vertices on their own and keeps adding the **cheapest edges of the whole graph**, forming several pieces that end up joining."
      ]
     }
    ],
    "t": "tip",
    "title": [
     "Diferència entre Prim i Kruskal",
     "Diferencia entre Prim y Kruskal",
     "Difference between Prim and Kruskal"
    ],
    "mode": "explained"
   },
   {
    "t": "hr"
   },
   {
    "t": "check",
    "ex": {
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
    }
   }
  ],
  "16-recorreguts-d-un-graf": [
   {
    "t": "p",
    "x": [
     "Aquests recorreguts són el marc teòric d'altres tècniques que s'utilitzen per resoldre problemes de cerca (en intel·ligència artificial) o per modelar xarxes de comunicacions.",
     "Estos recorridos son el marco teórico de otras técnicas que se utilizan para resolver problemas de búsqueda (en inteligencia artificial) o para modelar redes de comunicaciones.",
     "These traversals are the theoretical framework for other techniques used to solve search problems (in artificial intelligence) or to model communication networks."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Donat un graf simple `G=(V,A)`, un **recorregut** en G és una seqüència de vèrtexs `v₁, v₂, …, v_k` en què dos vèrtexs consecutius `vᵢ` i `v_{i+1}` de la seqüència tenen una aresta `{vᵢ,v_{i+1}}` en G.",
       "Dado un grafo simple `G=(V,A)`, un **recorrido** en G es una secuencia de vértices `v₁, v₂, …, v_k` en que dos vértices consecutivos `vᵢ` y `v_{i+1}` de la secuencia tienen una arista `{vᵢ,v_{i+1}}` en G.",
       "Given a simple graph `G=(V,A)`, a **walk** in G is a sequence of vertices `v₁, v₂, …, v_k` in which two consecutive vertices `vᵢ` and `v_{i+1}` of the sequence have an edge `{vᵢ,v_{i+1}}` in G."
      ]
     },
     {
      "t": "p",
      "x": [
       "Si G és dirigit s'anomena **recorregut orientat o dirigit**, i cal un arc `(vᵢ,v_{i+1})`.",
       "Si G es dirigido se denomina **recorrido orientado o dirigido**, y hace falta un arco `(vᵢ,v_{i+1})`.",
       "If G is directed it is called a **directed walk**, and an arc `(vᵢ,v_{i+1})` is needed."
      ]
     },
     {
      "t": "p",
      "x": [
       "El recorregut entre `v₁` i `v_k` s'anomena `v₁-v_k` recorregut. La **longitud** d'un recorregut és el nombre d'arestes que el componen.",
       "El recorrido entre `v₁` y `v_k` se denomina `v₁-v_k` recorrido. La **longitud** de un recorrido es el número de aristas que lo componen.",
       "The walk between `v₁` and `v_k` is called a `v₁-v_k` walk. The **length** of a walk is the number of edges that make it up."
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
    "t": "p",
    "x": [
     "Els dos mètodes bàsics d'exploració:",
     "Los dos métodos básicos de exploración:",
     "The two basic exploration methods:"
    ]
   },
   {
    "head": [
     [
      "Mètode",
      "Método",
      "Method"
     ],
     [
      "Nom",
      "Nombre",
      "Name"
     ],
     [
      "Estructura de dades",
      "Estructura de datos",
      "Data structure"
     ]
    ],
    "rows": [
     [
      "**DFS**",
      [
       "*Depth First Search* — cerca en profunditat prioritària",
       "*Depth First Search* — búsqueda en profundidad prioritaria",
       "*Depth First Search*"
      ],
      "**Pila**"
     ],
     [
      "**BFS**",
      [
       "*Breadth First Search* — cerca en amplada prioritària",
       "*Breadth First Search* — búsqueda en anchura prioritaria",
       "*Breadth First Search*"
      ],
      [
       "**Cua**",
       "**Cola**",
       "**Queue**"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "t": "h",
    "id": "16-1-dfs-depth-first-search",
    "x": "DFS (Depth First Search)"
   },
   {
    "t": "p",
    "x": [
     "Es comença l'exploració per un vèrtex inicial `v₁` i es van recorrent tots els vèrtexs del graf sense repetir-ne cap. **S'avança en profunditat**: a partir de `v₁` es visita un dels seus adjacents, sigui `v₂`, i després es parteix de `v₂` i es visita un adjacent de `v₂`. És a dir, **avançar per una via i oblidar-se, de moment, de les alternatives**.",
     "Se comienza la exploración por un vértice inicial `v₁` y se van recorriendo todos los vértices del grafo sin repetir ninguno. **Se avanza en profundidad**: a partir de `v₁` se visita uno de sus adyacentes, sea `v₂`, y después se parte de `v₂` y se visita un adyacente de `v₂`. Es decir, **avanzar por una vía y olvidarse, de momento, de las alternativas**.",
     "The exploration starts at an initial vertex `v₁` and goes through all the vertices of the graph without repeating any. **It goes in depth**: from `v₁` one of its neighbours is visited, say `v₂`, and then from `v₂` a neighbour of `v₂` is visited. That is, **go down one route and forget, for now, about the alternatives**."
    ],
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "Si s'arriba a un vèrtex on no és possible seguir amb el recorregut, cal **tornar enrere** i eliminar-lo (*backtracking* o retrocés).",
     "Si se llega a un vértice donde no es posible seguir con el recorrido, hay que **volver atrás** y eliminarlo (*backtracking* o retroceso).",
     "If you reach a vertex where the traversal cannot continue, you have to **go back** and remove it (*backtracking*)."
    ]
   },
   {
    "head": [
     [
      "Notació",
      "Notación",
      "Notation"
     ],
     [
      "Significat",
      "Significado",
      "Meaning"
     ]
    ],
    "rows": [
     [
      "`v₁`",
      [
       "Vèrtex inicial (de partida)",
       "Vértice inicial (de partida)",
       "Initial (starting) vertex"
      ]
     ],
     [
      "`P`",
      [
       "Conjunt de vèrtexs per recordar l'ordre en què s'han visitat i poder retrocedir — **estructura de dades pila**",
       "Conjunto de vértices para recordar el orden en que se han visitado y poder retroceder — **estructura de datos pila**",
       "Set of vertices to remember the order in which they were visited and to be able to go back — **stack data structure**"
      ]
     ],
     [
      [
       "`visitat(1..K)`",
       "`visitado(1..K)`",
       "`visitado(1..K)`"
      ],
      [
       "Taula de booleans per recordar els vèrtexs visitats fins al moment",
       "Tabla de booleanos para recordar los vértices visitados hasta el momento",
       "Table of booleans to remember the vertices visited so far"
      ]
     ],
     [
      "`R`",
      [
       "Llista resultat que conté tots els vèrtexs del graf visitats",
       "Lista resultado que contiene todos los vértices del grafo visitados",
       "Result list containing all the visited vertices of the graph"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "lang": "text",
    "src": [
     "<code>Iniciar valors:\n    P ← ∅                          {crear la pila}\n    Empilar(P, v₁)\n    Per a cada vèrtex visitat(i) ← fals\n    visitat(1) ← cert\n\nMentre no buida (P) fer\n    vertexActual ← cim(P)\n    Si vertexActual és adjacent a un vèrtex vᵢ no visitat llavors\n        empilar(P, vᵢ)\n        visitat(i) ← cert;  afegir(R, vᵢ)\n    altrament\n        desempilar(P)\n    Fi_si\n</code>",
     "<code>Iniciar valores:\n    P ← ∅                          {crear la pila}\n    Apilar(P, v₁)\n    Para cada vértice visitado(i) ← falso\n    visitado(1) ← cierto\n\nMientras no vacía (P) hacer\n    verticeActual ← cima(P)\n    Si verticeActual es adyacente a un vértice vᵢ no visitado entonces\n        apilar(P, vᵢ)\n        visitado(i) ← cierto;  añadir(R, vᵢ)\n    si_no\n        desapilar(P)\n    Fin_si\n</code>",
     "<code>Initialise values:\n    P ← ∅                          {create the stack}\n    Push(P, v₁)\n    For each vertex visited(i) ← false\n    visited(1) ← true\n\nWhile not empty (P) do\n    currentVertex ← top(P)\n    If currentVertex is adjacent to an unvisited vertex vᵢ then\n        push(P, vᵢ)\n        visited(i) ← true;  add(R, vᵢ)\n    else\n        pop(P)\n    End_if\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si hi ha més d'un adjacent, primer agafem el d'índex més petit.",
       "Si hay más de un adyacente, primero tomamos el de índice más pequeño.",
       "If there is more than one neighbour, we take the one with the smallest index first."
      ]
     }
    ],
    "t": "note",
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "**Exemple:** `R = (v₁, v₂, v₄, v₃, v₅, v₆, v₇)`",
     "**Ejemplo:** `R = (v₁, v₂, v₄, v₃, v₅, v₆, v₇)`",
     "**Example:** `R = (v₁, v₂, v₄, v₃, v₅, v₆, v₇)`"
    ]
   },
   {
    "t": "h",
    "id": "16-2-bfs-breadth-first-search",
    "x": "BFS (Breadth First Search)"
   },
   {
    "t": "p",
    "x": [
     "Es comença per un vèrtex inicial `v₁` i **s'avança en amplada**: a partir de `v₁` es visiten **tots** els seus adjacents, i després els adjacents no visitats dels adjacents de `v₁`, i així successivament. A cada pas es **prioritzen les diferents vies** que es poden visitar des d'un determinat vèrtex.",
     "Se comienza por un vértice inicial `v₁` y **se avanza en anchura**: a partir de `v₁` se visitan **todos** sus adyacentes, y después los adyacentes no visitados de los adyacentes de `v₁`, y así sucesivamente. En cada paso se **priorizan las diferentes vías** que se pueden visitar desde un determinado vértice.",
     "It starts at an initial vertex `v₁` and **goes in breadth**: from `v₁` **all** its neighbours are visited, then the unvisited neighbours of the neighbours of `v₁`, and so on. At each step **the different routes** that can be visited from a given vertex are **given priority**."
    ]
   },
   {
    "head": [
     [
      "Notació",
      "Notación",
      "Notation"
     ],
     [
      "Significat",
      "Significado",
      "Meaning"
     ]
    ],
    "rows": [
     [
      "`Q`",
      [
       "Conjunt de vèrtexs per recordar l'ordre i prosseguir l'exploració per nivells — **estructura de dades cua**",
       "Conjunto de vértices para recordar el orden y proseguir la exploración por niveles — **estructura de datos cola**",
       "Set of vertices to remember the order and continue the exploration by levels — **queue data structure**"
      ]
     ],
     [
      [
       "`visitat(1..K)`",
       "`visitado(1..K)`",
       "`visitado(1..K)`"
      ],
      [
       "Taula de booleans",
       "Tabla de booleanos",
       "Table of booleans"
      ]
     ],
     [
      "`R`",
      [
       "Llista resultat",
       "Lista resultado",
       "Result list"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "lang": "text",
    "src": [
     "<code>Iniciar valors:\n    Q ← ∅                          {crear la cua}\n    ALaCua(Q, v₁)\n    Per a cada vèrtex visitat(i) ← fals\n    visitat(1) ← cert\n\nMentre no buida (Q) fer\n    vertexActual ← QuiLiToca(Q)\n    Per cada vèrtex vᵢ no visitat adjacent al vertexActual\n        ALaCua(Q, vᵢ)\n        visitat(i) ← cert;  afegir(R, vᵢ)\n    Fi_Des_de\n    ServirLaCua(Q)                 {eliminar de la cua Q}\n</code>",
     "<code>Iniciar valores:\n    Q ← ∅                          {crear la cola}\n    ALaCola(Q, v₁)\n    Para cada vértice visitado(i) ← falso\n    visitado(1) ← cierto\n\nMientras no vacía (Q) hacer\n    verticeActual ← QuienLeToca(Q)\n    Para cada vértice vᵢ no visitado adyacente al verticeActual\n        ALaCola(Q, vᵢ)\n        visitado(i) ← cierto;  añadir(R, vᵢ)\n    Fin_Desde\n    ServirLaCola(Q)                {eliminar de la cola Q}\n</code>",
     "<code>Initialise values:\n    Q ← ∅                          {create the queue}\n    Enqueue(Q, v₁)\n    For each vertex visited(i) ← false\n    visited(1) ← true\n\nWhile not empty (Q) do\n    currentVertex ← Front(Q)\n    For each unvisited vertex vᵢ adjacent to currentVertex\n        Enqueue(Q, vᵢ)\n        visited(i) ← true;  add(R, vᵢ)\n    End_for\n    Dequeue(Q)                     {remove from queue Q}\n</code>"
    ],
    "t": "code",
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "**Exemple:** `R = (v₁, v₂, v₃, v₄, v₅, v₆, v₇)`",
     "**Ejemplo:** `R = (v₁, v₂, v₃, v₄, v₅, v₆, v₇)`",
     "**Example:** `R = (v₁, v₂, v₃, v₄, v₅, v₆, v₇)`"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Sobre el **mateix graf**, DFS dona `(v₁, v₂, v₄, v₃, v₅, v₆, v₇)` i BFS dona `(v₁, v₂, v₃, v₄, v₅, v₆, v₇)`. DFS s'endinsa per una branca; BFS completa cada nivell abans de baixar.",
       "Sobre el **mismo grafo**, DFS da `(v₁, v₂, v₄, v₃, v₅, v₆, v₇)` y BFS da `(v₁, v₂, v₃, v₄, v₅, v₆, v₇)`. DFS se adentra por una rama; BFS completa cada nivel antes de bajar.",
       "On the **same graph**, DFS gives `(v₁, v₂, v₄, v₃, v₅, v₆, v₇)` and BFS gives `(v₁, v₂, v₃, v₄, v₅, v₆, v₇)`. DFS goes deep down one branch; BFS completes each level before going down."
      ]
     }
    ],
    "t": "tip",
    "title": [
     "Compara els dos resultats",
     "Compara los dos resultados",
     "Compare the two results"
    ],
    "mode": "explained"
   },
   {
    "t": "hr"
   },
   {
    "t": "check",
    "ex": {
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
    }
   }
  ]
 },
 "examEnd": [
  {
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
  {
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
  {
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
  }
 ]
};
