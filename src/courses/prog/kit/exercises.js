// Generat per tools/kit-import/prog.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "items": [
  {
   "id": "ps-area",
   "title": [
    "Àrea i perímetre d'un rectangle",
    "Área y perímetro de un rectángulo"
   ],
   "q": [
    "Llegiu la base i l'altura d'un rectangle (reals) i escriviu-ne l'àrea i el perímetre.",
    "Leed la base y la altura de un rectángulo (reales) y escribid su área y su perímetro."
   ],
   "unit": "t21",
   "level": "easy",
   "kind": "seq",
   "type": "pseudo",
   "tests": [
    {
     "in": [
      3,
      4.5
     ],
     "out": [
      13.5,
      15
     ]
    },
    {
     "in": [
      2,
      2
     ],
     "out": [
      4,
      8
     ]
    },
    {
     "in": [
      0.5,
      10
     ],
     "out": [
      5,
      21
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS  DESCRIPCIÓ\n  E    Base           Real   Base del rectangle\n  E    Altura         Real   Altura del rectangle\n  S    Area           Real   Àrea del rectangle\n  S    Perimetre      Real   Perímetre del rectangle\nINICI_SEQÜÈNCIA\n    Llegir Base\n    Llegir Altura\n    {Base ≥ 0 i Altura ≥ 0}\n    Area ← Base · Altura\n    Perimetre ← 2 · (Base + Altura)\n    {Area = Base · Altura i Perimetre = 2 · (Base + Altura)}\n    Escriure \"Àrea: \", Area\n    Escriure \"Perímetre: \", Perimetre\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-temps",
   "title": [
    "Segons a h, min i s",
    "Segundos a h, min y s"
   ],
   "q": [
    "Llegiu una quantitat de segons T (natural) i escriviu-la en hores, minuts i segons.",
    "Leed una cantidad de segundos T (natural) y escribidla en horas, minutos y segundos."
   ],
   "unit": "t21",
   "level": "easy",
   "kind": "seq",
   "type": "pseudo",
   "hint": [
    "Quocient enter ‖ i residu |R.",
    "Cociente entero ‖ y resto |R."
   ],
   "tests": [
    {
     "in": [
      3725
     ],
     "out": [
      1,
      2,
      5
     ]
    },
    {
     "in": [
      59
     ],
     "out": [
      0,
      0,
      59
     ]
    },
    {
     "in": [
      86399
     ],
     "out": [
      23,
      59,
      59
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    T              Natural  Segons totals\n  S    H              Natural  Hores\n  S    M              Natural  Minuts\n  S    S              Natural  Segons\nINICI_SEQÜÈNCIA\n    Llegir T\n    {T ≥ 0}\n    H ← T ‖ 3600\n    M ← (T |R 3600) ‖ 60\n    S ← T |R 60\n    {T = 3600 · H + 60 · M + S}\n    Escriure H, \" h \", M, \" min \", S, \" s\"\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-igi",
   "title": [
    "Preu amb IGI",
    "Precio con IGI"
   ],
   "q": [
    "Llegiu el preu d'un producte (real) i escriviu el preu final amb l'IGI general del 4,5 %.",
    "Leed el precio de un producto (real) y escribid el precio final con el IGI general del 4,5 %."
   ],
   "unit": "t21",
   "level": "easy",
   "kind": "seq",
   "type": "pseudo",
   "tests": [
    {
     "in": [
      100
     ],
     "out": [
      104.5
     ]
    },
    {
     "in": [
      20
     ],
     "out": [
      20.9
     ]
    },
    {
     "in": [
      0
     ],
     "out": [
      0
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS  DESCRIPCIÓ\n  E    Preu           Real   Preu sense impost\n  S    Total          Real   Preu amb l'IGI\nINICI_SEQÜÈNCIA\n    Llegir Preu\n    {Preu ≥ 0}\n    Total ← Preu + Preu · 4.5 / 100\n    {Total = Preu · 1,045}\n    Escriure \"Preu final: \", Total\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-swap",
   "title": [
    "Intercanvi de dues variables",
    "Intercambio de dos variables"
   ],
   "q": [
    "Llegiu dos enters A i B, intercanvieu-ne els valors i escriviu A i B.",
    "Leed dos enteros A y B, intercambiad sus valores y escribid A y B."
   ],
   "unit": "t21",
   "level": "easy",
   "kind": "seq",
   "type": "pseudo",
   "hint": [
    "Cal una variable auxiliar: no hi ha l'a, b = b, a de Python.",
    "Hace falta una variable auxiliar: no existe el a, b = b, a de Python."
   ],
   "tests": [
    {
     "in": [
      3,
      8
     ],
     "out": [
      8,
      3
     ]
    },
    {
     "in": [
      -1,
      5
     ],
     "out": [
      5,
      -1
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS  DESCRIPCIÓ\n  E/S  A              Enter  Primer valor\n  E/S  B              Enter  Segon valor\n       Aux            Enter  Auxiliar per a l'intercanvi\nINICI_SEQÜÈNCIA\n    Llegir A, B\n    Aux ← A\n    A ← B\n    B ← Aux\n    Escriure A, \" \", B\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-pilotes",
   "title": [
    "Pilotes en capses",
    "Pelotas en cajas"
   ],
   "q": [
    "Una fàbrica posa les pilotes en capses de 6. Llegiu el nombre de pilotes N i escriviu quantes capses s'omplen i quantes pilotes sobren.",
    "Una fábrica pone las pelotas en cajas de 6. Leed el número de pelotas N y escribid cuántas cajas se llenan y cuántas pelotas sobran."
   ],
   "unit": "t21",
   "level": "easy",
   "kind": "seq",
   "type": "pseudo",
   "basedOn": [
    "en l'estil de S02 · La Fàbrica de Pilotes",
    "al estilo de S02 · La Fàbrica de Pilotes"
   ],
   "tests": [
    {
     "in": [
      20
     ],
     "out": [
      3,
      2
     ]
    },
    {
     "in": [
      6
     ],
     "out": [
      1,
      0
     ]
    },
    {
     "in": [
      5
     ],
     "out": [
      0,
      5
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    N              Natural  Nombre de pilotes\n  S    Capses         Natural  Capses plenes\n  S    Sobren         Natural  Pilotes que sobren\nINICI_SEQÜÈNCIA\n    Llegir N\n    Capses ← N ‖ 6\n    Sobren ← N |R 6\n    {N = 6 · Capses + Sobren i Sobren < 6}\n    Escriure \"Capses: \", Capses, \" Sobren: \", Sobren\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-xif3",
   "title": [
    "Suma de les xifres d'un nombre de 3 xifres",
    "Suma de las cifras de un número de 3 cifras"
   ],
   "q": [
    "Llegiu un natural de tres xifres i escriviu la suma de les seves xifres.",
    "Leed un natural de tres cifras y escribid la suma de sus cifras."
   ],
   "unit": "t21",
   "level": "easy",
   "kind": "seq",
   "type": "pseudo",
   "tests": [
    {
     "in": [
      472
     ],
     "out": [
      13
     ]
    },
    {
     "in": [
      100
     ],
     "out": [
      1
     ]
    },
    {
     "in": [
      999
     ],
     "out": [
      27
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    N              Natural  Nombre de tres xifres\n  S    Suma           Natural  Suma de les xifres\nINICI_SEQÜÈNCIA\n    Llegir N\n    {100 ≤ N ≤ 999}\n    Suma ← N ‖ 100 + (N ‖ 10) |R 10 + N |R 10\n    Escriure \"Suma de xifres: \", Suma\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-max3",
   "title": [
    "Màxim de tres nombres",
    "Máximo de tres números"
   ],
   "q": [
    "Llegiu tres naturals i escriviu el més gran (exemple de la teoria).",
    "Leed tres naturales y escribid el mayor (ejemplo de la teoría)."
   ],
   "unit": "t22",
   "level": "exam",
   "kind": "cond",
   "type": "pseudo",
   "tests": [
    {
     "in": [
      3,
      9,
      4
     ],
     "out": [
      9
     ]
    },
    {
     "in": [
      7,
      2,
      1
     ],
     "out": [
      7
     ]
    },
    {
     "in": [
      1,
      2,
      8
     ],
     "out": [
      8
     ]
    },
    {
     "in": [
      5,
      5,
      5
     ],
     "out": [
      5
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    N1             Natural  Primer número\n  E    N2             Natural  Segon número\n  E    N3             Natural  Tercer número\n  S    Max            Natural  Màxim dels tres números\nINICI_SEQÜÈNCIA\n    Llegir N1, N2, N3\n    {N1 ≥ 0 i N2 ≥ 0 i N3 ≥ 0}\n    Max ← N1\n    SI N2 > Max LLAVORS\n        Max ← N2\n    FI_SI\n    SI N3 > Max LLAVORS\n        Max ← N3\n    FI_SI\n    {Max = màxim(N1, N2, N3)}\n    Escriure \"El màxim és \", Max\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-parell",
   "title": [
    "Parell o senar",
    "Par o impar"
   ],
   "q": [
    "Llegiu un enter i escriviu «parell» o «senar».",
    "Leed un entero y escribid «parell» o «senar»."
   ],
   "unit": "t22",
   "level": "exam",
   "kind": "cond",
   "type": "pseudo",
   "tests": [
    {
     "in": [
      8
     ],
     "out": [
      "parell"
     ]
    },
    {
     "in": [
      7
     ],
     "out": [
      "senar"
     ]
    },
    {
     "in": [
      0
     ],
     "out": [
      "parell"
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS  DESCRIPCIÓ\n  E    N              Enter  Nombre\nINICI_SEQÜÈNCIA\n    Llegir N\n    SI N |R 2 = 0 LLAVORS\n        Escriure \"parell\"\n    ALTRAMENT\n        Escriure \"senar\"\n    FI_SI\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-traspas",
   "title": [
    "Any de traspàs",
    "Año bisiesto"
   ],
   "q": [
    "Llegiu un any i escriviu «Sí» si és de traspàs i «No» si no ho és. És de traspàs si és múltiple de 4 i no de 100, o bé si és múltiple de 400.",
    "Leed un año y escribid «Sí» si es bisiesto y «No» si no lo es. Es bisiesto si es múltiplo de 4 y no de 100, o bien si es múltiplo de 400."
   ],
   "unit": "t22",
   "level": "exam",
   "kind": "cond",
   "type": "pseudo",
   "hint": [
    "Amb les prioritats del curs, cada comparació entre parèntesis.",
    "Con las prioridades del curso, cada comparación entre paréntesis."
   ],
   "tests": [
    {
     "in": [
      2024
     ],
     "out": [
      "si"
     ]
    },
    {
     "in": [
      1900
     ],
     "out": [
      "no"
     ]
    },
    {
     "in": [
      2000
     ],
     "out": [
      "si"
     ]
    },
    {
     "in": [
      2026
     ],
     "out": [
      "no"
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    Any            Natural  Any que es comprova\n       Traspas        Lògic    Cert si és de traspàs\nINICI_SEQÜÈNCIA\n    Llegir Any\n    Traspas ← ((Any |R 4 = 0) I (Any |R 100 ≠ 0)) O (Any |R 400 = 0)\n    SI Traspas LLAVORS\n        Escriure \"Sí\"\n    ALTRAMENT\n        Escriure \"No\"\n    FI_SI\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-nota",
   "title": [
    "Qualificació amb SEGONS_SIGUI",
    "Calificación con SEGONS_SIGUI"
   ],
   "q": [
    "Llegiu una nota entera de 0 a 10 i escriviu: 0–4 «Suspès», 5–6 «Aprovat», 7–8 «Notable», 9 «Excel·lent», 10 «Matrícula»; qualsevol altre valor, «Error».",
    "Leed una nota entera de 0 a 10 y escribid: 0–4 «Suspès», 5–6 «Aprovat», 7–8 «Notable», 9 «Excel·lent», 10 «Matrícula»; cualquier otro valor, «Error»."
   ],
   "unit": "t22",
   "level": "exam",
   "kind": "cond",
   "type": "pseudo",
   "tests": [
    {
     "in": [
      3
     ],
     "out": [
      "Suspes"
     ]
    },
    {
     "in": [
      6
     ],
     "out": [
      "Aprovat"
     ]
    },
    {
     "in": [
      8
     ],
     "out": [
      "Notable"
     ]
    },
    {
     "in": [
      9
     ],
     "out": [
      "Excel"
     ]
    },
    {
     "in": [
      10
     ],
     "out": [
      "Matricula"
     ]
    },
    {
     "in": [
      12
     ],
     "out": [
      "Error"
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS  DESCRIPCIÓ\n  E    Nota           Enter  Nota numèrica\nINICI_SEQÜÈNCIA\n    Llegir Nota\n    SEGONS_SIGUI Nota FER\n        0, 1, 2, 3, 4: Escriure \"Suspès\"\n        5, 6: Escriure \"Aprovat\"\n        7, 8: Escriure \"Notable\"\n        9: Escriure \"Excel·lent\"\n        10: Escriure \"Matrícula\"\n    ALTRAMENT\n        Escriure \"Error\"\n    FI_SEGONS_SIGUI\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-quadrant",
   "title": [
    "Quadrant d'un punt",
    "Cuadrante de un punto"
   ],
   "q": [
    "Llegiu les coordenades enteres x i y d'un punt i escriviu el quadrant (1, 2, 3 o 4), o 0 si és sobre un eix.",
    "Leed las coordenadas enteras x e y de un punto y escribid el cuadrante (1, 2, 3 o 4), o 0 si está sobre un eje."
   ],
   "unit": "t22",
   "level": "exam",
   "kind": "cond",
   "type": "pseudo",
   "basedOn": [
    "en l'estil de S03 · Quadrant",
    "al estilo de S03 · Quadrant"
   ],
   "tests": [
    {
     "in": [
      3,
      5
     ],
     "out": [
      1
     ]
    },
    {
     "in": [
      -3,
      5
     ],
     "out": [
      2
     ]
    },
    {
     "in": [
      -3,
      -5
     ],
     "out": [
      3
     ]
    },
    {
     "in": [
      3,
      -5
     ],
     "out": [
      4
     ]
    },
    {
     "in": [
      0,
      7
     ],
     "out": [
      0
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    X              Enter    Abscissa\n  E    Y              Enter    Ordenada\n  S    Q              Natural  Quadrant (0 si és sobre un eix)\nINICI_SEQÜÈNCIA\n    Llegir X, Y\n    SI (X = 0) O (Y = 0) LLAVORS\n        Q ← 0\n    ALTRAMENT\n        SI X > 0 LLAVORS\n            SI Y > 0 LLAVORS\n                Q ← 1\n            ALTRAMENT\n                Q ← 4\n            FI_SI\n        ALTRAMENT\n            SI Y > 0 LLAVORS\n                Q ← 2\n            ALTRAMENT\n                Q ← 3\n            FI_SI\n        FI_SI\n    FI_SI\n    Escriure \"Quadrant: \", Q\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-ous",
   "title": [
    "Preu dels ous",
    "Precio de los huevos"
   ],
   "q": [
    "La dotzena d'ous costa 2,40 € i l'ou solt 0,25 €. Llegiu quants ous es compren i escriviu el preu, cobrant les dotzenes senceres com a dotzena.",
    "La docena de huevos cuesta 2,40 € y el huevo suelto 0,25 €. Leed cuántos huevos se compran y escribid el precio, cobrando las docenas enteras como docena."
   ],
   "unit": "t22",
   "level": "exam",
   "kind": "cond",
   "type": "pseudo",
   "basedOn": [
    "en l'estil de S03 · La Botiga dels Ous",
    "al estilo de S03 · La Botiga dels Ous"
   ],
   "tests": [
    {
     "in": [
      30
     ],
     "out": [
      6.3
     ]
    },
    {
     "in": [
      12
     ],
     "out": [
      2.4
     ]
    },
    {
     "in": [
      5
     ],
     "out": [
      1.25
     ]
    },
    {
     "in": [
      0
     ],
     "out": [
      0
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    N              Natural  Nombre d'ous\n  S    Preu           Real     Preu total en euros\nINICI_SEQÜÈNCIA\n    Llegir N\n    Preu ← (N ‖ 12) · 2.40 + (N |R 12) · 0.25\n    Escriure \"Preu: \", Preu, \" €\"\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-parking",
   "title": [
    "Tarifa d'un pàrquing",
    "Tarifa de un parking"
   ],
   "q": [
    "La primera hora (fins a 60 min) costa 2 €; cada fracció de 30 min addicional, 1 € més; el màxim diari és de 15 €. Llegiu els minuts i escriviu el preu.",
    "La primera hora (hasta 60 min) cuesta 2 €; cada fracción de 30 min adicional, 1 € más; el máximo diario es de 15 €. Leed los minutos y escribid el precio."
   ],
   "unit": "t22",
   "level": "exam",
   "kind": "cond",
   "type": "pseudo",
   "basedOn": [
    "en l'estil de S03 · El Pàrking",
    "al estilo de S03 · El Pàrking"
   ],
   "hint": [
    "Les fraccions es compten per excés: (minuts − 60 + 29) ‖ 30.",
    "Las fracciones se cuentan por exceso: (minutos − 60 + 29) ‖ 30."
   ],
   "tests": [
    {
     "in": [
      45
     ],
     "out": [
      2
     ]
    },
    {
     "in": [
      61
     ],
     "out": [
      3
     ]
    },
    {
     "in": [
      90
     ],
     "out": [
      3
     ]
    },
    {
     "in": [
      91
     ],
     "out": [
      4
     ]
    },
    {
     "in": [
      1000
     ],
     "out": [
      15
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    Minuts         Natural  Temps d'estada\n  S    Preu           Natural  Preu en euros\nINICI_SEQÜÈNCIA\n    Llegir Minuts\n    SI Minuts ≤ 60 LLAVORS\n        Preu ← 2\n    ALTRAMENT\n        Preu ← 2 + (Minuts - 60 + 29) ‖ 30\n        SI Preu > 15 LLAVORS\n            Preu ← 15\n        FI_SI\n    FI_SI\n    Escriure \"Preu: \", Preu, \" €\"\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-eq2",
   "title": [
    "Solucions d'una equació de segon grau",
    "Soluciones de una ecuación de segundo grado"
   ],
   "q": [
    "Llegiu a, b i c (enters, a ≠ 0) i escriviu quantes solucions reals té a·x² + b·x + c = 0.",
    "Leed a, b y c (enteros, a ≠ 0) y escribid cuántas soluciones reales tiene a·x² + b·x + c = 0."
   ],
   "unit": "t22",
   "level": "exam",
   "kind": "cond",
   "type": "pseudo",
   "tests": [
    {
     "in": [
      1,
      -3,
      2
     ],
     "out": [
      2
     ]
    },
    {
     "in": [
      1,
      2,
      1
     ],
     "out": [
      1
     ]
    },
    {
     "in": [
      1,
      0,
      1
     ],
     "out": [
      0
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    A              Enter    Coeficient de x²\n  E    B              Enter    Coeficient de x\n  E    C              Enter    Terme independent\n       D              Enter    Discriminant\n  S    Sol            Natural  Nombre de solucions reals\nINICI_SEQÜÈNCIA\n    Llegir A, B, C\n    {A ≠ 0}\n    D ← B · B - 4 · A · C\n    SI D > 0 LLAVORS\n        Sol ← 2\n    ALTRAMENT\n        SI D = 0 LLAVORS\n            Sol ← 1\n        ALTRAMENT\n            Sol ← 0\n        FI_SI\n    FI_SI\n    Escriure \"Solucions reals: \", Sol\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-sumaN",
   "title": [
    "Suma dels N primers naturals",
    "Suma de los N primeros naturales"
   ],
   "q": [
    "Llegiu N i escriviu 1 + 2 + … + N (exemple de la teoria, amb DES_DE).",
    "Leed N y escribid 1 + 2 + … + N (ejemplo de la teoría, con DES_DE)."
   ],
   "unit": "t23",
   "level": "exam",
   "kind": "rec",
   "type": "pseudo",
   "tests": [
    {
     "in": [
      5
     ],
     "out": [
      15
     ]
    },
    {
     "in": [
      0
     ],
     "out": [
      0
     ]
    },
    {
     "in": [
      100
     ],
     "out": [
      5050
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    N              Natural  Quantitat de nombres\n  S    Resultat       Natural  Suma\n       i              Natural  Índex (capçal)\nINICI_SEQÜÈNCIA\n    Llegir N\n    Resultat ← 0\n    DES_DE i ← 1 FINS N Increment 1 FER\n        Resultat ← Resultat + i\n    FI_DES_DE\n    {Resultat = 1 + 2 + … + N}\n    Escriure \"Suma: \", Resultat\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-fact",
   "title": "Factorial",
   "q": [
    "Llegiu un natural N i escriviu N! (0! = 1).",
    "Leed un natural N y escribid N! (0! = 1)."
   ],
   "unit": "t23",
   "level": "exam",
   "kind": "rec",
   "type": "pseudo",
   "tests": [
    {
     "in": [
      5
     ],
     "out": [
      120
     ]
    },
    {
     "in": [
      0
     ],
     "out": [
      1
     ]
    },
    {
     "in": [
      1
     ],
     "out": [
      1
     ]
    },
    {
     "in": [
      10
     ],
     "out": [
      3628800
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    N              Natural  Nombre\n  S    F              Natural  Factorial de N\n       i              Natural  Índex\nINICI_SEQÜÈNCIA\n    Llegir N\n    F ← 1\n    DES_DE i ← 2 FINS N Increment 1 FER\n        F ← F · i\n    FI_DES_DE\n    Escriure N, \"! = \", F\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-mitjana",
   "title": [
    "Mitjana d'una seqüència amb marca",
    "Media de una secuencia con marca"
   ],
   "q": [
    "Llegiu notes (reals) fins a la marca −1 i escriviu-ne la mitjana. Si no n'hi ha cap, escriviu «No hi ha notes».",
    "Leed notas (reales) hasta la marca −1 y escribid su media. Si no hay ninguna, escribid «No hi ha notes»."
   ],
   "unit": "t23",
   "level": "exam",
   "kind": "rec",
   "type": "pseudo",
   "hint": [
    "Recorregut sobre l'entrada: Llegir abans del MENTRE i al final del cos. Compte a dividir entre zero.",
    "Recorrido sobre la entrada: Llegir antes del MENTRE y al final del cuerpo. Cuidado con dividir entre cero."
   ],
   "tests": [
    {
     "in": [
      5,
      7,
      9,
      -1
     ],
     "out": [
      7
     ]
    },
    {
     "in": [
      -1
     ],
     "out": [
      "No"
     ]
    },
    {
     "in": [
      4.5,
      6,
      -1
     ],
     "out": [
      5.25
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    Nota           Real     Element actual de la seqüència\n  S    Mitjana        Real     Mitjana de les notes\n       Suma           Real     Acumulador\n       Quantes        Natural  Comptador\nINICI_SEQÜÈNCIA\n    Llegir Nota\n    Suma ← 0\n    Quantes ← 0\n    MENTRE Nota ≠ -1 FER\n        Suma ← Suma + Nota\n        Quantes ← Quantes + 1\n        Llegir Nota\n    FI_MENTRE\n    SI Quantes > 0 LLAVORS\n        Mitjana ← Suma / Quantes\n        Escriure \"Mitjana: \", Mitjana\n    ALTRAMENT\n        Escriure \"No hi ha notes\"\n    FI_SI\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-maxseq",
   "title": [
    "Màxim d'una seqüència",
    "Máximo de una secuencia"
   ],
   "q": [
    "Llegiu naturals fins a la marca 0 i escriviu el més gran. Si la seqüència és buida, escriviu «Buida».",
    "Leed naturales hasta la marca 0 y escribid el mayor. Si la secuencia está vacía, escribid «Buida»."
   ],
   "unit": "t23",
   "level": "exam",
   "kind": "rec",
   "type": "pseudo",
   "hint": [
    "El màxim s'inicialitza amb el primer element, no amb 0.",
    "El máximo se inicializa con el primer elemento, no con 0."
   ],
   "tests": [
    {
     "in": [
      4,
      17,
      9,
      0
     ],
     "out": [
      17
     ]
    },
    {
     "in": [
      0
     ],
     "out": [
      "Buida"
     ]
    },
    {
     "in": [
      8,
      0
     ],
     "out": [
      8
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    A              Natural  Element actual\n  S    Max            Natural  Màxim de la seqüència\nINICI_SEQÜÈNCIA\n    Llegir A\n    SI A = 0 LLAVORS\n        Escriure \"Buida\"\n    ALTRAMENT\n        Max ← A\n        Llegir A\n        MENTRE A ≠ 0 FER\n            SI A > Max LLAVORS\n                Max ← A\n            FI_SI\n            Llegir A\n        FI_MENTRE\n        Escriure \"Màxim: \", Max\n    FI_SI\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-parells",
   "title": [
    "Comptar parells",
    "Contar pares"
   ],
   "q": [
    "Llegiu naturals fins a la marca 0 i escriviu quants són parells.",
    "Leed naturales hasta la marca 0 y escribid cuántos son pares."
   ],
   "unit": "t23",
   "level": "exam",
   "kind": "rec",
   "type": "pseudo",
   "tests": [
    {
     "in": [
      4,
      7,
      10,
      3,
      0
     ],
     "out": [
      2
     ]
    },
    {
     "in": [
      0
     ],
     "out": [
      0
     ]
    },
    {
     "in": [
      1,
      3,
      5,
      0
     ],
     "out": [
      0
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    A              Natural  Element actual\n  S    Parells        Natural  Comptador de parells\nINICI_SEQÜÈNCIA\n    Llegir A\n    Parells ← 0\n    MENTRE A ≠ 0 FER\n        SI A |R 2 = 0 LLAVORS\n            Parells ← Parells + 1\n        FI_SI\n        Llegir A\n    FI_MENTRE\n    Escriure \"Parells: \", Parells\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-xifres",
   "title": [
    "Nombre de xifres",
    "Número de cifras"
   ],
   "q": [
    "Llegiu un natural i escriviu quantes xifres té.",
    "Leed un natural y escribid cuántas cifras tiene."
   ],
   "unit": "t23",
   "level": "exam",
   "kind": "rec",
   "type": "pseudo",
   "tests": [
    {
     "in": [
      7
     ],
     "out": [
      1
     ]
    },
    {
     "in": [
      1234
     ],
     "out": [
      4
     ]
    },
    {
     "in": [
      1000
     ],
     "out": [
      4
     ]
    },
    {
     "in": [
      0
     ],
     "out": [
      1
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    N              Natural  Nombre\n  S    Xifres         Natural  Nombre de xifres\nINICI_SEQÜÈNCIA\n    Llegir N\n    Xifres ← 1\n    MENTRE N ≥ 10 FER\n        N ← N ‖ 10\n        Xifres ← Xifres + 1\n    FI_MENTRE\n    Escriure \"Xifres: \", Xifres\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-invertir",
   "title": [
    "Invertir les xifres",
    "Invertir las cifras"
   ],
   "q": [
    "Llegiu un natural i escriviu-lo amb les xifres al revés (1230 dona 321).",
    "Leed un natural y escribidlo con las cifras al revés (1230 da 321)."
   ],
   "unit": "t23",
   "level": "exam",
   "kind": "rec",
   "type": "pseudo",
   "tests": [
    {
     "in": [
      123
     ],
     "out": [
      321
     ]
    },
    {
     "in": [
      1230
     ],
     "out": [
      321
     ]
    },
    {
     "in": [
      5
     ],
     "out": [
      5
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    N              Natural  Nombre\n  S    Inv            Natural  Nombre invertit\nINICI_SEQÜÈNCIA\n    Llegir N\n    Inv ← 0\n    MENTRE N > 0 FER\n        Inv ← Inv · 10 + N |R 10\n        N ← N ‖ 10\n    FI_MENTRE\n    Escriure \"Invertit: \", Inv\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-taula",
   "title": [
    "Taula de multiplicar",
    "Tabla de multiplicar"
   ],
   "q": [
    "Llegiu N i escriviu la seva taula de multiplicar de l'1 al 10, una línia per producte.",
    "Leed N y escribid su tabla de multiplicar del 1 al 10, una línea por producto."
   ],
   "unit": "t23",
   "level": "exam",
   "kind": "rec",
   "type": "pseudo",
   "tests": [
    {
     "in": [
      7
     ],
     "out": [
      7,
      14,
      21,
      28,
      35,
      42,
      49,
      56,
      63,
      70
     ]
    },
    {
     "in": [
      1
     ],
     "out": [
      1,
      2,
      3,
      10
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    N              Natural  Nombre de la taula\n       i              Natural  Multiplicador\nINICI_SEQÜÈNCIA\n    Llegir N\n    DES_DE i ← 1 FINS 10 Increment 1 FER\n        Escriure N, \" · \", i, \" = \", N · i\n    FI_DES_DE\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-rock",
   "title": [
    "Edats al concert",
    "Edades en el concierto"
   ],
   "q": [
    "Llegiu les edats dels assistents fins a la marca 0. Escriviu quants són menors d'edat (< 18) i l'edat més gran.",
    "Leed las edades de los asistentes hasta la marca 0. Escribid cuántos son menores de edad (< 18) y la edad mayor."
   ],
   "unit": "t23",
   "level": "exam",
   "kind": "rec",
   "type": "pseudo",
   "basedOn": [
    "en l'estil de S04 · El Concert de Rock",
    "al estilo de S04 · El Concert de Rock"
   ],
   "tests": [
    {
     "in": [
      25,
      16,
      40,
      17,
      0
     ],
     "out": [
      2,
      40
     ]
    },
    {
     "in": [
      18,
      0
     ],
     "out": [
      0,
      18
     ]
    },
    {
     "in": [
      12,
      0
     ],
     "out": [
      1,
      12
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    Edat           Natural  Edat actual\n  S    Menors         Natural  Comptador de menors\n  S    Gran           Natural  Edat màxima\nINICI_SEQÜÈNCIA\n    Llegir Edat\n    {la seqüència té almenys una edat}\n    Menors ← 0\n    Gran ← Edat\n    MENTRE Edat ≠ 0 FER\n        SI Edat < 18 LLAVORS\n            Menors ← Menors + 1\n        FI_SI\n        SI Edat > Gran LLAVORS\n            Gran ← Edat\n        FI_SI\n        Llegir Edat\n    FI_MENTRE\n    Escriure \"Menors: \", Menors, \" Edat màxima: \", Gran\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-run",
   "title": [
    "Temps d'una cursa",
    "Tiempos de una carrera"
   ],
   "q": [
    "Llegiu els temps en minuts dels corredors fins a la marca −1. Escriviu el millor temps i quants han baixat de 60 minuts.",
    "Leed los tiempos en minutos de los corredores hasta la marca −1. Escribid el mejor tiempo y cuántos han bajado de 60 minutos."
   ],
   "unit": "t23",
   "level": "exam",
   "kind": "rec",
   "type": "pseudo",
   "basedOn": [
    "en l'estil d'AndorraRun",
    "al estilo de AndorraRun"
   ],
   "tests": [
    {
     "in": [
      72,
      58,
      65,
      49,
      -1
     ],
     "out": [
      49,
      2
     ]
    },
    {
     "in": [
      61,
      -1
     ],
     "out": [
      61,
      0
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    T              Enter    Temps actual\n  S    Millor         Enter    Temps mínim\n  S    Rapids         Natural  Corredors per sota de 60 min\nINICI_SEQÜÈNCIA\n    Llegir T\n    {hi ha almenys un corredor}\n    Millor ← T\n    Rapids ← 0\n    MENTRE T ≠ -1 FER\n        SI T < Millor LLAVORS\n            Millor ← T\n        FI_SI\n        SI T < 60 LLAVORS\n            Rapids ← Rapids + 1\n        FI_SI\n        Llegir T\n    FI_MENTRE\n    Escriure \"Millor: \", Millor, \" Per sota de 60: \", Rapids\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-acaba3",
   "title": [
    "Primer nombre acabat en 3",
    "Primer número acabado en 3"
   ],
   "q": [
    "Llegiu dos naturals N1 ≤ N2 i escriviu el primer nombre entre N1 i N2 que acaba en 3, o −1 si no n'hi ha (exemple de la teoria).",
    "Leed dos naturales N1 ≤ N2 y escribid el primer número entre N1 y N2 que acaba en 3, o −1 si no hay (ejemplo de la teoría)."
   ],
   "unit": "t23",
   "level": "hard",
   "kind": "cerca",
   "type": "pseudo",
   "tests": [
    {
     "in": [
      5,
      20
     ],
     "out": [
      13
     ]
    },
    {
     "in": [
      14,
      22
     ],
     "out": [
      -1
     ]
    },
    {
     "in": [
      3,
      3
     ],
     "out": [
      3
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    N1             Natural  Inici de l'interval\n  E    N2             Natural  Final de l'interval\n  S    Resultat       Enter    Nombre trobat o -1\n       i              Natural  Capçal\n       Trobat         Lògic    Cert si s'ha trobat\nINICI_SEQÜÈNCIA\n    Llegir N1, N2\n    i ← N1\n    Trobat ← fals\n    MENTRE (i ≤ N2) I (NO Trobat) FER\n        SI i |R 10 = 3 LLAVORS\n            Trobat ← cert\n        ALTRAMENT\n            i ← i + 1\n        FI_SI\n    FI_MENTRE\n    SI Trobat LLAVORS\n        Resultat ← i\n    ALTRAMENT\n        Resultat ← -1\n    FI_SI\n    Escriure Resultat\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-primer",
   "title": [
    "És primer?",
    "¿Es primo?"
   ],
   "q": [
    "Llegiu un natural N i escriviu «Sí» si és primer i «No» si no ho és. Feu-ho com una cerca d'un divisor.",
    "Leed un natural N y escribid «Sí» si es primo y «No» si no lo es. Hacedlo como una búsqueda de un divisor."
   ],
   "unit": "t23",
   "level": "hard",
   "kind": "cerca",
   "type": "pseudo",
   "basedOn": [
    "en l'estil d'Els primers",
    "al estilo de Els primers"
   ],
   "hint": [
    "És una cerca: es busca un divisor entre 2 i N − 1; si no se'n troba cap, és primer.",
    "Es una búsqueda: se busca un divisor entre 2 y N − 1; si no se encuentra ninguno, es primo."
   ],
   "tests": [
    {
     "in": [
      2
     ],
     "out": [
      "si"
     ]
    },
    {
     "in": [
      9
     ],
     "out": [
      "no"
     ]
    },
    {
     "in": [
      13
     ],
     "out": [
      "si"
     ]
    },
    {
     "in": [
      1
     ],
     "out": [
      "no"
     ]
    },
    {
     "in": [
      97
     ],
     "out": [
      "si"
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    N              Natural  Nombre a comprovar\n       D              Natural  Possible divisor (capçal)\n       Trobat         Lògic    Cert si hi ha un divisor\nINICI_SEQÜÈNCIA\n    Llegir N\n    D ← 2\n    Trobat ← fals\n    MENTRE (D < N) I (NO Trobat) FER\n        SI N |R D = 0 LLAVORS\n            Trobat ← cert\n        ALTRAMENT\n            D ← D + 1\n        FI_SI\n    FI_MENTRE\n    SI (N > 1) I (NO Trobat) LLAVORS\n        Escriure \"Sí\"\n    ALTRAMENT\n        Escriure \"No\"\n    FI_SI\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-negatiu",
   "title": [
    "Primer negatiu d'una seqüència",
    "Primer negativo de una secuencia"
   ],
   "q": [
    "Llegiu enters fins a la marca 0 i escriviu la posició (1, 2, …) del primer negatiu, o −1 si no n'hi ha. No cal llegir la resta de la seqüència un cop trobat.",
    "Leed enteros hasta la marca 0 y escribid la posición (1, 2, …) del primer negativo, o −1 si no hay. No hace falta leer el resto de la secuencia una vez encontrado."
   ],
   "unit": "t23",
   "level": "hard",
   "kind": "cerca",
   "type": "pseudo",
   "tests": [
    {
     "in": [
      4,
      7,
      -2,
      5,
      -8,
      0
     ],
     "out": [
      3
     ]
    },
    {
     "in": [
      1,
      2,
      0
     ],
     "out": [
      -1
     ]
    },
    {
     "in": [
      -5,
      0
     ],
     "out": [
      1
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    A              Enter    Element actual\n  S    Pos            Enter    Posició del primer negatiu o -1\n       Trobat         Lògic    Cert si s'ha trobat\nINICI_SEQÜÈNCIA\n    Llegir A\n    Pos ← 1\n    Trobat ← fals\n    MENTRE (A ≠ 0) I (NO Trobat) FER\n        SI A < 0 LLAVORS\n            Trobat ← cert\n        ALTRAMENT\n            Llegir A\n            Pos ← Pos + 1\n        FI_SI\n    FI_MENTRE\n    SI NO Trobat LLAVORS\n        Pos ← -1\n    FI_SI\n    Escriure \"Posició: \", Pos\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-multiple",
   "title": [
    "Primer múltiple en un interval",
    "Primer múltiplo en un intervalo"
   ],
   "q": [
    "Llegiu K, N1 i N2 i escriviu el primer múltiple de K entre N1 i N2, o −1 si no n'hi ha.",
    "Leed K, N1 y N2 y escribid el primer múltiplo de K entre N1 y N2, o −1 si no hay."
   ],
   "unit": "t23",
   "level": "hard",
   "kind": "cerca",
   "type": "pseudo",
   "tests": [
    {
     "in": [
      7,
      20,
      30
     ],
     "out": [
      21
     ]
    },
    {
     "in": [
      7,
      22,
      27
     ],
     "out": [
      -1
     ]
    },
    {
     "in": [
      5,
      10,
      12
     ],
     "out": [
      10
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    K              Natural  Divisor\n  E    N1             Natural  Inici\n  E    N2             Natural  Final\n  S    Res            Enter    Múltiple trobat o -1\n       i              Natural  Capçal\n       Trobat         Lògic    Cert si s'ha trobat\nINICI_SEQÜÈNCIA\n    Llegir K, N1, N2\n    {K > 0}\n    i ← N1\n    Trobat ← fals\n    MENTRE (i ≤ N2) I (NO Trobat) FER\n        SI i |R K = 0 LLAVORS\n            Trobat ← cert\n        ALTRAMENT\n            i ← i + 1\n        FI_SI\n    FI_MENTRE\n    SI Trobat LLAVORS\n        Res ← i\n    ALTRAMENT\n        Res ← -1\n    FI_SI\n    Escriure Res\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "ps-endevina",
   "title": [
    "Endevina el nombre",
    "Adivina el número"
   ],
   "q": [
    "Llegiu el nombre secret S i després intents fins que algun coincideixi. Escriviu quants intents s'han necessitat. Feu-ho amb REPETEIX … FINS_QUE.",
    "Leed el número secreto S y después intentos hasta que alguno coincida. Escribid cuántos intentos han hecho falta. Hacedlo con REPETEIX … FINS_QUE."
   ],
   "unit": "t23",
   "level": "exam",
   "kind": "rec",
   "type": "pseudo",
   "basedOn": [
    "en l'estil de S04 · Endevina el Nombre",
    "al estilo de S04 · Endevina el Nombre"
   ],
   "hint": [
    "Com a mínim es fa un intent: és el cas típic de REPETEIX.",
    "Como mínimo se hace un intento: es el caso típico de REPETEIX."
   ],
   "tests": [
    {
     "in": [
      42,
      50,
      30,
      42
     ],
     "out": [
      3
     ]
    },
    {
     "in": [
      7,
      7
     ],
     "out": [
      1
     ]
    }
   ],
   "sol": [
    {
     "t": "code",
     "lang": "ps",
     "src": "ENTORN\n  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ\n  E    S              Natural  Nombre secret\n  E    X              Natural  Intent actual\n  S    Intents        Natural  Comptador d'intents\nINICI_SEQÜÈNCIA\n    Llegir S\n    Intents ← 0\n    REPETEIX\n        Llegir X\n        Intents ← Intents + 1\n    FINS_QUE X = S\n    Escriure \"Intents: \", Intents\nFI_SEQÜÈNCIA",
     "props": {
      "nonum": true
     }
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-model-eco",
   "qb": [
    {
     "t": "p",
     "x": "Llegeix un enter de l'entrada i imprimeix el mateix enter seguit d'un salt de línia."
    }
   ],
   "unit": "s2",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "seqüencial"
   ],
   "examples": [
    {
     "in": "7\n",
     "out": "7\n",
     "fixed": true,
     "name": "Ex1"
    }
   ],
   "tests": [
    {
     "in": "0\n",
     "out": "0\n"
    },
    {
     "in": "-5\n",
     "out": "-5\n"
    },
    {
     "in": "42\n",
     "out": "42\n"
    },
    {
     "in": "123456\n",
     "out": "123456\n"
    },
    {
     "in": "2147483647\n",
     "out": "2147483647\n"
    },
    {
     "in": "-2147483648\n",
     "out": "-2147483648\n"
    }
   ],
   "hint": "Llegeix amb cin dins una variable int i escriu-la amb cout seguida de endl.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    cout << n << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-model-suma2",
   "qb": [
    {
     "t": "p",
     "x": "Llegeix dos enters (separats per espai o salt de línia) i imprimeix la seva suma."
    }
   ],
   "unit": "s2",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "seqüencial"
   ],
   "examples": [
    {
     "in": "3 4\n",
     "out": "7\n",
     "fixed": true,
     "name": "Ex1"
    }
   ],
   "tests": [
    {
     "in": "0 0\n",
     "out": "0\n"
    },
    {
     "in": "-3 5\n",
     "out": "2\n"
    },
    {
     "in": "10\n20\n",
     "out": "30\n"
    },
    {
     "in": "-7 -8\n",
     "out": "-15\n"
    },
    {
     "in": "1000000 2000000\n",
     "out": "3000000\n"
    },
    {
     "in": "5 -5\n",
     "out": "0\n"
    }
   ],
   "hint": "cin >> a >> b llegeix igual si els nombres van separats per espai o per salt de línia.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << a + b << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-model-mitjana3",
   "qb": [
    {
     "t": "p",
     "x": "Llegeix tres enters i imprimeix la mitjana amb exactament una xifra decimal."
    }
   ],
   "unit": "s2",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "seqüencial",
    "format"
   ],
   "examples": [
    {
     "in": "3 3 3\n",
     "out": "3.0\n",
     "fixed": true,
     "name": "Ex1"
    }
   ],
   "tests": [
    {
     "in": "1 2 3\n",
     "out": "2.0\n"
    },
    {
     "in": "1 2 2\n",
     "out": "1.7\n"
    },
    {
     "in": "0 0 1\n",
     "out": "0.3\n"
    },
    {
     "in": "-1 -2 -2\n",
     "out": "-1.7\n"
    },
    {
     "in": "10 20 25\n",
     "out": "18.3\n"
    },
    {
     "in": "100 0 0\n",
     "out": "33.3\n"
    },
    {
     "in": "7 8 8\n",
     "out": "7.7\n"
    }
   ],
   "hint": "Divideix per 3.0 (no per 3) per evitar la divisió entera, i escriu amb fixed << setprecision(1).",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    double mitjana = (a + b + c) / 3.0;\n    cout << fixed << setprecision(1) << mitjana << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-model-producte2",
   "qb": [
    {
     "t": "p",
     "x": "Llegeix dos enters i imprimeix el seu producte."
    }
   ],
   "unit": "s2",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "seqüencial"
   ],
   "examples": [
    {
     "in": "4 5\n",
     "out": "20\n",
     "fixed": true,
     "name": "Ex1"
    }
   ],
   "tests": [
    {
     "in": "0 7\n",
     "out": "0\n"
    },
    {
     "in": "-3 4\n",
     "out": "-12\n"
    },
    {
     "in": "-6 -7\n",
     "out": "42\n"
    },
    {
     "in": "1000 1000\n",
     "out": "1000000\n"
    },
    {
     "in": "1 -1\n",
     "out": "-1\n"
    },
    {
     "in": "12345 2\n",
     "out": "24690\n"
    }
   ],
   "hint": "Igual que la suma, però amb l'operador *.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << a * b << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-model-quatre-linies",
   "qb": [
    {
     "t": "p",
     "x": "Llegeix quatre enters en una sola línia i imprimeix-los cadascun en una línia diferent."
    }
   ],
   "unit": "s2",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "seqüencial",
    "format"
   ],
   "examples": [
    {
     "in": "1 2 3 4\n",
     "out": "1\n2\n3\n4\n",
     "fixed": true,
     "name": "Ex1"
    }
   ],
   "tests": [
    {
     "in": "0 0 0 0\n",
     "out": "0\n0\n0\n0\n"
    },
    {
     "in": "-1 -2 -3 -4\n",
     "out": "-1\n-2\n-3\n-4\n"
    },
    {
     "in": "10 200 3000 40000\n",
     "out": "10\n200\n3000\n40000\n"
    },
    {
     "in": "4 3 2 1\n",
     "out": "4\n3\n2\n1\n"
    },
    {
     "in": "7 -7 7 -7\n",
     "out": "7\n-7\n7\n-7\n"
    },
    {
     "in": "123 0 -45 6\n",
     "out": "123\n0\n-45\n6\n"
    }
   ],
   "hint": "Quatre variables, un sol cin, i un endl després de cada valor.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b, c, d;\n    cin >> a >> b >> c >> d;\n    cout << a << endl;\n    cout << b << endl;\n    cout << c << endl;\n    cout << d << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-model-suma-producte4",
   "qb": [
    {
     "t": "p",
     "x": "Llegeix quatre enters (separats per espai o salts de línia) i imprimeix dues línies exactes:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Suma: X\nProducte: Y",
     "props": {
      "nonum": true
     }
    }
   ],
   "unit": "s2",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "seqüencial",
    "format"
   ],
   "examples": [
    {
     "in": "1 2 3 4\n",
     "out": "Suma: 10\nProducte: 24\n",
     "fixed": true,
     "name": "Ex1"
    }
   ],
   "tests": [
    {
     "in": "0 0 0 0\n",
     "out": "Suma: 0\nProducte: 0\n"
    },
    {
     "in": "5\n5\n5\n5\n",
     "out": "Suma: 20\nProducte: 625\n"
    },
    {
     "in": "-1 2 -3 4\n",
     "out": "Suma: 2\nProducte: 24\n"
    },
    {
     "in": "10 0 7 3\n",
     "out": "Suma: 20\nProducte: 0\n"
    },
    {
     "in": "-2 -2 -2 -2\n",
     "out": "Suma: -8\nProducte: 16\n"
    },
    {
     "in": "12 10 8 6\n",
     "out": "Suma: 36\nProducte: 5760\n"
    }
   ],
   "hint": "Fixa't en l'espai després dels dos punts i en les majúscules: «Suma: » i «Producte: ».",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b, c, d;\n    cin >> a >> b >> c >> d;\n    cout << \"Suma: \" << a + b + c + d << endl;\n    cout << \"Producte: \" << a * b * c * d << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-model-pilotes",
   "title": "LA FÀBRICA DE PILOTES",
   "qb": [
    {
     "t": "p",
     "x": "Una fàbrica de pilotes de tennis fa l'embalatge d'acord amb les comandes dels clients utilitzant els següents tipus d'embalatges: tipus G amb capacitat de 200 pilotes, tipus M amb capacitat de 50 pilotes, tipus P amb capacitat de 10 pilotes."
    },
    {
     "t": "p",
     "x": "Les quantitats encarregades per cada client són sempre múltiples de 10."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que entrant el nombre de pilotes que demana el client, ens digui quin nombre de cada tipus d'embalatge utilitzarem, de forma que el nombre total de caixes sigui mínim."
    },
    {
     "t": "p",
     "x": "**Entrada:** un enter QNT (nombre de pilotes, múltiple de 10, QNT ≥ 0)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 3 línies, sense cap altre text):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Caixes Grans: G\nCaixes Mitjanes:M\nCaixes Petites:P",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Calcula-ho amb divisions i mòduls successius (primer les caixes grans, després les mitjanes amb el que quedi, i finalment les petites), exactament com a l'algorisme proposat a classe. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s2",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "seqüencial"
   ],
   "examples": [
    {
     "in": "470\n",
     "out": "Caixes Grans: 2\nCaixes Mitjanes:1\nCaixes Petites:2\n",
     "fixed": true
    },
    {
     "in": "1000\n",
     "out": "Caixes Grans: 5\nCaixes Mitjanes:0\nCaixes Petites:0\n",
     "fixed": true
    }
   ],
   "tests": [
    {
     "in": "0\n",
     "out": "Caixes Grans: 0\nCaixes Mitjanes:0\nCaixes Petites:0\n"
    },
    {
     "in": "10\n",
     "out": "Caixes Grans: 0\nCaixes Mitjanes:0\nCaixes Petites:1\n"
    },
    {
     "in": "50\n",
     "out": "Caixes Grans: 0\nCaixes Mitjanes:1\nCaixes Petites:0\n"
    },
    {
     "in": "60\n",
     "out": "Caixes Grans: 0\nCaixes Mitjanes:1\nCaixes Petites:1\n"
    },
    {
     "in": "190\n",
     "out": "Caixes Grans: 0\nCaixes Mitjanes:3\nCaixes Petites:4\n"
    },
    {
     "in": "200\n",
     "out": "Caixes Grans: 1\nCaixes Mitjanes:0\nCaixes Petites:0\n"
    },
    {
     "in": "250\n",
     "out": "Caixes Grans: 1\nCaixes Mitjanes:1\nCaixes Petites:0\n"
    },
    {
     "in": "9990\n",
     "out": "Caixes Grans: 49\nCaixes Mitjanes:3\nCaixes Petites:4\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ]
   },
   "hint": "G = QNT / 200; el que queda és QNT % 200, i amb això M = resta / 50; les petites són el que queda dividit per 10. Compte: després de «Mitjanes:» i «Petites:» no hi ha espai.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int QNT, G, M, P, resta;\n    cin >> QNT;\n    G = QNT / 200;\n    resta = QNT % 200;\n    M = resta / 50;\n    resta = resta % 50;\n    P = resta / 10;\n    cout << \"Caixes Grans: \" << G << endl;\n    cout << \"Caixes Mitjanes:\" << M << endl;\n    cout << \"Caixes Petites:\" << P << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-model-parking",
   "title": "EL PÀRKING",
   "qb": [
    {
     "t": "p",
     "x": "Dissenyeu l'algorisme que permeti calcular l'import a pagar en un pàrking que funciona de les 8 del matí a les 10 de la nit tenint en compte que es cobra a 0,80 € l'hora o fracció."
    },
    {
     "t": "p",
     "x": "**Entrada:** quatre enters: HE, ME (hora i minut d'entrada), HS, MS (hora i minut de sortida)."
    },
    {
     "t": "p",
     "x": "**Sortida** (una única línia):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "L'import total es X.XX",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Calcula els minuts totals d'entrada i de sortida, la diferència, i les fraccions d'hora completes; si sobren minuts (encara que sigui 1), compta una hora sencera més. Multiplica pel preu (0,80 €), tal com a l'algorisme proposat a classe. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s3",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "seqüencial",
    "condicional",
    "format"
   ],
   "examples": [
    {
     "in": "8 0 9 30\n",
     "out": "L'import total es 1.60\n",
     "fixed": true
    },
    {
     "in": "10 15 10 15\n",
     "out": "L'import total es 0.00\n",
     "fixed": true
    }
   ],
   "tests": [
    {
     "in": "8 0 8 1\n",
     "out": "L'import total es 0.80\n"
    },
    {
     "in": "8 0 22 0\n",
     "out": "L'import total es 11.20\n"
    },
    {
     "in": "9 10 10 10\n",
     "out": "L'import total es 0.80\n"
    },
    {
     "in": "9 10 10 11\n",
     "out": "L'import total es 1.60\n"
    },
    {
     "in": "21 59 22 0\n",
     "out": "L'import total es 0.80\n"
    },
    {
     "in": "8 30 20 29\n",
     "out": "L'import total es 9.60\n"
    },
    {
     "in": "12 45 14 15\n",
     "out": "L'import total es 1.60\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ]
   },
   "hint": "Passa-ho tot a minuts (hora * 60 + minut). Hores = diferència / 60, i si diferència % 60 no és 0, suma'n una. Escriu amb fixed << setprecision(2).",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int HE, ME, HS, MS;\n    cin >> HE >> ME >> HS >> MS;\n    int minEntrada = HE * 60 + ME;\n    int minSortida = HS * 60 + MS;\n    int dif = minSortida - minEntrada;\n    int hores = dif / 60;\n    if (dif % 60 != 0) {\n        hores = hores + 1;\n    }\n    double import = hores * 0.80;\n    cout << fixed << setprecision(2) << \"L'import total es \" << import << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-model-quadrant",
   "title": "QUADRANT",
   "qb": [
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que donada una coordenada (x,y) ens digui en quin o quins quadrants pertany."
    },
    {
     "t": "p",
     "x": "**Entrada:** dos enters x, y."
    },
    {
     "t": "p",
     "x": "**Sortida** (una única línia): els números dels quadrants (1, 2, 3 o 4) als quals pertany el punt, separats per un espai i en ordre creixent (sense espai al final). Un punt sobre un eix pertany als dos quadrants que toca; l'origen (0,0) pertany als quatre."
    },
    {
     "t": "p",
     "x": "Recorda la numeració habitual: Quadrant 1 (x>0, y>0), Quadrant 2 (x<0, y>0), Quadrant 3 (x<0, y<0), Quadrant 4 (x>0, y<0)."
    },
    {
     "t": "p",
     "x": "No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s3",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "condicional",
    "format"
   ],
   "examples": [
    {
     "in": "3 4\n",
     "out": "1\n",
     "fixed": true
    },
    {
     "in": "-2 -5\n",
     "out": "3\n",
     "fixed": true
    }
   ],
   "tests": [
    {
     "in": "0 5\n",
     "out": "1 2\n"
    },
    {
     "in": "-4 0\n",
     "out": "2 3\n"
    },
    {
     "in": "0 0\n",
     "out": "1 2 3 4\n"
    },
    {
     "in": "7 -1\n",
     "out": "4\n"
    },
    {
     "in": "-1 1\n",
     "out": "2\n"
    },
    {
     "in": "3 0\n",
     "out": "1 4\n"
    },
    {
     "in": "0 -2\n",
     "out": "3 4\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ]
   },
   "hint": "Fes quatre if independents (no else if), un per quadrant, amb ≥ i ≤ perquè els eixos comptin. Per no deixar espai al final, escriu l'espai abans de cada número excepte el primer.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x, y;\n    cin >> x >> y;\n    bool primer = true;\n    if (x >= 0 && y >= 0) {\n        cout << 1;\n        primer = false;\n    }\n    if (x <= 0 && y >= 0) {\n        if (!primer) cout << \" \";\n        cout << 2;\n        primer = false;\n    }\n    if (x <= 0 && y <= 0) {\n        if (!primer) cout << \" \";\n        cout << 3;\n        primer = false;\n    }\n    if (x >= 0 && y <= 0) {\n        if (!primer) cout << \" \";\n        cout << 4;\n    }\n    cout << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-model-ous",
   "title": "LA BOTIGA DELS OUS",
   "qb": [
    {
     "t": "p",
     "x": "En una botiga de queviures es venen ous en capses de 12, i també en venen d'escadussers. N'hi ha de tres qualitats: \"A\" a 3 € la dotzena, \"B\" a 2,5 € i \"C\" a 2 €. Els escadussers cal pagar-los a 0,30, 0,25, 0,20 € la unitat respectivament."
    },
    {
     "t": "p",
     "x": "Dissenyeu l'algorisme d'automatització de la venda d'ous, de tal manera que entrant la quantitat d'ous i el tipus ens digui quantes capses (dotzenes) i quants ous escadussers cal lliurar al client, així com l'import de la compra."
    },
    {
     "t": "p",
     "x": "**Entrada:** un enter NO (nombre d'ous, NO ≥ 0) i un caràcter TPO ('A', 'B' o 'C')."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 3 línies):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Dotzenes: ND\nEscadussers: NE\nIMPORT: X.XX",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "on ND és el nombre de dotzenes senceres, NE el nombre d'ous escadussers (0-11), i l'import amb 2 decimals."
    },
    {
     "t": "p",
     "x": "Fes-ho amb switch per triar el preu segons el tipus, tal com es fa a l'algorisme proposat a classe. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s3",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "switch",
    "format"
   ],
   "examples": [
    {
     "in": "25 A\n",
     "out": "Dotzenes: 2\nEscadussers: 1\nIMPORT: 6.30\n",
     "fixed": true
    },
    {
     "in": "12 B\n",
     "out": "Dotzenes: 1\nEscadussers: 0\nIMPORT: 2.50\n",
     "fixed": true
    }
   ],
   "tests": [
    {
     "in": "0 C\n",
     "out": "Dotzenes: 0\nEscadussers: 0\nIMPORT: 0.00\n"
    },
    {
     "in": "11 A\n",
     "out": "Dotzenes: 0\nEscadussers: 11\nIMPORT: 3.30\n"
    },
    {
     "in": "13 C\n",
     "out": "Dotzenes: 1\nEscadussers: 1\nIMPORT: 2.20\n"
    },
    {
     "in": "24 B\n",
     "out": "Dotzenes: 2\nEscadussers: 0\nIMPORT: 5.00\n"
    },
    {
     "in": "100 A\n",
     "out": "Dotzenes: 8\nEscadussers: 4\nIMPORT: 25.20\n"
    },
    {
     "in": "7 B\n",
     "out": "Dotzenes: 0\nEscadussers: 7\nIMPORT: 1.75\n"
    },
    {
     "in": "37 C\n",
     "out": "Dotzenes: 3\nEscadussers: 1\nIMPORT: 6.20\n"
    }
   ],
   "rules": {
    "use": [
     "switch"
    ],
    "avoid": [
     "loops"
    ]
   },
   "hint": "ND = NO / 12 i NE = NO % 12. El switch sobre el char TPO (case 'A': ... break;) dona el preu de la dotzena i el de la unitat.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int NO;\n    char TPO;\n    cin >> NO >> TPO;\n    int ND = NO / 12;\n    int NE = NO % 12;\n    double preuDotzena = 0, preuUnitat = 0;\n    switch (TPO) {\n        case 'A':\n            preuDotzena = 3;\n            preuUnitat = 0.30;\n            break;\n        case 'B':\n            preuDotzena = 2.5;\n            preuUnitat = 0.25;\n            break;\n        case 'C':\n            preuDotzena = 2;\n            preuUnitat = 0.20;\n            break;\n    }\n    double import = ND * preuDotzena + NE * preuUnitat;\n    cout << \"Dotzenes: \" << ND << endl;\n    cout << \"Escadussers: \" << NE << endl;\n    cout << fixed << setprecision(2) << \"IMPORT: \" << import << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-model-ordena3",
   "qb": [
    {
     "t": "p",
     "x": "Llegeix tres enters i imprimeix-los en ordre ascendent (separats per espais) sense usar bucles."
    }
   ],
   "unit": "s3",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "condicional"
   ],
   "examples": [
    {
     "in": "3 1 2\n",
     "out": "1 2 3\n",
     "fixed": true,
     "name": "Exemple"
    }
   ],
   "tests": [
    {
     "in": "1 2 3\n",
     "out": "1 2 3\n"
    },
    {
     "in": "3 2 1\n",
     "out": "1 2 3\n"
    },
    {
     "in": "2 2 1\n",
     "out": "1 2 2\n"
    },
    {
     "in": "5 5 5\n",
     "out": "5 5 5\n"
    },
    {
     "in": "-1 -5 0\n",
     "out": "-5 -1 0\n"
    },
    {
     "in": "10 -10 0\n",
     "out": "-10 0 10\n"
    },
    {
     "in": "7 3 7\n",
     "out": "3 7 7\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ]
   },
   "hint": "Amb tres comparacions i intercanvis (a amb b, b amb c, i de nou a amb b) queden ordenats; fes l'intercanvi amb una variable auxiliar.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b, c, aux;\n    cin >> a >> b >> c;\n    if (a > b) {\n        aux = a;\n        a = b;\n        b = aux;\n    }\n    if (b > c) {\n        aux = b;\n        b = c;\n        c = aux;\n    }\n    if (a > b) {\n        aux = a;\n        a = b;\n        b = aux;\n    }\n    cout << a << \" \" << b << \" \" << c << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-model-rock",
   "title": "EL CONCERT DE ROCK",
   "qb": [
    {
     "t": "p",
     "x": "A l'entrada del recinte d'un festival de rock es deixa un ordinador engegat per a què cada persona que ho desitgi entri la seva edat (no sabem \"a priori\" quantes persones utilitzaran l'ordinador)."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que en finalitzar el festival ens digui:"
    },
    {
     "t": "list",
     "items": [
      "La mitjana d'edat dels qui han utilitzat l'ordinador.",
      "Quants tenen una edat superior o igual a 50 anys.",
      "L'edat del més gran, així com, el nombre de persones que tenen aquesta edat."
     ]
    },
    {
     "t": "p",
     "x": "El procés finalitza en entrar l'edat 0 (aquesta darrera edat 0 no s'ha de comptar)."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència d'enters EDAT, acabada amb el valor 0 (no sabem per endavant quantes persones hi haurà, però com a mínim n'hi ha una)."
    },
    {
     "t": "p",
     "x": "**Sortida** (quatre línies, en aquest ordre):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "La mitjana d'edat es X.XX\nPersones mes grans o iguals a 50 anys N\nL'edat del mes gran es N\nL'han tingut N persones",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "(amb 2 decimals a la mitjana)"
    },
    {
     "t": "p",
     "x": "Fes-ho amb un while, exactament amb l'esquema de l'algorisme de disseny descendent proposat a classe (acumulador de la suma, comptador de persones, comptador de majors de 50, i actualització de l'edat màxima i del seu comptador dins del mateix bucle). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "while",
    "sentinella",
    "format"
   ],
   "examples": [
    {
     "in": "30 45 60 45 60 0\n",
     "out": "La mitjana d'edat es 48.00\nPersones mes grans o iguals a 50 anys 2\nL'edat del mes gran es 60\nL'han tingut 2 persones\n",
     "fixed": true
    },
    {
     "in": "25 0\n",
     "out": "La mitjana d'edat es 25.00\nPersones mes grans o iguals a 50 anys 0\nL'edat del mes gran es 25\nL'han tingut 1 persones\n",
     "fixed": true
    }
   ],
   "tests": [
    {
     "in": "50 0\n",
     "out": "La mitjana d'edat es 50.00\nPersones mes grans o iguals a 50 anys 1\nL'edat del mes gran es 50\nL'han tingut 1 persones\n"
    },
    {
     "in": "20 30 40 0\n",
     "out": "La mitjana d'edat es 30.00\nPersones mes grans o iguals a 50 anys 0\nL'edat del mes gran es 40\nL'han tingut 1 persones\n"
    },
    {
     "in": "70 70 70 0\n",
     "out": "La mitjana d'edat es 70.00\nPersones mes grans o iguals a 50 anys 3\nL'edat del mes gran es 70\nL'han tingut 3 persones\n"
    },
    {
     "in": "18 90 45 90 30 89 0\n",
     "out": "La mitjana d'edat es 60.33\nPersones mes grans o iguals a 50 anys 3\nL'edat del mes gran es 90\nL'han tingut 2 persones\n"
    },
    {
     "in": "51 49 50 0\n",
     "out": "La mitjana d'edat es 50.00\nPersones mes grans o iguals a 50 anys 2\nL'edat del mes gran es 51\nL'han tingut 1 persones\n"
    },
    {
     "in": "33 21 33 12 33 0\n",
     "out": "La mitjana d'edat es 26.40\nPersones mes grans o iguals a 50 anys 0\nL'edat del mes gran es 33\nL'han tingut 3 persones\n"
    },
    {
     "in": "100 1 0\n",
     "out": "La mitjana d'edat es 50.50\nPersones mes grans o iguals a 50 anys 1\nL'edat del mes gran es 100\nL'han tingut 1 persones\n"
    },
    {
     "in": "17\n18\n19\n0\n",
     "out": "La mitjana d'edat es 18.00\nPersones mes grans o iguals a 50 anys 0\nL'edat del mes gran es 19\nL'han tingut 1 persones\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Lectura avançada: llegeix una edat abans del while i una altra al final del bucle. Si l'edat supera el màxim, el màxim canvia i el comptador torna a 1; si l'iguala, el comptador augmenta.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int EDAT, suma = 0, persones = 0, majors50 = 0, maxim = 0, quantsMaxim = 0;\n    cin >> EDAT;\n    while (EDAT != 0) {\n        suma = suma + EDAT;\n        persones++;\n        if (EDAT >= 50) {\n            majors50++;\n        }\n        if (EDAT > maxim) {\n            maxim = EDAT;\n            quantsMaxim = 1;\n        } else if (EDAT == maxim) {\n            quantsMaxim++;\n        }\n        cin >> EDAT;\n    }\n    double mitjana = (double) suma / persones;\n    cout << fixed << setprecision(2) << \"La mitjana d'edat es \" << mitjana << endl;\n    cout << \"Persones mes grans o iguals a 50 anys \" << majors50 << endl;\n    cout << \"L'edat del mes gran es \" << maxim << endl;\n    cout << \"L'han tingut \" << quantsMaxim << \" persones\" << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-model-andorrarun-c",
   "title": "ANDORRARUN — APARTAT (c)",
   "qb": [
    {
     "t": "p",
     "x": "Disposeu de dues seqüències de nombres naturals. La primera seqüència representa els números de dorsals (naturals de 4 xifres) dels participants en la marató AndorraRun, i la segona seqüència representa els dorsals dels participants en l'ordre en què han abandonat la marató."
    },
    {
     "t": "p",
     "x": "Es sap que els dorsals estan codificats per categories en funció de l'edat del participant:"
    },
    {
     "t": "list",
     "items": [
      "Categoria jove de 30 a 40 anys amb dorsals de 3000 al 3999",
      "Categoria mitjana de 41 a 50 anys amb dorsals de 4000 al 4999",
      "Categoria avançada de 50 a 60 anys amb dorsals de 5000 al 5999",
      "Categoria mega-avançada de 60 o més anys amb dorsals de 6000 al 9999"
     ]
    },
    {
     "t": "p",
     "x": "Si les dues seqüències tenen un -1 com a marca de final, calculeu:"
    },
    {
     "t": "p",
     "x": "(c) Sabent que el Pepet i el Joanet han participat en la marató. Comproveu si el Pepet amb dorsal 4003 ha abandonat la marató després del Joanet amb dorsal 4509. Això en el cas que tots dos hagin abandonat, ja que pot ser que algun d'ells o els dos hagin acabat la marató. En aquest cas, s'indica quin o quins d'ells no han abandonat la marató: \"Pepet no ha abandonat\" i/o \"Joanet no ha abandonat\"."
    },
    {
     "t": "p",
     "x": "Nota: resoleu els algorismes (a), (b), (c) i (d) de forma independent (en preguntes separades). Aquesta pregunta correspon únicament a l'apartat (c)."
    },
    {
     "t": "p",
     "x": "**Entrada:** la segona seqüència (seq.2, l'ordre en què els participants van abandonant la marató), acabada amb -1. (Aquest apartat no fa servir la primera seqüència.)"
    },
    {
     "t": "p",
     "x": "**Sortida:**"
    },
    {
     "t": "list",
     "items": [
      "Si tots dos han abandonat: una única línia, `Si, en Pepet ha abandonat despres del Joanet` o `No, en Pepet no ha abandonat despres del Joanet`.",
      "Si algun (o tots dos) no ha abandonat: una línia `Pepet no ha abandonat` i/o una línia `Joanet no ha abandonat`, segons correspongui (primer la del Pepet)."
     ]
    },
    {
     "t": "p",
     "x": "Fes-ho amb un while. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "while",
    "sentinella"
   ],
   "examples": [
    {
     "in": "4509 4003 -1\n",
     "out": "Si, en Pepet ha abandonat despres del Joanet\n",
     "fixed": true
    },
    {
     "in": "4003 4509 -1\n",
     "out": "No, en Pepet no ha abandonat despres del Joanet\n",
     "fixed": true
    }
   ],
   "tests": [
    {
     "in": "-1\n",
     "out": "Pepet no ha abandonat\nJoanet no ha abandonat\n"
    },
    {
     "in": "3001 4003 5002 -1\n",
     "out": "Joanet no ha abandonat\n"
    },
    {
     "in": "4509 6000 -1\n",
     "out": "Pepet no ha abandonat\n"
    },
    {
     "in": "3100 4509 4100 4003 9999 -1\n",
     "out": "Si, en Pepet ha abandonat despres del Joanet\n"
    },
    {
     "in": "4003 3000 4509 -1\n",
     "out": "No, en Pepet no ha abandonat despres del Joanet\n"
    },
    {
     "in": "5000 6000 7000 -1\n",
     "out": "Pepet no ha abandonat\nJoanet no ha abandonat\n"
    },
    {
     "in": "4003 -1\n",
     "out": "Joanet no ha abandonat\n"
    },
    {
     "in": "6123 4509 3999 4999 4003 -1\n",
     "out": "Si, en Pepet ha abandonat despres del Joanet\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Compta les posicions mentre llegeixes: guarda la posició en què surt el 4003 i la del 4509 (0 si no surten). Al final, si cap és 0 compara-les; si no, escriu qui no ha abandonat.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int dorsal, posicio = 0, posPepet = 0, posJoanet = 0;\n    cin >> dorsal;\n    while (dorsal != -1) {\n        posicio++;\n        if (dorsal == 4003) {\n            posPepet = posicio;\n        }\n        if (dorsal == 4509) {\n            posJoanet = posicio;\n        }\n        cin >> dorsal;\n    }\n    if (posPepet != 0 && posJoanet != 0) {\n        if (posPepet > posJoanet) {\n            cout << \"Si, en Pepet ha abandonat despres del Joanet\" << endl;\n        } else {\n            cout << \"No, en Pepet no ha abandonat despres del Joanet\" << endl;\n        }\n    } else {\n        if (posPepet == 0) {\n            cout << \"Pepet no ha abandonat\" << endl;\n        }\n        if (posJoanet == 0) {\n            cout << \"Joanet no ha abandonat\" << endl;\n        }\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-model-endevina",
   "title": "ENDEVINA EL NOMBRE",
   "qb": [
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, generant un número a l'atzar de com a màxim dues xifres, es pugui endevinar donant com a pista \"Massa Gran\" o \"Massa Petit\"."
    },
    {
     "t": "p",
     "x": "Adaptació per a la correcció automàtica: en lloc de generar el número secret a l'atzar dins del programa (que faria el resultat imprevisible), el llegirem com la primera dada d'entrada — és exactament el mateix esquema de bucle, només canvia d'on surt NA."
    },
    {
     "t": "p",
     "x": "**Entrada:** el número secret NA, seguit d'una seqüència d'intents Num (que acabarà exactament quan un intent coincideixi amb NA)."
    },
    {
     "t": "p",
     "x": "**Sortida:** per cada intent que no sigui l'encertat, una línia amb `Massa Gran` (si l'intent és més gran que NA) o `Massa Petit` (si és més petit); quan s'encerti, escriu `Encertat !!!` i acaba."
    },
    {
     "t": "p",
     "x": "Fes-ho amb un while, exactament amb l'esquema de l'algorisme proposat a classe (la condició del bucle compara directament NA amb l'últim intent llegit). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "while"
   ],
   "examples": [
    {
     "in": "50 80 30 50\n",
     "out": "Massa Gran\nMassa Petit\nEncertat !!!\n",
     "fixed": true
    },
    {
     "in": "10 10\n",
     "out": "Encertat !!!\n",
     "fixed": true
    }
   ],
   "tests": [
    {
     "in": "99 50 75 88 94 97 98 99\n",
     "out": "Massa Petit\nMassa Petit\nMassa Petit\nMassa Petit\nMassa Petit\nMassa Petit\nEncertat !!!\n"
    },
    {
     "in": "1 0 2 1\n",
     "out": "Massa Petit\nMassa Gran\nEncertat !!!\n"
    },
    {
     "in": "42 42\n",
     "out": "Encertat !!!\n"
    },
    {
     "in": "7 99 1 50 7\n",
     "out": "Massa Gran\nMassa Petit\nMassa Gran\nEncertat !!!\n"
    },
    {
     "in": "55 60 50 56 54 55\n",
     "out": "Massa Gran\nMassa Petit\nMassa Gran\nMassa Petit\nEncertat !!!\n"
    },
    {
     "in": "0 5 3 1 0\n",
     "out": "Massa Gran\nMassa Gran\nMassa Gran\nEncertat !!!\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Llegeix NA i el primer intent abans del bucle; mentre Num sigui diferent de NA, escriu la pista i llegeix un altre intent. «Encertat !!!» va després del bucle.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int NA, Num;\n    cin >> NA;\n    cin >> Num;\n    while (Num != NA) {\n        if (Num > NA) {\n            cout << \"Massa Gran\" << endl;\n        } else {\n            cout << \"Massa Petit\" << endl;\n        }\n        cin >> Num;\n    }\n    cout << \"Encertat !!!\" << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-model-mitjana-positius",
   "qb": [
    {
     "t": "p",
     "x": "Llegeix enters fins a trobar -1. Calcula la mitjana dels valors estrictament positius llegits abans del -1. Si no n'hi ha cap, imprimeix 0 (sense decimals)."
    },
    {
     "t": "p",
     "x": "La mitjana s'escriu amb el format per defecte de cout (per exemple, 5 i 6 donen 5.5)."
    }
   ],
   "unit": "s4",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "while",
    "sentinella"
   ],
   "examples": [
    {
     "in": "5 5 -1\n",
     "out": "5\n",
     "fixed": true,
     "name": "Exemple"
    }
   ],
   "tests": [
    {
     "in": "-1\n",
     "out": "0\n"
    },
    {
     "in": "0 -3 0 -1\n",
     "out": "0\n"
    },
    {
     "in": "5 6 -1\n",
     "out": "5.5\n"
    },
    {
     "in": "1 2 2 -1\n",
     "out": "1.66667\n"
    },
    {
     "in": "-4 10 0 20 -1\n",
     "out": "15\n"
    },
    {
     "in": "7 -1\n",
     "out": "7\n"
    },
    {
     "in": "3 -2 4 -8 5 -1\n",
     "out": "4\n"
    },
    {
     "in": "100 1 1 -1\n",
     "out": "34\n"
    }
   ],
   "hint": "Acumula la suma i compta només quan el valor és > 0 (el 0 i els negatius no compten). Divideix com a double: (double) suma / n.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x, suma = 0, n = 0;\n    cin >> x;\n    while (x != -1) {\n        if (x > 0) {\n            suma = suma + x;\n            n++;\n        }\n        cin >> x;\n    }\n    if (n == 0) {\n        cout << 0 << endl;\n    } else {\n        cout << (double) suma / n << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-model-fibonacci",
   "title": "EL FIBONACCI",
   "qb": [
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que permeti generar els N (amb N>=3) primers termes de la sèrie de Fibonacci 0 1 1 2 3 5 8 13 ..."
    },
    {
     "t": "p",
     "x": "Nota: cada nou element, llevat dels dos primers, s'obté com a suma dels dos anteriors."
    },
    {
     "t": "p",
     "x": "**Entrada:** un natural N (N>=3)."
    },
    {
     "t": "p",
     "x": "**Sortida** (una única línia): els N primers termes separats per espais (amb un espai també després de l'últim, tal com a l'algorisme proposat a classe)."
    },
    {
     "t": "p",
     "x": "Fes-ho amb un bucle repeteix (do...while en C++), tal com a l'algorisme proposat a classe. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s5",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "do-while",
    "format"
   ],
   "examples": [
    {
     "in": "3\n",
     "out": "0 1 1 \n",
     "fixed": true
    },
    {
     "in": "8\n",
     "out": "0 1 1 2 3 5 8 13 \n",
     "fixed": true
    }
   ],
   "tests": [
    {
     "in": "4\n",
     "out": "0 1 1 2 \n"
    },
    {
     "in": "5\n",
     "out": "0 1 1 2 3 \n"
    },
    {
     "in": "10\n",
     "out": "0 1 1 2 3 5 8 13 21 34 \n"
    },
    {
     "in": "20\n",
     "out": "0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 \n"
    },
    {
     "in": "30\n",
     "out": "0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025 121393 196418 317811 514229 \n"
    },
    {
     "in": "40\n",
     "out": "0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025 121393 196418 317811 514229 832040 1346269 2178309 3524578 5702887 9227465 14930352 24157817 39088169 63245986 \n"
    }
   ],
   "rules": {
    "use": [
     "dowhile"
    ],
    "avoid": []
   },
   "hint": "Escriu primer «0 1 » i després, dins el do...while, calcula el següent com a suma dels dos anteriors i desplaça'ls; el comptador va de 2 fins a N.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    long long anterior = 0, actual = 1, seguent;\n    cout << anterior << \" \" << actual << \" \";\n    int i = 2;\n    do {\n        seguent = anterior + actual;\n        cout << seguent << \" \";\n        anterior = actual;\n        actual = seguent;\n        i++;\n    } while (i < N);\n    cout << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-model-binari",
   "title": "EXERCICI 4 — BINARI A DECIMAL",
   "qb": [
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que donat un nombre x representat en binari, realitzi la representació decimal (base 10) del nombre."
    },
    {
     "t": "p",
     "x": "Adaptació per a la correcció automàtica: el nombre binari x s'introdueix com una seqüència de xifres 0 i 1 (per exemple, 1011)."
    },
    {
     "t": "p",
     "x": "**Entrada:** un enter x format només per xifres 0 i 1 (la seva representació en binari)."
    },
    {
     "t": "p",
     "x": "**Sortida** (una única línia): `Decimal: R`"
    },
    {
     "t": "p",
     "x": "Extreu les xifres de x d'una en una (de dreta a esquerra) i acumula el valor decimal multiplicant cada xifra per la potència de 2 que li correspon. Fes-ho amb un while. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s5",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "while",
    "dígits"
   ],
   "examples": [
    {
     "in": "1011\n",
     "out": "Decimal: 11\n",
     "fixed": true
    },
    {
     "in": "101\n",
     "out": "Decimal: 5\n",
     "fixed": true
    }
   ],
   "tests": [
    {
     "in": "0\n",
     "out": "Decimal: 0\n"
    },
    {
     "in": "1\n",
     "out": "Decimal: 1\n"
    },
    {
     "in": "10\n",
     "out": "Decimal: 2\n"
    },
    {
     "in": "110\n",
     "out": "Decimal: 6\n"
    },
    {
     "in": "100000\n",
     "out": "Decimal: 32\n"
    },
    {
     "in": "1111111111\n",
     "out": "Decimal: 1023\n"
    },
    {
     "in": "1000000000\n",
     "out": "Decimal: 512\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "x % 10 és l'última xifra i x / 10 la treu. Porta una variable potència que comença a 1 i es multiplica per 2 a cada volta.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x;\n    cin >> x;\n    int R = 0, potencia = 1;\n    while (x > 0) {\n        int xifra = x % 10;\n        R = R + xifra * potencia;\n        potencia = potencia * 2;\n        x = x / 10;\n    }\n    cout << \"Decimal: \" << R << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-model-suma-digits",
   "title": "LA SUMA DELS DÍGITS",
   "qb": [
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que donat un nombre N, ens calculi la suma dels seus dígits."
    },
    {
     "t": "p",
     "x": "**Entrada:** un natural N."
    },
    {
     "t": "p",
     "x": "**Sortida** (una única línia): la suma dels dígits de N."
    },
    {
     "t": "p",
     "x": "Extreu les xifres de N d'una en una amb un while, tal com a l'algorisme proposat a classe. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s5",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "while",
    "dígits"
   ],
   "examples": [
    {
     "in": "12345\n",
     "out": "15\n",
     "fixed": true
    },
    {
     "in": "7\n",
     "out": "7\n",
     "fixed": true
    }
   ],
   "tests": [
    {
     "in": "0\n",
     "out": "0\n"
    },
    {
     "in": "10\n",
     "out": "1\n"
    },
    {
     "in": "99999\n",
     "out": "45\n"
    },
    {
     "in": "1000000\n",
     "out": "1\n"
    },
    {
     "in": "2147483647\n",
     "out": "46\n"
    },
    {
     "in": "505\n",
     "out": "10\n"
    },
    {
     "in": "9\n",
     "out": "9\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Mentre N > 0: suma N % 10 i fes N = N / 10.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int suma = 0;\n    while (N > 0) {\n        suma = suma + N % 10;\n        N = N / 10;\n    }\n    cout << suma << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-model-sufix",
   "title": "EXERCICI 5 — SUFIX NUMÈRIC",
   "qb": [
    {
     "t": "p",
     "x": "Donats dos nombres naturals x i y, dissenyeu un algorisme que ens digui si un dels nombres és sufix de l'altre. Per exemple, si x=12 i y=4512, llavors tenim que 12 és sufix de 4512."
    },
    {
     "t": "p",
     "x": "**Entrada:** dos naturals x i y (x, y ≥ 1)."
    },
    {
     "t": "p",
     "x": "**Sortida** (una única línia): `Si, un dels nombres es sufix de l'altre` o `No, cap dels nombres es sufix de l'altre`."
    },
    {
     "t": "p",
     "x": "Recorda que un nombre A és sufix d'un nombre B si les últimes xifres de B (tantes com xifres té A) coincideixen exactament amb A. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s5",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "while",
    "dígits"
   ],
   "examples": [
    {
     "in": "12 4512\n",
     "out": "Si, un dels nombres es sufix de l'altre\n",
     "fixed": true
    },
    {
     "in": "7 123\n",
     "out": "No, cap dels nombres es sufix de l'altre\n",
     "fixed": true
    }
   ],
   "tests": [
    {
     "in": "12 412\n",
     "out": "Si, un dels nombres es sufix de l'altre\n"
    },
    {
     "in": "12 4213\n",
     "out": "No, cap dels nombres es sufix de l'altre\n"
    },
    {
     "in": "4512 12\n",
     "out": "Si, un dels nombres es sufix de l'altre\n"
    },
    {
     "in": "45 45\n",
     "out": "Si, un dels nombres es sufix de l'altre\n"
    },
    {
     "in": "5 5\n",
     "out": "Si, un dels nombres es sufix de l'altre\n"
    },
    {
     "in": "123 23\n",
     "out": "Si, un dels nombres es sufix de l'altre\n"
    },
    {
     "in": "10 110\n",
     "out": "Si, un dels nombres es sufix de l'altre\n"
    },
    {
     "in": "100 1000\n",
     "out": "No, cap dels nombres es sufix de l'altre\n"
    },
    {
     "in": "1 2\n",
     "out": "No, cap dels nombres es sufix de l'altre\n"
    }
   ],
   "hint": "Compara les últimes xifres de tots dos (x % 10 i y % 10) mentre coincideixin, traient-les amb / 10. Si un dels dos s'ha quedat sense xifres (val 0), és sufix de l'altre.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x, y;\n    cin >> x >> y;\n    while (x > 0 && y > 0 && x % 10 == y % 10) {\n        x = x / 10;\n        y = y / 10;\n    }\n    if (x == 0 || y == 0) {\n        cout << \"Si, un dels nombres es sufix de l'altre\" << endl;\n    } else {\n        cout << \"No, cap dels nombres es sufix de l'altre\" << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-model-data-posterior",
   "title": "DATA POSTERIOR",
   "qb": [
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que a partir de dues dates escrigui la que és posterior."
    },
    {
     "t": "p",
     "x": "**Entrada:** sis enters: D1 M1 A1 (dia, mes, any de la primera data) i D2 M2 A2 (dia, mes, any de la segona data)."
    },
    {
     "t": "p",
     "x": "**Sortida** (una única línia):"
    },
    {
     "t": "list",
     "items": [
      "Si les dates són diferents, la data posterior en format `D/M/A`.",
      "Si són la mateixa data, escriu `Dates iguals`."
     ]
    },
    {
     "t": "p",
     "x": "Compara primer l'any, després el mes, i finalment el dia. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s3",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "condicional",
    "format"
   ],
   "examples": [
    {
     "in": "15 3 2020 20 3 2020\n",
     "out": "20/3/2020\n",
     "fixed": true
    },
    {
     "in": "1 1 2021 31 12 2020\n",
     "out": "1/1/2021\n",
     "fixed": true
    }
   ],
   "tests": [
    {
     "in": "31 12 2020 1 1 2021\n",
     "out": "1/1/2021\n"
    },
    {
     "in": "5 6 2022 5 6 2022\n",
     "out": "Dates iguals\n"
    },
    {
     "in": "10 5 2021 9 5 2021\n",
     "out": "10/5/2021\n"
    },
    {
     "in": "1 2 2000 1 3 1999\n",
     "out": "1/2/2000\n"
    },
    {
     "in": "28 2 2024 29 2 2024\n",
     "out": "29/2/2024\n"
    },
    {
     "in": "15 8 2023 14 9 2023\n",
     "out": "14/9/2023\n"
    },
    {
     "in": "1 10 2019 30 9 2019\n",
     "out": "1/10/2019\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ]
   },
   "hint": "Si els anys són diferents decideix l'any; si són iguals, decideix el mes; si també, el dia. Un bool «primeraPosterior» simplifica escriure el resultat.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int D1, M1, A1, D2, M2, A2;\n    cin >> D1 >> M1 >> A1 >> D2 >> M2 >> A2;\n    if (A1 == A2 && M1 == M2 && D1 == D2) {\n        cout << \"Dates iguals\" << endl;\n    } else {\n        bool primeraPosterior;\n        if (A1 != A2) {\n            primeraPosterior = A1 > A2;\n        } else if (M1 != M2) {\n            primeraPosterior = M1 > M2;\n        } else {\n            primeraPosterior = D1 > D2;\n        }\n        if (primeraPosterior) {\n            cout << D1 << \"/\" << M1 << \"/\" << A1 << endl;\n        } else {\n            cout << D2 << \"/\" << M2 << \"/\" << A2 << endl;\n        }\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-model-perfectes",
   "title": "ELS NOMBRES PERFECTES (disseny descendent)",
   "qb": [
    {
     "t": "p",
     "x": "Direm que un número és \"perfecte\" quan és igual a la suma dels seus divisors excepte ell mateix. Dissenyeu un algorisme que llisti tots els nombres perfectes menors de 100."
    },
    {
     "t": "p",
     "x": "Exemple: el 6 és perfecte ja que 6=1+2+3."
    },
    {
     "t": "p",
     "x": "Adaptació per a la correcció automàtica: el límit \"100\" es llegeix com a entrada N, en lloc d'estar fixat al codi (així es pot comprovar amb diferents límits)."
    },
    {
     "t": "p",
     "x": "**Entrada:** un natural N (el límit superior, exclòs)."
    },
    {
     "t": "p",
     "x": "**Sortida** (una única línia): els nombres perfectes menors que N, separats per espais (amb un espai també després de l'últim). Si no n'hi ha cap, la línia queda buida."
    },
    {
     "t": "p",
     "x": "Per a cada candidat X, calcula la suma dels seus divisors (recorrent-los de l'1 a X) i compara-la amb X, tal com a l'algorisme de disseny descendent proposat a classe. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s6",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP"
   ],
   "tags": [
    "for",
    "bucles niats",
    "format"
   ],
   "examples": [
    {
     "in": "100\n",
     "out": "6 28 \n",
     "fixed": true
    },
    {
     "in": "10\n",
     "out": "6 \n",
     "fixed": true
    }
   ],
   "tests": [
    {
     "in": "6\n",
     "out": "\n"
    },
    {
     "in": "7\n",
     "out": "6 \n"
    },
    {
     "in": "29\n",
     "out": "6 28 \n"
    },
    {
     "in": "28\n",
     "out": "6 \n"
    },
    {
     "in": "497\n",
     "out": "6 28 496 \n"
    },
    {
     "in": "10000\n",
     "out": "6 28 496 8128 \n"
    },
    {
     "in": "1\n",
     "out": "\n"
    }
   ],
   "hint": "Dos bucles niats: el de fora recorre els candidats X de 1 a N-1 i el de dins suma els divisors d de X amb d < X (X % d == 0). Si la suma val X, l'escrius seguit d'un espai.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    for (int X = 1; X < N; X++) {\n        int sumaDivisors = 0;\n        for (int d = 1; d < X; d++) {\n            if (X % d == 0) {\n                sumaDivisors = sumaDivisors + d;\n            }\n        }\n        if (sumaDivisors == X) {\n            cout << X << \" \";\n        }\n    }\n    cout << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-f-cronometre",
   "title": "EL CRONÒMETRE DE LA MARATÓ",
   "qb": [
    {
     "t": "p",
     "x": "El cronometratge electrònic d'una marató registra el temps de cada corredor com un nombre total de segons des del tret de sortida. Per publicar les classificacions, l'organització vol veure aquest temps en hores, minuts i segons."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, donat el nombre total de segons, escrigui el temps en hores, minuts i segons, i també en format de rellotge."
    },
    {
     "t": "p",
     "x": "**Entrada:** un enter S (nombre total de segons, 0 ≤ S ≤ 359999)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 2 línies): a la primera, les hores H, els minuts M (de 0 a 59) i els segons SG (de 0 a 59), sense zeros a l'esquerra; a la segona, el mateix temps amb dues xifres per a cada valor (posant un zero a l'esquerra si cal)."
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Temps: H h M min SG s\nRellotge: HH:MM:SS",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho sense bucles, amb divisions i mòduls. Per als zeros a l'esquerra fes servir `setw` i `setfill` de `<iomanip>`. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s2",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "new",
   "tags": [
    "seqüencial",
    "format"
   ],
   "examples": [
    {
     "in": "7384\n",
     "out": "Temps: 2 h 3 min 4 s\nRellotge: 02:03:04\n"
    },
    {
     "in": "45\n",
     "out": "Temps: 0 h 0 min 45 s\nRellotge: 00:00:45\n"
    }
   ],
   "tests": [
    {
     "in": "0\n",
     "out": "Temps: 0 h 0 min 0 s\nRellotge: 00:00:00\n"
    },
    {
     "in": "59\n",
     "out": "Temps: 0 h 0 min 59 s\nRellotge: 00:00:59\n"
    },
    {
     "in": "60\n",
     "out": "Temps: 0 h 1 min 0 s\nRellotge: 00:01:00\n"
    },
    {
     "in": "3599\n",
     "out": "Temps: 0 h 59 min 59 s\nRellotge: 00:59:59\n"
    },
    {
     "in": "3600\n",
     "out": "Temps: 1 h 0 min 0 s\nRellotge: 01:00:00\n"
    },
    {
     "in": "10800\n",
     "out": "Temps: 3 h 0 min 0 s\nRellotge: 03:00:00\n"
    },
    {
     "in": "42195\n",
     "out": "Temps: 11 h 43 min 15 s\nRellotge: 11:43:15\n"
    },
    {
     "in": "359999\n",
     "out": "Temps: 99 h 59 min 59 s\nRellotge: 99:59:59\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ]
   },
   "hint": "Les hores són S / 3600; el que sobra (S % 3600) es reparteix en minuts (/ 60) i segons (% 60). `setfill('0')` es manté, però `setw(2)` només afecta el valor següent i s'ha de repetir davant de cada número.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int S;\n    cin >> S;\n    int H = S / 3600;\n    int M = (S % 3600) / 60;\n    int SG = S % 60;\n    cout << \"Temps: \" << H << \" h \" << M << \" min \" << SG << \" s\" << endl;\n    cout << \"Rellotge: \" << setfill('0') << setw(2) << H << \":\" << setw(2) << M << \":\" << setw(2) << SG << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-f-ascensor",
   "title": "ELS ASCENSORS DE L'HOTEL",
   "qb": [
    {
     "t": "p",
     "x": "Un hotel de muntanya té plantes de pàrquing sota terra (numerades amb negatius: -1, -2, ...), la planta baixa (0) i les plantes de les habitacions (1, 2, 3, ...). Per repartir la gent, l'ascensor A només s'atura a les plantes amb número parell i l'ascensor B només a les plantes amb número senar."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, donada la planta on vol anar un client, li digui si el número de la planta és parell o senar i quin ascensor ha d'agafar."
    },
    {
     "t": "p",
     "x": "**Entrada:** un enter P (número de la planta, -5 ≤ P ≤ 40)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 2 línies). Si P és parell:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "El numero P es parell\nAgafa l'ascensor A",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "i si P és senar:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "El numero P es senar\nAgafa l'ascensor B",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Compte: el 0 és parell, i els números negatius també poden ser parells o senars. Fes-ho amb un if-else, sense bucles. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s3",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "new",
   "tags": [
    "condicional"
   ],
   "examples": [
    {
     "in": "7\n",
     "out": "El numero 7 es senar\nAgafa l'ascensor B\n"
    },
    {
     "in": "-2\n",
     "out": "El numero -2 es parell\nAgafa l'ascensor A\n"
    }
   ],
   "tests": [
    {
     "in": "0\n",
     "out": "El numero 0 es parell\nAgafa l'ascensor A\n"
    },
    {
     "in": "-1\n",
     "out": "El numero -1 es senar\nAgafa l'ascensor B\n"
    },
    {
     "in": "-5\n",
     "out": "El numero -5 es senar\nAgafa l'ascensor B\n"
    },
    {
     "in": "-4\n",
     "out": "El numero -4 es parell\nAgafa l'ascensor A\n"
    },
    {
     "in": "1\n",
     "out": "El numero 1 es senar\nAgafa l'ascensor B\n"
    },
    {
     "in": "12\n",
     "out": "El numero 12 es parell\nAgafa l'ascensor A\n"
    },
    {
     "in": "33\n",
     "out": "El numero 33 es senar\nAgafa l'ascensor B\n"
    },
    {
     "in": "40\n",
     "out": "El numero 40 es parell\nAgafa l'ascensor A\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ]
   },
   "hint": "P és parell si P % 2 == 0. No comprovis els senars amb P % 2 == 1: en C++, -3 % 2 val -1. Fes servir el else.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int P;\n    cin >> P;\n    if (P % 2 == 0) {\n        cout << \"El numero \" << P << \" es parell\" << endl;\n        cout << \"Agafa l'ascensor A\" << endl;\n    } else {\n        cout << \"El numero \" << P << \" es senar\" << endl;\n        cout << \"Agafa l'ascensor B\" << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-f-temperatura",
   "title": "L'ESTACIÓ METEOROLÒGICA",
   "qb": [
    {
     "t": "p",
     "x": "L'estació meteorològica d'un refugi de muntanya mesura la temperatura en graus Celsius, però molts excursionistes estrangers que la consulten estan acostumats als graus Fahrenheit. La conversió és F = C · 9 / 5 + 32."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, donada una temperatura en graus Celsius, la mostri en les dues escales."
    },
    {
     "t": "p",
     "x": "**Entrada:** un real C (temperatura en graus Celsius, -50 ≤ C ≤ 60, amb com a molt un decimal)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 2 línies, cada valor amb 1 decimal):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Celsius: C\nFahrenheit: F",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho sense bucles. Per als decimals fes servir `fixed` i `setprecision` de `<iomanip>`. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s2",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "new",
   "tags": [
    "seqüencial",
    "format"
   ],
   "examples": [
    {
     "in": "25\n",
     "out": "Celsius: 25.0\nFahrenheit: 77.0\n"
    },
    {
     "in": "36.6\n",
     "out": "Celsius: 36.6\nFahrenheit: 97.9\n"
    }
   ],
   "tests": [
    {
     "in": "0\n",
     "out": "Celsius: 0.0\nFahrenheit: 32.0\n"
    },
    {
     "in": "-40\n",
     "out": "Celsius: -40.0\nFahrenheit: -40.0\n"
    },
    {
     "in": "-50\n",
     "out": "Celsius: -50.0\nFahrenheit: -58.0\n"
    },
    {
     "in": "60\n",
     "out": "Celsius: 60.0\nFahrenheit: 140.0\n"
    },
    {
     "in": "21.3\n",
     "out": "Celsius: 21.3\nFahrenheit: 70.3\n"
    },
    {
     "in": "-5.5\n",
     "out": "Celsius: -5.5\nFahrenheit: 22.1\n"
    },
    {
     "in": "37.5\n",
     "out": "Celsius: 37.5\nFahrenheit: 99.5\n"
    },
    {
     "in": "-12.3\n",
     "out": "Celsius: -12.3\nFahrenheit: 9.9\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ]
   },
   "hint": "Fes servir `double`. Compte amb 9 / 5: entre enters val 1; escriu C * 9 / 5 o 1.8 * C. Abans d'escriure, `cout << fixed << setprecision(1)`.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double C;\n    cin >> C;\n    double F = C * 9 / 5 + 32;\n    cout << fixed << setprecision(1);\n    cout << \"Celsius: \" << C << endl;\n    cout << \"Fahrenheit: \" << F << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-f-salt-llargada",
   "title": "EL SALT DE LLARGADA",
   "qb": [
    {
     "t": "p",
     "x": "En una competició d'atletisme, cada saltador de llargada fa tres intents i la marca que compta és la millor de les tres. Els jutges anoten cada salt en centímetres; un salt nul s'anota com a 0."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, donades les tres marques d'un saltador, digui quina és la millor i en quin intent l'ha fet. Si la millor marca s'ha repetit, s'indica el primer intent en què s'ha aconseguit."
    },
    {
     "t": "p",
     "x": "**Entrada:** tres enters A, B i C (les marques del 1r, 2n i 3r intent, en cm, 0 ≤ A, B, C ≤ 900)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 2 línies):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Millor salt: M cm\nIntent: I",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho només amb condicionals (if), sense bucles. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s3",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "new",
   "tags": [
    "condicional"
   ],
   "examples": [
    {
     "in": "612 645 630\n",
     "out": "Millor salt: 645 cm\nIntent: 2\n"
    },
    {
     "in": "0 588 588\n",
     "out": "Millor salt: 588 cm\nIntent: 2\n"
    }
   ],
   "tests": [
    {
     "in": "0 0 0\n",
     "out": "Millor salt: 0 cm\nIntent: 1\n"
    },
    {
     "in": "700 700 700\n",
     "out": "Millor salt: 700 cm\nIntent: 1\n"
    },
    {
     "in": "650 600 655\n",
     "out": "Millor salt: 655 cm\nIntent: 3\n"
    },
    {
     "in": "720 710 715\n",
     "out": "Millor salt: 720 cm\nIntent: 1\n"
    },
    {
     "in": "640 600 640\n",
     "out": "Millor salt: 640 cm\nIntent: 1\n"
    },
    {
     "in": "0 0 512\n",
     "out": "Millor salt: 512 cm\nIntent: 3\n"
    },
    {
     "in": "500 650 650\n",
     "out": "Millor salt: 650 cm\nIntent: 2\n"
    },
    {
     "in": "900 0 899\n",
     "out": "Millor salt: 900 cm\nIntent: 1\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ]
   },
   "hint": "Suposa que el millor és el 1r intent i compara'l amb el 2n i després amb el 3r; canvia'l només quan el nou sigui estrictament més gran (>), i així en cas d'empat es queda el primer.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int A, B, C;\n    cin >> A >> B >> C;\n    int millor = A;\n    int intent = 1;\n    if (B > millor) {\n        millor = B;\n        intent = 2;\n    }\n    if (C > millor) {\n        millor = C;\n        intent = 3;\n    }\n    cout << \"Millor salt: \" << millor << \" cm\" << endl;\n    cout << \"Intent: \" << intent << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-f-cadenat",
   "title": "EL CADENAT DE LA TAQUILLA",
   "qb": [
    {
     "t": "p",
     "x": "Un gimnàs dona a cada soci un cadenat per a la taquilla amb una combinació de tres xifres (de 100 a 999). Per no deixar la combinació a la vista, a la fitxa del soci s'apunta escrita al revés."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, donada la combinació, escrigui per separat les centenes, les desenes i les unitats, i després el codi al revés: les tres xifres en ordre invers, una darrere l'altra, encara que la primera sigui un 0."
    },
    {
     "t": "p",
     "x": "**Entrada:** un enter N (la combinació, 100 ≤ N ≤ 999)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 4 línies):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Centenes: C\nDesenes: D\nUnitats: U\nAl reves: UDC",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Per exemple, si N és 250, l'última línia ha de ser `Al reves: 052`. Fes-ho sense bucles, amb divisions i mòduls. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s2",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "new",
   "tags": [
    "seqüencial",
    "dígits"
   ],
   "examples": [
    {
     "in": "473\n",
     "out": "Centenes: 4\nDesenes: 7\nUnitats: 3\nAl reves: 374\n"
    },
    {
     "in": "250\n",
     "out": "Centenes: 2\nDesenes: 5\nUnitats: 0\nAl reves: 052\n"
    }
   ],
   "tests": [
    {
     "in": "100\n",
     "out": "Centenes: 1\nDesenes: 0\nUnitats: 0\nAl reves: 001\n"
    },
    {
     "in": "999\n",
     "out": "Centenes: 9\nDesenes: 9\nUnitats: 9\nAl reves: 999\n"
    },
    {
     "in": "101\n",
     "out": "Centenes: 1\nDesenes: 0\nUnitats: 1\nAl reves: 101\n"
    },
    {
     "in": "909\n",
     "out": "Centenes: 9\nDesenes: 0\nUnitats: 9\nAl reves: 909\n"
    },
    {
     "in": "120\n",
     "out": "Centenes: 1\nDesenes: 2\nUnitats: 0\nAl reves: 021\n"
    },
    {
     "in": "555\n",
     "out": "Centenes: 5\nDesenes: 5\nUnitats: 5\nAl reves: 555\n"
    },
    {
     "in": "381\n",
     "out": "Centenes: 3\nDesenes: 8\nUnitats: 1\nAl reves: 183\n"
    },
    {
     "in": "710\n",
     "out": "Centenes: 7\nDesenes: 1\nUnitats: 0\nAl reves: 017\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ]
   },
   "hint": "Centenes: N / 100; desenes: (N / 10) % 10; unitats: N % 10. Per al codi al revés, escriu les tres xifres seguides amb cout en lloc de calcular un número nou, que perdria els zeros del davant.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int C = N / 100;\n    int D = (N / 10) % 10;\n    int U = N % 10;\n    cout << \"Centenes: \" << C << endl;\n    cout << \"Desenes: \" << D << endl;\n    cout << \"Unitats: \" << U << endl;\n    cout << \"Al reves: \" << U << D << C << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-f-any-traspas",
   "title": "EL CALENDARI DE PARET",
   "qb": [
    {
     "t": "p",
     "x": "Una impremta fa calendaris de paret per encàrrec i, abans d'imprimir-los, ha de saber quants dies té el febrer de l'any demanat. Un any és de traspàs (i el febrer té 29 dies) si és múltiple de 4, excepte els múltiples de 100, que només ho són si també són múltiples de 400. Per exemple, 2024 i 2000 són de traspàs, però 2023 i 1900 no."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, donat un any, digui si és de traspàs i quants dies té el febrer."
    },
    {
     "t": "p",
     "x": "**Entrada:** un enter A (l'any, 1600 ≤ A ≤ 3000)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 2 línies). Si l'any és de traspàs:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "L'any A es de traspas\nEl febrer te 29 dies",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "i si no ho és:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "L'any A no es de traspas\nEl febrer te 28 dies",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb condicionals, sense bucles. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s3",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "new",
   "tags": [
    "condicional"
   ],
   "examples": [
    {
     "in": "2024\n",
     "out": "L'any 2024 es de traspas\nEl febrer te 29 dies\n"
    },
    {
     "in": "1900\n",
     "out": "L'any 1900 no es de traspas\nEl febrer te 28 dies\n"
    }
   ],
   "tests": [
    {
     "in": "1600\n",
     "out": "L'any 1600 es de traspas\nEl febrer te 29 dies\n"
    },
    {
     "in": "1700\n",
     "out": "L'any 1700 no es de traspas\nEl febrer te 28 dies\n"
    },
    {
     "in": "1996\n",
     "out": "L'any 1996 es de traspas\nEl febrer te 29 dies\n"
    },
    {
     "in": "2025\n",
     "out": "L'any 2025 no es de traspas\nEl febrer te 28 dies\n"
    },
    {
     "in": "2028\n",
     "out": "L'any 2028 es de traspas\nEl febrer te 29 dies\n"
    },
    {
     "in": "2100\n",
     "out": "L'any 2100 no es de traspas\nEl febrer te 28 dies\n"
    },
    {
     "in": "2400\n",
     "out": "L'any 2400 es de traspas\nEl febrer te 29 dies\n"
    },
    {
     "in": "3000\n",
     "out": "L'any 3000 no es de traspas\nEl febrer te 28 dies\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ]
   },
   "hint": "La condició és (A % 4 == 0 && A % 100 != 0) || A % 400 == 0. Amb un if-else n'hi ha prou.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int A;\n    cin >> A;\n    if ((A % 4 == 0 && A % 100 != 0) || A % 400 == 0) {\n        cout << \"L'any \" << A << \" es de traspas\" << endl;\n        cout << \"El febrer te 29 dies\" << endl;\n    } else {\n        cout << \"L'any \" << A << \" no es de traspas\" << endl;\n        cout << \"El febrer te 28 dies\" << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-f-rebaixes",
   "title": "LES REBAIXES",
   "qb": [
    {
     "t": "p",
     "x": "Durant les rebaixes, una botiga de roba aplica a cada article el percentatge de descompte que marca la seva etiqueta. A la caixa, el tiquet ha de mostrar quants euros s'estalvia el client i quant ha de pagar."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, donat el preu original d'un article i el percentatge de descompte, calculi l'import del descompte i el preu final."
    },
    {
     "t": "p",
     "x": "**Entrada:** un real P (preu original en euros, 0 < P ≤ 5000, amb com a molt 2 decimals) i un enter D (percentatge de descompte, 0 ≤ D ≤ 100)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 2 línies, cada import amb 2 decimals):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Descompte: X euros\nPreu final: F euros",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho sense bucles. Per als decimals fes servir `fixed` i `setprecision` de `<iomanip>`. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s2",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "new",
   "tags": [
    "seqüencial",
    "format"
   ],
   "examples": [
    {
     "in": "59.90 30\n",
     "out": "Descompte: 17.97 euros\nPreu final: 41.93 euros\n"
    },
    {
     "in": "120 15\n",
     "out": "Descompte: 18.00 euros\nPreu final: 102.00 euros\n"
    }
   ],
   "tests": [
    {
     "in": "19.99 0\n",
     "out": "Descompte: 0.00 euros\nPreu final: 19.99 euros\n"
    },
    {
     "in": "35 100\n",
     "out": "Descompte: 35.00 euros\nPreu final: 0.00 euros\n"
    },
    {
     "in": "0.99 40\n",
     "out": "Descompte: 0.40 euros\nPreu final: 0.59 euros\n"
    },
    {
     "in": "4999.99 25\n",
     "out": "Descompte: 1250.00 euros\nPreu final: 3749.99 euros\n"
    },
    {
     "in": "24.95 20\n",
     "out": "Descompte: 4.99 euros\nPreu final: 19.96 euros\n"
    },
    {
     "in": "79.95 35\n",
     "out": "Descompte: 27.98 euros\nPreu final: 51.97 euros\n"
    },
    {
     "in": "13.49 12\n",
     "out": "Descompte: 1.62 euros\nPreu final: 11.87 euros\n"
    },
    {
     "in": "1 5\n",
     "out": "Descompte: 0.05 euros\nPreu final: 0.95 euros\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ]
   },
   "hint": "El descompte és P * D / 100 (amb P double); compte que D / 100 entre enters val 0. El preu final és P menys el descompte.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double P;\n    int D;\n    cin >> P >> D;\n    double descompte = P * D / 100;\n    double preuFinal = P - descompte;\n    cout << fixed << setprecision(2);\n    cout << \"Descompte: \" << descompte << \" euros\" << endl;\n    cout << \"Preu final: \" << preuFinal << \" euros\" << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-f-taxi",
   "title": "EL TAXI DE LA CIUTAT",
   "qb": [
    {
     "t": "p",
     "x": "Una companyia de taxis cobra cada servei així: 2.50 euros de baixada de bandera més 0.45 euros per cada minut de trajecte. Si l'import que en surt no arriba a 6.00 euros, es cobra la tarifa mínima de 6.00 euros."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, donada la durada d'un trajecte en minuts, calculi l'import segons la tarifa i l'import que ha de pagar el client."
    },
    {
     "t": "p",
     "x": "**Entrada:** un enter M (minuts del trajecte, 0 ≤ M ≤ 300)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 2 línies, cada import amb 2 decimals):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Import calculat: C euros\nImport a pagar: P euros",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb un if, sense bucles. Per als decimals fes servir `fixed` i `setprecision` de `<iomanip>`. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s3",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "new",
   "tags": [
    "condicional",
    "format"
   ],
   "examples": [
    {
     "in": "20\n",
     "out": "Import calculat: 11.50 euros\nImport a pagar: 11.50 euros\n"
    },
    {
     "in": "5\n",
     "out": "Import calculat: 4.75 euros\nImport a pagar: 6.00 euros\n"
    }
   ],
   "tests": [
    {
     "in": "0\n",
     "out": "Import calculat: 2.50 euros\nImport a pagar: 6.00 euros\n"
    },
    {
     "in": "1\n",
     "out": "Import calculat: 2.95 euros\nImport a pagar: 6.00 euros\n"
    },
    {
     "in": "7\n",
     "out": "Import calculat: 5.65 euros\nImport a pagar: 6.00 euros\n"
    },
    {
     "in": "8\n",
     "out": "Import calculat: 6.10 euros\nImport a pagar: 6.10 euros\n"
    },
    {
     "in": "13\n",
     "out": "Import calculat: 8.35 euros\nImport a pagar: 8.35 euros\n"
    },
    {
     "in": "33\n",
     "out": "Import calculat: 17.35 euros\nImport a pagar: 17.35 euros\n"
    },
    {
     "in": "45\n",
     "out": "Import calculat: 22.75 euros\nImport a pagar: 22.75 euros\n"
    },
    {
     "in": "300\n",
     "out": "Import calculat: 137.50 euros\nImport a pagar: 137.50 euros\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ]
   },
   "hint": "Calcula l'import amb la fórmula 2.50 + 0.45 * M en un double. L'import a pagar és 6.00 si el calculat és més petit, i el mateix import calculat si no.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int M;\n    cin >> M;\n    double calculat = 2.50 + 0.45 * M;\n    double pagar = calculat;\n    if (calculat < 6.00) {\n        pagar = 6.00;\n    }\n    cout << fixed << setprecision(2);\n    cout << \"Import calculat: \" << calculat << \" euros\" << endl;\n    cout << \"Import a pagar: \" << pagar << \" euros\" << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-m-calculadora",
   "title": "LA CALCULADORA DE BUTXACA",
   "qb": [
    {
     "t": "p",
     "x": "L'Anna està programant una calculadora de butxaca per a la seva germana petita. La calculadora rep una operació escrita en una sola línia: el primer operand, el símbol de l'operació i el segon operand."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que llegeixi l'operació i n'escrigui el resultat. Els operadors vàlids són `+` (suma), `-` (resta), `*` o `x` (multiplicació: tots dos símbols volen dir el mateix) i `/` (divisió amb decimals). Qualsevol altre caràcter és un operador no vàlid."
    },
    {
     "t": "p",
     "x": "**Entrada:** un enter A, un caràcter OP i un enter B, separats per espais (-1000 ≤ A, B ≤ 1000)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 1 línia, sense cap altre text):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Resultat: R",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "R és un enter per a la suma, la resta i la multiplicació, i un real amb 2 decimals per a la divisió. Si OP és `/` i B val 0, en lloc d'aquesta línia s'escriu `Error: divisio per zero`, i si OP no és cap dels operadors vàlids, s'escriu `Error: operador no valid`."
    },
    {
     "t": "p",
     "x": "Fes-ho amb un switch sobre el caràcter OP, sense bucles. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s3",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "switch",
    "condicional"
   ],
   "examples": [
    {
     "in": "7 + 5\n",
     "out": "Resultat: 12\n"
    },
    {
     "in": "7 / 2\n",
     "out": "Resultat: 3.50\n"
    }
   ],
   "tests": [
    {
     "in": "3 - 10\n",
     "out": "Resultat: -7\n"
    },
    {
     "in": "-4 * 6\n",
     "out": "Resultat: -24\n"
    },
    {
     "in": "6 x 7\n",
     "out": "Resultat: 42\n"
    },
    {
     "in": "-1 / 3\n",
     "out": "Resultat: -0.33\n"
    },
    {
     "in": "5 / 0\n",
     "out": "Error: divisio per zero\n"
    },
    {
     "in": "8 ^ 2\n",
     "out": "Error: operador no valid\n"
    },
    {
     "in": "1000 * -1000\n",
     "out": "Resultat: -1000000\n"
    },
    {
     "in": "9 % 0\n",
     "out": "Error: operador no valid\n"
    }
   ],
   "rules": {
    "use": [
     "switch"
    ],
    "avoid": [
     "loops"
    ]
   },
   "hint": "Llegeix A, OP i B amb un sol cin. Al switch, posa dos case seguits ('*' i 'x') perquè comparteixin el codi, i comprova si B val 0 només dins el cas de la divisió; el default recull els operadors no vàlids.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int A, B;\n    char OP;\n    cin >> A >> OP >> B;\n    switch (OP) {\n        case '+':\n            cout << \"Resultat: \" << A + B << endl;\n            break;\n        case '-':\n            cout << \"Resultat: \" << A - B << endl;\n            break;\n        case '*':\n        case 'x':\n            cout << \"Resultat: \" << A * B << endl;\n            break;\n        case '/':\n            if (B == 0) {\n                cout << \"Error: divisio per zero\" << endl;\n            } else {\n                cout << fixed << setprecision(2);\n                cout << \"Resultat: \" << (double) A / B << endl;\n            }\n            break;\n        default:\n            cout << \"Error: operador no valid\" << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-m-fitxes-mult",
   "title": "LES FITXES DE MULTIPLICAR",
   "qb": [
    {
     "t": "p",
     "x": "Un mestre de primària prepara fitxes de repàs de les taules de multiplicar. A cada fitxa no hi posa la taula sencera, sinó només un tros: la taula d'un nombre N des d'un multiplicador inicial INI fins a un multiplicador final FI. A sota hi afegeix la suma de tots els resultats, perquè els alumnes puguin comprovar els seus càlculs."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, entrant N, INI i FI, escrigui el tros de la taula de N que va de N x INI fins a N x FI i, al final, la suma de tots els productes."
    },
    {
     "t": "p",
     "x": "**Entrada:** tres naturals N, INI i FI (1 ≤ N ≤ 100, 1 ≤ INI ≤ FI ≤ 20)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament FI - INI + 2 línies): una línia per a cada multiplicador I, des d'INI fins a FI i en aquest ordre, i a continuació la línia de la suma:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "N x I = R\n...\nSuma: S",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "R és el producte de N per I. Hi ha un espai a cada costat de la `x` i de l'`=`."
    },
    {
     "t": "p",
     "x": "Fes-ho amb un for. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "for"
   ],
   "examples": [
    {
     "in": "7 1 10\n",
     "out": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70\nSuma: 385\n"
    },
    {
     "in": "9 3 5\n",
     "out": "9 x 3 = 27\n9 x 4 = 36\n9 x 5 = 45\nSuma: 108\n"
    }
   ],
   "tests": [
    {
     "in": "1 1 1\n",
     "out": "1 x 1 = 1\nSuma: 1\n"
    },
    {
     "in": "100 20 20\n",
     "out": "100 x 20 = 2000\nSuma: 2000\n"
    },
    {
     "in": "5 1 20\n",
     "out": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50\n5 x 11 = 55\n5 x 12 = 60\n5 x 13 = 65\n5 x 14 = 70\n5 x 15 = 75\n5 x 16 = 80\n5 x 17 = 85\n5 x 18 = 90\n5 x 19 = 95\n5 x 20 = 100\nSuma: 1050\n"
    },
    {
     "in": "12 4 9\n",
     "out": "12 x 4 = 48\n12 x 5 = 60\n12 x 6 = 72\n12 x 7 = 84\n12 x 8 = 96\n12 x 9 = 108\nSuma: 468\n"
    },
    {
     "in": "2 7 8\n",
     "out": "2 x 7 = 14\n2 x 8 = 16\nSuma: 30\n"
    },
    {
     "in": "100 1 20\n",
     "out": "100 x 1 = 100\n100 x 2 = 200\n100 x 3 = 300\n100 x 4 = 400\n100 x 5 = 500\n100 x 6 = 600\n100 x 7 = 700\n100 x 8 = 800\n100 x 9 = 900\n100 x 10 = 1000\n100 x 11 = 1100\n100 x 12 = 1200\n100 x 13 = 1300\n100 x 14 = 1400\n100 x 15 = 1500\n100 x 16 = 1600\n100 x 17 = 1700\n100 x 18 = 1800\n100 x 19 = 1900\n100 x 20 = 2000\nSuma: 21000\n"
    },
    {
     "in": "13 10 15\n",
     "out": "13 x 10 = 130\n13 x 11 = 143\n13 x 12 = 156\n13 x 13 = 169\n13 x 14 = 182\n13 x 15 = 195\nSuma: 975\n"
    }
   ],
   "rules": {
    "use": [
     "for"
    ],
    "avoid": []
   },
   "hint": "Un for amb I des d'INI fins a FI (inclòs): a cada volta escriu la línia i afegeix el producte a un acumulador que comença a 0. La suma s'escriu després del bucle.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N, INI, FI;\n    cin >> N >> INI >> FI;\n    int suma = 0;\n    for (int I = INI; I <= FI; I++) {\n        cout << N << \" x \" << I << \" = \" << N * I << endl;\n        suma = suma + N * I;\n    }\n    cout << \"Suma: \" << suma << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-m-comptador-xifres",
   "title": "EL COMPTADOR DE XIFRES",
   "qb": [
    {
     "t": "p",
     "x": "Una impremta numera els tiquets d'una rifa. Per ajustar la màquina abans d'imprimir cada número, necessita saber quantes xifres té, quantes d'aquestes xifres són zeros i quina és la xifra més gran."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, entrant un número de tiquet N, escrigui aquestes tres dades. Tingueu en compte que el número 0 té 1 xifra, que és un zero."
    },
    {
     "t": "p",
     "x": "**Entrada:** un natural N (0 ≤ N ≤ 2000000000)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 3 línies, sense cap altre text):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Xifres: X\nZeros: Z\nMes gran: G",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb un do...while, extraient les xifres amb `% 10` i `/ 10` (així el 0 també es compta correctament). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s5",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "do-while",
    "dígits"
   ],
   "examples": [
    {
     "in": "1200\n",
     "out": "Xifres: 4\nZeros: 2\nMes gran: 2\n"
    },
    {
     "in": "0\n",
     "out": "Xifres: 1\nZeros: 1\nMes gran: 0\n"
    }
   ],
   "tests": [
    {
     "in": "7\n",
     "out": "Xifres: 1\nZeros: 0\nMes gran: 7\n"
    },
    {
     "in": "10\n",
     "out": "Xifres: 2\nZeros: 1\nMes gran: 1\n"
    },
    {
     "in": "2000000000\n",
     "out": "Xifres: 10\nZeros: 9\nMes gran: 2\n"
    },
    {
     "in": "123456789\n",
     "out": "Xifres: 9\nZeros: 0\nMes gran: 9\n"
    },
    {
     "in": "9090\n",
     "out": "Xifres: 4\nZeros: 2\nMes gran: 9\n"
    },
    {
     "in": "1000000\n",
     "out": "Xifres: 7\nZeros: 6\nMes gran: 1\n"
    },
    {
     "in": "58\n",
     "out": "Xifres: 2\nZeros: 0\nMes gran: 8\n"
    },
    {
     "in": "1999999999\n",
     "out": "Xifres: 10\nZeros: 0\nMes gran: 9\n"
    }
   ],
   "rules": {
    "use": [
     "dowhile"
    ],
    "avoid": []
   },
   "hint": "Amb un do...while el cos s'executa almenys una vegada, i per això el 0 compta com una xifra. A cada volta agafa l'última xifra amb N % 10, actualitza els tres valors i treu-la amb N / 10.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int xifres = 0, zeros = 0, gran = 0;\n    do {\n        int X = N % 10;\n        xifres++;\n        if (X == 0) {\n            zeros++;\n        }\n        if (X > gran) {\n            gran = X;\n        }\n        N = N / 10;\n    } while (N > 0);\n    cout << \"Xifres: \" << xifres << endl;\n    cout << \"Zeros: \" << zeros << endl;\n    cout << \"Mes gran: \" << gran << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-m-bitllets-capicues",
   "title": "ELS BITLLETS CAPICUES",
   "qb": [
    {
     "t": "p",
     "x": "En Pere col·lecciona bitllets de loteria capicues, és a dir, aquells el número dels quals es llegeix igual d'esquerra a dreta que de dreta a esquerra, com el 12321 o el 4554. Per decidir-ho ràpidament, calcula l'invers del número (el que s'obté llegint-ne les xifres al revés) i el compara amb l'original."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, entrant un natural N, calculi el seu invers INV i digui si N és capicua. Els zeros que queden a l'esquerra de l'invers no s'escriuen: l'invers de 1200 és 21."
    },
    {
     "t": "p",
     "x": "**Entrada:** un natural N (0 ≤ N ≤ 999999999)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 2 línies):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Invers: INV\nEs capicua",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "o bé `No es capicua` a la segona línia, si N i INV són diferents."
    },
    {
     "t": "p",
     "x": "Calcula l'invers amb un while, construint-lo com un nombre guardat en una variable (no escrivint les xifres una a una). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s5",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "while",
    "dígits"
   ],
   "examples": [
    {
     "in": "1200\n",
     "out": "Invers: 21\nNo es capicua\n"
    },
    {
     "in": "12321\n",
     "out": "Invers: 12321\nEs capicua\n"
    }
   ],
   "tests": [
    {
     "in": "0\n",
     "out": "Invers: 0\nEs capicua\n"
    },
    {
     "in": "7\n",
     "out": "Invers: 7\nEs capicua\n"
    },
    {
     "in": "10\n",
     "out": "Invers: 1\nNo es capicua\n"
    },
    {
     "in": "999999999\n",
     "out": "Invers: 999999999\nEs capicua\n"
    },
    {
     "in": "123456789\n",
     "out": "Invers: 987654321\nNo es capicua\n"
    },
    {
     "in": "1000000\n",
     "out": "Invers: 1\nNo es capicua\n"
    },
    {
     "in": "4554\n",
     "out": "Invers: 4554\nEs capicua\n"
    },
    {
     "in": "100000001\n",
     "out": "Invers: 100000001\nEs capicua\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Treballa amb una còpia de N (l'original el necessites per comparar). A cada volta fes INV = INV * 10 + còpia % 10 i treu l'última xifra amb còpia / 10.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int copia = N;\n    int INV = 0;\n    while (copia > 0) {\n        INV = INV * 10 + copia % 10;\n        copia = copia / 10;\n    }\n    cout << \"Invers: \" << INV << endl;\n    if (INV == N) {\n        cout << \"Es capicua\" << endl;\n    } else {\n        cout << \"No es capicua\" << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-m-bascula-magatzem",
   "title": "LA BÀSCULA DEL MAGATZEM",
   "qb": [
    {
     "t": "p",
     "x": "En un magatzem de paqueteria, una bàscula pesa els paquets que passen per la cinta i n'envia el pes en grams a l'ordinador. Quan s'acaba la remesa, la bàscula envia un 0."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que llegeixi els pesos fins al 0 i digui quants paquets hi ha hagut, quant pesa el paquet més pesat i quant pesa el més lleuger."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència de naturals (pesos en grams, 1 ≤ pes ≤ 100000) acabada en 0. El 0 marca el final i no és cap paquet. La seqüència pot ser buida (només el 0)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 3 línies):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Paquets: N\nMes pesat: MAX\nMes lleuger: MIN",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Si no hi ha cap paquet, s'escriu una sola línia: `No hi ha paquets`."
    },
    {
     "t": "p",
     "x": "Fes-ho amb un while, llegint el primer pes abans del bucle. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "while",
    "sentinella"
   ],
   "examples": [
    {
     "in": "350 1200 80 4500 950 0\n",
     "out": "Paquets: 5\nMes pesat: 4500\nMes lleuger: 80\n"
    },
    {
     "in": "0\n",
     "out": "No hi ha paquets\n"
    }
   ],
   "tests": [
    {
     "in": "500 0\n",
     "out": "Paquets: 1\nMes pesat: 500\nMes lleuger: 500\n"
    },
    {
     "in": "100000 1 0\n",
     "out": "Paquets: 2\nMes pesat: 100000\nMes lleuger: 1\n"
    },
    {
     "in": "7 7 7 0\n",
     "out": "Paquets: 3\nMes pesat: 7\nMes lleuger: 7\n"
    },
    {
     "in": "1 2 3 4 5 6 7 8 9 10 0\n",
     "out": "Paquets: 10\nMes pesat: 10\nMes lleuger: 1\n"
    },
    {
     "in": "2500\n1800\n3200\n900\n0\n",
     "out": "Paquets: 4\nMes pesat: 3200\nMes lleuger: 900\n"
    },
    {
     "in": "42 100000 99999 0\n",
     "out": "Paquets: 3\nMes pesat: 100000\nMes lleuger: 42\n"
    },
    {
     "in": "10 9 8 0\n",
     "out": "Paquets: 3\nMes pesat: 10\nMes lleuger: 8\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Llegeix el primer pes abans del while i el següent al final de cada volta. Inicialitza el màxim i el mínim amb valors fora del rang (0 i 100001) o amb el primer paquet, i després del bucle mira si el comptador és 0.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int pes;\n    int comptador = 0;\n    int MAX = 0, MIN = 100001;\n    cin >> pes;\n    while (pes != 0) {\n        comptador++;\n        if (pes > MAX) {\n            MAX = pes;\n        }\n        if (pes < MIN) {\n            MIN = pes;\n        }\n        cin >> pes;\n    }\n    if (comptador == 0) {\n        cout << \"No hi ha paquets\" << endl;\n    } else {\n        cout << \"Paquets: \" << comptador << endl;\n        cout << \"Mes pesat: \" << MAX << endl;\n        cout << \"Mes lleuger: \" << MIN << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-m-pin-primer",
   "title": "EL PIN PRIMER",
   "qb": [
    {
     "t": "p",
     "x": "Una aplicació de seguretat només accepta codis PIN que siguin nombres primers. Un nombre és primer si és més gran que 1 i només és divisible per 1 i per ell mateix. Quan el codi no és primer, l'aplicació ajuda l'usuari mostrant-li el número descompost en dos factors: el seu divisor més petit (més gran que 1) i el quocient corresponent."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, entrant el codi N, digui si és primer i, si no ho és, en mostri la descomposició."
    },
    {
     "t": "p",
     "x": "**Entrada:** un natural N (1 ≤ N ≤ 100000)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 1 línia), una d'aquestes dues:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "N es primer\nN no es primer: D x Q",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "D és el divisor més petit de N que és més gran que 1, i Q = N / D. Per a N = 1, que no té cap divisor més gran que 1, s'escriu `1 no es primer`."
    },
    {
     "t": "p",
     "x": "Busca el divisor amb un for. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s5",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "for",
    "condicional"
   ],
   "examples": [
    {
     "in": "97\n",
     "out": "97 es primer\n"
    },
    {
     "in": "91\n",
     "out": "91 no es primer: 7 x 13\n"
    }
   ],
   "tests": [
    {
     "in": "1\n",
     "out": "1 no es primer\n"
    },
    {
     "in": "2\n",
     "out": "2 es primer\n"
    },
    {
     "in": "4\n",
     "out": "4 no es primer: 2 x 2\n"
    },
    {
     "in": "99991\n",
     "out": "99991 es primer\n"
    },
    {
     "in": "100000\n",
     "out": "100000 no es primer: 2 x 50000\n"
    },
    {
     "in": "961\n",
     "out": "961 no es primer: 31 x 31\n"
    },
    {
     "in": "65537\n",
     "out": "65537 es primer\n"
    },
    {
     "in": "9991\n",
     "out": "9991 no es primer: 97 x 103\n"
    }
   ],
   "rules": {
    "use": [
     "for"
    ],
    "avoid": []
   },
   "hint": "Prova divisors des de 2 en endavant i atura't al primer que divideixi N. Si no en trobes cap (n'hi ha prou de provar mentre i * i ≤ N), N és primer. El cas N = 1 va a part.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int D = 0;\n    for (int i = 2; i * i <= N && D == 0; i++) {\n        if (N % i == 0) {\n            D = i;\n        }\n    }\n    if (N == 1) {\n        cout << \"1 no es primer\" << endl;\n    } else if (D == 0) {\n        cout << N << \" es primer\" << endl;\n    } else {\n        cout << N << \" no es primer: \" << D << \" x \" << N / D << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-m-rajoles-quadrades",
   "title": "LES RAJOLES QUADRADES",
   "qb": [
    {
     "t": "p",
     "x": "Un paleta ha d'enrajolar el terra d'una habitació rectangular de A x B centímetres amb rajoles quadrades, totes iguals i sense haver de tallar-ne cap. Per acabar abans, vol fer servir les rajoles més grans possibles. El costat de la rajola més gran que encaixa exactament és el màxim comú divisor (MCD) de A i B."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, entrant les mides A i B, calculi el costat de la rajola i quantes rajoles caldran per cobrir tot el terra."
    },
    {
     "t": "p",
     "x": "**Entrada:** dos naturals A i B (1 ≤ A, B ≤ 10000)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 2 línies):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Costat de la rajola: C\nNombre de rajoles: R",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Calcula el MCD amb l'algorisme d'Euclides fet amb un while: mentre el segon nombre no sigui 0, la parella (a, b) passa a ser (b, a % b); quan b arriba a 0, a és el MCD. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "while"
   ],
   "examples": [
    {
     "in": "300 240\n",
     "out": "Costat de la rajola: 60\nNombre de rajoles: 20\n"
    },
    {
     "in": "70 45\n",
     "out": "Costat de la rajola: 5\nNombre de rajoles: 126\n"
    }
   ],
   "tests": [
    {
     "in": "1 1\n",
     "out": "Costat de la rajola: 1\nNombre de rajoles: 1\n"
    },
    {
     "in": "10000 10000\n",
     "out": "Costat de la rajola: 10000\nNombre de rajoles: 1\n"
    },
    {
     "in": "10000 9999\n",
     "out": "Costat de la rajola: 1\nNombre de rajoles: 99990000\n"
    },
    {
     "in": "17 51\n",
     "out": "Costat de la rajola: 17\nNombre de rajoles: 3\n"
    },
    {
     "in": "240 300\n",
     "out": "Costat de la rajola: 60\nNombre de rajoles: 20\n"
    },
    {
     "in": "1 10000\n",
     "out": "Costat de la rajola: 1\nNombre de rajoles: 10000\n"
    },
    {
     "in": "1024 768\n",
     "out": "Costat de la rajola: 256\nNombre de rajoles: 12\n"
    },
    {
     "in": "9973 7919\n",
     "out": "Costat de la rajola: 1\nNombre de rajoles: 78976187\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Fes l'algorisme sobre còpies de A i B, perquè després necessites les mides originals: el nombre de rajoles és (A / C) * (B / C).",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int A, B;\n    cin >> A >> B;\n    int a = A, b = B;\n    while (b != 0) {\n        int r = a % b;\n        a = b;\n        b = r;\n    }\n    int C = a;\n    cout << \"Costat de la rajola: \" << C << endl;\n    cout << \"Nombre de rajoles: \" << (A / C) * (B / C) << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-m-notes-classe",
   "title": "LES NOTES DE LA CLASSE",
   "qb": [
    {
     "t": "p",
     "x": "En acabar de corregir un examen, una professora entra les notes dels alumnes una darrere l'altra. Com que no sap d'entrada quants exàmens té, quan acaba escriu un -1."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que llegeixi les notes fins al -1 i digui quants alumnes han aprovat (nota més gran o igual que 5), quants han suspès i quina és la nota mitjana de la classe."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència de notes reals (0 ≤ nota ≤ 10) acabada en -1. El -1 marca el final i no és cap nota. La seqüència pot ser buida (només el -1)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 3 línies), amb la mitjana amb 2 decimals:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Aprovats: A\nSuspesos: S\nMitjana: M",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Si no hi ha cap nota, s'escriu una sola línia: `No hi ha notes`."
    },
    {
     "t": "p",
     "x": "Fes-ho amb un while, llegint la primera nota abans del bucle. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "while",
    "sentinella",
    "format"
   ],
   "examples": [
    {
     "in": "7.5 4 5 9.25 3.5 -1\n",
     "out": "Aprovats: 3\nSuspesos: 2\nMitjana: 5.85\n"
    },
    {
     "in": "-1\n",
     "out": "No hi ha notes\n"
    }
   ],
   "tests": [
    {
     "in": "5 -1\n",
     "out": "Aprovats: 1\nSuspesos: 0\nMitjana: 5.00\n"
    },
    {
     "in": "4.99 -1\n",
     "out": "Aprovats: 0\nSuspesos: 1\nMitjana: 4.99\n"
    },
    {
     "in": "10 10 10 -1\n",
     "out": "Aprovats: 3\nSuspesos: 0\nMitjana: 10.00\n"
    },
    {
     "in": "0 0 -1\n",
     "out": "Aprovats: 0\nSuspesos: 2\nMitjana: 0.00\n"
    },
    {
     "in": "6 3 -1\n",
     "out": "Aprovats: 1\nSuspesos: 1\nMitjana: 4.50\n"
    },
    {
     "in": "5.5 6.5 7 2 4.5 8 -1\n",
     "out": "Aprovats: 4\nSuspesos: 2\nMitjana: 5.58\n"
    },
    {
     "in": "1\n2\n3\n-1\n",
     "out": "Aprovats: 0\nSuspesos: 3\nMitjana: 2.00\n"
    },
    {
     "in": "9.9 8.7 -1\n",
     "out": "Aprovats: 2\nSuspesos: 0\nMitjana: 9.30\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Llegeix la primera nota abans del while i la següent al final de cada volta. Acumula la suma i compta aprovats i suspesos; la mitjana és suma / (A + S), que només es pot calcular si hi ha alguna nota.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double nota;\n    double suma = 0;\n    int aprovats = 0, suspesos = 0;\n    cin >> nota;\n    while (nota != -1) {\n        if (nota >= 5) {\n            aprovats++;\n        } else {\n            suspesos++;\n        }\n        suma = suma + nota;\n        cin >> nota;\n    }\n    if (aprovats + suspesos == 0) {\n        cout << \"No hi ha notes\" << endl;\n    } else {\n        cout << \"Aprovats: \" << aprovats << endl;\n        cout << \"Suspesos: \" << suspesos << endl;\n        cout << fixed << setprecision(2);\n        cout << \"Mitjana: \" << suma / (aprovats + suspesos) << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-m-llibres-prestatge",
   "title": "ELS LLIBRES DEL PRESTATGE",
   "qb": [
    {
     "t": "p",
     "x": "Una bibliotecària vol saber de quantes maneres diferents pot ordenar N llibres diferents en un prestatge. La resposta és el factorial de N: N! = 1 x 2 x 3 x ... x N (i, per conveni, 0! = 1). Com que els resultats creixen molt de pressa, també té curiositat per saber en quants zeros acaba el número."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, entrant N, calculi N! i compti quants zeros té al final."
    },
    {
     "t": "p",
     "x": "**Entrada:** un natural N (0 ≤ N ≤ 20)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 2 línies):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "N! = F\nZeros finals: Z",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Calcula el factorial amb un do...while i guarda'l en una variable `long long` (a partir de 13! el resultat ja no cap en un `int`). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s5",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "do-while",
    "dígits"
   ],
   "examples": [
    {
     "in": "5\n",
     "out": "5! = 120\nZeros finals: 1\n"
    },
    {
     "in": "0\n",
     "out": "0! = 1\nZeros finals: 0\n"
    }
   ],
   "tests": [
    {
     "in": "1\n",
     "out": "1! = 1\nZeros finals: 0\n"
    },
    {
     "in": "3\n",
     "out": "3! = 6\nZeros finals: 0\n"
    },
    {
     "in": "4\n",
     "out": "4! = 24\nZeros finals: 0\n"
    },
    {
     "in": "10\n",
     "out": "10! = 3628800\nZeros finals: 2\n"
    },
    {
     "in": "12\n",
     "out": "12! = 479001600\nZeros finals: 2\n"
    },
    {
     "in": "13\n",
     "out": "13! = 6227020800\nZeros finals: 2\n"
    },
    {
     "in": "15\n",
     "out": "15! = 1307674368000\nZeros finals: 3\n"
    },
    {
     "in": "20\n",
     "out": "20! = 2432902008176640000\nZeros finals: 4\n"
    }
   ],
   "rules": {
    "use": [
     "dowhile"
    ],
    "avoid": []
   },
   "hint": "Comença amb F = 1 i i = 1: el do...while fa almenys una multiplicació (per 1), de manera que 0! també surt bé. Per comptar els zeros, divideix una còpia de F per 10 mentre la seva última xifra sigui 0.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    long long F = 1;\n    int i = 1;\n    do {\n        F = F * i;\n        i++;\n    } while (i <= N);\n    cout << N << \"! = \" << F << endl;\n    long long copia = F;\n    int zeros = 0;\n    while (copia % 10 == 0) {\n        zeros++;\n        copia = copia / 10;\n    }\n    cout << \"Zeros finals: \" << zeros << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-m-robot-aspirador",
   "title": "EL ROBOT ASPIRADOR",
   "qb": [
    {
     "t": "p",
     "x": "Un robot aspirador es mou per una quadrícula. Surt de la base, a la posició (0, 0), i va rebent ordres d'una lletra: `N` (nord: la Y augmenta 1), `S` (sud: la Y disminueix 1), `E` (est: la X augmenta 1) i `O` (oest: la X disminueix 1). Les ordres poden arribar en majúscules o en minúscules. L'ordre `F` (o `f`) indica que la seqüència s'ha acabat. Qualsevol altre caràcter és una ordre no vàlida i el robot no es mou."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que llegeixi les ordres fins a la F i digui on ha acabat el robot, quants moviments ha fet i quantes ordres no vàlides ha rebut."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència de caràcters (tots junts o separats per espais o salts de línia) que sempre acaba amb `F` o `f`."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 3 línies):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Posicio final: (X, Y)\nMoviments: M\nOrdres no valides: K",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb un do...while que llegeixi una ordre a cada volta i un switch que la tracti. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "do-while",
    "switch",
    "sentinella"
   ],
   "examples": [
    {
     "in": "NNEESOF\n",
     "out": "Posicio final: (1, 1)\nMoviments: 6\nOrdres no valides: 0\n"
    },
    {
     "in": "n e x e Z s f\n",
     "out": "Posicio final: (2, 0)\nMoviments: 4\nOrdres no valides: 2\n"
    }
   ],
   "tests": [
    {
     "in": "F\n",
     "out": "Posicio final: (0, 0)\nMoviments: 0\nOrdres no valides: 0\n"
    },
    {
     "in": "f\n",
     "out": "Posicio final: (0, 0)\nMoviments: 0\nOrdres no valides: 0\n"
    },
    {
     "in": "OOOOSSF\n",
     "out": "Posicio final: (-4, -2)\nMoviments: 6\nOrdres no valides: 0\n"
    },
    {
     "in": "AB12F\n",
     "out": "Posicio final: (0, 0)\nMoviments: 0\nOrdres no valides: 4\n"
    },
    {
     "in": "nesoF\n",
     "out": "Posicio final: (0, 0)\nMoviments: 4\nOrdres no valides: 0\n"
    },
    {
     "in": "N\nN\nN\nE\nF\n",
     "out": "Posicio final: (1, 3)\nMoviments: 4\nOrdres no valides: 0\n"
    },
    {
     "in": "EEEEEEEEEENNNNNNNNNNf\n",
     "out": "Posicio final: (10, 10)\nMoviments: 20\nOrdres no valides: 0\n"
    },
    {
     "in": "s?w#oF\n",
     "out": "Posicio final: (-1, -1)\nMoviments: 2\nOrdres no valides: 3\n"
    }
   ],
   "rules": {
    "use": [
     "dowhile",
     "switch"
    ],
    "avoid": []
   },
   "hint": "Al switch, posa dos case seguits per a la majúscula i la minúscula de cada ordre. La F també necessita el seu case (que no fa res), perquè si no el default la comptaria com a ordre no vàlida.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char ORD;\n    int X = 0, Y = 0;\n    int moviments = 0, errors = 0;\n    do {\n        cin >> ORD;\n        switch (ORD) {\n            case 'N':\n            case 'n':\n                Y++;\n                moviments++;\n                break;\n            case 'S':\n            case 's':\n                Y--;\n                moviments++;\n                break;\n            case 'E':\n            case 'e':\n                X++;\n                moviments++;\n                break;\n            case 'O':\n            case 'o':\n                X--;\n                moviments++;\n                break;\n            case 'F':\n            case 'f':\n                break;\n            default:\n                errors++;\n        }\n    } while (ORD != 'F' && ORD != 'f');\n    cout << \"Posicio final: (\" << X << \", \" << Y << \")\" << endl;\n    cout << \"Moviments: \" << moviments << endl;\n    cout << \"Ordres no valides: \" << errors << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-d-capicues",
   "title": "ELS QUILÒMETRES CAPICUES",
   "qb": [
    {
     "t": "p",
     "x": "El Pere apunta cada vespre els quilòmetres que marca el comptaquilòmetres del seu cotxe. Li fa molta il·lusió quan surt un nombre **capicua**, és a dir, un nombre que es llegeix igual d'esquerra a dreta que de dreta a esquerra (per exemple 12321, 4554 o 7). Un nombre acabat en 0 (com 10 o 120) mai és capicua, excepte el mateix 0."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que llegeixi la seqüència de lectures del comptaquilòmetres i, per a cada lectura, escrigui si és capicua o no. Al final ha d'escriure quantes lectures capicues hi ha hagut i quantes lectures hi ha en total."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència de naturals X (0 ≤ X ≤ 999999999) acabada en -1 (el -1 no és una lectura). La seqüència pot ser buida."
    },
    {
     "t": "p",
     "x": "**Sortida:** una línia per a cada lectura, en el mateix ordre de l'entrada, i una línia final:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "X es capicua\nX no es capicua\n...\nCapicues: C de T",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb un while per recórrer la seqüència i un altre while, a dins, per girar les xifres de cada nombre. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s5",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "new",
   "tags": [
    "while",
    "sentinella",
    "dígits",
    "bucles niats"
   ],
   "examples": [
    {
     "in": "12321\n4554\n123\n-1\n",
     "out": "12321 es capicua\n4554 es capicua\n123 no es capicua\nCapicues: 2 de 3\n"
    },
    {
     "in": "7 10 0 1001 -1\n",
     "out": "7 es capicua\n10 no es capicua\n0 es capicua\n1001 es capicua\nCapicues: 3 de 4\n"
    }
   ],
   "tests": [
    {
     "in": "-1\n",
     "out": "Capicues: 0 de 0\n"
    },
    {
     "in": "999999999 -1\n",
     "out": "999999999 es capicua\nCapicues: 1 de 1\n"
    },
    {
     "in": "100000001 100000010 -1\n",
     "out": "100000001 es capicua\n100000010 no es capicua\nCapicues: 1 de 2\n"
    },
    {
     "in": "11 12 22 121 1221 12321 123321 1234 -1\n",
     "out": "11 es capicua\n12 no es capicua\n22 es capicua\n121 es capicua\n1221 es capicua\n12321 es capicua\n123321 es capicua\n1234 no es capicua\nCapicues: 6 de 8\n"
    },
    {
     "in": "10 100 1000 20 -1\n",
     "out": "10 no es capicua\n100 no es capicua\n1000 no es capicua\n20 no es capicua\nCapicues: 0 de 4\n"
    },
    {
     "in": "5 -1\n",
     "out": "5 es capicua\nCapicues: 1 de 1\n"
    },
    {
     "in": "123454321 987656789 987656788 -1\n",
     "out": "123454321 es capicua\n987656789 es capicua\n987656788 no es capicua\nCapicues: 2 de 3\n"
    },
    {
     "in": "0 -1\n",
     "out": "0 es capicua\nCapicues: 1 de 1\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Per a cada lectura, fes-ne una còpia i construeix el nombre girat amb invers = invers * 10 + copia % 10; és capicua si el girat és igual a l'original. Reinicia l'invers abans de cada nombre.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int X, copia, invers, total = 0, capicues = 0;\n    cin >> X;\n    while (X != -1) {\n        copia = X;\n        invers = 0;\n        while (copia > 0) {\n            invers = invers * 10 + copia % 10;\n            copia = copia / 10;\n        }\n        total++;\n        if (invers == X) {\n            cout << X << \" es capicua\" << endl;\n            capicues++;\n        } else {\n            cout << X << \" no es capicua\" << endl;\n        }\n        cin >> X;\n    }\n    cout << \"Capicues: \" << capicues << \" de \" << total << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-d-arbre-nadal",
   "title": "L'AVET DE NADAL",
   "qb": [
    {
     "t": "p",
     "x": "Una botiga d'Escaldes vol posar a la pantalla de l'aparador un avet de Nadal dibuixat amb caràcters. L'avet té N pisos: el primer pis (el de dalt) té 1 asterisc, el segon en té 3, el tercer 5, i així successivament (cada pis té 2 asteriscs més que l'anterior). Tots els pisos estan centrats, i el pis de baix comença a la primera columna. Sota l'avet hi ha el tronc, format per T línies amb un sol caràcter `#` centrat sota la punta de l'avet."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que llegeixi N i T i dibuixi l'avet."
    },
    {
     "t": "p",
     "x": "**Entrada:** dos naturals N i T (1 ≤ N ≤ 30, 1 ≤ T ≤ 5)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament N + T línies): la línia i-èsima de l'avet (1 ≤ i ≤ N) té N − i espais seguits de 2·i − 1 asteriscs; cada línia del tronc té N − 1 espais seguits d'un `#`. Cap línia porta espais al final. Per exemple, amb N = 3 i T = 2:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "  *\n ***\n*****\n  #\n  #",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb bucles for niats (un for per a les línies i, a dins, un for per als espais i un altre per als asteriscs). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s6",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "new",
   "tags": [
    "for",
    "bucles niats",
    "format"
   ],
   "examples": [
    {
     "in": "4 1\n",
     "out": "   *\n  ***\n *****\n*******\n   #\n"
    },
    {
     "in": "1 2\n",
     "out": "*\n#\n#\n"
    }
   ],
   "tests": [
    {
     "in": "3 2\n",
     "out": "  *\n ***\n*****\n  #\n  #\n"
    },
    {
     "in": "2 1\n",
     "out": " *\n***\n #\n"
    },
    {
     "in": "5 3\n",
     "out": "    *\n   ***\n  *****\n *******\n*********\n    #\n    #\n    #\n"
    },
    {
     "in": "10 1\n",
     "out": "         *\n        ***\n       *****\n      *******\n     *********\n    ***********\n   *************\n  ***************\n *****************\n*******************\n         #\n"
    },
    {
     "in": "30 5\n",
     "out": "                             *\n                            ***\n                           *****\n                          *******\n                         *********\n                        ***********\n                       *************\n                      ***************\n                     *****************\n                    *******************\n                   *********************\n                  ***********************\n                 *************************\n                ***************************\n               *****************************\n              *******************************\n             *********************************\n            ***********************************\n           *************************************\n          ***************************************\n         *****************************************\n        *******************************************\n       *********************************************\n      ***********************************************\n     *************************************************\n    ***************************************************\n   *****************************************************\n  *******************************************************\n *********************************************************\n***********************************************************\n                             #\n                             #\n                             #\n                             #\n                             #\n"
    },
    {
     "in": "1 1\n",
     "out": "*\n#\n"
    },
    {
     "in": "6 4\n",
     "out": "     *\n    ***\n   *****\n  *******\n *********\n***********\n     #\n     #\n     #\n     #\n"
    }
   ],
   "rules": {
    "use": [
     "for"
    ],
    "avoid": []
   },
   "hint": "Per a cada pis i, primer escriu N − i espais i després 2·i − 1 asteriscs, i acaba la línia amb endl. El tronc és sempre N − 1 espais i un #.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N, T;\n    cin >> N >> T;\n    for (int i = 1; i <= N; i++) {\n        for (int j = 1; j <= N - i; j++) {\n            cout << \" \";\n        }\n        for (int j = 1; j <= 2 * i - 1; j++) {\n            cout << \"*\";\n        }\n        cout << endl;\n    }\n    for (int i = 1; i <= T; i++) {\n        for (int j = 1; j <= N - 1; j++) {\n            cout << \" \";\n        }\n        cout << \"#\" << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-d-divisors",
   "title": "LES FITXES DE DIVISORS",
   "qb": [
    {
     "t": "p",
     "x": "La professora de matemàtiques de 1r d'ESO prepara unes fitxes on, per a cada nombre, han d'aparèixer tots els seus divisors. També vol saber quin dels nombres de la fitxa té més divisors."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que llegeixi una seqüència de naturals acabada en 0 i, per a cada nombre, escrigui una línia amb el nombre, dos punts i tots els seus divisors en ordre creixent. Al final ha d'escriure quin nombre té més divisors i quants en té. Si n'hi ha diversos empatats, cal escriure el primer que ha aparegut."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència de naturals X (1 ≤ X ≤ 10000) acabada en 0. Hi ha com a mínim un nombre abans del 0."
    },
    {
     "t": "p",
     "x": "**Sortida:** una línia per a cada nombre de la seqüència i una línia final. A cada línia de divisors, després dels dos punts hi ha un espai, i **cada divisor va seguit d'un espai** (també l'últim, de manera que aquestes línies acaben amb un espai):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "X: D1 D2 ... DK \n...\nMes divisors: X (K)",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb un while per recórrer la seqüència i un for, a dins, per buscar els divisors de cada nombre. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s6",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "new",
   "tags": [
    "while",
    "for",
    "sentinella",
    "bucles niats",
    "format"
   ],
   "examples": [
    {
     "in": "12 7 9 0\n",
     "out": "12: 1 2 3 4 6 12 \n7: 1 7 \n9: 1 3 9 \nMes divisors: 12 (6)\n"
    },
    {
     "in": "1 0\n",
     "out": "1: 1 \nMes divisors: 1 (1)\n"
    }
   ],
   "tests": [
    {
     "in": "6 8 10 0\n",
     "out": "6: 1 2 3 6 \n8: 1 2 4 8 \n10: 1 2 5 10 \nMes divisors: 6 (4)\n"
    },
    {
     "in": "10000 0\n",
     "out": "10000: 1 2 4 5 8 10 16 20 25 40 50 80 100 125 200 250 400 500 625 1000 1250 2000 2500 5000 10000 \nMes divisors: 10000 (25)\n"
    },
    {
     "in": "5 3 2 0\n",
     "out": "5: 1 5 \n3: 1 3 \n2: 1 2 \nMes divisors: 5 (2)\n"
    },
    {
     "in": "36 60 48 0\n",
     "out": "36: 1 2 3 4 6 9 12 18 36 \n60: 1 2 3 4 5 6 10 12 15 20 30 60 \n48: 1 2 3 4 6 8 12 16 24 48 \nMes divisors: 60 (12)\n"
    },
    {
     "in": "100 1 0\n",
     "out": "100: 1 2 4 5 10 20 25 50 100 \n1: 1 \nMes divisors: 100 (9)\n"
    },
    {
     "in": "7 49 343 2401 0\n",
     "out": "7: 1 7 \n49: 1 7 49 \n343: 1 7 49 343 \n2401: 1 7 49 343 2401 \nMes divisors: 2401 (5)\n"
    },
    {
     "in": "24 30 0\n",
     "out": "24: 1 2 3 4 6 8 12 24 \n30: 1 2 3 5 6 10 15 30 \nMes divisors: 24 (8)\n"
    },
    {
     "in": "9973 9972 0\n",
     "out": "9973: 1 9973 \n9972: 1 2 3 4 6 9 12 18 36 277 554 831 1108 1662 2493 3324 4986 9972 \nMes divisors: 9972 (18)\n"
    }
   ],
   "rules": {
    "use": [
     "while",
     "for"
    ],
    "avoid": []
   },
   "hint": "Per a cada nombre, prova tots els d de 1 a X i escriu els que compleixen X % d == 0 seguits d'un espai, comptant-los. Compara el comptador amb el màxim amb > (no >=) per quedar-te el primer en cas d'empat.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int X, K, millor = 0, maxDivisors = 0;\n    cin >> X;\n    while (X != 0) {\n        cout << X << \": \";\n        K = 0;\n        for (int d = 1; d <= X; d++) {\n            if (X % d == 0) {\n                cout << d << \" \";\n                K++;\n            }\n        }\n        cout << endl;\n        if (K > maxDivisors) {\n            maxDivisors = K;\n            millor = X;\n        }\n        cin >> X;\n    }\n    cout << \"Mes divisors: \" << millor << \" (\" << maxDivisors << \")\" << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-d-ratxa-dau",
   "title": "LA RATXA DEL DAU",
   "qb": [
    {
     "t": "p",
     "x": "En una partida de parxís, el Marc apunta el resultat de cada llançament del dau. Vol saber quina ha estat la ratxa més llarga de resultats iguals seguits: per exemple, a la seqüència 3 5 5 2 2 2 6 la ratxa més llarga és de tres 2 seguits."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que llegeixi els resultats i escrigui el valor de la ratxa més llarga i quants llançaments la formen. Si hi ha diverses ratxes amb la mateixa llargada màxima, cal escriure la que ha aparegut primer."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència d'enters entre 1 i 6 acabada en 0 (el 0 no és un llançament). La seqüència pot ser buida."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 2 línies):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Valor: V\nLlargada: L",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Si la seqüència és buida, cal escriure només la línia `Cap llancament`."
    },
    {
     "t": "p",
     "x": "Fes-ho amb un while, recordant el valor anterior i la llargada de la ratxa actual (la seqüència no es pot guardar). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "new",
   "tags": [
    "while",
    "sentinella",
    "condicional"
   ],
   "examples": [
    {
     "in": "3 5 5 2 2 2 6 6 1 0\n",
     "out": "Valor: 2\nLlargada: 3\n"
    },
    {
     "in": "4 4 1 1 3 0\n",
     "out": "Valor: 4\nLlargada: 2\n"
    }
   ],
   "tests": [
    {
     "in": "0\n",
     "out": "Cap llancament\n"
    },
    {
     "in": "6 0\n",
     "out": "Valor: 6\nLlargada: 1\n"
    },
    {
     "in": "1 2 3 4 5 6 0\n",
     "out": "Valor: 1\nLlargada: 1\n"
    },
    {
     "in": "2 2 2 2 2 0\n",
     "out": "Valor: 2\nLlargada: 5\n"
    },
    {
     "in": "1 3 3 5 5 5 3 3 3 3 0\n",
     "out": "Valor: 3\nLlargada: 4\n"
    },
    {
     "in": "6 6 6 1 1 1 0\n",
     "out": "Valor: 6\nLlargada: 3\n"
    },
    {
     "in": "5 5 4 5 5 5 0\n",
     "out": "Valor: 5\nLlargada: 3\n"
    },
    {
     "in": "1 1 2 2 2 1 1 1 1 2 0\n",
     "out": "Valor: 1\nLlargada: 4\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Guarda l'anterior i la llargada actual: si el nou valor és igual a l'anterior, la ratxa creix; si no, torna a començar a 1. Actualitza el millor només quan la ratxa actual el supera estrictament.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int X, anterior = 0, actual = 0, millorValor = 0, millorLlargada = 0;\n    cin >> X;\n    while (X != 0) {\n        if (X == anterior) {\n            actual++;\n        } else {\n            actual = 1;\n            anterior = X;\n        }\n        if (actual > millorLlargada) {\n            millorLlargada = actual;\n            millorValor = X;\n        }\n        cin >> X;\n    }\n    if (millorLlargada == 0) {\n        cout << \"Cap llancament\" << endl;\n    } else {\n        cout << \"Valor: \" << millorValor << endl;\n        cout << \"Llargada: \" << millorLlargada << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-d-ruta-muntanya",
   "title": "LA RUTA DE MUNTANYA",
   "qb": [
    {
     "t": "p",
     "x": "Un rellotge GPS registra l'altitud (en metres) a diversos punts d'una ruta pel Parc Natural de Sorteny. Volem saber el **desnivell positiu** acumulat (la suma de totes les pujades entre punts consecutius), el **desnivell negatiu** acumulat (la suma de totes les baixades entre punts consecutius, en positiu) i quin és el punt més alt de la ruta. Si dos punts consecutius tenen la mateixa altitud, no compta ni com a pujada ni com a baixada."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que llegeixi les altituds i escrigui el desnivell positiu, el desnivell negatiu i l'altitud del punt més alt amb la seva posició (el punt de sortida és el punt 1). Si l'altitud màxima es repeteix, cal donar la posició de la primera vegada."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència d'enters A (0 ≤ A ≤ 3000) acabada en -1. Hi ha com a mínim una altitud (la del punt de sortida)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 3 línies):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Pujada: P m\nBaixada: B m\nPunt mes alt: A m (punt K)",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb un while, guardant sempre l'altitud del punt anterior (la seqüència no es pot guardar). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "new",
   "tags": [
    "while",
    "sentinella",
    "condicional"
   ],
   "examples": [
    {
     "in": "1250 1400 1380 1620 1500 -1\n",
     "out": "Pujada: 390 m\nBaixada: 140 m\nPunt mes alt: 1620 m (punt 4)\n"
    },
    {
     "in": "2000 -1\n",
     "out": "Pujada: 0 m\nBaixada: 0 m\nPunt mes alt: 2000 m (punt 1)\n"
    }
   ],
   "tests": [
    {
     "in": "1000 1100 1200 1300 -1\n",
     "out": "Pujada: 300 m\nBaixada: 0 m\nPunt mes alt: 1300 m (punt 4)\n"
    },
    {
     "in": "2500 2400 2300 -1\n",
     "out": "Pujada: 0 m\nBaixada: 200 m\nPunt mes alt: 2500 m (punt 1)\n"
    },
    {
     "in": "1500 1800 1500 1800 1500 -1\n",
     "out": "Pujada: 600 m\nBaixada: 600 m\nPunt mes alt: 1800 m (punt 2)\n"
    },
    {
     "in": "0 3000 0 -1\n",
     "out": "Pujada: 3000 m\nBaixada: 3000 m\nPunt mes alt: 3000 m (punt 2)\n"
    },
    {
     "in": "1200 1200 1200 -1\n",
     "out": "Pujada: 0 m\nBaixada: 0 m\nPunt mes alt: 1200 m (punt 1)\n"
    },
    {
     "in": "1600 1750 1700 1900 1850 2100 1950 1400 -1\n",
     "out": "Pujada: 600 m\nBaixada: 800 m\nPunt mes alt: 2100 m (punt 6)\n"
    },
    {
     "in": "2942 2900 -1\n",
     "out": "Pujada: 0 m\nBaixada: 42 m\nPunt mes alt: 2942 m (punt 1)\n"
    },
    {
     "in": "0 -1\n",
     "out": "Pujada: 0 m\nBaixada: 0 m\nPunt mes alt: 0 m (punt 1)\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Llegeix la primera altitud fora del bucle: és l'anterior i el màxim inicial. Dins del bucle, compara cada altitud amb l'anterior per sumar pujada o baixada, porta un comptador de punts per saber la posició del màxim i, al final, l'actual passa a ser l'anterior.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int A, anterior, maxim, punt = 1, posMax = 1, pujada = 0, baixada = 0;\n    cin >> A;\n    anterior = A;\n    maxim = A;\n    cin >> A;\n    while (A != -1) {\n        punt++;\n        if (A > anterior) {\n            pujada = pujada + (A - anterior);\n        } else {\n            baixada = baixada + (anterior - A);\n        }\n        if (A > maxim) {\n            maxim = A;\n            posMax = punt;\n        }\n        anterior = A;\n        cin >> A;\n    }\n    cout << \"Pujada: \" << pujada << \" m\" << endl;\n    cout << \"Baixada: \" << baixada << \" m\" << endl;\n    cout << \"Punt mes alt: \" << maxim << \" m (punt \" << posMax << \")\" << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-d-decimal-binari",
   "title": "DE DECIMAL A BINARI",
   "qb": [
    {
     "t": "p",
     "x": "Els alumnes del cicle d'electrònica han de passar molts nombres a binari. Com que encara no sabem fer servir taules, guardarem el resultat en una variable `long long` que, escrita en decimal, té les mateixes xifres que el nombre en binari: per exemple, el 6 (que en binari és 110) es guarda com el nombre cent deu."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que llegeixi una seqüència de naturals i, per a cada nombre, escrigui la seva representació en binari (sense zeros a l'esquerra) i quantes xifres 1 té. El 0 en binari és 0."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència de naturals N (0 ≤ N ≤ 200000) acabada en -1. Hi ha com a mínim un nombre abans del -1."
    },
    {
     "t": "p",
     "x": "**Sortida:** una línia per a cada nombre, en el mateix ordre de l'entrada:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "N -> B, uns: U",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes servir un while per recórrer la seqüència i un do...while per convertir cada nombre (així el 0 també surt bé): a cada volta, el residu de dividir per 2 és la xifra següent, que s'ha de col·locar a la posició de les unitats, desenes, centenes... No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s5",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "new",
   "tags": [
    "while",
    "do-while",
    "sentinella",
    "dígits",
    "bucles niats"
   ],
   "examples": [
    {
     "in": "6 13 0 -1\n",
     "out": "6 -> 110, uns: 2\n13 -> 1101, uns: 3\n0 -> 0, uns: 0\n"
    },
    {
     "in": "255 256 -1\n",
     "out": "255 -> 11111111, uns: 8\n256 -> 100000000, uns: 1\n"
    }
   ],
   "tests": [
    {
     "in": "1 -1\n",
     "out": "1 -> 1, uns: 1\n"
    },
    {
     "in": "200000 -1\n",
     "out": "200000 -> 110000110101000000, uns: 6\n"
    },
    {
     "in": "131071 -1\n",
     "out": "131071 -> 11111111111111111, uns: 17\n"
    },
    {
     "in": "2 4 8 16 -1\n",
     "out": "2 -> 10, uns: 1\n4 -> 100, uns: 1\n8 -> 1000, uns: 1\n16 -> 10000, uns: 1\n"
    },
    {
     "in": "1023 1024 -1\n",
     "out": "1023 -> 1111111111, uns: 10\n1024 -> 10000000000, uns: 1\n"
    },
    {
     "in": "5 10 20 40 -1\n",
     "out": "5 -> 101, uns: 2\n10 -> 1010, uns: 2\n20 -> 10100, uns: 2\n40 -> 101000, uns: 2\n"
    },
    {
     "in": "0 -1\n",
     "out": "0 -> 0, uns: 0\n"
    },
    {
     "in": "170 85 -1\n",
     "out": "170 -> 10101010, uns: 4\n85 -> 1010101, uns: 4\n"
    }
   ],
   "rules": {
    "use": [
     "while",
     "dowhile"
    ],
    "avoid": []
   },
   "hint": "Fes binari = binari + (N % 2) * posicio, i després posicio = posicio * 10 i N = N / 2. Treballa sobre una còpia del nombre (per poder-lo escriure al final) i reinicia binari, posicio i el comptador d'uns per a cada nombre.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N, copia, uns;\n    long long binari, posicio;\n    cin >> N;\n    while (N != -1) {\n        copia = N;\n        binari = 0;\n        posicio = 1;\n        uns = 0;\n        do {\n            binari = binari + (copia % 2) * posicio;\n            if (copia % 2 == 1) {\n                uns++;\n            }\n            posicio = posicio * 10;\n            copia = copia / 2;\n        } while (copia > 0);\n        cout << N << \" -> \" << binari << \", uns: \" << uns << endl;\n        cin >> N;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-d-primers-menors",
   "title": "LA LLISTA DE PRIMERS",
   "qb": [
    {
     "t": "p",
     "x": "Un club de criptografia necessita llistes de nombres primers per als seus jocs de xifratge. Recordeu que un nombre primer és un natural més gran que 1 que només és divisible per 1 i per ell mateix."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que llegeixi un natural N i escrigui, en una sola línia i en ordre creixent, tots els nombres primers **estrictament més petits** que N, separats per una coma i un espai. A la línia següent ha d'escriure quants n'hi ha."
    },
    {
     "t": "p",
     "x": "**Entrada:** un natural N (2 ≤ N ≤ 5000)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 2 línies):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "P1, P2, P3, ..., PK\nTotal: K",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Després de l'últim primer no hi ha ni coma ni espai. Si no hi ha cap primer més petit que N, la primera línia ha de ser `Cap primer`."
    },
    {
     "t": "p",
     "x": "Fes-ho amb bucles for niats: un for per recórrer els candidats i un altre, a dins, per buscar-ne divisors. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s6",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "new",
   "tags": [
    "for",
    "bucles niats",
    "format"
   ],
   "examples": [
    {
     "in": "20\n",
     "out": "2, 3, 5, 7, 11, 13, 17, 19\nTotal: 8\n"
    },
    {
     "in": "3\n",
     "out": "2\nTotal: 1\n"
    }
   ],
   "tests": [
    {
     "in": "2\n",
     "out": "Cap primer\nTotal: 0\n"
    },
    {
     "in": "4\n",
     "out": "2, 3\nTotal: 2\n"
    },
    {
     "in": "11\n",
     "out": "2, 3, 5, 7\nTotal: 4\n"
    },
    {
     "in": "12\n",
     "out": "2, 3, 5, 7, 11\nTotal: 5\n"
    },
    {
     "in": "100\n",
     "out": "2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97\nTotal: 25\n"
    },
    {
     "in": "30\n",
     "out": "2, 3, 5, 7, 11, 13, 17, 19, 23, 29\nTotal: 10\n"
    },
    {
     "in": "5000\n",
     "out": "2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181, 1187, 1193, 1201, 1213, 1217, 1223, 1229, 1231, 1237, 1249, 1259, 1277, 1279, 1283, 1289, 1291, 1297, 1301, 1303, 1307, 1319, 1321, 1327, 1361, 1367, 1373, 1381, 1399, 1409, 1423, 1427, 1429, 1433, 1439, 1447, 1451, 1453, 1459, 1471, 1481, 1483, 1487, 1489, 1493, 1499, 1511, 1523, 1531, 1543, 1549, 1553, 1559, 1567, 1571, 1579, 1583, 1597, 1601, 1607, 1609, 1613, 1619, 1621, 1627, 1637, 1657, 1663, 1667, 1669, 1693, 1697, 1699, 1709, 1721, 1723, 1733, 1741, 1747, 1753, 1759, 1777, 1783, 1787, 1789, 1801, 1811, 1823, 1831, 1847, 1861, 1867, 1871, 1873, 1877, 1879, 1889, 1901, 1907, 1913, 1931, 1933, 1949, 1951, 1973, 1979, 1987, 1993, 1997, 1999, 2003, 2011, 2017, 2027, 2029, 2039, 2053, 2063, 2069, 2081, 2083, 2087, 2089, 2099, 2111, 2113, 2129, 2131, 2137, 2141, 2143, 2153, 2161, 2179, 2203, 2207, 2213, 2221, 2237, 2239, 2243, 2251, 2267, 2269, 2273, 2281, 2287, 2293, 2297, 2309, 2311, 2333, 2339, 2341, 2347, 2351, 2357, 2371, 2377, 2381, 2383, 2389, 2393, 2399, 2411, 2417, 2423, 2437, 2441, 2447, 2459, 2467, 2473, 2477, 2503, 2521, 2531, 2539, 2543, 2549, 2551, 2557, 2579, 2591, 2593, 2609, 2617, 2621, 2633, 2647, 2657, 2659, 2663, 2671, 2677, 2683, 2687, 2689, 2693, 2699, 2707, 2711, 2713, 2719, 2729, 2731, 2741, 2749, 2753, 2767, 2777, 2789, 2791, 2797, 2801, 2803, 2819, 2833, 2837, 2843, 2851, 2857, 2861, 2879, 2887, 2897, 2903, 2909, 2917, 2927, 2939, 2953, 2957, 2963, 2969, 2971, 2999, 3001, 3011, 3019, 3023, 3037, 3041, 3049, 3061, 3067, 3079, 3083, 3089, 3109, 3119, 3121, 3137, 3163, 3167, 3169, 3181, 3187, 3191, 3203, 3209, 3217, 3221, 3229, 3251, 3253, 3257, 3259, 3271, 3299, 3301, 3307, 3313, 3319, 3323, 3329, 3331, 3343, 3347, 3359, 3361, 3371, 3373, 3389, 3391, 3407, 3413, 3433, 3449, 3457, 3461, 3463, 3467, 3469, 3491, 3499, 3511, 3517, 3527, 3529, 3533, 3539, 3541, 3547, 3557, 3559, 3571, 3581, 3583, 3593, 3607, 3613, 3617, 3623, 3631, 3637, 3643, 3659, 3671, 3673, 3677, 3691, 3697, 3701, 3709, 3719, 3727, 3733, 3739, 3761, 3767, 3769, 3779, 3793, 3797, 3803, 3821, 3823, 3833, 3847, 3851, 3853, 3863, 3877, 3881, 3889, 3907, 3911, 3917, 3919, 3923, 3929, 3931, 3943, 3947, 3967, 3989, 4001, 4003, 4007, 4013, 4019, 4021, 4027, 4049, 4051, 4057, 4073, 4079, 4091, 4093, 4099, 4111, 4127, 4129, 4133, 4139, 4153, 4157, 4159, 4177, 4201, 4211, 4217, 4219, 4229, 4231, 4241, 4243, 4253, 4259, 4261, 4271, 4273, 4283, 4289, 4297, 4327, 4337, 4339, 4349, 4357, 4363, 4373, 4391, 4397, 4409, 4421, 4423, 4441, 4447, 4451, 4457, 4463, 4481, 4483, 4493, 4507, 4513, 4517, 4519, 4523, 4547, 4549, 4561, 4567, 4583, 4591, 4597, 4603, 4621, 4637, 4639, 4643, 4649, 4651, 4657, 4663, 4673, 4679, 4691, 4703, 4721, 4723, 4729, 4733, 4751, 4759, 4783, 4787, 4789, 4793, 4799, 4801, 4813, 4817, 4831, 4861, 4871, 4877, 4889, 4903, 4909, 4919, 4931, 4933, 4937, 4943, 4951, 4957, 4967, 4969, 4973, 4987, 4993, 4999\nTotal: 669\n"
    }
   ],
   "rules": {
    "use": [
     "for"
    ],
    "avoid": []
   },
   "hint": "Per a cada candidat i de 2 a N − 1, suposa que és primer i busca un divisor d entre 2 i i − 1 (n'hi ha prou amb d * d <= i). Per posar bé les comes, escriu \", \" abans de cada primer excepte el primer de tots (quan el comptador encara val 0).",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N, total = 0;\n    bool primer;\n    cin >> N;\n    for (int i = 2; i < N; i++) {\n        primer = true;\n        for (int d = 2; d * d <= i; d++) {\n            if (i % d == 0) {\n                primer = false;\n            }\n        }\n        if (primer) {\n            if (total > 0) {\n                cout << \", \";\n            }\n            cout << i;\n            total++;\n        }\n    }\n    if (total == 0) {\n        cout << \"Cap primer\";\n    }\n    cout << endl;\n    cout << \"Total: \" << total << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-d-dies-glacada",
   "title": "ELS DIES DE GLAÇADA",
   "qb": [
    {
     "t": "p",
     "x": "L'estació meteorològica d'Engolasters registra cada dia la temperatura mínima, en graus i arrodonida a un enter. Un **dia de glaçada** és un dia amb temperatura mínima estrictament per sota de 0 graus (un dia amb 0 graus no ho és)."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que llegeixi les temperatures mínimes d'una sèrie de dies i calculi quants dies de glaçada hi ha hagut, quina ha estat la ratxa més llarga de dies de glaçada consecutius i la temperatura mínima mitjana de tots els dies."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència d'enters T (−40 ≤ T ≤ 40) acabada en 999 (el 999 no és una temperatura). La seqüència pot ser buida."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 3 línies), amb la mitjana M escrita amb 1 decimal:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Dies de glacada: G\nRatxa mes llarga: R\nMitjana: M",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Si la seqüència és buida, cal escriure només la línia `Sense dades`."
    },
    {
     "t": "p",
     "x": "Fes-ho amb un while (la seqüència no es pot guardar). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "new",
   "tags": [
    "while",
    "sentinella",
    "format"
   ],
   "examples": [
    {
     "in": "-3 -1 2 -5 -2 -4 1 0 999\n",
     "out": "Dies de glacada: 5\nRatxa mes llarga: 3\nMitjana: -1.5\n"
    },
    {
     "in": "4 0 2 999\n",
     "out": "Dies de glacada: 0\nRatxa mes llarga: 0\nMitjana: 2.0\n"
    }
   ],
   "tests": [
    {
     "in": "999\n",
     "out": "Sense dades\n"
    },
    {
     "in": "-1 999\n",
     "out": "Dies de glacada: 1\nRatxa mes llarga: 1\nMitjana: -1.0\n"
    },
    {
     "in": "0 0 0 999\n",
     "out": "Dies de glacada: 0\nRatxa mes llarga: 0\nMitjana: 0.0\n"
    },
    {
     "in": "-2 -2 3 -1 -1 -1 -1 5 -3 999\n",
     "out": "Dies de glacada: 7\nRatxa mes llarga: 4\nMitjana: -0.3\n"
    },
    {
     "in": "-10 -12 -8 -14 999\n",
     "out": "Dies de glacada: 4\nRatxa mes llarga: 4\nMitjana: -11.0\n"
    },
    {
     "in": "1 -1 1 -1 1 -1 999\n",
     "out": "Dies de glacada: 3\nRatxa mes llarga: 1\nMitjana: 0.0\n"
    },
    {
     "in": "40 -40 39 999\n",
     "out": "Dies de glacada: 1\nRatxa mes llarga: 1\nMitjana: 13.0\n"
    },
    {
     "in": "-5 -6 2 -1 -2 3 -7 -8 -9 0 999\n",
     "out": "Dies de glacada: 7\nRatxa mes llarga: 3\nMitjana: -3.3\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Porta un comptador de dies, la suma de temperatures, el total de glaçades i la ratxa actual: si T < 0 la ratxa creix (i la compares amb la millor), si no torna a 0. La mitjana és (double) suma / dies, només si dies > 0.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int T, dies = 0, glacades = 0, ratxa = 0, millorRatxa = 0, suma = 0;\n    cin >> T;\n    while (T != 999) {\n        dies++;\n        suma = suma + T;\n        if (T < 0) {\n            glacades++;\n            ratxa++;\n            if (ratxa > millorRatxa) {\n                millorRatxa = ratxa;\n            }\n        } else {\n            ratxa = 0;\n        }\n        cin >> T;\n    }\n    if (dies == 0) {\n        cout << \"Sense dades\" << endl;\n    } else {\n        cout << \"Dies de glacada: \" << glacades << endl;\n        cout << \"Ratxa mes llarga: \" << millorRatxa << endl;\n        cout << \"Mitjana: \" << fixed << setprecision(1) << (double) suma / dies << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-d-medalla-plata",
   "title": "LA MEDALLA DE PLATA",
   "qb": [
    {
     "t": "p",
     "x": "En una competició de salts d'esquí, els jutges donen una puntuació a cada saltador. La medalla d'or és per a la puntuació més alta. La de plata és per a la **segona puntuació més alta diferent**: si diversos saltadors empaten amb la puntuació més alta, tots tenen or i la plata és per a la puntuació següent. Per exemple, amb les puntuacions 85 92 78 92 88, l'or és 92 i la plata és 88."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que llegeixi les puntuacions i escrigui quina és la puntuació d'or i quina la de plata."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència de naturals P (1 ≤ P ≤ 1000) acabada en 0 (el 0 no és una puntuació). La seqüència pot ser buida."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 2 línies):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Or: A\nPlata: B",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Si totes les puntuacions són iguals (o només hi ha un saltador), la segona línia ha de ser `No hi ha plata`. Si la seqüència és buida, cal escriure només la línia `Cap saltador`."
    },
    {
     "t": "p",
     "x": "Fes-ho amb un while, recorrent la seqüència una sola vegada (no es pot guardar). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "new",
   "tags": [
    "while",
    "sentinella",
    "condicional"
   ],
   "examples": [
    {
     "in": "85 92 78 92 88 0\n",
     "out": "Or: 92\nPlata: 88\n"
    },
    {
     "in": "70 70 70 0\n",
     "out": "Or: 70\nNo hi ha plata\n"
    }
   ],
   "tests": [
    {
     "in": "0\n",
     "out": "Cap saltador\n"
    },
    {
     "in": "50 0\n",
     "out": "Or: 50\nNo hi ha plata\n"
    },
    {
     "in": "1 2 0\n",
     "out": "Or: 2\nPlata: 1\n"
    },
    {
     "in": "1000 999 1000 0\n",
     "out": "Or: 1000\nPlata: 999\n"
    },
    {
     "in": "10 20 30 40 50 0\n",
     "out": "Or: 50\nPlata: 40\n"
    },
    {
     "in": "50 45 30 20 10 0\n",
     "out": "Or: 50\nPlata: 45\n"
    },
    {
     "in": "60 90 90 75 80 0\n",
     "out": "Or: 90\nPlata: 80\n"
    },
    {
     "in": "5 5 3 5 0\n",
     "out": "Or: 5\nPlata: 3\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Porta dues variables, primer i segon. Si arriba un valor més gran que el primer, l'antic primer passa a ser el segon; si és més petit que el primer però més gran que el segon, només canvia el segon; si és igual al primer, no canvia res.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int P, primer = 0, segon = 0;\n    cin >> P;\n    while (P != 0) {\n        if (P > primer) {\n            segon = primer;\n            primer = P;\n        } else if (P < primer && P > segon) {\n            segon = P;\n        }\n        cin >> P;\n    }\n    if (primer == 0) {\n        cout << \"Cap saltador\" << endl;\n    } else {\n        cout << \"Or: \" << primer << endl;\n        if (segon == 0) {\n            cout << \"No hi ha plata\" << endl;\n        } else {\n            cout << \"Plata: \" << segon << endl;\n        }\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-x-andorrarun-categories",
   "title": "ANDORRARUN: ABANDONAMENTS PER CATEGORIA",
   "qb": [
    {
     "t": "p",
     "x": "Els dorsals dels participants de la marató AndorraRun (naturals de 4 xifres) estan codificats per categories en funció de l'edat del participant:"
    },
    {
     "t": "list",
     "items": [
      "Categoria jove: dorsals del 3000 al 3999",
      "Categoria mitjana: dorsals del 4000 al 4999",
      "Categoria avançada: dorsals del 5000 al 5999",
      "Categoria mega-avançada: dorsals del 6000 al 9999"
     ]
    },
    {
     "t": "p",
     "x": "Durant la cursa, cada vegada que un participant abandona, l'organització n'anota el dorsal. Quan s'acaba la marató s'entra un -1 com a marca de final."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, a partir de la seqüència de dorsals en l'ordre en què els participants han abandonat, ens digui per a cada categoria quants participants han abandonat i quin ha estat el primer a fer-ho, i quina és la categoria amb més abandonaments (en cas d'empat, la que surt abans a la llista: jove, mitjana, avançada, mega-avançada)."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència de dorsals (enters entre 3000 i 9999, sense repeticions) acabada amb -1. La seqüència pot ser buida (només el -1)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 5 línies):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Joves: NJ (primer: DJ)\nMitjans: NM (primer: DM)\nAvancats: NA (primer: DA)\nMega-avancats: NG (primer: DG)\nMes abandonaments: CATEGORIA",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "on cada N és el nombre d'abandonaments de la categoria i cada D el dorsal del primer participant de la categoria que ha abandonat. Si en una categoria no ha abandonat ningú, la seva línia només porta el nom i el 0 (per exemple `Joves: 0`), sense el parèntesi. CATEGORIA és `Joves`, `Mitjans`, `Avancats` o `Mega-avancats`; si no ha abandonat ningú, l'última línia és `Mes abandonaments: cap`."
    },
    {
     "t": "p",
     "x": "Fes-ho amb un while que llegeixi fins al -1 i un switch sobre la xifra dels milers del dorsal (DORSAL / 1000) per decidir la categoria. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "hard",
   "lv": 4,
   "type": "cpp",
   "src": "new",
   "tags": [
    "while",
    "sentinella",
    "switch",
    "condicional",
    "format"
   ],
   "examples": [
    {
     "in": "3125 5010 4002 3007 6500 9999 5333 3999 -1\n",
     "out": "Joves: 3 (primer: 3125)\nMitjans: 1 (primer: 4002)\nAvancats: 2 (primer: 5010)\nMega-avancats: 2 (primer: 6500)\nMes abandonaments: Joves\n"
    },
    {
     "in": "7001 4500 8020 -1\n",
     "out": "Joves: 0\nMitjans: 1 (primer: 4500)\nAvancats: 0\nMega-avancats: 2 (primer: 7001)\nMes abandonaments: Mega-avancats\n"
    }
   ],
   "tests": [
    {
     "in": "-1\n",
     "out": "Joves: 0\nMitjans: 0\nAvancats: 0\nMega-avancats: 0\nMes abandonaments: cap\n"
    },
    {
     "in": "3000\n-1\n",
     "out": "Joves: 1 (primer: 3000)\nMitjans: 0\nAvancats: 0\nMega-avancats: 0\nMes abandonaments: Joves\n"
    },
    {
     "in": "9999 6000 -1\n",
     "out": "Joves: 0\nMitjans: 0\nAvancats: 0\nMega-avancats: 2 (primer: 9999)\nMes abandonaments: Mega-avancats\n"
    },
    {
     "in": "4001 5001 5002 4002 -1\n",
     "out": "Joves: 0\nMitjans: 2 (primer: 4001)\nAvancats: 2 (primer: 5001)\nMega-avancats: 0\nMes abandonaments: Mitjans\n"
    },
    {
     "in": "6001 5001 4001 3001 -1\n",
     "out": "Joves: 1 (primer: 3001)\nMitjans: 1 (primer: 4001)\nAvancats: 1 (primer: 5001)\nMega-avancats: 1 (primer: 6001)\nMes abandonaments: Joves\n"
    },
    {
     "in": "6001 5001 -1\n",
     "out": "Joves: 0\nMitjans: 0\nAvancats: 1 (primer: 5001)\nMega-avancats: 1 (primer: 6001)\nMes abandonaments: Avancats\n"
    },
    {
     "in": "5999 5000 5500 3999 4999 6000 -1\n",
     "out": "Joves: 1 (primer: 3999)\nMitjans: 1 (primer: 4999)\nAvancats: 3 (primer: 5999)\nMega-avancats: 1 (primer: 6000)\nMes abandonaments: Avancats\n"
    },
    {
     "in": "3500 4500 4501 6100 7100 8100 9100 4502 3501 4503 -1\n",
     "out": "Joves: 2 (primer: 3500)\nMitjans: 4 (primer: 4500)\nAvancats: 0\nMega-avancats: 4 (primer: 6100)\nMes abandonaments: Mitjans\n"
    }
   ],
   "rules": {
    "use": [
     "while",
     "switch"
    ],
    "avoid": []
   },
   "hint": "Porta un comptador i una variable «primer dorsal» per a cada categoria: el primer dorsal només s'apunta quan el comptador encara val 0. Al final, busca el màxim recorrent les categories en ordre i canviant només amb > estricte, així l'empat el guanya la que surt abans.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int DORSAL;\n    int nJoves = 0, nMitjans = 0, nAvancats = 0, nMega = 0;\n    int pJoves = 0, pMitjans = 0, pAvancats = 0, pMega = 0;\n\n    cin >> DORSAL;\n    while (DORSAL != -1) {\n        switch (DORSAL / 1000) {\n            case 3:\n                if (nJoves == 0) pJoves = DORSAL;\n                nJoves++;\n                break;\n            case 4:\n                if (nMitjans == 0) pMitjans = DORSAL;\n                nMitjans++;\n                break;\n            case 5:\n                if (nAvancats == 0) pAvancats = DORSAL;\n                nAvancats++;\n                break;\n            default:\n                if (nMega == 0) pMega = DORSAL;\n                nMega++;\n                break;\n        }\n        cin >> DORSAL;\n    }\n\n    cout << \"Joves: \" << nJoves;\n    if (nJoves > 0) cout << \" (primer: \" << pJoves << \")\";\n    cout << endl;\n    cout << \"Mitjans: \" << nMitjans;\n    if (nMitjans > 0) cout << \" (primer: \" << pMitjans << \")\";\n    cout << endl;\n    cout << \"Avancats: \" << nAvancats;\n    if (nAvancats > 0) cout << \" (primer: \" << pAvancats << \")\";\n    cout << endl;\n    cout << \"Mega-avancats: \" << nMega;\n    if (nMega > 0) cout << \" (primer: \" << pMega << \")\";\n    cout << endl;\n\n    cout << \"Mes abandonaments: \";\n    if (nJoves + nMitjans + nAvancats + nMega == 0) {\n        cout << \"cap\" << endl;\n    } else {\n        int maxim = nJoves;\n        int categoria = 1;\n        if (nMitjans > maxim) {\n            maxim = nMitjans;\n            categoria = 2;\n        }\n        if (nAvancats > maxim) {\n            maxim = nAvancats;\n            categoria = 3;\n        }\n        if (nMega > maxim) {\n            maxim = nMega;\n            categoria = 4;\n        }\n        switch (categoria) {\n            case 1: cout << \"Joves\" << endl; break;\n            case 2: cout << \"Mitjans\" << endl; break;\n            case 3: cout << \"Avancats\" << endl; break;\n            default: cout << \"Mega-avancats\" << endl; break;\n        }\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-x-narcisistes",
   "title": "ELS NOMBRES NARCISISTES",
   "qb": [
    {
     "t": "p",
     "x": "Un nombre és narcisista (o nombre d'Armstrong) quan és igual a la suma de les seves xifres elevades, cadascuna, al nombre de xifres que té. Per exemple, el 153 té 3 xifres i 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153, i el 9474 té 4 xifres i 9^4 + 4^4 + 7^4 + 4^4 = 6561 + 256 + 2401 + 256 = 9474. Tots els nombres d'una sola xifra són narcisistes (7 = 7^1)."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, donat un natural N, escrigui tots els nombres narcisistes entre 1 i N (tots dos inclosos), en ordre creixent i cadascun amb la seva descomposició, i al final quants n'ha trobat."
    },
    {
     "t": "p",
     "x": "**Entrada:** un natural N (1 ≤ N ≤ 100000)."
    },
    {
     "t": "p",
     "x": "**Sortida:** una línia per a cada nombre narcisista X i una última línia amb el total T:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "X = D1^K + D2^K + ... + DK^K\n...\nTotal: T",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "on K és el nombre de xifres de X i D1, D2, ..., DK són les seves xifres d'esquerra a dreta. Hi ha exactament un espai a cada costat del `=` i de cada `+`, i cap espai al final de la línia. Si X té una sola xifra, la línia és `X = X^1` (per exemple `7 = 7^1`)."
    },
    {
     "t": "p",
     "x": "Fes-ho amb bucles niats: un for que recorri els candidats de 1 a N i, a dins, bucles per comptar les xifres, per sumar les potències (calcula-les multiplicant, sense `pow`) i per escriure les xifres d'esquerra a dreta. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s5",
   "level": "hard",
   "lv": 4,
   "type": "cpp",
   "src": "new",
   "tags": [
    "for",
    "bucles niats",
    "dígits",
    "format"
   ],
   "examples": [
    {
     "in": "160\n",
     "out": "1 = 1^1\n2 = 2^1\n3 = 3^1\n4 = 4^1\n5 = 5^1\n6 = 6^1\n7 = 7^1\n8 = 8^1\n9 = 9^1\n153 = 1^3 + 5^3 + 3^3\nTotal: 10\n"
    },
    {
     "in": "500\n",
     "out": "1 = 1^1\n2 = 2^1\n3 = 3^1\n4 = 4^1\n5 = 5^1\n6 = 6^1\n7 = 7^1\n8 = 8^1\n9 = 9^1\n153 = 1^3 + 5^3 + 3^3\n370 = 3^3 + 7^3 + 0^3\n371 = 3^3 + 7^3 + 1^3\n407 = 4^3 + 0^3 + 7^3\nTotal: 13\n"
    }
   ],
   "tests": [
    {
     "in": "1\n",
     "out": "1 = 1^1\nTotal: 1\n"
    },
    {
     "in": "9\n",
     "out": "1 = 1^1\n2 = 2^1\n3 = 3^1\n4 = 4^1\n5 = 5^1\n6 = 6^1\n7 = 7^1\n8 = 8^1\n9 = 9^1\nTotal: 9\n"
    },
    {
     "in": "152\n",
     "out": "1 = 1^1\n2 = 2^1\n3 = 3^1\n4 = 4^1\n5 = 5^1\n6 = 6^1\n7 = 7^1\n8 = 8^1\n9 = 9^1\nTotal: 9\n"
    },
    {
     "in": "153\n",
     "out": "1 = 1^1\n2 = 2^1\n3 = 3^1\n4 = 4^1\n5 = 5^1\n6 = 6^1\n7 = 7^1\n8 = 8^1\n9 = 9^1\n153 = 1^3 + 5^3 + 3^3\nTotal: 10\n"
    },
    {
     "in": "371\n",
     "out": "1 = 1^1\n2 = 2^1\n3 = 3^1\n4 = 4^1\n5 = 5^1\n6 = 6^1\n7 = 7^1\n8 = 8^1\n9 = 9^1\n153 = 1^3 + 5^3 + 3^3\n370 = 3^3 + 7^3 + 0^3\n371 = 3^3 + 7^3 + 1^3\nTotal: 12\n"
    },
    {
     "in": "9474\n",
     "out": "1 = 1^1\n2 = 2^1\n3 = 3^1\n4 = 4^1\n5 = 5^1\n6 = 6^1\n7 = 7^1\n8 = 8^1\n9 = 9^1\n153 = 1^3 + 5^3 + 3^3\n370 = 3^3 + 7^3 + 0^3\n371 = 3^3 + 7^3 + 1^3\n407 = 4^3 + 0^3 + 7^3\n1634 = 1^4 + 6^4 + 3^4 + 4^4\n8208 = 8^4 + 2^4 + 0^4 + 8^4\n9474 = 9^4 + 4^4 + 7^4 + 4^4\nTotal: 16\n"
    },
    {
     "in": "92727\n",
     "out": "1 = 1^1\n2 = 2^1\n3 = 3^1\n4 = 4^1\n5 = 5^1\n6 = 6^1\n7 = 7^1\n8 = 8^1\n9 = 9^1\n153 = 1^3 + 5^3 + 3^3\n370 = 3^3 + 7^3 + 0^3\n371 = 3^3 + 7^3 + 1^3\n407 = 4^3 + 0^3 + 7^3\n1634 = 1^4 + 6^4 + 3^4 + 4^4\n8208 = 8^4 + 2^4 + 0^4 + 8^4\n9474 = 9^4 + 4^4 + 7^4 + 4^4\n54748 = 5^5 + 4^5 + 7^5 + 4^5 + 8^5\n92727 = 9^5 + 2^5 + 7^5 + 2^5 + 7^5\nTotal: 18\n"
    },
    {
     "in": "100000\n",
     "out": "1 = 1^1\n2 = 2^1\n3 = 3^1\n4 = 4^1\n5 = 5^1\n6 = 6^1\n7 = 7^1\n8 = 8^1\n9 = 9^1\n153 = 1^3 + 5^3 + 3^3\n370 = 3^3 + 7^3 + 0^3\n371 = 3^3 + 7^3 + 1^3\n407 = 4^3 + 0^3 + 7^3\n1634 = 1^4 + 6^4 + 3^4 + 4^4\n8208 = 8^4 + 2^4 + 0^4 + 8^4\n9474 = 9^4 + 4^4 + 7^4 + 4^4\n54748 = 5^5 + 4^5 + 7^5 + 4^5 + 8^5\n92727 = 9^5 + 2^5 + 7^5 + 2^5 + 7^5\n93084 = 9^5 + 3^5 + 0^5 + 8^5 + 4^5\nTotal: 19\n"
    }
   ],
   "rules": {
    "use": [
     "for"
    ],
    "avoid": []
   },
   "hint": "Per a cada X: compta les xifres (K) i suma cada xifra elevada a K multiplicant-la K vegades. Per escriure les xifres d'esquerra a dreta, calcula div = 10^(K-1) i ves dividint-lo per 10: cada xifra és (X / div) % 10.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int total = 0;\n    for (int X = 1; X <= N; X++) {\n        // nombre de xifres de X\n        int K = 0;\n        int aux = X;\n        while (aux > 0) {\n            K++;\n            aux = aux / 10;\n        }\n        // suma de les xifres elevades a K\n        int suma = 0;\n        aux = X;\n        while (aux > 0) {\n            int xifra = aux % 10;\n            int potencia = 1;\n            for (int i = 0; i < K; i++) {\n                potencia = potencia * xifra;\n            }\n            suma = suma + potencia;\n            aux = aux / 10;\n        }\n        if (suma == X) {\n            total++;\n            int div = 1;\n            for (int i = 1; i < K; i++) {\n                div = div * 10;\n            }\n            cout << X << \" =\";\n            bool primera = true;\n            while (div > 0) {\n                if (!primera) cout << \" +\";\n                cout << \" \" << (X / div) % 10 << \"^\" << K;\n                primera = false;\n                div = div / 10;\n            }\n            cout << endl;\n        }\n    }\n    cout << \"Total: \" << total << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-x-autocar-etapes",
   "title": "L'AUTOCAR DE LLARG RECORREGUT",
   "qb": [
    {
     "t": "p",
     "x": "Una empresa d'autocars fa rutes llargues que surten d'Andorra i travessen mitja Europa. Cada ruta està formada per N etapes, i de cada etapa se'n coneix la durada en minuts (comptant-hi la parada final). El rellotge digital de l'autocar mostra l'hora en format de 24 hores, sempre amb dues xifres per a les hores i dues per als minuts (per exemple, 07:05)."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, a partir de l'hora de sortida i de la durada de cada etapa, escrigui l'hora que marcarà el rellotge en acabar cada etapa i, si ja no és el mateix dia de la sortida, quants dies han passat. Al final ha d'escriure la durada total del viatge en hores i minuts."
    },
    {
     "t": "p",
     "x": "**Entrada:** l'hora de sortida HH MM (0 ≤ HH ≤ 23, 0 ≤ MM ≤ 59), el nombre d'etapes N (1 ≤ N ≤ 20) i, després, N enters amb la durada de cada etapa en minuts (1 ≤ DUR ≤ 3000)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament N+1 línies):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Etapa 1: HH:MM\nEtapa 2: HH:MM (+D)\n...\nEtapa N: HH:MM\nTotal: H h M min",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "El text ` (+D)` només s'afegeix quan l'etapa acaba D dies després del dia de la sortida (D ≥ 1); si acaba el mateix dia de la sortida, la línia s'acaba just després dels minuts. A la línia del total, H són les hores completes (poden ser més de 24) i M els minuts que sobren (0 ≤ M ≤ 59), tots dos sense zeros a l'esquerra."
    },
    {
     "t": "p",
     "x": "Fes-ho amb un for per a les etapes, i fes servir `setw` i `setfill` de `<iomanip>` per als zeros a l'esquerra del rellotge. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s6",
   "level": "hard",
   "lv": 4,
   "type": "cpp",
   "src": "new",
   "tags": [
    "for",
    "condicional",
    "format"
   ],
   "examples": [
    {
     "in": "8 30\n3\n150 600 420\n",
     "out": "Etapa 1: 11:00\nEtapa 2: 21:00\nEtapa 3: 04:00 (+1)\nTotal: 19 h 30 min\n"
    },
    {
     "in": "0 0\n1\n59\n",
     "out": "Etapa 1: 00:59\nTotal: 0 h 59 min\n"
    }
   ],
   "tests": [
    {
     "in": "23 55\n2\n5 2890\n",
     "out": "Etapa 1: 00:00 (+1)\nEtapa 2: 00:10 (+3)\nTotal: 48 h 15 min\n"
    },
    {
     "in": "0 0\n1\n1440\n",
     "out": "Etapa 1: 00:00 (+1)\nTotal: 24 h 0 min\n"
    },
    {
     "in": "12 0\n1\n1\n",
     "out": "Etapa 1: 12:01\nTotal: 0 h 1 min\n"
    },
    {
     "in": "23 59\n1\n1\n",
     "out": "Etapa 1: 00:00 (+1)\nTotal: 0 h 1 min\n"
    },
    {
     "in": "6 7\n4\n53 1380 7 3000\n",
     "out": "Etapa 1: 07:00\nEtapa 2: 06:00 (+1)\nEtapa 3: 06:07 (+1)\nEtapa 4: 08:07 (+3)\nTotal: 74 h 0 min\n"
    },
    {
     "in": "9 5\n5\n10 20 30 40 50\n",
     "out": "Etapa 1: 09:15\nEtapa 2: 09:35\nEtapa 3: 10:05\nEtapa 4: 10:45\nEtapa 5: 11:35\nTotal: 2 h 30 min\n"
    },
    {
     "in": "22 30\n3\n89 1 1350\n",
     "out": "Etapa 1: 23:59\nEtapa 2: 00:00 (+1)\nEtapa 3: 22:30 (+1)\nTotal: 24 h 0 min\n"
    },
    {
     "in": "23 59\n20\n3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000 3000\n",
     "out": "Etapa 1: 01:59 (+3)\nEtapa 2: 03:59 (+5)\nEtapa 3: 05:59 (+7)\nEtapa 4: 07:59 (+9)\nEtapa 5: 09:59 (+11)\nEtapa 6: 11:59 (+13)\nEtapa 7: 13:59 (+15)\nEtapa 8: 15:59 (+17)\nEtapa 9: 17:59 (+19)\nEtapa 10: 19:59 (+21)\nEtapa 11: 21:59 (+23)\nEtapa 12: 23:59 (+25)\nEtapa 13: 01:59 (+28)\nEtapa 14: 03:59 (+30)\nEtapa 15: 05:59 (+32)\nEtapa 16: 07:59 (+34)\nEtapa 17: 09:59 (+36)\nEtapa 18: 11:59 (+38)\nEtapa 19: 13:59 (+40)\nEtapa 20: 15:59 (+42)\nTotal: 1000 h 0 min\n"
    }
   ],
   "rules": {
    "use": [
     "for"
    ],
    "avoid": []
   },
   "hint": "Treballa en minuts comptats des de la mitjanit del dia de sortida (HH * 60 + MM) i suma-hi la durada de cada etapa. Els dies passats són minuts / 1440, i l'hora del rellotge surt de minuts % 1440. Posa setfill('0') i setw(2) davant de les hores i dels minuts.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int HH, MM, N;\n    cin >> HH >> MM >> N;\n    int inici = HH * 60 + MM;   // minuts des de la mitjanit del dia de sortida\n    int actual = inici;\n    for (int i = 1; i <= N; i++) {\n        int DUR;\n        cin >> DUR;\n        actual = actual + DUR;\n        int dies = actual / 1440;\n        int minutsDia = actual % 1440;\n        cout << \"Etapa \" << i << \": \" << setfill('0') << setw(2) << minutsDia / 60\n             << \":\" << setw(2) << minutsDia % 60;\n        if (dies > 0) {\n            cout << \" (+\" << dies << \")\";\n        }\n        cout << endl;\n    }\n    int durada = actual - inici;\n    cout << \"Total: \" << durada / 60 << \" h \" << durada % 60 << \" min\" << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-x-factures",
   "title": "LA NUMERACIÓ DE LES FACTURES",
   "qb": [
    {
     "t": "p",
     "x": "Una botiga numera les factures de manera que cada factura nova ha de tenir un número estrictament més gran que la que s'ha emès just abans. L'auditor ha detectat que hi ha factures mal numerades i ens demana un programa per revisar-les."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que llegeixi els números de les factures, en l'ordre en què s'han emès, i comprovi si la numeració és estrictament creixent. Hi ha un error cada vegada que una factura té un número més petit o igual que el de la factura immediatament anterior (es compara sempre amb la factura llegida just abans, encara que aquesta també fos errònia). Cal dir quants errors hi ha i on són el primer i l'últim."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència de naturals NUM (1 ≤ NUM ≤ 1000000) acabada amb -1. La seqüència pot ser buida (només el -1)."
    },
    {
     "t": "p",
     "x": "**Sortida:**"
    },
    {
     "t": "list",
     "items": [
      "Si no hi ha cap factura, una única línia: `Cap factura`.",
      "Si hi ha factures però cap error, exactament 2 línies: `Factures: N` i `Numeracio correcta`.",
      "Si hi ha algun error, exactament 4 línies:"
     ]
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Factures: N\nErrors: E\nPrimer error a la posicio P: ANT -> ACT\nUltim error a la posicio Q: ANT -> ACT",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "on N és el nombre de factures, E el nombre d'errors, P i Q les posicions de la factura errònia dins la seqüència (la primera factura és la posició 1), ACT el número d'aquesta factura i ANT el de la factura anterior. Si només hi ha un error, el primer i l'últim són el mateix."
    },
    {
     "t": "p",
     "x": "Fes-ho amb un while que llegeixi fins al -1, guardant sempre el número anterior. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "hard",
   "lv": 4,
   "type": "cpp",
   "src": "new",
   "tags": [
    "while",
    "sentinella",
    "condicional"
   ],
   "examples": [
    {
     "in": "101 102 105 104 106 106 110 -1\n",
     "out": "Factures: 7\nErrors: 2\nPrimer error a la posicio 4: 105 -> 104\nUltim error a la posicio 6: 106 -> 106\n"
    },
    {
     "in": "5 8 13 -1\n",
     "out": "Factures: 3\nNumeracio correcta\n"
    }
   ],
   "tests": [
    {
     "in": "-1\n",
     "out": "Cap factura\n"
    },
    {
     "in": "42 -1\n",
     "out": "Factures: 1\nNumeracio correcta\n"
    },
    {
     "in": "7 7 -1\n",
     "out": "Factures: 2\nErrors: 1\nPrimer error a la posicio 2: 7 -> 7\nUltim error a la posicio 2: 7 -> 7\n"
    },
    {
     "in": "10 9 8 7 -1\n",
     "out": "Factures: 4\nErrors: 3\nPrimer error a la posicio 2: 10 -> 9\nUltim error a la posicio 4: 8 -> 7\n"
    },
    {
     "in": "3 1 2 -1\n",
     "out": "Factures: 3\nErrors: 1\nPrimer error a la posicio 2: 3 -> 1\nUltim error a la posicio 2: 3 -> 1\n"
    },
    {
     "in": "1 1000000 2 3 4 -1\n",
     "out": "Factures: 5\nErrors: 1\nPrimer error a la posicio 3: 1000000 -> 2\nUltim error a la posicio 3: 1000000 -> 2\n"
    },
    {
     "in": "1 2 3 4 5 6 7 8 9 10 -1\n",
     "out": "Factures: 10\nNumeracio correcta\n"
    },
    {
     "in": "50 40 60 55 70 70 80 -1\n",
     "out": "Factures: 7\nErrors: 3\nPrimer error a la posicio 2: 50 -> 40\nUltim error a la posicio 6: 70 -> 70\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Guarda el número anterior i un comptador de posició. Quan ACT <= ANT, compta l'error; si és el primer, guarda'n la posició i els dos números, i, sigui el que sigui, sobreescriu sempre les dades de l'últim error. L'anterior s'actualitza a cada volta, encara que hi hagi error.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int NUM;\n    int anterior = 0;\n    int N = 0, errors = 0;\n    int posPrimer = 0, antPrimer = 0, actPrimer = 0;\n    int posUltim = 0, antUltim = 0, actUltim = 0;\n\n    cin >> NUM;\n    while (NUM != -1) {\n        N++;\n        if (N > 1 && NUM <= anterior) {\n            errors++;\n            if (errors == 1) {\n                posPrimer = N;\n                antPrimer = anterior;\n                actPrimer = NUM;\n            }\n            posUltim = N;\n            antUltim = anterior;\n            actUltim = NUM;\n        }\n        anterior = NUM;\n        cin >> NUM;\n    }\n\n    if (N == 0) {\n        cout << \"Cap factura\" << endl;\n    } else {\n        cout << \"Factures: \" << N << endl;\n        if (errors == 0) {\n            cout << \"Numeracio correcta\" << endl;\n        } else {\n            cout << \"Errors: \" << errors << endl;\n            cout << \"Primer error a la posicio \" << posPrimer << \": \" << antPrimer << \" -> \" << actPrimer << endl;\n            cout << \"Ultim error a la posicio \" << posUltim << \": \" << antUltim << \" -> \" << actUltim << endl;\n        }\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-x-xifra-frequent",
   "title": "LA XIFRA MÉS FREQÜENT",
   "qb": [
    {
     "t": "p",
     "x": "En un concurs de ràdio, els oients envien un número llarg i el locutor ha de dir de seguida quina xifra s'hi repeteix més, quantes xifres diferents fa servir i quines xifres no hi surten mai."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, donat un natural N, digui quina és la xifra que apareix més vegades a N (si n'hi ha diverses d'empatades, la més petita) i quantes vegades hi apareix, quantes xifres diferents té N i quines xifres del 0 al 9 no hi apareixen. El número 0 té una xifra: el 0."
    },
    {
     "t": "p",
     "x": "**Entrada:** un natural N (0 ≤ N ≤ 999999999999999999). Com que pot tenir fins a 18 xifres, llegeix-lo en una variable `long long`."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 3 línies):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Mes frequent: D (R vegades)\nXifres diferents: K\nAbsents: A1 A2 ... AM",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Si R és 1, la primera línia acaba amb `(1 vegada)`. Les xifres absents s'escriuen en ordre creixent, separades per un espai i sense espai al final; si hi surten totes deu, la tercera línia és `Absents: cap`."
    },
    {
     "t": "p",
     "x": "Fes-ho sense taules: un for que provi cada xifra del 0 al 9 i, a dins, un do...while que recorri les xifres de N (amb % 10 i / 10) comptant quantes vegades hi surt; el do...while fa que el 0 també es tracti com un número d'una xifra. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s5",
   "level": "hard",
   "lv": 4,
   "type": "cpp",
   "src": "new",
   "tags": [
    "for",
    "do-while",
    "dígits",
    "bucles niats",
    "format"
   ],
   "examples": [
    {
     "in": "3008800\n",
     "out": "Mes frequent: 0 (4 vegades)\nXifres diferents: 3\nAbsents: 1 2 4 5 6 7 9\n"
    },
    {
     "in": "97531\n",
     "out": "Mes frequent: 1 (1 vegada)\nXifres diferents: 5\nAbsents: 0 2 4 6 8\n"
    }
   ],
   "tests": [
    {
     "in": "0\n",
     "out": "Mes frequent: 0 (1 vegada)\nXifres diferents: 1\nAbsents: 1 2 3 4 5 6 7 8 9\n"
    },
    {
     "in": "7\n",
     "out": "Mes frequent: 7 (1 vegada)\nXifres diferents: 1\nAbsents: 0 1 2 3 4 5 6 8 9\n"
    },
    {
     "in": "1234567890\n",
     "out": "Mes frequent: 0 (1 vegada)\nXifres diferents: 10\nAbsents: cap\n"
    },
    {
     "in": "999999999999999999\n",
     "out": "Mes frequent: 9 (18 vegades)\nXifres diferents: 1\nAbsents: 0 1 2 3 4 5 6 7 8\n"
    },
    {
     "in": "5511\n",
     "out": "Mes frequent: 1 (2 vegades)\nXifres diferents: 2\nAbsents: 0 2 3 4 6 7 8 9\n"
    },
    {
     "in": "100000000000000000\n",
     "out": "Mes frequent: 0 (17 vegades)\nXifres diferents: 2\nAbsents: 2 3 4 5 6 7 8 9\n"
    },
    {
     "in": "98765432100123456\n",
     "out": "Mes frequent: 0 (2 vegades)\nXifres diferents: 10\nAbsents: cap\n"
    },
    {
     "in": "6006\n",
     "out": "Mes frequent: 0 (2 vegades)\nXifres diferents: 2\nAbsents: 1 2 3 4 5 7 8 9\n"
    }
   ],
   "rules": {
    "use": [
     "for",
     "dowhile"
    ],
    "avoid": []
   },
   "hint": "Per a cada xifra d del 0 al 9, recorre una còpia de N amb % 10 i / 10 i compta quantes vegades hi surt d. Si només canvies la millor quan el comptador és estrictament més gran, l'empat el guanya la xifra més petita. Les absents són les d amb comptador 0: fes una segona passada per escriure-les després de les dues primeres línies.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    long long N;\n    cin >> N;\n    int millorXifra = 0, millorVegades = 0;\n    int diferents = 0;\n\n    for (int d = 0; d <= 9; d++) {\n        long long aux = N;\n        int vegades = 0;\n        do {\n            if (aux % 10 == d) vegades++;\n            aux = aux / 10;\n        } while (aux > 0);\n        if (vegades > millorVegades) {\n            millorVegades = vegades;\n            millorXifra = d;\n        }\n        if (vegades > 0) diferents++;\n    }\n\n    cout << \"Mes frequent: \" << millorXifra << \" (\" << millorVegades;\n    if (millorVegades == 1) cout << \" vegada)\" << endl;\n    else cout << \" vegades)\" << endl;\n    cout << \"Xifres diferents: \" << diferents << endl;\n\n    cout << \"Absents:\";\n    if (diferents == 10) {\n        cout << \" cap\";\n    } else {\n        for (int d = 0; d <= 9; d++) {\n            long long aux = N;\n            bool hiSurt = false;\n            do {\n                if (aux % 10 == d) hiSurt = true;\n                aux = aux / 10;\n            } while (aux > 0);\n            if (!hiSurt) cout << \" \" << d;\n        }\n    }\n    cout << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-x-rombe-buit",
   "title": "EL ROMBE BUIT",
   "qb": [
    {
     "t": "p",
     "x": "Un taller de rètols lluminosos vol programar una pantalla que dibuixi el contorn d'un rombe amb asteriscos. El rombe té 2N-1 línies: la del mig és la més ampla (2N-1 caràcters, amb un asterisc a cada extrem) i cada línia per sobre i per sota té dues posicions menys d'amplada que la del costat més proper al mig. La primera i l'última línia tenen un sol asterisc."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, donat N, dibuixi el contorn del rombe. Només es dibuixen els asteriscos de la vora: l'interior queda buit (amb espais)."
    },
    {
     "t": "p",
     "x": "**Entrada:** un natural N (1 ≤ N ≤ 20)."
    },
    {
     "t": "p",
     "x": "**Sortida:** exactament 2N-1 línies. Per exemple, per a N = 4:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "   *\n  * *\n *   *\n*     *\n *   *\n  * *\n   *",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Cada línia comença amb els espais necessaris perquè el rombe quedi centrat (la línia del mig no en porta cap) i s'acaba just després de l'últim asterisc, **sense espais al final**. Si N és 1, la sortida és un sol asterisc."
    },
    {
     "t": "p",
     "x": "Fes-ho amb bucles for niats, escrivint els espais i els asteriscos d'un en un. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s6",
   "level": "hard",
   "lv": 4,
   "type": "cpp",
   "src": "new",
   "tags": [
    "for",
    "bucles niats",
    "format"
   ],
   "examples": [
    {
     "in": "3\n",
     "out": "  *\n * *\n*   *\n * *\n  *\n"
    },
    {
     "in": "5\n",
     "out": "    *\n   * *\n  *   *\n *     *\n*       *\n *     *\n  *   *\n   * *\n    *\n"
    }
   ],
   "tests": [
    {
     "in": "1\n",
     "out": "*\n"
    },
    {
     "in": "2\n",
     "out": " *\n* *\n *\n"
    },
    {
     "in": "4\n",
     "out": "   *\n  * *\n *   *\n*     *\n *   *\n  * *\n   *\n"
    },
    {
     "in": "6\n",
     "out": "     *\n    * *\n   *   *\n  *     *\n *       *\n*         *\n *       *\n  *     *\n   *   *\n    * *\n     *\n"
    },
    {
     "in": "9\n",
     "out": "        *\n       * *\n      *   *\n     *     *\n    *       *\n   *         *\n  *           *\n *             *\n*               *\n *             *\n  *           *\n   *         *\n    *       *\n     *     *\n      *   *\n       * *\n        *\n"
    },
    {
     "in": "13\n",
     "out": "            *\n           * *\n          *   *\n         *     *\n        *       *\n       *         *\n      *           *\n     *             *\n    *               *\n   *                 *\n  *                   *\n *                     *\n*                       *\n *                     *\n  *                   *\n   *                 *\n    *               *\n     *             *\n      *           *\n       *         *\n        *       *\n         *     *\n          *   *\n           * *\n            *\n"
    },
    {
     "in": "20\n",
     "out": "                   *\n                  * *\n                 *   *\n                *     *\n               *       *\n              *         *\n             *           *\n            *             *\n           *               *\n          *                 *\n         *                   *\n        *                     *\n       *                       *\n      *                         *\n     *                           *\n    *                             *\n   *                               *\n  *                                 *\n *                                   *\n*                                     *\n *                                   *\n  *                                 *\n   *                               *\n    *                             *\n     *                           *\n      *                         *\n       *                       *\n        *                     *\n         *                   *\n          *                 *\n           *               *\n            *             *\n             *           *\n              *         *\n               *       *\n                *     *\n                 *   *\n                  * *\n                   *\n"
    }
   ],
   "rules": {
    "use": [
     "for"
    ],
    "avoid": []
   },
   "hint": "Numera les línies i = 1, 2, ..., N, ..., 2, 1 (per a les de sota, i = 2N - fila). Cada línia té N - i espais, un asterisc i, si i > 1, 2i - 3 espais i un altre asterisc. No escriguis res després de l'últim asterisc.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    for (int fila = 1; fila <= 2 * N - 1; fila++) {\n        int i;   // 1, 2, ..., N, ..., 2, 1\n        if (fila <= N) i = fila;\n        else i = 2 * N - fila;\n        for (int j = 0; j < N - i; j++) {\n            cout << \" \";\n        }\n        cout << \"*\";\n        if (i > 1) {\n            for (int j = 0; j < 2 * i - 3; j++) {\n                cout << \" \";\n            }\n            cout << \"*\";\n        }\n        cout << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-x-cua-supermercat",
   "title": "LA CUA DEL SUPERMERCAT",
   "qb": [
    {
     "t": "p",
     "x": "En un supermercat petit només hi ha una caixa oberta. De cada client sabem el minut en què arriba a la cua (comptat des de l'obertura) i quants minuts triga la caixera a cobrar-lo. Els clients s'atenen per ordre d'arribada: si quan arriba un client la caixa és lliure, se l'atén immediatament; si no, ha d'esperar que acabin tots els que té davant. L'espera d'un client és el temps que passa des que arriba fins que el comencen a atendre."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que simuli la cua i ens digui quants clients hi ha hagut, l'espera total i la mitjana, l'espera més llarga i quin client l'ha patida, i el minut en què la caixa queda lliure després d'atendre l'últim client."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència de parelles ARR SERV (0 ≤ ARR ≤ 10000, 1 ≤ SERV ≤ 60), en ordre d'arribada (ARR no decreixent), acabada amb un -1 en lloc de l'ARR. La seqüència pot ser buida (només el -1)."
    },
    {
     "t": "p",
     "x": "**Sortida:** si no hi ha cap client, una única línia `Cap client`. Altrament, exactament 5 línies:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Clients: N\nEspera total: T min\nEspera mitjana: M min\nEspera maxima: X min (client K)\nCaixa lliure al minut F",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "M amb 2 decimals. Els clients es numeren des de 1 en ordre d'arribada; si diversos clients empaten amb l'espera màxima, K és el primer d'ells (si ningú no ha esperat, X és 0 i K és 1)."
    },
    {
     "t": "p",
     "x": "Fes-ho amb un while que llegeixi fins al -1, portant en una variable el minut en què la caixa quedarà lliure. Per als decimals fes servir `fixed` i `setprecision`. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "hard",
   "lv": 4,
   "type": "cpp",
   "src": "new",
   "tags": [
    "while",
    "sentinella",
    "format"
   ],
   "examples": [
    {
     "in": "0 5\n2 3\n3 4\n15 2\n16 1\n-1\n",
     "out": "Clients: 5\nEspera total: 9 min\nEspera mitjana: 1.80 min\nEspera maxima: 5 min (client 3)\nCaixa lliure al minut 18\n"
    },
    {
     "in": "10 4\n10 4\n10 4\n-1\n",
     "out": "Clients: 3\nEspera total: 12 min\nEspera mitjana: 4.00 min\nEspera maxima: 8 min (client 3)\nCaixa lliure al minut 22\n"
    }
   ],
   "tests": [
    {
     "in": "-1\n",
     "out": "Cap client\n"
    },
    {
     "in": "7 10\n-1\n",
     "out": "Clients: 1\nEspera total: 0 min\nEspera mitjana: 0.00 min\nEspera maxima: 0 min (client 1)\nCaixa lliure al minut 17\n"
    },
    {
     "in": "0 1\n5 1\n10 1\n-1\n",
     "out": "Clients: 3\nEspera total: 0 min\nEspera mitjana: 0.00 min\nEspera maxima: 0 min (client 1)\nCaixa lliure al minut 11\n"
    },
    {
     "in": "0 5\n5 5\n10 5\n-1\n",
     "out": "Clients: 3\nEspera total: 0 min\nEspera mitjana: 0.00 min\nEspera maxima: 0 min (client 1)\nCaixa lliure al minut 15\n"
    },
    {
     "in": "0 10\n1 5\n6 1\n10 1\n-1\n",
     "out": "Clients: 4\nEspera total: 24 min\nEspera mitjana: 6.00 min\nEspera maxima: 9 min (client 2)\nCaixa lliure al minut 17\n"
    },
    {
     "in": "0 60\n0 60\n0 60\n0 60\n0 60\n0 60\n-1\n",
     "out": "Clients: 6\nEspera total: 900 min\nEspera mitjana: 150.00 min\nEspera maxima: 300 min (client 6)\nCaixa lliure al minut 360\n"
    },
    {
     "in": "0 1\n0 1\n5 3\n-1\n",
     "out": "Clients: 3\nEspera total: 1 min\nEspera mitjana: 0.33 min\nEspera maxima: 1 min (client 2)\nCaixa lliure al minut 8\n"
    },
    {
     "in": "3 4\n5 2\n5 2\n20 5\n21 5\n22 5\n9990 60\n10000 1\n-1\n",
     "out": "Clients: 8\nEspera total: 68 min\nEspera mitjana: 8.50 min\nEspera maxima: 50 min (client 8)\nCaixa lliure al minut 10051\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Porta una variable amb el minut en què la caixa queda lliure (al principi, 0). Cada client comença a ser atès a inici = el més gran entre ARR i aquest minut; la seva espera és inici - ARR i la caixa queda lliure a inici + SERV.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int ARR, SERV;\n    int N = 0;\n    int lliure = 0;          // minut en què la caixa queda lliure\n    int total = 0;\n    int maxEspera = -1, clientMax = 0;\n\n    cin >> ARR;\n    while (ARR != -1) {\n        cin >> SERV;\n        N++;\n        int inici;\n        if (ARR >= lliure) inici = ARR;\n        else inici = lliure;\n        int espera = inici - ARR;\n        total = total + espera;\n        if (espera > maxEspera) {\n            maxEspera = espera;\n            clientMax = N;\n        }\n        lliure = inici + SERV;\n        cin >> ARR;\n    }\n\n    if (N == 0) {\n        cout << \"Cap client\" << endl;\n    } else {\n        cout << \"Clients: \" << N << endl;\n        cout << \"Espera total: \" << total << \" min\" << endl;\n        cout << \"Espera mitjana: \" << fixed << setprecision(2) << (double)total / N << \" min\" << endl;\n        cout << \"Espera maxima: \" << maxEspera << \" min (client \" << clientMax << \")\" << endl;\n        cout << \"Caixa lliure al minut \" << lliure << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-x-nombres-amics",
   "title": "ELS NOMBRES AMICS",
   "qb": [
    {
     "t": "p",
     "x": "Dos nombres naturals diferents A i B són amics si la suma dels divisors propis d'A (tots els seus divisors excepte el mateix A) és B, i la suma dels divisors propis de B és A. Per exemple, 220 i 284 són amics: els divisors propis de 220 són 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 i 110, que sumen 284, i els de 284 són 1, 2, 4, 71 i 142, que sumen 220. Un nombre perfecte (com el 6 o el 28) no és amic de si mateix, perquè els dos nombres han de ser diferents."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, donat un natural N, escrigui totes les parelles de nombres amics en què tots dos nombres són més petits o iguals que N, i al final quantes parelles ha trobat."
    },
    {
     "t": "p",
     "x": "**Entrada:** un natural N (1 ≤ N ≤ 3000)."
    },
    {
     "t": "p",
     "x": "**Sortida:** una línia per a cada parella i una última línia amb el total P:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "A i B\n...\nParelles: P",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "A cada parella, A < B. Cada parella s'escriu una sola vegada, i les parelles van ordenades de més petita a més gran segons A. Si no n'hi ha cap, només s'escriu la línia `Parelles: 0`."
    },
    {
     "t": "p",
     "x": "Fes-ho amb bucles niats: un for que recorri els candidats A i, a dins, un for que sumi els divisors propis d'A i, quan calgui, un altre que sumi els de la suma obtinguda. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s6",
   "level": "hard",
   "lv": 4,
   "type": "cpp",
   "src": "new",
   "tags": [
    "for",
    "bucles niats"
   ],
   "examples": [
    {
     "in": "300\n",
     "out": "220 i 284\nParelles: 1\n"
    },
    {
     "in": "2000\n",
     "out": "220 i 284\n1184 i 1210\nParelles: 2\n"
    }
   ],
   "tests": [
    {
     "in": "1\n",
     "out": "Parelles: 0\n"
    },
    {
     "in": "28\n",
     "out": "Parelles: 0\n"
    },
    {
     "in": "283\n",
     "out": "Parelles: 0\n"
    },
    {
     "in": "284\n",
     "out": "220 i 284\nParelles: 1\n"
    },
    {
     "in": "1209\n",
     "out": "220 i 284\nParelles: 1\n"
    },
    {
     "in": "1210\n",
     "out": "220 i 284\n1184 i 1210\nParelles: 2\n"
    },
    {
     "in": "2923\n",
     "out": "220 i 284\n1184 i 1210\nParelles: 2\n"
    },
    {
     "in": "3000\n",
     "out": "220 i 284\n1184 i 1210\n2620 i 2924\nParelles: 3\n"
    }
   ],
   "rules": {
    "use": [
     "for"
    ],
    "avoid": []
   },
   "hint": "Per a cada A, calcula B = suma dels divisors propis d'A. Només cal continuar si A < B i B ≤ N (així cada parella surt un sol cop, en ordre, i els perfectes queden fora); llavors comprova que la suma dels divisors propis de B sigui A.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int parelles = 0;\n    for (int A = 1; A <= N; A++) {\n        int B = 0;\n        for (int d = 1; d <= A / 2; d++) {\n            if (A % d == 0) {\n                B = B + d;\n            }\n        }\n        if (B > A && B <= N) {\n            int sumaB = 0;\n            for (int d = 1; d <= B / 2; d++) {\n                if (B % d == 0) {\n                    sumaB = sumaB + d;\n                }\n            }\n            if (sumaB == A) {\n                cout << A << \" i \" << B << endl;\n                parelles++;\n            }\n        }\n    }\n    cout << \"Parelles: \" << parelles << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-s3-preu-alt",
   "title": "EL PREU MÉS ALT",
   "qb": [
    {
     "t": "p",
     "x": "Dues botigues del barri venen el mateix patinet elèctric. Abans de comparar ofertes, la Marta vol saber quin dels dos preus és el més alt."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, entrats els dos preus, escrigui el més alt."
    },
    {
     "t": "p",
     "x": "**Entrada:** dos enters P1 i P2 (preus en euros, 0 ≤ P1, P2 ≤ 5000)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 1 línia):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "El preu mes alt es P",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Si els dos preus són iguals, s'escriu aquest preu. Fes-ho amb un condicional, sense bucles. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s3",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "new",
   "tags": [
    "condicional"
   ],
   "examples": [
    {
     "in": "350 420\n",
     "out": "El preu mes alt es 420\n"
    },
    {
     "in": "99 12\n",
     "out": "El preu mes alt es 99\n"
    }
   ],
   "tests": [
    {
     "in": "0 0\n",
     "out": "El preu mes alt es 0\n"
    },
    {
     "in": "5000 4999\n",
     "out": "El preu mes alt es 5000\n"
    },
    {
     "in": "1 2\n",
     "out": "El preu mes alt es 2\n"
    },
    {
     "in": "700 700\n",
     "out": "El preu mes alt es 700\n"
    },
    {
     "in": "4999 5000\n",
     "out": "El preu mes alt es 5000\n"
    },
    {
     "in": "0 5000\n",
     "out": "El preu mes alt es 5000\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ]
   },
   "hint": "Un if … else que compari P1 amb P2: si P1 és més gran o igual, el més alt és P1; si no, P2.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int P1, P2;\n    cin >> P1 >> P2;\n    int maxim;\n    if (P1 >= P2) {\n        maxim = P1;\n    } else {\n        maxim = P2;\n    }\n    cout << \"El preu mes alt es \" << maxim << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-s3-termometre",
   "title": "EL TERMÒMETRE DEL REFUGI",
   "qb": [
    {
     "t": "p",
     "x": "Al refugi de muntanya hi ha un termòmetre digital que, a més de la temperatura, mostra un missatge per als excursionistes."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, entrada la temperatura, digui si és sota zero, exactament zero o sobre zero."
    },
    {
     "t": "p",
     "x": "**Entrada:** un enter T (temperatura en graus, -60 ≤ T ≤ 50)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 1 línia): `Sota zero`, `Zero graus` o `Sobre zero`."
    },
    {
     "t": "p",
     "x": "Fes-ho amb una cadena de condicionals (if … else if … else), sense bucles. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s3",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "new",
   "tags": [
    "condicional"
   ],
   "examples": [
    {
     "in": "-7\n",
     "out": "Sota zero\n"
    },
    {
     "in": "0\n",
     "out": "Zero graus\n"
    }
   ],
   "tests": [
    {
     "in": "12\n",
     "out": "Sobre zero\n"
    },
    {
     "in": "-60\n",
     "out": "Sota zero\n"
    },
    {
     "in": "50\n",
     "out": "Sobre zero\n"
    },
    {
     "in": "1\n",
     "out": "Sobre zero\n"
    },
    {
     "in": "-1\n",
     "out": "Sota zero\n"
    },
    {
     "in": "25\n",
     "out": "Sobre zero\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ]
   },
   "hint": "Tres casos excloents: pregunta per T < 0, després per T == 0, i la resta és sobre zero.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int T;\n    cin >> T;\n    if (T < 0) {\n        cout << \"Sota zero\" << endl;\n    } else if (T == 0) {\n        cout << \"Zero graus\" << endl;\n    } else {\n        cout << \"Sobre zero\" << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-s3-nota-lletra",
   "title": "LA NOTA EN LLETRES",
   "qb": [
    {
     "t": "p",
     "x": "Una escola d'idiomes posa les notes amb una lletra de la A a la F, però el butlletí que s'envia a les famílies les ha de mostrar en paraules."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, entrada la lletra, escrigui la qualificació corresponent: A `Excellent`, B `Notable`, C `Be`, D `Suficient`, E `Insuficient` i F `Molt deficient`. La lletra pot arribar en majúscula o en minúscula. Si no és cap d'aquestes lletres, cal escriure `Nota no valida`."
    },
    {
     "t": "p",
     "x": "**Entrada:** un caràcter L."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 1 línia): la qualificació o el missatge d'error."
    },
    {
     "t": "p",
     "x": "Fes-ho amb un switch (agrupa la majúscula i la minúscula de cada lletra en dos case seguits), sense bucles. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s3",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "switch",
    "condicional"
   ],
   "examples": [
    {
     "in": "B\n",
     "out": "Notable\n"
    },
    {
     "in": "f\n",
     "out": "Molt deficient\n"
    }
   ],
   "tests": [
    {
     "in": "A\n",
     "out": "Excellent\n"
    },
    {
     "in": "a\n",
     "out": "Excellent\n"
    },
    {
     "in": "c\n",
     "out": "Be\n"
    },
    {
     "in": "D\n",
     "out": "Suficient\n"
    },
    {
     "in": "E\n",
     "out": "Insuficient\n"
    },
    {
     "in": "e\n",
     "out": "Insuficient\n"
    },
    {
     "in": "G\n",
     "out": "Nota no valida\n"
    },
    {
     "in": "7\n",
     "out": "Nota no valida\n"
    }
   ],
   "rules": {
    "use": [
     "switch"
    ],
    "avoid": [
     "loops"
    ]
   },
   "hint": "Dos case seguits sense res entremig ('A' i 'a') comparteixen el mateix codi. No oblidis el break de cada grup, i el default per a la resta.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char L;\n    cin >> L;\n    switch (L) {\n        case 'A':\n        case 'a':\n            cout << \"Excellent\" << endl;\n            break;\n        case 'B':\n        case 'b':\n            cout << \"Notable\" << endl;\n            break;\n        case 'C':\n        case 'c':\n            cout << \"Be\" << endl;\n            break;\n        case 'D':\n        case 'd':\n            cout << \"Suficient\" << endl;\n            break;\n        case 'E':\n        case 'e':\n            cout << \"Insuficient\" << endl;\n            break;\n        case 'F':\n        case 'f':\n            cout << \"Molt deficient\" << endl;\n            break;\n        default:\n            cout << \"Nota no valida\" << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-s3-sou-infermeres",
   "title": "EL SOU DE LES INFERMERES",
   "qb": [
    {
     "t": "p",
     "x": "A l'hospital, el sou mensual del personal d'infermeria es calcula a partir de les hores treballades i de les guàrdies de nit. Les primeres 140 hores del mes es paguen a 15,00 € l'hora; les hores que passen de 140 són hores extres i es paguen a 22,50 € l'hora. A més, cada guàrdia de nit afegeix 40,00 €, i qui fa més de 8 guàrdies en un mes cobra un plus fix de 100,00 €."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, entrades les hores i les guàrdies del mes, calculi les hores extres i el sou."
    },
    {
     "t": "p",
     "x": "**Entrada:** dos enters H (hores treballades, 0 ≤ H ≤ 300) i G (guàrdies de nit, 0 ≤ G ≤ 31)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 2 línies, el sou amb 2 decimals):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Hores extres: E\nSou: X.XX",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb condicionals, sense bucles. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s3",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "condicional",
    "format"
   ],
   "examples": [
    {
     "in": "150 3\n",
     "out": "Hores extres: 10\nSou: 2445.00\n"
    },
    {
     "in": "120 10\n",
     "out": "Hores extres: 0\nSou: 2300.00\n"
    }
   ],
   "tests": [
    {
     "in": "0 0\n",
     "out": "Hores extres: 0\nSou: 0.00\n"
    },
    {
     "in": "140 8\n",
     "out": "Hores extres: 0\nSou: 2420.00\n"
    },
    {
     "in": "141 9\n",
     "out": "Hores extres: 1\nSou: 2582.50\n"
    },
    {
     "in": "300 31\n",
     "out": "Hores extres: 160\nSou: 7040.00\n"
    },
    {
     "in": "140 0\n",
     "out": "Hores extres: 0\nSou: 2100.00\n"
    },
    {
     "in": "80 2\n",
     "out": "Hores extres: 0\nSou: 1280.00\n"
    },
    {
     "in": "200 0\n",
     "out": "Hores extres: 60\nSou: 3450.00\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ]
   },
   "hint": "Separa les hores en normals (com a màxim 140) i extres (les que passen de 140, o 0). El plus de 100 € només si G > 8.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int H, G;\n    cin >> H >> G;\n    int normals, extres;\n    if (H > 140) {\n        normals = 140;\n        extres = H - 140;\n    } else {\n        normals = H;\n        extres = 0;\n    }\n    double sou = normals * 15.00 + extres * 22.50 + G * 40.00;\n    if (G > 8) {\n        sou = sou + 100.00;\n    }\n    cout << \"Hores extres: \" << extres << endl;\n    cout << fixed << setprecision(2) << \"Sou: \" << sou << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-s4-temp-maxima",
   "title": "LA TEMPERATURA MÀXIMA",
   "qb": [
    {
     "t": "p",
     "x": "Una estació meteorològica envia cada dia la temperatura màxima registrada. Quan s'acaba la campanya de mesures, envia el valor especial -999, que no és cap temperatura."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que digui quina ha estat la temperatura més alta de la campanya i quants dies s'han enviat."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència d'enters (temperatures, entre -50 i 50) acabada amb -999. Hi ha com a mínim una temperatura abans del -999."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 2 línies):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Maxima: M\nDies: N",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb un while i lectura avançada. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "new",
   "tags": [
    "while",
    "sentinella"
   ],
   "examples": [
    {
     "in": "12 18 15 -999\n",
     "out": "Maxima: 18\nDies: 3\n"
    },
    {
     "in": "-3 -8 -1 -999\n",
     "out": "Maxima: -1\nDies: 3\n"
    }
   ],
   "tests": [
    {
     "in": "7 -999\n",
     "out": "Maxima: 7\nDies: 1\n"
    },
    {
     "in": "-50 -999\n",
     "out": "Maxima: -50\nDies: 1\n"
    },
    {
     "in": "50 50 49 -999\n",
     "out": "Maxima: 50\nDies: 3\n"
    },
    {
     "in": "0 -1 0 -999\n",
     "out": "Maxima: 0\nDies: 3\n"
    },
    {
     "in": "-20 -30 -10 -40 -999\n",
     "out": "Maxima: -10\nDies: 4\n"
    },
    {
     "in": "1 2 3 4 5 6 7 8 9 10 -999\n",
     "out": "Maxima: 10\nDies: 10\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Com que les temperatures poden ser negatives, inicialitza el màxim amb la primera temperatura llegida, no amb 0.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int t;\n    cin >> t;\n    int maxima = t;\n    int dies = 0;\n    while (t != -999) {\n        dies++;\n        if (t > maxima) {\n            maxima = t;\n        }\n        cin >> t;\n    }\n    cout << \"Maxima: \" << maxima << endl;\n    cout << \"Dies: \" << dies << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-s4-quadrats",
   "title": "ELS QUADRATS",
   "qb": [
    {
     "t": "p",
     "x": "Un professor de primària vol una tira amb els quadrats dels primers nombres naturals per penjar-la a la paret de la classe."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, entrat N, escrigui en una sola línia els quadrats de 1 a N: 1 4 9 16 …"
    },
    {
     "t": "p",
     "x": "**Entrada:** un natural N (1 ≤ N ≤ 30)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 1 línia): els N quadrats separats per un espai, **sense** espai després de l'últim."
    },
    {
     "t": "p",
     "x": "Fes-ho amb un for. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s4",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "new",
   "tags": [
    "for",
    "format"
   ],
   "examples": [
    {
     "in": "5\n",
     "out": "1 4 9 16 25\n"
    },
    {
     "in": "1\n",
     "out": "1\n"
    }
   ],
   "tests": [
    {
     "in": "2\n",
     "out": "1 4\n"
    },
    {
     "in": "10\n",
     "out": "1 4 9 16 25 36 49 64 81 100\n"
    },
    {
     "in": "30\n",
     "out": "1 4 9 16 25 36 49 64 81 100 121 144 169 196 225 256 289 324 361 400 441 484 529 576 625 676 729 784 841 900\n"
    },
    {
     "in": "3\n",
     "out": "1 4 9\n"
    },
    {
     "in": "7\n",
     "out": "1 4 9 16 25 36 49\n"
    },
    {
     "in": "16\n",
     "out": "1 4 9 16 25 36 49 64 81 100 121 144 169 196 225 256\n"
    }
   ],
   "rules": {
    "use": [
     "for"
    ],
    "avoid": []
   },
   "hint": "Escriu el primer quadrat abans del bucle i, dins el bucle (des de 2), escriu sempre l'espai abans de cada número.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    cout << 1;\n    for (int i = 2; i <= N; i++) {\n        cout << \" \" << i * i;\n    }\n    cout << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-s5-acta",
   "title": "L'ACTA DE NOTES",
   "qb": [
    {
     "t": "p",
     "x": "En acabar el curs, la tutora omple l'acta d'un grup: per a cada alumne, una nota entre 0 i 10. Abans de signar-la, vol saber quants alumnes han aprovat (nota de 5 o més), si ha aprovat tothom, i si hi ha alguna matrícula (un 10)."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que ho calculi."
    },
    {
     "t": "p",
     "x": "**Entrada:** un natural N (1 ≤ N ≤ 50), el nombre d'alumnes, seguit de N notes reals (0 ≤ nota ≤ 10)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 3 línies; les dues últimes acaben en `si` o `no`):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Aprovats: K\nTothom ha aprovat: si\nHi ha alguna matricula: no",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb un for i dues banderes (variables bool). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s5",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "for",
    "bandera"
   ],
   "examples": [
    {
     "in": "4\n6.5 5 9 10\n",
     "out": "Aprovats: 4\nTothom ha aprovat: si\nHi ha alguna matricula: si\n"
    },
    {
     "in": "3\n4.9 7 8\n",
     "out": "Aprovats: 2\nTothom ha aprovat: no\nHi ha alguna matricula: no\n"
    }
   ],
   "tests": [
    {
     "in": "1\n5\n",
     "out": "Aprovats: 1\nTothom ha aprovat: si\nHi ha alguna matricula: no\n"
    },
    {
     "in": "1\n0\n",
     "out": "Aprovats: 0\nTothom ha aprovat: no\nHi ha alguna matricula: no\n"
    },
    {
     "in": "2\n10 10\n",
     "out": "Aprovats: 2\nTothom ha aprovat: si\nHi ha alguna matricula: si\n"
    },
    {
     "in": "5\n3 4 2 1 0\n",
     "out": "Aprovats: 0\nTothom ha aprovat: no\nHi ha alguna matricula: no\n"
    },
    {
     "in": "6\n5 5 5 5 5 4.99\n",
     "out": "Aprovats: 5\nTothom ha aprovat: no\nHi ha alguna matricula: no\n"
    },
    {
     "in": "3\n9.9 9.5 10\n",
     "out": "Aprovats: 3\nTothom ha aprovat: si\nHi ha alguna matricula: si\n"
    },
    {
     "in": "2\n0 10\n",
     "out": "Aprovats: 1\nTothom ha aprovat: no\nHi ha alguna matricula: si\n"
    }
   ],
   "rules": {
    "use": [
     "for"
    ],
    "avoid": []
   },
   "hint": "«Tothom ha aprovat» comença a true i passa a false amb el primer suspès; «alguna matrícula» comença a false i passa a true amb el primer 10.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int aprovats = 0;\n    bool tothom = true;\n    bool matricula = false;\n    for (int i = 1; i <= N; i++) {\n        double nota;\n        cin >> nota;\n        if (nota >= 5) {\n            aprovats++;\n        } else {\n            tothom = false;\n        }\n        if (nota == 10) {\n            matricula = true;\n        }\n    }\n    cout << \"Aprovats: \" << aprovats << endl;\n    if (tothom) {\n        cout << \"Tothom ha aprovat: si\" << endl;\n    } else {\n        cout << \"Tothom ha aprovat: no\" << endl;\n    }\n    if (matricula) {\n        cout << \"Hi ha alguna matricula: si\" << endl;\n    } else {\n        cout << \"Hi ha alguna matricula: no\" << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-s5-nombre-sort",
   "title": "EL NÚMERO DE LA SORT",
   "qb": [
    {
     "t": "p",
     "x": "En una fira, el joc del «número de la sort» dona premi si el número que treus és primer. Si no ho és, l'encarregat ensenya el divisor més petit (diferent d'1) per demostrar-ho."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, entrat el número, digui si és primer i, si no ho és, quin és el seu divisor més petit més gran que 1."
    },
    {
     "t": "p",
     "x": "**Entrada:** un natural n (2 ≤ n ≤ 1000000)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 1 línia):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "n es primer",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "o bé"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "n no es primer: el divisor mes petit es d",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb un while que s'aturi quan trobi el divisor (cerca amb bandera). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main()."
    }
   ],
   "unit": "s5",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "while",
    "bandera"
   ],
   "examples": [
    {
     "in": "97\n",
     "out": "97 es primer\n"
    },
    {
     "in": "91\n",
     "out": "91 no es primer: el divisor mes petit es 7\n"
    }
   ],
   "tests": [
    {
     "in": "2\n",
     "out": "2 es primer\n"
    },
    {
     "in": "4\n",
     "out": "4 no es primer: el divisor mes petit es 2\n"
    },
    {
     "in": "999983\n",
     "out": "999983 es primer\n"
    },
    {
     "in": "1000000\n",
     "out": "1000000 no es primer: el divisor mes petit es 2\n"
    },
    {
     "in": "49\n",
     "out": "49 no es primer: el divisor mes petit es 7\n"
    },
    {
     "in": "3\n",
     "out": "3 es primer\n"
    },
    {
     "in": "961\n",
     "out": "961 no es primer: el divisor mes petit es 31\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": []
   },
   "hint": "Busca un divisor des de 2: while (d < n && !trobat). Quan el trobis, no incrementis d, i així en sortir d és el divisor més petit.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int d = 2;\n    bool trobat = false;\n    while (d < n && !trobat) {\n        if (n % d == 0) {\n            trobat = true;\n        } else {\n            d++;\n        }\n    }\n    if (trobat) {\n        cout << n << \" no es primer: el divisor mes petit es \" << d << endl;\n    } else {\n        cout << n << \" es primer\" << endl;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-s7-max3",
   "title": "EL MÀXIM DE TRES AMB FUNCIONS",
   "qb": [
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, entrats tres enters, escrigui el més gran, fent servir una funció que calculi el màxim de **dos** valors."
    },
    {
     "t": "p",
     "x": "Cal definir la funció `int max2(int a, int b)`, que retorna el més gran de a i b, i cridar-la des del main() (dues vegades)."
    },
    {
     "t": "p",
     "x": "**Entrada:** tres enters A, B i C (-1000 ≤ A, B, C ≤ 1000)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 1 línia):"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Maxim: M",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb la funció max2. No facis servir vector, algorithm, struct ni class."
    }
   ],
   "unit": "s7",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "new",
   "tags": [
    "funcions"
   ],
   "examples": [
    {
     "in": "4 9 7\n",
     "out": "Maxim: 9\n"
    },
    {
     "in": "-5 -2 -9\n",
     "out": "Maxim: -2\n"
    }
   ],
   "tests": [
    {
     "in": "1 1 1\n",
     "out": "Maxim: 1\n"
    },
    {
     "in": "1000 -1000 0\n",
     "out": "Maxim: 1000\n"
    },
    {
     "in": "-1000 -1000 -999\n",
     "out": "Maxim: -999\n"
    },
    {
     "in": "3 2 1\n",
     "out": "Maxim: 3\n"
    },
    {
     "in": "1 2 3\n",
     "out": "Maxim: 3\n"
    },
    {
     "in": "2 3 1\n",
     "out": "Maxim: 3\n"
    }
   ],
   "hint": "max2(max2(A, B), C): el resultat de la primera crida és l'argument de la segona.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint max2(int a, int b) {\n    if (a > b) {\n        return a;\n    } else {\n        return b;\n    }\n}\n\nint main() {\n    int A, B, C;\n    cin >> A >> B >> C;\n    cout << \"Maxim: \" << max2(max2(A, B), C) << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 5
  },
  {
   "id": "cpp-s7-germans",
   "title": "ELS TRES GERMANS",
   "qb": [
    {
     "t": "p",
     "x": "En una família hi ha tres germans i volem escriure les seves edats de petit a gran."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que ordeni les tres edats fent servir un procediment `void intercanvia(int &a, int &b)` que intercanvia el valor de dues variables. Amb tres comparacions i els intercanvis necessaris, les tres variables queden ordenades."
    },
    {
     "t": "p",
     "x": "**Entrada:** tres enters E1, E2 i E3 (edats, 0 ≤ E ≤ 120)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 1 línia): les tres edats de menor a major, separades per un espai."
    },
    {
     "t": "p",
     "x": "Fes-ho amb el procediment intercanvia, amb pas per referència. No facis servir vector, algorithm, struct ni class."
    }
   ],
   "unit": "s7",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "funcions",
    "referència"
   ],
   "examples": [
    {
     "in": "12 5 9\n",
     "out": "5 9 12\n"
    },
    {
     "in": "30 30 2\n",
     "out": "2 30 30\n"
    }
   ],
   "tests": [
    {
     "in": "1 2 3\n",
     "out": "1 2 3\n"
    },
    {
     "in": "3 2 1\n",
     "out": "1 2 3\n"
    },
    {
     "in": "2 3 1\n",
     "out": "1 2 3\n"
    },
    {
     "in": "0 120 60\n",
     "out": "0 60 120\n"
    },
    {
     "in": "7 7 7\n",
     "out": "7 7 7\n"
    },
    {
     "in": "5 1 5\n",
     "out": "1 5 5\n"
    }
   ],
   "rules": {
    "use": [],
    "avoid": [
     "loops"
    ],
    "fn": true,
    "fnames": [
     "intercanvia"
    ]
   },
   "hint": "Compara el primer amb el segon, el segon amb el tercer, i un altre cop el primer amb el segon; intercanvia quan estiguin desordenats.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nvoid intercanvia(int &a, int &b) {\n    int aux = a;\n    a = b;\n    b = aux;\n}\n\nint main() {\n    int E1, E2, E3;\n    cin >> E1 >> E2 >> E3;\n    if (E1 > E2) {\n        intercanvia(E1, E2);\n    }\n    if (E2 > E3) {\n        intercanvia(E2, E3);\n    }\n    if (E1 > E2) {\n        intercanvia(E1, E2);\n    }\n    cout << E1 << \" \" << E2 << \" \" << E3 << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-s7-dividir-restant",
   "title": "DIVIDIR RESTANT",
   "qb": [
    {
     "t": "p",
     "x": "Un microcontrolador molt senzill no té instrucció de divisió: només sap sumar i restar. Per dividir, resta el divisor tantes vegades com pot."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que, per a cada parella de valors, calculi el quocient i el residu de la divisió entera fent servir el procediment `void quocientEnterResta(int dvdnt, int dvsr, int &Q, int &R)`, que els calcula **restant**, sense fer servir els operadors `/` ni `%`."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència de parelles A B (0 ≤ A ≤ 100000, 1 ≤ B ≤ 1000), acabada amb la parella `0 0`, que no s'ha de tractar. La seqüència pot ser buida (només `0 0`): llavors no s'escriu res."
    },
    {
     "t": "p",
     "x": "**Sortida:** una línia per parella:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "A = B * Q + R",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb el procediment quocientEnterResta i sense fer servir `/` ni `%` enlloc del programa. No facis servir vector, algorithm, struct ni class."
    }
   ],
   "unit": "s7",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "funcions",
    "referència",
    "while"
   ],
   "examples": [
    {
     "in": "17 5\n100 10\n0 0\n",
     "out": "17 = 5 * 3 + 2\n100 = 10 * 10 + 0\n"
    },
    {
     "in": "3 7\n0 0\n",
     "out": "3 = 7 * 0 + 3\n"
    }
   ],
   "tests": [
    {
     "in": "0 0\n",
     "out": ""
    },
    {
     "in": "0 5\n0 0\n",
     "out": "0 = 5 * 0 + 0\n"
    },
    {
     "in": "100000 1\n0 0\n",
     "out": "100000 = 1 * 100000 + 0\n"
    },
    {
     "in": "99999 1000\n1 1\n0 0\n",
     "out": "99999 = 1000 * 99 + 999\n1 = 1 * 1 + 0\n"
    },
    {
     "in": "5 5\n6 5\n4 5\n0 0\n",
     "out": "5 = 5 * 1 + 0\n6 = 5 * 1 + 1\n4 = 5 * 0 + 4\n"
    },
    {
     "in": "12345 67\n0 0\n",
     "out": "12345 = 67 * 184 + 17\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": [],
    "fn": true,
    "fnames": [
     "quocientEnterResta"
    ],
    "nodiv": true
   },
   "hint": "Q comença a 0 i R al dividend; mentre R >= dvsr, resta el divisor a R i suma 1 a Q. Al main, la seqüència és de parelles: atura't quan A i B siguin tots dos 0.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nvoid quocientEnterResta(int dvdnt, int dvsr, int &Q, int &R) {\n    Q = 0;\n    R = dvdnt;\n    while (R >= dvsr) {\n        R = R - dvsr;\n        Q++;\n    }\n}\n\nint main() {\n    int A, B;\n    cin >> A >> B;\n    while (A != 0 || B != 0) {\n        int Q, R;\n        quocientEnterResta(A, B, Q, R);\n        cout << A << \" = \" << B << \" * \" << Q << \" + \" << R << endl;\n        cin >> A >> B;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-s7-abundants",
   "title": "ELS NOMBRES ABUNDANTS",
   "qb": [
    {
     "t": "p",
     "x": "Un nombre és **abundant** quan la suma dels seus divisors propis (tots els divisors excepte ell mateix) és més gran que el nombre. Per exemple, 12 és abundant: 1 + 2 + 3 + 4 + 6 = 16 > 12."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que llisti els nombres abundants entre 1 i N i digui quants n'hi ha. Cal definir la funció `int sumaDivisorsPropis(int x)` i fer-la servir des del main()."
    },
    {
     "t": "p",
     "x": "**Entrada:** un natural N (1 ≤ N ≤ 3000)."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 2 línies): a la primera, els nombres abundants entre 1 i N separats per un espai (sense espai al final; si no n'hi ha cap, la línia queda buida); a la segona:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Total: K",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb la funció sumaDivisorsPropis. No facis servir vector, algorithm, struct ni class."
    }
   ],
   "unit": "s7",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "new",
   "tags": [
    "funcions",
    "for"
   ],
   "examples": [
    {
     "in": "30\n",
     "out": "12 18 20 24 30\nTotal: 5\n"
    },
    {
     "in": "11\n",
     "out": "\nTotal: 0\n"
    }
   ],
   "tests": [
    {
     "in": "1\n",
     "out": "\nTotal: 0\n"
    },
    {
     "in": "12\n",
     "out": "12\nTotal: 1\n"
    },
    {
     "in": "18\n",
     "out": "12 18\nTotal: 2\n"
    },
    {
     "in": "100\n",
     "out": "12 18 20 24 30 36 40 42 48 54 56 60 66 70 72 78 80 84 88 90 96 100\nTotal: 22\n"
    },
    {
     "in": "945\n",
     "out": "12 18 20 24 30 36 40 42 48 54 56 60 66 70 72 78 80 84 88 90 96 100 102 104 108 112 114 120 126 132 138 140 144 150 156 160 162 168 174 176 180 186 192 196 198 200 204 208 210 216 220 222 224 228 234 240 246 252 258 260 264 270 272 276 280 282 288 294 300 304 306 308 312 318 320 324 330 336 340 342 348 350 352 354 360 364 366 368 372 378 380 384 390 392 396 400 402 408 414 416 420 426 432 438 440 444 448 450 456 460 462 464 468 474 476 480 486 490 492 498 500 504 510 516 520 522 528 532 534 540 544 546 550 552 558 560 564 570 572 576 580 582 588 594 600 606 608 612 616 618 620 624 630 636 640 642 644 648 650 654 660 666 672 678 680 684 690 696 700 702 704 708 714 720 726 728 732 736 738 740 744 748 750 756 760 762 768 770 774 780 784 786 792 798 800 804 810 812 816 820 822 828 832 834 836 840 846 852 858 860 864 868 870 876 880 882 888 894 896 900 906 910 912 918 920 924 928 930 936 940 942 945\nTotal: 232\n"
    },
    {
     "in": "3000\n",
     "out": "12 18 20 24 30 36 40 42 48 54 56 60 66 70 72 78 80 84 88 90 96 100 102 104 108 112 114 120 126 132 138 140 144 150 156 160 162 168 174 176 180 186 192 196 198 200 204 208 210 216 220 222 224 228 234 240 246 252 258 260 264 270 272 276 280 282 288 294 300 304 306 308 312 318 320 324 330 336 340 342 348 350 352 354 360 364 366 368 372 378 380 384 390 392 396 400 402 408 414 416 420 426 432 438 440 444 448 450 456 460 462 464 468 474 476 480 486 490 492 498 500 504 510 516 520 522 528 532 534 540 544 546 550 552 558 560 564 570 572 576 580 582 588 594 600 606 608 612 616 618 620 624 630 636 640 642 644 648 650 654 660 666 672 678 680 684 690 696 700 702 704 708 714 720 726 728 732 736 738 740 744 748 750 756 760 762 768 770 774 780 784 786 792 798 800 804 810 812 816 820 822 828 832 834 836 840 846 852 858 860 864 868 870 876 880 882 888 894 896 900 906 910 912 918 920 924 928 930 936 940 942 945 948 952 954 960 966 968 972 978 980 984 990 992 996 1000 1002 1008 1014 1020 1026 1032 1036 1038 1040 1044 1050 1056 1060 1062 1064 1068 1074 1080 1086 1088 1092 1098 1100 1104 1110 1116 1120 1122 1128 1134 1140 1144 1146 1148 1152 1158 1160 1164 1170 1176 1180 1182 1184 1188 1190 1194 1200 1204 1206 1212 1216 1218 1220 1224 1230 1232 1236 1240 1242 1248 1254 1260 1266 1272 1278 1280 1284 1288 1290 1296 1300 1302 1308 1312 1314 1316 1320 1326 1330 1332 1338 1340 1344 1350 1352 1356 1360 1362 1368 1372 1374 1376 1380 1386 1392 1398 1400 1404 1408 1410 1416 1420 1422 1428 1430 1434 1440 1446 1452 1456 1458 1460 1464 1470 1472 1476 1480 1482 1484 1488 1494 1496 1500 1504 1506 1512 1518 1520 1524 1530 1536 1540 1542 1548 1554 1560 1566 1568 1572 1575 1578 1580 1584 1590 1596 1600 1602 1608 1610 1614 1620 1624 1626 1632 1638 1640 1644 1650 1652 1656 1660 1662 1664 1668 1672 1674 1680 1686 1692 1696 1698 1700 1704 1708 1710 1716 1720 1722 1728 1734 1736 1740 1746 1750 1752 1758 1760 1764 1768 1770 1776 1780 1782 1788 1792 1794 1800 1806 1812 1818 1820 1824 1830 1836 1840 1842 1848 1854 1856 1860 1866 1870 1872 1876 1878 1880 1884 1888 1890 1896 1900 1902 1904 1908 1914 1920 1926 1932 1936 1938 1940 1944 1950 1952 1956 1960 1962 1968 1974 1976 1980 1984 1986 1988 1992 1998 2000 2002 2004 2010 2016 2020 2022 2024 2028 2030 2034 2040 2044 2046 2052 2058 2060 2064 2070 2072 2076 2080 2082 2088 2090 2094 2100 2106 2112 2118 2120 2124 2128 2130 2136 2140 2142 2148 2154 2156 2160 2166 2170 2172 2176 2178 2180 2184 2190 2196 2200 2202 2205 2208 2210 2212 2214 2220 2226 2232 2238 2240 2244 2250 2256 2260 2262 2268 2274 2280 2286 2288 2292 2296 2298 2300 2304 2310 2316 2320 2322 2324 2328 2334 2340 2346 2352 2358 2360 2364 2368 2370 2376 2380 2382 2388 2392 2394 2400 2406 2408 2412 2418 2420 2424 2430 2432 2436 2440 2442 2448 2450 2454 2460 2464 2466 2470 2472 2478 2480 2484 2490 2492 2496 2500 2502 2508 2514 2520 2526 2530 2532 2538 2540 2544 2548 2550 2552 2556 2560 2562 2568 2574 2576 2580 2584 2586 2590 2592 2598 2600 2604 2610 2616 2620 2622 2624 2628 2632 2634 2640 2646 2652 2658 2660 2664 2670 2676 2680 2682 2688 2694 2700 2704 2706 2712 2716 2718 2720 2724 2728 2730 2736 2740 2742 2744 2748 2750 2752 2754 2760 2766 2772 2778 2780 2784 2790 2796 2800 2802 2808 2814 2816 2820 2826 2828 2832 2835 2838 2840 2844 2850 2856 2860 2862 2868 2870 2874 2880 2884 2886 2892 2898 2900 2904 2910 2912 2916 2920 2922 2928 2934 2940 2944 2946 2952 2958 2960 2964 2968 2970 2976 2980 2982 2988 2990 2992 2994 2996 3000\nTotal: 742\n"
    }
   ],
   "rules": {
    "use": [
     "for"
    ],
    "avoid": [],
    "fn": true,
    "fnames": [
     "sumaDivisorsPropis"
    ]
   },
   "hint": "La funció recorre de 1 a x - 1 i suma els divisors. Per escriure els separadors bé, fes servir una bandera «primer» o escriu l'espai abans de cada número llevat del primer.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint sumaDivisorsPropis(int x) {\n    int suma = 0;\n    for (int d = 1; d < x; d++) {\n        if (x % d == 0) {\n            suma = suma + d;\n        }\n    }\n    return suma;\n}\n\nint main() {\n    int N;\n    cin >> N;\n    int total = 0;\n    for (int x = 1; x <= N; x++) {\n        if (sumaDivisorsPropis(x) > x) {\n            if (total > 0) {\n                cout << \" \";\n            }\n            cout << x;\n            total++;\n        }\n    }\n    cout << endl;\n    cout << \"Total: \" << total << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 10
  },
  {
   "id": "cpp-s7-cursa-muntanya",
   "title": "EL CRONÒMETRE DE LA CURSA DE MUNTANYA",
   "qb": [
    {
     "t": "p",
     "x": "A l'arribada d'una cursa de muntanya, el cronòmetre registra el temps de cada corredor en segons. L'organització vol els temps del guanyador i de l'últim, i la diferència entre tots dos, en format hores:minuts:segons."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que ho calculi. Cal definir el procediment `void convertir(int t, int &h, int &m, int &s)`, que descompon t segons en hores, minuts i segons, i fer-lo servir per escriure els tres temps."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència de temps en segons (1 ≤ t ≤ 359999), acabada amb -1. Hi ha com a mínim un corredor."
    },
    {
     "t": "p",
     "x": "**Sortida** (exactament 3 línies), amb els minuts i els segons sempre amb dues xifres:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Guanyador: H:MM:SS\nUltim: H:MM:SS\nDiferencia: H:MM:SS",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb el procediment convertir (pots definir també un procediment per escriure un temps). No facis servir vector, algorithm, struct ni class."
    }
   ],
   "unit": "s7",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "new",
   "tags": [
    "funcions",
    "referència",
    "while",
    "format"
   ],
   "examples": [
    {
     "in": "7384 6100 9015 -1\n",
     "out": "Guanyador: 1:41:40\nUltim: 2:30:15\nDiferencia: 0:48:35\n"
    },
    {
     "in": "3600 -1\n",
     "out": "Guanyador: 1:00:00\nUltim: 1:00:00\nDiferencia: 0:00:00\n"
    }
   ],
   "tests": [
    {
     "in": "59 -1\n",
     "out": "Guanyador: 0:00:59\nUltim: 0:00:59\nDiferencia: 0:00:00\n"
    },
    {
     "in": "359999 1 -1\n",
     "out": "Guanyador: 0:00:01\nUltim: 99:59:59\nDiferencia: 99:59:58\n"
    },
    {
     "in": "3661 3661 -1\n",
     "out": "Guanyador: 1:01:01\nUltim: 1:01:01\nDiferencia: 0:00:00\n"
    },
    {
     "in": "600 540 7199 7201 -1\n",
     "out": "Guanyador: 0:09:00\nUltim: 2:00:01\nDiferencia: 1:51:01\n"
    },
    {
     "in": "86399 90000 -1\n",
     "out": "Guanyador: 23:59:59\nUltim: 25:00:00\nDiferencia: 1:00:01\n"
    },
    {
     "in": "1 2 3 4 5 -1\n",
     "out": "Guanyador: 0:00:01\nUltim: 0:00:05\nDiferencia: 0:00:04\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": [],
    "fn": true,
    "fnames": [
     "convertir"
    ]
   },
   "hint": "h = t / 3600, m = (t % 3600) / 60, s = t % 60. Per escriure dues xifres, posa un 0 davant si el valor és menor que 10 (o fes servir setw(2) i setfill('0')).",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nvoid convertir(int t, int &h, int &m, int &s) {\n    h = t / 3600;\n    m = (t % 3600) / 60;\n    s = t % 60;\n}\n\nvoid escriuTemps(int t) {\n    int h, m, s;\n    convertir(t, h, m, s);\n    cout << h << \":\";\n    if (m < 10) {\n        cout << \"0\";\n    }\n    cout << m << \":\";\n    if (s < 10) {\n        cout << \"0\";\n    }\n    cout << s << endl;\n}\n\nint main() {\n    int t;\n    cin >> t;\n    int millor = t, pitjor = t;\n    while (t != -1) {\n        if (t < millor) {\n            millor = t;\n        }\n        if (t > pitjor) {\n            pitjor = t;\n        }\n        cin >> t;\n    }\n    cout << \"Guanyador: \";\n    escriuTemps(millor);\n    cout << \"Ultim: \";\n    escriuTemps(pitjor);\n    cout << \"Diferencia: \";\n    escriuTemps(pitjor - millor);\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-s7-mcd-mcm",
   "title": "EL MCD I EL MCM",
   "qb": [
    {
     "t": "p",
     "x": "Per fer exercicis de fraccions, un alumne vol una eina que calculi el màxim comú divisor i el mínim comú múltiple de parelles de nombres."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que ho faci per a cada parella. Cal definir les funcions `int mcd(int a, int b)`, amb l'algorisme d'Euclides (mentre b no sigui 0, la parella (a, b) passa a ser (b, a % b), i al final el mcd és a), i `int mcm(int a, int b)`, que fa servir mcd: mcm(a, b) = a / mcd(a, b) * b."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència de parelles A B (1 ≤ A, B ≤ 10000), acabada amb la parella `0 0`, que no s'ha de tractar. La seqüència pot ser buida (només `0 0`): llavors no s'escriu res."
    },
    {
     "t": "p",
     "x": "**Sortida:** una línia per parella:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "mcd(A,B) = X, mcm(A,B) = Y",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "Fes-ho amb les funcions mcd i mcm. No facis servir vector, algorithm, struct ni class."
    }
   ],
   "unit": "s7",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "new",
   "tags": [
    "funcions",
    "while",
    "sentinella"
   ],
   "examples": [
    {
     "in": "12 18\n7 5\n0 0\n",
     "out": "mcd(12,18) = 6, mcm(12,18) = 36\nmcd(7,5) = 1, mcm(7,5) = 35\n"
    },
    {
     "in": "100 75\n0 0\n",
     "out": "mcd(100,75) = 25, mcm(100,75) = 300\n"
    }
   ],
   "tests": [
    {
     "in": "0 0\n",
     "out": ""
    },
    {
     "in": "1 1\n0 0\n",
     "out": "mcd(1,1) = 1, mcm(1,1) = 1\n"
    },
    {
     "in": "10000 9999\n0 0\n",
     "out": "mcd(10000,9999) = 1, mcm(10000,9999) = 99990000\n"
    },
    {
     "in": "9 3\n3 9\n0 0\n",
     "out": "mcd(9,3) = 3, mcm(9,3) = 9\nmcd(3,9) = 3, mcm(3,9) = 9\n"
    },
    {
     "in": "17 17\n0 0\n",
     "out": "mcd(17,17) = 17, mcm(17,17) = 17\n"
    },
    {
     "in": "1024 768\n6 35\n0 0\n",
     "out": "mcd(1024,768) = 256, mcm(1024,768) = 3072\nmcd(6,35) = 1, mcm(6,35) = 210\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": [],
    "fn": true,
    "fnames": [
     "mcd",
     "mcm"
    ]
   },
   "hint": "A Euclides necessites una variable auxiliar per fer el pas (a, b) → (b, a % b). Al mcm, dividir abans de multiplicar evita resultats massa grans.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint mcd(int a, int b) {\n    while (b != 0) {\n        int r = a % b;\n        a = b;\n        b = r;\n    }\n    return a;\n}\n\nint mcm(int a, int b) {\n    return a / mcd(a, b) * b;\n}\n\nint main() {\n    int A, B;\n    cin >> A >> B;\n    while (A != 0 || B != 0) {\n        cout << \"mcd(\" << A << \",\" << B << \") = \" << mcd(A, B) << \", mcm(\" << A << \",\" << B << \") = \" << mcm(A, B) << endl;\n        cin >> A >> B;\n    }\n    return 0;\n}\n"
    }
   ],
   "min": 15
  },
  {
   "id": "cpp-s7-anys-capicues",
   "title": "ELS ANYS CAPICUES",
   "qb": [
    {
     "t": "p",
     "x": "Un any és **capicua** si es llegeix igual d'esquerra a dreta que de dreta a esquerra, com el 2002 o el 2112. Un club de curiositats numèriques vol saber, per a diversos anys, quin és el proper any capicua i quants anys falten."
    },
    {
     "t": "p",
     "x": "Dissenyeu un algorisme que ho calculi. Cal definir la funció `int invertit(int n)`, que retorna n amb les xifres a l'inrevés, i la funció `bool esCapicua(int n)`, que la fa servir. Al final, cal dir quina ha estat l'espera més llarga i per a quin any (si n'hi ha diverses d'iguals, la del primer any de la llista)."
    },
    {
     "t": "p",
     "x": "**Entrada:** una seqüència d'anys Y (1000 ≤ Y ≤ 9000), acabada amb 0. Hi ha com a mínim un any."
    },
    {
     "t": "p",
     "x": "**Sortida:** una línia per any i una línia final:"
    },
    {
     "t": "code",
     "lang": "txt",
     "src": "Y -> X (N anys)\n...\nEspera mes llarga: N anys (any Y)",
     "props": {
      "nonum": true
     }
    },
    {
     "t": "p",
     "x": "on X és el primer any capicua **estrictament posterior** a Y. Fes-ho amb les funcions invertit i esCapicua. No facis servir vector, algorithm, struct ni class."
    }
   ],
   "unit": "s7",
   "level": "hard",
   "lv": 4,
   "type": "cpp",
   "src": "new",
   "tags": [
    "funcions",
    "while",
    "dígits"
   ],
   "examples": [
    {
     "in": "2024 1999 0\n",
     "out": "2024 -> 2112 (88 anys)\n1999 -> 2002 (3 anys)\nEspera mes llarga: 88 anys (any 2024)\n"
    },
    {
     "in": "2002 0\n",
     "out": "2002 -> 2112 (110 anys)\nEspera mes llarga: 110 anys (any 2002)\n"
    }
   ],
   "tests": [
    {
     "in": "1000 0\n",
     "out": "1000 -> 1001 (1 anys)\nEspera mes llarga: 1 anys (any 1000)\n"
    },
    {
     "in": "9000 0\n",
     "out": "9000 -> 9009 (9 anys)\nEspera mes llarga: 9 anys (any 9000)\n"
    },
    {
     "in": "1991 1001 0\n",
     "out": "1991 -> 2002 (11 anys)\n1001 -> 1111 (110 anys)\nEspera mes llarga: 110 anys (any 1001)\n"
    },
    {
     "in": "2112 2111 2113 0\n",
     "out": "2112 -> 2222 (110 anys)\n2111 -> 2112 (1 anys)\n2113 -> 2222 (109 anys)\nEspera mes llarga: 110 anys (any 2112)\n"
    },
    {
     "in": "4999 5004 0\n",
     "out": "4999 -> 5005 (6 anys)\n5004 -> 5005 (1 anys)\nEspera mes llarga: 6 anys (any 4999)\n"
    },
    {
     "in": "3003 3002 0\n",
     "out": "3003 -> 3113 (110 anys)\n3002 -> 3003 (1 anys)\nEspera mes llarga: 110 anys (any 3003)\n"
    }
   ],
   "rules": {
    "use": [
     "while"
    ],
    "avoid": [],
    "fn": true,
    "fnames": [
     "invertit",
     "esCapicua"
    ]
   },
   "hint": "invertit: mentre n > 0, inv = inv * 10 + n % 10 i n = n / 10. Per a cada any, prova Y + 1, Y + 2… fins trobar-ne un de capicua. Per a l'espera més llarga, actualitza només si és estrictament més gran.",
   "sol": [
    {
     "t": "code",
     "lang": "cpp",
     "src": "#include <iostream>\nusing namespace std;\n\nint invertit(int n) {\n    int inv = 0;\n    while (n > 0) {\n        inv = inv * 10 + n % 10;\n        n = n / 10;\n    }\n    return inv;\n}\n\nbool esCapicua(int n) {\n    return invertit(n) == n;\n}\n\nint main() {\n    int Y;\n    cin >> Y;\n    int maxEspera = -1, anyMax = 0;\n    while (Y != 0) {\n        int X = Y + 1;\n        while (!esCapicua(X)) {\n            X++;\n        }\n        int espera = X - Y;\n        cout << Y << \" -> \" << X << \" (\" << espera << \" anys)\" << endl;\n        if (espera > maxEspera) {\n            maxEspera = espera;\n            anyMax = Y;\n        }\n        cin >> Y;\n    }\n    cout << \"Espera mes llarga: \" << maxEspera << \" anys (any \" << anyMax << \")\" << endl;\n    return 0;\n}\n"
    }
   ],
   "min": 15
  }
 ]
};
