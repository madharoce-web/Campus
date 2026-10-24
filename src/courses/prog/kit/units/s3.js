// Generat per tools/kit-import/prog.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "De SI…LLAVORS i SEGONS_SIGUI a if/else i switch. Exemple resolt: la Botiga dels Ous.",
    "De SI…LLAVORS y SEGONS_SIGUI a if/else y switch. Ejemplo resuelto: la Tienda de los Huevos."
   ]
  },
  {
   "t": "list",
   "items": [
    [
     "**Sessions:** Dl. 21/09 i dc. 23/09",
     "**Sesiones:** Lu. 21/09 y mi. 23/09"
    ],
    [
     "**Teoria associada:** Tema 2.2",
     "**Teoría asociada:** Tema 2.2"
    ]
   ]
  },
  {
   "t": "p",
   "x": [
    "Fins ara els programes feien sempre les mateixes instruccions, de dalt a baix. Aquesta setmana el programa aprèn a **decidir**: segons les dades, executa un camí o un altre. És la composició alternativa del Tema 2.2 (`SI`, `SEGONS_SIGUI`) escrita en C++.",
    "Hasta ahora los programas ejecutaban siempre las mismas instrucciones, de arriba abajo. Esta semana el programa aprende a **decidir**: según los datos, ejecuta un camino u otro. Es la composición alternativa del Tema 2.2 (`SI`, `SEGONS_SIGUI`) escrita en C++."
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
       "Escriure condicions amb els operadors relacionals (`==`, `!=`, `<`…) i lògics (`&&`, `||`, `!`).",
       "Escribir condiciones con los operadores relacionales (`==`, `!=`, `<`…) y lógicos (`&&`, `||`, `!`)."
      ],
      [
       "Fer servir `if`, `if … else` i cadenes `else if`, i decidir quan cal niuar-les.",
       "Utilizar `if`, `if … else` y cadenas `else if`, y decidir cuándo hay que anidarlas."
      ],
      [
       "Fer servir `switch` amb `case`, `break` i `default`.",
       "Utilizar `switch` con `case`, `break` y `default`."
      ],
      [
       "Escriure reals amb un nombre fix de decimals (`fixed` i `setprecision`).",
       "Escribir reales con un número fijo de decimales (`fixed` y `setprecision`)."
      ],
      [
       "Reconèixer els errors clàssics: `=` per `==`, el `;` després de l'`if`, les claus que falten i el `break` oblidat.",
       "Reconocer los errores clásicos: `=` por `==`, el `;` después del `if`, las llaves que faltan y el `break` olvidado."
      ]
     ]
    }
   ]
  }
 ],
 "sections": {
  "s3-1": [
   {
    "t": "html",
    "h": [
     "<div class=\"ip-map\">\n<div class=\"ip-maph\">Pseudocodi</div><span></span><div class=\"ip-maph\">C++</div>\n<div>SI cond LLAVORS … FI_SI</div><span>→</span><div>if (cond) { … }</div>\n<div>SI cond LLAVORS … ALTRAMENT … FI_SI</div><span>→</span><div>if (cond) { … } else { … }</div>\n<div>SEGONS_SIGUI x FER  v1: …  ALTRAMENT …</div><span>→</span><div>switch (x) { case v1: … break; default: … }</div>\n<div>=   ≠   &lt;   ≤   &gt;   ≥</div><span>→</span><div>==   !=   &lt;   &lt;=   &gt;   &gt;=</div>\n<div>I   O   NO</div><span>→</span><div>&amp;&amp;   ||   !</div>\n<div>CERT   FALS</div><span>→</span><div>true   false</div>\n</div>",
     "<div class=\"ip-map\">\n<div class=\"ip-maph\">Pseudocódigo</div><span></span><div class=\"ip-maph\">C++</div>\n<div>SI cond LLAVORS … FI_SI</div><span>→</span><div>if (cond) { … }</div>\n<div>SI cond LLAVORS … ALTRAMENT … FI_SI</div><span>→</span><div>if (cond) { … } else { … }</div>\n<div>SEGONS_SIGUI x FER  v1: …  ALTRAMENT …</div><span>→</span><div>switch (x) { case v1: … break; default: … }</div>\n<div>=   ≠   &lt;   ≤   &gt;   ≥</div><span>→</span><div>==   !=   &lt;   &lt;=   &gt;   &gt;=</div>\n<div>I   O   NO</div><span>→</span><div>&amp;&amp;   ||   !</div>\n<div>CERT   FALS</div><span>→</span><div>true   false</div>\n</div>"
    ]
   },
   {
    "t": "p",
    "x": [
     "Dues diferències de forma: en C++ la condició va **sempre entre parèntesis**, i el bloc es delimita amb **claus** `{ }` en lloc de `FI_SI`.",
     "Dos diferencias de forma: en C++ la condición va **siempre entre paréntesis**, y el bloque se delimita con **llaves** `{ }` en lugar de `FI_SI`."
    ]
   }
  ],
  "s3-2": [
   {
    "t": "p",
    "x": [
     "Una condició és una expressió que val `true` (cert) o `false` (fals). Es construeix comparant valors i combinant comparacions.",
     "Una condición es una expresión que vale `true` (cierto) o `false` (falso). Se construye comparando valores y combinando comparaciones."
    ]
   },
   {
    "t": "h",
    "x": [
     "Operadors relacionals",
     "Operadores relacionales"
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw\"><table>\n<thead><tr><th>C++</th><th>Significat</th><th>Exemple</th><th class=\"c\">Amb x = 7</th></tr></thead>\n<tbody>\n<tr><td><code>==</code></td><td>igual a</td><td><code>x == 7</code></td><td class=\"c ip-v\">true</td></tr>\n<tr><td><code>!=</code></td><td>diferent de</td><td><code>x != 7</code></td><td class=\"c ip-f\">false</td></tr>\n<tr><td><code>&lt;</code></td><td>menor que</td><td><code>x &lt; 10</code></td><td class=\"c ip-v\">true</td></tr>\n<tr><td><code>&lt;=</code></td><td>menor o igual que</td><td><code>x &lt;= 6</code></td><td class=\"c ip-f\">false</td></tr>\n<tr><td><code>&gt;</code></td><td>més gran que</td><td><code>x &gt; 0</code></td><td class=\"c ip-v\">true</td></tr>\n<tr><td><code>&gt;=</code></td><td>més gran o igual que</td><td><code>x &gt;= 7</code></td><td class=\"c ip-v\">true</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw\"><table>\n<thead><tr><th>C++</th><th>Significado</th><th>Ejemplo</th><th class=\"c\">Con x = 7</th></tr></thead>\n<tbody>\n<tr><td><code>==</code></td><td>igual a</td><td><code>x == 7</code></td><td class=\"c ip-v\">true</td></tr>\n<tr><td><code>!=</code></td><td>distinto de</td><td><code>x != 7</code></td><td class=\"c ip-f\">false</td></tr>\n<tr><td><code>&lt;</code></td><td>menor que</td><td><code>x &lt; 10</code></td><td class=\"c ip-v\">true</td></tr>\n<tr><td><code>&lt;=</code></td><td>menor o igual que</td><td><code>x &lt;= 6</code></td><td class=\"c ip-f\">false</td></tr>\n<tr><td><code>&gt;</code></td><td>mayor que</td><td><code>x &gt; 0</code></td><td class=\"c ip-v\">true</td></tr>\n<tr><td><code>&gt;=</code></td><td>mayor o igual que</td><td><code>x &gt;= 7</code></td><td class=\"c ip-v\">true</td></tr>\n</tbody>\n</table></div>"
    ]
   },
   {
    "t": "warn",
    "title": [
     "= no és ==",
     "= no es =="
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "`=` **assigna** i `==` **compara**. Si escriviu `if (x = 0)`, el programa no pregunta res: posa un 0 dins de `x` i, com que 0 es considera fals, no entra mai a l'`if`. El compilador ho accepta (només dona un avís), i per això és tan perillós. Executeu-lo amb diferents entrades:",
       "`=` **asigna** y `==` **compara**. Si escribís `if (x = 0)`, el programa no pregunta nada: pone un 0 dentro de `x` y, como el 0 se considera falso, no entra nunca en el `if`. El compilador lo acepta (solo da un aviso), y por eso es tan peligroso. Ejecutadlo con diferentes entradas:"
      ]
     }
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "igual_o_assigna.cpp",
     "run": true,
     "in": "5"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x;\n    cin >> x;\n    if (x = 0) {                 // ERROR: hauria de ser x == 0\n        cout << \"x val zero\" << endl;\n    } else {\n        cout << \"x no val zero\" << endl;\n    }\n    cout << \"Ara x val \" << x << endl;   // l'if ha esborrat el valor llegit\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x;\n    cin >> x;\n    if (x = 0) {                 // ERROR: debería ser x == 0\n        cout << \"x val zero\" << endl;\n    } else {\n        cout << \"x no val zero\" << endl;\n    }\n    cout << \"Ara x val \" << x << endl;   // el if ha borrado el valor leído\n    return 0;\n}"
    ]
   },
   {
    "t": "p",
    "x": [
     "Amb l'entrada 5 escriu «x no val zero» i «Ara x val 0»; amb l'entrada 0, exactament el mateix. Canvieu `=` per `==` i torneu-lo a executar.",
     "Con la entrada 5 escribe «x no val zero» y «Ara x val 0»; con la entrada 0, exactamente lo mismo. Cambiad `=` por `==` y volved a ejecutarlo."
    ]
   },
   {
    "t": "h",
    "x": [
     "Operadors lògics",
     "Operadores lógicos"
    ]
   },
   {
    "t": "p",
    "x": [
     "Serveixen per combinar condicions. Són els mateixos `I`, `O`, `NO` del pseudocodi, amb les mateixes taules de veritat:",
     "Sirven para combinar condiciones. Son los mismos `I`, `O`, `NO` del pseudocódigo, con las mismas tablas de verdad:"
    ]
   },
   {
    "t": "html",
    "h": "<div class=\"ip-tw\"><table>\n<thead><tr><th class=\"c\">A</th><th class=\"c\">B</th><th class=\"c\">A &amp;&amp; B</th><th class=\"c\">A || B</th><th class=\"c\">!A</th></tr></thead>\n<tbody>\n<tr><td class=\"c\">true</td><td class=\"c\">true</td><td class=\"c ip-v\">true</td><td class=\"c ip-v\">true</td><td class=\"c ip-f\">false</td></tr>\n<tr><td class=\"c\">true</td><td class=\"c\">false</td><td class=\"c ip-f\">false</td><td class=\"c ip-v\">true</td><td class=\"c ip-f\">false</td></tr>\n<tr><td class=\"c\">false</td><td class=\"c\">true</td><td class=\"c ip-f\">false</td><td class=\"c ip-v\">true</td><td class=\"c ip-v\">true</td></tr>\n<tr><td class=\"c\">false</td><td class=\"c\">false</td><td class=\"c ip-f\">false</td><td class=\"c ip-f\">false</td><td class=\"c ip-v\">true</td></tr>\n</tbody>\n</table></div>"
   },
   {
    "t": "list",
    "items": [
     [
      "`&&` (I): cert només si **totes dues** ho són. Per exemple, «la nota és vàlida»: `nota >= 0 && nota <= 10`.",
      "`&&` (Y): cierto solo si **ambas** lo son. Por ejemplo, «la nota es válida»: `nota >= 0 && nota <= 10`."
     ],
     [
      "`||` (O): cert si **almenys una** ho és. Per exemple, «és cap de setmana»: `dia == 6 || dia == 7`.",
      "`||` (O): cierto si **al menos una** lo es. Por ejemplo, «es fin de semana»: `dia == 6 || dia == 7`."
     ],
     [
      "`!` (NO): inverteix. `!(x > 0)` equival a `x <= 0`.",
      "`!` (NO): invierte. `!(x > 0)` equivale a `x <= 0`."
     ]
    ]
   },
   {
    "t": "warn",
    "title": [
     "Els intervals no s'escriuen com a matemàtiques",
     "Los intervalos no se escriben como en matemáticas"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "A matemàtiques escrivim 0 ≤ x ≤ 10. En C++, `0 <= x <= 10` compila però fa una altra cosa: primer calcula `0 <= x` (que val 0 o 1) i després compara aquest 0 o 1 amb 10, que sempre és cert. Cal separar-ho en dues comparacions unides amb `&&`. Proveu-ho amb 25:",
       "En matemáticas escribimos 0 ≤ x ≤ 10. En C++, `0 <= x <= 10` compila pero hace otra cosa: primero calcula `0 <= x` (que vale 0 o 1) y después compara ese 0 o 1 con 10, lo que siempre es cierto. Hay que separarlo en dos comparaciones unidas con `&&`. Probadlo con 25:"
      ]
     }
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "interval.cpp",
     "run": true,
     "in": "25"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x;\n    cin >> x;\n    if (0 <= x <= 10) {                      // MALAMENT: sempre és cert\n        cout << \"Versio dolenta: \" << x << \" es dins [0, 10]\" << endl;\n    }\n    if (0 <= x && x <= 10) {                 // BE\n        cout << \"Versio bona: \" << x << \" es dins [0, 10]\" << endl;\n    } else {\n        cout << \"Versio bona: \" << x << \" es fora de [0, 10]\" << endl;\n    }\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x;\n    cin >> x;\n    if (0 <= x <= 10) {                      // MAL: siempre es cierto\n        cout << \"Versio dolenta: \" << x << \" es dins [0, 10]\" << endl;\n    }\n    if (0 <= x && x <= 10) {                 // BIEN\n        cout << \"Versio bona: \" << x << \" es dins [0, 10]\" << endl;\n    } else {\n        cout << \"Versio bona: \" << x << \" es fora de [0, 10]\" << endl;\n    }\n    return 0;\n}"
    ]
   },
   {
    "t": "h",
    "x": [
     "L'avaluació en curtcircuit",
     "La evaluación en cortocircuito"
    ]
   },
   {
    "t": "p",
    "x": [
     "C++ avalua les condicions d'esquerra a dreta i **s'atura** quan ja sap el resultat: en `A && B`, si A és fals, B ni es mira; en `A || B`, si A és cert, tampoc. Això permet posar primer una condició de seguretat. Aquí el residu no es calcula si el divisor és 0 (proveu l'entrada `7 0`):",
     "C++ evalúa las condiciones de izquierda a derecha y **se detiene** cuando ya conoce el resultado: en `A && B`, si A es falso, B ni se mira; en `A || B`, si A es cierto, tampoco. Esto permite poner primero una condición de seguridad. Aquí el resto no se calcula si el divisor es 0 (probad la entrada `7 0`):"
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "divisible.cpp",
     "run": true,
     "trace": true,
     "in": "12 4"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    if (b != 0 && a % b == 0) {      // si b és 0, a % b no s'arriba a calcular\n        cout << a << \" es divisible per \" << b << endl;\n    } else {\n        cout << a << \" no es divisible per \" << b << endl;\n    }\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    if (b != 0 && a % b == 0) {      // si b es 0, a % b no se llega a calcular\n        cout << a << \" es divisible per \" << b << endl;\n    } else {\n        cout << a << \" no es divisible per \" << b << endl;\n    }\n    return 0;\n}"
    ]
   }
  ],
  "s3-3": [
   {
    "t": "cols",
    "cols": [
     [
      {
       "t": "p",
       "x": [
        "**Condicional simple.** Si la condició és certa, s'executa el bloc; si és falsa, se salta i el programa continua després de la clau.",
        "**Condicional simple.** Si la condición es cierta, se ejecuta el bloque; si es falsa, se salta y el programa continúa después de la llave."
       ]
      },
      {
       "t": "code",
       "lang": "cpp",
       "src": "if (nota >= 5) {\n    cout << \"Aprovat\" << endl;\n}",
       "props": {
        "nonum": true
       }
      }
     ],
     [
      {
       "t": "p",
       "x": [
        "**Condicional doble.** S'executa **exactament un** dels dos blocs: el primer si la condició és certa, el de l'`else` si és falsa.",
        "**Condicional doble.** Se ejecuta **exactamente uno** de los dos bloques: el primero si la condición es cierta, el del `else` si es falsa."
       ]
      },
      {
       "t": "code",
       "lang": "cpp",
       "src": "if (nota >= 5) {\n    cout << \"Aprovat\" << endl;\n} else {\n    cout << \"Suspes\" << endl;\n}",
       "props": {
        "nonum": true
       }
      }
     ]
    ]
   },
   {
    "t": "h",
    "x": [
     "Les claus i el punt i coma",
     "Las llaves y el punto y coma"
    ]
   },
   {
    "t": "p",
    "x": [
     "Sense claus, l'`if` només controla la **primera** instrucció que el segueix. El sagnat no compta: és només per a les persones. Executeu-lo amb `2 7` (a no és més gran que b) i mireu la traça:",
     "Sin llaves, el `if` solo controla la **primera** instrucción que lo sigue. La sangría no cuenta: es solo para las personas. Ejecutadlo con `2 7` (a no es mayor que b) y mirad la traza:"
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "sense_claus.cpp",
     "run": true,
     "trace": true,
     "in": "2 7"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    if (a > b)\n        cout << \"El major es \" << a << endl;\n        cout << \"Per tant a > b\" << endl;     // NO és dins de l'if: s'executa sempre\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    if (a > b)\n        cout << \"El major es \" << a << endl;\n        cout << \"Per tant a > b\" << endl;     // NO está dentro del if: se ejecuta siempre\n    return 0;\n}"
    ]
   },
   {
    "t": "warn",
    "title": [
     "Dos errors que el compilador no detecta",
     "Dos errores que el compilador no detecta"
    ],
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "**Claus que falten:** poseu-les sempre, encara que el bloc tingui una sola línia. Així, si després hi afegiu una instrucció, quedarà dins.",
        "**Llaves que faltan:** ponedlas siempre, aunque el bloque tenga una sola línea. Así, si más adelante añadís una instrucción, quedará dentro."
       ],
       [
        "**Punt i coma després de la condició:** `if (a > b); { … }`. El `;` és una instrucció buida: l'`if` controla aquesta instrucció buida i el bloc de claus s'executa sempre. Després del parèntesi de l'`if` mai no hi va punt i coma.",
        "**Punto y coma después de la condición:** `if (a > b); { … }`. El `;` es una instrucción vacía: el `if` controla esa instrucción vacía y el bloque de llaves se ejecuta siempre. Después del paréntesis del `if` nunca va punto y coma."
       ]
      ]
     }
    ]
   }
  ],
  "s3-4": [
   {
    "t": "p",
    "x": [
     "Quan hi ha més de dues possibilitats, s'encadenen les preguntes: si la primera falla, es fa la segona, i així successivament. Exemple: l'estat de l'aigua segons la temperatura (≤ 0 gel, < 100 líquid, la resta vapor).",
     "Cuando hay más de dos posibilidades, se encadenan las preguntas: si la primera falla, se hace la segunda, y así sucesivamente. Ejemplo: el estado del agua según la temperatura (≤ 0 hielo, < 100 líquido, el resto vapor)."
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 720 410\" role=\"img\" aria-label=\"Cadena else if: cada pregunta només es fa si les anteriors han estat falses\" role=\"img\">\n<rect class=\"bxa\" x=\"20\" y=\"14\" width=\"120\" height=\"38\" rx=\"6\"></rect><text class=\"dm\" x=\"80\" y=\"33\" text-anchor=\"middle\" dominant-baseline=\"central\">cin &gt;&gt; t</text>\n<path class=\"ln\" d=\"M80 52 V78\" marker-end=\"url(#ah)\"></path>\n<polygon class=\"bxq\" points=\"80,80 150,120 80,160 10,120\"></polygon><text class=\"dm\" x=\"80\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">t &lt;= 0 ?</text>\n<path class=\"lno\" d=\"M150 120 H198\" marker-end=\"url(#aho)\"></path><text class=\"ds\" x=\"174\" y=\"110\" text-anchor=\"middle\">cert</text>\n<rect class=\"bxo\" x=\"200\" y=\"101\" width=\"130\" height=\"38\" rx=\"6\"></rect><text class=\"dt db\" x=\"265\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">\"Gel\"</text>\n<path class=\"lnb\" d=\"M80 160 V188\" marker-end=\"url(#ahb)\"></path><text class=\"ds\" x=\"92\" y=\"177\" text-anchor=\"start\">fals</text>\n<polygon class=\"bxq\" points=\"80,190 150,230 80,270 10,230\"></polygon><text class=\"dm\" x=\"80\" y=\"230\" text-anchor=\"middle\" dominant-baseline=\"central\">t &lt; 100 ?</text>\n<path class=\"lno\" d=\"M150 230 H198\" marker-end=\"url(#aho)\"></path><text class=\"ds\" x=\"174\" y=\"220\" text-anchor=\"middle\">cert</text>\n<rect class=\"bxo\" x=\"200\" y=\"211\" width=\"130\" height=\"38\" rx=\"6\"></rect><text class=\"dt db\" x=\"265\" y=\"230\" text-anchor=\"middle\" dominant-baseline=\"central\">\"Liquid\"</text>\n<path class=\"lnb\" d=\"M80 270 V298\" marker-end=\"url(#ahb)\"></path><text class=\"ds\" x=\"92\" y=\"287\" text-anchor=\"start\">fals</text>\n<rect class=\"bxw\" x=\"20\" y=\"300\" width=\"120\" height=\"38\" rx=\"6\"></rect><text class=\"dt db\" x=\"80\" y=\"319\" text-anchor=\"middle\" dominant-baseline=\"central\">\"Vapor\"</text>\n<path class=\"ln\" d=\"M330 120 H400 V356\"></path><path class=\"ln\" d=\"M330 230 H400\"></path><path class=\"ln\" d=\"M140 319 H400\"></path>\n<path class=\"ln\" d=\"M400 356 V364\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxg\" x=\"330\" y=\"366\" width=\"140\" height=\"34\" rx=\"6\"></rect><text class=\"dt\" x=\"400\" y=\"383\" text-anchor=\"middle\" dominant-baseline=\"central\">continua</text>\n<text class=\"dm\" x=\"470\" y=\"120\" dominant-baseline=\"central\">if (t &lt;= 0)</text>\n<text class=\"dm\" x=\"470\" y=\"230\" dominant-baseline=\"central\">else if (t &lt; 100)</text>\n<text class=\"ds\" x=\"470\" y=\"250\" dominant-baseline=\"central\">aquí ja se sap que t &gt; 0</text>\n<text class=\"dm\" x=\"470\" y=\"319\" dominant-baseline=\"central\">else</text>\n<path class=\"lnd\" d=\"M460 120 H420\"></path><path class=\"lnd\" d=\"M460 230 H420\"></path><path class=\"lnd\" d=\"M460 319 H420\"></path>\n</svg></div>\n<figcaption>Cada pregunta només es fa si totes les anteriors han estat falses. Com a màxim s'executa una branca, i amb l'<code>else</code> final, exactament una.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 720 410\" role=\"img\" aria-label=\"Cadena else if: cada pregunta solo se hace si las anteriores han sido falsas\" role=\"img\">\n<rect class=\"bxa\" x=\"20\" y=\"14\" width=\"120\" height=\"38\" rx=\"6\"></rect><text class=\"dm\" x=\"80\" y=\"33\" text-anchor=\"middle\" dominant-baseline=\"central\">cin &gt;&gt; t</text>\n<path class=\"ln\" d=\"M80 52 V78\" marker-end=\"url(#ah)\"></path>\n<polygon class=\"bxq\" points=\"80,80 150,120 80,160 10,120\"></polygon><text class=\"dm\" x=\"80\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">t &lt;= 0 ?</text>\n<path class=\"lno\" d=\"M150 120 H198\" marker-end=\"url(#aho)\"></path><text class=\"ds\" x=\"174\" y=\"110\" text-anchor=\"middle\">cierto</text>\n<rect class=\"bxo\" x=\"200\" y=\"101\" width=\"130\" height=\"38\" rx=\"6\"></rect><text class=\"dt db\" x=\"265\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">\"Gel\"</text>\n<path class=\"lnb\" d=\"M80 160 V188\" marker-end=\"url(#ahb)\"></path><text class=\"ds\" x=\"92\" y=\"177\" text-anchor=\"start\">falso</text>\n<polygon class=\"bxq\" points=\"80,190 150,230 80,270 10,230\"></polygon><text class=\"dm\" x=\"80\" y=\"230\" text-anchor=\"middle\" dominant-baseline=\"central\">t &lt; 100 ?</text>\n<path class=\"lno\" d=\"M150 230 H198\" marker-end=\"url(#aho)\"></path><text class=\"ds\" x=\"174\" y=\"220\" text-anchor=\"middle\">cierto</text>\n<rect class=\"bxo\" x=\"200\" y=\"211\" width=\"130\" height=\"38\" rx=\"6\"></rect><text class=\"dt db\" x=\"265\" y=\"230\" text-anchor=\"middle\" dominant-baseline=\"central\">\"Liquid\"</text>\n<path class=\"lnb\" d=\"M80 270 V298\" marker-end=\"url(#ahb)\"></path><text class=\"ds\" x=\"92\" y=\"287\" text-anchor=\"start\">falso</text>\n<rect class=\"bxw\" x=\"20\" y=\"300\" width=\"120\" height=\"38\" rx=\"6\"></rect><text class=\"dt db\" x=\"80\" y=\"319\" text-anchor=\"middle\" dominant-baseline=\"central\">\"Vapor\"</text>\n<path class=\"ln\" d=\"M330 120 H400 V356\"></path><path class=\"ln\" d=\"M330 230 H400\"></path><path class=\"ln\" d=\"M140 319 H400\"></path>\n<path class=\"ln\" d=\"M400 356 V364\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxg\" x=\"330\" y=\"366\" width=\"140\" height=\"34\" rx=\"6\"></rect><text class=\"dt\" x=\"400\" y=\"383\" text-anchor=\"middle\" dominant-baseline=\"central\">continúa</text>\n<text class=\"dm\" x=\"470\" y=\"120\" dominant-baseline=\"central\">if (t &lt;= 0)</text>\n<text class=\"dm\" x=\"470\" y=\"230\" dominant-baseline=\"central\">else if (t &lt; 100)</text>\n<text class=\"ds\" x=\"470\" y=\"250\" dominant-baseline=\"central\">aquí ya se sabe que t &gt; 0</text>\n<text class=\"dm\" x=\"470\" y=\"319\" dominant-baseline=\"central\">else</text>\n<path class=\"lnd\" d=\"M460 120 H420\"></path><path class=\"lnd\" d=\"M460 230 H420\"></path><path class=\"lnd\" d=\"M460 319 H420\"></path>\n</svg></div>\n<figcaption>Cada pregunta solo se hace si todas las anteriores han sido falsas. Como máximo se ejecuta una rama, y con el <code>else</code> final, exactamente una.</figcaption>\n</figure>"
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "aigua.cpp",
     "run": true,
     "trace": true,
     "in": "37"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    double t;\n    cin >> t;\n    if (t <= 0) {\n        cout << \"Gel\" << endl;\n    } else if (t < 100) {          // no cal posar t > 0 && t < 100\n        cout << \"Liquid\" << endl;\n    } else {\n        cout << \"Vapor\" << endl;\n    }\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    double t;\n    cin >> t;\n    if (t <= 0) {\n        cout << \"Gel\" << endl;\n    } else if (t < 100) {          // no hace falta poner t > 0 && t < 100\n        cout << \"Liquid\" << endl;\n    } else {\n        cout << \"Vapor\" << endl;\n    }\n    return 0;\n}"
    ]
   },
   {
    "t": "p",
    "x": [
     "Fixeu-vos que a la segona pregunta no cal escriure `t > 0 && t < 100`: si hi hem arribat és perquè `t <= 0` ha estat fals. Aprofitar el que ja sabem fa les condicions més curtes i evita deixar forats o solapaments.",
     "Fijaos en que en la segunda pregunta no hace falta escribir `t > 0 && t < 100`: si hemos llegado hasta ella es porque `t <= 0` ha sido falso. Aprovechar lo que ya sabemos hace las condiciones más cortas y evita dejar huecos o solapamientos."
    ]
   },
   {
    "t": "h",
    "x": [
     "L'ordre de les preguntes importa",
     "El orden de las preguntas importa"
    ]
   },
   {
    "t": "p",
    "x": [
     "Com que s'executa la **primera** branca certa, l'ordre canvia el resultat. Volem: 9 o més, «Excel·lent»; 7 o més, «Notable»; 5 o més, «Aprovat»; si no, «Suspès».",
     "Como se ejecuta la **primera** rama cierta, el orden cambia el resultado. Queremos: 9 o más, «Excel·lent»; 7 o más, «Notable»; 5 o más, «Aprovat»; si no, «Suspès»."
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
         "Ordre correcte",
         "Orden correcto"
        ],
        "nonum": true
       },
       "src": "if (nota >= 9) {\n    cout << \"Excel·lent\";\n} else if (nota >= 7) {\n    cout << \"Notable\";\n} else if (nota >= 5) {\n    cout << \"Aprovat\";\n} else {\n    cout << \"Suspès\";\n}"
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "props": {
        "title": [
         "Ordre incorrecte",
         "Orden incorrecto"
        ],
        "nonum": true
       },
       "src": [
        "if (nota >= 5) {\n    cout << \"Aprovat\";\n} else if (nota >= 7) {      // mai no hi arriba\n    cout << \"Notable\";\n} else if (nota >= 9) {      // mai no hi arriba\n    cout << \"Excel·lent\";\n} else {\n    cout << \"Suspès\";\n}",
        "if (nota >= 5) {\n    cout << \"Aprovat\";\n} else if (nota >= 7) {      // nunca llega aquí\n    cout << \"Notable\";\n} else if (nota >= 9) {      // nunca llega aquí\n    cout << \"Excel·lent\";\n} else {\n    cout << \"Suspès\";\n}"
       ]
      }
     ]
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Amb la versió incorrecta, qualsevol nota ≥ 5 cau a la primera branca.</caption>\n<thead><tr><th class=\"c\">nota</th><th>Ordre correcte</th><th>Ordre incorrecte</th></tr></thead>\n<tbody>\n<tr><td class=\"c\">9.5</td><td class=\"ip-v\">Excel·lent</td><td class=\"ip-f\">Aprovat</td></tr>\n<tr><td class=\"c\">7.2</td><td class=\"ip-v\">Notable</td><td class=\"ip-f\">Aprovat</td></tr>\n<tr><td class=\"c\">5.0</td><td class=\"ip-v\">Aprovat</td><td class=\"ip-v\">Aprovat</td></tr>\n<tr><td class=\"c\">3.4</td><td class=\"ip-v\">Suspès</td><td class=\"ip-v\">Suspès</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Con la versión incorrecta, cualquier nota ≥ 5 cae en la primera rama.</caption>\n<thead><tr><th class=\"c\">nota</th><th>Orden correcto</th><th>Orden incorrecto</th></tr></thead>\n<tbody>\n<tr><td class=\"c\">9.5</td><td class=\"ip-v\">Excel·lent</td><td class=\"ip-f\">Aprovat</td></tr>\n<tr><td class=\"c\">7.2</td><td class=\"ip-v\">Notable</td><td class=\"ip-f\">Aprovat</td></tr>\n<tr><td class=\"c\">5.0</td><td class=\"ip-v\">Aprovat</td><td class=\"ip-v\">Aprovat</td></tr>\n<tr><td class=\"c\">3.4</td><td class=\"ip-v\">Suspès</td><td class=\"ip-v\">Suspès</td></tr>\n</tbody>\n</table></div>"
    ]
   },
   {
    "t": "tip",
    "title": [
     "Regla pràctica",
     "Regla práctica"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "En una cadena amb `>=`, comenceu pel llindar **més alt**; amb `<=` o `<`, pel **més baix**. I comproveu sempre els valors frontera (5, 7, 9): és on fallen les condicions.",
       "En una cadena con `>=`, empezad por el umbral **más alto**; con `<=` o `<`, por el **más bajo**. Y comprobad siempre los valores frontera (5, 7, 9): es donde fallan las condiciones."
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "Condicionals niuades o condicions compostes?",
     "¿Condicionales anidadas o condiciones compuestas?"
    ]
   },
   {
    "t": "p",
    "x": [
     "Un `if` pot anar dins d'un altre. Sovint el mateix problema es pot escriure niuant o combinant amb `&&`. Exemple: s'aprova si la nota és ≥ 5 **i** l'assistència ≥ 80 %, i en cas contrari volem saber el motiu.",
     "Un `if` puede ir dentro de otro. A menudo el mismo problema se puede escribir anidando o combinando con `&&`. Ejemplo: se aprueba si la nota es ≥ 5 **y** la asistencia ≥ 80 %, y en caso contrario queremos saber el motivo."
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
         "Niuat: dona el motiu",
         "Anidado: da el motivo"
        ],
        "nonum": true
       },
       "src": "if (nota >= 5) {\n    if (assist >= 80) {\n        cout << \"Aprovat\";\n    } else {\n        cout << \"Suspes per assistencia\";\n    }\n} else {\n    cout << \"Suspes per nota\";\n}"
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "props": {
        "title": [
         "Compost: només sí o no",
         "Compuesto: solo sí o no"
        ],
        "nonum": true
       },
       "src": "if (nota >= 5 && assist >= 80) {\n    cout << \"Aprovat\";\n} else {\n    cout << \"Suspes\";\n}"
      }
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Si només cal saber sí o no, la condició composta és més clara. Si cada combinació porta a una resposta diferent, cal niuar. Cada `else` s'aparella amb l'`if` obert més proper: amb claus i bon sagnat no hi ha dubte.",
     "Si solo hace falta saber sí o no, la condición compuesta es más clara. Si cada combinación lleva a una respuesta diferente, hay que anidar. Cada `else` se empareja con el `if` abierto más cercano: con llaves y una buena sangría no hay duda."
    ]
   }
  ],
  "s3-5": [
   {
    "t": "p",
    "x": [
     "És el `SEGONS_SIGUI`: compara **una** variable amb una llista de valors concrets. Exemple: un semàfor que rep un caràcter.",
     "Es el `SEGONS_SIGUI`: compara **una** variable con una lista de valores concretos. Ejemplo: un semáforo que recibe un carácter."
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
        "in": "G"
       },
       "src": [
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS      DESCRIPCIÓ\n   E      llum          Caràcter   V = verd, G = groc, R = vermell\n\nINICI_SEQÜÈNCIA\n    Llegir llum\n    SEGONS_SIGUI llum FER\n        'V': Escriure \"Passa\"\n        'G': Escriure \"Frena\"\n        'R': Escriure \"Atura't\"\n    ALTRAMENT\n        Escriure \"Llum desconeguda\"\n    FI_SEGONS_SIGUI\nFI_SEQÜÈNCIA",
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS      DESCRIPCIÓ\n   E      llum          Caràcter   V = verde, G = amarillo, R = rojo\n\nINICI_SEQÜÈNCIA\n    Llegir llum\n    SEGONS_SIGUI llum FER\n        'V': Escriure \"Passa\"\n        'G': Escriure \"Frena\"\n        'R': Escriure \"Atura't\"\n    ALTRAMENT\n        Escriure \"Llum desconeguda\"\n    FI_SEGONS_SIGUI\nFI_SEQÜÈNCIA"
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char llum;\n    cin >> llum;\n    switch (llum) {\n        case 'V':\n            cout << \"Passa\" << endl;\n            break;\n        case 'G':\n            cout << \"Frena\" << endl;\n            break;\n        case 'R':\n            cout << \"Atura't\" << endl;\n            break;\n        default:\n            cout << \"Llum desconeguda\" << endl;\n    }\n    return 0;\n}",
       "props": {
        "title": "semafor.cpp",
        "run": true,
        "trace": true,
        "in": "G"
       }
      }
     ]
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Peça",
      "Pieza"
     ],
     [
      "Què fa",
      "Qué hace"
     ]
    ],
    "rows": [
     [
      "`switch (llum)`",
      [
       "Avalua l'expressió **una sola vegada**. Ha de ser entera o `char`: no serveix amb `double` ni amb `string`.",
       "Evalúa la expresión **una sola vez**. Debe ser entera o `char`: no sirve con `double` ni con `string`."
      ]
     ],
     [
      "`case 'V':`",
      [
       "Punt d'entrada si el valor és exactament `'V'`. Cada valor ha de ser una constant (no `case x > 5:`).",
       "Punto de entrada si el valor es exactamente `'V'`. Cada valor debe ser una constante (no `case x > 5:`)."
      ]
     ],
     [
      "`break;`",
      [
       "Surt del `switch`. Sense `break`, l'execució **continua** pel `case` següent.",
       "Sale del `switch`. Sin `break`, la ejecución **continúa** por el `case` siguiente."
      ]
     ],
     [
      "`default:`",
      [
       "Si no coincideix cap `case`. És l'`ALTRAMENT`. És opcional.",
       "Si no coincide ningún `case`. Es el `ALTRAMENT`. Es opcional."
      ]
     ]
    ]
   },
   {
    "t": "warn",
    "title": [
     "El break oblidat",
     "El break olvidado"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un `case` només és un punt d'entrada: un cop dins, el programa va baixant fins que troba un `break` o el final del `switch`. Aquí falta el `break` del groc. Executeu-lo amb `G`:",
       "Un `case` solo es un punto de entrada: una vez dentro, el programa va bajando hasta que encuentra un `break` o el final del `switch`. Aquí falta el `break` del amarillo. Ejecutadlo con `G`:"
      ]
     }
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "sense_break.cpp",
     "run": true,
     "trace": true,
     "in": "G"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    char llum;\n    cin >> llum;\n    switch (llum) {\n        case 'V':\n            cout << \"Passa\" << endl;\n            break;\n        case 'G':\n            cout << \"Frena\" << endl;     // falta el break: continua avall\n        case 'R':\n            cout << \"Atura't\" << endl;\n            break;\n        default:\n            cout << \"Llum desconeguda\" << endl;\n    }\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    char llum;\n    cin >> llum;\n    switch (llum) {\n        case 'V':\n            cout << \"Passa\" << endl;\n            break;\n        case 'G':\n            cout << \"Frena\" << endl;     // falta el break: sigue hacia abajo\n        case 'R':\n            cout << \"Atura't\" << endl;\n            break;\n        default:\n            cout << \"Llum desconeguda\" << endl;\n    }\n    return 0;\n}"
    ]
   },
   {
    "t": "p",
    "x": [
     "Aquesta caiguda d'un `case` a l'altre té un ús legítim: agrupar valors que fan el mateix, com ara acceptar majúscules i minúscules.",
     "Esta caída de un `case` al otro tiene un uso legítimo: agrupar valores que hacen lo mismo, como por ejemplo aceptar mayúsculas y minúsculas."
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "src": "switch (llum) {\n    case 'v':\n    case 'V':\n        cout << \"Passa\" << endl;\n        break;\n    // ...\n}",
    "props": {
     "nonum": true
    }
   },
   {
    "t": "table",
    "head": [
     [
      "Situació",
      "Situación"
     ],
     [
      "Millor eina",
      "Mejor herramienta"
     ]
    ],
    "rows": [
     [
      [
       "Una variable entera o `char` comparada amb valors concrets (menú, codi, lletra)",
       "Una variable entera o `char` comparada con valores concretos (menú, código, letra)"
      ],
      "`switch`"
     ],
     [
      [
       "Intervals (`nota >= 7`), reals o condicions amb diverses variables",
       "Intervalos (`nota >= 7`), reales o condiciones con varias variables"
      ],
      "Cadena `if … else if`"
     ]
    ]
   }
  ],
  "s3-6": [
   {
    "t": "p",
    "x": [
     "Els enunciats demanen sovint «amb 2 decimals». Per defecte, `cout` escriu un real amb el mínim de xifres necessari (5 i no 5.00). Amb la llibreria `<iomanip>`:",
     "Los enunciados piden a menudo «con 2 decimales». Por defecto, `cout` escribe un real con el mínimo de cifras necesario (5 y no 5.00). Con la biblioteca `<iomanip>`:"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "`fixed`: notació decimal normal, sense exponents.",
      "`fixed`: notación decimal normal, sin exponentes."
     ],
     [
      "`setprecision(n)`: amb `fixed`, **n decimals exactes**, arrodonint.",
      "`setprecision(n)`: con `fixed`, **n decimales exactos**, redondeando."
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Totes dues opcions queden actives per a **tota** la resta del programa; n'hi ha prou de posar-les una vegada.",
     "Ambas opciones quedan activas para **todo** el resto del programa; basta con ponerlas una vez."
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "decimals.cpp",
     "run": true
    },
    "src": [
     "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double a = 5, b = 6.25, c = 2.0 / 3;\n    cout << a << \" | \" << b << \" | \" << c << endl;      // per defecte\n    cout << fixed << setprecision(2);                    // a partir d'aquí, 2 decimals\n    cout << a << \" | \" << b << \" | \" << c << endl;\n    cout << setprecision(3) << c << endl;                // ara, 3 decimals\n    return 0;\n}",
     "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double a = 5, b = 6.25, c = 2.0 / 3;\n    cout << a << \" | \" << b << \" | \" << c << endl;      // por defecto\n    cout << fixed << setprecision(2);                    // a partir de aquí, 2 decimales\n    cout << a << \" | \" << b << \" | \" << c << endl;\n    cout << setprecision(3) << c << endl;                // ahora, 3 decimales\n    return 0;\n}"
    ]
   },
   {
    "t": "table",
    "head": [
     "Valor",
     [
      "Per defecte",
      "Por defecto"
     ],
     "fixed + setprecision(2)"
    ],
    "rows": [
     [
      "5",
      "5",
      "5.00"
     ],
     [
      "6.25",
      "6.25",
      "6.25"
     ],
     [
      "2.0 / 3",
      "0.666667",
      "0.67"
     ]
    ]
   },
   {
    "t": "warn",
    "title": [
     "Compte amb setprecision sense fixed",
     "Cuidado con setprecision sin fixed"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Sense `fixed`, `setprecision(n)` vol dir **n xifres significatives**, no n decimals: `setprecision(2)` escriu 12.75 com a «13». Poseu sempre `fixed` davant.",
       "Sin `fixed`, `setprecision(n)` significa **n cifras significativas**, no n decimales: `setprecision(2)` escribe 12.75 como «13». Poned siempre `fixed` delante."
      ]
     }
    ]
   }
  ],
  "s3-7": [
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
       "En una botiga es venen ous en capses de 12 i també d'escadussers (solts). N'hi ha de tres qualitats: **A** a 3 € la dotzena, **B** a 2,50 € i **C** a 2 €. Els escadussers es paguen a 0,30, 0,25 i 0,20 € la unitat, respectivament. Entrats la quantitat d'ous i el tipus, cal dir quantes capses i quants ous solts cal lliurar, i l'import de la compra.",
       "En una tienda se venden huevos en cajas de 12 y también sueltos. Los hay de tres calidades: **A** a 3 € la docena, **B** a 2,50 € y **C** a 2 €. Los huevos sueltos se pagan a 0,30, 0,25 y 0,20 € la unidad, respectivamente. Dados la cantidad de huevos y el tipo, hay que decir cuántas cajas y cuántos huevos sueltos hay que entregar, y el importe de la compra."
      ]
     },
     {
      "t": "p",
      "x": [
       "Sortida: `Dotzenes: ND`, `Escadussers: NE` i `IMPORT: X.XX` (amb 2 decimals), cadascuna en una línia.",
       "Salida: `Dotzenes: ND`, `Escadussers: NE` e `IMPORT: X.XX` (con 2 decimales), cada una en una línea."
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "Analitzar: què és dada, què és resultat, què és intern",
     "Analizar: qué es dato, qué es resultado, qué es interno"
    ]
   },
   {
    "t": "table",
    "head": [
     "E/S",
     [
      "Nom",
      "Nombre"
     ],
     [
      "Tipus",
      "Tipo"
     ],
     [
      "Descripció",
      "Descripción"
     ]
    ],
    "rows": [
     [
      "E",
      "`NO`",
      "int",
      [
       "Nombre d'ous comprats",
       "Número de huevos comprados"
      ]
     ],
     [
      "E",
      "`TPO`",
      "char",
      [
       "Qualitat: `'A'`, `'B'` o `'C'`",
       "Calidad: `'A'`, `'B'` o `'C'`"
      ]
     ],
     [
      "S",
      "`ND`",
      "int",
      [
       "Capses (dotzenes senceres)",
       "Cajas (docenas enteras)"
      ]
     ],
     [
      "S",
      "`NE`",
      "int",
      [
       "Ous escadussers (de 0 a 11)",
       "Huevos sueltos (de 0 a 11)"
      ]
     ],
     [
      "",
      "`PD`, `PE`",
      "double",
      [
       "Preu de la dotzena i de l'ou solt (depenen del tipus)",
       "Precio de la docena y del huevo suelto (dependen del tipo)"
      ]
     ],
     [
      "S",
      "`IMP`",
      "double",
      [
       "Import total",
       "Importe total"
      ]
     ]
    ]
   },
   {
    "t": "h",
    "x": [
     "Dissenyar: tres passos",
     "Diseñar: tres pasos"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "**Repartir els ous** (com a la Fàbrica de Pilotes): `ND = NO / 12` i `NE = NO % 12`.",
      "**Repartir los huevos** (como en la Fábrica de Pelotas): `ND = NO / 12` y `NE = NO % 12`."
     ],
     [
      "**Triar els preus** segons el tipus. Com que es compara una lletra amb valors concrets, és un `switch`.",
      "**Elegir los precios** según el tipo. Como se compara una letra con valores concretos, es un `switch`."
     ],
     [
      "**Calcular l'import**: `IMP = ND · PD + NE · PE`, i escriure-ho tot amb el format demanat.",
      "**Calcular el importe**: `IMP = ND · PD + NE · PE`, y escribirlo todo con el formato pedido."
     ]
    ],
    "ordered": true
   },
   {
    "t": "table",
    "head": [
     "TPO",
     [
      "PD (€ / dotzena)",
      "PD (€ / docena)"
     ],
     [
      "PE (€ / ou)",
      "PE (€ / huevo)"
     ]
    ],
    "rows": [
     [
      "'A'",
      "3.00",
      "0.30"
     ],
     [
      "'B'",
      "2.50",
      "0.25"
     ],
     [
      "'C'",
      "2.00",
      "0.20"
     ]
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 760 250\" role=\"img\" aria-label=\"El switch tria els preus segons el tipus i després es calcula l'import\" role=\"img\">\n<rect class=\"bxa\" x=\"10\" y=\"105\" width=\"150\" height=\"40\" rx=\"6\"></rect><text class=\"dm\" x=\"85\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"central\">switch (TPO)</text>\n<path class=\"ln\" d=\"M160 125 H190 V45 H238\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M190 125 H238\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M190 125 V205 H238\" marker-end=\"url(#ah)\"></path>\n<text class=\"dm\" x=\"214\" y=\"36\" text-anchor=\"middle\">'A'</text><text class=\"dm\" x=\"214\" y=\"116\" text-anchor=\"middle\">'B'</text><text class=\"dm\" x=\"214\" y=\"196\" text-anchor=\"middle\">'C'</text>\n<rect class=\"bxq\" x=\"240\" y=\"22\" width=\"190\" height=\"46\" rx=\"6\"></rect><text class=\"dm\" x=\"335\" y=\"45\" text-anchor=\"middle\" dominant-baseline=\"central\">PD = 3;  PE = 0.30</text>\n<rect class=\"bxq\" x=\"240\" y=\"102\" width=\"190\" height=\"46\" rx=\"6\"></rect><text class=\"dm\" x=\"335\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"central\">PD = 2.5;  PE = 0.25</text>\n<rect class=\"bxq\" x=\"240\" y=\"182\" width=\"190\" height=\"46\" rx=\"6\"></rect><text class=\"dm\" x=\"335\" y=\"205\" text-anchor=\"middle\" dominant-baseline=\"central\">PD = 2;  PE = 0.20</text>\n<path class=\"ln\" d=\"M430 45 H470 V205 H430\"></path><path class=\"ln\" d=\"M430 125 H470\"></path>\n<text class=\"ds\" x=\"478\" y=\"70\" text-anchor=\"start\">break</text>\n<path class=\"ln\" d=\"M470 125 H508\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"510\" y=\"98\" width=\"240\" height=\"54\" rx=\"6\"></rect><text class=\"dm\" x=\"630\" y=\"118\" text-anchor=\"middle\" dominant-baseline=\"central\">IMP = ND*PD + NE*PE</text><text class=\"ds\" x=\"630\" y=\"138\" text-anchor=\"middle\" dominant-baseline=\"central\">un sol càlcul per als tres tipus</text>\n</svg></div>\n<figcaption>El <code>switch</code> només decideix els preus; el càlcul de l'import és comú i es fa una sola vegada, després.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 760 250\" role=\"img\" aria-label=\"El switch elige los precios según el tipo y después se calcula el importe\" role=\"img\">\n<rect class=\"bxa\" x=\"10\" y=\"105\" width=\"150\" height=\"40\" rx=\"6\"></rect><text class=\"dm\" x=\"85\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"central\">switch (TPO)</text>\n<path class=\"ln\" d=\"M160 125 H190 V45 H238\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M190 125 H238\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M190 125 V205 H238\" marker-end=\"url(#ah)\"></path>\n<text class=\"dm\" x=\"214\" y=\"36\" text-anchor=\"middle\">'A'</text><text class=\"dm\" x=\"214\" y=\"116\" text-anchor=\"middle\">'B'</text><text class=\"dm\" x=\"214\" y=\"196\" text-anchor=\"middle\">'C'</text>\n<rect class=\"bxq\" x=\"240\" y=\"22\" width=\"190\" height=\"46\" rx=\"6\"></rect><text class=\"dm\" x=\"335\" y=\"45\" text-anchor=\"middle\" dominant-baseline=\"central\">PD = 3;  PE = 0.30</text>\n<rect class=\"bxq\" x=\"240\" y=\"102\" width=\"190\" height=\"46\" rx=\"6\"></rect><text class=\"dm\" x=\"335\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"central\">PD = 2.5;  PE = 0.25</text>\n<rect class=\"bxq\" x=\"240\" y=\"182\" width=\"190\" height=\"46\" rx=\"6\"></rect><text class=\"dm\" x=\"335\" y=\"205\" text-anchor=\"middle\" dominant-baseline=\"central\">PD = 2;  PE = 0.20</text>\n<path class=\"ln\" d=\"M430 45 H470 V205 H430\"></path><path class=\"ln\" d=\"M430 125 H470\"></path>\n<text class=\"ds\" x=\"478\" y=\"70\" text-anchor=\"start\">break</text>\n<path class=\"ln\" d=\"M470 125 H508\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"510\" y=\"98\" width=\"240\" height=\"54\" rx=\"6\"></rect><text class=\"dm\" x=\"630\" y=\"118\" text-anchor=\"middle\" dominant-baseline=\"central\">IMP = ND*PD + NE*PE</text><text class=\"ds\" x=\"630\" y=\"138\" text-anchor=\"middle\" dominant-baseline=\"central\">un solo cálculo para los tres tipos</text>\n</svg></div>\n<figcaption>El <code>switch</code> solo decide los precios; el cálculo del importe es común y se hace una sola vez, después.</figcaption>\n</figure>"
    ]
   },
   {
    "t": "h",
    "x": [
     "Comprovar a mà abans de programar",
     "Comprobar a mano antes de programar"
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Traça amb NO = 29 i TPO = 'B'.</caption>\n<thead><tr><th>Instrucció</th><th class=\"c\">ND</th><th class=\"c\">NE</th><th class=\"c\">PD</th><th class=\"c\">PE</th><th class=\"c\">IMP</th></tr></thead>\n<tbody>\n<tr><td>ND = NO / 12;</td><td class=\"c hl\">2</td><td class=\"c\">?</td><td class=\"c\">?</td><td class=\"c\">?</td><td class=\"c\">?</td></tr>\n<tr><td>NE = NO % 12;</td><td class=\"c\">2</td><td class=\"c hl\">5</td><td class=\"c\">?</td><td class=\"c\">?</td><td class=\"c\">?</td></tr>\n<tr><td>case 'B': PD = 2.5; PE = 0.25;</td><td class=\"c\">2</td><td class=\"c\">5</td><td class=\"c hl\">2.5</td><td class=\"c hl\">0.25</td><td class=\"c\">?</td></tr>\n<tr><td>IMP = ND*PD + NE*PE;</td><td class=\"c\">2</td><td class=\"c\">5</td><td class=\"c\">2.5</td><td class=\"c\">0.25</td><td class=\"c hl\">6.25</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Traza con NO = 29 y TPO = 'B'.</caption>\n<thead><tr><th>Instrucción</th><th class=\"c\">ND</th><th class=\"c\">NE</th><th class=\"c\">PD</th><th class=\"c\">PE</th><th class=\"c\">IMP</th></tr></thead>\n<tbody>\n<tr><td>ND = NO / 12;</td><td class=\"c hl\">2</td><td class=\"c\">?</td><td class=\"c\">?</td><td class=\"c\">?</td><td class=\"c\">?</td></tr>\n<tr><td>NE = NO % 12;</td><td class=\"c\">2</td><td class=\"c hl\">5</td><td class=\"c\">?</td><td class=\"c\">?</td><td class=\"c\">?</td></tr>\n<tr><td>case 'B': PD = 2.5; PE = 0.25;</td><td class=\"c\">2</td><td class=\"c\">5</td><td class=\"c hl\">2.5</td><td class=\"c hl\">0.25</td><td class=\"c\">?</td></tr>\n<tr><td>IMP = ND*PD + NE*PE;</td><td class=\"c\">2</td><td class=\"c\">5</td><td class=\"c\">2.5</td><td class=\"c\">0.25</td><td class=\"c hl\">6.25</td></tr>\n</tbody>\n</table></div>"
    ]
   },
   {
    "t": "p",
    "x": [
     "2 · 2,50 + 5 · 0,25 = 5,00 + 1,25 = 6,25 €. Ara el programa, en pseudocodi i en C++. Al pseudocodi la variable es diu `NOUS` perquè `NO` és l'operador lògic de negació i no es pot fer servir com a nom. Proveu també `11 A`, `24 B`, `0 C` i `100 A` (ha de donar 25.20):",
     "2 · 2,50 + 5 · 0,25 = 5,00 + 1,25 = 6,25 €. Ahora el programa, en pseudocódigo y en C++. En el pseudocódigo la variable se llama `NOUS` porque `NO` es el operador lógico de negación y no se puede usar como nombre. Probad también `11 A`, `24 B`, `0 C` y `100 A` (debe dar 25.20):"
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
        "in": "29 B"
       },
       "src": [
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS      DESCRIPCIÓ\n   E      NOUS          Natural    Nombre d'ous\n   E      TPO           Caràcter   Qualitat: 'A', 'B' o 'C'\n   S      ND            Natural    Dotzenes (capses)\n   S      NE            Natural    Ous escadussers\n          PD            Real       Preu de la dotzena\n          PE            Real       Preu de l'ou escadusser\n   S      IMP           Real       Import de la compra\n\nINICI_SEQÜÈNCIA\n    Llegir NOUS, TPO\n    ND ← NOUS ‖ 12\n    NE ← NOUS |R 12\n    SEGONS_SIGUI TPO FER\n        'A': PD ← 3\n             PE ← 0.30\n        'B': PD ← 2.5\n             PE ← 0.25\n        'C': PD ← 2\n             PE ← 0.20\n    FI_SEGONS_SIGUI\n    IMP ← ND · PD + NE · PE\n    Escriure \"Dotzenes: \", ND\n    Escriure \"Escadussers: \", NE\n    Escriure \"IMPORT: \", IMP\nFI_SEQÜÈNCIA",
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS      DESCRIPCIÓ\n   E      NOUS          Natural    Número de huevos\n   E      TPO           Caràcter   Calidad: 'A', 'B' o 'C'\n   S      ND            Natural    Docenas (cajas)\n   S      NE            Natural    Huevos sueltos\n          PD            Real       Precio de la docena\n          PE            Real       Precio del huevo suelto\n   S      IMP           Real       Importe de la compra\n\nINICI_SEQÜÈNCIA\n    Llegir NOUS, TPO\n    ND ← NOUS ‖ 12\n    NE ← NOUS |R 12\n    SEGONS_SIGUI TPO FER\n        'A': PD ← 3\n             PE ← 0.30\n        'B': PD ← 2.5\n             PE ← 0.25\n        'C': PD ← 2\n             PE ← 0.20\n    FI_SEGONS_SIGUI\n    IMP ← ND · PD + NE · PE\n    Escriure \"Dotzenes: \", ND\n    Escriure \"Escadussers: \", NE\n    Escriure \"IMPORT: \", IMP\nFI_SEQÜÈNCIA"
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "props": {
        "title": "ous.cpp",
        "run": true,
        "trace": true,
        "in": "29 B"
       },
       "src": [
        "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int NO;\n    char TPO;\n    double PD = 0, PE = 0;      // preus segons el tipus\n    cin >> NO >> TPO;\n\n    int ND = NO / 12;           // capses senceres\n    int NE = NO % 12;           // ous solts\n\n    switch (TPO) {\n        case 'A':\n            PD = 3;\n            PE = 0.30;\n            break;\n        case 'B':\n            PD = 2.5;\n            PE = 0.25;\n            break;\n        case 'C':\n            PD = 2;\n            PE = 0.20;\n            break;\n    }\n\n    double IMP = ND * PD + NE * PE;\n    cout << \"Dotzenes: \" << ND << endl;\n    cout << \"Escadussers: \" << NE << endl;\n    cout << fixed << setprecision(2) << \"IMPORT: \" << IMP << endl;\n    return 0;\n}",
        "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int NO;\n    char TPO;\n    double PD = 0, PE = 0;      // precios según el tipo\n    cin >> NO >> TPO;\n\n    int ND = NO / 12;           // cajas enteras\n    int NE = NO % 12;           // huevos sueltos\n\n    switch (TPO) {\n        case 'A':\n            PD = 3;\n            PE = 0.30;\n            break;\n        case 'B':\n            PD = 2.5;\n            PE = 0.25;\n            break;\n        case 'C':\n            PD = 2;\n            PE = 0.20;\n            break;\n    }\n\n    double IMP = ND * PD + NE * PE;\n    cout << \"Dotzenes: \" << ND << endl;\n    cout << \"Escadussers: \" << NE << endl;\n    cout << fixed << setprecision(2) << \"IMPORT: \" << IMP << endl;\n    return 0;\n}"
       ]
      }
     ]
    ]
   },
   {
    "t": "tip",
    "title": [
     "Millores i detalls",
     "Mejoras y detalles"
    ],
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "`PD` i `PE` s'inicialitzen a 0: si arribés un tipus que no és A, B ni C, sense inicialitzar l'import seria brossa. Una versió més completa afegiria un `default` que escrigui un missatge d'error.",
        "`PD` y `PE` se inicializan a 0: si llegara un tipo que no es A, B ni C, sin inicializar el importe sería basura. Una versión más completa añadiría un `default` que escribiera un mensaje de error."
       ],
       [
        "`cin >> NO >> TPO` llegeix l'enter i després el caràcter, encara que estiguin separats per un espai: el `>>` salta els espais.",
        "`cin >> NO >> TPO` lee el entero y después el carácter, aunque estén separados por un espacio: el `>>` salta los espacios."
       ],
       [
        "`fixed << setprecision(2)` només afecta els reals: `ND` i `NE` són enters i s'escriuen igual.",
        "`fixed << setprecision(2)` solo afecta a los reales: `ND` y `NE` son enteros y se escriben igual."
       ]
      ]
     }
    ]
   }
  ],
  "s3-8": [
   {
    "t": "table",
    "head": [
     [
      "Escrit",
      "Escrito"
     ],
     [
      "Què passa",
      "Qué ocurre"
     ],
     [
      "Correcte",
      "Correcto"
     ]
    ],
    "rows": [
     [
      "`if (x = 5)`",
      [
       "Assigna 5 i sempre és cert.",
       "Asigna 5 y siempre es cierto."
      ],
      "`if (x == 5)`"
     ],
     [
      "`if (x > 0);`",
      [
       "L'`if` controla una instrucció buida; el bloc s'executa sempre.",
       "El `if` controla una instrucción vacía; el bloque se ejecuta siempre."
      ],
      "`if (x > 0) {`"
     ],
     [
      "`if (0 <= x <= 10)`",
      [
       "Sempre és cert.",
       "Siempre es cierto."
      ],
      "`if (0 <= x && x <= 10)`"
     ],
     [
      "`if (x == 1 || 2)`",
      [
       "El `2` sol ja és cert: sempre entra.",
       "El `2` solo ya es cierto: siempre entra."
      ],
      "`if (x == 1 || x == 2)`"
     ],
     [
      "`case \"A\":`",
      [
       "Error: `\"A\"` és un text; un `char` va amb cometes simples.",
       "Error: `\"A\"` es un texto; un `char` va con comillas simples."
      ],
      "`case 'A':`"
     ],
     [
      [
       "`case 'A': … case 'B':` sense `break`",
       "`case 'A': … case 'B':` sin `break`"
      ],
      [
       "S'executen també les instruccions del cas següent.",
       "Se ejecutan también las instrucciones del caso siguiente."
      ],
      [
       "Un `break;` al final de cada cas.",
       "Un `break;` al final de cada caso."
      ]
     ]
    ]
   }
  ],
  "s3-9": [
   {
    "t": "p",
    "x": [
     "A CodeRunner: «El Pàrking», «El Sou dels Infermers», «Quadrant», «Màxim de dos enters», «Positiu, negatiu o zero», «Nota (A..F) a text» amb `switch` i «Calculadora simple amb operador»; d'ampliació, «Any de traspàs» i «Ordena tres enters». Aquí els teniu, amb altres de reforç, compilador, proves i rellotge:",
     "En CodeRunner: «El Pàrking», «El Sou dels Infermers», «Quadrant», «Màxim de dos enters», «Positiu, negatiu o zero», «Nota (A..F) a text» con `switch` y «Calculadora simple amb operador»; de ampliación, «Any de traspàs» y «Ordena tres enters». Aquí los tenéis, con otros de refuerzo, compilador, pruebas y reloj:"
    ]
   },
   {
    "t": "lab",
    "id": "exlist",
    "props": {
     "wk": 3
    }
   },
   {
    "t": "p",
    "x": [
     "Abans de programar, podeu escriure l'algorisme a [Escriu i prova el pseudocodi](/programacio/practica?unit=t21) i provar-lo amb jocs de proves.",
     "Antes de programar, podéis escribir el algoritmo en [Escribe y prueba el pseudocódigo](/programacio/practica?unit=t21) y probarlo con juegos de pruebas."
    ]
   }
  ],
  "s3-10": [
   {
    "t": "check",
    "ex": {
     "id": "s3-10-q1",
     "qb": [
      {
       "t": "p",
       "x": [
        "Què escriu aquest fragment amb `x = 3`?",
        "¿Qué escribe este fragmento con `x = 3`?"
       ]
      },
      {
       "t": "code",
       "lang": "txt",
       "src": "if (x > 5);\n{\n    cout << \"gran\";\n}\ncout << \"!\";"
      }
     ],
     "type": "mcq",
     "opts": [
      "!",
      "gran!",
      [
       "Error de compilació",
       "Error de compilación"
      ],
      [
       "Res",
       "Nada"
      ]
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "El `;` després de la condició és una instrucció buida: l'`if` acaba aquí. El bloc de claus és independent i s'executa sempre.",
        "El `;` después de la condición es una instrucción vacía: el `if` termina ahí. El bloque de llaves es independiente y se ejecuta siempre."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s3-10-q2",
     "qb": [
      {
       "t": "p",
       "x": [
        "Amb `char op = '-';`, què escriu?",
        "Con `char op = '-';`, ¿qué escribe?"
       ]
      },
      {
       "t": "code",
       "lang": "txt",
       "src": "switch (op) {\n    case '+': cout << \"suma \";\n    case '-': cout << \"resta \";\n    case '*': cout << \"producte \";\n              break;\n    default:  cout << \"res\";\n}"
      }
     ],
     "type": "mcq",
     "opts": [
      "resta",
      "suma resta producte",
      "resta producte",
      "resta producte res"
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "Entra pel `case '-'` i, com que no hi ha `break`, continua pel `case '*'` fins al `break`. El `default` no s'executa.",
        "Entra por el `case '-'` y, como no hay `break`, continúa por el `case '*'` hasta el `break`. El `default` no se ejecuta."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s3-10-q3",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quina condició expressa «x és fora de l'interval \\[1, 10\\]»?",
        "¿Qué condición expresa «x está fuera del intervalo \\[1, 10\\]»?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "`!(1 <= x <= 10)`",
      "`x < 1 && x > 10`",
      "`x <= 1 || x >= 10`",
      "`x < 1 || x > 10`"
     ],
     "answer": 3,
     "sol": [
      {
       "t": "p",
       "x": [
        "Ser fora vol dir ser menor que 1 **o** més gran que 10. Amb `&&` no es compliria mai, i amb `<=`/`>=` els extrems 1 i 10 quedarien fora per error.",
        "Estar fuera significa ser menor que 1 **o** mayor que 10. Con `&&` no se cumpliría nunca, y con `<=`/`>=` los extremos 1 y 10 quedarían fuera por error."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s3-10-q4",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quina d'aquestes expressions **no** es pot fer servir com a `switch (…)`?",
        "¿Cuál de estas expresiones **no** se puede usar como `switch (…)`?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "Una variable `double`",
      "Una variable `char`",
      "Una variable `int`",
      [
       "L'expressió `n % 4` amb `n` enter",
       "La expresión `n % 4` con `n` entero"
      ]
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "El `switch` només admet valors enters o caràcters. Per a reals o intervals, cal una cadena `if … else if`.",
        "El `switch` solo admite valores enteros o caracteres. Para reales o intervalos, hace falta una cadena `if … else if`."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s3-10-q5",
     "qb": [
      {
       "t": "p",
       "x": [
        "A la Botiga dels Ous, quin és l'import de `17 C`?",
        "En la Tienda de los Huevos, ¿cuál es el importe de `17 C`?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "3.40",
      "3.00",
      "2.20",
      "3.20"
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "17 = 1 dotzena + 5 ous solts. 1 · 2,00 + 5 · 0,20 = 2,00 + 1,00 = 3,00 €.",
        "17 = 1 docena + 5 huevos sueltos. 1 · 2,00 + 5 · 0,20 = 2,00 + 1,00 = 3,00 €."
       ]
      }
     ]
    }
   }
  ],
  "s3-11": [
   {
    "t": "summary",
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "La condició va entre parèntesis i el bloc entre claus: `if (cond) { … } else { … }`. Poseu sempre les claus.",
        "La condición va entre paréntesis y el bloque entre llaves: `if (cond) { … } else { … }`. Poned siempre las llaves."
       ],
       [
        "`==` compara i `=` assigna. Els intervals s'escriuen amb `&&`: `a <= x && x <= b`.",
        "`==` compara y `=` asigna. Los intervalos se escriben con `&&`: `a <= x && x <= b`."
       ],
       [
        "En una cadena `else if` s'executa la **primera** branca certa: l'ordre de les preguntes importa.",
        "En una cadena `else if` se ejecuta la **primera** rama cierta: el orden de las preguntas importa."
       ],
       [
        "`switch` és per a un valor enter o `char` comparat amb constants; cada `case` acaba amb `break`.",
        "`switch` es para un valor entero o `char` comparado con constantes; cada `case` termina con `break`."
       ],
       [
        "Per escriure reals amb n decimals: `cout << fixed << setprecision(n)` amb `#include <iomanip>`.",
        "Para escribir reales con n decimales: `cout << fixed << setprecision(n)` con `#include <iomanip>`."
       ]
      ]
     }
    ]
   }
  ]
 },
 "examEnd": []
};
