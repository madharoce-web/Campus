// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "La lògica estudia quan un raonament és **vàlid**: quan la conclusió se segueix per força de les premisses. Al seminari ho fem amb dos llenguatges, el de les proposicions (CP0) i el dels predicats (CP1), i amb una aplicació: la programació lògica.",
    "La lógica estudia cuándo un razonamiento es **válido**: cuándo la conclusión se sigue necesariamente de las premisas. En el seminario lo hacemos con dos lenguajes, el de las proposiciones (CP0) y el de los predicados (CP1), y con una aplicación: la programación lógica."
   ]
  }
 ],
 "sections": {
  "u0-que-es-un-raonament-valid": [
   {
    "t": "p",
    "x": [
     "Un raonament parteix d'unes **premisses** (el que donem per cert) i arriba a una **conclusió**. És vàlid si és impossible que les premisses siguin certes i la conclusió falsa.",
     "Un razonamiento parte de unas **premisas** (lo que damos por cierto) y llega a una **conclusión**. Es válido si es imposible que las premisas sean ciertas y la conclusión falsa."
    ]
   },
   {
    "head": [
     "#",
     [
      "Raonament",
      "Razonamiento"
     ],
     [
      "Vàlid?",
      "¿Válido?"
     ]
    ],
    "rows": [
     [
      "1",
      [
       "Si vaig de vacances, aniré a la platja. Vaig de vacances. **Per tant**, aniré a la platja.",
       "Si me voy de vacaciones, iré a la playa. Me voy de vacaciones. **Por tanto**, iré a la playa."
      ],
      "Sí (*modus ponens*)"
     ],
     [
      "2",
      [
       "Si vaig de vacances, aniré a la platja. Vaig a la platja. **Per tant**, vaig de vacances.",
       "Si me voy de vacaciones, iré a la playa. Voy a la playa. **Por tanto**, me voy de vacaciones."
      ],
      [
       "No: puc anar a la platja sense ser de vacances",
       "No: puedo ir a la playa sin estar de vacaciones"
      ]
     ],
     [
      "3",
      [
       "Tots els dilluns hi ha classe de lògica. Avui no n'hi ha. **Per tant**, avui no és dilluns.",
       "Todos los lunes hay clase de lógica. Hoy no hay. **Por tanto**, hoy no es lunes."
      ],
      "Sí (*modus tollens*)"
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "La validesa depèn de la **forma**, no del contingut. «Tots els peixos volen; el salmó és un peix; per tant, el salmó vola» és vàlid (amb una premissa falsa). «Tots els andorrans són europeus; Napoleó era europeu; per tant, Napoleó era andorrà» no és vàlid, encara que les premisses siguin certes.",
       "La validez depende de la **forma**, no del contenido. «Todos los peces vuelan; el salmón es un pez; por tanto, el salmón vuela» es válido (con una premisa falsa). «Todos los andorranos son europeos; Napoleón era europeo; por tanto, Napoleón era andorrano» no es válido, aunque las premisas sean ciertas."
      ]
     }
    ],
    "t": "prop",
    "title": [
     "Vàlid no vol dir cert",
     "Válido no quiere decir cierto"
    ]
   },
   {
    "t": "p",
    "x": [
     "Per rebutjar un raonament n'hi ha prou amb **un contraexemple**: una situació amb les premisses certes i la conclusió falsa. Per acceptar-lo, cal demostrar que no n'hi ha cap. Aquest mòdul ensenya tres maneres de fer-ho: la taula de veritat, la deducció amb regles i la resolució.",
     "Para rechazar un razonamiento basta con **un contraejemplo**: una situación con las premisas ciertas y la conclusión falsa. Para aceptarlo, hay que demostrar que no existe ninguno. Este módulo enseña tres maneras de hacerlo: la tabla de verdad, la deducción con reglas y la resolución."
    ]
   }
  ],
  "u0-el-mapa-del-curs": [
   {
    "t": "p",
    "x": [
     "Els dos llenguatges es treballen en el mateix ordre: primer s'aprèn a **escriure** (formalitzar), després a decidir què és **cert** (semàntica) i finalment a **demostrar** (teoria de prova).",
     "Los dos lenguajes se trabajan en el mismo orden: primero se aprende a **escribir** (formalizar), después a decidir qué es **cierto** (semántica) y finalmente a **demostrar** (teoría de la prueba)."
    ]
   },
   {
    "caption": [
     "Cada fila és una mateixa pregunta en tots dos llenguatges. El CP1 amplia el CP0: tot el que val en proposicions continua valent amb predicats, i s'hi afegeixen els quantificadors.",
     "Cada fila es una misma pregunta en los dos lenguajes. El CP1 amplía el CP0: todo lo que vale en proposiciones sigue valiendo con predicados, y se añaden los cuantificadores."
    ],
    "cls": "vz",
    "svg": [
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Mapa del mòdul de lògica: CP0, CP1 i programació lògica\">\n<defs><marker id=\"u0a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs>\n<text class=\"vz-cap\" x=\"20\" y=\"22\">TEMA</text>\n<text class=\"vz-lab vz-tA\" x=\"235\" y=\"22\" text-anchor=\"middle\">CP0 · proposicions</text>\n<text class=\"vz-lab vz-tI\" x=\"495\" y=\"22\" text-anchor=\"middle\">CP1 · predicats</text>\n<text class=\"vz-lab vz-tT\" x=\"690\" y=\"22\" text-anchor=\"middle\">Programació lògica</text>\n<text class=\"vz-t vz-b\" x=\"20\" y=\"72\">Llenguatge</text><text class=\"vz-sm\" x=\"20\" y=\"90\">formalitzar</text>\n<text class=\"vz-t vz-b\" x=\"20\" y=\"152\">Semàntica</text><text class=\"vz-sm\" x=\"20\" y=\"170\">què és cert</text>\n<text class=\"vz-t vz-b\" x=\"20\" y=\"232\">Prova</text><text class=\"vz-sm\" x=\"20\" y=\"250\">demostrar</text>\n<rect class=\"vz-bx\" x=\"140\" y=\"50\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"235\" y=\"72\" text-anchor=\"middle\">P, Q, ¬, ∧, ∨, →</text><text class=\"vz-sm\" x=\"235\" y=\"91\" text-anchor=\"middle\">Unitat 1</text>\n<rect class=\"vz-bx\" x=\"140\" y=\"130\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"235\" y=\"152\" text-anchor=\"middle\">taules de veritat</text><text class=\"vz-sm\" x=\"235\" y=\"171\" text-anchor=\"middle\">Unitat 2</text>\n<rect class=\"vz-bx\" x=\"140\" y=\"210\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"235\" y=\"232\" text-anchor=\"middle\">regles · resolució</text><text class=\"vz-sm\" x=\"235\" y=\"251\" text-anchor=\"middle\">Unitat 3</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"50\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"495\" y=\"72\" text-anchor=\"middle\">∀x, ∃x, P(x,y), f(x)</text><text class=\"vz-sm\" x=\"495\" y=\"91\" text-anchor=\"middle\">Unitats 4 i 5</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"130\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"495\" y=\"152\" text-anchor=\"middle\">interpretacions</text><text class=\"vz-sm\" x=\"495\" y=\"171\" text-anchor=\"middle\">Unitat 6</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"210\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"495\" y=\"232\" text-anchor=\"middle\">forma clausal · UMG</text><text class=\"vz-sm\" x=\"495\" y=\"251\" text-anchor=\"middle\">Unitats 7 i 8</text>\n<rect class=\"vz-bx\" x=\"625\" y=\"210\" width=\"130\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"690\" y=\"232\" text-anchor=\"middle\">Horn · PROLOG</text><text class=\"vz-sm\" x=\"690\" y=\"251\" text-anchor=\"middle\">Unitat 9</text>\n<path class=\"vz-ln\" d=\"M330 76 H396\" marker-end=\"url(#u0a)\"></path><path class=\"vz-ln\" d=\"M330 156 H396\" marker-end=\"url(#u0a)\"></path><path class=\"vz-ln\" d=\"M330 236 H396\" marker-end=\"url(#u0a)\"></path>\n<path class=\"vz-ln\" d=\"M590 236 H621\" marker-end=\"url(#u0a)\"></path>\n<text class=\"vz-sm\" x=\"363\" y=\"70\" text-anchor=\"middle\">s'amplia</text>\n</svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Mapa del módulo de lógica: CP0, CP1 y programación lógica\">\n<defs><marker id=\"u0a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs>\n<text class=\"vz-cap\" x=\"20\" y=\"22\">TEMA</text>\n<text class=\"vz-lab vz-tA\" x=\"235\" y=\"22\" text-anchor=\"middle\">CP0 · proposiciones</text>\n<text class=\"vz-lab vz-tI\" x=\"495\" y=\"22\" text-anchor=\"middle\">CP1 · predicados</text>\n<text class=\"vz-lab vz-tT\" x=\"690\" y=\"22\" text-anchor=\"middle\">Programación lógica</text>\n<text class=\"vz-t vz-b\" x=\"20\" y=\"72\">Lenguaje</text><text class=\"vz-sm\" x=\"20\" y=\"90\">formalizar</text>\n<text class=\"vz-t vz-b\" x=\"20\" y=\"152\">Semántica</text><text class=\"vz-sm\" x=\"20\" y=\"170\">qué es cierto</text>\n<text class=\"vz-t vz-b\" x=\"20\" y=\"232\">Prueba</text><text class=\"vz-sm\" x=\"20\" y=\"250\">demostrar</text>\n<rect class=\"vz-bx\" x=\"140\" y=\"50\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"235\" y=\"72\" text-anchor=\"middle\">P, Q, ¬, ∧, ∨, →</text><text class=\"vz-sm\" x=\"235\" y=\"91\" text-anchor=\"middle\">Unidad 1</text>\n<rect class=\"vz-bx\" x=\"140\" y=\"130\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"235\" y=\"152\" text-anchor=\"middle\">tablas de verdad</text><text class=\"vz-sm\" x=\"235\" y=\"171\" text-anchor=\"middle\">Unidad 2</text>\n<rect class=\"vz-bx\" x=\"140\" y=\"210\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"235\" y=\"232\" text-anchor=\"middle\">reglas · resolución</text><text class=\"vz-sm\" x=\"235\" y=\"251\" text-anchor=\"middle\">Unidad 3</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"50\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"495\" y=\"72\" text-anchor=\"middle\">∀x, ∃x, P(x,y), f(x)</text><text class=\"vz-sm\" x=\"495\" y=\"91\" text-anchor=\"middle\">Unidades 4 y 5</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"130\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"495\" y=\"152\" text-anchor=\"middle\">interpretaciones</text><text class=\"vz-sm\" x=\"495\" y=\"171\" text-anchor=\"middle\">Unidad 6</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"210\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"495\" y=\"232\" text-anchor=\"middle\">forma clausal · UMG</text><text class=\"vz-sm\" x=\"495\" y=\"251\" text-anchor=\"middle\">Unidades 7 y 8</text>\n<rect class=\"vz-bx\" x=\"625\" y=\"210\" width=\"130\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"690\" y=\"232\" text-anchor=\"middle\">Horn · PROLOG</text><text class=\"vz-sm\" x=\"690\" y=\"251\" text-anchor=\"middle\">Unidad 9</text>\n<path class=\"vz-ln\" d=\"M330 76 H396\" marker-end=\"url(#u0a)\"></path><path class=\"vz-ln\" d=\"M330 156 H396\" marker-end=\"url(#u0a)\"></path><path class=\"vz-ln\" d=\"M330 236 H396\" marker-end=\"url(#u0a)\"></path>\n<path class=\"vz-ln\" d=\"M590 236 H621\" marker-end=\"url(#u0a)\"></path>\n<text class=\"vz-sm\" x=\"363\" y=\"70\" text-anchor=\"middle\">se amplía</text>\n</svg></div>"
    ],
    "t": "diagram"
   }
  ],
  "u0-notacio": [
   {
    "head": [
     [
      "Símbol",
      "Símbolo"
     ],
     [
      "Nom",
      "Nombre"
     ],
     [
      "Es llegeix",
      "Se lee"
     ]
    ],
    "rows": [
     [
      "`¬A`",
      [
       "negació",
       "negación"
      ],
      "no A"
     ],
     [
      "`A ∧ B`",
      [
       "conjunció",
       "conjunción"
      ],
      [
       "A i B",
       "A y B"
      ]
     ],
     [
      "`A ∨ B`",
      [
       "disjunció",
       "disyunción"
      ],
      [
       "A o B (o totes dues)",
       "A o B (o ambas)"
      ]
     ],
     [
      "`A → B`",
      [
       "implicació",
       "implicación"
      ],
      [
       "si A, llavors B",
       "si A, entonces B"
      ]
     ],
     [
      "`A ↔ B`",
      [
       "doble implicació",
       "doble implicación"
      ],
      [
       "A si i només si B",
       "A si y solo si B"
      ]
     ],
     [
      "`∀x` · `∃x`",
      [
       "quantificadors",
       "cuantificadores"
      ],
      [
       "per a tot x · existeix algun x",
       "para todo x · existe algún x"
      ]
     ],
     [
      "`A ⇒ B` · `A ⇔ B`",
      [
       "conseqüència · equivalència lògica",
       "consecuencia · equivalencia lógica"
      ],
      [
       "B se segueix d'A · A i B diuen el mateix",
       "B se sigue de A · A y B dicen lo mismo"
      ]
     ],
     [
      "`□`",
      [
       "clàusula buida",
       "cláusula vacía"
      ],
      [
       "contradicció (s'ha acabat la refutació)",
       "contradicción (se ha terminado la refutación)"
      ]
     ],
     [
      "`{x ← a}`",
      [
       "substitució",
       "sustitución"
      ],
      [
       "posem a on hi ha x",
       "ponemos a donde está x"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "Prioritat de les connectives, de més a menys forta: `¬`, `∧`, `∨`, `→`, `↔`. Per exemple, `P → Q ∧ S` vol dir `P → (Q ∧ S)`. En cas de dubte, poseu parèntesis: als exàmens també se'n posen «de vegades innecessaris» per aclarir.",
     "Prioridad de las conectivas, de más a menos fuerte: `¬`, `∧`, `∨`, `→`, `↔`. Por ejemplo, `P → Q ∧ S` quiere decir `P → (Q ∧ S)`. En caso de duda, poned paréntesis: en los exámenes también se ponen «a veces innecesarios» para aclarar."
    ]
   }
  ],
  "u0-com-son-els-controls": [
   {
    "t": "p",
    "x": [
     "Els dos controls duren una hora i mitja i tenen tres exercicis. Cada tipus d'exercici té la seva pàgina d'entrenament, amb molts exercicis resolts pas a pas:",
     "Los dos controles duran una hora y media y tienen tres ejercicios. Cada tipo de ejercicio tiene su página de entrenamiento, con muchos ejercicios resueltos paso a paso:"
    ]
   },
   {
    "head": [
     "Control",
     [
      "Exercici",
      "Ejercicio"
     ],
     [
      "Pes",
      "Peso"
     ],
     [
      "Què es demana",
      "Qué se pide"
     ],
     [
      "Practica-ho",
      "Practicadlo"
     ]
    ],
    "rows": [
     [
      [
       "**CP1**\nproposicions",
       "**CP1**\nproposiciones"
      ],
      "1",
      "50%",
      [
       "Validar un raonament per resolució i per un altre mètode",
       "Validar un razonamiento por resolución y por otro método"
      ],
      [
       "[Raonaments en CP0](/logica/xr)",
       "[Razonamientos en CP0](/logica/xr)"
      ]
     ],
     [
      "2",
      "30%",
      [
       "Formalitzar frases en CP0 i donar una equivalència",
       "Formalizar frases en CP0 y dar una equivalencia"
      ],
      [
       "[Formalització CP0](/logica/xa)",
       "[Formalización CP0](/logica/xa)"
      ]
     ],
     [
      "3",
      "20%",
      [
       "Taula de veritat: validesa i tipus d'enunciat",
       "Tabla de verdad: validez y tipo de enunciado"
      ],
      [
       "[Taules de veritat](/logica/xb)",
       "[Tablas de verdad](/logica/xb)"
      ]
     ],
     [
      [
       "**CP2**\npredicats",
       "**CP2**\npredicados"
      ],
      "1",
      "20%",
      [
       "Validar un raonament en CP0 sense resolució (regles d'inferència)",
       "Validar un razonamiento en CP0 sin resolución (reglas de inferencia)"
      ],
      [
       "[Raonaments en CP0](/logica/xr)",
       "[Razonamientos en CP0](/logica/xr)"
      ]
     ],
     [
      "2",
      "40%",
      [
       "Formalitzar frases en CP1 i donar-ne la forma clausal",
       "Formalizar frases en CP1 y dar su forma clausal"
      ],
      [
       "[Formalització CP1](/logica/xe)",
       "[Formalización CP1](/logica/xe)"
      ]
     ],
     [
      "3",
      "40%",
      [
       "Resolució en CP1 notant els unificadors (UMG)",
       "Resolución en CP1 anotando los unificadores (UMG)"
      ],
      [
       "[Resolució CP1](/logica/xf)",
       "[Resolución CP1](/logica/xf)"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "A l'examen es dona un full amb implicacions, equivalències i propietats dels quantificadors: el teniu explicat al [formulari](/logica/fs). Quan us vegeu preparats, feu un [simulacre](/logica/sim) amb rellotge.",
     "En el examen se da una hoja con implicaciones, equivalencias y propiedades de los cuantificadores: la tenéis explicada en el [formulario](/logica/fs). Cuando os veáis preparados, haced un [simulacro](/logica/sim) con reloj."
    ]
   }
  ],
  "u0-vocabulari-basic": [
   {
    "head": [
     [
      "Paraula",
      "Palabra"
     ],
     [
      "Què vol dir",
      "Qué quiere decir"
     ],
     [
      "Exemple",
      "Ejemplo"
     ]
    ],
    "rows": [
     [
      [
       "Proposició",
       "Proposición"
      ],
      [
       "Frase que pot ser certa o falsa",
       "Frase que puede ser cierta o falsa"
      ],
      [
       "«Plou» → `P`",
       "«Llueve» → `P`"
      ]
     ],
     [
      "Fórmula (fbf)",
      [
       "Expressió ben escrita del llenguatge",
       "Expresión bien escrita del lenguaje"
      ],
      "`(P ∧ Q) → R`"
     ],
     [
      [
       "Interpretació",
       "Interpretación"
      ],
      [
       "Una manera de donar valor a tot: una fila de la taula de veritat, o un «món» en CP1",
       "Una manera de dar valor a todo: una fila de la tabla de verdad, o un «mundo» en CP1"
      ],
      "`P = T, Q = F`"
     ],
     [
      [
       "Tautologia",
       "Tautología"
      ],
      [
       "Fórmula certa en totes les interpretacions",
       "Fórmula cierta en todas las interpretaciones"
      ],
      "`P ∨ ¬P`"
     ],
     [
      [
       "Conseqüència lògica",
       "Consecuencia lógica"
      ],
      [
       "B és certa sempre que ho són les premisses",
       "B es cierta siempre que lo son las premisas"
      ],
      "`P, P → Q ⇒ Q`"
     ],
     [
      [
       "Predicat",
       "Predicado"
      ],
      [
       "Propietat o relació entre objectes",
       "Propiedad o relación entre objetos"
      ],
      [
       "`L(x,y)`: x llegeix y",
       "`L(x,y)`: x lee y"
      ]
     ],
     [
      [
       "Terme",
       "Término"
      ],
      [
       "Nom d'un objecte: constant, variable o funció",
       "Nombre de un objeto: constante, variable o función"
      ],
      "`pau`, `x`, `m(2010)`"
     ],
     [
      [
       "Quantificador",
       "Cuantificador"
      ],
      [
       "Diu de quants objectes parlem",
       "Dice de cuántos objetos hablamos"
      ],
      [
       "`∀x` tots, `∃x` algun",
       "`∀x` todos, `∃x` alguno"
      ]
     ],
     [
      [
       "Clàusula",
       "Cláusula"
      ],
      [
       "Disjunció de literals, escrita com un conjunt",
       "Disyunción de literales, escrita como un conjunto"
      ],
      "`{¬P, Q}` = `¬P ∨ Q`"
     ],
     [
      [
       "Refutació",
       "Refutación"
      ],
      [
       "Demostrar afegint la negació de la conclusió fins a arribar a una contradicció",
       "Demostrar añadiendo la negación de la conclusión hasta llegar a una contradicción"
      ],
      [
       "arribar a `□`",
       "llegar a `□`"
      ]
     ],
     [
      "Unificador (UMG)",
      [
       "Substitució que fa iguals dos àtoms, sense fixar res de més",
       "Sustitución que hace iguales dos átomos, sin fijar nada de más"
      ],
      "`P(x,b)`, `P(a,y)`: `{x ← a, y ← b}`"
     ]
    ],
    "t": "table"
   }
  ]
 },
 "examEnd": []
};
