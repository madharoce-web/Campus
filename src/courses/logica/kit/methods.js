/**
 * Mètodes d'examen de Lògica i grafs, per tema (vegeu src/courses/_kit/Methods.jsx): trucs, exercicis
 * resolts pas a pas (citats del banc o escrits aquí) i què fer el dia de l'examen.
 */
const L3 = (ca, es, en) => [ca, es, en];
const tricks = (title, items) => ({ t: 'method', title, items });
const day = (items) => [{ t: 'list', items }];
const H = L3('Exercicis tipus examen resolts', 'Ejercicios tipo examen resueltos', 'Exam-style exercises, solved');
const step = (x, why) => (why ? { x, why } : x);

const u0 = {
  solvedH: H,
  tricks: [
    tricks(L3('Vàlid o no vàlid', 'Válido o no válido', 'Valid or not valid'), [
      L3('Abans de res, busca un **contraexemple**: una situació amb les premisses certes i la conclusió falsa. Si el trobes, ja has acabat.', 'Antes de nada, busca un **contraejemplo**: una situación con las premisas ciertas y la conclusión falsa. Si lo encuentras, ya has acabado.', 'First of all, look for a **counterexample**: a situation with the premises true and the conclusion false. If you find one, you are done.'),
      L3('Si no el trobes, cal demostrar-ho: taula de veritat, regles d\'inferència o resolució.', 'Si no lo encuentras, hay que demostrarlo: tabla de verdad, reglas de inferencia o resolución.', 'If you cannot find one, you have to prove it: truth table, inference rules or resolution.'),
      L3('Vàlid no vol dir cert: la validesa només mira la forma.', 'Válido no quiere decir cierto: la validez solo mira la forma.', 'Valid does not mean true: validity only looks at the form.'),
    ]),
    tricks(L3('Les dues fal·làcies clàssiques', 'Las dos falacias clásicas', 'The two classic fallacies'), [
      L3('**Afirmar el conseqüent:** de `A → B` i `B` no se segueix `A`.', '**Afirmar el consecuente:** de `A → B` y `B` no se sigue `A`.', '**Affirming the consequent:** from `A → B` and `B`, `A` does not follow.'),
      L3('**Negar l\'antecedent:** de `A → B` i `¬A` no se segueix `¬B`.', '**Negar el antecedente:** de `A → B` y `¬A` no se sigue `¬B`.', '**Denying the antecedent:** from `A → B` and `¬A`, `¬B` does not follow.'),
    ]),
  ],
  solved: [
    { id: 'lg-m-u0-1', q: L3('«Tots els dilluns hi ha classe. Avui no n\'hi ha. Per tant, avui no és dilluns.» És vàlid?', '«Todos los lunes hay clase. Hoy no hay. Por tanto, hoy no es lunes.» ¿Es válido?', '“Every Monday there is a class. Today there is none. Therefore, today is not Monday.” Is it valid?'),
      steps: [
        step(L3('Formalitza: `D → C`, `¬C` ⇒ `¬D`.', 'Formaliza: `D → C`, `¬C` ⇒ `¬D`.', 'Formalise: `D → C`, `¬C` ⇒ `¬D`.')),
        step(L3('Busca un contraexemple: caldria `D` cert i `C` fals, però aleshores `D → C` és fals.', 'Busca un contraejemplo: haría falta `D` cierto y `C` falso, pero entonces `D → C` es falso.', 'Look for a counterexample: we would need `D` true and `C` false, but then `D → C` is false.'), L3('No n\'hi ha cap.', 'No hay ninguno.', 'There is none.')),
        step(L3('És vàlid: és el *modus tollens*.', 'Es válido: es el *modus tollens*.', 'It is valid: it is *modus tollens*.')),
      ] },
  ],
  day: day([
    L3('**Temps:** 90 minuts per a tres exercicis; reserva 10 minuts per repassar.', '**Tiempo:** 90 minutos para tres ejercicios; reserva 10 minutos para repasar.', '**Time:** 90 minutes for three exercises; keep 10 minutes for checking.'),
    L3('**Formulari:** tens la fulla d\'implicacions i equivalències; cita sempre la regla pel nom.', '**Formulario:** tienes la hoja de implicaciones y equivalencias; cita siempre la regla por su nombre.', '**Formula sheet:** you have the sheet of implications and equivalences; always cite the rule by name.'),
  ]),
};

const u1 = {
  solvedH: H,
  tricks: [
    tricks(L3('Formalitzar sense errors', 'Formalizar sin errores', 'Formalising without mistakes'), [
      L3('Diccionari primer, i les proposicions sempre en **positiu**.', 'Diccionario primero, y las proposiciones siempre en **positivo**.', 'Dictionary first, and propositions always in the **positive**.'),
      L3('«A **només si** B» és `A → B`; «A **si** B» és `B → A`.', '«A **solo si** B» es `A → B`; «A **si** B» es `B → A`.', '“A **only if** B” is `A → B`; “A **if** B” is `B → A`.'),
      L3('«A **llevat que** B» és `A ∨ B`; «**ni** A **ni** B» és `¬A ∧ ¬B`; «però» i «encara que» són `∧`.', '«A **a menos que** B» es `A ∨ B`; «**ni** A **ni** B» es `¬A ∧ ¬B`; «pero» y «aunque» son `∧`.', '“A **unless** B” is `A ∨ B`; “**neither** A **nor** B” is `¬A ∧ ¬B`; “but” and “although” are `∧`.'),
    ]),
    tricks(L3('L\'equivalència que demanen', 'La equivalencia que piden', 'The equivalence they ask for'), [
      L3('La més segura és la **contrarecíproca**: `A → B ≡ ¬B → ¬A`. Escriu-la també en llenguatge natural.', 'La más segura es la **contrapositiva**: `A → B ≡ ¬B → ¬A`. Escríbela también en lenguaje natural.', 'The safest is the **contrapositive**: `A → B ≡ ¬B → ¬A`. Write it in natural language too.'),
      L3('Amb negacions de conjuncions o disjuncions, De Morgan: `¬(A ∧ B) ≡ ¬A ∨ ¬B`.', 'Con negaciones de conjunciones o disyunciones, De Morgan: `¬(A ∧ B) ≡ ¬A ∨ ¬B`.', 'With negated conjunctions or disjunctions, De Morgan: `¬(A ∧ B) ≡ ¬A ∨ ¬B`.'),
    ]),
  ],
  solved: [{ ref: 'lg-a1', day: L3('Dona el diccionari abans de les fórmules: el demanen explícitament.', 'Da el diccionario antes de las fórmulas: lo piden explícitamente.', 'Give the dictionary before the formulas: it is explicitly required.') }, { ref: 'lg-a2' }],
  day: day([
    L3('**Redacció:** diccionari, fórmula de cada apartat i, a l\'equivalència, la regla i la frase en llenguatge natural.', '**Redacción:** diccionario, fórmula de cada apartado y, en la equivalencia, la regla y la frase en lenguaje natural.', '**Write-up:** dictionary, formula for each part and, for the equivalence, the rule and the sentence in natural language.'),
    L3('**Comprovació:** llegeix cada fórmula en veu alta; ha de dir el mateix que la frase.', '**Comprobación:** lee cada fórmula en voz alta; tiene que decir lo mismo que la frase.', '**Check:** read each formula aloud; it must say the same as the sentence.'),
  ]),
};

