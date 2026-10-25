// Generat per tools/kit-import/mates.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Axiomes, valor absolut, principi d'inducció, construcció de ℤ i ℚ, axioma del suprem, intervals i entorns.",
    "Axiomas, valor absoluto, principio de inducción, construcción de ℤ y ℚ, axioma del supremo, intervalos y entornos."
   ]
  }
 ],
 "sections": {
  "n-conj": [
   {
    "t": "p",
    "x": [
     "$\\mathbb{N} = \\{1, 2, 3, \\ldots\\}$, $\\mathbb{Z} = \\{\\ldots, -1, 0, 1, \\ldots\\}$, $\\mathbb{Q}$ (quocients d'enters), $\\mathbb{R}$ (racionals i irracionals) i $\\mathbb{C}$ (complexos). Cada un amplia l'anterior: $\\mathbb{N} \\subseteq \\mathbb{Z} \\subseteq \\mathbb{Q} \\subseteq \\mathbb{R} \\subseteq \\mathbb{C}$.",
     "$\\mathbb{N} = \\{1, 2, 3, \\ldots\\}$, $\\mathbb{Z} = \\{\\ldots, -1, 0, 1, \\ldots\\}$, $\\mathbb{Q}$ (cocientes de enteros), $\\mathbb{R}$ (racionales e irracionales) y $\\mathbb{C}$ (complejos). Cada uno amplía el anterior: $\\mathbb{N} \\subseteq \\mathbb{Z} \\subseteq \\mathbb{Q} \\subseteq \\mathbb{R} \\subseteq \\mathbb{C}$."
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
       "Per dir a quins conjunts pertany un nombre, busca el **més petit** que el conté: automàticament és de tots els que hi ha a la dreta de la cadena. Preguntes a fer, per ordre:",
       "Para decir a qué conjuntos pertenece un número, busca el **más pequeño** que lo contiene: automáticamente es de todos los que hay a la derecha de la cadena. Preguntas a hacer, por orden:"
      ]
     },
     {
      "t": "list",
      "items": [
       [
        "Simplifica primer: $|-5| = 5$, $\\sqrt{9} = 3$, $\\frac{8}{4} = 2$, $i^{2} = -1$.",
        "Simplifica primero: $|-5| = 5$, $\\sqrt{9} = 3$, $\\frac{8}{4} = 2$, $i^{2} = -1$."
       ],
       [
        "Té part imaginària no nul·la? → només $\\mathbb{C}$.",
        "¿Tiene parte imaginaria no nula? → solo $\\mathbb{C}$."
       ],
       [
        "És un quocient d'enters (decimal finit o periòdic)? Si no → irracional: $\\mathbb{R}$ i $\\mathbb{C}$.",
        "¿Es un cociente de enteros (decimal finito o periódico)? Si no → irracional: $\\mathbb{R}$ y $\\mathbb{C}$."
       ],
       [
        "És enter? Si és positiu → $\\mathbb{N}$; si és 0 o negatiu → $\\mathbb{Z}$.",
        "¿Es entero? Si es positivo → $\\mathbb{N}$; si es 0 o negativo → $\\mathbb{Z}$."
       ]
      ],
      "ordered": true
     }
    ]
   },
   {
    "t": "lab",
    "id": "nombres",
    "props": {
     "id": "th-nums"
    }
   }
  ],
  "n-ax": [
   {
    "t": "table",
    "head": [
     "",
     "Axioma"
    ],
    "rows": [
     [
      "P1",
      [
       "suma commutativa: $a + b = b + a$",
       "suma conmutativa: $a + b = b + a$"
      ]
     ],
     [
      "P2",
      [
       "suma associativa: $a + (b + c) = (a + b) + c$",
       "suma asociativa: $a + (b + c) = (a + b) + c$"
      ]
     ],
     [
      "P3",
      [
       "neutre de la suma: $a + 0 = 0 + a = a$",
       "neutro de la suma: $a + 0 = 0 + a = a$"
      ]
     ],
     [
      "P4",
      [
       "oposat: $a + (-a) = 0$",
       "opuesto: $a + (-a) = 0$"
      ]
     ],
     [
      "P5",
      [
       "producte commutatiu",
       "producto conmutativo"
      ]
     ],
     [
      "P6",
      [
       "producte associatiu",
       "producto asociativo"
      ]
     ],
     [
      "P7",
      [
       "neutre del producte: $a \\cdot 1 = a$, amb $1 \\ne 0$",
       "neutro del producto: $a \\cdot 1 = a$, con $1 \\ne 0$"
      ]
     ],
     [
      "P8",
      [
       "invers: $a \\cdot a^{-1} = 1$ si $a \\ne 0$",
       "inverso: $a \\cdot a^{-1} = 1$ si $a \\ne 0$"
      ]
     ],
     [
      "P9",
      "distributiva: $a \\cdot (b + c) = a \\cdot b + a \\cdot c$"
     ],
     [
      "P10",
      [
       "per a cada $a$, una i només una: $a = 0$, $0 < a$ o $0 < -a$",
       "para cada $a$, una y solo una: $a = 0$, $0 < a$ o $0 < -a$"
      ]
     ],
     [
      "P11",
      [
       "si $0 < a$ i $0 < b$, aleshores $0 < a + b$ i $0 < a \\cdot b$",
       "si $0 < a$ y $0 < b$, entonces $0 < a + b$ y $0 < a \\cdot b$"
      ]
     ],
     [
      "P12",
      [
       "$a < b$ si i només si $a - b < 0$",
       "$a < b$ si y solo si $a - b < 0$"
      ]
     ]
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
       "P1–P8 parlen de cada operació per separat; amb elles soles es demostra molt poc. La P9 lliga suma i producte, i és la que fa que funcioni l'àlgebra de sempre (treure factor comú, desenvolupar). P10–P12 són les de l'ordre: permeten parlar de positius i negatius i manipular desigualtats. La P11 és la que fas servir quan multipliques una desigualtat per un nombre positiu.",
       "P1–P8 hablan de cada operación por separado; con ellas solas se demuestra muy poco. La P9 une suma y producto, y es la que hace que funcione el álgebra de siempre (sacar factor común, desarrollar). P10–P12 son las del orden: permiten hablar de positivos y negativos y manipular desigualdades. La P11 es la que usas cuando multiplicas una desigualdad por un número positivo."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "axiomes",
    "props": {
     "id": "th-ax"
    }
   }
  ],
  "n-abs": [
   {
    "t": "def",
    "title": [
     "valor absolut",
     "valor absoluto"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$|a| = a$ si $a \\ge 0$ i $|a| = -a$ si $a \\le 0$. Sempre és positiu, excepte $|0| = 0$.",
       "$|a| = a$ si $a \\ge 0$ y $|a| = -a$ si $a \\le 0$. Siempre es positivo, excepto $|0| = 0$."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Teorema (desigualtat triangular)",
     "Teorema (desigualdad triangular)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": "$|a + b| \\le |a| + |b|$"
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
       "«$-a$» no vol dir «negatiu»: si $a = -3$, aleshores $-a = 3$. El valor absolut és la **distància a 0**, i $|x - a|$ és la distància entre $x$ i $a$. La desigualtat triangular diu que sumar dos nombres de signe contrari fa que es compensin: la igualtat només passa quan no tenen signes oposats.",
       "«$-a$» no quiere decir «negativo»: si $a = -3$, entonces $-a = 3$. El valor absoluto es la **distancia a 0**, y $|x - a|$ es la distancia entre $x$ y $a$. La desigualdad triangular dice que sumar dos números de signo contrario hace que se compensen: la igualdad solo pasa cuando no tienen signos opuestos."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "absval",
    "props": {
     "id": "th-abs"
    }
   }
  ],
  "n-ind": [
   {
    "t": "thm",
    "title": [
     "Proposició (bon ordre de ℕ)",
     "Proposición (buen orden de ℕ)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "Tot subconjunt no buit de $\\mathbb{N}$ té un element mínim: si $S \\subseteq \\mathbb{N}$, $S \\ne \\emptyset$, existeix $m \\in S$ amb $m \\le k$ per a tot $k \\in S$.",
       "Todo subconjunto no vacío de $\\mathbb{N}$ tiene un elemento mínimo: si $S \\subseteq \\mathbb{N}$, $S \\ne \\emptyset$, existe $m \\in S$ con $m \\le k$ para todo $k \\in S$."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Proposició (principi d'inducció)",
     "Proposición (principio de inducción)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "Sigui $S \\subseteq \\mathbb{N}$ tal que:",
       "Sea $S \\subseteq \\mathbb{N}$ tal que:"
      ]
     },
     {
      "t": "list",
      "items": [
       "$1 \\in S$",
       [
        "si $k \\in S$, aleshores $k + 1 \\in S$",
        "si $k \\in S$, entonces $k + 1 \\in S$"
       ]
      ],
      "ordered": true
     },
     {
      "t": "p",
      "x": [
       "Aleshores $S = \\mathbb{N}$. Un subconjunt amb aquestes dues propietats és un **conjunt inductiu**.",
       "Entonces $S = \\mathbb{N}$. Un subconjunto con estas dos propiedades es un **conjunto inductivo**."
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
       "Per demostrar «$P(n)$ és cert per a tot $n \\in \\mathbb{N}$», agafa $S = \\{n \\in \\mathbb{N} \\mid P(n)\\text{ és cert}\\}$ i comprova les dues condicions. És un dòmino: el cas base fa caure la primera fitxa, el pas inductiu garanteix que cada fitxa fa caure la següent.",
       "Para demostrar «$P(n)$ es cierto para todo $n \\in \\mathbb{N}$», toma $S = \\{n \\in \\mathbb{N} \\mid P(n)\\text{ es cierto}\\}$ y comprueba las dos condiciones. Es un dominó: el caso base hace caer la primera ficha, el paso inductivo garantiza que cada ficha hace caer la siguiente."
      ]
     },
     {
      "t": "p",
      "x": [
       "Al pas inductiu **no** suposes el que vols demostrar: suposes $P(k)$ per a *un* $k$ (la hipòtesi d'inducció, HI) i en dedueixes $P(k + 1)$. És una implicació, i s'ha de demostrar per a un $k$ qualsevol.",
       "En el paso inductivo **no** supones lo que quieres demostrar: supones $P(k)$ para *un* $k$ (la hipótesis de inducción, HI) y deduces $P(k + 1)$. Es una implicación, y se tiene que demostrar para un $k$ cualquiera."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "domino",
    "props": {
     "id": "th-dom"
    }
   }
  ],
  "n-dem": [
   {
    "t": "thm",
    "title": "Plantilla",
    "label": false,
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "**Cas base.** Substitueix $n = 1$ a les dues bandes i comprova que coincideixen (o que es compleix la desigualtat o la divisibilitat).",
        "**Caso base.** Sustituye $n = 1$ en los dos lados y comprueba que coinciden (o que se cumple la desigualdad o la divisibilidad)."
       ],
       [
        "**Hipòtesi d'inducció.** «Suposem que $P(k)$ és cert per a un $k \\in \\mathbb{N}$.» Escriu-la sencera.",
        "**Hipótesis de inducción.** «Supongamos que $P(k)$ es cierto para un $k \\in \\mathbb{N}$.» Escríbela entera."
       ],
       [
        "**Objectiu.** Escriu $P(k + 1)$: el mateix enunciat amb $k + 1$ al lloc de $n$. Així saps on has d'arribar.",
        "**Objetivo.** Escribe $P(k + 1)$: el mismo enunciado con $k + 1$ en lugar de $n$. Así sabes adónde tienes que llegar."
       ],
       [
        "**Pas inductiu.** Parteix de $P(k + 1)$, fes aparèixer l'expressió de la HI, substitueix-la (marca on: «per HI») i arriba a l'objectiu.",
        "**Paso inductivo.** Parte de $P(k + 1)$, haz aparecer la expresión de la HI, sustitúyela (marca dónde: «por HI») y llega al objetivo."
       ],
       [
        "**Conclusió.** «Pel principi d'inducció, $P(n)$ és cert per a tot $n \\in \\mathbb{N}$.»",
        "**Conclusión.** «Por el principio de inducción, $P(n)$ es cierto para todo $n \\in \\mathbb{N}$.»"
       ]
      ],
      "ordered": true
     }
    ]
   },
   {
    "t": "table",
    "head": [
     [
      "Tipus d'enunciat",
      "Tipo de enunciado"
     ],
     [
      "Com fer aparèixer la HI",
      "Cómo hacer aparecer la HI"
     ]
    ],
    "rows": [
     [
      "Suma $1 + \\ldots + f(n) = g(n)$",
      [
       "Separa l'últim terme: $[1 + \\ldots + f(k)] + f(k+1)$; el claudàtor és la HI.",
       "Separa el último término: $[1 + \\ldots + f(k)] + f(k+1)$; el corchete es la HI."
      ]
     ],
     [
      [
       "Divisibilitat «$m \\mid E(n)$»",
       "Divisibilidad «$m \\mid E(n)$»"
      ],
      [
       "Escriu la HI com $E(k) = m \\cdot q$. Desenvolupa $E(k+1)$ i busca-hi $E(k)$ (sumant i restant si cal); la resta ha de ser múltiple de $m$.",
       "Escribe la HI como $E(k) = m \\cdot q$. Desarrolla $E(k+1)$ y busca en ella $E(k)$ (sumando y restando si hace falta); el resto tiene que ser múltiplo de $m$."
      ]
     ],
     [
      [
       "Desigualtat",
       "Desigualdad"
      ],
      [
       "Encadena: $\\text{esquerra}(k+1) = (\\ldots) \\cdot\\text{ esquerra}(k) < (\\ldots) \\cdot\\text{ dreta}(k) \\le\\text{ dreta}(k+1)$. Justifica cada $<$ i $\\le$.",
       "Encadena: $\\text{izquierda}(k+1) = (\\ldots) \\cdot\\text{ izquierda}(k) < (\\ldots) \\cdot\\text{ derecha}(k) \\le\\text{ derecha}(k+1)$. Justifica cada $<$ y $\\le$."
      ]
     ]
    ]
   },
   {
    "t": "warn",
    "blocks": [
     {
      "t": "p",
      "x": [
       "Errors que costen punts: comprovar uns quants casos i dir «per tant és cert» (no és inducció); no fer servir la HI (llavors no és un pas inductiu); fer servir un resultat auxiliar sense demostrar-lo (a l'examen s'han d'enunciar i demostrar, per exemple «$k(k + 1)$ és parell»).",
       "Errores que cuestan puntos: comprobar unos cuantos casos y decir «por tanto es cierto» (no es inducción); no usar la HI (entonces no es un paso inductivo); usar un resultado auxiliar sin demostrarlo (en el examen se tienen que enunciar y demostrar, por ejemplo «$k(k + 1)$ es par»)."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "indprova",
    "props": {
     "id": "th-ind",
     "cfg": {
      "k": "cubs9"
     }
    }
   }
  ],
  "n-rec": [
   {
    "t": "def",
    "title": [
     "potència",
     "potencia"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Per $a \\in \\mathbb{R}$ i $n \\in \\mathbb{N}$: $a^{1} = a$ i $a^{n} = a^{n-1} \\cdot a$ per a $n > 1$.",
       "Para $a \\in \\mathbb{R}$ y $n \\in \\mathbb{N}$: $a^{1} = a$ y $a^{n} = a^{n-1} \\cdot a$ para $n > 1$."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": "factorial",
    "blocks": [
     {
      "t": "p",
      "x": [
       "Per $n \\in \\mathbb{N}$: $1! = 1$ i $n! = (n - 1)! \\cdot n$ per a $n > 1$. Conveni: $0! = 1$.",
       "Para $n \\in \\mathbb{N}$: $1! = 1$ y $n! = (n - 1)! \\cdot n$ para $n > 1$. Convenio: $0! = 1$."
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
       "La inducció també serveix per **definir**: dones el valor per a 1 i una regla per obtenir el valor de $n$ a partir del de $n - 1$. Aquesta regla és la que fas servir als passos inductius amb factorials: $(k + 4)! = (k + 4) \\cdot (k + 3)!$.",
       "La inducción también sirve para **definir**: das el valor para 1 y una regla para obtener el valor de $n$ a partir del de $n - 1$. Esta regla es la que usas en los pasos inductivos con factoriales: $(k + 4)! = (k + 4) \\cdot (k + 3)!$."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "recursiu",
    "props": {
     "id": "th-rec"
    }
   }
  ],
  "n-zq": [
   {
    "t": "p",
    "x": [
     "$\\mathbb{Z}$ amplia $\\mathbb{N}$ però no satisfà la P8. Es pot construir a partir de $\\mathbb{N}$: a $\\mathbb{N} \\times \\mathbb{N}$ es posa la relació $(a, b) \\mathcal{R} (c, d) \\iff a - b = c - d$ i es defineix $\\mathbb{Z} \\cong (\\mathbb{N} \\times \\mathbb{N})/\\mathcal{R}$. Amb $f(n) = (1 + n, 1)$ es veu la inclusió $\\mathbb{N} \\subseteq \\mathbb{Z}$.",
     "$\\mathbb{Z}$ amplía $\\mathbb{N}$ pero no satisface la P8. Se puede construir a partir de $\\mathbb{N}$: en $\\mathbb{N} \\times \\mathbb{N}$ se pone la relación $(a, b) \\mathcal{R} (c, d) \\iff a - b = c - d$ y se define $\\mathbb{Z} \\cong (\\mathbb{N} \\times \\mathbb{N})/\\mathcal{R}$. Con $f(n) = (1 + n, 1)$ se ve la inclusión $\\mathbb{N} \\subseteq \\mathbb{Z}$."
    ]
   },
   {
    "t": "p",
    "x": [
     "$\\mathbb{Q}$ són els quocients $\\frac{m}{n}$ d'enters amb $n \\ne 0$, i hi valen totes les propietats P1–P12. Es construeix a partir de $\\mathbb{Z}$: a $\\mathbb{Z} \\times (\\mathbb{Z} \\setminus \\{0\\})$, $(a, b) \\mathcal{R} (c, d) \\iff a \\cdot d = c \\cdot b$, i $\\mathbb{Q} \\cong (\\mathbb{Z} \\times (\\mathbb{Z} \\setminus \\{0\\}))/\\mathcal{R}$. Amb $f(n) = (n, 1)$ es veu $\\mathbb{Z} \\subseteq \\mathbb{Q}$.",
     "$\\mathbb{Q}$ son los cocientes $\\frac{m}{n}$ de enteros con $n \\ne 0$, y en él valen todas las propiedades P1–P12. Se construye a partir de $\\mathbb{Z}$: en $\\mathbb{Z} \\times (\\mathbb{Z} \\setminus \\{0\\})$, $(a, b) \\mathcal{R} (c, d) \\iff a \\cdot d = c \\cdot b$, y $\\mathbb{Q} \\cong (\\mathbb{Z} \\times (\\mathbb{Z} \\setminus \\{0\\}))/\\mathcal{R}$. Con $f(n) = (n, 1)$ se ve $\\mathbb{Z} \\subseteq \\mathbb{Q}$."
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
       "**Què vol dir.** La parella $(a, b)$ representa «$a - b$» (a ℤ) o «$a/b$» (a ℚ), però moltes parelles representen el mateix: $(5, 2)$, $(4, 1)$ i $(8, 5)$ valen 3; $(1, 2)$, $(2, 4)$ i $(-3, -6)$ valen $\\frac{1}{2}$. La relació diu exactament «representen el mateix», sense fer servir restes ni divisions (que encara no existeixen): $a - b = c - d$ es pot escriure $a + d = c + b$, i $\\frac{a}{b} = \\frac{c}{d}$ s'escriu $a \\cdot d = c \\cdot b$.",
       "**Qué quiere decir.** El par $(a, b)$ representa «$a - b$» (en ℤ) o «$a/b$» (en ℚ), pero muchos pares representan lo mismo: $(5, 2)$, $(4, 1)$ y $(8, 5)$ valen 3; $(1, 2)$, $(2, 4)$ y $(-3, -6)$ valen $\\frac{1}{2}$. La relación dice exactamente «representan lo mismo», sin usar restas ni divisiones (que todavía no existen): $a - b = c - d$ se puede escribir $a + d = c + b$, y $\\frac{a}{b} = \\frac{c}{d}$ se escribe $a \\cdot d = c \\cdot b$."
      ]
     },
     {
      "t": "p",
      "x": [
       "Cada classe d'equivalència és un nombre nou. Així s'aprofita tot el que has vist de relacions d'equivalència i conjunts quocient.",
       "Cada clase de equivalencia es un número nuevo. Así se aprovecha todo lo que has visto de relaciones de equivalencia y conjuntos cociente."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "quocient",
    "props": {
     "id": "th-quo"
    }
   },
   {
    "t": "example",
    "title": [
     "Per què la relació de ℚ és d'equivalència (full 1, ex. 6)",
     "Por qué la relación de ℚ es de equivalencia (hoja 1, ej. 6)"
    ],
    "blocks": [
     {
      "t": "steps",
      "reveal": true,
      "steps": [
       {
        "x": "**Reflexiva**\n$(a, b) \\mathcal{R} (a, b) \\iff a \\cdot b = a \\cdot b$",
        "why": [
         "Cert sempre.",
         "Cierto siempre."
        ]
       },
       {
        "x": [
         "**Simètrica**\n$(a, b) \\mathcal{R} (c, d) \\implies a \\cdot d = c \\cdot b \\implies c \\cdot b = a \\cdot d \\implies (c, d) \\mathcal{R} (a, b)$",
         "**Simétrica**\n$(a, b) \\mathcal{R} (c, d) \\implies a \\cdot d = c \\cdot b \\implies c \\cdot b = a \\cdot d \\implies (c, d) \\mathcal{R} (a, b)$"
        ],
        "why": [
         "La igualtat es pot llegir al revés.",
         "La igualdad se puede leer al revés."
        ]
       },
       {
        "x": [
         "**Transitiva: hipòtesis**\n$a \\cdot d = c \\cdot b$ i $c \\cdot f = e \\cdot d$",
         "**Transitiva: hipótesis**\n$a \\cdot d = c \\cdot b$ y $c \\cdot f = e \\cdot d$"
        ],
        "why": [
         "Volem arribar a a · f = e · b.",
         "Queremos llegar a a · f = e · b."
        ]
       },
       {
        "x": "**Multiplica**\n$a \\cdot d \\cdot f = c \\cdot b \\cdot f = b \\cdot (c \\cdot f) = b \\cdot e \\cdot d$",
        "why": [
         "Multipliquem la primera per f i hi substituïm la segona.",
         "Multiplicamos la primera por f y sustituimos la segunda."
        ]
       },
       {
        "x": [
         "**Treu factor comú d**\n$d \\cdot (a \\cdot f - e \\cdot b) = 0$",
         "**Saca factor común d**\n$d \\cdot (a \\cdot f - e \\cdot b) = 0$"
        ]
       },
       {
        "x": [
         "**El pas clau**\n$d \\ne 0 \\implies a \\cdot f = e \\cdot b \\implies (a, b) \\mathcal{R} (e, f)$",
         "**El paso clave**\n$d \\ne 0 \\implies a \\cdot f = e \\cdot b \\implies (a, b) \\mathcal{R} (e, f)$"
        ],
        "why": [
         "Aquí es fa servir que la segona coordenada no és mai 0. Sense aquesta condició, la transitivitat fallaria.",
         "Aquí se usa que la segunda coordenada nunca es 0. Sin esta condición, la transitividad fallaría."
        ]
       },
       {
        "x": [
         "**Conclusió**\nÉs reflexiva, simètrica i transitiva: és una relació d'equivalència, i el conjunt quocient és $\\mathbb{Q}$.",
         "**Conclusión**\nEs reflexiva, simétrica y transitiva: es una relación de equivalencia, y el conjunto cociente es $\\mathbb{Q}$."
        ],
        "done": true
       }
      ]
     }
    ]
   }
  ],
  "n-real": [
   {
    "t": "p",
    "x": [
     "$\\mathbb{Q}$ satisfà P1–P12, però $\\mathbb{R}$ també, i és més gran: inclou els **irracionals**. Apareixen quan volem fitar conjunts com $X = \\{x \\in \\mathbb{Q} \\mid x^{2} < 2\\}$.",
     "$\\mathbb{Q}$ satisface P1–P12, pero $\\mathbb{R}$ también, y es más grande: incluye los **irracionales**. Aparecen cuando queremos acotar conjuntos como $X = \\{x \\in \\mathbb{Q} \\mid x^{2} < 2\\}$."
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
       "No existeix cap nombre racional $r$ tal que $r^{2} = 2$.",
       "No existe ningún número racional $r$ tal que $r^{2} = 2$."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Teorema (axioma del suprem)",
     "Teorema (axioma del supremo)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si $A \\subseteq \\mathbb{R}$ és no buit i fitat superiorment, aleshores $A$ té suprem a $\\mathbb{R}$. Si $x$ és una cota superior, són equivalents:",
       "Si $A \\subseteq \\mathbb{R}$ es no vacío y acotado superiormente, entonces $A$ tiene supremo en $\\mathbb{R}$. Si $x$ es una cota superior, son equivalentes:"
      ]
     },
     {
      "t": "list",
      "items": [
       [
        "$x$ és el suprem d'$A$;",
        "$x$ es el supremo de $A$;"
       ],
       [
        "tota cota superior $y$ compleix $y \\ge x$;",
        "toda cota superior $y$ cumple $y \\ge x$;"
       ],
       [
        "si $z < x$, existeix $a \\in A$ amb $z < a$;",
        "si $z < x$, existe $a \\in A$ con $z < a$;"
       ],
       [
        "per a tot $\\varepsilon > 0$ existeix $a \\in A$ amb $x - \\varepsilon < a$.",
        "para todo $\\varepsilon > 0$ existe $a \\in A$ con $x - \\varepsilon < a$."
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
       "**Cota superior:** un nombre que no és superat per cap element d'$A$. **Suprem:** la cota superior **més petita**. Les condicions 2, 3 i 4 diuen el mateix de tres maneres: el suprem és cota, i qualsevol cosa per sota seu ja no ho és, perquè sempre hi ha elements d'$A$ tan a prop com vulguis (la 4 amb un marge $\\varepsilon$).",
       "**Cota superior:** un número que no es superado por ningún elemento de $A$. **Supremo:** la cota superior **más pequeña**. Las condiciones 2, 3 y 4 dicen lo mismo de tres maneras: el supremo es cota, y cualquier cosa por debajo ya no lo es, porque siempre hay elementos de $A$ tan cerca como quieras (la 4 con un margen $\\varepsilon$)."
      ]
     },
     {
      "t": "p",
      "x": [
       "El suprem **no ha de ser d'$A$**. Si ho és, és el màxim. A $(0, 1)$ el suprem és 1 i no hi pertany. A $\\mathbb{Q}$, $X = \\{x \\in \\mathbb{Q} \\mid x^{2} < 2\\}$ no té suprem, perquè seria $\\sqrt{2}$: l'axioma és exactament el que distingeix $\\mathbb{R}$ de $\\mathbb{Q}$.",
       "El supremo **no tiene por qué ser de $A$**. Si lo es, es el máximo. En $(0, 1)$ el supremo es 1 y no pertenece. En $\\mathbb{Q}$, $X = \\{x \\in \\mathbb{Q} \\mid x^{2} < 2\\}$ no tiene supremo, porque sería $\\sqrt{2}$: el axioma es exactamente lo que distingue $\\mathbb{R}$ de $\\mathbb{Q}$."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "suprem",
    "props": {
     "id": "th-sup"
    }
   },
   {
    "t": "thm",
    "title": [
     "Ínfim i el conjunt −A",
     "Ínfimo y el conjunto −A"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "Tot $A \\subseteq \\mathbb{R}$ no buit i fitat inferiorment té ínfim. Amb $-A = \\{-a \\mid a \\in A\\}$: si $A$ és fitat superiorment, $-A$ ho és inferiorment (i al revés); si $A$ té suprem, $-A$ té ínfim i val $-\\sup A$; si $A$ té ínfim, $-A$ té suprem i val $-\\inf A$.",
       "Todo $A \\subseteq \\mathbb{R}$ no vacío y acotado inferiormente tiene ínfimo. Con $-A = \\{-a \\mid a \\in A\\}$: si $A$ está acotado superiormente, $-A$ lo está inferiormente (y al revés); si $A$ tiene supremo, $-A$ tiene ínfimo y vale $-\\sup A$; si $A$ tiene ínfimo, $-A$ tiene supremo y vale $-\\inf A$."
      ]
     }
    ]
   },
   {
    "t": "h",
    "x": [
     "Propietats que se'n deriven",
     "Propiedades que se derivan"
    ]
   },
   {
    "t": "list",
    "items": [
     [
      "L'ínfim de $\\{\\frac{1}{n} \\mid n \\in \\mathbb{N}\\}$ és 0.",
      "El ínfimo de $\\{\\frac{1}{n} \\mid n \\in \\mathbb{N}\\}$ es 0."
     ],
     [
      "**Arquimediana:** per a tot $x > 0$ i tot $y \\in \\mathbb{R}$ hi ha $n \\in \\mathbb{N}$ amb $y \\le nx$.",
      "**Arquimediana:** para todo $x > 0$ y todo $y \\in \\mathbb{R}$ hay $n \\in \\mathbb{N}$ con $y \\le nx$."
     ],
     [
      "$\\mathbb{N}$ no és fitat superiorment: per a tot $z \\in \\mathbb{R}$ hi ha $n \\in \\mathbb{N}$ amb $z < n$.",
      "$\\mathbb{N}$ no está acotado superiormente: para todo $z \\in \\mathbb{R}$ hay $n \\in \\mathbb{N}$ con $z < n$."
     ],
     [
      "**Part sencera:** per a cada $x \\in \\mathbb{R}$ hi ha un únic $z \\in \\mathbb{Z}$ amb $z \\le x < z + 1$; s'escriu $[x]$.",
      "**Parte entera:** para cada $x \\in \\mathbb{R}$ hay un único $z \\in \\mathbb{Z}$ con $z \\le x < z + 1$; se escribe $[x]$."
     ],
     [
      "**Arrels:** per a $n \\in \\mathbb{N}$ i $a > 0$ hi ha un únic $b \\in \\mathbb{R}$ (positiu) amb $b^{n} = a$.",
      "**Raíces:** para $n \\in \\mathbb{N}$ y $a > 0$ hay un único $b \\in \\mathbb{R}$ (positivo) con $b^{n} = a$."
     ],
     [
      "**Densitat de ℚ:** entre dos reals $a < b$ sempre hi ha un racional; i també un irracional.",
      "**Densidad de ℚ:** entre dos reales $a < b$ siempre hay un racional; y también un irracional."
     ]
    ],
    "ordered": true
   },
   {
    "t": "lab",
    "id": "reals",
    "props": {
     "id": "th-reals"
    }
   }
  ],
  "n-int": [
   {
    "t": "table",
    "head": [
     [
      "Notació",
      "Notación"
     ],
     [
      "Conjunt",
      "Conjunto"
     ],
     [
      "Nom",
      "Nombre"
     ]
    ],
    "rows": [
     [
      "$[a, b]$",
      "$\\{x \\in \\mathbb{R} \\mid a \\le x \\le b\\}$",
      [
       "tancat",
       "cerrado"
      ]
     ],
     [
      "$(a, b)$",
      "$\\{x \\in \\mathbb{R} \\mid a < x < b\\}$",
      [
       "obert",
       "abierto"
      ]
     ],
     [
      "$[a, b$)",
      "$\\{x \\in \\mathbb{R} \\mid a \\le x < b\\}$",
      [
       "semiobert per la dreta",
       "semiabierto por la derecha"
      ]
     ],
     [
      "$(a, b]$",
      "$\\{x \\in \\mathbb{R} \\mid a < x \\le b\\}$",
      [
       "semiobert per l'esquerra",
       "semiabierto por la izquierda"
      ]
     ],
     [
      "$[a, \\infty$), $(a, \\infty)$",
      "$a \\le x$, $a < x$",
      [
       "semirecta tancada / oberta d'origen a",
       "semirrecta cerrada / abierta de origen a"
      ]
     ],
     [
      "$(-\\infty, b]$, $(-\\infty, b)$",
      "$x \\le b$, $x < b$",
      [
       "semirecta tancada / oberta d'extrem b",
       "semirrecta cerrada / abierta de extremo b"
      ]
     ]
    ]
   },
   {
    "t": "def",
    "title": [
     "entorn",
     "entorno"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "L'entorn obert (bola) de centre $a$ i radi $r > 0$: $B_{r}(a) = \\{x \\in \\mathbb{R} \\mid |x - a| < r\\} = (a - r, a + r)$. El tancat: $\\{x \\mid |x - a| \\le r\\} = [a - r, a + r]$.",
       "El entorno abierto (bola) de centro $a$ y radio $r > 0$: $B_{r}(a) = \\{x \\in \\mathbb{R} \\mid |x - a| < r\\} = (a - r, a + r)$. El cerrado: $\\{x \\mid |x - a| \\le r\\} = [a - r, a + r]$."
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
       "Claudàtor = extrem inclòs, parèntesi = exclòs; a $\\infty$ sempre parèntesi, perquè no és un nombre. Un entorn és «els punts a distància menor que $r$ de $a$», i per això és un interval centrat en $a$.",
       "Corchete = extremo incluido, paréntesis = excluido; en $\\infty$ siempre paréntesis, porque no es un número. Un entorno es «los puntos a distancia menor que $r$ de $a$», y por eso es un intervalo centrado en $a$."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "interval",
    "props": {
     "id": "th-int"
    }
   }
  ]
 },
 "examEnd": []
};
