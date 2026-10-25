/**
 * T3 · Àlgebra de Boole (Computadors CP1). Lliçó escrita per a la plantilla, en català, castellà i
 * anglès, amb blocs per al mode directe i per al mode explicat. Redacció pròpia sobre el temari
 * de l'assignatura (variables i funcions lògiques, operacions, lleis i dualitat).
 */
import { E, ev } from './boole.js';
import { L3, eq, eqd, m, pair, SVG_AND, SVG_OR } from './h.js';

const D = 'direct', X = 'explained';
const p = (x, mode) => ({ t: 'p', x, mode });
/** taula de veritat d'una operació de A (i B), com a bloc de taula */
const tt2 = (f) => {
  const names = f.includes('B') ? ['A', 'B'] : ['A'];
  const envs = names.length === 2 ? [[0, 0], [0, 1], [1, 0], [1, 1]] : [[0], [1]];
  return { t: 'table', head: [...names, m(f)], rows: envs.map((v) => [...v.map(String), String(ev(E(f), Object.fromEntries(names.map((n, i) => [n, v[i]]))))]) };
};
const check = (id, ex) => ({ t: 'check', ex: { id: 't3-' + id, ...ex } });
const ext = L3('Ampliació (no surt a les diapositives)', 'Ampliación (no sale en las diapositivas)', 'Extension (not in the slides)');

/* ---------- 1. variables i funcions ---------- */
const s1 = [
  { t: 'def', title: L3('variable lògica', 'variable lógica', 'logic variable'), x: L3(
    `Una **variable lògica** és un símbol que només pot prendre dos valors: **0** (fals) i **1** (veritable). Els dos valors s'exclouen: una variable no pot valer 0 i 1 alhora. S'escriuen amb majúscules: ${m('A')}, ${m('B')}, ${m('X')}…`,
    `Una **variable lógica** es un símbolo que solo puede tomar dos valores: **0** (falso) y **1** (verdadero). Los dos valores se excluyen: una variable no puede valer 0 y 1 a la vez. Se escriben con mayúsculas: ${m('A')}, ${m('B')}, ${m('X')}…`,
    `A **logic variable** is a symbol that can take only two values: **0** (false) and **1** (true). The two values are mutually exclusive: a variable cannot be 0 and 1 at the same time. They are written in capitals: ${m('A')}, ${m('B')}, ${m('X')}…`) },
  p(L3(
    'Una variable lògica no mesura una quantitat: respon una pregunta de sí o no. Si **A** vol dir «el sistema està en funcionament», A = 1 és «sí, funciona» i A = 0 és «no funciona». El 0 i l\'1 no són números per sumar: són les dues respostes possibles.',
    'Una variable lógica no mide una cantidad: responde una pregunta de sí o no. Si **A** quiere decir «el sistema está en funcionamiento», A = 1 es «sí, funciona» y A = 0 es «no funciona». El 0 y el 1 no son números para sumar: son las dos respuestas posibles.',
    'A logic variable does not measure a quantity: it answers a yes-or-no question. If **A** means «the system is running», A = 1 is «yes, it runs» and A = 0 is «it does not run». 0 and 1 are not numbers to add up: they are the two possible answers.'), X),
  { t: 'def', title: L3('funció lògica', 'función lógica', 'logic function'), x: L3(
    'Una **funció lògica** combina una o més variables amb operacions lògiques i dona una sortida que també és 0 o 1.',
    'Una **función lógica** combina una o más variables con operaciones lógicas y da una salida que también es 0 o 1.',
    'A **logic function** combines one or more variables with logic operations and gives an output that is also 0 or 1.') },
  { t: 'example', title: L3('aprovar una assignatura', 'aprobar una asignatura', 'passing a course'), q: L3(
    'Per aprovar cal superar la mitjana de pràctiques **i** treure més d\'un 5 a l\'avaluació contínua. Definim A = 1: pràctiques superades; B = 1: avaluació contínua > 5; S = 1: s\'aprova.',
    'Para aprobar hay que superar la media de prácticas **y** sacar más de un 5 en la evaluación continua. Definimos A = 1: prácticas superadas; B = 1: evaluación continua > 5; S = 1: se aprueba.',
    'To pass, you must pass the lab average **and** score more than 5 in continuous assessment. Define A = 1: labs passed; B = 1: continuous assessment > 5; S = 1: the course is passed.'),
  result: L3(`${eq('S', 'AB')}: S val 1 només quan A i B valen 1 alhora.`, `${eq('S', 'AB')}: S vale 1 solo cuando A y B valen 1 a la vez.`, `${eq('S', 'AB')}: S is 1 only when A and B are both 1.`) },
  { t: 'tip', mode: X, title: L3('De l\'enunciat a la funció', 'Del enunciado a la función', 'From the statement to the function'), items: [
    L3('Cada condició del text és una variable (posa-li una lletra i escriu què vol dir quan val 1).', 'Cada condición del texto es una variable (ponle una letra y escribe qué quiere decir cuando vale 1).', 'Each condition in the text is a variable (give it a letter and write what it means when it is 1).'),
    L3('«i» (totes dues alhora) és el producte ·; «o» (n\'hi ha prou amb una) és la suma +; «no» és la negació.', '«y» (las dos a la vez) es el producto ·; «o» (basta con una) es la suma +; «no» es la negación.', '«and» (both at once) is the product ·; «or» (one is enough) is the sum +; «not» is the negation.'),
    L3('Quan una situació no diu res d\'una variable, a la taula s\'hi posa un guió (–): no sabem el valor o no importa.', 'Cuando una situación no dice nada de una variable, en la tabla se pone un guion (–): no sabemos el valor o no importa.', 'When a situation says nothing about a variable, the table shows a dash (–): the value is unknown or does not matter.'),
  ] },
  check('var-q1', { type: 'mcq', q: L3(
    'Variables: A = el processador està actiu; B = hi ha dades a la memòria; C = el sistema està connectat a la xarxa. Situació: «el processador treballa amb dades de la memòria, però el cable de xarxa està desconnectat». Quins valors tenen (A, B, C)?',
    'Variables: A = el procesador está activo; B = hay datos en la memoria; C = el sistema está conectado a la red. Situación: «el procesador trabaja con datos de la memoria, pero el cable de red está desconectado». ¿Qué valores tienen (A, B, C)?',
    'Variables: A = the processor is active; B = there is data in memory; C = the system is connected to the network. Situation: «the processor is working with data from memory, but the network cable is unplugged». What are the values of (A, B, C)?'),
  opts: ['(1, 1, 0)', '(1, 1, 1)', '(0, 1, 0)', '(1, 0, 0)'], answer: 0,
  steps: [L3('Processador treballant → A = 1. Dades a la memòria → B = 1. Cable desconnectat → C = 0.', 'Procesador trabajando → A = 1. Datos en la memoria → B = 1. Cable desconectado → C = 0.', 'Processor working → A = 1. Data in memory → B = 1. Cable unplugged → C = 0.')] }),
  check('var-q2', { type: 'bool', q: L3(
    'Un ventilador s\'engega (S = 1) quan la temperatura és alta (T = 1) **i** l\'equip està encès (E = 1). Escriu S.',
    'Un ventilador se enciende (S = 1) cuando la temperatura es alta (T = 1) **y** el equipo está encendido (E = 1). Escribe S.',
    'A fan turns on (S = 1) when the temperature is high (T = 1) **and** the device is on (E = 1). Write S.'),
  answer: 'TE', maxLit: 2, steps: [L3(`Les dues condicions alhora: producte lògic, ${eq('S', 'TE')}.`, `Las dos condiciones a la vez: producto lógico, ${eq('S', 'TE')}.`, `Both conditions at once: logical product, ${eq('S', 'TE')}.`)] }),
];

