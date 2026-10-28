// Generat per tools/kit-import/comp.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "items": [
  {
   "id": "c-a1",
   "unit": "t1",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T1 · Activitats de les diapositives · Activitat 1",
    "T1 · Actividades de las diapositivas · Actividad 1",
    "U1 · Activities from the slides · Activity 1"
   ],
   "title": [
    "Activitat 1",
    "Actividad 1",
    "Activity 1"
   ],
   "q": [
    "**Converteix!** Resol les conversions mostrant els càlculs.",
    "**¡Convierte!** Resuelve las conversiones mostrando los cálculos.",
    "**Convert!** Solve the conversions showing the calculations."
   ],
   "hint": [
    "Baixar de nivell (B → b, KiB → B) multiplica; pujar divideix. Amb «i» el salt és 1 024 = 2¹⁰; sense «i», 1 000.",
    "Bajar de nivel (B → b, KiB → B) multiplica; subir divide. Con «i» el salto es 1 024 = 2¹⁰; sin «i», 1 000.",
    "Going down a level (B → b, KiB → B) multiplies; going up divides. With “i” the step is 1 024 = 2¹⁰; without “i”, 1 000."
   ],
   "parts": [
    {
     "l": "1",
     "q": "4 bytes → bits",
     "a": {
      "k": "num",
      "v": 32,
      "show": "32 b"
     },
     "sol": [
      {
       "steps": [
        {
         "x": "**De bytes a bits (× 8)**\n`4 B · 8 = 32 b`"
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`4 B = 32 b`",
          "**Resultado**\n`4 B = 32 b`",
          "**Result**\n`4 B = 32 b`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-a1-0",
       "cfg": {
        "x": 4,
        "a": "B",
        "b": "b"
       }
      }
     }
    },
    {
     "l": "2",
     "q": "64 bits → bytes",
     "a": {
      "k": "num",
      "v": 8,
      "show": "8 B"
     },
     "sol": [
      {
       "steps": [
        {
         "x": "**De bits a bytes (÷ 8)**\n`64 b ÷ 8 = 8 B`"
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`64 b = 8 B`",
          "**Resultado**\n`64 b = 8 B`",
          "**Result**\n`64 b = 8 B`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-a1-1",
       "cfg": {
        "x": 64,
        "a": "b",
        "b": "B"
       }
      }
     }
    },
    {
     "l": "3",
     "q": "2 KiB → bits",
     "a": {
      "k": "num",
      "v": 16384,
      "show": "16 384 b"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix binari (IEC): potències de 2.",
          "Prefijo binario (IEC): potencias de 2.",
          "Binary prefix (IEC): powers of 2."
         ],
         "x": [
          "**Passem a bytes**\n`2 KiB = 2 · 2¹⁰ B = 2 048 B`",
          "**Pasamos a bytes**\n`2 KiB = 2 · 2¹⁰ B = 2 048 B`",
          "**Convert to bytes**\n`2 KiB = 2 · 2¹⁰ B = 2 048 B`"
         ]
        },
        {
         "x": "**De bytes a bits (× 8)**\n`2 048 B · 8 = 16 384 b`"
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`2 KiB = 16 384 b`",
          "**Resultado**\n`2 KiB = 16 384 b`",
          "**Result**\n`2 KiB = 16 384 b`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-a1-2",
       "cfg": {
        "x": 2,
        "a": "KiB",
        "b": "b"
       }
      }
     }
    },
    {
     "l": "4",
     "q": "5 MiB → bytes",
     "a": {
      "k": "num",
      "v": 5242880,
      "show": "5 242 880 B"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix binari (IEC): potències de 2.",
          "Prefijo binario (IEC): potencias de 2.",
          "Binary prefix (IEC): powers of 2."
         ],
         "x": [
          "**Passem a bytes**\n`5 MiB = 5 · 2²⁰ B = 5 242 880 B`",
          "**Pasamos a bytes**\n`5 MiB = 5 · 2²⁰ B = 5 242 880 B`",
          "**Convert to bytes**\n`5 MiB = 5 · 2²⁰ B = 5 242 880 B`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`5 MiB = 5 242 880 B`",
          "**Resultado**\n`5 MiB = 5 242 880 B`",
          "**Result**\n`5 MiB = 5 242 880 B`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-a1-3",
       "cfg": {
        "x": 5,
        "a": "MiB",
        "b": "B"
       }
      }
     }
    },
    {
     "l": "5",
     "q": "8 192 bytes → KiB",
     "a": {
      "k": "num",
      "v": 8,
      "show": "8 KiB"
     },
     "sol": [
      {
       "steps": [
        {
         "why": "1 KiB = 2¹⁰ B = 1 024 B.",
         "x": [
          "**Passem a KiB**\n`8 192 B ÷ 2¹⁰ = 8 KiB`\nPer què es divideix: passes a una unitat més gran, i la pregunta és «quantes vegades hi cap 1 KiB?». És com passar minuts a hores: 30 min ÷ 60 = 0,5 h.",
          "**Pasamos a KiB**\n`8 192 B ÷ 2¹⁰ = 8 KiB`\nPor qué se divide: pasas a una unidad más grande, y la pregunta es «¿cuántas veces cabe 1 KiB?». Es como pasar minutos a horas: 30 min ÷ 60 = 0,5 h.",
          "**Convert to KiB**\n`8 192 B ÷ 2¹⁰ = 8 KiB`\nWhy we divide: you are moving to a larger unit, and the question is “how many times does 1 KiB fit?”. It is like converting minutes to hours: 30 min ÷ 60 = 0.5 h."
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`8 192 B = 8 KiB`",
          "**Resultado**\n`8 192 B = 8 KiB`",
          "**Result**\n`8 192 B = 8 KiB`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-a1-4",
       "cfg": {
        "x": 8192,
        "a": "B",
        "b": "KiB"
       }
      }
     }
    },
    {
     "l": "6",
     "q": "4 194 304 bytes → MiB",
     "a": {
      "k": "num",
      "v": 4,
      "show": "4 MiB"
     },
     "sol": [
      {
       "steps": [
        {
         "table": {
          "head": [
           [
            "Divisió",
            "División",
            "Division"
           ],
           [
            "Compte",
            "Cuenta",
            "Calculation"
           ],
           [
            "Resultat",
            "Resultado",
            "Result"
           ]
          ],
          "rows": [
           [
            "1",
            "4 194 304 B ÷ 1024",
            "= 4 096 KiB"
           ],
           [
            "2",
            "4 096 KiB ÷ 1024",
            "= 4 MiB"
           ]
          ]
         },
         "why": "1 MiB = 2²⁰ B = 1 048 576 B.",
         "x": [
          "**Passem a MiB**\n`4 194 304 B ÷ 2²⁰ = 4 MiB`\nPer què es divideix: passes a una unitat més gran, i la pregunta és «quantes vegades hi cap 1 MiB?». És com passar minuts a hores: 30 min ÷ 60 = 0,5 h. Dividir per 2²⁰ és el mateix que dividir per 1024 dues vegades, una per prefix:",
          "**Pasamos a MiB**\n`4 194 304 B ÷ 2²⁰ = 4 MiB`\nPor qué se divide: pasas a una unidad más grande, y la pregunta es «¿cuántas veces cabe 1 MiB?». Es como pasar minutos a horas: 30 min ÷ 60 = 0,5 h. Dividir por 2²⁰ es lo mismo que dividir por 1024 dos veces, una por prefijo:",
          "**Convert to MiB**\n`4 194 304 B ÷ 2²⁰ = 4 MiB`\nWhy we divide: you are moving to a larger unit, and the question is “how many times does 1 MiB fit?”. It is like converting minutes to hours: 30 min ÷ 60 = 0.5 h. Dividing by 2²⁰ is the same as dividing by 1024 twice, once per prefix:"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`4 194 304 B = 4 MiB`",
          "**Resultado**\n`4 194 304 B = 4 MiB`",
          "**Result**\n`4 194 304 B = 4 MiB`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-a1-5",
       "cfg": {
        "x": 4194304,
        "a": "B",
        "b": "MiB"
       }
      }
     }
    },
    {
     "l": "R",
     "q": [
      "**Repte:** quants bits calen per representar 65 536 valors diferents?",
      "**Reto:** ¿cuántos bits hacen falta para representar 65 536 valores distintos?",
      "**Challenge:** how many bits are needed to represent 65 536 different values?"
     ],
     "a": {
      "k": "int",
      "v": 16,
      "show": "16 bits"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Amb n bits hi ha 2ⁿ combinacions**\n`2ⁿ ≥ 65 536`",
          "**Con n bits hay 2ⁿ combinaciones**\n`2ⁿ ≥ 65 536`",
          "**With n bits there are 2ⁿ combinations**\n`2ⁿ ≥ 65 536`"
         ]
        },
        {
         "done": true,
         "why": [
          "Són exactament 2 bytes: per això un enter «short» de 16 bits té 65 536 valors.",
          "Son exactamente 2 bytes: por eso un entero «short» de 16 bits tiene 65 536 valores.",
          "That is exactly 2 bytes: that is why a 16-bit “short” integer has 65 536 values."
         ],
         "x": [
          "**Busquem la potència**\n`2¹⁶ = 65 536 ⟹ n = 16`",
          "**Buscamos la potencia**\n`2¹⁶ = 65 536 ⟹ n = 16`",
          "**We look for the power**\n`2¹⁶ = 65 536 ⟹ n = 16`"
         ]
        }
       ],
       "t": "steps"
      }
     ]
    }
   ]
  },
  {
   "id": "c-a2",
   "unit": "t1",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T1 · Activitats de les diapositives · Activitat 2",
    "T1 · Actividades de las diapositivas · Actividad 2",
    "U1 · Activities from the slides · Activity 2"
   ],
   "title": [
    "Activitat 2",
    "Actividad 2",
    "Activity 2"
   ],
   "q": [
    "**KB o KiB?** Calcula, compara i troba les diferències.",
    "**¿KB o KiB?** Calcula, compara y encuentra las diferencias.",
    "**KB or KiB?** Compute, compare and find the differences."
   ],
   "hint": [
    "Per comparar dues quantitats amb prefixos diferents, passa-les totes dues a bytes.",
    "Para comparar dos cantidades con prefijos distintos, pásalas las dos a bytes.",
    "To compare two amounts with different prefixes, convert both to bytes."
   ],
   "parts": [
    {
     "l": "1",
     "q": "5 KB → bytes",
     "a": {
      "k": "num",
      "v": 5000,
      "show": "5 000 B"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix decimal (SI): potències de 10.",
          "Prefijo decimal (SI): potencias de 10.",
          "Decimal prefix (SI): powers of 10."
         ],
         "x": [
          "**Passem a bytes**\n`5 KB = 5 · 10³ B = 5 000 B`",
          "**Pasamos a bytes**\n`5 KB = 5 · 10³ B = 5 000 B`",
          "**Convert to bytes**\n`5 KB = 5 · 10³ B = 5 000 B`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`5 KB = 5 000 B`",
          "**Resultado**\n`5 KB = 5 000 B`",
          "**Result**\n`5 KB = 5 000 B`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-a2-0",
       "cfg": {
        "x": 5,
        "a": "KB",
        "b": "B"
       }
      }
     }
    },
    {
     "l": "2",
     "q": "5 KiB → bytes",
     "a": {
      "k": "num",
      "v": 5120,
      "show": "5 120 B"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix binari (IEC): potències de 2.",
          "Prefijo binario (IEC): potencias de 2.",
          "Binary prefix (IEC): powers of 2."
         ],
         "x": [
          "**Passem a bytes**\n`5 KiB = 5 · 2¹⁰ B = 5 120 B`",
          "**Pasamos a bytes**\n`5 KiB = 5 · 2¹⁰ B = 5 120 B`",
          "**Convert to bytes**\n`5 KiB = 5 · 2¹⁰ B = 5 120 B`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`5 KiB = 5 120 B`",
          "**Resultado**\n`5 KiB = 5 120 B`",
          "**Result**\n`5 KiB = 5 120 B`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-a2-1",
       "cfg": {
        "x": 5,
        "a": "KiB",
        "b": "B"
       }
      }
     }
    },
    {
     "l": "3",
     "q": "10 000 bytes → KB",
     "a": {
      "k": "num",
      "v": 10,
      "show": "10 KB"
     },
     "sol": [
      {
       "steps": [
        {
         "why": "1 KB = 10³ B = 1 000 B.",
         "x": [
          "**Passem a KB**\n`10 000 B ÷ 10³ = 10 KB`\nPer què es divideix: passes a una unitat més gran, i la pregunta és «quantes vegades hi cap 1 KB?». És com passar minuts a hores: 30 min ÷ 60 = 0,5 h.",
          "**Pasamos a KB**\n`10 000 B ÷ 10³ = 10 KB`\nPor qué se divide: pasas a una unidad más grande, y la pregunta es «¿cuántas veces cabe 1 KB?». Es como pasar minutos a horas: 30 min ÷ 60 = 0,5 h.",
          "**Convert to KB**\n`10 000 B ÷ 10³ = 10 KB`\nWhy we divide: you are moving to a larger unit, and the question is “how many times does 1 KB fit?”. It is like converting minutes to hours: 30 min ÷ 60 = 0.5 h."
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`10 000 B = 10 KB`",
          "**Resultado**\n`10 000 B = 10 KB`",
          "**Result**\n`10 000 B = 10 KB`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-a2-2",
       "cfg": {
        "x": 10000,
        "a": "B",
        "b": "KB"
       }
      }
     }
    },
    {
     "l": "4",
     "q": "10 240 bytes → KiB",
     "a": {
      "k": "num",
      "v": 10,
      "show": "10 KiB"
     },
     "sol": [
      {
       "steps": [
        {
         "why": "1 KiB = 2¹⁰ B = 1 024 B.",
         "x": [
          "**Passem a KiB**\n`10 240 B ÷ 2¹⁰ = 10 KiB`\nPer què es divideix: passes a una unitat més gran, i la pregunta és «quantes vegades hi cap 1 KiB?». És com passar minuts a hores: 30 min ÷ 60 = 0,5 h.",
          "**Pasamos a KiB**\n`10 240 B ÷ 2¹⁰ = 10 KiB`\nPor qué se divide: pasas a una unidad más grande, y la pregunta es «¿cuántas veces cabe 1 KiB?». Es como pasar minutos a horas: 30 min ÷ 60 = 0,5 h.",
          "**Convert to KiB**\n`10 240 B ÷ 2¹⁰ = 10 KiB`\nWhy we divide: you are moving to a larger unit, and the question is “how many times does 1 KiB fit?”. It is like converting minutes to hours: 30 min ÷ 60 = 0.5 h."
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`10 240 B = 10 KiB`",
          "**Resultado**\n`10 240 B = 10 KiB`",
          "**Result**\n`10 240 B = 10 KiB`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-a2-3",
       "cfg": {
        "x": 10240,
        "a": "B",
        "b": "KiB"
       }
      }
     }
    },
    {
     "l": "5",
     "q": [
      "Quina és més gran: 1 000 KB o 1 000 KiB?",
      "¿Cuál es mayor: 1 000 KB o 1 000 KiB?",
      "Which is larger: 1 000 KB or 1 000 KiB?"
     ],
     "a": {
      "k": "mc",
      "v": 1,
      "opts": [
       "1 000 KB",
       "1 000 KiB",
       [
        "Són iguals",
        "Son iguales",
        "They are equal"
       ]
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "x": "**1 000 KB**\n`1 000 · 1 000 = 1 000 000 B`"
        },
        {
         "x": "**1 000 KiB**\n`1 000 · 1 024 = 1 024 000 B`"
        },
        {
         "done": true,
         "x": [
          "**Conclusió**\n`1 000 KiB > 1 000 KB`",
          "**Conclusión**\n`1 000 KiB > 1 000 KB`",
          "**Conclusion**\n`1 000 KiB > 1 000 KB`"
         ]
        }
       ],
       "t": "steps"
      }
     ]
    },
    {
     "l": "6",
     "q": [
      "Diferència en bytes entre 1 000 KiB i 1 000 KB",
      "Diferencia en bytes entre 1 000 KiB y 1 000 KB",
      "Difference in bytes between 1 000 KiB and 1 000 KB"
     ],
     "a": {
      "k": "int",
      "v": 24000,
      "show": "24 000 B"
     },
     "sol": [
      {
       "steps": [
        {
         "done": true,
         "why": [
          "Un 2,4 % més: la diferència creix amb cada prefix.",
          "Un 2,4 % más: la diferencia crece con cada prefijo.",
          "2.4 % more: the difference grows with each prefix."
         ],
         "x": "`1 024 000 − 1 000 000 = 24 000 B`"
        }
       ],
       "t": "steps"
      }
     ]
    },
    {
     "l": "R",
     "q": [
      "**Repte:** bytes de diferència entre 1 GB i 1 GiB",
      "**Reto:** bytes de diferencia entre 1 GB y 1 GiB",
      "**Challenge:** bytes of difference between 1 GB and 1 GiB"
     ],
     "a": {
      "k": "int",
      "v": 73741824,
      "show": "73 741 824 B"
     },
     "sol": [
      {
       "steps": [
        {
         "x": "**1 GB**\n`10⁹ = 1 000 000 000 B`"
        },
        {
         "x": "**1 GiB**\n`2³⁰ = 1 073 741 824 B`"
        },
        {
         "done": true,
         "why": [
          "1 GiB és un 7,37 % més gran que 1 GB. Per això un disc «de 500 GB» el sistema operatiu el mostra com ≈ 465 GiB.",
          "1 GiB es un 7,37 % mayor que 1 GB. Por eso un disco «de 500 GB» el sistema operativo lo muestra como ≈ 465 GiB.",
          "1 GiB is 7.37 % larger than 1 GB. That is why a “500 GB” disk is shown by the operating system as ≈ 465 GiB."
         ],
         "x": [
          "**Diferència**\n`73 741 824 B ≈ 70,3 MiB`",
          "**Diferencia**\n`73 741 824 B ≈ 70,3 MiB`",
          "**Difference**\n`73 741 824 B ≈ 70.3 MiB`"
         ]
        }
       ],
       "t": "steps"
      }
     ]
    }
   ]
  },
  {
   "id": "c-a3",
   "unit": "t1",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T1 · Activitats de les diapositives · Activitat 3",
    "T1 · Actividades de las diapositivas · Actividad 3",
    "U1 · Activities from the slides · Activity 3"
   ],
   "title": [
    "Activitat 3",
    "Actividad 3",
    "Activity 3"
   ],
   "q": [
    "**Quantitat d'informació.** Una memòria té una capacitat de **16 GiB**.",
    "**Cantidad de información.** Una memoria tiene una capacidad de **16 GiB**.",
    "**Amount of information.** A memory has a capacity of **16 GiB**."
   ],
   "hint": [
    "Treballa amb potències de 2: 16 GiB = 2⁴ · 2³⁰ = 2³⁴ B. Dividir entre 4 = 2² o entre 64 = 2⁶ és restar exponents.",
    "Trabaja con potencias de 2: 16 GiB = 2⁴ · 2³⁰ = 2³⁴ B. Dividir entre 4 = 2² o entre 64 = 2⁶ es restar exponentes.",
    "Work with powers of 2: 16 GiB = 2⁴ · 2³⁰ = 2³⁴ B. Dividing by 4 = 2² or by 64 = 2⁶ is subtracting exponents."
   ],
   "parts": [
    {
     "l": "1",
     "q": "16 GiB → bytes",
     "a": {
      "k": "num",
      "v": 17179869184,
      "show": "17 179 869 184 B"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix binari (IEC): potències de 2.",
          "Prefijo binario (IEC): potencias de 2.",
          "Binary prefix (IEC): powers of 2."
         ],
         "x": [
          "**Passem a bytes**\n`16 GiB = 16 · 2³⁰ B = 17 179 869 184 B`",
          "**Pasamos a bytes**\n`16 GiB = 16 · 2³⁰ B = 17 179 869 184 B`",
          "**Convert to bytes**\n`16 GiB = 16 · 2³⁰ B = 17 179 869 184 B`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`16 GiB = 17 179 869 184 B`",
          "**Resultado**\n`16 GiB = 17 179 869 184 B`",
          "**Result**\n`16 GiB = 17 179 869 184 B`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-a3-0",
       "cfg": {
        "x": 16,
        "a": "GiB",
        "b": "B"
       }
      }
     }
    },
    {
     "l": "2",
     "q": "16 GiB → bits",
     "a": {
      "k": "num",
      "v": 137438953472,
      "show": "137 438 953 472 b"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix binari (IEC): potències de 2.",
          "Prefijo binario (IEC): potencias de 2.",
          "Binary prefix (IEC): powers of 2."
         ],
         "x": [
          "**Passem a bytes**\n`16 GiB = 16 · 2³⁰ B = 17 179 869 184 B`",
          "**Pasamos a bytes**\n`16 GiB = 16 · 2³⁰ B = 17 179 869 184 B`",
          "**Convert to bytes**\n`16 GiB = 16 · 2³⁰ B = 17 179 869 184 B`"
         ]
        },
        {
         "x": "**De bytes a bits (× 8)**\n`17 179 869 184 B · 8 = 137 438 953 472 b`"
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`16 GiB = 137 438 953 472 b`",
          "**Resultado**\n`16 GiB = 137 438 953 472 b`",
          "**Result**\n`16 GiB = 137 438 953 472 b`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-a3-1",
       "cfg": {
        "x": 16,
        "a": "GiB",
        "b": "b"
       }
      }
     }
    },
    {
     "l": "3",
     "q": [
      "Quantes dades de **4 bytes** hi caben?",
      "¿Cuántos datos de **4 bytes** caben?",
      "How many **4-byte** data items fit?"
     ],
     "a": {
      "k": "int",
      "v": 4294967296,
      "show": "2³² = 4 294 967 296"
     },
     "sol": [
      {
       "steps": [
        {
         "done": true,
         "why": [
          "Uns 4 300 milions de dades.",
          "Unos 4 300 millones de datos.",
          "About 4 300 million data items."
         ],
         "x": "`2³⁴ B ÷ 2² B = 2³² = 4 294 967 296`"
        }
       ],
       "t": "steps"
      }
     ]
    },
    {
     "l": "4",
     "q": [
      "I si cada dada ocupa **64 bytes**?",
      "¿Y si cada dato ocupa **64 bytes**?",
      "And if each data item takes **64 bytes**?"
     ],
     "a": {
      "k": "int",
      "v": 268435456,
      "show": "2²⁸ = 268 435 456"
     },
     "sol": [
      {
       "steps": [
        {
         "done": true,
         "why": [
          "Dades 16 vegades més grans → 16 vegades menys dades.",
          "Datos 16 veces mayores → 16 veces menos datos.",
          "Items 16 times larger → 16 times fewer items."
         ],
         "x": "`2³⁴ B ÷ 2⁶ B = 2²⁸ = 268 435 456`"
        }
       ],
       "t": "steps"
      }
     ]
    }
   ]
  },
  {
   "id": "c-a4",
   "unit": "t1",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T1 · Activitats de les diapositives · Activitat",
    "T1 · Actividades de las diapositivas · Actividad",
    "U1 · Activities from the slides · Activity"
   ],
   "title": [
    "Activitat",
    "Actividad",
    "Activity"
   ],
   "q": [
    "**Velocitat de transferència.** Les velocitats sempre van en bits per segon i amb prefixos decimals.",
    "**Velocidad de transferencia.** Las velocidades siempre van en bits por segundo y con prefijos decimales.",
    "**Transfer rate.** Rates are always in bits per second and with decimal prefixes."
   ],
   "hint": [
    "t = mida ÷ velocitat, amb les dues quantitats en bits. «Mb/s» és megabits; «MB/s» és megabytes (× 8).",
    "t = tamaño ÷ velocidad, con las dos cantidades en bits. «Mb/s» es megabits; «MB/s» es megabytes (× 8).",
    "t = size ÷ rate, with both amounts in bits. “Mb/s” is megabits; “MB/s” is megabytes (× 8)."
   ],
   "parts": [
    {
     "l": "1a",
     "q": [
      "100 Mb/s: quants **bits** en 1 s?",
      "100 Mb/s: ¿cuántos **bits** en 1 s?",
      "100 Mb/s: how many **bits** in 1 s?"
     ],
     "a": {
      "k": "int",
      "v": 100000000,
      "show": "100 000 000 b"
     },
     "sol": [
      {
       "t": "steps",
       "steps": [
        {
         "x": "`100 Mb = 100 · 10⁶ = 100 000 000 b`",
         "done": true
        }
       ]
      }
     ]
    },
    {
     "l": "1b",
     "q": [
      "100 Mb/s: quants **bytes** en 1 s?",
      "100 Mb/s: ¿cuántos **bytes** en 1 s?",
      "100 Mb/s: how many **bytes** in 1 s?"
     ],
     "a": {
      "k": "num",
      "v": 12500000,
      "show": "12 500 000 B = 12,5 MB"
     },
     "sol": [
      {
       "steps": [
        {
         "done": true,
         "why": [
          "Una connexió «de 100 megues» baixa com a molt 12,5 MB cada segon.",
          "Una conexión «de 100 megas» baja como mucho 12,5 MB cada segundo.",
          "A “100 meg” connection downloads at most 12.5 MB each second."
         ],
         "x": "`100 000 000 ÷ 8 = 12 500 000 B = 12,5 MB`"
        }
       ],
       "t": "steps"
      }
     ]
    },
    {
     "l": "2",
     "q": [
      "Fitxer de 500 MB a 100 Mb/s (temps en s)",
      "Fichero de 500 MB a 100 Mb/s (tiempo en s)",
      "500 MB file at 100 Mb/s (time in s)"
     ],
     "a": {
      "k": "num",
      "v": 40,
      "show": "40 s"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Mida en bits**\n`500 MB = 500 · 10⁶ · 8 b = 4 000 000 000 b`",
          "**Tamaño en bits**\n`500 MB = 500 · 10⁶ · 8 b = 4 000 000 000 b`",
          "**Size in bits**\n`500 MB = 500 · 10⁶ · 8 b = 4 000 000 000 b`"
         ]
        },
        {
         "why": [
          "La velocitat de transferència sempre fa servir prefixos decimals.",
          "La velocidad de transferencia siempre usa prefijos decimales.",
          "Transfer rates always use decimal prefixes."
         ],
         "x": [
          "**Velocitat en b/s**\n`100 Mb/s = 100 · 10⁶ b/s = 100 000 000 b/s`",
          "**Velocidad en b/s**\n`100 Mb/s = 100 · 10⁶ b/s = 100 000 000 b/s`",
          "**Rate in b/s**\n`100 Mb/s = 100 · 10⁶ b/s = 100 000 000 b/s`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Temps = mida ÷ velocitat**\n`t = 4 000 000 000 b ÷ 100 000 000 b/s = 40 s`",
          "**Tiempo = tamaño ÷ velocidad**\n`t = 4 000 000 000 b ÷ 100 000 000 b/s = 40 s`",
          "**Time = size ÷ rate**\n`t = 4 000 000 000 b ÷ 100 000 000 b/s = 40 s`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "transfer",
      "props": {
       "id": "exl-a4-2",
       "cfg": {
        "size": 500,
        "su": "MB",
        "v": 100,
        "vu": "Mb"
       }
      }
     }
    },
    {
     "l": "3a",
     "q": "1 Gb/s en **MB/s**",
     "a": {
      "k": "num",
      "v": 125,
      "show": "125 MB/s"
     },
     "sol": [
      {
       "t": "steps",
       "steps": [
        {
         "x": "`1 Gb/s = 1 000 Mb/s`"
        },
        {
         "x": "`1 000 ÷ 8 = 125 MB/s`",
         "done": true
        }
       ]
      }
     ]
    },
    {
     "l": "3b",
     "q": [
      "Fitxer de 2 GB a 1 Gb/s (temps en s)",
      "Fichero de 2 GB a 1 Gb/s (tiempo en s)",
      "2 GB file at 1 Gb/s (time in s)"
     ],
     "a": {
      "k": "num",
      "v": 16,
      "show": "16 s"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Mida en bits**\n`2 GB = 2 · 10⁹ · 8 b = 16 000 000 000 b`",
          "**Tamaño en bits**\n`2 GB = 2 · 10⁹ · 8 b = 16 000 000 000 b`",
          "**Size in bits**\n`2 GB = 2 · 10⁹ · 8 b = 16 000 000 000 b`"
         ]
        },
        {
         "why": [
          "La velocitat de transferència sempre fa servir prefixos decimals.",
          "La velocidad de transferencia siempre usa prefijos decimales.",
          "Transfer rates always use decimal prefixes."
         ],
         "x": [
          "**Velocitat en b/s**\n`1 Gb/s = 1 · 10⁹ b/s = 1 000 000 000 b/s`",
          "**Velocidad en b/s**\n`1 Gb/s = 1 · 10⁹ b/s = 1 000 000 000 b/s`",
          "**Rate in b/s**\n`1 Gb/s = 1 · 10⁹ b/s = 1 000 000 000 b/s`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Temps = mida ÷ velocitat**\n`t = 16 000 000 000 b ÷ 1 000 000 000 b/s = 16 s`",
          "**Tiempo = tamaño ÷ velocidad**\n`t = 16 000 000 000 b ÷ 1 000 000 000 b/s = 16 s`",
          "**Time = size ÷ rate**\n`t = 16 000 000 000 b ÷ 1 000 000 000 b/s = 16 s`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "transfer",
      "props": {
       "id": "exl-a4-4",
       "cfg": {
        "size": 2,
        "su": "GB",
        "v": 1,
        "vu": "Gb"
       }
      }
     }
    },
    {
     "l": "R",
     "q": [
      "**Repte:** connexió de 600 Mb/s i l'aplicació mostra 60 MB/s. És compatible?",
      "**Reto:** conexión de 600 Mb/s y la aplicación muestra 60 MB/s. ¿Es compatible?",
      "**Challenge:** a 600 Mb/s connection and the app shows 60 MB/s. Is it consistent?"
     ],
     "a": {
      "k": "mc",
      "v": 0,
      "opts": [
       ["Sí", "Sí", "Yes"],
       ["No", "No", "No"]
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Màxim de la connexió en bytes**\n`600 Mb/s ÷ 8 = 75 MB/s`",
          "**Máximo de la conexión en bytes**\n`600 Mb/s ÷ 8 = 75 MB/s`",
          "**Maximum of the connection in bytes**\n`600 Mb/s ÷ 8 = 75 MB/s`"
         ]
        },
        {
         "done": true,
         "why": [
          "Sí: una mica per sota del màxim teòric, pels protocols, el Wi-Fi o el servidor. El «parany» és confondre Mb amb MB.",
          "Sí: algo por debajo del máximo teórico, por los protocolos, el Wi-Fi o el servidor. La «trampa» es confundir Mb con MB.",
          "Yes: somewhat below the theoretical maximum, because of protocols, Wi-Fi or the server. The “trap” is confusing Mb with MB."
         ],
         "x": [
          "**Comparem**\n`60 MB/s ≤ 75 MB/s  (60 MB/s = 480 Mb/s, el 80 %)`",
          "**Comparamos**\n`60 MB/s ≤ 75 MB/s  (60 MB/s = 480 Mb/s, el 80 %)`",
          "**We compare**\n`60 MB/s ≤ 75 MB/s  (60 MB/s = 480 Mb/s, 80 %)`"
         ]
        }
       ],
       "t": "steps"
      }
     ]
    }
   ]
  },
  {
   "id": "c-a5",
   "unit": "t1",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T1 · Activitats de les diapositives · Activitat",
    "T1 · Actividades de las diapositivas · Actividad",
    "U1 · Activities from the slides · Activity"
   ],
   "title": [
    "Activitat",
    "Actividad",
    "Activity"
   ],
   "q": [
    "**Classifiquem llenguatges** segons el nivell i el paradigma principal.",
    "**Clasificamos lenguajes** según el nivel y el paradigma principal.",
    "**We classify languages** by level and main paradigm."
   ],
   "hint": [
    "Nivell: hi ha correspondència d'una a una amb les instruccions del processador? Paradigma: el programa diu **com** (imperatiu) o **què** (declaratiu)?",
    "Nivel: ¿hay correspondencia de una a una con las instrucciones del procesador? Paradigma: ¿el programa dice **cómo** (imperativo) o **qué** (declarativo)?",
    "Level: is there a one-to-one correspondence with the processor's instructions? Paradigm: does the program say **how** (imperative) or **what** (declarative)?"
   ],
   "parts": [
    {
     "l": "1",
     "q": "**C**",
     "a": {
      "k": "mc",
      "v": 1,
      "opts": [
       [
        "Baix nivell · imperatiu",
        "Bajo nivel · imperativo",
        "Low level · imperative"
       ],
       [
        "Alt nivell · imperatiu",
        "Alto nivel · imperativo",
        "High level · imperative"
       ],
       [
        "Alt nivell · declaratiu",
        "Alto nivel · declarativo",
        "High level · declarative"
       ],
       [
        "Baix nivell · declaratiu",
        "Bajo nivel · declarativo",
        "Low level · declarative"
       ]
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "done": true,
         "why": [
          "Sistemes operatius i programari de sistemes. És el més proper al hardware dels d'alt nivell, però té variables, funcions i no depèn d'un processador concret.",
          "Sistemas operativos y software de sistemas. Es el más cercano al hardware de los de alto nivel, pero tiene variables, funciones y no depende de un procesador concreto.",
          "Operating systems and systems software. It is the closest to the hardware of the high-level languages, but it has variables and functions and does not depend on a specific processor."
         ],
         "x": [
          "**Alt nivell · imperatiu**",
          "**Alto nivel · imperativo**",
          "**High level · imperative**"
         ]
        }
       ],
       "t": "steps"
      }
     ]
    },
    {
     "l": "2",
     "q": "**Python**",
     "a": {
      "k": "mc",
      "v": 1,
      "opts": [
       [
        "Baix nivell · imperatiu",
        "Bajo nivel · imperativo",
        "Low level · imperative"
       ],
       [
        "Alt nivell · imperatiu",
        "Alto nivel · imperativo",
        "High level · imperative"
       ],
       [
        "Alt nivell · declaratiu",
        "Alto nivel · declarativo",
        "High level · declarative"
       ],
       [
        "Baix nivell · declaratiu",
        "Bajo nivel · declarativo",
        "Low level · declarative"
       ]
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "done": true,
         "why": [
          "Aplicacions, automatització, ciència de dades i IA. Escrius ordres pas a pas (imperatiu), tot i que admet altres estils.",
          "Aplicaciones, automatización, ciencia de datos e IA. Escribes órdenes paso a paso (imperativo), aunque admite otros estilos.",
          "Applications, automation, data science and AI. You write commands step by step (imperative), although it allows other styles."
         ],
         "x": [
          "**Alt nivell · imperatiu**",
          "**Alto nivel · imperativo**",
          "**High level · imperative**"
         ]
        }
       ],
       "t": "steps"
      }
     ]
    },
    {
     "l": "3",
     "q": "**Assembly**",
     "a": {
      "k": "mc",
      "v": 0,
      "opts": [
       [
        "Baix nivell · imperatiu",
        "Bajo nivel · imperativo",
        "Low level · imperative"
       ],
       [
        "Alt nivell · imperatiu",
        "Alto nivel · imperativo",
        "High level · imperative"
       ],
       [
        "Alt nivell · declaratiu",
        "Alto nivel · declarativo",
        "High level · declarative"
       ],
       [
        "Baix nivell · declaratiu",
        "Bajo nivel · declarativo",
        "Low level · declarative"
       ]
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "done": true,
         "why": [
          "Programació propera al hardware: cada mnemònic (MOV, ADD…) correspon a una instrucció màquina. Per això és de baix nivell.",
          "Programación cercana al hardware: cada mnemónico (MOV, ADD…) corresponde a una instrucción máquina. Por eso es de bajo nivel.",
          "Programming close to the hardware: each mnemonic (MOV, ADD…) corresponds to a machine instruction. That is why it is low-level."
         ],
         "x": [
          "**Baix nivell · imperatiu**",
          "**Bajo nivel · imperativo**",
          "**Low level · imperative**"
         ]
        }
       ],
       "t": "steps"
      }
     ]
    },
    {
     "l": "4",
     "q": "**SQL**",
     "a": {
      "k": "mc",
      "v": 2,
      "opts": [
       [
        "Baix nivell · imperatiu",
        "Bajo nivel · imperativo",
        "Low level · imperative"
       ],
       [
        "Alt nivell · imperatiu",
        "Alto nivel · imperativo",
        "High level · imperative"
       ],
       [
        "Alt nivell · declaratiu",
        "Alto nivel · declarativo",
        "High level · declarative"
       ],
       [
        "Baix nivell · declaratiu",
        "Bajo nivel · declarativo",
        "Low level · declarative"
       ]
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "done": true,
         "why": [
          "Consulta de bases de dades. Dius QUÈ vols (SELECT … WHERE nota > 8), no com buscar-ho: declaratiu.",
          "Consulta de bases de datos. Dices QUÉ quieres (SELECT … WHERE nota > 8), no cómo buscarlo: declarativo.",
          "Database queries. You say WHAT you want (SELECT … WHERE grade > 8), not how to look for it: declarative."
         ],
         "x": [
          "**Alt nivell · declaratiu**",
          "**Alto nivel · declarativo**",
          "**High level · declarative**"
         ]
        }
       ],
       "t": "steps"
      }
     ]
    },
    {
     "l": "5",
     "q": "**Prolog**",
     "a": {
      "k": "mc",
      "v": 2,
      "opts": [
       [
        "Baix nivell · imperatiu",
        "Bajo nivel · imperativo",
        "Low level · imperative"
       ],
       [
        "Alt nivell · imperatiu",
        "Alto nivel · imperativo",
        "High level · imperative"
       ],
       [
        "Alt nivell · declaratiu",
        "Alto nivel · declarativo",
        "High level · declarative"
       ],
       [
        "Baix nivell · declaratiu",
        "Bajo nivel · declarativo",
        "Low level · declarative"
       ]
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "done": true,
         "why": [
          "Programació lògica: descrius fets i regles, i el sistema dedueix les respostes. Declaratiu.",
          "Programación lógica: describes hechos y reglas, y el sistema deduce las respuestas. Declarativo.",
          "Logic programming: you describe facts and rules, and the system deduces the answers. Declarative."
         ],
         "x": [
          "**Alt nivell · declaratiu**",
          "**Alto nivel · declarativo**",
          "**High level · declarative**"
         ]
        }
       ],
       "t": "steps"
      }
     ]
    }
   ]
  },
  {
   "id": "c-u15",
   "unit": "t1",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T1 · Full d'activitats: unitats i transferència · 1–15",
    "T1 · Hoja de actividades: unidades y transferencia · 1–15",
    "U1 · Activity sheet: units and transfer · 1–15"
   ],
   "title": "1–15",
   "q": [
    "Converteix les quantitats següents.",
    "Convierte las cantidades siguientes.",
    "Convert the following amounts."
   ],
   "hint": [
    "Passa sempre per la unitat base (b o B). Ordre segur: prefix → base, bits ↔ bytes, base → prefix. 8 000 Kb → KiB té les tres coses alhora.",
    "Pasa siempre por la unidad base (b o B). Orden seguro: prefijo → base, bits ↔ bytes, base → prefijo. 8 000 Kb → KiB tiene las tres cosas a la vez.",
    "Always go through the base unit (b or B). Safe order: prefix → base, bits ↔ bytes, base → prefix. 8 000 Kb → KiB has all three at once."
   ],
   "note": [
    "Dona els resultats exactes quan ho siguin; si no, amb 3 o 4 decimals. La correcció accepta coma o punt decimal.",
    "Da los resultados exactos cuando lo sean; si no, con 3 o 4 decimales. La corrección acepta coma o punto decimal.",
    "Give exact results when they are exact; otherwise, with 3 or 4 decimals. Marking accepts a decimal comma or point."
   ],
   "parts": [
    {
     "l": "1",
     "q": "64 bits → bytes",
     "a": {
      "k": "num",
      "v": 8,
      "show": "8 B"
     },
     "sol": [
      {
       "steps": [
        {
         "x": "**De bits a bytes (÷ 8)**\n`64 b ÷ 8 = 8 B`"
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`64 b = 8 B`",
          "**Resultado**\n`64 b = 8 B`",
          "**Result**\n`64 b = 8 B`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-u15-0",
       "cfg": {
        "x": 64,
        "a": "b",
        "b": "B"
       }
      }
     }
    },
    {
     "l": "2",
     "q": "512 bits → bytes",
     "a": {
      "k": "num",
      "v": 64,
      "show": "64 B"
     },
     "sol": [
      {
       "steps": [
        {
         "x": "**De bits a bytes (÷ 8)**\n`512 b ÷ 8 = 64 B`"
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`512 b = 64 B`",
          "**Resultado**\n`512 b = 64 B`",
          "**Result**\n`512 b = 64 B`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-u15-1",
       "cfg": {
        "x": 512,
        "a": "b",
        "b": "B"
       }
      }
     }
    },
    {
     "l": "3",
     "q": "2 048 bytes → bits",
     "a": {
      "k": "num",
      "v": 16384,
      "show": "16 384 b"
     },
     "sol": [
      {
       "steps": [
        {
         "x": "**De bytes a bits (× 8)**\n`2 048 B · 8 = 16 384 b`"
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`2 048 B = 16 384 b`",
          "**Resultado**\n`2 048 B = 16 384 b`",
          "**Result**\n`2 048 B = 16 384 b`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-u15-2",
       "cfg": {
        "x": 2048,
        "a": "B",
        "b": "b"
       }
      }
     }
    },
    {
     "l": "4",
     "q": "5 000 bytes → KB",
     "a": {
      "k": "num",
      "v": 5,
      "show": "5 KB"
     },
     "sol": [
      {
       "steps": [
        {
         "why": "1 KB = 10³ B = 1 000 B.",
         "x": [
          "**Passem a KB**\n`5 000 B ÷ 10³ = 5 KB`\nPer què es divideix: passes a una unitat més gran, i la pregunta és «quantes vegades hi cap 1 KB?». És com passar minuts a hores: 30 min ÷ 60 = 0,5 h.",
          "**Pasamos a KB**\n`5 000 B ÷ 10³ = 5 KB`\nPor qué se divide: pasas a una unidad más grande, y la pregunta es «¿cuántas veces cabe 1 KB?». Es como pasar minutos a horas: 30 min ÷ 60 = 0,5 h.",
          "**Convert to KB**\n`5 000 B ÷ 10³ = 5 KB`\nWhy we divide: you are moving to a larger unit, and the question is “how many times does 1 KB fit?”. It is like converting minutes to hours: 30 min ÷ 60 = 0.5 h."
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`5 000 B = 5 KB`",
          "**Resultado**\n`5 000 B = 5 KB`",
          "**Result**\n`5 000 B = 5 KB`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-u15-3",
       "cfg": {
        "x": 5000,
        "a": "B",
        "b": "KB"
       }
      }
     }
    },
    {
     "l": "5",
     "q": "3 KB → bytes",
     "a": {
      "k": "num",
      "v": 3000,
      "show": "3 000 B"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix decimal (SI): potències de 10.",
          "Prefijo decimal (SI): potencias de 10.",
          "Decimal prefix (SI): powers of 10."
         ],
         "x": [
          "**Passem a bytes**\n`3 KB = 3 · 10³ B = 3 000 B`",
          "**Pasamos a bytes**\n`3 KB = 3 · 10³ B = 3 000 B`",
          "**Convert to bytes**\n`3 KB = 3 · 10³ B = 3 000 B`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`3 KB = 3 000 B`",
          "**Resultado**\n`3 KB = 3 000 B`",
          "**Result**\n`3 KB = 3 000 B`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-u15-4",
       "cfg": {
        "x": 3,
        "a": "KB",
        "b": "B"
       }
      }
     }
    },
    {
     "l": "6",
     "q": "4 096 bytes → KiB",
     "a": {
      "k": "num",
      "v": 4,
      "show": "4 KiB"
     },
     "sol": [
      {
       "steps": [
        {
         "why": "1 KiB = 2¹⁰ B = 1 024 B.",
         "x": [
          "**Passem a KiB**\n`4 096 B ÷ 2¹⁰ = 4 KiB`\nPer què es divideix: passes a una unitat més gran, i la pregunta és «quantes vegades hi cap 1 KiB?». És com passar minuts a hores: 30 min ÷ 60 = 0,5 h.",
          "**Pasamos a KiB**\n`4 096 B ÷ 2¹⁰ = 4 KiB`\nPor qué se divide: pasas a una unidad más grande, y la pregunta es «¿cuántas veces cabe 1 KiB?». Es como pasar minutos a horas: 30 min ÷ 60 = 0,5 h.",
          "**Convert to KiB**\n`4 096 B ÷ 2¹⁰ = 4 KiB`\nWhy we divide: you are moving to a larger unit, and the question is “how many times does 1 KiB fit?”. It is like converting minutes to hours: 30 min ÷ 60 = 0.5 h."
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`4 096 B = 4 KiB`",
          "**Resultado**\n`4 096 B = 4 KiB`",
          "**Result**\n`4 096 B = 4 KiB`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-u15-5",
       "cfg": {
        "x": 4096,
        "a": "B",
        "b": "KiB"
       }
      }
     }
    },
    {
     "l": "7",
     "q": "8 KiB → bytes",
     "a": {
      "k": "num",
      "v": 8192,
      "show": "8 192 B"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix binari (IEC): potències de 2.",
          "Prefijo binario (IEC): potencias de 2.",
          "Binary prefix (IEC): powers of 2."
         ],
         "x": [
          "**Passem a bytes**\n`8 KiB = 8 · 2¹⁰ B = 8 192 B`",
          "**Pasamos a bytes**\n`8 KiB = 8 · 2¹⁰ B = 8 192 B`",
          "**Convert to bytes**\n`8 KiB = 8 · 2¹⁰ B = 8 192 B`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`8 KiB = 8 192 B`",
          "**Resultado**\n`8 KiB = 8 192 B`",
          "**Result**\n`8 KiB = 8 192 B`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-u15-6",
       "cfg": {
        "x": 8,
        "a": "KiB",
        "b": "B"
       }
      }
     }
    },
    {
     "l": "8",
     "q": "16 KB → KiB",
     "a": {
      "k": "num",
      "v": 15.625,
      "show": "15,625 KiB"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix decimal (SI): potències de 10.",
          "Prefijo decimal (SI): potencias de 10.",
          "Decimal prefix (SI): powers of 10."
         ],
         "x": [
          "**Passem a bytes**\n`16 KB = 16 · 10³ B = 16 000 B`",
          "**Pasamos a bytes**\n`16 KB = 16 · 10³ B = 16 000 B`",
          "**Convert to bytes**\n`16 KB = 16 · 10³ B = 16 000 B`"
         ]
        },
        {
         "why": "1 KiB = 2¹⁰ B = 1 024 B.",
         "x": [
          "**Passem a KiB**\n`16 000 B ÷ 2¹⁰ = 15,625 KiB`\nPer què es divideix: passes a una unitat més gran, i la pregunta és «quantes vegades hi cap 1 KiB?». És com passar minuts a hores: 30 min ÷ 60 = 0,5 h.",
          "**Pasamos a KiB**\n`16 000 B ÷ 2¹⁰ = 15,625 KiB`\nPor qué se divide: pasas a una unidad más grande, y la pregunta es «¿cuántas veces cabe 1 KiB?». Es como pasar minutos a horas: 30 min ÷ 60 = 0,5 h.",
          "**Convert to KiB**\n`16 000 B ÷ 2¹⁰ = 15.625 KiB`\nWhy we divide: you are moving to a larger unit, and the question is “how many times does 1 KiB fit?”. It is like converting minutes to hours: 30 min ÷ 60 = 0.5 h."
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`16 KB = 15,625 KiB`",
          "**Resultado**\n`16 KB = 15,625 KiB`",
          "**Result**\n`16 KB = 15.625 KiB`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-u15-7",
       "cfg": {
        "x": 16,
        "a": "KB",
        "b": "KiB"
       }
      }
     }
    },
    {
     "l": "9",
     "q": "16 KiB → KB",
     "a": {
      "k": "num",
      "v": 16.384,
      "show": "16,384 KB"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix binari (IEC): potències de 2.",
          "Prefijo binario (IEC): potencias de 2.",
          "Binary prefix (IEC): powers of 2."
         ],
         "x": [
          "**Passem a bytes**\n`16 KiB = 16 · 2¹⁰ B = 16 384 B`",
          "**Pasamos a bytes**\n`16 KiB = 16 · 2¹⁰ B = 16 384 B`",
          "**Convert to bytes**\n`16 KiB = 16 · 2¹⁰ B = 16 384 B`"
         ]
        },
        {
         "why": "1 KB = 10³ B = 1 000 B.",
         "x": [
          "**Passem a KB**\n`16 384 B ÷ 10³ = 16,384 KB`\nPer què es divideix: passes a una unitat més gran, i la pregunta és «quantes vegades hi cap 1 KB?». És com passar minuts a hores: 30 min ÷ 60 = 0,5 h.",
          "**Pasamos a KB**\n`16 384 B ÷ 10³ = 16,384 KB`\nPor qué se divide: pasas a una unidad más grande, y la pregunta es «¿cuántas veces cabe 1 KB?». Es como pasar minutos a horas: 30 min ÷ 60 = 0,5 h.",
          "**Convert to KB**\n`16 384 B ÷ 10³ = 16.384 KB`\nWhy we divide: you are moving to a larger unit, and the question is “how many times does 1 KB fit?”. It is like converting minutes to hours: 30 min ÷ 60 = 0.5 h."
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`16 KiB = 16,384 KB`",
          "**Resultado**\n`16 KiB = 16,384 KB`",
          "**Result**\n`16 KiB = 16.384 KB`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-u15-8",
       "cfg": {
        "x": 16,
        "a": "KiB",
        "b": "KB"
       }
      }
     }
    },
    {
     "l": "10",
     "q": "8 000 Kb → KiB",
     "a": {
      "k": "num",
      "v": 976.5625,
      "show": "976,5625 KiB"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix decimal (SI): potències de 10.",
          "Prefijo decimal (SI): potencias de 10.",
          "Decimal prefix (SI): powers of 10."
         ],
         "x": [
          "**Passem a bits**\n`8 000 Kb = 8 000 · 10³ b = 8 000 000 b`",
          "**Pasamos a bits**\n`8 000 Kb = 8 000 · 10³ b = 8 000 000 b`",
          "**Convert to bits**\n`8 000 Kb = 8 000 · 10³ b = 8 000 000 b`"
         ]
        },
        {
         "x": "**De bits a bytes (÷ 8)**\n`8 000 000 b ÷ 8 = 1 000 000 B`"
        },
        {
         "why": "1 KiB = 2¹⁰ B = 1 024 B.",
         "x": [
          "**Passem a KiB**\n`1 000 000 B ÷ 2¹⁰ = 976,5625 KiB`\nPer què es divideix: passes a una unitat més gran, i la pregunta és «quantes vegades hi cap 1 KiB?». És com passar minuts a hores: 30 min ÷ 60 = 0,5 h.",
          "**Pasamos a KiB**\n`1 000 000 B ÷ 2¹⁰ = 976,5625 KiB`\nPor qué se divide: pasas a una unidad más grande, y la pregunta es «¿cuántas veces cabe 1 KiB?». Es como pasar minutos a horas: 30 min ÷ 60 = 0,5 h.",
          "**Convert to KiB**\n`1 000 000 B ÷ 2¹⁰ = 976.5625 KiB`\nWhy we divide: you are moving to a larger unit, and the question is “how many times does 1 KiB fit?”. It is like converting minutes to hours: 30 min ÷ 60 = 0.5 h."
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`8 000 Kb = 976,5625 KiB`",
          "**Resultado**\n`8 000 Kb = 976,5625 KiB`",
          "**Result**\n`8 000 Kb = 976.5625 KiB`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-u15-9",
       "cfg": {
        "x": 8000,
        "a": "Kb",
        "b": "KiB"
       }
      }
     }
    },
    {
     "l": "11",
     "q": "8 192 Kb → KiB",
     "a": {
      "k": "num",
      "v": 1000,
      "show": "1 000 KiB"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix decimal (SI): potències de 10.",
          "Prefijo decimal (SI): potencias de 10.",
          "Decimal prefix (SI): powers of 10."
         ],
         "x": [
          "**Passem a bits**\n`8 192 Kb = 8 192 · 10³ b = 8 192 000 b`",
          "**Pasamos a bits**\n`8 192 Kb = 8 192 · 10³ b = 8 192 000 b`",
          "**Convert to bits**\n`8 192 Kb = 8 192 · 10³ b = 8 192 000 b`"
         ]
        },
        {
         "x": "**De bits a bytes (÷ 8)**\n`8 192 000 b ÷ 8 = 1 024 000 B`"
        },
        {
         "why": "1 KiB = 2¹⁰ B = 1 024 B.",
         "x": [
          "**Passem a KiB**\n`1 024 000 B ÷ 2¹⁰ = 1 000 KiB`\nPer què es divideix: passes a una unitat més gran, i la pregunta és «quantes vegades hi cap 1 KiB?». És com passar minuts a hores: 30 min ÷ 60 = 0,5 h.",
          "**Pasamos a KiB**\n`1 024 000 B ÷ 2¹⁰ = 1 000 KiB`\nPor qué se divide: pasas a una unidad más grande, y la pregunta es «¿cuántas veces cabe 1 KiB?». Es como pasar minutos a horas: 30 min ÷ 60 = 0,5 h.",
          "**Convert to KiB**\n`1 024 000 B ÷ 2¹⁰ = 1 000 KiB`\nWhy we divide: you are moving to a larger unit, and the question is “how many times does 1 KiB fit?”. It is like converting minutes to hours: 30 min ÷ 60 = 0.5 h."
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`8 192 Kb = 1 000 KiB`",
          "**Resultado**\n`8 192 Kb = 1 000 KiB`",
          "**Result**\n`8 192 Kb = 1 000 KiB`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-u15-10",
       "cfg": {
        "x": 8192,
        "a": "Kb",
        "b": "KiB"
       }
      }
     }
    },
    {
     "l": "12",
     "q": "2 MB → MiB",
     "a": {
      "k": "num",
      "v": 1.9073486328125,
      "show": "≈ 1,9073 MiB"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix decimal (SI): potències de 10.",
          "Prefijo decimal (SI): potencias de 10.",
          "Decimal prefix (SI): powers of 10."
         ],
         "x": [
          "**Passem a bytes**\n`2 MB = 2 · 10⁶ B = 2 000 000 B`",
          "**Pasamos a bytes**\n`2 MB = 2 · 10⁶ B = 2 000 000 B`",
          "**Convert to bytes**\n`2 MB = 2 · 10⁶ B = 2 000 000 B`"
         ]
        },
        {
         "table": {
          "head": [
           [
            "Divisió",
            "División",
            "Division"
           ],
           [
            "Compte",
            "Cuenta",
            "Calculation"
           ],
           [
            "Resultat",
            "Resultado",
            "Result"
           ]
          ],
          "rows": [
           [
            "1",
            "2 000 000 B ÷ 1024",
            "≈ 1 953,13 KiB"
           ],
           [
            "2",
            "1 953,125 KiB ÷ 1024",
            "≈ 1,9073 MiB"
           ]
          ]
         },
         "why": "1 MiB = 2²⁰ B = 1 048 576 B.",
         "x": [
          "**Passem a MiB**\n`2 000 000 B ÷ 2²⁰ ≈ 1,907349 MiB`\nPer què es divideix: passes a una unitat més gran, i la pregunta és «quantes vegades hi cap 1 MiB?». És com passar minuts a hores: 30 min ÷ 60 = 0,5 h. Dividir per 2²⁰ és el mateix que dividir per 1024 dues vegades, una per prefix:",
          "**Pasamos a MiB**\n`2 000 000 B ÷ 2²⁰ ≈ 1,907349 MiB`\nPor qué se divide: pasas a una unidad más grande, y la pregunta es «¿cuántas veces cabe 1 MiB?». Es como pasar minutos a horas: 30 min ÷ 60 = 0,5 h. Dividir por 2²⁰ es lo mismo que dividir por 1024 dos veces, una por prefijo:",
          "**Convert to MiB**\n`2 000 000 B ÷ 2²⁰ ≈ 1.907349 MiB`\nWhy we divide: you are moving to a larger unit, and the question is “how many times does 1 MiB fit?”. It is like converting minutes to hours: 30 min ÷ 60 = 0.5 h. Dividing by 2²⁰ is the same as dividing by 1024 twice, once per prefix:"
         ]
        },
        {
         "done": true,
         "why": [
          "El mateix número del pas anterior, arrodonit a 4 decimals.",
          "El mismo número del paso anterior, redondeado a 4 decimales.",
          "The same number as in the previous step, rounded to 4 decimals."
         ],
         "x": [
          "**Resultat**\n`2 MB ≈ 1,9073 MiB`",
          "**Resultado**\n`2 MB ≈ 1,9073 MiB`",
          "**Result**\n`2 MB ≈ 1.9073 MiB`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-u15-11",
       "cfg": {
        "x": 2,
        "a": "MB",
        "b": "MiB"
       }
      }
     }
    },
    {
     "l": "13",
     "q": "2 MiB → MB",
     "a": {
      "k": "num",
      "v": 2.097152,
      "show": "2,097152 MB"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix binari (IEC): potències de 2.",
          "Prefijo binario (IEC): potencias de 2.",
          "Binary prefix (IEC): powers of 2."
         ],
         "x": [
          "**Passem a bytes**\n`2 MiB = 2 · 2²⁰ B = 2 097 152 B`",
          "**Pasamos a bytes**\n`2 MiB = 2 · 2²⁰ B = 2 097 152 B`",
          "**Convert to bytes**\n`2 MiB = 2 · 2²⁰ B = 2 097 152 B`"
         ]
        },
        {
         "table": {
          "head": [
           [
            "Divisió",
            "División",
            "Division"
           ],
           [
            "Compte",
            "Cuenta",
            "Calculation"
           ],
           [
            "Resultat",
            "Resultado",
            "Result"
           ]
          ],
          "rows": [
           [
            "1",
            "2 097 152 B ÷ 1000",
            "≈ 2 097,15 KB"
           ],
           [
            "2",
            "2 097,152 KB ÷ 1000",
            "≈ 2,0972 MB"
           ]
          ]
         },
         "why": "1 MB = 10⁶ B = 1 000 000 B.",
         "x": [
          "**Passem a MB**\n`2 097 152 B ÷ 10⁶ = 2,097152 MB`\nPer què es divideix: passes a una unitat més gran, i la pregunta és «quantes vegades hi cap 1 MB?». És com passar minuts a hores: 30 min ÷ 60 = 0,5 h. Dividir per 10⁶ és el mateix que dividir per 1000 dues vegades, una per prefix:",
          "**Pasamos a MB**\n`2 097 152 B ÷ 10⁶ = 2,097152 MB`\nPor qué se divide: pasas a una unidad más grande, y la pregunta es «¿cuántas veces cabe 1 MB?». Es como pasar minutos a horas: 30 min ÷ 60 = 0,5 h. Dividir por 10⁶ es lo mismo que dividir por 1000 dos veces, una por prefijo:",
          "**Convert to MB**\n`2 097 152 B ÷ 10⁶ = 2.097152 MB`\nWhy we divide: you are moving to a larger unit, and the question is “how many times does 1 MB fit?”. It is like converting minutes to hours: 30 min ÷ 60 = 0.5 h. Dividing by 10⁶ is the same as dividing by 1000 twice, once per prefix:"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`2 MiB = 2,097152 MB`",
          "**Resultado**\n`2 MiB = 2,097152 MB`",
          "**Result**\n`2 MiB = 2.097152 MB`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-u15-12",
       "cfg": {
        "x": 2,
        "a": "MiB",
        "b": "MB"
       }
      }
     }
    },
    {
     "l": "14",
     "q": "5 MB → bytes",
     "a": {
      "k": "num",
      "v": 5000000,
      "show": "5 000 000 B"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix decimal (SI): potències de 10.",
          "Prefijo decimal (SI): potencias de 10.",
          "Decimal prefix (SI): powers of 10."
         ],
         "x": [
          "**Passem a bytes**\n`5 MB = 5 · 10⁶ B = 5 000 000 B`",
          "**Pasamos a bytes**\n`5 MB = 5 · 10⁶ B = 5 000 000 B`",
          "**Convert to bytes**\n`5 MB = 5 · 10⁶ B = 5 000 000 B`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`5 MB = 5 000 000 B`",
          "**Resultado**\n`5 MB = 5 000 000 B`",
          "**Result**\n`5 MB = 5 000 000 B`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-u15-13",
       "cfg": {
        "x": 5,
        "a": "MB",
        "b": "B"
       }
      }
     }
    },
    {
     "l": "15",
     "q": "5 MiB → bytes",
     "a": {
      "k": "num",
      "v": 5242880,
      "show": "5 242 880 B"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix binari (IEC): potències de 2.",
          "Prefijo binario (IEC): potencias de 2.",
          "Binary prefix (IEC): powers of 2."
         ],
         "x": [
          "**Passem a bytes**\n`5 MiB = 5 · 2²⁰ B = 5 242 880 B`",
          "**Pasamos a bytes**\n`5 MiB = 5 · 2²⁰ B = 5 242 880 B`",
          "**Convert to bytes**\n`5 MiB = 5 · 2²⁰ B = 5 242 880 B`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`5 MiB = 5 242 880 B`",
          "**Resultado**\n`5 MiB = 5 242 880 B`",
          "**Result**\n`5 MiB = 5 242 880 B`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-u15-14",
       "cfg": {
        "x": 5,
        "a": "MiB",
        "b": "B"
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-tr4",
   "unit": "t1",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T1 · Full d'activitats: unitats i transferència · 16–19",
    "T1 · Hoja de actividades: unidades y transferencia · 16–19",
    "U1 · Activity sheet: units and transfer · 16–19"
   ],
   "title": "16–19",
   "q": [
    "Quant es tarda a transferir cada fitxer? (resultat en segons)",
    "¿Cuánto se tarda en transferir cada fichero? (resultado en segundos)",
    "How long does it take to transfer each file? (result in seconds)"
   ],
   "hint": [
    "Mida i velocitat en bits. La mida pot ser binària (GiB → 2³⁰) però la velocitat sempre és decimal (Mb/s → 10⁶).",
    "Tamaño y velocidad en bits. El tamaño puede ser binario (GiB → 2³⁰) pero la velocidad siempre es decimal (Mb/s → 10⁶).",
    "Size and rate in bits. The size can be binary (GiB → 2³⁰) but the rate is always decimal (Mb/s → 10⁶)."
   ],
   "note": [
    "Dona els resultats exactes quan ho siguin; si no, amb 3 o 4 decimals. La correcció accepta coma o punt decimal.",
    "Da los resultados exactos cuando lo sean; si no, con 3 o 4 decimales. La corrección acepta coma o punto decimal.",
    "Give exact results when they are exact; otherwise, with 3 or 4 decimals. Marking accepts a decimal comma or point."
   ],
   "parts": [
    {
     "l": "16",
     "q": [
      "Fitxer de 750 MB a 50 Mb/s (temps en s)",
      "Fichero de 750 MB a 50 Mb/s (tiempo en s)",
      "750 MB file at 50 Mb/s (time in s)"
     ],
     "a": {
      "k": "num",
      "v": 120,
      "show": "120 s ≈ 2 min"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Mida en bits**\n`750 MB = 750 · 10⁶ · 8 b = 6 000 000 000 b`",
          "**Tamaño en bits**\n`750 MB = 750 · 10⁶ · 8 b = 6 000 000 000 b`",
          "**Size in bits**\n`750 MB = 750 · 10⁶ · 8 b = 6 000 000 000 b`"
         ]
        },
        {
         "why": [
          "La velocitat de transferència sempre fa servir prefixos decimals.",
          "La velocidad de transferencia siempre usa prefijos decimales.",
          "Transfer rates always use decimal prefixes."
         ],
         "x": [
          "**Velocitat en b/s**\n`50 Mb/s = 50 · 10⁶ b/s = 50 000 000 b/s`",
          "**Velocidad en b/s**\n`50 Mb/s = 50 · 10⁶ b/s = 50 000 000 b/s`",
          "**Rate in b/s**\n`50 Mb/s = 50 · 10⁶ b/s = 50 000 000 b/s`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Temps = mida ÷ velocitat**\n`t = 6 000 000 000 b ÷ 50 000 000 b/s = 120 s ≈ 2 min`",
          "**Tiempo = tamaño ÷ velocidad**\n`t = 6 000 000 000 b ÷ 50 000 000 b/s = 120 s ≈ 2 min`",
          "**Time = size ÷ rate**\n`t = 6 000 000 000 b ÷ 50 000 000 b/s = 120 s ≈ 2 min`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "transfer",
      "props": {
       "id": "exl-tr4-0",
       "cfg": {
        "size": 750,
        "su": "MB",
        "v": 50,
        "vu": "Mb"
       }
      }
     }
    },
    {
     "l": "17",
     "q": [
      "Fitxer de 2 GB a 500 Mb/s (temps en s)",
      "Fichero de 2 GB a 500 Mb/s (tiempo en s)",
      "2 GB file at 500 Mb/s (time in s)"
     ],
     "a": {
      "k": "num",
      "v": 32,
      "show": "32 s"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Mida en bits**\n`2 GB = 2 · 10⁹ · 8 b = 16 000 000 000 b`",
          "**Tamaño en bits**\n`2 GB = 2 · 10⁹ · 8 b = 16 000 000 000 b`",
          "**Size in bits**\n`2 GB = 2 · 10⁹ · 8 b = 16 000 000 000 b`"
         ]
        },
        {
         "why": [
          "La velocitat de transferència sempre fa servir prefixos decimals.",
          "La velocidad de transferencia siempre usa prefijos decimales.",
          "Transfer rates always use decimal prefixes."
         ],
         "x": [
          "**Velocitat en b/s**\n`500 Mb/s = 500 · 10⁶ b/s = 500 000 000 b/s`",
          "**Velocidad en b/s**\n`500 Mb/s = 500 · 10⁶ b/s = 500 000 000 b/s`",
          "**Rate in b/s**\n`500 Mb/s = 500 · 10⁶ b/s = 500 000 000 b/s`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Temps = mida ÷ velocitat**\n`t = 16 000 000 000 b ÷ 500 000 000 b/s = 32 s`",
          "**Tiempo = tamaño ÷ velocidad**\n`t = 16 000 000 000 b ÷ 500 000 000 b/s = 32 s`",
          "**Time = size ÷ rate**\n`t = 16 000 000 000 b ÷ 500 000 000 b/s = 32 s`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "transfer",
      "props": {
       "id": "exl-tr4-1",
       "cfg": {
        "size": 2,
        "su": "GB",
        "v": 500,
        "vu": "Mb"
       }
      }
     }
    },
    {
     "l": "18",
     "q": [
      "Fitxer de 600 MB a 10 MB/s (temps en s)",
      "Fichero de 600 MB a 10 MB/s (tiempo en s)",
      "600 MB file at 10 MB/s (time in s)"
     ],
     "a": {
      "k": "num",
      "v": 60,
      "show": "60 s ≈ 1 min"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Mida en bits**\n`600 MB = 600 · 10⁶ · 8 b = 4 800 000 000 b`",
          "**Tamaño en bits**\n`600 MB = 600 · 10⁶ · 8 b = 4 800 000 000 b`",
          "**Size in bits**\n`600 MB = 600 · 10⁶ · 8 b = 4 800 000 000 b`"
         ]
        },
        {
         "why": [
          "La velocitat de transferència sempre fa servir prefixos decimals.",
          "La velocidad de transferencia siempre usa prefijos decimales.",
          "Transfer rates always use decimal prefixes."
         ],
         "x": [
          "**Velocitat en b/s**\n`10 MB/s = 10 · 10⁶ · 8 b/s = 80 000 000 b/s`",
          "**Velocidad en b/s**\n`10 MB/s = 10 · 10⁶ · 8 b/s = 80 000 000 b/s`",
          "**Rate in b/s**\n`10 MB/s = 10 · 10⁶ · 8 b/s = 80 000 000 b/s`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Temps = mida ÷ velocitat**\n`t = 4 800 000 000 b ÷ 80 000 000 b/s = 60 s ≈ 1 min`",
          "**Tiempo = tamaño ÷ velocidad**\n`t = 4 800 000 000 b ÷ 80 000 000 b/s = 60 s ≈ 1 min`",
          "**Time = size ÷ rate**\n`t = 4 800 000 000 b ÷ 80 000 000 b/s = 60 s ≈ 1 min`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "transfer",
      "props": {
       "id": "exl-tr4-2",
       "cfg": {
        "size": 600,
        "su": "MB",
        "v": 10,
        "vu": "MB"
       }
      }
     }
    },
    {
     "l": "19",
     "q": [
      "Fitxer de 1,5 GiB a 200 Mb/s (temps en s)",
      "Fichero de 1,5 GiB a 200 Mb/s (tiempo en s)",
      "1.5 GiB file at 200 Mb/s (time in s)"
     ],
     "a": {
      "k": "num",
      "v": 64.42450944,
      "show": "64,42 s ≈ 1,07 min"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Mida en bits**\n`1,5 GiB = 1,5 · 2³⁰ · 8 b = 12 884 901 888 b`",
          "**Tamaño en bits**\n`1,5 GiB = 1,5 · 2³⁰ · 8 b = 12 884 901 888 b`",
          "**Size in bits**\n`1.5 GiB = 1.5 · 2³⁰ · 8 b = 12 884 901 888 b`"
         ]
        },
        {
         "why": [
          "La velocitat de transferència sempre fa servir prefixos decimals.",
          "La velocidad de transferencia siempre usa prefijos decimales.",
          "Transfer rates always use decimal prefixes."
         ],
         "x": [
          "**Velocitat en b/s**\n`200 Mb/s = 200 · 10⁶ b/s = 200 000 000 b/s`",
          "**Velocidad en b/s**\n`200 Mb/s = 200 · 10⁶ b/s = 200 000 000 b/s`",
          "**Rate in b/s**\n`200 Mb/s = 200 · 10⁶ b/s = 200 000 000 b/s`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Temps = mida ÷ velocitat**\n`t = 12 884 901 888 b ÷ 200 000 000 b/s = 64,4245 s ≈ 1,074 min`",
          "**Tiempo = tamaño ÷ velocidad**\n`t = 12 884 901 888 b ÷ 200 000 000 b/s = 64,4245 s ≈ 1,074 min`",
          "**Time = size ÷ rate**\n`t = 12 884 901 888 b ÷ 200 000 000 b/s = 64.4245 s ≈ 1.074 min`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "transfer",
      "props": {
       "id": "exl-tr4-3",
       "cfg": {
        "size": 1.5,
        "su": "GiB",
        "v": 200,
        "vu": "Mb"
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-cb1",
   "unit": "t21",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T2.1 · Activitats: canvis de base i operacions · 1",
    "T2.1 · Actividades: cambios de base y operaciones · 1",
    "U2.1 · Activities: base conversions and operations · 1"
   ],
   "title": "1",
   "q": [
    "Canvis de base de nombres enters.",
    "Cambios de base de números enteros.",
    "Base conversions of integers."
   ],
   "hint": [
    "Entre 2, 8 i 16 agrupa bits (3 per a octal, 4 per a hexadecimal) començant per la coma. Entre altres bases, passa per base 10: TFN per anar-hi, divisions successives per sortir-ne.",
    "Entre 2, 8 y 16 agrupa bits (3 para octal, 4 para hexadecimal) empezando por la coma. Entre otras bases, pasa por base 10: TFN para ir, divisiones sucesivas para salir.",
    "Between 2, 8 and 16 group bits (3 for octal, 4 for hexadecimal) starting from the radix point. Between other bases, go through base 10: PNT to get there, successive divisions to get out."
   ],
   "note": [
    "Escriu només els dígits (sense el subíndex de la base). Per als periòdics, posa el període entre parèntesis: 1000,(1100), o escriu com a mínim dos períodes.",
    "Escribe solo los dígitos (sin el subíndice de la base). Para los periódicos, pon el periodo entre paréntesis: 1000,(1100), o escribe como mínimo dos periodos.",
    "Write only the digits (without the base subscript). For repeating ones, put the period in parentheses: 1000.(1100), or write at least two periods."
   ],
   "parts": [
    {
     "l": "1",
     "q": "`10110110₍₂₎` → base 16",
     "a": {
      "k": "dig",
      "v": "B6",
      "show": "B6₍₁₆₎"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "A l'esquerra de la coma s'omple amb zeros per l'esquerra; a la dreta, per la dreta.",
          "A la izquierda de la coma se rellena con ceros por la izquierda; a la derecha, por la derecha.",
          "To the left of the point pad with zeros on the left; to the right, on the right."
         ],
         "x": [
          "**Agrupem de 4 en 4 a partir de la coma**\n`1011 0110`",
          "**Agrupamos de 4 en 4 a partir de la coma**\n`1011 0110`",
          "**We group in fours from the point**\n`1011 0110`"
         ]
        },
        {
         "x": [
          "**Cada grup és un dígit**\n`1011→B  0110→6`",
          "**Cada grupo es un dígito**\n`1011→B  0110→6`",
          "**Each group is a digit**\n`1011→B  0110→6`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`10110110₍₂₎ = B6₍₁₆₎`",
          "**Resultado**\n`10110110₍₂₎ = B6₍₁₆₎`",
          "**Result**\n`10110110₍₂₎ = B6₍₁₆₎`"
         ]
        }
       ],
       "t": "steps"
      },
      {
       "blocks": [
        {
         "t": "p",
         "x": [
          "Aquest camí **funciona sempre**, entre qualsevol parell de bases: TFN per passar a base 10 i divisions successives per sortir-ne. Agrupar bits és una **drecera** que només serveix entre les bases 2, 8 i 16 (perquè 8 = 2³ i 16 = 2⁴) i estalvia els comptes grossos. Totes dues donen el mateix resultat.",
          "Este camino **funciona siempre**, entre cualquier par de bases: TFN para pasar a base 10 y divisiones sucesivas para salir de ella. Agrupar bits es un **atajo** que solo sirve entre las bases 2, 8 y 16 (porque 8 = 2³ y 16 = 2⁴) y ahorra las cuentas grandes. Los dos dan el mismo resultado.",
          "This route **always works**, between any pair of bases: PNT to go to base 10 and successive divisions to leave it. Grouping bits is a **shortcut** that only works between bases 2, 8 and 16 (because 8 = 2³ and 16 = 2⁴) and saves the big calculations. Both give the same result."
         ]
        },
        {
         "steps": [
          {
           "x": [
            "**Pas 1 · De base 2 a base 10 (TFN)**\n`10110110₍₂₎ = 1·2⁷ + 0·2⁶ + 1·2⁵ + 1·2⁴ + 0·2³ + 1·2² + 1·2¹ + 0·2⁰`",
            "**Paso 1 · De base 2 a base 10 (TFN)**\n`10110110₍₂₎ = 1·2⁷ + 0·2⁶ + 1·2⁵ + 1·2⁴ + 0·2³ + 1·2² + 1·2¹ + 0·2⁰`",
            "**Step 1 · From base 2 to base 10 (PNT)**\n`10110110₍₂₎ = 1·2⁷ + 0·2⁶ + 1·2⁵ + 1·2⁴ + 0·2³ + 1·2² + 1·2¹ + 0·2⁰`"
           ]
          },
          {
           "x": [
            "`Part entera: 128 + 0 + 32 + 16 + 0 + 4 + 2 + 0 = 182`",
            "`Parte entera: 128 + 0 + 32 + 16 + 0 + 4 + 2 + 0 = 182`",
            "`Integer part: 128 + 0 + 32 + 16 + 0 + 4 + 2 + 0 = 182`"
           ]
          },
          {
           "x": "`10110110₍₂₎ = 182₍₁₀₎`"
          },
          {
           "table": {
            "head": [
             "n",
             "n ÷ 16",
             [
              "residu",
              "resto",
              "remainder"
             ]
            ],
            "rows": [
             [
              "182",
              "11",
              "6"
             ],
             [
              "11",
              "0",
              "B (11)"
             ]
            ]
           },
           "why": [
            "Es llegeixen els residus de baix cap amunt: 182₍₁₀₎ = B6₍₁₆₎.",
            "Se leen los restos de abajo arriba: 182₍₁₀₎ = B6₍₁₆₎.",
            "The remainders are read from bottom to top: 182₍₁₀₎ = B6₍₁₆₎."
           ],
           "x": [
            "**Pas 2 · Part entera: divisions successives per 16**",
            "**Paso 2 · Parte entera: divisiones sucesivas por 16**",
            "**Step 2 · Integer part: successive divisions by 16**"
           ]
          },
          {
           "done": true,
           "x": [
            "**Resultat**\n`10110110₍₂₎ = B6₍₁₆₎`",
            "**Resultado**\n`10110110₍₂₎ = B6₍₁₆₎`",
            "**Result**\n`10110110₍₂₎ = B6₍₁₆₎`"
           ]
          }
         ],
         "t": "steps"
        }
       ],
       "t": "details",
       "title": [
        "Una altra manera: amb el TFN, passant per base 10",
        "Otra manera: con el TFN, pasando por base 10",
        "Another way: with the PNT, going through base 10"
       ]
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-cb1-0",
       "cfg": {
        "x": "10110110",
        "a": 2,
        "b": 16
       }
      }
     }
    },
    {
     "l": "2",
     "q": "`3A7₍₁₆₎` → base 2",
     "a": {
      "k": "dig",
      "v": "1110100111",
      "show": "1110100111₍₂₎"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Cada dígit es converteix en 4 bits**\n`3→0011  A→1010  7→0111`\n3A7₍₁₆₎ = 001110100111₍₂₎",
          "**Cada dígito se convierte en 4 bits**\n`3→0011  A→1010  7→0111`\n3A7₍₁₆₎ = 001110100111₍₂₎",
          "**Each digit becomes 4 bits**\n`3→0011  A→1010  7→0111`\n3A7₍₁₆₎ = 001110100111₍₂₎"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat (traient zeros que no compten)**\n`1110100111₍₂₎`",
          "**Resultado (quitando ceros que no cuentan)**\n`1110100111₍₂₎`",
          "**Result (removing zeros that do not count)**\n`1110100111₍₂₎`"
         ]
        }
       ],
       "t": "steps"
      },
      {
       "blocks": [
        {
         "t": "p",
         "x": [
          "Aquest camí **funciona sempre**, entre qualsevol parell de bases: TFN per passar a base 10 i divisions successives per sortir-ne. Agrupar bits és una **drecera** que només serveix entre les bases 2, 8 i 16 (perquè 8 = 2³ i 16 = 2⁴) i estalvia els comptes grossos. Totes dues donen el mateix resultat.",
          "Este camino **funciona siempre**, entre cualquier par de bases: TFN para pasar a base 10 y divisiones sucesivas para salir de ella. Agrupar bits es un **atajo** que solo sirve entre las bases 2, 8 y 16 (porque 8 = 2³ y 16 = 2⁴) y ahorra las cuentas grandes. Los dos dan el mismo resultado.",
          "This route **always works**, between any pair of bases: PNT to go to base 10 and successive divisions to leave it. Grouping bits is a **shortcut** that only works between bases 2, 8 and 16 (because 8 = 2³ and 16 = 2⁴) and saves the big calculations. Both give the same result."
         ]
        },
        {
         "steps": [
          {
           "why": [
            "Les lletres valen: A = 10.",
            "Las letras valen: A = 10.",
            "The letters are worth: A = 10."
           ],
           "x": [
            "**Pas 1 · De base 16 a base 10 (TFN)**\n`3A7₍₁₆₎ = 3·16² + A(10)·16¹ + 7·16⁰`",
            "**Paso 1 · De base 16 a base 10 (TFN)**\n`3A7₍₁₆₎ = 3·16² + A(10)·16¹ + 7·16⁰`",
            "**Step 1 · From base 16 to base 10 (PNT)**\n`3A7₍₁₆₎ = 3·16² + A(10)·16¹ + 7·16⁰`"
           ]
          },
          {
           "x": [
            "`Part entera: 768 + 160 + 7 = 935`",
            "`Parte entera: 768 + 160 + 7 = 935`",
            "`Integer part: 768 + 160 + 7 = 935`"
           ]
          },
          {
           "x": "`3A7₍₁₆₎ = 935₍₁₀₎`"
          },
          {
           "table": {
            "head": [
             "n",
             "n ÷ 2",
             [
              "residu",
              "resto",
              "remainder"
             ]
            ],
            "rows": [
             [
              "935",
              "467",
              "1"
             ],
             [
              "467",
              "233",
              "1"
             ],
             [
              "233",
              "116",
              "1"
             ],
             [
              "116",
              "58",
              "0"
             ],
             [
              "58",
              "29",
              "0"
             ],
             [
              "29",
              "14",
              "1"
             ],
             [
              "14",
              "7",
              "0"
             ],
             [
              "7",
              "3",
              "1"
             ],
             [
              "3",
              "1",
              "1"
             ],
             [
              "1",
              "0",
              "1"
             ]
            ]
           },
           "why": [
            "Es llegeixen els residus de baix cap amunt: 935₍₁₀₎ = 1110100111₍₂₎.",
            "Se leen los restos de abajo arriba: 935₍₁₀₎ = 1110100111₍₂₎.",
            "The remainders are read from bottom to top: 935₍₁₀₎ = 1110100111₍₂₎."
           ],
           "x": [
            "**Pas 2 · Part entera: divisions successives per 2**",
            "**Paso 2 · Parte entera: divisiones sucesivas por 2**",
            "**Step 2 · Integer part: successive divisions by 2**"
           ]
          },
          {
           "done": true,
           "x": [
            "**Resultat**\n`3A7₍₁₆₎ = 1110100111₍₂₎`",
            "**Resultado**\n`3A7₍₁₆₎ = 1110100111₍₂₎`",
            "**Result**\n`3A7₍₁₆₎ = 1110100111₍₂₎`"
           ]
          }
         ],
         "t": "steps"
        }
       ],
       "t": "details",
       "title": [
        "Una altra manera: amb el TFN, passant per base 10",
        "Otra manera: con el TFN, pasando por base 10",
        "Another way: with the PNT, going through base 10"
       ]
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-cb1-1",
       "cfg": {
        "x": "3A7",
        "a": 16,
        "b": 2
       }
      }
     }
    },
    {
     "l": "3",
     "q": "`725₍₈₎` → base 2",
     "a": {
      "k": "dig",
      "v": "111010101",
      "show": "111010101₍₂₎"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Cada dígit es converteix en 3 bits**\n`7→111  2→010  5→101`\n725₍₈₎ = 111010101₍₂₎",
          "**Cada dígito se convierte en 3 bits**\n`7→111  2→010  5→101`\n725₍₈₎ = 111010101₍₂₎",
          "**Each digit becomes 3 bits**\n`7→111  2→010  5→101`\n725₍₈₎ = 111010101₍₂₎"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat (traient zeros que no compten)**\n`111010101₍₂₎`",
          "**Resultado (quitando ceros que no cuentan)**\n`111010101₍₂₎`",
          "**Result (removing zeros that do not count)**\n`111010101₍₂₎`"
         ]
        }
       ],
       "t": "steps"
      },
      {
       "blocks": [
        {
         "t": "p",
         "x": [
          "Aquest camí **funciona sempre**, entre qualsevol parell de bases: TFN per passar a base 10 i divisions successives per sortir-ne. Agrupar bits és una **drecera** que només serveix entre les bases 2, 8 i 16 (perquè 8 = 2³ i 16 = 2⁴) i estalvia els comptes grossos. Totes dues donen el mateix resultat.",
          "Este camino **funciona siempre**, entre cualquier par de bases: TFN para pasar a base 10 y divisiones sucesivas para salir de ella. Agrupar bits es un **atajo** que solo sirve entre las bases 2, 8 y 16 (porque 8 = 2³ y 16 = 2⁴) y ahorra las cuentas grandes. Los dos dan el mismo resultado.",
          "This route **always works**, between any pair of bases: PNT to go to base 10 and successive divisions to leave it. Grouping bits is a **shortcut** that only works between bases 2, 8 and 16 (because 8 = 2³ and 16 = 2⁴) and saves the big calculations. Both give the same result."
         ]
        },
        {
         "steps": [
          {
           "x": [
            "**Pas 1 · De base 8 a base 10 (TFN)**\n`725₍₈₎ = 7·8² + 2·8¹ + 5·8⁰`",
            "**Paso 1 · De base 8 a base 10 (TFN)**\n`725₍₈₎ = 7·8² + 2·8¹ + 5·8⁰`",
            "**Step 1 · From base 8 to base 10 (PNT)**\n`725₍₈₎ = 7·8² + 2·8¹ + 5·8⁰`"
           ]
          },
          {
           "x": [
            "`Part entera: 448 + 16 + 5 = 469`",
            "`Parte entera: 448 + 16 + 5 = 469`",
            "`Integer part: 448 + 16 + 5 = 469`"
           ]
          },
          {
           "x": "`725₍₈₎ = 469₍₁₀₎`"
          },
          {
           "table": {
            "head": [
             "n",
             "n ÷ 2",
             [
              "residu",
              "resto",
              "remainder"
             ]
            ],
            "rows": [
             [
              "469",
              "234",
              "1"
             ],
             [
              "234",
              "117",
              "0"
             ],
             [
              "117",
              "58",
              "1"
             ],
             [
              "58",
              "29",
              "0"
             ],
             [
              "29",
              "14",
              "1"
             ],
             [
              "14",
              "7",
              "0"
             ],
             [
              "7",
              "3",
              "1"
             ],
             [
              "3",
              "1",
              "1"
             ],
             [
              "1",
              "0",
              "1"
             ]
            ]
           },
           "why": [
            "Es llegeixen els residus de baix cap amunt: 469₍₁₀₎ = 111010101₍₂₎.",
            "Se leen los restos de abajo arriba: 469₍₁₀₎ = 111010101₍₂₎.",
            "The remainders are read from bottom to top: 469₍₁₀₎ = 111010101₍₂₎."
           ],
           "x": [
            "**Pas 2 · Part entera: divisions successives per 2**",
            "**Paso 2 · Parte entera: divisiones sucesivas por 2**",
            "**Step 2 · Integer part: successive divisions by 2**"
           ]
          },
          {
           "done": true,
           "x": [
            "**Resultat**\n`725₍₈₎ = 111010101₍₂₎`",
            "**Resultado**\n`725₍₈₎ = 111010101₍₂₎`",
            "**Result**\n`725₍₈₎ = 111010101₍₂₎`"
           ]
          }
         ],
         "t": "steps"
        }
       ],
       "t": "details",
       "title": [
        "Una altra manera: amb el TFN, passant per base 10",
        "Otra manera: con el TFN, pasando por base 10",
        "Another way: with the PNT, going through base 10"
       ]
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-cb1-2",
       "cfg": {
        "x": "725",
        "a": 8,
        "b": 2
       }
      }
     }
    },
    {
     "l": "4",
     "q": "`110101101₍₂₎` → base 8",
     "a": {
      "k": "dig",
      "v": "655",
      "show": "655₍₈₎"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "A l'esquerra de la coma s'omple amb zeros per l'esquerra; a la dreta, per la dreta.",
          "A la izquierda de la coma se rellena con ceros por la izquierda; a la derecha, por la derecha.",
          "To the left of the point pad with zeros on the left; to the right, on the right."
         ],
         "x": [
          "**Agrupem de 3 en 3 a partir de la coma**\n`110 101 101`",
          "**Agrupamos de 3 en 3 a partir de la coma**\n`110 101 101`",
          "**We group in threes from the point**\n`110 101 101`"
         ]
        },
        {
         "x": [
          "**Cada grup és un dígit**\n`110→6  101→5  101→5`",
          "**Cada grupo es un dígito**\n`110→6  101→5  101→5`",
          "**Each group is a digit**\n`110→6  101→5  101→5`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`110101101₍₂₎ = 655₍₈₎`",
          "**Resultado**\n`110101101₍₂₎ = 655₍₈₎`",
          "**Result**\n`110101101₍₂₎ = 655₍₈₎`"
         ]
        }
       ],
       "t": "steps"
      },
      {
       "blocks": [
        {
         "t": "p",
         "x": [
          "Aquest camí **funciona sempre**, entre qualsevol parell de bases: TFN per passar a base 10 i divisions successives per sortir-ne. Agrupar bits és una **drecera** que només serveix entre les bases 2, 8 i 16 (perquè 8 = 2³ i 16 = 2⁴) i estalvia els comptes grossos. Totes dues donen el mateix resultat.",
          "Este camino **funciona siempre**, entre cualquier par de bases: TFN para pasar a base 10 y divisiones sucesivas para salir de ella. Agrupar bits es un **atajo** que solo sirve entre las bases 2, 8 y 16 (porque 8 = 2³ y 16 = 2⁴) y ahorra las cuentas grandes. Los dos dan el mismo resultado.",
          "This route **always works**, between any pair of bases: PNT to go to base 10 and successive divisions to leave it. Grouping bits is a **shortcut** that only works between bases 2, 8 and 16 (because 8 = 2³ and 16 = 2⁴) and saves the big calculations. Both give the same result."
         ]
        },
        {
         "steps": [
          {
           "x": [
            "**Pas 1 · De base 2 a base 10 (TFN)**\n`110101101₍₂₎ = 1·2⁸ + 1·2⁷ + 0·2⁶ + 1·2⁵ + 0·2⁴ + 1·2³ + 1·2² + 0·2¹ + 1·2⁰`",
            "**Paso 1 · De base 2 a base 10 (TFN)**\n`110101101₍₂₎ = 1·2⁸ + 1·2⁷ + 0·2⁶ + 1·2⁵ + 0·2⁴ + 1·2³ + 1·2² + 0·2¹ + 1·2⁰`",
            "**Step 1 · From base 2 to base 10 (PNT)**\n`110101101₍₂₎ = 1·2⁸ + 1·2⁷ + 0·2⁶ + 1·2⁵ + 0·2⁴ + 1·2³ + 1·2² + 0·2¹ + 1·2⁰`"
           ]
          },
          {
           "x": [
            "`Part entera: 256 + 128 + 0 + 32 + 0 + 8 + 4 + 0 + 1 = 429`",
            "`Parte entera: 256 + 128 + 0 + 32 + 0 + 8 + 4 + 0 + 1 = 429`",
            "`Integer part: 256 + 128 + 0 + 32 + 0 + 8 + 4 + 0 + 1 = 429`"
           ]
          },
          {
           "x": "`110101101₍₂₎ = 429₍₁₀₎`"
          },
          {
           "table": {
            "head": [
             "n",
             "n ÷ 8",
             [
              "residu",
              "resto",
              "remainder"
             ]
            ],
            "rows": [
             [
              "429",
              "53",
              "5"
             ],
             [
              "53",
              "6",
              "5"
             ],
             [
              "6",
              "0",
              "6"
             ]
            ]
           },
           "why": [
            "Es llegeixen els residus de baix cap amunt: 429₍₁₀₎ = 655₍₈₎.",
            "Se leen los restos de abajo arriba: 429₍₁₀₎ = 655₍₈₎.",
            "The remainders are read from bottom to top: 429₍₁₀₎ = 655₍₈₎."
           ],
           "x": [
            "**Pas 2 · Part entera: divisions successives per 8**",
            "**Paso 2 · Parte entera: divisiones sucesivas por 8**",
            "**Step 2 · Integer part: successive divisions by 8**"
           ]
          },
          {
           "done": true,
           "x": [
            "**Resultat**\n`110101101₍₂₎ = 655₍₈₎`",
            "**Resultado**\n`110101101₍₂₎ = 655₍₈₎`",
            "**Result**\n`110101101₍₂₎ = 655₍₈₎`"
           ]
          }
         ],
         "t": "steps"
        }
       ],
       "t": "details",
       "title": [
        "Una altra manera: amb el TFN, passant per base 10",
        "Otra manera: con el TFN, pasando por base 10",
        "Another way: with the PNT, going through base 10"
       ]
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-cb1-3",
       "cfg": {
        "x": "110101101",
        "a": 2,
        "b": 8
       }
      }
     }
    },
    {
     "l": "5",
     "q": "`2F4₍₁₆₎` → base 8",
     "a": {
      "k": "dig",
      "v": "1364",
      "show": "1364₍₈₎"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Cada dígit es converteix en 4 bits**\n`2→0010  F→1111  4→0100`\n2F4₍₁₆₎ = 001011110100₍₂₎",
          "**Cada dígito se convierte en 4 bits**\n`2→0010  F→1111  4→0100`\n2F4₍₁₆₎ = 001011110100₍₂₎",
          "**Each digit becomes 4 bits**\n`2→0010  F→1111  4→0100`\n2F4₍₁₆₎ = 001011110100₍₂₎"
         ]
        },
        {
         "why": [
          "A l'esquerra de la coma s'omple amb zeros per l'esquerra; a la dreta, per la dreta.",
          "A la izquierda de la coma se rellena con ceros por la izquierda; a la derecha, por la derecha.",
          "To the left of the point pad with zeros on the left; to the right, on the right."
         ],
         "x": [
          "**Agrupem de 3 en 3 a partir de la coma**\n`001 011 110 100`",
          "**Agrupamos de 3 en 3 a partir de la coma**\n`001 011 110 100`",
          "**We group in threes from the point**\n`001 011 110 100`"
         ]
        },
        {
         "x": [
          "**Cada grup és un dígit**\n`001→1  011→3  110→6  100→4`",
          "**Cada grupo es un dígito**\n`001→1  011→3  110→6  100→4`",
          "**Each group is a digit**\n`001→1  011→3  110→6  100→4`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`2F4₍₁₆₎ = 1364₍₈₎`",
          "**Resultado**\n`2F4₍₁₆₎ = 1364₍₈₎`",
          "**Result**\n`2F4₍₁₆₎ = 1364₍₈₎`"
         ]
        }
       ],
       "t": "steps"
      },
      {
       "blocks": [
        {
         "t": "p",
         "x": [
          "Aquest camí **funciona sempre**, entre qualsevol parell de bases: TFN per passar a base 10 i divisions successives per sortir-ne. Agrupar bits és una **drecera** que només serveix entre les bases 2, 8 i 16 (perquè 8 = 2³ i 16 = 2⁴) i estalvia els comptes grossos. Totes dues donen el mateix resultat.",
          "Este camino **funciona siempre**, entre cualquier par de bases: TFN para pasar a base 10 y divisiones sucesivas para salir de ella. Agrupar bits es un **atajo** que solo sirve entre las bases 2, 8 y 16 (porque 8 = 2³ y 16 = 2⁴) y ahorra las cuentas grandes. Los dos dan el mismo resultado.",
          "This route **always works**, between any pair of bases: PNT to go to base 10 and successive divisions to leave it. Grouping bits is a **shortcut** that only works between bases 2, 8 and 16 (because 8 = 2³ and 16 = 2⁴) and saves the big calculations. Both give the same result."
         ]
        },
        {
         "steps": [
          {
           "why": [
            "Les lletres valen: A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.",
            "Las letras valen: A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.",
            "The letters are worth: A = 10, B = 11, C = 12, D = 13, E = 14, F = 15."
           ],
           "x": [
            "**Pas 1 · De base 16 a base 10 (TFN)**\n`2F4₍₁₆₎ = 2·16² + F(15)·16¹ + 4·16⁰`",
            "**Paso 1 · De base 16 a base 10 (TFN)**\n`2F4₍₁₆₎ = 2·16² + F(15)·16¹ + 4·16⁰`",
            "**Step 1 · From base 16 to base 10 (PNT)**\n`2F4₍₁₆₎ = 2·16² + F(15)·16¹ + 4·16⁰`"
           ]
          },
          {
           "x": [
            "`Part entera: 512 + 240 + 4 = 756`",
            "`Parte entera: 512 + 240 + 4 = 756`",
            "`Integer part: 512 + 240 + 4 = 756`"
           ]
          },
          {
           "x": "`2F4₍₁₆₎ = 756₍₁₀₎`"
          },
          {
           "table": {
            "head": [
             "n",
             "n ÷ 8",
             [
              "residu",
              "resto",
              "remainder"
             ]
            ],
            "rows": [
             [
              "756",
              "94",
              "4"
             ],
             [
              "94",
              "11",
              "6"
             ],
             [
              "11",
              "1",
              "3"
             ],
             [
              "1",
              "0",
              "1"
             ]
            ]
           },
           "why": [
            "Es llegeixen els residus de baix cap amunt: 756₍₁₀₎ = 1364₍₈₎.",
            "Se leen los restos de abajo arriba: 756₍₁₀₎ = 1364₍₈₎.",
            "The remainders are read from bottom to top: 756₍₁₀₎ = 1364₍₈₎."
           ],
           "x": [
            "**Pas 2 · Part entera: divisions successives per 8**",
            "**Paso 2 · Parte entera: divisiones sucesivas por 8**",
            "**Step 2 · Integer part: successive divisions by 8**"
           ]
          },
          {
           "done": true,
           "x": [
            "**Resultat**\n`2F4₍₁₆₎ = 1364₍₈₎`",
            "**Resultado**\n`2F4₍₁₆₎ = 1364₍₈₎`",
            "**Result**\n`2F4₍₁₆₎ = 1364₍₈₎`"
           ]
          }
         ],
         "t": "steps"
        }
       ],
       "t": "details",
       "title": [
        "Una altra manera: amb el TFN, passant per base 10",
        "Otra manera: con el TFN, pasando por base 10",
        "Another way: with the PNT, going through base 10"
       ]
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-cb1-4",
       "cfg": {
        "x": "2F4",
        "a": 16,
        "b": 8
       }
      }
     }
    },
    {
     "l": "6",
     "q": "`753₍₈₎` → base 16",
     "a": {
      "k": "dig",
      "v": "1EB",
      "show": "1EB₍₁₆₎"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Cada dígit es converteix en 3 bits**\n`7→111  5→101  3→011`\n753₍₈₎ = 111101011₍₂₎",
          "**Cada dígito se convierte en 3 bits**\n`7→111  5→101  3→011`\n753₍₈₎ = 111101011₍₂₎",
          "**Each digit becomes 3 bits**\n`7→111  5→101  3→011`\n753₍₈₎ = 111101011₍₂₎"
         ]
        },
        {
         "why": [
          "A l'esquerra de la coma s'omple amb zeros per l'esquerra; a la dreta, per la dreta.",
          "A la izquierda de la coma se rellena con ceros por la izquierda; a la derecha, por la derecha.",
          "To the left of the point pad with zeros on the left; to the right, on the right."
         ],
         "x": [
          "**Agrupem de 4 en 4 a partir de la coma**\n`0001 1110 1011`",
          "**Agrupamos de 4 en 4 a partir de la coma**\n`0001 1110 1011`",
          "**We group in fours from the point**\n`0001 1110 1011`"
         ]
        },
        {
         "x": [
          "**Cada grup és un dígit**\n`0001→1  1110→E  1011→B`",
          "**Cada grupo es un dígito**\n`0001→1  1110→E  1011→B`",
          "**Each group is a digit**\n`0001→1  1110→E  1011→B`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`753₍₈₎ = 1EB₍₁₆₎`",
          "**Resultado**\n`753₍₈₎ = 1EB₍₁₆₎`",
          "**Result**\n`753₍₈₎ = 1EB₍₁₆₎`"
         ]
        }
       ],
       "t": "steps"
      },
      {
       "blocks": [
        {
         "t": "p",
         "x": [
          "Aquest camí **funciona sempre**, entre qualsevol parell de bases: TFN per passar a base 10 i divisions successives per sortir-ne. Agrupar bits és una **drecera** que només serveix entre les bases 2, 8 i 16 (perquè 8 = 2³ i 16 = 2⁴) i estalvia els comptes grossos. Totes dues donen el mateix resultat.",
          "Este camino **funciona siempre**, entre cualquier par de bases: TFN para pasar a base 10 y divisiones sucesivas para salir de ella. Agrupar bits es un **atajo** que solo sirve entre las bases 2, 8 y 16 (porque 8 = 2³ y 16 = 2⁴) y ahorra las cuentas grandes. Los dos dan el mismo resultado.",
          "This route **always works**, between any pair of bases: PNT to go to base 10 and successive divisions to leave it. Grouping bits is a **shortcut** that only works between bases 2, 8 and 16 (because 8 = 2³ and 16 = 2⁴) and saves the big calculations. Both give the same result."
         ]
        },
        {
         "steps": [
          {
           "x": [
            "**Pas 1 · De base 8 a base 10 (TFN)**\n`753₍₈₎ = 7·8² + 5·8¹ + 3·8⁰`",
            "**Paso 1 · De base 8 a base 10 (TFN)**\n`753₍₈₎ = 7·8² + 5·8¹ + 3·8⁰`",
            "**Step 1 · From base 8 to base 10 (PNT)**\n`753₍₈₎ = 7·8² + 5·8¹ + 3·8⁰`"
           ]
          },
          {
           "x": [
            "`Part entera: 448 + 40 + 3 = 491`",
            "`Parte entera: 448 + 40 + 3 = 491`",
            "`Integer part: 448 + 40 + 3 = 491`"
           ]
          },
          {
           "x": "`753₍₈₎ = 491₍₁₀₎`"
          },
          {
           "table": {
            "head": [
             "n",
             "n ÷ 16",
             [
              "residu",
              "resto",
              "remainder"
             ]
            ],
            "rows": [
             [
              "491",
              "30",
              "B (11)"
             ],
             [
              "30",
              "1",
              "E (14)"
             ],
             [
              "1",
              "0",
              "1"
             ]
            ]
           },
           "why": [
            "Es llegeixen els residus de baix cap amunt: 491₍₁₀₎ = 1EB₍₁₆₎.",
            "Se leen los restos de abajo arriba: 491₍₁₀₎ = 1EB₍₁₆₎.",
            "The remainders are read from bottom to top: 491₍₁₀₎ = 1EB₍₁₆₎."
           ],
           "x": [
            "**Pas 2 · Part entera: divisions successives per 16**",
            "**Paso 2 · Parte entera: divisiones sucesivas por 16**",
            "**Step 2 · Integer part: successive divisions by 16**"
           ]
          },
          {
           "done": true,
           "x": [
            "**Resultat**\n`753₍₈₎ = 1EB₍₁₆₎`",
            "**Resultado**\n`753₍₈₎ = 1EB₍₁₆₎`",
            "**Result**\n`753₍₈₎ = 1EB₍₁₆₎`"
           ]
          }
         ],
         "t": "steps"
        }
       ],
       "t": "details",
       "title": [
        "Una altra manera: amb el TFN, passant per base 10",
        "Otra manera: con el TFN, pasando por base 10",
        "Another way: with the PNT, going through base 10"
       ]
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-cb1-5",
       "cfg": {
        "x": "753",
        "a": 8,
        "b": 16
       }
      }
     }
    },
    {
     "l": "7",
     "q": "`3241₍₅₎` → base 2",
     "a": {
      "k": "dig",
      "v": "110111110",
      "show": "110111110₍₂₎"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Pas 1 · De base 5 a base 10 (TFN)**\n`3241₍₅₎ = 3·5³ + 2·5² + 4·5¹ + 1·5⁰`",
          "**Paso 1 · De base 5 a base 10 (TFN)**\n`3241₍₅₎ = 3·5³ + 2·5² + 4·5¹ + 1·5⁰`",
          "**Step 1 · From base 5 to base 10 (PNT)**\n`3241₍₅₎ = 3·5³ + 2·5² + 4·5¹ + 1·5⁰`"
         ]
        },
        {
         "x": [
          "`Part entera: 375 + 50 + 20 + 1 = 446`",
          "`Parte entera: 375 + 50 + 20 + 1 = 446`",
          "`Integer part: 375 + 50 + 20 + 1 = 446`"
         ]
        },
        {
         "x": "`3241₍₅₎ = 446₍₁₀₎`"
        },
        {
         "table": {
          "head": [
           "n",
           "n ÷ 2",
           [
            "residu",
            "resto",
            "remainder"
           ]
          ],
          "rows": [
           [
            "446",
            "223",
            "0"
           ],
           [
            "223",
            "111",
            "1"
           ],
           [
            "111",
            "55",
            "1"
           ],
           [
            "55",
            "27",
            "1"
           ],
           [
            "27",
            "13",
            "1"
           ],
           [
            "13",
            "6",
            "1"
           ],
           [
            "6",
            "3",
            "0"
           ],
           [
            "3",
            "1",
            "1"
           ],
           [
            "1",
            "0",
            "1"
           ]
          ]
         },
         "why": [
          "Es llegeixen els residus de baix cap amunt: 446₍₁₀₎ = 110111110₍₂₎.",
          "Se leen los restos de abajo arriba: 446₍₁₀₎ = 110111110₍₂₎.",
          "The remainders are read from bottom to top: 446₍₁₀₎ = 110111110₍₂₎."
         ],
         "x": [
          "**Pas 2 · Part entera: divisions successives per 2**",
          "**Paso 2 · Parte entera: divisiones sucesivas por 2**",
          "**Step 2 · Integer part: successive divisions by 2**"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`3241₍₅₎ = 110111110₍₂₎`",
          "**Resultado**\n`3241₍₅₎ = 110111110₍₂₎`",
          "**Result**\n`3241₍₅₎ = 110111110₍₂₎`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-cb1-6",
       "cfg": {
        "x": "3241",
        "a": 5,
        "b": 2
       }
      }
     }
    },
    {
     "l": "8",
     "q": "`526₍₇₎` → base 16",
     "a": {
      "k": "dig",
      "v": "109",
      "show": "109₍₁₆₎"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Pas 1 · De base 7 a base 10 (TFN)**\n`526₍₇₎ = 5·7² + 2·7¹ + 6·7⁰`",
          "**Paso 1 · De base 7 a base 10 (TFN)**\n`526₍₇₎ = 5·7² + 2·7¹ + 6·7⁰`",
          "**Step 1 · From base 7 to base 10 (PNT)**\n`526₍₇₎ = 5·7² + 2·7¹ + 6·7⁰`"
         ]
        },
        {
         "x": [
          "`Part entera: 245 + 14 + 6 = 265`",
          "`Parte entera: 245 + 14 + 6 = 265`",
          "`Integer part: 245 + 14 + 6 = 265`"
         ]
        },
        {
         "x": "`526₍₇₎ = 265₍₁₀₎`"
        },
        {
         "table": {
          "head": [
           "n",
           "n ÷ 16",
           [
            "residu",
            "resto",
            "remainder"
           ]
          ],
          "rows": [
           [
            "265",
            "16",
            "9"
           ],
           [
            "16",
            "1",
            "0"
           ],
           [
            "1",
            "0",
            "1"
           ]
          ]
         },
         "why": [
          "Es llegeixen els residus de baix cap amunt: 265₍₁₀₎ = 109₍₁₆₎.",
          "Se leen los restos de abajo arriba: 265₍₁₀₎ = 109₍₁₆₎.",
          "The remainders are read from bottom to top: 265₍₁₀₎ = 109₍₁₆₎."
         ],
         "x": [
          "**Pas 2 · Part entera: divisions successives per 16**",
          "**Paso 2 · Parte entera: divisiones sucesivas por 16**",
          "**Step 2 · Integer part: successive divisions by 16**"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`526₍₇₎ = 109₍₁₆₎`",
          "**Resultado**\n`526₍₇₎ = 109₍₁₆₎`",
          "**Result**\n`526₍₇₎ = 109₍₁₆₎`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-cb1-7",
       "cfg": {
        "x": "526",
        "a": 7,
        "b": 16
       }
      }
     }
    },
    {
     "l": "9",
     "q": "`21012₍₃₎` → base 8",
     "a": {
      "k": "dig",
      "v": "302",
      "show": "302₍₈₎"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Pas 1 · De base 3 a base 10 (TFN)**\n`21012₍₃₎ = 2·3⁴ + 1·3³ + 0·3² + 1·3¹ + 2·3⁰`",
          "**Paso 1 · De base 3 a base 10 (TFN)**\n`21012₍₃₎ = 2·3⁴ + 1·3³ + 0·3² + 1·3¹ + 2·3⁰`",
          "**Step 1 · From base 3 to base 10 (PNT)**\n`21012₍₃₎ = 2·3⁴ + 1·3³ + 0·3² + 1·3¹ + 2·3⁰`"
         ]
        },
        {
         "x": [
          "`Part entera: 162 + 27 + 0 + 3 + 2 = 194`",
          "`Parte entera: 162 + 27 + 0 + 3 + 2 = 194`",
          "`Integer part: 162 + 27 + 0 + 3 + 2 = 194`"
         ]
        },
        {
         "x": "`21012₍₃₎ = 194₍₁₀₎`"
        },
        {
         "table": {
          "head": [
           "n",
           "n ÷ 8",
           [
            "residu",
            "resto",
            "remainder"
           ]
          ],
          "rows": [
           [
            "194",
            "24",
            "2"
           ],
           [
            "24",
            "3",
            "0"
           ],
           [
            "3",
            "0",
            "3"
           ]
          ]
         },
         "why": [
          "Es llegeixen els residus de baix cap amunt: 194₍₁₀₎ = 302₍₈₎.",
          "Se leen los restos de abajo arriba: 194₍₁₀₎ = 302₍₈₎.",
          "The remainders are read from bottom to top: 194₍₁₀₎ = 302₍₈₎."
         ],
         "x": [
          "**Pas 2 · Part entera: divisions successives per 8**",
          "**Paso 2 · Parte entera: divisiones sucesivas por 8**",
          "**Step 2 · Integer part: successive divisions by 8**"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`21012₍₃₎ = 302₍₈₎`",
          "**Resultado**\n`21012₍₃₎ = 302₍₈₎`",
          "**Result**\n`21012₍₃₎ = 302₍₈₎`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-cb1-8",
       "cfg": {
        "x": "21012",
        "a": 3,
        "b": 8
       }
      }
     }
    },
    {
     "l": "10",
     "q": "`A35₍₁₂₎` → base 5",
     "a": {
      "k": "dig",
      "v": "21411",
      "show": "21411₍₅₎"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Les lletres valen: A = 10.",
          "Las letras valen: A = 10.",
          "The letters are worth: A = 10."
         ],
         "x": [
          "**Pas 1 · De base 12 a base 10 (TFN)**\n`A35₍₁₂₎ = A(10)·12² + 3·12¹ + 5·12⁰`",
          "**Paso 1 · De base 12 a base 10 (TFN)**\n`A35₍₁₂₎ = A(10)·12² + 3·12¹ + 5·12⁰`",
          "**Step 1 · From base 12 to base 10 (PNT)**\n`A35₍₁₂₎ = A(10)·12² + 3·12¹ + 5·12⁰`"
         ]
        },
        {
         "x": [
          "`Part entera: 1 440 + 36 + 5 = 1 481`",
          "`Parte entera: 1 440 + 36 + 5 = 1 481`",
          "`Integer part: 1 440 + 36 + 5 = 1 481`"
         ]
        },
        {
         "x": "`A35₍₁₂₎ = 1 481₍₁₀₎`"
        },
        {
         "table": {
          "head": [
           "n",
           "n ÷ 5",
           [
            "residu",
            "resto",
            "remainder"
           ]
          ],
          "rows": [
           [
            "1 481",
            "296",
            "1"
           ],
           [
            "296",
            "59",
            "1"
           ],
           [
            "59",
            "11",
            "4"
           ],
           [
            "11",
            "2",
            "1"
           ],
           [
            "2",
            "0",
            "2"
           ]
          ]
         },
         "why": [
          "Es llegeixen els residus de baix cap amunt: 1 481₍₁₀₎ = 21411₍₅₎.",
          "Se leen los restos de abajo arriba: 1 481₍₁₀₎ = 21411₍₅₎.",
          "The remainders are read from bottom to top: 1 481₍₁₀₎ = 21411₍₅₎."
         ],
         "x": [
          "**Pas 2 · Part entera: divisions successives per 5**",
          "**Paso 2 · Parte entera: divisiones sucesivas por 5**",
          "**Step 2 · Integer part: successive divisions by 5**"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`A35₍₁₂₎ = 21411₍₅₎`",
          "**Resultado**\n`A35₍₁₂₎ = 21411₍₅₎`",
          "**Result**\n`A35₍₁₂₎ = 21411₍₅₎`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-cb1-9",
       "cfg": {
        "x": "A35",
        "a": 12,
        "b": 5
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-cb2",
   "unit": "t21",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T2.1 · Activitats: canvis de base i operacions · 2",
    "T2.1 · Actividades: cambios de base y operaciones · 2",
    "U2.1 · Activities: base conversions and operations · 2"
   ],
   "title": "2",
   "q": [
    "Canvis de base amb part fraccionària.",
    "Cambios de base con parte fraccionaria.",
    "Base conversions with a fractional part."
   ],
   "hint": [
    "La part entera i la fraccionària es converteixen per separat. La fraccionària es multiplica per la base destí i es van prenent les parts enteres; si torna a sortir una fracció ja vista, el resultat és periòdic.",
    "La parte entera y la fraccionaria se convierten por separado. La fraccionaria se multiplica por la base destino y se van tomando las partes enteras; si vuelve a salir una fracción ya vista, el resultado es periódico.",
    "The integer and fractional parts are converted separately. The fractional part is multiplied by the target base and the integer parts are taken one by one; if a fraction already seen comes up again, the result is repeating."
   ],
   "note": [
    "Escriu només els dígits (sense el subíndex de la base). Per als periòdics, posa el període entre parèntesis: 1000,(1100), o escriu com a mínim dos períodes.",
    "Escribe solo los dígitos (sin el subíndice de la base). Para los periódicos, pon el periodo entre paréntesis: 1000,(1100), o escribe como mínimo dos periodos.",
    "Write only the digits (without the base subscript). For repeating ones, put the period in parentheses: 1000.(1100), or write at least two periods."
   ],
   "parts": [
    {
     "l": "1",
     "q": "`13,4₍₅₎` → base 2",
     "a": {
      "k": "dig",
      "v": "1000,(1100)",
      "show": "1000,(1100)₍₂₎",
      "ph": [
       "període entre parèntesis",
       "periodo entre paréntesis",
       "period in parentheses"
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Pas 1 · De base 5 a base 10 (TFN)**\n`13,4₍₅₎ = 1·5¹ + 3·5⁰ + 4·5⁻¹`",
          "**Paso 1 · De base 5 a base 10 (TFN)**\n`13,4₍₅₎ = 1·5¹ + 3·5⁰ + 4·5⁻¹`",
          "**Step 1 · From base 5 to base 10 (PNT)**\n`13.4₍₅₎ = 1·5¹ + 3·5⁰ + 4·5⁻¹`"
         ]
        },
        {
         "x": [
          "`Part entera: 5 + 3 = 8`",
          "`Parte entera: 5 + 3 = 8`",
          "`Integer part: 5 + 3 = 8`"
         ]
        },
        {
         "x": [
          "`Part fraccionària: 4/5 = 0,8`",
          "`Parte fraccionaria: 4/5 = 0,8`",
          "`Fractional part: 4/5 = 0.8`"
         ]
        },
        {
         "x": "`13,4₍₅₎ = 8,8₍₁₀₎`"
        },
        {
         "table": {
          "head": [
           "n",
           "n ÷ 2",
           [
            "residu",
            "resto",
            "remainder"
           ]
          ],
          "rows": [
           [
            "8",
            "4",
            "0"
           ],
           [
            "4",
            "2",
            "0"
           ],
           [
            "2",
            "1",
            "0"
           ],
           [
            "1",
            "0",
            "1"
           ]
          ]
         },
         "why": [
          "Es llegeixen els residus de baix cap amunt: 8₍₁₀₎ = 1000₍₂₎.",
          "Se leen los restos de abajo arriba: 8₍₁₀₎ = 1000₍₂₎.",
          "The remainders are read from bottom to top: 8₍₁₀₎ = 1000₍₂₎."
         ],
         "x": [
          "**Pas 2 · Part entera: divisions successives per 2**",
          "**Paso 2 · Parte entera: divisiones sucesivas por 2**",
          "**Step 2 · Integer part: successive divisions by 2**"
         ]
        },
        {
         "table": {
          "head": [
           [
            "fracció",
            "fracción",
            "fraction"
           ],
           "× 2",
           [
            "dígit",
            "dígito",
            "digit"
           ]
          ],
          "rows": [
           [
            "0,8",
            "1,6",
            "1"
           ],
           [
            "0,6",
            "1,2",
            "1"
           ],
           [
            "0,2",
            "0,4",
            "0"
           ],
           [
            "0,4",
            "0,8",
            "0"
           ]
          ]
         },
         "why": [
          "Torna a aparèixer una fracció ja vista: a partir d'aquí els dígits es repeteixen (període 1100).",
          "Vuelve a aparecer una fracción ya vista: a partir de aquí los dígitos se repiten (periodo 1100).",
          "A fraction already seen appears again: from here on the digits repeat (period 1100)."
         ],
         "x": [
          "**Part fraccionària: multiplicacions successives per 2**\nA cada fila: multiplica la fracció per 2. La part entera del resultat (0 o 1) és el dígit següent; a la fila de sota continues només amb la part de després de la coma. Para quan la fracció surt 0 o quan torna a sortir una fracció que ja havies tingut.",
          "**Parte fraccionaria: multiplicaciones sucesivas por 2**\nEn cada fila: multiplica la fracción por 2. La parte entera del resultado (0 o 1) es el dígito siguiente; en la fila de abajo sigues solo con la parte de después de la coma. Para cuando la fracción sale 0 o cuando vuelve a salir una fracción que ya habías tenido.",
          "**Fractional part: successive multiplications by 2**\nIn each row: multiply the fraction by 2. The integer part of the result (0 or 1) is the next digit; in the row below you continue only with the part after the point. Stop when the fraction comes out 0 or when a fraction you already had comes up again."
         ]
        },
        {
         "done": true,
         "why": [
          "Els dígits entre parèntesis es repeteixen indefinidament.",
          "Los dígitos entre paréntesis se repiten indefinidamente.",
          "The digits in parentheses repeat indefinitely."
         ],
         "x": [
          "**Resultat**\n`13,4₍₅₎ = 1000,(1100)₍₂₎`",
          "**Resultado**\n`13,4₍₅₎ = 1000,(1100)₍₂₎`",
          "**Result**\n`13.4₍₅₎ = 1000.(1100)₍₂₎`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-cb2-0",
       "cfg": {
        "x": "13,4",
        "a": 5,
        "b": 2
       }
      }
     }
    },
    {
     "l": "2",
     "q": "`27,32₍₈₎` → base 16",
     "a": {
      "k": "dig",
      "v": "17,68",
      "show": "17,68₍₁₆₎"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Cada dígit es converteix en 3 bits**\n`2→010  7→111  ,  3→011  2→010`\n27,32₍₈₎ = 010111,011010₍₂₎",
          "**Cada dígito se convierte en 3 bits**\n`2→010  7→111  ,  3→011  2→010`\n27,32₍₈₎ = 010111,011010₍₂₎",
          "**Each digit becomes 3 bits**\n`2→010  7→111  .  3→011  2→010`\n27.32₍₈₎ = 010111.011010₍₂₎"
         ]
        },
        {
         "why": [
          "A l'esquerra de la coma s'omple amb zeros per l'esquerra; a la dreta, per la dreta.",
          "A la izquierda de la coma se rellena con ceros por la izquierda; a la derecha, por la derecha.",
          "To the left of the point pad with zeros on the left; to the right, on the right."
         ],
         "x": [
          "**Agrupem de 4 en 4 a partir de la coma**\n`0001 0111 , 0110 1000`",
          "**Agrupamos de 4 en 4 a partir de la coma**\n`0001 0111 , 0110 1000`",
          "**We group in fours from the point**\n`0001 0111 . 0110 1000`"
         ]
        },
        {
         "x": [
          "**Cada grup és un dígit**\n`0001→1  0111→7  ,  0110→6  1000→8`",
          "**Cada grupo es un dígito**\n`0001→1  0111→7  ,  0110→6  1000→8`",
          "**Each group is a digit**\n`0001→1  0111→7  .  0110→6  1000→8`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`27,32₍₈₎ = 17,68₍₁₆₎`",
          "**Resultado**\n`27,32₍₈₎ = 17,68₍₁₆₎`",
          "**Result**\n`27.32₍₈₎ = 17.68₍₁₆₎`"
         ]
        }
       ],
       "t": "steps"
      },
      {
       "blocks": [
        {
         "t": "p",
         "x": [
          "Aquest camí **funciona sempre**, entre qualsevol parell de bases: TFN per passar a base 10 i divisions successives per sortir-ne. Agrupar bits és una **drecera** que només serveix entre les bases 2, 8 i 16 (perquè 8 = 2³ i 16 = 2⁴) i estalvia els comptes grossos. Totes dues donen el mateix resultat.",
          "Este camino **funciona siempre**, entre cualquier par de bases: TFN para pasar a base 10 y divisiones sucesivas para salir de ella. Agrupar bits es un **atajo** que solo sirve entre las bases 2, 8 y 16 (porque 8 = 2³ y 16 = 2⁴) y ahorra las cuentas grandes. Los dos dan el mismo resultado.",
          "This route **always works**, between any pair of bases: PNT to go to base 10 and successive divisions to leave it. Grouping bits is a **shortcut** that only works between bases 2, 8 and 16 (because 8 = 2³ and 16 = 2⁴) and saves the big calculations. Both give the same result."
         ]
        },
        {
         "steps": [
          {
           "x": [
            "**Pas 1 · De base 8 a base 10 (TFN)**\n`27,32₍₈₎ = 2·8¹ + 7·8⁰ + 3·8⁻¹ + 2·8⁻²`",
            "**Paso 1 · De base 8 a base 10 (TFN)**\n`27,32₍₈₎ = 2·8¹ + 7·8⁰ + 3·8⁻¹ + 2·8⁻²`",
            "**Step 1 · From base 8 to base 10 (PNT)**\n`27.32₍₈₎ = 2·8¹ + 7·8⁰ + 3·8⁻¹ + 2·8⁻²`"
           ]
          },
          {
           "x": [
            "`Part entera: 16 + 7 = 23`",
            "`Parte entera: 16 + 7 = 23`",
            "`Integer part: 16 + 7 = 23`"
           ]
          },
          {
           "x": [
            "`Part fraccionària: 3/8¹ + 2/8² = 26/64 = 0,40625`",
            "`Parte fraccionaria: 3/8¹ + 2/8² = 26/64 = 0,40625`",
            "`Fractional part: 3/8¹ + 2/8² = 26/64 = 0.40625`"
           ]
          },
          {
           "x": "`27,32₍₈₎ = 23,40625₍₁₀₎`"
          },
          {
           "table": {
            "head": [
             "n",
             "n ÷ 16",
             [
              "residu",
              "resto",
              "remainder"
             ]
            ],
            "rows": [
             [
              "23",
              "1",
              "7"
             ],
             [
              "1",
              "0",
              "1"
             ]
            ]
           },
           "why": [
            "Es llegeixen els residus de baix cap amunt: 23₍₁₀₎ = 17₍₁₆₎.",
            "Se leen los restos de abajo arriba: 23₍₁₀₎ = 17₍₁₆₎.",
            "The remainders are read from bottom to top: 23₍₁₀₎ = 17₍₁₆₎."
           ],
           "x": [
            "**Pas 2 · Part entera: divisions successives per 16**",
            "**Paso 2 · Parte entera: divisiones sucesivas por 16**",
            "**Step 2 · Integer part: successive divisions by 16**"
           ]
          },
          {
           "table": {
            "head": [
             [
              "fracció",
              "fracción",
              "fraction"
             ],
             "× 16",
             [
              "dígit",
              "dígito",
              "digit"
             ]
            ],
            "rows": [
             [
              "0,40625",
              "6,5",
              "6"
             ],
             [
              "0,5",
              "8",
              "8"
             ]
            ]
           },
           "why": [
            "La part fraccionària arriba a 0: el resultat és exacte. Els dígits es llegeixen de dalt cap avall.",
            "La parte fraccionaria llega a 0: el resultado es exacto. Los dígitos se leen de arriba abajo.",
            "The fractional part reaches 0: the result is exact. The digits are read from top to bottom."
           ],
           "x": [
            "**Part fraccionària: multiplicacions successives per 16**\nA cada fila: multiplica la fracció per 16. La part entera del resultat (de 0 a 15) és el dígit següent; a la fila de sota continues només amb la part de després de la coma. Para quan la fracció surt 0 o quan torna a sortir una fracció que ja havies tingut.",
            "**Parte fraccionaria: multiplicaciones sucesivas por 16**\nEn cada fila: multiplica la fracción por 16. La parte entera del resultado (de 0 a 15) es el dígito siguiente; en la fila de abajo sigues solo con la parte de después de la coma. Para cuando la fracción sale 0 o cuando vuelve a salir una fracción que ya habías tenido.",
            "**Fractional part: successive multiplications by 16**\nIn each row: multiply the fraction by 16. The integer part of the result (from 0 to 15) is the next digit; in the row below you continue only with the part after the point. Stop when the fraction comes out 0 or when a fraction you already had comes up again."
           ]
          },
          {
           "done": true,
           "x": [
            "**Resultat**\n`27,32₍₈₎ = 17,68₍₁₆₎`",
            "**Resultado**\n`27,32₍₈₎ = 17,68₍₁₆₎`",
            "**Result**\n`27.32₍₈₎ = 17.68₍₁₆₎`"
           ]
          }
         ],
         "t": "steps"
        }
       ],
       "t": "details",
       "title": [
        "Una altra manera: amb el TFN, passant per base 10",
        "Otra manera: con el TFN, pasando por base 10",
        "Another way: with the PNT, going through base 10"
       ]
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-cb2-1",
       "cfg": {
        "x": "27,32",
        "a": 8,
        "b": 16
       }
      }
     }
    },
    {
     "l": "3",
     "q": "`A,8₍₁₆₎` → base 2",
     "a": {
      "k": "dig",
      "v": "1010,1",
      "show": "1010,1₍₂₎"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Cada dígit es converteix en 4 bits**\n`A→1010  ,  8→1000`\nA,8₍₁₆₎ = 1010,1000₍₂₎",
          "**Cada dígito se convierte en 4 bits**\n`A→1010  ,  8→1000`\nA,8₍₁₆₎ = 1010,1000₍₂₎",
          "**Each digit becomes 4 bits**\n`A→1010  .  8→1000`\nA.8₍₁₆₎ = 1010.1000₍₂₎"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat (traient zeros que no compten)**\n`1010,1₍₂₎`",
          "**Resultado (quitando ceros que no cuentan)**\n`1010,1₍₂₎`",
          "**Result (removing zeros that do not count)**\n`1010.1₍₂₎`"
         ]
        }
       ],
       "t": "steps"
      },
      {
       "blocks": [
        {
         "t": "p",
         "x": [
          "Aquest camí **funciona sempre**, entre qualsevol parell de bases: TFN per passar a base 10 i divisions successives per sortir-ne. Agrupar bits és una **drecera** que només serveix entre les bases 2, 8 i 16 (perquè 8 = 2³ i 16 = 2⁴) i estalvia els comptes grossos. Totes dues donen el mateix resultat.",
          "Este camino **funciona siempre**, entre cualquier par de bases: TFN para pasar a base 10 y divisiones sucesivas para salir de ella. Agrupar bits es un **atajo** que solo sirve entre las bases 2, 8 y 16 (porque 8 = 2³ y 16 = 2⁴) y ahorra las cuentas grandes. Los dos dan el mismo resultado.",
          "This route **always works**, between any pair of bases: PNT to go to base 10 and successive divisions to leave it. Grouping bits is a **shortcut** that only works between bases 2, 8 and 16 (because 8 = 2³ and 16 = 2⁴) and saves the big calculations. Both give the same result."
         ]
        },
        {
         "steps": [
          {
           "why": [
            "Les lletres valen: A = 10.",
            "Las letras valen: A = 10.",
            "The letters are worth: A = 10."
           ],
           "x": [
            "**Pas 1 · De base 16 a base 10 (TFN)**\n`A,8₍₁₆₎ = A(10)·16⁰ + 8·16⁻¹`",
            "**Paso 1 · De base 16 a base 10 (TFN)**\n`A,8₍₁₆₎ = A(10)·16⁰ + 8·16⁻¹`",
            "**Step 1 · From base 16 to base 10 (PNT)**\n`A.8₍₁₆₎ = A(10)·16⁰ + 8·16⁻¹`"
           ]
          },
          {
           "x": [
            "`Part entera: 10 = 10`",
            "`Parte entera: 10 = 10`",
            "`Integer part: 10 = 10`"
           ]
          },
          {
           "x": [
            "`Part fraccionària: 8/16 = 0,5`",
            "`Parte fraccionaria: 8/16 = 0,5`",
            "`Fractional part: 8/16 = 0.5`"
           ]
          },
          {
           "x": "`A,8₍₁₆₎ = 10,5₍₁₀₎`"
          },
          {
           "table": {
            "head": [
             "n",
             "n ÷ 2",
             [
              "residu",
              "resto",
              "remainder"
             ]
            ],
            "rows": [
             [
              "10",
              "5",
              "0"
             ],
             [
              "5",
              "2",
              "1"
             ],
             [
              "2",
              "1",
              "0"
             ],
             [
              "1",
              "0",
              "1"
             ]
            ]
           },
           "why": [
            "Es llegeixen els residus de baix cap amunt: 10₍₁₀₎ = 1010₍₂₎.",
            "Se leen los restos de abajo arriba: 10₍₁₀₎ = 1010₍₂₎.",
            "The remainders are read from bottom to top: 10₍₁₀₎ = 1010₍₂₎."
           ],
           "x": [
            "**Pas 2 · Part entera: divisions successives per 2**",
            "**Paso 2 · Parte entera: divisiones sucesivas por 2**",
            "**Step 2 · Integer part: successive divisions by 2**"
           ]
          },
          {
           "table": {
            "head": [
             [
              "fracció",
              "fracción",
              "fraction"
             ],
             "× 2",
             [
              "dígit",
              "dígito",
              "digit"
             ]
            ],
            "rows": [
             [
              "0,5",
              "1",
              "1"
             ]
            ]
           },
           "why": [
            "La part fraccionària arriba a 0: el resultat és exacte. Els dígits es llegeixen de dalt cap avall.",
            "La parte fraccionaria llega a 0: el resultado es exacto. Los dígitos se leen de arriba abajo.",
            "The fractional part reaches 0: the result is exact. The digits are read from top to bottom."
           ],
           "x": [
            "**Part fraccionària: multiplicacions successives per 2**\nA cada fila: multiplica la fracció per 2. La part entera del resultat (0 o 1) és el dígit següent; a la fila de sota continues només amb la part de després de la coma. Para quan la fracció surt 0 o quan torna a sortir una fracció que ja havies tingut.",
            "**Parte fraccionaria: multiplicaciones sucesivas por 2**\nEn cada fila: multiplica la fracción por 2. La parte entera del resultado (0 o 1) es el dígito siguiente; en la fila de abajo sigues solo con la parte de después de la coma. Para cuando la fracción sale 0 o cuando vuelve a salir una fracción que ya habías tenido.",
            "**Fractional part: successive multiplications by 2**\nIn each row: multiply the fraction by 2. The integer part of the result (0 or 1) is the next digit; in the row below you continue only with the part after the point. Stop when the fraction comes out 0 or when a fraction you already had comes up again."
           ]
          },
          {
           "done": true,
           "x": [
            "**Resultat**\n`A,8₍₁₆₎ = 1010,1₍₂₎`",
            "**Resultado**\n`A,8₍₁₆₎ = 1010,1₍₂₎`",
            "**Result**\n`A.8₍₁₆₎ = 1010.1₍₂₎`"
           ]
          }
         ],
         "t": "steps"
        }
       ],
       "t": "details",
       "title": [
        "Una altra manera: amb el TFN, passant per base 10",
        "Otra manera: con el TFN, pasando por base 10",
        "Another way: with the PNT, going through base 10"
       ]
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-cb2-2",
       "cfg": {
        "x": "A,8",
        "a": 16,
        "b": 2
       }
      }
     }
    },
    {
     "l": "4",
     "q": "`1101,011₍₂₎` → base 8",
     "a": {
      "k": "dig",
      "v": "15,3",
      "show": "15,3₍₈₎"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "A l'esquerra de la coma s'omple amb zeros per l'esquerra; a la dreta, per la dreta.",
          "A la izquierda de la coma se rellena con ceros por la izquierda; a la derecha, por la derecha.",
          "To the left of the point pad with zeros on the left; to the right, on the right."
         ],
         "x": [
          "**Agrupem de 3 en 3 a partir de la coma**\n`001 101 , 011`",
          "**Agrupamos de 3 en 3 a partir de la coma**\n`001 101 , 011`",
          "**We group in threes from the point**\n`001 101 . 011`"
         ]
        },
        {
         "x": [
          "**Cada grup és un dígit**\n`001→1  101→5  ,  011→3`",
          "**Cada grupo es un dígito**\n`001→1  101→5  ,  011→3`",
          "**Each group is a digit**\n`001→1  101→5  .  011→3`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`1101,011₍₂₎ = 15,3₍₈₎`",
          "**Resultado**\n`1101,011₍₂₎ = 15,3₍₈₎`",
          "**Result**\n`1101.011₍₂₎ = 15.3₍₈₎`"
         ]
        }
       ],
       "t": "steps"
      },
      {
       "blocks": [
        {
         "t": "p",
         "x": [
          "Aquest camí **funciona sempre**, entre qualsevol parell de bases: TFN per passar a base 10 i divisions successives per sortir-ne. Agrupar bits és una **drecera** que només serveix entre les bases 2, 8 i 16 (perquè 8 = 2³ i 16 = 2⁴) i estalvia els comptes grossos. Totes dues donen el mateix resultat.",
          "Este camino **funciona siempre**, entre cualquier par de bases: TFN para pasar a base 10 y divisiones sucesivas para salir de ella. Agrupar bits es un **atajo** que solo sirve entre las bases 2, 8 y 16 (porque 8 = 2³ y 16 = 2⁴) y ahorra las cuentas grandes. Los dos dan el mismo resultado.",
          "This route **always works**, between any pair of bases: PNT to go to base 10 and successive divisions to leave it. Grouping bits is a **shortcut** that only works between bases 2, 8 and 16 (because 8 = 2³ and 16 = 2⁴) and saves the big calculations. Both give the same result."
         ]
        },
        {
         "steps": [
          {
           "x": [
            "**Pas 1 · De base 2 a base 10 (TFN)**\n`1101,011₍₂₎ = 1·2³ + 1·2² + 0·2¹ + 1·2⁰ + 0·2⁻¹ + 1·2⁻² + 1·2⁻³`",
            "**Paso 1 · De base 2 a base 10 (TFN)**\n`1101,011₍₂₎ = 1·2³ + 1·2² + 0·2¹ + 1·2⁰ + 0·2⁻¹ + 1·2⁻² + 1·2⁻³`",
            "**Step 1 · From base 2 to base 10 (PNT)**\n`1101.011₍₂₎ = 1·2³ + 1·2² + 0·2¹ + 1·2⁰ + 0·2⁻¹ + 1·2⁻² + 1·2⁻³`"
           ]
          },
          {
           "x": [
            "`Part entera: 8 + 4 + 0 + 1 = 13`",
            "`Parte entera: 8 + 4 + 0 + 1 = 13`",
            "`Integer part: 8 + 4 + 0 + 1 = 13`"
           ]
          },
          {
           "x": [
            "`Part fraccionària: 0/2¹ + 1/2² + 1/2³ = 3/8 = 0,375`",
            "`Parte fraccionaria: 0/2¹ + 1/2² + 1/2³ = 3/8 = 0,375`",
            "`Fractional part: 0/2¹ + 1/2² + 1/2³ = 3/8 = 0.375`"
           ]
          },
          {
           "x": "`1101,011₍₂₎ = 13,375₍₁₀₎`"
          },
          {
           "table": {
            "head": [
             "n",
             "n ÷ 8",
             [
              "residu",
              "resto",
              "remainder"
             ]
            ],
            "rows": [
             [
              "13",
              "1",
              "5"
             ],
             [
              "1",
              "0",
              "1"
             ]
            ]
           },
           "why": [
            "Es llegeixen els residus de baix cap amunt: 13₍₁₀₎ = 15₍₈₎.",
            "Se leen los restos de abajo arriba: 13₍₁₀₎ = 15₍₈₎.",
            "The remainders are read from bottom to top: 13₍₁₀₎ = 15₍₈₎."
           ],
           "x": [
            "**Pas 2 · Part entera: divisions successives per 8**",
            "**Paso 2 · Parte entera: divisiones sucesivas por 8**",
            "**Step 2 · Integer part: successive divisions by 8**"
           ]
          },
          {
           "table": {
            "head": [
             [
              "fracció",
              "fracción",
              "fraction"
             ],
             "× 8",
             [
              "dígit",
              "dígito",
              "digit"
             ]
            ],
            "rows": [
             [
              "0,375",
              "3",
              "3"
             ]
            ]
           },
           "why": [
            "La part fraccionària arriba a 0: el resultat és exacte. Els dígits es llegeixen de dalt cap avall.",
            "La parte fraccionaria llega a 0: el resultado es exacto. Los dígitos se leen de arriba abajo.",
            "The fractional part reaches 0: the result is exact. The digits are read from top to bottom."
           ],
           "x": [
            "**Part fraccionària: multiplicacions successives per 8**\nA cada fila: multiplica la fracció per 8. La part entera del resultat (de 0 a 7) és el dígit següent; a la fila de sota continues només amb la part de després de la coma. Para quan la fracció surt 0 o quan torna a sortir una fracció que ja havies tingut.",
            "**Parte fraccionaria: multiplicaciones sucesivas por 8**\nEn cada fila: multiplica la fracción por 8. La parte entera del resultado (de 0 a 7) es el dígito siguiente; en la fila de abajo sigues solo con la parte de después de la coma. Para cuando la fracción sale 0 o cuando vuelve a salir una fracción que ya habías tenido.",
            "**Fractional part: successive multiplications by 8**\nIn each row: multiply the fraction by 8. The integer part of the result (from 0 to 7) is the next digit; in the row below you continue only with the part after the point. Stop when the fraction comes out 0 or when a fraction you already had comes up again."
           ]
          },
          {
           "done": true,
           "x": [
            "**Resultat**\n`1101,011₍₂₎ = 15,3₍₈₎`",
            "**Resultado**\n`1101,011₍₂₎ = 15,3₍₈₎`",
            "**Result**\n`1101.011₍₂₎ = 15.3₍₈₎`"
           ]
          }
         ],
         "t": "steps"
        }
       ],
       "t": "details",
       "title": [
        "Una altra manera: amb el TFN, passant per base 10",
        "Otra manera: con el TFN, pasando por base 10",
        "Another way: with the PNT, going through base 10"
       ]
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-cb2-3",
       "cfg": {
        "x": "1101,011",
        "a": 2,
        "b": 8
       }
      }
     }
    },
    {
     "l": "5",
     "q": "`34,12₍₅₎` → base 10",
     "a": {
      "k": "dig",
      "v": "19,28",
      "show": "19,28₍₁₀₎"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Pas 1 · De base 5 a base 10 (TFN)**\n`34,12₍₅₎ = 3·5¹ + 4·5⁰ + 1·5⁻¹ + 2·5⁻²`",
          "**Paso 1 · De base 5 a base 10 (TFN)**\n`34,12₍₅₎ = 3·5¹ + 4·5⁰ + 1·5⁻¹ + 2·5⁻²`",
          "**Step 1 · From base 5 to base 10 (PNT)**\n`34.12₍₅₎ = 3·5¹ + 4·5⁰ + 1·5⁻¹ + 2·5⁻²`"
         ]
        },
        {
         "x": [
          "`Part entera: 15 + 4 = 19`",
          "`Parte entera: 15 + 4 = 19`",
          "`Integer part: 15 + 4 = 19`"
         ]
        },
        {
         "x": [
          "`Part fraccionària: 1/5¹ + 2/5² = 7/25 = 0,28`",
          "`Parte fraccionaria: 1/5¹ + 2/5² = 7/25 = 0,28`",
          "`Fractional part: 1/5¹ + 2/5² = 7/25 = 0.28`"
         ]
        },
        {
         "x": "`34,12₍₅₎ = 19,28₍₁₀₎`",
         "done": true
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-cb2-4",
       "cfg": {
        "x": "34,12",
        "a": 5,
        "b": 10
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-op5",
   "unit": "t21",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T2.1 · Activitats: canvis de base i operacions · 3",
    "T2.1 · Actividades: cambios de base y operaciones · 3",
    "U2.1 · Activities: base conversions and operations · 3"
   ],
   "title": "3",
   "q": [
    "Operacions en diferents bases.",
    "Operaciones en diferentes bases.",
    "Operations in different bases."
   ],
   "hint": [
    "Columna a columna i de dreta a esquerra, pensant en decimal: si la suma arriba a la base, escrius el residu i te'n portes 1; si a la resta el dígit de dalt és petit, li sumes la base i en restes 1 a la columna següent.",
    "Columna a columna y de derecha a izquierda, pensando en decimal: si la suma llega a la base, escribes el resto y te llevas 1; si en la resta el dígito de arriba es pequeño, le sumas la base y restas 1 en la columna siguiente.",
    "Column by column and from right to left, thinking in decimal: if the sum reaches the base, you write the remainder and carry 1; if in a subtraction the top digit is small, you add the base to it and subtract 1 in the next column."
   ],
   "note": [
    "Escriu només els dígits (sense el subíndex de la base). Per als periòdics, posa el període entre parèntesis: 1000,(1100), o escriu com a mínim dos períodes.",
    "Escribe solo los dígitos (sin el subíndice de la base). Para los periódicos, pon el periodo entre paréntesis: 1000,(1100), o escribe como mínimo dos periodos.",
    "Write only the digits (without the base subscript). For repeating ones, put the period in parentheses: 1000.(1100), or write at least two periods."
   ],
   "parts": [
    {
     "l": "1",
     "q": "`101101₍₂₎ + 11011₍₂₎`",
     "a": {
      "k": "dig",
      "v": "1001000",
      "show": "1001000₍₂₎"
     },
     "sol": [
      {
       "steps": [
        {
         "table": {
          "head": [
           "columna",
           [
            "càlcul (en decimal)",
            "cálculo (en decimal)",
            "calculation (in decimal)"
           ],
           [
            "escric",
            "escribo",
            "I write"
           ],
           [
            "em porto",
            "me llevo",
            "I carry"
           ]
          ],
          "rows": [
           [
            "1",
            "1 + 1 = 2 = 1·2 + 0",
            "0",
            "1"
           ],
           [
            "2",
            "0 + 1 + 1 = 2 = 1·2 + 0",
            "0",
            "1"
           ],
           [
            "3",
            "1 + 0 + 1 = 2 = 1·2 + 0",
            "0",
            "1"
           ],
           [
            "4",
            "1 + 1 + 1 = 3 = 1·2 + 1",
            "1",
            "1"
           ],
           [
            "5",
            "0 + 1 + 1 = 2 = 1·2 + 0",
            "0",
            "1"
           ],
           [
            "6",
            "1 + 0 + 1 = 2 = 1·2 + 0",
            "0",
            "1"
           ],
           [
            "7",
            "0 + 0 + 1 = 1",
            "1",
            "—"
           ]
          ]
         },
         "why": [
          "Quan la suma d'una columna arriba a 2, escrivim el residu i ens en portem 1.",
          "Cuando la suma de una columna llega a 2, escribimos el resto y nos llevamos 1.",
          "When the sum of a column reaches 2, we write the remainder and carry 1."
         ],
         "x": [
          "**Suma columna a columna, de dreta a esquerra**",
          "**Suma columna a columna, de derecha a izquierda**",
          "**Addition column by column, from right to left**"
         ]
        },
        {
         "done": true,
         "why": [
          "Comprovació en decimal: 45 + 27 = 72 = 1001000₍₂₎.",
          "Comprobación en decimal: 45 + 27 = 72 = 1001000₍₂₎.",
          "Check in decimal: 45 + 27 = 72 = 1001000₍₂₎."
         ],
         "x": [
          "**Resultat**\n`101101₍₂₎ + 11011₍₂₎ = 1001000₍₂₎`",
          "**Resultado**\n`101101₍₂₎ + 11011₍₂₎ = 1001000₍₂₎`",
          "**Result**\n`101101₍₂₎ + 11011₍₂₎ = 1001000₍₂₎`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "arith",
      "props": {
       "id": "exl-op5-0",
       "cfg": {
        "a": "101101",
        "b": "11011",
        "base": 2,
        "op": "+"
       }
      }
     }
    },
    {
     "l": "2",
     "q": "`1100101₍₂₎ − 101101₍₂₎`",
     "a": {
      "k": "dig",
      "v": "111000",
      "show": "111000₍₂₎"
     },
     "sol": [
      {
       "t": "warn",
       "x": [
        "El full posa «+», però el títol demana una **resta**. Si fos suma: 1100101₍₂₎ + 101101₍₂₎ = 10010010₍₂₎ (101 + 45 = 146).",
        "La hoja pone «+», pero el título pide una **resta**. Si fuera suma: 1100101₍₂₎ + 101101₍₂₎ = 10010010₍₂₎ (101 + 45 = 146).",
        "The sheet says “+”, but the title asks for a **subtraction**. If it were an addition: 1100101₍₂₎ + 101101₍₂₎ = 10010010₍₂₎ (101 + 45 = 146)."
       ]
      },
      {
       "steps": [
        {
         "table": {
          "head": [
           "columna",
           [
            "càlcul (en decimal)",
            "cálculo (en decimal)",
            "calculation (in decimal)"
           ],
           [
            "escric",
            "escribo",
            "I write"
           ],
           [
            "préstec",
            "préstamo",
            "borrow"
           ]
          ],
          "rows": [
           [
            "1",
            "1 − 1 = 0",
            "0",
            "—"
           ],
           [
            "2",
            "0 − 0 = 0",
            "0",
            "—"
           ],
           [
            "3",
            "1 − 1 = 0",
            "0",
            "—"
           ],
           [
            "4",
            "(0 + 2) − 1 = 1",
            "1",
            "1"
           ],
           [
            "5",
            "(0 + 2) − 0 − 1 = 1",
            "1",
            "1"
           ],
           [
            "6",
            "(1 + 2) − 1 − 1 = 1",
            "1",
            "1"
           ],
           [
            "7",
            "1 − 0 − 1 = 0",
            "0",
            "—"
           ]
          ]
         },
         "why": [
          "Quan el dígit de dalt és més petit, en demanem 2 a la columna següent (préstec) i allà restem 1 de més.",
          "Cuando el dígito de arriba es menor, pedimos 2 a la columna siguiente (préstamo) y allí restamos 1 de más.",
          "When the top digit is smaller, we borrow 2 from the next column (borrow) and subtract 1 more there."
         ],
         "x": [
          "**Resta columna a columna, de dreta a esquerra**",
          "**Resta columna a columna, de derecha a izquierda**",
          "**Subtraction column by column, from right to left**"
         ]
        },
        {
         "done": true,
         "why": [
          "Comprovació en decimal: 101 − 45 = 56 = 111000₍₂₎.",
          "Comprobación en decimal: 101 − 45 = 56 = 111000₍₂₎.",
          "Check in decimal: 101 − 45 = 56 = 111000₍₂₎."
         ],
         "x": [
          "**Resultat**\n`1100101₍₂₎ − 101101₍₂₎ = 111000₍₂₎`",
          "**Resultado**\n`1100101₍₂₎ − 101101₍₂₎ = 111000₍₂₎`",
          "**Result**\n`1100101₍₂₎ − 101101₍₂₎ = 111000₍₂₎`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "arith",
      "props": {
       "id": "exl-op5-1",
       "cfg": {
        "a": "1100101",
        "b": "101101",
        "base": 2,
        "op": "-"
       }
      }
     }
    },
    {
     "l": "3",
     "q": "`572₍₈₎ + 346₍₈₎`",
     "a": {
      "k": "dig",
      "v": "1140",
      "show": "1140₍₈₎"
     },
     "sol": [
      {
       "steps": [
        {
         "table": {
          "head": [
           "columna",
           [
            "càlcul (en decimal)",
            "cálculo (en decimal)",
            "calculation (in decimal)"
           ],
           [
            "escric",
            "escribo",
            "I write"
           ],
           [
            "em porto",
            "me llevo",
            "I carry"
           ]
          ],
          "rows": [
           [
            "1",
            "2 + 6 = 8 = 1·8 + 0",
            "0",
            "1"
           ],
           [
            "2",
            "7 + 4 + 1 = 12 = 1·8 + 4",
            "4",
            "1"
           ],
           [
            "3",
            "5 + 3 + 1 = 9 = 1·8 + 1",
            "1",
            "1"
           ],
           [
            "4",
            "0 + 0 + 1 = 1",
            "1",
            "—"
           ]
          ]
         },
         "why": [
          "Quan la suma d'una columna arriba a 8, escrivim el residu i ens en portem 1.",
          "Cuando la suma de una columna llega a 8, escribimos el resto y nos llevamos 1.",
          "When the sum of a column reaches 8, we write the remainder and carry 1."
         ],
         "x": [
          "**Suma columna a columna, de dreta a esquerra**",
          "**Suma columna a columna, de derecha a izquierda**",
          "**Addition column by column, from right to left**"
         ]
        },
        {
         "done": true,
         "why": [
          "Comprovació en decimal: 378 + 230 = 608 = 1140₍₈₎.",
          "Comprobación en decimal: 378 + 230 = 608 = 1140₍₈₎.",
          "Check in decimal: 378 + 230 = 608 = 1140₍₈₎."
         ],
         "x": [
          "**Resultat**\n`572₍₈₎ + 346₍₈₎ = 1140₍₈₎`",
          "**Resultado**\n`572₍₈₎ + 346₍₈₎ = 1140₍₈₎`",
          "**Result**\n`572₍₈₎ + 346₍₈₎ = 1140₍₈₎`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "arith",
      "props": {
       "id": "exl-op5-2",
       "cfg": {
        "a": "572",
        "b": "346",
        "base": 8,
        "op": "+"
       }
      }
     }
    },
    {
     "l": "4",
     "q": "`3A7₍₁₆₎ − 1C9₍₁₆₎`",
     "a": {
      "k": "dig",
      "v": "1DE",
      "show": "1DE₍₁₆₎"
     },
     "sol": [
      {
       "t": "warn",
       "x": [
        "Igual que al 2: posa «+» però demana una resta. Si fos suma: 3A7₍₁₆₎ + 1C9₍₁₆₎ = 570₍₁₆₎ (935 + 457 = 1 392).",
        "Igual que en el 2: pone «+» pero pide una resta. Si fuera suma: 3A7₍₁₆₎ + 1C9₍₁₆₎ = 570₍₁₆₎ (935 + 457 = 1 392).",
        "As in 2: it says “+” but asks for a subtraction. If it were an addition: 3A7₍₁₆₎ + 1C9₍₁₆₎ = 570₍₁₆₎ (935 + 457 = 1 392)."
       ]
      },
      {
       "steps": [
        {
         "table": {
          "head": [
           "columna",
           [
            "càlcul (en decimal)",
            "cálculo (en decimal)",
            "calculation (in decimal)"
           ],
           [
            "escric",
            "escribo",
            "I write"
           ],
           [
            "préstec",
            "préstamo",
            "borrow"
           ]
          ],
          "rows": [
           [
            "1",
            "(7 + 16) − 9 = 14",
            "E",
            "1"
           ],
           [
            "2",
            "(A + 16) − C − 1 = 13",
            "D",
            "1"
           ],
           [
            "3",
            "3 − 1 − 1 = 1",
            "1",
            "—"
           ]
          ]
         },
         "why": [
          "Quan el dígit de dalt és més petit, en demanem 16 a la columna següent (préstec) i allà restem 1 de més.",
          "Cuando el dígito de arriba es menor, pedimos 16 a la columna siguiente (préstamo) y allí restamos 1 de más.",
          "When the top digit is smaller, we borrow 16 from the next column (borrow) and subtract 1 more there."
         ],
         "x": [
          "**Resta columna a columna, de dreta a esquerra**",
          "**Resta columna a columna, de derecha a izquierda**",
          "**Subtraction column by column, from right to left**"
         ]
        },
        {
         "done": true,
         "why": [
          "Comprovació en decimal: 935 − 457 = 478 = 1DE₍₁₆₎.",
          "Comprobación en decimal: 935 − 457 = 478 = 1DE₍₁₆₎.",
          "Check in decimal: 935 − 457 = 478 = 1DE₍₁₆₎."
         ],
         "x": [
          "**Resultat**\n`3A7₍₁₆₎ − 1C9₍₁₆₎ = 1DE₍₁₆₎`",
          "**Resultado**\n`3A7₍₁₆₎ − 1C9₍₁₆₎ = 1DE₍₁₆₎`",
          "**Result**\n`3A7₍₁₆₎ − 1C9₍₁₆₎ = 1DE₍₁₆₎`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "arith",
      "props": {
       "id": "exl-op5-3",
       "cfg": {
        "a": "3A7",
        "b": "1C9",
        "base": 16,
        "op": "-"
       }
      }
     }
    },
    {
     "l": "5a",
     "q": "`3241₍₅₎ + 1432₍₅₎`",
     "a": {
      "k": "dig",
      "v": "10223",
      "show": "10223₍₅₎"
     },
     "sol": [
      {
       "steps": [
        {
         "table": {
          "head": [
           "columna",
           [
            "càlcul (en decimal)",
            "cálculo (en decimal)",
            "calculation (in decimal)"
           ],
           [
            "escric",
            "escribo",
            "I write"
           ],
           [
            "em porto",
            "me llevo",
            "I carry"
           ]
          ],
          "rows": [
           [
            "1",
            "1 + 2 = 3",
            "3",
            "—"
           ],
           [
            "2",
            "4 + 3 = 7 = 1·5 + 2",
            "2",
            "1"
           ],
           [
            "3",
            "2 + 4 + 1 = 7 = 1·5 + 2",
            "2",
            "1"
           ],
           [
            "4",
            "3 + 1 + 1 = 5 = 1·5 + 0",
            "0",
            "1"
           ],
           [
            "5",
            "0 + 0 + 1 = 1",
            "1",
            "—"
           ]
          ]
         },
         "why": [
          "Quan la suma d'una columna arriba a 5, escrivim el residu i ens en portem 1.",
          "Cuando la suma de una columna llega a 5, escribimos el resto y nos llevamos 1.",
          "When the sum of a column reaches 5, we write the remainder and carry 1."
         ],
         "x": [
          "**Suma columna a columna, de dreta a esquerra**",
          "**Suma columna a columna, de derecha a izquierda**",
          "**Addition column by column, from right to left**"
         ]
        },
        {
         "done": true,
         "why": [
          "Comprovació en decimal: 446 + 242 = 688 = 10223₍₅₎.",
          "Comprobación en decimal: 446 + 242 = 688 = 10223₍₅₎.",
          "Check in decimal: 446 + 242 = 688 = 10223₍₅₎."
         ],
         "x": [
          "**Resultat**\n`3241₍₅₎ + 1432₍₅₎ = 10223₍₅₎`",
          "**Resultado**\n`3241₍₅₎ + 1432₍₅₎ = 10223₍₅₎`",
          "**Result**\n`3241₍₅₎ + 1432₍₅₎ = 10223₍₅₎`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "arith",
      "props": {
       "id": "exl-op5-4",
       "cfg": {
        "a": "3241",
        "b": "1432",
        "base": 5,
        "op": "+"
       }
      }
     }
    },
    {
     "l": "5b",
     "q": "`10223₍₅₎ − 2314₍₅₎`",
     "a": {
      "k": "dig",
      "v": "2404",
      "show": "2404₍₅₎"
     },
     "sol": [
      {
       "t": "warn",
       "x": [
        "Segona meitat de 3241₍₅₎ + 1432₍₅₎ − 2314₍₅₎: restem 2314₍₅₎ al resultat de la suma, 10223₍₅₎.",
        "Segunda mitad de 3241₍₅₎ + 1432₍₅₎ − 2314₍₅₎: restamos 2314₍₅₎ al resultado de la suma, 10223₍₅₎.",
        "Second half of 3241₍₅₎ + 1432₍₅₎ − 2314₍₅₎: we subtract 2314₍₅₎ from the result of the addition, 10223₍₅₎."
       ]
      },
      {
       "steps": [
        {
         "table": {
          "head": [
           "columna",
           [
            "càlcul (en decimal)",
            "cálculo (en decimal)",
            "calculation (in decimal)"
           ],
           [
            "escric",
            "escribo",
            "I write"
           ],
           [
            "préstec",
            "préstamo",
            "borrow"
           ]
          ],
          "rows": [
           [
            "1",
            "(3 + 5) − 4 = 4",
            "4",
            "1"
           ],
           [
            "2",
            "2 − 1 − 1 = 0",
            "0",
            "—"
           ],
           [
            "3",
            "(2 + 5) − 3 = 4",
            "4",
            "1"
           ],
           [
            "4",
            "(0 + 5) − 2 − 1 = 2",
            "2",
            "1"
           ],
           [
            "5",
            "1 − 0 − 1 = 0",
            "0",
            "—"
           ]
          ]
         },
         "why": [
          "Quan el dígit de dalt és més petit, en demanem 5 a la columna següent (préstec) i allà restem 1 de més.",
          "Cuando el dígito de arriba es menor, pedimos 5 a la columna siguiente (préstamo) y allí restamos 1 de más.",
          "When the top digit is smaller, we borrow 5 from the next column (borrow) and subtract 1 more there."
         ],
         "x": [
          "**Resta columna a columna, de dreta a esquerra**",
          "**Resta columna a columna, de derecha a izquierda**",
          "**Subtraction column by column, from right to left**"
         ]
        },
        {
         "done": true,
         "why": [
          "Comprovació en decimal: 688 − 334 = 354 = 2404₍₅₎.",
          "Comprobación en decimal: 688 − 334 = 354 = 2404₍₅₎.",
          "Check in decimal: 688 − 334 = 354 = 2404₍₅₎."
         ],
         "x": [
          "**Resultat**\n`10223₍₅₎ − 2314₍₅₎ = 2404₍₅₎`",
          "**Resultado**\n`10223₍₅₎ − 2314₍₅₎ = 2404₍₅₎`",
          "**Result**\n`10223₍₅₎ − 2314₍₅₎ = 2404₍₅₎`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "arith",
      "props": {
       "id": "exl-op5-5",
       "cfg": {
        "a": "10223",
        "b": "2314",
        "base": 5,
        "op": "-"
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-sm",
   "unit": "t21",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T2.1 · Activitats: enters amb signe i IEEE 754 · SM",
    "T2.1 · Actividades: enteros con signo e IEEE 754 · SM",
    "U2.1 · Activities: signed integers and IEEE 754 · SM"
   ],
   "title": "SM",
   "q": [
    "Representa en **signe i magnitud**.",
    "Representa en **signo y magnitud**.",
    "Represent in **sign and magnitude**."
   ],
   "hint": [
    "Primer bit: 0 positiu, 1 negatiu. La resta de bits és el valor absolut en binari, omplert amb zeros fins a N − 1 bits.",
    "Primer bit: 0 positivo, 1 negativo. El resto de bits es el valor absoluto en binario, rellenado con ceros hasta N − 1 bits.",
    "First bit: 0 positive, 1 negative. The other bits are the absolute value in binary, padded with zeros up to N − 1 bits."
   ],
   "note": [
    "Escriu tots els bits, també els zeros de l'esquerra. Si escrius la codificació d'un altre sistema, la correcció t'ho dirà.",
    "Escribe todos los bits, también los ceros de la izquierda. Si escribes la codificación de otro sistema, la corrección te lo dirá.",
    "Write all the bits, including the zeros on the left. If you write the encoding of another system, the marking will tell you."
   ],
   "parts": [
    {
     "l": "1",
     "q": [
      "`+13` → SM amb 8 bits",
      "`+13` → SM con 8 bits",
      "`+13` → SM with 8 bits"
     ],
     "a": {
      "k": "bits",
      "v": "00001101",
      "show": "00001101₍SM₎",
      "alt": [
       {
        "v": "10001101",
        "msg": [
         "Això és la representació en CE, no en SM.",
         "Eso es la representación en CE, no en SM.",
         "That is the excess-code representation, not SM."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`13₍₁₀₎ = 1101₍₂₎`",
          "**Valor absoluto en binario**\n`13₍₁₀₎ = 1101₍₂₎`",
          "**Absolute value in binary**\n`13₍₁₀₎ = 1101₍₂₎`"
         ]
        },
        {
         "why": [
          "El primer bit queda reservat per al signe.",
          "El primer bit queda reservado para el signo.",
          "The first bit is reserved for the sign."
         ],
         "x": [
          "**Magnitud amb 7 bits**\n`0001101`",
          "**Magnitud con 7 bits**\n`0001101`",
          "**Magnitude with 7 bits**\n`0001101`"
         ]
        },
        {
         "x": [
          "**Bit de signe**\n`0 (positiu)`",
          "**Bit de signo**\n`0 (positivo)`",
          "**Sign bit**\n`0 (positive)`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+13 = 0 0001101  →  00001101_SM`",
          "**Resultado**\n`+13 = 0 0001101  →  00001101_SM`",
          "**Result**\n`+13 = 0 0001101  →  00001101_SM`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-sm-0",
       "cfg": {
        "mode": "enc",
        "sys": "SM",
        "n": 13,
        "N": 8
       }
      }
     }
    },
    {
     "l": "2",
     "q": [
      "`−25` → SM amb 8 bits",
      "`−25` → SM con 8 bits",
      "`−25` → SM with 8 bits"
     ],
     "a": {
      "k": "bits",
      "v": "10011001",
      "show": "10011001₍SM₎",
      "alt": [
       {
        "v": "11100110",
        "msg": [
         "Això és la representació en C1, no en SM.",
         "Eso es la representación en C1, no en SM.",
         "That is the 1C representation, not SM."
        ]
       },
       {
        "v": "11100111",
        "msg": [
         "Això és la representació en C2, no en SM.",
         "Eso es la representación en C2, no en SM.",
         "That is the 2C representation, not SM."
        ]
       },
       {
        "v": "01100111",
        "msg": [
         "Això és la representació en CE, no en SM.",
         "Eso es la representación en CE, no en SM.",
         "That is the excess-code representation, not SM."
        ]
       },
       {
        "v": "00011001",
        "msg": [
         "Aquest és +25. Falta codificar el signe negatiu.",
         "Este es +25. Falta codificar el signo negativo.",
         "This is +25. The negative sign still has to be encoded."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`25₍₁₀₎ = 11001₍₂₎`",
          "**Valor absoluto en binario**\n`25₍₁₀₎ = 11001₍₂₎`",
          "**Absolute value in binary**\n`25₍₁₀₎ = 11001₍₂₎`"
         ]
        },
        {
         "why": [
          "El primer bit queda reservat per al signe.",
          "El primer bit queda reservado para el signo.",
          "The first bit is reserved for the sign."
         ],
         "x": [
          "**Magnitud amb 7 bits**\n`0011001`",
          "**Magnitud con 7 bits**\n`0011001`",
          "**Magnitude with 7 bits**\n`0011001`"
         ]
        },
        {
         "x": [
          "**Bit de signe**\n`1 (negatiu)`",
          "**Bit de signo**\n`1 (negativo)`",
          "**Sign bit**\n`1 (negative)`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`−25 = 1 0011001  →  10011001_SM`",
          "**Resultado**\n`−25 = 1 0011001  →  10011001_SM`",
          "**Result**\n`−25 = 1 0011001  →  10011001_SM`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-sm-1",
       "cfg": {
        "mode": "enc",
        "sys": "SM",
        "n": -25,
        "N": 8
       }
      }
     }
    },
    {
     "l": "3",
     "q": [
      "`−45` → SM amb 10 bits",
      "`−45` → SM con 10 bits",
      "`−45` → SM with 10 bits"
     ],
     "a": {
      "k": "bits",
      "v": "1000101101",
      "show": "1000101101₍SM₎",
      "alt": [
       {
        "v": "1111010010",
        "msg": [
         "Això és la representació en C1, no en SM.",
         "Eso es la representación en C1, no en SM.",
         "That is the 1C representation, not SM."
        ]
       },
       {
        "v": "1111010011",
        "msg": [
         "Això és la representació en C2, no en SM.",
         "Eso es la representación en C2, no en SM.",
         "That is the 2C representation, not SM."
        ]
       },
       {
        "v": "0111010011",
        "msg": [
         "Això és la representació en CE, no en SM.",
         "Eso es la representación en CE, no en SM.",
         "That is the excess-code representation, not SM."
        ]
       },
       {
        "v": "0000101101",
        "msg": [
         "Aquest és +45. Falta codificar el signe negatiu.",
         "Este es +45. Falta codificar el signo negativo.",
         "This is +45. The negative sign still has to be encoded."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`45₍₁₀₎ = 101101₍₂₎`",
          "**Valor absoluto en binario**\n`45₍₁₀₎ = 101101₍₂₎`",
          "**Absolute value in binary**\n`45₍₁₀₎ = 101101₍₂₎`"
         ]
        },
        {
         "why": [
          "El primer bit queda reservat per al signe.",
          "El primer bit queda reservado para el signo.",
          "The first bit is reserved for the sign."
         ],
         "x": [
          "**Magnitud amb 9 bits**\n`000101101`",
          "**Magnitud con 9 bits**\n`000101101`",
          "**Magnitude with 9 bits**\n`000101101`"
         ]
        },
        {
         "x": [
          "**Bit de signe**\n`1 (negatiu)`",
          "**Bit de signo**\n`1 (negativo)`",
          "**Sign bit**\n`1 (negative)`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`−45 = 1 000101101  →  1000101101_SM`",
          "**Resultado**\n`−45 = 1 000101101  →  1000101101_SM`",
          "**Result**\n`−45 = 1 000101101  →  1000101101_SM`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-sm-2",
       "cfg": {
        "mode": "enc",
        "sys": "SM",
        "n": -45,
        "N": 10
       }
      }
     }
    },
    {
     "l": "4",
     "q": [
      "`+76` → SM amb 12 bits",
      "`+76` → SM con 12 bits",
      "`+76` → SM with 12 bits"
     ],
     "a": {
      "k": "bits",
      "v": "000001001100",
      "show": "000001001100₍SM₎",
      "alt": [
       {
        "v": "100001001100",
        "msg": [
         "Això és la representació en CE, no en SM.",
         "Eso es la representación en CE, no en SM.",
         "That is the excess-code representation, not SM."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`76₍₁₀₎ = 1001100₍₂₎`",
          "**Valor absoluto en binario**\n`76₍₁₀₎ = 1001100₍₂₎`",
          "**Absolute value in binary**\n`76₍₁₀₎ = 1001100₍₂₎`"
         ]
        },
        {
         "why": [
          "El primer bit queda reservat per al signe.",
          "El primer bit queda reservado para el signo.",
          "The first bit is reserved for the sign."
         ],
         "x": [
          "**Magnitud amb 11 bits**\n`00001001100`",
          "**Magnitud con 11 bits**\n`00001001100`",
          "**Magnitude with 11 bits**\n`00001001100`"
         ]
        },
        {
         "x": [
          "**Bit de signe**\n`0 (positiu)`",
          "**Bit de signo**\n`0 (positivo)`",
          "**Sign bit**\n`0 (positive)`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+76 = 0 00001001100  →  000001001100_SM`",
          "**Resultado**\n`+76 = 0 00001001100  →  000001001100_SM`",
          "**Result**\n`+76 = 0 00001001100  →  000001001100_SM`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-sm-3",
       "cfg": {
        "mode": "enc",
        "sys": "SM",
        "n": 76,
        "N": 12
       }
      }
     }
    },
    {
     "l": "5",
     "q": [
      "`−157` → SM amb 16 bits",
      "`−157` → SM con 16 bits",
      "`−157` → SM with 16 bits"
     ],
     "a": {
      "k": "bits",
      "v": "1000000010011101",
      "show": "1000000010011101₍SM₎",
      "alt": [
       {
        "v": "1111111101100010",
        "msg": [
         "Això és la representació en C1, no en SM.",
         "Eso es la representación en C1, no en SM.",
         "That is the 1C representation, not SM."
        ]
       },
       {
        "v": "1111111101100011",
        "msg": [
         "Això és la representació en C2, no en SM.",
         "Eso es la representación en C2, no en SM.",
         "That is the 2C representation, not SM."
        ]
       },
       {
        "v": "0111111101100011",
        "msg": [
         "Això és la representació en CE, no en SM.",
         "Eso es la representación en CE, no en SM.",
         "That is the excess-code representation, not SM."
        ]
       },
       {
        "v": "0000000010011101",
        "msg": [
         "Aquest és +157. Falta codificar el signe negatiu.",
         "Este es +157. Falta codificar el signo negativo.",
         "This is +157. The negative sign still has to be encoded."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`157₍₁₀₎ = 10011101₍₂₎`",
          "**Valor absoluto en binario**\n`157₍₁₀₎ = 10011101₍₂₎`",
          "**Absolute value in binary**\n`157₍₁₀₎ = 10011101₍₂₎`"
         ]
        },
        {
         "why": [
          "El primer bit queda reservat per al signe.",
          "El primer bit queda reservado para el signo.",
          "The first bit is reserved for the sign."
         ],
         "x": [
          "**Magnitud amb 15 bits**\n`000000010011101`",
          "**Magnitud con 15 bits**\n`000000010011101`",
          "**Magnitude with 15 bits**\n`000000010011101`"
         ]
        },
        {
         "x": [
          "**Bit de signe**\n`1 (negatiu)`",
          "**Bit de signo**\n`1 (negativo)`",
          "**Sign bit**\n`1 (negative)`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`−157 = 1 000000010011101  →  1000000010011101_SM`",
          "**Resultado**\n`−157 = 1 000000010011101  →  1000000010011101_SM`",
          "**Result**\n`−157 = 1 000000010011101  →  1000000010011101_SM`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-sm-4",
       "cfg": {
        "mode": "enc",
        "sys": "SM",
        "n": -157,
        "N": 16
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-c1",
   "unit": "t21",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T2.1 · Activitats: enters amb signe i IEEE 754 · C1",
    "T2.1 · Actividades: enteros con signo e IEEE 754 · C1",
    "U2.1 · Activities: signed integers and IEEE 754 · 1C"
   ],
   "title": "C1",
   "q": [
    "Representa en **complement a 1**.",
    "Representa en **complemento a 1**.",
    "Represent in **ones' complement**."
   ],
   "hint": [
    "Positius: binari amb N bits. Negatius: escriu el positiu amb N bits i inverteix tots els bits.",
    "Positivos: binario con N bits. Negativos: escribe el positivo con N bits e invierte todos los bits.",
    "Positives: binary with N bits. Negatives: write the positive with N bits and invert all the bits."
   ],
   "note": [
    "Escriu tots els bits, també els zeros de l'esquerra. Si escrius la codificació d'un altre sistema, la correcció t'ho dirà.",
    "Escribe todos los bits, también los ceros de la izquierda. Si escribes la codificación de otro sistema, la corrección te lo dirá.",
    "Write all the bits, including the zeros on the left. If you write the encoding of another system, the marking will tell you."
   ],
   "parts": [
    {
     "l": "1",
     "q": [
      "`+18` → C1 amb 8 bits",
      "`+18` → C1 con 8 bits",
      "`+18` → 1C with 8 bits"
     ],
     "a": {
      "k": "bits",
      "v": "00010010",
      "show": "00010010₍C1₎",
      "alt": [
       {
        "v": "10010010",
        "msg": [
         "Això és la representació en CE, no en C1.",
         "Eso es la representación en CE, no en C1.",
         "That is the excess-code representation, not 1C."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`18₍₁₀₎ = 10010₍₂₎`",
          "**Valor absoluto en binario**\n`18₍₁₀₎ = 10010₍₂₎`",
          "**Absolute value in binary**\n`18₍₁₀₎ = 10010₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C1: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C1: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 1C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 8 bits**\n`+18 = 00010010`",
          "**Positivo con 8 bits**\n`+18 = 00010010`",
          "**Positive with 8 bits**\n`+18 = 00010010`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+18 = 00010010_C1`",
          "**Resultado**\n`+18 = 00010010_C1`",
          "**Result**\n`+18 = 00010010_C1`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-c1-0",
       "cfg": {
        "mode": "enc",
        "sys": "C1",
        "n": 18,
        "N": 8
       }
      }
     }
    },
    {
     "l": "2",
     "q": [
      "`−18` → C1 amb 8 bits",
      "`−18` → C1 con 8 bits",
      "`−18` → 1C with 8 bits"
     ],
     "a": {
      "k": "bits",
      "v": "11101101",
      "show": "11101101₍C1₎",
      "alt": [
       {
        "v": "10010010",
        "msg": [
         "Això és la representació en SM, no en C1.",
         "Eso es la representación en SM, no en C1.",
         "That is the SM representation, not 1C."
        ]
       },
       {
        "v": "11101110",
        "msg": [
         "Això és la representació en C2, no en C1.",
         "Eso es la representación en C2, no en C1.",
         "That is the 2C representation, not 1C."
        ]
       },
       {
        "v": "01101110",
        "msg": [
         "Això és la representació en CE, no en C1.",
         "Eso es la representación en CE, no en C1.",
         "That is the excess-code representation, not 1C."
        ]
       },
       {
        "v": "00010010",
        "msg": [
         "Aquest és +18. Falta codificar el signe negatiu.",
         "Este es +18. Falta codificar el signo negativo.",
         "This is +18. The negative sign still has to be encoded."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`18₍₁₀₎ = 10010₍₂₎`",
          "**Valor absoluto en binario**\n`18₍₁₀₎ = 10010₍₂₎`",
          "**Absolute value in binary**\n`18₍₁₀₎ = 10010₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C1: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C1: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 1C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 8 bits**\n`+18 = 00010010`",
          "**Positivo con 8 bits**\n`+18 = 00010010`",
          "**Positive with 8 bits**\n`+18 = 00010010`"
         ]
        },
        {
         "x": [
          "**Invertim tots els bits**\n`00010010 → 11101101`",
          "**Invertimos todos los bits**\n`00010010 → 11101101`",
          "**We invert all the bits**\n`00010010 → 11101101`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`−18 = 11101101_C1`",
          "**Resultado**\n`−18 = 11101101_C1`",
          "**Result**\n`−18 = 11101101_C1`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-c1-1",
       "cfg": {
        "mode": "enc",
        "sys": "C1",
        "n": -18,
        "N": 8
       }
      }
     }
    },
    {
     "l": "3",
     "q": [
      "`−37` → C1 amb 10 bits",
      "`−37` → C1 con 10 bits",
      "`−37` → 1C with 10 bits"
     ],
     "a": {
      "k": "bits",
      "v": "1111011010",
      "show": "1111011010₍C1₎",
      "alt": [
       {
        "v": "1000100101",
        "msg": [
         "Això és la representació en SM, no en C1.",
         "Eso es la representación en SM, no en C1.",
         "That is the SM representation, not 1C."
        ]
       },
       {
        "v": "1111011011",
        "msg": [
         "Això és la representació en C2, no en C1.",
         "Eso es la representación en C2, no en C1.",
         "That is the 2C representation, not 1C."
        ]
       },
       {
        "v": "0111011011",
        "msg": [
         "Això és la representació en CE, no en C1.",
         "Eso es la representación en CE, no en C1.",
         "That is the excess-code representation, not 1C."
        ]
       },
       {
        "v": "0000100101",
        "msg": [
         "Aquest és +37. Falta codificar el signe negatiu.",
         "Este es +37. Falta codificar el signo negativo.",
         "This is +37. The negative sign still has to be encoded."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`37₍₁₀₎ = 100101₍₂₎`",
          "**Valor absoluto en binario**\n`37₍₁₀₎ = 100101₍₂₎`",
          "**Absolute value in binary**\n`37₍₁₀₎ = 100101₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C1: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C1: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 1C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 10 bits**\n`+37 = 0000100101`",
          "**Positivo con 10 bits**\n`+37 = 0000100101`",
          "**Positive with 10 bits**\n`+37 = 0000100101`"
         ]
        },
        {
         "x": [
          "**Invertim tots els bits**\n`0000100101 → 1111011010`",
          "**Invertimos todos los bits**\n`0000100101 → 1111011010`",
          "**We invert all the bits**\n`0000100101 → 1111011010`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`−37 = 1111011010_C1`",
          "**Resultado**\n`−37 = 1111011010_C1`",
          "**Result**\n`−37 = 1111011010_C1`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-c1-2",
       "cfg": {
        "mode": "enc",
        "sys": "C1",
        "n": -37,
        "N": 10
       }
      }
     }
    },
    {
     "l": "4",
     "q": [
      "`+85` → C1 amb 12 bits",
      "`+85` → C1 con 12 bits",
      "`+85` → 1C with 12 bits"
     ],
     "a": {
      "k": "bits",
      "v": "000001010101",
      "show": "000001010101₍C1₎",
      "alt": [
       {
        "v": "100001010101",
        "msg": [
         "Això és la representació en CE, no en C1.",
         "Eso es la representación en CE, no en C1.",
         "That is the excess-code representation, not 1C."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`85₍₁₀₎ = 1010101₍₂₎`",
          "**Valor absoluto en binario**\n`85₍₁₀₎ = 1010101₍₂₎`",
          "**Absolute value in binary**\n`85₍₁₀₎ = 1010101₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C1: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C1: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 1C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 12 bits**\n`+85 = 000001010101`",
          "**Positivo con 12 bits**\n`+85 = 000001010101`",
          "**Positive with 12 bits**\n`+85 = 000001010101`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+85 = 000001010101_C1`",
          "**Resultado**\n`+85 = 000001010101_C1`",
          "**Result**\n`+85 = 000001010101_C1`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-c1-3",
       "cfg": {
        "mode": "enc",
        "sys": "C1",
        "n": 85,
        "N": 12
       }
      }
     }
    },
    {
     "l": "5",
     "q": [
      "`−142` → C1 amb 16 bits",
      "`−142` → C1 con 16 bits",
      "`−142` → 1C with 16 bits"
     ],
     "a": {
      "k": "bits",
      "v": "1111111101110001",
      "show": "1111111101110001₍C1₎",
      "alt": [
       {
        "v": "1000000010001110",
        "msg": [
         "Això és la representació en SM, no en C1.",
         "Eso es la representación en SM, no en C1.",
         "That is the SM representation, not 1C."
        ]
       },
       {
        "v": "1111111101110010",
        "msg": [
         "Això és la representació en C2, no en C1.",
         "Eso es la representación en C2, no en C1.",
         "That is the 2C representation, not 1C."
        ]
       },
       {
        "v": "0111111101110010",
        "msg": [
         "Això és la representació en CE, no en C1.",
         "Eso es la representación en CE, no en C1.",
         "That is the excess-code representation, not 1C."
        ]
       },
       {
        "v": "0000000010001110",
        "msg": [
         "Aquest és +142. Falta codificar el signe negatiu.",
         "Este es +142. Falta codificar el signo negativo.",
         "This is +142. The negative sign still has to be encoded."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`142₍₁₀₎ = 10001110₍₂₎`",
          "**Valor absoluto en binario**\n`142₍₁₀₎ = 10001110₍₂₎`",
          "**Absolute value in binary**\n`142₍₁₀₎ = 10001110₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C1: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C1: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 1C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 16 bits**\n`+142 = 0000000010001110`",
          "**Positivo con 16 bits**\n`+142 = 0000000010001110`",
          "**Positive with 16 bits**\n`+142 = 0000000010001110`"
         ]
        },
        {
         "x": [
          "**Invertim tots els bits**\n`0000000010001110 → 1111111101110001`",
          "**Invertimos todos los bits**\n`0000000010001110 → 1111111101110001`",
          "**We invert all the bits**\n`0000000010001110 → 1111111101110001`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`−142 = 1111111101110001_C1`",
          "**Resultado**\n`−142 = 1111111101110001_C1`",
          "**Result**\n`−142 = 1111111101110001_C1`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-c1-4",
       "cfg": {
        "mode": "enc",
        "sys": "C1",
        "n": -142,
        "N": 16
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-c2",
   "unit": "t21",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T2.1 · Activitats: enters amb signe i IEEE 754 · C2",
    "T2.1 · Actividades: enteros con signo e IEEE 754 · C2",
    "U2.1 · Activities: signed integers and IEEE 754 · 2C"
   ],
   "title": "C2",
   "q": [
    "Representa en **complement a 2**.",
    "Representa en **complemento a 2**.",
    "Represent in **two's complement**."
   ],
   "hint": [
    "Negatius: positiu amb N bits, inverteix i suma 1. Drecera: copia de dreta a esquerra fins al primer 1 (inclòs) i inverteix la resta.",
    "Negativos: positivo con N bits, invierte y suma 1. Atajo: copia de derecha a izquierda hasta el primer 1 (incluido) e invierte el resto.",
    "Negatives: positive with N bits, invert and add 1. Shortcut: copy from right to left up to the first 1 (included) and invert the rest."
   ],
   "note": [
    "Escriu tots els bits, també els zeros de l'esquerra. Si escrius la codificació d'un altre sistema, la correcció t'ho dirà.",
    "Escribe todos los bits, también los ceros de la izquierda. Si escribes la codificación de otro sistema, la corrección te lo dirá.",
    "Write all the bits, including the zeros on the left. If you write the encoding of another system, the marking will tell you."
   ],
   "parts": [
    {
     "l": "1",
     "q": [
      "`+25` → C2 amb 8 bits",
      "`+25` → C2 con 8 bits",
      "`+25` → 2C with 8 bits"
     ],
     "a": {
      "k": "bits",
      "v": "00011001",
      "show": "00011001₍C2₎",
      "alt": [
       {
        "v": "10011001",
        "msg": [
         "Això és la representació en CE, no en C2.",
         "Eso es la representación en CE, no en C2.",
         "That is the excess-code representation, not 2C."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`25₍₁₀₎ = 11001₍₂₎`",
          "**Valor absoluto en binario**\n`25₍₁₀₎ = 11001₍₂₎`",
          "**Absolute value in binary**\n`25₍₁₀₎ = 11001₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C2: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C2: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 2C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 8 bits**\n`+25 = 00011001`",
          "**Positivo con 8 bits**\n`+25 = 00011001`",
          "**Positive with 8 bits**\n`+25 = 00011001`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+25 = 00011001_C2`",
          "**Resultado**\n`+25 = 00011001_C2`",
          "**Result**\n`+25 = 00011001_C2`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-c2-0",
       "cfg": {
        "mode": "enc",
        "sys": "C2",
        "n": 25,
        "N": 8
       }
      }
     }
    },
    {
     "l": "2",
     "q": [
      "`−25` → C2 amb 8 bits",
      "`−25` → C2 con 8 bits",
      "`−25` → 2C with 8 bits"
     ],
     "a": {
      "k": "bits",
      "v": "11100111",
      "show": "11100111₍C2₎",
      "alt": [
       {
        "v": "10011001",
        "msg": [
         "Això és la representació en SM, no en C2.",
         "Eso es la representación en SM, no en C2.",
         "That is the SM representation, not 2C."
        ]
       },
       {
        "v": "11100110",
        "msg": [
         "Això és la representació en C1, no en C2.",
         "Eso es la representación en C1, no en C2.",
         "That is the 1C representation, not 2C."
        ]
       },
       {
        "v": "01100111",
        "msg": [
         "Això és la representació en CE, no en C2.",
         "Eso es la representación en CE, no en C2.",
         "That is the excess-code representation, not 2C."
        ]
       },
       {
        "v": "00011001",
        "msg": [
         "Aquest és +25. Falta codificar el signe negatiu.",
         "Este es +25. Falta codificar el signo negativo.",
         "This is +25. The negative sign still has to be encoded."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`25₍₁₀₎ = 11001₍₂₎`",
          "**Valor absoluto en binario**\n`25₍₁₀₎ = 11001₍₂₎`",
          "**Absolute value in binary**\n`25₍₁₀₎ = 11001₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C2: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C2: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 2C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 8 bits**\n`+25 = 00011001`",
          "**Positivo con 8 bits**\n`+25 = 00011001`",
          "**Positive with 8 bits**\n`+25 = 00011001`"
         ]
        },
        {
         "x": [
          "**Invertim tots els bits**\n`00011001 → 11100110`",
          "**Invertimos todos los bits**\n`00011001 → 11100110`",
          "**We invert all the bits**\n`00011001 → 11100110`"
         ]
        },
        {
         "x": [
          "**Sumem 1**\n`11100110 + 1 = 11100111`",
          "**Sumamos 1**\n`11100110 + 1 = 11100111`",
          "**We add 1**\n`11100110 + 1 = 11100111`"
         ]
        },
        {
         "done": true,
         "why": [
          "Comprovació ràpida: copia des de la dreta fins al primer 1 inclòs i inverteix la resta → 11100111.",
          "Comprobación rápida: copia desde la derecha hasta el primer 1 incluido e invierte el resto → 11100111.",
          "Quick check: copy from the right up to the first 1 included and invert the rest → 11100111."
         ],
         "x": [
          "**Resultat**\n`−25 = 11100111_C2`",
          "**Resultado**\n`−25 = 11100111_C2`",
          "**Result**\n`−25 = 11100111_C2`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-c2-1",
       "cfg": {
        "mode": "enc",
        "sys": "C2",
        "n": -25,
        "N": 8
       }
      }
     }
    },
    {
     "l": "3",
     "q": [
      "`−54` → C2 amb 10 bits",
      "`−54` → C2 con 10 bits",
      "`−54` → 2C with 10 bits"
     ],
     "a": {
      "k": "bits",
      "v": "1111001010",
      "show": "1111001010₍C2₎",
      "alt": [
       {
        "v": "1000110110",
        "msg": [
         "Això és la representació en SM, no en C2.",
         "Eso es la representación en SM, no en C2.",
         "That is the SM representation, not 2C."
        ]
       },
       {
        "v": "1111001001",
        "msg": [
         "Això és la representació en C1, no en C2.",
         "Eso es la representación en C1, no en C2.",
         "That is the 1C representation, not 2C."
        ]
       },
       {
        "v": "0111001010",
        "msg": [
         "Això és la representació en CE, no en C2.",
         "Eso es la representación en CE, no en C2.",
         "That is the excess-code representation, not 2C."
        ]
       },
       {
        "v": "0000110110",
        "msg": [
         "Aquest és +54. Falta codificar el signe negatiu.",
         "Este es +54. Falta codificar el signo negativo.",
         "This is +54. The negative sign still has to be encoded."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`54₍₁₀₎ = 110110₍₂₎`",
          "**Valor absoluto en binario**\n`54₍₁₀₎ = 110110₍₂₎`",
          "**Absolute value in binary**\n`54₍₁₀₎ = 110110₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C2: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C2: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 2C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 10 bits**\n`+54 = 0000110110`",
          "**Positivo con 10 bits**\n`+54 = 0000110110`",
          "**Positive with 10 bits**\n`+54 = 0000110110`"
         ]
        },
        {
         "x": [
          "**Invertim tots els bits**\n`0000110110 → 1111001001`",
          "**Invertimos todos los bits**\n`0000110110 → 1111001001`",
          "**We invert all the bits**\n`0000110110 → 1111001001`"
         ]
        },
        {
         "x": [
          "**Sumem 1**\n`1111001001 + 1 = 1111001010`",
          "**Sumamos 1**\n`1111001001 + 1 = 1111001010`",
          "**We add 1**\n`1111001001 + 1 = 1111001010`"
         ]
        },
        {
         "done": true,
         "why": [
          "Comprovació ràpida: copia des de la dreta fins al primer 1 inclòs i inverteix la resta → 1111001010.",
          "Comprobación rápida: copia desde la derecha hasta el primer 1 incluido e invierte el resto → 1111001010.",
          "Quick check: copy from the right up to the first 1 included and invert the rest → 1111001010."
         ],
         "x": [
          "**Resultat**\n`−54 = 1111001010_C2`",
          "**Resultado**\n`−54 = 1111001010_C2`",
          "**Result**\n`−54 = 1111001010_C2`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-c2-2",
       "cfg": {
        "mode": "enc",
        "sys": "C2",
        "n": -54,
        "N": 10
       }
      }
     }
    },
    {
     "l": "4",
     "q": [
      "`+117` → C2 amb 12 bits",
      "`+117` → C2 con 12 bits",
      "`+117` → 2C with 12 bits"
     ],
     "a": {
      "k": "bits",
      "v": "000001110101",
      "show": "000001110101₍C2₎",
      "alt": [
       {
        "v": "100001110101",
        "msg": [
         "Això és la representació en CE, no en C2.",
         "Eso es la representación en CE, no en C2.",
         "That is the excess-code representation, not 2C."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`117₍₁₀₎ = 1110101₍₂₎`",
          "**Valor absoluto en binario**\n`117₍₁₀₎ = 1110101₍₂₎`",
          "**Absolute value in binary**\n`117₍₁₀₎ = 1110101₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C2: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C2: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 2C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 12 bits**\n`+117 = 000001110101`",
          "**Positivo con 12 bits**\n`+117 = 000001110101`",
          "**Positive with 12 bits**\n`+117 = 000001110101`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+117 = 000001110101_C2`",
          "**Resultado**\n`+117 = 000001110101_C2`",
          "**Result**\n`+117 = 000001110101_C2`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-c2-3",
       "cfg": {
        "mode": "enc",
        "sys": "C2",
        "n": 117,
        "N": 12
       }
      }
     }
    },
    {
     "l": "5",
     "q": [
      "`−203` → C2 amb 16 bits",
      "`−203` → C2 con 16 bits",
      "`−203` → 2C with 16 bits"
     ],
     "a": {
      "k": "bits",
      "v": "1111111100110101",
      "show": "1111111100110101₍C2₎",
      "alt": [
       {
        "v": "1000000011001011",
        "msg": [
         "Això és la representació en SM, no en C2.",
         "Eso es la representación en SM, no en C2.",
         "That is the SM representation, not 2C."
        ]
       },
       {
        "v": "1111111100110100",
        "msg": [
         "Això és la representació en C1, no en C2.",
         "Eso es la representación en C1, no en C2.",
         "That is the 1C representation, not 2C."
        ]
       },
       {
        "v": "0111111100110101",
        "msg": [
         "Això és la representació en CE, no en C2.",
         "Eso es la representación en CE, no en C2.",
         "That is the excess-code representation, not 2C."
        ]
       },
       {
        "v": "0000000011001011",
        "msg": [
         "Aquest és +203. Falta codificar el signe negatiu.",
         "Este es +203. Falta codificar el signo negativo.",
         "This is +203. The negative sign still has to be encoded."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`203₍₁₀₎ = 11001011₍₂₎`",
          "**Valor absoluto en binario**\n`203₍₁₀₎ = 11001011₍₂₎`",
          "**Absolute value in binary**\n`203₍₁₀₎ = 11001011₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C2: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C2: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 2C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 16 bits**\n`+203 = 0000000011001011`",
          "**Positivo con 16 bits**\n`+203 = 0000000011001011`",
          "**Positive with 16 bits**\n`+203 = 0000000011001011`"
         ]
        },
        {
         "x": [
          "**Invertim tots els bits**\n`0000000011001011 → 1111111100110100`",
          "**Invertimos todos los bits**\n`0000000011001011 → 1111111100110100`",
          "**We invert all the bits**\n`0000000011001011 → 1111111100110100`"
         ]
        },
        {
         "x": [
          "**Sumem 1**\n`1111111100110100 + 1 = 1111111100110101`",
          "**Sumamos 1**\n`1111111100110100 + 1 = 1111111100110101`",
          "**We add 1**\n`1111111100110100 + 1 = 1111111100110101`"
         ]
        },
        {
         "done": true,
         "why": [
          "Comprovació ràpida: copia des de la dreta fins al primer 1 inclòs i inverteix la resta → 1111111100110101.",
          "Comprobación rápida: copia desde la derecha hasta el primer 1 incluido e invierte el resto → 1111111100110101.",
          "Quick check: copy from the right up to the first 1 included and invert the rest → 1111111100110101."
         ],
         "x": [
          "**Resultat**\n`−203 = 1111111100110101_C2`",
          "**Resultado**\n`−203 = 1111111100110101_C2`",
          "**Result**\n`−203 = 1111111100110101_C2`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-c2-4",
       "cfg": {
        "mode": "enc",
        "sys": "C2",
        "n": -203,
        "N": 16
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-ce",
   "unit": "t21",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T2.1 · Activitats: enters amb signe i IEEE 754 · CE",
    "T2.1 · Actividades: enteros con signo e IEEE 754 · CE",
    "U2.1 · Activities: signed integers and IEEE 754 · Excess"
   ],
   "title": "CE",
   "q": [
    "Representa en **codi d'excés** (E = 2$^{\\text{N−1}}$).",
    "Representa en **código de exceso** (E = 2$^{\\text{N−1}}$).",
    "Represent in **excess code** (E = 2$^{\\text{N−1}}$)."
   ],
   "hint": [
    "Suma l'excés i escriu el resultat com a natural amb N bits: 8 bits → +128; 10 bits → +512; 16 bits → +32 768.",
    "Suma el exceso y escribe el resultado como natural con N bits: 8 bits → +128; 10 bits → +512; 16 bits → +32 768.",
    "Add the excess and write the result as a natural number with N bits: 8 bits → +128; 10 bits → +512; 16 bits → +32 768."
   ],
   "note": [
    "Escriu tots els bits, també els zeros de l'esquerra. Si escrius la codificació d'un altre sistema, la correcció t'ho dirà.",
    "Escribe todos los bits, también los ceros de la izquierda. Si escribes la codificación de otro sistema, la corrección te lo dirá.",
    "Write all the bits, including the zeros on the left. If you write the encoding of another system, the marking will tell you."
   ],
   "parts": [
    {
     "l": "1",
     "q": [
      "`+12` → CE amb 8 bits",
      "`+12` → CE con 8 bits",
      "`+12` → excess with 8 bits"
     ],
     "a": {
      "k": "bits",
      "v": "10001100",
      "show": "10001100₍CE₎",
      "alt": [
       {
        "v": "00001100",
        "msg": [
         "Això és la representació en SM, no en CE.",
         "Eso es la representación en SM, no en CE.",
         "That is the SM representation, not excess code."
        ]
       },
       {
        "v": "00001100",
        "msg": [
         "Això és la representació en C1, no en CE.",
         "Eso es la representación en C1, no en CE.",
         "That is the 1C representation, not excess code."
        ]
       },
       {
        "v": "00001100",
        "msg": [
         "Això és la representació en C2, no en CE.",
         "Eso es la representación en C2, no en CE.",
         "That is the 2C representation, not excess code."
        ]
       },
       {
        "v": "10001011",
        "msg": [
         "Has fet servir excés 2^(N−1) − 1 (el de l'IEEE). El codi d'excés del curs és E = 2^(N−1) = 128.",
         "Has usado exceso 2^(N−1) − 1 (el del IEEE). El código de exceso del curso es E = 2^(N−1) = 128.",
         "You have used excess 2^(N−1) − 1 (the IEEE one). The course's excess code is E = 2^(N−1) = 128."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Excés (biaix) amb 8 bits**\n`E = 2⁷ = 128`",
          "**Exceso (sesgo) con 8 bits**\n`E = 2⁷ = 128`",
          "**Excess (bias) with 8 bits**\n`E = 2⁷ = 128`"
         ]
        },
        {
         "x": [
          "**Sumem l'excés al valor**\n`12 + 128 = 140`",
          "**Sumamos el exceso al valor**\n`12 + 128 = 140`",
          "**We add the excess to the value**\n`12 + 128 = 140`"
         ]
        },
        {
         "x": [
          "**Passem a binari amb 8 bits**\n`140₍₁₀₎ = 10001100₍₂₎`",
          "**Pasamos a binario con 8 bits**\n`140₍₁₀₎ = 10001100₍₂₎`",
          "**Convert to binary with 8 bits**\n`140₍₁₀₎ = 10001100₍₂₎`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+12 = 10001100_CE`",
          "**Resultado**\n`+12 = 10001100_CE`",
          "**Result**\n`+12 = 10001100_CE`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-ce-0",
       "cfg": {
        "mode": "enc",
        "sys": "CE",
        "n": 12,
        "N": 8
       }
      }
     }
    },
    {
     "l": "2",
     "q": [
      "`−35` → CE amb 8 bits",
      "`−35` → CE con 8 bits",
      "`−35` → excess with 8 bits"
     ],
     "a": {
      "k": "bits",
      "v": "01011101",
      "show": "01011101₍CE₎",
      "alt": [
       {
        "v": "10100011",
        "msg": [
         "Això és la representació en SM, no en CE.",
         "Eso es la representación en SM, no en CE.",
         "That is the SM representation, not excess code."
        ]
       },
       {
        "v": "11011100",
        "msg": [
         "Això és la representació en C1, no en CE.",
         "Eso es la representación en C1, no en CE.",
         "That is the 1C representation, not excess code."
        ]
       },
       {
        "v": "11011101",
        "msg": [
         "Això és la representació en C2, no en CE.",
         "Eso es la representación en C2, no en CE.",
         "That is the 2C representation, not excess code."
        ]
       },
       {
        "v": "00100011",
        "msg": [
         "Aquest és +35. Falta codificar el signe negatiu.",
         "Este es +35. Falta codificar el signo negativo.",
         "This is +35. The negative sign still has to be encoded."
        ]
       },
       {
        "v": "01011100",
        "msg": [
         "Has fet servir excés 2^(N−1) − 1 (el de l'IEEE). El codi d'excés del curs és E = 2^(N−1) = 128.",
         "Has usado exceso 2^(N−1) − 1 (el del IEEE). El código de exceso del curso es E = 2^(N−1) = 128.",
         "You have used excess 2^(N−1) − 1 (the IEEE one). The course's excess code is E = 2^(N−1) = 128."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Excés (biaix) amb 8 bits**\n`E = 2⁷ = 128`",
          "**Exceso (sesgo) con 8 bits**\n`E = 2⁷ = 128`",
          "**Excess (bias) with 8 bits**\n`E = 2⁷ = 128`"
         ]
        },
        {
         "x": [
          "**Sumem l'excés al valor**\n`−35 + 128 = 93`",
          "**Sumamos el exceso al valor**\n`−35 + 128 = 93`",
          "**We add the excess to the value**\n`−35 + 128 = 93`"
         ]
        },
        {
         "x": [
          "**Passem a binari amb 8 bits**\n`93₍₁₀₎ = 1011101₍₂₎ → 01011101`",
          "**Pasamos a binario con 8 bits**\n`93₍₁₀₎ = 1011101₍₂₎ → 01011101`",
          "**Convert to binary with 8 bits**\n`93₍₁₀₎ = 1011101₍₂₎ → 01011101`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`−35 = 01011101_CE`",
          "**Resultado**\n`−35 = 01011101_CE`",
          "**Result**\n`−35 = 01011101_CE`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-ce-1",
       "cfg": {
        "mode": "enc",
        "sys": "CE",
        "n": -35,
        "N": 8
       }
      }
     }
    },
    {
     "l": "3",
     "q": [
      "`+42` → CE amb 10 bits",
      "`+42` → CE con 10 bits",
      "`+42` → excess with 10 bits"
     ],
     "a": {
      "k": "bits",
      "v": "1000101010",
      "show": "1000101010₍CE₎",
      "alt": [
       {
        "v": "0000101010",
        "msg": [
         "Això és la representació en SM, no en CE.",
         "Eso es la representación en SM, no en CE.",
         "That is the SM representation, not excess code."
        ]
       },
       {
        "v": "0000101010",
        "msg": [
         "Això és la representació en C1, no en CE.",
         "Eso es la representación en C1, no en CE.",
         "That is the 1C representation, not excess code."
        ]
       },
       {
        "v": "0000101010",
        "msg": [
         "Això és la representació en C2, no en CE.",
         "Eso es la representación en C2, no en CE.",
         "That is the 2C representation, not excess code."
        ]
       },
       {
        "v": "1000101001",
        "msg": [
         "Has fet servir excés 2^(N−1) − 1 (el de l'IEEE). El codi d'excés del curs és E = 2^(N−1) = 512.",
         "Has usado exceso 2^(N−1) − 1 (el del IEEE). El código de exceso del curso es E = 2^(N−1) = 512.",
         "You have used excess 2^(N−1) − 1 (the IEEE one). The course's excess code is E = 2^(N−1) = 512."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Excés (biaix) amb 10 bits**\n`E = 2⁹ = 512`",
          "**Exceso (sesgo) con 10 bits**\n`E = 2⁹ = 512`",
          "**Excess (bias) with 10 bits**\n`E = 2⁹ = 512`"
         ]
        },
        {
         "x": [
          "**Sumem l'excés al valor**\n`42 + 512 = 554`",
          "**Sumamos el exceso al valor**\n`42 + 512 = 554`",
          "**We add the excess to the value**\n`42 + 512 = 554`"
         ]
        },
        {
         "x": [
          "**Passem a binari amb 10 bits**\n`554₍₁₀₎ = 1000101010₍₂₎`",
          "**Pasamos a binario con 10 bits**\n`554₍₁₀₎ = 1000101010₍₂₎`",
          "**Convert to binary with 10 bits**\n`554₍₁₀₎ = 1000101010₍₂₎`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+42 = 1000101010_CE`",
          "**Resultado**\n`+42 = 1000101010_CE`",
          "**Result**\n`+42 = 1000101010_CE`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-ce-2",
       "cfg": {
        "mode": "enc",
        "sys": "CE",
        "n": 42,
        "N": 10
       }
      }
     }
    },
    {
     "l": "4",
     "q": [
      "`−76` → CE amb 10 bits",
      "`−76` → CE con 10 bits",
      "`−76` → excess with 10 bits"
     ],
     "a": {
      "k": "bits",
      "v": "0110110100",
      "show": "0110110100₍CE₎",
      "alt": [
       {
        "v": "1001001100",
        "msg": [
         "Això és la representació en SM, no en CE.",
         "Eso es la representación en SM, no en CE.",
         "That is the SM representation, not excess code."
        ]
       },
       {
        "v": "1110110011",
        "msg": [
         "Això és la representació en C1, no en CE.",
         "Eso es la representación en C1, no en CE.",
         "That is the 1C representation, not excess code."
        ]
       },
       {
        "v": "1110110100",
        "msg": [
         "Això és la representació en C2, no en CE.",
         "Eso es la representación en C2, no en CE.",
         "That is the 2C representation, not excess code."
        ]
       },
       {
        "v": "0001001100",
        "msg": [
         "Aquest és +76. Falta codificar el signe negatiu.",
         "Este es +76. Falta codificar el signo negativo.",
         "This is +76. The negative sign still has to be encoded."
        ]
       },
       {
        "v": "0110110011",
        "msg": [
         "Has fet servir excés 2^(N−1) − 1 (el de l'IEEE). El codi d'excés del curs és E = 2^(N−1) = 512.",
         "Has usado exceso 2^(N−1) − 1 (el del IEEE). El código de exceso del curso es E = 2^(N−1) = 512.",
         "You have used excess 2^(N−1) − 1 (the IEEE one). The course's excess code is E = 2^(N−1) = 512."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Excés (biaix) amb 10 bits**\n`E = 2⁹ = 512`",
          "**Exceso (sesgo) con 10 bits**\n`E = 2⁹ = 512`",
          "**Excess (bias) with 10 bits**\n`E = 2⁹ = 512`"
         ]
        },
        {
         "x": [
          "**Sumem l'excés al valor**\n`−76 + 512 = 436`",
          "**Sumamos el exceso al valor**\n`−76 + 512 = 436`",
          "**We add the excess to the value**\n`−76 + 512 = 436`"
         ]
        },
        {
         "x": [
          "**Passem a binari amb 10 bits**\n`436₍₁₀₎ = 110110100₍₂₎ → 0110110100`",
          "**Pasamos a binario con 10 bits**\n`436₍₁₀₎ = 110110100₍₂₎ → 0110110100`",
          "**Convert to binary with 10 bits**\n`436₍₁₀₎ = 110110100₍₂₎ → 0110110100`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`−76 = 0110110100_CE`",
          "**Resultado**\n`−76 = 0110110100_CE`",
          "**Result**\n`−76 = 0110110100_CE`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-ce-3",
       "cfg": {
        "mode": "enc",
        "sys": "CE",
        "n": -76,
        "N": 10
       }
      }
     }
    },
    {
     "l": "5",
     "q": [
      "`+125` → CE amb 16 bits",
      "`+125` → CE con 16 bits",
      "`+125` → excess with 16 bits"
     ],
     "a": {
      "k": "bits",
      "v": "1000000001111101",
      "show": "1000000001111101₍CE₎",
      "alt": [
       {
        "v": "0000000001111101",
        "msg": [
         "Això és la representació en SM, no en CE.",
         "Eso es la representación en SM, no en CE.",
         "That is the SM representation, not excess code."
        ]
       },
       {
        "v": "0000000001111101",
        "msg": [
         "Això és la representació en C1, no en CE.",
         "Eso es la representación en C1, no en CE.",
         "That is the 1C representation, not excess code."
        ]
       },
       {
        "v": "0000000001111101",
        "msg": [
         "Això és la representació en C2, no en CE.",
         "Eso es la representación en C2, no en CE.",
         "That is the 2C representation, not excess code."
        ]
       },
       {
        "v": "1000000001111100",
        "msg": [
         "Has fet servir excés 2^(N−1) − 1 (el de l'IEEE). El codi d'excés del curs és E = 2^(N−1) = 32768.",
         "Has usado exceso 2^(N−1) − 1 (el del IEEE). El código de exceso del curso es E = 2^(N−1) = 32768.",
         "You have used excess 2^(N−1) − 1 (the IEEE one). The course's excess code is E = 2^(N−1) = 32768."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Excés (biaix) amb 16 bits**\n`E = 2¹⁵ = 32 768`",
          "**Exceso (sesgo) con 16 bits**\n`E = 2¹⁵ = 32 768`",
          "**Excess (bias) with 16 bits**\n`E = 2¹⁵ = 32 768`"
         ]
        },
        {
         "x": [
          "**Sumem l'excés al valor**\n`125 + 32 768 = 32 893`",
          "**Sumamos el exceso al valor**\n`125 + 32 768 = 32 893`",
          "**We add the excess to the value**\n`125 + 32 768 = 32 893`"
         ]
        },
        {
         "x": [
          "**Passem a binari amb 16 bits**\n`32 893₍₁₀₎ = 1000000001111101₍₂₎`",
          "**Pasamos a binario con 16 bits**\n`32 893₍₁₀₎ = 1000000001111101₍₂₎`",
          "**Convert to binary with 16 bits**\n`32 893₍₁₀₎ = 1000000001111101₍₂₎`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+125 = 1000000001111101_CE`",
          "**Resultado**\n`+125 = 1000000001111101_CE`",
          "**Result**\n`+125 = 1000000001111101_CE`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-ce-4",
       "cfg": {
        "mode": "enc",
        "sys": "CE",
        "n": 125,
        "N": 16
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-dec",
   "unit": "t21",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T2.1 · Activitats: enters amb signe i IEEE 754 · Descodificar",
    "T2.1 · Actividades: enteros con signo e IEEE 754 · Decodificar",
    "U2.1 · Activities: signed integers and IEEE 754 · Decoding"
   ],
   "title": [
    "Descodificar",
    "Decodificar",
    "Decoding"
   ],
   "q": [
    "Quin nombre decimal representa cada cadena de bits?",
    "¿Qué número decimal representa cada cadena de bits?",
    "Which decimal number does each bit string represent?"
   ],
   "hint": [
    "Mira el sistema abans de mirar els bits. En C2, si el primer bit és 1, el primer bit val −2$^{\\text{N−1}}$. En CE, llegeix-ho com a natural i resta l'excés.",
    "Mira el sistema antes de mirar los bits. En C2, si el primer bit es 1, el primer bit vale −2$^{\\text{N−1}}$. En CE, léelo como natural y resta el exceso.",
    "Look at the system before looking at the bits. In 2C, if the first bit is 1, it is worth −2$^{\\text{N−1}}$. In excess code, read it as a natural number and subtract the excess."
   ],
   "note": [
    "Escriu tots els bits, també els zeros de l'esquerra. Si escrius la codificació d'un altre sistema, la correcció t'ho dirà.",
    "Escribe todos los bits, también los ceros de la izquierda. Si escribes la codificación de otro sistema, la corrección te lo dirá.",
    "Write all the bits, including the zeros on the left. If you write the encoding of another system, the marking will tell you."
   ],
   "parts": [
    {
     "l": "1",
     "q": "`00011010`$_{\\text{SM}}$ → decimal",
     "a": {
      "k": "int",
      "v": 26
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Bit de signe**\n`0 → positiu`",
          "**Bit de signo**\n`0 → positivo`",
          "**Sign bit**\n`0 → positive`"
         ]
        },
        {
         "x": "**Magnitud**\n`0011010₍₂₎ = 26`"
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`00011010_SM = 26`",
          "**Resultado**\n`00011010_SM = 26`",
          "**Result**\n`00011010_SM = 26`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-dec-0",
       "cfg": {
        "mode": "dec",
        "sys": "SM",
        "bits": "00011010"
       }
      }
     }
    },
    {
     "l": "2",
     "q": "`10101101`$_{\\text{SM}}$ → decimal",
     "a": {
      "k": "int",
      "v": -45
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Bit de signe**\n`1 → negatiu`",
          "**Bit de signo**\n`1 → negativo`",
          "**Sign bit**\n`1 → negative`"
         ]
        },
        {
         "x": "**Magnitud**\n`0101101₍₂₎ = 45`"
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`10101101_SM = −45`",
          "**Resultado**\n`10101101_SM = −45`",
          "**Result**\n`10101101_SM = −45`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-dec-1",
       "cfg": {
        "mode": "dec",
        "sys": "SM",
        "bits": "10101101"
       }
      }
     }
    },
    {
     "l": "3",
     "q": "`00010111`$_{\\text{C1}}$ → decimal",
     "a": {
      "k": "int",
      "v": 23
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Un positiu es llegeix directament en binari.",
          "Un positivo se lee directamente en binario.",
          "A positive number is read directly in binary."
         ],
         "x": [
          "**Primer bit 0: positiu**\n`00010111₍₂₎ = 23`",
          "**Primer bit 0: positivo**\n`00010111₍₂₎ = 23`",
          "**First bit 0: positive**\n`00010111₍₂₎ = 23`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`00010111_C1 = +23`",
          "**Resultado**\n`00010111_C1 = +23`",
          "**Result**\n`00010111_C1 = +23`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-dec-2",
       "cfg": {
        "mode": "dec",
        "sys": "C1",
        "bits": "00010111"
       }
      }
     }
    },
    {
     "l": "4",
     "q": "`11100110`$_{\\text{C1}}$ → decimal",
     "a": {
      "k": "int",
      "v": -25
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Primer bit 1: negatiu**\nDesfem el procés: invertim tots els bits per trobar el valor absolut.",
          "**Primer bit 1: negativo**\nDeshacemos el proceso: invertimos todos los bits para encontrar el valor absoluto.",
          "**First bit 1: negative**\nWe undo the process: we invert all the bits to find the absolute value."
         ]
        },
        {
         "x": "`11100110 → 00011001 = 25`"
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`11100110_C1 = −25`",
          "**Resultado**\n`11100110_C1 = −25`",
          "**Result**\n`11100110_C1 = −25`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-dec-3",
       "cfg": {
        "mode": "dec",
        "sys": "C1",
        "bits": "11100110"
       }
      }
     }
    },
    {
     "l": "5",
     "q": "`00101101`$_{\\text{C2}}$ → decimal",
     "a": {
      "k": "int",
      "v": 45
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Un positiu es llegeix directament en binari.",
          "Un positivo se lee directamente en binario.",
          "A positive number is read directly in binary."
         ],
         "x": [
          "**Primer bit 0: positiu**\n`00101101₍₂₎ = 45`",
          "**Primer bit 0: positivo**\n`00101101₍₂₎ = 45`",
          "**First bit 0: positive**\n`00101101₍₂₎ = 45`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`00101101_C2 = +45`",
          "**Resultado**\n`00101101_C2 = +45`",
          "**Result**\n`00101101_C2 = +45`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-dec-4",
       "cfg": {
        "mode": "dec",
        "sys": "C2",
        "bits": "00101101"
       }
      }
     }
    },
    {
     "l": "6",
     "q": "`11010110`$_{\\text{C2}}$ → decimal",
     "a": {
      "k": "int",
      "v": -42
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Primer bit 1: negatiu**\nDesfem el procés: invertim tots els bits i sumem 1 (o restem 1 i invertim).",
          "**Primer bit 1: negativo**\nDeshacemos el proceso: invertimos todos los bits y sumamos 1 (o restamos 1 e invertimos).",
          "**First bit 1: negative**\nWe undo the process: we invert all the bits and add 1 (or subtract 1 and invert)."
         ]
        },
        {
         "x": "`11010110 → 00101001 ; 00101001 + 1 = 00101010 = 42`"
        },
        {
         "done": true,
         "why": [
          "També es pot llegir directament: el primer bit val −2⁷ i la resta, positiu.",
          "También se puede leer directamente: el primer bit vale −2⁷ y el resto, positivo.",
          "It can also be read directly: the first bit is worth −2⁷ and the rest, positive."
         ],
         "x": [
          "**Resultat**\n`11010110_C2 = −42`",
          "**Resultado**\n`11010110_C2 = −42`",
          "**Result**\n`11010110_C2 = −42`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-dec-5",
       "cfg": {
        "mode": "dec",
        "sys": "C2",
        "bits": "11010110"
       }
      }
     }
    },
    {
     "l": "7",
     "q": "`10010110`$_{\\text{CE}}$ → decimal",
     "a": {
      "k": "int",
      "v": 22
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Llegim els bits com a natural**\n`10010110₍₂₎ = 150`",
          "**Leemos los bits como natural**\n`10010110₍₂₎ = 150`",
          "**We read the bits as a natural number**\n`10010110₍₂₎ = 150`"
         ]
        },
        {
         "x": [
          "**Excés amb 8 bits**\n`E = 2⁷ = 128`",
          "**Exceso con 8 bits**\n`E = 2⁷ = 128`",
          "**Excess with 8 bits**\n`E = 2⁷ = 128`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Restem l'excés**\n`150 − 128 = 22`",
          "**Restamos el exceso**\n`150 − 128 = 22`",
          "**We subtract the excess**\n`150 − 128 = 22`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-dec-6",
       "cfg": {
        "mode": "dec",
        "sys": "CE",
        "bits": "10010110"
       }
      }
     }
    },
    {
     "l": "8",
     "q": "`0110100110`$_{\\text{CE}}$ → decimal",
     "a": {
      "k": "int",
      "v": -90
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Llegim els bits com a natural**\n`0110100110₍₂₎ = 422`",
          "**Leemos los bits como natural**\n`0110100110₍₂₎ = 422`",
          "**We read the bits as a natural number**\n`0110100110₍₂₎ = 422`"
         ]
        },
        {
         "x": [
          "**Excés amb 10 bits**\n`E = 2⁹ = 512`",
          "**Exceso con 10 bits**\n`E = 2⁹ = 512`",
          "**Excess with 10 bits**\n`E = 2⁹ = 512`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Restem l'excés**\n`422 − 512 = −90`",
          "**Restamos el exceso**\n`422 − 512 = −90`",
          "**We subtract the excess**\n`422 − 512 = −90`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-dec-7",
       "cfg": {
        "mode": "dec",
        "sys": "CE",
        "bits": "0110100110"
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-ie",
   "unit": "t21",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T2.1 · Activitats: enters amb signe i IEEE 754 · IEEE 754",
    "T2.1 · Actividades: enteros con signo e IEEE 754 · IEEE 754",
    "U2.1 · Activities: signed integers and IEEE 754 · IEEE 754"
   ],
   "title": "IEEE 754",
   "q": [
    "Simple precisió: 1 bit de signe, 8 d'exponent en excés 127, 23 de fracció. Resposta: 32 bits o 8 dígits hexadecimals.",
    "Simple precisión: 1 bit de signo, 8 de exponente en exceso 127, 23 de fracción. Respuesta: 32 bits u 8 dígitos hexadecimales.",
    "Single precision: 1 sign bit, 8 exponent bits in excess 127, 23 fraction bits. Answer: 32 bits or 8 hexadecimal digits."
   ],
   "hint": [
    "Passa a binari, normalitza a 1,xxx · 2$^{\\text{e}}$, guarda E = e + 127 i la fracció sense l'1 implícit, omplerta amb zeros fins a 23 bits.",
    "Pasa a binario, normaliza a 1,xxx · 2$^{\\text{e}}$, guarda E = e + 127 y la fracción sin el 1 implícito, rellenada con ceros hasta 23 bits.",
    "Convert to binary, normalise to 1.xxx · 2$^{\\text{e}}$, store E = e + 127 and the fraction without the implicit 1, padded with zeros up to 23 bits."
   ],
   "note": [
    "Escriu tots els bits, també els zeros de l'esquerra. Si escrius la codificació d'un altre sistema, la correcció t'ho dirà.",
    "Escribe todos los bits, también los ceros de la izquierda. Si escribes la codificación de otro sistema, la corrección te lo dirá.",
    "Write all the bits, including the zeros on the left. If you write the encoding of another system, the marking will tell you."
   ],
   "parts": [
    {
     "l": "1",
     "q": "`+15,25` → IEEE 754 (simple)",
     "a": {
      "k": "ieee",
      "bits": "01000001011101000000000000000000",
      "hex": "41740000"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Signe**\n`S = 0  (positiu)`",
          "**Signo**\n`S = 0  (positivo)`",
          "**Sign**\n`S = 0  (positive)`"
         ]
        },
        {
         "why": [
          "Part entera per divisions, part fraccionària per multiplicacions per 2 (0,25·2 = 0,5; 0,5·2 = 1).",
          "Parte entera por divisiones, parte fraccionaria por multiplicaciones por 2 (0,25·2 = 0,5; 0,5·2 = 1).",
          "Integer part by divisions, fractional part by multiplications by 2 (0.25·2 = 0.5; 0.5·2 = 1)."
         ],
         "x": [
          "**Valor absolut en binari**\n`15,25₍₁₀₎ = 1111,01₍₂₎`",
          "**Valor absoluto en binario**\n`15,25₍₁₀₎ = 1111,01₍₂₎`",
          "**Absolute value in binary**\n`15.25₍₁₀₎ = 1111.01₍₂₎`"
         ]
        },
        {
         "why": [
          "La coma es mou 3 posicions a l'esquerra, per tant l'exponent és +3.",
          "La coma se mueve 3 posiciones a la izquierda, por tanto el exponente es +3.",
          "The point moves 3 places to the left, so the exponent is +3."
         ],
         "x": [
          "**Normalitzem: 1,F · 2^e**\n`1111,01₍₂₎ = 1,11101₍₂₎ · 2³`",
          "**Normalizamos: 1,F · 2^e**\n`1111,01₍₂₎ = 1,11101₍₂₎ · 2³`",
          "**We normalise: 1.F · 2^e**\n`1111.01₍₂₎ = 1.11101₍₂₎ · 2³`"
         ]
        },
        {
         "x": [
          "**Exponent en excés 127**\n`E = 3 + 127 = 130 = 10000010₍₂₎`",
          "**Exponente en exceso 127**\n`E = 3 + 127 = 130 = 10000010₍₂₎`",
          "**Exponent in excess 127**\n`E = 3 + 127 = 130 = 10000010₍₂₎`"
         ]
        },
        {
         "why": [
          "Són els bits de després de la coma, sense l'1 implícit, omplerts amb zeros per la dreta.",
          "Son los bits de después de la coma, sin el 1 implícito, rellenados con ceros por la derecha.",
          "They are the bits after the point, without the implicit 1, padded with zeros on the right."
         ],
         "x": [
          "**Fracció (23 bits)**\n`F = 11101000000000000000000`",
          "**Fracción (23 bits)**\n`F = 11101000000000000000000`",
          "**Fraction (23 bits)**\n`F = 11101000000000000000000`"
         ]
        },
        {
         "done": true,
         "why": "En hexadecimal: 41740000₍₁₆₎.",
         "x": [
          "**Resultat (32 bits)**\n`0 10000010 11101000000000000000000`",
          "**Resultado (32 bits)**\n`0 10000010 11101000000000000000000`",
          "**Result (32 bits)**\n`0 10000010 11101000000000000000000`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "ieee",
      "props": {
       "id": "exl-ie-0",
       "cfg": {
        "mode": "num",
        "x": "15,25",
        "bits": "01000001011101000000000000000000"
       }
      }
     }
    },
    {
     "l": "2",
     "q": "`−18,5` → IEEE 754 (simple)",
     "a": {
      "k": "ieee",
      "bits": "11000001100101000000000000000000",
      "hex": "C1940000"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Signe**\n`S = 1  (negatiu)`",
          "**Signo**\n`S = 1  (negativo)`",
          "**Sign**\n`S = 1  (negative)`"
         ]
        },
        {
         "why": [
          "Part entera per divisions, part fraccionària per multiplicacions per 2 (0,5·2 = 1).",
          "Parte entera por divisiones, parte fraccionaria por multiplicaciones por 2 (0,5·2 = 1).",
          "Integer part by divisions, fractional part by multiplications by 2 (0.5·2 = 1)."
         ],
         "x": [
          "**Valor absolut en binari**\n`18,5₍₁₀₎ = 10010,1₍₂₎`",
          "**Valor absoluto en binario**\n`18,5₍₁₀₎ = 10010,1₍₂₎`",
          "**Absolute value in binary**\n`18.5₍₁₀₎ = 10010.1₍₂₎`"
         ]
        },
        {
         "why": [
          "La coma es mou 4 posicions a l'esquerra, per tant l'exponent és +4.",
          "La coma se mueve 4 posiciones a la izquierda, por tanto el exponente es +4.",
          "The point moves 4 places to the left, so the exponent is +4."
         ],
         "x": [
          "**Normalitzem: 1,F · 2^e**\n`10010,1₍₂₎ = 1,00101₍₂₎ · 2⁴`",
          "**Normalizamos: 1,F · 2^e**\n`10010,1₍₂₎ = 1,00101₍₂₎ · 2⁴`",
          "**We normalise: 1.F · 2^e**\n`10010.1₍₂₎ = 1.00101₍₂₎ · 2⁴`"
         ]
        },
        {
         "x": [
          "**Exponent en excés 127**\n`E = 4 + 127 = 131 = 10000011₍₂₎`",
          "**Exponente en exceso 127**\n`E = 4 + 127 = 131 = 10000011₍₂₎`",
          "**Exponent in excess 127**\n`E = 4 + 127 = 131 = 10000011₍₂₎`"
         ]
        },
        {
         "why": [
          "Són els bits de després de la coma, sense l'1 implícit, omplerts amb zeros per la dreta.",
          "Son los bits de después de la coma, sin el 1 implícito, rellenados con ceros por la derecha.",
          "They are the bits after the point, without the implicit 1, padded with zeros on the right."
         ],
         "x": [
          "**Fracció (23 bits)**\n`F = 00101000000000000000000`",
          "**Fracción (23 bits)**\n`F = 00101000000000000000000`",
          "**Fraction (23 bits)**\n`F = 00101000000000000000000`"
         ]
        },
        {
         "done": true,
         "why": "En hexadecimal: C1940000₍₁₆₎.",
         "x": [
          "**Resultat (32 bits)**\n`1 10000011 00101000000000000000000`",
          "**Resultado (32 bits)**\n`1 10000011 00101000000000000000000`",
          "**Result (32 bits)**\n`1 10000011 00101000000000000000000`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "ieee",
      "props": {
       "id": "exl-ie-1",
       "cfg": {
        "mode": "num",
        "x": "-18,5",
        "bits": "11000001100101000000000000000000"
       }
      }
     }
    },
    {
     "l": "3",
     "q": "`0 10000010 10010000000000000000000` → decimal",
     "a": {
      "k": "num",
      "v": 12.5,
      "show": "12,5"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Separem els camps**\n`S = 0   E = 10000010   F = 10010000000000000000000`",
          "**Separamos los campos**\n`S = 0   E = 10000010   F = 10010000000000000000000`",
          "**We separate the fields**\n`S = 0   E = 10000010   F = 10010000000000000000000`"
         ]
        },
        {
         "x": [
          "**Exponent real**\n`10000010₍₂₎ = 130 ;  e = 130 − 127 = 3`",
          "**Exponente real**\n`10000010₍₂₎ = 130 ;  e = 130 − 127 = 3`",
          "**Actual exponent**\n`10000010₍₂₎ = 130 ;  e = 130 − 127 = 3`"
         ]
        },
        {
         "x": [
          "**Mantissa amb l'1 implícit**\n`1,1001₍₂₎ · 2³`",
          "**Mantisa con el 1 implícito**\n`1,1001₍₂₎ · 2³`",
          "**Mantissa with the implicit 1**\n`1.1001₍₂₎ · 2³`"
         ]
        },
        {
         "x": [
          "**Desplacem la coma 3 posicions**\n`1100,1₍₂₎`",
          "**Desplazamos la coma 3 posiciones**\n`1100,1₍₂₎`",
          "**We move the point 3 places**\n`1100.1₍₂₎`"
         ]
        },
        {
         "x": "**A decimal**\n`1100,1₍₂₎ = 12 + 2⁻¹ = 12,5`"
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+12,5`",
          "**Resultado**\n`+12,5`",
          "**Result**\n`+12.5`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "ieee",
      "props": {
       "id": "exl-ie-2",
       "cfg": {
        "mode": "bits",
        "bits": "01000001010010000000000000000000"
       }
      }
     }
    },
    {
     "l": "4",
     "q": "`1 10000011 01101000000000000000000` → decimal",
     "a": {
      "k": "num",
      "v": -22.5,
      "show": "−22,5"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Separem els camps**\n`S = 1   E = 10000011   F = 01101000000000000000000`",
          "**Separamos los campos**\n`S = 1   E = 10000011   F = 01101000000000000000000`",
          "**We separate the fields**\n`S = 1   E = 10000011   F = 01101000000000000000000`"
         ]
        },
        {
         "x": [
          "**Exponent real**\n`10000011₍₂₎ = 131 ;  e = 131 − 127 = 4`",
          "**Exponente real**\n`10000011₍₂₎ = 131 ;  e = 131 − 127 = 4`",
          "**Actual exponent**\n`10000011₍₂₎ = 131 ;  e = 131 − 127 = 4`"
         ]
        },
        {
         "x": [
          "**Mantissa amb l'1 implícit**\n`1,01101₍₂₎ · 2⁴`",
          "**Mantisa con el 1 implícito**\n`1,01101₍₂₎ · 2⁴`",
          "**Mantissa with the implicit 1**\n`1.01101₍₂₎ · 2⁴`"
         ]
        },
        {
         "x": [
          "**Desplacem la coma 4 posicions**\n`10110,1₍₂₎`",
          "**Desplazamos la coma 4 posiciones**\n`10110,1₍₂₎`",
          "**We move the point 4 places**\n`10110.1₍₂₎`"
         ]
        },
        {
         "x": "**A decimal**\n`10110,1₍₂₎ = 22 + 2⁻¹ = 22,5`"
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`−22,5`",
          "**Resultado**\n`−22,5`",
          "**Result**\n`−22.5`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "ieee",
      "props": {
       "id": "exl-ie-3",
       "cfg": {
        "mode": "bits",
        "bits": "11000001101101000000000000000000"
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-mm",
   "unit": "t22",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T2.2 · Activitats de formats multimèdia · 1–6",
    "T2.2 · Actividades de formatos multimedia · 1–6",
    "U2.2 · Multimedia format activities · 1–6"
   ],
   "title": "1–6",
   "q": [
    "Calcula la mida de cada fitxer en la unitat demanada.",
    "Calcula el tamaño de cada fichero en la unidad pedida.",
    "Compute the size of each file in the requested unit."
   ],
   "hint": [
    "Tot surt en bits: divideix per 8 i després pel prefix (KiB = 2¹⁰, MiB = 2²⁰, GiB = 2³⁰, TiB = 2⁴⁰; MB = 10⁶). La durada sempre en segons.",
    "Todo sale en bits: divide entre 8 y después por el prefijo (KiB = 2¹⁰, MiB = 2²⁰, GiB = 2³⁰, TiB = 2⁴⁰; MB = 10⁶). La duración siempre en segundos.",
    "Everything comes out in bits: divide by 8 and then by the prefix (KiB = 2¹⁰, MiB = 2²⁰, GiB = 2³⁰, TiB = 2⁴⁰; MB = 10⁶). Duration always in seconds."
   ],
   "note": [
    "Mida sense compressió. Imatge: amplada × alçada × bits/px. Àudio: d × f × b × c. Vídeo: mida del fotograma × FPS × durada.",
    "Tamaño sin compresión. Imagen: ancho × alto × bits/px. Audio: d × f × b × c. Vídeo: tamaño del fotograma × FPS × duración.",
    "Uncompressed size. Image: width × height × bits/px. Audio: d × f × b × c. Video: frame size × FPS × duration."
   ],
   "parts": [
    {
     "l": "1",
     "q": [
      "Imatge 100 × 80 px, 8 bits/px → KiB",
      "Imagen 100 × 80 px, 8 bits/px → KiB",
      "Image 100 × 80 px, 8 bits/px → KiB"
     ],
     "a": {
      "k": "num",
      "v": 7.8125,
      "show": "7,8125 KiB"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Píxels totals**\n`100 × 80 = 8 000 px`",
          "**Píxeles totales**\n`100 × 80 = 8 000 px`",
          "**Total pixels**\n`100 × 80 = 8 000 px`"
         ]
        },
        {
         "x": "**Bits**\n`8 000 × 8 b/px = 64 000 b`"
        },
        {
         "x": "**A bytes**\n`64 000 b ÷ 8 = 8 000 B`"
        },
        {
         "x": "**A KiB**\n`8 000 B ÷ 2¹⁰ = 7,8125 KiB`",
         "done": true
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "image",
      "props": {
       "id": "exl-mm-0",
       "cfg": {
        "w": 100,
        "h": 80,
        "b": 8,
        "u": "KiB"
       }
      }
     }
    },
    {
     "l": "2",
     "q": [
      "Imatge 1 000 × 890 px, 24 bits/px → MiB",
      "Imagen 1 000 × 890 px, 24 bits/px → MiB",
      "Image 1 000 × 890 px, 24 bits/px → MiB"
     ],
     "a": {
      "k": "num",
      "v": 2.5463104248046875,
      "show": "≈ 2,5463 MiB"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Píxels totals**\n`1 000 × 890 = 890 000 px`",
          "**Píxeles totales**\n`1 000 × 890 = 890 000 px`",
          "**Total pixels**\n`1 000 × 890 = 890 000 px`"
         ]
        },
        {
         "x": "**Bits**\n`890 000 × 24 b/px = 21 360 000 b`"
        },
        {
         "x": "**A bytes**\n`21 360 000 b ÷ 8 = 2 670 000 B`"
        },
        {
         "x": "**A MiB**\n`2 670 000 B ÷ 2²⁰ ≈ 2,5463 MiB`",
         "done": true
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "image",
      "props": {
       "id": "exl-mm-1",
       "cfg": {
        "w": 1000,
        "h": 890,
        "b": 24,
        "u": "MiB"
       }
      }
     }
    },
    {
     "l": "3",
     "q": [
      "Àudio 15 minuts, 48 000 Hz, 18 bits, 1 canal → MB",
      "Audio 15 minutos, 48 000 Hz, 18 bits, 1 canal → MB",
      "Audio 15 minutes, 48 000 Hz, 18 bits, 1 channel → MB"
     ],
     "a": {
      "k": "num",
      "v": 97.2,
      "show": "97,2 MB"
     },
     "sol": [
      {
       "t": "warn",
       "x": [
        "La fórmula demana la durada **en segons**: 15 minuts = 900 s.",
        "La fórmula pide la duración **en segundos**: 15 minutos = 900 s.",
        "The formula needs the duration **in seconds**: 15 minutes = 900 s."
       ]
      },
      {
       "steps": [
        {
         "x": [
          "**Mida = d × f × b × c**\n`900 s × 48 000 Hz × 18 b × 1 = 777 600 000 b`",
          "**Tamaño = d × f × b × c**\n`900 s × 48 000 Hz × 18 b × 1 = 777 600 000 b`",
          "**Size = d × f × b × c**\n`900 s × 48 000 Hz × 18 b × 1 = 777 600 000 b`"
         ]
        },
        {
         "x": "**A bytes**\n`777 600 000 b ÷ 8 = 97 200 000 B`"
        },
        {
         "x": "**A MB**\n`97 200 000 B ÷ 10⁶ = 97,2 MB`",
         "done": true
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "audio",
      "props": {
       "id": "exl-mm-2",
       "cfg": {
        "d": 900,
        "f": 48000,
        "b": 18,
        "c": 1,
        "u": "MB"
       }
      }
     }
    },
    {
     "l": "4",
     "q": [
      "Àudio 15 s, 48 000 Hz, 24 bits, 2 canals → MB",
      "Audio 15 s, 48 000 Hz, 24 bits, 2 canales → MB",
      "Audio 15 s, 48 000 Hz, 24 bits, 2 channels → MB"
     ],
     "a": {
      "k": "num",
      "v": 4.32,
      "show": "4,32 MB"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Mida = d × f × b × c**\n`15 s × 48 000 Hz × 24 b × 2 = 34 560 000 b`",
          "**Tamaño = d × f × b × c**\n`15 s × 48 000 Hz × 24 b × 2 = 34 560 000 b`",
          "**Size = d × f × b × c**\n`15 s × 48 000 Hz × 24 b × 2 = 34 560 000 b`"
         ]
        },
        {
         "x": "**A bytes**\n`34 560 000 b ÷ 8 = 4 320 000 B`"
        },
        {
         "x": "**A MB**\n`4 320 000 B ÷ 10⁶ = 4,32 MB`",
         "done": true
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "audio",
      "props": {
       "id": "exl-mm-3",
       "cfg": {
        "d": 15,
        "f": 48000,
        "b": 24,
        "c": 2,
        "u": "MB"
       }
      }
     }
    },
    {
     "l": "5",
     "q": "Vídeo 4K UHD (3840 × 2160), 24 bits/px, 60 FPS, 20 min → TiB",
     "a": {
      "k": "num",
      "v": 1.6294419765472412,
      "show": "≈ 1,6294 TiB"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Mida d'un fotograma**\n`3 840 × 2 160 × 24 = 199 065 600 b`",
          "**Tamaño de un fotograma**\n`3 840 × 2 160 × 24 = 199 065 600 b`",
          "**Size of one frame**\n`3 840 × 2 160 × 24 = 199 065 600 b`"
         ]
        },
        {
         "x": [
          "**Fotogrames totals**\n`60 FPS × 1 200 s = 72 000`",
          "**Fotogramas totales**\n`60 FPS × 1 200 s = 72 000`",
          "**Total frames**\n`60 FPS × 1 200 s = 72 000`"
         ]
        },
        {
         "x": [
          "**Bits totals**\n`199 065 600 × 72 000 = 14 332 723 200 000 b`",
          "**Bits totales**\n`199 065 600 × 72 000 = 14 332 723 200 000 b`",
          "**Total bits**\n`199 065 600 × 72 000 = 14 332 723 200 000 b`"
         ]
        },
        {
         "x": "**A bytes**\n`14 332 723 200 000 b ÷ 8 = 1 791 590 400 000 B`"
        },
        {
         "x": "**A TiB**\n`1 791 590 400 000 B ÷ 2⁴⁰ ≈ 1,6294 TiB`",
         "done": true
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "video",
      "props": {
       "id": "exl-mm-4",
       "cfg": {
        "r": "4K UHD",
        "bpp": 24,
        "fps": 60,
        "min": 20,
        "u": "TiB"
       }
      }
     }
    },
    {
     "l": "6",
     "q": "Vídeo SD PAL (720 × 576), 24 bits/px, 60 FPS, 20 min → GiB",
     "a": {
      "k": "num",
      "v": 83.42742919921875,
      "show": "≈ 83,4274 GiB"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Mida d'un fotograma**\n`720 × 576 × 24 = 9 953 280 b`",
          "**Tamaño de un fotograma**\n`720 × 576 × 24 = 9 953 280 b`",
          "**Size of one frame**\n`720 × 576 × 24 = 9 953 280 b`"
         ]
        },
        {
         "x": [
          "**Fotogrames totals**\n`60 FPS × 1 200 s = 72 000`",
          "**Fotogramas totales**\n`60 FPS × 1 200 s = 72 000`",
          "**Total frames**\n`60 FPS × 1 200 s = 72 000`"
         ]
        },
        {
         "x": [
          "**Bits totals**\n`9 953 280 × 72 000 = 716 636 160 000 b`",
          "**Bits totales**\n`9 953 280 × 72 000 = 716 636 160 000 b`",
          "**Total bits**\n`9 953 280 × 72 000 = 716 636 160 000 b`"
         ]
        },
        {
         "x": "**A bytes**\n`716 636 160 000 b ÷ 8 = 89 579 520 000 B`"
        },
        {
         "x": "**A GiB**\n`89 579 520 000 B ÷ 2³⁰ ≈ 83,4274 GiB`",
         "done": true
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "video",
      "props": {
       "id": "exl-mm-5",
       "cfg": {
        "r": "SD PAL",
        "bpp": 24,
        "fps": 60,
        "min": 20,
        "u": "GiB"
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-mmx",
   "unit": "t22",
   "level": "easy",
   "type": "cparts",
   "src": "new",
   "basedOn": [
    "T2.2 · Activitats de formats multimèdia · Material",
    "T2.2 · Actividades de formatos multimedia · Material",
    "U2.2 · Multimedia format activities · Course material"
   ],
   "title": "Material",
   "q": [
    "Exemples de les diapositives.",
    "Ejemplos de las diapositivas.",
    "Examples from the slides."
   ],
   "note": [
    "Mida sense compressió. Imatge: amplada × alçada × bits/px. Àudio: d × f × b × c. Vídeo: mida del fotograma × FPS × durada.",
    "Tamaño sin compresión. Imagen: ancho × alto × bits/px. Audio: d × f × b × c. Vídeo: tamaño del fotograma × FPS × duración.",
    "Uncompressed size. Image: width × height × bits/px. Audio: d × f × b × c. Video: frame size × FPS × duration."
   ],
   "parts": [
    {
     "l": "1",
     "q": "Vídeo Full HD (1920 × 1080), 24 bits/px, 25 FPS, 10 min → GiB",
     "a": {
      "k": "num",
      "v": 86.90357208251953,
      "show": "86,903572 GiB"
     },
     "sol": [
      {
       "t": "warn",
       "x": [
        "**Errata del material:** la diapositiva diu ≈ 89,0 GiB, però 6 220 800 B × 15 000 fotogrames = 93 312 000 000 B ≈ **86,90 GiB** (89,0 no surt de cap combinació d'unitats).",
        "**Errata del material:** la diapositiva dice ≈ 89,0 GiB, pero 6 220 800 B × 15 000 fotogramas = 93 312 000 000 B ≈ **86,90 GiB** (89,0 no sale de ninguna combinación de unidades).",
        "**Erratum in the material:** the slide says ≈ 89.0 GiB, but 6 220 800 B × 15 000 frames = 93 312 000 000 B ≈ **86.90 GiB** (89.0 does not come out of any combination of units)."
       ]
      },
      {
       "steps": [
        {
         "x": [
          "**Mida d'un fotograma**\n`1 920 × 1 080 × 24 = 49 766 400 b`",
          "**Tamaño de un fotograma**\n`1 920 × 1 080 × 24 = 49 766 400 b`",
          "**Size of one frame**\n`1 920 × 1 080 × 24 = 49 766 400 b`"
         ]
        },
        {
         "x": [
          "**Fotogrames totals**\n`25 FPS × 600 s = 15 000`",
          "**Fotogramas totales**\n`25 FPS × 600 s = 15 000`",
          "**Total frames**\n`25 FPS × 600 s = 15 000`"
         ]
        },
        {
         "x": [
          "**Bits totals**\n`49 766 400 × 15 000 = 746 496 000 000 b`",
          "**Bits totales**\n`49 766 400 × 15 000 = 746 496 000 000 b`",
          "**Total bits**\n`49 766 400 × 15 000 = 746 496 000 000 b`"
         ]
        },
        {
         "x": "**A bytes**\n`746 496 000 000 b ÷ 8 = 93 312 000 000 B`"
        },
        {
         "x": "**A GiB**\n`93 312 000 000 B ÷ 2³⁰ = 86,903572 GiB`",
         "done": true
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "video",
      "props": {
       "id": "exl-mmx-0",
       "cfg": {
        "r": "Full HD",
        "bpp": 24,
        "fps": 25,
        "min": 10,
        "u": "GiB"
       }
      }
     }
    },
    {
     "l": "2",
     "q": [
      "Àudio 5 minuts, 44 100 Hz, 16 bits, 2 canals → MiB",
      "Audio 5 minutos, 44 100 Hz, 16 bits, 2 canales → MiB",
      "Audio 5 minutes, 44 100 Hz, 16 bits, 2 channels → MiB"
     ],
     "a": {
      "k": "num",
      "v": 50.46844482421875,
      "show": "≈ 50,4684 MiB"
     },
     "sol": [
      {
       "t": "warn",
       "x": [
        "La fórmula demana la durada **en segons**: 5 minuts = 300 s.",
        "La fórmula pide la duración **en segundos**: 5 minutos = 300 s.",
        "The formula needs the duration **in seconds**: 5 minutes = 300 s."
       ]
      },
      {
       "steps": [
        {
         "x": [
          "**Mida = d × f × b × c**\n`300 s × 44 100 Hz × 16 b × 2 = 423 360 000 b`",
          "**Tamaño = d × f × b × c**\n`300 s × 44 100 Hz × 16 b × 2 = 423 360 000 b`",
          "**Size = d × f × b × c**\n`300 s × 44 100 Hz × 16 b × 2 = 423 360 000 b`"
         ]
        },
        {
         "x": "**A bytes**\n`423 360 000 b ÷ 8 = 52 920 000 B`"
        },
        {
         "x": "**A MiB**\n`52 920 000 B ÷ 2²⁰ ≈ 50,4684 MiB`",
         "done": true
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "audio",
      "props": {
       "id": "exl-mmx-1",
       "cfg": {
        "d": 300,
        "f": 44100,
        "b": 16,
        "c": 2,
        "u": "MiB"
       }
      }
     }
    },
    {
     "l": "3",
     "q": [
      "Bitrate d'un àudio de CD (44 100 Hz, 16 bits, estèreo), en Kb/s",
      "Bitrate de un audio de CD (44 100 Hz, 16 bits, estéreo), en Kb/s",
      "Bit rate of CD audio (44 100 Hz, 16 bits, stereo), in Kb/s"
     ],
     "a": {
      "k": "num",
      "v": 1411.2,
      "show": "1 411,2 Kb/s"
     },
     "sol": [
      {
       "steps": [
        {
         "done": true,
         "why": [
          "És la mida d'un segon d'àudio: mida = bitrate × durada. Un MP3 a 128 Kb/s ocupa unes 11 vegades menys.",
          "Es el tamaño de un segundo de audio: tamaño = bitrate × duración. Un MP3 a 128 Kb/s ocupa unas 11 veces menos.",
          "It is the size of one second of audio: size = bit rate × duration. An MP3 at 128 Kb/s takes about 11 times less."
         ],
         "x": "**Bitrate = f × b × c**\n`44 100 × 16 × 2 = 1 411 200 b/s = 1 411,2 Kb/s`"
        }
       ],
       "t": "steps"
      }
     ]
    }
   ]
  },
  {
   "id": "c-p-mida",
   "unit": "t1",
   "level": "exam",
   "type": "cparts",
   "src": "exam",
   "srcName": [
    "Model d'examen CP1",
    "Modelo de examen CP1",
    "Test 1 model exam"
   ],
   "title": [
    "Canvis de mida",
    "Cambios de tamaño",
    "Size conversions"
   ],
   "q": [
    "Converteix.",
    "Convierte.",
    "Convert."
   ],
   "note": [
    "Aquests són els blocs que entren al CP1. Fes-los primer sense mirar res, com a l'examen.",
    "Estos son los bloques que entran en el CP1. Hazlos primero sin mirar nada, como en el examen.",
    "These are the blocks that come up in Test 1. Do them first without looking at anything, as in the exam."
   ],
   "parts": [
    {
     "l": "1",
     "q": "4 096 Mb → GiB",
     "a": {
      "k": "num",
      "v": 0.476837158203125,
      "show": "≈ 0,4768 GiB"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix decimal (SI): potències de 10.",
          "Prefijo decimal (SI): potencias de 10.",
          "Decimal prefix (SI): powers of 10."
         ],
         "x": [
          "**Passem a bits**\n`4 096 Mb = 4 096 · 10⁶ b = 4 096 000 000 b`",
          "**Pasamos a bits**\n`4 096 Mb = 4 096 · 10⁶ b = 4 096 000 000 b`",
          "**Convert to bits**\n`4 096 Mb = 4 096 · 10⁶ b = 4 096 000 000 b`"
         ]
        },
        {
         "x": "**De bits a bytes (÷ 8)**\n`4 096 000 000 b ÷ 8 = 512 000 000 B`"
        },
        {
         "table": {
          "head": [
           [
            "Divisió",
            "División",
            "Division"
           ],
           [
            "Compte",
            "Cuenta",
            "Calculation"
           ],
           [
            "Resultat",
            "Resultado",
            "Result"
           ]
          ],
          "rows": [
           [
            "1",
            "512 000 000 B ÷ 1024",
            "= 500 000 KiB"
           ],
           [
            "2",
            "500 000 KiB ÷ 1024",
            "≈ 488,28 MiB"
           ],
           [
            "3",
            "488,28125 MiB ÷ 1024",
            "≈ 0,4768 GiB"
           ]
          ]
         },
         "why": "1 GiB = 2³⁰ B = 1 073 741 824 B.",
         "x": [
          "**Passem a GiB**\n`512 000 000 B ÷ 2³⁰ ≈ 0,476837 GiB`\nPer què es divideix: passes a una unitat més gran, i la pregunta és «quantes vegades hi cap 1 GiB?». És com passar minuts a hores: 30 min ÷ 60 = 0,5 h. Surt menys d'1 perquè no n'arribes a omplir ni una. Dividir per 2³⁰ és el mateix que dividir per 1024 tres vegades, una per prefix:",
          "**Pasamos a GiB**\n`512 000 000 B ÷ 2³⁰ ≈ 0,476837 GiB`\nPor qué se divide: pasas a una unidad más grande, y la pregunta es «¿cuántas veces cabe 1 GiB?». Es como pasar minutos a horas: 30 min ÷ 60 = 0,5 h. Sale menos de 1 porque no llegas a llenar ni una. Dividir por 2³⁰ es lo mismo que dividir por 1024 tres veces, una por prefijo:",
          "**Convert to GiB**\n`512 000 000 B ÷ 2³⁰ ≈ 0.476837 GiB`\nWhy we divide: you are moving to a larger unit, and the question is “how many times does 1 GiB fit?”. It is like converting minutes to hours: 30 min ÷ 60 = 0.5 h. It comes out below 1 because you do not even fill one. Dividing by 2³⁰ is the same as dividing by 1024 three times, once per prefix:"
         ]
        },
        {
         "done": true,
         "why": [
          "El mateix número del pas anterior, arrodonit a 4 decimals.",
          "El mismo número del paso anterior, redondeado a 4 decimales.",
          "The same number as in the previous step, rounded to 4 decimals."
         ],
         "x": [
          "**Resultat**\n`4 096 Mb ≈ 0,4768 GiB`",
          "**Resultado**\n`4 096 Mb ≈ 0,4768 GiB`",
          "**Result**\n`4 096 Mb ≈ 0.4768 GiB`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-p-mida-0",
       "cfg": {
        "x": 4096,
        "a": "Mb",
        "b": "GiB"
       }
      }
     }
    },
    {
     "l": "2",
     "q": "32 KB → bits",
     "a": {
      "k": "num",
      "v": 256000,
      "show": "256 000 b"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Prefix decimal (SI): potències de 10.",
          "Prefijo decimal (SI): potencias de 10.",
          "Decimal prefix (SI): powers of 10."
         ],
         "x": [
          "**Passem a bytes**\n`32 KB = 32 · 10³ B = 32 000 B`",
          "**Pasamos a bytes**\n`32 KB = 32 · 10³ B = 32 000 B`",
          "**Convert to bytes**\n`32 KB = 32 · 10³ B = 32 000 B`"
         ]
        },
        {
         "x": "**De bytes a bits (× 8)**\n`32 000 B · 8 = 256 000 b`"
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`32 KB = 256 000 b`",
          "**Resultado**\n`32 KB = 256 000 b`",
          "**Result**\n`32 KB = 256 000 b`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "units",
      "props": {
       "id": "exl-p-mida-1",
       "cfg": {
        "x": 32,
        "a": "KB",
        "b": "b"
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-p-base",
   "unit": "t21",
   "level": "exam",
   "type": "cparts",
   "src": "exam",
   "srcName": [
    "Model d'examen CP1",
    "Modelo de examen CP1",
    "Test 1 model exam"
   ],
   "title": [
    "Canvis de base",
    "Cambios de base",
    "Base conversions"
   ],
   "q": [
    "Converteix.",
    "Convierte.",
    "Convert."
   ],
   "note": [
    "Aquests són els blocs que entren al CP1. Fes-los primer sense mirar res, com a l'examen.",
    "Estos son los bloques que entran en el CP1. Hazlos primero sin mirar nada, como en el examen.",
    "These are the blocks that come up in Test 1. Do them first without looking at anything, as in the exam."
   ],
   "parts": [
    {
     "l": "1",
     "q": "`101101,101₍₂₎` → base 16",
     "a": {
      "k": "dig",
      "v": "2D,A",
      "show": "2D,A₍₁₆₎"
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "A l'esquerra de la coma s'omple amb zeros per l'esquerra; a la dreta, per la dreta.",
          "A la izquierda de la coma se rellena con ceros por la izquierda; a la derecha, por la derecha.",
          "To the left of the point pad with zeros on the left; to the right, on the right."
         ],
         "x": [
          "**Agrupem de 4 en 4 a partir de la coma**\n`0010 1101 , 1010`",
          "**Agrupamos de 4 en 4 a partir de la coma**\n`0010 1101 , 1010`",
          "**We group in fours from the point**\n`0010 1101 . 1010`"
         ]
        },
        {
         "x": [
          "**Cada grup és un dígit**\n`0010→2  1101→D  ,  1010→A`",
          "**Cada grupo es un dígito**\n`0010→2  1101→D  ,  1010→A`",
          "**Each group is a digit**\n`0010→2  1101→D  .  1010→A`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`101101,101₍₂₎ = 2D,A₍₁₆₎`",
          "**Resultado**\n`101101,101₍₂₎ = 2D,A₍₁₆₎`",
          "**Result**\n`101101.101₍₂₎ = 2D.A₍₁₆₎`"
         ]
        }
       ],
       "t": "steps"
      },
      {
       "blocks": [
        {
         "t": "p",
         "x": [
          "Aquest camí **funciona sempre**, entre qualsevol parell de bases: TFN per passar a base 10 i divisions successives per sortir-ne. Agrupar bits és una **drecera** que només serveix entre les bases 2, 8 i 16 (perquè 8 = 2³ i 16 = 2⁴) i estalvia els comptes grossos. Totes dues donen el mateix resultat.",
          "Este camino **funciona siempre**, entre cualquier par de bases: TFN para pasar a base 10 y divisiones sucesivas para salir de ella. Agrupar bits es un **atajo** que solo sirve entre las bases 2, 8 y 16 (porque 8 = 2³ y 16 = 2⁴) y ahorra las cuentas grandes. Los dos dan el mismo resultado.",
          "This route **always works**, between any pair of bases: PNT to go to base 10 and successive divisions to leave it. Grouping bits is a **shortcut** that only works between bases 2, 8 and 16 (because 8 = 2³ and 16 = 2⁴) and saves the big calculations. Both give the same result."
         ]
        },
        {
         "steps": [
          {
           "x": [
            "**Pas 1 · De base 2 a base 10 (TFN)**\n`101101,101₍₂₎ = 1·2⁵ + 0·2⁴ + 1·2³ + 1·2² + 0·2¹ + 1·2⁰ + 1·2⁻¹ + 0·2⁻² + 1·2⁻³`",
            "**Paso 1 · De base 2 a base 10 (TFN)**\n`101101,101₍₂₎ = 1·2⁵ + 0·2⁴ + 1·2³ + 1·2² + 0·2¹ + 1·2⁰ + 1·2⁻¹ + 0·2⁻² + 1·2⁻³`",
            "**Step 1 · From base 2 to base 10 (PNT)**\n`101101.101₍₂₎ = 1·2⁵ + 0·2⁴ + 1·2³ + 1·2² + 0·2¹ + 1·2⁰ + 1·2⁻¹ + 0·2⁻² + 1·2⁻³`"
           ]
          },
          {
           "x": [
            "`Part entera: 32 + 0 + 8 + 4 + 0 + 1 = 45`",
            "`Parte entera: 32 + 0 + 8 + 4 + 0 + 1 = 45`",
            "`Integer part: 32 + 0 + 8 + 4 + 0 + 1 = 45`"
           ]
          },
          {
           "x": [
            "`Part fraccionària: 1/2¹ + 0/2² + 1/2³ = 5/8 = 0,625`",
            "`Parte fraccionaria: 1/2¹ + 0/2² + 1/2³ = 5/8 = 0,625`",
            "`Fractional part: 1/2¹ + 0/2² + 1/2³ = 5/8 = 0.625`"
           ]
          },
          {
           "x": "`101101,101₍₂₎ = 45,625₍₁₀₎`"
          },
          {
           "table": {
            "head": [
             "n",
             "n ÷ 16",
             [
              "residu",
              "resto",
              "remainder"
             ]
            ],
            "rows": [
             [
              "45",
              "2",
              "D (13)"
             ],
             [
              "2",
              "0",
              "2"
             ]
            ]
           },
           "why": [
            "Es llegeixen els residus de baix cap amunt: 45₍₁₀₎ = 2D₍₁₆₎.",
            "Se leen los restos de abajo arriba: 45₍₁₀₎ = 2D₍₁₆₎.",
            "The remainders are read from bottom to top: 45₍₁₀₎ = 2D₍₁₆₎."
           ],
           "x": [
            "**Pas 2 · Part entera: divisions successives per 16**",
            "**Paso 2 · Parte entera: divisiones sucesivas por 16**",
            "**Step 2 · Integer part: successive divisions by 16**"
           ]
          },
          {
           "table": {
            "head": [
             [
              "fracció",
              "fracción",
              "fraction"
             ],
             "× 16",
             [
              "dígit",
              "dígito",
              "digit"
             ]
            ],
            "rows": [
             [
              "0,625",
              "10",
              "A"
             ]
            ]
           },
           "why": [
            "La part fraccionària arriba a 0: el resultat és exacte. Els dígits es llegeixen de dalt cap avall.",
            "La parte fraccionaria llega a 0: el resultado es exacto. Los dígitos se leen de arriba abajo.",
            "The fractional part reaches 0: the result is exact. The digits are read from top to bottom."
           ],
           "x": [
            "**Part fraccionària: multiplicacions successives per 16**\nA cada fila: multiplica la fracció per 16. La part entera del resultat (de 0 a 15) és el dígit següent; a la fila de sota continues només amb la part de després de la coma. Para quan la fracció surt 0 o quan torna a sortir una fracció que ja havies tingut.",
            "**Parte fraccionaria: multiplicaciones sucesivas por 16**\nEn cada fila: multiplica la fracción por 16. La parte entera del resultado (de 0 a 15) es el dígito siguiente; en la fila de abajo sigues solo con la parte de después de la coma. Para cuando la fracción sale 0 o cuando vuelve a salir una fracción que ya habías tenido.",
            "**Fractional part: successive multiplications by 16**\nIn each row: multiply the fraction by 16. The integer part of the result (from 0 to 15) is the next digit; in the row below you continue only with the part after the point. Stop when the fraction comes out 0 or when a fraction you already had comes up again."
           ]
          },
          {
           "done": true,
           "x": [
            "**Resultat**\n`101101,101₍₂₎ = 2D,A₍₁₆₎`",
            "**Resultado**\n`101101,101₍₂₎ = 2D,A₍₁₆₎`",
            "**Result**\n`101101.101₍₂₎ = 2D.A₍₁₆₎`"
           ]
          }
         ],
         "t": "steps"
        }
       ],
       "t": "details",
       "title": [
        "Una altra manera: amb el TFN, passant per base 10",
        "Otra manera: con el TFN, pasando por base 10",
        "Another way: with the PNT, going through base 10"
       ]
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-p-base-0",
       "cfg": {
        "x": "101101,101",
        "a": 2,
        "b": 16
       }
      }
     }
    },
    {
     "l": "2",
     "q": "`2A,4₍₁₁₎` → base 3",
     "a": {
      "k": "dig",
      "v": "1012,(10021)",
      "show": "1012,(10021)₍₃₎",
      "ph": [
       "període entre parèntesis",
       "periodo entre paréntesis",
       "period in parentheses"
      ]
     },
     "sol": [
      {
       "t": "warn",
       "x": [
        "Les diapositives s'aturen a quatre xifres i escriuen 1012,1002…₍₃₎. Si es continua, apareix un 1 i torna la fracció inicial 4/11: el període complet és **10021**.",
        "Las diapositivas se paran en cuatro cifras y escriben 1012,1002…₍₃₎. Si se continúa, aparece un 1 y vuelve la fracción inicial 4/11: el periodo completo es **10021**.",
        "The slides stop at four digits and write 1012.1002…₍₃₎. If you continue, a 1 appears and the initial fraction 4/11 comes back: the full period is **10021**."
       ]
      },
      {
       "steps": [
        {
         "why": [
          "Les lletres valen: A = 10.",
          "Las letras valen: A = 10.",
          "The letters are worth: A = 10."
         ],
         "x": [
          "**Pas 1 · De base 11 a base 10 (TFN)**\n`2A,4₍₁₁₎ = 2·11¹ + A(10)·11⁰ + 4·11⁻¹`",
          "**Paso 1 · De base 11 a base 10 (TFN)**\n`2A,4₍₁₁₎ = 2·11¹ + A(10)·11⁰ + 4·11⁻¹`",
          "**Step 1 · From base 11 to base 10 (PNT)**\n`2A.4₍₁₁₎ = 2·11¹ + A(10)·11⁰ + 4·11⁻¹`"
         ]
        },
        {
         "x": [
          "`Part entera: 22 + 10 = 32`",
          "`Parte entera: 22 + 10 = 32`",
          "`Integer part: 22 + 10 = 32`"
         ]
        },
        {
         "x": [
          "`Part fraccionària: 4/11 = 0,(36)`",
          "`Parte fraccionaria: 4/11 = 0,(36)`",
          "`Fractional part: 4/11 = 0.(36)`"
         ]
        },
        {
         "x": "`2A,4₍₁₁₎ = 32,(36)₍₁₀₎`"
        },
        {
         "table": {
          "head": [
           "n",
           "n ÷ 3",
           [
            "residu",
            "resto",
            "remainder"
           ]
          ],
          "rows": [
           [
            "32",
            "10",
            "2"
           ],
           [
            "10",
            "3",
            "1"
           ],
           [
            "3",
            "1",
            "0"
           ],
           [
            "1",
            "0",
            "1"
           ]
          ]
         },
         "why": [
          "Es llegeixen els residus de baix cap amunt: 32₍₁₀₎ = 1012₍₃₎.",
          "Se leen los restos de abajo arriba: 32₍₁₀₎ = 1012₍₃₎.",
          "The remainders are read from bottom to top: 32₍₁₀₎ = 1012₍₃₎."
         ],
         "x": [
          "**Pas 2 · Part entera: divisions successives per 3**",
          "**Paso 2 · Parte entera: divisiones sucesivas por 3**",
          "**Step 2 · Integer part: successive divisions by 3**"
         ]
        },
        {
         "table": {
          "head": [
           [
            "fracció",
            "fracción",
            "fraction"
           ],
           "× 3",
           [
            "dígit",
            "dígito",
            "digit"
           ]
          ],
          "rows": [
           [
            "0,363636…",
            "1,090909…",
            "1"
           ],
           [
            "0,090909…",
            "0,272727…",
            "0"
           ],
           [
            "0,272727…",
            "0,818181…",
            "0"
           ],
           [
            "0,818181…",
            "2,454545…",
            "2"
           ],
           [
            "0,454545…",
            "1,363636…",
            "1"
           ]
          ]
         },
         "why": [
          "Torna a aparèixer una fracció ja vista: a partir d'aquí els dígits es repeteixen (període 10021).",
          "Vuelve a aparecer una fracción ya vista: a partir de aquí los dígitos se repiten (periodo 10021).",
          "A fraction already seen appears again: from here on the digits repeat (period 10021)."
         ],
         "x": [
          "**Part fraccionària: multiplicacions successives per 3**\nA cada fila: multiplica la fracció per 3. La part entera del resultat (de 0 a 2) és el dígit següent; a la fila de sota continues només amb la part de després de la coma. Para quan la fracció surt 0 o quan torna a sortir una fracció que ja havies tingut.",
          "**Parte fraccionaria: multiplicaciones sucesivas por 3**\nEn cada fila: multiplica la fracción por 3. La parte entera del resultado (de 0 a 2) es el dígito siguiente; en la fila de abajo sigues solo con la parte de después de la coma. Para cuando la fracción sale 0 o cuando vuelve a salir una fracción que ya habías tenido.",
          "**Fractional part: successive multiplications by 3**\nIn each row: multiply the fraction by 3. The integer part of the result (from 0 to 2) is the next digit; in the row below you continue only with the part after the point. Stop when the fraction comes out 0 or when a fraction you already had comes up again."
         ]
        },
        {
         "done": true,
         "why": [
          "Els dígits entre parèntesis es repeteixen indefinidament.",
          "Los dígitos entre paréntesis se repiten indefinidamente.",
          "The digits in parentheses repeat indefinitely."
         ],
         "x": [
          "**Resultat**\n`2A,4₍₁₁₎ = 1012,(10021)₍₃₎`",
          "**Resultado**\n`2A,4₍₁₁₎ = 1012,(10021)₍₃₎`",
          "**Result**\n`2A.4₍₁₁₎ = 1012.(10021)₍₃₎`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "conv",
      "props": {
       "id": "exl-p-base-1",
       "cfg": {
        "x": "2A,4",
        "a": 11,
        "b": 3
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-p-op",
   "unit": "t21",
   "level": "exam",
   "type": "cparts",
   "src": "exam",
   "srcName": [
    "Model d'examen CP1",
    "Modelo de examen CP1",
    "Test 1 model exam"
   ],
   "title": [
    "Operació",
    "Operación",
    "Operation"
   ],
   "q": ["Calcula en octal.", "Calcula en octal.", "Compute in octal."],
   "note": [
    "Aquests són els blocs que entren al CP1. Fes-los primer sense mirar res, com a l'examen.",
    "Estos son los bloques que entran en el CP1. Hazlos primero sin mirar nada, como en el examen.",
    "These are the blocks that come up in Test 1. Do them first without looking at anything, as in the exam."
   ],
   "parts": [
    {
     "l": "1",
     "q": "`527₍₈₎ + 346₍₈₎`",
     "a": {
      "k": "dig",
      "v": "1075",
      "show": "1075₍₈₎"
     },
     "sol": [
      {
       "steps": [
        {
         "table": {
          "head": [
           "columna",
           [
            "càlcul (en decimal)",
            "cálculo (en decimal)",
            "calculation (in decimal)"
           ],
           [
            "escric",
            "escribo",
            "I write"
           ],
           [
            "em porto",
            "me llevo",
            "I carry"
           ]
          ],
          "rows": [
           [
            "1",
            "7 + 6 = 13 = 1·8 + 5",
            "5",
            "1"
           ],
           [
            "2",
            "2 + 4 + 1 = 7",
            "7",
            "—"
           ],
           [
            "3",
            "5 + 3 = 8 = 1·8 + 0",
            "0",
            "1"
           ],
           [
            "4",
            "0 + 0 + 1 = 1",
            "1",
            "—"
           ]
          ]
         },
         "why": [
          "Quan la suma d'una columna arriba a 8, escrivim el residu i ens en portem 1.",
          "Cuando la suma de una columna llega a 8, escribimos el resto y nos llevamos 1.",
          "When the sum of a column reaches 8, we write the remainder and carry 1."
         ],
         "x": [
          "**Suma columna a columna, de dreta a esquerra**",
          "**Suma columna a columna, de derecha a izquierda**",
          "**Addition column by column, from right to left**"
         ]
        },
        {
         "done": true,
         "why": [
          "Comprovació en decimal: 343 + 230 = 573 = 1075₍₈₎.",
          "Comprobación en decimal: 343 + 230 = 573 = 1075₍₈₎.",
          "Check in decimal: 343 + 230 = 573 = 1075₍₈₎."
         ],
         "x": [
          "**Resultat**\n`527₍₈₎ + 346₍₈₎ = 1075₍₈₎`",
          "**Resultado**\n`527₍₈₎ + 346₍₈₎ = 1075₍₈₎`",
          "**Result**\n`527₍₈₎ + 346₍₈₎ = 1075₍₈₎`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "arith",
      "props": {
       "id": "exl-p-op-0",
       "cfg": {
        "a": "527",
        "b": "346",
        "base": 8,
        "op": "+"
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-p-sm",
   "unit": "t21",
   "level": "exam",
   "type": "cparts",
   "src": "exam",
   "srcName": [
    "Model d'examen CP1",
    "Modelo de examen CP1",
    "Test 1 model exam"
   ],
   "title": "SM",
   "q": [
    "Representa en signe i magnitud amb 8 bits (primer passa a base 10).",
    "Representa en signo y magnitud con 8 bits (primero pasa a base 10).",
    "Represent in sign and magnitude with 8 bits (first convert to base 10)."
   ],
   "note": [
    "Aquests són els blocs que entren al CP1. Fes-los primer sense mirar res, com a l'examen.",
    "Estos son los bloques que entran en el CP1. Hazlos primero sin mirar nada, como en el examen.",
    "These are the blocks that come up in Test 1. Do them first without looking at anything, as in the exam."
   ],
   "parts": [
    {
     "l": "1",
     "q": "`−324₍₅₎` → SM, 8 bits",
     "a": {
      "k": "bits",
      "v": "11011001",
      "show": "11011001₍SM₎",
      "alt": [
       {
        "v": "10100110",
        "msg": [
         "Això és la representació en C1, no en SM.",
         "Eso es la representación en C1, no en SM.",
         "That is the 1C representation, not SM."
        ]
       },
       {
        "v": "10100111",
        "msg": [
         "Això és la representació en C2, no en SM.",
         "Eso es la representación en C2, no en SM.",
         "That is the 2C representation, not SM."
        ]
       },
       {
        "v": "00100111",
        "msg": [
         "Això és la representació en CE, no en SM.",
         "Eso es la representación en CE, no en SM.",
         "That is the excess-code representation, not SM."
        ]
       },
       {
        "v": "01011001",
        "msg": [
         "Aquest és +89. Falta codificar el signe negatiu.",
         "Este es +89. Falta codificar el signo negativo.",
         "This is +89. The negative sign still has to be encoded."
        ]
       }
      ]
     },
     "sol": [
      {
       "t": "h",
       "x": [
        "Pas 1 · a base 10",
        "Paso 1 · a base 10",
        "Step 1 · to base 10"
       ]
      },
      {
       "steps": [
        {
         "x": [
          "**Pas 1 · De base 5 a base 10 (TFN)**\n`324₍₅₎ = 3·5² + 2·5¹ + 4·5⁰`",
          "**Paso 1 · De base 5 a base 10 (TFN)**\n`324₍₅₎ = 3·5² + 2·5¹ + 4·5⁰`",
          "**Step 1 · From base 5 to base 10 (PNT)**\n`324₍₅₎ = 3·5² + 2·5¹ + 4·5⁰`"
         ]
        },
        {
         "x": [
          "`Part entera: 75 + 10 + 4 = 89`",
          "`Parte entera: 75 + 10 + 4 = 89`",
          "`Integer part: 75 + 10 + 4 = 89`"
         ]
        },
        {
         "x": "`324₍₅₎ = 89₍₁₀₎`",
         "done": true
        }
       ],
       "t": "steps"
      },
      {
       "t": "h",
       "x": [
        "Pas 2 · signe i magnitud",
        "Paso 2 · signo y magnitud",
        "Step 2 · sign and magnitude"
       ]
      },
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`89₍₁₀₎ = 1011001₍₂₎`",
          "**Valor absoluto en binario**\n`89₍₁₀₎ = 1011001₍₂₎`",
          "**Absolute value in binary**\n`89₍₁₀₎ = 1011001₍₂₎`"
         ]
        },
        {
         "why": [
          "El primer bit queda reservat per al signe.",
          "El primer bit queda reservado para el signo.",
          "The first bit is reserved for the sign."
         ],
         "x": [
          "**Magnitud amb 7 bits**\n`1011001`",
          "**Magnitud con 7 bits**\n`1011001`",
          "**Magnitude with 7 bits**\n`1011001`"
         ]
        },
        {
         "x": [
          "**Bit de signe**\n`1 (negatiu)`",
          "**Bit de signo**\n`1 (negativo)`",
          "**Sign bit**\n`1 (negative)`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`−89 = 1 1011001  →  11011001_SM`",
          "**Resultado**\n`−89 = 1 1011001  →  11011001_SM`",
          "**Result**\n`−89 = 1 1011001  →  11011001_SM`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-p-sm-0",
       "cfg": {
        "mode": "enc",
        "sys": "SM",
        "n": -89,
        "N": 8
       }
      }
     }
    },
    {
     "l": "2",
     "q": "`143₍₅₎` → SM, 8 bits",
     "a": {
      "k": "bits",
      "v": "00110000",
      "show": "00110000₍SM₎",
      "alt": [
       {
        "v": "10110000",
        "msg": [
         "Això és la representació en CE, no en SM.",
         "Eso es la representación en CE, no en SM.",
         "That is the excess-code representation, not SM."
        ]
       }
      ]
     },
     "sol": [
      {
       "t": "h",
       "x": [
        "Pas 1 · a base 10",
        "Paso 1 · a base 10",
        "Step 1 · to base 10"
       ]
      },
      {
       "steps": [
        {
         "x": [
          "**Pas 1 · De base 5 a base 10 (TFN)**\n`143₍₅₎ = 1·5² + 4·5¹ + 3·5⁰`",
          "**Paso 1 · De base 5 a base 10 (TFN)**\n`143₍₅₎ = 1·5² + 4·5¹ + 3·5⁰`",
          "**Step 1 · From base 5 to base 10 (PNT)**\n`143₍₅₎ = 1·5² + 4·5¹ + 3·5⁰`"
         ]
        },
        {
         "x": [
          "`Part entera: 25 + 20 + 3 = 48`",
          "`Parte entera: 25 + 20 + 3 = 48`",
          "`Integer part: 25 + 20 + 3 = 48`"
         ]
        },
        {
         "x": "`143₍₅₎ = 48₍₁₀₎`",
         "done": true
        }
       ],
       "t": "steps"
      },
      {
       "t": "h",
       "x": [
        "Pas 2 · signe i magnitud",
        "Paso 2 · signo y magnitud",
        "Step 2 · sign and magnitude"
       ]
      },
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`48₍₁₀₎ = 110000₍₂₎`",
          "**Valor absoluto en binario**\n`48₍₁₀₎ = 110000₍₂₎`",
          "**Absolute value in binary**\n`48₍₁₀₎ = 110000₍₂₎`"
         ]
        },
        {
         "why": [
          "El primer bit queda reservat per al signe.",
          "El primer bit queda reservado para el signo.",
          "The first bit is reserved for the sign."
         ],
         "x": [
          "**Magnitud amb 7 bits**\n`0110000`",
          "**Magnitud con 7 bits**\n`0110000`",
          "**Magnitude with 7 bits**\n`0110000`"
         ]
        },
        {
         "x": [
          "**Bit de signe**\n`0 (positiu)`",
          "**Bit de signo**\n`0 (positivo)`",
          "**Sign bit**\n`0 (positive)`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+48 = 0 0110000  →  00110000_SM`",
          "**Resultado**\n`+48 = 0 0110000  →  00110000_SM`",
          "**Result**\n`+48 = 0 0110000  →  00110000_SM`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-p-sm-1",
       "cfg": {
        "mode": "enc",
        "sys": "SM",
        "n": 48,
        "N": 8
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-p-c1",
   "unit": "t21",
   "level": "exam",
   "type": "cparts",
   "src": "exam",
   "srcName": [
    "Model d'examen CP1",
    "Modelo de examen CP1",
    "Test 1 model exam"
   ],
   "title": "C1",
   "q": [
    "Representa en complement a 1 amb 8 bits.",
    "Representa en complemento a 1 con 8 bits.",
    "Represent in ones' complement with 8 bits."
   ],
   "note": [
    "Aquests són els blocs que entren al CP1. Fes-los primer sense mirar res, com a l'examen.",
    "Estos son los bloques que entran en el CP1. Hazlos primero sin mirar nada, como en el examen.",
    "These are the blocks that come up in Test 1. Do them first without looking at anything, as in the exam."
   ],
   "parts": [
    {
     "l": "1",
     "q": [
      "`+37` → C1 amb 8 bits",
      "`+37` → C1 con 8 bits",
      "`+37` → 1C with 8 bits"
     ],
     "a": {
      "k": "bits",
      "v": "00100101",
      "show": "00100101₍C1₎",
      "alt": [
       {
        "v": "10100101",
        "msg": [
         "Això és la representació en CE, no en C1.",
         "Eso es la representación en CE, no en C1.",
         "That is the excess-code representation, not 1C."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`37₍₁₀₎ = 100101₍₂₎`",
          "**Valor absoluto en binario**\n`37₍₁₀₎ = 100101₍₂₎`",
          "**Absolute value in binary**\n`37₍₁₀₎ = 100101₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C1: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C1: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 1C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 8 bits**\n`+37 = 00100101`",
          "**Positivo con 8 bits**\n`+37 = 00100101`",
          "**Positive with 8 bits**\n`+37 = 00100101`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+37 = 00100101_C1`",
          "**Resultado**\n`+37 = 00100101_C1`",
          "**Result**\n`+37 = 00100101_C1`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-p-c1-0",
       "cfg": {
        "mode": "enc",
        "sys": "C1",
        "n": 37,
        "N": 8
       }
      }
     }
    },
    {
     "l": "2",
     "q": [
      "`−37` → C1 amb 8 bits",
      "`−37` → C1 con 8 bits",
      "`−37` → 1C with 8 bits"
     ],
     "a": {
      "k": "bits",
      "v": "11011010",
      "show": "11011010₍C1₎",
      "alt": [
       {
        "v": "10100101",
        "msg": [
         "Això és la representació en SM, no en C1.",
         "Eso es la representación en SM, no en C1.",
         "That is the SM representation, not 1C."
        ]
       },
       {
        "v": "11011011",
        "msg": [
         "Això és la representació en C2, no en C1.",
         "Eso es la representación en C2, no en C1.",
         "That is the 2C representation, not 1C."
        ]
       },
       {
        "v": "01011011",
        "msg": [
         "Això és la representació en CE, no en C1.",
         "Eso es la representación en CE, no en C1.",
         "That is the excess-code representation, not 1C."
        ]
       },
       {
        "v": "00100101",
        "msg": [
         "Aquest és +37. Falta codificar el signe negatiu.",
         "Este es +37. Falta codificar el signo negativo.",
         "This is +37. The negative sign still has to be encoded."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`37₍₁₀₎ = 100101₍₂₎`",
          "**Valor absoluto en binario**\n`37₍₁₀₎ = 100101₍₂₎`",
          "**Absolute value in binary**\n`37₍₁₀₎ = 100101₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C1: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C1: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 1C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 8 bits**\n`+37 = 00100101`",
          "**Positivo con 8 bits**\n`+37 = 00100101`",
          "**Positive with 8 bits**\n`+37 = 00100101`"
         ]
        },
        {
         "x": [
          "**Invertim tots els bits**\n`00100101 → 11011010`",
          "**Invertimos todos los bits**\n`00100101 → 11011010`",
          "**We invert all the bits**\n`00100101 → 11011010`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`−37 = 11011010_C1`",
          "**Resultado**\n`−37 = 11011010_C1`",
          "**Result**\n`−37 = 11011010_C1`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-p-c1-1",
       "cfg": {
        "mode": "enc",
        "sys": "C1",
        "n": -37,
        "N": 8
       }
      }
     }
    },
    {
     "l": "3",
     "q": [
      "`+82` → C1 amb 8 bits",
      "`+82` → C1 con 8 bits",
      "`+82` → 1C with 8 bits"
     ],
     "a": {
      "k": "bits",
      "v": "01010010",
      "show": "01010010₍C1₎",
      "alt": [
       {
        "v": "11010010",
        "msg": [
         "Això és la representació en CE, no en C1.",
         "Eso es la representación en CE, no en C1.",
         "That is the excess-code representation, not 1C."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`82₍₁₀₎ = 1010010₍₂₎`",
          "**Valor absoluto en binario**\n`82₍₁₀₎ = 1010010₍₂₎`",
          "**Absolute value in binary**\n`82₍₁₀₎ = 1010010₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C1: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C1: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 1C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 8 bits**\n`+82 = 01010010`",
          "**Positivo con 8 bits**\n`+82 = 01010010`",
          "**Positive with 8 bits**\n`+82 = 01010010`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+82 = 01010010_C1`",
          "**Resultado**\n`+82 = 01010010_C1`",
          "**Result**\n`+82 = 01010010_C1`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-p-c1-2",
       "cfg": {
        "mode": "enc",
        "sys": "C1",
        "n": 82,
        "N": 8
       }
      }
     }
    },
    {
     "l": "4",
     "q": [
      "`−82` → C1 amb 8 bits",
      "`−82` → C1 con 8 bits",
      "`−82` → 1C with 8 bits"
     ],
     "a": {
      "k": "bits",
      "v": "10101101",
      "show": "10101101₍C1₎",
      "alt": [
       {
        "v": "11010010",
        "msg": [
         "Això és la representació en SM, no en C1.",
         "Eso es la representación en SM, no en C1.",
         "That is the SM representation, not 1C."
        ]
       },
       {
        "v": "10101110",
        "msg": [
         "Això és la representació en C2, no en C1.",
         "Eso es la representación en C2, no en C1.",
         "That is the 2C representation, not 1C."
        ]
       },
       {
        "v": "00101110",
        "msg": [
         "Això és la representació en CE, no en C1.",
         "Eso es la representación en CE, no en C1.",
         "That is the excess-code representation, not 1C."
        ]
       },
       {
        "v": "01010010",
        "msg": [
         "Aquest és +82. Falta codificar el signe negatiu.",
         "Este es +82. Falta codificar el signo negativo.",
         "This is +82. The negative sign still has to be encoded."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`82₍₁₀₎ = 1010010₍₂₎`",
          "**Valor absoluto en binario**\n`82₍₁₀₎ = 1010010₍₂₎`",
          "**Absolute value in binary**\n`82₍₁₀₎ = 1010010₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C1: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C1: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 1C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 8 bits**\n`+82 = 01010010`",
          "**Positivo con 8 bits**\n`+82 = 01010010`",
          "**Positive with 8 bits**\n`+82 = 01010010`"
         ]
        },
        {
         "x": [
          "**Invertim tots els bits**\n`01010010 → 10101101`",
          "**Invertimos todos los bits**\n`01010010 → 10101101`",
          "**We invert all the bits**\n`01010010 → 10101101`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`−82 = 10101101_C1`",
          "**Resultado**\n`−82 = 10101101_C1`",
          "**Result**\n`−82 = 10101101_C1`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-p-c1-3",
       "cfg": {
        "mode": "enc",
        "sys": "C1",
        "n": -82,
        "N": 8
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-p-c2",
   "unit": "t21",
   "level": "exam",
   "type": "cparts",
   "src": "exam",
   "srcName": [
    "Model d'examen CP1",
    "Modelo de examen CP1",
    "Test 1 model exam"
   ],
   "title": "C2",
   "q": [
    "Representa en complement a 2 amb 9 bits.",
    "Representa en complemento a 2 con 9 bits.",
    "Represent in two's complement with 9 bits."
   ],
   "note": [
    "Aquests són els blocs que entren al CP1. Fes-los primer sense mirar res, com a l'examen.",
    "Estos son los bloques que entran en el CP1. Hazlos primero sin mirar nada, como en el examen.",
    "These are the blocks that come up in Test 1. Do them first without looking at anything, as in the exam."
   ],
   "parts": [
    {
     "l": "1",
     "q": [
      "`+75` → C2 amb 9 bits",
      "`+75` → C2 con 9 bits",
      "`+75` → 2C with 9 bits"
     ],
     "a": {
      "k": "bits",
      "v": "001001011",
      "show": "001001011₍C2₎",
      "alt": [
       {
        "v": "101001011",
        "msg": [
         "Això és la representació en CE, no en C2.",
         "Eso es la representación en CE, no en C2.",
         "That is the excess-code representation, not 2C."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`75₍₁₀₎ = 1001011₍₂₎`",
          "**Valor absoluto en binario**\n`75₍₁₀₎ = 1001011₍₂₎`",
          "**Absolute value in binary**\n`75₍₁₀₎ = 1001011₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C2: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C2: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 2C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 9 bits**\n`+75 = 001001011`",
          "**Positivo con 9 bits**\n`+75 = 001001011`",
          "**Positive with 9 bits**\n`+75 = 001001011`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+75 = 001001011_C2`",
          "**Resultado**\n`+75 = 001001011_C2`",
          "**Result**\n`+75 = 001001011_C2`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-p-c2-0",
       "cfg": {
        "mode": "enc",
        "sys": "C2",
        "n": 75,
        "N": 9
       }
      }
     }
    },
    {
     "l": "2",
     "q": [
      "`−75` → C2 amb 9 bits",
      "`−75` → C2 con 9 bits",
      "`−75` → 2C with 9 bits"
     ],
     "a": {
      "k": "bits",
      "v": "110110101",
      "show": "110110101₍C2₎",
      "alt": [
       {
        "v": "101001011",
        "msg": [
         "Això és la representació en SM, no en C2.",
         "Eso es la representación en SM, no en C2.",
         "That is the SM representation, not 2C."
        ]
       },
       {
        "v": "110110100",
        "msg": [
         "Això és la representació en C1, no en C2.",
         "Eso es la representación en C1, no en C2.",
         "That is the 1C representation, not 2C."
        ]
       },
       {
        "v": "010110101",
        "msg": [
         "Això és la representació en CE, no en C2.",
         "Eso es la representación en CE, no en C2.",
         "That is the excess-code representation, not 2C."
        ]
       },
       {
        "v": "001001011",
        "msg": [
         "Aquest és +75. Falta codificar el signe negatiu.",
         "Este es +75. Falta codificar el signo negativo.",
         "This is +75. The negative sign still has to be encoded."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`75₍₁₀₎ = 1001011₍₂₎`",
          "**Valor absoluto en binario**\n`75₍₁₀₎ = 1001011₍₂₎`",
          "**Absolute value in binary**\n`75₍₁₀₎ = 1001011₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C2: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C2: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 2C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 9 bits**\n`+75 = 001001011`",
          "**Positivo con 9 bits**\n`+75 = 001001011`",
          "**Positive with 9 bits**\n`+75 = 001001011`"
         ]
        },
        {
         "x": [
          "**Invertim tots els bits**\n`001001011 → 110110100`",
          "**Invertimos todos los bits**\n`001001011 → 110110100`",
          "**We invert all the bits**\n`001001011 → 110110100`"
         ]
        },
        {
         "x": [
          "**Sumem 1**\n`110110100 + 1 = 110110101`",
          "**Sumamos 1**\n`110110100 + 1 = 110110101`",
          "**We add 1**\n`110110100 + 1 = 110110101`"
         ]
        },
        {
         "done": true,
         "why": [
          "Comprovació ràpida: copia des de la dreta fins al primer 1 inclòs i inverteix la resta → 110110101.",
          "Comprobación rápida: copia desde la derecha hasta el primer 1 incluido e invierte el resto → 110110101.",
          "Quick check: copy from the right up to the first 1 included and invert the rest → 110110101."
         ],
         "x": [
          "**Resultat**\n`−75 = 110110101_C2`",
          "**Resultado**\n`−75 = 110110101_C2`",
          "**Result**\n`−75 = 110110101_C2`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-p-c2-1",
       "cfg": {
        "mode": "enc",
        "sys": "C2",
        "n": -75,
        "N": 9
       }
      }
     }
    },
    {
     "l": "3",
     "q": [
      "`+156` → C2 amb 9 bits",
      "`+156` → C2 con 9 bits",
      "`+156` → 2C with 9 bits"
     ],
     "a": {
      "k": "bits",
      "v": "010011100",
      "show": "010011100₍C2₎",
      "alt": [
       {
        "v": "110011100",
        "msg": [
         "Això és la representació en CE, no en C2.",
         "Eso es la representación en CE, no en C2.",
         "That is the excess-code representation, not 2C."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`156₍₁₀₎ = 10011100₍₂₎`",
          "**Valor absoluto en binario**\n`156₍₁₀₎ = 10011100₍₂₎`",
          "**Absolute value in binary**\n`156₍₁₀₎ = 10011100₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C2: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C2: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 2C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 9 bits**\n`+156 = 010011100`",
          "**Positivo con 9 bits**\n`+156 = 010011100`",
          "**Positive with 9 bits**\n`+156 = 010011100`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+156 = 010011100_C2`",
          "**Resultado**\n`+156 = 010011100_C2`",
          "**Result**\n`+156 = 010011100_C2`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-p-c2-2",
       "cfg": {
        "mode": "enc",
        "sys": "C2",
        "n": 156,
        "N": 9
       }
      }
     }
    },
    {
     "l": "4",
     "q": [
      "`−156` → C2 amb 9 bits",
      "`−156` → C2 con 9 bits",
      "`−156` → 2C with 9 bits"
     ],
     "a": {
      "k": "bits",
      "v": "101100100",
      "show": "101100100₍C2₎",
      "alt": [
       {
        "v": "110011100",
        "msg": [
         "Això és la representació en SM, no en C2.",
         "Eso es la representación en SM, no en C2.",
         "That is the SM representation, not 2C."
        ]
       },
       {
        "v": "101100011",
        "msg": [
         "Això és la representació en C1, no en C2.",
         "Eso es la representación en C1, no en C2.",
         "That is the 1C representation, not 2C."
        ]
       },
       {
        "v": "001100100",
        "msg": [
         "Això és la representació en CE, no en C2.",
         "Eso es la representación en CE, no en C2.",
         "That is the excess-code representation, not 2C."
        ]
       },
       {
        "v": "010011100",
        "msg": [
         "Aquest és +156. Falta codificar el signe negatiu.",
         "Este es +156. Falta codificar el signo negativo.",
         "This is +156. The negative sign still has to be encoded."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "why": [
          "Divisions successives per 2 (residus de baix cap amunt).",
          "Divisiones sucesivas por 2 (restos de abajo arriba).",
          "Successive divisions by 2 (remainders from bottom to top)."
         ],
         "x": [
          "**Valor absolut en binari**\n`156₍₁₀₎ = 10011100₍₂₎`",
          "**Valor absoluto en binario**\n`156₍₁₀₎ = 10011100₍₂₎`",
          "**Absolute value in binary**\n`156₍₁₀₎ = 10011100₍₂₎`"
         ]
        },
        {
         "why": [
          "Els positius s'escriuen igual en C2: binari omplert amb zeros per l'esquerra (el primer bit queda a 0).",
          "Los positivos se escriben igual en C2: binario rellenado con ceros por la izquierda (el primer bit queda a 0).",
          "Positives are written the same way in 2C: binary padded with zeros on the left (the first bit stays 0)."
         ],
         "x": [
          "**Positiu amb 9 bits**\n`+156 = 010011100`",
          "**Positivo con 9 bits**\n`+156 = 010011100`",
          "**Positive with 9 bits**\n`+156 = 010011100`"
         ]
        },
        {
         "x": [
          "**Invertim tots els bits**\n`010011100 → 101100011`",
          "**Invertimos todos los bits**\n`010011100 → 101100011`",
          "**We invert all the bits**\n`010011100 → 101100011`"
         ]
        },
        {
         "x": [
          "**Sumem 1**\n`101100011 + 1 = 101100100`",
          "**Sumamos 1**\n`101100011 + 1 = 101100100`",
          "**We add 1**\n`101100011 + 1 = 101100100`"
         ]
        },
        {
         "done": true,
         "why": [
          "Comprovació ràpida: copia des de la dreta fins al primer 1 inclòs i inverteix la resta → 101100100.",
          "Comprobación rápida: copia desde la derecha hasta el primer 1 incluido e invierte el resto → 101100100.",
          "Quick check: copy from the right up to the first 1 included and invert the rest → 101100100."
         ],
         "x": [
          "**Resultat**\n`−156 = 101100100_C2`",
          "**Resultado**\n`−156 = 101100100_C2`",
          "**Result**\n`−156 = 101100100_C2`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-p-c2-3",
       "cfg": {
        "mode": "enc",
        "sys": "C2",
        "n": -156,
        "N": 9
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-p-ce",
   "unit": "t21",
   "level": "exam",
   "type": "cparts",
   "src": "exam",
   "srcName": [
    "Model d'examen CP1",
    "Modelo de examen CP1",
    "Test 1 model exam"
   ],
   "title": "CE",
   "q": [
    "Representa en codi d'excés amb 10 bits.",
    "Representa en código de exceso con 10 bits.",
    "Represent in excess code with 10 bits."
   ],
   "note": [
    "Aquests són els blocs que entren al CP1. Fes-los primer sense mirar res, com a l'examen.",
    "Estos son los bloques que entran en el CP1. Hazlos primero sin mirar nada, como en el examen.",
    "These are the blocks that come up in Test 1. Do them first without looking at anything, as in the exam."
   ],
   "parts": [
    {
     "l": "1",
     "q": [
      "`+75` → CE amb 10 bits",
      "`+75` → CE con 10 bits",
      "`+75` → excess with 10 bits"
     ],
     "a": {
      "k": "bits",
      "v": "1001001011",
      "show": "1001001011₍CE₎",
      "alt": [
       {
        "v": "0001001011",
        "msg": [
         "Això és la representació en SM, no en CE.",
         "Eso es la representación en SM, no en CE.",
         "That is the SM representation, not excess code."
        ]
       },
       {
        "v": "0001001011",
        "msg": [
         "Això és la representació en C1, no en CE.",
         "Eso es la representación en C1, no en CE.",
         "That is the 1C representation, not excess code."
        ]
       },
       {
        "v": "0001001011",
        "msg": [
         "Això és la representació en C2, no en CE.",
         "Eso es la representación en C2, no en CE.",
         "That is the 2C representation, not excess code."
        ]
       },
       {
        "v": "1001001010",
        "msg": [
         "Has fet servir excés 2^(N−1) − 1 (el de l'IEEE). El codi d'excés del curs és E = 2^(N−1) = 512.",
         "Has usado exceso 2^(N−1) − 1 (el del IEEE). El código de exceso del curso es E = 2^(N−1) = 512.",
         "You have used excess 2^(N−1) − 1 (the IEEE one). The course's excess code is E = 2^(N−1) = 512."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Excés (biaix) amb 10 bits**\n`E = 2⁹ = 512`",
          "**Exceso (sesgo) con 10 bits**\n`E = 2⁹ = 512`",
          "**Excess (bias) with 10 bits**\n`E = 2⁹ = 512`"
         ]
        },
        {
         "x": [
          "**Sumem l'excés al valor**\n`75 + 512 = 587`",
          "**Sumamos el exceso al valor**\n`75 + 512 = 587`",
          "**We add the excess to the value**\n`75 + 512 = 587`"
         ]
        },
        {
         "x": [
          "**Passem a binari amb 10 bits**\n`587₍₁₀₎ = 1001001011₍₂₎`",
          "**Pasamos a binario con 10 bits**\n`587₍₁₀₎ = 1001001011₍₂₎`",
          "**Convert to binary with 10 bits**\n`587₍₁₀₎ = 1001001011₍₂₎`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+75 = 1001001011_CE`",
          "**Resultado**\n`+75 = 1001001011_CE`",
          "**Result**\n`+75 = 1001001011_CE`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-p-ce-0",
       "cfg": {
        "mode": "enc",
        "sys": "CE",
        "n": 75,
        "N": 10
       }
      }
     }
    },
    {
     "l": "2",
     "q": [
      "`−75` → CE amb 10 bits",
      "`−75` → CE con 10 bits",
      "`−75` → excess with 10 bits"
     ],
     "a": {
      "k": "bits",
      "v": "0110110101",
      "show": "0110110101₍CE₎",
      "alt": [
       {
        "v": "1001001011",
        "msg": [
         "Això és la representació en SM, no en CE.",
         "Eso es la representación en SM, no en CE.",
         "That is the SM representation, not excess code."
        ]
       },
       {
        "v": "1110110100",
        "msg": [
         "Això és la representació en C1, no en CE.",
         "Eso es la representación en C1, no en CE.",
         "That is the 1C representation, not excess code."
        ]
       },
       {
        "v": "1110110101",
        "msg": [
         "Això és la representació en C2, no en CE.",
         "Eso es la representación en C2, no en CE.",
         "That is the 2C representation, not excess code."
        ]
       },
       {
        "v": "0001001011",
        "msg": [
         "Aquest és +75. Falta codificar el signe negatiu.",
         "Este es +75. Falta codificar el signo negativo.",
         "This is +75. The negative sign still has to be encoded."
        ]
       },
       {
        "v": "0110110100",
        "msg": [
         "Has fet servir excés 2^(N−1) − 1 (el de l'IEEE). El codi d'excés del curs és E = 2^(N−1) = 512.",
         "Has usado exceso 2^(N−1) − 1 (el del IEEE). El código de exceso del curso es E = 2^(N−1) = 512.",
         "You have used excess 2^(N−1) − 1 (the IEEE one). The course's excess code is E = 2^(N−1) = 512."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Excés (biaix) amb 10 bits**\n`E = 2⁹ = 512`",
          "**Exceso (sesgo) con 10 bits**\n`E = 2⁹ = 512`",
          "**Excess (bias) with 10 bits**\n`E = 2⁹ = 512`"
         ]
        },
        {
         "x": [
          "**Sumem l'excés al valor**\n`−75 + 512 = 437`",
          "**Sumamos el exceso al valor**\n`−75 + 512 = 437`",
          "**We add the excess to the value**\n`−75 + 512 = 437`"
         ]
        },
        {
         "x": [
          "**Passem a binari amb 10 bits**\n`437₍₁₀₎ = 110110101₍₂₎ → 0110110101`",
          "**Pasamos a binario con 10 bits**\n`437₍₁₀₎ = 110110101₍₂₎ → 0110110101`",
          "**Convert to binary with 10 bits**\n`437₍₁₀₎ = 110110101₍₂₎ → 0110110101`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`−75 = 0110110101_CE`",
          "**Resultado**\n`−75 = 0110110101_CE`",
          "**Result**\n`−75 = 0110110101_CE`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-p-ce-1",
       "cfg": {
        "mode": "enc",
        "sys": "CE",
        "n": -75,
        "N": 10
       }
      }
     }
    },
    {
     "l": "3",
     "q": [
      "`+123` → CE amb 10 bits",
      "`+123` → CE con 10 bits",
      "`+123` → excess with 10 bits"
     ],
     "a": {
      "k": "bits",
      "v": "1001111011",
      "show": "1001111011₍CE₎",
      "alt": [
       {
        "v": "0001111011",
        "msg": [
         "Això és la representació en SM, no en CE.",
         "Eso es la representación en SM, no en CE.",
         "That is the SM representation, not excess code."
        ]
       },
       {
        "v": "0001111011",
        "msg": [
         "Això és la representació en C1, no en CE.",
         "Eso es la representación en C1, no en CE.",
         "That is the 1C representation, not excess code."
        ]
       },
       {
        "v": "0001111011",
        "msg": [
         "Això és la representació en C2, no en CE.",
         "Eso es la representación en C2, no en CE.",
         "That is the 2C representation, not excess code."
        ]
       },
       {
        "v": "1001111010",
        "msg": [
         "Has fet servir excés 2^(N−1) − 1 (el de l'IEEE). El codi d'excés del curs és E = 2^(N−1) = 512.",
         "Has usado exceso 2^(N−1) − 1 (el del IEEE). El código de exceso del curso es E = 2^(N−1) = 512.",
         "You have used excess 2^(N−1) − 1 (the IEEE one). The course's excess code is E = 2^(N−1) = 512."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Excés (biaix) amb 10 bits**\n`E = 2⁹ = 512`",
          "**Exceso (sesgo) con 10 bits**\n`E = 2⁹ = 512`",
          "**Excess (bias) with 10 bits**\n`E = 2⁹ = 512`"
         ]
        },
        {
         "x": [
          "**Sumem l'excés al valor**\n`123 + 512 = 635`",
          "**Sumamos el exceso al valor**\n`123 + 512 = 635`",
          "**We add the excess to the value**\n`123 + 512 = 635`"
         ]
        },
        {
         "x": [
          "**Passem a binari amb 10 bits**\n`635₍₁₀₎ = 1001111011₍₂₎`",
          "**Pasamos a binario con 10 bits**\n`635₍₁₀₎ = 1001111011₍₂₎`",
          "**Convert to binary with 10 bits**\n`635₍₁₀₎ = 1001111011₍₂₎`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`+123 = 1001111011_CE`",
          "**Resultado**\n`+123 = 1001111011_CE`",
          "**Result**\n`+123 = 1001111011_CE`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-p-ce-2",
       "cfg": {
        "mode": "enc",
        "sys": "CE",
        "n": 123,
        "N": 10
       }
      }
     }
    },
    {
     "l": "4",
     "q": [
      "`−123` → CE amb 10 bits",
      "`−123` → CE con 10 bits",
      "`−123` → excess with 10 bits"
     ],
     "a": {
      "k": "bits",
      "v": "0110000101",
      "show": "0110000101₍CE₎",
      "alt": [
       {
        "v": "1001111011",
        "msg": [
         "Això és la representació en SM, no en CE.",
         "Eso es la representación en SM, no en CE.",
         "That is the SM representation, not excess code."
        ]
       },
       {
        "v": "1110000100",
        "msg": [
         "Això és la representació en C1, no en CE.",
         "Eso es la representación en C1, no en CE.",
         "That is the 1C representation, not excess code."
        ]
       },
       {
        "v": "1110000101",
        "msg": [
         "Això és la representació en C2, no en CE.",
         "Eso es la representación en C2, no en CE.",
         "That is the 2C representation, not excess code."
        ]
       },
       {
        "v": "0001111011",
        "msg": [
         "Aquest és +123. Falta codificar el signe negatiu.",
         "Este es +123. Falta codificar el signo negativo.",
         "This is +123. The negative sign still has to be encoded."
        ]
       },
       {
        "v": "0110000100",
        "msg": [
         "Has fet servir excés 2^(N−1) − 1 (el de l'IEEE). El codi d'excés del curs és E = 2^(N−1) = 512.",
         "Has usado exceso 2^(N−1) − 1 (el del IEEE). El código de exceso del curso es E = 2^(N−1) = 512.",
         "You have used excess 2^(N−1) − 1 (the IEEE one). The course's excess code is E = 2^(N−1) = 512."
        ]
       }
      ]
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Excés (biaix) amb 10 bits**\n`E = 2⁹ = 512`",
          "**Exceso (sesgo) con 10 bits**\n`E = 2⁹ = 512`",
          "**Excess (bias) with 10 bits**\n`E = 2⁹ = 512`"
         ]
        },
        {
         "x": [
          "**Sumem l'excés al valor**\n`−123 + 512 = 389`",
          "**Sumamos el exceso al valor**\n`−123 + 512 = 389`",
          "**We add the excess to the value**\n`−123 + 512 = 389`"
         ]
        },
        {
         "x": [
          "**Passem a binari amb 10 bits**\n`389₍₁₀₎ = 110000101₍₂₎ → 0110000101`",
          "**Pasamos a binario con 10 bits**\n`389₍₁₀₎ = 110000101₍₂₎ → 0110000101`",
          "**Convert to binary with 10 bits**\n`389₍₁₀₎ = 110000101₍₂₎ → 0110000101`"
         ]
        },
        {
         "done": true,
         "x": [
          "**Resultat**\n`−123 = 0110000101_CE`",
          "**Resultado**\n`−123 = 0110000101_CE`",
          "**Result**\n`−123 = 0110000101_CE`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "encode",
      "props": {
       "id": "exl-p-ce-3",
       "cfg": {
        "mode": "enc",
        "sys": "CE",
        "n": -123,
        "N": 10
       }
      }
     }
    }
   ]
  },
  {
   "id": "c-p-ie",
   "unit": "t21",
   "level": "exam",
   "type": "cparts",
   "src": "exam",
   "srcName": [
    "Model d'examen CP1",
    "Modelo de examen CP1",
    "Test 1 model exam"
   ],
   "title": "IEEE 754",
   "q": [
    "Representa en IEEE 754 de simple precisió.",
    "Representa en IEEE 754 de simple precisión.",
    "Represent in IEEE 754 single precision."
   ],
   "note": [
    "Aquests són els blocs que entren al CP1. Fes-los primer sense mirar res, com a l'examen.",
    "Estos son los bloques que entran en el CP1. Hazlos primero sin mirar nada, como en el examen.",
    "These are the blocks that come up in Test 1. Do them first without looking at anything, as in the exam."
   ],
   "parts": [
    {
     "l": "1",
     "q": "`+13,25` → IEEE 754 (simple)",
     "a": {
      "k": "ieee",
      "bits": "01000001010101000000000000000000",
      "hex": "41540000"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Signe**\n`S = 0  (positiu)`",
          "**Signo**\n`S = 0  (positivo)`",
          "**Sign**\n`S = 0  (positive)`"
         ]
        },
        {
         "why": [
          "Part entera per divisions, part fraccionària per multiplicacions per 2 (0,25·2 = 0,5; 0,5·2 = 1).",
          "Parte entera por divisiones, parte fraccionaria por multiplicaciones por 2 (0,25·2 = 0,5; 0,5·2 = 1).",
          "Integer part by divisions, fractional part by multiplications by 2 (0.25·2 = 0.5; 0.5·2 = 1)."
         ],
         "x": [
          "**Valor absolut en binari**\n`13,25₍₁₀₎ = 1101,01₍₂₎`",
          "**Valor absoluto en binario**\n`13,25₍₁₀₎ = 1101,01₍₂₎`",
          "**Absolute value in binary**\n`13.25₍₁₀₎ = 1101.01₍₂₎`"
         ]
        },
        {
         "why": [
          "La coma es mou 3 posicions a l'esquerra, per tant l'exponent és +3.",
          "La coma se mueve 3 posiciones a la izquierda, por tanto el exponente es +3.",
          "The point moves 3 places to the left, so the exponent is +3."
         ],
         "x": [
          "**Normalitzem: 1,F · 2^e**\n`1101,01₍₂₎ = 1,10101₍₂₎ · 2³`",
          "**Normalizamos: 1,F · 2^e**\n`1101,01₍₂₎ = 1,10101₍₂₎ · 2³`",
          "**We normalise: 1.F · 2^e**\n`1101.01₍₂₎ = 1.10101₍₂₎ · 2³`"
         ]
        },
        {
         "x": [
          "**Exponent en excés 127**\n`E = 3 + 127 = 130 = 10000010₍₂₎`",
          "**Exponente en exceso 127**\n`E = 3 + 127 = 130 = 10000010₍₂₎`",
          "**Exponent in excess 127**\n`E = 3 + 127 = 130 = 10000010₍₂₎`"
         ]
        },
        {
         "why": [
          "Són els bits de després de la coma, sense l'1 implícit, omplerts amb zeros per la dreta.",
          "Son los bits de después de la coma, sin el 1 implícito, rellenados con ceros por la derecha.",
          "They are the bits after the point, without the implicit 1, padded with zeros on the right."
         ],
         "x": [
          "**Fracció (23 bits)**\n`F = 10101000000000000000000`",
          "**Fracción (23 bits)**\n`F = 10101000000000000000000`",
          "**Fraction (23 bits)**\n`F = 10101000000000000000000`"
         ]
        },
        {
         "done": true,
         "why": "En hexadecimal: 41540000₍₁₆₎.",
         "x": [
          "**Resultat (32 bits)**\n`0 10000010 10101000000000000000000`",
          "**Resultado (32 bits)**\n`0 10000010 10101000000000000000000`",
          "**Result (32 bits)**\n`0 10000010 10101000000000000000000`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "ieee",
      "props": {
       "id": "exl-p-ie-0",
       "cfg": {
        "mode": "num",
        "x": "13,25",
        "bits": "01000001010101000000000000000000"
       }
      }
     }
    },
    {
     "l": "2",
     "q": "`−6,5` → IEEE 754 (simple)",
     "a": {
      "k": "ieee",
      "bits": "11000000110100000000000000000000",
      "hex": "C0D00000"
     },
     "sol": [
      {
       "steps": [
        {
         "x": [
          "**Signe**\n`S = 1  (negatiu)`",
          "**Signo**\n`S = 1  (negativo)`",
          "**Sign**\n`S = 1  (negative)`"
         ]
        },
        {
         "why": [
          "Part entera per divisions, part fraccionària per multiplicacions per 2 (0,5·2 = 1).",
          "Parte entera por divisiones, parte fraccionaria por multiplicaciones por 2 (0,5·2 = 1).",
          "Integer part by divisions, fractional part by multiplications by 2 (0.5·2 = 1)."
         ],
         "x": [
          "**Valor absolut en binari**\n`6,5₍₁₀₎ = 110,1₍₂₎`",
          "**Valor absoluto en binario**\n`6,5₍₁₀₎ = 110,1₍₂₎`",
          "**Absolute value in binary**\n`6.5₍₁₀₎ = 110.1₍₂₎`"
         ]
        },
        {
         "why": [
          "La coma es mou 2 posicions a l'esquerra, per tant l'exponent és +2.",
          "La coma se mueve 2 posiciones a la izquierda, por tanto el exponente es +2.",
          "The point moves 2 places to the left, so the exponent is +2."
         ],
         "x": [
          "**Normalitzem: 1,F · 2^e**\n`110,1₍₂₎ = 1,101₍₂₎ · 2²`",
          "**Normalizamos: 1,F · 2^e**\n`110,1₍₂₎ = 1,101₍₂₎ · 2²`",
          "**We normalise: 1.F · 2^e**\n`110.1₍₂₎ = 1.101₍₂₎ · 2²`"
         ]
        },
        {
         "x": [
          "**Exponent en excés 127**\n`E = 2 + 127 = 129 = 10000001₍₂₎`",
          "**Exponente en exceso 127**\n`E = 2 + 127 = 129 = 10000001₍₂₎`",
          "**Exponent in excess 127**\n`E = 2 + 127 = 129 = 10000001₍₂₎`"
         ]
        },
        {
         "why": [
          "Són els bits de després de la coma, sense l'1 implícit, omplerts amb zeros per la dreta.",
          "Son los bits de después de la coma, sin el 1 implícito, rellenados con ceros por la derecha.",
          "They are the bits after the point, without the implicit 1, padded with zeros on the right."
         ],
         "x": [
          "**Fracció (23 bits)**\n`F = 10100000000000000000000`",
          "**Fracción (23 bits)**\n`F = 10100000000000000000000`",
          "**Fraction (23 bits)**\n`F = 10100000000000000000000`"
         ]
        },
        {
         "done": true,
         "why": "En hexadecimal: C0D00000₍₁₆₎.",
         "x": [
          "**Resultat (32 bits)**\n`1 10000001 10100000000000000000000`",
          "**Resultado (32 bits)**\n`1 10000001 10100000000000000000000`",
          "**Result (32 bits)**\n`1 10000001 10100000000000000000000`"
         ]
        }
       ],
       "t": "steps"
      }
     ],
     "lab": {
      "id": "ieee",
      "props": {
       "id": "exl-p-ie-1",
       "cfg": {
        "mode": "num",
        "x": "-6,5",
        "bits": "11000000110100000000000000000000"
       }
      }
     }
    }
   ]
  }
 ]
};