const u2 = {
  solvedH: H,
  tricks: [
    tricks(L3('Taula de veritat ràpida i neta', 'Tabla de verdad rápida y limpia', 'A quick, clean truth table'), [
      L3('2ⁿ files comptant en binari, i una columna per subfórmula.', '2ⁿ filas contando en binario, y una columna por subfórmula.', '2ⁿ rows counting in binary, and one column per subformula.'),
      L3('`A → B` només és fals a la fila T, F.', '`A → B` solo es falso en la fila T, F.', '`A → B` is only false in the row T, F.'),
      L3('Marca les files amb **totes** les premisses certes i mira-hi la conclusió.', 'Marca las filas con **todas** las premisas ciertas y mira en ellas la conclusión.', 'Mark the rows where **all** the premises are true and look at the conclusion there.'),
    ]),
    tricks(L3('Tipus d\'enunciat', 'Tipo de enunciado', 'Type of statement'), [
      L3('Raonament vàlid ⟺ `(premisses) → (conclusió)` és **tautologia**.', 'Razonamiento válido ⟺ `(premisas) → (conclusión)` es **tautología**.', 'Valid argument ⟺ `(premises) → (conclusion)` is a **tautology**.'),
      L3('Si no ho és, és **satisfactible no vàlida** (contingent): hi ha T i F.', 'Si no lo es, es **satisfacible no válida** (contingente): hay T y F.', 'If it is not, it is **satisfiable but not valid** (contingent): there are T and F.'),
    ]),
  ],
  solved: [{ ref: 'lg-b1' }, { ref: 'lg-b2', day: L3('Escriu el contraexemple amb els valors de cada àtom.', 'Escribe el contraejemplo con los valores de cada átomo.', 'Write the counterexample with the value of each atom.') }],
  day: day([
    L3('**Ordre:** omple primer les columnes dels àtoms i després les subfórmules, d\'esquerra a dreta.', '**Orden:** rellena primero las columnas de los átomos y después las subfórmulas, de izquierda a derecha.', '**Order:** fill in the atom columns first and then the subformulas, from left to right.'),
    L3('**Doble resposta:** (a) vàlid o no, amb la fila del contraexemple; (b) tipus d\'enunciat, justificat.', '**Doble respuesta:** (a) válido o no, con la fila del contraejemplo; (b) tipo de enunciado, justificado.', '**Two answers:** (a) valid or not, with the counterexample row; (b) type of statement, justified.'),
  ]),
};

const u3 = {
  solvedH: H,
  tricks: [
    tricks(L3('Deducció amb regles', 'Deducción con reglas', 'Deduction with rules'), [
      L3('Treballa cap enrere: on apareix la conclusió dins les premisses?', 'Trabaja hacia atrás: ¿dónde aparece la conclusión dentro de las premisas?', 'Work backwards: where does the conclusion appear inside the premises?'),
      L3('Trenca les conjuncions amb simplificació i encadena implicacions amb sil·logisme hipotètic.', 'Rompe las conjunciones con simplificación y encadena implicaciones con silogismo hipotético.', 'Break up conjunctions with simplification and chain implications with the hypothetical syllogism.'),
      L3('Truc: `¬X → X` dona `X` (implicació, doble negació i idempotència).', 'Truco: `¬X → X` da `X` (implicación, doble negación e idempotencia).', 'Trick: `¬X → X` gives `X` (implication, double negation and idempotence).'),
    ]),
    tricks(L3('Resolució en CP0', 'Resolución en CP0', 'Resolution in CP0'), [
      L3('Nega la conclusió, passa-ho tot a cláusules i numera-les.', 'Niega la conclusión, pásalo todo a cláusulas y numéralas.', 'Negate the conclusion, put everything into clauses and number them.'),
      L3('Comença per la conclusió negada i elimina **un sol** parell de literals a cada pas.', 'Empieza por la conclusión negada y elimina **un solo** par de literales en cada paso.', 'Start with the negated conclusion and remove **a single** pair of literals at each step.'),
    ]),
  ],
  solved: [{ ref: 'lg-r1', day: L3('Les dues parts puntuen per separat: fes-les totes dues.', 'Las dos partes puntúan por separado: hazlas las dos.', 'Both parts are marked separately: do both.') }, { ref: 'lg-r2' }],
  day: day([
    L3('**Redacció:** a cada línia, la regla i les línies que fas servir, entre parèntesis.', '**Redacción:** en cada línea, la regla y las líneas que usas, entre paréntesis.', '**Write-up:** on each line, the rule and the lines you use, in parentheses.'),
    L3('**Resolució:** dibuixa l\'arbre; és més fàcil de comprovar que una llista.', '**Resolución:** dibuja el árbol; es más fácil de comprobar que una lista.', '**Resolution:** draw the tree; it is easier to check than a list.'),
  ]),
};