/* ---------- 2. NOT, AND, OR ---------- */
const s2 = [
  { t: 'def', title: L3('NOT (negació o complement)', 'NOT (negación o complemento)', 'NOT (negation or complement)'), x: L3(
    `Inverteix el valor: ${eq("0'", '1')} i ${eq("1'", '0')}. S'escriu amb una barra a sobre, ${m("A'")}, o amb un apòstrof, A'. Al teclat, escriu **A'**.`,
    `Invierte el valor: ${eq("0'", '1')} y ${eq("1'", '0')}. Se escribe con una barra encima, ${m("A'")}, o con un apóstrofo, A'. En el teclado, escribe **A'**.`,
    `It inverts the value: ${eq("0'", '1')} and ${eq("1'", '0')}. It is written with a bar on top, ${m("A'")}, or with an apostrophe, A'. On the keyboard, type **A'**.`) },
  { t: 'def', title: L3('AND (producte lògic)', 'AND (producto lógico)', 'AND (logical product)'), x: L3(
    `Val 1 **només quan totes les entrades valen 1**. Es llegeix «A i B» i s'escriu ${m('A·B')} o, més curt, $AB$.`,
    `Vale 1 **solo cuando todas las entradas valen 1**. Se lee «A y B» y se escribe ${m('A·B')} o, más corto, $AB$.`,
    `It is 1 **only when every input is 1**. It reads «A and B» and is written ${m('A·B')} or, shorter, $AB$.`) },
  { t: 'def', title: L3('OR (suma lògica)', 'OR (suma lógica)', 'OR (logical sum)'), x: L3(
    `Val 1 **quan almenys una entrada val 1**. Es llegeix «A o B, o totes dues» i s'escriu ${m('A+B')}.`,
    `Vale 1 **cuando al menos una entrada vale 1**. Se lee «A o B, o las dos» y se escribe ${m('A+B')}.`,
    `It is 1 **when at least one input is 1**. It reads «A or B, or both» and is written ${m('A+B')}.`) },
  { t: 'cols', cols: [[tt2("A'")], [tt2('AB')], [tt2('A+B')]] },
  p(L3(
    'Una manera de veure-ho: un interruptor tancat deixa passar el corrent (1) i un d\'obert no (0). Amb dos interruptors **en sèrie**, el llum només s\'encén si tots dos estan tancats: és un AND. **En paral·lel**, n\'hi ha prou que un estigui tancat: és un OR.',
    'Una manera de verlo: un interruptor cerrado deja pasar la corriente (1) y uno abierto no (0). Con dos interruptores **en serie**, la luz solo se enciende si los dos están cerrados: es un AND. **En paralelo**, basta con que uno esté cerrado: es un OR.',
    'One way to picture it: a closed switch lets current through (1) and an open one does not (0). With two switches **in series**, the lamp lights only if both are closed: that is AND. **In parallel**, one closed switch is enough: that is OR.'), X),
  { t: 'cols', mode: X, cols: [
    [{ t: 'diagram', svg: SVG_AND, caption: L3('En sèrie: AND', 'En serie: AND', 'In series: AND') }],
    [{ t: 'diagram', svg: SVG_OR, caption: L3('En paral·lel: OR', 'En paralelo: OR', 'In parallel: OR') }],
  ] },
  { t: 'prop', title: L3('ordre de les operacions', 'orden de las operaciones', 'order of operations'), x: L3(
    `Primer la **negació**, després el **producte** i al final la **suma**, com en aritmètica. Per tant, ${m('A+BC')} vol dir $A+(B\\cdot C)$. Una barra llarga agrupa tot el que té a sota: ${m("(A+B)'")} no és el mateix que ${m("A'+B'")}.`,
    `Primero la **negación**, después el **producto** y al final la **suma**, como en aritmética. Por tanto, ${m('A+BC')} quiere decir $A+(B\\cdot C)$. Una barra larga agrupa todo lo que tiene debajo: ${m("(A+B)'")} no es lo mismo que ${m("A'+B'")}.`,
    `First **NOT**, then the **product** and finally the **sum**, as in arithmetic. So ${m('A+BC')} means $A+(B\\cdot C)$. A long bar groups everything under it: ${m("(A+B)'")} is not the same as ${m("A'+B'")}.`) },
  { t: 'lab', id: 'boole-gates', props: { id: 'th-bl-gates' }, mode: X },
  check('basic-q1', { type: 'tt', q: L3(`Completa la taula de ${m("AB'C")}.`, `Completa la tabla de ${m("AB'C")}.`, `Complete the table for ${m("AB'C")}.`), expr: "AB'C", out: 'S',
    steps: [L3(`És un producte: només val 1 quan A = 1, ${eq("B'", '1')} (és a dir, B = 0) i C = 1. Només hi ha una fila així: 1 0 1.`, `Es un producto: solo vale 1 cuando A = 1, ${eq("B'", '1')} (es decir, B = 0) y C = 1. Solo hay una fila así: 1 0 1.`, `It is a product: it is 1 only when A = 1, ${eq("B'", '1')} (that is, B = 0) and C = 1. Only one row works: 1 0 1.`)] }),
  check('basic-q2', { type: 'mcq', q: L3(`Quant val ${m('A+BC')} si A = 0, B = 1 i C = 0?`, `¿Cuánto vale ${m('A+BC')} si A = 0, B = 1 y C = 0?`, `What is ${m('A+BC')} when A = 0, B = 1 and C = 0?`), opts: ['0', '1'], answer: 0,
    steps: [L3(`Primer el producte: ${eq('BC', '1·0', '0')}. Després la suma: ${eq('0+0', '0')}.`, `Primero el producto: ${eq('BC', '1·0', '0')}. Después la suma: ${eq('0+0', '0')}.`, `Product first: ${eq('BC', '1·0', '0')}. Then the sum: ${eq('0+0', '0')}.`), L3('Si sumes primer, (0 + 1)·0 = 0 per casualitat, però amb A = 1 i C = 0 sortiria diferent: respecta l\'ordre.', 'Si sumas primero, (0 + 1)·0 = 0 por casualidad, pero con A = 1 y C = 0 saldría diferente: respeta el orden.', 'Adding first gives (0 + 1)·0 = 0 by chance, but with A = 1 and C = 0 it would differ: keep the order.')] }),
];

