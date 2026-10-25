// Generat per tools/kit-import/comp.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Informació i unitats, velocitat de transferència, llenguatges i traductors, estructura funcional (CPU, memòria, cau), Von Neumann i Harvard, classificació i història. Els laboratoris deixen tocar el que costa d'imaginar: el cicle d'instrucció, la cau o un compilador.",
    "Información y unidades, velocidad de transferencia, lenguajes y traductores, estructura funcional (CPU, memoria, caché), Von Neumann y Harvard, clasificación e historia. Los laboratorios dejan tocar lo que cuesta imaginar: el ciclo de instrucción, la caché o un compilador."
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
       "Disciplina que estudia el **tratamiento automático de la información** mediante sistemas computacionales (del francés *informatique*: **infor**mación + auto**mática**). No es «usar ordenadores»: estudia cómo **representar, almacenar, procesar y transmitir** información."
      ]
     }
    ],
    "t": "def",
    "title": [
     "informàtica",
     "n · informática"
    ]
   },
   {
    "head": [
     "Fase",
     [
      "Què fa",
      "Qué hace"
     ],
     [
      "A la foto amb el mòbil",
      "En la foto con el móvil"
     ]
    ],
    "rows": [
     [
      "Entrada",
      [
       "rep dades de l'exterior",
       "recibe datos del exterior"
      ],
      [
       "la càmera captura",
       "la cámara captura"
      ]
     ],
     [
      [
       "Processament",
       "Procesamiento"
      ],
      [
       "transforma les dades seguint instruccions",
       "transforma los datos siguiendo instrucciones"
      ],
      [
       "el processador la tracta",
       "el procesador la trata"
      ]
     ],
     [
      [
       "Sortida",
       "Salida"
      ],
      [
       "genera un resultat",
       "genera un resultado"
      ],
      [
       "la pantalla la mostra",
       "la pantalla la muestra"
      ]
     ],
     [
      [
       "Emmagatzematge",
       "Almacenamiento"
      ],
      [
       "conserva dades i resultats",
       "conserva datos y resultados"
      ],
      [
       "la memòria la guarda",
       "la memoria la guarda"
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
       "Un **algoritmo** es un conjunto **finito y ordenado** de pasos que resuelve un problema. Una **instrucción** es una operación concreta que el ordenador puede ejecutar. Un **programa** es un conjunto ordenado de instrucciones: Problema → Algoritmo → Programa → Ejecución."
      ]
     }
    ],
    "t": "def",
    "title": [
     "algorisme, instrucció, programa",
     "n · algoritmo, instrucción, programa"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "L'algorisme és la idea (la recepta del cafè); el programa és aquesta idea escrita amb instruccions que una màquina sap executar. El mateix algorisme pot donar programes diferents en llenguatges diferents.",
       "El algoritmo es la idea (la receta del café); el programa es esa idea escrita con instrucciones que una máquina sabe ejecutar. El mismo algoritmo puede dar programas distintos en lenguajes distintos."
      ]
     }
    ],
    "t": "tip"
   }
  ],
  "t1-bits": [
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un **bit** (*binary digit*) és la unitat mínima d'informació: 0 o 1. Un **byte** són **8 bits**. Amb n bits es poden representar **2$^{\\text{n}}$** combinacions diferents: 1 byte → 256.",
       "Un **bit** (*binary digit*) es la unidad mínima de información: 0 o 1. Un **byte** son **8 bits**. Con n bits se pueden representar **2$^{\\text{n}}$** combinaciones distintas: 1 byte → 256."
      ]
     }
    ],
    "t": "def",
    "title": [
     "bit i byte",
     "n · bit i byte"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Afegir un bit duplica les combinacions.** Al revés: per representar N valors diferents calen els bits n tals que 2$^{\\text{n}}$ ≥ N. Per a 65 536 valors, 16 bits; per a 1 000 valors, 10 bits (2$^{\\text{10}}$ = 1 024), perquè amb 9 (512) no n'hi ha prou.",
       "**Añadir un bit duplica las combinaciones.** Al revés: para representar N valores distintos hacen falta los bits n tales que 2$^{\\text{n}}$ ≥ N. Para 65 536 valores, 16 bits; para 1 000 valores, 10 bits (2$^{\\text{10}}$ = 1 024), porque con 9 (512) no basta."
      ]
     }
    ],
    "t": "tip"
   },
   {
    "t": "lab",
    "id": "bits",
    "props": {
     "id": "th-bits",
     "cfg": {}
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
      "Binario (IEC)"
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
       "**b** minúscula = **bit**; **B** mayúscula = **byte**. **Mb** (megabit) y **MB** (megabyte) se diferencian en un factor 8. Y **K, M, G, T** son potencias de 10, mientras que **Ki, Mi, Gi, Ti** son potencias de 2."
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
       "Método infalible en tres pasos: **(1)** pasa la cantidad a bits o a bytes multiplicando por su prefijo; **(2)** si hace falta, bits ↔ bytes (× 8 o ÷ 8); **(3)** divide por el prefijo de la unidad pedida. No intentes hacerlo de golpe."
      ]
     }
    ],
    "t": "tip"
   },
   {
    "t": "lab",
    "id": "units",
    "props": {
     "id": "th-units",
     "cfg": {}
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
       "Cuánta información se transmite en un tiempo. Se mide en **bits por segundo** (b/s) con prefijos **decimales**: 1 Mb/s = 10⁶ b/s. El tiempo es **t = cantidad de datos ÷ velocidad**, con las dos magnitudes en unidades compatibles."
      ]
     }
    ],
    "t": "def",
    "title": [
     "velocitat de transferència",
     "n · velocidad de transferencia"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un fitxer de 100 MB amb 100 Mb/s **no** tarda 1 s: 100 MB són 800 Mb, i tarda 8 s. La trampa sempre és el factor 8 entre bytes i bits. I **capacitat ≠ velocitat**: «1 TB» diu quant cap; «1 Gb/s», com de pressa passa.",
       "Un fichero de 100 MB con 100 Mb/s **no** tarda 1 s: 100 MB son 800 Mb, y tarda 8 s. La trampa siempre es el factor 8 entre bytes y bits. Y **capacidad ≠ velocidad**: «1 TB» dice cuánto cabe; «1 Gb/s», lo rápido que pasa."
      ]
     }
    ],
    "t": "tip"
   },
   {
    "t": "lab",
    "id": "transfer",
    "props": {
     "id": "th-transfer",
     "cfg": {}
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
       "Lenguaje formal para expresar las instrucciones y los datos de un programa. Hacen falta porque el procesador solo ejecuta **lenguaje máquina** (bits), y nosotros necesitamos una forma comprensible."
      ]
     }
    ],
    "t": "def",
    "title": [
     "llenguatge de programació",
     "n · lenguaje de programación"
    ]
   },
   {
    "head": [
     [
      "Nivell",
      "Nivel"
     ],
     [
      "Com és",
      "Cómo es"
     ],
     [
      "Exemple de «suma a i b»",
      "Ejemplo de «suma a y b»"
     ]
    ],
    "rows": [
     [
      [
       "Llenguatge màquina",
       "Lenguaje máquina"
      ],
      [
       "bits; el processador l'executa directament; cada arquitectura té el seu",
       "bits; el procesador lo ejecuta directamente; cada arquitectura tiene el suyo"
      ],
      "`000000 00010 00011 00001 00000 100000`"
     ],
     [
      [
       "Assemblador",
       "Ensamblador"
      ],
      [
       "mnemònics (ADD, SUB, MOV) i noms simbòlics; lligat a l'arquitectura",
       "mnemónicos (ADD, SUB, MOV) y nombres simbólicos; ligado a la arquitectura"
      ],
      "`ADD R1, R2, R3`"
     ],
     [
      [
       "Alt nivell",
       "Alto nivel"
      ],
      [
       "variables, funcions, bucles; menys dependent del hardware",
       "variables, funciones, bucles; menos dependiente del hardware"
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
      "Ejemplos"
     ]
    ],
    "rows": [
     [
      [
       "Imperatiu",
       "Imperativo"
      ],
      [
       "**com** ho fem? (seqüència d'operacions)",
       "¿**cómo** lo hacemos? (secuencia de operaciones)"
      ],
      "C, Java, Python"
     ],
     [
      [
       "Declaratiu",
       "Declarativo"
      ],
      [
       "**què** volem obtenir?",
       "¿**qué** queremos obtener?"
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
       "Son **dos criterios independientes**: SQL es de alto nivel y declarativo; Assembly es de bajo nivel e imperativo. «Alto» y «bajo» hablan de la **proximidad al hardware**, no de calidad."
      ]
     }
    ],
    "t": "tip"
   }
  ],
  "t1-trad": [
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un **traductor** transforma un programa a una altra representació. El **compilador** tradueix **abans** d'executar; l'**assemblador** tradueix assemblador a llenguatge màquina; l'**intèrpret** analitza i executa **durant** l'execució.",
       "Un **traductor** transforma un programa a otra representación. El **compilador** traduce **antes** de ejecutar; el **ensamblador** traduce ensamblador a lenguaje máquina; el **intérprete** analiza y ejecuta **durante** la ejecución."
      ]
     }
    ],
    "t": "def",
    "title": [
     "traductor, compilador, assemblador, intèrpret",
     "n · traductor, compilador, ensamblador, intérprete"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Compilar és traduir un llibre sencer abans que ningú el llegeixi; interpretar és fer de traductor simultani en una conferència. A la pràctica molts llenguatges combinen les dues coses (Java i Python compilen a bytecode i després l'interpreten).",
       "Compilar es traducir un libro entero antes de que nadie lo lea; interpretar es hacer de traductor simultáneo en una conferencia. En la práctica muchos lenguajes combinan las dos cosas (Java y Python compilan a bytecode y después lo interpretan)."
      ]
     }
    ],
    "t": "tip"
   },
   {
    "t": "lab",
    "id": "compila",
    "props": {
     "id": "th-comp",
     "cfg": {}
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
       "parte física: se puede tocar"
      ],
      [
       "programes i instruccions",
       "programas e instrucciones"
      ]
     ],
     [
      [
       "executa instruccions",
       "ejecuta instrucciones"
      ],
      [
       "proporciona les instruccions",
       "proporciona las instrucciones"
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
       "Ejecuta las instrucciones repitiendo sin parar: **obtener** una instrucción → **interpretarla** → **ejecutarla** → pasar a la **siguiente**."
      ]
     }
    ],
    "t": "def",
    "title": [
     "CPU",
     "n · CPU"
    ]
   },
   {
    "head": [
     "",
     [
      "Memòria principal (RAM)",
      "Memoria principal (RAM)"
     ],
     [
      "Emmagatzematge (SSD, HDD, flash)",
      "Almacenamiento (SSD, HDD, flash)"
     ]
    ],
    "rows": [
     [
      [
       "Funció",
       "Función"
      ],
      [
       "dades i programes en ús, temporalment",
       "datos y programas en uso, temporalmente"
      ],
      [
       "conservar informació molt de temps",
       "conservar información mucho tiempo"
      ]
     ],
     [
      [
       "Velocitat",
       "Velocidad"
      ],
      [
       "ràpida",
       "rápida"
      ],
      [
       "més lent",
       "más lento"
      ]
     ],
     [
      [
       "Volàtil?",
       "¿Volátil?"
      ],
      [
       "sí: es buida en apagar",
       "sí: se vacía al apagar"
      ],
      "no"
     ],
     [
      [
       "Accés",
       "Acceso"
      ],
      [
       "directe per adreça",
       "directo por dirección"
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
     "La **ROM** y otras memorias no volátiles guardan lo que tiene que sobrevivir al apagado (el firmware de arranque). La **caché** es una memoria muy rápida entre la CPU y la RAM, en niveles: **L1** (muy pequeña y rápida), **L2** (más grande) y **L3** (todavía más grande, compartida entre núcleos)."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Registres → cau → RAM → emmagatzematge.** És un compromís entre velocitat, capacitat i cost: **com més a prop del processador, més ràpida i més petita**.",
       "**Registros → caché → RAM → almacenamiento.** Es un compromiso entre velocidad, capacidad y coste: **cuanto más cerca del procesador, más rápida y más pequeña**."
      ]
     }
    ],
    "t": "box",
    "title": [
     "Jerarquia de memòria",
     "Jerarquía de memoria"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "La cau funciona perquè els programes **repeteixen**: un bucle torna a fer servir les mateixes dades i instruccions. Prova-ho al laboratori: amb un bucle petit gairebé tot són encerts; amb dades que no es repeteixen, la cau no ajuda.",
       "La caché funciona porque los programas **repiten**: un bucle vuelve a usar los mismos datos e instrucciones. Pruébalo en el laboratorio: con un bucle pequeño casi todo son aciertos; con datos que no se repiten, la caché no ayuda."
      ]
     }
    ],
    "t": "tip"
   },
   {
    "t": "lab",
    "id": "cache",
    "props": {
     "id": "th-cache",
     "cfg": {}
    }
   }
  ],
  "t1-sw": [
   {
    "head": [
     [
      "Tipus",
      "Tipo"
     ],
     [
      "Per a qui treballa",
      "Para quién trabaja"
     ],
     [
      "Exemples",
      "Ejemplos"
     ]
    ],
    "rows": [
     [
      "De sistema",
      [
       "per a l'ordinador",
       "para el ordenador"
      ],
      [
       "sistema operatiu, controladors, utilitats",
       "sistema operativo, controladores, utilidades"
      ]
     ],
     [
      [
       "D'aplicació",
       "De aplicación"
      ],
      [
       "per a l'usuari",
       "para el usuario"
      ],
      [
       "navegadors, editors de text, videojocs",
       "navegadores, editores de texto, videojuegos"
      ]
     ],
     [
      [
       "De desenvolupament",
       "De desarrollo"
      ],
      [
       "per al programador",
       "para el programador"
      ],
      [
       "editors, compiladors, depuradors",
       "editores, compiladores, depuradores"
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
       "Gestiona los recursos (procesador, memoria, E/S, ficheros), da una interfaz al usuario y permite ejecutar varias aplicaciones a la vez. Windows, Linux, macOS, Android, iOS."
      ]
     }
    ],
    "t": "def",
    "title": [
     "sistema operatiu",
     "n · sistema operativo"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Software integrat en un dispositiu, en memòria no volàtil, que en controla el hardware bàsic i el fa arrencar. Exemple: el **UEFI**, que s'executa abans del sistema operatiu.",
       "Software integrado en un dispositivo, en memoria no volátil, que controla su hardware básico y lo hace arrancar. Ejemplo: el **UEFI**, que se ejecuta antes del sistema operativo."
      ]
     }
    ],
    "t": "def",
    "title": [
     "firmware",
     "n · firmware"
    ]
   }
  ],
  "t1-vn": [
   {
    "t": "p",
    "x": [
     "Abans, canviar de programa volia dir recablejar la màquina. La idea clau va ser **guardar el programa a la memòria**, com una dada més (les instruccions també són bits). Queda la pregunta: **instruccions i dades a la mateixa memòria o separades?**",
     "Antes, cambiar de programa quería decir recablear la máquina. La idea clave fue **guardar el programa en la memoria**, como un dato más (las instrucciones también son bits). Queda la pregunta: **¿instrucciones y datos en la misma memoria o separadas?**"
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
       "Memoria"
      ],
      "compartida",
      "separada"
     ],
     [
      [
       "Espai d'adreces",
       "Espacio de direcciones"
      ],
      [
       "comú",
       "común"
      ],
      [
       "separat",
       "separado"
      ]
     ],
     [
      [
       "Camins d'accés",
       "Caminos de acceso"
      ],
      [
       "compartits",
       "compartidos"
      ],
      [
       "independents",
       "independientes"
      ]
     ],
     [
      [
       "Accés simultani",
       "Acceso simultáneo"
      ],
      [
       "limitat",
       "limitado"
      ],
      [
       "facilitat",
       "facilitado"
      ]
     ],
     [
      [
       "Organització",
       "Organización"
      ],
      [
       "més flexible",
       "más flexible"
      ],
      [
       "menys flexible",
       "menos flexible"
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
       "**Cuello de botella de Von Neumann:** como instrucciones y datos pasan por el mismo camino, mientras la CPU lee un dato no puede ir a buscar la instrucción siguiente. En el laboratorio, el mismo programa de 4 instrucciones necesita 7 ciclos en Von Neumann y 5 en Harvard. Ninguna de las dos es universalmente mejor."
      ]
     }
    ],
    "t": "tip"
   },
   {
    "t": "lab",
    "id": "vonneumann",
    "props": {
     "id": "th-vn",
     "cfg": {}
    }
   }
  ],
  "t1-class": [
   {
    "head": [
     [
      "Criteri",
      "Criterio"
     ],
     [
      "Categories",
      "Categorías"
     ]
    ],
    "rows": [
     [
      [
       "Generalitat d'ús",
       "Generalidad de uso"
      ],
      [
       "**general** (PC, portàtil, servidor) · **específic** (rellotge, càmera, electrodomèstic; sovint dins d'un sistema més gran)",
       "**general** (PC, portátil, servidor) · **específico** (reloj, cámara, electrodoméstico; a menudo dentro de un sistema más grande)"
      ]
     ],
     [
      [
       "Paral·lelisme",
       "Paralelismo"
      ],
      [
       "**SISD** (una instrucció, una dada) · **SIMD** (una instrucció, moltes dades: vectors, matrius) · **MIMD** (moltes instruccions, moltes dades: multiprocessador amb memòria compartida o clúster d'ordinadors en xarxa)",
       "**SISD** (una instrucción, un dato) · **SIMD** (una instrucción, muchos datos: vectores, matrices) · **MIMD** (muchas instrucciones, muchos datos: multiprocesador con memoria compartida o clúster de ordenadores en red)"
      ]
     ],
     [
      [
       "Potència",
       "Potencia"
      ],
      [
       "velocitat, nuclis, mida de paraula, memòria, usuaris simultanis. **Servidor:** dona serveis a altres ordinadors de la xarxa",
       "velocidad, núcleos, tamaño de palabra, memoria, usuarios simultáneos. **Servidor:** da servicios a otros ordenadores de la red"
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
    }
   }
  ],
  "t1-hist": [
   {
    "t": "p",
    "x": [
     "càlcul manual → càlcul mecànic → computació electrònica → computació quàntica",
     "cálculo manual → cálculo mecánico → computación electrónica → computación cuántica"
    ]
   },
   {
    "head": [
     [
      "Qui / què",
      "Quién / qué"
     ],
     [
      "Aportació",
      "Aportación"
     ]
    ],
    "rows": [
     [
      [
       "Numeració posicional i zero",
       "Numeración posicional y cero"
      ],
      [
       "càlcul amb regles mecàniques",
       "cálculo con reglas mecánicas"
      ]
     ],
     [
      [
       "Àbac",
       "Ábaco"
      ],
      [
       "primera eina de càlcul",
       "primera herramienta de cálculo"
      ]
     ],
     [
      "Napier (s. XVII)",
      [
       "logaritmes → regla de càlcul",
       "logaritmos → regla de cálculo"
      ]
     ],
     [
      "Pascal",
      [
       "calculadora de rodes dentades",
       "calculadora de ruedas dentadas"
      ]
     ],
     [
      "Leibniz",
      [
       "màquina de les quatre operacions",
       "máquina de las cuatro operaciones"
      ]
     ],
     [
      "Jacquard",
      [
       "targetes perforades: **separar la màquina de les instruccions**",
       "tarjetas perforadas: **separar la máquina de las instrucciones**"
      ]
     ],
     [
      "Babbage (s. XIX)",
      [
       "màquina analítica: E/S, memòria, control, unitat aritmètica (mai acabada)",
       "máquina analítica: E/S, memoria, control, unidad aritmética (nunca acabada)"
      ]
     ],
     [
      "Boole (1854)",
      [
       "àlgebra de Boole (AND, OR, NOT): base dels circuits digitals",
       "álgebra de Boole (AND, OR, NOT): base de los circuitos digitales"
      ]
     ],
     [
      "ABC, ENIAC (1946)",
      [
       "primers electrònics; vàlvules de buit",
       "primeros electrónicos; válvulas de vacío"
      ]
     ],
     [
      "von Neumann",
      [
       "programa emmagatzemat → ordinador de propòsit general",
       "programa almacenado → ordenador de propósito general"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "head": [
     [
      "Generació",
      "Generación"
     ],
     "Idea"
    ],
    "rows": [
     [
      "1a",
      [
       "vàlvules de buit",
       "válvulas de vacío"
      ]
     ],
     [
      "2a",
      [
       "transistors",
       "transistores"
      ]
     ],
     [
      "3a",
      [
       "circuits integrats",
       "circuitos integrados"
      ]
     ],
     [
      "4a",
      [
       "microprocessadors i ordinador personal",
       "microprocesadores y ordenador personal"
      ]
     ],
     [
      "5a",
      [
       "computació connectada i intel·ligent",
       "computación conectada e inteligente"
      ]
     ],
     [
      "6a",
      [
       "IAG, computació quàntica",
       "IAG, computación cuántica"
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
       "Cada generación hace los componentes más pequeños: bajan tamaño, consumo y coste; suben velocidad, capacidad y fiabilidad."
      ]
     }
    ],
    "t": "tip"
   }
  ]
 },
 "examEnd": []
};
