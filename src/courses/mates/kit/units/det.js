// Generat per tools/kit-import/mates.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Ordre 2 i 3 (Sarrus), menors i adjunts, desenvolupament per files o columnes, propietats, matriu adjunta, inversa i rang. Al final, l'avançament de sistemes i les errates del material.",
    "Orden 2 y 3 (Sarrus), menores y adjuntos, desarrollo por filas o columnas, propiedades, matriz adjunta, inversa y rango. Al final, el adelanto de sistemas y las erratas del material.",
    "Orders 2 and 3 (Sarrus), minors and cofactors, expansion along rows or columns, properties, adjugate matrix, inverse and rank. At the end, a preview of systems and the errata in the course material."
   ]
  }
 ],
 "sections": {
  "d-def": [
   {
    "t": "p",
    "x": [
     "A cada matriu **quadrada** $A$ li associem un nombre, el **determinant**, que s'escriu $\\det(A)$ o $|A|$. Decideix si $A$ és invertible i serveix per resoldre sistemes. Com es calcula depèn de l'ordre.",
     "A cada matriz **cuadrada** $A$ le asociamos un número, el **determinante**, que se escribe $\\det(A)$ o $|A|$. Decide si $A$ es invertible y sirve para resolver sistemas. Cómo se calcula depende del orden.",
     "To each **square** matrix $A$ we associate a number, the **determinant**, written $\\det(A)$ or $|A|$. It decides whether $A$ is invertible and it is used to solve systems. How it is computed depends on the order."
    ]
   },
   {
    "t": "thm",
    "title": [
     "Fórmules",
     "Fórmulas",
     "Formulas"
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
     "Para entenderlo",
     "To understand it"
    ],
    "blocks": [
     {
      "t": "html",
      "h": [
       "<div class=\"lab-split\" style=\"align-items:center\"><div><svg class=\"sar\" viewBox=\"0 0 200 130\" style=\"max-width:200px\" role=\"img\" aria-label=\"Determinant d'ordre 2: diagonal que baixa menys diagonal que puja\"><line class=\"bar\" x1=\"46\" y1=\"18\" x2=\"46\" y2=\"112\"></line><line class=\"bar\" x1=\"154\" y1=\"18\" x2=\"154\" y2=\"112\"></line><line class=\"dp on\" x1=\"58\" y1=\"26\" x2=\"142\" y2=\"104\"></line><line class=\"dn on\" x1=\"58\" y1=\"104\" x2=\"142\" y2=\"26\"></line><text class=\"sg dp\" x=\"30\" y=\"22\">+</text><text class=\"sg dn\" x=\"30\" y=\"122\">−</text><text x=\"72\" y=\"50\">a₁₁</text><text x=\"128\" y=\"50\">a₁₂</text><text x=\"72\" y=\"92\">a₂₁</text><text x=\"128\" y=\"92\">a₂₂</text></svg></div><div><p>Producte de la diagonal que <b>baixa</b> (vermella, suma) <b>menys</b> producte de la que <b>puja</b> (blava, resta).</p></div></div>",
       "<div class=\"lab-split\" style=\"align-items:center\"><div><svg class=\"sar\" viewBox=\"0 0 200 130\" style=\"max-width:200px\" role=\"img\" aria-label=\"Determinante de orden 2: diagonal que baja menos diagonal que sube\"><line class=\"bar\" x1=\"46\" y1=\"18\" x2=\"46\" y2=\"112\"></line><line class=\"bar\" x1=\"154\" y1=\"18\" x2=\"154\" y2=\"112\"></line><line class=\"dp on\" x1=\"58\" y1=\"26\" x2=\"142\" y2=\"104\"></line><line class=\"dn on\" x1=\"58\" y1=\"104\" x2=\"142\" y2=\"26\"></line><text class=\"sg dp\" x=\"30\" y=\"22\">+</text><text class=\"sg dn\" x=\"30\" y=\"122\">−</text><text x=\"72\" y=\"50\">a₁₁</text><text x=\"128\" y=\"50\">a₁₂</text><text x=\"72\" y=\"92\">a₂₁</text><text x=\"128\" y=\"92\">a₂₂</text></svg></div><div><p>Producto de la diagonal que <b>baja</b> (roja, suma) <b>menos</b> producto de la que <b>sube</b> (azul, resta).</p></div></div>",
       "<div class=\"lab-split\" style=\"align-items:center\"><div><svg class=\"sar\" viewBox=\"0 0 200 130\" style=\"max-width:200px\" role=\"img\" aria-label=\"Order-2 determinant: descending diagonal minus ascending diagonal\"><line class=\"bar\" x1=\"46\" y1=\"18\" x2=\"46\" y2=\"112\"></line><line class=\"bar\" x1=\"154\" y1=\"18\" x2=\"154\" y2=\"112\"></line><line class=\"dp on\" x1=\"58\" y1=\"26\" x2=\"142\" y2=\"104\"></line><line class=\"dn on\" x1=\"58\" y1=\"104\" x2=\"142\" y2=\"26\"></line><text class=\"sg dp\" x=\"30\" y=\"22\">+</text><text class=\"sg dn\" x=\"30\" y=\"122\">−</text><text x=\"72\" y=\"50\">a₁₁</text><text x=\"128\" y=\"50\">a₁₂</text><text x=\"72\" y=\"92\">a₂₁</text><text x=\"128\" y=\"92\">a₂₂</text></svg></div><div><p>Product of the <b>descending</b> diagonal (red, added) <b>minus</b> product of the <b>ascending</b> one (blue, subtracted).</p></div></div>"
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
       "En orden 1, $|a_{11}|$ es el determinante, **no** el valor absoluto: como determinante, $|-3| = -3$.",
       "In order 1, $|a_{11}|$ is the determinant, **not** the absolute value: as a determinant, $|-3| = -3$."
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
       "$\\begin{vmatrix}3 & 1 \\\\ 4 & 2\\end{vmatrix} = 3 \\cdot 2 - 4 \\cdot 1 = 2$ y $\\begin{vmatrix}2 & -3 \\\\ 4 & -6\\end{vmatrix} = 2 \\cdot (-6) - 4 \\cdot (-3) = 0$. El segundo es 0 porque la segunda fila es el doble de la primera (propiedad 4).",
       "$\\begin{vmatrix}3 & 1 \\\\ 4 & 2\\end{vmatrix} = 3 \\cdot 2 - 4 \\cdot 1 = 2$ and $\\begin{vmatrix}2 & -3 \\\\ 4 & -6\\end{vmatrix} = 2 \\cdot (-6) - 4 \\cdot (-3) = 0$. The second one is 0 because the second row is twice the first (property 4)."
      ]
     }
    ]
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-det-1-0",
     "seed": 101
    }
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
       "**Errata de la diapositiva:** el quinto término aparece como $-a_{12}a_{23}a_{31}$, que repite el segundo. El correcto es $-a_{12}a_{21}a_{33}$. Comprobación: en cada término tiene que haber **una vez cada fila** (primeros índices 1, 2, 3) y **una vez cada columna** (segundos índices 1, 2, 3).",
       "**Erratum in the slide:** the fifth term appears as $-a_{12}a_{23}a_{31}$, which repeats the second one. The correct one is $-a_{12}a_{21}a_{33}$. Check: each term must contain **each row once** (first indices 1, 2, 3) and **each column once** (second indices 1, 2, 3)."
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo",
     "To understand it"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "**El diagrama.** Copia les dues primeres columnes a la dreta. Les tres diagonals que **baixen** sumen i les tres que **pugen** resten, com a l'ordre 2. Per cada element passen exactament dues fletxes, una de cada color. Només serveix per a ordre 3: per a ordre 4 o més cal el desenvolupament.",
       "**El diagrama.** Copia las dos primeras columnas a la derecha. Las tres diagonales que **bajan** suman y las tres que **suben** restan, como en el orden 2. Por cada elemento pasan exactamente dos flechas, una de cada color. Solo sirve para orden 3: para orden 4 o más hace falta el desarrollo.",
       "**The diagram.** Copy the first two columns to the right. The three **descending** diagonals are added and the three **ascending** ones subtracted, as in order 2. Exactly two arrows pass through each element, one of each colour. It only works for order 3: for order 4 or more you need the expansion."
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Sarrus pas a pas",
     "Sarrus paso a paso",
     "Sarrus step by step"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$A = \\begin{pmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{pmatrix}$. Sumen $1 \\cdot 1 \\cdot 0 + 2 \\cdot 4 \\cdot 5 + 3 \\cdot 0 \\cdot 6 = 40$; resten $3 \\cdot 1 \\cdot 5 + 2 \\cdot 0 \\cdot 0 + 1 \\cdot 4 \\cdot 6 = 39$. Per tant $|A| = 40 - 39 = 1$. És la matriu que surt per defecte al laboratori.",
       "$A = \\begin{pmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{pmatrix}$. Suman $1 \\cdot 1 \\cdot 0 + 2 \\cdot 4 \\cdot 5 + 3 \\cdot 0 \\cdot 6 = 40$; restan $3 \\cdot 1 \\cdot 5 + 2 \\cdot 0 \\cdot 0 + 1 \\cdot 4 \\cdot 6 = 39$. Por tanto $|A| = 40 - 39 = 1$. Es la matriz que sale por defecto en el laboratorio.",
       "$A = \\begin{pmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{pmatrix}$. Added: $1 \\cdot 1 \\cdot 0 + 2 \\cdot 4 \\cdot 5 + 3 \\cdot 0 \\cdot 6 = 40$; subtracted: $3 \\cdot 1 \\cdot 5 + 2 \\cdot 0 \\cdot 0 + 1 \\cdot 4 \\cdot 6 = 39$. Therefore $|A| = 40 - 39 = 1$. It is the matrix the lab shows by default."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "mxsarrus",
    "props": {
     "id": "th-mx-sar"
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-det-1-1",
     "seed": 118
    }
   }
  ],
  "d-menor": [
   {
    "t": "def",
    "title": [
     "menors",
     "menores",
     "minors"
    ],
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Si d'una matriu $A$ (no cal que sigui quadrada) eliminem files i columnes fins a quedar-nos amb una submatriu quadrada d'ordre $k$, el seu determinant és un **menor d'ordre $k$**.",
        "Si de una matriz $A$ (no hace falta que sea cuadrada) eliminamos filas y columnas hasta quedarnos con una submatriz cuadrada de orden $k$, su determinante es un **menor de orden $k$**.",
        "If from a matrix $A$ (it need not be square) we delete rows and columns until we are left with a square submatrix of order $k$, its determinant is a **minor of order $k$**."
       ],
       [
        "Si $A$ és quadrada, el **menor complementari** $M_{ij}$ és el que surt de suprimir la fila $i$ i la columna $j$.",
        "Si $A$ es cuadrada, el **menor complementario** $M_{ij}$ es el que sale de suprimir la fila $i$ y la columna $j$.",
        "If $A$ is square, the **complementary minor** $M_{ij}$ is the one obtained by deleting row $i$ and column $j$."
       ],
       [
        "L'**adjunt** de l'element $ij$ és $m_{ij} = (-1)^{i+j}M_{ij}$.",
        "El **adjunto** del elemento $ij$ es $m_{ij} = (-1)^{i+j}M_{ij}$.",
        "The **cofactor** of element $ij$ is $m_{ij} = (-1)^{i+j}M_{ij}$."
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
     "Para entenderlo",
     "To understand it"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "El signe $(-1)^{i+j}$ és un **tauler d'escacs** que comença amb $+$ a dalt a l'esquerra: $$\\begin{pmatrix}+ & - & + \\\\ - & + & - \\\\ + & - & +\\end{pmatrix}$$ L'adjunt és el menor complementari amb el signe de la seva casella.",
       "El signo $(-1)^{i+j}$ es un **tablero de ajedrez** que empieza con $+$ arriba a la izquierda: $$\\begin{pmatrix}+ & - & + \\\\ - & + & - \\\\ + & - & +\\end{pmatrix}$$ El adjunto es el menor complementario con el signo de su casilla.",
       "The sign $(-1)^{i+j}$ is a **chessboard** that starts with $+$ at the top left: $$\\begin{pmatrix}+ & - & + \\\\ - & + & - \\\\ + & - & +\\end{pmatrix}$$ The cofactor is the complementary minor with the sign of its square."
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
       "Con $A = \\begin{pmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{pmatrix}$: $M_{12} = \\begin{vmatrix}0 & 4 \\\\ 5 & 0\\end{vmatrix} = -20$ y $m_{12} = (-1)^{3} \\cdot (-20) = 20$; $M_{31} = \\begin{vmatrix}2 & 3 \\\\ 1 & 4\\end{vmatrix} = 5$ y $m_{31} = (+1) \\cdot 5 = 5$.",
       "With $A = \\begin{pmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{pmatrix}$: $M_{12} = \\begin{vmatrix}0 & 4 \\\\ 5 & 0\\end{vmatrix} = -20$ and $m_{12} = (-1)^{3} \\cdot (-20) = 20$; $M_{31} = \\begin{vmatrix}2 & 3 \\\\ 1 & 4\\end{vmatrix} = 5$ and $m_{31} = (+1) \\cdot 5 = 5$."
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
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-det-1-2",
     "seed": 135
    }
   }
  ],
  "d-lap": [
   {
    "t": "thm",
    "title": [
     "Definició (determinant d'ordre n)",
     "Definición (determinante de orden n)",
     "Definition (determinant of order n)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "Per a $A$ quadrada d'ordre $n \\ge 3$ i una columna $j$ fixada: $$|A| = \\sum_{i=1}^{n} (-1)^{i+j}a_{ij}M_{ij} = \\sum_{i=1}^{n} a_{ij}m_{ij}$$ Cada element de la columna pel seu adjunt, i se sumen. Cada $M_{ij}$ és d'ordre $n - 1$ i es calcula igual, fins a arribar a ordre 2.",
       "Para $A$ cuadrada de orden $n \\ge 3$ y una columna $j$ fijada: $$|A| = \\sum_{i=1}^{n} (-1)^{i+j}a_{ij}M_{ij} = \\sum_{i=1}^{n} a_{ij}m_{ij}$$ Cada elemento de la columna por su adjunto, y se suman. Cada $M_{ij}$ es de orden $n - 1$ y se calcula igual, hasta llegar a orden 2.",
       "For a square $A$ of order $n \\ge 3$ and a fixed column $j$: $$|A| = \\sum_{i=1}^{n} (-1)^{i+j}a_{ij}M_{ij} = \\sum_{i=1}^{n} a_{ij}m_{ij}$$ Each element of the column times its cofactor, all added up. Each $M_{ij}$ has order $n - 1$ and is computed in the same way, down to order 2."
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
       "El resultado **no depende** de la columna elegida, y también es el mismo si se desarrolla por **cualquier fila**.",
       "The result **does not depend** on the chosen column, and it is also the same if you expand along **any row**."
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo",
     "To understand it"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Tria la línia amb més zeros:** cada zero s'emporta un menor sencer. Amb $A = \\begin{pmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{pmatrix}$, per la columna 1: $$|A| = 1 \\cdot \\begin{vmatrix}1 & 4 \\\\ 6 & 0\\end{vmatrix} - 0 + 5 \\cdot \\begin{vmatrix}2 & 3 \\\\ 1 & 4\\end{vmatrix} = -24 + 25 = 1$$ El mateix que amb Sarrus.",
       "**Elige la línea con más ceros:** cada cero se lleva un menor entero. Con $A = \\begin{pmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{pmatrix}$, por la columna 1: $$|A| = 1 \\cdot \\begin{vmatrix}1 & 4 \\\\ 6 & 0\\end{vmatrix} - 0 + 5 \\cdot \\begin{vmatrix}2 & 3 \\\\ 1 & 4\\end{vmatrix} = -24 + 25 = 1$$ Lo mismo que con Sarrus.",
       "**Choose the line with the most zeros:** each zero wipes out a whole minor. With $A = \\begin{pmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{pmatrix}$, along column 1: $$|A| = 1 \\cdot \\begin{vmatrix}1 & 4 \\\\ 6 & 0\\end{vmatrix} - 0 + 5 \\cdot \\begin{vmatrix}2 & 3 \\\\ 1 & 4\\end{vmatrix} = -24 + 25 = 1$$ The same as with Sarrus."
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Un determinant d'ordre 4",
     "Un determinante de orden 4",
     "A determinant of order 4"
    ],
    "blocks": [
     {
      "t": "steps",
      "reveal": true,
      "steps": [
       {
        "x": [
         "**Triar**\n$D = \\begin{vmatrix}2 & 0 & 1 & 3 \\\\ 0 & 1 & 0 & 0 \\\\ 1 & 0 & 3 & 2 \\\\ 0 & 0 & 1 & 1\\end{vmatrix}$",
         "**Elegir**\n$D = \\begin{vmatrix}2 & 0 & 1 & 3 \\\\ 0 & 1 & 0 & 0 \\\\ 1 & 0 & 3 & 2 \\\\ 0 & 0 & 1 & 1\\end{vmatrix}$",
         "**Choose**\n$D = \\begin{vmatrix}2 & 0 & 1 & 3 \\\\ 0 & 1 & 0 & 0 \\\\ 1 & 0 & 3 & 2 \\\\ 0 & 0 & 1 & 1\\end{vmatrix}$"
        ],
        "why": [
         "La fila 2 només té un element no nul, a₂₂ = 1, amb signe (−1)²⁺² = +.",
         "La fila 2 solo tiene un elemento no nulo, a₂₂ = 1, con signo (−1)²⁺² = +.",
         "Row 2 has only one nonzero element, a₂₂ = 1, with sign (−1)²⁺² = +."
        ]
       },
       {
        "x": [
         "**Desenvolupar per la fila 2**\n$D = (+1) \\cdot 1 \\cdot M_{22} = \\begin{vmatrix}2 & 1 & 3 \\\\ 1 & 3 & 2 \\\\ 0 & 1 & 1\\end{vmatrix}$",
         "**Desarrollar por la fila 2**\n$D = (+1) \\cdot 1 \\cdot M_{22} = \\begin{vmatrix}2 & 1 & 3 \\\\ 1 & 3 & 2 \\\\ 0 & 1 & 1\\end{vmatrix}$",
         "**Expand along row 2**\n$D = (+1) \\cdot 1 \\cdot M_{22} = \\begin{vmatrix}2 & 1 & 3 \\\\ 1 & 3 & 2 \\\\ 0 & 1 & 1\\end{vmatrix}$"
        ],
        "why": [
         "Els altres tres termes porten un 0 i s'anul·len.",
         "Los otros tres términos llevan un 0 y se anulan.",
         "The other three terms carry a 0 and vanish."
        ]
       },
       {
        "x": [
         "**Ordre 3, per la fila 1**\n$= 2 \\cdot \\begin{vmatrix}3 & 2 \\\\ 1 & 1\\end{vmatrix} - 1 \\cdot \\begin{vmatrix}1 & 2 \\\\ 0 & 1\\end{vmatrix} + 3 \\cdot \\begin{vmatrix}1 & 3 \\\\ 0 & 1\\end{vmatrix}$",
         "**Orden 3, por la fila 1**\n$= 2 \\cdot \\begin{vmatrix}3 & 2 \\\\ 1 & 1\\end{vmatrix} - 1 \\cdot \\begin{vmatrix}1 & 2 \\\\ 0 & 1\\end{vmatrix} + 3 \\cdot \\begin{vmatrix}1 & 3 \\\\ 0 & 1\\end{vmatrix}$",
         "**Order 3, along row 1**\n$= 2 \\cdot \\begin{vmatrix}3 & 2 \\\\ 1 & 1\\end{vmatrix} - 1 \\cdot \\begin{vmatrix}1 & 2 \\\\ 0 & 1\\end{vmatrix} + 3 \\cdot \\begin{vmatrix}1 & 3 \\\\ 0 & 1\\end{vmatrix}$"
        ]
       },
       {
        "x": [
         "**Resultat**\n$= 2 \\cdot 1 - 1 \\cdot 1 + 3 \\cdot 1 = 4$",
         "**Resultado**\n$= 2 \\cdot 1 - 1 \\cdot 1 + 3 \\cdot 1 = 4$",
         "**Result**\n$= 2 \\cdot 1 - 1 \\cdot 1 + 3 \\cdot 1 = 4$"
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
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-det-1-3",
     "seed": 152
    }
   }
  ],
  "d-prop": [
   {
    "t": "p",
    "x": [
     "Siguin $A$, $B$ quadrades d'ordre $n$, escrivim $A = (c_{1}, \\ldots, c_{n})$ per columnes i $\\lambda, \\mu \\in \\mathbb{R}$.",
     "Sean $A$, $B$ cuadradas de orden $n$, escribimos $A = (c_{1}, \\ldots, c_{n})$ por columnas y $\\lambda, \\mu \\in \\mathbb{R}$.",
     "Let $A$, $B$ be square matrices of order $n$, write $A = (c_{1}, \\ldots, c_{n})$ by columns, and let $\\lambda, \\mu \\in \\mathbb{R}$."
    ]
   },
   {
    "t": "thm",
    "title": [
     "Per columnes (i per files)",
     "Por columnas (y por filas)",
     "By columns (and by rows)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "table",
      "head": [
       "",
       [
        "Propietat",
        "Propiedad",
        "Property"
       ],
       [
        "En paraules",
        "En palabras",
        "In words"
       ]
      ],
      "rows": [
       [
        "1",
        "$|\\ldots, \\lambda c_{i} + \\mu c_{i}', \\ldots| = \\lambda|\\ldots, c_{i}, \\ldots| + \\mu|\\ldots, c_{i}', \\ldots|$",
        [
         "és lineal en cada columna",
         "es lineal en cada columna",
         "it is linear in each column"
        ]
       ],
       [
        "2",
        "$|\\ldots, c_{i}, \\ldots, c_{j}, \\ldots| = -|\\ldots, c_{j}, \\ldots, c_{i}, \\ldots|$",
        [
         "permutar dues columnes canvia el signe",
         "permutar dos columnas cambia el signo",
         "swapping two columns changes the sign"
        ]
       ],
       [
        "3",
        "$|\\ldots, c_{i} + \\sum_{j\\ne i} \\lambda_{j}c_{j}, \\ldots| = |\\ldots, c_{i}, \\ldots|$",
        [
         "sumar-hi una combinació de les altres no el canvia",
         "sumarle una combinación de las otras no lo cambia",
         "adding a combination of the others does not change it"
        ]
       ],
       [
        "4",
        [
         "una columna combinació de les altres ⟹ $|A| = 0$",
         "una columna combinación de las otras ⟹ $|A| = 0$",
         "a column that is a combination of the others ⟹ $|A| = 0$"
        ],
        [
         "en particular, dues columnes iguals o proporcionals",
         "en particular, dos columnas iguales o proporcionales",
         "in particular, two equal or proportional columns"
        ]
       ],
       [
        "5",
        [
         "una columna de zeros ⟹ $|A| = 0$",
         "una columna de ceros ⟹ $|A| = 0$",
         "a column of zeros ⟹ $|A| = 0$"
        ],
        ""
       ]
      ]
     },
     {
      "t": "p",
      "x": [
       "**Tot val igual per a files.**",
       "**Todo vale igual para filas.**",
       "**Everything holds equally for rows.**"
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Amb les operacions",
     "Con las operaciones",
     "With the operations"
    ],
    "label": false,
    "blocks": [
     {
      "t": "table",
      "head": [
       "",
       [
        "Propietat",
        "Propiedad",
        "Property"
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
         "$|A^{-1}| = \\frac{1}{|A|}$ (si A es invertible)",
         "$|A^{-1}| = \\frac{1}{|A|}$ (if A is invertible)"
        ]
       ],
       [
        "10",
        [
         "triangular ⟹ $|A|$ = producte de la diagonal",
         "triangular ⟹ $|A|$ = producto de la diagonal",
         "triangular ⟹ $|A|$ = product of the diagonal"
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
        "$|\\lambda A| \\ne \\lambda|A|$: multiplicar la matriz por $\\lambda$ multiplica las $n$ columnas, y cada una saca un $\\lambda$ fuera. Si $A$ es $3 \\times 3$ con $|A| = 5$, $|2A| = 2^{3} \\cdot 5 = 40$.",
        "$|\\lambda A| \\ne \\lambda|A|$: multiplying the matrix by $\\lambda$ multiplies all $n$ columns, and each one takes a $\\lambda$ outside. If $A$ is $3 \\times 3$ with $|A| = 5$, $|2A| = 2^{3} \\cdot 5 = 40$."
       ],
       [
        "$|A + B| \\ne |A| + |B|$ en general: $|I_{2}| + |I_{2}| = 2$, però $|I_{2} + I_{2}| = |2I_{2}| = 4$.",
        "$|A + B| \\ne |A| + |B|$ en general: $|I_{2}| + |I_{2}| = 2$, pero $|I_{2} + I_{2}| = |2I_{2}| = 4$.",
        "$|A + B| \\ne |A| + |B|$ in general: $|I_{2}| + |I_{2}| = 2$, but $|I_{2} + I_{2}| = |2I_{2}| = 4$."
       ]
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Les propietats estalvien càlculs",
     "Las propiedades ahorran cálculos",
     "The properties save calculations"
    ],
    "blocks": [
     {
      "t": "list",
      "items": [
       "Triangular: $\\begin{vmatrix}2 & 5 & -1 \\\\ 0 & 3 & 7 \\\\ 0 & 0 & -4\\end{vmatrix} = 2 \\cdot 3 \\cdot (-4) = -24$.",
       [
        "Files proporcionals: $\\begin{vmatrix}1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 0 & 1\\end{vmatrix} = 0$ (fila 2 = 2 × fila 1).",
        "Filas proporcionales: $\\begin{vmatrix}1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 0 & 1\\end{vmatrix} = 0$ (fila 2 = 2 × fila 1).",
        "Proportional rows: $\\begin{vmatrix}1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 0 & 1\\end{vmatrix} = 0$ (row 2 = 2 × row 1)."
       ],
       [
        "Fer zeros (propietat 3): a $\\begin{vmatrix}1 & 2 & 3 \\\\ 2 & 5 & 7 \\\\ 3 & 6 & 10\\end{vmatrix}$ restem 2 × fila 1 a la fila 2 i 3 × fila 1 a la fila 3: queda $\\begin{vmatrix}1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1\\end{vmatrix} = 1$.",
        "Hacer ceros (propiedad 3): en $\\begin{vmatrix}1 & 2 & 3 \\\\ 2 & 5 & 7 \\\\ 3 & 6 & 10\\end{vmatrix}$ restamos 2 × fila 1 a la fila 2 y 3 × fila 1 a la fila 3: queda $\\begin{vmatrix}1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1\\end{vmatrix} = 1$.",
        "Making zeros (property 3): in $\\begin{vmatrix}1 & 2 & 3 \\\\ 2 & 5 & 7 \\\\ 3 & 6 & 10\\end{vmatrix}$ we subtract 2 × row 1 from row 2 and 3 × row 1 from row 3: we get $\\begin{vmatrix}1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1\\end{vmatrix} = 1$."
       ],
       [
        "Producte: si $|A| = 2$ i $|B| = -3$, $|AB| = -6$ sense calcular $AB$.",
        "Producto: si $|A| = 2$ y $|B| = -3$, $|AB| = -6$ sin calcular $AB$.",
        "Product: if $|A| = 2$ and $|B| = -3$, $|AB| = -6$ without computing $AB$."
       ]
      ]
     }
    ]
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-det-2-1",
     "seed": 169
    }
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-det-2-2",
     "seed": 186
    }
   }
  ],
  "d-inv": [
   {
    "t": "def",
    "title": [
     "matriu adjunta",
     "matriz adjunta",
     "adjugate matrix"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$\\operatorname{Adj} A$ (o $A^{*}$) és la matriu que a la posició $ij$ té l'adjunt $m_{ij}$ d'$A$.",
       "$\\operatorname{Adj} A$ (o $A^{*}$) es la matriz que en la posición $ij$ tiene el adjunto $m_{ij}$ de $A$.",
       "$\\operatorname{Adj} A$ (or $A^{*}$) is the matrix that has, in position $ij$, the cofactor $m_{ij}$ of $A$."
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
       "En este curso $\\operatorname{Adj} A$ **no** está traspuesta, y por eso la fórmula lleva $(\\operatorname{Adj} A)^{T}$. Algunos libros llaman «adjunta» directamente a la traspuesta y escriben $A^{-1} = \\frac{1}{|A|} \\operatorname{adj} A$. Da lo mismo; lo que no se puede hacer es mezclar las dos convenciones.",
       "In this course $\\operatorname{Adj} A$ is **not** transposed, and that is why the formula has $(\\operatorname{Adj} A)^{T}$. Some books call the transpose itself the «adjugate» and write $A^{-1} = \\frac{1}{|A|} \\operatorname{adj} A$. It makes no difference; what you cannot do is mix the two conventions."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Proposició",
     "Proposición",
     "Proposition"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "Una matriu quadrada $A$ és invertible si i només si $|A| \\ne 0$.",
       "Una matriz cuadrada $A$ es invertible si y solo si $|A| \\ne 0$.",
       "A square matrix $A$ is invertible if and only if $|A| \\ne 0$."
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo",
     "To understand it"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si $A^{-1}$ existeix, per la propietat 6, $|A| \\cdot |A^{-1}| = |AA^{-1}| = |I| = 1$: $|A|$ no pot ser 0, perquè cap nombre multiplicat per 0 dóna 1. Com als reals, on el 0 és l'únic sense invers.",
       "Si $A^{-1}$ existe, por la propiedad 6, $|A| \\cdot |A^{-1}| = |AA^{-1}| = |I| = 1$: $|A|$ no puede ser 0, porque ningún número multiplicado por 0 da 1. Como en los reales, donde el 0 es el único sin inverso.",
       "If $A^{-1}$ exists, by property 6, $|A| \\cdot |A^{-1}| = |AA^{-1}| = |I| = 1$: $|A|$ cannot be 0, because no number multiplied by 0 gives 1. As with the reals, where 0 is the only number without an inverse."
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
     "Receta",
     "Recipe"
    ],
    "label": false,
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Calcula $|A|$. Si és 0, no hi ha inversa: s'ha acabat.",
        "Calcula $|A|$. Si es 0, no hay inversa: se acabó.",
        "Compute $|A|$. If it is 0, there is no inverse: you are done."
       ],
       [
        "Calcula tots els adjunts $m_{ij} = (-1)^{i+j}M_{ij}$ i forma $\\operatorname{Adj} A$.",
        "Calcula todos los adjuntos $m_{ij} = (-1)^{i+j}M_{ij}$ y forma $\\operatorname{Adj} A$.",
        "Compute all the cofactors $m_{ij} = (-1)^{i+j}M_{ij}$ and form $\\operatorname{Adj} A$."
       ],
       [
        "Transposa.",
        "Traspón.",
        "Transpose."
       ],
       [
        "Divideix-ho tot per $|A|$ i **comprova** que $AA^{-1} = I$.",
        "Divídelo todo por $|A|$ y **comprueba** que $AA^{-1} = I$.",
        "Divide everything by $|A|$ and **check** that $AA^{-1} = I$."
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
     "Para entenderlo",
     "To understand it"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Drecera per a ordre 2:** $$\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix}^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix}d & -b \\\\ -c & a\\end{pmatrix}$$ Intercanvia els de la diagonal principal, canvia el signe dels altres dos i divideix pel determinant. Per exemple, $\\begin{pmatrix}3 & 1 \\\\ 4 & 2\\end{pmatrix}^{-1} = \\frac{1}{2}\\begin{pmatrix}2 & -1 \\\\ -4 & 3\\end{pmatrix} = \\begin{pmatrix}1 & -\\frac{1}{2} \\\\ -2 & \\frac{3}{2}\\end{pmatrix}$.",
       "**Atajo para orden 2:** $$\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix}^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix}d & -b \\\\ -c & a\\end{pmatrix}$$ Intercambia los de la diagonal principal, cambia el signo de los otros dos y divide por el determinante. Por ejemplo, $\\begin{pmatrix}3 & 1 \\\\ 4 & 2\\end{pmatrix}^{-1} = \\frac{1}{2}\\begin{pmatrix}2 & -1 \\\\ -4 & 3\\end{pmatrix} = \\begin{pmatrix}1 & -\\frac{1}{2} \\\\ -2 & \\frac{3}{2}\\end{pmatrix}$.",
       "**Shortcut for order 2:** $$\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix}^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix}d & -b \\\\ -c & a\\end{pmatrix}$$ Swap the ones on the main diagonal, change the sign of the other two and divide by the determinant. For example, $\\begin{pmatrix}3 & 1 \\\\ 4 & 2\\end{pmatrix}^{-1} = \\frac{1}{2}\\begin{pmatrix}2 & -1 \\\\ -4 & 3\\end{pmatrix} = \\begin{pmatrix}1 & -\\frac{1}{2} \\\\ -2 & \\frac{3}{2}\\end{pmatrix}$."
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Inversa d'ordre 3, pas a pas",
     "Inversa de orden 3, paso a paso",
     "Inverse of order 3, step by step"
    ],
    "blocks": [
     {
      "t": "steps",
      "reveal": true,
      "steps": [
       {
        "x": [
         "**1. Determinant**\n$|A| = \\begin{vmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{vmatrix} = 1$",
         "**1. Determinante**\n$|A| = \\begin{vmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{vmatrix} = 1$",
         "**1. Determinant**\n$|A| = \\begin{vmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{vmatrix} = 1$"
        ],
        "why": [
         "Sarrus o desenvolupament per una fila o columna",
         "Sarrus o desarrollo por una fila o columna",
         "Sarrus or expansion along a row or column"
        ]
       },
       {
        "x": [
         "**2. Adjunts**\n$A_{11} = +\\begin{vmatrix}1 & 4\\\\ 6 & 0\\end{vmatrix} = -24$, $A_{12} = -\\begin{vmatrix}0 & 4\\\\ 5 & 0\\end{vmatrix} = 20$, $A_{13} = +\\begin{vmatrix}0 & 1\\\\ 5 & 6\\end{vmatrix} = -5$; igual amb les altres files: $A_{21} = 18$, $A_{22} = -15$, $A_{23} = 4$, $A_{31} = 5$, $A_{32} = -4$, $A_{33} = 1$",
         "**2. Adjuntos**\n$A_{11} = +\\begin{vmatrix}1 & 4\\\\ 6 & 0\\end{vmatrix} = -24$, $A_{12} = -\\begin{vmatrix}0 & 4\\\\ 5 & 0\\end{vmatrix} = 20$, $A_{13} = +\\begin{vmatrix}0 & 1\\\\ 5 & 6\\end{vmatrix} = -5$; igual con las otras filas: $A_{21} = 18$, $A_{22} = -15$, $A_{23} = 4$, $A_{31} = 5$, $A_{32} = -4$, $A_{33} = 1$",
         "**2. Cofactors**\n$A_{11} = +\\begin{vmatrix}1 & 4\\\\ 6 & 0\\end{vmatrix} = -24$, $A_{12} = -\\begin{vmatrix}0 & 4\\\\ 5 & 0\\end{vmatrix} = 20$, $A_{13} = +\\begin{vmatrix}0 & 1\\\\ 5 & 6\\end{vmatrix} = -5$; likewise for the other rows: $A_{21} = 18$, $A_{22} = -15$, $A_{23} = 4$, $A_{31} = 5$, $A_{32} = -4$, $A_{33} = 1$"
        ],
        "why": [
         "Menor complementari amb el signe del tauler d'escacs.",
         "Menor complementario con el signo del tablero de ajedrez.",
         "Complementary minor with the sign from the chessboard."
        ]
       },
       {
        "x": [
         "**3. Matriu adjunta**\n$\\operatorname{Adj} A = \\begin{pmatrix}-24 & 20 & -5 \\\\ 18 & -15 & 4 \\\\ 5 & -4 & 1\\end{pmatrix}$",
         "**3. Matriz adjunta**\n$\\operatorname{Adj} A = \\begin{pmatrix}-24 & 20 & -5 \\\\ 18 & -15 & 4 \\\\ 5 & -4 & 1\\end{pmatrix}$",
         "**3. Adjugate matrix**\n$\\operatorname{Adj} A = \\begin{pmatrix}-24 & 20 & -5 \\\\ 18 & -15 & 4 \\\\ 5 & -4 & 1\\end{pmatrix}$"
        ]
       },
       {
        "x": [
         "**4. Transposem**\n$(\\operatorname{Adj} A)^{T} = \\begin{pmatrix}-24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1\\end{pmatrix}$",
         "**4. Trasponemos**\n$(\\operatorname{Adj} A)^{T} = \\begin{pmatrix}-24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1\\end{pmatrix}$",
         "**4. We transpose**\n$(\\operatorname{Adj} A)^{T} = \\begin{pmatrix}-24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1\\end{pmatrix}$"
        ]
       },
       {
        "x": [
         "**5. Dividim pel determinant**\n$A^{-1} = 1 \\cdot \\begin{pmatrix}-24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1\\end{pmatrix} = \\begin{pmatrix}-24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1\\end{pmatrix}$",
         "**5. Dividimos por el determinante**\n$A^{-1} = 1 \\cdot \\begin{pmatrix}-24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1\\end{pmatrix} = \\begin{pmatrix}-24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1\\end{pmatrix}$",
         "**5. We divide by the determinant**\n$A^{-1} = 1 \\cdot \\begin{pmatrix}-24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1\\end{pmatrix} = \\begin{pmatrix}-24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1\\end{pmatrix}$"
        ],
        "done": true,
        "why": [
         "multipliquem cada element per 1/|A|",
         "multiplicamos cada elemento por 1/|A|",
         "we multiply each element by 1/|A|"
        ]
       },
       {
        "x": [
         "**6. Comprovació**\n$A \\cdot A^{-1} = \\begin{pmatrix}1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1\\end{pmatrix} = I_{3}$",
         "**6. Comprobación**\n$A \\cdot A^{-1} = \\begin{pmatrix}1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1\\end{pmatrix} = I_{3}$",
         "**6. Check**\n$A \\cdot A^{-1} = \\begin{pmatrix}1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1\\end{pmatrix} = I_{3}$"
        ],
        "why": [
         "Surt la identitat: la inversa és correcta.",
         "Sale la identidad: la inversa es correcta.",
         "We get the identity: the inverse is correct."
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
     "Proposición (propiedades de la inversa)",
     "Proposition (properties of the inverse)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si $A$ i $B$ són invertibles del mateix ordre:",
       "Si $A$ y $B$ son invertibles del mismo orden:",
       "If $A$ and $B$ are invertible and of the same order:"
      ]
     },
     {
      "t": "list",
      "items": [
       [
        "$(AB)^{-1} = B^{-1}A^{-1}$ (l'ordre es gira, com a la transposada)",
        "$(AB)^{-1} = B^{-1}A^{-1}$ (el orden se gira, como en la traspuesta)",
        "$(AB)^{-1} = B^{-1}A^{-1}$ (the order is reversed, as with the transpose)"
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
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-det-2-3",
     "seed": 203
    }
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-det-2-4",
     "seed": 220
    }
   }
  ],
  "d-rang": [
   {
    "t": "def",
    "title": [
     "rang",
     "rango",
     "rank"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "El **rang** d'una matriu $A$, $\\operatorname{rang} A$, és l'**ordre del menor no nul més gran** que se'n pot extreure.",
       "El **rango** de una matriz $A$, $\\operatorname{rg} A$, es el **orden del mayor menor no nulo** que se puede extraer de ella.",
       "The **rank** of a matrix $A$, $\\operatorname{rg} A$, is the **order of the largest nonzero minor** that can be extracted from it."
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo",
     "To understand it"
    ],
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Compta quantes files (o columnes) són realment **independents**, és a dir, quantes no es poden obtenir combinant les altres.",
        "Cuenta cuántas filas (o columnas) son realmente **independientes**, es decir, cuántas no se pueden obtener combinando las otras.",
        "It counts how many rows (or columns) are really **independent**, that is, how many cannot be obtained by combining the others."
       ],
       [
        "Si $A$ és $m \\times n$, $\\operatorname{rang} A \\le \\min(m, n)$: no hi ha menors més grans.",
        "Si $A$ es $m \\times n$, $\\operatorname{rg} A \\le \\min(m, n)$: no hay menores más grandes.",
        "If $A$ is $m \\times n$, $\\operatorname{rg} A \\le \\min(m, n)$: there are no larger minors."
       ],
       [
        "Si $A$ és quadrada d'ordre $n$: $\\operatorname{rang} A = n \\iff |A| \\ne 0 \\iff A$ és invertible.",
        "Si $A$ es cuadrada de orden $n$: $\\operatorname{rg} A = n \\iff |A| \\ne 0 \\iff A$ es invertible.",
        "If $A$ is square of order $n$: $\\operatorname{rg} A = n \\iff |A| \\ne 0 \\iff A$ is invertible."
       ],
       [
        "La matriu zero no té cap menor no nul: per conveni, el seu rang és 0.",
        "La matriz cero no tiene ningún menor no nulo: por convenio, su rango es 0.",
        "The zero matrix has no nonzero minor: by convention, its rank is 0."
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
       "$A = \\begin{pmatrix}1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 0 & 1\\end{pmatrix}$: el único menor de orden 3 es $|A| = 0$ (fila 2 = 2 × fila 1), pero $\\begin{vmatrix}1 & 2 \\\\ 1 & 0\\end{vmatrix} = -2 \\ne 0$ (filas 1 y 3, columnas 1 y 2). Por tanto $\\operatorname{rg} A = 2$.",
       "$A = \\begin{pmatrix}1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 0 & 1\\end{pmatrix}$: the only minor of order 3 is $|A| = 0$ (row 2 = 2 × row 1), but $\\begin{vmatrix}1 & 2 \\\\ 1 & 0\\end{vmatrix} = -2 \\ne 0$ (rows 1 and 3, columns 1 and 2). Therefore $\\operatorname{rg} A = 2$."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Mètode d'orlar (complementari)",
     "Método de orlar (complementario)",
     "Bordering method (complementary)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Troba un menor no nul d'ordre $k$ (per començar, qualsevol element no nul).",
        "Encuentra un menor no nulo de orden $k$ (para empezar, cualquier elemento no nulo).",
        "Find a nonzero minor of order $k$ (to start, any nonzero element)."
       ],
       [
        "Prova **només** els menors d'ordre $k + 1$ que el contenen (afegint-hi una fila i una columna).",
        "Prueba **solo** los menores de orden $k + 1$ que lo contienen (añadiéndole una fila y una columna).",
        "Try **only** the minors of order $k + 1$ that contain it (adding one row and one column)."
       ],
       [
        "Si algun és no nul, puja a $k + 1$ i repeteix; si tots són 0, $\\operatorname{rang} A = k$.",
        "Si alguno es no nulo, sube a $k + 1$ y repite; si todos son 0, $\\operatorname{rg} A = k$.",
        "If any of them is nonzero, go up to $k + 1$ and repeat; if they are all 0, $\\operatorname{rg} A = k$."
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
       "No sale en las diapositivas, pero es la manera habitual de calcular rangos a mano.",
       "It is not in the slides, but it is the usual way to compute ranks by hand."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "mxrank",
    "props": {
     "id": "th-mx-rank"
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-det-2-5",
     "seed": 237
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
       "Las diapositivas anuncian dos secciones más, **«Sistemas de ecuaciones lineales»** y **«Vectores y diagonalización»**, pero solo está la portada. Aquí solo se adelanta por qué todo el tema lleva hacia allí.",
       "The slides announce two more sections, **«Systems of linear equations»** and **«Vectors and diagonalization»**, but only the title page is there. Here we only preview why the whole unit leads there."
      ]
     }
    ]
   },
   {
    "t": "box",
    "mode": "explained",
    "title": [
     "Per entendre-ho",
     "Para entenderlo",
     "To understand it"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Un sistema lineal és una **equació matricial** $AX = B$: $$\\begin{cases}3x + y = 5 \\\\ 4x + 2y = 6\\end{cases}\\quad \\iff\\quad \\begin{pmatrix}3 & 1 \\\\ 4 & 2\\end{pmatrix}\\begin{pmatrix}x \\\\ y\\end{pmatrix} = \\begin{pmatrix}5 \\\\ 6\\end{pmatrix}$$",
       "Un sistema lineal es una **ecuación matricial** $AX = B$: $$\\begin{cases}3x + y = 5 \\\\ 4x + 2y = 6\\end{cases}\\quad \\iff\\quad \\begin{pmatrix}3 & 1 \\\\ 4 & 2\\end{pmatrix}\\begin{pmatrix}x \\\\ y\\end{pmatrix} = \\begin{pmatrix}5 \\\\ 6\\end{pmatrix}$$",
       "A linear system is a **matrix equation** $AX = B$: $$\\begin{cases}3x + y = 5 \\\\ 4x + 2y = 6\\end{cases}\\quad \\iff\\quad \\begin{pmatrix}3 & 1 \\\\ 4 & 2\\end{pmatrix}\\begin{pmatrix}x \\\\ y\\end{pmatrix} = \\begin{pmatrix}5 \\\\ 6\\end{pmatrix}$$"
      ]
     },
     {
      "t": "p",
      "x": [
       "Si $|A| \\ne 0$, es multiplica per $A^{-1}$ **per l'esquerra**: $$X = A^{-1}B = \\begin{pmatrix}1 & -\\frac{1}{2} \\\\ -2 & \\frac{3}{2}\\end{pmatrix}\\begin{pmatrix}5 \\\\ 6\\end{pmatrix} = \\begin{pmatrix}2 \\\\ -1\\end{pmatrix}$$ Comprovació: $3 \\cdot 2 - 1 = 5$ i $4 \\cdot 2 - 2 = 6$.",
       "Si $|A| \\ne 0$, se multiplica por $A^{-1}$ **por la izquierda**: $$X = A^{-1}B = \\begin{pmatrix}1 & -\\frac{1}{2} \\\\ -2 & \\frac{3}{2}\\end{pmatrix}\\begin{pmatrix}5 \\\\ 6\\end{pmatrix} = \\begin{pmatrix}2 \\\\ -1\\end{pmatrix}$$ Comprobación: $3 \\cdot 2 - 1 = 5$ y $4 \\cdot 2 - 2 = 6$.",
       "If $|A| \\ne 0$, multiply by $A^{-1}$ **on the left**: $$X = A^{-1}B = \\begin{pmatrix}1 & -\\frac{1}{2} \\\\ -2 & \\frac{3}{2}\\end{pmatrix}\\begin{pmatrix}5 \\\\ 6\\end{pmatrix} = \\begin{pmatrix}2 \\\\ -1\\end{pmatrix}$$ Check: $3 \\cdot 2 - 1 = 5$ and $4 \\cdot 2 - 2 = 6$."
      ]
     }
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "**Determinant:** si $|A| \\ne 0$, el sistema quadrat té una única solució.",
      "**Determinante:** si $|A| \\ne 0$, el sistema cuadrado tiene una única solución.",
      "**Determinant:** if $|A| \\ne 0$, the square system has a unique solution."
     ],
     [
      "**Rang:** quan $|A| = 0$ o $A$ no és quadrada, és l'eina habitual per decidir si hi ha solució i quantes (teorema de Rouché-Frobenius).",
      "**Rango:** cuando $|A| = 0$ o $A$ no es cuadrada, es la herramienta habitual para decidir si hay solución y cuántas (teorema de Rouché-Frobenius).",
      "**Rank:** when $|A| = 0$ or $A$ is not square, it is the usual tool to decide whether there is a solution and how many (Rouché–Frobenius theorem)."
     ],
     [
      "**Ordre:** $X = A^{-1}B$, no $BA^{-1}$, que en general ni tan sols existeix.",
      "**Orden:** $X = A^{-1}B$, no $BA^{-1}$, que en general ni siquiera existe.",
      "**Order:** $X = A^{-1}B$, not $BA^{-1}$, which in general does not even exist."
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
      "Matiz",
      "Nuance"
     ]
    ],
    "rows": [
     [
      [
       "Determinants d'ordre 3",
       "Determinantes de orden 3",
       "Determinants of order 3"
      ],
      [
       "El cinquè terme ha de ser $-a_{12}a_{21}a_{33}$, no $-a_{12}a_{23}a_{31}$. Amb la versió de la diapositiva, $\\begin{vmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{vmatrix}$ donaria $-39$ en lloc d'$1$.",
       "El quinto término tiene que ser $-a_{12}a_{21}a_{33}$, no $-a_{12}a_{23}a_{31}$. Con la versión de la diapositiva, $\\begin{vmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{vmatrix}$ daría $-39$ en lugar de $1$.",
       "The fifth term must be $-a_{12}a_{21}a_{33}$, not $-a_{12}a_{23}a_{31}$. With the slide's version, $\\begin{vmatrix}1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0\\end{vmatrix}$ would give $-39$ instead of $1$."
      ]
     ],
     [
      [
       "Matriu adjunta",
       "Matriz adjunta",
       "Adjugate matrix"
      ],
      [
       "Conveni del curs: $\\operatorname{Adj} A$ sense transposar i $A^{-1} = \\frac{1}{|A|}(\\operatorname{Adj} A)^{T}$. Molts llibres anomenen «adjunta» la transposada.",
       "Convenio del curso: $\\operatorname{Adj} A$ sin trasponer y $A^{-1} = \\frac{1}{|A|}(\\operatorname{Adj} A)^{T}$. Muchos libros llaman «adjunta» a la traspuesta.",
       "Course convention: $\\operatorname{Adj} A$ not transposed and $A^{-1} = \\frac{1}{|A|}(\\operatorname{Adj} A)^{T}$. Many books call the transpose the «adjugate»."
      ]
     ],
     [
      [
       "Propietats de la transposada",
       "Propiedades de la traspuesta",
       "Properties of the transpose"
      ],
      [
       "Fan servir una $B$ que no es presenta: ha de ser $m \\times n$ per a la suma i $n \\times p$ per al producte.",
       "Usan una $B$ que no se presenta: tiene que ser $m \\times n$ para la suma y $n \\times p$ para el producto.",
       "They use a $B$ that is not introduced: it has to be $m \\times n$ for the sum and $n \\times p$ for the product."
      ]
     ],
     [
      [
       "Propietats de la inversa",
       "Propiedades de la inversa",
       "Properties of the inverse"
      ],
      [
       "$A$ i $B$ han de ser **invertibles** i del mateix ordre.",
       "$A$ y $B$ tienen que ser **invertibles** y del mismo orden.",
       "$A$ and $B$ must be **invertible** and of the same order."
      ]
     ],
     [
      [
       "Existència de la inversa",
       "Existencia de la inversa",
       "Existence of the inverse"
      ],
      [
       "La matriu ha de ser **quadrada**.",
       "La matriz tiene que ser **cuadrada**.",
       "The matrix must be **square**."
      ]
     ],
     [
      [
       "Producte fila per columna",
       "Producto fila por columna",
       "Row-times-column product"
      ],
      [
       "$u$ té 3 components però la suma va fins a $n$: tots dos vectors han de tenir el mateix nombre $n$ de components.",
       "$u$ tiene 3 componentes pero la suma llega hasta $n$: los dos vectores tienen que tener el mismo número $n$ de componentes.",
       "$u$ has 3 components but the sum goes up to $n$: the two vectors must have the same number $n$ of components."
      ]
     ],
     [
      [
       "Rang",
       "Rango",
       "Rank"
      ],
      [
       "La matriu zero té rang 0 per conveni.",
       "La matriz cero tiene rango 0 por convenio.",
       "The zero matrix has rank 0 by convention."
      ]
     ],
     [
      [
       "Seccions 4 i 5",
       "Secciones 4 y 5",
       "Sections 4 and 5"
      ],
      [
       "Sistemes i diagonalització: només hi ha la portada.",
       "Sistemas y diagonalización: solo está la portada.",
       "Systems and diagonalization: only the title page is there."
      ]
     ]
    ]
   }
  ]
 },
 "examEnd": [
  {
   "ref": "mb-det-2-0",
   "seed": 781
  },
  {
   "ref": "mb-det-2-1",
   "seed": 798
  },
  {
   "ref": "mb-det-2-3",
   "seed": 815
  },
  {
   "ref": "mb-det-2-5",
   "seed": 832
  },
  {
   "ref": "mb-det-3-1",
   "seed": 849
  }
 ]
};