/* ---------- 3. NAND, NOR, XOR ---------- */
const s3 = [
  { t: 'def', title: 'NAND', x: L3(
    `La negació del producte: ${m("(AB)'")}. Val **0 només quan totes les entrades valen 1**; en qualsevol altre cas val 1.`,
    `La negación del producto: ${m("(AB)'")}. Vale **0 solo cuando todas las entradas valen 1**; en cualquier otro caso vale 1.`,
    `The negation of the product: ${m("(AB)'")}. It is **0 only when every input is 1**; otherwise it is 1.`) },
  { t: 'def', title: 'NOR', x: L3(
    `La negació de la suma: ${m("(A+B)'")}. Val **1 només quan totes les entrades valen 0**; si alguna val 1, dona 0.`,
    `La negación de la suma: ${m("(A+B)'")}. Vale **1 solo cuando todas las entradas valen 0**; si alguna vale 1, da 0.`,
    `The negation of the sum: ${m("(A+B)'")}. It is **1 only when every input is 0**; if any input is 1, it gives 0.`) },
  { t: 'def', title: L3('XOR (o exclusiva)', 'XOR (o exclusiva)', 'XOR (exclusive or)'), x: L3(
    `Val 1 **quan les dues entrades són diferents**. S'escriu ${m('A⊕B')} i es pot fer amb les operacions bàsiques: ${eq('A⊕B', "A'B+AB'")}.`,
    `Vale 1 **cuando las dos entradas son diferentes**. Se escribe ${m('A⊕B')} y se puede hacer con las operaciones básicas: ${eq('A⊕B', "A'B+AB'")}.`,
    `It is 1 **when the two inputs differ**. It is written ${m('A⊕B')} and can be built from the basic operations: ${eq('A⊕B', "A'B+AB'")}.`) },
  { t: 'table', head: ['A', 'B', 'AND', 'OR', 'NAND', 'NOR', 'XOR'], rows: [[0, 0], [0, 1], [1, 0], [1, 1]].map(([a, b]) => [a, b, a & b, a | b, 1 - (a & b), 1 - (a | b), a ^ b].map(String)),
    caption: L3('Les cinc operacions de dues entrades, una al costat de l\'altra.', 'Las cinco operaciones de dos entradas, una al lado de la otra.', 'The five two-input operations side by side.') },
  p(L3(
    `Diferència clau entre OR i XOR: amb les dues entrades a 1, ${eq('1+1', '1')} però ${eq('1⊕1', '0')}. L'OR diu «almenys una»; la XOR, «exactament una».`,
    `Diferencia clave entre OR y XOR: con las dos entradas a 1, ${eq('1+1', '1')} pero ${eq('1⊕1', '0')}. El OR dice «al menos una»; la XOR, «exactamente una».`,
    `Key difference between OR and XOR: with both inputs at 1, ${eq('1+1', '1')} but ${eq('1⊕1', '0')}. OR says «at least one»; XOR says «exactly one».`)),
  { t: 'warn', x: L3(
    `${m("(AB)'")} **no** és ${m("A'B'")}. Prova-ho amb A = 0 i B = 1: ${eq("(0·1)'", "0'", '1')}, però ${eq("0'·1'", '1·0', '0')}. La barra llarga nega el resultat; no es reparteix entre les variables.`,
    `${m("(AB)'")} **no** es ${m("A'B'")}. Pruébalo con A = 0 y B = 1: ${eq("(0·1)'", "0'", '1')}, pero ${eq("0'·1'", '1·0', '0')}. La barra larga niega el resultado; no se reparte entre las variables.`,
    `${m("(AB)'")} is **not** ${m("A'B'")}. Try A = 0 and B = 1: ${eq("(0·1)'", "0'", '1')}, but ${eq("0'·1'", '1·0', '0')}. The long bar negates the result; it is not shared out among the variables.`) },
  { t: 'example', mode: X, title: L3('una NAND pas a pas', 'una NAND paso a paso', 'a NAND step by step'), q: L3(`Calcula ${m("(AB)'")} amb A = 1 i B = 1.`, `Calcula ${m("(AB)'")} con A = 1 y B = 1.`, `Compute ${m("(AB)'")} with A = 1 and B = 1.`),
    steps: [
      { x: L3(`Primer el que hi ha sota la barra: ${eq('1·1', '1')}.`, `Primero lo que hay bajo la barra: ${eq('1·1', '1')}.`, `First what is under the bar: ${eq('1·1', '1')}.`), why: L3('La barra afecta tot el producte: s\'aplica al final.', 'La barra afecta a todo el producto: se aplica al final.', 'The bar covers the whole product: it is applied last.') },
      L3(`Després la negació: ${eq("1'", '0')}. Per tant, ${eq("(1·1)'", '0')}.`, `Después la negación: ${eq("1'", '0')}. Por tanto, ${eq("(1·1)'", '0')}.`, `Then the negation: ${eq("1'", '0')}. So ${eq("(1·1)'", '0')}.`),
    ] },
  check('der-q1', { type: 'nums', q: L3('Amb A = 0 i B = 1, calcula:', 'Con A = 0 y B = 1, calcula:', 'With A = 0 and B = 1, compute:'),
    parts: [{ label: 'NAND ' + m("(AB)'"), answer: 1 }, { label: 'NOR ' + m("(A+B)'"), answer: 0 }, { label: 'XOR ' + m('A⊕B'), answer: 1 }],
    steps: [L3(`${eq('0·1', '0')}, negat: 1. ${eq('0+1', '1')}, negat: 0. Les entrades són diferents: XOR = 1.`, `${eq('0·1', '0')}, negado: 1. ${eq('0+1', '1')}, negado: 0. Las entradas son diferentes: XOR = 1.`, `${eq('0·1', '0')}, negated: 1. ${eq('0+1', '1')}, negated: 0. The inputs differ: XOR = 1.`)] }),
  check('der-q2', { type: 'mcq', q: L3('La sortida d\'una NOR val 1…', 'La salida de una NOR vale 1…', 'The output of a NOR is 1…'),
    opts: [L3('només quan totes les entrades valen 0', 'solo cuando todas las entradas valen 0', 'only when every input is 0'), L3('quan alguna entrada val 0', 'cuando alguna entrada vale 0', 'when some input is 0'), L3('quan les entrades són diferents', 'cuando las entradas son diferentes', 'when the inputs differ'), L3('només quan totes les entrades valen 1', 'solo cuando todas las entradas valen 1', 'only when every input is 1')], answer: 0,
    steps: [L3('NOR = OR negada. L\'OR només val 0 quan totes les entrades són 0; negada, aquest és l\'únic cas en què val 1.', 'NOR = OR negada. El OR solo vale 0 cuando todas las entradas son 0; negada, ese es el único caso en que vale 1.', 'NOR = negated OR. OR is 0 only when every input is 0; negated, that is the only case where it is 1.')] }),
];

