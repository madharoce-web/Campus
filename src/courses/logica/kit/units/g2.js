// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "sections": {
  "14-arbres": [
   {
    "t": "p",
    "x": [
     "Els arbres són útils en el món de la informàtica:",
     "Los árboles son útiles en el mundo de la informática:"
    ]
   },
   {
    "items": [
     [
      "Per representar **estructures jeràrquiques** (E.D's).",
      "Para representar **estructuras jerárquicas** (E.D's)."
     ],
     [
      "En **algorismes d'ordenació** de dades.",
      "En **algoritmos de ordenación** de datos."
     ],
     [
      "En els llenguatges **orientats a objectes** (en el cas d'herència simple expressa una relació jeràrquica).",
      "En los lenguajes **orientados a objetos** (en el caso de herencia simple expresa una relación jerárquica)."
     ],
     [
      "**Teoria de jocs** (camp d'I.A.).",
      "**Teoría de juegos** (campo de I.A.)."
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
       "Un **árbol** es un grafo `G=(V,E)` **simple** en el cual **existe un único camino entre cada pareja de vértices**."
      ]
     }
    ],
    "t": "note",
    "title": [
     "Definició",
     "Definición"
    ]
   },
   {
    "id": "14-1-arbres-amb-arrel",
    "t": "h",
    "x": [
     "Arbres amb arrel",
     "Árboles con raíz"
    ]
   },
   {
    "t": "p",
    "x": [
     "Un graf dirigit `H=(V,E)` s'anomena **arbre** si el graf no dirigit associat és un arbre.",
     "Un grafo dirigido `H=(V,E)` se denomina **árbol** si el grafo no dirigido asociado es un árbol."
    ]
   },
   {
    "t": "p",
    "x": [
     "Un element **a** de V s'anomena **arrel** de H si per a tot vèrtex `v ∈ V` (a≠v) existeix un camí de **a** a v.",
     "Un elemento **a** de V se denomina **raíz** de H si para todo vértice `v ∈ V` (a≠v) existe un camino de **a** a v."
    ]
   },
   {
    "items": [
     [
      "Els vèrtexs s'organitzen per **nivells**: l'arrel és el nivell 0.",
      "Los vértices se organizan por **niveles**: la raíz es el nivel 0."
     ],
     [
      "El nivell màxim s'anomena **alçada de l'arbre**.",
      "El nivel máximo se denomina **altura del árbol**."
     ],
     [
      "Quan es dibuixa sense fletxes, se sobreentén que el sentit dels costats va de l'arrel cap als vèrtexs de nivell superior.",
      "Cuando se dibuja sin flechas, se sobreentiende que el sentido de los lados va de la raíz hacia los vértices de nivel superior."
     ]
    ],
    "t": "list"
   },
   {
    "id": "14-2-propietats-dels-arbres",
    "t": "h",
    "x": [
     "Propietats dels arbres",
     "Propiedades de los árboles"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si G és un arbre amb n vèrtexs, hi ha **equivalència** entre els següents enunciats:",
       "Si G es un árbol con n vértices, hay **equivalencia** entre los siguientes enunciados:"
      ]
     },
     {
      "items": [
       [
        "G és un arbre.",
        "G es un árbol."
       ],
       [
        "G és connex i **no té circuits**.",
        "G es conexo y **no tiene circuitos**."
       ],
       [
        "G és connex i té **(n-1) costats**.",
        "G es conexo y tiene **(n-1) lados**."
       ],
       [
        "G **no té circuits** i té **(n-1) costats**.",
        "G **no tiene circuitos** y tiene **(n-1) lados**."
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
     "Relaciones entre elementos de un árbol"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sigui G un arbre amb arrel en `v₀`, i `C=(v₀, v₁, v₂, …, vₙ)` un camí de G (`v₀` de nivell 0, `v₁` de nivell 1, …, `vₙ` de nivell n). Per a tot k (0 ≤ k ≤ n):",
     "Sea G un árbol con raíz en `v₀`, y `C=(v₀, v₁, v₂, …, vₙ)` un camino de G (`v₀` de nivel 0, `v₁` de nivel 1, …, `vₙ` de nivel n). Para todo k (0 ≤ k ≤ n):"
    ]
   },
   {
    "head": [
     [
      "Relació",
      "Relación"
     ],
     [
      "Definició",
      "Definición"
     ]
    ],
    "rows": [
     [
      [
       "**Antecessor**",
       "**Antecesor**"
      ],
      [
       "`v_{k-1}` és l'antecessor de `v_k`",
       "`v_{k-1}` es el antecesor de `v_k`"
      ]
     ],
     [
      [
       "**Ascendents**",
       "**Ascendientes**"
      ],
      [
       "`v₀, v₁, v₂, …, v_{k-1}` són ascendents de `v_k`",
       "`v₀, v₁, v₂, …, v_{k-1}` son ascendientes de `v_k`"
      ]
     ],
     [
      [
       "**Descendent**",
       "**Descendiente**"
      ],
      [
       "Si a és un ascendent de b, aleshores b és un descendent d'a",
       "Si a es un ascendiente de b, entonces b es un descendiente de a"
      ]
     ],
     [
      [
       "**Germans**",
       "**Hermanos**"
      ],
      [
       "Si a i b són successors de c, aleshores a i b són germans",
       "Si a y b son sucesores de c, entonces a y b son hermanos"
      ]
     ],
     [
      [
       "**Vèrtex terminal o fulla**",
       "**Vértice terminal u hoja**"
      ],
      [
       "Vèrtex que no té successors",
       "Vértice que no tiene sucesores"
      ]
     ],
     [
      [
       "**Vèrtex intern**",
       "**Vértice interno**"
      ],
      [
       "Vèrtex que no és terminal",
       "Vértice que no es terminal"
      ]
     ],
     [
      [
       "**Subarbre**",
       "**Subárbol**"
      ],
      [
       "El subgraf de G format per a i tots els seus descendents, amb arrel en a",
       "El subgrafo de G formado por a y todos sus descendientes, con raíz en a"
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
     "Árboles m-arios y binarios"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sigui G un arbre amb arrel:",
     "Sea G un árbol con raíz:"
    ]
   },
   {
    "head": [
     [
      "Concepte",
      "Concepto"
     ],
     [
      "Definició",
      "Definición"
     ]
    ],
    "rows": [
     [
      [
       "**Arbre m-ari**",
       "**Árbol m-ario**"
      ],
      [
       "Cada vèrtex té com a molt **m** fills",
       "Cada vértice tiene como mucho **m** hijos"
      ]
     ],
     [
      [
       "**Arbre m-ari regular**",
       "**Árbol m-ario regular**"
      ],
      [
       "Cada vèrtex **no terminal** té exactament **m** fills",
       "Cada vértice **no terminal** tiene exactamente **m** hijos"
      ]
     ],
     [
      [
       "**Arbre binari**",
       "**Árbol binario**"
      ],
      [
       "Arbre m-ari amb **m=2**",
       "Árbol m-ario con **m=2**"
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
       "Si `G=(V,E)` es un árbol m-ario **regular** de n vértices y **i** de estos vértices son internos, se cumplen:"
      ]
     },
     {
      "lang": "text",
      "src": [
       "<code>n = m·i + 1\nt = (m-1)·i + 1        (t = nombre de vèrtexs terminals)\n</code>",
       "<code>n = m·i + 1\nt = (m-1)·i + 1        (t = número de vértices terminales)\n</code>"
      ],
      "t": "code"
     },
     {
      "t": "p",
      "x": [
       "Per a un arbre **binari regular**: `n = 2i + 1` i `t = i + 1`.",
       "Para un árbol **binario regular**: `n = 2i + 1` y `t = i + 1`."
      ]
     }
    ],
    "t": "prop",
    "title": [
     "Teorema (propietats dels arbres m-aris)",
     "Teorema (propiedades de los árboles m-arios)"
    ]
   },
   {
    "t": "p",
    "x": [
     "**Exemple.** Un torneig de tennis és un campionat d'eliminació directa. Amb 64 participants (P₁ … P₆₄), modelem el problema amb un arbre binari:",
     "**Ejemplo.** Un torneo de tenis es un campeonato de eliminación directa. Con 64 participantes (P₁ … P₆₄), modelamos el problema con un árbol binario:"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>t = 64        El nombre de partits és el nombre de vèrtexs interns.\nt = i + 1  ⟹  i = 63 partits\n</code>",
     "<code>t = 64        El número de partidos es el número de vértices internos.\nt = i + 1  ⟹  i = 63 partidos\n</code>"
    ],
    "t": "code"
   },
   {
    "t": "hr"
   }
  ],
  "15-arbres-generadors": [
   {
    "t": "p",
    "x": [
     "Sigui `G=(V,E)` un graf **connex**. Un subgraf `A=(V',E')` de G s'anomena **arbre generador** de G si és un arbre i si `V = V'`.",
     "Sea `G=(V,E)` un grafo **conexo**. Un subgrafo `A=(V',E')` de G se denomina **árbol generador** de G si es un árbol y si `V = V'`."
    ]
   },
   {
    "items": [
     [
      "Un arbre generador A s'obté a partir de G **eliminant alguns dels seus costats**.",
      "Un árbol generador A se obtiene a partir de G **eliminando algunos de sus lados**."
     ],
     [
      "Normalment un graf té **diferents arbres generadors**.",
      "Normalmente un grafo tiene **diferentes árboles generadores**."
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
       "Un grafo G tiene un árbol generador **si y solo si es un grafo conexo**."
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
     "Sea `G=(V,E)` un grafo conexo de n vértices ordenados `v₁, v₂, …, vₙ`. Los siguientes algoritmos construyen un árbol generador A **con raíz en el vértice v₁**."
    ]
   },
   {
    "id": "15-1-metode-1-per-nivells",
    "t": "h",
    "x": [
     "Mètode 1 (per nivells)",
     "Método 1 (por niveles)"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>1- Iniciar variables\n   · Sigui S el conjunt format per v₁\n   · Sigui A el subgraf format per v₁\n\n2- Estudi dels costats\n   · Per a cada costat x ∈ S (seguint l'ordre inicial) afegim el costat\n     (x,y) a A si (x,y) ∈ E i si la inclusió d'aquest costat no forma\n     un circuit en A\n   · Si no es poden afegir més costats, el procés s'ha acabat i A és un\n     arbre generador de G\n\n3- Actualització de S\n   · Substituïm S pel conjunt dels fills de S\n   · Tornem al pas 2\n</code>",
     "<code>1- Iniciar variables\n   · Sea S el conjunto formado por v₁\n   · Sea A el subgrafo formado por v₁\n\n2- Estudio de los lados\n   · Para cada lado x ∈ S (siguiendo el orden inicial) añadimos el lado\n     (x,y) a A si (x,y) ∈ E y si la inclusión de este lado no forma\n     un circuito en A\n   · Si no se pueden añadir más lados, el proceso ha terminado y A es un\n     árbol generador de G\n\n3- Actualización de S\n   · Sustituimos S por el conjunto de los hijos de S\n   · Volvemos al paso 2\n</code>"
    ],
    "t": "code"
   },
   {
    "id": "15-2-metode-2-en-profunditat",
    "t": "h",
    "x": [
     "Mètode 2 (en profunditat)",
     "Método 2 (en profundidad)"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>1- Iniciar variables\n   · Sigui w = v₁ (v₁ és l'arrel)\n   · Sigui A el subgraf format per v₁\n\n2- Estudi dels costats\n   · Considerem el costat (w,vᵢ) per i mínim (seguint l'ordre inicial)\n     si (w,vᵢ) ∈ E i no forma un circuit en A\n   · Si no existeix un costat que verifiqui aquestes condicions, anem al pas 3\n   · En cas contrari, afegim el costat (w,vᵢ) a A, fem w = vᵢ i tornem al pas 2\n\n3- Verificar si hem acabat\n   · Si (w = v₁), hem acabat i A és un arbre generador\n   · En cas contrari, anem al pas 4\n\n4- Tornem al nivell anterior\n   · Sigui x el pare de w. Fem w = x i tornem al pas 2\n</code>",
     "<code>1- Iniciar variables\n   · Sea w = v₁ (v₁ es la raíz)\n   · Sea A el subgrafo formado por v₁\n\n2- Estudio de los lados\n   · Consideramos el lado (w,vᵢ) para i mínimo (siguiendo el orden inicial)\n     si (w,vᵢ) ∈ E y no forma un circuito en A\n   · Si no existe un lado que verifique estas condiciones, vamos al paso 3\n   · En caso contrario, añadimos el lado (w,vᵢ) a A, hacemos w = vᵢ y\n     volvemos al paso 2\n\n3- Verificar si hemos acabado\n   · Si (w = v₁), hemos acabado y A es un árbol generador\n   · En caso contrario, vamos al paso 4\n\n4- Volvemos al nivel anterior\n   · Sea x el padre de w. Hacemos w = x y volvemos al paso 2\n</code>"
    ],
    "t": "code"
   },
   {
    "id": "15-3-arbres-generadors-minimals",
    "t": "h",
    "x": [
     "Arbres generadors minimals",
     "Árboles generadores minimales"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sigui `G=(V,E)` un graf **ponderat** i G' un subgraf de G:",
     "Sea `G=(V,E)` un grafo **ponderado** y G' un subgrafo de G:"
    ]
   },
   {
    "items": [
     [
      "El **pes** del subgraf G' és la **suma dels pesos** de tots els costats de G'.",
      "El **peso** del subgrafo G' es la **suma de los pesos** de todos los lados de G'."
     ],
     [
      "Un **arbre generador minimal** de G és un arbre generador A que tingui un pes **inferior o igual** a qualsevol altre arbre generador de G.",
      "Un **árbol generador minimal** de G es un árbol generador A que tenga un peso **inferior o igual** a cualquier otro árbol generador de G."
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
       "Si el grafo `G=(V,E)` **no es ponderado**, podemos asignar un peso igual a 1 a cada lado; entonces **todos** los árboles generadores de G son minimales y su peso es `|V| − 1`."
      ]
     }
    ],
    "t": "note"
   },
   {
    "id": "metode-1-algorisme-de-prim",
    "t": "h",
    "x": [
     "Mètode 1 — algorisme de Prim",
     "Método 1 — algoritmo de Prim"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sigui `G=(V,E)` un graf connex i ponderat de n vèrtexs ordenats `v₁, v₂, …, vₙ`:",
     "Sea `G=(V,E)` un grafo conexo y ponderado de n vértices ordenados `v₁, v₂, …, vₙ`:"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>1- Iniciar variables\n   · Sigui A l'arbre sense costats format únicament pel vèrtex v₁\n\n2- Comprovar si hem acabat\n   · Si V(A) = V hem acabat. En cas contrari, seguim amb el pas 3\n\n3- Afegir costat\n   · El costat ha d'ésser tal que: tingui pes mínim, pertanyi a E i no a A,\n     sigui incident en algun vèrtex d'A i en afegir-lo no pugui formar cap\n     circuit en A (si més d'un costat compleix les condicions, escollim el\n     que tingui subíndex més petit)\n   · Tornem al pas 2\n</code>",
     "<code>1- Iniciar variables\n   · Sea A el árbol sin lados formado únicamente por el vértice v₁\n\n2- Comprobar si hemos acabado\n   · Si V(A) = V hemos acabado. En caso contrario, seguimos con el paso 3\n\n3- Añadir lado\n   · El lado ha de ser tal que: tenga peso mínimo, pertenezca a E y no a A,\n     sea incidente en algún vértice de A y al añadirlo no pueda formar\n     ningún circuito en A (si más de un lado cumple las condiciones,\n     escogemos el que tenga subíndice más pequeño)\n   · Volvemos al paso 2\n</code>"
    ],
    "t": "code"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "El mètode 1 és l'anomenat **algorisme de Prim**. Donat un graf connex i ponderat G, la seva aplicació **genera un arbre generador minimal** A de G.",
       "El método 1 es el llamado **algoritmo de Prim**. Dado un grafo conexo y ponderado G, su aplicación **genera un árbol generador minimal** A de G."
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
     "Método 2 — algoritmo de Kruskal"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sigui `G=(V,E)` un graf connex i ponderat de n vèrtexs, amb `E={e₁, e₂, …, eₙ}` on el pes de cada costat `ℓ(eᵢ)` compleix `ℓ(e₁) ≤ ℓ(e₂) ≤ … ≤ ℓ(eₙ)`:",
     "Sea `G=(V,E)` un grafo conexo y ponderado de n vértices, con `E={e₁, e₂, …, eₙ}` donde el peso de cada lado `ℓ(eᵢ)` cumple `ℓ(e₁) ≤ ℓ(e₂) ≤ … ≤ ℓ(eₙ)`:"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>1- Iniciar variables\n   · Sigui A l'arbre sense costats E(A)=∅ format per tots els vèrtexs\n     de G, V(A)=V\n\n2- Comprovar si hem acabat\n   · Si A conté n-1 costats, hem acabat. En cas contrari, seguim amb el pas 3\n\n3- Afegir costat\n   · El costat ha d'ésser tal que: tingui pes mínim, pertanyi a E i no a A,\n     i en afegir-lo no pugui formar cap circuit en A (si més d'un costat\n     compleix les condicions, escollim el costat segons l'ordre inicialment\n     definit per ℓ(eᵢ))\n   · Tornem al pas 2\n</code>",
     "<code>1- Iniciar variables\n   · Sea A el árbol sin lados E(A)=∅ formado por todos los vértices\n     de G, V(A)=V\n\n2- Comprobar si hemos acabado\n   · Si A contiene n-1 lados, hemos acabado. En caso contrario, seguimos\n     con el paso 3\n\n3- Añadir lado\n   · El lado ha de ser tal que: tenga peso mínimo, pertenezca a E y no a A,\n     y al añadirlo no pueda formar ningún circuito en A (si más de un lado\n     cumple las condiciones, escogemos el lado según el orden inicialmente\n     definido por ℓ(eᵢ))\n   · Volvemos al paso 2\n</code>"
    ],
    "t": "code"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "El mètode 2 és l'anomenat **algorisme de Kruskal**. Donat un graf connex i ponderat G, la seva aplicació **genera un arbre generador minimal** A de G.",
       "El método 2 es el llamado **algoritmo de Kruskal**. Dado un grafo conexo y ponderado G, su aplicación **genera un árbol generador minimal** A de G."
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
       "**Prim** hace crecer **un único árbol** desde un vértice inicial: cada lado que añade ha de tocar el árbol que ya tiene. **Kruskal** parte de todos los vértices sueltos y va añadiendo los lados **más baratos del grafo entero**, formando varios trozos que acaban uniéndose."
      ]
     }
    ],
    "t": "tip",
    "title": [
     "Diferència entre Prim i Kruskal",
     "Diferencia entre Prim y Kruskal"
    ]
   },
   {
    "t": "hr"
   }
  ],
  "16-recorreguts-d-un-graf": [
   {
    "t": "p",
    "x": [
     "Aquests recorreguts són el marc teòric d'altres tècniques que s'utilitzen per resoldre problemes de cerca (en intel·ligència artificial) o per modelar xarxes de comunicacions.",
     "Estos recorridos son el marco teórico de otras técnicas que se utilizan para resolver problemas de búsqueda (en inteligencia artificial) o para modelar redes de comunicaciones."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Donat un graf simple `G=(V,A)`, un **recorregut** en G és una seqüència de vèrtexs `v₁, v₂, …, v_k` en què dos vèrtexs consecutius `vᵢ` i `v_{i+1}` de la seqüència tenen una aresta `{vᵢ,v_{i+1}}` en G.",
       "Dado un grafo simple `G=(V,A)`, un **recorrido** en G es una secuencia de vértices `v₁, v₂, …, v_k` en que dos vértices consecutivos `vᵢ` y `v_{i+1}` de la secuencia tienen una arista `{vᵢ,v_{i+1}}` en G."
      ]
     },
     {
      "t": "p",
      "x": [
       "Si G és dirigit s'anomena **recorregut orientat o dirigit**, i cal un arc `(vᵢ,v_{i+1})`.",
       "Si G es dirigido se denomina **recorrido orientado o dirigido**, y hace falta un arco `(vᵢ,v_{i+1})`."
      ]
     },
     {
      "t": "p",
      "x": [
       "El recorregut entre `v₁` i `v_k` s'anomena `v₁-v_k` recorregut. La **longitud** d'un recorregut és el nombre d'arestes que el componen.",
       "El recorrido entre `v₁` y `v_k` se denomina `v₁-v_k` recorrido. La **longitud** de un recorrido es el número de aristas que lo componen."
      ]
     }
    ],
    "t": "note",
    "title": [
     "Definició",
     "Definición"
    ]
   },
   {
    "t": "p",
    "x": [
     "Els dos mètodes bàsics d'exploració:",
     "Los dos métodos básicos de exploración:"
    ]
   },
   {
    "head": [
     [
      "Mètode",
      "Método"
     ],
     [
      "Nom",
      "Nombre"
     ],
     [
      "Estructura de dades",
      "Estructura de datos"
     ]
    ],
    "rows": [
     [
      "**DFS**",
      [
       "*Depth First Search* — cerca en profunditat prioritària",
       "*Depth First Search* — búsqueda en profundidad prioritaria"
      ],
      "**Pila**"
     ],
     [
      "**BFS**",
      [
       "*Breadth First Search* — cerca en amplada prioritària",
       "*Breadth First Search* — búsqueda en anchura prioritaria"
      ],
      [
       "**Cua**",
       "**Cola**"
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
     "Se comienza la exploración por un vértice inicial `v₁` y se van recorriendo todos los vértices del grafo sin repetir ninguno. **Se avanza en profundidad**: a partir de `v₁` se visita uno de sus adyacentes, sea `v₂`, y después se parte de `v₂` y se visita un adyacente de `v₂`. Es decir, **avanzar por una vía y olvidarse, de momento, de las alternativas**."
    ]
   },
   {
    "t": "p",
    "x": [
     "Si s'arriba a un vèrtex on no és possible seguir amb el recorregut, cal **tornar enrere** i eliminar-lo (*backtracking* o retrocés).",
     "Si se llega a un vértice donde no es posible seguir con el recorrido, hay que **volver atrás** y eliminarlo (*backtracking* o retroceso)."
    ]
   },
   {
    "head": [
     [
      "Notació",
      "Notación"
     ],
     [
      "Significat",
      "Significado"
     ]
    ],
    "rows": [
     [
      "`v₁`",
      [
       "Vèrtex inicial (de partida)",
       "Vértice inicial (de partida)"
      ]
     ],
     [
      "`P`",
      [
       "Conjunt de vèrtexs per recordar l'ordre en què s'han visitat i poder retrocedir — **estructura de dades pila**",
       "Conjunto de vértices para recordar el orden en que se han visitado y poder retroceder — **estructura de datos pila**"
      ]
     ],
     [
      [
       "`visitat(1..K)`",
       "`visitado(1..K)`"
      ],
      [
       "Taula de booleans per recordar els vèrtexs visitats fins al moment",
       "Tabla de booleanos para recordar los vértices visitados hasta el momento"
      ]
     ],
     [
      "`R`",
      [
       "Llista resultat que conté tots els vèrtexs del graf visitats",
       "Lista resultado que contiene todos los vértices del grafo visitados"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "lang": "text",
    "src": [
     "<code>Iniciar valors:\n    P ← ∅                          {crear la pila}\n    Empilar(P, v₁)\n    Per a cada vèrtex visitat(i) ← fals\n    visitat(1) ← cert\n\nMentre no buida (P) fer\n    vertexActual ← cim(P)\n    Si vertexActual és adjacent a un vèrtex vᵢ no visitat llavors\n        empilar(P, vᵢ)\n        visitat(i) ← cert;  afegir(R, vᵢ)\n    altrament\n        desempilar(P)\n    Fi_si\n</code>",
     "<code>Iniciar valores:\n    P ← ∅                          {crear la pila}\n    Apilar(P, v₁)\n    Para cada vértice visitado(i) ← falso\n    visitado(1) ← cierto\n\nMientras no vacía (P) hacer\n    verticeActual ← cima(P)\n    Si verticeActual es adyacente a un vértice vᵢ no visitado entonces\n        apilar(P, vᵢ)\n        visitado(i) ← cierto;  añadir(R, vᵢ)\n    si_no\n        desapilar(P)\n    Fin_si\n</code>"
    ],
    "t": "code"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si hi ha més d'un adjacent, primer agafem el d'índex més petit.",
       "Si hay más de un adyacente, primero tomamos el de índice más pequeño."
      ]
     }
    ],
    "t": "note"
   },
   {
    "t": "p",
    "x": [
     "**Exemple:** `R = (v₁, v₂, v₄, v₃, v₅, v₆, v₇)`",
     "**Ejemplo:** `R = (v₁, v₂, v₄, v₃, v₅, v₆, v₇)`"
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
     "Se comienza por un vértice inicial `v₁` y **se avanza en anchura**: a partir de `v₁` se visitan **todos** sus adyacentes, y después los adyacentes no visitados de los adyacentes de `v₁`, y así sucesivamente. En cada paso se **priorizan las diferentes vías** que se pueden visitar desde un determinado vértice."
    ]
   },
   {
    "head": [
     [
      "Notació",
      "Notación"
     ],
     [
      "Significat",
      "Significado"
     ]
    ],
    "rows": [
     [
      "`Q`",
      [
       "Conjunt de vèrtexs per recordar l'ordre i prosseguir l'exploració per nivells — **estructura de dades cua**",
       "Conjunto de vértices para recordar el orden y proseguir la exploración por niveles — **estructura de datos cola**"
      ]
     ],
     [
      [
       "`visitat(1..K)`",
       "`visitado(1..K)`"
      ],
      [
       "Taula de booleans",
       "Tabla de booleanos"
      ]
     ],
     [
      "`R`",
      [
       "Llista resultat",
       "Lista resultado"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "lang": "text",
    "src": [
     "<code>Iniciar valors:\n    Q ← ∅                          {crear la cua}\n    ALaCua(Q, v₁)\n    Per a cada vèrtex visitat(i) ← fals\n    visitat(1) ← cert\n\nMentre no buida (Q) fer\n    vertexActual ← QuiLiToca(Q)\n    Per cada vèrtex vᵢ no visitat adjacent al vertexActual\n        ALaCua(Q, vᵢ)\n        visitat(i) ← cert;  afegir(R, vᵢ)\n    Fi_Des_de\n    ServirLaCua(Q)                 {eliminar de la cua Q}\n</code>",
     "<code>Iniciar valores:\n    Q ← ∅                          {crear la cola}\n    ALaCola(Q, v₁)\n    Para cada vértice visitado(i) ← falso\n    visitado(1) ← cierto\n\nMientras no vacía (Q) hacer\n    verticeActual ← QuienLeToca(Q)\n    Para cada vértice vᵢ no visitado adyacente al verticeActual\n        ALaCola(Q, vᵢ)\n        visitado(i) ← cierto;  añadir(R, vᵢ)\n    Fin_Desde\n    ServirLaCola(Q)                {eliminar de la cola Q}\n</code>"
    ],
    "t": "code"
   },
   {
    "t": "p",
    "x": [
     "**Exemple:** `R = (v₁, v₂, v₃, v₄, v₅, v₆, v₇)`",
     "**Ejemplo:** `R = (v₁, v₂, v₃, v₄, v₅, v₆, v₇)`"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Sobre el **mateix graf**, DFS dona `(v₁, v₂, v₄, v₃, v₅, v₆, v₇)` i BFS dona `(v₁, v₂, v₃, v₄, v₅, v₆, v₇)`. DFS s'endinsa per una branca; BFS completa cada nivell abans de baixar.",
       "Sobre el **mismo grafo**, DFS da `(v₁, v₂, v₄, v₃, v₅, v₆, v₇)` y BFS da `(v₁, v₂, v₃, v₄, v₅, v₆, v₇)`. DFS se adentra por una rama; BFS completa cada nivel antes de bajar."
      ]
     }
    ],
    "t": "tip",
    "title": [
     "Compara els dos resultats",
     "Compara los dos resultados"
    ]
   },
   {
    "t": "hr"
   }
  ]
 },
 "examEnd": []
};
