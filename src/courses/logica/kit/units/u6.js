// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "En CP0 una interpretació era una fila de la taula. En CP1 és un «món» sencer: un conjunt d'objectes i el significat de cada símbol. Saber avaluar una fórmula en un món petit ajuda molt a comprovar si una formalització és correcta.",
    "En CP0 una interpretación era una fila de la tabla. En CP1 es un «mundo» entero: un conjunto de objetos y el significado de cada símbolo. Saber evaluar una fórmula en un mundo pequeño ayuda mucho a comprobar si una formalización es correcta."
   ]
  }
 ],
 "sections": {
  "u6-que-es-una-interpretacio": [
   {
    "t": "p",
    "x": [
     "Una interpretació I té dues parts:",
     "Una interpretación I tiene dos partes:"
    ]
   },
   {
    "items": [
     [
      "Un **domini** D: el conjunt d'objectes de què es parla (no pot ser buit).",
      "Un **dominio** D: el conjunto de objetos de los que se habla (no puede ser vacío)."
     ],
     [
      "El **significat de cada símbol**: a cada constant li correspon un objecte de D; a cada funció, una funció de D en D; a cada predicat unari, un subconjunt de D; a cada predicat binari, un conjunt de parelles.",
      "El **significado de cada símbolo**: a cada constante le corresponde un objeto de D; a cada función, una función de D en D; a cada predicado unario, un subconjunto de D; a cada predicado binario, un conjunto de pares."
     ]
    ],
    "t": "list"
   },
   {
    "caption": [
     "La interpretació de l'exemple, com a món: tres objectes, el predicat `P` com el conjunt que els envolta, la relació `Q` com a fletxes i la funció `f` com a fletxes discontínues. Per avaluar `Q(f(Joan), Pep)` se segueix primer la fletxa discontínua de Joan (arriba a Maria) i després es mira si hi ha fletxa contínua de Maria a Pep: n'hi ha, és T.",
     "La interpretación del ejemplo, como un mundo: tres objetos, el predicado `P` como el conjunto que los rodea, la relación `Q` como flechas y la función `f` como flechas discontinuas. Para evaluar `Q(f(Joan), Pep)` se sigue primero la flecha discontinua de Joan (llega a Maria) y después se mira si hay flecha continua de Maria a Pep: la hay, es T."
    ],
    "cls": "vz",
    "svg": [
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 330\" role=\"img\" aria-label=\"Una interpretació dibuixada\"><defs><marker id=\"ar-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><rect x=\"20.0\" y=\"20.0\" width=\"600.0\" height=\"270.0\" rx=\"18\" class=\"vz-dom\"></rect><text x=\"600.0\" y=\"46.0\" class=\"vz-dl\" text-anchor=\"end\">D</text><ellipse cx=\"245\" cy=\"156\" rx=\"152\" ry=\"58\" transform=\"rotate(-40.5 245 156)\" class=\"vz-set\"></ellipse><text x=\"92.0\" y=\"112.0\" class=\"vz-lab vz-tA\" text-anchor=\"start\">I(P)</text><text x=\"92.0\" y=\"128.0\" class=\"vz-sm\" text-anchor=\"start\">estudiants EIA</text><line x1=\"184.0\" y1=\"220.0\" x2=\"456.0\" y2=\"220.0\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><line x1=\"309.4\" y1=\"101.1\" x2=\"180.6\" y2=\"210.9\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><line x1=\"330.6\" y1=\"101.1\" x2=\"459.4\" y2=\"210.9\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><path d=\"M180.6 210.9 Q220.3 127.1 309.4 101.1\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></path><path d=\"M330.6 101.1 Q419.7 127.1 459.4 210.9\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></path><path d=\"M456.0 220.0 Q320.0 266.0 184.0 220.0\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></path><circle cx=\"170.0\" cy=\"220.0\" r=\"8.0\" class=\"vz-dot\"></circle><text x=\"170.0\" y=\"250.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Joan</text><circle cx=\"320.0\" cy=\"92.0\" r=\"8.0\" class=\"vz-dot\"></circle><text x=\"320.0\" y=\"76.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Maria</text><circle cx=\"470.0\" cy=\"220.0\" r=\"8.0\" class=\"vz-dot\"></circle><text x=\"470.0\" y=\"250.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Pep</text><line x1=\"40.0\" y1=\"312.0\" x2=\"76.0\" y2=\"312.0\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><text x=\"84.0\" y=\"316.0\" class=\"vz-sm\" text-anchor=\"start\">Q(x, y): x és millor estudiant que y</text><line x1=\"350.0\" y1=\"312.0\" x2=\"386.0\" y2=\"312.0\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></line><text x=\"394.0\" y=\"316.0\" class=\"vz-sm\" text-anchor=\"start\">f(x): el següent de x</text></svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 330\" role=\"img\" aria-label=\"Una interpretación dibujada\"><defs><marker id=\"ar-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-wo\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><rect x=\"20.0\" y=\"20.0\" width=\"600.0\" height=\"270.0\" rx=\"18\" class=\"vz-dom\"></rect><text x=\"600.0\" y=\"46.0\" class=\"vz-dl\" text-anchor=\"end\">D</text><ellipse cx=\"245\" cy=\"156\" rx=\"152\" ry=\"58\" transform=\"rotate(-40.5 245 156)\" class=\"vz-set\"></ellipse><text x=\"92.0\" y=\"112.0\" class=\"vz-lab vz-tA\" text-anchor=\"start\">I(P)</text><text x=\"92.0\" y=\"128.0\" class=\"vz-sm\" text-anchor=\"start\">estudiantes EIA</text><line x1=\"184.0\" y1=\"220.0\" x2=\"456.0\" y2=\"220.0\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><line x1=\"309.4\" y1=\"101.1\" x2=\"180.6\" y2=\"210.9\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><line x1=\"330.6\" y1=\"101.1\" x2=\"459.4\" y2=\"210.9\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><path d=\"M180.6 210.9 Q220.3 127.1 309.4 101.1\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></path><path d=\"M330.6 101.1 Q419.7 127.1 459.4 210.9\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></path><path d=\"M456.0 220.0 Q320.0 266.0 184.0 220.0\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></path><circle cx=\"170.0\" cy=\"220.0\" r=\"8.0\" class=\"vz-dot\"></circle><text x=\"170.0\" y=\"250.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Joan</text><circle cx=\"320.0\" cy=\"92.0\" r=\"8.0\" class=\"vz-dot\"></circle><text x=\"320.0\" y=\"76.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Maria</text><circle cx=\"470.0\" cy=\"220.0\" r=\"8.0\" class=\"vz-dot\"></circle><text x=\"470.0\" y=\"250.0\" class=\"vz-t vz-b\" text-anchor=\"middle\">Pep</text><line x1=\"40.0\" y1=\"312.0\" x2=\"76.0\" y2=\"312.0\" class=\"vz-lnI\" marker-end=\"url(#ai-wo)\"></line><text x=\"84.0\" y=\"316.0\" class=\"vz-sm\" text-anchor=\"start\">Q(x, y): x es mejor estudiante que y</text><line x1=\"350.0\" y1=\"312.0\" x2=\"386.0\" y2=\"312.0\" class=\"vz-lnT vz-dash\" marker-end=\"url(#at-wo)\"></line><text x=\"394.0\" y=\"316.0\" class=\"vz-sm\" text-anchor=\"start\">f(x): el siguiente de x</text></svg></div>"
    ],
    "t": "diagram"
   }
  ],
  "u6-quan-es-certa-una-formula": [
   {
    "items": [
     [
      "Un àtom `P(t)` és cert si l'objecte que designa t és dins del conjunt de P.",
      "Un átomo `P(t)` es cierto si el objeto que designa t está dentro del conjunto de P."
     ],
     [
      "Les connectives funcionen exactament com en CP0.",
      "Las conectivas funcionan exactamente como en CP0."
     ],
     [
      "`∀x A` és certa si A és certa **per a cada** objecte del domini posat en lloc de x.",
      "`∀x A` es cierta si A es cierta **para cada** objeto del dominio puesto en lugar de x."
     ],
     [
      "`∃x A` és certa si A és certa **per a algun** objecte.",
      "`∃x A` es cierta si A es cierta **para algún** objeto."
     ]
    ],
    "t": "list"
   },
   {
    "id": "u6-exemple-en-un-domini-de-tres-persones",
    "t": "h",
    "x": [
     "Exemple en un domini de tres persones",
     "Ejemplo en un dominio de tres personas"
    ]
   },
   {
    "t": "p",
    "x": [
     "D = {anna, biel, carla}. `E` (és estudiant) = {anna, biel}. `T` (treballa) = {biel, carla}.",
     "D = {anna, biel, carla}. `E` (es estudiante) = {anna, biel}. `T` (trabaja) = {biel, carla}."
    ]
   },
   {
    "t": "html",
    "h": "<div class=\"tw\"><table class=\"lx-tt\">\n<thead><tr><th>x</th><th>E(x)</th><th>T(x)</th><th>E(x) → T(x)</th><th>E(x) ∧ T(x)</th></tr></thead>\n<tbody>\n<tr><td>anna</td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td></tr>\n<tr><td>biel</td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td></tr>\n<tr><td>carla</td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td></tr>\n</tbody></table></div>"
   },
   {
    "t": "p",
    "x": [
     "`∀x (E(x) → T(x))` és **falsa**: la fila d'anna és F (l'anna és estudiant i no treballa). `∃x (E(x) ∧ T(x))` és **certa**: la fila del biel és T. Un `∀` és com una conjunció de totes les files; un `∃`, com una disjunció.",
     "`∀x (E(x) → T(x))` es **falsa**: la fila de anna es F (Anna es estudiante y no trabaja). `∃x (E(x) ∧ T(x))` es **cierta**: la fila de biel es T. Un `∀` es como una conjunción de todas las filas; un `∃`, como una disyunción."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Imagineu un domini de dues o tres persones on la frase sigui clarament certa (o falsa) i avalueu-hi la vostra fórmula. Si dona un altre valor, la fórmula no diu el que volíeu.",
       "Imaginad un dominio de dos o tres personas donde la frase sea claramente cierta (o falsa) y evaluad en él vuestra fórmula. Si da otro valor, la fórmula no dice lo que queríais."
      ]
     }
    ],
    "t": "tip",
    "title": [
     "Per comprovar una formalització",
     "Para comprobar una formalización"
    ]
   }
  ],
  "u6-model-validesa-i-consequencia": [
   {
    "t": "p",
    "x": [
     "Les definicions són les mateixes que en CP0, canviant «fila de la taula» per «interpretació»:",
     "Las definiciones son las mismas que en CP0, cambiando «fila de la tabla» por «interpretación»:"
    ]
   },
   {
    "head": [
     [
      "Concepte",
      "Concepto"
     ],
     [
      "Definició en CP1",
      "Definición en CP1"
     ]
    ],
    "rows": [
     [
      [
       "Model de A",
       "Modelo de A"
      ],
      [
       "Una interpretació on A és certa",
       "Una interpretación donde A es cierta"
      ]
     ],
     [
      [
       "A és vàlida",
       "A es válida"
      ],
      [
       "Certa en **totes** les interpretacions (de qualsevol domini)",
       "Cierta en **todas** las interpretaciones (de cualquier dominio)"
      ]
     ],
     [
      [
       "A és insatisfactible",
       "A es insatisfacible"
      ],
      [
       "No té cap model",
       "No tiene ningún modelo"
      ]
     ],
     [
      "A₁, …, Aₙ ⇒ B",
      [
       "Tot model de les premisses és model de B",
       "Todo modelo de las premisas es modelo de B"
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
       "Hay infinitas interpretaciones posibles (dominios de cualquier tamaño), así que no se pueden probar todas. Un solo mundo sirve para **refutar** (un contraejemplo), pero para **demostrar** hace falta un método sintáctico: la resolución de las unidades 7 y 8. Además, en CP1 la resolución solo es **semidecidible**: si el razonamiento es válido, acaba encontrando `□`; si no lo es, puede no terminar nunca."
      ]
     }
    ],
    "t": "prop",
    "title": [
     "Per què en CP1 no es fan taules de veritat",
     "Por qué en CP1 no se hacen tablas de verdad"
    ]
   }
  ],
  "u6-propietats-dels-quantificadors-formulari": [
   {
    "head": [
     [
      "Equivalència",
      "Equivalencia"
     ],
     [
      "Per què",
      "Por qué"
     ]
    ],
    "rows": [
     [
      "`¬∀x A ⇔ ∃x ¬A`",
      [
       "«no tothom és A» = «algú no és A»",
       "«no todo el mundo es A» = «alguien no es A»"
      ]
     ],
     [
      "`¬∃x A ⇔ ∀x ¬A`",
      [
       "«ningú és A» = «tothom és no A»",
       "«nadie es A» = «todo el mundo es no A»"
      ]
     ],
     [
      "`∀x ∀y A ⇔ ∀y ∀x A` · `∃x ∃y A ⇔ ∃y ∃x A`",
      [
       "dos quantificadors iguals es poden permutar (dos de diferents, no!)",
       "dos cuantificadores iguales se pueden permutar (¡dos diferentes, no!)"
      ]
     ],
     [
      "`∀x (A(x) ∧ B(x)) ⇔ ∀x A(x) ∧ ∀x B(x)`",
      [
       "∀ es reparteix sobre ∧",
       "∀ se reparte sobre ∧"
      ]
     ],
     [
      "`∃x (A(x) ∨ B(x)) ⇔ ∃x A(x) ∨ ∃x B(x)`",
      [
       "∃ es reparteix sobre ∨",
       "∃ se reparte sobre ∨"
      ]
     ],
     [
      [
       "`∀x A(x) ∨ B ⇔ ∀x (A(x) ∨ B)` (i igual amb ∃ i amb ∧)",
       "`∀x A(x) ∨ B ⇔ ∀x (A(x) ∨ B)` (y lo mismo con ∃ y con ∧)"
      ],
      [
       "si B no conté x, el quantificador pot englobar-la",
       "si B no contiene x, el cuantificador puede englobarla"
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
       "`∀x (A(x) ∨ B(x))` no equivale a `∀x A(x) ∨ ∀x B(x)`: «todo el mundo es hombre o mujer» no quiere decir «todo el mundo es hombre, o bien todo el mundo es mujer». Y `∃x (A(x) ∧ B(x))` no equivale a `∃x A(x) ∧ ∃x B(x)`: que haya alguien alto y alguien rubio no quiere decir que haya alguien alto y rubio."
      ]
     }
    ],
    "t": "warn",
    "title": [
     "Les que no valen",
     "Las que no valen"
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
      "Con el dominio del ejemplo (E = {anna, biel}, T = {biel, carla}), ¿qué fórmula es cierta?"
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
        "Carla trabaja y no es estudiante. La opción a falla con Carla, la b con Carla y la d no tiene ninguna fila cierta."
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
      "¿Cuál es la negación de `∀x (A(x) → B(x))`?"
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
        "`¬∀x (A → B) ≡ ∃x ¬(¬A ∨ B) ≡ ∃x (A ∧ ¬B)`: «algún A no es B»."
       ]
      }
     ]
    }
   }
  ]
 },
 "examEnd": []
};