const u4 = {
  solvedH: H,
  tricks: [
    tricks(L3('Termes i fórmules', 'Términos y fórmulas', 'Terms and formulas'), [
      L3('Constants, variables i funcions són **objectes**; predicats i connectives donen **cert o fals**.', 'Constantes, variables y funciones son **objetos**; predicados y conectivas dan **cierto o falso**.', 'Constants, variables and functions are **objects**; predicates and connectives give **true or false**.'),
      L3('Un predicat no pot anar mai dins d\'un altre predicat.', 'Un predicado nunca puede ir dentro de otro predicado.', 'A predicate can never go inside another predicate.'),
    ]),
    tricks(L3('Variables lliures', 'Variables libres', 'Free variables'), [
      L3('Per a cada variable, busca a l\'esquerra el seu quantificador i mira si és dins dels seus parèntesis.', 'Para cada variable, busca a la izquierda su cuantificador y mira si está dentro de sus paréntesis.', 'For each variable, look to the left for its quantifier and check whether it is inside its parentheses.'),
    ]),
  ],
  solved: [
    { id: 'lg-m-u4-1', q: L3('Quines variables són lliures a `∀x (P(x, y) ∨ ∃y Q(y)) ∧ R(x)`?', '¿Qué variables son libres en `∀x (P(x, y) ∨ ∃y Q(y)) ∧ R(x)`?', 'Which variables are free in `∀x (P(x, y) ∨ ∃y Q(y)) ∧ R(x)`?'),
      steps: [
        step(L3('Camp de `∀x`: tot el parèntesi. Les x de dins són lligades.', 'Campo de `∀x`: todo el paréntesis. Las x de dentro son ligadas.', 'Scope of `∀x`: the whole parenthesis. The x inside are bound.')),
        step(L3('La y de `P(x, y)` és fora del camp de `∃y`: és **lliure**. La de `Q(y)` és lligada.', 'La y de `P(x, y)` está fuera del campo de `∃y`: es **libre**. La de `Q(y)` es ligada.', 'The y of `P(x, y)` is outside the scope of `∃y`: it is **free**. The one in `Q(y)` is bound.')),
        step(L3('L\'x de `R(x)` és fora del parèntesi de `∀x`: és **lliure**.', 'La x de `R(x)` está fuera del paréntesis de `∀x`: es **libre**.', 'The x of `R(x)` is outside the parenthesis of `∀x`: it is **free**.')),
      ] },
  ],
  day: day([
    L3('**Comprovació final:** cap fórmula de l\'examen pot tenir variables lliures.', '**Comprobación final:** ninguna fórmula del examen puede tener variables libres.', '**Final check:** no formula in the exam can have free variables.'),
  ]),
};

const u5 = {
  solvedH: H,
  tricks: [
    tricks(L3('La regla d\'or', 'La regla de oro', 'The golden rule'), [
      L3('`∀` va amb `→`; `∃` va amb `∧`.', '`∀` va con `→`; `∃` va con `∧`.', '`∀` goes with `→`; `∃` goes with `∧`.'),
      L3('«Només els A són B»: `∀x (B(x) → A(x))`, la fletxa gira.', '«Solo los A son B»: `∀x (B(x) → A(x))`, la flecha gira.', '“Only A are B”: `∀x (B(x) → A(x))`, the arrow turns round.'),
      L3('«No tots» ≠ «cap»: `∃x (A ∧ ¬B)` contra `∀x (A → ¬B)`.', '«No todos» ≠ «ninguno»: `∃x (A ∧ ¬B)` frente a `∀x (A → ¬B)`.', '“Not all” ≠ “none”: `∃x (A ∧ ¬B)` versus `∀x (A → ¬B)`.'),
    ]),
    tricks(L3('Dos quantificadors', 'Dos cuantificadores', 'Two quantifiers'), [
      L3('Per capes: primer la variable de fora, després la de dins. Si l\'objecte depèn de cada x, el `∃` va **dins** del `∀`.', 'Por capas: primero la variable de fuera, después la de dentro. Si el objeto depende de cada x, el `∃` va **dentro** del `∀`.', 'In layers: first the outer variable, then the inner one. If the object depends on each x, the `∃` goes **inside** the `∀`.'),
      L3('«Un amic en comú» és un sol `∃` per als dos.', '«Un amigo en común» es un solo `∃` para los dos.', '“A friend in common” is a single `∃` for both.'),
    ]),
  ],
  solved: [{ ref: 'lg-e1', day: L3('Defineix les constants: el predicats solen venir donats, però les constants no.', 'Define las constantes: los predicados suelen venir dados, pero las constantes no.', 'Define the constants: the predicates are usually given, but the constants are not.') }, { ref: 'lg-e2' }],
  day: day([
    L3('**Pes:** és el 40% del CP2; dona-hi el temps que cal (uns 35 minuts).', '**Peso:** es el 40% del CP2; dedícale el tiempo necesario (unos 35 minutos).', '**Weight:** it is 40% of Test 2; give it the time it needs (about 35 minutes).'),
    L3('**Comprovació:** avalua cada fórmula en un món petit de dues o tres persones.', '**Comprobación:** evalúa cada fórmula en un mundo pequeño de dos o tres personas.', '**Check:** evaluate each formula in a small world of two or three people.'),
  ]),
};

const u6 = {
  solvedH: H,
  tricks: [
    tricks(L3('Avaluar en un món', 'Evaluar en un mundo', 'Evaluating in a world'), [
      L3('`∀` és una «i» de totes les files; `∃`, una «o».', '`∀` es una «y» de todas las filas; `∃`, una «o».', '`∀` is an “and” over all the rows; `∃`, an “or”.'),
      L3('Per refutar n\'hi ha prou amb un món; per demostrar cal resolució.', 'Para refutar basta con un mundo; para demostrar hace falta resolución.', 'To refute, one world is enough; to prove, you need resolution.'),
    ]),
    tricks(L3('Negacions i quantificadors', 'Negaciones y cuantificadores', 'Negations and quantifiers'), [
      L3('`¬∀x A ≡ ∃x ¬A` i `¬∃x A ≡ ∀x ¬A`: la negació canvia el quantificador.', '`¬∀x A ≡ ∃x ¬A` y `¬∃x A ≡ ∀x ¬A`: la negación cambia el cuantificador.', '`¬∀x A ≡ ∃x ¬A` and `¬∃x A ≡ ∀x ¬A`: negation changes the quantifier.'),
      L3('`∀` es reparteix sobre `∧` i `∃` sobre `∨`; al revés, no.', '`∀` se reparte sobre `∧` y `∃` sobre `∨`; al revés, no.', '`∀` distributes over `∧` and `∃` over `∨`; not the other way round.'),
    ]),
  ],
  solved: [
    { id: 'lg-m-u6-1', q: L3('Nega `∀x (E(x) → T(x))` i llegeix-la.', 'Niega `∀x (E(x) → T(x))` y léela.', 'Negate `∀x (E(x) → T(x))` and read it.'),
      steps: [
        step('`¬∀x (E(x) → T(x)) ≡ ∃x ¬(E(x) → T(x))`', L3('La negació travessa el `∀`.', 'La negación atraviesa el `∀`.', 'The negation crosses the `∀`.')),
        step('`≡ ∃x ¬(¬E(x) ∨ T(x)) ≡ ∃x (E(x) ∧ ¬T(x))`', L3('Implicació i De Morgan.', 'Implicación y De Morgan.', 'Implication and De Morgan.')),
        step(L3('«Algun estudiant no treballa».', '«Algún estudiante no trabaja».', '“Some student does not work”.')),
      ] },
  ],
  day: day([
    L3('**Contraexemple:** dona el domini i el significat de cada predicat; sense això no puntua.', '**Contraejemplo:** da el dominio y el significado de cada predicado; sin eso no puntúa.', '**Counterexample:** give the domain and the meaning of each predicate; without that it earns nothing.'),
  ]),
};

