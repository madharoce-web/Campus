// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "La resolució del CP1 és la del CP0 amb un pas més: abans d'eliminar dos literals contraris, cal fer-los iguals substituint variables. Aquesta substitució és l'**unificador**, i a l'examen s'ha d'anotar a cada pas.",
    "La resolución del CP1 es la del CP0 con un paso más: antes de eliminar dos literales contrarios, hay que hacerlos iguales sustituyendo variables. Esta sustitución es el **unificador**, y en el examen se tiene que anotar en cada paso.",
    "CP1 resolution is CP0 resolution with one more step: before removing two opposite literals, you have to make them equal by substituting variables. This substitution is the **unifier**, and in the exam it must be noted at each step."
   ]
  }
 ],
 "sections": {
  "u8-substitucions": [
   {
    "t": "p",
    "x": [
     "Una **substitució** `{x ← a, y ← f(z)}` diu quin terme es posa a cada variable. Aplicar-la a una expressió dona una **instància**: `P(x, y)` amb `{x ← a, y ← f(z)}` dona `P(a, f(z))`. Només es poden substituir **variables**; les constants i les funcions no canvien mai.",
     "Una **sustitución** `{x ← a, y ← f(z)}` dice qué término se pone en cada variable. Aplicarla a una expresión da una **instancia**: `P(x, y)` con `{x ← a, y ← f(z)}` da `P(a, f(z))`. Solo se pueden sustituir **variables**; las constantes y las funciones no cambian nunca.",
     "A **substitution** `{x ← a, y ← f(z)}` says which term is put in each variable. Applying it to an expression gives an **instance**: `P(x, y)` with `{x ← a, y ← f(z)}` gives `P(a, f(z))`. Only **variables** can be substituted; constants and functions never change."
    ]
   },
   {
    "t": "p",
    "x": [
     "Quan es fan dues substitucions seguides, la segona també s'aplica als termes de la primera (composició): `{x ← y}` seguida de `{y ← a}` és `{x ← a, y ← a}`.",
     "Cuando se hacen dos sustituciones seguidas, la segunda también se aplica a los términos de la primera (composición): `{x ← y}` seguida de `{y ← a}` es `{x ← a, y ← a}`.",
     "When two substitutions are done one after the other, the second one is also applied to the terms of the first (composition): `{x ← y}` followed by `{y ← a}` is `{x ← a, y ← a}`."
    ]
   }
  ],
  "u8-unificador-i-umg": [
   {
    "t": "p",
    "x": [
     "Un **unificador** de dues expressions és una substitució que les fa idèntiques. `P(x, b)` i `P(a, y)` s'unifiquen amb `{x ← a, y ← b}`. Si n'hi ha diversos, interessa l'**unificador més general** (UMG): el que fixa el mínim imprescindible. Per a `P(x)` i `P(y)`, `{x ← y}` és l'UMG; `{x ← a, y ← a}` també unifica, però fixa més del necessari.",
     "Un **unificador** de dos expresiones es una sustitución que las hace idénticas. `P(x, b)` y `P(a, y)` se unifican con `{x ← a, y ← b}`. Si hay varios, interesa el **unificador más general** (UMG): el que fija lo mínimo imprescindible. Para `P(x)` y `P(y)`, `{x ← y}` es el UMG; `{x ← a, y ← a}` también unifica, pero fija más de lo necesario.",
     "A **unifier** of two expressions is a substitution that makes them identical. `P(x, b)` and `P(a, y)` are unified with `{x ← a, y ← b}`. If there are several, we want the **most general unifier** (MGU): the one that fixes the bare minimum. For `P(x)` and `P(y)`, `{x ← y}` is the MGU; `{x ← a, y ← a}` also unifies, but fixes more than necessary."
    ]
   },
   {
    "id": "u8-l-algorisme-del-conjunt-de-diferencies",
    "t": "h",
    "x": [
     "L'algorisme del conjunt de diferències",
     "El algoritmo del conjunto de diferencias",
     "The disagreement set algorithm"
    ]
   },
   {
    "h": [
     "<ol class=\"steps\">\n<li>Compareu les dues expressions d'esquerra a dreta fins a la primera posició on difereixen. Les dues peces diferents formen el <b>conjunt de diferències</b> D.</li>\n<li>Si una de les peces és una <b>variable</b> que no apareix dins de l'altra, substituïu-la per l'altra peça, a les dues expressions i a l'unificador acumulat.</li>\n<li>Repetiu fins que les expressions siguin iguals (l'unificador acumulat és l'UMG) o fins que D no tingui cap variable utilitzable (no unifiquen).</li>\n</ol>",
     "<ol class=\"steps\">\n<li>Comparad las dos expresiones de izquierda a derecha hasta la primera posición en la que difieren. Las dos piezas diferentes forman el <b>conjunto de diferencias</b> D.</li>\n<li>Si una de las piezas es una <b>variable</b> que no aparece dentro de la otra, sustituidla por la otra pieza, en las dos expresiones y en el unificador acumulado.</li>\n<li>Repetid hasta que las expresiones sean iguales (el unificador acumulado es el UMG) o hasta que D no tenga ninguna variable utilizable (no unifican).</li>\n</ol>",
     "<ol class=\"steps\">\n<li>Compare the two expressions from left to right up to the first position where they differ. The two different pieces form the <b>disagreement set</b> D.</li>\n<li>If one of the pieces is a <b>variable</b> that does not appear inside the other, replace it by the other piece, in both expressions and in the accumulated unifier.</li>\n<li>Repeat until the expressions are equal (the accumulated unifier is the MGU) or until D has no usable variable (they do not unify).</li>\n</ol>"
    ],
    "t": "html"
   },
   {
    "caption": [
     "Cada pas mira el primer lloc on les dues expressions difereixen (el conjunt de diferències D) i hi posa una variable igual a l'altra peça. A la tercera posició, `f(` coincideix i la diferència és a dins: `y` contra `g(z)`. Si cap de les dues peces fos una variable (per exemple `a` contra `b`), no es podria unificar.",
     "Cada paso mira el primer lugar donde las dos expresiones difieren (el conjunto de diferencias D) y pone una variable igual a la otra pieza. En la tercera posición, `f(` coincide y la diferencia está dentro: `y` contra `g(z)`. Si ninguna de las dos piezas fuera una variable (por ejemplo `a` contra `b`), no se podría unificar.",
     "Each step looks at the first place where the two expressions differ (the disagreement set D) and sets a variable equal to the other piece. In the third position, `f(` matches and the difference is inside: `y` against `g(z)`. If neither piece were a variable (for example `a` against `b`), they could not be unified."
    ],
    "cls": "vz",
    "svg": [
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 300\" role=\"img\" aria-label=\"Unificació de P(x, a, f(y)) i P(u, v, f(g(z)))\"><defs><marker id=\"ar-un\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-un\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-un\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-un\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><text x=\"20.0\" y=\"26.0\" class=\"vz-cap\" text-anchor=\"start\">Comparem posició per posició</text><text x=\"70.0\" y=\"76.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">P</text><rect x=\"182.0\" y=\"52.0\" width=\"56.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"210.0\" y=\"76.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">x</text><rect x=\"302.0\" y=\"52.0\" width=\"56.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"330.0\" y=\"76.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">a</text><rect x=\"464.0\" y=\"52.0\" width=\"72.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"500.0\" y=\"76.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">f(y)</text><text x=\"70.0\" y=\"176.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">P</text><rect x=\"182.0\" y=\"152.0\" width=\"56.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"210.0\" y=\"176.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">u</text><rect x=\"302.0\" y=\"152.0\" width=\"56.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"330.0\" y=\"176.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">v</text><rect x=\"446.0\" y=\"152.0\" width=\"108.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"500.0\" y=\"176.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">f(g(z))</text><text x=\"70.0\" y=\"42.0\" class=\"vz-sm\" text-anchor=\"middle\">E₁</text><text x=\"70.0\" y=\"204.0\" class=\"vz-sm\" text-anchor=\"middle\">E₂</text><line x1=\"210.0\" y1=\"92.0\" x2=\"210.0\" y2=\"148.0\" class=\"vz-lnA\"></line><rect x=\"164.0\" y=\"104.0\" width=\"92.0\" height=\"32.0\" rx=\"16\" class=\"vz-tag\"></rect><text x=\"210.0\" y=\"125.0\" class=\"vz-mono vz-tA vz-b\" text-anchor=\"middle\" style=\"font-size:14px\">x ← u</text><text x=\"210.0\" y=\"232.0\" class=\"vz-mono vz-sm\" text-anchor=\"middle\">D₀ = {x, u}</text><circle cx=\"152.0\" cy=\"120.0\" r=\"10.0\" class=\"vz-num\"></circle><text x=\"152.0\" y=\"124.0\" class=\"vz-numt\" text-anchor=\"middle\">1</text><line x1=\"330.0\" y1=\"92.0\" x2=\"330.0\" y2=\"148.0\" class=\"vz-lnA\"></line><rect x=\"284.0\" y=\"104.0\" width=\"92.0\" height=\"32.0\" rx=\"16\" class=\"vz-tag\"></rect><text x=\"330.0\" y=\"125.0\" class=\"vz-mono vz-tA vz-b\" text-anchor=\"middle\" style=\"font-size:14px\">v ← a</text><text x=\"330.0\" y=\"232.0\" class=\"vz-mono vz-sm\" text-anchor=\"middle\">D₁ = {a, v}</text><circle cx=\"272.0\" cy=\"120.0\" r=\"10.0\" class=\"vz-num\"></circle><text x=\"272.0\" y=\"124.0\" class=\"vz-numt\" text-anchor=\"middle\">2</text><line x1=\"500.0\" y1=\"92.0\" x2=\"500.0\" y2=\"148.0\" class=\"vz-lnA\"></line><rect x=\"454.0\" y=\"104.0\" width=\"92.0\" height=\"32.0\" rx=\"16\" class=\"vz-tag\"></rect><text x=\"500.0\" y=\"125.0\" class=\"vz-mono vz-tA vz-b\" text-anchor=\"middle\" style=\"font-size:14px\">y ← g(z)</text><text x=\"500.0\" y=\"232.0\" class=\"vz-mono vz-sm\" text-anchor=\"middle\">D₂ = {y, g(z)}</text><circle cx=\"442.0\" cy=\"120.0\" r=\"10.0\" class=\"vz-num\"></circle><text x=\"442.0\" y=\"124.0\" class=\"vz-numt\" text-anchor=\"middle\">3</text><text x=\"320.0\" y=\"274.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Resultat: totes dues queden P(u, a, f(g(z)))  ·  u.m.g. = {x ← u, v ← a, y ← g(z)}</text></svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 300\" role=\"img\" aria-label=\"Unificación de P(x, a, f(y)) y P(u, v, f(g(z)))\"><defs><marker id=\"ar-un\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-un\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-un\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-un\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><text x=\"20.0\" y=\"26.0\" class=\"vz-cap\" text-anchor=\"start\">Comparamos posición por posición</text><text x=\"70.0\" y=\"76.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">P</text><rect x=\"182.0\" y=\"52.0\" width=\"56.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"210.0\" y=\"76.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">x</text><rect x=\"302.0\" y=\"52.0\" width=\"56.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"330.0\" y=\"76.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">a</text><rect x=\"464.0\" y=\"52.0\" width=\"72.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"500.0\" y=\"76.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">f(y)</text><text x=\"70.0\" y=\"176.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">P</text><rect x=\"182.0\" y=\"152.0\" width=\"56.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"210.0\" y=\"176.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">u</text><rect x=\"302.0\" y=\"152.0\" width=\"56.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"330.0\" y=\"176.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">v</text><rect x=\"446.0\" y=\"152.0\" width=\"108.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"500.0\" y=\"176.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">f(g(z))</text><text x=\"70.0\" y=\"42.0\" class=\"vz-sm\" text-anchor=\"middle\">E₁</text><text x=\"70.0\" y=\"204.0\" class=\"vz-sm\" text-anchor=\"middle\">E₂</text><line x1=\"210.0\" y1=\"92.0\" x2=\"210.0\" y2=\"148.0\" class=\"vz-lnA\"></line><rect x=\"164.0\" y=\"104.0\" width=\"92.0\" height=\"32.0\" rx=\"16\" class=\"vz-tag\"></rect><text x=\"210.0\" y=\"125.0\" class=\"vz-mono vz-tA vz-b\" text-anchor=\"middle\" style=\"font-size:14px\">x ← u</text><text x=\"210.0\" y=\"232.0\" class=\"vz-mono vz-sm\" text-anchor=\"middle\">D₀ = {x, u}</text><circle cx=\"152.0\" cy=\"120.0\" r=\"10.0\" class=\"vz-num\"></circle><text x=\"152.0\" y=\"124.0\" class=\"vz-numt\" text-anchor=\"middle\">1</text><line x1=\"330.0\" y1=\"92.0\" x2=\"330.0\" y2=\"148.0\" class=\"vz-lnA\"></line><rect x=\"284.0\" y=\"104.0\" width=\"92.0\" height=\"32.0\" rx=\"16\" class=\"vz-tag\"></rect><text x=\"330.0\" y=\"125.0\" class=\"vz-mono vz-tA vz-b\" text-anchor=\"middle\" style=\"font-size:14px\">v ← a</text><text x=\"330.0\" y=\"232.0\" class=\"vz-mono vz-sm\" text-anchor=\"middle\">D₁ = {a, v}</text><circle cx=\"272.0\" cy=\"120.0\" r=\"10.0\" class=\"vz-num\"></circle><text x=\"272.0\" y=\"124.0\" class=\"vz-numt\" text-anchor=\"middle\">2</text><line x1=\"500.0\" y1=\"92.0\" x2=\"500.0\" y2=\"148.0\" class=\"vz-lnA\"></line><rect x=\"454.0\" y=\"104.0\" width=\"92.0\" height=\"32.0\" rx=\"16\" class=\"vz-tag\"></rect><text x=\"500.0\" y=\"125.0\" class=\"vz-mono vz-tA vz-b\" text-anchor=\"middle\" style=\"font-size:14px\">y ← g(z)</text><text x=\"500.0\" y=\"232.0\" class=\"vz-mono vz-sm\" text-anchor=\"middle\">D₂ = {y, g(z)}</text><circle cx=\"442.0\" cy=\"120.0\" r=\"10.0\" class=\"vz-num\"></circle><text x=\"442.0\" y=\"124.0\" class=\"vz-numt\" text-anchor=\"middle\">3</text><text x=\"320.0\" y=\"274.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Resultado: las dos quedan P(u, a, f(g(z)))  ·  u.m.g. = {x ← u, v ← a, y ← g(z)}</text></svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 300\" role=\"img\" aria-label=\"Unification of P(x, a, f(y)) and P(u, v, f(g(z)))\"><defs><marker id=\"ar-un\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-un\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-un\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-un\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><text x=\"20.0\" y=\"26.0\" class=\"vz-cap\" text-anchor=\"start\">We compare position by position</text><text x=\"70.0\" y=\"76.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">P</text><rect x=\"182.0\" y=\"52.0\" width=\"56.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"210.0\" y=\"76.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">x</text><rect x=\"302.0\" y=\"52.0\" width=\"56.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"330.0\" y=\"76.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">a</text><rect x=\"464.0\" y=\"52.0\" width=\"72.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"500.0\" y=\"76.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">f(y)</text><text x=\"70.0\" y=\"176.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">P</text><rect x=\"182.0\" y=\"152.0\" width=\"56.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"210.0\" y=\"176.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">u</text><rect x=\"302.0\" y=\"152.0\" width=\"56.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"330.0\" y=\"176.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">v</text><rect x=\"446.0\" y=\"152.0\" width=\"108.0\" height=\"36.0\" rx=\"8\" class=\"vz-cellA\"></rect><text x=\"500.0\" y=\"176.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:18px\">f(g(z))</text><text x=\"70.0\" y=\"42.0\" class=\"vz-sm\" text-anchor=\"middle\">E₁</text><text x=\"70.0\" y=\"204.0\" class=\"vz-sm\" text-anchor=\"middle\">E₂</text><line x1=\"210.0\" y1=\"92.0\" x2=\"210.0\" y2=\"148.0\" class=\"vz-lnA\"></line><rect x=\"164.0\" y=\"104.0\" width=\"92.0\" height=\"32.0\" rx=\"16\" class=\"vz-tag\"></rect><text x=\"210.0\" y=\"125.0\" class=\"vz-mono vz-tA vz-b\" text-anchor=\"middle\" style=\"font-size:14px\">x ← u</text><text x=\"210.0\" y=\"232.0\" class=\"vz-mono vz-sm\" text-anchor=\"middle\">D₀ = {x, u}</text><circle cx=\"152.0\" cy=\"120.0\" r=\"10.0\" class=\"vz-num\"></circle><text x=\"152.0\" y=\"124.0\" class=\"vz-numt\" text-anchor=\"middle\">1</text><line x1=\"330.0\" y1=\"92.0\" x2=\"330.0\" y2=\"148.0\" class=\"vz-lnA\"></line><rect x=\"284.0\" y=\"104.0\" width=\"92.0\" height=\"32.0\" rx=\"16\" class=\"vz-tag\"></rect><text x=\"330.0\" y=\"125.0\" class=\"vz-mono vz-tA vz-b\" text-anchor=\"middle\" style=\"font-size:14px\">v ← a</text><text x=\"330.0\" y=\"232.0\" class=\"vz-mono vz-sm\" text-anchor=\"middle\">D₁ = {a, v}</text><circle cx=\"272.0\" cy=\"120.0\" r=\"10.0\" class=\"vz-num\"></circle><text x=\"272.0\" y=\"124.0\" class=\"vz-numt\" text-anchor=\"middle\">2</text><line x1=\"500.0\" y1=\"92.0\" x2=\"500.0\" y2=\"148.0\" class=\"vz-lnA\"></line><rect x=\"454.0\" y=\"104.0\" width=\"92.0\" height=\"32.0\" rx=\"16\" class=\"vz-tag\"></rect><text x=\"500.0\" y=\"125.0\" class=\"vz-mono vz-tA vz-b\" text-anchor=\"middle\" style=\"font-size:14px\">y ← g(z)</text><text x=\"500.0\" y=\"232.0\" class=\"vz-mono vz-sm\" text-anchor=\"middle\">D₂ = {y, g(z)}</text><circle cx=\"442.0\" cy=\"120.0\" r=\"10.0\" class=\"vz-num\"></circle><text x=\"442.0\" y=\"124.0\" class=\"vz-numt\" text-anchor=\"middle\">3</text><text x=\"320.0\" y=\"274.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Result: both become P(u, a, f(g(z)))  ·  m.g.u. = {x ← u, v ← a, y ← g(z)}</text></svg></div>"
    ],
    "t": "diagram",
    "mode": "explained"
   },
   {
    "head": [
     [
      "Cas",
      "Caso",
      "Case"
     ],
     [
      "Exemple",
      "Ejemplo",
      "Example"
     ],
     [
      "Resultat",
      "Resultado",
      "Result"
     ]
    ],
    "rows": [
     [
      [
       "Constants diferents",
       "Constantes diferentes",
       "Different constants"
      ],
      "`P(a)`, `P(b)`",
      [
       "no unifiquen: cap de les dues és una variable",
       "no unifican: ninguna de las dos es una variable",
       "they do not unify: neither of them is a variable"
      ]
     ],
     [
      [
       "Funcions diferents",
       "Funciones diferentes",
       "Different functions"
      ],
      "`P(f(x))`, `P(g(y))`",
      [
       "no unifiquen",
       "no unifican",
       "they do not unify"
      ]
     ],
     [
      [
       "La variable apareix dins del terme",
       "La variable aparece dentro del término",
       "The variable appears inside the term"
      ],
      "`P(x)`, `P(f(x))`",
      [
       "no unifiquen (comprovació d'ocurrència)",
       "no unifican (comprobación de ocurrencia)",
       "they do not unify (occurs check)"
      ]
     ],
     [
      [
       "Predicats diferents o aritat diferent",
       "Predicados diferentes o aridad diferente",
       "Different predicates or different arity"
      ],
      "`P(x)`, `Q(x)`",
      [
       "no unifiquen",
       "no unifican",
       "they do not unify"
      ]
     ],
     [
      [
       "Propagació",
       "Propagación",
       "Propagation"
      ],
      "`P(x, f(x))`, `P(a, y)`",
      "`{x ← a, y ← f(a)}`"
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "Calculadora d'unificació: escriviu dos àtoms i mireu l'algorisme pas a pas. Les variables són `x, y, z, u, v, w`; la resta de noms en minúscula són constants.",
     "Calculadora de unificación: escribid dos átomos y mirad el algoritmo paso a paso. Las variables son `x, y, z, u, v, w`; el resto de nombres en minúscula son constantes.",
     "Unification calculator: type two atoms and watch the algorithm step by step. The variables are `x, y, z, u, v, w`; the other lower-case names are constants."
    ]
   },
   {
    "t": "lab",
    "id": "unif",
    "props": {
     "id": "u8-unif",
     "a": "P(x, a, f(y))",
     "b": "P(u, v, f(g(z)))"
    },
    "mode": "explained"
   }
  ],
  "u8-el-principi-de-resolucio-en-cp1": [
   {
    "t": "p",
    "x": [
     "Siguin dues clàusules C₁ i C₂, sense variables en comú (si en tenen, se'n renombren les d'una). Si C₁ conté un literal L₁ i C₂ un literal ¬L₂ tal que L₁ i L₂ unifiquen amb UMG φ, la **resolvent** és:",
     "Sean dos cláusulas C₁ y C₂, sin variables en común (si las tienen, se renombran las de una). Si C₁ contiene un literal L₁ y C₂ un literal ¬L₂ tal que L₁ y L₂ unifican con UMG φ, la **resolvente** es:",
     "Let C₁ and C₂ be two clauses with no variables in common (if they have some, rename those of one of them). If C₁ contains a literal L₁ and C₂ a literal ¬L₂ such that L₁ and L₂ unify with MGU φ, the **resolvent** is:"
    ]
   },
   {
    "t": "html",
    "h": "<p class=\"lx-big\"><code>res(C₁, C₂) = (C₁ − {L₁})φ ∪ (C₂ − {¬L₂})φ</code></p>"
   },
   {
    "t": "p",
    "x": [
     "És a dir: s'eliminen els dos literals contraris i **s'aplica l'UMG a tot el que queda**.",
     "Es decir: se eliminan los dos literales contrarios y **se aplica el UMG a todo lo que queda**.",
     "That is: the two opposite literals are removed and **the MGU is applied to everything that is left**."
    ]
   },
   {
    "id": "u8-el-primer-exemple-socrates",
    "t": "h",
    "x": [
     "El primer exemple: Sòcrates",
     "El primer ejemplo: Sócrates",
     "The first example: Socrates"
    ]
   },
   {
    "t": "p",
    "x": [
     "C1 = `{¬H(x), M(x)}`, C2 = `{H(socrates)}` i la conclusió negada C3 = `{¬M(socrates)}`.",
     "C1 = `{¬H(x), M(x)}`, C2 = `{H(socrates)}` y la conclusión negada C3 = `{¬M(socrates)}`.",
     "C1 = `{¬H(x), M(x)}`, C2 = `{H(socrates)}` and the negated conclusion C3 = `{¬M(socrates)}`."
    ]
   },
   {
    "caption": [
     "Es comença per l'objectiu negat. Per resoldre `¬Mortal(socrates)` amb `Mortal(x)` cal fer-los iguals: l'u.m.g. `{x ← socrates}` s'aplica també a la resta de la clàusula, que passa a ser `¬Home(socrates)`. Aquesta xoca directament amb la premissa 2 i surt la clàusula buida: Sòcrates és mortal.",
     "Se empieza por el objetivo negado. Para resolver `¬Mortal(socrates)` con `Mortal(x)` hay que hacerlos iguales: el u.m.g. `{x ← socrates}` se aplica también al resto de la cláusula, que pasa a ser `¬Home(socrates)`. Esta choca directamente con la premisa 2 y sale la cláusula vacía: Sócrates es mortal.",
     "We start with the negated goal. To resolve `¬Mortal(socrates)` with `Mortal(x)` they must be made equal: the m.g.u. `{x ← socrates}` is also applied to the rest of the clause, which becomes `¬Home(socrates)`. This clashes directly with premise 2 and the empty clause comes out: Socrates is mortal."
    ],
    "cls": "vz",
    "svg": [
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 270\" role=\"img\" aria-label=\"Arbre de refutació: Sòcrates és mortal\"><defs><marker id=\"ar-tr\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-tr\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-tr\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-tr\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><line x1=\"150.0\" y1=\"67.0\" x2=\"280.0\" y2=\"123.0\" class=\"vz-ln\"></line><line x1=\"430.0\" y1=\"67.0\" x2=\"300.0\" y2=\"123.0\" class=\"vz-ln\"></line><line x1=\"290.0\" y1=\"157.0\" x2=\"397.0\" y2=\"211.0\" class=\"vz-ln\"></line><line x1=\"520.0\" y1=\"157.0\" x2=\"413.0\" y2=\"211.0\" class=\"vz-ln\"></line><rect x=\"45.8\" y=\"33.0\" width=\"208.4\" height=\"34.0\" rx=\"10\" class=\"vz-nodeA\"></rect><text x=\"150.0\" y=\"55.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:15px\">{¬Mortal(socrates)}</text><text x=\"150.0\" y=\"26.0\" class=\"vz-sm\" text-anchor=\"middle\">objectiu negat</text><rect x=\"316.2\" y=\"33.0\" width=\"227.6\" height=\"34.0\" rx=\"10\" class=\"vz-node\"></rect><text x=\"430.0\" y=\"55.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:15px\">{¬Home(x), Mortal(x)}</text><text x=\"430.0\" y=\"26.0\" class=\"vz-sm\" text-anchor=\"middle\">premissa 1</text><rect x=\"195.4\" y=\"123.0\" width=\"189.2\" height=\"34.0\" rx=\"10\" class=\"vz-node\"></rect><text x=\"290.0\" y=\"145.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:15px\">{¬Home(socrates)}</text><rect x=\"430.2\" y=\"123.0\" width=\"179.6\" height=\"34.0\" rx=\"10\" class=\"vz-node\"></rect><text x=\"520.0\" y=\"145.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:15px\">{Home(socrates)}</text><text x=\"520.0\" y=\"116.0\" class=\"vz-sm\" text-anchor=\"middle\">premissa 2</text><rect x=\"375.0\" y=\"211.0\" width=\"60.0\" height=\"34.0\" rx=\"10\" class=\"vz-nodeE\"></rect><text x=\"405.0\" y=\"233.0\" class=\"vz-mono vz-cD\" text-anchor=\"middle\" style=\"font-size:15px\">□</text><rect x=\"40.0\" y=\"112.0\" width=\"140.0\" height=\"26.0\" rx=\"13\" class=\"vz-tag\"></rect><text x=\"110.0\" y=\"130.0\" class=\"vz-mono vz-tA\" text-anchor=\"middle\" style=\"font-size:13px\">{x ← socrates}</text><line x1=\"180.0\" y1=\"125.0\" x2=\"238.0\" y2=\"132.0\" class=\"vz-lead\"></line><text x=\"300.0\" y=\"196.0\" class=\"vz-sm\" text-anchor=\"end\">cap substitució</text></svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 270\" role=\"img\" aria-label=\"Árbol de refutación: Sócrates es mortal\"><defs><marker id=\"ar-tr\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-tr\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-tr\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-tr\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><line x1=\"150.0\" y1=\"67.0\" x2=\"280.0\" y2=\"123.0\" class=\"vz-ln\"></line><line x1=\"430.0\" y1=\"67.0\" x2=\"300.0\" y2=\"123.0\" class=\"vz-ln\"></line><line x1=\"290.0\" y1=\"157.0\" x2=\"397.0\" y2=\"211.0\" class=\"vz-ln\"></line><line x1=\"520.0\" y1=\"157.0\" x2=\"413.0\" y2=\"211.0\" class=\"vz-ln\"></line><rect x=\"45.8\" y=\"33.0\" width=\"208.4\" height=\"34.0\" rx=\"10\" class=\"vz-nodeA\"></rect><text x=\"150.0\" y=\"55.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:15px\">{¬Mortal(socrates)}</text><text x=\"150.0\" y=\"26.0\" class=\"vz-sm\" text-anchor=\"middle\">objetivo negado</text><rect x=\"316.2\" y=\"33.0\" width=\"227.6\" height=\"34.0\" rx=\"10\" class=\"vz-node\"></rect><text x=\"430.0\" y=\"55.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:15px\">{¬Home(x), Mortal(x)}</text><text x=\"430.0\" y=\"26.0\" class=\"vz-sm\" text-anchor=\"middle\">premisa 1</text><rect x=\"195.4\" y=\"123.0\" width=\"189.2\" height=\"34.0\" rx=\"10\" class=\"vz-node\"></rect><text x=\"290.0\" y=\"145.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:15px\">{¬Home(socrates)}</text><rect x=\"430.2\" y=\"123.0\" width=\"179.6\" height=\"34.0\" rx=\"10\" class=\"vz-node\"></rect><text x=\"520.0\" y=\"145.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:15px\">{Home(socrates)}</text><text x=\"520.0\" y=\"116.0\" class=\"vz-sm\" text-anchor=\"middle\">premisa 2</text><rect x=\"375.0\" y=\"211.0\" width=\"60.0\" height=\"34.0\" rx=\"10\" class=\"vz-nodeE\"></rect><text x=\"405.0\" y=\"233.0\" class=\"vz-mono vz-cD\" text-anchor=\"middle\" style=\"font-size:15px\">□</text><rect x=\"40.0\" y=\"112.0\" width=\"140.0\" height=\"26.0\" rx=\"13\" class=\"vz-tag\"></rect><text x=\"110.0\" y=\"130.0\" class=\"vz-mono vz-tA\" text-anchor=\"middle\" style=\"font-size:13px\">{x ← socrates}</text><line x1=\"180.0\" y1=\"125.0\" x2=\"238.0\" y2=\"132.0\" class=\"vz-lead\"></line><text x=\"300.0\" y=\"196.0\" class=\"vz-sm\" text-anchor=\"end\">ninguna sustitución</text></svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 270\" role=\"img\" aria-label=\"Refutation tree: Socrates is mortal\"><defs><marker id=\"ar-tr\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-tr\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-tr\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-tr\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><line x1=\"150.0\" y1=\"67.0\" x2=\"280.0\" y2=\"123.0\" class=\"vz-ln\"></line><line x1=\"430.0\" y1=\"67.0\" x2=\"300.0\" y2=\"123.0\" class=\"vz-ln\"></line><line x1=\"290.0\" y1=\"157.0\" x2=\"397.0\" y2=\"211.0\" class=\"vz-ln\"></line><line x1=\"520.0\" y1=\"157.0\" x2=\"413.0\" y2=\"211.0\" class=\"vz-ln\"></line><rect x=\"45.8\" y=\"33.0\" width=\"208.4\" height=\"34.0\" rx=\"10\" class=\"vz-nodeA\"></rect><text x=\"150.0\" y=\"55.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:15px\">{¬Mortal(socrates)}</text><text x=\"150.0\" y=\"26.0\" class=\"vz-sm\" text-anchor=\"middle\">negated goal</text><rect x=\"316.2\" y=\"33.0\" width=\"227.6\" height=\"34.0\" rx=\"10\" class=\"vz-node\"></rect><text x=\"430.0\" y=\"55.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:15px\">{¬Home(x), Mortal(x)}</text><text x=\"430.0\" y=\"26.0\" class=\"vz-sm\" text-anchor=\"middle\">premise 1</text><rect x=\"195.4\" y=\"123.0\" width=\"189.2\" height=\"34.0\" rx=\"10\" class=\"vz-node\"></rect><text x=\"290.0\" y=\"145.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:15px\">{¬Home(socrates)}</text><rect x=\"430.2\" y=\"123.0\" width=\"179.6\" height=\"34.0\" rx=\"10\" class=\"vz-node\"></rect><text x=\"520.0\" y=\"145.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:15px\">{Home(socrates)}</text><text x=\"520.0\" y=\"116.0\" class=\"vz-sm\" text-anchor=\"middle\">premise 2</text><rect x=\"375.0\" y=\"211.0\" width=\"60.0\" height=\"34.0\" rx=\"10\" class=\"vz-nodeE\"></rect><text x=\"405.0\" y=\"233.0\" class=\"vz-mono vz-cD\" text-anchor=\"middle\" style=\"font-size:15px\">□</text><rect x=\"40.0\" y=\"112.0\" width=\"140.0\" height=\"26.0\" rx=\"13\" class=\"vz-tag\"></rect><text x=\"110.0\" y=\"130.0\" class=\"vz-mono vz-tA\" text-anchor=\"middle\" style=\"font-size:13px\">{x ← socrates}</text><line x1=\"180.0\" y1=\"125.0\" x2=\"238.0\" y2=\"132.0\" class=\"vz-lead\"></line><text x=\"300.0\" y=\"196.0\" class=\"vz-sm\" text-anchor=\"end\">no substitution</text></svg></div>"
    ],
    "t": "diagram",
    "mode": "explained"
   }
  ],
  "u8-la-prova-per-resolucio-com-a-l-examen": [
   {
    "h": [
     "<ol class=\"steps\">\n<li><b>Negueu la conclusió.</b></li>\n<li><b>Passeu a forma clausal</b> totes les premisses i la conclusió negada (els vuit passos), vigilant que cada símbol de Skolem sigui nou en tot el problema.</li>\n<li><b>Numereu les clàusules</b> i renombreu les variables perquè cap parella de clàusules en comparteixi.</li>\n<li><b>Resoleu</b> començant per la conclusió negada. A cada pas escriviu les dues clàusules, els literals que s'eliminen, <b>l'UMG</b> i la resolvent.</li>\n<li>En arribar a <code>□</code>, el raonament és vàlid.</li>\n</ol>",
     "<ol class=\"steps\">\n<li><b>Negad la conclusión.</b></li>\n<li><b>Pasad a forma clausal</b> todas las premisas y la conclusión negada (los ocho pasos), vigilando que cada símbolo de Skolem sea nuevo en todo el problema.</li>\n<li><b>Numerad las cláusulas</b> y renombrad las variables para que ningún par de cláusulas las comparta.</li>\n<li><b>Resolved</b> empezando por la conclusión negada. En cada paso escribid las dos cláusulas, los literales que se eliminan, <b>el UMG</b> y la resolvente.</li>\n<li>Al llegar a <code>□</code>, el razonamiento es válido.</li>\n</ol>",
     "<ol class=\"steps\">\n<li><b>Negate the conclusion.</b></li>\n<li><b>Put into clausal form</b> all the premises and the negated conclusion (the eight steps), making sure each Skolem symbol is new across the whole problem.</li>\n<li><b>Number the clauses</b> and rename the variables so that no pair of clauses shares them.</li>\n<li><b>Resolve</b> starting with the negated conclusion. At each step write the two clauses, the literals that are removed, <b>the MGU</b> and the resolvent.</li>\n<li>When you reach <code>□</code>, the argument is valid.</li>\n</ol>"
    ],
    "t": "html"
   },
   {
    "id": "u8-exemple-resolt-l-exercici-3-del-cp2-2025-26",
    "t": "h",
    "x": [
     "Exemple resolt: l'exercici 3 del CP2 2025-26",
     "Ejemplo resuelto: el ejercicio 3 del CP2 2025-26",
     "Worked example: exercise 3 of Test 2 2025-26"
    ]
   },
   {
    "t": "p",
    "x": [
     "Premisses: `∃x (A(x) ∧ B(x)) → C(joan)`, `∀x (D(x) → C(x))`, `A(pau) ∧ A(pere)`, `D(pau) ∨ B(pere)`. Conclusió: `∃x C(x)`.",
     "Premisas: `∃x (A(x) ∧ B(x)) → C(joan)`, `∀x (D(x) → C(x))`, `A(pau) ∧ A(pere)`, `D(pau) ∨ B(pere)`. Conclusión: `∃x C(x)`.",
     "Premises: `∃x (A(x) ∧ B(x)) → C(joan)`, `∀x (D(x) → C(x))`, `A(pau) ∧ A(pere)`, `D(pau) ∨ B(pere)`. Conclusion: `∃x C(x)`."
    ]
   },
   {
    "h": [
     "<p><b>1.</b> Neguem la conclusió: <span class=\"lf\">¬∃x C(x)</span>.</p>",
     "<p><b>1.</b> Negamos la conclusión: <span class=\"lf\">¬∃x C(x)</span>.</p>",
     "<p><b>1.</b> We negate the conclusion: <span class=\"lf\">¬∃x C(x)</span>.</p>"
    ],
    "t": "html"
   },
   {
    "t": "p",
    "x": [
     "**2.** Forma clausal de les premisses i de la conclusió negada",
     "**2.** Forma clausal de las premisas y de la conclusión negada",
     "**2.** Clausal form of the premises and of the negated conclusion"
    ]
   },
   {
    "h": [
     "<div class=\"lx-cfb\"><p><span class=\"lf\">∃x (A(x) ∧ B(x)) → C(joan)</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">¬∃x (A(x) ∧ B(x)) ∨ C(joan)</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x)) ∨ C(joan)</span></li><li><b>5.</b> Universals a l'esquerra: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x) ∨ C(joan))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬A(x) ∨ ¬B(x) ∨ C(joan)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬A(x), ¬B(x), C(joan)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬A(x), ¬B(x), C(joan)}</span></p></div>",
     "<div class=\"lx-cfb\"><p><span class=\"lf\">∃x (A(x) ∧ B(x)) → C(joan)</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">¬∃x (A(x) ∧ B(x)) ∨ C(joan)</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x)) ∨ C(joan)</span></li><li><b>5.</b> Universales a la izquierda: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x) ∨ C(joan))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬A(x) ∨ ¬B(x) ∨ C(joan)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬A(x), ¬B(x), C(joan)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬A(x), ¬B(x), C(joan)}</span></p></div>",
     "<div class=\"lx-cfb\"><p><span class=\"lf\">∃x (A(x) ∧ B(x)) → C(joan)</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">¬∃x (A(x) ∧ B(x)) ∨ C(joan)</span></li><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x)) ∨ C(joan)</span></li><li><b>5.</b> Universals to the left: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x) ∨ C(joan))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬A(x) ∨ ¬B(x) ∨ C(joan)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬A(x), ¬B(x), C(joan)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬A(x), ¬B(x), C(joan)}</span></p></div>"
    ],
    "t": "html",
    "mode": "explained"
   },
   {
    "h": [
     "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (D(x) → C(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x (¬D(x) ∨ C(x))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬D(x) ∨ C(x)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬D(x), C(x)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{¬D(y), C(y)}</span></p></div>",
     "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (D(x) → C(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x (¬D(x) ∨ C(x))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬D(x) ∨ C(x)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬D(x), C(x)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{¬D(y), C(y)}</span></p></div>",
     "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (D(x) → C(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x (¬D(x) ∨ C(x))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬D(x) ∨ C(x)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬D(x), C(x)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{¬D(y), C(y)}</span></p></div>"
    ],
    "t": "html"
   },
   {
    "h": [
     "<div class=\"lx-cfb\"><p><span class=\"lf\">A(pau) ∧ A(pere)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {A(pau)} , {A(pere)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{A(pau)}</span>, C4 = <span class=\"lf\">{A(pere)}</span></p></div>",
     "<div class=\"lx-cfb\"><p><span class=\"lf\">A(pau) ∧ A(pere)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {A(pau)} , {A(pere)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{A(pau)}</span>, C4 = <span class=\"lf\">{A(pere)}</span></p></div>",
     "<div class=\"lx-cfb\"><p><span class=\"lf\">A(pau) ∧ A(pere)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {A(pau)} , {A(pere)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{A(pau)}</span>, C4 = <span class=\"lf\">{A(pere)}</span></p></div>"
    ],
    "t": "html"
   },
   {
    "h": [
     "<div class=\"lx-cfb\"><p><span class=\"lf\">D(pau) ∨ B(pere)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {D(pau), B(pere)} }</span></li></ol><p>→ C5 = <span class=\"lf\">{D(pau), B(pere)}</span></p></div>",
     "<div class=\"lx-cfb\"><p><span class=\"lf\">D(pau) ∨ B(pere)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {D(pau), B(pere)} }</span></li></ol><p>→ C5 = <span class=\"lf\">{D(pau), B(pere)}</span></p></div>",
     "<div class=\"lx-cfb\"><p><span class=\"lf\">D(pau) ∨ B(pere)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {D(pau), B(pere)} }</span></li></ol><p>→ C5 = <span class=\"lf\">{D(pau), B(pere)}</span></p></div>"
    ],
    "t": "html"
   },
   {
    "h": [
     "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∃x C(x)</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x ¬C(x)</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬C(x)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬C(x)} }</span></li></ol><p>→ C6 = <span class=\"lf\">{¬C(z)}</span></p></div>",
     "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∃x C(x)</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x ¬C(x)</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬C(x)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬C(x)} }</span></li></ol><p>→ C6 = <span class=\"lf\">{¬C(z)}</span></p></div>",
     "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∃x C(x)</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x ¬C(x)</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬C(x)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬C(x)} }</span></li></ol><p>→ C6 = <span class=\"lf\">{¬C(z)}</span></p></div>"
    ],
    "t": "html"
   },
   {
    "t": "p",
    "x": [
     "**3.** Conjunt de clàusules",
     "**3.** Conjunto de cláusulas",
     "**3.** Set of clauses"
    ]
   },
   {
    "t": "html",
    "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬A(x), ¬B(x), C(joan)} , {¬D(y), C(y)} , {A(pau)} , {A(pere)} , {D(pau), B(pere)} , {¬C(z)} }</span></p>"
   },
   {
    "t": "p",
    "x": [
     "**4.** Refutació per resolució",
     "**4.** Refutación por resolución",
     "**4.** Refutation by resolution"
    ]
   },
   {
    "t": "html",
    "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C6, C1) = {¬A(x), ¬B(x)}</span> &nbsp;<span class=\"lx-umg\">UMG: {z ← joan}</span></li><li><span class=\"lf\">R2 = res(R1, C4) = {¬B(pere)}</span> &nbsp;<span class=\"lx-umg\">UMG: {x ← pere}</span></li><li><span class=\"lf\">R3 = res(R2, C5) = {D(pau)}</span> &nbsp;<span class=\"lx-umg\">UMG: ε</span></li><li><span class=\"lf\">R4 = res(R3, C2) = {C(pau)}</span> &nbsp;<span class=\"lx-umg\">UMG: {y ← pau}</span></li><li><span class=\"lf\">R5 = res(R4, C6) = □</span> &nbsp;<span class=\"lx-umg\">UMG: {z ← pau}</span></li></ol>",
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "h": [
       "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(z) , C(joan) }</td><td>ε</td></tr><tr><td>1</td><td>{z, joan}</td><td>z ← joan</td><td>{z ← joan}</td></tr></tbody></table></div>",
       "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(z) , C(joan) }</td><td>ε</td></tr><tr><td>1</td><td>{z, joan}</td><td>z ← joan</td><td>{z ← joan}</td></tr></tbody></table></div>",
       "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(z) , C(joan) }</td><td>ε</td></tr><tr><td>1</td><td>{z, joan}</td><td>z ← joan</td><td>{z ← joan}</td></tr></tbody></table></div>"
      ],
      "t": "html"
     }
    ],
    "t": "details",
    "title": [
     "Unificació R1: ¬C(z) i C(joan)",
     "Unificación R1: ¬C(z) i C(joan)",
     "Unification R1: ¬C(z) and C(joan)"
    ],
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "h": [
       "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { A(x) , A(pere) }</td><td>ε</td></tr><tr><td>1</td><td>{x, pere}</td><td>x ← pere</td><td>{x ← pere}</td></tr></tbody></table></div>",
       "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { A(x) , A(pere) }</td><td>ε</td></tr><tr><td>1</td><td>{x, pere}</td><td>x ← pere</td><td>{x ← pere}</td></tr></tbody></table></div>",
       "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { A(x) , A(pere) }</td><td>ε</td></tr><tr><td>1</td><td>{x, pere}</td><td>x ← pere</td><td>{x ← pere}</td></tr></tbody></table></div>"
      ],
      "t": "html"
     }
    ],
    "t": "details",
    "title": [
     "Unificació R2: ¬A(x) i A(pere)",
     "Unificación R2: ¬A(x) i A(pere)",
     "Unification R2: ¬A(x) and A(pere)"
    ],
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "h": [
       "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { D(pau) , D(y) }</td><td>ε</td></tr><tr><td>1</td><td>{pau, y}</td><td>y ← pau</td><td>{y ← pau}</td></tr></tbody></table></div>",
       "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { D(pau) , D(y) }</td><td>ε</td></tr><tr><td>1</td><td>{pau, y}</td><td>y ← pau</td><td>{y ← pau}</td></tr></tbody></table></div>",
       "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { D(pau) , D(y) }</td><td>ε</td></tr><tr><td>1</td><td>{pau, y}</td><td>y ← pau</td><td>{y ← pau}</td></tr></tbody></table></div>"
      ],
      "t": "html"
     }
    ],
    "t": "details",
    "title": [
     "Unificació R4: D(pau) i ¬D(y)",
     "Unificación R4: D(pau) i ¬D(y)",
     "Unification R4: D(pau) and ¬D(y)"
    ],
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "h": [
       "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(pau) , C(z) }</td><td>ε</td></tr><tr><td>1</td><td>{pau, z}</td><td>z ← pau</td><td>{z ← pau}</td></tr></tbody></table></div>",
       "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(pau) , C(z) }</td><td>ε</td></tr><tr><td>1</td><td>{pau, z}</td><td>z ← pau</td><td>{z ← pau}</td></tr></tbody></table></div>",
       "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(pau) , C(z) }</td><td>ε</td></tr><tr><td>1</td><td>{pau, z}</td><td>z ← pau</td><td>{z ← pau}</td></tr></tbody></table></div>"
      ],
      "t": "html"
     }
    ],
    "t": "details",
    "title": [
     "Unificació R5: C(pau) i ¬C(z)",
     "Unificación R5: C(pau) i ¬C(z)",
     "Unification R5: C(pau) and ¬C(z)"
    ],
    "mode": "explained"
   },
   {
    "svg": [
     "<svg viewBox=\"0 0 554 372\" width=\"554\" height=\"372\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"73.0\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"32\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"67.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"245.8\" y=\"14\" width=\"199.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"32\" text-anchor=\"middle\">{¬A(x), ¬B(x), C(joan)}</text><text class=\"lx-lb\" x=\"450.9\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"450.9\" y=\"39\" text-anchor=\"start\">{z ← joan}</text><path class=\"lx-ln\" d=\"M110.9 42 L110.9 72\"></path><path class=\"lx-ln\" d=\"M345.4 42 L120.9 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"129.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"90\" text-anchor=\"middle\">{¬A(x), ¬B(x)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"299.7\" y=\"72\" width=\"91.3\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"90\" text-anchor=\"middle\">{A(pere)}</text><text class=\"lx-lb\" x=\"397.0\" y=\"83\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"397.0\" y=\"97\" text-anchor=\"start\">{x ← pere}</text><path class=\"lx-ln\" d=\"M110.9 100 L110.9 130\"></path><path class=\"lx-ln\" d=\"M345.4 100 L120.9 130\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"130\" width=\"99.0\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"148\" text-anchor=\"middle\">{¬B(pere)}</text><text class=\"lx-lb\" x=\"55.4\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"268.9\" y=\"130\" width=\"152.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"148\" text-anchor=\"middle\">{D(pau), B(pere)}</text><text class=\"lx-lb\" x=\"427.8\" y=\"141\" text-anchor=\"start\">C5</text><text class=\"lx-um\" x=\"427.8\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M110.9 158 L110.9 188\"></path><path class=\"lx-ln\" d=\"M345.4 158 L120.9 188\"></path><rect class=\"lx-bx\" x=\"69.1\" y=\"188\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"206\" text-anchor=\"middle\">{D(pau)}</text><text class=\"lx-lb\" x=\"63.1\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"284.3\" y=\"188\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"206\" text-anchor=\"middle\">{¬D(y), C(y)}</text><text class=\"lx-lb\" x=\"412.4\" y=\"199\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"412.4\" y=\"213\" text-anchor=\"start\">{y ← pau}</text><path class=\"lx-ln\" d=\"M110.9 216 L110.9 246\"></path><path class=\"lx-ln\" d=\"M345.4 216 L120.9 246\"></path><rect class=\"lx-bx\" x=\"69.1\" y=\"246\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"264\" text-anchor=\"middle\">{C(pau)}</text><text class=\"lx-lb\" x=\"63.1\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"307.4\" y=\"246\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"264\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"389.3\" y=\"257\" text-anchor=\"start\">C6</text><text class=\"lx-um\" x=\"389.3\" y=\"271\" text-anchor=\"start\">{z ← pau}</text><path class=\"lx-ln\" d=\"M110.9 274 L110.9 304\"></path><path class=\"lx-ln\" d=\"M345.4 274 L120.9 304\"></path><rect class=\"lx-bx-e\" x=\"96.1\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"90.1\" y=\"322\" text-anchor=\"end\">R5</text></svg>",
     "<svg viewBox=\"0 0 554 372\" width=\"554\" height=\"372\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"73.0\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"32\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"67.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"245.8\" y=\"14\" width=\"199.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"32\" text-anchor=\"middle\">{¬A(x), ¬B(x), C(joan)}</text><text class=\"lx-lb\" x=\"450.9\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"450.9\" y=\"39\" text-anchor=\"start\">{z ← joan}</text><path class=\"lx-ln\" d=\"M110.9 42 L110.9 72\"></path><path class=\"lx-ln\" d=\"M345.4 42 L120.9 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"129.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"90\" text-anchor=\"middle\">{¬A(x), ¬B(x)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"299.7\" y=\"72\" width=\"91.3\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"90\" text-anchor=\"middle\">{A(pere)}</text><text class=\"lx-lb\" x=\"397.0\" y=\"83\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"397.0\" y=\"97\" text-anchor=\"start\">{x ← pere}</text><path class=\"lx-ln\" d=\"M110.9 100 L110.9 130\"></path><path class=\"lx-ln\" d=\"M345.4 100 L120.9 130\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"130\" width=\"99.0\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"148\" text-anchor=\"middle\">{¬B(pere)}</text><text class=\"lx-lb\" x=\"55.4\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"268.9\" y=\"130\" width=\"152.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"148\" text-anchor=\"middle\">{D(pau), B(pere)}</text><text class=\"lx-lb\" x=\"427.8\" y=\"141\" text-anchor=\"start\">C5</text><text class=\"lx-um\" x=\"427.8\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M110.9 158 L110.9 188\"></path><path class=\"lx-ln\" d=\"M345.4 158 L120.9 188\"></path><rect class=\"lx-bx\" x=\"69.1\" y=\"188\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"206\" text-anchor=\"middle\">{D(pau)}</text><text class=\"lx-lb\" x=\"63.1\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"284.3\" y=\"188\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"206\" text-anchor=\"middle\">{¬D(y), C(y)}</text><text class=\"lx-lb\" x=\"412.4\" y=\"199\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"412.4\" y=\"213\" text-anchor=\"start\">{y ← pau}</text><path class=\"lx-ln\" d=\"M110.9 216 L110.9 246\"></path><path class=\"lx-ln\" d=\"M345.4 216 L120.9 246\"></path><rect class=\"lx-bx\" x=\"69.1\" y=\"246\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"264\" text-anchor=\"middle\">{C(pau)}</text><text class=\"lx-lb\" x=\"63.1\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"307.4\" y=\"246\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"264\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"389.3\" y=\"257\" text-anchor=\"start\">C6</text><text class=\"lx-um\" x=\"389.3\" y=\"271\" text-anchor=\"start\">{z ← pau}</text><path class=\"lx-ln\" d=\"M110.9 274 L110.9 304\"></path><path class=\"lx-ln\" d=\"M345.4 274 L120.9 304\"></path><rect class=\"lx-bx-e\" x=\"96.1\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"90.1\" y=\"322\" text-anchor=\"end\">R5</text></svg>",
     "<svg viewBox=\"0 0 554 372\" width=\"554\" height=\"372\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"73.0\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"32\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"67.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"245.8\" y=\"14\" width=\"199.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"32\" text-anchor=\"middle\">{¬A(x), ¬B(x), C(joan)}</text><text class=\"lx-lb\" x=\"450.9\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"450.9\" y=\"39\" text-anchor=\"start\">{z ← joan}</text><path class=\"lx-ln\" d=\"M110.9 42 L110.9 72\"></path><path class=\"lx-ln\" d=\"M345.4 42 L120.9 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"129.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"90\" text-anchor=\"middle\">{¬A(x), ¬B(x)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"299.7\" y=\"72\" width=\"91.3\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"90\" text-anchor=\"middle\">{A(pere)}</text><text class=\"lx-lb\" x=\"397.0\" y=\"83\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"397.0\" y=\"97\" text-anchor=\"start\">{x ← pere}</text><path class=\"lx-ln\" d=\"M110.9 100 L110.9 130\"></path><path class=\"lx-ln\" d=\"M345.4 100 L120.9 130\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"130\" width=\"99.0\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"148\" text-anchor=\"middle\">{¬B(pere)}</text><text class=\"lx-lb\" x=\"55.4\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"268.9\" y=\"130\" width=\"152.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"148\" text-anchor=\"middle\">{D(pau), B(pere)}</text><text class=\"lx-lb\" x=\"427.8\" y=\"141\" text-anchor=\"start\">C5</text><text class=\"lx-um\" x=\"427.8\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M110.9 158 L110.9 188\"></path><path class=\"lx-ln\" d=\"M345.4 158 L120.9 188\"></path><rect class=\"lx-bx\" x=\"69.1\" y=\"188\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"206\" text-anchor=\"middle\">{D(pau)}</text><text class=\"lx-lb\" x=\"63.1\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"284.3\" y=\"188\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"206\" text-anchor=\"middle\">{¬D(y), C(y)}</text><text class=\"lx-lb\" x=\"412.4\" y=\"199\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"412.4\" y=\"213\" text-anchor=\"start\">{y ← pau}</text><path class=\"lx-ln\" d=\"M110.9 216 L110.9 246\"></path><path class=\"lx-ln\" d=\"M345.4 216 L120.9 246\"></path><rect class=\"lx-bx\" x=\"69.1\" y=\"246\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"264\" text-anchor=\"middle\">{C(pau)}</text><text class=\"lx-lb\" x=\"63.1\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"307.4\" y=\"246\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"264\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"389.3\" y=\"257\" text-anchor=\"start\">C6</text><text class=\"lx-um\" x=\"389.3\" y=\"271\" text-anchor=\"start\">{z ← pau}</text><path class=\"lx-ln\" d=\"M110.9 274 L110.9 304\"></path><path class=\"lx-ln\" d=\"M345.4 274 L120.9 304\"></path><rect class=\"lx-bx-e\" x=\"96.1\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"90.1\" y=\"322\" text-anchor=\"end\">R5</text></svg>"
    ],
    "t": "diagram",
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
     "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
     "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
    ],
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "items": [
       [
        "Comenceu per la conclusió negada: és la que ha de provocar la contradicció.",
        "Empezad por la conclusión negada: es la que tiene que provocar la contradicción.",
        "Start with the negated conclusion: it is the one that must cause the contradiction."
       ],
       [
        "Prefereu les clàusules d'un sol literal (`{A(pau)}`): fan la resolvent més curta.",
        "Preferid las cláusulas de un solo literal (`{A(pau)}`): hacen la resolvente más corta.",
        "Prefer single-literal clauses (`{A(pau)}`): they make the resolvent shorter."
       ],
       [
        "Si una clàusula té una disjunció de constants, com `{D(pau), B(pere)}`, normalment es resol en dos temps: primer un literal i després l'altre.",
        "Si una cláusula tiene una disyunción de constantes, como `{D(pau), B(pere)}`, normalmente se resuelve en dos tiempos: primero un literal y después el otro.",
        "If a clause has a disjunction of constants, like `{D(pau), B(pere)}`, it is usually resolved in two stages: first one literal and then the other."
       ],
       [
        "Es pot fer servir una clàusula tantes vegades com calgui (cada vegada amb variables noves).",
        "Se puede usar una cláusula tantas veces como haga falta (cada vez con variables nuevas).",
        "A clause can be used as many times as needed (each time with new variables)."
       ]
      ],
      "t": "list"
     }
    ],
    "t": "tip",
    "title": [
     "Com escollir el pas següent",
     "Cómo elegir el paso siguiente",
     "How to choose the next step"
    ],
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "Els altres exercicis d'examen, amb la forma clausal, cada unificació i l'arbre, són a [Resolució CP1](/logica/xf).",
     "Los otros ejercicios de examen, con la forma clausal, cada unificación y el árbol, están en [Resolución CP1](/logica/xf).",
     "The other exam exercises, with the clausal form, each unification and the tree, are in [CP1 resolution](/logica/xf)."
    ]
   }
  ],
  "u8-comprova-que-has-entes": [
   {
    "t": "check",
    "ex": {
     "id": "u8-comprova-que-has-entes-q1",
     "type": "mcq",
     "q": [
      "UMG de `Q(x, f(y))` i `Q(g(a), z)`:",
      "UMG de `Q(x, f(y))` y `Q(g(a), z)`:",
      "MGU of `Q(x, f(y))` and `Q(g(a), z)`:"
     ],
     "opts": [
      "`{g(a) ← x, z ← f(y)}`",
      "`{x ← g(a), z ← f(y)}`",
      "`{x ← a, z ← f(y)}`",
      [
       "No unifiquen",
       "No unifican",
       "They do not unify"
      ]
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "Primera diferència {x, g(a)}: x ← g(a). Segona {f(y), z}: z ← f(y). Només es substitueixen variables.",
        "Primera diferencia {x, g(a)}: x ← g(a). Segunda {f(y), z}: z ← f(y). Solo se sustituyen variables.",
        "First difference {x, g(a)}: x ← g(a). Second {f(y), z}: z ← f(y). Only variables are substituted."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "u8-comprova-que-has-entes-q2",
     "type": "mcq",
     "q": [
      "Resolvent de `{¬P(x), Q(x)}` i `{P(a)}`:",
      "Resolvente de `{¬P(x), Q(x)}` y `{P(a)}`:",
      "Resolvent of `{¬P(x), Q(x)}` and `{P(a)}`:"
     ],
     "opts": [
      "`{Q(x)}`",
      "`□`",
      "`{Q(a)}`",
      "`{¬P(a), Q(a)}`"
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "UMG `{x ← a}`, que s'aplica també a `Q(x)`.",
        "UMG `{x ← a}`, que se aplica también a `Q(x)`.",
        "MGU `{x ← a}`, which is also applied to `Q(x)`."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "u8-comprova-que-has-entes-q3",
     "type": "mcq",
     "q": [
      "Per què `P(x)` i `P(f(x))` no unifiquen?",
      "¿Por qué `P(x)` y `P(f(x))` no unifican?",
      "Why do `P(x)` and `P(f(x))` not unify?"
     ],
     "opts": [
      [
       "Perquè x apareix dins de f(x): caldria x = f(f(f(…)))",
       "Porque x aparece dentro de f(x): haría falta x = f(f(f(…)))",
       "Because x appears inside f(x): we would need x = f(f(f(…)))"
      ],
      [
       "Perquè f és una funció de Skolem",
       "Porque f es una función de Skolem",
       "Because f is a Skolem function"
      ],
      [
       "Perquè P és el mateix predicat",
       "Porque P es el mismo predicado",
       "Because P is the same predicate"
      ],
      [
       "Sí que unifiquen, amb {x ← f(x)}",
       "Sí que unifican, con {x ← f(x)}",
       "They do unify, with {x ← f(x)}"
      ]
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "És la comprovació d'ocurrència de l'algorisme.",
        "Es la comprobación de ocurrencia del algoritmo.",
        "It is the occurs check of the algorithm."
       ]
      }
     ]
    }
   }
  ]
 },
 "examEnd": [
  {
   "ref": "lg-f1"
  },
  {
   "ref": "lg-f2"
  },
  {
   "ref": "lg-f3"
  },
  {
   "ref": "lg-f4"
  }
 ]
};
