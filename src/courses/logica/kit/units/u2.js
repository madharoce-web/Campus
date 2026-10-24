// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "La semàntica respon a la pregunta «quan és certa una fórmula?». En CP0 la resposta és una taula de veritat: s'hi proven totes les combinacions possibles de valors.",
    "La semántica responde a la pregunta «¿cuándo es cierta una fórmula?». En CP0 la respuesta es una tabla de verdad: en ella se prueban todas las combinaciones posibles de valores."
   ]
  }
 ],
 "sections": {
  "u2-interpretacions": [
   {
    "t": "p",
    "x": [
     "Una **interpretació** I dona un valor, cert (T) o fals (F), a cada proposició atòmica. Amb n proposicions hi ha 2$^{\\text{n}}$ interpretacions: cada fila de la taula de veritat és una interpretació. Les files s'escriuen comptant en binari, de `F…F` a `T…T`.",
     "Una **interpretación** I da un valor, cierto (T) o falso (F), a cada proposición atómica. Con n proposiciones hay 2$^{\\text{n}}$ interpretaciones: cada fila de la tabla de verdad es una interpretación. Las filas se escriben contando en binario, de `F…F` a `T…T`."
    ]
   },
   {
    "t": "html",
    "h": "<div class=\"tw\"><table class=\"lx-tt\">\n<thead><tr><th>A</th><th>B</th><th>¬A</th><th>A ∧ B</th><th>A ∨ B</th><th>A → B</th><th>A ↔ B</th></tr></thead>\n<tbody>\n<tr><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td></tr>\n<tr><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td></tr>\n<tr><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td></tr>\n<tr><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td></tr>\n</tbody></table></div>"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "`A → B` és una promesa: «si A, et dono B». Només es trenca en un cas, quan passa A i no compleixo B (fila T, F). Si A no passa, la promesa no s'ha trencat, i per això `A → B` és certa a les dues primeres files.",
       "`A → B` es una promesa: «si A, te doy B». Solo se rompe en un caso, cuando ocurre A y no cumplo B (fila T, F). Si A no ocurre, la promesa no se ha roto, y por eso `A → B` es cierta en las dos primeras filas."
      ]
     }
    ],
    "t": "tip",
    "title": [
     "La implicació, com una promesa",
     "La implicación, como una promesa"
    ]
   }
  ],
  "u2-calcular-el-valor-d-una-formula": [
   {
    "t": "p",
    "x": [
     "Es calcula de dins cap a fora, igual que una expressió aritmètica: primer les subfórmules més petites. Una columna per a cada subfórmula evita errors.",
     "Se calcula de dentro hacia fuera, igual que una expresión aritmética: primero las subfórmulas más pequeñas. Una columna para cada subfórmula evita errores."
    ]
   },
   {
    "t": "p",
    "x": [
     "Exemple: `(P → Q) ∧ ¬Q` amb `P = T`, `Q = F`: `P → Q` = T → F = **F**; `¬Q` = **T**; la conjunció F ∧ T = **F**.",
     "Ejemplo: `(P → Q) ∧ ¬Q` con `P = T`, `Q = F`: `P → Q` = T → F = **F**; `¬Q` = **T**; la conjunción F ∧ T = **F**."
    ]
   },
   {
    "t": "p",
    "x": [
     "Proveu-ho amb qualsevol fórmula. Podeu escriure `->`, `&`, `|`, `~` i `<->` si no teniu els símbols:",
     "Probadlo con cualquier fórmula. Podéis escribir `->`, `&`, `|`, `~` y `<->` si no tenéis los símbolos:"
    ]
   },
   {
    "t": "lab",
    "id": "tt",
    "props": {
     "id": "u2-tt",
     "f": "(P → Q) ∧ ¬Q"
    }
   }
  ],
  "u2-tipus-d-enunciats": [
   {
    "t": "p",
    "x": [
     "Mirant només l'última columna de la taula es classifica qualsevol fórmula:",
     "Mirando solo la última columna de la tabla se clasifica cualquier fórmula:"
    ]
   },
   {
    "head": [
     [
      "Tipus",
      "Tipo"
     ],
     "Última columna",
     [
      "Exemple",
      "Ejemplo"
     ]
    ],
    "rows": [
     [
      [
       "**Tautologia** (vàlida)",
       "**Tautología** (válida)"
      ],
      [
       "tot T",
       "todo T"
      ],
      "`P ∨ ¬P`"
     ],
     [
      [
       "**Satisfactible no vàlida** (contingent)",
       "**Satisfacible no válida** (contingente)"
      ],
      [
       "hi ha T i F",
       "hay T y F"
      ],
      "`P → Q`"
     ],
     [
      [
       "**Insatisfactible** (contradicció)",
       "**Insatisfacible** (contradicción)"
      ],
      [
       "tot F",
       "todo F"
      ],
      "`P ∧ ¬P`"
     ]
    ],
    "t": "table"
   },
   {
    "caption": [
     "Tota fórmula vàlida és satisfactible. Una fórmula A és vàlida si i només si ¬A és insatisfactible: aquesta idea és la base de la resolució.",
     "Toda fórmula válida es satisfacible. Una fórmula A es válida si y solo si ¬A es insatisfacible: esta idea es la base de la resolución."
    ],
    "cls": "vz",
    "svg": [
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 210\" role=\"img\" aria-label=\"Les fórmules vàlides són dins de les satisfactibles; les insatisfactibles en són fora\">\n<rect class=\"vz-dom\" x=\"20\" y=\"16\" width=\"600\" height=\"180\" rx=\"14\"></rect>\n<text class=\"vz-cap\" x=\"36\" y=\"38\">TOTES LES FÓRMULES</text>\n<ellipse class=\"vz-setI\" cx=\"230\" cy=\"114\" rx=\"190\" ry=\"72\"></ellipse>\n<text class=\"vz-lab vz-tI\" x=\"110\" y=\"80\">satisfactibles</text><text class=\"vz-sm\" x=\"110\" y=\"96\">alguna fila T</text>\n<ellipse class=\"vz-setT\" cx=\"290\" cy=\"122\" rx=\"92\" ry=\"44\"></ellipse>\n<text class=\"vz-lab vz-tT\" x=\"290\" y=\"118\" text-anchor=\"middle\">vàlides</text><text class=\"vz-sm\" x=\"290\" y=\"134\" text-anchor=\"middle\">totes les files T</text>\n<text class=\"vz-lab vz-tD\" x=\"530\" y=\"104\" text-anchor=\"middle\">insatisfactibles</text><text class=\"vz-sm\" x=\"530\" y=\"120\" text-anchor=\"middle\">cap fila T</text>\n</svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 210\" role=\"img\" aria-label=\"Las fórmulas válidas están dentro de las satisfacibles; las insatisfacibles quedan fuera\">\n<rect class=\"vz-dom\" x=\"20\" y=\"16\" width=\"600\" height=\"180\" rx=\"14\"></rect>\n<text class=\"vz-cap\" x=\"36\" y=\"38\">TODAS LAS FÓRMULAS</text>\n<ellipse class=\"vz-setI\" cx=\"230\" cy=\"114\" rx=\"190\" ry=\"72\"></ellipse>\n<text class=\"vz-lab vz-tI\" x=\"110\" y=\"80\">satisfacibles</text><text class=\"vz-sm\" x=\"110\" y=\"96\">alguna fila T</text>\n<ellipse class=\"vz-setT\" cx=\"290\" cy=\"122\" rx=\"92\" ry=\"44\"></ellipse>\n<text class=\"vz-lab vz-tT\" x=\"290\" y=\"118\" text-anchor=\"middle\">válidas</text><text class=\"vz-sm\" x=\"290\" y=\"134\" text-anchor=\"middle\">todas las filas T</text>\n<text class=\"vz-lab vz-tD\" x=\"530\" y=\"104\" text-anchor=\"middle\">insatisfacibles</text><text class=\"vz-sm\" x=\"530\" y=\"120\" text-anchor=\"middle\">ninguna fila T</text>\n</svg></div>"
    ],
    "t": "diagram"
   }
  ],
  "u2-consequencia-logica": [
   {
    "t": "p",
    "x": [
     "B és **conseqüència lògica** de les premisses A₁, …, Aₙ (s'escriu `A₁, …, Aₙ ⇒ B`) si en totes les interpretacions on les premisses són certes, B també ho és. Dues maneres equivalents de dir-ho:",
     "B es **consecuencia lógica** de las premisas A₁, …, Aₙ (se escribe `A₁, …, Aₙ ⇒ B`) si en todas las interpretaciones donde las premisas son ciertas, B también lo es. Dos maneras equivalentes de decirlo:"
    ]
   },
   {
    "items": [
     [
      "`(A₁ ∧ … ∧ Aₙ) → B` és una **tautologia**.",
      "`(A₁ ∧ … ∧ Aₙ) → B` es una **tautología**."
     ],
     [
      "`A₁ ∧ … ∧ Aₙ ∧ ¬B` és **insatisfactible** (és el que fa la resolució).",
      "`A₁ ∧ … ∧ Aₙ ∧ ¬B` es **insatisfacible** (es lo que hace la resolución)."
     ]
    ],
    "t": "list"
   },
   {
    "id": "u2-el-metode-de-la-taula-pas-a-pas",
    "t": "h",
    "x": [
     "El mètode de la taula, pas a pas",
     "El método de la tabla, paso a paso"
    ]
   },
   {
    "h": [
     "<ol class=\"steps\">\n<li>Feu una columna per a cada proposició i una per a cada subfórmula de les premisses i de la conclusió.</li>\n<li>Marqueu les files on <b>totes</b> les premisses són certes. Les altres files no importen.</li>\n<li>Si en alguna fila marcada la conclusió és F, és un <b>contraexemple</b>: el raonament no és vàlid. Si no n'hi ha cap, és vàlid.</li>\n<li>Per dir el tipus d'enunciat, mireu la columna de <code>(premisses) → (conclusió)</code>: tautologia si el raonament és vàlid.</li>\n</ol>",
     "<ol class=\"steps\">\n<li>Haced una columna para cada proposición y una para cada subfórmula de las premisas y de la conclusión.</li>\n<li>Marcad las filas donde <b>todas</b> las premisas son ciertas. Las demás filas no importan.</li>\n<li>Si en alguna fila marcada la conclusión es F, es un <b>contraejemplo</b>: el razonamiento no es válido. Si no hay ninguna, es válido.</li>\n<li>Para decir el tipo de enunciado, mirad la columna de <code>(premisas) → (conclusión)</code>: tautología si el razonamiento es válido.</li>\n</ol>"
    ],
    "t": "html"
   },
   {
    "id": "u2-exemple-resolt-l-exercici-3-del-cp1",
    "t": "h",
    "x": [
     "Exemple resolt: l'exercici 3 del CP1",
     "Ejemplo resuelto: el ejercicio 3 del CP1"
    ]
   },
   {
    "t": "p",
    "x": [
     "`(¬B → ¬A) ∧ (¬B ∨ C) ⇒ A → C`. Hi ha 3 proposicions, per tant 8 files. A les files marcades (premisses certes), la conclusió sempre és certa:",
     "`(¬B → ¬A) ∧ (¬B ∨ C) ⇒ A → C`. Hay 3 proposiciones, por tanto 8 filas. En las filas marcadas (premisas ciertas), la conclusión siempre es cierta:"
    ]
   },
   {
    "t": "html",
    "h": "<div class=\"tw\"><table class=\"lx-tt\"><thead><tr><th>A</th><th>B</th><th>C</th><th class=\"\">¬B</th><th class=\"\">¬A</th><th class=\"\">¬B → ¬A</th><th class=\"\">¬B ∨ C</th><th class=\"pc\">(¬B → ¬A) ∧ (¬B ∨ C)</th><th class=\"cc\">A → C</th><th class=\"wc\">((¬B → ¬A) ∧ (¬B ∨ C)) → (A → C)</th></tr></thead><tbody><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr></tbody></table></div>"
   },
   {
    "t": "p",
    "x": [
     "(a) El raonament és **vàlid**. (b) L'enunciat `((¬B → ¬A) ∧ (¬B ∨ C)) → (A → C)` és una **tautologia**: la seva columna és tota T.",
     "(a) El razonamiento es **válido**. (b) El enunciado `((¬B → ¬A) ∧ (¬B ∨ C)) → (A → C)` es una **tautología**: su columna es toda T."
    ]
   },
   {
    "t": "p",
    "x": [
     "I un que no ho és, «negar l'antecedent», `(P → Q) ∧ ¬P ⇒ ¬Q`: la fila `P = F, Q = T` fa certes les premisses i falsa la conclusió.",
     "Y uno que no lo es, «negar el antecedente», `(P → Q) ∧ ¬P ⇒ ¬Q`: la fila `P = F, Q = T` hace ciertas las premisas y falsa la conclusión."
    ]
   },
   {
    "t": "html",
    "h": "<div class=\"tw\"><table class=\"lx-tt\"><thead><tr><th>P</th><th>Q</th><th class=\"\">P → Q</th><th class=\"\">¬P</th><th class=\"pc\">(P → Q) ∧ ¬P</th><th class=\"cc\">¬Q</th><th class=\"wc\">((P → Q) ∧ ¬P) → ¬Q</th></tr></thead><tbody><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"bad\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv f\">F</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr></tbody></table></div>"
   }
  ],
  "u2-equivalencia-logica": [
   {
    "t": "p",
    "x": [
     "A i B són **equivalents** (`A ⇔ B`, també `A ≡ B`) si tenen la mateixa columna a la taula: diuen el mateix amb paraules diferents. Les equivalències permeten reescriure fórmules sense canviar-ne el significat. Les imprescindibles:",
     "A y B son **equivalentes** (`A ⇔ B`, también `A ≡ B`) si tienen la misma columna en la tabla: dicen lo mismo con palabras diferentes. Las equivalencias permiten reescribir fórmulas sin cambiar su significado. Las imprescindibles:"
    ]
   },
   {
    "head": [
     [
      "Nom",
      "Nombre"
     ],
     [
      "Equivalència",
      "Equivalencia"
     ]
    ],
    "rows": [
     [
      [
       "Doble negació",
       "Doble negación"
      ],
      "`¬¬A ⇔ A`"
     ],
     [
      [
       "Implicació",
       "Implicación"
      ],
      "`A → B ⇔ ¬A ∨ B`"
     ],
     [
      "Contrapositiva",
      "`A → B ⇔ ¬B → ¬A`"
     ],
     [
      "De Morgan",
      "`¬(A ∧ B) ⇔ ¬A ∨ ¬B` · `¬(A ∨ B) ⇔ ¬A ∧ ¬B`"
     ],
     [
      [
       "Exportació",
       "Exportación"
      ],
      "`(A ∧ B) → C ⇔ A → (B → C)`"
     ],
     [
      "Distributiva",
      "`A ∨ (B ∧ C) ⇔ (A ∨ B) ∧ (A ∨ C)`"
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "La resta són al [formulari](/logica/fs). Compte: `A → B` **no** equival a `B → A` (la recíproca) ni a `¬A → ¬B` (la inversa).",
     "Las demás están en el [formulario](/logica/fs). Cuidado: `A → B` **no** equivale a `B → A` (la recíproca) ni a `¬A → ¬B` (la inversa)."
    ]
   }
  ],
  "u2-un-atall-el-metode-de-la-interpretacio": [
   {
    "t": "p",
    "x": [
     "Per comprovar un raonament sense fer tota la taula, suposeu que les premisses són certes i la conclusió falsa, i deduïu valors fins a trobar una contradicció. Si la trobeu, el raonament és vàlid; si arribeu a una assignació coherent, aquesta és un contraexemple.",
     "Para comprobar un razonamiento sin hacer toda la tabla, suponed que las premisas son ciertas y la conclusión falsa, y deducid valores hasta encontrar una contradicción. Si la encontráis, el razonamiento es válido; si llegáis a una asignación coherente, esta es un contraejemplo."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Conclusió falsa: `P → R` = F obliga `P = T` i `R = F`. Premissa 1: `P → Q` = T amb P = T obliga `Q = T`. Premissa 2: `Q → R` = T → F = **F**. Contradicció: el raonament és vàlid.",
       "Conclusión falsa: `P → R` = F obliga a `P = T` y `R = F`. Premisa 1: `P → Q` = T con P = T obliga a `Q = T`. Premisa 2: `Q → R` = T → F = **F**. Contradicción: el razonamiento es válido."
      ]
     }
    ],
    "t": "example",
    "title": [
     "Exemple: P → Q, Q → R ⇒ P → R",
     "Ejemplo: P → Q, Q → R ⇒ P → R"
    ]
   }
  ],
  "u2-comprova-que-has-entes": [
   {
    "t": "check",
    "ex": {
     "id": "u2-comprova-que-has-entes-q1",
     "type": "mcq",
     "q": [
      "Una fórmula amb 4 proposicions diferents, quantes files té a la taula?",
      "Una fórmula con 4 proposiciones diferentes, ¿cuántas filas tiene en la tabla?"
     ],
     "opts": [
      "8",
      "16",
      "4",
      "32"
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": "2$^{\\text{4}}$ = 16."
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "u2-comprova-que-has-entes-q2",
     "type": "mcq",
     "q": [
      "Si `(A₁ ∧ A₂) → B` és una tautologia, què podem dir?",
      "Si `(A₁ ∧ A₂) → B` es una tautología, ¿qué podemos decir?"
     ],
     "opts": [
      [
       "B és conseqüència lògica de A₁ i A₂",
       "B es consecuencia lógica de A₁ y A₂"
      ],
      [
       "A₁ i A₂ són equivalents",
       "A₁ y A₂ son equivalentes"
      ],
      [
       "B és una tautologia",
       "B es una tautología"
      ],
      [
       "Res: cal mirar la taula de B",
       "Nada: hay que mirar la tabla de B"
      ]
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "És exactament la definició de conseqüència lògica.",
        "Es exactamente la definición de consecuencia lógica."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "u2-comprova-que-has-entes-q3",
     "type": "mcq",
     "q": [
      "Quina fila és un contraexemple de `P ∨ Q, P ⇒ ¬Q`?",
      "¿Qué fila es un contraejemplo de `P ∨ Q, P ⇒ ¬Q`?"
     ],
     "opts": [
      "P = F, Q = F",
      "P = F, Q = T",
      "P = T, Q = F",
      "P = T, Q = T"
     ],
     "answer": 3,
     "sol": [
      {
       "t": "p",
       "x": [
        "Amb P = T i Q = T les dues premisses són certes i `¬Q` és fals. (El «o» del CP0 és inclusiu.)",
        "Con P = T y Q = T las dos premisas son ciertas y `¬Q` es falso. (La «o» del CP0 es inclusiva.)"
       ]
      }
     ]
    }
   }
  ]
 },
 "examEnd": []
};
