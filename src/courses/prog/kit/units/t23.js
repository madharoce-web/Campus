// Generat per tools/kit-import/prog.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "El capçal, l'esquema de recorregut i l'esquema de cerca, i les seqüències d'entrada amb marca de fi.",
    "El cabezal, el esquema de recorrido y el esquema de búsqueda, y las secuencias de entrada con marca de fin.",
    "The cursor, the traversal scheme and the search scheme, and input sequences with an end marker."
   ]
  },
  {
   "t": "list",
   "items": [
    [
     "**Setmana:** 4 (28 de setembre–4 d'octubre) · Esquemes de recorregut i cerca",
     "**Semana:** 4 (28 de septiembre–4 de octubre) · Esquemas de recorrido y búsqueda",
     "**Week:** 4 (28 September–4 October) · Traversal and search schemes"
    ],
    [
     "**Documentació:** Apunts del professorat: diapositives 80–92",
     "**Documentación:** Apuntes del profesorado: diapositivas 80–92",
     "**Material:** Lecturers' notes: slides 80–92"
    ],
    [
     "**Llibre de suport:** Fonaments de programació (Ed. UOC), pàg. 87–129",
     "**Libro de apoyo:** Fonaments de programació (Ed. UOC), pág. 87–129",
     "**Reference book:** Fonaments de programació (Ed. UOC), pp. 87–129"
    ]
   ]
  },
  {
   "t": "p",
   "x": [
    "Molts problemes consisteixen a **passar per una sèrie d'elements**: els nombres d'un interval, les notes d'una classe, les edats dels assistents a un concert… Aquest tema dona dos **esquemes** (plantilles d'algorisme) que resolen gairebé tots aquests problemes: el **recorregut** i la **cerca**.",
    "Muchos problemas consisten en **pasar por una serie de elementos**: los números de un intervalo, las notas de una clase, las edades de los asistentes a un concierto… Este tema presenta dos **esquemas** (plantillas de algoritmo) que resuelven casi todos estos problemas: el **recorrido** y la **búsqueda**.",
    "Many problems consist of **going through a series of elements**: the numbers in an interval, the marks of a class, the ages of the people at a concert… This unit presents two **schemes** (algorithm templates) that solve almost all of these problems: **traversal** and **search**."
   ]
  },
  {
   "t": "summary",
   "title": [
    "En acabar aquesta pàgina sabràs",
    "Al terminar esta página sabrás",
    "By the end of this page you will be able to"
   ],
   "blocks": [
    {
     "t": "list",
     "items": [
      [
       "Identificar la **seqüència** d'un problema i el seu **capçal**.",
       "Identificar la **secuencia** de un problema y su **cabezal**.",
       "Identify the **sequence** of a problem and its **cursor**."
      ],
      [
       "Adaptar l'**esquema de recorregut** (tractar tots els elements) a un problema concret.",
       "Adaptar el **esquema de recorrido** (tratar todos los elementos) a un problema concreto.",
       "Adapt the **traversal scheme** (process all the elements) to a specific problem."
      ],
      [
       "Adaptar l'**esquema de cerca** (aturar-se en trobar l'element) i saber per què només s'avança a l'ALTRAMENT.",
       "Adaptar el **esquema de búsqueda** (detenerse al encontrar el elemento) y saber por qué solo se avanza en el ALTRAMENT.",
       "Adapt the **search scheme** (stop when the element is found) and know why you only advance in the ALTRAMENT."
      ],
      [
       "Aplicar els dos esquemes a **seqüències d'entrada** que acaben amb una **marca**.",
       "Aplicar los dos esquemas a **secuencias de entrada** que terminan con una **marca**.",
       "Apply both schemes to **input sequences** that end with a **marker**."
      ]
     ]
    }
   ]
  }
 ],
 "sections": {
  "t23-1": [
   {
    "t": "p",
    "x": [
     "Una **seqüència** és un conjunt d'elements **ordenats** d'una manera determinada. En qualsevol seqüència distingim:",
     "Una **secuencia** es un conjunto de elementos **ordenados** de una manera determinada. En cualquier secuencia distinguimos:",
     "A **sequence** is a set of elements **ordered** in a particular way. In any sequence we distinguish:"
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 190\" role=\"img\" aria-label=\"Primer, últim, actual i següent. El capçal (o índex) marca l&#x27;element que estem tractant; tot el que queda a l&#x27;esquerra ja s&#x27;ha tractat.\">\n<rect class=\"bxg\" x=\"40\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"75\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<rect class=\"bxg\" x=\"120\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"155\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">2</text>\n<rect class=\"bxg\" x=\"200\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"235\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">3</text>\n<rect class=\"bxa\" x=\"280\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\" style=\"stroke-width:2.4\"></rect><text class=\"dm db\" x=\"315\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">4</text>\n<rect class=\"bx\" x=\"360\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"395\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">5</text>\n<rect class=\"bx\" x=\"440\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"475\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">6</text>\n<text class=\"dt db\" x=\"545\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">…</text>\n<rect class=\"bx\" x=\"580\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"615\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">N</text>\n<path class=\"lna\" d=\"M315 150 V118\" marker-end=\"url(#aha)\"></path><text class=\"dt db ta\" x=\"315\" y=\"168\" text-anchor=\"middle\">capçal (element actual)</text>\n<text class=\"ds\" x=\"75\" y=\"44\" text-anchor=\"middle\">primer</text><text class=\"ds\" x=\"395\" y=\"44\" text-anchor=\"middle\">següent</text><text class=\"ds\" x=\"615\" y=\"44\" text-anchor=\"middle\">últim</text>\n<path class=\"lnd\" d=\"M40 128 H270\"></path><text class=\"ds\" x=\"155\" y=\"142\" text-anchor=\"middle\">part ja tractada</text>\n<path class=\"lnd\" d=\"M360 128 H650\"></path><text class=\"ds\" x=\"505\" y=\"142\" text-anchor=\"middle\">part per tractar</text>\n<rect class=\"bxg\" x=\"680\" y=\"45\" width=\"160\" height=\"80\" rx=\"6\"></rect><text class=\"dt db\" x=\"760\" y=\"67\" text-anchor=\"middle\">obtenir següent</text><text class=\"ds\" x=\"760\" y=\"88\" text-anchor=\"middle\">= moure el capçal</text><text class=\"ds\" x=\"760\" y=\"106\" text-anchor=\"middle\">una posició a la dreta</text>\n</svg></div>\n<figcaption>Primer, últim, actual i següent. El capçal (o índex) marca l'element que estem tractant; tot el que queda a l'esquerra ja s'ha tractat.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 190\" role=\"img\" aria-label=\"Primero, último, actual y siguiente. El cabezal (o índice) marca el elemento que estamos tratando; todo lo que queda a la izquierda ya se ha tratado.\">\n<rect class=\"bxg\" x=\"40\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"75\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<rect class=\"bxg\" x=\"120\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"155\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">2</text>\n<rect class=\"bxg\" x=\"200\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"235\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">3</text>\n<rect class=\"bxa\" x=\"280\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\" style=\"stroke-width:2.4\"></rect><text class=\"dm db\" x=\"315\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">4</text>\n<rect class=\"bx\" x=\"360\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"395\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">5</text>\n<rect class=\"bx\" x=\"440\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"475\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">6</text>\n<text class=\"dt db\" x=\"545\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">…</text>\n<rect class=\"bx\" x=\"580\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"615\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">N</text>\n<path class=\"lna\" d=\"M315 150 V118\" marker-end=\"url(#aha)\"></path><text class=\"dt db ta\" x=\"315\" y=\"168\" text-anchor=\"middle\">cabezal (elemento actual)</text>\n<text class=\"ds\" x=\"75\" y=\"44\" text-anchor=\"middle\">primero</text><text class=\"ds\" x=\"395\" y=\"44\" text-anchor=\"middle\">siguiente</text><text class=\"ds\" x=\"615\" y=\"44\" text-anchor=\"middle\">último</text>\n<path class=\"lnd\" d=\"M40 128 H270\"></path><text class=\"ds\" x=\"155\" y=\"142\" text-anchor=\"middle\">parte ya tratada</text>\n<path class=\"lnd\" d=\"M360 128 H650\"></path><text class=\"ds\" x=\"505\" y=\"142\" text-anchor=\"middle\">parte por tratar</text>\n<rect class=\"bxg\" x=\"680\" y=\"45\" width=\"160\" height=\"80\" rx=\"6\"></rect><text class=\"dt db\" x=\"760\" y=\"67\" text-anchor=\"middle\">obtener siguiente</text><text class=\"ds\" x=\"760\" y=\"88\" text-anchor=\"middle\">= mover el cabezal</text><text class=\"ds\" x=\"760\" y=\"106\" text-anchor=\"middle\">una posición a la derecha</text>\n</svg></div>\n<figcaption>Primero, último, actual y siguiente. El cabezal (o índice) marca el elemento que estamos tratando; todo lo que queda a la izquierda ya se ha tratado.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 190\" role=\"img\" aria-label=\"First, last, current and next. The cursor (or index) marks the element we are processing; everything to its left has already been processed.\">\n<rect class=\"bxg\" x=\"40\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"75\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n<rect class=\"bxg\" x=\"120\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"155\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">2</text>\n<rect class=\"bxg\" x=\"200\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"235\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">3</text>\n<rect class=\"bxa\" x=\"280\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\" style=\"stroke-width:2.4\"></rect><text class=\"dm db\" x=\"315\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">4</text>\n<rect class=\"bx\" x=\"360\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"395\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">5</text>\n<rect class=\"bx\" x=\"440\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"475\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">6</text>\n<text class=\"dt db\" x=\"545\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">…</text>\n<rect class=\"bx\" x=\"580\" y=\"60\" width=\"70\" height=\"50\" rx=\"4\"></rect><text class=\"dm\" x=\"615\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\">N</text>\n<path class=\"lna\" d=\"M315 150 V118\" marker-end=\"url(#aha)\"></path><text class=\"dt db ta\" x=\"315\" y=\"168\" text-anchor=\"middle\">cursor (current element)</text>\n<text class=\"ds\" x=\"75\" y=\"44\" text-anchor=\"middle\">first</text><text class=\"ds\" x=\"395\" y=\"44\" text-anchor=\"middle\">next</text><text class=\"ds\" x=\"615\" y=\"44\" text-anchor=\"middle\">last</text>\n<path class=\"lnd\" d=\"M40 128 H270\"></path><text class=\"ds\" x=\"155\" y=\"142\" text-anchor=\"middle\">part already processed</text>\n<path class=\"lnd\" d=\"M360 128 H650\"></path><text class=\"ds\" x=\"505\" y=\"142\" text-anchor=\"middle\">part still to process</text>\n<rect class=\"bxg\" x=\"680\" y=\"45\" width=\"160\" height=\"80\" rx=\"6\"></rect><text class=\"dt db\" x=\"760\" y=\"67\" text-anchor=\"middle\">get next</text><text class=\"ds\" x=\"760\" y=\"88\" text-anchor=\"middle\">= move the cursor</text><text class=\"ds\" x=\"760\" y=\"106\" text-anchor=\"middle\">one position to the right</text>\n</svg></div>\n<figcaption>First, last, current and next. The cursor (or index) marks the element we are processing; everything to its left has already been processed.</figcaption>\n</figure>"
    ],
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "Els elements es «visiten» del **primer a l'últim**, un rere l'altre: és un **tractament seqüencial**. Com que el tractament és el mateix per a tots, l'algorisme sempre té la mateixa forma: agafar el primer, tractar-lo, avançar al següent… fins a l'últim.",
     "Los elementos se «visitan» del **primero al último**, uno tras otro: es un **tratamiento secuencial**. Como el tratamiento es el mismo para todos, el algoritmo siempre tiene la misma forma: tomar el primero, tratarlo, avanzar al siguiente… hasta el último.",
     "The elements are “visited” from the **first to the last**, one after another: it is **sequential processing**. Since the processing is the same for all, the algorithm always has the same shape: take the first, process it, move to the next… until the last."
    ]
   }
  ],
  "t23-2": [
   {
    "t": "p",
    "x": [
     "Un **esquema** és un algorisme genèric que ja sabem que funciona. Resoldre un problema és **adaptar l'esquema** al cas concret, fent servir el disseny per refinaments. En lloc de dependre de la inspiració, se segueixen tres passos:",
     "Un **esquema** es un algoritmo genérico que ya sabemos que funciona. Resolver un problema es **adaptar el esquema** al caso concreto, utilizando el diseño por refinamientos. En lugar de depender de la inspiración, se siguen tres pasos:",
     "A **scheme** is a generic algorithm we already know works. Solving a problem means **adapting the scheme** to the specific case, using stepwise refinement. Instead of relying on inspiration, you follow three steps:"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "**Identificar la seqüència** que cal tractar: quins elements, quin és el primer, com s'obté el següent, com sabem que s'ha acabat.",
      "**Identificar la secuencia** que hay que tratar: qué elementos, cuál es el primero, cómo se obtiene el siguiente, cómo sabemos que se ha terminado.",
      "**Identify the sequence** to be processed: which elements, which is the first, how to get the next one, how we know it has ended."
     ],
     [
      "**Triar l'esquema**: cal tractar **tots** els elements (recorregut) o cal **trobar-ne un** i aturar-se (cerca)?",
      "**Elegir el esquema**: ¿hay que tratar **todos** los elementos (recorrido) o hay que **encontrar uno** y detenerse (búsqueda)?",
      "**Choose the scheme**: do we have to process **all** the elements (traversal) or **find one** and stop (search)?"
     ],
     [
      "**Refinar**: omplir cada part de l'esquema amb les accions concretes.",
      "**Refinar**: rellenar cada parte del esquema con las acciones concretas.",
      "**Refine**: fill in each part of the scheme with the specific actions."
     ]
    ],
    "ordered": true
   },
   {
    "t": "p",
    "x": [
     "L'avantatge és clar: **és molt més difícil equivocar-se**, perquè l'estructura ja és correcta i només cal omplir els forats.",
     "La ventaja es clara: **es mucho más difícil equivocarse**, porque la estructura ya es correcta y solo hay que rellenar los huecos.",
     "The advantage is clear: **it is much harder to make mistakes**, because the structure is already correct and you only have to fill in the gaps."
    ]
   },
   {
    "t": "check",
    "ex": {
     "ref": "pq-esq",
     "seed": 2
    }
   }
  ],
  "t23-3": [
   {
    "t": "p",
    "x": [
     "**Exemple.** Trobeu la suma dels N primers nombres naturals (suposem N = 5). La seqüència és `1 2 3 4 … N` i el capçal és el nombre actual:",
     "**Ejemplo.** Encontrad la suma de los N primeros números naturales (supongamos N = 5). La secuencia es `1 2 3 4 … N` y el cabezal es el número actual:",
     "**Example.** Find the sum of the first N natural numbers (say N = 5). The sequence is `1 2 3 4 … N` and the cursor is the current number:"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "El primer element és 1; l'últim és N (el 5).",
      "El primer elemento es 1; el último es N (el 5).",
      "The first element is 1; the last is N (5)."
     ],
     [
      "En començar, el capçal és a l'1; el següent de l'1 és el 2: avançar és sumar 1.",
      "Al empezar, el cabezal está en el 1; el siguiente del 1 es el 2: avanzar es sumar 1.",
      "At the start, the cursor is on 1; the next one after 1 is 2: advancing is adding 1."
     ],
     [
      "Tractar un element és acumular-lo amb els que ja hem tractat (els de l'esquerra del capçal).",
      "Tratar un elemento es acumularlo con los que ya hemos tratado (los de la izquierda del cabezal).",
      "Processing an element is accumulating it with the ones already processed (those to the left of the cursor)."
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Es tracten **tots** els elements, del primer a l'últim: és un **recorregut**. Resultat = 1 + 2 + 3 + 4 + 5 = 15.",
     "Se tratan **todos** los elementos, del primero al último: es un **recorrido**. Resultado = 1 + 2 + 3 + 4 + 5 = 15.",
     "**All** the elements are processed, from the first to the last: it is a **traversal**. Result = 1 + 2 + 3 + 4 + 5 = 15."
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
        "title": "esquema general",
        "nonum": true
       },
       "src": [
        "INICI_SEQÜÈNCIA\n    obtenir primer element\n    inici tractament\n    MENTRE no fi seqüència FER\n        tractar element\n        obtenir següent element\n    FI_MENTRE\n    final tractament\nFI_SEQÜÈNCIA",
        "INICI_SEQÜÈNCIA\n    obtener primer elemento\n    inicio tratamiento\n    MENTRE no fin secuencia FER\n        tratar elemento\n        obtener siguiente elemento\n    FI_MENTRE\n    final tratamiento\nFI_SEQÜÈNCIA"
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "ps",
       "props": {
        "title": [
         "el nostre cas: suma 1..N",
         "nuestro caso: suma 1..N"
        ],
        "nonum": true
       },
       "src": "INICI_SEQÜÈNCIA\n    i ← 1\n    resultat ← 0\n    MENTRE i ≤ N FER\n        resultat ← resultat + i\n        i ← i + 1\n    FI_MENTRE\n    Escriure resultat\nFI_SEQÜÈNCIA"
      }
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Cada línia de l'esquema s'ha convertit en una acció concreta: «obtenir primer» és `i ← 1`; «inici tractament» és `resultat ← 0`; «no fi seqüència» és `i ≤ N`; «tractar» és acumular; «obtenir següent» és `i ← i + 1`. Traceu-lo i mireu com es mou el capçal per la seqüència:",
     "Cada línea del esquema se ha convertido en una acción concreta: «obtener primer elemento» es `i ← 1`; «inicio tratamiento» es `resultat ← 0`; «no fin secuencia» es `i ≤ N`; «tratar» es acumular; «obtener siguiente elemento» es `i ← i + 1`. Trazadlo y mirad cómo se mueve el cabezal por la secuencia:",
     "Each line of the scheme has become a specific action: “get first element” is `i ← 1`; “start processing” is `resultat ← 0`; “not end of sequence” is `i ≤ N`; “process” is accumulating; “get next element” is `i ← i + 1`. Trace it and see how the cursor moves along the sequence:"
    ]
   },
   {
    "t": "code",
    "lang": "ps",
    "props": {
     "run": true,
     "trace": true,
     "in": "5",
     "strip": "i,1,N"
    },
    "src": [
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N             Natural   Quants nombres sumem\n   S      resultat      Natural   Suma 1 + 2 + … + N\n          i             Natural   Capçal: nombre actual\n\nINICI_SEQÜÈNCIA\n    Llegir N\n    i ← 1\n    resultat ← 0\n    MENTRE i ≤ N FER\n        resultat ← resultat + i\n        i ← i + 1\n    FI_MENTRE\n    Escriure resultat\nFI_SEQÜÈNCIA",
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N             Natural   Cuántos números sumamos\n   S      resultat      Natural   Suma 1 + 2 + … + N\n          i             Natural   Cabezal: número actual\n\nINICI_SEQÜÈNCIA\n    Llegir N\n    i ← 1\n    resultat ← 0\n    MENTRE i ≤ N FER\n        resultat ← resultat + i\n        i ← i + 1\n    FI_MENTRE\n    Escriure resultat\nFI_SEQÜÈNCIA",
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N             Natural   How many numbers we add\n   S      resultat      Natural   Sum 1 + 2 + … + N\n          i             Natural   Cursor: current number\n\nINICI_SEQÜÈNCIA\n    Llegir N\n    i ← 1\n    resultat ← 0\n    MENTRE i ≤ N FER\n        resultat ← resultat + i\n        i ← i + 1\n    FI_MENTRE\n    Escriure resultat\nFI_SEQÜÈNCIA"
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Estat a l'inici de cada volta (quan s'avalua <code>i ≤ N</code>) amb N = 5.</caption>\n<thead><tr><th>Volta</th><th class=\"c\">i (capçal)</th><th class=\"c\">resultat</th><th>Part tractada</th><th class=\"c\">i ≤ N?</th></tr></thead>\n<tbody>\n<tr><td>abans de començar</td><td class=\"c\">1</td><td class=\"c\">0</td><td>cap element</td><td class=\"c ip-v\">V</td></tr>\n<tr><td>després de la 1a</td><td class=\"c\">2</td><td class=\"c\">1</td><td>1</td><td class=\"c ip-v\">V</td></tr>\n<tr><td>després de la 2a</td><td class=\"c\">3</td><td class=\"c\">3</td><td>1 + 2</td><td class=\"c ip-v\">V</td></tr>\n<tr><td>després de la 3a</td><td class=\"c\">4</td><td class=\"c\">6</td><td>1 + 2 + 3</td><td class=\"c ip-v\">V</td></tr>\n<tr><td>després de la 4a</td><td class=\"c\">5</td><td class=\"c\">10</td><td>1 + 2 + 3 + 4</td><td class=\"c ip-v\">V</td></tr>\n<tr><td>després de la 5a</td><td class=\"c\">6</td><td class=\"c hl\">15</td><td>1 + 2 + 3 + 4 + 5</td><td class=\"c ip-f\">F → surt</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>Estado al inicio de cada vuelta (cuando se evalúa <code>i ≤ N</code>) con N = 5.</caption>\n<thead><tr><th>Vuelta</th><th class=\"c\">i (cabezal)</th><th class=\"c\">resultat</th><th>Parte tratada</th><th class=\"c\">¿i ≤ N?</th></tr></thead>\n<tbody>\n<tr><td>antes de empezar</td><td class=\"c\">1</td><td class=\"c\">0</td><td>ningún elemento</td><td class=\"c ip-v\">V</td></tr>\n<tr><td>después de la 1.ª</td><td class=\"c\">2</td><td class=\"c\">1</td><td>1</td><td class=\"c ip-v\">V</td></tr>\n<tr><td>después de la 2.ª</td><td class=\"c\">3</td><td class=\"c\">3</td><td>1 + 2</td><td class=\"c ip-v\">V</td></tr>\n<tr><td>después de la 3.ª</td><td class=\"c\">4</td><td class=\"c\">6</td><td>1 + 2 + 3</td><td class=\"c ip-v\">V</td></tr>\n<tr><td>después de la 4.ª</td><td class=\"c\">5</td><td class=\"c\">10</td><td>1 + 2 + 3 + 4</td><td class=\"c ip-v\">V</td></tr>\n<tr><td>después de la 5.ª</td><td class=\"c\">6</td><td class=\"c hl\">15</td><td>1 + 2 + 3 + 4 + 5</td><td class=\"c ip-f\">F → sale</td></tr>\n</tbody>\n</table></div>",
     "<div class=\"ip-tw trace\"><table class=\"trace\">\n<caption>State at the start of each iteration (when <code>i ≤ N</code> is evaluated) with N = 5.</caption>\n<thead><tr><th>Iteration</th><th class=\"c\">i (cursor)</th><th class=\"c\">resultat</th><th>Processed part</th><th class=\"c\">¿i ≤ N?</th></tr></thead>\n<tbody>\n<tr><td>before starting</td><td class=\"c\">1</td><td class=\"c\">0</td><td>no element</td><td class=\"c ip-v\">V</td></tr>\n<tr><td>after the 1st</td><td class=\"c\">2</td><td class=\"c\">1</td><td>1</td><td class=\"c ip-v\">V</td></tr>\n<tr><td>after the 2nd</td><td class=\"c\">3</td><td class=\"c\">3</td><td>1 + 2</td><td class=\"c ip-v\">V</td></tr>\n<tr><td>after the 3rd</td><td class=\"c\">4</td><td class=\"c\">6</td><td>1 + 2 + 3</td><td class=\"c ip-v\">V</td></tr>\n<tr><td>after the 4th</td><td class=\"c\">5</td><td class=\"c\">10</td><td>1 + 2 + 3 + 4</td><td class=\"c ip-v\">V</td></tr>\n<tr><td>after the 5th</td><td class=\"c\">6</td><td class=\"c hl\">15</td><td>1 + 2 + 3 + 4 + 5</td><td class=\"c ip-f\">F → exits</td></tr>\n</tbody>\n</table></div>"
    ],
    "mode": "explained"
   },
   {
    "t": "def",
    "title": [
     "Com s'interpreta",
     "Cómo se interpreta",
     "How to interpret it"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Al començament el capçal és al principi i no s'ha tractat cap element. A cada volta, **resultat conté el tractament de tota la part de la seqüència que queda a l'esquerra del capçal**. Quan el capçal surt de la seqüència (i = 6), tota la seqüència ha quedat a l'esquerra: resultat és la resposta.",
       "Al principio el cabezal está al inicio y no se ha tratado ningún elemento. En cada vuelta, **resultat contiene el tratamiento de toda la parte de la secuencia que queda a la izquierda del cabezal**. Cuando el cabezal sale de la secuencia (i = 6), toda la secuencia ha quedado a la izquierda: resultat es la respuesta.",
       "At the beginning the cursor is at the start and no element has been processed. At each iteration, **resultat contains the processing of the whole part of the sequence to the left of the cursor**. When the cursor leaves the sequence (i = 6), the whole sequence is on its left: resultat is the answer."
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "El mateix esquema, problemes diferents",
     "El mismo esquema, problemas diferentes",
     "The same scheme, different problems"
    ]
   },
   {
    "t": "p",
    "x": [
     "Canviant només les tres parts del tractament, l'esquema resol molts problemes. Comproveu que l'estructura és sempre la mateixa:",
     "Cambiando solo las tres partes del tratamiento, el esquema resuelve muchos problemas. Comprobad que la estructura es siempre la misma:",
     "By changing only the three processing parts, the scheme solves many problems. Check that the structure is always the same:"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Problema (seqüència 1..N)",
      "Problema (secuencia 1..N)",
      "Problem (sequence 1..N)"
     ],
     [
      "Inici tractament",
      "Inicio tratamiento",
      "Start processing"
     ],
     [
      "Tractar element i",
      "Tratar elemento i",
      "Process element i"
     ],
     [
      "Final tractament",
      "Final tratamiento",
      "End processing"
     ]
    ],
    "rows": [
     [
      [
       "Suma dels N primers",
       "Suma de los N primeros",
       "Sum of the first N"
      ],
      "`suma ← 0`",
      "`suma ← suma + i`",
      "`Escriure suma`"
     ],
     [
      [
       "Quants múltiples de 3 hi ha fins a N",
       "Cuántos múltiplos de 3 hay hasta N",
       "How many multiples of 3 there are up to N"
      ],
      "`q ← 0`",
      "`SI i |R 3 = 0 LLAVORS q ← q + 1 FI_SI`",
      "`Escriure q`"
     ],
     [
      "Factorial N! = 1 · 2 · … · N",
      "`f ← 1`",
      "`f ← f · i`",
      "`Escriure f`"
     ],
     [
      [
       "Suma dels quadrats 1² + … + N²",
       "Suma de los cuadrados 1² + … + N²",
       "Sum of squares 1² + … + N²"
      ],
      "`s ← 0`",
      "`s ← s + i · i`",
      "`Escriure s`"
     ]
    ]
   },
   {
    "t": "warn",
    "title": [
     "L'inici del tractament depèn de l'operació",
     "El inicio del tratamiento depende de la operación",
     "The start of processing depends on the operation"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Per sumar o comptar s'inicialitza a **0** (l'element neutre de la suma); per multiplicar, a **1**. Un factorial que comença amb `f ← 0` dona sempre 0.",
       "Para sumar o contar se inicializa a **0** (el elemento neutro de la suma); para multiplicar, a **1**. Un factorial que empieza con `f ← 0` da siempre 0.",
       "To add or count you initialise to **0** (the identity element of addition); to multiply, to **1**. A factorial that starts with `f ← 0` always gives 0."
      ]
     }
    ]
   }
  ],
  "t23-4": [
   {
    "t": "p",
    "x": [
     "**Exemple.** Trobeu el nombre més petit entre els naturals N1 i N2 que acabi en 3. La seqüència és `N1, N1+1, N1+2, … N2`. El tractament de cada nombre és **comprovar si acaba en 3**: si és així, ja l'hem trobat i no cal continuar; si no, avancem.",
     "**Ejemplo.** Encontrad el número más pequeño entre los naturales N1 y N2 que termine en 3. La secuencia es `N1, N1+1, N1+2, … N2`. El tratamiento de cada número es **comprobar si termina en 3**: si es así, ya lo hemos encontrado y no hace falta continuar; si no, avanzamos.",
     "**Example.** Find the smallest number between the naturals N1 and N2 that ends in 3. The sequence is `N1, N1+1, N1+2, … N2`. The processing of each number is **checking whether it ends in 3**: if so, we have found it and need not continue; if not, we advance."
    ]
   },
   {
    "t": "p",
    "x": [
     "Aquest tractament **busca un element**: recorre la seqüència des del primer fins a l'element buscat (o fins al final, si no hi és). És una **cerca**, i pot acabar de dues maneres: **amb èxit** o **fallida**.",
     "Este tratamiento **busca un elemento**: recorre la secuencia desde el primero hasta el elemento buscado (o hasta el final, si no está). Es una **búsqueda**, y puede terminar de dos maneras: **con éxito** o **fallida**.",
     "This processing **looks for an element**: it goes through the sequence from the first to the element sought (or to the end, if it is not there). It is a **search**, and it can end in two ways: **successful** or **unsuccessful**."
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
        "title": "esquema general",
        "nonum": true
       },
       "src": [
        "INICI_SEQÜÈNCIA\n    obtenir primer element\n    trobat ← fals\n    inici tractament\n    MENTRE no fi seqüència I NO trobat FER\n        SI condició de cerca LLAVORS\n            trobat ← cert\n        ALTRAMENT\n            obtenir següent element\n        FI_SI\n    FI_MENTRE\n    SI trobat LLAVORS\n        cerca amb èxit\n    ALTRAMENT\n        cerca fallida\n    FI_SI\n    final tractament\nFI_SEQÜÈNCIA",
        "INICI_SEQÜÈNCIA\n    obtener primer elemento\n    trobat ← fals\n    inicio tratamiento\n    MENTRE no fin secuencia I NO trobat FER\n        SI condición de búsqueda LLAVORS\n            trobat ← cert\n        ALTRAMENT\n            obtener siguiente elemento\n        FI_SI\n    FI_MENTRE\n    SI trobat LLAVORS\n        búsqueda con éxito\n    ALTRAMENT\n        búsqueda fallida\n    FI_SI\n    final tratamiento\nFI_SEQÜÈNCIA"
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "ps",
       "props": {
        "title": [
         "el nostre cas: acabat en 3",
         "nuestro caso: terminado en 3"
        ],
        "nonum": true
       },
       "src": "INICI_SEQÜÈNCIA\n    i ← N1\n    trobat ← fals\n    MENTRE (i ≤ N2) I NO trobat FER\n        SI i |R 10 = 3 LLAVORS\n            trobat ← cert\n        ALTRAMENT\n            i ← i + 1\n        FI_SI\n    FI_MENTRE\n    SI trobat LLAVORS\n        resultat ← i\n    ALTRAMENT\n        resultat ← −1\n    FI_SI\n    Escriure resultat\nFI_SEQÜÈNCIA"
      }
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "La variable **lògica** `trobat` fa de bandera: comença a fals i passa a cert quan es compleix la condició de cerca. La condició del MENTRE té dues parts: **queden elements** i **encara no l'hem trobat**. Si no n'hi ha cap, el resultat és una **marca** (−1) que indica cerca fallida. Proveu 17 40 (troba el 23) i 30 32 (no en troba cap):",
     "La variable **lógica** `trobat` hace de bandera: empieza en falso y pasa a cierto cuando se cumple la condición de búsqueda. La condición del MENTRE tiene dos partes: **quedan elementos** y **todavía no lo hemos encontrado**. Si no hay ninguno, el resultado es una **marca** (−1) que indica búsqueda fallida. Probad 17 40 (encuentra el 23) y 30 32 (no encuentra ninguno):",
     "The **logical** variable `trobat` acts as a flag: it starts as false and becomes true when the search condition is met. The MENTRE condition has two parts: **elements remain** and **we have not found it yet**. If there is none, the result is a **marker** (−1) meaning an unsuccessful search. Try 17 40 (it finds 23) and 30 32 (it finds none):"
    ],
    "mode": "explained"
   },
   {
    "t": "code",
    "lang": "ps",
    "props": {
     "run": true,
     "trace": true,
     "in": "17 40",
     "strip": "i,N1,N2"
    },
    "src": [
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N1            Natural   Inici de l'interval\n   E      N2            Natural   Final de l'interval\n   S      resultat      Enter     Primer nombre acabat en 3 (−1 si no n'hi ha)\n          i             Natural   Capçal: nombre actual\n          trobat        Lògic     Ja l'hem trobat?\n\nINICI_SEQÜÈNCIA\n    Llegir N1, N2\n    i ← N1\n    trobat ← fals\n    MENTRE (i ≤ N2) I NO trobat FER\n        SI i |R 10 = 3 LLAVORS\n            trobat ← cert\n        ALTRAMENT\n            i ← i + 1\n        FI_SI\n    FI_MENTRE\n    SI trobat LLAVORS\n        resultat ← i\n    ALTRAMENT\n        resultat ← −1\n    FI_SI\n    Escriure resultat\nFI_SEQÜÈNCIA",
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N1            Natural   Inicio del intervalo\n   E      N2            Natural   Final del intervalo\n   S      resultat      Enter     Primer número terminado en 3 (−1 si no hay ninguno)\n          i             Natural   Cabezal: número actual\n          trobat        Lògic     ¿Ya lo hemos encontrado?\n\nINICI_SEQÜÈNCIA\n    Llegir N1, N2\n    i ← N1\n    trobat ← fals\n    MENTRE (i ≤ N2) I NO trobat FER\n        SI i |R 10 = 3 LLAVORS\n            trobat ← cert\n        ALTRAMENT\n            i ← i + 1\n        FI_SI\n    FI_MENTRE\n    SI trobat LLAVORS\n        resultat ← i\n    ALTRAMENT\n        resultat ← −1\n    FI_SI\n    Escriure resultat\nFI_SEQÜÈNCIA",
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N1            Natural   Start of the interval\n   E      N2            Natural   End of the interval\n   S      resultat      Enter     First number ending in 3 (−1 if there is none)\n          i             Natural   Cursor: current number\n          trobat        Lògic     Have we found it yet?\n\nINICI_SEQÜÈNCIA\n    Llegir N1, N2\n    i ← N1\n    trobat ← fals\n    MENTRE (i ≤ N2) I NO trobat FER\n        SI i |R 10 = 3 LLAVORS\n            trobat ← cert\n        ALTRAMENT\n            i ← i + 1\n        FI_SI\n    FI_MENTRE\n    SI trobat LLAVORS\n        resultat ← i\n    ALTRAMENT\n        resultat ← −1\n    FI_SI\n    Escriure resultat\nFI_SEQÜÈNCIA"
    ]
   },
   {
    "t": "def",
    "title": [
     "Com s'interpreta",
     "Cómo se interpreta",
     "How to interpret it"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si l'element sota el capçal compleix la condició, `trobat` passa a cert i **el capçal es queda a sobre de l'element buscat**. La cerca s'atura quan s'acaba la seqüència o quan es troba l'element, el que passi primer.",
       "Si el elemento bajo el cabezal cumple la condición, `trobat` pasa a cierto y **el cabezal se queda encima del elemento buscado**. La búsqueda se detiene cuando se termina la secuencia o cuando se encuentra el elemento, lo que pase primero.",
       "If the element under the cursor meets the condition, `trobat` becomes true and **the cursor stays on the element sought**. The search stops when the sequence ends or when the element is found, whichever happens first."
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "Per què només s'avança a l'ALTRAMENT",
     "Por qué solo se avanza en el ALTRAMENT",
     "Why you only advance in the ALTRAMENT"
    ]
   },
   {
    "t": "p",
    "x": [
     "És l'error més habitual en una cerca. Si avancem el capçal **sempre** (fora del SI), quan trobem l'element el capçal ja l'ha deixat enrere. Compareu la versió incorrecta amb 17 40: escriu 24 en lloc de 23.",
     "Es el error más habitual en una búsqueda. Si avanzamos el cabezal **siempre** (fuera del SI), cuando encontramos el elemento el cabezal ya lo ha dejado atrás. Comparad la versión incorrecta con 17 40: escribe 24 en lugar de 23.",
     "It is the most common mistake in a search. If we **always** advance the cursor (outside the SI), when we find the element the cursor has already moved past it. Compare the wrong version with 17 40: it writes 24 instead of 23."
    ]
   },
   {
    "t": "code",
    "lang": "ps",
    "props": {
     "title": [
      "versió INCORRECTA",
      "versión INCORRECTA",
      "WRONG version"
     ],
     "in": "17 40",
     "run": true,
     "strip": "i,N1,N2",
     "trace": true
    },
    "src": [
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N1            Natural   Inici de l'interval\n   E      N2            Natural   Final de l'interval\n   S      resultat      Enter     Primer nombre acabat en 3\n          i             Natural   Capçal: nombre actual\n          trobat        Lògic     Ja l'hem trobat?\n\nINICI_SEQÜÈNCIA\n    Llegir N1, N2\n    i ← N1\n    trobat ← fals\n    MENTRE (i ≤ N2) I NO trobat FER\n        SI i |R 10 = 3 LLAVORS\n            trobat ← cert\n        FI_SI\n        i ← i + 1\n    FI_MENTRE\n    SI trobat LLAVORS\n        resultat ← i\n    ALTRAMENT\n        resultat ← −1\n    FI_SI\n    Escriure resultat\nFI_SEQÜÈNCIA",
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N1            Natural   Inicio del intervalo\n   E      N2            Natural   Final del intervalo\n   S      resultat      Enter     Primer número terminado en 3\n          i             Natural   Cabezal: número actual\n          trobat        Lògic     ¿Ya lo hemos encontrado?\n\nINICI_SEQÜÈNCIA\n    Llegir N1, N2\n    i ← N1\n    trobat ← fals\n    MENTRE (i ≤ N2) I NO trobat FER\n        SI i |R 10 = 3 LLAVORS\n            trobat ← cert\n        FI_SI\n        i ← i + 1\n    FI_MENTRE\n    SI trobat LLAVORS\n        resultat ← i\n    ALTRAMENT\n        resultat ← −1\n    FI_SI\n    Escriure resultat\nFI_SEQÜÈNCIA",
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N1            Natural   Start of the interval\n   E      N2            Natural   End of the interval\n   S      resultat      Enter     First number ending in 3\n          i             Natural   Cursor: current number\n          trobat        Lògic     Have we found it yet?\n\nINICI_SEQÜÈNCIA\n    Llegir N1, N2\n    i ← N1\n    trobat ← fals\n    MENTRE (i ≤ N2) I NO trobat FER\n        SI i |R 10 = 3 LLAVORS\n            trobat ← cert\n        FI_SI\n        i ← i + 1\n    FI_MENTRE\n    SI trobat LLAVORS\n        resultat ← i\n    ALTRAMENT\n        resultat ← −1\n    FI_SI\n    Escriure resultat\nFI_SEQÜÈNCIA"
    ]
   },
   {
    "t": "warn",
    "title": [
     "Parèntesis a la condició del MENTRE",
     "Paréntesis en la condición del MENTRE",
     "Parentheses in the MENTRE condition"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "El material escriu `MENTRE i ≤ N2 I no trobat FER`. Seguint la taula de prioritats del curs (Tema 2.2) el I s'avaluaria abans que el ≤, així que és més segur escriure `(i ≤ N2) I NO trobat`.",
       "El material escribe `MENTRE i ≤ N2 I no trobat FER`. Siguiendo la tabla de prioridades del curso (Tema 2.2), el I se evaluaría antes que el ≤, así que es más seguro escribir `(i ≤ N2) I NO trobat`.",
       "The material writes `MENTRE i ≤ N2 I no trobat FER`. Following the course precedence table (Unit 2.2), the I would be evaluated before the ≤, so it is safer to write `(i ≤ N2) I NO trobat`."
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "Recorregut o cerca?",
     "¿Recorrido o búsqueda?",
     "Traversal or search?"
    ]
   },
   {
    "t": "table",
    "head": [
     "",
     [
      "Recorregut",
      "Recorrido",
      "Traversal"
     ],
     [
      "Cerca",
      "Búsqueda",
      "Search"
     ]
    ],
    "rows": [
     [
      [
       "**Quants elements tracta**",
       "**Cuántos elementos trata**",
       "**How many elements it processes**"
      ],
      [
       "Tots, del primer a l'últim",
       "Todos, del primero al último",
       "All, from the first to the last"
      ],
      [
       "Del primer fins al que busquem (o tots, si no hi és)",
       "Del primero hasta el que buscamos (o todos, si no está)",
       "From the first to the one we are looking for (or all, if it is not there)"
      ]
     ],
     [
      [
       "**Condició del MENTRE**",
       "**Condición del MENTRE**",
       "**MENTRE condition**"
      ],
      "`no fi seqüència`",
      "`no fi seqüència I NO trobat`"
     ],
     [
      [
       "**Avançar el capçal**",
       "**Avanzar el cabezal**",
       "**Advancing the cursor**"
      ],
      [
       "Sempre, al final de cada volta",
       "Siempre, al final de cada vuelta",
       "Always, at the end of each iteration"
      ],
      [
       "Només si l'element actual no és el buscat (ALTRAMENT)",
       "Solo si el elemento actual no es el buscado (ALTRAMENT)",
       "Only if the current element is not the one sought (ALTRAMENT)"
      ]
     ],
     [
      [
       "**Paraules de l'enunciat**",
       "**Palabras del enunciado**",
       "**Words in the statement**"
      ],
      [
       "«quants», «la suma», «la mitjana», «el màxim», «tots»",
       "«cuántos», «la suma», «la media», «el máximo», «todos»",
       "“how many”, “the sum”, “the average”, “the maximum”, “all”"
      ],
      [
       "«el primer que», «hi ha algun», «existeix», «trobeu»",
       "«el primero que», «hay alguno», «existe», «encontrad»",
       "“the first that”, “is there any”, “there exists”, “find”"
      ]
     ],
     [
      [
       "**Resultat**",
       "**Resultado**",
       "**Result**"
      ],
      [
       "Un acumulat (suma, comptador, màxim…)",
       "Un acumulado (suma, contador, máximo…)",
       "An accumulated value (sum, counter, maximum…)"
      ],
      [
       "Èxit (on és) o fallida (marca)",
       "Éxito (dónde está) o fallida (marca)",
       "Success (where it is) or failure (marker)"
      ]
     ]
    ]
   },
   {
    "t": "check",
    "ex": {
     "ref": "pq-esq",
     "seed": 6
    }
   }
  ],
  "t23-5": [
   {
    "t": "p",
    "x": [
     "Quan els elements no es calculen sinó que els escriu l'usuari, l'esquema és el mateix, però **obtenir un element és llegir-lo**: es llegeix el primer abans del bucle i el següent com a última acció del bucle. Com que no sabem quantes dades vindran, la seqüència acaba amb una **marca**: un valor especial que **no és una dada** (per exemple −1 per a notes, o 0 per a edats).",
     "Cuando los elementos no se calculan, sino que los escribe el usuario, el esquema es el mismo, pero **obtener un elemento es leerlo**: se lee el primero antes del bucle y el siguiente como última acción del bucle. Como no sabemos cuántos datos vendrán, la secuencia termina con una **marca**: un valor especial que **no es un dato** (por ejemplo, −1 para notas o 0 para edades).",
     "When the elements are not calculated but typed by the user, the scheme is the same, but **getting an element is reading it**: the first is read before the loop and the next as the last action of the loop. Since we do not know how many data will come, the sequence ends with a **marker**: a special value that **is not data** (for example, −1 for marks or 0 for ages)."
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
         "recorregut d'una seqüència d'entrada",
         "recorrido de una secuencia de entrada"
        ],
        "nonum": true
       },
       "src": [
        "INICI_SEQÜÈNCIA\n    Llegir A\n    inici tractament\n    MENTRE A ≠ marca FER\n        tractar A\n        Llegir A\n    FI_MENTRE\n    final tractament\nFI_SEQÜÈNCIA",
        "INICI_SEQÜÈNCIA\n    Llegir A\n    inicio tratamiento\n    MENTRE A ≠ marca FER\n        tratar A\n        Llegir A\n    FI_MENTRE\n    final tratamiento\nFI_SEQÜÈNCIA"
       ]
      }
     ],
     [
      {
       "t": "html",
       "h": [
        "<figure class=\"ip-fig\" style=\"margin:0\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 420 230\" role=\"img\">\n<text class=\"dt db\" x=\"12\" y=\"20\">Entrada: 7  5.5  9  −1</text>\n<rect class=\"bxa\" x=\"12\" y=\"34\" width=\"70\" height=\"38\" rx=\"4\"></rect><text class=\"dm\" x=\"47\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"central\">7</text>\n<rect class=\"bx\" x=\"92\" y=\"34\" width=\"70\" height=\"38\" rx=\"4\"></rect><text class=\"dm\" x=\"127\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"central\">5.5</text>\n<rect class=\"bx\" x=\"172\" y=\"34\" width=\"70\" height=\"38\" rx=\"4\"></rect><text class=\"dm\" x=\"207\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"central\">9</text>\n<rect class=\"bxp\" x=\"252\" y=\"34\" width=\"70\" height=\"38\" rx=\"4\"></rect><text class=\"dm\" x=\"287\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"central\">−1</text>\n<text class=\"ds tq\" x=\"287\" y=\"88\" text-anchor=\"middle\">marca: no és una nota</text>\n<text class=\"dt\" x=\"12\" y=\"122\">1. <tspan font-weight=\"700\">Llegir</tspan> abans del bucle: A = 7</text>\n<text class=\"dt\" x=\"12\" y=\"146\">2. A ≠ −1 → tractar 7, <tspan font-weight=\"700\">Llegir</tspan>: A = 5.5</text>\n<text class=\"dt\" x=\"12\" y=\"170\">3. A ≠ −1 → tractar 5.5, <tspan font-weight=\"700\">Llegir</tspan>: A = 9</text>\n<text class=\"dt\" x=\"12\" y=\"194\">4. A ≠ −1 → tractar 9, <tspan font-weight=\"700\">Llegir</tspan>: A = −1</text>\n<text class=\"dt\" x=\"12\" y=\"218\">5. A = −1 → surt. La marca <tspan font-weight=\"700\">no</tspan> es tracta.</text>\n</svg></div>\n</figure>",
        "<figure class=\"ip-fig\" style=\"margin:0\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 420 230\" role=\"img\">\n<text class=\"dt db\" x=\"12\" y=\"20\">Entrada: 7  5.5  9  −1</text>\n<rect class=\"bxa\" x=\"12\" y=\"34\" width=\"70\" height=\"38\" rx=\"4\"></rect><text class=\"dm\" x=\"47\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"central\">7</text>\n<rect class=\"bx\" x=\"92\" y=\"34\" width=\"70\" height=\"38\" rx=\"4\"></rect><text class=\"dm\" x=\"127\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"central\">5.5</text>\n<rect class=\"bx\" x=\"172\" y=\"34\" width=\"70\" height=\"38\" rx=\"4\"></rect><text class=\"dm\" x=\"207\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"central\">9</text>\n<rect class=\"bxp\" x=\"252\" y=\"34\" width=\"70\" height=\"38\" rx=\"4\"></rect><text class=\"dm\" x=\"287\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"central\">−1</text>\n<text class=\"ds tq\" x=\"287\" y=\"88\" text-anchor=\"middle\">marca: no es una nota</text>\n<text class=\"dt\" x=\"12\" y=\"122\">1. <tspan font-weight=\"700\">Llegir</tspan> antes del bucle: A = 7</text>\n<text class=\"dt\" x=\"12\" y=\"146\">2. A ≠ −1 → tratar 7, <tspan font-weight=\"700\">Llegir</tspan>: A = 5.5</text>\n<text class=\"dt\" x=\"12\" y=\"170\">3. A ≠ −1 → tratar 5.5, <tspan font-weight=\"700\">Llegir</tspan>: A = 9</text>\n<text class=\"dt\" x=\"12\" y=\"194\">4. A ≠ −1 → tratar 9, <tspan font-weight=\"700\">Llegir</tspan>: A = −1</text>\n<text class=\"dt\" x=\"12\" y=\"218\">5. A = −1 → sale. La marca <tspan font-weight=\"700\">no</tspan> se trata.</text>\n</svg></div>\n</figure>",
        "<figure class=\"ip-fig\" style=\"margin:0\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 420 230\" role=\"img\">\n<text class=\"dt db\" x=\"12\" y=\"20\">Entrada: 7  5.5  9  −1</text>\n<rect class=\"bxa\" x=\"12\" y=\"34\" width=\"70\" height=\"38\" rx=\"4\"></rect><text class=\"dm\" x=\"47\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"central\">7</text>\n<rect class=\"bx\" x=\"92\" y=\"34\" width=\"70\" height=\"38\" rx=\"4\"></rect><text class=\"dm\" x=\"127\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"central\">5.5</text>\n<rect class=\"bx\" x=\"172\" y=\"34\" width=\"70\" height=\"38\" rx=\"4\"></rect><text class=\"dm\" x=\"207\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"central\">9</text>\n<rect class=\"bxp\" x=\"252\" y=\"34\" width=\"70\" height=\"38\" rx=\"4\"></rect><text class=\"dm\" x=\"287\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"central\">−1</text>\n<text class=\"ds tq\" x=\"287\" y=\"88\" text-anchor=\"middle\">marker: it is not a mark</text>\n<text class=\"dt\" x=\"12\" y=\"122\">1. <tspan font-weight=\"700\">Llegir</tspan> before the loop: A = 7</text>\n<text class=\"dt\" x=\"12\" y=\"146\">2. A ≠ −1 → process 7, <tspan font-weight=\"700\">Llegir</tspan>: A = 5.5</text>\n<text class=\"dt\" x=\"12\" y=\"170\">3. A ≠ −1 → process 5.5, <tspan font-weight=\"700\">Llegir</tspan>: A = 9</text>\n<text class=\"dt\" x=\"12\" y=\"194\">4. A ≠ −1 → process 9, <tspan font-weight=\"700\">Llegir</tspan>: A = −1</text>\n<text class=\"dt\" x=\"12\" y=\"218\">5. A = −1 → exits. The marker is <tspan font-weight=\"700\">not</tspan> processed.</text>\n</svg></div>\n</figure>"
       ]
      }
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "**Exemple de recorregut.** Mitjana d'unes notes que acaben amb −1. Traceu-lo i mireu com el capçal de l'entrada avança a cada `Llegir`:",
     "**Ejemplo de recorrido.** Media de unas notas que terminan con −1. Trazadlo y mirad cómo el cabezal de la entrada avanza en cada `Llegir`:",
     "**Traversal example.** Average of some marks ending with −1. Trace it and see how the input cursor advances at each `Llegir`:"
    ]
   },
   {
    "t": "code",
    "lang": "ps",
    "props": {
     "run": true,
     "trace": true,
     "in": "7 5.5 9 -1"
    },
    "src": [
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      nota          Real      Nota llegida (−1 marca el final)\n   S      mitjana       Real      Mitjana de les notes\n          suma          Real      Suma de les notes llegides\n          n             Natural   Quantes notes s'han llegit\n\nINICI_SEQÜÈNCIA\n    Llegir nota\n    suma ← 0\n    n ← 0\n    MENTRE nota ≠ −1 FER\n        suma ← suma + nota\n        n ← n + 1\n        Llegir nota\n    FI_MENTRE\n    SI n > 0 LLAVORS\n        mitjana ← suma / n\n        Escriure \"Mitjana: \", mitjana\n    ALTRAMENT\n        Escriure \"No hi ha cap nota\"\n    FI_SI\nFI_SEQÜÈNCIA",
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      nota          Real      Nota leída (−1 marca el final)\n   S      mitjana       Real      Media de las notas\n          suma          Real      Suma de las notas leídas\n          n             Natural   Cuántas notas se han leído\n\nINICI_SEQÜÈNCIA\n    Llegir nota\n    suma ← 0\n    n ← 0\n    MENTRE nota ≠ −1 FER\n        suma ← suma + nota\n        n ← n + 1\n        Llegir nota\n    FI_MENTRE\n    SI n > 0 LLAVORS\n        mitjana ← suma / n\n        Escriure \"Mitjana: \", mitjana\n    ALTRAMENT\n        Escriure \"No hi ha cap nota\"\n    FI_SI\nFI_SEQÜÈNCIA",
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      nota          Real      Mark read (−1 marks the end)\n   S      mitjana       Real      Average of the marks\n          suma          Real      Sum of the marks read\n          n             Natural   How many marks have been read\n\nINICI_SEQÜÈNCIA\n    Llegir nota\n    suma ← 0\n    n ← 0\n    MENTRE nota ≠ −1 FER\n        suma ← suma + nota\n        n ← n + 1\n        Llegir nota\n    FI_MENTRE\n    SI n > 0 LLAVORS\n        mitjana ← suma / n\n        Escriure \"Mitjana: \", mitjana\n    ALTRAMENT\n        Escriure \"No hi ha cap nota\"\n    FI_SI\nFI_SEQÜÈNCIA"
    ]
   },
   {
    "t": "p",
    "x": [
     "**Exemple de cerca.** «Hi ha algun suspès?». En trobar el primer suspès ja no cal llegir la resta: les dades que queden **no es llegeixen**.",
     "**Ejemplo de búsqueda.** «¿Hay algún suspenso?». Al encontrar el primer suspenso ya no hace falta leer el resto: los datos que quedan **no se leen**.",
     "**Search example.** “Is there any fail?”. Once the first fail is found there is no need to read the rest: the remaining data **are not read**."
    ]
   },
   {
    "t": "code",
    "lang": "ps",
    "props": {
     "run": true,
     "trace": true,
     "in": "7 8 4 9 -1"
    },
    "src": [
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      nota          Real      Nota llegida (−1 marca el final)\n          trobat        Lògic     Hem trobat un suspès?\n\nINICI_SEQÜÈNCIA\n    Llegir nota\n    trobat ← fals\n    MENTRE (nota ≠ −1) I NO trobat FER\n        SI nota < 5 LLAVORS\n            trobat ← cert\n        ALTRAMENT\n            Llegir nota\n        FI_SI\n    FI_MENTRE\n    SI trobat LLAVORS\n        Escriure \"Hi ha un suspès: \", nota\n    ALTRAMENT\n        Escriure \"Tothom ha aprovat\"\n    FI_SI\nFI_SEQÜÈNCIA",
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      nota          Real      Nota leída (−1 marca el final)\n          trobat        Lògic     ¿Hemos encontrado un suspenso?\n\nINICI_SEQÜÈNCIA\n    Llegir nota\n    trobat ← fals\n    MENTRE (nota ≠ −1) I NO trobat FER\n        SI nota < 5 LLAVORS\n            trobat ← cert\n        ALTRAMENT\n            Llegir nota\n        FI_SI\n    FI_MENTRE\n    SI trobat LLAVORS\n        Escriure \"Hi ha un suspès: \", nota\n    ALTRAMENT\n        Escriure \"Tothom ha aprovat\"\n    FI_SI\nFI_SEQÜÈNCIA",
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      nota          Real      Mark read (−1 marks the end)\n          trobat        Lògic     Have we found a fail?\n\nINICI_SEQÜÈNCIA\n    Llegir nota\n    trobat ← fals\n    MENTRE (nota ≠ −1) I NO trobat FER\n        SI nota < 5 LLAVORS\n            trobat ← cert\n        ALTRAMENT\n            Llegir nota\n        FI_SI\n    FI_MENTRE\n    SI trobat LLAVORS\n        Escriure \"Hi ha un suspès: \", nota\n    ALTRAMENT\n        Escriure \"Tothom ha aprovat\"\n    FI_SI\nFI_SEQÜÈNCIA"
    ]
   },
   {
    "t": "h",
    "x": [
     "Errors típics amb les seqüències",
     "Errores típicos con las secuencias",
     "Typical mistakes with sequences"
    ]
   },
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
      "Com s'evita",
      "Cómo se evita",
      "How to avoid it"
     ]
    ],
    "rows": [
     [
      [
       "Oblidar el `Llegir` (o l'`i ← i + 1`) dins el bucle",
       "Olvidar el `Llegir` (o el `i ← i + 1`) dentro del bucle",
       "Forgetting the `Llegir` (or the `i ← i + 1`) inside the loop"
      ],
      [
       "El capçal no es mou: **bucle infinit**",
       "El cabezal no se mueve: **bucle infinito**",
       "The cursor does not move: **infinite loop**"
      ],
      [
       "L'última acció del bucle d'un recorregut és sempre «obtenir següent»",
       "La última acción del bucle de un recorrido es siempre «obtener siguiente elemento»",
       "The last action of a traversal loop is always “get next element”"
      ]
     ],
     [
      [
       "Llegir només dins el bucle, al principi",
       "Leer solo dentro del bucle, al principio",
       "Reading only inside the loop, at the start"
      ],
      [
       "Es tracta la **marca** com si fos una dada (es compta el −1)",
       "Se trata la **marca** como si fuera un dato (se cuenta el −1)",
       "The **marker** is processed as if it were data (the −1 is counted)"
      ],
      [
       "Un `Llegir` abans del bucle i un altre al final",
       "Un `Llegir` antes del bucle y otro al final",
       "One `Llegir` before the loop and another at the end"
      ]
     ],
     [
      [
       "Inicialitzar l'acumulador dins el bucle",
       "Inicializar el acumulador dentro del bucle",
       "Initialising the accumulator inside the loop"
      ],
      [
       "Es reinicia a cada volta: només queda l'últim element",
       "Se reinicia en cada vuelta: solo queda el último elemento",
       "It is reset at each iteration: only the last element remains"
      ],
      [
       "«Inici tractament» va abans del MENTRE",
       "«Inicio tratamiento» va antes del MENTRE",
       "“Start processing” goes before the MENTRE"
      ]
     ],
     [
      [
       "A la cerca, avançar sempre",
       "En la búsqueda, avanzar siempre",
       "In a search, always advancing"
      ],
      [
       "El capçal deixa enrere l'element trobat",
       "El cabezal deja atrás el elemento encontrado",
       "The cursor moves past the element found"
      ],
      [
       "Avançar només a l'ALTRAMENT",
       "Avanzar solo en el ALTRAMENT",
       "Advance only in the ALTRAMENT"
      ]
     ],
     [
      [
       "Dividir per n sense comprovar-lo",
       "Dividir por n sin comprobarlo",
       "Dividing by n without checking it"
      ],
      [
       "Si la seqüència és buida (només la marca), divisió per zero",
       "Si la secuencia está vacía (solo la marca), división por cero",
       "If the sequence is empty (only the marker), division by zero"
      ],
      [
       "`SI n > 0 LLAVORS` abans de fer la mitjana",
       "`SI n > 0 LLAVORS` antes de calcular la media",
       "`SI n > 0 LLAVORS` before computing the average"
      ]
     ]
    ]
   }
  ],
  "t23-6": [
   {
    "t": "check",
    "ex": {
     "id": "t23-6-q1",
     "qb": [
      {
       "t": "p",
       "x": [
        "«Digues quantes persones del concert tenen més de 50 anys.» Quin esquema cal?",
        "«Di cuántas personas del concierto tienen más de 50 años.» ¿Qué esquema hace falta?",
        "“Say how many people at the concert are over 50.” Which scheme is needed?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      [
       "Cerca, perquè busquem persones de més de 50 anys",
       "Búsqueda, porque buscamos personas de más de 50 años",
       "Search, because we are looking for people over 50"
      ],
      [
       "Recorregut, perquè cal mirar totes les edats per comptar-les",
       "Recorrido, porque hay que mirar todas las edades para contarlas",
       "Traversal, because all the ages must be looked at to count them"
      ],
      [
       "Cap: n'hi ha prou amb un SI",
       "Ninguno: basta con un SI",
       "None: a SI is enough"
      ],
      [
       "Cerca amb dues banderes",
       "Búsqueda con dos banderas",
       "Search with two flags"
      ]
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "Per comptar cal passar per tots els elements: és un recorregut amb un comptador. Seria una cerca si la pregunta fos «hi ha algú de més de 50?».",
        "Para contar hay que pasar por todos los elementos: es un recorrido con un contador. Sería una búsqueda si la pregunta fuera «¿hay alguien de más de 50?».",
        "To count you must go through all the elements: it is a traversal with a counter. It would be a search if the question were “is there anyone over 50?”."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "t23-6-q2",
     "qb": [
      {
       "t": "p",
       "x": [
        "En un esquema de recorregut d'una seqüència d'entrada, on van els `Llegir`?",
        "En un esquema de recorrido de una secuencia de entrada, ¿dónde van los `Llegir`?",
        "In a traversal scheme of an input sequence, where do the `Llegir` go?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      [
       "Un abans del bucle i un altre com a última acció del bucle",
       "Uno antes del bucle y otro como última acción del bucle",
       "One before the loop and another as the last action of the loop"
      ],
      [
       "Només un, al principi del bucle",
       "Solo uno, al principio del bucle",
       "Only one, at the start of the loop"
      ],
      [
       "Només un, abans del bucle",
       "Solo uno, antes del bucle",
       "Only one, before the loop"
      ],
      [
       "Un abans del bucle i un altre després del FI_MENTRE",
       "Uno antes del bucle y otro después del FI_MENTRE",
       "One before the loop and another after the FI_MENTRE"
      ]
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "El primer obté el primer element; el de dins del bucle obté el següent. Així la marca mai no es tracta.",
        "El primero obtiene el primer elemento; el de dentro del bucle obtiene el siguiente. Así la marca nunca se trata.",
        "The first gets the first element; the one inside the loop gets the next. That way the marker is never processed."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "t23-6-q3",
     "qb": [
      {
       "t": "p",
       "x": [
        "Amb N1 = 30 i N2 = 32, què escriu l'algorisme correcte de «acabat en 3»?",
        "Con N1 = 30 y N2 = 32, ¿qué escribe el algoritmo correcto de «terminado en 3»?",
        "With N1 = 30 and N2 = 32, what does the correct “ends in 3” algorithm write?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "33",
      "30",
      "32",
      "−1"
     ],
     "answer": 3,
     "sol": [
      {
       "t": "p",
       "x": [
        "Cap dels nombres 30, 31 i 32 acaba en 3: la cerca és fallida i el resultat és la marca −1.",
        "Ninguno de los números 30, 31 y 32 termina en 3: la búsqueda es fallida y el resultado es la marca −1.",
        "None of the numbers 30, 31 and 32 ends in 3: the search is unsuccessful and the result is the marker −1."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "t23-6-q4",
     "qb": [
      {
       "t": "p",
       "x": [
        "Per calcular el producte 1 · 2 · … · N, quin ha de ser l'inici del tractament?",
        "Para calcular el producto 1 · 2 · … · N, ¿cuál debe ser el inicio del tratamiento?",
        "To compute the product 1 · 2 · … · N, what must the start of processing be?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "`p ← 0`",
      "`p ← N`",
      "`p ← 1`",
      [
       "No cal inicialitzar-lo",
       "No hace falta inicializarlo",
       "It does not need initialising"
      ]
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "L'element neutre del producte és 1. Amb 0, el resultat seria sempre 0.",
        "El elemento neutro del producto es 1. Con 0, el resultado sería siempre 0.",
        "The identity element of the product is 1. With 0, the result would always be 0."
       ]
      }
     ]
    }
   }
  ],
  "t23-7": [
   {
    "t": "summary",
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Una **seqüència** té primer, últim, actual i següent; el **capçal** marca l'element actual.",
        "Una **secuencia** tiene primero, último, actual y siguiente; el **cabezal** marca el elemento actual.",
        "A **sequence** has a first, a last, a current and a next element; the **cursor** marks the current element."
       ],
       [
        "Disseny sistemàtic: **identificar la seqüència → triar l'esquema → refinar**.",
        "Diseño sistemático: **identificar la secuencia → elegir el esquema → refinar**.",
        "Systematic design: **identify the sequence → choose the scheme → refine**."
       ],
       [
        "**Recorregut**: es tracten tots els elements; a cada volta, el resultat recull la part que queda a l'esquerra del capçal.",
        "**Recorrido**: se tratan todos los elementos; en cada vuelta, el resultado recoge la parte que queda a la izquierda del cabezal.",
        "**Traversal**: all the elements are processed; at each iteration, the result collects the part to the left of the cursor."
       ],
       [
        "**Cerca**: s'atura quan es troba l'element (`trobat ← cert`) o quan s'acaba la seqüència; **només s'avança a l'ALTRAMENT**.",
        "**Búsqueda**: se detiene cuando se encuentra el elemento (`trobat ← cert`) o cuando se termina la secuencia; **solo se avanza en el ALTRAMENT**.",
        "**Search**: it stops when the element is found (`trobat ← cert`) or when the sequence ends; **you only advance in the ALTRAMENT**."
       ],
       [
        "A les seqüències d'entrada, «obtenir element» és **Llegir** (un abans del bucle i un al final) i la fi es detecta amb una **marca** que no es tracta.",
        "En las secuencias de entrada, «obtener elemento» es **Llegir** (uno antes del bucle y otro al final) y el fin se detecta con una **marca** que no se trata.",
        "In input sequences, “get element” is **Llegir** (one before the loop and another at the end) and the end is detected with a **marker** that is not processed."
       ]
      ]
     }
    ]
   }
  ]
 },
 "examEnd": [
  {
   "ref": "ps-mitjana"
  },
  {
   "ref": "ps-maxseq"
  },
  {
   "ref": "ps-acaba3"
  },
  {
   "ref": "ps-primer"
  },
  {
   "ref": "pq-esq",
   "seed": 10
  }
 ]
};
