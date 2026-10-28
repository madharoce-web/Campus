// Generat per tools/kit-import/prog.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "while, for i do-while; comptadors, acumuladors, màxims i sentinelles. Exemples: el Concert de Rock i AndorraRun.",
    "while, for y do-while; contadores, acumuladores, máximos y centinelas. Ejemplos: el Concierto de Rock y AndorraRun.",
    "while, for and do-while; counters, accumulators, maxima and sentinels. Examples: the Rock Concert and AndorraRun."
   ]
  },
  {
   "t": "list",
   "items": [
    [
     "**Sessions:** Dl. 28/09 i dc. 30/09",
     "**Sesiones:** Lu. 28/09 y mi. 30/09",
     "**Sessions:** Mon 28/09 and Wed 30/09"
    ],
    [
     "**Teoria associada:** Tema 2.3",
     "**Teoría asociada:** Tema 2.3",
     "**Related theory:** Unit 2.3"
    ]
   ]
  },
  {
   "t": "p",
   "x": [
    "Els bucles permeten repetir accions sense escriure-les moltes vegades i, sobretot, tractar **seqüències** de dades de les quals no sabem la llargada. Aquesta setmana passem a C++ els esquemes de recorregut i de cerca del Tema 2.3.",
    "Los bucles permiten repetir acciones sin escribirlas muchas veces y, sobre todo, tratar **secuencias** de datos cuya longitud no conocemos. Esta semana pasamos a C++ los esquemas de recorrido y de búsqueda del Tema 2.3.",
    "Loops let you repeat actions without writing them many times and, above all, process **sequences** of data whose length we do not know. This week we take the traversal and search schemes of Unit 2.3 into C++."
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
       "Escriure bucles `while`, `for` i `do … while` i triar el més adequat.",
       "Escribir bucles `while`, `for` y `do … while` y elegir el más adecuado.",
       "Write `while`, `for` and `do … while` loops and choose the most suitable one."
      ],
      [
       "Llegir una seqüència acabada en una **sentinella** (marca de fi) sense tractar la marca.",
       "Leer una secuencia terminada en un **centinela** (marca de fin) sin tratar la marca.",
       "Read a sequence ending with a **sentinel** (end marker) without processing the marker."
      ],
      [
       "Fer servir els patrons de **comptador**, **acumulador**, **màxim** i comptador del màxim.",
       "Usar los patrones de **contador**, **acumulador**, **máximo** y contador del máximo.",
       "Use the **counter**, **accumulator**, **maximum** and maximum-counter patterns."
      ],
      [
       "Aturar un bucle quan es troba el que es busca (esquema de cerca) i saber, en sortir, per què s'ha aturat.",
       "Detener un bucle cuando se encuentra lo que se busca (esquema de búsqueda) y saber, al salir, por qué se ha detenido.",
       "Stop a loop when what you are looking for is found (search scheme) and know, on exit, why it stopped."
      ]
     ]
    }
   ]
  }
 ],
 "sections": {
  "s4-1": [
   {
    "t": "html",
    "h": [
     "<div class=\"ip-map\">\n<div class=\"ip-maph\">Pseudocodi</div><span></span><div class=\"ip-maph\">C++</div>\n<div>MENTRE cond FER … FI_MENTRE</div><span>→</span><div>while (cond) { … }</div>\n<div>DES_DE i ← a FINS b FER … FI_DES_DE</div><span>→</span><div>for (int i = a; i &lt;= b; i++) { … }</div>\n<div>REPETEIX … FINS_QUE cond</div><span>→</span><div>do { … } while (!(cond));</div>\n<div>i ← i + 1</div><span>→</span><div>i++;   (o i = i + 1;)</div>\n<div>suma ← suma + x</div><span>→</span><div>suma += x;   (o suma = suma + x;)</div>\n</div>",
     "<div class=\"ip-map\">\n<div class=\"ip-maph\">Pseudocódigo</div><span></span><div class=\"ip-maph\">C++</div>\n<div>MENTRE cond FER … FI_MENTRE</div><span>→</span><div>while (cond) { … }</div>\n<div>DES_DE i ← a FINS b FER … FI_DES_DE</div><span>→</span><div>for (int i = a; i &lt;= b; i++) { … }</div>\n<div>REPETEIX … FINS_QUE cond</div><span>→</span><div>do { … } while (!(cond));</div>\n<div>i ← i + 1</div><span>→</span><div>i++;   (o i = i + 1;)</div>\n<div>suma ← suma + x</div><span>→</span><div>suma += x;   (o suma = suma + x;)</div>\n</div>",
     "<div class=\"ip-map\">\n<div class=\"ip-maph\">Pseudocode</div><span></span><div class=\"ip-maph\">C++</div>\n<div>MENTRE cond FER … FI_MENTRE</div><span>→</span><div>while (cond) { … }</div>\n<div>DES_DE i ← a FINS b FER … FI_DES_DE</div><span>→</span><div>for (int i = a; i &lt;= b; i++) { … }</div>\n<div>REPETEIX … FINS_QUE cond</div><span>→</span><div>do { … } while (!(cond));</div>\n<div>i ← i + 1</div><span>→</span><div>i++;   (o i = i + 1;)</div>\n<div>suma ← suma + x</div><span>→</span><div>suma += x;   (o suma = suma + x;)</div>\n</div>"
    ],
    "mode": "explained"
   },
   {
    "t": "warn",
    "title": [
     "REPETEIX … FINS_QUE no és el do … while tal qual",
     "REPETEIX … FINS_QUE no es el do … while tal cual",
     "REPETEIX … FINS_QUE is not do … while as it stands"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "El pseudocodi repeteix **fins que** la condició és certa; el C++ repeteix **mentre** la condició és certa. Per traduir-ho cal **negar** la condició: `FINS_QUE x = 0` es converteix en `while (x != 0)`.",
       "El pseudocódigo repite **hasta que** la condición es cierta; el C++ repite **mientras** la condición es cierta. Para traducirlo hay que **negar** la condición: `FINS_QUE x = 0` se convierte en `while (x != 0)`.",
       "Pseudocode repeats **until** the condition is true; C++ repeats **while** the condition is true. To translate it you must **negate** the condition: `FINS_QUE x = 0` becomes `while (x != 0)`."
      ]
     }
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:700px\"><div class=\"ip-figb\"><svg viewBox=\"0 0 860 360\" aria-label=\"Ordinogrames de les tres variants iteratives\" role=\"img\"><text class=\"dm\" x=\"140\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">while (condició) { … }</text><text class=\"dm\" x=\"430\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">do { … } while (condició);</text><text class=\"dm\" x=\"720\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">for (init; condició; pas) { … }</text><rect class=\"bx\" x=\"80\" y=\"40\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"140\" y=\"55\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_A</text><path class=\"ln\" d=\"M140 70 L140 98\" marker-end=\"url(#ah)\"></path><circle cx=\"140\" cy=\"92\" r=\"3\" class=\"fk\"></circle><path class=\"bxa\" d=\"M140 100L210 130L140 160L70 130Z\"></path><text class=\"dt\" x=\"140\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\">condició</text><path class=\"ln\" d=\"M140 160 L140 196\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"130\" y=\"178\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bxo\" x=\"75\" y=\"196\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"140\" y=\"211\" text-anchor=\"middle\" dominant-baseline=\"central\">cos del bucle</text><path class=\"ln\" d=\"M140 226 L140 246 L48 246 L48 92\"></path><path class=\"ln\" d=\"M48 92 L136 92\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M210 130 L235 130 L235 305\"></path><path class=\"ln\" d=\"M235 305 L202 305\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"222\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><rect class=\"bx\" x=\"80\" y=\"290\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"140\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_B</text><text class=\"ds\" x=\"140\" y=\"345\" text-anchor=\"middle\" dominant-baseline=\"central\">cap volta si de bon principi és F</text><rect class=\"bx\" x=\"370\" y=\"40\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"430\" y=\"55\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_A</text><path class=\"ln\" d=\"M430 70 L430 98\" marker-end=\"url(#ah)\"></path><circle cx=\"430\" cy=\"92\" r=\"3\" class=\"fk\"></circle><rect class=\"bxo\" x=\"365\" y=\"105\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"430\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">cos del bucle</text><path class=\"ln\" d=\"M430 135 L430 166\" marker-end=\"url(#ah)\"></path><path class=\"bxa\" d=\"M430 166L500 196L430 226L360 196Z\"></path><text class=\"dt\" x=\"430\" y=\"196\" text-anchor=\"middle\" dominant-baseline=\"central\">condició</text><path class=\"ln\" d=\"M360 196 L338 196 L338 92\"></path><path class=\"ln\" d=\"M338 92 L426 92\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"350\" y=\"186\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><path class=\"ln\" d=\"M430 226 L430 290\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"420\" y=\"252\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bx\" x=\"370\" y=\"290\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"430\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_B</text><text class=\"ds\" x=\"430\" y=\"345\" text-anchor=\"middle\" dominant-baseline=\"central\">com a mínim una volta</text><rect class=\"bx\" x=\"655\" y=\"37\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"720\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\">int i = inici</text><path class=\"ln\" d=\"M720 67 L720 90\" marker-end=\"url(#ah)\"></path><circle cx=\"720\" cy=\"86\" r=\"3\" class=\"fk\"></circle><path class=\"bxa\" d=\"M720 92L800 122L720 152L640 122Z\"></path><text class=\"dm\" x=\"720\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\">i &lt;= final ?</text><path class=\"ln\" d=\"M720 152 L720 180\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"710\" y=\"166\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bxo\" x=\"655\" y=\"180\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"720\" y=\"195\" text-anchor=\"middle\" dominant-baseline=\"central\">cos del bucle</text><path class=\"ln\" d=\"M720 210 L720 232\" marker-end=\"url(#ah)\"></path><rect class=\"bx\" x=\"645\" y=\"232\" width=\"150\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"720\" y=\"247\" text-anchor=\"middle\" dominant-baseline=\"central\">i++</text><path class=\"ln\" d=\"M720 262 L720 272 L620 272 L620 86\"></path><path class=\"ln\" d=\"M620 86 L716 86\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M800 122 L820 122 L820 305\"></path><path class=\"ln\" d=\"M820 305 L782 305\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"810\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><rect class=\"bx\" x=\"660\" y=\"290\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"720\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_B</text><text class=\"ds\" x=\"720\" y=\"345\" text-anchor=\"middle\" dominant-baseline=\"central\">variable de control: no la toqueu a dins</text><path class=\"lnd\" d=\"M285 30 L285 355\"></path><path class=\"lnd\" d=\"M575 30 L575 355\"></path></svg></div><figcaption>Els tres bucles de C++. <code>while</code> i <code>for</code> pregunten abans de cada volta (poden fer-ne zero); <code>do … while</code> pregunta després (en fa com a mínim una).</figcaption></figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:700px\"><div class=\"ip-figb\"><svg viewBox=\"0 0 860 360\" aria-label=\"Diagramas de flujo de las tres variantes iterativas\" role=\"img\"><text class=\"dm\" x=\"140\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">while (condición) { … }</text><text class=\"dm\" x=\"430\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">do { … } while (condición);</text><text class=\"dm\" x=\"720\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">for (init; condición; paso) { … }</text><rect class=\"bx\" x=\"80\" y=\"40\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"140\" y=\"55\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_A</text><path class=\"ln\" d=\"M140 70 L140 98\" marker-end=\"url(#ah)\"></path><circle cx=\"140\" cy=\"92\" r=\"3\" class=\"fk\"></circle><path class=\"bxa\" d=\"M140 100L210 130L140 160L70 130Z\"></path><text class=\"dt\" x=\"140\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\">condición</text><path class=\"ln\" d=\"M140 160 L140 196\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"130\" y=\"178\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bxo\" x=\"75\" y=\"196\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"140\" y=\"211\" text-anchor=\"middle\" dominant-baseline=\"central\">cuerpo del bucle</text><path class=\"ln\" d=\"M140 226 L140 246 L48 246 L48 92\"></path><path class=\"ln\" d=\"M48 92 L136 92\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M210 130 L235 130 L235 305\"></path><path class=\"ln\" d=\"M235 305 L202 305\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"222\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><rect class=\"bx\" x=\"80\" y=\"290\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"140\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_B</text><text class=\"ds\" x=\"140\" y=\"345\" text-anchor=\"middle\" dominant-baseline=\"central\">ninguna vuelta si de entrada es F</text><rect class=\"bx\" x=\"370\" y=\"40\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"430\" y=\"55\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_A</text><path class=\"ln\" d=\"M430 70 L430 98\" marker-end=\"url(#ah)\"></path><circle cx=\"430\" cy=\"92\" r=\"3\" class=\"fk\"></circle><rect class=\"bxo\" x=\"365\" y=\"105\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"430\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">cuerpo del bucle</text><path class=\"ln\" d=\"M430 135 L430 166\" marker-end=\"url(#ah)\"></path><path class=\"bxa\" d=\"M430 166L500 196L430 226L360 196Z\"></path><text class=\"dt\" x=\"430\" y=\"196\" text-anchor=\"middle\" dominant-baseline=\"central\">condición</text><path class=\"ln\" d=\"M360 196 L338 196 L338 92\"></path><path class=\"ln\" d=\"M338 92 L426 92\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"350\" y=\"186\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><path class=\"ln\" d=\"M430 226 L430 290\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"420\" y=\"252\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bx\" x=\"370\" y=\"290\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"430\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_B</text><text class=\"ds\" x=\"430\" y=\"345\" text-anchor=\"middle\" dominant-baseline=\"central\">como mínimo una vuelta</text><rect class=\"bx\" x=\"655\" y=\"37\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"720\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\">int i = inici</text><path class=\"ln\" d=\"M720 67 L720 90\" marker-end=\"url(#ah)\"></path><circle cx=\"720\" cy=\"86\" r=\"3\" class=\"fk\"></circle><path class=\"bxa\" d=\"M720 92L800 122L720 152L640 122Z\"></path><text class=\"dm\" x=\"720\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\">i &lt;= final ?</text><path class=\"ln\" d=\"M720 152 L720 180\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"710\" y=\"166\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bxo\" x=\"655\" y=\"180\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"720\" y=\"195\" text-anchor=\"middle\" dominant-baseline=\"central\">cuerpo del bucle</text><path class=\"ln\" d=\"M720 210 L720 232\" marker-end=\"url(#ah)\"></path><rect class=\"bx\" x=\"645\" y=\"232\" width=\"150\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"720\" y=\"247\" text-anchor=\"middle\" dominant-baseline=\"central\">i++</text><path class=\"ln\" d=\"M720 262 L720 272 L620 272 L620 86\"></path><path class=\"ln\" d=\"M620 86 L716 86\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M800 122 L820 122 L820 305\"></path><path class=\"ln\" d=\"M820 305 L782 305\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"810\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><rect class=\"bx\" x=\"660\" y=\"290\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"720\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_B</text><text class=\"ds\" x=\"720\" y=\"345\" text-anchor=\"middle\" dominant-baseline=\"central\">variable de control: no la toquéis dentro</text><path class=\"lnd\" d=\"M285 30 L285 355\"></path><path class=\"lnd\" d=\"M575 30 L575 355\"></path></svg></div><figcaption>Los tres bucles de C++. <code>while</code> y <code>for</code> preguntan antes de cada vuelta (pueden no dar ninguna); <code>do … while</code> pregunta después (da como mínimo una).</figcaption></figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:700px\"><div class=\"ip-figb\"><svg viewBox=\"0 0 860 360\" aria-label=\"Flowcharts of the three iterative variants\" role=\"img\"><text class=\"dm\" x=\"140\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">while (condition) { … }</text><text class=\"dm\" x=\"430\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">do { … } while (condition);</text><text class=\"dm\" x=\"720\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">for (init; condition; step) { … }</text><rect class=\"bx\" x=\"80\" y=\"40\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"140\" y=\"55\" text-anchor=\"middle\" dominant-baseline=\"central\">ACTION_A</text><path class=\"ln\" d=\"M140 70 L140 98\" marker-end=\"url(#ah)\"></path><circle cx=\"140\" cy=\"92\" r=\"3\" class=\"fk\"></circle><path class=\"bxa\" d=\"M140 100L210 130L140 160L70 130Z\"></path><text class=\"dt\" x=\"140\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\">condition</text><path class=\"ln\" d=\"M140 160 L140 196\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"130\" y=\"178\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bxo\" x=\"75\" y=\"196\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"140\" y=\"211\" text-anchor=\"middle\" dominant-baseline=\"central\">loop body</text><path class=\"ln\" d=\"M140 226 L140 246 L48 246 L48 92\"></path><path class=\"ln\" d=\"M48 92 L136 92\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M210 130 L235 130 L235 305\"></path><path class=\"ln\" d=\"M235 305 L202 305\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"222\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><rect class=\"bx\" x=\"80\" y=\"290\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"140\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"central\">ACTION_B</text><text class=\"ds\" x=\"140\" y=\"345\" text-anchor=\"middle\" dominant-baseline=\"central\">no iterations if it is F at the start</text><rect class=\"bx\" x=\"370\" y=\"40\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"430\" y=\"55\" text-anchor=\"middle\" dominant-baseline=\"central\">ACTION_A</text><path class=\"ln\" d=\"M430 70 L430 98\" marker-end=\"url(#ah)\"></path><circle cx=\"430\" cy=\"92\" r=\"3\" class=\"fk\"></circle><rect class=\"bxo\" x=\"365\" y=\"105\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"430\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">loop body</text><path class=\"ln\" d=\"M430 135 L430 166\" marker-end=\"url(#ah)\"></path><path class=\"bxa\" d=\"M430 166L500 196L430 226L360 196Z\"></path><text class=\"dt\" x=\"430\" y=\"196\" text-anchor=\"middle\" dominant-baseline=\"central\">condition</text><path class=\"ln\" d=\"M360 196 L338 196 L338 92\"></path><path class=\"ln\" d=\"M338 92 L426 92\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"350\" y=\"186\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><path class=\"ln\" d=\"M430 226 L430 290\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"420\" y=\"252\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bx\" x=\"370\" y=\"290\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"430\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"central\">ACTION_B</text><text class=\"ds\" x=\"430\" y=\"345\" text-anchor=\"middle\" dominant-baseline=\"central\">at least one iteration</text><rect class=\"bx\" x=\"655\" y=\"37\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"720\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\">int i = inici</text><path class=\"ln\" d=\"M720 67 L720 90\" marker-end=\"url(#ah)\"></path><circle cx=\"720\" cy=\"86\" r=\"3\" class=\"fk\"></circle><path class=\"bxa\" d=\"M720 92L800 122L720 152L640 122Z\"></path><text class=\"dm\" x=\"720\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\">i &lt;= final ?</text><path class=\"ln\" d=\"M720 152 L720 180\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"710\" y=\"166\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bxo\" x=\"655\" y=\"180\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"720\" y=\"195\" text-anchor=\"middle\" dominant-baseline=\"central\">loop body</text><path class=\"ln\" d=\"M720 210 L720 232\" marker-end=\"url(#ah)\"></path><rect class=\"bx\" x=\"645\" y=\"232\" width=\"150\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"720\" y=\"247\" text-anchor=\"middle\" dominant-baseline=\"central\">i++</text><path class=\"ln\" d=\"M720 262 L720 272 L620 272 L620 86\"></path><path class=\"ln\" d=\"M620 86 L716 86\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M800 122 L820 122 L820 305\"></path><path class=\"ln\" d=\"M820 305 L782 305\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"810\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><rect class=\"bx\" x=\"660\" y=\"290\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"720\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"central\">ACTION_B</text><text class=\"ds\" x=\"720\" y=\"345\" text-anchor=\"middle\" dominant-baseline=\"central\">control variable: do not touch it inside</text><path class=\"lnd\" d=\"M285 30 L285 355\"></path><path class=\"lnd\" d=\"M575 30 L575 355\"></path></svg></div><figcaption>The three C++ loops. <code>while</code> and <code>for</code> ask before each iteration (they may do none); <code>do … while</code> asks afterwards (it does at least one).</figcaption></figure>"
    ],
    "mode": "explained"
   }
  ],
  "s4-2": [
   {
    "t": "p",
    "x": [
     "Tot bucle té quatre peces. Si en falta una, el bucle no fa el que volem:",
     "Todo bucle tiene cuatro piezas. Si falta una, el bucle no hace lo que queremos:",
     "Every loop has four pieces. If one is missing, the loop does not do what we want:"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "**Inicialització**, abans del bucle: el valor de partida de les variables que controlen el bucle.",
      "**Inicialización**, antes del bucle: el valor de partida de las variables que controlan el bucle.",
      "**Initialisation**, before the loop: the starting value of the variables that control the loop."
     ],
     [
      "**Condició**: es comprova abans de cada volta; quan és falsa, se surt.",
      "**Condición**: se comprueba antes de cada vuelta; cuando es falsa, se sale.",
      "**Condition**: checked before each iteration; when it is false, the loop exits."
     ],
     [
      "**Cos**: la feina que es repeteix.",
      "**Cuerpo**: el trabajo que se repite.",
      "**Body**: the work that is repeated."
     ],
     [
      "**Avanç**: alguna cosa dins del cos ha d'apropar la condició a ser falsa. Si no, el bucle és **infinit**.",
      "**Avance**: algo dentro del cuerpo tiene que acercar la condición a ser falsa. Si no, el bucle es **infinito**.",
      "**Progress**: something inside the body must bring the condition closer to being false. Otherwise, the loop is **infinite**."
     ]
    ],
    "ordered": true
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "compte_enrere.cpp",
     "run": true,
     "trace": true,
     "in": "3"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;                 // 1. inicialització (n ve de l'entrada)\n    while (n > 0) {           // 2. condició\n        cout << n << \" \";     // 3. cos\n        n--;                  // 4. avanç: n s'apropa a 0\n    }\n    cout << \"Enlairament!\" << endl;\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;                 // 1. inicialización (n viene de la entrada)\n    while (n > 0) {           // 2. condición\n        cout << n << \" \";     // 3. cuerpo\n        n--;                  // 4. avance: n se acerca a 0\n    }\n    cout << \"Enlairament!\" << endl;\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;                 // 1. initialisation (n comes from the input)\n    while (n > 0) {           // 2. condition\n        cout << n << \" \";     // 3. body\n        n--;                  // 4. progress: n gets closer to 0\n    }\n    cout << \"Enlairament!\" << endl;\n    return 0;\n}"
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Traça amb n = 3: la condició es comprova 4 vegades i el cos s'executa 3.</caption>\n<thead><tr><th>Volta</th><th class=\"c\">n abans</th><th class=\"c\">n &gt; 0</th><th>Sortida acumulada</th></tr></thead>\n<tbody>\n<tr><td>1</td><td class=\"c\">3</td><td class=\"c ip-v\">cert</td><td>3 </td></tr>\n<tr><td>2</td><td class=\"c\">2</td><td class=\"c ip-v\">cert</td><td>3 2 </td></tr>\n<tr><td>3</td><td class=\"c\">1</td><td class=\"c ip-v\">cert</td><td>3 2 1 </td></tr>\n<tr><td>—</td><td class=\"c\">0</td><td class=\"c ip-f\">fals</td><td>3 2 1 Enlairament!</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Traza con n = 3: la condición se comprueba 4 veces y el cuerpo se ejecuta 3.</caption>\n<thead><tr><th>Vuelta</th><th class=\"c\">n antes</th><th class=\"c\">n &gt; 0</th><th>Salida acumulada</th></tr></thead>\n<tbody>\n<tr><td>1</td><td class=\"c\">3</td><td class=\"c ip-v\">cierto</td><td>3 </td></tr>\n<tr><td>2</td><td class=\"c\">2</td><td class=\"c ip-v\">cierto</td><td>3 2 </td></tr>\n<tr><td>3</td><td class=\"c\">1</td><td class=\"c ip-v\">cierto</td><td>3 2 1 </td></tr>\n<tr><td>—</td><td class=\"c\">0</td><td class=\"c ip-f\">falso</td><td>3 2 1 Enlairament!</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Trace with n = 3: the condition is checked 4 times and the body runs 3.</caption>\n<thead><tr><th>Iteration</th><th class=\"c\">n before</th><th class=\"c\">n &gt; 0</th><th>Accumulated output</th></tr></thead>\n<tbody>\n<tr><td>1</td><td class=\"c\">3</td><td class=\"c ip-v\">true</td><td>3 </td></tr>\n<tr><td>2</td><td class=\"c\">2</td><td class=\"c ip-v\">true</td><td>3 2 </td></tr>\n<tr><td>3</td><td class=\"c\">1</td><td class=\"c ip-v\">true</td><td>3 2 1 </td></tr>\n<tr><td>—</td><td class=\"c\">0</td><td class=\"c ip-f\">false</td><td>3 2 1 Enlairament!</td></tr>\n</tbody>\n</table></div>"
    ],
    "mode": "explained"
   }
  ],
  "s4-3": [
   {
    "t": "p",
    "x": [
     "Molts problemes diuen «es van entrant valors fins que s'entra un 0» (o un −1). Aquest valor especial és la **sentinella** o **marca de fi**: indica que la seqüència s'ha acabat i **no s'ha de tractar**. És l'esquema de recorregut del Tema 2.3, amb el capçal convertit en `cin`:",
     "Muchos problemas dicen «se van introduciendo valores hasta que se introduce un 0» (o un −1). Este valor especial es el **centinela** o **marca de fin**: indica que la secuencia se ha terminado y **no se debe tratar**. Es el esquema de recorrido del Tema 2.3, con el cabezal convertido en `cin`:",
     "Many problems say “values are entered until a 0 is entered” (or a −1). This special value is the **sentinel** or **end marker**: it shows that the sequence has ended and **must not be processed**. It is the traversal scheme of Unit 2.3, with the cursor turned into `cin`:"
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
         "Pseudocodi",
         "Pseudocódigo"
        ],
        "nonum": true
       },
       "src": [
        "Llegir x\nMENTRE x ≠ marca FER\n    Tractar x\n    Llegir x\nFI_MENTRE",
        "Llegir x\nMENTRE x ≠ marca FER\n    Tratar x\n    Llegir x\nFI_MENTRE"
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "props": {
        "title": "C++",
        "nonum": true
       },
       "src": [
        "cin >> x;                // lectura avançada\nwhile (x != MARCA) {\n    // tractar x\n    cin >> x;            // llegir la següent, al FINAL del cos\n}",
        "cin >> x;                // lectura adelantada\nwhile (x != MARCA) {\n    // tratar x\n    cin >> x;            // leer el siguiente, al FINAL del cuerpo\n}"
       ]
      }
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "La clau és la **lectura avançada**: es llegeix el primer valor **abans** del bucle, i el següent al **final** del cos. Així, quan arriba la marca, la condició la detecta abans de tractar-la. Compareu-ho amb la versió que llegeix al principi del cos (entrada `4 7 0`):",
     "La clave es la **lectura adelantada**: se lee el primer valor **antes** del bucle, y el siguiente al **final** del cuerpo. Así, cuando llega la marca, la condición la detecta antes de tratarla. Comparadlo con la versión que lee al principio del cuerpo (entrada `4 7 0`):",
     "The key is the **read-ahead**: the first value is read **before** the loop, and the next one at the **end** of the body. That way, when the marker arrives, the condition detects it before processing it. Compare it with the version that reads at the start of the body (input `4 7 0`):"
    ]
   },
   {
    "t": "cols",
    "cols": [
     [
      {
       "t": "code",
       "lang": "cpp",
       "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x, quants = 0;\n    cin >> x;\n    while (x != 0) {\n        quants++;\n        cin >> x;\n    }\n    cout << \"Valors: \" << quants << endl;\n    return 0;\n}",
       "props": {
        "title": "sentinella_be.cpp",
        "run": true,
        "trace": true,
        "in": "4 7 0"
       }
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "props": {
        "title": "sentinella_malament.cpp",
        "run": true,
        "trace": true,
        "in": "4 7 0"
       },
       "src": [
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = -1, quants = 0;\n    while (x != 0) {\n        cin >> x;        // llegeix i tracta sense mirar si és la marca\n        quants++;\n    }\n    cout << \"Valors: \" << quants << endl;\n    return 0;\n}",
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = -1, quants = 0;\n    while (x != 0) {\n        cin >> x;        // lee y trata sin mirar si es la marca\n        quants++;\n    }\n    cout << \"Valors: \" << quants << endl;\n    return 0;\n}"
       ]
      }
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "La primera dona 2; la segona, 3, perquè ha comptat el 0. A més, la segona necessita inventar-se un valor inicial (`x = -1`) perquè el bucle arrenqui. Si la seqüència pot ser buida (la marca arriba de seguida), l'esquema correcte no fa cap volta i el resultat és 0, com ha de ser.",
     "La primera da 2; la segunda, 3, porque ha contado el 0. Además, la segunda necesita inventarse un valor inicial (`x = -1`) para que el bucle arranque. Si la secuencia puede estar vacía (la marca llega enseguida), el esquema correcto no da ninguna vuelta y el resultado es 0, como debe ser.",
     "The first gives 2; the second, 3, because it counted the 0. Moreover, the second needs to make up an initial value (`x = -1`) for the loop to start. If the sequence can be empty (the marker comes straight away), the correct scheme does no iterations and the result is 0, as it should be."
    ]
   }
  ],
  "s4-4": [
   {
    "t": "p",
    "x": [
     "El `for` és un `while` amb les peces de control agrupades en una sola línia. Es fa servir quan el nombre de voltes es coneix abans de començar (de 1 a n, n vegades…).",
     "El `for` es un `while` con las piezas de control agrupadas en una sola línea. Se usa cuando el número de vueltas se conoce antes de empezar (de 1 a n, n veces…).",
     "The `for` is a `while` with the control pieces grouped on a single line. It is used when the number of iterations is known before starting (from 1 to n, n times…)."
    ]
   },
   {
    "t": "cols",
    "cols": [
     [
      {
       "t": "code",
       "lang": "cpp",
       "src": "for (int i = 1; i <= n; i++) {\n    cout << i << \" \";\n}",
       "props": {
        "title": "for",
        "nonum": true
       }
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "props": {
        "title": [
         "El mateix amb while",
         "Lo mismo con while"
        ],
        "nonum": true
       },
       "src": "int i = 1;\nwhile (i <= n) {\n    cout << i << \" \";\n    i++;\n}"
      }
     ]
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Part",
      "Parte",
      "Part"
     ],
     [
      "Exemple",
      "Ejemplo",
      "Example"
     ],
     [
      "Quan s'executa",
      "Cuándo se ejecuta",
      "When it runs"
     ]
    ],
    "rows": [
     [
      [
       "Inicialització",
       "Inicialización",
       "Initialisation"
      ],
      "`int i = 1`",
      [
       "Una sola vegada, a l'inici.",
       "Una sola vez, al inicio.",
       "Only once, at the start."
      ]
     ],
     [
      [
       "Condició",
       "Condición",
       "Condition"
      ],
      "`i <= n`",
      [
       "Abans de cada volta. Si és falsa, se surt.",
       "Antes de cada vuelta. Si es falsa, se sale.",
       "Before each iteration. If it is false, the loop exits."
      ]
     ],
     [
      [
       "Actualització",
       "Actualización",
       "Update"
      ],
      "`i++`",
      [
       "Al final de cada volta, després del cos.",
       "Al final de cada vuelta, después del cuerpo.",
       "At the end of each iteration, after the body."
      ]
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Exemple: la suma 1 + 2 + … + n. La variable `suma` és un **acumulador**: comença a 0 i a cada volta s'hi afegeix un valor.",
     "Ejemplo: la suma 1 + 2 + … + n. La variable `suma` es un **acumulador**: empieza en 0 y en cada vuelta se le añade un valor.",
     "Example: the sum 1 + 2 + … + n. The variable `suma` is an **accumulator**: it starts at 0 and a value is added to it at each iteration."
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, suma = 0;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        suma = suma + i;\n    }\n    cout << \"1 + ... + \" << n << \" = \" << suma << endl;\n    return 0;\n}",
    "props": {
     "title": "suma_1_n.cpp",
     "run": true,
     "trace": true,
     "in": "4"
    }
   },
   {
    "t": "h",
    "x": [
     "Quantes voltes fa?",
     "¿Cuántas vueltas da?",
     "How many iterations does it do?"
    ]
   },
   {
    "t": "p",
    "x": [
     "Els errors d'«una volta de més o de menys» són els més freqüents amb el `for`. Fixeu-vos en l'inici i en el signe de la condició:",
     "Los errores de «una vuelta de más o de menos» son los más frecuentes con el `for`. Fijaos en el inicio y en el signo de la condición:",
     "“One too many or one too few” mistakes are the most frequent with `for`. Look at the start and at the sign of the condition:"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Capçalera",
      "Cabecera",
      "Header"
     ],
     [
      "Valors de i",
      "Valores de i",
      "Values of i"
     ],
     [
      "Voltes",
      "Vueltas",
      "Iterations"
     ]
    ],
    "rows": [
     [
      "`for (int i = 1; i <= 5; i++)`",
      "1 2 3 4 5",
      "5"
     ],
     [
      "`for (int i = 0; i < 5; i++)`",
      "0 1 2 3 4",
      "5"
     ],
     [
      "`for (int i = 1; i < 5; i++)`",
      "1 2 3 4",
      "4"
     ],
     [
      "`for (int i = 5; i >= 1; i--)`",
      "5 4 3 2 1",
      "5"
     ],
     [
      "`for (int i = 0; i <= 10; i += 2)`",
      "0 2 4 6 8 10",
      "6"
     ],
     [
      "`for (int i = 1; i > 5; i++)`",
      [
       "(cap)",
       "(ninguno)",
       "(none)"
      ],
      "0"
     ]
    ]
   },
   {
    "t": "warn",
    "title": [
     "Dos errors amb el for",
     "Dos errores con el for",
     "Two mistakes with for"
    ],
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "`for (int i = 1; i <= n; i++);` amb punt i coma: el bucle fa n voltes sense fer res, i el bloc de sota s'executa una sola vegada.",
        "`for (int i = 1; i <= n; i++);` con punto y coma: el bucle da n vueltas sin hacer nada, y el bloque de debajo se ejecuta una sola vez.",
        "`for (int i = 1; i <= n; i++);` with a semicolon: the loop does n iterations doing nothing, and the block below runs only once."
       ],
       [
        "Modificar la variable de control dins del cos (`i = …`): el nombre de voltes deixa de ser previsible. Si cal controlar el bucle des de dins, feu servir un `while`.",
        "Modificar la variable de control dentro del cuerpo (`i = …`): el número de vueltas deja de ser previsible. Si hay que controlar el bucle desde dentro, usad un `while`.",
        "Changing the control variable inside the body (`i = …`): the number of iterations is no longer predictable. If the loop has to be controlled from inside, use a `while`."
       ]
      ]
     }
    ]
   }
  ],
  "s4-5": [
   {
    "t": "p",
    "x": [
     "La condició es comprova **després** del cos. És l'eina natural per **validar una entrada**: cal demanar el valor almenys una vegada, i tornar-lo a demanar mentre sigui incorrecte. Executeu-lo amb `12 -3 7`:",
     "La condición se comprueba **después** del cuerpo. Es la herramienta natural para **validar una entrada**: hay que pedir el valor al menos una vez, y volver a pedirlo mientras sea incorrecto. Ejecutadlo con `12 -3 7`:",
     "The condition is checked **after** the body. It is the natural tool to **validate an input**: the value must be asked for at least once, and asked again while it is wrong. Run it with `12 -3 7`:"
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
        "in": "12 -3 7"
       },
       "src": [
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS    DESCRIPCIÓ\n   E      nota          Enter    Nota entre 0 i 10\n\nINICI_SEQÜÈNCIA\n    REPETEIX\n        Llegir nota\n    FINS_QUE nota ≥ 0 I nota ≤ 10\n    Escriure \"Nota acceptada: \", nota\nFI_SEQÜÈNCIA",
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS    DESCRIPCIÓ\n   E      nota          Enter    Nota entre 0 y 10\n\nINICI_SEQÜÈNCIA\n    REPETEIX\n        Llegir nota\n    FINS_QUE nota ≥ 0 I nota ≤ 10\n    Escriure \"Nota acceptada: \", nota\nFI_SEQÜÈNCIA"
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int nota;\n    do {\n        cin >> nota;\n    } while (nota < 0 || nota > 10);   // NO (nota >= 0 && nota <= 10)\n    cout << \"Nota acceptada: \" << nota << endl;\n    return 0;\n}",
       "props": {
        "title": "validar.cpp",
        "run": true,
        "trace": true,
        "in": "12 -3 7"
       }
      }
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "La condició del `do … while` és la negació de la del `FINS_QUE`: «fins que la nota sigui vàlida» és «mentre la nota sigui invàlida». Aplicant De Morgan, `!(nota >= 0 && nota <= 10)` és `nota < 0 || nota > 10`.",
     "La condición del `do … while` es la negación de la del `FINS_QUE`: «hasta que la nota sea válida» es «mientras la nota sea inválida». Aplicando De Morgan, `!(nota >= 0 && nota <= 10)` es `nota < 0 || nota > 10`.",
     "The condition of `do … while` is the negation of that of `FINS_QUE`: “until the mark is valid” is “while the mark is invalid”. Applying De Morgan, `!(nota >= 0 && nota <= 10)` is `nota < 0 || nota > 10`."
    ]
   },
   {
    "t": "table",
    "head": [
     "Bucle",
     "Pregunta",
     [
      "Voltes mínimes",
      "Vueltas mínimas",
      "Minimum iterations"
     ],
     [
      "Ús típic",
      "Uso típico",
      "Typical use"
     ]
    ],
    "rows": [
     [
      "`while`",
      [
       "abans",
       "antes",
       "before"
      ],
      "0",
      [
       "Seqüències amb sentinella, repeticions amb final desconegut",
       "Secuencias con centinela, repeticiones con final desconocido",
       "Sequences with a sentinel, repetitions with an unknown end"
      ]
     ],
     [
      "`for`",
      [
       "abans",
       "antes",
       "before"
      ],
      "0",
      [
       "Nombre de voltes conegut: de 1 a n, n dades",
       "Número de vueltas conocido: de 1 a n, n datos",
       "Known number of iterations: from 1 to n, n data"
      ]
     ],
     [
      "`do … while`",
      [
       "després",
       "después",
       "after"
      ],
      "1",
      [
       "Validar entrades, menús, processos que es fan com a mínim una vegada",
       "Validar entradas, menús, procesos que se hacen como mínimo una vez",
       "Validating inputs, menus, processes done at least once"
      ]
     ]
    ]
   }
  ],
  "s4-6": [
   {
    "t": "p",
    "x": [
     "Gairebé tots els problemes de seqüències es resolen combinant aquests quatre patrons dins de l'esquema de recorregut:",
     "Casi todos los problemas de secuencias se resuelven combinando estos cuatro patrones dentro del esquema de recorrido:",
     "Almost all sequence problems are solved by combining these four patterns inside the traversal scheme:"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Patró",
      "Patrón",
      "Pattern"
     ],
     [
      "Inicialització (abans del bucle)",
      "Inicialización (antes del bucle)",
      "Initialisation (before the loop)"
     ],
     [
      "Dins del bucle",
      "Dentro del bucle",
      "Inside the loop"
     ],
     [
      "En acabar val…",
      "Al terminar vale…",
      "At the end it holds…"
     ]
    ],
    "rows": [
     [
      [
       "**Comptador**",
       "**Contador**",
       "**Counter**"
      ],
      "`int ct = 0;`",
      [
       "`ct++;` (si es compleix la condició)",
       "`ct++;` (si se cumple la condición)",
       "`ct++;` (if the condition holds)"
      ],
      [
       "quants elements compleixen la condició",
       "cuántos elementos cumplen la condición",
       "how many elements meet the condition"
      ]
     ],
     [
      "**Acumulador**",
      "`int sum = 0;`",
      "`sum = sum + x;`",
      [
       "la suma dels elements",
       "la suma de los elementos",
       "the sum of the elements"
      ]
     ],
     [
      [
       "**Màxim**",
       "**Máximo**",
       "**Maximum**"
      ],
      [
       "el primer element, o un valor més petit que qualsevol possible",
       "el primer elemento, o un valor más pequeño que cualquier valor posible",
       "the first element, or a value smaller than any possible value"
      ],
      "`if (x > mx) mx = x;`",
      [
       "l'element més gran",
       "el elemento más grande",
       "the largest element"
      ]
     ],
     [
      [
       "**Comptador del màxim**",
       "**Contador del máximo**",
       "**Maximum counter**"
      ],
      "`int qmx = 0;`",
      "si `x > mx`: `mx = x; qmx = 1;`\nsi `x == mx`: `qmx++;`",
      [
       "quantes vegades apareix el màxim",
       "cuántas veces aparece el máximo",
       "how many times the maximum appears"
      ]
     ]
    ]
   },
   {
    "t": "tip",
    "title": [
     "Mitjana = acumulador / comptador",
     "Media = acumulador / contador",
     "Average = accumulator / counter"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Amb un acumulador enter i un comptador, la mitjana necessita una divisió **real**: `(double) sum / ct`. I si la seqüència pot ser buida, cal comprovar `ct > 0` abans de dividir.",
       "Con un acumulador entero y un contador, la media necesita una división **real**: `(double) sum / ct`. Y si la secuencia puede estar vacía, hay que comprobar `ct > 0` antes de dividir.",
       "With an integer accumulator and a counter, the average needs a **real** division: `(double) sum / ct`. And if the sequence can be empty, you must check `ct > 0` before dividing."
      ]
     }
    ],
    "mode": "explained"
   }
  ],
  "s4-7": [
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
       "A l'entrada d'un festival de rock hi ha un ordinador perquè cada persona que vulgui hi entri la seva edat. No sabem quantes persones el faran servir. En acabar (quan s'entra l'edat **0**, que no compta), cal saber: la **mitjana** d'edat, quantes persones tenen **50 anys o més**, l'edat del **més gran** i quantes persones tenen aquesta edat.",
       "En la entrada de un festival de rock hay un ordenador para que cada persona que quiera introduzca su edad. No sabemos cuántas personas lo usarán. Al terminar (cuando se introduce la edad **0**, que no cuenta), hay que saber: la **media** de edad, cuántas personas tienen **50 años o más**, la edad del **mayor** y cuántas personas tienen esa edad.",
       "At the entrance of a rock festival there is a computer so that anyone who wants can enter their age. We do not know how many people will use it. At the end (when the age **0** is entered, which does not count), we need to know: the average age, how many people are **50 or over**, the age of the **oldest** person and how many people have that age."
      ]
     }
    ],
    "mode": "explained"
   },
   {
    "t": "h",
    "x": [
     "Identificar els patrons",
     "Identificar los patrones",
     "Identify the patterns"
    ]
   },
   {
    "t": "p",
    "x": [
     "Cada pregunta de l'enunciat és un dels patrons de la taula anterior:",
     "Cada pregunta del enunciado es uno de los patrones de la tabla anterior:",
     "Each question in the statement is one of the patterns in the previous table:"
    ]
   },
   {
    "t": "table",
    "head": [
     "Pregunta",
     [
      "Patró",
      "Patrón",
      "Pattern"
     ],
     "Variable",
     "Inicial"
    ],
    "rows": [
     [
      [
       "Quantes persones?",
       "¿Cuántas personas?",
       "How many people?"
      ],
      [
       "comptador",
       "contador",
       "counter"
      ],
      "`CT`",
      "0"
     ],
     [
      [
       "Mitjana d'edat",
       "Media de edad",
       "Average age"
      ],
      "acumulador (+ CT)",
      "`SUM`",
      "0"
     ],
     [
      [
       "Quants ≥ 50 anys?",
       "¿Cuántas ≥ 50 años?",
       "How many are ≥ 50?"
      ],
      [
       "comptador amb condició",
       "contador con condición",
       "counter with a condition"
      ],
      "`Q50`",
      "0"
     ],
     [
      [
       "Edat del més gran",
       "Edad del mayor",
       "Age of the oldest"
      ],
      [
       "màxim",
       "máximo",
       "maximum"
      ],
      "`ME`",
      [
       "0 (cap edat no és més petita)",
       "0 (ninguna edad es menor)",
       "0 (no age is smaller)"
      ]
     ],
     [
      [
       "Quants tenen aquesta edat?",
       "¿Cuántas tienen esa edad?",
       "How many have that age?"
      ],
      [
       "comptador del màxim",
       "contador del máximo",
       "maximum counter"
      ],
      "`QME`",
      "0"
     ]
    ]
   },
   {
    "t": "h",
    "x": [
     "Traçar a mà",
     "Trazar a mano",
     "Trace by hand"
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Traça amb l'entrada 35 60 72 18 72 0.</caption>\n<thead><tr><th>EDAT</th><th class=\"c\">CT</th><th class=\"c\">SUM</th><th class=\"c\">Q50</th><th class=\"c\">ME</th><th class=\"c\">QME</th><th>Què passa</th></tr></thead>\n<tbody>\n<tr><td>(inici)</td><td class=\"c\">0</td><td class=\"c\">0</td><td class=\"c\">0</td><td class=\"c\">0</td><td class=\"c\">0</td><td></td></tr>\n<tr><td>35</td><td class=\"c hl\">1</td><td class=\"c hl\">35</td><td class=\"c\">0</td><td class=\"c hl\">35</td><td class=\"c hl\">1</td><td>35 &gt; 0: nou màxim</td></tr>\n<tr><td>60</td><td class=\"c hl\">2</td><td class=\"c hl\">95</td><td class=\"c hl\">1</td><td class=\"c hl\">60</td><td class=\"c\">1</td><td>≥ 50; nou màxim</td></tr>\n<tr><td>72</td><td class=\"c hl\">3</td><td class=\"c hl\">167</td><td class=\"c hl\">2</td><td class=\"c hl\">72</td><td class=\"c\">1</td><td>≥ 50; nou màxim</td></tr>\n<tr><td>18</td><td class=\"c hl\">4</td><td class=\"c hl\">185</td><td class=\"c\">2</td><td class=\"c\">72</td><td class=\"c\">1</td><td>res més</td></tr>\n<tr><td>72</td><td class=\"c hl\">5</td><td class=\"c hl\">257</td><td class=\"c hl\">3</td><td class=\"c\">72</td><td class=\"c hl\">2</td><td>≥ 50; iguala el màxim</td></tr>\n<tr><td>0</td><td class=\"c\">5</td><td class=\"c\">257</td><td class=\"c\">3</td><td class=\"c\">72</td><td class=\"c\">2</td><td>marca de fi: se surt</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Traza con la entrada 35 60 72 18 72 0.</caption>\n<thead><tr><th>EDAT</th><th class=\"c\">CT</th><th class=\"c\">SUM</th><th class=\"c\">Q50</th><th class=\"c\">ME</th><th class=\"c\">QME</th><th>Qué pasa</th></tr></thead>\n<tbody>\n<tr><td>(inicio)</td><td class=\"c\">0</td><td class=\"c\">0</td><td class=\"c\">0</td><td class=\"c\">0</td><td class=\"c\">0</td><td></td></tr>\n<tr><td>35</td><td class=\"c hl\">1</td><td class=\"c hl\">35</td><td class=\"c\">0</td><td class=\"c hl\">35</td><td class=\"c hl\">1</td><td>35 &gt; 0: nuevo máximo</td></tr>\n<tr><td>60</td><td class=\"c hl\">2</td><td class=\"c hl\">95</td><td class=\"c hl\">1</td><td class=\"c hl\">60</td><td class=\"c\">1</td><td>≥ 50; nuevo máximo</td></tr>\n<tr><td>72</td><td class=\"c hl\">3</td><td class=\"c hl\">167</td><td class=\"c hl\">2</td><td class=\"c hl\">72</td><td class=\"c\">1</td><td>≥ 50; nuevo máximo</td></tr>\n<tr><td>18</td><td class=\"c hl\">4</td><td class=\"c hl\">185</td><td class=\"c\">2</td><td class=\"c\">72</td><td class=\"c\">1</td><td>nada más</td></tr>\n<tr><td>72</td><td class=\"c hl\">5</td><td class=\"c hl\">257</td><td class=\"c hl\">3</td><td class=\"c\">72</td><td class=\"c hl\">2</td><td>≥ 50; iguala el máximo</td></tr>\n<tr><td>0</td><td class=\"c\">5</td><td class=\"c\">257</td><td class=\"c\">3</td><td class=\"c\">72</td><td class=\"c\">2</td><td>marca de fin: se sale</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Trace with the input 35 60 72 18 72 0.</caption>\n<thead><tr><th>EDAT</th><th class=\"c\">CT</th><th class=\"c\">SUM</th><th class=\"c\">Q50</th><th class=\"c\">ME</th><th class=\"c\">QME</th><th>What happens</th></tr></thead>\n<tbody>\n<tr><td>(start)</td><td class=\"c\">0</td><td class=\"c\">0</td><td class=\"c\">0</td><td class=\"c\">0</td><td class=\"c\">0</td><td></td></tr>\n<tr><td>35</td><td class=\"c hl\">1</td><td class=\"c hl\">35</td><td class=\"c\">0</td><td class=\"c hl\">35</td><td class=\"c hl\">1</td><td>35 &gt; 0: new maximum</td></tr>\n<tr><td>60</td><td class=\"c hl\">2</td><td class=\"c hl\">95</td><td class=\"c hl\">1</td><td class=\"c hl\">60</td><td class=\"c\">1</td><td>≥ 50; new maximum</td></tr>\n<tr><td>72</td><td class=\"c hl\">3</td><td class=\"c hl\">167</td><td class=\"c hl\">2</td><td class=\"c hl\">72</td><td class=\"c\">1</td><td>≥ 50; new maximum</td></tr>\n<tr><td>18</td><td class=\"c hl\">4</td><td class=\"c hl\">185</td><td class=\"c\">2</td><td class=\"c\">72</td><td class=\"c\">1</td><td>nothing else</td></tr>\n<tr><td>72</td><td class=\"c hl\">5</td><td class=\"c hl\">257</td><td class=\"c hl\">3</td><td class=\"c\">72</td><td class=\"c hl\">2</td><td>≥ 50; equals the maximum</td></tr>\n<tr><td>0</td><td class=\"c\">5</td><td class=\"c\">257</td><td class=\"c\">3</td><td class=\"c\">72</td><td class=\"c\">2</td><td>end marker: exits</td></tr>\n</tbody>\n</table></div>"
    ],
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "Mitjana: 257 / 5 = 51,40. Fixeu-vos que quan apareix un màxim **nou**, el seu comptador torna a 1 (no s'hi suma 1): les aparicions de l'antic màxim ja no compten.",
     "Media: 257 / 5 = 51,40. Fijaos en que, cuando aparece un máximo **nuevo**, su contador vuelve a 1 (no se le suma 1): las apariciones del máximo anterior ya no cuentan.",
     "Average: 257 / 5 = 51.40. Notice that, when a **new** maximum appears, its counter goes back to 1 (1 is not added to it): the occurrences of the previous maximum no longer count."
    ]
   },
   {
    "t": "h",
    "x": "Programar"
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
        "in": "35 60 72 18 72 0"
       },
       "src": [
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      EDAT          Natural   Edat entrada (0 = fi)\n          CT            Natural   Persones\n          SUM           Natural   Suma de les edats\n   S      Q50           Natural   Persones de 50 anys o més\n   S      ME            Natural   Edat màxima\n   S      QME           Natural   Persones amb l'edat màxima\n   S      MIT           Real      Mitjana d'edat\n\nINICI_SEQÜÈNCIA\n    CT ← 0\n    SUM ← 0\n    Q50 ← 0\n    ME ← 0\n    QME ← 0\n    Llegir EDAT\n    MENTRE EDAT ≠ 0 FER\n        CT ← CT + 1\n        SUM ← SUM + EDAT\n        SI EDAT ≥ 50 LLAVORS\n            Q50 ← Q50 + 1\n        FI_SI\n        SI EDAT > ME LLAVORS\n            ME ← EDAT\n            QME ← 1\n        ALTRAMENT\n            SI EDAT = ME LLAVORS\n                QME ← QME + 1\n            FI_SI\n        FI_SI\n        Llegir EDAT\n    FI_MENTRE\n    MIT ← SUM / CT\n    Escriure \"La mitjana d'edat es \", MIT\n    Escriure \"Persones mes grans o iguals a 50 anys \", Q50\n    Escriure \"L'edat del mes gran es \", ME\n    Escriure \"L'han tingut \", QME, \" persones\"\nFI_SEQÜÈNCIA",
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      EDAT          Natural   Edad introducida (0 = fin)\n          CT            Natural   Personas\n          SUM           Natural   Suma de las edades\n   S      Q50           Natural   Personas de 50 años o más\n   S      ME            Natural   Edad máxima\n   S      QME           Natural   Personas con la edad máxima\n   S      MIT           Real      Media de edad\n\nINICI_SEQÜÈNCIA\n    CT ← 0\n    SUM ← 0\n    Q50 ← 0\n    ME ← 0\n    QME ← 0\n    Llegir EDAT\n    MENTRE EDAT ≠ 0 FER\n        CT ← CT + 1\n        SUM ← SUM + EDAT\n        SI EDAT ≥ 50 LLAVORS\n            Q50 ← Q50 + 1\n        FI_SI\n        SI EDAT > ME LLAVORS\n            ME ← EDAT\n            QME ← 1\n        ALTRAMENT\n            SI EDAT = ME LLAVORS\n                QME ← QME + 1\n            FI_SI\n        FI_SI\n        Llegir EDAT\n    FI_MENTRE\n    MIT ← SUM / CT\n    Escriure \"La mitjana d'edat es \", MIT\n    Escriure \"Persones mes grans o iguals a 50 anys \", Q50\n    Escriure \"L'edat del mes gran es \", ME\n    Escriure \"L'han tingut \", QME, \" persones\"\nFI_SEQÜÈNCIA"
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "props": {
        "title": "concert_rock.cpp",
        "run": true,
        "trace": true,
        "in": "35 60 72 18 72 0"
       },
       "src": [
        "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int EDAT;\n    int CT = 0, SUM = 0, Q50 = 0;\n    int ME = 0, QME = 0;\n\n    cin >> EDAT;                      // lectura avançada\n    while (EDAT != 0) {\n        CT++;                         // comptador\n        SUM = SUM + EDAT;             // acumulador\n        if (EDAT >= 50) {\n            Q50++;                    // comptador amb condició\n        }\n        if (EDAT > ME) {              // nou màxim\n            ME = EDAT;\n            QME = 1;\n        } else if (EDAT == ME) {      // es repeteix el màxim\n            QME++;\n        }\n        cin >> EDAT;                  // la següent, al final del cos\n    }\n\n    double MIT = (double) SUM / CT;   // divisió real\n    cout << fixed << setprecision(2);\n    cout << \"La mitjana d'edat es \" << MIT << endl;\n    cout << \"Persones mes grans o iguals a 50 anys \" << Q50 << endl;\n    cout << \"L'edat del mes gran es \" << ME << endl;\n    cout << \"L'han tingut \" << QME << \" persones\" << endl;\n    return 0;\n}",
        "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int EDAT;\n    int CT = 0, SUM = 0, Q50 = 0;\n    int ME = 0, QME = 0;\n\n    cin >> EDAT;                      // lectura adelantada\n    while (EDAT != 0) {\n        CT++;                         // contador\n        SUM = SUM + EDAT;             // acumulador\n        if (EDAT >= 50) {\n            Q50++;                    // contador con condición\n        }\n        if (EDAT > ME) {              // nuevo máximo\n            ME = EDAT;\n            QME = 1;\n        } else if (EDAT == ME) {      // se repite el máximo\n            QME++;\n        }\n        cin >> EDAT;                  // el siguiente, al final del cuerpo\n    }\n\n    double MIT = (double) SUM / CT;   // división real\n    cout << fixed << setprecision(2);\n    cout << \"La mitjana d'edat es \" << MIT << endl;\n    cout << \"Persones mes grans o iguals a 50 anys \" << Q50 << endl;\n    cout << \"L'edat del mes gran es \" << ME << endl;\n    cout << \"L'han tingut \" << QME << \" persones\" << endl;\n    return 0;\n}"
       ]
      }
     ]
    ]
   },
   {
    "t": "warn",
    "title": [
     "Per què (double)?",
     "¿Por qué (double)?",
     "Why (double)?"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "`SUM` i `CT` són enters: `SUM / CT` seria 257 / 5 = 51 i perdríem els decimals. `(double) SUM` converteix la suma a real abans de dividir i el resultat és 51.4. L'enunciat garanteix com a mínim una persona; si no fos així, caldria comprovar `CT > 0` abans de dividir.",
       "`SUM` y `CT` son enteros: `SUM / CT` sería 257 / 5 = 51 y perderíamos los decimales. `(double) SUM` convierte la suma a real antes de dividir y el resultado es 51.4. El enunciado garantiza como mínimo una persona; si no fuera así, habría que comprobar `CT > 0` antes de dividir.",
       "`SUM` and `CT` are integers: `SUM / CT` would be 257 / 5 = 51 and we would lose the decimals. `(double) SUM` converts the sum to real before dividing and the result is 51.4. The statement guarantees at least one person; if it did not, you would have to check `CT > 0` before dividing."
      ]
     }
    ]
   }
  ],
  "s4-8": [
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
       "Els dorsals dels participants d'una marató (nombres de 4 xifres) codifiquen la categoria: **jove** del 3000 al 3999, **mitjana** del 4000 al 4999, **avançada** del 5000 al 5999 i **mega-avançada** del 6000 al 9999. Es llegeix la seqüència de dorsals, acabada en **−1**, i cal dir quina o quines categories tenen més participants.",
       "Los dorsales de los participantes de una maratón (números de 4 cifras) codifican la categoría: **joven** del 3000 al 3999, **media** del 4000 al 4999, **avanzada** del 5000 al 5999 y **mega-avanzada** del 6000 al 9999. Se lee la secuencia de dorsales, terminada en **−1**, y hay que decir qué categoría o categorías tienen más participantes.",
       "The race numbers of the marathon runners (4-digit numbers) encode the category: **young** from 3000 to 3999, **middle** from 4000 to 4999, **advanced** from 5000 to 5999 and **mega-advanced** from 6000 to 9999. The sequence of race numbers is read, ending in **−1**, and you must say which category or categories have the most participants."
      ]
     }
    ],
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "Aquí es combinen tres coses: un recorregut amb sentinella, una cadena `else if` per classificar cada dorsal, i, després del bucle, el màxim de quatre comptadors. Com que hi pot haver empat, primer es calcula el màxim i després s'escriuen **totes** les categories que hi arriben.",
     "Aquí se combinan tres cosas: un recorrido con centinela, una cadena `else if` para clasificar cada dorsal y, después del bucle, el máximo de cuatro contadores. Como puede haber empate, primero se calcula el máximo y después se escriben **todas** las categorías que lo alcanzan.",
     "Three things are combined here: a traversal with a sentinel, an `else if` chain to classify each race number and, after the loop, the maximum of four counters. Since there can be a tie, the maximum is computed first and then **all** the categories that reach it are written."
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:560px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 700 150\" role=\"img\" aria-label=\"Rangs de dorsals per categoria\" role=\"img\">\n<rect class=\"bxo\" x=\"20\" y=\"40\" width=\"150\" height=\"44\" rx=\"4\"></rect><text class=\"dt db\" x=\"95\" y=\"58\" text-anchor=\"middle\" dominant-baseline=\"central\">jove</text><text class=\"dm\" x=\"95\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\">3000–3999</text>\n<rect class=\"bxq\" x=\"180\" y=\"40\" width=\"150\" height=\"44\" rx=\"4\"></rect><text class=\"dt db\" x=\"255\" y=\"58\" text-anchor=\"middle\" dominant-baseline=\"central\">mitjana</text><text class=\"dm\" x=\"255\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\">4000–4999</text>\n<rect class=\"bxw\" x=\"340\" y=\"40\" width=\"150\" height=\"44\" rx=\"4\"></rect><text class=\"dt db\" x=\"415\" y=\"58\" text-anchor=\"middle\" dominant-baseline=\"central\">avançada</text><text class=\"dm\" x=\"415\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\">5000–5999</text>\n<rect class=\"bxp\" x=\"500\" y=\"40\" width=\"180\" height=\"44\" rx=\"4\"></rect><text class=\"dt db\" x=\"590\" y=\"58\" text-anchor=\"middle\" dominant-baseline=\"central\">mega-avançada</text><text class=\"dm\" x=\"590\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\">6000–9999</text>\n<text class=\"dm\" x=\"95\" y=\"112\" text-anchor=\"middle\">d &lt;= 3999</text><text class=\"dm\" x=\"255\" y=\"112\" text-anchor=\"middle\">else if d &lt;= 4999</text><text class=\"dm\" x=\"415\" y=\"112\" text-anchor=\"middle\">else if d &lt;= 5999</text><text class=\"dm\" x=\"590\" y=\"112\" text-anchor=\"middle\">else</text>\n<text class=\"ds\" x=\"350\" y=\"140\" text-anchor=\"middle\">Com que tots els dorsals són ≥ 3000, n'hi ha prou de comparar amb el límit superior de cada tram.</text>\n</svg></div>\n<figcaption>Classificar per intervals consecutius és el cas ideal per a una cadena <code>else if</code>, i no per a un <code>switch</code>.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:560px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 700 150\" role=\"img\" aria-label=\"Rangos de dorsales por categoría\" role=\"img\">\n<rect class=\"bxo\" x=\"20\" y=\"40\" width=\"150\" height=\"44\" rx=\"4\"></rect><text class=\"dt db\" x=\"95\" y=\"58\" text-anchor=\"middle\" dominant-baseline=\"central\">joven</text><text class=\"dm\" x=\"95\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\">3000–3999</text>\n<rect class=\"bxq\" x=\"180\" y=\"40\" width=\"150\" height=\"44\" rx=\"4\"></rect><text class=\"dt db\" x=\"255\" y=\"58\" text-anchor=\"middle\" dominant-baseline=\"central\">media</text><text class=\"dm\" x=\"255\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\">4000–4999</text>\n<rect class=\"bxw\" x=\"340\" y=\"40\" width=\"150\" height=\"44\" rx=\"4\"></rect><text class=\"dt db\" x=\"415\" y=\"58\" text-anchor=\"middle\" dominant-baseline=\"central\">avanzada</text><text class=\"dm\" x=\"415\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\">5000–5999</text>\n<rect class=\"bxp\" x=\"500\" y=\"40\" width=\"180\" height=\"44\" rx=\"4\"></rect><text class=\"dt db\" x=\"590\" y=\"58\" text-anchor=\"middle\" dominant-baseline=\"central\">mega-avanzada</text><text class=\"dm\" x=\"590\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\">6000–9999</text>\n<text class=\"dm\" x=\"95\" y=\"112\" text-anchor=\"middle\">d &lt;= 3999</text><text class=\"dm\" x=\"255\" y=\"112\" text-anchor=\"middle\">else if d &lt;= 4999</text><text class=\"dm\" x=\"415\" y=\"112\" text-anchor=\"middle\">else if d &lt;= 5999</text><text class=\"dm\" x=\"590\" y=\"112\" text-anchor=\"middle\">else</text>\n<text class=\"ds\" x=\"350\" y=\"140\" text-anchor=\"middle\">Como todos los dorsales son ≥ 3000, basta con comparar con el límite superior de cada tramo.</text>\n</svg></div>\n<figcaption>Clasificar por intervalos consecutivos es el caso ideal para una cadena <code>else if</code>, y no para un <code>switch</code>.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:560px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 700 150\" role=\"img\" aria-label=\"Race-number ranges by category\" role=\"img\">\n<rect class=\"bxo\" x=\"20\" y=\"40\" width=\"150\" height=\"44\" rx=\"4\"></rect><text class=\"dt db\" x=\"95\" y=\"58\" text-anchor=\"middle\" dominant-baseline=\"central\">young</text><text class=\"dm\" x=\"95\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\">3000–3999</text>\n<rect class=\"bxq\" x=\"180\" y=\"40\" width=\"150\" height=\"44\" rx=\"4\"></rect><text class=\"dt db\" x=\"255\" y=\"58\" text-anchor=\"middle\" dominant-baseline=\"central\">middle</text><text class=\"dm\" x=\"255\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\">4000–4999</text>\n<rect class=\"bxw\" x=\"340\" y=\"40\" width=\"150\" height=\"44\" rx=\"4\"></rect><text class=\"dt db\" x=\"415\" y=\"58\" text-anchor=\"middle\" dominant-baseline=\"central\">advanced</text><text class=\"dm\" x=\"415\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\">5000–5999</text>\n<rect class=\"bxp\" x=\"500\" y=\"40\" width=\"180\" height=\"44\" rx=\"4\"></rect><text class=\"dt db\" x=\"590\" y=\"58\" text-anchor=\"middle\" dominant-baseline=\"central\">mega-advanced</text><text class=\"dm\" x=\"590\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\">6000–9999</text>\n<text class=\"dm\" x=\"95\" y=\"112\" text-anchor=\"middle\">d &lt;= 3999</text><text class=\"dm\" x=\"255\" y=\"112\" text-anchor=\"middle\">else if d &lt;= 4999</text><text class=\"dm\" x=\"415\" y=\"112\" text-anchor=\"middle\">else if d &lt;= 5999</text><text class=\"dm\" x=\"590\" y=\"112\" text-anchor=\"middle\">else</text>\n<text class=\"ds\" x=\"350\" y=\"140\" text-anchor=\"middle\">Since all race numbers are ≥ 3000, it is enough to compare with the upper limit of each band.</text>\n</svg></div>\n<figcaption>Classifying by consecutive intervals is the ideal case for an <code>else if</code> chain, not for a <code>switch</code>.</figcaption>\n</figure>"
    ],
    "mode": "explained"
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "andorrarun_a.cpp",
     "run": true,
     "trace": true,
     "in": "3001 4100 3500 6002 4999 -1"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int dorsal;\n    int jove = 0, mitjana = 0, avancada = 0, mega = 0;\n\n    cin >> dorsal;\n    while (dorsal != -1) {\n        if (dorsal <= 3999) {\n            jove++;\n        } else if (dorsal <= 4999) {\n            mitjana++;\n        } else if (dorsal <= 5999) {\n            avancada++;\n        } else {\n            mega++;\n        }\n        cin >> dorsal;\n    }\n\n    int maxim = jove;                         // màxim de quatre valors\n    if (mitjana > maxim) maxim = mitjana;\n    if (avancada > maxim) maxim = avancada;\n    if (mega > maxim) maxim = mega;\n\n    cout << \"Categoria/es amb mes participants:\";\n    if (jove == maxim) cout << \" jove\";       // totes les que empaten\n    if (mitjana == maxim) cout << \" mitjana\";\n    if (avancada == maxim) cout << \" avancada\";\n    if (mega == maxim) cout << \" mega\";\n    cout << endl;\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int dorsal;\n    int jove = 0, mitjana = 0, avancada = 0, mega = 0;\n\n    cin >> dorsal;\n    while (dorsal != -1) {\n        if (dorsal <= 3999) {\n            jove++;\n        } else if (dorsal <= 4999) {\n            mitjana++;\n        } else if (dorsal <= 5999) {\n            avancada++;\n        } else {\n            mega++;\n        }\n        cin >> dorsal;\n    }\n\n    int maxim = jove;                         // máximo de cuatro valores\n    if (mitjana > maxim) maxim = mitjana;\n    if (avancada > maxim) maxim = avancada;\n    if (mega > maxim) maxim = mega;\n\n    cout << \"Categoria/es amb mes participants:\";\n    if (jove == maxim) cout << \" jove\";       // todas las que empatan\n    if (mitjana == maxim) cout << \" mitjana\";\n    if (avancada == maxim) cout << \" avancada\";\n    if (mega == maxim) cout << \" mega\";\n    cout << endl;\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int dorsal;\n    int jove = 0, mitjana = 0, avancada = 0, mega = 0;\n\n    cin >> dorsal;\n    while (dorsal != -1) {\n        if (dorsal <= 3999) {\n            jove++;\n        } else if (dorsal <= 4999) {\n            mitjana++;\n        } else if (dorsal <= 5999) {\n            avancada++;\n        } else {\n            mega++;\n        }\n        cin >> dorsal;\n    }\n\n    int maxim = jove;                         // maximum of four values\n    if (mitjana > maxim) maxim = mitjana;\n    if (avancada > maxim) maxim = avancada;\n    if (mega > maxim) maxim = mega;\n\n    cout << \"Categoria/es amb mes participants:\";\n    if (jove == maxim) cout << \" jove\";       // all the ones that tie\n    if (mitjana == maxim) cout << \" mitjana\";\n    if (avancada == maxim) cout << \" avancada\";\n    if (mega == maxim) cout << \" mega\";\n    cout << endl;\n    return 0;\n}"
    ]
   },
   {
    "t": "p",
    "x": [
     "Amb l'entrada de mostra hi ha 2 joves, 2 mitjanes, 0 avançades i 1 mega: surten «jove mitjana». Fixeu-vos que les quatre comprovacions finals són `if` independents, no `else if`: si n'hi ha més d'una que empata, s'han d'escriure totes.",
     "Con la entrada de muestra hay 2 dorsales de categoría joven, 2 de media, 0 de avanzada y 1 de mega: sale «jove mitjana». Fijaos en que las cuatro comprobaciones finales son `if` independientes, no `else if`: si empata más de una, hay que escribirlas todas.",
     "With the sample input there are 2 race numbers in the young category, 2 in middle, 0 in advanced and 1 in mega: “jove mitjana” comes out. Notice that the four final checks are independent `if`s, not `else if`: if more than one ties, all of them must be written."
    ]
   }
  ],
  "s4-9": [
   {
    "t": "p",
    "x": [
     "El recorregut tracta **tots** els elements. Si només volem saber si n'hi ha algun que compleix una condició, no cal arribar al final: l'esquema de cerca s'atura quan el troba. En C++, la condició del `while` té dues parts: «no s'ha acabat la seqüència» **i** «encara no l'he trobat».",
     "El recorrido trata **todos** los elementos. Si solo queremos saber si hay alguno que cumple una condición, no hace falta llegar al final: el esquema de búsqueda se detiene cuando lo encuentra. En C++, la condición del `while` tiene dos partes: «no se ha terminado la secuencia» **y** «todavía no lo he encontrado».",
     "The traversal processes **all** the elements. If we only want to know whether there is any that meets a condition, we need not reach the end: the search scheme stops when it finds it. In C++, the `while` condition has two parts: “the sequence has not ended” **and** “I have not found it yet”."
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "cerca_menor.cpp",
     "run": true,
     "trace": true,
     "in": "25 40 16 30 0"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int edat;\n    cin >> edat;\n    while (edat != 0 && edat >= 18) {     // no és la marca I no és el que busquem\n        cin >> edat;\n    }\n    // en sortir, cal saber PER QUÈ s'ha sortit\n    if (edat != 0) {\n        cout << \"Hi ha un menor d'edat: \" << edat << endl;\n    } else {\n        cout << \"No hi ha cap menor d'edat\" << endl;\n    }\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int edat;\n    cin >> edat;\n    while (edat != 0 && edat >= 18) {     // no es la marca Y no es lo que buscamos\n        cin >> edat;\n    }\n    // al salir, hay que saber POR QUÉ se ha salido\n    if (edat != 0) {\n        cout << \"Hi ha un menor d'edat: \" << edat << endl;\n    } else {\n        cout << \"No hi ha cap menor d'edat\" << endl;\n    }\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int edat;\n    cin >> edat;\n    while (edat != 0 && edat >= 18) {     // not the marker AND not what we are looking for\n        cin >> edat;\n    }\n    // on exit, we need to know WHY it exited\n    if (edat != 0) {\n        cout << \"Hi ha un menor d'edat: \" << edat << endl;\n    } else {\n        cout << \"No hi ha cap menor d'edat\" << endl;\n    }\n    return 0;\n}"
    ]
   },
   {
    "t": "p",
    "x": [
     "El bucle pot acabar per dos motius, i després del bucle cal distingir-los. Si s'ha aturat sense arribar a la marca, és que l'ha trobat. Proveu-ho amb `25 40 0`: no hi ha cap menor i el bucle arriba al final. Observeu també que el 30 no s'arriba a llegir: la cerca ha estalviat feina.",
     "El bucle puede terminar por dos motivos, y después del bucle hay que distinguirlos. Si se ha detenido sin llegar a la marca, es que lo ha encontrado. Probadlo con `25 40 0`: no hay ningún menor y el bucle llega al final. Observad también que el 30 no se llega a leer: la búsqueda ha ahorrado trabajo.",
     "The loop can end for two reasons, and after the loop they must be told apart. If it stopped without reaching the marker, it found it. Try it with `25 40 0`: there is no one under age and the loop reaches the end. Notice also that 30 is never read: the search has saved work."
    ]
   }
  ],
  "s4-10": [
   {
    "t": "table",
    "head": [
     [
      "Símptoma",
      "Síntoma",
      "Symptom"
     ],
     "Causa habitual",
     [
      "Solució",
      "Solución",
      "Solution"
     ]
    ],
    "rows": [
     [
      [
       "El programa no acaba mai",
       "El programa no termina nunca",
       "The program never ends"
      ],
      [
       "Dins del bucle no es llegeix la dada següent, o la variable de control no canvia.",
       "Dentro del bucle no se lee el dato siguiente, o la variable de control no cambia.",
       "The next data item is not read inside the loop, or the control variable does not change."
      ],
      [
       "Comproveu que el cos fa avançar la condició (el `cin` final, el `i++`).",
       "Comprobad que el cuerpo hace avanzar la condición (el `cin` final, el `i++`).",
       "Check that the body moves the condition forward (the final `cin`, the `i++`)."
      ]
     ],
     [
      [
       "Es compta o se suma la marca de fi",
       "Se cuenta o se suma la marca de fin",
       "The end marker is counted or added"
      ],
      [
       "Es llegeix al principi del cos en lloc de fer lectura avançada.",
       "Se lee al principio del cuerpo en lugar de hacer lectura adelantada.",
       "It reads at the start of the body instead of doing a read-ahead."
      ],
      [
       "Un `cin` abans del bucle i un altre al final del cos.",
       "Un `cin` antes del bucle y otro al final del cuerpo.",
       "One `cin` before the loop and another at the end of the body."
      ]
     ],
     [
      [
       "Una volta de més o de menys",
       "Una vuelta de más o de menos",
       "One iteration too many or too few"
      ],
      [
       "`<` en lloc de `<=`, o l'inici a 0 en lloc d'1.",
       "`<` en lugar de `<=`, o el inicio en 0 en lugar de en 1.",
       "`<` instead of `<=`, or starting at 0 instead of 1."
      ],
      [
       "Traceu la primera i l'última volta.",
       "Trazad la primera y la última vuelta.",
       "Trace the first and the last iteration."
      ]
     ],
     [
      [
       "El total no és el que toca",
       "El total no es el que debería",
       "The total is not what it should be"
      ],
      [
       "L'acumulador o el comptador no s'han inicialitzat a 0, o s'inicialitzen **dins** del bucle.",
       "El acumulador o el contador no se han inicializado a 0, o se inicializan **dentro** del bucle.",
       "The accumulator or the counter was not initialised to 0, or it is initialised **inside** the loop."
      ],
      [
       "Inicialitzeu-los una sola vegada, abans del bucle.",
       "Inicializadlos una sola vez, antes del bucle.",
       "Initialise them only once, before the loop."
      ]
     ],
     [
      [
       "La mitjana surt sense decimals",
       "La media sale sin decimales",
       "The average comes out without decimals"
      ],
      [
       "Divisió entera `sum / ct`.",
       "División entera `sum / ct`.",
       "Integer division `sum / ct`."
      ],
      "`(double) sum / ct`."
     ]
    ]
   }
  ],
  "s4-11": [
   {
    "t": "p",
    "x": [
     "A CodeRunner: «Endevina el Nombre», AndorraRun apartats (b), (c) i (d), els qüestionaris Q01–Q09, Q18 (màxim d'una seqüència acabada en 0) i Q19 (mitjana dels positius fins a −1). Aquí teniu els exercicis de la setmana, del més fàcil al més difícil:",
     "En CodeRunner: «Endevina el Nombre», AndorraRun apartados (b), (c) y (d), los cuestionarios Q01–Q09, Q18 (máximo de una secuencia terminada en 0) y Q19 (media de los positivos hasta −1). Aquí tenéis los ejercicios de la semana, del más fácil al más difícil:",
     "In CodeRunner: “Endevina el Nombre”, AndorraRun parts (b), (c) and (d), quizzes Q01–Q09, Q18 (maximum of a sequence ending in 0) and Q19 (average of the positives up to −1). Here you have the week's exercises, from easiest to hardest:"
    ]
   },
   {
    "t": "lab",
    "id": "exlist",
    "props": {
     "wk": 4
    },
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "Els esquemes del Tema 2.3 aplicats a problemes resolts són a [Esquemes de recorregut i cerca](/programacio/practica?unit=t23).",
     "Los esquemas del Tema 2.3 aplicados a problemas resueltos están en [Esquemas de recorrido y búsqueda](/programacio/practica?unit=t23).",
     "The schemes of Unit 2.3 applied to solved problems are in [Traversal and search schemes](/programacio/practica?unit=t23)."
    ],
    "mode": "explained"
   }
  ],
  "s4-12": [
   {
    "t": "check",
    "ex": {
     "id": "s4-12-q1",
     "qb": [
      {
       "t": "p",
       "x": [
        "Amb l'entrada `5 8 3 0`, què escriu?",
        "Con la entrada `5 8 3 0`, ¿qué escribe?",
        "With the input `5 8 3 0`, what does it write?"
       ]
      },
      {
       "t": "code",
       "lang": "txt",
       "src": "int x, s = 0;\ncin >> x;\nwhile (x != 0) {\n    cin >> x;\n    s = s + x;\n}\ncout << s;"
      }
     ],
     "type": "mcq",
     "opts": [
      "16",
      "21",
      "11",
      "13"
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "El cos llegeix abans de sumar: el 5 no se suma mai i el 0 sí. Se sumen 8 + 3 + 0 = 11. Les dues instruccions del cos estan en l'ordre equivocat.",
        "El cuerpo lee antes de sumar: el 5 no se suma nunca y el 0 sí. Se suman 8 + 3 + 0 = 11. Las dos instrucciones del cuerpo están en el orden equivocado.",
        "The body reads before adding: 5 is never added and 0 is. 8 + 3 + 0 = 11 is added. The two instructions in the body are in the wrong order."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s4-12-q2",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quantes vegades s'escriu «hola»?",
        "¿Cuántas veces se escribe «hola»?",
        "How many times is “hola” written?"
       ]
      },
      {
       "t": "code",
       "lang": "txt",
       "src": "for (int i = 0; i <= 10; i += 3) {\n    cout << \"hola \";\n}"
      }
     ],
     "type": "mcq",
     "opts": [
      "3",
      "4",
      "10",
      "11"
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "i pren els valors 0, 3, 6 i 9; el següent, 12, ja no compleix `i <= 10`.",
        "i toma los valores 0, 3, 6 y 9; el siguiente, 12, ya no cumple `i <= 10`.",
        "i takes the values 0, 3, 6 and 9; the next one, 12, no longer meets `i <= 10`."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s4-12-q3",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quina és la traducció correcta de `REPETEIX … FINS_QUE n > 0`?",
        "¿Cuál es la traducción correcta de `REPETEIX … FINS_QUE n > 0`?",
        "What is the correct translation of `REPETEIX … FINS_QUE n > 0`?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "`do { … } while (n > 0);`",
      "`while (n > 0) { … }`",
      "`do { … } while (n >= 0);`",
      "`do { … } while (n <= 0);`"
     ],
     "answer": 3,
     "sol": [
      {
       "t": "p",
       "x": [
        "«Fins que n > 0» vol dir «mentre n ≤ 0», i com que el cos s'ha de fer com a mínim una vegada, és un `do … while`.",
        "«Hasta que n > 0» quiere decir «mientras n ≤ 0», y como el cuerpo se tiene que hacer como mínimo una vez, es un `do … while`.",
        "“Until n > 0” means “while n ≤ 0”, and since the body has to be done at least once, it is a `do … while`."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s4-12-q4",
     "qb": [
      {
       "t": "p",
       "x": [
        "Per trobar el màxim d'una seqüència d'enters que poden ser negatius, quin valor inicial és el més segur per a `mx`?",
        "Para encontrar el máximo de una secuencia de enteros que pueden ser negativos, ¿qué valor inicial es el más seguro para `mx`?",
        "To find the maximum of a sequence of integers that can be negative, which initial value is the safest for `mx`?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      [
       "El primer element de la seqüència",
       "El primer elemento de la secuencia",
       "The first element of the sequence"
      ],
      "0",
      "−1",
      [
       "El darrer element",
       "El último elemento",
       "The last element"
      ]
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "Si totes les dades són negatives, començar a 0 donaria 0, que no és a la seqüència. El primer element és sempre un candidat vàlid.",
        "Si todos los datos son negativos, empezar en 0 daría 0, que no está en la secuencia. El primer elemento es siempre un candidato válido.",
        "If all the data are negative, starting at 0 would give 0, which is not in the sequence. The first element is always a valid candidate."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "s4-12-q5",
     "qb": [
      {
       "t": "p",
       "x": [
        "Al Concert de Rock, amb l'entrada `40 40 30 0`, quant valen `ME` i `QME` al final?",
        "En el Concierto de Rock, con la entrada `40 40 30 0`, ¿cuánto valen `ME` y `QME` al final?",
        "In the Rock Concert, with the input `40 40 30 0`, what are `ME` and `QME` at the end?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "ME = 40, QME = 1",
      "ME = 40, QME = 3",
      "ME = 40, QME = 2",
      "ME = 30, QME = 1"
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "El primer 40 és un màxim nou (QME = 1), el segon l'iguala (QME = 2) i el 30 no canvia res.",
        "El primer 40 es un máximo nuevo (QME = 1), el segundo lo iguala (QME = 2) y el 30 no cambia nada.",
        "The first 40 is a new maximum (QME = 1), the second equals it (QME = 2) and 30 changes nothing."
       ]
      }
     ]
    }
   }
  ],
  "s4-13": [
   {
    "t": "summary",
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "`while` per a seqüències de llargada desconeguda, `for` quan se sap quantes voltes, `do … while` quan cal fer-ho com a mínim una vegada.",
        "`while` para secuencias de longitud desconocida, `for` cuando se sabe cuántas vueltas, `do … while` cuando hay que hacerlo como mínimo una vez.",
        "`while` for sequences of unknown length, `for` when the number of iterations is known, `do … while` when it must be done at least once."
       ],
       [
        "Seqüència amb sentinella: **lectura avançada** (un `cin` abans del bucle i un altre al final del cos).",
        "Secuencia con centinela: **lectura adelantada** (un `cin` antes del bucle y otro al final del cuerpo).",
        "Sequence with a sentinel: **read-ahead** (one `cin` before the loop and another at the end of the body)."
       ],
       [
        "Comptadors i acumuladors s'inicialitzen a 0 **abans** del bucle; el màxim, amb el primer element o un valor segur.",
        "Los contadores y los acumuladores se inicializan a 0 **antes** del bucle; el máximo, con el primer elemento o con un valor seguro.",
        "Counters and accumulators are initialised to 0 **before** the loop; the maximum, with the first element or with a safe value."
       ],
       [
        "Un màxim nou posa el seu comptador a 1; un valor igual al màxim el fa créixer.",
        "Un máximo nuevo pone su contador a 1; un valor igual al máximo lo hace crecer.",
        "A new maximum sets its counter to 1; a value equal to the maximum makes it grow."
       ],
       [
        "Cerca: el `while` s'atura quan s'acaba la seqüència **o** quan es troba; després del bucle cal comprovar quin dels dos motius ha estat.",
        "Búsqueda: el `while` se detiene cuando se termina la secuencia **o** cuando se encuentra; después del bucle hay que comprobar cuál de los dos motivos ha sido.",
        "Search: the `while` stops when the sequence ends **or** when it is found; after the loop you must check which of the two reasons it was."
       ]
      ]
     }
    ]
   }
  ]
 },
 "examEnd": [
  {
   "ref": "cpp-model-rock"
  },
  {
   "ref": "cpp-model-endevina"
  },
  {
   "ref": "cpp-m-notes-classe"
  },
  {
   "ref": "cpp-d-medalla-plata"
  }
 ]
};
