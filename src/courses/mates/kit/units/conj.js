// Generat per tools/kit-import/mates.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Seccions 1–11 dels apunts. Les definicions són les de classe; els blocs «Per entendre-ho» expliquen el mateix amb més detall, i els laboratoris et deixen provar-ho.",
    "Secciones 1–11 de los apuntes. Las definiciones son las de clase; los bloques «Para entenderlo» explican lo mismo con más detalle, y los laboratorios te dejan probarlo."
   ]
  }
 ],
 "sections": {
  "c-conj": [
   {
    "t": "def",
    "title": [
     "conjunt",
     "conjunto"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un **conjunt** és una col·lecció d'objectes tals que **no s'admeten objectes repetits** i **l'ordre no importa**. Cada objecte és un **element**. Els elements s'escriuen entre claus: $\\{\\ldots\\}$.",
       "Un **conjunto** es una colección de objetos tales que **no se admiten objetos repetidos** y **el orden no importa**. Cada objeto es un **elemento**. Los elementos se escriben entre llaves: $\\{\\ldots\\}$."
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Pensa en una bossa: només importa *què* hi ha a dins. Si dius dues vegades el mateix element, a la bossa continua havent-n'hi un; si els dius en un altre ordre, la bossa és la mateixa. Per això $\\{1, 2, 2, 3\\} = \\{3, 1, 2\\} = \\{1, 2, 3\\}$ i tots tres tenen 3 elements.",
       "Piensa en una bolsa: solo importa *qué* hay dentro. Si dices dos veces el mismo elemento, en la bolsa sigue habiendo uno; si los dices en otro orden, la bolsa es la misma. Por eso $\\{1, 2, 2, 3\\} = \\{3, 1, 2\\} = \\{1, 2, 3\\}$ y los tres tienen 3 elementos."
      ]
     },
     {
      "t": "p",
      "x": [
       "Un element pot ser, al seu torn, un conjunt: $\\{a, \\{a\\}\\}$ té dos elements diferents, l'objecte $a$ i la bossa que conté $a$.",
       "Un elemento puede ser, a su vez, un conjunto: $\\{a, \\{a\\}\\}$ tiene dos elementos distintos, el objeto $a$ y la bolsa que contiene $a$."
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "Els conjunts de nombres",
     "Los conjuntos de números"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Símbol",
      "Símbolo"
     ],
     [
      "Conjunt",
      "Conjunto"
     ],
     [
      "Elements",
      "Elementos"
     ]
    ],
    "rows": [
     [
      "$\\mathbb{N}$",
      [
       "naturals",
       "naturales"
      ],
      "$\\{1, 2, 3, \\ldots\\}$"
     ],
     [
      "$\\mathbb{Z}$",
      [
       "enters",
       "enteros"
      ],
      "$\\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}$"
     ],
     [
      "$\\mathbb{Q}$",
      [
       "racionals",
       "racionales"
      ],
      "$\\{\\ldots, \\frac{1}{2}, \\ldots, -\\frac{5}{7}, \\ldots, 1, \\ldots\\}$"
     ],
     [
      "$\\mathbb{R}$",
      [
       "reals",
       "reales"
      ],
      "$\\{\\ldots, \\pi, e, \\ldots, \\frac{1}{2}, \\ldots\\}$"
     ],
     [
      "$\\mathbb{C}$",
      [
       "complexos",
       "complejos"
      ],
      "$\\{\\ldots, 3 + 4i, \\ldots, \\pi, \\ldots\\}$"
     ]
    ]
   },
   {
    "t": "warn",
    "blocks": [
     {
      "t": "p",
      "x": [
       "En aquest curs $\\mathbb{N} = \\{1, 2, 3, \\ldots\\}$: **el 0 no és natural**. Afecta molts exercicis: $\\{x \\in \\mathbb{N} \\mid x^{2} = 0\\} = \\emptyset$.",
       "En este curso $\\mathbb{N} = \\{1, 2, 3, \\ldots\\}$: **el 0 no es natural**. Afecta a muchos ejercicios: $\\{x \\in \\mathbb{N} \\mid x^{2} = 0\\} = \\emptyset$."
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "Pertinença",
     "Pertenencia"
    ]
   },
   {
    "t": "def",
    "title": [
     "pertinença",
     "pertenencia"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$a \\in A$ vol dir que $a$ és un element de $A$; $a \\notin A$, que no ho és.",
       "$a \\in A$ quiere decir que $a$ es un elemento de $A$; $a \\notin A$, que no lo es."
      ]
     }
    ]
   },
   {
    "t": "example",
    "blocks": [
     {
      "t": "p",
      "x": [
       "Amb $A = \\{2, 4, 6, 8\\}$: $4 \\in A$, $5 \\notin A$. També $3 \\in \\mathbb{N}$ però $-3 \\notin \\mathbb{N}$; $\\frac{1}{2} \\notin \\mathbb{Z}$ però $\\frac{1}{2} \\in \\mathbb{Q}$; $\\pi \\notin \\mathbb{Q}$ però $\\pi \\in \\mathbb{R}$.",
       "Con $A = \\{2, 4, 6, 8\\}$: $4 \\in A$, $5 \\notin A$. También $3 \\in \\mathbb{N}$ pero $-3 \\notin \\mathbb{N}$; $\\frac{1}{2} \\notin \\mathbb{Z}$ pero $\\frac{1}{2} \\in \\mathbb{Q}$; $\\pi \\notin \\mathbb{Q}$ pero $\\pi \\in \\mathbb{R}$."
      ]
     },
     {
      "t": "p",
      "x": [
       "**Compte:** $\\{4\\} \\notin A$. El que és a dins d'$A$ és el nombre 4, no la bossa que conté el 4. En canvi $\\{4\\} \\subseteq A$ sí que és cert, però això és inclusió (secció 4).",
       "**Cuidado:** $\\{4\\} \\notin A$. Lo que está dentro de $A$ es el número 4, no la bolsa que contiene el 4. En cambio $\\{4\\} \\subseteq A$ sí es cierto, pero eso es inclusión (sección 4)."
      ]
     }
    ]
   }
  ],
  "c-desc": [
   {
    "t": "table",
    "head": [
     "Manera",
     [
      "En què consisteix",
      "En qué consiste"
     ]
    ],
    "rows": [
     [
      [
       "**Extensió** o tabulació",
       "**Extensión** o tabulación"
      ],
      [
       "Llistes tots els elements.",
       "Listas todos los elementos."
      ]
     ],
     [
      [
       "**Comprensió** o llei de formació",
       "**Comprensión** o ley de formación"
      ],
      [
       "Dones la propietat que tenen els elements, i només ells (desigualtat, equació o paraules).",
       "Das la propiedad que tienen los elementos, y solo ellos (desigualdad, ecuación o palabras)."
      ]
     ],
     [
      [
       "Recursió",
       "Recursión"
      ],
      [
       "No l'estudiarem.",
       "No la estudiaremos."
      ]
     ],
     [
      [
       "Operacions amb conjunts",
       "Operaciones con conjuntos"
      ],
      [
       "Secció 6.",
       "Sección 6."
      ]
     ]
    ]
   },
   {
    "t": "example",
    "blocks": [
     {
      "t": "p",
      "x": [
       "El mateix conjunt de dues maneres: $A = \\{2, 4, 6, 8, 10\\}$ i $A = \\{x \\in \\mathbb{N} \\mid x\\text{ és parell i } x \\le 10\\}$. Quan el conjunt és infinit, la comprensió és l'única opció: $P = \\{x \\in \\mathbb{N} \\mid x\\text{ és parell}\\}$.",
       "El mismo conjunto de dos maneras: $A = \\{2, 4, 6, 8, 10\\}$ y $A = \\{x \\in \\mathbb{N} \\mid x\\text{ es par y } x \\le 10\\}$. Cuando el conjunto es infinito, la comprensión es la única opción: $P = \\{x \\in \\mathbb{N} \\mid x\\text{ es par}\\}$."
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Llegeix $\\{x \\in U \\mid P(x)\\}$ en tres trossos:",
       "Lee $\\{x \\in U \\mid P(x)\\}$ en tres trozos:"
      ]
     },
     {
      "t": "list",
      "items": [
       [
        "$x \\in U$: **on busques**. És l'univers; canviar-lo canvia el resultat.",
        "$x \\in U$: **dónde buscas**. Es el universo; cambiarlo cambia el resultado."
       ],
       [
        "$|$: es llegeix «tals que».",
        "$|$: se lee «tales que»."
       ],
       [
        "$P(x)$: **el filtre**. Només es queden els $x$ de $U$ que el compleixen.",
        "$P(x)$: **el filtro**. Solo se quedan los $x$ de $U$ que lo cumplen."
       ]
      ],
      "ordered": true
     },
     {
      "t": "p",
      "x": [
       "Mètode segur: resol primer la condició sense pensar en l'univers i després filtra. Amb $x^{2} = 9$ surten $\\pm3$; a $\\mathbb{N}$ només queda el 3, a $\\mathbb{Z}$ i a $\\mathbb{R}$ queden tots dos.",
       "Método seguro: resuelve primero la condición sin pensar en el universo y después filtra. Con $x^{2} = 9$ salen $\\pm3$; en $\\mathbb{N}$ solo queda el 3, en $\\mathbb{Z}$ y en $\\mathbb{R}$ quedan los dos."
      ]
     },
     {
      "t": "p",
      "x": [
       "L'altra forma, $\\{f(n) \\mid n \\in S\\}$, es fa al revés: recorres cada $n$ permès, calcules $f(n)$ i apuntes el resultat **sense repetir**. Per això $\\{(-1)^{n} \\mid n\\text{ senar}\\} = \\{-1\\}$: infinits $n$ però un sol valor.",
       "La otra forma, $\\{f(n) \\mid n \\in S\\}$, se hace al revés: recorres cada $n$ permitido, calculas $f(n)$ y apuntas el resultado **sin repetir**. Por eso $\\{(-1)^{n} \\mid n\\text{ impar}\\} = \\{-1\\}$: infinitos $n$ pero un solo valor."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "compr",
    "props": {
     "id": "th-compr"
    }
   }
  ],
  "c-buit": [
   {
    "t": "def",
    "title": [
     "conjunt buit",
     "conjunto vacío"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "El conjunt sense cap element: $\\emptyset = \\{\\}$.",
       "El conjunto sin ningún elemento: $\\emptyset = \\{\\}$."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "finit, infinit, cardinal",
     "finito, infinito, cardinal"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un conjunt és **finit** si pots comptar-ne els elements; si no, és **infinit**. El nombre d'elements és el **cardinal**: $\\#A$, $|A|$ o $\\operatorname{Card}(A)$.",
       "Un conjunto es **finito** si puedes contar sus elementos; si no, es **infinito**. El número de elementos es el **cardinal**: $\\#A$, $|A|$ o $\\operatorname{Card}(A)$."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": "Lema",
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "$C = \\emptyset$ si i només si $\\#C = 0$.",
       "$C = \\emptyset$ si y solo si $\\#C = 0$."
      ]
     }
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Conjunt",
      "Conjunto"
     ],
     "Cardinal",
     [
      "Per què",
      "Por qué"
     ]
    ],
    "rows": [
     [
      "$\\{a, b, c\\}$",
      "3",
      ""
     ],
     [
      "$\\{1, 1, 2\\}$",
      "2",
      [
       "els repetits no compten",
       "los repetidos no cuentan"
      ]
     ],
     [
      "$\\emptyset$",
      "0",
      [
       "capsa buida",
       "caja vacía"
      ]
     ],
     [
      "$\\{\\emptyset\\}$",
      "1",
      [
       "una capsa que conté una capsa buida",
       "una caja que contiene una caja vacía"
      ]
     ],
     [
      "$\\{\\emptyset, \\{\\emptyset\\}\\}$",
      "2",
      [
       "dues capses diferents a dins",
       "dos cajas distintas dentro"
      ]
     ],
     [
      "$\\mathbb{N}$",
      [
       "infinit",
       "infinito"
      ],
      ""
     ]
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "El problema de $\\emptyset$ i $\\{\\emptyset\\}$ es resol dibuixant capses: cada parell de claus és una capsa. $\\emptyset$ és una capsa buida; $\\{\\emptyset\\}$ és una capsa amb una capsa buida dins, i per tant **té un element**. Per operar ($\\cup$, $\\cap$, $\\setminus$) mira només el primer nivell: quines capses hi ha directament a dins.",
       "El problema de $\\emptyset$ y $\\{\\emptyset\\}$ se resuelve dibujando cajas: cada par de llaves es una caja. $\\emptyset$ es una caja vacía; $\\{\\emptyset\\}$ es una caja con una caja vacía dentro, y por tanto **tiene un elemento**. Para operar ($\\cup$, $\\cap$, $\\setminus$) mira solo el primer nivel: qué cajas hay directamente dentro."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "caixes",
    "props": {
     "id": "th-caixes"
    }
   }
  ],
  "c-incl": [
   {
    "t": "def",
    "title": [
     "igualtat",
     "igualdad"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$A = B$ quan tenen els mateixos elements: $x \\in A$ si i només si $x \\in B$.",
       "$A = B$ cuando tienen los mismos elementos: $x \\in A$ si y solo si $x \\in B$."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "inclusió",
     "inclusión"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$A \\subseteq B$ (A està inclòs o contingut en B, B conté A, A és subconjunt de B) si tot $x \\in A$ és també de $B$. Sempre $A \\subseteq A$.",
       "$A \\subseteq B$ (A está incluido o contenido en B, B contiene a A, A es subconjunto de B) si todo $x \\in A$ es también de $B$. Siempre $A \\subseteq A$."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Lema (doble inclusió)",
     "Lema (doble inclusión)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si $A \\subseteq B$ i $A \\supseteq B$, aleshores $A = B$.",
       "Si $A \\subseteq B$ y $A \\supseteq B$, entonces $A = B$."
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Aquest lema és **la manera estàndard de demostrar que dos conjunts són iguals**. L'esquema sempre és el mateix:",
       "Este lema es **la manera estándar de demostrar que dos conjuntos son iguales**. El esquema siempre es el mismo:"
      ]
     },
     {
      "t": "list",
      "items": [
       [
        "**(⊆)** «Sigui $x \\in A$ qualsevol.» Fes servir les definicions fins arribar a «per tant $x \\in B$».",
        "**(⊆)** «Sea $x \\in A$ cualquiera.» Usa las definiciones hasta llegar a «por tanto $x \\in B$»."
       ],
       [
        "**(⊇)** El mateix començant a $B$ i acabant a $A$.",
        "**(⊇)** Lo mismo empezando en $B$ y acabando en $A$."
       ],
       [
        "Conclou: «per doble inclusió, $A = B$».",
        "Concluye: «por doble inclusión, $A = B$»."
       ]
      ],
      "ordered": true
     },
     {
      "t": "p",
      "x": [
       "Si cada pas és un «si i només si» (⟺), les dues inclusions surten alhora en una sola cadena.",
       "Si cada paso es un «si y solo si» (⟺), las dos inclusiones salen a la vez en una sola cadena."
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Doble inclusió pas a pas: $A \\cap B = B \\cap A$",
     "Doble inclusión paso a paso: $A \\cap B = B \\cap A$"
    ],
    "blocks": [
     {
      "t": "steps",
      "reveal": true,
      "steps": [
       {
        "x": [
         "**(⊆)**\nSigui $x \\in A \\cap B$. Per definició, $x \\in A$ **i** $x \\in B$.",
         "**(⊆)**\nSea $x \\in A \\cap B$. Por definición, $x \\in A$ **y** $x \\in B$."
        ]
       },
       {
        "x": [
         "La «i» és commutativa: $x \\in B$ i $x \\in A$, és a dir $x \\in B \\cap A$. Per tant $A \\cap B \\subseteq B \\cap A$.",
         "La «y» es conmutativa: $x \\in B$ y $x \\in A$, es decir $x \\in B \\cap A$. Por tanto $A \\cap B \\subseteq B \\cap A$."
        ]
       },
       {
        "x": [
         "**(⊇)**\nEl mateix raonament al revés dona $B \\cap A \\subseteq A \\cap B$.",
         "**(⊇)**\nEl mismo razonamiento al revés da $B \\cap A \\subseteq A \\cap B$."
        ]
       },
       {
        "x": [
         "Pel lema de doble inclusió, $A \\cap B = B \\cap A$. ∎",
         "Por el lema de doble inclusión, $A \\cap B = B \\cap A$. ∎"
        ],
        "done": true
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Per què $\\emptyset \\subseteq A$ per a qualsevol $A$?** Perquè la inclusió només pot fallar si trobes un element de $\\emptyset$ que no sigui d'$A$, i $\\emptyset$ no en té cap. No hi ha res que pugui fallar, per tant és cert.",
       "**¿Por qué $\\emptyset \\subseteq A$ para cualquier $A$?** Porque la inclusión solo puede fallar si encuentras un elemento de $\\emptyset$ que no sea de $A$, y $\\emptyset$ no tiene ninguno. No hay nada que pueda fallar, por tanto es cierto."
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "Subconjunt propi",
     "Subconjunto propio"
    ]
   },
   {
    "t": "def",
    "title": [
     "subconjunt propi",
     "subconjunto propio"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$A$ és **subconjunt propi** de $B$ si $A \\subseteq B$, $A \\ne \\emptyset$ i $A \\ne B$. S'escriu $A \\subsetneq B$.",
       "$A$ es **subconjunto propio** de $B$ si $A \\subseteq B$, $A \\ne \\emptyset$ y $A \\ne B$. Se escribe $A \\subsetneq B$."
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$\\subseteq$ i $\\subsetneq$ són com $\\le$ i $<$: $5 \\le 5$ és cert però $5 < 5$ no; $B \\subseteq B$ és cert però $B \\subsetneq B$ no. El lema de doble inclusió **només funciona amb ⊆**, perquè $\\subseteq$ admet la igualtat.",
       "$\\subseteq$ y $\\subsetneq$ son como $\\le$ y $<$: $5 \\le 5$ es cierto pero $5 < 5$ no; $B \\subseteq B$ es cierto pero $B \\subsetneq B$ no. El lema de doble inclusión **solo funciona con ⊆**, porque $\\subseteq$ admite la igualdad."
      ]
     }
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Subconjunt de $B = \\{1,2,3\\}$",
      "Subconjunto de $B = \\{1,2,3\\}$"
     ],
     "$\\subseteq B$",
     "$\\subsetneq B$"
    ],
    "rows": [
     [
      "$\\emptyset$",
      "Sí",
      [
       "No (la definició demana $A \\ne \\emptyset$)",
       "No (la definición pide $A \\ne \\emptyset$)"
      ]
     ],
     [
      "$\\{1\\}, \\{2\\}, \\{3\\}$",
      "Sí",
      "Sí"
     ],
     [
      "$\\{1,2\\}, \\{1,3\\}, \\{2,3\\}$",
      "Sí",
      "Sí"
     ],
     [
      "$\\{1,2,3\\}$",
      "Sí",
      [
       "No (és igual a B)",
       "No (es igual a B)"
      ]
     ]
    ]
   },
   {
    "t": "warn",
    "blocks": [
     {
      "t": "p",
      "x": [
       "La definició de classe exclou $\\emptyset$. Molts llibres no ho fan (amb la seva definició, $\\emptyset \\subsetneq \\{1,2,3\\}$ seria cert). A l'examen, fes servir la de classe. I evita $\\subset$ sol: és ambigu.",
       "La definición de clase excluye $\\emptyset$. Muchos libros no lo hacen (con su definición, $\\emptyset \\subsetneq \\{1,2,3\\}$ sería cierto). En el examen, usa la de clase. Y evita $\\subset$ solo: es ambiguo."
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "Conjunts disjunts",
     "Conjuntos disjuntos"
    ]
   },
   {
    "t": "def",
    "title": [
     "disjunts",
     "disjuntos"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$A$ i $B$ són disjunts si no hi ha cap $x$ amb $x \\in A$ i $x \\in B$ (equivalentment, $A \\cap B = \\emptyset$). Tot conjunt és disjunt amb $\\emptyset$.",
       "$A$ y $B$ son disjuntos si no hay ningún $x$ con $x \\in A$ y $x \\in B$ (equivalentemente, $A \\cap B = \\emptyset$). Todo conjunto es disjunto con $\\emptyset$."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": "Lema",
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si $A$ i $B$ són finits i $A \\subseteq B$, aleshores $|A| \\le |B|$.",
       "Si $A$ y $B$ son finitos y $A \\subseteq B$, entonces $|A| \\le |B|$."
      ]
     }
    ]
   },
   {
    "t": "p",
    "x": [
     "Els **diagrames de Venn** representen cada conjunt com una regió tancada dins d'un rectangle (l'univers). L'exemple de les diapositives: dins d'*Ossos*, les regions *negres* i *blancs* se solapen; la intersecció són els *pandes*.",
     "Los **diagramas de Venn** representan cada conjunto como una región cerrada dentro de un rectángulo (el universo). El ejemplo de las diapositivas: dentro de *Osos*, las regiones *negros* y *blancos* se solapan; la intersección son los *pandas*."
    ]
   }
  ],
  "c-parts": [
   {
    "t": "def",
    "title": [
     "conjunt de les parts",
     "conjunto de partes"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$\\mathcal{P}(A) = \\{B \\mid B \\subseteq A\\}$: el conjunt de **tots els subconjunts** d'$A$.",
       "$\\mathcal{P}(A) = \\{B \\mid B \\subseteq A\\}$: el conjunto de **todos los subconjuntos** de $A$."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Remarca",
     "Observación"
    ],
    "label": false,
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "$B \\subseteq A$ si i només si $B \\in \\mathcal{P}(A)$.",
        "$B \\subseteq A$ si y solo si $B \\in \\mathcal{P}(A)$."
       ],
       [
        "Sempre $\\emptyset \\in \\mathcal{P}(A)$ i $A \\in \\mathcal{P}(A)$.",
        "Siempre $\\emptyset \\in \\mathcal{P}(A)$ y $A \\in \\mathcal{P}(A)$."
       ]
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "**El canvi de nivell.** Els elements de $\\mathcal{P}(A)$ no són els elements d'$A$, sinó **conjunts**. Amb $A = \\{1,2,3\\}$: $2 \\in A$ és cert però $2 \\in \\mathcal{P}(A)$ és fals; el que és cert és $\\{2\\} \\in \\mathcal{P}(A)$.",
       "**El cambio de nivel.** Los elementos de $\\mathcal{P}(A)$ no son los elementos de $A$, sino **conjuntos**. Con $A = \\{1,2,3\\}$: $2 \\in A$ es cierto pero $2 \\in \\mathcal{P}(A)$ es falso; lo que es cierto es $\\{2\\} \\in \\mathcal{P}(A)$."
      ]
     },
     {
      "t": "p",
      "x": [
       "Per comptar-los: per formar un subconjunt decideixes, element per element, si hi és o no. Dues opcions per element, per tant $|\\mathcal{P}(A)| = 2^{|A|}$. Casos petits: $\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$ (1 element) i $\\mathcal{P}(\\{a\\}) = \\{\\emptyset, \\{a\\}\\}$ (2).",
       "Para contarlos: para formar un subconjunto decides, elemento a elemento, si está o no. Dos opciones por elemento, por tanto $|\\mathcal{P}(A)| = 2^{|A|}$. Casos pequeños: $\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$ (1 elemento) y $\\mathcal{P}(\\{a\\}) = \\{\\emptyset, \\{a\\}\\}$ (2)."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "parts",
    "props": {
     "id": "th-parts"
    }
   }
  ],
  "c-ops": [
   {
    "t": "def",
    "title": [
     "unió",
     "unión"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$A \\cup B = \\{x \\mid x \\in A\\text{ o } x \\in B\\}$. La «o» inclou el cas de ser als dos, però a la unió cada element hi surt una sola vegada. A la pràctica: ajunta-ho tot i treu les repeticions.",
       "$A \\cup B = \\{x \\mid x \\in A\\text{ o } x \\in B\\}$. La «o» incluye el caso de estar en los dos, pero en la unión cada elemento sale una sola vez. En la práctica: júntalo todo y quita las repeticiones."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "intersecció",
     "intersección"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$A \\cap B = \\{x \\mid x \\in A\\text{ i } x \\in B\\}$: els elements que són **alhora** als dos. A la pràctica: queda't amb els repetits.",
       "$A \\cap B = \\{x \\mid x \\in A\\text{ y } x \\in B\\}$: los elementos que están **a la vez** en los dos. En la práctica: quédate con los repetidos."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "diferència",
     "diferencia"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$A \\setminus B = \\{x \\mid x \\in A\\text{ i } x \\notin B\\}$. **L'ordre importa**: els elements d'$A \\setminus B$ sempre són d'$A$. Per a cada $x \\in A$: si $x \\in B$ el tatxes, si $x \\notin B$ el deixes.",
       "$A \\setminus B = \\{x \\mid x \\in A\\text{ y } x \\notin B\\}$. **El orden importa**: los elementos de $A \\setminus B$ siempre son de $A$. Para cada $x \\in A$: si $x \\in B$ lo tachas, si $x \\notin B$ lo dejas."
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Exemple de referència",
     "Ejemplo de referencia"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$\\Omega = \\{1, \\ldots, 10\\}$, $A = \\{1,2,3,4,5\\}$, $B = \\{4,5,6,7\\}$, $C = \\{2,4,6,8\\}$. Aleshores $A \\cup B = \\{1, \\ldots, 7\\}$, $A \\cap B = \\{4, 5\\}$, $A \\cap B \\cap C = \\{4\\}$, $A \\setminus B = \\{1,2,3\\}$ i $B \\setminus A = \\{6, 7\\}$: diferents, i sense res en comú.",
       "$\\Omega = \\{1, \\ldots, 10\\}$, $A = \\{1,2,3,4,5\\}$, $B = \\{4,5,6,7\\}$, $C = \\{2,4,6,8\\}$. Entonces $A \\cup B = \\{1, \\ldots, 7\\}$, $A \\cap B = \\{4, 5\\}$, $A \\cap B \\cap C = \\{4\\}$, $A \\setminus B = \\{1,2,3\\}$ y $B \\setminus A = \\{6, 7\\}$: distintos, y sin nada en común."
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "Propietats",
     "Propiedades"
    ]
   },
   {
    "t": "table",
    "head": [
     "",
     [
      "Unió",
      "Unión"
     ],
     [
      "Intersecció",
      "Intersección"
     ]
    ],
    "rows": [
     [
      [
       "idempotència",
       "idempotencia"
      ],
      "$A \\cup A = A$",
      "$A \\cap A = A$"
     ],
     [
      [
       "commutativa",
       "conmutativa"
      ],
      "$A \\cup B = B \\cup A$",
      "$A \\cap B = B \\cap A$"
     ],
     [
      [
       "associativa",
       "asociativa"
      ],
      "$(A \\cup B) \\cup C = A \\cup (B \\cup C)$",
      "$(A \\cap B) \\cap C = A \\cap (B \\cap C)$"
     ],
     [
      [
       "el buit",
       "el vacío"
      ],
      [
       "$A \\cup \\emptyset = A$ (neutre)",
       "$A \\cup \\emptyset = A$ (neutro)"
      ],
      [
       "$A \\cap \\emptyset = \\emptyset$ (absorbent)",
       "$A \\cap \\emptyset = \\emptyset$ (absorbente)"
      ]
     ],
     [
      [
       "inclusió",
       "inclusión"
      ],
      "$A \\subseteq A \\cup B$, $B \\subseteq A \\cup B$",
      "$A \\cap B \\subseteq A$, $A \\cap B \\subseteq B$"
     ],
     [
      [
       "caracterització",
       "caracterización"
      ],
      "$A \\subseteq B \\iff A \\cup B = B$",
      "$A \\subseteq B \\iff A \\cap B = A$"
     ],
     [
      "cota",
      [
       "$A \\cup B \\subseteq C \\iff A \\subseteq C$ i $B \\subseteq C$",
       "$A \\cup B \\subseteq C \\iff A \\subseteq C$ y $B \\subseteq C$"
      ],
      [
       "$C \\subseteq A \\cap B \\iff C \\subseteq A$ i $C \\subseteq B$",
       "$C \\subseteq A \\cap B \\iff C \\subseteq A$ y $C \\subseteq B$"
      ]
     ]
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Les set propietats són les mateixes canviant $\\cup$ per $\\cap$ i girant les inclusions. Les que canvien de veritat són la del buit (neutre a la unió, absorbent a la intersecció) i la caracterització: $A \\subseteq B$ sii $A \\cup B = B$ sii $A \\cap B = A$. Comprova-ho amb Venn: si el cercle A és dins del B, unir-los dona B i intersecar-los dona A.",
       "Las siete propiedades son las mismas cambiando $\\cup$ por $\\cap$ y girando las inclusiones. Las que cambian de verdad son la del vacío (neutro en la unión, absorbente en la intersección) y la caracterización: $A \\subseteq B$ sii $A \\cup B = B$ sii $A \\cap B = A$. Compruébalo con Venn: si el círculo A está dentro del B, unirlos da B e intersecarlos da A."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Teorema (diferència)",
     "Teorema (diferencia)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "list",
      "items": [
       "$A \\setminus B \\subseteq A$",
       "$A \\setminus \\emptyset = A$",
       "$\\emptyset \\setminus A = \\emptyset$",
       "$A \\setminus A = \\emptyset$",
       "$(A \\setminus B) \\cap (B \\setminus A) = \\emptyset$",
       "$(A \\setminus B) \\cap B = \\emptyset$",
       "$A \\setminus B = A \\setminus (A \\cap B)$",
       [
        "$A \\subseteq B$ si i només si $A \\setminus B = \\emptyset$",
        "$A \\subseteq B$ si y solo si $A \\setminus B = \\emptyset$"
       ],
       [
        "$C \\subseteq A \\setminus B$ si i només si $C \\subseteq A$ i $C \\cap B = \\emptyset$",
        "$C \\subseteq A \\setminus B$ si y solo si $C \\subseteq A$ y $C \\cap B = \\emptyset$"
       ]
      ],
      "ordered": true
     }
    ]
   },
   {
    "t": "p",
    "x": [
     "Generalitzades: $\\bigcup_{i=1}^{k} A_{i} = \\{x \\mid x \\in A_{1}\\text{ o } \\ldots\\text{ o } x \\in A_{k}\\}$ i $\\bigcap_{i=1}^{k} A_{i} = \\{x \\mid x \\in A_{1}\\text{ i } \\ldots\\text{ i } x \\in A_{k}\\}$. Els $A_{1}, \\ldots, A_{k}$ són **disjunts dos a dos** si $A_{i} \\cap A_{j} = \\emptyset$ per a tot $i \\ne j$.",
     "Generalizadas: $\\bigcup_{i=1}^{k} A_{i} = \\{x \\mid x \\in A_{1}\\text{ o } \\ldots\\text{ o } x \\in A_{k}\\}$ y $\\bigcap_{i=1}^{k} A_{i} = \\{x \\mid x \\in A_{1}\\text{ y } \\ldots\\text{ y } x \\in A_{k}\\}$. Los $A_{1}, \\ldots, A_{k}$ son **disjuntos dos a dos** si $A_{i} \\cap A_{j} = \\emptyset$ para todo $i \\ne j$."
    ]
   },
   {
    "t": "p",
    "x": [
     "Al laboratori, escriu una expressió i mira com es construeix per parts: cada subexpressió té el seu Venn. Toca una zona per seguir un element a través de l'expressió.",
     "En el laboratorio, escribe una expresión y mira cómo se construye por partes: cada subexpresión tiene su Venn. Toca una zona para seguir un elemento a través de la expresión."
    ]
   },
   {
    "t": "lab",
    "id": "venn",
    "props": {
     "id": "th-venn1",
     "cfg": {
      "e1": "(A∖B)∪(B∖A)",
      "e2": ""
     }
    }
   }
  ],
  "c-part": [
   {
    "t": "def",
    "title": [
     "partició",
     "partición"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Sigui $A$ un conjunt i $C = \\{C_{1}, \\ldots, C_{k}\\} \\subsetneq \\mathcal{P}(A)$. $C$ és una **partició** d'$A$ si:",
       "Sea $A$ un conjunto y $C = \\{C_{1}, \\ldots, C_{k}\\} \\subsetneq \\mathcal{P}(A)$. $C$ es una **partición** de $A$ si:"
      ]
     },
     {
      "t": "list",
      "items": [
       [
        "si $i \\ne j$, aleshores $C_{i} \\cap C_{j} = \\emptyset$ (els trossos no se solapen);",
        "si $i \\ne j$, entonces $C_{i} \\cap C_{j} = \\emptyset$ (los trozos no se solapan);"
       ],
       [
        "$C_{1} \\cup \\ldots \\cup C_{k} = A$ (entre tots ho cobreixen).",
        "$C_{1} \\cup \\ldots \\cup C_{k} = A$ (entre todos lo cubren)."
       ]
      ],
      "ordered": true
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Dit d'una altra manera: **cada element d'$A$ és exactament a un tros**. «Com a molt a un» és la condició 1; «com a mínim a un» és la condició 2. Ho tornaràs a veure amb les classes d'equivalència: el conjunt quocient és sempre una partició.",
       "Dicho de otra manera: **cada elemento de $A$ está exactamente en un trozo**. «Como mucho en uno» es la condición 1; «como mínimo en uno» es la condición 2. Lo volverás a ver con las clases de equivalencia: el conjunto cociente es siempre una partición."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "particio",
    "props": {
     "id": "th-part"
    }
   }
  ],
  "c-lleis": [
   {
    "t": "thm",
    "title": [
     "Teorema (distributives) i absorció",
     "Teorema (distributivas) y absorción"
    ],
    "label": false,
    "blocks": [
     {
      "t": "list",
      "items": [
       "$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$",
       "$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$",
       "$A \\cap (A \\cup B) = A$"
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "univers i complementari",
     "universo y complementario"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$\\Omega$ és el conjunt universal, el de tots els elements possibles. Si $A \\subseteq \\Omega$, el **complementari** d'$A$ és $\\overline{A} = \\Omega \\setminus A$ (també $A^{c}$).",
       "$\\Omega$ es el conjunto universal, el de todos los elementos posibles. Si $A \\subseteq \\Omega$, el **complementario** de $A$ es $\\overline{A} = \\Omega \\setminus A$ (también $A^{c}$)."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Teorema (complementari)",
     "Teorema (complementario)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "table",
      "head": [
       "",
       [
        "Propietat",
        "Propiedad"
       ]
      ],
      "rows": [
       [
        "a)",
        "$\\overline{\\emptyset} = \\Omega$, $\\overline{\\Omega} = \\emptyset$"
       ],
       [
        "b)",
        "$\\overline{\\overline{A}} = A$"
       ],
       [
        "c)",
        "$A \\cap \\overline{A} = \\emptyset$"
       ],
       [
        "d)",
        "$A \\subseteq B \\iff \\overline{B} \\subseteq \\overline{A}$"
       ],
       [
        "e)",
        "$A = B \\iff \\overline{A} = \\overline{B}$"
       ],
       [
        "f)",
        "$A \\cap B = \\emptyset \\iff A \\subseteq \\overline{B}$"
       ],
       [
        "g)",
        "$A \\cup B = \\Omega \\iff \\overline{A} \\subseteq B$"
       ],
       [
        "h)",
        "$A \\cap B = \\overline{\\overline{A} \\cup \\overline{B}}$"
       ],
       [
        "i)",
        "$A \\cup B = \\overline{\\overline{A} \\cap \\overline{B}}$"
       ]
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": "Teorema (De Morgan)",
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "$\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$ i $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$",
       "$\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$ y $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$"
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Conjunts i lògica són el mateix llenguatge.** Cada operació es tradueix en un connector sobre «$x \\in \\ldots$»:",
       "**Conjuntos y lógica son el mismo lenguaje.** Cada operación se traduce en un conector sobre «$x \\in \\ldots$»:"
      ]
     },
     {
      "t": "table",
      "head": [
       [
        "Conjunts",
        "Conjuntos"
       ],
       [
        "Lògica",
        "Lógica"
       ]
      ],
      "rows": [
       [
        "$x \\in A \\cup B$",
        "$x \\in A \\vee x \\in B$"
       ],
       [
        "$x \\in A \\cap B$",
        "$x \\in A \\wedge x \\in B$"
       ],
       [
        "$x \\in \\overline{A}$",
        [
         "$\\neg(x \\in A)$, és a dir $x \\notin A$",
         "$\\neg(x \\in A)$, es decir $x \\notin A$"
        ]
       ],
       [
        "$x \\in A \\setminus B$",
        "$x \\in A \\wedge x \\notin B$"
       ],
       [
        "$A \\subseteq B$",
        "$x \\in A \\Rightarrow x \\in B$"
       ]
      ]
     },
     {
      "t": "p",
      "x": [
       "Per això De Morgan per a conjunts és el mateix que $\\neg(p \\vee q) \\equiv \\neg p \\wedge \\neg q$: «no ser a $A \\cup B$» vol dir «no ser a $A$ i no ser a $B$». Quan una demostració d'igualtat de conjunts s'encalla, tradueix-la a lògica, simplifica i torna.",
       "Por eso De Morgan para conjuntos es lo mismo que $\\neg(p \\vee q) \\equiv \\neg p \\wedge \\neg q$: «no estar en $A \\cup B$» quiere decir «no estar en $A$ y no estar en $B$». Cuando una demostración de igualdad de conjuntos se atasca, tradúcela a lógica, simplifica y vuelve."
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "Com es demostra una igualtat de conjunts",
     "Cómo se demuestra una igualdad de conjuntos"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Mètode",
      "Método"
     ],
     [
      "Com",
      "Cómo"
     ],
     [
      "Quan",
      "Cuándo"
     ]
    ],
    "rows": [
     [
      [
       "**Doble inclusió** (o cadena de ⟺)",
       "**Doble inclusión** (o cadena de ⟺)"
      ],
      [
       "«Sigui $x$…», tradueix a lògica, simplifica, torna a conjunts.",
       "«Sea $x$…», traduce a lógica, simplifica, vuelve a conjuntos."
      ],
      [
       "Sempre funciona. És el mètode de referència.",
       "Siempre funciona. Es el método de referencia."
      ]
     ],
     [
      [
       "**Cadena de lleis**",
       "**Cadena de leyes**"
      ],
      [
       "Transforma un costat amb propietats ja demostrades, citant cada una.",
       "Transforma un lado con propiedades ya demostradas, citando cada una."
      ],
      [
       "Quan l'enunciat diu «fent servir l'apartat anterior».",
       "Cuando el enunciado dice «usando el apartado anterior»."
      ]
     ],
     [
      "**Venn**",
      [
       "Pinta les dues bandes i compara.",
       "Pinta los dos lados y compara."
      ],
      [
       "Per comprovar i per trobar contraexemples. No val com a demostració.",
       "Para comprobar y para encontrar contraejemplos. No vale como demostración."
      ]
     ]
    ]
   },
   {
    "t": "example",
    "title": [
     "De Morgan (a) per doble inclusió en una sola cadena",
     "De Morgan (a) por doble inclusión en una sola cadena"
    ],
    "blocks": [
     {
      "t": "steps",
      "reveal": true,
      "steps": [
       {
        "x": "$x \\in \\overline{A \\cup B}$",
        "why": [
         "Sigui x ∈ Ω qualsevol.",
         "Sea x ∈ Ω cualquiera."
        ]
       },
       {
        "x": "$\\iff x \\notin A \\cup B$",
        "why": [
         "definició de complementari",
         "definición de complementario"
        ]
       },
       {
        "x": "$\\iff \\neg(x \\in A \\vee x \\in B)$",
        "why": [
         "definició d'unió",
         "definición de unión"
        ]
       },
       {
        "x": "$\\iff x \\notin A \\wedge x \\notin B$",
        "why": [
         "De Morgan de la lògica",
         "De Morgan de la lógica"
        ]
       },
       {
        "x": "$\\iff x \\in \\overline{A} \\wedge x \\in \\overline{B}$",
        "why": [
         "definició de complementari",
         "definición de complementario"
        ]
       },
       {
        "x": "$\\iff x \\in \\overline{A} \\cap \\overline{B}$",
        "done": true,
        "why": [
         "definició d'intersecció. Com que tots els passos són ⟺, valen les dues inclusions: per doble inclusió, $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$. ∎",
         "definición de intersección. Como todos los pasos son ⟺, valen las dos inclusiones: por doble inclusión, $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$. ∎"
        ]
       }
      ]
     }
    ]
   },
   {
    "t": "p",
    "x": [
     "Al laboratori pots carregar els exercicis del full i del CP1-2025 i mirar si les dues bandes coincideixen. Les dues «trampes» són igualtats que semblen certes i no ho són: el Venn et dona el contraexemple.",
     "En el laboratorio puedes cargar los ejercicios de la hoja y del CP1-2025 y mirar si los dos lados coinciden. Las dos «trampas» son igualdades que parecen ciertas y no lo son: el Venn te da el contraejemplo."
    ]
   },
   {
    "t": "lab",
    "id": "venn",
    "props": {
     "id": "th-venn2",
     "cfg": {
      "e1": "(A∪B)ᶜ",
      "e2": "Aᶜ∩Bᶜ"
     }
    }
   }
  ],
  "c-prod": [
   {
    "t": "def",
    "title": [
     "producte cartesià",
     "producto cartesiano"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si $A$ i $B$ són no buits, $A \\times B = \\{(a, b) \\mid a \\in A, b \\in B\\}$. Si algun és buit, el producte és $\\emptyset$. Dos parells són iguals quan coincideixen coordenada a coordenada: $(x, y) = (z, t) \\iff x = z$ i $y = t$.",
       "Si $A$ y $B$ son no vacíos, $A \\times B = \\{(a, b) \\mid a \\in A, b \\in B\\}$. Si alguno es vacío, el producto es $\\emptyset$. Dos pares son iguales cuando coinciden coordenada a coordenada: $(x, y) = (z, t) \\iff x = z$ y $y = t$."
      ]
     }
    ]
   },
   {
    "t": "warn",
    "blocks": [
     {
      "t": "p",
      "x": [
       "**L'ordre importa.** $(1, x) \\ne (x, 1)$, i si $A \\ne B$, $A \\times B \\ne B \\times A$. A diferència d'un conjunt $\\{a, b\\}$, en un parell $(a, b)$ cada posició té significat.",
       "**El orden importa.** $(1, x) \\ne (x, 1)$, y si $A \\ne B$, $A \\times B \\ne B \\times A$. A diferencia de un conjunto $\\{a, b\\}$, en un par $(a, b)$ cada posición tiene significado."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": "Teorema (cardinal)",
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "$|A \\times B| = |A| \\cdot |B|$, i en general $|A_{1} \\times \\ldots \\times A_{k}| = |A_{1}| \\cdots |A_{k}|$. Generalització: $A_{1} \\times \\ldots \\times A_{k} = \\{(a_{1}, \\ldots, a_{k}) \\mid a_{i} \\in A_{i}\\}$.",
       "$|A \\times B| = |A| \\cdot |B|$, y en general $|A_{1} \\times \\ldots \\times A_{k}| = |A_{1}| \\cdots |A_{k}|$. Generalización: $A_{1} \\times \\ldots \\times A_{k} = \\{(a_{1}, \\ldots, a_{k}) \\mid a_{i} \\in A_{i}\\}$."
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Dibuixa el producte com una **graella**: files = elements del primer conjunt, columnes = elements del segon. Cada casella és un parell, i per això hi ha $|A| \\cdot |B|$ caselles. $\\mathbb{R} \\times \\mathbb{R} = \\mathbb{R}^{2}$ és el pla, i cada parell és un punt. Per demostrar igualtats amb productes, agafa un parell genèric $(x, y)$ i tradueix cada coordenada a lògica.",
       "Dibuja el producto como una **cuadrícula**: filas = elementos del primer conjunto, columnas = elementos del segundo. Cada casilla es un par, y por eso hay $|A| \\cdot |B|$ casillas. $\\mathbb{R} \\times \\mathbb{R} = \\mathbb{R}^{2}$ es el plano, y cada par es un punto. Para demostrar igualdades con productos, toma un par genérico $(x, y)$ y traduce cada coordenada a lógica."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "producte",
    "props": {
     "id": "th-prod"
    }
   }
  ]
 },
 "examEnd": []
};