const u7 = {
  solvedH: H,
  tricks: [
    tricks(L3('Els vuit passos, sense saltar-ne cap', 'Los ocho pasos, sin saltarse ninguno', 'The eight steps, without skipping any'), [
      L3('Primer fletxes fora i negacions cap a dins; **després** Skolem.', 'Primero flechas fuera y negaciones hacia dentro; **después** Skolem.', 'First arrows out and negations inwards; **then** Skolem.'),
      L3('`∃` sol: constant nova; `∃` dins de `∀x`: funció nova `f(x)`.', '`∃` solo: constante nueva; `∃` dentro de `∀x`: función nueva `f(x)`.', '`∃` alone: new constant; `∃` inside `∀x`: new function `f(x)`.'),
      L3('Un `∃` a la condició d\'una implicació es converteix en `∀`: no s\'skolemitza.', 'Un `∃` en la condición de una implicación se convierte en `∀`: no se skolemiza.', 'An `∃` in the condition of an implication becomes `∀`: it is not Skolemised.'),
    ]),
    tricks(L3('Símbols de Skolem', 'Símbolos de Skolem', 'Skolem symbols'), [
      L3('Cada símbol ha de ser **nou** en tot el problema: `k`, `k1`, `f`, `g`…', 'Cada símbolo tiene que ser **nuevo** en todo el problema: `k`, `k1`, `f`, `g`…', 'Each symbol must be **new** across the whole problem: `k`, `k1`, `f`, `g`…'),
    ]),
  ],
  solved: [{ ref: 'lg-e5' }, { ref: 'lg-e6', day: L3('Escriu el número de cada pas (1, 2, 4, 5, 6, 8): ajuda a qui corregeix.', 'Escribe el número de cada paso (1, 2, 4, 5, 6, 8): ayuda a quien corrige.', 'Write the number of each step (1, 2, 4, 5, 6, 8): it helps whoever marks it.') }],
  day: day([
    L3('**Redacció:** una línia per pas, amb la fórmula resultant; al final, el conjunt de clàusules entre claus.', '**Redacción:** una línea por paso, con la fórmula resultante; al final, el conjunto de cláusulas entre llaves.', '**Write-up:** one line per step, with the resulting formula; at the end, the set of clauses in braces.'),
  ]),
};

const u8 = {
  solvedH: H,
  tricks: [
    tricks(L3('Unificació', 'Unificación', 'Unification'), [
      L3('Compara d\'esquerra a dreta fins a la primera diferència; només se substitueixen **variables**.', 'Compara de izquierda a derecha hasta la primera diferencia; solo se sustituyen **variables**.', 'Compare left to right up to the first difference; only **variables** are substituted.'),
      L3('Comprovació d\'ocurrència: `x` i `f(x)` no unifiquen.', 'Comprobación de ocurrencia: `x` y `f(x)` no unifican.', 'Occurs check: `x` and `f(x)` do not unify.'),
    ]),
    tricks(L3('Resolució en CP1', 'Resolución en CP1', 'Resolution in CP1'), [
      L3('Renombra les variables perquè cap parell de clàusules les comparteixi.', 'Renombra las variables para que ningún par de cláusulas las comparta.', 'Rename the variables so that no pair of clauses shares them.'),
      L3('A cada pas: les dues clàusules, el **UMG** i la resolvent amb el UMG aplicat a tot.', 'En cada paso: las dos cláusulas, el **UMG** y la resolvente con el UMG aplicado a todo.', 'At each step: the two clauses, the **MGU** and the resolvent with the MGU applied to everything.'),
      L3('Prioritza les clàusules d\'un sol literal.', 'Prioriza las cláusulas de un solo literal.', 'Give priority to single-literal clauses.'),
    ]),
  ],
  solved: [{ ref: 'lg-f1', day: L3('Sense UMG anotats, el pas no puntua encara que sigui correcte.', 'Sin UMG anotados, el paso no puntúa aunque sea correcto.', 'Without the MGUs written down, the step earns nothing even if it is correct.') }, { ref: 'lg-f2' }],
  day: day([
    L3('**Temps:** forma clausal i refutació són uns 35 minuts; no t\'encallis en un pas: prova una altra parella.', '**Tiempo:** forma clausal y refutación son unos 35 minutos; no te atasques en un paso: prueba otra pareja.', '**Time:** clausal form and refutation take about 35 minutes; do not get stuck on one step: try another pair.'),
  ]),
};

