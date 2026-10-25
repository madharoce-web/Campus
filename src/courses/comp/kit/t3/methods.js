/**
 * Mètodes d'examen del T3 (àlgebra de Boole): trucs, exercicis tipus examen resolts pas a pas
 * i què fer el dia de l'examen. Encara no hi ha exàmens anteriors d'aquest tema: els resolts
 * són del tipus de les activitats de classe.
 */
import { L3, eq, m } from './h.js';

export default {
  solvedH: L3('Exercicis tipus examen resolts', 'Ejercicios tipo examen resueltos', 'Exam-style exercises, solved'),
  tricks: [
    { t: 'method', title: L3('Taules de veritat sense errors', 'Tablas de verdad sin errores', 'Truth tables without mistakes'), items: [
      L3('Amb n variables hi ha **2ⁿ files**: 4 amb dues, 8 amb tres, 16 amb quatre.', 'Con n variables hay **2ⁿ filas**: 4 con dos, 8 con tres, 16 con cuatro.', 'With n variables there are **2ⁿ rows**: 4 with two, 8 with three, 16 with four.'),
      L3('Escriu les files **comptant en binari** (000, 001, 010…). La primera columna canvia cada 4 files, la segona cada 2 i l\'última a cada fila.', 'Escribe las filas **contando en binario** (000, 001, 010…). La primera columna cambia cada 4 filas, la segunda cada 2 y la última en cada fila.', 'Write the rows **counting in binary** (000, 001, 010…). The first column changes every 4 rows, the second every 2 and the last on every row.'),
      L3('Si l\'expressió és llarga, afegeix **columnes intermèdies** (primer les negacions, després els productes, al final les sumes).', 'Si la expresión es larga, añade **columnas intermedias** (primero las negaciones, después los productos, al final las sumas).', 'If the expression is long, add **intermediate columns** (negations first, then products, sums last).'),
      L3(`Drecera per a un producte: només cal buscar la fila on es compleixen totes les condicions. ${m("AB'C")} només val 1 a la fila 1 0 1.`, `Atajo para un producto: solo hay que buscar la fila donde se cumplen todas las condiciones. ${m("AB'C")} solo vale 1 en la fila 1 0 1.`, `Shortcut for a product: just find the row where every condition holds. ${m("AB'C")} is 1 only in row 1 0 1.`),
    ] },
    { t: 'method', title: L3('Avaluar sense equivocar-se', 'Evaluar sin equivocarse', 'Evaluating without mistakes'), items: [
      L3('Ordre: **negació → producte → suma**. Una barra llarga s\'aplica al final, al resultat de tot el que té a sota.', 'Orden: **negación → producto → suma**. Una barra larga se aplica al final, al resultado de todo lo que tiene debajo.', 'Order: **NOT → product → sum**. A long bar is applied last, to the result of everything under it.'),
      L3('**NAND / NOR:** calcula l\'AND / OR i inverteix. **XOR:** compta els uns; senar → 1, parell → 0.', '**NAND / NOR:** calcula el AND / OR e invierte. **XOR:** cuenta los unos; impar → 1, par → 0.', '**NAND / NOR:** compute the AND / OR and invert. **XOR:** count the ones; odd → 1, even → 0.'),
      L3(`Trampa clàssica: ${m("(AB)'")} no és ${m("A'B'")}, i ${m("(A+B)'")} no és ${m("A'+B'")}.`, `Trampa clásica: ${m("(AB)'")} no es ${m("A'B'")}, y ${m("(A+B)'")} no es ${m("A'+B'")}.`, `Classic trap: ${m("(AB)'")} is not ${m("A'B'")}, and ${m("(A+B)'")} is not ${m("A'+B'")}.`),
    ] },
    { t: 'method', title: L3('Simplificar i dualitzar', 'Simplificar y dualizar', 'Simplifying and taking duals'), items: [
      L3(`Mira primer si hi ha ${m("X+X'")} o ${m("XX'")}: es converteixen en 1 o 0 i arrosseguen la resta (dominància).`, `Mira primero si hay ${m("X+X'")} o ${m("XX'")}: se convierten en 1 o 0 y arrastran el resto (dominancia).`, `First look for ${m("X+X'")} or ${m("XX'")}: they become 1 or 0 and drag the rest along (dominance).`),
      L3(`Si dos termes només es diferencien en una variable negada, treu factor comú: ${eq("XY+XY'", 'X')}.`, `Si dos términos solo se diferencian en una variable negada, saca factor común: ${eq("XY+XY'", 'X')}.`, `If two terms differ only in one negated variable, factor out: ${eq("XY+XY'", 'X')}.`),
      L3(`Si un terme conté sencer un altre terme, l'absorbeix: ${eq('X+XYZ', 'X')}.`, `Si un término contiene entero a otro término, lo absorbe: ${eq('X+XYZ', 'X')}.`, `If a term fully contains another term, it absorbs it: ${eq('X+XYZ', 'X')}.`),
      L3(`Per a la dual: + ↔ ·, 0 ↔ 1 i **posa parèntesis** on calgui per no canviar els grups (${m('A+BC')} → ${m('A(B+C)')}).`, `Para la dual: + ↔ ·, 0 ↔ 1 y **pon paréntesis** donde haga falta para no cambiar los grupos (${m('A+BC')} → ${m('A(B+C)')}).`, `For the dual: + ↔ ·, 0 ↔ 1 and **add parentheses** where needed so the groups do not change (${m('A+BC')} → ${m('A(B+C)')}).`),
    ] },
  ],
  solved: [
    { id: 't3-m-1', srcName: L3('Tipus examen · de l\'enunciat a la taula', 'Tipo examen · del enunciado a la tabla', 'Exam style · from statement to table'),
      q: L3('Un dipòsit obre la vàlvula (S = 1) quan el nivell és baix (N = 1) i la bomba no està avariada (F = 1 vol dir avariada), o quan l\'operari ho força (O = 1). Escriu S i digues quantes files de la taula valen 1.',
        'Un depósito abre la válvula (S = 1) cuando el nivel es bajo (N = 1) y la bomba no está averiada (F = 1 quiere decir averiada), o cuando el operario lo fuerza (O = 1). Escribe S y di cuántas filas de la tabla valen 1.',
        'A tank opens its valve (S = 1) when the level is low (N = 1) and the pump is not faulty (F = 1 means faulty), or when the operator forces it (O = 1). Write S and say how many rows of the table are 1.'),
      steps: [
        { x: L3(`Condicions: «nivell baix i bomba bé» és ${m("NF'")}; «o l'operari» suma O. ${eq('S', "NF'+O")}.`, `Condiciones: «nivel bajo y bomba bien» es ${m("NF'")}; «o el operario» suma O. ${eq('S', "NF'+O")}.`, `Conditions: «low level and pump fine» is ${m("NF'")}; «or the operator» adds O. ${eq('S', "NF'+O")}.`), why: L3('«i» → producte, «o» → suma, «no» → barra.', '«y» → producto, «o» → suma, «no» → barra.', '«and» → product, «or» → sum, «not» → bar.') },
        L3('Amb O = 1, S = 1 a les 4 files que tenen O = 1.', 'Con O = 1, S = 1 en las 4 filas que tienen O = 1.', 'With O = 1, S = 1 in the 4 rows where O = 1.'),
        L3(`Amb O = 0, només val 1 si N = 1 i F = 0: una fila més. Total: **5 files**.`, `Con O = 0, solo vale 1 si N = 1 y F = 0: una fila más. Total: **5 filas**.`, `With O = 0, it is 1 only if N = 1 and F = 0: one more row. Total: **5 rows**.`),
      ],
      day: L3('Escriu primer què vol dir cada variable quan val 1: evita la meitat dels errors de signe (la F «avariada» va negada).', 'Escribe primero qué quiere decir cada variable cuando vale 1: evita la mitad de los errores de signo (la F «averiada» va negada).', 'First write what each variable means when it is 1: it avoids half the sign errors (the «faulty» F goes negated).') },
    { id: 't3-m-2', srcName: L3('Tipus examen · simplificació', 'Tipo examen · simplificación', 'Exam style · simplification'),
      q: L3(`Simplifica ${m("A'BC+A'BC'+AB")}, indicant la llei de cada pas.`, `Simplifica ${m("A'BC+A'BC'+AB")}, indicando la ley de cada paso.`, `Simplify ${m("A'BC+A'BC'+AB")}, naming the law at each step.`),
      steps: [
        { x: eq("A'BC+A'BC'+AB", "A'B(C+C')+AB"), why: L3('Distributiva: factor comú ĀB.', 'Distributiva: factor común ĀB.', 'Distributive: common factor ĀB.') },
        { x: eq("A'B(C+C')+AB", "A'B+AB"), why: L3('Complementació i element neutre.', 'Complementación y elemento neutro.', 'Complement and identity element.') },
        { x: eq("A'B+AB", "B(A'+A)", 'B'), why: L3('Factor comú B, complementació i neutre.', 'Factor común B, complementación y neutro.', 'Common factor B, complement and identity.') },
        L3('Comprovació ràpida: amb A = 1, B = 1, C = 0 l\'original val 1 i B també; amb B = 0 tots els termes valen 0.', 'Comprobación rápida: con A = 1, B = 1, C = 0 el original vale 1 y B también; con B = 0 todos los términos valen 0.', 'Quick check: with A = 1, B = 1, C = 0 the original is 1 and so is B; with B = 0 every term is 0.'),
      ],
      day: L3('Si no saps per on començar, busca dos termes que només es diferenciïn en una lletra negada.', 'Si no sabes por dónde empezar, busca dos términos que solo se diferencien en una letra negada.', 'If you do not know where to start, look for two terms that differ only in one negated letter.') },
    { id: 't3-m-3', srcName: L3('Tipus examen · síntesi i dualitat', 'Tipo examen · síntesis y dualidad', 'Exam style · synthesis and duality'),
      q: L3(`Amb A = 1, B = 0, C = 0, calcula ${m("(A+B+C)'")} i ${m('A⊕B⊕C')}. Després escriu la dual de ${eq("A+A'", '1')}.`, `Con A = 1, B = 0, C = 0, calcula ${m("(A+B+C)'")} y ${m('A⊕B⊕C')}. Después escribe la dual de ${eq("A+A'", '1')}.`, `With A = 1, B = 0, C = 0, compute ${m("(A+B+C)'")} and ${m('A⊕B⊕C')}. Then write the dual of ${eq("A+A'", '1')}.`),
      steps: [
        L3(`${eq('1+0+0', '1')}, i negat: **0**.`, `${eq('1+0+0', '1')}, y negado: **0**.`, `${eq('1+0+0', '1')}, and negated: **0**.`),
        L3('Hi ha un sol 1 (nombre senar): la XOR val **1**.', 'Hay un solo 1 (número impar): la XOR vale **1**.', 'There is a single 1 (odd number): the XOR is **1**.'),
        L3(`Dual: + → · i 1 → 0: ${eq("AA'", '0')}.`, `Dual: + → · y 1 → 0: ${eq("AA'", '0')}.`, `Dual: + → · and 1 → 0: ${eq("AA'", '0')}.`),
      ] },
  ],
  day: [
    { t: 'list', items: [
      L3('**Temps:** una taula de 8 files són 3–4 minuts; una simplificació, 5–8. Si una cadena de lleis s\'encalla, deixa-la i torna-hi.', '**Tiempo:** una tabla de 8 filas son 3–4 minutos; una simplificación, 5–8. Si una cadena de leyes se atasca, déjala y vuelve luego.', '**Time:** an 8-row table takes 3–4 minutes; a simplification, 5–8. If a chain of laws gets stuck, leave it and come back.'),
      L3('**Redacció:** a cada pas, escriu el nom de la llei. És el que es puntua, no només el resultat.', '**Redacción:** en cada paso, escribe el nombre de la ley. Es lo que se puntúa, no solo el resultado.', '**Write-up:** at each step, write the name of the law. That is what earns marks, not just the result.'),
      L3('**Comprovació:** substitueix dos o tres valors a l\'expressió original i a la simplificada; si no coincideixen, hi ha un error.', '**Comprobación:** sustituye dos o tres valores en la expresión original y en la simplificada; si no coinciden, hay un error.', '**Check:** plug two or three values into the original and the simplified expression; if they disagree, there is a mistake.'),
      L3('**Errors típics:** repartir una barra llarga, oblidar que el producte va abans que la suma, i treure parèntesis en fer la dual.', '**Errores típicos:** repartir una barra larga, olvidar que el producto va antes que la suma y quitar paréntesis al hacer la dual.', '**Common mistakes:** sharing out a long bar, forgetting that the product comes before the sum, and dropping parentheses when taking the dual.'),
    ] },
  ],
};
