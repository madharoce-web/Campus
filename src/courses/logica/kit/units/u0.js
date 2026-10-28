// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "La lògica estudia quan un raonament és **vàlid**: quan la conclusió se segueix per força de les premisses. Al seminari ho fem amb dos llenguatges, el de les proposicions (CP0) i el dels predicats (CP1), i amb una aplicació: la programació lògica.",
    "La lógica estudia cuándo un razonamiento es **válido**: cuándo la conclusión se sigue necesariamente de las premisas. En el seminario lo hacemos con dos lenguajes, el de las proposiciones (CP0) y el de los predicados (CP1), y con una aplicación: la programación lógica.",
    "Logic studies when an argument is **valid**: when the conclusion necessarily follows from the premises. In the seminar we do it with two languages, that of propositions (CP0) and that of predicates (CP1), and with an application: logic programming."
   ]
  }
 ],
 "sections": {
  "u0-que-es-un-raonament-valid": [
   {
    "t": "p",
    "x": [
     "Un raonament parteix d'unes **premisses** (el que donem per cert) i arriba a una **conclusió**. És vàlid si és impossible que les premisses siguin certes i la conclusió falsa.",
     "Un razonamiento parte de unas **premisas** (lo que damos por cierto) y llega a una **conclusión**. Es válido si es imposible que las premisas sean ciertas y la conclusión falsa.",
     "An argument starts from some **premises** (what we take as true) and reaches a **conclusion**. It is valid if it is impossible for the premises to be true and the conclusion false."
    ]
   },
   {
    "head": [
     "#",
     [
      "Raonament",
      "Razonamiento",
      "Argument"
     ],
     [
      "Vàlid?",
      "¿Válido?",
      "Valid?"
     ]
    ],
    "rows": [
     [
      "1",
      [
       "Si vaig de vacances, aniré a la platja. Vaig de vacances. **Per tant**, aniré a la platja.",
       "Si me voy de vacaciones, iré a la playa. Me voy de vacaciones. **Por tanto**, iré a la playa.",
       "If I go on holiday, I will go to the beach. I am going on holiday. **Therefore**, I will go to the beach."
      ],
      "Sí (*modus ponens*)"
     ],
     [
      "2",
      [
       "Si vaig de vacances, aniré a la platja. Vaig a la platja. **Per tant**, vaig de vacances.",
       "Si me voy de vacaciones, iré a la playa. Voy a la playa. **Por tanto**, me voy de vacaciones.",
       "If I go on holiday, I will go to the beach. I am going to the beach. **Therefore**, I am going on holiday."
      ],
      [
       "No: puc anar a la platja sense ser de vacances",
       "No: puedo ir a la playa sin estar de vacaciones",
       "No: I can go to the beach without being on holiday"
      ]
     ],
     [
      "3",
      [
       "Tots els dilluns hi ha classe de lògica. Avui no n'hi ha. **Per tant**, avui no és dilluns.",
       "Todos los lunes hay clase de lógica. Hoy no hay. **Por tanto**, hoy no es lunes.",
       "Every Monday there is a logic class. Today there is none. **Therefore**, today is not Monday."
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
       "La validez depende de la **forma**, no del contenido. «Todos los peces vuelan; el salmón es un pez; por tanto, el salmón vuela» es válido (con una premisa falsa). «Todos los andorranos son europeos; Napoleón era europeo; por tanto, Napoleón era andorrano» no es válido, aunque las premisas sean ciertas.",
       "Validity depends on the **form**, not on the content. “All fish fly; the salmon is a fish; therefore, the salmon flies” is valid (with a false premise). “All Andorrans are European; Napoleon was European; therefore, Napoleon was Andorran” is not valid, even though the premises are true."
      ]
     }
    ],
    "t": "prop",
    "title": [
     "Vàlid no vol dir cert",
     "Válido no quiere decir cierto",
     "Valid does not mean true"
    ]
   },
   {
    "t": "p",
    "x": [
     "Per rebutjar un raonament n'hi ha prou amb **un contraexemple**: una situació amb les premisses certes i la conclusió falsa. Per acceptar-lo, cal demostrar que no n'hi ha cap. Aquest mòdul ensenya tres maneres de fer-ho: la taula de veritat, la deducció amb regles i la resolució.",
     "Para rechazar un razonamiento basta con **un contraejemplo**: una situación con las premisas ciertas y la conclusión falsa. Para aceptarlo, hay que demostrar que no existe ninguno. Este módulo enseña tres maneras de hacerlo: la tabla de verdad, la deducción con reglas y la resolución.",
     "To reject an argument **one counterexample** is enough: a situation with the premises true and the conclusion false. To accept it, you must show that none exists. This module teaches three ways of doing it: the truth table, deduction with rules and resolution."
    ]
   },
   {
    "t": "check",
    "ex": {
     "id": "u0-c1",
     "type": "tf",
     "q": [
      "Un raonament amb una premissa falsa pot ser vàlid.",
      "Un razonamiento con una premisa falsa puede ser válido.",
      "An argument with a false premise can be valid."
     ],
     "answer": true,
     "sol": [
      {
       "t": "p",
       "x": [
        "Sí: la validesa depèn de la forma. Només diu que, si les premisses fossin certes, la conclusió també ho seria.",
        "Sí: la validez depende de la forma. Solo dice que, si las premisas fueran ciertas, la conclusión también lo sería.",
        "Yes: validity depends on the form. It only says that, if the premises were true, the conclusion would be true as well."
       ]
      }
     ]
    }
   }
  ],
  "u0-el-mapa-del-curs": [
   {
    "t": "p",
    "x": [
     "Els dos llenguatges es treballen en el mateix ordre: primer s'aprèn a **escriure** (formalitzar), després a decidir què és **cert** (semàntica) i finalment a **demostrar** (teoria de prova).",
     "Los dos lenguajes se trabajan en el mismo orden: primero se aprende a **escribir** (formalizar), después a decidir qué es **cierto** (semántica) y finalmente a **demostrar** (teoría de la prueba).",
     "Both languages are studied in the same order: first you learn to **write** (formalise), then to decide what is **true** (semantics) and finally to **prove** (proof theory)."
    ]
   },
   {
    "caption": [
     "Cada fila és una mateixa pregunta en tots dos llenguatges. El CP1 amplia el CP0: tot el que val en proposicions continua valent amb predicats, i s'hi afegeixen els quantificadors.",
     "Cada fila es una misma pregunta en los dos lenguajes. El CP1 amplía el CP0: todo lo que vale en proposiciones sigue valiendo con predicados, y se añaden los cuantificadores.",
     "Each row is the same question in both languages. CP1 extends CP0: everything that holds for propositions still holds with predicates, and quantifiers are added."
    ],
    "cls": "vz",
    "svg": [
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Mapa del mòdul de lògica: CP0, CP1 i programació lògica\">\n<defs><marker id=\"u0a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs>\n<text class=\"vz-cap\" x=\"20\" y=\"22\">TEMA</text>\n<text class=\"vz-lab vz-tA\" x=\"235\" y=\"22\" text-anchor=\"middle\">CP0 · proposicions</text>\n<text class=\"vz-lab vz-tI\" x=\"495\" y=\"22\" text-anchor=\"middle\">CP1 · predicats</text>\n<text class=\"vz-lab vz-tT\" x=\"690\" y=\"22\" text-anchor=\"middle\">Programació lògica</text>\n<text class=\"vz-t vz-b\" x=\"20\" y=\"72\">Llenguatge</text><text class=\"vz-sm\" x=\"20\" y=\"90\">formalitzar</text>\n<text class=\"vz-t vz-b\" x=\"20\" y=\"152\">Semàntica</text><text class=\"vz-sm\" x=\"20\" y=\"170\">què és cert</text>\n<text class=\"vz-t vz-b\" x=\"20\" y=\"232\">Prova</text><text class=\"vz-sm\" x=\"20\" y=\"250\">demostrar</text>\n<rect class=\"vz-bx\" x=\"140\" y=\"50\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"235\" y=\"72\" text-anchor=\"middle\">P, Q, ¬, ∧, ∨, →</text><text class=\"vz-sm\" x=\"235\" y=\"91\" text-anchor=\"middle\">Unitat 1</text>\n<rect class=\"vz-bx\" x=\"140\" y=\"130\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"235\" y=\"152\" text-anchor=\"middle\">taules de veritat</text><text class=\"vz-sm\" x=\"235\" y=\"171\" text-anchor=\"middle\">Unitat 2</text>\n<rect class=\"vz-bx\" x=\"140\" y=\"210\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"235\" y=\"232\" text-anchor=\"middle\">regles · resolució</text><text class=\"vz-sm\" x=\"235\" y=\"251\" text-anchor=\"middle\">Unitat 3</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"50\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"495\" y=\"72\" text-anchor=\"middle\">∀x, ∃x, P(x,y), f(x)</text><text class=\"vz-sm\" x=\"495\" y=\"91\" text-anchor=\"middle\">Unitats 4 i 5</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"130\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"495\" y=\"152\" text-anchor=\"middle\">interpretacions</text><text class=\"vz-sm\" x=\"495\" y=\"171\" text-anchor=\"middle\">Unitat 6</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"210\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"495\" y=\"232\" text-anchor=\"middle\">forma clausal · UMG</text><text class=\"vz-sm\" x=\"495\" y=\"251\" text-anchor=\"middle\">Unitats 7 i 8</text>\n<rect class=\"vz-bx\" x=\"625\" y=\"210\" width=\"130\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"690\" y=\"232\" text-anchor=\"middle\">Horn · PROLOG</text><text class=\"vz-sm\" x=\"690\" y=\"251\" text-anchor=\"middle\">Unitat 9</text>\n<path class=\"vz-ln\" d=\"M330 76 H396\" marker-end=\"url(#u0a)\"></path><path class=\"vz-ln\" d=\"M330 156 H396\" marker-end=\"url(#u0a)\"></path><path class=\"vz-ln\" d=\"M330 236 H396\" marker-end=\"url(#u0a)\"></path>\n<path class=\"vz-ln\" d=\"M590 236 H621\" marker-end=\"url(#u0a)\"></path>\n<text class=\"vz-sm\" x=\"363\" y=\"70\" text-anchor=\"middle\">s'amplia</text>\n</svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Mapa del módulo de lógica: CP0, CP1 y programación lógica\">\n<defs><marker id=\"u0a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs>\n<text class=\"vz-cap\" x=\"20\" y=\"22\">TEMA</text>\n<text class=\"vz-lab vz-tA\" x=\"235\" y=\"22\" text-anchor=\"middle\">CP0 · proposiciones</text>\n<text class=\"vz-lab vz-tI\" x=\"495\" y=\"22\" text-anchor=\"middle\">CP1 · predicados</text>\n<text class=\"vz-lab vz-tT\" x=\"690\" y=\"22\" text-anchor=\"middle\">Programación lógica</text>\n<text class=\"vz-t vz-b\" x=\"20\" y=\"72\">Lenguaje</text><text class=\"vz-sm\" x=\"20\" y=\"90\">formalizar</text>\n<text class=\"vz-t vz-b\" x=\"20\" y=\"152\">Semántica</text><text class=\"vz-sm\" x=\"20\" y=\"170\">qué es cierto</text>\n<text class=\"vz-t vz-b\" x=\"20\" y=\"232\">Prueba</text><text class=\"vz-sm\" x=\"20\" y=\"250\">demostrar</text>\n<rect class=\"vz-bx\" x=\"140\" y=\"50\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"235\" y=\"72\" text-anchor=\"middle\">P, Q, ¬, ∧, ∨, →</text><text class=\"vz-sm\" x=\"235\" y=\"91\" text-anchor=\"middle\">Unidad 1</text>\n<rect class=\"vz-bx\" x=\"140\" y=\"130\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"235\" y=\"152\" text-anchor=\"middle\">tablas de verdad</text><text class=\"vz-sm\" x=\"235\" y=\"171\" text-anchor=\"middle\">Unidad 2</text>\n<rect class=\"vz-bx\" x=\"140\" y=\"210\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"235\" y=\"232\" text-anchor=\"middle\">reglas · resolución</text><text class=\"vz-sm\" x=\"235\" y=\"251\" text-anchor=\"middle\">Unidad 3</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"50\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"495\" y=\"72\" text-anchor=\"middle\">∀x, ∃x, P(x,y), f(x)</text><text class=\"vz-sm\" x=\"495\" y=\"91\" text-anchor=\"middle\">Unidades 4 y 5</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"130\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"495\" y=\"152\" text-anchor=\"middle\">interpretaciones</text><text class=\"vz-sm\" x=\"495\" y=\"171\" text-anchor=\"middle\">Unidad 6</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"210\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"495\" y=\"232\" text-anchor=\"middle\">forma clausal · UMG</text><text class=\"vz-sm\" x=\"495\" y=\"251\" text-anchor=\"middle\">Unidades 7 y 8</text>\n<rect class=\"vz-bx\" x=\"625\" y=\"210\" width=\"130\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"690\" y=\"232\" text-anchor=\"middle\">Horn · PROLOG</text><text class=\"vz-sm\" x=\"690\" y=\"251\" text-anchor=\"middle\">Unidad 9</text>\n<path class=\"vz-ln\" d=\"M330 76 H396\" marker-end=\"url(#u0a)\"></path><path class=\"vz-ln\" d=\"M330 156 H396\" marker-end=\"url(#u0a)\"></path><path class=\"vz-ln\" d=\"M330 236 H396\" marker-end=\"url(#u0a)\"></path>\n<path class=\"vz-ln\" d=\"M590 236 H621\" marker-end=\"url(#u0a)\"></path>\n<text class=\"vz-sm\" x=\"363\" y=\"70\" text-anchor=\"middle\">se amplía</text>\n</svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Map of the logic module: CP0, CP1 and logic programming\">\n<defs><marker id=\"u0a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs>\n<text class=\"vz-cap\" x=\"20\" y=\"22\">TEMA</text>\n<text class=\"vz-lab vz-tA\" x=\"235\" y=\"22\" text-anchor=\"middle\">CP0 · propositions</text>\n<text class=\"vz-lab vz-tI\" x=\"495\" y=\"22\" text-anchor=\"middle\">CP1 · predicates</text>\n<text class=\"vz-lab vz-tT\" x=\"690\" y=\"22\" text-anchor=\"middle\">Logic programming</text>\n<text class=\"vz-t vz-b\" x=\"20\" y=\"72\">Language</text><text class=\"vz-sm\" x=\"20\" y=\"90\">formalise</text>\n<text class=\"vz-t vz-b\" x=\"20\" y=\"152\">Semantics</text><text class=\"vz-sm\" x=\"20\" y=\"170\">what is true</text>\n<text class=\"vz-t vz-b\" x=\"20\" y=\"232\">Proof</text><text class=\"vz-sm\" x=\"20\" y=\"250\">demostrar</text>\n<rect class=\"vz-bx\" x=\"140\" y=\"50\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"235\" y=\"72\" text-anchor=\"middle\">P, Q, ¬, ∧, ∨, →</text><text class=\"vz-sm\" x=\"235\" y=\"91\" text-anchor=\"middle\">Unit 1</text>\n<rect class=\"vz-bx\" x=\"140\" y=\"130\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"235\" y=\"152\" text-anchor=\"middle\">truth tables</text><text class=\"vz-sm\" x=\"235\" y=\"171\" text-anchor=\"middle\">Unit 2</text>\n<rect class=\"vz-bx\" x=\"140\" y=\"210\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"235\" y=\"232\" text-anchor=\"middle\">rules · resolution</text><text class=\"vz-sm\" x=\"235\" y=\"251\" text-anchor=\"middle\">Unit 3</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"50\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"495\" y=\"72\" text-anchor=\"middle\">∀x, ∃x, P(x,y), f(x)</text><text class=\"vz-sm\" x=\"495\" y=\"91\" text-anchor=\"middle\">Units 4 and 5</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"130\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"495\" y=\"152\" text-anchor=\"middle\">interpretations</text><text class=\"vz-sm\" x=\"495\" y=\"171\" text-anchor=\"middle\">Unit 6</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"210\" width=\"190\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"495\" y=\"232\" text-anchor=\"middle\">forma clausal · UMG</text><text class=\"vz-sm\" x=\"495\" y=\"251\" text-anchor=\"middle\">Units 7 and 8</text>\n<rect class=\"vz-bx\" x=\"625\" y=\"210\" width=\"130\" height=\"52\" rx=\"8\"></rect><text class=\"vz-t\" x=\"690\" y=\"232\" text-anchor=\"middle\">Horn · PROLOG</text><text class=\"vz-sm\" x=\"690\" y=\"251\" text-anchor=\"middle\">Unit 9</text>\n<path class=\"vz-ln\" d=\"M330 76 H396\" marker-end=\"url(#u0a)\"></path><path class=\"vz-ln\" d=\"M330 156 H396\" marker-end=\"url(#u0a)\"></path><path class=\"vz-ln\" d=\"M330 236 H396\" marker-end=\"url(#u0a)\"></path>\n<path class=\"vz-ln\" d=\"M590 236 H621\" marker-end=\"url(#u0a)\"></path>\n<text class=\"vz-sm\" x=\"363\" y=\"70\" text-anchor=\"middle\">is extended</text>\n</svg></div>"
    ],
    "t": "diagram",
    "mode": "explained"
   }
  ],
  "u0-notacio": [
   {
    "head": [
     [
      "Símbol",
      "Símbolo",
      "Symbol"
     ],
     [
      "Nom",
      "Nombre",
      "Name"
     ],
     [
      "Es llegeix",
      "Se lee",
      "Read as"
     ]
    ],
    "rows": [
     [
      "`¬A`",
      [
       "negació",
       "negación",
       "negation"
      ],
      "no A"
     ],
     [
      "`A ∧ B`",
      [
       "conjunció",
       "conjunción",
       "conjunction"
      ],
      [
       "A i B",
       "A y B",
       "A and B"
      ]
     ],
     [
      "`A ∨ B`",
      [
       "disjunció",
       "disyunción",
       "disjunction"
      ],
      [
       "A o B (o totes dues)",
       "A o B (o ambas)",
       "A or B (or both)"
      ]
     ],
     [
      "`A → B`",
      [
       "implicació",
       "implicación",
       "implication"
      ],
      [
       "si A, llavors B",
       "si A, entonces B",
       "if A, then B"
      ]
     ],
     [
      "`A ↔ B`",
      [
       "doble implicació",
       "doble implicación",
       "biconditional"
      ],
      [
       "A si i només si B",
       "A si y solo si B",
       "A if and only if B"
      ]
     ],
     [
      "`∀x` · `∃x`",
      [
       "quantificadors",
       "cuantificadores",
       "quantifiers"
      ],
      [
       "per a tot x · existeix algun x",
       "para todo x · existe algún x",
       "for all x · there exists some x"
      ]
     ],
     [
      "`A ⇒ B` · `A ⇔ B`",
      [
       "conseqüència · equivalència lògica",
       "consecuencia · equivalencia lógica",
       "consequence · logical equivalence"
      ],
      [
       "B se segueix d'A · A i B diuen el mateix",
       "B se sigue de A · A y B dicen lo mismo",
       "B follows from A · A and B say the same"
      ]
     ],
     [
      "`□`",
      [
       "clàusula buida",
       "cláusula vacía",
       "empty clause"
      ],
      [
       "contradicció (s'ha acabat la refutació)",
       "contradicción (se ha terminado la refutación)",
       "contradiction (the refutation is finished)"
      ]
     ],
     [
      "`{x ← a}`",
      [
       "substitució",
       "sustitución",
       "substitution"
      ],
      [
       "posem a on hi ha x",
       "ponemos a donde está x",
       "we put a where x is"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "Prioritat de les connectives, de més a menys forta: `¬`, `∧`, `∨`, `→`, `↔`. Per exemple, `P → Q ∧ S` vol dir `P → (Q ∧ S)`. En cas de dubte, poseu parèntesis: als exàmens també se'n posen «de vegades innecessaris» per aclarir.",
     "Prioridad de las conectivas, de más a menos fuerte: `¬`, `∧`, `∨`, `→`, `↔`. Por ejemplo, `P → Q ∧ S` quiere decir `P → (Q ∧ S)`. En caso de duda, poned paréntesis: en los exámenes también se ponen «a veces innecesarios» para aclarar.",
     "Precedence of the connectives, from strongest to weakest: `¬`, `∧`, `∨`, `→`, `↔`. For example, `P → Q ∧ S` means `P → (Q ∧ S)`. When in doubt, add parentheses: exams also include some that are “sometimes unnecessary” to make things clear."
    ]
   }
  ],
  "u0-com-son-els-controls": [
   {
    "t": "p",
    "x": [
     "Els dos controls duren una hora i mitja i tenen tres exercicis. Cada tipus d'exercici té la seva pàgina d'entrenament, amb molts exercicis resolts pas a pas:",
     "Los dos controles duran una hora y media y tienen tres ejercicios. Cada tipo de ejercicio tiene su página de entrenamiento, con muchos ejercicios resueltos paso a paso:",
     "Both tests last an hour and a half and have three exercises. Each type of exercise has its own training page, with many exercises solved step by step:"
    ]
   },
   {
    "head": [
     "Control",
     [
      "Exercici",
      "Ejercicio",
      "Exercise"
     ],
     [
      "Pes",
      "Peso",
      "Weight"
     ],
     [
      "Què es demana",
      "Qué se pide",
      "What is asked"
     ],
     [
      "Practica-ho",
      "Practicadlo",
      "Practise it"
     ]
    ],
    "rows": [
     [
      [
       "**CP1**\nproposicions",
       "**CP1**\nproposiciones",
       "**Test 1**\npropositions"
      ],
      "1",
      "50%",
      [
       "Validar un raonament per resolució i per un altre mètode",
       "Validar un razonamiento por resolución y por otro método",
       "Validate an argument by resolution and by another method"
      ],
      [
       "[Raonaments en CP0](/logica/xr)",
       "[Razonamientos en CP0](/logica/xr)",
       "[Arguments in CP0](/logica/xr)"
      ]
     ],
     [
      "2",
      "30%",
      [
       "Formalitzar frases en CP0 i donar una equivalència",
       "Formalizar frases en CP0 y dar una equivalencia",
       "Formalise sentences in CP0 and give an equivalence"
      ],
      [
       "[Formalització CP0](/logica/xa)",
       "[Formalización CP0](/logica/xa)",
       "[CP0 formalisation](/logica/xa)"
      ]
     ],
     [
      "3",
      "20%",
      [
       "Taula de veritat: validesa i tipus d'enunciat",
       "Tabla de verdad: validez y tipo de enunciado",
       "Truth table: validity and type of statement"
      ],
      [
       "[Taules de veritat](/logica/xb)",
       "[Tablas de verdad](/logica/xb)",
       "[Truth tables](/logica/xb)"
      ]
     ],
     [
      [
       "**CP2**\npredicats",
       "**CP2**\npredicados",
       "**Test 2**\npredicates"
      ],
      "1",
      "20%",
      [
       "Validar un raonament en CP0 sense resolució (regles d'inferència)",
       "Validar un razonamiento en CP0 sin resolución (reglas de inferencia)",
       "Validate an argument in CP0 without resolution (inference rules)"
      ],
      [
       "[Raonaments en CP0](/logica/xr)",
       "[Razonamientos en CP0](/logica/xr)",
       "[Arguments in CP0](/logica/xr)"
      ]
     ],
     [
      "2",
      "40%",
      [
       "Formalitzar frases en CP1 i donar-ne la forma clausal",
       "Formalizar frases en CP1 y dar su forma clausal",
       "Formalise sentences in CP1 and give their clausal form"
      ],
      [
       "[Formalització CP1](/logica/xe)",
       "[Formalización CP1](/logica/xe)",
       "[CP1 formalisation](/logica/xe)"
      ]
     ],
     [
      "3",
      "40%",
      [
       "Resolució en CP1 notant els unificadors (UMG)",
       "Resolución en CP1 anotando los unificadores (UMG)",
       "Resolution in CP1 noting the unifiers (MGU)"
      ],
      [
       "[Resolució CP1](/logica/xf)",
       "[Resolución CP1](/logica/xf)",
       "[CP1 resolution](/logica/xf)"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "A l'examen es dona un full amb implicacions, equivalències i propietats dels quantificadors: el teniu explicat al [formulari](/logica/fs). Quan us vegeu preparats, feu un [simulacre](/logica/sim) amb rellotge.",
     "En el examen se da una hoja con implicaciones, equivalencias y propiedades de los cuantificadores: la tenéis explicada en el [formulario](/logica/fs). Cuando os veáis preparados, haced un [simulacro](/logica/sim) con reloj.",
     "In the exam you get a sheet with implications, equivalences and properties of the quantifiers: it is explained in the [formula sheet](/logica/fs). When you feel ready, do a [mock exam](/logica/sim) against the clock."
    ]
   }
  ],
  "u0-vocabulari-basic": [
   {
    "head": [
     [
      "Paraula",
      "Palabra",
      "Word"
     ],
     [
      "Què vol dir",
      "Qué quiere decir",
      "What it means"
     ],
     [
      "Exemple",
      "Ejemplo",
      "Example"
     ]
    ],
    "rows": [
     [
      [
       "Proposició",
       "Proposición",
       "Proposition"
      ],
      [
       "Frase que pot ser certa o falsa",
       "Frase que puede ser cierta o falsa",
       "A sentence that can be true or false"
      ],
      [
       "«Plou» → `P`",
       "«Llueve» → `P`",
       "“It is raining” → `P`"
      ]
     ],
     [
      "Fórmula (fbf)",
      [
       "Expressió ben escrita del llenguatge",
       "Expresión bien escrita del lenguaje",
       "A well-written expression of the language"
      ],
      "`(P ∧ Q) → R`"
     ],
     [
      [
       "Interpretació",
       "Interpretación",
       "Interpretation"
      ],
      [
       "Una manera de donar valor a tot: una fila de la taula de veritat, o un «món» en CP1",
       "Una manera de dar valor a todo: una fila de la tabla de verdad, o un «mundo» en CP1",
       "A way of giving a value to everything: a row of the truth table, or a “world” in CP1"
      ],
      "`P = T, Q = F`"
     ],
     [
      [
       "Tautologia",
       "Tautología",
       "Tautology"
      ],
      [
       "Fórmula certa en totes les interpretacions",
       "Fórmula cierta en todas las interpretaciones",
       "Formula that is true in every interpretation"
      ],
      "`P ∨ ¬P`"
     ],
     [
      [
       "Conseqüència lògica",
       "Consecuencia lógica",
       "Logical consequence"
      ],
      [
       "B és certa sempre que ho són les premisses",
       "B es cierta siempre que lo son las premisas",
       "B is true whenever the premises are"
      ],
      "`P, P → Q ⇒ Q`"
     ],
     [
      [
       "Predicat",
       "Predicado",
       "Predicate"
      ],
      [
       "Propietat o relació entre objectes",
       "Propiedad o relación entre objetos",
       "Property of, or relation between, objects"
      ],
      [
       "`L(x,y)`: x llegeix y",
       "`L(x,y)`: x lee y",
       "`L(x,y)`: x reads y"
      ]
     ],
     [
      [
       "Terme",
       "Término",
       "Term"
      ],
      [
       "Nom d'un objecte: constant, variable o funció",
       "Nombre de un objeto: constante, variable o función",
       "Name of an object: constant, variable or function"
      ],
      "`pau`, `x`, `m(2010)`"
     ],
     [
      [
       "Quantificador",
       "Cuantificador",
       "Quantifier"
      ],
      [
       "Diu de quants objectes parlem",
       "Dice de cuántos objetos hablamos",
       "Says how many objects we are talking about"
      ],
      [
       "`∀x` tots, `∃x` algun",
       "`∀x` todos, `∃x` alguno",
       "`∀x` all, `∃x` some"
      ]
     ],
     [
      [
       "Clàusula",
       "Cláusula",
       "Clause"
      ],
      [
       "Disjunció de literals, escrita com un conjunt",
       "Disyunción de literales, escrita como un conjunto",
       "Disjunction of literals, written as a set"
      ],
      "`{¬P, Q}` = `¬P ∨ Q`"
     ],
     [
      [
       "Refutació",
       "Refutación",
       "Refutation"
      ],
      [
       "Demostrar afegint la negació de la conclusió fins a arribar a una contradicció",
       "Demostrar añadiendo la negación de la conclusión hasta llegar a una contradicción",
       "Proving by adding the negation of the conclusion until reaching a contradiction"
      ],
      [
       "arribar a `□`",
       "llegar a `□`",
       "reach `□`"
      ]
     ],
     [
      "Unificador (UMG)",
      [
       "Substitució que fa iguals dos àtoms, sense fixar res de més",
       "Sustitución que hace iguales dos átomos, sin fijar nada de más",
       "Substitution that makes two atoms equal, without fixing anything more than needed"
      ],
      "`P(x,b)`, `P(a,y)`: `{x ← a, y ← b}`"
     ]
    ],
    "t": "table"
   },
   {
    "t": "check",
    "ex": {
     "id": "u0-c2",
     "type": "mcq",
     "q": [
      "Una fórmula certa en totes les interpretacions és…",
      "Una fórmula cierta en todas las interpretaciones es…",
      "A formula that is true in every interpretation is…"
     ],
     "opts": [
      [
       "una tautologia",
       "una tautología",
       "a tautology"
      ],
      [
       "satisfactible no vàlida",
       "satisfacible no válida",
       "satisfiable but not valid"
      ],
      [
       "insatisfactible",
       "insatisfacible",
       "unsatisfiable"
      ],
      [
       "una clàusula",
       "una cláusula",
       "a clause"
      ]
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "És la definició de tautologia (o fórmula vàlida).",
        "Es la definición de tautología (o fórmula válida).",
        "It is the definition of a tautology (or valid formula)."
       ]
      }
     ]
    }
   }
  ]
 },
 "examEnd": [
  {
   "id": "u0-x1",
   "type": "mcq",
   "q": [
    "«Si plou, el terra es mulla. El terra està mullat. Per tant, ha plogut.» Aquest raonament és…",
    "«Si llueve, el suelo se moja. El suelo está mojado. Por tanto, ha llovido.» Este razonamiento es…",
    "“If it rains, the ground gets wet. The ground is wet. Therefore, it has rained.” This argument is…"
   ],
   "opts": [
    [
     "vàlid",
     "válido",
     "valid"
    ],
    [
     "no vàlid: afirma el conseqüent",
     "no válido: afirma el consecuente",
     "not valid: it affirms the consequent"
    ],
    [
     "vàlid només si plou",
     "válido solo si llueve",
     "valid only if it rains"
    ],
    [
     "no es pot saber sense taula",
     "no se puede saber sin tabla",
     "impossible to tell without a table"
    ]
   ],
   "answer": 1,
   "sol": [
    {
     "t": "p",
     "x": [
      "Contraexemple: el terra està mullat perquè algú l'ha regat, i no ha plogut. Premisses certes i conclusió falsa.",
      "Contraejemplo: el suelo está mojado porque alguien lo ha regado, y no ha llovido. Premisas ciertas y conclusión falsa.",
      "Counterexample: the ground is wet because someone watered it, and it has not rained. True premises and a false conclusion."
     ]
    }
   ]
  },
  {
   "id": "u0-x2",
   "type": "tf",
   "q": [
    "Per demostrar que un raonament no és vàlid, n'hi ha prou amb un contraexemple.",
    "Para demostrar que un razonamiento no es válido, basta con un contraejemplo.",
    "To show that an argument is not valid, one counterexample is enough."
   ],
   "answer": true,
   "sol": [
    {
     "t": "p",
     "x": [
      "Una sola situació amb premisses certes i conclusió falsa trenca la validesa.",
      "Una sola situación con premisas ciertas y conclusión falsa rompe la validez.",
      "A single situation with true premises and a false conclusion breaks validity."
     ]
    }
   ]
  },
  {
   "id": "u0-x3",
   "type": "mcq",
   "q": [
    "`P → Q ∧ S` vol dir:",
    "`P → Q ∧ S` quiere decir:",
    "`P → Q ∧ S` means:"
   ],
   "opts": [
    "`(P → Q) ∧ S`",
    "`P → (Q ∧ S)`",
    "`(P ∧ S) → Q`",
    "`¬P ∧ Q ∧ S`"
   ],
   "answer": 1,
   "sol": [
    {
     "t": "p",
     "x": [
      "`∧` lliga més fort que `→`.",
      "`∧` liga más fuerte que `→`.",
      "`∧` binds more tightly than `→`."
     ]
    }
   ]
  }
 ]
};
