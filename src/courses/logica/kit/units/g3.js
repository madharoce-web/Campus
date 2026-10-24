// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "sections": {
  "17-planificacio-de-projectes": [
   {
    "id": "17-1-conceptes-basics",
    "t": "h",
    "x": [
     "Conceptes bàsics",
     "Conceptos básicos"
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
       "**Projecte**",
       "**Proyecto**"
      ],
      [
       "Conjunt de tasques (operacions o activitats) que han de realitzar-se seguint un cert ordre",
       "Conjunto de tareas (operaciones o actividades) que han de realizarse siguiendo un cierto orden"
      ]
     ],
     [
      [
       "**Tasca**",
       "**Tarea**"
      ],
      [
       "Consumeix **temps** (durada) i **recursos** (humans, materials…)",
       "Consume **tiempo** (duración) y **recursos** (humanos, materiales…)"
      ]
     ],
     [
      "**Etapa**",
      [
       "Data que marca l'inici o la finalització d'una tasca (o grup de tasques). **No consumeix ni temps ni recursos**",
       "Fecha que marca el inicio o la finalización de una tarea (o grupo de tareas). **No consume ni tiempo ni recursos**"
      ]
     ],
     [
      [
       "**Planificar un projecte**",
       "**Planificar un proyecto**"
      ],
      [
       "Dissenyar un calendari d'execució que prevegi tots els contratemps, a fi de minimitzar els recursos i estimar una durada *teòrica*",
       "Diseñar un calendario de ejecución que prevea todos los contratiempos, a fin de minimizar los recursos y estimar una duración *teórica*"
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
       "A la pràctica s'ha de realitzar una **feina prèvia** que consisteix a trobar les diferents tasques del projecte, la seva durada i les relacions d'anterioritat entre elles.",
       "En la práctica se ha de realizar un **trabajo previo** que consiste en encontrar las diferentes tareas del proyecto, su duración y las relaciones de anterioridad entre ellas."
      ]
     }
    ],
    "t": "note",
    "title": [
     "Observació",
     "Observación"
    ]
   },
   {
    "id": "17-2-contratemps",
    "t": "h",
    "x": [
     "Contratemps",
     "Contratiempos"
    ]
   },
   {
    "t": "p",
    "x": [
     "Un **contratemps** sobre una tasca és un impediment que incideix en la seva realització.",
     "Un **contratiempo** sobre una tarea es un impedimento que incide en su realización."
    ]
   },
   {
    "head": [
     [
      "Tipus",
      "Tipo"
     ],
     [
      "Definició",
      "Definición"
     ]
    ],
    "rows": [
     [
      [
       "**De successió**",
       "**De sucesión**"
      ],
      [
       "L'inici d'una tasca està condicionat per l'acabament d'una altra",
       "El inicio de una tarea está condicionado por el acabamiento de otra"
      ]
     ],
     [
      [
       "**De localització temporal**",
       "**De localización temporal**"
      ],
      [
       "L'inici o acabament d'una tasca ha d'efectuar-se en una data fixada amb antelació",
       "El inicio o acabamiento de una tarea ha de efectuarse en una fecha fijada con antelación"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "id": "17-3-tipus-de-tasques",
    "t": "h",
    "x": [
     "Tipus de tasques",
     "Tipos de tareas"
    ]
   },
   {
    "head": [
     [
      "Tipus",
      "Tipo"
     ],
     [
      "Definició",
      "Definición"
     ]
    ],
    "rows": [
     [
      [
       "**Successives**",
       "**Sucesivas**"
      ],
      [
       "Dues tasques són successives si una d'elles es realitza després de l'altra",
       "Dos tareas son sucesivas si una de ellas se realiza después de la otra"
      ]
     ],
     [
      [
       "**Simultànies**",
       "**Simultáneas**"
      ],
      [
       "Poden començar i realitzar-se al mateix temps",
       "Pueden empezar y realizarse al mismo tiempo"
      ]
     ],
     [
      [
       "**Convergents**",
       "**Convergentes**"
      ],
      [
       "Caben en una mateixa etapa",
       "Caben en una misma etapa"
      ]
     ],
     [
      [
       "**Tasca anterior**",
       "**Tarea anterior**"
      ],
      [
       "Una tasca A és anterior a B si l'inici de B està condicionat per la finalització d'A",
       "Una tarea A es anterior a B si el inicio de B está condicionado por la finalización de A"
      ]
     ],
     [
      [
       "**Immediatament anterior**",
       "**Inmediatamente anterior**"
      ],
      [
       "A és immediatament anterior a B si A i B són successives i A és anterior a B",
       "A es inmediatamente anterior a B si A y B son sucesivas y A es anterior a B"
      ]
     ],
     [
      [
       "**Tasques inicials**",
       "**Tareas iniciales**"
      ],
      [
       "Donen inici al projecte (no tenen cap tasca anterior)",
       "Dan inicio al proyecto (no tienen ninguna tarea anterior)"
      ]
     ],
     [
      [
       "**Tasques finals**",
       "**Tareas finales**"
      ],
      [
       "Finalitzen el projecte",
       "Finalizan el proyecto"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "id": "17-4-nivell-d-una-tasca",
    "t": "h",
    "x": [
     "Nivell d'una tasca",
     "Nivel de una tarea"
    ]
   },
   {
    "t": "p",
    "x": [
     "Es pot representar un projecte amb un **graf**: cada vèrtex és una tasca i els arcs donen les relacions d'anterioritat entre tasques. A cada tasca s'assigna un nombre positiu anomenat **nivell**, de manera que:",
     "Se puede representar un proyecto con un **grafo**: cada vértice es una tarea y los arcos dan las relaciones de anterioridad entre tareas. A cada tarea se asigna un número positivo llamado **nivel**, de manera que:"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Les tasques de nivell i són anteriors a les tasques de nivell i+1.**",
       "**Las tareas de nivel i son anteriores a las tareas de nivel i+1.**"
      ]
     }
    ],
    "t": "summary"
   },
   {
    "t": "p",
    "x": [
     "**Càlcul dels nivells:**",
     "**Cálculo de los niveles:**"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>Tasques de nivell 0:  s'assigna nivell 0 a les tasques inicials.\n\nTasques de nivell i:  s'eliminen les tasques de nivells inferiors\n                      (nivell 0, 1, 2 … i-1) i s'assigna nivell i a les\n                      tasques que no tenen tasques immediatament anteriors.\n</code>",
     "<code>Tareas de nivel 0:  se asigna nivel 0 a las tareas iniciales.\n\nTareas de nivel i:  se eliminan las tareas de niveles inferiores\n                    (nivel 0, 1, 2 … i-1) y se asigna nivel i a las\n                    tareas que no tienen tareas inmediatamente anteriores.\n</code>"
    ],
    "t": "code"
   },
   {
    "t": "p",
    "x": [
     "**Exemple:**",
     "**Ejemplo:**"
    ]
   },
   {
    "head": [
     [
      "Tasques",
      "Tareas"
     ],
     [
      "Tasques anteriors",
      "Tareas anteriores"
     ],
     [
      "Nivell",
      "Nivel"
     ]
    ],
    "rows": [
     [
      "A",
      "B",
      "1"
     ],
     [
      "B",
      "—",
      "0"
     ],
     [
      "C",
      "A, B, F",
      "2"
     ],
     [
      "D",
      "—",
      "0"
     ],
     [
      "E",
      "B, D",
      "1"
     ],
     [
      "F",
      "B",
      "1"
     ]
    ],
    "t": "table"
   },
   {
    "id": "17-5-metodes-de-planificacio",
    "t": "h",
    "x": [
     "Mètodes de planificació",
     "Métodos de planificación"
    ]
   },
   {
    "t": "p",
    "x": [
     "Els mètodes més coneguts són:",
     "Los métodos más conocidos son:"
    ]
   },
   {
    "t": "list",
    "items": [
     "El **diagrama de Gantt**.",
     "El **P.E.R.T** (*program evolution research task*).",
     "El **C.P.M** (*critical path method*)."
    ]
   },
   {
    "id": "17-6-metode-c-p-m",
    "t": "h",
    "x": [
     "Mètode C.P.M.",
     "Método C.P.M."
    ]
   },
   {
    "t": "p",
    "x": [
     "Per representar les tasques del projecte s'utilitza un **graf dirigit i ponderat**:",
     "Para representar las tareas del proyecto se utiliza un **grafo dirigido y ponderado**:"
    ]
   },
   {
    "items": [
     [
      "Els **vèrtexs** representen les **tasques**.",
      "Los **vértices** representan las **tareas**."
     ],
     [
      "Els **arcs** estableixen les relacions d'anterioritat entre dues tasques successives.",
      "Los **arcos** establecen las relaciones de anterioridad entre dos tareas sucesivas."
     ],
     [
      "El **pes de l'arc** representa la **durada de la tasca anterior** (la tasca que cal acabar abans de poder iniciar l'altra).",
      "El **peso del arco** representa la **duración de la tarea anterior** (la tarea que hay que acabar antes de poder iniciar la otra)."
     ]
    ],
    "t": "list"
   },
   {
    "t": "p",
    "x": [
     "Si A i B són dues tasques successives i la durada d'A és `t(A,B)`:",
     "Si A y B son dos tareas sucesivas y la duración de A es `t(A,B)`:"
    ]
   },
   {
    "t": "code",
    "lang": "text",
    "src": "<code>  ──►[ A ]──── t(A,B) ────►[ B ]──►\n</code>"
   },
   {
    "t": "p",
    "x": [
     "**Mètode pràctic per traçar el graf:**",
     "**Método práctico para trazar el grafo:**"
    ]
   },
   {
    "lang": "text",
    "src": [
     "<code>1- Classificació de les tasques: inicials, finals i immediatament anteriors.\n2- Càlcul del nivell de cada tasca.\n3- Representació inicial dels vèrtexs: es representa la tasca (X), la data\n   early de X (T_X) i la data last de X (T'_X):\n\n            ┌──────┬──────┐\n            │ T_X  │ T'_X │\n            ├──────┴──────┤\n            │      X      │\n            └─────────────┘\n\n   S'afegeix una tasca inicial i una tasca final en la representació del\n   graf (ambdues amb durada nul·la).\n4- Tracem el graf per ordre creixent del nivell de les tasques. Comencem\n   per les de nivell 0, 1…\n</code>",
     "<code>1- Clasificación de las tareas: iniciales, finales e inmediatamente anteriores.\n2- Cálculo del nivel de cada tarea.\n3- Representación inicial de los vértices: se representa la tarea (X), la\n   fecha early de X (T_X) y la fecha last de X (T'_X):\n\n            ┌──────┬──────┐\n            │ T_X  │ T'_X │\n            ├──────┴──────┤\n            │      X      │\n            └─────────────┘\n\n   Se añade una tarea inicial y una tarea final en la representación del\n   grafo (ambas con duración nula).\n4- Trazamos el grafo por orden creciente del nivel de las tareas. Empezamos\n   por las de nivel 0, 1…\n</code>"
    ],
    "t": "code"
   },
   {
    "id": "17-7-data-early",
    "t": "h",
    "x": [
     "Data *early*",
     "Fecha *early*"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "La data **early** d'una tasca Y és la **longitud del camí més llarg** des de la tasca inicial a la tasca Y. Indica el moment a partir del qual **pot iniciar-se** la tasca Y, tenint en compte les relacions d'anterioritat.",
       "La fecha **early** de una tarea Y es la **longitud del camino más largo** desde la tarea inicial a la tarea Y. Indica el momento a partir del cual **puede iniciarse** la tarea Y, teniendo en cuenta las relaciones de anterioridad."
      ]
     }
    ],
    "t": "note",
    "title": [
     "Concepte",
     "Concepto"
    ]
   },
   {
    "t": "p",
    "x": [
     "**Càlcul.** La data *early* de la tasca inicial i de totes les tasques de nivell 0 és **0**. Sigui Y una tasca qualsevol i C el conjunt de tasques **immediatament anteriors** a Y. Per a qualsevol `X ∈ C`, si `T_X` és la seva data *early* i `t(X,Y)` la durada de X:",
     "**Cálculo.** La fecha *early* de la tarea inicial y de todas las tareas de nivel 0 es **0**. Sea Y una tarea cualquiera y C el conjunto de tareas **inmediatamente anteriores** a Y. Para cualquier `X ∈ C`, si `T_X` es su fecha *early* y `t(X,Y)` la duración de X:"
    ]
   },
   {
    "t": "code",
    "lang": "text",
    "src": "<code>T_Y = max_{X ∈ C} [ T_X + t(X,Y) ]\n</code>"
   },
   {
    "t": "p",
    "x": [
     "**Exemple:** `T_Y = max_{X∈{D,E,F}} [9+5, 7+6, 6+2] = 14`",
     "**Ejemplo:** `T_Y = max_{X∈{D,E,F}} [9+5, 7+6, 6+2] = 14`"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "La data *early* de la **tasca final** indica la **durada del projecte**.",
       "La fecha *early* de la **tarea final** indica la **duración del proyecto**."
      ]
     }
    ],
    "t": "prop"
   },
   {
    "id": "17-8-data-last",
    "t": "h",
    "x": [
     "Data *last*",
     "Fecha *last*"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "La data **last** d'una tasca X és la **longitud del camí més curt** que va des de la tasca X a la tasca final. Indica la **data màxima admissible** per a l'inici de X sense allargar la durada total del projecte.",
       "La fecha **last** de una tarea X es la **longitud del camino más corto** que va desde la tarea X a la tarea final. Indica la **fecha máxima admisible** para el inicio de X sin alargar la duración total del proyecto."
      ]
     }
    ],
    "t": "note",
    "title": [
     "Concepte",
     "Concepto"
    ]
   },
   {
    "t": "p",
    "x": [
     "**Càlcul.** La data *last* de la tasca final és **igual a la seva data early**. Sigui X una tasca qualsevol i C' el conjunt de tasques **immediatament posteriors** a X. Per a qualsevol `Y ∈ C'`, si `T'_Y` és la seva data *last* i `t(X,Y)` la durada de X:",
     "**Cálculo.** La fecha *last* de la tarea final es **igual a su fecha early**. Sea X una tarea cualquiera y C' el conjunto de tareas **inmediatamente posteriores** a X. Para cualquier `Y ∈ C'`, si `T'_Y` es su fecha *last* y `t(X,Y)` la duración de X:"
    ]
   },
   {
    "t": "code",
    "lang": "text",
    "src": "<code>T'_X = min_{Y ∈ C'} [ T'_Y − t(X,Y) ]\n</code>"
   },
   {
    "t": "p",
    "x": [
     "**Exemple:** `T'_X = min_{Y∈{B,C,D}} [17−8, 15−8, 14−8] = 6`",
     "**Ejemplo:** `T'_X = min_{Y∈{B,C,D}} [17−8, 15−8, 14−8] = 6`"
    ]
   },
   {
    "id": "17-9-marges-i-cami-critic",
    "t": "h",
    "x": [
     "Marges i camí crític",
     "Márgenes y camino crítico"
    ]
   },
   {
    "head": [
     [
      "Marge",
      "Margen"
     ],
     [
      "Què indica",
      "Qué indica"
     ],
     "Fórmula"
    ],
    "rows": [
     [
      [
       "**Marge total** `Mᵀ(X)`",
       "**Margen total** `Mᵀ(X)`"
      ],
      [
       "El temps màxim que es pot retardar o allargar una tasca **sense modificar la durada total del projecte**",
       "El tiempo máximo que se puede retrasar o alargar una tarea **sin modificar la duración total del proyecto**"
      ],
      "`Mᵀ(X) = T'_X − T_X`"
     ],
     [
      [
       "**Marge lliure** `Mᴸ(X)`",
       "**Margen libre** `Mᴸ(X)`"
      ],
      [
       "El temps màxim que es pot retardar o allargar una tasca **sense modificar la data early de les tasques posteriors**",
       "El tiempo máximo que se puede retrasar o alargar una tarea **sin modificar la fecha early de las tareas posteriores**"
      ],
      "`Mᴸ(X) = min_{Y ∈ C'} [ T_Y − T_X − t(X,Y) ]`"
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "on C' és el conjunt de les tasques immediatament posteriors, `T_Y` la data *early* de Y i `t(X,Y)` la durada de X.",
     "donde C' es el conjunto de las tareas inmediatamente posteriores, `T_Y` la fecha *early* de Y y `t(X,Y)` la duración de X."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si `Mᵀ(X) = 0`, diem que X és una **tasca crítica**: qualsevol retard seu allarga tot el projecte.",
       "Si `Mᵀ(X) = 0`, decimos que X es una **tarea crítica**: cualquier retraso suyo alarga todo el proyecto."
      ]
     },
     {
      "t": "p",
      "x": [
       "El camí que va de la tasca inicial a la final passant per **totes les tasques crítiques** s'anomena **camí crític**.",
       "El camino que va de la tarea inicial a la final pasando por **todas las tareas críticas** se denomina **camino crítico**."
      ]
     }
    ],
    "t": "prop",
    "title": [
     "Tasca crítica i camí crític",
     "Tarea crítica y camino crítico"
    ]
   },
   {
    "id": "17-10-exemple-complet-del-metode-c-p-m",
    "t": "h",
    "x": [
     "Exemple complet del mètode C.P.M.",
     "Ejemplo completo del método C.P.M."
    ]
   },
   {
    "head": [
     [
      "Tasques",
      "Tareas"
     ],
     [
      "Tasques anteriors",
      "Tareas anteriores"
     ],
     [
      "Durada",
      "Duración"
     ]
    ],
    "rows": [
     [
      "A",
      "H",
      "4"
     ],
     [
      "B",
      "A, G, J",
      "8"
     ],
     [
      "C",
      "E",
      "14"
     ],
     [
      "D",
      "—",
      "12"
     ],
     [
      "E",
      "—",
      "8"
     ],
     [
      "F",
      "E",
      "6"
     ],
     [
      "G",
      "D, K, J",
      "6"
     ],
     [
      "H",
      "—",
      "8"
     ],
     [
      "I",
      "J, K",
      "10"
     ],
     [
      "J",
      "H",
      "6"
     ],
     [
      "K",
      "E, D, F",
      "8"
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "**Resultats:**",
     "**Resultados:**"
    ]
   },
   {
    "items": [
     [
      "La **durada del projecte és 36**.",
      "La **duración del proyecto es 36**."
     ],
     [
      "Les **tasques crítiques** compleixen: `Mᵀ(E) = Mᵀ(F) = Mᵀ(K) = Mᵀ(G) = Mᵀ(B) = 0`.",
      "Las **tareas críticas** cumplen: `Mᵀ(E) = Mᵀ(F) = Mᵀ(K) = Mᵀ(G) = Mᵀ(B) = 0`."
     ],
     [
      "Per a la tasca J, la representació és `[8 | 16]`: **8** és la data en què es pot iniciar J considerant les tasques anteriors, i **16** és la data màxima per a l'inici de J sense allargar la durada del projecte.",
      "Para la tarea J, la representación es `[8 | 16]`: **8** es la fecha en que se puede iniciar J considerando las tareas anteriores, y **16** es la fecha máxima para el inicio de J sin alargar la duración del proyecto."
     ]
    ],
    "t": "list"
   },
   {
    "t": "hr"
   }
  ],
  "18-questions-de-repas": [
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q1",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quina diferència hi ha entre un graf dirigit i un de no dirigit?",
        "¿Qué diferencia hay entre un grafo dirigido y uno no dirigido?"
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "En el **no dirigit** cada costat s'associa a un parell **no ordenat** de vèrtexs (`{A,B} = {B,A}`); en el **dirigit** el parell és **ordenat** (`(A,B) ≠ (B,A)`).",
        "En el **no dirigido** cada lado se asocia a un par **no ordenado** de vértices (`{A,B} = {B,A}`); en el **dirigido** el par es **ordenado** (`(A,B) ≠ (B,A)`)."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q2",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Per què el nombre de vèrtexs de valència senar és sempre parell?",
        "¿Por qué el número de vértices de valencia impar es siempre par?"
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "Perquè la suma de totes les valències val `2m` (cada costat aporta 1 a cadascun dels seus dos extrems), que és parell. Si hi hagués un nombre senar de vèrtexs de valència senar, la suma seria senar. Contradicció.",
        "Porque la suma de todas las valencias vale `2m` (cada lado aporta 1 a cada uno de sus dos extremos), que es par. Si hubiera un número impar de vértices de valencia impar, la suma sería impar. Contradicción."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q3",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Què representa l'element (i,j) d'Aⁿ?",
        "¿Qué representa el elemento (i,j) de Aⁿ?"
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "El **nombre de successions de costats de longitud n** entre el vèrtex de la fila i i el de la columna j, en un graf simple. La diagonal d'A² dona les valències.",
        "El **número de sucesiones de lados de longitud n** entre el vértice de la fila i y el de la columna j, en un grafo simple. La diagonal de A² da las valencias."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q4",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Diferència entre camí simple i camí elemental.",
        "Diferencia entre camino simple y camino elemental."
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "Al **camí simple** no es repeteix cap **costat**; al **camí elemental** no es repeteix cap **vèrtex** (i per tant tampoc cap costat).",
        "En el **camino simple** no se repite ningún **lado**; en el **camino elemental** no se repite ningún **vértice** (y por tanto tampoco ningún lado)."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q5",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Diferència entre conjunt desconnector, conjunt de tall i istme.",
        "Diferencia entre conjunto desconector, conjunto de corte e istmo."
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "Un **desconnector** és un conjunt de costats que en eliminar-se deixa el graf inconnex. Un **conjunt de tall** és un desconnector **minimal** (en eliminar-lo queden exactament dues components). Un **istme o pont** és un conjunt de tall d'**un únic costat**.",
        "Un **desconector** es un conjunto de lados que al eliminarse deja el grafo inconexo. Un **conjunto de corte** es un desconector **minimal** (al eliminarlo quedan exactamente dos componentes). Un **istmo o puente** es un conjunto de corte de **un único lado**."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q6",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quan té un graf un circuit d'Euler?",
        "¿Cuándo tiene un grafo un circuito de Euler?"
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "Si i només si és **connex** i **tots els seus vèrtexs tenen valència parella**. És semi-eulerià (camí, no circuit) si és connex i no té més de dos vèrtexs de valència imparella.",
        "Si y solo si es **conexo** y **todos sus vértices tienen valencia par**. Es semi-euleriano (camino, no circuito) si es conexo y no tiene más de dos vértices de valencia impar."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q7",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Diferència entre un circuit d'Euler i un de Hamilton.",
        "Diferencia entre un circuito de Euler y uno de Hamilton."
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "**Euler** recorre tots els **costats** exactament una vegada. **Hamilton** passa per tots els **vèrtexs** exactament una vegada.",
        "**Euler** recorre todos los **lados** exactamente una vez. **Hamilton** pasa por todos los **vértices** exactamente una vez."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q8",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Per què les condicions d'Ore i Dirac no serveixen per descartar un graf hamiltonià?",
        "¿Por qué las condiciones de Ore y Dirac no sirven para descartar un grafo hamiltoniano?"
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "Perquè són condicions **suficients però no necessàries**: si es compleixen, el graf és hamiltonià; si no es compleixen, no se'n pot concloure res. `C₆` i `W₇` són hamiltonians i no les compleixen.",
        "Porque son condiciones **suficientes pero no necesarias**: si se cumplen, el grafo es hamiltoniano; si no se cumplen, no se puede concluir nada. `C₆` y `W₇` son hamiltonianos y no las cumplen."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q9",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quan un graf bipartit no pot ser hamiltonià?",
        "¿Cuándo un grafo bipartito no puede ser hamiltoniano?"
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "Quan `|V₁| ≠ |V₂|`. En conseqüència, un bipartit amb un nombre **imparell** de vèrtexs no pot tenir mai circuits de Hamilton. `K_{n,n}` sempre és hamiltonià si `n ≥ 2`.",
        "Cuando `|V₁| ≠ |V₂|`. En consecuencia, un bipartito con un número **impar** de vértices no puede tener nunca circuitos de Hamilton. `K_{n,n}` siempre es hamiltoniano si `n ≥ 2`."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q10",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Enuncia la fórmula d'Euler per a grafs planars i el seu corol·lari.",
        "Enuncia la fórmula de Euler para grafos planares y su corolario."
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "`c = m − n + 2` (cares, costats, vèrtexs) per a un graf planar i connex. Corol·lari: si a més és simple i `n ≥ 3`, aleshores `m ≤ 3n − 6`. D'aquí se'n dedueix que `K₅` i `K₃,₃` no són planars.",
        "`c = m − n + 2` (caras, lados, vértices) para un grafo planar y conexo. Corolario: si además es simple y `n ≥ 3`, entonces `m ≤ 3n − 6`. De aquí se deduce que `K₅` y `K₃,₃` no son planares."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
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
        "Un grafo G es planar **si y solo si no contiene ningún subgrafo homeomorfo a K₅ o a K₃,₃**."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q12",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quines relacions compleix el graf dual?",
        "¿Qué relaciones cumple el grafo dual?"
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "Si G és planar i connex amb n vèrtexs, m costats i c cares, el seu dual G\\* compleix `n* = c`, `m* = m` i `c* = n`.",
        "Si G es planar y conexo con n vértices, m lados y c caras, su dual G\\* cumple `n* = c`, `m* = m` y `c* = n`."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q13",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Què és el nombre cromàtic i què val en els casos coneguts?",
        "¿Qué es el número cromático y cuánto vale en los casos conocidos?"
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "`γ(G)` és el menor nombre de colors amb què es poden acolorir els vèrtexs sense que dos adjacents comparteixin color. `γ(G)=1` sii G és nul; `γ(G)=2` sii G és bipartit; `γ(Kₙ)=n`. Fita: `γ(G) ≤ δ_max + 1`.",
        "`γ(G)` es el menor número de colores con que se pueden colorear los vértices sin que dos adyacentes compartan color. `γ(G)=1` sii G es nulo; `γ(G)=2` sii G es bipartito; `γ(Kₙ)=n`. Cota: `γ(G) ≤ δ_max + 1`."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q14",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Enuncia les quatre caracteritzacions equivalents d'un arbre.",
        "Enuncia las cuatro caracterizaciones equivalentes de un árbol."
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "Per a un graf G de n vèrtexs: (1) G és un arbre; (2) G és connex i sense circuits; (3) G és connex i té n−1 costats; (4) G no té circuits i té n−1 costats.",
        "Para un grafo G de n vértices: (1) G es un árbol; (2) G es conexo y sin circuitos; (3) G es conexo y tiene n−1 lados; (4) G no tiene circuitos y tiene n−1 lados."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q15",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quantes fulles i quants vèrtexs té un arbre m-ari regular?",
        "¿Cuántas hojas y cuántos vértices tiene un árbol m-ario regular?"
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "Amb **i** vèrtexs interns: `n = m·i + 1` vèrtexs en total i `t = (m−1)·i + 1` vèrtexs terminals. Per al binari: `n = 2i+1` i `t = i+1`.",
        "Con **i** vértices internos: `n = m·i + 1` vértices en total y `t = (m−1)·i + 1` vértices terminales. Para el binario: `n = 2i+1` y `t = i+1`."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q16",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Diferència entre Prim i Kruskal.",
        "Diferencia entre Prim y Kruskal."
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "Tots dos generen un arbre generador **minimal**. **Prim** fa créixer un únic arbre des d'un vèrtex inicial: cada costat afegit ha de tocar l'arbre ja construït. **Kruskal** parteix de tots els vèrtexs solts i afegeix sempre el costat més barat del graf que no formi circuit.",
        "Ambos generan un árbol generador **minimal**. **Prim** hace crecer un único árbol desde un vértice inicial: cada lado añadido ha de tocar el árbol ya construido. **Kruskal** parte de todos los vértices sueltos y añade siempre el lado más barato del grafo que no forme circuito."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q17",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quina estructura de dades usa cada recorregut?",
        "¿Qué estructura de datos usa cada recorrido?"
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "**DFS** (profunditat) fa servir una **pila**; **BFS** (amplada) fa servir una **cua**.",
        "**DFS** (profundidad) usa una **pila**; **BFS** (anchura) usa una **cola**."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q18",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Com es calculen les dates early i last?",
        "¿Cómo se calculan las fechas early y last?"
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "**Early** (camí més llarg des de l'inici): `T_Y = max_{X∈C} [T_X + t(X,Y)]` sobre les tasques immediatament anteriors. **Last** (camí més curt fins al final): `T'_X = min_{Y∈C'} [T'_Y − t(X,Y)]` sobre les immediatament posteriors. L'*early* de la tasca final és la durada del projecte.",
        "**Early** (camino más largo desde el inicio): `T_Y = max_{X∈C} [T_X + t(X,Y)]` sobre las tareas inmediatamente anteriores. **Last** (camino más corto hasta el final): `T'_X = min_{Y∈C'} [T'_Y − t(X,Y)]` sobre las inmediatamente posteriores. El *early* de la tarea final es la duración del proyecto."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "18-questions-de-repas-q19",
     "type": "open",
     "qb": [
      {
       "t": "p",
       "x": [
        "Què és una tasca crítica?",
        "¿Qué es una tarea crítica?"
       ]
      }
     ],
     "sol": [
      {
       "t": "p",
       "x": [
        "Una tasca amb **marge total zero**: `Mᵀ(X) = T'_X − T_X = 0`. No es pot retardar gens sense allargar tot el projecte. El camí que les uneix totes és el **camí crític**.",
        "Una tarea con **margen total cero**: `Mᵀ(X) = T'_X − T_X = 0`. No se puede retrasar nada sin alargar todo el proyecto. El camino que las une todas es el **camino crítico**."
       ]
      }
     ]
    }
   },
   {
    "t": "hr"
   }
  ],
  "font": [
   {
    "t": "p",
    "x": [
     "*Grafs Part 1 i 2* — Seminari Lògica i grafs (BInfo-1), Bàtxelor en Informàtica, Universitat d'Andorra. Inclou el Mòdul I (teoria de grafs), el Mòdul II (teoria d'arbres) i el Mòdul III (planificació de projectes). Imatge dels ponts de Königsberg (Euler, 1736) de Wikimedia Commons.",
     "*Grafs Part 1 i 2* — Seminario Lógica y grafos (BInfo-1), Bachelor en Informática, Universitat d'Andorra. Incluye el Módulo I (teoría de grafos), el Módulo II (teoría de árboles) y el Módulo III (planificación de proyectos). Imagen de los puentes de Königsberg (Euler, 1736) de Wikimedia Commons. Traducción al español del material original en catalán."
    ]
   }
  ]
 },
 "examEnd": []
};
