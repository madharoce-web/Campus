// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "El càlcul de proposicions (CP0) treballa amb frases senceres, que són certes o falses, i les combina amb connectives. Formalitzar és passar del català a aquest llenguatge sense perdre ni afegir significat.",
    "El cálculo de proposiciones (CP0) trabaja con frases enteras, que son ciertas o falsas, y las combina con conectivas. Formalizar es pasar del castellano a este lenguaje sin perder ni añadir significado."
   ]
  }
 ],
 "sections": {
  "u1-proposicions-atomiques-i-connectives": [
   {
    "t": "p",
    "x": [
     "Una **proposició atòmica** és una afirmació simple que pot ser certa o falsa: «la Berta té set». S'hi posa un nom amb una lletra majúscula (`S`). Amb les connectives es construeixen fórmules més grans.",
     "Una **proposición atómica** es una afirmación simple que puede ser cierta o falsa: «Berta tiene sed». Se le pone un nombre con una letra mayúscula (`S`). Con las conectivas se construyen fórmulas más grandes."
    ]
   },
   {
    "head": [
     [
      "Connectiva",
      "Conectiva"
     ],
     "Fórmula",
     [
      "És certa quan…",
      "Es cierta cuando…"
     ],
     [
      "Paraules que la indiquen",
      "Palabras que la indican"
     ]
    ],
    "rows": [
     [
      [
       "negació",
       "negación"
      ],
      "`¬A`",
      [
       "A és falsa",
       "A es falsa"
      ],
      [
       "no, no és cert que, ni",
       "no, no es cierto que, ni"
      ]
     ],
     [
      [
       "conjunció",
       "conjunción"
      ],
      "`A ∧ B`",
      [
       "totes dues són certes",
       "ambas son ciertas"
      ],
      [
       "i, però, encara que, alhora, tanmateix",
       "y, pero, aunque, a la vez, sin embargo"
      ]
     ],
     [
      [
       "disjunció",
       "disyunción"
      ],
      "`A ∨ B`",
      [
       "almenys una és certa",
       "al menos una es cierta"
      ],
      [
       "o, o bé, a menys que",
       "o, o bien, a menos que"
      ]
     ],
     [
      [
       "implicació",
       "implicación"
      ],
      "`A → B`",
      [
       "no passa que A sigui certa i B falsa",
       "no ocurre que A sea cierta y B falsa"
      ],
      [
       "si … llavors, quan, només si, sempre que",
       "si … entonces, cuando, solo si, siempre que"
      ]
     ],
     [
      [
       "doble implicació",
       "doble implicación"
      ],
      "`A ↔ B`",
      [
       "totes dues tenen el mateix valor",
       "ambas tienen el mismo valor"
      ],
      [
       "si i només si, equival a",
       "si y solo si, equivale a"
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
       "Definiu les proposicions sempre en forma afirmativa i feu servir `¬` per a les negacions: `B` = «la Berta beu aigua», i «la Berta no beu aigua» és `¬B`. Si definiu una proposició negativa, tard o d'hora haureu d'escriure dobles negacions.",
       "Definid las proposiciones siempre en forma afirmativa y usad `¬` para las negaciones: `B` = «Berta bebe agua», y «Berta no bebe agua» es `¬B`. Si definís una proposición negativa, tarde o temprano tendréis que escribir dobles negaciones."
      ]
     }
    ],
    "t": "tip",
    "title": [
     "Les atòmiques, en positiu",
     "Las atómicas, en positivo"
    ]
   }
  ],
  "u1-prioritats-i-parentesis": [
   {
    "t": "p",
    "x": [
     "Sense parèntesis, les connectives s'apliquen en aquest ordre: `¬`, després `∧`, després `∨`, després `→` i finalment `↔`. És el mateix que fem amb `−`, `·` i `+` en aritmètica.",
     "Sin paréntesis, las conectivas se aplican en este orden: `¬`, después `∧`, después `∨`, después `→` y finalmente `↔`. Es lo mismo que hacemos con `−`, `·` y `+` en aritmética."
    ]
   },
   {
    "head": [
     [
      "Escrit així",
      "Escrito así"
     ],
     [
      "Vol dir",
      "Quiere decir"
     ]
    ],
    "rows": [
     [
      "`¬P ∧ Q`",
      "`(¬P) ∧ Q`, no `¬(P ∧ Q)`"
     ],
     [
      "`P ∧ S → ¬R`",
      "`(P ∧ S) → ¬R`"
     ],
     [
      "`P → Q ∧ S`",
      [
       "`P → (Q ∧ S)` (és l'aclariment que fa l'enunciat del CP2)",
       "`P → (Q ∧ S)` (es la aclaración que hace el enunciado del CP2)"
      ]
     ],
     [
      "`P ∨ Q → R`",
      "`(P ∨ Q) → R`"
     ]
    ],
    "t": "table"
   }
  ],
  "u1-com-es-formalitza-pas-a-pas": [
   {
    "h": [
     "<ol class=\"steps\">\n<li><b>Feu el diccionari.</b> Una lletra per a cada afirmació simple, en positiu. A l'examen es demana explícitament: «doneu cadascuna de les proposicions».</li>\n<li><b>Busqueu les paraules connectives</b> («si», «només si», «però», «ni»…) i decidiu quina és la connectiva principal de la frase.</li>\n<li><b>Escriviu la fórmula</b> de fora cap a dins, amb parèntesis.</li>\n<li><b>Comproveu-la</b> llegint-la en veu alta: ha de dir el mateix que la frase, ni més ni menys.</li>\n</ol>",
     "<ol class=\"steps\">\n<li><b>Haced el diccionario.</b> Una letra para cada afirmación simple, en positivo. En el examen se pide explícitamente: «dad cada una de las proposiciones».</li>\n<li><b>Buscad las palabras conectivas</b> («si», «solo si», «pero», «ni»…) y decidid cuál es la conectiva principal de la frase.</li>\n<li><b>Escribid la fórmula</b> de fuera hacia dentro, con paréntesis.</li>\n<li><b>Comprobadla</b> leyéndola en voz alta: tiene que decir lo mismo que la frase, ni más ni menos.</li>\n</ol>"
    ],
    "t": "html"
   }
  ],
  "u1-les-expressions-que-donen-mes-problemes": [
   {
    "t": "p",
    "x": [
     "La majoria d'errors venen de les condicions. La clau és saber quina part és la **condició** (va a l'esquerra de la fletxa) i quina el **resultat** (a la dreta).",
     "La mayoría de errores vienen de las condiciones. La clave es saber qué parte es la **condición** (va a la izquierda de la flecha) y cuál el **resultado** (a la derecha)."
    ]
   },
   {
    "head": [
     [
      "En català",
      "En castellano"
     ],
     "Fórmula",
     [
      "Per què",
      "Por qué"
     ]
    ],
    "rows": [
     [
      [
       "Si A, (llavors) B",
       "Si A, (entonces) B"
      ],
      "`A → B`",
      [
       "A és la condició",
       "A es la condición"
      ]
     ],
     [
      [
       "B si A · B quan A · B sempre que A",
       "B si A · B cuando A · B siempre que A"
      ],
      "`A → B`",
      [
       "la condició pot anar darrere",
       "la condición puede ir detrás"
      ]
     ],
     [
      [
       "**A només si B**",
       "**A solo si B**"
      ],
      "`A → B`",
      [
       "B és necessària per a A: sense B no hi ha A",
       "B es necesaria para A: sin B no hay A"
      ]
     ],
     [
      [
       "A si i només si B",
       "A si y solo si B"
      ],
      "`A ↔ B`",
      [
       "condició necessària i suficient",
       "condición necesaria y suficiente"
      ]
     ],
     [
      [
       "A és suficient per a B",
       "A es suficiente para B"
      ],
      "`A → B`",
      [
       "n'hi ha prou amb A per tenir B",
       "basta con A para tener B"
      ]
     ],
     [
      [
       "A és necessari per a B",
       "A es necesario para B"
      ],
      "`B → A`",
      [
       "sense A no hi ha B",
       "sin A no hay B"
      ]
     ],
     [
      [
       "A a menys que B",
       "A a menos que B"
      ],
      "`A ∨ B` (≡ `¬B → A`)",
      [
       "si no passa B, passa A",
       "si no ocurre B, ocurre A"
      ]
     ],
     [
      "Ni A ni B",
      "`¬A ∧ ¬B`",
      [
       "totes dues són falses",
       "ambas son falsas"
      ]
     ],
     [
      [
       "A però no B · A encara que no B",
       "A pero no B · A aunque no B"
      ],
      "`A ∧ ¬B`",
      [
       "«però» i «encara que» són «i»",
       "«pero» y «aunque» son «y»"
      ]
     ],
     [
      [
       "No és cert que A i B",
       "No es cierto que A y B"
      ],
      "`¬(A ∧ B)`",
      [
       "la negació afecta tot el que segueix",
       "la negación afecta a todo lo que sigue"
      ]
     ],
     [
      [
       "O A o B (però no tots dos)",
       "O A o B (pero no ambas)"
      ],
      "`(A ∨ B) ∧ ¬(A ∧ B)`",
      [
       "disjunció exclusiva",
       "disyunción exclusiva"
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
       "«La Berta **només** beu aigua **si** té set» és `B → S`: si la veiem beure aigua, segur que té set. No diu que sempre que tingui set begui aigua (això seria `S → B`). Truc: «només si» porta la fletxa cap a la condició.",
       "«Berta **solo** bebe agua **si** tiene sed» es `B → S`: si la vemos beber agua, seguro que tiene sed. No dice que siempre que tenga sed beba agua (eso sería `S → B`). Truco: «solo si» lleva la flecha hacia la condición."
      ]
     }
    ],
    "t": "warn",
    "title": [
     "«Només si» no és «si»",
     "«Solo si» no es «si»"
    ]
   }
  ],
  "u1-exemple-resolt-l-exercici-2-del-cp1": [
   {
    "t": "p",
    "x": [
     "Diccionari: `A` l'Anna beu taronjada · `C` el Carles beu aigua · `D` el Carles està deshidratat · `M` el Carles menja cacauets · `T` la Berta beu taronjada · `B` la Berta beu aigua · `S` la Berta té set · `E` la Berta es deshidrata.",
     "Diccionario: `A` Anna bebe naranjada · `C` Carles bebe agua · `D` Carles está deshidratado · `M` Carles come cacahuetes · `T` Berta bebe naranjada · `B` Berta bebe agua · `S` Berta tiene sed · `E` Berta se deshidrata."
    ]
   },
   {
    "head": [
     "Frase",
     "Fórmula",
     [
      "Detall",
      "Detalle"
     ]
    ],
    "rows": [
     [
      [
       "(a) L'Anna beu taronjada i el Carles beu aigua si està deshidratat.",
       "(a) Anna bebe naranjada y Carles bebe agua si está deshidratado."
      ],
      "`A ∧ (D → C)`",
      [
       "«B si A»: la condició D va a l'esquerra",
       "«B si A»: la condición D va a la izquierda"
      ]
     ],
     [
      [
       "(b) Si el Carles menja cacauets, llavors beu aigua.",
       "(b) Si Carles come cacahuetes, entonces bebe agua."
      ],
      "`M → C`",
      ""
     ],
     [
      [
       "(c) La Berta beu taronjada però, l'Anna no.",
       "(c) Berta bebe naranjada, pero Anna no."
      ],
      "`T ∧ ¬A`",
      [
       "«però» = «i»",
       "«pero» = «y»"
      ]
     ],
     [
      [
       "(d) La Berta només beu aigua si té set.",
       "(d) Berta solo bebe agua si tiene sed."
      ],
      "`B → S`",
      [
       "«només si»",
       "«solo si»"
      ]
     ],
     [
      [
       "(e) Si la Berta no beu aigua quan té set, aleshores es deshidrata.",
       "(e) Si Berta no bebe agua cuando tiene sed, entonces se deshidrata."
      ],
      "`(S → ¬B) → E`",
      [
       "la condició és tota la frase «quan té set, no beu aigua»",
       "la condición es toda la frase «cuando tiene sed, no bebe agua»"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "(f) Una equivalència de (d), per la contrapositiva: `B → S ≡ ¬S → ¬B`, «si la Berta no té set, no beu aigua». Les equivalències més útils són al [formulari](/logica/fs).",
     "(f) Una equivalencia de (d), por la contrapositiva: `B → S ≡ ¬S → ¬B`, «si Berta no tiene sed, no bebe agua». Las equivalencias más útiles están en el [formulario](/logica/fs)."
    ]
   },
   {
    "t": "p",
    "x": [
     "Teniu aquest exercici i set més de resolts a [Formalització CP0](/logica/xa).",
     "Tenéis este ejercicio y siete más resueltos en [Formalización CP0](/logica/xa)."
    ]
   }
  ],
  "u1-comprova-que-has-entes": [
   {
    "t": "check",
    "ex": {
     "id": "u1-comprova-que-has-entes-q1",
     "type": "mcq",
     "q": [
      "«Aprovaré només si estudio» (A: aprovo, E: estudio) és:",
      "«Aprobaré solo si estudio» (A: apruebo, E: estudio) es:"
     ],
     "opts": [
      "`E → A`",
      "`A ↔ E`",
      "`A → E`",
      "`A ∧ E`"
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "Estudiar és condició necessària per aprovar: si aprovo, és que he estudiat. `A → E`.",
        "Estudiar es condición necesaria para aprobar: si apruebo, es que he estudiado. `A → E`."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "u1-comprova-que-has-entes-q2",
     "type": "mcq",
     "q": [
      "Com s'ha de llegir `¬P ∨ Q → R`?",
      "¿Cómo se tiene que leer `¬P ∨ Q → R`?"
     ],
     "opts": [
      "`¬(P ∨ Q) → R`",
      "`((¬P) ∨ Q) → R`",
      "`¬P ∨ (Q → R)`",
      "`¬(P ∨ (Q → R))`"
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "Primer `¬` (només sobre P), després `∨` i al final `→`.",
        "Primero `¬` (solo sobre P), después `∨` y al final `→`."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "u1-comprova-que-has-entes-q3",
     "type": "mcq",
     "q": [
      "«No sortim a menys que faci sol» (S: sortim, L: fa sol) és:",
      "«No salimos a menos que haga sol» (S: salimos, L: hace sol) es:"
     ],
     "opts": [
      "`¬S ∧ L`",
      "`L → ¬S`",
      "`¬S → L`",
      "`¬S ∨ L`"
     ],
     "answer": 3,
     "sol": [
      {
       "t": "p",
       "x": [
        "«X a menys que Y» és `X ∨ Y`; aquí X = `¬S`. I `¬S ∨ L` equival a `S → L`: si sortim, és que fa sol.",
        "«X a menos que Y» es `X ∨ Y`; aquí X = `¬S`. Y `¬S ∨ L` equivale a `S → L`: si salimos, es que hace sol."
       ]
      }
     ]
    }
   }
  ]
 },
 "examEnd": []
};