/* ---------- 4. més de dues entrades ---------- */
const s4 = [
  p(L3('Totes les operacions es poden fer amb més de dues entrades. La regla de cadascuna no canvia:', 'Todas las operaciones se pueden hacer con más de dos entradas. La regla de cada una no cambia:', 'Every operation works with more than two inputs. The rule for each one stays the same:')),
  { t: 'table', head: [L3('Operació', 'Operación', 'Operation'), L3('Amb A, B i C', 'Con A, B y C', 'With A, B and C'), L3('Val 1 quan…', 'Vale 1 cuando…', 'It is 1 when…')], rows: [
    ['AND', m('ABC'), L3('totes les entrades valen 1', 'todas las entradas valen 1', 'every input is 1')],
    ['OR', m('A+B+C'), L3('almenys una entrada val 1', 'al menos una entrada vale 1', 'at least one input is 1')],
    ['NAND', m("(ABC)'"), L3('almenys una entrada val 0', 'al menos una entrada vale 0', 'at least one input is 0')],
    ['NOR', m("(A+B+C)'"), L3('totes les entrades valen 0', 'todas las entradas valen 0', 'every input is 0')],
    ['XOR', m('A⊕B⊕C'), L3('hi ha un nombre **senar** d\'entrades a 1', 'hay un número **impar** de entradas a 1', 'an **odd** number of inputs are 1')],
  ] },
  { t: 'tip', mode: X, x: L3(
    `La XOR de moltes entrades és un **comptador de paritat**: compta els uns. Si en surten 1 o 3, val 1; si en surten 0 o 2, val 0. També es pot fer de dos en dos: ${eq('1⊕1⊕1', '0⊕1', '1')}.`,
    `La XOR de muchas entradas es un **contador de paridad**: cuenta los unos. Si salen 1 o 3, vale 1; si salen 0 o 2, vale 0. También se puede hacer de dos en dos: ${eq('1⊕1⊕1', '0⊕1', '1')}.`,
    `XOR over many inputs is a **parity counter**: count the ones. With 1 or 3 ones it is 1; with 0 or 2 it is 0. It can also be done two at a time: ${eq('1⊕1⊕1', '0⊕1', '1')}.`) },
  { t: 'example', title: L3('les cinc alhora', 'las cinco a la vez', 'all five at once'), q: L3('Amb A = 1, B = 0 i C = 1:', 'Con A = 1, B = 0 y C = 1:', 'With A = 1, B = 0 and C = 1:'),
    blocks: [{ t: 'table', head: ['ABC', 'A+B+C', "(ABC)'", "(A+B+C)'", 'A⊕B⊕C'].map(m), rows: [['0', '1', '1', '0', '0']] }],
    result: L3('Hi ha una entrada a 0 (AND = 0, NAND = 1), n\'hi ha a 1 (OR = 1, NOR = 0) i hi ha dos uns, un nombre parell (XOR = 0).', 'Hay una entrada a 0 (AND = 0, NAND = 1), hay entradas a 1 (OR = 1, NOR = 0) y hay dos unos, un número par (XOR = 0).', 'One input is 0 (AND = 0, NAND = 1), some are 1 (OR = 1, NOR = 0) and there are two ones, an even number (XOR = 0).') },
  check('multi-q1', { type: 'nums', q: L3('Amb A = B = C = 1, calcula:', 'Con A = B = C = 1, calcula:', 'With A = B = C = 1, compute:'),
    parts: [['S1', 'ABC'], ['S2', 'A+B+C'], ['S3', "(ABC)'"], ['S4', "(A+B+C)'"], ['S5', 'A⊕B⊕C']].map(([l, f], i) => ({ label: l + ' = ' + m(f), answer: [1, 1, 0, 0, 1][i] })),
    steps: [L3('Totes valen 1: AND = 1, OR = 1, NAND = 0, NOR = 0, i tres uns és un nombre senar: XOR = 1.', 'Todas valen 1: AND = 1, OR = 1, NAND = 0, NOR = 0, y tres unos es un número impar: XOR = 1.', 'All are 1: AND = 1, OR = 1, NAND = 0, NOR = 0, and three ones is an odd number: XOR = 1.')] }),
  check('multi-q2', { type: 'match', q: L3('Relaciona cada operació (de tres entrades) amb la condició perquè valgui 1.', 'Relaciona cada operación (de tres entradas) con la condición para que valga 1.', 'Match each (three-input) operation with the condition for it to be 1.'),
    items: ['NAND', 'NOR', 'XOR'].map((q) => ({ q, o: [L3('almenys una entrada a 0', 'al menos una entrada a 0', 'at least one input at 0'), L3('totes les entrades a 0', 'todas las entradas a 0', 'every input at 0'), L3('nombre senar d\'uns', 'número impar de unos', 'odd number of ones')] })),
    answer: [0, 1, 2] }),
];

/* ---------- 5. commutativa, associativa, distributiva ---------- */
const s5 = [
  p(L3(
    'Les **lleis de l\'àlgebra de Boole** transformen una expressió en una altra d\'equivalent (amb la mateixa taula de veritat). Serveixen per demostrar que dues expressions són iguals, per simplificar funcions i, al final, per fer circuits amb menys portes.',
    'Las **leyes del álgebra de Boole** transforman una expresión en otra equivalente (con la misma tabla de verdad). Sirven para demostrar que dos expresiones son iguales, para simplificar funciones y, al final, para hacer circuitos con menos puertas.',
    'The **laws of Boolean algebra** turn an expression into an equivalent one (with the same truth table). They are used to prove that two expressions are equal, to simplify functions and, in the end, to build circuits with fewer gates.')),
  { t: 'rule', title: L3('commutativa', 'conmutativa', 'commutative'), x: L3(`L'ordre no importa: ${pair(['A+B', 'B+A'], ['AB', 'BA'])}`, `El orden no importa: ${pair(['A+B', 'B+A'], ['AB', 'BA'])}`, `Order does not matter: ${pair(['A+B', 'B+A'], ['AB', 'BA'])}`) },
  { t: 'rule', title: L3('associativa', 'asociativa', 'associative'), x: L3(`L'agrupació no importa si totes són sumes o tots són productes: ${pair(['(A+B)+C', 'A+(B+C)'], ['(AB)C', 'A(BC)'])}`, `La agrupación no importa si todas son sumas o todos son productos: ${pair(['(A+B)+C', 'A+(B+C)'], ['(AB)C', 'A(BC)'])}`, `Grouping does not matter if they are all sums or all products: ${pair(['(A+B)+C', 'A+(B+C)'], ['(AB)C', 'A(BC)'])}`) },
  { t: 'rule', title: L3('distributiva', 'distributiva', 'distributive'), x: L3(
    `Relaciona el producte amb la suma: ${eqd('A(B+C)', 'AB+AC')} D'esquerra a dreta és **desenvolupar**; de dreta a esquerra, **treure factor comú**.`,
    `Relaciona el producto con la suma: ${eqd('A(B+C)', 'AB+AC')} De izquierda a derecha es **desarrollar**; de derecha a izquierda, **sacar factor común**.`,
    `It links the product with the sum: ${eqd('A(B+C)', 'AB+AC')} Left to right is **expanding**; right to left is **factoring out**.`) },
  { t: 'example', title: L3('desenvolupar i factoritzar', 'desarrollar y factorizar', 'expanding and factoring'), q: L3('Aplica la distributiva en el sentit que toqui:', 'Aplica la distributiva en el sentido que toque:', 'Apply the distributive law in the right direction:'),
    steps: [eq('B(A+C)', 'AB+BC'), eq('AB+AC', 'A(B+C)'), eq("A'B+A'C", "A'(B+C)")],
    result: L3('Desenvolupar ajuda a calcular; factoritzar sol ser el primer pas per simplificar.', 'Desarrollar ayuda a calcular; factorizar suele ser el primer paso para simplificar.', 'Expanding helps you compute; factoring is usually the first step to simplify.') },
  p(L3(
    'Una llei es pot comprovar sempre amb la taula de veritat: si les dues bandes donen la mateixa columna, són equivalents. Al laboratori de sota, tria «Distributiva» o escriu-ne una de teva.',
    'Una ley se puede comprobar siempre con la tabla de verdad: si los dos lados dan la misma columna, son equivalentes. En el laboratorio de abajo, elige «Distributiva» o escribe una tuya.',
    'A law can always be checked with the truth table: if both sides give the same column, they are equivalent. In the lab below, pick «Distributive» or type one of your own.'), X),
  { t: 'lab', id: 'boole-equiv', props: { id: 'th-bl-equiv-dist', cfg: { a: 'A(B+C)', b: 'AB+AC' } }, mode: X },
  { t: 'note', mode: X, title: ext, x: L3(
    `En àlgebra de Boole, la suma també es reparteix sobre el producte: ${eq('A+BC', '(A+B)(A+C)')}. Sembla estrany perquè en aritmètica no passa, però la taula de veritat ho confirma.`,
    `En álgebra de Boole, la suma también se reparte sobre el producto: ${eq('A+BC', '(A+B)(A+C)')}. Parece raro porque en aritmética no pasa, pero la tabla de verdad lo confirma.`,
    `In Boolean algebra the sum also distributes over the product: ${eq('A+BC', '(A+B)(A+C)')}. It looks odd because it fails in arithmetic, but the truth table confirms it.`) },
  check('dist-q1', { type: 'bool', q: L3(`Treu factor comú: ${m("BC+BD'")}`, `Saca factor común: ${m("BC+BD'")}`, `Factor out: ${m("BC+BD'")}`), answer: "B(C+D')", maxLit: 3,
    steps: [L3(`La B és a tots dos termes: ${eq("BC+BD'", "B(C+D')")}.`, `La B está en los dos términos: ${eq("BC+BD'", "B(C+D')")}.`, `B appears in both terms: ${eq("BC+BD'", "B(C+D')")}.`)] }),
  check('dist-q2', { type: 'mcq', q: L3(`Quina és la forma desenvolupada de ${m("A'(B+C)")}?`, `¿Cuál es la forma desarrollada de ${m("A'(B+C)")}?`, `What is the expanded form of ${m("A'(B+C)")}?`),
    opts: [m("A'B+A'C"), m("A'B+C"), m("A'+BC"), m("(A'+B)(A'+C)")], answer: 0,
    steps: [L3(`Es multiplica ${m("A'")} per cada terme del parèntesi.`, `Se multiplica ${m("A'")} por cada término del paréntesis.`, `Multiply ${m("A'")} by each term in the parentheses.`)] }),
];

