// Generat per tools/kit-import/comp.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Sistemes de numeració i canvis de base (també amb decimals i períodes), operacions en qualsevol base, enters amb signe (SM, C1, C2, codi d'excés) i punt flotant IEEE 754. Tot el que surt al CP1 té un laboratori que fa els passos amb tu.",
    "Sistemas de numeración y cambios de base (también con decimales y periodos), operaciones en cualquier base, enteros con signo (SM, C1, C2, código de exceso) y punto flotante IEEE 754. Todo lo que sale en el CP1 tiene un laboratorio que hace los pasos contigo."
   ]
  }
 ],
 "sections": {
  "b-base": [
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Una base b fa servir els dígits de **0 a b − 1** (en hexadecimal, A = 10 … F = 15). El valor d'un dígit depèn de la seva **posició**: **TFN**: x$_{\\text{n}}$·b$^{\\text{n}}$ + … + x$_{\\text{1}}$·b + x$_{\\text{0}}$ + x$_{\\text{−1}}$·b$^{\\text{−1}}$ + …",
       "Una base b usa los dígitos de **0 a b − 1** (en hexadecimal, A = 10 … F = 15). El valor de un dígito depende de su **posición**: **TFN**: x$_{\\text{n}}$·b$^{\\text{n}}$ + … + x$_{\\text{1}}$·b + x$_{\\text{0}}$ + x$_{\\text{−1}}$·b$^{\\text{−1}}$ + …"
      ]
     }
    ],
    "t": "def",
    "title": [
     "base",
     "n · base"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Totes les bases funcionen com el comptaquilòmetres d'un cotxe: quan un dígit arriba al màxim (b − 1) i en sumes 1, torna a 0 i el de l'esquerra puja. En base 2 això passa a cada pas; per això els nombres binaris són tan llargs.",
       "Todas las bases funcionan como el cuentakilómetros de un coche: cuando un dígito llega al máximo (b − 1) y le sumas 1, vuelve a 0 y el de la izquierda sube. En base 2 esto pasa a cada paso; por eso los números binarios son tan largos."
      ]
     }
    ],
    "t": "tip"
   },
   {
    "t": "lab",
    "id": "tfn",
    "props": {
     "id": "th-tfn",
     "cfg": {}
    }
   }
  ],
  "b-conv": [
   {
    "head": [
     [
      "Conversió",
      "Conversión"
     ],
     [
      "Mètode",
      "Método"
     ]
    ],
    "rows": [
     [
      "base b → 10",
      [
       "TFN: suma de dígit × potència",
       "TFN: suma de dígito × potencia"
      ]
     ],
     [
      [
       "10 → base b (part entera)",
       "10 → base b (parte entera)"
      ],
      [
       "**divisions successives**; residus de **baix cap amunt**",
       "**divisiones sucesivas**; restos de **abajo arriba**"
      ]
     ],
     [
      [
       "10 → base b (part fraccionària)",
       "10 → base b (parte fraccionaria)"
      ],
      [
       "**multiplicacions successives**; parts enteres de **dalt cap avall**",
       "**multiplicaciones sucesivas**; partes enteras de **arriba abajo**"
      ]
     ],
     [
      "base N → base M",
      [
       "passant per base 10",
       "pasando por base 10"
      ]
     ],
     [
      "2 ↔ 8 ↔ 16",
      [
       "agrupant bits (sense passar per 10)",
       "agrupando bits (sin pasar por 10)"
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
       "Una fracció exacta pot ser **infinita** en una altra base: només és finita en base b si el denominador es pot fer amb els factors primers de b. 0,1 és periòdic en binari; 4/11 és periòdic en base 3. Quan una fracció es repeteix a la taula de multiplicacions, has trobat el període.",
       "Una fracción exacta puede ser **infinita** en otra base: solo es finita en base b si el denominador se puede hacer con los factores primos de b. 0,1 es periódico en binario; 4/11 es periódico en base 3. Cuando una fracción se repite en la tabla de multiplicaciones, has encontrado el periodo."
      ]
     }
    ],
    "t": "warn"
   },
   {
    "t": "lab",
    "id": "conv",
    "props": {
     "id": "th-conv",
     "cfg": {}
    }
   }
  ],
  "b-group": [
   {
    "t": "p",
    "x": [
     "Com que 8 = 2³ i 16 = 2⁴, cada dígit octal són exactament 3 bits i cada dígit hexadecimal, 4. Per això es converteix **agrupant des de la coma**, sense passar per decimal. Entre octal i hexadecimal es passa pel binari.",
     "Como 8 = 2³ y 16 = 2⁴, cada dígito octal son exactamente 3 bits y cada dígito hexadecimal, 4. Por eso se convierte **agrupando desde la coma**, sin pasar por decimal. Entre octal y hexadecimal se pasa por el binario."
    ]
   },
   {
    "t": "lab",
    "id": "group",
    "props": {
     "id": "th-group",
     "cfg": {}
    }
   }
  ],
  "b-ops": [
   {
    "t": "p",
    "x": [
     "El procediment és el de l'escola, columna a columna de dreta a esquerra. L'únic que canvia és **quan** hi ha transport: quan la suma d'una columna arriba a la base. En la resta, si el dígit de dalt és més petit, se'n demana un a la columna de l'esquerra i val **b** unitats.",
     "El procedimiento es el de la escuela, columna a columna de derecha a izquierda. Lo único que cambia es **cuándo** hay acarreo: cuando la suma de una columna llega a la base. En la resta, si el dígito de arriba es menor, se pide uno a la columna de la izquierda y vale **b** unidades."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Truc segur: fes la suma de cada columna en decimal i escriu el resultat com **q·b + r**: escrius r i te'n portes q. A 7 + 6 en octal: 13 = 1·8 + 5 → escric 5, me'n porto 1.",
       "Truco seguro: haz la suma de cada columna en decimal y escribe el resultado como **q·b + r**: escribes r y te llevas q. En 7 + 6 en octal: 13 = 1·8 + 5 → escribo 5, me llevo 1."
      ]
     }
    ],
    "t": "tip"
   },
   {
    "t": "lab",
    "id": "arith",
    "props": {
     "id": "th-arith",
     "cfg": {}
    }
   }
  ],
  "b-signed": [
   {
    "t": "p",
    "x": [
     "Amb bits només tenim 0 i 1: no hi ha cap símbol «−». Cada sistema és un **acord diferent** per guardar els negatius. Els positius s'escriuen igual a SM, C1 i C2 (binari normal, primer bit 0); el que canvia és com s'escriuen els negatius. CE és diferent: desplaça tots els números.",
     "Con bits solo tenemos 0 y 1: no hay ningún símbolo «−». Cada sistema es un **acuerdo distinto** para guardar los negativos. Los positivos se escriben igual en SM, C1 y C2 (binario normal, primer bit 0); lo que cambia es cómo se escriben los negativos. CE es distinto: desplaza todos los números."
    ]
   },
   {
    "head": [
     "Sistema",
     [
      "Positius",
      "Positivos"
     ],
     [
      "Negatius",
      "Negativos"
     ],
     [
      "Rang amb N bits",
      "Rango con N bits"
     ],
     [
      "Zeros",
      "Ceros"
     ]
    ],
    "rows": [
     [
      "SM",
      [
       "binari amb N bits (primer bit 0)",
       "binario con N bits (primer bit 0)"
      ],
      [
       "bit de signe 1 + magnitud en N − 1 bits",
       "bit de signo 1 + magnitud en N − 1 bits"
      ],
      "−(2$^{\\text{N−1}}$−1) … +(2$^{\\text{N−1}}$−1)",
      "2"
     ],
     [
      "C1",
      "igual",
      [
       "invertir tots els bits del positiu",
       "invertir todos los bits del positivo"
      ],
      "−(2$^{\\text{N−1}}$−1) … +(2$^{\\text{N−1}}$−1)",
      "2"
     ],
     [
      "C2",
      "igual",
      [
       "invertir i **sumar 1**",
       "invertir y **sumar 1**"
      ],
      "−2$^{\\text{N−1}}$ … +(2$^{\\text{N−1}}$−1)",
      "1"
     ],
     [
      "CE",
      [
       "valor + excés",
       "valor + exceso"
      ],
      [
       "valor + excés",
       "valor + exceso"
      ],
      "−2$^{\\text{N−1}}$ … +(2$^{\\text{N−1}}$−1)",
      "1"
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Al material, l'**excés** amb N bits és **E = 2$^{\\text{N−1}}$**: 128 amb 8 bits, 512 amb 10. No el confonguis amb el d'IEEE 754, que és 127 (= 2⁷ − 1).",
       "En el material, el **exceso** con N bits es **E = 2$^{\\text{N−1}}$**: 128 con 8 bits, 512 con 10. No lo confundas con el de IEEE 754, que es 127 (= 2⁷ − 1)."
      ]
     }
    ],
    "t": "warn"
   },
   {
    "t": "h",
    "x": [
     "Com es fa a mà",
     "Cómo se hace a mano"
    ]
   },
   {
    "t": "p",
    "x": [
     "Abans de res, comprova que el número cap en el rang (taula de dalt). Després, la recepta de cada sistema, en els dos sentits:",
     "Antes de nada, comprueba que el número cabe en el rango (tabla de arriba). Después, la receta de cada sistema, en los dos sentidos:"
    ]
   },
   {
    "head": [
     "Sistema",
     "De número a bits",
     "De bits a número"
    ],
    "rows": [
     [
      "SM",
      [
       "Escriu |n| en binari amb **N − 1** bits i posa-hi davant **0** si és positiu o **1** si és negatiu.",
       "Escribe |n| en binario con **N − 1** bits y ponle delante **0** si es positivo o **1** si es negativo."
      ],
      [
       "El primer bit és el signe; la resta, el valor en binari.",
       "El primer bit es el signo; el resto, el valor en binario."
      ]
     ],
     [
      "C1",
      [
       "Positiu: binari amb N bits. Negatiu: escriu el positiu i **inverteix tots els bits** (0 ↔ 1).",
       "Positivo: binario con N bits. Negativo: escribe el positivo e **invierte todos los bits** (0 ↔ 1)."
      ],
      [
       "Primer bit 0: llegeix-lo en binari. Primer bit 1: inverteix tots els bits, llegeix-lo i posa-hi un −.",
       "Primer bit 0: léelo en binario. Primer bit 1: invierte todos los bits, léelo y ponle un −."
      ]
     ],
     [
      "C2",
      [
       "Positiu: binari amb N bits. Negatiu: escriu el positiu, inverteix tots els bits i **suma 1**.",
       "Positivo: binario con N bits. Negativo: escribe el positivo, invierte todos los bits y **suma 1**."
      ],
      [
       "Primer bit 0: llegeix-lo en binari. Primer bit 1: inverteix i suma 1, llegeix-lo i posa-hi un −.",
       "Primer bit 0: léelo en binario. Primer bit 1: invierte y suma 1, léelo y ponle un −."
      ]
     ],
     [
      "CE",
      [
       "Suma l'excés **E = 2$^{\\text{N−1}}$** al número i passa el resultat a binari amb N bits.",
       "Suma el exceso **E = 2$^{\\text{N−1}}$** al número y pasa el resultado a binario con N bits."
      ],
      [
       "Llegeix els bits com un binari normal i **resta E**.",
       "Lee los bits como un binario normal y **resta E**."
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
       "Primer, el valor absolut en binari: 13 = 8 + 4 + 1 = `1101`. Amb 8 bits: `0000 1101`. El rang amb 8 bits és −127 … +127 (SM, C1) o −128 … +127 (C2, CE): ±13 hi cap.",
       "Primero, el valor absoluto en binario: 13 = 8 + 4 + 1 = `1101`. Con 8 bits: `0000 1101`. El rango con 8 bits es −127 … +127 (SM, C1) o −128 … +127 (C2, CE): ±13 cabe."
      ]
     },
     {
      "head": [
       "Sistema",
       "+13",
       "−13",
       [
        "Com surt el −13",
        "Cómo sale el −13"
       ]
      ],
      "rows": [
       [
        "SM",
        "`0000 1101`",
        "`1000 1101`",
        [
         "signe 1 + 13 amb 7 bits (`000 1101`)",
         "signo 1 + 13 con 7 bits (`000 1101`)"
        ]
       ],
       [
        "C1",
        "`0000 1101`",
        "`1111 0010`",
        [
         "invertir tots els bits de `0000 1101`",
         "invertir todos los bits de `0000 1101`"
        ]
       ],
       [
        "C2",
        "`0000 1101`",
        "`1111 0011`",
        "el de C1 + 1: `1111 0010` + 1"
       ],
       [
        "CE",
        "`1000 1101`",
        "`0111 0011`",
        [
         "−13 + 128 = 115 = `0111 0011` (i +13 + 128 = 141)",
         "−13 + 128 = 115 = `0111 0011` (y +13 + 128 = 141)"
        ]
       ]
      ],
      "t": "table"
     },
     {
      "t": "p",
      "x": [
       "Fixa't: el **CE de +13** són els mateixos bits que el **SM de −13**. Uns bits sols no diuen res: cal saber en quin sistema estan.",
       "Fíjate: el **CE de +13** son los mismos bits que el **SM de −13**. Unos bits solos no dicen nada: hay que saber en qué sistema están."
      ]
     }
    ],
    "t": "example",
    "title": [
     "+13 i −13 amb 8 bits",
     "+13 y −13 con 8 bits"
    ]
   },
   {
    "blocks": [
     {
      "items": [
       [
        "**SM:** signe 1 (negatiu); `111 0011` = 115 → **−115**.",
        "**SM:** signo 1 (negativo); `111 0011` = 115 → **−115**."
       ],
       [
        "**C1:** comença per 1 → invertim: `0000 1100` = 12 → **−12**.",
        "**C1:** empieza por 1 → invertimos: `0000 1100` = 12 → **−12**."
       ],
       [
        "**C2:** comença per 1 → invertim i sumem 1: `0000 1100` + 1 = `0000 1101` = 13 → **−13**.",
        "**C2:** empieza por 1 → invertimos y sumamos 1: `0000 1100` + 1 = `0000 1101` = 13 → **−13**."
       ],
       [
        "**CE:** com a natural val 243; 243 − 128 = **+115**.",
        "**CE:** como natural vale 243; 243 − 128 = **+115**."
       ]
      ],
      "t": "list"
     }
    ],
    "t": "example",
    "title": [
     "I al revés: què val `1111 0011` en cada sistema?",
     "Y al revés: ¿qué vale `1111 0011` en cada sistema?"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Dues dreceres per a C2:**",
       "**Dos atajos para C2:**"
      ]
     },
     {
      "items": [
       [
        "Per fer el negatiu: copia els bits des de la dreta fins al **primer 1** (inclòs) i inverteix tota la resta. `0000 1101` → l'1 de la dreta es copia, la resta s'inverteix → `1111 0011`.",
        "Para hacer el negativo: copia los bits desde la derecha hasta el **primer 1** (incluido) e invierte todo lo demás. `0000 1101` → el 1 de la derecha se copia, el resto se invierte → `1111 0011`."
       ],
       [
        "Per llegir-lo: el primer bit pesa **−2$^{\\text{N−1}}$** i la resta, en positiu com sempre. `1111 0011` = −128 + 64 + 32 + 16 + 2 + 1 = −128 + 115 = **−13**.",
        "Para leerlo: el primer bit pesa **−2$^{\\text{N−1}}$** y el resto, en positivo como siempre. `1111 0011` = −128 + 64 + 32 + 16 + 2 + 1 = −128 + 115 = **−13**."
       ]
      ],
      "t": "list"
     }
    ],
    "t": "tip"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "En **CE** el primer bit va **al revés**: 1 vol dir positiu (o zero) i 0 vol dir negatiu. En SM, C1 i C2, 1 vol dir negatiu.",
       "En **CE** el primer bit va **al revés**: 1 quiere decir positivo (o cero) y 0 quiere decir negativo. En SM, C1 y C2, 1 quiere decir negativo."
      ]
     }
    ],
    "t": "warn"
   },
   {
    "t": "h",
    "x": [
     "D'on surten el rang i els dos zeros",
     "De dónde salen el rango y los dos ceros"
    ]
   },
   {
    "t": "p",
    "x": [
     "Amb N bits hi ha 2$^{\\text{N}}$ combinacions: la meitat comencen per 0 i la meitat per 1, és a dir, 2$^{\\text{N−1}}$ cadascuna. Amb 4 bits, 16 combinacions, i així les llegeix cada sistema:",
     "Con N bits hay 2$^{\\text{N}}$ combinaciones: la mitad empiezan por 0 y la mitad por 1, es decir, 2$^{\\text{N−1}}$ cada una. Con 4 bits, 16 combinaciones, y así las lee cada sistema:"
    ]
   },
   {
    "head": [
     "Bits",
     "Natural",
     "SM",
     "C1",
     "C2",
     "CE (E = 8)"
    ],
    "rows": [
     [
      "`0000`",
      "0",
      "**+0**",
      "**+0**",
      "**0**",
      "−8"
     ],
     [
      "`0001`",
      "1",
      "+1",
      "+1",
      "+1",
      "−7"
     ],
     [
      "`0010`",
      "2",
      "+2",
      "+2",
      "+2",
      "−6"
     ],
     [
      "`0011`",
      "3",
      "+3",
      "+3",
      "+3",
      "−5"
     ],
     [
      "`0100`",
      "4",
      "+4",
      "+4",
      "+4",
      "−4"
     ],
     [
      "`0101`",
      "5",
      "+5",
      "+5",
      "+5",
      "−3"
     ],
     [
      "`0110`",
      "6",
      "+6",
      "+6",
      "+6",
      "−2"
     ],
     [
      "`0111`",
      "7",
      "+7",
      "+7",
      "+7",
      "−1"
     ],
     [
      "`1000`",
      "8",
      "**−0**",
      "−7",
      "−8",
      "**0**"
     ],
     [
      "`1001`",
      "9",
      "−1",
      "−6",
      "−7",
      "+1"
     ],
     [
      "`1010`",
      "10",
      "−2",
      "−5",
      "−6",
      "+2"
     ],
     [
      "`1011`",
      "11",
      "−3",
      "−4",
      "−5",
      "+3"
     ],
     [
      "`1100`",
      "12",
      "−4",
      "−3",
      "−4",
      "+4"
     ],
     [
      "`1101`",
      "13",
      "−5",
      "−2",
      "−3",
      "+5"
     ],
     [
      "`1110`",
      "14",
      "−6",
      "−1",
      "−2",
      "+6"
     ],
     [
      "`1111`",
      "15",
      "−7",
      "**−0**",
      "−1",
      "+7"
     ],
     [
      [
       "**rang**",
       "**rango**"
      ],
      "0 … 15",
      "−7 … +7",
      "−7 … +7",
      "−8 … +7",
      "−8 … +7"
     ]
    ],
    "t": "table"
   },
   {
    "items": [
     [
      "**SM i C1** tenen dos zeros: a SM, `0000` (+0) i `1000` (−0); a C1, `0000` i `1111`. Una combinació es «perd» en el −0, i per això el rang és simètric: **−(2$^{\\text{N−1}}$ − 1) … +(2$^{\\text{N−1}}$ − 1)**. Amb 4 bits, −7 … +7; amb 8 bits, −127 … +127.",
      "**SM y C1** tienen dos ceros: en SM, `0000` (+0) y `1000` (−0); en C1, `0000` y `1111`. Una combinación se «pierde» en el −0, y por eso el rango es simétrico: **−(2$^{\\text{N−1}}$ − 1) … +(2$^{\\text{N−1}}$ − 1)**. Con 4 bits, −7 … +7; con 8 bits, −127 … +127."
     ],
     [
      "**C2 i CE** tenen un sol zero. La combinació que sobra serveix per a un negatiu més, i el rang és **−2$^{\\text{N−1}}$ … +(2$^{\\text{N−1}}$ − 1)**: un negatiu més que positius. Amb 4 bits, −8 … +7; amb 8 bits, −128 … +127.",
      "**C2 y CE** tienen un solo cero. La combinación que sobra sirve para un negativo más, y el rango es **−2$^{\\text{N−1}}$ … +(2$^{\\text{N−1}}$ − 1)**: un negativo más que positivos. Con 4 bits, −8 … +7; con 8 bits, −128 … +127."
     ],
     [
      "Per això, per exemple, −128 cap en 8 bits en C2 i en CE, però **no** en SM ni en C1.",
      "Por eso, por ejemplo, −128 cabe en 8 bits en C2 y en CE, pero **no** en SM ni en C1."
     ]
    ],
    "t": "list"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Els mateixos bits signifiquen coses diferents segons el sistema: **sempre cal saber com s'han d'interpretar**. Al laboratori, toca els bits i mira les quatre lectures alhora. Amb N = 4, la roda mostra per què C2 «dona la volta»: +7 + 1 = −8.",
       "Los mismos bits significan cosas distintas según el sistema: **siempre hay que saber cómo interpretarlos**. En el laboratorio, toca los bits y mira las cuatro lecturas a la vez. Con N = 4, la rueda muestra por qué C2 «da la vuelta»: +7 + 1 = −8."
      ]
     }
    ],
    "t": "tip"
   },
   {
    "t": "lab",
    "id": "signed",
    "props": {
     "id": "th-signed",
     "cfg": {}
    }
   },
   {
    "t": "p",
    "x": [
     "Per practicar el procediment complet, amb tots els passos:",
     "Para practicar el procedimiento completo, con todos los pasos:"
    ]
   },
   {
    "t": "lab",
    "id": "encode",
    "props": {
     "id": "th-encode",
     "cfg": {}
    }
   }
  ],
  "b-float": [
   {
    "t": "p",
    "x": [
     "En **punt fix** la coma és en una posició fixa (per exemple 4 bits enters + 4 fraccionaris): rang i precisió limitats. En **punt flotant** es guarda també un **exponent**, i la coma «flota»: X = (−1)$^{\\text{S}}$ · 1,F · 2$^{\\text{e}}$. **Normalitzar** és moure la coma fins a deixar un sol 1 a l'esquerra.",
     "En **punto fijo** la coma está en una posición fija (por ejemplo 4 bits enteros + 4 fraccionarios): rango y precisión limitados. En **punto flotante** se guarda también un **exponente**, y la coma «flota»: X = (−1)$^{\\text{S}}$ · 1,F · 2$^{\\text{e}}$. **Normalizar** es mover la coma hasta dejar un solo 1 a la izquierda."
    ]
   },
   {
    "t": "lab",
    "id": "norm",
    "props": {
     "id": "th-norm",
     "cfg": {}
    }
   }
  ],
  "b-ieee": [
   {
    "head": [
     "",
     [
      "Signe",
      "Signo"
     ],
     [
      "Exponent",
      "Exponente"
     ],
     [
      "Fracció",
      "Fracción"
     ],
     [
      "Excés",
      "Exceso"
     ]
    ],
    "rows": [
     [
      "Simple (32 bits)",
      "1",
      "8",
      "23",
      "127"
     ],
     [
      "Doble (64 bits)",
      "1",
      "11",
      "52",
      "1023"
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "items": [
       [
        "Signe S: 0 si és positiu, 1 si és negatiu.",
        "Signo S: 0 si es positivo, 1 si es negativo."
       ],
       [
        "Passa el valor absolut a binari (entera per divisions, fraccionària per multiplicacions).",
        "Pasa el valor absoluto a binario (entera por divisiones, fraccionaria por multiplicaciones)."
       ],
       [
        "Normalitza: 1,F · 2$^{\\text{e}}$.",
        "Normaliza: 1,F · 2$^{\\text{e}}$."
       ],
       [
        "Exponent: E = e + 127 en 8 bits.",
        "Exponente: E = e + 127 en 8 bits."
       ],
       [
        "Fracció: els bits de després de la coma, sense l'1 implícit, fins a 23 bits.",
        "Fracción: los bits de después de la coma, sin el 1 implícito, hasta 23 bits."
       ]
      ],
      "ordered": true,
      "t": "list"
     }
    ],
    "t": "method",
    "title": [
     "Recepta per codificar",
     "Receta para codificar"
    ]
   },
   {
    "head": [
     [
      "Exponent",
      "Exponente"
     ],
     [
      "Fracció",
      "Fracción"
     ],
     [
      "Significat",
      "Significado"
     ]
    ],
    "rows": [
     [
      [
       "tot 0",
       "todo 0"
      ],
      "0",
      "±0"
     ],
     [
      [
       "tot 0",
       "todo 0"
      ],
      "≠ 0",
      [
       "desnormalitzat (molt petit, sense 1 implícit)",
       "desnormalizado (muy pequeño, sin 1 implícito)"
      ]
     ],
     [
      [
       "tot 1",
       "todo 1"
      ],
      "0",
      "±∞"
     ],
     [
      [
       "tot 1",
       "todo 1"
      ],
      "≠ 0",
      "NaN"
     ]
    ],
    "t": "table"
   },
   {
    "t": "lab",
    "id": "ieee",
    "props": {
     "id": "th-ieee",
     "cfg": {}
    }
   }
  ]
 },
 "examEnd": []
};
