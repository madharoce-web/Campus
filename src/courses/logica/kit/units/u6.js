// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "En CP0 una interpretació era una fila de la taula. En CP1 és un «món» sencer: un conjunt d'objectes i el significat de cada símbol. Saber avaluar una fórmula en un món petit ajuda molt a comprovar si una formalització és correcta.",
    "En CP0 una interpretación era una fila de la tabla. En CP1 es un «mundo» entero: un conjunto de objetos y el significado de cada símbolo. Saber evaluar una fórmula en un mundo pequeño ayuda mucho a comprobar si una formalización es correcta.",
    "In CP0 an interpretation was a row of the table. In CP1 it is a whole “world”: a set of objects and the meaning of each symbol. Knowing how to evaluate a formula in a small world helps a lot to check whether a formalisation is correct."
   ]
  }
 ],
 "sections": {
  "u6-que-es-una-interpretacio": [
   {
    "t": "p",
    "x": [
     "Una interpretació I té dues parts:",
     "Una interpretación I tiene dos partes:",
     "An interpretation I has two parts:"
    ]
   },
   {
    "items": [
     [
      "Un **domini** D: el conjunt d'objectes de què es parla (no pot ser buit).",
      "Un **dominio** D: el conjunto de objetos de los que se habla (no puede ser vacío).",
      "A **domain** D: the set of objects being talked about (it cannot be empty)."
     ],
     [
      "El **significat de cada símbol**: a cada constant li correspon un objecte de D; a cada funció, una funció de D en D; a cada predicat unari, un subconjunt de D; a cada predicat binari, un conjunt de parelles.",
      "El **significado de cada símbolo**: a cada constante le corresponde un objeto de D; a cada función, una función de D en D; a cada predicado unario, un subconjunto de D; a cada predicado binario, un conjunto de pares.",
      "The **meaning of each symbol**: each constant corresponds to an object of D; each function, to a function from D to D; each unary predicate, to a subset of D; each binary predicate, to a set of pairs."
     ]
    ],
    "t": "list"
   },
   {
    "caption": [
     "La interpretació de l'exemple, com a món: tres objectes, el predicat `P` com el conjunt que els envolta, la relació `Q` com a fletxes i la funció `f` com a fletxes discontínues. Per avaluar `Q(f(Joan), Pep)` se segueix primer la fletxa discontínua de Joan (arriba a Maria) i després es mira si hi ha fletxa contínua de Maria a Pep: n'hi ha, és T.",
     "La interpretación del ejemplo, como un mundo: tres objetos, el predicado `P` como el conjunto que los rodea, la relación `Q` como flechas y la función `f` como flechas discontinuas. Para evaluar `Q(f(Joan), Pep)` se sigue primero la flecha discontinua de Joan (llega a Maria) y después se mira si hay flecha continua de Maria a Pep: la hay, es T.",
     "The interpretation of the example, as a world: three objects, the predicate `P` as the set that surrounds them, the relation `Q` as arrows and the function `f` as dashed arrows. To evaluate `Q(f(Joan), Pep)` you first follow Joan's dashed arrow (it reaches Maria) and then check whether there is a solid arrow from Maria to Pep: there is, it is T."
    ],
    "cls": "vz",
    "svg": [
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 330\" role=\"img\" aria-label=\"Una interpretació dibuixada\"><defs><marker id=\"ar-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><rect x=\"20.0\" y=\"20.0\" width=\"600.0\" height=\"270.0\" rx=\"18\" class=\"vz-dom\"></rect><text x=\"600.0\" y=\"46.0\" class=\"vz-dl\" text-anchor=\"end\">D</text><ellipse cx=\"245\" cy=\"156\" rx=\"152\" ry=\"58\" transform=\"rotate(-40.5 245 156)\" class=\"vz-set\"></ellipse><text x=\"92.0\" y=\"112.0\" class=\"vz-lab vz-tA\" text-anchor=\"start\">I(P)</text><text x=\"92.0\" y=\"128.0\" class=\"vz-sm\" text-anchor=\"start\">estudiants EIA</text><line x1=\"184.0\" y1=\"220.0\" x2=\"456.0\" y2=\"220.0\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><line x1=\"309.4\" y1=\"101.1\" x2=\"180.6\" y2=\"210.9\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><line x1=\"330.6\" y1=\"101.1\" x2=\"459.4\" y2=\"210.9\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><path d=\"M180.6 210.9 Q220.3 127.1 309.4 101.1\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></path><path d=\"M330.6 101.1 Q419.7 127.1 459.4 210.9\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></path><path d=\"M456.0 220.0 Q320.0 266.0 184.0 220.0\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></path><circle cx=\"170.0\" cy=\"220.0\" r=\"8.0\" class=\"vz-dot\"></circle><text x=\"170.0\" y=\"250.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Joan</text><circle cx=\"320.0\" cy=\"92.0\" r=\"8.0\" class=\"vz-dot\"></circle><text x=\"320.0\" y=\"76.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Maria</text><circle cx=\"470.0\" cy=\"220.0\" r=\"8.0\" class=\"vz-dot\"></circle><text x=\"470.0\" y=\"250.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Pep</text><line x1=\"40.0\" y1=\"312.0\" x2=\"76.0\" y2=\"312.0\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><text x=\"84.0\" y=\"316.0\" class=\"vz-sm\" text-anchor=\"start\">Q(x, y): x és millor estudiant que y</text><line x1=\"350.0\" y1=\"312.0\" x2=\"386.0\" y2=\"312.0\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></line><text x=\"394.0\" y=\"316.0\" class=\"vz-sm\" text-anchor=\"start\">f(x): el següent de x</text></svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 330\" role=\"img\" aria-label=\"Una interpretación dibujada\"><defs><marker id=\"ar-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><rect x=\"20.0\" y=\"20.0\" width=\"600.0\" height=\"270.0\" rx=\"18\" class=\"vz-dom\"></rect><text x=\"600.0\" y=\"46.0\" class=\"vz-dl\" text-anchor=\"end\">D</text><ellipse cx=\"245\" cy=\"156\" rx=\"152\" ry=\"58\" transform=\"rotate(-40.5 245 156)\" class=\"vz-set\"></ellipse><text x=\"92.0\" y=\"112.0\" class=\"vz-lab vz-tA\" text-anchor=\"start\">I(P)</text><text x=\"92.0\" y=\"128.0\" class=\"vz-sm\" text-anchor=\"start\">estudiantes EIA</text><line x1=\"184.0\" y1=\"220.0\" x2=\"456.0\" y2=\"220.0\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><line x1=\"309.4\" y1=\"101.1\" x2=\"180.6\" y2=\"210.9\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><line x1=\"330.6\" y1=\"101.1\" x2=\"459.4\" y2=\"210.9\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><path d=\"M180.6 210.9 Q220.3 127.1 309.4 101.1\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></path><path d=\"M330.6 101.1 Q419.7 127.1 459.4 210.9\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></path><path d=\"M456.0 220.0 Q320.0 266.0 184.0 220.0\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></path><circle cx=\"170.0\" cy=\"220.0\" r=\"8.0\" class=\"vz-dot\"></circle><text x=\"170.0\" y=\"250.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Joan</text><circle cx=\"320.0\" cy=\"92.0\" r=\"8.0\" class=\"vz-dot\"></circle><text x=\"320.0\" y=\"76.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Maria</text><circle cx=\"470.0\" cy=\"220.0\" r=\"8.0\" class=\"vz-dot\"></circle><text x=\"470.0\" y=\"250.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Pep</text><line x1=\"40.0\" y1=\"312.0\" x2=\"76.0\" y2=\"312.0\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><text x=\"84.0\" y=\"316.0\" class=\"vz-sm\" text-anchor=\"start\">Q(x, y): x es mejor estudiante que y</text><line x1=\"350.0\" y1=\"312.0\" x2=\"386.0\" y2=\"312.0\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></line><text x=\"394.0\" y=\"316.0\" class=\"vz-sm\" text-anchor=\"start\">f(x): el siguiente de x</text></svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 330\" role=\"img\" aria-label=\"An interpretation drawn out\"><defs><marker id=\"ar-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><rect x=\"20.0\" y=\"20.0\" width=\"600.0\" height=\"270.0\" rx=\"18\" class=\"vz-dom\"></rect><text x=\"600.0\" y=\"46.0\" class=\"vz-dl\" text-anchor=\"end\">D</text><ellipse cx=\"245\" cy=\"156\" rx=\"152\" ry=\"58\" transform=\"rotate(-40.5 245 156)\" class=\"vz-set\"></ellipse><text x=\"92.0\" y=\"112.0\" class=\"vz-lab vz-tA\" text-anchor=\"start\">I(P)</text><text x=\"92.0\" y=\"128.0\" class=\"vz-sm\" text-anchor=\"start\">EIA students</text><line x1=\"184.0\" y1=\"220.0\" x2=\"456.0\" y2=\"220.0\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><line x1=\"309.4\" y1=\"101.1\" x2=\"180.6\" y2=\"210.9\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><line x1=\"330.6\" y1=\"101.1\" x2=\"459.4\" y2=\"210.9\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><path d=\"M180.6 210.9 Q220.3 127.1 309.4 101.1\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></path><path d=\"M330.6 101.1 Q419.7 127.1 459.4 210.9\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></path><path d=\"M456.0 220.0 Q320.0 266.0 184.0 220.0\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></path><circle cx=\"170.0\" cy=\"220.0\" r=\"8.0\" class=\"vz-dot\"></circle><text x=\"170.0\" y=\"250.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Joan</text><circle cx=\"320.0\" cy=\"92.0\" r=\"8.0\" class=\"vz-dot\"></circle><text x=\"320.0\" y=\"76.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Maria</text><circle cx=\"470.0\" cy=\"220.0\" r=\"8.0\" class=\"vz-dot\"></circle><text x=\"470.0\" y=\"250.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Pep</text><line x1=\"40.0\" y1=\"312.0\" x2=\"76.0\" y2=\"312.0\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><text x=\"84.0\" y=\"316.0\" class=\"vz-sm\" text-anchor=\"start\">Q(x, y): x is a better student than y</text><line x1=\"350.0\" y1=\"312.0\" x2=\"386.0\" y2=\"312.0\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></line><text x=\"394.0\" y=\"316.0\" class=\"vz-sm\" text-anchor=\"start\">f(x): the one after x</text></svg></div>"
    ],
    "t": "diagram",
    "mode": "explained"
   }
  ],
  "u6-quan-es-certa-una-formula": [
   {
    "items": [
     [
      "Un àtom `P(t)` és cert si l'objecte que designa t és dins del conjunt de P.",
      "Un átomo `P(t)` es cierto si el objeto que designa t está dentro del conjunto de P.",
      "An atom `P(t)` is true if the object that t denotes is inside the set of P."
     ],
     [
      "Les connectives funcionen exactament com en CP0.",
      "Las conectivas funcionan exactamente como en CP0.",
      "The connectives work exactly as in CP0."
     ],
     [
      "`∀x A` és certa si A és certa **per a cada** objecte del domini posat en lloc de x.",
      "`∀x A` es cierta si A es cierta **para cada** objeto del dominio puesto en lugar de x.",
      "`∀x A` is true if A is true **for each** object of the domain put in place of x."
     ],
     [
      "`∃x A` és certa si A és certa **per a algun** objecte.",
      "`∃x A` es cierta si A es cierta **para algún** objeto.",
      "`∃x A` is true if A is true **for some** object."
     ]
    ],
    "t": "list"
   },
   {
    "id": "u6-exemple-en-un-domini-de-tres-persones",
    "t": "h",
    "x": [
     "Exemple en un domini de tres persones",
     "Ejemplo en un dominio de tres personas",
     "Example in a domain of three people"
    ]
   },
   {
    "t": "p",
    "x": [
     "D = {anna, biel, carla}. `E` (és estudiant) = {anna, biel}. `T` (treballa) = {biel, carla}.",
     "D = {anna, biel, carla}. `E` (es estudiante) = {anna, biel}. `T` (trabaja) = {biel, carla}.",
     "D = {anna, biel, carla}. `E` (is a student) = {anna, biel}. `T` (works) = {biel, carla}."
    ]
   },
   {
    "t": "html",
    "h": "<div class=\"tw\"><table class=\"lx-tt\">\n<thead><tr><th>x</th><th>E(x)</th><th>T(x)</th><th>E(x) → T(x)</th><th>E(x) ∧ T(x)</th></tr></thead>\n<tbody>\n<tr><td>anna</td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td></tr>\n<tr><td>biel</td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td></tr>\n<tr><td>carla</td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td></tr>\n</tbody></table></div>",
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "`∀x (E(x) → T(x))` és **falsa**: la fila d'anna és F (l'anna és estudiant i no treballa). `∃x (E(x) ∧ T(x))` és **certa**: la fila del biel és T. Un `∀` és com una conjunció de totes les files; un `∃`, com una disjunció.",
     "`∀x (E(x) → T(x))` es **falsa**: la fila de anna es F (Anna es estudiante y no trabaja). `∃x (E(x) ∧ T(x))` es **cierta**: la fila de biel es T. Un `∀` es como una conjunción de todas las filas; un `∃`, como una disyunción.",
     "`∀x (E(x) → T(x))` is **false**: anna's row is F (Anna is a student and does not work). `∃x (E(x) ∧ T(x))` is **true**: biel's row is T. A `∀` is like a conjunction of all the rows; an `∃`, like a disjunction."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Imagineu un domini de dues o tres persones on la frase sigui clarament certa (o falsa) i avalueu-hi la vostra fórmula. Si dona un altre valor, la fórmula no diu el que volíeu.",
       "Imaginad un dominio de dos o tres personas donde la frase sea claramente cierta (o falsa) y evaluad en él vuestra fórmula. Si da otro valor, la fórmula no dice lo que queríais.",
       "Imagine a domain of two or three people where the sentence is clearly true (or false) and evaluate your formula in it. If it gives another value, the formula does not say what you wanted."
      ]
     }
    ],
    "t": "tip",
    "title": [
     "Per comprovar una formalització",
     "Para comprobar una formalización",
     "To check a formalisation"
    ],
    "mode": "explained"
   }
  ],
  "u6-model-validesa-i-consequencia": [
   {
    "t": "p",
    "x": [
     "Les definicions són les mateixes que en CP0, canviant «fila de la taula» per «interpretació»:",
     "Las definiciones son las mismas que en CP0, cambiando «fila de la tabla» por «interpretación»:",
     "The definitions are the same as in CP0, replacing “row of the table” by “interpretation”:"
    ]
   },
   {
    "head": [
     [
      "Concepte",
      "Concepto",
      "Concept"
     ],
     [
      "Definició en CP1",
      "Definición en CP1",
      "Definition in CP1"
     ]
    ],
    "rows": [
     [
      [
       "Model de A",
       "Modelo de A",
       "Model of A"
      ],
      [
       "Una interpretació on A és certa",
       "Una interpretación donde A es cierta",
       "An interpretation where A is true"
      ]
     ],
     [
      [
       "A és vàlida",
       "A es válida",
       "A is valid"
      ],
      [
       "Certa en **totes** les interpretacions (de qualsevol domini)",
       "Cierta en **todas** las interpretaciones (de cualquier dominio)",
       "True in **every** interpretation (of any domain)"
      ]
     ],
     [
      [
       "A és insatisfactible",
       "A es insatisfacible",
       "A is unsatisfiable"
      ],
      [
       "No té cap model",
       "No tiene ningún modelo",
       "It has no model"
      ]
     ],
     [
      "A₁, …, Aₙ ⇒ B",
      [
       "Tot model de les premisses és model de B",
       "Todo modelo de las premisas es modelo de B",
       "Every model of the premises is a model of B"
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
       "Hi ha infinites interpretacions possibles (dominis de qualsevol mida), així que no es poden provar totes. Un sol món serveix per **refutar** (un contraexemple), però per **demostrar** cal un mètode sintàctic: la resolució de les unitats 7 i 8. A més, en CP1 la resolució només és **semidecidible**: si el raonament és vàlid, acaba trobant `□`; si no ho és, pot no acabar mai.",
       "Hay infinitas interpretaciones posibles (dominios de cualquier tamaño), así que no se pueden probar todas. Un solo mundo sirve para **refutar** (un contraejemplo), pero para **demostrar** hace falta un método sintáctico: la resolución de las unidades 7 y 8. Además, en CP1 la resolución solo es **semidecidible**: si el razonamiento es válido, acaba encontrando `□`; si no lo es, puede no terminar nunca.",
       "There are infinitely many possible interpretations (domains of any size), so you cannot try them all. A single world is enough to **refute** (a counterexample), but to **prove** you need a syntactic method: the resolution of units 7 and 8. Moreover, in CP1 resolution is only **semi-decidable**: if the argument is valid, it eventually finds `□`; if it is not, it may never stop."
      ]
     }
    ],
    "t": "prop",
    "title": [
     "Per què en CP1 no es fan taules de veritat",
     "Por qué en CP1 no se hacen tablas de verdad",
     "Why truth tables are not used in CP1"
    ]
   }
  ],
  "u6-propietats-dels-quantificadors-formulari": [
   {
    "head": [
     [
      "Equivalència",
      "Equivalencia",
      "Equivalence"
     ],
     [
      "Per què",
      "Por qué",
      "Why"
     ]
    ],
    "rows": [
     [
      "`¬∀x A ⇔ ∃x ¬A`",
      [
       "«no tothom és A» = «algú no és A»",
       "«no todo el mundo es A» = «alguien no es A»",
       "“not everyone is A” = “someone is not A”"
      ]
     ],
     [
      "`¬∃x A ⇔ ∀x ¬A`",
      [
       "«ningú és A» = «tothom és no A»",
       "«nadie es A» = «todo el mundo es no A»",
       "“nobody is A” = “everyone is not A”"
      ]
     ],
     [
      "`∀x ∀y A ⇔ ∀y ∀x A` · `∃x ∃y A ⇔ ∃y ∃x A`",
      [
       "dos quantificadors iguals es poden permutar (dos de diferents, no!)",
       "dos cuantificadores iguales se pueden permutar (¡dos diferentes, no!)",
       "two equal quantifiers can be swapped (two different ones, no!)"
      ]
     ],
     [
      "`∀x (A(x) ∧ B(x)) ⇔ ∀x A(x) ∧ ∀x B(x)`",
      [
       "∀ es reparteix sobre ∧",
       "∀ se reparte sobre ∧",
       "∀ distributes over ∧"
      ]
     ],
     [
      "`∃x (A(x) ∨ B(x)) ⇔ ∃x A(x) ∨ ∃x B(x)`",
      [
       "∃ es reparteix sobre ∨",
       "∃ se reparte sobre ∨",
       "∃ distributes over ∨"
      ]
     ],
     [
      [
       "`∀x A(x) ∨ B ⇔ ∀x (A(x) ∨ B)` (i igual amb ∃ i amb ∧)",
       "`∀x A(x) ∨ B ⇔ ∀x (A(x) ∨ B)` (y lo mismo con ∃ y con ∧)",
       "`∀x A(x) ∨ B ⇔ ∀x (A(x) ∨ B)` (and the same with ∃ and with ∧)"
      ],
      [
       "si B no conté x, el quantificador pot englobar-la",
       "si B no contiene x, el cuantificador puede englobarla",
       "if B does not contain x, the quantifier can include it"
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
       "`∀x (A(x) ∨ B(x))` no equival a `∀x A(x) ∨ ∀x B(x)`: «tothom és home o dona» no vol dir «tothom és home, o bé tothom és dona». I `∃x (A(x) ∧ B(x))` no equival a `∃x A(x) ∧ ∃x B(x)`: que hi hagi algú alt i algú ros no vol dir que hi hagi algú alt i ros.",
       "`∀x (A(x) ∨ B(x))` no equivale a `∀x A(x) ∨ ∀x B(x)`: «todo el mundo es hombre o mujer» no quiere decir «todo el mundo es hombre, o bien todo el mundo es mujer». Y `∃x (A(x) ∧ B(x))` no equivale a `∃x A(x) ∧ ∃x B(x)`: que haya alguien alto y alguien rubio no quiere decir que haya alguien alto y rubio.",
       "`∀x (A(x) ∨ B(x))` is not equivalent to `∀x A(x) ∨ ∀x B(x)`: “everyone is a man or a woman” does not mean “everyone is a man, or else everyone is a woman”. And `∃x (A(x) ∧ B(x))` is not equivalent to `∃x A(x) ∧ ∃x B(x)`: that there is someone tall and someone blond does not mean that there is someone tall and blond."
      ]
     }
    ],
    "t": "warn",
    "title": [
     "Les que no valen",
     "Las que no valen",
     "The ones that do not hold"
    ]
   }
  ],
  "u6-comprova-que-has-entes": [
   {
    "t": "check",
    "ex": {
     "id": "u6-comprova-que-has-entes-q1",
     "type": "mcq",
     "q": [
      "Amb el domini de l'exemple (E = {anna, biel}, T = {biel, carla}), quina fórmula és certa?",
      "Con el dominio del ejemplo (E = {anna, biel}, T = {biel, carla}), ¿qué fórmula es cierta?",
      "With the domain of the example (E = {anna, biel}, T = {biel, carla}), which formula is true?"
     ],
     "opts": [
      "`∀x (T(x) → E(x))`",
      "`∀x E(x)`",
      "`∃x (T(x) ∧ ¬E(x))`",
      "`∃x (¬E(x) ∧ ¬T(x))`"
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "La carla treballa i no és estudiant. L'opció a falla amb la carla, la b amb la carla i la d no té cap fila certa.",
        "Carla trabaja y no es estudiante. La opción a falla con Carla, la b con Carla y la d no tiene ninguna fila cierta.",
        "Carla works and is not a student. Option a fails with Carla, b with Carla and d has no true row."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "u6-comprova-que-has-entes-q2",
     "type": "mcq",
     "q": [
      "Quina és la negació de `∀x (A(x) → B(x))`?",
      "¿Cuál es la negación de `∀x (A(x) → B(x))`?",
      "What is the negation of `∀x (A(x) → B(x))`?"
     ],
     "opts": [
      "`∀x (A(x) → ¬B(x))`",
      "`∃x (A(x) ∧ ¬B(x))`",
      "`∃x (¬A(x) → B(x))`",
      "`∀x (¬A(x) ∨ ¬B(x))`"
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "`¬∀x (A → B) ≡ ∃x ¬(¬A ∨ B) ≡ ∃x (A ∧ ¬B)`: «algun A no és B».",
        "`¬∀x (A → B) ≡ ∃x ¬(¬A ∨ B) ≡ ∃x (A ∧ ¬B)`: «algún A no es B».",
        "`¬∀x (A → B) ≡ ∃x ¬(¬A ∨ B) ≡ ∃x (A ∧ ¬B)`: “some A is not B”."
       ]
      }
     ]
    }
   }
  ]
 },
 "examEnd": [
  {
   "id": "u6-x1",
   "type": "mcq",
   "q": [
    "D = {1, 2, 3}, P = {1, 2}, Q = {2, 3}. Quina fórmula és certa?",
    "D = {1, 2, 3}, P = {1, 2}, Q = {2, 3}. ¿Qué fórmula es cierta?",
    "D = {1, 2, 3}, P = {1, 2}, Q = {2, 3}. Which formula is true?"
   ],
   "opts": [
    "`∀x (P(x) → Q(x))`",
    "`∃x (P(x) ∧ Q(x))`",
    "`∀x (P(x) ∨ ¬Q(x))`",
    "`∃x (¬P(x) ∧ ¬Q(x))`"
   ],
   "answer": 1,
   "sol": [
    {
     "t": "p",
     "x": [
      "El 2 és P i Q alhora. La a) falla amb l'1, la c) amb el 3 i la d) no té cap element fora de P i de Q.",
      "El 2 es P y Q a la vez. La a) falla con el 1, la c) con el 3 y la d) no tiene ningún elemento fuera de P y de Q.",
      "2 is both P and Q. a) fails with 1, c) with 3, and d) has no element outside both P and Q."
     ]
    }
   ]
  },
  {
   "id": "u6-x2",
   "type": "tf",
   "q": [
    "`∃x (A(x) ∧ B(x))` és equivalent a `∃x A(x) ∧ ∃x B(x)`.",
    "`∃x (A(x) ∧ B(x))` es equivalente a `∃x A(x) ∧ ∃x B(x)`.",
    "`∃x (A(x) ∧ B(x))` is equivalent to `∃x A(x) ∧ ∃x B(x)`."
   ],
   "answer": false,
   "sol": [
    {
     "t": "p",
     "x": [
      "Que hi hagi algú alt i algú ros no vol dir que hi hagi algú alt i ros. Només val la implicació d'esquerra a dreta.",
      "Que haya alguien alto y alguien rubio no quiere decir que haya alguien alto y rubio. Solo vale la implicación de izquierda a derecha.",
      "That there is someone tall and someone blond does not mean there is someone tall and blond. Only the left-to-right implication holds."
     ]
    }
   ]
  },
  {
   "id": "u6-x3",
   "type": "mcq",
   "q": [
    "Quina és la negació de `∃x ∀y R(x, y)`?",
    "¿Cuál es la negación de `∃x ∀y R(x, y)`?",
    "What is the negation of `∃x ∀y R(x, y)`?"
   ],
   "opts": [
    "`∀x ∃y ¬R(x, y)`",
    "`∃x ∃y ¬R(x, y)`",
    "`∀x ∀y ¬R(x, y)`",
    "`¬∃y ∀x R(x, y)`"
   ],
   "answer": 0,
   "sol": [
    {
     "t": "p",
     "x": [
      "Cada negació que travessa un quantificador el canvia: `¬∃x ∀y R ≡ ∀x ¬∀y R ≡ ∀x ∃y ¬R`.",
      "Cada negación que atraviesa un cuantificador lo cambia: `¬∃x ∀y R ≡ ∀x ¬∀y R ≡ ∀x ∃y ¬R`.",
      "Each negation that crosses a quantifier changes it: `¬∃x ∀y R ≡ ∀x ¬∀y R ≡ ∀x ∃y ¬R`."
     ]
    }
   ]
  }
 ]
};
