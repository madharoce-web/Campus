// Generat per tools/kit-import/mates.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Seccions 12–14 dels apunts: propietats, equivalència, ordre i diagrames de Hasse.",
    "Secciones 12–14 de los apuntes: propiedades, equivalencia, orden y diagramas de Hasse."
   ]
  }
 ],
 "sections": {
  "r-rel": [
   {
    "t": "def",
    "title": [
     "relació binària",
     "relación binaria"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Una **relació binària** en un conjunt $A$ és una parella formada per $A$ i **un subconjunt de $A \\times A$**, el **graf de la relació** $G(\\mathcal{R})$. Escrivim $x \\mathcal{R} y$ si $(x, y) \\in G(\\mathcal{R})$.",
       "Una **relación binaria** en un conjunto $A$ es una pareja formada por $A$ y **un subconjunto de $A \\times A$**, el **grafo de la relación** $G(\\mathcal{R})$. Escribimos $x \\mathcal{R} y$ si $(x, y) \\in G(\\mathcal{R})$."
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
       "A $A = \\{1, 2, 3\\}$ amb «és més petit que»: de les 9 parelles d'$A \\times A$ només en queden tres, $G(\\mathcal{R}) = \\{(1,2), (1,3), (2,3)\\}$. Així $1 \\mathcal{R} 2$ és cert i $2 \\mathcal{R} 1$ és fals.",
       "En $A = \\{1, 2, 3\\}$ con «es menor que»: de los 9 pares de $A \\times A$ solo quedan tres, $G(\\mathcal{R}) = \\{(1,2), (1,3), (2,3)\\}$. Así $1 \\mathcal{R} 2$ es cierto y $2 \\mathcal{R} 1$ es falso."
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
       "Una relació **és** una llista de parelles. Hi ha tres maneres equivalents de veure-la, i el laboratori les mostra alhora: la llista $G(\\mathcal{R})$; una **matriu** amb un 1 a la fila $x$, columna $y$ quan $x \\mathcal{R} y$; i un **graf** amb una fletxa $x \\to y$. Cada propietat es veu millor en una de les tres.",
       "Una relación **es** una lista de pares. Hay tres maneras equivalentes de verla, y el laboratorio las muestra a la vez: la lista $G(\\mathcal{R})$; una **matriz** con un 1 en la fila $x$, columna $y$ cuando $x \\mathcal{R} y$; y un **grafo** con una flecha $x \\to y$. Cada propiedad se ve mejor en una de las tres."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "relacio",
    "props": {
     "id": "th-rel1",
     "cfg": {
      "pre": "lt"
     }
    }
   }
  ],
  "r-props": [
   {
    "t": "table",
    "head": [
     [
      "Propietat",
      "Propiedad"
     ],
     [
      "Condició",
      "Condición"
     ],
     [
      "A la matriu / al graf",
      "En la matriz / en el grafo"
     ]
    ],
    "rows": [
     [
      "**Reflexiva**",
      "$\\forall x \\in A,\\quad x \\mathcal{R} x$",
      [
       "diagonal plena / un bucle a cada node",
       "diagonal llena / un bucle en cada nodo"
      ]
     ],
     [
      "No reflexiva",
      "$\\exists x \\in A,\\quad x \\mathrel{\\cancel{\\mathcal{R}}} x$",
      [
       "algun 0 a la diagonal",
       "algún 0 en la diagonal"
      ]
     ],
     [
      [
       "Antireflexiva",
       "Antirreflexiva"
      ],
      "$\\forall x \\in A,\\quad x \\mathrel{\\cancel{\\mathcal{R}}} x$",
      [
       "diagonal buida",
       "diagonal vacía"
      ]
     ],
     [
      [
       "**Simètrica**",
       "**Simétrica**"
      ],
      "$x \\mathcal{R} y \\Rightarrow y \\mathcal{R} x$",
      [
       "matriu simètrica / cada fletxa té la de tornada",
       "matriz simétrica / cada flecha tiene la de vuelta"
      ]
     ],
     [
      [
       "No simètrica",
       "No simétrica"
      ],
      "$\\exists x, y:\\quad x \\mathcal{R} y \\wedge y \\mathrel{\\cancel{\\mathcal{R}}} x$",
      [
       "una fletxa sense tornada",
       "una flecha sin vuelta"
      ]
     ],
     [
      [
       "**Antisimètrica**",
       "**Antisimétrica**"
      ],
      "$x \\ne y$, $x \\mathcal{R} y \\Rightarrow y \\mathrel{\\cancel{\\mathcal{R}}} x$",
      [
       "mai anada i tornada entre nodes diferents",
       "nunca ida y vuelta entre nodos distintos"
      ]
     ],
     [
      "**Transitiva**",
      "$x \\mathcal{R} y \\wedge y \\mathcal{R} z \\Rightarrow x \\mathcal{R} z$",
      [
       "cada camí de dues fletxes té drecera",
       "cada camino de dos flechas tiene atajo"
      ]
     ],
     [
      "No transitiva",
      "$\\exists x, y, z:\\quad x \\mathcal{R} y, y \\mathcal{R} z, x \\mathrel{\\cancel{\\mathcal{R}}} z$",
      [
       "un camí sense drecera",
       "un camino sin atajo"
      ]
     ],
     [
      "Antitransitiva",
      "$x \\mathcal{R} y \\wedge y \\mathcal{R} z \\Rightarrow x \\mathrel{\\cancel{\\mathcal{R}}} z$",
      [
       "cap camí té drecera",
       "ningún camino tiene atajo"
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
       "**«No reflexiva» no és «antireflexiva».** No reflexiva: falla per a *algun* element. Antireflexiva: falla per a *tots*. La segona implica la primera, però no al revés. El mateix passa amb simètrica/antisimètrica i transitiva/antitransitiva: **antisimètrica no és «no simètrica»**.",
       "**«No reflexiva» no es «antirreflexiva».** No reflexiva: falla para *algún* elemento. Antirreflexiva: falla para *todos*. La segunda implica la primera, pero no al revés. Lo mismo pasa con simétrica/antisimétrica y transitiva/antitransitiva: **antisimétrica no es «no simétrica»**."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Proposició (antisimetria a la pràctica)",
     "Proposición (antisimetría en la práctica)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "$\\mathcal{R}$ és antisimètrica si i només si: $x \\mathcal{R} y$ i $y \\mathcal{R} x$ implica $x = y$. «Si vas i tornes, és que no t'has mogut.»",
       "$\\mathcal{R}$ es antisimétrica si y solo si: $x \\mathcal{R} y$ e $y \\mathcal{R} x$ implica $x = y$. «Si vas y vuelves, es que no te has movido.»"
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
       "**Com es demostra i com es refuta.** Les propietats comencen per «per a tot»:",
       "**Cómo se demuestra y cómo se refuta.** Las propiedades empiezan por «para todo»:"
      ]
     },
     {
      "t": "list",
      "items": [
       [
        "Per **demostrar-la**: agafa elements qualssevol que compleixin la hipòtesi («siguin $x, y$ amb $x \\mathcal{R} y$») i arriba a la conclusió amb la definició de la relació. Comprovar exemples no val.",
        "Para **demostrarla**: toma elementos cualesquiera que cumplan la hipótesis («sean $x, y$ con $x \\mathcal{R} y$») y llega a la conclusión con la definición de la relación. Comprobar ejemplos no vale."
       ],
       [
        "Per **refutar-la**: n'hi ha prou amb **un** contraexemple concret, escrit amb números.",
        "Para **refutarla**: basta con **un** contraejemplo concreto, escrito con números."
       ]
      ]
     },
     {
      "t": "p",
      "x": [
       "A la secció següent, «Com es demostra», hi ha el mètode pas a pas, exemples resolts i un laboratori per practicar-lo.",
       "En la sección siguiente, «Cómo se demuestra», está el método paso a paso, ejemplos resueltos y un laboratorio para practicarlo."
      ]
     }
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Relació a $\\{1,2,3\\}$",
      "Relación en $\\{1,2,3\\}$"
     ],
     "R",
     "S",
     "AS",
     "T"
    ],
    "rows": [
     [
      "$=$",
      "Sí",
      "Sí",
      "Sí",
      "Sí"
     ],
     [
      "$\\le$",
      "Sí",
      "No",
      "Sí",
      "Sí"
     ],
     [
      "$<$",
      [
       "antireflexiva",
       "antirreflexiva"
      ],
      "No",
      "Sí",
      "Sí"
     ],
     [
      "$\\ne$",
      [
       "antireflexiva",
       "antirreflexiva"
      ],
      "Sí",
      "No",
      "No"
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "El cas de $\\ne$: $1 \\ne 2$ i $2 \\ne 1$, però $1 = 1$; tenim $1 \\mathcal{R} 2$, $2 \\mathcal{R} 1$ i $1 \\mathrel{\\cancel{\\mathcal{R}}} 1$, per tant **no és transitiva**. És l'exemple típic de simètrica no transitiva. I $=$ és l'única que és alhora simètrica i antisimètrica.",
     "El caso de $\\ne$: $1 \\ne 2$ y $2 \\ne 1$, pero $1 = 1$; tenemos $1 \\mathcal{R} 2$, $2 \\mathcal{R} 1$ y $1 \\mathrel{\\cancel{\\mathcal{R}}} 1$, por tanto **no es transitiva**. Es el ejemplo típico de simétrica no transitiva. Y $=$ es la única que es a la vez simétrica y antisimétrica."
    ]
   },
   {
    "t": "p",
    "x": [
     "Al laboratori, toca una propietat amb ✗ i el graf marca en vermell les fletxes del contraexemple.",
     "En el laboratorio, toca una propiedad con ✗ y el grafo marca en rojo las flechas del contraejemplo."
    ]
   },
   {
    "t": "lab",
    "id": "relacio",
    "props": {
     "id": "th-rel2",
     "cfg": {
      "pre": "ne"
     }
    }
   }
  ],
  "r-demo": [
   {
    "t": "p",
    "x": [
     "Un exercici típic diu «Estudieu si $\\mathcal{R}$ és reflexiva, simètrica i transitiva» o «Demostreu que $\\mathcal{R}$ és d'equivalència». Per a cada propietat hi ha dues respostes possibles, i cadascuna es justifica d'una manera diferent:",
     "Un ejercicio típico dice «Estudiad si $\\mathcal{R}$ es reflexiva, simétrica y transitiva» o «Demostrad que $\\mathcal{R}$ es de equivalencia». Para cada propiedad hay dos respuestas posibles, y cada una se justifica de una manera distinta:"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "**Sí que la compleix** → s'ha de **demostrar** per a elements qualssevol, amb lletres. Provar uns quants números no n'hi ha prou.",
      "**Sí la cumple** → hay que **demostrarla** para elementos cualesquiera, con letras. Probar unos cuantos números no basta."
     ],
     [
      "**No la compleix** → n'hi ha prou amb **un contraexemple**: uns números concrets on falla.",
      "**No la cumple** → basta con **un contraejemplo**: unos números concretos donde falla."
     ]
    ]
   },
   {
    "t": "h",
    "x": [
     "La recepta de cada propietat",
     "La receta de cada propiedad"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Propietat",
      "Propiedad"
     ],
     [
      "Suposes",
      "Supones"
     ],
     [
      "Has d'arribar a",
      "Tienes que llegar a"
     ],
     [
      "Per dir que no",
      "Para decir que no"
     ]
    ],
    "rows": [
     [
      "**Reflexiva**",
      [
       "res: un $x \\in A$ qualsevol",
       "nada: un $x \\in A$ cualquiera"
      ],
      "$x \\mathcal{R} x$",
      [
       "**un** $x$ amb $x \\mathrel{\\cancel{\\mathcal{R}}} x$",
       "**un** $x$ con $x \\mathrel{\\cancel{\\mathcal{R}}} x$"
      ]
     ],
     [
      [
       "**Simètrica**",
       "**Simétrica**"
      ],
      "$x \\mathcal{R} y$",
      "$y \\mathcal{R} x$",
      [
       "**dos**: $x \\mathcal{R} y$ però $y \\mathrel{\\cancel{\\mathcal{R}}} x$",
       "**dos**: $x \\mathcal{R} y$ pero $y \\mathrel{\\cancel{\\mathcal{R}}} x$"
      ]
     ],
     [
      "**Transitiva**",
      [
       "$x \\mathcal{R} y$ i $y \\mathcal{R} z$",
       "$x \\mathcal{R} y$ y $y \\mathcal{R} z$"
      ],
      "$x \\mathcal{R} z$",
      [
       "**tres**: $x \\mathcal{R} y$, $y \\mathcal{R} z$ però $x \\mathrel{\\cancel{\\mathcal{R}}} z$",
       "**tres**: $x \\mathcal{R} y$, $y \\mathcal{R} z$ pero $x \\mathrel{\\cancel{\\mathcal{R}}} z$"
      ]
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Són les files de §3 del formulari. Les tres primeres et diuen què has de demostrar; les de «no», com ha de ser el contraexemple:",
     "Son las filas de §3 del formulario. Las tres primeras te dicen qué tienes que demostrar; las de «no», cómo tiene que ser el contraejemplo:"
    ]
   },
   {
    "t": "list",
    "items": [
     "**§3 reflexiva** $\\forall x \\in A\\quad x \\mathcal{R} x$",
     "**§3 simètrica** $x \\mathcal{R} y \\Rightarrow y \\mathcal{R} x$",
     "**§3 transitiva** $x \\mathcal{R} y \\wedge y \\mathcal{R} z \\Rightarrow x \\mathcal{R} z$",
     "**§3 no reflexiva** $\\exists x \\in A \\mid x \\mathrel{\\cancel{\\mathcal{R}}} x$",
     "**§3 no simètrica** $\\exists x, y \\in A \\mid (x \\mathcal{R} y \\wedge y \\mathrel{\\cancel{\\mathcal{R}}} x)$",
     "**§3 no transitiva** $\\exists x, y, z \\in A \\mid (x \\mathcal{R} y \\wedge y \\mathcal{R} z \\wedge x \\mathrel{\\cancel{\\mathcal{R}}} z)$"
    ]
   },
   {
    "t": "thm",
    "title": [
     "El mètode, en quatre passos",
     "El método, en cuatro pasos"
    ],
    "label": false,
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "**Tradueix la hipòtesi** amb la definició de $\\mathcal{R}$. Si $x \\mathcal{R} y$ vol dir «$x - y$ és múltiple de 3», escriu $x - y = 3k$ amb $k \\in \\mathbb{Z}$.",
        "**Traduce la hipótesis** con la definición de $\\mathcal{R}$. Si $x \\mathcal{R} y$ quiere decir «$x - y$ es múltiplo de 3», escribe $x - y = 3k$ con $k \\in \\mathbb{Z}$."
       ],
       [
        "**Escriu l'objectiu**, també traduït, i deixa'l a la vista: és on has d'arribar. Per a $y \\mathcal{R} x$: «vull $y - x = 3 \\cdot (\\text{un enter})$».",
        "**Escribe el objetivo**, también traducido, y déjalo a la vista: es adonde tienes que llegar. Para $y \\mathcal{R} x$: «quiero $y - x = 3 \\cdot (\\text{un entero})$»."
       ],
       [
        "**Calcula partint de la hipòtesi** (mai de l'objectiu) fins que surti exactament la forma de l'objectiu: $y - x = -(x - y) = -3k = 3 \\cdot (-k)$.",
        "**Calcula partiendo de la hipótesis** (nunca del objetivo) hasta que salga exactamente la forma del objetivo: $y - x = -(x - y) = -3k = 3 \\cdot (-k)$."
       ],
       [
        "**Conclou** i comprova que el número nou és del conjunt que demana la definició: «$-k \\in \\mathbb{Z}$, per tant $y \\mathcal{R} x$».",
        "**Concluye** y comprueba que el número nuevo es del conjunto que pide la definición: «$-k \\in \\mathbb{Z}$, por tanto $y \\mathcal{R} x$»."
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
       "**Traduir és omplir un motlle.** La definició de $\\mathcal{R}$ és un motlle amb dos forats: el que hi ha a l'esquerra de $\\mathcal{R}$ va al primer i el que hi ha a la dreta, al segon. Amb «$a \\mathcal{R} b \\iff a - b = 3k$, $k \\in \\mathbb{Z}$»:",
       "**Traducir es rellenar un molde.** La definición de $\\mathcal{R}$ es un molde con dos huecos: lo que hay a la izquierda de $\\mathcal{R}$ va al primero y lo que hay a la derecha, al segundo. Con «$a \\mathcal{R} b \\iff a - b = 3k$, $k \\in \\mathbb{Z}$»:"
      ]
     },
     {
      "t": "table",
      "head": [
       [
        "Vull escriure",
        "Quiero escribir"
       ],
       [
        "Traducció",
        "Traducción"
       ]
      ],
      "rows": [
       [
        "$x \\mathcal{R} x$",
        "$x - x = 3 \\cdot (\\ldots)$"
       ],
       [
        "$y \\mathcal{R} x$",
        "$y - x = 3 \\cdot (\\ldots)$"
       ],
       [
        "$x \\mathcal{R} z$",
        "$x - z = 3 \\cdot (\\ldots)$"
       ]
      ]
     },
     {
      "t": "p",
      "x": [
       "Als punts suspensius hi ha d'anar un enter, però encara no saps quin: és el que trobaràs fent el càlcul.",
       "En los puntos suspensivos tiene que ir un entero, pero todavía no sabes cuál: es lo que encontrarás haciendo el cálculo."
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Model complet: $x \\mathcal{R} y \\iff x + y$ és parell, a $\\mathbb{Z}$",
     "Modelo completo: $x \\mathcal{R} y \\iff x + y$ es par, en $\\mathbb{Z}$"
    ],
    "blocks": [
     {
      "t": "steps",
      "reveal": true,
      "steps": [
       {
        "x": [
         "**Traducció**\n$x \\mathcal{R} y\\quad \\iff\\quad x + y = 2k$ amb $k \\in \\mathbb{Z}$",
         "**Traducción**\n$x \\mathcal{R} y\\quad \\iff\\quad x + y = 2k$ con $k \\in \\mathbb{Z}$"
        ],
        "why": [
         "«Parell» vol dir «doble d'un enter».",
         "«Par» quiere decir «doble de un entero»."
        ]
       },
       {
        "x": [
         "**Reflexiva · hipòtesi i objectiu**\nSigui $x \\in \\mathbb{Z}$ qualsevol. Vull: $x + x = 2 \\cdot (\\text{un enter})$.",
         "**Reflexiva · hipótesis y objetivo**\nSea $x \\in \\mathbb{Z}$ cualquiera. Quiero: $x + x = 2 \\cdot (\\text{un entero})$."
        ],
        "f": [
         "Rref"
        ],
        "ft": "§3 reflexiva"
       },
       {
        "x": [
         "**Reflexiva · càlcul**\n$x + x = 2x$",
         "**Reflexiva · cálculo**\n$x + x = 2x$"
        ],
        "why": [
         "$x \\in \\mathbb{Z}$, per tant $x \\mathcal{R} x$.",
         "$x \\in \\mathbb{Z}$, por tanto $x \\mathcal{R} x$."
        ]
       },
       {
        "x": [
         "**Simètrica · hipòtesi i objectiu**\nSiguin $x, y$ amb $x + y = 2k$, $k \\in \\mathbb{Z}$. Vull: $y + x = 2 \\cdot (\\text{un enter})$.",
         "**Simétrica · hipótesis y objetivo**\nSean $x, y$ con $x + y = 2k$, $k \\in \\mathbb{Z}$. Quiero: $y + x = 2 \\cdot (\\text{un entero})$."
        ],
        "f": [
         "Rsim"
        ],
        "ft": "§3 simètrica"
       },
       {
        "x": [
         "**Simètrica · càlcul**\n$y + x = x + y = 2k$",
         "**Simétrica · cálculo**\n$y + x = x + y = 2k$"
        ],
        "why": [
         "La suma és commutativa; per tant $y \\mathcal{R} x$.",
         "La suma es conmutativa; por tanto $y \\mathcal{R} x$."
        ]
       },
       {
        "x": [
         "**Transitiva · hipòtesis i objectiu**\nSiguin $x, y, z$ amb $x + y = 2k$ i $y + z = 2m$, $k, m \\in \\mathbb{Z}$. Vull: $x + z = 2 \\cdot (\\text{un enter})$.",
         "**Transitiva · hipótesis y objetivo**\nSean $x, y, z$ con $x + y = 2k$ e $y + z = 2m$, $k, m \\in \\mathbb{Z}$. Quiero: $x + z = 2 \\cdot (\\text{un entero})$."
        ],
        "f": [
         "Rtra"
        ],
        "ft": "§3 transitiva",
        "why": [
         "Dues lletres diferents, $k$ i $m$: res no diu que siguin iguals.",
         "Dos letras distintas, $k$ y $m$: nada dice que sean iguales."
        ]
       },
       {
        "x": [
         "**Transitiva · càlcul**\n$x + z = (x + y) + (y + z) - 2y = 2k + 2m - 2y = 2(k + m - y)$",
         "**Transitiva · cálculo**\n$x + z = (x + y) + (y + z) - 2y = 2k + 2m - 2y = 2(k + m - y)$"
        ],
        "why": [
         "Truc: sumo les dues hipòtesis i trec la $y$ del mig. Com que $k + m - y \\in \\mathbb{Z}$, $x \\mathcal{R} z$.",
         "Truco: sumo las dos hipótesis y quito la $y$ de en medio. Como $k + m - y \\in \\mathbb{Z}$, $x \\mathcal{R} z$."
        ]
       },
       {
        "x": [
         "**Conclusió**\nReflexiva, simètrica i transitiva: **és d'equivalència**. Les classes són $[0]$ = els parells i $[1]$ = els senars.",
         "**Conclusión**\nReflexiva, simétrica y transitiva: **es de equivalencia**. Las clases son $[0]$ = los pares y $[1]$ = los impares."
        ],
        "done": true,
        "f": [
         "Req"
        ],
        "ft": "§3 equivalència"
       }
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "Si la relació és finita: es comprova cas per cas",
     "Si la relación es finita: se comprueba caso por caso"
    ]
   },
   {
    "t": "p",
    "x": [
     "Quan $A$ és finit i et donen la llista $G(\\mathcal{R})$, la matriu o el graf, no calen lletres: es poden mirar tots els casos. L'ordre que convé:",
     "Cuando $A$ es finito y te dan la lista $G(\\mathcal{R})$, la matriz o el grafo, no hacen falta letras: se pueden mirar todos los casos. El orden que conviene:"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Propietat",
      "Propiedad"
     ],
     [
      "Què mires",
      "Qué miras"
     ],
     [
      "A la matriu / al graf",
      "En la matriz / en el grafo"
     ]
    ],
    "rows": [
     [
      "Reflexiva",
      [
       "tots els $(x, x)$, un per a cada element",
       "todos los $(x, x)$, uno para cada elemento"
      ],
      [
       "diagonal plena / un bucle a cada node",
       "diagonal llena / un bucle en cada nodo"
      ]
     ],
     [
      [
       "Simètrica",
       "Simétrica"
      ],
      [
       "per a cada $(x, y)$ amb $x \\ne y$, si hi ha $(y, x)$",
       "para cada $(x, y)$ con $x \\ne y$, si está $(y, x)$"
      ],
      [
       "matriu simètrica / cada fletxa té la de tornada",
       "matriz simétrica / cada flecha tiene la de vuelta"
      ]
     ],
     [
      "Transitiva",
      [
       "per a cada parell de fletxes encadenades $(x, y), (y, z)$, si hi ha $(x, z)$",
       "para cada par de flechas encadenadas $(x, y), (y, z)$, si está $(x, z)$"
      ],
      [
       "cada camí de dues fletxes té drecera",
       "cada camino de dos flechas tiene atajo"
      ]
     ]
    ]
   },
   {
    "t": "example",
    "title": [
     "Exemple: $A = \\{1, 2, 3\\}$, $G(\\mathcal{R}) = \\{(1,1), (2,2), (3,3), (1,2), (2,1), (2,3)\\}$",
     "Ejemplo: $A = \\{1, 2, 3\\}$, $G(\\mathcal{R}) = \\{(1,1), (2,2), (3,3), (1,2), (2,1), (2,3)\\}$"
    ],
    "blocks": [
     {
      "t": "steps",
      "reveal": true,
      "steps": [
       {
        "x": "**Reflexiva**\n$(1,1), (2,2), (3,3) \\in G(\\mathcal{R})$",
        "done": true,
        "why": [
         "Hi són tots tres: **és reflexiva**.",
         "Están los tres: **es reflexiva**."
        ]
       },
       {
        "x": [
         "**Simètrica: busco la tornada de cada fletxa**\n$(1,2) \\to (2,1) \\checkmark\\quad \\cdot\\quad (2,1) \\to (1,2) \\checkmark\\quad \\cdot\\quad (2,3) \\to (3,2) \\text{✗}$",
         "**Simétrica: busco la vuelta de cada flecha**\n$(1,2) \\to (2,1) \\checkmark\\quad \\cdot\\quad (2,1) \\to (1,2) \\checkmark\\quad \\cdot\\quad (2,3) \\to (3,2) \\text{✗}$"
        ],
        "why": [
         "Els bucles no cal mirar-los: són la seva pròpia tornada.",
         "Los bucles no hace falta mirarlos: son su propia vuelta."
        ]
       },
       {
        "x": [
         "**Simètrica: conclusió**\n**No és simètrica.** Contraexemple: $2 \\mathcal{R} 3$ però $3 \\mathrel{\\cancel{\\mathcal{R}}} 2$.",
         "**Simétrica: conclusión**\n**No es simétrica.** Contraejemplo: $2 \\mathcal{R} 3$ pero $3 \\mathrel{\\cancel{\\mathcal{R}}} 2$."
        ]
       },
       {
        "x": [
         "**Transitiva: busco la drecera de cada cadena**\n$(1,2), (2,1) \\to (1,1) \\checkmark\\quad \\cdot\\quad (1,2), (2,3) \\to (1,3) \\text{✗}$",
         "**Transitiva: busco el atajo de cada cadena**\n$(1,2), (2,1) \\to (1,1) \\checkmark\\quad \\cdot\\quad (1,2), (2,3) \\to (1,3) \\text{✗}$"
        ],
        "why": [
         "Per a cada fletxa $x \\to y$, miro totes les fletxes que surten de $y$. Les cadenes amb un bucle no cal mirar-les: sempre donen una fletxa que ja hi és.",
         "Para cada flecha $x \\to y$, miro todas las flechas que salen de $y$. Las cadenas con un bucle no hace falta mirarlas: siempre dan una flecha que ya está."
        ]
       },
       {
        "x": [
         "**Transitiva: conclusió**\n**No és transitiva.** Contraexemple: $1 \\mathcal{R} 2$ i $2 \\mathcal{R} 3$, però $1 \\mathrel{\\cancel{\\mathcal{R}}} 3$. Quan en trobes un, ja pots parar.",
         "**Transitiva: conclusión**\n**No es transitiva.** Contraejemplo: $1 \\mathcal{R} 2$ y $2 \\mathcal{R} 3$, pero $1 \\mathrel{\\cancel{\\mathcal{R}}} 3$. Cuando encuentras uno, ya puedes parar."
        ]
       }
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
       "Les cadenes d'**anada i tornada** sí que s'han de mirar: $(1, 2), (2, 1)$ obliga a tenir $(1, 1)$. Per això una relació simètrica i transitiva en què $1$ està relacionat amb algú ha de tenir el bucle $(1, 1)$.",
       "Las cadenas de **ida y vuelta** sí hay que mirarlas: $(1, 2), (2, 1)$ obliga a tener $(1, 1)$. Por eso una relación simétrica y transitiva en la que $1$ está relacionado con alguien tiene que tener el bucle $(1, 1)$."
      ]
     }
    ]
   },
   {
    "t": "p",
    "x": [
     "Al laboratori, aquesta relació és el botó «exemple». Afegeix $(3, 2)$ a la matriu: ja és simètrica. Després afegeix $(1, 3)$ i $(3, 1)$: ja és transitiva i, per tant, d'equivalència.",
     "En el laboratorio, esta relación es el botón «ejemplo». Añade $(3, 2)$ a la matriz: ya es simétrica. Después añade $(1, 3)$ y $(3, 1)$: ya es transitiva y, por tanto, de equivalencia."
    ]
   },
   {
    "t": "lab",
    "id": "relacio",
    "props": {
     "id": "th-rel4",
     "cfg": {
      "pre": "dm"
     }
    }
   },
   {
    "t": "h",
    "x": [
     "Com s'escriu a l'examen",
     "Cómo se escribe en el examen"
    ]
   },
   {
    "t": "example",
    "title": "Plantilla",
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "**Reflexiva.** Sigui $x \\in A$. \\[càlcul\\]. Per tant $x \\mathcal{R} x$, i $\\mathcal{R}$ és reflexiva.",
        "**Reflexiva.** Sea $x \\in A$. \\[cálculo\\]. Por tanto $x \\mathcal{R} x$, y $\\mathcal{R}$ es reflexiva."
       ],
       [
        "**Simètrica.** Siguin $x, y \\in A$ amb $x \\mathcal{R} y$, és a dir, \\[hipòtesi traduïda\\]. Aleshores \\[càlcul\\], és a dir, $y \\mathcal{R} x$. $\\mathcal{R}$ és simètrica.",
        "**Simétrica.** Sean $x, y \\in A$ con $x \\mathcal{R} y$, es decir, \\[hipótesis traducida\\]. Entonces \\[cálculo\\], es decir, $y \\mathcal{R} x$. $\\mathcal{R}$ es simétrica."
       ],
       [
        "**Transitiva.** Siguin $x, y, z \\in A$ amb $x \\mathcal{R} y$ i $y \\mathcal{R} z$, és a dir, \\[hipòtesi 1\\] i \\[hipòtesi 2\\]. Aleshores \\[càlcul\\], és a dir, $x \\mathcal{R} z$. $\\mathcal{R}$ és transitiva.",
        "**Transitiva.** Sean $x, y, z \\in A$ con $x \\mathcal{R} y$ e $y \\mathcal{R} z$, es decir, \\[hipótesis 1\\] y \\[hipótesis 2\\]. Entonces \\[cálculo\\], es decir, $x \\mathcal{R} z$. $\\mathcal{R}$ es transitiva."
       ],
       [
        "**No és \\[propietat\\].** Contraexemple: \\[els números\\]. Es compleix \\[...\\] però no es compleix \\[...\\], perquè \\[càlcul\\].",
        "**No es \\[propiedad\\].** Contraejemplo: \\[los números\\]. Se cumple \\[...\\] pero no se cumple \\[...\\], porque \\[cálculo\\]."
       ]
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Un contraexemple ben escrit",
     "Un contraejemplo bien escrito"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$x \\mathcal{R} y \\iff |x - y| \\le 1$ a $\\mathbb{Z}$. **No és transitiva.** Contraexemple: $x = 0$, $y = 1$, $z = 2$. Tenim $0 \\mathcal{R} 1$ perquè $|0 - 1| = 1 \\le 1$, i $1 \\mathcal{R} 2$ perquè $|1 - 2| = 1 \\le 1$, però $0 \\mathrel{\\cancel{\\mathcal{R}}} 2$ perquè $|0 - 2| = 2 > 1$.",
       "$x \\mathcal{R} y \\iff |x - y| \\le 1$ en $\\mathbb{Z}$. **No es transitiva.** Contraejemplo: $x = 0$, $y = 1$, $z = 2$. Tenemos $0 \\mathcal{R} 1$ porque $|0 - 1| = 1 \\le 1$, y $1 \\mathcal{R} 2$ porque $|1 - 2| = 1 \\le 1$, pero $0 \\mathrel{\\cancel{\\mathcal{R}}} 2$ porque $|0 - 2| = 2 > 1$."
      ]
     }
    ]
   },
   {
    "t": "warn",
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "**Demostrar amb exemples.** «$1 \\mathcal{R} 1$, $2 \\mathcal{R} 2$, $3 \\mathcal{R} 3$, per tant és reflexiva» no val a $\\mathbb{Z}$, on n'hi ha infinits. Calen lletres. Amb un conjunt finit, en canvi, sí que pots comprovar-los tots.",
        "**Demostrar con ejemplos.** «$1 \\mathcal{R} 1$, $2 \\mathcal{R} 2$, $3 \\mathcal{R} 3$, por tanto es reflexiva» no vale en $\\mathbb{Z}$, donde hay infinitos. Hacen falta letras. Con un conjunto finito, en cambio, sí puedes comprobarlos todos."
       ],
       [
        "**La mateixa lletra a les dues hipòtesis.** A la transitiva, escriure $x - y = 3k$ i $y - z = 3k$ diu que les dues diferències són iguals, i això no ho saps. Escriu $3k$ i $3m$.",
        "**La misma letra en las dos hipótesis.** En la transitiva, escribir $x - y = 3k$ e $y - z = 3k$ dice que las dos diferencias son iguales, y eso no lo sabes. Escribe $3k$ y $3m$."
       ],
       [
        "**Partir de l'objectiu.** Començar per «$y \\mathcal{R} x$» i arribar a una cosa certa no demostra res. Es parteix sempre de la hipòtesi.",
        "**Partir del objetivo.** Empezar por «$y \\mathcal{R} x$» y llegar a algo cierto no demuestra nada. Se parte siempre de la hipótesis."
       ],
       [
        "**Oblidar on viu el número nou.** Acaba dient que $-k$, $k + m$ o $m \\cdot k$ és del conjunt que demana la definició. A $\\mathbb{N}$ això falla sovint: si $k \\in \\mathbb{N}$, $-k \\notin \\mathbb{N}$.",
        "**Olvidar dónde vive el número nuevo.** Termina diciendo que $-k$, $k + m$ o $m \\cdot k$ es del conjunto que pide la definición. En $\\mathbb{N}$ esto falla a menudo: si $k \\in \\mathbb{N}$, $-k \\notin \\mathbb{N}$."
       ],
       [
        "**Contraexemple a mitges.** Per refutar la transitiva calen tres elements i tres comprovacions, dues que es compleixen i una que no, amb els números escrits.",
        "**Contraejemplo a medias.** Para refutar la transitiva hacen falta tres elementos y tres comprobaciones, dos que se cumplen y una que no, con los números escritos."
       ],
       [
        "**Creure que un cas bo salva la propietat.** A «$y = 2x$», $0 \\mathcal{R} 0$ és cert, però $1 \\mathrel{\\cancel{\\mathcal{R}}} 1$: no és reflexiva. Les propietats parlen de *tots* els elements.",
        "**Creer que un caso bueno salva la propiedad.** En «$y = 2x$», $0 \\mathcal{R} 0$ es cierto, pero $1 \\mathrel{\\cancel{\\mathcal{R}}} 1$: no es reflexiva. Las propiedades hablan de *todos* los elementos."
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
       "**Si no saps si és certa**, abans d'escriure res prova amb números petits: $0$, $1$, $2$, algun negatiu i dos elements iguals. Si un cas falla, ja tens el contraexemple. Si no en trobes cap, intenta la demostració. I si la demostració s'encalla en un pas, mira aquell pas: sovint hi ha el contraexemple amagat. A «$|x - y| \\le 1$» la desigualtat triangular només dona $|x - z| \\le 2$, i el contraexemple és just a distància 2.",
       "**Si no sabes si es cierta**, antes de escribir nada prueba con números pequeños: $0$, $1$, $2$, algún negativo y dos elementos iguales. Si un caso falla, ya tienes el contraejemplo. Si no encuentras ninguno, intenta la demostración. Y si la demostración se atasca en un paso, mira ese paso: a menudo ahí está el contraejemplo escondido. En «$|x - y| \\le 1$» la desigualdad triangular solo da $|x - z| \\le 2$, y el contraejemplo está justo a distancia 2."
      ]
     },
     {
      "t": "p",
      "x": [
       "**Drecera:** si la relació té la forma «$f(x) = f(y)$» (mateix residu, mateix quadrat, mateixa paritat...), les tres propietats surten de la igualtat i és d'equivalència.",
       "**Atajo:** si la relación tiene la forma «$f(x) = f(y)$» (mismo resto, mismo cuadrado, misma paridad...), las tres propiedades salen de la igualdad y es de equivalencia."
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "Practica-ho",
     "Practícalo"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sis relacions i tres propietats. Per a cada cas, decideix primer si es compleix i després mira la demostració o el contraexemple pas a pas. «Següent cas» els recorre tots.",
     "Seis relaciones y tres propiedades. Para cada caso, decide primero si se cumple y después mira la demostración o el contraejemplo paso a paso. «Siguiente caso» los recorre todos."
    ]
   },
   {
    "t": "lab",
    "id": "demorel",
    "props": {
     "id": "th-demo"
    }
   }
  ],
  "r-eq": [
   {
    "t": "def",
    "title": [
     "relació d'equivalència",
     "relación de equivalencia"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$\\mathcal{R}$ és d'**equivalència** si és **reflexiva, simètrica i transitiva**. Llavors diem que $x$ i $y$ són equivalents si $x \\mathcal{R} y$.",
       "$\\mathcal{R}$ es de **equivalencia** si es **reflexiva, simétrica y transitiva**. Entonces decimos que $x$ e $y$ son equivalentes si $x \\mathcal{R} y$."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "classe d'equivalència",
     "clase de equivalencia"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "La classe de $x$ és el conjunt dels elements equivalents a $x$: $\\overline{x} = [x] = \\{a \\in A \\mid a \\mathcal{R} x\\}$.",
       "La clase de $x$ es el conjunto de los elementos equivalentes a $x$: $\\overline{x} = [x] = \\{a \\in A \\mid a \\mathcal{R} x\\}$."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Proposició (classes)",
     "Proposición (clases)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Tot element pertany a la seva classe.",
        "Todo elemento pertenece a su clase."
       ],
       [
        "Les classes de dos elements **equivalents** són **iguals**.",
        "Las clases de dos elementos **equivalentes** son **iguales**."
       ],
       [
        "Les classes de dos elements **no equivalents** són **disjuntes**.",
        "Las clases de dos elementos **no equivalentes** son **disjuntas**."
       ],
       [
        "La reunió de totes les classes és el conjunt original.",
        "La unión de todas las clases es el conjunto original."
       ]
      ],
      "ordered": true
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "conjunt quocient",
     "conjunto cociente"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "El conjunt de les classes, $A/\\mathcal{R}$. **Remarca:** $A/\\mathcal{R}$ és una partició d'$A$.",
       "El conjunto de las clases, $A/\\mathcal{R}$. **Observación:** $A/\\mathcal{R}$ es una partición de $A$."
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
       "Una relació d'equivalència diu «aquests dos, per al que m'interessa, són el mateix». Les classes són els grups d'elements que es consideren iguals. Les propietats 3 i 4 són exactament les dues condicions de partició: per això tota equivalència trenca el conjunt en trossos, i tota partició defineix una equivalència («estar al mateix tros»).",
       "Una relación de equivalencia dice «estos dos, para lo que me interesa, son lo mismo». Las clases son los grupos de elementos que se consideran iguales. Las propiedades 3 y 4 son exactamente las dos condiciones de partición: por eso toda equivalencia rompe el conjunto en trozos, y toda partición define una equivalencia («estar en el mismo trozo»)."
      ]
     },
     {
      "t": "p",
      "x": [
       "Una classe té molts noms: si $x \\mathcal{R} y$, aleshores $[x] = [y]$. Per això a $\\mathbb{Z}$ mòdul 3, $[1] = [4] = [-2]$.",
       "Una clase tiene muchos nombres: si $x \\mathcal{R} y$, entonces $[x] = [y]$. Por eso en $\\mathbb{Z}$ módulo 3, $[1] = [4] = [-2]$."
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Plantilla: «Demostreu que és d'equivalència» (congruència mòdul 3)",
     "Plantilla: «Demostrad que es de equivalencia» (congruencia módulo 3)"
    ],
    "blocks": [
     {
      "t": "steps",
      "reveal": true,
      "steps": [
       {
        "x": [
         "**Enunciat**\nA $\\mathbb{Z}$, $x \\mathcal{R} y$ si $x - y$ és múltiple de 3, és a dir $x - y = 3k$ amb $k \\in \\mathbb{Z}$.",
         "**Enunciado**\nEn $\\mathbb{Z}$, $x \\mathcal{R} y$ si $x - y$ es múltiplo de 3, es decir $x - y = 3k$ con $k \\in \\mathbb{Z}$."
        ]
       },
       {
        "x": "**Reflexiva**\n$x - x = 0 = 3 \\cdot 0$",
        "why": [
         "Per a tot x ∈ ℤ.",
         "Para todo x ∈ ℤ."
        ]
       },
       {
        "x": [
         "**Simètrica**\n$x - y = 3k \\implies y - x = 3(-k)$",
         "**Simétrica**\n$x - y = 3k \\implies y - x = 3(-k)$"
        ],
        "why": [
         "i −k ∈ ℤ.",
         "y −k ∈ ℤ."
        ]
       },
       {
        "x": "**Transitiva**\n$x - y = 3k, y - z = 3m \\implies x - z = (x - y) + (y - z) = 3(k + m)$",
        "why": [
         "i k + m ∈ ℤ.",
         "y k + m ∈ ℤ."
        ]
       },
       {
        "x": [
         "**Classes**\n$[0] = \\{\\ldots, -6, -3, 0, 3, 6, \\ldots\\},\\quad [1] = \\{\\ldots, -5, -2, 1, 4, 7, \\ldots\\},\\quad [2] = \\{\\ldots, -4, -1, 2, 5, 8, \\ldots\\}$",
         "**Clases**\n$[0] = \\{\\ldots, -6, -3, 0, 3, 6, \\ldots\\},\\quad [1] = \\{\\ldots, -5, -2, 1, 4, 7, \\ldots\\},\\quad [2] = \\{\\ldots, -4, -1, 2, 5, 8, \\ldots\\}$"
        ],
        "why": [
         "Un per a cada residu possible en dividir per 3.",
         "Una por cada resto posible al dividir por 3."
        ]
       },
       {
        "x": [
         "**Quocient**\n$\\mathbb{Z}/\\mathcal{R} = \\{[0], [1], [2]\\}$",
         "**Cociente**\n$\\mathbb{Z}/\\mathcal{R} = \\{[0], [1], [2]\\}$"
        ],
        "done": true,
        "why": [
         "Tres elements, cadascun un conjunt infinit; formen una partició de ℤ.",
         "Tres elementos, cada uno un conjunto infinito; forman una partición de ℤ."
        ]
       }
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "congru",
    "props": {
     "id": "th-cong",
     "cfg": {
      "n": 5
     }
    }
   },
   {
    "t": "example",
    "title": [
     "Cas finit (apunts)",
     "Caso finito (apuntes)"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "A $A = \\{1,2,3,4\\}$, $G(\\mathcal{R}) = \\{(1,1), (2,2), (3,3), (4,4), (1,2), (2,1)\\}$ és d'equivalència; classes $[1] = [2] = \\{1,2\\}$, $[3] = \\{3\\}$, $[4] = \\{4\\}$; $A/\\mathcal{R} = \\{\\{1,2\\}, \\{3\\}, \\{4\\}\\}$, que és una partició d'$A$. Carrega-ho al laboratori de relacions amb el botó «apunts».",
       "En $A = \\{1,2,3,4\\}$, $G(\\mathcal{R}) = \\{(1,1), (2,2), (3,3), (4,4), (1,2), (2,1)\\}$ es de equivalencia; clases $[1] = [2] = \\{1,2\\}$, $[3] = \\{3\\}$, $[4] = \\{4\\}$; $A/\\mathcal{R} = \\{\\{1,2\\}, \\{3\\}, \\{4\\}\\}$, que es una partición de $A$. Cárgalo en el laboratorio de relaciones con el botón «apuntes»."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "relacio",
    "props": {
     "id": "th-rel3",
     "cfg": {
      "pre": "md"
     }
    }
   }
  ],
  "r-ord": [
   {
    "t": "def",
    "title": [
     "ordre",
     "orden"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$\\mathcal{R}$ és una **relació d'ordre** si és **reflexiva, antisimètrica i transitiva**; un conjunt amb un ordre és un **conjunt ordenat** $(A, \\preccurlyeq)$. És d'**ordre estricte** ($\\prec$) si és **antireflexiva, antisimètrica i transitiva**.",
       "$\\mathcal{R}$ es una **relación de orden** si es **reflexiva, antisimétrica y transitiva**; un conjunto con un orden es un **conjunto ordenado** $(A, \\preccurlyeq)$. Es de **orden estricto** ($\\prec$) si es **antirreflexiva, antisimétrica y transitiva**."
      ]
     }
    ]
   },
   {
    "t": "table",
    "head": [
     "",
     "Reflexiva",
     [
      "Simètrica",
      "Simétrica"
     ],
     [
      "Antisimètrica",
      "Antisimétrica"
     ],
     "Transitiva"
    ],
    "rows": [
     [
      [
       "**Equivalència**",
       "**Equivalencia**"
      ],
      "Sí",
      "Sí",
      "—",
      "Sí"
     ],
     [
      [
       "**Ordre**",
       "**Orden**"
      ],
      "Sí",
      "—",
      "Sí",
      "Sí"
     ],
     [
      [
       "**Ordre estricte**",
       "**Orden estricto**"
      ],
      [
       "antireflexiva",
       "antirreflexiva"
      ],
      "—",
      "Sí",
      "Sí"
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
       "L'única diferència entre equivalència i ordre és **simètrica contra antisimètrica**. Una diu «si vas, tornes» (agrupa elements iguals); l'altra, «si vas i tornes, és que no t'has mogut» (posa els elements en fila, o en arbre).",
       "La única diferencia entre equivalencia y orden es **simétrica contra antisimétrica**. Una dice «si vas, vuelves» (agrupa elementos iguales); la otra, «si vas y vuelves, es que no te has movido» (pone los elementos en fila, o en árbol)."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "total i parcial",
     "total y parcial"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$\\preccurlyeq$ és un ordre **total** si per a tot $x \\ne y$ es compleix $x \\prec y$ o $y \\prec x$ (tots són comparables). És **parcial** si existeixen $x \\ne y$ que **no es poden comparar**.",
       "$\\preccurlyeq$ es un orden **total** si para todo $x \\ne y$ se cumple $x \\prec y$ o $y \\prec x$ (todos son comparables). Es **parcial** si existen $x \\ne y$ que **no se pueden comparar**."
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Tres ordres dels apunts",
     "Tres órdenes de los apuntes"
    ],
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "$\\le$ a $\\{1,2,3,4\\}$: total.",
        "$\\le$ en $\\{1,2,3,4\\}$: total."
       ],
       [
        "La divisibilitat a $\\{1,2,3,4,6,12\\}$: parcial, perquè ni $2 \\mid 3$ ni $3 \\mid 2$. L'antisimetria val perquè, amb positius, $x \\mid y$ i $y \\mid x$ implica $x = y$.",
        "La divisibilidad en $\\{1,2,3,4,6,12\\}$: parcial, porque ni $2 \\mid 3$ ni $3 \\mid 2$. La antisimetría vale porque, con positivos, $x \\mid y$ e $y \\mid x$ implica $x = y$."
       ],
       [
        "La inclusió a $\\mathcal{P}(\\{a,b\\})$: parcial ($\\{a\\}$ i $\\{b\\}$ no es comparen). L'antisimetria és el lema de doble inclusió.",
        "La inclusión en $\\mathcal{P}(\\{a,b\\})$: parcial ($\\{a\\}$ y $\\{b\\}$ no se comparan). La antisimetría es el lema de doble inclusión."
       ]
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "intervals en un ordre total",
     "intervalos en un orden total"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "En $(A, \\preccurlyeq)$ totalment ordenat: $[a, b] = \\{x \\mid a \\preccurlyeq x \\preccurlyeq b\\}$, $(a, b) = \\{x \\mid a \\prec x \\prec b\\}$, $[a, b$) i $(a, b]$. A $(\\mathbb{N}, \\le)$ són finits: $[2, 5] = \\{2,3,4,5\\}$, $(2, 5) = \\{3, 4\\}$.",
       "En $(A, \\preccurlyeq)$ totalmente ordenado: $[a, b] = \\{x \\mid a \\preccurlyeq x \\preccurlyeq b\\}$, $(a, b) = \\{x \\mid a \\prec x \\prec b\\}$, $[a, b$) y $(a, b]$. En $(\\mathbb{N}, \\le)$ son finitos: $[2, 5] = \\{2,3,4,5\\}$, $(2, 5) = \\{3, 4\\}$."
      ]
     }
    ]
   }
  ],
  "r-hasse": [
   {
    "t": "def",
    "title": "diagrama de Hasse",
    "blocks": [
     {
      "t": "p",
      "x": [
       "Representa $(A, \\preccurlyeq)$ amb un punt per element i una fletxa de $x$ a $y$ quan $x \\preccurlyeq y$.",
       "Representa $(A, \\preccurlyeq)$ con un punto por elemento y una flecha de $x$ a $y$ cuando $x \\preccurlyeq y$."
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
        "Ordre **total** → el diagrama és un **segment o cadena**.",
        "Orden **total** → el diagrama es un **segmento o cadena**."
       ],
       [
        "Ordre **parcial** → pot ser **ramificat** i tenir diversos subdiagrames.",
        "Orden **parcial** → puede ser **ramificado** y tener varios subdiagramas."
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
       "Si dibuixes literalment totes les parelles $x \\preccurlyeq y$, el dibuix és il·legible: a $\\mathcal{P}(\\{1,2,3\\})$ n'hi ha 27. Els exemples dels apunts en fan servir molt poques perquè **ometen el que es dedueix sol**:",
       "Si dibujas literalmente todos los pares $x \\preccurlyeq y$, el dibujo es ilegible: en $\\mathcal{P}(\\{1,2,3\\})$ hay 27. Los ejemplos de los apuntes usan muy pocas porque **omiten lo que se deduce solo**:"
      ]
     },
     {
      "t": "list",
      "items": [
       [
        "els bucles $x \\preccurlyeq x$ (sabem que és reflexiva);",
        "los bucles $x \\preccurlyeq x$ (sabemos que es reflexiva);"
       ],
       [
        "les fletxes que surten per transitivitat: si hi ha $\\emptyset \\to \\{1\\} \\to \\{1,2\\}$, la fletxa $\\emptyset \\to \\{1,2\\}$ sobra.",
        "las flechas que salen por transitividad: si hay $\\emptyset \\to \\{1\\} \\to \\{1,2\\}$, la flecha $\\emptyset \\to \\{1,2\\}$ sobra."
       ]
      ],
      "ordered": true
     },
     {
      "t": "p",
      "x": [
       "Queden només les fletxes entre elements «consecutius», sense cap element entremig. Procediment: col·loca a baix els elements que no tenen ningú a sota, puja nivell a nivell, i uneix cada element amb els immediatament superiors. Llavors $x \\preccurlyeq y$ es llegeix com «hi ha un camí de pujada de $x$ a $y$».",
       "Quedan solo las flechas entre elementos «consecutivos», sin ningún elemento en medio. Procedimiento: coloca abajo los elementos que no tienen a nadie debajo, sube nivel a nivel, y une cada elemento con los inmediatamente superiores. Entonces $x \\preccurlyeq y$ se lee como «hay un camino de subida de $x$ a $y$»."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "hasse",
    "props": {
     "id": "th-hasse",
     "cfg": {
      "P": "P3"
     }
    }
   }
  ]
 },
 "examEnd": []
};