/* ---------- 6. lleis amb constants ---------- */
const lawRow = (name, a, b) => [name, a, b];
const s6 = [
  p(L3('Aquestes lleis diuen què passa quan una variable es combina amb una constant (0 o 1), amb ella mateixa o amb el seu complement.', 'Estas leyes dicen qué pasa cuando una variable se combina con una constante (0 o 1), con ella misma o con su complemento.', 'These laws say what happens when a variable is combined with a constant (0 or 1), with itself or with its complement.')),
  { t: 'table', head: [L3('Llei', 'Ley', 'Law'), L3('Suma', 'Suma', 'Sum'), L3('Producte', 'Producto', 'Product')], rows: [
    lawRow(L3('Element neutre', 'Elemento neutro', 'Identity element'), eq('A+0', 'A'), eq('A·1', 'A')),
    lawRow(L3('Dominància', 'Dominancia', 'Dominance'), eq('A+1', '1'), eq('A·0', '0')),
    lawRow(L3('Complementació', 'Complementación', 'Complement'), eq("A+A'", '1'), eq("AA'", '0')),
    lawRow(L3('Idempotència', 'Idempotencia', 'Idempotence'), eq('A+A', 'A'), eq('AA', 'A')),
    lawRow(L3('Involució', 'Involución', 'Involution'), eq("A''", 'A'), '—'),
  ] },
  { t: 'list', mode: X, items: [
    L3('**Neutre:** sumar 0 o multiplicar per 1 no canvia res (un interruptor sempre obert en paral·lel, o sempre tancat en sèrie, no fa res).', '**Neutro:** sumar 0 o multiplicar por 1 no cambia nada (un interruptor siempre abierto en paralelo, o siempre cerrado en serie, no hace nada).', '**Identity:** adding 0 or multiplying by 1 changes nothing (an always-open switch in parallel, or an always-closed one in series, does nothing).'),
    L3('**Dominància:** en una suma, un 1 ho força tot a 1; en un producte, un 0 ho força tot a 0.', '**Dominancia:** en una suma, un 1 lo fuerza todo a 1; en un producto, un 0 lo fuerza todo a 0.', '**Dominance:** in a sum, a 1 forces everything to 1; in a product, a 0 forces everything to 0.'),
    L3('**Complementació:** entre una variable i el seu contrari, sempre n\'hi ha una que val 1, i mai valen 1 alhora.', '**Complementación:** entre una variable y su contraria, siempre hay una que vale 1, y nunca valen 1 a la vez.', '**Complement:** between a variable and its opposite, one of them is always 1, and they are never both 1.'),
    L3('**Idempotència:** repetir la mateixa condició no aporta res.', '**Idempotencia:** repetir la misma condición no aporta nada.', '**Idempotence:** repeating the same condition adds nothing.'),
    L3('**Involució:** dues negacions seguides s\'anul·len; un nombre parell de barres es pot treure.', '**Involución:** dos negaciones seguidas se anulan; un número par de barras se puede quitar.', '**Involution:** two negations in a row cancel; an even number of bars can be removed.'),
  ] },
  { t: 'example', title: L3('dues lleis seguides', 'dos leyes seguidas', 'two laws in a row'), q: L3(`Simplifica ${m("A+A'+B")} i ${m("AA'B")}.`, `Simplifica ${m("A+A'+B")} y ${m("AA'B")}.`, `Simplify ${m("A+A'+B")} and ${m("AA'B")}.`),
    steps: [
      { x: eq("A+A'+B", '1+B', '1'), why: L3('Primer complementació (A + Ā = 1), després dominància (1 + B = 1).', 'Primero complementación (A + Ā = 1), después dominancia (1 + B = 1).', 'First complement (A + Ā = 1), then dominance (1 + B = 1).') },
      { x: eq("AA'B", '0·B', '0'), why: L3('Complementació (A·Ā = 0) i dominància (0·B = 0).', 'Complementación (A·Ā = 0) y dominancia (0·B = 0).', 'Complement (A·Ā = 0) and dominance (0·B = 0).') },
    ] },
  check('const-q1', { type: 'bool', q: L3(`Simplifica ${m("BB'C")}.`, `Simplifica ${m("BB'C")}.`, `Simplify ${m("BB'C")}.`), answer: '0', maxLit: 0,
    steps: [eq("BB'C", '0·C', '0')] }),
  check('const-q2', { type: 'bool', q: L3(`Simplifica ${m('(A+A)·1+0')}.`, `Simplifica ${m('(A+A)·1+0')}.`, `Simplify ${m('(A+A)·1+0')}.`), answer: 'A', maxLit: 1,
    steps: [L3(`Idempotència: ${eq('A+A', 'A')}. Neutres: ${eq('A·1', 'A')} i ${eq('A+0', 'A')}.`, `Idempotencia: ${eq('A+A', 'A')}. Neutros: ${eq('A·1', 'A')} y ${eq('A+0', 'A')}.`, `Idempotence: ${eq('A+A', 'A')}. Identities: ${eq('A·1', 'A')} and ${eq('A+0', 'A')}.`)] }),
  check('const-q3', { type: 'mcq', q: L3(`Quina llei diu que ${eq("C''", 'C')}?`, `¿Qué ley dice que ${eq("C''", 'C')}?`, `Which law states that ${eq("C''", 'C')}?`),
    opts: [L3('Involució', 'Involución', 'Involution'), L3('Idempotència', 'Idempotencia', 'Idempotence'), L3('Complementació', 'Complementación', 'Complement'), L3('Dominància', 'Dominancia', 'Dominance')], answer: 0 }),
];

