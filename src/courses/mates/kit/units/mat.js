// Generat per tools/kit-import/mates.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Sessió del 15 d'octubre. Definicions, suma i producte per un escalar, producte de matrius, transposada, potències, traça i tipus de matrius quadrades.",
    "Sesión del 15 de octubre. Definiciones, suma y producto por un escalar, producto de matrices, traspuesta, potencias, traza y tipos de matrices cuadradas.",
    "Session of 15 October. Definitions, addition and multiplication by a scalar, matrix product, transpose, powers, trace and types of square matrices."
   ]
  }
 ],
 "sections": {
  "m-def": [
   {
    "t": "def",
    "title": [
     "matriu",
     "matriz",
     "matrix"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Una **matriu $m \\times n$** és una taula ordenada d'elements $a_{ij} \\in \\mathbb{R}$, amb $i = 1, \\ldots, m$ i $j = 1, \\ldots, n$:",
       "Una **matriz $m \\times n$** es una tabla ordenada de elementos $a_{ij} \\in \\mathbb{R}$, con $i = 1, \\ldots, m$ y $j = 1, \\ldots, n$:",
       "An **$m \\times n$ matrix** is an ordered table of elements $a_{ij} \\in \\mathbb{R}$, with $i = 1, \\ldots, m$ and $j = 1, \\ldots, n$:"
      ]
     },
     {
      "t": "p",
      "x": "$$A = \\begin{pmatrix}a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn}\\end{pmatrix}$$"
     },
     {
      "t": "p",
      "x": [
       "També s'escriu $A = (a_{ij})$.",
       "También se escribe $A = (a_{ij})$.",
       "It is also written $A = (a_{ij})$."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "files, columnes i vectors",
     "filas, columnas y vectores",
     "rows, columns and vectors"
    ],
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "Un **vector** és una matriu amb una sola fila ($m = 1$, **vector fila**) o una sola columna ($n = 1$, **vector columna**).",
        "Un **vector** es una matriz con una sola fila ($m = 1$, **vector fila**) o una sola columna ($n = 1$, **vector columna**).",
        "A **vector** is a matrix with a single row ($m = 1$, **row vector**) or a single column ($n = 1$, **column vector**)."
       ],
       [
        "Les **files** d'$A$ són els $m$ vectors $(a_{i1}, a_{i2}, \\ldots, a_{in})$; les **columnes**, els $n$ vectors columna formats per $a_{1j}, \\ldots, a_{mj}$.",
        "Las **filas** de $A$ son los $m$ vectores $(a_{i1}, a_{i2}, \\ldots, a_{in})$; las **columnas**, los $n$ vectores columna formados por $a_{1j}, \\ldots, a_{mj}$.",
        "The **rows** of $A$ are the $m$ vectors $(a_{i1}, a_{i2}, \\ldots, a_{in})$; the **columns**, the $n$ column vectors formed by $a_{1j}, \\ldots, a_{mj}$."
       ],
       [
        "La **component $ij$** és l'element $a_{ij}$, el de la fila $i$ i la columna $j$.",
        "La **componente $ij$** es el elemento $a_{ij}$, el de la fila $i$ y la columna $j$.",
        "The **$ij$ entry** is the element $a_{ij}$, the one in row $i$ and column $j$."
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
       "**Primer la fila, després la columna**, sempre: a $a_{ij}$ el primer índex és la fila, i $m \\times n$ vol dir $m$ files i $n$ columnes. A $A = \\begin{pmatrix}4 & -1 & 0 \\\\ 7 & 2 & 5\\end{pmatrix}$, la mida és $2 \\times 3$, $a_{23} = 5$ i $a_{12} = -1$; $a_{32}$ no existeix perquè no hi ha tercera fila.",
       "**Primero la fila, después la columna**, siempre: en $a_{ij}$ el primer índice es la fila, y $m \\times n$ quiere decir $m$ filas y $n$ columnas. En $A = \\begin{pmatrix}4 & -1 & 0 \\\\ 7 & 2 & 5\\end{pmatrix}$, el tamaño es $2 \\times 3$, $a_{23} = 5$ y $a_{12} = -1$; $a_{32}$ no existe porque no hay tercera fila.",
       "**Row first, then column**, always: in $a_{ij}$ the first index is the row, and $m \\times n$ means $m$ rows and $n$ columns. In $A = \\begin{pmatrix}4 & -1 & 0 \\\\ 7 & 2 & 5\\end{pmatrix}$, the size is $2 \\times 3$, $a_{23} = 5$ and $a_{12} = -1$; $a_{32}$ does not exist because there is no third row."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "mida i igualtat",
     "tamaño e igualdad",
     "size and equality"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Dues matrius són **de la mateixa mida** si tenen el mateix nombre de files i de columnes. $A = (a_{ij})$ i $B = (b_{ij})$ són **iguals** si tenen la mateixa mida i $a_{ij} = b_{ij}$ per a tot $i$, $j$: són $m \\cdot n$ igualtats de nombres.",
       "Dos matrices son **del mismo tamaño** si tienen el mismo número de filas y de columnas. $A = (a_{ij})$ y $B = (b_{ij})$ son **iguales** si tienen el mismo tamaño y $a_{ij} = b_{ij}$ para todo $i$, $j$: son $m \\cdot n$ igualdades de números.",
       "Two matrices are **the same size** if they have the same number of rows and of columns. $A = (a_{ij})$ and $B = (b_{ij})$ are **equal** if they are the same size and $a_{ij} = b_{ij}$ for every $i$, $j$: that is $m \\cdot n$ equalities of numbers."
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Una igualtat de matrius són moltes igualtats",
     "Una igualdad de matrices son muchas igualdades",
     "A matrix equality is many equalities"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$$\\begin{pmatrix}x & 2 \\\\ 3 & y + 1\\end{pmatrix} = \\begin{pmatrix}5 & 2 \\\\ 3 & 0\\end{pmatrix} \\iff x = 5\\text{ i } y = -1$$",
       "$$\\begin{pmatrix}x & 2 \\\\ 3 & y + 1\\end{pmatrix} = \\begin{pmatrix}5 & 2 \\\\ 3 & 0\\end{pmatrix} \\iff x = 5\\text{ y } y = -1$$",
       "$$\\begin{pmatrix}x & 2 \\\\ 3 & y + 1\\end{pmatrix} = \\begin{pmatrix}5 & 2 \\\\ 3 & 0\\end{pmatrix} \\iff x = 5\\text{ and } y = -1$$"
      ]
     },
     {
      "t": "p",
      "x": [
       "En canvi, $\\begin{pmatrix}1 & 2\\end{pmatrix}$ i $\\begin{pmatrix}1 \\\\ 2\\end{pmatrix}$ **no** són iguals: una és $1 \\times 2$ i l'altra $2 \\times 1$.",
       "En cambio, $\\begin{pmatrix}1 & 2\\end{pmatrix}$ y $\\begin{pmatrix}1 \\\\ 2\\end{pmatrix}$ **no** son iguales: una es $1 \\times 2$ y la otra $2 \\times 1$.",
       "On the other hand, $\\begin{pmatrix}1 & 2\\end{pmatrix}$ and $\\begin{pmatrix}1 \\\\ 2\\end{pmatrix}$ are **not** equal: one is $1 \\times 2$ and the other $2 \\times 1$."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "mxanat",
    "props": {
     "id": "th-mx-anat"
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-mat-1-0",
     "seed": 101
    }
   }
  ],
  "m-ops": [
   {
    "t": "def",
    "title": "suma",
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si $A$ i $B$ són de la **mateixa mida** $m \\times n$, $A + B = (a_{ij} + b_{ij})$: es suma posició a posició, i el resultat també és $m \\times n$. Si les mides són diferents, la suma no existeix.",
       "Si $A$ y $B$ son del **mismo tamaño** $m \\times n$, $A + B = (a_{ij} + b_{ij})$: se suma posición a posición, y el resultado también es $m \\times n$. Si los tamaños son distintos, la suma no existe.",
       "If $A$ and $B$ are the **same size** $m \\times n$, $A + B = (a_{ij} + b_{ij})$: you add position by position, and the result is also $m \\times n$. If the sizes are different, the sum does not exist."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "producte per un escalar",
     "producto por un escalar",
     "multiplication by a scalar"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si $k \\in \\mathbb{R}$, $k \\cdot A = (k \\cdot a_{ij})$: es multiplica **cada** element per $k$. Es defineixen $-A = (-1) \\cdot A$ i $A - B = A + (-B)$.",
       "Si $k \\in \\mathbb{R}$, $k \\cdot A = (k \\cdot a_{ij})$: se multiplica **cada** elemento por $k$. Se definen $-A = (-1) \\cdot A$ y $A - B = A + (-B)$.",
       "If $k \\in \\mathbb{R}$, $k \\cdot A = (k \\cdot a_{ij})$: **each** element is multiplied by $k$. We define $-A = (-1) \\cdot A$ and $A - B = A + (-B)$."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "matriu zero",
     "matriz cero",
     "zero matrix"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$0_{m,n}$ (o simplement $0$) és la matriu $m \\times n$ amb totes les entrades 0, per exemple $0_{3{,}2} = \\begin{pmatrix}0 & 0 \\\\ 0 & 0 \\\\ 0 & 0\\end{pmatrix}$. Fa el paper del 0: $A + 0 = 0 + A = A$.",
       "$0_{m,n}$ (o simplemente $0$) es la matriz $m \\times n$ con todas las entradas 0, por ejemplo $0_{3{,}2} = \\begin{pmatrix}0 & 0 \\\\ 0 & 0 \\\\ 0 & 0\\end{pmatrix}$. Hace el papel del 0: $A + 0 = 0 + A = A$.",
       "$0_{m,n}$ (or simply $0$) is the $m \\times n$ matrix with every entry 0, for example $0_{3{,}2} = \\begin{pmatrix}0 & 0 \\\\ 0 & 0 \\\\ 0 & 0\\end{pmatrix}$. It plays the role of 0: $A + 0 = 0 + A = A$."
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Les tres operacions amb les mateixes matrius",
     "Las tres operaciones con las mismas matrices",
     "The three operations with the same matrices"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Amb $A = \\begin{pmatrix}1 & 2 \\\\ 3 & 4\\end{pmatrix}$ i $B = \\begin{pmatrix}0 & 1 \\\\ -1 & 2\\end{pmatrix}$: $$A + B = \\begin{pmatrix}1 & 3 \\\\ 2 & 6\\end{pmatrix}\\quad 3A = \\begin{pmatrix}3 & 6 \\\\ 9 & 12\\end{pmatrix}\\quad A - B = \\begin{pmatrix}1 & 1 \\\\ 4 & 2\\end{pmatrix}$$",
       "Con $A = \\begin{pmatrix}1 & 2 \\\\ 3 & 4\\end{pmatrix}$ y $B = \\begin{pmatrix}0 & 1 \\\\ -1 & 2\\end{pmatrix}$: $$A + B = \\begin{pmatrix}1 & 3 \\\\ 2 & 6\\end{pmatrix}\\quad 3A = \\begin{pmatrix}3 & 6 \\\\ 9 & 12\\end{pmatrix}\\quad A - B = \\begin{pmatrix}1 & 1 \\\\ 4 & 2\\end{pmatrix}$$",
       "With $A = \\begin{pmatrix}1 & 2 \\\\ 3 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}0 & 1 \\\\ -1 & 2\\end{pmatrix}$: $$A + B = \\begin{pmatrix}1 & 3 \\\\ 2 & 6\\end{pmatrix}\\quad 3A = \\begin{pmatrix}3 & 6 \\\\ 9 & 12\\end{pmatrix}\\quad A - B = \\begin{pmatrix}1 & 1 \\\\ 4 & 2\\end{pmatrix}$$"
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Proposició (propietats)",
     "Proposición (propiedades)",
     "Proposition (properties)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "Siguin $A$, $B$, $C$ matrius $m \\times n$ i $k_{1}, k_{2} \\in \\mathbb{R}$. Aleshores:",
       "Sean $A$, $B$, $C$ matrices $m \\times n$ y $k_{1}, k_{2} \\in \\mathbb{R}$. Entonces:",
       "Let $A$, $B$, $C$ be $m \\times n$ matrices and $k_{1}, k_{2} \\in \\mathbb{R}$. Then:"
      ]
     },
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
        "Enunciat",
        "Enunciado",
        "Statement"
       ]
      ],
      "rows": [
       [
        "1",
        [
         "associativa",
         "asociativa",
         "associative"
        ],
        "$(A + B) + C = A + (B + C)$"
       ],
       [
        "2",
        [
         "element neutre",
         "elemento neutro",
         "identity element"
        ],
        "$A + 0 = A$"
       ],
       [
        "3",
        [
         "element oposat",
         "elemento opuesto",
         "inverse element"
        ],
        "$A + (-A) = 0$"
       ],
       [
        "4",
        [
         "commutativa",
         "conmutativa",
         "commutative"
        ],
        "$A + B = B + A$"
       ],
       [
        "5",
        "distributiva",
        "$k_{1}(A + B) = k_{1}A + k_{1}B$"
       ],
       [
        "6",
        "distributiva",
        "$(k_{1} + k_{2})A = k_{1}A + k_{2}A$"
       ],
       [
        "7",
        [
         "associativa mixta",
         "asociativa mixta",
         "mixed associative"
        ],
        "$(k_{1}k_{2})A = k_{1}(k_{2}A)$"
       ],
       [
        "8",
        [
         "unitat",
         "unidad",
         "unit"
        ],
        "$1 \\cdot A = A$"
       ],
       [
        "9",
        [
         "zero",
         "cero",
         "zero"
        ],
        "$0 \\cdot A = 0$"
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
       "Com que aquestes operacions es fan **element a element**, cada propietat és una propietat dels reals aplicada a cada posició: $A + B = B + A$ perquè $a_{ij} + b_{ij} = b_{ij} + a_{ij}$. Són els axiomes P1–P9 del tema 2, un per casella.",
       "Como estas operaciones se hacen **elemento a elemento**, cada propiedad es una propiedad de los reales aplicada a cada posición: $A + B = B + A$ porque $a_{ij} + b_{ij} = b_{ij} + a_{ij}$. Son los axiomas P1–P9 del tema 2, uno por casilla.",
       "Since these operations are done **element by element**, each property is a property of the reals applied at each position: $A + B = B + A$ because $a_{ij} + b_{ij} = b_{ij} + a_{ij}$. They are axioms P1–P9 from unit 2, one per entry."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "mxops",
    "props": {
     "id": "th-mx-ops"
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-mat-1-1",
     "seed": 118
    }
   }
  ],
  "m-prod": [
   {
    "t": "def",
    "title": [
     "fila per columna",
     "fila por columna",
     "row times column"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si $u = \\begin{pmatrix}u_{1} & u_{2} & \\cdots & u_{n}\\end{pmatrix}$ és un vector fila i $v$ un vector columna amb les components $v_{1}, \\ldots, v_{n}$ (el **mateix nombre**), $$u \\cdot v = \\sum_{i=1}^{n} u_{i}v_{i} = u_{1}v_{1} + u_{2}v_{2} + \\cdots + u_{n}v_{n}$$ El resultat és **un nombre**. Per exemple, $\\begin{pmatrix}1 & 2 & 3\\end{pmatrix} \\cdot \\begin{pmatrix}4 \\\\ 5 \\\\ 6\\end{pmatrix} = 4 + 10 + 18 = 32$.",
       "Si $u = \\begin{pmatrix}u_{1} & u_{2} & \\cdots & u_{n}\\end{pmatrix}$ es un vector fila y $v$ un vector columna con las componentes $v_{1}, \\ldots, v_{n}$ (el **mismo número**), $$u \\cdot v = \\sum_{i=1}^{n} u_{i}v_{i} = u_{1}v_{1} + u_{2}v_{2} + \\cdots + u_{n}v_{n}$$ El resultado es **un número**. Por ejemplo, $\\begin{pmatrix}1 & 2 & 3\\end{pmatrix} \\cdot \\begin{pmatrix}4 \\\\ 5 \\\\ 6\\end{pmatrix} = 4 + 10 + 18 = 32$.",
       "If $u = \\begin{pmatrix}u_{1} & u_{2} & \\cdots & u_{n}\\end{pmatrix}$ is a row vector and $v$ a column vector with components $v_{1}, \\ldots, v_{n}$ (the **same number**), $$u \\cdot v = \\sum_{i=1}^{n} u_{i}v_{i} = u_{1}v_{1} + u_{2}v_{2} + \\cdots + u_{n}v_{n}$$ The result is **a number**. For example, $\\begin{pmatrix}1 & 2 & 3\\end{pmatrix} \\cdot \\begin{pmatrix}4 \\\\ 5 \\\\ 6\\end{pmatrix} = 4 + 10 + 18 = 32$."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "producte de matrius",
     "producto de matrices",
     "matrix product"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si $A$ és $m \\times p$ i $B$ és $p \\times n$ (**columnes d'A = files de B**), $AB$ és la matriu $m \\times n$ que a la posició $ij$ té la **fila $i$ d'A per la columna $j$ de B**: $$c_{ij} = \\sum_{k=1}^{p} a_{ik}b_{kj} = a_{i1}b_{1j} + a_{i2}b_{2j} + \\cdots + a_{ip}b_{pj}$$",
       "Si $A$ es $m \\times p$ y $B$ es $p \\times n$ (**columnas de A = filas de B**), $AB$ es la matriz $m \\times n$ que en la posición $ij$ tiene la **fila $i$ de A por la columna $j$ de B**: $$c_{ij} = \\sum_{k=1}^{p} a_{ik}b_{kj} = a_{i1}b_{1j} + a_{i2}b_{2j} + \\cdots + a_{ip}b_{pj}$$",
       "If $A$ is $m \\times p$ and $B$ is $p \\times n$ (**columns of A = rows of B**), $AB$ is the $m \\times n$ matrix that has, in position $ij$, **row $i$ of A times column $j$ of B**: $$c_{ij} = \\sum_{k=1}^{p} a_{ik}b_{kj} = a_{i1}b_{1j} + a_{i2}b_{2j} + \\cdots + a_{ip}b_{pj}$$"
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
       "**La regla de les mides: «els de dins s'han de tocar».** Escriu $(m \\times p) \\cdot (p \\times n)$: els dos nombres de dins han de coincidir, i els de fora donen la mida del resultat.",
       "**La regla de los tamaños: «los de dentro tienen que tocarse».** Escribe $(m \\times p) \\cdot (p \\times n)$: los dos números de dentro tienen que coincidir, y los de fuera dan el tamaño del resultado.",
       "**The size rule: «the inner ones must touch».** Write $(m \\times p) \\cdot (p \\times n)$: the two inner numbers must match, and the outer ones give the size of the result."
      ]
     },
     {
      "t": "table",
      "head": [
       "A",
       "B",
       "AB"
      ],
      "rows": [
       [
        "$2 \\times 3$",
        "$3 \\times 2$",
        "$2 \\times 2$"
       ],
       [
        "$3 \\times 2$",
        "$2 \\times 3$",
        "$3 \\times 3$"
       ],
       [
        "$1 \\times 3$",
        "$3 \\times 1$",
        [
         "$1 \\times 1$ (un nombre)",
         "$1 \\times 1$ (un número)",
         "$1 \\times 1$ (a number)"
        ]
       ],
       [
        "$2 \\times 3$",
        "$2 \\times 3$",
        [
         "no existeix",
         "no existe",
         "does not exist"
        ]
       ]
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Un producte pas a pas",
     "Un producto paso a paso",
     "A product step by step"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$A = \\begin{pmatrix}1 & 2 \\\\ 3 & 4\\end{pmatrix}$ i $B = \\begin{pmatrix}0 & 1 \\\\ -1 & 2\\end{pmatrix}$:",
       "$A = \\begin{pmatrix}1 & 2 \\\\ 3 & 4\\end{pmatrix}$ y $B = \\begin{pmatrix}0 & 1 \\\\ -1 & 2\\end{pmatrix}$:",
       "$A = \\begin{pmatrix}1 & 2 \\\\ 3 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}0 & 1 \\\\ -1 & 2\\end{pmatrix}$:"
      ]
     },
     {
      "t": "steps",
      "reveal": true,
      "steps": [
       {
        "x": "**$c_{11}$**\n$1 \\cdot 0 + 2 \\cdot (-1) = -2$",
        "why": [
         "fila 1 d'A per columna 1 de B",
         "fila 1 de A por columna 1 de B",
         "row 1 of A times column 1 of B"
        ]
       },
       {
        "x": "**$c_{12}$**\n$1 \\cdot 1 + 2 \\cdot 2 = 5$",
        "why": [
         "fila 1 d'A per columna 2 de B",
         "fila 1 de A por columna 2 de B",
         "row 1 of A times column 2 of B"
        ]
       },
       {
        "x": "**$c_{21}$**\n$3 \\cdot 0 + 4 \\cdot (-1) = -4$",
        "why": [
         "fila 2 d'A per columna 1 de B",
         "fila 2 de A por columna 1 de B",
         "row 2 of A times column 1 of B"
        ]
       },
       {
        "x": "**$c_{22}$**\n$3 \\cdot 1 + 4 \\cdot 2 = 11$",
        "why": [
         "fila 2 d'A per columna 2 de B",
         "fila 2 de A por columna 2 de B",
         "row 2 of A times column 2 of B"
        ]
       },
       {
        "x": [
         "**Resultat**\n$AB = \\begin{pmatrix}-2 & 5 \\\\ -4 & 11\\end{pmatrix}$",
         "**Resultado**\n$AB = \\begin{pmatrix}-2 & 5 \\\\ -4 & 11\\end{pmatrix}$",
         "**Result**\n$AB = \\begin{pmatrix}-2 & 5 \\\\ -4 & 11\\end{pmatrix}$"
        ],
        "done": true
       }
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
       "**El producte no és commutatiu.** Amb les mateixes matrius, $BA = \\begin{pmatrix}3 & 4 \\\\ 5 & 6\\end{pmatrix} \\ne AB$. I sovint, si $AB$ existeix, $BA$ ni tan sols existeix ($2 \\times 3$ per $3 \\times 4$, per exemple). Dues conseqüències:",
       "**El producto no es conmutativo.** Con las mismas matrices, $BA = \\begin{pmatrix}3 & 4 \\\\ 5 & 6\\end{pmatrix} \\ne AB$. Y a menudo, si $AB$ existe, $BA$ ni siquiera existe ($2 \\times 3$ por $3 \\times 4$, por ejemplo). Dos consecuencias:",
       "**The product is not commutative.** With the same matrices, $BA = \\begin{pmatrix}3 & 4 \\\\ 5 & 6\\end{pmatrix} \\ne AB$. And often, if $AB$ exists, $BA$ does not even exist ($2 \\times 3$ times $3 \\times 4$, for example). Two consequences:"
      ]
     },
     {
      "t": "list",
      "items": [
       [
        "$(A + B)^{2} = A^{2} + AB + BA + B^{2}$, que en general **no** és $A^{2} + 2AB + B^{2}$.",
        "$(A + B)^{2} = A^{2} + AB + BA + B^{2}$, que en general **no** es $A^{2} + 2AB + B^{2}$.",
        "$(A + B)^{2} = A^{2} + AB + BA + B^{2}$, which in general is **not** $A^{2} + 2AB + B^{2}$."
       ],
       [
        "Un producte pot donar zero sense que cap factor ho sigui: $\\begin{pmatrix}1 & 1 \\\\ 1 & 1\\end{pmatrix} \\cdot \\begin{pmatrix}1 & -1 \\\\ -1 & 1\\end{pmatrix} = \\begin{pmatrix}0 & 0 \\\\ 0 & 0\\end{pmatrix}$.",
        "Un producto puede dar cero sin que ningún factor lo sea: $\\begin{pmatrix}1 & 1 \\\\ 1 & 1\\end{pmatrix} \\cdot \\begin{pmatrix}1 & -1 \\\\ -1 & 1\\end{pmatrix} = \\begin{pmatrix}0 & 0 \\\\ 0 & 0\\end{pmatrix}$.",
        "A product can be zero without either factor being zero: $\\begin{pmatrix}1 & 1 \\\\ 1 & 1\\end{pmatrix} \\cdot \\begin{pmatrix}1 & -1 \\\\ -1 & 1\\end{pmatrix} = \\begin{pmatrix}0 & 0 \\\\ 0 & 0\\end{pmatrix}$."
       ]
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Proposició (propietats del producte)",
     "Proposición (propiedades del producto)",
     "Proposition (properties of the product)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "Per a matrius de mides adequades i $k \\in \\mathbb{R}$:",
       "Para matrices de tamaños adecuados y $k \\in \\mathbb{R}$:",
       "For matrices of suitable sizes and $k \\in \\mathbb{R}$:"
      ]
     },
     {
      "t": "list",
      "items": [
       [
        "associativa: $(AB)C = A(BC)$",
        "asociativa: $(AB)C = A(BC)$",
        "associative: $(AB)C = A(BC)$"
       ],
       [
        "distributiva per l'esquerra: $A(B + C) = AB + AC$",
        "distributiva por la izquierda: $A(B + C) = AB + AC$",
        "left distributive: $A(B + C) = AB + AC$"
       ],
       [
        "distributiva per la dreta: $(B + C)A = BA + CA$",
        "distributiva por la derecha: $(B + C)A = BA + CA$",
        "right distributive: $(B + C)A = BA + CA$"
       ],
       "$k(AB) = (kA)B = A(kB)$"
      ],
      "ordered": true
     },
     {
      "t": "p",
      "x": [
       "Hi ha dues distributives perquè, com que no és commutatiu, multiplicar per l'esquerra i per la dreta són coses diferents.",
       "Hay dos distributivas porque, como no es conmutativo, multiplicar por la izquierda y por la derecha son cosas diferentes.",
       "There are two distributive laws because, as the product is not commutative, multiplying on the left and on the right are different things."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "mxprod",
    "props": {
     "id": "th-mx-prod"
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-mat-1-4",
     "seed": 135
    }
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-mat-2-0",
     "seed": 152
    }
   }
  ],
  "m-tr": [
   {
    "t": "def",
    "title": [
     "transposada",
     "traspuesta",
     "transpose"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "La transposada d'una matriu $A$ de mida $m \\times n$ és la matriu $A^{T}$ de mida $n \\times m$ que a la posició $ij$ té $a_{ji}$: **les files d'A són les columnes d'A**$^{T}$. Transforma vectors fila en vectors columna i al revés.",
       "La traspuesta de una matriz $A$ de tamaño $m \\times n$ es la matriz $A^{T}$ de tamaño $n \\times m$ que en la posición $ij$ tiene $a_{ji}$: **las filas de A son las columnas de A**$^{T}$. Transforma vectores fila en vectores columna y al revés.",
       "The transpose of an $m \\times n$ matrix $A$ is the $n \\times m$ matrix $A^{T}$ that has $a_{ji}$ in position $ij$: **the rows of A are the columns of A**$^{T}$. It turns row vectors into column vectors and vice versa."
      ]
     }
    ]
   },
   {
    "t": "example",
    "blocks": [
     {
      "t": "p",
      "x": "$$\\begin{pmatrix}1 & 2 & 3 \\\\ 4 & 5 & 6\\end{pmatrix}^{T} = \\begin{pmatrix}1 & 4 \\\\ 2 & 5 \\\\ 3 & 6\\end{pmatrix}\\quad \\begin{pmatrix}1 & 2 & 3\\end{pmatrix}^{T} = \\begin{pmatrix}1 \\\\ 2 \\\\ 3\\end{pmatrix}$$"
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Proposició (propietats de la transposada)",
     "Proposición (propiedades de la traspuesta)",
     "Proposition (properties of the transpose)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "list",
      "ordered": true,
      "items": [
       "$(A + B)^{T} = A^{T} + B^{T}$",
       "$(A^{T})^{T} = A$",
       "$(kA)^{T} = kA^{T}$",
       "$(AB)^{T} = B^{T}A^{T}$"
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
       "**La 4 gira l'ordre**, com els mitjons i les sabates: te'ls poses en un ordre i te'ls treus en l'ordre contrari. Les mides ho confirmen: si $A$ és $2 \\times 3$ i $B$ és $3 \\times 4$, $(AB)^{T}$ és $4 \\times 2$; $B^{T}A^{T}$ és $(4 \\times 3)(3 \\times 2) = 4 \\times 2$, però $A^{T}B^{T}$ seria $(3 \\times 2)(4 \\times 3)$, que no existeix. Al laboratori de la primera secció pots veure on va cada element en transposar.",
       "**La 4 gira el orden**, como los calcetines y los zapatos: te los pones en un orden y te los quitas en el orden contrario. Los tamaños lo confirman: si $A$ es $2 \\times 3$ y $B$ es $3 \\times 4$, $(AB)^{T}$ es $4 \\times 2$; $B^{T}A^{T}$ es $(4 \\times 3)(3 \\times 2) = 4 \\times 2$, pero $A^{T}B^{T}$ sería $(3 \\times 2)(4 \\times 3)$, que no existe. En el laboratorio de la primera sección puedes ver adónde va cada elemento al trasponer.",
       "**Property 4 reverses the order**, like socks and shoes: you put them on in one order and take them off in the opposite order. The sizes confirm it: if $A$ is $2 \\times 3$ and $B$ is $3 \\times 4$, $(AB)^{T}$ is $4 \\times 2$; $B^{T}A^{T}$ is $(4 \\times 3)(3 \\times 2) = 4 \\times 2$, but $A^{T}B^{T}$ would be $(3 \\times 2)(4 \\times 3)$, which does not exist. In the lab of the first section you can see where each element goes when you transpose."
      ]
     }
    ]
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-mat-1-2",
     "seed": 169
    }
   }
  ],
  "m-pot": [
   {
    "t": "def",
    "title": [
     "potència k-èsima",
     "potencia k-ésima",
     "k-th power"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si $A$ és quadrada: $A^{1} = A$ i $A^{k} = A \\cdot A^{k-1}$ per a $k > 1$. Per conveni, $A^{0} = I$.",
       "Si $A$ es cuadrada: $A^{1} = A$ y $A^{k} = A \\cdot A^{k-1}$ para $k > 1$. Por convenio, $A^{0} = I$.",
       "If $A$ is square: $A^{1} = A$ and $A^{k} = A \\cdot A^{k-1}$ for $k > 1$. By convention, $A^{0} = I$."
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Una potència amb patró",
     "Una potencia con patrón",
     "A power with a pattern"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Amb $A = \\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$: $A^{2} = \\begin{pmatrix}1 & 2 \\\\ 0 & 1\\end{pmatrix}$, $A^{3} = A \\cdot A^{2} = \\begin{pmatrix}1 & 3 \\\\ 0 & 1\\end{pmatrix}$, … i en general $A^{n} = \\begin{pmatrix}1 & n \\\\ 0 & 1\\end{pmatrix}$, que es demostra per inducció com al tema 2.",
       "Con $A = \\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$: $A^{2} = \\begin{pmatrix}1 & 2 \\\\ 0 & 1\\end{pmatrix}$, $A^{3} = A \\cdot A^{2} = \\begin{pmatrix}1 & 3 \\\\ 0 & 1\\end{pmatrix}$, … y en general $A^{n} = \\begin{pmatrix}1 & n \\\\ 0 & 1\\end{pmatrix}$, que se demuestra por inducción como en el tema 2.",
       "With $A = \\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$: $A^{2} = \\begin{pmatrix}1 & 2 \\\\ 0 & 1\\end{pmatrix}$, $A^{3} = A \\cdot A^{2} = \\begin{pmatrix}1 & 3 \\\\ 0 & 1\\end{pmatrix}$, … and in general $A^{n} = \\begin{pmatrix}1 & n \\\\ 0 & 1\\end{pmatrix}$, which is proved by induction as in unit 2."
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
       "$A^{2}$ és $A \\cdot A$ (files per columnes), **no** elevar cada element al quadrat. Elevant element a element, aquí sortiria $\\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$, que és incorrecte.",
       "$A^{2}$ es $A \\cdot A$ (filas por columnas), **no** elevar cada elemento al cuadrado. Elevando elemento a elemento, aquí saldría $\\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$, que es incorrecto.",
       "$A^{2}$ is $A \\cdot A$ (rows times columns), **not** squaring each element. Squaring element by element, here you would get $\\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$, which is wrong."
      ]
     }
    ]
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-mat-2-2",
     "seed": 186
    }
   }
  ],
  "m-quad": [
   {
    "t": "def",
    "title": [
     "matriu quadrada",
     "matriz cuadrada",
     "square matrix"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Té el mateix nombre de files que de columnes; si és $n \\times n$ diem que té **ordre $n$**. Dues matrius quadrades del mateix ordre **sempre** es poden sumar i multiplicar, i el resultat torna a ser d'ordre $n$.",
       "Tiene el mismo número de filas que de columnas; si es $n \\times n$ decimos que tiene **orden $n$**. Dos matrices cuadradas del mismo orden **siempre** se pueden sumar y multiplicar, y el resultado vuelve a ser de orden $n$.",
       "It has the same number of rows as columns; if it is $n \\times n$ we say it has **order $n$**. Two square matrices of the same order can **always** be added and multiplied, and the result again has order $n$."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "diagonal principal i traça",
     "diagonal principal y traza",
     "main diagonal and trace"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Els elements $a_{11}, a_{22}, \\ldots, a_{nn}$ formen la **diagonal principal**. La **traça** és la seva suma: $$\\operatorname{tr} A = a_{11} + a_{22} + \\cdots + a_{nn} = \\sum_{i=1}^{n} a_{ii}$$",
       "Los elementos $a_{11}, a_{22}, \\ldots, a_{nn}$ forman la **diagonal principal**. La **traza** es su suma: $$\\operatorname{tr} A = a_{11} + a_{22} + \\cdots + a_{nn} = \\sum_{i=1}^{n} a_{ii}$$",
       "The elements $a_{11}, a_{22}, \\ldots, a_{nn}$ form the **main diagonal**. The **trace** is their sum: $$\\operatorname{tr} A = a_{11} + a_{22} + \\cdots + a_{nn} = \\sum_{i=1}^{n} a_{ii}$$"
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Teorema (propietats de la traça)",
     "Teorema (propiedades de la traza)",
     "Theorem (properties of the trace)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "list",
      "ordered": true,
      "items": [
       "$\\operatorname{tr}(A + B) = \\operatorname{tr} A + \\operatorname{tr} B$",
       "$\\operatorname{tr}(k \\cdot A) = k \\cdot \\operatorname{tr} A$",
       "$\\operatorname{tr}(AB) = \\operatorname{tr}(BA)$"
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "La propietat 3, encara que AB ≠ BA",
     "La propiedad 3, aunque AB ≠ BA",
     "Property 3, even though AB ≠ BA"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Amb les matrius del producte, $AB = \\begin{pmatrix}-2 & 5 \\\\ -4 & 11\\end{pmatrix}$ i $BA = \\begin{pmatrix}3 & 4 \\\\ 5 & 6\\end{pmatrix}$ són diferents, però $\\operatorname{tr}(AB) = -2 + 11 = 9 = 3 + 6 = \\operatorname{tr}(BA)$.",
       "Con las matrices del producto, $AB = \\begin{pmatrix}-2 & 5 \\\\ -4 & 11\\end{pmatrix}$ y $BA = \\begin{pmatrix}3 & 4 \\\\ 5 & 6\\end{pmatrix}$ son diferentes, pero $\\operatorname{tr}(AB) = -2 + 11 = 9 = 3 + 6 = \\operatorname{tr}(BA)$.",
       "With the matrices from the product, $AB = \\begin{pmatrix}-2 & 5 \\\\ -4 & 11\\end{pmatrix}$ and $BA = \\begin{pmatrix}3 & 4 \\\\ 5 & 6\\end{pmatrix}$ are different, but $\\operatorname{tr}(AB) = -2 + 11 = 9 = 3 + 6 = \\operatorname{tr}(BA)$."
      ]
     }
    ]
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-mat-1-3",
     "seed": 203
    }
   }
  ],
  "m-tipus": [
   {
    "t": "def",
    "title": [
     "diagonal, identitat i escalar",
     "diagonal, identidad y escalar",
     "diagonal, identity and scalar"
    ],
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "**Diagonal:** tots els elements fora de la diagonal principal són zero, $a_{ij} = 0$ si $i \\ne j$.",
        "**Diagonal:** todos los elementos fuera de la diagonal principal son cero, $a_{ij} = 0$ si $i \\ne j$.",
        "**Diagonal:** all the elements off the main diagonal are zero, $a_{ij} = 0$ if $i \\ne j$."
       ],
       [
        "**Identitat** $I_{n}$: la diagonal amb tots els elements de la diagonal iguals a 1.",
        "**Identidad** $I_{n}$: la diagonal con todos los elementos de la diagonal iguales a 1.",
        "**Identity** $I_{n}$: the diagonal matrix with every diagonal element equal to 1."
       ],
       [
        "**Escalar:** de la forma $k \\cdot I_{n}$, és a dir, diagonal amb tota la diagonal igual.",
        "**Escalar:** de la forma $k \\cdot I_{n}$, es decir, diagonal con toda la diagonal igual.",
        "**Scalar:** of the form $k \\cdot I_{n}$, that is, diagonal with the whole diagonal equal."
       ]
      ]
     },
     {
      "t": "p",
      "x": "$$I_{2} = \\begin{pmatrix}1 & 0 \\\\ 0 & 1\\end{pmatrix}\\quad I_{3} = \\begin{pmatrix}1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1\\end{pmatrix}\\quad 3I_{3} = \\begin{pmatrix}3 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 3\\end{pmatrix}$$"
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
       "La identitat és l'«1» de les matrius: $AI_{n} = I_{n}A = A$ per a tota $A$ d'ordre $n$. Per això $A^{0} = I$ i la inversa es defineix com «la que multiplicada per $A$ dóna $I$».",
       "La identidad es el «1» de las matrices: $AI_{n} = I_{n}A = A$ para toda $A$ de orden $n$. Por eso $A^{0} = I$ y la inversa se define como «la que multiplicada por $A$ da $I$».",
       "The identity is the «1» of matrices: $AI_{n} = I_{n}A = A$ for every $A$ of order $n$. That is why $A^{0} = I$ and the inverse is defined as «the one that multiplied by $A$ gives $I$»."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "triangulars",
     "triangulares",
     "triangular"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Triangular superior:** zeros per sota de la diagonal ($a_{ij} = 0$ si $i > j$). **Triangular inferior:** zeros per sobre ($a_{ij} = 0$ si $i < j$).",
       "**Triangular superior:** ceros por debajo de la diagonal ($a_{ij} = 0$ si $i > j$). **Triangular inferior:** ceros por encima ($a_{ij} = 0$ si $i < j$).",
       "**Upper triangular:** zeros below the diagonal ($a_{ij} = 0$ if $i > j$). **Lower triangular:** zeros above it ($a_{ij} = 0$ if $i < j$)."
      ]
     },
     {
      "t": "p",
      "x": "$$U = \\begin{pmatrix}u_{11} & u_{12} & u_{13} \\\\ 0 & u_{22} & u_{23} \\\\ 0 & 0 & u_{33}\\end{pmatrix}\\quad L = \\begin{pmatrix}l_{11} & 0 & 0 \\\\ l_{21} & l_{22} & 0 \\\\ l_{31} & l_{32} & l_{33}\\end{pmatrix}$$"
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
       "Si $A$ i $B$ són triangulars superiors i $k \\in \\mathbb{R}$, aleshores $A + B$, $k \\cdot A$ i $A \\cdot B$ també ho són. Igual per a les triangulars inferiors.",
       "Si $A$ y $B$ son triangulares superiores y $k \\in \\mathbb{R}$, entonces $A + B$, $k \\cdot A$ y $A \\cdot B$ también lo son. Igual para las triangulares inferiores.",
       "If $A$ and $B$ are upper triangular and $k \\in \\mathbb{R}$, then $A + B$, $k \\cdot A$ and $A \\cdot B$ are too. The same holds for lower triangular matrices."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "simètrica i antisimètrica",
     "simétrica y antisimétrica",
     "symmetric and antisymmetric"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$A$ és **simètrica** si $A = A^{T}$ ($a_{ij} = a_{ji}$) i **antisimètrica** si $A = -A^{T}$ ($a_{ij} = -a_{ji}$). Les antisimètriques tenen la diagonal nul·la: $a_{ii} = -a_{ii}$ obliga que $a_{ii} = 0$.",
       "$A$ es **simétrica** si $A = A^{T}$ ($a_{ij} = a_{ji}$) y **antisimétrica** si $A = -A^{T}$ ($a_{ij} = -a_{ji}$). Las antisimétricas tienen la diagonal nula: $a_{ii} = -a_{ii}$ obliga a que $a_{ii} = 0$.",
       "$A$ is **symmetric** if $A = A^{T}$ ($a_{ij} = a_{ji}$) and **antisymmetric** if $A = -A^{T}$ ($a_{ij} = -a_{ji}$). Antisymmetric matrices have a zero diagonal: $a_{ii} = -a_{ii}$ forces $a_{ii} = 0$."
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
      "t": "list",
      "items": [
       [
        "$A + A^{T}$ és simètrica.",
        "$A + A^{T}$ es simétrica.",
        "$A + A^{T}$ is symmetric."
       ],
       [
        "$A - A^{T}$ és antisimètrica.",
        "$A - A^{T}$ es antisimétrica.",
        "$A - A^{T}$ is antisymmetric."
       ],
       [
        "$A = \\frac{1}{2}(A + A^{T}) + \\frac{1}{2}(A - A^{T})$: tota matriu quadrada és suma d'una simètrica i una antisimètrica.",
        "$A = \\frac{1}{2}(A + A^{T}) + \\frac{1}{2}(A - A^{T})$: toda matriz cuadrada es suma de una simétrica y una antisimétrica.",
        "$A = \\frac{1}{2}(A + A^{T}) + \\frac{1}{2}(A - A^{T})$: every square matrix is the sum of a symmetric and an antisymmetric matrix."
       ]
      ],
      "ordered": true
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "La descomposició, amb nombres",
     "La descomposición, con números",
     "The decomposition, with numbers"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$A = \\begin{pmatrix}1 & 2 \\\\ 4 & 3\\end{pmatrix}$: $\\frac{1}{2}(A + A^{T}) = \\begin{pmatrix}1 & 3 \\\\ 3 & 3\\end{pmatrix}$ i $\\frac{1}{2}(A - A^{T}) = \\begin{pmatrix}0 & -1 \\\\ 1 & 0\\end{pmatrix}$, i la seva suma torna a ser $A$.",
       "$A = \\begin{pmatrix}1 & 2 \\\\ 4 & 3\\end{pmatrix}$: $\\frac{1}{2}(A + A^{T}) = \\begin{pmatrix}1 & 3 \\\\ 3 & 3\\end{pmatrix}$ y $\\frac{1}{2}(A - A^{T}) = \\begin{pmatrix}0 & -1 \\\\ 1 & 0\\end{pmatrix}$, y su suma vuelve a ser $A$.",
       "$A = \\begin{pmatrix}1 & 2 \\\\ 4 & 3\\end{pmatrix}$: $\\frac{1}{2}(A + A^{T}) = \\begin{pmatrix}1 & 3 \\\\ 3 & 3\\end{pmatrix}$ and $\\frac{1}{2}(A - A^{T}) = \\begin{pmatrix}0 & -1 \\\\ 1 & 0\\end{pmatrix}$, and their sum is $A$ again."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "matriu invertible",
     "matriz invertible",
     "invertible matrix"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$A$ quadrada és **invertible** si existeix $B$ amb $AB = BA = I$. Si existeix és única, és la **inversa** i s'escriu $A^{-1}$. Quan existeix i com es calcula: a la pàgina de determinants.",
       "$A$ cuadrada es **invertible** si existe $B$ con $AB = BA = I$. Si existe es única, es la **inversa** y se escribe $A^{-1}$. Cuándo existe y cómo se calcula: en la página de determinantes.",
       "A square matrix $A$ is **invertible** if there exists $B$ with $AB = BA = I$. If it exists it is unique, it is the **inverse** and it is written $A^{-1}$. When it exists and how to compute it: on the determinants page."
      ]
     }
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
      "Condició",
      "Condición",
      "Condition"
     ],
     [
      "Exemple",
      "Ejemplo",
      "Example"
     ]
    ],
    "rows": [
     [
      "diagonal",
      "$a_{ij} = 0$ si $i \\ne j$",
      "$\\begin{pmatrix}2 & 0 \\\\ 0 & -5\\end{pmatrix}$"
     ],
     [
      "escalar",
      [
       "diagonal i diagonal constant",
       "diagonal y diagonal constante",
       "diagonal and constant diagonal"
      ],
      "$\\begin{pmatrix}3 & 0 \\\\ 0 & 3\\end{pmatrix}$"
     ],
     [
      [
       "identitat",
       "identidad",
       "identity"
      ],
      [
       "escalar amb k = 1",
       "escalar con k = 1",
       "scalar with k = 1"
      ],
      "$\\begin{pmatrix}1 & 0 \\\\ 0 & 1\\end{pmatrix}$"
     ],
     [
      "triangular superior",
      "$a_{ij} = 0$ si $i > j$",
      "$\\begin{pmatrix}1 & 4 \\\\ 0 & 2\\end{pmatrix}$"
     ],
     [
      "triangular inferior",
      "$a_{ij} = 0$ si $i < j$",
      "$\\begin{pmatrix}1 & 0 \\\\ 4 & 2\\end{pmatrix}$"
     ],
     [
      [
       "simètrica",
       "simétrica",
       "symmetric"
      ],
      "$a_{ij} = a_{ji}$",
      "$\\begin{pmatrix}1 & 4 \\\\ 4 & 2\\end{pmatrix}$"
     ],
     [
      [
       "antisimètrica",
       "antisimétrica",
       "antisymmetric"
      ],
      "$a_{ij} = -a_{ji}$",
      "$\\begin{pmatrix}0 & 4 \\\\ -4 & 0\\end{pmatrix}$"
     ]
    ]
   },
   {
    "t": "lab",
    "id": "mxtype",
    "props": {
     "id": "th-mx-type"
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "ref": "mb-mat-2-3",
     "seed": 220
    }
   }
  ]
 },
 "examEnd": [
  {
   "ref": "mb-mat-2-0",
   "seed": 781
  },
  {
   "ref": "mb-mat-2-1",
   "seed": 798
  },
  {
   "ref": "mb-mat-2-2",
   "seed": 815
  },
  {
   "ref": "mb-mat-2-4",
   "seed": 832
  },
  {
   "ref": "mb-mat-3-0",
   "seed": 849
  }
 ]
};
