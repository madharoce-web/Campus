// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Per aplicar la resolució, les fórmules del CP1 s'han de convertir en clàusules, com en CP0, però ara cal desfer-se també dels quantificadors. L'algorisme té vuit passos i sempre es fan en el mateix ordre.",
    "Para aplicar la resolución, las fórmulas del CP1 se tienen que convertir en cláusulas, como en CP0, pero ahora también hay que deshacerse de los cuantificadores. El algoritmo tiene ocho pasos y siempre se hacen en el mismo orden."
   ]
  }
 ],
 "sections": {
  "u7-clausules-en-cp1": [
   {
    "t": "p",
    "x": [
     "Una clàusula del CP1 és un conjunt de literals que poden contenir variables, com `{¬B(x), ¬R(b,x), L(a,x)}`. No s'hi escriuen quantificadors: **totes les variables d'una clàusula s'entenen universals**, i cada clàusula té les seves pròpies variables (la x d'una clàusula no té res a veure amb la x d'una altra).",
     "Una cláusula del CP1 es un conjunto de literales que pueden contener variables, como `{¬B(x), ¬R(b,x), L(a,x)}`. No se escriben cuantificadores: **todas las variables de una cláusula se entienden universales**, y cada cláusula tiene sus propias variables (la x de una cláusula no tiene nada que ver con la x de otra)."
    ]
   }
  ],
  "u7-l-algorisme-en-vuit-passos": [
   {
    "caption": [
     "Els passos 1, 2 i 7 són els mateixos del CP0. Els nous són els que tracten els quantificadors: 3, 4, 5 i 6. Només el pas 4 (Skolem) no és una equivalència lògica.",
     "Los pasos 1, 2 y 7 son los mismos del CP0. Los nuevos son los que tratan los cuantificadores: 3, 4, 5 y 6. Solo el paso 4 (Skolem) no es una equivalencia lógica."
    ],
    "cls": "vz",
    "svg": [
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Els vuit passos de la transformació a forma clausal\">\n<defs><marker id=\"u7a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs>\n<g class=\"vz-t\">\n<rect class=\"vz-bx\" x=\"10\" y=\"20\" width=\"160\" height=\"56\" rx=\"8\"></rect><text class=\"vz-lab vz-tA\" x=\"24\" y=\"42\">1</text><text class=\"vz-t\" x=\"44\" y=\"42\">Eliminar →</text><text class=\"vz-sm\" x=\"44\" y=\"62\">A → B ≡ ¬A ∨ B</text>\n<rect class=\"vz-bx\" x=\"195\" y=\"20\" width=\"160\" height=\"56\" rx=\"8\"></rect><text class=\"vz-lab vz-tA\" x=\"209\" y=\"42\">2</text><text class=\"vz-t\" x=\"229\" y=\"42\">Negacions a dins</text><text class=\"vz-sm\" x=\"229\" y=\"62\">De Morgan, ¬∀ = ∃¬</text>\n<rect class=\"vz-bx\" x=\"380\" y=\"20\" width=\"160\" height=\"56\" rx=\"8\"></rect><text class=\"vz-lab vz-tA\" x=\"394\" y=\"42\">3</text><text class=\"vz-t\" x=\"414\" y=\"42\">Renombrar</text><text class=\"vz-sm\" x=\"414\" y=\"62\">una variable per ∀/∃</text>\n<rect class=\"vz-nodeA\" x=\"565\" y=\"20\" width=\"165\" height=\"56\" rx=\"8\"></rect><text class=\"vz-lab vz-tA\" x=\"579\" y=\"42\">4</text><text class=\"vz-t\" x=\"599\" y=\"42\">Skolemitzar</text><text class=\"vz-sm\" x=\"599\" y=\"62\">∃ → constant o funció</text>\n<rect class=\"vz-bx\" x=\"565\" y=\"112\" width=\"165\" height=\"56\" rx=\"8\"></rect><text class=\"vz-lab vz-tA\" x=\"579\" y=\"134\">5</text><text class=\"vz-t\" x=\"599\" y=\"134\">∀ a l'esquerra</text><text class=\"vz-sm\" x=\"599\" y=\"154\">sense canviar l'ordre</text>\n<rect class=\"vz-bx\" x=\"380\" y=\"112\" width=\"160\" height=\"56\" rx=\"8\"></rect><text class=\"vz-lab vz-tA\" x=\"394\" y=\"134\">6</text><text class=\"vz-t\" x=\"414\" y=\"134\">Treure els ∀</text><text class=\"vz-sm\" x=\"414\" y=\"154\">ja s'entenen</text>\n<rect class=\"vz-bx\" x=\"195\" y=\"112\" width=\"160\" height=\"56\" rx=\"8\"></rect><text class=\"vz-lab vz-tA\" x=\"209\" y=\"134\">7</text><text class=\"vz-t\" x=\"229\" y=\"134\">FNC</text><text class=\"vz-sm\" x=\"229\" y=\"154\">∨ sobre ∧</text>\n<rect class=\"vz-bx\" x=\"10\" y=\"112\" width=\"160\" height=\"56\" rx=\"8\"></rect><text class=\"vz-lab vz-tA\" x=\"24\" y=\"134\">8</text><text class=\"vz-t\" x=\"44\" y=\"134\">Clàusules</text><text class=\"vz-sm\" x=\"44\" y=\"154\">una per cada ∧</text>\n</g>\n<path class=\"vz-ln\" d=\"M170 48 H191\" marker-end=\"url(#u7a)\"></path><path class=\"vz-ln\" d=\"M355 48 H376\" marker-end=\"url(#u7a)\"></path><path class=\"vz-ln\" d=\"M540 48 H561\" marker-end=\"url(#u7a)\"></path>\n<path class=\"vz-ln\" d=\"M647 76 V108\" marker-end=\"url(#u7a)\"></path><path class=\"vz-ln\" d=\"M565 140 H544\" marker-end=\"url(#u7a)\"></path><path class=\"vz-ln\" d=\"M380 140 H359\" marker-end=\"url(#u7a)\"></path><path class=\"vz-ln\" d=\"M195 140 H174\" marker-end=\"url(#u7a)\"></path>\n</svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 740 190\" role=\"img\" aria-label=\"Los ocho pasos de la transformación a forma clausal\">\n<defs><marker id=\"u7a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs>\n<g class=\"vz-t\">\n<rect class=\"vz-bx\" x=\"10\" y=\"20\" width=\"160\" height=\"56\" rx=\"8\"></rect><text class=\"vz-lab vz-tA\" x=\"24\" y=\"42\">1</text><text class=\"vz-t\" x=\"44\" y=\"42\">Eliminar →</text><text class=\"vz-sm\" x=\"44\" y=\"62\">A → B ≡ ¬A ∨ B</text>\n<rect class=\"vz-bx\" x=\"195\" y=\"20\" width=\"160\" height=\"56\" rx=\"8\"></rect><text class=\"vz-lab vz-tA\" x=\"209\" y=\"42\">2</text><text class=\"vz-t\" x=\"229\" y=\"42\">Negaciones dentro</text><text class=\"vz-sm\" x=\"229\" y=\"62\">De Morgan, ¬∀ = ∃¬</text>\n<rect class=\"vz-bx\" x=\"380\" y=\"20\" width=\"160\" height=\"56\" rx=\"8\"></rect><text class=\"vz-lab vz-tA\" x=\"394\" y=\"42\">3</text><text class=\"vz-t\" x=\"414\" y=\"42\">Renombrar</text><text class=\"vz-sm\" x=\"414\" y=\"62\">una variable por ∀/∃</text>\n<rect class=\"vz-nodeA\" x=\"565\" y=\"20\" width=\"165\" height=\"56\" rx=\"8\"></rect><text class=\"vz-lab vz-tA\" x=\"579\" y=\"42\">4</text><text class=\"vz-t\" x=\"599\" y=\"42\">Skolemizar</text><text class=\"vz-sm\" x=\"599\" y=\"62\">∃ → constante/función</text>\n<rect class=\"vz-bx\" x=\"565\" y=\"112\" width=\"165\" height=\"56\" rx=\"8\"></rect><text class=\"vz-lab vz-tA\" x=\"579\" y=\"134\">5</text><text class=\"vz-t\" x=\"599\" y=\"134\">∀ al principio</text><text class=\"vz-sm\" x=\"599\" y=\"154\">sin cambiar el orden</text>\n<rect class=\"vz-bx\" x=\"380\" y=\"112\" width=\"160\" height=\"56\" rx=\"8\"></rect><text class=\"vz-lab vz-tA\" x=\"394\" y=\"134\">6</text><text class=\"vz-t\" x=\"414\" y=\"134\">Quitar los ∀</text><text class=\"vz-sm\" x=\"414\" y=\"154\">ya se entienden</text>\n<rect class=\"vz-bx\" x=\"195\" y=\"112\" width=\"160\" height=\"56\" rx=\"8\"></rect><text class=\"vz-lab vz-tA\" x=\"209\" y=\"134\">7</text><text class=\"vz-t\" x=\"229\" y=\"134\">FNC</text><text class=\"vz-sm\" x=\"229\" y=\"154\">∨ sobre ∧</text>\n<rect class=\"vz-bx\" x=\"10\" y=\"112\" width=\"160\" height=\"56\" rx=\"8\"></rect><text class=\"vz-lab vz-tA\" x=\"24\" y=\"134\">8</text><text class=\"vz-t\" x=\"44\" y=\"134\">Cláusulas</text><text class=\"vz-sm\" x=\"44\" y=\"154\">una por cada ∧</text>\n</g>\n<path class=\"vz-ln\" d=\"M170 48 H191\" marker-end=\"url(#u7a)\"></path><path class=\"vz-ln\" d=\"M355 48 H376\" marker-end=\"url(#u7a)\"></path><path class=\"vz-ln\" d=\"M540 48 H561\" marker-end=\"url(#u7a)\"></path>\n<path class=\"vz-ln\" d=\"M647 76 V108\" marker-end=\"url(#u7a)\"></path><path class=\"vz-ln\" d=\"M565 140 H544\" marker-end=\"url(#u7a)\"></path><path class=\"vz-ln\" d=\"M380 140 H359\" marker-end=\"url(#u7a)\"></path><path class=\"vz-ln\" d=\"M195 140 H174\" marker-end=\"url(#u7a)\"></path>\n</svg></div>"
    ],
    "t": "diagram"
   },
   {
    "head": [
     [
      "Pas",
      "Paso"
     ],
     [
      "Què es fa",
      "Qué se hace"
     ],
     [
      "Exemple",
      "Ejemplo"
     ]
    ],
    "rows": [
     [
      "1",
      [
       "Eliminar `→` i `↔`",
       "Eliminar `→` y `↔`"
      ],
      "`∀x (P(x) → Q(x))` ⟶ `∀x (¬P(x) ∨ Q(x))`"
     ],
     [
      "2",
      [
       "Portar les negacions fins als àtoms: De Morgan, doble negació, `¬∀x A ≡ ∃x ¬A`, `¬∃x A ≡ ∀x ¬A`",
       "Llevar las negaciones hasta los átomos: De Morgan, doble negación, `¬∀x A ≡ ∃x ¬A`, `¬∃x A ≡ ∀x ¬A`"
      ],
      "`¬∃x P(x)` ⟶ `∀x ¬P(x)`"
     ],
     [
      "3",
      [
       "Que cada quantificador tingui una variable diferent",
       "Que cada cuantificador tenga una variable diferente"
      ],
      "`∀x P(x) ∨ ∃x Q(x)` ⟶ `∀x P(x) ∨ ∃y Q(y)`"
     ],
     [
      "4",
      [
       "Eliminar els `∃` (skolemitzar)",
       "Eliminar los `∃` (skolemizar)"
      ],
      "`∀x ∃y P(x,y)` ⟶ `∀x P(x, f(x))`"
     ],
     [
      "5",
      [
       "Moure els `∀` al principi, en el mateix ordre",
       "Mover los `∀` al principio, en el mismo orden"
      ],
      "`P(a) ∧ ∀y Q(y)` ⟶ `∀y (P(a) ∧ Q(y))`"
     ],
     [
      "6",
      [
       "Treure els `∀`",
       "Quitar los `∀`"
      ],
      "`∀y (P(a) ∧ Q(y))` ⟶ `P(a) ∧ Q(y)`"
     ],
     [
      "7",
      "Forma normal conjuntiva (distributiva)",
      "`A ∨ (B ∧ C)` ⟶ `(A ∨ B) ∧ (A ∨ C)`"
     ],
     [
      "8",
      [
       "Una clàusula per cada conjunt",
       "Una cláusula por cada miembro de la conjunción"
      ],
      "`{A, B}`, `{A, C}`"
     ]
    ],
    "t": "table"
   }
  ],
  "u7-la-skolemitzacio-amb-calma": [
   {
    "t": "p",
    "x": [
     "Skolemitzar és **posar nom a allò que existeix**. Si sabem que «algú ha guanyat la loteria», `∃x G(x)`, li podem posar un nom inventat, `k`, i escriure `G(k)`. Però si «tothom té una mare», `∀x ∃y M(y,x)`, la mare depèn de qui sigui x: el nom ha de ser una **funció**, `m(x)`, i queda `∀x M(m(x), x)`.",
     "Skolemizar es **poner nombre a lo que existe**. Si sabemos que «alguien ha ganado la lotería», `∃x G(x)`, le podemos poner un nombre inventado, `k`, y escribir `G(k)`. Pero si «todo el mundo tiene una madre», `∀x ∃y M(y,x)`, la madre depende de quién sea x: el nombre tiene que ser una **función**, `m(x)`, y queda `∀x M(m(x), x)`."
    ]
   },
   {
    "caption": [
     "Skolemitzar és posar nom a allò que existeix. A l'esquerra l'`∃` no depèn de res: n'hi ha prou amb un nom fix, `k`. A la dreta l'`∃y` és dins de `∀x`: per a cada x existeix una y diferent, i el nom ha de ser una funció de x, `m(x)`.",
     "Skolemizar es poner nombre a lo que existe. A la izquierda el `∃` no depende de nada: basta con un nombre fijo, `k`. A la derecha el `∃y` está dentro de `∀x`: para cada x existe una y distinta, y el nombre tiene que ser una función de x, `m(x)`."
    ],
    "cls": "vz",
    "svg": [
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 300\" role=\"img\" aria-label=\"Constant de Skolem i funció de Skolem\"><defs><marker id=\"ar-sk\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-sk\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-sk\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-sk\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><line x1=\"320.0\" y1=\"14.0\" x2=\"320.0\" y2=\"290.0\" class=\"vz-sep\"></line><text x=\"160.0\" y=\"30.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:15px\">∃x Guanya(x)  ⇒  Guanya(k)</text><rect x=\"40.0\" y=\"50.0\" width=\"240.0\" height=\"170.0\" rx=\"14\" class=\"vz-dom\"></rect><text x=\"268.0\" y=\"70.0\" class=\"vz-dl\" text-anchor=\"end\">D</text><circle cx=\"90.0\" cy=\"100.0\" r=\"7.0\" class=\"vz-dot\"></circle><circle cx=\"160.0\" cy=\"90.0\" r=\"7.0\" class=\"vz-dot\"></circle><circle cx=\"230.0\" cy=\"110.0\" r=\"7.0\" class=\"vz-dotA\"></circle><circle cx=\"110.0\" cy=\"170.0\" r=\"7.0\" class=\"vz-dot\"></circle><circle cx=\"200.0\" cy=\"175.0\" r=\"7.0\" class=\"vz-dot\"></circle><circle cx=\"230.0\" cy=\"110.0\" r=\"15.0\" class=\"vz-ringA\"></circle><text x=\"230.0\" y=\"145.0\" class=\"vz-mono vz-tA vz-b\" text-anchor=\"middle\" style=\"font-size:16px\">k</text><text x=\"160.0\" y=\"250.0\" class=\"vz-sm\" text-anchor=\"middle\">un sol objecte, sempre el mateix:</text><text x=\"160.0\" y=\"268.0\" class=\"vz-lab vz-tA\" text-anchor=\"middle\">constant de Skolem</text><text x=\"480.0\" y=\"30.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:15px\">∀x ∃y Mare(y, x)  ⇒  Mare(m(x), x)</text><circle cx=\"390.0\" cy=\"82.0\" r=\"7.0\" class=\"vz-dot\"></circle><text x=\"390.0\" y=\"66.0\" class=\"vz-t\" text-anchor=\"middle\">Anna</text><circle cx=\"390.0\" cy=\"186.0\" r=\"7.0\" class=\"vz-dotA\"></circle><text x=\"390.0\" y=\"214.0\" class=\"vz-mono vz-tA\" text-anchor=\"middle\" style=\"font-size:13px\">m(Anna)</text><line x1=\"390.0\" y1=\"92.0\" x2=\"390.0\" y2=\"174.0\" class=\"vz-lnA\" marker-end=\"url(#aa-sk)\"></line><circle cx=\"480.0\" cy=\"82.0\" r=\"7.0\" class=\"vz-dot\"></circle><text x=\"480.0\" y=\"66.0\" class=\"vz-t\" text-anchor=\"middle\">Biel</text><circle cx=\"480.0\" cy=\"186.0\" r=\"7.0\" class=\"vz-dotA\"></circle><text x=\"480.0\" y=\"214.0\" class=\"vz-mono vz-tA\" text-anchor=\"middle\" style=\"font-size:13px\">m(Biel)</text><line x1=\"480.0\" y1=\"92.0\" x2=\"480.0\" y2=\"174.0\" class=\"vz-lnA\" marker-end=\"url(#aa-sk)\"></line><circle cx=\"570.0\" cy=\"82.0\" r=\"7.0\" class=\"vz-dot\"></circle><text x=\"570.0\" y=\"66.0\" class=\"vz-t\" text-anchor=\"middle\">Carla</text><circle cx=\"570.0\" cy=\"186.0\" r=\"7.0\" class=\"vz-dotA\"></circle><text x=\"570.0\" y=\"214.0\" class=\"vz-mono vz-tA\" text-anchor=\"middle\" style=\"font-size:13px\">m(Carla)</text><line x1=\"570.0\" y1=\"92.0\" x2=\"570.0\" y2=\"174.0\" class=\"vz-lnA\" marker-end=\"url(#aa-sk)\"></line><text x=\"480.0\" y=\"250.0\" class=\"vz-sm\" text-anchor=\"middle\">cada x té la seva mare: depèn de x</text><text x=\"480.0\" y=\"268.0\" class=\"vz-lab vz-tA\" text-anchor=\"middle\">funció de Skolem</text></svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 300\" role=\"img\" aria-label=\"Constante de Skolem y función de Skolem\"><defs><marker id=\"ar-sk\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-sk\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-sk\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-sk\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><line x1=\"320.0\" y1=\"14.0\" x2=\"320.0\" y2=\"290.0\" class=\"vz-sep\"></line><text x=\"160.0\" y=\"30.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:15px\">∃x Guanya(x)  ⇒  Guanya(k)</text><rect x=\"40.0\" y=\"50.0\" width=\"240.0\" height=\"170.0\" rx=\"14\" class=\"vz-dom\"></rect><text x=\"268.0\" y=\"70.0\" class=\"vz-dl\" text-anchor=\"end\">D</text><circle cx=\"90.0\" cy=\"100.0\" r=\"7.0\" class=\"vz-dot\"></circle><circle cx=\"160.0\" cy=\"90.0\" r=\"7.0\" class=\"vz-dot\"></circle><circle cx=\"230.0\" cy=\"110.0\" r=\"7.0\" class=\"vz-dotA\"></circle><circle cx=\"110.0\" cy=\"170.0\" r=\"7.0\" class=\"vz-dot\"></circle><circle cx=\"200.0\" cy=\"175.0\" r=\"7.0\" class=\"vz-dot\"></circle><circle cx=\"230.0\" cy=\"110.0\" r=\"15.0\" class=\"vz-ringA\"></circle><text x=\"230.0\" y=\"145.0\" class=\"vz-mono vz-tA vz-b\" text-anchor=\"middle\" style=\"font-size:16px\">k</text><text x=\"160.0\" y=\"250.0\" class=\"vz-sm\" text-anchor=\"middle\">un solo objeto, siempre el mismo:</text><text x=\"160.0\" y=\"268.0\" class=\"vz-lab vz-tA\" text-anchor=\"middle\">constante de Skolem</text><text x=\"480.0\" y=\"30.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:15px\">∀x ∃y Mare(y, x)  ⇒  Mare(m(x), x)</text><circle cx=\"390.0\" cy=\"82.0\" r=\"7.0\" class=\"vz-dot\"></circle><text x=\"390.0\" y=\"66.0\" class=\"vz-t\" text-anchor=\"middle\">Anna</text><circle cx=\"390.0\" cy=\"186.0\" r=\"7.0\" class=\"vz-dotA\"></circle><text x=\"390.0\" y=\"214.0\" class=\"vz-mono vz-tA\" text-anchor=\"middle\" style=\"font-size:13px\">m(Anna)</text><line x1=\"390.0\" y1=\"92.0\" x2=\"390.0\" y2=\"174.0\" class=\"vz-lnA\" marker-end=\"url(#aa-sk)\"></line><circle cx=\"480.0\" cy=\"82.0\" r=\"7.0\" class=\"vz-dot\"></circle><text x=\"480.0\" y=\"66.0\" class=\"vz-t\" text-anchor=\"middle\">Biel</text><circle cx=\"480.0\" cy=\"186.0\" r=\"7.0\" class=\"vz-dotA\"></circle><text x=\"480.0\" y=\"214.0\" class=\"vz-mono vz-tA\" text-anchor=\"middle\" style=\"font-size:13px\">m(Biel)</text><line x1=\"480.0\" y1=\"92.0\" x2=\"480.0\" y2=\"174.0\" class=\"vz-lnA\" marker-end=\"url(#aa-sk)\"></line><circle cx=\"570.0\" cy=\"82.0\" r=\"7.0\" class=\"vz-dot\"></circle><text x=\"570.0\" y=\"66.0\" class=\"vz-t\" text-anchor=\"middle\">Carla</text><circle cx=\"570.0\" cy=\"186.0\" r=\"7.0\" class=\"vz-dotA\"></circle><text x=\"570.0\" y=\"214.0\" class=\"vz-mono vz-tA\" text-anchor=\"middle\" style=\"font-size:13px\">m(Carla)</text><line x1=\"570.0\" y1=\"92.0\" x2=\"570.0\" y2=\"174.0\" class=\"vz-lnA\" marker-end=\"url(#aa-sk)\"></line><text x=\"480.0\" y=\"250.0\" class=\"vz-sm\" text-anchor=\"middle\">cada x tiene su madre: depende de x</text><text x=\"480.0\" y=\"268.0\" class=\"vz-lab vz-tA\" text-anchor=\"middle\">función de Skolem</text></svg></div>"
    ],
    "t": "diagram"
   },
   {
    "head": [
     [
      "Situació de l'∃",
      "Situación del ∃"
     ],
     [
      "Se substitueix per",
      "Se sustituye por"
     ],
     [
      "Exemple",
      "Ejemplo"
     ]
    ],
    "rows": [
     [
      [
       "No és dins de cap `∀`",
       "No está dentro de ningún `∀`"
      ],
      [
       "una **constant** nova (de Skolem)",
       "una **constante** nueva (de Skolem)"
      ],
      "`∃x ∀y S(x,y)` ⟶ `∀y S(k, y)`"
     ],
     [
      [
       "És dins de `∀x₁ … ∀xₙ`",
       "Está dentro de `∀x₁ … ∀xₙ`"
      ],
      [
       "una **funció** nova de x₁ … xₙ",
       "una **función** nueva de x₁ … xₙ"
      ],
      "`∀x ∀y ∃z A(x,y,z)` ⟶ `∀x ∀y A(x, y, f(x,y))`"
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "items": [
       [
        "El símbol ha de ser **nou**: no pot coincidir amb cap constant o funció de l'enunciat, ni amb una altra de Skolem. Si al problema ja hi ha `a`, `b`, `c`, feu servir `k`, `k1`… i `f`, `g`…",
        "El símbolo tiene que ser **nuevo**: no puede coincidir con ninguna constante o función del enunciado, ni con otra de Skolem. Si en el problema ya aparecen `a`, `b`, `c`, usad `k`, `k1`… y `f`, `g`…"
       ],
       [
        "Abans de skolemitzar, les negacions han d'haver arribat als àtoms (pas 2): un `¬∀` amaga un `∃`.",
        "Antes de skolemizar, las negaciones tienen que haber llegado a los átomos (paso 2): un `¬∀` esconde un `∃`."
       ],
       [
        "Un `∃` dins la **condició** d'una implicació es converteix en `∀` en eliminar la fletxa: `∃x A(x) → B` ⟶ `¬∃x A(x) ∨ B` ⟶ `∀x ¬A(x) ∨ B`. No s'hi fa Skolem.",
        "Un `∃` dentro de la **condición** de una implicación se convierte en `∀` al eliminar la flecha: `∃x A(x) → B` ⟶ `¬∃x A(x) ∨ B` ⟶ `∀x ¬A(x) ∨ B`. No se aplica Skolem."
       ]
      ],
      "t": "list"
     }
    ],
    "t": "warn",
    "title": [
     "Tres precaucions",
     "Tres precauciones"
    ]
   }
  ],
  "u7-exemples-resolts": [
   {
    "id": "u7-un-dins-d-un",
    "t": "h",
    "x": [
     "Un ∃ dins d'un ∀",
     "Un ∃ dentro de un ∀"
    ]
   },
   {
    "h": [
     "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (P(x) → ∃y (Q(x,y) ∧ ¬R(y)))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x (¬P(x) ∨ ∃y (Q(x,y) ∧ ¬R(y)))</span></li><li><b>4.</b> Skolemitzar: y → f(x) (funció de Skolem de x)<br><span class=\"lf\">∀x (¬P(x) ∨ (Q(x,f(x)) ∧ ¬R(f(x))))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬P(x) ∨ (Q(x,f(x)) ∧ ¬R(f(x)))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬P(x) ∨ Q(x,f(x))) ∧ (¬P(x) ∨ ¬R(f(x)))</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬P(x), Q(x,f(x))} , {¬P(x), ¬R(f(x))} }</span></li></ol></div>",
     "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (P(x) → ∃y (Q(x,y) ∧ ¬R(y)))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x (¬P(x) ∨ ∃y (Q(x,y) ∧ ¬R(y)))</span></li><li><b>4.</b> Skolemizar: y → f(x) (función de Skolem de x)<br><span class=\"lf\">∀x (¬P(x) ∨ (Q(x,f(x)) ∧ ¬R(f(x))))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬P(x) ∨ (Q(x,f(x)) ∧ ¬R(f(x)))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬P(x) ∨ Q(x,f(x))) ∧ (¬P(x) ∨ ¬R(f(x)))</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬P(x), Q(x,f(x))} , {¬P(x), ¬R(f(x))} }</span></li></ol></div>"
    ],
    "t": "html"
   },
   {
    "id": "u7-una-negacio-davant-d-un-quantificador",
    "t": "h",
    "x": [
     "Una negació davant d'un quantificador",
     "Una negación delante de un cuantificador"
    ]
   },
   {
    "h": [
     "<div class=\"lx-cfb\"><p><span class=\"lf\">¬∀x (P(x) → ∃y Q(x,y))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">¬∀x (¬P(x) ∨ ∃y Q(x,y))</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∃x (P(x) ∧ ∀y ¬Q(x,y))</span></li><li><b>4.</b> Skolemitzar: x → k (constant de Skolem)<br><span class=\"lf\">P(k) ∧ ∀y ¬Q(k,y)</span></li><li><b>5.</b> Universals a l'esquerra: <span class=\"lf\">∀y (P(k) ∧ ¬Q(k,y))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">P(k) ∧ ¬Q(k,y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {P(k)} , {¬Q(k,y)} }</span></li></ol></div>",
     "<div class=\"lx-cfb\"><p><span class=\"lf\">¬∀x (P(x) → ∃y Q(x,y))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">¬∀x (¬P(x) ∨ ∃y Q(x,y))</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∃x (P(x) ∧ ∀y ¬Q(x,y))</span></li><li><b>4.</b> Skolemizar: x → k (constante de Skolem)<br><span class=\"lf\">P(k) ∧ ∀y ¬Q(k,y)</span></li><li><b>5.</b> Universales a la izquierda: <span class=\"lf\">∀y (P(k) ∧ ¬Q(k,y))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">P(k) ∧ ¬Q(k,y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {P(k)} , {¬Q(k,y)} }</span></li></ol></div>"
    ],
    "t": "html"
   },
   {
    "id": "u7-un-enunciat-d-examen-hi-ha-persones-que-unicament-llegeixen-",
    "t": "h",
    "x": [
     "Un enunciat d'examen: «Hi ha persones que únicament llegeixen llibres recomanats per algun crític»",
     "Un enunciado de examen: «Hay personas que únicamente leen libros recomendados por algún crítico»"
    ]
   },
   {
    "h": [
     "<div class=\"lx-cfb\"><p><span class=\"lf\">∃x (P(x) ∧ ∀y (L(x,y) → (B(y) ∧ ∃z (C(z) ∧ R(z,y)))))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∃x (P(x) ∧ ∀y (¬L(x,y) ∨ (B(y) ∧ ∃z (C(z) ∧ R(z,y)))))</span></li><li><b>4.</b> Skolemitzar: x → k (constant de Skolem); z → f(y) (funció de Skolem de y)<br><span class=\"lf\">P(k) ∧ ∀y (¬L(k,y) ∨ (B(y) ∧ C(f(y)) ∧ R(f(y),y)))</span></li><li><b>5.</b> Universals a l'esquerra: <span class=\"lf\">∀y (P(k) ∧ (¬L(k,y) ∨ (B(y) ∧ C(f(y)) ∧ R(f(y),y))))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">P(k) ∧ (¬L(k,y) ∨ (B(y) ∧ C(f(y)) ∧ R(f(y),y)))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">P(k) ∧ (¬L(k,y) ∨ B(y)) ∧ (¬L(k,y) ∨ C(f(y))) ∧ (¬L(k,y) ∨ R(f(y),y))</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {P(k)} , {¬L(k,y), B(y)} , {¬L(k,y), C(f(y))} , {¬L(k,y), R(f(y),y)} }</span></li></ol></div>",
     "<div class=\"lx-cfb\"><p><span class=\"lf\">∃x (P(x) ∧ ∀y (L(x,y) → (B(y) ∧ ∃z (C(z) ∧ R(z,y)))))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∃x (P(x) ∧ ∀y (¬L(x,y) ∨ (B(y) ∧ ∃z (C(z) ∧ R(z,y)))))</span></li><li><b>4.</b> Skolemizar: x → k (constante de Skolem); z → f(y) (función de Skolem de y)<br><span class=\"lf\">P(k) ∧ ∀y (¬L(k,y) ∨ (B(y) ∧ C(f(y)) ∧ R(f(y),y)))</span></li><li><b>5.</b> Universales a la izquierda: <span class=\"lf\">∀y (P(k) ∧ (¬L(k,y) ∨ (B(y) ∧ C(f(y)) ∧ R(f(y),y))))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">P(k) ∧ (¬L(k,y) ∨ (B(y) ∧ C(f(y)) ∧ R(f(y),y)))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">P(k) ∧ (¬L(k,y) ∨ B(y)) ∧ (¬L(k,y) ∨ C(f(y))) ∧ (¬L(k,y) ∨ R(f(y),y))</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {P(k)} , {¬L(k,y), B(y)} , {¬L(k,y), C(f(y))} , {¬L(k,y), R(f(y),y)} }</span></li></ol></div>"
    ],
    "t": "html"
   },
   {
    "id": "u7-un-a-la-condicio",
    "t": "h",
    "x": [
     "Un ∃ a la condició",
     "Un ∃ en la condición"
    ]
   },
   {
    "h": [
     "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x ∀y (∃z (P(z,x) ∧ P(z,y)) → G(x,y))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x ∀y (¬∃z (P(z,x) ∧ P(z,y)) ∨ G(x,y))</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x ∀y (∀z (¬P(z,x) ∨ ¬P(z,y)) ∨ G(x,y))</span></li><li><b>5.</b> Universals a l'esquerra: <span class=\"lf\">∀x ∀y ∀z (¬P(z,x) ∨ ¬P(z,y) ∨ G(x,y))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬P(z,x) ∨ ¬P(z,y) ∨ G(x,y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬P(z,x), ¬P(z,y), G(x,y)} }</span></li></ol></div>",
     "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x ∀y (∃z (P(z,x) ∧ P(z,y)) → G(x,y))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x ∀y (¬∃z (P(z,x) ∧ P(z,y)) ∨ G(x,y))</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x ∀y (∀z (¬P(z,x) ∨ ¬P(z,y)) ∨ G(x,y))</span></li><li><b>5.</b> Universales a la izquierda: <span class=\"lf\">∀x ∀y ∀z (¬P(z,x) ∨ ¬P(z,y) ∨ G(x,y))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬P(z,x) ∨ ¬P(z,y) ∨ G(x,y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬P(z,x), ¬P(z,y), G(x,y)} }</span></li></ol></div>"
    ],
    "t": "html"
   }
  ],
  "u7-forma-clausal-i-equivalencia": [
   {
    "t": "p",
    "x": [
     "Tots els passos són equivalències lògiques **excepte la skolemització**, que dona una fórmula més restrictiva. Per això la forma clausal no és equivalent a la fórmula original, però sí **equisatisfactible**: una és satisfactible si i només si ho és l'altra. És tot el que necessita la resolució, que només busca si un conjunt és insatisfactible.",
     "Todos los pasos son equivalencias lógicas **excepto la skolemización**, que da una fórmula más restrictiva. Por eso la forma clausal no es equivalente a la fórmula original, pero sí **equisatisfacible**: una es satisfacible si y solo si lo es la otra. Es todo lo que necesita la resolución, que solo busca si un conjunto es insatisfacible."
    ]
   }
  ],
  "u7-errors-frequents": [
   {
    "head": [
     "Error",
     [
      "Conseqüència",
      "Consecuencia"
     ]
    ],
    "rows": [
     [
      [
       "Skolemitzar abans de portar les negacions a dins",
       "Skolemizar antes de llevar las negaciones hacia dentro"
      ],
      [
       "Es converteix en constant un quantificador que en realitat era universal",
       "Se convierte en constante un cuantificador que en realidad era universal"
      ]
     ],
     [
      [
       "Fer una constant quan l'∃ és dins d'un ∀",
       "Poner una constante cuando el ∃ está dentro de un ∀"
      ],
      [
       "Es perd la dependència: «tothom té mare» passaria a ser «tothom té la mateixa mare»",
       "Se pierde la dependencia: «todo el mundo tiene madre» pasaría a ser «todo el mundo tiene la misma madre»"
      ]
     ],
     [
      [
       "Reutilitzar un símbol de Skolem o una constant de l'enunciat",
       "Reutilizar un símbolo de Skolem o una constante del enunciado"
      ],
      [
       "S'afirmen coses que l'enunciat no diu",
       "Se afirman cosas que el enunciado no dice"
      ]
     ],
     [
      [
       "No renombrar variables (pas 3)",
       "No renombrar variables (paso 3)"
      ],
      [
       "Dos quantificadors diferents es confonen en una sola variable",
       "Dos cuantificadores diferentes se confunden en una sola variable"
      ]
     ],
     [
      [
       "Deixar una conjunció dins d'una clàusula",
       "Dejar una conjunción dentro de una cláusula"
      ],
      [
       "No és una clàusula: cal separar-la",
       "No es una cláusula: hay que separarla"
      ]
     ]
    ],
    "t": "table"
   }
  ],
  "u7-comprova-que-has-entes": [
   {
    "t": "check",
    "ex": {
     "id": "u7-comprova-que-has-entes-q1",
     "type": "mcq",
     "q": [
      "Forma clausal de `∀x ∃y S(x,y)` (tothom segueix algú):",
      "Forma clausal de `∀x ∃y S(x,y)` (todo el mundo sigue a alguien):"
     ],
     "opts": [
      "`{S(x,y)}`",
      "`{S(x,k)}`",
      "`{S(k,y)}`",
      "`{S(x,f(x))}`"
     ],
     "answer": 3,
     "sol": [
      {
       "t": "p",
       "x": [
        "L'∃y és dins del ∀x: funció de Skolem de x.",
        "El ∃y está dentro del ∀x: función de Skolem de x."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "u7-comprova-que-has-entes-q2",
     "type": "mcq",
     "q": "Forma clausal de `¬∃x (R(x) ∧ ∀y S(x,y))`:",
     "opts": [
      "`{¬R(x), ¬S(x,f(x))}`",
      "`{¬R(x), ¬S(x,y)}`",
      "`{¬R(k), ¬S(k,y)}`",
      [
       "`{¬R(x)}` i `{¬S(x,y)}`",
       "`{¬R(x)}` y `{¬S(x,y)}`"
      ]
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "Pas 2: `∀x (¬R(x) ∨ ∃y ¬S(x,y))`. L'∃y és dins del ∀x, per tant `f(x)`.",
        "Paso 2: `∀x (¬R(x) ∨ ∃y ¬S(x,y))`. El ∃y está dentro del ∀x, por lo tanto `f(x)`."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "u7-comprova-que-has-entes-q3",
     "type": "mcq",
     "q": [
      "A `∃x A(x) → B(a)`, què passa amb l'∃x?",
      "En `∃x A(x) → B(a)`, ¿qué pasa con el ∃x?"
     ],
     "opts": [
      [
       "Es converteix en una constant de Skolem",
       "Se convierte en una constante de Skolem"
      ],
      [
       "Es converteix en una funció de Skolem",
       "Se convierte en una función de Skolem"
      ],
      [
       "Es converteix en ∀x i desapareix al pas 6",
       "Se convierte en ∀x y desaparece en el paso 6"
      ],
      [
       "Es manté a la clàusula",
       "Se mantiene en la cláusula"
      ]
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "`¬∃x A(x) ∨ B(a) ≡ ∀x ¬A(x) ∨ B(a)`: clàusula `{¬A(x), B(a)}`.",
        "`¬∃x A(x) ∨ B(a) ≡ ∀x ¬A(x) ∨ B(a)`: cláusula `{¬A(x), B(a)}`."
       ]
      }
     ]
    }
   }
  ]
 },
 "examEnd": []
};
