// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "El CP0 tracta cada frase com un bloc. El càlcul de predicats (CP1) mira dins de les frases: distingeix els **objectes** de les **propietats** que en diem, i permet parlar de «tots» i d'«algun».",
    "El CP0 trata cada frase como un bloque. El cálculo de predicados (CP1) mira dentro de las frases: distingue los **objetos** de las **propiedades** que decimos de ellos, y permite hablar de «todos» y de «alguno».",
    "CP0 treats each sentence as a block. Predicate calculus (CP1) looks inside sentences: it distinguishes the **objects** from the **properties** we state about them, and allows us to talk about “all” and “some”."
   ]
  }
 ],
 "sections": {
  "u4-per-que-no-n-hi-ha-prou-amb-el-cp0": [
   {
    "t": "p",
    "x": [
     "«Tots els homes són mortals. Sòcrates és un home. Per tant, Sòcrates és mortal.» És un raonament vàlid, però en CP0 serien tres proposicions sense cap relació, `P`, `Q` i `R`, i `P, Q ⇒ R` no és vàlid. Ens falta poder dir que l'«home» de la primera frase i el de la segona són la mateixa propietat. En CP1:",
     "«Todos los hombres son mortales. Sócrates es un hombre. Por tanto, Sócrates es mortal.» Es un razonamiento válido, pero en CP0 serían tres proposiciones sin ninguna relación, `P`, `Q` y `R`, y `P, Q ⇒ R` no es válido. Nos falta poder decir que el «hombre» de la primera frase y el de la segunda son la misma propiedad. En CP1:",
     "“All men are mortal. Socrates is a man. Therefore, Socrates is mortal.” It is a valid argument, but in CP0 it would be three unrelated propositions, `P`, `Q` and `R`, and `P, Q ⇒ R` is not valid. We are missing the ability to say that the “man” of the first sentence and that of the second are the same property. In CP1:"
    ]
   },
   {
    "t": "html",
    "h": "<p class=\"lx-big\"><code>∀x (H(x) → M(x))</code>, <code>H(socrates)</code> ⇒ <code>M(socrates)</code></p>"
   },
   {
    "caption": [
     "Una fbf del CP1 per dins. El **quantificador** diu de quants objectes parlem, els **predicats** diuen què n'afirmem i els **termes** (aquí la variable `x`) diuen de qui. El **camp** és el parèntesi on el quantificador fa efecte.",
     "Una fbf del CP1 por dentro. El **cuantificador** dice de cuántos objetos hablamos, los **predicados** dicen qué afirmamos de ellos y los **términos** (aquí la variable `x`) dicen de quién. El **campo** es el paréntesis donde actúa el cuantificador.",
     "A CP1 wff from the inside. The **quantifier** says how many objects we are talking about, the **predicates** say what we state about them and the **terms** (here the variable `x`) say about whom. The **scope** is the parenthesis where the quantifier acts."
    ],
    "cls": "vz",
    "svg": [
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 200\" role=\"img\" aria-label=\"Anatomia de la fbf ∀x (Home(x) → Mortal(x))\"><defs><marker id=\"ar-an\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-an\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-an\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-an\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><text x=\"140.6\" y=\"104.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:26px\">∀</text><text x=\"156.2\" y=\"104.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:26px\">x</text><text x=\"187.4\" y=\"104.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:26px\">(</text><text x=\"203.0\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">H</text><text x=\"218.6\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">o</text><text x=\"234.2\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">m</text><text x=\"249.8\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">e</text><text x=\"265.4\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">(</text><text x=\"281.0\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">x</text><text x=\"296.6\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">)</text><text x=\"327.8\" y=\"104.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:26px\">→</text><text x=\"359.0\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">M</text><text x=\"374.6\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">o</text><text x=\"390.2\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">r</text><text x=\"405.8\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">t</text><text x=\"421.4\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">a</text><text x=\"437.0\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">l</text><text x=\"452.6\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">(</text><text x=\"468.2\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">x</text><text x=\"483.8\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">)</text><text x=\"499.4\" y=\"104.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:26px\">)</text><text x=\"140.6\" y=\"44.0\" class=\"vz-lab vz-tA\" text-anchor=\"middle\">quantificador</text><line x1=\"140.6\" y1=\"50.0\" x2=\"140.6\" y2=\"80.0\" class=\"vz-lead\"></line><text x=\"226.4\" y=\"44.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">predicat</text><line x1=\"226.4\" y1=\"50.0\" x2=\"226.4\" y2=\"80.0\" class=\"vz-lead\"></line><text x=\"327.8\" y=\"44.0\" class=\"vz-lab vz-tK\" text-anchor=\"middle\">connectiva</text><line x1=\"327.8\" y1=\"50.0\" x2=\"327.8\" y2=\"80.0\" class=\"vz-lead\"></line><text x=\"398.0\" y=\"44.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">predicat</text><line x1=\"398.0\" y1=\"50.0\" x2=\"398.0\" y2=\"80.0\" class=\"vz-lead\"></line><line x1=\"156.2\" y1=\"112.0\" x2=\"156.2\" y2=\"128.0\" class=\"vz-lead\"></line><text x=\"156.2\" y=\"142.0\" class=\"vz-lab vz-tA\" text-anchor=\"middle\">variable</text><line x1=\"281.0\" y1=\"112.0\" x2=\"281.0\" y2=\"128.0\" class=\"vz-lead\"></line><text x=\"281.0\" y=\"142.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">terme</text><line x1=\"468.2\" y1=\"112.0\" x2=\"468.2\" y2=\"128.0\" class=\"vz-lead\"></line><text x=\"468.2\" y=\"142.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">terme</text><path d=\"M179.6 159.0 L179.6 166.0 L507.2 166.0 L507.2 159.0\" class=\"vz-lnA\"></path><text x=\"343.4\" y=\"186.0\" class=\"vz-lab vz-tA\" text-anchor=\"middle\">camp del quantificador ∀x: on fa efecte</text></svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 200\" role=\"img\" aria-label=\"Anatomía de la fbf ∀x (Home(x) → Mortal(x))\"><defs><marker id=\"ar-an\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-an\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-an\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-an\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><text x=\"140.6\" y=\"104.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:26px\">∀</text><text x=\"156.2\" y=\"104.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:26px\">x</text><text x=\"187.4\" y=\"104.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:26px\">(</text><text x=\"203.0\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">H</text><text x=\"218.6\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">o</text><text x=\"234.2\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">m</text><text x=\"249.8\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">e</text><text x=\"265.4\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">(</text><text x=\"281.0\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">x</text><text x=\"296.6\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">)</text><text x=\"327.8\" y=\"104.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:26px\">→</text><text x=\"359.0\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">M</text><text x=\"374.6\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">o</text><text x=\"390.2\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">r</text><text x=\"405.8\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">t</text><text x=\"421.4\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">a</text><text x=\"437.0\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">l</text><text x=\"452.6\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">(</text><text x=\"468.2\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">x</text><text x=\"483.8\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">)</text><text x=\"499.4\" y=\"104.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:26px\">)</text><text x=\"140.6\" y=\"44.0\" class=\"vz-lab vz-tA\" text-anchor=\"middle\">cuantificador</text><line x1=\"140.6\" y1=\"50.0\" x2=\"140.6\" y2=\"80.0\" class=\"vz-lead\"></line><text x=\"226.4\" y=\"44.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">predicado</text><line x1=\"226.4\" y1=\"50.0\" x2=\"226.4\" y2=\"80.0\" class=\"vz-lead\"></line><text x=\"327.8\" y=\"44.0\" class=\"vz-lab vz-tK\" text-anchor=\"middle\">conectiva</text><line x1=\"327.8\" y1=\"50.0\" x2=\"327.8\" y2=\"80.0\" class=\"vz-lead\"></line><text x=\"398.0\" y=\"44.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">predicado</text><line x1=\"398.0\" y1=\"50.0\" x2=\"398.0\" y2=\"80.0\" class=\"vz-lead\"></line><line x1=\"156.2\" y1=\"112.0\" x2=\"156.2\" y2=\"128.0\" class=\"vz-lead\"></line><text x=\"156.2\" y=\"142.0\" class=\"vz-lab vz-tA\" text-anchor=\"middle\">variable</text><line x1=\"281.0\" y1=\"112.0\" x2=\"281.0\" y2=\"128.0\" class=\"vz-lead\"></line><text x=\"281.0\" y=\"142.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">término</text><line x1=\"468.2\" y1=\"112.0\" x2=\"468.2\" y2=\"128.0\" class=\"vz-lead\"></line><text x=\"468.2\" y=\"142.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">término</text><path d=\"M179.6 159.0 L179.6 166.0 L507.2 166.0 L507.2 159.0\" class=\"vz-lnA\"></path><text x=\"343.4\" y=\"186.0\" class=\"vz-lab vz-tA\" text-anchor=\"middle\">campo del cuantificador ∀x: donde actúa</text></svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 200\" role=\"img\" aria-label=\"Anatomy of the wff ∀x (Home(x) → Mortal(x))\"><defs><marker id=\"ar-an\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-an\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-an\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-an\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><text x=\"140.6\" y=\"104.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:26px\">∀</text><text x=\"156.2\" y=\"104.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:26px\">x</text><text x=\"187.4\" y=\"104.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:26px\">(</text><text x=\"203.0\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">H</text><text x=\"218.6\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">o</text><text x=\"234.2\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">m</text><text x=\"249.8\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">e</text><text x=\"265.4\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">(</text><text x=\"281.0\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">x</text><text x=\"296.6\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">)</text><text x=\"327.8\" y=\"104.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:26px\">→</text><text x=\"359.0\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">M</text><text x=\"374.6\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">o</text><text x=\"390.2\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">r</text><text x=\"405.8\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">t</text><text x=\"421.4\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">a</text><text x=\"437.0\" y=\"104.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:26px\">l</text><text x=\"452.6\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">(</text><text x=\"468.2\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">x</text><text x=\"483.8\" y=\"104.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:26px\">)</text><text x=\"499.4\" y=\"104.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:26px\">)</text><text x=\"140.6\" y=\"44.0\" class=\"vz-lab vz-tA\" text-anchor=\"middle\">quantifier</text><line x1=\"140.6\" y1=\"50.0\" x2=\"140.6\" y2=\"80.0\" class=\"vz-lead\"></line><text x=\"226.4\" y=\"44.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">predicate</text><line x1=\"226.4\" y1=\"50.0\" x2=\"226.4\" y2=\"80.0\" class=\"vz-lead\"></line><text x=\"327.8\" y=\"44.0\" class=\"vz-lab vz-tK\" text-anchor=\"middle\">connective</text><line x1=\"327.8\" y1=\"50.0\" x2=\"327.8\" y2=\"80.0\" class=\"vz-lead\"></line><text x=\"398.0\" y=\"44.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">predicate</text><line x1=\"398.0\" y1=\"50.0\" x2=\"398.0\" y2=\"80.0\" class=\"vz-lead\"></line><line x1=\"156.2\" y1=\"112.0\" x2=\"156.2\" y2=\"128.0\" class=\"vz-lead\"></line><text x=\"156.2\" y=\"142.0\" class=\"vz-lab vz-tA\" text-anchor=\"middle\">variable</text><line x1=\"281.0\" y1=\"112.0\" x2=\"281.0\" y2=\"128.0\" class=\"vz-lead\"></line><text x=\"281.0\" y=\"142.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">term</text><line x1=\"468.2\" y1=\"112.0\" x2=\"468.2\" y2=\"128.0\" class=\"vz-lead\"></line><text x=\"468.2\" y=\"142.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">term</text><path d=\"M179.6 159.0 L179.6 166.0 L507.2 166.0 L507.2 159.0\" class=\"vz-lnA\"></path><text x=\"343.4\" y=\"186.0\" class=\"vz-lab vz-tA\" text-anchor=\"middle\">scope of the quantifier ∀x: where it acts</text></svg></div>"
    ],
    "t": "diagram",
    "mode": "explained"
   }
  ],
  "u4-els-elements-del-llenguatge": [
   {
    "head": [
     [
      "Element",
      "Elemento",
      "Element"
     ],
     [
      "Per a què serveix",
      "Para qué sirve",
      "What it is for"
     ],
     [
      "Notació",
      "Notación",
      "Notation"
     ],
     [
      "Exemple",
      "Ejemplo",
      "Example"
     ]
    ],
    "rows": [
     [
      [
       "Constant",
       "Constante",
       "Constant"
      ],
      [
       "Nom d'un objecte concret",
       "Nombre de un objeto concreto",
       "Name of a specific object"
      ],
      [
       "minúscules: `a`, `b`, `joan`",
       "minúsculas: `a`, `b`, `joan`",
       "lower case: `a`, `b`, `joan`"
      ],
      [
       "`joan` = el Joan",
       "`joan` = Joan",
       "`joan` = Joan"
      ]
     ],
     [
      "Variable",
      [
       "Objecte qualsevol (lligat a un quantificador)",
       "Objeto cualquiera (ligado a un cuantificador)",
       "Any object (bound to a quantifier)"
      ],
      "`x`, `y`, `z`",
      [
       "«per a tot x…»",
       "«para todo x…»",
       "“for every x…”"
      ]
     ],
     [
      [
       "Funció",
       "Función",
       "Function"
      ],
      [
       "Retorna un objecte a partir d'altres",
       "Devuelve un objeto a partir de otros",
       "Returns an object from other objects"
      ],
      "`f(x)`, `m(x)`",
      [
       "`m(2010)` = el llibre més llegit del 2010",
       "`m(2010)` = el libro más leído de 2010",
       "`m(2010)` = the most-read book of 2010"
      ]
     ],
     [
      [
       "Predicat",
       "Predicado",
       "Predicate"
      ],
      [
       "Propietat d'un objecte o relació entre objectes; és cert o fals",
       "Propiedad de un objeto o relación entre objetos; es cierto o falso",
       "Property of an object or relation between objects; it is true or false"
      ],
      [
       "majúscules: `P(x)`, `L(x,y)`",
       "mayúsculas: `P(x)`, `L(x,y)`",
       "upper case: `P(x)`, `L(x,y)`"
      ],
      [
       "`L(pau, c)` = en Pau llegeix el Codi Da Vinci",
       "`L(pau, c)` = Pau lee El código Da Vinci",
       "`L(pau, c)` = Pau reads The Da Vinci Code"
      ]
     ],
     [
      [
       "Quantificador",
       "Cuantificador",
       "Quantifier"
      ],
      [
       "Diu de quants objectes parlem",
       "Dice de cuántos objetos hablamos",
       "Says how many objects we are talking about"
      ],
      "`∀x`, `∃x`",
      [
       "`∃x L(x, c)` = algú el llegeix",
       "`∃x L(x, c)` = alguien lo lee",
       "`∃x L(x, c)` = someone reads it"
      ]
     ],
     [
      [
       "Connectives",
       "Conectivas",
       "Connectives"
      ],
      [
       "Les mateixes del CP0",
       "Las mismas del CP0",
       "The same as in CP0"
      ],
      "`¬ ∧ ∨ → ↔`",
      ""
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "El nombre d'arguments d'un predicat s'anomena **aritat**: `P(x)` és unari (una propietat), `L(x,y)` és binari (una relació). L'ordre dels arguments importa: `R(pere, pau)` («en Pere recomana en Pau») no és `R(pau, pere)`.",
     "El número de argumentos de un predicado se llama **aridad**: `P(x)` es unario (una propiedad), `L(x,y)` es binario (una relación). El orden de los argumentos importa: `R(pere, pau)` («Pere recomienda a Pau») no es `R(pau, pere)`.",
     "The number of arguments of a predicate is called its **arity**: `P(x)` is unary (a property), `L(x,y)` is binary (a relation). The order of the arguments matters: `R(pere, pau)` (“Pere recommends Pau”) is not `R(pau, pere)`."
    ]
   }
  ],
  "u4-termes-i-formules-dos-nivells-diferents": [
   {
    "t": "p",
    "x": [
     "Els **termes** (constants, variables i funcions) són noms d'objectes. Les **fórmules** (predicats i tot el que es construeix amb connectives i quantificadors) són afirmacions, certes o falses. Un terme mai no pot anar sol com a fórmula, i un predicat mai no pot anar dins d'un altre predicat.",
     "Los **términos** (constantes, variables y funciones) son nombres de objetos. Las **fórmulas** (predicados y todo lo que se construye con conectivas y cuantificadores) son afirmaciones, ciertas o falsas. Un término nunca puede ir solo como fórmula, y un predicado nunca puede ir dentro de otro predicado.",
     "**Terms** (constants, variables and functions) are names of objects. **Formulas** (predicates and everything built with connectives and quantifiers) are statements, true or false. A term can never stand alone as a formula, and a predicate can never go inside another predicate."
    ]
   },
   {
    "caption": [
     "Amb aquesta interpretació, `pare(joan)` és en Pere: un **objecte**, no un valor de veritat. En canvi `EsPare(pere, joan)` ja és una afirmació, i és certa. Per això `Home(Mortal(x))` no és una fbf: un predicat espera objectes, no T o F.",
     "Con esta interpretación, `pare(joan)` es Pere: un **objeto**, no un valor de verdad. En cambio `EsPare(pere, joan)` ya es una afirmación, y es cierta. Por eso `Home(Mortal(x))` no es una fbf: un predicado espera objetos, no T o F.",
     "With this interpretation, `pare(joan)` is Pere: an **object**, not a truth value. On the other hand `EsPare(pere, joan)` is already a statement, and it is true. That is why `Home(Mortal(x))` is not a wff: a predicate expects objects, not T or F."
    ],
    "cls": "vz",
    "svg": [
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 300\" role=\"img\" aria-label=\"Els termes porten a objectes; les fórmules atòmiques, a cert o fals\"><defs><marker id=\"ar-tw\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-tw\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-tw\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-tw\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><text x=\"20.0\" y=\"22.0\" class=\"vz-cap\" text-anchor=\"start\">TERMES → un objecte del domini</text><rect x=\"340.0\" y=\"34.0\" width=\"280.0\" height=\"110.0\" rx=\"14\" class=\"vz-dom\"></rect><text x=\"606.0\" y=\"54.0\" class=\"vz-dl\" text-anchor=\"end\">D</text><circle cx=\"420.0\" cy=\"66.0\" r=\"6.0\" class=\"vz-dot\"></circle><text x=\"433.0\" y=\"70.0\" class=\"vz-t\" text-anchor=\"start\">Joan</text><circle cx=\"420.0\" cy=\"116.0\" r=\"6.0\" class=\"vz-dot\"></circle><text x=\"433.0\" y=\"120.0\" class=\"vz-t\" text-anchor=\"start\">Pere</text><circle cx=\"545.0\" cy=\"91.0\" r=\"6.0\" class=\"vz-dot\"></circle><text x=\"558.0\" y=\"95.0\" class=\"vz-t\" text-anchor=\"start\">Montse</text><text x=\"230.0\" y=\"70.0\" class=\"vz-mono vz-cA\" text-anchor=\"end\" style=\"font-size:16px\">joan</text><line x1=\"240.0\" y1=\"66.0\" x2=\"407.0\" y2=\"66.0\" class=\"vz-lnA\" marker-end=\"url(#aa-tw)\"></line><text x=\"320.0\" y=\"58.0\" class=\"vz-sm\" text-anchor=\"middle\">constant</text><text x=\"230.0\" y=\"120.0\" class=\"vz-mono vz-cA\" text-anchor=\"end\" style=\"font-size:16px\">pare(joan)</text><line x1=\"240.0\" y1=\"116.0\" x2=\"407.0\" y2=\"116.0\" class=\"vz-lnA\" marker-end=\"url(#aa-tw)\"></line><text x=\"320.0\" y=\"108.0\" class=\"vz-sm\" text-anchor=\"middle\">funció</text><text x=\"20.0\" y=\"182.0\" class=\"vz-cap\" text-anchor=\"start\">FÓRMULES ATÒMIQUES → cert o fals</text><rect x=\"340.0\" y=\"194.0\" width=\"280.0\" height=\"92.0\" rx=\"14\" class=\"vz-dom\"></rect><text x=\"606.0\" y=\"214.0\" class=\"vz-dl\" text-anchor=\"end\">valors</text><rect x=\"400.0\" y=\"211.0\" width=\"42.0\" height=\"26.0\" rx=\"13\" class=\"vz-pT\"></rect><text x=\"421.0\" y=\"229.0\" class=\"vz-pt\" text-anchor=\"middle\">T</text><rect x=\"400.0\" y=\"249.0\" width=\"42.0\" height=\"26.0\" rx=\"13\" class=\"vz-pF\"></rect><text x=\"421.0\" y=\"267.0\" class=\"vz-pt\" text-anchor=\"middle\">F</text><text x=\"230.0\" y=\"228.0\" class=\"vz-mono vz-cI\" text-anchor=\"end\" style=\"font-size:16px\">EsPare(pere, joan)</text><line x1=\"240.0\" y1=\"224.0\" x2=\"396.0\" y2=\"224.0\" class=\"vz-lnI\" marker-end=\"url(#ai-tw)\"></line><text x=\"320.0\" y=\"216.0\" class=\"vz-sm\" text-anchor=\"middle\">predicat</text><text x=\"230.0\" y=\"266.0\" class=\"vz-mono vz-cI\" text-anchor=\"end\" style=\"font-size:16px\">Major(joan, montse)</text><line x1=\"240.0\" y1=\"262.0\" x2=\"396.0\" y2=\"262.0\" class=\"vz-lnI\" marker-end=\"url(#ai-tw)\"></line><text x=\"320.0\" y=\"254.0\" class=\"vz-sm\" text-anchor=\"middle\">predicat</text></svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 300\" role=\"img\" aria-label=\"Los términos llevan a objetos; las fórmulas atómicas, a cierto o falso\"><defs><marker id=\"ar-tw\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-tw\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-tw\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-tw\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><text x=\"20.0\" y=\"22.0\" class=\"vz-cap\" text-anchor=\"start\">TÉRMINOS → un objeto del dominio</text><rect x=\"340.0\" y=\"34.0\" width=\"280.0\" height=\"110.0\" rx=\"14\" class=\"vz-dom\"></rect><text x=\"606.0\" y=\"54.0\" class=\"vz-dl\" text-anchor=\"end\">D</text><circle cx=\"420.0\" cy=\"66.0\" r=\"6.0\" class=\"vz-dot\"></circle><text x=\"433.0\" y=\"70.0\" class=\"vz-t\" text-anchor=\"start\">Joan</text><circle cx=\"420.0\" cy=\"116.0\" r=\"6.0\" class=\"vz-dot\"></circle><text x=\"433.0\" y=\"120.0\" class=\"vz-t\" text-anchor=\"start\">Pere</text><circle cx=\"545.0\" cy=\"91.0\" r=\"6.0\" class=\"vz-dot\"></circle><text x=\"558.0\" y=\"95.0\" class=\"vz-t\" text-anchor=\"start\">Montse</text><text x=\"230.0\" y=\"70.0\" class=\"vz-mono vz-cA\" text-anchor=\"end\" style=\"font-size:16px\">joan</text><line x1=\"240.0\" y1=\"66.0\" x2=\"407.0\" y2=\"66.0\" class=\"vz-lnA\" marker-end=\"url(#aa-tw)\"></line><text x=\"320.0\" y=\"58.0\" class=\"vz-sm\" text-anchor=\"middle\">constante</text><text x=\"230.0\" y=\"120.0\" class=\"vz-mono vz-cA\" text-anchor=\"end\" style=\"font-size:16px\">pare(joan)</text><line x1=\"240.0\" y1=\"116.0\" x2=\"407.0\" y2=\"116.0\" class=\"vz-lnA\" marker-end=\"url(#aa-tw)\"></line><text x=\"320.0\" y=\"108.0\" class=\"vz-sm\" text-anchor=\"middle\">función</text><text x=\"20.0\" y=\"182.0\" class=\"vz-cap\" text-anchor=\"start\">FÓRMULAS ATÓMICAS → cierto o falso</text><rect x=\"340.0\" y=\"194.0\" width=\"280.0\" height=\"92.0\" rx=\"14\" class=\"vz-dom\"></rect><text x=\"606.0\" y=\"214.0\" class=\"vz-dl\" text-anchor=\"end\">valores</text><rect x=\"400.0\" y=\"211.0\" width=\"42.0\" height=\"26.0\" rx=\"13\" class=\"vz-pT\"></rect><text x=\"421.0\" y=\"229.0\" class=\"vz-pt\" text-anchor=\"middle\">T</text><rect x=\"400.0\" y=\"249.0\" width=\"42.0\" height=\"26.0\" rx=\"13\" class=\"vz-pF\"></rect><text x=\"421.0\" y=\"267.0\" class=\"vz-pt\" text-anchor=\"middle\">F</text><text x=\"230.0\" y=\"228.0\" class=\"vz-mono vz-cI\" text-anchor=\"end\" style=\"font-size:16px\">EsPare(pere, joan)</text><line x1=\"240.0\" y1=\"224.0\" x2=\"396.0\" y2=\"224.0\" class=\"vz-lnI\" marker-end=\"url(#ai-tw)\"></line><text x=\"320.0\" y=\"216.0\" class=\"vz-sm\" text-anchor=\"middle\">predicado</text><text x=\"230.0\" y=\"266.0\" class=\"vz-mono vz-cI\" text-anchor=\"end\" style=\"font-size:16px\">Major(joan, montse)</text><line x1=\"240.0\" y1=\"262.0\" x2=\"396.0\" y2=\"262.0\" class=\"vz-lnI\" marker-end=\"url(#ai-tw)\"></line><text x=\"320.0\" y=\"254.0\" class=\"vz-sm\" text-anchor=\"middle\">predicado</text></svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 300\" role=\"img\" aria-label=\"Terms lead to objects; atomic formulas, to true or false\"><defs><marker id=\"ar-tw\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-tw\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-tw\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-tw\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><text x=\"20.0\" y=\"22.0\" class=\"vz-cap\" text-anchor=\"start\">TERMS → an object of the domain</text><rect x=\"340.0\" y=\"34.0\" width=\"280.0\" height=\"110.0\" rx=\"14\" class=\"vz-dom\"></rect><text x=\"606.0\" y=\"54.0\" class=\"vz-dl\" text-anchor=\"end\">D</text><circle cx=\"420.0\" cy=\"66.0\" r=\"6.0\" class=\"vz-dot\"></circle><text x=\"433.0\" y=\"70.0\" class=\"vz-t\" text-anchor=\"start\">Joan</text><circle cx=\"420.0\" cy=\"116.0\" r=\"6.0\" class=\"vz-dot\"></circle><text x=\"433.0\" y=\"120.0\" class=\"vz-t\" text-anchor=\"start\">Pere</text><circle cx=\"545.0\" cy=\"91.0\" r=\"6.0\" class=\"vz-dot\"></circle><text x=\"558.0\" y=\"95.0\" class=\"vz-t\" text-anchor=\"start\">Montse</text><text x=\"230.0\" y=\"70.0\" class=\"vz-mono vz-cA\" text-anchor=\"end\" style=\"font-size:16px\">joan</text><line x1=\"240.0\" y1=\"66.0\" x2=\"407.0\" y2=\"66.0\" class=\"vz-lnA\" marker-end=\"url(#aa-tw)\"></line><text x=\"320.0\" y=\"58.0\" class=\"vz-sm\" text-anchor=\"middle\">constant</text><text x=\"230.0\" y=\"120.0\" class=\"vz-mono vz-cA\" text-anchor=\"end\" style=\"font-size:16px\">pare(joan)</text><line x1=\"240.0\" y1=\"116.0\" x2=\"407.0\" y2=\"116.0\" class=\"vz-lnA\" marker-end=\"url(#aa-tw)\"></line><text x=\"320.0\" y=\"108.0\" class=\"vz-sm\" text-anchor=\"middle\">function</text><text x=\"20.0\" y=\"182.0\" class=\"vz-cap\" text-anchor=\"start\">ATOMIC FORMULAS → true or false</text><rect x=\"340.0\" y=\"194.0\" width=\"280.0\" height=\"92.0\" rx=\"14\" class=\"vz-dom\"></rect><text x=\"606.0\" y=\"214.0\" class=\"vz-dl\" text-anchor=\"end\">values</text><rect x=\"400.0\" y=\"211.0\" width=\"42.0\" height=\"26.0\" rx=\"13\" class=\"vz-pT\"></rect><text x=\"421.0\" y=\"229.0\" class=\"vz-pt\" text-anchor=\"middle\">T</text><rect x=\"400.0\" y=\"249.0\" width=\"42.0\" height=\"26.0\" rx=\"13\" class=\"vz-pF\"></rect><text x=\"421.0\" y=\"267.0\" class=\"vz-pt\" text-anchor=\"middle\">F</text><text x=\"230.0\" y=\"228.0\" class=\"vz-mono vz-cI\" text-anchor=\"end\" style=\"font-size:16px\">EsPare(pere, joan)</text><line x1=\"240.0\" y1=\"224.0\" x2=\"396.0\" y2=\"224.0\" class=\"vz-lnI\" marker-end=\"url(#ai-tw)\"></line><text x=\"320.0\" y=\"216.0\" class=\"vz-sm\" text-anchor=\"middle\">predicate</text><text x=\"230.0\" y=\"266.0\" class=\"vz-mono vz-cI\" text-anchor=\"end\" style=\"font-size:16px\">Major(joan, montse)</text><line x1=\"240.0\" y1=\"262.0\" x2=\"396.0\" y2=\"262.0\" class=\"vz-lnI\" marker-end=\"url(#ai-tw)\"></line><text x=\"320.0\" y=\"254.0\" class=\"vz-sm\" text-anchor=\"middle\">predicate</text></svg></div>"
    ],
    "t": "diagram",
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "«En Pau llegeix el llibre més llegit del 2010» és `L(a, m(2010))`, amb una **funció** que retorna el llibre. Seria incorrecte `L(a, B(2010))`: `B(x)` és un predicat, i el seu valor és cert o fals, no un llibre.",
       "«Pau lee el libro más leído de 2010» es `L(a, m(2010))`, con una **función** que devuelve el libro. Sería incorrecto `L(a, B(2010))`: `B(x)` es un predicado, y su valor es cierto o falso, no un libro.",
       "“Pau reads the most-read book of 2010” is `L(a, m(2010))`, with a **function** that returns the book. `L(a, B(2010))` would be wrong: `B(x)` is a predicate, and its value is true or false, not a book."
      ]
     }
    ],
    "t": "warn",
    "title": [
     "Error típic: predicat dins de predicat",
     "Error típico: predicado dentro de predicado",
     "Typical mistake: a predicate inside a predicate"
    ]
   }
  ],
  "u4-els-quantificadors": [
   {
    "head": [
     "Fórmula",
     [
      "Es llegeix",
      "Se lee",
      "Read as"
     ],
     [
      "És certa quan…",
      "Es cierta cuando…",
      "It is true when…"
     ]
    ],
    "rows": [
     [
      "`∀x P(x)`",
      [
       "per a tot x, P(x) · tothom és P",
       "para todo x, P(x) · todo el mundo es P",
       "for every x, P(x) · everyone is P"
      ],
      [
       "tots els objectes del domini compleixen P",
       "todos los objetos del dominio cumplen P",
       "every object of the domain satisfies P"
      ]
     ],
     [
      "`∃x P(x)`",
      [
       "existeix algun x tal que P(x) · algú és P",
       "existe algún x tal que P(x) · alguien es P",
       "there exists some x such that P(x) · someone is P"
      ],
      [
       "almenys un objecte compleix P",
       "al menos un objeto cumple P",
       "at least one object satisfies P"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "Un quantificador s'aplica només a la fórmula que té just al darrere, com la negació. Per abastar més, cal parèntesis:",
     "Un cuantificador se aplica solo a la fórmula que tiene justo detrás, como la negación. Para abarcar más, hacen falta paréntesis:",
     "A quantifier only applies to the formula right after it, like negation. To cover more, you need parentheses:"
    ]
   },
   {
    "items": [
     [
      "`∀x P(x) ∨ Q(x)` vol dir `(∀x P(x)) ∨ Q(x)`: la segona x no està lligada.",
      "`∀x P(x) ∨ Q(x)` quiere decir `(∀x P(x)) ∨ Q(x)`: la segunda x no está ligada.",
      "`∀x P(x) ∨ Q(x)` means `(∀x P(x)) ∨ Q(x)`: the second x is not bound."
     ],
     [
      "`∀x (P(x) ∨ Q(x))` sí que diu «tothom és P o Q».",
      "`∀x (P(x) ∨ Q(x))` sí dice «todo el mundo es P o Q».",
      "`∀x (P(x) ∨ Q(x))` does say “everyone is P or Q”."
     ]
    ],
    "t": "list"
   }
  ],
  "u4-ambit-variables-lliures-i-lligades": [
   {
    "t": "p",
    "x": [
     "L'**àmbit** (o camp) d'un quantificador és la part de la fórmula on actua. Una aparició d'una variable és **lligada** si és dins de l'àmbit d'un quantificador de la mateixa variable, i **lliure** si no ho és. Una fórmula sense variables lliures és **tancada** (un enunciat): totes les fórmules dels exàmens ho són.",
     "El **ámbito** (o campo) de un cuantificador es la parte de la fórmula donde actúa. Una aparición de una variable es **ligada** si está dentro del ámbito de un cuantificador de la misma variable, y **libre** si no lo está. Una fórmula sin variables libres es **cerrada** (un enunciado): todas las fórmulas de los exámenes lo son.",
     "The **scope** of a quantifier is the part of the formula where it acts. An occurrence of a variable is **bound** if it is within the scope of a quantifier on the same variable, and **free** if it is not. A formula without free variables is **closed** (a sentence): all the formulas in the exams are."
    ]
   },
   {
    "caption": [
     "A dalt, els tres camps niats de `∀x ∃y (P(x,y) → ∃z ¬Q(x,z))`: totes les variables queden dins d'algun camp, és una fórmula tancada. A baix, a `∀x (∃y P(x,y,z) ∨ Q(x,z)) ∨ R(x)` les `z` no tenen cap quantificador i l'última `x` cau fora del parèntesi de `∀x`: són lliures.",
     "Arriba, los tres campos anidados de `∀x ∃y (P(x,y) → ∃z ¬Q(x,z))`: todas las variables quedan dentro de algún campo, es una fórmula cerrada. Abajo, en `∀x (∃y P(x,y,z) ∨ Q(x,z)) ∨ R(x)` las `z` no tienen cuantificador y la última `x` cae fuera del paréntesis de `∀x`: son libres.",
     "Above, the three nested scopes of `∀x ∃y (P(x,y) → ∃z ¬Q(x,z))`: every variable is inside some scope, it is a closed formula. Below, in `∀x (∃y P(x,y,z) ∨ Q(x,z)) ∨ R(x)` the `z` have no quantifier and the last `x` falls outside the parenthesis of `∀x`: they are free."
    ],
    "cls": "vz",
    "svg": [
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 330\" role=\"img\" aria-label=\"Camps dels quantificadors i variables lliures\"><defs><marker id=\"ar-sc\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-sc\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-sc\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-sc\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><text x=\"20.0\" y=\"26.0\" class=\"vz-cap\" text-anchor=\"start\">Camp de cada quantificador</text><text x=\"148.4\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">∀</text><text x=\"161.6\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"188.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">∃</text><text x=\"201.2\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">y</text><text x=\"227.6\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"240.8\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">P</text><text x=\"254.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"267.2\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"280.4\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">,</text><text x=\"293.6\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">y</text><text x=\"306.8\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><text x=\"333.2\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">→</text><text x=\"359.6\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:22px\">∃</text><text x=\"372.8\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:22px\">z</text><text x=\"399.2\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">¬</text><text x=\"412.4\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">Q</text><text x=\"425.6\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"438.8\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"452.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">,</text><text x=\"465.2\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:22px\">z</text><text x=\"478.4\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><text x=\"491.6\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><path d=\"M181.4 78.0 L181.4 84.0 L498.2 84.0 L498.2 78.0\" class=\"vz-lnA\"></path><text x=\"506.2\" y=\"88.0\" class=\"vz-lab vz-tA\" text-anchor=\"start\">∀x</text><path d=\"M221.0 96.0 L221.0 102.0 L498.2 102.0 L498.2 96.0\" class=\"vz-lnI\"></path><text x=\"506.2\" y=\"106.0\" class=\"vz-lab vz-tI\" text-anchor=\"start\">∃y</text><path d=\"M392.6 114.0 L392.6 120.0 L485.0 120.0 L485.0 114.0\" class=\"vz-lnT\"></path><text x=\"384.6\" y=\"124.0\" class=\"vz-lab vz-tT\" text-anchor=\"end\">∃z</text><text x=\"320.0\" y=\"150.0\" class=\"vz-sm\" text-anchor=\"middle\">Cada variable pren el color del quantificador que la lliga.</text><text x=\"20.0\" y=\"196.0\" class=\"vz-cap\" text-anchor=\"start\">Variables lliures (sense quantificador que les tanqui)</text><text x=\"115.4\" y=\"236.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">∀</text><text x=\"128.6\" y=\"236.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"155.0\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"168.2\" y=\"236.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">∃</text><text x=\"181.4\" y=\"236.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">y</text><text x=\"207.8\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">P</text><text x=\"221.0\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"234.2\" y=\"236.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"247.4\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">,</text><text x=\"260.6\" y=\"236.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">y</text><text x=\"273.8\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">,</text><text x=\"287.0\" y=\"236.0\" class=\"vz-mono vz-cD\" text-anchor=\"middle\" style=\"font-size:22px\">z</text><text x=\"300.2\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><text x=\"326.6\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">∨</text><text x=\"353.0\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">Q</text><text x=\"366.2\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"379.4\" y=\"236.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"392.6\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">,</text><text x=\"405.8\" y=\"236.0\" class=\"vz-mono vz-cD\" text-anchor=\"middle\" style=\"font-size:22px\">z</text><text x=\"419.0\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><text x=\"432.2\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><text x=\"458.6\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">∨</text><text x=\"485.0\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">R</text><text x=\"498.2\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"511.4\" y=\"236.0\" class=\"vz-mono vz-cD\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"524.6\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><path d=\"M148.4 248.0 L148.4 254.0 L438.8 254.0 L438.8 248.0\" class=\"vz-lnA\"></path><text x=\"142.4\" y=\"258.0\" class=\"vz-lab vz-tA\" text-anchor=\"end\">∀x</text><circle cx=\"287.0\" cy=\"229.0\" r=\"14.0\" class=\"vz-ring\"></circle><circle cx=\"405.8\" cy=\"229.0\" r=\"14.0\" class=\"vz-ring\"></circle><circle cx=\"511.4\" cy=\"229.0\" r=\"14.0\" class=\"vz-ring\"></circle><text x=\"287.0\" y=\"290.0\" class=\"vz-lab vz-tD\" text-anchor=\"middle\">lliure</text><line x1=\"287.0\" y1=\"278.0\" x2=\"287.0\" y2=\"246.0\" class=\"vz-lead\"></line><text x=\"405.8\" y=\"290.0\" class=\"vz-lab vz-tD\" text-anchor=\"middle\">lliure</text><line x1=\"405.8\" y1=\"278.0\" x2=\"405.8\" y2=\"246.0\" class=\"vz-lead\"></line><text x=\"511.4\" y=\"290.0\" class=\"vz-lab vz-tD\" text-anchor=\"middle\">lliure</text><line x1=\"511.4\" y1=\"278.0\" x2=\"511.4\" y2=\"246.0\" class=\"vz-lead\"></line><text x=\"320.0\" y=\"318.0\" class=\"vz-sm\" text-anchor=\"middle\">La x de R(x) es diu igual, però queda fora del parèntesi de ∀x: és una altra variable.</text></svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 330\" role=\"img\" aria-label=\"Campos de los cuantificadores y variables libres\"><defs><marker id=\"ar-sc\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-sc\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-sc\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-sc\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><text x=\"20.0\" y=\"26.0\" class=\"vz-cap\" text-anchor=\"start\">Campo de cada cuantificador</text><text x=\"148.4\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">∀</text><text x=\"161.6\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"188.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">∃</text><text x=\"201.2\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">y</text><text x=\"227.6\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"240.8\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">P</text><text x=\"254.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"267.2\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"280.4\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">,</text><text x=\"293.6\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">y</text><text x=\"306.8\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><text x=\"333.2\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">→</text><text x=\"359.6\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:22px\">∃</text><text x=\"372.8\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:22px\">z</text><text x=\"399.2\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">¬</text><text x=\"412.4\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">Q</text><text x=\"425.6\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"438.8\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"452.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">,</text><text x=\"465.2\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:22px\">z</text><text x=\"478.4\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><text x=\"491.6\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><path d=\"M181.4 78.0 L181.4 84.0 L498.2 84.0 L498.2 78.0\" class=\"vz-lnA\"></path><text x=\"506.2\" y=\"88.0\" class=\"vz-lab vz-tA\" text-anchor=\"start\">∀x</text><path d=\"M221.0 96.0 L221.0 102.0 L498.2 102.0 L498.2 96.0\" class=\"vz-lnI\"></path><text x=\"506.2\" y=\"106.0\" class=\"vz-lab vz-tI\" text-anchor=\"start\">∃y</text><path d=\"M392.6 114.0 L392.6 120.0 L485.0 120.0 L485.0 114.0\" class=\"vz-lnT\"></path><text x=\"384.6\" y=\"124.0\" class=\"vz-lab vz-tT\" text-anchor=\"end\">∃z</text><text x=\"320.0\" y=\"150.0\" class=\"vz-sm\" text-anchor=\"middle\">Cada variable toma el color del cuantificador que la liga.</text><text x=\"20.0\" y=\"196.0\" class=\"vz-cap\" text-anchor=\"start\">Variables libres (sin cuantificador que las cierre)</text><text x=\"115.4\" y=\"236.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">∀</text><text x=\"128.6\" y=\"236.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"155.0\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"168.2\" y=\"236.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">∃</text><text x=\"181.4\" y=\"236.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">y</text><text x=\"207.8\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">P</text><text x=\"221.0\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"234.2\" y=\"236.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"247.4\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">,</text><text x=\"260.6\" y=\"236.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">y</text><text x=\"273.8\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">,</text><text x=\"287.0\" y=\"236.0\" class=\"vz-mono vz-cD\" text-anchor=\"middle\" style=\"font-size:22px\">z</text><text x=\"300.2\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><text x=\"326.6\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">∨</text><text x=\"353.0\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">Q</text><text x=\"366.2\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"379.4\" y=\"236.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"392.6\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">,</text><text x=\"405.8\" y=\"236.0\" class=\"vz-mono vz-cD\" text-anchor=\"middle\" style=\"font-size:22px\">z</text><text x=\"419.0\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><text x=\"432.2\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><text x=\"458.6\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">∨</text><text x=\"485.0\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">R</text><text x=\"498.2\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"511.4\" y=\"236.0\" class=\"vz-mono vz-cD\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"524.6\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><path d=\"M148.4 248.0 L148.4 254.0 L438.8 254.0 L438.8 248.0\" class=\"vz-lnA\"></path><text x=\"142.4\" y=\"258.0\" class=\"vz-lab vz-tA\" text-anchor=\"end\">∀x</text><circle cx=\"287.0\" cy=\"229.0\" r=\"14.0\" class=\"vz-ring\"></circle><circle cx=\"405.8\" cy=\"229.0\" r=\"14.0\" class=\"vz-ring\"></circle><circle cx=\"511.4\" cy=\"229.0\" r=\"14.0\" class=\"vz-ring\"></circle><text x=\"287.0\" y=\"290.0\" class=\"vz-lab vz-tD\" text-anchor=\"middle\">libre</text><line x1=\"287.0\" y1=\"278.0\" x2=\"287.0\" y2=\"246.0\" class=\"vz-lead\"></line><text x=\"405.8\" y=\"290.0\" class=\"vz-lab vz-tD\" text-anchor=\"middle\">libre</text><line x1=\"405.8\" y1=\"278.0\" x2=\"405.8\" y2=\"246.0\" class=\"vz-lead\"></line><text x=\"511.4\" y=\"290.0\" class=\"vz-lab vz-tD\" text-anchor=\"middle\">libre</text><line x1=\"511.4\" y1=\"278.0\" x2=\"511.4\" y2=\"246.0\" class=\"vz-lead\"></line><text x=\"320.0\" y=\"318.0\" class=\"vz-sm\" text-anchor=\"middle\">La x de R(x) se llama igual, pero queda fuera del paréntesis de ∀x: es otra variable.</text></svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 330\" role=\"img\" aria-label=\"Scopes of the quantifiers and free variables\"><defs><marker id=\"ar-sc\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-sc\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-sc\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-sc\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><text x=\"20.0\" y=\"26.0\" class=\"vz-cap\" text-anchor=\"start\">Scope of each quantifier</text><text x=\"148.4\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">∀</text><text x=\"161.6\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"188.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">∃</text><text x=\"201.2\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">y</text><text x=\"227.6\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"240.8\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">P</text><text x=\"254.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"267.2\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"280.4\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">,</text><text x=\"293.6\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">y</text><text x=\"306.8\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><text x=\"333.2\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">→</text><text x=\"359.6\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:22px\">∃</text><text x=\"372.8\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:22px\">z</text><text x=\"399.2\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">¬</text><text x=\"412.4\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">Q</text><text x=\"425.6\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"438.8\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"452.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">,</text><text x=\"465.2\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:22px\">z</text><text x=\"478.4\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><text x=\"491.6\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><path d=\"M181.4 78.0 L181.4 84.0 L498.2 84.0 L498.2 78.0\" class=\"vz-lnA\"></path><text x=\"506.2\" y=\"88.0\" class=\"vz-lab vz-tA\" text-anchor=\"start\">∀x</text><path d=\"M221.0 96.0 L221.0 102.0 L498.2 102.0 L498.2 96.0\" class=\"vz-lnI\"></path><text x=\"506.2\" y=\"106.0\" class=\"vz-lab vz-tI\" text-anchor=\"start\">∃y</text><path d=\"M392.6 114.0 L392.6 120.0 L485.0 120.0 L485.0 114.0\" class=\"vz-lnT\"></path><text x=\"384.6\" y=\"124.0\" class=\"vz-lab vz-tT\" text-anchor=\"end\">∃z</text><text x=\"320.0\" y=\"150.0\" class=\"vz-sm\" text-anchor=\"middle\">Each variable takes the colour of the quantifier that binds it.</text><text x=\"20.0\" y=\"196.0\" class=\"vz-cap\" text-anchor=\"start\">Free variables (with no quantifier to close them)</text><text x=\"115.4\" y=\"236.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">∀</text><text x=\"128.6\" y=\"236.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"155.0\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"168.2\" y=\"236.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">∃</text><text x=\"181.4\" y=\"236.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">y</text><text x=\"207.8\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">P</text><text x=\"221.0\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"234.2\" y=\"236.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"247.4\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">,</text><text x=\"260.6\" y=\"236.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:22px\">y</text><text x=\"273.8\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">,</text><text x=\"287.0\" y=\"236.0\" class=\"vz-mono vz-cD\" text-anchor=\"middle\" style=\"font-size:22px\">z</text><text x=\"300.2\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><text x=\"326.6\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">∨</text><text x=\"353.0\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">Q</text><text x=\"366.2\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"379.4\" y=\"236.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"392.6\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">,</text><text x=\"405.8\" y=\"236.0\" class=\"vz-mono vz-cD\" text-anchor=\"middle\" style=\"font-size:22px\">z</text><text x=\"419.0\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><text x=\"432.2\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><text x=\"458.6\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">∨</text><text x=\"485.0\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">R</text><text x=\"498.2\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">(</text><text x=\"511.4\" y=\"236.0\" class=\"vz-mono vz-cD\" text-anchor=\"middle\" style=\"font-size:22px\">x</text><text x=\"524.6\" y=\"236.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:22px\">)</text><path d=\"M148.4 248.0 L148.4 254.0 L438.8 254.0 L438.8 248.0\" class=\"vz-lnA\"></path><text x=\"142.4\" y=\"258.0\" class=\"vz-lab vz-tA\" text-anchor=\"end\">∀x</text><circle cx=\"287.0\" cy=\"229.0\" r=\"14.0\" class=\"vz-ring\"></circle><circle cx=\"405.8\" cy=\"229.0\" r=\"14.0\" class=\"vz-ring\"></circle><circle cx=\"511.4\" cy=\"229.0\" r=\"14.0\" class=\"vz-ring\"></circle><text x=\"287.0\" y=\"290.0\" class=\"vz-lab vz-tD\" text-anchor=\"middle\">free</text><line x1=\"287.0\" y1=\"278.0\" x2=\"287.0\" y2=\"246.0\" class=\"vz-lead\"></line><text x=\"405.8\" y=\"290.0\" class=\"vz-lab vz-tD\" text-anchor=\"middle\">free</text><line x1=\"405.8\" y1=\"278.0\" x2=\"405.8\" y2=\"246.0\" class=\"vz-lead\"></line><text x=\"511.4\" y=\"290.0\" class=\"vz-lab vz-tD\" text-anchor=\"middle\">free</text><line x1=\"511.4\" y1=\"278.0\" x2=\"511.4\" y2=\"246.0\" class=\"vz-lead\"></line><text x=\"320.0\" y=\"318.0\" class=\"vz-sm\" text-anchor=\"middle\">The x of R(x) has the same name, but it falls outside the parenthesis of ∀x: it is a different variable.</text></svg></div>"
    ],
    "t": "diagram",
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Per a cada variable, busqueu cap a l'esquerra el quantificador que la lliga i comproveu que la variable és dins dels seus parèntesis. Si en formalitzar us queda una variable lliure, gairebé segur que us falta un quantificador o un parèntesi.",
       "Para cada variable, buscad hacia la izquierda el cuantificador que la liga y comprobad que la variable está dentro de sus paréntesis. Si al formalizar os queda una variable libre, casi seguro que os falta un cuantificador o un paréntesis.",
       "For each variable, look to the left for the quantifier that binds it and check that the variable is inside its parentheses. If a free variable is left when you formalise, you are almost certainly missing a quantifier or a parenthesis."
      ]
     }
    ],
    "t": "tip",
    "title": [
     "Com comprovar-ho",
     "Cómo comprobarlo",
     "How to check it"
    ],
    "mode": "explained"
   }
  ],
  "u4-comprova-que-has-entes": [
   {
    "t": "check",
    "ex": {
     "id": "u4-comprova-que-has-entes-q1",
     "type": "mcq",
     "q": [
      "Quina d'aquestes expressions **no** és una fórmula ben formada?",
      "¿Cuál de estas expresiones **no** es una fórmula bien formada?",
      "Which of these expressions is **not** a well-formed formula?"
     ],
     "opts": [
      "`∀x (P(x) → Q(f(x)))`",
      "`P(Q(a))`",
      "`∃y R(a, y)`",
      "`¬P(b) ∨ Q(b)`"
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "`Q(a)` és una fórmula (cert o fals), i un predicat només pot tenir termes com a arguments.",
        "`Q(a)` es una fórmula (cierto o falso), y un predicado solo puede tener términos como argumentos.",
        "`Q(a)` is a formula (true or false), and a predicate can only have terms as arguments."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "u4-comprova-que-has-entes-q2",
     "type": "mcq",
     "q": [
      "A `∀x P(x) ∧ Q(x)`, la segona x és:",
      "En `∀x P(x) ∧ Q(x)`, la segunda x es:",
      "In `∀x P(x) ∧ Q(x)`, the second x is:"
     ],
     "opts": [
      [
       "lligada pel ∀x",
       "ligada por el ∀x",
       "bound by the ∀x"
      ],
      [
       "una constant",
       "una constante",
       "a constant"
      ],
      [
       "lliure",
       "libre",
       "free"
      ],
      [
       "lligada per un ∃ implícit",
       "ligada por un ∃ implícito",
       "bound by an implicit ∃"
      ]
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "L'àmbit de `∀x` és només `P(x)`. Per lligar-la caldria `∀x (P(x) ∧ Q(x))`.",
        "El ámbito de `∀x` es solo `P(x)`. Para ligarla haría falta `∀x (P(x) ∧ Q(x))`.",
        "The scope of `∀x` is only `P(x)`. To bind it you would need `∀x (P(x) ∧ Q(x))`."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "u4-comprova-que-has-entes-q3",
     "type": "mcq",
     "q": [
      "«La mare del Jordi és metgessa». Amb la funció `m(x)` (la mare de x) i el predicat `M(x)` (x és metge), és:",
      "«La madre de Jordi es médica». Con la función `m(x)` (la madre de x) y el predicado `M(x)` (x es médico), es:",
      "“Jordi's mother is a doctor”. With the function `m(x)` (the mother of x) and the predicate `M(x)` (x is a doctor), it is:"
     ],
     "opts": [
      "`M(m(jordi))`",
      "`m(M(jordi))`",
      "`M(jordi) ∧ m(jordi)`",
      "`∃x M(x)`"
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "`m(jordi)` és un terme (una persona) i el predicat M en diu una propietat.",
        "`m(jordi)` es un término (una persona) y el predicado M dice de él una propiedad.",
        "`m(jordi)` is a term (a person) and the predicate M states a property of it."
       ]
      }
     ]
    }
   }
  ]
 },
 "examEnd": [
  {
   "id": "u4-x1",
   "type": "mcq",
   "q": [
    "A `∀x (P(x) → Q(y)) ∧ R(x)`, quines aparicions són lliures?",
    "En `∀x (P(x) → Q(y)) ∧ R(x)`, ¿qué apariciones son libres?",
    "In `∀x (P(x) → Q(y)) ∧ R(x)`, which occurrences are free?"
   ],
   "opts": [
    [
     "només la y",
     "solo la y",
     "only y"
    ],
    [
     "la y i l'última x",
     "la y y la última x",
     "y and the last x"
    ],
    [
     "cap",
     "ninguna",
     "none"
    ],
    [
     "totes les x",
     "todas las x",
     "all the x"
    ]
   ],
   "answer": 1,
   "sol": [
    {
     "t": "p",
     "x": [
      "La y no té quantificador i l'x de `R(x)` queda fora del parèntesi de `∀x`.",
      "La y no tiene cuantificador y la x de `R(x)` queda fuera del paréntesis de `∀x`.",
      "y has no quantifier and the x of `R(x)` falls outside the parenthesis of `∀x`."
     ]
    }
   ]
  },
  {
   "id": "u4-x2",
   "type": "mcq",
   "q": [
    "Quina d'aquestes expressions és un **terme**?",
    "¿Cuál de estas expresiones es un **término**?",
    "Which of these expressions is a **term**?"
   ],
   "opts": [
    "`m(2010)`",
    "`L(a, b)`",
    "`∀x P(x)`",
    "`¬P(a)`"
   ],
   "answer": 0,
   "sol": [
    {
     "t": "p",
     "x": [
      "Una funció aplicada a una constant designa un objecte; les altres són fórmules (cert o fals).",
      "Una función aplicada a una constante designa un objeto; las otras son fórmulas (cierto o falso).",
      "A function applied to a constant denotes an object; the others are formulas (true or false)."
     ]
    }
   ]
  },
  {
   "id": "u4-x3",
   "type": "num",
   "q": [
    "Quina és l'aritat del predicat `R(x, y, z)`?",
    "¿Cuál es la aridad del predicado `R(x, y, z)`?",
    "What is the arity of the predicate `R(x, y, z)`?"
   ],
   "answer": 3,
   "sol": [
    {
     "t": "p",
     "x": [
      "L'aritat és el nombre d'arguments: tres.",
      "La aridad es el número de argumentos: tres.",
      "The arity is the number of arguments: three."
     ]
    }
   ]
  }
 ]
};
