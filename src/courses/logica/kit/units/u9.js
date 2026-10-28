// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "La resolució no és només un mètode de demostració: si les clàusules tenen una forma especial, és també una manera de calcular. És la idea del llenguatge PROLOG.",
    "La resolución no es solo un método de demostración: si las cláusulas tienen una forma especial, es también una manera de calcular. Es la idea del lenguaje PROLOG.",
    "Resolution is not only a method of proof: if the clauses have a special form, it is also a way of computing. That is the idea behind the language PROLOG."
   ]
  }
 ],
 "sections": {
  "u9-dir-que-no-com": [
   {
    "t": "p",
    "x": [
     "En un programa imperatiu (C++, Python) s'escriuen les instruccions que cal seguir. En un programa lògic s'escriuen **fets** i **regles**, i es fan **preguntes**: el mateix mecanisme de resolució busca la resposta.",
     "En un programa imperativo (C++, Python) se escriben las instrucciones que hay que seguir. En un programa lógico se escriben **hechos** y **reglas**, y se hacen **preguntas**: el mismo mecanismo de resolución busca la respuesta.",
     "In an imperative program (C++, Python) you write the instructions to be followed. In a logic program you write **facts** and **rules**, and ask **questions**: the same resolution mechanism looks for the answer."
    ]
   }
  ],
  "u9-clausules-de-horn": [
   {
    "t": "p",
    "x": [
     "Una **clàusula de Horn** té com a màxim un literal positiu. N'hi ha de tres menes, i s'escriuen amb una fletxa cap a l'esquerra (`←`, «si»):",
     "Una **cláusula de Horn** tiene como máximo un literal positivo. Las hay de tres tipos, y se escriben con una flecha hacia la izquierda (`←`, «si»):",
     "A **Horn clause** has at most one positive literal. There are three kinds, and they are written with an arrow to the left (`←`, “if”):"
    ]
   },
   {
    "head": [
     [
      "Tipus",
      "Tipo",
      "Kind"
     ],
     [
      "Clàusula",
      "Cláusula",
      "Clause"
     ],
     [
      "S'escriu",
      "Se escribe",
      "Written"
     ],
     [
      "Significat",
      "Significado",
      "Meaning"
     ]
    ],
    "rows": [
     [
      [
       "Fet",
       "Hecho",
       "Fact"
      ],
      "`{P}`",
      "`P ←`",
      [
       "P és cert, sense condicions",
       "P es cierto, sin condiciones",
       "P is true, unconditionally"
      ]
     ],
     [
      "Regla",
      "`{P, ¬Q₁, …, ¬Qₙ}`",
      "`P ← Q₁, …, Qₙ`",
      [
       "P és cert si ho són Q₁ i … i Qₙ",
       "P es cierto si lo son Q₁ y … y Qₙ",
       "P is true if Q₁ and … and Qₙ are"
      ]
     ],
     [
      [
       "Objectiu (pregunta)",
       "Objetivo (pregunta)",
       "Goal (question)"
      ],
      "`{¬Q₁, …, ¬Qₙ}`",
      "`← Q₁, …, Qₙ`",
      [
       "és cert Q₁ i … i Qₙ? (per a quins valors?)",
       "¿es cierto Q₁ y … y Qₙ? (¿para qué valores?)",
       "are Q₁ and … and Qₙ true? (for which values?)"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "Per què la regla és així: `Q₁ ∧ … ∧ Qₙ → P ≡ ¬Q₁ ∨ … ∨ ¬Qₙ ∨ P`. La pregunta és la conclusió negada, exactament com en una refutació.",
     "Por qué la regla es así: `Q₁ ∧ … ∧ Qₙ → P ≡ ¬Q₁ ∨ … ∨ ¬Qₙ ∨ P`. La pregunta es la conclusión negada, exactamente como en una refutación.",
     "Why the rule looks like this: `Q₁ ∧ … ∧ Qₙ → P ≡ ¬Q₁ ∨ … ∨ ¬Qₙ ∨ P`. The question is the negated conclusion, exactly as in a refutation."
    ]
   }
  ],
  "u9-un-programa-i-la-sld-resolucio": [
   {
    "head": [
     "#",
     [
      "Clàusula",
      "Cláusula",
      "Clause"
     ]
    ],
    "rows": [
     [
      "1",
      "`progenitor(joan, montse) ←`"
     ],
     [
      "2",
      "`progenitor(montse, josep) ←`"
     ],
     [
      "3",
      "`progenitor(montse, anna) ←`"
     ],
     [
      "4",
      "`avi(x, y) ← progenitor(x, z), progenitor(z, y)`"
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "Pregunta: «de qui és avi el Joan?», `← avi(joan, w)`. La **SLD-resolució** agafa sempre el primer literal de l'objectiu, el resol amb una clàusula del programa que en tingui el cap unificable i el substitueix pel cos d'aquella clàusula:",
     "Pregunta: «¿de quién es abuelo Joan?», `← avi(joan, w)`. La **SLD-resolución** toma siempre el primer literal del objetivo, lo resuelve con una cláusula del programa cuya cabeza sea unificable con él y lo sustituye por el cuerpo de esa cláusula:",
     "Question: “whose grandfather is Joan?”, `← avi(joan, w)`. **SLD resolution** always takes the first literal of the goal, resolves it with a program clause whose head unifies with it and replaces it by the body of that clause:"
    ]
   },
   {
    "caption": [
     "Cada branca que acaba en □ és una resposta: la composició dels UMG aplicada a la variable de la pregunta. Quan una branca falla o ja s'ha respost, PROLOG torna enrere (*backtracking*) i prova la clàusula següent.",
     "Cada rama que acaba en □ es una respuesta: la composición de los UMG aplicada a la variable de la pregunta. Cuando una rama falla o ya se ha respondido, PROLOG vuelve atrás (*backtracking*) y prueba la cláusula siguiente.",
     "Each branch that ends in □ is an answer: the composition of the MGUs applied to the variable of the question. When a branch fails or has already been answered, PROLOG goes back (*backtracking*) and tries the next clause."
    ],
    "cls": "vz",
    "svg": [
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 700 300\" role=\"img\" aria-label=\"Arbre SLD de la pregunta avi(joan, w)\">\n<rect class=\"vz-nodeA\" x=\"230\" y=\"12\" width=\"240\" height=\"34\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"350\" y=\"34\" text-anchor=\"middle\">← avi(joan, w)</text>\n<path class=\"vz-ln\" d=\"M350 46 V88\"></path><text class=\"vz-sm\" x=\"362\" y=\"72\">4 · {x ← joan, y ← w}</text>\n<rect class=\"vz-node\" x=\"150\" y=\"88\" width=\"400\" height=\"34\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"350\" y=\"110\" text-anchor=\"middle\">← progenitor(joan, z), progenitor(z, w)</text>\n<path class=\"vz-ln\" d=\"M350 122 V164\"></path><text class=\"vz-sm\" x=\"362\" y=\"148\">1 · {z ← montse}</text>\n<rect class=\"vz-node\" x=\"215\" y=\"164\" width=\"270\" height=\"34\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"350\" y=\"186\" text-anchor=\"middle\">← progenitor(montse, w)</text>\n<path class=\"vz-ln\" d=\"M300 198 L190 250\"></path><path class=\"vz-ln\" d=\"M400 198 L510 250\"></path>\n<text class=\"vz-sm\" x=\"168\" y=\"226\">2 · {w ← josep}</text><text class=\"vz-sm\" x=\"452\" y=\"226\">3 · {w ← anna}</text>\n<rect class=\"vz-pT\" x=\"130\" y=\"250\" width=\"120\" height=\"34\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"190\" y=\"272\" text-anchor=\"middle\">□ w = josep</text>\n<rect class=\"vz-pT\" x=\"450\" y=\"250\" width=\"120\" height=\"34\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"510\" y=\"272\" text-anchor=\"middle\">□ w = anna</text>\n</svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 700 300\" role=\"img\" aria-label=\"Árbol SLD de la pregunta avi(joan, w)\">\n<rect class=\"vz-nodeA\" x=\"230\" y=\"12\" width=\"240\" height=\"34\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"350\" y=\"34\" text-anchor=\"middle\">← avi(joan, w)</text>\n<path class=\"vz-ln\" d=\"M350 46 V88\"></path><text class=\"vz-sm\" x=\"362\" y=\"72\">4 · {x ← joan, y ← w}</text>\n<rect class=\"vz-node\" x=\"150\" y=\"88\" width=\"400\" height=\"34\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"350\" y=\"110\" text-anchor=\"middle\">← progenitor(joan, z), progenitor(z, w)</text>\n<path class=\"vz-ln\" d=\"M350 122 V164\"></path><text class=\"vz-sm\" x=\"362\" y=\"148\">1 · {z ← montse}</text>\n<rect class=\"vz-node\" x=\"215\" y=\"164\" width=\"270\" height=\"34\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"350\" y=\"186\" text-anchor=\"middle\">← progenitor(montse, w)</text>\n<path class=\"vz-ln\" d=\"M300 198 L190 250\"></path><path class=\"vz-ln\" d=\"M400 198 L510 250\"></path>\n<text class=\"vz-sm\" x=\"168\" y=\"226\">2 · {w ← josep}</text><text class=\"vz-sm\" x=\"452\" y=\"226\">3 · {w ← anna}</text>\n<rect class=\"vz-pT\" x=\"130\" y=\"250\" width=\"120\" height=\"34\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"190\" y=\"272\" text-anchor=\"middle\">□ w = josep</text>\n<rect class=\"vz-pT\" x=\"450\" y=\"250\" width=\"120\" height=\"34\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"510\" y=\"272\" text-anchor=\"middle\">□ w = anna</text>\n</svg></div>",
     "<div class=\"vz-scroll\"><svg viewBox=\"0 0 700 300\" role=\"img\" aria-label=\"SLD tree of the question avi(joan, w)\">\n<rect class=\"vz-nodeA\" x=\"230\" y=\"12\" width=\"240\" height=\"34\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"350\" y=\"34\" text-anchor=\"middle\">← avi(joan, w)</text>\n<path class=\"vz-ln\" d=\"M350 46 V88\"></path><text class=\"vz-sm\" x=\"362\" y=\"72\">4 · {x ← joan, y ← w}</text>\n<rect class=\"vz-node\" x=\"150\" y=\"88\" width=\"400\" height=\"34\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"350\" y=\"110\" text-anchor=\"middle\">← progenitor(joan, z), progenitor(z, w)</text>\n<path class=\"vz-ln\" d=\"M350 122 V164\"></path><text class=\"vz-sm\" x=\"362\" y=\"148\">1 · {z ← montse}</text>\n<rect class=\"vz-node\" x=\"215\" y=\"164\" width=\"270\" height=\"34\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"350\" y=\"186\" text-anchor=\"middle\">← progenitor(montse, w)</text>\n<path class=\"vz-ln\" d=\"M300 198 L190 250\"></path><path class=\"vz-ln\" d=\"M400 198 L510 250\"></path>\n<text class=\"vz-sm\" x=\"168\" y=\"226\">2 · {w ← josep}</text><text class=\"vz-sm\" x=\"452\" y=\"226\">3 · {w ← anna}</text>\n<rect class=\"vz-pT\" x=\"130\" y=\"250\" width=\"120\" height=\"34\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"190\" y=\"272\" text-anchor=\"middle\">□ w = josep</text>\n<rect class=\"vz-pT\" x=\"450\" y=\"250\" width=\"120\" height=\"34\" rx=\"8\"></rect><text class=\"vz-t vz-mono\" x=\"510\" y=\"272\" text-anchor=\"middle\">□ w = anna</text>\n</svg></div>"
    ],
    "t": "diagram",
    "mode": "explained"
   },
   {
    "items": [
     [
      "**SLD-derivació**: la seqüència d'objectius; **SLD-refutació**: una derivació que acaba en `□`.",
      "**SLD-derivación**: la secuencia de objetivos; **SLD-refutación**: una derivación que acaba en `□`.",
      "**SLD derivation**: the sequence of goals; **SLD refutation**: a derivation that ends in `□`."
     ],
     [
      "La **resposta** és el que diuen els UMG sobre les variables de la pregunta: `w = josep` i, tornant enrere, `w = anna`.",
      "La **respuesta** es lo que dicen los UMG sobre las variables de la pregunta: `w = josep` y, volviendo atrás, `w = anna`.",
      "The **answer** is what the MGUs say about the variables of the question: `w = josep` and, going back, `w = anna`."
     ],
     [
      "L'**arbre SLD** recull totes les alternatives. PROLOG el recorre en profunditat, d'esquerra a dreta.",
      "El **árbol SLD** recoge todas las alternativas. PROLOG lo recorre en profundidad, de izquierda a derecha.",
      "The **SLD tree** collects all the alternatives. PROLOG traverses it depth-first, from left to right."
     ]
    ],
    "t": "list"
   }
  ],
  "u9-prolog": [
   {
    "head": [
     [
      "Lògica",
      "Lógica",
      "Logic"
     ],
     "PROLOG"
    ],
    "rows": [
     [
      "`progenitor(joan, montse) ←`",
      "`progenitor(joan, montse).`"
     ],
     [
      "`avi(x, y) ← progenitor(x, z), progenitor(z, y)`",
      "`avi(X, Y) :- progenitor(X, Z), progenitor(Z, Y).`"
     ],
     [
      "`← avi(joan, w)`",
      "`?- avi(joan, W).`"
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "Diferències de notació: a PROLOG les **variables comencen amb majúscula** i les constants i els predicats amb minúscula; `:-` és la fletxa i la coma és la conjunció. Les respostes surten una a una (`W = josep ;` `W = anna`).",
     "Diferencias de notación: en PROLOG las **variables empiezan con mayúscula** y las constantes y los predicados con minúscula; `:-` es la flecha y la coma es la conjunción. Las respuestas salen una a una (`W = josep ;` `W = anna`).",
     "Notation differences: in PROLOG **variables start with a capital letter** and constants and predicates with a lower-case one; `:-` is the arrow and the comma is conjunction. The answers come out one at a time (`W = josep ;` `W = anna`)."
    ]
   }
  ],
  "u9-comprova-que-has-entes": [
   {
    "t": "check",
    "ex": {
     "id": "u9-comprova-que-has-entes-q1",
     "type": "mcq",
     "q": [
      "Quina d'aquestes clàusules **no** és de Horn?",
      "¿Cuál de estas cláusulas **no** es de Horn?",
      "Which of these clauses is **not** a Horn clause?"
     ],
     "opts": [
      "`{P, ¬Q, ¬R}`",
      "`{¬P, ¬Q}`",
      "`{P, Q, ¬R}`",
      "`{P}`"
     ],
     "answer": 2,
     "sol": [
      {
       "t": "p",
       "x": [
        "Té dos literals positius, P i Q.",
        "Tiene dos literales positivos, P y Q.",
        "It has two positive literals, P and Q."
       ]
      }
     ]
    }
   },
   {
    "t": "check",
    "ex": {
     "id": "u9-comprova-que-has-entes-q2",
     "type": "mcq",
     "q": [
      "Amb el programa de l'exemple, quantes respostes té `← progenitor(montse, w)`?",
      "Con el programa del ejemplo, ¿cuántas respuestas tiene `← progenitor(montse, w)`?",
      "With the program of the example, how many answers does `← progenitor(montse, w)` have?"
     ],
     "opts": [
      [
       "Cap",
       "Ninguna",
       "None"
      ],
      [
       "Dues",
       "Dos",
       "Two"
      ],
      "Una",
      "Tres"
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "Unifica amb les clàusules 2 i 3: `w = josep` i `w = anna`.",
        "Unifica con las cláusulas 2 y 3: `w = josep` y `w = anna`.",
        "It unifies with clauses 2 and 3: `w = josep` and `w = anna`."
       ]
      }
     ]
    }
   }
  ]
 },
 "examEnd": [
  {
   "id": "u9-x1",
   "type": "mcq",
   "q": [
    "La clàusula `{¬P, ¬Q, R}` en notació de Horn és:",
    "La cláusula `{¬P, ¬Q, R}` en notación de Horn es:",
    "The clause `{¬P, ¬Q, R}` in Horn notation is:"
   ],
   "opts": [
    "`R ← P, Q`",
    "`P ← Q, R`",
    "`← P, Q, R`",
    "`P, Q ← R`"
   ],
   "answer": 0,
   "sol": [
    {
     "t": "p",
     "x": [
      "L'únic literal positiu és el cap; els negatius formen el cos.",
      "El único literal positivo es la cabeza; los negativos forman el cuerpo.",
      "The only positive literal is the head; the negative ones form the body."
     ]
    }
   ]
  },
  {
   "id": "u9-x2",
   "type": "num",
   "q": [
    "Programa: `pare(a, b)`, `pare(b, c)`, `pare(b, d)`, `avi(X, Y) :- pare(X, Z), pare(Z, Y)`. Quantes respostes té `?- avi(a, W)`?",
    "Programa: `pare(a, b)`, `pare(b, c)`, `pare(b, d)`, `avi(X, Y) :- pare(X, Z), pare(Z, Y)`. ¿Cuántas respuestas tiene `?- avi(a, W)`?",
    "Program: `pare(a, b)`, `pare(b, c)`, `pare(b, d)`, `avi(X, Y) :- pare(X, Z), pare(Z, Y)`. How many answers does `?- avi(a, W)` have?"
   ],
   "answer": 2,
   "sol": [
    {
     "t": "p",
     "x": [
      "Z = b; després `pare(b, W)` dona W = c i W = d.",
      "Z = b; después `pare(b, W)` da W = c y W = d.",
      "Z = b; then `pare(b, W)` gives W = c and W = d."
     ]
    }
   ]
  },
  {
   "id": "u9-x3",
   "type": "tf",
   "q": [
    "En PROLOG, `Persona` és una constant.",
    "En PROLOG, `Persona` es una constante.",
    "In PROLOG, `Persona` is a constant."
   ],
   "answer": false,
   "sol": [
    {
     "t": "p",
     "x": [
      "Comença amb majúscula: és una variable.",
      "Empieza con mayúscula: es una variable.",
      "It starts with a capital letter: it is a variable."
     ]
    }
   ]
  }
 ]
};
