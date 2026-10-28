/**
 * Mètodes d'examen de Programació, per tema (vegeu src/courses/_kit/Methods.jsx): trucs, exercicis
 * resolts (citats del banc) i què fer el dia de l'examen. El CP és com el CodeRunner: proves exactes.
 */
const L3 = (ca, es, en) => [ca, es, en];
const tricks = (title, items) => ({ t: 'method', title, items });
const day = (items) => [{ t: 'list', items }];
const H = L3('Exercicis tipus examen resolts', 'Ejercicios tipo examen resueltos', 'Exam-style exercises, solved');

const FORMAT = L3('**Format:** copia els textos de sortida de l\'enunciat lletra per lletra (espais, majúscules, salts de línia). CodeRunner compara caràcter a caràcter.',
  '**Formato:** copia los textos de salida del enunciado letra por letra (espacios, mayúsculas, saltos de línea). CodeRunner compara carácter a carácter.',
  '**Format:** copy the output texts from the statement letter by letter (spaces, capitals, line breaks). CodeRunner compares character by character.');
const EDGE = L3('**Casos límit:** abans de lliurar, prova 0, un sol element, la seqüència buida i els valors frontera.',
  '**Casos límite:** antes de entregar, prueba 0, un solo elemento, la secuencia vacía y los valores frontera.',
  '**Edge cases:** before handing in, try 0, a single element, the empty sequence and the boundary values.');

const t1 = {
  solvedH: H,
  tricks: [
    tricks(L3('Les preguntes de teoria', 'Las preguntas de teoría', 'Theory questions'), [
      L3('Fases: **anàlisi** (què) → **disseny** (com) → **codificació** → **proves** → **manteniment**.', 'Fases: **análisis** (qué) → **diseño** (cómo) → **codificación** → **pruebas** → **mantenimiento**.', 'Phases: **analysis** (what) → **design** (how) → **coding** → **testing** → **maintenance**.'),
      L3('Compilador: tot abans, una vegada, i amb un error no s\'executa res. Intèrpret: instrucció a instrucció, s\'atura a l\'error.', 'Compilador: todo antes, una vez, y con un error no se ejecuta nada. Intérprete: instrucción a instrucción, se detiene en el error.', 'Compiler: everything beforehand, once, and with an error nothing runs. Interpreter: instruction by instruction, it stops at the error.'),
      L3('Eficaç = fa el que ha de fer; eficient = amb un cost raonable.', 'Eficaz = hace lo que tiene que hacer; eficiente = con un coste razonable.', 'Effective = does what it must; efficient = at a reasonable cost.'),
    ]),
  ],
  solved: [],
  day: day([L3('**Definicions:** una frase precisa i un exemple; no cal més.', '**Definiciones:** una frase precisa y un ejemplo; no hace falta más.', '**Definitions:** one precise sentence and an example; nothing more is needed.')]),
};

const t21 = {
  solvedH: H,
  tricks: [
    tricks(L3('Escriure un algorisme', 'Escribir un algoritmo', 'Writing an algorithm'), [
      L3('ENTORN complet: cada dada amb E/S, identificador, tipus i descripció.', 'ENTORN completo: cada dato con E/S, identificador, tipo y descripción.', 'Complete ENTORN: each data item with E/S, identifier, type and description.'),
      L3('Paraules clau en majúscules i sagnat de les accions controlades; `←` per assignar.', 'Palabras clave en mayúsculas y sangría de las acciones controladas; `←` para asignar.', 'Keywords in capitals and indentation of controlled actions; `←` to assign.'),
      L3('Comprova-ho amb un joc de proves: cas normal, cas límit i cas especial.', 'Compruébalo con un juego de pruebas: caso normal, caso límite y caso especial.', 'Check it with a test set: normal case, edge case and special case.'),
    ]),
  ],
  solved: [{ ref: 'ps-pilotes' }, { ref: 'ps-temps' }],
  day: day([L3('**Notació:** la del curs i prou; un `=` en lloc de `←` es penalitza.', '**Notación:** la del curso y punto; un `=` en lugar de `←` se penaliza.', '**Notation:** the course one and nothing else; an `=` instead of `←` is penalised.')]),
};

