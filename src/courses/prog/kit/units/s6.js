// Generat per tools/kit-import/prog.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Refinament per nivells aplicat al codi. Exemple resolt: els Nombres Perfectes.",
    "Refinamiento por niveles aplicado al código. Ejemplo resuelto: los Números Perfectos."
   ]
  },
  {
   "t": "list",
   "items": [
    [
     "**Sessions:** Dl. 12/10 i dc. 14/10",
     "**Sesiones:** Lu. 12/10 y mi. 14/10"
    ],
    [
     "**Teoria associada:** Tema 3.1 (disseny descendent)",
     "**Teoría asociada:** Tema 3.1 (diseño descendente)"
    ]
   ]
  },
  {
   "t": "p",
   "x": [
    "Quan un problema és massa gran per escriure'l de cop, es divideix en problemes més petits, i aquests en d'altres, fins que cada peça és una instrucció que ja sabem escriure. Això és el **disseny descendent** (o per refinaments successius). Aquesta setmana l'apliquem pas a pas, del pseudocodi al C++.",
    "Cuando un problema es demasiado grande para escribirlo de golpe, se divide en problemas más pequeños, y estos en otros, hasta que cada pieza es una instrucción que ya sabemos escribir. Esto es el **diseño descendente** (o por refinamientos sucesivos). Esta semana lo aplicamos paso a paso, del pseudocódigo al C++."
   ]
  },
  {
   "t": "summary",
   "title": [
    "En acabar aquesta pràctica sabràs",
    "Al terminar esta práctica sabrás"
   ],
   "blocks": [
    {
     "t": "list",
     "items": [
      [
       "Descriure un problema en una frase (nivell 0) i refinar-lo per nivells fins arribar al codi.",
       "Describir un problema en una frase (nivel 0) y refinarlo por niveles hasta llegar al código."
      ],
      [
       "Dibuixar l'arbre de refinaments i reconèixer quines accions ja són instruccions i quines cal refinar.",
       "Dibujar el árbol de refinamientos y reconocer qué acciones ya son instrucciones y cuáles hay que refinar."
      ],
      [
       "Escriure el programa nivell a nivell, provant cada part abans de continuar.",
       "Escribir el programa nivel a nivel, probando cada parte antes de continuar."
      ],
      [
       "Veure per què aquesta manera de treballar porta directament a les funcions de la setmana vinent.",
       "Ver por qué esta manera de trabajar lleva directamente a las funciones de la semana que viene."
      ]
     ]
    }
   ]
  }
 ],
 "sections": {
  "s6-1": [
   {
    "t": "def",
    "title": [
     "Disseny descendent",
     "Diseño descendente"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Mètode de disseny que parteix de l'enunciat complet (nivell 0) i el descompon en accions més concretes (nivell 1), cadascuna de les quals es torna a descompondre (nivell 2…), fins que totes les accions es poden escriure directament en el llenguatge. Cada nivell diu **què** es fa; el nivell següent diu **com**.",
       "Método de diseño que parte del enunciado completo (nivel 0) y lo descompone en acciones más concretas (nivel 1), cada una de las cuales se vuelve a descomponer (nivel 2…), hasta que todas las acciones se pueden escribir directamente en el lenguaje. Cada nivel dice **qué** se hace; el nivel siguiente dice **cómo**."
      ]
     }
    ]
   },
   {
    "t": "p",
    "x": [
     "Exemple de la vida diària: «preparar el sopar» (nivell 0) es divideix en «fer l'amanida», «coure la pasta» i «parar taula» (nivell 1); «coure la pasta» es divideix en «bullir l'aigua», «tirar la pasta», «esperar 10 minuts» i «escórrer» (nivell 2). Ningú no comença a cuinar pensant en totes les accions alhora.",
     "Ejemplo de la vida diaria: «preparar la cena» (nivel 0) se divide en «hacer la ensalada», «cocer la pasta» y «poner la mesa» (nivel 1); «cocer la pasta» se divide en «hervir el agua», «echar la pasta», «esperar 10 minutos» y «escurrir» (nivel 2). Nadie empieza a cocinar pensando en todas las acciones a la vez."
    ]
   },
   {
    "t": "table",
    "head": [
     "Regla",
     [
      "Per què",
      "Por qué"
     ]
    ],
    "rows": [
     [
      [
       "Cada nivell ha de ser **correcte** per si sol, encara que tingui accions sense detallar.",
       "Cada nivel tiene que ser **correcto** por sí solo, aunque tenga acciones sin detallar."
      ],
      [
       "Si el nivell 1 està malament, refinar-lo no l'arreglarà.",
       "Si el nivel 1 está mal, refinarlo no lo arreglará."
      ]
     ],
     [
      [
       "Es refina **una acció cada vegada**, sense tocar la resta.",
       "Se refina **una acción cada vez**, sin tocar el resto."
      ],
      [
       "Així cada canvi és petit i fàcil de comprovar.",
       "Así cada cambio es pequeño y fácil de comprobar."
      ]
     ],
     [
      [
       "Es para de refinar quan l'acció és una **instrucció** (una assignació, una lectura, una estructura senzilla).",
       "Se deja de refinar cuando la acción es una **instrucción** (una asignación, una lectura, una estructura sencilla)."
      ],
      [
       "Més detall no aporta res.",
       "Más detalle no aporta nada."
      ]
     ],
     [
      [
       "Les accions han de ser tan **independents** com es pugui: cadascuna amb les seves dades d'entrada i el seu resultat.",
       "Las acciones tienen que ser tan **independientes** como sea posible: cada una con sus datos de entrada y su resultado."
      ],
      [
       "Es poden provar per separat i, més endavant, convertir-les en funcions.",
       "Se pueden probar por separado y, más adelante, convertirlas en funciones."
      ]
     ]
    ]
   }
  ],
  "s6-2": [
   {
    "t": "note",
    "title": [
     "Enunciat",
     "Enunciado"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un nombre és **perfecte** quan és igual a la suma dels seus divisors, excepte ell mateix. Per exemple, 6 és perfecte perquè 6 = 1 + 2 + 3. Dissenyeu un algorisme que llisti tots els nombres perfectes menors de 100.",
       "Un número es **perfecto** cuando es igual a la suma de sus divisores, excepto él mismo. Por ejemplo, 6 es perfecto porque 6 = 1 + 2 + 3. Diseñad un algoritmo que liste todos los números perfectos menores que 100."
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "Nivell 0: el problema en una frase",
     "Nivel 0: el problema en una frase"
    ]
   },
   {
    "t": "code",
    "lang": "ps",
    "props": {
     "nonum": true
    },
    "src": [
     "Llistar els nombres perfectes menors que LIMIT        (LIMIT = 100)",
     "Listar los números perfectos menores que LIMIT        (LIMIT = 100)"
    ]
   },
   {
    "t": "p",
    "x": [
     "Ja hem pres una decisió: el 100 es diu `LIMIT`. Així el programa serveix per a qualsevol límit i, per provar-lo, podem fer servir un límit petit.",
     "Ya hemos tomado una decisión: el 100 se llama `LIMIT`. Así el programa sirve para cualquier límite y, para probarlo, podemos usar un límite pequeño."
    ]
   },
   {
    "t": "h",
    "x": [
     "Nivell 1: recórrer els candidats",
     "Nivel 1: recorrer los candidatos"
    ]
   },
   {
    "t": "p",
    "x": [
     "Com es «llisten els perfectes»? Provant cada nombre X de l'1 fins a LIMIT − 1 i escrivint els que ho són. Això és un recorregut:",
     "¿Cómo se «listan los perfectos»? Probando cada número X desde 1 hasta LIMIT − 1 y escribiendo los que lo son. Esto es un recorrido:"
    ]
   },
   {
    "t": "cols",
    "cols": [
     [
      {
       "t": "code",
       "lang": "ps",
       "props": {
        "title": [
         "Pseudocodi, nivell 1",
         "Pseudocódigo, nivel 1"
        ],
        "nonum": true
       },
       "src": [
        "X ← 1\nMENTRE X < LIMIT FER\n    Decidir si X és perfecte\n    SI X és perfecte LLAVORS\n        Escriure X\n    FI_SI\n    X ← X + 1\nFI_MENTRE",
        "X ← 1\nMENTRE X < LIMIT FER\n    Decidir si X es perfecto\n    SI X es perfecto LLAVORS\n        Escriure X\n    FI_SI\n    X ← X + 1\nFI_MENTRE"
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "props": {
        "title": [
         "C++, nivell 1",
         "C++, nivel 1"
        ],
        "nonum": true
       },
       "src": [
        "int X = 1;\nwhile (X < LIMIT) {\n    // Decidir si X és perfecte\n    // Si ho és, escriure X\n    X++;\n}",
        "int X = 1;\nwhile (X < LIMIT) {\n    // Decidir si X es perfecto\n    // Si lo es, escribir X\n    X++;\n}"
       ]
      }
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Aquest nivell ja es pot comprovar: si en lloc de «decidir» escrivim tots els X, hauríem de veure 1, 2, …, LIMIT − 1. L'acció «Decidir si X és perfecte» encara no és una instrucció: cal refinar-la.",
     "Este nivel ya se puede comprobar: si en lugar de «decidir» escribimos todos los X, deberíamos ver 1, 2, …, LIMIT − 1. La acción «Decidir si X es perfecto» todavía no es una instrucción: hay que refinarla."
    ]
   },
   {
    "t": "h",
    "x": [
     "Nivell 2: decidir si X és perfecte",
     "Nivel 2: decidir si X es perfecto"
    ]
   },
   {
    "t": "p",
    "x": [
     "Segons la definició, cal la suma dels divisors de X. Si fem una suma `SD` amb **tots** els divisors de X (de l'1 a X, el mateix X inclòs), llavors els divisors «excepte ell mateix» sumen `SD − X`:",
     "Según la definición, hace falta la suma de los divisores de X. Si hacemos una suma `SD` con **todos** los divisores de X (de 1 a X, incluido el propio X), entonces los divisores «excepto él mismo» suman `SD − X`:"
    ]
   },
   {
    "t": "cols",
    "cols": [
     [
      {
       "t": "code",
       "lang": "ps",
       "props": {
        "title": [
         "Pseudocodi, nivell 2",
         "Pseudocódigo, nivel 2"
        ],
        "nonum": true
       },
       "src": [
        "Calcular SD, la suma dels divisors de X\nSI SD - X = X LLAVORS\n    Escriure X\nFI_SI",
        "Calcular SD, la suma de los divisores de X\nSI SD - X = X LLAVORS\n    Escriure X\nFI_SI"
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "props": {
        "title": [
         "C++, nivell 2",
         "C++, nivel 2"
        ],
        "nonum": true
       },
       "src": [
        "// Calcular SD, la suma dels divisors de X\nif (SD - X == X) {\n    cout << X << \" \";\n}",
        "// Calcular SD, la suma de los divisores de X\nif (SD - X == X) {\n    cout << X << \" \";\n}"
       ]
      }
     ]
    ]
   },
   {
    "t": "h",
    "x": [
     "Nivell 3: calcular la suma dels divisors",
     "Nivel 3: calcular la suma de los divisores"
    ]
   },
   {
    "t": "p",
    "x": [
     "Un nombre P és divisor de X si `X % P == 0`. Sabem exactament quins candidats cal provar (de l'1 a X), de manera que és un `DES_DE` / `for` amb un acumulador:",
     "Un número P es divisor de X si `X % P == 0`. Sabemos exactamente qué candidatos hay que probar (de 1 a X), de manera que es un `DES_DE` / `for` con un acumulador:"
    ]
   },
   {
    "t": "cols",
    "cols": [
     [
      {
       "t": "code",
       "lang": "ps",
       "props": {
        "title": [
         "Pseudocodi, nivell 3",
         "Pseudocódigo, nivel 3"
        ],
        "nonum": true
       },
       "src": "SD ← 0\nDES_DE P ← 1 FINS X FER\n    SI X |R P = 0 LLAVORS\n        SD ← SD + P\n    FI_SI\nFI_DES_DE"
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "props": {
        "title": [
         "C++, nivell 3",
         "C++, nivel 3"
        ],
        "nonum": true
       },
       "src": "int SD = 0;\nfor (int P = 1; P <= X; P++) {\n    if (X % P == 0) {\n        SD = SD + P;\n    }\n}"
      }
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Ara totes les accions són instruccions: el refinament s'ha acabat. L'arbre resumeix el procés:",
     "Ahora todas las acciones son instrucciones: el refinamiento ha terminado. El árbol resume el proceso:"
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:700px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 880 330\" role=\"img\" aria-label=\"Arbre de refinaments dels nombres perfectes, del nivell 0 al nivell 3\" role=\"img\">\n<text class=\"ds\" x=\"10\" y=\"34\" dominant-baseline=\"central\">Nivell 0</text><text class=\"ds\" x=\"10\" y=\"120\" dominant-baseline=\"central\">Nivell 1</text><text class=\"ds\" x=\"10\" y=\"206\" dominant-baseline=\"central\">Nivell 2</text><text class=\"ds\" x=\"10\" y=\"292\" dominant-baseline=\"central\">Nivell 3</text>\n<rect class=\"bxa\" x=\"320\" y=\"14\" width=\"300\" height=\"40\" rx=\"6\"></rect><text class=\"dt db\" x=\"470\" y=\"34\" text-anchor=\"middle\" dominant-baseline=\"central\">Llistar els perfectes &lt; LIMIT</text>\n<path class=\"ln\" d=\"M470 54 V77 H205 V98\"></path><path class=\"ln\" d=\"M470 77 V98\"></path><path class=\"ln\" d=\"M470 77 H740 V98\"></path>\n<rect class=\"bxo\" x=\"90\" y=\"100\" width=\"230\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"205\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">Recórrer X = 1 … LIMIT − 1</text>\n<rect class=\"bxq\" x=\"355\" y=\"100\" width=\"230\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"470\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">Decidir si X és perfecte</text>\n<rect class=\"bxo\" x=\"620\" y=\"100\" width=\"240\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"740\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">Si ho és, escriure X</text>\n<path class=\"ln\" d=\"M470 140 V163 H380 V184\"></path><path class=\"ln\" d=\"M470 163 H655 V184\"></path>\n<rect class=\"bxq\" x=\"250\" y=\"186\" width=\"260\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"380\" y=\"206\" text-anchor=\"middle\" dominant-baseline=\"central\">Calcular SD (divisors de 1 a X)</text>\n<rect class=\"bxo\" x=\"545\" y=\"186\" width=\"220\" height=\"40\" rx=\"6\"></rect><text class=\"dm\" x=\"655\" y=\"206\" text-anchor=\"middle\" dominant-baseline=\"central\">SD - X == X ?</text>\n<path class=\"ln\" d=\"M380 226 V270\"></path>\n<rect class=\"bxo\" x=\"170\" y=\"272\" width=\"420\" height=\"40\" rx=\"6\"></rect><text class=\"dm\" x=\"380\" y=\"292\" text-anchor=\"middle\" dominant-baseline=\"central\">for P = 1 … X: si X % P == 0, SD += P</text>\n<rect class=\"bxq\" x=\"660\" y=\"268\" width=\"18\" height=\"14\" rx=\"3\"></rect><text class=\"ds\" x=\"686\" y=\"275\" dominant-baseline=\"central\">cal refinar-la</text>\n<rect class=\"bxo\" x=\"660\" y=\"292\" width=\"18\" height=\"14\" rx=\"3\"></rect><text class=\"ds\" x=\"686\" y=\"299\" dominant-baseline=\"central\">ja és codi</text>\n</svg></div>\n<figcaption>Cada node blau es descompon en els de sota; els verds ja són instruccions. El codi final és la unió de totes les fulles, cadascuna al lloc del seu pare.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:700px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 880 330\" role=\"img\" aria-label=\"Árbol de refinamientos de los números perfectos, del nivel 0 al nivel 3\" role=\"img\">\n<text class=\"ds\" x=\"10\" y=\"34\" dominant-baseline=\"central\">Nivel 0</text><text class=\"ds\" x=\"10\" y=\"120\" dominant-baseline=\"central\">Nivel 1</text><text class=\"ds\" x=\"10\" y=\"206\" dominant-baseline=\"central\">Nivel 2</text><text class=\"ds\" x=\"10\" y=\"292\" dominant-baseline=\"central\">Nivel 3</text>\n<rect class=\"bxa\" x=\"320\" y=\"14\" width=\"300\" height=\"40\" rx=\"6\"></rect><text class=\"dt db\" x=\"470\" y=\"34\" text-anchor=\"middle\" dominant-baseline=\"central\">Listar los perfectos &lt; LIMIT</text>\n<path class=\"ln\" d=\"M470 54 V77 H205 V98\"></path><path class=\"ln\" d=\"M470 77 V98\"></path><path class=\"ln\" d=\"M470 77 H740 V98\"></path>\n<rect class=\"bxo\" x=\"90\" y=\"100\" width=\"230\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"205\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">Recorrer X = 1 … LIMIT − 1</text>\n<rect class=\"bxq\" x=\"355\" y=\"100\" width=\"230\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"470\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">Decidir si X es perfecto</text>\n<rect class=\"bxo\" x=\"620\" y=\"100\" width=\"240\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"740\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">Si lo es, escribir X</text>\n<path class=\"ln\" d=\"M470 140 V163 H380 V184\"></path><path class=\"ln\" d=\"M470 163 H655 V184\"></path>\n<rect class=\"bxq\" x=\"250\" y=\"186\" width=\"260\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"380\" y=\"206\" text-anchor=\"middle\" dominant-baseline=\"central\">Calcular SD (divisores de 1 a X)</text>\n<rect class=\"bxo\" x=\"545\" y=\"186\" width=\"220\" height=\"40\" rx=\"6\"></rect><text class=\"dm\" x=\"655\" y=\"206\" text-anchor=\"middle\" dominant-baseline=\"central\">SD - X == X ?</text>\n<path class=\"ln\" d=\"M380 226 V270\"></path>\n<rect class=\"bxo\" x=\"170\" y=\"272\" width=\"420\" height=\"40\" rx=\"6\"></rect><text class=\"dm\" x=\"380\" y=\"292\" text-anchor=\"middle\" dominant-baseline=\"central\">for P = 1 … X: si X % P == 0, SD += P</text>\n<rect class=\"bxq\" x=\"660\" y=\"268\" width=\"18\" height=\"14\" rx=\"3\"></rect><text class=\"ds\" x=\"686\" y=\"275\" dominant-baseline=\"central\">hay que refinarla</text>\n<rect class=\"bxo\" x=\"660\" y=\"292\" width=\"18\" height=\"14\" rx=\"3\"></rect><text class=\"ds\" x=\"686\" y=\"299\" dominant-baseline=\"central\">ya es código</text>\n</svg></div>\n<figcaption>Cada nodo azul se descompone en los de debajo; los verdes ya son instrucciones. El código final es la unión de todas las hojas, cada una en el lugar de su padre.</figcaption>\n</figure>"
    ]
   },
   {
    "t": "h",
    "x": [
     "Comprovar a mà",
     "Comprobar a mano"
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Dos candidats: X = 6 (perfecte) i X = 8 (no ho és).</caption>\n<thead><tr><th class=\"c\">X</th><th>Divisors (P amb X % P == 0)</th><th class=\"c\">SD</th><th class=\"c\">SD − X</th><th class=\"c\">Perfecte?</th></tr></thead>\n<tbody>\n<tr><td class=\"c\">6</td><td>1, 2, 3, 6</td><td class=\"c\">12</td><td class=\"c hl\">6</td><td class=\"c ip-v\">sí (6 = 6)</td></tr>\n<tr><td class=\"c\">8</td><td>1, 2, 4, 8</td><td class=\"c\">15</td><td class=\"c hl\">7</td><td class=\"c ip-f\">no (7 ≠ 8)</td></tr>\n<tr><td class=\"c\">28</td><td>1, 2, 4, 7, 14, 28</td><td class=\"c\">56</td><td class=\"c hl\">28</td><td class=\"c ip-v\">sí</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Dos candidatos: X = 6 (perfecto) y X = 8 (no lo es).</caption>\n<thead><tr><th class=\"c\">X</th><th>Divisores (P con X % P == 0)</th><th class=\"c\">SD</th><th class=\"c\">SD − X</th><th class=\"c\">¿Perfecto?</th></tr></thead>\n<tbody>\n<tr><td class=\"c\">6</td><td>1, 2, 3, 6</td><td class=\"c\">12</td><td class=\"c hl\">6</td><td class=\"c ip-v\">sí (6 = 6)</td></tr>\n<tr><td class=\"c\">8</td><td>1, 2, 4, 8</td><td class=\"c\">15</td><td class=\"c hl\">7</td><td class=\"c ip-f\">no (7 ≠ 8)</td></tr>\n<tr><td class=\"c\">28</td><td>1, 2, 4, 7, 14, 28</td><td class=\"c\">56</td><td class=\"c hl\">28</td><td class=\"c ip-v\">sí</td></tr>\n</tbody>\n</table></div>"
    ]
   },
   {
    "t": "h",
    "x": [
     "El programa complet",
     "El programa completo"
    ]
   },
   {
    "t": "p",
    "x": [
     "Muntem els nivells: el nivell 3 substitueix el comentari «Calcular SD» del nivell 2, i el nivell 2 substitueix «Decidir…» del nivell 1. Per poder provar-lo amb diferents límits, `LIMIT` es llegeix de l'entrada (a l'enunciat original és la constant 100). Amb 30, la traça és curta; amb 500, apareix el 496.",
     "Montamos los niveles: el nivel 3 sustituye el comentario «Calcular SD» del nivel 2, y el nivel 2 sustituye «Decidir…» del nivel 1. Para poder probarlo con diferentes límites, `LIMIT` se lee de la entrada (en el enunciado original es la constante 100). Con 30, la traza es corta; con 500, aparece el 496."
    ]
   },
   {
    "t": "cols",
    "cols": [
     [
      {
       "t": "code",
       "lang": "ps",
       "props": {
        "run": true,
        "trace": true,
        "in": "30"
       },
       "src": [
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      LIMIT         Natural   Límit superior (exclòs)\n          X             Natural   Candidat\n          P             Natural   Possible divisor de X\n          SD            Natural   Suma dels divisors de X\n   S      (X)                     Els X perfectes\n\nINICI_SEQÜÈNCIA\n    Llegir LIMIT\n    X ← 1\n    MENTRE X < LIMIT FER\n        SD ← 0\n        DES_DE P ← 1 FINS X FER\n            SI X |R P = 0 LLAVORS\n                SD ← SD + P\n            FI_SI\n        FI_DES_DE\n        SI SD - X = X LLAVORS\n            Escriure X\n        FI_SI\n        X ← X + 1\n    FI_MENTRE\nFI_SEQÜÈNCIA",
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      LIMIT         Natural   Límite superior (excluido)\n          X             Natural   Candidato\n          P             Natural   Posible divisor de X\n          SD            Natural   Suma de los divisores de X\n   S      (X)                     Los X perfectos\n\nINICI_SEQÜÈNCIA\n    Llegir LIMIT\n    X ← 1\n    MENTRE X < LIMIT FER\n        SD ← 0\n        DES_DE P ← 1 FINS X FER\n            SI X |R P = 0 LLAVORS\n                SD ← SD + P\n            FI_SI\n        FI_DES_DE\n        SI SD - X = X LLAVORS\n            Escriure X\n        FI_SI\n        X ← X + 1\n    FI_MENTRE\nFI_SEQÜÈNCIA"
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "props": {
        "title": "perfectes.cpp",
        "run": true,
        "trace": true,
        "in": "30"
       },
       "src": [
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int LIMIT;\n    cin >> LIMIT;                          // nivell 0: LIMIT = 100\n    int X = 1;\n    while (X < LIMIT) {                    // nivell 1: recórrer els candidats\n        int SD = 0;                        // nivell 3: suma dels divisors\n        for (int P = 1; P <= X; P++) {\n            if (X % P == 0) {\n                SD = SD + P;\n            }\n        }\n        if (SD - X == X) {                 // nivell 2: decidir i escriure\n            cout << X << \" \";\n        }\n        X++;\n    }\n    cout << endl;\n    return 0;\n}",
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int LIMIT;\n    cin >> LIMIT;                          // nivel 0: LIMIT = 100\n    int X = 1;\n    while (X < LIMIT) {                    // nivel 1: recorrer los candidatos\n        int SD = 0;                        // nivel 3: suma de los divisores\n        for (int P = 1; P <= X; P++) {\n            if (X % P == 0) {\n                SD = SD + P;\n            }\n        }\n        if (SD - X == X) {                 // nivel 2: decidir y escribir\n            cout << X << \" \";\n        }\n        X++;\n    }\n    cout << endl;\n    return 0;\n}"
       ]
      }
     ]
    ]
   },
   {
    "t": "warn",
    "title": [
     "On s'inicialitza SD?",
     "¿Dónde se inicializa SD?"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "`SD = 0` va **dins** del `while`, just abans del `for`: cada candidat X necessita la seva pròpia suma. Si s'inicialitza una sola vegada fora del bucle, les sumes dels diferents X s'acumulen i el resultat és fals: amb LIMIT = 100 el programa escriu només un 2, que no és perfecte. És l'error més típic dels bucles niuats: pregunteu-vos «aquesta variable és d'**un** X o de **tots**?».",
       "`SD = 0` va **dentro** del `while`, justo antes del `for`: cada candidato X necesita su propia suma. Si se inicializa una sola vez fuera del bucle, las sumas de los diferentes X se acumulan y el resultado es falso: con LIMIT = 100 el programa escribe solo un 2, que no es perfecto. Es el error más típico de los bucles anidados: preguntaos «¿esta variable es de **un** X o de **todos**?»."
      ]
     }
    ]
   }
  ],
  "s6-3": [
   {
    "t": "p",
    "x": [
     "Un avantatge del disseny descendent és que cada acció es pot provar sola. Abans de muntar el programa, podem comprovar el nivell 3 amb un programa mínim que només calcula la suma dels divisors d'un X:",
     "Una ventaja del diseño descendente es que cada acción se puede probar sola. Antes de montar el programa, podemos comprobar el nivel 3 con un programa mínimo que solo calcula la suma de los divisores de un X:"
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int X;\n    cin >> X;\n    int SD = 0;\n    for (int P = 1; P <= X; P++) {\n        if (X % P == 0) {\n            SD = SD + P;\n        }\n    }\n    cout << \"Suma dels divisors de \" << X << \": \" << SD << endl;\n    return 0;\n}",
    "props": {
     "title": "prova_suma_divisors.cpp",
     "run": true,
     "trace": true,
     "in": "28"
    }
   },
   {
    "t": "p",
    "x": [
     "Si aquesta peça dona 12 per a 6, 15 per a 8 i 56 per a 28, ja la podem encaixar al programa gran amb confiança. La setmana vinent, aquesta peça es convertirà en una **funció**, `sumaDelsDivisors(X)`, i el `main` quedarà tan llegible com el nivell 1.",
     "Si esta pieza da 12 para 6, 15 para 8 y 56 para 28, ya la podemos encajar en el programa grande con confianza. La semana que viene, esta pieza se convertirá en una **función**, `sumaDelsDivisors(X)`, y el `main` quedará tan legible como el nivel 1."
    ]
   }
  ],
  "s6-4": [
   {
    "t": "p",
    "x": [
     "Com que les parts són independents, es pot millorar una sense tocar les altres. Cap divisor de X, llevat del mateix X, és més gran que X / 2. Si el `for` arriba només fins a X / 2, `SD` ja no inclou X i la comparació passa a ser `SD == X`. El bucle interior fa la meitat de voltes:",
     "Como las partes son independientes, se puede mejorar una sin tocar las otras. Ningún divisor de X, salvo el propio X, es mayor que X / 2. Si el `for` llega solo hasta X / 2, `SD` ya no incluye X y la comparación pasa a ser `SD == X`. El bucle interior da la mitad de vueltas:"
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "comptar_voltes.cpp",
     "run": true,
     "in": "1000"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int LIMIT;\n    cin >> LIMIT;\n    long long voltesA = 0, voltesB = 0;\n    for (int X = 1; X < LIMIT; X++) {\n        for (int P = 1; P <= X; P++) voltesA++;       // versió fins a X\n        for (int P = 1; P <= X / 2; P++) voltesB++;   // versió fins a X / 2\n    }\n    cout << \"Voltes fins a X:     \" << voltesA << endl;\n    cout << \"Voltes fins a X / 2: \" << voltesB << endl;\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int LIMIT;\n    cin >> LIMIT;\n    long long voltesA = 0, voltesB = 0;\n    for (int X = 1; X < LIMIT; X++) {\n        for (int P = 1; P <= X; P++) voltesA++;       // versión hasta X\n        for (int P = 1; P <= X / 2; P++) voltesB++;   // versión hasta X / 2\n    }\n    cout << \"Voltes fins a X:     \" << voltesA << endl;\n    cout << \"Voltes fins a X / 2: \" << voltesB << endl;\n    return 0;\n}"
    ]
   },
   {
    "t": "p",
    "x": [
     "Només ha canviat el refinament del nivell 3 i la comparació del nivell 2; el nivell 1 és idèntic. Aquesta és la gràcia del disseny descendent: els canvis queden **localitzats**.",
     "Solo han cambiado el refinamiento del nivel 3 y la comparación del nivel 2; el nivel 1 es idéntico. Esta es la gracia del diseño descendente: los cambios quedan **localizados**."
    ]
   }
  ],
  "s6-5": [
   {
    "t": "p",
    "x": [
     "Feu el mateix procés per a «llistar els nombres primers menors que N». Us donem els dos primers nivells; refineu el que falta i programeu-lo (és l'exercici **La llista de primers**):",
     "Haced el mismo proceso para «listar los números primos menores que N». Os damos los dos primeros niveles; refinad lo que falta y programadlo (es el ejercicio **La llista de primers**):"
    ]
   },
   {
    "t": "cols",
    "cols": [
     [
      {
       "t": "code",
       "lang": "ps",
       "props": {
        "title": [
         "Nivell 0",
         "Nivel 0"
        ],
        "nonum": true
       },
       "src": [
        "Llistar els primers menors que N",
        "Listar los primos menores que N"
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "ps",
       "props": {
        "title": [
         "Nivell 1",
         "Nivel 1"
        ],
        "nonum": true
       },
       "src": [
        "DES_DE X ← 2 FINS N - 1 FER\n    Decidir si X és primer\n    SI X és primer LLAVORS\n        Escriure X\n    FI_SI\nFI_DES_DE",
        "DES_DE X ← 2 FINS N - 1 FER\n    Decidir si X es primo\n    SI X es primo LLAVORS\n        Escriure X\n    FI_SI\nFI_DES_DE"
       ]
      }
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Pista per al nivell 2: «Decidir si X és primer» és la cerca amb bandera de la setmana 5 (buscar un divisor entre 2 i X − 1).",
     "Pista para el nivel 2: «Decidir si X es primo» es la búsqueda con bandera de la semana 5 (buscar un divisor entre 2 y X − 1)."
    ]
   }
  ],
  "s6-6": [
   {
    "t": "lab",
    "id": "exlist",
    "props": {
     "wk": 6
    }
   }
  ],
  "s6-7": [
   {
    "t": "check",
    "ex": {
     "id": "s6-7-q1",
     "qb": [
      {
       "t": "p",
       "x": [
        "En el disseny descendent, quan s'atura el refinament d'una acció?",
        "En el diseño descendente, ¿cuándo se detiene el refinamiento de una acción?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      [
       "Quan s'arriba al nivell 3",
       "Cuando se llega al nivel 3"
      ],
      [
       "Quan l'acció té menys de tres paraules",
       "Cuando la acción tiene menos de tres palabras"
      ],
      [
       "Quan l'acció ja es pot escriure directament com a instrucció del llenguatge",
       "Cuando la acción ya se puede escribir directamente como instrucción del lenguaje"
      ],
      [
       "Quan ja hi ha un bucle",
       "Cuando ya hay un bucle"
      ]
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "El nombre de nivells depèn del problema. Es refina fins que cada acció és una instrucció.",
        "El número de niveles depende del problema. Se refina hasta que cada acción es una instrucción."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s6-7-q2",
     "qb": [
      {
       "t": "p",
       "x": [
        "Al programa dels perfectes, què passa si `int SD = 0;` es posa abans del `while` en lloc de dins?",
        "En el programa de los perfectos, ¿qué pasa si `int SD = 0;` se pone antes del `while` en lugar de dentro?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "Funciona igual",
      [
       "Les sumes s'acumulen d'un candidat a l'altre i el resultat és incorrecte",
       "Las sumas se acumulan de un candidato al otro y el resultado es incorrecto"
      ],
      [
       "Error de compilació",
       "Error de compilación"
      ],
      [
       "Surten tots els nombres",
       "Salen todos los números"
      ]
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "SD és la suma dels divisors d'**un** X: s'ha de reiniciar per a cada candidat. Fora del bucle, quan s'arriba a X = 6 ja hi ha sumats els divisors de 1, 2, 3, 4 i 5. Amb LIMIT = 100 escriu només un 2, que no és perfecte.",
        "SD es la suma de los divisores de **un** X: se tiene que reiniciar para cada candidato. Fuera del bucle, cuando se llega a X = 6 ya están sumados los divisores de 1, 2, 3, 4 y 5. Con LIMIT = 100 escribe solo un 2, que no es perfecto."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s6-7-q3",
     "qb": [
      {
       "t": "p",
       "x": [
        "Si el bucle dels divisors va de 1 a X / 2, quina condició indica que X és perfecte?",
        "Si el bucle de los divisores va de 1 a X / 2, ¿qué condición indica que X es perfecto?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "`SD == X`",
      "`SD - X == X`",
      "`SD == 2 * X`",
      "`SD / 2 == X`"
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "Fins a X / 2, el mateix X ja no se suma (llevat del cas X = 1). SD és directament la suma dels divisors propis.",
        "Hasta X / 2, el propio X ya no se suma (salvo en el caso X = 1). SD es directamente la suma de los divisores propios."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s6-7-q4",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quin és el principal avantatge de provar cada acció per separat?",
        "¿Cuál es la principal ventaja de probar cada acción por separado?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      [
       "El programa és més ràpid",
       "El programa es más rápido"
      ],
      [
       "Es necessiten menys variables",
       "Se necesitan menos variables"
      ],
      [
       "S'evita fer servir bucles niuats",
       "Se evita usar bucles anidados"
      ],
      [
       "Si hi ha un error, se sap en quina part és",
       "Si hay un error, se sabe en qué parte está"
      ]
     ],
     "answer": 3,
     "sol": [
      {
       "t": "p",
       "x": [
        "Una peça provada es pot encaixar amb confiança; si el programa complet falla, l'error és en la combinació o en una peça nova.",
        "Una pieza probada se puede encajar con confianza; si el programa completo falla, el error está en la combinación o en una pieza nueva."
       ]
      }
     ]
    }
   }
  ],
  "s6-8": [
   {
    "t": "summary",
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Nivell 0: el problema en una frase. Cada nivell següent diu com es fa una acció de l'anterior.",
        "Nivel 0: el problema en una frase. Cada nivel siguiente dice cómo se hace una acción del anterior."
       ],
       [
        "Es refina una acció cada vegada i es para quan totes són instruccions.",
        "Se refina una acción cada vez y se para cuando todas son instrucciones."
       ],
       [
        "Variables que pertanyen a un sol element (com `SD` per a cada X) s'inicialitzen dins del bucle exterior.",
        "Las variables que pertenecen a un solo elemento (como `SD` para cada X) se inicializan dentro del bucle exterior."
       ],
       [
        "Les accions independents es poden provar soles i millorar sense tocar la resta.",
        "Las acciones independientes se pueden probar solas y mejorar sin tocar el resto."
       ],
       [
        "Cada acció refinada és una candidata a ser una funció: és el tema de la setmana 7.",
        "Cada acción refinada es una candidata a ser una función: es el tema de la semana 7."
       ]
      ]
     }
    ]
   }
  ]
 },
 "examEnd": []
};
