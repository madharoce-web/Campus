// Generat per tools/kit-import/prog.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Què és un algorisme, característiques, pseudocodi, l'ordinador com a autòmat i les fases d'un programa.",
    "Qué es un algoritmo, características, pseudocódigo, el ordenador como autómata y las fases de un programa."
   ]
  },
  {
   "t": "list",
   "items": [
    [
     "**Setmana:** 2 (14–20 de setembre) · Evolució i conceptes bàsics",
     "**Semana:** 2 (14–20 de septiembre) · Evolución y conceptos básicos"
    ],
    [
     "**Documentació:** Apunts del professorat: diapositives 12–30",
     "**Documentación:** Apuntes del profesorado: diapositivas 12–30"
    ],
    [
     "**Llibre de suport:** Fonaments de programació (Ed. UOC), pàg. 15–29",
     "**Libro de apoyo:** Fonaments de programació (Ed. UOC), pág. 15–29"
    ]
   ]
  },
  {
   "t": "p",
   "x": [
    "Abans d'escriure cap línia de C++ cal saber **què** volem que faci l'ordinador i **en quin ordre**. Això és un algorisme. Aquest tema defineix què és, quines propietats ha de tenir i com l'escrivim en pseudocodi.",
    "Antes de escribir ninguna línea de C++ hay que saber **qué** queremos que haga el ordenador y **en qué orden**. Eso es un algoritmo. Este tema define qué es, qué propiedades debe tener y cómo lo escribimos en pseudocódigo."
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
       "Definir **algorisme** i reconèixer quan una «recepta» no ho és.",
       "Definir **algoritmo** y reconocer cuándo una «receta» no lo es."
      ],
      [
       "Fer servir els conceptes d'**entorn, acció, procés i processador**.",
       "Utilizar los conceptos de **entorno, acción, proceso y procesador**."
      ],
      [
       "Comprovar les quatre **característiques**: finit, definit, eficient i simple.",
       "Comprobar las cuatro **características**: finito, definido, eficiente y simple."
      ],
      [
       "Llegir i escriure un algorisme en **pseudocodi** seguint les convencions del curs.",
       "Leer y escribir un algoritmo en **pseudocódigo** siguiendo las convenciones del curso."
      ],
      [
       "Explicar les **fases d'elaboració** d'un programa i l'equació **programa = algorisme + estructures de dades**.",
       "Explicar las **fases de elaboración** de un programa y la ecuación **programa = algoritmo + estructuras de datos**."
      ]
     ]
    }
   ]
  }
 ],
 "sections": {
  "t21-1": [
   {
    "t": "def",
    "title": [
     "Definició",
     "Definición"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Algorisme**: seqüència **ordenada** i **finita** d'accions que ens dona un mètode (procediment) per resoldre un problema.",
       "**Algoritmo**: secuencia **ordenada** y **finita** de acciones que nos proporciona un método (procedimiento) para resolver un problema."
      ]
     }
    ]
   },
   {
    "t": "p",
    "x": [
     "Normalment l'algorisme parteix d'unes **dades d'entrada** (que poden canviar d'una vegada a l'altra) i, aplicant sempre el mateix procediment, arriba als **resultats** o dades de sortida. És una recepta: la mateixa recepta serveix per fer el pastís per a 4 o per a 8 persones.",
     "Normalmente el algoritmo parte de unos **datos de entrada** (que pueden cambiar de una vez a otra) y, aplicando siempre el mismo procedimiento, llega a los **resultados** o datos de salida. Es una receta: la misma receta sirve para hacer el pastel para 4 o para 8 personas."
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:560px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 170\" role=\"img\" aria-label=\"Un algorisme quotidià: quants dies falten per al vostre aniversari. Canviant les dades d&#x27;entrada, el mateix procediment dona el resultat per a qualsevol data.\">\n<rect class=\"bxq\" x=\"20\" y=\"50\" width=\"200\" height=\"70\" rx=\"8\"></rect><text class=\"dt db\" x=\"120\" y=\"74\" text-anchor=\"middle\">Dades d'entrada</text><text class=\"ds\" x=\"120\" y=\"94\" text-anchor=\"middle\">data d'avui: 21/10</text><text class=\"ds\" x=\"120\" y=\"110\" text-anchor=\"middle\">aniversari: 14/12</text>\n<path class=\"ln\" d=\"M220 85 H288\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"295\" y=\"30\" width=\"270\" height=\"110\" rx=\"8\"></rect><text class=\"dt db\" x=\"430\" y=\"56\" text-anchor=\"middle\">Algorisme</text><text class=\"ds\" x=\"430\" y=\"80\" text-anchor=\"middle\">1. dies que queden d'aquest mes</text><text class=\"ds\" x=\"430\" y=\"97\" text-anchor=\"middle\">2. sumar els dies dels mesos sencers</text><text class=\"ds\" x=\"430\" y=\"114\" text-anchor=\"middle\">3. sumar el dia de l'aniversari</text>\n<path class=\"ln\" d=\"M565 85 H633\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"640\" y=\"50\" width=\"200\" height=\"70\" rx=\"8\"></rect><text class=\"dt db\" x=\"740\" y=\"74\" text-anchor=\"middle\">Resultats</text><text class=\"ds\" x=\"740\" y=\"94\" text-anchor=\"middle\">10 + 30 + 14 =</text><text class=\"ds\" x=\"740\" y=\"110\" text-anchor=\"middle\">54 dies</text>\n</svg></div>\n<figcaption>Un algorisme quotidià: quants dies falten per al vostre aniversari. Canviant les dades d'entrada, el mateix procediment dona el resultat per a qualsevol data.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:560px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 170\" role=\"img\" aria-label=\"Un algoritmo cotidiano: cuántos días faltan para vuestro cumpleaños. Cambiando los datos de entrada, el mismo procedimiento da el resultado para cualquier fecha.\">\n<rect class=\"bxq\" x=\"20\" y=\"50\" width=\"200\" height=\"70\" rx=\"8\"></rect><text class=\"dt db\" x=\"120\" y=\"74\" text-anchor=\"middle\">Datos de entrada</text><text class=\"ds\" x=\"120\" y=\"94\" text-anchor=\"middle\">fecha de hoy: 21/10</text><text class=\"ds\" x=\"120\" y=\"110\" text-anchor=\"middle\">cumpleaños: 14/12</text>\n<path class=\"ln\" d=\"M220 85 H288\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"295\" y=\"30\" width=\"270\" height=\"110\" rx=\"8\"></rect><text class=\"dt db\" x=\"430\" y=\"56\" text-anchor=\"middle\">Algoritmo</text><text class=\"ds\" x=\"430\" y=\"80\" text-anchor=\"middle\">1. días que quedan de este mes</text><text class=\"ds\" x=\"430\" y=\"97\" text-anchor=\"middle\">2. sumar los días de los meses enteros</text><text class=\"ds\" x=\"430\" y=\"114\" text-anchor=\"middle\">3. sumar el día del cumpleaños</text>\n<path class=\"ln\" d=\"M565 85 H633\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"640\" y=\"50\" width=\"200\" height=\"70\" rx=\"8\"></rect><text class=\"dt db\" x=\"740\" y=\"74\" text-anchor=\"middle\">Resultados</text><text class=\"ds\" x=\"740\" y=\"94\" text-anchor=\"middle\">10 + 30 + 14 =</text><text class=\"ds\" x=\"740\" y=\"110\" text-anchor=\"middle\">54 días</text>\n</svg></div>\n<figcaption>Un algoritmo cotidiano: cuántos días faltan para vuestro cumpleaños. Cambiando los datos de entrada, el mismo procedimiento da el resultado para cualquier fecha.</figcaption>\n</figure>"
    ]
   },
   {
    "t": "p",
    "x": [
     "Fem servir algorismes constantment: conduir un cotxe, posar una rentadora, construir un vaixell de paper, fer una divisió a mà, un truc de màgia… La diferència és com els hem après: per observació, intuïció, explicació o estudi.",
     "Utilizamos algoritmos constantemente: conducir un coche, poner una lavadora, construir un barco de papel, hacer una división a mano, un truco de magia… La diferencia es cómo los hemos aprendido: por observación, intuición, explicación o estudio."
    ]
   },
   {
    "t": "h",
    "x": [
     "Conceptes relacionats",
     "Conceptos relacionados"
    ]
   },
   {
    "t": "p",
    "x": [
     "El llibre de referència fa servir quatre paraules que convé tenir clares. L'exemple de la rentadora les fa evidents, i al costat hi ha el mateix per a un programa:",
     "El libro de referencia utiliza cuatro palabras que conviene tener claras. El ejemplo de la lavadora las hace evidentes, y al lado aparece lo mismo para un programa:"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Concepte",
      "Concepto"
     ],
     [
      "Definició",
      "Definición"
     ],
     [
      "A la rentadora",
      "En la lavadora"
     ],
     [
      "Al programa de les pilotes",
      "En el programa de las pelotas"
     ]
    ],
    "rows": [
     [
      [
       "**Entorn**",
       "**Entorno**"
      ],
      [
       "Conjunt d'objectes necessaris per fer la tasca. L'algorisme en fa canviar l'estat.",
       "Conjunto de objetos necesarios para realizar la tarea. El algoritmo hace cambiar su estado."
      ],
      [
       "La roba, l'aigua, el sabó, el tambor",
       "La ropa, el agua, el jabón, el tambor"
      ],
      [
       "Les variables `QNT`, `G`, `M`, `P`",
       "Las variables `QNT`, `G`, `M`, `P`"
      ]
     ],
     [
      [
       "**Acció**",
       "**Acción**"
      ],
      [
       "Esdeveniment finit en el temps, amb un efecte definit i previst sobre l'entorn.",
       "Suceso finito en el tiempo, con un efecto definido y previsto sobre el entorno."
      ],
      [
       "«Omplir d'aigua», «centrifugar»",
       "«Llenar de agua», «centrifugar»"
      ],
      "`G ← QNT ‖ 200`"
     ],
     [
      [
       "**Procés**",
       "**Proceso**"
      ],
      [
       "L'execució d'una o diverses accions.",
       "La ejecución de una o varias acciones."
      ],
      [
       "Tot un cicle de rentat",
       "Todo un ciclo de lavado"
      ],
      [
       "Una execució del programa amb 1.370 pilotes",
       "Una ejecución del programa con 1.370 pelotas"
      ]
     ],
     [
      [
       "**Processador**",
       "**Procesador**"
      ],
      [
       "Entitat capaç d'entendre i executar l'algorisme.",
       "Entidad capaz de entender y ejecutar el algoritmo."
      ],
      [
       "La rentadora",
       "La lavadora"
      ],
      [
       "L'ordinador (o tu, fent-ho amb paper i llapis)",
       "El ordenador (o tú, haciéndolo con papel y lápiz)"
      ]
     ]
    ]
   }
  ],
  "t21-2": [
   {
    "t": "p",
    "x": [
     "No qualsevol llista d'instruccions és un algorisme. Ha de complir quatre característiques. La manera més ràpida d'entendre-les és veure un contraexemple de cadascuna:",
     "No cualquier lista de instrucciones es un algoritmo. Debe cumplir cuatro características. La forma más rápida de entenderlas es ver un contraejemplo de cada una:"
    ]
   },
   {
    "t": "table",
    "head": [
     "Característica",
     [
      "Significat",
      "Significado"
     ],
     [
      "Contraexemple (no és un algorisme)",
      "Contraejemplo (no es un algoritmo)"
     ]
    ],
    "rows": [
     [
      [
       "**Finit**",
       "**Finito**"
      ],
      [
       "Un nombre finit d'accions: s'acaba.",
       "Un número finito de acciones: termina."
      ],
      [
       "«Escriu els nombres naturals»: no acaba mai.",
       "«Escribe los números naturales»: no termina nunca."
      ]
     ],
     [
      [
       "**Definibilitat**",
       "**Definibilidad**"
      ],
      [
       "Sense ambigüitats: cada pas és concret i precís.",
       "Sin ambigüedades: cada paso es concreto y preciso."
      ],
      [
       "«Afegiu-hi sal al gust» o «cuineu-ho una estona»: dues persones ho farien diferent.",
       "«Añadid sal al gusto» o «cocinadlo un rato»: dos personas lo harían de forma diferente."
      ]
     ],
     [
      [
       "**Eficient**",
       "**Eficiente**"
      ],
      [
       "Correcte i amb el mínim de recursos: memòria i temps.",
       "Correcto y con el mínimo de recursos: memoria y tiempo."
      ],
      [
       "Per saber si 97 és primer, provar de dividir-lo per tots els nombres fins a un milió.",
       "Para saber si 97 es primo, probar a dividirlo por todos los números hasta un millón."
      ]
     ],
     [
      [
       "**Simplicitat**",
       "**Simplicidad**"
      ],
      [
       "Sense complicacions innecessàries: el mínim de construccions.",
       "Sin complicaciones innecesarias: el mínimo de construcciones."
      ],
      [
       "Deu condicions niades per fer el que fa una sola divisió entera.",
       "Diez condiciones anidadas para hacer lo que hace una sola división entera."
      ]
     ]
    ]
   },
   {
    "t": "h",
    "x": [
     "Eficiència: dos algorismes correctes, un de més eficient",
     "Eficiencia: dos algoritmos correctos, uno más eficiente"
    ]
   },
   {
    "t": "p",
    "x": [
     "Volem la suma 1 + 2 + … + N. Els dos algorismes de sota donen el mateix resultat, però un fa N voltes i l'altre una sola operació (la fórmula de Gauss, N·(N+1)/2). Executeu-los amb N = 100:",
     "Queremos la suma 1 + 2 + … + N. Los dos algoritmos de abajo dan el mismo resultado, pero uno da N vueltas y el otro hace una sola operación (la fórmula de Gauss, N·(N+1)/2). Ejecutadlos con N = 100:"
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
        "in": "5",
        "strip": "i,1,N"
       },
       "src": [
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N             Natural   Fins on sumem\n   S      S             Natural   La suma 1 + 2 + … + N\n          i             Natural   Nombre actual\n\nINICI_SEQÜÈNCIA\n    Llegir N\n    S ← 0\n    i ← 1\n    MENTRE i ≤ N FER\n        S ← S + i\n        i ← i + 1\n    FI_MENTRE\n    Escriure S\nFI_SEQÜÈNCIA",
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N             Natural   Hasta dónde sumamos\n   S      S             Natural   La suma 1 + 2 + … + N\n          i             Natural   Número actual\n\nINICI_SEQÜÈNCIA\n    Llegir N\n    S ← 0\n    i ← 1\n    MENTRE i ≤ N FER\n        S ← S + i\n        i ← i + 1\n    FI_MENTRE\n    Escriure S\nFI_SEQÜÈNCIA"
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
        "in": "5"
       },
       "src": [
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N             Natural   Fins on sumem\n   S      S             Natural   La suma 1 + 2 + … + N\n\nINICI_SEQÜÈNCIA\n    Llegir N\n    S ← N · (N + 1) ‖ 2\n    Escriure S\nFI_SEQÜÈNCIA",
        "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      N             Natural   Hasta dónde sumamos\n   S      S             Natural   La suma 1 + 2 + … + N\n\nINICI_SEQÜÈNCIA\n    Llegir N\n    S ← N · (N + 1) ‖ 2\n    Escriure S\nFI_SEQÜÈNCIA"
       ]
      }
     ]
    ]
   },
   {
    "t": "table",
    "head": [
     "N",
     [
      "Operacions de l'algorisme amb bucle (≈ 2N)",
      "Operaciones del algoritmo con bucle (≈ 2N)"
     ],
     [
      "Operacions amb la fórmula",
      "Operaciones con la fórmula"
     ]
    ],
    "rows": [
     [
      "10",
      "≈ 20",
      "3"
     ],
     [
      "1.000",
      "≈ 2.000",
      "3"
     ],
     [
      "1.000.000",
      "≈ 2.000.000",
      "3"
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Tots dos són **eficaços** (correctes); el segon és molt més **eficient**. Amb el botó **Traça pas a pas** podeu comptar les voltes del primer.",
     "Ambos son **eficaces** (correctos); el segundo es mucho más **eficiente**. Con el botón **Traza paso a paso** podéis contar las vueltas del primero."
    ]
   }
  ],
  "t21-3": [
   {
    "t": "p",
    "x": [
     "Un **llenguatge** és un conjunt de símbols i normes per comunicar-nos. Té dues menes de normes:",
     "Un **lenguaje** es un conjunto de símbolos y normas para comunicarnos. Tiene dos tipos de normas:"
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-cols\">\n<div class=\"ip-card\"><h4>Sintaxi: com es diu</h4><p>Les regles de forma. <code>Àrea ← Base ·</code> té un error de <b>sintaxi</b>: falta un operand. El traductor el detecta.</p></div>\n<div class=\"ip-card\"><h4>Semàntica: què es vol dir</h4><p>El significat. <code>Àrea ← Base + Altura</code> està ben escrit, però l'àrea d'un rectangle no és una suma: és un error de <b>semàntica</b>. Cap traductor el detecta; el detecten les <b>proves</b>.</p></div>\n</div>",
     "<div class=\"ip-cols\">\n<div class=\"ip-card\"><h4>Sintaxis: cómo se dice</h4><p>Las reglas de forma. <code>Àrea ← Base ·</code> tiene un error de <b>sintaxis</b>: falta un operando. El traductor lo detecta.</p></div>\n<div class=\"ip-card\"><h4>Semántica: qué se quiere decir</h4><p>El significado. <code>Àrea ← Base + Altura</code> está bien escrito, pero el área de un rectángulo no es una suma: es un error de <b>semántica</b>. Ningún traductor lo detecta; lo detectan las <b>pruebas</b>.</p></div>\n</div>"
    ]
   },
   {
    "t": "p",
    "x": [
     "Per expressar els algorismes fem servir un **llenguatge algorísmic** o **pseudocodi**: un llenguatge formal, sense ambigüitats, però independent de qualsevol llenguatge de programació concret. El pseudocodi del curs segueix quatre convencions:",
     "Para expresar los algoritmos utilizamos un **lenguaje algorítmico** o **pseudocódigo**: un lenguaje formal, sin ambigüedades, pero independiente de cualquier lenguaje de programación concreto. El pseudocódigo del curso sigue cuatro convenciones:"
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:620px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 250\" role=\"img\" aria-label=\"Les quatre convencions del pseudocodi del curs sobre un mateix algorisme.\">\n<rect class=\"bxg\" x=\"20\" y=\"14\" width=\"440\" height=\"222\" rx=\"6\"></rect>\n<text class=\"dm\" x=\"36\" y=\"40\"><tspan class=\"ta\" font-weight=\"700\">INICI_SEQÜÈNCIA</tspan></text>\n<text class=\"dm\" x=\"66\" y=\"64\">Llegir Base, Altura</text>\n<text class=\"dm\" x=\"66\" y=\"88\"><tspan class=\"ta\" font-weight=\"700\">SI</tspan> Base ≥ 0 <tspan class=\"ta\" font-weight=\"700\">I</tspan> Altura ≥ 0 <tspan class=\"ta\" font-weight=\"700\">LLAVORS</tspan></text>\n<text class=\"dm\" x=\"96\" y=\"112\">Àrea ← Base · Altura</text>\n<text class=\"dm\" x=\"96\" y=\"136\">Escriure \"Àrea: \", Àrea</text>\n<text class=\"dm\" x=\"66\" y=\"160\"><tspan class=\"ta\" font-weight=\"700\">ALTRAMENT</tspan></text>\n<text class=\"dm\" x=\"96\" y=\"184\">Escriure \"Dades incorrectes\"</text>\n<text class=\"dm\" x=\"66\" y=\"208\"><tspan class=\"ta\" font-weight=\"700\">FI_SI</tspan></text>\n<text class=\"dm\" x=\"36\" y=\"230\"><tspan class=\"ta\" font-weight=\"700\">FI_SEQÜÈNCIA</tspan></text>\n<path class=\"lna\" d=\"M470 40 H520\"></path><text class=\"dt\" x=\"530\" y=\"34\">1. Principi i fi de cada seqüència</text><text class=\"ds\" x=\"530\" y=\"51\">ben indicats: INICI_SEQÜÈNCIA … FI_SEQÜÈNCIA</text>\n<path class=\"lna\" d=\"M470 92 H520\"></path><text class=\"dt\" x=\"530\" y=\"88\">2. Paraules clau en MAJÚSCULES</text><text class=\"ds\" x=\"530\" y=\"105\">SI, LLAVORS, ALTRAMENT, FI_SI, MENTRE…</text>\n<path class=\"lna\" d=\"M470 140 H520\"></path><text class=\"dt\" x=\"530\" y=\"136\">3. Accions d'una mateixa seqüència</text><text class=\"ds\" x=\"530\" y=\"153\">alineades a l'esquerra (mateixa columna)</text>\n<path class=\"lna\" d=\"M470 188 H520\"></path><text class=\"dt\" x=\"530\" y=\"184\">4. Sagnat de les accions controlades</text><text class=\"ds\" x=\"530\" y=\"201\">el que depèn del SI va més a la dreta</text>\n<path class=\"lnd\" d=\"M66 72 V150\"></path><path class=\"lnd\" d=\"M96 120 V128\"></path>\n</svg></div>\n<figcaption>Les quatre convencions del pseudocodi del curs sobre un mateix algorisme.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:620px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 250\" role=\"img\" aria-label=\"Las cuatro convenciones del pseudocódigo del curso sobre un mismo algoritmo.\">\n<rect class=\"bxg\" x=\"20\" y=\"14\" width=\"440\" height=\"222\" rx=\"6\"></rect>\n<text class=\"dm\" x=\"36\" y=\"40\"><tspan class=\"ta\" font-weight=\"700\">INICI_SEQÜÈNCIA</tspan></text>\n<text class=\"dm\" x=\"66\" y=\"64\">Llegir Base, Altura</text>\n<text class=\"dm\" x=\"66\" y=\"88\"><tspan class=\"ta\" font-weight=\"700\">SI</tspan> Base ≥ 0 <tspan class=\"ta\" font-weight=\"700\">I</tspan> Altura ≥ 0 <tspan class=\"ta\" font-weight=\"700\">LLAVORS</tspan></text>\n<text class=\"dm\" x=\"96\" y=\"112\">Àrea ← Base · Altura</text>\n<text class=\"dm\" x=\"96\" y=\"136\">Escriure \"Àrea: \", Àrea</text>\n<text class=\"dm\" x=\"66\" y=\"160\"><tspan class=\"ta\" font-weight=\"700\">ALTRAMENT</tspan></text>\n<text class=\"dm\" x=\"96\" y=\"184\">Escriure \"Dades incorrectes\"</text>\n<text class=\"dm\" x=\"66\" y=\"208\"><tspan class=\"ta\" font-weight=\"700\">FI_SI</tspan></text>\n<text class=\"dm\" x=\"36\" y=\"230\"><tspan class=\"ta\" font-weight=\"700\">FI_SEQÜÈNCIA</tspan></text>\n<path class=\"lna\" d=\"M470 40 H520\"></path><text class=\"dt\" x=\"530\" y=\"34\">1. Principio y fin de cada secuencia</text><text class=\"ds\" x=\"530\" y=\"51\">bien indicados: INICI_SEQÜÈNCIA … FI_SEQÜÈNCIA</text>\n<path class=\"lna\" d=\"M470 92 H520\"></path><text class=\"dt\" x=\"530\" y=\"88\">2. Palabras clave en MAYÚSCULAS</text><text class=\"ds\" x=\"530\" y=\"105\">SI, LLAVORS, ALTRAMENT, FI_SI, MENTRE…</text>\n<path class=\"lna\" d=\"M470 140 H520\"></path><text class=\"dt\" x=\"530\" y=\"136\">3. Acciones de una misma secuencia</text><text class=\"ds\" x=\"530\" y=\"153\">alineadas a la izquierda (misma columna)</text>\n<path class=\"lna\" d=\"M470 188 H520\"></path><text class=\"dt\" x=\"530\" y=\"184\">4. Sangría de las acciones controladas</text><text class=\"ds\" x=\"530\" y=\"201\">lo que depende del SI va más a la derecha</text>\n<path class=\"lnd\" d=\"M66 72 V150\"></path><path class=\"lnd\" d=\"M96 120 V128\"></path>\n</svg></div>\n<figcaption>Las cuatro convenciones del pseudocódigo del curso sobre un mismo algoritmo.</figcaption>\n</figure>"
    ]
   },
   {
    "t": "p",
    "x": [
     "Hi ha altres notacions algorísmiques: el llenguatge natural, els **ordinogrames** (diagrames de flux), els diagrames de Nassi-Shneiderman, les taules de decisió… Les més esteses han estat els ordinogrames (històricament) i el pseudocodi (més actual). Aquí teniu el mateix algorisme en tres notacions:",
     "Existen otras notaciones algorítmicas: el lenguaje natural, los **ordinogramas** (diagramas de flujo), los diagramas de Nassi-Shneiderman, las tablas de decisión… Las más extendidas han sido los ordinogramas (históricamente) y el pseudocódigo (más actual). Aquí tenéis el mismo algoritmo en tres notaciones:"
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-cols\">\n<div class=\"ip-card\"><h4>Llenguatge natural</h4><p>Llegeix la base i l'altura. Si totes dues són positives o zero, calcula l'àrea multiplicant-les i escriu-la; si no, avisa que les dades són incorrectes.</p><p class=\"m-sub\" style=\"font-size:.82rem\">Fàcil d'entendre, però pot ser ambigu.</p></div>\n<figure class=\"ip-card ip-fig\" style=\"margin:0\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 300 300\" role=\"img\" aria-label=\"Ordinograma (simplificat: a la branca V també s&#x27;escriu l&#x27;àrea).\">\n<rect class=\"bxg\" x=\"95\" y=\"6\" width=\"110\" height=\"26\" rx=\"13\"></rect><text class=\"dt db\" x=\"150\" y=\"19\" text-anchor=\"middle\" dominant-baseline=\"central\">Inici</text>\n<path class=\"ln\" d=\"M150 32 V48\" marker-end=\"url(#ah)\"></path>\n<path class=\"bxq\" d=\"M90 52 H225 L210 80 H75 Z\"></path><text class=\"dt\" x=\"150\" y=\"66\" text-anchor=\"middle\" dominant-baseline=\"central\">Llegir Base, Altura</text>\n<path class=\"ln\" d=\"M150 80 V96\" marker-end=\"url(#ah)\"></path>\n<path class=\"bxa\" d=\"M150 100 L230 132 L150 164 L70 132 Z\"></path><text class=\"dt\" x=\"150\" y=\"132\" text-anchor=\"middle\" dominant-baseline=\"central\">Base ≥ 0 I Altura ≥ 0</text>\n<path class=\"ln\" d=\"M70 132 H40 V186\" marker-end=\"url(#ah)\"></path><text class=\"ds\" x=\"52\" y=\"124\" text-anchor=\"middle\">V</text>\n<path class=\"ln\" d=\"M230 132 H260 V186\" marker-end=\"url(#ah)\"></path><text class=\"ds\" x=\"248\" y=\"124\" text-anchor=\"middle\">F</text>\n<rect class=\"bxo\" x=\"6\" y=\"190\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"66\" y=\"205\" text-anchor=\"middle\" dominant-baseline=\"central\" style=\"font-size:11px\">Àrea ← B · A</text>\n<path class=\"bxq\" d=\"M150 194 H294 L284 220 H160 Z\" transform=\"translate(-6 0)\"></path><text class=\"ds\" x=\"221\" y=\"207\" text-anchor=\"middle\" dominant-baseline=\"central\">Escriure \"incorrectes\"</text>\n<path class=\"ln\" d=\"M66 220 V250 H146\"></path><path class=\"ln\" d=\"M226 220 V250 H154\"></path><circle cx=\"150\" cy=\"250\" r=\"3\" class=\"fk\"></circle>\n<path class=\"ln\" d=\"M150 250 V266\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxg\" x=\"95\" y=\"270\" width=\"110\" height=\"26\" rx=\"13\"></rect><text class=\"dt db\" x=\"150\" y=\"283\" text-anchor=\"middle\" dominant-baseline=\"central\">Fi</text>\n</svg></div>\n<figcaption>Ordinograma (simplificat: a la branca V també s'escriu l'àrea).</figcaption>\n</figure>\n<div class=\"ip-card\"><h4>Pseudocodi</h4><p>Precís, compacte i molt proper a un llenguatge de programació. És la notació que fem servir al curs i la que es demana a l'examen.</p></div>\n</div>",
     "<div class=\"ip-cols\">\n<div class=\"ip-card\"><h4>Lenguaje natural</h4><p>Lee la base y la altura. Si ambas son positivas o cero, calcula el área multiplicándolas y escríbela; si no, avisa de que los datos son incorrectos.</p><p class=\"m-sub\" style=\"font-size:.82rem\">Fácil de entender, pero puede ser ambiguo.</p></div>\n<figure class=\"ip-card ip-fig\" style=\"margin:0\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 300 300\" role=\"img\" aria-label=\"Ordinograma (simplificado: en la rama V también se escribe el área).\">\n<rect class=\"bxg\" x=\"95\" y=\"6\" width=\"110\" height=\"26\" rx=\"13\"></rect><text class=\"dt db\" x=\"150\" y=\"19\" text-anchor=\"middle\" dominant-baseline=\"central\">Inicio</text>\n<path class=\"ln\" d=\"M150 32 V48\" marker-end=\"url(#ah)\"></path>\n<path class=\"bxq\" d=\"M90 52 H225 L210 80 H75 Z\"></path><text class=\"dt\" x=\"150\" y=\"66\" text-anchor=\"middle\" dominant-baseline=\"central\">Llegir Base, Altura</text>\n<path class=\"ln\" d=\"M150 80 V96\" marker-end=\"url(#ah)\"></path>\n<path class=\"bxa\" d=\"M150 100 L230 132 L150 164 L70 132 Z\"></path><text class=\"dt\" x=\"150\" y=\"132\" text-anchor=\"middle\" dominant-baseline=\"central\">Base ≥ 0 I Altura ≥ 0</text>\n<path class=\"ln\" d=\"M70 132 H40 V186\" marker-end=\"url(#ah)\"></path><text class=\"ds\" x=\"52\" y=\"124\" text-anchor=\"middle\">V</text>\n<path class=\"ln\" d=\"M230 132 H260 V186\" marker-end=\"url(#ah)\"></path><text class=\"ds\" x=\"248\" y=\"124\" text-anchor=\"middle\">F</text>\n<rect class=\"bxo\" x=\"6\" y=\"190\" width=\"120\" height=\"30\" rx=\"3\"></rect><text class=\"dm\" x=\"66\" y=\"205\" text-anchor=\"middle\" dominant-baseline=\"central\" style=\"font-size:11px\">Àrea ← B · A</text>\n<path class=\"bxq\" d=\"M150 194 H294 L284 220 H160 Z\" transform=\"translate(-6 0)\"></path><text class=\"ds\" x=\"221\" y=\"207\" text-anchor=\"middle\" dominant-baseline=\"central\">Escriure \"incorrectes\"</text>\n<path class=\"ln\" d=\"M66 220 V250 H146\"></path><path class=\"ln\" d=\"M226 220 V250 H154\"></path><circle cx=\"150\" cy=\"250\" r=\"3\" class=\"fk\"></circle>\n<path class=\"ln\" d=\"M150 250 V266\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxg\" x=\"95\" y=\"270\" width=\"110\" height=\"26\" rx=\"13\"></rect><text class=\"dt db\" x=\"150\" y=\"283\" text-anchor=\"middle\" dominant-baseline=\"central\">Fin</text>\n</svg></div>\n<figcaption>Ordinograma (simplificado: en la rama V también se escribe el área).</figcaption>\n</figure>\n<div class=\"ip-card\"><h4>Pseudocódigo</h4><p>Preciso, compacto y muy cercano a un lenguaje de programación. Es la notación que utilizamos en el curso y la que se pide en el examen.</p></div>\n</div>"
    ]
   }
  ],
  "t21-4": [
   {
    "t": "p",
    "x": [
     "Un **autòmat** és qualsevol mecanisme capaç de fer una feina de manera autònoma. L'ordinador és un autòmat que **entén i executa** les tasques indicades en un programa: una màquina que resol problemes sota el control d'unes instruccions. Dit d'una altra manera, és el **programa** el que fa possible que l'ordinador resolgui el problema automàticament.",
     "Un **autómata** es cualquier mecanismo capaz de realizar un trabajo de forma autónoma. El ordenador es un autómata que **entiende y ejecuta** las tareas indicadas en un programa: una máquina que resuelve problemas bajo el control de unas instrucciones. Dicho de otro modo, es el **programa** lo que hace posible que el ordenador resuelva el problema automáticamente."
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:560px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 170\" role=\"img\" aria-label=\"L&#x27;ordinador combina el programa i les dades per produir resultats, sense intervenció humana durant l&#x27;execució.\">\n<rect class=\"bxq\" x=\"20\" y=\"20\" width=\"170\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"105\" y=\"40\" text-anchor=\"middle\">Programa</text><text class=\"ds\" x=\"105\" y=\"58\" text-anchor=\"middle\">les instruccions</text>\n<rect class=\"bxq\" x=\"20\" y=\"100\" width=\"170\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"105\" y=\"120\" text-anchor=\"middle\">Dades d'entrada</text><text class=\"ds\" x=\"105\" y=\"138\" text-anchor=\"middle\">teclat, fitxers…</text>\n<path class=\"ln\" d=\"M190 45 H300 V70\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M190 125 H300 V102\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"230\" y=\"70\" width=\"360\" height=\"30\" rx=\"6\"></rect><text class=\"dt db\" x=\"410\" y=\"86\" text-anchor=\"middle\" dominant-baseline=\"central\">Ordinador: executa les instruccions una rere l'altra</text>\n<path class=\"ln\" d=\"M590 85 H660\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"665\" y=\"60\" width=\"175\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"752\" y=\"80\" text-anchor=\"middle\">Resultats</text><text class=\"ds\" x=\"752\" y=\"98\" text-anchor=\"middle\">pantalla, fitxers…</text>\n</svg></div>\n<figcaption>L'ordinador combina el programa i les dades per produir resultats, sense intervenció humana durant l'execució.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:560px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 170\" role=\"img\" aria-label=\"El ordenador combina el programa y los datos para producir resultados, sin intervención humana durante la ejecución.\">\n<rect class=\"bxq\" x=\"20\" y=\"20\" width=\"170\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"105\" y=\"40\" text-anchor=\"middle\">Programa</text><text class=\"ds\" x=\"105\" y=\"58\" text-anchor=\"middle\">las instrucciones</text>\n<rect class=\"bxq\" x=\"20\" y=\"100\" width=\"170\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"105\" y=\"120\" text-anchor=\"middle\">Datos de entrada</text><text class=\"ds\" x=\"105\" y=\"138\" text-anchor=\"middle\">teclado, ficheros…</text>\n<path class=\"ln\" d=\"M190 45 H300 V70\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M190 125 H300 V102\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"230\" y=\"70\" width=\"360\" height=\"30\" rx=\"6\"></rect><text class=\"dt db\" x=\"410\" y=\"86\" text-anchor=\"middle\" dominant-baseline=\"central\">Ordenador: ejecuta las instrucciones una tras otra</text>\n<path class=\"ln\" d=\"M590 85 H660\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"665\" y=\"60\" width=\"175\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"752\" y=\"80\" text-anchor=\"middle\">Resultados</text><text class=\"ds\" x=\"752\" y=\"98\" text-anchor=\"middle\">pantalla, ficheros…</text>\n</svg></div>\n<figcaption>El ordenador combina el programa y los datos para producir resultados, sin intervención humana durante la ejecución.</figcaption>\n</figure>"
    ]
   }
  ],
  "t21-5": [
   {
    "t": "p",
    "x": [
     "Un **programa** és la seqüència d'accions de l'algorisme escrita en un **llenguatge de programació**. Aquestes accions s'anomenen **línies de codi** o **instruccions**. És a dir: un programa és la **codificació d'un algorisme** en un llenguatge que l'ordinador (amb el seu traductor) entén.",
     "Un **programa** es la secuencia de acciones del algoritmo escrita en un **lenguaje de programación**. Estas acciones se denominan **líneas de código** o **instrucciones**. Es decir: un programa es la **codificación de un algoritmo** en un lenguaje que el ordenador (con su traductor) entiende."
    ]
   },
   {
    "t": "table",
    "head": [
     "Fase",
     [
      "Pregunta que respon",
      "Pregunta que responde"
     ],
     [
      "Exemple: àrea del rectangle",
      "Ejemplo: área del rectángulo"
     ]
    ],
    "rows": [
     [
      [
       "**Enunciat del problema**",
       "**Enunciado del problema**"
      ],
      [
       "Què s'ha de resoldre?",
       "¿Qué hay que resolver?"
      ],
      [
       "Donades la base i l'altura, calcular l'àrea.",
       "Dadas la base y la altura, calcular el área."
      ]
     ],
     [
      [
       "**Disseny de l'algorisme**",
       "**Diseño del algoritmo**"
      ],
      [
       "Com es resol?",
       "¿Cómo se resuelve?"
      ],
      "`Àrea ← Base · Altura`"
     ],
     [
      [
       "**Codificació**",
       "**Codificación**"
      ],
      [
       "Amb quin llenguatge de programació?",
       "¿Con qué lenguaje de programación?"
      ],
      "`area = base * altura;` en C++"
     ],
     [
      [
       "**Verificació i depuració**",
       "**Verificación y depuración**"
      ],
      [
       "Funciona? Es comprova amb diferents **jocs de proves**.",
       "¿Funciona? Se comprueba con diferentes **juegos de pruebas**."
      ],
      [
       "Provar (3, 4) → 12; (2,5, 2) → 5; (0, 7) → 0",
       "Probar (3, 4) → 12; (2,5, 2) → 5; (0, 7) → 0"
      ]
     ]
    ]
   },
   {
    "t": "h",
    "x": [
     "Com es tria un bon joc de proves",
     "Cómo se elige un buen juego de pruebas"
    ]
   },
   {
    "t": "p",
    "x": [
     "Un **joc de proves** és un conjunt de dades d'entrada amb el resultat que ha de sortir. No n'hi ha prou de provar un sol cas «normal». Una bona tria inclou:",
     "Un **juego de pruebas** es un conjunto de datos de entrada con el resultado que debe salir. No basta con probar un solo caso «normal». Una buena elección incluye:"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Tipus de cas",
      "Tipo de caso"
     ],
     [
      "Per què",
      "Por qué"
     ],
     [
      "Àrea del rectangle",
      "Área del rectángulo"
     ],
     [
      "Pilotes",
      "Pelotas"
     ]
    ],
    "rows": [
     [
      [
       "Cas normal",
       "Caso normal"
      ],
      [
       "El que passa habitualment",
       "Lo que ocurre habitualmente"
      ],
      "(3, 4) → 12",
      "1370 → 6, 3, 2"
     ],
     [
      [
       "Cas límit",
       "Caso límite"
      ],
      [
       "Els extrems, on solen fallar els programes",
       "Los extremos, donde suelen fallar los programas"
      ],
      "(0, 7) → 0",
      "0 → 0, 0, 0 · 200 → 1, 0, 0"
     ],
     [
      [
       "Cas especial",
       "Caso especial"
      ],
      [
       "Decimals, valors grans, dades que només en tenen una mena",
       "Decimales, valores grandes, datos que solo tienen un tipo"
      ],
      "(2,5, 2) → 5",
      "10 → 0, 0, 1 · 50 → 0, 1, 0"
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "Aquí teniu l'algorisme de l'àrea per provar-lo amb diferents dades (canvieu l'entrada a la consola):",
     "Aquí tenéis el algoritmo del área para probarlo con diferentes datos (cambiad la entrada en la consola):"
    ]
   },
   {
    "t": "code",
    "lang": "ps",
    "props": {
     "run": true,
     "trace": true,
     "in": "3 4"
    },
    "src": [
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      Base          Real      Base del rectangle\n   E      Altura        Real      Altura del rectangle\n   S      Àrea          Real      Àrea del rectangle\n\nINICI_SEQÜÈNCIA\n    Llegir Base\n    Llegir Altura\n    {Base ≥ 0 i Altura ≥ 0}\n    Àrea ← Base · Altura\n    {Àrea = Base · Altura}\n    Escriure \"L'àrea del rectangle és \", Àrea\nFI_SEQÜÈNCIA",
     "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      Base          Real      Base del rectángulo\n   E      Altura        Real      Altura del rectángulo\n   S      Àrea          Real      Área del rectángulo\n\nINICI_SEQÜÈNCIA\n    Llegir Base\n    Llegir Altura\n    {Base ≥ 0 i Altura ≥ 0}\n    Àrea ← Base · Altura\n    {Àrea = Base · Altura}\n    Escriure \"L'àrea del rectangle és \", Àrea\nFI_SEQÜÈNCIA"
    ]
   },
   {
    "t": "def",
    "title": [
     "Equació fonamental de la programació",
     "Ecuación fundamental de la programación"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Programa = Algorisme + Estructures de dades**",
       "**Programa = Algoritmo + Estructuras de datos**"
      ]
     },
     {
      "t": "p",
      "x": [
       "L'**algorisme** són les accions que cal fer; les **estructures de dades** són com representem la informació sobre la qual actuen. Si les dades estan mal triades (per exemple, guardar una edat en un real o un preu en un enter), l'algorisme es complica o directament falla. Les dades són el contingut del Tema 2.2.",
       "El **algoritmo** son las acciones que hay que realizar; las **estructuras de datos** son cómo representamos la información sobre la que actúan. Si los datos están mal elegidos (por ejemplo, guardar una edad en un real o un precio en un entero), el algoritmo se complica o directamente falla. Los datos son el contenido del Tema 2.2."
      ]
     }
    ]
   }
  ],
  "t21-6": [
   {
    "t": "check",
    "ex": {
     "id": "t21-6-q1",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quina característica d'algorisme **no** compleix la instrucció «remeneu-ho fins que quedi bé»?",
        "¿Qué característica de algoritmo **no** cumple la instrucción «removedlo hasta que quede bien»?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      [
       "Finit",
       "Finito"
      ],
      [
       "Definibilitat",
       "Definibilidad"
      ],
      [
       "Eficient",
       "Eficiente"
      ],
      [
       "Simplicitat",
       "Simplicidad"
      ]
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "«Fins que quedi bé» és ambigu: no diu exactament quan s'ha d'aturar. Falla la definibilitat (i, de retruc, pot fallar la finitud).",
        "«Hasta que quede bien» es ambiguo: no dice exactamente cuándo hay que detenerse. Falla la definibilidad (y, de rebote, puede fallar la finitud)."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "t21-6-q2",
     "qb": [
      {
       "t": "p",
       "x": [
        "Al programa de les pilotes, què és l'**entorn**?",
        "En el programa de las pelotas, ¿qué es el **entorno**?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      [
       "L'ordinador que l'executa.",
       "El ordenador que lo ejecuta."
      ],
      [
       "L'acció `G ← QNT ‖ 200`.",
       "La acción `G ← QNT ‖ 200`."
      ],
      [
       "Les dades que fa servir: `QNT`, `G`, `M` i `P`.",
       "Los datos que utiliza: `QNT`, `G`, `M` y `P`."
      ],
      [
       "Una execució completa del programa.",
       "Una ejecución completa del programa."
      ]
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "L'entorn és el conjunt d'objectes (dades) que l'algorisme fa canviar d'estat. L'ordinador és el processador; una execució és un procés.",
        "El entorno es el conjunto de objetos (datos) cuyo estado hace cambiar el algoritmo. El ordenador es el procesador; una ejecución es un proceso."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "t21-6-q3",
     "qb": [
      {
       "t": "p",
       "x": [
        "El programa `Àrea ← Base + Altura` s'executa sense cap missatge d'error però dona resultats incorrectes. Quin tipus d'error és?",
        "El programa `Àrea ← Base + Altura` se ejecuta sin ningún mensaje de error pero da resultados incorrectos. ¿Qué tipo de error es?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      [
       "De semàntica: està ben escrit però no fa el que ha de fer.",
       "De semántica: está bien escrito pero no hace lo que debe hacer."
      ],
      [
       "De sintaxi: el traductor l'hauria d'haver detectat.",
       "De sintaxis: el traductor lo debería haber detectado."
      ],
      [
       "No és cap error.",
       "No es ningún error."
      ],
      [
       "Un error del processador.",
       "Un error del procesador."
      ]
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "Sintàcticament és correcte; el significat és el que està malament. Aquests errors només els troben les proves.",
        "Sintácticamente es correcto; lo que está mal es el significado. Estos errores solo los encuentran las pruebas."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "t21-6-q4",
     "qb": [
      {
       "t": "p",
       "x": [
        "Per provar el programa de les pilotes, quin joc de proves és **més complet**?",
        "Para probar el programa de las pelotas, ¿qué juego de pruebas es **más completo**?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "1370",
      "1370, 1380, 1390",
      "500, 600, 700",
      "1370, 0, 200, 50, 10"
     ],
     "answer": 3,
     "sol": [
      {
       "t": "p",
       "x": [
        "Combina un cas normal amb casos límit (0) i casos que només fan servir un tipus de caixa (200, 50, 10).",
        "Combina un caso normal con casos límite (0) y casos que solo utilizan un tipo de caja (200, 50, 10)."
       ]
      }
     ]
    }
   }
  ],
  "t21-7": [
   {
    "t": "summary",
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Un **algorisme** és una seqüència ordenada i finita d'accions que resol un problema: ha de ser **finit, definit, eficient i simple**.",
        "Un **algoritmo** es una secuencia ordenada y finita de acciones que resuelve un problema: debe ser **finito, definido, eficiente y simple**."
       ],
       [
        "**Entorn** (les dades), **acció** (un pas amb efecte), **procés** (una execució) i **processador** (qui l'executa).",
        "**Entorno** (los datos), **acción** (un paso con efecto), **proceso** (una ejecución) y **procesador** (quien lo ejecuta)."
       ],
       [
        "El **pseudocodi** descriu l'algorisme amb un llenguatge formal: inici i fi clars, paraules clau en majúscules, alineació i sagnat.",
        "El **pseudocódigo** describe el algoritmo con un lenguaje formal: inicio y fin claros, palabras clave en mayúsculas, alineación y sangría."
       ],
       [
        "L'ordinador és un **autòmat**; el **programa** és la codificació de l'algorisme en un llenguatge de programació.",
        "El ordenador es un **autómata**; el **programa** es la codificación del algoritmo en un lenguaje de programación."
       ],
       [
        "Fases: **enunciat → disseny → codificació → verificació i depuració**, amb jocs de proves que incloguin casos normals, límit i especials.",
        "Fases: **enunciado → diseño → codificación → verificación y depuración**, con juegos de pruebas que incluyan casos normales, límite y especiales."
       ],
       [
        "**Programa = Algorisme + Estructures de dades**.",
        "**Programa = Algoritmo + Estructuras de datos**."
       ]
      ]
     }
    ]
   }
  ]
 },
 "examEnd": []
};
