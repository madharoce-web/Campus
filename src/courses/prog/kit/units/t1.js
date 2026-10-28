// Generat per tools/kit-import/prog.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "De la programació artesanal a l'enginyeria del software: fases, eines CASE, llenguatges i traductors.",
    "De la programación artesanal a la ingeniería del software: fases, herramientas CASE, lenguajes y traductores.",
    "From craft programming to software engineering: phases, CASE tools, languages and translators."
   ]
  },
  {
   "t": "list",
   "items": [
    [
     "**Setmana:** 2 (14–20 de setembre) · Evolució i conceptes bàsics",
     "**Semana:** 2 (14–20 de septiembre) · Evolución y conceptos básicos",
     "**Week:** 2 (14–20 September) · Evolution and basic concepts"
    ],
    [
     "**Documentació:** Apunts del professorat: diapositives 6–11 i 16–30",
     "**Documentación:** Apuntes del profesorado: diapositivas 6–11 y 16–30",
     "**Material:** Lecturers' notes: slides 6–11 and 16–30"
    ],
    [
     "**Llibre de suport:** Fonaments de programació (Marco, J. i altres, Ed. UOC), cap. I, pàg. 15–29",
     "**Libro de apoyo:** Fonaments de programació (Marco, J. y otros, Ed. UOC), cap. I, pág. 15–29",
     "**Reference book:** Fonaments de programació (Marco, J. et al., Ed. UOC), ch. I, pp. 15–29"
    ]
   ]
  },
  {
   "t": "p",
   "x": [
    "Aquest tema respon tres preguntes: **què vol dir programar**, **com es fa un programa de manera professional** (de l'enunciat al manteniment) i **com és possible que l'ordinador entengui el que escrivim** (llenguatges i traductors).",
    "Este tema responde a tres preguntas: **qué significa programar**, **cómo se hace un programa de manera profesional** (del enunciado al mantenimiento) y **cómo es posible que el ordenador entienda lo que escribimos** (lenguajes y traductores).",
    "This unit answers three questions: **what programming means**, **how a program is made professionally** (from the statement to maintenance) and **how the computer can understand what we write** (languages and translators)."
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
       "Explicar per què la programació es considera avui una disciplina d'**enginyeria**.",
       "Explicar por qué la programación se considera hoy una disciplina de **ingeniería**.",
       "Explain why programming is considered an **engineering** discipline today."
      ],
      [
       "Ordenar les **cinc fases** del desenvolupament i dir què es fa a cadascuna.",
       "Ordenar las **cinco fases** del desarrollo y decir qué se hace en cada una.",
       "Put the **five phases** of development in order and say what is done in each one."
      ],
      [
       "Distingir **llenguatge màquina** i **llenguatge d'alt nivell**, i **compilador** i **intèrpret** (i veure-ho funcionar en aquesta mateixa web).",
       "Distinguir **lenguaje máquina** y **lenguaje de alto nivel**, y **compilador** e **intérprete** (y verlo funcionar en esta misma web).",
       "Distinguish **machine language** from **high-level language**, and a **compiler** from an **interpreter** (and see them working on this very site)."
      ],
      [
       "Reconèixer els grans **tipus de programació** i situar els llenguatges en el temps.",
       "Reconocer los grandes **tipos de programación** y situar los lenguajes en el tiempo.",
       "Recognise the main **types of programming** and place the languages in time."
      ]
     ]
    }
   ]
  }
 ],
 "sections": {
  "t1-1": [
   {
    "t": "p",
    "x": [
     "La finalitat de la programació és **solucionar problemes amb l'ordinador**. Tant si el problema és petit com si és enorme, cal un **mètode** i passar per unes **fases**, des que es planteja fins que la solució funciona.",
     "La finalidad de la programación es **solucionar problemas con el ordenador**. Tanto si el problema es pequeño como si es enorme, hace falta un **método** y pasar por unas **fases**, desde que se plantea hasta que la solución funciona.",
     "The purpose of programming is **to solve problems with the computer**. Whether the problem is small or huge, you need a **method** and to go through some **phases**, from when it is posed until the solution works."
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Mida del problema",
      "Tamaño del problema",
      "Size of the problem"
     ],
     [
      "Exemple",
      "Ejemplo",
      "Example"
     ],
     [
      "Què canvia",
      "Qué cambia",
      "What changes"
     ]
    ],
    "rows": [
     [
      [
       "Petit",
       "Pequeño",
       "Small"
      ],
      [
       "Calcular quantes caixes calen per empaquetar 1.370 pilotes",
       "Calcular cuántas cajas hacen falta para empaquetar 1.370 pelotas",
       "Working out how many boxes are needed to pack 1,370 balls"
      ],
      [
       "Una persona, unes hores, un sol programa",
       "Una persona, unas horas, un solo programa",
       "One person, a few hours, a single program"
      ]
     ],
     [
      [
       "Mitjà",
       "Mediano",
       "Medium"
      ],
      [
       "L'aplicació de reserves de les pistes d'esquí d'una estació",
       "La aplicación de reservas de las pistas de esquí de una estación",
       "The booking app for the ski slopes of a resort"
      ],
      [
       "Un equip, mesos, molts mòduls que s'han d'entendre entre ells",
       "Un equipo, meses, muchos módulos que tienen que entenderse entre ellos",
       "A team, months, many modules that have to work together"
      ]
     ],
     [
      [
       "Gran",
       "Grande",
       "Large"
      ],
      [
       "El sistema d'un banc o d'un hospital",
       "El sistema de un banco o de un hospital",
       "The system of a bank or a hospital"
      ],
      [
       "Molts equips, anys de vida, canvis constants: sense mètode és impossible",
       "Muchos equipos, años de vida, cambios constantes: sin método es imposible",
       "Many teams, years of life, constant changes: without a method it is impossible"
      ]
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "En aquest seminari la programació es tracta com una **tècnica** que es pot aprendre i aplicar, no com un «art» reservat a qui té inspiració. Això té una conseqüència pràctica: l'aprenentatge ha de ser **progressiu**. Primer problemes petits, després més grans, i **cada apartat s'ha d'haver assimilat abans de passar al següent**, perquè tot el que ve després s'hi recolza.",
     "En este seminario la programación se trata como una **técnica** que se puede aprender y aplicar, no como un «arte» reservado a quien tiene inspiración. Esto tiene una consecuencia práctica: el aprendizaje tiene que ser **progresivo**. Primero problemas pequeños, después más grandes, y **cada apartado se debe haber asimilado antes de pasar al siguiente**, porque todo lo que viene después se apoya en él.",
     "In this seminar programming is treated as a **technique** that can be learnt and applied, not as an “art” reserved for the inspired. This has a practical consequence: learning has to be **progressive**. First small problems, then bigger ones, and **each part must be mastered before moving on to the next**, because everything that comes later builds on it."
    ],
    "mode": "explained"
   }
  ],
  "t1-2": [
   {
    "t": "p",
    "x": [
     "Moltes màquines es poden programar, però només per a un **conjunt reduït de funcions**: una rentadora té els seus programes de rentat i prou. L'ordinador és diferent: és una **màquina de propòsit general**. No sap fer res concret fins que li donem un **programa**, i amb un programa diferent fa una feina completament diferent.",
     "Muchas máquinas se pueden programar, pero solo para un **conjunto reducido de funciones**: una lavadora tiene sus programas de lavado y nada más. El ordenador es diferente: es una **máquina de propósito general**. No sabe hacer nada concreto hasta que le damos un **programa**, y con un programa diferente hace un trabajo completamente diferente.",
     "Many machines can be programmed, but only for a **small set of functions**: a washing machine has its wash programmes and nothing else. The computer is different: it is a **general-purpose machine**. It cannot do anything specific until we give it a **program**, and with a different program it does a completely different job."
    ]
   },
   {
    "t": "html",
    "h": [
     "<div class=\"ip-cols\">\n<div class=\"ip-card\"><h4>Propòsit específic</h4><p>Rentadora, nevera, assecadora, microones. Els «programes» venen de fàbrica i només trien entre unes poques opcions.</p></div>\n<div class=\"ip-card\"><h4>Propòsit general</h4><p>L'ordinador. El mateix aparell avui calcula nòmines, demà reprodueix música i demà passat simula el temps: tot depèn del programa que executa.</p></div>\n</div>",
     "<div class=\"ip-cols\">\n<div class=\"ip-card\"><h4>Propósito específico</h4><p>Lavadora, nevera, secadora, microondas. Los «programas» vienen de fábrica y solo eligen entre unas pocas opciones.</p></div>\n<div class=\"ip-card\"><h4>Propósito general</h4><p>El ordenador. El mismo aparato hoy calcula nóminas, mañana reproduce música y pasado mañana simula el tiempo: todo depende del programa que ejecuta.</p></div>\n</div>",
     "<div class=\"ip-cols\">\n<div class=\"ip-card\"><h4>Specific purpose</h4><p>Washing machine, fridge, dryer, microwave. The “programs” come from the factory and only choose between a few options.</p></div>\n<div class=\"ip-card\"><h4>General purpose</h4><p>The computer. The same device calculates payslips today, plays music tomorrow and simulates the weather the day after: it all depends on the program it runs.</p></div>\n</div>"
    ],
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "Des de la primera màquina electrònica programable (cap al 1940) fins avui, la manera de programar ha canviat molt:",
     "Desde la primera máquina electrónica programable (hacia 1940) hasta hoy, la manera de programar ha cambiado mucho:",
     "From the first programmable electronic machine (around 1940) to today, the way of programming has changed a lot:"
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 190\" role=\"img\" aria-label=\"De la programació «artesanal» centrada en el codi a una disciplina d&#x27;enginyeria amb fases i eines.\">\n<line class=\"ln\" x1=\"30\" y1=\"70\" x2=\"830\" y2=\"70\" marker-end=\"url(#ah)\"></line>\n<g>\n<circle cx=\"70\" cy=\"70\" r=\"7\" class=\"fk\"></circle><text class=\"dt db\" x=\"70\" y=\"40\" text-anchor=\"middle\">≈ 1940</text>\n<text class=\"dt\" x=\"70\" y=\"98\" text-anchor=\"middle\">Primeres màquines</text><text class=\"dt\" x=\"70\" y=\"115\" text-anchor=\"middle\">programables</text><text class=\"ds\" x=\"70\" y=\"134\" text-anchor=\"middle\">es programa en binari,</text><text class=\"ds\" x=\"70\" y=\"149\" text-anchor=\"middle\">a mà i amb cables</text>\n</g>\n<g>\n<circle cx=\"245\" cy=\"70\" r=\"7\" class=\"fk\"></circle><text class=\"dt db\" x=\"245\" y=\"40\" text-anchor=\"middle\">anys 50</text>\n<text class=\"dt\" x=\"245\" y=\"98\" text-anchor=\"middle\">Primers llenguatges</text><text class=\"dt\" x=\"245\" y=\"115\" text-anchor=\"middle\">d'alt nivell</text><text class=\"ds\" x=\"245\" y=\"134\" text-anchor=\"middle\">Fortran, Cobol: el codi</text><text class=\"ds\" x=\"245\" y=\"149\" text-anchor=\"middle\">s'assembla a les fórmules</text>\n</g>\n<g>\n<circle cx=\"430\" cy=\"70\" r=\"7\" class=\"fk\"></circle><text class=\"dt db\" x=\"430\" y=\"40\" text-anchor=\"middle\">anys 60–70</text>\n<text class=\"dt\" x=\"430\" y=\"98\" text-anchor=\"middle\">Programació</text><text class=\"dt\" x=\"430\" y=\"115\" text-anchor=\"middle\">estructurada</text><text class=\"ds\" x=\"430\" y=\"134\" text-anchor=\"middle\">només seqüència, alternativa</text><text class=\"ds\" x=\"430\" y=\"149\" text-anchor=\"middle\">i iteració (Tema 2.2)</text>\n</g>\n<g>\n<circle cx=\"615\" cy=\"70\" r=\"7\" class=\"fk\"></circle><text class=\"dt db\" x=\"615\" y=\"40\" text-anchor=\"middle\">anys 70–90</text>\n<text class=\"dt\" x=\"615\" y=\"98\" text-anchor=\"middle\">Enginyeria</text><text class=\"dt\" x=\"615\" y=\"115\" text-anchor=\"middle\">del software</text><text class=\"ds\" x=\"615\" y=\"134\" text-anchor=\"middle\">fases, metodologies</text><text class=\"ds\" x=\"615\" y=\"149\" text-anchor=\"middle\">i eines CASE</text>\n</g>\n<g>\n<circle cx=\"790\" cy=\"70\" r=\"9\" class=\"fa\"></circle><text class=\"dt db ta\" x=\"790\" y=\"40\" text-anchor=\"middle\">avui</text>\n<text class=\"dt\" x=\"790\" y=\"98\" text-anchor=\"middle\">Disciplina</text><text class=\"dt\" x=\"790\" y=\"115\" text-anchor=\"middle\">d'enginyeria</text><text class=\"ds\" x=\"790\" y=\"134\" text-anchor=\"middle\">teoria + metodologia</text><text class=\"ds\" x=\"790\" y=\"149\" text-anchor=\"middle\">+ tècniques de disseny</text>\n</g>\n</svg></div>\n<figcaption>De la programació «artesanal» centrada en el codi a una disciplina d'enginyeria amb fases i eines.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 190\" role=\"img\" aria-label=\"De la programación «artesanal» centrada en el código a una disciplina de ingeniería con fases y herramientas.\">\n<line class=\"ln\" x1=\"30\" y1=\"70\" x2=\"830\" y2=\"70\" marker-end=\"url(#ah)\"></line>\n<g>\n<circle cx=\"70\" cy=\"70\" r=\"7\" class=\"fk\"></circle><text class=\"dt db\" x=\"70\" y=\"40\" text-anchor=\"middle\">≈ 1940</text>\n<text class=\"dt\" x=\"70\" y=\"98\" text-anchor=\"middle\">Primeras máquinas</text><text class=\"dt\" x=\"70\" y=\"115\" text-anchor=\"middle\">programables</text><text class=\"ds\" x=\"70\" y=\"134\" text-anchor=\"middle\">se programa en binario,</text><text class=\"ds\" x=\"70\" y=\"149\" text-anchor=\"middle\">a mano y con cables</text>\n</g>\n<g>\n<circle cx=\"245\" cy=\"70\" r=\"7\" class=\"fk\"></circle><text class=\"dt db\" x=\"245\" y=\"40\" text-anchor=\"middle\">años 50</text>\n<text class=\"dt\" x=\"245\" y=\"98\" text-anchor=\"middle\">Primeros lenguajes</text><text class=\"dt\" x=\"245\" y=\"115\" text-anchor=\"middle\">de alto nivel</text><text class=\"ds\" x=\"245\" y=\"134\" text-anchor=\"middle\">Fortran, Cobol: el código</text><text class=\"ds\" x=\"245\" y=\"149\" text-anchor=\"middle\">se parece a las fórmulas</text>\n</g>\n<g>\n<circle cx=\"430\" cy=\"70\" r=\"7\" class=\"fk\"></circle><text class=\"dt db\" x=\"430\" y=\"40\" text-anchor=\"middle\">años 60–70</text>\n<text class=\"dt\" x=\"430\" y=\"98\" text-anchor=\"middle\">Programación</text><text class=\"dt\" x=\"430\" y=\"115\" text-anchor=\"middle\">estructurada</text><text class=\"ds\" x=\"430\" y=\"134\" text-anchor=\"middle\">solo secuencia, alternativa</text><text class=\"ds\" x=\"430\" y=\"149\" text-anchor=\"middle\">e iteración (Tema 2.2)</text>\n</g>\n<g>\n<circle cx=\"615\" cy=\"70\" r=\"7\" class=\"fk\"></circle><text class=\"dt db\" x=\"615\" y=\"40\" text-anchor=\"middle\">años 70–90</text>\n<text class=\"dt\" x=\"615\" y=\"98\" text-anchor=\"middle\">Ingeniería</text><text class=\"dt\" x=\"615\" y=\"115\" text-anchor=\"middle\">del software</text><text class=\"ds\" x=\"615\" y=\"134\" text-anchor=\"middle\">fases, metodologías</text><text class=\"ds\" x=\"615\" y=\"149\" text-anchor=\"middle\">y herramientas CASE</text>\n</g>\n<g>\n<circle cx=\"790\" cy=\"70\" r=\"9\" class=\"fa\"></circle><text class=\"dt db ta\" x=\"790\" y=\"40\" text-anchor=\"middle\">hoy</text>\n<text class=\"dt\" x=\"790\" y=\"98\" text-anchor=\"middle\">Disciplina</text><text class=\"dt\" x=\"790\" y=\"115\" text-anchor=\"middle\">de ingeniería</text><text class=\"ds\" x=\"790\" y=\"134\" text-anchor=\"middle\">teoría + metodología</text><text class=\"ds\" x=\"790\" y=\"149\" text-anchor=\"middle\">+ técnicas de diseño</text>\n</g>\n</svg></div>\n<figcaption>De la programación «artesanal» centrada en el código a una disciplina de ingeniería con fases y herramientas.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 190\" role=\"img\" aria-label=\"From code-centred “craft” programming to an engineering discipline with phases and tools.\">\n<line class=\"ln\" x1=\"30\" y1=\"70\" x2=\"830\" y2=\"70\" marker-end=\"url(#ah)\"></line>\n<g>\n<circle cx=\"70\" cy=\"70\" r=\"7\" class=\"fk\"></circle><text class=\"dt db\" x=\"70\" y=\"40\" text-anchor=\"middle\">≈ 1940</text>\n<text class=\"dt\" x=\"70\" y=\"98\" text-anchor=\"middle\">First machines</text><text class=\"dt\" x=\"70\" y=\"115\" text-anchor=\"middle\">programables</text><text class=\"ds\" x=\"70\" y=\"134\" text-anchor=\"middle\">programmed in binary,</text><text class=\"ds\" x=\"70\" y=\"149\" text-anchor=\"middle\">by hand and with cables</text>\n</g>\n<g>\n<circle cx=\"245\" cy=\"70\" r=\"7\" class=\"fk\"></circle><text class=\"dt db\" x=\"245\" y=\"40\" text-anchor=\"middle\">1950s</text>\n<text class=\"dt\" x=\"245\" y=\"98\" text-anchor=\"middle\">First high-level</text><text class=\"dt\" x=\"245\" y=\"115\" text-anchor=\"middle\">languages</text><text class=\"ds\" x=\"245\" y=\"134\" text-anchor=\"middle\">Fortran, Cobol: the code</text><text class=\"ds\" x=\"245\" y=\"149\" text-anchor=\"middle\">looks like formulas</text>\n</g>\n<g>\n<circle cx=\"430\" cy=\"70\" r=\"7\" class=\"fk\"></circle><text class=\"dt db\" x=\"430\" y=\"40\" text-anchor=\"middle\">1960s–70s</text>\n<text class=\"dt\" x=\"430\" y=\"98\" text-anchor=\"middle\">Programming</text><text class=\"dt\" x=\"430\" y=\"115\" text-anchor=\"middle\">estructurada</text><text class=\"ds\" x=\"430\" y=\"134\" text-anchor=\"middle\">only sequence, selection</text><text class=\"ds\" x=\"430\" y=\"149\" text-anchor=\"middle\">and iteration (Unit 2.2)</text>\n</g>\n<g>\n<circle cx=\"615\" cy=\"70\" r=\"7\" class=\"fk\"></circle><text class=\"dt db\" x=\"615\" y=\"40\" text-anchor=\"middle\">1970s–90s</text>\n<text class=\"dt\" x=\"615\" y=\"98\" text-anchor=\"middle\">Engineering</text><text class=\"dt\" x=\"615\" y=\"115\" text-anchor=\"middle\">del software</text><text class=\"ds\" x=\"615\" y=\"134\" text-anchor=\"middle\">phases, methodologies</text><text class=\"ds\" x=\"615\" y=\"149\" text-anchor=\"middle\">and CASE tools</text>\n</g>\n<g>\n<circle cx=\"790\" cy=\"70\" r=\"9\" class=\"fa\"></circle><text class=\"dt db ta\" x=\"790\" y=\"40\" text-anchor=\"middle\">today</text>\n<text class=\"dt\" x=\"790\" y=\"98\" text-anchor=\"middle\">Disciplina</text><text class=\"dt\" x=\"790\" y=\"115\" text-anchor=\"middle\">engineering</text><text class=\"ds\" x=\"790\" y=\"134\" text-anchor=\"middle\">theory + methodology</text><text class=\"ds\" x=\"790\" y=\"149\" text-anchor=\"middle\">+ design techniques</text>\n</g>\n</svg></div>\n<figcaption>From code-centred “craft” programming to an engineering discipline with phases and tools.</figcaption>\n</figure>"
    ],
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "Avui la programació es considera una **disciplina d'enginyeria**. Com qualsevol enginyeria, es fonamenta en tres pilars que han sorgit de la recerca i de l'experiència:",
     "Hoy la programación se considera una **disciplina de ingeniería**. Como cualquier ingeniería, se fundamenta en tres pilares que han surgido de la investigación y de la experiencia:",
     "Today programming is considered an **engineering discipline**. Like any engineering, it rests on three pillars that have emerged from research and experience:"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "**Una teoria**: què és un algorisme, com es demostra que és correcte, quins tipus de dades hi ha…",
      "**Una teoría**: qué es un algoritmo, cómo se demuestra que es correcto, qué tipos de datos hay…",
      "**A theory**: what an algorithm is, how to prove it is correct, what data types exist…"
     ],
     [
      "**Una proposta metodològica**: en quines fases es fa un programa i què s'entrega a cada fase.",
      "**Una propuesta metodológica**: en qué fases se hace un programa y qué se entrega en cada fase.",
      "**A methodological proposal**: in which phases a program is made and what is delivered in each phase."
     ],
     [
      "**Un conjunt de tècniques de disseny**: els esquemes de recorregut i cerca, el disseny descendent, la programació modular…",
      "**Un conjunto de técnicas de diseño**: los esquemas de recorrido y búsqueda, el diseño descendente, la programación modular…",
      "**A set of design techniques**: the traversal and search schemes, top-down design, modular programming…"
     ]
    ],
    "ordered": true
   },
   {
    "t": "p",
    "x": [
     "L'objectiu és que la programació sigui alhora **eficaç** i **eficient**. Són dues paraules que s'assemblen però volen dir coses diferents:",
     "El objetivo es que la programación sea a la vez **eficaz** y **eficiente**. Son dos palabras que se parecen pero significan cosas diferentes:",
     "The aim is for programming to be both **effective** and **efficient**. They are two words that look alike but mean different things:"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Concepte",
      "Concepto",
      "Concept"
     ],
     [
      "Què vol dir",
      "Qué significa",
      "What it means"
     ],
     [
      "Exemple",
      "Ejemplo",
      "Example"
     ]
    ],
    "rows": [
     [
      [
       "**Eficaç**",
       "**Eficaz**",
       "**Effective**"
      ],
      [
       "Dona els **resultats esperats**: el programa fa el que ha de fer.",
       "Da los **resultados esperados**: el programa hace lo que tiene que hacer.",
       "It gives the **expected results**: the program does what it has to do."
      ],
      [
       "El programa de les pilotes diu exactament 6 caixes grans, 3 de mitjanes i 2 de petites per a 1.370 pilotes.",
       "El programa de las pelotas dice exactamente 6 cajas grandes, 3 medianas y 2 pequeñas para 1.370 pelotas.",
       "The ball program says exactly 6 large, 3 medium and 2 small boxes for 1,370 balls."
      ]
     ],
     [
      [
       "**Eficient**",
       "**Eficiente**",
       "**Efficient**"
      ],
      [
       "Ho aconsegueix amb un **cost raonable**: temps de desenvolupament, temps d'execució i memòria.",
       "Lo consigue con un **coste razonable**: tiempo de desarrollo, tiempo de ejecución y memoria.",
       "It achieves this at a **reasonable cost**: development time, execution time and memory."
      ],
      [
       "S'ha escrit en una tarda, s'executa a l'instant i no cal reescriure'l cada vegada que canvia el nombre de pilotes.",
       "Se ha escrito en una tarde, se ejecuta al instante y no hace falta reescribirlo cada vez que cambia el número de pelotas.",
       "It was written in an afternoon, runs instantly and does not need rewriting every time the number of balls changes."
      ]
     ]
    ]
   }
  ],
  "t1-3": [
   {
    "t": "p",
    "x": [
     "El desenvolupament d'un programa s'organitza en cinc etapes. Cada etapa respon una pregunta i produeix alguna cosa que fa servir la següent:",
     "El desarrollo de un programa se organiza en cinco etapas. Cada etapa responde a una pregunta y produce algo que utiliza la siguiente:",
     "The development of a program is organised in five stages. Each stage answers a question and produces something the next one uses:"
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 300\" role=\"img\" aria-label=\"Les cinc fases en cascada. A la pràctica no és una línia recta: quan les proves troben un error, es torna enrere.\">\n<rect class=\"bxa\" x=\"20\" y=\"20\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"120\" y=\"40\" text-anchor=\"middle\">1. Definició i anàlisi</text><text class=\"ds\" x=\"120\" y=\"60\" text-anchor=\"middle\">QUÈ cal resoldre?</text>\n<rect class=\"bxa\" x=\"175\" y=\"88\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"275\" y=\"108\" text-anchor=\"middle\">2. Disseny</text><text class=\"ds\" x=\"275\" y=\"128\" text-anchor=\"middle\">COM es resol? → algorisme</text>\n<rect class=\"bxa\" x=\"330\" y=\"156\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"430\" y=\"176\" text-anchor=\"middle\">3. Implementació</text><text class=\"ds\" x=\"430\" y=\"196\" text-anchor=\"middle\">codificar → programa</text>\n<rect class=\"bxa\" x=\"485\" y=\"224\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"585\" y=\"244\" text-anchor=\"middle\">4. Proves</text><text class=\"ds\" x=\"585\" y=\"264\" text-anchor=\"middle\">FUNCIONA? unitàries → validació</text>\n<rect class=\"bxo\" x=\"640\" y=\"20\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"740\" y=\"40\" text-anchor=\"middle\">5. Operació i manteniment</text><text class=\"ds\" x=\"740\" y=\"60\" text-anchor=\"middle\">s'usa, es corregeix, es millora</text>\n<path class=\"ln\" d=\"M120 74 V115 H170\" marker-end=\"url(#ah)\"></path>\n<path class=\"ln\" d=\"M275 142 V183 H325\" marker-end=\"url(#ah)\"></path>\n<path class=\"ln\" d=\"M430 210 V251 H480\" marker-end=\"url(#ah)\"></path>\n<path class=\"ln\" d=\"M685 251 H740 V79\" marker-end=\"url(#ah)\"></path>\n<path class=\"lnd\" d=\"M640 47 H235\" marker-end=\"url(#ah)\"></path>\n<text class=\"ds\" x=\"438\" y=\"38\" text-anchor=\"middle\">un error o una millora pot fer tornar a una fase anterior</text>\n</svg></div>\n<figcaption>Les cinc fases en cascada. A la pràctica no és una línia recta: quan les proves troben un error, es torna enrere.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 300\" role=\"img\" aria-label=\"Las cinco fases en cascada. En la práctica no es una línea recta: cuando las pruebas encuentran un error, se vuelve atrás.\">\n<rect class=\"bxa\" x=\"20\" y=\"20\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"120\" y=\"40\" text-anchor=\"middle\">1. Definición y análisis</text><text class=\"ds\" x=\"120\" y=\"60\" text-anchor=\"middle\">¿QUÉ hay que resolver?</text>\n<rect class=\"bxa\" x=\"175\" y=\"88\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"275\" y=\"108\" text-anchor=\"middle\">2. Diseño</text><text class=\"ds\" x=\"275\" y=\"128\" text-anchor=\"middle\">¿CÓMO se resuelve? → algoritmo</text>\n<rect class=\"bxa\" x=\"330\" y=\"156\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"430\" y=\"176\" text-anchor=\"middle\">3. Implementación</text><text class=\"ds\" x=\"430\" y=\"196\" text-anchor=\"middle\">codificar → programa</text>\n<rect class=\"bxa\" x=\"485\" y=\"224\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"585\" y=\"244\" text-anchor=\"middle\">4. Pruebas</text><text class=\"ds\" x=\"585\" y=\"264\" text-anchor=\"middle\">¿FUNCIONA? unitarias → validación</text>\n<rect class=\"bxo\" x=\"640\" y=\"20\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"740\" y=\"40\" text-anchor=\"middle\">5. Operación y mantenimiento</text><text class=\"ds\" x=\"740\" y=\"60\" text-anchor=\"middle\">se usa, se corrige, se mejora</text>\n<path class=\"ln\" d=\"M120 74 V115 H170\" marker-end=\"url(#ah)\"></path>\n<path class=\"ln\" d=\"M275 142 V183 H325\" marker-end=\"url(#ah)\"></path>\n<path class=\"ln\" d=\"M430 210 V251 H480\" marker-end=\"url(#ah)\"></path>\n<path class=\"ln\" d=\"M685 251 H740 V79\" marker-end=\"url(#ah)\"></path>\n<path class=\"lnd\" d=\"M640 47 H235\" marker-end=\"url(#ah)\"></path>\n<text class=\"ds\" x=\"438\" y=\"38\" text-anchor=\"middle\">un error o una mejora puede hacer volver a una fase anterior</text>\n</svg></div>\n<figcaption>Las cinco fases en cascada. En la práctica no es una línea recta: cuando las pruebas encuentran un error, se vuelve atrás.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 300\" role=\"img\" aria-label=\"The five phases in a waterfall. In practice it is not a straight line: when testing finds an error, you go back.\">\n<rect class=\"bxa\" x=\"20\" y=\"20\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"120\" y=\"40\" text-anchor=\"middle\">1. Definition and analysis</text><text class=\"ds\" x=\"120\" y=\"60\" text-anchor=\"middle\">WHAT has to be solved?</text>\n<rect class=\"bxa\" x=\"175\" y=\"88\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"275\" y=\"108\" text-anchor=\"middle\">2. Design</text><text class=\"ds\" x=\"275\" y=\"128\" text-anchor=\"middle\">HOW is it solved? → algorithm</text>\n<rect class=\"bxa\" x=\"330\" y=\"156\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"430\" y=\"176\" text-anchor=\"middle\">3. Implementation</text><text class=\"ds\" x=\"430\" y=\"196\" text-anchor=\"middle\">codificar → programa</text>\n<rect class=\"bxa\" x=\"485\" y=\"224\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"585\" y=\"244\" text-anchor=\"middle\">4. Testing</text><text class=\"ds\" x=\"585\" y=\"264\" text-anchor=\"middle\">DOES IT WORK? unit → validation</text>\n<rect class=\"bxo\" x=\"640\" y=\"20\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"740\" y=\"40\" text-anchor=\"middle\">5. Operation and maintenance</text><text class=\"ds\" x=\"740\" y=\"60\" text-anchor=\"middle\">it is used, fixed and improved</text>\n<path class=\"ln\" d=\"M120 74 V115 H170\" marker-end=\"url(#ah)\"></path>\n<path class=\"ln\" d=\"M275 142 V183 H325\" marker-end=\"url(#ah)\"></path>\n<path class=\"ln\" d=\"M430 210 V251 H480\" marker-end=\"url(#ah)\"></path>\n<path class=\"ln\" d=\"M685 251 H740 V79\" marker-end=\"url(#ah)\"></path>\n<path class=\"lnd\" d=\"M640 47 H235\" marker-end=\"url(#ah)\"></path>\n<text class=\"ds\" x=\"438\" y=\"38\" text-anchor=\"middle\">an error or an improvement can send you back to an earlier phase</text>\n</svg></div>\n<figcaption>The five phases in a waterfall. In practice it is not a straight line: when testing finds an error, you go back.</figcaption>\n</figure>"
    ],
    "mode": "explained"
   },
   {
    "t": "table",
    "head": [
     "Etapa",
     [
      "Què s'hi fa",
      "Qué se hace",
      "What is done"
     ],
     [
      "Què en surt",
      "Qué se obtiene",
      "What is obtained"
     ]
    ],
    "rows": [
     [
      [
       "**1. Definició del problema. Anàlisi de requeriments**",
       "**1. Definición del problema. Análisis de requisitos**",
       "**1. Problem definition. Requirements analysis**"
      ],
      [
       "S'especifica **què** s'ha de resoldre: l'enunciat i els requeriments que ha de complir la solució.",
       "Se especifica **qué** se tiene que resolver: el enunciado y los requisitos que debe cumplir la solución.",
       "It specifies **what** has to be solved: the statement and the requirements the solution must meet."
      ],
      [
       "Un enunciat clar: dades d'entrada, resultats i condicions.",
       "Un enunciado claro: datos de entrada, resultados y condiciones.",
       "A clear statement: input data, results and conditions."
      ]
     ],
     [
      [
       "**2. Disseny de l'algorisme**",
       "**2. Diseño del algoritmo**",
       "**2. Algorithm design**"
      ],
      [
       "Es decideix **com** es resol: es dissenya l'algorisme (els mòduls) amb notació algorísmica.",
       "Se decide **cómo** se resuelve: se diseña el algoritmo (los módulos) con notación algorítmica.",
       "It decides **how** it is solved: the algorithm (the modules) is designed in algorithmic notation."
      ],
      [
       "L'algorisme en pseudocodi.",
       "El algoritmo en pseudocódigo.",
       "The algorithm in pseudocode."
      ]
     ],
     [
      [
       "**3. Implementació (codificació)**",
       "**3. Implementación (codificación)**",
       "**3. Implementation (coding)**"
      ],
      [
       "Es tradueix l'algorisme a un llenguatge de programació.",
       "Se traduce el algoritmo a un lenguaje de programación.",
       "The algorithm is translated into a programming language."
      ],
      [
       "Els programes (funcions i procediments).",
       "Los programas (funciones y procedimientos).",
       "The programs (functions and procedures)."
      ]
     ],
     [
      [
       "**4. Proves**",
       "**4. Pruebas**",
       "**4. Testing**"
      ],
      [
       "Proves unitàries, d'integració i de validació del sistema.",
       "Pruebas unitarias, de integración y de validación del sistema.",
       "Unit, integration and system validation tests."
      ],
      [
       "Un programa que funciona per a tots els casos previstos.",
       "Un programa que funciona para todos los casos previstos.",
       "A program that works for all the expected cases."
      ]
     ],
     [
      [
       "**5. Operació, millores i manteniment**",
       "**5. Operación, mejoras y mantenimiento**",
       "**5. Operation, improvements and maintenance**"
      ],
      [
       "El programa s'utilitza; se'n corregeixen errors i s'hi afegeixen millores durant la seva vida útil.",
       "El programa se utiliza; se corrigen sus errores y se le añaden mejoras durante su vida útil.",
       "The program is used; its errors are fixed and improvements are added during its useful life."
      ],
      [
       "Noves versions.",
       "Nuevas versiones.",
       "New versions."
      ]
     ]
    ]
   },
   {
    "t": "h",
    "x": [
     "Un exemple petit, fase per fase",
     "Un ejemplo pequeño, fase por fase",
     "A small example, phase by phase"
    ]
   },
   {
    "t": "p",
    "x": [
     "Fixeu-vos com un problema de pràctiques ja passa per totes les fases:",
     "Fijaos en cómo un problema de prácticas ya pasa por todas las fases:",
     "Notice how a lab problem already goes through all the phases:"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "**Anàlisi.** «Una fàbrica empaqueta pilotes en caixes de 200, 50 i 10. Donat el nombre de pilotes (múltiple de 10), digues quantes caixes de cada tipus calen, amb el mínim de caixes.» Entrada: un enter. Sortida: tres enters.",
      "**Análisis.** «Una fábrica empaqueta pelotas en cajas de 200, 50 y 10. Dado el número de pelotas (múltiplo de 10), di cuántas cajas de cada tipo hacen falta, con el mínimo de cajas.» Entrada: un entero. Salida: tres enteros.",
      "**Analysis.** “A factory packs balls in boxes of 200, 50 and 10. Given the number of balls (a multiple of 10), say how many boxes of each type are needed, with the minimum number of boxes.” Input: an integer. Output: three integers."
     ],
     [
      "**Disseny.** Idea: omplir primer les caixes grans i repartir el que sobra. En pseudocodi: `G ← QNT ‖ 200`, `QNT ← QNT |R 200`, i el mateix amb 50 i amb 10.",
      "**Diseño.** Idea: llenar primero las cajas grandes y repartir lo que sobra. En pseudocódigo: `G ← QNT ‖ 200`, `QNT ← QNT |R 200`, y lo mismo con 50 y con 10.",
      "**Design.** Idea: fill the large boxes first and share out what is left. In pseudocode: `G ← QNT ‖ 200`, `QNT ← QNT |R 200`, and the same with 50 and 10."
     ],
     [
      "**Codificació.** Traduir-ho a C++: `int G = QNT / 200;`, `QNT = QNT % 200;`…",
      "**Codificación.** Traducirlo a C++: `int G = QNT / 200;`, `QNT = QNT % 200;`…",
      "**Coding.** Translate it into C++: `int G = QNT / 200;`, `QNT = QNT % 200;`…"
     ],
     [
      "**Proves.** Provar 1370 (6, 3, 2), 200 (1, 0, 0), 10 (0, 0, 1) i 0 (0, 0, 0). Si un cas falla, es torna al disseny o a la codificació.",
      "**Pruebas.** Probar 1370 (6, 3, 2), 200 (1, 0, 0), 10 (0, 0, 1) y 0 (0, 0, 0). Si un caso falla, se vuelve al diseño o a la codificación.",
      "**Testing.** Try 1370 (6, 3, 2), 200 (1, 0, 0), 10 (0, 0, 1) and 0 (0, 0, 0). If a case fails, go back to the design or the coding."
     ],
     [
      "**Manteniment.** La fàbrica treu caixes de 100: s'hi afegeix un pas i es tornen a passar les proves.",
      "**Mantenimiento.** La fábrica saca cajas de 100: se añade un paso y se vuelven a pasar las pruebas.",
      "**Maintenance.** The factory brings out boxes of 100: a step is added and the tests are run again."
     ]
    ],
    "ordered": true
   },
   {
    "t": "h",
    "x": [
     "Tres nivells de proves",
     "Tres niveles de pruebas",
     "Three levels of testing"
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 200\" role=\"img\" aria-label=\"Primer es prova cada mòdul, després junts, i al final el programa complet contra l&#x27;enunciat. A CodeRunner, els «jocs de proves» de cada exercici són proves de validació.\">\n<rect class=\"bxg\" x=\"20\" y=\"20\" width=\"250\" height=\"160\" rx=\"8\"></rect><text class=\"dt db\" x=\"145\" y=\"44\" text-anchor=\"middle\">Proves unitàries</text>\n<rect class=\"bxa\" x=\"55\" y=\"70\" width=\"70\" height=\"40\" rx=\"4\"></rect><text class=\"dt\" x=\"90\" y=\"90\" text-anchor=\"middle\">mòdul A</text>\n<rect class=\"bxa\" x=\"165\" y=\"70\" width=\"70\" height=\"40\" rx=\"4\"></rect><text class=\"dt\" x=\"200\" y=\"90\" text-anchor=\"middle\">mòdul B</text>\n<text class=\"ds\" x=\"145\" y=\"140\" text-anchor=\"middle\">cada peça per separat</text><text class=\"ds\" x=\"145\" y=\"157\" text-anchor=\"middle\">(el motor sol, al banc de proves)</text>\n<path class=\"ln\" d=\"M280 100 H318\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxg\" x=\"325\" y=\"20\" width=\"250\" height=\"160\" rx=\"8\"></rect><text class=\"dt db\" x=\"450\" y=\"44\" text-anchor=\"middle\">Proves d'integració</text>\n<rect class=\"bxa\" x=\"360\" y=\"70\" width=\"70\" height=\"40\" rx=\"4\"></rect><text class=\"dt\" x=\"395\" y=\"90\" text-anchor=\"middle\">mòdul A</text>\n<rect class=\"bxa\" x=\"470\" y=\"70\" width=\"70\" height=\"40\" rx=\"4\"></rect><text class=\"dt\" x=\"505\" y=\"90\" text-anchor=\"middle\">mòdul B</text>\n<path class=\"lna\" d=\"M430 90 H466\" marker-end=\"url(#aha)\"></path>\n<text class=\"ds\" x=\"450\" y=\"140\" text-anchor=\"middle\">les peces treballant juntes</text><text class=\"ds\" x=\"450\" y=\"157\" text-anchor=\"middle\">(motor + caixa de canvis)</text>\n<path class=\"ln\" d=\"M585 100 H623\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"630\" y=\"20\" width=\"210\" height=\"160\" rx=\"8\"></rect><text class=\"dt db\" x=\"735\" y=\"44\" text-anchor=\"middle\">Proves de validació</text>\n<rect class=\"bxo\" x=\"665\" y=\"66\" width=\"140\" height=\"48\" rx=\"4\"></rect><text class=\"dt\" x=\"735\" y=\"85\" text-anchor=\"middle\">programa sencer</text><text class=\"ds\" x=\"735\" y=\"102\" text-anchor=\"middle\">vs. l'enunciat</text>\n<text class=\"ds\" x=\"735\" y=\"140\" text-anchor=\"middle\">fa el que demana el client?</text><text class=\"ds\" x=\"735\" y=\"157\" text-anchor=\"middle\">(el cotxe a la carretera)</text>\n</svg></div>\n<figcaption>Primer es prova cada mòdul, després junts, i al final el programa complet contra l'enunciat. A CodeRunner, els «jocs de proves» de cada exercici són proves de validació.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 200\" role=\"img\" aria-label=\"Primero se prueba cada módulo, después juntos, y al final el programa completo contra el enunciado. En CodeRunner, los «juegos de pruebas» de cada ejercicio son pruebas de validación.\">\n<rect class=\"bxg\" x=\"20\" y=\"20\" width=\"250\" height=\"160\" rx=\"8\"></rect><text class=\"dt db\" x=\"145\" y=\"44\" text-anchor=\"middle\">Pruebas unitarias</text>\n<rect class=\"bxa\" x=\"55\" y=\"70\" width=\"70\" height=\"40\" rx=\"4\"></rect><text class=\"dt\" x=\"90\" y=\"90\" text-anchor=\"middle\">módulo A</text>\n<rect class=\"bxa\" x=\"165\" y=\"70\" width=\"70\" height=\"40\" rx=\"4\"></rect><text class=\"dt\" x=\"200\" y=\"90\" text-anchor=\"middle\">módulo B</text>\n<text class=\"ds\" x=\"145\" y=\"140\" text-anchor=\"middle\">cada pieza por separado</text><text class=\"ds\" x=\"145\" y=\"157\" text-anchor=\"middle\">(el motor solo, en el banco de pruebas)</text>\n<path class=\"ln\" d=\"M280 100 H318\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxg\" x=\"325\" y=\"20\" width=\"250\" height=\"160\" rx=\"8\"></rect><text class=\"dt db\" x=\"450\" y=\"44\" text-anchor=\"middle\">Pruebas de integración</text>\n<rect class=\"bxa\" x=\"360\" y=\"70\" width=\"70\" height=\"40\" rx=\"4\"></rect><text class=\"dt\" x=\"395\" y=\"90\" text-anchor=\"middle\">módulo A</text>\n<rect class=\"bxa\" x=\"470\" y=\"70\" width=\"70\" height=\"40\" rx=\"4\"></rect><text class=\"dt\" x=\"505\" y=\"90\" text-anchor=\"middle\">módulo B</text>\n<path class=\"lna\" d=\"M430 90 H466\" marker-end=\"url(#aha)\"></path>\n<text class=\"ds\" x=\"450\" y=\"140\" text-anchor=\"middle\">las piezas trabajando juntas</text><text class=\"ds\" x=\"450\" y=\"157\" text-anchor=\"middle\">(motor + caja de cambios)</text>\n<path class=\"ln\" d=\"M585 100 H623\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"630\" y=\"20\" width=\"210\" height=\"160\" rx=\"8\"></rect><text class=\"dt db\" x=\"735\" y=\"44\" text-anchor=\"middle\">Pruebas de validación</text>\n<rect class=\"bxo\" x=\"665\" y=\"66\" width=\"140\" height=\"48\" rx=\"4\"></rect><text class=\"dt\" x=\"735\" y=\"85\" text-anchor=\"middle\">programa completo</text><text class=\"ds\" x=\"735\" y=\"102\" text-anchor=\"middle\">vs. el enunciado</text>\n<text class=\"ds\" x=\"735\" y=\"140\" text-anchor=\"middle\">¿hace lo que pide el cliente?</text><text class=\"ds\" x=\"735\" y=\"157\" text-anchor=\"middle\">(el coche en la carretera)</text>\n</svg></div>\n<figcaption>Primero se prueba cada módulo, después juntos, y al final el programa completo contra el enunciado. En CodeRunner, los «juegos de pruebas» de cada ejercicio son pruebas de validación.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 200\" role=\"img\" aria-label=\"First each module is tested, then together, and finally the whole program against the statement. In CodeRunner, the “test sets” of each exercise are validation tests.\">\n<rect class=\"bxg\" x=\"20\" y=\"20\" width=\"250\" height=\"160\" rx=\"8\"></rect><text class=\"dt db\" x=\"145\" y=\"44\" text-anchor=\"middle\">Unit tests</text>\n<rect class=\"bxa\" x=\"55\" y=\"70\" width=\"70\" height=\"40\" rx=\"4\"></rect><text class=\"dt\" x=\"90\" y=\"90\" text-anchor=\"middle\">module A</text>\n<rect class=\"bxa\" x=\"165\" y=\"70\" width=\"70\" height=\"40\" rx=\"4\"></rect><text class=\"dt\" x=\"200\" y=\"90\" text-anchor=\"middle\">module B</text>\n<text class=\"ds\" x=\"145\" y=\"140\" text-anchor=\"middle\">each piece separately</text><text class=\"ds\" x=\"145\" y=\"157\" text-anchor=\"middle\">(the engine alone, on the test bench)</text>\n<path class=\"ln\" d=\"M280 100 H318\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxg\" x=\"325\" y=\"20\" width=\"250\" height=\"160\" rx=\"8\"></rect><text class=\"dt db\" x=\"450\" y=\"44\" text-anchor=\"middle\">Integration tests</text>\n<rect class=\"bxa\" x=\"360\" y=\"70\" width=\"70\" height=\"40\" rx=\"4\"></rect><text class=\"dt\" x=\"395\" y=\"90\" text-anchor=\"middle\">module A</text>\n<rect class=\"bxa\" x=\"470\" y=\"70\" width=\"70\" height=\"40\" rx=\"4\"></rect><text class=\"dt\" x=\"505\" y=\"90\" text-anchor=\"middle\">module B</text>\n<path class=\"lna\" d=\"M430 90 H466\" marker-end=\"url(#aha)\"></path>\n<text class=\"ds\" x=\"450\" y=\"140\" text-anchor=\"middle\">the pieces working together</text><text class=\"ds\" x=\"450\" y=\"157\" text-anchor=\"middle\">(engine + gearbox)</text>\n<path class=\"ln\" d=\"M585 100 H623\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"630\" y=\"20\" width=\"210\" height=\"160\" rx=\"8\"></rect><text class=\"dt db\" x=\"735\" y=\"44\" text-anchor=\"middle\">Validation tests</text>\n<rect class=\"bxo\" x=\"665\" y=\"66\" width=\"140\" height=\"48\" rx=\"4\"></rect><text class=\"dt\" x=\"735\" y=\"85\" text-anchor=\"middle\">complete program</text><text class=\"ds\" x=\"735\" y=\"102\" text-anchor=\"middle\">vs. the statement</text>\n<text class=\"ds\" x=\"735\" y=\"140\" text-anchor=\"middle\">does it do what the client asks?</text><text class=\"ds\" x=\"735\" y=\"157\" text-anchor=\"middle\">(the car on the road)</text>\n</svg></div>\n<figcaption>First each module is tested, then together, and finally the whole program against the statement. In CodeRunner, the “test sets” of each exercise are validation tests.</figcaption>\n</figure>"
    ],
    "mode": "explained"
   }
  ],
  "t1-4": [
   {
    "t": "html",
    "h": [
     "<div class=\"ip-cols\">\n<div class=\"ip-card\"><h4>Visió històrica</h4><p>Les úniques eines eren les de <b>codificar</b>: un editor i un compilador. Tot el procés girava al voltant d'escriure codi.</p></div>\n<div class=\"ip-card\"><h4>Actualment: eines CASE</h4><p><b>CASE</b> (<i>Computer-Aided Software Engineering</i>): programes que ajuden a <b>desenvolupar, mantenir i documentar</b> el software en <b>totes</b> les fases, no només en la codificació.</p></div>\n</div>",
     "<div class=\"ip-cols\">\n<div class=\"ip-card\"><h4>Visión histórica</h4><p>Las únicas herramientas eran las de <b>codificar</b>: un editor y un compilador. Todo el proceso giraba en torno a escribir código.</p></div>\n<div class=\"ip-card\"><h4>Actualmente: herramientas CASE</h4><p><b>CASE</b> (<i>Computer-Aided Software Engineering</i>): programas que ayudan a <b>desarrollar, mantener y documentar</b> el software en <b>todas</b> las fases, no solo en la codificación.</p></div>\n</div>",
     "<div class=\"ip-cols\">\n<div class=\"ip-card\"><h4>Historical view</h4><p>The only tools were for <b>coding</b>: an editor and a compiler. The whole process revolved around writing code.</p></div>\n<div class=\"ip-card\"><h4>Today: CASE tools</h4><p><b>CASE</b> (<i>Computer-Aided Software Engineering</i>): programs that help to <b>develop, maintain and document</b> software in <b>all</b> phases, not only in coding.</p></div>\n</div>"
    ],
    "mode": "explained"
   },
   {
    "t": "table",
    "head": [
     "Fase",
     [
      "Tipus d'eina CASE",
      "Tipo de herramienta CASE",
      "Type of CASE tool"
     ],
     [
      "Per a què serveix",
      "Para qué sirve",
      "What it is for"
     ]
    ],
    "rows": [
     [
      [
       "Anàlisi i disseny",
       "Análisis y diseño",
       "Analysis and design"
      ],
      [
       "Eines de modelatge i diagrames",
       "Herramientas de modelado y diagramas",
       "Modelling and diagram tools"
      ],
      [
       "Dibuixar els mòduls i com es relacionen abans d'escriure codi.",
       "Dibujar los módulos y cómo se relacionan antes de escribir código.",
       "Drawing the modules and how they relate before writing code."
      ]
     ],
     [
      [
       "Codificació",
       "Codificación",
       "Coding"
      ],
      [
       "Entorns de desenvolupament (editor, compilador, depurador)",
       "Entornos de desarrollo (editor, compilador, depurador)",
       "Development environments (editor, compiler, debugger)"
      ],
      [
       "Escriure, compilar i executar pas a pas.",
       "Escribir, compilar y ejecutar paso a paso.",
       "Writing, compiling and running step by step."
      ]
     ],
     [
      [
       "Proves",
       "Pruebas",
       "Testing"
      ],
      [
       "Proves automàtiques",
       "Pruebas automáticas",
       "Automated tests"
      ],
      [
       "Passar centenars de jocs de proves cada vegada que es canvia el codi (com fa CodeRunner).",
       "Pasar cientos de juegos de pruebas cada vez que se cambia el código (como hace CodeRunner).",
       "Running hundreds of test sets every time the code changes (as CodeRunner does)."
      ]
     ],
     [
      [
       "Manteniment",
       "Mantenimiento",
       "Maintenance"
      ],
      [
       "Control de versions i documentació",
       "Control de versiones y documentación",
       "Version control and documentation"
      ],
      [
       "Saber què ha canviat, qui ho ha canviat i tornar enrere si cal.",
       "Saber qué ha cambiado, quién lo ha cambiado y volver atrás si hace falta.",
       "Knowing what has changed, who changed it and going back if needed."
      ]
     ]
    ]
   }
  ],
  "t1-5": [
   {
    "t": "p",
    "x": [
     "Al seminari recorrerem aquestes fases a escala petita, partint sempre de l'enunciat. Cada fase té el seu lloc concret en aquest curs:",
     "En el seminario recorreremos estas fases a pequeña escala, partiendo siempre del enunciado. Cada fase tiene su lugar concreto en este curso:",
     "In the seminar we will go through these phases on a small scale, always starting from the statement. Each phase has its specific place in this course:"
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:660px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 210\" role=\"img\" aria-label=\"El cicle que farem a cada exercici: de l&#x27;enunciat a l&#x27;algorisme en pseudocodi, del pseudocodi al C++, i proves fins que tot passa.\">\n<rect class=\"bxg\" x=\"20\" y=\"80\" width=\"130\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"85\" y=\"100\" text-anchor=\"middle\">Enunciat</text><text class=\"ds\" x=\"85\" y=\"118\" text-anchor=\"middle\">del problema</text>\n<path class=\"ln\" d=\"M150 105 H183\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"190\" y=\"80\" width=\"130\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"255\" y=\"100\" text-anchor=\"middle\">Disseny</text><text class=\"ds\" x=\"255\" y=\"118\" text-anchor=\"middle\">pensar el com</text>\n<path class=\"ln\" d=\"M255 80 V48\" marker-end=\"url(#ah)\"></path><rect class=\"bxq\" x=\"190\" y=\"12\" width=\"130\" height=\"34\" rx=\"6\"></rect><text class=\"dt\" x=\"255\" y=\"29\" text-anchor=\"middle\">Algorisme</text>\n<text class=\"ds\" x=\"255\" y=\"150\" text-anchor=\"middle\">pseudocodi</text>\n<path class=\"ln\" d=\"M320 105 H353\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"360\" y=\"80\" width=\"140\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"430\" y=\"100\" text-anchor=\"middle\">Codificació</text><text class=\"ds\" x=\"430\" y=\"118\" text-anchor=\"middle\">traduir a un llenguatge</text>\n<path class=\"ln\" d=\"M430 80 V48\" marker-end=\"url(#ah)\"></path><rect class=\"bxq\" x=\"360\" y=\"12\" width=\"140\" height=\"34\" rx=\"6\"></rect><text class=\"dt\" x=\"430\" y=\"29\" text-anchor=\"middle\">Programa</text>\n<text class=\"ds\" x=\"430\" y=\"150\" text-anchor=\"middle\">C++</text>\n<path class=\"ln\" d=\"M500 105 H533\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"540\" y=\"80\" width=\"300\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"690\" y=\"98\" text-anchor=\"middle\">Proves</text><text class=\"ds\" x=\"690\" y=\"117\" text-anchor=\"middle\">unitàries → integració → validació del problema</text>\n<text class=\"ds\" x=\"690\" y=\"150\" text-anchor=\"middle\">jocs de proves (CodeRunner)</text>\n<path class=\"lnd\" d=\"M690 160 V190 H255 V160\" marker-end=\"url(#ah)\"></path><text class=\"ds\" x=\"470\" y=\"185\" text-anchor=\"middle\">si falla una prova, es revisa el disseny o el codi</text>\n</svg></div>\n<figcaption>El cicle que farem a cada exercici: de l'enunciat a l'algorisme en pseudocodi, del pseudocodi al C++, i proves fins que tot passa.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:660px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 210\" role=\"img\" aria-label=\"El ciclo que seguiremos en cada ejercicio: del enunciado al algoritmo en pseudocódigo, del pseudocódigo al C++, y pruebas hasta que todo pasa.\">\n<rect class=\"bxg\" x=\"20\" y=\"80\" width=\"130\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"85\" y=\"100\" text-anchor=\"middle\">Enunciado</text><text class=\"ds\" x=\"85\" y=\"118\" text-anchor=\"middle\">del problema</text>\n<path class=\"ln\" d=\"M150 105 H183\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"190\" y=\"80\" width=\"130\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"255\" y=\"100\" text-anchor=\"middle\">Diseño</text><text class=\"ds\" x=\"255\" y=\"118\" text-anchor=\"middle\">pensar el cómo</text>\n<path class=\"ln\" d=\"M255 80 V48\" marker-end=\"url(#ah)\"></path><rect class=\"bxq\" x=\"190\" y=\"12\" width=\"130\" height=\"34\" rx=\"6\"></rect><text class=\"dt\" x=\"255\" y=\"29\" text-anchor=\"middle\">Algoritmo</text>\n<text class=\"ds\" x=\"255\" y=\"150\" text-anchor=\"middle\">pseudocódigo</text>\n<path class=\"ln\" d=\"M320 105 H353\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"360\" y=\"80\" width=\"140\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"430\" y=\"100\" text-anchor=\"middle\">Codificación</text><text class=\"ds\" x=\"430\" y=\"118\" text-anchor=\"middle\">traducir a un lenguaje</text>\n<path class=\"ln\" d=\"M430 80 V48\" marker-end=\"url(#ah)\"></path><rect class=\"bxq\" x=\"360\" y=\"12\" width=\"140\" height=\"34\" rx=\"6\"></rect><text class=\"dt\" x=\"430\" y=\"29\" text-anchor=\"middle\">Programa</text>\n<text class=\"ds\" x=\"430\" y=\"150\" text-anchor=\"middle\">C++</text>\n<path class=\"ln\" d=\"M500 105 H533\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"540\" y=\"80\" width=\"300\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"690\" y=\"98\" text-anchor=\"middle\">Pruebas</text><text class=\"ds\" x=\"690\" y=\"117\" text-anchor=\"middle\">unitarias → integración → validación del problema</text>\n<text class=\"ds\" x=\"690\" y=\"150\" text-anchor=\"middle\">juegos de pruebas (CodeRunner)</text>\n<path class=\"lnd\" d=\"M690 160 V190 H255 V160\" marker-end=\"url(#ah)\"></path><text class=\"ds\" x=\"470\" y=\"185\" text-anchor=\"middle\">si falla una prueba, se revisa el diseño o el código</text>\n</svg></div>\n<figcaption>El ciclo que seguiremos en cada ejercicio: del enunciado al algoritmo en pseudocódigo, del pseudocódigo al C++, y pruebas hasta que todo pasa.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:660px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 210\" role=\"img\" aria-label=\"The cycle we will follow in each exercise: from the statement to the algorithm in pseudocode, from pseudocode to C++, and testing until everything passes.\">\n<rect class=\"bxg\" x=\"20\" y=\"80\" width=\"130\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"85\" y=\"100\" text-anchor=\"middle\">Statement</text><text class=\"ds\" x=\"85\" y=\"118\" text-anchor=\"middle\">del problema</text>\n<path class=\"ln\" d=\"M150 105 H183\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"190\" y=\"80\" width=\"130\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"255\" y=\"100\" text-anchor=\"middle\">Design</text><text class=\"ds\" x=\"255\" y=\"118\" text-anchor=\"middle\">thinking about how</text>\n<path class=\"ln\" d=\"M255 80 V48\" marker-end=\"url(#ah)\"></path><rect class=\"bxq\" x=\"190\" y=\"12\" width=\"130\" height=\"34\" rx=\"6\"></rect><text class=\"dt\" x=\"255\" y=\"29\" text-anchor=\"middle\">Algorithm</text>\n<text class=\"ds\" x=\"255\" y=\"150\" text-anchor=\"middle\">pseudocode</text>\n<path class=\"ln\" d=\"M320 105 H353\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"360\" y=\"80\" width=\"140\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"430\" y=\"100\" text-anchor=\"middle\">Coding</text><text class=\"ds\" x=\"430\" y=\"118\" text-anchor=\"middle\">translating into a language</text>\n<path class=\"ln\" d=\"M430 80 V48\" marker-end=\"url(#ah)\"></path><rect class=\"bxq\" x=\"360\" y=\"12\" width=\"140\" height=\"34\" rx=\"6\"></rect><text class=\"dt\" x=\"430\" y=\"29\" text-anchor=\"middle\">Programa</text>\n<text class=\"ds\" x=\"430\" y=\"150\" text-anchor=\"middle\">C++</text>\n<path class=\"ln\" d=\"M500 105 H533\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"540\" y=\"80\" width=\"300\" height=\"50\" rx=\"6\"></rect><text class=\"dt db\" x=\"690\" y=\"98\" text-anchor=\"middle\">Testing</text><text class=\"ds\" x=\"690\" y=\"117\" text-anchor=\"middle\">unit → integration → validation of the problem</text>\n<text class=\"ds\" x=\"690\" y=\"150\" text-anchor=\"middle\">test sets (CodeRunner)</text>\n<path class=\"lnd\" d=\"M690 160 V190 H255 V160\" marker-end=\"url(#ah)\"></path><text class=\"ds\" x=\"470\" y=\"185\" text-anchor=\"middle\">if a test fails, the design or the code is reviewed</text>\n</svg></div>\n<figcaption>The cycle we will follow in each exercise: from the statement to the algorithm in pseudocode, from pseudocode to C++, and testing until everything passes.</figcaption>\n</figure>"
    ],
    "mode": "explained"
   }
  ],
  "t1-6": [
   {
    "t": "p",
    "x": [
     "Un **llenguatge de programació** és un llenguatge per **expressar algorismes** de manera que un ordinador els pugui executar (per **codificar** algorismes). Qualsevol llenguatge de programació ha de tenir, com a mínim, aquests quatre tipus d'instruccions:",
     "Un **lenguaje de programación** es un lenguaje para **expresar algoritmos** de manera que un ordenador los pueda ejecutar (para **codificar** algoritmos). Cualquier lenguaje de programación debe tener, como mínimo, estos cuatro tipos de instrucciones:",
     "A **programming language** is a language for **expressing algorithms** so that a computer can execute them (for **coding** algorithms). Any programming language must have, at least, these four kinds of instructions:"
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Tipus",
      "Tipo",
      "Type"
     ],
     [
      "Què fa",
      "Qué hace",
      "What it does"
     ],
     [
      "Pseudocodi",
      "Pseudocódigo",
      "Pseudocode"
     ],
     "C++"
    ],
    "rows": [
     [
      [
       "**Entrada / sortida**",
       "**Entrada / salida**",
       "**Input / output**"
      ],
      [
       "Comunicació entre els perifèrics (teclat, pantalla) i la CPU",
       "Comunicación entre los periféricos (teclado, pantalla) y la CPU",
       "Communication between the peripherals (keyboard, screen) and the CPU"
      ],
      "`Llegir X` · `Escriure X`",
      "`cin >> x;` · `cout << x;`"
     ],
     [
      [
       "**Càlcul**",
       "**Cálculo**",
       "**Calculation**"
      ],
      [
       "Operacions matemàtiques",
       "Operaciones matemáticas",
       "Mathematical operations"
      ],
      "`A ← B · 2 + 1`",
      "`a = b * 2 + 1;`"
     ],
     [
      [
       "**Lògiques**",
       "**Lógicas**",
       "**Logical**"
      ],
      [
       "Comparar per decidir per on continua el programa",
       "Comparar para decidir por dónde continúa el programa",
       "Comparing to decide where the program continues"
      ],
      "`SI X > 0 LLAVORS`",
      "`if (x > 0)`"
     ],
     [
      [
       "**De moviment**",
       "**De movimiento**",
       "**Data movement**"
      ],
      [
       "Moure i consultar dades a la memòria",
       "Mover y consultar datos en la memoria",
       "Moving and reading data in memory"
      ],
      "`MAX ← N1`",
      "`maxim = n1;`"
     ]
    ]
   },
   {
    "t": "h",
    "x": [
     "Llenguatge màquina",
     "Lenguaje máquina",
     "Machine language"
    ]
   },
   {
    "t": "p",
    "x": [
     "Les instruccions que un ordinador sap executar directament estan codificades en **llenguatge màquina**: **binari**, uns i zeros. Una mateixa operació, «suma *b* a *a*», es veu així a cada nivell:",
     "Las instrucciones que un ordenador sabe ejecutar directamente están codificadas en **lenguaje máquina**: **binario**, unos y ceros. Una misma operación, «suma *b* a *a*», se ve así en cada nivel:",
     "The instructions a computer can execute directly are encoded in **machine language**: **binary**, ones and zeros. The same operation, “add *b* to *a*”, looks like this at each level:"
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 230\" role=\"img\" aria-label=\"La mateixa suma en tres nivells. Els dos bytes de baix (01 D8 en hexadecimal) són la codificació real d&#x27;add eax, ebx en un processador x86.\">\n<rect class=\"bxo\" x=\"20\" y=\"16\" width=\"820\" height=\"52\" rx=\"6\"></rect><text class=\"dt db\" x=\"40\" y=\"36\">Alt nivell (C++)</text><text class=\"ds\" x=\"40\" y=\"55\">llegible per les persones · igual a qualsevol ordinador</text><text class=\"dm db\" x=\"560\" y=\"42\" text-anchor=\"middle\" style=\"font-size:17px\">a = a + b;</text>\n<rect class=\"bxw\" x=\"20\" y=\"88\" width=\"820\" height=\"52\" rx=\"6\"></rect><text class=\"dt db\" x=\"40\" y=\"108\">Assemblador (x86)</text><text class=\"ds\" x=\"40\" y=\"127\">una paraula per instrucció · depèn del processador</text><text class=\"dm db\" x=\"560\" y=\"114\" text-anchor=\"middle\" style=\"font-size:17px\">add eax, ebx</text>\n<rect class=\"bxp\" x=\"20\" y=\"160\" width=\"820\" height=\"52\" rx=\"6\"></rect><text class=\"dt db\" x=\"40\" y=\"180\">Llenguatge màquina</text><text class=\"ds\" x=\"40\" y=\"199\">el que executa la CPU · bits</text><text class=\"dm db\" x=\"560\" y=\"186\" text-anchor=\"middle\" style=\"font-size:17px\">00000001 11011000</text>\n<path class=\"ln\" d=\"M800 68 V86\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M800 140 V158\" marker-end=\"url(#ah)\"></path>\n</svg></div>\n<figcaption>La mateixa suma en tres nivells. Els dos bytes de baix (01 D8 en hexadecimal) són la codificació real d'<code>add eax, ebx</code> en un processador x86.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 230\" role=\"img\" aria-label=\"La misma suma en tres niveles. Los dos bytes de abajo (01 D8 en hexadecimal) son la codificación real de add eax, ebx en un procesador x86.\">\n<rect class=\"bxo\" x=\"20\" y=\"16\" width=\"820\" height=\"52\" rx=\"6\"></rect><text class=\"dt db\" x=\"40\" y=\"36\">Alto nivel (C++)</text><text class=\"ds\" x=\"40\" y=\"55\">legible por las personas · igual en cualquier ordenador</text><text class=\"dm db\" x=\"560\" y=\"42\" text-anchor=\"middle\" style=\"font-size:17px\">a = a + b;</text>\n<rect class=\"bxw\" x=\"20\" y=\"88\" width=\"820\" height=\"52\" rx=\"6\"></rect><text class=\"dt db\" x=\"40\" y=\"108\">Ensamblador (x86)</text><text class=\"ds\" x=\"40\" y=\"127\">una palabra por instrucción · depende del procesador</text><text class=\"dm db\" x=\"560\" y=\"114\" text-anchor=\"middle\" style=\"font-size:17px\">add eax, ebx</text>\n<rect class=\"bxp\" x=\"20\" y=\"160\" width=\"820\" height=\"52\" rx=\"6\"></rect><text class=\"dt db\" x=\"40\" y=\"180\">Lenguaje máquina</text><text class=\"ds\" x=\"40\" y=\"199\">lo que ejecuta la CPU · bits</text><text class=\"dm db\" x=\"560\" y=\"186\" text-anchor=\"middle\" style=\"font-size:17px\">00000001 11011000</text>\n<path class=\"ln\" d=\"M800 68 V86\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M800 140 V158\" marker-end=\"url(#ah)\"></path>\n</svg></div>\n<figcaption>La misma suma en tres niveles. Los dos bytes de abajo (01 D8 en hexadecimal) son la codificación real de <code>add eax, ebx</code> en un procesador x86.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 230\" role=\"img\" aria-label=\"The same addition at three levels. The two bytes at the bottom (01 D8 in hexadecimal) are the real encoding of add eax, ebx on an x86 processor.\">\n<rect class=\"bxo\" x=\"20\" y=\"16\" width=\"820\" height=\"52\" rx=\"6\"></rect><text class=\"dt db\" x=\"40\" y=\"36\">High level (C++)</text><text class=\"ds\" x=\"40\" y=\"55\">readable by people · the same on any computer</text><text class=\"dm db\" x=\"560\" y=\"42\" text-anchor=\"middle\" style=\"font-size:17px\">a = a + b;</text>\n<rect class=\"bxw\" x=\"20\" y=\"88\" width=\"820\" height=\"52\" rx=\"6\"></rect><text class=\"dt db\" x=\"40\" y=\"108\">Assembly (x86)</text><text class=\"ds\" x=\"40\" y=\"127\">one word per instruction · depends on the processor</text><text class=\"dm db\" x=\"560\" y=\"114\" text-anchor=\"middle\" style=\"font-size:17px\">add eax, ebx</text>\n<rect class=\"bxp\" x=\"20\" y=\"160\" width=\"820\" height=\"52\" rx=\"6\"></rect><text class=\"dt db\" x=\"40\" y=\"180\">Machine language</text><text class=\"ds\" x=\"40\" y=\"199\">what the CPU executes · bits</text><text class=\"dm db\" x=\"560\" y=\"186\" text-anchor=\"middle\" style=\"font-size:17px\">00000001 11011000</text>\n<path class=\"ln\" d=\"M800 68 V86\" marker-end=\"url(#ah)\"></path><path class=\"ln\" d=\"M800 140 V158\" marker-end=\"url(#ah)\"></path>\n</svg></div>\n<figcaption>The same addition at three levels. The two bytes at the bottom (01 D8 in hexadecimal) are the real encoding of <code>add eax, ebx</code> on an x86 processor.</figcaption>\n</figure>"
    ],
    "mode": "explained"
   },
   {
    "t": "list",
    "items": [
     [
      "Codificar un algorisme directament en llenguatge màquina és **lent i pesat**: qualsevol programa útil són milers de línies com la de baix.",
      "Codificar un algoritmo directamente en lenguaje máquina es **lento y pesado**: cualquier programa útil son miles de líneas como la de abajo.",
      "Coding an algorithm directly in machine language is **slow and tedious**: any useful program is thousands of lines like the one below."
     ],
     [
      "Cal conèixer l'**arquitectura** de l'ordinador (registres, adreces…): és programació de **baix nivell**, orientada a la màquina.",
      "Hay que conocer la **arquitectura** del ordenador (registros, direcciones…): es programación de **bajo nivel**, orientada a la máquina.",
      "You have to know the computer's **architecture** (registers, addresses…): it is **low-level** programming, machine-oriented."
     ],
     [
      "Cada família de processadors té el seu **propi joc d'instruccions**: un programa en llenguatge màquina d'un processador no funciona en un altre.",
      "Cada familia de procesadores tiene su **propio juego de instrucciones**: un programa en lenguaje máquina de un procesador no funciona en otro.",
      "Each family of processors has its **own instruction set**: a machine-language program for one processor does not work on another."
     ]
    ]
   },
   {
    "t": "h",
    "x": [
     "Llenguatge d'alt nivell",
     "Lenguaje de alto nivel",
     "High-level language"
    ]
   },
   {
    "t": "p",
    "x": [
     "Els llenguatges d'**alt nivell** estan pensats per resoldre problemes (orientats al **problema**), no per controlar la màquina (orientats a la **màquina**):",
     "Los lenguajes de **alto nivel** están pensados para resolver problemas (orientados al **problema**), no para controlar la máquina (orientados a la **máquina**):",
     "**High-level** languages are designed to solve problems (**problem**-oriented), not to control the machine (**machine**-oriented):"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "Són **independents de l'arquitectura**: el mateix programa en C++ es pot fer servir en un portàtil, en un servidor o en el navegador d'aquesta pàgina.",
      "Son **independientes de la arquitectura**: el mismo programa en C++ se puede usar en un portátil, en un servidor o en el navegador de esta página.",
      "They are **independent of the architecture**: the same C++ program can be used on a laptop, on a server or in the browser showing this page."
     ],
     [
      "Necessiten un **traductor** per poder-se executar, perquè l'ordinador només entén llenguatge màquina.",
      "Necesitan un **traductor** para poder ejecutarse, porque el ordenador solo entiende lenguaje máquina.",
      "They need a **translator** in order to run, because the computer only understands machine language."
     ],
     [
      "Fan servir un llenguatge formal **proper al natural**: més fàcils d'escriure, d'aprendre i de **mantenir** (modificar).",
      "Usan un lenguaje formal **cercano al natural**: más fáciles de escribir, de aprender y de **mantener** (modificar).",
      "They use a formal language **close to natural language**: easier to write, to learn and to **maintain** (modify)."
     ]
    ]
   },
   {
    "t": "h",
    "x": [
     "Traductors: compilador i intèrpret",
     "Traductores: compilador e intérprete",
     "Translators: compiler and interpreter"
    ]
   },
   {
    "t": "p",
    "x": [
     "Hi ha dues maneres de traduir un programa d'alt nivell. Una analogia ajuda: un **compilador** és com qui tradueix un llibre sencer abans de publicar-lo; un **intèrpret** és com un traductor simultani en una conferència, que tradueix frase a frase mentre la persona parla.",
     "Hay dos maneras de traducir un programa de alto nivel. Una analogía ayuda: un **compilador** es como quien traduce un libro entero antes de publicarlo; un **intérprete** es como un traductor simultáneo en una conferencia, que traduce frase a frase mientras la persona habla.",
     "There are two ways of translating a high-level program. An analogy helps: a **compiler** is like someone who translates a whole book before publishing it; an **interpreter** is like a simultaneous interpreter at a conference, who translates sentence by sentence while the person speaks."
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 250\" role=\"img\" aria-label=\"Compilar: traduir-ho tot abans d&#x27;executar. Interpretar: traduir i executar alhora.\">\n<text class=\"dt db\" x=\"20\" y=\"22\">Compilador</text>\n<rect class=\"bxg\" x=\"20\" y=\"36\" width=\"140\" height=\"52\" rx=\"6\"></rect><text class=\"dt\" x=\"90\" y=\"56\" text-anchor=\"middle\">Programa font</text><text class=\"ds\" x=\"90\" y=\"74\" text-anchor=\"middle\">tot el codi</text>\n<path class=\"ln\" d=\"M160 62 H198\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"205\" y=\"36\" width=\"160\" height=\"52\" rx=\"6\"></rect><text class=\"dt db\" x=\"285\" y=\"56\" text-anchor=\"middle\">Compilador</text><text class=\"ds\" x=\"285\" y=\"74\" text-anchor=\"middle\">tradueix TOT, un cop</text>\n<path class=\"ln\" d=\"M365 62 H403\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"410\" y=\"36\" width=\"160\" height=\"52\" rx=\"6\"></rect><text class=\"dt\" x=\"490\" y=\"56\" text-anchor=\"middle\">Programa objecte</text><text class=\"ds\" x=\"490\" y=\"74\" text-anchor=\"middle\">executable</text>\n<path class=\"ln\" d=\"M570 62 H608\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bx\" x=\"615\" y=\"36\" width=\"225\" height=\"52\" rx=\"6\"></rect><text class=\"dt\" x=\"727\" y=\"56\" text-anchor=\"middle\">s'executa tantes vegades</text><text class=\"ds\" x=\"727\" y=\"74\" text-anchor=\"middle\">com calgui, sense traduir</text>\n<path class=\"lnb\" d=\"M285 88 V112\" marker-end=\"url(#ahb)\"></path><text class=\"ds tb\" x=\"285\" y=\"126\" text-anchor=\"middle\">si hi ha un error, no s'executa res</text>\n<text class=\"dt db\" x=\"20\" y=\"160\">Intèrpret</text>\n<rect class=\"bxg\" x=\"20\" y=\"174\" width=\"140\" height=\"52\" rx=\"6\"></rect><text class=\"dt\" x=\"90\" y=\"194\" text-anchor=\"middle\">Programa font</text><text class=\"ds\" x=\"90\" y=\"212\" text-anchor=\"middle\">instrucció a instrucció</text>\n<path class=\"ln\" d=\"M160 200 H198\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"205\" y=\"174\" width=\"365\" height=\"52\" rx=\"6\"></rect><text class=\"dt db\" x=\"387\" y=\"194\" text-anchor=\"middle\">Intèrpret: tradueix una instrucció i l'executa,</text><text class=\"ds\" x=\"387\" y=\"212\" text-anchor=\"middle\">després la següent… cada vegada que s'executa el programa</text>\n<path class=\"ln\" d=\"M570 200 H608\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bx\" x=\"615\" y=\"174\" width=\"225\" height=\"52\" rx=\"6\"></rect><text class=\"dt\" x=\"727\" y=\"194\" text-anchor=\"middle\">resultats a mesura</text><text class=\"ds\" x=\"727\" y=\"212\" text-anchor=\"middle\">si hi ha un error, s'atura allà</text>\n</svg></div>\n<figcaption>Compilar: traduir-ho tot abans d'executar. Interpretar: traduir i executar alhora.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 250\" role=\"img\" aria-label=\"Compilar: traducirlo todo antes de ejecutar. Interpretar: traducir y ejecutar a la vez.\">\n<text class=\"dt db\" x=\"20\" y=\"22\">Compilador</text>\n<rect class=\"bxg\" x=\"20\" y=\"36\" width=\"140\" height=\"52\" rx=\"6\"></rect><text class=\"dt\" x=\"90\" y=\"56\" text-anchor=\"middle\">Programa fuente</text><text class=\"ds\" x=\"90\" y=\"74\" text-anchor=\"middle\">todo el código</text>\n<path class=\"ln\" d=\"M160 62 H198\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"205\" y=\"36\" width=\"160\" height=\"52\" rx=\"6\"></rect><text class=\"dt db\" x=\"285\" y=\"56\" text-anchor=\"middle\">Compilador</text><text class=\"ds\" x=\"285\" y=\"74\" text-anchor=\"middle\">traduce TODO, una vez</text>\n<path class=\"ln\" d=\"M365 62 H403\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"410\" y=\"36\" width=\"160\" height=\"52\" rx=\"6\"></rect><text class=\"dt\" x=\"490\" y=\"56\" text-anchor=\"middle\">Programa objeto</text><text class=\"ds\" x=\"490\" y=\"74\" text-anchor=\"middle\">ejecutable</text>\n<path class=\"ln\" d=\"M570 62 H608\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bx\" x=\"615\" y=\"36\" width=\"225\" height=\"52\" rx=\"6\"></rect><text class=\"dt\" x=\"727\" y=\"56\" text-anchor=\"middle\">se ejecuta tantas veces</text><text class=\"ds\" x=\"727\" y=\"74\" text-anchor=\"middle\">como haga falta, sin traducir</text>\n<path class=\"lnb\" d=\"M285 88 V112\" marker-end=\"url(#ahb)\"></path><text class=\"ds tb\" x=\"285\" y=\"126\" text-anchor=\"middle\">si hay un error, no se ejecuta nada</text>\n<text class=\"dt db\" x=\"20\" y=\"160\">Intérprete</text>\n<rect class=\"bxg\" x=\"20\" y=\"174\" width=\"140\" height=\"52\" rx=\"6\"></rect><text class=\"dt\" x=\"90\" y=\"194\" text-anchor=\"middle\">Programa fuente</text><text class=\"ds\" x=\"90\" y=\"212\" text-anchor=\"middle\">instrucción a instrucción</text>\n<path class=\"ln\" d=\"M160 200 H198\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"205\" y=\"174\" width=\"365\" height=\"52\" rx=\"6\"></rect><text class=\"dt db\" x=\"387\" y=\"194\" text-anchor=\"middle\">Intérprete: traduce una instrucción y la ejecuta,</text><text class=\"ds\" x=\"387\" y=\"212\" text-anchor=\"middle\">después la siguiente… cada vez que se ejecuta el programa</text>\n<path class=\"ln\" d=\"M570 200 H608\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bx\" x=\"615\" y=\"174\" width=\"225\" height=\"52\" rx=\"6\"></rect><text class=\"dt\" x=\"727\" y=\"194\" text-anchor=\"middle\">resultados sobre la marcha</text><text class=\"ds\" x=\"727\" y=\"212\" text-anchor=\"middle\">si hay un error, se detiene allí</text>\n</svg></div>\n<figcaption>Compilar: traducirlo todo antes de ejecutar. Interpretar: traducir y ejecutar a la vez.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:640px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 250\" role=\"img\" aria-label=\"Compiling: translating everything before running. Interpreting: translating and running at the same time.\">\n<text class=\"dt db\" x=\"20\" y=\"22\">Compilador</text>\n<rect class=\"bxg\" x=\"20\" y=\"36\" width=\"140\" height=\"52\" rx=\"6\"></rect><text class=\"dt\" x=\"90\" y=\"56\" text-anchor=\"middle\">Source program</text><text class=\"ds\" x=\"90\" y=\"74\" text-anchor=\"middle\">all the code</text>\n<path class=\"ln\" d=\"M160 62 H198\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"205\" y=\"36\" width=\"160\" height=\"52\" rx=\"6\"></rect><text class=\"dt db\" x=\"285\" y=\"56\" text-anchor=\"middle\">Compilador</text><text class=\"ds\" x=\"285\" y=\"74\" text-anchor=\"middle\">translates EVERYTHING, once</text>\n<path class=\"ln\" d=\"M365 62 H403\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"410\" y=\"36\" width=\"160\" height=\"52\" rx=\"6\"></rect><text class=\"dt\" x=\"490\" y=\"56\" text-anchor=\"middle\">Object program</text><text class=\"ds\" x=\"490\" y=\"74\" text-anchor=\"middle\">executable</text>\n<path class=\"ln\" d=\"M570 62 H608\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bx\" x=\"615\" y=\"36\" width=\"225\" height=\"52\" rx=\"6\"></rect><text class=\"dt\" x=\"727\" y=\"56\" text-anchor=\"middle\">runs as many times</text><text class=\"ds\" x=\"727\" y=\"74\" text-anchor=\"middle\">as needed, without translating</text>\n<path class=\"lnb\" d=\"M285 88 V112\" marker-end=\"url(#ahb)\"></path><text class=\"ds tb\" x=\"285\" y=\"126\" text-anchor=\"middle\">if there is an error, nothing runs</text>\n<text class=\"dt db\" x=\"20\" y=\"160\">Interpreter</text>\n<rect class=\"bxg\" x=\"20\" y=\"174\" width=\"140\" height=\"52\" rx=\"6\"></rect><text class=\"dt\" x=\"90\" y=\"194\" text-anchor=\"middle\">Source program</text><text class=\"ds\" x=\"90\" y=\"212\" text-anchor=\"middle\">instruction by instruction</text>\n<path class=\"ln\" d=\"M160 200 H198\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"205\" y=\"174\" width=\"365\" height=\"52\" rx=\"6\"></rect><text class=\"dt db\" x=\"387\" y=\"194\" text-anchor=\"middle\">Interpreter: translates an instruction and runs it,</text><text class=\"ds\" x=\"387\" y=\"212\" text-anchor=\"middle\">then the next one… every time the program runs</text>\n<path class=\"ln\" d=\"M570 200 H608\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bx\" x=\"615\" y=\"174\" width=\"225\" height=\"52\" rx=\"6\"></rect><text class=\"dt\" x=\"727\" y=\"194\" text-anchor=\"middle\">results on the fly</text><text class=\"ds\" x=\"727\" y=\"212\" text-anchor=\"middle\">if there is an error, it stops there</text>\n</svg></div>\n<figcaption>Compiling: translating everything before running. Interpreting: translating and running at the same time.</figcaption>\n</figure>"
    ],
    "mode": "explained"
   },
   {
    "t": "table",
    "head": [
     "Compilador",
     [
      "Intèrpret",
      "Intérprete",
      "Interpreter"
     ]
    ],
    "rows": [
     [
      [
       "Genera el **programa objecte** (directament executable) després d'haver traduït **completament** el programa font.",
       "Genera el **programa objeto** (directamente ejecutable) después de haber traducido **completamente** el programa fuente.",
       "It produces the **object program** (directly executable) after **completely** translating the source program."
      ],
      [
       "Tradueix el programa font **instrucció a instrucció** a mesura que les va executant.",
       "Traduce el programa fuente **instrucción a instrucción** a medida que las va ejecutando.",
       "It translates the source program **instruction by instruction** as it runs them."
      ]
     ],
     [
      [
       "Es tradueix **una sola vegada** (més eficient) i es pot executar tantes vegades com calgui.",
       "Se traduce **una sola vez** (más eficiente) y se puede ejecutar tantas veces como haga falta.",
       "It is translated **only once** (more efficient) and can be run as many times as needed."
      ],
      [
       "Cada vegada que s'executa hi ha una traducció (l'execució és més lenta).",
       "Cada vez que se ejecuta hay una traducción (la ejecución es más lenta).",
       "Each time it runs there is a translation (execution is slower)."
      ]
     ],
     [
      [
       "Si el programa conté un error, **no s'executarà res**.",
       "Si el programa contiene un error, **no se ejecutará nada**.",
       "If the program contains an error, **nothing will run**."
      ],
      [
       "Si el programa conté un error, **s'executarà fins a trobar-lo**.",
       "Si el programa contiene un error, **se ejecutará hasta encontrarlo**.",
       "If the program contains an error, **it will run until it reaches it**."
      ]
     ]
    ]
   },
   {
    "t": "note",
    "title": [
     "Comproveu-ho vosaltres mateixos",
     "Comprobadlo vosotros mismos",
     "Check it yourselves"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "En aquest curs teniu els dos tipus de traductor: el C++ es **compila** (amb Clang, el mateix tipus d'eina que el g++ de l'examen) i el pseudocodi s'**interpreta**. Els dos programes de sota escriuen dues línies i a la línia 7 tenen el mateix error (una variable que no existeix). Premeu **Executa** a tots dos i compareu.",
       "En este curso tenéis los dos tipos de traductor: el C++ se **compila** (con Clang, el mismo tipo de herramienta que el g++ del examen) y el pseudocódigo se **interpreta**. Los dos programas de abajo escriben dos líneas y en la línea 7 tienen el mismo error (una variable que no existe). Pulsad **Ejecuta** en los dos y comparad.",
       "In this course you have both kinds of translator: C++ is **compiled** (with Clang, the same kind of tool as the g++ of the exam) and pseudocode is **interpreted**. The two programs below write two lines and have the same error on line 7 (a variable that does not exist). Press **Run** on both and compare."
      ]
     }
    ],
    "mode": "explained"
   },
   {
    "t": "cols",
    "cols": [
     [
      {
       "t": "code",
       "lang": "cpp",
       "props": {
        "title": "error_compilat.cpp",
        "run": true
       },
       "src": [
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Primera linia\" << endl;\n    cout << \"Segona linia\" << endl;\n    cout << resultat << endl;   // error: resultat no existeix\n    return 0;\n}",
        "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Primera linia\" << endl;\n    cout << \"Segona linia\" << endl;\n    cout << resultat << endl;   // error: resultat no existe\n    return 0;\n}"
       ]
      }
     ],
     [
      {
       "t": "code",
       "lang": "ps",
       "src": "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n\nINICI_SEQÜÈNCIA\n    Escriure \"Primera línia\"\n    Escriure \"Segona línia\"\n    Escriure resultat\nFI_SEQÜÈNCIA",
       "props": {
        "run": true
       }
      }
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "El compilador rebutja el programa sencer i no s'escriu **cap** línia; l'intèrpret escriu les dues primeres línies i s'atura quan arriba a l'error.",
     "El compilador rechaza el programa entero y no se escribe **ninguna** línea; el intérprete escribe las dos primeras líneas y se detiene cuando llega al error.",
     "The compiler rejects the whole program and **no** line is written; the interpreter writes the first two lines and stops when it reaches the error."
    ]
   },
   {
    "t": "h",
    "x": [
     "Programa font i programa objecte",
     "Programa fuente y programa objeto",
     "Source program and object program"
    ]
   },
   {
    "t": "p",
    "x": [
     "El **programa font** és el que escriu el programador en un llenguatge d'alt nivell (per exemple, el fitxer `main.cpp`). Per poder-lo executar s'ha de traduir a llenguatge màquina; el resultat és el **programa objecte**, que l'ordinador executa directament.",
     "El **programa fuente** es el que escribe el programador en un lenguaje de alto nivel (por ejemplo, el fichero `main.cpp`). Para poder ejecutarlo se tiene que traducir a lenguaje máquina; el resultado es el **programa objeto**, que el ordenador ejecuta directamente.",
     "The **source program** is the one the programmer writes in a high-level language (for example, the file `main.cpp`). To run it, it has to be translated into machine language; the result is the **object program**, which the computer executes directly."
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 150\" role=\"img\" aria-label=\"Del codi que escrivim al codi que executa la màquina. En C++ hi ha encara un pas intern més, l&#x27;enllaçador, que hi afegeix el codi de les llibreries com iostream.\">\n<rect class=\"bxg\" x=\"20\" y=\"45\" width=\"130\" height=\"56\" rx=\"6\"></rect><text class=\"dt db\" x=\"85\" y=\"67\" text-anchor=\"middle\">Programador/a</text><text class=\"ds\" x=\"85\" y=\"86\" text-anchor=\"middle\">escriu</text>\n<path class=\"ln\" d=\"M150 73 H188\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"195\" y=\"45\" width=\"170\" height=\"56\" rx=\"6\"></rect><text class=\"dt db\" x=\"280\" y=\"67\" text-anchor=\"middle\">Programa FONT</text><text class=\"dm\" x=\"280\" y=\"87\" text-anchor=\"middle\">main.cpp</text>\n<path class=\"ln\" d=\"M365 73 H403\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"410\" y=\"45\" width=\"190\" height=\"56\" rx=\"6\"></rect><text class=\"dt db\" x=\"505\" y=\"67\" text-anchor=\"middle\">Traductor</text><text class=\"ds\" x=\"505\" y=\"86\" text-anchor=\"middle\">compilador (g++, Clang)</text>\n<path class=\"ln\" d=\"M600 73 H638\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxp\" x=\"645\" y=\"45\" width=\"195\" height=\"56\" rx=\"6\"></rect><text class=\"dt db\" x=\"742\" y=\"67\" text-anchor=\"middle\">Programa OBJECTE</text><text class=\"ds\" x=\"742\" y=\"86\" text-anchor=\"middle\">llenguatge màquina, executable</text>\n<text class=\"ds\" x=\"280\" y=\"128\" text-anchor=\"middle\">llenguatge d'alt nivell</text><text class=\"ds\" x=\"742\" y=\"128\" text-anchor=\"middle\">llenguatge màquina</text>\n</svg></div>\n<figcaption>Del codi que escrivim al codi que executa la màquina. En C++ hi ha encara un pas intern més, l'enllaçador, que hi afegeix el codi de les llibreries com <code>iostream</code>.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 150\" role=\"img\" aria-label=\"Del código que escribimos al código que ejecuta la máquina. En C++ hay todavía un paso interno más, el enlazador, que añade el código de las bibliotecas como iostream.\">\n<rect class=\"bxg\" x=\"20\" y=\"45\" width=\"130\" height=\"56\" rx=\"6\"></rect><text class=\"dt db\" x=\"85\" y=\"67\" text-anchor=\"middle\">Programador/a</text><text class=\"ds\" x=\"85\" y=\"86\" text-anchor=\"middle\">escribe</text>\n<path class=\"ln\" d=\"M150 73 H188\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"195\" y=\"45\" width=\"170\" height=\"56\" rx=\"6\"></rect><text class=\"dt db\" x=\"280\" y=\"67\" text-anchor=\"middle\">Programa FUENTE</text><text class=\"dm\" x=\"280\" y=\"87\" text-anchor=\"middle\">main.cpp</text>\n<path class=\"ln\" d=\"M365 73 H403\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"410\" y=\"45\" width=\"190\" height=\"56\" rx=\"6\"></rect><text class=\"dt db\" x=\"505\" y=\"67\" text-anchor=\"middle\">Traductor</text><text class=\"ds\" x=\"505\" y=\"86\" text-anchor=\"middle\">compilador (g++, Clang)</text>\n<path class=\"ln\" d=\"M600 73 H638\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxp\" x=\"645\" y=\"45\" width=\"195\" height=\"56\" rx=\"6\"></rect><text class=\"dt db\" x=\"742\" y=\"67\" text-anchor=\"middle\">Programa OBJETO</text><text class=\"ds\" x=\"742\" y=\"86\" text-anchor=\"middle\">lenguaje máquina, ejecutable</text>\n<text class=\"ds\" x=\"280\" y=\"128\" text-anchor=\"middle\">lenguaje de alto nivel</text><text class=\"ds\" x=\"742\" y=\"128\" text-anchor=\"middle\">lenguaje máquina</text>\n</svg></div>\n<figcaption>Del código que escribimos al código que ejecuta la máquina. En C++ hay todavía un paso interno más, el enlazador, que añade el código de las bibliotecas como <code>iostream</code>.</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 150\" role=\"img\" aria-label=\"From the code we write to the code the machine executes. In C++ there is one more internal step, the linker, which adds the code of libraries such as iostream.\">\n<rect class=\"bxg\" x=\"20\" y=\"45\" width=\"130\" height=\"56\" rx=\"6\"></rect><text class=\"dt db\" x=\"85\" y=\"67\" text-anchor=\"middle\">Programador/a</text><text class=\"ds\" x=\"85\" y=\"86\" text-anchor=\"middle\">writes</text>\n<path class=\"ln\" d=\"M150 73 H188\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxo\" x=\"195\" y=\"45\" width=\"170\" height=\"56\" rx=\"6\"></rect><text class=\"dt db\" x=\"280\" y=\"67\" text-anchor=\"middle\">SOURCE program</text><text class=\"dm\" x=\"280\" y=\"87\" text-anchor=\"middle\">main.cpp</text>\n<path class=\"ln\" d=\"M365 73 H403\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxa\" x=\"410\" y=\"45\" width=\"190\" height=\"56\" rx=\"6\"></rect><text class=\"dt db\" x=\"505\" y=\"67\" text-anchor=\"middle\">Traductor</text><text class=\"ds\" x=\"505\" y=\"86\" text-anchor=\"middle\">compilador (g++, Clang)</text>\n<path class=\"ln\" d=\"M600 73 H638\" marker-end=\"url(#ah)\"></path>\n<rect class=\"bxp\" x=\"645\" y=\"45\" width=\"195\" height=\"56\" rx=\"6\"></rect><text class=\"dt db\" x=\"742\" y=\"67\" text-anchor=\"middle\">OBJECT program</text><text class=\"ds\" x=\"742\" y=\"86\" text-anchor=\"middle\">machine language, executable</text>\n<text class=\"ds\" x=\"280\" y=\"128\" text-anchor=\"middle\">high-level language</text><text class=\"ds\" x=\"742\" y=\"128\" text-anchor=\"middle\">machine language</text>\n</svg></div>\n<figcaption>From the code we write to the code the machine executes. In C++ there is one more internal step, the linker, which adds the code of libraries such as <code>iostream</code>.</figcaption>\n</figure>"
    ],
    "mode": "explained"
   }
  ],
  "t1-7": [
   {
    "t": "p",
    "x": [
     "Segons el llenguatge i la manera de pensar el problema, es parla de diferents **tipus de programació** (paradigmes):",
     "Según el lenguaje y la manera de pensar el problema, se habla de diferentes **tipos de programación** (paradigmas):",
     "Depending on the language and the way of thinking about the problem, we talk about different **types of programming** (paradigms):"
    ]
   },
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 210\" role=\"img\" aria-label=\"Els grans paradigmes. Al seminari treballem la programació imperativa (procedimental).\">\n<rect class=\"bxg\" x=\"330\" y=\"10\" width=\"200\" height=\"40\" rx=\"6\"></rect><text class=\"dt db\" x=\"430\" y=\"30\" text-anchor=\"middle\">Tipus de programació</text>\n<path class=\"ln\" d=\"M430 50 V70 H120 V90\"></path><path class=\"ln\" d=\"M430 70 H430 V90\"></path><path class=\"ln\" d=\"M430 70 H740 V90\"></path>\n<rect class=\"bxa\" x=\"20\" y=\"90\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"120\" y=\"110\" text-anchor=\"middle\">Imperativa</text><text class=\"ds\" x=\"120\" y=\"128\" text-anchor=\"middle\">diem COM: la recepta</text>\n<rect class=\"bxw\" x=\"330\" y=\"90\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"430\" y=\"110\" text-anchor=\"middle\">Declarativa</text><text class=\"ds\" x=\"430\" y=\"128\" text-anchor=\"middle\">diem QUÈ volem</text>\n<rect class=\"bxp\" x=\"640\" y=\"90\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"740\" y=\"110\" text-anchor=\"middle\">Orientada a objectes</text><text class=\"ds\" x=\"740\" y=\"128\" text-anchor=\"middle\">dades + operacions juntes</text>\n<path class=\"ln\" d=\"M430 144 V162 H340 V172\"></path><path class=\"ln\" d=\"M430 162 H520 V172\"></path>\n<rect class=\"bxw\" x=\"270\" y=\"172\" width=\"140\" height=\"32\" rx=\"6\"></rect><text class=\"dt\" x=\"340\" y=\"189\" text-anchor=\"middle\">Funcional</text>\n<rect class=\"bxw\" x=\"450\" y=\"172\" width=\"140\" height=\"32\" rx=\"6\"></rect><text class=\"dt\" x=\"520\" y=\"189\" text-anchor=\"middle\">Lògica</text>\n<text class=\"ds ta\" x=\"120\" y=\"170\" text-anchor=\"middle\">la del seminari</text>\n</svg></div>\n<figcaption>Els grans paradigmes. Al seminari treballem la programació imperativa (procedimental).</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 210\" role=\"img\" aria-label=\"Los grandes paradigmas. En el seminario trabajamos la programación imperativa (procedimental).\">\n<rect class=\"bxg\" x=\"330\" y=\"10\" width=\"200\" height=\"40\" rx=\"6\"></rect><text class=\"dt db\" x=\"430\" y=\"30\" text-anchor=\"middle\">Tipos de programación</text>\n<path class=\"ln\" d=\"M430 50 V70 H120 V90\"></path><path class=\"ln\" d=\"M430 70 H430 V90\"></path><path class=\"ln\" d=\"M430 70 H740 V90\"></path>\n<rect class=\"bxa\" x=\"20\" y=\"90\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"120\" y=\"110\" text-anchor=\"middle\">Imperativa</text><text class=\"ds\" x=\"120\" y=\"128\" text-anchor=\"middle\">decimos CÓMO: la receta</text>\n<rect class=\"bxw\" x=\"330\" y=\"90\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"430\" y=\"110\" text-anchor=\"middle\">Declarativa</text><text class=\"ds\" x=\"430\" y=\"128\" text-anchor=\"middle\">decimos QUÉ queremos</text>\n<rect class=\"bxp\" x=\"640\" y=\"90\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"740\" y=\"110\" text-anchor=\"middle\">Orientada a objetos</text><text class=\"ds\" x=\"740\" y=\"128\" text-anchor=\"middle\">datos + operaciones juntos</text>\n<path class=\"ln\" d=\"M430 144 V162 H340 V172\"></path><path class=\"ln\" d=\"M430 162 H520 V172\"></path>\n<rect class=\"bxw\" x=\"270\" y=\"172\" width=\"140\" height=\"32\" rx=\"6\"></rect><text class=\"dt\" x=\"340\" y=\"189\" text-anchor=\"middle\">Funcional</text>\n<rect class=\"bxw\" x=\"450\" y=\"172\" width=\"140\" height=\"32\" rx=\"6\"></rect><text class=\"dt\" x=\"520\" y=\"189\" text-anchor=\"middle\">Lógica</text>\n<text class=\"ds ta\" x=\"120\" y=\"170\" text-anchor=\"middle\">la del seminario</text>\n</svg></div>\n<figcaption>Los grandes paradigmas. En el seminario trabajamos la programación imperativa (procedimental).</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:600px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 210\" role=\"img\" aria-label=\"The main paradigms. In the seminar we work with imperative (procedural) programming.\">\n<rect class=\"bxg\" x=\"330\" y=\"10\" width=\"200\" height=\"40\" rx=\"6\"></rect><text class=\"dt db\" x=\"430\" y=\"30\" text-anchor=\"middle\">Types of programming</text>\n<path class=\"ln\" d=\"M430 50 V70 H120 V90\"></path><path class=\"ln\" d=\"M430 70 H430 V90\"></path><path class=\"ln\" d=\"M430 70 H740 V90\"></path>\n<rect class=\"bxa\" x=\"20\" y=\"90\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"120\" y=\"110\" text-anchor=\"middle\">Imperativa</text><text class=\"ds\" x=\"120\" y=\"128\" text-anchor=\"middle\">we say HOW: the recipe</text>\n<rect class=\"bxw\" x=\"330\" y=\"90\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"430\" y=\"110\" text-anchor=\"middle\">Declarativa</text><text class=\"ds\" x=\"430\" y=\"128\" text-anchor=\"middle\">we say WHAT we want</text>\n<rect class=\"bxp\" x=\"640\" y=\"90\" width=\"200\" height=\"54\" rx=\"6\"></rect><text class=\"dt db\" x=\"740\" y=\"110\" text-anchor=\"middle\">Object-oriented</text><text class=\"ds\" x=\"740\" y=\"128\" text-anchor=\"middle\">data + operations together</text>\n<path class=\"ln\" d=\"M430 144 V162 H340 V172\"></path><path class=\"ln\" d=\"M430 162 H520 V172\"></path>\n<rect class=\"bxw\" x=\"270\" y=\"172\" width=\"140\" height=\"32\" rx=\"6\"></rect><text class=\"dt\" x=\"340\" y=\"189\" text-anchor=\"middle\">Funcional</text>\n<rect class=\"bxw\" x=\"450\" y=\"172\" width=\"140\" height=\"32\" rx=\"6\"></rect><text class=\"dt\" x=\"520\" y=\"189\" text-anchor=\"middle\">Logic</text>\n<text class=\"ds ta\" x=\"120\" y=\"170\" text-anchor=\"middle\">the one in the seminar</text>\n</svg></div>\n<figcaption>The main paradigms. In the seminar we work with imperative (procedural) programming.</figcaption>\n</figure>"
    ],
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "La diferència entre «dir com» i «dir què» s'entén millor amb un mateix problema, **sumar els nombres de 1 a N**, escrit en quatre estils:",
     "La diferencia entre «decir cómo» y «decir qué» se entiende mejor con un mismo problema, **sumar los números de 1 a N**, escrito en cuatro estilos:",
     "The difference between “saying how” and “saying what” is easier to understand with the same problem, **adding the numbers from 1 to N**, written in four styles:"
    ]
   },
   {
    "t": "cols",
    "cols": [
     [
      {
       "t": "h",
       "x": "Imperativa (C++)"
      },
      {
       "t": "p",
       "x": [
        "Pas a pas: una variable que acumula i un bucle.",
        "Paso a paso: una variable que acumula y un bucle.",
        "Step by step: a variable that accumulates and a loop."
       ]
      },
      {
       "t": "code",
       "lang": "cpp",
       "src": "int suma = 0;\nfor (int i = 1; i <= n; i++) {\n    suma = suma + i;\n}",
       "props": {
        "nonum": true
       }
      }
     ],
     [
      {
       "t": "h",
       "x": "Funcional (Haskell)"
      },
      {
       "t": "p",
       "x": [
        "Es defineix què és la suma, com una funció matemàtica.",
        "Se define qué es la suma, como una función matemática.",
        "The sum is defined as a mathematical function."
       ]
      },
      {
       "t": "code",
       "lang": "txt",
       "src": "suma n = sum [1..n]",
       "props": {
        "nonum": true
       }
      }
     ],
     [
      {
       "t": "h",
       "x": [
        "Lògica (Prolog)",
        "Lógica (Prolog)",
        "Logic (Prolog)"
       ]
      },
      {
       "t": "p",
       "x": [
        "Fets i regles: el sistema dedueix el resultat.",
        "Hechos y reglas: el sistema deduce el resultado.",
        "Facts and rules: the system deduces the result."
       ]
      },
      {
       "t": "code",
       "lang": "txt",
       "src": "suma(0, 0).\nsuma(N, S) :- N > 0, M is N - 1,\n              suma(M, T), S is T + N.",
       "props": {
        "nonum": true
       }
      }
     ],
     [
      {
       "t": "h",
       "x": [
        "Orientada a objectes",
        "Orientada a objetos",
        "Object-oriented"
       ]
      },
      {
       "t": "p",
       "x": [
        "Les dades i les operacions viatgen juntes dins un objecte. C++ és una extensió de C amb objectes.",
        "Los datos y las operaciones viajan juntos dentro de un objeto. C++ es una extensión de C con objetos.",
        "Data and operations travel together inside an object. C++ is an extension of C with objects."
       ]
      },
      {
       "t": "code",
       "lang": "txt",
       "src": "Comptador c;\nc.sumaFins(n);\ncout << c.valor();",
       "props": {
        "nonum": true
       }
      }
     ]
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "**Imperativa o procedimental**: la més difosa i la que estudiarem. Es dona l'algorisme, la recepta («com ho hem de fer»). Un programa és una seqüència d'instruccions.",
      "**Imperativa o procedimental**: la más difundida y la que estudiaremos. Se da el algoritmo, la receta («cómo lo tenemos que hacer»). Un programa es una secuencia de instrucciones.",
      "**Imperative or procedural**: the most widespread and the one we will study. The algorithm, the recipe (“how we have to do it”), is given. A program is a sequence of instructions."
     ],
     [
      "**Declarativa**: s'especifica «què volem» i no «com». N'hi ha dos tipus: la **funcional** (programes fets de funcions en el sentit matemàtic) i la **lògica** (fets i regles de la lògica de predicats; ho veureu al seminari de Lògica amb PROLOG).",
      "**Declarativa**: se especifica «qué queremos» y no «cómo». Hay dos tipos: la **funcional** (programas hechos de funciones en el sentido matemático) y la **lógica** (hechos y reglas de la lógica de predicados; lo veréis en el seminario de Lógica con PROLOG).",
      "**Declarative**: it specifies “what we want” and not “how”. There are two kinds: **functional** (programs made of functions in the mathematical sense) and **logic** (facts and rules of predicate logic; you will see it in the Logic seminar with PROLOG)."
     ],
     [
      "**Orientada a objectes**: un estil que organitza la informació en objectes. C++ i Object Pascal en són extensions de C i de Pascal.",
      "**Orientada a objetos**: un estilo que organiza la información en objetos. C++ y Object Pascal son extensiones orientadas a objetos de C y de Pascal.",
      "**Object-oriented**: a style that organises information into objects. C++ and Object Pascal are object-oriented extensions of C and Pascal."
     ]
    ]
   }
  ],
  "t1-8": [
   {
    "t": "html",
    "h": [
     "<figure class=\"ip-fig\" style=\"--fig-min:700px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 270\" role=\"img\" aria-label=\"Els llenguatges de la taula del tema col·locats per any i per paradigma (anys segons el material; Delphi, de mitjan anys noranta, queda fora de l&#x27;eix).\">\n<line class=\"lnd\" x1=\"120\" y1=\"14\" x2=\"120\" y2=\"240\"></line><line class=\"lnd\" x1=\"290\" y1=\"14\" x2=\"290\" y2=\"240\"></line><line class=\"lnd\" x1=\"460\" y1=\"14\" x2=\"460\" y2=\"240\"></line><line class=\"lnd\" x1=\"630\" y1=\"14\" x2=\"630\" y2=\"240\"></line><line class=\"lnd\" x1=\"800\" y1=\"14\" x2=\"800\" y2=\"240\"></line>\n<text class=\"ds\" x=\"120\" y=\"258\" text-anchor=\"middle\">1950</text><text class=\"ds\" x=\"290\" y=\"258\" text-anchor=\"middle\">1960</text><text class=\"ds\" x=\"460\" y=\"258\" text-anchor=\"middle\">1970</text><text class=\"ds\" x=\"630\" y=\"258\" text-anchor=\"middle\">1980</text><text class=\"ds\" x=\"800\" y=\"258\" text-anchor=\"middle\">1990</text>\n<text class=\"dt db\" x=\"10\" y=\"50\">Imperatius</text><text class=\"dt db\" x=\"10\" y=\"109\">Funcionals</text><text class=\"dt db\" x=\"10\" y=\"158\">Lògics</text><text class=\"dt db\" x=\"10\" y=\"203\">Orientats</text><text class=\"dt db\" x=\"10\" y=\"219\">a objectes</text>\n<line x1=\"105\" y1=\"82\" x2=\"850\" y2=\"82\" style=\"stroke:#dee2e6\"></line><line x1=\"105\" y1=\"132\" x2=\"850\" y2=\"132\" style=\"stroke:#dee2e6\"></line><line x1=\"105\" y1=\"178\" x2=\"850\" y2=\"178\" style=\"stroke:#dee2e6\"></line>\n<circle class=\"fa\" cx=\"188\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"188\" y=\"31\" text-anchor=\"middle\">Fortran 54</text>\n<circle class=\"fa\" cx=\"256\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"256\" y=\"68\" text-anchor=\"middle\">Algol 58</text>\n<circle class=\"fa\" cx=\"273\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"281\" y=\"31\" text-anchor=\"middle\">Cobol 59</text>\n<circle class=\"fa\" cx=\"375\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"375\" y=\"68\" text-anchor=\"middle\">Basic 65</text>\n<circle class=\"fa\" cx=\"460\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"455\" y=\"31\" text-anchor=\"middle\">Pascal 70</text>\n<circle class=\"fa\" cx=\"494\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"494\" y=\"68\" text-anchor=\"middle\">C 72</text>\n<circle class=\"fa\" cx=\"528\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"535\" y=\"31\" text-anchor=\"middle\">Ada 74</text>\n<circle class=\"fa\" cx=\"579\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"579\" y=\"68\" text-anchor=\"middle\">Modula 77</text>\n<circle class=\"fo\" cx=\"222\" cy=\"108\" r=\"5\"></circle><text class=\"dt\" x=\"222\" y=\"94\" text-anchor=\"middle\">Lisp 56</text>\n<circle class=\"fo\" cx=\"715\" cy=\"108\" r=\"5\"></circle><text class=\"dt\" x=\"715\" y=\"94\" text-anchor=\"middle\">Miranda 85</text>\n<circle class=\"fq\" cx=\"460\" cy=\"157\" r=\"5\"></circle><text class=\"dt\" x=\"460\" y=\"143\" text-anchor=\"middle\">Prolog 70</text>\n<circle class=\"fb\" cx=\"715\" cy=\"207\" r=\"5\"></circle><text class=\"dt\" x=\"715\" y=\"192\" text-anchor=\"middle\">C++ ≈85</text>\n<circle class=\"fb\" cx=\"800\" cy=\"207\" r=\"5\"></circle><text class=\"dt\" x=\"790\" y=\"228\" text-anchor=\"middle\">Visual Basic 90</text>\n<circle class=\"fb\" cx=\"817\" cy=\"207\" r=\"5\"></circle><text class=\"dt\" x=\"826\" y=\"192\" text-anchor=\"middle\">Java 91</text>\n</svg></div>\n<figcaption>Els llenguatges de la taula del tema col·locats per any i per paradigma (anys segons el material; Delphi, de mitjan anys noranta, queda fora de l'eix).</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:700px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 270\" role=\"img\" aria-label=\"Los lenguajes de la tabla del tema colocados por año y por paradigma (años según el material; Delphi, de mediados de los noventa, queda fuera del eje).\">\n<line class=\"lnd\" x1=\"120\" y1=\"14\" x2=\"120\" y2=\"240\"></line><line class=\"lnd\" x1=\"290\" y1=\"14\" x2=\"290\" y2=\"240\"></line><line class=\"lnd\" x1=\"460\" y1=\"14\" x2=\"460\" y2=\"240\"></line><line class=\"lnd\" x1=\"630\" y1=\"14\" x2=\"630\" y2=\"240\"></line><line class=\"lnd\" x1=\"800\" y1=\"14\" x2=\"800\" y2=\"240\"></line>\n<text class=\"ds\" x=\"120\" y=\"258\" text-anchor=\"middle\">1950</text><text class=\"ds\" x=\"290\" y=\"258\" text-anchor=\"middle\">1960</text><text class=\"ds\" x=\"460\" y=\"258\" text-anchor=\"middle\">1970</text><text class=\"ds\" x=\"630\" y=\"258\" text-anchor=\"middle\">1980</text><text class=\"ds\" x=\"800\" y=\"258\" text-anchor=\"middle\">1990</text>\n<text class=\"dt db\" x=\"10\" y=\"50\">Imperativos</text><text class=\"dt db\" x=\"10\" y=\"109\">Funcionales</text><text class=\"dt db\" x=\"10\" y=\"158\">Lógicos</text><text class=\"dt db\" x=\"10\" y=\"203\">Orientados</text><text class=\"dt db\" x=\"10\" y=\"219\">a objetos</text>\n<line x1=\"105\" y1=\"82\" x2=\"850\" y2=\"82\" style=\"stroke:#dee2e6\"></line><line x1=\"105\" y1=\"132\" x2=\"850\" y2=\"132\" style=\"stroke:#dee2e6\"></line><line x1=\"105\" y1=\"178\" x2=\"850\" y2=\"178\" style=\"stroke:#dee2e6\"></line>\n<circle class=\"fa\" cx=\"188\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"188\" y=\"31\" text-anchor=\"middle\">Fortran 54</text>\n<circle class=\"fa\" cx=\"256\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"256\" y=\"68\" text-anchor=\"middle\">Algol 58</text>\n<circle class=\"fa\" cx=\"273\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"281\" y=\"31\" text-anchor=\"middle\">Cobol 59</text>\n<circle class=\"fa\" cx=\"375\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"375\" y=\"68\" text-anchor=\"middle\">Basic 65</text>\n<circle class=\"fa\" cx=\"460\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"455\" y=\"31\" text-anchor=\"middle\">Pascal 70</text>\n<circle class=\"fa\" cx=\"494\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"494\" y=\"68\" text-anchor=\"middle\">C 72</text>\n<circle class=\"fa\" cx=\"528\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"535\" y=\"31\" text-anchor=\"middle\">Ada 74</text>\n<circle class=\"fa\" cx=\"579\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"579\" y=\"68\" text-anchor=\"middle\">Modula 77</text>\n<circle class=\"fo\" cx=\"222\" cy=\"108\" r=\"5\"></circle><text class=\"dt\" x=\"222\" y=\"94\" text-anchor=\"middle\">Lisp 56</text>\n<circle class=\"fo\" cx=\"715\" cy=\"108\" r=\"5\"></circle><text class=\"dt\" x=\"715\" y=\"94\" text-anchor=\"middle\">Miranda 85</text>\n<circle class=\"fq\" cx=\"460\" cy=\"157\" r=\"5\"></circle><text class=\"dt\" x=\"460\" y=\"143\" text-anchor=\"middle\">Prolog 70</text>\n<circle class=\"fb\" cx=\"715\" cy=\"207\" r=\"5\"></circle><text class=\"dt\" x=\"715\" y=\"192\" text-anchor=\"middle\">C++ ≈85</text>\n<circle class=\"fb\" cx=\"800\" cy=\"207\" r=\"5\"></circle><text class=\"dt\" x=\"790\" y=\"228\" text-anchor=\"middle\">Visual Basic 90</text>\n<circle class=\"fb\" cx=\"817\" cy=\"207\" r=\"5\"></circle><text class=\"dt\" x=\"826\" y=\"192\" text-anchor=\"middle\">Java 91</text>\n</svg></div>\n<figcaption>Los lenguajes de la tabla del tema colocados por año y por paradigma (años según el material; Delphi, de mediados de los noventa, queda fuera del eje).</figcaption>\n</figure>",
     "<figure class=\"ip-fig\" style=\"--fig-min:700px\">\n<div class=\"ip-figb\"><svg viewBox=\"0 0 860 270\" role=\"img\" aria-label=\"The languages in the unit's table placed by year and by paradigm (years according to the material; Delphi, from the mid-nineties, falls outside the axis).\">\n<line class=\"lnd\" x1=\"120\" y1=\"14\" x2=\"120\" y2=\"240\"></line><line class=\"lnd\" x1=\"290\" y1=\"14\" x2=\"290\" y2=\"240\"></line><line class=\"lnd\" x1=\"460\" y1=\"14\" x2=\"460\" y2=\"240\"></line><line class=\"lnd\" x1=\"630\" y1=\"14\" x2=\"630\" y2=\"240\"></line><line class=\"lnd\" x1=\"800\" y1=\"14\" x2=\"800\" y2=\"240\"></line>\n<text class=\"ds\" x=\"120\" y=\"258\" text-anchor=\"middle\">1950</text><text class=\"ds\" x=\"290\" y=\"258\" text-anchor=\"middle\">1960</text><text class=\"ds\" x=\"460\" y=\"258\" text-anchor=\"middle\">1970</text><text class=\"ds\" x=\"630\" y=\"258\" text-anchor=\"middle\">1980</text><text class=\"ds\" x=\"800\" y=\"258\" text-anchor=\"middle\">1990</text>\n<text class=\"dt db\" x=\"10\" y=\"50\">Imperative</text><text class=\"dt db\" x=\"10\" y=\"109\">Functional</text><text class=\"dt db\" x=\"10\" y=\"158\">Logic</text><text class=\"dt db\" x=\"10\" y=\"203\">Object-</text><text class=\"dt db\" x=\"10\" y=\"219\">oriented</text>\n<line x1=\"105\" y1=\"82\" x2=\"850\" y2=\"82\" style=\"stroke:#dee2e6\"></line><line x1=\"105\" y1=\"132\" x2=\"850\" y2=\"132\" style=\"stroke:#dee2e6\"></line><line x1=\"105\" y1=\"178\" x2=\"850\" y2=\"178\" style=\"stroke:#dee2e6\"></line>\n<circle class=\"fa\" cx=\"188\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"188\" y=\"31\" text-anchor=\"middle\">Fortran 54</text>\n<circle class=\"fa\" cx=\"256\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"256\" y=\"68\" text-anchor=\"middle\">Algol 58</text>\n<circle class=\"fa\" cx=\"273\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"281\" y=\"31\" text-anchor=\"middle\">Cobol 59</text>\n<circle class=\"fa\" cx=\"375\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"375\" y=\"68\" text-anchor=\"middle\">Basic 65</text>\n<circle class=\"fa\" cx=\"460\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"455\" y=\"31\" text-anchor=\"middle\">Pascal 70</text>\n<circle class=\"fa\" cx=\"494\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"494\" y=\"68\" text-anchor=\"middle\">C 72</text>\n<circle class=\"fa\" cx=\"528\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"535\" y=\"31\" text-anchor=\"middle\">Ada 74</text>\n<circle class=\"fa\" cx=\"579\" cy=\"47\" r=\"5\"></circle><text class=\"dt\" x=\"579\" y=\"68\" text-anchor=\"middle\">Modula 77</text>\n<circle class=\"fo\" cx=\"222\" cy=\"108\" r=\"5\"></circle><text class=\"dt\" x=\"222\" y=\"94\" text-anchor=\"middle\">Lisp 56</text>\n<circle class=\"fo\" cx=\"715\" cy=\"108\" r=\"5\"></circle><text class=\"dt\" x=\"715\" y=\"94\" text-anchor=\"middle\">Miranda 85</text>\n<circle class=\"fq\" cx=\"460\" cy=\"157\" r=\"5\"></circle><text class=\"dt\" x=\"460\" y=\"143\" text-anchor=\"middle\">Prolog 70</text>\n<circle class=\"fb\" cx=\"715\" cy=\"207\" r=\"5\"></circle><text class=\"dt\" x=\"715\" y=\"192\" text-anchor=\"middle\">C++ ≈85</text>\n<circle class=\"fb\" cx=\"800\" cy=\"207\" r=\"5\"></circle><text class=\"dt\" x=\"790\" y=\"228\" text-anchor=\"middle\">Visual Basic 90</text>\n<circle class=\"fb\" cx=\"817\" cy=\"207\" r=\"5\"></circle><text class=\"dt\" x=\"826\" y=\"192\" text-anchor=\"middle\">Java 91</text>\n</svg></div>\n<figcaption>The languages in the unit's table placed by year and by paradigm (years according to the material; Delphi, from the mid-nineties, falls outside the axis).</figcaption>\n</figure>"
    ],
    "mode": "explained"
   },
   {
    "t": "table",
    "head": [
     [
      "Llenguatges imperatius",
      "Lenguajes imperativos",
      "Imperative languages"
     ],
     [
      "Llenguatges funcionals",
      "Lenguajes funcionales",
      "Functional languages"
     ],
     [
      "Llenguatges lògics",
      "Lenguajes lógicos",
      "Logic languages"
     ],
     [
      "Llenguatges orientats a objectes",
      "Lenguajes orientados a objetos",
      "Object-oriented languages"
     ]
    ],
    "rows": [
     [
      "Fortran (1954)\nAlgol (1958)\nCobol (1959)\nBasic (1965)\nPascal (1970)\nC (1972)\nAda (1974)\nModula (1977)",
      "Lisp (1956)\nMiranda (1985)",
      "Prolog (1970)",
      "C++\nDelphi\nVisual Basic (1990)\nJava (1991)"
     ]
    ]
   },
   {
    "t": "warn",
    "title": [
     "Sobre els anys",
     "Sobre los años",
     "About the years"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Els anys poden variar una mica segons si es compta l'inici del projecte o la primera versió publicada, i els llenguatges han anat evolucionant en diferents versions. Per a l'examen, compten els del material.",
       "Los años pueden variar un poco según si se cuenta el inicio del proyecto o la primera versión publicada, y los lenguajes han ido evolucionando en diferentes versiones. Para el examen, cuentan los del material.",
       "The years may vary a little depending on whether the start of the project or the first published version is counted, and the languages have evolved through different versions. For the exam, the ones in the material count."
      ]
     }
    ]
   }
  ],
  "t1-9": [
   {
    "t": "check",
    "ex": {
     "id": "t1-9-q1",
     "qb": [
      {
       "t": "p",
       "x": [
        "Per què diem que l'ordinador és una màquina de **propòsit general**?",
        "¿Por qué decimos que el ordenador es una máquina de **propósito general**?",
        "Why do we say the computer is a **general-purpose** machine?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      [
       "Perquè és més ràpid que qualsevol altra màquina.",
       "Porque es más rápido que cualquier otra máquina.",
       "Because it is faster than any other machine."
      ],
      [
       "Perquè té més memòria que una rentadora.",
       "Porque tiene más memoria que una lavadora.",
       "Because it has more memory than a washing machine."
      ],
      [
       "Perquè fa una feina o una altra segons el programa que executa.",
       "Porque hace un trabajo u otro según el programa que ejecuta.",
       "Because it does one job or another depending on the program it runs."
      ],
      [
       "Perquè entén directament els llenguatges d'alt nivell.",
       "Porque entiende directamente los lenguajes de alto nivel.",
       "Because it directly understands high-level languages."
      ]
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "El que el fa general és que la seva funció la decideix el programa. L'última opció és falsa: només entén llenguatge màquina.",
        "Lo que lo hace general es que su función la decide el programa. La última opción es falsa: solo entiende lenguaje máquina.",
        "What makes it general is that its function is decided by the program. The last option is false: it only understands machine language."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "t1-9-q2",
     "qb": [
      {
       "t": "p",
       "x": [
        "Un programa compila sense errors, però amb l'entrada `200` diu 0 caixes grans quan n'hauria de dir 1. En quina fase s'ha detectat el problema i a quina cal tornar?",
        "Un programa compila sin errores, pero con la entrada `200` dice 0 cajas grandes cuando debería decir 1. ¿En qué fase se ha detectado el problema y a cuál hay que volver?",
        "A program compiles without errors, but with the input `200` it says 0 large boxes when it should say 1. In which phase has the problem been detected and which one must you go back to?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      [
       "S'ha detectat a l'anàlisi; cal tornar a la codificació.",
       "Se ha detectado en el análisis; hay que volver a la codificación.",
       "It was detected in the analysis; you must go back to coding."
      ],
      [
       "S'ha detectat a les proves; cal revisar el disseny o la codificació.",
       "Se ha detectado en las pruebas; hay que revisar el diseño o la codificación.",
       "It was detected in testing; the design or the coding must be reviewed."
      ],
      [
       "S'ha detectat al manteniment; cal tornar a l'anàlisi.",
       "Se ha detectado en el mantenimiento; hay que volver al análisis.",
       "It was detected in maintenance; you must go back to the analysis."
      ],
      [
       "No és cap problema: si compila, el programa és correcte.",
       "No es ningún problema: si compila, el programa es correcto.",
       "It is not a problem: if it compiles, the program is correct."
      ]
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "Compilar només vol dir que el programa està ben escrit. Que faci el que ha de fer es comprova a les **proves**, i quan una falla es torna a la fase on és l'error.",
        "Compilar solo significa que el programa está bien escrito. Que haga lo que tiene que hacer se comprueba en las **pruebas**, y cuando una falla se vuelve a la fase donde está el error.",
        "Compiling only means the program is well written. Whether it does what it has to do is checked in **testing**, and when a test fails you go back to the phase where the error is."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "t1-9-q3",
     "qb": [
      {
       "t": "p",
       "x": [
        "Un programa té un error a la línia 30. Què passa si l'executem amb un **intèrpret**?",
        "Un programa tiene un error en la línea 30. ¿Qué pasa si lo ejecutamos con un **intérprete**?",
        "A program has an error on line 30. What happens if we run it with an **interpreter**?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      [
       "S'executen les instruccions anteriors i s'atura en arribar a la línia 30.",
       "Se ejecutan las instrucciones anteriores y se detiene al llegar a la línea 30.",
       "The previous instructions run and it stops when it reaches line 30."
      ],
      [
       "No s'executa res.",
       "No se ejecuta nada.",
       "Nothing runs."
      ],
      [
       "L'intèrpret corregeix l'error automàticament.",
       "El intérprete corrige el error automáticamente.",
       "The interpreter fixes the error automatically."
      ],
      [
       "Es genera el programa objecte igualment.",
       "Se genera el programa objeto igualmente.",
       "The object program is produced anyway."
      ]
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "L'intèrpret tradueix i executa instrucció a instrucció, així que tot el que hi ha abans de l'error s'executa. Amb un compilador no s'executaria res.",
        "El intérprete traduce y ejecuta instrucción a instrucción, así que todo lo que hay antes del error se ejecuta. Con un compilador no se ejecutaría nada.",
        "The interpreter translates and runs instruction by instruction, so everything before the error runs. With a compiler nothing would run."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "t1-9-q4",
     "qb": [
      {
       "t": "p",
       "x": [
        "Quina d'aquestes afirmacions sobre el llenguatge màquina és **certa**?",
        "¿Cuál de estas afirmaciones sobre el lenguaje máquina es **cierta**?",
        "Which of these statements about machine language is **true**?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      [
       "És independent del processador.",
       "Es independiente del procesador.",
       "It is independent of the processor."
      ],
      [
       "És el que escrivim normalment a C++.",
       "Es lo que escribimos normalmente en C++.",
       "It is what we normally write in C++."
      ],
      [
       "Necessita un compilador per executar-se.",
       "Necesita un compilador para ejecutarse.",
       "It needs a compiler to run."
      ],
      [
       "Cada família de processadors té el seu joc d'instruccions.",
       "Cada familia de procesadores tiene su juego de instrucciones.",
       "Each family of processors has its own instruction set."
      ]
     ],
     "answer": 3,
     "sol": [
      {
       "t": "p",
       "x": [
        "El llenguatge màquina és el que la CPU executa directament, i depèn de l'arquitectura. Són els llenguatges d'alt nivell els que necessiten traductor.",
        "El lenguaje máquina es el que la CPU ejecuta directamente, y depende de la arquitectura. Son los lenguajes de alto nivel los que necesitan traductor.",
        "Machine language is what the CPU executes directly, and it depends on the architecture. It is high-level languages that need a translator."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "t1-9-q5",
     "qb": [
      {
       "t": "p",
       "x": [
        "En quin tipus de programació es diu **com** s'ha de resoldre el problema, pas a pas?",
        "¿En qué tipo de programación se dice **cómo** se tiene que resolver el problema, paso a paso?",
        "In which type of programming do you say **how** the problem has to be solved, step by step?"
       ]
      }
     ],
     "type": "mcq",
     "opts": [
      "Funcional",
      [
       "Lògica",
       "Lógica",
       "Logic"
      ],
      "Imperativa",
      "Declarativa en general"
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "La imperativa dona la recepta. Les declaratives (funcional i lògica) descriuen què es vol.",
        "La imperativa da la receta. Las declarativas (funcional y lógica) describen qué se quiere.",
        "Imperative programming gives the recipe. The declarative ones (functional and logic) describe what is wanted."
       ]
      }
     ]
    }
   }
  ],
  "t1-10": [
   {
    "t": "summary",
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Programar és **solucionar problemes amb l'ordinador** seguint un mètode amb fases; és una tècnica que s'aprèn de manera progressiva.",
        "Programar es **solucionar problemas con el ordenador** siguiendo un método con fases; es una técnica que se aprende de manera progresiva.",
        "Programming is **solving problems with the computer** following a method with phases; it is a technique learnt progressively."
       ],
       [
        "L'enginyeria del software aporta **teoria, metodologia i tècniques de disseny** per fer software **eficaç** (fa el que ha de fer) i **eficient** (amb un cost raonable).",
        "La ingeniería del software aporta **teoría, metodología y técnicas de diseño** para hacer software **eficaz** (hace lo que tiene que hacer) y **eficiente** (con un coste razonable).",
        "Software engineering provides **theory, methodology and design techniques** to make software that is **effective** (it does what it has to do) and **efficient** (at a reasonable cost)."
       ],
       [
        "Fases: **anàlisi → disseny → codificació → proves → manteniment**, amb el suport d'eines CASE.",
        "Fases: **análisis → diseño → codificación → pruebas → mantenimiento**, con el apoyo de herramientas CASE.",
        "Phases: **analysis → design → coding → testing → maintenance**, supported by CASE tools."
       ],
       [
        "L'ordinador només executa **llenguatge màquina**; els llenguatges d'alt nivell necessiten un **traductor**: un compilador (tot abans, un cop) o un intèrpret (instrucció a instrucció).",
        "El ordenador solo ejecuta **lenguaje máquina**; los lenguajes de alto nivel necesitan un **traductor**: un compilador (todo antes, una vez) o un intérprete (instrucción a instrucción).",
        "The computer only executes **machine language**; high-level languages need a **translator**: a compiler (everything beforehand, once) or an interpreter (instruction by instruction)."
       ],
       [
        "Paradigmes: **imperatiu** (el del seminari), **declaratiu** (funcional i lògic) i **orientat a objectes**.",
        "Paradigmas: **imperativo** (el del seminario), **declarativo** (funcional y lógico) y **orientado a objetos**.",
        "Paradigms: **imperative** (the one in the seminar), **declarative** (functional and logic) and **object-oriented**."
       ],
       [
        "**Programa = algorisme + estructures de dades**: programar és dissenyar les accions que es fan sobre unes dades ben representades (Tema 2).",
        "**Programa = algoritmo + estructuras de datos**: programar es diseñar las acciones que se hacen sobre unos datos bien representados (Tema 2).",
        "**Program = algorithm + data structures**: programming is designing the actions performed on well-represented data (Unit 2)."
       ]
      ]
     }
    ]
   }
  ]
 },
 "examEnd": [
  {
   "id": "t1-x1",
   "type": "mcq",
   "q": [
    "Quina fase s'encarrega de decidir **com** es resol el problema?",
    "¿Qué fase se encarga de decidir **cómo** se resuelve el problema?",
    "Which phase decides **how** the problem is solved?"
   ],
   "opts": [
    [
     "Anàlisi",
     "Análisis",
     "Analysis"
    ],
    [
     "Disseny",
     "Diseño",
     "Design"
    ],
    [
     "Codificació",
     "Codificación",
     "Coding"
    ],
    [
     "Manteniment",
     "Mantenimiento",
     "Maintenance"
    ]
   ],
   "answer": 1,
   "sol": [
    {
     "t": "p",
     "x": [
      "L'anàlisi diu què cal resoldre; el disseny, com (l'algorisme).",
      "El análisis dice qué hay que resolver; el diseño, cómo (el algoritmo).",
      "Analysis says what must be solved; design, how (the algorithm)."
     ]
    }
   ]
  },
  {
   "id": "t1-x2",
   "type": "mcq",
   "q": [
    "Un compilador…",
    "Un compilador…",
    "A compiler…"
   ],
   "opts": [
    [
     "tradueix tot el programa abans d'executar-lo i genera un programa objecte",
     "traduce todo el programa antes de ejecutarlo y genera un programa objeto",
     "translates the whole program before running it and produces an object program"
    ],
    [
     "tradueix i executa instrucció a instrucció",
     "traduce y ejecuta instrucción a instrucción",
     "translates and runs instruction by instruction"
    ],
    [
     "corregeix els errors de semàntica",
     "corrige los errores de semántica",
     "fixes semantic errors"
    ],
    [
     "només serveix per a llenguatge màquina",
     "solo sirve para lenguaje máquina",
     "only works for machine language"
    ]
   ],
   "answer": 0,
   "sol": [
    {
     "t": "p",
     "x": [
      "Si hi ha un error, el compilador no genera res i no s'executa cap línia.",
      "Si hay un error, el compilador no genera nada y no se ejecuta ninguna línea.",
      "If there is an error, the compiler produces nothing and no line runs."
     ]
    }
   ]
  },
  {
   "id": "t1-x3",
   "type": "mcq",
   "q": [
    "SQL i Prolog són llenguatges…",
    "SQL y Prolog son lenguajes…",
    "SQL and Prolog are…"
   ],
   "opts": [
    [
     "declaratius",
     "declarativos",
     "declarative"
    ],
    [
     "imperatius",
     "imperativos",
     "imperative"
    ],
    [
     "de baix nivell",
     "de bajo nivel",
     "low-level"
    ],
    [
     "orientats a objectes",
     "orientados a objetos",
     "object-oriented"
    ]
   ],
   "answer": 0,
   "sol": [
    {
     "t": "p",
     "x": [
      "Diuen què es vol, no com s'aconsegueix.",
      "Dicen qué se quiere, no cómo se consigue.",
      "They say what is wanted, not how to get it."
     ]
    }
   ]
  }
 ]
};
