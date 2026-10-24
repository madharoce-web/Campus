// Generat per tools/kit-import/prog.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Fibonacci, dígits, binari, any de traspàs i la cerca amb bandera: els patrons que han de sortir sols.",
    "Fibonacci, dígitos, binario, año bisiesto y la búsqueda con bandera: los patrones que tienen que salir solos."
   ]
  },
  {
   "t": "list",
   "items": [
    [
     "**Sessions:** Dl. 05/10 (CP1) i dc. 07/10 (comentari)",
     "**Sesiones:** Lu. 05/10 (CP1) y mi. 07/10 (comentario)"
    ],
    [
     "**Abast del CP1:** Setmanes 2–4",
     "**Alcance del CP1:** Semanas 2–4"
    ]
   ]
  },
  {
   "t": "p",
   "x": [
    "Setmana del **CP1** (dilluns 05/10, continguts de les setmanes 2–4) i del seu comentari (dimecres 07/10). Aquesta pàgina recull els patrons que han de sortir sols a l'examen, cadascun amb un exemple resolt i traçat, i els errors que més punts fan perdre.",
    "Semana del **CP1** (lunes 05/10, contenidos de las semanas 2–4) y de su corrección comentada (miércoles 07/10). Esta página recoge los patrones que tienen que saliros solos en el examen, cada uno con un ejemplo resuelto y trazado, y los errores que más puntos hacen perder."
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
       "Generar termes que depenen dels anteriors (Fibonacci) fent «córrer» les variables.",
       "Generar términos que dependen de los anteriores (Fibonacci) haciendo «correr» las variables."
      ],
      [
       "Recórrer les xifres d'un nombre amb `% 10` i `/ 10`: suma de xifres, binari a decimal, sufixos.",
       "Recorrer las cifras de un número con `% 10` y `/ 10`: suma de cifras, binario a decimal, sufijos."
      ],
      [
       "Escriure condicions compostes llargues sense errors (any de traspàs, comparar dates).",
       "Escribir condiciones compuestas largas sin errores (año bisiesto, comparar fechas)."
      ],
      [
       "Fer servir **banderes** (`bool`) per cercar i per comprovar «tots» o «algun».",
       "Usar **banderas** (`bool`) para buscar y para comprobar «todos» o «alguno»."
      ]
     ]
    }
   ]
  },
  {
   "t": "note",
   "title": [
    "Com és el CP1",
    "Cómo es el CP1"
   ],
   "blocks": [
    {
     "t": "p",
     "x": [
      "Problemes curts tipus CodeRunner, amb temps limitat i proves ocultes: el programa ha de compilar, llegir exactament l'entrada descrita i escriure exactament la sortida demanada. Entren seqüència, condicionals i bucles (setmanes 2–4). Encara no s'han vist funcions: tot el codi va dins del `main`.",
      "Problemas cortos de tipo CodeRunner, con tiempo limitado y pruebas ocultas: el programa tiene que compilar, leer exactamente la entrada descrita y escribir exactamente la salida pedida. Entran secuencia, condicionales y bucles (semanas 2–4). Todavía no se han visto funciones: todo el código va dentro del `main`."
     ]
    }
   ]
  }
 ],
 "sections": {
  "s5-1": [
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
       "Escriviu els N primers termes (N ≥ 3) de la successió de Fibonacci, 0 1 1 2 3 5 8 13…, on cada terme, llevat dels dos primers, és la suma dels dos anteriors. Feu-ho amb un bucle `REPETEIX` (`do … while`).",
       "Escribid los N primeros términos (N ≥ 3) de la sucesión de Fibonacci, 0 1 1 2 3 5 8 13…, donde cada término, salvo los dos primeros, es la suma de los dos anteriores. Hacedlo con un bucle `REPETEIX` (`do … while`)."
      ]
     }
    ]
   },
   {
    "t": "p",
    "x": [
     "No cal guardar tota la successió: per calcular el terme següent n'hi ha prou amb els **dos últims**. Fem servir dues variables, `ANT` i `ACT`, que a cada volta «corren» una posició cap a la dreta:",
     "No hace falta guardar toda la sucesión: para calcular el término siguiente basta con los **dos últimos**. Usamos dos variables, `ANT` y `ACT`, que en cada vuelta «corren» una posición hacia la derecha:"
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:560px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 640 230\" role=\"img\" aria-label=\"Les variables ANT i ACT es desplacen una posició a cada volta\" role=\"img\">\n<text class=\"ds\" x=\"20\" y=\"34\" dominant-baseline=\"central\">Successió</text>\n<rect class=\"bx\" x=\"110\" y=\"16\" width=\"56\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"138\" y=\"34\" text-anchor=\"middle\" dominant-baseline=\"central\">0</text>\n<rect class=\"bx\" x=\"176\" y=\"16\" width=\"56\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"204\" y=\"34\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<rect class=\"bx\" x=\"242\" y=\"16\" width=\"56\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"270\" y=\"34\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<rect class=\"bx\" x=\"308\" y=\"16\" width=\"56\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"336\" y=\"34\" text-anchor=\"middle\" dominant-baseline=\"central\">2</text>\n<rect class=\"bx\" x=\"374\" y=\"16\" width=\"56\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"402\" y=\"34\" text-anchor=\"middle\" dominant-baseline=\"central\">3</text>\n<rect class=\"bx\" x=\"440\" y=\"16\" width=\"56\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"468\" y=\"34\" text-anchor=\"middle\" dominant-baseline=\"central\">5</text>\n<rect class=\"bx\" x=\"506\" y=\"16\" width=\"56\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"534\" y=\"34\" text-anchor=\"middle\" dominant-baseline=\"central\">8</text>\n<text class=\"ds\" x=\"20\" y=\"92\" dominant-baseline=\"central\">Volta 1</text>\n<rect class=\"bxg\" x=\"110\" y=\"78\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"138\" y=\"92\" text-anchor=\"middle\" dominant-baseline=\"central\">ANT</text>\n<rect class=\"bxq\" x=\"176\" y=\"78\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"204\" y=\"92\" text-anchor=\"middle\" dominant-baseline=\"central\">ACT</text>\n<rect class=\"bxo\" x=\"242\" y=\"78\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"270\" y=\"92\" text-anchor=\"middle\" dominant-baseline=\"central\">SEG</text>\n<text class=\"ds\" x=\"20\" y=\"140\" dominant-baseline=\"central\">Volta 2</text>\n<rect class=\"bxg\" x=\"176\" y=\"126\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"204\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"central\">ANT</text>\n<rect class=\"bxq\" x=\"242\" y=\"126\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"270\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"central\">ACT</text>\n<rect class=\"bxo\" x=\"308\" y=\"126\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"336\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"central\">SEG</text>\n<text class=\"ds\" x=\"20\" y=\"188\" dominant-baseline=\"central\">Volta 3</text>\n<rect class=\"bxg\" x=\"242\" y=\"174\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"270\" y=\"188\" text-anchor=\"middle\" dominant-baseline=\"central\">ANT</text>\n<rect class=\"bxq\" x=\"308\" y=\"174\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"336\" y=\"188\" text-anchor=\"middle\" dominant-baseline=\"central\">ACT</text>\n<rect class=\"bxo\" x=\"374\" y=\"174\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"402\" y=\"188\" text-anchor=\"middle\" dominant-baseline=\"central\">SEG</text>\n<text class=\"ds\" x=\"470\" y=\"140\" dominant-baseline=\"central\">SEG = ANT + ACT</text>\n<text class=\"ds\" x=\"470\" y=\"160\" dominant-baseline=\"central\">ANT = ACT</text>\n<text class=\"ds\" x=\"470\" y=\"180\" dominant-baseline=\"central\">ACT = SEG</text>\n</svg></div>\n<figcaption>Una «finestra» de dos termes que avança: a cada volta es calcula el següent i les variables es desplacen un lloc.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:560px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 640 230\" role=\"img\" aria-label=\"Las variables ANT y ACT se desplazan una posición en cada vuelta\" role=\"img\">\n<text class=\"ds\" x=\"20\" y=\"34\" dominant-baseline=\"central\">Sucesión</text>\n<rect class=\"bx\" x=\"110\" y=\"16\" width=\"56\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"138\" y=\"34\" text-anchor=\"middle\" dominant-baseline=\"central\">0</text>\n<rect class=\"bx\" x=\"176\" y=\"16\" width=\"56\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"204\" y=\"34\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<rect class=\"bx\" x=\"242\" y=\"16\" width=\"56\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"270\" y=\"34\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<rect class=\"bx\" x=\"308\" y=\"16\" width=\"56\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"336\" y=\"34\" text-anchor=\"middle\" dominant-baseline=\"central\">2</text>\n<rect class=\"bx\" x=\"374\" y=\"16\" width=\"56\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"402\" y=\"34\" text-anchor=\"middle\" dominant-baseline=\"central\">3</text>\n<rect class=\"bx\" x=\"440\" y=\"16\" width=\"56\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"468\" y=\"34\" text-anchor=\"middle\" dominant-baseline=\"central\">5</text>\n<rect class=\"bx\" x=\"506\" y=\"16\" width=\"56\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"534\" y=\"34\" text-anchor=\"middle\" dominant-baseline=\"central\">8</text>\n<text class=\"ds\" x=\"20\" y=\"92\" dominant-baseline=\"central\">Vuelta 1</text>\n<rect class=\"bxg\" x=\"110\" y=\"78\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"138\" y=\"92\" text-anchor=\"middle\" dominant-baseline=\"central\">ANT</text>\n<rect class=\"bxq\" x=\"176\" y=\"78\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"204\" y=\"92\" text-anchor=\"middle\" dominant-baseline=\"central\">ACT</text>\n<rect class=\"bxo\" x=\"242\" y=\"78\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"270\" y=\"92\" text-anchor=\"middle\" dominant-baseline=\"central\">SEG</text>\n<text class=\"ds\" x=\"20\" y=\"140\" dominant-baseline=\"central\">Vuelta 2</text>\n<rect class=\"bxg\" x=\"176\" y=\"126\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"204\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"central\">ANT</text>\n<rect class=\"bxq\" x=\"242\" y=\"126\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"270\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"central\">ACT</text>\n<rect class=\"bxo\" x=\"308\" y=\"126\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"336\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"central\">SEG</text>\n<text class=\"ds\" x=\"20\" y=\"188\" dominant-baseline=\"central\">Vuelta 3</text>\n<rect class=\"bxg\" x=\"242\" y=\"174\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"270\" y=\"188\" text-anchor=\"middle\" dominant-baseline=\"central\">ANT</text>\n<rect class=\"bxq\" x=\"308\" y=\"174\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"336\" y=\"188\" text-anchor=\"middle\" dominant-baseline=\"central\">ACT</text>\n<rect class=\"bxo\" x=\"374\" y=\"174\" width=\"56\" height=\"28\" rx=\"4\"></rect><text class=\"dm\" x=\"402\" y=\"188\" text-anchor=\"middle\" dominant-baseline=\"central\">SEG</text>\n<text class=\"ds\" x=\"470\" y=\"140\" dominant-baseline=\"central\">SEG = ANT + ACT</text>\n<text class=\"ds\" x=\"470\" y=\"160\" dominant-baseline=\"central\">ANT = ACT</text>\n<text class=\"ds\" x=\"470\" y=\"180\" dominant-baseline=\"central\">ACT = SEG</text>\n</svg></div>\n<figcaption>Una «ventana» de dos términos que avanza: en cada vuelta se calcula el siguiente y las variables se desplazan un lugar.</figcaption>\n</figure>"
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "fibonacci.cpp",
     "run": true,
     "trace": true,
     "in": "7"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;                       // N >= 3\n    int ANT = 0, ACT = 1, SEG;\n    int TERME = 2;                  // termes ja escrits\n    cout << ANT << \" \" << ACT << \" \";\n    do {\n        SEG = ANT + ACT;            // 1. calcular el següent\n        cout << SEG << \" \";\n        ANT = ACT;                  // 2. desplaçar: primer ANT...\n        ACT = SEG;                  //    ...després ACT\n        TERME++;\n    } while (TERME < N);\n    cout << endl;\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;                       // N >= 3\n    int ANT = 0, ACT = 1, SEG;\n    int TERME = 2;                  // términos ya escritos\n    cout << ANT << \" \" << ACT << \" \";\n    do {\n        SEG = ANT + ACT;            // 1. calcular el siguiente\n        cout << SEG << \" \";\n        ANT = ACT;                  // 2. desplazar: primero ANT...\n        ACT = SEG;                  //    ...después ACT\n        TERME++;\n    } while (TERME < N);\n    cout << endl;\n    return 0;\n}"
    ]
   },
   {
    "t": "warn",
    "title": [
     "L'ordre de les assignacions importa",
     "El orden de las asignaciones importa"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si s'escriu `ACT = SEG;` abans de `ANT = ACT;`, `ANT` rep el valor **nou** d'`ACT` i es perd l'antic: tots dos acaben valent el mateix. Quan diverses variables «corren», s'actualitza primer la que va més endarrere.",
       "Si se escribe `ACT = SEG;` antes de `ANT = ACT;`, `ANT` recibe el valor **nuevo** de `ACT` y se pierde el antiguo: ambas acaban valiendo lo mismo. Cuando varias variables «corren», se actualiza primero la que va más atrasada."
      ]
     }
    ]
   },
   {
    "t": "p",
    "x": [
     "Per què `do … while`? Amb N ≥ 3, com a mínim cal calcular un terme. Amb N = 2 aquest programa escriuria 3 termes; si s'hagués d'admetre, caldria un `while`.",
     "¿Por qué `do … while`? Con N ≥ 3, como mínimo hay que calcular un término. Con N = 2 este programa escribiría 3 términos; si se tuviera que admitir, haría falta un `while`."
    ]
   }
  ],
  "s5-2": [
   {
    "t": "p",
    "x": [
     "Amb dues operacions es pot desmuntar qualsevol natural xifra a xifra, de dreta a esquerra:",
     "Con dos operaciones se puede desmontar cualquier natural cifra a cifra, de derecha a izquierda:"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "`n % 10` → la **darrera xifra** (4728 % 10 = 8).",
      "`n % 10` → la **última cifra** (4728 % 10 = 8)."
     ],
     [
      "`n / 10` → el nombre **sense la darrera xifra** (4728 / 10 = 472).",
      "`n / 10` → el número **sin la última cifra** (4728 / 10 = 472)."
     ]
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "Esquema",
     "nonum": true
    },
    "src": [
     "while (n > 0) {\n    int xifra = n % 10;     // agafar la darrera xifra\n    // tractar la xifra\n    n = n / 10;             // treure-la\n}",
     "while (n > 0) {\n    int xifra = n % 10;     // tomar la última cifra\n    // tratar la cifra\n    n = n / 10;             // quitarla\n}"
    ]
   },
   {
    "t": "p",
    "x": [
     "És un esquema de recorregut on la «seqüència» són les xifres i la marca de fi és que `n` arribi a 0. Exemple: la suma de les xifres.",
     "Es un esquema de recorrido donde la «secuencia» son las cifras y la marca de fin es que `n` llegue a 0. Ejemplo: la suma de las cifras."
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
        "in": "4728"
       },
       "src": [
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N             Natural   Nombre\n   S      SUMA          Natural   Suma de les xifres\n\nINICI_SEQÜÈNCIA\n    Llegir N\n    SUMA ← 0\n    MENTRE N > 0 FER\n        SUMA ← SUMA + N |R 10\n        N ← N ‖ 10\n    FI_MENTRE\n    Escriure SUMA\nFI_SEQÜÈNCIA",
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N             Natural   Número\n   S      SUMA          Natural   Suma de las cifras\n\nINICI_SEQÜÈNCIA\n    Llegir N\n    SUMA ← 0\n    MENTRE N > 0 FER\n        SUMA ← SUMA + N |R 10\n        N ← N ‖ 10\n    FI_MENTRE\n    Escriure SUMA\nFI_SEQÜÈNCIA"
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int suma = 0;\n    while (N > 0) {\n        suma = suma + N % 10;\n        N = N / 10;\n    }\n    cout << suma << endl;\n    return 0;\n}",
       "props": {
        "title": "suma_xifres.cpp",
        "run": true,
        "trace": true,
        "in": "4728"
       }
      }
     ]
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Traça amb N = 4728.</caption>\n<thead><tr><th>Volta</th><th class=\"c\">N</th><th class=\"c\">N % 10</th><th class=\"c\">suma</th><th class=\"c\">N / 10</th></tr></thead>\n<tbody>\n<tr><td>1</td><td class=\"c\">4728</td><td class=\"c\">8</td><td class=\"c hl\">8</td><td class=\"c\">472</td></tr>\n<tr><td>2</td><td class=\"c\">472</td><td class=\"c\">2</td><td class=\"c hl\">10</td><td class=\"c\">47</td></tr>\n<tr><td>3</td><td class=\"c\">47</td><td class=\"c\">7</td><td class=\"c hl\">17</td><td class=\"c\">4</td></tr>\n<tr><td>4</td><td class=\"c\">4</td><td class=\"c\">4</td><td class=\"c hl\">21</td><td class=\"c\">0</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Traza con N = 4728.</caption>\n<thead><tr><th>Vuelta</th><th class=\"c\">N</th><th class=\"c\">N % 10</th><th class=\"c\">suma</th><th class=\"c\">N / 10</th></tr></thead>\n<tbody>\n<tr><td>1</td><td class=\"c\">4728</td><td class=\"c\">8</td><td class=\"c hl\">8</td><td class=\"c\">472</td></tr>\n<tr><td>2</td><td class=\"c\">472</td><td class=\"c\">2</td><td class=\"c hl\">10</td><td class=\"c\">47</td></tr>\n<tr><td>3</td><td class=\"c\">47</td><td class=\"c\">7</td><td class=\"c hl\">17</td><td class=\"c\">4</td></tr>\n<tr><td>4</td><td class=\"c\">4</td><td class=\"c\">4</td><td class=\"c hl\">21</td><td class=\"c\">0</td></tr>\n</tbody>\n</table></div>"
    ]
   },
   {
    "t": "p",
    "x": [
     "Canviant només el «tractar la xifra» s'obtenen molts problemes diferents:",
     "Cambiando solo el «tratar la cifra» se obtienen muchos problemas diferentes:"
    ]
   },
   {
    "t": "table",
    "head": [
     "Problema",
     [
      "Inicialització",
      "Inicialización"
     ],
     [
      "Tractar la xifra",
      "Tratar la cifra"
     ],
     [
      "Compte amb…",
      "Cuidado con…"
     ]
    ],
    "rows": [
     [
      [
       "Suma de xifres",
       "Suma de cifras"
      ],
      "`s = 0`",
      "`s = s + x;`",
      "—"
     ],
     [
      [
       "Comptar xifres",
       "Contar cifras"
      ],
      "`c = 0`",
      "`c++;`",
      [
       "El 0 té una xifra: cal un `do … while`.",
       "El 0 tiene una cifra: hace falta un `do … while`."
      ]
     ],
     [
      [
       "Invertir (capicues)",
       "Invertir (capicúas)"
      ],
      "`inv = 0`",
      "`inv = inv * 10 + x;`",
      [
       "Guardeu una còpia del nombre original.",
       "Guardad una copia del número original."
      ]
     ],
     [
      [
       "Binari a decimal",
       "Binario a decimal"
      ],
      "`r = 0`, `pot = 1`",
      "`r = r + x * pot; pot = pot * 2;`",
      [
       "La primera xifra que surt és la de menys pes.",
       "La primera cifra que sale es la de menor peso."
      ]
     ]
    ]
   },
   {
    "t": "h",
    "x": [
     "Binari a decimal",
     "Binario a decimal"
    ]
   },
   {
    "t": "p",
    "x": [
     "En binari, cada posició val el doble que la de la seva dreta. Si escrivim el binari amb xifres 0 i 1 dins d'un enter (per exemple 1011), l'esquema de les xifres el recorre de dreta a esquerra, i la potència de 2 es multiplica per 2 a cada volta.",
     "En binario, cada posición vale el doble que la de su derecha. Si escribimos el binario con cifras 0 y 1 dentro de un entero (por ejemplo 1011), el esquema de las cifras lo recorre de derecha a izquierda, y la potencia de 2 se multiplica por 2 en cada vuelta."
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:440px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 520 180\" role=\"img\" aria-label=\"1011 en binari val 8 + 0 + 2 + 1 = 11\" role=\"img\">\n<text class=\"ds\" x=\"260\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"central\">el bucle les tracta de dreta a esquerra</text>\n<path class=\"lna\" d=\"M400 30 H120\" marker-end=\"url(#aha)\"></path>\n<text class=\"ds\" x=\"16\" y=\"64\" dominant-baseline=\"central\">xifra</text><text class=\"ds\" x=\"16\" y=\"112\" dominant-baseline=\"central\">pes</text><text class=\"ds\" x=\"16\" y=\"156\" dominant-baseline=\"central\">xifra · pes</text>\n<rect class=\"bxa\" x=\"110\" y=\"46\" width=\"60\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"140\" y=\"64\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<rect class=\"bxa\" x=\"190\" y=\"46\" width=\"60\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"220\" y=\"64\" text-anchor=\"middle\" dominant-baseline=\"central\">0</text>\n<rect class=\"bxa\" x=\"270\" y=\"46\" width=\"60\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"300\" y=\"64\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<rect class=\"bxa\" x=\"350\" y=\"46\" width=\"60\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"380\" y=\"64\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<text class=\"dm\" x=\"140\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\">8</text><text class=\"dm\" x=\"220\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\">4</text><text class=\"dm\" x=\"300\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\">2</text><text class=\"dm\" x=\"380\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<text class=\"dm\" x=\"140\" y=\"156\" text-anchor=\"middle\" dominant-baseline=\"central\">8</text><text class=\"dm\" x=\"220\" y=\"156\" text-anchor=\"middle\" dominant-baseline=\"central\">0</text><text class=\"dm\" x=\"300\" y=\"156\" text-anchor=\"middle\" dominant-baseline=\"central\">2</text><text class=\"dm\" x=\"380\" y=\"156\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<text class=\"dt db\" x=\"455\" y=\"156\" text-anchor=\"middle\" dominant-baseline=\"central\">= 11</text>\n</svg></div>\n<figcaption>La xifra de la dreta pesa 1, i cada posició cap a l'esquerra pesa el doble.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:440px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 520 180\" role=\"img\" aria-label=\"1011 en binario vale 8 + 0 + 2 + 1 = 11\" role=\"img\">\n<text class=\"ds\" x=\"260\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"central\">el bucle las trata de derecha a izquierda</text>\n<path class=\"lna\" d=\"M400 30 H120\" marker-end=\"url(#aha)\"></path>\n<text class=\"ds\" x=\"16\" y=\"64\" dominant-baseline=\"central\">cifra</text><text class=\"ds\" x=\"16\" y=\"112\" dominant-baseline=\"central\">peso</text><text class=\"ds\" x=\"16\" y=\"156\" dominant-baseline=\"central\">cifra · peso</text>\n<rect class=\"bxa\" x=\"110\" y=\"46\" width=\"60\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"140\" y=\"64\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<rect class=\"bxa\" x=\"190\" y=\"46\" width=\"60\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"220\" y=\"64\" text-anchor=\"middle\" dominant-baseline=\"central\">0</text>\n<rect class=\"bxa\" x=\"270\" y=\"46\" width=\"60\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"300\" y=\"64\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<rect class=\"bxa\" x=\"350\" y=\"46\" width=\"60\" height=\"36\" rx=\"4\"></rect><text class=\"dm\" x=\"380\" y=\"64\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<text class=\"dm\" x=\"140\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\">8</text><text class=\"dm\" x=\"220\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\">4</text><text class=\"dm\" x=\"300\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\">2</text><text class=\"dm\" x=\"380\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<text class=\"dm\" x=\"140\" y=\"156\" text-anchor=\"middle\" dominant-baseline=\"central\">8</text><text class=\"dm\" x=\"220\" y=\"156\" text-anchor=\"middle\" dominant-baseline=\"central\">0</text><text class=\"dm\" x=\"300\" y=\"156\" text-anchor=\"middle\" dominant-baseline=\"central\">2</text><text class=\"dm\" x=\"380\" y=\"156\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<text class=\"dt db\" x=\"455\" y=\"156\" text-anchor=\"middle\" dominant-baseline=\"central\">= 11</text>\n</svg></div>\n<figcaption>La cifra de la derecha pesa 1, y cada posición hacia la izquierda pesa el doble.</figcaption>\n</figure>"
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "binari_decimal.cpp",
     "run": true,
     "trace": true,
     "in": "1011"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x;\n    cin >> x;                    // per exemple 1011\n    int R = 0, pot = 1;\n    while (x > 0) {\n        int xifra = x % 10;      // 1, 1, 0, 1\n        R = R + xifra * pot;     // + 1, + 2, + 0, + 8\n        pot = pot * 2;           // 1, 2, 4, 8, ...\n        x = x / 10;\n    }\n    cout << \"Decimal: \" << R << endl;\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x;\n    cin >> x;                    // por ejemplo 1011\n    int R = 0, pot = 1;\n    while (x > 0) {\n        int xifra = x % 10;      // 1, 1, 0, 1\n        R = R + xifra * pot;     // + 1, + 2, + 0, + 8\n        pot = pot * 2;           // 1, 2, 4, 8, ...\n        x = x / 10;\n    }\n    cout << \"Decimal: \" << R << endl;\n    return 0;\n}"
    ]
   },
   {
    "t": "h",
    "x": [
     "Comparar dos nombres xifra a xifra: el sufix",
     "Comparar dos números cifra a cifra: el sufijo"
    ]
   },
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
       "Donats dos naturals x i y, digueu si un és **sufix** de l'altre: 12 és sufix de 4512 perquè 4512 acaba en 12.",
       "Dados dos naturales x e y, decid si uno es **sufijo** del otro: 12 es sufijo de 4512 porque 4512 acaba en 12."
      ]
     }
    ]
   },
   {
    "t": "p",
    "x": [
     "Es treuen les darreres xifres **dels dos alhora** mentre coincideixen. És un esquema de **cerca**: s'atura quan un dels nombres s'acaba o quan es troba una xifra diferent. En sortir, si algun dels dos ha arribat a 0, s'ha consumit sencer sense trobar cap diferència i, per tant, és sufix de l'altre.",
     "Se quitan las últimas cifras **de los dos a la vez** mientras coinciden. Es un esquema de **búsqueda**: se detiene cuando uno de los números se acaba o cuando se encuentra una cifra diferente. Al salir, si alguno de los dos ha llegado a 0, se ha consumido entero sin encontrar ninguna diferencia y, por tanto, es sufijo del otro."
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x, y;\n    cin >> x >> y;\n    while (x > 0 && y > 0 && x % 10 == y % 10) {\n        x = x / 10;\n        y = y / 10;\n    }\n    if (x == 0 || y == 0) {\n        cout << \"Si, un dels nombres es sufix de l'altre\" << endl;\n    } else {\n        cout << \"No, cap dels nombres es sufix de l'altre\" << endl;\n    }\n    return 0;\n}",
    "props": {
     "title": "sufix.cpp",
     "run": true,
     "trace": true,
     "in": "12 4512"
    }
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Dues traces: 12 i 4512 (sí), 12 i 4213 (no).</caption>\n<thead><tr><th class=\"c\">x</th><th class=\"c\">y</th><th>Condició del while</th></tr></thead>\n<tbody>\n<tr><td class=\"c\">12</td><td class=\"c\">4512</td><td>2 == 2: <span class=\"ip-v\">continua</span></td></tr>\n<tr><td class=\"c\">1</td><td class=\"c\">451</td><td>1 == 1: <span class=\"ip-v\">continua</span></td></tr>\n<tr><td class=\"c hl\">0</td><td class=\"c\">45</td><td>x &gt; 0 és fals: <span class=\"ip-f\">surt</span> → x == 0 → <b>Sí</b></td></tr>\n<tr><td class=\"c\">12</td><td class=\"c\">4213</td><td>2 == 3 és fals: <span class=\"ip-f\">surt</span> → cap és 0 → <b>No</b></td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Dos trazas: 12 y 4512 (sí), 12 y 4213 (no).</caption>\n<thead><tr><th class=\"c\">x</th><th class=\"c\">y</th><th>Condición del while</th></tr></thead>\n<tbody>\n<tr><td class=\"c\">12</td><td class=\"c\">4512</td><td>2 == 2: <span class=\"ip-v\">continúa</span></td></tr>\n<tr><td class=\"c\">1</td><td class=\"c\">451</td><td>1 == 1: <span class=\"ip-v\">continúa</span></td></tr>\n<tr><td class=\"c hl\">0</td><td class=\"c\">45</td><td>x &gt; 0 es falso: <span class=\"ip-f\">sale</span> → x == 0 → <b>Sí</b></td></tr>\n<tr><td class=\"c\">12</td><td class=\"c\">4213</td><td>2 == 3 es falso: <span class=\"ip-f\">sale</span> → ninguno es 0 → <b>No</b></td></tr>\n</tbody>\n</table></div>"
    ]
   }
  ],
  "s5-3": [
   {
    "t": "h",
    "x": [
     "Any de traspàs",
     "Año bisiesto"
    ]
   },
   {
    "t": "p",
    "x": [
     "Un any és de traspàs si és múltiple de 4, **excepte** els múltiples de 100, que només ho són si també són múltiples de 400. Traduït a C++, pas a pas:",
     "Un año es bisiesto si es múltiplo de 4, **excepto** los múltiplos de 100, que solo lo son si también son múltiplos de 400. Traducido a C++, paso a paso:"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "«Múltiple de 4 però no de 100»: `A % 4 == 0 && A % 100 != 0`",
      "«Múltiplo de 4 pero no de 100»: `A % 4 == 0 && A % 100 != 0`"
     ],
     [
      "«o bé múltiple de 400»: `|| A % 400 == 0`",
      "«o bien múltiplo de 400»: `|| A % 400 == 0`"
     ],
     [
      "Junt, amb parèntesis perquè es llegeixi clar: `(A % 4 == 0 && A % 100 != 0) || A % 400 == 0`",
      "Todo junto, con paréntesis para que se lea con claridad: `(A % 4 == 0 && A % 100 != 0) || A % 400 == 0`"
     ]
    ],
    "ordered": true
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw\"><table>\n<thead><tr><th class=\"c\">A</th><th class=\"c\">% 4 == 0</th><th class=\"c\">% 100 != 0</th><th class=\"c\">% 400 == 0</th><th class=\"c\">Traspàs?</th></tr></thead>\n<tbody>\n<tr><td class=\"c\">2024</td><td class=\"c\">cert</td><td class=\"c\">cert</td><td class=\"c\">fals</td><td class=\"c ip-v\">sí</td></tr>\n<tr><td class=\"c\">2023</td><td class=\"c\">fals</td><td class=\"c\">cert</td><td class=\"c\">fals</td><td class=\"c ip-f\">no</td></tr>\n<tr><td class=\"c\">1900</td><td class=\"c\">cert</td><td class=\"c\">fals</td><td class=\"c\">fals</td><td class=\"c ip-f\">no</td></tr>\n<tr><td class=\"c\">2000</td><td class=\"c\">cert</td><td class=\"c\">fals</td><td class=\"c\">cert</td><td class=\"c ip-v\">sí</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw\"><table>\n<thead><tr><th class=\"c\">A</th><th class=\"c\">% 4 == 0</th><th class=\"c\">% 100 != 0</th><th class=\"c\">% 400 == 0</th><th class=\"c\">¿Bisiesto?</th></tr></thead>\n<tbody>\n<tr><td class=\"c\">2024</td><td class=\"c\">cierto</td><td class=\"c\">cierto</td><td class=\"c\">falso</td><td class=\"c ip-v\">sí</td></tr>\n<tr><td class=\"c\">2023</td><td class=\"c\">falso</td><td class=\"c\">cierto</td><td class=\"c\">falso</td><td class=\"c ip-f\">no</td></tr>\n<tr><td class=\"c\">1900</td><td class=\"c\">cierto</td><td class=\"c\">falso</td><td class=\"c\">falso</td><td class=\"c ip-f\">no</td></tr>\n<tr><td class=\"c\">2000</td><td class=\"c\">cierto</td><td class=\"c\">falso</td><td class=\"c\">cierto</td><td class=\"c ip-v\">sí</td></tr>\n</tbody>\n</table></div>"
    ]
   },
   {
    "t": "p",
    "x": [
     "Els quatre anys de la taula són el **joc de proves mínim**: un per a cada camí de la condició. Si el programa encerta aquests quatre, la condició és correcta.",
     "Los cuatro años de la tabla son el **juego de pruebas mínimo**: uno para cada camino de la condición. Si el programa acierta estos cuatro, la condición es correcta."
    ]
   },
   {
    "t": "h",
    "x": [
     "Quina data és posterior?",
     "¿Qué fecha es posterior?"
    ]
   },
   {
    "t": "p",
    "x": [
     "Comparar dates és com ordenar paraules al diccionari: primer mana l'any; si l'any és igual, el mes; si també, el dia. Hi ha dues maneres d'escriure-ho:",
     "Comparar fechas es como ordenar palabras en el diccionario: primero manda el año; si el año es igual, el mes; si también lo es, el día. Hay dos maneras de escribirlo:"
    ]
   },
   {
    "t": "cols",
    "cols": [
     [
      {
       "t": "code",
       "lang": "cpp",
       "props": {
        "title": [
         "Condició composta",
         "Condición compuesta"
        ],
        "nonum": true
       },
       "src": "bool primera = A1 > A2\n    || (A1 == A2 && M1 > M2)\n    || (A1 == A2 && M1 == M2 && D1 > D2);"
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "props": {
        "title": [
         "Convertir la data en un sol nombre",
         "Convertir la fecha en un solo número"
        ],
        "nonum": true
       },
       "src": "int k1 = A1 * 10000 + M1 * 100 + D1;  // 20241005\nint k2 = A2 * 10000 + M2 * 100 + D2;\nbool primera = k1 > k2;"
      }
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "La segona aprofita que el mes i el dia tenen com a màxim dues xifres: el 5/10/2024 es converteix en 20241005, i comparar aquests nombres és comparar les dates. Convertir un problema en un altre de més senzill és una idea que surt sovint.",
     "La segunda aprovecha que el mes y el día tienen como máximo dos cifras: el 5/10/2024 se convierte en 20241005, y comparar estos números es comparar las fechas. Convertir un problema en otro más sencillo es una idea que aparece a menudo."
    ]
   }
  ],
  "s5-4": [
   {
    "t": "p",
    "x": [
     "Una **bandera** és una variable `bool` que recorda si ha passat alguna cosa. N'hi ha de dos tipus, i la clau és el **valor inicial**:",
     "Una **bandera** es una variable `bool` que recuerda si ha pasado algo. Las hay de dos tipos, y la clave es el **valor inicial**:"
    ]
   },
   {
    "t": "table",
    "head": [
     "Pregunta",
     "Valor inicial",
     [
      "Dins del bucle",
      "Dentro del bucle"
     ],
     [
      "Exemple",
      "Ejemplo"
     ]
    ],
    "rows": [
     [
      [
       "Existeix algun element que…?",
       "¿Existe algún elemento que…?"
      ],
      [
       "`false` (encara no n'hem vist cap)",
       "`false` (todavía no hemos visto ninguno)"
      ],
      [
       "si l'element compleix: `= true`",
       "si el elemento cumple: `= true`"
      ],
      "`algunaExcellent`"
     ],
     [
      [
       "Tots els elements…?",
       "¿Todos los elementos…?"
      ],
      [
       "`true` (encara no n'hem vist cap que falli)",
       "`true` (todavía no hemos visto ninguno que falle)"
      ],
      [
       "si l'element **no** compleix: `= false`",
       "si el elemento **no** cumple: `= false`"
      ],
      "`totesAprovades`"
     ]
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "banderes.cpp",
     "run": true,
     "trace": true,
     "in": "5  7 9.5 4 8 6"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;                          // quantes notes\n    bool totesAprovades = true;        // \"per a tot\": comença cert\n    bool algunaExcellent = false;      // \"existeix\": comença fals\n    for (int i = 1; i <= n; i++) {\n        double nota;\n        cin >> nota;\n        if (nota < 5) {\n            totesAprovades = false;    // n'hi ha prou amb una per desmentir-ho\n        }\n        if (nota >= 9) {\n            algunaExcellent = true;    // n'hi ha prou amb una per confirmar-ho\n        }\n    }\n    if (totesAprovades) cout << \"Totes aprovades: si\" << endl;\n    else cout << \"Totes aprovades: no\" << endl;\n    if (algunaExcellent) cout << \"Alguna excel.lent: si\" << endl;\n    else cout << \"Alguna excel.lent: no\" << endl;\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;                          // cuántas notas\n    bool totesAprovades = true;        // \"para todo\": empieza cierto\n    bool algunaExcellent = false;      // \"existe\": empieza falso\n    for (int i = 1; i <= n; i++) {\n        double nota;\n        cin >> nota;\n        if (nota < 5) {\n            totesAprovades = false;    // basta con una para desmentirlo\n        }\n        if (nota >= 9) {\n            algunaExcellent = true;    // basta con una para confirmarlo\n        }\n    }\n    if (totesAprovades) cout << \"Totes aprovades: si\" << endl;\n    else cout << \"Totes aprovades: no\" << endl;\n    if (algunaExcellent) cout << \"Alguna excel.lent: si\" << endl;\n    else cout << \"Alguna excel.lent: no\" << endl;\n    return 0;\n}"
    ]
   },
   {
    "t": "warn",
    "title": [
     "La bandera no es torna a canviar",
     "La bandera no vuelve a cambiar"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un error típic és posar un `else`: `if (nota < 5) tot = false; else tot = true;`. Llavors la bandera només recorda **l'última** nota. Un cop la bandera canvia, ja no ha de tornar enrere.",
       "Un error típico es poner un `else`: `if (nota < 5) tot = false; else tot = true;`. Entonces la bandera solo recuerda **la última** nota. Una vez que la bandera cambia, ya no debe volver atrás."
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "Cerca amb bandera: és primer?",
     "Búsqueda con bandera: ¿es primo?"
    ]
   },
   {
    "t": "p",
    "x": [
     "Un nombre n > 1 és primer si no té cap divisor entre 2 i n − 1. Busquem un divisor; quan en trobem un, la bandera `trobat` fa que el bucle s'aturi sense provar-ne més:",
     "Un número n > 1 es primo si no tiene ningún divisor entre 2 y n − 1. Buscamos un divisor; cuando encontramos uno, la bandera `trobat` hace que el bucle se detenga sin probar más:"
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
        "in": "91"
       },
       "src": [
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      n             Natural   Nombre (n > 1)\n          d             Natural   Candidat a divisor\n          trobat        Lògic     S'ha trobat un divisor?\n\nINICI_SEQÜÈNCIA\n    Llegir n\n    d ← 2\n    trobat ← FALS\n    MENTRE d < n I NO trobat FER\n        SI n |R d = 0 LLAVORS\n            trobat ← CERT\n        ALTRAMENT\n            d ← d + 1\n        FI_SI\n    FI_MENTRE\n    SI trobat LLAVORS\n        Escriure n, \" no es primer (divisible per \", d, \")\"\n    ALTRAMENT\n        Escriure n, \" es primer\"\n    FI_SI\nFI_SEQÜÈNCIA",
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      n             Natural   Número (n > 1)\n          d             Natural   Candidato a divisor\n          trobat        Lògic     ¿Se ha encontrado un divisor?\n\nINICI_SEQÜÈNCIA\n    Llegir n\n    d ← 2\n    trobat ← FALS\n    MENTRE d < n I NO trobat FER\n        SI n |R d = 0 LLAVORS\n            trobat ← CERT\n        ALTRAMENT\n            d ← d + 1\n        FI_SI\n    FI_MENTRE\n    SI trobat LLAVORS\n        Escriure n, \" no es primer (divisible per \", d, \")\"\n    ALTRAMENT\n        Escriure n, \" es primer\"\n    FI_SI\nFI_SEQÜÈNCIA"
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "props": {
        "title": "primer.cpp",
        "run": true,
        "trace": true,
        "in": "91"
       },
       "src": [
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;                       // n > 1\n    int d = 2;\n    bool trobat = false;\n    while (d < n && !trobat) {\n        if (n % d == 0) {\n            trobat = true;          // NO s'incrementa: d és el divisor\n        } else {\n            d++;\n        }\n    }\n    if (trobat) {\n        cout << n << \" no es primer (divisible per \" << d << \")\" << endl;\n    } else {\n        cout << n << \" es primer\" << endl;\n    }\n    return 0;\n}",
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;                       // n > 1\n    int d = 2;\n    bool trobat = false;\n    while (d < n && !trobat) {\n        if (n % d == 0) {\n            trobat = true;          // NO se incrementa: d es el divisor\n        } else {\n            d++;\n        }\n    }\n    if (trobat) {\n        cout << n << \" no es primer (divisible per \" << d << \")\" << endl;\n    } else {\n        cout << n << \" es primer\" << endl;\n    }\n    return 0;\n}"
       ]
      }
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Amb 91 el bucle prova 2, 3, 4, 5, 6 i 7, i s'atura: 91 = 7 · 13. Amb 97 arriba fins a 96 sense trobar res. Fixeu-vos que quan es troba el divisor no s'incrementa `d`: així, en sortir, `d` és precisament el divisor trobat.",
     "Con 91 el bucle prueba 2, 3, 4, 5, 6 y 7, y se detiene: 91 = 7 · 13. Con 97 llega hasta 96 sin encontrar nada. Fijaos en que cuando se encuentra el divisor no se incrementa `d`: así, al salir, `d` es precisamente el divisor encontrado."
    ]
   }
  ],
  "s5-5": [
   {
    "t": "table",
    "head": [
     [
      "Comprovació",
      "Comprobación"
     ],
     [
      "Per què",
      "Por qué"
     ]
    ],
    "rows": [
     [
      [
       "La sortida és idèntica a l'exemple de l'enunciat: textos, espais, majúscules, accents, salts de línia.",
       "La salida es idéntica al ejemplo del enunciado: textos, espacios, mayúsculas, acentos, saltos de línea."
      ],
      [
       "CodeRunner compara caràcter a caràcter.",
       "CodeRunner compara carácter a carácter."
      ]
     ],
     [
      [
       "Decimals: `fixed << setprecision(n)` si l'enunciat en demana un nombre fix.",
       "Decimales: `fixed << setprecision(n)` si el enunciado pide un número fijo de decimales."
      ],
      [
       "«5.5» no és «5.50».",
       "«5.5» no es «5.50»."
      ]
     ],
     [
      [
       "Proveu els casos límit: 0, un sol element, seqüència buida (la marca de fi de seguida), valors negatius, empats.",
       "Probad los casos límite: 0, un solo elemento, secuencia vacía (la marca de fin enseguida), valores negativos, empates."
      ],
      [
       "Les proves ocultes busquen aquests casos.",
       "Las pruebas ocultas buscan estos casos."
      ]
     ],
     [
      [
       "Comptadors i acumuladors a 0 abans del bucle; el màxim amb un valor segur.",
       "Contadores y acumuladores a 0 antes del bucle; el máximo con un valor seguro."
      ],
      [
       "Variables sense inicialitzar donen resultats aleatoris.",
       "Las variables sin inicializar dan resultados aleatorios."
      ]
     ],
     [
      [
       "Divisions: `(double)` si cal decimals; mai no dividiu per un comptador que pot ser 0.",
       "Divisiones: `(double)` si hacen falta decimales; nunca dividáis por un contador que puede ser 0."
      ],
      [
       "Divisió entera i divisió per zero.",
       "División entera y división por cero."
      ]
     ],
     [
      [
       "Feu servir l'estructura que demana l'enunciat (`while`, `do … while`, `switch`).",
       "Usad la estructura que pide el enunciado (`while`, `do … while`, `switch`)."
      ],
      [
       "La revisió del codi també puntua.",
       "La revisión del código también puntúa."
      ]
     ]
    ]
   }
  ],
  "s5-6": [
   {
    "t": "p",
    "x": [
     "Exercicis de repàs amb la mateixa dificultat que el CP1:",
     "Ejercicios de repaso con la misma dificultad que el CP1:"
    ]
   },
   {
    "t": "lab",
    "id": "exlist",
    "props": {
     "wk": 5
    }
   },
   {
    "t": "p",
    "x": [
     "Per assajar en condicions d'examen, feu el [simulacre del CP1](/programacio/simulacre): diverses preguntes seguides, cadascuna amb el seu temps i sense pistes.",
     "Para ensayar en condiciones de examen, haced el [simulacro del CP1](/programacio/simulacre): varias preguntas seguidas, cada una con su tiempo y sin pistas."
    ]
   }
  ],
  "s5-7": [
   {
    "t": "check",
    "ex": {
     "id": "s5-7-q1",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quant val `r` al final, amb `n = 305`?",
        "¿Cuánto vale `r` al final, con `n = 305`?"
       ]
      },
      {
       "t": "code",
       "lang": "txt",
       "src": "int r = 0;\nwhile (n > 0) {\n    r = r * 10 + n % 10;\n    n = n / 10;\n}"
      }
     ],
     "type": "mcq",
     "opts": [
      "305",
      "503",
      "53",
      "8"
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "És l'esquema d'invertir: r passa per 5, 50 i 503. El 0 del mig es conserva perquè `r * 10` l'afegeix.",
        "Es el esquema de invertir: r pasa por 5, 50 y 503. El 0 del medio se conserva porque `r * 10` lo añade."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s5-7-q2",
     "qb": [
      {
       "t": "p",
       "x": [
        "Volem saber si **totes** les temperatures d'una seqüència són positives. Quin és el valor inicial correcte de la bandera `totesPositives`?",
        "Queremos saber si **todas** las temperaturas de una secuencia son positivas. ¿Cuál es el valor inicial correcto de la bandera `totesPositives`?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      [
       "`false`, i passa a `true` quan una és positiva",
       "`false`, y pasa a `true` cuando una es positiva"
      ],
      [
       "`false`, i passa a `true` quan una és negativa",
       "`false`, y pasa a `true` cuando una es negativa"
      ],
      "El de la primera temperatura",
      [
       "`true`, i passa a `false` quan una no és positiva",
       "`true`, y pasa a `false` cuando una no es positiva"
      ]
     ],
     "answer": 3,
     "sol": [
      {
       "t": "p",
       "x": [
        "«Per a tot» comença cert i n'hi ha prou amb un contraexemple per fer-lo fals.",
        "«Para todo» empieza cierto y basta con un contraejemplo para hacerlo falso."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s5-7-q3",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quina condició és certa exactament quan l'any A és de traspàs?",
        "¿Qué condición es cierta exactamente cuando el año A es bisiesto?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "`(A % 4 == 0 && A % 100 != 0) || A % 400 == 0`",
      "`A % 4 == 0 || A % 100 != 0 || A % 400 == 0`",
      "`A % 4 == 0 && A % 400 == 0`",
      "`A % 4 == 0 && (A % 100 != 0 && A % 400 == 0)`"
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "Múltiple de 4 i no de 100, o bé múltiple de 400. La segona opció diria que 2023 és de traspàs; la tercera, que 2024 no; la quarta no es compleix mai.",
        "Múltiplo de 4 y no de 100, o bien múltiplo de 400. La segunda opción diría que 2023 es bisiesto; la tercera, que 2024 no lo es; la cuarta no se cumple nunca."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s5-7-q4",
     "qb": [
      {
       "t": "p",
       "x": [
        "Al Fibonacci, si el cos del bucle fa `SEG = ANT + ACT; ACT = SEG; ANT = ACT;`, què passa?",
        "En el Fibonacci, si el cuerpo del bucle hace `SEG = ANT + ACT; ACT = SEG; ANT = ACT;`, ¿qué pasa?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "Funciona igual",
      [
       "Escriu els termes desordenats",
       "Escribe los términos desordenados"
      ],
      [
       "ANT i ACT acaben valent el mateix i la successió es duplica a cada pas",
       "ANT y ACT acaban valiendo lo mismo y la sucesión se duplica en cada paso"
      ],
      [
       "Error de compilació",
       "Error de compilación"
      ]
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "En fer primer `ACT = SEG`, l'antic ACT es perd i ANT rep el valor nou. A partir d'aquí, cada terme és el doble de l'anterior.",
        "Al hacer primero `ACT = SEG`, el antiguo ACT se pierde y ANT recibe el valor nuevo. A partir de ahí, cada término es el doble del anterior."
       ]
      }
     ]
    }
   }
  ],
  "s5-8": [
   {
    "t": "summary",
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Termes que depenen dels anteriors: no cal guardar-los tots; es fan «córrer» les variables, primer la de més enrere.",
        "Términos que dependen de los anteriores: no hace falta guardarlos todos; se hacen «correr» las variables, primero la más atrasada."
       ],
       [
        "Xifres d'un nombre: `n % 10` dona la darrera, `n / 10` la treu; el bucle acaba quan `n` és 0.",
        "Cifras de un número: `n % 10` da la última, `n / 10` la quita; el bucle acaba cuando `n` es 0."
       ],
       [
        "Una condició composta es construeix per parts, amb parèntesis, i es prova amb un cas per a cada camí.",
        "Una condición compuesta se construye por partes, con paréntesis, y se prueba con un caso para cada camino."
       ],
       [
        "Banderes: «existeix» comença a `false`, «per a tot» comença a `true`, i un cop canvien no tornen enrere.",
        "Banderas: «existe» empieza en `false`, «para todo» empieza en `true`, y una vez que cambian no vuelven atrás."
       ],
       [
        "Cerca: `while (no s'ha acabat && !trobat)`, i després del bucle es mira la bandera.",
        "Búsqueda: `while (no s'ha acabat && !trobat)`, y después del bucle se mira la bandera."
       ]
      ]
     }
    ]
   }
  ]
 },
 "examEnd": []
};