/* ---------- 7. absorció ---------- */
const s7 = [
  { t: 'rule', title: L3('absorció', 'absorción', 'absorption'), x: L3(`Una variable «s'empassa» un terme que ja la conté: ${pair(['A+AB', 'A'], ['A(A+B)', 'A'])}`, `Una variable «se traga» un término que ya la contiene: ${pair(['A+AB', 'A'], ['A(A+B)', 'A'])}`, `A variable «absorbs» a term that already contains it: ${pair(['A+AB', 'A'], ['A(A+B)', 'A'])}`) },
  p(L3(
    `Per què? Si A = 1, la suma ${m('A+AB')} ja val 1 sigui quina sigui B. Si A = 0, el terme ${m('AB')} també val 0, i la suma val 0. En tots dos casos el resultat és A: el terme AB no hi afegeix res.`,
    `¿Por qué? Si A = 1, la suma ${m('A+AB')} ya vale 1 sea cual sea B. Si A = 0, el término ${m('AB')} también vale 0, y la suma vale 0. En los dos casos el resultado es A: el término AB no añade nada.`,
    `Why? If A = 1, the sum ${m('A+AB')} is already 1 whatever B is. If A = 0, the term ${m('AB')} is 0 too, and the sum is 0. Either way the result is A: the term AB adds nothing.`)),
  { t: 'lab', id: 'boole-equiv', props: { id: 'th-bl-equiv-abs', cfg: { a: 'A+AB', b: 'A' } }, mode: X },
  { t: 'example', title: L3('més exemples', 'más ejemplos', 'more examples'), q: L3('La part que absorbeix pot ser més llarga:', 'La parte que absorbe puede ser más larga:', 'The absorbing part can be longer:'),
    steps: [eq('A+ABC', 'A'), eq('B(B+C)', 'B'), eq('A(A+B+C)', 'A'), eq('(A+B)+(A+B)C', 'A+B')] },
  { t: 'warn', x: L3(
    `L'absorció necessita la **mateixa** variable sola. ${m("A+A'B")} no és una absorció (la B va amb ${m("A'")}, no amb A): no val A, sinó ${m('A+B')}.`,
    `La absorción necesita la **misma** variable sola. ${m("A+A'B")} no es una absorción (la B va con ${m("A'")}, no con A): no vale A, sino ${m('A+B')}.`,
    `Absorption needs the **same** variable on its own. ${m("A+A'B")} is not absorption (B goes with ${m("A'")}, not with A): it is not A, but ${m('A+B')}.`) },
  check('abs-q1', { type: 'bool', q: L3(`Simplifica ${m("X+XY'Z")}.`, `Simplifica ${m("X+XY'Z")}.`, `Simplify ${m("X+XY'Z")}.`), answer: 'X', maxLit: 1, steps: [L3(`Absorció: el terme ${m("XY'Z")} ja conté X.`, `Absorción: el término ${m("XY'Z")} ya contiene X.`, `Absorption: the term ${m("XY'Z")} already contains X.`)] }),
  check('abs-q2', { type: 'bool', q: L3(`Simplifica ${m('(A+B)(A+B+C)')}.`, `Simplifica ${m('(A+B)(A+B+C)')}.`, `Simplify ${m('(A+B)(A+B+C)')}.`), answer: 'A+B', maxLit: 2,
    steps: [{ x: L3(`Anomena ${eq('X', 'A+B')}: queda ${eq('X(X+C)', 'X')}.`, `Llama ${eq('X', 'A+B')}: queda ${eq('X(X+C)', 'X')}.`, `Call ${eq('X', 'A+B')}: you get ${eq('X(X+C)', 'X')}.`), why: L3('Les lleis valen també quan la «variable» és un grup sencer.', 'Las leyes valen también cuando la «variable» es un grupo entero.', 'The laws also hold when the «variable» is a whole group.') }] }),
];

/* ---------- 8. dualitat ---------- */
const s8 = [
  { t: 'def', title: L3('principi de dualitat', 'principio de dualidad', 'duality principle'), x: L3(
    'La **dual** d\'una identitat s\'obté canviant **+ per ·**, **· per +**, **0 per 1** i **1 per 0**. Les variables i les barres es queden igual. Si una identitat és certa, la seva dual també ho és.',
    'La **dual** de una identidad se obtiene cambiando **+ por ·**, **· por +**, **0 por 1** y **1 por 0**. Las variables y las barras se quedan igual. Si una identidad es cierta, su dual también lo es.',
    'The **dual** of an identity is obtained by swapping **+ for ·**, **· for +**, **0 for 1** and **1 for 0**. Variables and bars stay the same. If an identity holds, so does its dual.') },
  { t: 'table', head: [L3('Identitat', 'Identidad', 'Identity'), L3('Dual', 'Dual', 'Dual')], rows: [[eq('A+0', 'A'), eq('A·1', 'A')], [eq("A+A'", '1'), eq("AA'", '0')], [eq('A+AB', 'A'), eq('A(A+B)', 'A')], [eq('A+1', '1'), eq('A·0', '0')]] },
  p(L3('Per això cada llei té dues formes: n\'hi ha prou d\'aprendre\'n una i obtenir l\'altra canviant els símbols.', 'Por eso cada ley tiene dos formas: basta con aprender una y obtener la otra cambiando los símbolos.', 'That is why each law has two forms: learn one and get the other by swapping the symbols.'), X),
  { t: 'warn', x: L3(
    `Conserva l'agrupació original. ${m('A+BC')} vol dir $A+(B\\cdot C)$, i la seva dual és ${m('A(B+C)')}, **amb parèntesis**; sense, ${m('AB+C')} seria una altra expressió.`,
    `Conserva la agrupación original. ${m('A+BC')} quiere decir $A+(B\\cdot C)$, y su dual es ${m('A(B+C)')}, **con paréntesis**; sin ellos, ${m('AB+C')} sería otra expresión.`,
    `Keep the original grouping. ${m('A+BC')} means $A+(B\\cdot C)$, and its dual is ${m('A(B+C)')}, **with parentheses**; without them, ${m('AB+C')} would be a different expression.`) },
  check('dual-q1', { type: 'bool', q: L3(`Escriu la dual de ${m('A+BC')}.`, `Escribe la dual de ${m('A+BC')}.`, `Write the dual of ${m('A+BC')}.`), answer: 'A(B+C)',
    steps: [L3(`Canvia + ↔ · respectant els grups: $A+(B\\cdot C)$ → ${m('A(B+C)')}.`, `Cambia + ↔ · respetando los grupos: $A+(B\\cdot C)$ → ${m('A(B+C)')}.`, `Swap + ↔ · keeping the groups: $A+(B\\cdot C)$ → ${m('A(B+C)')}.`)] }),
  check('dual-q2', { type: 'mcq', q: L3(`Quina és la dual de ${eq('A·1', 'A')}?`, `¿Cuál es la dual de ${eq('A·1', 'A')}?`, `What is the dual of ${eq('A·1', 'A')}?`), opts: [eq('A+0', 'A'), eq('A+1', 'A'), eq("A'·0", "A'"), eq('A·0', 'A')], answer: 0 }),
];

