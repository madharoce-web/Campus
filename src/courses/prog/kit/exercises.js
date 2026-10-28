// Generat per tools/kit-import/prog.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "items": [
  {
   "id": "ps-area",
   "title": [
    "Àrea i perímetre d'un rectangle",
    "Área y perímetro de un rectángulo",
    "Area and perimeter of a rectangle"
   ],
   "q": [
    "Llegiu la base i l'altura d'un rectangle (reals) i escriviu-ne l'àrea i el perímetre.",
    "Leed la base y la altura de un rectángulo (reales) y escribid su área y su perímetro.",
    "Read the base and the height of a rectangle (reals) and write its area and its perimeter."
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
    "Segundos a h, min y s",
    "Seconds to h, min and s"
   ],
   "q": [
    "Llegiu una quantitat de segons T (natural) i escriviu-la en hores, minuts i segons.",
    "Leed una cantidad de segundos T (natural) y escribidla en horas, minutos y segundos.",
    "Read a number of seconds T (natural) and write it in hours, minutes and seconds."
   ],
   "unit": "t21",
   "level": "easy",
   "kind": "seq",
   "type": "pseudo",
   "hint": [
    "Quocient enter ‖ i residu |R.",
    "Cociente entero ‖ y resto |R.",
    "Integer quotient ‖ and remainder |R."
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
    "Precio con IGI",
    "Price with IGI"
   ],
   "q": [
    "Llegiu el preu d'un producte (real) i escriviu el preu final amb l'IGI general del 4,5 %.",
    "Leed el precio de un producto (real) y escribid el precio final con el IGI general del 4,5 %.",
    "Read the price of a product (real) and write the final price with the general IGI of 4.5 %."
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
    "Intercambio de dos variables",
    "Swapping two variables"
   ],
   "q": [
    "Llegiu dos enters A i B, intercanvieu-ne els valors i escriviu A i B.",
    "Leed dos enteros A y B, intercambiad sus valores y escribid A y B.",
    "Read two integers A and B, swap their values and write A and B."
   ],
   "unit": "t21",
   "level": "easy",
   "kind": "seq",
   "type": "pseudo",
   "hint": [
    "Cal una variable auxiliar: no hi ha l'a, b = b, a de Python.",
    "Hace falta una variable auxiliar: no existe el a, b = b, a de Python.",
    "You need an auxiliary variable: there is no Python-style a, b = b, a."
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
    "Pelotas en cajas",
    "Balls in boxes"
   ],
   "q": [
    "Una fàbrica posa les pilotes en capses de 6. Llegiu el nombre de pilotes N i escriviu quantes capses s'omplen i quantes pilotes sobren.",
    "Una fábrica pone las pelotas en cajas de 6. Leed el número de pelotas N y escribid cuántas cajas se llenan y cuántas pelotas sobran.",
    "A factory puts balls in boxes of 6. Read the number of balls N and write how many boxes are filled and how many balls are left over."
   ],
   "unit": "t21",
   "level": "easy",
   "kind": "seq",
   "type": "pseudo",
   "basedOn": [
    "en l'estil de S02 · La Fàbrica de Pilotes",
    "al estilo de S02 · La Fàbrica de Pilotes",
    "in the style of S02 · La Fàbrica de Pilotes"
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
    "Suma de las cifras de un número de 3 cifras",
    "Sum of the digits of a 3-digit number"
   ],
   "q": [
    "Llegiu un natural de tres xifres i escriviu la suma de les seves xifres.",
    "Leed un natural de tres cifras y escribid la suma de sus cifras.",
    "Read a three-digit natural number and write the sum of its digits."
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
    "Máximo de tres números",
    "Maximum of three numbers"
   ],
   "q": [
    "Llegiu tres naturals i escriviu el més gran (exemple de la teoria).",
    "Leed tres naturales y escribid el mayor (ejemplo de la teoría).",
    "Read three naturals and write the largest (example from the theory)."
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
    "Par o impar",
    "Even or odd"
   ],
   "q": [
    "Llegiu un enter i escriviu «parell» o «senar».",
    "Leed un entero y escribid «parell» o «senar».",
    "Read an integer and write «parell» (even) or «senar» (odd)."
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
    "Año bisiesto",
    "Leap year"
   ],
   "q": [
    "Llegiu un any i escriviu «Sí» si és de traspàs i «No» si no ho és. És de traspàs si és múltiple de 4 i no de 100, o bé si és múltiple de 400.",
    "Leed un año y escribid «Sí» si es bisiesto y «No» si no lo es. Es bisiesto si es múltiplo de 4 y no de 100, o bien si es múltiplo de 400.",
    "Read a year and write «Sí» if it is a leap year and «No» if it is not. It is a leap year if it is a multiple of 4 and not of 100, or if it is a multiple of 400."
   ],
   "unit": "t22",
   "level": "exam",
   "kind": "cond",
   "type": "pseudo",
   "hint": [
    "Amb les prioritats del curs, cada comparació entre parèntesis.",
    "Con las prioridades del curso, cada comparación entre paréntesis.",
    "With the course precedence, each comparison in parentheses."
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
    "Calificación con SEGONS_SIGUI",
    "Grade with SEGONS_SIGUI"
   ],
   "q": [
    "Llegiu una nota entera de 0 a 10 i escriviu: 0–4 «Suspès», 5–6 «Aprovat», 7–8 «Notable», 9 «Excel·lent», 10 «Matrícula»; qualsevol altre valor, «Error».",
    "Leed una nota entera de 0 a 10 y escribid: 0–4 «Suspès», 5–6 «Aprovat», 7–8 «Notable», 9 «Excel·lent», 10 «Matrícula»; cualquier otro valor, «Error».",
    "Read an integer mark from 0 to 10 and write: 0–4 «Suspès», 5–6 «Aprovat», 7–8 «Notable», 9 «Excel·lent», 10 «Matrícula»; any other value, «Error»."
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
    "Cuadrante de un punto",
    "Quadrant of a point"
   ],
   "q": [
    "Llegiu les coordenades enteres x i y d'un punt i escriviu el quadrant (1, 2, 3 o 4), o 0 si és sobre un eix.",
    "Leed las coordenadas enteras x e y de un punto y escribid el cuadrante (1, 2, 3 o 4), o 0 si está sobre un eje.",
    "Read the integer coordinates x and y of a point and write the quadrant (1, 2, 3 or 4), or 0 if it lies on an axis."
   ],
   "unit": "t22",
   "level": "exam",
   "kind": "cond",
   "type": "pseudo",
   "basedOn": [
    "en l'estil de S03 · Quadrant",
    "al estilo de S03 · Quadrant",
    "in the style of S03 · Quadrant"
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
    "Precio de los huevos",
    "Price of eggs"
   ],
   "q": [
    "La dotzena d'ous costa 2,40 € i l'ou solt 0,25 €. Llegiu quants ous es compren i escriviu el preu, cobrant les dotzenes senceres com a dotzena.",
    "La docena de huevos cuesta 2,40 € y el huevo suelto 0,25 €. Leed cuántos huevos se compran y escribid el precio, cobrando las docenas enteras como docena.",
    "A dozen eggs costs €2.40 and a loose egg €0.25. Read how many eggs are bought and write the price, charging whole dozens as dozens."
   ],
   "unit": "t22",
   "level": "exam",
   "kind": "cond",
   "type": "pseudo",
   "basedOn": [
    "en l'estil de S03 · La Botiga dels Ous",
    "al estilo de S03 · La Botiga dels Ous",
    "in the style of S03 · La Botiga dels Ous"
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
    "Tarifa de un parking",
    "Car park fee"
   ],
   "q": [
    "La primera hora (fins a 60 min) costa 2 €; cada fracció de 30 min addicional, 1 € més; el màxim diari és de 15 €. Llegiu els minuts i escriviu el preu.",
    "La primera hora (hasta 60 min) cuesta 2 €; cada fracción de 30 min adicional, 1 € más; el máximo diario es de 15 €. Leed los minutos y escribid el precio.",
    "The first hour (up to 60 min) costs €2; each additional fraction of 30 min, €1 more; the daily maximum is €15. Read the minutes and write the price."
   ],
   "unit": "t22",
   "level": "exam",
   "kind": "cond",
   "type": "pseudo",
   "basedOn": [
    "en l'estil de S03 · El Pàrking",
    "al estilo de S03 · El Pàrking",
    "in the style of S03 · El Pàrking"
   ],
   "hint": [
    "Les fraccions es compten per excés: (minuts − 60 + 29) ‖ 30.",
    "Las fracciones se cuentan por exceso: (minutos − 60 + 29) ‖ 30.",
    "Fractions are rounded up: (minutes − 60 + 29) ‖ 30."
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
    "Soluciones de una ecuación de segundo grado",
    "Solutions of a quadratic equation"
   ],
   "q": [
    "Llegiu a, b i c (enters, a ≠ 0) i escriviu quantes solucions reals té a·x² + b·x + c = 0.",
    "Leed a, b y c (enteros, a ≠ 0) y escribid cuántas soluciones reales tiene a·x² + b·x + c = 0.",
    "Read a, b and c (integers, a ≠ 0) and write how many real solutions a·x² + b·x + c = 0 has."
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
    "Suma de los N primeros naturales",
    "Sum of the first N natural numbers"
   ],
   "q": [
    "Llegiu N i escriviu 1 + 2 + … + N (exemple de la teoria, amb DES_DE).",
    "Leed N y escribid 1 + 2 + … + N (ejemplo de la teoría, con DES_DE).",
    "Read N and write 1 + 2 + … + N (example from the theory, with DES_DE)."
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
    "Leed un natural N y escribid N! (0! = 1).",
    "Read a natural N and write N! (0! = 1)."
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
    "Media de una secuencia con marca",
    "Average of a sequence with a marker"
   ],
   "q": [
    "Llegiu notes (reals) fins a la marca −1 i escriviu-ne la mitjana. Si no n'hi ha cap, escriviu «No hi ha notes».",
    "Leed notas (reales) hasta la marca −1 y escribid su media. Si no hay ninguna, escribid «No hi ha notes».",
    "Read marks (reals) up to the marker −1 and write their average. If there are none, write «No hi ha notes»."
   ],
   "unit": "t23",
   "level": "exam",
   "kind": "rec",
   "type": "pseudo",
   "hint": [
    "Recorregut sobre l'entrada: Llegir abans del MENTRE i al final del cos. Compte a dividir entre zero.",
    "Recorrido sobre la entrada: Llegir antes del MENTRE y al final del cuerpo. Cuidado con dividir entre cero.",
    "Traversal over the input: Llegir before the MENTRE and at the end of the body. Careful with dividing by zero."
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
    "Máximo de una secuencia",
    "Maximum of a sequence"
   ],
   "q": [
    "Llegiu naturals fins a la marca 0 i escriviu el més gran. Si la seqüència és buida, escriviu «Buida».",
    "Leed naturales hasta la marca 0 y escribid el mayor. Si la secuencia está vacía, escribid «Buida».",
    "Read naturals up to the marker 0 and write the largest. If the sequence is empty, write «Buida»."
   ],
   "unit": "t23",
   "level": "exam",
   "kind": "rec",
   "type": "pseudo",
   "hint": [
    "El màxim s'inicialitza amb el primer element, no amb 0.",
    "El máximo se inicializa con el primer elemento, no con 0.",
    "The maximum is initialised with the first element, not with 0."
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
    "Contar pares",
    "Counting even numbers"
   ],
   "q": [
    "Llegiu naturals fins a la marca 0 i escriviu quants són parells.",
    "Leed naturales hasta la marca 0 y escribid cuántos son pares.",
    "Read naturals up to the marker 0 and write how many are even."
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
    "Número de cifras",
    "Number of digits"
   ],
   "q": [
    "Llegiu un natural i escriviu quantes xifres té.",
    "Leed un natural y escribid cuántas cifras tiene.",
    "Read a natural number and write how many digits it has."
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
    "Invertir las cifras",
    "Reversing the digits"
   ],
   "q": [
    "Llegiu un natural i escriviu-lo amb les xifres al revés (1230 dona 321).",
    "Leed un natural y escribidlo con las cifras al revés (1230 da 321).",
    "Read a natural number and write it with the digits reversed (1230 gives 321)."
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
    "Tabla de multiplicar",
    "Multiplication table"
   ],
   "q": [
    "Llegiu N i escriviu la seva taula de multiplicar de l'1 al 10, una línia per producte.",
    "Leed N y escribid su tabla de multiplicar del 1 al 10, una línea por producto.",
    "Read N and write its multiplication table from 1 to 10, one line per product."
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
    "Edades en el concierto",
    "Ages at the concert"
   ],
   "q": [
    "Llegiu les edats dels assistents fins a la marca 0. Escriviu quants són menors d'edat (< 18) i l'edat més gran.",
    "Leed las edades de los asistentes hasta la marca 0. Escribid cuántos son menores de edad (< 18) y la edad mayor.",
    "Read the ages of the attendees up to the marker 0. Write how many are under age (< 18) and the highest age."
   ],
   "unit": "t23",
   "level": "exam",
   "kind": "rec",
   "type": "pseudo",
   "basedOn": [
    "en l'estil de S04 · El Concert de Rock",
    "al estilo de S04 · El Concert de Rock",
    "in the style of S04 · El Concert de Rock"
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
    "Tiempos de una carrera",
    "Race times"
   ],
   "q": [
    "Llegiu els temps en minuts dels corredors fins a la marca −1. Escriviu el millor temps i quants han baixat de 60 minuts.",
    "Leed los tiempos en minutos de los corredores hasta la marca −1. Escribid el mejor tiempo y cuántos han bajado de 60 minutos.",
    "Read the runners' times in minutes up to the marker −1. Write the best time and how many finished under 60 minutes."
   ],
   "unit": "t23",
   "level": "exam",
   "kind": "rec",
   "type": "pseudo",
   "basedOn": [
    "en l'estil d'AndorraRun",
    "al estilo de AndorraRun",
    "in the style of AndorraRun"
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
    "Primer número acabado en 3",
    "First number ending in 3"
   ],
   "q": [
    "Llegiu dos naturals N1 ≤ N2 i escriviu el primer nombre entre N1 i N2 que acaba en 3, o −1 si no n'hi ha (exemple de la teoria).",
    "Leed dos naturales N1 ≤ N2 y escribid el primer número entre N1 y N2 que acaba en 3, o −1 si no hay (ejemplo de la teoría).",
    "Read two naturals N1 ≤ N2 and write the first number between N1 and N2 that ends in 3, or −1 if there is none (example from the theory)."
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
    "¿Es primo?",
    "Is it prime?"
   ],
   "q": [
    "Llegiu un natural N i escriviu «Sí» si és primer i «No» si no ho és. Feu-ho com una cerca d'un divisor.",
    "Leed un natural N y escribid «Sí» si es primo y «No» si no lo es. Hacedlo como una búsqueda de un divisor.",
    "Read a natural N and write «Sí» if it is prime and «No» if it is not. Do it as a search for a divisor."
   ],
   "unit": "t23",
   "level": "hard",
   "kind": "cerca",
   "type": "pseudo",
   "basedOn": [
    "en l'estil d'Els primers",
    "al estilo de Els primers",
    "in the style of Els primers"
   ],
   "hint": [
    "És una cerca: es busca un divisor entre 2 i N − 1; si no se'n troba cap, és primer.",
    "Es una búsqueda: se busca un divisor entre 2 y N − 1; si no se encuentra ninguno, es primo.",
    "It is a search: a divisor is looked for between 2 and N − 1; if none is found, it is prime."
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
    "Primer negativo de una secuencia",
    "First negative in a sequence"
   ],
   "q": [
    "Llegiu enters fins a la marca 0 i escriviu la posició (1, 2, …) del primer negatiu, o −1 si no n'hi ha. No cal llegir la resta de la seqüència un cop trobat.",
    "Leed enteros hasta la marca 0 y escribid la posición (1, 2, …) del primer negativo, o −1 si no hay. No hace falta leer el resto de la secuencia una vez encontrado.",
    "Read integers up to the marker 0 and write the position (1, 2, …) of the first negative, or −1 if there is none. Once it is found there is no need to read the rest of the sequence."
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
    "Primer múltiplo en un intervalo",
    "First multiple in an interval"
   ],
   "q": [
    "Llegiu K, N1 i N2 i escriviu el primer múltiple de K entre N1 i N2, o −1 si no n'hi ha.",
    "Leed K, N1 y N2 y escribid el primer múltiplo de K entre N1 y N2, o −1 si no hay.",
    "Read K, N1 and N2 and write the first multiple of K between N1 and N2, or −1 if there is none."
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
    "Adivina el número",
    "Guess the number"
   ],
   "q": [
    "Llegiu el nombre secret S i després intents fins que algun coincideixi. Escriviu quants intents s'han necessitat. Feu-ho amb REPETEIX … FINS_QUE.",
    "Leed el número secreto S y después intentos hasta que alguno coincida. Escribid cuántos intentos han hecho falta. Hacedlo con REPETEIX … FINS_QUE.",
    "Read the secret number S and then guesses until one matches. Write how many guesses were needed. Do it with REPETEIX … FINS_QUE."
   ],
   "unit": "t23",
   "level": "exam",
   "kind": "rec",
   "type": "pseudo",
   "basedOn": [
    "en l'estil de S04 · Endevina el Nombre",
    "al estilo de S04 · Endevina el Nombre",
    "in the style of S04 · Endevina el Nombre"
   ],
   "hint": [
    "Com a mínim es fa un intent: és el cas típic de REPETEIX.",
    "Como mínimo se hace un intento: es el caso típico de REPETEIX.",
    "At least one guess is made: it is the typical case for REPETEIX."
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
     "x": [
      "Llegeix un enter de l'entrada i imprimeix el mateix enter seguit d'un salt de línia.",
      "Lee un entero de la entrada e imprime el mismo entero seguido de un salto de línea.",
      "Read an integer from the input and print the same integer followed by a line break."
     ]
    }
   ],
   "unit": "s2",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Llegeix amb cin dins una variable int i escriu-la amb cout seguida de endl.",
    "Lee con cin en una variable int y escríbela con cout seguida de endl.",
    "Read with cin into an int variable and write it with cout followed by endl."
   ],
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
     "x": [
      "Llegeix dos enters (separats per espai o salt de línia) i imprimeix la seva suma.",
      "Lee dos enteros (separados por espacio o salto de línea) e imprime su suma.",
      "Read two integers (separated by a space or a line break) and print their sum."
     ]
    }
   ],
   "unit": "s2",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "cin >> a >> b llegeix igual si els nombres van separats per espai o per salt de línia.",
    "cin >> a >> b lee igual si los números van separados por espacio o por salto de línea.",
    "cin >> a >> b reads the same whether the numbers are separated by a space or by a line break."
   ],
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
     "x": [
      "Llegeix tres enters i imprimeix la mitjana amb exactament una xifra decimal.",
      "Lee tres enteros e imprime la media con exactamente una cifra decimal.",
      "Read three integers and print the average with exactly one decimal digit."
     ]
    }
   ],
   "unit": "s2",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Divideix per 3.0 (no per 3) per evitar la divisió entera, i escriu amb fixed << setprecision(1).",
    "Divide por 3.0 (no por 3) para evitar la división entera, y escribe con fixed << setprecision(1).",
    "Divide by 3.0 (not by 3) to avoid integer division, and write with fixed << setprecision(1)."
   ],
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
     "x": [
      "Llegeix dos enters i imprimeix el seu producte.",
      "Lee dos enteros e imprime su producto.",
      "Read two integers and print their product."
     ]
    }
   ],
   "unit": "s2",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Igual que la suma, però amb l'operador *.",
    "Igual que la suma, pero con el operador *.",
    "Like the sum, but with the * operator."
   ],
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
     "x": [
      "Llegeix quatre enters en una sola línia i imprimeix-los cadascun en una línia diferent.",
      "Lee cuatro enteros en una sola línea e imprime cada uno en una línea distinta.",
      "Read four integers on a single line and print each one on a different line."
     ]
    }
   ],
   "unit": "s2",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Quatre variables, un sol cin, i un endl després de cada valor.",
    "Cuatro variables, un solo cin, y un endl después de cada valor.",
    "Four variables, a single cin, and an endl after each value."
   ],
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
     "x": [
      "Llegeix quatre enters (separats per espai o salts de línia) i imprimeix dues línies exactes:",
      "Lee cuatro enteros (separados por espacio o saltos de línea) e imprime dos líneas exactas:",
      "Read four integers (separated by spaces or line breaks) and print two exact lines:"
     ]
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
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Fixa't en l'espai després dels dos punts i en les majúscules: «Suma: » i «Producte: ».",
    "Fíjate en el espacio después de los dos puntos y en las mayúsculas: «Suma: » y «Producte: ».",
    "Watch the space after the colon and the capitals: «Suma: » and «Producte: »."
   ],
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
   "title": [
    "LA FÀBRICA DE PILOTES",
    "LA FÁBRICA DE PELOTAS",
    "THE BALL FACTORY"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Una fàbrica de pilotes de tennis fa l'embalatge d'acord amb les comandes dels clients utilitzant els següents tipus d'embalatges: tipus G amb capacitat de 200 pilotes, tipus M amb capacitat de 50 pilotes, tipus P amb capacitat de 10 pilotes.",
      "Una fábrica de pelotas de tenis hace el embalaje según los pedidos de los clientes usando estos tipos de embalaje: tipo G con capacidad para 200 pelotas, tipo M con capacidad para 50 pelotas, tipo P con capacidad para 10 pelotas.",
      "A tennis ball factory packs orders according to the customers' requests using these types of packaging: type G holding 200 balls, type M holding 50 balls, type P holding 10 balls."
     ]
    },
    {
     "t": "p",
     "x": [
      "Les quantitats encarregades per cada client són sempre múltiples de 10.",
      "Las cantidades encargadas por cada cliente son siempre múltiplos de 10.",
      "The quantities ordered by each customer are always multiples of 10."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que entrant el nombre de pilotes que demana el client, ens digui quin nombre de cada tipus d'embalatge utilitzarem, de forma que el nombre total de caixes sigui mínim.",
      "Diseñad un algoritmo que, introduciendo el número de pelotas que pide el cliente, nos diga cuántos embalajes de cada tipo usaremos, de forma que el número total de cajas sea mínimo.",
      "Design an algorithm that, given the number of balls the customer orders, tells us how many packages of each type we will use, so that the total number of boxes is minimal."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un enter QNT (nombre de pilotes, múltiple de 10, QNT ≥ 0).",
      "**Entrada:** un entero QNT (número de pelotas, múltiplo de 10, QNT ≥ 0).",
      "**Input:** an integer QNT (number of balls, a multiple of 10, QNT ≥ 0)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 3 línies, sense cap altre text):",
      "**Salida** (exactamente 3 líneas, sin ningún otro texto):",
      "**Output** (exactly 3 lines, with no other text):"
     ]
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
     "x": [
      "Calcula-ho amb divisions i mòduls successius (primer les caixes grans, després les mitjanes amb el que quedi, i finalment les petites), exactament com a l'algorisme proposat a classe. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Calcúlalo con divisiones y módulos sucesivos (primero las cajas grandes, después las medianas con lo que quede y finalmente las pequeñas), exactamente como en el algoritmo propuesto en clase. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Compute it with successive divisions and remainders (first the large boxes, then the medium ones with what is left, and finally the small ones), exactly as in the algorithm proposed in class. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
    }
   ],
   "unit": "s2",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "G = QNT / 200; el que queda és QNT % 200, i amb això M = resta / 50; les petites són el que queda dividit per 10. Compte: després de «Mitjanes:» i «Petites:» no hi ha espai.",
    "G = QNT / 200; lo que queda es QNT % 200, y con eso M = resto / 50; las pequeñas son lo que queda dividido por 10. Cuidado: después de «Mitjanes:» y «Petites:» no hay espacio.",
    "G = QNT / 200; what is left is QNT % 200, and with that M = remainder / 50; the small ones are what is left divided by 10. Careful: after «Mitjanes:» and «Petites:» there is no space."
   ],
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
   "title": [
    "EL PÀRKING",
    "EL PARKING",
    "THE CAR PARK"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Dissenyeu l'algorisme que permeti calcular l'import a pagar en un pàrking que funciona de les 8 del matí a les 10 de la nit tenint en compte que es cobra a 0,80 € l'hora o fracció.",
      "Diseñad el algoritmo que permita calcular el importe que hay que pagar en un parking que funciona de las 8 de la mañana a las 10 de la noche, teniendo en cuenta que se cobra a 0,80 € la hora o fracción.",
      "Design the algorithm that computes the amount to pay in a car park open from 8 in the morning to 10 at night, given that it charges €0.80 per hour or part of an hour."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** quatre enters: HE, ME (hora i minut d'entrada), HS, MS (hora i minut de sortida).",
      "**Entrada:** cuatro enteros: HE, ME (hora y minuto de entrada), HS, MS (hora y minuto de salida).",
      "**Input:** four integers: HE, ME (entry hour and minute), HS, MS (exit hour and minute)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (una única línia):",
      "**Salida** (una única línea):",
      "**Output** (a single line):"
     ]
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
     "x": [
      "Calcula els minuts totals d'entrada i de sortida, la diferència, i les fraccions d'hora completes; si sobren minuts (encara que sigui 1), compta una hora sencera més. Multiplica pel preu (0,80 €), tal com a l'algorisme proposat a classe. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Calcula los minutos totales de entrada y de salida, la diferencia y las fracciones de hora completas; si sobran minutos (aunque sea 1), cuenta una hora entera más. Multiplica por el precio (0,80 €), tal como en el algoritmo propuesto en clase. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Compute the total entry and exit minutes, the difference and the complete hours; if there are minutes left over (even 1), count one more whole hour. Multiply by the price (€0.80), as in the algorithm proposed in class. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
    }
   ],
   "unit": "s3",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Passa-ho tot a minuts (hora * 60 + minut). Hores = diferència / 60, i si diferència % 60 no és 0, suma'n una. Escriu amb fixed << setprecision(2).",
    "Pásalo todo a minutos (hora * 60 + minuto). Horas = diferencia / 60, y si diferencia % 60 no es 0, súmale una. Escribe con fixed << setprecision(2).",
    "Convert everything to minutes (hour * 60 + minute). Hours = difference / 60, and if difference % 60 is not 0, add one. Write with fixed << setprecision(2)."
   ],
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
   "title": [
    "QUADRANT",
    "CUADRANTE",
    "QUADRANT"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que donada una coordenada (x,y) ens digui en quin o quins quadrants pertany.",
      "Diseñad un algoritmo que, dada una coordenada (x,y), nos diga a qué cuadrante o cuadrantes pertenece.",
      "Design an algorithm that, given a coordinate (x,y), tells us which quadrant or quadrants it belongs to."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** dos enters x, y.",
      "**Entrada:** dos enteros x, y.",
      "**Input:** two integers x, y."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (una única línia): els números dels quadrants (1, 2, 3 o 4) als quals pertany el punt, separats per un espai i en ordre creixent (sense espai al final). Un punt sobre un eix pertany als dos quadrants que toca; l'origen (0,0) pertany als quatre.",
      "**Salida** (una única línea): los números de los cuadrantes (1, 2, 3 o 4) a los que pertenece el punto, separados por un espacio y en orden creciente (sin espacio al final). Un punto sobre un eje pertenece a los dos cuadrantes que toca; el origen (0,0) pertenece a los cuatro.",
      "**Output** (a single line): the numbers of the quadrants (1, 2, 3 or 4) the point belongs to, separated by a space and in increasing order (without a space at the end). A point on an axis belongs to the two quadrants it touches; the origin (0,0) belongs to all four."
     ]
    },
    {
     "t": "p",
     "x": [
      "Recorda la numeració habitual: Quadrant 1 (x>0, y>0), Quadrant 2 (x<0, y>0), Quadrant 3 (x<0, y<0), Quadrant 4 (x>0, y<0).",
      "Recuerda la numeración habitual: Cuadrante 1 (x>0, y>0), Cuadrante 2 (x<0, y>0), Cuadrante 3 (x<0, y<0), Cuadrante 4 (x>0, y<0).",
      "Remember the usual numbering: Quadrant 1 (x>0, y>0), Quadrant 2 (x<0, y>0), Quadrant 3 (x<0, y<0), Quadrant 4 (x>0, y<0)."
     ]
    },
    {
     "t": "p",
     "x": [
      "No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
    }
   ],
   "unit": "s3",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Fes quatre if independents (no else if), un per quadrant, amb ≥ i ≤ perquè els eixos comptin. Per no deixar espai al final, escriu l'espai abans de cada número excepte el primer.",
    "Haz cuatro if independientes (no else if), uno por cuadrante, con ≥ y ≤ para que los ejes cuenten. Para no dejar espacio al final, escribe el espacio antes de cada número excepto el primero.",
    "Write four independent ifs (not else if), one per quadrant, with ≥ and ≤ so that the axes count. To avoid a space at the end, write the space before each number except the first."
   ],
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
   "title": [
    "LA BOTIGA DELS OUS",
    "LA TIENDA DE LOS HUEVOS",
    "THE EGG SHOP"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "En una botiga de queviures es venen ous en capses de 12, i també en venen d'escadussers. N'hi ha de tres qualitats: \"A\" a 3 € la dotzena, \"B\" a 2,5 € i \"C\" a 2 €. Els escadussers cal pagar-los a 0,30, 0,25, 0,20 € la unitat respectivament.",
      "En una tienda de comestibles se venden huevos en cajas de 12, y también sueltos. Los hay de tres calidades: \"A\" a 3 € la docena, \"B\" a 2,5 € y \"C\" a 2 €. Los sueltos se pagan a 0,30, 0,25 y 0,20 € la unidad respectivamente.",
      "A grocery shop sells eggs in boxes of 12, and also loose. There are three qualities: \"A\" at €3 a dozen, \"B\" at €2.5 and \"C\" at €2. Loose eggs cost €0.30, €0.25 and €0.20 each respectively."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu l'algorisme d'automatització de la venda d'ous, de tal manera que entrant la quantitat d'ous i el tipus ens digui quantes capses (dotzenes) i quants ous escadussers cal lliurar al client, així com l'import de la compra.",
      "Diseñad el algoritmo que automatice la venta de huevos, de manera que, introduciendo la cantidad de huevos y el tipo, nos diga cuántas cajas (docenas) y cuántos huevos sueltos hay que entregar al cliente, así como el importe de la compra.",
      "Design the algorithm that automates the sale of eggs, so that, given the number of eggs and the type, it tells us how many boxes (dozens) and how many loose eggs must be handed to the customer, as well as the amount of the purchase."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un enter NO (nombre d'ous, NO ≥ 0) i un caràcter TPO ('A', 'B' o 'C').",
      "**Entrada:** un entero NO (número de huevos, NO ≥ 0) y un carácter TPO ('A', 'B' o 'C').",
      "**Input:** an integer NO (number of eggs, NO ≥ 0) and a character TPO ('A', 'B' or 'C')."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 3 línies):",
      "**Salida** (exactamente 3 líneas):",
      "**Output** (exactly 3 lines):"
     ]
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
     "x": [
      "on ND és el nombre de dotzenes senceres, NE el nombre d'ous escadussers (0-11), i l'import amb 2 decimals.",
      "donde ND es el número de docenas enteras, NE el número de huevos sueltos (0-11), y el importe con 2 decimales.",
      "where ND is the number of whole dozens, NE the number of loose eggs (0-11), and the amount with 2 decimals."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb switch per triar el preu segons el tipus, tal com es fa a l'algorisme proposat a classe. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con switch para elegir el precio según el tipo, tal como se hace en el algoritmo propuesto en clase. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a switch to choose the price according to the type, as is done in the algorithm proposed in class. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
    }
   ],
   "unit": "s3",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "ND = NO / 12 i NE = NO % 12. El switch sobre el char TPO (case 'A': ... break;) dona el preu de la dotzena i el de la unitat.",
    "ND = NO / 12 y NE = NO % 12. El switch sobre el char TPO (case 'A': ... break;) da el precio de la docena y el de la unidad.",
    "ND = NO / 12 and NE = NO % 12. The switch on the char TPO (case 'A': ... break;) gives the price of the dozen and of the unit."
   ],
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
     "x": [
      "Llegeix tres enters i imprimeix-los en ordre ascendent (separats per espais) sense usar bucles.",
      "Lee tres enteros e imprímelos en orden ascendente (separados por espacios) sin usar bucles.",
      "Read three integers and print them in ascending order (separated by spaces) without using loops."
     ]
    }
   ],
   "unit": "s3",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Amb tres comparacions i intercanvis (a amb b, b amb c, i de nou a amb b) queden ordenats; fes l'intercanvi amb una variable auxiliar.",
    "Con tres comparaciones e intercambios (a con b, b con c, y otra vez a con b) quedan ordenados; haz el intercambio con una variable auxiliar.",
    "With three comparisons and swaps (a with b, b with c, and a with b again) they end up sorted; do the swap with an auxiliary variable."
   ],
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
   "title": [
    "EL CONCERT DE ROCK",
    "EL CONCIERTO DE ROCK",
    "THE ROCK CONCERT"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "A l'entrada del recinte d'un festival de rock es deixa un ordinador engegat per a què cada persona que ho desitgi entri la seva edat (no sabem \"a priori\" quantes persones utilitzaran l'ordinador).",
      "En la entrada del recinto de un festival de rock se deja un ordenador encendido para que cada persona que lo desee introduzca su edad (no sabemos «a priori» cuántas personas usarán el ordenador).",
      "At the entrance of a rock festival a computer is left switched on so that anyone who wishes can enter their age (we do not know “a priori” how many people will use the computer)."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que en finalitzar el festival ens digui:",
      "Diseñad un algoritmo que, al terminar el festival, nos diga:",
      "Design an algorithm that, at the end of the festival, tells us:"
     ]
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
     "x": [
      "El procés finalitza en entrar l'edat 0 (aquesta darrera edat 0 no s'ha de comptar).",
      "El proceso termina al introducir la edad 0 (esta última edad 0 no se tiene que contar).",
      "The process ends when the age 0 is entered (this last age 0 must not be counted)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència d'enters EDAT, acabada amb el valor 0 (no sabem per endavant quantes persones hi haurà, però com a mínim n'hi ha una).",
      "**Entrada:** una secuencia de enteros EDAT, terminada con el valor 0 (no sabemos de antemano cuántas personas habrá, pero como mínimo hay una).",
      "**Input:** a sequence of integers EDAT, ending with the value 0 (we do not know in advance how many people there will be, but there is at least one)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (quatre línies, en aquest ordre):",
      "**Salida** (cuatro líneas, en este orden):",
      "**Output** (four lines, in this order):"
     ]
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
     "x": [
      "(amb 2 decimals a la mitjana)",
      "(con 2 decimales en la media)",
      "(with 2 decimals for the average)"
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb un while, exactament amb l'esquema de l'algorisme de disseny descendent proposat a classe (acumulador de la suma, comptador de persones, comptador de majors de 50, i actualització de l'edat màxima i del seu comptador dins del mateix bucle). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un while, exactamente con el esquema del algoritmo de diseño descendente propuesto en clase (acumulador de la suma, contador de personas, contador de mayores de 50 y actualización de la edad máxima y de su contador dentro del mismo bucle). No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a while, exactly with the scheme of the top-down design algorithm proposed in class (sum accumulator, people counter, over-50 counter and updating the maximum age and its counter inside the same loop). Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
    }
   ],
   "unit": "s4",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Lectura avançada: llegeix una edat abans del while i una altra al final del bucle. Si l'edat supera el màxim, el màxim canvia i el comptador torna a 1; si l'iguala, el comptador augmenta.",
    "Lectura adelantada: lee una edad antes del while y otra al final del bucle. Si la edad supera el máximo, el máximo cambia y el contador vuelve a 1; si lo iguala, el contador aumenta.",
    "Read-ahead: read an age before the while and another at the end of the loop. If the age exceeds the maximum, the maximum changes and the counter goes back to 1; if it equals it, the counter increases."
   ],
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
   "title": [
    "ANDORRARUN — APARTAT (c)",
    "ANDORRARUN — APARTADO (c)",
    "ANDORRARUN — PART (c)"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Disposeu de dues seqüències de nombres naturals. La primera seqüència representa els números de dorsals (naturals de 4 xifres) dels participants en la marató AndorraRun, i la segona seqüència representa els dorsals dels participants en l'ordre en què han abandonat la marató.",
      "Disponéis de dos secuencias de números naturales. La primera secuencia representa los números de dorsal (naturales de 4 cifras) de los participantes en la maratón AndorraRun, y la segunda representa los dorsales de los participantes en el orden en que han abandonado la maratón.",
      "You have two sequences of natural numbers. The first sequence represents the race numbers (4-digit naturals) of the participants in the AndorraRun marathon, and the second represents the race numbers of the participants in the order in which they dropped out of the marathon."
     ]
    },
    {
     "t": "p",
     "x": [
      "Es sap que els dorsals estan codificats per categories en funció de l'edat del participant:",
      "Se sabe que los dorsales están codificados por categorías en función de la edad del participante:",
      "The race numbers are known to be encoded by category according to the participant's age:"
     ]
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
     "x": [
      "Si les dues seqüències tenen un -1 com a marca de final, calculeu:",
      "Si las dos secuencias tienen un -1 como marca de final, calculad:",
      "If both sequences have a -1 as the end marker, compute:"
     ]
    },
    {
     "t": "p",
     "x": [
      "(c) Sabent que el Pepet i el Joanet han participat en la marató. Comproveu si el Pepet amb dorsal 4003 ha abandonat la marató després del Joanet amb dorsal 4509. Això en el cas que tots dos hagin abandonat, ja que pot ser que algun d'ells o els dos hagin acabat la marató. En aquest cas, s'indica quin o quins d'ells no han abandonat la marató: \"Pepet no ha abandonat\" i/o \"Joanet no ha abandonat\".",
      "(c) Sabiendo que Pepet y Joanet han participado en la maratón, comprobad si Pepet, con dorsal 4003, ha abandonado la maratón después de Joanet, con dorsal 4509. Esto en el caso de que los dos hayan abandonado, ya que puede que alguno de ellos o los dos hayan terminado la maratón. En ese caso, se indica cuál o cuáles de ellos no han abandonado la maratón: \"Pepet no ha abandonat\" y/o \"Joanet no ha abandonat\".",
      "(c) Knowing that Pepet and Joanet took part in the marathon, check whether Pepet, with race number 4003, dropped out of the marathon after Joanet, with race number 4509. This applies if both have dropped out, since one or both of them may have finished the marathon. In that case, state which of them did not drop out: \"Pepet no ha abandonat\" and/or \"Joanet no ha abandonat\"."
     ]
    },
    {
     "t": "p",
     "x": [
      "Nota: resoleu els algorismes (a), (b), (c) i (d) de forma independent (en preguntes separades). Aquesta pregunta correspon únicament a l'apartat (c).",
      "Nota: resolved los algoritmos (a), (b), (c) y (d) de forma independiente (en preguntas separadas). Esta pregunta corresponde únicamente al apartado (c).",
      "Note: solve algorithms (a), (b), (c) and (d) independently (in separate questions). This question corresponds only to part (c)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** la segona seqüència (seq.2, l'ordre en què els participants van abandonant la marató), acabada amb -1. (Aquest apartat no fa servir la primera seqüència.)",
      "**Entrada:** la segunda secuencia (sec. 2, el orden en que los participantes van abandonando la maratón), terminada con -1. (Este apartado no usa la primera secuencia.)",
      "**Input:** the second sequence (seq. 2, the order in which the participants drop out of the marathon), ending with -1. (This part does not use the first sequence.)"
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida:**",
      "**Salida:**",
      "**Output:**"
     ]
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
     "x": [
      "Fes-ho amb un while. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un while. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a while. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
    }
   ],
   "unit": "s4",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Compta les posicions mentre llegeixes: guarda la posició en què surt el 4003 i la del 4509 (0 si no surten). Al final, si cap és 0 compara-les; si no, escriu qui no ha abandonat.",
    "Cuenta las posiciones mientras lees: guarda la posición en que sale el 4003 y la del 4509 (0 si no salen). Al final, si ninguna es 0 compáralas; si no, escribe quién no ha abandonado.",
    "Count the positions as you read: store the position where 4003 comes out and that of 4509 (0 if they do not come out). At the end, if neither is 0 compare them; otherwise, write who did not drop out."
   ],
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
   "title": [
    "ENDEVINA EL NOMBRE",
    "ADIVINA EL NÚMERO",
    "GUESS THE NUMBER"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, generant un número a l'atzar de com a màxim dues xifres, es pugui endevinar donant com a pista \"Massa Gran\" o \"Massa Petit\".",
      "Diseñad un algoritmo que, generando un número al azar de como máximo dos cifras, permita adivinarlo dando como pista \"Massa Gran\" o \"Massa Petit\".",
      "Design an algorithm that, generating a random number of at most two digits, lets it be guessed by giving the hint \"Massa Gran\" or \"Massa Petit\"."
     ]
    },
    {
     "t": "p",
     "x": [
      "Adaptació per a la correcció automàtica: en lloc de generar el número secret a l'atzar dins del programa (que faria el resultat imprevisible), el llegirem com la primera dada d'entrada — és exactament el mateix esquema de bucle, només canvia d'on surt NA.",
      "Adaptación para la corrección automática: en lugar de generar el número secreto al azar dentro del programa (lo que haría el resultado imprevisible), lo leeremos como el primer dato de entrada — es exactamente el mismo esquema de bucle, solo cambia de dónde sale NA.",
      "Adaptation for automatic marking: instead of generating the secret number at random inside the program (which would make the result unpredictable), we will read it as the first input data item — it is exactly the same loop scheme, only where NA comes from changes."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** el número secret NA, seguit d'una seqüència d'intents Num (que acabarà exactament quan un intent coincideixi amb NA).",
      "**Entrada:** el número secreto NA, seguido de una secuencia de intentos Num (que terminará exactamente cuando un intento coincida con NA).",
      "**Input:** the secret number NA, followed by a sequence of guesses Num (which will end exactly when a guess matches NA)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida:** per cada intent que no sigui l'encertat, una línia amb `Massa Gran` (si l'intent és més gran que NA) o `Massa Petit` (si és més petit); quan s'encerti, escriu `Encertat !!!` i acaba.",
      "**Salida:** por cada intento que no sea el acertado, una línea con `Massa Gran` (si el intento es mayor que NA) o `Massa Petit` (si es menor); cuando se acierte, escribe `Encertat !!!` y termina.",
      "**Output:** for each guess that is not the right one, a line with `Massa Gran` (if the guess is larger than NA) or `Massa Petit` (if it is smaller); when it is guessed, write `Encertat !!!` and stop."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb un while, exactament amb l'esquema de l'algorisme proposat a classe (la condició del bucle compara directament NA amb l'últim intent llegit). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un while, exactamente con el esquema del algoritmo propuesto en clase (la condición del bucle compara directamente NA con el último intento leído). No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a while, exactly with the scheme of the algorithm proposed in class (the loop condition compares NA directly with the last guess read). Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
    }
   ],
   "unit": "s4",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Llegeix NA i el primer intent abans del bucle; mentre Num sigui diferent de NA, escriu la pista i llegeix un altre intent. «Encertat !!!» va després del bucle.",
    "Lee NA y el primer intento antes del bucle; mientras Num sea distinto de NA, escribe la pista y lee otro intento. «Encertat !!!» va después del bucle.",
    "Read NA and the first guess before the loop; while Num is different from NA, write the hint and read another guess. «Encertat !!!» goes after the loop."
   ],
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
     "x": [
      "Llegeix enters fins a trobar -1. Calcula la mitjana dels valors estrictament positius llegits abans del -1. Si no n'hi ha cap, imprimeix 0 (sense decimals).",
      "Lee enteros hasta encontrar -1. Calcula la media de los valores estrictamente positivos leídos antes del -1. Si no hay ninguno, imprime 0 (sin decimales).",
      "Read integers until -1 is found. Compute the average of the strictly positive values read before the -1. If there are none, print 0 (without decimals)."
     ]
    },
    {
     "t": "p",
     "x": [
      "La mitjana s'escriu amb el format per defecte de cout (per exemple, 5 i 6 donen 5.5).",
      "La media se escribe con el formato por defecto de cout (por ejemplo, 5 y 6 dan 5.5).",
      "The average is written with cout's default format (for example, 5 and 6 give 5.5)."
     ]
    }
   ],
   "unit": "s4",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Acumula la suma i compta només quan el valor és > 0 (el 0 i els negatius no compten). Divideix com a double: (double) suma / n.",
    "Acumula la suma y cuenta solo cuando el valor es > 0 (el 0 y los negativos no cuentan). Divide como double: (double) suma / n.",
    "Accumulate the sum and count only when the value is > 0 (0 and negatives do not count). Divide as double: (double) suma / n."
   ],
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
   "title": [
    "EL FIBONACCI",
    "EL FIBONACCI",
    "FIBONACCI"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que permeti generar els N (amb N>=3) primers termes de la sèrie de Fibonacci 0 1 1 2 3 5 8 13 ...",
      "Diseñad un algoritmo que permita generar los N (con N>=3) primeros términos de la serie de Fibonacci 0 1 1 2 3 5 8 13 ...",
      "Design an algorithm that generates the first N (with N>=3) terms of the Fibonacci sequence 0 1 1 2 3 5 8 13 ..."
     ]
    },
    {
     "t": "p",
     "x": [
      "Nota: cada nou element, llevat dels dos primers, s'obté com a suma dels dos anteriors.",
      "Nota: cada nuevo elemento, salvo los dos primeros, se obtiene como suma de los dos anteriores.",
      "Note: each new element, except the first two, is obtained as the sum of the two previous ones."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un natural N (N>=3).",
      "**Entrada:** un natural N (N>=3).",
      "**Input:** a natural N (N>=3)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (una única línia): els N primers termes separats per espais (amb un espai també després de l'últim, tal com a l'algorisme proposat a classe).",
      "**Salida** (una única línea): los N primeros términos separados por espacios (con un espacio también después del último, tal como en el algoritmo propuesto en clase).",
      "**Output** (a single line): the first N terms separated by spaces (with a space also after the last one, as in the algorithm proposed in class)."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb un bucle repeteix (do...while en C++), tal com a l'algorisme proposat a classe. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un bucle repetir (do...while en C++), tal como en el algoritmo propuesto en clase. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a repeat loop (do...while in C++), as in the algorithm proposed in class. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
    }
   ],
   "unit": "s5",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Escriu primer «0 1 » i després, dins el do...while, calcula el següent com a suma dels dos anteriors i desplaça'ls; el comptador va de 2 fins a N.",
    "Escribe primero «0 1 » y después, dentro del do...while, calcula el siguiente como suma de los dos anteriores y desplázalos; el contador va de 2 a N.",
    "First write «0 1 » and then, inside the do...while, compute the next one as the sum of the two previous ones and shift them; the counter goes from 2 to N."
   ],
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
   "title": [
    "EXERCICI 4 — BINARI A DECIMAL",
    "EJERCICIO 4 — BINARIO A DECIMAL",
    "EXERCISE 4 — BINARY TO DECIMAL"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que donat un nombre x representat en binari, realitzi la representació decimal (base 10) del nombre.",
      "Diseñad un algoritmo que, dado un número x representado en binario, obtenga la representación decimal (base 10) del número.",
      "Design an algorithm that, given a number x represented in binary, obtains the decimal (base 10) representation of the number."
     ]
    },
    {
     "t": "p",
     "x": [
      "Adaptació per a la correcció automàtica: el nombre binari x s'introdueix com una seqüència de xifres 0 i 1 (per exemple, 1011).",
      "Adaptación para la corrección automática: el número binario x se introduce como una secuencia de cifras 0 y 1 (por ejemplo, 1011).",
      "Adaptation for automatic marking: the binary number x is entered as a sequence of digits 0 and 1 (for example, 1011)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un enter x format només per xifres 0 i 1 (la seva representació en binari).",
      "**Entrada:** un entero x formado solo por cifras 0 y 1 (su representación en binario).",
      "**Input:** an integer x made only of the digits 0 and 1 (its binary representation)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (una única línia): `Decimal: R`",
      "**Salida** (una única línea): `Decimal: R`",
      "**Output** (a single line): `Decimal: R`"
     ]
    },
    {
     "t": "p",
     "x": [
      "Extreu les xifres de x d'una en una (de dreta a esquerra) i acumula el valor decimal multiplicant cada xifra per la potència de 2 que li correspon. Fes-ho amb un while. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Extrae las cifras de x de una en una (de derecha a izquierda) y acumula el valor decimal multiplicando cada cifra por la potencia de 2 que le corresponde. Hazlo con un while. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Extract the digits of x one by one (from right to left) and accumulate the decimal value by multiplying each digit by its corresponding power of 2. Do it with a while. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
    }
   ],
   "unit": "s5",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "x % 10 és l'última xifra i x / 10 la treu. Porta una variable potència que comença a 1 i es multiplica per 2 a cada volta.",
    "x % 10 es la última cifra y x / 10 la quita. Lleva una variable potencia que empieza en 1 y se multiplica por 2 en cada vuelta.",
    "x % 10 is the last digit and x / 10 removes it. Keep a power variable that starts at 1 and is multiplied by 2 at each iteration."
   ],
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
   "title": [
    "LA SUMA DELS DÍGITS",
    "LA SUMA DE LOS DÍGITOS",
    "THE DIGIT SUM"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que donat un nombre N, ens calculi la suma dels seus dígits.",
      "Diseñad un algoritmo que, dado un número N, calcule la suma de sus dígitos.",
      "Design an algorithm that, given a number N, computes the sum of its digits."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un natural N.",
      "**Entrada:** un natural N.",
      "**Input:** a natural N."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (una única línia): la suma dels dígits de N.",
      "**Salida** (una única línea): la suma de los dígitos de N.",
      "**Output** (a single line): the sum of the digits of N."
     ]
    },
    {
     "t": "p",
     "x": [
      "Extreu les xifres de N d'una en una amb un while, tal com a l'algorisme proposat a classe. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Extrae las cifras de N de una en una con un while, tal como en el algoritmo propuesto en clase. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Extract the digits of N one by one with a while, as in the algorithm proposed in class. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
    }
   ],
   "unit": "s5",
   "level": "easy",
   "lv": 1,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Mentre N > 0: suma N % 10 i fes N = N / 10.",
    "Mientras N > 0: suma N % 10 y haz N = N / 10.",
    "While N > 0: add N % 10 and do N = N / 10."
   ],
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
   "title": [
    "EXERCICI 5 — SUFIX NUMÈRIC",
    "EJERCICIO 5 — SUFIJO NUMÉRICO",
    "EXERCISE 5 — NUMERIC SUFFIX"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Donats dos nombres naturals x i y, dissenyeu un algorisme que ens digui si un dels nombres és sufix de l'altre. Per exemple, si x=12 i y=4512, llavors tenim que 12 és sufix de 4512.",
      "Dados dos números naturales x e y, diseñad un algoritmo que nos diga si uno de los números es sufijo del otro. Por ejemplo, si x=12 e y=4512, entonces 12 es sufijo de 4512.",
      "Given two natural numbers x and y, design an algorithm that tells us whether one of the numbers is a suffix of the other. For example, if x=12 and y=4512, then 12 is a suffix of 4512."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** dos naturals x i y (x, y ≥ 1).",
      "**Entrada:** dos naturales x e y (x, y ≥ 1).",
      "**Input:** two naturals x and y (x, y ≥ 1)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (una única línia): `Si, un dels nombres es sufix de l'altre` o `No, cap dels nombres es sufix de l'altre`.",
      "**Salida** (una única línea): `Si, un dels nombres es sufix de l'altre` o `No, cap dels nombres es sufix de l'altre`.",
      "**Output** (a single line): `Si, un dels nombres es sufix de l'altre` or `No, cap dels nombres es sufix de l'altre`."
     ]
    },
    {
     "t": "p",
     "x": [
      "Recorda que un nombre A és sufix d'un nombre B si les últimes xifres de B (tantes com xifres té A) coincideixen exactament amb A. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Recuerda que un número A es sufijo de un número B si las últimas cifras de B (tantas como cifras tiene A) coinciden exactamente con A. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Remember that a number A is a suffix of a number B if the last digits of B (as many as A has) match A exactly. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
    }
   ],
   "unit": "s5",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Compara les últimes xifres de tots dos (x % 10 i y % 10) mentre coincideixin, traient-les amb / 10. Si un dels dos s'ha quedat sense xifres (val 0), és sufix de l'altre.",
    "Compara las últimas cifras de los dos (x % 10 e y % 10) mientras coincidan, quitándolas con / 10. Si uno de los dos se ha quedado sin cifras (vale 0), es sufijo del otro.",
    "Compare the last digits of both (x % 10 and y % 10) while they match, removing them with / 10. If one of them has run out of digits (it is 0), it is a suffix of the other."
   ],
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
   "title": [
    "DATA POSTERIOR",
    "FECHA POSTERIOR",
    "LATER DATE"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que a partir de dues dates escrigui la que és posterior.",
      "Diseñad un algoritmo que, a partir de dos fechas, escriba la que es posterior.",
      "Design an algorithm that, from two dates, writes the one that is later."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** sis enters: D1 M1 A1 (dia, mes, any de la primera data) i D2 M2 A2 (dia, mes, any de la segona data).",
      "**Entrada:** seis enteros: D1 M1 A1 (día, mes, año de la primera fecha) y D2 M2 A2 (día, mes, año de la segunda fecha).",
      "**Input:** six integers: D1 M1 A1 (day, month, year of the first date) and D2 M2 A2 (day, month, year of the second date)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (una única línia):",
      "**Salida** (una única línea):",
      "**Output** (a single line):"
     ]
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
     "x": [
      "Compara primer l'any, després el mes, i finalment el dia. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Compara primero el año, después el mes y finalmente el día. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Compare first the year, then the month and finally the day. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
    }
   ],
   "unit": "s3",
   "level": "exam",
   "lv": 2,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Si els anys són diferents decideix l'any; si són iguals, decideix el mes; si també, el dia. Un bool «primeraPosterior» simplifica escriure el resultat.",
    "Si los años son distintos decide el año; si son iguales, decide el mes; si también, el día. Un bool «primeraPosterior» simplifica escribir el resultado.",
    "If the years are different the year decides; if they are equal, the month decides; if those are too, the day. A bool «primeraPosterior» makes writing the result simpler."
   ],
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
   "title": [
    "ELS NOMBRES PERFECTES (disseny descendent)",
    "LOS NÚMEROS PERFECTOS (diseño descendente)",
    "PERFECT NUMBERS (top-down design)"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Direm que un número és \"perfecte\" quan és igual a la suma dels seus divisors excepte ell mateix. Dissenyeu un algorisme que llisti tots els nombres perfectes menors de 100.",
      "Diremos que un número es \"perfecto\" cuando es igual a la suma de sus divisores excepto él mismo. Diseñad un algoritmo que liste todos los números perfectos menores que 100.",
      "We say a number is \"perfect\" when it is equal to the sum of its divisors except itself. Design an algorithm that lists all the perfect numbers less than 100."
     ]
    },
    {
     "t": "p",
     "x": [
      "Exemple: el 6 és perfecte ja que 6=1+2+3.",
      "Ejemplo: el 6 es perfecto ya que 6=1+2+3.",
      "Example: 6 is perfect since 6=1+2+3."
     ]
    },
    {
     "t": "p",
     "x": [
      "Adaptació per a la correcció automàtica: el límit \"100\" es llegeix com a entrada N, en lloc d'estar fixat al codi (així es pot comprovar amb diferents límits).",
      "Adaptación para la corrección automática: el límite \"100\" se lee como entrada N, en lugar de estar fijado en el código (así se puede comprobar con diferentes límites).",
      "Adaptation for automatic marking: the limit \"100\" is read as the input N, instead of being fixed in the code (so it can be checked with different limits)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un natural N (el límit superior, exclòs).",
      "**Entrada:** un natural N (el límite superior, excluido).",
      "**Input:** a natural N (the upper limit, excluded)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (una única línia): els nombres perfectes menors que N, separats per espais (amb un espai també després de l'últim). Si no n'hi ha cap, la línia queda buida.",
      "**Salida** (una única línea): los números perfectos menores que N, separados por espacios (con un espacio también después del último). Si no hay ninguno, la línea queda vacía.",
      "**Output** (a single line): the perfect numbers less than N, separated by spaces (with a space also after the last one). If there are none, the line is empty."
     ]
    },
    {
     "t": "p",
     "x": [
      "Per a cada candidat X, calcula la suma dels seus divisors (recorrent-los de l'1 a X) i compara-la amb X, tal com a l'algorisme de disseny descendent proposat a classe. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Para cada candidato X, calcula la suma de sus divisores (recorriéndolos del 1 a X) y compárala con X, tal como en el algoritmo de diseño descendente propuesto en clase. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "For each candidate X, compute the sum of its divisors (going from 1 to X) and compare it with X, as in the top-down design algorithm proposed in class. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
    }
   ],
   "unit": "s6",
   "level": "hard",
   "lv": 3,
   "type": "cpp",
   "src": "exam",
   "srcName": [
    "Model de pregunta del CP",
    "Modelo de pregunta del CP",
    "Test-style question"
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
   "hint": [
    "Dos bucles niats: el de fora recorre els candidats X de 1 a N-1 i el de dins suma els divisors d de X amb d < X (X % d == 0). Si la suma val X, l'escrius seguit d'un espai.",
    "Dos bucles anidados: el de fuera recorre los candidatos X de 1 a N-1 y el de dentro suma los divisores d de X con d < X (X % d == 0). Si la suma vale X, lo escribes seguido de un espacio.",
    "Two nested loops: the outer one goes through the candidates X from 1 to N-1 and the inner one adds the divisors d of X with d < X (X % d == 0). If the sum is X, you write it followed by a space."
   ],
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
   "title": [
    "EL CRONÒMETRE DE LA MARATÓ",
    "EL CRONÓMETRO DE LA MARATÓN",
    "THE MARATHON STOPWATCH"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "El cronometratge electrònic d'una marató registra el temps de cada corredor com un nombre total de segons des del tret de sortida. Per publicar les classificacions, l'organització vol veure aquest temps en hores, minuts i segons.",
      "El cronometraje electrónico de una maratón registra el tiempo de cada corredor como un número total de segundos desde el disparo de salida. Para publicar las clasificaciones, la organización quiere ver ese tiempo en horas, minutos y segundos.",
      "The electronic timing of a marathon records each runner's time as a total number of seconds since the starting gun. To publish the results, the organisers want to see this time in hours, minutes and seconds."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, donat el nombre total de segons, escrigui el temps en hores, minuts i segons, i també en format de rellotge.",
      "Diseñad un algoritmo que, dado el número total de segundos, escriba el tiempo en horas, minutos y segundos, y también en formato de reloj.",
      "Design an algorithm that, given the total number of seconds, writes the time in hours, minutes and seconds, and also in clock format."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un enter S (nombre total de segons, 0 ≤ S ≤ 359999).",
      "**Entrada:** un entero S (número total de segundos, 0 ≤ S ≤ 359999).",
      "**Input:** an integer S (total number of seconds, 0 ≤ S ≤ 359999)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 2 línies): a la primera, les hores H, els minuts M (de 0 a 59) i els segons SG (de 0 a 59), sense zeros a l'esquerra; a la segona, el mateix temps amb dues xifres per a cada valor (posant un zero a l'esquerra si cal).",
      "**Salida** (exactamente 2 líneas): en la primera, las horas H, los minutos M (de 0 a 59) y los segundos SG (de 0 a 59), sin ceros a la izquierda; en la segunda, el mismo tiempo con dos cifras para cada valor (poniendo un cero a la izquierda si hace falta).",
      "**Output** (exactly 2 lines): on the first, the hours H, the minutes M (from 0 to 59) and the seconds SG (from 0 to 59), without leading zeros; on the second, the same time with two digits for each value (adding a leading zero if needed)."
     ]
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
     "x": [
      "Fes-ho sense bucles, amb divisions i mòduls. Per als zeros a l'esquerra fes servir `setw` i `setfill` de `<iomanip>`. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo sin bucles, con divisiones y módulos. Para los ceros a la izquierda usa `setw` y `setfill` de `<iomanip>`. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it without loops, with divisions and remainders. For the leading zeros use `setw` and `setfill` from `<iomanip>`. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Les hores són S / 3600; el que sobra (S % 3600) es reparteix en minuts (/ 60) i segons (% 60). `setfill('0')` es manté, però `setw(2)` només afecta el valor següent i s'ha de repetir davant de cada número.",
    "Las horas son S / 3600; lo que sobra (S % 3600) se reparte en minutos (/ 60) y segundos (% 60). `setfill('0')` se mantiene, pero `setw(2)` solo afecta al valor siguiente y hay que repetirlo delante de cada número.",
    "The hours are S / 3600; what is left (S % 3600) is split into minutes (/ 60) and seconds (% 60). `setfill('0')` stays set, but `setw(2)` only affects the next value and must be repeated before each number."
   ],
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
   "title": [
    "ELS ASCENSORS DE L'HOTEL",
    "LOS ASCENSORES DEL HOTEL",
    "THE HOTEL LIFTS"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Un hotel de muntanya té plantes de pàrquing sota terra (numerades amb negatius: -1, -2, ...), la planta baixa (0) i les plantes de les habitacions (1, 2, 3, ...). Per repartir la gent, l'ascensor A només s'atura a les plantes amb número parell i l'ascensor B només a les plantes amb número senar.",
      "Un hotel de montaña tiene plantas de parking bajo tierra (numeradas con negativos: -1, -2, ...), la planta baja (0) y las plantas de las habitaciones (1, 2, 3, ...). Para repartir a la gente, el ascensor A solo para en las plantas con número par y el ascensor B solo en las plantas con número impar.",
      "A mountain hotel has underground car-park floors (numbered with negatives: -1, -2, ...), the ground floor (0) and the room floors (1, 2, 3, ...). To spread people out, lift A only stops at even-numbered floors and lift B only at odd-numbered floors."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, donada la planta on vol anar un client, li digui si el número de la planta és parell o senar i quin ascensor ha d'agafar.",
      "Diseñad un algoritmo que, dada la planta a la que quiere ir un cliente, le diga si el número de la planta es par o impar y qué ascensor tiene que coger.",
      "Design an algorithm that, given the floor a guest wants to go to, tells them whether the floor number is even or odd and which lift they must take."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un enter P (número de la planta, -5 ≤ P ≤ 40).",
      "**Entrada:** un entero P (número de la planta, -5 ≤ P ≤ 40).",
      "**Input:** an integer P (floor number, -5 ≤ P ≤ 40)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 2 línies). Si P és parell:",
      "**Salida** (exactamente 2 líneas). Si P es par:",
      "**Output** (exactly 2 lines). If P is even:"
     ]
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
     "x": [
      "i si P és senar:",
      "y si P es impar:",
      "and if P is odd:"
     ]
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
     "x": [
      "Compte: el 0 és parell, i els números negatius també poden ser parells o senars. Fes-ho amb un if-else, sense bucles. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Cuidado: el 0 es par, y los números negativos también pueden ser pares o impares. Hazlo con un if-else, sin bucles. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Careful: 0 is even, and negative numbers can also be even or odd. Do it with an if-else, without loops. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "P és parell si P % 2 == 0. No comprovis els senars amb P % 2 == 1: en C++, -3 % 2 val -1. Fes servir el else.",
    "P es par si P % 2 == 0. No compruebes los impares con P % 2 == 1: en C++, -3 % 2 vale -1. Usa el else.",
    "P is even if P % 2 == 0. Do not check the odd ones with P % 2 == 1: in C++, -3 % 2 is -1. Use the else."
   ],
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
   "title": [
    "L'ESTACIÓ METEOROLÒGICA",
    "LA ESTACIÓN METEOROLÓGICA",
    "THE WEATHER STATION"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "L'estació meteorològica d'un refugi de muntanya mesura la temperatura en graus Celsius, però molts excursionistes estrangers que la consulten estan acostumats als graus Fahrenheit. La conversió és F = C · 9 / 5 + 32.",
      "La estación meteorológica de un refugio de montaña mide la temperatura en grados Celsius, pero muchos excursionistas extranjeros que la consultan están acostumbrados a los grados Fahrenheit. La conversión es F = C · 9 / 5 + 32.",
      "The weather station of a mountain hut measures the temperature in degrees Celsius, but many foreign hikers who check it are used to degrees Fahrenheit. The conversion is F = C · 9 / 5 + 32."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, donada una temperatura en graus Celsius, la mostri en les dues escales.",
      "Diseñad un algoritmo que, dada una temperatura en grados Celsius, la muestre en las dos escalas.",
      "Design an algorithm that, given a temperature in degrees Celsius, shows it on both scales."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un real C (temperatura en graus Celsius, -50 ≤ C ≤ 60, amb com a molt un decimal).",
      "**Entrada:** un real C (temperatura en grados Celsius, -50 ≤ C ≤ 60, con como mucho un decimal).",
      "**Input:** a real C (temperature in degrees Celsius, -50 ≤ C ≤ 60, with at most one decimal)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 2 línies, cada valor amb 1 decimal):",
      "**Salida** (exactamente 2 líneas, cada valor con 1 decimal):",
      "**Output** (exactly 2 lines, each value with 1 decimal):"
     ]
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
     "x": [
      "Fes-ho sense bucles. Per als decimals fes servir `fixed` i `setprecision` de `<iomanip>`. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo sin bucles. Para los decimales usa `fixed` y `setprecision` de `<iomanip>`. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it without loops. For the decimals use `fixed` and `setprecision` from `<iomanip>`. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Fes servir `double`. Compte amb 9 / 5: entre enters val 1; escriu C * 9 / 5 o 1.8 * C. Abans d'escriure, `cout << fixed << setprecision(1)`.",
    "Usa `double`. Cuidado con 9 / 5: entre enteros vale 1; escribe C * 9 / 5 o 1.8 * C. Antes de escribir, `cout << fixed << setprecision(1)`.",
    "Use `double`. Careful with 9 / 5: between integers it is 1; write C * 9 / 5 or 1.8 * C. Before writing, `cout << fixed << setprecision(1)`."
   ],
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
   "title": [
    "EL SALT DE LLARGADA",
    "EL SALTO DE LONGITUD",
    "THE LONG JUMP"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "En una competició d'atletisme, cada saltador de llargada fa tres intents i la marca que compta és la millor de les tres. Els jutges anoten cada salt en centímetres; un salt nul s'anota com a 0.",
      "En una competición de atletismo, cada saltador de longitud hace tres intentos y la marca que cuenta es la mejor de las tres. Los jueces anotan cada salto en centímetros; un salto nulo se anota como 0.",
      "In an athletics competition, each long jumper makes three attempts and the mark that counts is the best of the three. The judges record each jump in centimetres; a foul jump is recorded as 0."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, donades les tres marques d'un saltador, digui quina és la millor i en quin intent l'ha fet. Si la millor marca s'ha repetit, s'indica el primer intent en què s'ha aconseguit.",
      "Diseñad un algoritmo que, dadas las tres marcas de un saltador, diga cuál es la mejor y en qué intento la ha hecho. Si la mejor marca se ha repetido, se indica el primer intento en que se ha conseguido.",
      "Design an algorithm that, given a jumper's three marks, says which is the best and in which attempt it was made. If the best mark was repeated, the first attempt in which it was achieved is given."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** tres enters A, B i C (les marques del 1r, 2n i 3r intent, en cm, 0 ≤ A, B, C ≤ 900).",
      "**Entrada:** tres enteros A, B y C (las marcas del 1.er, 2.º y 3.er intento, en cm, 0 ≤ A, B, C ≤ 900).",
      "**Input:** three integers A, B and C (the marks of the 1st, 2nd and 3rd attempt, in cm, 0 ≤ A, B, C ≤ 900)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 2 línies):",
      "**Salida** (exactamente 2 líneas):",
      "**Output** (exactly 2 lines):"
     ]
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
     "x": [
      "Fes-ho només amb condicionals (if), sense bucles. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo solo con condicionales (if), sin bucles. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it only with conditionals (if), without loops. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Suposa que el millor és el 1r intent i compara'l amb el 2n i després amb el 3r; canvia'l només quan el nou sigui estrictament més gran (>), i així en cas d'empat es queda el primer.",
    "Supón que el mejor es el 1.er intento y compáralo con el 2.º y después con el 3.º; cámbialo solo cuando el nuevo sea estrictamente mayor (>), y así en caso de empate se queda el primero.",
    "Assume the best is the 1st attempt and compare it with the 2nd and then with the 3rd; change it only when the new one is strictly greater (>), so that in case of a tie the first one stays."
   ],
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
   "title": [
    "EL CADENAT DE LA TAQUILLA",
    "EL CANDADO DE LA TAQUILLA",
    "THE LOCKER PADLOCK"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Un gimnàs dona a cada soci un cadenat per a la taquilla amb una combinació de tres xifres (de 100 a 999). Per no deixar la combinació a la vista, a la fitxa del soci s'apunta escrita al revés.",
      "Un gimnasio da a cada socio un candado para la taquilla con una combinación de tres cifras (de 100 a 999). Para no dejar la combinación a la vista, en la ficha del socio se apunta escrita al revés.",
      "A gym gives each member a padlock for their locker with a three-digit combination (from 100 to 999). So as not to leave the combination in plain sight, it is written backwards on the member's record card."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, donada la combinació, escrigui per separat les centenes, les desenes i les unitats, i després el codi al revés: les tres xifres en ordre invers, una darrere l'altra, encara que la primera sigui un 0.",
      "Diseñad un algoritmo que, dada la combinación, escriba por separado las centenas, las decenas y las unidades, y después el código al revés: las tres cifras en orden inverso, una detrás de otra, aunque la primera sea un 0.",
      "Design an algorithm that, given the combination, writes the hundreds, the tens and the units separately, and then the code backwards: the three digits in reverse order, one after the other, even if the first is a 0."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un enter N (la combinació, 100 ≤ N ≤ 999).",
      "**Entrada:** un entero N (la combinación, 100 ≤ N ≤ 999).",
      "**Input:** an integer N (the combination, 100 ≤ N ≤ 999)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 4 línies):",
      "**Salida** (exactamente 4 líneas):",
      "**Output** (exactly 4 lines):"
     ]
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
     "x": [
      "Per exemple, si N és 250, l'última línia ha de ser `Al reves: 052`. Fes-ho sense bucles, amb divisions i mòduls. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Por ejemplo, si N es 250, la última línea tiene que ser `Al reves: 052`. Hazlo sin bucles, con divisiones y módulos. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "For example, if N is 250, the last line must be `Al reves: 052`. Do it without loops, with divisions and remainders. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Centenes: N / 100; desenes: (N / 10) % 10; unitats: N % 10. Per al codi al revés, escriu les tres xifres seguides amb cout en lloc de calcular un número nou, que perdria els zeros del davant.",
    "Centenas: N / 100; decenas: (N / 10) % 10; unidades: N % 10. Para el código al revés, escribe las tres cifras seguidas con cout en lugar de calcular un número nuevo, que perdería los ceros de delante.",
    "Hundreds: N / 100; tens: (N / 10) % 10; units: N % 10. For the backwards code, write the three digits in a row with cout instead of computing a new number, which would lose the leading zeros."
   ],
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
   "title": [
    "EL CALENDARI DE PARET",
    "EL CALENDARIO DE PARED",
    "THE WALL CALENDAR"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Una impremta fa calendaris de paret per encàrrec i, abans d'imprimir-los, ha de saber quants dies té el febrer de l'any demanat. Un any és de traspàs (i el febrer té 29 dies) si és múltiple de 4, excepte els múltiples de 100, que només ho són si també són múltiples de 400. Per exemple, 2024 i 2000 són de traspàs, però 2023 i 1900 no.",
      "Una imprenta hace calendarios de pared por encargo y, antes de imprimirlos, tiene que saber cuántos días tiene el febrero del año pedido. Un año es bisiesto (y febrero tiene 29 días) si es múltiplo de 4, excepto los múltiplos de 100, que solo lo son si también son múltiplos de 400. Por ejemplo, 2024 y 2000 son bisiestos, pero 2023 y 1900 no.",
      "A printer makes wall calendars to order and, before printing them, needs to know how many days February has in the requested year. A year is a leap year (and February has 29 days) if it is a multiple of 4, except multiples of 100, which only are if they are also multiples of 400. For example, 2024 and 2000 are leap years, but 2023 and 1900 are not."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, donat un any, digui si és de traspàs i quants dies té el febrer.",
      "Diseñad un algoritmo que, dado un año, diga si es bisiesto y cuántos días tiene febrero.",
      "Design an algorithm that, given a year, says whether it is a leap year and how many days February has."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un enter A (l'any, 1600 ≤ A ≤ 3000).",
      "**Entrada:** un entero A (el año, 1600 ≤ A ≤ 3000).",
      "**Input:** an integer A (the year, 1600 ≤ A ≤ 3000)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 2 línies). Si l'any és de traspàs:",
      "**Salida** (exactamente 2 líneas). Si el año es bisiesto:",
      "**Output** (exactly 2 lines). If the year is a leap year:"
     ]
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
     "x": [
      "Fes-ho amb condicionals, sense bucles. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con condicionales, sin bucles. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with conditionals, without loops. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "La condició és (A % 4 == 0 && A % 100 != 0) || A % 400 == 0. Amb un if-else n'hi ha prou.",
    "La condición es (A % 4 == 0 && A % 100 != 0) || A % 400 == 0. Con un if-else basta.",
    "The condition is (A % 4 == 0 && A % 100 != 0) || A % 400 == 0. An if-else is enough."
   ],
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
   "title": [
    "LES REBAIXES",
    "LAS REBAJAS",
    "THE SALES"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Durant les rebaixes, una botiga de roba aplica a cada article el percentatge de descompte que marca la seva etiqueta. A la caixa, el tiquet ha de mostrar quants euros s'estalvia el client i quant ha de pagar.",
      "Durante las rebajas, una tienda de ropa aplica a cada artículo el porcentaje de descuento que marca su etiqueta. En la caja, el tique tiene que mostrar cuántos euros se ahorra el cliente y cuánto tiene que pagar.",
      "During the sales, a clothes shop applies to each item the discount percentage shown on its label. At the till, the receipt must show how many euros the customer saves and how much they have to pay."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, donat el preu original d'un article i el percentatge de descompte, calculi l'import del descompte i el preu final.",
      "Diseñad un algoritmo que, dado el precio original de un artículo y el porcentaje de descuento, calcule el importe del descuento y el precio final.",
      "Design an algorithm that, given the original price of an item and the discount percentage, computes the amount of the discount and the final price."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un real P (preu original en euros, 0 < P ≤ 5000, amb com a molt 2 decimals) i un enter D (percentatge de descompte, 0 ≤ D ≤ 100).",
      "**Entrada:** un real P (precio original en euros, 0 < P ≤ 5000, con como mucho 2 decimales) y un entero D (porcentaje de descuento, 0 ≤ D ≤ 100).",
      "**Input:** a real P (original price in euros, 0 < P ≤ 5000, with at most 2 decimals) and an integer D (discount percentage, 0 ≤ D ≤ 100)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 2 línies, cada import amb 2 decimals):",
      "**Salida** (exactamente 2 líneas, cada importe con 2 decimales):",
      "**Output** (exactly 2 lines, each amount with 2 decimals):"
     ]
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
     "x": [
      "Fes-ho sense bucles. Per als decimals fes servir `fixed` i `setprecision` de `<iomanip>`. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo sin bucles. Para los decimales usa `fixed` y `setprecision` de `<iomanip>`. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it without loops. For the decimals use `fixed` and `setprecision` from `<iomanip>`. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "El descompte és P * D / 100 (amb P double); compte que D / 100 entre enters val 0. El preu final és P menys el descompte.",
    "El descuento es P * D / 100 (con P double); cuidado, D / 100 entre enteros vale 0. El precio final es P menos el descuento.",
    "The discount is P * D / 100 (with P a double); careful, D / 100 between integers is 0. The final price is P minus the discount."
   ],
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
   "title": [
    "EL TAXI DE LA CIUTAT",
    "EL TAXI DE LA CIUDAD",
    "THE CITY TAXI"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Una companyia de taxis cobra cada servei així: 2.50 euros de baixada de bandera més 0.45 euros per cada minut de trajecte. Si l'import que en surt no arriba a 6.00 euros, es cobra la tarifa mínima de 6.00 euros.",
      "Una compañía de taxis cobra cada servicio así: 2.50 euros de bajada de bandera más 0.45 euros por cada minuto de trayecto. Si el importe que sale no llega a 6.00 euros, se cobra la tarifa mínima de 6.00 euros.",
      "A taxi company charges each ride as follows: a €2.50 flag fall plus €0.45 for each minute of the journey. If the resulting amount does not reach €6.00, the minimum fare of €6.00 is charged."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, donada la durada d'un trajecte en minuts, calculi l'import segons la tarifa i l'import que ha de pagar el client.",
      "Diseñad un algoritmo que, dada la duración de un trayecto en minutos, calcule el importe según la tarifa y el importe que tiene que pagar el cliente.",
      "Design an algorithm that, given the duration of a journey in minutes, computes the amount according to the fare and the amount the customer has to pay."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un enter M (minuts del trajecte, 0 ≤ M ≤ 300).",
      "**Entrada:** un entero M (minutos del trayecto, 0 ≤ M ≤ 300).",
      "**Input:** an integer M (minutes of the journey, 0 ≤ M ≤ 300)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 2 línies, cada import amb 2 decimals):",
      "**Salida** (exactamente 2 líneas, cada importe con 2 decimales):",
      "**Output** (exactly 2 lines, each amount with 2 decimals):"
     ]
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
     "x": [
      "Fes-ho amb un if, sense bucles. Per als decimals fes servir `fixed` i `setprecision` de `<iomanip>`. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un if, sin bucles. Para los decimales usa `fixed` y `setprecision` de `<iomanip>`. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with an if, without loops. For the decimals use `fixed` and `setprecision` from `<iomanip>`. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Calcula l'import amb la fórmula 2.50 + 0.45 * M en un double. L'import a pagar és 6.00 si el calculat és més petit, i el mateix import calculat si no.",
    "Calcula el importe con la fórmula 2.50 + 0.45 * M en un double. El importe a pagar es 6.00 si el calculado es menor, y el mismo importe calculado si no.",
    "Compute the amount with the formula 2.50 + 0.45 * M in a double. The amount to pay is 6.00 if the computed one is smaller, and the computed amount otherwise."
   ],
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
   "title": [
    "LA CALCULADORA DE BUTXACA",
    "LA CALCULADORA DE BOLSILLO",
    "THE POCKET CALCULATOR"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "L'Anna està programant una calculadora de butxaca per a la seva germana petita. La calculadora rep una operació escrita en una sola línia: el primer operand, el símbol de l'operació i el segon operand.",
      "Anna está programando una calculadora de bolsillo para su hermana pequeña. La calculadora recibe una operación escrita en una sola línea: el primer operando, el símbolo de la operación y el segundo operando.",
      "Anna is programming a pocket calculator for her little sister. The calculator receives an operation written on a single line: the first operand, the operation symbol and the second operand."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que llegeixi l'operació i n'escrigui el resultat. Els operadors vàlids són `+` (suma), `-` (resta), `*` o `x` (multiplicació: tots dos símbols volen dir el mateix) i `/` (divisió amb decimals). Qualsevol altre caràcter és un operador no vàlid.",
      "Diseñad un algoritmo que lea la operación y escriba el resultado. Los operadores válidos son `+` (suma), `-` (resta), `*` o `x` (multiplicación: los dos símbolos significan lo mismo) y `/` (división con decimales). Cualquier otro carácter es un operador no válido.",
      "Design an algorithm that reads the operation and writes its result. The valid operators are `+` (addition), `-` (subtraction), `*` or `x` (multiplication: both symbols mean the same) and `/` (division with decimals). Any other character is an invalid operator."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un enter A, un caràcter OP i un enter B, separats per espais (-1000 ≤ A, B ≤ 1000).",
      "**Entrada:** un entero A, un carácter OP y un entero B, separados por espacios (-1000 ≤ A, B ≤ 1000).",
      "**Input:** an integer A, a character OP and an integer B, separated by spaces (-1000 ≤ A, B ≤ 1000)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 1 línia, sense cap altre text):",
      "**Salida** (exactamente 1 línea, sin ningún otro texto):",
      "**Output** (exactly 1 line, with no other text):"
     ]
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
     "x": [
      "R és un enter per a la suma, la resta i la multiplicació, i un real amb 2 decimals per a la divisió. Si OP és `/` i B val 0, en lloc d'aquesta línia s'escriu `Error: divisio per zero`, i si OP no és cap dels operadors vàlids, s'escriu `Error: operador no valid`.",
      "R es un entero para la suma, la resta y la multiplicación, y un real con 2 decimales para la división. Si OP es `/` y B vale 0, en lugar de esta línea se escribe `Error: divisio per zero`, y si OP no es ninguno de los operadores válidos, se escribe `Error: operador no valid`.",
      "R is an integer for addition, subtraction and multiplication, and a real with 2 decimals for division. If OP is `/` and B is 0, instead of this line `Error: divisio per zero` is written, and if OP is none of the valid operators, `Error: operador no valid` is written."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb un switch sobre el caràcter OP, sense bucles. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un switch sobre el carácter OP, sin bucles. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a switch on the character OP, without loops. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Llegeix A, OP i B amb un sol cin. Al switch, posa dos case seguits ('*' i 'x') perquè comparteixin el codi, i comprova si B val 0 només dins el cas de la divisió; el default recull els operadors no vàlids.",
    "Lee A, OP y B con un solo cin. En el switch, pon dos case seguidos ('*' y 'x') para que compartan el código, y comprueba si B vale 0 solo dentro del caso de la división; el default recoge los operadores no válidos.",
    "Read A, OP and B with a single cin. In the switch, put two cases in a row ('*' and 'x') so that they share the code, and check whether B is 0 only inside the division case; the default catches the invalid operators."
   ],
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
   "title": [
    "LES FITXES DE MULTIPLICAR",
    "LAS FICHAS DE MULTIPLICAR",
    "THE MULTIPLICATION WORKSHEETS"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Un mestre de primària prepara fitxes de repàs de les taules de multiplicar. A cada fitxa no hi posa la taula sencera, sinó només un tros: la taula d'un nombre N des d'un multiplicador inicial INI fins a un multiplicador final FI. A sota hi afegeix la suma de tots els resultats, perquè els alumnes puguin comprovar els seus càlculs.",
      "Un maestro de primaria prepara fichas de repaso de las tablas de multiplicar. En cada ficha no pone la tabla entera, sino solo un trozo: la tabla de un número N desde un multiplicador inicial INI hasta un multiplicador final FI. Debajo añade la suma de todos los resultados, para que los alumnos puedan comprobar sus cálculos.",
      "A primary-school teacher prepares review worksheets for the multiplication tables. Each worksheet does not have the whole table, only a part: the table of a number N from an initial multiplier INI to a final multiplier FI. Underneath it adds the sum of all the results, so that pupils can check their calculations."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, entrant N, INI i FI, escrigui el tros de la taula de N que va de N x INI fins a N x FI i, al final, la suma de tots els productes.",
      "Diseñad un algoritmo que, introduciendo N, INI y FI, escriba el trozo de la tabla de N que va de N x INI a N x FI y, al final, la suma de todos los productos.",
      "Design an algorithm that, given N, INI and FI, writes the part of N's table from N x INI to N x FI and, at the end, the sum of all the products."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** tres naturals N, INI i FI (1 ≤ N ≤ 100, 1 ≤ INI ≤ FI ≤ 20).",
      "**Entrada:** tres naturales N, INI y FI (1 ≤ N ≤ 100, 1 ≤ INI ≤ FI ≤ 20).",
      "**Input:** three naturals N, INI and FI (1 ≤ N ≤ 100, 1 ≤ INI ≤ FI ≤ 20)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament FI - INI + 2 línies): una línia per a cada multiplicador I, des d'INI fins a FI i en aquest ordre, i a continuació la línia de la suma:",
      "**Salida** (exactamente FI - INI + 2 líneas): una línea para cada multiplicador I, desde INI hasta FI y en este orden, y a continuación la línea de la suma:",
      "**Output** (exactly FI - INI + 2 lines): one line for each multiplier I, from INI to FI and in this order, followed by the sum line:"
     ]
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
     "x": [
      "R és el producte de N per I. Hi ha un espai a cada costat de la `x` i de l'`=`.",
      "R es el producto de N por I. Hay un espacio a cada lado de la `x` y del `=`.",
      "R is the product of N and I. There is a space on each side of the `x` and the `=`."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb un for. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un for. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a for. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Un for amb I des d'INI fins a FI (inclòs): a cada volta escriu la línia i afegeix el producte a un acumulador que comença a 0. La suma s'escriu després del bucle.",
    "Un for con I desde INI hasta FI (incluido): en cada vuelta escribe la línea y añade el producto a un acumulador que empieza en 0. La suma se escribe después del bucle.",
    "A for with I from INI to FI (included): at each iteration write the line and add the product to an accumulator that starts at 0. The sum is written after the loop."
   ],
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
   "title": [
    "EL COMPTADOR DE XIFRES",
    "EL CONTADOR DE CIFRAS",
    "THE DIGIT COUNTER"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Una impremta numera els tiquets d'una rifa. Per ajustar la màquina abans d'imprimir cada número, necessita saber quantes xifres té, quantes d'aquestes xifres són zeros i quina és la xifra més gran.",
      "Una imprenta numera los tiques de una rifa. Para ajustar la máquina antes de imprimir cada número, necesita saber cuántas cifras tiene, cuántas de esas cifras son ceros y cuál es la cifra mayor.",
      "A printer numbers the tickets of a raffle. To set up the machine before printing each number, it needs to know how many digits it has, how many of those digits are zeros and which is the largest digit."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, entrant un número de tiquet N, escrigui aquestes tres dades. Tingueu en compte que el número 0 té 1 xifra, que és un zero.",
      "Diseñad un algoritmo que, introduciendo un número de tique N, escriba estos tres datos. Tened en cuenta que el número 0 tiene 1 cifra, que es un cero.",
      "Design an algorithm that, given a ticket number N, writes these three pieces of data. Bear in mind that the number 0 has 1 digit, which is a zero."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un natural N (0 ≤ N ≤ 2000000000).",
      "**Entrada:** un natural N (0 ≤ N ≤ 2000000000).",
      "**Input:** a natural N (0 ≤ N ≤ 2000000000)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 3 línies, sense cap altre text):",
      "**Salida** (exactamente 3 líneas, sin ningún otro texto):",
      "**Output** (exactly 3 lines, with no other text):"
     ]
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
     "x": [
      "Fes-ho amb un do...while, extraient les xifres amb `% 10` i `/ 10` (així el 0 també es compta correctament). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un do...while, extrayendo las cifras con `% 10` y `/ 10` (así el 0 también se cuenta correctamente). No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a do...while, extracting the digits with `% 10` and `/ 10` (that way 0 is also counted correctly). Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Amb un do...while el cos s'executa almenys una vegada, i per això el 0 compta com una xifra. A cada volta agafa l'última xifra amb N % 10, actualitza els tres valors i treu-la amb N / 10.",
    "Con un do...while el cuerpo se ejecuta al menos una vez, y por eso el 0 cuenta como una cifra. En cada vuelta toma la última cifra con N % 10, actualiza los tres valores y quítala con N / 10.",
    "With a do...while the body runs at least once, and that is why 0 counts as a digit. At each iteration take the last digit with N % 10, update the three values and remove it with N / 10."
   ],
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
   "title": [
    "ELS BITLLETS CAPICUES",
    "LOS BILLETES CAPICÚA",
    "THE PALINDROMIC TICKETS"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "En Pere col·lecciona bitllets de loteria capicues, és a dir, aquells el número dels quals es llegeix igual d'esquerra a dreta que de dreta a esquerra, com el 12321 o el 4554. Per decidir-ho ràpidament, calcula l'invers del número (el que s'obté llegint-ne les xifres al revés) i el compara amb l'original.",
      "Pere colecciona billetes de lotería capicúa, es decir, aquellos cuyo número se lee igual de izquierda a derecha que de derecha a izquierda, como el 12321 o el 4554. Para decidirlo rápidamente, calcula el inverso del número (el que se obtiene leyendo sus cifras al revés) y lo compara con el original.",
      "Pere collects palindromic lottery tickets, that is, those whose number reads the same from left to right as from right to left, like 12321 or 4554. To decide quickly, he computes the reverse of the number (obtained by reading its digits backwards) and compares it with the original."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, entrant un natural N, calculi el seu invers INV i digui si N és capicua. Els zeros que queden a l'esquerra de l'invers no s'escriuen: l'invers de 1200 és 21.",
      "Diseñad un algoritmo que, introduciendo un natural N, calcule su inverso INV y diga si N es capicúa. Los ceros que quedan a la izquierda del inverso no se escriben: el inverso de 1200 es 21.",
      "Design an algorithm that, given a natural N, computes its reverse INV and says whether N is a palindrome. Leading zeros of the reverse are not written: the reverse of 1200 is 21."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un natural N (0 ≤ N ≤ 999999999).",
      "**Entrada:** un natural N (0 ≤ N ≤ 999999999).",
      "**Input:** a natural N (0 ≤ N ≤ 999999999)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 2 línies):",
      "**Salida** (exactamente 2 líneas):",
      "**Output** (exactly 2 lines):"
     ]
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
     "x": [
      "o bé `No es capicua` a la segona línia, si N i INV són diferents.",
      "o bien `No es capicua` en la segunda línea, si N e INV son distintos.",
      "or `No es capicua` on the second line, if N and INV are different."
     ]
    },
    {
     "t": "p",
     "x": [
      "Calcula l'invers amb un while, construint-lo com un nombre guardat en una variable (no escrivint les xifres una a una). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Calcula el inverso con un while, construyéndolo como un número guardado en una variable (no escribiendo las cifras una a una). No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Compute the reverse with a while, building it as a number stored in a variable (not by writing the digits one by one). Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Treballa amb una còpia de N (l'original el necessites per comparar). A cada volta fes INV = INV * 10 + còpia % 10 i treu l'última xifra amb còpia / 10.",
    "Trabaja con una copia de N (el original lo necesitas para comparar). En cada vuelta haz INV = INV * 10 + copia % 10 y quita la última cifra con copia / 10.",
    "Work with a copy of N (you need the original to compare). At each iteration do INV = INV * 10 + copy % 10 and remove the last digit with copy / 10."
   ],
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
   "title": [
    "LA BÀSCULA DEL MAGATZEM",
    "LA BÁSCULA DEL ALMACÉN",
    "THE WAREHOUSE SCALES"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "En un magatzem de paqueteria, una bàscula pesa els paquets que passen per la cinta i n'envia el pes en grams a l'ordinador. Quan s'acaba la remesa, la bàscula envia un 0.",
      "En un almacén de paquetería, una báscula pesa los paquetes que pasan por la cinta y envía su peso en gramos al ordenador. Cuando se acaba la remesa, la báscula envía un 0.",
      "In a parcel warehouse, a scale weighs the parcels that pass along the belt and sends their weight in grams to the computer. When the batch ends, the scale sends a 0."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que llegeixi els pesos fins al 0 i digui quants paquets hi ha hagut, quant pesa el paquet més pesat i quant pesa el més lleuger.",
      "Diseñad un algoritmo que lea los pesos hasta el 0 y diga cuántos paquetes ha habido, cuánto pesa el paquete más pesado y cuánto pesa el más ligero.",
      "Design an algorithm that reads the weights up to the 0 and says how many parcels there were, how much the heaviest parcel weighs and how much the lightest weighs."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència de naturals (pesos en grams, 1 ≤ pes ≤ 100000) acabada en 0. El 0 marca el final i no és cap paquet. La seqüència pot ser buida (només el 0).",
      "**Entrada:** una secuencia de naturales (pesos en gramos, 1 ≤ peso ≤ 100000) terminada en 0. El 0 marca el final y no es ningún paquete. La secuencia puede estar vacía (solo el 0).",
      "**Input:** a sequence of naturals (weights in grams, 1 ≤ weight ≤ 100000) ending in 0. The 0 marks the end and is not a parcel. The sequence can be empty (only the 0)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 3 línies):",
      "**Salida** (exactamente 3 líneas):",
      "**Output** (exactly 3 lines):"
     ]
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
     "x": [
      "Si no hi ha cap paquet, s'escriu una sola línia: `No hi ha paquets`.",
      "Si no hay ningún paquete, se escribe una sola línea: `No hi ha paquets`.",
      "If there are no parcels, a single line is written: `No hi ha paquets`."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb un while, llegint el primer pes abans del bucle. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un while, leyendo el primer peso antes del bucle. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a while, reading the first weight before the loop. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Llegeix el primer pes abans del while i el següent al final de cada volta. Inicialitza el màxim i el mínim amb valors fora del rang (0 i 100001) o amb el primer paquet, i després del bucle mira si el comptador és 0.",
    "Lee el primer peso antes del while y el siguiente al final de cada vuelta. Inicializa el máximo y el mínimo con valores fuera del rango (0 y 100001) o con el primer paquete, y después del bucle mira si el contador es 0.",
    "Read the first weight before the while and the next one at the end of each iteration. Initialise the maximum and the minimum with values outside the range (0 and 100001) or with the first parcel, and after the loop check whether the counter is 0."
   ],
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
   "title": [
    "EL PIN PRIMER",
    "EL PIN PRIMO",
    "THE PRIME PIN"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Una aplicació de seguretat només accepta codis PIN que siguin nombres primers. Un nombre és primer si és més gran que 1 i només és divisible per 1 i per ell mateix. Quan el codi no és primer, l'aplicació ajuda l'usuari mostrant-li el número descompost en dos factors: el seu divisor més petit (més gran que 1) i el quocient corresponent.",
      "Una aplicación de seguridad solo acepta códigos PIN que sean números primos. Un número es primo si es mayor que 1 y solo es divisible por 1 y por sí mismo. Cuando el código no es primo, la aplicación ayuda al usuario mostrándole el número descompuesto en dos factores: su divisor más pequeño (mayor que 1) y el cociente correspondiente.",
      "A security app only accepts PIN codes that are prime numbers. A number is prime if it is greater than 1 and only divisible by 1 and by itself. When the code is not prime, the app helps the user by showing the number broken into two factors: its smallest divisor (greater than 1) and the corresponding quotient."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, entrant el codi N, digui si és primer i, si no ho és, en mostri la descomposició.",
      "Diseñad un algoritmo que, introduciendo el código N, diga si es primo y, si no lo es, muestre su descomposición.",
      "Design an algorithm that, given the code N, says whether it is prime and, if it is not, shows its decomposition."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un natural N (1 ≤ N ≤ 100000).",
      "**Entrada:** un natural N (1 ≤ N ≤ 100000).",
      "**Input:** a natural N (1 ≤ N ≤ 100000)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 1 línia), una d'aquestes dues:",
      "**Salida** (exactamente 1 línea), una de estas dos:",
      "**Output** (exactly 1 line), one of these two:"
     ]
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
     "x": [
      "D és el divisor més petit de N que és més gran que 1, i Q = N / D. Per a N = 1, que no té cap divisor més gran que 1, s'escriu `1 no es primer`.",
      "D es el divisor más pequeño de N que es mayor que 1, y Q = N / D. Para N = 1, que no tiene ningún divisor mayor que 1, se escribe `1 no es primer`.",
      "D is the smallest divisor of N greater than 1, and Q = N / D. For N = 1, which has no divisor greater than 1, `1 no es primer` is written."
     ]
    },
    {
     "t": "p",
     "x": [
      "Busca el divisor amb un for. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Busca el divisor con un for. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Look for the divisor with a for. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Prova divisors des de 2 en endavant i atura't al primer que divideixi N. Si no en trobes cap (n'hi ha prou de provar mentre i * i ≤ N), N és primer. El cas N = 1 va a part.",
    "Prueba divisores desde 2 en adelante y detente en el primero que divida a N. Si no encuentras ninguno (basta con probar mientras i * i ≤ N), N es primo. El caso N = 1 va aparte.",
    "Try divisors from 2 upwards and stop at the first that divides N. If you find none (it is enough to try while i * i ≤ N), N is prime. The case N = 1 is handled separately."
   ],
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
   "title": [
    "LES RAJOLES QUADRADES",
    "LAS BALDOSAS CUADRADAS",
    "THE SQUARE TILES"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Un paleta ha d'enrajolar el terra d'una habitació rectangular de A x B centímetres amb rajoles quadrades, totes iguals i sense haver de tallar-ne cap. Per acabar abans, vol fer servir les rajoles més grans possibles. El costat de la rajola més gran que encaixa exactament és el màxim comú divisor (MCD) de A i B.",
      "Un albañil tiene que embaldosar el suelo de una habitación rectangular de A x B centímetros con baldosas cuadradas, todas iguales y sin tener que cortar ninguna. Para acabar antes, quiere usar las baldosas más grandes posibles. El lado de la baldosa más grande que encaja exactamente es el máximo común divisor (MCD) de A y B.",
      "A tiler has to tile the floor of a rectangular room of A x B centimetres with square tiles, all the same and without cutting any. To finish sooner, they want to use the largest possible tiles. The side of the largest tile that fits exactly is the greatest common divisor (GCD) of A and B."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, entrant les mides A i B, calculi el costat de la rajola i quantes rajoles caldran per cobrir tot el terra.",
      "Diseñad un algoritmo que, introduciendo las medidas A y B, calcule el lado de la baldosa y cuántas baldosas harán falta para cubrir todo el suelo.",
      "Design an algorithm that, given the measurements A and B, computes the side of the tile and how many tiles are needed to cover the whole floor."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** dos naturals A i B (1 ≤ A, B ≤ 10000).",
      "**Entrada:** dos naturales A y B (1 ≤ A, B ≤ 10000).",
      "**Input:** two naturals A and B (1 ≤ A, B ≤ 10000)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 2 línies):",
      "**Salida** (exactamente 2 líneas):",
      "**Output** (exactly 2 lines):"
     ]
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
     "x": [
      "Calcula el MCD amb l'algorisme d'Euclides fet amb un while: mentre el segon nombre no sigui 0, la parella (a, b) passa a ser (b, a % b); quan b arriba a 0, a és el MCD. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Calcula el MCD con el algoritmo de Euclides hecho con un while: mientras el segundo número no sea 0, la pareja (a, b) pasa a ser (b, a % b); cuando b llega a 0, a es el MCD. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Compute the GCD with Euclid's algorithm using a while: while the second number is not 0, the pair (a, b) becomes (b, a % b); when b reaches 0, a is the GCD. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Fes l'algorisme sobre còpies de A i B, perquè després necessites les mides originals: el nombre de rajoles és (A / C) * (B / C).",
    "Haz el algoritmo sobre copias de A y B, porque después necesitas las medidas originales: el número de baldosas es (A / C) * (B / C).",
    "Run the algorithm on copies of A and B, because you need the original measurements afterwards: the number of tiles is (A / C) * (B / C)."
   ],
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
   "title": [
    "LES NOTES DE LA CLASSE",
    "LAS NOTAS DE LA CLASE",
    "THE CLASS MARKS"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "En acabar de corregir un examen, una professora entra les notes dels alumnes una darrere l'altra. Com que no sap d'entrada quants exàmens té, quan acaba escriu un -1.",
      "Al terminar de corregir un examen, una profesora introduce las notas de los alumnos una detrás de otra. Como no sabe de entrada cuántos exámenes tiene, cuando acaba escribe un -1.",
      "After marking an exam, a teacher enters the pupils' marks one after another. Since she does not know beforehand how many exams she has, she types a -1 when she finishes."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que llegeixi les notes fins al -1 i digui quants alumnes han aprovat (nota més gran o igual que 5), quants han suspès i quina és la nota mitjana de la classe.",
      "Diseñad un algoritmo que lea las notas hasta el -1 y diga cuántos alumnos han aprobado (nota mayor o igual que 5), cuántos han suspendido y cuál es la nota media de la clase.",
      "Design an algorithm that reads the marks up to the -1 and says how many pupils passed (mark greater than or equal to 5), how many failed and what the average mark of the class is."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència de notes reals (0 ≤ nota ≤ 10) acabada en -1. El -1 marca el final i no és cap nota. La seqüència pot ser buida (només el -1).",
      "**Entrada:** una secuencia de notas reales (0 ≤ nota ≤ 10) terminada en -1. El -1 marca el final y no es ninguna nota. La secuencia puede estar vacía (solo el -1).",
      "**Input:** a sequence of real marks (0 ≤ mark ≤ 10) ending in -1. The -1 marks the end and is not a mark. The sequence can be empty (only the -1)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 3 línies), amb la mitjana amb 2 decimals:",
      "**Salida** (exactamente 3 líneas), con la media con 2 decimales:",
      "**Output** (exactly 3 lines), with the average with 2 decimals:"
     ]
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
     "x": [
      "Si no hi ha cap nota, s'escriu una sola línia: `No hi ha notes`.",
      "Si no hay ninguna nota, se escribe una sola línea: `No hi ha notes`.",
      "If there are no marks, a single line is written: `No hi ha notes`."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb un while, llegint la primera nota abans del bucle. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un while, leyendo la primera nota antes del bucle. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a while, reading the first mark before the loop. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Llegeix la primera nota abans del while i la següent al final de cada volta. Acumula la suma i compta aprovats i suspesos; la mitjana és suma / (A + S), que només es pot calcular si hi ha alguna nota.",
    "Lee la primera nota antes del while y la siguiente al final de cada vuelta. Acumula la suma y cuenta aprobados y suspensos; la media es suma / (A + S), que solo se puede calcular si hay alguna nota.",
    "Read the first mark before the while and the next one at the end of each iteration. Accumulate the sum and count passes and fails; the average is suma / (A + S), which can only be computed if there is some mark."
   ],
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
   "title": [
    "ELS LLIBRES DEL PRESTATGE",
    "LOS LIBROS DE LA ESTANTERÍA",
    "THE BOOKS ON THE SHELF"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Una bibliotecària vol saber de quantes maneres diferents pot ordenar N llibres diferents en un prestatge. La resposta és el factorial de N: N! = 1 x 2 x 3 x ... x N (i, per conveni, 0! = 1). Com que els resultats creixen molt de pressa, també té curiositat per saber en quants zeros acaba el número.",
      "Una bibliotecaria quiere saber de cuántas maneras distintas puede ordenar N libros distintos en una estantería. La respuesta es el factorial de N: N! = 1 x 2 x 3 x ... x N (y, por convenio, 0! = 1). Como los resultados crecen muy deprisa, también tiene curiosidad por saber en cuántos ceros acaba el número.",
      "A librarian wants to know in how many different ways she can arrange N different books on a shelf. The answer is the factorial of N: N! = 1 x 2 x 3 x ... x N (and, by convention, 0! = 1). Since the results grow very quickly, she is also curious to know how many zeros the number ends in."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, entrant N, calculi N! i compti quants zeros té al final.",
      "Diseñad un algoritmo que, introduciendo N, calcule N! y cuente cuántos ceros tiene al final.",
      "Design an algorithm that, given N, computes N! and counts how many trailing zeros it has."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un natural N (0 ≤ N ≤ 20).",
      "**Entrada:** un natural N (0 ≤ N ≤ 20).",
      "**Input:** a natural N (0 ≤ N ≤ 20)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 2 línies):",
      "**Salida** (exactamente 2 líneas):",
      "**Output** (exactly 2 lines):"
     ]
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
     "x": [
      "Calcula el factorial amb un do...while i guarda'l en una variable `long long` (a partir de 13! el resultat ja no cap en un `int`). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Calcula el factorial con un do...while y guárdalo en una variable `long long` (a partir de 13! el resultado ya no cabe en un `int`). No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Compute the factorial with a do...while and store it in a `long long` variable (from 13! on the result no longer fits in an `int`). Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Comença amb F = 1 i i = 1: el do...while fa almenys una multiplicació (per 1), de manera que 0! també surt bé. Per comptar els zeros, divideix una còpia de F per 10 mentre la seva última xifra sigui 0.",
    "Empieza con F = 1 e i = 1: el do...while hace al menos una multiplicación (por 1), de manera que 0! también sale bien. Para contar los ceros, divide una copia de F por 10 mientras su última cifra sea 0.",
    "Start with F = 1 and i = 1: the do...while does at least one multiplication (by 1), so 0! also comes out right. To count the zeros, divide a copy of F by 10 while its last digit is 0."
   ],
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
   "title": [
    "EL ROBOT ASPIRADOR",
    "EL ROBOT ASPIRADOR",
    "THE ROBOT VACUUM"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Un robot aspirador es mou per una quadrícula. Surt de la base, a la posició (0, 0), i va rebent ordres d'una lletra: `N` (nord: la Y augmenta 1), `S` (sud: la Y disminueix 1), `E` (est: la X augmenta 1) i `O` (oest: la X disminueix 1). Les ordres poden arribar en majúscules o en minúscules. L'ordre `F` (o `f`) indica que la seqüència s'ha acabat. Qualsevol altre caràcter és una ordre no vàlida i el robot no es mou.",
      "Un robot aspirador se mueve por una cuadrícula. Sale de la base, en la posición (0, 0), y va recibiendo órdenes de una letra: `N` (norte: la Y aumenta 1), `S` (sur: la Y disminuye 1), `E` (este: la X aumenta 1) y `O` (oeste: la X disminuye 1). Las órdenes pueden llegar en mayúsculas o en minúsculas. La orden `F` (o `f`) indica que la secuencia se ha terminado. Cualquier otro carácter es una orden no válida y el robot no se mueve.",
      "A robot vacuum moves on a grid. It leaves the base, at position (0, 0), and receives one-letter commands: `N` (north: Y increases by 1), `S` (south: Y decreases by 1), `E` (east: X increases by 1) and `O` (west: X decreases by 1). Commands can arrive in upper or lower case. The command `F` (or `f`) means the sequence has ended. Any other character is an invalid command and the robot does not move."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que llegeixi les ordres fins a la F i digui on ha acabat el robot, quants moviments ha fet i quantes ordres no vàlides ha rebut.",
      "Diseñad un algoritmo que lea las órdenes hasta la F y diga dónde ha acabado el robot, cuántos movimientos ha hecho y cuántas órdenes no válidas ha recibido.",
      "Design an algorithm that reads the commands up to the F and says where the robot ended up, how many moves it made and how many invalid commands it received."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència de caràcters (tots junts o separats per espais o salts de línia) que sempre acaba amb `F` o `f`.",
      "**Entrada:** una secuencia de caracteres (todos juntos o separados por espacios o saltos de línea) que siempre termina con `F` o `f`.",
      "**Input:** a sequence of characters (all together or separated by spaces or line breaks) that always ends with `F` or `f`."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 3 línies):",
      "**Salida** (exactamente 3 líneas):",
      "**Output** (exactly 3 lines):"
     ]
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
     "x": [
      "Fes-ho amb un do...while que llegeixi una ordre a cada volta i un switch que la tracti. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un do...while que lea una orden en cada vuelta y un switch que la trate. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a do...while that reads a command at each iteration and a switch that handles it. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Al switch, posa dos case seguits per a la majúscula i la minúscula de cada ordre. La F també necessita el seu case (que no fa res), perquè si no el default la comptaria com a ordre no vàlida.",
    "En el switch, pon dos case seguidos para la mayúscula y la minúscula de cada orden. La F también necesita su case (que no hace nada), porque si no el default la contaría como orden no válida.",
    "In the switch, put two cases in a row for the upper and lower case of each command. F also needs its own case (which does nothing), because otherwise the default would count it as an invalid command."
   ],
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
   "title": [
    "ELS QUILÒMETRES CAPICUES",
    "LOS KILÓMETROS CAPICÚA",
    "THE PALINDROMIC KILOMETRES"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "El Pere apunta cada vespre els quilòmetres que marca el comptaquilòmetres del seu cotxe. Li fa molta il·lusió quan surt un nombre **capicua**, és a dir, un nombre que es llegeix igual d'esquerra a dreta que de dreta a esquerra (per exemple 12321, 4554 o 7). Un nombre acabat en 0 (com 10 o 120) mai és capicua, excepte el mateix 0.",
      "Pere apunta cada noche los kilómetros que marca el cuentakilómetros de su coche. Le hace mucha ilusión cuando sale un número **capicúa**, es decir, un número que se lee igual de izquierda a derecha que de derecha a izquierda (por ejemplo 12321, 4554 o 7). Un número acabado en 0 (como 10 o 120) nunca es capicúa, excepto el propio 0.",
      "Pere writes down every evening the kilometres shown on his car's odometer. He gets very excited when a **palindromic** number comes up, that is, a number that reads the same from left to right as from right to left (for example 12321, 4554 or 7). A number ending in 0 (like 10 or 120) is never a palindrome, except 0 itself."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que llegeixi la seqüència de lectures del comptaquilòmetres i, per a cada lectura, escrigui si és capicua o no. Al final ha d'escriure quantes lectures capicues hi ha hagut i quantes lectures hi ha en total.",
      "Diseñad un algoritmo que lea la secuencia de lecturas del cuentakilómetros y, para cada lectura, escriba si es capicúa o no. Al final tiene que escribir cuántas lecturas capicúa ha habido y cuántas lecturas hay en total.",
      "Design an algorithm that reads the sequence of odometer readings and, for each reading, writes whether it is a palindrome or not. At the end it must write how many palindromic readings there were and how many readings there are in total."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència de naturals X (0 ≤ X ≤ 999999999) acabada en -1 (el -1 no és una lectura). La seqüència pot ser buida.",
      "**Entrada:** una secuencia de naturales X (0 ≤ X ≤ 999999999) terminada en -1 (el -1 no es una lectura). La secuencia puede estar vacía.",
      "**Input:** a sequence of naturals X (0 ≤ X ≤ 999999999) ending in -1 (the -1 is not a reading). The sequence can be empty."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida:** una línia per a cada lectura, en el mateix ordre de l'entrada, i una línia final:",
      "**Salida:** una línea para cada lectura, en el mismo orden de la entrada, y una línea final:",
      "**Output:** one line for each reading, in the same order as the input, and a final line:"
     ]
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
     "x": [
      "Fes-ho amb un while per recórrer la seqüència i un altre while, a dins, per girar les xifres de cada nombre. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un while para recorrer la secuencia y otro while, dentro, para dar la vuelta a las cifras de cada número. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a while to go through the sequence and another while, inside, to reverse the digits of each number. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Per a cada lectura, fes-ne una còpia i construeix el nombre girat amb invers = invers * 10 + copia % 10; és capicua si el girat és igual a l'original. Reinicia l'invers abans de cada nombre.",
    "Para cada lectura, haz una copia y construye el número al revés con invers = invers * 10 + copia % 10; es capicúa si el número al revés es igual al original. Reinicia el inverso antes de cada número.",
    "For each reading, make a copy and build the reversed number with invers = invers * 10 + copia % 10; it is a palindrome if the reversed number equals the original. Reset the reverse before each number."
   ],
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
   "title": [
    "L'AVET DE NADAL",
    "EL ABETO DE NAVIDAD",
    "THE CHRISTMAS TREE"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Una botiga d'Escaldes vol posar a la pantalla de l'aparador un avet de Nadal dibuixat amb caràcters. L'avet té N pisos: el primer pis (el de dalt) té 1 asterisc, el segon en té 3, el tercer 5, i així successivament (cada pis té 2 asteriscs més que l'anterior). Tots els pisos estan centrats, i el pis de baix comença a la primera columna. Sota l'avet hi ha el tronc, format per T línies amb un sol caràcter `#` centrat sota la punta de l'avet.",
      "Una tienda de Escaldes quiere poner en la pantalla del escaparate un abeto de Navidad dibujado con caracteres. El abeto tiene N pisos: el primer piso (el de arriba) tiene 1 asterisco, el segundo tiene 3, el tercero 5, y así sucesivamente (cada piso tiene 2 asteriscos más que el anterior). Todos los pisos están centrados, y el piso de abajo empieza en la primera columna. Bajo el abeto está el tronco, formado por T líneas con un solo carácter `#` centrado bajo la punta del abeto.",
      "A shop in Escaldes wants to show on its window display a Christmas tree drawn with characters. The tree has N levels: the first level (the top one) has 1 asterisk, the second has 3, the third 5, and so on (each level has 2 more asterisks than the previous one). All the levels are centred, and the bottom level starts at the first column. Below the tree there is the trunk, made of T lines with a single `#` character centred under the tip of the tree."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que llegeixi N i T i dibuixi l'avet.",
      "Diseñad un algoritmo que lea N y T y dibuje el abeto.",
      "Design an algorithm that reads N and T and draws the tree."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** dos naturals N i T (1 ≤ N ≤ 30, 1 ≤ T ≤ 5).",
      "**Entrada:** dos naturales N y T (1 ≤ N ≤ 30, 1 ≤ T ≤ 5).",
      "**Input:** two naturals N and T (1 ≤ N ≤ 30, 1 ≤ T ≤ 5)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament N + T línies): la línia i-èsima de l'avet (1 ≤ i ≤ N) té N − i espais seguits de 2·i − 1 asteriscs; cada línia del tronc té N − 1 espais seguits d'un `#`. Cap línia porta espais al final. Per exemple, amb N = 3 i T = 2:",
      "**Salida** (exactamente N + T líneas): la línea i-ésima del abeto (1 ≤ i ≤ N) tiene N − i espacios seguidos de 2·i − 1 asteriscos; cada línea del tronco tiene N − 1 espacios seguidos de un `#`. Ninguna línea lleva espacios al final. Por ejemplo, con N = 3 y T = 2:",
      "**Output** (exactly N + T lines): the i-th line of the tree (1 ≤ i ≤ N) has N − i spaces followed by 2·i − 1 asterisks; each line of the trunk has N − 1 spaces followed by a `#`. No line has trailing spaces. For example, with N = 3 and T = 2:"
     ]
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
     "x": [
      "Fes-ho amb bucles for niats (un for per a les línies i, a dins, un for per als espais i un altre per als asteriscs). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con bucles for anidados (un for para las líneas i, dentro, un for para los espacios y otro para los asteriscos). No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with nested for loops (one for for the lines i and, inside, one for for the spaces and another for the asterisks). Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Per a cada pis i, primer escriu N − i espais i després 2·i − 1 asteriscs, i acaba la línia amb endl. El tronc és sempre N − 1 espais i un #.",
    "Para cada piso i, escribe primero N − i espacios y después 2·i − 1 asteriscos, y termina la línea con endl. El tronco es siempre N − 1 espacios y un #.",
    "For each level i, first write N − i spaces and then 2·i − 1 asterisks, and end the line with endl. The trunk is always N − 1 spaces and a #."
   ],
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
   "title": [
    "LES FITXES DE DIVISORS",
    "LAS FICHAS DE DIVISORES",
    "THE DIVISOR WORKSHEETS"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "La professora de matemàtiques de 1r d'ESO prepara unes fitxes on, per a cada nombre, han d'aparèixer tots els seus divisors. També vol saber quin dels nombres de la fitxa té més divisors.",
      "La profesora de matemáticas de 1.º de ESO prepara unas fichas donde, para cada número, tienen que aparecer todos sus divisores. También quiere saber cuál de los números de la ficha tiene más divisores.",
      "The Year 7 maths teacher prepares worksheets where, for each number, all its divisors must appear. She also wants to know which of the numbers on the worksheet has the most divisors."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que llegeixi una seqüència de naturals acabada en 0 i, per a cada nombre, escrigui una línia amb el nombre, dos punts i tots els seus divisors en ordre creixent. Al final ha d'escriure quin nombre té més divisors i quants en té. Si n'hi ha diversos empatats, cal escriure el primer que ha aparegut.",
      "Diseñad un algoritmo que lea una secuencia de naturales terminada en 0 y, para cada número, escriba una línea con el número, dos puntos y todos sus divisores en orden creciente. Al final tiene que escribir qué número tiene más divisores y cuántos tiene. Si hay varios empatados, hay que escribir el primero que ha aparecido.",
      "Design an algorithm that reads a sequence of naturals ending in 0 and, for each number, writes a line with the number, a colon and all its divisors in increasing order. At the end it must write which number has the most divisors and how many it has. If several are tied, the first one that appeared must be written."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència de naturals X (1 ≤ X ≤ 10000) acabada en 0. Hi ha com a mínim un nombre abans del 0.",
      "**Entrada:** una secuencia de naturales X (1 ≤ X ≤ 10000) terminada en 0. Hay como mínimo un número antes del 0.",
      "**Input:** a sequence of naturals X (1 ≤ X ≤ 10000) ending in 0. There is at least one number before the 0."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida:** una línia per a cada nombre de la seqüència i una línia final. A cada línia de divisors, després dels dos punts hi ha un espai, i **cada divisor va seguit d'un espai** (també l'últim, de manera que aquestes línies acaben amb un espai):",
      "**Salida:** una línea para cada número de la secuencia y una línea final. En cada línea de divisores, después de los dos puntos hay un espacio, y **cada divisor va seguido de un espacio** (también el último, de manera que estas líneas acaban con un espacio):",
      "**Output:** one line for each number in the sequence and a final line. On each divisor line, after the colon there is a space, and **each divisor is followed by a space** (the last one too, so these lines end with a space):"
     ]
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
     "x": [
      "Fes-ho amb un while per recórrer la seqüència i un for, a dins, per buscar els divisors de cada nombre. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un while para recorrer la secuencia y un for, dentro, para buscar los divisores de cada número. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a while to go through the sequence and a for, inside, to look for the divisors of each number. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Per a cada nombre, prova tots els d de 1 a X i escriu els que compleixen X % d == 0 seguits d'un espai, comptant-los. Compara el comptador amb el màxim amb > (no >=) per quedar-te el primer en cas d'empat.",
    "Para cada número, prueba todos los d de 1 a X y escribe los que cumplen X % d == 0 seguidos de un espacio, contándolos. Compara el contador con el máximo con > (no >=) para quedarte con el primero en caso de empate.",
    "For each number, try all d from 1 to X and write those that satisfy X % d == 0 followed by a space, counting them. Compare the counter with the maximum using > (not >=) to keep the first in case of a tie."
   ],
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
   "title": [
    "LA RATXA DEL DAU",
    "LA RACHA DEL DADO",
    "THE DICE STREAK"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "En una partida de parxís, el Marc apunta el resultat de cada llançament del dau. Vol saber quina ha estat la ratxa més llarga de resultats iguals seguits: per exemple, a la seqüència 3 5 5 2 2 2 6 la ratxa més llarga és de tres 2 seguits.",
      "En una partida de parchís, Marc apunta el resultado de cada lanzamiento del dado. Quiere saber cuál ha sido la racha más larga de resultados iguales seguidos: por ejemplo, en la secuencia 3 5 5 2 2 2 6 la racha más larga es de tres 2 seguidos.",
      "In a game of ludo, Marc writes down the result of each throw of the die. He wants to know the longest streak of equal results in a row: for example, in the sequence 3 5 5 2 2 2 6 the longest streak is three 2s in a row."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que llegeixi els resultats i escrigui el valor de la ratxa més llarga i quants llançaments la formen. Si hi ha diverses ratxes amb la mateixa llargada màxima, cal escriure la que ha aparegut primer.",
      "Diseñad un algoritmo que lea los resultados y escriba el valor de la racha más larga y cuántos lanzamientos la forman. Si hay varias rachas con la misma longitud máxima, hay que escribir la que ha aparecido primero.",
      "Design an algorithm that reads the results and writes the value of the longest streak and how many throws make it up. If there are several streaks with the same maximum length, the one that appeared first must be written."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència d'enters entre 1 i 6 acabada en 0 (el 0 no és un llançament). La seqüència pot ser buida.",
      "**Entrada:** una secuencia de enteros entre 1 y 6 terminada en 0 (el 0 no es un lanzamiento). La secuencia puede estar vacía.",
      "**Input:** a sequence of integers between 1 and 6 ending in 0 (the 0 is not a throw). The sequence can be empty."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 2 línies):",
      "**Salida** (exactamente 2 líneas):",
      "**Output** (exactly 2 lines):"
     ]
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
     "x": [
      "Si la seqüència és buida, cal escriure només la línia `Cap llancament`.",
      "Si la secuencia está vacía, hay que escribir solo la línea `Cap llancament`.",
      "If the sequence is empty, only the line `Cap llancament` must be written."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb un while, recordant el valor anterior i la llargada de la ratxa actual (la seqüència no es pot guardar). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un while, recordando el valor anterior y la longitud de la racha actual (la secuencia no se puede guardar). No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a while, remembering the previous value and the length of the current streak (the sequence cannot be stored). Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Guarda l'anterior i la llargada actual: si el nou valor és igual a l'anterior, la ratxa creix; si no, torna a començar a 1. Actualitza el millor només quan la ratxa actual el supera estrictament.",
    "Guarda el anterior y la longitud actual: si el nuevo valor es igual al anterior, la racha crece; si no, vuelve a empezar en 1. Actualiza el mejor solo cuando la racha actual lo supera estrictamente.",
    "Keep the previous value and the current length: if the new value equals the previous one, the streak grows; if not, it starts again at 1. Update the best only when the current streak strictly exceeds it."
   ],
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
   "title": [
    "LA RUTA DE MUNTANYA",
    "LA RUTA DE MONTAÑA",
    "THE MOUNTAIN ROUTE"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Un rellotge GPS registra l'altitud (en metres) a diversos punts d'una ruta pel Parc Natural de Sorteny. Volem saber el **desnivell positiu** acumulat (la suma de totes les pujades entre punts consecutius), el **desnivell negatiu** acumulat (la suma de totes les baixades entre punts consecutius, en positiu) i quin és el punt més alt de la ruta. Si dos punts consecutius tenen la mateixa altitud, no compta ni com a pujada ni com a baixada.",
      "Un reloj GPS registra la altitud (en metros) en varios puntos de una ruta por el Parque Natural de Sorteny. Queremos saber el **desnivel positivo** acumulado (la suma de todas las subidas entre puntos consecutivos), el **desnivel negativo** acumulado (la suma de todas las bajadas entre puntos consecutivos, en positivo) y cuál es el punto más alto de la ruta. Si dos puntos consecutivos tienen la misma altitud, no cuenta ni como subida ni como bajada.",
      "A GPS watch records the altitude (in metres) at several points of a route through the Sorteny Natural Park. We want to know the accumulated **elevation gain** (the sum of all the climbs between consecutive points), the accumulated **elevation loss** (the sum of all the descents between consecutive points, as a positive number) and which is the highest point of the route. If two consecutive points have the same altitude, it counts neither as a climb nor as a descent."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que llegeixi les altituds i escrigui el desnivell positiu, el desnivell negatiu i l'altitud del punt més alt amb la seva posició (el punt de sortida és el punt 1). Si l'altitud màxima es repeteix, cal donar la posició de la primera vegada.",
      "Diseñad un algoritmo que lea las altitudes y escriba el desnivel positivo, el desnivel negativo y la altitud del punto más alto con su posición (el punto de salida es el punto 1). Si la altitud máxima se repite, hay que dar la posición de la primera vez.",
      "Design an algorithm that reads the altitudes and writes the elevation gain, the elevation loss and the altitude of the highest point with its position (the starting point is point 1). If the maximum altitude is repeated, the position of the first time must be given."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència d'enters A (0 ≤ A ≤ 3000) acabada en -1. Hi ha com a mínim una altitud (la del punt de sortida).",
      "**Entrada:** una secuencia de enteros A (0 ≤ A ≤ 3000) terminada en -1. Hay como mínimo una altitud (la del punto de salida).",
      "**Input:** a sequence of integers A (0 ≤ A ≤ 3000) ending in -1. There is at least one altitude (that of the starting point)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 3 línies):",
      "**Salida** (exactamente 3 líneas):",
      "**Output** (exactly 3 lines):"
     ]
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
     "x": [
      "Fes-ho amb un while, guardant sempre l'altitud del punt anterior (la seqüència no es pot guardar). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un while, guardando siempre la altitud del punto anterior (la secuencia no se puede guardar). No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a while, always keeping the altitude of the previous point (the sequence cannot be stored). Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Llegeix la primera altitud fora del bucle: és l'anterior i el màxim inicial. Dins del bucle, compara cada altitud amb l'anterior per sumar pujada o baixada, porta un comptador de punts per saber la posició del màxim i, al final, l'actual passa a ser l'anterior.",
    "Lee la primera altitud fuera del bucle: es la anterior y el máximo inicial. Dentro del bucle, compara cada altitud con la anterior para sumar subida o bajada, lleva un contador de puntos para saber la posición del máximo y, al final, la actual pasa a ser la anterior.",
    "Read the first altitude outside the loop: it is the previous one and the initial maximum. Inside the loop, compare each altitude with the previous one to add a climb or a descent, keep a point counter to know the position of the maximum and, at the end, the current one becomes the previous one."
   ],
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
   "title": [
    "DE DECIMAL A BINARI",
    "DE DECIMAL A BINARIO",
    "FROM DECIMAL TO BINARY"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Els alumnes del cicle d'electrònica han de passar molts nombres a binari. Com que encara no sabem fer servir taules, guardarem el resultat en una variable `long long` que, escrita en decimal, té les mateixes xifres que el nombre en binari: per exemple, el 6 (que en binari és 110) es guarda com el nombre cent deu.",
      "Los alumnos del ciclo de electrónica tienen que pasar muchos números a binario. Como todavía no sabemos usar tablas, guardaremos el resultado en una variable `long long` que, escrita en decimal, tiene las mismas cifras que el número en binario: por ejemplo, el 6 (que en binario es 110) se guarda como el número ciento diez.",
      "The electronics students have to convert many numbers to binary. Since we do not know how to use arrays yet, we will store the result in a `long long` variable that, written in decimal, has the same digits as the number in binary: for example, 6 (which is 110 in binary) is stored as the number one hundred and ten."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que llegeixi una seqüència de naturals i, per a cada nombre, escrigui la seva representació en binari (sense zeros a l'esquerra) i quantes xifres 1 té. El 0 en binari és 0.",
      "Diseñad un algoritmo que lea una secuencia de naturales y, para cada número, escriba su representación en binario (sin ceros a la izquierda) y cuántas cifras 1 tiene. El 0 en binario es 0.",
      "Design an algorithm that reads a sequence of naturals and, for each number, writes its binary representation (without leading zeros) and how many 1 digits it has. 0 in binary is 0."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència de naturals N (0 ≤ N ≤ 200000) acabada en -1. Hi ha com a mínim un nombre abans del -1.",
      "**Entrada:** una secuencia de naturales N (0 ≤ N ≤ 200000) terminada en -1. Hay como mínimo un número antes del -1.",
      "**Input:** a sequence of naturals N (0 ≤ N ≤ 200000) ending in -1. There is at least one number before the -1."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida:** una línia per a cada nombre, en el mateix ordre de l'entrada:",
      "**Salida:** una línea para cada número, en el mismo orden de la entrada:",
      "**Output:** one line for each number, in the same order as the input:"
     ]
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
     "x": [
      "Fes servir un while per recórrer la seqüència i un do...while per convertir cada nombre (així el 0 també surt bé): a cada volta, el residu de dividir per 2 és la xifra següent, que s'ha de col·locar a la posició de les unitats, desenes, centenes... No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Usa un while para recorrer la secuencia y un do...while para convertir cada número (así el 0 también sale bien): en cada vuelta, el resto de dividir por 2 es la cifra siguiente, que hay que colocar en la posición de las unidades, decenas, centenas... No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Use a while to go through the sequence and a do...while to convert each number (that way 0 also comes out right): at each iteration, the remainder of dividing by 2 is the next digit, which must be placed in the units, tens, hundreds position... Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Fes binari = binari + (N % 2) * posicio, i després posicio = posicio * 10 i N = N / 2. Treballa sobre una còpia del nombre (per poder-lo escriure al final) i reinicia binari, posicio i el comptador d'uns per a cada nombre.",
    "Haz binari = binari + (N % 2) * posicio, y después posicio = posicio * 10 y N = N / 2. Trabaja sobre una copia del número (para poder escribirlo al final) y reinicia binari, posicio y el contador de unos para cada número.",
    "Do binari = binari + (N % 2) * posicio, and then posicio = posicio * 10 and N = N / 2. Work on a copy of the number (so you can write it at the end) and reset binari, posicio and the ones counter for each number."
   ],
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
   "title": [
    "LA LLISTA DE PRIMERS",
    "LA LISTA DE PRIMOS",
    "THE LIST OF PRIMES"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Un club de criptografia necessita llistes de nombres primers per als seus jocs de xifratge. Recordeu que un nombre primer és un natural més gran que 1 que només és divisible per 1 i per ell mateix.",
      "Un club de criptografía necesita listas de números primos para sus juegos de cifrado. Recordad que un número primo es un natural mayor que 1 que solo es divisible por 1 y por sí mismo.",
      "A cryptography club needs lists of prime numbers for its cipher games. Remember that a prime number is a natural greater than 1 that is only divisible by 1 and by itself."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que llegeixi un natural N i escrigui, en una sola línia i en ordre creixent, tots els nombres primers **estrictament més petits** que N, separats per una coma i un espai. A la línia següent ha d'escriure quants n'hi ha.",
      "Diseñad un algoritmo que lea un natural N y escriba, en una sola línea y en orden creciente, todos los números primos **estrictamente menores** que N, separados por una coma y un espacio. En la línea siguiente tiene que escribir cuántos hay.",
      "Design an algorithm that reads a natural N and writes, on a single line and in increasing order, all the prime numbers **strictly less** than N, separated by a comma and a space. On the next line it must write how many there are."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un natural N (2 ≤ N ≤ 5000).",
      "**Entrada:** un natural N (2 ≤ N ≤ 5000).",
      "**Input:** a natural N (2 ≤ N ≤ 5000)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 2 línies):",
      "**Salida** (exactamente 2 líneas):",
      "**Output** (exactly 2 lines):"
     ]
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
     "x": [
      "Després de l'últim primer no hi ha ni coma ni espai. Si no hi ha cap primer més petit que N, la primera línia ha de ser `Cap primer`.",
      "Después del último primo no hay ni coma ni espacio. Si no hay ningún primo menor que N, la primera línea tiene que ser `Cap primer`.",
      "After the last prime there is neither a comma nor a space. If there is no prime less than N, the first line must be `Cap primer`."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb bucles for niats: un for per recórrer els candidats i un altre, a dins, per buscar-ne divisors. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con bucles for anidados: un for para recorrer los candidatos y otro, dentro, para buscar sus divisores. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with nested for loops: a for to go through the candidates and another, inside, to look for their divisors. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Per a cada candidat i de 2 a N − 1, suposa que és primer i busca un divisor d entre 2 i i − 1 (n'hi ha prou amb d * d <= i). Per posar bé les comes, escriu \", \" abans de cada primer excepte el primer de tots (quan el comptador encara val 0).",
    "Para cada candidato i de 2 a N − 1, supón que es primo y busca un divisor d entre 2 e i − 1 (basta con d * d <= i). Para poner bien las comas, escribe \", \" antes de cada primo excepto el primero de todos (cuando el contador todavía vale 0).",
    "For each candidate i from 2 to N − 1, assume it is prime and look for a divisor d between 2 and i − 1 (d * d <= i is enough). To place the commas correctly, write \", \" before each prime except the very first (when the counter is still 0)."
   ],
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
   "title": [
    "ELS DIES DE GLAÇADA",
    "LOS DÍAS DE HELADA",
    "THE FROSTY DAYS"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "L'estació meteorològica d'Engolasters registra cada dia la temperatura mínima, en graus i arrodonida a un enter. Un **dia de glaçada** és un dia amb temperatura mínima estrictament per sota de 0 graus (un dia amb 0 graus no ho és).",
      "La estación meteorológica de Engolasters registra cada día la temperatura mínima, en grados y redondeada a un entero. Un **día de helada** es un día con temperatura mínima estrictamente por debajo de 0 grados (un día con 0 grados no lo es).",
      "The Engolasters weather station records the minimum temperature every day, in degrees and rounded to an integer. A **frost day** is a day with a minimum temperature strictly below 0 degrees (a day at 0 degrees is not one)."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que llegeixi les temperatures mínimes d'una sèrie de dies i calculi quants dies de glaçada hi ha hagut, quina ha estat la ratxa més llarga de dies de glaçada consecutius i la temperatura mínima mitjana de tots els dies.",
      "Diseñad un algoritmo que lea las temperaturas mínimas de una serie de días y calcule cuántos días de helada ha habido, cuál ha sido la racha más larga de días de helada consecutivos y la temperatura mínima media de todos los días.",
      "Design an algorithm that reads the minimum temperatures of a series of days and computes how many frost days there were, the longest streak of consecutive frost days and the average minimum temperature of all the days."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència d'enters T (−40 ≤ T ≤ 40) acabada en 999 (el 999 no és una temperatura). La seqüència pot ser buida.",
      "**Entrada:** una secuencia de enteros T (−40 ≤ T ≤ 40) terminada en 999 (el 999 no es una temperatura). La secuencia puede estar vacía.",
      "**Input:** a sequence of integers T (−40 ≤ T ≤ 40) ending in 999 (the 999 is not a temperature). The sequence can be empty."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 3 línies), amb la mitjana M escrita amb 1 decimal:",
      "**Salida** (exactamente 3 líneas), con la media M escrita con 1 decimal:",
      "**Output** (exactly 3 lines), with the average M written with 1 decimal:"
     ]
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
     "x": [
      "Si la seqüència és buida, cal escriure només la línia `Sense dades`.",
      "Si la secuencia está vacía, hay que escribir solo la línea `Sense dades`.",
      "If the sequence is empty, only the line `Sense dades` must be written."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb un while (la seqüència no es pot guardar). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un while (la secuencia no se puede guardar). No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a while (the sequence cannot be stored). Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Porta un comptador de dies, la suma de temperatures, el total de glaçades i la ratxa actual: si T < 0 la ratxa creix (i la compares amb la millor), si no torna a 0. La mitjana és (double) suma / dies, només si dies > 0.",
    "Lleva un contador de días, la suma de temperaturas, el total de heladas y la racha actual: si T < 0 la racha crece (y la comparas con la mejor), si no vuelve a 0. La media es (double) suma / dies, solo si dies > 0.",
    "Keep a day counter, the sum of temperatures, the total of frosts and the current streak: if T < 0 the streak grows (and you compare it with the best), otherwise it goes back to 0. The average is (double) suma / dies, only if dies > 0."
   ],
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
   "title": [
    "LA MEDALLA DE PLATA",
    "LA MEDALLA DE PLATA",
    "THE SILVER MEDAL"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "En una competició de salts d'esquí, els jutges donen una puntuació a cada saltador. La medalla d'or és per a la puntuació més alta. La de plata és per a la **segona puntuació més alta diferent**: si diversos saltadors empaten amb la puntuació més alta, tots tenen or i la plata és per a la puntuació següent. Per exemple, amb les puntuacions 85 92 78 92 88, l'or és 92 i la plata és 88.",
      "En una competición de saltos de esquí, los jueces dan una puntuación a cada saltador. La medalla de oro es para la puntuación más alta. La de plata es para la **segunda puntuación más alta distinta**: si varios saltadores empatan con la puntuación más alta, todos tienen oro y la plata es para la puntuación siguiente. Por ejemplo, con las puntuaciones 85 92 78 92 88, el oro es 92 y la plata es 88.",
      "In a ski-jumping competition, the judges give each jumper a score. The gold medal goes to the highest score. The silver goes to the **second highest different score**: if several jumpers tie with the highest score, they all get gold and the silver goes to the next score. For example, with the scores 85 92 78 92 88, gold is 92 and silver is 88."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que llegeixi les puntuacions i escrigui quina és la puntuació d'or i quina la de plata.",
      "Diseñad un algoritmo que lea las puntuaciones y escriba cuál es la puntuación de oro y cuál la de plata.",
      "Design an algorithm that reads the scores and writes the gold score and the silver score."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència de naturals P (1 ≤ P ≤ 1000) acabada en 0 (el 0 no és una puntuació). La seqüència pot ser buida.",
      "**Entrada:** una secuencia de naturales P (1 ≤ P ≤ 1000) terminada en 0 (el 0 no es una puntuación). La secuencia puede estar vacía.",
      "**Input:** a sequence of naturals P (1 ≤ P ≤ 1000) ending in 0 (the 0 is not a score). The sequence can be empty."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 2 línies):",
      "**Salida** (exactamente 2 líneas):",
      "**Output** (exactly 2 lines):"
     ]
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
     "x": [
      "Si totes les puntuacions són iguals (o només hi ha un saltador), la segona línia ha de ser `No hi ha plata`. Si la seqüència és buida, cal escriure només la línia `Cap saltador`.",
      "Si todas las puntuaciones son iguales (o solo hay un saltador), la segunda línea tiene que ser `No hi ha plata`. Si la secuencia está vacía, hay que escribir solo la línea `Cap saltador`.",
      "If all the scores are equal (or there is only one jumper), the second line must be `No hi ha plata`. If the sequence is empty, only the line `Cap saltador` must be written."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb un while, recorrent la seqüència una sola vegada (no es pot guardar). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un while, recorriendo la secuencia una sola vez (no se puede guardar). No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a while, going through the sequence only once (it cannot be stored). Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Porta dues variables, primer i segon. Si arriba un valor més gran que el primer, l'antic primer passa a ser el segon; si és més petit que el primer però més gran que el segon, només canvia el segon; si és igual al primer, no canvia res.",
    "Lleva dos variables, primero y segundo. Si llega un valor mayor que el primero, el antiguo primero pasa a ser el segundo; si es menor que el primero pero mayor que el segundo, solo cambia el segundo; si es igual al primero, no cambia nada.",
    "Keep two variables, first and second. If a value greater than the first arrives, the old first becomes the second; if it is smaller than the first but greater than the second, only the second changes; if it is equal to the first, nothing changes."
   ],
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
   "title": [
    "ANDORRARUN: ABANDONAMENTS PER CATEGORIA",
    "ANDORRARUN: ABANDONOS POR CATEGORÍA",
    "ANDORRARUN: DROP-OUTS BY CATEGORY"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Els dorsals dels participants de la marató AndorraRun (naturals de 4 xifres) estan codificats per categories en funció de l'edat del participant:",
      "Los dorsales de los participantes de la maratón AndorraRun (naturales de 4 cifras) están codificados por categorías en función de la edad del participante:",
      "The race numbers of the AndorraRun marathon participants (4-digit naturals) are encoded by category according to the participant's age:"
     ]
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
     "x": [
      "Durant la cursa, cada vegada que un participant abandona, l'organització n'anota el dorsal. Quan s'acaba la marató s'entra un -1 com a marca de final.",
      "Durante la carrera, cada vez que un participante abandona, la organización anota su dorsal. Cuando se acaba la maratón se introduce un -1 como marca de final.",
      "During the race, every time a participant drops out, the organisers note down their race number. When the marathon ends a -1 is entered as the end marker."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, a partir de la seqüència de dorsals en l'ordre en què els participants han abandonat, ens digui per a cada categoria quants participants han abandonat i quin ha estat el primer a fer-ho, i quina és la categoria amb més abandonaments (en cas d'empat, la que surt abans a la llista: jove, mitjana, avançada, mega-avançada).",
      "Diseñad un algoritmo que, a partir de la secuencia de dorsales en el orden en que los participantes han abandonado, nos diga para cada categoría cuántos participantes han abandonado y quién ha sido el primero en hacerlo, y cuál es la categoría con más abandonos (en caso de empate, la que sale antes en la lista: joven, media, avanzada, mega-avanzada).",
      "Design an algorithm that, from the sequence of race numbers in the order in which participants dropped out, tells us for each category how many participants dropped out and who was the first to do so, and which category had the most drop-outs (in case of a tie, the one that comes first in the list: young, middle, advanced, mega-advanced)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència de dorsals (enters entre 3000 i 9999, sense repeticions) acabada amb -1. La seqüència pot ser buida (només el -1).",
      "**Entrada:** una secuencia de dorsales (enteros entre 3000 y 9999, sin repeticiones) terminada con -1. La secuencia puede estar vacía (solo el -1).",
      "**Input:** a sequence of race numbers (integers between 3000 and 9999, without repeats) ending with -1. The sequence can be empty (only the -1)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 5 línies):",
      "**Salida** (exactamente 5 líneas):",
      "**Output** (exactly 5 lines):"
     ]
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
     "x": [
      "on cada N és el nombre d'abandonaments de la categoria i cada D el dorsal del primer participant de la categoria que ha abandonat. Si en una categoria no ha abandonat ningú, la seva línia només porta el nom i el 0 (per exemple `Joves: 0`), sense el parèntesi. CATEGORIA és `Joves`, `Mitjans`, `Avancats` o `Mega-avancats`; si no ha abandonat ningú, l'última línia és `Mes abandonaments: cap`.",
      "donde cada N es el número de abandonos de la categoría y cada D el dorsal del primer participante de la categoría que ha abandonado. Si en una categoría no ha abandonado nadie, su línea solo lleva el nombre y el 0 (por ejemplo `Joves: 0`), sin el paréntesis. CATEGORIA es `Joves`, `Mitjans`, `Avancats` o `Mega-avancats`; si no ha abandonado nadie, la última línea es `Mes abandonaments: cap`.",
      "where each N is the number of drop-outs in the category and each D the race number of the first participant of the category who dropped out. If nobody dropped out in a category, its line only has the name and the 0 (for example `Joves: 0`), without the parenthesis. CATEGORIA is `Joves`, `Mitjans`, `Avancats` or `Mega-avancats`; if nobody dropped out, the last line is `Mes abandonaments: cap`."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb un while que llegeixi fins al -1 i un switch sobre la xifra dels milers del dorsal (DORSAL / 1000) per decidir la categoria. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un while que lea hasta el -1 y un switch sobre la cifra de los millares del dorsal (DORSAL / 1000) para decidir la categoría. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a while that reads up to the -1 and a switch on the thousands digit of the race number (DORSAL / 1000) to decide the category. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Porta un comptador i una variable «primer dorsal» per a cada categoria: el primer dorsal només s'apunta quan el comptador encara val 0. Al final, busca el màxim recorrent les categories en ordre i canviant només amb > estricte, així l'empat el guanya la que surt abans.",
    "Lleva un contador y una variable «primer dorsal» para cada categoría: el primer dorsal solo se apunta cuando el contador todavía vale 0. Al final, busca el máximo recorriendo las categorías en orden y cambiando solo con > estricto, así el empate lo gana la que sale antes.",
    "Keep a counter and a “first race number” variable for each category: the first race number is only noted when the counter is still 0. At the end, find the maximum going through the categories in order and changing only with a strict >, so that a tie is won by the one that comes first."
   ],
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
   "title": [
    "ELS NOMBRES NARCISISTES",
    "LOS NÚMEROS NARCISISTAS",
    "NARCISSISTIC NUMBERS"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Un nombre és narcisista (o nombre d'Armstrong) quan és igual a la suma de les seves xifres elevades, cadascuna, al nombre de xifres que té. Per exemple, el 153 té 3 xifres i 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153, i el 9474 té 4 xifres i 9^4 + 4^4 + 7^4 + 4^4 = 6561 + 256 + 2401 + 256 = 9474. Tots els nombres d'una sola xifra són narcisistes (7 = 7^1).",
      "Un número es narcisista (o número de Armstrong) cuando es igual a la suma de sus cifras elevadas, cada una, al número de cifras que tiene. Por ejemplo, el 153 tiene 3 cifras y 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153, y el 9474 tiene 4 cifras y 9^4 + 4^4 + 7^4 + 4^4 = 6561 + 256 + 2401 + 256 = 9474. Todos los números de una sola cifra son narcisistas (7 = 7^1).",
      "A number is narcissistic (or an Armstrong number) when it is equal to the sum of its digits each raised to the number of digits it has. For example, 153 has 3 digits and 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153, and 9474 has 4 digits and 9^4 + 4^4 + 7^4 + 4^4 = 6561 + 256 + 2401 + 256 = 9474. All single-digit numbers are narcissistic (7 = 7^1)."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, donat un natural N, escrigui tots els nombres narcisistes entre 1 i N (tots dos inclosos), en ordre creixent i cadascun amb la seva descomposició, i al final quants n'ha trobat.",
      "Diseñad un algoritmo que, dado un natural N, escriba todos los números narcisistas entre 1 y N (ambos incluidos), en orden creciente y cada uno con su descomposición, y al final cuántos ha encontrado.",
      "Design an algorithm that, given a natural N, writes all the narcissistic numbers between 1 and N (both included), in increasing order and each with its decomposition, and at the end how many it found."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un natural N (1 ≤ N ≤ 100000).",
      "**Entrada:** un natural N (1 ≤ N ≤ 100000).",
      "**Input:** a natural N (1 ≤ N ≤ 100000)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida:** una línia per a cada nombre narcisista X i una última línia amb el total T:",
      "**Salida:** una línea para cada número narcisista X y una última línea con el total T:",
      "**Output:** one line for each narcissistic number X and a last line with the total T:"
     ]
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
     "x": [
      "on K és el nombre de xifres de X i D1, D2, ..., DK són les seves xifres d'esquerra a dreta. Hi ha exactament un espai a cada costat del `=` i de cada `+`, i cap espai al final de la línia. Si X té una sola xifra, la línia és `X = X^1` (per exemple `7 = 7^1`).",
      "donde K es el número de cifras de X y D1, D2, ..., DK son sus cifras de izquierda a derecha. Hay exactamente un espacio a cada lado del `=` y de cada `+`, y ningún espacio al final de la línea. Si X tiene una sola cifra, la línea es `X = X^1` (por ejemplo `7 = 7^1`).",
      "where K is the number of digits of X and D1, D2, ..., DK are its digits from left to right. There is exactly one space on each side of the `=` and of each `+`, and no space at the end of the line. If X has a single digit, the line is `X = X^1` (for example `7 = 7^1`)."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb bucles niats: un for que recorri els candidats de 1 a N i, a dins, bucles per comptar les xifres, per sumar les potències (calcula-les multiplicant, sense `pow`) i per escriure les xifres d'esquerra a dreta. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con bucles anidados: un for que recorra los candidatos de 1 a N y, dentro, bucles para contar las cifras, para sumar las potencias (calcúlalas multiplicando, sin `pow`) y para escribir las cifras de izquierda a derecha. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with nested loops: a for going through the candidates from 1 to N and, inside, loops to count the digits, to add the powers (compute them by multiplying, without `pow`) and to write the digits from left to right. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Per a cada X: compta les xifres (K) i suma cada xifra elevada a K multiplicant-la K vegades. Per escriure les xifres d'esquerra a dreta, calcula div = 10^(K-1) i ves dividint-lo per 10: cada xifra és (X / div) % 10.",
    "Para cada X: cuenta las cifras (K) y suma cada cifra elevada a K multiplicándola K veces. Para escribir las cifras de izquierda a derecha, calcula div = 10^(K-1) y ve dividiéndolo por 10: cada cifra es (X / div) % 10.",
    "For each X: count the digits (K) and add each digit raised to K by multiplying it K times. To write the digits from left to right, compute div = 10^(K-1) and keep dividing it by 10: each digit is (X / div) % 10."
   ],
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
   "title": [
    "L'AUTOCAR DE LLARG RECORREGUT",
    "EL AUTOCAR DE LARGO RECORRIDO",
    "THE LONG-DISTANCE COACH"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Una empresa d'autocars fa rutes llargues que surten d'Andorra i travessen mitja Europa. Cada ruta està formada per N etapes, i de cada etapa se'n coneix la durada en minuts (comptant-hi la parada final). El rellotge digital de l'autocar mostra l'hora en format de 24 hores, sempre amb dues xifres per a les hores i dues per als minuts (per exemple, 07:05).",
      "Una empresa de autocares hace rutas largas que salen de Andorra y atraviesan media Europa. Cada ruta está formada por N etapas, y de cada etapa se conoce su duración en minutos (contando la parada final). El reloj digital del autocar muestra la hora en formato de 24 horas, siempre con dos cifras para las horas y dos para los minutos (por ejemplo, 07:05).",
      "A coach company runs long routes that leave Andorra and cross half of Europe. Each route is made up of N stages, and the duration of each stage in minutes is known (including the final stop). The coach's digital clock shows the time in 24-hour format, always with two digits for the hours and two for the minutes (for example, 07:05)."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, a partir de l'hora de sortida i de la durada de cada etapa, escrigui l'hora que marcarà el rellotge en acabar cada etapa i, si ja no és el mateix dia de la sortida, quants dies han passat. Al final ha d'escriure la durada total del viatge en hores i minuts.",
      "Diseñad un algoritmo que, a partir de la hora de salida y de la duración de cada etapa, escriba la hora que marcará el reloj al acabar cada etapa y, si ya no es el mismo día de la salida, cuántos días han pasado. Al final tiene que escribir la duración total del viaje en horas y minutos.",
      "Design an algorithm that, from the departure time and the duration of each stage, writes the time the clock will show at the end of each stage and, if it is no longer the day of departure, how many days have passed. At the end it must write the total duration of the trip in hours and minutes."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** l'hora de sortida HH MM (0 ≤ HH ≤ 23, 0 ≤ MM ≤ 59), el nombre d'etapes N (1 ≤ N ≤ 20) i, després, N enters amb la durada de cada etapa en minuts (1 ≤ DUR ≤ 3000).",
      "**Entrada:** la hora de salida HH MM (0 ≤ HH ≤ 23, 0 ≤ MM ≤ 59), el número de etapas N (1 ≤ N ≤ 20) y, después, N enteros con la duración de cada etapa en minutos (1 ≤ DUR ≤ 3000).",
      "**Input:** the departure time HH MM (0 ≤ HH ≤ 23, 0 ≤ MM ≤ 59), the number of stages N (1 ≤ N ≤ 20) and, then, N integers with the duration of each stage in minutes (1 ≤ DUR ≤ 3000)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament N+1 línies):",
      "**Salida** (exactamente N+1 líneas):",
      "**Output** (exactly N+1 lines):"
     ]
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
     "x": [
      "El text ` (+D)` només s'afegeix quan l'etapa acaba D dies després del dia de la sortida (D ≥ 1); si acaba el mateix dia de la sortida, la línia s'acaba just després dels minuts. A la línia del total, H són les hores completes (poden ser més de 24) i M els minuts que sobren (0 ≤ M ≤ 59), tots dos sense zeros a l'esquerra.",
      "El texto ` (+D)` solo se añade cuando la etapa acaba D días después del día de la salida (D ≥ 1); si acaba el mismo día de la salida, la línea termina justo después de los minutos. En la línea del total, H son las horas completas (pueden ser más de 24) y M los minutos que sobran (0 ≤ M ≤ 59), ambos sin ceros a la izquierda.",
      "The text ` (+D)` is only added when the stage ends D days after the day of departure (D ≥ 1); if it ends on the day of departure, the line ends right after the minutes. On the total line, H is the complete hours (it can be more than 24) and M the remaining minutes (0 ≤ M ≤ 59), both without leading zeros."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb un for per a les etapes, i fes servir `setw` i `setfill` de `<iomanip>` per als zeros a l'esquerra del rellotge. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un for para las etapas, y usa `setw` y `setfill` de `<iomanip>` para los ceros a la izquierda del reloj. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a for for the stages, and use `setw` and `setfill` from `<iomanip>` for the clock's leading zeros. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Treballa en minuts comptats des de la mitjanit del dia de sortida (HH * 60 + MM) i suma-hi la durada de cada etapa. Els dies passats són minuts / 1440, i l'hora del rellotge surt de minuts % 1440. Posa setfill('0') i setw(2) davant de les hores i dels minuts.",
    "Trabaja en minutos contados desde la medianoche del día de salida (HH * 60 + MM) y súmale la duración de cada etapa. Los días pasados son minutos / 1440, y la hora del reloj sale de minutos % 1440. Pon setfill('0') y setw(2) delante de las horas y de los minutos.",
    "Work in minutes counted from midnight on the day of departure (HH * 60 + MM) and add the duration of each stage. The days passed are minutes / 1440, and the clock time comes from minutes % 1440. Put setfill('0') and setw(2) in front of the hours and the minutes."
   ],
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
   "title": [
    "LA NUMERACIÓ DE LES FACTURES",
    "LA NUMERACIÓN DE LAS FACTURAS",
    "THE INVOICE NUMBERING"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Una botiga numera les factures de manera que cada factura nova ha de tenir un número estrictament més gran que la que s'ha emès just abans. L'auditor ha detectat que hi ha factures mal numerades i ens demana un programa per revisar-les.",
      "Una tienda numera las facturas de manera que cada factura nueva tiene que tener un número estrictamente mayor que la que se ha emitido justo antes. El auditor ha detectado que hay facturas mal numeradas y nos pide un programa para revisarlas.",
      "A shop numbers its invoices so that each new invoice must have a number strictly greater than the one issued just before. The auditor has found that some invoices are wrongly numbered and asks us for a program to check them."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que llegeixi els números de les factures, en l'ordre en què s'han emès, i comprovi si la numeració és estrictament creixent. Hi ha un error cada vegada que una factura té un número més petit o igual que el de la factura immediatament anterior (es compara sempre amb la factura llegida just abans, encara que aquesta també fos errònia). Cal dir quants errors hi ha i on són el primer i l'últim.",
      "Diseñad un algoritmo que lea los números de las facturas, en el orden en que se han emitido, y compruebe si la numeración es estrictamente creciente. Hay un error cada vez que una factura tiene un número menor o igual que el de la factura inmediatamente anterior (se compara siempre con la factura leída justo antes, aunque esta también fuera errónea). Hay que decir cuántos errores hay y dónde están el primero y el último.",
      "Design an algorithm that reads the invoice numbers, in the order in which they were issued, and checks whether the numbering is strictly increasing. There is an error each time an invoice has a number less than or equal to that of the immediately preceding invoice (it is always compared with the invoice read just before, even if that one was also wrong). You must say how many errors there are and where the first and the last are."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència de naturals NUM (1 ≤ NUM ≤ 1000000) acabada amb -1. La seqüència pot ser buida (només el -1).",
      "**Entrada:** una secuencia de naturales NUM (1 ≤ NUM ≤ 1000000) terminada con -1. La secuencia puede estar vacía (solo el -1).",
      "**Input:** a sequence of naturals NUM (1 ≤ NUM ≤ 1000000) ending with -1. The sequence can be empty (only the -1)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida:**",
      "**Salida:**",
      "**Output:**"
     ]
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
     "x": [
      "on N és el nombre de factures, E el nombre d'errors, P i Q les posicions de la factura errònia dins la seqüència (la primera factura és la posició 1), ACT el número d'aquesta factura i ANT el de la factura anterior. Si només hi ha un error, el primer i l'últim són el mateix.",
      "donde N es el número de facturas, E el número de errores, P y Q las posiciones de la factura errónea dentro de la secuencia (la primera factura es la posición 1), ACT el número de esa factura y ANT el de la factura anterior. Si solo hay un error, el primero y el último son el mismo.",
      "where N is the number of invoices, E the number of errors, P and Q the positions of the wrong invoice in the sequence (the first invoice is position 1), ACT the number of that invoice and ANT that of the previous invoice. If there is only one error, the first and the last are the same."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb un while que llegeixi fins al -1, guardant sempre el número anterior. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un while que lea hasta el -1, guardando siempre el número anterior. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a while that reads up to the -1, always keeping the previous number. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Guarda el número anterior i un comptador de posició. Quan ACT <= ANT, compta l'error; si és el primer, guarda'n la posició i els dos números, i, sigui el que sigui, sobreescriu sempre les dades de l'últim error. L'anterior s'actualitza a cada volta, encara que hi hagi error.",
    "Guarda el número anterior y un contador de posición. Cuando ACT <= ANT, cuenta el error; si es el primero, guarda su posición y los dos números y, sea cual sea, sobrescribe siempre los datos del último error. El anterior se actualiza en cada vuelta, aunque haya error.",
    "Keep the previous number and a position counter. When ACT <= ANT, count the error; if it is the first, store its position and the two numbers and, either way, always overwrite the data of the last error. The previous number is updated at each iteration, even if there is an error."
   ],
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
   "title": [
    "LA XIFRA MÉS FREQÜENT",
    "LA CIFRA MÁS FRECUENTE",
    "THE MOST FREQUENT DIGIT"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "En un concurs de ràdio, els oients envien un número llarg i el locutor ha de dir de seguida quina xifra s'hi repeteix més, quantes xifres diferents fa servir i quines xifres no hi surten mai.",
      "En un concurso de radio, los oyentes envían un número largo y el locutor tiene que decir enseguida qué cifra se repite más, cuántas cifras distintas usa y qué cifras no salen nunca.",
      "In a radio quiz, listeners send in a long number and the presenter has to say straight away which digit is repeated most, how many different digits it uses and which digits never appear."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, donat un natural N, digui quina és la xifra que apareix més vegades a N (si n'hi ha diverses d'empatades, la més petita) i quantes vegades hi apareix, quantes xifres diferents té N i quines xifres del 0 al 9 no hi apareixen. El número 0 té una xifra: el 0.",
      "Diseñad un algoritmo que, dado un natural N, diga cuál es la cifra que aparece más veces en N (si hay varias empatadas, la más pequeña) y cuántas veces aparece, cuántas cifras distintas tiene N y qué cifras del 0 al 9 no aparecen. El número 0 tiene una cifra: el 0.",
      "Design an algorithm that, given a natural N, says which digit appears most often in N (if several tie, the smallest) and how many times it appears, how many different digits N has and which digits from 0 to 9 do not appear. The number 0 has one digit: 0."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un natural N (0 ≤ N ≤ 999999999999999999). Com que pot tenir fins a 18 xifres, llegeix-lo en una variable `long long`.",
      "**Entrada:** un natural N (0 ≤ N ≤ 999999999999999999). Como puede tener hasta 18 cifras, léelo en una variable `long long`.",
      "**Input:** a natural N (0 ≤ N ≤ 999999999999999999). Since it can have up to 18 digits, read it into a `long long` variable."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 3 línies):",
      "**Salida** (exactamente 3 líneas):",
      "**Output** (exactly 3 lines):"
     ]
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
     "x": [
      "Si R és 1, la primera línia acaba amb `(1 vegada)`. Les xifres absents s'escriuen en ordre creixent, separades per un espai i sense espai al final; si hi surten totes deu, la tercera línia és `Absents: cap`.",
      "Si R es 1, la primera línea acaba con `(1 vegada)`. Las cifras ausentes se escriben en orden creciente, separadas por un espacio y sin espacio al final; si salen las diez, la tercera línea es `Absents: cap`.",
      "If R is 1, the first line ends with `(1 vegada)`. The absent digits are written in increasing order, separated by a space and without a space at the end; if all ten appear, the third line is `Absents: cap`."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho sense taules: un for que provi cada xifra del 0 al 9 i, a dins, un do...while que recorri les xifres de N (amb % 10 i / 10) comptant quantes vegades hi surt; el do...while fa que el 0 també es tracti com un número d'una xifra. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo sin tablas: un for que pruebe cada cifra del 0 al 9 y, dentro, un do...while que recorra las cifras de N (con % 10 y / 10) contando cuántas veces sale; el do...while hace que el 0 también se trate como un número de una cifra. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it without arrays: a for that tries each digit from 0 to 9 and, inside, a do...while that goes through the digits of N (with % 10 and / 10) counting how many times it appears; the do...while makes 0 also be treated as a one-digit number. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Per a cada xifra d del 0 al 9, recorre una còpia de N amb % 10 i / 10 i compta quantes vegades hi surt d. Si només canvies la millor quan el comptador és estrictament més gran, l'empat el guanya la xifra més petita. Les absents són les d amb comptador 0: fes una segona passada per escriure-les després de les dues primeres línies.",
    "Para cada cifra d del 0 al 9, recorre una copia de N con % 10 y / 10 y cuenta cuántas veces sale d. Si solo cambias la mejor cuando el contador es estrictamente mayor, el empate lo gana la cifra más pequeña. Las ausentes son las d con contador 0: haz una segunda pasada para escribirlas después de las dos primeras líneas.",
    "For each digit d from 0 to 9, go through a copy of N with % 10 and / 10 and count how many times d appears. If you only change the best when the counter is strictly greater, a tie is won by the smallest digit. The absent ones are the d with counter 0: do a second pass to write them after the first two lines."
   ],
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
   "title": [
    "EL ROMBE BUIT",
    "EL ROMBO VACÍO",
    "THE HOLLOW DIAMOND"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Un taller de rètols lluminosos vol programar una pantalla que dibuixi el contorn d'un rombe amb asteriscos. El rombe té 2N-1 línies: la del mig és la més ampla (2N-1 caràcters, amb un asterisc a cada extrem) i cada línia per sobre i per sota té dues posicions menys d'amplada que la del costat més proper al mig. La primera i l'última línia tenen un sol asterisc.",
      "Un taller de rótulos luminosos quiere programar una pantalla que dibuje el contorno de un rombo con asteriscos. El rombo tiene 2N-1 líneas: la del medio es la más ancha (2N-1 caracteres, con un asterisco en cada extremo) y cada línea por encima y por debajo tiene dos posiciones menos de anchura que la del lado más cercano al medio. La primera y la última línea tienen un solo asterisco.",
      "A neon-sign workshop wants to program a display that draws the outline of a diamond with asterisks. The diamond has 2N-1 lines: the middle one is the widest (2N-1 characters, with an asterisk at each end) and each line above and below is two positions narrower than the neighbouring one closer to the middle. The first and last lines have a single asterisk."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, donat N, dibuixi el contorn del rombe. Només es dibuixen els asteriscos de la vora: l'interior queda buit (amb espais).",
      "Diseñad un algoritmo que, dado N, dibuje el contorno del rombo. Solo se dibujan los asteriscos del borde: el interior queda vacío (con espacios).",
      "Design an algorithm that, given N, draws the outline of the diamond. Only the edge asterisks are drawn: the inside is left empty (with spaces)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un natural N (1 ≤ N ≤ 20).",
      "**Entrada:** un natural N (1 ≤ N ≤ 20).",
      "**Input:** a natural N (1 ≤ N ≤ 20)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida:** exactament 2N-1 línies. Per exemple, per a N = 4:",
      "**Salida:** exactamente 2N-1 líneas. Por ejemplo, para N = 4:",
      "**Output:** exactly 2N-1 lines. For example, for N = 4:"
     ]
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
     "x": [
      "Cada línia comença amb els espais necessaris perquè el rombe quedi centrat (la línia del mig no en porta cap) i s'acaba just després de l'últim asterisc, **sense espais al final**. Si N és 1, la sortida és un sol asterisc.",
      "Cada línea empieza con los espacios necesarios para que el rombo quede centrado (la línea del medio no lleva ninguno) y termina justo después del último asterisco, **sin espacios al final**. Si N es 1, la salida es un solo asterisco.",
      "Each line starts with the spaces needed to centre the diamond (the middle line has none) and ends right after the last asterisk, **without trailing spaces**. If N is 1, the output is a single asterisk."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb bucles for niats, escrivint els espais i els asteriscos d'un en un. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con bucles for anidados, escribiendo los espacios y los asteriscos de uno en uno. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with nested for loops, writing the spaces and asterisks one by one. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Numera les línies i = 1, 2, ..., N, ..., 2, 1 (per a les de sota, i = 2N - fila). Cada línia té N - i espais, un asterisc i, si i > 1, 2i - 3 espais i un altre asterisc. No escriguis res després de l'últim asterisc.",
    "Numera las líneas i = 1, 2, ..., N, ..., 2, 1 (para las de abajo, i = 2N - fila). Cada línea tiene N - i espacios, un asterisco y, si i > 1, 2i - 3 espacios y otro asterisco. No escribas nada después del último asterisco.",
    "Number the lines i = 1, 2, ..., N, ..., 2, 1 (for the lower ones, i = 2N - row). Each line has N - i spaces, an asterisk and, if i > 1, 2i - 3 spaces and another asterisk. Do not write anything after the last asterisk."
   ],
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
   "title": [
    "LA CUA DEL SUPERMERCAT",
    "LA COLA DEL SUPERMERCADO",
    "THE SUPERMARKET QUEUE"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "En un supermercat petit només hi ha una caixa oberta. De cada client sabem el minut en què arriba a la cua (comptat des de l'obertura) i quants minuts triga la caixera a cobrar-lo. Els clients s'atenen per ordre d'arribada: si quan arriba un client la caixa és lliure, se l'atén immediatament; si no, ha d'esperar que acabin tots els que té davant. L'espera d'un client és el temps que passa des que arriba fins que el comencen a atendre.",
      "En un supermercado pequeño solo hay una caja abierta. De cada cliente sabemos el minuto en que llega a la cola (contado desde la apertura) y cuántos minutos tarda la cajera en cobrarle. Los clientes se atienden por orden de llegada: si cuando llega un cliente la caja está libre, se le atiende inmediatamente; si no, tiene que esperar a que acaben todos los que tiene delante. La espera de un cliente es el tiempo que pasa desde que llega hasta que empiezan a atenderle.",
      "In a small supermarket only one till is open. For each customer we know the minute they join the queue (counted from opening time) and how many minutes the cashier takes to serve them. Customers are served in order of arrival: if the till is free when a customer arrives, they are served immediately; otherwise, they have to wait until everyone in front of them has finished. A customer's wait is the time from their arrival until they start being served."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que simuli la cua i ens digui quants clients hi ha hagut, l'espera total i la mitjana, l'espera més llarga i quin client l'ha patida, i el minut en què la caixa queda lliure després d'atendre l'últim client.",
      "Diseñad un algoritmo que simule la cola y nos diga cuántos clientes ha habido, la espera total y la media, la espera más larga y qué cliente la ha sufrido, y el minuto en que la caja queda libre después de atender al último cliente.",
      "Design an algorithm that simulates the queue and tells us how many customers there were, the total and average wait, the longest wait and which customer suffered it, and the minute at which the till becomes free after serving the last customer."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència de parelles ARR SERV (0 ≤ ARR ≤ 10000, 1 ≤ SERV ≤ 60), en ordre d'arribada (ARR no decreixent), acabada amb un -1 en lloc de l'ARR. La seqüència pot ser buida (només el -1).",
      "**Entrada:** una secuencia de parejas ARR SERV (0 ≤ ARR ≤ 10000, 1 ≤ SERV ≤ 60), en orden de llegada (ARR no decreciente), terminada con un -1 en lugar del ARR. La secuencia puede estar vacía (solo el -1).",
      "**Input:** a sequence of pairs ARR SERV (0 ≤ ARR ≤ 10000, 1 ≤ SERV ≤ 60), in order of arrival (ARR non-decreasing), ending with a -1 instead of the ARR. The sequence can be empty (only the -1)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida:** si no hi ha cap client, una única línia `Cap client`. Altrament, exactament 5 línies:",
      "**Salida:** si no hay ningún cliente, una única línea `Cap client`. Si no, exactamente 5 líneas:",
      "**Output:** if there are no customers, a single line `Cap client`. Otherwise, exactly 5 lines:"
     ]
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
     "x": [
      "M amb 2 decimals. Els clients es numeren des de 1 en ordre d'arribada; si diversos clients empaten amb l'espera màxima, K és el primer d'ells (si ningú no ha esperat, X és 0 i K és 1).",
      "M con 2 decimales. Los clientes se numeran desde 1 en orden de llegada; si varios clientes empatan con la espera máxima, K es el primero de ellos (si nadie ha esperado, X es 0 y K es 1).",
      "M with 2 decimals. Customers are numbered from 1 in order of arrival; if several customers tie with the maximum wait, K is the first of them (if nobody waited, X is 0 and K is 1)."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb un while que llegeixi fins al -1, portant en una variable el minut en què la caixa quedarà lliure. Per als decimals fes servir `fixed` i `setprecision`. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un while que lea hasta el -1, llevando en una variable el minuto en que la caja quedará libre. Para los decimales usa `fixed` y `setprecision`. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a while that reads up to the -1, keeping in a variable the minute at which the till will become free. For the decimals use `fixed` and `setprecision`. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Porta una variable amb el minut en què la caixa queda lliure (al principi, 0). Cada client comença a ser atès a inici = el més gran entre ARR i aquest minut; la seva espera és inici - ARR i la caixa queda lliure a inici + SERV.",
    "Lleva una variable con el minuto en que la caja queda libre (al principio, 0). Cada cliente empieza a ser atendido en inicio = el mayor entre ARR y ese minuto; su espera es inicio - ARR y la caja queda libre en inicio + SERV.",
    "Keep a variable with the minute at which the till becomes free (at first, 0). Each customer starts being served at start = the larger of ARR and that minute; their wait is start - ARR and the till becomes free at start + SERV."
   ],
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
   "title": [
    "ELS NOMBRES AMICS",
    "LOS NÚMEROS AMIGOS",
    "AMICABLE NUMBERS"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Dos nombres naturals diferents A i B són amics si la suma dels divisors propis d'A (tots els seus divisors excepte el mateix A) és B, i la suma dels divisors propis de B és A. Per exemple, 220 i 284 són amics: els divisors propis de 220 són 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 i 110, que sumen 284, i els de 284 són 1, 2, 4, 71 i 142, que sumen 220. Un nombre perfecte (com el 6 o el 28) no és amic de si mateix, perquè els dos nombres han de ser diferents.",
      "Dos números naturales distintos A y B son amigos si la suma de los divisores propios de A (todos sus divisores excepto el propio A) es B, y la suma de los divisores propios de B es A. Por ejemplo, 220 y 284 son amigos: los divisores propios de 220 son 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 y 110, que suman 284, y los de 284 son 1, 2, 4, 71 y 142, que suman 220. Un número perfecto (como el 6 o el 28) no es amigo de sí mismo, porque los dos números tienen que ser distintos.",
      "Two different natural numbers A and B are amicable if the sum of the proper divisors of A (all its divisors except A itself) is B, and the sum of the proper divisors of B is A. For example, 220 and 284 are amicable: the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110, which add up to 284, and those of 284 are 1, 2, 4, 71 and 142, which add up to 220. A perfect number (like 6 or 28) is not amicable with itself, because the two numbers must be different."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, donat un natural N, escrigui totes les parelles de nombres amics en què tots dos nombres són més petits o iguals que N, i al final quantes parelles ha trobat.",
      "Diseñad un algoritmo que, dado un natural N, escriba todas las parejas de números amigos en que los dos números son menores o iguales que N, y al final cuántas parejas ha encontrado.",
      "Design an algorithm that, given a natural N, writes all the pairs of amicable numbers in which both numbers are less than or equal to N, and at the end how many pairs it found."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un natural N (1 ≤ N ≤ 3000).",
      "**Entrada:** un natural N (1 ≤ N ≤ 3000).",
      "**Input:** a natural N (1 ≤ N ≤ 3000)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida:** una línia per a cada parella i una última línia amb el total P:",
      "**Salida:** una línea para cada pareja y una última línea con el total P:",
      "**Output:** one line for each pair and a last line with the total P:"
     ]
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
     "x": [
      "A cada parella, A < B. Cada parella s'escriu una sola vegada, i les parelles van ordenades de més petita a més gran segons A. Si no n'hi ha cap, només s'escriu la línia `Parelles: 0`.",
      "En cada pareja, A < B. Cada pareja se escribe una sola vez, y las parejas van ordenadas de menor a mayor según A. Si no hay ninguna, solo se escribe la línea `Parelles: 0`.",
      "In each pair, A < B. Each pair is written only once, and the pairs are sorted from smallest to largest by A. If there are none, only the line `Parelles: 0` is written."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb bucles niats: un for que recorri els candidats A i, a dins, un for que sumi els divisors propis d'A i, quan calgui, un altre que sumi els de la suma obtinguda. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con bucles anidados: un for que recorra los candidatos A y, dentro, un for que sume los divisores propios de A y, cuando haga falta, otro que sume los de la suma obtenida. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with nested loops: a for going through the candidates A and, inside, a for that adds the proper divisors of A and, when needed, another that adds those of the sum obtained. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Per a cada A, calcula B = suma dels divisors propis d'A. Només cal continuar si A < B i B ≤ N (així cada parella surt un sol cop, en ordre, i els perfectes queden fora); llavors comprova que la suma dels divisors propis de B sigui A.",
    "Para cada A, calcula B = suma de los divisores propios de A. Solo hace falta continuar si A < B y B ≤ N (así cada pareja sale una sola vez, en orden, y los perfectos quedan fuera); entonces comprueba que la suma de los divisores propios de B sea A.",
    "For each A, compute B = sum of the proper divisors of A. You only need to go on if A < B and B ≤ N (that way each pair comes out only once, in order, and perfect numbers are left out); then check that the sum of the proper divisors of B is A."
   ],
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
   "title": [
    "EL PREU MÉS ALT",
    "EL PRECIO MÁS ALTO",
    "THE HIGHER PRICE"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Dues botigues del barri venen el mateix patinet elèctric. Abans de comparar ofertes, la Marta vol saber quin dels dos preus és el més alt.",
      "Dos tiendas del barrio venden el mismo patinete eléctrico. Antes de comparar ofertas, Marta quiere saber cuál de los dos precios es el más alto.",
      "Two local shops sell the same electric scooter. Before comparing offers, Marta wants to know which of the two prices is higher."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, entrats els dos preus, escrigui el més alt.",
      "Diseñad un algoritmo que, introducidos los dos precios, escriba el más alto.",
      "Design an algorithm that, given the two prices, writes the higher one."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** dos enters P1 i P2 (preus en euros, 0 ≤ P1, P2 ≤ 5000).",
      "**Entrada:** dos enteros P1 y P2 (precios en euros, 0 ≤ P1, P2 ≤ 5000).",
      "**Input:** two integers P1 and P2 (prices in euros, 0 ≤ P1, P2 ≤ 5000)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 1 línia):",
      "**Salida** (exactamente 1 línea):",
      "**Output** (exactly 1 line):"
     ]
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
     "x": [
      "Si els dos preus són iguals, s'escriu aquest preu. Fes-ho amb un condicional, sense bucles. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Si los dos precios son iguales, se escribe ese precio. Hazlo con un condicional, sin bucles. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "If both prices are equal, that price is written. Do it with a conditional, without loops. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Un if … else que compari P1 amb P2: si P1 és més gran o igual, el més alt és P1; si no, P2.",
    "Un if … else que compare P1 con P2: si P1 es mayor o igual, el más alto es P1; si no, P2.",
    "An if … else comparing P1 with P2: if P1 is greater or equal, the higher one is P1; otherwise, P2."
   ],
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
   "title": [
    "EL TERMÒMETRE DEL REFUGI",
    "EL TERMÓMETRO DEL REFUGIO",
    "THE MOUNTAIN-HUT THERMOMETER"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Al refugi de muntanya hi ha un termòmetre digital que, a més de la temperatura, mostra un missatge per als excursionistes.",
      "En el refugio de montaña hay un termómetro digital que, además de la temperatura, muestra un mensaje para los excursionistas.",
      "At the mountain hut there is a digital thermometer that, as well as the temperature, shows a message for hikers."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, entrada la temperatura, digui si és sota zero, exactament zero o sobre zero.",
      "Diseñad un algoritmo que, introducida la temperatura, diga si es bajo cero, exactamente cero o sobre cero.",
      "Design an algorithm that, given the temperature, says whether it is below zero, exactly zero or above zero."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un enter T (temperatura en graus, -60 ≤ T ≤ 50).",
      "**Entrada:** un entero T (temperatura en grados, -60 ≤ T ≤ 50).",
      "**Input:** an integer T (temperature in degrees, -60 ≤ T ≤ 50)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 1 línia): `Sota zero`, `Zero graus` o `Sobre zero`.",
      "**Salida** (exactamente 1 línea): `Sota zero`, `Zero graus` o `Sobre zero`.",
      "**Output** (exactly 1 line): `Sota zero`, `Zero graus` or `Sobre zero`."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb una cadena de condicionals (if … else if … else), sense bucles. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con una cadena de condicionales (if … else if … else), sin bucles. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a chain of conditionals (if … else if … else), without loops. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Tres casos excloents: pregunta per T < 0, després per T == 0, i la resta és sobre zero.",
    "Tres casos excluyentes: pregunta por T < 0, después por T == 0, y el resto es sobre cero.",
    "Three mutually exclusive cases: ask about T < 0, then about T == 0, and the rest is above zero."
   ],
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
   "title": [
    "LA NOTA EN LLETRES",
    "LA NOTA EN LETRAS",
    "THE MARK IN WORDS"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Una escola d'idiomes posa les notes amb una lletra de la A a la F, però el butlletí que s'envia a les famílies les ha de mostrar en paraules.",
      "Una escuela de idiomas pone las notas con una letra de la A a la F, pero el boletín que se envía a las familias las tiene que mostrar en palabras.",
      "A language school gives marks with a letter from A to F, but the report sent to families must show them in words."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, entrada la lletra, escrigui la qualificació corresponent: A `Excellent`, B `Notable`, C `Be`, D `Suficient`, E `Insuficient` i F `Molt deficient`. La lletra pot arribar en majúscula o en minúscula. Si no és cap d'aquestes lletres, cal escriure `Nota no valida`.",
      "Diseñad un algoritmo que, introducida la letra, escriba la calificación correspondiente: A `Excellent`, B `Notable`, C `Be`, D `Suficient`, E `Insuficient` y F `Molt deficient`. La letra puede llegar en mayúscula o en minúscula. Si no es ninguna de estas letras, hay que escribir `Nota no valida`.",
      "Design an algorithm that, given the letter, writes the corresponding grade: A `Excellent`, B `Notable`, C `Be`, D `Suficient`, E `Insuficient` and F `Molt deficient`. The letter can arrive in upper or lower case. If it is none of these letters, `Nota no valida` must be written."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un caràcter L.",
      "**Entrada:** un carácter L.",
      "**Input:** a character L."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 1 línia): la qualificació o el missatge d'error.",
      "**Salida** (exactamente 1 línea): la calificación o el mensaje de error.",
      "**Output** (exactly 1 line): the grade or the error message."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb un switch (agrupa la majúscula i la minúscula de cada lletra en dos case seguits), sense bucles. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un switch (agrupa la mayúscula y la minúscula de cada letra en dos case seguidos), sin bucles. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a switch (group the upper and lower case of each letter in two cases in a row), without loops. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Dos case seguits sense res entremig ('A' i 'a') comparteixen el mateix codi. No oblidis el break de cada grup, i el default per a la resta.",
    "Dos case seguidos sin nada en medio ('A' y 'a') comparten el mismo código. No olvides el break de cada grupo, y el default para el resto.",
    "Two cases in a row with nothing in between ('A' and 'a') share the same code. Do not forget the break of each group, and the default for the rest."
   ],
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
   "title": [
    "EL SOU DE LES INFERMERES",
    "EL SUELDO DE LAS ENFERMERAS",
    "THE NURSES' PAY"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "A l'hospital, el sou mensual del personal d'infermeria es calcula a partir de les hores treballades i de les guàrdies de nit. Les primeres 140 hores del mes es paguen a 15,00 € l'hora; les hores que passen de 140 són hores extres i es paguen a 22,50 € l'hora. A més, cada guàrdia de nit afegeix 40,00 €, i qui fa més de 8 guàrdies en un mes cobra un plus fix de 100,00 €.",
      "En el hospital, el sueldo mensual del personal de enfermería se calcula a partir de las horas trabajadas y de las guardias de noche. Las primeras 140 horas del mes se pagan a 15,00 € la hora; las horas que pasan de 140 son horas extra y se pagan a 22,50 € la hora. Además, cada guardia de noche añade 40,00 €, y quien hace más de 8 guardias en un mes cobra un plus fijo de 100,00 €.",
      "At the hospital, the monthly pay of the nursing staff is computed from the hours worked and the night shifts. The first 140 hours of the month are paid at €15.00 an hour; the hours beyond 140 are overtime and are paid at €22.50 an hour. In addition, each night shift adds €40.00, and anyone who does more than 8 shifts in a month gets a fixed bonus of €100.00."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, entrades les hores i les guàrdies del mes, calculi les hores extres i el sou.",
      "Diseñad un algoritmo que, introducidas las horas y las guardias del mes, calcule las horas extra y el sueldo.",
      "Design an algorithm that, given the hours and shifts of the month, computes the overtime hours and the pay."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** dos enters H (hores treballades, 0 ≤ H ≤ 300) i G (guàrdies de nit, 0 ≤ G ≤ 31).",
      "**Entrada:** dos enteros H (horas trabajadas, 0 ≤ H ≤ 300) y G (guardias de noche, 0 ≤ G ≤ 31).",
      "**Input:** two integers H (hours worked, 0 ≤ H ≤ 300) and G (night shifts, 0 ≤ G ≤ 31)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 2 línies, el sou amb 2 decimals):",
      "**Salida** (exactamente 2 líneas, el sueldo con 2 decimales):",
      "**Output** (exactly 2 lines, the pay with 2 decimals):"
     ]
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
     "x": [
      "Fes-ho amb condicionals, sense bucles. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con condicionales, sin bucles. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with conditionals, without loops. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Separa les hores en normals (com a màxim 140) i extres (les que passen de 140, o 0). El plus de 100 € només si G > 8.",
    "Separa las horas en normales (como máximo 140) y extra (las que pasan de 140, o 0). El plus de 100 € solo si G > 8.",
    "Split the hours into normal ones (at most 140) and overtime (those beyond 140, or 0). The €100 bonus only if G > 8."
   ],
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
   "title": [
    "LA TEMPERATURA MÀXIMA",
    "LA TEMPERATURA MÁXIMA",
    "THE MAXIMUM TEMPERATURE"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Una estació meteorològica envia cada dia la temperatura màxima registrada. Quan s'acaba la campanya de mesures, envia el valor especial -999, que no és cap temperatura.",
      "Una estación meteorológica envía cada día la temperatura máxima registrada. Cuando se acaba la campaña de mediciones, envía el valor especial -999, que no es ninguna temperatura.",
      "A weather station sends the maximum temperature recorded every day. When the measuring campaign ends, it sends the special value -999, which is not a temperature."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que digui quina ha estat la temperatura més alta de la campanya i quants dies s'han enviat.",
      "Diseñad un algoritmo que diga cuál ha sido la temperatura más alta de la campaña y cuántos días se han enviado.",
      "Design an algorithm that says what the highest temperature of the campaign was and how many days were sent."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència d'enters (temperatures, entre -50 i 50) acabada amb -999. Hi ha com a mínim una temperatura abans del -999.",
      "**Entrada:** una secuencia de enteros (temperaturas, entre -50 y 50) terminada con -999. Hay como mínimo una temperatura antes del -999.",
      "**Input:** a sequence of integers (temperatures, between -50 and 50) ending with -999. There is at least one temperature before the -999."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 2 línies):",
      "**Salida** (exactamente 2 líneas):",
      "**Output** (exactly 2 lines):"
     ]
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
     "x": [
      "Fes-ho amb un while i lectura avançada. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un while y lectura adelantada. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a while and a read-ahead. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Com que les temperatures poden ser negatives, inicialitza el màxim amb la primera temperatura llegida, no amb 0.",
    "Como las temperaturas pueden ser negativas, inicializa el máximo con la primera temperatura leída, no con 0.",
    "Since temperatures can be negative, initialise the maximum with the first temperature read, not with 0."
   ],
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
   "title": [
    "ELS QUADRATS",
    "LOS CUADRADOS",
    "THE SQUARES"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Un professor de primària vol una tira amb els quadrats dels primers nombres naturals per penjar-la a la paret de la classe.",
      "Un maestro de primaria quiere una tira con los cuadrados de los primeros números naturales para colgarla en la pared de la clase.",
      "A primary-school teacher wants a strip with the squares of the first natural numbers to hang on the classroom wall."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, entrat N, escrigui en una sola línia els quadrats de 1 a N: 1 4 9 16 …",
      "Diseñad un algoritmo que, introducido N, escriba en una sola línea los cuadrados de 1 a N: 1 4 9 16 …",
      "Design an algorithm that, given N, writes on a single line the squares from 1 to N: 1 4 9 16 …"
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un natural N (1 ≤ N ≤ 30).",
      "**Entrada:** un natural N (1 ≤ N ≤ 30).",
      "**Input:** a natural N (1 ≤ N ≤ 30)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 1 línia): els N quadrats separats per un espai, **sense** espai després de l'últim.",
      "**Salida** (exactamente 1 línea): los N cuadrados separados por un espacio, **sin** espacio después del último.",
      "**Output** (exactly 1 line): the N squares separated by a space, **without** a space after the last one."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb un for. No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un for. No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a for. Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Escriu el primer quadrat abans del bucle i, dins el bucle (des de 2), escriu sempre l'espai abans de cada número.",
    "Escribe el primer cuadrado antes del bucle y, dentro del bucle (desde 2), escribe siempre el espacio antes de cada número.",
    "Write the first square before the loop and, inside the loop (from 2), always write the space before each number."
   ],
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
   "title": [
    "L'ACTA DE NOTES",
    "EL ACTA DE NOTAS",
    "THE MARK SHEET"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "En acabar el curs, la tutora omple l'acta d'un grup: per a cada alumne, una nota entre 0 i 10. Abans de signar-la, vol saber quants alumnes han aprovat (nota de 5 o més), si ha aprovat tothom, i si hi ha alguna matrícula (un 10).",
      "Al terminar el curso, la tutora rellena el acta de un grupo: para cada alumno, una nota entre 0 y 10. Antes de firmarla, quiere saber cuántos alumnos han aprobado (nota de 5 o más), si ha aprobado todo el mundo y si hay alguna matrícula (un 10).",
      "At the end of the year, the form tutor fills in a group's mark sheet: for each pupil, a mark between 0 and 10. Before signing it, she wants to know how many pupils passed (a mark of 5 or more), whether everyone passed, and whether there is any top distinction (a 10)."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que ho calculi.",
      "Diseñad un algoritmo que lo calcule.",
      "Design an algorithm that computes it."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un natural N (1 ≤ N ≤ 50), el nombre d'alumnes, seguit de N notes reals (0 ≤ nota ≤ 10).",
      "**Entrada:** un natural N (1 ≤ N ≤ 50), el número de alumnos, seguido de N notas reales (0 ≤ nota ≤ 10).",
      "**Input:** a natural N (1 ≤ N ≤ 50), the number of pupils, followed by N real marks (0 ≤ mark ≤ 10)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 3 línies; les dues últimes acaben en `si` o `no`):",
      "**Salida** (exactamente 3 líneas; las dos últimas acaban en `si` o `no`):",
      "**Output** (exactly 3 lines; the last two end in `si` or `no`):"
     ]
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
     "x": [
      "Fes-ho amb un for i dues banderes (variables bool). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un for y dos banderas (variables bool). No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a for and two flags (bool variables). Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "«Tothom ha aprovat» comença a true i passa a false amb el primer suspès; «alguna matrícula» comença a false i passa a true amb el primer 10.",
    "«Todo el mundo ha aprobado» empieza en true y pasa a false con el primer suspenso; «alguna matrícula» empieza en false y pasa a true con el primer 10.",
    "“Everyone passed” starts as true and becomes false with the first fail; “some distinction” starts as false and becomes true with the first 10."
   ],
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
   "title": [
    "EL NÚMERO DE LA SORT",
    "EL NÚMERO DE LA SUERTE",
    "THE LUCKY NUMBER"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "En una fira, el joc del «número de la sort» dona premi si el número que treus és primer. Si no ho és, l'encarregat ensenya el divisor més petit (diferent d'1) per demostrar-ho.",
      "En una feria, el juego del «número de la suerte» da premio si el número que sacas es primo. Si no lo es, el encargado enseña el divisor más pequeño (distinto de 1) para demostrarlo.",
      "At a fair, the “lucky number” game gives a prize if the number you draw is prime. If it is not, the stallholder shows the smallest divisor (other than 1) to prove it."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, entrat el número, digui si és primer i, si no ho és, quin és el seu divisor més petit més gran que 1.",
      "Diseñad un algoritmo que, introducido el número, diga si es primo y, si no lo es, cuál es su divisor más pequeño mayor que 1.",
      "Design an algorithm that, given the number, says whether it is prime and, if it is not, what its smallest divisor greater than 1 is."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un natural n (2 ≤ n ≤ 1000000).",
      "**Entrada:** un natural n (2 ≤ n ≤ 1000000).",
      "**Input:** a natural n (2 ≤ n ≤ 1000000)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 1 línia):",
      "**Salida** (exactamente 1 línea):",
      "**Output** (exactly 1 line):"
     ]
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
     "x": [
      "Fes-ho amb un while que s'aturi quan trobi el divisor (cerca amb bandera). No facis servir vector, algorithm, struct ni class. Encara no hem vist funcions: tot el codi ha d'anar dins el main().",
      "Hazlo con un while que se detenga cuando encuentre el divisor (búsqueda con bandera). No uses vector, algorithm, struct ni class. Todavía no hemos visto funciones: todo el código tiene que ir dentro del main().",
      "Do it with a while that stops when it finds the divisor (search with a flag). Do not use vector, algorithm, struct or class. We have not seen functions yet: all the code must go inside main()."
     ]
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
   "hint": [
    "Busca un divisor des de 2: while (d < n && !trobat). Quan el trobis, no incrementis d, i així en sortir d és el divisor més petit.",
    "Busca un divisor desde 2: while (d < n && !trobat). Cuando lo encuentres, no incrementes d, y así al salir d es el divisor más pequeño.",
    "Look for a divisor from 2: while (d < n && !trobat). When you find it, do not increment d, so that on exit d is the smallest divisor."
   ],
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
   "title": [
    "EL MÀXIM DE TRES AMB FUNCIONS",
    "EL MÁXIMO DE TRES CON FUNCIONES",
    "THE MAXIMUM OF THREE WITH FUNCTIONS"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, entrats tres enters, escrigui el més gran, fent servir una funció que calculi el màxim de **dos** valors.",
      "Diseñad un algoritmo que, introducidos tres enteros, escriba el mayor, usando una función que calcule el máximo de **dos** valores.",
      "Design an algorithm that, given three integers, writes the largest, using a function that computes the maximum of **two** values."
     ]
    },
    {
     "t": "p",
     "x": [
      "Cal definir la funció `int max2(int a, int b)`, que retorna el més gran de a i b, i cridar-la des del main() (dues vegades).",
      "Hay que definir la función `int max2(int a, int b)`, que devuelve el mayor de a y b, y llamarla desde el main() (dos veces).",
      "You must define the function `int max2(int a, int b)`, which returns the larger of a and b, and call it from main() (twice)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** tres enters A, B i C (-1000 ≤ A, B, C ≤ 1000).",
      "**Entrada:** tres enteros A, B y C (-1000 ≤ A, B, C ≤ 1000).",
      "**Input:** three integers A, B and C (-1000 ≤ A, B, C ≤ 1000)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 1 línia):",
      "**Salida** (exactamente 1 línea):",
      "**Output** (exactly 1 line):"
     ]
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
     "x": [
      "Fes-ho amb la funció max2. No facis servir vector, algorithm, struct ni class.",
      "Hazlo con la función max2. No uses vector, algorithm, struct ni class.",
      "Do it with the function max2. Do not use vector, algorithm, struct or class."
     ]
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
   "hint": [
    "max2(max2(A, B), C): el resultat de la primera crida és l'argument de la segona.",
    "max2(max2(A, B), C): el resultado de la primera llamada es el argumento de la segunda.",
    "max2(max2(A, B), C): the result of the first call is the argument of the second."
   ],
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
   "title": [
    "ELS TRES GERMANS",
    "LOS TRES HERMANOS",
    "THE THREE SIBLINGS"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "En una família hi ha tres germans i volem escriure les seves edats de petit a gran.",
      "En una familia hay tres hermanos y queremos escribir sus edades de menor a mayor.",
      "In a family there are three siblings and we want to write their ages from youngest to oldest."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que ordeni les tres edats fent servir un procediment `void intercanvia(int &a, int &b)` que intercanvia el valor de dues variables. Amb tres comparacions i els intercanvis necessaris, les tres variables queden ordenades.",
      "Diseñad un algoritmo que ordene las tres edades usando un procedimiento `void intercanvia(int &a, int &b)` que intercambia el valor de dos variables. Con tres comparaciones y los intercambios necesarios, las tres variables quedan ordenadas.",
      "Design an algorithm that sorts the three ages using a procedure `void intercanvia(int &a, int &b)` that swaps the values of two variables. With three comparisons and the necessary swaps, the three variables end up sorted."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** tres enters E1, E2 i E3 (edats, 0 ≤ E ≤ 120).",
      "**Entrada:** tres enteros E1, E2 y E3 (edades, 0 ≤ E ≤ 120).",
      "**Input:** three integers E1, E2 and E3 (ages, 0 ≤ E ≤ 120)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 1 línia): les tres edats de menor a major, separades per un espai.",
      "**Salida** (exactamente 1 línea): las tres edades de menor a mayor, separadas por un espacio.",
      "**Output** (exactly 1 line): the three ages from smallest to largest, separated by a space."
     ]
    },
    {
     "t": "p",
     "x": [
      "Fes-ho amb el procediment intercanvia, amb pas per referència. No facis servir vector, algorithm, struct ni class.",
      "Hazlo con el procedimiento intercanvia, con paso por referencia. No uses vector, algorithm, struct ni class.",
      "Do it with the procedure intercanvia, with pass by reference. Do not use vector, algorithm, struct or class."
     ]
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
   "hint": [
    "Compara el primer amb el segon, el segon amb el tercer, i un altre cop el primer amb el segon; intercanvia quan estiguin desordenats.",
    "Compara el primero con el segundo, el segundo con el tercero y otra vez el primero con el segundo; intercambia cuando estén desordenados.",
    "Compare the first with the second, the second with the third, and the first with the second again; swap when they are out of order."
   ],
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
   "title": [
    "DIVIDIR RESTANT",
    "DIVIDIR RESTANDO",
    "DIVIDING BY SUBTRACTING"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Un microcontrolador molt senzill no té instrucció de divisió: només sap sumar i restar. Per dividir, resta el divisor tantes vegades com pot.",
      "Un microcontrolador muy sencillo no tiene instrucción de división: solo sabe sumar y restar. Para dividir, resta el divisor tantas veces como puede.",
      "A very simple microcontroller has no division instruction: it can only add and subtract. To divide, it subtracts the divisor as many times as it can."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que, per a cada parella de valors, calculi el quocient i el residu de la divisió entera fent servir el procediment `void quocientEnterResta(int dvdnt, int dvsr, int &Q, int &R)`, que els calcula **restant**, sense fer servir els operadors `/` ni `%`.",
      "Diseñad un algoritmo que, para cada pareja de valores, calcule el cociente y el resto de la división entera usando el procedimiento `void quocientEnterResta(int dvdnt, int dvsr, int &Q, int &R)`, que los calcula **restando**, sin usar los operadores `/` ni `%`.",
      "Design an algorithm that, for each pair of values, computes the quotient and remainder of the integer division using the procedure `void quocientEnterResta(int dvdnt, int dvsr, int &Q, int &R)`, which computes them **by subtracting**, without using the operators `/` or `%`."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència de parelles A B (0 ≤ A ≤ 100000, 1 ≤ B ≤ 1000), acabada amb la parella `0 0`, que no s'ha de tractar. La seqüència pot ser buida (només `0 0`): llavors no s'escriu res.",
      "**Entrada:** una secuencia de parejas A B (0 ≤ A ≤ 100000, 1 ≤ B ≤ 1000), terminada con la pareja `0 0`, que no se tiene que tratar. La secuencia puede estar vacía (solo `0 0`): entonces no se escribe nada.",
      "**Input:** a sequence of pairs A B (0 ≤ A ≤ 100000, 1 ≤ B ≤ 1000), ending with the pair `0 0`, which must not be processed. The sequence can be empty (only `0 0`): then nothing is written."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida:** una línia per parella:",
      "**Salida:** una línea por pareja:",
      "**Output:** one line per pair:"
     ]
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
     "x": [
      "Fes-ho amb el procediment quocientEnterResta i sense fer servir `/` ni `%` enlloc del programa. No facis servir vector, algorithm, struct ni class.",
      "Hazlo con el procedimiento quocientEnterResta y sin usar `/` ni `%` en ninguna parte del programa. No uses vector, algorithm, struct ni class.",
      "Do it with the procedure quocientEnterResta and without using `/` or `%` anywhere in the program. Do not use vector, algorithm, struct or class."
     ]
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
   "hint": [
    "Q comença a 0 i R al dividend; mentre R >= dvsr, resta el divisor a R i suma 1 a Q. Al main, la seqüència és de parelles: atura't quan A i B siguin tots dos 0.",
    "Q empieza en 0 y R en el dividendo; mientras R >= dvsr, resta el divisor a R y suma 1 a Q. En el main, la secuencia es de parejas: detente cuando A y B sean los dos 0.",
    "Q starts at 0 and R at the dividend; while R >= dvsr, subtract the divisor from R and add 1 to Q. In main, the sequence is of pairs: stop when A and B are both 0."
   ],
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
   "title": [
    "ELS NOMBRES ABUNDANTS",
    "LOS NÚMEROS ABUNDANTES",
    "ABUNDANT NUMBERS"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Un nombre és **abundant** quan la suma dels seus divisors propis (tots els divisors excepte ell mateix) és més gran que el nombre. Per exemple, 12 és abundant: 1 + 2 + 3 + 4 + 6 = 16 > 12.",
      "Un número es **abundante** cuando la suma de sus divisores propios (todos los divisores excepto él mismo) es mayor que el número. Por ejemplo, 12 es abundante: 1 + 2 + 3 + 4 + 6 = 16 > 12.",
      "A number is **abundant** when the sum of its proper divisors (all its divisors except itself) is greater than the number. For example, 12 is abundant: 1 + 2 + 3 + 4 + 6 = 16 > 12."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que llisti els nombres abundants entre 1 i N i digui quants n'hi ha. Cal definir la funció `int sumaDivisorsPropis(int x)` i fer-la servir des del main().",
      "Diseñad un algoritmo que liste los números abundantes entre 1 y N y diga cuántos hay. Hay que definir la función `int sumaDivisorsPropis(int x)` y usarla desde el main().",
      "Design an algorithm that lists the abundant numbers between 1 and N and says how many there are. You must define the function `int sumaDivisorsPropis(int x)` and use it from main()."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** un natural N (1 ≤ N ≤ 3000).",
      "**Entrada:** un natural N (1 ≤ N ≤ 3000).",
      "**Input:** a natural N (1 ≤ N ≤ 3000)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 2 línies): a la primera, els nombres abundants entre 1 i N separats per un espai (sense espai al final; si no n'hi ha cap, la línia queda buida); a la segona:",
      "**Salida** (exactamente 2 líneas): en la primera, los números abundantes entre 1 y N separados por un espacio (sin espacio al final; si no hay ninguno, la línea queda vacía); en la segunda:",
      "**Output** (exactly 2 lines): on the first, the abundant numbers between 1 and N separated by a space (without a space at the end; if there are none, the line is empty); on the second:"
     ]
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
     "x": [
      "Fes-ho amb la funció sumaDivisorsPropis. No facis servir vector, algorithm, struct ni class.",
      "Hazlo con la función sumaDivisorsPropis. No uses vector, algorithm, struct ni class.",
      "Do it with the function sumaDivisorsPropis. Do not use vector, algorithm, struct or class."
     ]
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
   "hint": [
    "La funció recorre de 1 a x - 1 i suma els divisors. Per escriure els separadors bé, fes servir una bandera «primer» o escriu l'espai abans de cada número llevat del primer.",
    "La función recorre de 1 a x - 1 y suma los divisores. Para escribir bien los separadores, usa una bandera «primero» o escribe el espacio antes de cada número salvo el primero.",
    "The function goes from 1 to x - 1 and adds the divisors. To write the separators correctly, use a “first” flag or write the space before each number except the first."
   ],
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
   "title": [
    "EL CRONÒMETRE DE LA CURSA DE MUNTANYA",
    "EL CRONÓMETRO DE LA CARRERA DE MONTAÑA",
    "THE MOUNTAIN RACE STOPWATCH"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "A l'arribada d'una cursa de muntanya, el cronòmetre registra el temps de cada corredor en segons. L'organització vol els temps del guanyador i de l'últim, i la diferència entre tots dos, en format hores:minuts:segons.",
      "En la llegada de una carrera de montaña, el cronómetro registra el tiempo de cada corredor en segundos. La organización quiere los tiempos del ganador y del último, y la diferencia entre los dos, en formato horas:minutos:segundos.",
      "At the finish of a mountain race, the stopwatch records each runner's time in seconds. The organisers want the times of the winner and of the last runner, and the difference between them, in hours:minutes:seconds format."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que ho calculi. Cal definir el procediment `void convertir(int t, int &h, int &m, int &s)`, que descompon t segons en hores, minuts i segons, i fer-lo servir per escriure els tres temps.",
      "Diseñad un algoritmo que lo calcule. Hay que definir el procedimiento `void convertir(int t, int &h, int &m, int &s)`, que descompone t segundos en horas, minutos y segundos, y usarlo para escribir los tres tiempos.",
      "Design an algorithm that computes it. You must define the procedure `void convertir(int t, int &h, int &m, int &s)`, which breaks t seconds into hours, minutes and seconds, and use it to write the three times."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència de temps en segons (1 ≤ t ≤ 359999), acabada amb -1. Hi ha com a mínim un corredor.",
      "**Entrada:** una secuencia de tiempos en segundos (1 ≤ t ≤ 359999), terminada con -1. Hay como mínimo un corredor.",
      "**Input:** a sequence of times in seconds (1 ≤ t ≤ 359999), ending with -1. There is at least one runner."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida** (exactament 3 línies), amb els minuts i els segons sempre amb dues xifres:",
      "**Salida** (exactamente 3 líneas), con los minutos y los segundos siempre con dos cifras:",
      "**Output** (exactly 3 lines), with the minutes and seconds always with two digits:"
     ]
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
     "x": [
      "Fes-ho amb el procediment convertir (pots definir també un procediment per escriure un temps). No facis servir vector, algorithm, struct ni class.",
      "Hazlo con el procedimiento convertir (puedes definir también un procedimiento para escribir un tiempo). No uses vector, algorithm, struct ni class.",
      "Do it with the procedure convertir (you can also define a procedure to write a time). Do not use vector, algorithm, struct or class."
     ]
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
   "hint": [
    "h = t / 3600, m = (t % 3600) / 60, s = t % 60. Per escriure dues xifres, posa un 0 davant si el valor és menor que 10 (o fes servir setw(2) i setfill('0')).",
    "h = t / 3600, m = (t % 3600) / 60, s = t % 60. Para escribir dos cifras, pon un 0 delante si el valor es menor que 10 (o usa setw(2) y setfill('0')).",
    "h = t / 3600, m = (t % 3600) / 60, s = t % 60. To write two digits, put a 0 in front if the value is less than 10 (or use setw(2) and setfill('0'))."
   ],
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
   "title": [
    "EL MCD I EL MCM",
    "EL MCD Y EL MCM",
    "THE GCD AND THE LCM"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Per fer exercicis de fraccions, un alumne vol una eina que calculi el màxim comú divisor i el mínim comú múltiple de parelles de nombres.",
      "Para hacer ejercicios de fracciones, un alumno quiere una herramienta que calcule el máximo común divisor y el mínimo común múltiplo de parejas de números.",
      "To do fraction exercises, a pupil wants a tool that computes the greatest common divisor and the least common multiple of pairs of numbers."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que ho faci per a cada parella. Cal definir les funcions `int mcd(int a, int b)`, amb l'algorisme d'Euclides (mentre b no sigui 0, la parella (a, b) passa a ser (b, a % b), i al final el mcd és a), i `int mcm(int a, int b)`, que fa servir mcd: mcm(a, b) = a / mcd(a, b) * b.",
      "Diseñad un algoritmo que lo haga para cada pareja. Hay que definir las funciones `int mcd(int a, int b)`, con el algoritmo de Euclides (mientras b no sea 0, la pareja (a, b) pasa a ser (b, a % b), y al final el mcd es a), e `int mcm(int a, int b)`, que usa mcd: mcm(a, b) = a / mcd(a, b) * b.",
      "Design an algorithm that does it for each pair. You must define the functions `int mcd(int a, int b)`, with Euclid's algorithm (while b is not 0, the pair (a, b) becomes (b, a % b), and at the end the gcd is a), and `int mcm(int a, int b)`, which uses mcd: mcm(a, b) = a / mcd(a, b) * b."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència de parelles A B (1 ≤ A, B ≤ 10000), acabada amb la parella `0 0`, que no s'ha de tractar. La seqüència pot ser buida (només `0 0`): llavors no s'escriu res.",
      "**Entrada:** una secuencia de parejas A B (1 ≤ A, B ≤ 10000), terminada con la pareja `0 0`, que no se tiene que tratar. La secuencia puede estar vacía (solo `0 0`): entonces no se escribe nada.",
      "**Input:** a sequence of pairs A B (1 ≤ A, B ≤ 10000), ending with the pair `0 0`, which must not be processed. The sequence can be empty (only `0 0`): then nothing is written."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida:** una línia per parella:",
      "**Salida:** una línea por pareja:",
      "**Output:** one line per pair:"
     ]
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
     "x": [
      "Fes-ho amb les funcions mcd i mcm. No facis servir vector, algorithm, struct ni class.",
      "Hazlo con las funciones mcd y mcm. No uses vector, algorithm, struct ni class.",
      "Do it with the functions mcd and mcm. Do not use vector, algorithm, struct or class."
     ]
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
   "hint": [
    "A Euclides necessites una variable auxiliar per fer el pas (a, b) → (b, a % b). Al mcm, dividir abans de multiplicar evita resultats massa grans.",
    "En Euclides necesitas una variable auxiliar para hacer el paso (a, b) → (b, a % b). En el mcm, dividir antes de multiplicar evita resultados demasiado grandes.",
    "In Euclid you need an auxiliary variable to do the step (a, b) → (b, a % b). In the lcm, dividing before multiplying avoids results that are too large."
   ],
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
   "title": [
    "ELS ANYS CAPICUES",
    "LOS AÑOS CAPICÚA",
    "PALINDROMIC YEARS"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Un any és **capicua** si es llegeix igual d'esquerra a dreta que de dreta a esquerra, com el 2002 o el 2112. Un club de curiositats numèriques vol saber, per a diversos anys, quin és el proper any capicua i quants anys falten.",
      "Un año es **capicúa** si se lee igual de izquierda a derecha que de derecha a izquierda, como el 2002 o el 2112. Un club de curiosidades numéricas quiere saber, para varios años, cuál es el próximo año capicúa y cuántos años faltan.",
      "A year is **palindromic** if it reads the same from left to right as from right to left, like 2002 or 2112. A club for numerical curiosities wants to know, for several years, which is the next palindromic year and how many years away it is."
     ]
    },
    {
     "t": "p",
     "x": [
      "Dissenyeu un algorisme que ho calculi. Cal definir la funció `int invertit(int n)`, que retorna n amb les xifres a l'inrevés, i la funció `bool esCapicua(int n)`, que la fa servir. Al final, cal dir quina ha estat l'espera més llarga i per a quin any (si n'hi ha diverses d'iguals, la del primer any de la llista).",
      "Diseñad un algoritmo que lo calcule. Hay que definir la función `int invertit(int n)`, que devuelve n con las cifras al revés, y la función `bool esCapicua(int n)`, que la usa. Al final, hay que decir cuál ha sido la espera más larga y para qué año (si hay varias iguales, la del primer año de la lista).",
      "Design an algorithm that computes it. You must define the function `int invertit(int n)`, which returns n with its digits reversed, and the function `bool esCapicua(int n)`, which uses it. At the end, you must say which was the longest wait and for which year (if several are equal, that of the first year in the list)."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Entrada:** una seqüència d'anys Y (1000 ≤ Y ≤ 9000), acabada amb 0. Hi ha com a mínim un any.",
      "**Entrada:** una secuencia de años Y (1000 ≤ Y ≤ 9000), terminada con 0. Hay como mínimo un año.",
      "**Input:** a sequence of years Y (1000 ≤ Y ≤ 9000), ending with 0. There is at least one year."
     ]
    },
    {
     "t": "p",
     "x": [
      "**Sortida:** una línia per any i una línia final:",
      "**Salida:** una línea por año y una línea final:",
      "**Output:** one line per year and a final line:"
     ]
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
     "x": [
      "on X és el primer any capicua **estrictament posterior** a Y. Fes-ho amb les funcions invertit i esCapicua. No facis servir vector, algorithm, struct ni class.",
      "donde X es el primer año capicúa **estrictamente posterior** a Y. Hazlo con las funciones invertit y esCapicua. No uses vector, algorithm, struct ni class.",
      "where X is the first palindromic year **strictly after** Y. Do it with the functions invertit and esCapicua. Do not use vector, algorithm, struct or class."
     ]
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
   "hint": [
    "invertit: mentre n > 0, inv = inv * 10 + n % 10 i n = n / 10. Per a cada any, prova Y + 1, Y + 2… fins trobar-ne un de capicua. Per a l'espera més llarga, actualitza només si és estrictament més gran.",
    "invertit: mientras n > 0, inv = inv * 10 + n % 10 y n = n / 10. Para cada año, prueba Y + 1, Y + 2… hasta encontrar uno capicúa. Para la espera más larga, actualiza solo si es estrictamente mayor.",
    "invertit: while n > 0, inv = inv * 10 + n % 10 and n = n / 10. For each year, try Y + 1, Y + 2… until you find a palindromic one. For the longest wait, update only if it is strictly greater."
   ],
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