const u9 = {
  solvedH: H,
  tricks: [
    tricks(L3('Clàusules de Horn i PROLOG', 'Cláusulas de Horn y PROLOG', 'Horn clauses and PROLOG'), [
      L3('Com a màxim un literal positiu: fet `P ←`, regla `P ← Q₁, …, Qₙ`, objectiu `← Q₁, …, Qₙ`.', 'Como máximo un literal positivo: hecho `P ←`, regla `P ← Q₁, …, Qₙ`, objetivo `← Q₁, …, Qₙ`.', 'At most one positive literal: fact `P ←`, rule `P ← Q₁, …, Qₙ`, goal `← Q₁, …, Qₙ`.'),
      L3('SLD: primer literal de l\'objectiu, clàusules en ordre, en profunditat i amb retrocés.', 'SLD: primer literal del objetivo, cláusulas en orden, en profundidad y con retroceso.', 'SLD: first literal of the goal, clauses in order, depth-first and with backtracking.'),
    ]),
  ],
  solved: [
    { id: 'lg-m-u9-1', q: L3('Programa: `progenitor(joan, montse)`, `progenitor(montse, josep)`, `progenitor(montse, anna)`, `avi(x, y) ← progenitor(x, z), progenitor(z, y)`. Respon `← avi(joan, w)`.', 'Programa: `progenitor(joan, montse)`, `progenitor(montse, josep)`, `progenitor(montse, anna)`, `avi(x, y) ← progenitor(x, z), progenitor(z, y)`. Responde `← avi(joan, w)`.', 'Program: `progenitor(joan, montse)`, `progenitor(montse, josep)`, `progenitor(montse, anna)`, `avi(x, y) ← progenitor(x, z), progenitor(z, y)`. Answer `← avi(joan, w)`.'),
      steps: [
        step('`← progenitor(joan, z), progenitor(z, w)`', L3('Regla 4 amb `{x ← joan, y ← w}`.', 'Regla 4 con `{x ← joan, y ← w}`.', 'Rule 4 with `{x ← joan, y ← w}`.')),
        step('`← progenitor(montse, w)`', L3('Fet 1 amb `{z ← montse}`.', 'Hecho 1 con `{z ← montse}`.', 'Fact 1 with `{z ← montse}`.')),
        step(L3('`□` amb `{w ← josep}` (fet 2) i, tornant enrere, `{w ← anna}` (fet 3).', '`□` con `{w ← josep}` (hecho 2) y, volviendo atrás, `{w ← anna}` (hecho 3).', '`□` with `{w ← josep}` (fact 2) and, backtracking, `{w ← anna}` (fact 3).')),
      ] },
  ],
  day: day([
    L3('**Arbre SLD:** a cada branca, el UMG; a cada fulla, □ (resposta) o fracàs.', '**Árbol SLD:** en cada rama, el UMG; en cada hoja, □ (respuesta) o fracaso.', '**SLD tree:** on each branch, the MGU; on each leaf, □ (answer) or failure.'),
  ]),
};

// ---------- grafs (temes gr1–gr9 i repàs)
const gr1 = {
  solvedH: H,
  tricks: [
    tricks(L3('Comptar abans de dibuixar', 'Contar antes de dibujar', 'Count before drawing'), [
      L3('Suma de valències = 2·(costats). Si la suma surt senar, el graf no existeix.', 'Suma de valencias = 2·(lados). Si la suma sale impar, el grafo no existe.', 'Sum of degrees = 2·(edges). An odd sum means no such graph.'),
      L3('Un bucle suma 2 a la valència; dos costats paral·lels sumen 1 cadascun.', 'Un bucle suma 2 a la valencia; dos lados paralelos suman 1 cada uno.', 'A loop adds 2 to the degree; each parallel edge adds 1.'),
      L3('`|E(Kₙ)| = n(n−1)/2`, `|E(K_{m,n})| = m·n`, `|E(Cₙ)| = n`, `|E(Wₙ)| = 2(n−1)`, r-regular: `r·n/2`.', '`|E(Kₙ)| = n(n−1)/2`, `|E(K_{m,n})| = m·n`, `|E(Cₙ)| = n`, `|E(Wₙ)| = 2(n−1)`, r-regular: `r·n/2`.', '`|E(Kₙ)| = n(n−1)/2`, `|E(K_{m,n})| = m·n`, `|E(Cₙ)| = n`, `|E(Wₙ)| = 2(n−1)`, r-regular: `r·n/2`.'),
    ]),
    tricks(L3('Existeix el graf?', '¿Existe el grafo?', 'Does the graph exist?'), [
      L3('Suma parella i cap valència més gran que n − 1 (si és simple).', 'Suma par y ninguna valencia mayor que n − 1 (si es simple).', 'Even sum and no degree above n − 1 (if simple).'),
      L3('Reducció: treu la valència més gran d i resta 1 a les d següents; repeteix fins a zeros (sí) o un negatiu (no).', 'Reducción: quita la valencia mayor d y resta 1 a las d siguientes; repite hasta ceros (sí) o un negativo (no).', 'Reduction: remove the largest degree d and subtract 1 from the next d; repeat until zeros (yes) or a negative (no).'),
    ]),
  ],
  solved: [{ ref: 'gr1-especials', seed: 21 }, { ref: 'gr1-grafica', seed: 13 }],
  day: day([
    L3('**Cita el lema:** «per les encaixades de mans, 2|E| = …». Una fórmula sense nom no es puntua igual.', '**Cita el lema:** «por el apretón de manos, 2|E| = …». Una fórmula sin nombre no se puntúa igual.', '**Name the lemma:** “by the handshake lemma, 2|E| = …”. An unnamed formula scores less.'),
    L3('**Dibuixa:** un esbós del graf evita errors de comptatge.', '**Dibuja:** un esbozo del grafo evita errores de conteo.', '**Sketch it:** a quick drawing avoids counting slips.'),
  ]),
};

const gr2 = {
  solvedH: H,
  tricks: [
    tricks(L3('Llegir matrius', 'Leer matrices', 'Reading matrices'), [
      L3('No dirigit ⇒ simètrica. Fila = veïns; suma de fila = valència (un bucle hi suma 1 més).', 'No dirigido ⇒ simétrica. Fila = vecinos; suma de fila = valencia (un bucle suma 1 más).', 'Undirected ⇒ symmetric. Row = neighbours; row sum = degree (a loop adds 1 more).'),
      L3('Suma de tota la matriu = 2|E| (sense bucles).', 'Suma de toda la matriz = 2|E| (sin bucles).', 'Sum of the whole matrix = 2|E| (no loops).'),
      L3('`(A^k)ᵢⱼ` = successions de longitud k de vᵢ a vⱼ. Fes només la fila que et demanen: fila de A per columnes de A.', '`(A^k)ᵢⱼ` = sucesiones de longitud k de vᵢ a vⱼ. Haz solo la fila que te piden: fila de A por columnas de A.', '`(A^k)ᵢⱼ` = walks of length k from vᵢ to vⱼ. Compute only the row you need: row of A times columns of A.'),
    ]),
  ],
  solved: [{ ref: 'gr2-a2', seed: 21 }, { ref: 'gr2-llegirmatriu', seed: 7 }],
  day: day([
    L3('**Ordre dels vèrtexs:** escriu-lo a la capçalera de files i columnes.', '**Orden de los vértices:** escríbelo en la cabecera de filas y columnas.', '**Vertex order:** write it on the row and column headers.'),
  ]),
};

