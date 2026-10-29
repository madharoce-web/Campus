// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
import { GRAPH_FAMILIES } from '../graphs/families.js';

export default {
 "items": [
  {
   "id": "lg-a1",
   "unit": "u1",
   "kind": "A",
   "level": "exam",
   "type": "open",
   "src": "exam",
   "srcName": [
    "CP1 2025-26 · Exercici 2",
    "CP1 2025-26 · Ejercicio 2",
    "Test 1 2025-26 · Exercise 2"
   ],
   "title": [
    "L'Anna, el Carles i la Berta",
    "Anna, Carles y Berta",
    "Anna, Carles and Berta"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Preneu els símbols del llenguatge de la lògica de proposicions (CP0) per a representar els següents enunciats. Doneu cadascuna de les proposicions abans de fer la representació dels enunciats i, després, la representació.",
      "Tomad los símbolos del lenguaje de la lógica de proposiciones (CP0) para representar los siguientes enunciados. Dad cada una de las proposiciones antes de hacer la representación de los enunciados y, después, la representación.",
      "Use the symbols of the language of propositional logic (CP0) to represent the following statements. Give each of the propositions before representing the statements and, then, the representation."
     ]
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>L'Anna beu taronjada i el Carles beu aigua si està deshidratat.</li><li>Si el Carles menja cacauets, llavors beu aigua.</li><li>La Berta beu taronjada però, la Anna no.</li><li>La Berta només beu aigua si té set.</li><li>Si la Berta no beu aigua quan té set, aleshores es deshidrata.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Anna bebe naranjada y Carles bebe agua si está deshidratado.</li><li>Si Carles come cacahuetes, entonces bebe agua.</li><li>Berta bebe naranjada pero Anna no.</li><li>Berta solo bebe agua si tiene sed.</li><li>Si Berta no bebe agua cuando tiene sed, entonces se deshidrata.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Anna drinks orangeade and Carles drinks water if he is dehydrated.</li><li>If Carles eats peanuts, then he drinks water.</li><li>Berta drinks orangeade but Anna does not.</li><li>Berta drinks water only if she is thirsty.</li><li>If Berta does not drink water when she is thirsty, then she becomes dehydrated.</li></ol>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "(f) Doneu una equivalència lògica d'algun dels enunciats anteriors. De quin enunciat l'heu donada? Quin seria l'enunciat en llenguatge natural?",
      "(f) Dad una equivalencia lógica de alguno de los enunciados anteriores. ¿De qué enunciado la habéis dado? ¿Cuál sería el enunciado en lenguaje natural?",
      "(f) Give a logical equivalence of one of the statements above. For which statement have you given it? What would the statement be in natural language?"
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Proposicions",
      "Proposiciones",
      "Propositions"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">A</span></td><td>L'Anna beu taronjada.</td></tr><tr><td><span class=\"lf\">C</span></td><td>El Carles beu aigua.</td></tr><tr><td><span class=\"lf\">D</span></td><td>El Carles està deshidratat.</td></tr><tr><td><span class=\"lf\">M</span></td><td>El Carles menja cacauets.</td></tr><tr><td><span class=\"lf\">T</span></td><td>La Berta beu taronjada.</td></tr><tr><td><span class=\"lf\">B</span></td><td>La Berta beu aigua.</td></tr><tr><td><span class=\"lf\">S</span></td><td>La Berta té set.</td></tr><tr><td><span class=\"lf\">E</span></td><td>La Berta es deshidrata.</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">A</span></td><td>Anna bebe naranjada.</td></tr><tr><td><span class=\"lf\">C</span></td><td>Carles bebe agua.</td></tr><tr><td><span class=\"lf\">D</span></td><td>Carles está deshidratado.</td></tr><tr><td><span class=\"lf\">M</span></td><td>Carles come cacahuetes.</td></tr><tr><td><span class=\"lf\">T</span></td><td>Berta bebe naranjada.</td></tr><tr><td><span class=\"lf\">B</span></td><td>Berta bebe agua.</td></tr><tr><td><span class=\"lf\">S</span></td><td>Berta tiene sed.</td></tr><tr><td><span class=\"lf\">E</span></td><td>Berta se deshidrata.</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">A</span></td><td>Anna drinks orangeade.</td></tr><tr><td><span class=\"lf\">C</span></td><td>Carles drinks water.</td></tr><tr><td><span class=\"lf\">D</span></td><td>Carles is dehydrated.</td></tr><tr><td><span class=\"lf\">M</span></td><td>Carles eats peanuts.</td></tr><tr><td><span class=\"lf\">T</span></td><td>Berta drinks orangeade.</td></tr><tr><td><span class=\"lf\">B</span></td><td>Berta drinks water.</td></tr><tr><td><span class=\"lf\">S</span></td><td>Berta is thirsty.</td></tr><tr><td><span class=\"lf\">E</span></td><td>Berta becomes dehydrated.</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(a) L'Anna beu taronjada i el Carles beu aigua si està deshidratat.",
      "(a) Anna bebe naranjada y Carles bebe agua si está deshidratado.",
      "(a) Anna drinks orangeade and Carles drinks water if he is dehydrated."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">A ∧ (D → C)</span></p>"
    },
    {
     "t": "note",
     "x": [
      "«B si A» és A → B: la condició (estar deshidratat) va a l'esquerra. La «i» separa dues afirmacions independents.",
      "«B si A» es A → B: la condición (estar deshidratado) va a la izquierda. La «y» separa dos afirmaciones independientes.",
      "“B if A” is A → B: the condition (being dehydrated) goes on the left. The “and” separates two independent statements."
     ]
    },
    {
     "t": "h",
     "x": [
      "(b) Si el Carles menja cacauets, llavors beu aigua.",
      "(b) Si Carles come cacahuetes, entonces bebe agua.",
      "(b) If Carles eats peanuts, then he drinks water."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">M → C</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(c) La Berta beu taronjada però, la Anna no.",
      "(c) Berta bebe naranjada pero Anna no.",
      "(c) Berta drinks orangeade but Anna does not."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">T ∧ ¬A</span></p>"
    },
    {
     "t": "note",
     "x": [
      "«Però» té el mateix valor lògic que «i»: totes dues coses són certes.",
      "«Pero» tiene el mismo valor lógico que «y»: las dos cosas son ciertas.",
      "“But” has the same logical value as “and”: both things are true."
     ]
    },
    {
     "t": "h",
     "x": [
      "(d) La Berta només beu aigua si té set.",
      "(d) Berta solo bebe agua si tiene sed.",
      "(d) Berta drinks water only if she is thirsty."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">B → S</span></p>"
    },
    {
     "t": "note",
     "x": [
      "«A només si B» és A → B: tenir set és condició **necessària** per beure aigua. No és S → B.",
      "«A solo si B» es A → B: tener sed es condición **necesaria** para beber agua. No es S → B.",
      "“A only if B” is A → B: being thirsty is a **necessary** condition for drinking water. It is not S → B."
     ]
    },
    {
     "t": "h",
     "x": [
      "(e) Si la Berta no beu aigua quan té set, aleshores es deshidrata.",
      "(e) Si Berta no bebe agua cuando tiene sed, entonces se deshidrata.",
      "(e) If Berta does not drink water when she is thirsty, then she becomes dehydrated."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">(S → ¬B) → E</span></p>"
    },
    {
     "t": "note",
     "x": [
      "La condició és tota la frase «no beu aigua quan té set», és a dir S → ¬B. Una altra lectura habitual és (S ∧ ¬B) → E («si té set i no beu aigua»); no són equivalents: amb S fals, la primera obliga E i la segona no.",
      "La condición es toda la frase «no bebe agua cuando tiene sed», es decir S → ¬B. Otra lectura habitual es (S ∧ ¬B) → E («si tiene sed y no bebe agua»); no son equivalentes: con S falso, la primera obliga a E y la segunda no.",
      "The condition is the whole clause “she does not drink water when she is thirsty”, that is S → ¬B. Another common reading is (S ∧ ¬B) → E (“if she is thirsty and does not drink water”); they are not equivalent: with S false, the first forces E and the second does not."
     ]
    },
    {
     "t": "h",
     "x": [
      "(f) Equivalència lògica",
      "(f) Equivalencia lógica",
      "(f) Logical equivalence"
     ]
    },
    {
     "h": [
      "<p>Enunciat (d): <span class=\"lf\">B → S</span> ≡ <span class=\"lf\">¬S → ¬B</span></p>",
      "<p>Enunciado (d): <span class=\"lf\">B → S</span> ≡ <span class=\"lf\">¬S → ¬B</span></p>",
      "<p>Statement (d): <span class=\"lf\">B → S</span> ≡ <span class=\"lf\">¬S → ¬B</span></p>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "Per la regla contrapositiva: A → B ⇔ ¬B → ¬A. En llenguatge natural: *Si la Berta no té set, no beu aigua.*",
      "Por la regla contrapositiva: A → B ⇔ ¬B → ¬A. En lenguaje natural: *Si Berta no tiene sed, no bebe agua.*",
      "By the contrapositive rule: A → B ⇔ ¬B → ¬A. In natural language: *If Berta is not thirsty, she does not drink water.*"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-a2",
   "unit": "u1",
   "kind": "A",
   "level": "easy",
   "type": "open",
   "src": "new",
   "title": [
    "L'Eva i el Marc estudien",
    "Eva y Marc estudian",
    "Eva and Marc study"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Preneu els símbols del llenguatge de la lògica de proposicions (CP0) per a representar els següents enunciats. Doneu cadascuna de les proposicions abans de fer la representació dels enunciats i, després, la representació.",
      "Tomad los símbolos del lenguaje de la lógica de proposiciones (CP0) para representar los siguientes enunciados. Dad cada una de las proposiciones antes de hacer la representación de los enunciados y, después, la representación.",
      "Use the symbols of the language of propositional logic (CP0) to represent the following statements. Give each of the propositions before representing the statements and, then, the representation."
     ]
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Si l'Eva estudia, aprova.</li><li>L'Eva només aprova si estudia.</li><li>L'Eva aprova si i només si estudia i fa les pràctiques.</li><li>Ni l'Eva ni el Marc aproven.</li><li>L'Eva no aprova a menys que estudiï.</li><li>Que el Marc estudiï és condició suficient perquè aprovi, però no necessària.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Si Eva estudia, aprueba.</li><li>Eva solo aprueba si estudia.</li><li>Eva aprueba si y solo si estudia y hace las prácticas.</li><li>Ni Eva ni Marc aprueban.</li><li>Eva no aprueba a menos que estudie.</li><li>Que Marc estudie es condición suficiente para que apruebe, pero no necesaria.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>If Eva studies, she passes.</li><li>Eva passes only if she studies.</li><li>Eva passes if and only if she studies and does the lab work.</li><li>Neither Eva nor Marc passes.</li><li>Eva does not pass unless she studies.</li><li>Marc studying is a sufficient condition for him to pass, but not a necessary one.</li></ol>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "(g) Doneu una equivalència lògica d'algun dels enunciats anteriors. De quin enunciat l'heu donada? Quin seria l'enunciat en llenguatge natural?",
      "(g) Dad una equivalencia lógica de alguno de los enunciados anteriores. ¿De qué enunciado la habéis dado? ¿Cuál sería el enunciado en lenguaje natural?",
      "(g) Give a logical equivalence of one of the statements above. For which statement have you given it? What would the statement be in natural language?"
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Proposicions",
      "Proposiciones",
      "Propositions"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">E</span></td><td>L'Eva estudia.</td></tr><tr><td><span class=\"lf\">A</span></td><td>L'Eva aprova.</td></tr><tr><td><span class=\"lf\">P</span></td><td>L'Eva fa les pràctiques.</td></tr><tr><td><span class=\"lf\">M</span></td><td>El Marc estudia.</td></tr><tr><td><span class=\"lf\">N</span></td><td>El Marc aprova.</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">E</span></td><td>Eva estudia.</td></tr><tr><td><span class=\"lf\">A</span></td><td>Eva aprueba.</td></tr><tr><td><span class=\"lf\">P</span></td><td>Eva hace las prácticas.</td></tr><tr><td><span class=\"lf\">M</span></td><td>Marc estudia.</td></tr><tr><td><span class=\"lf\">N</span></td><td>Marc aprueba.</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">E</span></td><td>Eva studies.</td></tr><tr><td><span class=\"lf\">A</span></td><td>Eva passes.</td></tr><tr><td><span class=\"lf\">P</span></td><td>Eva does the lab work.</td></tr><tr><td><span class=\"lf\">M</span></td><td>Marc studies.</td></tr><tr><td><span class=\"lf\">N</span></td><td>Marc passes.</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(a) Si l'Eva estudia, aprova.",
      "(a) Si Eva estudia, aprueba.",
      "(a) If Eva studies, she passes."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">E → A</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(b) L'Eva només aprova si estudia.",
      "(b) Eva solo aprueba si estudia.",
      "(b) Eva passes only if she studies."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">A → E</span></p>"
    },
    {
     "t": "note",
     "x": [
      "Compareu-la amb l'anterior: «només si» canvia el sentit de la fletxa.",
      "Comparadla con la anterior: «solo si» cambia el sentido de la flecha.",
      "Compare it with the previous one: “only if” changes the direction of the arrow."
     ]
    },
    {
     "t": "h",
     "x": [
      "(c) L'Eva aprova si i només si estudia i fa les pràctiques.",
      "(c) Eva aprueba si y solo si estudia y hace las prácticas.",
      "(c) Eva passes if and only if she studies and does the lab work."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">A ↔ (E ∧ P)</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(d) Ni l'Eva ni el Marc aproven.",
      "(d) Ni Eva ni Marc aprueban.",
      "(d) Neither Eva nor Marc passes."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬A ∧ ¬N</span></p>"
    },
    {
     "t": "note",
     "x": [
      "«Ni … ni …» nega les dues coses: ¬A ∧ ¬N, que equival a ¬(A ∨ N).",
      "«Ni … ni …» niega las dos cosas: ¬A ∧ ¬N, que equivale a ¬(A ∨ N).",
      "“Neither … nor …” negates both things: ¬A ∧ ¬N, which is equivalent to ¬(A ∨ N)."
     ]
    },
    {
     "t": "h",
     "x": [
      "(e) L'Eva no aprova a menys que estudiï.",
      "(e) Eva no aprueba a menos que estudie.",
      "(e) Eva does not pass unless she studies."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬A ∨ E</span></p>"
    },
    {
     "t": "note",
     "x": [
      "«X a menys que Y» és X ∨ Y (si no passa Y, passa X). Aquí X = ¬A, i ¬A ∨ E equival a A → E.",
      "«X a menos que Y» es X ∨ Y (si no pasa Y, pasa X). Aquí X = ¬A, y ¬A ∨ E equivale a A → E.",
      "“X unless Y” is X ∨ Y (if Y does not happen, X happens). Here X = ¬A, and ¬A ∨ E is equivalent to A → E."
     ]
    },
    {
     "t": "h",
     "x": [
      "(f) Que el Marc estudiï és condició suficient perquè aprovi, però no necessària.",
      "(f) Que Marc estudie es condición suficiente para que apruebe, pero no necesaria.",
      "(f) Marc studying is a sufficient condition for him to pass, but not a necessary one."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">(M → N) ∧ ¬(N → M)</span></p>"
    },
    {
     "t": "note",
     "x": [
      "Suficient: M → N. Necessària seria N → M; com que no ho és, s'hi afegeix ¬(N → M).",
      "Suficiente: M → N. Necesaria sería N → M; como no lo es, se añade ¬(N → M).",
      "Sufficient: M → N. Necessary would be N → M; since it is not, ¬(N → M) is added."
     ]
    },
    {
     "t": "h",
     "x": [
      "(g) Equivalència lògica",
      "(g) Equivalencia lógica",
      "(g) Logical equivalence"
     ]
    },
    {
     "h": [
      "<p>Enunciat (b): <span class=\"lf\">A → E</span> ≡ <span class=\"lf\">¬E → ¬A</span></p>",
      "<p>Enunciado (b): <span class=\"lf\">A → E</span> ≡ <span class=\"lf\">¬E → ¬A</span></p>",
      "<p>Statement (b): <span class=\"lf\">A → E</span> ≡ <span class=\"lf\">¬E → ¬A</span></p>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "Per la regla contrapositiva. En llenguatge natural: *Si l'Eva no estudia, no aprova.*",
      "Por la regla contrapositiva. En lenguaje natural: *Si Eva no estudia, no aprueba.*",
      "By the contrapositive rule. In natural language: *If Eva does not study, she does not pass.*"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-a3",
   "unit": "u1",
   "kind": "A",
   "level": "easy",
   "type": "open",
   "src": "new",
   "title": [
    "L'excursió",
    "La excursión",
    "The outing"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Preneu els símbols del llenguatge de la lògica de proposicions (CP0) per a representar els següents enunciats. Doneu cadascuna de les proposicions abans de fer la representació dels enunciats i, després, la representació.",
      "Tomad los símbolos del lenguaje de la lógica de proposiciones (CP0) para representar los siguientes enunciados. Dad cada una de las proposiciones antes de hacer la representación de los enunciados y, después, la representación.",
      "Use the symbols of the language of propositional logic (CP0) to represent the following statements. Give each of the propositions before representing the statements and, then, the representation."
     ]
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Si plou o neva, no anem d'excursió.</li><li>Anem d'excursió només si no plou.</li><li>Fa fred però no neva.</li><li>Quan neva, fa fred.</li><li>Si no anem d'excursió, agafem el cotxe sempre que no plogui.</li><li>No és cert que plogui i nevi alhora.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Si llueve o nieva, no vamos de excursión.</li><li>Vamos de excursión solo si no llueve.</li><li>Hace frío pero no nieva.</li><li>Cuando nieva, hace frío.</li><li>Si no vamos de excursión, cogemos el coche siempre que no llueva.</li><li>No es cierto que llueva y nieve a la vez.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>If it rains or snows, we do not go on the outing.</li><li>We go on the outing only if it does not rain.</li><li>It is cold but it is not snowing.</li><li>When it snows, it is cold.</li><li>If we do not go on the outing, we take the car provided it does not rain.</li><li>It is not true that it rains and snows at the same time.</li></ol>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "(g) Doneu una equivalència lògica d'algun dels enunciats anteriors. De quin enunciat l'heu donada? Quin seria l'enunciat en llenguatge natural?",
      "(g) Dad una equivalencia lógica de alguno de los enunciados anteriores. ¿De qué enunciado la habéis dado? ¿Cuál sería el enunciado en lenguaje natural?",
      "(g) Give a logical equivalence of one of the statements above. For which statement have you given it? What would the statement be in natural language?"
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Proposicions",
      "Proposiciones",
      "Propositions"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">P</span></td><td>Plou.</td></tr><tr><td><span class=\"lf\">N</span></td><td>Neva.</td></tr><tr><td><span class=\"lf\">F</span></td><td>Fa fred.</td></tr><tr><td><span class=\"lf\">E</span></td><td>Anem d'excursió.</td></tr><tr><td><span class=\"lf\">C</span></td><td>Agafem el cotxe.</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">P</span></td><td>Llueve.</td></tr><tr><td><span class=\"lf\">N</span></td><td>Nieva.</td></tr><tr><td><span class=\"lf\">F</span></td><td>Hace frío.</td></tr><tr><td><span class=\"lf\">E</span></td><td>Vamos de excursión.</td></tr><tr><td><span class=\"lf\">C</span></td><td>Cogemos el coche.</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">P</span></td><td>It rains.</td></tr><tr><td><span class=\"lf\">N</span></td><td>It snows.</td></tr><tr><td><span class=\"lf\">F</span></td><td>It is cold.</td></tr><tr><td><span class=\"lf\">E</span></td><td>We go on the outing.</td></tr><tr><td><span class=\"lf\">C</span></td><td>We take the car.</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(a) Si plou o neva, no anem d'excursió.",
      "(a) Si llueve o nieva, no vamos de excursión.",
      "(a) If it rains or snows, we do not go on the outing."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">(P ∨ N) → ¬E</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(b) Anem d'excursió només si no plou.",
      "(b) Vamos de excursión solo si no llueve.",
      "(b) We go on the outing only if it does not rain."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">E → ¬P</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(c) Fa fred però no neva.",
      "(c) Hace frío pero no nieva.",
      "(c) It is cold but it is not snowing."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">F ∧ ¬N</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(d) Quan neva, fa fred.",
      "(d) Cuando nieva, hace frío.",
      "(d) When it snows, it is cold."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">N → F</span></p>"
    },
    {
     "t": "note",
     "x": [
      "«B quan A» = «si A, B»: A → B.",
      "«B cuando A» = «si A, B»: A → B.",
      "“B when A” = “if A, B”: A → B."
     ]
    },
    {
     "t": "h",
     "x": [
      "(e) Si no anem d'excursió, agafem el cotxe sempre que no plogui.",
      "(e) Si no vamos de excursión, cogemos el coche siempre que no llueva.",
      "(e) If we do not go on the outing, we take the car provided it does not rain."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬E → (¬P → C)</span></p>"
    },
    {
     "t": "note",
     "x": [
      "«Sempre que» introdueix una condició: ¬P → C. Equival a (¬E ∧ ¬P) → C (llei d'exportació).",
      "«Siempre que» introduce una condición: ¬P → C. Equivale a (¬E ∧ ¬P) → C (ley de exportación).",
      "“Provided” introduces a condition: ¬P → C. It is equivalent to (¬E ∧ ¬P) → C (exportation law)."
     ]
    },
    {
     "t": "h",
     "x": [
      "(f) No és cert que plogui i nevi alhora.",
      "(f) No es cierto que llueva y nieve a la vez.",
      "(f) It is not true that it rains and snows at the same time."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬(P ∧ N)</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(g) Equivalència lògica",
      "(g) Equivalencia lógica",
      "(g) Logical equivalence"
     ]
    },
    {
     "h": [
      "<p>Enunciat (f): <span class=\"lf\">¬(P ∧ N)</span> ≡ <span class=\"lf\">¬P ∨ ¬N</span></p>",
      "<p>Enunciado (f): <span class=\"lf\">¬(P ∧ N)</span> ≡ <span class=\"lf\">¬P ∨ ¬N</span></p>",
      "<p>Statement (f): <span class=\"lf\">¬(P ∧ N)</span> ≡ <span class=\"lf\">¬P ∨ ¬N</span></p>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "Per la regla De Morgan: ¬(A ∧ B) ⇔ ¬A ∨ ¬B. En llenguatge natural: *No plou o no neva.*",
      "Por la regla De Morgan: ¬(A ∧ B) ⇔ ¬A ∨ ¬B. En lenguaje natural: *No llueve o no nieva.*",
      "By De Morgan's rule: ¬(A ∧ B) ⇔ ¬A ∨ ¬B. In natural language: *It does not rain or it does not snow.*"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-a4",
   "unit": "u1",
   "kind": "A",
   "level": "easy",
   "type": "open",
   "src": "new",
   "title": [
    "L'accés al sistema",
    "El acceso al sistema",
    "Access to the system"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Preneu els símbols del llenguatge de la lògica de proposicions (CP0) per a representar els següents enunciats. Doneu cadascuna de les proposicions abans de fer la representació dels enunciats i, després, la representació.",
      "Tomad los símbolos del lenguaje de la lógica de proposiciones (CP0) para representar los siguientes enunciados. Dad cada una de las proposiciones antes de hacer la representación de los enunciados y, después, la representación.",
      "Use the symbols of the language of propositional logic (CP0) to represent the following statements. Give each of the propositions before representing the statements and, then, the representation."
     ]
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>L'usuari pot entrar si la contrasenya és correcta i el compte no està bloquejat.</li><li>L'usuari només pot entrar si el servidor funciona i hi ha connexió.</li><li>El servidor funciona, però no hi ha connexió.</li><li>Si la contrasenya no és correcta, el compte queda bloquejat.</li><li>El compte està bloquejat si i només si la contrasenya no és correcta.</li><li>Si el servidor no funciona quan hi ha connexió, l'usuari no pot entrar.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>El usuario puede entrar si la contraseña es correcta y la cuenta no está bloqueada.</li><li>El usuario solo puede entrar si el servidor funciona y hay conexión.</li><li>El servidor funciona, pero no hay conexión.</li><li>Si la contraseña no es correcta, la cuenta queda bloqueada.</li><li>La cuenta está bloqueada si y solo si la contraseña no es correcta.</li><li>Si el servidor no funciona cuando hay conexión, el usuario no puede entrar.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>The user can log in if the password is correct and the account is not locked.</li><li>The user can log in only if the server is working and there is a connection.</li><li>The server is working, but there is no connection.</li><li>If the password is not correct, the account becomes locked.</li><li>The account is locked if and only if the password is not correct.</li><li>If the server is not working when there is a connection, the user cannot log in.</li></ol>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "(g) Doneu una equivalència lògica d'algun dels enunciats anteriors. De quin enunciat l'heu donada? Quin seria l'enunciat en llenguatge natural?",
      "(g) Dad una equivalencia lógica de alguno de los enunciados anteriores. ¿De qué enunciado la habéis dado? ¿Cuál sería el enunciado en lenguaje natural?",
      "(g) Give a logical equivalence of one of the statements above. For which statement have you given it? What would the statement be in natural language?"
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Proposicions",
      "Proposiciones",
      "Propositions"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">S</span></td><td>El servidor funciona.</td></tr><tr><td><span class=\"lf\">X</span></td><td>Hi ha connexió.</td></tr><tr><td><span class=\"lf\">U</span></td><td>L'usuari pot entrar.</td></tr><tr><td><span class=\"lf\">C</span></td><td>La contrasenya és correcta.</td></tr><tr><td><span class=\"lf\">B</span></td><td>El compte està bloquejat.</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">S</span></td><td>El servidor funciona.</td></tr><tr><td><span class=\"lf\">X</span></td><td>Hay conexión.</td></tr><tr><td><span class=\"lf\">U</span></td><td>El usuario puede entrar.</td></tr><tr><td><span class=\"lf\">C</span></td><td>La contraseña es correcta.</td></tr><tr><td><span class=\"lf\">B</span></td><td>La cuenta está bloqueada.</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">S</span></td><td>El servidor funciona.</td></tr><tr><td><span class=\"lf\">X</span></td><td>There is a connection.</td></tr><tr><td><span class=\"lf\">U</span></td><td>The user can log in.</td></tr><tr><td><span class=\"lf\">C</span></td><td>The password is correct.</td></tr><tr><td><span class=\"lf\">B</span></td><td>The account is locked.</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(a) L'usuari pot entrar si la contrasenya és correcta i el compte no està bloquejat.",
      "(a) El usuario puede entrar si la contraseña es correcta y la cuenta no está bloqueada.",
      "(a) The user can log in if the password is correct and the account is not locked."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">(C ∧ ¬B) → U</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(b) L'usuari només pot entrar si el servidor funciona i hi ha connexió.",
      "(b) El usuario solo puede entrar si el servidor funciona y hay conexión.",
      "(b) The user can log in only if the server is working and there is a connection."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">U → (S ∧ X)</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(c) El servidor funciona, però no hi ha connexió.",
      "(c) El servidor funciona, pero no hay conexión.",
      "(c) The server is working, but there is no connection."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">S ∧ ¬X</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(d) Si la contrasenya no és correcta, el compte queda bloquejat.",
      "(d) Si la contraseña no es correcta, la cuenta queda bloqueada.",
      "(d) If the password is not correct, the account becomes locked."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬C → B</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(e) El compte està bloquejat si i només si la contrasenya no és correcta.",
      "(e) La cuenta está bloqueada si y solo si la contraseña no es correcta.",
      "(e) The account is locked if and only if the password is not correct."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">B ↔ ¬C</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(f) Si el servidor no funciona quan hi ha connexió, l'usuari no pot entrar.",
      "(f) Si el servidor no funciona cuando hay conexión, el usuario no puede entrar.",
      "(f) If the server is not working when there is a connection, the user cannot log in."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">(X → ¬S) → ¬U</span></p>"
    },
    {
     "t": "note",
     "x": [
      "Com a l'exercici del CP1: la condició és «quan hi ha connexió, el servidor no funciona», X → ¬S.",
      "Como en el ejercicio del CP1: la condición es «cuando hay conexión, el servidor no funciona», X → ¬S.",
      "As in the Test 1 exercise: the condition is “when there is a connection, the server is not working”, X → ¬S."
     ]
    },
    {
     "t": "h",
     "x": [
      "(g) Equivalència lògica",
      "(g) Equivalencia lógica",
      "(g) Logical equivalence"
     ]
    },
    {
     "h": [
      "<p>Enunciat (b): <span class=\"lf\">U → (S ∧ X)</span> ≡ <span class=\"lf\">(¬S ∨ ¬X) → ¬U</span></p>",
      "<p>Enunciado (b): <span class=\"lf\">U → (S ∧ X)</span> ≡ <span class=\"lf\">(¬S ∨ ¬X) → ¬U</span></p>",
      "<p>Statement (b): <span class=\"lf\">U → (S ∧ X)</span> ≡ <span class=\"lf\">(¬S ∨ ¬X) → ¬U</span></p>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "Per la regla contrapositiva i De Morgan. En llenguatge natural: *Si el servidor no funciona o no hi ha connexió, l'usuari no pot entrar.*",
      "Por la regla contrapositiva y De Morgan. En lenguaje natural: *Si el servidor no funciona o no hay conexión, el usuario no puede entrar.*",
      "By the contrapositive rule and De Morgan. In natural language: *If the server is not working or there is no connection, the user cannot log in.*"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-a5",
   "unit": "u1",
   "kind": "A",
   "level": "easy",
   "type": "open",
   "src": "new",
   "title": [
    "El sopar",
    "La cena",
    "Dinner"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Preneu els símbols del llenguatge de la lògica de proposicions (CP0) per a representar els següents enunciats. Doneu cadascuna de les proposicions abans de fer la representació dels enunciats i, després, la representació.",
      "Tomad los símbolos del lenguaje de la lógica de proposiciones (CP0) para representar los siguientes enunciados. Dad cada una de las proposiciones antes de hacer la representación de los enunciados y, después, la representación.",
      "Use the symbols of the language of propositional logic (CP0) to represent the following statements. Give each of the propositions before representing the statements and, then, the representation."
     ]
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Si el Pau cuina, la Júlia renta els plats.</li><li>Sopen a casa o demanen pizza, però no totes dues coses.</li><li>El Pau cuina només si sopen a casa.</li><li>Demanen pizza sempre que tenen gana i el Pau no cuina.</li><li>Ni el Pau cuina ni la Júlia renta els plats.</li><li>Si tenen gana, sopen a casa a menys que demanin pizza.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Si Pau cocina, Júlia friega los platos.</li><li>Cenan en casa o piden pizza, pero no las dos cosas.</li><li>Pau cocina solo si cenan en casa.</li><li>Piden pizza siempre que tienen hambre y Pau no cocina.</li><li>Ni Pau cocina ni Júlia friega los platos.</li><li>Si tienen hambre, cenan en casa a menos que pidan pizza.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>If Pau cooks, Júlia does the dishes.</li><li>They have dinner at home or order pizza, but not both.</li><li>Pau cooks only if they have dinner at home.</li><li>They order pizza whenever they are hungry and Pau does not cook.</li><li>Neither does Pau cook nor does Júlia do the dishes.</li><li>If they are hungry, they have dinner at home unless they order pizza.</li></ol>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "(g) Doneu una equivalència lògica d'algun dels enunciats anteriors. De quin enunciat l'heu donada? Quin seria l'enunciat en llenguatge natural?",
      "(g) Dad una equivalencia lógica de alguno de los enunciados anteriores. ¿De qué enunciado la habéis dado? ¿Cuál sería el enunciado en lenguaje natural?",
      "(g) Give a logical equivalence of one of the statements above. For which statement have you given it? What would the statement be in natural language?"
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Proposicions",
      "Proposiciones",
      "Propositions"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">C</span></td><td>El Pau cuina.</td></tr><tr><td><span class=\"lf\">R</span></td><td>La Júlia renta els plats.</td></tr><tr><td><span class=\"lf\">S</span></td><td>Sopen a casa.</td></tr><tr><td><span class=\"lf\">Z</span></td><td>Demanen pizza.</td></tr><tr><td><span class=\"lf\">G</span></td><td>Tenen gana.</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">C</span></td><td>Pau cocina.</td></tr><tr><td><span class=\"lf\">R</span></td><td>Júlia friega los platos.</td></tr><tr><td><span class=\"lf\">S</span></td><td>Cenan en casa.</td></tr><tr><td><span class=\"lf\">Z</span></td><td>Piden pizza.</td></tr><tr><td><span class=\"lf\">G</span></td><td>Tienen hambre.</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">C</span></td><td>Pau cooks.</td></tr><tr><td><span class=\"lf\">R</span></td><td>Júlia does the dishes.</td></tr><tr><td><span class=\"lf\">S</span></td><td>They have dinner at home.</td></tr><tr><td><span class=\"lf\">Z</span></td><td>They order pizza.</td></tr><tr><td><span class=\"lf\">G</span></td><td>They are hungry.</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(a) Si el Pau cuina, la Júlia renta els plats.",
      "(a) Si Pau cocina, Júlia friega los platos.",
      "(a) If Pau cooks, Júlia does the dishes."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">C → R</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(b) Sopen a casa o demanen pizza, però no totes dues coses.",
      "(b) Cenan en casa o piden pizza, pero no las dos cosas.",
      "(b) They have dinner at home or order pizza, but not both."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">(S ∨ Z) ∧ ¬(S ∧ Z)</span></p>"
    },
    {
     "t": "note",
     "x": [
      "És la «o» exclusiva. Equival a ¬(S ↔ Z).",
      "Es la «o» exclusiva. Equivale a ¬(S ↔ Z).",
      "It is the exclusive “or”. It is equivalent to ¬(S ↔ Z)."
     ]
    },
    {
     "t": "h",
     "x": [
      "(c) El Pau cuina només si sopen a casa.",
      "(c) Pau cocina solo si cenan en casa.",
      "(c) Pau cooks only if they have dinner at home."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">C → S</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(d) Demanen pizza sempre que tenen gana i el Pau no cuina.",
      "(d) Piden pizza siempre que tienen hambre y Pau no cocina.",
      "(d) They order pizza whenever they are hungry and Pau does not cook."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">(G ∧ ¬C) → Z</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(e) Ni el Pau cuina ni la Júlia renta els plats.",
      "(e) Ni Pau cocina ni Júlia friega los platos.",
      "(e) Neither does Pau cook nor does Júlia do the dishes."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬C ∧ ¬R</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(f) Si tenen gana, sopen a casa a menys que demanin pizza.",
      "(f) Si tienen hambre, cenan en casa a menos que pidan pizza.",
      "(f) If they are hungry, they have dinner at home unless they order pizza."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">G → (S ∨ Z)</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(g) Equivalència lògica",
      "(g) Equivalencia lógica",
      "(g) Logical equivalence"
     ]
    },
    {
     "h": [
      "<p>Enunciat (e): <span class=\"lf\">¬C ∧ ¬R</span> ≡ <span class=\"lf\">¬(C ∨ R)</span></p>",
      "<p>Enunciado (e): <span class=\"lf\">¬C ∧ ¬R</span> ≡ <span class=\"lf\">¬(C ∨ R)</span></p>",
      "<p>Statement (e): <span class=\"lf\">¬C ∧ ¬R</span> ≡ <span class=\"lf\">¬(C ∨ R)</span></p>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "Per la regla De Morgan: ¬A ∧ ¬B ⇔ ¬(A ∨ B). En llenguatge natural: *No és cert que el Pau cuini o la Júlia renti els plats.*",
      "Por la regla De Morgan: ¬A ∧ ¬B ⇔ ¬(A ∨ B). En lenguaje natural: *No es cierto que Pau cocine o Júlia friegue los platos.*",
      "By De Morgan's rule: ¬A ∧ ¬B ⇔ ¬(A ∨ B). In natural language: *It is not true that Pau cooks or Júlia does the dishes.*"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-a6",
   "unit": "u1",
   "kind": "A",
   "level": "easy",
   "type": "open",
   "src": "new",
   "title": [
    "El partit",
    "El partido",
    "The match"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Preneu els símbols del llenguatge de la lògica de proposicions (CP0) per a representar els següents enunciats. Doneu cadascuna de les proposicions abans de fer la representació dels enunciats i, després, la representació.",
      "Tomad los símbolos del lenguaje de la lógica de proposiciones (CP0) para representar los siguientes enunciados. Dad cada una de las proposiciones antes de hacer la representación de los enunciados y, después, la representación.",
      "Use the symbols of the language of propositional logic (CP0) to represent the following statements. Give each of the propositions before representing the statements and, then, the representation."
     ]
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Si el porter juga, l'equip guanya.</li><li>L'equip guanya només si el porter juga.</li><li>L'entrenador està content si i només si l'equip guanya.</li><li>Encara que plogui, l'afició aplaudeix.</li><li>Si l'equip no guanya quan plou, l'entrenador no està content.</li><li>És necessari que el porter jugui perquè l'afició aplaudeixi.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Si el portero juega, el equipo gana.</li><li>El equipo gana solo si el portero juega.</li><li>El entrenador está contento si y solo si el equipo gana.</li><li>Aunque llueva, la afición aplaude.</li><li>Si el equipo no gana cuando llueve, el entrenador no está contento.</li><li>Es necesario que el portero juegue para que la afición aplauda.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>If the goalkeeper plays, the team wins.</li><li>The team wins only if the goalkeeper plays.</li><li>The coach is happy if and only if the team wins.</li><li>Even though it rains, the fans applaud.</li><li>If the team does not win when it rains, the coach is not happy.</li><li>It is necessary for the goalkeeper to play for the fans to applaud.</li></ol>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "(g) Doneu una equivalència lògica d'algun dels enunciats anteriors. De quin enunciat l'heu donada? Quin seria l'enunciat en llenguatge natural?",
      "(g) Dad una equivalencia lógica de alguno de los enunciados anteriores. ¿De qué enunciado la habéis dado? ¿Cuál sería el enunciado en lenguaje natural?",
      "(g) Give a logical equivalence of one of the statements above. For which statement have you given it? What would the statement be in natural language?"
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Proposicions",
      "Proposiciones",
      "Propositions"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">G</span></td><td>L'equip guanya.</td></tr><tr><td><span class=\"lf\">J</span></td><td>El porter juga.</td></tr><tr><td><span class=\"lf\">L</span></td><td>Plou.</td></tr><tr><td><span class=\"lf\">E</span></td><td>L'entrenador està content.</td></tr><tr><td><span class=\"lf\">A</span></td><td>L'afició aplaudeix.</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">G</span></td><td>El equipo gana.</td></tr><tr><td><span class=\"lf\">J</span></td><td>El portero juega.</td></tr><tr><td><span class=\"lf\">L</span></td><td>Llueve.</td></tr><tr><td><span class=\"lf\">E</span></td><td>El entrenador está contento.</td></tr><tr><td><span class=\"lf\">A</span></td><td>La afición aplaude.</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">G</span></td><td>The team wins.</td></tr><tr><td><span class=\"lf\">J</span></td><td>The goalkeeper plays.</td></tr><tr><td><span class=\"lf\">L</span></td><td>It rains.</td></tr><tr><td><span class=\"lf\">E</span></td><td>The coach is happy.</td></tr><tr><td><span class=\"lf\">A</span></td><td>The fans applaud.</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(a) Si el porter juga, l'equip guanya.",
      "(a) Si el portero juega, el equipo gana.",
      "(a) If the goalkeeper plays, the team wins."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">J → G</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(b) L'equip guanya només si el porter juga.",
      "(b) El equipo gana solo si el portero juega.",
      "(b) The team wins only if the goalkeeper plays."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">G → J</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(c) L'entrenador està content si i només si l'equip guanya.",
      "(c) El entrenador está contento si y solo si el equipo gana.",
      "(c) The coach is happy if and only if the team wins."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">E ↔ G</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(d) Encara que plogui, l'afició aplaudeix.",
      "(d) Aunque llueva, la afición aplaude.",
      "(d) Even though it rains, the fans applaud."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">L ∧ A</span></p>"
    },
    {
     "t": "note",
     "x": [
      "«Encara que» afirma totes dues coses, com «però».",
      "«Aunque» afirma las dos cosas, como «pero».",
      "“Even though” asserts both things, like “but”."
     ]
    },
    {
     "t": "h",
     "x": [
      "(e) Si l'equip no guanya quan plou, l'entrenador no està content.",
      "(e) Si el equipo no gana cuando llueve, el entrenador no está contento.",
      "(e) If the team does not win when it rains, the coach is not happy."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">(L → ¬G) → ¬E</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(f) És necessari que el porter jugui perquè l'afició aplaudeixi.",
      "(f) Es necesario que el portero juegue para que la afición aplauda.",
      "(f) It is necessary for the goalkeeper to play for the fans to applaud."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">A → J</span></p>"
    },
    {
     "t": "note",
     "x": [
      "B és necessària per a A: A → B (sense B no hi ha A).",
      "B es necesaria para A: A → B (sin B no hay A).",
      "B is necessary for A: A → B (without B there is no A)."
     ]
    },
    {
     "t": "h",
     "x": [
      "(g) Equivalència lògica",
      "(g) Equivalencia lógica",
      "(g) Logical equivalence"
     ]
    },
    {
     "h": [
      "<p>Enunciat (a): <span class=\"lf\">J → G</span> ≡ <span class=\"lf\">¬G → ¬J</span></p>",
      "<p>Enunciado (a): <span class=\"lf\">J → G</span> ≡ <span class=\"lf\">¬G → ¬J</span></p>",
      "<p>Statement (a): <span class=\"lf\">J → G</span> ≡ <span class=\"lf\">¬G → ¬J</span></p>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "Per la regla contrapositiva. En llenguatge natural: *Si l'equip no guanya, el porter no juga.*",
      "Por la regla contrapositiva. En lenguaje natural: *Si el equipo no gana, el portero no juega.*",
      "By the contrapositive rule. In natural language: *If the team does not win, the goalkeeper does not play.*"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-a7",
   "unit": "u1",
   "kind": "A",
   "level": "easy",
   "type": "open",
   "src": "new",
   "title": [
    "El viatge",
    "El viaje",
    "The trip"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Preneu els símbols del llenguatge de la lògica de proposicions (CP0) per a representar els següents enunciats. Doneu cadascuna de les proposicions abans de fer la representació dels enunciats i, després, la representació.",
      "Tomad los símbolos del lenguaje de la lógica de proposiciones (CP0) para representar los siguientes enunciados. Dad cada una de las proposiciones antes de hacer la representación de los enunciados y, después, la representación.",
      "Use the symbols of the language of propositional logic (CP0) to represent the following statements. Give each of the propositions before representing the statements and, then, the representation."
     ]
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Viatgem si tenim diners i temps.</li><li>Només viatgem si trobem hotel.</li><li>Tenim temps però no diners.</li><li>Si viatgem, agafem l'avió o anem amb tren.</li><li>No agafem l'avió a menys que tinguem diners.</li><li>Si tenim diners, viatgem quan tenim temps.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Viajamos si tenemos dinero y tiempo.</li><li>Solo viajamos si encontramos hotel.</li><li>Tenemos tiempo pero no dinero.</li><li>Si viajamos, cogemos el avión o vamos en tren.</li><li>No cogemos el avión a menos que tengamos dinero.</li><li>Si tenemos dinero, viajamos cuando tenemos tiempo.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>We travel if we have money and time.</li><li>We travel only if we find a hotel.</li><li>We have time but not money.</li><li>If we travel, we take the plane or go by train.</li><li>We do not take the plane unless we have money.</li><li>If we have money, we travel when we have time.</li></ol>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "(g) Doneu una equivalència lògica d'algun dels enunciats anteriors. De quin enunciat l'heu donada? Quin seria l'enunciat en llenguatge natural?",
      "(g) Dad una equivalencia lógica de alguno de los enunciados anteriores. ¿De qué enunciado la habéis dado? ¿Cuál sería el enunciado en lenguaje natural?",
      "(g) Give a logical equivalence of one of the statements above. For which statement have you given it? What would the statement be in natural language?"
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Proposicions",
      "Proposiciones",
      "Propositions"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">V</span></td><td>Viatgem.</td></tr><tr><td><span class=\"lf\">D</span></td><td>Tenim diners.</td></tr><tr><td><span class=\"lf\">T</span></td><td>Tenim temps.</td></tr><tr><td><span class=\"lf\">A</span></td><td>Agafem l'avió.</td></tr><tr><td><span class=\"lf\">R</span></td><td>Anem amb tren.</td></tr><tr><td><span class=\"lf\">H</span></td><td>Trobem hotel.</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">V</span></td><td>Viajamos.</td></tr><tr><td><span class=\"lf\">D</span></td><td>Tenemos dinero.</td></tr><tr><td><span class=\"lf\">T</span></td><td>Tenemos tiempo.</td></tr><tr><td><span class=\"lf\">A</span></td><td>Cogemos el avión.</td></tr><tr><td><span class=\"lf\">R</span></td><td>Vamos en tren.</td></tr><tr><td><span class=\"lf\">H</span></td><td>Encontramos hotel.</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">V</span></td><td>We travel.</td></tr><tr><td><span class=\"lf\">D</span></td><td>We have money.</td></tr><tr><td><span class=\"lf\">T</span></td><td>We have time.</td></tr><tr><td><span class=\"lf\">A</span></td><td>We take the plane.</td></tr><tr><td><span class=\"lf\">R</span></td><td>We go by train.</td></tr><tr><td><span class=\"lf\">H</span></td><td>We find a hotel.</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(a) Viatgem si tenim diners i temps.",
      "(a) Viajamos si tenemos dinero y tiempo.",
      "(a) We travel if we have money and time."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">(D ∧ T) → V</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(b) Només viatgem si trobem hotel.",
      "(b) Solo viajamos si encontramos hotel.",
      "(b) We travel only if we find a hotel."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">V → H</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(c) Tenim temps però no diners.",
      "(c) Tenemos tiempo pero no dinero.",
      "(c) We have time but not money."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">T ∧ ¬D</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(d) Si viatgem, agafem l'avió o anem amb tren.",
      "(d) Si viajamos, cogemos el avión o vamos en tren.",
      "(d) If we travel, we take the plane or go by train."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">V → (A ∨ R)</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(e) No agafem l'avió a menys que tinguem diners.",
      "(e) No cogemos el avión a menos que tengamos dinero.",
      "(e) We do not take the plane unless we have money."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬A ∨ D</span></p>"
    },
    {
     "t": "note",
     "x": [
      "«No A a menys que D» és ¬A ∨ D, que equival a A → D.",
      "«No A a menos que D» es ¬A ∨ D, que equivale a A → D.",
      "“Not A unless D” is ¬A ∨ D, which is equivalent to A → D."
     ]
    },
    {
     "t": "h",
     "x": [
      "(f) Si tenim diners, viatgem quan tenim temps.",
      "(f) Si tenemos dinero, viajamos cuando tenemos tiempo.",
      "(f) If we have money, we travel when we have time."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">D → (T → V)</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(g) Equivalència lògica",
      "(g) Equivalencia lógica",
      "(g) Logical equivalence"
     ]
    },
    {
     "h": [
      "<p>Enunciat (f): <span class=\"lf\">D → (T → V)</span> ≡ <span class=\"lf\">(D ∧ T) → V</span></p>",
      "<p>Enunciado (f): <span class=\"lf\">D → (T → V)</span> ≡ <span class=\"lf\">(D ∧ T) → V</span></p>",
      "<p>Statement (f): <span class=\"lf\">D → (T → V)</span> ≡ <span class=\"lf\">(D ∧ T) → V</span></p>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "Per la regla llei d'exportació: (A ∧ B) → C ⇔ A → (B → C). En llenguatge natural: *Si tenim diners i temps, viatgem. És exactament l'enunciat (a)!*",
      "Por la regla ley de exportación: (A ∧ B) → C ⇔ A → (B → C). En lenguaje natural: *Si tenemos dinero y tiempo, viajamos. ¡Es exactamente el enunciado (a)!*",
      "By the exportation law: (A ∧ B) → C ⇔ A → (B → C). In natural language: *If we have money and time, we travel. It is exactly statement (a)!*"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-a8",
   "unit": "u1",
   "kind": "A",
   "level": "easy",
   "type": "open",
   "src": "new",
   "title": [
    "El llum de casa",
    "La luz de casa",
    "The light at home"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Preneu els símbols del llenguatge de la lògica de proposicions (CP0) per a representar els següents enunciats. Doneu cadascuna de les proposicions abans de fer la representació dels enunciats i, després, la representació.",
      "Tomad los símbolos del lenguaje de la lógica de proposiciones (CP0) para representar los siguientes enunciados. Dad cada una de las proposiciones antes de hacer la representación de los enunciados y, después, la representación.",
      "Use the symbols of the language of propositional logic (CP0) to represent the following statements. Give each of the propositions before representing the statements and, then, the representation."
     ]
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>El llum s'encén si l'interruptor està activat i hi ha corrent.</li><li>El llum només s'encén si la bombeta no està fosa.</li><li>Hi ha corrent, però el llum no s'encén.</li><li>L'alarma sona si i només si no hi ha corrent.</li><li>Si el llum no s'encén quan l'interruptor està activat, la bombeta està fosa o no hi ha corrent.</li><li>Ni la bombeta està fosa ni l'alarma sona.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>La luz se enciende si el interruptor está activado y hay corriente.</li><li>La luz solo se enciende si la bombilla no está fundida.</li><li>Hay corriente, pero la luz no se enciende.</li><li>La alarma suena si y solo si no hay corriente.</li><li>Si la luz no se enciende cuando el interruptor está activado, la bombilla está fundida o no hay corriente.</li><li>Ni la bombilla está fundida ni la alarma suena.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>The light comes on if the switch is on and there is power.</li><li>The light comes on only if the bulb is not blown.</li><li>There is power, but the light does not come on.</li><li>The alarm goes off if and only if there is no power.</li><li>If the light does not come on when the switch is on, the bulb is blown or there is no power.</li><li>Neither is the bulb blown nor does the alarm go off.</li></ol>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "(g) Doneu una equivalència lògica d'algun dels enunciats anteriors. De quin enunciat l'heu donada? Quin seria l'enunciat en llenguatge natural?",
      "(g) Dad una equivalencia lógica de alguno de los enunciados anteriores. ¿De qué enunciado la habéis dado? ¿Cuál sería el enunciado en lenguaje natural?",
      "(g) Give a logical equivalence of one of the statements above. For which statement have you given it? What would the statement be in natural language?"
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Proposicions",
      "Proposiciones",
      "Propositions"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">L</span></td><td>El llum s'encén.</td></tr><tr><td><span class=\"lf\">I</span></td><td>L'interruptor està activat.</td></tr><tr><td><span class=\"lf\">F</span></td><td>Hi ha corrent.</td></tr><tr><td><span class=\"lf\">B</span></td><td>La bombeta està fosa.</td></tr><tr><td><span class=\"lf\">A</span></td><td>L'alarma sona.</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">L</span></td><td>La luz se enciende.</td></tr><tr><td><span class=\"lf\">I</span></td><td>El interruptor está activado.</td></tr><tr><td><span class=\"lf\">F</span></td><td>Hay corriente.</td></tr><tr><td><span class=\"lf\">B</span></td><td>La bombilla está fundida.</td></tr><tr><td><span class=\"lf\">A</span></td><td>La alarma suena.</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">L</span></td><td>The light comes on.</td></tr><tr><td><span class=\"lf\">I</span></td><td>The switch is on.</td></tr><tr><td><span class=\"lf\">F</span></td><td>There is power.</td></tr><tr><td><span class=\"lf\">B</span></td><td>The bulb is blown.</td></tr><tr><td><span class=\"lf\">A</span></td><td>The alarm goes off.</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(a) El llum s'encén si l'interruptor està activat i hi ha corrent.",
      "(a) La luz se enciende si el interruptor está activado y hay corriente.",
      "(a) The light comes on if the switch is on and there is power."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">(I ∧ F) → L</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(b) El llum només s'encén si la bombeta no està fosa.",
      "(b) La luz solo se enciende si la bombilla no está fundida.",
      "(b) The light comes on only if the bulb is not blown."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">L → ¬B</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(c) Hi ha corrent, però el llum no s'encén.",
      "(c) Hay corriente, pero la luz no se enciende.",
      "(c) There is power, but the light does not come on."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">F ∧ ¬L</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(d) L'alarma sona si i només si no hi ha corrent.",
      "(d) La alarma suena si y solo si no hay corriente.",
      "(d) The alarm goes off if and only if there is no power."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">A ↔ ¬F</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(e) Si el llum no s'encén quan l'interruptor està activat, la bombeta està fosa o no hi ha corrent.",
      "(e) Si la luz no se enciende cuando el interruptor está activado, la bombilla está fundida o no hay corriente.",
      "(e) If the light does not come on when the switch is on, the bulb is blown or there is no power."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">(I → ¬L) → (B ∨ ¬F)</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(f) Ni la bombeta està fosa ni l'alarma sona.",
      "(f) Ni la bombilla está fundida ni la alarma suena.",
      "(f) Neither is the bulb blown nor does the alarm go off."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬B ∧ ¬A</span></p>"
    },
    {
     "t": "h",
     "x": [
      "(g) Equivalència lògica",
      "(g) Equivalencia lógica",
      "(g) Logical equivalence"
     ]
    },
    {
     "h": [
      "<p>Enunciat (b): <span class=\"lf\">L → ¬B</span> ≡ <span class=\"lf\">B → ¬L</span></p>",
      "<p>Enunciado (b): <span class=\"lf\">L → ¬B</span> ≡ <span class=\"lf\">B → ¬L</span></p>",
      "<p>Statement (b): <span class=\"lf\">L → ¬B</span> ≡ <span class=\"lf\">B → ¬L</span></p>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "Per la regla contrapositiva i doble negació. En llenguatge natural: *Si la bombeta està fosa, el llum no s'encén.*",
      "Por la regla contrapositiva y doble negación. En lenguaje natural: *Si la bombilla está fundida, la luz no se enciende.*",
      "By the contrapositive rule and double negation. In natural language: *If the bulb is blown, the light does not come on.*"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-b1",
   "unit": "u2",
   "kind": "B",
   "level": "exam",
   "type": "open",
   "src": "exam",
   "srcName": [
    "CP1 2025-26 · Exercici 3",
    "CP1 2025-26 · Ejercicio 3",
    "Test 1 2025-26 · Exercise 3"
   ],
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donada la conseqüència lògica següent:",
      "Dada la consecuencia lógica siguiente:",
      "Given the following logical consequence:"
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-big\"><span class=\"lf\">(¬B → ¬A) ∧ (¬B ∨ C)</span> &nbsp;⇒&nbsp; <span class=\"lf\">A → C</span></p>"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Construïu la taula de la veritat per comprovar si el raonament és vàlid o no. Cal assignar el valor de certesa o falsedat a les proposicions i a les connectives.</li><li>Quin tipus d'enunciat heu trobat? Justifiqueu la resposta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Construid la tabla de verdad para comprobar si el razonamiento es válido o no. Hay que asignar el valor de certeza o falsedad a las proposiciones y a las conectivas.</li><li>¿Qué tipo de enunciado habéis encontrado? Justificad la respuesta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Build the truth table to check whether the argument is valid or not. You must assign the value true or false to the propositions and to the connectives.</li><li>What type of statement have you found? Justify your answer.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Taula de veritat",
      "Tabla de verdad",
      "Truth table"
     ]
    },
    {
     "h": [
      "<p>Hi ha 3 àtoms (A, B, C): 2<sup>3</sup> = 8 files. Les columnes intermèdies són les subfórmules; la columna <span class=\"pc-k\">blava</span> és la conjunció de les premisses i la <span class=\"cc-k\">verda</span>, la conclusió.</p>",
      "<p>Hay 3 átomos (A, B, C): 2<sup>3</sup> = 8 filas. Las columnas intermedias son las subfórmulas; la columna <span class=\"pc-k\">azul</span> es la conjunción de las premisas y la <span class=\"cc-k\">verde</span>, la conclusión.</p>",
      "<p>There are 3 atoms (A, B, C): 2<sup>3</sup> = 8 rows. The intermediate columns are the subformulas; the <span class=\"pc-k\">blue</span> column is the conjunction of the premises and the <span class=\"cc-k\">green</span> one, the conclusion.</p>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<div class=\"tw\"><table class=\"lx-tt\"><thead><tr><th>A</th><th>B</th><th>C</th><th class=\"\">¬B</th><th class=\"\">¬A</th><th class=\"\">¬B → ¬A</th><th class=\"\">¬B ∨ C</th><th class=\"pc\">(¬B → ¬A) ∧ (¬B ∨ C)</th><th class=\"cc\">A → C</th><th class=\"wc\">((¬B → ¬A) ∧ (¬B ∨ C)) → (A → C)</th></tr></thead><tbody><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr></tbody></table></div>"
    },
    {
     "t": "h",
     "x": [
      "(a) Validesa",
      "(a) Validez",
      "(a) Validity"
     ]
    },
    {
     "h": [
      "<p>Totes les files on les premisses són certes tenen la conclusió certa. El raonament és <b>vàlid</b>: <span class=\"lf\">(¬B → ¬A) ∧ (¬B ∨ C)</span> ⇒ <span class=\"lf\">A → C</span>.</p>",
      "<p>Todas las filas en las que las premisas son ciertas tienen la conclusión cierta. El razonamiento es <b>válido</b>: <span class=\"lf\">(¬B → ¬A) ∧ (¬B ∨ C)</span> ⇒ <span class=\"lf\">A → C</span>.</p>",
      "<p>Every row in which the premises are true has the conclusion true. The argument is <b>valid</b>: <span class=\"lf\">(¬B → ¬A) ∧ (¬B ∨ C)</span> ⇒ <span class=\"lf\">A → C</span>.</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(b) Tipus d'enunciat",
      "(b) Tipo de enunciado",
      "(b) Type of statement"
     ]
    },
    {
     "h": [
      "<p>L'enunciat <span class=\"lf\">((¬B → ¬A) ∧ (¬B ∨ C)) → (A → C)</span> és una <b>tautologia</b> (vàlida): és certa en totes les interpretacions. Per això el raonament és vàlid: (premisses) → (conclusió) és una tautologia si i només si la conclusió és conseqüència lògica de les premisses.</p>",
      "<p>El enunciado <span class=\"lf\">((¬B → ¬A) ∧ (¬B ∨ C)) → (A → C)</span> es una <b>tautología</b> (válida): es cierta en todas las interpretaciones. Por eso el razonamiento es válido: (premisas) → (conclusión) es una tautología si y solo si la conclusión es consecuencia lógica de las premisas.</p>",
      "<p>The statement <span class=\"lf\">((¬B → ¬A) ∧ (¬B ∨ C)) → (A → C)</span> is a <b>tautology</b> (valid): it is true in every interpretation. That is why the argument is valid: (premises) → (conclusion) is a tautology if and only if the conclusion is a logical consequence of the premises.</p>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-b2",
   "unit": "u2",
   "kind": "B",
   "level": "easy",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donada la conseqüència lògica següent:",
      "Dada la consecuencia lógica siguiente:",
      "Given the following logical consequence:"
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-big\"><span class=\"lf\">(P → Q) ∧ ¬P</span> &nbsp;⇒&nbsp; <span class=\"lf\">¬Q</span></p>"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Construïu la taula de la veritat per comprovar si el raonament és vàlid o no. Cal assignar el valor de certesa o falsedat a les proposicions i a les connectives.</li><li>Quin tipus d'enunciat heu trobat? Justifiqueu la resposta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Construid la tabla de verdad para comprobar si el razonamiento es válido o no. Hay que asignar el valor de certeza o falsedad a las proposiciones y a las conectivas.</li><li>¿Qué tipo de enunciado habéis encontrado? Justificad la respuesta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Build the truth table to check whether the argument is valid or not. You must assign the value true or false to the propositions and to the connectives.</li><li>What type of statement have you found? Justify your answer.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Taula de veritat",
      "Tabla de verdad",
      "Truth table"
     ]
    },
    {
     "h": [
      "<p>Hi ha 2 àtoms (P, Q): 2<sup>2</sup> = 4 files. Les columnes intermèdies són les subfórmules; la columna <span class=\"pc-k\">blava</span> és la conjunció de les premisses i la <span class=\"cc-k\">verda</span>, la conclusió.</p>",
      "<p>Hay 2 átomos (P, Q): 2<sup>2</sup> = 4 filas. Las columnas intermedias son las subfórmulas; la columna <span class=\"pc-k\">azul</span> es la conjunción de las premisas y la <span class=\"cc-k\">verde</span>, la conclusión.</p>",
      "<p>There are 2 atoms (P, Q): 2<sup>2</sup> = 4 rows. The intermediate columns are the subformulas; the <span class=\"pc-k\">blue</span> column is the conjunction of the premises and the <span class=\"cc-k\">green</span> one, the conclusion.</p>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<div class=\"tw\"><table class=\"lx-tt\"><thead><tr><th>P</th><th>Q</th><th class=\"\">P → Q</th><th class=\"\">¬P</th><th class=\"pc\">(P → Q) ∧ ¬P</th><th class=\"cc\">¬Q</th><th class=\"wc\">((P → Q) ∧ ¬P) → ¬Q</th></tr></thead><tbody><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"bad\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv f\">F</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr></tbody></table></div>"
    },
    {
     "t": "h",
     "x": [
      "(a) Validesa",
      "(a) Validez",
      "(a) Validity"
     ]
    },
    {
     "t": "p",
     "x": [
      "Contraexemple: P = F, Q = T. Les premisses són certes i la conclusió falsa: El raonament **no és vàlid**.",
      "Contraejemplo: P = F, Q = T. Las premisas son ciertas y la conclusión falsa: El razonamiento **no es válido**.",
      "Counterexample: P = F, Q = T. The premises are true and the conclusion false: the argument **is not valid**."
     ]
    },
    {
     "t": "h",
     "x": [
      "(b) Tipus d'enunciat",
      "(b) Tipo de enunciado",
      "(b) Type of statement"
     ]
    },
    {
     "h": [
      "<p>L'enunciat <span class=\"lf\">((P → Q) ∧ ¬P) → ¬Q</span> és <b>satisfactible però no vàlida</b> (contingent): hi ha files certes i files falses. Com que no és una tautologia, la conclusió no és conseqüència lògica de les premisses.</p>",
      "<p>El enunciado <span class=\"lf\">((P → Q) ∧ ¬P) → ¬Q</span> es <b>satisfacible pero no válida</b> (contingente): hay filas ciertas y filas falsas. Como no es una tautología, la conclusión no es consecuencia lógica de las premisas.</p>",
      "<p>The statement <span class=\"lf\">((P → Q) ∧ ¬P) → ¬Q</span> is <b>satisfiable but not valid</b> (contingent): there are true rows and false rows. Since it is not a tautology, the conclusion is not a logical consequence of the premises.</p>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-b3",
   "unit": "u2",
   "kind": "B",
   "level": "easy",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donada la conseqüència lògica següent:",
      "Dada la consecuencia lógica siguiente:",
      "Given the following logical consequence:"
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-big\"><span class=\"lf\">(A ∨ B) ∧ (A → C) ∧ (B → C)</span> &nbsp;⇒&nbsp; <span class=\"lf\">C</span></p>"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Construïu la taula de la veritat per comprovar si el raonament és vàlid o no. Cal assignar el valor de certesa o falsedat a les proposicions i a les connectives.</li><li>Quin tipus d'enunciat heu trobat? Justifiqueu la resposta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Construid la tabla de verdad para comprobar si el razonamiento es válido o no. Hay que asignar el valor de certeza o falsedad a las proposiciones y a las conectivas.</li><li>¿Qué tipo de enunciado habéis encontrado? Justificad la respuesta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Build the truth table to check whether the argument is valid or not. You must assign the value true or false to the propositions and to the connectives.</li><li>What type of statement have you found? Justify your answer.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Taula de veritat",
      "Tabla de verdad",
      "Truth table"
     ]
    },
    {
     "h": [
      "<p>Hi ha 3 àtoms (A, B, C): 2<sup>3</sup> = 8 files. Les columnes intermèdies són les subfórmules; la columna <span class=\"pc-k\">blava</span> és la conjunció de les premisses i la <span class=\"cc-k\">verda</span>, la conclusió.</p>",
      "<p>Hay 3 átomos (A, B, C): 2<sup>3</sup> = 8 filas. Las columnas intermedias son las subfórmulas; la columna <span class=\"pc-k\">azul</span> es la conjunción de las premisas y la <span class=\"cc-k\">verde</span>, la conclusión.</p>",
      "<p>There are 3 atoms (A, B, C): 2<sup>3</sup> = 8 rows. The intermediate columns are the subformulas; the <span class=\"pc-k\">blue</span> column is the conjunction of the premises and the <span class=\"cc-k\">green</span> one, the conclusion.</p>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<div class=\"tw\"><table class=\"lx-tt\"><thead><tr><th>A</th><th>B</th><th>C</th><th class=\"\">A ∨ B</th><th class=\"\">A → C</th><th class=\"\">(A ∨ B) ∧ (A → C)</th><th class=\"\">B → C</th><th class=\"pc\">(A ∨ B) ∧ (A → C) ∧ (B → C)</th><th class=\"wc\">((A ∨ B) ∧ (A → C) ∧ (B → C)) → C</th></tr></thead><tbody><tr class=\"\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr></tbody></table></div>"
    },
    {
     "t": "h",
     "x": [
      "(a) Validesa",
      "(a) Validez",
      "(a) Validity"
     ]
    },
    {
     "h": [
      "<p>Totes les files on les premisses són certes tenen la conclusió certa. El raonament és <b>vàlid</b>: <span class=\"lf\">(A ∨ B) ∧ (A → C) ∧ (B → C)</span> ⇒ <span class=\"lf\">C</span>.</p>",
      "<p>Todas las filas en las que las premisas son ciertas tienen la conclusión cierta. El razonamiento es <b>válido</b>: <span class=\"lf\">(A ∨ B) ∧ (A → C) ∧ (B → C)</span> ⇒ <span class=\"lf\">C</span>.</p>",
      "<p>Every row in which the premises are true has the conclusion true. The argument is <b>valid</b>: <span class=\"lf\">(A ∨ B) ∧ (A → C) ∧ (B → C)</span> ⇒ <span class=\"lf\">C</span>.</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(b) Tipus d'enunciat",
      "(b) Tipo de enunciado",
      "(b) Type of statement"
     ]
    },
    {
     "h": [
      "<p>L'enunciat <span class=\"lf\">((A ∨ B) ∧ (A → C) ∧ (B → C)) → C</span> és una <b>tautologia</b> (vàlida): és certa en totes les interpretacions. Per això el raonament és vàlid: (premisses) → (conclusió) és una tautologia si i només si la conclusió és conseqüència lògica de les premisses.</p>",
      "<p>El enunciado <span class=\"lf\">((A ∨ B) ∧ (A → C) ∧ (B → C)) → C</span> es una <b>tautología</b> (válida): es cierta en todas las interpretaciones. Por eso el razonamiento es válido: (premisas) → (conclusión) es una tautología si y solo si la conclusión es consecuencia lógica de las premisas.</p>",
      "<p>The statement <span class=\"lf\">((A ∨ B) ∧ (A → C) ∧ (B → C)) → C</span> is a <b>tautology</b> (valid): it is true in every interpretation. That is why the argument is valid: (premises) → (conclusion) is a tautology if and only if the conclusion is a logical consequence of the premises.</p>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-b4",
   "unit": "u2",
   "kind": "B",
   "level": "easy",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donada la conseqüència lògica següent:",
      "Dada la consecuencia lógica siguiente:",
      "Given the following logical consequence:"
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-big\"><span class=\"lf\">(P → Q) ∧ (Q → R)</span> &nbsp;⇒&nbsp; <span class=\"lf\">R → P</span></p>"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Construïu la taula de la veritat per comprovar si el raonament és vàlid o no. Cal assignar el valor de certesa o falsedat a les proposicions i a les connectives.</li><li>Quin tipus d'enunciat heu trobat? Justifiqueu la resposta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Construid la tabla de verdad para comprobar si el razonamiento es válido o no. Hay que asignar el valor de certeza o falsedad a las proposiciones y a las conectivas.</li><li>¿Qué tipo de enunciado habéis encontrado? Justificad la respuesta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Build the truth table to check whether the argument is valid or not. You must assign the value true or false to the propositions and to the connectives.</li><li>What type of statement have you found? Justify your answer.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Taula de veritat",
      "Tabla de verdad",
      "Truth table"
     ]
    },
    {
     "h": [
      "<p>Hi ha 3 àtoms (P, Q, R): 2<sup>3</sup> = 8 files. Les columnes intermèdies són les subfórmules; la columna <span class=\"pc-k\">blava</span> és la conjunció de les premisses i la <span class=\"cc-k\">verda</span>, la conclusió.</p>",
      "<p>Hay 3 átomos (P, Q, R): 2<sup>3</sup> = 8 filas. Las columnas intermedias son las subfórmulas; la columna <span class=\"pc-k\">azul</span> es la conjunción de las premisas y la <span class=\"cc-k\">verde</span>, la conclusión.</p>",
      "<p>There are 3 atoms (P, Q, R): 2<sup>3</sup> = 8 rows. The intermediate columns are the subformulas; the <span class=\"pc-k\">blue</span> column is the conjunction of the premises and the <span class=\"cc-k\">green</span> one, the conclusion.</p>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<div class=\"tw\"><table class=\"lx-tt\"><thead><tr><th>P</th><th>Q</th><th>R</th><th class=\"\">P → Q</th><th class=\"\">Q → R</th><th class=\"pc\">(P → Q) ∧ (Q → R)</th><th class=\"cc\">R → P</th><th class=\"wc\">((P → Q) ∧ (Q → R)) → (R → P)</th></tr></thead><tbody><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"bad\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv f\">F</span></td></tr><tr class=\"\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"bad\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv f\">F</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr></tbody></table></div>"
    },
    {
     "t": "h",
     "x": [
      "(a) Validesa",
      "(a) Validez",
      "(a) Validity"
     ]
    },
    {
     "t": "p",
     "x": [
      "Contraexemples: P = F, Q = F, R = T; P = F, Q = T, R = T. Les premisses són certes i la conclusió falsa: El raonament **no és vàlid**.",
      "Contraejemplos: P = F, Q = F, R = T; P = F, Q = T, R = T. Las premisas son ciertas y la conclusión falsa: El razonamiento **no es válido**.",
      "Counterexamples: P = F, Q = F, R = T; P = F, Q = T, R = T. The premises are true and the conclusion false: the argument **is not valid**."
     ]
    },
    {
     "t": "h",
     "x": [
      "(b) Tipus d'enunciat",
      "(b) Tipo de enunciado",
      "(b) Type of statement"
     ]
    },
    {
     "h": [
      "<p>L'enunciat <span class=\"lf\">((P → Q) ∧ (Q → R)) → (R → P)</span> és <b>satisfactible però no vàlida</b> (contingent): hi ha files certes i files falses. Com que no és una tautologia, la conclusió no és conseqüència lògica de les premisses.</p>",
      "<p>El enunciado <span class=\"lf\">((P → Q) ∧ (Q → R)) → (R → P)</span> es <b>satisfacible pero no válida</b> (contingente): hay filas ciertas y filas falsas. Como no es una tautología, la conclusión no es consecuencia lógica de las premisas.</p>",
      "<p>The statement <span class=\"lf\">((P → Q) ∧ (Q → R)) → (R → P)</span> is <b>satisfiable but not valid</b> (contingent): there are true rows and false rows. Since it is not a tautology, the conclusion is not a logical consequence of the premises.</p>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-b5",
   "unit": "u2",
   "kind": "B",
   "level": "easy",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donada la conseqüència lògica següent:",
      "Dada la consecuencia lógica siguiente:",
      "Given the following logical consequence:"
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-big\"><span class=\"lf\">(¬A ∨ B) ∧ (¬B ∨ ¬C)</span> &nbsp;⇒&nbsp; <span class=\"lf\">¬(A ∧ C)</span></p>"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Construïu la taula de la veritat per comprovar si el raonament és vàlid o no. Cal assignar el valor de certesa o falsedat a les proposicions i a les connectives.</li><li>Quin tipus d'enunciat heu trobat? Justifiqueu la resposta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Construid la tabla de verdad para comprobar si el razonamiento es válido o no. Hay que asignar el valor de certeza o falsedad a las proposiciones y a las conectivas.</li><li>¿Qué tipo de enunciado habéis encontrado? Justificad la respuesta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Build the truth table to check whether the argument is valid or not. You must assign the value true or false to the propositions and to the connectives.</li><li>What type of statement have you found? Justify your answer.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Taula de veritat",
      "Tabla de verdad",
      "Truth table"
     ]
    },
    {
     "h": [
      "<p>Hi ha 3 àtoms (A, B, C): 2<sup>3</sup> = 8 files. Les columnes intermèdies són les subfórmules; la columna <span class=\"pc-k\">blava</span> és la conjunció de les premisses i la <span class=\"cc-k\">verda</span>, la conclusió.</p>",
      "<p>Hay 3 átomos (A, B, C): 2<sup>3</sup> = 8 filas. Las columnas intermedias son las subfórmulas; la columna <span class=\"pc-k\">azul</span> es la conjunción de las premisas y la <span class=\"cc-k\">verde</span>, la conclusión.</p>",
      "<p>There are 3 atoms (A, B, C): 2<sup>3</sup> = 8 rows. The intermediate columns are the subformulas; the <span class=\"pc-k\">blue</span> column is the conjunction of the premises and the <span class=\"cc-k\">green</span> one, the conclusion.</p>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<div class=\"tw\"><table class=\"lx-tt\"><thead><tr><th>A</th><th>B</th><th>C</th><th class=\"\">¬A</th><th class=\"\">¬A ∨ B</th><th class=\"\">¬B</th><th class=\"\">¬C</th><th class=\"\">¬B ∨ ¬C</th><th class=\"pc\">(¬A ∨ B) ∧ (¬B ∨ ¬C)</th><th class=\"\">A ∧ C</th><th class=\"cc\">¬(A ∧ C)</th><th class=\"wc\">((¬A ∨ B) ∧ (¬B ∨ ¬C)) → ¬(A ∧ C)</th></tr></thead><tbody><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr></tbody></table></div>"
    },
    {
     "t": "h",
     "x": [
      "(a) Validesa",
      "(a) Validez",
      "(a) Validity"
     ]
    },
    {
     "h": [
      "<p>Totes les files on les premisses són certes tenen la conclusió certa. El raonament és <b>vàlid</b>: <span class=\"lf\">(¬A ∨ B) ∧ (¬B ∨ ¬C)</span> ⇒ <span class=\"lf\">¬(A ∧ C)</span>.</p>",
      "<p>Todas las filas en las que las premisas son ciertas tienen la conclusión cierta. El razonamiento es <b>válido</b>: <span class=\"lf\">(¬A ∨ B) ∧ (¬B ∨ ¬C)</span> ⇒ <span class=\"lf\">¬(A ∧ C)</span>.</p>",
      "<p>Every row in which the premises are true has the conclusion true. The argument is <b>valid</b>: <span class=\"lf\">(¬A ∨ B) ∧ (¬B ∨ ¬C)</span> ⇒ <span class=\"lf\">¬(A ∧ C)</span>.</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(b) Tipus d'enunciat",
      "(b) Tipo de enunciado",
      "(b) Type of statement"
     ]
    },
    {
     "h": [
      "<p>L'enunciat <span class=\"lf\">((¬A ∨ B) ∧ (¬B ∨ ¬C)) → ¬(A ∧ C)</span> és una <b>tautologia</b> (vàlida): és certa en totes les interpretacions. Per això el raonament és vàlid: (premisses) → (conclusió) és una tautologia si i només si la conclusió és conseqüència lògica de les premisses.</p>",
      "<p>El enunciado <span class=\"lf\">((¬A ∨ B) ∧ (¬B ∨ ¬C)) → ¬(A ∧ C)</span> es una <b>tautología</b> (válida): es cierta en todas las interpretaciones. Por eso el razonamiento es válido: (premisas) → (conclusión) es una tautología si y solo si la conclusión es consecuencia lógica de las premisas.</p>",
      "<p>The statement <span class=\"lf\">((¬A ∨ B) ∧ (¬B ∨ ¬C)) → ¬(A ∧ C)</span> is a <b>tautology</b> (valid): it is true in every interpretation. That is why the argument is valid: (premises) → (conclusion) is a tautology if and only if the conclusion is a logical consequence of the premises.</p>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-b6",
   "unit": "u2",
   "kind": "B",
   "level": "easy",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donada la conseqüència lògica següent:",
      "Dada la consecuencia lógica siguiente:",
      "Given the following logical consequence:"
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-big\"><span class=\"lf\">(P ∨ Q) ∧ (P → R)</span> &nbsp;⇒&nbsp; <span class=\"lf\">R ∨ Q</span></p>"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Construïu la taula de la veritat per comprovar si el raonament és vàlid o no. Cal assignar el valor de certesa o falsedat a les proposicions i a les connectives.</li><li>Quin tipus d'enunciat heu trobat? Justifiqueu la resposta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Construid la tabla de verdad para comprobar si el razonamiento es válido o no. Hay que asignar el valor de certeza o falsedad a las proposiciones y a las conectivas.</li><li>¿Qué tipo de enunciado habéis encontrado? Justificad la respuesta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Build the truth table to check whether the argument is valid or not. You must assign the value true or false to the propositions and to the connectives.</li><li>What type of statement have you found? Justify your answer.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Taula de veritat",
      "Tabla de verdad",
      "Truth table"
     ]
    },
    {
     "h": [
      "<p>Hi ha 3 àtoms (P, Q, R): 2<sup>3</sup> = 8 files. Les columnes intermèdies són les subfórmules; la columna <span class=\"pc-k\">blava</span> és la conjunció de les premisses i la <span class=\"cc-k\">verda</span>, la conclusió.</p>",
      "<p>Hay 3 átomos (P, Q, R): 2<sup>3</sup> = 8 filas. Las columnas intermedias son las subfórmulas; la columna <span class=\"pc-k\">azul</span> es la conjunción de las premisas y la <span class=\"cc-k\">verde</span>, la conclusión.</p>",
      "<p>There are 3 atoms (P, Q, R): 2<sup>3</sup> = 8 rows. The intermediate columns are the subformulas; the <span class=\"pc-k\">blue</span> column is the conjunction of the premises and the <span class=\"cc-k\">green</span> one, the conclusion.</p>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<div class=\"tw\"><table class=\"lx-tt\"><thead><tr><th>P</th><th>Q</th><th>R</th><th class=\"\">P ∨ Q</th><th class=\"\">P → R</th><th class=\"pc\">(P ∨ Q) ∧ (P → R)</th><th class=\"cc\">R ∨ Q</th><th class=\"wc\">((P ∨ Q) ∧ (P → R)) → (R ∨ Q)</th></tr></thead><tbody><tr class=\"\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr></tbody></table></div>"
    },
    {
     "t": "h",
     "x": [
      "(a) Validesa",
      "(a) Validez",
      "(a) Validity"
     ]
    },
    {
     "h": [
      "<p>Totes les files on les premisses són certes tenen la conclusió certa. El raonament és <b>vàlid</b>: <span class=\"lf\">(P ∨ Q) ∧ (P → R)</span> ⇒ <span class=\"lf\">R ∨ Q</span>.</p>",
      "<p>Todas las filas en las que las premisas son ciertas tienen la conclusión cierta. El razonamiento es <b>válido</b>: <span class=\"lf\">(P ∨ Q) ∧ (P → R)</span> ⇒ <span class=\"lf\">R ∨ Q</span>.</p>",
      "<p>Every row in which the premises are true has the conclusion true. The argument is <b>valid</b>: <span class=\"lf\">(P ∨ Q) ∧ (P → R)</span> ⇒ <span class=\"lf\">R ∨ Q</span>.</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(b) Tipus d'enunciat",
      "(b) Tipo de enunciado",
      "(b) Type of statement"
     ]
    },
    {
     "h": [
      "<p>L'enunciat <span class=\"lf\">((P ∨ Q) ∧ (P → R)) → (R ∨ Q)</span> és una <b>tautologia</b> (vàlida): és certa en totes les interpretacions. Per això el raonament és vàlid: (premisses) → (conclusió) és una tautologia si i només si la conclusió és conseqüència lògica de les premisses.</p>",
      "<p>El enunciado <span class=\"lf\">((P ∨ Q) ∧ (P → R)) → (R ∨ Q)</span> es una <b>tautología</b> (válida): es cierta en todas las interpretaciones. Por eso el razonamiento es válido: (premisas) → (conclusión) es una tautología si y solo si la conclusión es consecuencia lógica de las premisas.</p>",
      "<p>The statement <span class=\"lf\">((P ∨ Q) ∧ (P → R)) → (R ∨ Q)</span> is a <b>tautology</b> (valid): it is true in every interpretation. That is why the argument is valid: (premises) → (conclusion) is a tautology if and only if the conclusion is a logical consequence of the premises.</p>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-b7",
   "unit": "u2",
   "kind": "B",
   "level": "easy",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donada la conseqüència lògica següent:",
      "Dada la consecuencia lógica siguiente:",
      "Given the following logical consequence:"
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-big\"><span class=\"lf\">(A → (B ∨ C)) ∧ ¬B</span> &nbsp;⇒&nbsp; <span class=\"lf\">A → C</span></p>"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Construïu la taula de la veritat per comprovar si el raonament és vàlid o no. Cal assignar el valor de certesa o falsedat a les proposicions i a les connectives.</li><li>Quin tipus d'enunciat heu trobat? Justifiqueu la resposta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Construid la tabla de verdad para comprobar si el razonamiento es válido o no. Hay que asignar el valor de certeza o falsedad a las proposiciones y a las conectivas.</li><li>¿Qué tipo de enunciado habéis encontrado? Justificad la respuesta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Build the truth table to check whether the argument is valid or not. You must assign the value true or false to the propositions and to the connectives.</li><li>What type of statement have you found? Justify your answer.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Taula de veritat",
      "Tabla de verdad",
      "Truth table"
     ]
    },
    {
     "h": [
      "<p>Hi ha 3 àtoms (A, B, C): 2<sup>3</sup> = 8 files. Les columnes intermèdies són les subfórmules; la columna <span class=\"pc-k\">blava</span> és la conjunció de les premisses i la <span class=\"cc-k\">verda</span>, la conclusió.</p>",
      "<p>Hay 3 átomos (A, B, C): 2<sup>3</sup> = 8 filas. Las columnas intermedias son las subfórmulas; la columna <span class=\"pc-k\">azul</span> es la conjunción de las premisas y la <span class=\"cc-k\">verde</span>, la conclusión.</p>",
      "<p>There are 3 atoms (A, B, C): 2<sup>3</sup> = 8 rows. The intermediate columns are the subformulas; the <span class=\"pc-k\">blue</span> column is the conjunction of the premises and the <span class=\"cc-k\">green</span> one, the conclusion.</p>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<div class=\"tw\"><table class=\"lx-tt\"><thead><tr><th>A</th><th>B</th><th>C</th><th class=\"\">B ∨ C</th><th class=\"\">A → (B ∨ C)</th><th class=\"\">¬B</th><th class=\"pc\">(A → (B ∨ C)) ∧ ¬B</th><th class=\"cc\">A → C</th><th class=\"wc\">((A → (B ∨ C)) ∧ ¬B) → (A → C)</th></tr></thead><tbody><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr></tbody></table></div>"
    },
    {
     "t": "h",
     "x": [
      "(a) Validesa",
      "(a) Validez",
      "(a) Validity"
     ]
    },
    {
     "h": [
      "<p>Totes les files on les premisses són certes tenen la conclusió certa. El raonament és <b>vàlid</b>: <span class=\"lf\">(A → (B ∨ C)) ∧ ¬B</span> ⇒ <span class=\"lf\">A → C</span>.</p>",
      "<p>Todas las filas en las que las premisas son ciertas tienen la conclusión cierta. El razonamiento es <b>válido</b>: <span class=\"lf\">(A → (B ∨ C)) ∧ ¬B</span> ⇒ <span class=\"lf\">A → C</span>.</p>",
      "<p>Every row in which the premises are true has the conclusion true. The argument is <b>valid</b>: <span class=\"lf\">(A → (B ∨ C)) ∧ ¬B</span> ⇒ <span class=\"lf\">A → C</span>.</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(b) Tipus d'enunciat",
      "(b) Tipo de enunciado",
      "(b) Type of statement"
     ]
    },
    {
     "h": [
      "<p>L'enunciat <span class=\"lf\">((A → (B ∨ C)) ∧ ¬B) → (A → C)</span> és una <b>tautologia</b> (vàlida): és certa en totes les interpretacions. Per això el raonament és vàlid: (premisses) → (conclusió) és una tautologia si i només si la conclusió és conseqüència lògica de les premisses.</p>",
      "<p>El enunciado <span class=\"lf\">((A → (B ∨ C)) ∧ ¬B) → (A → C)</span> es una <b>tautología</b> (válida): es cierta en todas las interpretaciones. Por eso el razonamiento es válido: (premisas) → (conclusión) es una tautología si y solo si la conclusión es consecuencia lógica de las premisas.</p>",
      "<p>The statement <span class=\"lf\">((A → (B ∨ C)) ∧ ¬B) → (A → C)</span> is a <b>tautology</b> (valid): it is true in every interpretation. That is why the argument is valid: (premises) → (conclusion) is a tautology if and only if the conclusion is a logical consequence of the premises.</p>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-b8",
   "unit": "u2",
   "kind": "B",
   "level": "easy",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donada la conseqüència lògica següent:",
      "Dada la consecuencia lógica siguiente:",
      "Given the following logical consequence:"
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-big\"><span class=\"lf\">(P ↔ Q) ∧ (Q → ¬R)</span> &nbsp;⇒&nbsp; <span class=\"lf\">¬(P ∧ R)</span></p>"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Construïu la taula de la veritat per comprovar si el raonament és vàlid o no. Cal assignar el valor de certesa o falsedat a les proposicions i a les connectives.</li><li>Quin tipus d'enunciat heu trobat? Justifiqueu la resposta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Construid la tabla de verdad para comprobar si el razonamiento es válido o no. Hay que asignar el valor de certeza o falsedad a las proposiciones y a las conectivas.</li><li>¿Qué tipo de enunciado habéis encontrado? Justificad la respuesta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Build the truth table to check whether the argument is valid or not. You must assign the value true or false to the propositions and to the connectives.</li><li>What type of statement have you found? Justify your answer.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Taula de veritat",
      "Tabla de verdad",
      "Truth table"
     ]
    },
    {
     "h": [
      "<p>Hi ha 3 àtoms (P, Q, R): 2<sup>3</sup> = 8 files. Les columnes intermèdies són les subfórmules; la columna <span class=\"pc-k\">blava</span> és la conjunció de les premisses i la <span class=\"cc-k\">verda</span>, la conclusió.</p>",
      "<p>Hay 3 átomos (P, Q, R): 2<sup>3</sup> = 8 filas. Las columnas intermedias son las subfórmulas; la columna <span class=\"pc-k\">azul</span> es la conjunción de las premisas y la <span class=\"cc-k\">verde</span>, la conclusión.</p>",
      "<p>There are 3 atoms (P, Q, R): 2<sup>3</sup> = 8 rows. The intermediate columns are the subformulas; the <span class=\"pc-k\">blue</span> column is the conjunction of the premises and the <span class=\"cc-k\">green</span> one, the conclusion.</p>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<div class=\"tw\"><table class=\"lx-tt\"><thead><tr><th>P</th><th>Q</th><th>R</th><th class=\"\">P ↔ Q</th><th class=\"\">¬R</th><th class=\"\">Q → ¬R</th><th class=\"pc\">(P ↔ Q) ∧ (Q → ¬R)</th><th class=\"\">P ∧ R</th><th class=\"cc\">¬(P ∧ R)</th><th class=\"wc\">((P ↔ Q) ∧ (Q → ¬R)) → ¬(P ∧ R)</th></tr></thead><tbody><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr></tbody></table></div>"
    },
    {
     "t": "h",
     "x": [
      "(a) Validesa",
      "(a) Validez",
      "(a) Validity"
     ]
    },
    {
     "h": [
      "<p>Totes les files on les premisses són certes tenen la conclusió certa. El raonament és <b>vàlid</b>: <span class=\"lf\">(P ↔ Q) ∧ (Q → ¬R)</span> ⇒ <span class=\"lf\">¬(P ∧ R)</span>.</p>",
      "<p>Todas las filas en las que las premisas son ciertas tienen la conclusión cierta. El razonamiento es <b>válido</b>: <span class=\"lf\">(P ↔ Q) ∧ (Q → ¬R)</span> ⇒ <span class=\"lf\">¬(P ∧ R)</span>.</p>",
      "<p>Every row in which the premises are true has the conclusion true. The argument is <b>valid</b>: <span class=\"lf\">(P ↔ Q) ∧ (Q → ¬R)</span> ⇒ <span class=\"lf\">¬(P ∧ R)</span>.</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(b) Tipus d'enunciat",
      "(b) Tipo de enunciado",
      "(b) Type of statement"
     ]
    },
    {
     "h": [
      "<p>L'enunciat <span class=\"lf\">((P ↔ Q) ∧ (Q → ¬R)) → ¬(P ∧ R)</span> és una <b>tautologia</b> (vàlida): és certa en totes les interpretacions. Per això el raonament és vàlid: (premisses) → (conclusió) és una tautologia si i només si la conclusió és conseqüència lògica de les premisses.</p>",
      "<p>El enunciado <span class=\"lf\">((P ↔ Q) ∧ (Q → ¬R)) → ¬(P ∧ R)</span> es una <b>tautología</b> (válida): es cierta en todas las interpretaciones. Por eso el razonamiento es válido: (premisas) → (conclusión) es una tautología si y solo si la conclusión es consecuencia lógica de las premisas.</p>",
      "<p>The statement <span class=\"lf\">((P ↔ Q) ∧ (Q → ¬R)) → ¬(P ∧ R)</span> is a <b>tautology</b> (valid): it is true in every interpretation. That is why the argument is valid: (premises) → (conclusion) is a tautology if and only if the conclusion is a logical consequence of the premises.</p>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-b9",
   "unit": "u2",
   "kind": "B",
   "level": "easy",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donada la conseqüència lògica següent:",
      "Dada la consecuencia lógica siguiente:",
      "Given the following logical consequence:"
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-big\"><span class=\"lf\">(A → B) ∧ (B → ¬A)</span> &nbsp;⇒&nbsp; <span class=\"lf\">A</span></p>"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Construïu la taula de la veritat per comprovar si el raonament és vàlid o no. Cal assignar el valor de certesa o falsedat a les proposicions i a les connectives.</li><li>Quin tipus d'enunciat heu trobat? Justifiqueu la resposta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Construid la tabla de verdad para comprobar si el razonamiento es válido o no. Hay que asignar el valor de certeza o falsedad a las proposiciones y a las conectivas.</li><li>¿Qué tipo de enunciado habéis encontrado? Justificad la respuesta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Build the truth table to check whether the argument is valid or not. You must assign the value true or false to the propositions and to the connectives.</li><li>What type of statement have you found? Justify your answer.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Taula de veritat",
      "Tabla de verdad",
      "Truth table"
     ]
    },
    {
     "h": [
      "<p>Hi ha 2 àtoms (A, B): 2<sup>2</sup> = 4 files. Les columnes intermèdies són les subfórmules; la columna <span class=\"pc-k\">blava</span> és la conjunció de les premisses i la <span class=\"cc-k\">verda</span>, la conclusió.</p>",
      "<p>Hay 2 átomos (A, B): 2<sup>2</sup> = 4 filas. Las columnas intermedias son las subfórmulas; la columna <span class=\"pc-k\">azul</span> es la conjunción de las premisas y la <span class=\"cc-k\">verde</span>, la conclusión.</p>",
      "<p>There are 2 atoms (A, B): 2<sup>2</sup> = 4 rows. The intermediate columns are the subformulas; the <span class=\"pc-k\">blue</span> column is the conjunction of the premises and the <span class=\"cc-k\">green</span> one, the conclusion.</p>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<div class=\"tw\"><table class=\"lx-tt\"><thead><tr><th>A</th><th>B</th><th class=\"\">A → B</th><th class=\"\">¬A</th><th class=\"\">B → ¬A</th><th class=\"pc\">(A → B) ∧ (B → ¬A)</th><th class=\"wc\">((A → B) ∧ (B → ¬A)) → A</th></tr></thead><tbody><tr class=\"bad\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv f\">F</span></td></tr><tr class=\"bad\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv f\">F</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr></tbody></table></div>"
    },
    {
     "t": "h",
     "x": [
      "(a) Validesa",
      "(a) Validez",
      "(a) Validity"
     ]
    },
    {
     "t": "p",
     "x": [
      "Contraexemples: A = F, B = F; A = F, B = T. Les premisses són certes i la conclusió falsa: El raonament **no és vàlid**.",
      "Contraejemplos: A = F, B = F; A = F, B = T. Las premisas son ciertas y la conclusión falsa: El razonamiento **no es válido**.",
      "Counterexamples: A = F, B = F; A = F, B = T. The premises are true and the conclusion false: the argument **is not valid**."
     ]
    },
    {
     "t": "h",
     "x": [
      "(b) Tipus d'enunciat",
      "(b) Tipo de enunciado",
      "(b) Type of statement"
     ]
    },
    {
     "h": [
      "<p>L'enunciat <span class=\"lf\">((A → B) ∧ (B → ¬A)) → A</span> és <b>satisfactible però no vàlida</b> (contingent): hi ha files certes i files falses. Com que no és una tautologia, la conclusió no és conseqüència lògica de les premisses.</p>",
      "<p>El enunciado <span class=\"lf\">((A → B) ∧ (B → ¬A)) → A</span> es <b>satisfacible pero no válida</b> (contingente): hay filas ciertas y filas falsas. Como no es una tautología, la conclusión no es consecuencia lógica de las premisas.</p>",
      "<p>The statement <span class=\"lf\">((A → B) ∧ (B → ¬A)) → A</span> is <b>satisfiable but not valid</b> (contingent): there are true rows and false rows. Since it is not a tautology, the conclusion is not a logical consequence of the premises.</p>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-b10",
   "unit": "u2",
   "kind": "B",
   "level": "easy",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donada la conseqüència lògica següent:",
      "Dada la consecuencia lógica siguiente:",
      "Given the following logical consequence:"
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-big\"><span class=\"lf\">(P ∨ Q) ∧ ¬(P ∧ Q)</span> &nbsp;⇒&nbsp; <span class=\"lf\">P ↔ ¬Q</span></p>"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Construïu la taula de la veritat per comprovar si el raonament és vàlid o no. Cal assignar el valor de certesa o falsedat a les proposicions i a les connectives.</li><li>Quin tipus d'enunciat heu trobat? Justifiqueu la resposta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Construid la tabla de verdad para comprobar si el razonamiento es válido o no. Hay que asignar el valor de certeza o falsedad a las proposiciones y a las conectivas.</li><li>¿Qué tipo de enunciado habéis encontrado? Justificad la respuesta.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Build the truth table to check whether the argument is valid or not. You must assign the value true or false to the propositions and to the connectives.</li><li>What type of statement have you found? Justify your answer.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Taula de veritat",
      "Tabla de verdad",
      "Truth table"
     ]
    },
    {
     "h": [
      "<p>Hi ha 2 àtoms (P, Q): 2<sup>2</sup> = 4 files. Les columnes intermèdies són les subfórmules; la columna <span class=\"pc-k\">blava</span> és la conjunció de les premisses i la <span class=\"cc-k\">verda</span>, la conclusió.</p>",
      "<p>Hay 2 átomos (P, Q): 2<sup>2</sup> = 4 filas. Las columnas intermedias son las subfórmulas; la columna <span class=\"pc-k\">azul</span> es la conjunción de las premisas y la <span class=\"cc-k\">verde</span>, la conclusión.</p>",
      "<p>There are 2 atoms (P, Q): 2<sup>2</sup> = 4 rows. The intermediate columns are the subformulas; the <span class=\"pc-k\">blue</span> column is the conjunction of the premises and the <span class=\"cc-k\">green</span> one, the conclusion.</p>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<div class=\"tw\"><table class=\"lx-tt\"><thead><tr><th>P</th><th>Q</th><th class=\"\">P ∨ Q</th><th class=\"\">P ∧ Q</th><th class=\"\">¬(P ∧ Q)</th><th class=\"pc\">(P ∨ Q) ∧ ¬(P ∧ Q)</th><th class=\"\">¬Q</th><th class=\"cc\">P ↔ ¬Q</th><th class=\"wc\">((P ∨ Q) ∧ ¬(P ∧ Q)) → (P ↔ ¬Q)</th></tr></thead><tbody><tr class=\"\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv f\">F</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"ok\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"pc\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"cc\"><span class=\"tv t\">T</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr><tr class=\"\"><td><span class=\"tv t\">T</span></td><td><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv t\">T</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"pc\"><span class=\"tv f\">F</span></td><td class=\"\"><span class=\"tv f\">F</span></td><td class=\"cc\"><span class=\"tv f\">F</span></td><td class=\"wc\"><span class=\"tv t\">T</span></td></tr></tbody></table></div>"
    },
    {
     "t": "h",
     "x": [
      "(a) Validesa",
      "(a) Validez",
      "(a) Validity"
     ]
    },
    {
     "h": [
      "<p>Totes les files on les premisses són certes tenen la conclusió certa. El raonament és <b>vàlid</b>: <span class=\"lf\">(P ∨ Q) ∧ ¬(P ∧ Q)</span> ⇒ <span class=\"lf\">P ↔ ¬Q</span>.</p>",
      "<p>Todas las filas en las que las premisas son ciertas tienen la conclusión cierta. El razonamiento es <b>válido</b>: <span class=\"lf\">(P ∨ Q) ∧ ¬(P ∧ Q)</span> ⇒ <span class=\"lf\">P ↔ ¬Q</span>.</p>",
      "<p>Every row in which the premises are true has the conclusion true. The argument is <b>valid</b>: <span class=\"lf\">(P ∨ Q) ∧ ¬(P ∧ Q)</span> ⇒ <span class=\"lf\">P ↔ ¬Q</span>.</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(b) Tipus d'enunciat",
      "(b) Tipo de enunciado",
      "(b) Type of statement"
     ]
    },
    {
     "h": [
      "<p>L'enunciat <span class=\"lf\">((P ∨ Q) ∧ ¬(P ∧ Q)) → (P ↔ ¬Q)</span> és una <b>tautologia</b> (vàlida): és certa en totes les interpretacions. Per això el raonament és vàlid: (premisses) → (conclusió) és una tautologia si i només si la conclusió és conseqüència lògica de les premisses.</p>",
      "<p>El enunciado <span class=\"lf\">((P ∨ Q) ∧ ¬(P ∧ Q)) → (P ↔ ¬Q)</span> es una <b>tautología</b> (válida): es cierta en todas las interpretaciones. Por eso el razonamiento es válido: (premisas) → (conclusión) es una tautología si y solo si la conclusión es consecuencia lógica de las premisas.</p>",
      "<p>The statement <span class=\"lf\">((P ∨ Q) ∧ ¬(P ∧ Q)) → (P ↔ ¬Q)</span> is a <b>tautology</b> (valid): it is true in every interpretation. That is why the argument is valid: (premises) → (conclusion) is a tautology if and only if the conclusion is a logical consequence of the premises.</p>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-r1",
   "unit": "u3",
   "kind": "R",
   "level": "exam",
   "type": "open",
   "src": "exam",
   "srcName": [
    "CP1 2025-26 · Exercici 1",
    "CP1 2025-26 · Ejercicio 1",
    "Test 1 2025-26 · Exercise 1"
   ],
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donades les següents proposicions o enunciats (CP0):",
      "Dadas las siguientes proposiciones o enunciados (CP0):",
      "Given the following propositions or statements (CP0):"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(¬S ∨ ¬R) → P</span> <i>(premissa)</i></li><li><span class=\"lf\">(P → Q) ∧ (¬S → ¬P)</span> <i>(premissa)</i></li><li><span class=\"lf\">(P ∧ S) → ¬R</span> <i>(premissa)</i></li><li><span class=\"lf\">S</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(¬S ∨ ¬R) → P</span> <i>(premisa)</i></li><li><span class=\"lf\">(P → Q) ∧ (¬S → ¬P)</span> <i>(premisa)</i></li><li><span class=\"lf\">(P ∧ S) → ¬R</span> <i>(premisa)</i></li><li><span class=\"lf\">S</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(¬S ∨ ¬R) → P</span> <i>(premise)</i></li><li><span class=\"lf\">(P → Q) ∧ (¬S → ¬P)</span> <i>(premise)</i></li><li><span class=\"lf\">(P ∧ S) → ¬R</span> <i>(premise)</i></li><li><span class=\"lf\">S</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Demostreu mitjançant el mètode de resolució que el raonament és correcte. Detalleu els passos seguits en la prova per resolució.</li><li>Doneu un altre mètode alternatiu a l'(a) per a validar el raonament. Detalleu les regles d'inferència que heu emprat.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Demostrad mediante el método de resolución que el razonamiento es correcto. Detallad los pasos seguidos en la prueba por resolución.</li><li>Dad otro método alternativo al (a) para validar el razonamiento. Detallad las reglas de inferencia que habéis empleado.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Prove by the resolution method that the argument is correct. Detail the steps followed in the resolution proof.</li><li>Give another method, different from (a), to validate the argument. Detail the inference rules you have used.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Neguem la conclusió",
      "(a) Negamos la conclusión",
      "(a) We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Per refutació: afegim la negació de la conclusió, <span class=\"lf\">¬S</span>, i busquem la clàusula buida.</p>",
      "<p>Por refutación: añadimos la negación de la conclusión, <span class=\"lf\">¬S</span>, y buscamos la cláusula vacía.</p>",
      "<p>By refutation: we add the negation of the conclusion, <span class=\"lf\">¬S</span>, and look for the empty clause.</p>"
     ],
     "t": "html"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Forma clausal de les premisses i de la conclusió negada",
      "(a) Forma clausal de las premisas y de la conclusión negada",
      "(a) Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Redueix ¬</th><th>FNC</th><th>Clàusules</th></tr></thead><tbody><tr><td><span class=\"lf\">(¬S ∨ ¬R) → P</span></td><td><span class=\"lf\">¬(¬S ∨ ¬R) ∨ P</span></td><td><span class=\"lf\">(S ∧ R) ∨ P</span></td><td><span class=\"lf\">(S ∨ P) ∧ (R ∨ P)</span></td><td>C1 = <span class=\"lf\">{S, P}</span>, C2 = <span class=\"lf\">{R, P}</span></td></tr><tr><td><span class=\"lf\">(P → Q) ∧ (¬S → ¬P)</span></td><td><span class=\"lf\">(¬P ∨ Q) ∧ (¬¬S ∨ ¬P)</span></td><td><span class=\"lf\">(¬P ∨ Q) ∧ (S ∨ ¬P)</span></td><td>—</td><td>C3 = <span class=\"lf\">{¬P, Q}</span>, C4 = <span class=\"lf\">{S, ¬P}</span></td></tr><tr><td><span class=\"lf\">(P ∧ S) → ¬R</span></td><td><span class=\"lf\">¬(P ∧ S) ∨ ¬R</span></td><td><span class=\"lf\">¬P ∨ ¬S ∨ ¬R</span></td><td>—</td><td>C5 = <span class=\"lf\">{¬P, ¬S, ¬R}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬S</span></td><td>—</td><td>—</td><td>—</td><td>C6 = <span class=\"lf\">{¬S}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Cláusulas</th></tr></thead><tbody><tr><td><span class=\"lf\">(¬S ∨ ¬R) → P</span></td><td><span class=\"lf\">¬(¬S ∨ ¬R) ∨ P</span></td><td><span class=\"lf\">(S ∧ R) ∨ P</span></td><td><span class=\"lf\">(S ∨ P) ∧ (R ∨ P)</span></td><td>C1 = <span class=\"lf\">{S, P}</span>, C2 = <span class=\"lf\">{R, P}</span></td></tr><tr><td><span class=\"lf\">(P → Q) ∧ (¬S → ¬P)</span></td><td><span class=\"lf\">(¬P ∨ Q) ∧ (¬¬S ∨ ¬P)</span></td><td><span class=\"lf\">(¬P ∨ Q) ∧ (S ∨ ¬P)</span></td><td>—</td><td>C3 = <span class=\"lf\">{¬P, Q}</span>, C4 = <span class=\"lf\">{S, ¬P}</span></td></tr><tr><td><span class=\"lf\">(P ∧ S) → ¬R</span></td><td><span class=\"lf\">¬(P ∧ S) ∨ ¬R</span></td><td><span class=\"lf\">¬P ∨ ¬S ∨ ¬R</span></td><td>—</td><td>C5 = <span class=\"lf\">{¬P, ¬S, ¬R}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬S</span></td><td>—</td><td>—</td><td>—</td><td>C6 = <span class=\"lf\">{¬S}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Clauses</th></tr></thead><tbody><tr><td><span class=\"lf\">(¬S ∨ ¬R) → P</span></td><td><span class=\"lf\">¬(¬S ∨ ¬R) ∨ P</span></td><td><span class=\"lf\">(S ∧ R) ∨ P</span></td><td><span class=\"lf\">(S ∨ P) ∧ (R ∨ P)</span></td><td>C1 = <span class=\"lf\">{S, P}</span>, C2 = <span class=\"lf\">{R, P}</span></td></tr><tr><td><span class=\"lf\">(P → Q) ∧ (¬S → ¬P)</span></td><td><span class=\"lf\">(¬P ∨ Q) ∧ (¬¬S ∨ ¬P)</span></td><td><span class=\"lf\">(¬P ∨ Q) ∧ (S ∨ ¬P)</span></td><td>—</td><td>C3 = <span class=\"lf\">{¬P, Q}</span>, C4 = <span class=\"lf\">{S, ¬P}</span></td></tr><tr><td><span class=\"lf\">(P ∧ S) → ¬R</span></td><td><span class=\"lf\">¬(P ∧ S) ∨ ¬R</span></td><td><span class=\"lf\">¬P ∨ ¬S ∨ ¬R</span></td><td>—</td><td>C5 = <span class=\"lf\">{¬P, ¬S, ¬R}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬S</span></td><td>—</td><td>—</td><td>—</td><td>C6 = <span class=\"lf\">{¬S}</span></td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {S, P} , {R, P} , {¬P, Q} , {S, ¬P} , {¬P, ¬S, ¬R} , {¬S} }</span></p>"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Refutació per resolució",
      "(a) Refutación por resolución",
      "(a) Refutation by resolution"
     ]
    },
    {
     "t": "p",
     "x": [
      "Resolució lineal començant per la clàusula de la conclusió negada:",
      "Resolución lineal empezando por la cláusula de la conclusión negada:",
      "Linear resolution starting with the clause of the negated conclusion:"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C6, C1) = {P}</span></li><li><span class=\"lf\">R2 = res(R1, C4) = {S}</span></li><li><span class=\"lf\">R3 = res(R2, C6) = □</span></li></ol>"
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 294 256\" width=\"294\" height=\"256\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"14\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{S, P}</text><text class=\"lx-lb\" x=\"246.8\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{S, ¬P}</text><text class=\"lx-lb\" x=\"250.7\" y=\"90\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{S}</text><text class=\"lx-lb\" x=\"43.9\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"180.3\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"239.2\" y=\"148\" text-anchor=\"start\">C6</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
      "<svg viewBox=\"0 0 294 256\" width=\"294\" height=\"256\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"14\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{S, P}</text><text class=\"lx-lb\" x=\"246.8\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{S, ¬P}</text><text class=\"lx-lb\" x=\"250.7\" y=\"90\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{S}</text><text class=\"lx-lb\" x=\"43.9\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"180.3\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"239.2\" y=\"148\" text-anchor=\"start\">C6</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
      "<svg viewBox=\"0 0 294 256\" width=\"294\" height=\"256\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"14\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{S, P}</text><text class=\"lx-lb\" x=\"246.8\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{S, ¬P}</text><text class=\"lx-lb\" x=\"250.7\" y=\"90\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{S}</text><text class=\"lx-lb\" x=\"43.9\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"180.3\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"239.2\" y=\"148\" text-anchor=\"start\">C6</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"206\" text-anchor=\"end\">R3</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    },
    {
     "part": "b",
     "t": "h",
     "x": [
      "(b) Mètode alternatiu: deducció amb regles d'inferència",
      "(b) Método alternativo: deducción con reglas de inferencia",
      "(b) Alternative method: deduction with inference rules"
     ]
    },
    {
     "t": "p",
     "x": [
      "Partim de les premisses (línies 1 a 3) i apliquem regles d'inferència i equivalències del formulari fins a obtenir la conclusió:",
      "Partimos de las premisas (líneas 1 a 3) y aplicamos reglas de inferencia y equivalencias del formulario hasta obtener la conclusión:",
      "We start from the premises (lines 1 to 3) and apply inference rules and equivalences from the formula sheet until we obtain the conclusion:"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línia</th><th>fbf</th><th>Justificació</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(¬S ∨ ¬R) → P</span></td><td>premissa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">(P → Q) ∧ (¬S → ¬P)</span></td><td>premissa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">(P ∧ S) → ¬R</span></td><td>premissa</td></tr><tr><td>4</td><td><span class=\"lf\">(¬S → P) ∧ (¬R → P)</span></td><td>(A→C) ∧ (B→C) ⇔ (A∨B)→C (1)</td></tr><tr><td>5</td><td><span class=\"lf\">¬S → P</span></td><td>simplificació (4)</td></tr><tr><td>6</td><td><span class=\"lf\">¬S → ¬P</span></td><td>simplificació (2)</td></tr><tr><td>7</td><td><span class=\"lf\">P → S</span></td><td>contrapositiva (6)</td></tr><tr><td>8</td><td><span class=\"lf\">¬S → S</span></td><td>sil·logisme hipotètic (5, 7)</td></tr><tr><td>9</td><td><span class=\"lf\">¬¬S ∨ S</span></td><td>implicació (8)</td></tr><tr><td>10</td><td><span class=\"lf\">S ∨ S</span></td><td>doble negació (9)</td></tr><tr><td>11</td><td><span class=\"lf\">S</span></td><td>idempotència (10)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línea</th><th>fbf</th><th>Justificación</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(¬S ∨ ¬R) → P</span></td><td>premisa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">(P → Q) ∧ (¬S → ¬P)</span></td><td>premisa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">(P ∧ S) → ¬R</span></td><td>premisa</td></tr><tr><td>4</td><td><span class=\"lf\">(¬S → P) ∧ (¬R → P)</span></td><td>(A→C) ∧ (B→C) ⇔ (A∨B)→C (1)</td></tr><tr><td>5</td><td><span class=\"lf\">¬S → P</span></td><td>simplificación (4)</td></tr><tr><td>6</td><td><span class=\"lf\">¬S → ¬P</span></td><td>simplificación (2)</td></tr><tr><td>7</td><td><span class=\"lf\">P → S</span></td><td>contrapositiva (6)</td></tr><tr><td>8</td><td><span class=\"lf\">¬S → S</span></td><td>silogismo hipotético (5, 7)</td></tr><tr><td>9</td><td><span class=\"lf\">¬¬S ∨ S</span></td><td>implicación (8)</td></tr><tr><td>10</td><td><span class=\"lf\">S ∨ S</span></td><td>doble negación (9)</td></tr><tr><td>11</td><td><span class=\"lf\">S</span></td><td>idempotencia (10)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Line</th><th>fbf</th><th>Justification</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(¬S ∨ ¬R) → P</span></td><td>premise</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">(P → Q) ∧ (¬S → ¬P)</span></td><td>premise</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">(P ∧ S) → ¬R</span></td><td>premise</td></tr><tr><td>4</td><td><span class=\"lf\">(¬S → P) ∧ (¬R → P)</span></td><td>(A→C) ∧ (B→C) ⇔ (A∨B)→C (1)</td></tr><tr><td>5</td><td><span class=\"lf\">¬S → P</span></td><td>simplification (4)</td></tr><tr><td>6</td><td><span class=\"lf\">¬S → ¬P</span></td><td>simplification (2)</td></tr><tr><td>7</td><td><span class=\"lf\">P → S</span></td><td>contrapositiva (6)</td></tr><tr><td>8</td><td><span class=\"lf\">¬S → S</span></td><td>hypothetical syllogism (5, 7)</td></tr><tr><td>9</td><td><span class=\"lf\">¬¬S ∨ S</span></td><td>implication (8)</td></tr><tr><td>10</td><td><span class=\"lf\">S ∨ S</span></td><td>double negation (9)</td></tr><tr><td>11</td><td><span class=\"lf\">S</span></td><td>idempotence (10)</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "note",
     "x": [
      "La premissa 3 no fa falta: S ja es dedueix de les dues primeres.",
      "La premisa 3 no hace falta: S ya se deduce de las dos primeras.",
      "Premise 3 is not needed: S already follows from the first two."
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-r2",
   "unit": "u3",
   "kind": "R",
   "level": "exam",
   "type": "open",
   "src": "exam",
   "srcName": [
    "CP2 2025-26 · Exercici 1",
    "CP2 2025-26 · Ejercicio 1",
    "Test 2 2025-26 · Exercise 1"
   ],
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donades les següents proposicions o enunciats (CP0):",
      "Dadas las siguientes proposiciones o enunciados (CP0):",
      "Given the following propositions or statements (CP0):"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">P → (Q ∧ S)</span> <i>(premissa)</i></li><li><span class=\"lf\">(P ∧ S) → R</span> <i>(premissa)</i></li><li><span class=\"lf\">(S → ¬R) → (P ∧ Q)</span> <i>(premissa)</i></li><li><span class=\"lf\">S ∧ R</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">P → (Q ∧ S)</span> <i>(premisa)</i></li><li><span class=\"lf\">(P ∧ S) → R</span> <i>(premisa)</i></li><li><span class=\"lf\">(S → ¬R) → (P ∧ Q)</span> <i>(premisa)</i></li><li><span class=\"lf\">S ∧ R</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">P → (Q ∧ S)</span> <i>(premise)</i></li><li><span class=\"lf\">(P ∧ S) → R</span> <i>(premise)</i></li><li><span class=\"lf\">(S → ¬R) → (P ∧ Q)</span> <i>(premise)</i></li><li><span class=\"lf\">S ∧ R</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Demostreu mitjançant el mètode de resolució que el raonament és correcte. Detalleu els passos seguits en la prova per resolució.</li><li>Doneu un altre mètode alternatiu a l'(a) per a validar el raonament. Detalleu les regles d'inferència que heu emprat.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Demostrad mediante el método de resolución que el razonamiento es correcto. Detallad los pasos seguidos en la prueba por resolución.</li><li>Dad otro método alternativo al (a) para validar el razonamiento. Detallad las reglas de inferencia que habéis empleado.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Prove by the resolution method that the argument is correct. Detail the steps followed in the resolution proof.</li><li>Give another method, different from (a), to validate the argument. Detail the inference rules you have used.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Neguem la conclusió",
      "(a) Negamos la conclusión",
      "(a) We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Per refutació: afegim la negació de la conclusió, <span class=\"lf\">¬(S ∧ R)</span>, i busquem la clàusula buida.</p>",
      "<p>Por refutación: añadimos la negación de la conclusión, <span class=\"lf\">¬(S ∧ R)</span>, y buscamos la cláusula vacía.</p>",
      "<p>By refutation: we add the negation of the conclusion, <span class=\"lf\">¬(S ∧ R)</span>, and look for the empty clause.</p>"
     ],
     "t": "html"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Forma clausal de les premisses i de la conclusió negada",
      "(a) Forma clausal de las premisas y de la conclusión negada",
      "(a) Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Redueix ¬</th><th>FNC</th><th>Clàusules</th></tr></thead><tbody><tr><td><span class=\"lf\">P → (Q ∧ S)</span></td><td><span class=\"lf\">¬P ∨ (Q ∧ S)</span></td><td>—</td><td><span class=\"lf\">(¬P ∨ Q) ∧ (¬P ∨ S)</span></td><td>C1 = <span class=\"lf\">{¬P, Q}</span>, C2 = <span class=\"lf\">{¬P, S}</span></td></tr><tr><td><span class=\"lf\">(P ∧ S) → R</span></td><td><span class=\"lf\">¬(P ∧ S) ∨ R</span></td><td><span class=\"lf\">¬P ∨ ¬S ∨ R</span></td><td>—</td><td>C3 = <span class=\"lf\">{¬P, ¬S, R}</span></td></tr><tr><td><span class=\"lf\">(S → ¬R) → (P ∧ Q)</span></td><td><span class=\"lf\">¬(¬S ∨ ¬R) ∨ (P ∧ Q)</span></td><td><span class=\"lf\">(S ∧ R) ∨ (P ∧ Q)</span></td><td><span class=\"lf\">(S ∨ P) ∧ (S ∨ Q) ∧ (R ∨ P) ∧ (R ∨ Q)</span></td><td>C4 = <span class=\"lf\">{S, P}</span>, C5 = <span class=\"lf\">{S, Q}</span>, C6 = <span class=\"lf\">{R, P}</span>, C7 = <span class=\"lf\">{R, Q}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬(S ∧ R)</span></td><td>—</td><td><span class=\"lf\">¬S ∨ ¬R</span></td><td>—</td><td>C8 = <span class=\"lf\">{¬S, ¬R}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Cláusulas</th></tr></thead><tbody><tr><td><span class=\"lf\">P → (Q ∧ S)</span></td><td><span class=\"lf\">¬P ∨ (Q ∧ S)</span></td><td>—</td><td><span class=\"lf\">(¬P ∨ Q) ∧ (¬P ∨ S)</span></td><td>C1 = <span class=\"lf\">{¬P, Q}</span>, C2 = <span class=\"lf\">{¬P, S}</span></td></tr><tr><td><span class=\"lf\">(P ∧ S) → R</span></td><td><span class=\"lf\">¬(P ∧ S) ∨ R</span></td><td><span class=\"lf\">¬P ∨ ¬S ∨ R</span></td><td>—</td><td>C3 = <span class=\"lf\">{¬P, ¬S, R}</span></td></tr><tr><td><span class=\"lf\">(S → ¬R) → (P ∧ Q)</span></td><td><span class=\"lf\">¬(¬S ∨ ¬R) ∨ (P ∧ Q)</span></td><td><span class=\"lf\">(S ∧ R) ∨ (P ∧ Q)</span></td><td><span class=\"lf\">(S ∨ P) ∧ (S ∨ Q) ∧ (R ∨ P) ∧ (R ∨ Q)</span></td><td>C4 = <span class=\"lf\">{S, P}</span>, C5 = <span class=\"lf\">{S, Q}</span>, C6 = <span class=\"lf\">{R, P}</span>, C7 = <span class=\"lf\">{R, Q}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬(S ∧ R)</span></td><td>—</td><td><span class=\"lf\">¬S ∨ ¬R</span></td><td>—</td><td>C8 = <span class=\"lf\">{¬S, ¬R}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Clauses</th></tr></thead><tbody><tr><td><span class=\"lf\">P → (Q ∧ S)</span></td><td><span class=\"lf\">¬P ∨ (Q ∧ S)</span></td><td>—</td><td><span class=\"lf\">(¬P ∨ Q) ∧ (¬P ∨ S)</span></td><td>C1 = <span class=\"lf\">{¬P, Q}</span>, C2 = <span class=\"lf\">{¬P, S}</span></td></tr><tr><td><span class=\"lf\">(P ∧ S) → R</span></td><td><span class=\"lf\">¬(P ∧ S) ∨ R</span></td><td><span class=\"lf\">¬P ∨ ¬S ∨ R</span></td><td>—</td><td>C3 = <span class=\"lf\">{¬P, ¬S, R}</span></td></tr><tr><td><span class=\"lf\">(S → ¬R) → (P ∧ Q)</span></td><td><span class=\"lf\">¬(¬S ∨ ¬R) ∨ (P ∧ Q)</span></td><td><span class=\"lf\">(S ∧ R) ∨ (P ∧ Q)</span></td><td><span class=\"lf\">(S ∨ P) ∧ (S ∨ Q) ∧ (R ∨ P) ∧ (R ∨ Q)</span></td><td>C4 = <span class=\"lf\">{S, P}</span>, C5 = <span class=\"lf\">{S, Q}</span>, C6 = <span class=\"lf\">{R, P}</span>, C7 = <span class=\"lf\">{R, Q}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬(S ∧ R)</span></td><td>—</td><td><span class=\"lf\">¬S ∨ ¬R</span></td><td>—</td><td>C8 = <span class=\"lf\">{¬S, ¬R}</span></td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬P, Q} , {¬P, S} , {¬P, ¬S, R} , {S, P} , {S, Q} , {R, P} , {R, Q} , {¬S, ¬R} }</span></p>"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Refutació per resolució",
      "(a) Refutación por resolución",
      "(a) Refutation by resolution"
     ]
    },
    {
     "t": "p",
     "x": [
      "Resolució lineal començant per la clàusula de la conclusió negada:",
      "Resolución lineal empezando por la cláusula de la conclusión negada:",
      "Linear resolution starting with the clause of the negated conclusion:"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C8, C3) = {¬S, ¬P}</span></li><li><span class=\"lf\">R2 = res(R1, C2) = {¬P}</span></li><li><span class=\"lf\">R3 = res(R2, C4) = {S}</span></li><li><span class=\"lf\">R4 = res(R3, C8) = {¬R}</span></li><li><span class=\"lf\">R5 = res(R4, C6) = {P}</span></li><li><span class=\"lf\">R6 = res(R5, R2) = □</span></li></ol>"
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 356 430\" width=\"356\" height=\"430\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"32\" text-anchor=\"middle\">{¬S, ¬R}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C8</text><rect class=\"lx-bx2\" x=\"199.6\" y=\"14\" width=\"106.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"32\" text-anchor=\"middle\">{¬P, ¬S, R}</text><text class=\"lx-lb\" x=\"312.3\" y=\"32\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M87.8 42 L87.8 72\"></path><path class=\"lx-ln\" d=\"M252.9 42 L97.8 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"90\" text-anchor=\"middle\">{¬S, ¬P}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"215.0\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"90\" text-anchor=\"middle\">{¬P, S}</text><text class=\"lx-lb\" x=\"296.9\" y=\"90\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M87.8 100 L87.8 130\"></path><path class=\"lx-ln\" d=\"M252.9 100 L97.8 130\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"148\" text-anchor=\"middle\">{¬P}</text><text class=\"lx-lb\" x=\"55.4\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"218.8\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"148\" text-anchor=\"middle\">{S, P}</text><text class=\"lx-lb\" x=\"293.1\" y=\"148\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M87.8 158 L87.8 188\"></path><path class=\"lx-ln\" d=\"M252.9 158 L97.8 188\"></path><rect class=\"lx-bx\" x=\"65.2\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"206\" text-anchor=\"middle\">{S}</text><text class=\"lx-lb\" x=\"59.2\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"211.1\" y=\"188\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"206\" text-anchor=\"middle\">{¬S, ¬R}</text><text class=\"lx-lb\" x=\"300.8\" y=\"206\" text-anchor=\"start\">C8</text><path class=\"lx-ln\" d=\"M87.8 216 L87.8 246\"></path><path class=\"lx-ln\" d=\"M252.9 216 L97.8 246\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"246\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"264\" text-anchor=\"middle\">{¬R}</text><text class=\"lx-lb\" x=\"55.4\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"218.8\" y=\"246\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"264\" text-anchor=\"middle\">{R, P}</text><text class=\"lx-lb\" x=\"293.1\" y=\"264\" text-anchor=\"start\">C6</text><path class=\"lx-ln\" d=\"M87.8 274 L87.8 304\"></path><path class=\"lx-ln\" d=\"M252.9 274 L97.8 304\"></path><rect class=\"lx-bx\" x=\"65.2\" y=\"304\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"322\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"59.2\" y=\"322\" text-anchor=\"end\">R5</text><rect class=\"lx-bx2\" x=\"226.5\" y=\"304\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"322\" text-anchor=\"middle\">{¬P}</text><text class=\"lx-lb\" x=\"285.3\" y=\"322\" text-anchor=\"start\">R2</text><path class=\"lx-ln\" d=\"M87.8 332 L87.8 362\"></path><path class=\"lx-ln\" d=\"M252.9 332 L97.8 362\"></path><rect class=\"lx-bx-e\" x=\"73.0\" y=\"362\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"380\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"67.0\" y=\"380\" text-anchor=\"end\">R6</text></svg>",
      "<svg viewBox=\"0 0 356 430\" width=\"356\" height=\"430\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"32\" text-anchor=\"middle\">{¬S, ¬R}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C8</text><rect class=\"lx-bx2\" x=\"199.6\" y=\"14\" width=\"106.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"32\" text-anchor=\"middle\">{¬P, ¬S, R}</text><text class=\"lx-lb\" x=\"312.3\" y=\"32\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M87.8 42 L87.8 72\"></path><path class=\"lx-ln\" d=\"M252.9 42 L97.8 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"90\" text-anchor=\"middle\">{¬S, ¬P}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"215.0\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"90\" text-anchor=\"middle\">{¬P, S}</text><text class=\"lx-lb\" x=\"296.9\" y=\"90\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M87.8 100 L87.8 130\"></path><path class=\"lx-ln\" d=\"M252.9 100 L97.8 130\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"148\" text-anchor=\"middle\">{¬P}</text><text class=\"lx-lb\" x=\"55.4\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"218.8\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"148\" text-anchor=\"middle\">{S, P}</text><text class=\"lx-lb\" x=\"293.1\" y=\"148\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M87.8 158 L87.8 188\"></path><path class=\"lx-ln\" d=\"M252.9 158 L97.8 188\"></path><rect class=\"lx-bx\" x=\"65.2\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"206\" text-anchor=\"middle\">{S}</text><text class=\"lx-lb\" x=\"59.2\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"211.1\" y=\"188\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"206\" text-anchor=\"middle\">{¬S, ¬R}</text><text class=\"lx-lb\" x=\"300.8\" y=\"206\" text-anchor=\"start\">C8</text><path class=\"lx-ln\" d=\"M87.8 216 L87.8 246\"></path><path class=\"lx-ln\" d=\"M252.9 216 L97.8 246\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"246\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"264\" text-anchor=\"middle\">{¬R}</text><text class=\"lx-lb\" x=\"55.4\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"218.8\" y=\"246\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"264\" text-anchor=\"middle\">{R, P}</text><text class=\"lx-lb\" x=\"293.1\" y=\"264\" text-anchor=\"start\">C6</text><path class=\"lx-ln\" d=\"M87.8 274 L87.8 304\"></path><path class=\"lx-ln\" d=\"M252.9 274 L97.8 304\"></path><rect class=\"lx-bx\" x=\"65.2\" y=\"304\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"322\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"59.2\" y=\"322\" text-anchor=\"end\">R5</text><rect class=\"lx-bx2\" x=\"226.5\" y=\"304\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"322\" text-anchor=\"middle\">{¬P}</text><text class=\"lx-lb\" x=\"285.3\" y=\"322\" text-anchor=\"start\">R2</text><path class=\"lx-ln\" d=\"M87.8 332 L87.8 362\"></path><path class=\"lx-ln\" d=\"M252.9 332 L97.8 362\"></path><rect class=\"lx-bx-e\" x=\"73.0\" y=\"362\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"380\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"67.0\" y=\"380\" text-anchor=\"end\">R6</text></svg>",
      "<svg viewBox=\"0 0 356 430\" width=\"356\" height=\"430\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"32\" text-anchor=\"middle\">{¬S, ¬R}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C8</text><rect class=\"lx-bx2\" x=\"199.6\" y=\"14\" width=\"106.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"32\" text-anchor=\"middle\">{¬P, ¬S, R}</text><text class=\"lx-lb\" x=\"312.3\" y=\"32\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M87.8 42 L87.8 72\"></path><path class=\"lx-ln\" d=\"M252.9 42 L97.8 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"90\" text-anchor=\"middle\">{¬S, ¬P}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"215.0\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"90\" text-anchor=\"middle\">{¬P, S}</text><text class=\"lx-lb\" x=\"296.9\" y=\"90\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M87.8 100 L87.8 130\"></path><path class=\"lx-ln\" d=\"M252.9 100 L97.8 130\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"148\" text-anchor=\"middle\">{¬P}</text><text class=\"lx-lb\" x=\"55.4\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"218.8\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"148\" text-anchor=\"middle\">{S, P}</text><text class=\"lx-lb\" x=\"293.1\" y=\"148\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M87.8 158 L87.8 188\"></path><path class=\"lx-ln\" d=\"M252.9 158 L97.8 188\"></path><rect class=\"lx-bx\" x=\"65.2\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"206\" text-anchor=\"middle\">{S}</text><text class=\"lx-lb\" x=\"59.2\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"211.1\" y=\"188\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"206\" text-anchor=\"middle\">{¬S, ¬R}</text><text class=\"lx-lb\" x=\"300.8\" y=\"206\" text-anchor=\"start\">C8</text><path class=\"lx-ln\" d=\"M87.8 216 L87.8 246\"></path><path class=\"lx-ln\" d=\"M252.9 216 L97.8 246\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"246\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"264\" text-anchor=\"middle\">{¬R}</text><text class=\"lx-lb\" x=\"55.4\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"218.8\" y=\"246\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"264\" text-anchor=\"middle\">{R, P}</text><text class=\"lx-lb\" x=\"293.1\" y=\"264\" text-anchor=\"start\">C6</text><path class=\"lx-ln\" d=\"M87.8 274 L87.8 304\"></path><path class=\"lx-ln\" d=\"M252.9 274 L97.8 304\"></path><rect class=\"lx-bx\" x=\"65.2\" y=\"304\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"322\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"59.2\" y=\"322\" text-anchor=\"end\">R5</text><rect class=\"lx-bx2\" x=\"226.5\" y=\"304\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"252.9\" y=\"322\" text-anchor=\"middle\">{¬P}</text><text class=\"lx-lb\" x=\"285.3\" y=\"322\" text-anchor=\"start\">R2</text><path class=\"lx-ln\" d=\"M87.8 332 L87.8 362\"></path><path class=\"lx-ln\" d=\"M252.9 332 L97.8 362\"></path><rect class=\"lx-bx-e\" x=\"73.0\" y=\"362\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"87.8\" y=\"380\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"67.0\" y=\"380\" text-anchor=\"end\">R6</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    },
    {
     "part": "b",
     "t": "h",
     "x": [
      "(b) Mètode alternatiu: deducció amb regles d'inferència",
      "(b) Método alternativo: deducción con reglas de inferencia",
      "(b) Alternative method: deduction with inference rules"
     ]
    },
    {
     "t": "p",
     "x": [
      "Partim de les premisses (línies 1 a 3) i apliquem regles d'inferència i equivalències del formulari fins a obtenir la conclusió:",
      "Partimos de las premisas (líneas 1 a 3) y aplicamos reglas de inferencia y equivalencias del formulario hasta obtener la conclusión:",
      "We start from the premises (lines 1 to 3) and apply inference rules and equivalences from the formula sheet until we obtain the conclusion:"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línia</th><th>fbf</th><th>Justificació</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">P → (Q ∧ S)</span></td><td>premissa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">(P ∧ S) → R</span></td><td>premissa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">(S → ¬R) → (P ∧ Q)</span></td><td>premissa</td></tr><tr><td>4</td><td><span class=\"lf\">¬(S → ¬R) ∨ (P ∧ Q)</span></td><td>implicació (3)</td></tr><tr><td>5</td><td><span class=\"lf\">(S ∧ R) ∨ (P ∧ Q)</span></td><td>implicació + De Morgan + doble negació (4)</td></tr><tr><td>6</td><td><span class=\"lf\">(S ∨ P) ∧ (S ∨ Q) ∧ (R ∨ P) ∧ (R ∨ Q)</span></td><td>distributiva (5)</td></tr><tr><td>7</td><td><span class=\"lf\">S ∨ P</span></td><td>simplificació (6)</td></tr><tr><td>8</td><td><span class=\"lf\">R ∨ P</span></td><td>simplificació (6)</td></tr><tr><td>9</td><td><span class=\"lf\">(P → Q) ∧ (P → S)</span></td><td>(A→B) ∧ (A→C) ⇔ A→(B∧C) (1)</td></tr><tr><td>10</td><td><span class=\"lf\">P → S</span></td><td>simplificació (9)</td></tr><tr><td>11</td><td><span class=\"lf\">¬S → P</span></td><td>implicació + doble negació (7)</td></tr><tr><td>12</td><td><span class=\"lf\">¬S → S</span></td><td>sil·logisme hipotètic (11, 10)</td></tr><tr><td>13</td><td><span class=\"lf\">S ∨ S</span></td><td>implicació + doble negació (12)</td></tr><tr><td>14</td><td><span class=\"lf\">S</span></td><td>idempotència (13)</td></tr><tr><td>15</td><td><span class=\"lf\">(S ∧ P) → R</span></td><td>commutativa (2)</td></tr><tr><td>16</td><td><span class=\"lf\">S → (P → R)</span></td><td>exportació (15)</td></tr><tr><td>17</td><td><span class=\"lf\">P → R</span></td><td>modus ponens (14, 16)</td></tr><tr><td>18</td><td><span class=\"lf\">¬R → P</span></td><td>implicació + doble negació (8)</td></tr><tr><td>19</td><td><span class=\"lf\">¬R → R</span></td><td>sil·logisme hipotètic (18, 17)</td></tr><tr><td>20</td><td><span class=\"lf\">R ∨ R</span></td><td>implicació + doble negació (19)</td></tr><tr><td>21</td><td><span class=\"lf\">R</span></td><td>idempotència (20)</td></tr><tr><td>22</td><td><span class=\"lf\">S ∧ R</span></td><td>introducció de la conjunció (14, 21)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línea</th><th>fbf</th><th>Justificación</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">P → (Q ∧ S)</span></td><td>premisa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">(P ∧ S) → R</span></td><td>premisa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">(S → ¬R) → (P ∧ Q)</span></td><td>premisa</td></tr><tr><td>4</td><td><span class=\"lf\">¬(S → ¬R) ∨ (P ∧ Q)</span></td><td>implicación (3)</td></tr><tr><td>5</td><td><span class=\"lf\">(S ∧ R) ∨ (P ∧ Q)</span></td><td>implicación + De Morgan + doble negación (4)</td></tr><tr><td>6</td><td><span class=\"lf\">(S ∨ P) ∧ (S ∨ Q) ∧ (R ∨ P) ∧ (R ∨ Q)</span></td><td>distributiva (5)</td></tr><tr><td>7</td><td><span class=\"lf\">S ∨ P</span></td><td>simplificación (6)</td></tr><tr><td>8</td><td><span class=\"lf\">R ∨ P</span></td><td>simplificación (6)</td></tr><tr><td>9</td><td><span class=\"lf\">(P → Q) ∧ (P → S)</span></td><td>(A→B) ∧ (A→C) ⇔ A→(B∧C) (1)</td></tr><tr><td>10</td><td><span class=\"lf\">P → S</span></td><td>simplificación (9)</td></tr><tr><td>11</td><td><span class=\"lf\">¬S → P</span></td><td>implicación + doble negación (7)</td></tr><tr><td>12</td><td><span class=\"lf\">¬S → S</span></td><td>silogismo hipotético (11, 10)</td></tr><tr><td>13</td><td><span class=\"lf\">S ∨ S</span></td><td>implicación + doble negación (12)</td></tr><tr><td>14</td><td><span class=\"lf\">S</span></td><td>idempotencia (13)</td></tr><tr><td>15</td><td><span class=\"lf\">(S ∧ P) → R</span></td><td>conmutativa (2)</td></tr><tr><td>16</td><td><span class=\"lf\">S → (P → R)</span></td><td>exportación (15)</td></tr><tr><td>17</td><td><span class=\"lf\">P → R</span></td><td>modus ponens (14, 16)</td></tr><tr><td>18</td><td><span class=\"lf\">¬R → P</span></td><td>implicación + doble negación (8)</td></tr><tr><td>19</td><td><span class=\"lf\">¬R → R</span></td><td>silogismo hipotético (18, 17)</td></tr><tr><td>20</td><td><span class=\"lf\">R ∨ R</span></td><td>implicación + doble negación (19)</td></tr><tr><td>21</td><td><span class=\"lf\">R</span></td><td>idempotencia (20)</td></tr><tr><td>22</td><td><span class=\"lf\">S ∧ R</span></td><td>introducción de la conjunción (14, 21)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Line</th><th>fbf</th><th>Justification</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">P → (Q ∧ S)</span></td><td>premise</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">(P ∧ S) → R</span></td><td>premise</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">(S → ¬R) → (P ∧ Q)</span></td><td>premise</td></tr><tr><td>4</td><td><span class=\"lf\">¬(S → ¬R) ∨ (P ∧ Q)</span></td><td>implication (3)</td></tr><tr><td>5</td><td><span class=\"lf\">(S ∧ R) ∨ (P ∧ Q)</span></td><td>implication + De Morgan + double negation (4)</td></tr><tr><td>6</td><td><span class=\"lf\">(S ∨ P) ∧ (S ∨ Q) ∧ (R ∨ P) ∧ (R ∨ Q)</span></td><td>distributiva (5)</td></tr><tr><td>7</td><td><span class=\"lf\">S ∨ P</span></td><td>simplification (6)</td></tr><tr><td>8</td><td><span class=\"lf\">R ∨ P</span></td><td>simplification (6)</td></tr><tr><td>9</td><td><span class=\"lf\">(P → Q) ∧ (P → S)</span></td><td>(A→B) ∧ (A→C) ⇔ A→(B∧C) (1)</td></tr><tr><td>10</td><td><span class=\"lf\">P → S</span></td><td>simplification (9)</td></tr><tr><td>11</td><td><span class=\"lf\">¬S → P</span></td><td>implication + double negation (7)</td></tr><tr><td>12</td><td><span class=\"lf\">¬S → S</span></td><td>hypothetical syllogism (11, 10)</td></tr><tr><td>13</td><td><span class=\"lf\">S ∨ S</span></td><td>implication + double negation (12)</td></tr><tr><td>14</td><td><span class=\"lf\">S</span></td><td>idempotence (13)</td></tr><tr><td>15</td><td><span class=\"lf\">(S ∧ P) → R</span></td><td>commutativity (2)</td></tr><tr><td>16</td><td><span class=\"lf\">S → (P → R)</span></td><td>exportation (15)</td></tr><tr><td>17</td><td><span class=\"lf\">P → R</span></td><td>modus ponens (14, 16)</td></tr><tr><td>18</td><td><span class=\"lf\">¬R → P</span></td><td>implication + double negation (8)</td></tr><tr><td>19</td><td><span class=\"lf\">¬R → R</span></td><td>hypothetical syllogism (18, 17)</td></tr><tr><td>20</td><td><span class=\"lf\">R ∨ R</span></td><td>implication + double negation (19)</td></tr><tr><td>21</td><td><span class=\"lf\">R</span></td><td>idempotence (20)</td></tr><tr><td>22</td><td><span class=\"lf\">S ∧ R</span></td><td>conjunction introduction (14, 21)</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "part": "b",
     "t": "h",
     "x": [
      "(b) Comprovació ràpida pel mètode de la interpretació",
      "(b) Comprobación rápida por el método de la interpretación",
      "(b) Quick check with the interpretation method"
     ]
    },
    {
     "t": "p",
     "x": [
      "Suposem premisses certes i conclusió falsa. Si S ∧ R és fals, S → ¬R és cert (o bé S és fals, o bé R és fals). Per la premissa 3, P ∧ Q és cert: P = T. Per la premissa 1, Q ∧ S és cert: S = T. Llavors R ha de ser F (la conclusió és falsa). Però la premissa 2 dona P ∧ S → R = T → F = F. Contradicció: el raonament és vàlid.",
      "Suponemos premisas ciertas y conclusión falsa. Si S ∧ R es falso, S → ¬R es cierto (o bien S es falso, o bien R es falso). Por la premisa 3, P ∧ Q es cierto: P = T. Por la premisa 1, Q ∧ S es cierto: S = T. Entonces R tiene que ser F (la conclusión es falsa). Pero la premisa 2 da P ∧ S → R = T → F = F. Contradicción: el razonamiento es válido.",
      "We assume the premises true and the conclusion false. If S ∧ R is false, S → ¬R is true (either S is false or R is false). By premise 3, P ∧ Q is true: P = T. By premise 1, Q ∧ S is true: S = T. Then R must be F (the conclusion is false). But premise 2 gives P ∧ S → R = T → F = F. Contradiction: the argument is valid."
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-r3",
   "unit": "u3",
   "kind": "R",
   "level": "exam",
   "type": "open",
   "src": "exam",
   "srcName": [
    "CP2 2024-25 · Exercici 1",
    "CP2 2024-25 · Ejercicio 1",
    "Test 2 2024-25 · Exercise 1"
   ],
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donades les següents proposicions o enunciats (CP0):",
      "Dadas las siguientes proposiciones o enunciados (CP0):",
      "Given the following propositions or statements (CP0):"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(S → ¬R) → P</span> <i>(premissa)</i></li><li><span class=\"lf\">P → (Q ∧ S)</span> <i>(premissa)</i></li><li><span class=\"lf\">(P ∧ S) → ¬R</span> <i>(premissa)</i></li><li><span class=\"lf\">S</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(S → ¬R) → P</span> <i>(premisa)</i></li><li><span class=\"lf\">P → (Q ∧ S)</span> <i>(premisa)</i></li><li><span class=\"lf\">(P ∧ S) → ¬R</span> <i>(premisa)</i></li><li><span class=\"lf\">S</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(S → ¬R) → P</span> <i>(premise)</i></li><li><span class=\"lf\">P → (Q ∧ S)</span> <i>(premise)</i></li><li><span class=\"lf\">(P ∧ S) → ¬R</span> <i>(premise)</i></li><li><span class=\"lf\">S</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Demostreu mitjançant el mètode de resolució que el raonament és correcte. Detalleu els passos seguits en la prova per resolució.</li><li>Doneu un altre mètode alternatiu a l'(a) per a validar el raonament. Detalleu les regles d'inferència que heu emprat.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Demostrad mediante el método de resolución que el razonamiento es correcto. Detallad los pasos seguidos en la prueba por resolución.</li><li>Dad otro método alternativo al (a) para validar el razonamiento. Detallad las reglas de inferencia que habéis empleado.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Prove by the resolution method that the argument is correct. Detail the steps followed in the resolution proof.</li><li>Give another method, different from (a), to validate the argument. Detail the inference rules you have used.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Neguem la conclusió",
      "(a) Negamos la conclusión",
      "(a) We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Per refutació: afegim la negació de la conclusió, <span class=\"lf\">¬S</span>, i busquem la clàusula buida.</p>",
      "<p>Por refutación: añadimos la negación de la conclusión, <span class=\"lf\">¬S</span>, y buscamos la cláusula vacía.</p>",
      "<p>By refutation: we add the negation of the conclusion, <span class=\"lf\">¬S</span>, and look for the empty clause.</p>"
     ],
     "t": "html"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Forma clausal de les premisses i de la conclusió negada",
      "(a) Forma clausal de las premisas y de la conclusión negada",
      "(a) Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Redueix ¬</th><th>FNC</th><th>Clàusules</th></tr></thead><tbody><tr><td><span class=\"lf\">(S → ¬R) → P</span></td><td><span class=\"lf\">¬(¬S ∨ ¬R) ∨ P</span></td><td><span class=\"lf\">(S ∧ R) ∨ P</span></td><td><span class=\"lf\">(S ∨ P) ∧ (R ∨ P)</span></td><td>C1 = <span class=\"lf\">{S, P}</span>, C2 = <span class=\"lf\">{R, P}</span></td></tr><tr><td><span class=\"lf\">P → (Q ∧ S)</span></td><td><span class=\"lf\">¬P ∨ (Q ∧ S)</span></td><td>—</td><td><span class=\"lf\">(¬P ∨ Q) ∧ (¬P ∨ S)</span></td><td>C3 = <span class=\"lf\">{¬P, Q}</span>, C4 = <span class=\"lf\">{¬P, S}</span></td></tr><tr><td><span class=\"lf\">(P ∧ S) → ¬R</span></td><td><span class=\"lf\">¬(P ∧ S) ∨ ¬R</span></td><td><span class=\"lf\">¬P ∨ ¬S ∨ ¬R</span></td><td>—</td><td>C5 = <span class=\"lf\">{¬P, ¬S, ¬R}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬S</span></td><td>—</td><td>—</td><td>—</td><td>C6 = <span class=\"lf\">{¬S}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Cláusulas</th></tr></thead><tbody><tr><td><span class=\"lf\">(S → ¬R) → P</span></td><td><span class=\"lf\">¬(¬S ∨ ¬R) ∨ P</span></td><td><span class=\"lf\">(S ∧ R) ∨ P</span></td><td><span class=\"lf\">(S ∨ P) ∧ (R ∨ P)</span></td><td>C1 = <span class=\"lf\">{S, P}</span>, C2 = <span class=\"lf\">{R, P}</span></td></tr><tr><td><span class=\"lf\">P → (Q ∧ S)</span></td><td><span class=\"lf\">¬P ∨ (Q ∧ S)</span></td><td>—</td><td><span class=\"lf\">(¬P ∨ Q) ∧ (¬P ∨ S)</span></td><td>C3 = <span class=\"lf\">{¬P, Q}</span>, C4 = <span class=\"lf\">{¬P, S}</span></td></tr><tr><td><span class=\"lf\">(P ∧ S) → ¬R</span></td><td><span class=\"lf\">¬(P ∧ S) ∨ ¬R</span></td><td><span class=\"lf\">¬P ∨ ¬S ∨ ¬R</span></td><td>—</td><td>C5 = <span class=\"lf\">{¬P, ¬S, ¬R}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬S</span></td><td>—</td><td>—</td><td>—</td><td>C6 = <span class=\"lf\">{¬S}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Clauses</th></tr></thead><tbody><tr><td><span class=\"lf\">(S → ¬R) → P</span></td><td><span class=\"lf\">¬(¬S ∨ ¬R) ∨ P</span></td><td><span class=\"lf\">(S ∧ R) ∨ P</span></td><td><span class=\"lf\">(S ∨ P) ∧ (R ∨ P)</span></td><td>C1 = <span class=\"lf\">{S, P}</span>, C2 = <span class=\"lf\">{R, P}</span></td></tr><tr><td><span class=\"lf\">P → (Q ∧ S)</span></td><td><span class=\"lf\">¬P ∨ (Q ∧ S)</span></td><td>—</td><td><span class=\"lf\">(¬P ∨ Q) ∧ (¬P ∨ S)</span></td><td>C3 = <span class=\"lf\">{¬P, Q}</span>, C4 = <span class=\"lf\">{¬P, S}</span></td></tr><tr><td><span class=\"lf\">(P ∧ S) → ¬R</span></td><td><span class=\"lf\">¬(P ∧ S) ∨ ¬R</span></td><td><span class=\"lf\">¬P ∨ ¬S ∨ ¬R</span></td><td>—</td><td>C5 = <span class=\"lf\">{¬P, ¬S, ¬R}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬S</span></td><td>—</td><td>—</td><td>—</td><td>C6 = <span class=\"lf\">{¬S}</span></td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {S, P} , {R, P} , {¬P, Q} , {¬P, S} , {¬P, ¬S, ¬R} , {¬S} }</span></p>"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Refutació per resolució",
      "(a) Refutación por resolución",
      "(a) Refutation by resolution"
     ]
    },
    {
     "t": "p",
     "x": [
      "Resolució lineal començant per la clàusula de la conclusió negada:",
      "Resolución lineal empezando por la cláusula de la conclusión negada:",
      "Linear resolution starting with the clause of the negated conclusion:"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C6, C1) = {P}</span></li><li><span class=\"lf\">R2 = res(R1, C4) = {S}</span></li><li><span class=\"lf\">R3 = res(R2, C6) = □</span></li></ol>"
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 294 256\" width=\"294\" height=\"256\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"14\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{S, P}</text><text class=\"lx-lb\" x=\"246.8\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{¬P, S}</text><text class=\"lx-lb\" x=\"250.7\" y=\"90\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{S}</text><text class=\"lx-lb\" x=\"43.9\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"180.3\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"239.2\" y=\"148\" text-anchor=\"start\">C6</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
      "<svg viewBox=\"0 0 294 256\" width=\"294\" height=\"256\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"14\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{S, P}</text><text class=\"lx-lb\" x=\"246.8\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{¬P, S}</text><text class=\"lx-lb\" x=\"250.7\" y=\"90\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{S}</text><text class=\"lx-lb\" x=\"43.9\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"180.3\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"239.2\" y=\"148\" text-anchor=\"start\">C6</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
      "<svg viewBox=\"0 0 294 256\" width=\"294\" height=\"256\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"14\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{S, P}</text><text class=\"lx-lb\" x=\"246.8\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{¬P, S}</text><text class=\"lx-lb\" x=\"250.7\" y=\"90\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{S}</text><text class=\"lx-lb\" x=\"43.9\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"180.3\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"239.2\" y=\"148\" text-anchor=\"start\">C6</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"206\" text-anchor=\"end\">R3</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    },
    {
     "part": "b",
     "t": "h",
     "x": [
      "(b) Mètode alternatiu: deducció amb regles d'inferència",
      "(b) Método alternativo: deducción con reglas de inferencia",
      "(b) Alternative method: deduction with inference rules"
     ]
    },
    {
     "t": "p",
     "x": [
      "Partim de les premisses (línies 1 a 3) i apliquem regles d'inferència i equivalències del formulari fins a obtenir la conclusió:",
      "Partimos de las premisas (líneas 1 a 3) y aplicamos reglas de inferencia y equivalencias del formulario hasta obtener la conclusión:",
      "We start from the premises (lines 1 to 3) and apply inference rules and equivalences from the formula sheet until we obtain the conclusion:"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línia</th><th>fbf</th><th>Justificació</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(S → ¬R) → P</span></td><td>premissa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">P → (Q ∧ S)</span></td><td>premissa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">(P ∧ S) → ¬R</span></td><td>premissa</td></tr><tr><td>4</td><td><span class=\"lf\">(P → Q) ∧ (P → S)</span></td><td>(A→B) ∧ (A→C) ⇔ A→(B∧C) (2)</td></tr><tr><td>5</td><td><span class=\"lf\">P → S</span></td><td>simplificació (4)</td></tr><tr><td>6</td><td><span class=\"lf\">(S → ¬R) → S</span></td><td>sil·logisme hipotètic (1, 5)</td></tr><tr><td>7</td><td><span class=\"lf\">¬(S → ¬R) ∨ S</span></td><td>implicació (6)</td></tr><tr><td>8</td><td><span class=\"lf\">(S ∧ R) ∨ S</span></td><td>implicació + De Morgan + doble negació (7)</td></tr><tr><td>9</td><td><span class=\"lf\">(S ∨ S) ∧ (R ∨ S)</span></td><td>distributiva (8)</td></tr><tr><td>10</td><td><span class=\"lf\">S ∨ S</span></td><td>simplificació (9)</td></tr><tr><td>11</td><td><span class=\"lf\">S</span></td><td>idempotència (10)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línea</th><th>fbf</th><th>Justificación</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(S → ¬R) → P</span></td><td>premisa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">P → (Q ∧ S)</span></td><td>premisa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">(P ∧ S) → ¬R</span></td><td>premisa</td></tr><tr><td>4</td><td><span class=\"lf\">(P → Q) ∧ (P → S)</span></td><td>(A→B) ∧ (A→C) ⇔ A→(B∧C) (2)</td></tr><tr><td>5</td><td><span class=\"lf\">P → S</span></td><td>simplificación (4)</td></tr><tr><td>6</td><td><span class=\"lf\">(S → ¬R) → S</span></td><td>silogismo hipotético (1, 5)</td></tr><tr><td>7</td><td><span class=\"lf\">¬(S → ¬R) ∨ S</span></td><td>implicación (6)</td></tr><tr><td>8</td><td><span class=\"lf\">(S ∧ R) ∨ S</span></td><td>implicación + De Morgan + doble negación (7)</td></tr><tr><td>9</td><td><span class=\"lf\">(S ∨ S) ∧ (R ∨ S)</span></td><td>distributiva (8)</td></tr><tr><td>10</td><td><span class=\"lf\">S ∨ S</span></td><td>simplificación (9)</td></tr><tr><td>11</td><td><span class=\"lf\">S</span></td><td>idempotencia (10)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Line</th><th>fbf</th><th>Justification</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(S → ¬R) → P</span></td><td>premise</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">P → (Q ∧ S)</span></td><td>premise</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">(P ∧ S) → ¬R</span></td><td>premise</td></tr><tr><td>4</td><td><span class=\"lf\">(P → Q) ∧ (P → S)</span></td><td>(A→B) ∧ (A→C) ⇔ A→(B∧C) (2)</td></tr><tr><td>5</td><td><span class=\"lf\">P → S</span></td><td>simplification (4)</td></tr><tr><td>6</td><td><span class=\"lf\">(S → ¬R) → S</span></td><td>hypothetical syllogism (1, 5)</td></tr><tr><td>7</td><td><span class=\"lf\">¬(S → ¬R) ∨ S</span></td><td>implication (6)</td></tr><tr><td>8</td><td><span class=\"lf\">(S ∧ R) ∨ S</span></td><td>implication + De Morgan + double negation (7)</td></tr><tr><td>9</td><td><span class=\"lf\">(S ∨ S) ∧ (R ∨ S)</span></td><td>distributiva (8)</td></tr><tr><td>10</td><td><span class=\"lf\">S ∨ S</span></td><td>simplification (9)</td></tr><tr><td>11</td><td><span class=\"lf\">S</span></td><td>idempotence (10)</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "note",
     "x": [
      "Altra vegada sobra una premissa: la 3.",
      "Otra vez sobra una premisa: la 3.",
      "Once again a premise is not needed: number 3."
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-r4",
   "unit": "u3",
   "kind": "R",
   "level": "exam",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donades les següents proposicions o enunciats (CP0):",
      "Dadas las siguientes proposiciones o enunciados (CP0):",
      "Given the following propositions or statements (CP0):"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(A ∨ B) → C</span> <i>(premissa)</i></li><li><span class=\"lf\">C → (D ∧ E)</span> <i>(premissa)</i></li><li><span class=\"lf\">¬D ∨ F</span> <i>(premissa)</i></li><li><span class=\"lf\">A</span> <i>(premissa)</i></li><li><span class=\"lf\">F</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(A ∨ B) → C</span> <i>(premisa)</i></li><li><span class=\"lf\">C → (D ∧ E)</span> <i>(premisa)</i></li><li><span class=\"lf\">¬D ∨ F</span> <i>(premisa)</i></li><li><span class=\"lf\">A</span> <i>(premisa)</i></li><li><span class=\"lf\">F</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(A ∨ B) → C</span> <i>(premise)</i></li><li><span class=\"lf\">C → (D ∧ E)</span> <i>(premise)</i></li><li><span class=\"lf\">¬D ∨ F</span> <i>(premise)</i></li><li><span class=\"lf\">A</span> <i>(premise)</i></li><li><span class=\"lf\">F</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Demostreu mitjançant el mètode de resolució que el raonament és correcte. Detalleu els passos seguits en la prova per resolució.</li><li>Doneu un altre mètode alternatiu a l'(a) per a validar el raonament. Detalleu les regles d'inferència que heu emprat.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Demostrad mediante el método de resolución que el razonamiento es correcto. Detallad los pasos seguidos en la prueba por resolución.</li><li>Dad otro método alternativo al (a) para validar el razonamiento. Detallad las reglas de inferencia que habéis empleado.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Prove by the resolution method that the argument is correct. Detail the steps followed in the resolution proof.</li><li>Give another method, different from (a), to validate the argument. Detail the inference rules you have used.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Neguem la conclusió",
      "(a) Negamos la conclusión",
      "(a) We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Per refutació: afegim la negació de la conclusió, <span class=\"lf\">¬F</span>, i busquem la clàusula buida.</p>",
      "<p>Por refutación: añadimos la negación de la conclusión, <span class=\"lf\">¬F</span>, y buscamos la cláusula vacía.</p>",
      "<p>By refutation: we add the negation of the conclusion, <span class=\"lf\">¬F</span>, and look for the empty clause.</p>"
     ],
     "t": "html"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Forma clausal de les premisses i de la conclusió negada",
      "(a) Forma clausal de las premisas y de la conclusión negada",
      "(a) Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Redueix ¬</th><th>FNC</th><th>Clàusules</th></tr></thead><tbody><tr><td><span class=\"lf\">(A ∨ B) → C</span></td><td><span class=\"lf\">¬(A ∨ B) ∨ C</span></td><td><span class=\"lf\">(¬A ∧ ¬B) ∨ C</span></td><td><span class=\"lf\">(¬A ∨ C) ∧ (¬B ∨ C)</span></td><td>C1 = <span class=\"lf\">{¬A, C}</span>, C2 = <span class=\"lf\">{¬B, C}</span></td></tr><tr><td><span class=\"lf\">C → (D ∧ E)</span></td><td><span class=\"lf\">¬C ∨ (D ∧ E)</span></td><td>—</td><td><span class=\"lf\">(¬C ∨ D) ∧ (¬C ∨ E)</span></td><td>C3 = <span class=\"lf\">{¬C, D}</span>, C4 = <span class=\"lf\">{¬C, E}</span></td></tr><tr><td><span class=\"lf\">¬D ∨ F</span></td><td>—</td><td>—</td><td>—</td><td>C5 = <span class=\"lf\">{¬D, F}</span></td></tr><tr><td><span class=\"lf\">A</span></td><td>—</td><td>—</td><td>—</td><td>C6 = <span class=\"lf\">{A}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬F</span></td><td>—</td><td>—</td><td>—</td><td>C7 = <span class=\"lf\">{¬F}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Cláusulas</th></tr></thead><tbody><tr><td><span class=\"lf\">(A ∨ B) → C</span></td><td><span class=\"lf\">¬(A ∨ B) ∨ C</span></td><td><span class=\"lf\">(¬A ∧ ¬B) ∨ C</span></td><td><span class=\"lf\">(¬A ∨ C) ∧ (¬B ∨ C)</span></td><td>C1 = <span class=\"lf\">{¬A, C}</span>, C2 = <span class=\"lf\">{¬B, C}</span></td></tr><tr><td><span class=\"lf\">C → (D ∧ E)</span></td><td><span class=\"lf\">¬C ∨ (D ∧ E)</span></td><td>—</td><td><span class=\"lf\">(¬C ∨ D) ∧ (¬C ∨ E)</span></td><td>C3 = <span class=\"lf\">{¬C, D}</span>, C4 = <span class=\"lf\">{¬C, E}</span></td></tr><tr><td><span class=\"lf\">¬D ∨ F</span></td><td>—</td><td>—</td><td>—</td><td>C5 = <span class=\"lf\">{¬D, F}</span></td></tr><tr><td><span class=\"lf\">A</span></td><td>—</td><td>—</td><td>—</td><td>C6 = <span class=\"lf\">{A}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬F</span></td><td>—</td><td>—</td><td>—</td><td>C7 = <span class=\"lf\">{¬F}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Clauses</th></tr></thead><tbody><tr><td><span class=\"lf\">(A ∨ B) → C</span></td><td><span class=\"lf\">¬(A ∨ B) ∨ C</span></td><td><span class=\"lf\">(¬A ∧ ¬B) ∨ C</span></td><td><span class=\"lf\">(¬A ∨ C) ∧ (¬B ∨ C)</span></td><td>C1 = <span class=\"lf\">{¬A, C}</span>, C2 = <span class=\"lf\">{¬B, C}</span></td></tr><tr><td><span class=\"lf\">C → (D ∧ E)</span></td><td><span class=\"lf\">¬C ∨ (D ∧ E)</span></td><td>—</td><td><span class=\"lf\">(¬C ∨ D) ∧ (¬C ∨ E)</span></td><td>C3 = <span class=\"lf\">{¬C, D}</span>, C4 = <span class=\"lf\">{¬C, E}</span></td></tr><tr><td><span class=\"lf\">¬D ∨ F</span></td><td>—</td><td>—</td><td>—</td><td>C5 = <span class=\"lf\">{¬D, F}</span></td></tr><tr><td><span class=\"lf\">A</span></td><td>—</td><td>—</td><td>—</td><td>C6 = <span class=\"lf\">{A}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬F</span></td><td>—</td><td>—</td><td>—</td><td>C7 = <span class=\"lf\">{¬F}</span></td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬A, C} , {¬B, C} , {¬C, D} , {¬C, E} , {¬D, F} , {A} , {¬F} }</span></p>"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Refutació per resolució",
      "(a) Refutación por resolución",
      "(a) Refutation by resolution"
     ]
    },
    {
     "t": "p",
     "x": [
      "Resolució lineal començant per la clàusula de la conclusió negada:",
      "Resolución lineal empezando por la cláusula de la conclusión negada:",
      "Linear resolution starting with the clause of the negated conclusion:"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C7, C5) = {¬D}</span></li><li><span class=\"lf\">R2 = res(R1, C3) = {¬C}</span></li><li><span class=\"lf\">R3 = res(R2, C1) = {¬A}</span></li><li><span class=\"lf\">R4 = res(R3, C6) = □</span></li></ol>"
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 294 314\" width=\"294\" height=\"314\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬F}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C7</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{¬D, F}</text><text class=\"lx-lb\" x=\"250.7\" y=\"32\" text-anchor=\"start\">C5</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{¬D}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{¬C, D}</text><text class=\"lx-lb\" x=\"250.7\" y=\"90\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{¬C}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{¬A, C}</text><text class=\"lx-lb\" x=\"250.7\" y=\"148\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"188\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">{¬A}</text><text class=\"lx-lb\" x=\"40.0\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"206\" text-anchor=\"middle\">{A}</text><text class=\"lx-lb\" x=\"235.3\" y=\"206\" text-anchor=\"start\">C6</text><path class=\"lx-ln\" d=\"M72.4 216 L72.4 246\"></path><path class=\"lx-ln\" d=\"M206.8 216 L82.4 246\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"246\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"264\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"264\" text-anchor=\"end\">R4</text></svg>",
      "<svg viewBox=\"0 0 294 314\" width=\"294\" height=\"314\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬F}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C7</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{¬D, F}</text><text class=\"lx-lb\" x=\"250.7\" y=\"32\" text-anchor=\"start\">C5</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{¬D}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{¬C, D}</text><text class=\"lx-lb\" x=\"250.7\" y=\"90\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{¬C}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{¬A, C}</text><text class=\"lx-lb\" x=\"250.7\" y=\"148\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"188\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">{¬A}</text><text class=\"lx-lb\" x=\"40.0\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"206\" text-anchor=\"middle\">{A}</text><text class=\"lx-lb\" x=\"235.3\" y=\"206\" text-anchor=\"start\">C6</text><path class=\"lx-ln\" d=\"M72.4 216 L72.4 246\"></path><path class=\"lx-ln\" d=\"M206.8 216 L82.4 246\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"246\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"264\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"264\" text-anchor=\"end\">R4</text></svg>",
      "<svg viewBox=\"0 0 294 314\" width=\"294\" height=\"314\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬F}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C7</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{¬D, F}</text><text class=\"lx-lb\" x=\"250.7\" y=\"32\" text-anchor=\"start\">C5</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{¬D}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{¬C, D}</text><text class=\"lx-lb\" x=\"250.7\" y=\"90\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{¬C}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{¬A, C}</text><text class=\"lx-lb\" x=\"250.7\" y=\"148\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"188\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">{¬A}</text><text class=\"lx-lb\" x=\"40.0\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"206\" text-anchor=\"middle\">{A}</text><text class=\"lx-lb\" x=\"235.3\" y=\"206\" text-anchor=\"start\">C6</text><path class=\"lx-ln\" d=\"M72.4 216 L72.4 246\"></path><path class=\"lx-ln\" d=\"M206.8 216 L82.4 246\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"246\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"264\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"264\" text-anchor=\"end\">R4</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    },
    {
     "part": "b",
     "t": "h",
     "x": [
      "(b) Mètode alternatiu: deducció amb regles d'inferència",
      "(b) Método alternativo: deducción con reglas de inferencia",
      "(b) Alternative method: deduction with inference rules"
     ]
    },
    {
     "t": "p",
     "x": [
      "Partim de les premisses (línies 1 a 4) i apliquem regles d'inferència i equivalències del formulari fins a obtenir la conclusió:",
      "Partimos de las premisas (líneas 1 a 4) y aplicamos reglas de inferencia y equivalencias del formulario hasta obtener la conclusión:",
      "We start from the premises (lines 1 to 4) and apply inference rules and equivalences from the formula sheet until we obtain the conclusion:"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línia</th><th>fbf</th><th>Justificació</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(A ∨ B) → C</span></td><td>premissa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">C → (D ∧ E)</span></td><td>premissa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">¬D ∨ F</span></td><td>premissa</td></tr><tr class=\"pr\"><td>4</td><td><span class=\"lf\">A</span></td><td>premissa</td></tr><tr><td>5</td><td><span class=\"lf\">A ∨ B</span></td><td>addició (4)</td></tr><tr><td>6</td><td><span class=\"lf\">C</span></td><td>modus ponens (5, 1)</td></tr><tr><td>7</td><td><span class=\"lf\">D ∧ E</span></td><td>modus ponens (6, 2)</td></tr><tr><td>8</td><td><span class=\"lf\">D</span></td><td>simplificació (7)</td></tr><tr><td>9</td><td><span class=\"lf\">F</span></td><td>sil·logisme disjuntiu (3, 8)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línea</th><th>fbf</th><th>Justificación</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(A ∨ B) → C</span></td><td>premisa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">C → (D ∧ E)</span></td><td>premisa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">¬D ∨ F</span></td><td>premisa</td></tr><tr class=\"pr\"><td>4</td><td><span class=\"lf\">A</span></td><td>premisa</td></tr><tr><td>5</td><td><span class=\"lf\">A ∨ B</span></td><td>adición (4)</td></tr><tr><td>6</td><td><span class=\"lf\">C</span></td><td>modus ponens (5, 1)</td></tr><tr><td>7</td><td><span class=\"lf\">D ∧ E</span></td><td>modus ponens (6, 2)</td></tr><tr><td>8</td><td><span class=\"lf\">D</span></td><td>simplificación (7)</td></tr><tr><td>9</td><td><span class=\"lf\">F</span></td><td>silogismo disyuntivo (3, 8)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Line</th><th>fbf</th><th>Justification</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(A ∨ B) → C</span></td><td>premise</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">C → (D ∧ E)</span></td><td>premise</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">¬D ∨ F</span></td><td>premise</td></tr><tr class=\"pr\"><td>4</td><td><span class=\"lf\">A</span></td><td>premise</td></tr><tr><td>5</td><td><span class=\"lf\">A ∨ B</span></td><td>addition (4)</td></tr><tr><td>6</td><td><span class=\"lf\">C</span></td><td>modus ponens (5, 1)</td></tr><tr><td>7</td><td><span class=\"lf\">D ∧ E</span></td><td>modus ponens (6, 2)</td></tr><tr><td>8</td><td><span class=\"lf\">D</span></td><td>simplification (7)</td></tr><tr><td>9</td><td><span class=\"lf\">F</span></td><td>disjunctive syllogism (3, 8)</td></tr></tbody></table></div>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-r5",
   "unit": "u3",
   "kind": "R",
   "level": "exam",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donades les següents proposicions o enunciats (CP0):",
      "Dadas las siguientes proposiciones o enunciados (CP0):",
      "Given the following propositions or statements (CP0):"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">P → Q</span> <i>(premissa)</i></li><li><span class=\"lf\">R → S</span> <i>(premissa)</i></li><li><span class=\"lf\">P ∨ R</span> <i>(premissa)</i></li><li><span class=\"lf\">¬Q</span> <i>(premissa)</i></li><li><span class=\"lf\">S</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">P → Q</span> <i>(premisa)</i></li><li><span class=\"lf\">R → S</span> <i>(premisa)</i></li><li><span class=\"lf\">P ∨ R</span> <i>(premisa)</i></li><li><span class=\"lf\">¬Q</span> <i>(premisa)</i></li><li><span class=\"lf\">S</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">P → Q</span> <i>(premise)</i></li><li><span class=\"lf\">R → S</span> <i>(premise)</i></li><li><span class=\"lf\">P ∨ R</span> <i>(premise)</i></li><li><span class=\"lf\">¬Q</span> <i>(premise)</i></li><li><span class=\"lf\">S</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Demostreu mitjançant el mètode de resolució que el raonament és correcte. Detalleu els passos seguits en la prova per resolució.</li><li>Doneu un altre mètode alternatiu a l'(a) per a validar el raonament. Detalleu les regles d'inferència que heu emprat.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Demostrad mediante el método de resolución que el razonamiento es correcto. Detallad los pasos seguidos en la prueba por resolución.</li><li>Dad otro método alternativo al (a) para validar el razonamiento. Detallad las reglas de inferencia que habéis empleado.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Prove by the resolution method that the argument is correct. Detail the steps followed in the resolution proof.</li><li>Give another method, different from (a), to validate the argument. Detail the inference rules you have used.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Neguem la conclusió",
      "(a) Negamos la conclusión",
      "(a) We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Per refutació: afegim la negació de la conclusió, <span class=\"lf\">¬S</span>, i busquem la clàusula buida.</p>",
      "<p>Por refutación: añadimos la negación de la conclusión, <span class=\"lf\">¬S</span>, y buscamos la cláusula vacía.</p>",
      "<p>By refutation: we add the negation of the conclusion, <span class=\"lf\">¬S</span>, and look for the empty clause.</p>"
     ],
     "t": "html"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Forma clausal de les premisses i de la conclusió negada",
      "(a) Forma clausal de las premisas y de la conclusión negada",
      "(a) Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Redueix ¬</th><th>FNC</th><th>Clàusules</th></tr></thead><tbody><tr><td><span class=\"lf\">P → Q</span></td><td><span class=\"lf\">¬P ∨ Q</span></td><td>—</td><td>—</td><td>C1 = <span class=\"lf\">{¬P, Q}</span></td></tr><tr><td><span class=\"lf\">R → S</span></td><td><span class=\"lf\">¬R ∨ S</span></td><td>—</td><td>—</td><td>C2 = <span class=\"lf\">{¬R, S}</span></td></tr><tr><td><span class=\"lf\">P ∨ R</span></td><td>—</td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{P, R}</span></td></tr><tr><td><span class=\"lf\">¬Q</span></td><td>—</td><td>—</td><td>—</td><td>C4 = <span class=\"lf\">{¬Q}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬S</span></td><td>—</td><td>—</td><td>—</td><td>C5 = <span class=\"lf\">{¬S}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Cláusulas</th></tr></thead><tbody><tr><td><span class=\"lf\">P → Q</span></td><td><span class=\"lf\">¬P ∨ Q</span></td><td>—</td><td>—</td><td>C1 = <span class=\"lf\">{¬P, Q}</span></td></tr><tr><td><span class=\"lf\">R → S</span></td><td><span class=\"lf\">¬R ∨ S</span></td><td>—</td><td>—</td><td>C2 = <span class=\"lf\">{¬R, S}</span></td></tr><tr><td><span class=\"lf\">P ∨ R</span></td><td>—</td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{P, R}</span></td></tr><tr><td><span class=\"lf\">¬Q</span></td><td>—</td><td>—</td><td>—</td><td>C4 = <span class=\"lf\">{¬Q}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬S</span></td><td>—</td><td>—</td><td>—</td><td>C5 = <span class=\"lf\">{¬S}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Clauses</th></tr></thead><tbody><tr><td><span class=\"lf\">P → Q</span></td><td><span class=\"lf\">¬P ∨ Q</span></td><td>—</td><td>—</td><td>C1 = <span class=\"lf\">{¬P, Q}</span></td></tr><tr><td><span class=\"lf\">R → S</span></td><td><span class=\"lf\">¬R ∨ S</span></td><td>—</td><td>—</td><td>C2 = <span class=\"lf\">{¬R, S}</span></td></tr><tr><td><span class=\"lf\">P ∨ R</span></td><td>—</td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{P, R}</span></td></tr><tr><td><span class=\"lf\">¬Q</span></td><td>—</td><td>—</td><td>—</td><td>C4 = <span class=\"lf\">{¬Q}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬S</span></td><td>—</td><td>—</td><td>—</td><td>C5 = <span class=\"lf\">{¬S}</span></td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬P, Q} , {¬R, S} , {P, R} , {¬Q} , {¬S} }</span></p>"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Refutació per resolució",
      "(a) Refutación por resolución",
      "(a) Refutation by resolution"
     ]
    },
    {
     "t": "p",
     "x": [
      "Resolució lineal començant per la clàusula de la conclusió negada:",
      "Resolución lineal empezando por la cláusula de la conclusión negada:",
      "Linear resolution starting with the clause of the negated conclusion:"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C5, C2) = {¬R}</span></li><li><span class=\"lf\">R2 = res(R1, C3) = {P}</span></li><li><span class=\"lf\">R3 = res(R2, C1) = {Q}</span></li><li><span class=\"lf\">R4 = res(R3, C4) = □</span></li></ol>"
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 294 314\" width=\"294\" height=\"314\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C5</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{¬R, S}</text><text class=\"lx-lb\" x=\"250.7\" y=\"32\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{¬R}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{P, R}</text><text class=\"lx-lb\" x=\"246.8\" y=\"90\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"43.9\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{¬P, Q}</text><text class=\"lx-lb\" x=\"250.7\" y=\"148\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">{Q}</text><text class=\"lx-lb\" x=\"43.9\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"180.3\" y=\"188\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"206\" text-anchor=\"middle\">{¬Q}</text><text class=\"lx-lb\" x=\"239.2\" y=\"206\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 216 L72.4 246\"></path><path class=\"lx-ln\" d=\"M206.8 216 L82.4 246\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"246\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"264\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"264\" text-anchor=\"end\">R4</text></svg>",
      "<svg viewBox=\"0 0 294 314\" width=\"294\" height=\"314\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C5</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{¬R, S}</text><text class=\"lx-lb\" x=\"250.7\" y=\"32\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{¬R}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{P, R}</text><text class=\"lx-lb\" x=\"246.8\" y=\"90\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"43.9\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{¬P, Q}</text><text class=\"lx-lb\" x=\"250.7\" y=\"148\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">{Q}</text><text class=\"lx-lb\" x=\"43.9\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"180.3\" y=\"188\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"206\" text-anchor=\"middle\">{¬Q}</text><text class=\"lx-lb\" x=\"239.2\" y=\"206\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 216 L72.4 246\"></path><path class=\"lx-ln\" d=\"M206.8 216 L82.4 246\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"246\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"264\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"264\" text-anchor=\"end\">R4</text></svg>",
      "<svg viewBox=\"0 0 294 314\" width=\"294\" height=\"314\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬S}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C5</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{¬R, S}</text><text class=\"lx-lb\" x=\"250.7\" y=\"32\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{¬R}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{P, R}</text><text class=\"lx-lb\" x=\"246.8\" y=\"90\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"43.9\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{¬P, Q}</text><text class=\"lx-lb\" x=\"250.7\" y=\"148\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">{Q}</text><text class=\"lx-lb\" x=\"43.9\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"180.3\" y=\"188\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"206\" text-anchor=\"middle\">{¬Q}</text><text class=\"lx-lb\" x=\"239.2\" y=\"206\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 216 L72.4 246\"></path><path class=\"lx-ln\" d=\"M206.8 216 L82.4 246\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"246\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"264\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"264\" text-anchor=\"end\">R4</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    },
    {
     "part": "b",
     "t": "h",
     "x": [
      "(b) Mètode alternatiu: deducció amb regles d'inferència",
      "(b) Método alternativo: deducción con reglas de inferencia",
      "(b) Alternative method: deduction with inference rules"
     ]
    },
    {
     "t": "p",
     "x": [
      "Partim de les premisses (línies 1 a 4) i apliquem regles d'inferència i equivalències del formulari fins a obtenir la conclusió:",
      "Partimos de las premisas (líneas 1 a 4) y aplicamos reglas de inferencia y equivalencias del formulario hasta obtener la conclusión:",
      "We start from the premises (lines 1 to 4) and apply inference rules and equivalences from the formula sheet until we obtain the conclusion:"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línia</th><th>fbf</th><th>Justificació</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">P → Q</span></td><td>premissa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">R → S</span></td><td>premissa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">P ∨ R</span></td><td>premissa</td></tr><tr class=\"pr\"><td>4</td><td><span class=\"lf\">¬Q</span></td><td>premissa</td></tr><tr><td>5</td><td><span class=\"lf\">¬P</span></td><td>modus tollens (1, 4)</td></tr><tr><td>6</td><td><span class=\"lf\">R</span></td><td>sil·logisme disjuntiu (3, 5)</td></tr><tr><td>7</td><td><span class=\"lf\">S</span></td><td>modus ponens (6, 2)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línea</th><th>fbf</th><th>Justificación</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">P → Q</span></td><td>premisa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">R → S</span></td><td>premisa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">P ∨ R</span></td><td>premisa</td></tr><tr class=\"pr\"><td>4</td><td><span class=\"lf\">¬Q</span></td><td>premisa</td></tr><tr><td>5</td><td><span class=\"lf\">¬P</span></td><td>modus tollens (1, 4)</td></tr><tr><td>6</td><td><span class=\"lf\">R</span></td><td>silogismo disyuntivo (3, 5)</td></tr><tr><td>7</td><td><span class=\"lf\">S</span></td><td>modus ponens (6, 2)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Line</th><th>fbf</th><th>Justification</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">P → Q</span></td><td>premise</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">R → S</span></td><td>premise</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">P ∨ R</span></td><td>premise</td></tr><tr class=\"pr\"><td>4</td><td><span class=\"lf\">¬Q</span></td><td>premise</td></tr><tr><td>5</td><td><span class=\"lf\">¬P</span></td><td>modus tollens (1, 4)</td></tr><tr><td>6</td><td><span class=\"lf\">R</span></td><td>disjunctive syllogism (3, 5)</td></tr><tr><td>7</td><td><span class=\"lf\">S</span></td><td>modus ponens (6, 2)</td></tr></tbody></table></div>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-r6",
   "unit": "u3",
   "kind": "R",
   "level": "exam",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donades les següents proposicions o enunciats (CP0):",
      "Dadas las siguientes proposiciones o enunciados (CP0):",
      "Given the following propositions or statements (CP0):"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(P ∧ Q) → R</span> <i>(premissa)</i></li><li><span class=\"lf\">¬R</span> <i>(premissa)</i></li><li><span class=\"lf\">P</span> <i>(premissa)</i></li><li><span class=\"lf\">¬Q</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(P ∧ Q) → R</span> <i>(premisa)</i></li><li><span class=\"lf\">¬R</span> <i>(premisa)</i></li><li><span class=\"lf\">P</span> <i>(premisa)</i></li><li><span class=\"lf\">¬Q</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(P ∧ Q) → R</span> <i>(premise)</i></li><li><span class=\"lf\">¬R</span> <i>(premise)</i></li><li><span class=\"lf\">P</span> <i>(premise)</i></li><li><span class=\"lf\">¬Q</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Demostreu mitjançant el mètode de resolució que el raonament és correcte. Detalleu els passos seguits en la prova per resolució.</li><li>Doneu un altre mètode alternatiu a l'(a) per a validar el raonament. Detalleu les regles d'inferència que heu emprat.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Demostrad mediante el método de resolución que el razonamiento es correcto. Detallad los pasos seguidos en la prueba por resolución.</li><li>Dad otro método alternativo al (a) para validar el razonamiento. Detallad las reglas de inferencia que habéis empleado.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Prove by the resolution method that the argument is correct. Detail the steps followed in the resolution proof.</li><li>Give another method, different from (a), to validate the argument. Detail the inference rules you have used.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Neguem la conclusió",
      "(a) Negamos la conclusión",
      "(a) We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Per refutació: afegim la negació de la conclusió, <span class=\"lf\">¬¬Q</span>, i busquem la clàusula buida.</p>",
      "<p>Por refutación: añadimos la negación de la conclusión, <span class=\"lf\">¬¬Q</span>, y buscamos la cláusula vacía.</p>",
      "<p>By refutation: we add the negation of the conclusion, <span class=\"lf\">¬¬Q</span>, and look for the empty clause.</p>"
     ],
     "t": "html"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Forma clausal de les premisses i de la conclusió negada",
      "(a) Forma clausal de las premisas y de la conclusión negada",
      "(a) Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Redueix ¬</th><th>FNC</th><th>Clàusules</th></tr></thead><tbody><tr><td><span class=\"lf\">(P ∧ Q) → R</span></td><td><span class=\"lf\">¬(P ∧ Q) ∨ R</span></td><td><span class=\"lf\">¬P ∨ ¬Q ∨ R</span></td><td>—</td><td>C1 = <span class=\"lf\">{¬P, ¬Q, R}</span></td></tr><tr><td><span class=\"lf\">¬R</span></td><td>—</td><td>—</td><td>—</td><td>C2 = <span class=\"lf\">{¬R}</span></td></tr><tr><td><span class=\"lf\">P</span></td><td>—</td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{P}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬¬Q</span></td><td>—</td><td><span class=\"lf\">Q</span></td><td>—</td><td>C4 = <span class=\"lf\">{Q}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Cláusulas</th></tr></thead><tbody><tr><td><span class=\"lf\">(P ∧ Q) → R</span></td><td><span class=\"lf\">¬(P ∧ Q) ∨ R</span></td><td><span class=\"lf\">¬P ∨ ¬Q ∨ R</span></td><td>—</td><td>C1 = <span class=\"lf\">{¬P, ¬Q, R}</span></td></tr><tr><td><span class=\"lf\">¬R</span></td><td>—</td><td>—</td><td>—</td><td>C2 = <span class=\"lf\">{¬R}</span></td></tr><tr><td><span class=\"lf\">P</span></td><td>—</td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{P}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬¬Q</span></td><td>—</td><td><span class=\"lf\">Q</span></td><td>—</td><td>C4 = <span class=\"lf\">{Q}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Clauses</th></tr></thead><tbody><tr><td><span class=\"lf\">(P ∧ Q) → R</span></td><td><span class=\"lf\">¬(P ∧ Q) ∨ R</span></td><td><span class=\"lf\">¬P ∨ ¬Q ∨ R</span></td><td>—</td><td>C1 = <span class=\"lf\">{¬P, ¬Q, R}</span></td></tr><tr><td><span class=\"lf\">¬R</span></td><td>—</td><td>—</td><td>—</td><td>C2 = <span class=\"lf\">{¬R}</span></td></tr><tr><td><span class=\"lf\">P</span></td><td>—</td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{P}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬¬Q</span></td><td>—</td><td><span class=\"lf\">Q</span></td><td>—</td><td>C4 = <span class=\"lf\">{Q}</span></td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬P, ¬Q, R} , {¬R} , {P} , {Q} }</span></p>"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Refutació per resolució",
      "(a) Refutación por resolución",
      "(a) Refutation by resolution"
     ]
    },
    {
     "t": "p",
     "x": [
      "Resolució lineal començant per la clàusula de la conclusió negada:",
      "Resolución lineal empezando por la cláusula de la conclusión negada:",
      "Linear resolution starting with the clause of the negated conclusion:"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C4, C1) = {¬P, R}</span></li><li><span class=\"lf\">R2 = res(R1, C2) = {¬P}</span></li><li><span class=\"lf\">R3 = res(R2, C3) = □</span></li></ol>"
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 348 256\" width=\"348\" height=\"256\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"61.4\" y=\"14\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"32\" text-anchor=\"middle\">{Q}</text><text class=\"lx-lb\" x=\"55.4\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"191.9\" y=\"14\" width=\"106.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"32\" text-anchor=\"middle\">{¬P, ¬Q, R}</text><text class=\"lx-lb\" x=\"304.6\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M84.0 42 L84.0 72\"></path><path class=\"lx-ln\" d=\"M245.2 42 L94.0 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"90\" text-anchor=\"middle\">{¬P, R}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"218.8\" y=\"72\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"90\" text-anchor=\"middle\">{¬R}</text><text class=\"lx-lb\" x=\"277.6\" y=\"90\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M84.0 100 L84.0 130\"></path><path class=\"lx-ln\" d=\"M245.2 100 L94.0 130\"></path><rect class=\"lx-bx\" x=\"57.6\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"148\" text-anchor=\"middle\">{¬P}</text><text class=\"lx-lb\" x=\"51.6\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"222.7\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"148\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"273.8\" y=\"148\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M84.0 158 L84.0 188\"></path><path class=\"lx-ln\" d=\"M245.2 158 L94.0 188\"></path><rect class=\"lx-bx-e\" x=\"69.1\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"63.1\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
      "<svg viewBox=\"0 0 348 256\" width=\"348\" height=\"256\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"61.4\" y=\"14\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"32\" text-anchor=\"middle\">{Q}</text><text class=\"lx-lb\" x=\"55.4\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"191.9\" y=\"14\" width=\"106.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"32\" text-anchor=\"middle\">{¬P, ¬Q, R}</text><text class=\"lx-lb\" x=\"304.6\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M84.0 42 L84.0 72\"></path><path class=\"lx-ln\" d=\"M245.2 42 L94.0 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"90\" text-anchor=\"middle\">{¬P, R}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"218.8\" y=\"72\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"90\" text-anchor=\"middle\">{¬R}</text><text class=\"lx-lb\" x=\"277.6\" y=\"90\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M84.0 100 L84.0 130\"></path><path class=\"lx-ln\" d=\"M245.2 100 L94.0 130\"></path><rect class=\"lx-bx\" x=\"57.6\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"148\" text-anchor=\"middle\">{¬P}</text><text class=\"lx-lb\" x=\"51.6\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"222.7\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"148\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"273.8\" y=\"148\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M84.0 158 L84.0 188\"></path><path class=\"lx-ln\" d=\"M245.2 158 L94.0 188\"></path><rect class=\"lx-bx-e\" x=\"69.1\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"63.1\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
      "<svg viewBox=\"0 0 348 256\" width=\"348\" height=\"256\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"61.4\" y=\"14\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"32\" text-anchor=\"middle\">{Q}</text><text class=\"lx-lb\" x=\"55.4\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"191.9\" y=\"14\" width=\"106.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"32\" text-anchor=\"middle\">{¬P, ¬Q, R}</text><text class=\"lx-lb\" x=\"304.6\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M84.0 42 L84.0 72\"></path><path class=\"lx-ln\" d=\"M245.2 42 L94.0 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"90\" text-anchor=\"middle\">{¬P, R}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"218.8\" y=\"72\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"90\" text-anchor=\"middle\">{¬R}</text><text class=\"lx-lb\" x=\"277.6\" y=\"90\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M84.0 100 L84.0 130\"></path><path class=\"lx-ln\" d=\"M245.2 100 L94.0 130\"></path><rect class=\"lx-bx\" x=\"57.6\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"148\" text-anchor=\"middle\">{¬P}</text><text class=\"lx-lb\" x=\"51.6\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"222.7\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"148\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"273.8\" y=\"148\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M84.0 158 L84.0 188\"></path><path class=\"lx-ln\" d=\"M245.2 158 L94.0 188\"></path><rect class=\"lx-bx-e\" x=\"69.1\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"63.1\" y=\"206\" text-anchor=\"end\">R3</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    },
    {
     "part": "b",
     "t": "h",
     "x": [
      "(b) Mètode alternatiu: deducció amb regles d'inferència",
      "(b) Método alternativo: deducción con reglas de inferencia",
      "(b) Alternative method: deduction with inference rules"
     ]
    },
    {
     "t": "p",
     "x": [
      "Partim de les premisses (línies 1 a 3) i apliquem regles d'inferència i equivalències del formulari fins a obtenir la conclusió:",
      "Partimos de las premisas (líneas 1 a 3) y aplicamos reglas de inferencia y equivalencias del formulario hasta obtener la conclusión:",
      "We start from the premises (lines 1 to 3) and apply inference rules and equivalences from the formula sheet until we obtain the conclusion:"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línia</th><th>fbf</th><th>Justificació</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(P ∧ Q) → R</span></td><td>premissa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">¬R</span></td><td>premissa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">P</span></td><td>premissa</td></tr><tr><td>4</td><td><span class=\"lf\">¬(P ∧ Q)</span></td><td>modus tollens (1, 2)</td></tr><tr><td>5</td><td><span class=\"lf\">¬P ∨ ¬Q</span></td><td>De Morgan (4)</td></tr><tr><td>6</td><td><span class=\"lf\">¬Q</span></td><td>sil·logisme disjuntiu (5, 3)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línea</th><th>fbf</th><th>Justificación</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(P ∧ Q) → R</span></td><td>premisa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">¬R</span></td><td>premisa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">P</span></td><td>premisa</td></tr><tr><td>4</td><td><span class=\"lf\">¬(P ∧ Q)</span></td><td>modus tollens (1, 2)</td></tr><tr><td>5</td><td><span class=\"lf\">¬P ∨ ¬Q</span></td><td>De Morgan (4)</td></tr><tr><td>6</td><td><span class=\"lf\">¬Q</span></td><td>silogismo disyuntivo (5, 3)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Line</th><th>fbf</th><th>Justification</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(P ∧ Q) → R</span></td><td>premise</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">¬R</span></td><td>premise</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">P</span></td><td>premise</td></tr><tr><td>4</td><td><span class=\"lf\">¬(P ∧ Q)</span></td><td>modus tollens (1, 2)</td></tr><tr><td>5</td><td><span class=\"lf\">¬P ∨ ¬Q</span></td><td>De Morgan (4)</td></tr><tr><td>6</td><td><span class=\"lf\">¬Q</span></td><td>disjunctive syllogism (5, 3)</td></tr></tbody></table></div>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-r7",
   "unit": "u3",
   "kind": "R",
   "level": "exam",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donades les següents proposicions o enunciats (CP0):",
      "Dadas las siguientes proposiciones o enunciados (CP0):",
      "Given the following propositions or statements (CP0):"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(A → B) ∧ (C → D)</span> <i>(premissa)</i></li><li><span class=\"lf\">¬B ∨ ¬D</span> <i>(premissa)</i></li><li><span class=\"lf\">C</span> <i>(premissa)</i></li><li><span class=\"lf\">¬A</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(A → B) ∧ (C → D)</span> <i>(premisa)</i></li><li><span class=\"lf\">¬B ∨ ¬D</span> <i>(premisa)</i></li><li><span class=\"lf\">C</span> <i>(premisa)</i></li><li><span class=\"lf\">¬A</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(A → B) ∧ (C → D)</span> <i>(premise)</i></li><li><span class=\"lf\">¬B ∨ ¬D</span> <i>(premise)</i></li><li><span class=\"lf\">C</span> <i>(premise)</i></li><li><span class=\"lf\">¬A</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Demostreu mitjançant el mètode de resolució que el raonament és correcte. Detalleu els passos seguits en la prova per resolució.</li><li>Doneu un altre mètode alternatiu a l'(a) per a validar el raonament. Detalleu les regles d'inferència que heu emprat.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Demostrad mediante el método de resolución que el razonamiento es correcto. Detallad los pasos seguidos en la prueba por resolución.</li><li>Dad otro método alternativo al (a) para validar el razonamiento. Detallad las reglas de inferencia que habéis empleado.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Prove by the resolution method that the argument is correct. Detail the steps followed in the resolution proof.</li><li>Give another method, different from (a), to validate the argument. Detail the inference rules you have used.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Neguem la conclusió",
      "(a) Negamos la conclusión",
      "(a) We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Per refutació: afegim la negació de la conclusió, <span class=\"lf\">¬¬A</span>, i busquem la clàusula buida.</p>",
      "<p>Por refutación: añadimos la negación de la conclusión, <span class=\"lf\">¬¬A</span>, y buscamos la cláusula vacía.</p>",
      "<p>By refutation: we add the negation of the conclusion, <span class=\"lf\">¬¬A</span>, and look for the empty clause.</p>"
     ],
     "t": "html"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Forma clausal de les premisses i de la conclusió negada",
      "(a) Forma clausal de las premisas y de la conclusión negada",
      "(a) Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Redueix ¬</th><th>FNC</th><th>Clàusules</th></tr></thead><tbody><tr><td><span class=\"lf\">(A → B) ∧ (C → D)</span></td><td><span class=\"lf\">(¬A ∨ B) ∧ (¬C ∨ D)</span></td><td>—</td><td>—</td><td>C1 = <span class=\"lf\">{¬A, B}</span>, C2 = <span class=\"lf\">{¬C, D}</span></td></tr><tr><td><span class=\"lf\">¬B ∨ ¬D</span></td><td>—</td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{¬B, ¬D}</span></td></tr><tr><td><span class=\"lf\">C</span></td><td>—</td><td>—</td><td>—</td><td>C4 = <span class=\"lf\">{C}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬¬A</span></td><td>—</td><td><span class=\"lf\">A</span></td><td>—</td><td>C5 = <span class=\"lf\">{A}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Cláusulas</th></tr></thead><tbody><tr><td><span class=\"lf\">(A → B) ∧ (C → D)</span></td><td><span class=\"lf\">(¬A ∨ B) ∧ (¬C ∨ D)</span></td><td>—</td><td>—</td><td>C1 = <span class=\"lf\">{¬A, B}</span>, C2 = <span class=\"lf\">{¬C, D}</span></td></tr><tr><td><span class=\"lf\">¬B ∨ ¬D</span></td><td>—</td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{¬B, ¬D}</span></td></tr><tr><td><span class=\"lf\">C</span></td><td>—</td><td>—</td><td>—</td><td>C4 = <span class=\"lf\">{C}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬¬A</span></td><td>—</td><td><span class=\"lf\">A</span></td><td>—</td><td>C5 = <span class=\"lf\">{A}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Clauses</th></tr></thead><tbody><tr><td><span class=\"lf\">(A → B) ∧ (C → D)</span></td><td><span class=\"lf\">(¬A ∨ B) ∧ (¬C ∨ D)</span></td><td>—</td><td>—</td><td>C1 = <span class=\"lf\">{¬A, B}</span>, C2 = <span class=\"lf\">{¬C, D}</span></td></tr><tr><td><span class=\"lf\">¬B ∨ ¬D</span></td><td>—</td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{¬B, ¬D}</span></td></tr><tr><td><span class=\"lf\">C</span></td><td>—</td><td>—</td><td>—</td><td>C4 = <span class=\"lf\">{C}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬¬A</span></td><td>—</td><td><span class=\"lf\">A</span></td><td>—</td><td>C5 = <span class=\"lf\">{A}</span></td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬A, B} , {¬C, D} , {¬B, ¬D} , {C} , {A} }</span></p>"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Refutació per resolució",
      "(a) Refutación por resolución",
      "(a) Refutation by resolution"
     ]
    },
    {
     "t": "p",
     "x": [
      "Resolució lineal començant per la clàusula de la conclusió negada:",
      "Resolución lineal empezando por la cláusula de la conclusión negada:",
      "Linear resolution starting with the clause of the negated conclusion:"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C5, C1) = {B}</span></li><li><span class=\"lf\">R2 = res(R1, C3) = {¬D}</span></li><li><span class=\"lf\">R3 = res(R2, C2) = {¬C}</span></li><li><span class=\"lf\">R4 = res(R3, C4) = □</span></li></ol>"
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 302 314\" width=\"302\" height=\"314\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"49.9\" y=\"14\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{A}</text><text class=\"lx-lb\" x=\"43.9\" y=\"32\" text-anchor=\"end\">C5</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"32\" text-anchor=\"middle\">{¬A, B}</text><text class=\"lx-lb\" x=\"254.6\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M210.6 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{B}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"90\" text-anchor=\"middle\">{¬B, ¬D}</text><text class=\"lx-lb\" x=\"258.4\" y=\"90\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M210.6 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{¬D}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"148\" text-anchor=\"middle\">{¬C, D}</text><text class=\"lx-lb\" x=\"254.6\" y=\"148\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M210.6 158 L82.4 188\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"188\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">{¬C}</text><text class=\"lx-lb\" x=\"40.0\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"188.1\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"206\" text-anchor=\"middle\">{C}</text><text class=\"lx-lb\" x=\"239.2\" y=\"206\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 216 L72.4 246\"></path><path class=\"lx-ln\" d=\"M210.6 216 L82.4 246\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"246\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"264\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"264\" text-anchor=\"end\">R4</text></svg>",
      "<svg viewBox=\"0 0 302 314\" width=\"302\" height=\"314\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"49.9\" y=\"14\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{A}</text><text class=\"lx-lb\" x=\"43.9\" y=\"32\" text-anchor=\"end\">C5</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"32\" text-anchor=\"middle\">{¬A, B}</text><text class=\"lx-lb\" x=\"254.6\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M210.6 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{B}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"90\" text-anchor=\"middle\">{¬B, ¬D}</text><text class=\"lx-lb\" x=\"258.4\" y=\"90\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M210.6 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{¬D}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"148\" text-anchor=\"middle\">{¬C, D}</text><text class=\"lx-lb\" x=\"254.6\" y=\"148\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M210.6 158 L82.4 188\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"188\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">{¬C}</text><text class=\"lx-lb\" x=\"40.0\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"188.1\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"206\" text-anchor=\"middle\">{C}</text><text class=\"lx-lb\" x=\"239.2\" y=\"206\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 216 L72.4 246\"></path><path class=\"lx-ln\" d=\"M210.6 216 L82.4 246\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"246\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"264\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"264\" text-anchor=\"end\">R4</text></svg>",
      "<svg viewBox=\"0 0 302 314\" width=\"302\" height=\"314\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"49.9\" y=\"14\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{A}</text><text class=\"lx-lb\" x=\"43.9\" y=\"32\" text-anchor=\"end\">C5</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"32\" text-anchor=\"middle\">{¬A, B}</text><text class=\"lx-lb\" x=\"254.6\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M210.6 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{B}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"90\" text-anchor=\"middle\">{¬B, ¬D}</text><text class=\"lx-lb\" x=\"258.4\" y=\"90\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M210.6 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{¬D}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"148\" text-anchor=\"middle\">{¬C, D}</text><text class=\"lx-lb\" x=\"254.6\" y=\"148\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M210.6 158 L82.4 188\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"188\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">{¬C}</text><text class=\"lx-lb\" x=\"40.0\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"188.1\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"206\" text-anchor=\"middle\">{C}</text><text class=\"lx-lb\" x=\"239.2\" y=\"206\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 216 L72.4 246\"></path><path class=\"lx-ln\" d=\"M210.6 216 L82.4 246\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"246\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"264\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"264\" text-anchor=\"end\">R4</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    },
    {
     "part": "b",
     "t": "h",
     "x": [
      "(b) Mètode alternatiu: deducció amb regles d'inferència",
      "(b) Método alternativo: deducción con reglas de inferencia",
      "(b) Alternative method: deduction with inference rules"
     ]
    },
    {
     "t": "p",
     "x": [
      "Partim de les premisses (línies 1 a 3) i apliquem regles d'inferència i equivalències del formulari fins a obtenir la conclusió:",
      "Partimos de las premisas (líneas 1 a 3) y aplicamos reglas de inferencia y equivalencias del formulario hasta obtener la conclusión:",
      "We start from the premises (lines 1 to 3) and apply inference rules and equivalences from the formula sheet until we obtain the conclusion:"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línia</th><th>fbf</th><th>Justificació</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(A → B) ∧ (C → D)</span></td><td>premissa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">¬B ∨ ¬D</span></td><td>premissa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">C</span></td><td>premissa</td></tr><tr><td>4</td><td><span class=\"lf\">A → B</span></td><td>simplificació (1)</td></tr><tr><td>5</td><td><span class=\"lf\">C → D</span></td><td>simplificació (1)</td></tr><tr><td>6</td><td><span class=\"lf\">D</span></td><td>modus ponens (3, 5)</td></tr><tr><td>7</td><td><span class=\"lf\">¬B</span></td><td>sil·logisme disjuntiu (2, 6)</td></tr><tr><td>8</td><td><span class=\"lf\">¬A</span></td><td>modus tollens (4, 7)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línea</th><th>fbf</th><th>Justificación</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(A → B) ∧ (C → D)</span></td><td>premisa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">¬B ∨ ¬D</span></td><td>premisa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">C</span></td><td>premisa</td></tr><tr><td>4</td><td><span class=\"lf\">A → B</span></td><td>simplificación (1)</td></tr><tr><td>5</td><td><span class=\"lf\">C → D</span></td><td>simplificación (1)</td></tr><tr><td>6</td><td><span class=\"lf\">D</span></td><td>modus ponens (3, 5)</td></tr><tr><td>7</td><td><span class=\"lf\">¬B</span></td><td>silogismo disyuntivo (2, 6)</td></tr><tr><td>8</td><td><span class=\"lf\">¬A</span></td><td>modus tollens (4, 7)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Line</th><th>fbf</th><th>Justification</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(A → B) ∧ (C → D)</span></td><td>premise</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">¬B ∨ ¬D</span></td><td>premise</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">C</span></td><td>premise</td></tr><tr><td>4</td><td><span class=\"lf\">A → B</span></td><td>simplification (1)</td></tr><tr><td>5</td><td><span class=\"lf\">C → D</span></td><td>simplification (1)</td></tr><tr><td>6</td><td><span class=\"lf\">D</span></td><td>modus ponens (3, 5)</td></tr><tr><td>7</td><td><span class=\"lf\">¬B</span></td><td>disjunctive syllogism (2, 6)</td></tr><tr><td>8</td><td><span class=\"lf\">¬A</span></td><td>modus tollens (4, 7)</td></tr></tbody></table></div>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-r8",
   "unit": "u3",
   "kind": "R",
   "level": "exam",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donades les següents proposicions o enunciats (CP0):",
      "Dadas las siguientes proposiciones o enunciados (CP0):",
      "Given the following propositions or statements (CP0):"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(P → Q) ∧ (R → ¬Q)</span> <i>(premissa)</i></li><li><span class=\"lf\">S ∨ R</span> <i>(premissa)</i></li><li><span class=\"lf\">S → T</span> <i>(premissa)</i></li><li><span class=\"lf\">¬T</span> <i>(premissa)</i></li><li><span class=\"lf\">¬P</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(P → Q) ∧ (R → ¬Q)</span> <i>(premisa)</i></li><li><span class=\"lf\">S ∨ R</span> <i>(premisa)</i></li><li><span class=\"lf\">S → T</span> <i>(premisa)</i></li><li><span class=\"lf\">¬T</span> <i>(premisa)</i></li><li><span class=\"lf\">¬P</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(P → Q) ∧ (R → ¬Q)</span> <i>(premise)</i></li><li><span class=\"lf\">S ∨ R</span> <i>(premise)</i></li><li><span class=\"lf\">S → T</span> <i>(premise)</i></li><li><span class=\"lf\">¬T</span> <i>(premise)</i></li><li><span class=\"lf\">¬P</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Demostreu mitjançant el mètode de resolució que el raonament és correcte. Detalleu els passos seguits en la prova per resolució.</li><li>Doneu un altre mètode alternatiu a l'(a) per a validar el raonament. Detalleu les regles d'inferència que heu emprat.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Demostrad mediante el método de resolución que el razonamiento es correcto. Detallad los pasos seguidos en la prueba por resolución.</li><li>Dad otro método alternativo al (a) para validar el razonamiento. Detallad las reglas de inferencia que habéis empleado.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Prove by the resolution method that the argument is correct. Detail the steps followed in the resolution proof.</li><li>Give another method, different from (a), to validate the argument. Detail the inference rules you have used.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Neguem la conclusió",
      "(a) Negamos la conclusión",
      "(a) We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Per refutació: afegim la negació de la conclusió, <span class=\"lf\">¬¬P</span>, i busquem la clàusula buida.</p>",
      "<p>Por refutación: añadimos la negación de la conclusión, <span class=\"lf\">¬¬P</span>, y buscamos la cláusula vacía.</p>",
      "<p>By refutation: we add the negation of the conclusion, <span class=\"lf\">¬¬P</span>, and look for the empty clause.</p>"
     ],
     "t": "html"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Forma clausal de les premisses i de la conclusió negada",
      "(a) Forma clausal de las premisas y de la conclusión negada",
      "(a) Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Redueix ¬</th><th>FNC</th><th>Clàusules</th></tr></thead><tbody><tr><td><span class=\"lf\">(P → Q) ∧ (R → ¬Q)</span></td><td><span class=\"lf\">(¬P ∨ Q) ∧ (¬R ∨ ¬Q)</span></td><td>—</td><td>—</td><td>C1 = <span class=\"lf\">{¬P, Q}</span>, C2 = <span class=\"lf\">{¬R, ¬Q}</span></td></tr><tr><td><span class=\"lf\">S ∨ R</span></td><td>—</td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{S, R}</span></td></tr><tr><td><span class=\"lf\">S → T</span></td><td><span class=\"lf\">¬S ∨ T</span></td><td>—</td><td>—</td><td>C4 = <span class=\"lf\">{¬S, T}</span></td></tr><tr><td><span class=\"lf\">¬T</span></td><td>—</td><td>—</td><td>—</td><td>C5 = <span class=\"lf\">{¬T}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬¬P</span></td><td>—</td><td><span class=\"lf\">P</span></td><td>—</td><td>C6 = <span class=\"lf\">{P}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Cláusulas</th></tr></thead><tbody><tr><td><span class=\"lf\">(P → Q) ∧ (R → ¬Q)</span></td><td><span class=\"lf\">(¬P ∨ Q) ∧ (¬R ∨ ¬Q)</span></td><td>—</td><td>—</td><td>C1 = <span class=\"lf\">{¬P, Q}</span>, C2 = <span class=\"lf\">{¬R, ¬Q}</span></td></tr><tr><td><span class=\"lf\">S ∨ R</span></td><td>—</td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{S, R}</span></td></tr><tr><td><span class=\"lf\">S → T</span></td><td><span class=\"lf\">¬S ∨ T</span></td><td>—</td><td>—</td><td>C4 = <span class=\"lf\">{¬S, T}</span></td></tr><tr><td><span class=\"lf\">¬T</span></td><td>—</td><td>—</td><td>—</td><td>C5 = <span class=\"lf\">{¬T}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬¬P</span></td><td>—</td><td><span class=\"lf\">P</span></td><td>—</td><td>C6 = <span class=\"lf\">{P}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Clauses</th></tr></thead><tbody><tr><td><span class=\"lf\">(P → Q) ∧ (R → ¬Q)</span></td><td><span class=\"lf\">(¬P ∨ Q) ∧ (¬R ∨ ¬Q)</span></td><td>—</td><td>—</td><td>C1 = <span class=\"lf\">{¬P, Q}</span>, C2 = <span class=\"lf\">{¬R, ¬Q}</span></td></tr><tr><td><span class=\"lf\">S ∨ R</span></td><td>—</td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{S, R}</span></td></tr><tr><td><span class=\"lf\">S → T</span></td><td><span class=\"lf\">¬S ∨ T</span></td><td>—</td><td>—</td><td>C4 = <span class=\"lf\">{¬S, T}</span></td></tr><tr><td><span class=\"lf\">¬T</span></td><td>—</td><td>—</td><td>—</td><td>C5 = <span class=\"lf\">{¬T}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬¬P</span></td><td>—</td><td><span class=\"lf\">P</span></td><td>—</td><td>C6 = <span class=\"lf\">{P}</span></td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬P, Q} , {¬R, ¬Q} , {S, R} , {¬S, T} , {¬T} , {P} }</span></p>"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Refutació per resolució",
      "(a) Refutación por resolución",
      "(a) Refutation by resolution"
     ]
    },
    {
     "t": "p",
     "x": [
      "Resolució lineal començant per la clàusula de la conclusió negada:",
      "Resolución lineal empezando por la cláusula de la conclusión negada:",
      "Linear resolution starting with the clause of the negated conclusion:"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C6, C1) = {Q}</span></li><li><span class=\"lf\">R2 = res(R1, C2) = {¬R}</span></li><li><span class=\"lf\">R3 = res(R2, C3) = {S}</span></li><li><span class=\"lf\">R4 = res(R3, C4) = {T}</span></li><li><span class=\"lf\">R5 = res(R4, C5) = □</span></li></ol>"
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 302 372\" width=\"302\" height=\"372\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"49.9\" y=\"14\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"43.9\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"32\" text-anchor=\"middle\">{¬P, Q}</text><text class=\"lx-lb\" x=\"254.6\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M210.6 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{Q}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"90\" text-anchor=\"middle\">{¬R, ¬Q}</text><text class=\"lx-lb\" x=\"258.4\" y=\"90\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M210.6 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{¬R}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"176.5\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"148\" text-anchor=\"middle\">{S, R}</text><text class=\"lx-lb\" x=\"250.7\" y=\"148\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M210.6 158 L82.4 188\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">{S}</text><text class=\"lx-lb\" x=\"43.9\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"188\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"206\" text-anchor=\"middle\">{¬S, T}</text><text class=\"lx-lb\" x=\"254.6\" y=\"206\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 216 L72.4 246\"></path><path class=\"lx-ln\" d=\"M210.6 216 L82.4 246\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"246\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"264\" text-anchor=\"middle\">{T}</text><text class=\"lx-lb\" x=\"43.9\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"246\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"264\" text-anchor=\"middle\">{¬T}</text><text class=\"lx-lb\" x=\"243.0\" y=\"264\" text-anchor=\"start\">C5</text><path class=\"lx-ln\" d=\"M72.4 274 L72.4 304\"></path><path class=\"lx-ln\" d=\"M210.6 274 L82.4 304\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"322\" text-anchor=\"end\">R5</text></svg>",
      "<svg viewBox=\"0 0 302 372\" width=\"302\" height=\"372\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"49.9\" y=\"14\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"43.9\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"32\" text-anchor=\"middle\">{¬P, Q}</text><text class=\"lx-lb\" x=\"254.6\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M210.6 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{Q}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"90\" text-anchor=\"middle\">{¬R, ¬Q}</text><text class=\"lx-lb\" x=\"258.4\" y=\"90\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M210.6 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{¬R}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"176.5\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"148\" text-anchor=\"middle\">{S, R}</text><text class=\"lx-lb\" x=\"250.7\" y=\"148\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M210.6 158 L82.4 188\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">{S}</text><text class=\"lx-lb\" x=\"43.9\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"188\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"206\" text-anchor=\"middle\">{¬S, T}</text><text class=\"lx-lb\" x=\"254.6\" y=\"206\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 216 L72.4 246\"></path><path class=\"lx-ln\" d=\"M210.6 216 L82.4 246\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"246\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"264\" text-anchor=\"middle\">{T}</text><text class=\"lx-lb\" x=\"43.9\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"246\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"264\" text-anchor=\"middle\">{¬T}</text><text class=\"lx-lb\" x=\"243.0\" y=\"264\" text-anchor=\"start\">C5</text><path class=\"lx-ln\" d=\"M72.4 274 L72.4 304\"></path><path class=\"lx-ln\" d=\"M210.6 274 L82.4 304\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"322\" text-anchor=\"end\">R5</text></svg>",
      "<svg viewBox=\"0 0 302 372\" width=\"302\" height=\"372\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"49.9\" y=\"14\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"43.9\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"32\" text-anchor=\"middle\">{¬P, Q}</text><text class=\"lx-lb\" x=\"254.6\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M210.6 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{Q}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"90\" text-anchor=\"middle\">{¬R, ¬Q}</text><text class=\"lx-lb\" x=\"258.4\" y=\"90\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M210.6 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{¬R}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"176.5\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"148\" text-anchor=\"middle\">{S, R}</text><text class=\"lx-lb\" x=\"250.7\" y=\"148\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M210.6 158 L82.4 188\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">{S}</text><text class=\"lx-lb\" x=\"43.9\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"188\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"206\" text-anchor=\"middle\">{¬S, T}</text><text class=\"lx-lb\" x=\"254.6\" y=\"206\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M72.4 216 L72.4 246\"></path><path class=\"lx-ln\" d=\"M210.6 216 L82.4 246\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"246\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"264\" text-anchor=\"middle\">{T}</text><text class=\"lx-lb\" x=\"43.9\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"246\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"210.6\" y=\"264\" text-anchor=\"middle\">{¬T}</text><text class=\"lx-lb\" x=\"243.0\" y=\"264\" text-anchor=\"start\">C5</text><path class=\"lx-ln\" d=\"M72.4 274 L72.4 304\"></path><path class=\"lx-ln\" d=\"M210.6 274 L82.4 304\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"322\" text-anchor=\"end\">R5</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    },
    {
     "part": "b",
     "t": "h",
     "x": [
      "(b) Mètode alternatiu: deducció amb regles d'inferència",
      "(b) Método alternativo: deducción con reglas de inferencia",
      "(b) Alternative method: deduction with inference rules"
     ]
    },
    {
     "t": "p",
     "x": [
      "Partim de les premisses (línies 1 a 4) i apliquem regles d'inferència i equivalències del formulari fins a obtenir la conclusió:",
      "Partimos de las premisas (líneas 1 a 4) y aplicamos reglas de inferencia y equivalencias del formulario hasta obtener la conclusión:",
      "We start from the premises (lines 1 to 4) and apply inference rules and equivalences from the formula sheet until we obtain the conclusion:"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línia</th><th>fbf</th><th>Justificació</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(P → Q) ∧ (R → ¬Q)</span></td><td>premissa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">S ∨ R</span></td><td>premissa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">S → T</span></td><td>premissa</td></tr><tr class=\"pr\"><td>4</td><td><span class=\"lf\">¬T</span></td><td>premissa</td></tr><tr><td>5</td><td><span class=\"lf\">¬S</span></td><td>modus tollens (3, 4)</td></tr><tr><td>6</td><td><span class=\"lf\">R</span></td><td>sil·logisme disjuntiu (2, 5)</td></tr><tr><td>7</td><td><span class=\"lf\">R → ¬Q</span></td><td>simplificació (1)</td></tr><tr><td>8</td><td><span class=\"lf\">¬Q</span></td><td>modus ponens (6, 7)</td></tr><tr><td>9</td><td><span class=\"lf\">P → Q</span></td><td>simplificació (1)</td></tr><tr><td>10</td><td><span class=\"lf\">¬P</span></td><td>modus tollens (9, 8)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línea</th><th>fbf</th><th>Justificación</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(P → Q) ∧ (R → ¬Q)</span></td><td>premisa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">S ∨ R</span></td><td>premisa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">S → T</span></td><td>premisa</td></tr><tr class=\"pr\"><td>4</td><td><span class=\"lf\">¬T</span></td><td>premisa</td></tr><tr><td>5</td><td><span class=\"lf\">¬S</span></td><td>modus tollens (3, 4)</td></tr><tr><td>6</td><td><span class=\"lf\">R</span></td><td>silogismo disyuntivo (2, 5)</td></tr><tr><td>7</td><td><span class=\"lf\">R → ¬Q</span></td><td>simplificación (1)</td></tr><tr><td>8</td><td><span class=\"lf\">¬Q</span></td><td>modus ponens (6, 7)</td></tr><tr><td>9</td><td><span class=\"lf\">P → Q</span></td><td>simplificación (1)</td></tr><tr><td>10</td><td><span class=\"lf\">¬P</span></td><td>modus tollens (9, 8)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Line</th><th>fbf</th><th>Justification</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(P → Q) ∧ (R → ¬Q)</span></td><td>premise</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">S ∨ R</span></td><td>premise</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">S → T</span></td><td>premise</td></tr><tr class=\"pr\"><td>4</td><td><span class=\"lf\">¬T</span></td><td>premise</td></tr><tr><td>5</td><td><span class=\"lf\">¬S</span></td><td>modus tollens (3, 4)</td></tr><tr><td>6</td><td><span class=\"lf\">R</span></td><td>disjunctive syllogism (2, 5)</td></tr><tr><td>7</td><td><span class=\"lf\">R → ¬Q</span></td><td>simplification (1)</td></tr><tr><td>8</td><td><span class=\"lf\">¬Q</span></td><td>modus ponens (6, 7)</td></tr><tr><td>9</td><td><span class=\"lf\">P → Q</span></td><td>simplification (1)</td></tr><tr><td>10</td><td><span class=\"lf\">¬P</span></td><td>modus tollens (9, 8)</td></tr></tbody></table></div>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-r9",
   "unit": "u3",
   "kind": "R",
   "level": "exam",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donades les següents proposicions o enunciats (CP0):",
      "Dadas las siguientes proposiciones o enunciados (CP0):",
      "Given the following propositions or statements (CP0):"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(A → B) ∧ (C → B)</span> <i>(premissa)</i></li><li><span class=\"lf\">A ∨ C</span> <i>(premissa)</i></li><li><span class=\"lf\">B → (D ∧ E)</span> <i>(premissa)</i></li><li><span class=\"lf\">E</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(A → B) ∧ (C → B)</span> <i>(premisa)</i></li><li><span class=\"lf\">A ∨ C</span> <i>(premisa)</i></li><li><span class=\"lf\">B → (D ∧ E)</span> <i>(premisa)</i></li><li><span class=\"lf\">E</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">(A → B) ∧ (C → B)</span> <i>(premise)</i></li><li><span class=\"lf\">A ∨ C</span> <i>(premise)</i></li><li><span class=\"lf\">B → (D ∧ E)</span> <i>(premise)</i></li><li><span class=\"lf\">E</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Demostreu mitjançant el mètode de resolució que el raonament és correcte. Detalleu els passos seguits en la prova per resolució.</li><li>Doneu un altre mètode alternatiu a l'(a) per a validar el raonament. Detalleu les regles d'inferència que heu emprat.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Demostrad mediante el método de resolución que el razonamiento es correcto. Detallad los pasos seguidos en la prueba por resolución.</li><li>Dad otro método alternativo al (a) para validar el razonamiento. Detallad las reglas de inferencia que habéis empleado.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Prove by the resolution method that the argument is correct. Detail the steps followed in the resolution proof.</li><li>Give another method, different from (a), to validate the argument. Detail the inference rules you have used.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Neguem la conclusió",
      "(a) Negamos la conclusión",
      "(a) We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Per refutació: afegim la negació de la conclusió, <span class=\"lf\">¬E</span>, i busquem la clàusula buida.</p>",
      "<p>Por refutación: añadimos la negación de la conclusión, <span class=\"lf\">¬E</span>, y buscamos la cláusula vacía.</p>",
      "<p>By refutation: we add the negation of the conclusion, <span class=\"lf\">¬E</span>, and look for the empty clause.</p>"
     ],
     "t": "html"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Forma clausal de les premisses i de la conclusió negada",
      "(a) Forma clausal de las premisas y de la conclusión negada",
      "(a) Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Redueix ¬</th><th>FNC</th><th>Clàusules</th></tr></thead><tbody><tr><td><span class=\"lf\">(A → B) ∧ (C → B)</span></td><td><span class=\"lf\">(¬A ∨ B) ∧ (¬C ∨ B)</span></td><td>—</td><td>—</td><td>C1 = <span class=\"lf\">{¬A, B}</span>, C2 = <span class=\"lf\">{¬C, B}</span></td></tr><tr><td><span class=\"lf\">A ∨ C</span></td><td>—</td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{A, C}</span></td></tr><tr><td><span class=\"lf\">B → (D ∧ E)</span></td><td><span class=\"lf\">¬B ∨ (D ∧ E)</span></td><td>—</td><td><span class=\"lf\">(¬B ∨ D) ∧ (¬B ∨ E)</span></td><td>C4 = <span class=\"lf\">{¬B, D}</span>, C5 = <span class=\"lf\">{¬B, E}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬E</span></td><td>—</td><td>—</td><td>—</td><td>C6 = <span class=\"lf\">{¬E}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Cláusulas</th></tr></thead><tbody><tr><td><span class=\"lf\">(A → B) ∧ (C → B)</span></td><td><span class=\"lf\">(¬A ∨ B) ∧ (¬C ∨ B)</span></td><td>—</td><td>—</td><td>C1 = <span class=\"lf\">{¬A, B}</span>, C2 = <span class=\"lf\">{¬C, B}</span></td></tr><tr><td><span class=\"lf\">A ∨ C</span></td><td>—</td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{A, C}</span></td></tr><tr><td><span class=\"lf\">B → (D ∧ E)</span></td><td><span class=\"lf\">¬B ∨ (D ∧ E)</span></td><td>—</td><td><span class=\"lf\">(¬B ∨ D) ∧ (¬B ∨ E)</span></td><td>C4 = <span class=\"lf\">{¬B, D}</span>, C5 = <span class=\"lf\">{¬B, E}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬E</span></td><td>—</td><td>—</td><td>—</td><td>C6 = <span class=\"lf\">{¬E}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Clauses</th></tr></thead><tbody><tr><td><span class=\"lf\">(A → B) ∧ (C → B)</span></td><td><span class=\"lf\">(¬A ∨ B) ∧ (¬C ∨ B)</span></td><td>—</td><td>—</td><td>C1 = <span class=\"lf\">{¬A, B}</span>, C2 = <span class=\"lf\">{¬C, B}</span></td></tr><tr><td><span class=\"lf\">A ∨ C</span></td><td>—</td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{A, C}</span></td></tr><tr><td><span class=\"lf\">B → (D ∧ E)</span></td><td><span class=\"lf\">¬B ∨ (D ∧ E)</span></td><td>—</td><td><span class=\"lf\">(¬B ∨ D) ∧ (¬B ∨ E)</span></td><td>C4 = <span class=\"lf\">{¬B, D}</span>, C5 = <span class=\"lf\">{¬B, E}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬E</span></td><td>—</td><td>—</td><td>—</td><td>C6 = <span class=\"lf\">{¬E}</span></td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬A, B} , {¬C, B} , {A, C} , {¬B, D} , {¬B, E} , {¬E} }</span></p>"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Refutació per resolució",
      "(a) Refutación por resolución",
      "(a) Refutation by resolution"
     ]
    },
    {
     "t": "p",
     "x": [
      "Resolució lineal començant per la clàusula de la conclusió negada:",
      "Resolución lineal empezando por la cláusula de la conclusión negada:",
      "Linear resolution starting with the clause of the negated conclusion:"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C6, C5) = {¬B}</span></li><li><span class=\"lf\">R2 = res(R1, C1) = {¬A}</span></li><li><span class=\"lf\">R3 = res(R2, C3) = {C}</span></li><li><span class=\"lf\">R4 = res(R3, C2) = {B}</span></li><li><span class=\"lf\">R5 = res(R4, R1) = □</span></li></ol>"
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 294 372\" width=\"294\" height=\"372\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬E}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{¬B, E}</text><text class=\"lx-lb\" x=\"250.7\" y=\"32\" text-anchor=\"start\">C5</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{¬B}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{¬A, B}</text><text class=\"lx-lb\" x=\"250.7\" y=\"90\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{¬A}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{A, C}</text><text class=\"lx-lb\" x=\"246.8\" y=\"148\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">{C}</text><text class=\"lx-lb\" x=\"43.9\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"188\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"206\" text-anchor=\"middle\">{¬C, B}</text><text class=\"lx-lb\" x=\"250.7\" y=\"206\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M72.4 216 L72.4 246\"></path><path class=\"lx-ln\" d=\"M206.8 216 L82.4 246\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"246\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"264\" text-anchor=\"middle\">{B}</text><text class=\"lx-lb\" x=\"43.9\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"180.3\" y=\"246\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"264\" text-anchor=\"middle\">{¬B}</text><text class=\"lx-lb\" x=\"239.2\" y=\"264\" text-anchor=\"start\">R1</text><path class=\"lx-ln\" d=\"M72.4 274 L72.4 304\"></path><path class=\"lx-ln\" d=\"M206.8 274 L82.4 304\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"322\" text-anchor=\"end\">R5</text></svg>",
      "<svg viewBox=\"0 0 294 372\" width=\"294\" height=\"372\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬E}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{¬B, E}</text><text class=\"lx-lb\" x=\"250.7\" y=\"32\" text-anchor=\"start\">C5</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{¬B}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{¬A, B}</text><text class=\"lx-lb\" x=\"250.7\" y=\"90\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{¬A}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{A, C}</text><text class=\"lx-lb\" x=\"246.8\" y=\"148\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">{C}</text><text class=\"lx-lb\" x=\"43.9\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"188\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"206\" text-anchor=\"middle\">{¬C, B}</text><text class=\"lx-lb\" x=\"250.7\" y=\"206\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M72.4 216 L72.4 246\"></path><path class=\"lx-ln\" d=\"M206.8 216 L82.4 246\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"246\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"264\" text-anchor=\"middle\">{B}</text><text class=\"lx-lb\" x=\"43.9\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"180.3\" y=\"246\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"264\" text-anchor=\"middle\">{¬B}</text><text class=\"lx-lb\" x=\"239.2\" y=\"264\" text-anchor=\"start\">R1</text><path class=\"lx-ln\" d=\"M72.4 274 L72.4 304\"></path><path class=\"lx-ln\" d=\"M206.8 274 L82.4 304\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"322\" text-anchor=\"end\">R5</text></svg>",
      "<svg viewBox=\"0 0 294 372\" width=\"294\" height=\"372\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"32\" text-anchor=\"middle\">{¬E}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"32\" text-anchor=\"middle\">{¬B, E}</text><text class=\"lx-lb\" x=\"250.7\" y=\"32\" text-anchor=\"start\">C5</text><path class=\"lx-ln\" d=\"M72.4 42 L72.4 72\"></path><path class=\"lx-ln\" d=\"M206.8 42 L82.4 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"90\" text-anchor=\"middle\">{¬B}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"90\" text-anchor=\"middle\">{¬A, B}</text><text class=\"lx-lb\" x=\"250.7\" y=\"90\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M72.4 100 L72.4 130\"></path><path class=\"lx-ln\" d=\"M206.8 100 L82.4 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"148\" text-anchor=\"middle\">{¬A}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"172.7\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"148\" text-anchor=\"middle\">{A, C}</text><text class=\"lx-lb\" x=\"246.8\" y=\"148\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M72.4 158 L72.4 188\"></path><path class=\"lx-ln\" d=\"M206.8 158 L82.4 188\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"206\" text-anchor=\"middle\">{C}</text><text class=\"lx-lb\" x=\"43.9\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"168.8\" y=\"188\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"206\" text-anchor=\"middle\">{¬C, B}</text><text class=\"lx-lb\" x=\"250.7\" y=\"206\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M72.4 216 L72.4 246\"></path><path class=\"lx-ln\" d=\"M206.8 216 L82.4 246\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"246\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"264\" text-anchor=\"middle\">{B}</text><text class=\"lx-lb\" x=\"43.9\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"180.3\" y=\"246\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"206.8\" y=\"264\" text-anchor=\"middle\">{¬B}</text><text class=\"lx-lb\" x=\"239.2\" y=\"264\" text-anchor=\"start\">R1</text><path class=\"lx-ln\" d=\"M72.4 274 L72.4 304\"></path><path class=\"lx-ln\" d=\"M206.8 274 L82.4 304\"></path><rect class=\"lx-bx-e\" x=\"57.6\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"72.4\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"51.6\" y=\"322\" text-anchor=\"end\">R5</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    },
    {
     "part": "b",
     "t": "h",
     "x": [
      "(b) Mètode alternatiu: deducció amb regles d'inferència",
      "(b) Método alternativo: deducción con reglas de inferencia",
      "(b) Alternative method: deduction with inference rules"
     ]
    },
    {
     "t": "p",
     "x": [
      "Partim de les premisses (línies 1 a 3) i apliquem regles d'inferència i equivalències del formulari fins a obtenir la conclusió:",
      "Partimos de las premisas (líneas 1 a 3) y aplicamos reglas de inferencia y equivalencias del formulario hasta obtener la conclusión:",
      "We start from the premises (lines 1 to 3) and apply inference rules and equivalences from the formula sheet until we obtain the conclusion:"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línia</th><th>fbf</th><th>Justificació</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(A → B) ∧ (C → B)</span></td><td>premissa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">A ∨ C</span></td><td>premissa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">B → (D ∧ E)</span></td><td>premissa</td></tr><tr><td>4</td><td><span class=\"lf\">(A ∨ C) → B</span></td><td>(A→C) ∧ (B→C) ⇔ (A∨B)→C (1)</td></tr><tr><td>5</td><td><span class=\"lf\">B</span></td><td>modus ponens (2, 4)</td></tr><tr><td>6</td><td><span class=\"lf\">D ∧ E</span></td><td>modus ponens (5, 3)</td></tr><tr><td>7</td><td><span class=\"lf\">E</span></td><td>simplificació (6)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línea</th><th>fbf</th><th>Justificación</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(A → B) ∧ (C → B)</span></td><td>premisa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">A ∨ C</span></td><td>premisa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">B → (D ∧ E)</span></td><td>premisa</td></tr><tr><td>4</td><td><span class=\"lf\">(A ∨ C) → B</span></td><td>(A→C) ∧ (B→C) ⇔ (A∨B)→C (1)</td></tr><tr><td>5</td><td><span class=\"lf\">B</span></td><td>modus ponens (2, 4)</td></tr><tr><td>6</td><td><span class=\"lf\">D ∧ E</span></td><td>modus ponens (5, 3)</td></tr><tr><td>7</td><td><span class=\"lf\">E</span></td><td>simplificación (6)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Line</th><th>fbf</th><th>Justification</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">(A → B) ∧ (C → B)</span></td><td>premise</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">A ∨ C</span></td><td>premise</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">B → (D ∧ E)</span></td><td>premise</td></tr><tr><td>4</td><td><span class=\"lf\">(A ∨ C) → B</span></td><td>(A→C) ∧ (B→C) ⇔ (A∨B)→C (1)</td></tr><tr><td>5</td><td><span class=\"lf\">B</span></td><td>modus ponens (2, 4)</td></tr><tr><td>6</td><td><span class=\"lf\">D ∧ E</span></td><td>modus ponens (5, 3)</td></tr><tr><td>7</td><td><span class=\"lf\">E</span></td><td>simplification (6)</td></tr></tbody></table></div>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-r10",
   "unit": "u3",
   "kind": "R",
   "level": "exam",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Donades les següents proposicions o enunciats (CP0):",
      "Dadas las siguientes proposiciones o enunciados (CP0):",
      "Given the following propositions or statements (CP0):"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">¬P → (Q ∨ R)</span> <i>(premissa)</i></li><li><span class=\"lf\">¬Q</span> <i>(premissa)</i></li><li><span class=\"lf\">R → P</span> <i>(premissa)</i></li><li><span class=\"lf\">P</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">¬P → (Q ∨ R)</span> <i>(premisa)</i></li><li><span class=\"lf\">¬Q</span> <i>(premisa)</i></li><li><span class=\"lf\">R → P</span> <i>(premisa)</i></li><li><span class=\"lf\">P</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">¬P → (Q ∨ R)</span> <i>(premise)</i></li><li><span class=\"lf\">¬Q</span> <i>(premise)</i></li><li><span class=\"lf\">R → P</span> <i>(premise)</i></li><li><span class=\"lf\">P</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Demostreu mitjançant el mètode de resolució que el raonament és correcte. Detalleu els passos seguits en la prova per resolució.</li><li>Doneu un altre mètode alternatiu a l'(a) per a validar el raonament. Detalleu les regles d'inferència que heu emprat.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Demostrad mediante el método de resolución que el razonamiento es correcto. Detallad los pasos seguidos en la prueba por resolución.</li><li>Dad otro método alternativo al (a) para validar el razonamiento. Detallad las reglas de inferencia que habéis empleado.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Prove by the resolution method that the argument is correct. Detail the steps followed in the resolution proof.</li><li>Give another method, different from (a), to validate the argument. Detail the inference rules you have used.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Neguem la conclusió",
      "(a) Negamos la conclusión",
      "(a) We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Per refutació: afegim la negació de la conclusió, <span class=\"lf\">¬P</span>, i busquem la clàusula buida.</p>",
      "<p>Por refutación: añadimos la negación de la conclusión, <span class=\"lf\">¬P</span>, y buscamos la cláusula vacía.</p>",
      "<p>By refutation: we add the negation of the conclusion, <span class=\"lf\">¬P</span>, and look for the empty clause.</p>"
     ],
     "t": "html"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Forma clausal de les premisses i de la conclusió negada",
      "(a) Forma clausal de las premisas y de la conclusión negada",
      "(a) Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Redueix ¬</th><th>FNC</th><th>Clàusules</th></tr></thead><tbody><tr><td><span class=\"lf\">¬P → (Q ∨ R)</span></td><td><span class=\"lf\">¬¬P ∨ Q ∨ R</span></td><td><span class=\"lf\">P ∨ Q ∨ R</span></td><td>—</td><td>C1 = <span class=\"lf\">{P, Q, R}</span></td></tr><tr><td><span class=\"lf\">¬Q</span></td><td>—</td><td>—</td><td>—</td><td>C2 = <span class=\"lf\">{¬Q}</span></td></tr><tr><td><span class=\"lf\">R → P</span></td><td><span class=\"lf\">¬R ∨ P</span></td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{¬R, P}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬P</span></td><td>—</td><td>—</td><td>—</td><td>C4 = <span class=\"lf\">{¬P}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Cláusulas</th></tr></thead><tbody><tr><td><span class=\"lf\">¬P → (Q ∨ R)</span></td><td><span class=\"lf\">¬¬P ∨ Q ∨ R</span></td><td><span class=\"lf\">P ∨ Q ∨ R</span></td><td>—</td><td>C1 = <span class=\"lf\">{P, Q, R}</span></td></tr><tr><td><span class=\"lf\">¬Q</span></td><td>—</td><td>—</td><td>—</td><td>C2 = <span class=\"lf\">{¬Q}</span></td></tr><tr><td><span class=\"lf\">R → P</span></td><td><span class=\"lf\">¬R ∨ P</span></td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{¬R, P}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬P</span></td><td>—</td><td>—</td><td>—</td><td>C4 = <span class=\"lf\">{¬P}</span></td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-cf\"><thead><tr><th>fbf</th><th>Elimina →</th><th>Reduce ¬</th><th>FNC</th><th>Clauses</th></tr></thead><tbody><tr><td><span class=\"lf\">¬P → (Q ∨ R)</span></td><td><span class=\"lf\">¬¬P ∨ Q ∨ R</span></td><td><span class=\"lf\">P ∨ Q ∨ R</span></td><td>—</td><td>C1 = <span class=\"lf\">{P, Q, R}</span></td></tr><tr><td><span class=\"lf\">¬Q</span></td><td>—</td><td>—</td><td>—</td><td>C2 = <span class=\"lf\">{¬Q}</span></td></tr><tr><td><span class=\"lf\">R → P</span></td><td><span class=\"lf\">¬R ∨ P</span></td><td>—</td><td>—</td><td>C3 = <span class=\"lf\">{¬R, P}</span></td></tr><tr class=\"neg\"><td><span class=\"lf\">¬P</span></td><td>—</td><td>—</td><td>—</td><td>C4 = <span class=\"lf\">{¬P}</span></td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {P, Q, R} , {¬Q} , {¬R, P} , {¬P} }</span></p>"
    },
    {
     "part": "a",
     "t": "h",
     "x": [
      "(a) Refutació per resolució",
      "(a) Refutación por resolución",
      "(a) Refutation by resolution"
     ]
    },
    {
     "t": "p",
     "x": [
      "Resolució lineal començant per la clàusula de la conclusió negada:",
      "Resolución lineal empezando por la cláusula de la conclusión negada:",
      "Linear resolution starting with the clause of the negated conclusion:"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C4, C1) = {Q, R}</span></li><li><span class=\"lf\">R2 = res(R1, C2) = {R}</span></li><li><span class=\"lf\">R3 = res(R2, C3) = {P}</span></li><li><span class=\"lf\">R4 = res(R3, C4) = □</span></li></ol>"
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 325 314\" width=\"325\" height=\"314\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"53.7\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"32\" text-anchor=\"middle\">{¬P}</text><text class=\"lx-lb\" x=\"47.7\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"14\" width=\"91.3\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"229.8\" y=\"32\" text-anchor=\"middle\">{P, Q, R}</text><text class=\"lx-lb\" x=\"281.5\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M80.1 42 L80.1 72\"></path><path class=\"lx-ln\" d=\"M229.8 42 L90.1 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"90\" text-anchor=\"middle\">{Q, R}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"203.4\" y=\"72\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"229.8\" y=\"90\" text-anchor=\"middle\">{¬Q}</text><text class=\"lx-lb\" x=\"262.2\" y=\"90\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M80.1 100 L80.1 130\"></path><path class=\"lx-ln\" d=\"M229.8 100 L90.1 130\"></path><rect class=\"lx-bx\" x=\"57.5\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"148\" text-anchor=\"middle\">{R}</text><text class=\"lx-lb\" x=\"51.5\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"191.9\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"229.8\" y=\"148\" text-anchor=\"middle\">{¬R, P}</text><text class=\"lx-lb\" x=\"273.8\" y=\"148\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M80.1 158 L80.1 188\"></path><path class=\"lx-ln\" d=\"M229.8 158 L90.1 188\"></path><rect class=\"lx-bx\" x=\"57.5\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"206\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"51.5\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"203.4\" y=\"188\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"229.8\" y=\"206\" text-anchor=\"middle\">{¬P}</text><text class=\"lx-lb\" x=\"262.2\" y=\"206\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M80.1 216 L80.1 246\"></path><path class=\"lx-ln\" d=\"M229.8 216 L90.1 246\"></path><rect class=\"lx-bx-e\" x=\"65.2\" y=\"246\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"264\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"59.2\" y=\"264\" text-anchor=\"end\">R4</text></svg>",
      "<svg viewBox=\"0 0 325 314\" width=\"325\" height=\"314\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"53.7\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"32\" text-anchor=\"middle\">{¬P}</text><text class=\"lx-lb\" x=\"47.7\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"14\" width=\"91.3\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"229.8\" y=\"32\" text-anchor=\"middle\">{P, Q, R}</text><text class=\"lx-lb\" x=\"281.5\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M80.1 42 L80.1 72\"></path><path class=\"lx-ln\" d=\"M229.8 42 L90.1 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"90\" text-anchor=\"middle\">{Q, R}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"203.4\" y=\"72\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"229.8\" y=\"90\" text-anchor=\"middle\">{¬Q}</text><text class=\"lx-lb\" x=\"262.2\" y=\"90\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M80.1 100 L80.1 130\"></path><path class=\"lx-ln\" d=\"M229.8 100 L90.1 130\"></path><rect class=\"lx-bx\" x=\"57.5\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"148\" text-anchor=\"middle\">{R}</text><text class=\"lx-lb\" x=\"51.5\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"191.9\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"229.8\" y=\"148\" text-anchor=\"middle\">{¬R, P}</text><text class=\"lx-lb\" x=\"273.8\" y=\"148\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M80.1 158 L80.1 188\"></path><path class=\"lx-ln\" d=\"M229.8 158 L90.1 188\"></path><rect class=\"lx-bx\" x=\"57.5\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"206\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"51.5\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"203.4\" y=\"188\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"229.8\" y=\"206\" text-anchor=\"middle\">{¬P}</text><text class=\"lx-lb\" x=\"262.2\" y=\"206\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M80.1 216 L80.1 246\"></path><path class=\"lx-ln\" d=\"M229.8 216 L90.1 246\"></path><rect class=\"lx-bx-e\" x=\"65.2\" y=\"246\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"264\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"59.2\" y=\"264\" text-anchor=\"end\">R4</text></svg>",
      "<svg viewBox=\"0 0 325 314\" width=\"325\" height=\"314\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"53.7\" y=\"14\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"32\" text-anchor=\"middle\">{¬P}</text><text class=\"lx-lb\" x=\"47.7\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"14\" width=\"91.3\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"229.8\" y=\"32\" text-anchor=\"middle\">{P, Q, R}</text><text class=\"lx-lb\" x=\"281.5\" y=\"32\" text-anchor=\"start\">C1</text><path class=\"lx-ln\" d=\"M80.1 42 L80.1 72\"></path><path class=\"lx-ln\" d=\"M229.8 42 L90.1 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"90\" text-anchor=\"middle\">{Q, R}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"203.4\" y=\"72\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"229.8\" y=\"90\" text-anchor=\"middle\">{¬Q}</text><text class=\"lx-lb\" x=\"262.2\" y=\"90\" text-anchor=\"start\">C2</text><path class=\"lx-ln\" d=\"M80.1 100 L80.1 130\"></path><path class=\"lx-ln\" d=\"M229.8 100 L90.1 130\"></path><rect class=\"lx-bx\" x=\"57.5\" y=\"130\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"148\" text-anchor=\"middle\">{R}</text><text class=\"lx-lb\" x=\"51.5\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"191.9\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"229.8\" y=\"148\" text-anchor=\"middle\">{¬R, P}</text><text class=\"lx-lb\" x=\"273.8\" y=\"148\" text-anchor=\"start\">C3</text><path class=\"lx-ln\" d=\"M80.1 158 L80.1 188\"></path><path class=\"lx-ln\" d=\"M229.8 158 L90.1 188\"></path><rect class=\"lx-bx\" x=\"57.5\" y=\"188\" width=\"45.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"206\" text-anchor=\"middle\">{P}</text><text class=\"lx-lb\" x=\"51.5\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"203.4\" y=\"188\" width=\"52.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"229.8\" y=\"206\" text-anchor=\"middle\">{¬P}</text><text class=\"lx-lb\" x=\"262.2\" y=\"206\" text-anchor=\"start\">C4</text><path class=\"lx-ln\" d=\"M80.1 216 L80.1 246\"></path><path class=\"lx-ln\" d=\"M229.8 216 L90.1 246\"></path><rect class=\"lx-bx-e\" x=\"65.2\" y=\"246\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"264\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"59.2\" y=\"264\" text-anchor=\"end\">R4</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    },
    {
     "part": "b",
     "t": "h",
     "x": [
      "(b) Mètode alternatiu: deducció amb regles d'inferència",
      "(b) Método alternativo: deducción con reglas de inferencia",
      "(b) Alternative method: deduction with inference rules"
     ]
    },
    {
     "t": "p",
     "x": [
      "Partim de les premisses (línies 1 a 3) i apliquem regles d'inferència i equivalències del formulari fins a obtenir la conclusió:",
      "Partimos de las premisas (líneas 1 a 3) y aplicamos reglas de inferencia y equivalencias del formulario hasta obtener la conclusión:",
      "We start from the premises (lines 1 to 3) and apply inference rules and equivalences from the formula sheet until we obtain the conclusion:"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línia</th><th>fbf</th><th>Justificació</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">¬P → (Q ∨ R)</span></td><td>premissa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">¬Q</span></td><td>premissa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">R → P</span></td><td>premissa</td></tr><tr><td>4</td><td><span class=\"lf\">P ∨ Q ∨ R</span></td><td>implicació + doble negació (1)</td></tr><tr><td>5</td><td><span class=\"lf\">P ∨ R</span></td><td>sil·logisme disjuntiu (4, 2)</td></tr><tr><td>6</td><td><span class=\"lf\">¬P → R</span></td><td>implicació (5)</td></tr><tr><td>7</td><td><span class=\"lf\">¬P → P</span></td><td>sil·logisme hipotètic (6, 3)</td></tr><tr><td>8</td><td><span class=\"lf\">¬¬P ∨ P</span></td><td>implicació (7)</td></tr><tr><td>9</td><td><span class=\"lf\">P ∨ P</span></td><td>doble negació (8)</td></tr><tr><td>10</td><td><span class=\"lf\">P</span></td><td>idempotència (9)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Línea</th><th>fbf</th><th>Justificación</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">¬P → (Q ∨ R)</span></td><td>premisa</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">¬Q</span></td><td>premisa</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">R → P</span></td><td>premisa</td></tr><tr><td>4</td><td><span class=\"lf\">P ∨ Q ∨ R</span></td><td>implicación + doble negación (1)</td></tr><tr><td>5</td><td><span class=\"lf\">P ∨ R</span></td><td>silogismo disyuntivo (4, 2)</td></tr><tr><td>6</td><td><span class=\"lf\">¬P → R</span></td><td>implicación (5)</td></tr><tr><td>7</td><td><span class=\"lf\">¬P → P</span></td><td>silogismo hipotético (6, 3)</td></tr><tr><td>8</td><td><span class=\"lf\">¬¬P ∨ P</span></td><td>implicación (7)</td></tr><tr><td>9</td><td><span class=\"lf\">P ∨ P</span></td><td>doble negación (8)</td></tr><tr><td>10</td><td><span class=\"lf\">P</span></td><td>idempotencia (9)</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-nd\"><thead><tr><th>Line</th><th>fbf</th><th>Justification</th></tr></thead><tbody><tr class=\"pr\"><td>1</td><td><span class=\"lf\">¬P → (Q ∨ R)</span></td><td>premise</td></tr><tr class=\"pr\"><td>2</td><td><span class=\"lf\">¬Q</span></td><td>premise</td></tr><tr class=\"pr\"><td>3</td><td><span class=\"lf\">R → P</span></td><td>premise</td></tr><tr><td>4</td><td><span class=\"lf\">P ∨ Q ∨ R</span></td><td>implication + double negation (1)</td></tr><tr><td>5</td><td><span class=\"lf\">P ∨ R</span></td><td>disjunctive syllogism (4, 2)</td></tr><tr><td>6</td><td><span class=\"lf\">¬P → R</span></td><td>implication (5)</td></tr><tr><td>7</td><td><span class=\"lf\">¬P → P</span></td><td>hypothetical syllogism (6, 3)</td></tr><tr><td>8</td><td><span class=\"lf\">¬¬P ∨ P</span></td><td>implication (7)</td></tr><tr><td>9</td><td><span class=\"lf\">P ∨ P</span></td><td>double negation (8)</td></tr><tr><td>10</td><td><span class=\"lf\">P</span></td><td>idempotence (9)</td></tr></tbody></table></div>"
     ],
     "t": "html"
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-e1",
   "unit": "u5",
   "kind": "E",
   "level": "exam",
   "type": "open",
   "src": "exam",
   "srcName": [
    "Treball d'autoavaluació · Exercici 1",
    "Trabajo de autoevaluación · Ejercicio 1",
    "Self-assessment work · Exercise 1"
   ],
   "title": [
    "Els llibres i els crítics",
    "Los libros y los críticos",
    "Books and critics"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Preneu els símbols del llenguatge de la lògica de predicats per a representar els següents enunciats. Doneu els símbols de les constants i variables utilitzades, així com cadascun dels predicats, abans de fer la representació. Tot seguit, doneu la representació i després **la seva forma clausal**.",
      "Tomad los símbolos del lenguaje de la lógica de predicados para representar los siguientes enunciados. Dad los símbolos de las constantes y variables utilizadas, así como cada uno de los predicados, antes de hacer la representación. A continuación, dad la representación y después **su forma clausal**.",
      "Use the symbols of the language of predicate logic to represent the following statements. Give the symbols of the constants and variables used, as well as each of the predicates, before representing them. Then give the representation and afterwards **its clausal form**."
     ]
    },
    {
     "h": [
      "<p><b>Predicats:</b> <span class=\"lf\">P(x)</span>: x és una persona · <span class=\"lf\">B(x)</span>: x és un llibre · <span class=\"lf\">C(x)</span>: x és un crític literari · <span class=\"lf\">L(x,y)</span>: x llegeix y · <span class=\"lf\">R(x,y)</span>: x recomana y</p>",
      "<p><b>Predicados:</b> <span class=\"lf\">P(x)</span>: x es una persona · <span class=\"lf\">B(x)</span>: x es un libro · <span class=\"lf\">C(x)</span>: x es un crítico literario · <span class=\"lf\">L(x,y)</span>: x lee y · <span class=\"lf\">R(x,y)</span>: x recomienda y</p>",
      "<p><b>Predicates:</b> <span class=\"lf\">P(x)</span>: x is a person · <span class=\"lf\">B(x)</span>: x is a book · <span class=\"lf\">C(x)</span>: x is a literary critic · <span class=\"lf\">L(x,y)</span>: x reads y · <span class=\"lf\">R(x,y)</span>: x recommends y</p>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<p><b>Funcions:</b> <span class=\"lf\">m(x)</span>: el llibre més llegit de l'any x</p>",
      "<p><b>Funciones:</b> <span class=\"lf\">m(x)</span>: el libro más leído del año x</p>",
      "<p><b>Functions:</b> <span class=\"lf\">m(x)</span>: the most-read book of year x</p>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>En Pau llegeix (tots) els llibres que li recomana en Pere.</li><li>El Codi Da Vinci és un llibre que llegeix en Pere i també en Pau.</li><li>Hi ha crítics literaris que recomanen llibres que no han llegit.</li><li>Hi ha persones que únicament llegeixen llibres recomanats per algun crític.</li><li>En Pau llegeix el llibre més llegit de l'any 2010.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Pau lee (todos) los libros que le recomienda Pere.</li><li>El código Da Vinci es un libro que lee Pere y también Pau.</li><li>Hay críticos literarios que recomiendan libros que no han leído.</li><li>Hay personas que únicamente leen libros recomendados por algún crítico.</li><li>Pau lee el libro más leído del año 2010.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Pau reads (all) the books that Pere recommends to him.</li><li>The Da Vinci Code is a book that Pere reads and so does Pau.</li><li>There are literary critics who recommend books they have not read.</li><li>There are people who only read books recommended by some critic.</li><li>Pau reads the most-read book of the year 2010.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Símbols",
      "Símbolos",
      "Symbols"
     ]
    },
    {
     "t": "p",
     "x": [
      "**Constants:**",
      "**Constantes:**",
      "**Constants:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">a</span></td><td>en Pau</td></tr><tr><td><span class=\"lf\">b</span></td><td>en Pere</td></tr><tr><td><span class=\"lf\">c</span></td><td>el Codi Da Vinci</td></tr><tr><td><span class=\"lf\">2010</span></td><td>l'any 2010</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">a</span></td><td>Pau</td></tr><tr><td><span class=\"lf\">b</span></td><td>Pere</td></tr><tr><td><span class=\"lf\">c</span></td><td>El código Da Vinci</td></tr><tr><td><span class=\"lf\">2010</span></td><td>el año 2010</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">a</span></td><td>Pau</td></tr><tr><td><span class=\"lf\">b</span></td><td>Pere</td></tr><tr><td><span class=\"lf\">c</span></td><td>The Da Vinci Code</td></tr><tr><td><span class=\"lf\">2010</span></td><td>the year 2010</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": "**Variables:** x, y, z, …"
    },
    {
     "t": "p",
     "x": [
      "**Predicats:**",
      "**Predicados:**",
      "**Predicates:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">P(x)</span></td><td>x és una persona</td></tr><tr><td><span class=\"lf\">B(x)</span></td><td>x és un llibre</td></tr><tr><td><span class=\"lf\">C(x)</span></td><td>x és un crític literari</td></tr><tr><td><span class=\"lf\">L(x,y)</span></td><td>x llegeix y</td></tr><tr><td><span class=\"lf\">R(x,y)</span></td><td>x recomana y</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">P(x)</span></td><td>x es una persona</td></tr><tr><td><span class=\"lf\">B(x)</span></td><td>x es un libro</td></tr><tr><td><span class=\"lf\">C(x)</span></td><td>x es un crítico literario</td></tr><tr><td><span class=\"lf\">L(x,y)</span></td><td>x lee y</td></tr><tr><td><span class=\"lf\">R(x,y)</span></td><td>x recomienda y</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">P(x)</span></td><td>x is a person</td></tr><tr><td><span class=\"lf\">B(x)</span></td><td>x is a book</td></tr><tr><td><span class=\"lf\">C(x)</span></td><td>x is a literary critic</td></tr><tr><td><span class=\"lf\">L(x,y)</span></td><td>x reads y</td></tr><tr><td><span class=\"lf\">R(x,y)</span></td><td>x recommends y</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "**Funcions:**",
      "**Funciones:**",
      "**Functions:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">m(x)</span></td><td>el llibre més llegit de l'any x</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">m(x)</span></td><td>el libro más leído del año x</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">m(x)</span></td><td>the most-read book of year x</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(a) En Pau llegeix (tots) els llibres que li recomana en Pere.",
      "(a) Pau lee (todos) los libros que le recomienda Pere.",
      "(a) Pau reads (all) the books that Pere recommends to him."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀x ((B(x) ∧ R(b,x)) → L(a,x))</span></p>"
    },
    {
     "t": "note",
     "x": [
      "«Tots els X que …» és un ∀ amb implicació; les condicions (ser llibre i que el recomani en Pere) van juntes a l'antecedent.",
      "«Todos los X que …» es un ∀ con implicación; las condiciones (ser libro y que lo recomiende Pere) van juntas en el antecedente.",
      "“All the X that …” is a ∀ with an implication; the conditions (being a book and being recommended by Pere) go together in the antecedent."
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬B(x), ¬R(b,x), L(a,x)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x (¬(B(x) ∧ R(b,x)) ∨ L(a,x))</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x (¬B(x) ∨ ¬R(b,x) ∨ L(a,x))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬B(x) ∨ ¬R(b,x) ∨ L(a,x)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬B(x), ¬R(b,x), L(a,x)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x (¬(B(x) ∧ R(b,x)) ∨ L(a,x))</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x (¬B(x) ∨ ¬R(b,x) ∨ L(a,x))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬B(x) ∨ ¬R(b,x) ∨ L(a,x)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬B(x), ¬R(b,x), L(a,x)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x (¬(B(x) ∧ R(b,x)) ∨ L(a,x))</span></li><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x (¬B(x) ∨ ¬R(b,x) ∨ L(a,x))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬B(x) ∨ ¬R(b,x) ∨ L(a,x)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬B(x), ¬R(b,x), L(a,x)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(b) El Codi Da Vinci és un llibre que llegeix en Pere i també en Pau.",
      "(b) El código Da Vinci es un libro que lee Pere y también Pau.",
      "(b) The Da Vinci Code is a book that Pere reads and so does Pau."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">B(c) ∧ L(b,c) ∧ L(a,c)</span></p>"
    },
    {
     "t": "note",
     "x": [
      "No hi ha cap quantificador: tot són constants.",
      "No hay ningún cuantificador: todo son constantes.",
      "There is no quantifier: everything is constants."
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {B(c)} , {L(b,c)} , {L(a,c)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {B(c)} , {L(b,c)} , {L(a,c)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {B(c)} , {L(b,c)} , {L(a,c)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {B(c)} , {L(b,c)} , {L(a,c)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(c) Hi ha crítics literaris que recomanen llibres que no han llegit.",
      "(c) Hay críticos literarios que recomiendan libros que no han leído.",
      "(c) There are literary critics who recommend books they have not read."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∃x (C(x) ∧ ∃y (B(y) ∧ R(x,y) ∧ ¬L(x,y)))</span></p>"
    },
    {
     "t": "note",
     "x": [
      "Dos «hi ha»: el crític i el llibre. Amb ∃ sempre conjunció.",
      "Dos «hay»: el crítico y el libro. Con ∃ siempre conjunción.",
      "Two “there are”: the critic and the book. With ∃ always a conjunction."
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {C(k)} , {B(k1)} , {R(k,k1)} , {¬L(k,k1)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemitzar: x → k (constant de Skolem); y → k1 (constant de Skolem)<br><span class=\"lf\">C(k) ∧ B(k1) ∧ R(k,k1) ∧ ¬L(k,k1)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {C(k)} , {B(k1)} , {R(k,k1)} , {¬L(k,k1)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemizar: x → k (constante de Skolem); y → k1 (constante de Skolem)<br><span class=\"lf\">C(k) ∧ B(k1) ∧ R(k,k1) ∧ ¬L(k,k1)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {C(k)} , {B(k1)} , {R(k,k1)} , {¬L(k,k1)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemise: x → k (Skolem constant); y → k1 (Skolem constant)<br><span class=\"lf\">C(k) ∧ B(k1) ∧ R(k,k1) ∧ ¬L(k,k1)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {C(k)} , {B(k1)} , {R(k,k1)} , {¬L(k,k1)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(d) Hi ha persones que únicament llegeixen llibres recomanats per algun crític.",
      "(d) Hay personas que únicamente leen libros recomendados por algún crítico.",
      "(d) There are people who only read books recommended by some critic."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∃x (P(x) ∧ ∀y (L(x,y) → (B(y) ∧ ∃z (C(z) ∧ R(z,y)))))</span></p>"
    },
    {
     "t": "note",
     "x": [
      "«Únicament llegeix llibres recomanats» vol dir: tot el que llegeix és un llibre recomanat. És un ∀y amb implicació dins de l'∃x. L'∃z queda dins del ∀y: a l'skolemitzar, surt una funció de y.",
      "«Únicamente lee libros recomendados» quiere decir: todo lo que lee es un libro recomendado. Es un ∀y con implicación dentro del ∃x. El ∃z queda dentro del ∀y: al skolemizar, sale una función de y.",
      "“Only reads recommended books” means: everything they read is a recommended book. It is a ∀y with an implication inside the ∃x. The ∃z stays inside the ∀y: when Skolemising, a function of y comes out."
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {P(k)} , {¬L(k,y), B(y)} , {¬L(k,y), C(f(y))} , {¬L(k,y), R(f(y),y)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∃x (P(x) ∧ ∀y (¬L(x,y) ∨ (B(y) ∧ ∃z (C(z) ∧ R(z,y)))))</span></li><li><b>4.</b> Skolemitzar: x → k (constant de Skolem); z → f(y) (funció de Skolem de y)<br><span class=\"lf\">P(k) ∧ ∀y (¬L(k,y) ∨ (B(y) ∧ C(f(y)) ∧ R(f(y),y)))</span></li><li><b>5.</b> Universals a l'esquerra: <span class=\"lf\">∀y (P(k) ∧ (¬L(k,y) ∨ (B(y) ∧ C(f(y)) ∧ R(f(y),y))))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">P(k) ∧ (¬L(k,y) ∨ (B(y) ∧ C(f(y)) ∧ R(f(y),y)))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">P(k) ∧ (¬L(k,y) ∨ B(y)) ∧ (¬L(k,y) ∨ C(f(y))) ∧ (¬L(k,y) ∨ R(f(y),y))</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {P(k)} , {¬L(k,y), B(y)} , {¬L(k,y), C(f(y))} , {¬L(k,y), R(f(y),y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∃x (P(x) ∧ ∀y (¬L(x,y) ∨ (B(y) ∧ ∃z (C(z) ∧ R(z,y)))))</span></li><li><b>4.</b> Skolemizar: x → k (constante de Skolem); z → f(y) (función de Skolem de y)<br><span class=\"lf\">P(k) ∧ ∀y (¬L(k,y) ∨ (B(y) ∧ C(f(y)) ∧ R(f(y),y)))</span></li><li><b>5.</b> Universales a la izquierda: <span class=\"lf\">∀y (P(k) ∧ (¬L(k,y) ∨ (B(y) ∧ C(f(y)) ∧ R(f(y),y))))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">P(k) ∧ (¬L(k,y) ∨ (B(y) ∧ C(f(y)) ∧ R(f(y),y)))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">P(k) ∧ (¬L(k,y) ∨ B(y)) ∧ (¬L(k,y) ∨ C(f(y))) ∧ (¬L(k,y) ∨ R(f(y),y))</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {P(k)} , {¬L(k,y), B(y)} , {¬L(k,y), C(f(y))} , {¬L(k,y), R(f(y),y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∃x (P(x) ∧ ∀y (¬L(x,y) ∨ (B(y) ∧ ∃z (C(z) ∧ R(z,y)))))</span></li><li><b>4.</b> Skolemise: x → k (Skolem constant); z → f(y) (Skolem function of y)<br><span class=\"lf\">P(k) ∧ ∀y (¬L(k,y) ∨ (B(y) ∧ C(f(y)) ∧ R(f(y),y)))</span></li><li><b>5.</b> Universals to the left: <span class=\"lf\">∀y (P(k) ∧ (¬L(k,y) ∨ (B(y) ∧ C(f(y)) ∧ R(f(y),y))))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">P(k) ∧ (¬L(k,y) ∨ (B(y) ∧ C(f(y)) ∧ R(f(y),y)))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">P(k) ∧ (¬L(k,y) ∨ B(y)) ∧ (¬L(k,y) ∨ C(f(y))) ∧ (¬L(k,y) ∨ R(f(y),y))</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {P(k)} , {¬L(k,y), B(y)} , {¬L(k,y), C(f(y))} , {¬L(k,y), R(f(y),y)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(e) En Pau llegeix el llibre més llegit de l'any 2010.",
      "(e) Pau lee el libro más leído del año 2010.",
      "(e) Pau reads the most-read book of the year 2010."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">L(a,m(2010))</span></p>"
    },
    {
     "t": "note",
     "x": [
      "La funció m retorna un objecte (un llibre): és un terme, i va dins del predicat.",
      "La función m devuelve un objeto (un libro): es un término, y va dentro del predicado.",
      "The function m returns an object (a book): it is a term, and it goes inside the predicate."
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {L(a,m(2010))} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {L(a,m(2010))} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {L(a,m(2010))} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {L(a,m(2010))} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-e2",
   "unit": "u5",
   "kind": "E",
   "level": "exam",
   "type": "open",
   "src": "exam",
   "srcName": [
    "CP2 2025-26 · Exercici 2",
    "CP2 2025-26 · Ejercicio 2",
    "Test 2 2025-26 · Exercise 2"
   ],
   "title": [
    "Amics i viatges",
    "Amigos y viajes",
    "Friends and trips"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Preneu els símbols del llenguatge de la lògica de predicats per a representar els següents enunciats. Doneu els símbols de les constants i variables utilitzades, així com cadascun dels predicats, abans de fer la representació. Tot seguit, doneu la representació i després **la seva forma clausal**.",
      "Tomad los símbolos del lenguaje de la lógica de predicados para representar los siguientes enunciados. Dad los símbolos de las constantes y variables utilizadas, así como cada uno de los predicados, antes de hacer la representación. A continuación, dad la representación y después **su forma clausal**.",
      "Use the symbols of the language of predicate logic to represent the following statements. Give the symbols of the constants and variables used, as well as each of the predicates, before representing them. Then give the representation and afterwards **its clausal form**."
     ]
    },
    {
     "h": [
      "<p><b>Predicats:</b> <span class=\"lf\">A(x,y)</span>: la persona x té amistat amb y · <span class=\"lf\">V(x,y)</span>: la persona x ha viatjat al país y · <span class=\"lf\">C(x,y)</span>: el país x està al continent y · <span class=\"lf\">D(x)</span>: la persona x té diners</p>",
      "<p><b>Predicados:</b> <span class=\"lf\">A(x,y)</span>: la persona x tiene amistad con y · <span class=\"lf\">V(x,y)</span>: la persona x ha viajado al país y · <span class=\"lf\">C(x,y)</span>: el país x está en el continente y · <span class=\"lf\">D(x)</span>: la persona x tiene dinero</p>",
      "<p><b>Predicates:</b> <span class=\"lf\">A(x,y)</span>: person x is friends with y · <span class=\"lf\">V(x,y)</span>: person x has travelled to country y · <span class=\"lf\">C(x,y)</span>: country x is on continent y · <span class=\"lf\">D(x)</span>: person x has money</p>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>No totes les persones han viatjat al Brasil.</li><li>El Joan és amic de l'Anna, per tant, viatjaran al Brasil.</li><li>Hi ha persones que tenen diners que no han viatjat al Brasil.</li><li>El Joan i l'Anna tenen un amic en comú.</li><li>Tots els països que Joan ha viatjat estan a Europa.</li><li>Tothom qui viatja al Brasil, té algun amic que viatja a Espanya.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>No todas las personas han viajado a Brasil.</li><li>Joan es amigo de Anna, por tanto, viajarán a Brasil.</li><li>Hay personas que tienen dinero que no han viajado a Brasil.</li><li>Joan y Anna tienen un amigo en común.</li><li>Todos los países a los que Joan ha viajado están en Europa.</li><li>Todo el que viaja a Brasil tiene algún amigo que viaja a España.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Not all people have travelled to Brazil.</li><li>Joan is a friend of Anna, therefore they will travel to Brazil.</li><li>There are people with money who have not travelled to Brazil.</li><li>Joan and Anna have a friend in common.</li><li>All the countries Joan has travelled to are in Europe.</li><li>Everyone who travels to Brazil has some friend who travels to Spain.</li></ol>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "(g) Definiu dos predicats nous (diferents dels anteriors) per ampliar aquest exercici.",
      "(g) Definid dos predicados nuevos (diferentes de los anteriores) para ampliar este ejercicio.",
      "(g) Define two new predicates (different from the previous ones) to extend this exercise."
     ]
    },
    {
     "t": "p",
     "x": [
      "(h) Doneu un enunciat on calgui emprar els dos predicats anteriors i també el quantificador universal i l'existencial, i representeu-lo.",
      "(h) Dad un enunciado en el que haya que emplear los dos predicados anteriores y también el cuantificador universal y el existencial, y representadlo.",
      "(h) Give a statement that requires the two previous predicates and also the universal and the existential quantifier, and represent it."
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Símbols",
      "Símbolos",
      "Symbols"
     ]
    },
    {
     "t": "p",
     "x": [
      "**Constants:**",
      "**Constantes:**",
      "**Constants:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">joan</span></td><td>el Joan</td></tr><tr><td><span class=\"lf\">anna</span></td><td>l'Anna</td></tr><tr><td><span class=\"lf\">brasil</span></td><td>el Brasil</td></tr><tr><td><span class=\"lf\">espanya</span></td><td>Espanya</td></tr><tr><td><span class=\"lf\">europa</span></td><td>Europa</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">joan</span></td><td>Joan</td></tr><tr><td><span class=\"lf\">anna</span></td><td>Anna</td></tr><tr><td><span class=\"lf\">brasil</span></td><td>Brasil</td></tr><tr><td><span class=\"lf\">espanya</span></td><td>España</td></tr><tr><td><span class=\"lf\">europa</span></td><td>Europa</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">joan</span></td><td>Joan</td></tr><tr><td><span class=\"lf\">anna</span></td><td>Anna</td></tr><tr><td><span class=\"lf\">brasil</span></td><td>Brazil</td></tr><tr><td><span class=\"lf\">espanya</span></td><td>Spain</td></tr><tr><td><span class=\"lf\">europa</span></td><td>Europa</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": "**Variables:** x, y, z, …"
    },
    {
     "t": "p",
     "x": [
      "**Predicats:**",
      "**Predicados:**",
      "**Predicates:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">A(x,y)</span></td><td>la persona x té amistat amb y</td></tr><tr><td><span class=\"lf\">V(x,y)</span></td><td>la persona x ha viatjat al país y</td></tr><tr><td><span class=\"lf\">C(x,y)</span></td><td>el país x està al continent y</td></tr><tr><td><span class=\"lf\">D(x)</span></td><td>la persona x té diners</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">A(x,y)</span></td><td>la persona x tiene amistad con y</td></tr><tr><td><span class=\"lf\">V(x,y)</span></td><td>la persona x ha viajado al país y</td></tr><tr><td><span class=\"lf\">C(x,y)</span></td><td>el país x está en el continente y</td></tr><tr><td><span class=\"lf\">D(x)</span></td><td>la persona x tiene dinero</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">A(x,y)</span></td><td>person x is friends with y</td></tr><tr><td><span class=\"lf\">V(x,y)</span></td><td>person x has travelled to country y</td></tr><tr><td><span class=\"lf\">C(x,y)</span></td><td>country x is on continent y</td></tr><tr><td><span class=\"lf\">D(x)</span></td><td>person x has money</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "note",
     "x": [
      "Les variables x, y, z que fan de persona recorren les persones (si el domini barregés persones i països, caldria un predicat P(x): x és una persona, i escriure, per exemple, ¬∀x (P(x) → V(x,brasil))).",
      "Las variables x, y, z que hacen de persona recorren las personas (si el dominio mezclara personas y países, haría falta un predicado P(x): x es una persona, y escribir, por ejemplo, ¬∀x (P(x) → V(x,brasil))).",
      "The variables x, y, z standing for people range over people (if the domain mixed people and countries, we would need a predicate P(x): x is a person, and write, for example, ¬∀x (P(x) → V(x,brasil)))."
     ]
    },
    {
     "t": "h",
     "x": [
      "(a) No totes les persones han viatjat al Brasil.",
      "(a) No todas las personas han viajado a Brasil.",
      "(a) Not all people have travelled to Brazil."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬∀x V(x,brasil)</span></p>"
    },
    {
     "t": "note",
     "x": [
      "Equival a ∃x ¬V(x,brasil): «hi ha algú que no hi ha anat».",
      "Equivale a ∃x ¬V(x,brasil): «hay alguien que no ha ido».",
      "It is equivalent to ∃x ¬V(x,brasil): “there is someone who has not gone”."
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬V(k,brasil)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∃x ¬V(x,brasil)</span></li><li><b>4.</b> Skolemitzar: x → k (constant de Skolem)<br><span class=\"lf\">¬V(k,brasil)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬V(k,brasil)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∃x ¬V(x,brasil)</span></li><li><b>4.</b> Skolemizar: x → k (constante de Skolem)<br><span class=\"lf\">¬V(k,brasil)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬V(k,brasil)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∃x ¬V(x,brasil)</span></li><li><b>4.</b> Skolemise: x → k (Skolem constant)<br><span class=\"lf\">¬V(k,brasil)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬V(k,brasil)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(b) El Joan és amic de l'Anna, per tant, viatjaran al Brasil.",
      "(b) Joan es amigo de Anna, por tanto, viajarán a Brasil.",
      "(b) Joan is a friend of Anna, therefore they will travel to Brazil."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">A(joan,anna) → (V(joan,brasil) ∧ V(anna,brasil))</span></p>"
    },
    {
     "t": "note",
     "x": [
      "«Per tant» marca una conseqüència: implicació.",
      "«Por tanto» marca una consecuencia: implicación.",
      "“Therefore” marks a consequence: an implication."
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬A(joan,anna), V(joan,brasil)} , {¬A(joan,anna), V(anna,brasil)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">¬A(joan,anna) ∨ (V(joan,brasil) ∧ V(anna,brasil))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬A(joan,anna) ∨ V(joan,brasil)) ∧ (¬A(joan,anna) ∨ V(anna,brasil))</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬A(joan,anna), V(joan,brasil)} , {¬A(joan,anna), V(anna,brasil)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">¬A(joan,anna) ∨ (V(joan,brasil) ∧ V(anna,brasil))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬A(joan,anna) ∨ V(joan,brasil)) ∧ (¬A(joan,anna) ∨ V(anna,brasil))</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬A(joan,anna), V(joan,brasil)} , {¬A(joan,anna), V(anna,brasil)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">¬A(joan,anna) ∨ (V(joan,brasil) ∧ V(anna,brasil))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬A(joan,anna) ∨ V(joan,brasil)) ∧ (¬A(joan,anna) ∨ V(anna,brasil))</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬A(joan,anna), V(joan,brasil)} , {¬A(joan,anna), V(anna,brasil)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(c) Hi ha persones que tenen diners que no han viatjat al Brasil.",
      "(c) Hay personas que tienen dinero que no han viajado a Brasil.",
      "(c) There are people with money who have not travelled to Brazil."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∃x (D(x) ∧ ¬V(x,brasil))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {D(k)} , {¬V(k,brasil)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemitzar: x → k (constant de Skolem)<br><span class=\"lf\">D(k) ∧ ¬V(k,brasil)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {D(k)} , {¬V(k,brasil)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemizar: x → k (constante de Skolem)<br><span class=\"lf\">D(k) ∧ ¬V(k,brasil)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {D(k)} , {¬V(k,brasil)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemise: x → k (Skolem constant)<br><span class=\"lf\">D(k) ∧ ¬V(k,brasil)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {D(k)} , {¬V(k,brasil)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(d) El Joan i l'Anna tenen un amic en comú.",
      "(d) Joan y Anna tienen un amigo en común.",
      "(d) Joan and Anna have a friend in common."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∃x (A(joan,x) ∧ A(anna,x))</span></p>"
    },
    {
     "t": "note",
     "x": [
      "Un sol ∃ per a tots dos: el mateix amic.",
      "Un solo ∃ para los dos: el mismo amigo.",
      "A single ∃ for both: the same friend."
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {A(joan,k)} , {A(anna,k)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemitzar: x → k (constant de Skolem)<br><span class=\"lf\">A(joan,k) ∧ A(anna,k)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {A(joan,k)} , {A(anna,k)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemizar: x → k (constante de Skolem)<br><span class=\"lf\">A(joan,k) ∧ A(anna,k)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {A(joan,k)} , {A(anna,k)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemise: x → k (Skolem constant)<br><span class=\"lf\">A(joan,k) ∧ A(anna,k)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {A(joan,k)} , {A(anna,k)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(e) Tots els països que Joan ha viatjat estan a Europa.",
      "(e) Todos los países a los que Joan ha viajado están en Europa.",
      "(e) All the countries Joan has travelled to are in Europe."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀x (V(joan,x) → C(x,europa))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬V(joan,x), C(x,europa)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x (¬V(joan,x) ∨ C(x,europa))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬V(joan,x) ∨ C(x,europa)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬V(joan,x), C(x,europa)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x (¬V(joan,x) ∨ C(x,europa))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬V(joan,x) ∨ C(x,europa)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬V(joan,x), C(x,europa)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x (¬V(joan,x) ∨ C(x,europa))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬V(joan,x) ∨ C(x,europa)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬V(joan,x), C(x,europa)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(f) Tothom qui viatja al Brasil, té algun amic que viatja a Espanya.",
      "(f) Todo el que viaja a Brasil tiene algún amigo que viaja a España.",
      "(f) Everyone who travels to Brazil has some friend who travels to Spain."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀x (V(x,brasil) → ∃y (A(x,y) ∧ V(y,espanya)))</span></p>"
    },
    {
     "t": "note",
     "x": [
      "L'amic depèn de cada persona: l'∃y és dins del ∀x i a la forma clausal apareix com f(x).",
      "El amigo depende de cada persona: el ∃y está dentro del ∀x y en la forma clausal aparece como f(x).",
      "The friend depends on each person: the ∃y is inside the ∀x and in the clausal form it appears as f(x)."
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬V(x,brasil), A(x,f(x))} , {¬V(x,brasil), V(f(x),espanya)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x (¬V(x,brasil) ∨ ∃y (A(x,y) ∧ V(y,espanya)))</span></li><li><b>4.</b> Skolemitzar: y → f(x) (funció de Skolem de x)<br><span class=\"lf\">∀x (¬V(x,brasil) ∨ (A(x,f(x)) ∧ V(f(x),espanya)))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬V(x,brasil) ∨ (A(x,f(x)) ∧ V(f(x),espanya))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬V(x,brasil) ∨ A(x,f(x))) ∧ (¬V(x,brasil) ∨ V(f(x),espanya))</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬V(x,brasil), A(x,f(x))} , {¬V(x,brasil), V(f(x),espanya)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x (¬V(x,brasil) ∨ ∃y (A(x,y) ∧ V(y,espanya)))</span></li><li><b>4.</b> Skolemizar: y → f(x) (función de Skolem de x)<br><span class=\"lf\">∀x (¬V(x,brasil) ∨ (A(x,f(x)) ∧ V(f(x),espanya)))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬V(x,brasil) ∨ (A(x,f(x)) ∧ V(f(x),espanya))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬V(x,brasil) ∨ A(x,f(x))) ∧ (¬V(x,brasil) ∨ V(f(x),espanya))</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬V(x,brasil), A(x,f(x))} , {¬V(x,brasil), V(f(x),espanya)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x (¬V(x,brasil) ∨ ∃y (A(x,y) ∧ V(y,espanya)))</span></li><li><b>4.</b> Skolemise: y → f(x) (Skolem function of x)<br><span class=\"lf\">∀x (¬V(x,brasil) ∨ (A(x,f(x)) ∧ V(f(x),espanya)))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬V(x,brasil) ∨ (A(x,f(x)) ∧ V(f(x),espanya))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬V(x,brasil) ∨ A(x,f(x))) ∧ (¬V(x,brasil) ∨ V(f(x),espanya))</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬V(x,brasil), A(x,f(x))} , {¬V(x,brasil), V(f(x),espanya)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(g) i (h)",
      "(g) y (h)",
      "(g) and (h)"
     ]
    },
    {
     "t": "p",
     "x": [
      "(g) Predicats nous, per exemple: I(x,y): la persona x parla l'idioma y; O(x,y): l'idioma y és oficial al país x.\n(h) Enunciat amb ∀ i ∃: «Tothom qui viatja a un país parla algun idioma oficial d'aquell país»: ∀x ∀y (V(x,y) → ∃z (O(y,z) ∧ I(x,z))).",
      "(g) Predicados nuevos, por ejemplo: I(x,y): la persona x habla el idioma y; O(x,y): el idioma y es oficial en el país x.\n(h) Enunciado con ∀ y ∃: «Todo el que viaja a un país habla algún idioma oficial de ese país»: ∀x ∀y (V(x,y) → ∃z (O(y,z) ∧ I(x,z))).",
      "(g) New predicates, for example: I(x,y): person x speaks language y; O(x,y): language y is official in country x.\n(h) Statement with ∀ and ∃: “Everyone who travels to a country speaks some official language of that country”: ∀x ∀y (V(x,y) → ∃z (O(y,z) ∧ I(x,z)))."
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-e3",
   "unit": "u5",
   "kind": "E",
   "level": "exam",
   "type": "open",
   "src": "exam",
   "srcName": [
    "CP2 2024-25 · Exercici 2",
    "CP2 2024-25 · Ejercicio 2",
    "Test 2 2024-25 · Exercise 2"
   ],
   "title": [
    "Vacunes i malalties",
    "Vacunas y enfermedades",
    "Vaccines and diseases"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Preneu els símbols del llenguatge de la lògica de predicats per a representar els següents enunciats. Doneu els símbols de les constants i variables utilitzades, així com cadascun dels predicats, abans de fer la representació. Tot seguit, doneu la representació i després **la seva forma clausal**.",
      "Tomad los símbolos del lenguaje de la lógica de predicados para representar los siguientes enunciados. Dad los símbolos de las constantes y variables utilizadas, así como cada uno de los predicados, antes de hacer la representación. A continuación, dad la representación y después **su forma clausal**.",
      "Use the symbols of the language of predicate logic to represent the following statements. Give the symbols of the constants and variables used, as well as each of the predicates, before representing them. Then give the representation and afterwards **its clausal form**."
     ]
    },
    {
     "h": [
      "<p><b>Predicats:</b> <span class=\"lf\">D(x,y)</span>: la persona x té diagnosticada la malaltia y · <span class=\"lf\">V(x,y)</span>: la persona x està vacunada de la vacuna y · <span class=\"lf\">E(x,y)</span>: la vacuna x és efectiva per la malaltia y · <span class=\"lf\">F(x)</span>: la persona x és forta</p>",
      "<p><b>Predicados:</b> <span class=\"lf\">D(x,y)</span>: la persona x tiene diagnosticada la enfermedad y · <span class=\"lf\">V(x,y)</span>: la persona x está vacunada con la vacuna y · <span class=\"lf\">E(x,y)</span>: la vacuna x es efectiva para la enfermedad y · <span class=\"lf\">F(x)</span>: la persona x es fuerte</p>",
      "<p><b>Predicates:</b> <span class=\"lf\">D(x,y)</span>: person x has been diagnosed with disease y · <span class=\"lf\">V(x,y)</span>: person x has been vaccinated with vaccine y · <span class=\"lf\">E(x,y)</span>: vaccine x is effective against disease y · <span class=\"lf\">F(x)</span>: person x is strong</p>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>La Marta no està vacunada de la varicel·la.</li><li>Hi ha vacunes efectives per la grip però, no n'hi ha cap per l'hepatitis.</li><li>No totes les persones estan vacunades de la Covid.</li><li>El Daniel és una persona forta que no té diagnosticada cap malaltia.</li><li>Si el Daniel no està vacunat de la Covid, aleshores és una persona forta.</li><li>La vacuna XRP és efectiva per a 3 malalties: el xarampió, la rubèola i la parotiditis.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Marta no está vacunada de la varicela.</li><li>Hay vacunas efectivas para la gripe pero no hay ninguna para la hepatitis.</li><li>No todas las personas están vacunadas de la Covid.</li><li>Daniel es una persona fuerte que no tiene diagnosticada ninguna enfermedad.</li><li>Si Daniel no está vacunado de la Covid, entonces es una persona fuerte.</li><li>La vacuna XRP es efectiva para 3 enfermedades: el sarampión, la rubéola y la parotiditis.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Marta is not vaccinated against chickenpox.</li><li>There are vaccines effective against flu but there is none against hepatitis.</li><li>Not all people are vaccinated against Covid.</li><li>Daniel is a strong person who has not been diagnosed with any disease.</li><li>If Daniel is not vaccinated against Covid, then he is a strong person.</li><li>The XRP vaccine is effective against 3 diseases: measles, rubella and mumps.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Símbols",
      "Símbolos",
      "Symbols"
     ]
    },
    {
     "t": "p",
     "x": [
      "**Constants:**",
      "**Constantes:**",
      "**Constants:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">marta</span></td><td>la Marta</td></tr><tr><td><span class=\"lf\">daniel</span></td><td>el Daniel</td></tr><tr><td><span class=\"lf\">vvaricela</span></td><td>la vacuna de la varicel·la</td></tr><tr><td><span class=\"lf\">vcovid</span></td><td>la vacuna de la Covid</td></tr><tr><td><span class=\"lf\">grip</span></td><td>la grip</td></tr><tr><td><span class=\"lf\">hepatitis</span></td><td>l'hepatitis</td></tr><tr><td><span class=\"lf\">xrp</span></td><td>la vacuna XRP</td></tr><tr><td><span class=\"lf\">xarampio</span></td><td>el xarampió</td></tr><tr><td><span class=\"lf\">rubeola</span></td><td>la rubèola</td></tr><tr><td><span class=\"lf\">parotiditis</span></td><td>la parotiditis</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">marta</span></td><td>Marta</td></tr><tr><td><span class=\"lf\">daniel</span></td><td>Daniel</td></tr><tr><td><span class=\"lf\">vvaricela</span></td><td>la vacuna de la varicela</td></tr><tr><td><span class=\"lf\">vcovid</span></td><td>la vacuna de la Covid</td></tr><tr><td><span class=\"lf\">grip</span></td><td>la gripe</td></tr><tr><td><span class=\"lf\">hepatitis</span></td><td>la hepatitis</td></tr><tr><td><span class=\"lf\">xrp</span></td><td>la vacuna XRP</td></tr><tr><td><span class=\"lf\">xarampio</span></td><td>el sarampión</td></tr><tr><td><span class=\"lf\">rubeola</span></td><td>la rubéola</td></tr><tr><td><span class=\"lf\">parotiditis</span></td><td>la parotiditis</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">marta</span></td><td>Marta</td></tr><tr><td><span class=\"lf\">daniel</span></td><td>Daniel</td></tr><tr><td><span class=\"lf\">vvaricela</span></td><td>the chickenpox vaccine</td></tr><tr><td><span class=\"lf\">vcovid</span></td><td>la vacuna de la Covid</td></tr><tr><td><span class=\"lf\">grip</span></td><td>flu</td></tr><tr><td><span class=\"lf\">hepatitis</span></td><td>hepatitis</td></tr><tr><td><span class=\"lf\">xrp</span></td><td>la vacuna XRP</td></tr><tr><td><span class=\"lf\">xarampio</span></td><td>measles</td></tr><tr><td><span class=\"lf\">rubeola</span></td><td>rubella</td></tr><tr><td><span class=\"lf\">parotiditis</span></td><td>la parotiditis</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": "**Variables:** x, y, z, …"
    },
    {
     "t": "p",
     "x": [
      "**Predicats:**",
      "**Predicados:**",
      "**Predicates:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">D(x,y)</span></td><td>la persona x té diagnosticada la malaltia y</td></tr><tr><td><span class=\"lf\">V(x,y)</span></td><td>la persona x està vacunada de la vacuna y</td></tr><tr><td><span class=\"lf\">E(x,y)</span></td><td>la vacuna x és efectiva per la malaltia y</td></tr><tr><td><span class=\"lf\">F(x)</span></td><td>la persona x és forta</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">D(x,y)</span></td><td>la persona x tiene diagnosticada la enfermedad y</td></tr><tr><td><span class=\"lf\">V(x,y)</span></td><td>la persona x está vacunada con la vacuna y</td></tr><tr><td><span class=\"lf\">E(x,y)</span></td><td>la vacuna x es efectiva para la enfermedad y</td></tr><tr><td><span class=\"lf\">F(x)</span></td><td>la persona x es fuerte</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">D(x,y)</span></td><td>person x has been diagnosed with disease y</td></tr><tr><td><span class=\"lf\">V(x,y)</span></td><td>person x has been vaccinated with vaccine y</td></tr><tr><td><span class=\"lf\">E(x,y)</span></td><td>vaccine x is effective against disease y</td></tr><tr><td><span class=\"lf\">F(x)</span></td><td>person x is strong</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(a) La Marta no està vacunada de la varicel·la.",
      "(a) Marta no está vacunada de la varicela.",
      "(a) Marta is not vaccinated against chickenpox."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬V(marta,vvaricela)</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬V(marta,vvaricela)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬V(marta,vvaricela)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬V(marta,vvaricela)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬V(marta,vvaricela)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(b) Hi ha vacunes efectives per la grip però, no n'hi ha cap per l'hepatitis.",
      "(b) Hay vacunas efectivas para la gripe pero no hay ninguna para la hepatitis.",
      "(b) There are vaccines effective against flu but there is none against hepatitis."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∃x E(x,grip) ∧ ¬∃y E(y,hepatitis)</span></p>"
    },
    {
     "t": "note",
     "x": [
      "«No n'hi ha cap» és ¬∃ (o, el que és el mateix, ∀ amb negació: ∀y ¬E(y,hepatitis)).",
      "«No hay ninguna» es ¬∃ (o, lo que es lo mismo, ∀ con negación: ∀y ¬E(y,hepatitis)).",
      "“There is none” is ¬∃ (or, equivalently, ∀ with a negation: ∀y ¬E(y,hepatitis))."
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {E(k,grip)} , {¬E(y,hepatitis)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∃x E(x,grip) ∧ ∀y ¬E(y,hepatitis)</span></li><li><b>4.</b> Skolemitzar: x → k (constant de Skolem)<br><span class=\"lf\">E(k,grip) ∧ ∀y ¬E(y,hepatitis)</span></li><li><b>5.</b> Universals a l'esquerra: <span class=\"lf\">∀y (E(k,grip) ∧ ¬E(y,hepatitis))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">E(k,grip) ∧ ¬E(y,hepatitis)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {E(k,grip)} , {¬E(y,hepatitis)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∃x E(x,grip) ∧ ∀y ¬E(y,hepatitis)</span></li><li><b>4.</b> Skolemizar: x → k (constante de Skolem)<br><span class=\"lf\">E(k,grip) ∧ ∀y ¬E(y,hepatitis)</span></li><li><b>5.</b> Universales a la izquierda: <span class=\"lf\">∀y (E(k,grip) ∧ ¬E(y,hepatitis))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">E(k,grip) ∧ ¬E(y,hepatitis)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {E(k,grip)} , {¬E(y,hepatitis)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∃x E(x,grip) ∧ ∀y ¬E(y,hepatitis)</span></li><li><b>4.</b> Skolemise: x → k (Skolem constant)<br><span class=\"lf\">E(k,grip) ∧ ∀y ¬E(y,hepatitis)</span></li><li><b>5.</b> Universals to the left: <span class=\"lf\">∀y (E(k,grip) ∧ ¬E(y,hepatitis))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">E(k,grip) ∧ ¬E(y,hepatitis)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {E(k,grip)} , {¬E(y,hepatitis)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(c) No totes les persones estan vacunades de la Covid.",
      "(c) No todas las personas están vacunadas de la Covid.",
      "(c) Not all people are vaccinated against Covid."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬∀x V(x,vcovid)</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬V(k,vcovid)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∃x ¬V(x,vcovid)</span></li><li><b>4.</b> Skolemitzar: x → k (constant de Skolem)<br><span class=\"lf\">¬V(k,vcovid)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬V(k,vcovid)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∃x ¬V(x,vcovid)</span></li><li><b>4.</b> Skolemizar: x → k (constante de Skolem)<br><span class=\"lf\">¬V(k,vcovid)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬V(k,vcovid)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∃x ¬V(x,vcovid)</span></li><li><b>4.</b> Skolemise: x → k (Skolem constant)<br><span class=\"lf\">¬V(k,vcovid)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬V(k,vcovid)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(d) El Daniel és una persona forta que no té diagnosticada cap malaltia.",
      "(d) Daniel es una persona fuerte que no tiene diagnosticada ninguna enfermedad.",
      "(d) Daniel is a strong person who has not been diagnosed with any disease."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">F(daniel) ∧ ¬∃y D(daniel,y)</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {F(daniel)} , {¬D(daniel,y)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">F(daniel) ∧ ∀y ¬D(daniel,y)</span></li><li><b>5.</b> Universals a l'esquerra: <span class=\"lf\">∀y (F(daniel) ∧ ¬D(daniel,y))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">F(daniel) ∧ ¬D(daniel,y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {F(daniel)} , {¬D(daniel,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">F(daniel) ∧ ∀y ¬D(daniel,y)</span></li><li><b>5.</b> Universales a la izquierda: <span class=\"lf\">∀y (F(daniel) ∧ ¬D(daniel,y))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">F(daniel) ∧ ¬D(daniel,y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {F(daniel)} , {¬D(daniel,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">F(daniel) ∧ ∀y ¬D(daniel,y)</span></li><li><b>5.</b> Universals to the left: <span class=\"lf\">∀y (F(daniel) ∧ ¬D(daniel,y))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">F(daniel) ∧ ¬D(daniel,y)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {F(daniel)} , {¬D(daniel,y)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(e) Si el Daniel no està vacunat de la Covid, aleshores és una persona forta.",
      "(e) Si Daniel no está vacunado de la Covid, entonces es una persona fuerte.",
      "(e) If Daniel is not vaccinated against Covid, then he is a strong person."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬V(daniel,vcovid) → F(daniel)</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {V(daniel,vcovid), F(daniel)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">¬¬V(daniel,vcovid) ∨ F(daniel)</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">V(daniel,vcovid) ∨ F(daniel)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {V(daniel,vcovid), F(daniel)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">¬¬V(daniel,vcovid) ∨ F(daniel)</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">V(daniel,vcovid) ∨ F(daniel)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {V(daniel,vcovid), F(daniel)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">¬¬V(daniel,vcovid) ∨ F(daniel)</span></li><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">V(daniel,vcovid) ∨ F(daniel)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {V(daniel,vcovid), F(daniel)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(f) La vacuna XRP és efectiva per a 3 malalties: el xarampió, la rubèola i la parotiditis.",
      "(f) La vacuna XRP es efectiva para 3 enfermedades: el sarampión, la rubéola y la parotiditis.",
      "(f) The XRP vaccine is effective against 3 diseases: measles, rubella and mumps."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">E(xrp,xarampio) ∧ E(xrp,rubeola) ∧ E(xrp,parotiditis)</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {E(xrp,xarampio)} , {E(xrp,rubeola)} , {E(xrp,parotiditis)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {E(xrp,xarampio)} , {E(xrp,rubeola)} , {E(xrp,parotiditis)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {E(xrp,xarampio)} , {E(xrp,rubeola)} , {E(xrp,parotiditis)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {E(xrp,xarampio)} , {E(xrp,rubeola)} , {E(xrp,parotiditis)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-e4",
   "unit": "u5",
   "kind": "E",
   "level": "exam",
   "type": "open",
   "src": "new",
   "title": [
    "La universitat",
    "La universidad",
    "The university"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Preneu els símbols del llenguatge de la lògica de predicats per a representar els següents enunciats. Doneu els símbols de les constants i variables utilitzades, així com cadascun dels predicats, abans de fer la representació. Tot seguit, doneu la representació i després **la seva forma clausal**.",
      "Tomad los símbolos del lenguaje de la lógica de predicados para representar los siguientes enunciados. Dad los símbolos de las constantes y variables utilizadas, así como cada uno de los predicados, antes de hacer la representación. A continuación, dad la representación y después **su forma clausal**.",
      "Use the symbols of the language of predicate logic to represent the following statements. Give the symbols of the constants and variables used, as well as each of the predicates, before representing them. Then give the representation and afterwards **its clausal form**."
     ]
    },
    {
     "h": [
      "<p><b>Predicats:</b> <span class=\"lf\">E(x)</span>: x és estudiant · <span class=\"lf\">S(x)</span>: x és una assignatura · <span class=\"lf\">M(x,y)</span>: x està matriculat a l'assignatura y · <span class=\"lf\">A(x,y)</span>: x aprova l'assignatura y · <span class=\"lf\">P(x,y)</span>: x és professor de l'assignatura y</p>",
      "<p><b>Predicados:</b> <span class=\"lf\">E(x)</span>: x es estudiante · <span class=\"lf\">S(x)</span>: x es una asignatura · <span class=\"lf\">M(x,y)</span>: x está matriculado en la asignatura y · <span class=\"lf\">A(x,y)</span>: x aprueba la asignatura y · <span class=\"lf\">P(x,y)</span>: x es profesor de la asignatura y</p>",
      "<p><b>Predicates:</b> <span class=\"lf\">E(x)</span>: x is a student · <span class=\"lf\">S(x)</span>: x is a subject · <span class=\"lf\">M(x,y)</span>: x is enrolled in subject y · <span class=\"lf\">A(x,y)</span>: x passes subject y · <span class=\"lf\">P(x,y)</span>: x teaches subject y</p>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Tots els estudiants matriculats a Lògica l'aproven.</li><li>Hi ha estudiants que no aproven cap assignatura.</li><li>La Maria aprova totes les assignatures on està matriculada.</li><li>Cada assignatura té algun professor.</li><li>Ningú no és alhora professor i estudiant matriculat de la mateixa assignatura.</li><li>No tots els estudiants aproven Programació.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Todos los estudiantes matriculados en Lógica la aprueban.</li><li>Hay estudiantes que no aprueban ninguna asignatura.</li><li>María aprueba todas las asignaturas en las que está matriculada.</li><li>Cada asignatura tiene algún profesor.</li><li>Nadie es a la vez profesor y estudiante matriculado de la misma asignatura.</li><li>No todos los estudiantes aprueban Programación.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>All the students enrolled in Logic pass it.</li><li>There are students who do not pass any subject.</li><li>María passes all the subjects she is enrolled in.</li><li>Each subject has some teacher.</li><li>Nobody is both a teacher and an enrolled student of the same subject.</li><li>Not all students pass Programming.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Símbols",
      "Símbolos",
      "Symbols"
     ]
    },
    {
     "t": "p",
     "x": [
      "**Constants:**",
      "**Constantes:**",
      "**Constants:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">maria</span></td><td>la Maria</td></tr><tr><td><span class=\"lf\">logica</span></td><td>Lògica</td></tr><tr><td><span class=\"lf\">programacio</span></td><td>Programació</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">maria</span></td><td>María</td></tr><tr><td><span class=\"lf\">logica</span></td><td>Lógica</td></tr><tr><td><span class=\"lf\">programacio</span></td><td>Programación</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">maria</span></td><td>María</td></tr><tr><td><span class=\"lf\">logica</span></td><td>Logic</td></tr><tr><td><span class=\"lf\">programacio</span></td><td>Programming</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": "**Variables:** x, y, z, …"
    },
    {
     "t": "p",
     "x": [
      "**Predicats:**",
      "**Predicados:**",
      "**Predicates:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">E(x)</span></td><td>x és estudiant</td></tr><tr><td><span class=\"lf\">S(x)</span></td><td>x és una assignatura</td></tr><tr><td><span class=\"lf\">M(x,y)</span></td><td>x està matriculat a l'assignatura y</td></tr><tr><td><span class=\"lf\">A(x,y)</span></td><td>x aprova l'assignatura y</td></tr><tr><td><span class=\"lf\">P(x,y)</span></td><td>x és professor de l'assignatura y</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">E(x)</span></td><td>x es estudiante</td></tr><tr><td><span class=\"lf\">S(x)</span></td><td>x es una asignatura</td></tr><tr><td><span class=\"lf\">M(x,y)</span></td><td>x está matriculado en la asignatura y</td></tr><tr><td><span class=\"lf\">A(x,y)</span></td><td>x aprueba la asignatura y</td></tr><tr><td><span class=\"lf\">P(x,y)</span></td><td>x es profesor de la asignatura y</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">E(x)</span></td><td>x is a student</td></tr><tr><td><span class=\"lf\">S(x)</span></td><td>x is a subject</td></tr><tr><td><span class=\"lf\">M(x,y)</span></td><td>x is enrolled in subject y</td></tr><tr><td><span class=\"lf\">A(x,y)</span></td><td>x passes subject y</td></tr><tr><td><span class=\"lf\">P(x,y)</span></td><td>x teaches subject y</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(a) Tots els estudiants matriculats a Lògica l'aproven.",
      "(a) Todos los estudiantes matriculados en Lógica la aprueban.",
      "(a) All the students enrolled in Logic pass it."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀x ((E(x) ∧ M(x,logica)) → A(x,logica))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬E(x), ¬M(x,logica), A(x,logica)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x (¬(E(x) ∧ M(x,logica)) ∨ A(x,logica))</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x (¬E(x) ∨ ¬M(x,logica) ∨ A(x,logica))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬E(x) ∨ ¬M(x,logica) ∨ A(x,logica)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬E(x), ¬M(x,logica), A(x,logica)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x (¬(E(x) ∧ M(x,logica)) ∨ A(x,logica))</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x (¬E(x) ∨ ¬M(x,logica) ∨ A(x,logica))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬E(x) ∨ ¬M(x,logica) ∨ A(x,logica)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬E(x), ¬M(x,logica), A(x,logica)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x (¬(E(x) ∧ M(x,logica)) ∨ A(x,logica))</span></li><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x (¬E(x) ∨ ¬M(x,logica) ∨ A(x,logica))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬E(x) ∨ ¬M(x,logica) ∨ A(x,logica)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬E(x), ¬M(x,logica), A(x,logica)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(b) Hi ha estudiants que no aproven cap assignatura.",
      "(b) Hay estudiantes que no aprueban ninguna asignatura.",
      "(b) There are students who do not pass any subject."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∃x (E(x) ∧ ∀y (S(y) → ¬A(x,y)))</span></p>"
    },
    {
     "t": "note",
     "x": [
      "«Cap assignatura» = per a tota assignatura, no l'aprova.",
      "«Ninguna asignatura» = para toda asignatura, no la aprueba.",
      "“No subject” = for every subject, they do not pass it."
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {E(k)} , {¬S(y), ¬A(k,y)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∃x (E(x) ∧ ∀y (¬S(y) ∨ ¬A(x,y)))</span></li><li><b>4.</b> Skolemitzar: x → k (constant de Skolem)<br><span class=\"lf\">E(k) ∧ ∀y (¬S(y) ∨ ¬A(k,y))</span></li><li><b>5.</b> Universals a l'esquerra: <span class=\"lf\">∀y (E(k) ∧ (¬S(y) ∨ ¬A(k,y)))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">E(k) ∧ (¬S(y) ∨ ¬A(k,y))</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {E(k)} , {¬S(y), ¬A(k,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∃x (E(x) ∧ ∀y (¬S(y) ∨ ¬A(x,y)))</span></li><li><b>4.</b> Skolemizar: x → k (constante de Skolem)<br><span class=\"lf\">E(k) ∧ ∀y (¬S(y) ∨ ¬A(k,y))</span></li><li><b>5.</b> Universales a la izquierda: <span class=\"lf\">∀y (E(k) ∧ (¬S(y) ∨ ¬A(k,y)))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">E(k) ∧ (¬S(y) ∨ ¬A(k,y))</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {E(k)} , {¬S(y), ¬A(k,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∃x (E(x) ∧ ∀y (¬S(y) ∨ ¬A(x,y)))</span></li><li><b>4.</b> Skolemise: x → k (Skolem constant)<br><span class=\"lf\">E(k) ∧ ∀y (¬S(y) ∨ ¬A(k,y))</span></li><li><b>5.</b> Universals to the left: <span class=\"lf\">∀y (E(k) ∧ (¬S(y) ∨ ¬A(k,y)))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">E(k) ∧ (¬S(y) ∨ ¬A(k,y))</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {E(k)} , {¬S(y), ¬A(k,y)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(c) La Maria aprova totes les assignatures on està matriculada.",
      "(c) María aprueba todas las asignaturas en las que está matriculada.",
      "(c) María passes all the subjects she is enrolled in."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀y (M(maria,y) → A(maria,y))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬M(maria,y), A(maria,y)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀y (¬M(maria,y) ∨ A(maria,y))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬M(maria,y) ∨ A(maria,y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬M(maria,y), A(maria,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀y (¬M(maria,y) ∨ A(maria,y))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬M(maria,y) ∨ A(maria,y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬M(maria,y), A(maria,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀y (¬M(maria,y) ∨ A(maria,y))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬M(maria,y) ∨ A(maria,y)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬M(maria,y), A(maria,y)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(d) Cada assignatura té algun professor.",
      "(d) Cada asignatura tiene algún profesor.",
      "(d) Each subject has some teacher."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀y (S(y) → ∃x P(x,y))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬S(y), P(f(y),y)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀y (¬S(y) ∨ ∃x P(x,y))</span></li><li><b>4.</b> Skolemitzar: x → f(y) (funció de Skolem de y)<br><span class=\"lf\">∀y (¬S(y) ∨ P(f(y),y))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬S(y) ∨ P(f(y),y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬S(y), P(f(y),y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀y (¬S(y) ∨ ∃x P(x,y))</span></li><li><b>4.</b> Skolemizar: x → f(y) (función de Skolem de y)<br><span class=\"lf\">∀y (¬S(y) ∨ P(f(y),y))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬S(y) ∨ P(f(y),y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬S(y), P(f(y),y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀y (¬S(y) ∨ ∃x P(x,y))</span></li><li><b>4.</b> Skolemise: x → f(y) (Skolem function of y)<br><span class=\"lf\">∀y (¬S(y) ∨ P(f(y),y))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬S(y) ∨ P(f(y),y)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬S(y), P(f(y),y)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(e) Ningú no és alhora professor i estudiant matriculat de la mateixa assignatura.",
      "(e) Nadie es a la vez profesor y estudiante matriculado de la misma asignatura.",
      "(e) Nobody is both a teacher and an enrolled student of the same subject."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬∃x ∃y (P(x,y) ∧ M(x,y))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬P(x,y), ¬M(x,y)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x ∀y (¬P(x,y) ∨ ¬M(x,y))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬P(x,y) ∨ ¬M(x,y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬P(x,y), ¬M(x,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x ∀y (¬P(x,y) ∨ ¬M(x,y))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬P(x,y) ∨ ¬M(x,y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬P(x,y), ¬M(x,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x ∀y (¬P(x,y) ∨ ¬M(x,y))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬P(x,y) ∨ ¬M(x,y)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬P(x,y), ¬M(x,y)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(f) No tots els estudiants aproven Programació.",
      "(f) No todos los estudiantes aprueban Programación.",
      "(f) Not all students pass Programming."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬∀x (E(x) → A(x,programacio))</span></p>"
    },
    {
     "t": "note",
     "x": [
      "Compareu amb «cap estudiant aprova Programació»: ∀x (E(x) → ¬A(x,programacio)). No és el mateix!",
      "Comparad con «ningún estudiante aprueba Programación»: ∀x (E(x) → ¬A(x,programacio)). ¡No es lo mismo!",
      "Compare with “no student passes Programming”: ∀x (E(x) → ¬A(x,programacio)). It is not the same!"
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {E(k)} , {¬A(k,programacio)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">¬∀x (¬E(x) ∨ A(x,programacio))</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∃x (E(x) ∧ ¬A(x,programacio))</span></li><li><b>4.</b> Skolemitzar: x → k (constant de Skolem)<br><span class=\"lf\">E(k) ∧ ¬A(k,programacio)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {E(k)} , {¬A(k,programacio)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">¬∀x (¬E(x) ∨ A(x,programacio))</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∃x (E(x) ∧ ¬A(x,programacio))</span></li><li><b>4.</b> Skolemizar: x → k (constante de Skolem)<br><span class=\"lf\">E(k) ∧ ¬A(k,programacio)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {E(k)} , {¬A(k,programacio)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">¬∀x (¬E(x) ∨ A(x,programacio))</span></li><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∃x (E(x) ∧ ¬A(x,programacio))</span></li><li><b>4.</b> Skolemise: x → k (Skolem constant)<br><span class=\"lf\">E(k) ∧ ¬A(k,programacio)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {E(k)} , {¬A(k,programacio)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-e5",
   "unit": "u5",
   "kind": "E",
   "level": "exam",
   "type": "open",
   "src": "new",
   "title": [
    "La xarxa social",
    "La red social",
    "The social network"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Preneu els símbols del llenguatge de la lògica de predicats per a representar els següents enunciats. Doneu els símbols de les constants i variables utilitzades, així com cadascun dels predicats, abans de fer la representació. Tot seguit, doneu la representació i després **la seva forma clausal**.",
      "Tomad los símbolos del lenguaje de la lógica de predicados para representar los siguientes enunciados. Dad los símbolos de las constantes y variables utilizadas, así como cada uno de los predicados, antes de hacer la representación. A continuación, dad la representación y después **su forma clausal**.",
      "Use the symbols of the language of predicate logic to represent the following statements. Give the symbols of the constants and variables used, as well as each of the predicates, before representing them. Then give the representation and afterwards **its clausal form**."
     ]
    },
    {
     "h": [
      "<p><b>Predicats:</b> <span class=\"lf\">S(x,y)</span>: x segueix y · <span class=\"lf\">F(x)</span>: x és una foto · <span class=\"lf\">P(x,y)</span>: x publica y · <span class=\"lf\">L(x,y)</span>: a x li agrada y</p>",
      "<p><b>Predicados:</b> <span class=\"lf\">S(x,y)</span>: x sigue a y · <span class=\"lf\">F(x)</span>: x es una foto · <span class=\"lf\">P(x,y)</span>: x publica y · <span class=\"lf\">L(x,y)</span>: a x le gusta y</p>",
      "<p><b>Predicates:</b> <span class=\"lf\">S(x,y)</span>: x follows y · <span class=\"lf\">F(x)</span>: x is a photo · <span class=\"lf\">P(x,y)</span>: x posts y · <span class=\"lf\">L(x,y)</span>: x likes y</p>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>La Laia segueix tothom qui la segueix.</li><li>Hi ha algú que segueix tothom.</li><li>Tothom segueix algú.</li><li>Al Marc li agraden totes les fotos que publica la Laia.</li><li>Ningú no segueix el Marc.</li><li>Hi ha fotos que no agraden a ningú.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Laia sigue a todo el que la sigue.</li><li>Hay alguien que sigue a todo el mundo.</li><li>Todo el mundo sigue a alguien.</li><li>A Marc le gustan todas las fotos que publica Laia.</li><li>Nadie sigue a Marc.</li><li>Hay fotos que no le gustan a nadie.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Laia follows everyone who follows her.</li><li>There is someone who follows everyone.</li><li>Everyone follows someone.</li><li>Marc likes all the photos Laia posts.</li><li>Nobody follows Marc.</li><li>There are photos that nobody likes.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Símbols",
      "Símbolos",
      "Symbols"
     ]
    },
    {
     "t": "p",
     "x": [
      "**Constants:**",
      "**Constantes:**",
      "**Constants:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">marc</span></td><td>el Marc</td></tr><tr><td><span class=\"lf\">laia</span></td><td>la Laia</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">marc</span></td><td>Marc</td></tr><tr><td><span class=\"lf\">laia</span></td><td>Laia</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">marc</span></td><td>Marc</td></tr><tr><td><span class=\"lf\">laia</span></td><td>Laia</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": "**Variables:** x, y, z, …"
    },
    {
     "t": "p",
     "x": [
      "**Predicats:**",
      "**Predicados:**",
      "**Predicates:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">S(x,y)</span></td><td>x segueix y</td></tr><tr><td><span class=\"lf\">F(x)</span></td><td>x és una foto</td></tr><tr><td><span class=\"lf\">P(x,y)</span></td><td>x publica y</td></tr><tr><td><span class=\"lf\">L(x,y)</span></td><td>a x li agrada y</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">S(x,y)</span></td><td>x sigue a y</td></tr><tr><td><span class=\"lf\">F(x)</span></td><td>x es una foto</td></tr><tr><td><span class=\"lf\">P(x,y)</span></td><td>x publica y</td></tr><tr><td><span class=\"lf\">L(x,y)</span></td><td>a x le gusta y</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">S(x,y)</span></td><td>x follows y</td></tr><tr><td><span class=\"lf\">F(x)</span></td><td>x is a photo</td></tr><tr><td><span class=\"lf\">P(x,y)</span></td><td>x publica y</td></tr><tr><td><span class=\"lf\">L(x,y)</span></td><td>x likes y</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(a) La Laia segueix tothom qui la segueix.",
      "(a) Laia sigue a todo el que la sigue.",
      "(a) Laia follows everyone who follows her."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀x (S(x,laia) → S(laia,x))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬S(x,laia), S(laia,x)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x (¬S(x,laia) ∨ S(laia,x))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬S(x,laia) ∨ S(laia,x)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬S(x,laia), S(laia,x)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x (¬S(x,laia) ∨ S(laia,x))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬S(x,laia) ∨ S(laia,x)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬S(x,laia), S(laia,x)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x (¬S(x,laia) ∨ S(laia,x))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬S(x,laia) ∨ S(laia,x)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬S(x,laia), S(laia,x)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(b) Hi ha algú que segueix tothom.",
      "(b) Hay alguien que sigue a todo el mundo.",
      "(b) There is someone who follows everyone."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∃x ∀y S(x,y)</span></p>"
    },
    {
     "t": "note",
     "x": [
      "Primer ∃ i després ∀: una sola persona segueix tothom. Skolem: constant.",
      "Primero ∃ y después ∀: una sola persona sigue a todos. Skolem: constante.",
      "First ∃ and then ∀: a single person follows everyone. Skolem: constant."
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {S(k,y)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemitzar: x → k (constant de Skolem)<br><span class=\"lf\">∀y S(k,y)</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">S(k,y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {S(k,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemizar: x → k (constante de Skolem)<br><span class=\"lf\">∀y S(k,y)</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">S(k,y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {S(k,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemise: x → k (Skolem constant)<br><span class=\"lf\">∀y S(k,y)</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">S(k,y)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {S(k,y)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(c) Tothom segueix algú.",
      "(c) Todo el mundo sigue a alguien.",
      "(c) Everyone follows someone."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀x ∃y S(x,y)</span></p>"
    },
    {
     "t": "note",
     "x": [
      "Ara l'ordre és l'invers: cadascú pot seguir una persona diferent. Skolem: funció f(x).",
      "Ahora el orden es el inverso: cada uno puede seguir a una persona distinta. Skolem: función f(x).",
      "Now the order is reversed: each one can follow a different person. Skolem: function f(x)."
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {S(x,f(x))} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemitzar: y → f(x) (funció de Skolem de x)<br><span class=\"lf\">∀x S(x,f(x))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">S(x,f(x))</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {S(x,f(x))} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemizar: y → f(x) (función de Skolem de x)<br><span class=\"lf\">∀x S(x,f(x))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">S(x,f(x))</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {S(x,f(x))} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemise: y → f(x) (Skolem function of x)<br><span class=\"lf\">∀x S(x,f(x))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">S(x,f(x))</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {S(x,f(x))} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(d) Al Marc li agraden totes les fotos que publica la Laia.",
      "(d) A Marc le gustan todas las fotos que publica Laia.",
      "(d) Marc likes all the photos Laia posts."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀y ((F(y) ∧ P(laia,y)) → L(marc,y))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬F(y), ¬P(laia,y), L(marc,y)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀y (¬(F(y) ∧ P(laia,y)) ∨ L(marc,y))</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀y (¬F(y) ∨ ¬P(laia,y) ∨ L(marc,y))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬F(y) ∨ ¬P(laia,y) ∨ L(marc,y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬F(y), ¬P(laia,y), L(marc,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀y (¬(F(y) ∧ P(laia,y)) ∨ L(marc,y))</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀y (¬F(y) ∨ ¬P(laia,y) ∨ L(marc,y))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬F(y) ∨ ¬P(laia,y) ∨ L(marc,y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬F(y), ¬P(laia,y), L(marc,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀y (¬(F(y) ∧ P(laia,y)) ∨ L(marc,y))</span></li><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀y (¬F(y) ∨ ¬P(laia,y) ∨ L(marc,y))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬F(y) ∨ ¬P(laia,y) ∨ L(marc,y)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬F(y), ¬P(laia,y), L(marc,y)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(e) Ningú no segueix el Marc.",
      "(e) Nadie sigue a Marc.",
      "(e) Nobody follows Marc."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬∃x S(x,marc)</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬S(x,marc)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x ¬S(x,marc)</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬S(x,marc)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬S(x,marc)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x ¬S(x,marc)</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬S(x,marc)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬S(x,marc)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x ¬S(x,marc)</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬S(x,marc)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬S(x,marc)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(f) Hi ha fotos que no agraden a ningú.",
      "(f) Hay fotos que no le gustan a nadie.",
      "(f) There are photos that nobody likes."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∃y (F(y) ∧ ∀x ¬L(x,y))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {F(k)} , {¬L(x,k)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemitzar: y → k (constant de Skolem)<br><span class=\"lf\">F(k) ∧ ∀x ¬L(x,k)</span></li><li><b>5.</b> Universals a l'esquerra: <span class=\"lf\">∀x (F(k) ∧ ¬L(x,k))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">F(k) ∧ ¬L(x,k)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {F(k)} , {¬L(x,k)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemizar: y → k (constante de Skolem)<br><span class=\"lf\">F(k) ∧ ∀x ¬L(x,k)</span></li><li><b>5.</b> Universales a la izquierda: <span class=\"lf\">∀x (F(k) ∧ ¬L(x,k))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">F(k) ∧ ¬L(x,k)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {F(k)} , {¬L(x,k)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemise: y → k (Skolem constant)<br><span class=\"lf\">F(k) ∧ ∀x ¬L(x,k)</span></li><li><b>5.</b> Universals to the left: <span class=\"lf\">∀x (F(k) ∧ ¬L(x,k))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">F(k) ∧ ¬L(x,k)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {F(k)} , {¬L(x,k)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-e6",
   "unit": "u5",
   "kind": "E",
   "level": "exam",
   "type": "open",
   "src": "new",
   "title": [
    "Els restaurants",
    "Los restaurantes",
    "The restaurants"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Preneu els símbols del llenguatge de la lògica de predicats per a representar els següents enunciats. Doneu els símbols de les constants i variables utilitzades, així com cadascun dels predicats, abans de fer la representació. Tot seguit, doneu la representació i després **la seva forma clausal**.",
      "Tomad los símbolos del lenguaje de la lógica de predicados para representar los siguientes enunciados. Dad los símbolos de las constantes y variables utilizadas, así como cada uno de los predicados, antes de hacer la representación. A continuación, dad la representación y después **su forma clausal**.",
      "Use the symbols of the language of predicate logic to represent the following statements. Give the symbols of the constants and variables used, as well as each of the predicates, before representing them. Then give the representation and afterwards **its clausal form**."
     ]
    },
    {
     "h": [
      "<p><b>Predicats:</b> <span class=\"lf\">R(x)</span>: x és un restaurant · <span class=\"lf\">S(x,y)</span>: el restaurant x serveix el plat y · <span class=\"lf\">V(x)</span>: el plat x és vegetarià · <span class=\"lf\">M(x,y)</span>: la persona x menja el plat y · <span class=\"lf\">A(x,y)</span>: a la persona x li agrada el plat y</p>",
      "<p><b>Predicados:</b> <span class=\"lf\">R(x)</span>: x es un restaurante · <span class=\"lf\">S(x,y)</span>: el restaurante x sirve el plato y · <span class=\"lf\">V(x)</span>: el plato x es vegetariano · <span class=\"lf\">M(x,y)</span>: la persona x come el plato y · <span class=\"lf\">A(x,y)</span>: a la persona x le gusta el plato y</p>",
      "<p><b>Predicates:</b> <span class=\"lf\">R(x)</span>: x is a restaurant · <span class=\"lf\">S(x,y)</span>: restaurant x serves dish y · <span class=\"lf\">V(x)</span>: dish x is vegetarian · <span class=\"lf\">M(x,y)</span>: person x eats dish y · <span class=\"lf\">A(x,y)</span>: person x likes dish y</p>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Tots els restaurants serveixen algun plat vegetarià.</li><li>La Joana només menja plats vegetarians.</li><li>La paella no és vegetariana, però a la Joana li agrada.</li><li>Hi ha un plat que serveixen tots els restaurants.</li><li>Cap restaurant serveix tots els plats.</li><li>Si a algú li agrada la paella, a la Joana també.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Todos los restaurantes sirven algún plato vegetariano.</li><li>Joana solo come platos vegetarianos.</li><li>La paella no es vegetariana, pero a Joana le gusta.</li><li>Hay un plato que sirven todos los restaurantes.</li><li>Ningún restaurante sirve todos los platos.</li><li>Si a alguien le gusta la paella, a Joana también.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>All restaurants serve some vegetarian dish.</li><li>Joana only eats vegetarian dishes.</li><li>Paella is not vegetarian, but Joana likes it.</li><li>There is a dish that all restaurants serve.</li><li>No restaurant serves all the dishes.</li><li>If someone likes paella, so does Joana.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Símbols",
      "Símbolos",
      "Symbols"
     ]
    },
    {
     "t": "p",
     "x": [
      "**Constants:**",
      "**Constantes:**",
      "**Constants:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">joana</span></td><td>la Joana</td></tr><tr><td><span class=\"lf\">paella</span></td><td>la paella</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">joana</span></td><td>Joana</td></tr><tr><td><span class=\"lf\">paella</span></td><td>la paella</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">joana</span></td><td>Joana</td></tr><tr><td><span class=\"lf\">paella</span></td><td>la paella</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": "**Variables:** x, y, z, …"
    },
    {
     "t": "p",
     "x": [
      "**Predicats:**",
      "**Predicados:**",
      "**Predicates:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">R(x)</span></td><td>x és un restaurant</td></tr><tr><td><span class=\"lf\">S(x,y)</span></td><td>el restaurant x serveix el plat y</td></tr><tr><td><span class=\"lf\">V(x)</span></td><td>el plat x és vegetarià</td></tr><tr><td><span class=\"lf\">M(x,y)</span></td><td>la persona x menja el plat y</td></tr><tr><td><span class=\"lf\">A(x,y)</span></td><td>a la persona x li agrada el plat y</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">R(x)</span></td><td>x es un restaurante</td></tr><tr><td><span class=\"lf\">S(x,y)</span></td><td>el restaurante x sirve el plato y</td></tr><tr><td><span class=\"lf\">V(x)</span></td><td>el plato x es vegetariano</td></tr><tr><td><span class=\"lf\">M(x,y)</span></td><td>la persona x come el plato y</td></tr><tr><td><span class=\"lf\">A(x,y)</span></td><td>a la persona x le gusta el plato y</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">R(x)</span></td><td>x is a restaurant</td></tr><tr><td><span class=\"lf\">S(x,y)</span></td><td>restaurant x serves dish y</td></tr><tr><td><span class=\"lf\">V(x)</span></td><td>dish x is vegetarian</td></tr><tr><td><span class=\"lf\">M(x,y)</span></td><td>person x eats dish y</td></tr><tr><td><span class=\"lf\">A(x,y)</span></td><td>person x likes dish y</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(a) Tots els restaurants serveixen algun plat vegetarià.",
      "(a) Todos los restaurantes sirven algún plato vegetariano.",
      "(a) All restaurants serve some vegetarian dish."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀x (R(x) → ∃y (S(x,y) ∧ V(y)))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬R(x), S(x,f(x))} , {¬R(x), V(f(x))} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x (¬R(x) ∨ ∃y (S(x,y) ∧ V(y)))</span></li><li><b>4.</b> Skolemitzar: y → f(x) (funció de Skolem de x)<br><span class=\"lf\">∀x (¬R(x) ∨ (S(x,f(x)) ∧ V(f(x))))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬R(x) ∨ (S(x,f(x)) ∧ V(f(x)))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬R(x) ∨ S(x,f(x))) ∧ (¬R(x) ∨ V(f(x)))</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬R(x), S(x,f(x))} , {¬R(x), V(f(x))} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x (¬R(x) ∨ ∃y (S(x,y) ∧ V(y)))</span></li><li><b>4.</b> Skolemizar: y → f(x) (función de Skolem de x)<br><span class=\"lf\">∀x (¬R(x) ∨ (S(x,f(x)) ∧ V(f(x))))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬R(x) ∨ (S(x,f(x)) ∧ V(f(x)))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬R(x) ∨ S(x,f(x))) ∧ (¬R(x) ∨ V(f(x)))</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬R(x), S(x,f(x))} , {¬R(x), V(f(x))} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x (¬R(x) ∨ ∃y (S(x,y) ∧ V(y)))</span></li><li><b>4.</b> Skolemise: y → f(x) (Skolem function of x)<br><span class=\"lf\">∀x (¬R(x) ∨ (S(x,f(x)) ∧ V(f(x))))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬R(x) ∨ (S(x,f(x)) ∧ V(f(x)))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬R(x) ∨ S(x,f(x))) ∧ (¬R(x) ∨ V(f(x)))</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬R(x), S(x,f(x))} , {¬R(x), V(f(x))} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(b) La Joana només menja plats vegetarians.",
      "(b) Joana solo come platos vegetarianos.",
      "(b) Joana only eats vegetarian dishes."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀y (M(joana,y) → V(y))</span></p>"
    },
    {
     "t": "note",
     "x": [
      "«Només menja X»: tot el que menja és X.",
      "«Solo come X»: todo lo que come es X.",
      "“Only eats X”: everything she eats is X."
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬M(joana,y), V(y)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀y (¬M(joana,y) ∨ V(y))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬M(joana,y) ∨ V(y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬M(joana,y), V(y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀y (¬M(joana,y) ∨ V(y))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬M(joana,y) ∨ V(y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬M(joana,y), V(y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀y (¬M(joana,y) ∨ V(y))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬M(joana,y) ∨ V(y)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬M(joana,y), V(y)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(c) La paella no és vegetariana, però a la Joana li agrada.",
      "(c) La paella no es vegetariana, pero a Joana le gusta.",
      "(c) Paella is not vegetarian, but Joana likes it."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬V(paella) ∧ A(joana,paella)</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬V(paella)} , {A(joana,paella)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬V(paella)} , {A(joana,paella)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬V(paella)} , {A(joana,paella)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬V(paella)} , {A(joana,paella)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(d) Hi ha un plat que serveixen tots els restaurants.",
      "(d) Hay un plato que sirven todos los restaurantes.",
      "(d) There is a dish that all restaurants serve."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∃y ∀x (R(x) → S(x,y))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬R(x), S(x,k)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∃y ∀x (¬R(x) ∨ S(x,y))</span></li><li><b>4.</b> Skolemitzar: y → k (constant de Skolem)<br><span class=\"lf\">∀x (¬R(x) ∨ S(x,k))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬R(x) ∨ S(x,k)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬R(x), S(x,k)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∃y ∀x (¬R(x) ∨ S(x,y))</span></li><li><b>4.</b> Skolemizar: y → k (constante de Skolem)<br><span class=\"lf\">∀x (¬R(x) ∨ S(x,k))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬R(x) ∨ S(x,k)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬R(x), S(x,k)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∃y ∀x (¬R(x) ∨ S(x,y))</span></li><li><b>4.</b> Skolemise: y → k (Skolem constant)<br><span class=\"lf\">∀x (¬R(x) ∨ S(x,k))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬R(x) ∨ S(x,k)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬R(x), S(x,k)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(e) Cap restaurant serveix tots els plats.",
      "(e) Ningún restaurante sirve todos los platos.",
      "(e) No restaurant serves all the dishes."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬∃x (R(x) ∧ ∀y S(x,y))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬R(x), ¬S(x,f(x))} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x (¬R(x) ∨ ∃y ¬S(x,y))</span></li><li><b>4.</b> Skolemitzar: y → f(x) (funció de Skolem de x)<br><span class=\"lf\">∀x (¬R(x) ∨ ¬S(x,f(x)))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬R(x) ∨ ¬S(x,f(x))</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬R(x), ¬S(x,f(x))} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x (¬R(x) ∨ ∃y ¬S(x,y))</span></li><li><b>4.</b> Skolemizar: y → f(x) (función de Skolem de x)<br><span class=\"lf\">∀x (¬R(x) ∨ ¬S(x,f(x)))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬R(x) ∨ ¬S(x,f(x))</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬R(x), ¬S(x,f(x))} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x (¬R(x) ∨ ∃y ¬S(x,y))</span></li><li><b>4.</b> Skolemise: y → f(x) (Skolem function of x)<br><span class=\"lf\">∀x (¬R(x) ∨ ¬S(x,f(x)))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬R(x) ∨ ¬S(x,f(x))</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬R(x), ¬S(x,f(x))} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(f) Si a algú li agrada la paella, a la Joana també.",
      "(f) Si a alguien le gusta la paella, a Joana también.",
      "(f) If someone likes paella, so does Joana."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∃x A(x,paella) → A(joana,paella)</span></p>"
    },
    {
     "t": "note",
     "x": [
      "Un ∃ a l'antecedent d'una implicació es converteix en ∀ en eliminar-la: ¬∃x A ≡ ∀x ¬A.",
      "Un ∃ en el antecedente de una implicación se convierte en ∀ al eliminarla: ¬∃x A ≡ ∀x ¬A.",
      "An ∃ in the antecedent of an implication becomes ∀ when the implication is eliminated: ¬∃x A ≡ ∀x ¬A."
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬A(x,paella), A(joana,paella)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">¬∃x A(x,paella) ∨ A(joana,paella)</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x ¬A(x,paella) ∨ A(joana,paella)</span></li><li><b>5.</b> Universals a l'esquerra: <span class=\"lf\">∀x (¬A(x,paella) ∨ A(joana,paella))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬A(x,paella) ∨ A(joana,paella)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬A(x,paella), A(joana,paella)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">¬∃x A(x,paella) ∨ A(joana,paella)</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x ¬A(x,paella) ∨ A(joana,paella)</span></li><li><b>5.</b> Universales a la izquierda: <span class=\"lf\">∀x (¬A(x,paella) ∨ A(joana,paella))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬A(x,paella) ∨ A(joana,paella)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬A(x,paella), A(joana,paella)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">¬∃x A(x,paella) ∨ A(joana,paella)</span></li><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x ¬A(x,paella) ∨ A(joana,paella)</span></li><li><b>5.</b> Universals to the left: <span class=\"lf\">∀x (¬A(x,paella) ∨ A(joana,paella))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬A(x,paella) ∨ A(joana,paella)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬A(x,paella), A(joana,paella)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-e7",
   "unit": "u5",
   "kind": "E",
   "level": "exam",
   "type": "open",
   "src": "new",
   "title": [
    "La família",
    "La familia",
    "The family"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Preneu els símbols del llenguatge de la lògica de predicats per a representar els següents enunciats. Doneu els símbols de les constants i variables utilitzades, així com cadascun dels predicats, abans de fer la representació. Tot seguit, doneu la representació i després **la seva forma clausal**.",
      "Tomad los símbolos del lenguaje de la lógica de predicados para representar los siguientes enunciados. Dad los símbolos de las constantes y variables utilizadas, así como cada uno de los predicados, antes de hacer la representación. A continuación, dad la representación y después **su forma clausal**.",
      "Use the symbols of the language of predicate logic to represent the following statements. Give the symbols of the constants and variables used, as well as each of the predicates, before representing them. Then give the representation and afterwards **its clausal form**."
     ]
    },
    {
     "h": [
      "<p><b>Predicats:</b> <span class=\"lf\">P(x,y)</span>: x és progenitor (pare o mare) de y · <span class=\"lf\">G(x,y)</span>: x és germà o germana de y · <span class=\"lf\">D(x)</span>: x és una dona</p>",
      "<p><b>Predicados:</b> <span class=\"lf\">P(x,y)</span>: x es progenitor (padre o madre) de y · <span class=\"lf\">G(x,y)</span>: x es hermano o hermana de y · <span class=\"lf\">D(x)</span>: x es una mujer</p>",
      "<p><b>Predicates:</b> <span class=\"lf\">P(x,y)</span>: x is a parent (father or mother) of y · <span class=\"lf\">G(x,y)</span>: x is a brother or sister of y · <span class=\"lf\">D(x)</span>: x is a woman</p>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<p><b>Funcions:</b> <span class=\"lf\">m(x)</span>: la mare de x</p>",
      "<p><b>Funciones:</b> <span class=\"lf\">m(x)</span>: la madre de x</p>",
      "<p><b>Functions:</b> <span class=\"lf\">m(x)</span>: the mother of x</p>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>La mare del Jordi és progenitora de la Carla.</li><li>Tothom té algun progenitor.</li><li>Si dues persones tenen un progenitor en comú, són germans.</li><li>El Lluís no té germans.</li><li>Totes les mares són dones.</li><li>Hi ha algú que és progenitor de tots els germans del Jordi.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>La madre de Jordi es progenitora de Carla.</li><li>Todo el mundo tiene algún progenitor.</li><li>Si dos personas tienen un progenitor en común, son hermanos.</li><li>Lluís no tiene hermanos.</li><li>Todas las madres son mujeres.</li><li>Hay alguien que es progenitor de todos los hermanos de Jordi.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Jordi's mother is a parent of Carla.</li><li>Everyone has some parent.</li><li>If two people have a parent in common, they are siblings.</li><li>Lluís has no siblings.</li><li>All mothers are women.</li><li>There is someone who is a parent of all of Jordi's siblings.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Símbols",
      "Símbolos",
      "Symbols"
     ]
    },
    {
     "t": "p",
     "x": [
      "**Constants:**",
      "**Constantes:**",
      "**Constants:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">jordi</span></td><td>el Jordi</td></tr><tr><td><span class=\"lf\">carla</span></td><td>la Carla</td></tr><tr><td><span class=\"lf\">lluis</span></td><td>el Lluís</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">jordi</span></td><td>Jordi</td></tr><tr><td><span class=\"lf\">carla</span></td><td>Carla</td></tr><tr><td><span class=\"lf\">lluis</span></td><td>Lluís</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">jordi</span></td><td>Jordi</td></tr><tr><td><span class=\"lf\">carla</span></td><td>Carla</td></tr><tr><td><span class=\"lf\">lluis</span></td><td>Lluís</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": "**Variables:** x, y, z, …"
    },
    {
     "t": "p",
     "x": [
      "**Predicats:**",
      "**Predicados:**",
      "**Predicates:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">P(x,y)</span></td><td>x és progenitor (pare o mare) de y</td></tr><tr><td><span class=\"lf\">G(x,y)</span></td><td>x és germà o germana de y</td></tr><tr><td><span class=\"lf\">D(x)</span></td><td>x és una dona</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">P(x,y)</span></td><td>x es progenitor (padre o madre) de y</td></tr><tr><td><span class=\"lf\">G(x,y)</span></td><td>x es hermano o hermana de y</td></tr><tr><td><span class=\"lf\">D(x)</span></td><td>x es una mujer</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">P(x,y)</span></td><td>x is a parent (father or mother) of y</td></tr><tr><td><span class=\"lf\">G(x,y)</span></td><td>x is a brother or sister of y</td></tr><tr><td><span class=\"lf\">D(x)</span></td><td>x is a woman</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "**Funcions:**",
      "**Funciones:**",
      "**Functions:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">m(x)</span></td><td>la mare de x</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">m(x)</span></td><td>la madre de x</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">m(x)</span></td><td>the mother of x</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(a) La mare del Jordi és progenitora de la Carla.",
      "(a) La madre de Jordi es progenitora de Carla.",
      "(a) Jordi's mother is a parent of Carla."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">P(m(jordi),carla)</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {P(m(jordi),carla)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {P(m(jordi),carla)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {P(m(jordi),carla)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {P(m(jordi),carla)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(b) Tothom té algun progenitor.",
      "(b) Todo el mundo tiene algún progenitor.",
      "(b) Everyone has some parent."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀x ∃y P(y,x)</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {P(f(x),x)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemitzar: y → f(x) (funció de Skolem de x)<br><span class=\"lf\">∀x P(f(x),x)</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">P(f(x),x)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {P(f(x),x)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemizar: y → f(x) (función de Skolem de x)<br><span class=\"lf\">∀x P(f(x),x)</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">P(f(x),x)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {P(f(x),x)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>4.</b> Skolemise: y → f(x) (Skolem function of x)<br><span class=\"lf\">∀x P(f(x),x)</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">P(f(x),x)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {P(f(x),x)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(c) Si dues persones tenen un progenitor en comú, són germans.",
      "(c) Si dos personas tienen un progenitor en común, son hermanos.",
      "(c) If two people have a parent in common, they are siblings."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀x ∀y (∃z (P(z,x) ∧ P(z,y)) → G(x,y))</span></p>"
    },
    {
     "t": "note",
     "x": [
      "L'∃z és a l'antecedent: en eliminar la implicació passa a ser ∀z i no cal skolemitzar.",
      "El ∃z está en el antecedente: al eliminar la implicación pasa a ser ∀z y no hace falta skolemizar.",
      "The ∃z is in the antecedent: when the implication is eliminated it becomes ∀z and there is no need to Skolemise."
     ]
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬P(z,x), ¬P(z,y), G(x,y)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x ∀y (¬∃z (P(z,x) ∧ P(z,y)) ∨ G(x,y))</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x ∀y (∀z (¬P(z,x) ∨ ¬P(z,y)) ∨ G(x,y))</span></li><li><b>5.</b> Universals a l'esquerra: <span class=\"lf\">∀x ∀y ∀z (¬P(z,x) ∨ ¬P(z,y) ∨ G(x,y))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬P(z,x) ∨ ¬P(z,y) ∨ G(x,y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬P(z,x), ¬P(z,y), G(x,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x ∀y (¬∃z (P(z,x) ∧ P(z,y)) ∨ G(x,y))</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x ∀y (∀z (¬P(z,x) ∨ ¬P(z,y)) ∨ G(x,y))</span></li><li><b>5.</b> Universales a la izquierda: <span class=\"lf\">∀x ∀y ∀z (¬P(z,x) ∨ ¬P(z,y) ∨ G(x,y))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬P(z,x) ∨ ¬P(z,y) ∨ G(x,y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬P(z,x), ¬P(z,y), G(x,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x ∀y (¬∃z (P(z,x) ∧ P(z,y)) ∨ G(x,y))</span></li><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x ∀y (∀z (¬P(z,x) ∨ ¬P(z,y)) ∨ G(x,y))</span></li><li><b>5.</b> Universals to the left: <span class=\"lf\">∀x ∀y ∀z (¬P(z,x) ∨ ¬P(z,y) ∨ G(x,y))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬P(z,x) ∨ ¬P(z,y) ∨ G(x,y)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬P(z,x), ¬P(z,y), G(x,y)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(d) El Lluís no té germans.",
      "(d) Lluís no tiene hermanos.",
      "(d) Lluís has no siblings."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬∃x G(lluis,x)</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬G(lluis,x)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x ¬G(lluis,x)</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬G(lluis,x)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬G(lluis,x)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x ¬G(lluis,x)</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬G(lluis,x)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬G(lluis,x)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x ¬G(lluis,x)</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬G(lluis,x)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬G(lluis,x)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(e) Totes les mares són dones.",
      "(e) Todas las madres son mujeres.",
      "(e) All mothers are women."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀x D(m(x))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {D(m(x))} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">D(m(x))</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {D(m(x))} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">D(m(x))</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {D(m(x))} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">D(m(x))</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {D(m(x))} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(f) Hi ha algú que és progenitor de tots els germans del Jordi.",
      "(f) Hay alguien que es progenitor de todos los hermanos de Jordi.",
      "(f) There is someone who is a parent of all of Jordi's siblings."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∃x ∀y (G(y,jordi) → P(x,y))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬G(y,jordi), P(k,y)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∃x ∀y (¬G(y,jordi) ∨ P(x,y))</span></li><li><b>4.</b> Skolemitzar: x → k (constant de Skolem)<br><span class=\"lf\">∀y (¬G(y,jordi) ∨ P(k,y))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬G(y,jordi) ∨ P(k,y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬G(y,jordi), P(k,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∃x ∀y (¬G(y,jordi) ∨ P(x,y))</span></li><li><b>4.</b> Skolemizar: x → k (constante de Skolem)<br><span class=\"lf\">∀y (¬G(y,jordi) ∨ P(k,y))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬G(y,jordi) ∨ P(k,y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬G(y,jordi), P(k,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∃x ∀y (¬G(y,jordi) ∨ P(x,y))</span></li><li><b>4.</b> Skolemise: x → k (Skolem constant)<br><span class=\"lf\">∀y (¬G(y,jordi) ∨ P(k,y))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬G(y,jordi) ∨ P(k,y)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬G(y,jordi), P(k,y)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-e8",
   "unit": "u5",
   "kind": "E",
   "level": "exam",
   "type": "open",
   "src": "new",
   "title": [
    "L'empresa",
    "La empresa",
    "The company"
   ],
   "qb": [
    {
     "t": "p",
     "x": [
      "Preneu els símbols del llenguatge de la lògica de predicats per a representar els següents enunciats. Doneu els símbols de les constants i variables utilitzades, així com cadascun dels predicats, abans de fer la representació. Tot seguit, doneu la representació i després **la seva forma clausal**.",
      "Tomad los símbolos del lenguaje de la lógica de predicados para representar los siguientes enunciados. Dad los símbolos de las constantes y variables utilizadas, así como cada uno de los predicados, antes de hacer la representación. A continuación, dad la representación y después **su forma clausal**.",
      "Use the symbols of the language of predicate logic to represent the following statements. Give the symbols of the constants and variables used, as well as each of the predicates, before representing them. Then give the representation and afterwards **its clausal form**."
     ]
    },
    {
     "h": [
      "<p><b>Predicats:</b> <span class=\"lf\">D(x)</span>: x és un departament · <span class=\"lf\">T(x,y)</span>: x treballa al departament y · <span class=\"lf\">C(x,y)</span>: x és el cap del departament y · <span class=\"lf\">S(x,y)</span>: x cobra més que y</p>",
      "<p><b>Predicados:</b> <span class=\"lf\">D(x)</span>: x es un departamento · <span class=\"lf\">T(x,y)</span>: x trabaja en el departamento y · <span class=\"lf\">C(x,y)</span>: x es el jefe del departamento y · <span class=\"lf\">S(x,y)</span>: x cobra más que y</p>",
      "<p><b>Predicates:</b> <span class=\"lf\">D(x)</span>: x is a department · <span class=\"lf\">T(x,y)</span>: x works in department y · <span class=\"lf\">C(x,y)</span>: x is the head of department y · <span class=\"lf\">S(x,y)</span>: x earns more than y</p>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<ol class=\"lx-items\" type=\"a\"><li>Cada departament té algun cap.</li><li>Els caps cobren més que tots els treballadors del seu departament.</li><li>La Núria treballa a informàtica, però no n'és la cap.</li><li>Ningú no cobra més que ell mateix.</li><li>Hi ha algú que treballa a tots els departaments.</li><li>No tothom que treballa a recursos humans cobra més que la Núria.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Cada departamento tiene algún jefe.</li><li>Los jefes cobran más que todos los trabajadores de su departamento.</li><li>Núria trabaja en informática, pero no es la jefa.</li><li>Nadie cobra más que sí mismo.</li><li>Hay alguien que trabaja en todos los departamentos.</li><li>No todo el que trabaja en recursos humanos cobra más que Núria.</li></ol>",
      "<ol class=\"lx-items\" type=\"a\"><li>Each department has some head.</li><li>Heads earn more than all the workers in their department.</li><li>Núria works in IT, but she is not the head.</li><li>Nobody earns more than themselves.</li><li>There is someone who works in every department.</li><li>Not everyone who works in human resources earns more than Núria.</li></ol>"
     ],
     "t": "html"
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Símbols",
      "Símbolos",
      "Symbols"
     ]
    },
    {
     "t": "p",
     "x": [
      "**Constants:**",
      "**Constantes:**",
      "**Constants:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">nuria</span></td><td>la Núria</td></tr><tr><td><span class=\"lf\">info</span></td><td>el departament d'informàtica</td></tr><tr><td><span class=\"lf\">rrhh</span></td><td>el departament de recursos humans</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">nuria</span></td><td>Núria</td></tr><tr><td><span class=\"lf\">info</span></td><td>el departamento de informática</td></tr><tr><td><span class=\"lf\">rrhh</span></td><td>el departamento de recursos humanos</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">nuria</span></td><td>Núria</td></tr><tr><td><span class=\"lf\">info</span></td><td>the IT department</td></tr><tr><td><span class=\"lf\">rrhh</span></td><td>the human resources department</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": "**Variables:** x, y, z, …"
    },
    {
     "t": "p",
     "x": [
      "**Predicats:**",
      "**Predicados:**",
      "**Predicates:**"
     ]
    },
    {
     "h": [
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">D(x)</span></td><td>x és un departament</td></tr><tr><td><span class=\"lf\">T(x,y)</span></td><td>x treballa al departament y</td></tr><tr><td><span class=\"lf\">C(x,y)</span></td><td>x és el cap del departament y</td></tr><tr><td><span class=\"lf\">S(x,y)</span></td><td>x cobra més que y</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">D(x)</span></td><td>x es un departamento</td></tr><tr><td><span class=\"lf\">T(x,y)</span></td><td>x trabaja en el departamento y</td></tr><tr><td><span class=\"lf\">C(x,y)</span></td><td>x es el jefe del departamento y</td></tr><tr><td><span class=\"lf\">S(x,y)</span></td><td>x cobra más que y</td></tr></tbody></table></div>",
      "<div class=\"tw\"><table class=\"lx-dict\"><tbody><tr><td><span class=\"lf\">D(x)</span></td><td>x is a department</td></tr><tr><td><span class=\"lf\">T(x,y)</span></td><td>x works in department y</td></tr><tr><td><span class=\"lf\">C(x,y)</span></td><td>x is the head of department y</td></tr><tr><td><span class=\"lf\">S(x,y)</span></td><td>x earns more than y</td></tr></tbody></table></div>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "(a) Cada departament té algun cap.",
      "(a) Cada departamento tiene algún jefe.",
      "(a) Each department has some head."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀y (D(y) → ∃x C(x,y))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬D(y), C(f(y),y)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀y (¬D(y) ∨ ∃x C(x,y))</span></li><li><b>4.</b> Skolemitzar: x → f(y) (funció de Skolem de y)<br><span class=\"lf\">∀y (¬D(y) ∨ C(f(y),y))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬D(y) ∨ C(f(y),y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬D(y), C(f(y),y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀y (¬D(y) ∨ ∃x C(x,y))</span></li><li><b>4.</b> Skolemizar: x → f(y) (función de Skolem de y)<br><span class=\"lf\">∀y (¬D(y) ∨ C(f(y),y))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬D(y) ∨ C(f(y),y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬D(y), C(f(y),y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀y (¬D(y) ∨ ∃x C(x,y))</span></li><li><b>4.</b> Skolemise: x → f(y) (Skolem function of y)<br><span class=\"lf\">∀y (¬D(y) ∨ C(f(y),y))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬D(y) ∨ C(f(y),y)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬D(y), C(f(y),y)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(b) Els caps cobren més que tots els treballadors del seu departament.",
      "(b) Los jefes cobran más que todos los trabajadores de su departamento.",
      "(b) Heads earn more than all the workers in their department."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀x ∀y (C(x,y) → ∀z (T(z,y) → S(x,z)))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬C(x,y), ¬T(z,y), S(x,z)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x ∀y (¬C(x,y) ∨ ∀z (¬T(z,y) ∨ S(x,z)))</span></li><li><b>5.</b> Universals a l'esquerra: <span class=\"lf\">∀x ∀y ∀z (¬C(x,y) ∨ ¬T(z,y) ∨ S(x,z))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬C(x,y) ∨ ¬T(z,y) ∨ S(x,z)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬C(x,y), ¬T(z,y), S(x,z)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x ∀y (¬C(x,y) ∨ ∀z (¬T(z,y) ∨ S(x,z)))</span></li><li><b>5.</b> Universales a la izquierda: <span class=\"lf\">∀x ∀y ∀z (¬C(x,y) ∨ ¬T(z,y) ∨ S(x,z))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬C(x,y) ∨ ¬T(z,y) ∨ S(x,z)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬C(x,y), ¬T(z,y), S(x,z)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x ∀y (¬C(x,y) ∨ ∀z (¬T(z,y) ∨ S(x,z)))</span></li><li><b>5.</b> Universals to the left: <span class=\"lf\">∀x ∀y ∀z (¬C(x,y) ∨ ¬T(z,y) ∨ S(x,z))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬C(x,y) ∨ ¬T(z,y) ∨ S(x,z)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬C(x,y), ¬T(z,y), S(x,z)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(c) La Núria treballa a informàtica, però no n'és la cap.",
      "(c) Núria trabaja en informática, pero no es la jefa.",
      "(c) Núria works in IT, but she is not the head."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">T(nuria,info) ∧ ¬C(nuria,info)</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {T(nuria,info)} , {¬C(nuria,info)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {T(nuria,info)} , {¬C(nuria,info)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {T(nuria,info)} , {¬C(nuria,info)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {T(nuria,info)} , {¬C(nuria,info)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(d) Ningú no cobra més que ell mateix.",
      "(d) Nadie cobra más que sí mismo.",
      "(d) Nobody earns more than themselves."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∀x ¬S(x,x)</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬S(x,x)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬S(x,x)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬S(x,x)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬S(x,x)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬S(x,x)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬S(x,x)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬S(x,x)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(e) Hi ha algú que treballa a tots els departaments.",
      "(e) Hay alguien que trabaja en todos los departamentos.",
      "(e) There is someone who works in every department."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">∃x ∀y (D(y) → T(x,y))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {¬D(y), T(k,y)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∃x ∀y (¬D(y) ∨ T(x,y))</span></li><li><b>4.</b> Skolemitzar: x → k (constant de Skolem)<br><span class=\"lf\">∀y (¬D(y) ∨ T(k,y))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬D(y) ∨ T(k,y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬D(y), T(k,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∃x ∀y (¬D(y) ∨ T(x,y))</span></li><li><b>4.</b> Skolemizar: x → k (constante de Skolem)<br><span class=\"lf\">∀y (¬D(y) ∨ T(k,y))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬D(y) ∨ T(k,y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬D(y), T(k,y)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∃x ∀y (¬D(y) ∨ T(x,y))</span></li><li><b>4.</b> Skolemise: x → k (Skolem constant)<br><span class=\"lf\">∀y (¬D(y) ∨ T(k,y))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬D(y) ∨ T(k,y)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬D(y), T(k,y)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    },
    {
     "t": "h",
     "x": [
      "(f) No tothom que treballa a recursos humans cobra més que la Núria.",
      "(f) No todo el que trabaja en recursos humanos cobra más que Núria.",
      "(f) Not everyone who works in human resources earns more than Núria."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-ans\"><span class=\"lf\">¬∀x (T(x,rrhh) → S(x,nuria))</span></p>"
    },
    {
     "t": "html",
     "h": "<p>Forma clausal: <span class=\"lf\">{ {T(k,rrhh)} , {¬S(k,nuria)} }</span></p>"
    },
    {
     "blocks": [
      {
       "h": [
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">¬∀x (¬T(x,rrhh) ∨ S(x,nuria))</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∃x (T(x,rrhh) ∧ ¬S(x,nuria))</span></li><li><b>4.</b> Skolemitzar: x → k (constant de Skolem)<br><span class=\"lf\">T(k,rrhh) ∧ ¬S(k,nuria)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {T(k,rrhh)} , {¬S(k,nuria)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">¬∀x (¬T(x,rrhh) ∨ S(x,nuria))</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∃x (T(x,rrhh) ∧ ¬S(x,nuria))</span></li><li><b>4.</b> Skolemizar: x → k (constante de Skolem)<br><span class=\"lf\">T(k,rrhh) ∧ ¬S(k,nuria)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {T(k,rrhh)} , {¬S(k,nuria)} }</span></li></ol>",
        "<ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">¬∀x (¬T(x,rrhh) ∨ S(x,nuria))</span></li><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∃x (T(x,rrhh) ∧ ¬S(x,nuria))</span></li><li><b>4.</b> Skolemise: x → k (Skolem constant)<br><span class=\"lf\">T(k,rrhh) ∧ ¬S(k,nuria)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {T(k,rrhh)} , {¬S(k,nuria)} }</span></li></ol>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Passos de la transformació",
      "Pasos de la transformación",
      "Steps of the transformation"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-f1",
   "unit": "u8",
   "kind": "F",
   "level": "exam",
   "type": "open",
   "src": "exam",
   "srcName": [
    "Treball d'autoavaluació · Exercici 2",
    "Trabajo de autoevaluación · Ejercicio 2",
    "Self-assessment work · Exercise 2"
   ],
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Comproveu mitjançant el mètode de resolució si el següent raonament és vàlid o no:",
      "Comprobad mediante el método de resolución si el siguiente razonamiento es válido o no:",
      "Check by the resolution method whether the following argument is valid or not:"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∃x (A(x) ∧ B(x)) → C(a)</span> <i>(premissa)</i></li><li><span class=\"lf\">∀x (D(x) → C(x))</span> <i>(premissa)</i></li><li><span class=\"lf\">A(b) ∧ A(c)</span> <i>(premissa)</i></li><li><span class=\"lf\">D(b) ∨ B(c)</span> <i>(premissa)</i></li><li><span class=\"lf\">∃x C(x)</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∃x (A(x) ∧ B(x)) → C(a)</span> <i>(premisa)</i></li><li><span class=\"lf\">∀x (D(x) → C(x))</span> <i>(premisa)</i></li><li><span class=\"lf\">A(b) ∧ A(c)</span> <i>(premisa)</i></li><li><span class=\"lf\">D(b) ∨ B(c)</span> <i>(premisa)</i></li><li><span class=\"lf\">∃x C(x)</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∃x (A(x) ∧ B(x)) → C(a)</span> <i>(premise)</i></li><li><span class=\"lf\">∀x (D(x) → C(x))</span> <i>(premise)</i></li><li><span class=\"lf\">A(b) ∧ A(c)</span> <i>(premise)</i></li><li><span class=\"lf\">D(b) ∨ B(c)</span> <i>(premise)</i></li><li><span class=\"lf\">∃x C(x)</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "On A, B, C, D són símbols de predicats, x, y, z són símbols de variables i a, b, c són símbols de constants.",
      "Donde A, B, C, D son símbolos de predicados, x, y, z son símbolos de variables y a, b, c son símbolos de constantes.",
      "Where A, B, C, D are predicate symbols, x, y, z are variable symbols and a, b, c are constant symbols."
     ]
    },
    {
     "t": "p",
     "x": [
      "Expliqueu els passos que seguiu per fer la prova i **noteu els unificadors** (UMG).",
      "Explicad los pasos que seguís para hacer la prueba y **anotad los unificadores** (UMG).",
      "Explain the steps you follow to do the proof and **note the unifiers** (MGU)."
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Neguem la conclusió",
      "Negamos la conclusión",
      "We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Afegim la negació de la conclusió, <span class=\"lf\">¬∃x C(x)</span>, a les premisses i busquem la clàusula buida (prova per refutació).</p>",
      "<p>Añadimos la negación de la conclusión, <span class=\"lf\">¬∃x C(x)</span>, a las premisas y buscamos la cláusula vacía (prueba por refutación).</p>",
      "<p>We add the negation of the conclusion, <span class=\"lf\">¬∃x C(x)</span>, to the premises and look for the empty clause (proof by refutation).</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "Forma clausal de les premisses i de la conclusió negada",
      "Forma clausal de las premisas y de la conclusión negada",
      "Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∃x (A(x) ∧ B(x)) → C(a)</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">¬∃x (A(x) ∧ B(x)) ∨ C(a)</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x)) ∨ C(a)</span></li><li><b>5.</b> Universals a l'esquerra: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x) ∨ C(a))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬A(x) ∨ ¬B(x) ∨ C(a)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬A(x), ¬B(x), C(a)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬A(x), ¬B(x), C(a)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∃x (A(x) ∧ B(x)) → C(a)</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">¬∃x (A(x) ∧ B(x)) ∨ C(a)</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x)) ∨ C(a)</span></li><li><b>5.</b> Universales a la izquierda: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x) ∨ C(a))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬A(x) ∨ ¬B(x) ∨ C(a)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬A(x), ¬B(x), C(a)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬A(x), ¬B(x), C(a)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∃x (A(x) ∧ B(x)) → C(a)</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">¬∃x (A(x) ∧ B(x)) ∨ C(a)</span></li><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x)) ∨ C(a)</span></li><li><b>5.</b> Universals to the left: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x) ∨ C(a))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬A(x) ∨ ¬B(x) ∨ C(a)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬A(x), ¬B(x), C(a)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬A(x), ¬B(x), C(a)}</span></p></div>"
     ],
     "t": "html"
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
      "<div class=\"lx-cfb\"><p><span class=\"lf\">A(b) ∧ A(c)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {A(b)} , {A(c)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{A(b)}</span>, C4 = <span class=\"lf\">{A(c)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">A(b) ∧ A(c)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {A(b)} , {A(c)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{A(b)}</span>, C4 = <span class=\"lf\">{A(c)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">A(b) ∧ A(c)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {A(b)} , {A(c)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{A(b)}</span>, C4 = <span class=\"lf\">{A(c)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">D(b) ∨ B(c)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {D(b), B(c)} }</span></li></ol><p>→ C5 = <span class=\"lf\">{D(b), B(c)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">D(b) ∨ B(c)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {D(b), B(c)} }</span></li></ol><p>→ C5 = <span class=\"lf\">{D(b), B(c)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">D(b) ∨ B(c)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {D(b), B(c)} }</span></li></ol><p>→ C5 = <span class=\"lf\">{D(b), B(c)}</span></p></div>"
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
     "t": "note",
     "x": [
      "Les variables de clàusules diferents s'han renombrat perquè no en comparteixin cap (cada clàusula és independent).",
      "Las variables de cláusulas distintas se han renombrado para que no compartan ninguna (cada cláusula es independiente).",
      "The variables of different clauses have been renamed so that they share none (each clause is independent)."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬A(x), ¬B(x), C(a)} , {¬D(y), C(y)} , {A(b)} , {A(c)} , {D(b), B(c)} , {¬C(z)} }</span></p>"
    },
    {
     "t": "h",
     "x": [
      "Refutació per resolució",
      "Refutación por resolución",
      "Refutation by resolution"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C6, C1) = {¬A(x), ¬B(x)}</span> &nbsp;<span class=\"lx-umg\">UMG: {z ← a}</span></li><li><span class=\"lf\">R2 = res(R1, C4) = {¬B(c)}</span> &nbsp;<span class=\"lx-umg\">UMG: {x ← c}</span></li><li><span class=\"lf\">R3 = res(R2, C5) = {D(b)}</span> &nbsp;<span class=\"lx-umg\">UMG: ε</span></li><li><span class=\"lf\">R4 = res(R3, C2) = {C(b)}</span> &nbsp;<span class=\"lx-umg\">UMG: {y ← b}</span></li><li><span class=\"lf\">R5 = res(R4, C6) = □</span> &nbsp;<span class=\"lx-umg\">UMG: {z ← b}</span></li></ol>"
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(z) , C(a) }</td><td>ε</td></tr><tr><td>1</td><td>{z, a}</td><td>z ← a</td><td>{z ← a}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(z) , C(a) }</td><td>ε</td></tr><tr><td>1</td><td>{z, a}</td><td>z ← a</td><td>{z ← a}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(z) , C(a) }</td><td>ε</td></tr><tr><td>1</td><td>{z, a}</td><td>z ← a</td><td>{z ← a}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R1: ¬C(z) i C(a)",
      "Unificación R1: ¬C(z) i C(a)",
      "Unification R1: ¬C(z) and C(a)"
     ]
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { A(x) , A(c) }</td><td>ε</td></tr><tr><td>1</td><td>{x, c}</td><td>x ← c</td><td>{x ← c}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { A(x) , A(c) }</td><td>ε</td></tr><tr><td>1</td><td>{x, c}</td><td>x ← c</td><td>{x ← c}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { A(x) , A(c) }</td><td>ε</td></tr><tr><td>1</td><td>{x, c}</td><td>x ← c</td><td>{x ← c}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R2: ¬A(x) i A(c)",
      "Unificación R2: ¬A(x) i A(c)",
      "Unification R2: ¬A(x) and A(c)"
     ]
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { D(b) , D(y) }</td><td>ε</td></tr><tr><td>1</td><td>{b, y}</td><td>y ← b</td><td>{y ← b}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { D(b) , D(y) }</td><td>ε</td></tr><tr><td>1</td><td>{b, y}</td><td>y ← b</td><td>{y ← b}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { D(b) , D(y) }</td><td>ε</td></tr><tr><td>1</td><td>{b, y}</td><td>y ← b</td><td>{y ← b}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R4: D(b) i ¬D(y)",
      "Unificación R4: D(b) i ¬D(y)",
      "Unification R4: D(b) and ¬D(y)"
     ]
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(b) , C(z) }</td><td>ε</td></tr><tr><td>1</td><td>{b, z}</td><td>z ← b</td><td>{z ← b}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(b) , C(z) }</td><td>ε</td></tr><tr><td>1</td><td>{b, z}</td><td>z ← b</td><td>{z ← b}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(b) , C(z) }</td><td>ε</td></tr><tr><td>1</td><td>{b, z}</td><td>z ← b</td><td>{z ← b}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R5: C(b) i ¬C(z)",
      "Unificación R5: C(b) i ¬C(z)",
      "Unification R5: C(b) and ¬C(z)"
     ]
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 510 372\" width=\"510\" height=\"372\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"73.0\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"32\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"67.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"245.8\" y=\"14\" width=\"176.0\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"333.8\" y=\"32\" text-anchor=\"middle\">{¬A(x), ¬B(x), C(a)}</text><text class=\"lx-lb\" x=\"427.8\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"427.8\" y=\"39\" text-anchor=\"start\">{z ← a}</text><path class=\"lx-ln\" d=\"M110.9 42 L110.9 72\"></path><path class=\"lx-ln\" d=\"M333.8 42 L120.9 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"129.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"90\" text-anchor=\"middle\">{¬A(x), ¬B(x)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"299.7\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"333.8\" y=\"90\" text-anchor=\"middle\">{A(c)}</text><text class=\"lx-lb\" x=\"373.9\" y=\"83\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"373.9\" y=\"97\" text-anchor=\"start\">{x ← c}</text><path class=\"lx-ln\" d=\"M110.9 100 L110.9 130\"></path><path class=\"lx-ln\" d=\"M333.8 100 L120.9 130\"></path><rect class=\"lx-bx\" x=\"73.0\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"148\" text-anchor=\"middle\">{¬B(c)}</text><text class=\"lx-lb\" x=\"67.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"276.6\" y=\"130\" width=\"114.4\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"333.8\" y=\"148\" text-anchor=\"middle\">{D(b), B(c)}</text><text class=\"lx-lb\" x=\"397.0\" y=\"141\" text-anchor=\"start\">C5</text><text class=\"lx-um\" x=\"397.0\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M110.9 158 L110.9 188\"></path><path class=\"lx-ln\" d=\"M333.8 158 L120.9 188\"></path><rect class=\"lx-bx\" x=\"76.8\" y=\"188\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"206\" text-anchor=\"middle\">{D(b)}</text><text class=\"lx-lb\" x=\"70.8\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"272.8\" y=\"188\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"333.8\" y=\"206\" text-anchor=\"middle\">{¬D(y), C(y)}</text><text class=\"lx-lb\" x=\"400.9\" y=\"199\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"400.9\" y=\"213\" text-anchor=\"start\">{y ← b}</text><path class=\"lx-ln\" d=\"M110.9 216 L110.9 246\"></path><path class=\"lx-ln\" d=\"M333.8 216 L120.9 246\"></path><rect class=\"lx-bx\" x=\"76.8\" y=\"246\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"264\" text-anchor=\"middle\">{C(b)}</text><text class=\"lx-lb\" x=\"70.8\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"295.9\" y=\"246\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"333.8\" y=\"264\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"377.8\" y=\"257\" text-anchor=\"start\">C6</text><text class=\"lx-um\" x=\"377.8\" y=\"271\" text-anchor=\"start\">{z ← b}</text><path class=\"lx-ln\" d=\"M110.9 274 L110.9 304\"></path><path class=\"lx-ln\" d=\"M333.8 274 L120.9 304\"></path><rect class=\"lx-bx-e\" x=\"96.1\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"90.1\" y=\"322\" text-anchor=\"end\">R5</text></svg>",
      "<svg viewBox=\"0 0 510 372\" width=\"510\" height=\"372\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"73.0\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"32\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"67.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"245.8\" y=\"14\" width=\"176.0\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"333.8\" y=\"32\" text-anchor=\"middle\">{¬A(x), ¬B(x), C(a)}</text><text class=\"lx-lb\" x=\"427.8\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"427.8\" y=\"39\" text-anchor=\"start\">{z ← a}</text><path class=\"lx-ln\" d=\"M110.9 42 L110.9 72\"></path><path class=\"lx-ln\" d=\"M333.8 42 L120.9 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"129.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"90\" text-anchor=\"middle\">{¬A(x), ¬B(x)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"299.7\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"333.8\" y=\"90\" text-anchor=\"middle\">{A(c)}</text><text class=\"lx-lb\" x=\"373.9\" y=\"83\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"373.9\" y=\"97\" text-anchor=\"start\">{x ← c}</text><path class=\"lx-ln\" d=\"M110.9 100 L110.9 130\"></path><path class=\"lx-ln\" d=\"M333.8 100 L120.9 130\"></path><rect class=\"lx-bx\" x=\"73.0\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"148\" text-anchor=\"middle\">{¬B(c)}</text><text class=\"lx-lb\" x=\"67.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"276.6\" y=\"130\" width=\"114.4\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"333.8\" y=\"148\" text-anchor=\"middle\">{D(b), B(c)}</text><text class=\"lx-lb\" x=\"397.0\" y=\"141\" text-anchor=\"start\">C5</text><text class=\"lx-um\" x=\"397.0\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M110.9 158 L110.9 188\"></path><path class=\"lx-ln\" d=\"M333.8 158 L120.9 188\"></path><rect class=\"lx-bx\" x=\"76.8\" y=\"188\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"206\" text-anchor=\"middle\">{D(b)}</text><text class=\"lx-lb\" x=\"70.8\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"272.8\" y=\"188\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"333.8\" y=\"206\" text-anchor=\"middle\">{¬D(y), C(y)}</text><text class=\"lx-lb\" x=\"400.9\" y=\"199\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"400.9\" y=\"213\" text-anchor=\"start\">{y ← b}</text><path class=\"lx-ln\" d=\"M110.9 216 L110.9 246\"></path><path class=\"lx-ln\" d=\"M333.8 216 L120.9 246\"></path><rect class=\"lx-bx\" x=\"76.8\" y=\"246\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"264\" text-anchor=\"middle\">{C(b)}</text><text class=\"lx-lb\" x=\"70.8\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"295.9\" y=\"246\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"333.8\" y=\"264\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"377.8\" y=\"257\" text-anchor=\"start\">C6</text><text class=\"lx-um\" x=\"377.8\" y=\"271\" text-anchor=\"start\">{z ← b}</text><path class=\"lx-ln\" d=\"M110.9 274 L110.9 304\"></path><path class=\"lx-ln\" d=\"M333.8 274 L120.9 304\"></path><rect class=\"lx-bx-e\" x=\"96.1\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"90.1\" y=\"322\" text-anchor=\"end\">R5</text></svg>",
      "<svg viewBox=\"0 0 510 372\" width=\"510\" height=\"372\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"73.0\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"32\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"67.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"245.8\" y=\"14\" width=\"176.0\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"333.8\" y=\"32\" text-anchor=\"middle\">{¬A(x), ¬B(x), C(a)}</text><text class=\"lx-lb\" x=\"427.8\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"427.8\" y=\"39\" text-anchor=\"start\">{z ← a}</text><path class=\"lx-ln\" d=\"M110.9 42 L110.9 72\"></path><path class=\"lx-ln\" d=\"M333.8 42 L120.9 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"129.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"90\" text-anchor=\"middle\">{¬A(x), ¬B(x)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"299.7\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"333.8\" y=\"90\" text-anchor=\"middle\">{A(c)}</text><text class=\"lx-lb\" x=\"373.9\" y=\"83\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"373.9\" y=\"97\" text-anchor=\"start\">{x ← c}</text><path class=\"lx-ln\" d=\"M110.9 100 L110.9 130\"></path><path class=\"lx-ln\" d=\"M333.8 100 L120.9 130\"></path><rect class=\"lx-bx\" x=\"73.0\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"148\" text-anchor=\"middle\">{¬B(c)}</text><text class=\"lx-lb\" x=\"67.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"276.6\" y=\"130\" width=\"114.4\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"333.8\" y=\"148\" text-anchor=\"middle\">{D(b), B(c)}</text><text class=\"lx-lb\" x=\"397.0\" y=\"141\" text-anchor=\"start\">C5</text><text class=\"lx-um\" x=\"397.0\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M110.9 158 L110.9 188\"></path><path class=\"lx-ln\" d=\"M333.8 158 L120.9 188\"></path><rect class=\"lx-bx\" x=\"76.8\" y=\"188\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"206\" text-anchor=\"middle\">{D(b)}</text><text class=\"lx-lb\" x=\"70.8\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"272.8\" y=\"188\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"333.8\" y=\"206\" text-anchor=\"middle\">{¬D(y), C(y)}</text><text class=\"lx-lb\" x=\"400.9\" y=\"199\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"400.9\" y=\"213\" text-anchor=\"start\">{y ← b}</text><path class=\"lx-ln\" d=\"M110.9 216 L110.9 246\"></path><path class=\"lx-ln\" d=\"M333.8 216 L120.9 246\"></path><rect class=\"lx-bx\" x=\"76.8\" y=\"246\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"264\" text-anchor=\"middle\">{C(b)}</text><text class=\"lx-lb\" x=\"70.8\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"295.9\" y=\"246\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"333.8\" y=\"264\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"377.8\" y=\"257\" text-anchor=\"start\">C6</text><text class=\"lx-um\" x=\"377.8\" y=\"271\" text-anchor=\"start\">{z ← b}</text><path class=\"lx-ln\" d=\"M110.9 274 L110.9 304\"></path><path class=\"lx-ln\" d=\"M333.8 274 L120.9 304\"></path><rect class=\"lx-bx-e\" x=\"96.1\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"90.1\" y=\"322\" text-anchor=\"end\">R5</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-f2",
   "unit": "u8",
   "kind": "F",
   "level": "exam",
   "type": "open",
   "src": "exam",
   "srcName": [
    "CP2 2025-26 · Exercici 3",
    "CP2 2025-26 · Ejercicio 3",
    "Test 2 2025-26 · Exercise 3"
   ],
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Comproveu mitjançant el mètode de resolució si el següent raonament és vàlid o no:",
      "Comprobad mediante el método de resolución si el siguiente razonamiento es válido o no:",
      "Check by the resolution method whether the following argument is valid or not:"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∃x (A(x) ∧ B(x)) → C(joan)</span> <i>(premissa)</i></li><li><span class=\"lf\">∀x (D(x) → C(x))</span> <i>(premissa)</i></li><li><span class=\"lf\">A(pau) ∧ A(pere)</span> <i>(premissa)</i></li><li><span class=\"lf\">D(pau) ∨ B(pere)</span> <i>(premissa)</i></li><li><span class=\"lf\">∃x C(x)</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∃x (A(x) ∧ B(x)) → C(joan)</span> <i>(premisa)</i></li><li><span class=\"lf\">∀x (D(x) → C(x))</span> <i>(premisa)</i></li><li><span class=\"lf\">A(pau) ∧ A(pere)</span> <i>(premisa)</i></li><li><span class=\"lf\">D(pau) ∨ B(pere)</span> <i>(premisa)</i></li><li><span class=\"lf\">∃x C(x)</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∃x (A(x) ∧ B(x)) → C(joan)</span> <i>(premise)</i></li><li><span class=\"lf\">∀x (D(x) → C(x))</span> <i>(premise)</i></li><li><span class=\"lf\">A(pau) ∧ A(pere)</span> <i>(premise)</i></li><li><span class=\"lf\">D(pau) ∨ B(pere)</span> <i>(premise)</i></li><li><span class=\"lf\">∃x C(x)</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "On A, B, C, D són símbols de predicats, x, y, z són símbols de variables i joan, pau, pere són símbols de constants.",
      "Donde A, B, C, D son símbolos de predicados, x, y, z son símbolos de variables y joan, pau, pere son símbolos de constantes.",
      "Where A, B, C, D are predicate symbols, x, y, z are variable symbols and joan, pau, pere are constant symbols."
     ]
    },
    {
     "t": "p",
     "x": [
      "Expliqueu els passos que seguiu per fer la prova i **noteu els unificadors** (UMG).",
      "Explicad los pasos que seguís para hacer la prueba y **anotad los unificadores** (UMG).",
      "Explain the steps you follow to do the proof and **note the unifiers** (MGU)."
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Neguem la conclusió",
      "Negamos la conclusión",
      "We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Afegim la negació de la conclusió, <span class=\"lf\">¬∃x C(x)</span>, a les premisses i busquem la clàusula buida (prova per refutació).</p>",
      "<p>Añadimos la negación de la conclusión, <span class=\"lf\">¬∃x C(x)</span>, a las premisas y buscamos la cláusula vacía (prueba por refutación).</p>",
      "<p>We add the negation of the conclusion, <span class=\"lf\">¬∃x C(x)</span>, to the premises and look for the empty clause (proof by refutation).</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "Forma clausal de les premisses i de la conclusió negada",
      "Forma clausal de las premisas y de la conclusión negada",
      "Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∃x (A(x) ∧ B(x)) → C(joan)</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">¬∃x (A(x) ∧ B(x)) ∨ C(joan)</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x)) ∨ C(joan)</span></li><li><b>5.</b> Universals a l'esquerra: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x) ∨ C(joan))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬A(x) ∨ ¬B(x) ∨ C(joan)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬A(x), ¬B(x), C(joan)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬A(x), ¬B(x), C(joan)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∃x (A(x) ∧ B(x)) → C(joan)</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">¬∃x (A(x) ∧ B(x)) ∨ C(joan)</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x)) ∨ C(joan)</span></li><li><b>5.</b> Universales a la izquierda: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x) ∨ C(joan))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬A(x) ∨ ¬B(x) ∨ C(joan)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬A(x), ¬B(x), C(joan)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬A(x), ¬B(x), C(joan)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∃x (A(x) ∧ B(x)) → C(joan)</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">¬∃x (A(x) ∧ B(x)) ∨ C(joan)</span></li><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x)) ∨ C(joan)</span></li><li><b>5.</b> Universals to the left: <span class=\"lf\">∀x (¬A(x) ∨ ¬B(x) ∨ C(joan))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬A(x) ∨ ¬B(x) ∨ C(joan)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬A(x), ¬B(x), C(joan)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬A(x), ¬B(x), C(joan)}</span></p></div>"
     ],
     "t": "html"
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
     "t": "note",
     "x": [
      "Les variables de clàusules diferents s'han renombrat perquè no en comparteixin cap (cada clàusula és independent).",
      "Las variables de cláusulas distintas se han renombrado para que no compartan ninguna (cada cláusula es independiente).",
      "The variables of different clauses have been renamed so that they share none (each clause is independent)."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬A(x), ¬B(x), C(joan)} , {¬D(y), C(y)} , {A(pau)} , {A(pere)} , {D(pau), B(pere)} , {¬C(z)} }</span></p>"
    },
    {
     "t": "h",
     "x": [
      "Refutació per resolució",
      "Refutación por resolución",
      "Refutation by resolution"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C6, C1) = {¬A(x), ¬B(x)}</span> &nbsp;<span class=\"lx-umg\">UMG: {z ← joan}</span></li><li><span class=\"lf\">R2 = res(R1, C4) = {¬B(pere)}</span> &nbsp;<span class=\"lx-umg\">UMG: {x ← pere}</span></li><li><span class=\"lf\">R3 = res(R2, C5) = {D(pau)}</span> &nbsp;<span class=\"lx-umg\">UMG: ε</span></li><li><span class=\"lf\">R4 = res(R3, C2) = {C(pau)}</span> &nbsp;<span class=\"lx-umg\">UMG: {y ← pau}</span></li><li><span class=\"lf\">R5 = res(R4, C6) = □</span> &nbsp;<span class=\"lx-umg\">UMG: {z ← pau}</span></li></ol>"
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
     ]
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
     ]
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
     ]
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
     ]
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 554 372\" width=\"554\" height=\"372\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"73.0\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"32\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"67.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"245.8\" y=\"14\" width=\"199.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"32\" text-anchor=\"middle\">{¬A(x), ¬B(x), C(joan)}</text><text class=\"lx-lb\" x=\"450.9\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"450.9\" y=\"39\" text-anchor=\"start\">{z ← joan}</text><path class=\"lx-ln\" d=\"M110.9 42 L110.9 72\"></path><path class=\"lx-ln\" d=\"M345.4 42 L120.9 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"129.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"90\" text-anchor=\"middle\">{¬A(x), ¬B(x)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"299.7\" y=\"72\" width=\"91.3\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"90\" text-anchor=\"middle\">{A(pere)}</text><text class=\"lx-lb\" x=\"397.0\" y=\"83\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"397.0\" y=\"97\" text-anchor=\"start\">{x ← pere}</text><path class=\"lx-ln\" d=\"M110.9 100 L110.9 130\"></path><path class=\"lx-ln\" d=\"M345.4 100 L120.9 130\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"130\" width=\"99.0\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"148\" text-anchor=\"middle\">{¬B(pere)}</text><text class=\"lx-lb\" x=\"55.4\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"268.9\" y=\"130\" width=\"152.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"148\" text-anchor=\"middle\">{D(pau), B(pere)}</text><text class=\"lx-lb\" x=\"427.8\" y=\"141\" text-anchor=\"start\">C5</text><text class=\"lx-um\" x=\"427.8\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M110.9 158 L110.9 188\"></path><path class=\"lx-ln\" d=\"M345.4 158 L120.9 188\"></path><rect class=\"lx-bx\" x=\"69.1\" y=\"188\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"206\" text-anchor=\"middle\">{D(pau)}</text><text class=\"lx-lb\" x=\"63.1\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"284.3\" y=\"188\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"206\" text-anchor=\"middle\">{¬D(y), C(y)}</text><text class=\"lx-lb\" x=\"412.4\" y=\"199\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"412.4\" y=\"213\" text-anchor=\"start\">{y ← pau}</text><path class=\"lx-ln\" d=\"M110.9 216 L110.9 246\"></path><path class=\"lx-ln\" d=\"M345.4 216 L120.9 246\"></path><rect class=\"lx-bx\" x=\"69.1\" y=\"246\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"264\" text-anchor=\"middle\">{C(pau)}</text><text class=\"lx-lb\" x=\"63.1\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"307.4\" y=\"246\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"264\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"389.3\" y=\"257\" text-anchor=\"start\">C6</text><text class=\"lx-um\" x=\"389.3\" y=\"271\" text-anchor=\"start\">{z ← pau}</text><path class=\"lx-ln\" d=\"M110.9 274 L110.9 304\"></path><path class=\"lx-ln\" d=\"M345.4 274 L120.9 304\"></path><rect class=\"lx-bx-e\" x=\"96.1\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"90.1\" y=\"322\" text-anchor=\"end\">R5</text></svg>",
      "<svg viewBox=\"0 0 554 372\" width=\"554\" height=\"372\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"73.0\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"32\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"67.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"245.8\" y=\"14\" width=\"199.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"32\" text-anchor=\"middle\">{¬A(x), ¬B(x), C(joan)}</text><text class=\"lx-lb\" x=\"450.9\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"450.9\" y=\"39\" text-anchor=\"start\">{z ← joan}</text><path class=\"lx-ln\" d=\"M110.9 42 L110.9 72\"></path><path class=\"lx-ln\" d=\"M345.4 42 L120.9 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"129.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"90\" text-anchor=\"middle\">{¬A(x), ¬B(x)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"299.7\" y=\"72\" width=\"91.3\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"90\" text-anchor=\"middle\">{A(pere)}</text><text class=\"lx-lb\" x=\"397.0\" y=\"83\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"397.0\" y=\"97\" text-anchor=\"start\">{x ← pere}</text><path class=\"lx-ln\" d=\"M110.9 100 L110.9 130\"></path><path class=\"lx-ln\" d=\"M345.4 100 L120.9 130\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"130\" width=\"99.0\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"148\" text-anchor=\"middle\">{¬B(pere)}</text><text class=\"lx-lb\" x=\"55.4\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"268.9\" y=\"130\" width=\"152.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"148\" text-anchor=\"middle\">{D(pau), B(pere)}</text><text class=\"lx-lb\" x=\"427.8\" y=\"141\" text-anchor=\"start\">C5</text><text class=\"lx-um\" x=\"427.8\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M110.9 158 L110.9 188\"></path><path class=\"lx-ln\" d=\"M345.4 158 L120.9 188\"></path><rect class=\"lx-bx\" x=\"69.1\" y=\"188\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"206\" text-anchor=\"middle\">{D(pau)}</text><text class=\"lx-lb\" x=\"63.1\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"284.3\" y=\"188\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"206\" text-anchor=\"middle\">{¬D(y), C(y)}</text><text class=\"lx-lb\" x=\"412.4\" y=\"199\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"412.4\" y=\"213\" text-anchor=\"start\">{y ← pau}</text><path class=\"lx-ln\" d=\"M110.9 216 L110.9 246\"></path><path class=\"lx-ln\" d=\"M345.4 216 L120.9 246\"></path><rect class=\"lx-bx\" x=\"69.1\" y=\"246\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"264\" text-anchor=\"middle\">{C(pau)}</text><text class=\"lx-lb\" x=\"63.1\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"307.4\" y=\"246\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"264\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"389.3\" y=\"257\" text-anchor=\"start\">C6</text><text class=\"lx-um\" x=\"389.3\" y=\"271\" text-anchor=\"start\">{z ← pau}</text><path class=\"lx-ln\" d=\"M110.9 274 L110.9 304\"></path><path class=\"lx-ln\" d=\"M345.4 274 L120.9 304\"></path><rect class=\"lx-bx-e\" x=\"96.1\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"90.1\" y=\"322\" text-anchor=\"end\">R5</text></svg>",
      "<svg viewBox=\"0 0 554 372\" width=\"554\" height=\"372\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"73.0\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"32\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"67.0\" y=\"32\" text-anchor=\"end\">C6</text><rect class=\"lx-bx2\" x=\"245.8\" y=\"14\" width=\"199.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"32\" text-anchor=\"middle\">{¬A(x), ¬B(x), C(joan)}</text><text class=\"lx-lb\" x=\"450.9\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"450.9\" y=\"39\" text-anchor=\"start\">{z ← joan}</text><path class=\"lx-ln\" d=\"M110.9 42 L110.9 72\"></path><path class=\"lx-ln\" d=\"M345.4 42 L120.9 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"129.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"90\" text-anchor=\"middle\">{¬A(x), ¬B(x)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"299.7\" y=\"72\" width=\"91.3\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"90\" text-anchor=\"middle\">{A(pere)}</text><text class=\"lx-lb\" x=\"397.0\" y=\"83\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"397.0\" y=\"97\" text-anchor=\"start\">{x ← pere}</text><path class=\"lx-ln\" d=\"M110.9 100 L110.9 130\"></path><path class=\"lx-ln\" d=\"M345.4 100 L120.9 130\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"130\" width=\"99.0\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"148\" text-anchor=\"middle\">{¬B(pere)}</text><text class=\"lx-lb\" x=\"55.4\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"268.9\" y=\"130\" width=\"152.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"148\" text-anchor=\"middle\">{D(pau), B(pere)}</text><text class=\"lx-lb\" x=\"427.8\" y=\"141\" text-anchor=\"start\">C5</text><text class=\"lx-um\" x=\"427.8\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M110.9 158 L110.9 188\"></path><path class=\"lx-ln\" d=\"M345.4 158 L120.9 188\"></path><rect class=\"lx-bx\" x=\"69.1\" y=\"188\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"206\" text-anchor=\"middle\">{D(pau)}</text><text class=\"lx-lb\" x=\"63.1\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"284.3\" y=\"188\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"206\" text-anchor=\"middle\">{¬D(y), C(y)}</text><text class=\"lx-lb\" x=\"412.4\" y=\"199\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"412.4\" y=\"213\" text-anchor=\"start\">{y ← pau}</text><path class=\"lx-ln\" d=\"M110.9 216 L110.9 246\"></path><path class=\"lx-ln\" d=\"M345.4 216 L120.9 246\"></path><rect class=\"lx-bx\" x=\"69.1\" y=\"246\" width=\"83.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"264\" text-anchor=\"middle\">{C(pau)}</text><text class=\"lx-lb\" x=\"63.1\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"307.4\" y=\"246\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"345.4\" y=\"264\" text-anchor=\"middle\">{¬C(z)}</text><text class=\"lx-lb\" x=\"389.3\" y=\"257\" text-anchor=\"start\">C6</text><text class=\"lx-um\" x=\"389.3\" y=\"271\" text-anchor=\"start\">{z ← pau}</text><path class=\"lx-ln\" d=\"M110.9 274 L110.9 304\"></path><path class=\"lx-ln\" d=\"M345.4 274 L120.9 304\"></path><rect class=\"lx-bx-e\" x=\"96.1\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"110.9\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"90.1\" y=\"322\" text-anchor=\"end\">R5</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-f3",
   "unit": "u8",
   "kind": "F",
   "level": "exam",
   "type": "open",
   "src": "exam",
   "srcName": [
    "Treball d'autoavaluació · Exercici 3",
    "Trabajo de autoevaluación · Ejercicio 3",
    "Self-assessment work · Exercise 3"
   ],
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Comproveu mitjançant el mètode de resolució si el següent raonament és vàlid o no:",
      "Comprobad mediante el método de resolución si el siguiente razonamiento es válido o no:",
      "Check by the resolution method whether the following argument is valid or not:"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∃x ∀y (A(y) → ∃z (B(z) ∧ C(z,x)))</span> <i>(premissa)</i></li><li><span class=\"lf\">¬∀x ∃y (A(x) ∧ B(y))</span> <i>(premissa)</i></li><li><span class=\"lf\">∀x ∀y (C(x,y) → A(x))</span> <i>(premissa)</i></li><li><span class=\"lf\">∃x ∀y ¬C(x,y)</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∃x ∀y (A(y) → ∃z (B(z) ∧ C(z,x)))</span> <i>(premisa)</i></li><li><span class=\"lf\">¬∀x ∃y (A(x) ∧ B(y))</span> <i>(premisa)</i></li><li><span class=\"lf\">∀x ∀y (C(x,y) → A(x))</span> <i>(premisa)</i></li><li><span class=\"lf\">∃x ∀y ¬C(x,y)</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∃x ∀y (A(y) → ∃z (B(z) ∧ C(z,x)))</span> <i>(premise)</i></li><li><span class=\"lf\">¬∀x ∃y (A(x) ∧ B(y))</span> <i>(premise)</i></li><li><span class=\"lf\">∀x ∀y (C(x,y) → A(x))</span> <i>(premise)</i></li><li><span class=\"lf\">∃x ∀y ¬C(x,y)</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "On A, B, C són símbols de predicats, x, y, z són símbols de variables.",
      "Donde A, B, C son símbolos de predicados, x, y, z son símbolos de variables.",
      "Where A, B, C are predicate symbols, x, y, z are variable symbols."
     ]
    },
    {
     "t": "p",
     "x": [
      "Expliqueu els passos que seguiu per fer la prova i **noteu els unificadors** (UMG).",
      "Explicad los pasos que seguís para hacer la prueba y **anotad los unificadores** (UMG).",
      "Explain the steps you follow to do the proof and **note the unifiers** (MGU)."
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Neguem la conclusió",
      "Negamos la conclusión",
      "We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Afegim la negació de la conclusió, <span class=\"lf\">¬∃x ∀y ¬C(x,y)</span>, a les premisses i busquem la clàusula buida (prova per refutació).</p>",
      "<p>Añadimos la negación de la conclusión, <span class=\"lf\">¬∃x ∀y ¬C(x,y)</span>, a las premisas y buscamos la cláusula vacía (prueba por refutación).</p>",
      "<p>We add the negation of the conclusion, <span class=\"lf\">¬∃x ∀y ¬C(x,y)</span>, to the premises and look for the empty clause (proof by refutation).</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "Forma clausal de les premisses i de la conclusió negada",
      "Forma clausal de las premisas y de la conclusión negada",
      "Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∃x ∀y (A(y) → ∃z (B(z) ∧ C(z,x)))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∃x ∀y (¬A(y) ∨ ∃z (B(z) ∧ C(z,x)))</span></li><li><b>4.</b> Skolemitzar: x → k (constant de Skolem); z → f(y) (funció de Skolem de y)<br><span class=\"lf\">∀y (¬A(y) ∨ (B(f(y)) ∧ C(f(y),k)))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬A(y) ∨ (B(f(y)) ∧ C(f(y),k))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬A(y) ∨ B(f(y))) ∧ (¬A(y) ∨ C(f(y),k))</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬A(y), B(f(y))} , {¬A(y), C(f(y),k)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬A(x), B(f(x))}</span>, C2 = <span class=\"lf\">{¬A(y), C(f(y),k)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∃x ∀y (A(y) → ∃z (B(z) ∧ C(z,x)))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∃x ∀y (¬A(y) ∨ ∃z (B(z) ∧ C(z,x)))</span></li><li><b>4.</b> Skolemizar: x → k (constante de Skolem); z → f(y) (función de Skolem de y)<br><span class=\"lf\">∀y (¬A(y) ∨ (B(f(y)) ∧ C(f(y),k)))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬A(y) ∨ (B(f(y)) ∧ C(f(y),k))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬A(y) ∨ B(f(y))) ∧ (¬A(y) ∨ C(f(y),k))</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬A(y), B(f(y))} , {¬A(y), C(f(y),k)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬A(x), B(f(x))}</span>, C2 = <span class=\"lf\">{¬A(y), C(f(y),k)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∃x ∀y (A(y) → ∃z (B(z) ∧ C(z,x)))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∃x ∀y (¬A(y) ∨ ∃z (B(z) ∧ C(z,x)))</span></li><li><b>4.</b> Skolemise: x → k (Skolem constant); z → f(y) (Skolem function of y)<br><span class=\"lf\">∀y (¬A(y) ∨ (B(f(y)) ∧ C(f(y),k)))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬A(y) ∨ (B(f(y)) ∧ C(f(y),k))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬A(y) ∨ B(f(y))) ∧ (¬A(y) ∨ C(f(y),k))</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬A(y), B(f(y))} , {¬A(y), C(f(y),k)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬A(x), B(f(x))}</span>, C2 = <span class=\"lf\">{¬A(y), C(f(y),k)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">¬∀x ∃y (A(x) ∧ B(y))</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∃x ∀y (¬A(x) ∨ ¬B(y))</span></li><li><b>4.</b> Skolemitzar: x → k1 (constant de Skolem)<br><span class=\"lf\">∀y (¬A(k1) ∨ ¬B(y))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬A(k1) ∨ ¬B(y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬A(k1), ¬B(y)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{¬A(k1), ¬B(z)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">¬∀x ∃y (A(x) ∧ B(y))</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∃x ∀y (¬A(x) ∨ ¬B(y))</span></li><li><b>4.</b> Skolemizar: x → k1 (constante de Skolem)<br><span class=\"lf\">∀y (¬A(k1) ∨ ¬B(y))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬A(k1) ∨ ¬B(y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬A(k1), ¬B(y)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{¬A(k1), ¬B(z)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">¬∀x ∃y (A(x) ∧ B(y))</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∃x ∀y (¬A(x) ∨ ¬B(y))</span></li><li><b>4.</b> Skolemise: x → k1 (Skolem constant)<br><span class=\"lf\">∀y (¬A(k1) ∨ ¬B(y))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬A(k1) ∨ ¬B(y)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬A(k1), ¬B(y)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{¬A(k1), ¬B(z)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x ∀y (C(x,y) → A(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x ∀y (¬C(x,y) ∨ A(x))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬C(x,y) ∨ A(x)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬C(x,y), A(x)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{¬C(u,v), A(u)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x ∀y (C(x,y) → A(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x ∀y (¬C(x,y) ∨ A(x))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬C(x,y) ∨ A(x)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬C(x,y), A(x)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{¬C(u,v), A(u)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x ∀y (C(x,y) → A(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x ∀y (¬C(x,y) ∨ A(x))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬C(x,y) ∨ A(x)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬C(x,y), A(x)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{¬C(u,v), A(u)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∃x ∀y ¬C(x,y)</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x ∃y C(x,y)</span></li><li><b>4.</b> Skolemitzar: y → g(x) (funció de Skolem de x)<br><span class=\"lf\">∀x C(x,g(x))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">C(x,g(x))</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {C(x,g(x))} }</span></li></ol><p>→ C5 = <span class=\"lf\">{C(w,g(w))}</span></p></div>",
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∃x ∀y ¬C(x,y)</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x ∃y C(x,y)</span></li><li><b>4.</b> Skolemizar: y → g(x) (función de Skolem de x)<br><span class=\"lf\">∀x C(x,g(x))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">C(x,g(x))</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {C(x,g(x))} }</span></li></ol><p>→ C5 = <span class=\"lf\">{C(w,g(w))}</span></p></div>",
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∃x ∀y ¬C(x,y)</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x ∃y C(x,y)</span></li><li><b>4.</b> Skolemise: y → g(x) (Skolem function of x)<br><span class=\"lf\">∀x C(x,g(x))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">C(x,g(x))</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {C(x,g(x))} }</span></li></ol><p>→ C5 = <span class=\"lf\">{C(w,g(w))}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "t": "note",
     "x": [
      "Les variables de clàusules diferents s'han renombrat perquè no en comparteixin cap (cada clàusula és independent).",
      "Las variables de cláusulas distintas se han renombrado para que no compartan ninguna (cada cláusula es independiente).",
      "The variables of different clauses have been renamed so that they share none (each clause is independent)."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬A(x), B(f(x))} , {¬A(y), C(f(y),k)} , {¬A(k1), ¬B(z)} , {¬C(u,v), A(u)} , {C(w,g(w))} }</span></p>"
    },
    {
     "t": "h",
     "x": [
      "Refutació per resolució",
      "Refutación por resolución",
      "Refutation by resolution"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C5, C4) = {A(u)}</span> &nbsp;<span class=\"lx-umg\">UMG: {w ← u, v ← g(u)}</span></li><li><span class=\"lf\">R2 = res(R1, C3) = {¬B(z)}</span> &nbsp;<span class=\"lx-umg\">UMG: {u ← k1}</span></li><li><span class=\"lf\">R3 = res(R2, C1) = {¬A(x)}</span> &nbsp;<span class=\"lx-umg\">UMG: {z ← f(x)}</span></li><li><span class=\"lf\">R4 = res(R3, R1) = □</span> &nbsp;<span class=\"lx-umg\">UMG: {x ← u}</span></li></ol>"
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(w,g(w)) , C(u,v) }</td><td>ε</td></tr><tr><td>1</td><td>{w, u}</td><td>w ← u</td><td>{w ← u}</td></tr><tr><td>2</td><td>{g(u), v}</td><td>v ← g(u)</td><td>{w ← u, v ← g(u)}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(w,g(w)) , C(u,v) }</td><td>ε</td></tr><tr><td>1</td><td>{w, u}</td><td>w ← u</td><td>{w ← u}</td></tr><tr><td>2</td><td>{g(u), v}</td><td>v ← g(u)</td><td>{w ← u, v ← g(u)}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(w,g(w)) , C(u,v) }</td><td>ε</td></tr><tr><td>1</td><td>{w, u}</td><td>w ← u</td><td>{w ← u}</td></tr><tr><td>2</td><td>{g(u), v}</td><td>v ← g(u)</td><td>{w ← u, v ← g(u)}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R1: C(w,g(w)) i ¬C(u,v)",
      "Unificación R1: C(w,g(w)) i ¬C(u,v)",
      "Unification R1: C(w,g(w)) and ¬C(u,v)"
     ]
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { A(u) , A(k1) }</td><td>ε</td></tr><tr><td>1</td><td>{u, k1}</td><td>u ← k1</td><td>{u ← k1}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { A(u) , A(k1) }</td><td>ε</td></tr><tr><td>1</td><td>{u, k1}</td><td>u ← k1</td><td>{u ← k1}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { A(u) , A(k1) }</td><td>ε</td></tr><tr><td>1</td><td>{u, k1}</td><td>u ← k1</td><td>{u ← k1}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R2: A(u) i ¬A(k1)",
      "Unificación R2: A(u) i ¬A(k1)",
      "Unification R2: A(u) and ¬A(k1)"
     ]
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { B(z) , B(f(x)) }</td><td>ε</td></tr><tr><td>1</td><td>{z, f(x)}</td><td>z ← f(x)</td><td>{z ← f(x)}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { B(z) , B(f(x)) }</td><td>ε</td></tr><tr><td>1</td><td>{z, f(x)}</td><td>z ← f(x)</td><td>{z ← f(x)}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { B(z) , B(f(x)) }</td><td>ε</td></tr><tr><td>1</td><td>{z, f(x)}</td><td>z ← f(x)</td><td>{z ← f(x)}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R3: ¬B(z) i B(f(x))",
      "Unificación R3: ¬B(z) i B(f(x))",
      "Unification R3: ¬B(z) and B(f(x))"
     ]
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { A(x) , A(u) }</td><td>ε</td></tr><tr><td>1</td><td>{x, u}</td><td>x ← u</td><td>{x ← u}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { A(x) , A(u) }</td><td>ε</td></tr><tr><td>1</td><td>{x, u}</td><td>x ← u</td><td>{x ← u}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { A(x) , A(u) }</td><td>ε</td></tr><tr><td>1</td><td>{x, u}</td><td>x ← u</td><td>{x ← u}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R4: ¬A(x) i A(u)",
      "Unificación R4: ¬A(x) i A(u)",
      "Unification R4: ¬A(x) and A(u)"
     ]
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 526 314\" width=\"526\" height=\"314\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"106.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"99.3\" y=\"32\" text-anchor=\"middle\">{C(w,g(w))}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C5</text><rect class=\"lx-bx2\" x=\"226.5\" y=\"14\" width=\"137.5\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"295.3\" y=\"32\" text-anchor=\"middle\">{¬C(u,v), A(u)}</text><text class=\"lx-lb\" x=\"370.0\" y=\"25\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"370.0\" y=\"39\" text-anchor=\"start\">{w ← u, v ← g(u)}</text><path class=\"lx-ln\" d=\"M99.3 42 L99.3 72\"></path><path class=\"lx-ln\" d=\"M295.3 42 L109.3 72\"></path><rect class=\"lx-bx\" x=\"65.2\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"99.3\" y=\"90\" text-anchor=\"middle\">{A(u)}</text><text class=\"lx-lb\" x=\"59.2\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"226.5\" y=\"72\" width=\"137.5\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"295.3\" y=\"90\" text-anchor=\"middle\">{¬A(k1), ¬B(z)}</text><text class=\"lx-lb\" x=\"370.0\" y=\"83\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"370.0\" y=\"97\" text-anchor=\"start\">{u ← k1}</text><path class=\"lx-ln\" d=\"M99.3 100 L99.3 130\"></path><path class=\"lx-ln\" d=\"M295.3 100 L109.3 130\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"99.3\" y=\"148\" text-anchor=\"middle\">{¬B(z)}</text><text class=\"lx-lb\" x=\"55.4\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"222.7\" y=\"130\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"295.3\" y=\"148\" text-anchor=\"middle\">{¬A(x), B(f(x))}</text><text class=\"lx-lb\" x=\"373.9\" y=\"141\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"373.9\" y=\"155\" text-anchor=\"start\">{z ← f(x)}</text><path class=\"lx-ln\" d=\"M99.3 158 L99.3 188\"></path><path class=\"lx-ln\" d=\"M295.3 158 L109.3 188\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"188\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"99.3\" y=\"206\" text-anchor=\"middle\">{¬A(x)}</text><text class=\"lx-lb\" x=\"55.4\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"261.2\" y=\"188\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"295.3\" y=\"206\" text-anchor=\"middle\">{A(u)}</text><text class=\"lx-lb\" x=\"335.4\" y=\"199\" text-anchor=\"start\">R1</text><text class=\"lx-um\" x=\"335.4\" y=\"213\" text-anchor=\"start\">{x ← u}</text><path class=\"lx-ln\" d=\"M99.3 216 L99.3 246\"></path><path class=\"lx-ln\" d=\"M295.3 216 L109.3 246\"></path><rect class=\"lx-bx-e\" x=\"84.5\" y=\"246\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"99.3\" y=\"264\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"78.5\" y=\"264\" text-anchor=\"end\">R4</text></svg>",
      "<svg viewBox=\"0 0 526 314\" width=\"526\" height=\"314\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"106.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"99.3\" y=\"32\" text-anchor=\"middle\">{C(w,g(w))}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C5</text><rect class=\"lx-bx2\" x=\"226.5\" y=\"14\" width=\"137.5\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"295.3\" y=\"32\" text-anchor=\"middle\">{¬C(u,v), A(u)}</text><text class=\"lx-lb\" x=\"370.0\" y=\"25\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"370.0\" y=\"39\" text-anchor=\"start\">{w ← u, v ← g(u)}</text><path class=\"lx-ln\" d=\"M99.3 42 L99.3 72\"></path><path class=\"lx-ln\" d=\"M295.3 42 L109.3 72\"></path><rect class=\"lx-bx\" x=\"65.2\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"99.3\" y=\"90\" text-anchor=\"middle\">{A(u)}</text><text class=\"lx-lb\" x=\"59.2\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"226.5\" y=\"72\" width=\"137.5\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"295.3\" y=\"90\" text-anchor=\"middle\">{¬A(k1), ¬B(z)}</text><text class=\"lx-lb\" x=\"370.0\" y=\"83\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"370.0\" y=\"97\" text-anchor=\"start\">{u ← k1}</text><path class=\"lx-ln\" d=\"M99.3 100 L99.3 130\"></path><path class=\"lx-ln\" d=\"M295.3 100 L109.3 130\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"99.3\" y=\"148\" text-anchor=\"middle\">{¬B(z)}</text><text class=\"lx-lb\" x=\"55.4\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"222.7\" y=\"130\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"295.3\" y=\"148\" text-anchor=\"middle\">{¬A(x), B(f(x))}</text><text class=\"lx-lb\" x=\"373.9\" y=\"141\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"373.9\" y=\"155\" text-anchor=\"start\">{z ← f(x)}</text><path class=\"lx-ln\" d=\"M99.3 158 L99.3 188\"></path><path class=\"lx-ln\" d=\"M295.3 158 L109.3 188\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"188\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"99.3\" y=\"206\" text-anchor=\"middle\">{¬A(x)}</text><text class=\"lx-lb\" x=\"55.4\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"261.2\" y=\"188\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"295.3\" y=\"206\" text-anchor=\"middle\">{A(u)}</text><text class=\"lx-lb\" x=\"335.4\" y=\"199\" text-anchor=\"start\">R1</text><text class=\"lx-um\" x=\"335.4\" y=\"213\" text-anchor=\"start\">{x ← u}</text><path class=\"lx-ln\" d=\"M99.3 216 L99.3 246\"></path><path class=\"lx-ln\" d=\"M295.3 216 L109.3 246\"></path><rect class=\"lx-bx-e\" x=\"84.5\" y=\"246\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"99.3\" y=\"264\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"78.5\" y=\"264\" text-anchor=\"end\">R4</text></svg>",
      "<svg viewBox=\"0 0 526 314\" width=\"526\" height=\"314\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"106.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"99.3\" y=\"32\" text-anchor=\"middle\">{C(w,g(w))}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C5</text><rect class=\"lx-bx2\" x=\"226.5\" y=\"14\" width=\"137.5\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"295.3\" y=\"32\" text-anchor=\"middle\">{¬C(u,v), A(u)}</text><text class=\"lx-lb\" x=\"370.0\" y=\"25\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"370.0\" y=\"39\" text-anchor=\"start\">{w ← u, v ← g(u)}</text><path class=\"lx-ln\" d=\"M99.3 42 L99.3 72\"></path><path class=\"lx-ln\" d=\"M295.3 42 L109.3 72\"></path><rect class=\"lx-bx\" x=\"65.2\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"99.3\" y=\"90\" text-anchor=\"middle\">{A(u)}</text><text class=\"lx-lb\" x=\"59.2\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"226.5\" y=\"72\" width=\"137.5\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"295.3\" y=\"90\" text-anchor=\"middle\">{¬A(k1), ¬B(z)}</text><text class=\"lx-lb\" x=\"370.0\" y=\"83\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"370.0\" y=\"97\" text-anchor=\"start\">{u ← k1}</text><path class=\"lx-ln\" d=\"M99.3 100 L99.3 130\"></path><path class=\"lx-ln\" d=\"M295.3 100 L109.3 130\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"99.3\" y=\"148\" text-anchor=\"middle\">{¬B(z)}</text><text class=\"lx-lb\" x=\"55.4\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"222.7\" y=\"130\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"295.3\" y=\"148\" text-anchor=\"middle\">{¬A(x), B(f(x))}</text><text class=\"lx-lb\" x=\"373.9\" y=\"141\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"373.9\" y=\"155\" text-anchor=\"start\">{z ← f(x)}</text><path class=\"lx-ln\" d=\"M99.3 158 L99.3 188\"></path><path class=\"lx-ln\" d=\"M295.3 158 L109.3 188\"></path><rect class=\"lx-bx\" x=\"61.4\" y=\"188\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"99.3\" y=\"206\" text-anchor=\"middle\">{¬A(x)}</text><text class=\"lx-lb\" x=\"55.4\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"261.2\" y=\"188\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"295.3\" y=\"206\" text-anchor=\"middle\">{A(u)}</text><text class=\"lx-lb\" x=\"335.4\" y=\"199\" text-anchor=\"start\">R1</text><text class=\"lx-um\" x=\"335.4\" y=\"213\" text-anchor=\"start\">{x ← u}</text><path class=\"lx-ln\" d=\"M99.3 216 L99.3 246\"></path><path class=\"lx-ln\" d=\"M295.3 216 L109.3 246\"></path><rect class=\"lx-bx-e\" x=\"84.5\" y=\"246\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"99.3\" y=\"264\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"78.5\" y=\"264\" text-anchor=\"end\">R4</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-f4",
   "unit": "u8",
   "kind": "F",
   "level": "exam",
   "type": "open",
   "src": "exam",
   "srcName": [
    "CP2 2024-25 · Exercici 3",
    "CP2 2024-25 · Ejercicio 3",
    "Test 2 2024-25 · Exercise 3"
   ],
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Comproveu mitjançant el mètode de resolució si el següent raonament és vàlid o no:",
      "Comprobad mediante el método de resolución si el siguiente razonamiento es válido o no:",
      "Check by the resolution method whether the following argument is valid or not:"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x (¬P(x) ∨ Q(x))</span> <i>(premissa)</i></li><li><span class=\"lf\">¬R(a) ∨ ¬R(b)</span> <i>(premissa)</i></li><li><span class=\"lf\">∀x (Q(x) → R(x))</span> <i>(premissa)</i></li><li><span class=\"lf\">∀x P(x) → ∃y R(y)</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x (¬P(x) ∨ Q(x))</span> <i>(premisa)</i></li><li><span class=\"lf\">¬R(a) ∨ ¬R(b)</span> <i>(premisa)</i></li><li><span class=\"lf\">∀x (Q(x) → R(x))</span> <i>(premisa)</i></li><li><span class=\"lf\">∀x P(x) → ∃y R(y)</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x (¬P(x) ∨ Q(x))</span> <i>(premise)</i></li><li><span class=\"lf\">¬R(a) ∨ ¬R(b)</span> <i>(premise)</i></li><li><span class=\"lf\">∀x (Q(x) → R(x))</span> <i>(premise)</i></li><li><span class=\"lf\">∀x P(x) → ∃y R(y)</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "On P, Q, R són símbols de predicats, x, y, z són símbols de variables i a, b són símbols de constants.",
      "Donde P, Q, R son símbolos de predicados, x, y, z son símbolos de variables y a, b son símbolos de constantes.",
      "Where P, Q, R are predicate symbols, x, y, z are variable symbols and a, b are constant symbols."
     ]
    },
    {
     "t": "p",
     "x": [
      "Expliqueu els passos que seguiu per fer la prova i **noteu els unificadors** (UMG).",
      "Explicad los pasos que seguís para hacer la prueba y **anotad los unificadores** (UMG).",
      "Explain the steps you follow to do the proof and **note the unifiers** (MGU)."
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Neguem la conclusió",
      "Negamos la conclusión",
      "We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Afegim la negació de la conclusió, <span class=\"lf\">¬(∀x P(x) → ∃y R(y))</span>, a les premisses i busquem la clàusula buida (prova per refutació).</p>",
      "<p>Añadimos la negación de la conclusión, <span class=\"lf\">¬(∀x P(x) → ∃y R(y))</span>, a las premisas y buscamos la cláusula vacía (prueba por refutación).</p>",
      "<p>We add the negation of the conclusion, <span class=\"lf\">¬(∀x P(x) → ∃y R(y))</span>, to the premises and look for the empty clause (proof by refutation).</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "Forma clausal de les premisses i de la conclusió negada",
      "Forma clausal de las premisas y de la conclusión negada",
      "Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (¬P(x) ∨ Q(x))</span></p><ol class=\"lx-cs\"><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬P(x) ∨ Q(x)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬P(x), Q(x)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬P(x), Q(x)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (¬P(x) ∨ Q(x))</span></p><ol class=\"lx-cs\"><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬P(x) ∨ Q(x)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬P(x), Q(x)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬P(x), Q(x)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (¬P(x) ∨ Q(x))</span></p><ol class=\"lx-cs\"><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬P(x) ∨ Q(x)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬P(x), Q(x)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬P(x), Q(x)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">¬R(a) ∨ ¬R(b)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬R(a), ¬R(b)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{¬R(a), ¬R(b)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">¬R(a) ∨ ¬R(b)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬R(a), ¬R(b)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{¬R(a), ¬R(b)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">¬R(a) ∨ ¬R(b)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬R(a), ¬R(b)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{¬R(a), ¬R(b)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (Q(x) → R(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x (¬Q(x) ∨ R(x))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬Q(x) ∨ R(x)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬Q(x), R(x)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{¬Q(y), R(y)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (Q(x) → R(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x (¬Q(x) ∨ R(x))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬Q(x) ∨ R(x)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬Q(x), R(x)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{¬Q(y), R(y)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (Q(x) → R(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x (¬Q(x) ∨ R(x))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬Q(x) ∨ R(x)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬Q(x), R(x)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{¬Q(y), R(y)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬(∀x P(x) → ∃y R(y))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">¬(¬∀x P(x) ∨ ∃y R(y))</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x P(x) ∧ ∀y ¬R(y)</span></li><li><b>5.</b> Universals a l'esquerra: <span class=\"lf\">∀x ∀y (P(x) ∧ ¬R(y))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">P(x) ∧ ¬R(y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {P(x)} , {¬R(y)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{P(z)}</span>, C5 = <span class=\"lf\">{¬R(u)}</span></p></div>",
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬(∀x P(x) → ∃y R(y))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">¬(¬∀x P(x) ∨ ∃y R(y))</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x P(x) ∧ ∀y ¬R(y)</span></li><li><b>5.</b> Universales a la izquierda: <span class=\"lf\">∀x ∀y (P(x) ∧ ¬R(y))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">P(x) ∧ ¬R(y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {P(x)} , {¬R(y)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{P(z)}</span>, C5 = <span class=\"lf\">{¬R(u)}</span></p></div>",
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬(∀x P(x) → ∃y R(y))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">¬(¬∀x P(x) ∨ ∃y R(y))</span></li><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x P(x) ∧ ∀y ¬R(y)</span></li><li><b>5.</b> Universals to the left: <span class=\"lf\">∀x ∀y (P(x) ∧ ¬R(y))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">P(x) ∧ ¬R(y)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {P(x)} , {¬R(y)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{P(z)}</span>, C5 = <span class=\"lf\">{¬R(u)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "t": "note",
     "x": [
      "Les variables de clàusules diferents s'han renombrat perquè no en comparteixin cap (cada clàusula és independent).",
      "Las variables de cláusulas distintas se han renombrado para que no compartan ninguna (cada cláusula es independiente).",
      "The variables of different clauses have been renamed so that they share none (each clause is independent)."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬P(x), Q(x)} , {¬R(a), ¬R(b)} , {¬Q(y), R(y)} , {P(z)} , {¬R(u)} }</span></p>"
    },
    {
     "t": "h",
     "x": [
      "Refutació per resolució",
      "Refutación por resolución",
      "Refutation by resolution"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C4, C1) = {Q(x)}</span> &nbsp;<span class=\"lx-umg\">UMG: {z ← x}</span></li><li><span class=\"lf\">R2 = res(R1, C3) = {R(y)}</span> &nbsp;<span class=\"lx-umg\">UMG: {x ← y}</span></li><li><span class=\"lf\">R3 = res(R2, C5) = □</span> &nbsp;<span class=\"lx-umg\">UMG: {y ← u}</span></li></ol>"
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { P(z) , P(x) }</td><td>ε</td></tr><tr><td>1</td><td>{z, x}</td><td>z ← x</td><td>{z ← x}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { P(z) , P(x) }</td><td>ε</td></tr><tr><td>1</td><td>{z, x}</td><td>z ← x</td><td>{z ← x}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { P(z) , P(x) }</td><td>ε</td></tr><tr><td>1</td><td>{z, x}</td><td>z ← x</td><td>{z ← x}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R1: P(z) i ¬P(x)",
      "Unificación R1: P(z) i ¬P(x)",
      "Unification R1: P(z) and ¬P(x)"
     ]
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { Q(x) , Q(y) }</td><td>ε</td></tr><tr><td>1</td><td>{x, y}</td><td>x ← y</td><td>{x ← y}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { Q(x) , Q(y) }</td><td>ε</td></tr><tr><td>1</td><td>{x, y}</td><td>x ← y</td><td>{x ← y}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { Q(x) , Q(y) }</td><td>ε</td></tr><tr><td>1</td><td>{x, y}</td><td>x ← y</td><td>{x ← y}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R2: Q(x) i ¬Q(y)",
      "Unificación R2: Q(x) i ¬Q(y)",
      "Unification R2: Q(x) and ¬Q(y)"
     ]
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { R(y) , R(u) }</td><td>ε</td></tr><tr><td>1</td><td>{y, u}</td><td>y ← u</td><td>{y ← u}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { R(y) , R(u) }</td><td>ε</td></tr><tr><td>1</td><td>{y, u}</td><td>y ← u</td><td>{y ← u}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { R(y) , R(u) }</td><td>ε</td></tr><tr><td>1</td><td>{y, u}</td><td>y ← u</td><td>{y ← u}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R3: R(y) i ¬R(u)",
      "Unificación R3: R(y) i ¬R(u)",
      "Unification R3: R(y) and ¬R(u)"
     ]
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 395 256\" width=\"395\" height=\"256\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"32\" text-anchor=\"middle\">{P(z)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"14\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"32\" text-anchor=\"middle\">{¬P(x), Q(x)}</text><text class=\"lx-lb\" x=\"312.3\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"312.3\" y=\"39\" text-anchor=\"start\">{z ← x}</text><path class=\"lx-ln\" d=\"M80.1 42 L80.1 72\"></path><path class=\"lx-ln\" d=\"M245.2 42 L90.1 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"90\" text-anchor=\"middle\">{Q(x)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"72\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"90\" text-anchor=\"middle\">{¬Q(y), R(y)}</text><text class=\"lx-lb\" x=\"312.3\" y=\"83\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"312.3\" y=\"97\" text-anchor=\"start\">{x ← y}</text><path class=\"lx-ln\" d=\"M80.1 100 L80.1 130\"></path><path class=\"lx-ln\" d=\"M245.2 100 L90.1 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"148\" text-anchor=\"middle\">{R(y)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"207.3\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"148\" text-anchor=\"middle\">{¬R(u)}</text><text class=\"lx-lb\" x=\"289.2\" y=\"141\" text-anchor=\"start\">C5</text><text class=\"lx-um\" x=\"289.2\" y=\"155\" text-anchor=\"start\">{y ← u}</text><path class=\"lx-ln\" d=\"M80.1 158 L80.1 188\"></path><path class=\"lx-ln\" d=\"M245.2 158 L90.1 188\"></path><rect class=\"lx-bx-e\" x=\"65.2\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"59.2\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
      "<svg viewBox=\"0 0 395 256\" width=\"395\" height=\"256\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"32\" text-anchor=\"middle\">{P(z)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"14\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"32\" text-anchor=\"middle\">{¬P(x), Q(x)}</text><text class=\"lx-lb\" x=\"312.3\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"312.3\" y=\"39\" text-anchor=\"start\">{z ← x}</text><path class=\"lx-ln\" d=\"M80.1 42 L80.1 72\"></path><path class=\"lx-ln\" d=\"M245.2 42 L90.1 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"90\" text-anchor=\"middle\">{Q(x)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"72\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"90\" text-anchor=\"middle\">{¬Q(y), R(y)}</text><text class=\"lx-lb\" x=\"312.3\" y=\"83\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"312.3\" y=\"97\" text-anchor=\"start\">{x ← y}</text><path class=\"lx-ln\" d=\"M80.1 100 L80.1 130\"></path><path class=\"lx-ln\" d=\"M245.2 100 L90.1 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"148\" text-anchor=\"middle\">{R(y)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"207.3\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"148\" text-anchor=\"middle\">{¬R(u)}</text><text class=\"lx-lb\" x=\"289.2\" y=\"141\" text-anchor=\"start\">C5</text><text class=\"lx-um\" x=\"289.2\" y=\"155\" text-anchor=\"start\">{y ← u}</text><path class=\"lx-ln\" d=\"M80.1 158 L80.1 188\"></path><path class=\"lx-ln\" d=\"M245.2 158 L90.1 188\"></path><rect class=\"lx-bx-e\" x=\"65.2\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"59.2\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
      "<svg viewBox=\"0 0 395 256\" width=\"395\" height=\"256\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"32\" text-anchor=\"middle\">{P(z)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"14\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"32\" text-anchor=\"middle\">{¬P(x), Q(x)}</text><text class=\"lx-lb\" x=\"312.3\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"312.3\" y=\"39\" text-anchor=\"start\">{z ← x}</text><path class=\"lx-ln\" d=\"M80.1 42 L80.1 72\"></path><path class=\"lx-ln\" d=\"M245.2 42 L90.1 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"90\" text-anchor=\"middle\">{Q(x)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"72\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"90\" text-anchor=\"middle\">{¬Q(y), R(y)}</text><text class=\"lx-lb\" x=\"312.3\" y=\"83\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"312.3\" y=\"97\" text-anchor=\"start\">{x ← y}</text><path class=\"lx-ln\" d=\"M80.1 100 L80.1 130\"></path><path class=\"lx-ln\" d=\"M245.2 100 L90.1 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"148\" text-anchor=\"middle\">{R(y)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"207.3\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"148\" text-anchor=\"middle\">{¬R(u)}</text><text class=\"lx-lb\" x=\"289.2\" y=\"141\" text-anchor=\"start\">C5</text><text class=\"lx-um\" x=\"289.2\" y=\"155\" text-anchor=\"start\">{y ← u}</text><path class=\"lx-ln\" d=\"M80.1 158 L80.1 188\"></path><path class=\"lx-ln\" d=\"M245.2 158 L90.1 188\"></path><rect class=\"lx-bx-e\" x=\"65.2\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"59.2\" y=\"206\" text-anchor=\"end\">R3</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-f5",
   "unit": "u8",
   "kind": "F",
   "level": "hard",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Comproveu mitjançant el mètode de resolució si el següent raonament és vàlid o no:",
      "Comprobad mediante el método de resolución si el siguiente razonamiento es válido o no:",
      "Check by the resolution method whether the following argument is valid or not:"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x ((E(x) ∧ M(x,logica)) → A(x,logica))</span> <i>(premissa)</i></li><li><span class=\"lf\">E(maria) ∧ M(maria,logica)</span> <i>(premissa)</i></li><li><span class=\"lf\">∃x A(x,logica)</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x ((E(x) ∧ M(x,logica)) → A(x,logica))</span> <i>(premisa)</i></li><li><span class=\"lf\">E(maria) ∧ M(maria,logica)</span> <i>(premisa)</i></li><li><span class=\"lf\">∃x A(x,logica)</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x ((E(x) ∧ M(x,logica)) → A(x,logica))</span> <i>(premise)</i></li><li><span class=\"lf\">E(maria) ∧ M(maria,logica)</span> <i>(premise)</i></li><li><span class=\"lf\">∃x A(x,logica)</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "On A, E, M són símbols de predicats, x, y, z són símbols de variables i maria, logica són símbols de constants.",
      "Donde A, E, M son símbolos de predicados, x, y, z son símbolos de variables y maria, logica son símbolos de constantes.",
      "Where A, E, M are predicate symbols, x, y, z are variable symbols and maria, logica are constant symbols."
     ]
    },
    {
     "t": "note",
     "x": [
      "E(x): x és estudiant · M(x,y): x està matriculat a y · A(x,y): x aprova y. «Tots els estudiants matriculats a Lògica l'aproven. La Maria és estudiant i està matriculada a Lògica. Per tant, algú aprova Lògica.»",
      "E(x): x es estudiante · M(x,y): x está matriculado en y · A(x,y): x aprueba y. «Todos los estudiantes matriculados en Lógica la aprueban. María es estudiante y está matriculada en Lógica. Por tanto, alguien aprueba Lógica.»",
      "E(x): x is a student · M(x,y): x is enrolled in y · A(x,y): x passes y. “All the students enrolled in Logic pass it. María is a student and is enrolled in Logic. Therefore, someone passes Logic.”"
     ]
    },
    {
     "t": "p",
     "x": [
      "Expliqueu els passos que seguiu per fer la prova i **noteu els unificadors** (UMG).",
      "Explicad los pasos que seguís para hacer la prueba y **anotad los unificadores** (UMG).",
      "Explain the steps you follow to do the proof and **note the unifiers** (MGU)."
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Neguem la conclusió",
      "Negamos la conclusión",
      "We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Afegim la negació de la conclusió, <span class=\"lf\">¬∃x A(x,logica)</span>, a les premisses i busquem la clàusula buida (prova per refutació).</p>",
      "<p>Añadimos la negación de la conclusión, <span class=\"lf\">¬∃x A(x,logica)</span>, a las premisas y buscamos la cláusula vacía (prueba por refutación).</p>",
      "<p>We add the negation of the conclusion, <span class=\"lf\">¬∃x A(x,logica)</span>, to the premises and look for the empty clause (proof by refutation).</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "Forma clausal de les premisses i de la conclusió negada",
      "Forma clausal de las premisas y de la conclusión negada",
      "Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x ((E(x) ∧ M(x,logica)) → A(x,logica))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x (¬(E(x) ∧ M(x,logica)) ∨ A(x,logica))</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x (¬E(x) ∨ ¬M(x,logica) ∨ A(x,logica))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬E(x) ∨ ¬M(x,logica) ∨ A(x,logica)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬E(x), ¬M(x,logica), A(x,logica)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬E(x), ¬M(x,logica), A(x,logica)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x ((E(x) ∧ M(x,logica)) → A(x,logica))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x (¬(E(x) ∧ M(x,logica)) ∨ A(x,logica))</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x (¬E(x) ∨ ¬M(x,logica) ∨ A(x,logica))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬E(x) ∨ ¬M(x,logica) ∨ A(x,logica)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬E(x), ¬M(x,logica), A(x,logica)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬E(x), ¬M(x,logica), A(x,logica)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x ((E(x) ∧ M(x,logica)) → A(x,logica))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x (¬(E(x) ∧ M(x,logica)) ∨ A(x,logica))</span></li><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x (¬E(x) ∨ ¬M(x,logica) ∨ A(x,logica))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬E(x) ∨ ¬M(x,logica) ∨ A(x,logica)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬E(x), ¬M(x,logica), A(x,logica)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬E(x), ¬M(x,logica), A(x,logica)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">E(maria) ∧ M(maria,logica)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {E(maria)} , {M(maria,logica)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{E(maria)}</span>, C3 = <span class=\"lf\">{M(maria,logica)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">E(maria) ∧ M(maria,logica)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {E(maria)} , {M(maria,logica)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{E(maria)}</span>, C3 = <span class=\"lf\">{M(maria,logica)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">E(maria) ∧ M(maria,logica)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {E(maria)} , {M(maria,logica)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{E(maria)}</span>, C3 = <span class=\"lf\">{M(maria,logica)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∃x A(x,logica)</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x ¬A(x,logica)</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬A(x,logica)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬A(x,logica)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{¬A(y,logica)}</span></p></div>",
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∃x A(x,logica)</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x ¬A(x,logica)</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬A(x,logica)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬A(x,logica)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{¬A(y,logica)}</span></p></div>",
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∃x A(x,logica)</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x ¬A(x,logica)</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬A(x,logica)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬A(x,logica)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{¬A(y,logica)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "t": "note",
     "x": [
      "Les variables de clàusules diferents s'han renombrat perquè no en comparteixin cap (cada clàusula és independent).",
      "Las variables de cláusulas distintas se han renombrado para que no compartan ninguna (cada cláusula es independiente).",
      "The variables of different clauses have been renamed so that they share none (each clause is independent)."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬E(x), ¬M(x,logica), A(x,logica)} , {E(maria)} , {M(maria,logica)} , {¬A(y,logica)} }</span></p>"
    },
    {
     "t": "h",
     "x": [
      "Refutació per resolució",
      "Refutación por resolución",
      "Refutation by resolution"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C4, C1) = {¬E(x), ¬M(x,logica)}</span> &nbsp;<span class=\"lx-umg\">UMG: {y ← x}</span></li><li><span class=\"lf\">R2 = res(R1, C2) = {¬M(maria,logica)}</span> &nbsp;<span class=\"lx-umg\">UMG: {x ← maria}</span></li><li><span class=\"lf\">R3 = res(R2, C3) = □</span> &nbsp;<span class=\"lx-umg\">UMG: ε</span></li></ol>"
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { A(y,logica) , A(x,logica) }</td><td>ε</td></tr><tr><td>1</td><td>{y, x}</td><td>y ← x</td><td>{y ← x}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { A(y,logica) , A(x,logica) }</td><td>ε</td></tr><tr><td>1</td><td>{y, x}</td><td>y ← x</td><td>{y ← x}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { A(y,logica) , A(x,logica) }</td><td>ε</td></tr><tr><td>1</td><td>{y, x}</td><td>y ← x</td><td>{y ← x}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R1: ¬A(y,logica) i A(x,logica)",
      "Unificación R1: ¬A(y,logica) i A(x,logica)",
      "Unification R1: ¬A(y,logica) and A(x,logica)"
     ]
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { E(x) , E(maria) }</td><td>ε</td></tr><tr><td>1</td><td>{x, maria}</td><td>x ← maria</td><td>{x ← maria}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { E(x) , E(maria) }</td><td>ε</td></tr><tr><td>1</td><td>{x, maria}</td><td>x ← maria</td><td>{x ← maria}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { E(x) , E(maria) }</td><td>ε</td></tr><tr><td>1</td><td>{x, maria}</td><td>x ← maria</td><td>{x ← maria}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R2: ¬E(x) i E(maria)",
      "Unificación R2: ¬E(x) i E(maria)",
      "Unification R2: ¬E(x) and E(maria)"
     ]
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 700 256\" width=\"700\" height=\"256\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"73.0\" y=\"14\" width=\"129.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"137.9\" y=\"32\" text-anchor=\"middle\">{¬A(y,logica)}</text><text class=\"lx-lb\" x=\"67.0\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"299.7\" y=\"14\" width=\"283.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"32\" text-anchor=\"middle\">{¬E(x), ¬M(x,logica), A(x,logica)}</text><text class=\"lx-lb\" x=\"589.5\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"589.5\" y=\"39\" text-anchor=\"start\">{y ← x}</text><path class=\"lx-ln\" d=\"M137.9 42 L137.9 72\"></path><path class=\"lx-ln\" d=\"M441.6 42 L147.9 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"183.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"137.9\" y=\"90\" text-anchor=\"middle\">{¬E(x), ¬M(x,logica)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"392.1\" y=\"72\" width=\"99.0\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"90\" text-anchor=\"middle\">{E(maria)}</text><text class=\"lx-lb\" x=\"497.1\" y=\"83\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"497.1\" y=\"97\" text-anchor=\"start\">{x ← maria}</text><path class=\"lx-ln\" d=\"M137.9 100 L137.9 130\"></path><path class=\"lx-ln\" d=\"M441.6 100 L147.9 130\"></path><rect class=\"lx-bx\" x=\"57.6\" y=\"130\" width=\"160.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"137.9\" y=\"148\" text-anchor=\"middle\">{¬M(maria,logica)}</text><text class=\"lx-lb\" x=\"51.6\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"365.2\" y=\"130\" width=\"152.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"148\" text-anchor=\"middle\">{M(maria,logica)}</text><text class=\"lx-lb\" x=\"524.1\" y=\"141\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"524.1\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M137.9 158 L137.9 188\"></path><path class=\"lx-ln\" d=\"M441.6 158 L147.9 188\"></path><rect class=\"lx-bx-e\" x=\"123.0\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"137.9\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"117.0\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
      "<svg viewBox=\"0 0 700 256\" width=\"700\" height=\"256\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"73.0\" y=\"14\" width=\"129.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"137.9\" y=\"32\" text-anchor=\"middle\">{¬A(y,logica)}</text><text class=\"lx-lb\" x=\"67.0\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"299.7\" y=\"14\" width=\"283.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"32\" text-anchor=\"middle\">{¬E(x), ¬M(x,logica), A(x,logica)}</text><text class=\"lx-lb\" x=\"589.5\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"589.5\" y=\"39\" text-anchor=\"start\">{y ← x}</text><path class=\"lx-ln\" d=\"M137.9 42 L137.9 72\"></path><path class=\"lx-ln\" d=\"M441.6 42 L147.9 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"183.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"137.9\" y=\"90\" text-anchor=\"middle\">{¬E(x), ¬M(x,logica)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"392.1\" y=\"72\" width=\"99.0\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"90\" text-anchor=\"middle\">{E(maria)}</text><text class=\"lx-lb\" x=\"497.1\" y=\"83\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"497.1\" y=\"97\" text-anchor=\"start\">{x ← maria}</text><path class=\"lx-ln\" d=\"M137.9 100 L137.9 130\"></path><path class=\"lx-ln\" d=\"M441.6 100 L147.9 130\"></path><rect class=\"lx-bx\" x=\"57.6\" y=\"130\" width=\"160.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"137.9\" y=\"148\" text-anchor=\"middle\">{¬M(maria,logica)}</text><text class=\"lx-lb\" x=\"51.6\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"365.2\" y=\"130\" width=\"152.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"148\" text-anchor=\"middle\">{M(maria,logica)}</text><text class=\"lx-lb\" x=\"524.1\" y=\"141\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"524.1\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M137.9 158 L137.9 188\"></path><path class=\"lx-ln\" d=\"M441.6 158 L147.9 188\"></path><rect class=\"lx-bx-e\" x=\"123.0\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"137.9\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"117.0\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
      "<svg viewBox=\"0 0 700 256\" width=\"700\" height=\"256\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"73.0\" y=\"14\" width=\"129.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"137.9\" y=\"32\" text-anchor=\"middle\">{¬A(y,logica)}</text><text class=\"lx-lb\" x=\"67.0\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"299.7\" y=\"14\" width=\"283.8\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"32\" text-anchor=\"middle\">{¬E(x), ¬M(x,logica), A(x,logica)}</text><text class=\"lx-lb\" x=\"589.5\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"589.5\" y=\"39\" text-anchor=\"start\">{y ← x}</text><path class=\"lx-ln\" d=\"M137.9 42 L137.9 72\"></path><path class=\"lx-ln\" d=\"M441.6 42 L147.9 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"183.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"137.9\" y=\"90\" text-anchor=\"middle\">{¬E(x), ¬M(x,logica)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"392.1\" y=\"72\" width=\"99.0\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"90\" text-anchor=\"middle\">{E(maria)}</text><text class=\"lx-lb\" x=\"497.1\" y=\"83\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"497.1\" y=\"97\" text-anchor=\"start\">{x ← maria}</text><path class=\"lx-ln\" d=\"M137.9 100 L137.9 130\"></path><path class=\"lx-ln\" d=\"M441.6 100 L147.9 130\"></path><rect class=\"lx-bx\" x=\"57.6\" y=\"130\" width=\"160.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"137.9\" y=\"148\" text-anchor=\"middle\">{¬M(maria,logica)}</text><text class=\"lx-lb\" x=\"51.6\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"365.2\" y=\"130\" width=\"152.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"148\" text-anchor=\"middle\">{M(maria,logica)}</text><text class=\"lx-lb\" x=\"524.1\" y=\"141\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"524.1\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M137.9 158 L137.9 188\"></path><path class=\"lx-ln\" d=\"M441.6 158 L147.9 188\"></path><rect class=\"lx-bx-e\" x=\"123.0\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"137.9\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"117.0\" y=\"206\" text-anchor=\"end\">R3</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-f6",
   "unit": "u8",
   "kind": "F",
   "level": "hard",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Comproveu mitjançant el mètode de resolució si el següent raonament és vàlid o no:",
      "Comprobad mediante el método de resolución si el siguiente razonamiento es válido o no:",
      "Check by the resolution method whether the following argument is valid or not:"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x ∀y (∃z (P(z,x) ∧ P(z,y)) → G(x,y))</span> <i>(premissa)</i></li><li><span class=\"lf\">P(carla,jordi)</span> <i>(premissa)</i></li><li><span class=\"lf\">P(carla,anna)</span> <i>(premissa)</i></li><li><span class=\"lf\">G(jordi,anna)</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x ∀y (∃z (P(z,x) ∧ P(z,y)) → G(x,y))</span> <i>(premisa)</i></li><li><span class=\"lf\">P(carla,jordi)</span> <i>(premisa)</i></li><li><span class=\"lf\">P(carla,anna)</span> <i>(premisa)</i></li><li><span class=\"lf\">G(jordi,anna)</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x ∀y (∃z (P(z,x) ∧ P(z,y)) → G(x,y))</span> <i>(premise)</i></li><li><span class=\"lf\">P(carla,jordi)</span> <i>(premise)</i></li><li><span class=\"lf\">P(carla,anna)</span> <i>(premise)</i></li><li><span class=\"lf\">G(jordi,anna)</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "On G, P són símbols de predicats, x, y, z són símbols de variables i carla, jordi, anna són símbols de constants.",
      "Donde G, P son símbolos de predicados, x, y, z son símbolos de variables y carla, jordi, anna son símbolos de constantes.",
      "Where G, P are predicate symbols, x, y, z are variable symbols and carla, jordi, anna are constant symbols."
     ]
    },
    {
     "t": "note",
     "x": [
      "P(x,y): x és progenitor de y · G(x,y): x és germà de y.",
      "P(x,y): x es progenitor de y · G(x,y): x es hermano de y.",
      "P(x,y): x is a parent of y · G(x,y): x is a sibling of y."
     ]
    },
    {
     "t": "p",
     "x": [
      "Expliqueu els passos que seguiu per fer la prova i **noteu els unificadors** (UMG).",
      "Explicad los pasos que seguís para hacer la prueba y **anotad los unificadores** (UMG).",
      "Explain the steps you follow to do the proof and **note the unifiers** (MGU)."
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Neguem la conclusió",
      "Negamos la conclusión",
      "We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Afegim la negació de la conclusió, <span class=\"lf\">¬G(jordi,anna)</span>, a les premisses i busquem la clàusula buida (prova per refutació).</p>",
      "<p>Añadimos la negación de la conclusión, <span class=\"lf\">¬G(jordi,anna)</span>, a las premisas y buscamos la cláusula vacía (prueba por refutación).</p>",
      "<p>We add the negation of the conclusion, <span class=\"lf\">¬G(jordi,anna)</span>, to the premises and look for the empty clause (proof by refutation).</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "Forma clausal de les premisses i de la conclusió negada",
      "Forma clausal de las premisas y de la conclusión negada",
      "Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x ∀y (∃z (P(z,x) ∧ P(z,y)) → G(x,y))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x ∀y (¬∃z (P(z,x) ∧ P(z,y)) ∨ G(x,y))</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x ∀y (∀z (¬P(z,x) ∨ ¬P(z,y)) ∨ G(x,y))</span></li><li><b>5.</b> Universals a l'esquerra: <span class=\"lf\">∀x ∀y ∀z (¬P(z,x) ∨ ¬P(z,y) ∨ G(x,y))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬P(z,x) ∨ ¬P(z,y) ∨ G(x,y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬P(z,x), ¬P(z,y), G(x,y)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬P(x,y), ¬P(x,z), G(y,z)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x ∀y (∃z (P(z,x) ∧ P(z,y)) → G(x,y))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x ∀y (¬∃z (P(z,x) ∧ P(z,y)) ∨ G(x,y))</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x ∀y (∀z (¬P(z,x) ∨ ¬P(z,y)) ∨ G(x,y))</span></li><li><b>5.</b> Universales a la izquierda: <span class=\"lf\">∀x ∀y ∀z (¬P(z,x) ∨ ¬P(z,y) ∨ G(x,y))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬P(z,x) ∨ ¬P(z,y) ∨ G(x,y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬P(z,x), ¬P(z,y), G(x,y)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬P(x,y), ¬P(x,z), G(y,z)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x ∀y (∃z (P(z,x) ∧ P(z,y)) → G(x,y))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x ∀y (¬∃z (P(z,x) ∧ P(z,y)) ∨ G(x,y))</span></li><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x ∀y (∀z (¬P(z,x) ∨ ¬P(z,y)) ∨ G(x,y))</span></li><li><b>5.</b> Universals to the left: <span class=\"lf\">∀x ∀y ∀z (¬P(z,x) ∨ ¬P(z,y) ∨ G(x,y))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬P(z,x) ∨ ¬P(z,y) ∨ G(x,y)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬P(z,x), ¬P(z,y), G(x,y)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬P(x,y), ¬P(x,z), G(y,z)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">P(carla,jordi)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {P(carla,jordi)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{P(carla,jordi)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">P(carla,jordi)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {P(carla,jordi)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{P(carla,jordi)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">P(carla,jordi)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {P(carla,jordi)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{P(carla,jordi)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">P(carla,anna)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {P(carla,anna)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{P(carla,anna)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">P(carla,anna)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {P(carla,anna)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{P(carla,anna)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">P(carla,anna)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {P(carla,anna)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{P(carla,anna)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬G(jordi,anna)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬G(jordi,anna)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{¬G(jordi,anna)}</span></p></div>",
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬G(jordi,anna)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬G(jordi,anna)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{¬G(jordi,anna)}</span></p></div>",
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬G(jordi,anna)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬G(jordi,anna)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{¬G(jordi,anna)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "t": "note",
     "x": [
      "Les variables de clàusules diferents s'han renombrat perquè no en comparteixin cap (cada clàusula és independent).",
      "Las variables de cláusulas distintas se han renombrado para que no compartan ninguna (cada cláusula es independiente).",
      "The variables of different clauses have been renamed so that they share none (each clause is independent)."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬P(x,y), ¬P(x,z), G(y,z)} , {P(carla,jordi)} , {P(carla,anna)} , {¬G(jordi,anna)} }</span></p>"
    },
    {
     "t": "h",
     "x": [
      "Refutació per resolució",
      "Refutación por resolución",
      "Refutation by resolution"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C4, C1) = {¬P(x,jordi), ¬P(x,anna)}</span> &nbsp;<span class=\"lx-umg\">UMG: {y ← jordi, z ← anna}</span></li><li><span class=\"lf\">R2 = res(R1, C2) = {¬P(carla,anna)}</span> &nbsp;<span class=\"lx-umg\">UMG: {x ← carla}</span></li><li><span class=\"lf\">R3 = res(R2, C3) = □</span> &nbsp;<span class=\"lx-umg\">UMG: ε</span></li></ol>"
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { G(jordi,anna) , G(y,z) }</td><td>ε</td></tr><tr><td>1</td><td>{jordi, y}</td><td>y ← jordi</td><td>{y ← jordi}</td></tr><tr><td>2</td><td>{anna, z}</td><td>z ← anna</td><td>{y ← jordi, z ← anna}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { G(jordi,anna) , G(y,z) }</td><td>ε</td></tr><tr><td>1</td><td>{jordi, y}</td><td>y ← jordi</td><td>{y ← jordi}</td></tr><tr><td>2</td><td>{anna, z}</td><td>z ← anna</td><td>{y ← jordi, z ← anna}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { G(jordi,anna) , G(y,z) }</td><td>ε</td></tr><tr><td>1</td><td>{jordi, y}</td><td>y ← jordi</td><td>{y ← jordi}</td></tr><tr><td>2</td><td>{anna, z}</td><td>z ← anna</td><td>{y ← jordi, z ← anna}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R1: ¬G(jordi,anna) i G(y,z)",
      "Unificación R1: ¬G(jordi,anna) i G(y,z)",
      "Unification R1: ¬G(jordi,anna) and G(y,z)"
     ]
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { P(x,jordi) , P(carla,jordi) }</td><td>ε</td></tr><tr><td>1</td><td>{x, carla}</td><td>x ← carla</td><td>{x ← carla}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { P(x,jordi) , P(carla,jordi) }</td><td>ε</td></tr><tr><td>1</td><td>{x, carla}</td><td>x ← carla</td><td>{x ← carla}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { P(x,jordi) , P(carla,jordi) }</td><td>ε</td></tr><tr><td>1</td><td>{x, carla}</td><td>x ← carla</td><td>{x ← carla}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R2: ¬P(x,jordi) i P(carla,jordi)",
      "Unificación R2: ¬P(x,jordi) i P(carla,jordi)",
      "Unification R2: ¬P(x,jordi) and P(carla,jordi)"
     ]
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 739 256\" width=\"739\" height=\"256\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"80.7\" y=\"14\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"153.2\" y=\"32\" text-anchor=\"middle\">{¬G(jordi,anna)}</text><text class=\"lx-lb\" x=\"74.7\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"330.5\" y=\"14\" width=\"222.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"32\" text-anchor=\"middle\">{¬P(x,y), ¬P(x,z), G(y,z)}</text><text class=\"lx-lb\" x=\"558.7\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"558.7\" y=\"39\" text-anchor=\"start\">{y ← jordi, z ← anna}</text><path class=\"lx-ln\" d=\"M153.2 42 L153.2 72\"></path><path class=\"lx-ln\" d=\"M441.6 42 L163.2 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"214.5\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"153.2\" y=\"90\" text-anchor=\"middle\">{¬P(x,jordi), ¬P(x,anna)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"369.0\" y=\"72\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"90\" text-anchor=\"middle\">{P(carla,jordi)}</text><text class=\"lx-lb\" x=\"520.2\" y=\"83\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"520.2\" y=\"97\" text-anchor=\"start\">{x ← carla}</text><path class=\"lx-ln\" d=\"M153.2 100 L153.2 130\"></path><path class=\"lx-ln\" d=\"M441.6 100 L163.2 130\"></path><rect class=\"lx-bx\" x=\"80.7\" y=\"130\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"153.2\" y=\"148\" text-anchor=\"middle\">{¬P(carla,anna)}</text><text class=\"lx-lb\" x=\"74.7\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"372.9\" y=\"130\" width=\"137.5\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"148\" text-anchor=\"middle\">{P(carla,anna)}</text><text class=\"lx-lb\" x=\"516.4\" y=\"141\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"516.4\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M153.2 158 L153.2 188\"></path><path class=\"lx-ln\" d=\"M441.6 158 L163.2 188\"></path><rect class=\"lx-bx-e\" x=\"138.4\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"153.2\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"132.4\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
      "<svg viewBox=\"0 0 739 256\" width=\"739\" height=\"256\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"80.7\" y=\"14\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"153.2\" y=\"32\" text-anchor=\"middle\">{¬G(jordi,anna)}</text><text class=\"lx-lb\" x=\"74.7\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"330.5\" y=\"14\" width=\"222.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"32\" text-anchor=\"middle\">{¬P(x,y), ¬P(x,z), G(y,z)}</text><text class=\"lx-lb\" x=\"558.7\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"558.7\" y=\"39\" text-anchor=\"start\">{y ← jordi, z ← anna}</text><path class=\"lx-ln\" d=\"M153.2 42 L153.2 72\"></path><path class=\"lx-ln\" d=\"M441.6 42 L163.2 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"214.5\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"153.2\" y=\"90\" text-anchor=\"middle\">{¬P(x,jordi), ¬P(x,anna)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"369.0\" y=\"72\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"90\" text-anchor=\"middle\">{P(carla,jordi)}</text><text class=\"lx-lb\" x=\"520.2\" y=\"83\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"520.2\" y=\"97\" text-anchor=\"start\">{x ← carla}</text><path class=\"lx-ln\" d=\"M153.2 100 L153.2 130\"></path><path class=\"lx-ln\" d=\"M441.6 100 L163.2 130\"></path><rect class=\"lx-bx\" x=\"80.7\" y=\"130\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"153.2\" y=\"148\" text-anchor=\"middle\">{¬P(carla,anna)}</text><text class=\"lx-lb\" x=\"74.7\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"372.9\" y=\"130\" width=\"137.5\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"148\" text-anchor=\"middle\">{P(carla,anna)}</text><text class=\"lx-lb\" x=\"516.4\" y=\"141\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"516.4\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M153.2 158 L153.2 188\"></path><path class=\"lx-ln\" d=\"M441.6 158 L163.2 188\"></path><rect class=\"lx-bx-e\" x=\"138.4\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"153.2\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"132.4\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
      "<svg viewBox=\"0 0 739 256\" width=\"739\" height=\"256\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"80.7\" y=\"14\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"153.2\" y=\"32\" text-anchor=\"middle\">{¬G(jordi,anna)}</text><text class=\"lx-lb\" x=\"74.7\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"330.5\" y=\"14\" width=\"222.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"32\" text-anchor=\"middle\">{¬P(x,y), ¬P(x,z), G(y,z)}</text><text class=\"lx-lb\" x=\"558.7\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"558.7\" y=\"39\" text-anchor=\"start\">{y ← jordi, z ← anna}</text><path class=\"lx-ln\" d=\"M153.2 42 L153.2 72\"></path><path class=\"lx-ln\" d=\"M441.6 42 L163.2 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"214.5\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"153.2\" y=\"90\" text-anchor=\"middle\">{¬P(x,jordi), ¬P(x,anna)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"369.0\" y=\"72\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"90\" text-anchor=\"middle\">{P(carla,jordi)}</text><text class=\"lx-lb\" x=\"520.2\" y=\"83\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"520.2\" y=\"97\" text-anchor=\"start\">{x ← carla}</text><path class=\"lx-ln\" d=\"M153.2 100 L153.2 130\"></path><path class=\"lx-ln\" d=\"M441.6 100 L163.2 130\"></path><rect class=\"lx-bx\" x=\"80.7\" y=\"130\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"153.2\" y=\"148\" text-anchor=\"middle\">{¬P(carla,anna)}</text><text class=\"lx-lb\" x=\"74.7\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"372.9\" y=\"130\" width=\"137.5\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"441.6\" y=\"148\" text-anchor=\"middle\">{P(carla,anna)}</text><text class=\"lx-lb\" x=\"516.4\" y=\"141\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"516.4\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M153.2 158 L153.2 188\"></path><path class=\"lx-ln\" d=\"M441.6 158 L163.2 188\"></path><rect class=\"lx-bx-e\" x=\"138.4\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"153.2\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"132.4\" y=\"206\" text-anchor=\"end\">R3</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-f7",
   "unit": "u8",
   "kind": "F",
   "level": "hard",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Comproveu mitjançant el mètode de resolució si el següent raonament és vàlid o no:",
      "Comprobad mediante el método de resolución si el siguiente razonamiento es válido o no:",
      "Check by the resolution method whether the following argument is valid or not:"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x (P(x) → Q(f(x)))</span> <i>(premissa)</i></li><li><span class=\"lf\">∀x (Q(x) → R(x))</span> <i>(premissa)</i></li><li><span class=\"lf\">P(a)</span> <i>(premissa)</i></li><li><span class=\"lf\">∃y R(y)</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x (P(x) → Q(f(x)))</span> <i>(premisa)</i></li><li><span class=\"lf\">∀x (Q(x) → R(x))</span> <i>(premisa)</i></li><li><span class=\"lf\">P(a)</span> <i>(premisa)</i></li><li><span class=\"lf\">∃y R(y)</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x (P(x) → Q(f(x)))</span> <i>(premise)</i></li><li><span class=\"lf\">∀x (Q(x) → R(x))</span> <i>(premise)</i></li><li><span class=\"lf\">P(a)</span> <i>(premise)</i></li><li><span class=\"lf\">∃y R(y)</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "On P, Q, R són símbols de predicats, x, y, z són símbols de variables i a són símbols de constants.",
      "Donde P, Q, R son símbolos de predicados, x, y, z son símbolos de variables y a son símbolos de constantes.",
      "Where P, Q, R are predicate symbols, x, y, z are variable symbols and a is a constant symbol."
     ]
    },
    {
     "t": "p",
     "x": [
      "Expliqueu els passos que seguiu per fer la prova i **noteu els unificadors** (UMG).",
      "Explicad los pasos que seguís para hacer la prueba y **anotad los unificadores** (UMG).",
      "Explain the steps you follow to do the proof and **note the unifiers** (MGU)."
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Neguem la conclusió",
      "Negamos la conclusión",
      "We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Afegim la negació de la conclusió, <span class=\"lf\">¬∃y R(y)</span>, a les premisses i busquem la clàusula buida (prova per refutació).</p>",
      "<p>Añadimos la negación de la conclusión, <span class=\"lf\">¬∃y R(y)</span>, a las premisas y buscamos la cláusula vacía (prueba por refutación).</p>",
      "<p>We add the negation of the conclusion, <span class=\"lf\">¬∃y R(y)</span>, to the premises and look for the empty clause (proof by refutation).</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "Forma clausal de les premisses i de la conclusió negada",
      "Forma clausal de las premisas y de la conclusión negada",
      "Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (P(x) → Q(f(x)))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x (¬P(x) ∨ Q(f(x)))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬P(x) ∨ Q(f(x))</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬P(x), Q(f(x))} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬P(x), Q(f(x))}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (P(x) → Q(f(x)))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x (¬P(x) ∨ Q(f(x)))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬P(x) ∨ Q(f(x))</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬P(x), Q(f(x))} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬P(x), Q(f(x))}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (P(x) → Q(f(x)))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x (¬P(x) ∨ Q(f(x)))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬P(x) ∨ Q(f(x))</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬P(x), Q(f(x))} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬P(x), Q(f(x))}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (Q(x) → R(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x (¬Q(x) ∨ R(x))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬Q(x) ∨ R(x)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬Q(x), R(x)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{¬Q(y), R(y)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (Q(x) → R(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x (¬Q(x) ∨ R(x))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬Q(x) ∨ R(x)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬Q(x), R(x)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{¬Q(y), R(y)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (Q(x) → R(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x (¬Q(x) ∨ R(x))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬Q(x) ∨ R(x)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬Q(x), R(x)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{¬Q(y), R(y)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">P(a)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {P(a)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{P(a)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">P(a)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {P(a)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{P(a)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">P(a)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {P(a)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{P(a)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∃y R(y)</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀y ¬R(y)</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬R(y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬R(y)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{¬R(z)}</span></p></div>",
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∃y R(y)</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀y ¬R(y)</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬R(y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬R(y)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{¬R(z)}</span></p></div>",
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∃y R(y)</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀y ¬R(y)</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬R(y)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬R(y)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{¬R(z)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "t": "note",
     "x": [
      "Les variables de clàusules diferents s'han renombrat perquè no en comparteixin cap (cada clàusula és independent).",
      "Las variables de cláusulas distintas se han renombrado para que no compartan ninguna (cada cláusula es independiente).",
      "The variables of different clauses have been renamed so that they share none (each clause is independent)."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬P(x), Q(f(x))} , {¬Q(y), R(y)} , {P(a)} , {¬R(z)} }</span></p>"
    },
    {
     "t": "h",
     "x": [
      "Refutació per resolució",
      "Refutación por resolución",
      "Refutation by resolution"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C4, C2) = {¬Q(y)}</span> &nbsp;<span class=\"lx-umg\">UMG: {z ← y}</span></li><li><span class=\"lf\">R2 = res(R1, C1) = {¬P(x)}</span> &nbsp;<span class=\"lx-umg\">UMG: {y ← f(x)}</span></li><li><span class=\"lf\">R3 = res(R2, C3) = □</span> &nbsp;<span class=\"lx-umg\">UMG: {x ← a}</span></li></ol>"
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { R(z) , R(y) }</td><td>ε</td></tr><tr><td>1</td><td>{z, y}</td><td>z ← y</td><td>{z ← y}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { R(z) , R(y) }</td><td>ε</td></tr><tr><td>1</td><td>{z, y}</td><td>z ← y</td><td>{z ← y}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { R(z) , R(y) }</td><td>ε</td></tr><tr><td>1</td><td>{z, y}</td><td>z ← y</td><td>{z ← y}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R1: ¬R(z) i R(y)",
      "Unificación R1: ¬R(z) i R(y)",
      "Unification R1: ¬R(z) and R(y)"
     ]
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { Q(y) , Q(f(x)) }</td><td>ε</td></tr><tr><td>1</td><td>{y, f(x)}</td><td>y ← f(x)</td><td>{y ← f(x)}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { Q(y) , Q(f(x)) }</td><td>ε</td></tr><tr><td>1</td><td>{y, f(x)}</td><td>y ← f(x)</td><td>{y ← f(x)}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { Q(y) , Q(f(x)) }</td><td>ε</td></tr><tr><td>1</td><td>{y, f(x)}</td><td>y ← f(x)</td><td>{y ← f(x)}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R2: ¬Q(y) i Q(f(x))",
      "Unificación R2: ¬Q(y) i Q(f(x))",
      "Unification R2: ¬Q(y) and Q(f(x))"
     ]
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { P(x) , P(a) }</td><td>ε</td></tr><tr><td>1</td><td>{x, a}</td><td>x ← a</td><td>{x ← a}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { P(x) , P(a) }</td><td>ε</td></tr><tr><td>1</td><td>{x, a}</td><td>x ← a</td><td>{x ← a}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { P(x) , P(a) }</td><td>ε</td></tr><tr><td>1</td><td>{x, a}</td><td>x ← a</td><td>{x ← a}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R3: ¬P(x) i P(a)",
      "Unificación R3: ¬P(x) i P(a)",
      "Unification R3: ¬P(x) and P(a)"
     ]
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 447 256\" width=\"447\" height=\"256\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"32\" text-anchor=\"middle\">{¬R(z)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"203.4\" y=\"14\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"264.5\" y=\"32\" text-anchor=\"middle\">{¬Q(y), R(y)}</text><text class=\"lx-lb\" x=\"331.6\" y=\"25\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"331.6\" y=\"39\" text-anchor=\"start\">{z ← y}</text><path class=\"lx-ln\" d=\"M84.0 42 L84.0 72\"></path><path class=\"lx-ln\" d=\"M264.5 42 L94.0 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"90\" text-anchor=\"middle\">{¬Q(y)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"191.9\" y=\"72\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"264.5\" y=\"90\" text-anchor=\"middle\">{¬P(x), Q(f(x))}</text><text class=\"lx-lb\" x=\"343.1\" y=\"83\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"343.1\" y=\"97\" text-anchor=\"start\">{y ← f(x)}</text><path class=\"lx-ln\" d=\"M84.0 100 L84.0 130\"></path><path class=\"lx-ln\" d=\"M264.5 100 L94.0 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"148\" text-anchor=\"middle\">{¬P(x)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"230.4\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"264.5\" y=\"148\" text-anchor=\"middle\">{P(a)}</text><text class=\"lx-lb\" x=\"304.6\" y=\"141\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"304.6\" y=\"155\" text-anchor=\"start\">{x ← a}</text><path class=\"lx-ln\" d=\"M84.0 158 L84.0 188\"></path><path class=\"lx-ln\" d=\"M264.5 158 L94.0 188\"></path><rect class=\"lx-bx-e\" x=\"69.1\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"63.1\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
      "<svg viewBox=\"0 0 447 256\" width=\"447\" height=\"256\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"32\" text-anchor=\"middle\">{¬R(z)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"203.4\" y=\"14\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"264.5\" y=\"32\" text-anchor=\"middle\">{¬Q(y), R(y)}</text><text class=\"lx-lb\" x=\"331.6\" y=\"25\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"331.6\" y=\"39\" text-anchor=\"start\">{z ← y}</text><path class=\"lx-ln\" d=\"M84.0 42 L84.0 72\"></path><path class=\"lx-ln\" d=\"M264.5 42 L94.0 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"90\" text-anchor=\"middle\">{¬Q(y)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"191.9\" y=\"72\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"264.5\" y=\"90\" text-anchor=\"middle\">{¬P(x), Q(f(x))}</text><text class=\"lx-lb\" x=\"343.1\" y=\"83\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"343.1\" y=\"97\" text-anchor=\"start\">{y ← f(x)}</text><path class=\"lx-ln\" d=\"M84.0 100 L84.0 130\"></path><path class=\"lx-ln\" d=\"M264.5 100 L94.0 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"148\" text-anchor=\"middle\">{¬P(x)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"230.4\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"264.5\" y=\"148\" text-anchor=\"middle\">{P(a)}</text><text class=\"lx-lb\" x=\"304.6\" y=\"141\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"304.6\" y=\"155\" text-anchor=\"start\">{x ← a}</text><path class=\"lx-ln\" d=\"M84.0 158 L84.0 188\"></path><path class=\"lx-ln\" d=\"M264.5 158 L94.0 188\"></path><rect class=\"lx-bx-e\" x=\"69.1\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"63.1\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
      "<svg viewBox=\"0 0 447 256\" width=\"447\" height=\"256\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"32\" text-anchor=\"middle\">{¬R(z)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"203.4\" y=\"14\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"264.5\" y=\"32\" text-anchor=\"middle\">{¬Q(y), R(y)}</text><text class=\"lx-lb\" x=\"331.6\" y=\"25\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"331.6\" y=\"39\" text-anchor=\"start\">{z ← y}</text><path class=\"lx-ln\" d=\"M84.0 42 L84.0 72\"></path><path class=\"lx-ln\" d=\"M264.5 42 L94.0 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"90\" text-anchor=\"middle\">{¬Q(y)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"191.9\" y=\"72\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"264.5\" y=\"90\" text-anchor=\"middle\">{¬P(x), Q(f(x))}</text><text class=\"lx-lb\" x=\"343.1\" y=\"83\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"343.1\" y=\"97\" text-anchor=\"start\">{y ← f(x)}</text><path class=\"lx-ln\" d=\"M84.0 100 L84.0 130\"></path><path class=\"lx-ln\" d=\"M264.5 100 L94.0 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"148\" text-anchor=\"middle\">{¬P(x)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"230.4\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"264.5\" y=\"148\" text-anchor=\"middle\">{P(a)}</text><text class=\"lx-lb\" x=\"304.6\" y=\"141\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"304.6\" y=\"155\" text-anchor=\"start\">{x ← a}</text><path class=\"lx-ln\" d=\"M84.0 158 L84.0 188\"></path><path class=\"lx-ln\" d=\"M264.5 158 L94.0 188\"></path><rect class=\"lx-bx-e\" x=\"69.1\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"63.1\" y=\"206\" text-anchor=\"end\">R3</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-f8",
   "unit": "u8",
   "kind": "F",
   "level": "hard",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Comproveu mitjançant el mètode de resolució si el següent raonament és vàlid o no:",
      "Comprobad mediante el método de resolución si el siguiente razonamiento es válido o no:",
      "Check by the resolution method whether the following argument is valid or not:"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x (A(x) → ∃y (B(y) ∧ R(x,y)))</span> <i>(premissa)</i></li><li><span class=\"lf\">∀x ∀y ((B(y) ∧ R(x,y)) → C(x))</span> <i>(premissa)</i></li><li><span class=\"lf\">A(a)</span> <i>(premissa)</i></li><li><span class=\"lf\">C(a)</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x (A(x) → ∃y (B(y) ∧ R(x,y)))</span> <i>(premisa)</i></li><li><span class=\"lf\">∀x ∀y ((B(y) ∧ R(x,y)) → C(x))</span> <i>(premisa)</i></li><li><span class=\"lf\">A(a)</span> <i>(premisa)</i></li><li><span class=\"lf\">C(a)</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x (A(x) → ∃y (B(y) ∧ R(x,y)))</span> <i>(premise)</i></li><li><span class=\"lf\">∀x ∀y ((B(y) ∧ R(x,y)) → C(x))</span> <i>(premise)</i></li><li><span class=\"lf\">A(a)</span> <i>(premise)</i></li><li><span class=\"lf\">C(a)</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "On A, B, C, R són símbols de predicats, x, y, z són símbols de variables i a són símbols de constants.",
      "Donde A, B, C, R son símbolos de predicados, x, y, z son símbolos de variables y a son símbolos de constantes.",
      "Where A, B, C, R are predicate symbols, x, y, z are variable symbols and a is a constant symbol."
     ]
    },
    {
     "t": "p",
     "x": [
      "Expliqueu els passos que seguiu per fer la prova i **noteu els unificadors** (UMG).",
      "Explicad los pasos que seguís para hacer la prueba y **anotad los unificadores** (UMG).",
      "Explain the steps you follow to do the proof and **note the unifiers** (MGU)."
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Neguem la conclusió",
      "Negamos la conclusión",
      "We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Afegim la negació de la conclusió, <span class=\"lf\">¬C(a)</span>, a les premisses i busquem la clàusula buida (prova per refutació).</p>",
      "<p>Añadimos la negación de la conclusión, <span class=\"lf\">¬C(a)</span>, a las premisas y buscamos la cláusula vacía (prueba por refutación).</p>",
      "<p>We add the negation of the conclusion, <span class=\"lf\">¬C(a)</span>, to the premises and look for the empty clause (proof by refutation).</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "Forma clausal de les premisses i de la conclusió negada",
      "Forma clausal de las premisas y de la conclusión negada",
      "Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (A(x) → ∃y (B(y) ∧ R(x,y)))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x (¬A(x) ∨ ∃y (B(y) ∧ R(x,y)))</span></li><li><b>4.</b> Skolemitzar: y → f(x) (funció de Skolem de x)<br><span class=\"lf\">∀x (¬A(x) ∨ (B(f(x)) ∧ R(x,f(x))))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬A(x) ∨ (B(f(x)) ∧ R(x,f(x)))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬A(x) ∨ B(f(x))) ∧ (¬A(x) ∨ R(x,f(x)))</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬A(x), B(f(x))} , {¬A(x), R(x,f(x))} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬A(x), B(f(x))}</span>, C2 = <span class=\"lf\">{¬A(y), R(y,f(y))}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (A(x) → ∃y (B(y) ∧ R(x,y)))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x (¬A(x) ∨ ∃y (B(y) ∧ R(x,y)))</span></li><li><b>4.</b> Skolemizar: y → f(x) (función de Skolem de x)<br><span class=\"lf\">∀x (¬A(x) ∨ (B(f(x)) ∧ R(x,f(x))))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬A(x) ∨ (B(f(x)) ∧ R(x,f(x)))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬A(x) ∨ B(f(x))) ∧ (¬A(x) ∨ R(x,f(x)))</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬A(x), B(f(x))} , {¬A(x), R(x,f(x))} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬A(x), B(f(x))}</span>, C2 = <span class=\"lf\">{¬A(y), R(y,f(y))}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (A(x) → ∃y (B(y) ∧ R(x,y)))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x (¬A(x) ∨ ∃y (B(y) ∧ R(x,y)))</span></li><li><b>4.</b> Skolemise: y → f(x) (Skolem function of x)<br><span class=\"lf\">∀x (¬A(x) ∨ (B(f(x)) ∧ R(x,f(x))))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬A(x) ∨ (B(f(x)) ∧ R(x,f(x)))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬A(x) ∨ B(f(x))) ∧ (¬A(x) ∨ R(x,f(x)))</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬A(x), B(f(x))} , {¬A(x), R(x,f(x))} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬A(x), B(f(x))}</span>, C2 = <span class=\"lf\">{¬A(y), R(y,f(y))}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x ∀y ((B(y) ∧ R(x,y)) → C(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x ∀y (¬(B(y) ∧ R(x,y)) ∨ C(x))</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀x ∀y (¬B(y) ∨ ¬R(x,y) ∨ C(x))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬B(y) ∨ ¬R(x,y) ∨ C(x)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬B(y), ¬R(x,y), C(x)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{¬B(z), ¬R(u,z), C(u)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x ∀y ((B(y) ∧ R(x,y)) → C(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x ∀y (¬(B(y) ∧ R(x,y)) ∨ C(x))</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀x ∀y (¬B(y) ∨ ¬R(x,y) ∨ C(x))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬B(y) ∨ ¬R(x,y) ∨ C(x)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬B(y), ¬R(x,y), C(x)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{¬B(z), ¬R(u,z), C(u)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x ∀y ((B(y) ∧ R(x,y)) → C(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x ∀y (¬(B(y) ∧ R(x,y)) ∨ C(x))</span></li><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀x ∀y (¬B(y) ∨ ¬R(x,y) ∨ C(x))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬B(y) ∨ ¬R(x,y) ∨ C(x)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬B(y), ¬R(x,y), C(x)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{¬B(z), ¬R(u,z), C(u)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">A(a)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {A(a)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{A(a)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">A(a)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {A(a)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{A(a)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">A(a)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {A(a)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{A(a)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬C(a)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬C(a)} }</span></li></ol><p>→ C5 = <span class=\"lf\">{¬C(a)}</span></p></div>",
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬C(a)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬C(a)} }</span></li></ol><p>→ C5 = <span class=\"lf\">{¬C(a)}</span></p></div>",
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬C(a)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬C(a)} }</span></li></ol><p>→ C5 = <span class=\"lf\">{¬C(a)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "t": "note",
     "x": [
      "Les variables de clàusules diferents s'han renombrat perquè no en comparteixin cap (cada clàusula és independent).",
      "Las variables de cláusulas distintas se han renombrado para que no compartan ninguna (cada cláusula es independiente).",
      "The variables of different clauses have been renamed so that they share none (each clause is independent)."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬A(x), B(f(x))} , {¬A(y), R(y,f(y))} , {¬B(z), ¬R(u,z), C(u)} , {A(a)} , {¬C(a)} }</span></p>"
    },
    {
     "t": "h",
     "x": [
      "Refutació per resolució",
      "Refutación por resolución",
      "Refutation by resolution"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C5, C3) = {¬B(z), ¬R(a,z)}</span> &nbsp;<span class=\"lx-umg\">UMG: {u ← a}</span></li><li><span class=\"lf\">R2 = res(R1, C2) = {¬B(f(a)), ¬A(a)}</span> &nbsp;<span class=\"lx-umg\">UMG: {y ← a, z ← f(a)}</span></li><li><span class=\"lf\">R3 = res(R2, C4) = {¬B(f(a))}</span> &nbsp;<span class=\"lx-umg\">UMG: ε</span></li><li><span class=\"lf\">R4 = res(R3, C1) = {¬A(a)}</span> &nbsp;<span class=\"lx-umg\">UMG: {x ← a}</span></li><li><span class=\"lf\">R5 = res(R4, C4) = □</span> &nbsp;<span class=\"lx-umg\">UMG: ε</span></li></ol>"
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(a) , C(u) }</td><td>ε</td></tr><tr><td>1</td><td>{a, u}</td><td>u ← a</td><td>{u ← a}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(a) , C(u) }</td><td>ε</td></tr><tr><td>1</td><td>{a, u}</td><td>u ← a</td><td>{u ← a}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { C(a) , C(u) }</td><td>ε</td></tr><tr><td>1</td><td>{a, u}</td><td>u ← a</td><td>{u ← a}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R1: ¬C(a) i C(u)",
      "Unificación R1: ¬C(a) i C(u)",
      "Unification R1: ¬C(a) and C(u)"
     ]
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { R(a,z) , R(y,f(y)) }</td><td>ε</td></tr><tr><td>1</td><td>{a, y}</td><td>y ← a</td><td>{y ← a}</td></tr><tr><td>2</td><td>{z, f(a)}</td><td>z ← f(a)</td><td>{y ← a, z ← f(a)}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { R(a,z) , R(y,f(y)) }</td><td>ε</td></tr><tr><td>1</td><td>{a, y}</td><td>y ← a</td><td>{y ← a}</td></tr><tr><td>2</td><td>{z, f(a)}</td><td>z ← f(a)</td><td>{y ← a, z ← f(a)}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { R(a,z) , R(y,f(y)) }</td><td>ε</td></tr><tr><td>1</td><td>{a, y}</td><td>y ← a</td><td>{y ← a}</td></tr><tr><td>2</td><td>{z, f(a)}</td><td>z ← f(a)</td><td>{y ← a, z ← f(a)}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R2: ¬R(a,z) i R(y,f(y))",
      "Unificación R2: ¬R(a,z) i R(y,f(y))",
      "Unification R2: ¬R(a,z) and R(y,f(y))"
     ]
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { B(f(a)) , B(f(x)) }</td><td>ε</td></tr><tr><td>1</td><td>{a, x}</td><td>x ← a</td><td>{x ← a}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { B(f(a)) , B(f(x)) }</td><td>ε</td></tr><tr><td>1</td><td>{a, x}</td><td>x ← a</td><td>{x ← a}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { B(f(a)) , B(f(x)) }</td><td>ε</td></tr><tr><td>1</td><td>{a, x}</td><td>x ← a</td><td>{x ← a}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R4: ¬B(f(a)) i B(f(x))",
      "Unificación R4: ¬B(f(a)) i B(f(x))",
      "Unification R4: ¬B(f(a)) and B(f(x))"
     ]
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 619 372\" width=\"619\" height=\"372\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"84.5\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"32\" text-anchor=\"middle\">{¬C(a)}</text><text class=\"lx-lb\" x=\"78.5\" y=\"32\" text-anchor=\"end\">C5</text><rect class=\"lx-bx2\" x=\"268.9\" y=\"14\" width=\"191.4\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"364.6\" y=\"32\" text-anchor=\"middle\">{¬B(z), ¬R(u,z), C(u)}</text><text class=\"lx-lb\" x=\"466.3\" y=\"25\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"466.3\" y=\"39\" text-anchor=\"start\">{u ← a}</text><path class=\"lx-ln\" d=\"M122.5 42 L122.5 72\"></path><path class=\"lx-ln\" d=\"M364.6 42 L132.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"90\" text-anchor=\"middle\">{¬B(z), ¬R(a,z)}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"284.3\" y=\"72\" width=\"160.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"364.6\" y=\"90\" text-anchor=\"middle\">{¬A(y), R(y,f(y))}</text><text class=\"lx-lb\" x=\"450.9\" y=\"83\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"450.9\" y=\"97\" text-anchor=\"start\">{y ← a, z ← f(a)}</text><path class=\"lx-ln\" d=\"M122.5 100 L122.5 130\"></path><path class=\"lx-ln\" d=\"M364.6 100 L132.4 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"152.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"148\" text-anchor=\"middle\">{¬B(f(a)), ¬A(a)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"330.5\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"364.6\" y=\"148\" text-anchor=\"middle\">{A(a)}</text><text class=\"lx-lb\" x=\"404.7\" y=\"141\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"404.7\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M122.5 158 L122.5 188\"></path><path class=\"lx-ln\" d=\"M364.6 158 L132.4 188\"></path><rect class=\"lx-bx\" x=\"73.0\" y=\"188\" width=\"99.0\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"206\" text-anchor=\"middle\">{¬B(f(a))}</text><text class=\"lx-lb\" x=\"67.0\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"292.0\" y=\"188\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"364.6\" y=\"206\" text-anchor=\"middle\">{¬A(x), B(f(x))}</text><text class=\"lx-lb\" x=\"443.2\" y=\"199\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"443.2\" y=\"213\" text-anchor=\"start\">{x ← a}</text><path class=\"lx-ln\" d=\"M122.5 216 L122.5 246\"></path><path class=\"lx-ln\" d=\"M364.6 216 L132.4 246\"></path><rect class=\"lx-bx\" x=\"84.5\" y=\"246\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"264\" text-anchor=\"middle\">{¬A(a)}</text><text class=\"lx-lb\" x=\"78.5\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"330.5\" y=\"246\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"364.6\" y=\"264\" text-anchor=\"middle\">{A(a)}</text><text class=\"lx-lb\" x=\"404.7\" y=\"257\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"404.7\" y=\"271\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M122.5 274 L122.5 304\"></path><path class=\"lx-ln\" d=\"M364.6 274 L132.4 304\"></path><rect class=\"lx-bx-e\" x=\"107.6\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"101.6\" y=\"322\" text-anchor=\"end\">R5</text></svg>",
      "<svg viewBox=\"0 0 619 372\" width=\"619\" height=\"372\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"84.5\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"32\" text-anchor=\"middle\">{¬C(a)}</text><text class=\"lx-lb\" x=\"78.5\" y=\"32\" text-anchor=\"end\">C5</text><rect class=\"lx-bx2\" x=\"268.9\" y=\"14\" width=\"191.4\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"364.6\" y=\"32\" text-anchor=\"middle\">{¬B(z), ¬R(u,z), C(u)}</text><text class=\"lx-lb\" x=\"466.3\" y=\"25\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"466.3\" y=\"39\" text-anchor=\"start\">{u ← a}</text><path class=\"lx-ln\" d=\"M122.5 42 L122.5 72\"></path><path class=\"lx-ln\" d=\"M364.6 42 L132.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"90\" text-anchor=\"middle\">{¬B(z), ¬R(a,z)}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"284.3\" y=\"72\" width=\"160.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"364.6\" y=\"90\" text-anchor=\"middle\">{¬A(y), R(y,f(y))}</text><text class=\"lx-lb\" x=\"450.9\" y=\"83\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"450.9\" y=\"97\" text-anchor=\"start\">{y ← a, z ← f(a)}</text><path class=\"lx-ln\" d=\"M122.5 100 L122.5 130\"></path><path class=\"lx-ln\" d=\"M364.6 100 L132.4 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"152.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"148\" text-anchor=\"middle\">{¬B(f(a)), ¬A(a)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"330.5\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"364.6\" y=\"148\" text-anchor=\"middle\">{A(a)}</text><text class=\"lx-lb\" x=\"404.7\" y=\"141\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"404.7\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M122.5 158 L122.5 188\"></path><path class=\"lx-ln\" d=\"M364.6 158 L132.4 188\"></path><rect class=\"lx-bx\" x=\"73.0\" y=\"188\" width=\"99.0\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"206\" text-anchor=\"middle\">{¬B(f(a))}</text><text class=\"lx-lb\" x=\"67.0\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"292.0\" y=\"188\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"364.6\" y=\"206\" text-anchor=\"middle\">{¬A(x), B(f(x))}</text><text class=\"lx-lb\" x=\"443.2\" y=\"199\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"443.2\" y=\"213\" text-anchor=\"start\">{x ← a}</text><path class=\"lx-ln\" d=\"M122.5 216 L122.5 246\"></path><path class=\"lx-ln\" d=\"M364.6 216 L132.4 246\"></path><rect class=\"lx-bx\" x=\"84.5\" y=\"246\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"264\" text-anchor=\"middle\">{¬A(a)}</text><text class=\"lx-lb\" x=\"78.5\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"330.5\" y=\"246\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"364.6\" y=\"264\" text-anchor=\"middle\">{A(a)}</text><text class=\"lx-lb\" x=\"404.7\" y=\"257\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"404.7\" y=\"271\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M122.5 274 L122.5 304\"></path><path class=\"lx-ln\" d=\"M364.6 274 L132.4 304\"></path><rect class=\"lx-bx-e\" x=\"107.6\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"101.6\" y=\"322\" text-anchor=\"end\">R5</text></svg>",
      "<svg viewBox=\"0 0 619 372\" width=\"619\" height=\"372\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"84.5\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"32\" text-anchor=\"middle\">{¬C(a)}</text><text class=\"lx-lb\" x=\"78.5\" y=\"32\" text-anchor=\"end\">C5</text><rect class=\"lx-bx2\" x=\"268.9\" y=\"14\" width=\"191.4\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"364.6\" y=\"32\" text-anchor=\"middle\">{¬B(z), ¬R(u,z), C(u)}</text><text class=\"lx-lb\" x=\"466.3\" y=\"25\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"466.3\" y=\"39\" text-anchor=\"start\">{u ← a}</text><path class=\"lx-ln\" d=\"M122.5 42 L122.5 72\"></path><path class=\"lx-ln\" d=\"M364.6 42 L132.4 72\"></path><rect class=\"lx-bx\" x=\"49.9\" y=\"72\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"90\" text-anchor=\"middle\">{¬B(z), ¬R(a,z)}</text><text class=\"lx-lb\" x=\"43.9\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"284.3\" y=\"72\" width=\"160.6\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"364.6\" y=\"90\" text-anchor=\"middle\">{¬A(y), R(y,f(y))}</text><text class=\"lx-lb\" x=\"450.9\" y=\"83\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"450.9\" y=\"97\" text-anchor=\"start\">{y ← a, z ← f(a)}</text><path class=\"lx-ln\" d=\"M122.5 100 L122.5 130\"></path><path class=\"lx-ln\" d=\"M364.6 100 L132.4 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"152.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"148\" text-anchor=\"middle\">{¬B(f(a)), ¬A(a)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"330.5\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"364.6\" y=\"148\" text-anchor=\"middle\">{A(a)}</text><text class=\"lx-lb\" x=\"404.7\" y=\"141\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"404.7\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M122.5 158 L122.5 188\"></path><path class=\"lx-ln\" d=\"M364.6 158 L132.4 188\"></path><rect class=\"lx-bx\" x=\"73.0\" y=\"188\" width=\"99.0\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"206\" text-anchor=\"middle\">{¬B(f(a))}</text><text class=\"lx-lb\" x=\"67.0\" y=\"206\" text-anchor=\"end\">R3</text><rect class=\"lx-bx2\" x=\"292.0\" y=\"188\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"364.6\" y=\"206\" text-anchor=\"middle\">{¬A(x), B(f(x))}</text><text class=\"lx-lb\" x=\"443.2\" y=\"199\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"443.2\" y=\"213\" text-anchor=\"start\">{x ← a}</text><path class=\"lx-ln\" d=\"M122.5 216 L122.5 246\"></path><path class=\"lx-ln\" d=\"M364.6 216 L132.4 246\"></path><rect class=\"lx-bx\" x=\"84.5\" y=\"246\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"264\" text-anchor=\"middle\">{¬A(a)}</text><text class=\"lx-lb\" x=\"78.5\" y=\"264\" text-anchor=\"end\">R4</text><rect class=\"lx-bx2\" x=\"330.5\" y=\"246\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"364.6\" y=\"264\" text-anchor=\"middle\">{A(a)}</text><text class=\"lx-lb\" x=\"404.7\" y=\"257\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"404.7\" y=\"271\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M122.5 274 L122.5 304\"></path><path class=\"lx-ln\" d=\"M364.6 274 L132.4 304\"></path><rect class=\"lx-bx-e\" x=\"107.6\" y=\"304\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"122.5\" y=\"322\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"101.6\" y=\"322\" text-anchor=\"end\">R5</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-f9",
   "unit": "u8",
   "kind": "F",
   "level": "hard",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Comproveu mitjançant el mètode de resolució si el següent raonament és vàlid o no:",
      "Comprobad mediante el método de resolución si el siguiente razonamiento es válido o no:",
      "Check by the resolution method whether the following argument is valid or not:"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x (P(x) → Q(x))</span> <i>(premissa)</i></li><li><span class=\"lf\">∀x (Q(x) → R(x))</span> <i>(premissa)</i></li><li><span class=\"lf\">∀x (P(x) → R(x))</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x (P(x) → Q(x))</span> <i>(premisa)</i></li><li><span class=\"lf\">∀x (Q(x) → R(x))</span> <i>(premisa)</i></li><li><span class=\"lf\">∀x (P(x) → R(x))</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x (P(x) → Q(x))</span> <i>(premise)</i></li><li><span class=\"lf\">∀x (Q(x) → R(x))</span> <i>(premise)</i></li><li><span class=\"lf\">∀x (P(x) → R(x))</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "On P, Q, R són símbols de predicats, x, y, z són símbols de variables.",
      "Donde P, Q, R son símbolos de predicados, x, y, z son símbolos de variables.",
      "Where P, Q, R are predicate symbols, x, y, z are variable symbols."
     ]
    },
    {
     "t": "p",
     "x": [
      "Expliqueu els passos que seguiu per fer la prova i **noteu els unificadors** (UMG).",
      "Explicad los pasos que seguís para hacer la prueba y **anotad los unificadores** (UMG).",
      "Explain the steps you follow to do the proof and **note the unifiers** (MGU)."
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Neguem la conclusió",
      "Negamos la conclusión",
      "We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Afegim la negació de la conclusió, <span class=\"lf\">¬∀x (P(x) → R(x))</span>, a les premisses i busquem la clàusula buida (prova per refutació).</p>",
      "<p>Añadimos la negación de la conclusión, <span class=\"lf\">¬∀x (P(x) → R(x))</span>, a las premisas y buscamos la cláusula vacía (prueba por refutación).</p>",
      "<p>We add the negation of the conclusion, <span class=\"lf\">¬∀x (P(x) → R(x))</span>, to the premises and look for the empty clause (proof by refutation).</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "Forma clausal de les premisses i de la conclusió negada",
      "Forma clausal de las premisas y de la conclusión negada",
      "Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (P(x) → Q(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x (¬P(x) ∨ Q(x))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬P(x) ∨ Q(x)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬P(x), Q(x)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬P(x), Q(x)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (P(x) → Q(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x (¬P(x) ∨ Q(x))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬P(x) ∨ Q(x)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬P(x), Q(x)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬P(x), Q(x)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (P(x) → Q(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x (¬P(x) ∨ Q(x))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬P(x) ∨ Q(x)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬P(x), Q(x)} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬P(x), Q(x)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (Q(x) → R(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x (¬Q(x) ∨ R(x))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬Q(x) ∨ R(x)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬Q(x), R(x)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{¬Q(y), R(y)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (Q(x) → R(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x (¬Q(x) ∨ R(x))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬Q(x) ∨ R(x)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬Q(x), R(x)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{¬Q(y), R(y)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (Q(x) → R(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x (¬Q(x) ∨ R(x))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬Q(x) ∨ R(x)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬Q(x), R(x)} }</span></li></ol><p>→ C2 = <span class=\"lf\">{¬Q(y), R(y)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∀x (P(x) → R(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">¬∀x (¬P(x) ∨ R(x))</span></li><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∃x (P(x) ∧ ¬R(x))</span></li><li><b>4.</b> Skolemitzar: x → k (constant de Skolem)<br><span class=\"lf\">P(k) ∧ ¬R(k)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {P(k)} , {¬R(k)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{P(k)}</span>, C4 = <span class=\"lf\">{¬R(k)}</span></p></div>",
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∀x (P(x) → R(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">¬∀x (¬P(x) ∨ R(x))</span></li><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∃x (P(x) ∧ ¬R(x))</span></li><li><b>4.</b> Skolemizar: x → k (constante de Skolem)<br><span class=\"lf\">P(k) ∧ ¬R(k)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {P(k)} , {¬R(k)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{P(k)}</span>, C4 = <span class=\"lf\">{¬R(k)}</span></p></div>",
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∀x (P(x) → R(x))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">¬∀x (¬P(x) ∨ R(x))</span></li><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∃x (P(x) ∧ ¬R(x))</span></li><li><b>4.</b> Skolemise: x → k (Skolem constant)<br><span class=\"lf\">P(k) ∧ ¬R(k)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {P(k)} , {¬R(k)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{P(k)}</span>, C4 = <span class=\"lf\">{¬R(k)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "t": "note",
     "x": [
      "Les variables de clàusules diferents s'han renombrat perquè no en comparteixin cap (cada clàusula és independent).",
      "Las variables de cláusulas distintas se han renombrado para que no compartan ninguna (cada cláusula es independiente).",
      "The variables of different clauses have been renamed so that they share none (each clause is independent)."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬P(x), Q(x)} , {¬Q(y), R(y)} , {P(k)} , {¬R(k)} }</span></p>"
    },
    {
     "t": "h",
     "x": [
      "Refutació per resolució",
      "Refutación por resolución",
      "Refutation by resolution"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C3, C1) = {Q(k)}</span> &nbsp;<span class=\"lx-umg\">UMG: {x ← k}</span></li><li><span class=\"lf\">R2 = res(R1, C2) = {R(k)}</span> &nbsp;<span class=\"lx-umg\">UMG: {y ← k}</span></li><li><span class=\"lf\">R3 = res(R2, C4) = □</span> &nbsp;<span class=\"lx-umg\">UMG: ε</span></li></ol>"
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { P(k) , P(x) }</td><td>ε</td></tr><tr><td>1</td><td>{k, x}</td><td>x ← k</td><td>{x ← k}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { P(k) , P(x) }</td><td>ε</td></tr><tr><td>1</td><td>{k, x}</td><td>x ← k</td><td>{x ← k}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { P(k) , P(x) }</td><td>ε</td></tr><tr><td>1</td><td>{k, x}</td><td>x ← k</td><td>{x ← k}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R1: P(k) i ¬P(x)",
      "Unificación R1: P(k) i ¬P(x)",
      "Unification R1: P(k) and ¬P(x)"
     ]
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { Q(k) , Q(y) }</td><td>ε</td></tr><tr><td>1</td><td>{k, y}</td><td>y ← k</td><td>{y ← k}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { Q(k) , Q(y) }</td><td>ε</td></tr><tr><td>1</td><td>{k, y}</td><td>y ← k</td><td>{y ← k}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { Q(k) , Q(y) }</td><td>ε</td></tr><tr><td>1</td><td>{k, y}</td><td>y ← k</td><td>{y ← k}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R2: Q(k) i ¬Q(y)",
      "Unificación R2: Q(k) i ¬Q(y)",
      "Unification R2: Q(k) and ¬Q(y)"
     ]
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 395 256\" width=\"395\" height=\"256\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"32\" text-anchor=\"middle\">{P(k)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C3</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"14\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"32\" text-anchor=\"middle\">{¬P(x), Q(x)}</text><text class=\"lx-lb\" x=\"312.3\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"312.3\" y=\"39\" text-anchor=\"start\">{x ← k}</text><path class=\"lx-ln\" d=\"M80.1 42 L80.1 72\"></path><path class=\"lx-ln\" d=\"M245.2 42 L90.1 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"90\" text-anchor=\"middle\">{Q(k)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"72\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"90\" text-anchor=\"middle\">{¬Q(y), R(y)}</text><text class=\"lx-lb\" x=\"312.3\" y=\"83\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"312.3\" y=\"97\" text-anchor=\"start\">{y ← k}</text><path class=\"lx-ln\" d=\"M80.1 100 L80.1 130\"></path><path class=\"lx-ln\" d=\"M245.2 100 L90.1 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"148\" text-anchor=\"middle\">{R(k)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"207.3\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"148\" text-anchor=\"middle\">{¬R(k)}</text><text class=\"lx-lb\" x=\"289.2\" y=\"141\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"289.2\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M80.1 158 L80.1 188\"></path><path class=\"lx-ln\" d=\"M245.2 158 L90.1 188\"></path><rect class=\"lx-bx-e\" x=\"65.2\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"59.2\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
      "<svg viewBox=\"0 0 395 256\" width=\"395\" height=\"256\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"32\" text-anchor=\"middle\">{P(k)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C3</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"14\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"32\" text-anchor=\"middle\">{¬P(x), Q(x)}</text><text class=\"lx-lb\" x=\"312.3\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"312.3\" y=\"39\" text-anchor=\"start\">{x ← k}</text><path class=\"lx-ln\" d=\"M80.1 42 L80.1 72\"></path><path class=\"lx-ln\" d=\"M245.2 42 L90.1 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"90\" text-anchor=\"middle\">{Q(k)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"72\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"90\" text-anchor=\"middle\">{¬Q(y), R(y)}</text><text class=\"lx-lb\" x=\"312.3\" y=\"83\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"312.3\" y=\"97\" text-anchor=\"start\">{y ← k}</text><path class=\"lx-ln\" d=\"M80.1 100 L80.1 130\"></path><path class=\"lx-ln\" d=\"M245.2 100 L90.1 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"148\" text-anchor=\"middle\">{R(k)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"207.3\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"148\" text-anchor=\"middle\">{¬R(k)}</text><text class=\"lx-lb\" x=\"289.2\" y=\"141\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"289.2\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M80.1 158 L80.1 188\"></path><path class=\"lx-ln\" d=\"M245.2 158 L90.1 188\"></path><rect class=\"lx-bx-e\" x=\"65.2\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"59.2\" y=\"206\" text-anchor=\"end\">R3</text></svg>",
      "<svg viewBox=\"0 0 395 256\" width=\"395\" height=\"256\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"32\" text-anchor=\"middle\">{P(k)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C3</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"14\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"32\" text-anchor=\"middle\">{¬P(x), Q(x)}</text><text class=\"lx-lb\" x=\"312.3\" y=\"25\" text-anchor=\"start\">C1</text><text class=\"lx-um\" x=\"312.3\" y=\"39\" text-anchor=\"start\">{x ← k}</text><path class=\"lx-ln\" d=\"M80.1 42 L80.1 72\"></path><path class=\"lx-ln\" d=\"M245.2 42 L90.1 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"90\" text-anchor=\"middle\">{Q(k)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"184.2\" y=\"72\" width=\"122.1\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"90\" text-anchor=\"middle\">{¬Q(y), R(y)}</text><text class=\"lx-lb\" x=\"312.3\" y=\"83\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"312.3\" y=\"97\" text-anchor=\"start\">{y ← k}</text><path class=\"lx-ln\" d=\"M80.1 100 L80.1 130\"></path><path class=\"lx-ln\" d=\"M245.2 100 L90.1 130\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"130\" width=\"68.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"148\" text-anchor=\"middle\">{R(k)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"148\" text-anchor=\"end\">R2</text><rect class=\"lx-bx2\" x=\"207.3\" y=\"130\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"245.2\" y=\"148\" text-anchor=\"middle\">{¬R(k)}</text><text class=\"lx-lb\" x=\"289.2\" y=\"141\" text-anchor=\"start\">C4</text><text class=\"lx-um\" x=\"289.2\" y=\"155\" text-anchor=\"start\">ε</text><path class=\"lx-ln\" d=\"M80.1 158 L80.1 188\"></path><path class=\"lx-ln\" d=\"M245.2 158 L90.1 188\"></path><rect class=\"lx-bx-e\" x=\"65.2\" y=\"188\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"80.1\" y=\"206\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"59.2\" y=\"206\" text-anchor=\"end\">R3</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    }
   ],
   "space": "lines:14"
  },
  {
   "id": "lg-f10",
   "unit": "u8",
   "kind": "F",
   "level": "hard",
   "type": "open",
   "src": "new",
   "title": "",
   "qb": [
    {
     "t": "p",
     "x": [
      "Comproveu mitjançant el mètode de resolució si el següent raonament és vàlid o no:",
      "Comprobad mediante el método de resolución si el siguiente razonamiento es válido o no:",
      "Check by the resolution method whether the following argument is valid or not:"
     ]
    },
    {
     "h": [
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x (R(x) → ∃y (S(x,y) ∧ V(y)))</span> <i>(premissa)</i></li><li><span class=\"lf\">R(latasca)</span> <i>(premissa)</i></li><li><span class=\"lf\">∃y V(y)</span> <i>(conclusió)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x (R(x) → ∃y (S(x,y) ∧ V(y)))</span> <i>(premisa)</i></li><li><span class=\"lf\">R(latasca)</span> <i>(premisa)</i></li><li><span class=\"lf\">∃y V(y)</span> <i>(conclusión)</i></li></ul>",
      "<ul class=\"lx-pc\"><li><span class=\"lf\">∀x (R(x) → ∃y (S(x,y) ∧ V(y)))</span> <i>(premise)</i></li><li><span class=\"lf\">R(latasca)</span> <i>(premise)</i></li><li><span class=\"lf\">∃y V(y)</span> <i>(conclusion)</i></li></ul>"
     ],
     "t": "html"
    },
    {
     "t": "p",
     "x": [
      "On R, S, V són símbols de predicats, x, y, z són símbols de variables i latasca són símbols de constants.",
      "Donde R, S, V son símbolos de predicados, x, y, z son símbolos de variables y latasca son símbolos de constantes.",
      "Where R, S, V are predicate symbols, x, y, z are variable symbols and latasca is a constant symbol."
     ]
    },
    {
     "t": "note",
     "x": [
      "R(x): x és un restaurant · S(x,y): x serveix el plat y · V(y): y és vegetarià.",
      "R(x): x es un restaurante · S(x,y): x sirve el plato y · V(y): y es vegetariano.",
      "R(x): x is a restaurant · S(x,y): x serves dish y · V(y): y is vegetarian."
     ]
    },
    {
     "t": "p",
     "x": [
      "Expliqueu els passos que seguiu per fer la prova i **noteu els unificadors** (UMG).",
      "Explicad los pasos que seguís para hacer la prueba y **anotad los unificadores** (UMG).",
      "Explain the steps you follow to do the proof and **note the unifiers** (MGU)."
     ]
    }
   ],
   "sol": [
    {
     "t": "h",
     "x": [
      "Neguem la conclusió",
      "Negamos la conclusión",
      "We negate the conclusion"
     ]
    },
    {
     "h": [
      "<p>Afegim la negació de la conclusió, <span class=\"lf\">¬∃y V(y)</span>, a les premisses i busquem la clàusula buida (prova per refutació).</p>",
      "<p>Añadimos la negación de la conclusión, <span class=\"lf\">¬∃y V(y)</span>, a las premisas y buscamos la cláusula vacía (prueba por refutación).</p>",
      "<p>We add the negation of the conclusion, <span class=\"lf\">¬∃y V(y)</span>, to the premises and look for the empty clause (proof by refutation).</p>"
     ],
     "t": "html"
    },
    {
     "t": "h",
     "x": [
      "Forma clausal de les premisses i de la conclusió negada",
      "Forma clausal de las premisas y de la conclusión negada",
      "Clausal form of the premises and of the negated conclusion"
     ]
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (R(x) → ∃y (S(x,y) ∧ V(y)))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicacions: <span class=\"lf\">∀x (¬R(x) ∨ ∃y (S(x,y) ∧ V(y)))</span></li><li><b>4.</b> Skolemitzar: y → f(x) (funció de Skolem de x)<br><span class=\"lf\">∀x (¬R(x) ∨ (S(x,f(x)) ∧ V(f(x))))</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬R(x) ∨ (S(x,f(x)) ∧ V(f(x)))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬R(x) ∨ S(x,f(x))) ∧ (¬R(x) ∨ V(f(x)))</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬R(x), S(x,f(x))} , {¬R(x), V(f(x))} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬R(x), S(x,f(x))}</span>, C2 = <span class=\"lf\">{¬R(y), V(f(y))}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (R(x) → ∃y (S(x,y) ∧ V(y)))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminar implicaciones: <span class=\"lf\">∀x (¬R(x) ∨ ∃y (S(x,y) ∧ V(y)))</span></li><li><b>4.</b> Skolemizar: y → f(x) (función de Skolem de x)<br><span class=\"lf\">∀x (¬R(x) ∨ (S(x,f(x)) ∧ V(f(x))))</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬R(x) ∨ (S(x,f(x)) ∧ V(f(x)))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬R(x) ∨ S(x,f(x))) ∧ (¬R(x) ∨ V(f(x)))</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬R(x), S(x,f(x))} , {¬R(x), V(f(x))} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬R(x), S(x,f(x))}</span>, C2 = <span class=\"lf\">{¬R(y), V(f(y))}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">∀x (R(x) → ∃y (S(x,y) ∧ V(y)))</span></p><ol class=\"lx-cs\"><li><b>1.</b> Eliminate implications: <span class=\"lf\">∀x (¬R(x) ∨ ∃y (S(x,y) ∧ V(y)))</span></li><li><b>4.</b> Skolemise: y → f(x) (Skolem function of x)<br><span class=\"lf\">∀x (¬R(x) ∨ (S(x,f(x)) ∧ V(f(x))))</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬R(x) ∨ (S(x,f(x)) ∧ V(f(x)))</span></li><li><b>7.</b> FNC (distributiva): <span class=\"lf\">(¬R(x) ∨ S(x,f(x))) ∧ (¬R(x) ∨ V(f(x)))</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬R(x), S(x,f(x))} , {¬R(x), V(f(x))} }</span></li></ol><p>→ C1 = <span class=\"lf\">{¬R(x), S(x,f(x))}</span>, C2 = <span class=\"lf\">{¬R(y), V(f(y))}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb\"><p><span class=\"lf\">R(latasca)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clàusules: <span class=\"lf\">{ {R(latasca)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{R(latasca)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">R(latasca)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {R(latasca)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{R(latasca)}</span></p></div>",
      "<div class=\"lx-cfb\"><p><span class=\"lf\">R(latasca)</span></p><ol class=\"lx-cs\"><li><b>8.</b> Clauses: <span class=\"lf\">{ {R(latasca)} }</span></li></ol><p>→ C3 = <span class=\"lf\">{R(latasca)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "h": [
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∃y V(y)</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reduir l'àmbit de les negacions: <span class=\"lf\">∀y ¬V(y)</span></li><li><b>6.</b> Eliminar quantificadors: <span class=\"lf\">¬V(y)</span></li><li><b>8.</b> Clàusules: <span class=\"lf\">{ {¬V(y)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{¬V(z)}</span></p></div>",
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∃y V(y)</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reducir el ámbito de las negaciones: <span class=\"lf\">∀y ¬V(y)</span></li><li><b>6.</b> Eliminar cuantificadores: <span class=\"lf\">¬V(y)</span></li><li><b>8.</b> Cláusulas: <span class=\"lf\">{ {¬V(y)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{¬V(z)}</span></p></div>",
      "<div class=\"lx-cfb neg\"><p><span class=\"lf\">¬∃y V(y)</span></p><ol class=\"lx-cs\"><li><b>2.</b> Reduce the scope of negations: <span class=\"lf\">∀y ¬V(y)</span></li><li><b>6.</b> Eliminate quantifiers: <span class=\"lf\">¬V(y)</span></li><li><b>8.</b> Clauses: <span class=\"lf\">{ {¬V(y)} }</span></li></ol><p>→ C4 = <span class=\"lf\">{¬V(z)}</span></p></div>"
     ],
     "t": "html"
    },
    {
     "t": "note",
     "x": [
      "Les variables de clàusules diferents s'han renombrat perquè no en comparteixin cap (cada clàusula és independent).",
      "Las variables de cláusulas distintas se han renombrado para que no compartan ninguna (cada cláusula es independiente).",
      "The variables of different clauses have been renamed so that they share none (each clause is independent)."
     ]
    },
    {
     "t": "html",
     "h": "<p class=\"lx-set\"><span class=\"lf\">S = { {¬R(x), S(x,f(x))} , {¬R(y), V(f(y))} , {R(latasca)} , {¬V(z)} }</span></p>"
    },
    {
     "t": "h",
     "x": [
      "Refutació per resolució",
      "Refutación por resolución",
      "Refutation by resolution"
     ]
    },
    {
     "t": "html",
     "h": "<ol class=\"lx-res\"><li><span class=\"lf\">R1 = res(C4, C2) = {¬R(y)}</span> &nbsp;<span class=\"lx-umg\">UMG: {z ← f(y)}</span></li><li><span class=\"lf\">R2 = res(R1, C3) = □</span> &nbsp;<span class=\"lx-umg\">UMG: {y ← latasca}</span></li></ol>"
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { V(z) , V(f(y)) }</td><td>ε</td></tr><tr><td>1</td><td>{z, f(y)}</td><td>z ← f(y)</td><td>{z ← f(y)}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { V(z) , V(f(y)) }</td><td>ε</td></tr><tr><td>1</td><td>{z, f(y)}</td><td>z ← f(y)</td><td>{z ← f(y)}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { V(z) , V(f(y)) }</td><td>ε</td></tr><tr><td>1</td><td>{z, f(y)}</td><td>z ← f(y)</td><td>{z ← f(y)}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R1: ¬V(z) i V(f(y))",
      "Unificación R1: ¬V(z) i V(f(y))",
      "Unification R1: ¬V(z) and V(f(y))"
     ]
    },
    {
     "blocks": [
      {
       "h": [
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>parella</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { R(y) , R(latasca) }</td><td>ε</td></tr><tr><td>1</td><td>{y, latasca}</td><td>y ← latasca</td><td>{y ← latasca}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pareja</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { R(y) , R(latasca) }</td><td>ε</td></tr><tr><td>1</td><td>{y, latasca}</td><td>y ← latasca</td><td>{y ← latasca}</td></tr></tbody></table></div>",
        "<div class=\"tw\"><table class=\"lx-un\"><thead><tr><th>i</th><th>Dᵢ</th><th>pair</th><th>φ</th></tr></thead><tbody><tr><td>0</td><td colspan=\"2\">E₀ = { R(y) , R(latasca) }</td><td>ε</td></tr><tr><td>1</td><td>{y, latasca}</td><td>y ← latasca</td><td>{y ← latasca}</td></tr></tbody></table></div>"
       ],
       "t": "html"
      }
     ],
     "t": "details",
     "title": [
      "Unificació R2: ¬R(y) i R(latasca)",
      "Unificación R2: ¬R(y) i R(latasca)",
      "Unification R2: ¬R(y) and R(latasca)"
     ]
    },
    {
     "svg": [
      "<svg viewBox=\"0 0 468 198\" width=\"468\" height=\"198\" role=\"img\" aria-label=\"Arbre de la refutació\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"32\" text-anchor=\"middle\">{¬V(z)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"191.9\" y=\"14\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"264.5\" y=\"32\" text-anchor=\"middle\">{¬R(y), V(f(y))}</text><text class=\"lx-lb\" x=\"343.1\" y=\"25\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"343.1\" y=\"39\" text-anchor=\"start\">{z ← f(y)}</text><path class=\"lx-ln\" d=\"M84.0 42 L84.0 72\"></path><path class=\"lx-ln\" d=\"M264.5 42 L94.0 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"90\" text-anchor=\"middle\">{¬R(y)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"207.3\" y=\"72\" width=\"114.4\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"264.5\" y=\"90\" text-anchor=\"middle\">{R(latasca)}</text><text class=\"lx-lb\" x=\"327.7\" y=\"83\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"327.7\" y=\"97\" text-anchor=\"start\">{y ← latasca}</text><path class=\"lx-ln\" d=\"M84.0 100 L84.0 130\"></path><path class=\"lx-ln\" d=\"M264.5 100 L94.0 130\"></path><rect class=\"lx-bx-e\" x=\"69.1\" y=\"130\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"148\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"63.1\" y=\"148\" text-anchor=\"end\">R2</text></svg>",
      "<svg viewBox=\"0 0 468 198\" width=\"468\" height=\"198\" role=\"img\" aria-label=\"Árbol de la refutación\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"32\" text-anchor=\"middle\">{¬V(z)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"191.9\" y=\"14\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"264.5\" y=\"32\" text-anchor=\"middle\">{¬R(y), V(f(y))}</text><text class=\"lx-lb\" x=\"343.1\" y=\"25\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"343.1\" y=\"39\" text-anchor=\"start\">{z ← f(y)}</text><path class=\"lx-ln\" d=\"M84.0 42 L84.0 72\"></path><path class=\"lx-ln\" d=\"M264.5 42 L94.0 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"90\" text-anchor=\"middle\">{¬R(y)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"207.3\" y=\"72\" width=\"114.4\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"264.5\" y=\"90\" text-anchor=\"middle\">{R(latasca)}</text><text class=\"lx-lb\" x=\"327.7\" y=\"83\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"327.7\" y=\"97\" text-anchor=\"start\">{y ← latasca}</text><path class=\"lx-ln\" d=\"M84.0 100 L84.0 130\"></path><path class=\"lx-ln\" d=\"M264.5 100 L94.0 130\"></path><rect class=\"lx-bx-e\" x=\"69.1\" y=\"130\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"148\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"63.1\" y=\"148\" text-anchor=\"end\">R2</text></svg>",
      "<svg viewBox=\"0 0 468 198\" width=\"468\" height=\"198\" role=\"img\" aria-label=\"Refutation tree\"><rect class=\"lx-bx\" x=\"46.0\" y=\"14\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"32\" text-anchor=\"middle\">{¬V(z)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"32\" text-anchor=\"end\">C4</text><rect class=\"lx-bx2\" x=\"191.9\" y=\"14\" width=\"145.2\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"264.5\" y=\"32\" text-anchor=\"middle\">{¬R(y), V(f(y))}</text><text class=\"lx-lb\" x=\"343.1\" y=\"25\" text-anchor=\"start\">C2</text><text class=\"lx-um\" x=\"343.1\" y=\"39\" text-anchor=\"start\">{z ← f(y)}</text><path class=\"lx-ln\" d=\"M84.0 42 L84.0 72\"></path><path class=\"lx-ln\" d=\"M264.5 42 L94.0 72\"></path><rect class=\"lx-bx\" x=\"46.0\" y=\"72\" width=\"75.9\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"90\" text-anchor=\"middle\">{¬R(y)}</text><text class=\"lx-lb\" x=\"40.0\" y=\"90\" text-anchor=\"end\">R1</text><rect class=\"lx-bx2\" x=\"207.3\" y=\"72\" width=\"114.4\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"264.5\" y=\"90\" text-anchor=\"middle\">{R(latasca)}</text><text class=\"lx-lb\" x=\"327.7\" y=\"83\" text-anchor=\"start\">C3</text><text class=\"lx-um\" x=\"327.7\" y=\"97\" text-anchor=\"start\">{y ← latasca}</text><path class=\"lx-ln\" d=\"M84.0 100 L84.0 130\"></path><path class=\"lx-ln\" d=\"M264.5 100 L94.0 130\"></path><rect class=\"lx-bx-e\" x=\"69.1\" y=\"130\" width=\"29.7\" height=\"28\" rx=\"5\"></rect><text class=\"lx-tx\" x=\"84.0\" y=\"148\" text-anchor=\"middle\">□</text><text class=\"lx-lb\" x=\"63.1\" y=\"148\" text-anchor=\"end\">R2</text></svg>"
     ],
     "t": "diagram"
    },
    {
     "t": "p",
     "x": [
      "Hem obtingut la clàusula buida □: el conjunt és insatisfactible i, per tant, la conclusió és conseqüència lògica de les premisses. **El raonament és vàlid.**",
      "Hemos obtenido la cláusula vacía □: el conjunto es insatisfacible y, por tanto, la conclusión es consecuencia lógica de las premisas. **El razonamiento es válido.**",
      "We have obtained the empty clause □: the set is unsatisfiable and, therefore, the conclusion is a logical consequence of the premises. **The argument is valid.**"
     ]
    }
   ],
   "space": "lines:14"
  }
 ],
 "families": GRAPH_FAMILIES
};
