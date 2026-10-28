// Generat per tools/kit-import/prog.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Funcions, procediments, pas per valor i per referència. Exemples: Nombres Perfectes modular i Dividint Restant amb Decimals.",
    "Funciones, procedimientos, paso por valor y por referencia. Ejemplos: Números Perfectos modular y Dividiendo Restando con Decimales.",
    "Functions, procedures, pass by value and by reference. Examples: modular Perfect Numbers and Dividing by Subtracting with Decimals."
   ]
  },
  {
   "t": "list",
   "items": [
    [
     "**Sessions:** Dl. 19/10 i dc. 21/10",
     "**Sesiones:** Lu. 19/10 y mi. 21/10",
     "**Sessions:** Mon 19/10 and Wed 21/10"
    ],
    [
     "**Teoria associada:** Tema 3.2 (programació modular)",
     "**Teoría asociada:** Tema 3.2 (programación modular)",
     "**Related theory:** Unit 3.2 (modular programming)"
    ]
   ]
  },
  {
   "t": "p",
   "x": [
    "La setmana passada vam dividir els problemes en accions. Aquesta setmana cada acció es converteix en un **subprograma** amb nom propi: una **funció** si calcula un valor, o un **procediment** si fa una feina. El `main` queda tan clar com el nivell 1 del disseny, i cada peça es pot provar i reutilitzar per separat.",
    "La semana pasada dividimos los problemas en acciones. Esta semana cada acción se convierte en un **subprograma** con nombre propio: una **función** si calcula un valor, o un **procedimiento** si hace una tarea. El `main` queda tan claro como el nivel 1 del diseño, y cada pieza se puede probar y reutilizar por separado.",
    "Last week we divided problems into actions. This week each action becomes a **subprogram** with its own name: a **function** if it computes a value, or a **procedure** if it does a task. `main` becomes as clear as level 1 of the design, and each piece can be tested and reused separately."
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
       "Definir i cridar funcions que retornen un valor (`return`) i procediments (`void`).",
       "Definir y llamar funciones que devuelven un valor (`return`) y procedimientos (`void`).",
       "Define and call functions that return a value (`return`) and procedures (`void`)."
      ],
      [
       "Distingir paràmetres i arguments, i saber on viu cada variable.",
       "Distinguir parámetros y argumentos, y saber dónde vive cada variable.",
       "Distinguish parameters from arguments, and know where each variable lives."
      ],
      [
       "Triar entre pas **per valor** (una còpia) i pas **per referència** (`&`, la mateixa variable).",
       "Elegir entre paso **por valor** (una copia) y paso **por referencia** (`&`, la misma variable).",
       "Choose between pass **by value** (a copy) and pass **by reference** (`&`, the same variable)."
      ],
      [
       "Fer que un subprograma torni més d'un resultat amb paràmetres per referència.",
       "Hacer que un subprograma devuelva más de un resultado con parámetros por referencia.",
       "Make a subprogram return more than one result with reference parameters."
      ],
      [
       "Reescriure un programa en mòduls a partir del seu disseny descendent.",
       "Reescribir un programa en módulos a partir de su diseño descendente.",
       "Rewrite a program in modules from its top-down design."
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
     "Queremos el máximo de tres enteros. Sin funciones, la misma comparación se escribe dos veces; con una función `max2`, se escribe una sola vez y se usa tantas veces como haga falta:",
     "We want the maximum of three integers. Without functions, the same comparison is written twice; with a function `max2`, it is written once and used as many times as needed:"
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
     "#include <iostream>\nusing namespace std;\n\n// Devuelve el mayor de a y b\nint max2(int a, int b) {\n    if (a > b) {\n        return a;\n    } else {\n        return b;\n    }\n}\n\nint main() {\n    int x, y, z;\n    cin >> x >> y >> z;\n    int m = max2(max2(x, y), z);      // el máximo de tres, con dos llamadas\n    cout << \"Maxim: \" << m << endl;\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\n// Returns the larger of a and b\nint max2(int a, int b) {\n    if (a > b) {\n        return a;\n    } else {\n        return b;\n    }\n}\n\nint main() {\n    int x, y, z;\n    cin >> x >> y >> z;\n    int m = max2(max2(x, y), z);      // the maximum of three, with two calls\n    cout << \"Maxim: \" << m << endl;\n    return 0;\n}"
    ]
   },
   {
    "t": "p",
    "x": [
     "Amb la traça, observeu que cada crida obre un **marc** nou amb les seves pròpies `a` i `b`, i que en fer `return` el marc desapareix i el valor torna al lloc de la crida.",
     "Con la traza, observad que cada llamada abre un **marco** nuevo con sus propias `a` y `b`, y que al hacer `return` el marco desaparece y el valor vuelve al lugar de la llamada.",
     "With the trace, notice that each call opens a new **frame** with its own `a` and `b`, and that on `return` the frame disappears and the value goes back to where the call was."
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Avantatge",
      "Ventaja",
      "Advantage"
     ],
     [
      "Què vol dir",
      "Qué significa",
      "What it means"
     ]
    ],
    "rows": [
     [
      [
       "No repetir codi",
       "No repetir código",
       "Not repeating code"
      ],
      [
       "Una correcció es fa en un sol lloc.",
       "Una corrección se hace en un solo lugar.",
       "A fix is made in a single place."
      ]
     ],
     [
      [
       "Llegibilitat",
       "Legibilidad",
       "Readability"
      ],
      [
       "`max2(max2(x, y), z)` es llegeix com l'enunciat.",
       "`max2(max2(x, y), z)` se lee como el enunciado.",
       "`max2(max2(x, y), z)` reads like the statement."
      ]
     ],
     [
      [
       "Provar per parts",
       "Probar por partes",
       "Testing piece by piece"
      ],
      [
       "Cada funció es prova sola abans de muntar el programa.",
       "Cada función se prueba sola antes de montar el programa.",
       "Each function is tested on its own before assembling the program."
      ]
     ],
     [
      [
       "Reutilitzar",
       "Reutilizar",
       "Reuse"
      ],
      [
       "`max2` serveix per a qualsevol altre programa.",
       "`max2` sirve para cualquier otro programa.",
       "`max2` works for any other program."
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
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 760 220\" role=\"img\" aria-label=\"Partes de la definición de una función y de una llamada\" role=\"img\">\n<text class=\"ds\" x=\"68\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"central\">tipo del resultado</text>\n<text class=\"ds\" x=\"282\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"central\">parámetros (los datos que recibe)</text>\n<path class=\"ln\" d=\"M68 20 V30\"></path><path class=\"ln\" d=\"M282 20 V30\"></path>\n<rect class=\"bxq\" x=\"40\" y=\"32\" width=\"56\" height=\"34\" rx=\"4\"></rect><text class=\"dm\" x=\"68\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"central\">int</text>\n<rect class=\"bxa\" x=\"106\" y=\"32\" width=\"76\" height=\"34\" rx=\"4\"></rect><text class=\"dm\" x=\"144\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"central\">max2</text>\n<text class=\"dm\" x=\"190\" y=\"49\" dominant-baseline=\"central\">(</text>\n<rect class=\"bxw\" x=\"202\" y=\"32\" width=\"160\" height=\"34\" rx=\"4\"></rect><text class=\"dm\" x=\"282\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"central\">int a, int b</text>\n<text class=\"dm\" x=\"370\" y=\"49\" dominant-baseline=\"central\">) {</text>\n<text class=\"ds\" x=\"144\" y=\"82\" text-anchor=\"middle\" dominant-baseline=\"central\">nombre</text>\n<rect class=\"bxg\" x=\"60\" y=\"98\" width=\"320\" height=\"76\" rx=\"4\"></rect>\n<text class=\"dm\" x=\"76\" y=\"118\" dominant-baseline=\"central\">if (a &gt; b) return a;</text>\n<text class=\"dm\" x=\"76\" y=\"140\" dominant-baseline=\"central\">else return b;</text>\n<text class=\"ds\" x=\"76\" y=\"162\" dominant-baseline=\"central\">cuerpo: return devuelve el valor y acaba</text>\n<text class=\"dm\" x=\"40\" y=\"196\" dominant-baseline=\"central\">}</text>\n<rect class=\"bxg\" x=\"440\" y=\"32\" width=\"300\" height=\"76\" rx=\"4\"></rect>\n<text class=\"ds\" x=\"456\" y=\"50\" dominant-baseline=\"central\">Llamada, dentro del main:</text>\n<text class=\"dm\" x=\"456\" y=\"80\" dominant-baseline=\"central\">int m = max2(x, 5);</text>\n<text class=\"ds\" x=\"456\" y=\"132\" dominant-baseline=\"central\">x y 5 son los argumentos:</text>\n<text class=\"ds\" x=\"456\" y=\"150\" dominant-baseline=\"central\">x se copia en a, y 5 se copia en b.</text>\n<text class=\"ds\" x=\"456\" y=\"176\" dominant-baseline=\"central\">El valor del return se guarda en m.</text>\n</svg></div>\n<figcaption>La definición dice qué recibe y qué devuelve la función; la llamada le da valores concretos y usa el resultado.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 760 220\" role=\"img\" aria-label=\"Parts of a function definition and of a call\" role=\"img\">\n<text class=\"ds\" x=\"68\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"central\">result type</text>\n<text class=\"ds\" x=\"282\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"central\">parameters (the data it receives)</text>\n<path class=\"ln\" d=\"M68 20 V30\"></path><path class=\"ln\" d=\"M282 20 V30\"></path>\n<rect class=\"bxq\" x=\"40\" y=\"32\" width=\"56\" height=\"34\" rx=\"4\"></rect><text class=\"dm\" x=\"68\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"central\">int</text>\n<rect class=\"bxa\" x=\"106\" y=\"32\" width=\"76\" height=\"34\" rx=\"4\"></rect><text class=\"dm\" x=\"144\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"central\">max2</text>\n<text class=\"dm\" x=\"190\" y=\"49\" dominant-baseline=\"central\">(</text>\n<rect class=\"bxw\" x=\"202\" y=\"32\" width=\"160\" height=\"34\" rx=\"4\"></rect><text class=\"dm\" x=\"282\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"central\">int a, int b</text>\n<text class=\"dm\" x=\"370\" y=\"49\" dominant-baseline=\"central\">) {</text>\n<text class=\"ds\" x=\"144\" y=\"82\" text-anchor=\"middle\" dominant-baseline=\"central\">name</text>\n<rect class=\"bxg\" x=\"60\" y=\"98\" width=\"320\" height=\"76\" rx=\"4\"></rect>\n<text class=\"dm\" x=\"76\" y=\"118\" dominant-baseline=\"central\">if (a &gt; b) return a;</text>\n<text class=\"dm\" x=\"76\" y=\"140\" dominant-baseline=\"central\">else return b;</text>\n<text class=\"ds\" x=\"76\" y=\"162\" dominant-baseline=\"central\">body: return gives back the value and ends</text>\n<text class=\"dm\" x=\"40\" y=\"196\" dominant-baseline=\"central\">}</text>\n<rect class=\"bxg\" x=\"440\" y=\"32\" width=\"300\" height=\"76\" rx=\"4\"></rect>\n<text class=\"ds\" x=\"456\" y=\"50\" dominant-baseline=\"central\">Call, inside main:</text>\n<text class=\"dm\" x=\"456\" y=\"80\" dominant-baseline=\"central\">int m = max2(x, 5);</text>\n<text class=\"ds\" x=\"456\" y=\"132\" dominant-baseline=\"central\">x and 5 are the arguments:</text>\n<text class=\"ds\" x=\"456\" y=\"150\" dominant-baseline=\"central\">x is copied into a, and 5 is copied into b.</text>\n<text class=\"ds\" x=\"456\" y=\"176\" dominant-baseline=\"central\">The value of the return is stored in m.</text>\n</svg></div>\n<figcaption>The definition says what the function receives and returns; the call gives it specific values and uses the result.</figcaption>\n</figure>"
    ],
    "mode": "explained"
   },
   {
    "t": "list",
    "items": [
     [
      "**Paràmetres** (a la definició): variables locals que reben els valors de la crida. Només existeixen mentre la funció s'executa.",
      "**Parámetros** (en la definición): variables locales que reciben los valores de la llamada. Solo existen mientras la función se ejecuta.",
      "**Parameters** (in the definition): local variables that receive the values of the call. They only exist while the function runs."
     ],
     [
      "**Arguments** (a la crida): els valors concrets. Han de coincidir en **nombre**, **ordre** i **tipus** amb els paràmetres; els noms poden ser diferents.",
      "**Argumentos** (en la llamada): los valores concretos. Tienen que coincidir en **número**, **orden** y **tipo** con los parámetros; los nombres pueden ser diferentes.",
      "**Arguments** (in the call): the specific values. They must match the parameters in **number**, **order** and **type**; the names can be different."
     ],
     [
      "`return expressió;` torna el valor i **acaba** la funció en aquell mateix moment: el que hi ha darrere no s'executa.",
      "`return expressió;` devuelve el valor y **termina** la función en ese mismo momento: lo que hay detrás no se ejecuta.",
      "`return expressió;` returns the value and **ends** the function at that very moment: whatever comes after it does not run."
     ],
     [
      "La funció s'ha de definir **abans** del `main` que la crida (o declarar-ne abans el prototip, `int max2(int a, int b);`).",
      "La función se tiene que definir **antes** del `main` que la llama (o declarar antes su prototipo, `int max2(int a, int b);`).",
      "The function must be defined **before** the `main` that calls it (or its prototype must be declared first, `int max2(int a, int b);`)."
     ]
    ]
   }
  ],
  "s7-3": [
   {
    "t": "p",
    "x": [
     "Un subprograma que no ha de tornar cap valor, sinó fer una feina (escriure, modificar variables), és un **procediment**. En C++ es declara amb el tipus `void` («res») i es crida com una instrucció:",
     "Un subprograma que no tiene que devolver ningún valor, sino hacer una tarea (escribir, modificar variables), es un **procedimiento**. En C++ se declara con el tipo `void` («nada») y se llama como una instrucción:",
     "A subprogram that does not have to return any value, but do a task (write, modify variables), is a **procedure**. In C++ it is declared with the type `void` (“nothing”) and called like an instruction:"
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
     "#include <iostream>\nusing namespace std;\n\n// Procedimiento: escribe una línea de n asteriscos. No devuelve nada.\nvoid escriuLinia(int n) {\n    for (int i = 1; i <= n; i++) {\n        cout << \"*\";\n    }\n    cout << endl;\n}\n\nint main() {\n    int alcada;\n    cin >> alcada;\n    for (int fila = 1; fila <= alcada; fila++) {\n        escriuLinia(fila);            // se llama como una instrucción\n    }\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\n// Procedure: writes a line of n asterisks. It returns nothing.\nvoid escriuLinia(int n) {\n    for (int i = 1; i <= n; i++) {\n        cout << \"*\";\n    }\n    cout << endl;\n}\n\nint main() {\n    int alcada;\n    cin >> alcada;\n    for (int fila = 1; fila <= alcada; fila++) {\n        escriuLinia(fila);            // called like an instruction\n    }\n    return 0;\n}"
    ]
   },
   {
    "t": "table",
    "head": [
     "",
     [
      "Funció",
      "Función",
      "Function"
     ],
     [
      "Procediment",
      "Procedimiento",
      "Procedure"
     ]
    ],
    "rows": [
     [
      [
       "Tipus",
       "Tipo",
       "Type"
      ],
      "`int`, `double`, `bool`, `char`…",
      "`void`"
     ],
     [
      [
       "Acaba amb",
       "Acaba con",
       "Ends with"
      ],
      [
       "`return valor;` (obligatori en tots els camins)",
       "`return valor;` (obligatorio en todos los caminos)",
       "`return valor;` (compulsory on all paths)"
      ],
      [
       "la clau final (o `return;` sense valor)",
       "la llave final (o `return;` sin valor)",
       "the final brace (or `return;` with no value)"
      ]
     ],
     [
      [
       "Es crida",
       "Se llama",
       "It is called"
      ],
      [
       "dins d'una expressió: `m = max2(a, b);`",
       "dentro de una expresión: `m = max2(a, b);`",
       "inside an expression: `m = max2(a, b);`"
      ],
      [
       "com una instrucció: `escriuLinia(5);`",
       "como una instrucción: `escriuLinia(5);`",
       "like an instruction: `escriuLinia(5);`"
      ]
     ],
     [
      [
       "Exemple de nom",
       "Ejemplo de nombre",
       "Example name"
      ],
      [
       "un nom o una pregunta: `sumaDelsDivisors`, `esPrimer`",
       "un sustantivo o una pregunta: `sumaDelsDivisors`, `esPrimer`",
       "a noun or a question: `sumaDelsDivisors`, `esPrimer`"
      ],
      [
       "un verb: `escriuLinia`, `intercanvia`",
       "un verbo: `escriuLinia`, `intercanvia`",
       "a verb: `escriuLinia`, `intercanvia`"
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
     "Por defecto, cada parámetro recibe una **copia** del valor del argumento. Lo que la función haga con la copia no afecta a la variable original:",
     "By default, each parameter receives a **copy** of the argument's value. Whatever the function does with the copy does not affect the original variable:"
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
     "#include <iostream>\nusing namespace std;\n\nvoid noFaRes(int x) {\n    x = 0;                            // cambia la copia, no el original\n    cout << \"Dins: x = \" << x << endl;\n}\n\nint main() {\n    int x;\n    cin >> x;\n    noFaRes(x);\n    cout << \"Fora: x = \" << x << endl;  // sigue valiendo lo que se ha leído\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nvoid noFaRes(int x) {\n    x = 0;                            // changes the copy, not the original\n    cout << \"Dins: x = \" << x << endl;\n}\n\nint main() {\n    int x;\n    cin >> x;\n    noFaRes(x);\n    cout << \"Fora: x = \" << x << endl;  // it still holds what was read\n    return 0;\n}"
    ]
   },
   {
    "t": "p",
    "x": [
     "Encara que les dues variables es diguin `x`, són dues variables diferents, cadascuna en el seu marc. Per a una funció que només ha de **consultar** dades (com `max2`), el pas per valor és el que cal: protegeix les variables del `main`.",
     "Aunque las dos variables se llamen `x`, son dos variables diferentes, cada una en su marco. Para una función que solo tiene que **consultar** datos (como `max2`), el paso por valor es lo adecuado: protege las variables del `main`.",
     "Even though both variables are called `x`, they are two different variables, each in its own frame. For a function that only has to **read** data (like `max2`), pass by value is the right choice: it protects the variables of `main`."
    ]
   }
  ],
  "s7-5": [
   {
    "t": "p",
    "x": [
     "Si el paràmetre porta `&`, no es fa cap còpia: el paràmetre és un **altre nom** per a la mateixa variable de la crida. Tot el que s'hi faci, es fa a l'original. És l'única manera que un procediment modifiqui variables del `main`:",
     "Si el parámetro lleva `&`, no se hace ninguna copia: el parámetro es **otro nombre** para la misma variable de la llamada. Todo lo que se haga con él se hace en el original. Es la única manera de que un procedimiento modifique variables del `main`:",
     "If the parameter has `&`, no copy is made: the parameter is **another name** for the same variable of the call. Everything done with it is done to the original. It is the only way for a procedure to modify variables of `main`:"
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
     "#include <iostream>\nusing namespace std;\n\nvoid intercanvia(int &a, int &b) {    // a y b son alias de p y q\n    int aux = a;\n    a = b;\n    b = aux;\n}\n\nint main() {\n    int p, q;\n    cin >> p >> q;\n    intercanvia(p, q);\n    cout << p << \" \" << q << endl;    // 8 3\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nvoid intercanvia(int &a, int &b) {    // a and b are aliases of p and q\n    int aux = a;\n    a = b;\n    b = aux;\n}\n\nint main() {\n    int p, q;\n    cin >> p >> q;\n    intercanvia(p, q);\n    cout << p << \" \" << q << endl;    // 8 3\n    return 0;\n}"
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 780 250\" role=\"img\" aria-label=\"Per valor, la funció té una còpia; per referència, el paràmetre apunta a la variable del main\" role=\"img\">\n<text class=\"dt db\" x=\"190\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">Per valor: noFaRes(x)</text>\n<text class=\"dt db\" x=\"590\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">Per referència: intercanvia(p, q)</text>\n<rect class=\"bxg\" x=\"20\" y=\"40\" width=\"160\" height=\"80\" rx=\"6\"></rect><text class=\"ds\" x=\"30\" y=\"56\" dominant-baseline=\"central\">main</text>\n<rect class=\"bxa\" x=\"60\" y=\"70\" width=\"80\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"100\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">x = 5</text>\n<rect class=\"bxg\" x=\"210\" y=\"40\" width=\"160\" height=\"80\" rx=\"6\"></rect><text class=\"ds\" x=\"220\" y=\"56\" dominant-baseline=\"central\">noFaRes</text>\n<rect class=\"bxw\" x=\"250\" y=\"70\" width=\"80\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"290\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">x = 0</text>\n<path class=\"lnd\" d=\"M140 88 H248\" marker-end=\"url(#ah)\"></path><text class=\"ds\" x=\"194\" y=\"80\" text-anchor=\"middle\">còpia</text>\n<text class=\"ds\" x=\"190\" y=\"146\" text-anchor=\"middle\">Dues caixes: canviar la de la dreta</text>\n<text class=\"ds\" x=\"190\" y=\"164\" text-anchor=\"middle\">no toca la de l'esquerra.</text>\n<rect class=\"bxg\" x=\"420\" y=\"40\" width=\"340\" height=\"80\" rx=\"6\"></rect><text class=\"ds\" x=\"430\" y=\"56\" dominant-baseline=\"central\">main</text>\n<rect class=\"bxa\" x=\"470\" y=\"70\" width=\"90\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"515\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">p = 8</text>\n<rect class=\"bxa\" x=\"620\" y=\"70\" width=\"90\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"665\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">q = 3</text>\n<rect class=\"bxg\" x=\"420\" y=\"150\" width=\"340\" height=\"66\" rx=\"6\"></rect><text class=\"ds\" x=\"430\" y=\"166\" dominant-baseline=\"central\">intercanvia</text>\n<text class=\"dm\" x=\"515\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"central\">&amp;a</text><text class=\"dm\" x=\"665\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"central\">&amp;b</text>\n<text class=\"dm\" x=\"590\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"central\">aux = 3</text>\n<path class=\"lna\" d=\"M515 180 V110\" marker-end=\"url(#aha)\"></path><path class=\"lna\" d=\"M665 180 V110\" marker-end=\"url(#aha)\"></path>\n<text class=\"ds\" x=\"590\" y=\"238\" text-anchor=\"middle\">a i b no tenen caixa pròpia: són altres noms de p i q</text>\n</svg></div>\n<figcaption>Per valor hi ha dues variables; per referència, una sola amb dos noms. A la traça, els paràmetres per referència apareixen com a àlies de la variable del <code>main</code>.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 780 250\" role=\"img\" aria-label=\"Por valor, la función tiene una copia; por referencia, el parámetro apunta a la variable del main\" role=\"img\">\n<text class=\"dt db\" x=\"190\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">Por valor: noFaRes(x)</text>\n<text class=\"dt db\" x=\"590\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">Por referencia: intercanvia(p, q)</text>\n<rect class=\"bxg\" x=\"20\" y=\"40\" width=\"160\" height=\"80\" rx=\"6\"></rect><text class=\"ds\" x=\"30\" y=\"56\" dominant-baseline=\"central\">main</text>\n<rect class=\"bxa\" x=\"60\" y=\"70\" width=\"80\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"100\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">x = 5</text>\n<rect class=\"bxg\" x=\"210\" y=\"40\" width=\"160\" height=\"80\" rx=\"6\"></rect><text class=\"ds\" x=\"220\" y=\"56\" dominant-baseline=\"central\">noFaRes</text>\n<rect class=\"bxw\" x=\"250\" y=\"70\" width=\"80\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"290\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">x = 0</text>\n<path class=\"lnd\" d=\"M140 88 H248\" marker-end=\"url(#ah)\"></path><text class=\"ds\" x=\"194\" y=\"80\" text-anchor=\"middle\">copia</text>\n<text class=\"ds\" x=\"190\" y=\"146\" text-anchor=\"middle\">Dos cajas: cambiar la de la derecha</text>\n<text class=\"ds\" x=\"190\" y=\"164\" text-anchor=\"middle\">no toca la de la izquierda.</text>\n<rect class=\"bxg\" x=\"420\" y=\"40\" width=\"340\" height=\"80\" rx=\"6\"></rect><text class=\"ds\" x=\"430\" y=\"56\" dominant-baseline=\"central\">main</text>\n<rect class=\"bxa\" x=\"470\" y=\"70\" width=\"90\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"515\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">p = 8</text>\n<rect class=\"bxa\" x=\"620\" y=\"70\" width=\"90\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"665\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">q = 3</text>\n<rect class=\"bxg\" x=\"420\" y=\"150\" width=\"340\" height=\"66\" rx=\"6\"></rect><text class=\"ds\" x=\"430\" y=\"166\" dominant-baseline=\"central\">intercanvia</text>\n<text class=\"dm\" x=\"515\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"central\">&amp;a</text><text class=\"dm\" x=\"665\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"central\">&amp;b</text>\n<text class=\"dm\" x=\"590\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"central\">aux = 3</text>\n<path class=\"lna\" d=\"M515 180 V110\" marker-end=\"url(#aha)\"></path><path class=\"lna\" d=\"M665 180 V110\" marker-end=\"url(#aha)\"></path>\n<text class=\"ds\" x=\"590\" y=\"238\" text-anchor=\"middle\">a y b no tienen caja propia: son otros nombres de p y q</text>\n</svg></div>\n<figcaption>Por valor hay dos variables; por referencia, una sola con dos nombres. En la traza, los parámetros por referencia aparecen como alias de la variable del <code>main</code>.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 780 250\" role=\"img\" aria-label=\"By value, the function has a copy; by reference, the parameter points to the variable of main\" role=\"img\">\n<text class=\"dt db\" x=\"190\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">By value: noFaRes(x)</text>\n<text class=\"dt db\" x=\"590\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">By reference: intercanvia(p, q)</text>\n<rect class=\"bxg\" x=\"20\" y=\"40\" width=\"160\" height=\"80\" rx=\"6\"></rect><text class=\"ds\" x=\"30\" y=\"56\" dominant-baseline=\"central\">main</text>\n<rect class=\"bxa\" x=\"60\" y=\"70\" width=\"80\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"100\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">x = 5</text>\n<rect class=\"bxg\" x=\"210\" y=\"40\" width=\"160\" height=\"80\" rx=\"6\"></rect><text class=\"ds\" x=\"220\" y=\"56\" dominant-baseline=\"central\">noFaRes</text>\n<rect class=\"bxw\" x=\"250\" y=\"70\" width=\"80\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"290\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">x = 0</text>\n<path class=\"lnd\" d=\"M140 88 H248\" marker-end=\"url(#ah)\"></path><text class=\"ds\" x=\"194\" y=\"80\" text-anchor=\"middle\">copy</text>\n<text class=\"ds\" x=\"190\" y=\"146\" text-anchor=\"middle\">Two boxes: changing the one on the right</text>\n<text class=\"ds\" x=\"190\" y=\"164\" text-anchor=\"middle\">does not touch the one on the left.</text>\n<rect class=\"bxg\" x=\"420\" y=\"40\" width=\"340\" height=\"80\" rx=\"6\"></rect><text class=\"ds\" x=\"430\" y=\"56\" dominant-baseline=\"central\">main</text>\n<rect class=\"bxa\" x=\"470\" y=\"70\" width=\"90\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"515\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">p = 8</text>\n<rect class=\"bxa\" x=\"620\" y=\"70\" width=\"90\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"665\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\">q = 3</text>\n<rect class=\"bxg\" x=\"420\" y=\"150\" width=\"340\" height=\"66\" rx=\"6\"></rect><text class=\"ds\" x=\"430\" y=\"166\" dominant-baseline=\"central\">intercanvia</text>\n<text class=\"dm\" x=\"515\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"central\">&amp;a</text><text class=\"dm\" x=\"665\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"central\">&amp;b</text>\n<text class=\"dm\" x=\"590\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"central\">aux = 3</text>\n<path class=\"lna\" d=\"M515 180 V110\" marker-end=\"url(#aha)\"></path><path class=\"lna\" d=\"M665 180 V110\" marker-end=\"url(#aha)\"></path>\n<text class=\"ds\" x=\"590\" y=\"238\" text-anchor=\"middle\">a and b have no box of their own: they are other names for p and q</text>\n</svg></div>\n<figcaption>By value there are two variables; by reference, a single one with two names. In the trace, reference parameters appear as aliases of the <code>main</code> variable.</figcaption>\n</figure>"
    ],
    "mode": "explained"
   },
   {
    "t": "table",
    "head": [
     "",
     [
      "Per valor `int x`",
      "Por valor `int x`",
      "By value `int x`"
     ],
     [
      "Per referència `int &x`",
      "Por referencia `int &x`",
      "By reference `int &x`"
     ]
    ],
    "rows": [
     [
      [
       "Què rep",
       "Qué recibe",
       "What it receives"
      ],
      [
       "una còpia del valor",
       "una copia del valor",
       "a copy of the value"
      ],
      [
       "la mateixa variable",
       "la misma variable",
       "the same variable"
      ]
     ],
     [
      [
       "Si es modifica dins",
       "Si se modifica dentro",
       "If it is modified inside"
      ],
      [
       "l'original no canvia",
       "el original no cambia",
       "the original does not change"
      ],
      [
       "l'original canvia",
       "el original cambia",
       "the original changes"
      ]
     ],
     [
      [
       "Argument possible",
       "Argumento posible",
       "Possible argument"
      ],
      [
       "qualsevol expressió: `f(3)`, `f(a + 1)`",
       "cualquier expresión: `f(3)`, `f(a + 1)`",
       "any expression: `f(3)`, `f(a + 1)`"
      ],
      [
       "només una variable: `f(a)` (no `f(3)`)",
       "solo una variable: `f(a)` (no `f(3)`)",
       "only a variable: `f(a)` (not `f(3)`)"
      ]
     ],
     [
      [
       "Quan es fa servir",
       "Cuándo se usa",
       "When it is used"
      ],
      [
       "dades d'entrada",
       "datos de entrada",
       "input data"
      ],
      [
       "resultats (sortida) o dades que cal modificar",
       "resultados (salida) o datos que hay que modificar",
       "results (output) or data that must be modified"
      ]
     ]
    ]
   },
   {
    "t": "warn",
    "title": [
     "L'& oblidat",
     "El & olvidado",
     "The forgotten &"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si escriviu `void intercanvia(int a, int b)` sense `&`, el programa compila i s'executa sense cap error… però no intercanvia res: les còpies s'intercanvien i desapareixen. Quan un procediment «no fa res», mireu primer si hi falta un `&`.",
       "Si escribís `void intercanvia(int a, int b)` sin `&`, el programa compila y se ejecuta sin ningún error… pero no intercambia nada: las copias se intercambian y desaparecen. Cuando un procedimiento «no hace nada», mirad primero si le falta un `&`.",
       "If you write `void intercanvia(int a, int b)` without `&`, the program compiles and runs without any error… but it swaps nothing: the copies are swapped and disappear. When a procedure “does nothing”, first check whether it is missing a `&`."
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
     "Un `return` solo puede devolver un valor. Cuando un subprograma tiene que producir dos (o más), se hace un procedimiento con un parámetro **por referencia** para cada resultado. Ejemplo: el cociente y el resto de una división entera calculados **restando**, sin usar `/` ni `%`: el cociente es el número de veces que se puede restar el divisor.",
     "A `return` can only give back one value. When a subprogram has to produce two (or more), a procedure is written with a **reference** parameter for each result. Example: the quotient and remainder of an integer division computed **by subtracting**, without using `/` or `%`: the quotient is the number of times the divisor can be subtracted."
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
     "#include <iostream>\nusing namespace std;\n\n// dvdnt, dvsr: datos (por valor).  Q, R: resultados (por referencia).\nvoid quocientEnterResta(int dvdnt, int dvsr, int &Q, int &R) {\n    Q = 0;\n    R = dvdnt;\n    while (R >= dvsr) {          // mientras todavía quepa el divisor\n        R = R - dvsr;\n        Q++;\n    }\n}\n\nint main() {\n    int a, b, q, r;\n    cin >> a >> b;               // a >= 0, b > 0\n    quocientEnterResta(a, b, q, r);\n    cout << a << \" = \" << b << \" * \" << q << \" + \" << r << endl;\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\n// dvdnt, dvsr: data (by value).  Q, R: results (by reference).\nvoid quocientEnterResta(int dvdnt, int dvsr, int &Q, int &R) {\n    Q = 0;\n    R = dvdnt;\n    while (R >= dvsr) {          // while the divisor still fits\n        R = R - dvsr;\n        Q++;\n    }\n}\n\nint main() {\n    int a, b, q, r;\n    cin >> a >> b;               // a >= 0, b > 0\n    quocientEnterResta(a, b, q, r);\n    cout << a << \" = \" << b << \" * \" << q << \" + \" << r << endl;\n    return 0;\n}"
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Traça de quocientEnterResta(17, 5, q, r).</caption>\n<thead><tr><th>Pas</th><th class=\"c\">R ≥ 5?</th><th class=\"c\">R</th><th class=\"c\">Q</th></tr></thead>\n<tbody>\n<tr><td>inici</td><td class=\"c\">—</td><td class=\"c\">17</td><td class=\"c\">0</td></tr>\n<tr><td>1a resta</td><td class=\"c ip-v\">17 ≥ 5</td><td class=\"c hl\">12</td><td class=\"c hl\">1</td></tr>\n<tr><td>2a resta</td><td class=\"c ip-v\">12 ≥ 5</td><td class=\"c hl\">7</td><td class=\"c hl\">2</td></tr>\n<tr><td>3a resta</td><td class=\"c ip-v\">7 ≥ 5</td><td class=\"c hl\">2</td><td class=\"c hl\">3</td></tr>\n<tr><td>surt</td><td class=\"c ip-f\">2 &lt; 5</td><td class=\"c\">2</td><td class=\"c\">3</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Traza de quocientEnterResta(17, 5, q, r).</caption>\n<thead><tr><th>Paso</th><th class=\"c\">¿R ≥ 5?</th><th class=\"c\">R</th><th class=\"c\">Q</th></tr></thead>\n<tbody>\n<tr><td>inicio</td><td class=\"c\">—</td><td class=\"c\">17</td><td class=\"c\">0</td></tr>\n<tr><td>1.ª resta</td><td class=\"c ip-v\">17 ≥ 5</td><td class=\"c hl\">12</td><td class=\"c hl\">1</td></tr>\n<tr><td>2.ª resta</td><td class=\"c ip-v\">12 ≥ 5</td><td class=\"c hl\">7</td><td class=\"c hl\">2</td></tr>\n<tr><td>3.ª resta</td><td class=\"c ip-v\">7 ≥ 5</td><td class=\"c hl\">2</td><td class=\"c hl\">3</td></tr>\n<tr><td>sale</td><td class=\"c ip-f\">2 &lt; 5</td><td class=\"c\">2</td><td class=\"c\">3</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Trace of quocientEnterResta(17, 5, q, r).</caption>\n<thead><tr><th>Step</th><th class=\"c\">¿R ≥ 5?</th><th class=\"c\">R</th><th class=\"c\">Q</th></tr></thead>\n<tbody>\n<tr><td>start</td><td class=\"c\">—</td><td class=\"c\">17</td><td class=\"c\">0</td></tr>\n<tr><td>1st subtraction</td><td class=\"c ip-v\">17 ≥ 5</td><td class=\"c hl\">12</td><td class=\"c hl\">1</td></tr>\n<tr><td>2nd subtraction</td><td class=\"c ip-v\">12 ≥ 5</td><td class=\"c hl\">7</td><td class=\"c hl\">2</td></tr>\n<tr><td>3rd subtraction</td><td class=\"c ip-v\">7 ≥ 5</td><td class=\"c hl\">2</td><td class=\"c hl\">3</td></tr>\n<tr><td>exits</td><td class=\"c ip-f\">2 &lt; 5</td><td class=\"c\">2</td><td class=\"c\">3</td></tr>\n</tbody>\n</table></div>"
    ],
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "Com que `Q` i `R` són referències a `q` i `r` del `main`, en acabar el procediment el `main` ja té els dos resultats: 17 = 5 · 3 + 2.",
     "Como `Q` y `R` son referencias a `q` y `r` del `main`, al terminar el procedimiento el `main` ya tiene los dos resultados: 17 = 5 · 3 + 2.",
     "Since `Q` and `R` are references to `q` and `r` of `main`, when the procedure ends `main` already has both results: 17 = 5 · 3 + 2."
    ]
   }
  ],
  "s7-7": [
   {
    "t": "p",
    "x": [
     "El programa de la setmana 6, amb cada acció del disseny convertida en una funció. Compareu el `main` amb el nivell 1 del disseny: és pràcticament el mateix text.",
     "El programa de la semana 6, con cada acción del diseño convertida en una función. Comparad el `main` con el nivel 1 del diseño: es prácticamente el mismo texto.",
     "The week 6 program, with each action of the design turned into a function. Compare `main` with level 1 of the design: it is practically the same text."
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
     "#include <iostream>\nusing namespace std;\n\n// Nivel 3: suma de todos los divisores de X (X incluido)\nint sumaDelsDivisors(int X) {\n    int SD = 0;\n    for (int P = 1; P <= X; P++) {\n        if (X % P == 0) {\n            SD = SD + P;\n        }\n    }\n    return SD;\n}\n\n// Nivel 2: decidir si X es perfecto\nbool esPerfecte(int X) {\n    return sumaDelsDivisors(X) - X == X;\n}\n\n// Nivel 1: recorrer los candidatos\nint main() {\n    int LIMIT;\n    cin >> LIMIT;\n    int X = 1;\n    while (X < LIMIT) {\n        if (esPerfecte(X)) {\n            cout << X << \" \";\n        }\n        X++;\n    }\n    cout << endl;\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\n// Level 3: sum of all the divisors of X (X included)\nint sumaDelsDivisors(int X) {\n    int SD = 0;\n    for (int P = 1; P <= X; P++) {\n        if (X % P == 0) {\n            SD = SD + P;\n        }\n    }\n    return SD;\n}\n\n// Level 2: decide whether X is perfect\nbool esPerfecte(int X) {\n    return sumaDelsDivisors(X) - X == X;\n}\n\n// Level 1: go through the candidates\nint main() {\n    int LIMIT;\n    cin >> LIMIT;\n    int X = 1;\n    while (X < LIMIT) {\n        if (esPerfecte(X)) {\n            cout << X << \" \";\n        }\n        X++;\n    }\n    cout << endl;\n    return 0;\n}"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "`SD` ara és una variable **local** de `sumaDelsDivisors`: es crea a cada crida amb valor 0. L'error de la setmana 6 (inicialitzar-la fora del bucle) ja no és possible.",
      "`SD` ahora es una variable **local** de `sumaDelsDivisors`: se crea en cada llamada con valor 0. El error de la semana 6 (inicializarla fuera del bucle) ya no es posible.",
      "`SD` is now a **local** variable of `sumaDelsDivisors`: it is created at each call with value 0. The week 6 mistake (initialising it outside the loop) is no longer possible."
     ],
     [
      "`esPerfecte` retorna un `bool`: el resultat d'una comparació és directament cert o fals, i per això es pot escriure `return expressió;` sense cap `if`.",
      "`esPerfecte` devuelve un `bool`: el resultado de una comparación es directamente cierto o falso, y por eso se puede escribir `return expressió;` sin ningún `if`.",
      "`esPerfecte` returns a `bool`: the result of a comparison is directly true or false, and that is why you can write `return expressió;` without any `if`."
     ],
     [
      "Per millorar el càlcul dels divisors (per exemple, fins a X / 2), només cal tocar `sumaDelsDivisors`.",
      "Para mejorar el cálculo de los divisores (por ejemplo, hasta X / 2), solo hay que tocar `sumaDelsDivisors`.",
      "To improve the computation of the divisors (for example, up to X / 2), you only need to touch `sumaDelsDivisors`."
     ]
    ]
   }
  ],
  "s7-8": [
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
       "Feu la divisió real de dos enters A i B (que poden ser negatius) amb N decimals, **sense fer servir els operadors `/` ni `%`**: només restant, com quocientEnterResta. Si el divisor és 0, escriviu `Divisio impossible: el divisor es zero`.",
       "Haced la división real de dos enteros A y B (que pueden ser negativos) con N decimales, **sin usar los operadores `/` ni `%`**: solo restando, como quocientEnterResta. Si el divisor es 0, escribid `Divisio impossible: el divisor es zero`.",
       "Do the real division of two integers A and B (which can be negative) with N decimals, **without using the `/` or `%` operators**: only by subtracting, like quocientEnterResta. If the divisor is 0, write `Divisio impossible: el divisor es zero`."
      ]
     }
    ],
    "mode": "explained"
   },
   {
    "t": "h",
    "x": [
     "Disseny descendent i mòduls",
     "Diseño descendente y módulos",
     "Top-down design and modules"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Acció",
      "Acción",
      "Action"
     ],
     "Subprograma",
     [
      "Rep",
      "Recibe",
      "Receives"
     ],
     [
      "Torna",
      "Devuelve",
      "Returns"
     ]
    ],
    "rows": [
     [
      [
       "Signe del resultat",
       "Signo del resultado",
       "Sign of the result"
      ],
      "`int signe(int x)`",
      [
       "un enter",
       "un entero",
       "an integer"
      ],
      [
       "−1 si és negatiu, 1 si no",
       "−1 si es negativo, 1 si no",
       "−1 if negative, 1 if not"
      ]
     ],
     [
      [
       "Treballar sense signes",
       "Trabajar sin signos",
       "Working without signs"
      ],
      "`int valorAbsolut(int x)`",
      [
       "un enter",
       "un entero",
       "an integer"
      ],
      [
       "el valor sense signe",
       "el valor sin signo",
       "the unsigned value"
      ]
     ],
     [
      [
       "Part entera i cada decimal",
       "Parte entera y cada decimal",
       "Integer part and each decimal"
      ],
      "`void quocientEnterResta(…)`",
      [
       "dividend i divisor",
       "dividendo y divisor",
       "dividend and divisor"
      ],
      [
       "Q i R per referència",
       "Q y R por referencia",
       "Q and R by reference"
      ]
     ]
    ]
   },
   {
    "t": "h",
    "x": [
     "La idea: la divisió llarga de l'escola",
     "La idea: la división larga de la escuela",
     "The idea: long division from school"
    ]
   },
   {
    "t": "p",
    "x": [
     "Després de la part entera, cada decimal s'obté igual: es multiplica el residu per 10 i es torna a dividir. El nou quocient és la xifra decimal i el nou residu serveix per a la xifra següent.",
     "Después de la parte entera, cada decimal se obtiene igual: se multiplica el resto por 10 y se vuelve a dividir. El nuevo cociente es la cifra decimal y el nuevo resto sirve para la cifra siguiente.",
     "After the integer part, each decimal is obtained the same way: the remainder is multiplied by 10 and divided again. The new quotient is the decimal digit and the new remainder is used for the next digit."
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>22 / 7 amb 4 decimals.</caption>\n<thead><tr><th>Pas</th><th class=\"c\">Dividend</th><th class=\"c\">Q (xifra)</th><th class=\"c\">R</th><th>Resultat parcial</th></tr></thead>\n<tbody>\n<tr><td>Part entera</td><td class=\"c\">22</td><td class=\"c hl\">3</td><td class=\"c\">1</td><td>3.</td></tr>\n<tr><td>1r decimal</td><td class=\"c\">1 · 10 = 10</td><td class=\"c hl\">1</td><td class=\"c\">3</td><td>3.1</td></tr>\n<tr><td>2n decimal</td><td class=\"c\">3 · 10 = 30</td><td class=\"c hl\">4</td><td class=\"c\">2</td><td>3.14</td></tr>\n<tr><td>3r decimal</td><td class=\"c\">2 · 10 = 20</td><td class=\"c hl\">2</td><td class=\"c\">6</td><td>3.142</td></tr>\n<tr><td>4t decimal</td><td class=\"c\">6 · 10 = 60</td><td class=\"c hl\">8</td><td class=\"c\">4</td><td>3.1428</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>22 / 7 con 4 decimales.</caption>\n<thead><tr><th>Paso</th><th class=\"c\">Dividendo</th><th class=\"c\">Q (cifra)</th><th class=\"c\">R</th><th>Resultado parcial</th></tr></thead>\n<tbody>\n<tr><td>Parte entera</td><td class=\"c\">22</td><td class=\"c hl\">3</td><td class=\"c\">1</td><td>3.</td></tr>\n<tr><td>1.er decimal</td><td class=\"c\">1 · 10 = 10</td><td class=\"c hl\">1</td><td class=\"c\">3</td><td>3.1</td></tr>\n<tr><td>2.º decimal</td><td class=\"c\">3 · 10 = 30</td><td class=\"c hl\">4</td><td class=\"c\">2</td><td>3.14</td></tr>\n<tr><td>3.er decimal</td><td class=\"c\">2 · 10 = 20</td><td class=\"c hl\">2</td><td class=\"c\">6</td><td>3.142</td></tr>\n<tr><td>4.º decimal</td><td class=\"c\">6 · 10 = 60</td><td class=\"c hl\">8</td><td class=\"c\">4</td><td>3.1428</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>22 / 7 with 4 decimals.</caption>\n<thead><tr><th>Step</th><th class=\"c\">Dividend</th><th class=\"c\">Q (digit)</th><th class=\"c\">R</th><th>Partial result</th></tr></thead>\n<tbody>\n<tr><td>Integer part</td><td class=\"c\">22</td><td class=\"c hl\">3</td><td class=\"c\">1</td><td>3.</td></tr>\n<tr><td>1st decimal</td><td class=\"c\">1 · 10 = 10</td><td class=\"c hl\">1</td><td class=\"c\">3</td><td>3.1</td></tr>\n<tr><td>2nd decimal</td><td class=\"c\">3 · 10 = 30</td><td class=\"c hl\">4</td><td class=\"c\">2</td><td>3.14</td></tr>\n<tr><td>3rd decimal</td><td class=\"c\">2 · 10 = 20</td><td class=\"c hl\">2</td><td class=\"c\">6</td><td>3.142</td></tr>\n<tr><td>4th decimal</td><td class=\"c\">6 · 10 = 60</td><td class=\"c hl\">8</td><td class=\"c\">4</td><td>3.1428</td></tr>\n</tbody>\n</table></div>"
    ],
    "mode": "explained"
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
     "#include <iostream>\nusing namespace std;\n\nint signe(int x) {\n    if (x < 0) {\n        return -1;\n    } else {\n        return 1;\n    }\n}\n\nint valorAbsolut(int x) {\n    if (x < 0) {\n        return -x;\n    } else {\n        return x;\n    }\n}\n\nvoid quocientEnterResta(int dvdnt, int dvsr, int &Q, int &R) {\n    Q = 0;\n    R = dvdnt;\n    while (R >= dvsr) {\n        R = R - dvsr;\n        Q++;\n    }\n}\n\nint main() {\n    int A, B, N;\n    cin >> A >> B >> N;                    // N >= 1 decimales\n    if (B == 0) {\n        cout << \"Divisio impossible: el divisor es zero\" << endl;\n    } else {\n        int s = signe(A) * signe(B);       // signo del resultado\n        int a = valorAbsolut(A);\n        int b = valorAbsolut(B);\n        int Q, R;\n        quocientEnterResta(a, b, Q, R);    // parte entera\n        if (s < 0 && (Q != 0 || R != 0)) {\n            cout << \"-\";\n        }\n        cout << Q << \".\";\n        for (int i = 1; i <= N; i++) {     // cada decimal\n            int dividend = R * 10;\n            int xifra;\n            quocientEnterResta(dividend, b, xifra, R);\n            cout << xifra;\n        }\n        cout << endl;\n    }\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint signe(int x) {\n    if (x < 0) {\n        return -1;\n    } else {\n        return 1;\n    }\n}\n\nint valorAbsolut(int x) {\n    if (x < 0) {\n        return -x;\n    } else {\n        return x;\n    }\n}\n\nvoid quocientEnterResta(int dvdnt, int dvsr, int &Q, int &R) {\n    Q = 0;\n    R = dvdnt;\n    while (R >= dvsr) {\n        R = R - dvsr;\n        Q++;\n    }\n}\n\nint main() {\n    int A, B, N;\n    cin >> A >> B >> N;                    // N >= 1 decimals\n    if (B == 0) {\n        cout << \"Divisio impossible: el divisor es zero\" << endl;\n    } else {\n        int s = signe(A) * signe(B);       // sign of the result\n        int a = valorAbsolut(A);\n        int b = valorAbsolut(B);\n        int Q, R;\n        quocientEnterResta(a, b, Q, R);    // integer part\n        if (s < 0 && (Q != 0 || R != 0)) {\n            cout << \"-\";\n        }\n        cout << Q << \".\";\n        for (int i = 1; i <= N; i++) {     // each decimal\n            int dividend = R * 10;\n            int xifra;\n            quocientEnterResta(dividend, b, xifra, R);\n            cout << xifra;\n        }\n        cout << endl;\n    }\n    return 0;\n}"
    ]
   },
   {
    "t": "p",
    "x": [
     "Proveu `-7 2 3` (−3.500), `1 -3 5` (−0.33333), `0 5 2` (0.00) i `5 0 2`. Fixeu-vos que el mateix procediment es crida en dos llocs amb arguments diferents: per a la part entera i per a cada decimal.",
     "Probad `-7 2 3` (−3.500), `1 -3 5` (−0.33333), `0 5 2` (0.00) y `5 0 2`. Fijaos en que el mismo procedimiento se llama en dos lugares con argumentos diferentes: para la parte entera y para cada decimal.",
     "Try `-7 2 3` (−3.500), `1 -3 5` (−0.33333), `0 5 2` (0.00) and `5 0 2`. Notice that the same procedure is called in two places with different arguments: for the integer part and for each decimal."
    ]
   },
   {
    "t": "tip",
    "title": [
     "Per què es treballa amb valors absoluts",
     "Por qué se trabaja con valores absolutos",
     "Why we work with absolute values"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "quocientEnterResta resta mentre `R >= dvsr`: amb un dividend negatiu no entraria mai al bucle, i amb un divisor negatiu no en sortiria mai. Separar el signe del valor fa que el procediment només hagi de saber dividir naturals, i el signe s'afegeix al final.",
       "quocientEnterResta resta mientras `R >= dvsr`: con un dividendo negativo no entraría nunca en el bucle, y con un divisor negativo no saldría nunca. Separar el signo del valor hace que el procedimiento solo tenga que saber dividir naturales, y el signo se añade al final.",
       "quocientEnterResta subtracts while `R >= dvsr`: with a negative dividend it would never enter the loop, and with a negative divisor it would never leave it. Separating the sign from the value means the procedure only has to know how to divide natural numbers, and the sign is added at the end."
      ]
     }
    ],
    "mode": "explained"
   }
  ],
  "s7-9": [
   {
    "t": "table",
    "head": [
     "Error",
     [
      "Què passa",
      "Qué pasa",
      "What happens"
     ],
     [
      "Solució",
      "Solución",
      "Solution"
     ]
    ],
    "rows": [
     [
      [
       "Falta `&` en un paràmetre de sortida",
       "Falta `&` en un parámetro de salida",
       "A `&` is missing in an output parameter"
      ],
      [
       "Compila, però el resultat no arriba al `main`.",
       "Compila, pero el resultado no llega al `main`.",
       "It compiles, but the result does not reach `main`."
      ],
      "`int &Q`"
     ],
     [
      [
       "Una funció no retorna en tots els camins",
       "Una función no devuelve un valor en todos los caminos",
       "A function does not return a value on every path"
      ],
      [
       "Resultat imprevisible (el compilador avisa).",
       "Resultado imprevisible (el compilador avisa).",
       "Unpredictable result (the compiler warns)."
      ],
      [
       "Un `return` a cada branca, o un al final.",
       "Un `return` en cada rama, o uno al final.",
       "A `return` in each branch, or one at the end."
      ]
     ],
     [
      [
       "Es fa `cout` dins de la funció en lloc de `return`",
       "Se hace `cout` dentro de la función en lugar de `return`",
       "`cout` is done inside the function instead of `return`"
      ],
      [
       "El valor s'escriu però no es pot fer servir en càlculs.",
       "El valor se escribe, pero no se puede usar en cálculos.",
       "The value is written, but it cannot be used in calculations."
      ],
      [
       "Les funcions calculen; qui escriu és el `main`.",
       "Las funciones calculan; quien escribe es el `main`.",
       "Functions compute; `main` does the writing."
      ]
     ],
     [
      [
       "Es crida la funció i s'ignora el resultat: `max2(a, b);`",
       "Se llama a la función y se ignora el resultado: `max2(a, b);`",
       "The function is called and the result ignored: `max2(a, b);`"
      ],
      [
       "El valor es perd.",
       "El valor se pierde.",
       "The value is lost."
      ],
      "`m = max2(a, b);`"
     ],
     [
      [
       "Es fa servir dins de la funció una variable del `main`",
       "Se usa dentro de la función una variable del `main`",
       "A variable of `main` is used inside the function"
      ],
      [
       "Error: no està declarada en aquest àmbit.",
       "Error: no está declarada en este ámbito.",
       "Error: it is not declared in this scope."
      ],
      [
       "Passar-la com a paràmetre.",
       "Pasarla como parámetro.",
       "Pass it as a parameter."
      ]
     ],
     [
      [
       "La funció es defineix després del `main`",
       "La función se define después del `main`",
       "The function is defined after `main`"
      ],
      [
       "Error: identificador no declarat.",
       "Error: identificador no declarado.",
       "Error: undeclared identifier."
      ],
      [
       "Definir-la abans o posar el prototip a dalt.",
       "Definirla antes o poner el prototipo arriba.",
       "Define it before or put the prototype at the top."
      ]
     ],
     [
      [
       "Es passa un literal per referència: `intercanvia(3, x)`",
       "Se pasa un literal por referencia: `intercanvia(3, x)`",
       "A literal is passed by reference: `intercanvia(3, x)`"
      ],
      [
       "Error de compilació.",
       "Error de compilación.",
       "Compilation error."
      ],
      [
       "Per referència només s'hi passen variables.",
       "Por referencia solo se pueden pasar variables.",
       "Only variables can be passed by reference."
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
     "En CodeRunner, los cuestionarios Q01–Q20 de funciones y procedimientos. Aquí tenéis una selección para practicar, con compilador y pruebas (se valora que uséis subprogramas):",
     "In CodeRunner, quizzes Q01–Q20 on functions and procedures. Here you have a selection to practise, with a compiler and tests (using subprograms is valued):"
    ]
   },
   {
    "t": "lab",
    "id": "exlist",
    "props": {
     "wk": 7
    },
    "mode": "explained"
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
        "¿Qué escribe este programa?",
        "What does this program write?"
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
       "Error de compilación",
       "Compilation error"
      ]
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "`n` és una còpia (pas per valor). Per modificar `a` caldria `void doble(int &n)`, o bé una funció que retorni el doble: `a = doble(a);`.",
        "`n` es una copia (paso por valor). Para modificar `a` haría falta `void doble(int &n)`, o bien una función que devuelva el doble: `a = doble(a);`.",
        "`n` is a copy (pass by value). To modify `a` you would need `void doble(int &n)`, or a function that returns the double: `a = doble(a);`."
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
        "¿Qué cabecera es la más adecuada para un subprograma que, dados los segundos totales, calcula las horas, los minutos y los segundos?",
        "Which header is the most suitable for a subprogram that, given the total seconds, computes the hours, minutes and seconds?"
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
        "Un dato de entrada (por valor) y tres resultados (por referencia). Un `return` solo podría devolver uno.",
        "One input data item (by value) and three results (by reference). A `return` could only give back one."
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
        "Con `void intercanvia(int &a, int &b)`, ¿qué llamada **no** compila?",
        "With `void intercanvia(int &a, int &b)`, which call does **not** compile?"
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
        "Un parámetro por referencia necesita una variable donde escribir. El 3 es un literal: no es una variable.",
        "A reference parameter needs a variable to write into. 3 is a literal: it is not a variable."
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
        "¿Qué devuelve `f(7)`?",
        "What does `f(7)` return?"
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
       "1, después 2",
       "1, then 2"
      ]
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "7 > 5: s'executa `return 1` i la funció s'acaba en aquell moment. Les línies següents no s'arriben a executar.",
        "7 > 5: se ejecuta `return 1` y la función termina en ese momento. Las líneas siguientes no llegan a ejecutarse.",
        "7 > 5: `return 1` runs and the function ends at that moment. The following lines never run."
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
        "Función: calcula y **devuelve** un valor (`return`). Procedimiento: `void`, hace una tarea.",
        "Function: computes and **returns** a value (`return`). Procedure: `void`, does a task."
       ],
       [
        "Paràmetres a la definició, arguments a la crida: mateix nombre, ordre i tipus.",
        "Parámetros en la definición, argumentos en la llamada: mismo número, orden y tipo.",
        "Parameters in the definition, arguments in the call: same number, order and type."
       ],
       [
        "Per valor (`int x`): una còpia, per a les dades. Per referència (`int &x`): la mateixa variable, per als resultats o el que cal modificar.",
        "Por valor (`int x`): una copia, para los datos. Por referencia (`int &x`): la misma variable, para los resultados o lo que hay que modificar.",
        "By value (`int x`): a copy, for data. By reference (`int &x`): the same variable, for results or what must be modified."
       ],
       [
        "Per tornar més d'un resultat: un procediment amb un paràmetre per referència per a cada resultat.",
        "Para devolver más de un resultado: un procedimiento con un parámetro por referencia para cada resultado.",
        "To return more than one result: a procedure with a reference parameter for each result."
       ],
       [
        "Cada acció del disseny descendent pot ser un subprograma; el `main` queda com el nivell 1.",
        "Cada acción del diseño descendente puede ser un subprograma; el `main` queda como el nivel 1.",
        "Each action of the top-down design can be a subprogram; `main` stays like level 1."
       ]
      ]
     }
    ]
   }
  ]
 },
 "examEnd": [
  {
   "ref": "cpp-s7-germans"
  },
  {
   "ref": "cpp-s7-dividir-restant"
  },
  {
   "ref": "cpp-s7-abundants"
  },
  {
   "ref": "cpp-s7-mcd-mcm"
  }
 ]
};