const gr3 = {
  solvedH: H,
  tricks: [
    tricks(L3('Classificar recorreguts', 'Clasificar recorridos', 'Classifying walks'), [
      L3('Primer: tots els parells consecutius són costats? Després: costats repetits (simple)? Vèrtexs repetits (elemental)? Tanca (circuit)?', 'Primero: ¿todos los pares consecutivos son lados? Después: ¿lados repetidos (simple)? ¿Vértices repetidos (elemental)? ¿Cierra (circuito)?', 'First: is every consecutive pair an edge? Then: repeated edges (trail)? Repeated vertices (path)? Does it close (circuit)?'),
    ]),
    tricks(L3('Connexió', 'Conexión', 'Connectivity'), [
      L3('Simple i connex: `n − 1 ≤ m ≤ n(n−1)/2`. Amb k components: `m ≤ (n−k)(n−k+1)/2`.', 'Simple y conexo: `n − 1 ≤ m ≤ n(n−1)/2`. Con k componentes: `m ≤ (n−k)(n−k+1)/2`.', 'Simple and connected: `n − 1 ≤ m ≤ n(n−1)/2`. With k components: `m ≤ (n−k)(n−k+1)/2`.'),
      L3('Components fortes: marca + (on arribo) i − (des d\'on m\'arriben); les dues marques = component.', 'Componentes fuertes: marca + (adonde llego) y − (desde dónde me llegan); las dos marcas = componente.', 'Strong components: mark + (where I can go) and − (who can reach me); both marks = component.'),
    ]),
  ],
  solved: [{ ref: 'gr3-cotes', seed: 17 }, { ref: 'gr3-fort', seed: 2 }],
  day: day([
    L3('**Components fortes:** escriu les marques de cada vèrtex, no només el resultat.', '**Componentes fuertes:** escribe las marcas de cada vértice, no solo el resultado.', '**Strong components:** write each vertex\'s marks, not just the result.'),
  ]),
};

const gr4 = {
  solvedH: H,
  tricks: [
    tricks(L3('Euler en 10 segons', 'Euler en 10 segundos', 'Euler in 10 seconds'), [
      L3('Connex? Compta els vèrtexs de valència senar: 0 → circuit, 2 → camí (entre els dos senars), 4 o més → res.', '¿Conexo? Cuenta los vértices de valencia impar: 0 → circuito, 2 → camino (entre los dos impares), 4 o más → nada.', 'Connected? Count odd vertices: 0 → circuit, 2 → path (between the two odd ones), 4+ → none.'),
      L3('Per trobar-lo: circuits parcials enganxats, o Fleury (no travessis un istme si pots evitar-ho).', 'Para encontrarlo: circuitos parciales enganchados, o Fleury (no cruces un istmo si puedes evitarlo).', 'To find it: splice partial circuits, or Fleury (avoid crossing a bridge if you can).'),
    ]),
    tricks(L3('Hamilton', 'Hamilton', 'Hamilton'), [
      L3('Per dir que sí: dona el circuit, o Dirac/Ore. Per dir que no: vèrtex de valència 1, vèrtex de tall o bipartit amb parts desiguals.', 'Para decir que sí: da el circuito, o Dirac/Ore. Para decir que no: vértice de valencia 1, vértice de corte o bipartito con partes desiguales.', 'To say yes: give the circuit, or Dirac/Ore. To say no: a degree-1 vertex, a cut vertex or a bipartite graph with unequal sides.'),
      L3('Els vèrtexs de valència 2 obliguen: els seus dos costats hi són segur.', 'Los vértices de valencia 2 obligan: sus dos lados están seguro.', 'Degree-2 vertices force both their edges.'),
    ]),
  ],
  solved: [{ ref: 'gr4-troba', seed: 15 }, { ref: 'gr4-hamilton', seed: 4 }],
  day: day([
    L3('**Justifica amb el teorema:** «és eulerià perquè és connex i totes les valències són parelles».', '**Justifica con el teorema:** «es euleriano porque es conexo y todas las valencias son pares».', '**Justify with the theorem:** “it is Eulerian because it is connected and every degree is even”.'),
    L3('**Comprova el resultat:** el circuit d\'Euler ha de tenir |E| + 1 vèrtexs escrits; el de Hamilton, n + 1.', '**Comprueba el resultado:** el circuito de Euler debe tener |E| + 1 vértices escritos; el de Hamilton, n + 1.', '**Check the result:** an Euler circuit lists |E| + 1 vertices; a Hamilton circuit, n + 1.'),
  ]),
};

const gr5 = {
  solvedH: H,
  tricks: [
    tricks(L3('La taula de Dijkstra', 'La tabla de Dijkstra', 'The Dijkstra table'), [
      L3('Una columna per vèrtex, una fila per pas; a cada casella `(L, a)`; marca amb * el que es fixa.', 'Una columna por vértice, una fila por paso; en cada casilla `(L, a)`; marca con * el que se fija.', 'One column per vertex, one row per step; each cell `(L, a)`; mark with * the vertex fixed.'),
      L3('Es fixa el mínim de **totes** les etiquetes provisionals, no només dels veïns de l\'últim.', 'Se fija el mínimo de **todas** las etiquetas provisionales, no solo de los vecinos del último.', 'Fix the minimum of **all** temporary labels, not just the last vertex\'s neighbours.'),
      L3('Si una etiqueta millora, canvia també l\'anterior `a(v)`. El camí es llegeix enrere.', 'Si una etiqueta mejora, cambia también el anterior `a(v)`. El camino se lee hacia atrás.', 'When a label improves, update `a(v)` too. Read the path backwards.'),
    ]),
  ],
  solved: [{ ref: 'gr5-dijkstra', seed: 7 }, { ref: 'gr5-salts', seed: 3 }],
  day: day([
    L3('**Comprova la longitud:** suma els pesos del camí que has escrit; ha de coincidir amb L(destí).', '**Comprueba la longitud:** suma los pesos del camino que has escrito; debe coincidir con L(destino).', '**Check the length:** add the weights of your path; it must equal L(target).'),
  ]),
};

