// Generat per tools/kit-import/mates.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Operacions, mòdul i argument amb la fórmula del material, forma polar, arrels n-èssimes i factorització de polinomis.",
    "Operaciones, módulo y argumento con la fórmula del material, forma polar, raíces n-ésimas y factorización de polinomios."
   ]
  }
 ],
 "sections": {
  "x-def": [
   {
    "t": "def",
    "title": [
     "nombre complex",
     "número complejo"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Una expressió $z = a + b \\cdot i$ amb $a, b \\in \\mathbb{R}$ i $i^{2} = -1$; $a$ és la **part real** i $b$ la **part imaginària**. El conjunt és $\\mathbb{C}$. Dos complexos són iguals si tenen la mateixa part real i la mateixa part imaginària.",
       "Una expresión $z = a + b \\cdot i$ con $a, b \\in \\mathbb{R}$ e $i^{2} = -1$; $a$ es la **parte real** y $b$ la **parte imaginaria**. El conjunto es $\\mathbb{C}$. Dos complejos son iguales si tienen la misma parte real y la misma parte imaginaria."
      ]
     }
    ]
   },
   {
    "t": "p",
    "x": [
     "Amb $f(r) = r + 0 \\cdot i$ els reals són complexos, i queda la cadena $\\mathbb{N} \\subseteq \\mathbb{Z} \\subseteq \\mathbb{Q} \\subseteq \\mathbb{R} \\subseteq \\mathbb{C}$.",
     "Con $f(r) = r + 0 \\cdot i$ los reales son complejos, y queda la cadena $\\mathbb{N} \\subseteq \\mathbb{Z} \\subseteq \\mathbb{Q} \\subseteq \\mathbb{R} \\subseteq \\mathbb{C}$."
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
       "Un complex és un **punt del pla**: $a + bi \\leftrightarrow (a, b)$, o una fletxa des de l'origen fins a aquest punt. L'eix horitzontal és la part real i el vertical la imaginària. Tot el que segueix (mòdul, argument, producte que gira) és geometria d'aquest pla.",
       "Un complejo es un **punto del plano**: $a + bi \\leftrightarrow (a, b)$, o una flecha desde el origen hasta ese punto. El eje horizontal es la parte real y el vertical la imaginaria. Todo lo que sigue (módulo, argumento, producto que gira) es geometría de este plano."
      ]
     }
    ]
   }
  ],
  "x-ops": [
   {
    "t": "p",
    "x": [
     "Amb $z_{1} = a + bi$ i $z_{2} = c + di$:",
     "Con $z_{1} = a + bi$ y $z_{2} = c + di$:"
    ]
   },
   {
    "t": "list",
    "items": [
     "suma: $z_{1} + z_{2} = (a + c) + (b + d)i$",
     [
      "producte: $z_{1} \\cdot z_{2} = (ac - bd) + (ad + bc)i$",
      "producto: $z_{1} \\cdot z_{2} = (ac - bd) + (ad + bc)i$"
     ],
     [
      "quocient ($z_{2} \\ne 0$): $\\frac{a + bi}{c + di} = \\frac{(a + bi)(c - di)}{(c + di)(c - di)} = \\frac{ac + bd}{c^{2} + d^{2}} + \\frac{bc - ad}{c^{2} + d^{2}} i$",
      "cociente ($z_{2} \\ne 0$): $\\frac{a + bi}{c + di} = \\frac{(a + bi)(c - di)}{(c + di)(c - di)} = \\frac{ac + bd}{c^{2} + d^{2}} + \\frac{bc - ad}{c^{2} + d^{2}} i$"
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
       "El producte és multiplicar com polinomis en $i$ i substituir $i^{2} = -1$: d'aquí surt el $-bd$. El quocient es fa multiplicant dalt i baix pel **conjugat** del denominador, perquè $(c + di)(c - di) = c^{2} + d^{2}$ és real.",
       "El producto es multiplicar como polinomios en $i$ y sustituir $i^{2} = -1$: de ahí sale el $-bd$. El cociente se hace multiplicando arriba y abajo por el **conjugado** del denominador, porque $(c + di)(c - di) = c^{2} + d^{2}$ es real."
      ]
     }
    ]
   },
   {
    "t": "def",
    "title": [
     "conjugat i oposat",
     "conjugado y opuesto"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Si $z = a + bi$: $\\overline{z} = a - bi$ és el **conjugat** i $-z = -a - bi$ l'**oposat**.",
       "Si $z = a + bi$: $\\overline{z} = a - bi$ es el **conjugado** y $-z = -a - bi$ el **opuesto**."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Proposició (conjugació)",
     "Proposición (conjugación)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "list",
      "items": [
       "$\\overline{z + w} = \\overline{z} + \\overline{w}$",
       "$\\overline{z \\cdot w} = \\overline{z} \\cdot \\overline{w}$",
       "$\\overline{\\overline{z}} = z$",
       [
        "$\\overline{z} = z$ si i només si $z \\in \\mathbb{R}$",
        "$\\overline{z} = z$ si y solo si $z \\in \\mathbb{R}$"
       ],
       [
        "$\\overline{z} = -z$ si i només si $z$ és imaginari pur",
        "$\\overline{z} = -z$ si y solo si $z$ es imaginario puro"
       ]
      ],
      "ordered": true
     },
     {
      "t": "p",
      "x": [
       "$\\operatorname{Re}(z) = \\frac{z + \\overline{z}}{2} = a$ i $\\operatorname{Im}(z) = \\frac{z - \\overline{z}}{2i} = b$.",
       "$\\operatorname{Re}(z) = \\frac{z + \\overline{z}}{2} = a$ e $\\operatorname{Im}(z) = \\frac{z - \\overline{z}}{2i} = b$."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "complex",
    "props": {
     "id": "th-cops",
     "cfg": {
      "m": "ops"
     }
    }
   }
  ],
  "x-mod": [
   {
    "t": "def",
    "title": [
     "mòdul i argument",
     "módulo y argumento"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "El **mòdul** és la longitud de la fletxa: $|z| = \\sqrt{a^{2} + b^{2}} = \\sqrt{z \\cdot \\overline{z}}$. Si $z \\ne 0$, l'**argument** $\\alpha$ és l'angle entre el semieix real positiu i la fletxa.",
       "El **módulo** es la longitud de la flecha: $|z| = \\sqrt{a^{2} + b^{2}} = \\sqrt{z \\cdot \\overline{z}}$. Si $z \\ne 0$, el **argumento** $\\alpha$ es el ángulo entre el semieje real positivo y la flecha."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Fórmula del material per a l'argument",
     "Fórmula del material para el argumento"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "$\\alpha = 2 \\cdot \\arctan(\\frac{|z| - a}{b}) si b \\ne 0$; $\\alpha = 0 si a > 0, b = 0$; $\\alpha = \\pi si a < 0, b = 0$; indefinit si $z = 0$",
       "$\\alpha = 2 \\cdot \\arctan(\\frac{|z| - a}{b}) si b \\ne 0$; $\\alpha = 0 si a > 0, b = 0$; $\\alpha = \\pi si a < 0, b = 0$; indefinido si $z = 0$"
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
       "Per què aquesta fórmula i no «$\\arctan(b/a)$»? Perquè $\\arctan(b/a)$ dona el mateix per a $1 + i$ i per a $-1 - i$ (tots dos fan $b/a = 1$) i s'ha de corregir segons el quadrant. La fórmula del material ja dona l'angle correcte a qualsevol quadrant, entre $-\\pi$ i $\\pi$, sense correccions.",
       "¿Por qué esta fórmula y no «$\\arctan(b/a)$»? Porque $\\arctan(b/a)$ da lo mismo para $1 + i$ y para $-1 - i$ (los dos dan $b/a = 1$) y hay que corregir según el cuadrante. La fórmula del material ya da el ángulo correcto en cualquier cuadrante, entre $-\\pi$ y $\\pi$, sin correcciones."
      ]
     },
     {
      "t": "p",
      "x": [
       "Exemple: $z = -1 - i$. $|z| = \\sqrt{2}$, $\\alpha = 2 \\cdot \\arctan(\\frac{\\sqrt{2} + 1}{-1}) = 2 \\cdot (-\\frac{3\\pi}{8}) = -\\frac{3\\pi}{4}$, que és al tercer quadrant, com toca.",
       "Ejemplo: $z = -1 - i$. $|z| = \\sqrt{2}$, $\\alpha = 2 \\cdot \\arctan(\\frac{\\sqrt{2} + 1}{-1}) = 2 \\cdot (-\\frac{3\\pi}{8}) = -\\frac{3\\pi}{4}$, que está en el tercer cuadrante, como toca."
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
       "L'angle va en **radians** ($360^{\\circ} = 2\\pi$). I no és únic: $\\alpha + 2\\pi$, $\\alpha + 4\\pi$… també valen. Normalment es pren $\\alpha \\in [0, 2\\pi$) o $\\alpha \\in (-\\pi, \\pi]$. Comprovació ràpida: $\\cos \\alpha = \\frac{a}{|z|}$ i $\\sin \\alpha = \\frac{b}{|z|}$.",
       "El ángulo va en **radianes** ($360^{\\circ} = 2\\pi$). Y no es único: $\\alpha + 2\\pi$, $\\alpha + 4\\pi$… también valen. Normalmente se toma $\\alpha \\in [0, 2\\pi$) o $\\alpha \\in (-\\pi, \\pi]$. Comprobación rápida: $\\cos \\alpha = \\frac{a}{|z|}$ y $\\sin \\alpha = \\frac{b}{|z|}$."
      ]
     }
    ]
   },
   {
    "t": "table",
    "head": [
     "Forma",
     [
      "Expressió",
      "Expresión"
     ]
    ],
    "rows": [
     [
      [
       "binòmica",
       "binómica"
      ],
      "$z = a + b \\cdot i$"
     ],
     [
      "cartesiana",
      "$z = (a, b)$"
     ],
     [
      [
       "trigonomètrica",
       "trigonométrica"
      ],
      "$z = |z| (\\cos \\alpha + i \\cdot \\sin \\alpha)$"
     ],
     [
      "polar",
      "$z = |z|_{\\alpha}$"
     ],
     [
      "exponencial",
      "$z = |z| \\cdot e^{i\\alpha}$"
     ]
    ]
   },
   {
    "t": "p",
    "x": [
     "D'una forma polar a la binòmica: $a = |z| \\cos \\alpha$, $b = |z| \\sin \\alpha$.",
     "De la forma polar a la binómica: $a = |z| \\cos \\alpha$, $b = |z| \\sin \\alpha$."
    ]
   },
   {
    "t": "lab",
    "id": "complex",
    "props": {
     "id": "th-cz",
     "cfg": {
      "m": "z"
     }
    }
   },
   {
    "t": "thm",
    "title": [
     "Proposició (mòdul)",
     "Proposición (módulo)"
    ],
    "label": false,
    "blocks": [
     {
      "t": "list",
      "items": [
       [
        "$|z| \\ge 0$, i $|z| = 0 \\iff z = 0$",
        "$|z| \\ge 0$, y $|z| = 0 \\iff z = 0$"
       ],
       "$|z w| = |z| \\cdot |w|$",
       "$|z + w| \\le |z| + |w|$ (triangular)",
       "$|z| = |\\overline{z}| = |-z| = |-\\overline{z}|$",
       "$|\\operatorname{Re} z| \\le |z|$, $|\\operatorname{Im} z| \\le |z|$",
       "$|z| = \\sqrt{z \\cdot \\overline{z}}$",
       "$z \\cdot \\overline{z} = |z|^{2}$",
       "$\\frac{1}{z} = \\frac{\\overline{z}}{|z|^{2}}$ si $z \\ne 0$",
       [
        "$\\frac{z}{|z|}$ té mòdul 1",
        "$\\frac{z}{|z|}$ tiene módulo 1"
       ]
      ],
      "ordered": true
     }
    ]
   },
   {
    "t": "p",
    "x": [
     "Com als reals, $\\{z \\in \\mathbb{C} \\mid |z - x| \\le y\\}$ és el **disc** de centre $x$ i radi $y$. I una diferència important: **$\\mathbb{C}$ no és un conjunt ordenat**; no té sentit dir que un complex és més gran que un altre.",
     "Como en los reales, $\\{z \\in \\mathbb{C} \\mid |z - x| \\le y\\}$ es el **disco** de centro $x$ y radio $y$. Y una diferencia importante: **$\\mathbb{C}$ no es un conjunto ordenado**; no tiene sentido decir que un complejo es mayor que otro."
    ]
   },
   {
    "t": "lab",
    "id": "complex",
    "props": {
     "id": "th-cdisc",
     "cfg": {
      "m": "disc"
     }
    }
   }
  ],
  "x-polar": [
   {
    "t": "thm",
    "title": "En forma polar",
    "label": false,
    "blocks": [
     {
      "t": "list",
      "items": [
       "$z \\cdot w = (|z| \\cdot |w|)_{\\alpha + \\beta}$",
       "$\\frac{z}{w} = (\\frac{|z|}{|w|})_{\\alpha - \\beta}$ si $w \\ne 0$",
       [
        "$z^{n} = (|z|^{n})_{n \\cdot \\alpha}$ per a $n \\in \\mathbb{Z}$",
        "$z^{n} = (|z|^{n})_{n \\cdot \\alpha}$ para $n \\in \\mathbb{Z}$"
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
       "Multiplicar per $w$ és **girar** l'angle $\\beta$ i **estirar** per $|w|$. Per això en polar el producte és tan fàcil: els mòduls es multipliquen i els angles se sumen. Multiplicar per $i = 1_{\\pi/2}$ gira 90° sense canviar la mida. En binòmica la suma és fàcil; en polar ho són el producte, el quocient i les potències.",
       "Multiplicar por $w$ es **girar** el ángulo $\\beta$ y **estirar** por $|w|$. Por eso en polar el producto es tan fácil: los módulos se multiplican y los ángulos se suman. Multiplicar por $i = 1_{\\pi/2}$ gira 90° sin cambiar el tamaño. En binómica la suma es fácil; en polar lo son el producto, el cociente y las potencias."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "complex",
    "props": {
     "id": "th-cpow",
     "cfg": {
      "m": "pow"
     }
    }
   }
  ],
  "x-arrels": [
   {
    "t": "def",
    "title": [
     "arrel n-èssima",
     "raíz n-ésima"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Per $z \\ne 0$ i $n \\in \\mathbb{N}$, una arrel n-èssima de $z$ és qualsevol $w$ amb $w^{n} = z$. Si $z = |z|_{\\alpha}$: $\\sqrt[n]{z} = (\\sqrt[n]{|z|})_{\\frac{\\alpha + 2\\pi k}{n}}$, amb $k = 0, 1, \\ldots, n - 1$.",
       "Para $z \\ne 0$ y $n \\in \\mathbb{N}$, una raíz n-ésima de $z$ es cualquier $w$ con $w^{n} = z$. Si $z = |z|_{\\alpha}$: $\\sqrt[n]{z} = (\\sqrt[n]{|z|})_{\\frac{\\alpha + 2\\pi k}{n}}$, con $k = 0, 1, \\ldots, n - 1$."
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
       "**D'on surt el $2\\pi k$.** Elevar a $n$ multiplica l'angle per $n$. Com que $\\alpha$, $\\alpha + 2\\pi$, $\\alpha + 4\\pi$… són el mateix angle, dividir-los per $n$ dona angles *diferents*: $\\frac{\\alpha}{n}$, $\\frac{\\alpha}{n} + \\frac{2\\pi}{n}$, $\\frac{\\alpha}{n} + \\frac{4\\pi}{n}$… Surten exactament $n$ arrels diferents (a partir de $k = n$ es repeteixen), totes amb mòdul $\\sqrt[n]{|z|}$, repartides com un **polígon regular**.",
       "**De dónde sale el $2\\pi k$.** Elevar a $n$ multiplica el ángulo por $n$. Como $\\alpha$, $\\alpha + 2\\pi$, $\\alpha + 4\\pi$… son el mismo ángulo, dividirlos por $n$ da ángulos *distintos*: $\\frac{\\alpha}{n}$, $\\frac{\\alpha}{n} + \\frac{2\\pi}{n}$, $\\frac{\\alpha}{n} + \\frac{4\\pi}{n}$… Salen exactamente $n$ raíces distintas (a partir de $k = n$ se repiten), todas con módulo $\\sqrt[n]{|z|}$, repartidas como un **polígono regular**."
      ]
     },
     {
      "t": "p",
      "x": [
       "Exemple del CP2-2025: $x^{4} - 81 = 0 \\iff x^{4} = 81 = 81_{0}$. Mòdul $\\sqrt[4]{81} = 3$, angles $\\frac{2\\pi k}{4}$: $3_{0} = 3$, $3_{\\pi/2} = 3i$, $3_{\\pi} = -3$, $3_{3\\pi/2} = -3i$.",
       "Ejemplo del CP2-2025: $x^{4} - 81 = 0 \\iff x^{4} = 81 = 81_{0}$. Módulo $\\sqrt[4]{81} = 3$, ángulos $\\frac{2\\pi k}{4}$: $3_{0} = 3$, $3_{\\pi/2} = 3i$, $3_{\\pi} = -3$, $3_{3\\pi/2} = -3i$."
      ]
     }
    ]
   },
   {
    "t": "example",
    "title": [
     "Exemple complet amb la taula de $k$: arrels cúbiques de $8i$",
     "Ejemplo completo con la tabla de $k$: raíces cúbicas de $8i$"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "Aquest és el procediment que cal escriure a l'examen. Fes una fila per a cada valor de $k$, de $0$ fins a $n - 1$.",
       "Este es el procedimiento que hay que escribir en el examen. Haz una fila para cada valor de $k$, de $0$ hasta $n - 1$."
      ]
     },
     {
      "t": "steps",
      "steps": [
       {
        "x": "w en forma polar",
        "why": [
         "mòdul 8, argument $\\frac{\\pi}{2}$",
         "módulo 8, argumento $\\frac{\\pi}{2}$"
        ]
       },
       {
        "x": [
         "Fórmula de les arrels",
         "Fórmula de las raíces"
        ]
       },
       {
        "x": [
         "Mòdul de totes",
         "Módulo de todas"
        ]
       },
       {
        "x": [
         "Una arrel per a cada kkanglepolarbinòmica012",
         "Una raíz para cada kkángulopolarbinómica012"
        ]
       },
       {
        "x": [
         "Resultat",
         "Resultado"
        ],
        "done": true,
        "why": [
         "Totes tenen mòdul 2 i estan separades $\\frac{2\\pi}{3}$: formen un polígon regular de 3 costats.",
         "Todas tienen módulo 2 y están separadas $\\frac{2\\pi}{3}$: forman un polígono regular de 3 lados."
        ]
       },
       {
        "x": [
         "ComprovacióPer exemple, . Les tres arrels formen un triangle equilàter de radi 2.",
         "ComprobaciónPor ejemplo, . Las tres raíces forman un triángulo equilátero de radio 2."
        ]
       }
      ]
     },
     {
      "t": "p",
      "x": [
       "Per practicar-ho amb dades noves, ves al **Banc d'exercicis**, tema «Arrels amb k i polinomis».",
       "Para practicarlo con datos nuevos, ve al **Banco de ejercicios**, tema «Raíces con k y polinomios»."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "complex",
    "props": {
     "id": "th-croot",
     "cfg": {
      "n": 4,
      "m": "arrels"
     }
    }
   }
  ],
  "x-pol": [
   {
    "t": "def",
    "title": [
     "arrel i multiplicitat",
     "raíz y multiplicidad"
    ],
    "blocks": [
     {
      "t": "p",
      "x": [
       "$a$ és arrel de $p(z)$ si $p(a) = 0$. Té **multiplicitat** $k$ si $p(z) = (z - a)^{k} s(z)$ amb $s(a) \\ne 0$; si $k = 1$, és una arrel **simple**.",
       "$a$ es raíz de $p(z)$ si $p(a) = 0$. Tiene **multiplicidad** $k$ si $p(z) = (z - a)^{k} s(z)$ con $s(a) \\ne 0$; si $k = 1$, es una raíz **simple**."
      ]
     }
    ]
   },
   {
    "t": "thm",
    "title": [
     "Teorema fonamental de l'àlgebra",
     "Teorema fundamental del álgebra"
    ],
    "label": false,
    "blocks": [
     {
      "t": "p",
      "x": [
       "Tot polinomi $p(z) = a_{n} z^{n} + \\ldots + a_{0}$ de grau $n \\ge 1$ amb coeficients complexos s'escriu $p(z) = a_{n}(z - \\gamma_{1})(z - \\gamma_{2}) \\cdots (z - \\gamma_{n})$, on $\\gamma_{1}, \\ldots, \\gamma_{n}$ són les seves $n$ arrels.",
       "Todo polinomio $p(z) = a_{n} z^{n} + \\ldots + a_{0}$ de grado $n \\ge 1$ con coeficientes complejos se escribe $p(z) = a_{n}(z - \\gamma_{1})(z - \\gamma_{2}) \\cdots (z - \\gamma_{n})$, donde $\\gamma_{1}, \\ldots, \\gamma_{n}$ son sus $n$ raíces."
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
       "Conseqüències: a $\\mathbb{C}$ els irreductibles són de grau 1. Si els coeficients són **reals**, quan $\\gamma = a + bi$ és arrel també ho és $\\overline{\\gamma} = a - bi$, amb la mateixa multiplicitat: les arrels no reals van en parelles. Per això, a $\\mathbb{R}$, els irreductibles poden ser de grau 1 o 2: cada parella conjugada forma un factor de grau 2 sense arrels reals, com $x^{2} + 9 = (x - 3i)(x + 3i)$.",
       "Consecuencias: en $\\mathbb{C}$ los irreducibles son de grado 1. Si los coeficientes son **reales**, cuando $\\gamma = a + bi$ es raíz también lo es $\\overline{\\gamma} = a - bi$, con la misma multiplicidad: las raíces no reales van en parejas. Por eso, en $\\mathbb{R}$, los irreducibles pueden ser de grado 1 o 2: cada pareja conjugada forma un factor de grado 2 sin raíces reales, como $x^{2} + 9 = (x - 3i)(x + 3i)$."
      ]
     }
    ]
   },
   {
    "t": "lab",
    "id": "polinomi",
    "props": {
     "id": "th-poly"
    }
   }
  ]
 },
 "examEnd": []
};