const t22 = {
  solvedH: H,
  tricks: [
    tricks(L3('Expressions i condicions', 'Expresiones y condiciones', 'Expressions and conditions'), [
      L3('Prioritats: NO › (· / ‖ |R I) › (+ − O) › relacionals. **Cada comparació entre parèntesis.**', 'Prioridades: NO › (· / ‖ |R I) › (+ − O) › relacionales. **Cada comparación entre paréntesis.**', 'Precedence: NO › (· / ‖ |R I) › (+ − O) › relational. **Each comparison in parentheses.**'),
      L3('`n |R 2 = 0` par; `n |R 10` última xifra; `n ‖ 10` treu-la.', '`n |R 2 = 0` par; `n |R 10` última cifra; `n ‖ 10` la quita.', '`n |R 2 = 0` even; `n |R 10` last digit; `n ‖ 10` removes it.'),
      L3('Condicional doble: sempre s\'executa exactament una branca; SEGONS_SIGUI: el primer valor que coincideix.', 'Condicional doble: siempre se ejecuta exactamente una rama; SEGONS_SIGUI: el primer valor que coincide.', 'Double conditional: exactly one branch always runs; SEGONS_SIGUI: the first value that matches.'),
    ]),
  ],
  solved: [{ ref: 'ps-traspas' }, { ref: 'ps-ous' }],
  day: day([L3('**Traça:** fes la taula de variables d\'un cas abans d\'escriure el resultat.', '**Traza:** haz la tabla de variables de un caso antes de escribir el resultado.', '**Trace:** make the variable table for one case before writing the result.')]),
};

const t23 = {
  solvedH: H,
  tricks: [
    tricks(L3('Recorregut o cerca', 'Recorrido o búsqueda', 'Traversal or search'), [
      L3('«Quants», «la suma», «la mitjana», «el màxim» → **recorregut**; «el primer que», «n\'hi ha algun» → **cerca**.', '«Cuántos», «la suma», «la media», «el máximo» → **recorrido**; «el primero que», «hay alguno» → **búsqueda**.', '“How many”, “the sum”, “the average”, “the maximum” → **traversal**; “the first that”, “is there any” → **search**.'),
      L3('Seqüència d\'entrada: un `Llegir` abans del MENTRE i un altre al final del cos.', 'Secuencia de entrada: un `Llegir` antes del MENTRE y otro al final del cuerpo.', 'Input sequence: one `Llegir` before the MENTRE and another at the end of the body.'),
      L3('A la cerca només s\'avança a l\'ALTRAMENT; al final, mira `trobat`.', 'En la búsqueda solo se avanza en el ALTRAMENT; al final, mira `trobat`.', 'In a search you only advance in the ALTRAMENT; at the end, check `trobat`.'),
    ]),
  ],
  solved: [{ ref: 'ps-maxseq' }, { ref: 'ps-acaba3' }],
  day: day([L3('**Inicialitzacions:** acumuladors a 0, productes a 1, màxim amb el primer element.', '**Inicializaciones:** acumuladores a 0, productos a 1, máximo con el primer elemento.', '**Initialisations:** accumulators at 0, products at 1, maximum with the first element.')]),
};

const cpp = (extra, solved) => ({ solvedH: H, tricks: [extra], solved, day: day([FORMAT, EDGE]) });

const s2 = cpp(tricks(L3('Seqüencial en C++', 'Secuencial en C++', 'Sequential C++'), [
  L3('`/` entre enters és quocient enter; per a la mitjana, `/ 3.0`.', '`/` entre enteros es cociente entero; para la media, `/ 3.0`.', '`/` between integers is the integer quotient; for the average, `/ 3.0`.'),
  L3('Repartir en caixes: quocient (`/`) i el que sobra (`%`), de la més gran a la més petita.', 'Repartir en cajas: cociente (`/`) y lo que sobra (`%`), de la más grande a la más pequeña.', 'Sharing into boxes: quotient (`/`) and what is left (`%`), from the largest to the smallest.'),
  L3('Decimals fixos: `cout << fixed << setprecision(n)` amb `<iomanip>`.', 'Decimales fijos: `cout << fixed << setprecision(n)` con `<iomanip>`.', 'Fixed decimals: `cout << fixed << setprecision(n)` with `<iomanip>`.'),
]), [{ ref: 'cpp-model-pilotes' }, { ref: 'cpp-f-cronometre' }]);

const s3 = cpp(tricks(L3('Condicionals en C++', 'Condicionales en C++', 'Conditionals in C++'), [
  L3('`==` compara i `=` assigna; intervals amb `&&`: `a <= x && x <= b`.', '`==` compara y `=` asigna; intervalos con `&&`: `a <= x && x <= b`.', '`==` compares and `=` assigns; intervals with `&&`: `a <= x && x <= b`.'),
  L3('Cadena `else if`: ordena els llindars (de més alt a més baix amb `>=`).', 'Cadena `else if`: ordena los umbrales (de más alto a más bajo con `>=`).', '`else if` chain: order the thresholds (highest to lowest with `>=`).'),
  L3('`switch` només amb enters o `char`, i un `break` a cada `case`.', '`switch` solo con enteros o `char`, y un `break` en cada `case`.', '`switch` only with integers or `char`, and a `break` in each `case`.'),
]), [{ ref: 'cpp-model-parking' }, { ref: 'cpp-model-ous' }]);