/* ---------- 9. simplificar pas a pas ---------- */
const s9 = [
  { t: 'method', title: L3('com simplificar', 'cómo simplificar', 'how to simplify'), items: [
    L3(`Busca parelles complementàries: ${m("X+X'")} → 1 i ${m("XX'")} → 0.`, `Busca parejas complementarias: ${m("X+X'")} → 1 y ${m("XX'")} → 0.`, `Look for complementary pairs: ${m("X+X'")} → 1 and ${m("XX'")} → 0.`),
    L3('Treu repeticions (idempotència) i constants (neutres i dominància).', 'Quita repeticiones (idempotencia) y constantes (neutros y dominancia).', 'Remove repeats (idempotence) and constants (identity and dominance).'),
    L3(`Busca absorcions: ${m('X+XY')} → X.`, `Busca absorciones: ${m('X+XY')} → X.`, `Look for absorptions: ${m('X+XY')} → X.`),
    L3('Treu factor comú (distributiva) i torna a començar: sovint apareix un X + X̄ dins el parèntesi.', 'Saca factor común (distributiva) y vuelve a empezar: a menudo aparece un X + X̄ dentro del paréntesis.', 'Factor out (distributive) and start again: an X + X̄ often appears inside the parentheses.'),
    L3('Comprova el resultat amb dues o tres files de la taula.', 'Comprueba el resultado con dos o tres filas de la tabla.', 'Check the result with two or three rows of the table.'),
  ] },
  { t: 'example', title: eq("AB+AB'", 'A'), steps: [
    { x: eq("AB+AB'", "A(B+B')"), why: L3('Distributiva: factor comú A.', 'Distributiva: factor común A.', 'Distributive: common factor A.') },
    { x: eq("A(B+B')", 'A·1'), why: L3('Complementació.', 'Complementación.', 'Complement.') },
    { x: eq('A·1', 'A'), why: L3('Element neutre.', 'Elemento neutro.', 'Identity element.') },
  ] },
  { t: 'example', title: eq("(A+B)(A+B')", 'A'), steps: [
    { x: eq("(A+B)(A+B')", "AA+AB'+BA+BB'"), why: L3('Distributiva (desenvolupar).', 'Distributiva (desarrollar).', 'Distributive (expand).') },
    { x: eq("AA+AB'+BA+BB'", "A+AB'+AB+0"), why: L3('Idempotència (AA = A), commutativa (BA = AB) i complementació (BB̄ = 0).', 'Idempotencia (AA = A), conmutativa (BA = AB) y complementación (BB̄ = 0).', 'Idempotence (AA = A), commutative (BA = AB) and complement (BB̄ = 0).') },
    { x: eq("A+AB'+AB+0", 'A'), why: L3('Neutre (+0) i absorció: A s\'empassa AB̄ i AB.', 'Neutro (+0) y absorción: A se traga AB̄ y AB.', 'Identity (+0) and absorption: A absorbs AB̄ and AB.') },
  ] },
  { t: 'example', mode: X, title: eq("ABC+ABC'+AB'", 'A'), q: L3('Un cas de tres passos, típic d\'examen:', 'Un caso de tres pasos, típico de examen:', 'A three-step case, typical of exams:'), steps: [
    { x: eq("ABC+ABC'+AB'", "AB(C+C')+AB'"), why: L3('Factor comú AB als dos primers termes.', 'Factor común AB en los dos primeros términos.', 'Common factor AB in the first two terms.') },
    { x: eq("AB(C+C')+AB'", "AB+AB'"), why: L3('Complementació i element neutre.', 'Complementación y elemento neutro.', 'Complement and identity element.') },
    { x: eq("AB+AB'", 'A'), why: L3('El mateix que l\'exemple anterior.', 'Lo mismo que el ejemplo anterior.', 'Same as the previous example.') },
  ] },
  { t: 'lab', id: 'boole-truth', props: { id: 'th-bl-truth', cfg: { e: "ABC+ABC'+AB'" } }, mode: X },
  check('simp-q1', { type: 'bool', q: L3(`Simplifica ${m("AB'C+AB'C'")}.`, `Simplifica ${m("AB'C+AB'C'")}.`, `Simplify ${m("AB'C+AB'C'")}.`), answer: "AB'", maxLit: 2,
    steps: [eq("AB'C+AB'C'", "AB'(C+C')", "AB'·1", "AB'")] }),
  check('simp-q2', { type: 'bool', q: L3(`Simplifica ${m("(X+Y)(X'+Y)")}.`, `Simplifica ${m("(X+Y)(X'+Y)")}.`, `Simplify ${m("(X+Y)(X'+Y)")}.`), answer: 'Y', maxLit: 1,
    steps: [
      { x: eq("(X+Y)(X'+Y)", "XX'+XY+YX'+YY"), why: L3('Distributiva.', 'Distributiva.', 'Distributive.') },
      { x: eq("XX'+XY+YX'+YY", "0+XY+X'Y+Y"), why: L3('Complementació i idempotència.', 'Complementación e idempotencia.', 'Complement and idempotence.') },
      { x: eq("0+XY+X'Y+Y", 'Y'), why: L3('Neutre i absorció (Y s\'empassa XY i X̄Y).', 'Neutro y absorción (Y se traga XY y X̄Y).', 'Identity and absorption (Y absorbs XY and X̄Y).') },
    ] }),
];