const gr6 = {
  solvedH: H,
  tricks: [
    tricks(L3('Isomorfs o no', 'Isomorfos o no', 'Isomorphic or not'), [
      L3('Compara, en aquest ordre: vèrtexs, costats, valències, triangles (cicles curts), bipartit.', 'Compara, en este orden: vértices, lados, valencias, triángulos (ciclos cortos), bipartito.', 'Compare, in this order: vertices, edges, degrees, triangles (short cycles), bipartiteness.'),
      L3('Si tot coincideix, construeix la bijecció començant pels vèrtexs de valència única i comprova **tots** els costats.', 'Si todo coincide, construye la biyección empezando por los vértices de valencia única y comprueba **todos** los lados.', 'If all match, build the bijection starting from vertices with a unique degree and check **every** edge.'),
    ]),
    tricks(L3('Planars', 'Planares', 'Planar graphs'), [
      L3('`c = m − n + 2` (connex). Simple: `m ≤ 3n − 6`; sense triangles: `m ≤ 2n − 4`. Si es trenca, no és planar.', '`c = m − n + 2` (conexo). Simple: `m ≤ 3n − 6`; sin triángulos: `m ≤ 2n − 4`. Si se rompe, no es planar.', '`f = m − n + 2` (connected). Simple: `m ≤ 3n − 6`; no triangles: `m ≤ 2n − 4`. If it fails, not planar.'),
      L3('Per dir que sí, dibuixa\'l sense encreuaments. Per dir que no, una cota o un K₅ / K₃,₃ amagat (Kuratowski).', 'Para decir que sí, dibújalo sin cruces. Para decir que no, una cota o un K₅ / K₃,₃ escondido (Kuratowski).', 'To say yes, draw it without crossings. To say no, a bound or a hidden K₅ / K₃,₃ (Kuratowski).'),
    ]),
  ],
  solved: [
    { id: 'lg-m-g1-1', q: L3('Un graf planar, simple i connex té 6 vèrtexs, tots de valència 4. Quantes cares té?', 'Un grafo planar, simple y conexo tiene 6 vértices, todos de valencia 4. ¿Cuántas caras tiene?', 'A simple connected planar graph has 6 vertices, all of degree 4. How many faces does it have?'),
      steps: [
        step('`2m = 6 · 4 = 24`, `m = 12`', L3('Lema de les encaixades.', 'Lema de los apretones de manos.', 'Handshaking lemma.')),
        step('`m ≤ 3n − 6 = 12` ✓', L3('Compatible amb ser planar.', 'Compatible con ser planar.', 'Compatible with being planar.')),
        step('`c = m − n + 2 = 12 − 6 + 2 = 8`', L3('Fórmula d\'Euler (és l\'octàedre).', 'Fórmula de Euler (es el octaedro).', 'Euler\'s formula (it is the octahedron).')),
      ] },
    { ref: 'gr6-iso', seed: 14 },
  ],
  day: day([
    L3('**No isomorfs:** n\'hi ha prou amb **un** invariant diferent, ben explicat.', '**No isomorfos:** basta con **un** invariante distinto, bien explicado.', '**Not isomorphic:** **one** differing invariant, well explained, is enough.'),
  ]),
};

const gr7 = {
  solvedH: H,
  tricks: [
    tricks(L3('Nombre cromàtic', 'Número cromático', 'Chromatic number'), [
      L3('Fita inferior: un triangle ⇒ ≥ 3; un K₄ ⇒ ≥ 4; un cicle senar ⇒ ≥ 3. Fita superior: un acoloriment concret.', 'Cota inferior: un triángulo ⇒ ≥ 3; un K₄ ⇒ ≥ 4; un ciclo impar ⇒ ≥ 3. Cota superior: una coloración concreta.', 'Lower bound: a triangle ⇒ ≥ 3; a K₄ ⇒ ≥ 4; an odd cycle ⇒ ≥ 3. Upper bound: an explicit colouring.'),
      L3('`γ = 2` ⟺ bipartit; `γ(Kₙ) = n`; sempre `γ ≤ δ_max + 1`; planar ⇒ `γ ≤ 4`.', '`γ = 2` ⟺ bipartito; `γ(Kₙ) = n`; siempre `γ ≤ δ_max + 1`; planar ⇒ `γ ≤ 4`.', '`γ = 2` ⟺ bipartite; `γ(Kₙ) = n`; always `γ ≤ δ_max + 1`; planar ⇒ `γ ≤ 4`.'),
    ]),
    tricks(L3('Welsh–Powell', 'Welsh–Powell', 'Welsh–Powell'), [
      L3('Escriu l\'ordre per valència i, per a cada color, la llista de vèrtexs que hi entren.', 'Escribe el orden por valencia y, para cada color, la lista de vértices que entran.', 'Write the order by degree and, for each colour, the list of vertices it takes.'),
      L3('Si dona k colors, busca una fita inferior igual a k per dir que és el mínim.', 'Si da k colores, busca una cota inferior igual a k para decir que es el mínimo.', 'If it gives k colours, find a matching lower bound to claim it is minimal.'),
    ]),
  ],
  solved: [{ ref: 'gr7-acoloreix', seed: 5 }, { ref: 'gr7-cromatic', seed: 3 }],
  day: day([
    L3('**Dos arguments:** «se\'n necessiten almenys k perquè…» i «amb k n\'hi ha prou: aquí tens l\'acoloriment».', '**Dos argumentos:** «se necesitan al menos k porque…» y «con k basta: aquí tienes la coloración».', '**Two arguments:** “at least k are needed because…” and “k suffice: here is the colouring”.'),
  ]),
};

