// Generat per tools/kit-import/mates.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Ordre 2 i 3 (Sarrus), menors i adjunts, desenvolupament per files o columnes, propietats, matriu adjunta, inversa i rang. Al final, l'avançament de sistemes i les errates del material.",
    "Orden 2 y 3 (Sarrus), menores y adjuntos, desarrollo por filas o columnas, propiedades, matriz adjunta, inversa y rango. Al final, el adelanto de sistemas y las erratas del material."
   ]
  }
 ],
 "sections": {
  "d-def": [
   {
    "t": "p",
    "x": [
     "A cada matriu **quadrada** $A$ li associem un nombre, el **determinant**, que s'escriu $\\det(A)$ o $|A|$. Decideix si $A$ és invertible i serveix per resoldre sistemes. Com es calcula depèn de l'ordre.",
     "A cada matriz **cuadrada** $A$ le asociamos un número, el **determinante**, que se escribe $\\det(A)$ o $|A|$. Decide si $A$ es invertible y sirve para resolver sistemas. Cómo se calcula depende del orden."
    ]
   },
   {
    "t": "thm",
    "title": [
     "Fórmules",
     "Fórmulas"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": "$$|a_{11}| = a_{11}\\quad \\begin{vmatrix}a_{11} & a_{12} \\\\ a_{21} & a_{22}\\end{vmatrix} = a_{11}a_{22} - a_{21}a_{12}$$"
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "html",
      "h": [
       "<div class=\"lab-split\" style=\"align-items:center\"><div><svg class=\"sar\" viewBox=\"0 0 200 130\" style=\"max-width:200px\" role=\"img\" aria-label=\"Determinant d'ordre 2: diagonal que baixa menys diagonal que puja\"><line class=\"bar\" x1=\"46\" y1=\"18\" x2=\"46\" y2=\"112\"></line><line class=\"bar\" x1=\"154\" y1=\"18\" x2=\"154\" y2=\"112\"></line><line class=\"dp on\" x1=\"58\" y1=\"26\" x2=\"142\" y2=\"104\"></line><line class=\"dn on\" x1=\"58\" y1=\"104\" x2=\"142\" y2=\"26\"></line><text class=\"sg dp\" x=\"30\" y=\"22\">+</text><text class=\"sg dn\" x=\"30\" y=\"122\">−</text><text x=\"72\" y=\"50\">a₁₁</text><text x=\"128\" y=\"50\">a₁₂</text><text x=\"72\" y=\"92\">a₂₁</text><text x=\"128\" y=\"92\">a₂₂</text></svg></div><div><p>Producte de la diagonal que <b>baixa</b> (vermella, suma) <b>menys</b> producte de la que <b>puja</b> (blava, resta).</p></div></div>",
       "<div class=\"lab-split\" style=\"align-items:center\"><div><svg class=\"sar\" viewBox=\"0 0 200 130\" style=\"max-width:200px\" role=\"img\" aria-label=\"Determinante de orden 2: diagonal que baja menos diagonal que sube\"><line class=\"bar\" x1=\"46\" y1=\"18\" x2=\"46\" y2=\"112\"></line><line class=\"bar\" x1=\"154\" y1=\"18\" x2=\"154\" y2=\"112\"></line><line class=\"dp on\" x1=\"58\" y1=\"26\" x2=\"142\" y2=\"104\"></line><line class=\"dn on\" x1=\"58\" y1=\"104\" x2=\"142\" y2=\"26\"></line><text class=\"sg dp\" x=\"30\" y=\"22\">+</text><text class=\"sg dn\" x=\"30\" y=\"122\">−</text><text x=\"72\" y=\"50\">a₁₁</text><text x=\"128\" y=\"50\">a₁₂</text><text x=\"72\" y=\"92\">a₂₁</text><text x=\"128\" y=\"92\">a₂₂</text></svg></div><div><p>Producto de la diagonal que <b>baja</b> (roja, suma) <b>menos</b> producto de la que <b>sube</b> (azul, resta).</p></div></div>"
      ]
     }
    ]
   },
   {
    "t": "warn",
    "blocks": [
     {
      "t": "p",
      "x": [
       "A l'ordre 1, $|a_{11}|$ és el determinant, **no** el valor absolut: com a determinant, $|-3| = -3$.",
       "En orden 1, $|a_{11}|$ es el determinante, **no** el valor absoluto: como determinante, $|-3| = -3$."
      ]
     }
    ]
   },
   {
    "t": "example",
    "blocks": [
     {
      "t": "p",
      "x": [
       "$\\begin{vmatrix}3 & 1 \\\\ 4 & 2\\end{vmatrix} = 3 \\cdot 2 - 4 \\cdot 1 = 2$ i $\\begin{vmatrix}2 & -3 \\\\ 4 & -6\\end{vmatrix} = 2 \\cdot (-6) - 4 \\cdot (-3) = 0$. El segon és 0 perquè la segona fila és el doble de la primera (propietat 4).",
       "$\\begin{vmatrix}3 & 1 \\\\ 4 & 2\\end{vmatrix} = 3 \\cdot 2 - 4 \\cdot 1 = 2$ y $\\begin{vmatrix}2 & -3 \\\\ 4 & -6\\end{vmatrix} = 2 \\cdot (-6) - 4 \\cdot (-3) = 0$. El segundo es 0 porque la segunda fila es el doble de la primera (propiedad 4)."
      ]
     }
    ]
   }
  ],
  "d-sarrus": [
   {
    "t": "thm",
    "title": "Fórmula",
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": "$$\\begin{vmatrix}a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33}\\end{vmatrix} = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{12}a_{21}a_{33} - a_{11}a_{23}a_{32}$$"
     }
    ]
   },
   {
    "t": "warn",
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Errata de la diapositiva:** el cinquè terme hi surt com $-a_{12}a_{23}a_{31}$, que repeteix el segon. El correcte és $-a_{12}a_{21}a_{33}$. Comprovació: a cada terme hi ha d'haver **una vegada cada fila** (primers índexs 1, 2, 3) i **una vegada cada columna** (segons índexs 1, 2, 3).",
       "**Errata de la diapositiva:** el quinto término aparece como $-a_{12}a_{23}a_{31}$, que repite el segundo. El correcto es $-a_{12}a_{21}a_{33}$. Comprobación: en cada término tiene que haber **una vez cada fila** (primeros índices 1, 2, 3) y **una vez cada columna** (segundos índices 1, 2, 3)."
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "**El diagrama.** Copia les dues primeres columnes a la dreta. Les tres diagonals que **baixen** sumen i les tres que **pugen** resten, com a l'ordre 2. Per cada element passen exactament dues fletxes, una de cada color. Només serveix per a ordre 3: per a ordre 4 o més cal el desenvolupament.",
       "**El diagrama.** Copia las dos primeras columnas a la derecha. Las tres diagonales que **bajan** suman y las tres que **suben** restan, como en el orden 2. Por cada elemento pasan exactamente dos flechas, una de cada color. Solo sirve para orden 3: para orden 4 o más hace falta el desarrollo."
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Sarrus pas a pas",
     "Sarrus paso a paso"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$A = \\begin{pmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{pmatrix}$. Sumen $1 \\cdot 1 \\cdot 0 + 2 \\cdot 4 \\cdot 5 + 3 \\cdot 0 \\cdot 6 = 40$; resten $3 \\cdot 1 \\cdot 5 + 2 \\cdot 0 \\cdot 0 + 1 \\cdot 4 \\cdot 6 = 39$. Per tant $|A| = 40 - 39 = 1$. És la matriu que surt per defecte al laboratori.",
       "$A = \\begin{pmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{pmatrix}$. Suman $1 \\cdot 1 \\cdot 0 + 2 \\cdot 4 \\cdot 5 + 3 \\cdot 0 \\cdot 6 = 40$; restan $3 \\cdot 1 \\cdot 5 + 2 \\cdot 0 \\cdot 0 + 1 \\cdot 4 \\cdot 6 = 39$. Por tanto $|A| = 40 - 39 = 1$. Es la matriz que sale por defecto en el laboratorio."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "mxsarrus",
    "props": {
     "id": "th-mx-sar"
    }
   }
  ],
  "d-menor": [
   {
    "t": "def",
    "title": [
     "menors",
     "menores"
    ],
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Si d'una matriu $A$ (no cal que sigui quadrada) eliminem files i columnes fins a quedar-nos amb una submatriu quadrada d'ordre $k$, el seu determinant és un **menor d'ordre $k$**.",
        "Si de una matriz $A$ (no hace falta que sea cuadrada) eliminamos filas y columnas hasta quedarnos con una submatriz cuadrada de orden $k$, su determinante es un **menor de orden $k$**."
       ],
       [
        "Si $A$ és quadrada, el **menor complementari** $M_{ij}$ és el que surt de suprimir la fila $i$ i la columna $j$.",
        "Si $A$ es cuadrada, el **menor complementario** $M_{ij}$ es el que sale de suprimir la fila $i$ y la columna $j$."
       ],
       [
        "L'**adjunt** de l'element $ij$ és $m_{ij} = (-1)^{i+j}M_{ij}$.",
        "El **adjunto** del elemento $ij$ es $m_{ij} = (-1)^{i+j}M_{ij}$."
       ]
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "El signe $(-1)^{i+j}$ és un **tauler d'escacs** que comença amb $+$ a dalt a l'esquerra: $$\\begin{pmatrix}+ & - & + \\\\ - & + & - \\\\ + & - & +\\end{pmatrix}$$ L'adjunt és el menor complementari amb el signe de la seva casella.",
       "El signo $(-1)^{i+j}$ es un **tablero de ajedrez** que empieza con $+$ arriba a la izquierda: $$\\begin{pmatrix}+ & - & + \\\\ - & + & - \\\\ + & - & +\\end{pmatrix}$$ El adjunto es el menor complementario con el signo de su casilla."
      ]
     }
    ]
   },
   {
    "t": "example",
    "blocks": [
     {
      "t": "p",
      "x": [
       "Amb $A = \\begin{pmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{pmatrix}$: $M_{12} = \\begin{vmatrix}0 & 4 \\\\ 5 & 0\\end{vmatrix} = -20$ i $m_{12} = (-1)^{3} \\cdot (-20) = 20$; $M_{31} = \\begin{vmatrix}2 & 3 \\\\ 1 & 4\\end{vmatrix} = 5$ i $m_{31} = (+1) \\cdot 5 = 5$.",
       "Con $A = \\begin{pmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{pmatrix}$: $M_{12} = \\begin{vmatrix}0 & 4 \\\\ 5 & 0\\end{vmatrix} = -20$ y $m_{12} = (-1)^{3} \\cdot (-20) = 20$; $M_{31} = \\begin{vmatrix}2 & 3 \\\\ 1 & 4\\end{vmatrix} = 5$ y $m_{31} = (+1) \\cdot 5 = 5$."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "mxminor",
    "props": {
     "id": "th-mx-min",
     "cfg": {
      "m": "menor"
     }
    }
   }
  ],
  "d-lap": [
   {
    "t": "thm",
    "title": [
     "Definició (determinant d'ordre n)",
     "Definición (determinante de orden n)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "Per a $A$ quadrada d'ordre $n \\ge 3$ i una columna $j$ fixada: $$|A| = \\sum_{i=1}^{n} (-1)^{i+j}a_{ij}M_{ij} = \\sum_{i=1}^{n} a_{ij}m_{ij}$$ Cada element de la columna pel seu adjunt, i se sumen. Cada $M_{ij}$ és d'ordre $n - 1$ i es calcula igual, fins a arribar a ordre 2.",
       "Para $A$ cuadrada de orden $n \\ge 3$ y una columna $j$ fijada: $$|A| = \\sum_{i=1}^{n} (-1)^{i+j}a_{ij}M_{ij} = \\sum_{i=1}^{n} a_{ij}m_{ij}$$ Cada elemento de la columna por su adjunto, y se suman. Cada $M_{ij}$ es de orden $n - 1$ y se calcula igual, hasta llegar a orden 2."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": "Teorema",
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "El resultat **no depèn** de la columna escollida, i també és el mateix si es desenvolupa per **qualsevol fila**.",
       "El resultado **no depende** de la columna elegida, y también es el mismo si se desarrolla por **cualquier fila**."
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Tria la línia amb més zeros:** cada zero s'emporta un menor sencer. Amb $A = \\begin{pmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{pmatrix}$, per la columna 1: $$|A| = 1 \\cdot \\begin{vmatrix}1 & 4 \\\\ 6 & 0\\end{vmatrix} - 0 + 5 \\cdot \\begin{vmatrix}2 & 3 \\\\ 1 & 4\\end{vmatrix} = -24 + 25 = 1$$ El mateix que amb Sarrus.",
       "**Elige la línea con más ceros:** cada cero se lleva un menor entero. Con $A = \\begin{pmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{pmatrix}$, por la columna 1: $$|A| = 1 \\cdot \\begin{vmatrix}1 & 4 \\\\ 6 & 0\\end{vmatrix} - 0 + 5 \\cdot \\begin{vmatrix}2 & 3 \\\\ 1 & 4\\end{vmatrix} = -24 + 25 = 1$$ Lo mismo que con Sarrus."
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Un determinant d'ordre 4",
     "Un determinante de orden 4"
    ],
    "blocks": [
     {
      "t": "steps",
      "reveal": true,
      "steps": [
       {
        "x": [
         "**Triar**\n$D = \\begin{vmatrix}2 & 0 & 1 & 3 \\\\ 0 & 1 & 0 & 0 \\\\ 1 & 0 & 3 & 2 \\\\ 0 & 0 & 1 & 1\\end{vmatrix}$",
         "**Elegir**\n$D = \\begin{vmatrix}2 & 0 & 1 & 3 \\\\ 0 & 1 & 0 & 0 \\\\ 1 & 0 & 3 & 2 \\\\ 0 & 0 & 1 & 1\\end{vmatrix}$"
        ],
        "why": [
         "La fila 2 només té un element no nul, a₂₂ = 1, amb signe (−1)²⁺² = +.",
         "La fila 2 solo tiene un elemento no nulo, a₂₂ = 1, con signo (−1)²⁺² = +."
        ]
       },
       {
        "x": [
         "**Desenvolupar per la fila 2**\n$D = (+1) \\cdot 1 \\cdot M_{22} = \\begin{vmatrix}2 & 1 & 3 \\\\ 1 & 3 & 2 \\\\ 0 & 1 & 1\\end{vmatrix}$",
         "**Desarrollar por la fila 2**\n$D = (+1) \\cdot 1 \\cdot M_{22} = \\begin{vmatrix}2 & 1 & 3 \\\\ 1 & 3 & 2 \\\\ 0 & 1 & 1\\end{vmatrix}$"
        ],
        "why": [
         "Els altres tres termes porten un 0 i s'anul·len.",
         "Los otros tres términos llevan un 0 y se anulan."
        ]
       },
       {
        "x": [
         "**Ordre 3, per la fila 1**\n$= 2 \\cdot \\begin{vmatrix}3 & 2 \\\\ 1 & 1\\end{vmatrix} - 1 \\cdot \\begin{vmatrix}1 & 2 \\\\ 0 & 1\\end{vmatrix} + 3 \\cdot \\begin{vmatrix}1 & 3 \\\\ 0 & 1\\end{vmatrix}$",
         "**Orden 3, por la fila 1**\n$= 2 \\cdot \\begin{vmatrix}3 & 2 \\\\ 1 & 1\\end{vmatrix} - 1 \\cdot \\begin{vmatrix}1 & 2 \\\\ 0 & 1\\end{vmatrix} + 3 \\cdot \\begin{vmatrix}1 & 3 \\\\ 0 & 1\\end{vmatrix}$"
        ]
       },
       {
        "x": [
         "**Resultat**\n$= 2 \\cdot 1 - 1 \\cdot 1 + 3 \\cdot 1 = 4$",
         "**Resultado**\n$= 2 \\cdot 1 - 1 \\cdot 1 + 3 \\cdot 1 = 4$"
        ],
        "done": true
       }
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "mxminor",
    "props": {
     "id": "th-mx-lap",
     "cfg": {
      "m": "lap"
     }
    }
   }
  ],
  "d-prop": [
   {
    "t": "p",
    "x": [
     "Siguin $A$, $B$ quadrades d'ordre $n$, escrivim $A = (c_{1}, \\ldots, c_{n})$ per columnes i $\\lambda, \\mu \\in \\mathbb{R}$.",
     "Sean $A$, $B$ cuadradas de orden $n$, escribimos $A = (c_{1}, \\ldots, c_{n})$ por columnas y $\\lambda, \\mu \\in \\mathbb{R}$."
    ]
   },
   {
    "t": "thm",
    "title": [
     "Per columnes (i per files)",
     "Por columnas (y por filas)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "table",
      "head": [
       "",
       [
        "Propietat",
        "Propiedad"
       ],
       [
        "En paraules",
        "En palabras"
       ]
      ],
      "rows": [
       [
        "1",
        "$|\\ldots, \\lambda c_{i} + \\mu c_{i}', \\ldots| = \\lambda|\\ldots, c_{i}, \\ldots| + \\mu|\\ldots, c_{i}', \\ldots|$",
        [
         "és lineal en cada columna",
         "es lineal en cada columna"
        ]
       ],
       [
        "2",
        "$|\\ldots, c_{i}, \\ldots, c_{j}, \\ldots| = -|\\ldots, c_{j}, \\ldots, c_{i}, \\ldots|$",
        [
         "permutar dues columnes canvia el signe",
         "permutar dos columnas cambia el signo"
        ]
       ],
       [
        "3",
        "$|\\ldots, c_{i} + \\sum_{j\\ne i} \\lambda_{j}c_{j}, \\ldots| = |\\ldots, c_{i}, \\ldots|$",
        [
         "sumar-hi una combinació de les altres no el canvia",
         "sumarle una combinación de las otras no lo cambia"
        ]
       ],
       [
        "4",
        [
         "una columna combinació de les altres ⟹ $|A| = 0$",
         "una columna combinación de las otras ⟹ $|A| = 0$"
        ],
        [
         "en particular, dues columnes iguals o proporcionals",
         "en particular, dos columnas iguales o proporcionales"
        ]
       ],
       [
        "5",
        [
         "una columna de zeros ⟹ $|A| = 0$",
         "una columna de ceros ⟹ $|A| = 0$"
        ],
        ""
       ]
      ]
     },
     {
      "t": "p",
      "x": [
       "**Tot val igual per a files.**",
       "**Todo vale igual para filas.**"
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Amb les operacions",
     "Con las operaciones"
    ],
    "label": false,
    "blocks": [
     {
      "t": "table",
      "head": [
       "",
       [
        "Propietat",
        "Propiedad"
       ]
      ],
      "rows": [
       [
        "6",
        "$|AB| = |A| \\cdot |B|$"
       ],
       [
        "7",
        "$|A^{T}| = |A|$"
       ],
       [
        "8",
        "$|\\lambda A| = \\lambda^{n}|A|$"
       ],
       [
        "9",
        [
         "$|A^{-1}| = \\frac{1}{|A|}$ (si A és invertible)",
         "$|A^{-1}| = \\frac{1}{|A|}$ (si A es invertible)"
        ]
       ],
       [
        "10",
        [
         "triangular ⟹ $|A|$ = producte de la diagonal",
         "triangular ⟹ $|A|$ = producto de la diagonal"
        ]
       ]
      ]
     }
    ]
   },
   {
    "t": "warn",
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "$|\\lambda A| \\ne \\lambda|A|$: multiplicar la matriu per $\\lambda$ multiplica les $n$ columnes, i cada una treu un $\\lambda$ fora. Si $A$ és $3 \\times 3$ amb $|A| = 5$, $|2A| = 2^{3} \\cdot 5 = 40$.",
        "$|\\lambda A| \\ne \\lambda|A|$: multiplicar la matriz por $\\lambda$ multiplica las $n$ columnas, y cada una saca un $\\lambda$ fuera. Si $A$ es $3 \\times 3$ con $|A| = 5$, $|2A| = 2^{3} \\cdot 5 = 40$."
       ],
       [
        "$|A + B| \\ne |A| + |B|$ en general: $|I_{2}| + |I_{2}| = 2$, però $|I_{2} + I_{2}| = |2I_{2}| = 4$.",
        "$|A + B| \\ne |A| + |B|$ en general: $|I_{2}| + |I_{2}| = 2$, pero $|I_{2} + I_{2}| = |2I_{2}| = 4$."
       ]
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Les propietats estalvien càlculs",
     "Las propiedades ahorran cálculos"
    ],
    "blocks": [
     {
      "t": "list",
      "items": [
       "Triangular: $\\begin{vmatrix}2 & 5 & -1 \\\\ 0 & 3 & 7 \\\\ 0 & 0 & -4\\end{vmatrix} = 2 \\cdot 3 \\cdot (-4) = -24$.",
       [
        "Files proporcionals: $\\begin{vmatrix}1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 0 & 1\\end{vmatrix} = 0$ (fila 2 = 2 × fila 1).",
        "Filas proporcionales: $\\begin{vmatrix}1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 0 & 1\\end{vmatrix} = 0$ (fila 2 = 2 × fila 1)."
       ],
       [
        "Fer zeros (propietat 3): a $\\begin{vmatrix}1 & 2 & 3 \\\\ 2 & 5 & 7 \\\\ 3 & 6 & 10\\end{vmatrix}$ restem 2 × fila 1 a la fila 2 i 3 × fila 1 a la fila 3: queda $\\begin{vmatrix}1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1\\end{vmatrix} = 1$.",
        "Hacer ceros (propiedad 3): en $\\begin{vmatrix}1 & 2 & 3 \\\\ 2 & 5 & 7 \\\\ 3 & 6 & 10\\end{vmatrix}$ restamos 2 × fila 1 a la fila 2 y 3 × fila 1 a la fila 3: queda $\\begin{vmatrix}1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1\\end{vmatrix} = 1$."
       ],
       [
        "Producte: si $|A| = 2$ i $|B| = -3$, $|AB| = -6$ sense calcular $AB$.",
        "Producto: si $|A| = 2$ y $|B| = -3$, $|AB| = -6$ sin calcular $AB$."
       ]
      ]
     }
    ]
   }
  ],
  "d-inv": [
   {
    "t": "def",
    "title": [
     "matriu adjunta",
     "matriz adjunta"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$\\operatorname{Adj} A$ (o $A^{*}$) és la matriu que a la posició $ij$ té l'adjunt $m_{ij}$ d'$A$.",
       "$\\operatorname{Adj} A$ (o $A^{*}$) es la matriz que en la posición $ij$ tiene el adjunto $m_{ij}$ de $A$."
      ]
     }
    ]
   },
   {
    "t": "warn",
    "blocks": [
     {
      "t": "p",
      "x": [
       "En aquest curs $\\operatorname{Adj} A$ **no** està transposada, i per això la fórmula porta $(\\operatorname{Adj} A)^{T}$. Alguns llibres anomenen «adjunta» directament la transposada i escriuen $A^{-1} = \\frac{1}{|A|} \\operatorname{adj} A$. Dóna el mateix; el que no es pot fer és barrejar les dues convencions.",
       "En este curso $\\operatorname{Adj} A$ **no** está traspuesta, y por eso la fórmula lleva $(\\operatorname{Adj} A)^{T}$. Algunos libros llaman «adjunta» directamente a la traspuesta y escriben $A^{-1} = \\frac{1}{|A|} \\operatorname{adj} A$. Da lo mismo; lo que no se puede hacer es mezclar las dos convenciones."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Proposició",
     "Proposición"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "Una matriu quadrada $A$ és invertible si i només si $|A| \\ne 0$.",
       "Una matriz cuadrada $A$ es invertible si y solo si $|A| \\ne 0$."
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si $A^{-1}$ existeix, per la propietat 6, $|A| \\cdot |A^{-1}| = |AA^{-1}| = |I| = 1$: $|A|$ no pot ser 0, perquè cap nombre multiplicat per 0 dóna 1. Com als reals, on el 0 és l'únic sense invers.",
       "Si $A^{-1}$ existe, por la propiedad 6, $|A| \\cdot |A^{-1}| = |AA^{-1}| = |I| = 1$: $|A|$ no puede ser 0, porque ningún número multiplicado por 0 da 1. Como en los reales, donde el 0 es el único sin inverso."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": "Teorema (fórmula de la inversa)",
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": "$$A^{-1} = \\frac{1}{|A|}(\\operatorname{Adj} A)^{T}\\quad\\text{ si } |A| \\ne 0$$"
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Recepta",
     "Receta"
    ],
    "label": false,
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Calcula $|A|$. Si és 0, no hi ha inversa: s'ha acabat.",
        "Calcula $|A|$. Si es 0, no hay inversa: se acabó."
       ],
       [
        "Calcula tots els adjunts $m_{ij} = (-1)^{i+j}M_{ij}$ i forma $\\operatorname{Adj} A$.",
        "Calcula todos los adjuntos $m_{ij} = (-1)^{i+j}M_{ij}$ y forma $\\operatorname{Adj} A$."
       ],
       [
        "Transposa.",
        "Traspón."
       ],
       [
        "Divideix-ho tot per $|A|$ i **comprova** que $AA^{-1} = I$.",
        "Divídelo todo por $|A|$ y **comprueba** que $AA^{-1} = I$."
       ]
      ],
      "ordered": true
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Drecera per a ordre 2:** $$\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix}^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix}d & -b \\\\ -c & a\\end{pmatrix}$$ Intercanvia els de la diagonal principal, canvia el signe dels altres dos i divideix pel determinant. Per exemple, $\\begin{pmatrix}3 & 1 \\\\ 4 & 2\\end{pmatrix}^{-1} = \\frac{1}{2}\\begin{pmatrix}2 & -1 \\\\ -4 & 3\\end{pmatrix} = \\begin{pmatrix}1 & -\\frac{1}{2} \\\\ -2 & \\frac{3}{2}\\end{pmatrix}$.",
       "**Atajo para orden 2:** $$\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix}^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix}d & -b \\\\ -c & a\\end{pmatrix}$$ Intercambia los de la diagonal principal, cambia el signo de los otros dos y divide por el determinante. Por ejemplo, $\\begin{pmatrix}3 & 1 \\\\ 4 & 2\\end{pmatrix}^{-1} = \\frac{1}{2}\\begin{pmatrix}2 & -1 \\\\ -4 & 3\\end{pmatrix} = \\begin{pmatrix}1 & -\\frac{1}{2} \\\\ -2 & \\frac{3}{2}\\end{pmatrix}$."
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Inversa d'ordre 3, pas a pas",
     "Inversa de orden 3, paso a paso"
    ],
    "blocks": [
     {
      "t": "steps",
      "reveal": true,
      "steps": [
       {
        "x": [
         "**1. Determinant**\n$|A| = \\begin{vmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{vmatrix} = 1$",
         "**1. Determinante**\n$|A| = \\begin{vmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{vmatrix} = 1$"
        ],
        "why": [
         "Sarrus o desenvolupament per una fila o columna",
         "Sarrus o desarrollo por una fila o columna"
        ]
       },
       {
        "x": [
         "**2. Adjunts**\n",
         "**2. Adjuntos**\n"
        ],
        "why": [
         "Menor complementari amb el signe del tauler d'escacs.",
         "Menor complementario con el signo del tablero de ajedrez."
        ]
       },
       {
        "x": [
         "**3. Matriu adjunta**\n$\\operatorname{Adj} A = \\begin{pmatrix}-24 & 20 & -5 \\\\ 18 & -15 & 4 \\\\ 5 & -4 & 1\\end{pmatrix}$",
         "**3. Matriz adjunta**\n$\\operatorname{Adj} A = \\begin{pmatrix}-24 & 20 & -5 \\\\ 18 & -15 & 4 \\\\ 5 & -4 & 1\\end{pmatrix}$"
        ]
       },
       {
        "x": [
         "**4. Transposem**\n$(\\operatorname{Adj} A)^{T} = \\begin{pmatrix}-24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1\\end{pmatrix}$",
         "**4. Trasponemos**\n$(\\operatorname{Adj} A)^{T} = \\begin{pmatrix}-24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1\\end{pmatrix}$"
        ]
       },
       {
        "x": [
         "**5. Dividim pel determinant**\n$A^{-1} = 1 \\cdot \\begin{pmatrix}-24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1\\end{pmatrix} = \\begin{pmatrix}-24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1\\end{pmatrix}$",
         "**5. Dividimos por el determinante**\n$A^{-1} = 1 \\cdot \\begin{pmatrix}-24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1\\end{pmatrix} = \\begin{pmatrix}-24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1\\end{pmatrix}$"
        ],
        "done": true,
        "why": [
         "multipliquem cada element per 1/|A|",
         "multiplicamos cada elemento por 1/|A|"
        ]
       },
       {
        "x": [
         "**6. Comprovació**\n$A \\cdot A^{-1} = \\begin{pmatrix}1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1\\end{pmatrix} = I_{3}$",
         "**6. Comprobación**\n$A \\cdot A^{-1} = \\begin{pmatrix}1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1\\end{pmatrix} = I_{3}$"
        ],
        "why": [
         "Surt la identitat: la inversa és correcta.",
         "Sale la identidad: la inversa es correcta."
        ]
       }
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Proposició (propietats de la inversa)",
     "Proposición (propiedades de la inversa)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si $A$ i $B$ són invertibles del mateix ordre:",
       "Si $A$ y $B$ son invertibles del mismo orden:"
      ]
     },
     {
      "t": "list",
      "items": [
       [
        "$(AB)^{-1} = B^{-1}A^{-1}$ (l'ordre es gira, com a la transposada)",
        "$(AB)^{-1} = B^{-1}A^{-1}$ (el orden se gira, como en la traspuesta)"
       ],
       "$(A^{-1})^{-1} = A$"
      ],
      "ordered": true
     }
    ]
   },
   {
    "t": "lab",
    "id": "mxinv",
    "props": {
     "id": "th-mx-inv"
    }
   }
  ],
  "d-rang": [
   {
    "t": "def",
    "title": [
     "rang",
     "rango"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "El **rang** d'una matriu $A$, $\\operatorname{rang} A$, és l'**ordre del menor no nul més gran** que se'n pot extreure.",
       "El **rango** de una matriz $A$, $\\operatorname{rg} A$, es el **orden del mayor menor no nulo** que se puede extraer de ella."
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Compta quantes files (o columnes) són realment **independents**, és a dir, quantes no es poden obtenir combinant les altres.",
        "Cuenta cuántas filas (o columnas) son realmente **independientes**, es decir, cuántas no se pueden obtener combinando las otras."
       ],
       [
        "Si $A$ és $m \\times n$, $\\operatorname{rang} A \\le \\min(m, n)$: no hi ha menors més grans.",
        "Si $A$ es $m \\times n$, $\\operatorname{rg} A \\le \\min(m, n)$: no hay menores más grandes."
       ],
       [
        "Si $A$ és quadrada d'ordre $n$: $\\operatorname{rang} A = n \\iff |A| \\ne 0 \\iff A$ és invertible.",
        "Si $A$ es cuadrada de orden $n$: $\\operatorname{rg} A = n \\iff |A| \\ne 0 \\iff A$ es invertible."
       ],
       [
        "La matriu zero no té cap menor no nul: per conveni, el seu rang és 0.",
        "La matriz cero no tiene ningún menor no nulo: por convenio, su rango es 0."
       ]
      ]
     }
    ]
   },
   {
    "t": "example",
    "blocks": [
     {
      "t": "p",
      "x": [
       "$A = \\begin{pmatrix}1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 0 & 1\\end{pmatrix}$: l'únic menor d'ordre 3 és $|A| = 0$ (fila 2 = 2 × fila 1), però $\\begin{vmatrix}1 & 2 \\\\ 1 & 0\\end{vmatrix} = -2 \\ne 0$ (files 1 i 3, columnes 1 i 2). Per tant $\\operatorname{rang} A = 2$.",
       "$A = \\begin{pmatrix}1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 0 & 1\\end{pmatrix}$: el único menor de orden 3 es $|A| = 0$ (fila 2 = 2 × fila 1), pero $\\begin{vmatrix}1 & 2 \\\\ 1 & 0\\end{vmatrix} = -2 \\ne 0$ (filas 1 y 3, columnas 1 y 2). Por tanto $\\operatorname{rg} A = 2$."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Mètode d'orlar (complementari)",
     "Método de orlar (complementario)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Troba un menor no nul d'ordre $k$ (per començar, qualsevol element no nul).",
        "Encuentra un menor no nulo de orden $k$ (para empezar, cualquier elemento no nulo)."
       ],
       [
        "Prova **només** els menors d'ordre $k + 1$ que el contenen (afegint-hi una fila i una columna).",
        "Prueba **solo** los menores de orden $k + 1$ que lo contienen (añadiéndole una fila y una columna)."
       ],
       [
        "Si algun és no nul, puja a $k + 1$ i repeteix; si tots són 0, $\\operatorname{rang} A = k$.",
        "Si alguno es no nulo, sube a $k + 1$ y repite; si todos son 0, $\\operatorname{rg} A = k$."
       ]
      ],
      "ordered": true
     },
     {
      "t": "p",
      "x": ","
     },
     {
      "t": "p",
      "x": [
       "No surt a les diapositives, però és la manera habitual de calcular rangs a mà.",
       "No sale en las diapositivas, pero es la manera habitual de calcular rangos a mano."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "mxrank",
    "props": {
     "id": "th-mx-rank"
    }
   }
  ],
  "d-sis": [
   {
    "t": "warn",
    "blocks": [
     {
      "t": "p",
      "x": [
       "Les diapositives anuncien dues seccions més, **«Sistemes d'equacions lineals»** i **«Vectors i diagonalització»**, però només n'hi ha la portada. Aquí només s'avança per què tot el tema porta cap allà.",
       "Las diapositivas anuncian dos secciones más, **«Sistemas de ecuaciones lineales»** y **«Vectores y diagonalización»**, pero solo está la portada. Aquí solo se adelanta por qué todo el tema lleva hacia allí."
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un sistema lineal és una **equació matricial** $AX = B$: $$\\begin{cases}3x + y = 5 \\\\ 4x + 2y = 6\\end{cases}\\quad \\iff\\quad \\begin{pmatrix}3 & 1 \\\\ 4 & 2\\end{pmatrix}\\begin{pmatrix}x \\\\ y\\end{pmatrix} = \\begin{pmatrix}5 \\\\ 6\\end{pmatrix}$$",
       "Un sistema lineal es una **ecuación matricial** $AX = B$: $$\\begin{cases}3x + y = 5 \\\\ 4x + 2y = 6\\end{cases}\\quad \\iff\\quad \\begin{pmatrix}3 & 1 \\\\ 4 & 2\\end{pmatrix}\\begin{pmatrix}x \\\\ y\\end{pmatrix} = \\begin{pmatrix}5 \\\\ 6\\end{pmatrix}$$"
      ]
     },
     {
      "t": "p",
      "x": [
       "Si $|A| \\ne 0$, es multiplica per $A^{-1}$ **per l'esquerra**: $$X = A^{-1}B = \\begin{pmatrix}1 & -\\frac{1}{2} \\\\ -2 & \\frac{3}{2}\\end{pmatrix}\\begin{pmatrix}5 \\\\ 6\\end{pmatrix} = \\begin{pmatrix}2 \\\\ -1\\end{pmatrix}$$ Comprovació: $3 \\cdot 2 - 1 = 5$ i $4 \\cdot 2 - 2 = 6$.",
       "Si $|A| \\ne 0$, se multiplica por $A^{-1}$ **por la izquierda**: $$X = A^{-1}B = \\begin{pmatrix}1 & -\\frac{1}{2} \\\\ -2 & \\frac{3}{2}\\end{pmatrix}\\begin{pmatrix}5 \\\\ 6\\end{pmatrix} = \\begin{pmatrix}2 \\\\ -1\\end{pmatrix}$$ Comprobación: $3 \\cdot 2 - 1 = 5$ y $4 \\cdot 2 - 2 = 6$."
      ]
     }
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "**Determinant:** si $|A| \\ne 0$, el sistema quadrat té una única solució.",
      "**Determinante:** si $|A| \\ne 0$, el sistema cuadrado tiene una única solución."
     ],
     [
      "**Rang:** quan $|A| = 0$ o $A$ no és quadrada, és l'eina habitual per decidir si hi ha solució i quantes (teorema de Rouché-Frobenius).",
      "**Rango:** cuando $|A| = 0$ o $A$ no es cuadrada, es la herramienta habitual para decidir si hay solución y cuántas (teorema de Rouché-Frobenius)."
     ],
     [
      "**Ordre:** $X = A^{-1}B$, no $BA^{-1}$, que en general ni tan sols existeix.",
      "**Orden:** $X = A^{-1}B$, no $BA^{-1}$, que en general ni siquiera existe."
     ]
    ]
   }
  ],
  "d-err": [
   {
    "t": "table",
    "head": [
     "Diapositiva",
     [
      "Matís",
      "Matiz"
     ]
    ],
    "rows": [
     [
      [
       "Determinants d'ordre 3",
       "Determinantes de orden 3"
      ],
      [
       "El cinquè terme ha de ser $-a_{12}a_{21}a_{33}$, no $-a_{12}a_{23}a_{31}$. Amb la versió de la diapositiva, $\\begin{vmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{vmatrix}$ donaria $-39$ en lloc d'$1$.",
       "El quinto término tiene que ser $-a_{12}a_{21}a_{33}$, no $-a_{12}a_{23}a_{31}$. Con la versión de la diapositiva, $\\begin{vmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{vmatrix}$ daría $-39$ en lugar de $1$."
      ]
     ],
     [
      [
       "Matriu adjunta",
       "Matriz adjunta"
      ],
      [
       "Conveni del curs: $\\operatorname{Adj} A$ sense transposar i $A^{-1} = \\frac{1}{|A|}(\\operatorname{Adj} A)^{T}$. Molts llibres anomenen «adjunta» la transposada.",
       "Convenio del curso: $\\operatorname{Adj} A$ sin trasponer y $A^{-1} = \\frac{1}{|A|}(\\operatorname{Adj} A)^{T}$. Muchos libros llaman «adjunta» a la traspuesta."
      ]
     ],
     [
      [
       "Propietats de la transposada",
       "Propiedades de la traspuesta"
      ],
      [
       "Fan servir una $B$ que no es presenta: ha de ser $m \\times n$ per a la suma i $n \\times p$ per al producte.",
       "Usan una $B$ que no se presenta: tiene que ser $m \\times n$ para la suma y $n \\times p$ para el producto."
      ]
     ],
     [
      [
       "Propietats de la inversa",
       "Propiedades de la inversa"
      ],
      [
       "$A$ i $B$ han de ser **invertibles** i del mateix ordre.",
       "$A$ y $B$ tienen que ser **invertibles** y del mismo orden."
      ]
     ],
     [
      [
       "Existència de la inversa",
       "Existencia de la inversa"
      ],
      [
       "La matriu ha de ser **quadrada**.",
       "La matriz tiene que ser **cuadrada**."
      ]
     ],
     [
      [
       "Producte fila per columna",
       "Producto fila por columna"
      ],
      [
       "$u$ té 3 components però la suma va fins a $n$: tots dos vectors han de tenir el mateix nombre $n$ de components.",
       "$u$ tiene 3 componentes pero la suma llega hasta $n$: los dos vectores tienen que tener el mismo número $n$ de componentes."
      ]
     ],
     [
      [
       "Rang",
       "Rango"
      ],
      [
       "La matriu zero té rang 0 per conveni.",
       "La matriz cero tiene rango 0 por convenio."
      ]
     ],
     [
      [
       "Seccions 4 i 5",
       "Secciones 4 y 5"
      ],
      [
       "Sistemes i diagonalització: només hi ha la portada.",
       "Sistemas y diagonalización: solo está la portada."
      ]
     ]
    ]
   }
  ]
 },
 "examEnd": []
};
