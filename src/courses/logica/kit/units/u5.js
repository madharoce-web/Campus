// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "És l'exercici que més pesa al CP2 (40%). Es resol amb un mètode fix i un petit catàleg de patrons: gairebé totes les frases dels exàmens en són combinacions.",
    "Es el ejercicio que más pesa en el CP2 (40%). Se resuelve con un método fijo y un pequeño catálogo de patrones: casi todas las frases de los exámenes son combinaciones de ellos.",
    "It is the exercise with the most weight in Test 2 (40%). It is solved with a fixed method and a small catalogue of patterns: almost all the sentences in the exams are combinations of them."
   ]
  }
 ],
 "sections": {
  "u5-el-metode": [
   {
    "h": [
     "<ol class=\"steps\">\n<li><b>Diccionari.</b> Escriviu les constants (persones, països, llibres concrets), els predicats amb el significat de cada argument i les funcions. A l'examen, els predicats solen venir donats; les constants les heu de definir vosaltres.</li>\n<li><b>De qui parla la frase?</b> D'un objecte concret (constant), de tots (<code>∀</code>) o d'algun (<code>∃</code>). Paraules clau: «tots», «tothom», «qualsevol», «cada» → <code>∀</code>; «algun», «hi ha», «existeix», «un» → <code>∃</code>; «cap», «ningú», «no tots», «només» → patrons de sota.</li>\n<li><b>Regla d'or:</b> <code>∀</code> va amb <code>→</code> i <code>∃</code> va amb <code>∧</code>.</li>\n<li><b>Construïu de fora cap a dins</b>, un quantificador cada vegada, amb parèntesis que tanquin tota la part on actua.</li>\n<li><b>Comproveu</b> que no queda cap variable lliure i llegiu la fórmula en veu alta.</li>\n</ol>",
     "<ol class=\"steps\">\n<li><b>Diccionario.</b> Escribid las constantes (personas, países, libros concretos), los predicados con el significado de cada argumento y las funciones. En el examen, los predicados suelen venir dados; las constantes las tenéis que definir vosotros.</li>\n<li><b>¿De quién habla la frase?</b> De un objeto concreto (constante), de todos (<code>∀</code>) o de alguno (<code>∃</code>). Palabras clave: «todos», «todo el mundo», «cualquiera», «cada» → <code>∀</code>; «alguno», «hay», «existe», «un» → <code>∃</code>; «ninguno», «nadie», «no todos», «solo» → patrones de abajo.</li>\n<li><b>Regla de oro:</b> <code>∀</code> va con <code>→</code> y <code>∃</code> va con <code>∧</code>.</li>\n<li><b>Construid de fuera hacia dentro</b>, un cuantificador cada vez, con paréntesis que cierren toda la parte donde actúa.</li>\n<li><b>Comprobad</b> que no queda ninguna variable libre y leed la fórmula en voz alta.</li>\n</ol>",
     "<ol class=\"steps\">\n<li><b>Dictionary.</b> Write down the constants (people, countries, specific books), the predicates with the meaning of each argument and the functions. In the exam, the predicates are usually given; you have to define the constants yourselves.</li>\n<li><b>Who is the sentence about?</b> About a specific object (constant), about all (<code>∀</code>) or about some (<code>∃</code>). Key words: “all”, “everyone”, “anyone”, “each” → <code>∀</code>; “some”, “there is”, “there exists”, “a” → <code>∃</code>; “none”, “nobody”, “not all”, “only” → patterns below.</li>\n<li><b>Golden rule:</b> <code>∀</code> goes with <code>→</code> and <code>∃</code> goes with <code>∧</code>.</li>\n<li><b>Build from the outside in</b>, one quantifier at a time, with parentheses that close the whole part where it acts.</li>\n<li><b>Check</b> that no free variable is left and read the formula aloud.</li>\n</ol>"
    ],
    "t": "html"
   }
  ],
  "u5-la-regla-d-or-amb-amb": [
   {
    "t": "p",
    "x": [
     "«Tots els estudiants treballen» (`E(x)`: x és estudiant, `T(x)`: x treballa) no parla de tothom, sinó dels que són estudiants. La condició «ser estudiant» és un filtre, i un filtre amb `∀` s'escriu amb una implicació:",
     "«Todos los estudiantes trabajan» (`E(x)`: x es estudiante, `T(x)`: x trabaja) no habla de todo el mundo, sino de los que son estudiantes. La condición «ser estudiante» es un filtro, y un filtro con `∀` se escribe con una implicación:",
     "“All students work” (`E(x)`: x is a student, `T(x)`: x works) is not about everyone, but about those who are students. The condition “being a student” is a filter, and a filter with `∀` is written with an implication:"
    ]
   },
   {
    "head": [
     "Fórmula",
     [
      "Què diu realment",
      "Qué dice realmente",
      "What it really says"
     ],
     ""
    ],
    "rows": [
     [
      "`∀x (E(x) → T(x))`",
      [
       "per a tothom: si és estudiant, treballa",
       "para todo el mundo: si es estudiante, trabaja",
       "for everyone: if they are a student, they work"
      ],
      "**correcta**"
     ],
     [
      "`∀x (E(x) ∧ T(x))`",
      [
       "tothom és estudiant i tothom treballa",
       "todo el mundo es estudiante y todo el mundo trabaja",
       "everyone is a student and everyone works"
      ],
      [
       "massa forta",
       "demasiado fuerte",
       "too strong"
      ]
     ],
     [
      "`∃x (E(x) ∧ T(x))`",
      [
       "algun estudiant treballa",
       "algún estudiante trabaja",
       "some student works"
      ],
      [
       "**correcta** per «algun»",
       "**correcta** para «alguno»",
       "**correct** for “some”"
      ]
     ],
     [
      "`∃x (E(x) → T(x))`",
      [
       "existeix algú que, o no és estudiant, o treballa",
       "existe alguien que, o no es estudiante, o trabaja",
       "there is someone who either is not a student or works"
      ],
      [
       "massa feble: la fa certa qualsevol no estudiant",
       "demasiado débil: la hace cierta cualquier no estudiante",
       "too weak: any non-student makes it true"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "Comproveu-ho al laboratori: canvieu qui és estudiant o qui treballa i mireu quan és certa cada fórmula. Les dues últimes són les trampes clàssiques.",
     "Comprobadlo en el laboratorio: cambiad quién es estudiante o quién trabaja y mirad cuándo es cierta cada fórmula. Las dos últimas son las trampas clásicas.",
     "Check it in the lab: change who is a student or who works and see when each formula is true. The last two are the classic traps."
    ]
   },
   {
    "t": "lab",
    "id": "quant",
    "mode": "explained"
   }
  ],
  "u5-cataleg-de-patrons": [
   {
    "head": [
     [
      "Frase (A i B propietats)",
      "Frase (A y B propiedades)",
      "Sentence (A and B properties)"
     ],
     "Fórmula",
     [
      "Equivalent",
      "Equivalente",
      "Equivalent"
     ]
    ],
    "rows": [
     [
      [
       "Tots els A són B",
       "Todos los A son B",
       "All A are B"
      ],
      "`∀x (A(x) → B(x))`",
      ""
     ],
     [
      [
       "Algun A és B · Hi ha A que són B",
       "Algún A es B · Hay A que son B",
       "Some A is B · There are A that are B"
      ],
      "`∃x (A(x) ∧ B(x))`",
      ""
     ],
     [
      [
       "Cap A és B · Ningú que sigui A és B",
       "Ningún A es B · Nadie que sea A es B",
       "No A is B · Nobody who is A is B"
      ],
      "`∀x (A(x) → ¬B(x))`",
      "`¬∃x (A(x) ∧ B(x))`"
     ],
     [
      [
       "No tots els A són B · Algun A no és B",
       "No todos los A son B · Algún A no es B",
       "Not all A are B · Some A is not B"
      ],
      "`¬∀x (A(x) → B(x))`",
      "`∃x (A(x) ∧ ¬B(x))`"
     ],
     [
      [
       "Només els A són B",
       "Solo los A son B",
       "Only A are B"
      ],
      "`∀x (B(x) → A(x))`",
      [
       "la fletxa gira, com «només si»",
       "la flecha gira, como «solo si»",
       "the arrow turns round, as with “only if”"
      ]
     ],
     [
      [
       "Tothom és A · Ningú és A",
       "Todo el mundo es A · Nadie es A",
       "Everyone is A · Nobody is A"
      ],
      "`∀x A(x)` · `∀x ¬A(x)`",
      "`¬∃x A(x)`"
     ],
     [
      [
       "Els A que són C són B",
       "Los A que son C son B",
       "The A that are C are B"
      ],
      "`∀x ((A(x) ∧ C(x)) → B(x))`",
      [
       "totes les condicions a l'antecedent",
       "todas las condiciones en el antecedente",
       "all the conditions in the antecedent"
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
       "«No tots els estudiants aproven» deixa que n'aprovin uns quants: `∃x (E(x) ∧ ¬A(x))`. «Cap estudiant aprova» diu que no n'aprova cap: `∀x (E(x) → ¬A(x))`. Són fórmules diferents.",
       "«No todos los estudiantes aprueban» permite que aprueben unos cuantos: `∃x (E(x) ∧ ¬A(x))`. «Ningún estudiante aprueba» dice que no aprueba ninguno: `∀x (E(x) → ¬A(x))`. Son fórmulas diferentes.",
       "“Not all students pass” allows a few to pass: `∃x (E(x) ∧ ¬A(x))`. “No student passes” says that none passes: `∀x (E(x) → ¬A(x))`. They are different formulas."
      ]
     }
    ],
    "t": "warn",
    "title": [
     "«No tots» no és «cap»",
     "«No todos» no es «ninguno»",
     "“Not all” is not “none”"
    ]
   }
  ],
  "u5-relacions-i-quantificadors-niuats": [
   {
    "t": "p",
    "x": [
     "Amb predicats de dos arguments apareixen dos quantificadors. Es formalitza per capes: primer la variable de fora, després la de dins.",
     "Con predicados de dos argumentos aparecen dos cuantificadores. Se formaliza por capas: primero la variable de fuera, después la de dentro.",
     "With two-argument predicates two quantifiers appear. You formalise in layers: first the outer variable, then the inner one."
    ]
   },
   {
    "t": "p",
    "x": [
     "«Tots els països que el Joan ha visitat són a Europa» → per a tot x, *si el Joan ha visitat x*, x és a Europa → `∀x (V(joan, x) → C(x, europa))`.",
     "«Todos los países que Joan ha visitado están en Europa» → para todo x, *si Joan ha visitado x*, x está en Europa → `∀x (V(joan, x) → C(x, europa))`.",
     "“All the countries Joan has visited are in Europe” → for every x, *if Joan has visited x*, x is in Europe → `∀x (V(joan, x) → C(x, europa))`."
    ]
   },
   {
    "t": "p",
    "x": [
     "«Tothom qui viatja al Brasil té algun amic que viatja a Espanya» → `∀x (V(x, brasil) → ∃y (A(x, y) ∧ V(y, espanya)))`: l'`∀x` va amb fletxa, l'`∃y` amb conjunció, i l'`∃y` queda dins perquè l'amic depèn de cada x.",
     "«Todo el que viaja a Brasil tiene algún amigo que viaja a España» → `∀x (V(x, brasil) → ∃y (A(x, y) ∧ V(y, espanya)))`: el `∀x` va con flecha, el `∃y` con conjunción, y el `∃y` queda dentro porque el amigo depende de cada x.",
     "“Everyone who travels to Brazil has some friend who travels to Spain” → `∀x (V(x, brasil) → ∃y (A(x, y) ∧ V(y, espanya)))`: the `∀x` goes with an arrow, the `∃y` with a conjunction, and the `∃y` stays inside because the friend depends on each x."
    ]
   },
   {
    "id": "u5-l-ordre-dels-quantificadors-importa",
    "t": "h",
    "x": [
     "L'ordre dels quantificadors importa",
     "El orden de los cuantificadores importa",
     "The order of quantifiers matters"
    ]
   },
   {
    "caption": [
     "A l'esquerra cada persona segueix algú diferent: `∀x ∃y` és certa però `∃y ∀x` és falsa. A la dreta tothom segueix la mateixa persona, i són certes totes dues. A la forma clausal, aquesta diferència es veu com una funció de Skolem `f(x)` o una constant.",
     "A la izquierda cada persona sigue a alguien diferente: `∀x ∃y` es cierta pero `∃y ∀x` es falsa. A la derecha todo el mundo sigue a la misma persona, y son ciertas las dos. En la forma clausal, esta diferencia se ve como una función de Skolem `f(x)` o una constante.",
     "On the left each person follows someone different: `∀x ∃y` is true but `∃y ∀x` is false. On the right everyone follows the same person, and both are true. In clausal form, this difference shows up as a Skolem function `f(x)` or a constant."
    ],
    "cls": "vz",
    "svg": [
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 700 230\" role=\"img\" aria-label=\"∀x ∃y S(x,y): cadascú segueix algú; ∃y ∀x S(x,y): hi ha algú que tothom segueix\">\n<defs><marker id=\"u5a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"u5b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs>\n<text class=\"vz-lab vz-tA\" x=\"170\" y=\"24\" text-anchor=\"middle\">∀x ∃y S(x,y)</text><text class=\"vz-sm\" x=\"170\" y=\"42\" text-anchor=\"middle\">tothom segueix algú (cadascú el seu)</text>\n<text class=\"vz-lab vz-tI\" x=\"530\" y=\"24\" text-anchor=\"middle\">∃y ∀x S(x,y)</text><text class=\"vz-sm\" x=\"530\" y=\"42\" text-anchor=\"middle\">hi ha algú a qui segueix tothom</text>\n<g><circle class=\"vz-node\" cx=\"70\" cy=\"90\" r=\"20\"></circle><text class=\"vz-t\" x=\"70\" y=\"95\" text-anchor=\"middle\">Anna</text>\n<circle class=\"vz-node\" cx=\"70\" cy=\"150\" r=\"20\"></circle><text class=\"vz-t\" x=\"70\" y=\"155\" text-anchor=\"middle\">Biel</text>\n<circle class=\"vz-node\" cx=\"70\" cy=\"210\" r=\"18\"></circle><text class=\"vz-t\" x=\"70\" y=\"215\" text-anchor=\"middle\">Carla</text>\n<circle class=\"vz-node\" cx=\"270\" cy=\"90\" r=\"20\"></circle><text class=\"vz-t\" x=\"270\" y=\"95\" text-anchor=\"middle\">Anna</text>\n<circle class=\"vz-node\" cx=\"270\" cy=\"150\" r=\"20\"></circle><text class=\"vz-t\" x=\"270\" y=\"155\" text-anchor=\"middle\">Biel</text>\n<circle class=\"vz-node\" cx=\"270\" cy=\"210\" r=\"18\"></circle><text class=\"vz-t\" x=\"270\" y=\"215\" text-anchor=\"middle\">Carla</text>\n<path class=\"vz-lnA\" d=\"M90 92 L248 148\" marker-end=\"url(#u5a)\"></path><path class=\"vz-lnA\" d=\"M90 150 L250 208\" marker-end=\"url(#u5a)\"></path><path class=\"vz-lnA\" d=\"M88 206 L252 96\" marker-end=\"url(#u5a)\"></path></g>\n<g><circle class=\"vz-node\" cx=\"430\" cy=\"90\" r=\"20\"></circle><text class=\"vz-t\" x=\"430\" y=\"95\" text-anchor=\"middle\">Anna</text>\n<circle class=\"vz-node\" cx=\"430\" cy=\"150\" r=\"20\"></circle><text class=\"vz-t\" x=\"430\" y=\"155\" text-anchor=\"middle\">Biel</text>\n<circle class=\"vz-node\" cx=\"430\" cy=\"210\" r=\"18\"></circle><text class=\"vz-t\" x=\"430\" y=\"215\" text-anchor=\"middle\">Carla</text>\n<circle class=\"vz-nodeA\" cx=\"630\" cy=\"150\" r=\"22\"></circle><text class=\"vz-t\" x=\"630\" y=\"155\" text-anchor=\"middle\">Dani</text>\n<path class=\"vz-lnI\" d=\"M450 94 L608 144\" marker-end=\"url(#u5b)\"></path><path class=\"vz-lnI\" d=\"M450 150 L606 150\" marker-end=\"url(#u5b)\"></path><path class=\"vz-lnI\" d=\"M448 206 L608 156\" marker-end=\"url(#u5b)\"></path></g>\n<path class=\"vz-sep\" d=\"M350 60 V225\"></path>\n</svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 700 230\" role=\"img\" aria-label=\"∀x ∃y S(x,y): cada uno sigue a alguien; ∃y ∀x S(x,y): hay alguien a quien todos siguen\">\n<defs><marker id=\"u5a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"u5b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs>\n<text class=\"vz-lab vz-tA\" x=\"170\" y=\"24\" text-anchor=\"middle\">∀x ∃y S(x,y)</text><text class=\"vz-sm\" x=\"170\" y=\"42\" text-anchor=\"middle\">cada uno sigue a alguien (el suyo)</text>\n<text class=\"vz-lab vz-tI\" x=\"530\" y=\"24\" text-anchor=\"middle\">∃y ∀x S(x,y)</text><text class=\"vz-sm\" x=\"530\" y=\"42\" text-anchor=\"middle\">hay alguien a quien todos siguen</text>\n<g><circle class=\"vz-node\" cx=\"70\" cy=\"90\" r=\"20\"></circle><text class=\"vz-t\" x=\"70\" y=\"95\" text-anchor=\"middle\">Anna</text>\n<circle class=\"vz-node\" cx=\"70\" cy=\"150\" r=\"20\"></circle><text class=\"vz-t\" x=\"70\" y=\"155\" text-anchor=\"middle\">Biel</text>\n<circle class=\"vz-node\" cx=\"70\" cy=\"210\" r=\"18\"></circle><text class=\"vz-t\" x=\"70\" y=\"215\" text-anchor=\"middle\">Carla</text>\n<circle class=\"vz-node\" cx=\"270\" cy=\"90\" r=\"20\"></circle><text class=\"vz-t\" x=\"270\" y=\"95\" text-anchor=\"middle\">Anna</text>\n<circle class=\"vz-node\" cx=\"270\" cy=\"150\" r=\"20\"></circle><text class=\"vz-t\" x=\"270\" y=\"155\" text-anchor=\"middle\">Biel</text>\n<circle class=\"vz-node\" cx=\"270\" cy=\"210\" r=\"18\"></circle><text class=\"vz-t\" x=\"270\" y=\"215\" text-anchor=\"middle\">Carla</text>\n<path class=\"vz-lnA\" d=\"M90 92 L248 148\" marker-end=\"url(#u5a)\"></path><path class=\"vz-lnA\" d=\"M90 150 L250 208\" marker-end=\"url(#u5a)\"></path><path class=\"vz-lnA\" d=\"M88 206 L252 96\" marker-end=\"url(#u5a)\"></path></g>\n<g><circle class=\"vz-node\" cx=\"430\" cy=\"90\" r=\"20\"></circle><text class=\"vz-t\" x=\"430\" y=\"95\" text-anchor=\"middle\">Anna</text>\n<circle class=\"vz-node\" cx=\"430\" cy=\"150\" r=\"20\"></circle><text class=\"vz-t\" x=\"430\" y=\"155\" text-anchor=\"middle\">Biel</text>\n<circle class=\"vz-node\" cx=\"430\" cy=\"210\" r=\"18\"></circle><text class=\"vz-t\" x=\"430\" y=\"215\" text-anchor=\"middle\">Carla</text>\n<circle class=\"vz-nodeA\" cx=\"630\" cy=\"150\" r=\"22\"></circle><text class=\"vz-t\" x=\"630\" y=\"155\" text-anchor=\"middle\">Dani</text>\n<path class=\"vz-lnI\" d=\"M450 94 L608 144\" marker-end=\"url(#u5b)\"></path><path class=\"vz-lnI\" d=\"M450 150 L606 150\" marker-end=\"url(#u5b)\"></path><path class=\"vz-lnI\" d=\"M448 206 L608 156\" marker-end=\"url(#u5b)\"></path></g>\n<path class=\"vz-sep\" d=\"M350 60 V225\"></path>\n</svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 700 230\" role=\"img\" aria-label=\"∀x ∃y S(x,y): everyone follows someone; ∃y ∀x S(x,y): there is someone whom everyone follows\">\n<defs><marker id=\"u5a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"u5b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs>\n<text class=\"vz-lab vz-tA\" x=\"170\" y=\"24\" text-anchor=\"middle\">∀x ∃y S(x,y)</text><text class=\"vz-sm\" x=\"170\" y=\"42\" text-anchor=\"middle\">everyone follows someone (their own)</text>\n<text class=\"vz-lab vz-tI\" x=\"530\" y=\"24\" text-anchor=\"middle\">∃y ∀x S(x,y)</text><text class=\"vz-sm\" x=\"530\" y=\"42\" text-anchor=\"middle\">there is someone whom everyone follows</text>\n<g><circle class=\"vz-node\" cx=\"70\" cy=\"90\" r=\"20\"></circle><text class=\"vz-t\" x=\"70\" y=\"95\" text-anchor=\"middle\">Anna</text>\n<circle class=\"vz-node\" cx=\"70\" cy=\"150\" r=\"20\"></circle><text class=\"vz-t\" x=\"70\" y=\"155\" text-anchor=\"middle\">Biel</text>\n<circle class=\"vz-node\" cx=\"70\" cy=\"210\" r=\"18\"></circle><text class=\"vz-t\" x=\"70\" y=\"215\" text-anchor=\"middle\">Carla</text>\n<circle class=\"vz-node\" cx=\"270\" cy=\"90\" r=\"20\"></circle><text class=\"vz-t\" x=\"270\" y=\"95\" text-anchor=\"middle\">Anna</text>\n<circle class=\"vz-node\" cx=\"270\" cy=\"150\" r=\"20\"></circle><text class=\"vz-t\" x=\"270\" y=\"155\" text-anchor=\"middle\">Biel</text>\n<circle class=\"vz-node\" cx=\"270\" cy=\"210\" r=\"18\"></circle><text class=\"vz-t\" x=\"270\" y=\"215\" text-anchor=\"middle\">Carla</text>\n<path class=\"vz-lnA\" d=\"M90 92 L248 148\" marker-end=\"url(#u5a)\"></path><path class=\"vz-lnA\" d=\"M90 150 L250 208\" marker-end=\"url(#u5a)\"></path><path class=\"vz-lnA\" d=\"M88 206 L252 96\" marker-end=\"url(#u5a)\"></path></g>\n<g><circle class=\"vz-node\" cx=\"430\" cy=\"90\" r=\"20\"></circle><text class=\"vz-t\" x=\"430\" y=\"95\" text-anchor=\"middle\">Anna</text>\n<circle class=\"vz-node\" cx=\"430\" cy=\"150\" r=\"20\"></circle><text class=\"vz-t\" x=\"430\" y=\"155\" text-anchor=\"middle\">Biel</text>\n<circle class=\"vz-node\" cx=\"430\" cy=\"210\" r=\"18\"></circle><text class=\"vz-t\" x=\"430\" y=\"215\" text-anchor=\"middle\">Carla</text>\n<circle class=\"vz-nodeA\" cx=\"630\" cy=\"150\" r=\"22\"></circle><text class=\"vz-t\" x=\"630\" y=\"155\" text-anchor=\"middle\">Dani</text>\n<path class=\"vz-lnI\" d=\"M450 94 L608 144\" marker-end=\"url(#u5b)\"></path><path class=\"vz-lnI\" d=\"M450 150 L606 150\" marker-end=\"url(#u5b)\"></path><path class=\"vz-lnI\" d=\"M448 206 L608 156\" marker-end=\"url(#u5b)\"></path></g>\n<path class=\"vz-sep\" d=\"M350 60 V225\"></path>\n</svg></div>"
    ],
    "t": "diagram",
    "mode": "explained"
   },
   {
    "t": "lab",
    "id": "order",
    "mode": "explained"
   }
  ],
  "u5-casos-que-cal-reconeixer": [
   {
    "id": "u5-nomes-amb-relacions",
    "t": "h",
    "x": [
     "«Només» amb relacions",
     "«Solo» con relaciones",
     "“Only” with relations"
    ]
   },
   {
    "t": "p",
    "x": [
     "«La Joana només menja plats vegetarians»: tot el que menja és vegetarià → `∀y (M(joana, y) → V(y))`. «Hi ha persones que únicament llegeixen llibres recomanats per algun crític» → `∃x (P(x) ∧ ∀y (L(x, y) → (B(y) ∧ ∃z (C(z) ∧ R(z, y)))))`.",
     "«Joana solo come platos vegetarianos»: todo lo que come es vegetariano → `∀y (M(joana, y) → V(y))`. «Hay personas que únicamente leen libros recomendados por algún crítico» → `∃x (P(x) ∧ ∀y (L(x, y) → (B(y) ∧ ∃z (C(z) ∧ R(z, y)))))`.",
     "“Joana only eats vegetarian dishes”: everything she eats is vegetarian → `∀y (M(joana, y) → V(y))`. “There are people who only read books recommended by some critic” → `∃x (P(x) ∧ ∀y (L(x, y) → (B(y) ∧ ∃z (C(z) ∧ R(z, y)))))`."
    ]
   },
   {
    "id": "u5-un-algu-a-la-condicio",
    "t": "h",
    "x": [
     "Un «algú» a la condició",
     "Un «alguien» en la condición",
     "A “someone” in the condition"
    ]
   },
   {
    "t": "p",
    "x": [
     "«Si a algú li agrada la paella, a la Joana també» → `∃x A(x, paella) → A(joana, paella)`. Fixeu-vos que l'`∃` és dins de la condició: equival a `∀x (A(x, paella) → A(joana, paella))`, i a la forma clausal es converteix en una variable universal.",
     "«Si a alguien le gusta la paella, a Joana también» → `∃x A(x, paella) → A(joana, paella)`. Fijaos en que el `∃` está dentro de la condición: equivale a `∀x (A(x, paella) → A(joana, paella))`, y en la forma clausal se convierte en una variable universal.",
     "“If someone likes paella, so does Joana” → `∃x A(x, paella) → A(joana, paella)`. Notice that the `∃` is inside the condition: it is equivalent to `∀x (A(x, paella) → A(joana, paella))`, and in clausal form it becomes a universal variable."
    ]
   },
   {
    "id": "u5-constants-i-funcions",
    "t": "h",
    "x": [
     "Constants i funcions",
     "Constantes y funciones",
     "Constants and functions"
    ]
   },
   {
    "t": "p",
    "x": [
     "Els objectes concrets són constants: «el Joan i l'Anna tenen un amic en comú» → `∃x (A(joan, x) ∧ A(anna, x))`, amb un sol `∃` perquè és el mateix amic. Les funcions retornen objectes: «en Pau llegeix el llibre més llegit del 2010» → `L(a, m(2010))`.",
     "Los objetos concretos son constantes: «Joan y Anna tienen un amigo en común» → `∃x (A(joan, x) ∧ A(anna, x))`, con un solo `∃` porque es el mismo amigo. Las funciones devuelven objetos: «Pau lee el libro más leído de 2010» → `L(a, m(2010))`.",
     "Specific objects are constants: “Joan and Anna have a friend in common” → `∃x (A(joan, x) ∧ A(anna, x))`, with a single `∃` because it is the same friend. Functions return objects: “Pau reads the most-read book of 2010” → `L(a, m(2010))`."
    ]
   },
   {
    "id": "u5-negacions-davant-dels-quantificadors",
    "t": "h",
    "x": [
     "Negacions davant dels quantificadors",
     "Negaciones delante de los cuantificadores",
     "Negations in front of quantifiers"
    ]
   },
   {
    "t": "p",
    "x": [
     "`¬∀x A ≡ ∃x ¬A` («no tothom» = «algú no») i `¬∃x A ≡ ∀x ¬A` («ningú» = «tothom no»). Totes dues formes són correctes a l'examen; la segona ja va de camí cap a la forma clausal.",
     "`¬∀x A ≡ ∃x ¬A` («no todo el mundo» = «alguien no») y `¬∃x A ≡ ∀x ¬A` («nadie» = «todo el mundo no»). Ambas formas son correctas en el examen; la segunda ya va camino de la forma clausal.",
     "`¬∀x A ≡ ∃x ¬A` (“not everyone” = “someone does not”) and `¬∃x A ≡ ∀x ¬A` (“nobody” = “everyone does not”). Both forms are correct in the exam; the second is already on its way to clausal form."
    ]
   }
  ],
  "u5-exemple-resolt-l-exercici-2-del-cp2-2025-26": [
   {
    "t": "p",
    "x": [
     "Predicats: `A(x,y)` x té amistat amb y · `V(x,y)` x ha viatjat al país y · `C(x,y)` el país x és al continent y · `D(x)` x té diners. Constants: `joan`, `anna`, `brasil`, `espanya`, `europa`.",
     "Predicados: `A(x,y)` x tiene amistad con y · `V(x,y)` x ha viajado al país y · `C(x,y)` el país x está en el continente y · `D(x)` x tiene dinero. Constantes: `joan`, `anna`, `brasil`, `espanya`, `europa`.",
     "Predicates: `A(x,y)` x is friends with y · `V(x,y)` x has travelled to country y · `C(x,y)` country x is on continent y · `D(x)` x has money. Constants: `joan`, `anna`, `brasil`, `espanya`, `europa`."
    ]
   },
   {
    "head": [
     "Frase",
     "Fórmula"
    ],
    "rows": [
     [
      [
       "(a) No totes les persones han viatjat al Brasil.",
       "(a) No todas las personas han viajado a Brasil.",
       "(a) Not all people have travelled to Brazil."
      ],
      "`¬∀x V(x, brasil)`"
     ],
     [
      [
       "(b) El Joan és amic de l'Anna, per tant, viatjaran al Brasil.",
       "(b) Joan es amigo de Anna, por tanto, viajarán a Brasil.",
       "(b) Joan is a friend of Anna, therefore they will travel to Brazil."
      ],
      "`A(joan, anna) → (V(joan, brasil) ∧ V(anna, brasil))`"
     ],
     [
      [
       "(c) Hi ha persones que tenen diners que no han viatjat al Brasil.",
       "(c) Hay personas que tienen dinero que no han viajado a Brasil.",
       "(c) There are people with money who have not travelled to Brazil."
      ],
      "`∃x (D(x) ∧ ¬V(x, brasil))`"
     ],
     [
      [
       "(d) El Joan i l'Anna tenen un amic en comú.",
       "(d) Joan y Anna tienen un amigo en común.",
       "(d) Joan and Anna have a friend in common."
      ],
      "`∃x (A(joan, x) ∧ A(anna, x))`"
     ],
     [
      [
       "(e) Tots els països que Joan ha viatjat estan a Europa.",
       "(e) Todos los países a los que ha viajado Joan están en Europa.",
       "(e) All the countries Joan has travelled to are in Europe."
      ],
      "`∀x (V(joan, x) → C(x, europa))`"
     ],
     [
      [
       "(f) Tothom qui viatja al Brasil té algun amic que viatja a Espanya.",
       "(f) Todo el que viaja a Brasil tiene algún amigo que viaja a España.",
       "(f) Everyone who travels to Brazil has some friend who travels to Spain."
      ],
      "`∀x (V(x, brasil) → ∃y (A(x, y) ∧ V(y, espanya)))`"
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "La forma clausal de cadascuna, i set conjunts més de frases resolts, són a [Formalització CP1](/logica/xe). Com es fa la forma clausal s'explica a la [unitat 7](/logica/u7).",
     "La forma clausal de cada una, y siete conjuntos más de frases resueltos, están en [Formalización CP1](/logica/xe). Cómo se hace la forma clausal se explica en la [unidad 7](/logica/u7).",
     "The clausal form of each one, and seven more sets of solved sentences, are in [CP1 formalisation](/logica/xe). How to obtain the clausal form is explained in [unit 7](/logica/u7)."
    ]
   }
  ],
  "u5-una-altra-notacio-amb-dos-punts": [
   {
    "t": "p",
    "x": [
     "Alguns materials escriuen `∀x : E(x) : T(x)` («per a tot x tal que E(x), T(x)»). El que hi ha entre els dos punts és el **rang** (el filtre) i el que hi ha al final, el **cos**. Es passa a la notació del seminari així: `∀x : R : C` = `∀x (R → C)` i `∃x : R : C` = `∃x (R ∧ C)`. És la regla d'or escrita d'una altra manera.",
     "Algunos materiales escriben `∀x : E(x) : T(x)` («para todo x tal que E(x), T(x)»). Lo que hay entre los dos puntos es el **rango** (el filtro) y lo que hay al final, el **cuerpo**. Se pasa a la notación del seminario así: `∀x : R : C` = `∀x (R → C)` y `∃x : R : C` = `∃x (R ∧ C)`. Es la regla de oro escrita de otra manera.",
     "Some materials write `∀x : E(x) : T(x)` (“for every x such that E(x), T(x)”). What is between the two colons is the **range** (the filter) and what comes at the end, the **body**. It is converted to the seminar notation like this: `∀x : R : C` = `∀x (R → C)` and `∃x : R : C` = `∃x (R ∧ C)`. It is the golden rule written differently."
    ]
   },
   {
    "caption": [
     "El **rang** (blau) diu de quins objectes parlem i el **cos** (verd) què n'afirmem. Amb `∀` el rang passa a ser la condició d'una fletxa: tots els E han de ser dins de T. Amb `∃` s'uneixen amb `∧`: n'hi ha prou amb un objecte que sigui E i T alhora.",
     "El **rango** (azul) dice de qué objetos hablamos y el **cuerpo** (verde) qué afirmamos de ellos. Con `∀` el rango pasa a ser la condición de una flecha: todos los E tienen que estar dentro de T. Con `∃` se unen con `∧`: basta con un objeto que sea E y T a la vez.",
     "The **range** (blue) says which objects we are talking about and the **body** (green) what we state about them. With `∀` the range becomes the condition of an arrow: all the E must be inside T. With `∃` they are joined with `∧`: one object that is both E and T is enough."
    ],
    "cls": "vz",
    "svg": [
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 340\" role=\"img\" aria-label=\"De la notació amb dos punts a la notació estàndard\"><defs><marker id=\"ar-co\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-co\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-co\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-co\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><text x=\"160.0\" y=\"26.0\" class=\"vz-cap\" text-anchor=\"middle\">∀ porta fletxa</text><text x=\"70.0\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">∀</text><text x=\"82.0\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"106.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">:</text><text x=\"130.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">E</text><text x=\"142.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"154.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"166.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"190.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">:</text><text x=\"214.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">T</text><text x=\"226.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"238.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"250.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><path d=\"M124.0 75.0 L124.0 80.0 L172.0 80.0 L172.0 75.0\" class=\"vz-lnI\"></path><text x=\"148.0\" y=\"98.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">rang</text><path d=\"M208.0 75.0 L208.0 80.0 L256.0 80.0 L256.0 75.0\" class=\"vz-lnT\"></path><text x=\"232.0\" y=\"98.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">cos</text><line x1=\"160.0\" y1=\"108.0\" x2=\"160.0\" y2=\"130.0\" class=\"vz-ln\" marker-end=\"url(#ar-co)\"></line><text x=\"70.0\" y=\"158.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">∀</text><text x=\"82.0\" y=\"158.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"106.0\" y=\"158.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"118.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">E</text><text x=\"130.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"142.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"154.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"178.0\" y=\"158.0\" class=\"vz-mono vz-cK vz-b\" text-anchor=\"middle\" style=\"font-size:20px\">→</text><text x=\"202.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">T</text><text x=\"214.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"226.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"238.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"250.0\" y=\"158.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"480.0\" y=\"26.0\" class=\"vz-cap\" text-anchor=\"middle\">∃ porta «i»</text><text x=\"390.0\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">∃</text><text x=\"402.0\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"426.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">:</text><text x=\"450.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">E</text><text x=\"462.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"474.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"486.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"510.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">:</text><text x=\"534.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">T</text><text x=\"546.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"558.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"570.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><path d=\"M444.0 75.0 L444.0 80.0 L492.0 80.0 L492.0 75.0\" class=\"vz-lnI\"></path><text x=\"468.0\" y=\"98.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">rang</text><path d=\"M528.0 75.0 L528.0 80.0 L576.0 80.0 L576.0 75.0\" class=\"vz-lnT\"></path><text x=\"552.0\" y=\"98.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">cos</text><line x1=\"480.0\" y1=\"108.0\" x2=\"480.0\" y2=\"130.0\" class=\"vz-ln\" marker-end=\"url(#ar-co)\"></line><text x=\"390.0\" y=\"158.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">∃</text><text x=\"402.0\" y=\"158.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"426.0\" y=\"158.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"438.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">E</text><text x=\"450.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"462.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"474.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"498.0\" y=\"158.0\" class=\"vz-mono vz-cK vz-b\" text-anchor=\"middle\" style=\"font-size:20px\">∧</text><text x=\"522.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">T</text><text x=\"534.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"546.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"558.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"570.0\" y=\"158.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><circle cx=\"160.0\" cy=\"252.0\" r=\"62.0\" class=\"vz-setT\"></circle><circle cx=\"140.0\" cy=\"262.0\" r=\"30.0\" class=\"vz-setI\"></circle><text x=\"198.0\" y=\"214.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">T</text><text x=\"140.0\" y=\"267.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">E</text><text x=\"160.0\" y=\"334.0\" class=\"vz-sm\" text-anchor=\"middle\">tot el rang queda dins del cos</text><circle cx=\"450.0\" cy=\"256.0\" r=\"46.0\" class=\"vz-setI\"></circle><circle cx=\"512.0\" cy=\"256.0\" r=\"46.0\" class=\"vz-setT\"></circle><text x=\"420.0\" y=\"260.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">E</text><text x=\"544.0\" y=\"260.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">T</text><circle cx=\"481.0\" cy=\"256.0\" r=\"6.0\" class=\"vz-dotA\"></circle><text x=\"481.0\" y=\"242.0\" class=\"vz-sm\" text-anchor=\"middle\">algú</text><text x=\"480.0\" y=\"334.0\" class=\"vz-sm\" text-anchor=\"middle\">hi ha algun punt a la intersecció</text><line x1=\"320.0\" y1=\"16.0\" x2=\"320.0\" y2=\"330.0\" class=\"vz-sep\"></line></svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 340\" role=\"img\" aria-label=\"De la notación con dos puntos a la notación estándar\"><defs><marker id=\"ar-co\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-co\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-co\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-co\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><text x=\"160.0\" y=\"26.0\" class=\"vz-cap\" text-anchor=\"middle\">∀ lleva flecha</text><text x=\"70.0\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">∀</text><text x=\"82.0\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"106.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">:</text><text x=\"130.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">E</text><text x=\"142.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"154.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"166.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"190.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">:</text><text x=\"214.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">T</text><text x=\"226.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"238.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"250.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><path d=\"M124.0 75.0 L124.0 80.0 L172.0 80.0 L172.0 75.0\" class=\"vz-lnI\"></path><text x=\"148.0\" y=\"98.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">rango</text><path d=\"M208.0 75.0 L208.0 80.0 L256.0 80.0 L256.0 75.0\" class=\"vz-lnT\"></path><text x=\"232.0\" y=\"98.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">cuerpo</text><line x1=\"160.0\" y1=\"108.0\" x2=\"160.0\" y2=\"130.0\" class=\"vz-ln\" marker-end=\"url(#ar-co)\"></line><text x=\"70.0\" y=\"158.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">∀</text><text x=\"82.0\" y=\"158.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"106.0\" y=\"158.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"118.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">E</text><text x=\"130.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"142.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"154.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"178.0\" y=\"158.0\" class=\"vz-mono vz-cK vz-b\" text-anchor=\"middle\" style=\"font-size:20px\">→</text><text x=\"202.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">T</text><text x=\"214.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"226.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"238.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"250.0\" y=\"158.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"480.0\" y=\"26.0\" class=\"vz-cap\" text-anchor=\"middle\">∃ lleva «y»</text><text x=\"390.0\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">∃</text><text x=\"402.0\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"426.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">:</text><text x=\"450.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">E</text><text x=\"462.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"474.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"486.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"510.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">:</text><text x=\"534.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">T</text><text x=\"546.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"558.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"570.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><path d=\"M444.0 75.0 L444.0 80.0 L492.0 80.0 L492.0 75.0\" class=\"vz-lnI\"></path><text x=\"468.0\" y=\"98.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">rango</text><path d=\"M528.0 75.0 L528.0 80.0 L576.0 80.0 L576.0 75.0\" class=\"vz-lnT\"></path><text x=\"552.0\" y=\"98.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">cuerpo</text><line x1=\"480.0\" y1=\"108.0\" x2=\"480.0\" y2=\"130.0\" class=\"vz-ln\" marker-end=\"url(#ar-co)\"></line><text x=\"390.0\" y=\"158.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">∃</text><text x=\"402.0\" y=\"158.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"426.0\" y=\"158.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"438.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">E</text><text x=\"450.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"462.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"474.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"498.0\" y=\"158.0\" class=\"vz-mono vz-cK vz-b\" text-anchor=\"middle\" style=\"font-size:20px\">∧</text><text x=\"522.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">T</text><text x=\"534.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"546.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"558.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"570.0\" y=\"158.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><circle cx=\"160.0\" cy=\"252.0\" r=\"62.0\" class=\"vz-setT\"></circle><circle cx=\"140.0\" cy=\"262.0\" r=\"30.0\" class=\"vz-setI\"></circle><text x=\"198.0\" y=\"214.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">T</text><text x=\"140.0\" y=\"267.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">E</text><text x=\"160.0\" y=\"334.0\" class=\"vz-sm\" text-anchor=\"middle\">todo el rango queda dentro del cuerpo</text><circle cx=\"450.0\" cy=\"256.0\" r=\"46.0\" class=\"vz-setI\"></circle><circle cx=\"512.0\" cy=\"256.0\" r=\"46.0\" class=\"vz-setT\"></circle><text x=\"420.0\" y=\"260.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">E</text><text x=\"544.0\" y=\"260.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">T</text><circle cx=\"481.0\" cy=\"256.0\" r=\"6.0\" class=\"vz-dotA\"></circle><text x=\"481.0\" y=\"242.0\" class=\"vz-sm\" text-anchor=\"middle\">alguien</text><text x=\"480.0\" y=\"334.0\" class=\"vz-sm\" text-anchor=\"middle\">hay algún punto en la intersección</text><line x1=\"320.0\" y1=\"16.0\" x2=\"320.0\" y2=\"330.0\" class=\"vz-sep\"></line></svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 640 340\" role=\"img\" aria-label=\"From colon notation to standard notation\"><defs><marker id=\"ar-co\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ah\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"aa-co\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahA\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"ai-co\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahI\" d=\"M0 0 L10 5 L0 10 z\"></path></marker><marker id=\"at-co\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"vz-ahT\" d=\"M0 0 L10 5 L0 10 z\"></path></marker></defs><text x=\"160.0\" y=\"26.0\" class=\"vz-cap\" text-anchor=\"middle\">∀ takes an arrow</text><text x=\"70.0\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">∀</text><text x=\"82.0\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"106.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">:</text><text x=\"130.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">E</text><text x=\"142.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"154.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"166.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"190.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">:</text><text x=\"214.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">T</text><text x=\"226.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"238.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"250.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><path d=\"M124.0 75.0 L124.0 80.0 L172.0 80.0 L172.0 75.0\" class=\"vz-lnI\"></path><text x=\"148.0\" y=\"98.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">range</text><path d=\"M208.0 75.0 L208.0 80.0 L256.0 80.0 L256.0 75.0\" class=\"vz-lnT\"></path><text x=\"232.0\" y=\"98.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">body</text><line x1=\"160.0\" y1=\"108.0\" x2=\"160.0\" y2=\"130.0\" class=\"vz-ln\" marker-end=\"url(#ar-co)\"></line><text x=\"70.0\" y=\"158.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">∀</text><text x=\"82.0\" y=\"158.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"106.0\" y=\"158.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"118.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">E</text><text x=\"130.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"142.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"154.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"178.0\" y=\"158.0\" class=\"vz-mono vz-cK vz-b\" text-anchor=\"middle\" style=\"font-size:20px\">→</text><text x=\"202.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">T</text><text x=\"214.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"226.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"238.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"250.0\" y=\"158.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"480.0\" y=\"26.0\" class=\"vz-cap\" text-anchor=\"middle\">∃ takes “and”</text><text x=\"390.0\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">∃</text><text x=\"402.0\" y=\"66.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"426.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">:</text><text x=\"450.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">E</text><text x=\"462.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"474.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"486.0\" y=\"66.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"510.0\" y=\"66.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">:</text><text x=\"534.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">T</text><text x=\"546.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"558.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"570.0\" y=\"66.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><path d=\"M444.0 75.0 L444.0 80.0 L492.0 80.0 L492.0 75.0\" class=\"vz-lnI\"></path><text x=\"468.0\" y=\"98.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">range</text><path d=\"M528.0 75.0 L528.0 80.0 L576.0 80.0 L576.0 75.0\" class=\"vz-lnT\"></path><text x=\"552.0\" y=\"98.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">body</text><line x1=\"480.0\" y1=\"108.0\" x2=\"480.0\" y2=\"130.0\" class=\"vz-ln\" marker-end=\"url(#ar-co)\"></line><text x=\"390.0\" y=\"158.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">∃</text><text x=\"402.0\" y=\"158.0\" class=\"vz-mono vz-cA\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"426.0\" y=\"158.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"438.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">E</text><text x=\"450.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"462.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"474.0\" y=\"158.0\" class=\"vz-mono vz-cI\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"498.0\" y=\"158.0\" class=\"vz-mono vz-cK vz-b\" text-anchor=\"middle\" style=\"font-size:20px\">∧</text><text x=\"522.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">T</text><text x=\"534.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">(</text><text x=\"546.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">x</text><text x=\"558.0\" y=\"158.0\" class=\"vz-mono vz-cT\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><text x=\"570.0\" y=\"158.0\" class=\"vz-mono vz-cK\" text-anchor=\"middle\" style=\"font-size:20px\">)</text><circle cx=\"160.0\" cy=\"252.0\" r=\"62.0\" class=\"vz-setT\"></circle><circle cx=\"140.0\" cy=\"262.0\" r=\"30.0\" class=\"vz-setI\"></circle><text x=\"198.0\" y=\"214.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">T</text><text x=\"140.0\" y=\"267.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">E</text><text x=\"160.0\" y=\"334.0\" class=\"vz-sm\" text-anchor=\"middle\">the whole range lies inside the body</text><circle cx=\"450.0\" cy=\"256.0\" r=\"46.0\" class=\"vz-setI\"></circle><circle cx=\"512.0\" cy=\"256.0\" r=\"46.0\" class=\"vz-setT\"></circle><text x=\"420.0\" y=\"260.0\" class=\"vz-lab vz-tI\" text-anchor=\"middle\">E</text><text x=\"544.0\" y=\"260.0\" class=\"vz-lab vz-tT\" text-anchor=\"middle\">T</text><circle cx=\"481.0\" cy=\"256.0\" r=\"6.0\" class=\"vz-dotA\"></circle><text x=\"481.0\" y=\"242.0\" class=\"vz-sm\" text-anchor=\"middle\">someone</text><text x=\"480.0\" y=\"334.0\" class=\"vz-sm\" text-anchor=\"middle\">there is some point in the intersection</text><line x1=\"320.0\" y1=\"16.0\" x2=\"320.0\" y2=\"330.0\" class=\"vz-sep\"></line></svg></div>"
    ],
    "t": "diagram",
    "mode": "explained"
   }
  ],
  "u5-errors-frequents": [
   {
    "head": [
     "Error",
     [
      "Exemple incorrecte",
      "Ejemplo incorrecto",
      "Wrong example"
     ],
     [
      "Correcte",
      "Correcto",
      "Correct"
     ]
    ],
    "rows": [
     [
      [
       "`∀` amb `∧`",
       "`∀` con `∧`",
       "`∀` with `∧`"
      ],
      "`∀x (E(x) ∧ A(x))`",
      "`∀x (E(x) → A(x))`"
     ],
     [
      [
       "`∃` amb `→`",
       "`∃` con `→`",
       "`∃` with `→`"
      ],
      "`∃x (E(x) → A(x))`",
      "`∃x (E(x) ∧ A(x))`"
     ],
     [
      [
       "Variable lliure per falta de parèntesis",
       "Variable libre por falta de paréntesis",
       "Free variable because of missing parentheses"
      ],
      "`∀x E(x) → A(x)`",
      "`∀x (E(x) → A(x))`"
     ],
     [
      [
       "Un predicat com a argument",
       "Un predicado como argumento",
       "A predicate as an argument"
      ],
      "`L(pau, B(c))`",
      "`B(c) ∧ L(pau, c)`"
     ],
     [
      [
       "Dos «algú» per a un mateix objecte",
       "Dos «alguien» para un mismo objeto",
       "Two “someone” for the same object"
      ],
      [
       "`∃x A(joan,x) ∧ ∃y A(anna,y)` per «un amic en comú»",
       "`∃x A(joan,x) ∧ ∃y A(anna,y)` para «un amigo en común»",
       "`∃x A(joan,x) ∧ ∃y A(anna,y)` for “a friend in common”"
      ],
      "`∃x (A(joan,x) ∧ A(anna,x))`"
     ],
     [
      [
       "Ordre dels quantificadors",
       "Orden de los cuantificadores",
       "Order of quantifiers"
      ],
      [
       "`∃y ∀x S(x,y)` per «tothom segueix algú»",
       "`∃y ∀x S(x,y)` para «todo el mundo sigue a alguien»",
       "`∃y ∀x S(x,y)` for “everyone follows someone”"
      ],
      "`∀x ∃y S(x,y)`"
     ]
    ],
    "t": "table"
   }
  ],
  "u5-comprova-que-has-entes": [
   {
    "t": "check",
    "ex": {
     "id": "u5-comprova-que-has-entes-q1",
     "type": "mcq",
     "q": [
      "«Cap restaurant serveix tots els plats» (R(x): restaurant, S(x,y): x serveix y):",
      "«Ningún restaurante sirve todos los platos» (R(x): restaurante, S(x,y): x sirve y):",
      "“No restaurant serves all the dishes” (R(x): restaurant, S(x,y): x serves y):"
     ],
     "opts": [
      "`∀x ∀y (R(x) → ¬S(x,y))`",
      "`¬∃x (R(x) ∧ ∀y S(x,y))`",
      "`∃x (R(x) ∧ ¬∀y S(x,y))`",
      "`∀x (R(x) ∧ ¬S(x,y))`"
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "No existeix cap restaurant que els serveixi tots. L'opció a diu una altra cosa (cap restaurant serveix cap plat) i la c diu que algun restaurant no els serveix tots.",
        "No existe ningún restaurante que los sirva todos. La opción a dice otra cosa (ningún restaurante sirve ningún plato) y la c dice que algún restaurante no los sirve todos.",
        "There is no restaurant that serves them all. Option a says something else (no restaurant serves any dish) and c says that some restaurant does not serve them all."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "u5-comprova-que-has-entes-q2",
     "type": "mcq",
     "q": [
      "«Només els socis poden votar» (S(x): soci, V(x): pot votar):",
      "«Solo los socios pueden votar» (S(x): socio, V(x): puede votar):",
      "“Only members can vote” (S(x): member, V(x): can vote):"
     ],
     "opts": [
      "`∀x (S(x) → V(x))`",
      "`∀x (S(x) ∧ V(x))`",
      "`∀x (V(x) → S(x))`",
      "`∃x (S(x) ∧ V(x))`"
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "Si algú pot votar, és soci: «només» gira la fletxa.",
        "Si alguien puede votar, es socio: «solo» gira la flecha.",
        "If someone can vote, they are a member: “only” turns the arrow round."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "u5-comprova-que-has-entes-q3",
     "type": "mcq",
     "q": [
      "«Tothom té algun progenitor» (P(x,y): x és progenitor de y):",
      "«Todo el mundo tiene algún progenitor» (P(x,y): x es progenitor de y):",
      "“Everyone has some parent” (P(x,y): x is a parent of y):"
     ],
     "opts": [
      "`∀x ∃y P(y,x)`",
      "`∃y ∀x P(y,x)`",
      "`∀x ∃y P(x,y)`",
      "`∃x ∃y P(y,x)`"
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "Per a cada persona x hi ha algun y que n'és progenitor: `P(y,x)`, amb x a la segona posició. L'opció b diria que hi ha un progenitor comú a tothom.",
        "Para cada persona x hay algún y que es progenitor suyo: `P(y,x)`, con x en la segunda posición. La opción b diría que hay un progenitor común a todo el mundo.",
        "For each person x there is some y who is their parent: `P(y,x)`, with x in the second position. Option b would say there is a parent common to everyone."
       ]
      }
     ]
    }
   }
  ]
 },
 "examEnd": [
  {
   "ref": "lg-e1"
  },
  {
   "ref": "lg-e2"
  },
  {
   "ref": "lg-e3"
  },
  {
   "ref": "lg-e4"
  }
 ]
};
