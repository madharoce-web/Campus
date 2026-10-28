// Generat per tools/kit-import/prog.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Esquelet del programa, variables, cin/cout, divisió entera i residu. Exemple resolt: la Fàbrica de Pilotes.",
    "Esqueleto del programa, variables, cin/cout, división entera y resto. Ejemplo resuelto: la Fábrica de Pelotas.",
    "Program skeleton, variables, cin/cout, integer division and remainder. Worked example: the Ball Factory."
   ]
  },
  {
   "t": "list",
   "items": [
    [
     "**Sessions:** Dl. 14/09 i dc. 16/09",
     "**Sesiones:** Lu. 14/09 y mi. 16/09",
     "**Sessions:** Mon 14/09 and Wed 16/09"
    ],
    [
     "**Teoria associada:** Tema 1 i Tema 2.1",
     "**Teoría asociada:** Tema 1 y Tema 2.1",
     "**Related theory:** Unit 1 and Unit 2.1"
    ]
   ]
  },
  {
   "t": "p",
   "x": [
    "Primer contacte amb C++. L'objectiu de la setmana és agafar un algorisme senzill escrit en pseudocodi i convertir-lo, línia a línia, en un programa que compila, llegeix dades i escriu el resultat **exactament** com demana l'enunciat.",
    "Primer contacto con C++. El objetivo de la semana es tomar un algoritmo sencillo escrito en pseudocódigo y convertirlo, línea a línea, en un programa que compila, lee datos y escribe el resultado **exactamente** como pide el enunciado.",
    "First contact with C++. The goal of the week is to take a simple algorithm written in pseudocode and turn it, line by line, into a program that compiles, reads data and writes the result **exactly** as the statement requires."
   ]
  },
  {
   "t": "summary",
   "title": [
    "En acabar aquesta pràctica sabràs",
    "Al terminar esta práctica sabrás",
    "By the end of this lab you will be able to"
   ],
   "blocks": [
    {
     "t": "list",
     "items": [
      [
       "Escriure l'**esquelet** de qualsevol programa en C++ i saber per a què serveix cada línia.",
       "Escribir el **esqueleto** de cualquier programa en C++ y saber para qué sirve cada línea.",
       "Write the **skeleton** of any C++ program and know what each line is for."
      ],
      [
       "Declarar variables dels tipus `int`, `double`, `char` i `string`.",
       "Declarar variables de los tipos `int`, `double`, `char` y `string`.",
       "Declare variables of the types `int`, `double`, `char` and `string`."
      ],
      [
       "Llegir amb `cin` i escriure amb `cout` respectant el format exacte.",
       "Leer con `cin` y escribir con `cout` respetando el formato exacto.",
       "Read with `cin` and write with `cout` respecting the exact format."
      ],
      [
       "Fer servir la **divisió entera** `/` i el **residu** `%`, i evitar la trampa de la divisió entera en les mitjanes.",
       "Usar la **división entera** `/` y el **resto** `%`, y evitar la trampa de la división entera en las medias.",
       "Use **integer division** `/` and the **remainder** `%`, and avoid the integer-division trap in averages."
      ]
     ]
    }
   ]
  }
 ],
 "sections": {
  "s2-1": [
   {
    "t": "p",
    "x": [
     "A teoria heu vist què és un algorisme, com s'escriu en pseudocodi (`INICI_SEQÜÈNCIA`, `Llegir`, `Escriure`, `←`) i com es descriu l'ENTORN. Al laboratori fem **el mateix algorisme**, però en C++. Cada peça té el seu equivalent:",
     "En teoría habéis visto qué es un algoritmo, cómo se escribe en pseudocódigo (`INICI_SEQÜÈNCIA`, `Llegir`, `Escriure`, `←`) y cómo se describe el ENTORN. En el laboratorio hacemos **el mismo algoritmo**, pero en C++. Cada pieza tiene su equivalente:",
     "In theory you have seen what an algorithm is, how it is written in pseudocode (`INICI_SEQÜÈNCIA`, `Llegir`, `Escriure`, `←`) and how the ENTORN is described. In the lab we do **the same algorithm**, but in C++. Each piece has its equivalent:"
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-map\">\n<div class=\"ip-maph\">Pseudocodi</div><span></span><div class=\"ip-maph\">C++</div>\n<div>ENTORN … (E N1 Enter)</div><span>→</span><div>int N1;  (a dalt del main)</div>\n<div>INICI_SEQÜÈNCIA … FI_SEQÜÈNCIA</div><span>→</span><div>int main() { … return 0; }</div>\n<div>Llegir X</div><span>→</span><div>cin >> X;</div>\n<div>Escriure \"Text \", X</div><span>→</span><div>cout << \"Text \" << X << endl;</div>\n<div>X ← expressió</div><span>→</span><div>X = expressió;</div>\n<div>a ‖ b   ·   a |R b</div><span>→</span><div>a / b   ·   a % b  (amb enters)</div>\n<div>a · b</div><span>→</span><div>a * b</div>\n</div>",
     "<div class=\"ip-map\">\n<div class=\"ip-maph\">Pseudocódigo</div><span></span><div class=\"ip-maph\">C++</div>\n<div>ENTORN … (E N1 Enter)</div><span>→</span><div>int N1;  (al principio del main)</div>\n<div>INICI_SEQÜÈNCIA … FI_SEQÜÈNCIA</div><span>→</span><div>int main() { … return 0; }</div>\n<div>Llegir X</div><span>→</span><div>cin >> X;</div>\n<div>Escriure \"Text \", X</div><span>→</span><div>cout << \"Text \" << X << endl;</div>\n<div>X ← expresión</div><span>→</span><div>X = expresión;</div>\n<div>a ‖ b   ·   a |R b</div><span>→</span><div>a / b   ·   a % b  (con enteros)</div>\n<div>a · b</div><span>→</span><div>a * b</div>\n</div>",
     "<div class=\"ip-map\">\n<div class=\"ip-maph\">Pseudocode</div><span></span><div class=\"ip-maph\">C++</div>\n<div>ENTORN … (E N1 Enter)</div><span>→</span><div>int N1;  (at the start of main)</div>\n<div>INICI_SEQÜÈNCIA … FI_SEQÜÈNCIA</div><span>→</span><div>int main() { … return 0; }</div>\n<div>Llegir X</div><span>→</span><div>cin >> X;</div>\n<div>Escriure \"Text \", X</div><span>→</span><div>cout << \"Text \" << X << endl;</div>\n<div>X ← expression</div><span>→</span><div>X = expression;</div>\n<div>a ‖ b   ·   a |R b</div><span>→</span><div>a / b   ·   a % b  (with integers)</div>\n<div>a · b</div><span>→</span><div>a * b</div>\n</div>"
    ],
    "mode": "explained"
   }
  ],
  "s2-2": [
   {
    "t": "p",
    "x": [
     "Tots els programes del curs tenen aquesta estructura mínima. Executeu-lo: és el programa més petit que escriu alguna cosa.",
     "Todos los programas del curso tienen esta estructura mínima. Ejecutadlo: es el programa más pequeño que escribe algo.",
     "All the programs in the course have this minimal structure. Run it: it is the smallest program that writes something."
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "hola.cpp",
     "run": true
    },
    "src": [
     "#include <iostream>      // llibreria d'entrada/sortida\nusing namespace std;\n\nint main() {\n    // el codi de l'algorisme va aquí dins\n    cout << \"Hola, BInfo!\" << endl;\n    return 0;\n}",
     "#include <iostream>      // librería de entrada/salida\nusing namespace std;\n\nint main() {\n    // el código del algoritmo va aquí dentro\n    cout << \"Hola, BInfo!\" << endl;\n    return 0;\n}",
     "#include <iostream>      // input/output library\nusing namespace std;\n\nint main() {\n    // the code of the algorithm goes in here\n    cout << \"Hola, BInfo!\" << endl;\n    return 0;\n}"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Línia",
      "Línea",
      "Line"
     ],
     [
      "Què fa",
      "Qué hace",
      "What it does"
     ],
     [
      "Si la traieu…",
      "Si la quitáis…",
      "If you remove it…"
     ]
    ],
    "rows": [
     [
      "`#include <iostream>`",
      [
       "Afegeix la llibreria que conté `cin`, `cout` i `endl`.",
       "Añade la librería que contiene `cin`, `cout` y `endl`.",
       "Adds the library that contains `cin`, `cout` and `endl`."
      ],
      [
       "Error: `cout` no està declarat.",
       "Error: `cout` no está declarado.",
       "Error: `cout` is not declared."
      ]
     ],
     [
      "`using namespace std;`",
      [
       "Permet escriure `cout` en lloc de `std::cout`.",
       "Permite escribir `cout` en lugar de `std::cout`.",
       "Lets you write `cout` instead of `std::cout`."
      ],
      [
       "Caldria escriure `std::` davant de cada `cin`, `cout`, `endl`.",
       "Habría que escribir `std::` delante de cada `cin`, `cout`, `endl`.",
       "You would have to write `std::` in front of every `cin`, `cout`, `endl`."
      ]
     ],
     [
      "`int main() {`",
      [
       "La **funció principal**: l'execució comença aquí. Equival a `INICI_SEQÜÈNCIA`.",
       "La **función principal**: la ejecución empieza aquí. Equivale a `INICI_SEQÜÈNCIA`.",
       "The **main function**: execution starts here. It is equivalent to `INICI_SEQÜÈNCIA`."
      ],
      [
       "No hi ha programa: error d'enllaçat.",
       "No hay programa: error de enlazado.",
       "There is no program: linker error."
      ]
     ],
     [
      "`return 0;`",
      [
       "Acaba el programa i diu al sistema que tot ha anat bé.",
       "Termina el programa y le dice al sistema que todo ha ido bien.",
       "Ends the program and tells the system everything went well."
      ],
      [
       "En el `main` és opcional, però el posem sempre.",
       "En el `main` es opcional, pero lo ponemos siempre.",
       "In `main` it is optional, but we always write it."
      ]
     ],
     [
      "`}`",
      [
       "Tanca el `main`. Equival a `FI_SEQÜÈNCIA`.",
       "Cierra el `main`. Equivale a `FI_SEQÜÈNCIA`.",
       "Closes `main`. It is equivalent to `FI_SEQÜÈNCIA`."
      ],
      [
       "Error: falta tancar un bloc.",
       "Error: falta cerrar un bloque.",
       "Error: a block is not closed."
      ]
     ]
    ]
   },
   {
    "t": "def",
    "title": [
     "Definició",
     "Definición",
     "Definition"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "El `main` és la funció principal del programa: l'execució comença aquí. Les instruccions s'executen en **seqüència**, de dalt a baix, exactament igual que entre `INICI_SEQÜÈNCIA` i `FI_SEQÜÈNCIA`. Cada instrucció acaba amb **punt i coma**.",
       "El `main` es la función principal del programa: la ejecución empieza aquí. Las instrucciones se ejecutan en **secuencia**, de arriba abajo, exactamente igual que entre `INICI_SEQÜÈNCIA` y `FI_SEQÜÈNCIA`. Cada instrucción termina con **punto y coma**.",
       "`main` is the program's main function: execution starts here. The instructions run in **sequence**, from top to bottom, exactly as between `INICI_SEQÜÈNCIA` and `FI_SEQÜÈNCIA`. Each instruction ends with a **semicolon**."
      ]
     }
    ]
   },
   {
    "t": "p",
    "x": [
     "Proveu ara d'esborrar el `;` d'una línia (botó **Edita**) i torneu a executar: el compilador diu quina línia ha fallat i no s'executa res. Llegir aquests missatges és part de la feina:",
     "Probad ahora a borrar el `;` de una línea (botón **Edita**) y volved a ejecutar: el compilador dice qué línea ha fallado y no se ejecuta nada. Leer estos mensajes es parte del trabajo:",
     "Now try deleting the `;` of a line (**Edit** button) and run it again: the compiler says which line failed and nothing runs. Reading these messages is part of the job:"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Missatge del compilador (resumit)",
      "Mensaje del compilador (resumido)",
      "Compiler message (summarised)"
     ],
     [
      "Què vol dir",
      "Qué quiere decir",
      "What it means"
     ]
    ],
    "rows": [
     [
      "`expected ';' after expression`",
      [
       "Falta un punt i coma al final de la línia indicada (o de l'anterior).",
       "Falta un punto y coma al final de la línea indicada (o de la anterior).",
       "A semicolon is missing at the end of the indicated line (or the previous one)."
      ]
     ],
     [
      "`use of undeclared identifier 'x'`",
      [
       "Feu servir una variable que no heu declarat, o l'heu escrit amb majúscules diferents (`Suma` ≠ `suma`).",
       "Usáis una variable que no habéis declarado, o la habéis escrito con mayúsculas distintas (`Suma` ≠ `suma`).",
       "You are using a variable you have not declared, or you wrote it with different capitalisation (`Suma` ≠ `suma`)."
      ]
     ],
     [
      "`invalid operands to binary expression`",
      [
       "Sovint és `cin << x` o `cout >> x`: les fletxes al revés.",
       "A menudo es `cin << x` o `cout >> x`: las flechas al revés.",
       "It is often `cin << x` or `cout >> x`: the arrows the wrong way round."
      ]
     ],
     [
      "`expected '}'`",
      [
       "Falta tancar una clau.",
       "Falta cerrar una llave.",
       "A brace is not closed."
      ]
     ]
    ]
   }
  ],
  "s2-3": [
   {
    "t": "table",
    "head": [
     "C++",
     [
      "Pseudocodi",
      "Pseudocódigo",
      "Pseudocode"
     ],
     [
      "Què guarda",
      "Qué guarda",
      "What it stores"
     ],
     [
      "Exemples de valors",
      "Ejemplos de valores",
      "Example values"
     ]
    ],
    "rows": [
     [
      "`int`",
      "Enter",
      [
       "Enters de −2.147.483.648 a 2.147.483.647",
       "Enteros de −2.147.483.648 a 2.147.483.647",
       "Integers from −2,147,483,648 to 2,147,483,647"
      ],
      "`0`, `-25`, `1370`"
     ],
     [
      "`double`",
      "Real",
      [
       "Reals amb decimals (el separador és el **punt**)",
       "Reales con decimales (el separador es el **punto**)",
       "Reals with decimals (the separator is the **point**)"
      ],
      "`4.25`, `-0.5`, `3.0`"
     ],
     [
      "`char`",
      "Caràcter",
      [
       "Un sol caràcter, entre cometes **simples**",
       "Un solo carácter, entre comillas **simples**",
       "A single character, in **single** quotes"
      ],
      "`'A'`, `'9'`, `'?'`"
     ],
     [
      "`string`",
      "Cadena",
      [
       "Un text, entre cometes **dobles**",
       "Un texto, entre comillas **dobles**",
       "A text, in **double** quotes"
      ],
      "`\"Andorra\"`"
     ],
     [
      "`bool`",
      "Lògic",
      "`true` o `false`",
      "`true`"
     ]
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "nonum": true
    },
    "src": [
     "int edat;              // declarem una variable entera (encara no té valor)\ndouble preu = 4.25;    // declaració amb valor inicial\nchar lletra = 'A';     // un caràcter, amb cometes simples\nint a, b, c;           // diverses variables del mateix tipus",
     "int edat;              // declaramos una variable entera (todavía no tiene valor)\ndouble preu = 4.25;    // declaración con valor inicial\nchar lletra = 'A';     // un carácter, con comillas simples\nint a, b, c;           // varias variables del mismo tipo",
     "int edat;              // we declare an integer variable (it has no value yet)\ndouble preu = 4.25;    // declaration with an initial value\nchar lletra = 'A';     // a character, in single quotes\nint a, b, c;           // several variables of the same type"
    ]
   },
   {
    "t": "warn",
    "title": [
     "Una variable declarada no val zero",
     "Una variable declarada no vale cero",
     "A declared variable is not zero"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "En C++, `int edat;` reserva memòria però no hi posa cap valor: hi ha «brossa». Si la feu servir abans d'assignar-li res, el resultat és imprevisible. Inicialitzeu sempre els comptadors i els acumuladors: `int suma = 0;`. A la traça, una variable sense valor apareix amb un **?**.",
       "En C++, `int edat;` reserva memoria pero no pone en ella ningún valor: hay «basura». Si la usáis antes de asignarle algo, el resultado es imprevisible. Inicializad siempre los contadores y los acumuladores: `int suma = 0;`. En la traza, una variable sin valor aparece con un **?**.",
       "In C++, `int edat;` reserves memory but puts no value in it: there is “garbage”. If you use it before assigning something, the result is unpredictable. Always initialise counters and accumulators: `int suma = 0;`. In the trace, a variable without a value appears as **?**."
      ]
     }
    ]
   },
   {
    "t": "p",
    "x": [
     "Noms de variables: lletres, xifres i `_`, sense començar per xifra, sense espais ni accents. C++ distingeix majúscules: `QNT` i `qnt` són dues variables diferents.",
     "Nombres de variables: letras, cifras y `_`, sin empezar por cifra, sin espacios ni acentos. C++ distingue mayúsculas: `QNT` y `qnt` son dos variables distintas.",
     "Variable names: letters, digits and `_`, not starting with a digit, without spaces or accents. C++ is case-sensitive: `QNT` and `qnt` are two different variables."
    ]
   }
  ],
  "s2-4": [
   {
    "t": "code",
    "lang": "cpp",
    "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x, y;\n    cin >> x;                              // Llegir x\n    cin >> y;                              // Llegir y\n    cout << \"Has entrat: \" << x << endl;   // Escriure \"Has entrat: \", x\n    cout << \"Suma: \" << x + y << endl;\n    return 0;\n}",
    "props": {
     "title": "entrada_sortida.cpp",
     "run": true,
     "trace": true,
     "in": "7 35"
    }
   },
   {
    "t": "list",
    "items": [
     [
      "`cin >> x` salta els espais i els salts de línia abans de la dada. Per això `7 35` en una línia o `7` i `35` en dues línies donen el mateix.",
      "`cin >> x` se salta los espacios y los saltos de línea antes del dato. Por eso `7 35` en una línea o `7` y `35` en dos líneas dan lo mismo.",
      "`cin >> x` skips the spaces and line breaks before the data. That is why `7 35` on one line or `7` and `35` on two lines give the same."
     ],
     [
      "Es poden llegir diverses dades seguides: `cin >> x >> y;` equival a les dues línies de dalt.",
      "Se pueden leer varios datos seguidos: `cin >> x >> y;` equivale a las dos líneas de arriba.",
      "Several data can be read in a row: `cin >> x >> y;` is equivalent to the two lines above."
     ],
     [
      "`cout` encadena tot el que hi posem amb `<<`; `endl` és el salt de línia.",
      "`cout` encadena todo lo que le ponemos con `<<`; `endl` es el salto de línea.",
      "`cout` chains everything we give it with `<<`; `endl` is the line break."
     ],
     [
      "Les fletxes indiquen cap on van les dades: `cin >> x` (del teclat **cap a** x) i `cout << x` (de x **cap a** la pantalla).",
      "Las flechas indican hacia dónde van los datos: `cin >> x` (del teclado **hacia** x) y `cout << x` (de x **hacia** la pantalla).",
      "The arrows show where the data go: `cin >> x` (from the keyboard **into** x) and `cout << x` (from x **to** the screen)."
     ]
    ]
   },
   {
    "t": "warn",
    "title": [
     "Compte! El format ha de ser exacte",
     "¡Cuidado! El formato debe ser exacto",
     "Careful! The format must be exact"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "CodeRunner compara la vostra sortida amb l'esperada **caràcter a caràcter**: mateixos textos, espais, majúscules i salts de línia. Un sol espai de diferència fa fallar la prova encara que el càlcul sigui correcte.",
       "CodeRunner compara vuestra salida con la esperada **carácter a carácter**: mismos textos, espacios, mayúsculas y saltos de línea. Un solo espacio de diferencia hace fallar la prueba aunque el cálculo sea correcto.",
       "CodeRunner compares your output with the expected one **character by character**: same texts, spaces, capitals and line breaks. A single space of difference makes the test fail even if the calculation is correct."
      ]
     }
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Les tres sortides fan el mateix càlcul; només la primera passa la prova.</caption>\n<thead><tr><th>Esperat</th><th>Obtingut</th><th>Resultat</th></tr></thead>\n<tbody>\n<tr><td>Suma: 42↵</td><td>Suma: 42↵</td><td class=\"ip-v\">correcte</td></tr>\n<tr><td>Suma: 42↵</td><td>Suma:42↵</td><td class=\"ip-f\">falta l'espai després dels dos punts</td></tr>\n<tr><td>Suma: 42↵</td><td>suma: 42↵</td><td class=\"ip-f\">majúscula diferent</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Las tres salidas hacen el mismo cálculo; solo la primera pasa la prueba.</caption>\n<thead><tr><th>Esperado</th><th>Obtenido</th><th>Resultado</th></tr></thead>\n<tbody>\n<tr><td>Suma: 42↵</td><td>Suma: 42↵</td><td class=\"ip-v\">correcto</td></tr>\n<tr><td>Suma: 42↵</td><td>Suma:42↵</td><td class=\"ip-f\">falta el espacio después de los dos puntos</td></tr>\n<tr><td>Suma: 42↵</td><td>suma: 42↵</td><td class=\"ip-f\">mayúscula distinta</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>The three outputs do the same calculation; only the first passes the test.</caption>\n<thead><tr><th>Expected</th><th>Obtained</th><th>Result</th></tr></thead>\n<tbody>\n<tr><td>Suma: 42↵</td><td>Suma: 42↵</td><td class=\"ip-v\">correct</td></tr>\n<tr><td>Suma: 42↵</td><td>Suma:42↵</td><td class=\"ip-f\">the space after the colon is missing</td></tr>\n<tr><td>Suma: 42↵</td><td>suma: 42↵</td><td class=\"ip-f\">different capital letter</td></tr>\n</tbody>\n</table></div>"
    ],
    "mode": "explained"
   }
  ],
  "s2-5": [
   {
    "t": "p",
    "x": [
     "Amb enters, C++ té exactament els dos operadors del pseudocodi:",
     "Con enteros, C++ tiene exactamente los dos operadores del pseudocódigo:",
     "With integers, C++ has exactly the two operators of pseudocode:"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "`a / b` → **quocient enter** (pseudocodi: `a ‖ b`), si `a` i `b` són enters.",
      "`a / b` → **cociente entero** (pseudocódigo: `a ‖ b`), si `a` y `b` son enteros.",
      "`a / b` → **integer quotient** (pseudocode: `a ‖ b`), if `a` and `b` are integers."
     ],
     [
      "`a % b` → **residu** (pseudocodi: `a |R b`).",
      "`a % b` → **resto** (pseudocódigo: `a |R b`).",
      "`a % b` → **remainder** (pseudocode: `a |R b`)."
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "El mateix símbol `/` fa una cosa o una altra segons el **tipus** dels operands:",
     "El mismo símbolo `/` hace una cosa u otra según el **tipo** de los operandos:",
     "The same symbol `/` does one thing or another depending on the **type** of the operands:"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Expressió",
      "Expresión",
      "Expression"
     ],
     [
      "Tipus dels operands",
      "Tipo de los operandos",
      "Type of the operands"
     ],
     [
      "Resultat",
      "Resultado",
      "Result"
     ],
     [
      "Per què",
      "Por qué",
      "Why"
     ]
    ],
    "rows": [
     [
      "`7 / 2`",
      "int / int",
      "3",
      [
       "Divisió entera: es perden els decimals",
       "División entera: se pierden los decimales",
       "Integer division: the decimals are lost"
      ]
     ],
     [
      "`7 % 2`",
      "int % int",
      "1",
      "7 = 2 · 3 + 1"
     ],
     [
      "`7.0 / 2`",
      "double / int",
      "3.5",
      [
       "N'hi ha prou que un sigui real",
       "Basta con que uno sea real",
       "One real operand is enough"
      ]
     ],
     [
      "`(double) 7 / 2`",
      "double / int",
      "3.5",
      [
       "Es converteix el 7 a real abans de dividir",
       "Se convierte el 7 a real antes de dividir",
       "7 is converted to real before dividing"
      ]
     ],
     [
      "`1370 / 200`",
      "int / int",
      "6",
      [
       "Caixes grans plenes",
       "Cajas grandes llenas",
       "Full large boxes"
      ]
     ],
     [
      "`1370 % 200`",
      "int % int",
      "170",
      [
       "Pilotes que sobren",
       "Pelotas que sobran",
       "Balls left over"
      ]
     ]
    ]
   },
   {
    "t": "warn",
    "title": [
     "La trampa de la mitjana",
     "La trampa de la media",
     "The average trap"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Amb `int a, b, c;`, l'expressió `(a + b + c) / 3` és una divisió **entera**, encara que el resultat es guardi en un `double`. Per a 1, 2 i 2 dona 1 en lloc de 1.67. Cal que un dels operands sigui real: `(a + b + c) / 3.0`.",
       "Con `int a, b, c;`, la expresión `(a + b + c) / 3` es una división **entera**, aunque el resultado se guarde en un `double`. Para 1, 2 y 2 da 1 en lugar de 1.67. Hace falta que uno de los operandos sea real: `(a + b + c) / 3.0`.",
       "With `int a, b, c;`, the expression `(a + b + c) / 3` is an **integer** division, even if the result is stored in a `double`. For 1, 2 and 2 it gives 1 instead of 1.67. One of the operands must be real: `(a + b + c) / 3.0`."
      ]
     }
    ]
   },
   {
    "t": "p",
    "x": [
     "Comproveu-ho amb la mitjana de tres enters amb un decimal (és un dels exercicis de la setmana). La segona línia fa servir la versió incorrecta:",
     "Comprobadlo con la media de tres enteros con un decimal (es uno de los ejercicios de la semana). La segunda línea usa la versión incorrecta:",
     "Check it with the average of three integers with one decimal (it is one of the week's exercises). The second line uses the wrong version:"
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "mitjana3.cpp",
     "run": true,
     "trace": true,
     "in": "1 2 2"
    },
    "src": [
     "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    double bona = (a + b + c) / 3.0;     // divisió real\n    double dolenta = (a + b + c) / 3;    // divisió ENTERA: 5 / 3 = 1\n    cout << fixed << setprecision(1) << bona << endl;\n    cout << fixed << setprecision(1) << dolenta << endl;\n    return 0;\n}",
     "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    double bona = (a + b + c) / 3.0;     // división real\n    double dolenta = (a + b + c) / 3;    // división ENTERA: 5 / 3 = 1\n    cout << fixed << setprecision(1) << bona << endl;\n    cout << fixed << setprecision(1) << dolenta << endl;\n    return 0;\n}",
     "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    double bona = (a + b + c) / 3.0;     // real division\n    double dolenta = (a + b + c) / 3;    // INTEGER division: 5 / 3 = 1\n    cout << fixed << setprecision(1) << bona << endl;\n    cout << fixed << setprecision(1) << dolenta << endl;\n    return 0;\n}"
    ]
   },
   {
    "t": "p",
    "x": [
     "`fixed << setprecision(1)` (de la llibreria `<iomanip>`) fa que els reals s'escriguin sempre amb exactament 1 decimal. Ho veureu a fons a la setmana 3.",
     "`fixed << setprecision(1)` (de la librería `<iomanip>`) hace que los reales se escriban siempre con exactamente 1 decimal. Lo veréis a fondo en la semana 3.",
     "`fixed << setprecision(1)` (from the `<iomanip>` library) makes reals always be written with exactly 1 decimal. You will see it in depth in week 3."
    ]
   }
  ],
  "s2-6": [
   {
    "t": "note",
    "title": [
     "Enunciat",
     "Enunciado",
     "Statement"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Una fàbrica empaqueta pilotes en caixes **G** (200 pilotes), **M** (50) i **P** (10). Entrat el nombre de pilotes (múltiple de 10), cal dir quantes caixes de cada tipus calen, **minimitzant el total de caixes**.",
       "Una fábrica empaqueta pelotas en cajas **G** (200 pelotas), **M** (50) y **P** (10). Dado el número de pelotas (múltiplo de 10), hay que decir cuántas cajas de cada tipo hacen falta, **minimizando el total de cajas**.",
       "A factory packs balls in boxes **G** (200 balls), **M** (50) and **P** (10). Given the number of balls (a multiple of 10), say how many boxes of each type are needed, **minimising the total number of boxes**."
      ]
     }
    ],
    "mode": "explained"
   },
   {
    "t": "h",
    "x": [
     "L'estratègia",
     "La estrategia",
     "The strategy"
    ]
   },
   {
    "t": "p",
    "x": [
     "Per fer servir el mínim de caixes, s'omplen primer les **més grans**, i el que sobra es reparteix en les següents: divisions i residus successius, de la caixa més gran a la més petita.",
     "Para usar el mínimo de cajas, se llenan primero las **más grandes**, y lo que sobra se reparte en las siguientes: divisiones y restos sucesivos, de la caja más grande a la más pequeña.",
     "To use the minimum number of boxes, the **largest** ones are filled first, and what is left over is shared among the next ones: successive divisions and remainders, from the largest box to the smallest."
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "`G = QNT / 200` → quantes caixes grans plenes.",
      "`G = QNT / 200` → cuántas cajas grandes llenas.",
      "`G = QNT / 200` → how many full large boxes."
     ],
     [
      "`QNT = QNT % 200` → ens quedem només amb el que no cap a les grans.",
      "`QNT = QNT % 200` → nos quedamos solo con lo que no cabe en las grandes.",
      "`QNT = QNT % 200` → we keep only what does not fit in the large ones."
     ],
     [
      "Repetim la idea amb 50 (mitjanes) i amb 10 (petites).",
      "Repetimos la idea con 50 (medianas) y con 10 (pequeñas).",
      "We repeat the idea with 50 (medium) and 10 (small)."
     ]
    ],
    "ordered": true
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:620px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 170\" role=\"img\" aria-label=\"Cada pas fa una divisió entera (caixes plenes) i un residu (el que sobra passa al pas següent).\">\n<rect class=\"bxq\" x=\"20\" y=\"60\" width=\"110\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"75\" y=\"80\" text-anchor=\"middle\">1370</text><text class=\"ds\" x=\"75\" y=\"98\" text-anchor=\"middle\">pilotes</text>\n<path class=\"ln\" d=\"M130 85 H178\" marker-end=\"url(#ah)\"></path><text class=\"dm\" x=\"154\" y=\"72\" text-anchor=\"middle\">/ 200</text>\n<rect class=\"bxo\" x=\"185\" y=\"20\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt db\" x=\"245\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">G = 6</text>\n<rect class=\"bxw\" x=\"185\" y=\"110\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"245\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\">sobren 170</text>\n<path class=\"ln\" d=\"M245 60 V70 H185\"></path><path class=\"lnd\" d=\"M185 85 H245 V108\" marker-end=\"url(#ah)\"></path><text class=\"dm\" x=\"266\" y=\"96\" text-anchor=\"start\">% 200</text>\n<path class=\"ln\" d=\"M305 130 H353\" marker-end=\"url(#ah)\"></path><text class=\"dm\" x=\"329\" y=\"117\" text-anchor=\"middle\">/ 50</text>\n<rect class=\"bxo\" x=\"360\" y=\"20\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt db\" x=\"420\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">M = 3</text>\n<rect class=\"bxw\" x=\"360\" y=\"110\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"420\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\">sobren 20</text>\n<path class=\"ln\" d=\"M420 108 V62\" marker-end=\"url(#ah)\"></path>\n<path class=\"ln\" d=\"M480 130 H528\" marker-end=\"url(#ah)\"></path><text class=\"dm\" x=\"504\" y=\"117\" text-anchor=\"middle\">/ 10</text>\n<rect class=\"bxo\" x=\"535\" y=\"20\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt db\" x=\"595\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">P = 2</text>\n<rect class=\"bxw\" x=\"535\" y=\"110\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"595\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\">sobren 0</text>\n<path class=\"ln\" d=\"M595 108 V62\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxg\" x=\"690\" y=\"40\" width=\"150\" height=\"90\" rx=\"6\"></rect><text class=\"dt db\" x=\"765\" y=\"62\" text-anchor=\"middle\">Comprovació</text><text class=\"dm\" x=\"765\" y=\"86\" text-anchor=\"middle\">6·200 + 3·50</text><text class=\"dm\" x=\"765\" y=\"106\" text-anchor=\"middle\">+ 2·10 = 1370 ✓</text>\n</svg></div>\n<figcaption>Cada pas fa una divisió entera (caixes plenes) i un residu (el que sobra passa al pas següent).</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:620px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 170\" role=\"img\" aria-label=\"Cada paso hace una división entera (cajas llenas) y un resto (lo que sobra pasa al paso siguiente).\">\n<rect class=\"bxq\" x=\"20\" y=\"60\" width=\"110\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"75\" y=\"80\" text-anchor=\"middle\">1370</text><text class=\"ds\" x=\"75\" y=\"98\" text-anchor=\"middle\">pelotas</text>\n<path class=\"ln\" d=\"M130 85 H178\" marker-end=\"url(#ah)\"></path><text class=\"dm\" x=\"154\" y=\"72\" text-anchor=\"middle\">/ 200</text>\n<rect class=\"bxo\" x=\"185\" y=\"20\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt db\" x=\"245\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">G = 6</text>\n<rect class=\"bxw\" x=\"185\" y=\"110\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"245\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\">sobran 170</text>\n<path class=\"ln\" d=\"M245 60 V70 H185\"></path><path class=\"lnd\" d=\"M185 85 H245 V108\" marker-end=\"url(#ah)\"></path><text class=\"dm\" x=\"266\" y=\"96\" text-anchor=\"start\">% 200</text>\n<path class=\"ln\" d=\"M305 130 H353\" marker-end=\"url(#ah)\"></path><text class=\"dm\" x=\"329\" y=\"117\" text-anchor=\"middle\">/ 50</text>\n<rect class=\"bxo\" x=\"360\" y=\"20\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt db\" x=\"420\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">M = 3</text>\n<rect class=\"bxw\" x=\"360\" y=\"110\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"420\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\">sobran 20</text>\n<path class=\"ln\" d=\"M420 108 V62\" marker-end=\"url(#ah)\"></path>\n<path class=\"ln\" d=\"M480 130 H528\" marker-end=\"url(#ah)\"></path><text class=\"dm\" x=\"504\" y=\"117\" text-anchor=\"middle\">/ 10</text>\n<rect class=\"bxo\" x=\"535\" y=\"20\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt db\" x=\"595\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">P = 2</text>\n<rect class=\"bxw\" x=\"535\" y=\"110\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"595\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\">sobran 0</text>\n<path class=\"ln\" d=\"M595 108 V62\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxg\" x=\"690\" y=\"40\" width=\"150\" height=\"90\" rx=\"6\"></rect><text class=\"dt db\" x=\"765\" y=\"62\" text-anchor=\"middle\">Comprobación</text><text class=\"dm\" x=\"765\" y=\"86\" text-anchor=\"middle\">6·200 + 3·50</text><text class=\"dm\" x=\"765\" y=\"106\" text-anchor=\"middle\">+ 2·10 = 1370 ✓</text>\n</svg></div>\n<figcaption>Cada paso hace una división entera (cajas llenas) y un resto (lo que sobra pasa al paso siguiente).</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:620px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 170\" role=\"img\" aria-label=\"Each step does an integer division (full boxes) and a remainder (what is left goes on to the next step).\">\n<rect class=\"bxq\" x=\"20\" y=\"60\" width=\"110\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"75\" y=\"80\" text-anchor=\"middle\">1370</text><text class=\"ds\" x=\"75\" y=\"98\" text-anchor=\"middle\">balls</text>\n<path class=\"ln\" d=\"M130 85 H178\" marker-end=\"url(#ah)\"></path><text class=\"dm\" x=\"154\" y=\"72\" text-anchor=\"middle\">/ 200</text>\n<rect class=\"bxo\" x=\"185\" y=\"20\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt db\" x=\"245\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">G = 6</text>\n<rect class=\"bxw\" x=\"185\" y=\"110\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"245\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\">170 left</text>\n<path class=\"ln\" d=\"M245 60 V70 H185\"></path><path class=\"lnd\" d=\"M185 85 H245 V108\" marker-end=\"url(#ah)\"></path><text class=\"dm\" x=\"266\" y=\"96\" text-anchor=\"start\">% 200</text>\n<path class=\"ln\" d=\"M305 130 H353\" marker-end=\"url(#ah)\"></path><text class=\"dm\" x=\"329\" y=\"117\" text-anchor=\"middle\">/ 50</text>\n<rect class=\"bxo\" x=\"360\" y=\"20\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt db\" x=\"420\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">M = 3</text>\n<rect class=\"bxw\" x=\"360\" y=\"110\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"420\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\">20 left</text>\n<path class=\"ln\" d=\"M420 108 V62\" marker-end=\"url(#ah)\"></path>\n<path class=\"ln\" d=\"M480 130 H528\" marker-end=\"url(#ah)\"></path><text class=\"dm\" x=\"504\" y=\"117\" text-anchor=\"middle\">/ 10</text>\n<rect class=\"bxo\" x=\"535\" y=\"20\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt db\" x=\"595\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">P = 2</text>\n<rect class=\"bxw\" x=\"535\" y=\"110\" width=\"120\" height=\"40\" rx=\"6\"></rect><text class=\"dt\" x=\"595\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\">0 left</text>\n<path class=\"ln\" d=\"M595 108 V62\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxg\" x=\"690\" y=\"40\" width=\"150\" height=\"90\" rx=\"6\"></rect><text class=\"dt db\" x=\"765\" y=\"62\" text-anchor=\"middle\">Check</text><text class=\"dm\" x=\"765\" y=\"86\" text-anchor=\"middle\">6·200 + 3·50</text><text class=\"dm\" x=\"765\" y=\"106\" text-anchor=\"middle\">+ 2·10 = 1370 ✓</text>\n</svg></div>\n<figcaption>Each step does an integer division (full boxes) and a remainder (what is left goes on to the next step).</figcaption>\n</figure>"
    ],
    "mode": "explained"
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Traça amb QNT = 1370.</caption>\n<thead><tr><th>Instrucció</th><th class=\"c\">QNT</th><th class=\"c\">G</th><th class=\"c\">M</th><th class=\"c\">P</th></tr></thead>\n<tbody>\n<tr><td>cin >> QNT;</td><td class=\"c hl\">1370</td><td class=\"c\">?</td><td class=\"c\">?</td><td class=\"c\">?</td></tr>\n<tr><td>int G = QNT / 200;</td><td class=\"c\">1370</td><td class=\"c hl\">6</td><td class=\"c\">?</td><td class=\"c\">?</td></tr>\n<tr><td>QNT = QNT % 200;</td><td class=\"c hl\">170</td><td class=\"c\">6</td><td class=\"c\">?</td><td class=\"c\">?</td></tr>\n<tr><td>int M = QNT / 50;</td><td class=\"c\">170</td><td class=\"c\">6</td><td class=\"c hl\">3</td><td class=\"c\">?</td></tr>\n<tr><td>QNT = QNT % 50;</td><td class=\"c hl\">20</td><td class=\"c\">6</td><td class=\"c\">3</td><td class=\"c\">?</td></tr>\n<tr><td>int P = QNT / 10;</td><td class=\"c\">20</td><td class=\"c\">6</td><td class=\"c\">3</td><td class=\"c hl\">2</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Traza con QNT = 1370.</caption>\n<thead><tr><th>Instrucción</th><th class=\"c\">QNT</th><th class=\"c\">G</th><th class=\"c\">M</th><th class=\"c\">P</th></tr></thead>\n<tbody>\n<tr><td>cin >> QNT;</td><td class=\"c hl\">1370</td><td class=\"c\">?</td><td class=\"c\">?</td><td class=\"c\">?</td></tr>\n<tr><td>int G = QNT / 200;</td><td class=\"c\">1370</td><td class=\"c hl\">6</td><td class=\"c\">?</td><td class=\"c\">?</td></tr>\n<tr><td>QNT = QNT % 200;</td><td class=\"c hl\">170</td><td class=\"c\">6</td><td class=\"c\">?</td><td class=\"c\">?</td></tr>\n<tr><td>int M = QNT / 50;</td><td class=\"c\">170</td><td class=\"c\">6</td><td class=\"c hl\">3</td><td class=\"c\">?</td></tr>\n<tr><td>QNT = QNT % 50;</td><td class=\"c hl\">20</td><td class=\"c\">6</td><td class=\"c\">3</td><td class=\"c\">?</td></tr>\n<tr><td>int P = QNT / 10;</td><td class=\"c\">20</td><td class=\"c\">6</td><td class=\"c\">3</td><td class=\"c hl\">2</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Trace with QNT = 1370.</caption>\n<thead><tr><th>Instruction</th><th class=\"c\">QNT</th><th class=\"c\">G</th><th class=\"c\">M</th><th class=\"c\">P</th></tr></thead>\n<tbody>\n<tr><td>cin >> QNT;</td><td class=\"c hl\">1370</td><td class=\"c\">?</td><td class=\"c\">?</td><td class=\"c\">?</td></tr>\n<tr><td>int G = QNT / 200;</td><td class=\"c\">1370</td><td class=\"c hl\">6</td><td class=\"c\">?</td><td class=\"c\">?</td></tr>\n<tr><td>QNT = QNT % 200;</td><td class=\"c hl\">170</td><td class=\"c\">6</td><td class=\"c\">?</td><td class=\"c\">?</td></tr>\n<tr><td>int M = QNT / 50;</td><td class=\"c\">170</td><td class=\"c\">6</td><td class=\"c hl\">3</td><td class=\"c\">?</td></tr>\n<tr><td>QNT = QNT % 50;</td><td class=\"c hl\">20</td><td class=\"c\">6</td><td class=\"c\">3</td><td class=\"c\">?</td></tr>\n<tr><td>int P = QNT / 10;</td><td class=\"c\">20</td><td class=\"c\">6</td><td class=\"c\">3</td><td class=\"c hl\">2</td></tr>\n</tbody>\n</table></div>"
    ],
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "El pseudocodi i el C++, un al costat de l'altre. Traceu-los amb altres quantitats (470, 1000, 10, 0):",
     "El pseudocódigo y el C++, uno al lado del otro. Trazadlos con otras cantidades (470, 1000, 10, 0):",
     "The pseudocode and the C++, side by side. Trace them with other amounts (470, 1000, 10, 0):"
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
        "in": "1370"
       },
       "src": [
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      QNT           Natural   Pilotes (múltiple de 10)\n   S      G             Natural   Caixes grans (200)\n   S      M             Natural   Caixes mitjanes (50)\n   S      P             Natural   Caixes petites (10)\n\nINICI_SEQÜÈNCIA\n    Llegir QNT\n    G ← QNT ‖ 200\n    QNT ← QNT |R 200\n    M ← QNT ‖ 50\n    QNT ← QNT |R 50\n    P ← QNT ‖ 10\n    Escriure \"Caixes Grans: \", G\n    Escriure \"Caixes Mitjanes:\", M\n    Escriure \"Caixes Petites:\", P\nFI_SEQÜÈNCIA",
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      QNT           Natural   Pelotas (múltiplo de 10)\n   S      G             Natural   Cajas grandes (200)\n   S      M             Natural   Cajas medianas (50)\n   S      P             Natural   Cajas pequeñas (10)\n\nINICI_SEQÜÈNCIA\n    Llegir QNT\n    G ← QNT ‖ 200\n    QNT ← QNT |R 200\n    M ← QNT ‖ 50\n    QNT ← QNT |R 50\n    P ← QNT ‖ 10\n    Escriure \"Caixes Grans: \", G\n    Escriure \"Caixes Mitjanes:\", M\n    Escriure \"Caixes Petites:\", P\nFI_SEQÜÈNCIA"
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int QNT;\n    cin >> QNT;\n\n    int G = QNT / 200;\n    QNT = QNT % 200;\n    int M = QNT / 50;\n    QNT = QNT % 50;\n    int P = QNT / 10;\n\n    cout << \"Caixes Grans: \" << G << endl;\n    cout << \"Caixes Mitjanes:\" << M << endl;\n    cout << \"Caixes Petites:\" << P << endl;\n    return 0;\n}",
       "props": {
        "title": "pilotes.cpp",
        "run": true,
        "trace": true,
        "in": "1370"
       }
      }
     ]
    ]
   },
   {
    "t": "tip",
    "title": [
     "Fixeu-vos en el format de la sortida",
     "Fijaos en el formato de la salida",
     "Look at the output format"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "«Caixes Grans: » porta un espai després dels dos punts, però «Caixes Mitjanes:» i «Caixes Petites:» no. És el format del material i el que comprova CodeRunner: copieu-lo tal qual de l'enunciat.",
       "«Caixes Grans: » lleva un espacio después de los dos puntos, pero «Caixes Mitjanes:» y «Caixes Petites:» no. Es el formato del material y lo que comprueba CodeRunner: copiadlo tal cual del enunciado.",
       "“Caixes Grans: ” has a space after the colon, but “Caixes Mitjanes:” and “Caixes Petites:” do not. It is the format of the material and what CodeRunner checks: copy it exactly from the statement."
      ]
     }
    ],
    "mode": "explained"
   }
  ],
  "s2-7": [
   {
    "t": "p",
    "x": [
     "A CodeRunner: «Llegeix un enter i el mostra», «Suma de dos enters», «Mitjana de tres enters (1 decimal)» i, d'ampliació, «Producte de dos enters», «Quatre enters en una línia» i «Quatre enters: suma i producte». Aquí teniu aquests i alguns més, amb compilador, proves i rellotge de 15 minuts:",
     "En CodeRunner: «Llegeix un enter i el mostra», «Suma de dos enters», «Mitjana de tres enters (1 decimal)» y, de ampliación, «Producte de dos enters», «Quatre enters en una línia» y «Quatre enters: suma i producte». Aquí tenéis estos y algunos más, con compilador, pruebas y reloj de 15 minutos:",
     "In CodeRunner: “Llegeix un enter i el mostra”, “Suma de dos enters”, “Mitjana de tres enters (1 decimal)” and, as extension, “Producte de dos enters”, “Quatre enters en una línia” and “Quatre enters: suma i producte”. Here you have these and a few more, with a compiler, tests and a 15-minute timer:"
    ]
   },
   {
    "t": "lab",
    "id": "exlist",
    "props": {
     "wk": 2
    },
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "Per practicar el pas previ, escriviu primer l'algorisme a [Escriu i prova el pseudocodi](/programacio/practica?unit=t21) (exercicis S2).",
     "Para practicar el paso previo, escribid primero el algoritmo en [Escribe y prueba el pseudocódigo](/programacio/practica?unit=t21) (ejercicios S2).",
     "To practise the previous step, first write the algorithm in [Write and test the pseudocode](/programacio/practica?unit=t21) (S2 exercises)."
    ],
    "mode": "explained"
   }
  ],
  "s2-8": [
   {
    "t": "check",
    "ex": {
     "id": "s2-8-q1",
     "qb": [
      {
       "t": "p",
       "x": [
        "Què escriu aquest fragment?",
        "¿Qué escribe este fragmento?",
        "What does this fragment write?"
       ]
      },
      {
       "t": "code",
       "lang": "txt",
       "src": "int a = 17, b = 5;\ncout << a / b << \" \" << a % b << endl;"
      }
     ],
     "type": "mcq",
     "opts": [
      "3.4 2",
      "3 3",
      "3 2",
      "3.4 0.4"
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "Amb enters, `/` és el quocient enter (3) i `%` el residu (17 = 5 · 3 + 2).",
        "Con enteros, `/` es el cociente entero (3) y `%` el resto (17 = 5 · 3 + 2).",
        "With integers, `/` is the integer quotient (3) and `%` the remainder (17 = 5 · 3 + 2)."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s2-8-q2",
     "qb": [
      {
       "t": "p",
       "x": [
        "Amb `int a = 1, b = 2, c = 2;`, quant val `double m = (a + b + c) / 3;`?",
        "Con `int a = 1, b = 2, c = 2;`, ¿cuánto vale `double m = (a + b + c) / 3;`?",
        "With `int a = 1, b = 2, c = 2;`, what is `double m = (a + b + c) / 3;`?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "1.67",
      "1",
      "1.666667",
      "2"
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "5 / 3 és una divisió entera (tots dos operands són `int`), dona 1, i després es guarda com a 1.0. Cal escriure `/ 3.0`.",
        "5 / 3 es una división entera (ambos operandos son `int`), da 1, y después se guarda como 1.0. Hay que escribir `/ 3.0`.",
        "5 / 3 is an integer division (both operands are `int`), it gives 1, and then it is stored as 1.0. You must write `/ 3.0`."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s2-8-q3",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quina instrucció correspon a `Llegir X`?",
        "¿Qué instrucción corresponde a `Llegir X`?",
        "Which instruction corresponds to `Llegir X`?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "`cin >> X;`",
      "`cin << X;`",
      "`cout >> X;`",
      "`X = cin;`"
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "Les dades van del teclat (`cin`) cap a la variable: `cin >> X`.",
        "Los datos van del teclado (`cin`) hacia la variable: `cin >> X`.",
        "The data go from the keyboard (`cin`) into the variable: `cin >> X`."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s2-8-q4",
     "qb": [
      {
       "t": "p",
       "x": [
        "L'enunciat demana la sortida `Total: 12` i el vostre programa escriu `Total:12`. Què dirà CodeRunner?",
        "El enunciado pide la salida `Total: 12` y vuestro programa escribe `Total:12`. ¿Qué dirá CodeRunner?",
        "The statement asks for the output `Total: 12` and your program writes `Total:12`. What will CodeRunner say?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      [
       "Correcte, perquè el número és el mateix",
       "Correcto, porque el número es el mismo",
       "Correct, because the number is the same"
      ],
      [
       "Correcte amb una penalització petita",
       "Correcto con una pequeña penalización",
       "Correct with a small penalty"
      ],
      [
       "Error de compilació",
       "Error de compilación",
       "Compilation error"
      ],
      [
       "Prova fallida: la sortida no coincideix caràcter a caràcter",
       "Prueba fallida: la salida no coincide carácter a carácter",
       "Test failed: the output does not match character by character"
      ]
     ],
     "answer": 3,
     "sol": [
      {
       "t": "p",
       "x": [
        "La comparació és exacta. Falta l'espai després dels dos punts.",
        "La comparación es exacta. Falta el espacio después de los dos puntos.",
        "The comparison is exact. The space after the colon is missing."
       ]
      }
     ]
    }
   }
  ],
  "s2-9": [
   {
    "t": "summary",
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Tot programa C++: `#include <iostream>` + `using namespace std;` + `int main() { … return 0; }`.",
        "Todo programa C++: `#include <iostream>` + `using namespace std;` + `int main() { … return 0; }`.",
        "Every C++ program: `#include <iostream>` + `using namespace std;` + `int main() { … return 0; }`."
       ],
       [
        "`cin >>` llegeix, `cout <<` escriu, `=` assigna; cada instrucció acaba amb `;`.",
        "`cin >>` lee, `cout <<` escribe, `=` asigna; cada instrucción termina con `;`.",
        "`cin >>` reads, `cout <<` writes, `=` assigns; every instruction ends with `;`."
       ],
       [
        "Amb enters, `/` és el quocient enter i `%` el residu; per a una divisió real, almenys un operand ha de ser `double`.",
        "Con enteros, `/` es el cociente entero y `%` el resto; para una división real, al menos un operando debe ser `double`.",
        "With integers, `/` is the integer quotient and `%` the remainder; for a real division, at least one operand must be `double`."
       ],
       [
        "Inicialitzeu les variables abans de fer-les servir.",
        "Inicializad las variables antes de usarlas.",
        "Initialise variables before using them."
       ],
       [
        "La sortida ha de coincidir **exactament** amb l'enunciat.",
        "La salida debe coincidir **exactamente** con el enunciado.",
        "The output must match the statement **exactly**."
       ]
      ]
     }
    ]
   }
  ],
  "pati": [
   {
    "t": "p",
    "x": [
     "Un espai lliure per escriure i executar qualsevol programa de C++, sense proves. Els exemples de la teoria s'obren aquí amb el botó «Pati». El codi i l'entrada es desen en aquest navegador.",
     "Un espacio libre para escribir y ejecutar cualquier programa de C++, sin pruebas. Los ejemplos de la teoría se abren aquí con el botón «Patio». El código y la entrada se guardan en este navegador.",
     "A free space to write and run any C++ program, without tests. The theory examples open here with the “Playground” button. The code and the input are saved in this browser."
    ]
   },
   {
    "t": "lab",
    "id": "pati",
    "mode": "explained"
   }
  ]
 },
 "examEnd": [
  {
   "ref": "cpp-model-pilotes"
  },
  {
   "ref": "cpp-model-mitjana3"
  },
  {
   "ref": "cpp-f-cronometre"
  },
  {
   "ref": "cpp-f-rebaixes"
  }
 ]
};
