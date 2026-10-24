// Generat per tools/kit-import/prog.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Funcions, procediments, pas per valor i per referència. Exemples: Nombres Perfectes modular i Dividint Restant amb Decimals.",
    "Funciones, procedimientos, paso por valor y por referencia. Ejemplos: Números Perfectos modular y Dividiendo Restando con Decimales."
   ]
  },
  {
   "t": "list",
   "items": [
    [
     "**Sessions:** Dl. 19/10 i dc. 21/10",
     "**Sesiones:** Lu. 19/10 y mi. 21/10"
    ],
    [
     "**Teoria associada:** Tema 3.2 (programació modular)",
     "**Teoría asociada:** Tema 3.2 (programación modular)"
    ]
   ]
  },
  {
   "t": "p",
   "x": [
    "La setmana passada vam dividir els problemes en accions. Aquesta setmana cada acció es converteix en un **subprograma** amb nom propi: una **funció** si calcula un valor, o un **procediment** si fa una feina. El `main` queda tan clar com el nivell 1 del disseny, i cada peça es pot provar i reutilitzar per separat.",
    "La semana pasada dividimos los problemas en acciones. Esta semana cada acción se convierte en un **subprograma** con nombre propio: una **función** si calcula un valor, o un **procedimiento** si hace una tarea. El `main` queda tan claro como el nivel 1 del diseño, y cada pieza se puede probar y reutilizar por separado."
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
       "Definir i cridar funcions que retornen un valor (`return`) i procediments (`void`).",
       "Definir y llamar funciones que devuelven un valor (`return`) y procedimientos (`void`)."
      ],
      [
       "Distingir paràmetres i arguments, i saber on viu cada variable.",
       "Distinguir parámetros y argumentos, y saber dónde vive cada variable."
      ],
      [
       "Triar entre pas **per valor** (una còpia) i pas **per referència** (`&`, la mateixa variable).",
       "Elegir entre paso **por valor** (una copia) y paso **por referencia** (`&`, la misma variable)."
      ],
      [
       "Fer que un subprograma torni més d'un resultat amb paràmetres per referència.",
       "Hacer que un subprograma devuelva más de un resultado con parámetros por referencia."
      ],
      [
       "Reescriure un programa en mòduls a partir del seu disseny descendent.",
       "Reescribir un programa en módulos a partir de su diseño descendente."
      ]
     ]
    }
   ]
  }
 ],
 "sections": {
  "s7-1": [
   {
    "t": "p",
    "x": [
     "Volem el màxim de tres enters. Sense funcions, la mateixa comparació s'escriu dues vegades; amb una funció `max2`, s'escriu una sola vegada i es fa servir tantes vegades com calgui:",
     "Queremos el máximo de tres enteros. Sin funciones, la misma comparación se escribe dos veces; con una función `max2`, se escribe una sola vez y se usa tantas veces como haga falta:"
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "max3.cpp",
     "run": true,
     "trace": true,
     "in": "4 9 7"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\n// Retorna el més gran de a i b\nint max2(int a, int b) {\n    if (a > b) {\n        return a;\n    } else {\n        return b;\n    }\n}\n\nint main() {\n    int x, y, z;\n    cin >> x >> y >> z;\n    int m = max2(max2(x, y), z);      // el màxim de tres, amb dues crides\n    cout << \"Maxim: \" << m << endl;\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\n// Devuelve el mayor de a y b\nint max2(int a, int b) {\n    if (a > b) {\n        return a;\n    } else {\n        return b;\n    }\n}\n\nint main() {\n    int x, y, z;\n    cin >> x >> y >> z;\n    int m = max2(max2(x, y), z);      // el máximo de tres, con dos llamadas\n    cout << \"Maxim: \" << m << endl;\n    return 0;\n}"
    ]
   },
   {
    "t": "p",
    "x": [
     "Amb la traça, observeu que cada crida obre un **marc** nou amb les seves pròpies `a` i `b`, i que en fer `return` el marc desapareix i el valor torna al lloc de la crida.",
     "Con la traza, observad que cada llamada abre un **marco** nuevo con sus propias `a` y `b`, y que al hacer `return` el marco desaparece y el valor vuelve al lugar de la llamada."
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Avantatge",
      "Ventaja"
     ],
     [
      "Què vol dir",
      "Qué significa"
     ]
    ],
    "rows": [
     [
      [
       "No repetir codi",
       "No repetir código"
      ],
      [
       "Una correcció es fa en un sol lloc.",
       "Una corrección se hace en un solo lugar."
      ]
     ],
     [
      [
       "Llegibilitat",
       "Legibilidad"
      ],
      [
       "`max2(max2(x, y), z)` es llegeix com l'enunciat.",
       "`max2(max2(x, y), z)` se lee como el enunciado."
      ]
     ],
     [
      [
       "Provar per parts",
       "Probar por partes"
      ],
      [
       "Cada funció es prova sola abans de muntar el programa.",
       "Cada función se prueba sola antes de montar el programa."
      ]
     ],
     [
      [
       "Reutilitzar",
       "Reutilizar"
      ],
      [
       "`max2` serveix per a qualsevol altre programa.",
       "`max2` sirve para cualquier otro programa."
      ]
     ]
    ]
   }
  ],
  "s7-2": [
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 760 220\" role=\"img\" aria-label=\"Parts de la definició d'una funció i d'una crida\" role=\"img\">\n<text class=\"ds\" x=\"68\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"central\">tipus del resultat</text>\n<text class=\"ds\" x=\"282\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"central\">paràmetres (les dades que rep)</text>\n<path class=\"ln\" d=\"M68 20 V30\"></path><path class=\"ln\" d=\"M282 20 V30\"></path>\n<rect class=\"bxq\" x=\"40\" y=\"32\" width=\"56\" height=\"34\" rx=\"4\"></rect><text class=\"dm\" x=\"68\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"central\">int</text>\n<rect class=\"bxa\" x=\"106\" y=\"32\" width=\"76\" height=\"34\" rx=\"4\"></rect><text class=\"dm\" x=\"144\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"central\">max2</text>\n<text class=\"dm\" x=\"190\" y=\"49\" dominant-baseline=\"central\">(</text>\n<rect class=\"bxw\" x=\"202\" y=\"32\" width=\"160\" height=\"34\" rx=\"4\"></rect><text class=\"dm\" x=\"282\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"central\">int a, int b</text>\n<text class=\"dm\" x=\"370\" y=\"49\" dominant-baseline=\"central\">) {</text>\n<text class=\"ds\" x=\"144\" y=\"82\" text-anchor=\"middle\" dominant-baseline=\"central\">nom</text>\n<rect class=\"bxg\" x=\"60\" y=\"98\" width=\"320\" height=\"76\" rx=\"4\"></rect>\n<text class=\"dm\" x=\"76\" y=\"118\" dominant-baseline=\"central\">if (a &gt; b) return a;</text>\n<text class=\"dm\" x=\"76\" y=\"140\" dominant-baseline=\"central\">else return b;</text>\n<text class=\"ds\" x=\"76\" y=\"162\" dominant-baseline=\"central\">cos: return torna el valor i acaba</text>\n<text class=\"dm\" x=\"40\" y=\"196\" dominant-baseline=\"central\">}</text>\n<rect class=\"bxg\" x=\"440\" y=\"32\" width=\"300\" height=\"76\" rx=\"4\"></rect>\n<text class=\"ds\" x=\"456\" y=\"50\" dominant-baseline=\"central\">Crida, dins del main:</text>\n<text class=\"dm\" x=\"456\" y=\"80\" dominant-baseline=\"central\">int m = max2(x, 5);</text>\n<text class=\"ds\" x=\"456\" y=\"132\" dominant-baseline=\"central\">x i 5 són els arguments:</text>\n<text class=\"ds\" x=\"456\" y=\"150\" dominant-baseline=\"central\">x es copia a a, i 5 es copia a b.</text>\n<text class=\"ds\" x=\"456\" y=\"176\" dominant-baseline=\"central\">El valor del return es guarda a m.</text>\n</svg></div>\n<figcaption>La definició diu què rep i què torna la funció; la crida li dona valors concrets i fa servir el resultat.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 760 220\" role=\"img\" aria-label=\"Partes de la definición de una función y de una llamada\" role=\"img\">\n<text class=\"ds\" x=\"68\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"central\">tipo del resultado</text>\n<text class=\"ds\" x=\"282\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"central\">parámetros (los datos que recibe)</text>\n<path class=\"ln\" d=\"M68 20 V30\"></path><path class=\"ln\" d=\"M282 20 V30\"></path>\n<rect class=\"bxq\" x=\"40\" y=\"32\" width=\"56\" height=\"34\" rx=\"4\"></rect><text class=\"dm\" x=\"68\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"central\">int</text>\n<rect class=\"bxa\" x=\"106\" y=\"32\" width=\"76\" height=\"34\" rx=\"4\"></rect><text class=\"dm\" x=\"144\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"central\">max2</text>\n<text class=\"dm\" x=\"190\" y=\"49\" dominant-baseline=\"central\">(</text>\n<rect class=\"bxw\" x=\"202\" y=\"32\" width=\"160\" height=\"34\" rx=\"4\"></rect><text class=\"dm\" x=\"282\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"central\">int a, int b</text>\n<text class=\"dm\" x=\"370\" y=\"49\" dominant-baseline=\"central\">) {</text>\n<text class=\"ds\" x=\"144\" y=\"82\" text-anchor=\"middle\" dominant-baseline=\"central\">nombre</text>\n<rect class=\"bxg\" x=\"60\" y=\"98\" width=\"320\" height=\"76\" rx=\"4\"></rect>\n<text class=\"dm\" x=\"76\" y=\"118\" dominant-baseline=\"central\">if (a &gt; b) return a;</text>\n<text class=\"dm\" x=\"76\" y=\"140\" dominant-baseline=\"central\">else return b;</text>\n<text class=\"ds\" x=\"76\" y=\"162\" dominant-baseline=\"central\">cuerpo: return devuelve el valor y acaba</text>\n<text class=\"dm\" x=\"40\" y=\"196\" dominant-baseline=\"central\">}</text>\n<rect class=\"bxg\" x=\"440\" y=\"32\" width=\"300\" height=\"76\" rx=\"4\"></rect>\n<text class=\"ds\" x=\"456\" y=\"50\" dominant-baseline=\"central\">Llamada, dentro del main:</text>\n<text class=\"dm\" x=\"456\" y=\"80\" dominant-baseline=\"central\">int m = max2(x, 5);</text>\n<text class=\"ds\" x=\"456\" y=\"132\" dominant-baseline=\"central\">x y 5 son los argumentos:</text>\n<text class=\"ds\" x=\"456\" y=\"150\" dominant-baseline=\"central\">x se copia en a, y 5 se copia en b.</text>\n<text class=\"ds\" x=\"456\" y=\"176\" dominant-baseline=\"central\">El valor del return se guarda en m.</text>\n</svg></div>\n<figcaption>La definición dice qué recibe y qué devuelve la función; la llamada le da valores concretos y usa el resultado.</figcaption>\n</figure>"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "**Paràmetres** (a la definició): variables locals que reben els valors de la crida. Només existeixen mentre la funció s'executa.",
      "**Parámetros** (en la definición): variables locales que reciben los valores de la llamada. Solo existen mientras la función se ejecuta."
     ],
     [
      "**Arguments** (a la crida): els valors concrets. Han de coincidir en **nombre**, **ordre** i **tipus** amb els paràmetres; els noms poden ser diferents.",
      "**Argumentos** (en la llamada): los valores concretos. Tienen que coincidir en **número**, **orden** y **tipo** con los parámetros; los nombres pueden ser diferentes."
     ],
     [
      "`return expressió;` torna el valor i **acaba** la funció en aquell mateix moment: el que hi ha darrere no s'executa.",
      "`return expressió;` devuelve el valor y **termina** la función en ese mismo momento: lo que hay detrás no se ejecuta."
     ],
     [
      "La funció s'ha de definir **abans** del `main` que la crida (o declarar-ne abans el prototip, `int max2(int a, int b);`).",
      "La función se tiene que definir **antes** del `main` que la llama (o declarar antes su prototipo, `int max2(int a, int b);`)."
     ]
    ]
   }
  ],
  "s7-3": [
   {
    "t": "p",
    "x": [
     "Un subprograma que no ha de tornar cap valor, sinó fer una feina (escriure, modificar variables), és un **procediment**. En C++ es declara amb el tipus `void` («res») i es crida com una instrucció:",
     "Un subprograma que no tiene que devolver ningún valor, sino hacer una tarea (escribir, modificar variables), es un **procedimiento**. En C++ se declara con el tipo `void` («nada») y se llama como una instrucción:"
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "procediment.cpp",
     "run": true,
     "trace": true,
     "in": "4"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\n// Procediment: escriu una línia de n asteriscs. No retorna res.\nvoid escriuLinia(int n) {\n    for (int i = 1; i <= n; i++) {\n        cout << \"*\";\n    }\n    cout << endl;\n}\n\nint main() {\n    int alcada;\n    cin >> alcada;\n    for (int fila = 1; fila <= alcada; fila++) {\n        escriuLinia(fila);            // es crida com una instrucció\n    }\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\n// Procedimiento: escribe una línea de n asteriscos. No devuelve nada.\nvoid escriuLinia(int n) {\n    for (int i = 1; i <= n; i++) {\n        cout << \"*\";\n    }\n    cout << endl;\n}\n\nint main() {\n    int alcada;\n    cin >> alcada;\n    for (int fila = 1; fila <= alcada; fila++) {\n        escriuLinia(fila);            // se llama como una instrucción\n    }\n    return 0;\n}"
    ]
   },
   {
    "t": "table",
    "head": [
     "",
     [
      "Funció",
      "Función"
     ],
     [
      "Procediment",
      "Procedimiento"
     ]
    ],
    "rows": [
     [
      [
       "Tipus",
       "Tipo"
      ],
      "`int`, `double`, `bool`, `char`…",
      "`void`"
     ],
     [
      [
       "Acaba amb",
       "Acaba con"
      ],
      [
       "`return valor;` (obligatori en tots els camins)",
       "`return valor;` (obligatorio en todos los caminos)"
      ],
      [
       "la clau final (o `return;` sense valor)",
       "la llave final (o `return;` sin valor)"
      ]
     ],
     [
      [
       "Es crida",
       "Se llama"
      ],
      [
       "dins d'una expressió: `m = max2(a, b);`",
       "dentro de una expresión: `m = max2(a, b);`"
      ],
      [
       "com una instrucció: `escriuLinia(5);`",
       "como una instrucción: `escriuLinia(5);`"
      ]
     ],
     [
      [
       "Exemple de nom",
       "Ejemplo de nombre"
      ],
      [
       "un nom o una pregunta: `sumaDelsDivisors`, `esPrimer`",
       "un sustantivo o una pregunta: `sumaDelsDivisors`, `esPrimer`"
      ],
      [
       "un verb: `escriuLinia`, `intercanvia`",
       "un verbo: `escriuLinia`, `intercanvia`"
      ]
     ]
    ]
   }
  ],
  "s7-4": [
   {
    "t": "p",
    "x": [
     "Per defecte, cada paràmetre rep una **còpia** del valor de l'argument. El que la funció faci amb la còpia no afecta la variable original:",
     "Por defecto, cada parámetro recibe una **copia** del valor del argumento. Lo que la función haga con la copia no afecta a la variable original:"
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "per_valor.cpp",
     "run": true,
     "trace": true,
     "in": "5"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nvoid noFaRes(int x) {\n    x = 0;                            // canvia la còpia, no l'original\n    cout << \"Dins: x = \" << x << endl;\n}\n\nint main() {\n    int x;\n    cin >> x;\n    noFaRes(x);\n    cout << \"Fora: x = \" << x << endl;  // continua valent el que s'ha llegit\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nvoid noFaRes(int x) {\n    x = 0;                            // cambia la copia, no el original\n    cout << \"Dins: x = \" << x << endl;\n}\n\nint main() {\n    int x;\n    cin >> x;\n    noFaRes(x);\n    cout << \"Fora: x = \" << x << endl;  // sigue valiendo lo que se ha leído\n    return 0;\n}"
    ]
   },
   {
    "t": "p",
    "x": [
     "Encara que les dues variables es diguin `x`, són dues variables diferents, cadascuna en el seu marc. Per a una funció que només ha de **consultar** dades (com `max2`), el pas per valor és el que cal: protegeix les variables del `main`.",
     "Aunque las dos variables se llamen `x`, son dos variables diferentes, cada una en su marco. Para una función que solo tiene que **consultar** datos (como `max2`), el paso por valor es lo adecuado: protege las variables del `main`."
    ]
   }
  ],
  "s7-5": [
   {
    "t": "p",
    "x": [
     "Si el paràmetre porta `&`, no es fa cap còpia: el paràmetre és un **altre nom** per a la mateixa variable de la crida. Tot el que s'hi faci, es fa a l'original. És l'única manera que un procediment modifiqui variables del `main`:",
     "Si el parámetro lleva `&`, no se hace ninguna copia: el parámetro es **otro nombre** para la misma variable de la llamada. Todo lo que se haga con él se hace en el original. Es la única manera de que un procedimiento modifique variables del `main`:"
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "intercanvia.cpp",
     "run": true,
     "trace": true,
     "in": "3 8"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nvoid intercanvia(int &a, int &b) {    // a i b són àlies de p i q\n    int aux = a;\n    a = b;\n    b = aux;\n}\n\nint main() {\n    int p, q;\n    cin >> p >> q;\n    intercanvia(p, q);\n    cout << p << \" \" << q << endl;    // 8 3\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nvoid intercanvia(int &a, int &b) {    // a y b son alias de p y q\n    int aux = a;\n    a = b;\n    b = aux;\n}\n\nint main() {\n    int p, q;\n    cin >> p >> q;\n    intercanvia(p, q);\n    cout << p << \" \" << q << endl;    // 8 3\n    return 0;\n}"
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 780 250\" role=\"img\" aria-label=\"Per valor, la funció té una còpia; per referència, el paràmetre apunta a la variable del main\" role=\"img\">\n<text class=\"dt db\" x=\"190\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">Per valor: noFaRes(x)</text>\n<text class=\"dt db\" x=\"590\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">Per referència: intercanvia(p, q)</text>\n<rect class=\"bxg\" x=\"20\" y=\"40\" width=\"160\" height=\"80\" rx=\"6\"></rect><text class=\"ds\" x=\"30\" y=\"56\" dominant-baseline=\"central\">main</text>\n<rect class=\"bxa\" x=\"60\" y=\"70\" width=\"80\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"100\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">x = 5</text>\n<rect class=\"bxg\" x=\"210\" y=\"40\" width=\"160\" height=\"80\" rx=\"6\"></rect><text class=\"ds\" x=\"220\" y=\"56\" dominant-baseline=\"central\">noFaRes</text>\n<rect class=\"bxw\" x=\"250\" y=\"70\" width=\"80\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"290\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">x = 0</text>\n<path class=\"lnd\" d=\"M140 88 H248\" marker-end=\"url(#ah)\"></path><text class=\"ds\" x=\"194\" y=\"80\" text-anchor=\"middle\">còpia</text>\n<text class=\"ds\" x=\"190\" y=\"146\" text-anchor=\"middle\">Dues caixes: canviar la de la dreta</text>\n<text class=\"ds\" x=\"190\" y=\"164\" text-anchor=\"middle\">no toca la de l'esquerra.</text>\n<rect class=\"bxg\" x=\"420\" y=\"40\" width=\"340\" height=\"80\" rx=\"6\"></rect><text class=\"ds\" x=\"430\" y=\"56\" dominant-baseline=\"central\">main</text>\n<rect class=\"bxa\" x=\"470\" y=\"70\" width=\"90\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"515\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">p = 8</text>\n<rect class=\"bxa\" x=\"620\" y=\"70\" width=\"90\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"665\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">q = 3</text>\n<rect class=\"bxg\" x=\"420\" y=\"150\" width=\"340\" height=\"66\" rx=\"6\"></rect><text class=\"ds\" x=\"430\" y=\"166\" dominant-baseline=\"central\">intercanvia</text>\n<text class=\"dm\" x=\"515\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"central\">&amp;a</text><text class=\"dm\" x=\"665\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"central\">&amp;b</text>\n<text class=\"dm\" x=\"590\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"central\">aux = 3</text>\n<path class=\"lna\" d=\"M515 180 V110\" marker-end=\"url(#aha)\"></path><path class=\"lna\" d=\"M665 180 V110\" marker-end=\"url(#aha)\"></path>\n<text class=\"ds\" x=\"590\" y=\"238\" text-anchor=\"middle\">a i b no tenen caixa pròpia: són altres noms de p i q</text>\n</svg></div>\n<figcaption>Per valor hi ha dues variables; per referència, una sola amb dos noms. A la traça, els paràmetres per referència apareixen com a àlies de la variable del <code>main</code>.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 780 250\" role=\"img\" aria-label=\"Por valor, la función tiene una copia; por referencia, el parámetro apunta a la variable del main\" role=\"img\">\n<text class=\"dt db\" x=\"190\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">Por valor: noFaRes(x)</text>\n<text class=\"dt db\" x=\"590\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">Por referencia: intercanvia(p, q)</text>\n<rect class=\"bxg\" x=\"20\" y=\"40\" width=\"160\" height=\"80\" rx=\"6\"></rect><text class=\"ds\" x=\"30\" y=\"56\" dominant-baseline=\"central\">main</text>\n<rect class=\"bxa\" x=\"60\" y=\"70\" width=\"80\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"100\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">x = 5</text>\n<rect class=\"bxg\" x=\"210\" y=\"40\" width=\"160\" height=\"80\" rx=\"6\"></rect><text class=\"ds\" x=\"220\" y=\"56\" dominant-baseline=\"central\">noFaRes</text>\n<rect class=\"bxw\" x=\"250\" y=\"70\" width=\"80\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"290\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">x = 0</text>\n<path class=\"lnd\" d=\"M140 88 H248\" marker-end=\"url(#ah)\"></path><text class=\"ds\" x=\"194\" y=\"80\" text-anchor=\"middle\">copia</text>\n<text class=\"ds\" x=\"190\" y=\"146\" text-anchor=\"middle\">Dos cajas: cambiar la de la derecha</text>\n<text class=\"ds\" x=\"190\" y=\"164\" text-anchor=\"middle\">no toca la de la izquierda.</text>\n<rect class=\"bxg\" x=\"420\" y=\"40\" width=\"340\" height=\"80\" rx=\"6\"></rect><text class=\"ds\" x=\"430\" y=\"56\" dominant-baseline=\"central\">main</text>\n<rect class=\"bxa\" x=\"470\" y=\"70\" width=\"90\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"515\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">p = 8</text>\n<rect class=\"bxa\" x=\"620\" y=\"70\" width=\"90\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"665\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">q = 3</text>\n<rect class=\"bxg\" x=\"420\" y=\"150\" width=\"340\" height=\"66\" rx=\"6\"></rect><text class=\"ds\" x=\"430\" y=\"166\" dominant-baseline=\"central\">intercanvia</text>\n<text class=\"dm\" x=\"515\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"central\">&amp;a</text><text class=\"dm\" x=\"665\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"central\">&amp;b</text>\n<text class=\"dm\" x=\"590\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"central\">aux = 3</text>\n<path class=\"lna\" d=\"M515 180 V110\" marker-end=\"url(#aha)\"></path><path class=\"lna\" d=\"M665 180 V110\" marker-end=\"url(#aha)\"></path>\n<text class=\"ds\" x=\"590\" y=\"238\" text-anchor=\"middle\">a y b no tienen caja propia: son otros nombres de p y q</text>\n</svg></div>\n<figcaption>Por valor hay dos variables; por referencia, una sola con dos nombres. En la traza, los parámetros por referencia aparecen como alias de la variable del <code>main</code>.</figcaption>\n</figure>"
    ]
   },
   {
    "t": "table",
    "head": [
     "",
     [
      "Per valor `int x`",
      "Por valor `int x`"
     ],
     [
      "Per referència `int &x`",
      "Por referencia `int &x`"
     ]
    ],
    "rows": [
     [
      [
       "Què rep",
       "Qué recibe"
      ],
      [
       "una còpia del valor",
       "una copia del valor"
      ],
      [
       "la mateixa variable",
       "la misma variable"
      ]
     ],
     [
      [
       "Si es modifica dins",
       "Si se modifica dentro"
      ],
      [
       "l'original no canvia",
       "el original no cambia"
      ],
      [
       "l'original canvia",
       "el original cambia"
      ]
     ],
     [
      [
       "Argument possible",
       "Argumento posible"
      ],
      [
       "qualsevol expressió: `f(3)`, `f(a + 1)`",
       "cualquier expresión: `f(3)`, `f(a + 1)`"
      ],
      [
       "només una variable: `f(a)` (no `f(3)`)",
       "solo una variable: `f(a)` (no `f(3)`)"
      ]
     ],
     [
      [
       "Quan es fa servir",
       "Cuándo se usa"
      ],
      [
       "dades d'entrada",
       "datos de entrada"
      ],
      [
       "resultats (sortida) o dades que cal modificar",
       "resultados (salida) o datos que hay que modificar"
      ]
     ]
    ]
   },
   {
    "t": "warn",
    "title": [
     "L'& oblidat",
     "El & olvidado"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si escriviu `void intercanvia(int a, int b)` sense `&`, el programa compila i s'executa sense cap error… però no intercanvia res: les còpies s'intercanvien i desapareixen. Quan un procediment «no fa res», mireu primer si hi falta un `&`.",
       "Si escribís `void intercanvia(int a, int b)` sin `&`, el programa compila y se ejecuta sin ningún error… pero no intercambia nada: las copias se intercambian y desaparecen. Cuando un procedimiento «no hace nada», mirad primero si le falta un `&`."
      ]
     }
    ]
   }
  ],
  "s7-6": [
   {
    "t": "p",
    "x": [
     "Un `return` només pot tornar un valor. Quan un subprograma ha de produir-ne dos (o més), es fa un procediment amb un paràmetre **per referència** per a cada resultat. Exemple: el quocient i el residu d'una divisió entera calculats **restant**, sense fer servir `/` ni `%`: el quocient és quantes vegades es pot restar el divisor.",
     "Un `return` solo puede devolver un valor. Cuando un subprograma tiene que producir dos (o más), se hace un procedimiento con un parámetro **por referencia** para cada resultado. Ejemplo: el cociente y el resto de una división entera calculados **restando**, sin usar `/` ni `%`: el cociente es el número de veces que se puede restar el divisor."
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "quocient_resta.cpp",
     "run": true,
     "trace": true,
     "in": "17 5"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\n// dvdnt, dvsr: dades (per valor).  Q, R: resultats (per referència).\nvoid quocientEnterResta(int dvdnt, int dvsr, int &Q, int &R) {\n    Q = 0;\n    R = dvdnt;\n    while (R >= dvsr) {          // mentre encara hi càpiga el divisor\n        R = R - dvsr;\n        Q++;\n    }\n}\n\nint main() {\n    int a, b, q, r;\n    cin >> a >> b;               // a >= 0, b > 0\n    quocientEnterResta(a, b, q, r);\n    cout << a << \" = \" << b << \" * \" << q << \" + \" << r << endl;\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\n// dvdnt, dvsr: datos (por valor).  Q, R: resultados (por referencia).\nvoid quocientEnterResta(int dvdnt, int dvsr, int &Q, int &R) {\n    Q = 0;\n    R = dvdnt;\n    while (R >= dvsr) {          // mientras todavía quepa el divisor\n        R = R - dvsr;\n        Q++;\n    }\n}\n\nint main() {\n    int a, b, q, r;\n    cin >> a >> b;               // a >= 0, b > 0\n    quocientEnterResta(a, b, q, r);\n    cout << a << \" = \" << b << \" * \" << q << \" + \" << r << endl;\n    return 0;\n}"
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Traça de quocientEnterResta(17, 5, q, r).</caption>\n<thead><tr><th>Pas</th><th class=\"c\">R ≥ 5?</th><th class=\"c\">R</th><th class=\"c\">Q</th></tr></thead>\n<tbody>\n<tr><td>inici</td><td class=\"c\">—</td><td class=\"c\">17</td><td class=\"c\">0</td></tr>\n<tr><td>1a resta</td><td class=\"c ip-v\">17 ≥ 5</td><td class=\"c hl\">12</td><td class=\"c hl\">1</td></tr>\n<tr><td>2a resta</td><td class=\"c ip-v\">12 ≥ 5</td><td class=\"c hl\">7</td><td class=\"c hl\">2</td></tr>\n<tr><td>3a resta</td><td class=\"c ip-v\">7 ≥ 5</td><td class=\"c hl\">2</td><td class=\"c hl\">3</td></tr>\n<tr><td>surt</td><td class=\"c ip-f\">2 &lt; 5</td><td class=\"c\">2</td><td class=\"c\">3</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Traza de quocientEnterResta(17, 5, q, r).</caption>\n<thead><tr><th>Paso</th><th class=\"c\">¿R ≥ 5?</th><th class=\"c\">R</th><th class=\"c\">Q</th></tr></thead>\n<tbody>\n<tr><td>inicio</td><td class=\"c\">—</td><td class=\"c\">17</td><td class=\"c\">0</td></tr>\n<tr><td>1.ª resta</td><td class=\"c ip-v\">17 ≥ 5</td><td class=\"c hl\">12</td><td class=\"c hl\">1</td></tr>\n<tr><td>2.ª resta</td><td class=\"c ip-v\">12 ≥ 5</td><td class=\"c hl\">7</td><td class=\"c hl\">2</td></tr>\n<tr><td>3.ª resta</td><td class=\"c ip-v\">7 ≥ 5</td><td class=\"c hl\">2</td><td class=\"c hl\">3</td></tr>\n<tr><td>sale</td><td class=\"c ip-f\">2 &lt; 5</td><td class=\"c\">2</td><td class=\"c\">3</td></tr>\n</tbody>\n</table></div>"
    ]
   },
   {
    "t": "p",
    "x": [
     "Com que `Q` i `R` són referències a `q` i `r` del `main`, en acabar el procediment el `main` ja té els dos resultats: 17 = 5 · 3 + 2.",
     "Como `Q` y `R` son referencias a `q` y `r` del `main`, al terminar el procedimiento el `main` ya tiene los dos resultados: 17 = 5 · 3 + 2."
    ]
   }
  ],
  "s7-7": [
   {
    "t": "p",
    "x": [
     "El programa de la setmana 6, amb cada acció del disseny convertida en una funció. Compareu el `main` amb el nivell 1 del disseny: és pràcticament el mateix text.",
     "El programa de la semana 6, con cada acción del diseño convertida en una función. Comparad el `main` con el nivel 1 del diseño: es prácticamente el mismo texto."
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "perfectes_modular.cpp",
     "run": true,
     "trace": true,
     "in": "30"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\n// Nivell 3: suma de tots els divisors de X (X inclòs)\nint sumaDelsDivisors(int X) {\n    int SD = 0;\n    for (int P = 1; P <= X; P++) {\n        if (X % P == 0) {\n            SD = SD + P;\n        }\n    }\n    return SD;\n}\n\n// Nivell 2: decidir si X és perfecte\nbool esPerfecte(int X) {\n    return sumaDelsDivisors(X) - X == X;\n}\n\n// Nivell 1: recórrer els candidats\nint main() {\n    int LIMIT;\n    cin >> LIMIT;\n    int X = 1;\n    while (X < LIMIT) {\n        if (esPerfecte(X)) {\n            cout << X << \" \";\n        }\n        X++;\n    }\n    cout << endl;\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\n// Nivel 3: suma de todos los divisores de X (X incluido)\nint sumaDelsDivisors(int X) {\n    int SD = 0;\n    for (int P = 1; P <= X; P++) {\n        if (X % P == 0) {\n            SD = SD + P;\n        }\n    }\n    return SD;\n}\n\n// Nivel 2: decidir si X es perfecto\nbool esPerfecte(int X) {\n    return sumaDelsDivisors(X) - X == X;\n}\n\n// Nivel 1: recorrer los candidatos\nint main() {\n    int LIMIT;\n    cin >> LIMIT;\n    int X = 1;\n    while (X < LIMIT) {\n        if (esPerfecte(X)) {\n            cout << X << \" \";\n        }\n        X++;\n    }\n    cout << endl;\n    return 0;\n}"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "`SD` ara és una variable **local** de `sumaDelsDivisors`: es crea a cada crida amb valor 0. L'error de la setmana 6 (inicialitzar-la fora del bucle) ja no és possible.",
      "`SD` ahora es una variable **local** de `sumaDelsDivisors`: se crea en cada llamada con valor 0. El error de la semana 6 (inicializarla fuera del bucle) ya no es posible."
     ],
     [
      "`esPerfecte` retorna un `bool`: el resultat d'una comparació és directament cert o fals, i per això es pot escriure `return expressió;` sense cap `if`.",
      "`esPerfecte` devuelve un `bool`: el resultado de una comparación es directamente cierto o falso, y por eso se puede escribir `return expressió;` sin ningún `if`."
     ],
     [
      "Per millorar el càlcul dels divisors (per exemple, fins a X / 2), només cal tocar `sumaDelsDivisors`.",
      "Para mejorar el cálculo de los divisores (por ejemplo, hasta X / 2), solo hay que tocar `sumaDelsDivisors`."
     ]
    ]
   }
  ],
  "s7-8": [
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
       "Feu la divisió real de dos enters A i B (que poden ser negatius) amb N decimals, **sense fer servir els operadors `/` ni `%`**: només restant, com quocientEnterResta. Si el divisor és 0, escriviu `Divisio impossible: el divisor es zero`.",
       "Haced la división real de dos enteros A y B (que pueden ser negativos) con N decimales, **sin usar los operadores `/` ni `%`**: solo restando, como quocientEnterResta. Si el divisor es 0, escribid `Divisio impossible: el divisor es zero`."
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "Disseny descendent i mòduls",
     "Diseño descendente y módulos"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Acció",
      "Acción"
     ],
     "Subprograma",
     [
      "Rep",
      "Recibe"
     ],
     [
      "Torna",
      "Devuelve"
     ]
    ],
    "rows": [
     [
      [
       "Signe del resultat",
       "Signo del resultado"
      ],
      "`int signe(int x)`",
      [
       "un enter",
       "un entero"
      ],
      [
       "−1 si és negatiu, 1 si no",
       "−1 si es negativo, 1 si no"
      ]
     ],
     [
      [
       "Treballar sense signes",
       "Trabajar sin signos"
      ],
      "`int valorAbsolut(int x)`",
      [
       "un enter",
       "un entero"
      ],
      [
       "el valor sense signe",
       "el valor sin signo"
      ]
     ],
     [
      [
       "Part entera i cada decimal",
       "Parte entera y cada decimal"
      ],
      "`void quocientEnterResta(…)`",
      [
       "dividend i divisor",
       "dividendo y divisor"
      ],
      [
       "Q i R per referència",
       "Q y R por referencia"
      ]
     ]
    ]
   },
   {
    "t": "h",
    "x": [
     "La idea: la divisió llarga de l'escola",
     "La idea: la división larga de la escuela"
    ]
   },
   {
    "t": "p",
    "x": [
     "Després de la part entera, cada decimal s'obté igual: es multiplica el residu per 10 i es torna a dividir. El nou quocient és la xifra decimal i el nou residu serveix per a la xifra següent.",
     "Después de la parte entera, cada decimal se obtiene igual: se multiplica el resto por 10 y se vuelve a dividir. El nuevo cociente es la cifra decimal y el nuevo resto sirve para la cifra siguiente."
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>22 / 7 amb 4 decimals.</caption>\n<thead><tr><th>Pas</th><th class=\"c\">Dividend</th><th class=\"c\">Q (xifra)</th><th class=\"c\">R</th><th>Resultat parcial</th></tr></thead>\n<tbody>\n<tr><td>Part entera</td><td class=\"c\">22</td><td class=\"c hl\">3</td><td class=\"c\">1</td><td>3.</td></tr>\n<tr><td>1r decimal</td><td class=\"c\">1 · 10 = 10</td><td class=\"c hl\">1</td><td class=\"c\">3</td><td>3.1</td></tr>\n<tr><td>2n decimal</td><td class=\"c\">3 · 10 = 30</td><td class=\"c hl\">4</td><td class=\"c\">2</td><td>3.14</td></tr>\n<tr><td>3r decimal</td><td class=\"c\">2 · 10 = 20</td><td class=\"c hl\">2</td><td class=\"c\">6</td><td>3.142</td></tr>\n<tr><td>4t decimal</td><td class=\"c\">6 · 10 = 60</td><td class=\"c hl\">8</td><td class=\"c\">4</td><td>3.1428</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>22 / 7 con 4 decimales.</caption>\n<thead><tr><th>Paso</th><th class=\"c\">Dividendo</th><th class=\"c\">Q (cifra)</th><th class=\"c\">R</th><th>Resultado parcial</th></tr></thead>\n<tbody>\n<tr><td>Parte entera</td><td class=\"c\">22</td><td class=\"c hl\">3</td><td class=\"c\">1</td><td>3.</td></tr>\n<tr><td>1.er decimal</td><td class=\"c\">1 · 10 = 10</td><td class=\"c hl\">1</td><td class=\"c\">3</td><td>3.1</td></tr>\n<tr><td>2.º decimal</td><td class=\"c\">3 · 10 = 30</td><td class=\"c hl\">4</td><td class=\"c\">2</td><td>3.14</td></tr>\n<tr><td>3.er decimal</td><td class=\"c\">2 · 10 = 20</td><td class=\"c hl\">2</td><td class=\"c\">6</td><td>3.142</td></tr>\n<tr><td>4.º decimal</td><td class=\"c\">6 · 10 = 60</td><td class=\"c hl\">8</td><td class=\"c\">4</td><td>3.1428</td></tr>\n</tbody>\n</table></div>"
    ]
   },
   {
    "t": "h",
    "x": "El programa"
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "dividint_restant.cpp",
     "run": true,
     "trace": true,
     "in": "22 7 4"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nint signe(int x) {\n    if (x < 0) {\n        return -1;\n    } else {\n        return 1;\n    }\n}\n\nint valorAbsolut(int x) {\n    if (x < 0) {\n        return -x;\n    } else {\n        return x;\n    }\n}\n\nvoid quocientEnterResta(int dvdnt, int dvsr, int &Q, int &R) {\n    Q = 0;\n    R = dvdnt;\n    while (R >= dvsr) {\n        R = R - dvsr;\n        Q++;\n    }\n}\n\nint main() {\n    int A, B, N;\n    cin >> A >> B >> N;                    // N >= 1 decimals\n    if (B == 0) {\n        cout << \"Divisio impossible: el divisor es zero\" << endl;\n    } else {\n        int s = signe(A) * signe(B);       // signe del resultat\n        int a = valorAbsolut(A);\n        int b = valorAbsolut(B);\n        int Q, R;\n        quocientEnterResta(a, b, Q, R);    // part entera\n        if (s < 0 && (Q != 0 || R != 0)) {\n            cout << \"-\";\n        }\n        cout << Q << \".\";\n        for (int i = 1; i <= N; i++) {     // cada decimal\n            int dividend = R * 10;\n            int xifra;\n            quocientEnterResta(dividend, b, xifra, R);\n            cout << xifra;\n        }\n        cout << endl;\n    }\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint signe(int x) {\n    if (x < 0) {\n        return -1;\n    } else {\n        return 1;\n    }\n}\n\nint valorAbsolut(int x) {\n    if (x < 0) {\n        return -x;\n    } else {\n        return x;\n    }\n}\n\nvoid quocientEnterResta(int dvdnt, int dvsr, int &Q, int &R) {\n    Q = 0;\n    R = dvdnt;\n    while (R >= dvsr) {\n        R = R - dvsr;\n        Q++;\n    }\n}\n\nint main() {\n    int A, B, N;\n    cin >> A >> B >> N;                    // N >= 1 decimales\n    if (B == 0) {\n        cout << \"Divisio impossible: el divisor es zero\" << endl;\n    } else {\n        int s = signe(A) * signe(B);       // signo del resultado\n        int a = valorAbsolut(A);\n        int b = valorAbsolut(B);\n        int Q, R;\n        quocientEnterResta(a, b, Q, R);    // parte entera\n        if (s < 0 && (Q != 0 || R != 0)) {\n            cout << \"-\";\n        }\n        cout << Q << \".\";\n        for (int i = 1; i <= N; i++) {     // cada decimal\n            int dividend = R * 10;\n            int xifra;\n            quocientEnterResta(dividend, b, xifra, R);\n            cout << xifra;\n        }\n        cout << endl;\n    }\n    return 0;\n}"
    ]
   },
   {
    "t": "p",
    "x": [
     "Proveu `-7 2 3` (−3.500), `1 -3 5` (−0.33333), `0 5 2` (0.00) i `5 0 2`. Fixeu-vos que el mateix procediment es crida en dos llocs amb arguments diferents: per a la part entera i per a cada decimal.",
     "Probad `-7 2 3` (−3.500), `1 -3 5` (−0.33333), `0 5 2` (0.00) y `5 0 2`. Fijaos en que el mismo procedimiento se llama en dos lugares con argumentos diferentes: para la parte entera y para cada decimal."
    ]
   },
   {
    "t": "tip",
    "title": [
     "Per què es treballa amb valors absoluts",
     "Por qué se trabaja con valores absolutos"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "quocientEnterResta resta mentre `R >= dvsr`: amb un dividend negatiu no entraria mai al bucle, i amb un divisor negatiu no en sortiria mai. Separar el signe del valor fa que el procediment només hagi de saber dividir naturals, i el signe s'afegeix al final.",
       "quocientEnterResta resta mientras `R >= dvsr`: con un dividendo negativo no entraría nunca en el bucle, y con un divisor negativo no saldría nunca. Separar el signo del valor hace que el procedimiento solo tenga que saber dividir naturales, y el signo se añade al final."
      ]
     }
    ]
   }
  ],
  "s7-9": [
   {
    "t": "table",
    "head": [
     "Error",
     [
      "Què passa",
      "Qué pasa"
     ],
     [
      "Solució",
      "Solución"
     ]
    ],
    "rows": [
     [
      [
       "Falta `&` en un paràmetre de sortida",
       "Falta `&` en un parámetro de salida"
      ],
      [
       "Compila, però el resultat no arriba al `main`.",
       "Compila, pero el resultado no llega al `main`."
      ],
      "`int &Q`"
     ],
     [
      [
       "Una funció no retorna en tots els camins",
       "Una función no devuelve un valor en todos los caminos"
      ],
      [
       "Resultat imprevisible (el compilador avisa).",
       "Resultado imprevisible (el compilador avisa)."
      ],
      [
       "Un `return` a cada branca, o un al final.",
       "Un `return` en cada rama, o uno al final."
      ]
     ],
     [
      [
       "Es fa `cout` dins de la funció en lloc de `return`",
       "Se hace `cout` dentro de la función en lugar de `return`"
      ],
      [
       "El valor s'escriu però no es pot fer servir en càlculs.",
       "El valor se escribe, pero no se puede usar en cálculos."
      ],
      [
       "Les funcions calculen; qui escriu és el `main`.",
       "Las funciones calculan; quien escribe es el `main`."
      ]
     ],
     [
      [
       "Es crida la funció i s'ignora el resultat: `max2(a, b);`",
       "Se llama a la función y se ignora el resultado: `max2(a, b);`"
      ],
      [
       "El valor es perd.",
       "El valor se pierde."
      ],
      "`m = max2(a, b);`"
     ],
     [
      [
       "Es fa servir dins de la funció una variable del `main`",
       "Se usa dentro de la función una variable del `main`"
      ],
      [
       "Error: no està declarada en aquest àmbit.",
       "Error: no está declarada en este ámbito."
      ],
      [
       "Passar-la com a paràmetre.",
       "Pasarla como parámetro."
      ]
     ],
     [
      [
       "La funció es defineix després del `main`",
       "La función se define después del `main`"
      ],
      [
       "Error: identificador no declarat.",
       "Error: identificador no declarado."
      ],
      [
       "Definir-la abans o posar el prototip a dalt.",
       "Definirla antes o poner el prototipo arriba."
      ]
     ],
     [
      [
       "Es passa un literal per referència: `intercanvia(3, x)`",
       "Se pasa un literal por referencia: `intercanvia(3, x)`"
      ],
      [
       "Error de compilació.",
       "Error de compilación."
      ],
      [
       "Per referència només s'hi passen variables.",
       "Por referencia solo se pueden pasar variables."
      ]
     ]
    ]
   }
  ],
  "s7-10": [
   {
    "t": "p",
    "x": [
     "A CodeRunner, els qüestionaris Q01–Q20 de funcions i procediments. Aquí en teniu una selecció per practicar, amb compilador i proves (es valora que feu servir subprogrames):",
     "En CodeRunner, los cuestionarios Q01–Q20 de funciones y procedimientos. Aquí tenéis una selección para practicar, con compilador y pruebas (se valora que uséis subprogramas):"
    ]
   },
   {
    "t": "lab",
    "id": "exlist",
    "props": {
     "wk": 7
    }
   }
  ],
  "s7-11": [
   {
    "t": "check",
    "ex": {
     "id": "s7-11-q1",
     "qb": [
      {
       "t": "p",
       "x": [
        "Què escriu aquest programa?",
        "¿Qué escribe este programa?"
       ]
      },
      {
       "t": "code",
       "lang": "txt",
       "src": "void doble(int n) { n = n * 2; }\nint main() {\n    int a = 5;\n    doble(a);\n    cout << a;\n}"
      }
     ],
     "type": "mcq",
     "opts": [
      "10",
      "5",
      "0",
      [
       "Error de compilació",
       "Error de compilación"
      ]
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "`n` és una còpia (pas per valor). Per modificar `a` caldria `void doble(int &n)`, o bé una funció que retorni el doble: `a = doble(a);`.",
        "`n` es una copia (paso por valor). Para modificar `a` haría falta `void doble(int &n)`, o bien una función que devuelva el doble: `a = doble(a);`."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s7-11-q2",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quina capçalera és la més adequada per a un subprograma que, donats els segons totals, calcula les hores, els minuts i els segons?",
        "¿Qué cabecera es la más adecuada para un subprograma que, dados los segundos totales, calcula las horas, los minutos y los segundos?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "`int convertir(int t)`",
      "`void convertir(int t, int h, int m, int s)`",
      "`int convertir(int &t, int h, int m, int s)`",
      "`void convertir(int t, int &h, int &m, int &s)`"
     ],
     "answer": 3,
     "sol": [
      {
       "t": "p",
       "x": [
        "Una dada d'entrada (per valor) i tres resultats (per referència). Un `return` només en podria tornar un.",
        "Un dato de entrada (por valor) y tres resultados (por referencia). Un `return` solo podría devolver uno."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s7-11-q3",
     "qb": [
      {
       "t": "p",
       "x": [
        "Amb `void intercanvia(int &a, int &b)`, quina crida **no** compila?",
        "Con `void intercanvia(int &a, int &b)`, ¿qué llamada **no** compila?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "`intercanvia(x, 3);`",
      "`intercanvia(x, y);`",
      "`intercanvia(y, x);`",
      "`intercanvia(x, x);`"
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "Un paràmetre per referència necessita una variable on escriure. El 3 és un literal: no és una variable.",
        "Un parámetro por referencia necesita una variable donde escribir. El 3 es un literal: no es una variable."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s7-11-q4",
     "qb": [
      {
       "t": "p",
       "x": [
        "Què retorna `f(7)`?",
        "¿Qué devuelve `f(7)`?"
       ]
      },
      {
       "t": "code",
       "lang": "txt",
       "src": "int f(int x) {\n    if (x > 5) return 1;\n    return 2;\n    return 3;\n}"
      }
     ],
     "type": "mcq",
     "opts": [
      "2",
      "3",
      "1",
      [
       "1, després 2",
       "1, después 2"
      ]
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "7 > 5: s'executa `return 1` i la funció s'acaba en aquell moment. Les línies següents no s'arriben a executar.",
        "7 > 5: se ejecuta `return 1` y la función termina en ese momento. Las líneas siguientes no llegan a ejecutarse."
       ]
      }
     ]
    }
   }
  ],
  "s7-12": [
   {
    "t": "summary",
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Funció: calcula i **retorna** un valor (`return`). Procediment: `void`, fa una feina.",
        "Función: calcula y **devuelve** un valor (`return`). Procedimiento: `void`, hace una tarea."
       ],
       [
        "Paràmetres a la definició, arguments a la crida: mateix nombre, ordre i tipus.",
        "Parámetros en la definición, argumentos en la llamada: mismo número, orden y tipo."
       ],
       [
        "Per valor (`int x`): una còpia, per a les dades. Per referència (`int &x`): la mateixa variable, per als resultats o el que cal modificar.",
        "Por valor (`int x`): una copia, para los datos. Por referencia (`int &x`): la misma variable, para los resultados o lo que hay que modificar."
       ],
       [
        "Per tornar més d'un resultat: un procediment amb un paràmetre per referència per a cada resultat.",
        "Para devolver más de un resultado: un procedimiento con un parámetro por referencia para cada resultado."
       ],
       [
        "Cada acció del disseny descendent pot ser un subprograma; el `main` queda com el nivell 1.",
        "Cada acción del diseño descendente puede ser un subprograma; el `main` queda como el nivel 1."
       ]
      ]
     }
    ]
   }
  ]
 },
 "examEnd": []
};