const s4 = cpp(tricks(L3('Bucles i seqüències', 'Bucles y secuencias', 'Loops and sequences'), [
  L3('Centinella: lectura avançada (un `cin` abans del bucle i un altre al final).', 'Centinela: lectura adelantada (un `cin` antes del bucle y otro al final).', 'Sentinel: read-ahead (one `cin` before the loop and another at the end).'),
  L3('Comptadors i acumuladors a 0 **abans** del bucle; màxim amb el primer element.', 'Contadores y acumuladores a 0 **antes** del bucle; máximo con el primer elemento.', 'Counters and accumulators at 0 **before** the loop; maximum with the first element.'),
  L3('Mitjana: `(double) suma / n` i només si `n > 0`.', 'Media: `(double) suma / n` y solo si `n > 0`.', 'Average: `(double) suma / n` and only if `n > 0`.'),
]), [{ ref: 'cpp-model-rock' }, { ref: 'cpp-model-endevina' }]);

const s5 = cpp(tricks(L3('Patrons del CP1', 'Patrones del CP1', 'Test 1 patterns'), [
  L3('Xifres: `n % 10` dona l\'última, `n / 10` la treu; el bucle acaba quan `n` és 0.', 'Cifras: `n % 10` da la última, `n / 10` la quita; el bucle acaba cuando `n` es 0.', 'Digits: `n % 10` gives the last one, `n / 10` removes it; the loop ends when `n` is 0.'),
  L3('Termes que depenen dels anteriors: actualitza primer la variable més endarrerida.', 'Términos que dependen de los anteriores: actualiza primero la variable más atrasada.', 'Terms that depend on the previous ones: update the variable furthest behind first.'),
  L3('Banderes: «existeix» comença a `false`, «per a tot» a `true`, i no tornen enrere.', 'Banderas: «existe» empieza en `false`, «para todo» en `true`, y no vuelven atrás.', 'Flags: “exists” starts at `false`, “for all” at `true`, and they do not go back.'),
]), [{ ref: 'cpp-model-fibonacci' }, { ref: 'cpp-model-binari' }]);

const s6 = cpp(tricks(L3('Disseny descendent', 'Diseño descendente', 'Top-down design'), [
  L3('Nivell 0 en una frase; refina una acció cada vegada fins que tot siguin instruccions.', 'Nivel 0 en una frase; refina una acción cada vez hasta que todo sean instrucciones.', 'Level 0 in one sentence; refine one action at a time until everything is instructions.'),
  L3('Bucles niats: les variables d\'un sol element (la suma d\'**un** X) s\'inicialitzen dins del bucle de fora.', 'Bucles anidados: las variables de un solo elemento (la suma de **un** X) se inicializan dentro del bucle de fuera.', 'Nested loops: variables for a single element (the sum for **one** X) are initialised inside the outer loop.'),
]), [{ ref: 'cpp-model-perfectes' }, { ref: 'cpp-d-primers-menors' }]);

const s7 = cpp(tricks(L3('Funcions i procediments', 'Funciones y procedimientos', 'Functions and procedures'), [
  L3('Funció: calcula i fa `return`; procediment: `void`, fa una tasca.', 'Función: calcula y hace `return`; procedimiento: `void`, hace una tarea.', 'Function: computes and does `return`; procedure: `void`, does a task.'),
  L3('Dades per valor; resultats per referència (`&`). Més d\'un resultat → un `&` per resultat.', 'Datos por valor; resultados por referencia (`&`). Más de un resultado → un `&` por resultado.', 'Data by value; results by reference (`&`). More than one result → one `&` per result.'),
  L3('Defineix la funció abans del `main` i fes que el `main` escrigui; les funcions calculen.', 'Define la función antes del `main` y haz que el `main` escriba; las funciones calculan.', 'Define the function before `main` and let `main` do the writing; functions compute.'),
]), [{ ref: 'cpp-s7-dividir-restant' }, { ref: 'cpp-s7-mcd-mcm' }]);

const xu = {
  tricks: [tricks(L3('Abans d\'escriure pseudocodi', 'Antes de escribir pseudocódigo', 'Before writing pseudocode'), [
    L3('Revisa la xuleta: ENTORN, prioritats i les tres composicions.', 'Revisa la chuleta: ENTORN, prioridades y las tres composiciones.', 'Check the cheat sheet: ENTORN, precedence and the three compositions.'),
  ])],
  day: day([L3('**Temps:** el CP de pseudocodi dura 90 minuts: tres algorismes i vuit preguntes curtes.', '**Tiempo:** el CP de pseudocódigo dura 90 minutos: tres algoritmos y ocho preguntas cortas.', '**Time:** the pseudocode test lasts 90 minutes: three algorithms and eight short questions.')]),
};

export default { t1, t21, t22, t23, s2, s3, s4, s5, s6, s7, xu };
