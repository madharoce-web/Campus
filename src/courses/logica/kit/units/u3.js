// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "La taula de veritat sempre funciona, però amb moltes proposicions es fa llarguíssima. Hi ha dos mètodes que treballen amb les fórmules mateixes: la deducció amb regles d'inferència i la resolució. A l'exercici 1 dels controls es demanen tots dos.",
    "La tabla de verdad siempre funciona, pero con muchas proposiciones se hace larguísima. Hay dos métodos que trabajan con las propias fórmulas: la deducción con reglas de inferencia y la resolución. En el ejercicio 1 de los controles se piden los dos.",
    "The truth table always works, but with many propositions it becomes very long. There are two methods that work with the formulas themselves: deduction with inference rules and resolution. Exercise 1 of the tests asks for both."
   ]
  }
 ],
 "sections": {
  "u3-metode-1-deduccio-amb-regles-d-inferencia": [
   {
    "t": "p",
    "x": [
     "Es comença escrivint les premisses, una per línia, i s'hi van afegint línies noves. Cada línia nova s'ha de justificar amb una **regla** aplicada a línies anteriors. Quan s'arriba a la conclusió, el raonament queda demostrat.",
     "Se empieza escribiendo las premisas, una por línea, y se van añadiendo líneas nuevas. Cada línea nueva se tiene que justificar con una **regla** aplicada a líneas anteriores. Cuando se llega a la conclusión, el razonamiento queda demostrado.",
     "You start by writing the premises, one per line, and keep adding new lines. Each new line must be justified with a **rule** applied to earlier lines. When you reach the conclusion, the argument is proved."
    ]
   },
   {
    "id": "u3-les-regles-implicacions-logiques-del-formulari",
    "t": "h",
    "x": [
     "Les regles (implicacions lògiques del formulari)",
     "Las reglas (implicaciones lógicas del formulario)",
     "The rules (logical implications from the formula sheet)"
    ]
   },
   {
    "head": [
     "Regla",
     "De…",
     [
      "…es dedueix",
      "…se deduce",
      "…we deduce"
     ]
    ],
    "rows": [
     [
      [
       "Simplificació (eliminació de ∧)",
       "Simplificación (eliminación de ∧)",
       "Simplification (∧ elimination)"
      ],
      "`A ∧ B`",
      "`A` (o `B`)"
     ],
     [
      [
       "Introducció de ∧",
       "Introducción de ∧",
       "∧ introduction"
      ],
      "`A`, `B`",
      "`A ∧ B`"
     ],
     [
      [
       "Addició (introducció de ∨)",
       "Adición (introducción de ∨)",
       "Addition (∨ introduction)"
      ],
      "`A`",
      [
       "`A ∨ B`, per a qualsevol B",
       "`A ∨ B`, para cualquier B",
       "`A ∨ B`, for any B"
      ]
     ],
     [
      "*Modus ponens*",
      "`A`, `A → B`",
      "`B`"
     ],
     [
      "*Modus tollens*",
      "`A → B`, `¬B`",
      "`¬A`"
     ],
     [
      [
       "Sil·logisme disjuntiu",
       "Silogismo disyuntivo",
       "Disjunctive syllogism"
      ],
      "`A ∨ B`, `¬A`",
      "`B`"
     ],
     [
      [
       "Sil·logisme hipotètic (transitivitat)",
       "Silogismo hipotético (transitividad)",
       "Hypothetical syllogism (transitivity)"
      ],
      "`A → B`, `B → C`",
      "`A → C`"
     ],
     [
      [
       "Dilema constructiu",
       "Dilema constructivo",
       "Constructive dilemma"
      ],
      "`A → B`, `C → D`, `A ∨ C`",
      "`B ∨ D`"
     ],
     [
      [
       "Dilema destructiu",
       "Dilema destructivo",
       "Destructive dilemma"
      ],
      "`A → B`, `C → D`, `¬B ∨ ¬D`",
      "`¬A ∨ ¬C`"
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "A més, qualsevol línia es pot substituir per una d'**equivalent** (doble negació, implicació, contrapositiva, De Morgan, exportació, distributiva, idempotència…), citant l'equivalència.",
     "Además, cualquier línea se puede sustituir por una **equivalente** (doble negación, implicación, contrapositiva, De Morgan, exportación, distributiva, idempotencia…), citando la equivalencia.",
     "Moreover, any line can be replaced by an **equivalent** one (double negation, implication, contrapositive, De Morgan, exportation, distributivity, idempotence…), citing the equivalence."
    ]
   },
   {
    "id": "u3-exemple-resolt-l-exercici-1-del-cp2-2024-25",
    "t": "h",
    "x": [
     "Exemple resolt: l'exercici 1 del CP2 2024-25",
     "Ejemplo resuelto: el ejercicio 1 del CP2 2024-25",
     "Worked example: exercise 1 of Test 2 2024-25"
    ]
   },
   {
    "t": "p",
    "x": [
     "Premisses: `(S → ¬R) → P`, `P → (Q ∧ S)`, `(P ∧ S) → ¬R`. Conclusió: `S`.",
     "Premisas: `(S → ¬R) → P`, `P → (Q ∧ S)`, `(P ∧ S) → ¬R`. Conclusión: `S`.",
     "Premises: `(S → ¬R) → P`, `P → (Q ∧ S)`, `(P ∧ S) → ¬R`. Conclusion: `S`."
    ]
   },
   {
    "h": [
     "<div class=\"tw\"><table class=\"lx-nd\">\n<thead><tr><th>Línia</th><th>fbf</th><th>Justificació</th></tr></thead>\n<tbody>\n<tr class=\"pr\"><td>1</td><td><code>(S → ¬R) → P</code></td><td>premissa</td></tr>\n<tr class=\"pr\"><td>2</td><td><code>P → (Q ∧ S)</code></td><td>premissa</td></tr>\n<tr class=\"pr\"><td>3</td><td><code>(P ∧ S) → ¬R</code></td><td>premissa</td></tr>\n<tr><td>4</td><td><code>(P → Q) ∧ (P → S)</code></td><td>equivalència <code>A → (B ∧ C) ⇔ (A → B) ∧ (A → C)</code> (2)</td></tr>\n<tr><td>5</td><td><code>P → S</code></td><td>simplificació (4)</td></tr>\n<tr><td>6</td><td><code>(S → ¬R) → S</code></td><td>sil·logisme hipotètic (1, 5)</td></tr>\n<tr><td>7</td><td><code>¬(S → ¬R) ∨ S</code></td><td>implicació (6)</td></tr>\n<tr><td>8</td><td><code>(S ∧ R) ∨ S</code></td><td>implicació, De Morgan i doble negació (7)</td></tr>\n<tr><td>9</td><td><code>(S ∨ S) ∧ (R ∨ S)</code></td><td>distributiva (8)</td></tr>\n<tr><td>10</td><td><code>S ∨ S</code></td><td>simplificació (9)</td></tr>\n<tr><td>11</td><td><code>S</code></td><td>idempotència (10)</td></tr>\n</tbody></table></div>",
     "<div class=\"tw\"><table class=\"lx-nd\">\n<thead><tr><th>Línea</th><th>fbf</th><th>Justificación</th></tr></thead>\n<tbody>\n<tr class=\"pr\"><td>1</td><td><code>(S → ¬R) → P</code></td><td>premisa</td></tr>\n<tr class=\"pr\"><td>2</td><td><code>P → (Q ∧ S)</code></td><td>premisa</td></tr>\n<tr class=\"pr\"><td>3</td><td><code>(P ∧ S) → ¬R</code></td><td>premisa</td></tr>\n<tr><td>4</td><td><code>(P → Q) ∧ (P → S)</code></td><td>equivalencia <code>A → (B ∧ C) ⇔ (A → B) ∧ (A → C)</code> (2)</td></tr>\n<tr><td>5</td><td><code>P → S</code></td><td>simplificación (4)</td></tr>\n<tr><td>6</td><td><code>(S → ¬R) → S</code></td><td>silogismo hipotético (1, 5)</td></tr>\n<tr><td>7</td><td><code>¬(S → ¬R) ∨ S</code></td><td>implicación (6)</td></tr>\n<tr><td>8</td><td><code>(S ∧ R) ∨ S</code></td><td>implicación, De Morgan y doble negación (7)</td></tr>\n<tr><td>9</td><td><code>(S ∨ S) ∧ (R ∨ S)</code></td><td>distributiva (8)</td></tr>\n<tr><td>10</td><td><code>S ∨ S</code></td><td>simplificación (9)</td></tr>\n<tr><td>11</td><td><code>S</code></td><td>idempotencia (10)</td></tr>\n</tbody></table></div>",
     "<div class=\"tw\"><table class=\"lx-nd\">\n<thead><tr><th>Line</th><th>fbf</th><th>Justification</th></tr></thead>\n<tbody>\n<tr class=\"pr\"><td>1</td><td><code>(S → ¬R) → P</code></td><td>premise</td></tr>\n<tr class=\"pr\"><td>2</td><td><code>P → (Q ∧ S)</code></td><td>premise</td></tr>\n<tr class=\"pr\"><td>3</td><td><code>(P ∧ S) → ¬R</code></td><td>premise</td></tr>\n<tr><td>4</td><td><code>(P → Q) ∧ (P → S)</code></td><td>equivalence <code>A → (B ∧ C) ⇔ (A → B) ∧ (A → C)</code> (2)</td></tr>\n<tr><td>5</td><td><code>P → S</code></td><td>simplification (4)</td></tr>\n<tr><td>6</td><td><code>(S → ¬R) → S</code></td><td>hypothetical syllogism (1, 5)</td></tr>\n<tr><td>7</td><td><code>¬(S → ¬R) ∨ S</code></td><td>implication (6)</td></tr>\n<tr><td>8</td><td><code>(S ∧ R) ∨ S</code></td><td>implication, De Morgan and double negation (7)</td></tr>\n<tr><td>9</td><td><code>(S ∨ S) ∧ (R ∨ S)</code></td><td>distributiva (8)</td></tr>\n<tr><td>10</td><td><code>S ∨ S</code></td><td>simplification (9)</td></tr>\n<tr><td>11</td><td><code>S</code></td><td>idempotence (10)</td></tr>\n</tbody></table></div>"
    ],
    "t": "html",
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "items": [
       [
        "Mireu on apareix la conclusió dins les premisses i treballeu «cap enrere»: què em faltaria per obtenir-la?",
        "Mirad dónde aparece la conclusión dentro de las premisas y trabajad «hacia atrás»: ¿qué me faltaría para obtenerla?",
        "Look at where the conclusion appears inside the premises and work “backwards”: what would I need to obtain it?"
       ],
       [
        "Les conjuncions es trenquen de seguida amb la simplificació; les implicacions s'encadenen amb el sil·logisme hipotètic.",
        "Las conjunciones se rompen enseguida con la simplificación; las implicaciones se encadenan con el silogismo hipotético.",
        "Conjunctions are broken up straight away with simplification; implications are chained with the hypothetical syllogism."
       ],
       [
        "Truc per obtenir X: arribar a `¬X → X`. Llavors `¬¬X ∨ X`, `X ∨ X` i, per idempotència, `X`.",
        "Truco para obtener X: llegar a `¬X → X`. Entonces `¬¬X ∨ X`, `X ∨ X` y, por idempotencia, `X`.",
        "Trick to obtain X: reach `¬X → X`. Then `¬¬X ∨ X`, `X ∨ X` and, by idempotence, `X`."
       ],
       [
        "No cal fer servir totes les premisses: a l'exemple, la 3 sobra.",
        "No hace falta usar todas las premisas: en el ejemplo, la 3 sobra.",
        "You do not need to use all the premises: in the example, number 3 is not needed."
       ]
      ],
      "t": "list"
     }
    ],
    "t": "tip",
    "title": [
     "Estratègia",
     "Estrategia",
     "Strategy"
    ],
    "mode": "explained"
   }
  ],
  "u3-forma-clausal-en-cp0": [
   {
    "t": "p",
    "x": [
     "La resolució no treballa amb fórmules qualssevol, sinó amb **clàusules**. Abans cal conèixer tres termes:",
     "La resolución no trabaja con fórmulas cualesquiera, sino con **cláusulas**. Antes hay que conocer tres términos:",
     "Resolution does not work with arbitrary formulas, but with **clauses**. First you need to know three terms:"
    ]
   },
   {
    "head": [
     [
      "Terme",
      "Término",
      "Term"
     ],
     [
      "Què és",
      "Qué es",
      "What it is"
     ],
     [
      "Exemple",
      "Ejemplo",
      "Example"
     ]
    ],
    "rows": [
     [
      "Literal",
      [
       "Un àtom o un àtom negat",
       "Un átomo o un átomo negado",
       "An atom or a negated atom"
      ],
      "`P`, `¬Q`"
     ],
     [
      [
       "Clàusula",
       "Cláusula",
       "Clause"
      ],
      [
       "Disjunció de literals; s'escriu com a conjunt",
       "Disyunción de literales; se escribe como conjunto",
       "Disjunction of literals; written as a set"
      ],
      "`¬P ∨ Q` = `{¬P, Q}`"
     ],
     [
      "Forma normal conjuntiva (FNC)",
      [
       "Conjunció de clàusules",
       "Conjunción de cláusulas",
       "Conjunction of clauses"
      ],
      "`(¬P ∨ Q) ∧ (R)`"
     ],
     [
      [
       "Clàusula buida `□`",
       "Cláusula vacía `□`",
       "Empty clause `□`"
      ],
      [
       "Clàusula sense cap literal: sempre falsa",
       "Cláusula sin ningún literal: siempre falsa",
       "Clause with no literal: always false"
      ],
      [
       "surt de resoldre `{P}` amb `{¬P}`",
       "sale de resolver `{P}` con `{¬P}`",
       "it comes from resolving `{P}` with `{¬P}`"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "id": "u3-algorisme-en-tres-passos",
    "t": "h",
    "x": [
     "Algorisme en tres passos",
     "Algoritmo en tres pasos",
     "Algorithm in three steps"
    ]
   },
   {
    "h": [
     "<ol class=\"steps\">\n<li><b>Eliminar les implicacions</b>: <code>A → B ≡ ¬A ∨ B</code> i <code>A ↔ B ≡ (¬A ∨ B) ∧ (¬B ∨ A)</code>.</li>\n<li><b>Ficar les negacions cap a dins</b> fins que toquin àtoms: De Morgan i doble negació.</li>\n<li><b>Distribuir ∨ sobre ∧</b> fins a tenir una conjunció de disjuncions: <code>A ∨ (B ∧ C) ≡ (A ∨ B) ∧ (A ∨ C)</code>. Cada conjunt és una clàusula.</li>\n</ol>",
     "<ol class=\"steps\">\n<li><b>Eliminar las implicaciones</b>: <code>A → B ≡ ¬A ∨ B</code> y <code>A ↔ B ≡ (¬A ∨ B) ∧ (¬B ∨ A)</code>.</li>\n<li><b>Meter las negaciones hacia dentro</b> hasta que toquen átomos: De Morgan y doble negación.</li>\n<li><b>Distribuir ∨ sobre ∧</b> hasta tener una conjunción de disyunciones: <code>A ∨ (B ∧ C) ≡ (A ∨ B) ∧ (A ∨ C)</code>. Cada conjunto es una cláusula.</li>\n</ol>",
     "<ol class=\"steps\">\n<li><b>Eliminate implications</b>: <code>A → B ≡ ¬A ∨ B</code> and <code>A ↔ B ≡ (¬A ∨ B) ∧ (¬B ∨ A)</code>.</li>\n<li><b>Push negations inwards</b> until they touch atoms: De Morgan and double negation.</li>\n<li><b>Distribute ∨ over ∧</b> until you have a conjunction of disjunctions: <code>A ∨ (B ∧ C) ≡ (A ∨ B) ∧ (A ∨ C)</code>. Each set is a clause.</li>\n</ol>"
    ],
    "t": "html"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "1: `¬(¬S ∨ ¬R) ∨ P` · 2: `(S ∧ R) ∨ P` · 3: `(S ∨ P) ∧ (R ∨ P)` → clàusules `{S, P}` i `{R, P}`.",
       "1: `¬(¬S ∨ ¬R) ∨ P` · 2: `(S ∧ R) ∨ P` · 3: `(S ∨ P) ∧ (R ∨ P)` → cláusulas `{S, P}` y `{R, P}`.",
       "1: `¬(¬S ∨ ¬R) ∨ P` · 2: `(S ∧ R) ∨ P` · 3: `(S ∨ P) ∧ (R ∨ P)` → clauses `{S, P}` and `{R, P}`."
      ]
     }
    ],
    "t": "example",
    "title": [
     "Exemple: (¬S ∨ ¬R) → P",
     "Ejemplo: (¬S ∨ ¬R) → P",
     "Example: (¬S ∨ ¬R) → P"
    ],
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "items": [
       [
        "Oblidar que `¬(A ∧ B)` passa a `¬A ∨ ¬B` (canvia la connectiva).",
        "Olvidar que `¬(A ∧ B)` pasa a `¬A ∨ ¬B` (cambia la conectiva).",
        "Forgetting that `¬(A ∧ B)` becomes `¬A ∨ ¬B` (the connective changes)."
       ],
       [
        "Deixar `(A ∧ B) ∨ C` sense distribuir: no és una FNC.",
        "Dejar `(A ∧ B) ∨ C` sin distribuir: no es una FNC.",
        "Leaving `(A ∧ B) ∨ C` undistributed: it is not a CNF."
       ],
       [
        "Escriure una conjunció dins d'una clàusula: `{A ∧ B}` no és una clàusula; són dues, `{A}` i `{B}`.",
        "Escribir una conjunción dentro de una cláusula: `{A ∧ B}` no es una cláusula; son dos, `{A}` y `{B}`.",
        "Writing a conjunction inside a clause: `{A ∧ B}` is not a clause; they are two, `{A}` and `{B}`."
       ]
      ],
      "t": "list"
     }
    ],
    "t": "warn",
    "title": [
     "Errors freqüents",
     "Errores frecuentes",
     "Common mistakes"
    ]
   }
  ],
  "u3-metode-2-resolucio": [
   {
    "id": "u3-el-principi-de-resolucio",
    "t": "h",
    "x": [
     "El principi de resolució",
     "El principio de resolución",
     "The resolution principle"
    ]
   },
   {
    "t": "p",
    "x": [
     "Si dues clàusules contenen un literal i el seu contrari, es poden combinar en una de nova, la **resolvent**, que conté tots els altres literals.",
     "Si dos cláusulas contienen un literal y su contrario, se pueden combinar en una nueva, la **resolvente**, que contiene todos los demás literales.",
     "If two clauses contain a literal and its opposite, they can be combined into a new one, the **resolvent**, which contains all the other literals."
    ]
   },
   {
    "caption": [
     "Si `¬P ∨ Q` i `P ∨ R` són certes: o bé P és fals i llavors Q és cert, o bé P és cert i llavors R és cert. En tot cas, `Q ∨ R`.",
     "Si `¬P ∨ Q` y `P ∨ R` son ciertas: o bien P es falso y entonces Q es cierto, o bien P es cierto y entonces R es cierto. En cualquier caso, `Q ∨ R`.",
     "If `¬P ∨ Q` and `P ∨ R` are true: either P is false and then Q is true, or P is true and then R is true. In any case, `Q ∨ R`."
    ],
    "cls": "vz",
    "svg": [
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 170\" role=\"img\" aria-label=\"Resolució de {¬P, Q} i {P, R} sobre P dona {Q, R}\">\n<rect class=\"vz-bx\" x=\"70\" y=\"20\" width=\"170\" height=\"40\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"155\" y=\"45\" text-anchor=\"middle\">{ <tspan class=\"vz-cD\">¬P</tspan>, Q }</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"20\" width=\"170\" height=\"40\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"485\" y=\"45\" text-anchor=\"middle\">{ <tspan class=\"vz-cD\">P</tspan>, R }</text>\n<path class=\"vz-ln\" d=\"M155 60 L300 112\"></path><path class=\"vz-ln\" d=\"M485 60 L340 112\"></path>\n<rect class=\"vz-bx\" x=\"235\" y=\"112\" width=\"170\" height=\"40\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"320\" y=\"137\" text-anchor=\"middle\">{ Q, R }</text>\n<text class=\"vz-sm\" x=\"320\" y=\"84\" text-anchor=\"middle\">P i ¬P s'eliminen</text>\n</svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 170\" role=\"img\" aria-label=\"Resolución de {¬P, Q} y {P, R} sobre P da {Q, R}\">\n<rect class=\"vz-bx\" x=\"70\" y=\"20\" width=\"170\" height=\"40\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"155\" y=\"45\" text-anchor=\"middle\">{ <tspan class=\"vz-cD\">¬P</tspan>, Q }</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"20\" width=\"170\" height=\"40\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"485\" y=\"45\" text-anchor=\"middle\">{ <tspan class=\"vz-cD\">P</tspan>, R }</text>\n<path class=\"vz-ln\" d=\"M155 60 L300 112\"></path><path class=\"vz-ln\" d=\"M485 60 L340 112\"></path>\n<rect class=\"vz-bx\" x=\"235\" y=\"112\" width=\"170\" height=\"40\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"320\" y=\"137\" text-anchor=\"middle\">{ Q, R }</text>\n<text class=\"vz-sm\" x=\"320\" y=\"84\" text-anchor=\"middle\">P y ¬P se eliminan</text>\n</svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 170\" role=\"img\" aria-label=\"Resolving {¬P, Q} and {P, R} on P gives {Q, R}\">\n<rect class=\"vz-bx\" x=\"70\" y=\"20\" width=\"170\" height=\"40\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"155\" y=\"45\" text-anchor=\"middle\">{ <tspan class=\"vz-cD\">¬P</tspan>, Q }</text>\n<rect class=\"vz-bx\" x=\"400\" y=\"20\" width=\"170\" height=\"40\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"485\" y=\"45\" text-anchor=\"middle\">{ <tspan class=\"vz-cD\">P</tspan>, R }</text>\n<path class=\"vz-ln\" d=\"M155 60 L300 112\"></path><path class=\"vz-ln\" d=\"M485 60 L340 112\"></path>\n<rect class=\"vz-bx\" x=\"235\" y=\"112\" width=\"170\" height=\"40\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"320\" y=\"137\" text-anchor=\"middle\">{ Q, R }</text>\n<text class=\"vz-sm\" x=\"320\" y=\"84\" text-anchor=\"middle\">P and ¬P cancel out</text>\n</svg></div>"
    ],
    "t": "diagram",
    "mode": "explained"
   },
   {
    "id": "u3-la-prova-per-refutacio",
    "t": "h",
    "x": [
     "La prova per refutació",
     "La prueba por refutación",
     "Proof by refutation"
    ]
   },
   {
    "t": "p",
    "x": [
     "Per demostrar que `A₁, …, Aₙ ⇒ B` es demostra que les premisses juntament amb `¬B` són insatisfactibles:",
     "Para demostrar que `A₁, …, Aₙ ⇒ B` se demuestra que las premisas junto con `¬B` son insatisfacibles:",
     "To prove that `A₁, …, Aₙ ⇒ B` we prove that the premises together with `¬B` are unsatisfiable:"
    ]
   },
   {
    "h": [
     "<ol class=\"steps\">\n<li><b>Negueu la conclusió</b> i afegiu-la a les premisses.</li>\n<li><b>Passeu-ho tot a forma clausal</b> i numereu les clàusules: C1, C2, …</li>\n<li><b>Resoleu</b> parelles de clàusules. Comenceu per la clàusula de la conclusió negada i feu servir el resultat a la resolució següent (resolució lineal).</li>\n<li>Si arribeu a <code>□</code>, hi ha contradicció: <b>el raonament és vàlid</b>.</li>\n</ol>",
     "<ol class=\"steps\">\n<li><b>Negad la conclusión</b> y añadidla a las premisas.</li>\n<li><b>Pasadlo todo a forma clausal</b> y numerad las cláusulas: C1, C2, …</li>\n<li><b>Resolved</b> parejas de cláusulas. Empezad por la cláusula de la conclusión negada y usad el resultado en la resolución siguiente (resolución lineal).</li>\n<li>Si llegáis a <code>□</code>, hay contradicción: <b>el razonamiento es válido</b>.</li>\n</ol>",
     "<ol class=\"steps\">\n<li><b>Negate the conclusion</b> and add it to the premises.</li>\n<li><b>Put everything into clausal form</b> and number the clauses: C1, C2, …</li>\n<li><b>Resolve</b> pairs of clauses. Start with the clause of the negated conclusion and use the result in the next resolution (linear resolution).</li>\n<li>If you reach <code>□</code>, there is a contradiction: <b>the argument is valid</b>.</li>\n</ol>"
    ],
    "t": "html"
   },
   {
    "id": "u3-exemple-resolt-l-exercici-1-del-cp1",
    "t": "h",
    "x": [
     "Exemple resolt: l'exercici 1 del CP1",
     "Ejemplo resuelto: el ejercicio 1 del CP1",
     "Worked example: exercise 1 of Test 1"
    ]
   },
   {
    "t": "p",
    "x": [
     "Premisses `(¬S ∨ ¬R) → P`, `(P → Q) ∧ (¬S → ¬P)`, `(P ∧ S) → ¬R`; conclusió `S`. Negada: `¬S`.",
     "Premisas `(¬S ∨ ¬R) → P`, `(P → Q) ∧ (¬S → ¬P)`, `(P ∧ S) → ¬R`; conclusión `S`. Negada: `¬S`.",
     "Premises `(¬S ∨ ¬R) → P`, `(P → Q) ∧ (¬S → ¬P)`, `(P ∧ S) → ¬R`; conclusion `S`. Negated: `¬S`."
    ]
   },
   {
    "t": "p",
    "x": [
     "Clàusules: C1 = `{S, P}`, C2 = `{R, P}`, C3 = `{¬P, Q}`, C4 = `{S, ¬P}`, C5 = `{¬P, ¬S, ¬R}`, C6 = `{¬S}`.",
     "Cláusulas: C1 = `{S, P}`, C2 = `{R, P}`, C3 = `{¬P, Q}`, C4 = `{S, ¬P}`, C5 = `{¬P, ¬S, ¬R}`, C6 = `{¬S}`.",
     "Clauses: C1 = `{S, P}`, C2 = `{R, P}`, C3 = `{¬P, Q}`, C4 = `{S, ¬P}`, C5 = `{¬P, ¬S, ¬R}`, C6 = `{¬S}`."
    ]
   },
   {
    "t": "list",
    "items": [
     "R1 = res(C6, C1) = `{P}`",
     "R2 = res(R1, C4) = `{S}`",
     "R3 = res(R2, C6) = `□`"
    ]
   },
   {
    "svg": [
     "<svg viewBox=\"0 0 294 256\" width=\"294\" height=\"256\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"14\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{S, P}</text><text class=\"lx-lb\" x=\"246.8\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{S, ¬P}</text><text class=\"lx-lb\" x=\"250.7\" y=\"90\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{S}</text><text class=\"lx-lb\" x=\"43.9\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"180.3\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"239.2\" y=\"148\" text-anchor=\"start\">C6</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
     "<svg viewBox=\"0 0 294 256\" width=\"294\" height=\"256\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"14\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{S, P}</text><text class=\"lx-lb\" x=\"246.8\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{S, ¬P}</text><text class=\"lx-lb\" x=\"250.7\" y=\"90\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{S}</text><text class=\"lx-lb\" x=\"43.9\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"180.3\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"239.2\" y=\"148\" text-anchor=\"start\">C6</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
     "<svg viewBox=\"0 0 294 256\" width=\"294\" height=\"256\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"14\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{S, P}</text><text class=\"lx-lb\" x=\"246.8\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{S, ¬P}</text><text class=\"lx-lb\" x=\"250.7\" y=\"90\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{S}</text><text class=\"lx-lb\" x=\"43.9\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"180.3\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"239.2\" y=\"148\" text-anchor=\"start\">C6</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"206\" text-anchor=\"end\">R3</text></svg>"
    ],
    "t": "diagram",
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "S'ha obtingut la clàusula buida: el conjunt és insatisfactible i S és conseqüència lògica de les premisses. Teniu deu raonaments més, amb resolució i deducció, a [Raonaments en CP0](/logica/xr).",
     "Se ha obtenido la cláusula vacía: el conjunto es insatisfacible y S es consecuencia lógica de las premisas. Tenéis diez razonamientos más, con resolución y deducción, en [Razonamientos en CP0](/logica/xr).",
     "The empty clause has been obtained: the set is unsatisfiable and S is a logical consequence of the premises. You have ten more arguments, with resolution and deduction, in [Arguments in CP0](/logica/xr)."
    ],
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "En CP0 la resolució és **decidible**: si després de provar totes les parelles possibles no apareix `□`, el conjunt és satisfactible i el raonament **no** és vàlid. Per exemple, amb `{¬C, E}` i `{¬T}` no hi ha cap parell de literals contraris: no es pot resoldre res.",
       "En CP0 la resolución es **decidible**: si después de probar todas las parejas posibles no aparece `□`, el conjunto es satisfacible y el razonamiento **no** es válido. Por ejemplo, con `{¬C, E}` y `{¬T}` no hay ningún par de literales contrarios: no se puede resolver nada.",
       "In CP0 resolution is **decidable**: if after trying all possible pairs `□` does not appear, the set is satisfiable and the argument is **not** valid. For example, with `{¬C, E}` and `{¬T}` there is no pair of opposite literals: nothing can be resolved."
      ]
     }
    ],
    "t": "note",
    "title": [
     "I si no s'arriba a □?",
     "¿Y si no se llega a □?",
     "And if □ is not reached?"
    ],
    "mode": "explained"
   }
  ],
  "u3-comprova-que-has-entes": [
   {
    "t": "check",
    "ex": {
     "id": "u3-comprova-que-has-entes-q1",
     "type": "mcq",
     "q": [
      "De `P → Q` i `¬Q`, què es dedueix i amb quina regla?",
      "De `P → Q` y `¬Q`, ¿qué se deduce y con qué regla?",
      "From `P → Q` and `¬Q`, what is deduced and with which rule?"
     ],
     "opts": [
      [
       "`¬P` per *modus ponens*",
       "`¬P` por *modus ponens*",
       "`¬P` by *modus ponens*"
      ],
      [
       "`P` per *modus tollens*",
       "`P` por *modus tollens*",
       "`P` by *modus tollens*"
      ],
      [
       "`¬P` per *modus tollens*",
       "`¬P` por *modus tollens*",
       "`¬P` by *modus tollens*"
      ],
      [
       "Res: falta saber P",
       "Nada: falta saber P",
       "Nothing: we need to know P"
      ]
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "*Modus tollens*: si P portés a Q i Q és fals, P ha de ser fals.",
        "*Modus tollens*: si P llevara a Q y Q es falso, P tiene que ser falso.",
        "*Modus tollens*: if P led to Q and Q is false, P must be false."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "u3-comprova-que-has-entes-q2",
     "type": "mcq",
     "q": [
      "Quina és la resolvent de `{¬A, B, C}` i `{A, ¬C}`?",
      "¿Cuál es la resolvente de `{¬A, B, C}` y `{A, ¬C}`?",
      "What is the resolvent of `{¬A, B, C}` and `{A, ¬C}`?"
     ],
     "opts": [
      [
       "No es poden resoldre en un sol pas sobre tots dos àtoms: cal triar A (dona `{B, C, ¬C}`) o C (dona `{¬A, B, A}`)",
       "No se pueden resolver en un solo paso sobre los dos átomos: hay que elegir A (da `{B, C, ¬C}`) o C (da `{¬A, B, A}`)",
       "They cannot be resolved in a single step on both atoms: you must choose A (gives `{B, C, ¬C}`) or C (gives `{¬A, B, A}`)"
      ],
      "`{B}`",
      "`□`",
      "`{B, C}`"
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "Cada pas de resolució elimina **un sol** parell de literals complementaris. Eliminar-ne dos alhora és un error típic (i aquí totes dues resolvents són tautològiques).",
        "Cada paso de resolución elimina **un solo** par de literales complementarios. Eliminar dos a la vez es un error típico (y aquí las dos resolventes son tautológicas).",
        "Each resolution step removes **a single** pair of complementary literals. Removing two at once is a typical mistake (and here both resolvents are tautological)."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "u3-comprova-que-has-entes-q3",
     "type": "mcq",
     "q": [
      "Quina és la forma clausal de `¬(P → Q)`?",
      "¿Cuál es la forma clausal de `¬(P → Q)`?",
      "What is the clausal form of `¬(P → Q)`?"
     ],
     "opts": [
      "`{¬P, Q}`",
      "`{¬P, ¬Q}`",
      "`{P, ¬Q}`",
      [
       "`{P}` i `{¬Q}`",
       "`{P}` y `{¬Q}`",
       "`{P}` and `{¬Q}`"
      ]
     ],
     "answer": 3,
     "sol": [
      {
       "t": "p",
       "x": [
        "`¬(¬P ∨ Q) ≡ P ∧ ¬Q`: és una conjunció, per tant dues clàusules.",
        "`¬(¬P ∨ Q) ≡ P ∧ ¬Q`: es una conjunción, por tanto dos cláusulas.",
        "`¬(¬P ∨ Q) ≡ P ∧ ¬Q`: it is a conjunction, so two clauses."
       ]
      }
     ]
    }
   }
  ]
 },
 "examEnd": [
  {
   "ref": "lg-r1"
  },
  {
   "ref": "lg-r2"
  },
  {
   "ref": "lg-r3"
  },
  {
   "ref": "lg-r5"
  }
 ]
};