/* ---------- tipus examen, al final del tema ---------- */
const examEnd = [
  { id: 't3-end-1', type: 'bool', level: 'exam', title: L3('De l\'enunciat a la funció', 'Del enunciado a la función', 'From the statement to the function'),
    q: L3('Un sistema de reg s\'activa (S = 1) si el sòl és sec (H = 1) i no plou (P = 1 vol dir que plou), o bé si s\'activa a mà (M = 1). Escriu S.',
      'Un sistema de riego se activa (S = 1) si el suelo está seco (H = 1) y no llueve (P = 1 quiere decir que llueve), o bien si se activa a mano (M = 1). Escribe S.',
      'An irrigation system turns on (S = 1) if the soil is dry (H = 1) and it is not raining (P = 1 means it is raining), or if it is switched on manually (M = 1). Write S.'),
    answer: "HP'+M", steps: [L3(`«Sec i no plou»: ${m("HP'")}. «O bé a mà»: es suma M. ${eq('S', "HP'+M")}.`, `«Seco y no llueve»: ${m("HP'")}. «O bien a mano»: se suma M. ${eq('S', "HP'+M")}.`, `«Dry and not raining»: ${m("HP'")}. «Or manually»: add M. ${eq('S', "HP'+M")}.`)] },
  { id: 't3-end-2', type: 'tt', level: 'exam', title: L3('Taula de veritat', 'Tabla de verdad', 'Truth table'), q: L3(`Completa la taula de ${m("(A+B')C")}.`, `Completa la tabla de ${m("(A+B')C")}.`, `Complete the table for ${m("(A+B')C")}.`), expr: "(A+B')C", out: 'S',
    steps: [L3(`Val 1 quan C = 1 i, a més, A = 1 o B = 0. Files: 0 0 1, 1 0 1 i 1 1 1.`, `Vale 1 cuando C = 1 y, además, A = 1 o B = 0. Filas: 0 0 1, 1 0 1 y 1 1 1.`, `It is 1 when C = 1 and also A = 1 or B = 0. Rows: 0 0 1, 1 0 1 and 1 1 1.`)] },
  { id: 't3-end-3', type: 'nums', level: 'exam', title: L3('Síntesi', 'Síntesis', 'Synthesis'), q: L3('Amb A = 0, B = 1 i C = 1, calcula:', 'Con A = 0, B = 1 y C = 1, calcula:', 'With A = 0, B = 1 and C = 1, compute:'),
    parts: [['S1', 'ABC'], ['S2', 'A+B+C'], ['S3', "(ABC)'"], ['S4', "(A+B+C)'"], ['S5', 'A⊕B⊕C']].map(([l, f], i) => ({ label: l + ' = ' + m(f), answer: [0, 1, 1, 0, 0][i] })),
    steps: [L3('Hi ha un 0 (AND = 0, NAND = 1), hi ha uns (OR = 1, NOR = 0) i dos uns és parell (XOR = 0).', 'Hay un 0 (AND = 0, NAND = 1), hay unos (OR = 1, NOR = 0) y dos unos es par (XOR = 0).', 'There is a 0 (AND = 0, NAND = 1), there are ones (OR = 1, NOR = 0) and two ones is even (XOR = 0).')] },
  { id: 't3-end-4', type: 'bool', level: 'exam', title: L3('Simplificació', 'Simplificación', 'Simplification'), q: L3(`Simplifica al màxim ${m("(A+B)(A+B')")}.`, `Simplifica al máximo ${m("(A+B)(A+B')")}.`, `Simplify ${m("(A+B)(A+B')")} as far as possible.`), answer: 'A', maxLit: 1,
    steps: [eq("(A+B)(A+B')", "A+AB'+AB+BB'", "A+AB'+AB", 'A')] },
  { id: 't3-end-5', type: 'bool', level: 'exam', title: L3('Dualitat', 'Dualidad', 'Duality'), q: L3(`Escriu la dual de ${m('A+BC+0')}.`, `Escribe la dual de ${m('A+BC+0')}.`, `Write the dual of ${m('A+BC+0')}.`), answer: 'A(B+C)·1',
    steps: [L3(`+ ↔ ·, 0 ↔ 1 i parèntesis per conservar els grups: ${m('A(B+C)·1')}, que és ${m('A(B+C)')}.`, `+ ↔ ·, 0 ↔ 1 y paréntesis para conservar los grupos: ${m('A(B+C)·1')}, que es ${m('A(B+C)')}.`, `+ ↔ ·, 0 ↔ 1 and parentheses to keep the groups: ${m('A(B+C)·1')}, which is ${m('A(B+C)')}.`)] },
  { id: 't3-end-6', type: 'open', level: 'hard', title: L3('Demostració', 'Demostración', 'Proof'), q: L3(`Demostra amb les lleis (dient quina fas servir a cada pas) que ${eq("(A+B)(A'+B)", 'B')}.`, `Demuestra con las leyes (diciendo cuál usas en cada paso) que ${eq("(A+B)(A'+B)", 'B')}.`, `Using the laws (naming the one you use at each step), prove that ${eq("(A+B)(A'+B)", 'B')}.`),
    space: 'lines:8',
    steps: [
      { x: eq("(A+B)(A'+B)", "AA'+AB+BA'+BB"), why: L3('Distributiva.', 'Distributiva.', 'Distributive.') },
      { x: eq("AA'+AB+BA'+BB", "0+AB+A'B+B"), why: L3('Complementació (AĀ = 0), commutativa i idempotència (BB = B).', 'Complementación (AĀ = 0), conmutativa e idempotencia (BB = B).', 'Complement (AĀ = 0), commutative and idempotence (BB = B).') },
      { x: eq("0+AB+A'B+B", "B(A+A')+B"), why: L3('Neutre i factor comú B.', 'Neutro y factor común B.', 'Identity and common factor B.') },
      { x: eq("B(A+A')+B", 'B·1+B', 'B+B', 'B'), why: L3('Complementació, neutre i idempotència.', 'Complementación, neutro e idempotencia.', 'Complement, identity and idempotence.') },
    ] },
];

export default {
  intro: [
    p(L3(
      `L'àlgebra de Boole és el càlcul dels circuits digitals: treballa amb variables que només valen 0 o 1 i amb tres operacions bàsiques (NOT, AND i OR). En aquest tema aprendràs a llegir i avaluar expressions com ${m("AB'+C")}, a fer-ne la taula de veritat i a simplificar-les amb les lleis.`,
      `El álgebra de Boole es el cálculo de los circuitos digitales: trabaja con variables que solo valen 0 o 1 y con tres operaciones básicas (NOT, AND y OR). En este tema aprenderás a leer y evaluar expresiones como ${m("AB'+C")}, a hacer su tabla de verdad y a simplificarlas con las leyes.`,
      `Boolean algebra is the calculus of digital circuits: it works with variables that are only 0 or 1 and with three basic operations (NOT, AND and OR). In this unit you will learn to read and evaluate expressions such as ${m("AB'+C")}, to build their truth tables and to simplify them with the laws.`)),
    { t: 'summary', mode: X, title: L3('el mapa del tema', 'el mapa del tema', 'the unit at a glance'), items: [
      L3('**Variables i funcions:** de l\'enunciat a la fórmula.', '**Variables y funciones:** del enunciado a la fórmula.', '**Variables and functions:** from the statement to the formula.'),
      L3('**Operacions:** NOT, AND, OR i les derivades NAND, NOR i XOR, amb dues o més entrades.', '**Operaciones:** NOT, AND, OR y las derivadas NAND, NOR y XOR, con dos o más entradas.', '**Operations:** NOT, AND, OR and the derived NAND, NOR and XOR, with two or more inputs.'),
      L3('**Lleis:** commutativa, associativa, distributiva, neutres, dominància, complementació, idempotència, involució i absorció.', '**Leyes:** conmutativa, asociativa, distributiva, neutros, dominancia, complementación, idempotencia, involución y absorción.', '**Laws:** commutative, associative, distributive, identity, dominance, complement, idempotence, involution and absorption.'),
      L3('**Dualitat** i **simplificació** pas a pas.', '**Dualidad** y **simplificación** paso a paso.', '**Duality** and step-by-step **simplification**.'),
    ] },
  ],
  sections: { 't3-var': s1, 't3-basic': s2, 't3-der': s3, 't3-multi': s4, 't3-laws1': s5, 't3-const': s6, 't3-abs': s7, 't3-dual': s8, 't3-simp': s9 },
  examEnd,
};
