// Generat per tools/kit-import/comp.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Informació i unitats, velocitat de transferència, llenguatges i traductors, estructura funcional (CPU, memòria, cau), Von Neumann i Harvard, classificació i història. Els laboratoris deixen tocar el que costa d'imaginar: el cicle d'instrucció, la cau o un compilador.",
    "Información y unidades, velocidad de transferencia, lenguajes y traductores, estructura funcional (CPU, memoria, caché), Von Neumann y Harvard, clasificación e historia. Los laboratorios dejan tocar lo que cuesta imaginar: el ciclo de instrucción, la caché o un compilador.",
    "Information and units, transfer rate, languages and translators, functional structure (CPU, memory, cache), Von Neumann and Harvard, classification and history. The labs let you play with what is hard to imagine: the instruction cycle, the cache or a compiler."
   ]
  }
 ],
 "sections": {
  "t1-info": [
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Disciplina que estudia el **tractament automàtic de la informació** mitjançant sistemes computacionals (del francès *informatique*: **infor**mació + auto**màtica**). No és «fer servir ordinadors»: estudia com **representar, emmagatzemar, processar i transmetre** informació.",
       "Disciplina que estudia el **tratamiento automático de la información** mediante sistemas computacionales (del francés *informatique*: **infor**mación + auto**mática**). No es «usar ordenadores»: estudia cómo **representar, almacenar, procesar y transmitir** información.",
       "The discipline that studies the **automatic processing of information** by computational systems (from the French *informatique*: **infor**mation + auto**matique**). It is not “using computers”: it studies how to **represent, store, process and transmit** information."
      ]
     }
    ],
    "t": "def",
    "title": [
     "informàtica",
     "n · informática",
     "n · computing"
    ]
   },
   {
    "head": [
     "Fase",
     [
      "Què fa",
      "Qué hace",
      "What it does"
     ],
     [
      "A la foto amb el mòbil",
      "En la foto con el móvil",
      "Taking a photo with your phone"
     ]
    ],
    "rows": [
     [
      "Entrada",
      [
       "rep dades de l'exterior",
       "recibe datos del exterior",
       "receives data from outside"
      ],
      [
       "la càmera captura",
       "la cámara captura",
       "the camera captures it"
      ]
     ],
     [
      [
       "Processament",
       "Procesamiento",
       "Processing"
      ],
      [
       "transforma les dades seguint instruccions",
       "transforma los datos siguiendo instrucciones",
       "transforms the data following instructions"
      ],
      [
       "el processador la tracta",
       "el procesador la trata",
       "the processor handles it"
      ]
     ],
     [
      [
       "Sortida",
       "Salida",
       "Output"
      ],
      [
       "genera un resultat",
       "genera un resultado",
       "produces a result"
      ],
      [
       "la pantalla la mostra",
       "la pantalla la muestra",
       "the screen shows it"
      ]
     ],
     [
      [
       "Emmagatzematge",
       "Almacenamiento",
       "Storage"
      ],
      [
       "conserva dades i resultats",
       "conserva datos y resultados",
       "keeps data and results"
      ],
      [
       "la memòria la guarda",
       "la memoria la guarda",
       "the memory stores it"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un **algorisme** és un conjunt **finit i ordenat** de passos que resol un problema. Una **instrucció** és una operació concreta que l'ordinador pot executar. Un **programa** és un conjunt ordenat d'instruccions: Problema → Algorisme → Programa → Execució.",
       "Un **algoritmo** es un conjunto **finito y ordenado** de pasos que resuelve un problema. Una **instrucción** es una operación concreta que el ordenador puede ejecutar. Un **programa** es un conjunto ordenado de instrucciones: Problema → Algoritmo → Programa → Ejecución.",
       "An **algorithm** is a **finite, ordered** set of steps that solves a problem. An **instruction** is a specific operation the computer can execute. A **program** is an ordered set of instructions: Problem → Algorithm → Program → Execution."
      ]
     }
    ],
    "t": "def",
    "title": [
     "algorisme, instrucció, programa",
     "n · algoritmo, instrucción, programa",
     "n · algorithm, instruction, program"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "L'algorisme és la idea (la recepta del cafè); el programa és aquesta idea escrita amb instruccions que una màquina sap executar. El mateix algorisme pot donar programes diferents en llenguatges diferents.",
       "El algoritmo es la idea (la receta del café); el programa es esa idea escrita con instrucciones que una máquina sabe ejecutar. El mismo algoritmo puede dar programas distintos en lenguajes distintos.",
       "The algorithm is the idea (the coffee recipe); the program is that idea written with instructions a machine can execute. The same algorithm can give different programs in different languages."
      ]
     }
    ],
    "t": "tip",
    "mode": "explained"
   }
  ],
  "t1-bits": [
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un **bit** (*binary digit*) és la unitat mínima d'informació: 0 o 1. Un **byte** són **8 bits**. Amb n bits es poden representar **2$^{\\text{n}}$** combinacions diferents: 1 byte → 256.",
       "Un **bit** (*binary digit*) es la unidad mínima de información: 0 o 1. Un **byte** son **8 bits**. Con n bits se pueden representar **2$^{\\text{n}}$** combinaciones distintas: 1 byte → 256.",
       "A **bit** (*binary digit*) is the smallest unit of information: 0 or 1. A **byte** is **8 bits**. With n bits you can represent **2$^{\\text{n}}$** different combinations: 1 byte → 256."
      ]
     }
    ],
    "t": "def",
    "title": [
     "bit i byte",
     "n · bit i byte",
     "n · bit and byte"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Afegir un bit duplica les combinacions.** Al revés: per representar N valors diferents calen els bits n tals que 2$^{\\text{n}}$ ≥ N. Per a 65 536 valors, 16 bits; per a 1 000 valors, 10 bits (2$^{\\text{10}}$ = 1 024), perquè amb 9 (512) no n'hi ha prou.",
       "**Añadir un bit duplica las combinaciones.** Al revés: para representar N valores distintos hacen falta los bits n tales que 2$^{\\text{n}}$ ≥ N. Para 65 536 valores, 16 bits; para 1 000 valores, 10 bits (2$^{\\text{10}}$ = 1 024), porque con 9 (512) no basta.",
       "**Adding one bit doubles the combinations.** Conversely: to represent N different values you need n bits such that 2$^{\\text{n}}$ ≥ N. For 65 536 values, 16 bits; for 1 000 values, 10 bits (2$^{\\text{10}}$ = 1 024), because 9 (512) are not enough."
      ]
     }
    ],
    "t": "tip",
    "mode": "explained"
   },
   {
    "t": "lab",
    "id": "bits",
    "props": {
     "id": "th-bits",
     "cfg": {}
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "id": "t1-c1",
     "type": "num",
     "q": [
      "Quants bits calen, com a mínim, per representar 1 000 valors diferents?",
      "¿Cuántos bits hacen falta, como mínimo, para representar 1 000 valores distintos?",
      "At least how many bits are needed to represent 1 000 different values?"
     ],
     "answer": 10,
     "sol": [
      {
       "t": "p",
       "x": [
        "2⁹ = 512 no arriba; 2¹⁰ = 1 024 ≥ 1 000.",
        "2⁹ = 512 no llega; 2¹⁰ = 1 024 ≥ 1 000.",
        "2⁹ = 512 is not enough; 2¹⁰ = 1 024 ≥ 1 000."
       ]
      }
     ]
    }
   }
  ],
  "t1-units": [
   {
    "head": [
     "Decimal (SI)",
     "Valor",
     [
      "Binari (IEC)",
      "Binario (IEC)",
      "Binary (IEC)"
     ],
     "Valor"
    ],
    "rows": [
     [
      "1 KB",
      "10³ = 1 000 B",
      "1 KiB",
      "2¹⁰ = 1 024 B"
     ],
     [
      "1 MB",
      "10⁶ B",
      "1 MiB",
      "2²⁰ = 1 048 576 B"
     ],
     [
      "1 GB",
      "10⁹ B",
      "1 GiB",
      "2³⁰ = 1 073 741 824 B"
     ],
     [
      "1 TB",
      "10¹² B",
      "1 TiB",
      "2⁴⁰ B"
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "**b** minúscula = **bit**; **B** majúscula = **byte**. **Mb** (megabit) i **MB** (megabyte) es diferencien en un factor 8. I **K, M, G, T** són potències de 10, mentre que **Ki, Mi, Gi, Ti** són potències de 2.",
       "**b** minúscula = **bit**; **B** mayúscula = **byte**. **Mb** (megabit) y **MB** (megabyte) se diferencian en un factor 8. Y **K, M, G, T** son potencias de 10, mientras que **Ki, Mi, Gi, Ti** son potencias de 2.",
       "Lower-case **b** = **bit**; upper-case **B** = **byte**. **Mb** (megabit) and **MB** (megabyte) differ by a factor of 8. And **K, M, G, T** are powers of 10, whereas **Ki, Mi, Gi, Ti** are powers of 2."
      ]
     }
    ],
    "t": "warn"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Mètode infal·lible en tres passos: **(1)** passa la quantitat a bits o a bytes multiplicant pel seu prefix; **(2)** si cal, bits ↔ bytes (× 8 o ÷ 8); **(3)** divideix pel prefix de la unitat demanada. No intentis fer-ho d'un sol cop.",
       "Método infalible en tres pasos: **(1)** pasa la cantidad a bits o a bytes multiplicando por su prefijo; **(2)** si hace falta, bits ↔ bytes (× 8 o ÷ 8); **(3)** divide por el prefijo de la unidad pedida. No intentes hacerlo de golpe.",
       "Foolproof three-step method: **(1)** convert the amount to bits or bytes by multiplying by its prefix; **(2)** if needed, bits ↔ bytes (× 8 or ÷ 8); **(3)** divide by the prefix of the requested unit. Do not try to do it all at once."
      ]
     }
    ],
    "t": "tip",
    "mode": "explained"
   },
   {
    "t": "lab",
    "id": "units",
    "props": {
     "id": "th-units",
     "cfg": {}
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "ref": "g-units",
     "seed": 3
    }
   }
  ],
  "t1-transfer": [
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Quanta informació es transmet en un temps. Es mesura en **bits per segon** (b/s) amb prefixos **decimals**: 1 Mb/s = 10⁶ b/s. El temps és **t = quantitat de dades ÷ velocitat**, amb les dues magnituds en unitats compatibles.",
       "Cuánta información se transmite en un tiempo. Se mide en **bits por segundo** (b/s) con prefijos **decimales**: 1 Mb/s = 10⁶ b/s. El tiempo es **t = cantidad de datos ÷ velocidad**, con las dos magnitudes en unidades compatibles.",
       "How much information is transmitted in a given time. It is measured in **bits per second** (b/s) with **decimal** prefixes: 1 Mb/s = 10⁶ b/s. The time is **t = amount of data ÷ rate**, with both magnitudes in compatible units."
      ]
     }
    ],
    "t": "def",
    "title": [
     "velocitat de transferència",
     "n · velocidad de transferencia",
     "n · transfer rate"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un fitxer de 100 MB amb 100 Mb/s **no** tarda 1 s: 100 MB són 800 Mb, i tarda 8 s. La trampa sempre és el factor 8 entre bytes i bits. I **capacitat ≠ velocitat**: «1 TB» diu quant cap; «1 Gb/s», com de pressa passa.",
       "Un fichero de 100 MB con 100 Mb/s **no** tarda 1 s: 100 MB son 800 Mb, y tarda 8 s. La trampa siempre es el factor 8 entre bytes y bits. Y **capacidad ≠ velocidad**: «1 TB» dice cuánto cabe; «1 Gb/s», lo rápido que pasa.",
       "A 100 MB file at 100 Mb/s does **not** take 1 s: 100 MB are 800 Mb, so it takes 8 s. The trap is always the factor of 8 between bytes and bits. And **capacity ≠ speed**: “1 TB” says how much fits; “1 Gb/s”, how fast it goes."
      ]
     }
    ],
    "t": "tip",
    "mode": "explained"
   },
   {
    "t": "lab",
    "id": "transfer",
    "props": {
     "id": "th-transfer",
     "cfg": {}
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "ref": "g-transfer",
     "seed": 2
    }
   }
  ],
  "t1-lang": [
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Llenguatge formal per expressar les instruccions i les dades d'un programa. Calen perquè el processador només executa **llenguatge màquina** (bits), i nosaltres necessitem una forma comprensible.",
       "Lenguaje formal para expresar las instrucciones y los datos de un programa. Hacen falta porque el procesador solo ejecuta **lenguaje máquina** (bits), y nosotros necesitamos una forma comprensible.",
       "A formal language for expressing the instructions and data of a program. They are needed because the processor only executes **machine language** (bits), and we need an understandable form."
      ]
     }
    ],
    "t": "def",
    "title": [
     "llenguatge de programació",
     "n · lenguaje de programación",
     "n · programming language"
    ]
   },
   {
    "head": [
     [
      "Nivell",
      "Nivel",
      "Level"
     ],
     [
      "Com és",
      "Cómo es",
      "What it is like"
     ],
     [
      "Exemple de «suma a i b»",
      "Ejemplo de «suma a y b»",
      "Example of “add a and b”"
     ]
    ],
    "rows": [
     [
      [
       "Llenguatge màquina",
       "Lenguaje máquina",
       "Machine language"
      ],
      [
       "bits; el processador l'executa directament; cada arquitectura té el seu",
       "bits; el procesador lo ejecuta directamente; cada arquitectura tiene el suyo",
       "bits; the processor executes it directly; each architecture has its own"
      ],
      "`000000 00010 00011 00001 00000 100000`"
     ],
     [
      [
       "Assemblador",
       "Ensamblador",
       "Assembly"
      ],
      [
       "mnemònics (ADD, SUB, MOV) i noms simbòlics; lligat a l'arquitectura",
       "mnemónicos (ADD, SUB, MOV) y nombres simbólicos; ligado a la arquitectura",
       "mnemonics (ADD, SUB, MOV) and symbolic names; tied to the architecture"
      ],
      "`ADD R1, R2, R3`"
     ],
     [
      [
       "Alt nivell",
       "Alto nivel",
       "High level"
      ],
      [
       "variables, funcions, bucles; menys dependent del hardware",
       "variables, funciones, bucles; menos dependiente del hardware",
       "variables, functions, loops; less dependent on the hardware"
      ],
      "`resultat = a + b;`"
     ]
    ],
    "t": "table"
   },
   {
    "head": [
     "Paradigma",
     "Pregunta",
     [
      "Exemples",
      "Ejemplos",
      "Examples"
     ]
    ],
    "rows": [
     [
      [
       "Imperatiu",
       "Imperativo",
       "Imperative"
      ],
      [
       "**com** ho fem? (seqüència d'operacions)",
       "¿**cómo** lo hacemos? (secuencia de operaciones)",
       "**how** do we do it? (sequence of operations)"
      ],
      "C, Java, Python"
     ],
     [
      [
       "Declaratiu",
       "Declarativo",
       "Declarative"
      ],
      [
       "**què** volem obtenir?",
       "¿**qué** queremos obtener?",
       "**what** do we want to obtain?"
      ],
      "SQL, Prolog"
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Són **dos criteris independents**: SQL és d'alt nivell i declaratiu; Assembly és de baix nivell i imperatiu. «Alt» i «baix» parlen de la **proximitat al hardware**, no de qualitat.",
       "Son **dos criterios independientes**: SQL es de alto nivel y declarativo; Assembly es de bajo nivel e imperativo. «Alto» y «bajo» hablan de la **proximidad al hardware**, no de calidad.",
       "They are **two independent criteria**: SQL is high-level and declarative; Assembly is low-level and imperative. “High” and “low” refer to **closeness to the hardware**, not to quality."
      ]
     }
    ],
    "t": "tip",
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "id": "t1-c2",
     "type": "mcq",
     "q": [
      "Quin d'aquests llenguatges és declaratiu?",
      "¿Cuál de estos lenguajes es declarativo?",
      "Which of these languages is declarative?"
     ],
     "opts": [
      "C",
      "Python",
      "SQL",
      [
       "Assemblador",
       "Ensamblador",
       "Assembly"
      ]
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "A SQL dius quines dades vols, no com trobar-les.",
        "En SQL dices qué datos quieres, no cómo encontrarlos.",
        "In SQL you say which data you want, not how to find them."
       ]
      }
     ]
    }
   }
  ],
  "t1-trad": [
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un **traductor** transforma un programa a una altra representació. El **compilador** tradueix **abans** d'executar; l'**assemblador** tradueix assemblador a llenguatge màquina; l'**intèrpret** analitza i executa **durant** l'execució.",
       "Un **traductor** transforma un programa a otra representación. El **compilador** traduce **antes** de ejecutar; el **ensamblador** traduce ensamblador a lenguaje máquina; el **intérprete** analiza y ejecuta **durante** la ejecución.",
       "A **translator** transforms a program into another representation. The **compiler** translates **before** execution; the **assembler** translates assembly into machine language; the **interpreter** analyses and executes **during** execution."
      ]
     }
    ],
    "t": "def",
    "title": [
     "traductor, compilador, assemblador, intèrpret",
     "n · traductor, compilador, ensamblador, intérprete",
     "n · translator, compiler, assembler, interpreter"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Compilar és traduir un llibre sencer abans que ningú el llegeixi; interpretar és fer de traductor simultani en una conferència. A la pràctica molts llenguatges combinen les dues coses (Java i Python compilen a bytecode i després l'interpreten).",
       "Compilar es traducir un libro entero antes de que nadie lo lea; interpretar es hacer de traductor simultáneo en una conferencia. En la práctica muchos lenguajes combinan las dos cosas (Java y Python compilan a bytecode y después lo interpretan).",
       "Compiling is translating a whole book before anyone reads it; interpreting is being a simultaneous interpreter at a conference. In practice many languages combine both (Java and Python compile to bytecode and then interpret it)."
      ]
     }
    ],
    "t": "tip",
    "mode": "explained"
   },
   {
    "t": "lab",
    "id": "compila",
    "props": {
     "id": "th-comp",
     "cfg": {}
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "ref": "g-teo",
     "seed": 4
    }
   }
  ],
  "t1-hw": [
   {
    "head": [
     "Hardware",
     "Software"
    ],
    "rows": [
     [
      [
       "part física: es pot tocar",
       "parte física: se puede tocar",
       "the physical part: you can touch it"
      ],
      [
       "programes i instruccions",
       "programas e instrucciones",
       "programs and instructions"
      ]
     ],
     [
      [
       "executa instruccions",
       "ejecuta instrucciones",
       "executes instructions"
      ],
      [
       "proporciona les instruccions",
       "proporciona las instrucciones",
       "provides the instructions"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Executa les instruccions repetint sense parar: **obtenir** una instrucció → **interpretar-la** → **executar-la** → passar a la **següent**.",
       "Ejecuta las instrucciones repitiendo sin parar: **obtener** una instrucción → **interpretarla** → **ejecutarla** → pasar a la **siguiente**.",
       "It executes instructions in an endless loop: **fetch** an instruction → **decode** it → **execute** it → move on to the **next** one."
      ]
     }
    ],
    "t": "def",
    "title": [
     "CPU",
     "n · CPU",
     "n · CPU"
    ]
   },
   {
    "head": [
     "",
     [
      "Memòria principal (RAM)",
      "Memoria principal (RAM)",
      "Main memory (RAM)"
     ],
     [
      "Emmagatzematge (SSD, HDD, flash)",
      "Almacenamiento (SSD, HDD, flash)",
      "Storage (SSD, HDD, flash)"
     ]
    ],
    "rows": [
     [
      [
       "Funció",
       "Función",
       "Function"
      ],
      [
       "dades i programes en ús, temporalment",
       "datos y programas en uso, temporalmente",
       "data and programs in use, temporarily"
      ],
      [
       "conservar informació molt de temps",
       "conservar información mucho tiempo",
       "keeping information for a long time"
      ]
     ],
     [
      [
       "Velocitat",
       "Velocidad",
       "Speed"
      ],
      [
       "ràpida",
       "rápida",
       "fast"
      ],
      [
       "més lent",
       "más lento",
       "slower"
      ]
     ],
     [
      [
       "Volàtil?",
       "¿Volátil?",
       "Volatile?"
      ],
      [
       "sí: es buida en apagar",
       "sí: se vacía al apagar",
       "yes: it is emptied when powered off"
      ],
      "no"
     ],
     [
      [
       "Accés",
       "Acceso",
       "Access"
      ],
      [
       "directe per adreça",
       "directo por dirección",
       "direct, by address"
      ],
      "—"
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "La **ROM** i altres memòries no volàtils guarden el que ha de sobreviure a l'apagada (el firmware d'arrencada). La **cau** és una memòria molt ràpida entre la CPU i la RAM, en nivells: **L1** (molt petita i ràpida), **L2** (més gran) i **L3** (encara més gran, compartida entre nuclis).",
     "La **ROM** y otras memorias no volátiles guardan lo que tiene que sobrevivir al apagado (el firmware de arranque). La **caché** es una memoria muy rápida entre la CPU y la RAM, en niveles: **L1** (muy pequeña y rápida), **L2** (más grande) y **L3** (todavía más grande, compartida entre núcleos).",
     "**ROM** and other non-volatile memories keep what must survive power-off (the boot firmware). The **cache** is a very fast memory between the CPU and the RAM, in levels: **L1** (very small and fast), **L2** (larger) and **L3** (larger still, shared between cores)."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Registres → cau → RAM → emmagatzematge.** És un compromís entre velocitat, capacitat i cost: **com més a prop del processador, més ràpida i més petita**.",
       "**Registros → caché → RAM → almacenamiento.** Es un compromiso entre velocidad, capacidad y coste: **cuanto más cerca del procesador, más rápida y más pequeña**.",
       "**Registers → cache → RAM → storage.** It is a trade-off between speed, capacity and cost: **the closer to the processor, the faster and smaller**."
      ]
     }
    ],
    "t": "box",
    "title": [
     "Jerarquia de memòria",
     "Jerarquía de memoria",
     "Memory hierarchy"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "La cau funciona perquè els programes **repeteixen**: un bucle torna a fer servir les mateixes dades i instruccions. Prova-ho al laboratori: amb un bucle petit gairebé tot són encerts; amb dades que no es repeteixen, la cau no ajuda.",
       "La caché funciona porque los programas **repiten**: un bucle vuelve a usar los mismos datos e instrucciones. Pruébalo en el laboratorio: con un bucle pequeño casi todo son aciertos; con datos que no se repiten, la caché no ayuda.",
       "The cache works because programs **repeat**: a loop reuses the same data and instructions. Try it in the lab: with a small loop almost everything is a hit; with data that does not repeat, the cache does not help."
      ]
     }
    ],
    "t": "tip",
    "mode": "explained"
   },
   {
    "t": "lab",
    "id": "cache",
    "props": {
     "id": "th-cache",
     "cfg": {}
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "id": "t1-c3",
     "type": "mcq",
     "q": [
      "Ordre de la jerarquia de memòria, de més ràpida a més lenta:",
      "Orden de la jerarquía de memoria, de más rápida a más lenta:",
      "Order of the memory hierarchy, from fastest to slowest:"
     ],
     "opts": [
      [
       "registres → memòria cau → RAM → disc",
       "registros → caché → RAM → disco",
       "registers → cache → RAM → disk"
      ],
      [
       "memòria cau → registres → RAM → disc",
       "caché → registros → RAM → disco",
       "cache → registers → RAM → disk"
      ],
      [
       "RAM → memòria cau → registres → disc",
       "RAM → caché → registros → disco",
       "RAM → cache → registers → disk"
      ]
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "Com més a prop de la CPU, més ràpida i més petita.",
        "Cuanto más cerca de la CPU, más rápida y más pequeña.",
        "The closer to the CPU, the faster and smaller."
       ]
      }
     ]
    }
   }
  ],
  "t1-sw": [
   {
    "head": [
     [
      "Tipus",
      "Tipo",
      "Type"
     ],
     [
      "Per a qui treballa",
      "Para quién trabaja",
      "Who it works for"
     ],
     [
      "Exemples",
      "Ejemplos",
      "Examples"
     ]
    ],
    "rows": [
     [
      "De sistema",
      [
       "per a l'ordinador",
       "para el ordenador",
       "for the computer"
      ],
      [
       "sistema operatiu, controladors, utilitats",
       "sistema operativo, controladores, utilidades",
       "operating system, drivers, utilities"
      ]
     ],
     [
      [
       "D'aplicació",
       "De aplicación",
       "Application"
      ],
      [
       "per a l'usuari",
       "para el usuario",
       "for the user"
      ],
      [
       "navegadors, editors de text, videojocs",
       "navegadores, editores de texto, videojuegos",
       "browsers, text editors, video games"
      ]
     ],
     [
      [
       "De desenvolupament",
       "De desarrollo",
       "Development"
      ],
      [
       "per al programador",
       "para el programador",
       "for the programmer"
      ],
      [
       "editors, compiladors, depuradors",
       "editores, compiladores, depuradores",
       "editors, compilers, debuggers"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Gestiona els recursos (processador, memòria, E/S, fitxers), dona una interfície a l'usuari i permet executar diverses aplicacions alhora. Windows, Linux, macOS, Android, iOS.",
       "Gestiona los recursos (procesador, memoria, E/S, ficheros), da una interfaz al usuario y permite ejecutar varias aplicaciones a la vez. Windows, Linux, macOS, Android, iOS.",
       "It manages the resources (processor, memory, I/O, files), gives the user an interface and allows several applications to run at once. Windows, Linux, macOS, Android, iOS."
      ]
     }
    ],
    "t": "def",
    "title": [
     "sistema operatiu",
     "n · sistema operativo",
     "n · operating system"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Software integrat en un dispositiu, en memòria no volàtil, que en controla el hardware bàsic i el fa arrencar. Exemple: el **UEFI**, que s'executa abans del sistema operatiu.",
       "Software integrado en un dispositivo, en memoria no volátil, que controla su hardware básico y lo hace arrancar. Ejemplo: el **UEFI**, que se ejecuta antes del sistema operativo.",
       "Software built into a device, in non-volatile memory, that controls its basic hardware and boots it. Example: **UEFI**, which runs before the operating system."
      ]
     }
    ],
    "t": "def",
    "title": [
     "firmware",
     "n · firmware",
     "n · firmware"
    ]
   }
  ],
  "t1-vn": [
   {
    "t": "p",
    "x": [
     "Abans, canviar de programa volia dir recablejar la màquina. La idea clau va ser **guardar el programa a la memòria**, com una dada més (les instruccions també són bits). Queda la pregunta: **instruccions i dades a la mateixa memòria o separades?**",
     "Antes, cambiar de programa quería decir recablear la máquina. La idea clave fue **guardar el programa en la memoria**, como un dato más (las instrucciones también son bits). Queda la pregunta: **¿instrucciones y datos en la misma memoria o separadas?**",
     "In the past, changing the program meant rewiring the machine. The key idea was to **store the program in memory**, as just another piece of data (instructions are bits too). The question remains: **instructions and data in the same memory or in separate ones?**"
    ]
   },
   {
    "head": [
     "",
     "Von Neumann",
     "Harvard"
    ],
    "rows": [
     [
      [
       "Memòria",
       "Memoria",
       "Memory"
      ],
      "compartida",
      "separada"
     ],
     [
      [
       "Espai d'adreces",
       "Espacio de direcciones",
       "Address space"
      ],
      [
       "comú",
       "común",
       "shared"
      ],
      [
       "separat",
       "separado",
       "separate"
      ]
     ],
     [
      [
       "Camins d'accés",
       "Caminos de acceso",
       "Access paths"
      ],
      [
       "compartits",
       "compartidos",
       "shared"
      ],
      [
       "independents",
       "independientes",
       "independent"
      ]
     ],
     [
      [
       "Accés simultani",
       "Acceso simultáneo",
       "Simultaneous access"
      ],
      [
       "limitat",
       "limitado",
       "limited"
      ],
      [
       "facilitat",
       "facilitado",
       "easier"
      ]
     ],
     [
      [
       "Organització",
       "Organización",
       "Organisation"
      ],
      [
       "més flexible",
       "más flexible",
       "more flexible"
      ],
      [
       "menys flexible",
       "menos flexible",
       "less flexible"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Coll d'ampolla de Von Neumann:** com que instruccions i dades passen pel mateix camí, mentre la CPU llegeix una dada no pot anar a buscar la instrucció següent. Al laboratori, el mateix programa de 4 instruccions necessita 7 cicles en Von Neumann i 5 en Harvard. Cap de les dues és universalment millor.",
       "**Cuello de botella de Von Neumann:** como instrucciones y datos pasan por el mismo camino, mientras la CPU lee un dato no puede ir a buscar la instrucción siguiente. En el laboratorio, el mismo programa de 4 instrucciones necesita 7 ciclos en Von Neumann y 5 en Harvard. Ninguna de las dos es universalmente mejor.",
       "**Von Neumann bottleneck:** since instructions and data travel along the same path, while the CPU reads a piece of data it cannot fetch the next instruction. In the lab, the same 4-instruction program needs 7 cycles in Von Neumann and 5 in Harvard. Neither is universally better."
      ]
     }
    ],
    "t": "tip",
    "mode": "explained"
   },
   {
    "t": "lab",
    "id": "vonneumann",
    "props": {
     "id": "th-vn",
     "cfg": {}
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "ref": "g-teo",
     "seed": 7
    }
   }
  ],
  "t1-class": [
   {
    "head": [
     [
      "Criteri",
      "Criterio",
      "Criterion"
     ],
     [
      "Categories",
      "Categorías",
      "Categories"
     ]
    ],
    "rows": [
     [
      [
       "Generalitat d'ús",
       "Generalidad de uso",
       "Generality of use"
      ],
      [
       "**general** (PC, portàtil, servidor) · **específic** (rellotge, càmera, electrodomèstic; sovint dins d'un sistema més gran)",
       "**general** (PC, portátil, servidor) · **específico** (reloj, cámara, electrodoméstico; a menudo dentro de un sistema más grande)",
       "**general** (PC, laptop, server) · **specific** (watch, camera, household appliance; often inside a larger system)"
      ]
     ],
     [
      [
       "Paral·lelisme",
       "Paralelismo",
       "Parallelism"
      ],
      [
       "**SISD** (una instrucció, una dada) · **SIMD** (una instrucció, moltes dades: vectors, matrius) · **MIMD** (moltes instruccions, moltes dades: multiprocessador amb memòria compartida o clúster d'ordinadors en xarxa)",
       "**SISD** (una instrucción, un dato) · **SIMD** (una instrucción, muchos datos: vectores, matrices) · **MIMD** (muchas instrucciones, muchos datos: multiprocesador con memoria compartida o clúster de ordenadores en red)",
       "**SISD** (one instruction, one data item) · **SIMD** (one instruction, many data items: vectors, matrices) · **MIMD** (many instructions, many data items: multiprocessor with shared memory or a cluster of networked computers)"
      ]
     ],
     [
      [
       "Potència",
       "Potencia",
       "Power"
      ],
      [
       "velocitat, nuclis, mida de paraula, memòria, usuaris simultanis. **Servidor:** dona serveis a altres ordinadors de la xarxa",
       "velocidad, núcleos, tamaño de palabra, memoria, usuarios simultáneos. **Servidor:** da servicios a otros ordenadores de la red",
       "speed, cores, word size, memory, simultaneous users. **Server:** provides services to other computers on the network"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "t": "lab",
    "id": "flynn",
    "props": {
     "id": "th-flynn",
     "cfg": {}
    },
    "mode": "explained"
   }
  ],
  "t1-hist": [
   {
    "t": "p",
    "x": [
     "càlcul manual → càlcul mecànic → computació electrònica → computació quàntica",
     "cálculo manual → cálculo mecánico → computación electrónica → computación cuántica",
     "manual calculation → mechanical calculation → electronic computing → quantum computing"
    ]
   },
   {
    "head": [
     [
      "Qui / què",
      "Quién / qué",
      "Who / what"
     ],
     [
      "Aportació",
      "Aportación",
      "Contribution"
     ]
    ],
    "rows": [
     [
      [
       "Numeració posicional i zero",
       "Numeración posicional y cero",
       "Positional numbering and zero"
      ],
      [
       "càlcul amb regles mecàniques",
       "cálculo con reglas mecánicas",
       "calculation with mechanical rules"
      ]
     ],
     [
      [
       "Àbac",
       "Ábaco",
       "Abacus"
      ],
      [
       "primera eina de càlcul",
       "primera herramienta de cálculo",
       "first calculating tool"
      ]
     ],
     [
      "Napier (s. XVII)",
      [
       "logaritmes → regla de càlcul",
       "logaritmos → regla de cálculo",
       "logarithms → slide rule"
      ]
     ],
     [
      "Pascal",
      [
       "calculadora de rodes dentades",
       "calculadora de ruedas dentadas",
       "gear-wheel calculator"
      ]
     ],
     [
      "Leibniz",
      [
       "màquina de les quatre operacions",
       "máquina de las cuatro operaciones",
       "machine for the four operations"
      ]
     ],
     [
      "Jacquard",
      [
       "targetes perforades: **separar la màquina de les instruccions**",
       "tarjetas perforadas: **separar la máquina de las instrucciones**",
       "punched cards: **separating the machine from the instructions**"
      ]
     ],
     [
      "Babbage (s. XIX)",
      [
       "màquina analítica: E/S, memòria, control, unitat aritmètica (mai acabada)",
       "máquina analítica: E/S, memoria, control, unidad aritmética (nunca acabada)",
       "analytical engine: I/O, memory, control, arithmetic unit (never finished)"
      ]
     ],
     [
      "Boole (1854)",
      [
       "àlgebra de Boole (AND, OR, NOT): base dels circuits digitals",
       "álgebra de Boole (AND, OR, NOT): base de los circuitos digitales",
       "Boolean algebra (AND, OR, NOT): the basis of digital circuits"
      ]
     ],
     [
      "ABC, ENIAC (1946)",
      [
       "primers electrònics; vàlvules de buit",
       "primeros electrónicos; válvulas de vacío",
       "first electronic computers; vacuum tubes"
      ]
     ],
     [
      "von Neumann",
      [
       "programa emmagatzemat → ordinador de propòsit general",
       "programa almacenado → ordenador de propósito general",
       "stored program → general-purpose computer"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "head": [
     [
      "Generació",
      "Generación",
      "Generation"
     ],
     "Idea"
    ],
    "rows": [
     [
      "1a",
      [
       "vàlvules de buit",
       "válvulas de vacío",
       "vacuum tubes"
      ]
     ],
     [
      "2a",
      [
       "transistors",
       "transistores",
       "transistors"
      ]
     ],
     [
      "3a",
      [
       "circuits integrats",
       "circuitos integrados",
       "integrated circuits"
      ]
     ],
     [
      "4a",
      [
       "microprocessadors i ordinador personal",
       "microprocesadores y ordenador personal",
       "microprocessors and the personal computer"
      ]
     ],
     [
      "5a",
      [
       "computació connectada i intel·ligent",
       "computación conectada e inteligente",
       "connected and intelligent computing"
      ]
     ],
     [
      "6a",
      [
       "IAG, computació quàntica",
       "IAG, computación cuántica",
       "AGI, quantum computing"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Cada generació fa els components més petits: baixen mida, consum i cost; pugen velocitat, capacitat i fiabilitat.",
       "Cada generación hace los componentes más pequeños: bajan tamaño, consumo y coste; suben velocidad, capacidad y fiabilidad.",
       "Each generation makes components smaller: size, power consumption and cost go down; speed, capacity and reliability go up."
      ]
     }
    ],
    "t": "tip",
    "mode": "explained"
   }
  ]
 },
 "examEnd": [
  {
   "ref": "c-p-mida"
  },
  {
   "ref": "c-u15"
  },
  {
   "ref": "g-transfer",
   "seed": 11
  },
  {
   "ref": "g-teo",
   "seed": 12
  }
 ]
};
