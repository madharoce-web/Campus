// Generat per tools/kit-import/prog.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Constants i variables, tipus, operadors i prioritats, especificació i les tres composicions.",
    "Constantes y variables, tipos, operadores y prioridades, especificación y las tres composiciones."
   ]
  },
  {
   "t": "list",
   "items": [
    [
     "**Setmana:** 3 (21–27 de setembre) · Programació estructurada",
     "**Semana:** 3 (21–27 de septiembre) · Programación estructurada"
    ],
    [
     "**Documentació:** Apunts del professorat: diapositives 31–79",
     "**Documentación:** Apuntes del profesorado: diapositivas 31–79"
    ],
    [
     "**Llibre de suport:** Fonaments de programació (Ed. UOC), pàg. 31–73",
     "**Libro de apoyo:** Fonaments de programació (Ed. UOC), pág. 31–73"
    ]
   ]
  },
  {
   "t": "p",
   "x": [
    "Aquest és el tema central de la primera part del curs: **amb quines dades** treballa un algorisme, **quines operacions** s'hi poden fer, **en quin ordre** s'avaluen les expressions i amb **quines tres estructures** es pot escriure qualsevol programa.",
    "Este es el tema central de la primera parte del curso: **con qué datos** trabaja un algoritmo, **qué operaciones** se pueden hacer con ellos, **en qué orden** se evalúan las expresiones y con **qué tres estructuras** se puede escribir cualquier programa."
   ]
  },
  {
   "t": "summary",
   "title": [
    "En acabar aquesta pàgina sabràs",
    "Al terminar esta página sabrás"
   ],
   "blocks": [
    {
     "t": "list",
     "items": [
      [
       "Distingir **constants i variables** i descriure qualsevol dada pels seus cinc components.",
       "Distinguir **constantes y variables** y describir cualquier dato por sus cinco componentes."
      ],
      [
       "Triar el **tipus** adequat per a cada dada i escriure l'**ENTORN** d'un algorisme.",
       "Elegir el **tipo** adecuado para cada dato y escribir el **ENTORN** de un algoritmo."
      ],
      [
       "Avaluar expressions pas a pas amb la **taula de prioritats** del curs (i saber on cal posar parèntesis).",
       "Evaluar expresiones paso a paso con la **tabla de prioridades** del curso (y saber dónde hay que poner paréntesis)."
      ],
      [
       "Escriure l'**estat inicial i final** d'un algorisme.",
       "Escribir el **estado inicial y final** de un algoritmo."
      ],
      [
       "Reconèixer i fer servir les **tres composicions**: seqüencial, alternativa i iterativa.",
       "Reconocer y usar las **tres composiciones**: secuencial, alternativa e iterativa."
      ]
     ]
    }
   ]
  }
 ],
 "sections": {
  "t22-1": [
   {
    "t": "p",
    "x": [
     "La programació imperativa treballa manipulant **dades guardades a la memòria** de l'ordinador. La memòria és un gran nombre de **cel·les**, cadascuna amb una **adreça**, on es guarden valors per recuperar-los més tard.",
     "La programación imperativa trabaja manipulando **datos guardados en la memoria** del ordenador. La memoria está formada por un gran número de **celdas**, cada una con una **dirección**, donde se guardan valores para recuperarlos más tarde."
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 200\" role=\"img\" aria-label=\"Amb un llenguatge d&#x27;alt nivell no cal saber on és cada dada: n&#x27;hi ha prou amb el nom (identificador).\">\n<text class=\"dt db\" x=\"20\" y=\"22\">Llenguatge màquina: per adreça</text>\n<g>\n<rect class=\"bx\" x=\"20\" y=\"34\" width=\"90\" height=\"40\"></rect><text class=\"dm\" x=\"65\" y=\"54\" text-anchor=\"middle\" dominant-baseline=\"central\">25</text><text class=\"ds\" x=\"65\" y=\"88\" text-anchor=\"middle\">@1000</text>\n<rect class=\"bx\" x=\"110\" y=\"34\" width=\"90\" height=\"40\"></rect><text class=\"dm\" x=\"155\" y=\"54\" text-anchor=\"middle\" dominant-baseline=\"central\">3.1416</text><text class=\"ds\" x=\"155\" y=\"88\" text-anchor=\"middle\">@1004</text>\n<rect class=\"bx\" x=\"200\" y=\"34\" width=\"90\" height=\"40\"></rect><text class=\"dm\" x=\"245\" y=\"54\" text-anchor=\"middle\" dominant-baseline=\"central\">'A'</text><text class=\"ds\" x=\"245\" y=\"88\" text-anchor=\"middle\">@1012</text>\n<rect class=\"bx\" x=\"290\" y=\"34\" width=\"90\" height=\"40\"></rect><text class=\"dm\" x=\"335\" y=\"54\" text-anchor=\"middle\" dominant-baseline=\"central\">0</text><text class=\"ds\" x=\"335\" y=\"88\" text-anchor=\"middle\">@1013</text>\n</g>\n<text class=\"ds\" x=\"200\" y=\"112\" text-anchor=\"middle\">«carrega el contingut de l'adreça 1000…»</text>\n<text class=\"dt db\" x=\"460\" y=\"22\">Alt nivell i pseudocodi: per nom</text>\n<g>\n<rect class=\"bxa\" x=\"460\" y=\"34\" width=\"90\" height=\"40\"></rect><text class=\"dm\" x=\"505\" y=\"54\" text-anchor=\"middle\" dominant-baseline=\"central\">25</text><text class=\"dt db\" x=\"505\" y=\"88\" text-anchor=\"middle\">preu</text>\n<rect class=\"bxa\" x=\"550\" y=\"34\" width=\"90\" height=\"40\"></rect><text class=\"dm\" x=\"595\" y=\"54\" text-anchor=\"middle\" dominant-baseline=\"central\">3.1416</text><text class=\"dt db\" x=\"595\" y=\"88\" text-anchor=\"middle\">PI</text>\n<rect class=\"bxa\" x=\"640\" y=\"34\" width=\"90\" height=\"40\"></rect><text class=\"dm\" x=\"685\" y=\"54\" text-anchor=\"middle\" dominant-baseline=\"central\">'A'</text><text class=\"dt db\" x=\"685\" y=\"88\" text-anchor=\"middle\">lletra</text>\n<rect class=\"bxa\" x=\"730\" y=\"34\" width=\"90\" height=\"40\"></rect><text class=\"dm\" x=\"775\" y=\"54\" text-anchor=\"middle\" dominant-baseline=\"central\">0</text><text class=\"dt db\" x=\"775\" y=\"88\" text-anchor=\"middle\">comptador</text>\n</g>\n<text class=\"ds\" x=\"640\" y=\"112\" text-anchor=\"middle\">«preu ← preu + 1»</text>\n<rect class=\"bxg\" x=\"20\" y=\"135\" width=\"820\" height=\"50\" rx=\"6\"></rect>\n<text class=\"dt\" x=\"430\" y=\"155\" text-anchor=\"middle\">Cada cel·la amb nom és una <tspan font-weight=\"700\">dada</tspan>. Si el seu valor pot canviar és una <tspan font-weight=\"700\">variable</tspan>;</text>\n<text class=\"dt\" x=\"430\" y=\"173\" text-anchor=\"middle\">si no pot canviar és una <tspan font-weight=\"700\">constant</tspan>. Per dins tot són bits, però nosaltres treballem amb noms i valors.</text>\n</svg></div>\n<figcaption>Amb un llenguatge d'alt nivell no cal saber on és cada dada: n'hi ha prou amb el nom (identificador).</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 200\" role=\"img\" aria-label=\"Con un lenguaje de alto nivel no hace falta saber dónde está cada dato: basta con el nombre (identificador).\">\n<text class=\"dt db\" x=\"20\" y=\"22\">Lenguaje máquina: por dirección</text>\n<g>\n<rect class=\"bx\" x=\"20\" y=\"34\" width=\"90\" height=\"40\"></rect><text class=\"dm\" x=\"65\" y=\"54\" text-anchor=\"middle\" dominant-baseline=\"central\">25</text><text class=\"ds\" x=\"65\" y=\"88\" text-anchor=\"middle\">@1000</text>\n<rect class=\"bx\" x=\"110\" y=\"34\" width=\"90\" height=\"40\"></rect><text class=\"dm\" x=\"155\" y=\"54\" text-anchor=\"middle\" dominant-baseline=\"central\">3.1416</text><text class=\"ds\" x=\"155\" y=\"88\" text-anchor=\"middle\">@1004</text>\n<rect class=\"bx\" x=\"200\" y=\"34\" width=\"90\" height=\"40\"></rect><text class=\"dm\" x=\"245\" y=\"54\" text-anchor=\"middle\" dominant-baseline=\"central\">'A'</text><text class=\"ds\" x=\"245\" y=\"88\" text-anchor=\"middle\">@1012</text>\n<rect class=\"bx\" x=\"290\" y=\"34\" width=\"90\" height=\"40\"></rect><text class=\"dm\" x=\"335\" y=\"54\" text-anchor=\"middle\" dominant-baseline=\"central\">0</text><text class=\"ds\" x=\"335\" y=\"88\" text-anchor=\"middle\">@1013</text>\n</g>\n<text class=\"ds\" x=\"200\" y=\"112\" text-anchor=\"middle\">«carga el contenido de la dirección 1000…»</text>\n<text class=\"dt db\" x=\"460\" y=\"22\">Alto nivel y pseudocódigo: por nombre</text>\n<g>\n<rect class=\"bxa\" x=\"460\" y=\"34\" width=\"90\" height=\"40\"></rect><text class=\"dm\" x=\"505\" y=\"54\" text-anchor=\"middle\" dominant-baseline=\"central\">25</text><text class=\"dt db\" x=\"505\" y=\"88\" text-anchor=\"middle\">preu</text>\n<rect class=\"bxa\" x=\"550\" y=\"34\" width=\"90\" height=\"40\"></rect><text class=\"dm\" x=\"595\" y=\"54\" text-anchor=\"middle\" dominant-baseline=\"central\">3.1416</text><text class=\"dt db\" x=\"595\" y=\"88\" text-anchor=\"middle\">PI</text>\n<rect class=\"bxa\" x=\"640\" y=\"34\" width=\"90\" height=\"40\"></rect><text class=\"dm\" x=\"685\" y=\"54\" text-anchor=\"middle\" dominant-baseline=\"central\">'A'</text><text class=\"dt db\" x=\"685\" y=\"88\" text-anchor=\"middle\">lletra</text>\n<rect class=\"bxa\" x=\"730\" y=\"34\" width=\"90\" height=\"40\"></rect><text class=\"dm\" x=\"775\" y=\"54\" text-anchor=\"middle\" dominant-baseline=\"central\">0</text><text class=\"dt db\" x=\"775\" y=\"88\" text-anchor=\"middle\">comptador</text>\n</g>\n<text class=\"ds\" x=\"640\" y=\"112\" text-anchor=\"middle\">«preu ← preu + 1»</text>\n<rect class=\"bxg\" x=\"20\" y=\"135\" width=\"820\" height=\"50\" rx=\"6\"></rect>\n<text class=\"dt\" x=\"430\" y=\"155\" text-anchor=\"middle\">Cada celda con nombre es un <tspan font-weight=\"700\">dato</tspan>. Si su valor puede cambiar, es una <tspan font-weight=\"700\">variable</tspan>;</text>\n<text class=\"dt\" x=\"430\" y=\"173\" text-anchor=\"middle\">si no puede cambiar, es una <tspan font-weight=\"700\">constante</tspan>. Por dentro todo son bits, pero trabajamos con nombres y valores.</text>\n</svg></div>\n<figcaption>Con un lenguaje de alto nivel no hace falta saber dónde está cada dato: basta con el nombre (identificador).</figcaption>\n</figure>"
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-cols\">\n<div class=\"ip-card\"><h4>Variable</h4><p>Dada que <b>pot canviar</b> de valor al llarg de l'algorisme.</p><p><code>comptador ← comptador + 1</code></p></div>\n<div class=\"ip-card\"><h4>Constant</h4><p>Dada que <b>no pot canviar</b> de valor. En C++ es marca amb <code>const</code>:</p><p><code>const double PI = 3.1416;</code></p></div>\n</div>",
     "<div class=\"ip-cols\">\n<div class=\"ip-card\"><h4>Variable</h4><p>Dato que <b>puede cambiar</b> de valor a lo largo del algoritmo.</p><p><code>comptador ← comptador + 1</code></p></div>\n<div class=\"ip-card\"><h4>Constante</h4><p>Dato que <b>no puede cambiar</b> de valor. En C++ se marca con <code>const</code>:</p><p><code>const double PI = 3.1416;</code></p></div>\n</div>"
    ]
   },
   {
    "t": "p",
    "x": [
     "Una de les feines del programador és decidir **quines dades** calen i **com s'estructuren**. Una dada té cinc components; l'exemple és la variable `edat`:",
     "Una de las tareas del programador es decidir **qué datos** hacen falta y **cómo se estructuran**. Un dato tiene cinco componentes; el ejemplo es la variable `edat` (edad):"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Component",
      "Componente"
     ],
     [
      "Què és",
      "Qué es"
     ],
     [
      "Per a `edat`",
      "Para `edat`"
     ]
    ],
    "rows": [
     [
      "**Identificador**",
      [
       "El nom que la distingeix de qualsevol altra dada",
       "El nombre que lo distingue de cualquier otro dato"
      ],
      "`edat`"
     ],
     [
      [
       "**Tipus**",
       "**Tipo**"
      ],
      [
       "La classe de dada",
       "La clase de dato"
      ],
      "Natural (C++: `int`)"
     ],
     [
      [
       "**Domini**",
       "**Dominio**"
      ],
      [
       "El conjunt de valors que pot prendre (depèn de la memòria que ocupa)",
       "El conjunto de valores que puede tomar (depende de la memoria que ocupa)"
      ],
      [
       "De 0 a un màxim; un `int` de C++ va de −2.147.483.648 a 2.147.483.647",
       "De 0 a un máximo; un `int` de C++ va de −2.147.483.648 a 2.147.483.647"
      ]
     ],
     [
      [
       "**Operacions**",
       "**Operaciones**"
      ],
      [
       "Què s'hi pot fer",
       "Qué se puede hacer con él"
      ],
      "Sumar, restar, comparar…"
     ],
     [
      "**Valor**",
      [
       "El que conté en un instant concret",
       "Lo que contiene en un instante concreto"
      ],
      [
       "19 (i l'any que ve, 20)",
       "19 (y el año que viene, 20)"
      ]
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "El **domini** és real, no teòric. Si un càlcul se'n surt, el resultat és incorrecte. Proveu-ho: el programa llegeix l'enter més gran possible i li suma 1.",
     "El **dominio** es real, no teórico. Si un cálculo se sale de él, el resultado es incorrecto. Probadlo: el programa lee el entero más grande posible y le suma 1."
    ]
   },
   {
    "t": "code",
    "lang": "cpp",
    "props": {
     "title": "domini.cpp",
     "run": true,
     "trace": true,
     "in": "2147483647"
    },
    "src": [
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int gran;\n    cin >> gran;           // 2147483647: el màxim d'un int\n    cout << gran << endl;\n    gran = gran + 1;       // se surt del domini\n    cout << gran << endl;  // dona la volta: un negatiu!\n    return 0;\n}",
     "#include <iostream>\nusing namespace std;\n\nint main() {\n    int gran;\n    cin >> gran;           // 2147483647: el máximo de un int\n    cout << gran << endl;\n    gran = gran + 1;       // se sale del dominio\n    cout << gran << endl;  // da la vuelta: ¡un negativo!\n    return 0;\n}"
    ]
   }
  ],
  "t22-2": [
   {
    "t": "p",
    "x": [
     "El **tipus** indica quina mena de valor pot guardar una dada i quines **operacions** s'hi poden fer:",
     "El **tipo** indica qué clase de valor puede guardar un dato y qué **operaciones** se pueden hacer con él:"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "**Numèriques** (naturals, enters, reals): admeten operacions aritmètiques.",
      "**Numéricos** (naturales, enteros, reales): admiten operaciones aritméticas."
     ],
     [
      "**Alfanumèriques** (cadenes de caràcters numèrics o alfabètics): no admeten operacions aritmètiques. El telèfon `\"376 123 456\"` és alfanumèric: no té sentit sumar dos telèfons.",
      "**Alfanuméricos** (cadenas de caracteres numéricos o alfabéticos): no admiten operaciones aritméticas. El teléfono `\"376 123 456\"` es alfanumérico: no tiene sentido sumar dos teléfonos."
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Normalment els llenguatges obliguen a **declarar** les variables abans de fer-les servir, indicant el nom i el tipus. En pseudocodi es fa a l'ENTORN; en C++, a dalt del `main`.",
     "Normalmente los lenguajes obligan a **declarar** las variables antes de usarlas, indicando el nombre y el tipo. En pseudocódigo se hace en el ENTORN; en C++, al principio del `main`."
    ]
   },
   {
    "t": "h",
    "x": [
     "Classificació",
     "Clasificación"
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 250\" role=\"img\" aria-label=\"Classificació dels tipus de dades del curs.\">\n<rect class=\"bxg\" x=\"340\" y=\"8\" width=\"180\" height=\"34\" rx=\"6\"></rect><text class=\"dt db\" x=\"430\" y=\"25\" text-anchor=\"middle\" dominant-baseline=\"central\">Tipus de dades</text>\n<path class=\"ln\" d=\"M430 42 V56 H200 V70\"></path><path class=\"ln\" d=\"M430 56 H660 V70\"></path>\n<rect class=\"bxa\" x=\"110\" y=\"70\" width=\"180\" height=\"44\" rx=\"6\"></rect><text class=\"dt db\" x=\"200\" y=\"86\" text-anchor=\"middle\">Elementals (simples)</text><text class=\"ds\" x=\"200\" y=\"103\" text-anchor=\"middle\">un sol valor cada vegada</text>\n<rect class=\"bxw\" x=\"570\" y=\"70\" width=\"180\" height=\"44\" rx=\"6\"></rect><text class=\"dt db\" x=\"660\" y=\"86\" text-anchor=\"middle\">Estructurades</text><text class=\"ds\" x=\"660\" y=\"103\" text-anchor=\"middle\">diversos valors (Tema 4)</text>\n<path class=\"ln\" d=\"M200 114 V128 H100 V140\"></path><path class=\"ln\" d=\"M200 128 H300 V140\"></path>\n<path class=\"ln\" d=\"M660 114 V128 H580 V140\"></path><path class=\"ln\" d=\"M660 128 H740 V140\"></path>\n<rect class=\"bxa\" x=\"30\" y=\"140\" width=\"140\" height=\"102\" rx=\"6\"></rect><text class=\"dt db\" x=\"100\" y=\"157\" text-anchor=\"middle\">Predefinits</text>\n<text class=\"ds\" x=\"100\" y=\"176\" text-anchor=\"middle\">Enter · Natural · Real</text><text class=\"ds\" x=\"100\" y=\"193\" text-anchor=\"middle\">Caràcter · Lògic</text><text class=\"ds\" x=\"100\" y=\"210\" text-anchor=\"middle\">Cadena (*)</text>\n<rect class=\"bxa\" x=\"230\" y=\"140\" width=\"140\" height=\"102\" rx=\"6\"></rect><text class=\"dt db\" x=\"300\" y=\"157\" text-anchor=\"middle\">Nous tipus</text><text class=\"ds\" x=\"300\" y=\"176\" text-anchor=\"middle\">definits pel</text><text class=\"ds\" x=\"300\" y=\"193\" text-anchor=\"middle\">programador:</text><text class=\"ds\" x=\"300\" y=\"210\" text-anchor=\"middle\">Subrang · Enumeratiu</text>\n<rect class=\"bxw\" x=\"510\" y=\"140\" width=\"140\" height=\"60\" rx=\"6\"></rect><text class=\"dt db\" x=\"580\" y=\"160\" text-anchor=\"middle\">Homogènies</text><text class=\"ds\" x=\"580\" y=\"180\" text-anchor=\"middle\">tots del mateix tipus</text>\n<rect class=\"bxw\" x=\"670\" y=\"140\" width=\"140\" height=\"60\" rx=\"6\"></rect><text class=\"dt db\" x=\"740\" y=\"160\" text-anchor=\"middle\">Heterogènies</text><text class=\"ds\" x=\"740\" y=\"180\" text-anchor=\"middle\">de tipus diferents</text>\n<text class=\"ds\" x=\"660\" y=\"225\" text-anchor=\"middle\">(*) una cadena també es pot veure com una seqüència de caràcters</text>\n</svg></div>\n<figcaption>Classificació dels tipus de dades del curs.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 250\" role=\"img\" aria-label=\"Clasificación de los tipos de datos del curso.\">\n<rect class=\"bxg\" x=\"340\" y=\"8\" width=\"180\" height=\"34\" rx=\"6\"></rect><text class=\"dt db\" x=\"430\" y=\"25\" text-anchor=\"middle\" dominant-baseline=\"central\">Tipos de datos</text>\n<path class=\"ln\" d=\"M430 42 V56 H200 V70\"></path><path class=\"ln\" d=\"M430 56 H660 V70\"></path>\n<rect class=\"bxa\" x=\"110\" y=\"70\" width=\"180\" height=\"44\" rx=\"6\"></rect><text class=\"dt db\" x=\"200\" y=\"86\" text-anchor=\"middle\">Elementales (simples)</text><text class=\"ds\" x=\"200\" y=\"103\" text-anchor=\"middle\">un solo valor cada vez</text>\n<rect class=\"bxw\" x=\"570\" y=\"70\" width=\"180\" height=\"44\" rx=\"6\"></rect><text class=\"dt db\" x=\"660\" y=\"86\" text-anchor=\"middle\">Estructurados</text><text class=\"ds\" x=\"660\" y=\"103\" text-anchor=\"middle\">varios valores (Tema 4)</text>\n<path class=\"ln\" d=\"M200 114 V128 H100 V140\"></path><path class=\"ln\" d=\"M200 128 H300 V140\"></path>\n<path class=\"ln\" d=\"M660 114 V128 H580 V140\"></path><path class=\"ln\" d=\"M660 128 H740 V140\"></path>\n<rect class=\"bxa\" x=\"30\" y=\"140\" width=\"140\" height=\"102\" rx=\"6\"></rect><text class=\"dt db\" x=\"100\" y=\"157\" text-anchor=\"middle\">Predefinidos</text>\n<text class=\"ds\" x=\"100\" y=\"176\" text-anchor=\"middle\">Enter · Natural · Real</text><text class=\"ds\" x=\"100\" y=\"193\" text-anchor=\"middle\">Caràcter · Lògic</text><text class=\"ds\" x=\"100\" y=\"210\" text-anchor=\"middle\">Cadena (*)</text>\n<rect class=\"bxa\" x=\"230\" y=\"140\" width=\"140\" height=\"102\" rx=\"6\"></rect><text class=\"dt db\" x=\"300\" y=\"157\" text-anchor=\"middle\">Nuevos tipos</text><text class=\"ds\" x=\"300\" y=\"176\" text-anchor=\"middle\">definidos por el</text><text class=\"ds\" x=\"300\" y=\"193\" text-anchor=\"middle\">programador:</text><text class=\"ds\" x=\"300\" y=\"210\" text-anchor=\"middle\">Subrango · Enumerado</text>\n<rect class=\"bxw\" x=\"510\" y=\"140\" width=\"140\" height=\"60\" rx=\"6\"></rect><text class=\"dt db\" x=\"580\" y=\"160\" text-anchor=\"middle\">Homogéneos</text><text class=\"ds\" x=\"580\" y=\"180\" text-anchor=\"middle\">todos del mismo tipo</text>\n<rect class=\"bxw\" x=\"670\" y=\"140\" width=\"140\" height=\"60\" rx=\"6\"></rect><text class=\"dt db\" x=\"740\" y=\"160\" text-anchor=\"middle\">Heterogéneos</text><text class=\"ds\" x=\"740\" y=\"180\" text-anchor=\"middle\">de tipos distintos</text>\n<text class=\"ds\" x=\"660\" y=\"225\" text-anchor=\"middle\">(*) una cadena también se puede ver como una secuencia de caracteres</text>\n</svg></div>\n<figcaption>Clasificación de los tipos de datos del curso.</figcaption>\n</figure>"
    ]
   },
   {
    "t": "p",
    "x": [
     "Els **tipus elementals** guarden un sol valor en cada instant. La taula afegeix l'equivalent en C++ que fareu servir al laboratori:",
     "Los **tipos elementales** guardan un solo valor en cada instante. La tabla añade el equivalente en C++ que usaréis en el laboratorio:"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Tipus",
      "Tipo"
     ],
     [
      "Descripció i exemples",
      "Descripción y ejemplos"
     ],
     "Origen",
     "En C++"
    ],
    "rows": [
     [
      "**Enter**",
      [
       "Subconjunt dels enters: 10, −200, 1050",
       "Subconjunto de los enteros: 10, −200, 1050"
      ],
      [
       "Predefinit",
       "Predefinido"
      ],
      "`int`"
     ],
     [
      "**Natural**",
      [
       "Subconjunt dels enters positius: 24, 800",
       "Subconjunto de los enteros positivos: 24, 800"
      ],
      [
       "Predefinit",
       "Predefinido"
      ],
      "`int` (o `unsigned`)"
     ],
     [
      "**Real**",
      [
       "Subconjunt dels reals: 3,24; −705,65",
       "Subconjunto de los reales: 3,24; −705,65"
      ],
      [
       "Predefinit",
       "Predefinido"
      ],
      "`double`"
     ],
     [
      "**Caràcter**",
      [
       "Qualsevol caràcter d'un alfabet: 'A', '7', '?'",
       "Cualquier carácter de un alfabeto: 'A', '7', '?'"
      ],
      [
       "Predefinit",
       "Predefinido"
      ],
      "`char`"
     ],
     [
      "**Lògic**",
      [
       "Només dos valors: veritat o fals",
       "Solo dos valores: verdadero o falso"
      ],
      [
       "Predefinit",
       "Predefinido"
      ],
      "`bool` (`true`/`false`)"
     ],
     [
      "**Cadena**",
      [
       "Seqüència finita de caràcters: «hola amics»",
       "Secuencia finita de caracteres: «hola amigos»"
      ],
      [
       "Predefinit (\\*)",
       "Predefinido (\\*)"
      ],
      "`string`"
     ],
     [
      [
       "**Subrang**",
       "**Subrango**"
      ],
      [
       "Subconjunt de valors d'un tipus base: els mesos 1..12, les notes 0..10",
       "Subconjunto de valores de un tipo base: los meses 1..12, las notas 0..10"
      ],
      "Programador",
      "—"
     ],
     [
      [
       "**Enumeratiu**",
       "**Enumerado**"
      ],
      [
       "Es llisten tots els valors possibles, en ordre: {dl, dt, dc, dj, dv, ds, dg}",
       "Se listan todos los valores posibles, en orden: {lu, ma, mi, ju, vi, sa, do}"
      ],
      "Programador",
      "`enum`"
     ]
    ]
   },
   {
    "t": "tip",
    "title": [
     "Com triar el tipus",
     "Cómo elegir el tipo"
    ],
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Es pot **comptar** (persones, caixes, dorsals)? → **Enter** o **Natural**.",
        "¿Se puede **contar** (personas, cajas, dorsales)? → **Enter** o **Natural**."
       ],
       [
        "Es **mesura** i pot tenir decimals (preus, distàncies, mitjanes)? → **Real**.",
        "¿Se **mide** y puede tener decimales (precios, distancias, medias)? → **Real**."
       ],
       [
        "És una **resposta sí/no** (trobat, aprovat, és primer)? → **Lògic**.",
        "¿Es una **respuesta sí/no** (encontrado, aprobado, es primo)? → **Lògic**."
       ],
       [
        "És un **codi o un text** que no se suma (telèfon, DNI, nom)? → **Cadena**; si és una sola lletra (tipus A/B/C), **Caràcter**.",
        "¿Es un **código o un texto** que no se suma (teléfono, DNI, nombre)? → **Cadena**; si es una sola letra (tipo A/B/C), **Caràcter**."
       ]
      ]
     }
    ]
   }
  ],
  "t22-3": [
   {
    "t": "p",
    "x": [
     "Abans de començar l'algorisme es descriu l'**entorn**: l'identificador i el tipus de cada dada d'**entrada (E)** i de **sortida (S)**, i una descripció del que representa. Les dades auxiliars (ni E ni S) també s'hi declaren, sense marca.",
     "Antes de empezar el algoritmo se describe el **entorno**: el identificador y el tipo de cada dato de **entrada (E)** y de **salida (S)**, y una descripción de lo que representa. Los datos auxiliares (ni E ni S) también se declaran en él, sin marca."
    ]
   },
   {
    "t": "p",
    "x": [
     "Exemple: algorisme que determina el màxim de tres nombres. A la dreta, la mateixa declaració en C++:",
     "Ejemplo: algoritmo que determina el máximo de tres números. A la derecha, la misma declaración en C++:"
    ]
   },
   {
    "t": "cols",
    "cols": [
     [
      {
       "t": "table",
       "head": [
        "E/S",
        "Identificador",
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
         "N1",
         "Enter",
         "Primer número"
        ],
        [
         "E",
         "N2",
         "Enter",
         [
          "Segon número",
          "Segundo número"
         ]
        ],
        [
         "E",
         "N3",
         "Enter",
         "Tercer número"
        ],
        [
         "S",
         "Max",
         "Enter",
         [
          "Màxim dels tres números",
          "Máximo de los tres números"
         ]
        ]
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "cpp",
       "props": {
        "nonum": true
       },
       "src": [
        "int N1;    // E: primer número\nint N2;    // E: segon número\nint N3;    // E: tercer número\nint Max;   // S: màxim dels tres",
        "int N1;    // E: primer número\nint N2;    // E: segundo número\nint N3;    // E: tercer número\nint Max;   // S: máximo de los tres"
       ]
      }
     ]
    ]
   }
  ],
  "t22-4": [
   {
    "t": "p",
    "x": [
     "Amb les dades es poden fer quatre accions bàsiques:",
     "Con los datos se pueden hacer cuatro acciones básicas:"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Acció",
      "Acción"
     ],
     [
      "Pseudocodi",
      "Pseudocódigo"
     ],
     "C++"
    ],
    "rows": [
     [
      [
       "Entrada de dades",
       "Entrada de datos"
      ],
      "`Llegir X`",
      "`cin >> X;`"
     ],
     [
      [
       "Moviment de dades (assignació)",
       "Movimiento de datos (asignación)"
      ],
      "`X ← 5`",
      "`X = 5;`"
     ],
     [
      [
       "Càlculs aritmètics i lògics",
       "Cálculos aritméticos y lógicos"
      ],
      "`X ← A + B · 2`",
      "`X = A + B * 2;`"
     ],
     [
      [
       "Sortida de dades",
       "Salida de datos"
      ],
      "`Escriure X`",
      "`cout << X;`"
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Les operacions es representen amb símbols anomenats **operadors**; les dades que hi intervenen són els **operands**; i junts formen **expressions**. Al pseudocodi hi ha tres grups:",
     "Las operaciones se representan con símbolos llamados **operadores**; los datos que intervienen son los **operandos**; y juntos forman **expresiones**. En el pseudocódigo hay tres grupos:"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Grup",
      "Grupo"
     ],
     [
      "Operands",
      "Operandos"
     ],
     [
      "Resultat",
      "Resultado"
     ]
    ],
    "rows": [
     [
      [
       "Aritmètics",
       "Aritméticos"
      ],
      [
       "Numèrics (enter, real…)",
       "Numéricos (entero, real…)"
      ],
      [
       "Numèric",
       "Numérico"
      ]
     ],
     [
      [
       "Lògics",
       "Lógicos"
      ],
      [
       "Booleans",
       "Booleanos"
      ],
      [
       "Booleà",
       "Booleano"
      ]
     ],
     [
      [
       "Relacionals",
       "Relacionales"
      ],
      [
       "Qualsevol tipus amb ordre (enter, real, cadena…)",
       "Cualquier tipo con orden (entero, real, cadena…)"
      ],
      [
       "Booleà",
       "Booleano"
      ]
     ]
    ]
   },
   {
    "t": "h",
    "x": [
     "Operadors aritmètics",
     "Operadores aritméticos"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Operació",
      "Operación"
     ],
     [
      "Pseudocodi",
      "Pseudocódigo"
     ],
     "C++",
     [
      "Exemple amb a = 9, b = 5",
      "Ejemplo con a = 9, b = 5"
     ]
    ],
    "rows": [
     [
      "Suma",
      "`+`",
      "`+`",
      "a + b = 14"
     ],
     [
      "Resta",
      "`−`",
      "`-`",
      "a − b = 4"
     ],
     [
      [
       "Producte",
       "Producto"
      ],
      "`·`",
      "`*`",
      "a · b = 45"
     ],
     [
      [
       "Divisió",
       "División"
      ],
      "`/`",
      [
       "`/` (amb reals)",
       "`/` (con reales)"
      ],
      "9 / 5 = 1,8"
     ],
     [
      [
       "Quocient enter",
       "Cociente entero"
      ],
      "`‖` (o div)",
      [
       "`/` (amb enters)",
       "`/` (con enteros)"
      ],
      "9 ‖ 5 = 1"
     ],
     [
      [
       "Residu",
       "Resto"
      ],
      "`|R` (o mod)",
      "`%`",
      "9 |R 5 = 4"
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "El quocient enter i el residu són els de la divisió que fèieu a primària: **9 = 5 · 1 + 4**. Sempre es compleix **a = b · (a ‖ b) + (a |R b)**.",
     "El cociente entero y el resto son los de la división que hacíais en primaria: **9 = 5 · 1 + 4**. Siempre se cumple **a = b · (a ‖ b) + (a |R b)**."
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:520px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 150\" role=\"img\" aria-label=\"La divisió entera de tota la vida i els tres usos que sortiran contínuament (parells, xifres, repartiments).\">\n<text class=\"dm\" x=\"80\" y=\"45\" style=\"font-size:22px\">9</text><line class=\"ln\" x1=\"110\" y1=\"20\" x2=\"110\" y2=\"70\"></line><line class=\"ln\" x1=\"110\" y1=\"45\" x2=\"190\" y2=\"45\"></line>\n<text class=\"dm\" x=\"130\" y=\"36\" style=\"font-size:22px\">5</text><text class=\"dm ta\" x=\"130\" y=\"72\" style=\"font-size:22px;font-weight:700\">1</text>\n<text class=\"dm tq\" x=\"80\" y=\"100\" style=\"font-size:22px;font-weight:700\">4</text>\n<text class=\"ds\" x=\"215\" y=\"70\">← quocient enter: 9 ‖ 5 = 1</text>\n<text class=\"ds\" x=\"110\" y=\"104\">← residu: 9 |R 5 = 4</text>\n<rect class=\"bxg\" x=\"440\" y=\"20\" width=\"400\" height=\"110\" rx=\"6\"></rect>\n<text class=\"dt db\" x=\"460\" y=\"44\">Usos típics als problemes</text>\n<text class=\"dt\" x=\"460\" y=\"68\">n |R 2 = 0  →  n és parell</text>\n<text class=\"dt\" x=\"460\" y=\"90\">n |R 10  →  la darrera xifra de n</text>\n<text class=\"dt\" x=\"460\" y=\"112\">n ‖ 10  →  n sense la darrera xifra</text>\n</svg></div>\n<figcaption>La divisió entera de tota la vida i els tres usos que sortiran contínuament (parells, xifres, repartiments).</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:520px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 150\" role=\"img\" aria-label=\"La división entera de toda la vida y los tres usos que aparecerán continuamente (pares, cifras, repartos).\">\n<text class=\"dm\" x=\"80\" y=\"45\" style=\"font-size:22px\">9</text><line class=\"ln\" x1=\"110\" y1=\"20\" x2=\"110\" y2=\"70\"></line><line class=\"ln\" x1=\"110\" y1=\"45\" x2=\"190\" y2=\"45\"></line>\n<text class=\"dm\" x=\"130\" y=\"36\" style=\"font-size:22px\">5</text><text class=\"dm ta\" x=\"130\" y=\"72\" style=\"font-size:22px;font-weight:700\">1</text>\n<text class=\"dm tq\" x=\"80\" y=\"100\" style=\"font-size:22px;font-weight:700\">4</text>\n<text class=\"ds\" x=\"215\" y=\"70\">← cociente entero: 9 ‖ 5 = 1</text>\n<text class=\"ds\" x=\"110\" y=\"104\">← resto: 9 |R 5 = 4</text>\n<rect class=\"bxg\" x=\"440\" y=\"20\" width=\"400\" height=\"110\" rx=\"6\"></rect>\n<text class=\"dt db\" x=\"460\" y=\"44\">Usos típicos en los problemas</text>\n<text class=\"dt\" x=\"460\" y=\"68\">n |R 2 = 0  →  n es par</text>\n<text class=\"dt\" x=\"460\" y=\"90\">n |R 10  →  la última cifra de n</text>\n<text class=\"dt\" x=\"460\" y=\"112\">n ‖ 10  →  n sin la última cifra</text>\n</svg></div>\n<figcaption>La división entera de toda la vida y los tres usos que aparecerán continuamente (pares, cifras, repartos).</figcaption>\n</figure>"
    ]
   },
   {
    "t": "warn",
    "title": [
     "Amb nombres negatius, en C++",
     "Con números negativos, en C++"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "C++ trunca cap a zero: `-9 / 5` dona `-1` i `-9 % 5` dona `-4` (el residu té el signe del dividend). Si un exercici treballa amb negatius, aneu amb compte en comprovar si un nombre és senar: `n % 2 == 1` falla per a −3 (dona −1); feu servir `n % 2 != 0`.",
       "C++ trunca hacia cero: `-9 / 5` da `-1` y `-9 % 5` da `-4` (el resto tiene el signo del dividendo). Si un ejercicio trabaja con negativos, tened cuidado al comprobar si un número es impar: `n % 2 == 1` falla para −3 (da −1); usad `n % 2 != 0`."
      ]
     }
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
    "t": "table",
    "head": [
     [
      "Operació",
      "Operación"
     ],
     [
      "Pseudocodi",
      "Pseudocódigo"
     ],
     "C++",
     [
      "Es llegeix",
      "Se lee"
     ]
    ],
    "rows": [
     [
      [
       "I lògic",
       "Y lógico"
      ],
      "`a I b`",
      "`a && b`",
      [
       "cert només si **tots dos** són certs",
       "cierto solo si **ambos** son ciertos"
      ]
     ],
     [
      [
       "O lògic",
       "O lógico"
      ],
      "`a O b`",
      "`a || b`",
      [
       "cert si **almenys un** és cert",
       "cierto si **al menos uno** es cierto"
      ]
     ],
     [
      [
       "Negació",
       "Negación"
      ],
      "`NO a`",
      "`!a`",
      [
       "el contrari",
       "lo contrario"
      ]
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Taules de la veritat (V = veritat, F = fals):",
     "Tablas de verdad (V = verdadero, F = falso):"
    ]
   },
   {
    "t": "html",
    "h": "<div class=\"ip-tw\"><table>\n<thead><tr><th class=\"c\">a</th><th class=\"c\">b</th><th class=\"c\">a I b</th><th class=\"c\">a O b</th><th class=\"c\">NO a</th></tr></thead>\n<tbody>\n<tr><td class=\"c ip-v\">V</td><td class=\"c ip-v\">V</td><td class=\"c ip-v\">V</td><td class=\"c ip-v\">V</td><td class=\"c ip-f\">F</td></tr>\n<tr><td class=\"c ip-v\">V</td><td class=\"c ip-f\">F</td><td class=\"c ip-f\">F</td><td class=\"c ip-v\">V</td><td class=\"c ip-f\">F</td></tr>\n<tr><td class=\"c ip-f\">F</td><td class=\"c ip-v\">V</td><td class=\"c ip-f\">F</td><td class=\"c ip-v\">V</td><td class=\"c ip-v\">V</td></tr>\n<tr><td class=\"c ip-f\">F</td><td class=\"c ip-f\">F</td><td class=\"c ip-f\">F</td><td class=\"c ip-f\">F</td><td class=\"c ip-v\">V</td></tr>\n</tbody>\n</table></div>"
   },
   {
    "t": "p",
    "x": [
     "Exemple: per entrar a l'activitat cal **tenir 18 anys I haver pagat**; té descompte qui **és estudiant O és jubilat**. Amb el I n'hi ha prou que una part falli perquè tot sigui fals; amb el O n'hi ha prou que una part sigui certa.",
     "Ejemplo: para entrar en la actividad hay que **tener 18 años Y haber pagado**; tiene descuento quien **es estudiante O está jubilado**. Con I basta con que falle una parte para que todo sea falso; con O basta con que una parte sea cierta."
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
    "t": "table",
    "head": [
     [
      "Operació",
      "Operación"
     ],
     [
      "Pseudocodi",
      "Pseudocódigo"
     ],
     "C++"
    ],
    "rows": [
     [
      "Igual a",
      "`a = b`",
      "`a == b`"
     ],
     [
      "Menor que",
      "`a < b`",
      "`a < b`"
     ],
     [
      [
       "Major que",
       "Mayor que"
      ],
      "`a > b`",
      "`a > b`"
     ],
     [
      "Menor o igual que",
      "`a ≤ b`",
      "`a <= b`"
     ],
     [
      [
       "Major o igual que",
       "Mayor o igual que"
      ],
      "`a ≥ b`",
      "`a >= b`"
     ],
     [
      [
       "Diferent de",
       "Distinto de"
      ],
      "`a ≠ b`",
      "`a != b`"
     ]
    ]
   },
   {
    "t": "warn",
    "title": [
     "La confusió més cara del curs",
     "La confusión más cara del curso"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Al pseudocodi, `=` és comparar i `←` és assignar. En C++, `==` és comparar i `=` és assignar. Escriure `if (x = 5)` en C++ no compara: **assigna** 5 a x i la condició sempre és certa.",
       "En el pseudocódigo, `=` es comparar y `←` es asignar. En C++, `==` es comparar y `=` es asignar. Escribir `if (x = 5)` en C++ no compara: **asigna** 5 a x y la condición siempre es cierta."
      ]
     }
    ]
   }
  ],
  "t22-5": [
   {
    "t": "p",
    "x": [
     "Una **expressió** és una seqüència sintàcticament correcta d'operands i operadors. Ha de respectar el tipus dels operands i el nombre d'operands de cada operador (la seva **aritat**: el NO en té un, la suma en té dos).",
     "Una **expresión** es una secuencia sintácticamente correcta de operandos y operadores. Debe respetar el tipo de los operandos y el número de operandos de cada operador (su **aridad**: NO tiene uno, la suma tiene dos)."
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "Segons el resultat, hi ha **expressions numèriques** (donen un nombre) i **expressions booleanes** (donen V o F).",
      "Según el resultado, hay **expresiones numéricas** (dan un número) y **expresiones booleanas** (dan V o F)."
     ],
     [
      "Per calcular-les, els operadors s'avaluen en un ordre de **prioritat** (precedència).",
      "Para calcularlas, los operadores se evalúan en un orden de **prioridad** (precedencia)."
     ]
    ]
   },
   {
    "t": "h",
    "x": [
     "Les prioritats",
     "Las prioridades"
    ]
   },
   {
    "t": "p",
    "x": [
     "Amb un ordre de prioritats fix, una expressió només es pot interpretar d'una manera. Si en volem un altre, posem **parèntesis** (i també es poden posar només per fer-la més clara).",
     "Con un orden de prioridades fijo, una expresión solo se puede interpretar de una manera. Si queremos otro, ponemos **paréntesis** (que también se pueden poner solo para hacerla más clara)."
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Prioritat (de major a menor)",
      "Prioridad (de mayor a menor)"
     ],
     [
      "Operadors del pseudocodi",
      "Operadores del pseudocódigo"
     ]
    ],
    "rows": [
     [
      [
       "**1a** (més alta)",
       "**1.ª** (más alta)"
      ],
      [
       "Negació (NO)",
       "Negación (NO)"
      ]
     ],
     [
      [
       "**2a**",
       "**2.ª**"
      ],
      [
       "Producte, divisió, quocient enter, residu, **I lògic**",
       "Producto, división, cociente entero, resto, **Y lógico (I)**"
      ]
     ],
     [
      [
       "**3a**",
       "**3.ª**"
      ],
      [
       "Suma, resta, **O lògic**",
       "Suma, resta, **O lógico (O)**"
      ]
     ],
     [
      [
       "**4a** (més baixa)",
       "**4.ª** (más baja)"
      ],
      [
       "Tots els relacionals (=, <, >, ≤, ≥, ≠)",
       "Todos los relacionales (=, <, >, ≤, ≥, ≠)"
      ]
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Si dos operadors tenen la mateixa prioritat, s'avaluen d'**esquerra a dreta**.",
     "Si dos operadores tienen la misma prioridad, se evalúan de **izquierda a derecha**."
    ]
   },
   {
    "t": "h",
    "x": [
     "Pas a pas: dues expressions",
     "Paso a paso: dos expresiones"
    ]
   },
   {
    "t": "p",
    "x": [
     "**Expressió numèrica** amb `k = 7`, `a = 9`, `b = 5`: `k + a ‖ b`",
     "**Expresión numérica** con `k = 7`, `a = 9`, `b = 5`: `k + a ‖ b`"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "`‖` (2a prioritat) va abans que `+` (3a): l'expressió equival a `k + (a ‖ b)`.",
      "`‖` (2.ª prioridad) va antes que `+` (3.ª): la expresión equivale a `k + (a ‖ b)`."
     ],
     "`a ‖ b` = `9 ‖ 5` = **1**.",
     "`k + 1` = `7 + 1` = **8**."
    ],
    "ordered": true
   },
   {
    "t": "p",
    "x": [
     "**Expressió booleana** amb `a = 3`, `b = 8`, `c = 'x'`, `d = 'x'`, `e = V`: `(a < b) I (c = d) O NO e`",
     "**Expresión booleana** con `a = 3`, `b = 8`, `c = 'x'`, `d = 'x'`, `e = V`: `(a < b) I (c = d) O NO e`"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "Els parèntesis primer: `(3 < 8)` = V i `('x' = 'x')` = V.",
      "Primero los paréntesis: `(3 < 8)` = V y `('x' = 'x')` = V."
     ],
     [
      "`NO e` (1a prioritat) = `NO V` = **F**.",
      "`NO e` (1.ª prioridad) = `NO V` = **F**."
     ],
     [
      "`I` (2a) abans que `O` (3a): `V I V` = **V**.",
      "`I` (2.ª) antes que `O` (3.ª): `V I V` = **V**."
     ],
     [
      "`V O F` = **V**. Equival a `((a < b) I (c = d)) O (NO e)`.",
      "`V O F` = **V**. Equivale a `((a < b) I (c = d)) O (NO e)`."
     ]
    ],
    "ordered": true
   },
   {
    "t": "warn",
    "title": [
     "Per què cal posar parèntesis a les comparacions",
     "Por qué hay que poner paréntesis en las comparaciones"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "A la taula del curs, **I** i **O** tenen **més** prioritat que els relacionals. Per tant, `a < b I c = d` sense parèntesis vol dir `a < (b I c) = d`, i `b I c` no té sentit amb nombres: és un error de tipus. Per això, al pseudocodi **cada comparació va entre parèntesis**: `(a < b) I (c = d)`.",
       "En la tabla del curso, **I** y **O** tienen **más** prioridad que los relacionales. Por tanto, `a < b I c = d` sin paréntesis quiere decir `a < (b I c) = d`, y `b I c` no tiene sentido con números: es un error de tipo. Por eso, en el pseudocódigo **cada comparación va entre paréntesis**: `(a < b) I (c = d)`."
      ]
     },
     {
      "t": "p",
      "x": [
       "En C++ l'ordre és diferent (els relacionals van abans que `&&` i `||`), però posar els parèntesis igualment no fa mal i evita confusions.",
       "En C++ el orden es distinto (los relacionales van antes que `&&` y `||`), pero poner los paréntesis igualmente no hace daño y evita confusiones."
      ]
     }
    ]
   },
   {
    "t": "p",
    "x": [
     "Proveu-ho al laboratori: escriviu una expressió amb les variables i mireu com la llegeix el curs i en quin ordre s'avalua. Proveu `a < b I c = d` i després `(a < b) I (c = d)`.",
     "Probadlo en el laboratorio: escribid una expresión con las variables y mirad cómo la lee el curso y en qué orden se evalúa. Probad `a < b I c = d` y después `(a < b) I (c = d)`."
    ]
   },
   {
    "t": "lab",
    "id": "expr",
    "props": {
     "expr": "k + a ‖ b",
     "vars": "k=7,a=9,b=5,c=5,d=9"
    }
   }
  ],
  "t22-6": [
   {
    "t": "p",
    "x": [
     "Un algorisme és un mètode **general**: ha de funcionar per a totes les dades d'entrada vàlides. Abans de dissenyar-lo cal saber exactament el seu objectiu:",
     "Un algoritmo es un método **general**: debe funcionar para todos los datos de entrada válidos. Antes de diseñarlo hay que saber exactamente su objetivo:"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "La situació de partida: l'**estat inicial**, una relació que compleixen les dades d'entrada.",
      "La situación de partida: el **estado inicial**, una relación que cumplen los datos de entrada."
     ],
     [
      "La situació a què volem arribar: l'**estat final**, la relació entre les dades d'entrada i les de sortida quan l'algorisme acaba.",
      "La situación a la que queremos llegar: el **estado final**, la relación entre los datos de entrada y los de salida cuando el algoritmo termina."
     ]
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 170\" role=\"img\" aria-label=\"L&#x27;algorisme porta les dades de l&#x27;estat inicial a l&#x27;estat final (objectiu) passant per estats intermedis.\">\n<rect class=\"bxq\" x=\"20\" y=\"40\" width=\"210\" height=\"80\" rx=\"8\"></rect><text class=\"dt db\" x=\"125\" y=\"64\" text-anchor=\"middle\">Estat inicial</text><text class=\"dm\" x=\"125\" y=\"88\" text-anchor=\"middle\">{Base ≥ 0 i Altura ≥ 0}</text><text class=\"ds\" x=\"125\" y=\"108\" text-anchor=\"middle\">dades d'entrada</text>\n<path class=\"ln\" d=\"M230 80 H268\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"275\" y=\"20\" width=\"310\" height=\"120\" rx=\"8\"></rect><text class=\"dt db\" x=\"430\" y=\"44\" text-anchor=\"middle\">ALGORISME</text>\n<text class=\"ds\" x=\"430\" y=\"66\" text-anchor=\"middle\">les accions transformen les dades</text>\n<text class=\"ds\" x=\"430\" y=\"84\" text-anchor=\"middle\">pas a pas, passant per estats intermedis</text>\n<circle cx=\"350\" cy=\"112\" r=\"6\" class=\"fa\"></circle><circle cx=\"410\" cy=\"112\" r=\"6\" class=\"fa\"></circle><circle cx=\"470\" cy=\"112\" r=\"6\" class=\"fa\"></circle><circle cx=\"510\" cy=\"112\" r=\"6\" class=\"fa\"></circle>\n<path class=\"lna\" d=\"M356 112 H402\" marker-end=\"url(#aha)\"></path><path class=\"lna\" d=\"M416 112 H462\" marker-end=\"url(#aha)\"></path><path class=\"lna\" d=\"M476 112 H502\" marker-end=\"url(#aha)\"></path>\n<path class=\"ln\" d=\"M585 80 H623\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"630\" y=\"40\" width=\"210\" height=\"80\" rx=\"8\"></rect><text class=\"dt db\" x=\"735\" y=\"64\" text-anchor=\"middle\">Estat final</text><text class=\"dm\" x=\"735\" y=\"88\" text-anchor=\"middle\">{Àrea = Base · Altura}</text><text class=\"ds\" x=\"735\" y=\"108\" text-anchor=\"middle\">dades de sortida</text>\n</svg></div>\n<figcaption>L'algorisme porta les dades de l'estat inicial a l'estat final (objectiu) passant per estats intermedis.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 170\" role=\"img\" aria-label=\"El algoritmo lleva los datos del estado inicial al estado final (objetivo) pasando por estados intermedios.\">\n<rect class=\"bxq\" x=\"20\" y=\"40\" width=\"210\" height=\"80\" rx=\"8\"></rect><text class=\"dt db\" x=\"125\" y=\"64\" text-anchor=\"middle\">Estado inicial</text><text class=\"dm\" x=\"125\" y=\"88\" text-anchor=\"middle\">{Base ≥ 0 y Altura ≥ 0}</text><text class=\"ds\" x=\"125\" y=\"108\" text-anchor=\"middle\">datos de entrada</text>\n<path class=\"ln\" d=\"M230 80 H268\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"275\" y=\"20\" width=\"310\" height=\"120\" rx=\"8\"></rect><text class=\"dt db\" x=\"430\" y=\"44\" text-anchor=\"middle\">ALGORITMO</text>\n<text class=\"ds\" x=\"430\" y=\"66\" text-anchor=\"middle\">las acciones transforman los datos</text>\n<text class=\"ds\" x=\"430\" y=\"84\" text-anchor=\"middle\">paso a paso, por estados intermedios</text>\n<circle cx=\"350\" cy=\"112\" r=\"6\" class=\"fa\"></circle><circle cx=\"410\" cy=\"112\" r=\"6\" class=\"fa\"></circle><circle cx=\"470\" cy=\"112\" r=\"6\" class=\"fa\"></circle><circle cx=\"510\" cy=\"112\" r=\"6\" class=\"fa\"></circle>\n<path class=\"lna\" d=\"M356 112 H402\" marker-end=\"url(#aha)\"></path><path class=\"lna\" d=\"M416 112 H462\" marker-end=\"url(#aha)\"></path><path class=\"lna\" d=\"M476 112 H502\" marker-end=\"url(#aha)\"></path>\n<path class=\"ln\" d=\"M585 80 H623\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"630\" y=\"40\" width=\"210\" height=\"80\" rx=\"8\"></rect><text class=\"dt db\" x=\"735\" y=\"64\" text-anchor=\"middle\">Estado final</text><text class=\"dm\" x=\"735\" y=\"88\" text-anchor=\"middle\">{Área = Base · Altura}</text><text class=\"ds\" x=\"735\" y=\"108\" text-anchor=\"middle\">datos de salida</text>\n</svg></div>\n<figcaption>El algoritmo lleva los datos del estado inicial al estado final (objetivo) pasando por estados intermedios.</figcaption>\n</figure>"
    ]
   },
   {
    "t": "p",
    "x": [
     "Els estats s'escriuen entre claus amb un llenguatge formal (basat en el càlcul de predicats que veureu a Lògica). L'intèrpret de pseudocodi els tracta com a comentaris, però escriure'ls és un bon hàbit: obliguen a pensar què ha de ser cert abans i després.",
     "Los estados se escriben entre llaves con un lenguaje formal (basado en el cálculo de predicados que veréis en Lógica). El intérprete de pseudocódigo los trata como comentarios, pero escribirlos es un buen hábito: obligan a pensar qué debe ser cierto antes y después."
    ]
   }
  ],
  "t22-7": [
   {
    "t": "p",
    "x": [
     "Un algorisme té tres parts:",
     "Un algoritmo tiene tres partes:"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "**NOU TIPUS**: tipus definits pel programador (es veuran més endavant).",
      "**NOU TIPUS**: tipos definidos por el programador (se verán más adelante)."
     ],
     [
      "**ENTORN**: declaració de les variables i constants.",
      "**ENTORN**: declaración de las variables y constantes."
     ],
     [
      "**INICI_SEQÜÈNCIA … FI_SEQÜÈNCIA**: les accions, organitzades amb estructures de control.",
      "**INICI_SEQÜÈNCIA … FI_SEQÜÈNCIA**: las acciones, organizadas con estructuras de control."
     ]
    ],
    "ordered": true
   },
   {
    "t": "p",
    "x": [
     "**Exemple II.** Màxim de tres nombres naturals. Feu **Traça pas a pas** i fixeu-vos com `Max` va canviant: comença valent N1 i només canvia quan apareix un valor més gran.",
     "**Ejemplo II.** Máximo de tres números naturales. Pulsad **Traza paso a paso** y fijaos en cómo `Max` va cambiando: empieza valiendo N1 y solo cambia cuando aparece un valor mayor."
    ]
   },
   {
    "t": "code",
    "lang": "ps",
    "props": {
     "run": true,
     "trace": true,
     "in": "4 9 7"
    },
    "src": [
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N1            Natural   Primer número\n   E      N2            Natural   Segon número\n   E      N3            Natural   Tercer número\n   S      Max           Natural   Màxim dels tres números\n\nINICI_SEQÜÈNCIA\n    Llegir N1, N2, N3\n    {N1 ≥ 0 i N2 ≥ 0 i N3 ≥ 0}\n    Max ← N1\n    SI N2 > Max LLAVORS\n        Max ← N2\n    FI_SI\n    SI N3 > Max LLAVORS\n        Max ← N3\n    FI_SI\n    {Max = màxim(N1, N2, N3)}\n    Escriure \"El màxim és \", Max\nFI_SEQÜÈNCIA",
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N1            Natural   Primer número\n   E      N2            Natural   Segundo número\n   E      N3            Natural   Tercer número\n   S      Max           Natural   Máximo de los tres números\n\nINICI_SEQÜÈNCIA\n    Llegir N1, N2, N3\n    {N1 ≥ 0 y N2 ≥ 0 y N3 ≥ 0}\n    Max ← N1\n    SI N2 > Max LLAVORS\n        Max ← N2\n    FI_SI\n    SI N3 > Max LLAVORS\n        Max ← N3\n    FI_SI\n    {Max = máximo(N1, N2, N3)}\n    Escriure \"El màxim és \", Max\nFI_SEQÜÈNCIA"
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Traça amb N1 = 4, N2 = 9, N3 = 7 (cada fila és l'estat després de la línia).</caption>\n<thead><tr><th>Línia</th><th class=\"c\">N1</th><th class=\"c\">N2</th><th class=\"c\">N3</th><th class=\"c\">Max</th><th>Comentari</th></tr></thead>\n<tbody>\n<tr><td>Llegir N1, N2, N3</td><td class=\"c\">4</td><td class=\"c\">9</td><td class=\"c\">7</td><td class=\"c\">?</td><td>Max encara no té valor</td></tr>\n<tr><td>Max ← N1</td><td class=\"c\">4</td><td class=\"c\">9</td><td class=\"c\">7</td><td class=\"c hl\">4</td><td>hipòtesi: el primer és el màxim</td></tr>\n<tr><td>SI N2 > Max</td><td class=\"c\">4</td><td class=\"c\">9</td><td class=\"c\">7</td><td class=\"c\">4</td><td>9 &gt; 4 és V: entra</td></tr>\n<tr><td>Max ← N2</td><td class=\"c\">4</td><td class=\"c\">9</td><td class=\"c\">7</td><td class=\"c hl\">9</td><td></td></tr>\n<tr><td>SI N3 > Max</td><td class=\"c\">4</td><td class=\"c\">9</td><td class=\"c\">7</td><td class=\"c\">9</td><td>7 &gt; 9 és F: no entra</td></tr>\n<tr><td>Escriure</td><td class=\"c\">4</td><td class=\"c\">9</td><td class=\"c\">7</td><td class=\"c\">9</td><td>«El màxim és 9»</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Traza con N1 = 4, N2 = 9, N3 = 7 (cada fila es el estado después de la línea).</caption>\n<thead><tr><th>Línea</th><th class=\"c\">N1</th><th class=\"c\">N2</th><th class=\"c\">N3</th><th class=\"c\">Max</th><th>Comentario</th></tr></thead>\n<tbody>\n<tr><td>Llegir N1, N2, N3</td><td class=\"c\">4</td><td class=\"c\">9</td><td class=\"c\">7</td><td class=\"c\">?</td><td>Max todavía no tiene valor</td></tr>\n<tr><td>Max ← N1</td><td class=\"c\">4</td><td class=\"c\">9</td><td class=\"c\">7</td><td class=\"c hl\">4</td><td>hipótesis: el primero es el máximo</td></tr>\n<tr><td>SI N2 > Max</td><td class=\"c\">4</td><td class=\"c\">9</td><td class=\"c\">7</td><td class=\"c\">4</td><td>9 &gt; 4 es V: entra</td></tr>\n<tr><td>Max ← N2</td><td class=\"c\">4</td><td class=\"c\">9</td><td class=\"c\">7</td><td class=\"c hl\">9</td><td></td></tr>\n<tr><td>SI N3 > Max</td><td class=\"c\">4</td><td class=\"c\">9</td><td class=\"c\">7</td><td class=\"c\">9</td><td>7 &gt; 9 es F: no entra</td></tr>\n<tr><td>Escriure</td><td class=\"c\">4</td><td class=\"c\">9</td><td class=\"c\">7</td><td class=\"c\">9</td><td>«El màxim és 9»</td></tr>\n</tbody>\n</table></div>"
    ]
   }
  ],
  "t22-8": [
   {
    "t": "p",
    "x": [
     "El **disseny estructurat** fa servir **només tres estructures de control** (composicions algorísmiques) per descriure qualsevol algorisme:",
     "El **diseño estructurado** utiliza **solo tres estructuras de control** (composiciones algorítmicas) para describir cualquier algoritmo:"
    ]
   },
   {
    "t": "table",
    "head": [
     "Esquema",
     [
      "Estructura bàsica",
      "Estructura básica"
     ],
     [
      "Variants",
      "Variantes"
     ]
    ],
    "rows": [
     [
      [
       "Composició seqüencial",
       "Composición secuencial"
      ],
      [
       "Seqüencial",
       "Secuencial"
      ],
      "—"
     ],
     [
      [
       "Composició alternativa",
       "Composición alternativa"
      ],
      "Condicional",
      "Simple · doble · alternativa múltiple"
     ],
     [
      [
       "Composició iterativa",
       "Composición iterativa"
      ],
      "Iterativa (bucles)",
      [
       "Condició inicial (MENTRE) · condició final (REPETEIX) · nombre fix de repeticions (DES_DE)",
       "Condición inicial (MENTRE) · condición final (REPETEIX) · número fijo de repeticiones (DES_DE)"
      ]
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Combinant-les bé es pot escriure **qualsevol programa**. Un llenguatge és **estructurat** si les té, i un programa és estructurat si **només** fa servir aquestes tres composicions.",
     "Combinándolas bien se puede escribir **cualquier programa**. Un lenguaje es **estructurado** si las tiene, y un programa es estructurado si **solo** utiliza estas tres composiciones."
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:760px\"><div class=\"ip-figb\"><svg viewBox=\"0 0 990 330\" aria-label=\"Ordinogrames de la composició seqüencial i de les alternatives\" role=\"img\"><text class=\"dt db\" x=\"90\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">Seqüencial</text><text class=\"dt db\" x=\"290\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">Condicional simple</text><text class=\"dt db\" x=\"545\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">Condicional doble</text><text class=\"dt db\" x=\"845\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">Alternativa múltiple</text><rect class=\"bx\" x=\"25\" y=\"55\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"90\" y=\"70\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_1</text><path class=\"ln\" d=\"M90 85 L90 113\" marker-end=\"url(#ah)\"></path><rect class=\"bx\" x=\"25\" y=\"113\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"90\" y=\"128\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_2</text><path class=\"ln\" d=\"M90 143 L90 171\" marker-end=\"url(#ah)\"></path><text class=\"dt db\" x=\"90\" y=\"182\" text-anchor=\"middle\" dominant-baseline=\"central\">…</text><path class=\"ln\" d=\"M90 193 L90 221\" marker-end=\"url(#ah)\"></path><rect class=\"bx\" x=\"25\" y=\"221\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"90\" y=\"236\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_N</text><text class=\"ds\" x=\"90\" y=\"280\" text-anchor=\"middle\" dominant-baseline=\"central\">de dalt a baix</text><rect class=\"bx\" x=\"230\" y=\"37\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"290\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_A</text><path class=\"ln\" d=\"M290 67 L290 92\" marker-end=\"url(#ah)\"></path><path class=\"bxa\" d=\"M290 93L355 122L290 151L225 122Z\"></path><text class=\"dt\" x=\"290\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\">condició</text><path class=\"ln\" d=\"M290 151 L290 185\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"280\" y=\"168\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bxo\" x=\"225\" y=\"185\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"290\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"central\">accions del bloc</text><path class=\"ln\" d=\"M290 215 L290 252\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M355 122 L370 122 L370 238\"></path><path class=\"ln\" d=\"M370 238 L294 238\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"362\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><circle cx=\"290\" cy=\"238\" r=\"3\" class=\"fk\"></circle><rect class=\"bx\" x=\"230\" y=\"252\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"290\" y=\"267\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_B</text><rect class=\"bx\" x=\"485\" y=\"37\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"545\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_A</text><path class=\"ln\" d=\"M545 67 L545 92\" marker-end=\"url(#ah)\"></path><path class=\"bxa\" d=\"M545 93L610 122L545 151L480 122Z\"></path><text class=\"dt\" x=\"545\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\">condició</text><path class=\"ln\" d=\"M480 122 L470 122\"></path><path class=\"ln\" d=\"M470 122 L470 182\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"473\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"central\">V</text><path class=\"ln\" d=\"M610 122 L620 122\"></path><path class=\"ln\" d=\"M620 122 L620 182\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"617\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><rect class=\"bxo\" x=\"408\" y=\"182\" width=\"124\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"470\" y=\"197\" text-anchor=\"middle\" dominant-baseline=\"central\">accions si és V</text><rect class=\"bxw\" x=\"558\" y=\"182\" width=\"124\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"620\" y=\"197\" text-anchor=\"middle\" dominant-baseline=\"central\">accions si és F</text><path class=\"ln\" d=\"M470 212 L470 238 L541 238\"></path><path class=\"ln\" d=\"M620 212 L620 238 L549 238\"></path><circle cx=\"545\" cy=\"238\" r=\"3\" class=\"fk\"></circle><path class=\"ln\" d=\"M545 238 L545 252\" marker-end=\"url(#ah)\"></path><rect class=\"bx\" x=\"485\" y=\"252\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"545\" y=\"267\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_B</text><rect class=\"bx\" x=\"785\" y=\"37\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"845\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_A</text><path class=\"ln\" d=\"M845 67 L845 90\" marker-end=\"url(#ah)\"></path><path class=\"bxa\" d=\"M845 90L910 115L845 140L780 115Z\"></path><text class=\"dt\" x=\"845\" y=\"115\" text-anchor=\"middle\" dominant-baseline=\"central\">variable</text><path class=\"ln\" d=\"M845 140 L845 150\"></path><path class=\"ln\" d=\"M740 150 L950 150\"></path><path class=\"ln\" d=\"M740 150 L740 196\" marker-end=\"url(#ah)\"></path><rect x=\"707\" y=\"164\" width=\"66\" height=\"16\" fill=\"#fff\"></rect><text class=\"ds\" x=\"740\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\">Valor 1</text><rect class=\"bxo\" x=\"709\" y=\"196\" width=\"62\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"740\" y=\"211\" text-anchor=\"middle\" dominant-baseline=\"central\">ACC_A</text><path class=\"ln\" d=\"M740 226 L740 246\"></path><path class=\"ln\" d=\"M810 150 L810 196\" marker-end=\"url(#ah)\"></path><rect x=\"777\" y=\"164\" width=\"66\" height=\"16\" fill=\"#fff\"></rect><text class=\"ds\" x=\"810\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\">Valor 2</text><rect class=\"bxo\" x=\"779\" y=\"196\" width=\"62\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"810\" y=\"211\" text-anchor=\"middle\" dominant-baseline=\"central\">ACC_B</text><path class=\"ln\" d=\"M810 226 L810 246\"></path><path class=\"ln\" d=\"M880 150 L880 196\" marker-end=\"url(#ah)\"></path><rect x=\"847\" y=\"164\" width=\"66\" height=\"16\" fill=\"#fff\"></rect><text class=\"ds\" x=\"880\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\">Valor N</text><rect class=\"bxo\" x=\"849\" y=\"196\" width=\"62\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"880\" y=\"211\" text-anchor=\"middle\" dominant-baseline=\"central\">ACC_N</text><path class=\"ln\" d=\"M880 226 L880 246\"></path><path class=\"ln\" d=\"M950 150 L950 196\" marker-end=\"url(#ah)\"></path><rect x=\"917\" y=\"164\" width=\"66\" height=\"16\" fill=\"#fff\"></rect><text class=\"ds\" x=\"950\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\">ALTRAMENT</text><rect class=\"bxw\" x=\"919\" y=\"196\" width=\"62\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"950\" y=\"211\" text-anchor=\"middle\" dominant-baseline=\"central\">ACC_Z</text><path class=\"ln\" d=\"M950 226 L950 246\"></path><path class=\"ln\" d=\"M740 246 L950 246\"></path><circle cx=\"845\" cy=\"246\" r=\"3\" class=\"fk\"></circle><path class=\"ln\" d=\"M845 246 L845 262\" marker-end=\"url(#ah)\"></path><rect class=\"bx\" x=\"785\" y=\"262\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"845\" y=\"277\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_B</text><text class=\"ds\" x=\"845\" y=\"312\" text-anchor=\"middle\" dominant-baseline=\"central\">un sol camí: el primer valor que coincideix</text><path class=\"lnd\" d=\"M175 30 L175 320\"></path><path class=\"lnd\" d=\"M400 30 L400 320\"></path><path class=\"lnd\" d=\"M700 30 L700 320\"></path></svg></div><figcaption>Ordinogrames: seqüència, condicional simple, condicional doble i alternativa múltiple.</figcaption></figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:760px\"><div class=\"ip-figb\"><svg viewBox=\"0 0 990 330\" aria-label=\"Diagramas de flujo de la composición secuencial y de las alternativas\" role=\"img\"><text class=\"dt db\" x=\"90\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">Secuencial</text><text class=\"dt db\" x=\"290\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">Condicional simple</text><text class=\"dt db\" x=\"545\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">Condicional doble</text><text class=\"dt db\" x=\"845\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">Alternativa múltiple</text><rect class=\"bx\" x=\"25\" y=\"55\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"90\" y=\"70\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_1</text><path class=\"ln\" d=\"M90 85 L90 113\" marker-end=\"url(#ah)\"></path><rect class=\"bx\" x=\"25\" y=\"113\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"90\" y=\"128\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_2</text><path class=\"ln\" d=\"M90 143 L90 171\" marker-end=\"url(#ah)\"></path><text class=\"dt db\" x=\"90\" y=\"182\" text-anchor=\"middle\" dominant-baseline=\"central\">…</text><path class=\"ln\" d=\"M90 193 L90 221\" marker-end=\"url(#ah)\"></path><rect class=\"bx\" x=\"25\" y=\"221\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"90\" y=\"236\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_N</text><text class=\"ds\" x=\"90\" y=\"280\" text-anchor=\"middle\" dominant-baseline=\"central\">de arriba abajo</text><rect class=\"bx\" x=\"230\" y=\"37\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"290\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_A</text><path class=\"ln\" d=\"M290 67 L290 92\" marker-end=\"url(#ah)\"></path><path class=\"bxa\" d=\"M290 93L355 122L290 151L225 122Z\"></path><text class=\"dt\" x=\"290\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\">condición</text><path class=\"ln\" d=\"M290 151 L290 185\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"280\" y=\"168\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bxo\" x=\"225\" y=\"185\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"290\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"central\">acciones del bloque</text><path class=\"ln\" d=\"M290 215 L290 252\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M355 122 L370 122 L370 238\"></path><path class=\"ln\" d=\"M370 238 L294 238\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"362\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><circle cx=\"290\" cy=\"238\" r=\"3\" class=\"fk\"></circle><rect class=\"bx\" x=\"230\" y=\"252\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"290\" y=\"267\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_B</text><rect class=\"bx\" x=\"485\" y=\"37\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"545\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_A</text><path class=\"ln\" d=\"M545 67 L545 92\" marker-end=\"url(#ah)\"></path><path class=\"bxa\" d=\"M545 93L610 122L545 151L480 122Z\"></path><text class=\"dt\" x=\"545\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\">condición</text><path class=\"ln\" d=\"M480 122 L470 122\"></path><path class=\"ln\" d=\"M470 122 L470 182\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"473\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"central\">V</text><path class=\"ln\" d=\"M610 122 L620 122\"></path><path class=\"ln\" d=\"M620 122 L620 182\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"617\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><rect class=\"bxo\" x=\"408\" y=\"182\" width=\"124\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"470\" y=\"197\" text-anchor=\"middle\" dominant-baseline=\"central\">acciones si es V</text><rect class=\"bxw\" x=\"558\" y=\"182\" width=\"124\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"620\" y=\"197\" text-anchor=\"middle\" dominant-baseline=\"central\">acciones si es F</text><path class=\"ln\" d=\"M470 212 L470 238 L541 238\"></path><path class=\"ln\" d=\"M620 212 L620 238 L549 238\"></path><circle cx=\"545\" cy=\"238\" r=\"3\" class=\"fk\"></circle><path class=\"ln\" d=\"M545 238 L545 252\" marker-end=\"url(#ah)\"></path><rect class=\"bx\" x=\"485\" y=\"252\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"545\" y=\"267\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_B</text><rect class=\"bx\" x=\"785\" y=\"37\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"845\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_A</text><path class=\"ln\" d=\"M845 67 L845 90\" marker-end=\"url(#ah)\"></path><path class=\"bxa\" d=\"M845 90L910 115L845 140L780 115Z\"></path><text class=\"dt\" x=\"845\" y=\"115\" text-anchor=\"middle\" dominant-baseline=\"central\">variable</text><path class=\"ln\" d=\"M845 140 L845 150\"></path><path class=\"ln\" d=\"M740 150 L950 150\"></path><path class=\"ln\" d=\"M740 150 L740 196\" marker-end=\"url(#ah)\"></path><rect x=\"707\" y=\"164\" width=\"66\" height=\"16\" fill=\"#fff\"></rect><text class=\"ds\" x=\"740\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\">Valor 1</text><rect class=\"bxo\" x=\"709\" y=\"196\" width=\"62\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"740\" y=\"211\" text-anchor=\"middle\" dominant-baseline=\"central\">ACC_A</text><path class=\"ln\" d=\"M740 226 L740 246\"></path><path class=\"ln\" d=\"M810 150 L810 196\" marker-end=\"url(#ah)\"></path><rect x=\"777\" y=\"164\" width=\"66\" height=\"16\" fill=\"#fff\"></rect><text class=\"ds\" x=\"810\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\">Valor 2</text><rect class=\"bxo\" x=\"779\" y=\"196\" width=\"62\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"810\" y=\"211\" text-anchor=\"middle\" dominant-baseline=\"central\">ACC_B</text><path class=\"ln\" d=\"M810 226 L810 246\"></path><path class=\"ln\" d=\"M880 150 L880 196\" marker-end=\"url(#ah)\"></path><rect x=\"847\" y=\"164\" width=\"66\" height=\"16\" fill=\"#fff\"></rect><text class=\"ds\" x=\"880\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\">Valor N</text><rect class=\"bxo\" x=\"849\" y=\"196\" width=\"62\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"880\" y=\"211\" text-anchor=\"middle\" dominant-baseline=\"central\">ACC_N</text><path class=\"ln\" d=\"M880 226 L880 246\"></path><path class=\"ln\" d=\"M950 150 L950 196\" marker-end=\"url(#ah)\"></path><rect x=\"917\" y=\"164\" width=\"66\" height=\"16\" fill=\"#fff\"></rect><text class=\"ds\" x=\"950\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\">ALTRAMENT</text><rect class=\"bxw\" x=\"919\" y=\"196\" width=\"62\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"950\" y=\"211\" text-anchor=\"middle\" dominant-baseline=\"central\">ACC_Z</text><path class=\"ln\" d=\"M950 226 L950 246\"></path><path class=\"ln\" d=\"M740 246 L950 246\"></path><circle cx=\"845\" cy=\"246\" r=\"3\" class=\"fk\"></circle><path class=\"ln\" d=\"M845 246 L845 262\" marker-end=\"url(#ah)\"></path><rect class=\"bx\" x=\"785\" y=\"262\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"845\" y=\"277\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_B</text><text class=\"ds\" x=\"845\" y=\"312\" text-anchor=\"middle\" dominant-baseline=\"central\">un solo camino: el primer valor que coincide</text><path class=\"lnd\" d=\"M175 30 L175 320\"></path><path class=\"lnd\" d=\"M400 30 L400 320\"></path><path class=\"lnd\" d=\"M700 30 L700 320\"></path></svg></div><figcaption>Ordinogramas: secuencia, condicional simple, condicional doble y alternativa múltiple.</figcaption></figure>"
    ]
   },
   {
    "t": "h",
    "x": [
     "Estructura seqüencial",
     "Estructura secuencial"
    ]
   },
   {
    "t": "p",
    "x": [
     "Les accions s'executen **en l'ordre escrit**, de dalt a baix, una sola vegada cadascuna. És la de l'àrea del rectangle. Exemple quotidià: rentar-se les mans (obrir l'aixeta, mullar-se, sabó, fregar, esbandir, tancar, eixugar). Canviar l'ordre canvia el resultat: eixugar-se abans d'esbandir no funciona.",
     "Las acciones se ejecutan **en el orden escrito**, de arriba abajo, una sola vez cada una. Es la del área del rectángulo. Ejemplo cotidiano: lavarse las manos (abrir el grifo, mojarse, jabón, frotar, aclarar, cerrar, secarse). Cambiar el orden cambia el resultado: secarse antes de aclararse no funciona."
    ]
   },
   {
    "t": "h",
    "x": "Estructura condicional"
   },
   {
    "t": "p",
    "x": [
     "**Condicional simple.** El bloc s'executa **només si** la condició és certa; si no, se salta i es continua després del `FI_SI`.",
     "**Condicional simple.** El bloque se ejecuta **solo si** la condición es cierta; si no, se salta y se continúa después del `FI_SI`."
    ]
   },
   {
    "t": "p",
    "x": [
     "**Condicional doble.** Si la condició és certa s'executa un bloc; si és falsa, el de l'`ALTRAMENT`. **Sempre** s'executa exactament un dels dos.",
     "**Condicional doble.** Si la condición es cierta se ejecuta un bloque; si es falsa, el del `ALTRAMENT`. **Siempre** se ejecuta exactamente uno de los dos."
    ]
   },
   {
    "t": "code",
    "lang": "ps",
    "props": {
     "run": true,
     "trace": true,
     "in": "6"
    },
    "src": [
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      dia           Natural   Dia de la setmana (1 = dilluns … 7 = diumenge)\n\nINICI_SEQÜÈNCIA\n    Llegir dia\n    SI dia ≤ 5 LLAVORS\n        Escriure \"Dia laborable: anar a treballar\"\n    ALTRAMENT\n        Escriure \"Cap de setmana: planificar el dia lliure\"\n    FI_SI\nFI_SEQÜÈNCIA",
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      dia           Natural   Día de la semana (1 = lunes … 7 = domingo)\n\nINICI_SEQÜÈNCIA\n    Llegir dia\n    SI dia ≤ 5 LLAVORS\n        Escriure \"Dia laborable: anar a treballar\"\n    ALTRAMENT\n        Escriure \"Cap de setmana: planificar el dia lliure\"\n    FI_SI\nFI_SEQÜÈNCIA"
    ]
   },
   {
    "t": "p",
    "x": [
     "**Alternativa múltiple.** Es compara una variable amb diversos valors; s'executa el bloc del **primer** valor que coincideix i se surt. Si no coincideix cap, no es fa res, o es fa l'`ALTRAMENT` si n'hi ha.",
     "**Alternativa múltiple.** Se compara una variable con varios valores; se ejecuta el bloque del **primer** valor que coincide y se sale. Si no coincide ninguno, no se hace nada, o se hace el `ALTRAMENT` si lo hay."
    ]
   },
   {
    "t": "code",
    "lang": "ps",
    "props": {
     "run": true,
     "trace": true,
     "in": "V"
    },
    "src": [
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS      DESCRIPCIÓ\n   E      temps         Caràcter   S = sol, V = vent, P = pluja\n\nINICI_SEQÜÈNCIA\n    Llegir temps\n    SEGONS_SIGUI temps FER\n        'S': Escriure \"Prendre el sol a la platja\"\n        'V': Escriure \"Fer surf\"\n        'P': Escriure \"Escoltar música\"\n    ALTRAMENT\n        Escriure \"Jugar a videojocs\"\n    FI_SEGONS_SIGUI\nFI_SEQÜÈNCIA",
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS      DESCRIPCIÓ\n   E      temps         Caràcter   S = sol, V = viento, P = lluvia\n\nINICI_SEQÜÈNCIA\n    Llegir temps\n    SEGONS_SIGUI temps FER\n        'S': Escriure \"Prendre el sol a la platja\"\n        'V': Escriure \"Fer surf\"\n        'P': Escriure \"Escoltar música\"\n    ALTRAMENT\n        Escriure \"Jugar a videojocs\"\n    FI_SEGONS_SIGUI\nFI_SEQÜÈNCIA"
    ]
   },
   {
    "t": "h",
    "x": "Estructura iterativa (bucles)"
   },
   {
    "t": "p",
    "x": [
     "Els bucles repeteixen accions. Són els que donen més problemes: bucles **infinits** (que no paren mai) o bucles que fan una volta de més o de menys.",
     "Los bucles repiten acciones. Son los que dan más problemas: bucles **infinitos** (que no paran nunca) o bucles que dan una vuelta de más o de menos."
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:700px\"><div class=\"ip-figb\"><svg viewBox=\"0 0 860 360\" aria-label=\"Ordinogrames de les tres variants iteratives\" role=\"img\"><text class=\"dt db\" x=\"140\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">MENTRE … FER</text><text class=\"dt db\" x=\"430\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">REPETEIX … FINS_QUE</text><text class=\"dt db\" x=\"720\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">DES_DE … FINS</text><rect class=\"bx\" x=\"80\" y=\"40\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"140\" y=\"55\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_A</text><path class=\"ln\" d=\"M140 70 L140 98\" marker-end=\"url(#ah)\"></path><circle cx=\"140\" cy=\"92\" r=\"3\" class=\"fk\"></circle><path class=\"bxa\" d=\"M140 100L210 130L140 160L70 130Z\"></path><text class=\"dt\" x=\"140\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\">condició</text><path class=\"ln\" d=\"M140 160 L140 196\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"130\" y=\"178\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bxo\" x=\"75\" y=\"196\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"140\" y=\"211\" text-anchor=\"middle\" dominant-baseline=\"central\">cos del bucle</text><path class=\"ln\" d=\"M140 226 L140 246 L48 246 L48 92\"></path><path class=\"ln\" d=\"M48 92 L136 92\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M210 130 L235 130 L235 305\"></path><path class=\"ln\" d=\"M235 305 L202 305\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"222\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><rect class=\"bx\" x=\"80\" y=\"290\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"140\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_B</text><text class=\"ds\" x=\"140\" y=\"345\" text-anchor=\"middle\" dominant-baseline=\"central\">cap volta si de bon principi és F</text><rect class=\"bx\" x=\"370\" y=\"40\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"430\" y=\"55\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_A</text><path class=\"ln\" d=\"M430 70 L430 98\" marker-end=\"url(#ah)\"></path><circle cx=\"430\" cy=\"92\" r=\"3\" class=\"fk\"></circle><rect class=\"bxo\" x=\"365\" y=\"105\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"430\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">cos del bucle</text><path class=\"ln\" d=\"M430 135 L430 166\" marker-end=\"url(#ah)\"></path><path class=\"bxa\" d=\"M430 166L500 196L430 226L360 196Z\"></path><text class=\"dt\" x=\"430\" y=\"196\" text-anchor=\"middle\" dominant-baseline=\"central\">condició</text><path class=\"ln\" d=\"M360 196 L338 196 L338 92\"></path><path class=\"ln\" d=\"M338 92 L426 92\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"350\" y=\"186\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><path class=\"ln\" d=\"M430 226 L430 290\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"420\" y=\"252\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bx\" x=\"370\" y=\"290\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"430\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_B</text><text class=\"ds\" x=\"430\" y=\"345\" text-anchor=\"middle\" dominant-baseline=\"central\">com a mínim una volta</text><rect class=\"bx\" x=\"655\" y=\"37\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"720\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\">a ← valorInicial</text><path class=\"ln\" d=\"M720 67 L720 90\" marker-end=\"url(#ah)\"></path><circle cx=\"720\" cy=\"86\" r=\"3\" class=\"fk\"></circle><path class=\"bxa\" d=\"M720 92L800 122L720 152L640 122Z\"></path><text class=\"dm\" x=\"720\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\">a ≤ valorFinal ?</text><path class=\"ln\" d=\"M720 152 L720 180\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"710\" y=\"166\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bxo\" x=\"655\" y=\"180\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"720\" y=\"195\" text-anchor=\"middle\" dominant-baseline=\"central\">cos del bucle</text><path class=\"ln\" d=\"M720 210 L720 232\" marker-end=\"url(#ah)\"></path><rect class=\"bx\" x=\"645\" y=\"232\" width=\"150\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"720\" y=\"247\" text-anchor=\"middle\" dominant-baseline=\"central\">a ← a + Increment</text><path class=\"ln\" d=\"M720 262 L720 272 L620 272 L620 86\"></path><path class=\"ln\" d=\"M620 86 L716 86\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M800 122 L820 122 L820 305\"></path><path class=\"ln\" d=\"M820 305 L782 305\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"810\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><rect class=\"bx\" x=\"660\" y=\"290\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"720\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓ_B</text><text class=\"ds\" x=\"720\" y=\"345\" text-anchor=\"middle\" dominant-baseline=\"central\">variable de control: no la toqueu a dins</text><path class=\"lnd\" d=\"M285 30 L285 355\"></path><path class=\"lnd\" d=\"M575 30 L575 355\"></path></svg></div><figcaption>Les tres variants iteratives. Fixeu-vos on és la condició: a dalt (MENTRE), a baix (REPETEIX) o controlada per un comptador (DES_DE).</figcaption></figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:700px\"><div class=\"ip-figb\"><svg viewBox=\"0 0 860 360\" aria-label=\"Diagramas de flujo de las tres variantes iterativas\" role=\"img\"><text class=\"dt db\" x=\"140\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">MENTRE … FER</text><text class=\"dt db\" x=\"430\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">REPETEIX … FINS_QUE</text><text class=\"dt db\" x=\"720\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\">DES_DE … FINS</text><rect class=\"bx\" x=\"80\" y=\"40\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"140\" y=\"55\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_A</text><path class=\"ln\" d=\"M140 70 L140 98\" marker-end=\"url(#ah)\"></path><circle cx=\"140\" cy=\"92\" r=\"3\" class=\"fk\"></circle><path class=\"bxa\" d=\"M140 100L210 130L140 160L70 130Z\"></path><text class=\"dt\" x=\"140\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\">condición</text><path class=\"ln\" d=\"M140 160 L140 196\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"130\" y=\"178\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bxo\" x=\"75\" y=\"196\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"140\" y=\"211\" text-anchor=\"middle\" dominant-baseline=\"central\">cuerpo del bucle</text><path class=\"ln\" d=\"M140 226 L140 246 L48 246 L48 92\"></path><path class=\"ln\" d=\"M48 92 L136 92\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M210 130 L235 130 L235 305\"></path><path class=\"ln\" d=\"M235 305 L202 305\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"222\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><rect class=\"bx\" x=\"80\" y=\"290\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"140\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_B</text><text class=\"ds\" x=\"140\" y=\"345\" text-anchor=\"middle\" dominant-baseline=\"central\">ninguna vuelta si de entrada es F</text><rect class=\"bx\" x=\"370\" y=\"40\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"430\" y=\"55\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_A</text><path class=\"ln\" d=\"M430 70 L430 98\" marker-end=\"url(#ah)\"></path><circle cx=\"430\" cy=\"92\" r=\"3\" class=\"fk\"></circle><rect class=\"bxo\" x=\"365\" y=\"105\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"430\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\">cuerpo del bucle</text><path class=\"ln\" d=\"M430 135 L430 166\" marker-end=\"url(#ah)\"></path><path class=\"bxa\" d=\"M430 166L500 196L430 226L360 196Z\"></path><text class=\"dt\" x=\"430\" y=\"196\" text-anchor=\"middle\" dominant-baseline=\"central\">condición</text><path class=\"ln\" d=\"M360 196 L338 196 L338 92\"></path><path class=\"ln\" d=\"M338 92 L426 92\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"350\" y=\"186\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><path class=\"ln\" d=\"M430 226 L430 290\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"420\" y=\"252\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bx\" x=\"370\" y=\"290\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"430\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_B</text><text class=\"ds\" x=\"430\" y=\"345\" text-anchor=\"middle\" dominant-baseline=\"central\">como mínimo una vuelta</text><rect class=\"bx\" x=\"655\" y=\"37\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"720\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\">a ← valorInicial</text><path class=\"ln\" d=\"M720 67 L720 90\" marker-end=\"url(#ah)\"></path><circle cx=\"720\" cy=\"86\" r=\"3\" class=\"fk\"></circle><path class=\"bxa\" d=\"M720 92L800 122L720 152L640 122Z\"></path><text class=\"dm\" x=\"720\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\">a ≤ valorFinal ?</text><path class=\"ln\" d=\"M720 152 L720 180\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"710\" y=\"166\" text-anchor=\"end\" dominant-baseline=\"central\">V</text><rect class=\"bxo\" x=\"655\" y=\"180\" width=\"130\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"720\" y=\"195\" text-anchor=\"middle\" dominant-baseline=\"central\">cuerpo del bucle</text><path class=\"ln\" d=\"M720 210 L720 232\" marker-end=\"url(#ah)\"></path><rect class=\"bx\" x=\"645\" y=\"232\" width=\"150\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"720\" y=\"247\" text-anchor=\"middle\" dominant-baseline=\"central\">a ← a + Increment</text><path class=\"ln\" d=\"M720 262 L720 272 L620 272 L620 86\"></path><path class=\"ln\" d=\"M620 86 L716 86\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M800 122 L820 122 L820 305\"></path><path class=\"ln\" d=\"M820 305 L782 305\" marker-end=\"url(#ah)\"></path><text class=\"ds db\" x=\"810\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\">F</text><rect class=\"bx\" x=\"660\" y=\"290\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dt\" x=\"720\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"central\">ACCIÓN_B</text><text class=\"ds\" x=\"720\" y=\"345\" text-anchor=\"middle\" dominant-baseline=\"central\">variable de control: no la toquéis dentro</text><path class=\"lnd\" d=\"M285 30 L285 355\"></path><path class=\"lnd\" d=\"M575 30 L575 355\"></path></svg></div><figcaption>Las tres variantes iterativas. Fijaos en dónde está la condición: arriba (MENTRE), abajo (REPETEIX) o controlada por un contador (DES_DE).</figcaption></figure>"
    ]
   },
   {
    "t": "table",
    "head": [
     "",
     "MENTRE … FER",
     "REPETEIX … FINS_QUE",
     "DES_DE … FINS … Increment"
    ],
    "rows": [
     [
      [
       "**Quan s'avalua la condició**",
       "**Cuándo se evalúa la condición**"
      ],
      [
       "Abans de cada volta",
       "Antes de cada vuelta"
      ],
      [
       "Després de cada volta",
       "Después de cada vuelta"
      ],
      [
       "Abans de cada volta (variable ≤ final?)",
       "Antes de cada vuelta (¿variable ≤ final?)"
      ]
     ],
     [
      [
       "**Continua mentre…**",
       "**Continúa mientras…**"
      ],
      [
       "la condició és **certa**",
       "la condición es **cierta**"
      ],
      [
       "la condició és **falsa**",
       "la condición es **falsa**"
      ],
      "la variable no supera el final"
     ],
     [
      [
       "**Mínim de voltes**",
       "**Mínimo de vueltas**"
      ],
      "0",
      "1",
      "0"
     ],
     [
      [
       "**En sortir**",
       "**Al salir**"
      ],
      [
       "la condició és falsa",
       "la condición es falsa"
      ],
      [
       "la condició és certa",
       "la condición es cierta"
      ],
      [
       "la variable ha superat el final",
       "la variable ha superado el final"
      ]
     ],
     [
      [
       "**Quan es fa servir**",
       "**Cuándo se usa**"
      ],
      [
       "no sabem quantes voltes",
       "no sabemos cuántas vueltas"
      ],
      [
       "no sabem quantes, però almenys una",
       "no sabemos cuántas, pero al menos una"
      ],
      [
       "sabem quantes voltes",
       "sabemos cuántas vueltas"
      ]
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "La diferència entre MENTRE i REPETEIX es veu quan la condició ja es compleix d'entrada. Amb l'entrada `0`, el primer no fa cap volta i el segon en fa una (proveu-ho també amb 3):",
     "La diferencia entre MENTRE y REPETEIX se ve cuando la condición ya se cumple de entrada. Con la entrada `0`, el primero no da ninguna vuelta y el segundo da una (probadlo también con 3):"
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
        "in": "0"
       },
       "src": [
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      n             Natural   Voltes que demanem\n          c             Natural   Comptador\n\nINICI_SEQÜÈNCIA\n    Llegir n\n    c ← 0\n    MENTRE c < n FER\n        c ← c + 1\n        Escriure \"volta \", c\n    FI_MENTRE\n    Escriure \"fet: \", c, \" voltes\"\nFI_SEQÜÈNCIA",
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      n             Natural   Vueltas que pedimos\n          c             Natural   Contador\n\nINICI_SEQÜÈNCIA\n    Llegir n\n    c ← 0\n    MENTRE c < n FER\n        c ← c + 1\n        Escriure \"volta \", c\n    FI_MENTRE\n    Escriure \"fet: \", c, \" voltes\"\nFI_SEQÜÈNCIA"
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "ps",
       "props": {
        "run": true,
        "trace": true,
        "in": "0"
       },
       "src": [
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      n             Natural   Voltes que demanem\n          c             Natural   Comptador\n\nINICI_SEQÜÈNCIA\n    Llegir n\n    c ← 0\n    REPETEIX\n        c ← c + 1\n        Escriure \"volta \", c\n    FINS_QUE c ≥ n\n    Escriure \"fet: \", c, \" voltes\"\nFI_SEQÜÈNCIA",
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      n             Natural   Vueltas que pedimos\n          c             Natural   Contador\n\nINICI_SEQÜÈNCIA\n    Llegir n\n    c ← 0\n    REPETEIX\n        c ← c + 1\n        Escriure \"volta \", c\n    FINS_QUE c ≥ n\n    Escriure \"fet: \", c, \" voltes\"\nFI_SEQÜÈNCIA"
       ]
      }
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "**Nombre fix de repeticions.** Una variable de control va des d'un valor inicial fins a un final, incrementant-se a cada volta. Escriure N targetes de felicitació:",
     "**Número fijo de repeticiones.** Una variable de control va desde un valor inicial hasta uno final, incrementándose en cada vuelta. Escribir N tarjetas de felicitación:"
    ]
   },
   {
    "t": "code",
    "lang": "ps",
    "props": {
     "run": true,
     "trace": true,
     "in": "3",
     "strip": "c,1,n"
    },
    "src": [
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      n             Natural   Nombre de targetes\n          c             Natural   Targeta actual\n\nINICI_SEQÜÈNCIA\n    Llegir n\n    DES_DE c ← 1 FINS n Increment 1 FER\n        Escriure \"Targeta de felicitació número \", c\n    FI_DES_DE\nFI_SEQÜÈNCIA",
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      n             Natural   Número de tarjetas\n          c             Natural   Tarjeta actual\n\nINICI_SEQÜÈNCIA\n    Llegir n\n    DES_DE c ← 1 FINS n Increment 1 FER\n        Escriure \"Targeta de felicitació número \", c\n    FI_DES_DE\nFI_SEQÜÈNCIA"
    ]
   },
   {
    "t": "warn",
    "title": [
     "El bucle infinit",
     "El bucle infinito"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si dins d'un MENTRE res no fa canviar la condició, el bucle no s'acaba mai. Aquí s'ha oblidat `c ← c + 1`. L'intèrpret l'atura quan supera un límit de passos; un programa real es quedaria penjat.",
       "Si dentro de un MENTRE nada hace cambiar la condición, el bucle no termina nunca. Aquí se ha olvidado `c ← c + 1`. El intérprete lo detiene cuando supera un límite de pasos; un programa real se quedaría colgado."
      ]
     }
    ]
   },
   {
    "t": "code",
    "lang": "ps",
    "props": {
     "run": true,
     "in": "3"
    },
    "src": [
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      n             Natural   Voltes que demanem\n          c             Natural   Comptador\n\nINICI_SEQÜÈNCIA\n    Llegir n\n    c ← 0\n    MENTRE c < n FER\n        Escriure \"volta \", c\n    FI_MENTRE\nFI_SEQÜÈNCIA",
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      n             Natural   Vueltas que pedimos\n          c             Natural   Contador\n\nINICI_SEQÜÈNCIA\n    Llegir n\n    c ← 0\n    MENTRE c < n FER\n        Escriure \"volta \", c\n    FI_MENTRE\nFI_SEQÜÈNCIA"
    ]
   }
  ],
  "t22-9": [
   {
    "t": "check",
    "ex": {
     "id": "t22-9-q1",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quin és el resultat de `17 ‖ 5 + 17 |R 5`?",
        "¿Cuál es el resultado de `17 ‖ 5 + 17 |R 5`?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "2",
      "3,4",
      "5",
      "1"
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "`‖` i `|R` (2a prioritat) abans que `+`: `(17 ‖ 5) + (17 |R 5)` = 3 + 2 = 5.",
        "`‖` y `|R` (2.ª prioridad) antes que `+`: `(17 ‖ 5) + (17 |R 5)` = 3 + 2 = 5."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "t22-9-q2",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quin tipus faries servir per guardar si un nombre **és primer o no**?",
        "¿Qué tipo usarías para guardar si un número **es primo o no**?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "Lògic",
      "Natural",
      "Caràcter",
      "Cadena"
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "La resposta és sí o no: un valor lògic (`bool` en C++).",
        "La respuesta es sí o no: un valor lógico (`bool` en C++)."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "t22-9-q3",
     "qb": [
      {
       "t": "p",
       "x": [
        "Amb les prioritats del curs, com s'interpreta `x > 0 I x < 10`?",
        "Con las prioridades del curso, ¿cómo se interpreta `x > 0 I x < 10`?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "`(x > 0) I (x < 10)`",
      [
       "Com un error de sintaxi",
       "Como un error de sintaxis"
      ],
      [
       "`x > (0 I x < 10)` i és correcte",
       "`x > (0 I x < 10)` y es correcto"
      ],
      [
       "`x > (0 I x) < 10`: un error de tipus, perquè I necessita valors lògics",
       "`x > (0 I x) < 10`: un error de tipo, porque I necesita valores lógicos"
      ]
     ],
     "answer": 3,
     "sol": [
      {
       "t": "p",
       "x": [
        "El I té més prioritat que els relacionals, així que s'aplica a `0` i `x`, que són nombres. Per això cal escriure `(x > 0) I (x < 10)`.",
        "I tiene más prioridad que los relacionales, así que se aplica a `0` y `x`, que son números. Por eso hay que escribir `(x > 0) I (x < 10)`."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "t22-9-q4",
     "qb": [
      {
       "t": "p",
       "x": [
        "Un bucle ha de demanar una contrasenya i tornar-la a demanar mentre sigui incorrecta. Quina estructura és la més natural?",
        "Un bucle debe pedir una contraseña y volver a pedirla mientras sea incorrecta. ¿Qué estructura es la más natural?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      [
       "DES_DE, perquè sabem quantes voltes es faran",
       "DES_DE, porque sabemos cuántas vueltas se darán"
      ],
      [
       "REPETEIX … FINS_QUE, perquè almenys s'ha de demanar una vegada",
       "REPETEIX … FINS_QUE, porque hay que pedirla al menos una vez"
      ],
      "Un SI doble",
      "SEGONS_SIGUI"
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "No sabem quantes voltes, però segur que almenys una: és el cas típic de condició final.",
        "No sabemos cuántas vueltas, pero seguro que al menos una: es el caso típico de condición final."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "t22-9-q5",
     "qb": [
      {
       "t": "p",
       "x": [
        "Què escriu aquest fragment si a = 7?",
        "¿Qué escribe este fragmento si a = 7?"
       ]
      },
      {
       "t": "code",
       "lang": "txt",
       "src": "SI a |R 2 = 0 LLAVORS\n    Escriure \"parell\"\nALTRAMENT\n    Escriure \"senar\"\nFI_SI"
      }
     ],
     "type": "mcq",
     "opts": [
      "parell",
      [
       "res",
       "nada"
      ],
      "senar",
      [
       "parell i senar",
       "parell y senar"
      ]
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "7 |R 2 = 1, que no és 0: s'executa l'ALTRAMENT. En una condicional doble sempre s'executa exactament una de les dues branques.",
        "7 |R 2 = 1, que no es 0: se ejecuta el ALTRAMENT. En una condicional doble siempre se ejecuta exactamente una de las dos ramas."
       ]
      }
     ]
    }
   }
  ],
  "t22-10": [
   {
    "t": "summary",
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Tota dada es declara a l'**ENTORN** amb identificador, tipus i descripció; les **variables** canvien de valor i les **constants** no.",
        "Todo dato se declara en el **ENTORN** con identificador, tipo y descripción; las **variables** cambian de valor y las **constantes** no."
       ],
       [
        "Tipus **elementals** (enter, natural, real, caràcter, lògic, cadena, subrang, enumeratiu) i **estructurats** (Tema 4). El domini és limitat.",
        "Tipos **elementales** (entero, natural, real, carácter, lógico, cadena, subrango, enumerado) y **estructurados** (Tema 4). El dominio es limitado."
       ],
       [
        "Operadors **aritmètics** (+, −, ·, /, ‖, |R), **lògics** (I, O, NO) i **relacionals** (=, <, >, ≤, ≥, ≠). Prioritats: NO › (· / ‖ |R I) › (+ − O) › relacionals; a igualtat, d'esquerra a dreta. Les comparacions, entre parèntesis.",
        "Operadores **aritméticos** (+, −, ·, /, ‖, |R), **lógicos** (I, O, NO) y **relacionales** (=, <, >, ≤, ≥, ≠). Prioridades: NO › (· / ‖ |R I) › (+ − O) › relacionales; a igualdad, de izquierda a derecha. Las comparaciones, entre paréntesis."
       ],
       [
        "L'**especificació** descriu l'estat inicial i el final; l'algorisme transforma l'un en l'altre.",
        "La **especificación** describe el estado inicial y el final; el algoritmo transforma uno en el otro."
       ],
       [
        "Només calen **tres composicions**: seqüencial, alternativa (simple, doble, múltiple) i iterativa (MENTRE, REPETEIX…FINS_QUE, DES_DE).",
        "Solo hacen falta **tres composiciones**: secuencial, alternativa (simple, doble, múltiple) e iterativa (MENTRE, REPETEIX…FINS_QUE, DES_DE)."
       ]
      ]
     }
    ]
   }
  ]
 },
 "examEnd": []
};