const gr8 = {
  solvedH: H,
  tricks: [
    tricks(L3('Arbres', 'Árboles', 'Trees'), [
      L3('n vèrtexs ⟹ n − 1 costats; m-ari regular: `n = m·i + 1`, `t = (m − 1)·i + 1`.', 'n vértices ⟹ n − 1 lados; m-ario regular: `n = m·i + 1`, `t = (m − 1)·i + 1`.', 'n vertices ⟹ n − 1 edges; full m-ary: `n = m·i + 1`, `t = (m − 1)·i + 1`.'),
      L3('Prim fa créixer un sol arbre; Kruskal tria el costat més barat de tot el graf que no faci circuit.', 'Prim hace crecer un solo árbol; Kruskal elige el lado más barato de todo el grafo que no forme circuito.', 'Prim grows a single tree; Kruskal picks the cheapest edge in the whole graph that closes no circuit.'),
      L3('DFS = pila; BFS = cua; en empat, ordre alfabètic.', 'DFS = pila; BFS = cola; en empate, orden alfabético.', 'DFS = stack; BFS = queue; on a tie, alphabetical order.'),
    ]),
  ],
  solved: [
    { id: 'lg-m-g2-1', q: L3('Un torneig d\'eliminació directa té 64 jugadors. Quants partits es juguen?', 'Un torneo de eliminación directa tiene 64 jugadores. ¿Cuántos partidos se juegan?', 'A knockout tournament has 64 players. How many matches are played?'),
      steps: [
        step(L3('Arbre binari regular: les fulles són els jugadors, `t = 64`.', 'Árbol binario regular: las hojas son los jugadores, `t = 64`.', 'Full binary tree: the leaves are the players, `t = 64`.')),
        step('`t = i + 1 ⟹ i = 63`', L3('Cada vèrtex intern és un partit.', 'Cada vértice interno es un partido.', 'Each internal vertex is a match.')),
      ] },
    { ref: 'gr8-minim', seed: 11 },
    { ref: 'gr8-bfs', seed: 13 },
  ],
  day: day([
    L3('**Prim i Kruskal:** llista els costats en l\'ordre en què entren (i els rebutjats) i el pes total.', '**Prim y Kruskal:** lista los lados en el orden en que entran (y los rechazados) y el peso total.', '**Prim and Kruskal:** list the edges in the order they enter (and the rejected ones) and the total weight.'),
    L3('**Recorreguts:** escriu l\'estat de la pila o de la cua a cada pas.', '**Recorridos:** escribe el estado de la pila o de la cola en cada paso.', '**Traversals:** write the stack or queue at each step.'),
  ]),
};

const gr9 = {
  solvedH: H,
  tricks: [
    tricks(L3('CPM en quatre passos', 'CPM en cuatro pasos', 'CPM in four steps'), [
      L3('Nivells: elimina les tasques ja col·locades i dona el nivell següent a les que no tenen anteriors.', 'Niveles: elimina las tareas ya colocadas y da el nivel siguiente a las que no tienen anteriores.', 'Levels: remove the tasks already placed and give the next level to those with no predecessors.'),
      L3('Pes de l\'arc X → Y = durada de **X**. Afegeix α i ω.', 'Peso del arco X → Y = duración de **X**. Añade α y ω.', 'Weight of arc X → Y = duration of **X**. Add α and ω.'),
      L3('Early cap endavant amb **màxims**; last cap enrere amb **mínims**.', 'Early hacia delante con **máximos**; last hacia atrás con **mínimos**.', 'Early forwards with **maxima**; last backwards with **minima**.'),
      L3('Marge total = last − early; les tasques amb marge 0 formen el camí crític.', 'Margen total = last − early; las tareas con margen 0 forman el camino crítico.', 'Total slack = last − early; the tasks with zero slack form the critical path.'),
    ]),
  ],
  solved: [
    { id: 'lg-m-g3-1', q: L3('A (3, inicial), B (2, després d\'A), C (4, després d\'A), D (1, després de B i C). Durada, marges i camí crític.', 'A (3, inicial), B (2, después de A), C (4, después de A), D (1, después de B y C). Duración, márgenes y camino crítico.', 'A (3, initial), B (2, after A), C (4, after A), D (1, after B and C). Duration, slacks and critical path.'),
      steps: [
        step('Early: A = 0, B = 3, C = 3, D = max(5, 7) = 7, fi = 8', L3('Camí més llarg des de l\'inici.', 'Camino más largo desde el inicio.', 'Longest path from the start.')),
        step('Last: fi = 8, D = 7, B = 5, C = 3, A = min(5 − 3, 3 − 3) = 0', L3('Camí més curt fins al final, cap enrere.', 'Camino más corto hasta el final, hacia atrás.', 'Shortest path to the end, backwards.')),
        step(L3('Marges: B = 2, la resta 0. Camí crític A → C → D, durada 8.', 'Márgenes: B = 2, el resto 0. Camino crítico A → C → D, duración 8.', 'Slacks: B = 2, the rest 0. Critical path A → C → D, duration 8.')),
      ] },
    { ref: 'gr9-cpm', seed: 9 },
  ],
  day: day([
    L3('**Graf:** cada vèrtex amb [early | last]; afegeix tasca inicial i final de durada 0.', '**Grafo:** cada vértice con [early | last]; añade tarea inicial y final de duración 0.', '**Graph:** each vertex with [early | last]; add an initial and a final task of duration 0.'),
    L3('**Comprova:** la durada del projecte ha de ser la suma de les durades del camí crític.', '**Comprueba:** la duración del proyecto debe ser la suma de las duraciones del camino crítico.', '**Check:** the project duration must equal the sum of the critical path\'s durations.'),
  ]),
};

const grr = {
  solvedH: H,
  tricks: [
    tricks(L3('Abans del control de grafs', 'Antes del control de grafos', 'Before the graph test'), [
      L3('Repassa les fórmules de comptar (encaixades, Kₙ, arbres, Euler planar) amb el formulari.', 'Repasa las fórmulas de contar (apretón de manos, Kₙ, árboles, Euler planar) con el formulario.', 'Review the counting formulas (handshake, Kₙ, trees, planar Euler) with the formula sheet.'),
      L3('Practica un algorisme de cada: Dijkstra, Welsh–Powell, Kruskal o Prim, BFS/DFS i CPM.', 'Practica un algoritmo de cada: Dijkstra, Welsh–Powell, Kruskal o Prim, BFS/DFS y CPM.', 'Practise one of each algorithm: Dijkstra, Welsh–Powell, Kruskal or Prim, BFS/DFS and CPM.'),
    ]),
  ],
  solved: [{ ref: 'gr6-cares', seed: 4 }, { ref: 'gr9-nivells', seed: 6 }],
  day: day([
    L3('**Temps:** els algorismes amb taula (Dijkstra, CPM) són els que més punts donen i els que més temps demanen: comença-hi amb calma.', '**Tiempo:** los algoritmos con tabla (Dijkstra, CPM) son los que más puntos dan y los que más tiempo piden: empieza por ellos con calma.', '**Time:** the table algorithms (Dijkstra, CPM) carry the most points and take the most time: start them calmly.'),
  ]),
};

export default { u0, u1, u2, u3, u4, u5, u6, u7, u8, u9, gr1, gr2, gr3, gr4, gr5, gr6, gr7, gr8, gr9, grr };
