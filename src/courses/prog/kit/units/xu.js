// Generat per tools/kit-import/prog.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "La notació exacta dels temes 2.1, 2.2 i 2.3, per tenir-la a mà mentre escrius algorismes.",
    "La notación exacta de los temas 2.1, 2.2 y 2.3, para tenerla a mano mientras escribes algoritmos."
   ]
  }
 ],
 "sections": {
  "xu-1": [
   {
    "t": "p",
    "x": [
     "Tres parts: NOU TIPUS (més endavant), ENTORN amb totes les dades, i les accions entre INICI_SEQÜÈNCIA i FI_SEQÜÈNCIA. Les asserts entre claus expressen l'estat inicial i el final.",
     "Tres partes: NOU TIPUS (más adelante), ENTORN con todos los datos, y las acciones entre INICI_SEQÜÈNCIA y FI_SEQÜÈNCIA. Las aserciones entre llaves expresan el estado inicial y el final."
    ]
   },
   {
    "t": "code",
    "lang": "ps",
    "src": "ENTORN\n  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ\n   E      Base          Real      Base del rectangle\n   E      Altura        Real      Altura del rectangle\n   S      Àrea          Real      Àrea del rectangle\n\nINICI_SEQÜÈNCIA\n    Llegir Base\n    Llegir Altura\n    {Base ≥ 0 i Altura ≥ 0}        ← estat inicial\n    Àrea ← Base · Altura\n    {Àrea = Base · Altura}         ← estat final\n    Escriure \"L'àrea del rectangle és \", Àrea\nFI_SEQÜÈNCIA",
    "props": {
     "nonum": true
    }
   }
  ],
  "xu-2": [
   {
    "t": "table",
    "head": [
     [
      "Tipus",
      "Tipo"
     ],
     [
      "Exemple",
      "Ejemplo"
     ]
    ],
    "rows": [
     [
      "`Enter`",
      "`10, −200`"
     ],
     [
      "`Natural`",
      "`24, 800`"
     ],
     [
      "`Real`",
      "`3,24; −705,65`"
     ],
     [
      "`Caràcter`",
      "`'a'`"
     ],
     [
      "`Lògic`",
      "`cert, fals`"
     ],
     [
      "`Cadena`",
      "`\"hola amics\"`"
     ],
     [
      [
       "Subrang, Enumeratiu",
       "Subrango, Enumerado"
      ],
      [
       "definits pel programador",
       "definidos por el programador"
      ]
     ]
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
      "Com s'escriu",
      "Cómo se escribe"
     ]
    ],
    "rows": [
     [
      "Entrada",
      "`Llegir A    ·    Llegir N1, N2, N3`"
     ],
     [
      [
       "Assignació",
       "Asignación"
      ],
      "`A ← expressió`"
     ],
     [
      [
       "Sortida",
       "Salida"
      ],
      "`Escriure \"text \", A`"
     ]
    ]
   }
  ],
  "xu-3": [
   {
    "t": "table",
    "head": [
     [
      "Operació",
      "Operación"
     ],
     [
      "Símbol",
      "Símbolo"
     ],
     "a = 9, b = 5"
    ],
    "rows": [
     [
      "`Suma / resta`",
      "`+  −`",
      "`14 / 4`"
     ],
     [
      [
       "Producte",
       "Producto"
      ],
      "`·`",
      "`45`"
     ],
     [
      [
       "Divisió",
       "División"
      ],
      "`/`",
      "`1,8`"
     ],
     [
      [
       "Quocient enter",
       "Cociente entero"
      ],
      "`‖  (div)`",
      "`1`"
     ],
     [
      [
       "Residu",
       "Resto"
      ],
      "`|R  (mod)`",
      "`4`"
     ],
     [
      [
       "Lògics",
       "Lógicos"
      ],
      "`I   O   NO`",
      "``"
     ],
     [
      [
       "Relacionals",
       "Relacionales"
      ],
      "`=  ≠  <  >  ≤  ≥`",
      "``"
     ]
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Prioritat",
      "Prioridad"
     ],
     [
      "Operadors",
      "Operadores"
     ]
    ],
    "rows": [
     [
      "`1a`",
      "`NO`"
     ],
     [
      "`2a`",
      "`·   /   ‖   |R   I`"
     ],
     [
      "`3a`",
      "`+   −   O`"
     ],
     [
      [
       "4a (la més baixa)",
       "4a (la más baja)"
      ],
      "`=  <  >  ≤  ≥  ≠`"
     ]
    ]
   },
   {
    "t": "note",
    "x": [
     "Els relacionals van al final: a < b I c = d no vol dir el que sembla. Escriu sempre (a < b) I (c = d). A igual prioritat, d'esquerra a dreta: 20 ‖ 3 |R 4 = (20 ‖ 3) |R 4 = 2.",
     "Los relacionales van al final: a < b I c = d no significa lo que parece. Escribe siempre (a < b) I (c = d). A igual prioridad, de izquierda a derecha: 20 ‖ 3 |R 4 = (20 ‖ 3) |R 4 = 2."
    ]
   }
  ],
  "xu-4": [
   {
    "t": "code",
    "lang": "ps",
    "src": "SI condició LLAVORS                 SEGONS_SIGUI variable FER\n    accions                             Valor 1: acció\nALTRAMENT                               Valor 2: acció\n    accions                         ALTRAMENT\nFI_SI                                   acció\n                                    FI_SEGONS_SIGUI\n\nMENTRE condició FER                 REPETEIX\n    accions                             accions\nFI_MENTRE                           FINS_QUE condició\n{en sortir, la condició és falsa}   {com a mínim una volta}\n\nDES_DE i ← 1 FINS n Increment 1 FER\n    accions\nFI_DES_DE",
    "props": {
     "nonum": true
    }
   },
   {
    "t": "note",
    "x": [
     "DES_DE només quan saps el nombre de voltes abans d'entrar. Dins del bucle no es toca la variable de control. Amb Increment −1 compta cap avall.",
     "DES_DE solo cuando sabes el número de vueltas antes de entrar. Dentro del bucle no se toca la variable de control. Con Increment −1 cuenta hacia abajo."
    ]
   }
  ],
  "xu-5": [
   {
    "t": "code",
    "lang": "ps",
    "src": "RECORREGUT                              CERCA\nINICI_SEQÜÈNCIA                         INICI_SEQÜÈNCIA\n    obtenir primer element                  obtenir primer element\n    inici tractament                        trobat ← fals\n    MENTRE no fi seqüència FER              inici tractament\n        tractar element                     MENTRE (no fi seqüència) I (NO trobat) FER\n        obtenir següent element                 SI condició de cerca LLAVORS\n    FI_MENTRE                                       trobat ← cert\n    final tractament                            ALTRAMENT\nFI_SEQÜÈNCIA                                        obtenir següent element\n                                                FI_SI\n                                            FI_MENTRE\n                                            SI trobat LLAVORS\n                                                cerca amb èxit\n                                            ALTRAMENT\n                                                cerca fallida\n                                            FI_SI\n                                        FI_SEQÜÈNCIA",
    "props": {
     "nonum": true
    }
   },
   {
    "t": "p",
    "x": [
     "A l'entrada, obtenir element és Llegir, i la fi es detecta amb una marca:",
     "En la entrada, obtener elemento es Llegir, y el fin se detecta con una marca:"
    ]
   },
   {
    "t": "code",
    "lang": "ps",
    "src": "Llegir A\ninici tractament\nMENTRE A ≠ marca FER\n    tractar A\n    Llegir A\nFI_MENTRE\nfinal tractament",
    "props": {
     "nonum": true
    }
   },
   {
    "t": "note",
    "x": [
     "A la cerca només s'avança a l'ALTRAMENT: si avances sempre, l'element trobat queda enrere del capçal. Recorregut: tots els elements. Cerca: para quan troba.",
     "En la búsqueda solo se avanza en el ALTRAMENT: si avanzas siempre, el elemento encontrado queda detrás del cabezal. Recorrido: todos los elementos. Búsqueda: para cuando encuentra."
    ]
   }
  ],
  "xu-6": [
   {
    "t": "table",
    "head": [
     "C++",
     "Python",
     [
      "Pseudocodi del curs",
      "Pseudocódigo del curso"
     ]
    ],
    "rows": [
     [
      "`x = 5;`",
      "`x = 5`",
      "`x ← 5`"
     ],
     [
      "`==   !=`",
      "`==   !=`",
      "`=   ≠`"
     ],
     [
      "`&&  ||  !`",
      "`and  or  not`",
      "`I   O   NO`"
     ],
     [
      "`a / b   (ints)`",
      "`a // b`",
      "`a ‖ b`"
     ],
     [
      "`a % b`",
      "`a % b`",
      "`a |R b`"
     ],
     [
      "`cin >> x;`",
      "`x = int(input())`",
      "`Llegir x`"
     ],
     [
      "`cout << x;`",
      "`print(x)`",
      "`Escriure x`"
     ],
     [
      "`true / false`",
      "`True / False`",
      "`cert / fals`"
     ],
     [
      "`for (i=1;i<=n;i++)`",
      "`for i in range(1, n+1)`",
      "`DES_DE i ← 1 FINS n Increment 1 FER`"
     ],
     [
      "`do { } while (c);`",
      "`—`",
      "`REPETEIX … FINS_QUE NO c`"
     ],
     [
      "`switch`",
      "`match`",
      "`SEGONS_SIGUI`"
     ],
     [
      "`break`",
      "`break`",
      [
       "trobat ← cert i NO trobat al MENTRE",
       "trobat ← cert y NO trobat en el MENTRE"
      ]
     ],
     [
      "`int x;`",
      "`—`",
      [
       "fila a l'ENTORN: x  Enter",
       "fila en el ENTORN: x  Enter"
      ]
     ]
    ]
   }
  ],
  "xu-7": [
   {
    "t": "def",
    "title": [
     "Algorisme",
     "Algoritmo"
    ],
    "x": [
     "Seqüència ordenada i finita d'accions que dona un mètode per resoldre un problema.",
     "Secuencia ordenada y finita de acciones que da un método para resolver un problema."
    ]
   },
   {
    "t": "def",
    "title": [
     "Característiques",
     "Características"
    ],
    "x": [
     "Finit, definibilitat, eficient, simplicitat.",
     "Finito, definibilidad, eficiente, simplicidad."
    ]
   },
   {
    "t": "def",
    "title": [
     "Entorn, acció, procés, processador",
     "Entorno, acción, proceso, procesador"
    ],
    "x": [
     "Objectes de la tasca; esdeveniment finit amb efecte previst; execució d'accions; entitat que entén i executa l'algorisme.",
     "Objetos de la tarea; suceso finito con efecto previsto; ejecución de acciones; entidad que entiende y ejecuta el algoritmo."
    ]
   },
   {
    "t": "def",
    "title": "Fases",
    "x": [
     "Enunciat → disseny → codificació → verificació i depuració (jocs de proves).",
     "Enunciado → diseño → codificación → verificación y depuración (juegos de pruebas)."
    ]
   },
   {
    "t": "def",
    "title": [
     "Equació fonamental",
     "Ecuación fundamental"
    ],
    "x": "Programa = Algorisme + Estructures de dades"
   },
   {
    "t": "def",
    "title": [
     "Programació estructurada",
     "Programación estructurada"
    ],
    "x": [
     "Només tres composicions: seqüencial, alternativa (simple, doble, múltiple) i iterativa (MENTRE, REPETEIX…FINS_QUE, DES_DE).",
     "Solo tres composiciones: secuencial, alternativa (simple, doble, múltiple) e iterativa (MENTRE, REPETEIX…FINS_QUE, DES_DE)."
    ]
   }
  ]
 },
 "examEnd": []
};
