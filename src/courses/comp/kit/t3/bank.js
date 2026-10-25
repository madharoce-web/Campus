/**
 * Pràctica del T3 (àlgebra de Boole): exercicis fixos «basats en» les activitats de classe del tema,
 * els tipus examen del final de la lliçó i famílies que en generen de nous a cada clic,
 * en tres nivells (fàcil, tipus examen, difícil).
 */
import { E, column, dual, ev, literals, toText, vars } from './boole.js';
import { L3, eq, m } from './h.js';
import unit from './unit.js';

const based = (ca, es, en) => L3('Activitat de classe del T3: ' + ca, 'Actividad de clase del T3: ' + es, 'T3 class activity: ' + en);

/* ---------- exercicis fixos ---------- */
const items = [
  { id: 't3-b-var', unit: 't3', level: 'easy', type: 'mcq', basedOn: based('variables lògiques', 'variables lógicas', 'logic variables'),
    q: L3('Variables: L = el llum està encès; P = hi ha algú a l\'habitació; D = és de dia. Situació: «de nit, l\'habitació és buida i el llum s\'ha quedat encès». Quins valors tenen (L, P, D)?',
      'Variables: L = la luz está encendida; P = hay alguien en la habitación; D = es de día. Situación: «de noche, la habitación está vacía y la luz se ha quedado encendida». ¿Qué valores tienen (L, P, D)?',
      'Variables: L = the light is on; P = someone is in the room; D = it is daytime. Situation: «at night, the room is empty and the light has been left on». What are the values of (L, P, D)?'),
    opts: ['(1, 0, 0)', '(1, 1, 0)', '(0, 0, 1)', '(1, 0, 1)'], answer: 0,
    steps: [L3('Llum encès → L = 1; buida → P = 0; de nit → D = 0.', 'Luz encendida → L = 1; vacía → P = 0; de noche → D = 0.', 'Light on → L = 1; empty → P = 0; night → D = 0.')] },
  { id: 't3-b-func', unit: 't3', level: 'easy', type: 'bool', basedOn: based('funcions lògiques', 'funciones lógicas', 'logic functions'),
    q: L3('Una porta automàtica s\'obre (S = 1) quan detecta una persona (P = 1) i no està bloquejada (B = 1 vol dir bloquejada). Escriu S.',
      'Una puerta automática se abre (S = 1) cuando detecta a una persona (P = 1) y no está bloqueada (B = 1 quiere decir bloqueada). Escribe S.',
      'An automatic door opens (S = 1) when it detects a person (P = 1) and it is not locked (B = 1 means locked). Write S.'),
    answer: "PB'", steps: [eq('S', "PB'")] },
  { id: 't3-b-nand', unit: 't3', level: 'easy', type: 'nums', basedOn: based('NAND i NOR', 'NAND y NOR', 'NAND and NOR'),
    q: L3('Calcula:', 'Calcula:', 'Compute:'),
    parts: [[m("(AB)'") + ' (A = 1, B = 0)', 1], [m("(AB)'") + ' (A = 1, B = 1)', 0], [m("(A+B)'") + ' (A = 0, B = 0)', 1], [m("(A+B)'") + ' (A = 1, B = 0)', 0]].map(([label, answer]) => ({ label, answer })),
    steps: [L3('NAND: només dona 0 amb totes les entrades a 1. NOR: només dona 1 amb totes a 0.', 'NAND: solo da 0 con todas las entradas a 1. NOR: solo da 1 con todas a 0.', 'NAND gives 0 only when all inputs are 1. NOR gives 1 only when all are 0.')] },
  { id: 't3-b-tt', unit: 't3', level: 'exam', type: 'tt', basedOn: based('AND i NOT', 'AND y NOT', 'AND and NOT'), expr: "A'BC'", out: 'S',
    q: L3(`Completa la taula de ${m("A'BC'")} i digues en quines files val 1.`, `Completa la tabla de ${m("A'BC'")} y di en qué filas vale 1.`, `Complete the table for ${m("A'BC'")} and say in which rows it is 1.`),
    steps: [L3('Només a la fila A = 0, B = 1, C = 0.', 'Solo en la fila A = 0, B = 1, C = 0.', 'Only in the row A = 0, B = 1, C = 0.')] },
  { id: 't3-b-multi', unit: 't3', level: 'exam', type: 'match', basedOn: based('més de dues entrades', 'más de dos entradas', 'more than two inputs'),
    q: L3('Per a quatre entrades A, B, C i D, relaciona cada operació amb la condició perquè valgui 1.', 'Para cuatro entradas A, B, C y D, relaciona cada operación con la condición para que valga 1.', 'For four inputs A, B, C and D, match each operation with the condition for it to be 1.'),
    items: ['AND', 'OR', 'NAND', 'NOR', 'XOR'].map((q) => ({ q, o: [L3('totes a 1', 'todas a 1', 'all at 1'), L3('almenys una a 1', 'al menos una a 1', 'at least one at 1'), L3('almenys una a 0', 'al menos una a 0', 'at least one at 0'), L3('totes a 0', 'todas a 0', 'all at 0'), L3('nombre senar d\'uns', 'número impar de unos', 'odd number of ones')] })),
    answer: [0, 1, 2, 3, 4] },
  { id: 't3-b-sint', unit: 't3', level: 'exam', type: 'nums', basedOn: based('síntesi', 'síntesis', 'synthesis'),
    q: L3('Amb A = 0, B = 0 i C = 1, calcula:', 'Con A = 0, B = 0 y C = 1, calcula:', 'With A = 0, B = 0 and C = 1, compute:'),
    parts: [['S1', 'ABC'], ['S2', 'A+B+C'], ['S3', "(ABC)'"], ['S4', "(A+B+C)'"], ['S5', 'A⊕B⊕C']].map(([l, f]) => ({ label: l + ' = ' + m(f), answer: ev(E(f), { A: 0, B: 0, C: 1 }) })) },
  { id: 't3-b-dist', unit: 't3', level: 'exam', type: 'bool', basedOn: based('llei distributiva', 'ley distributiva', 'distributive law'),
    q: L3(`Treu factor comú: ${m("XY+XZ'+XW")}`, `Saca factor común: ${m("XY+XZ'+XW")}`, `Factor out: ${m("XY+XZ'+XW")}`), answer: "X(Y+Z'+W)", maxLit: 4, steps: [eq("XY+XZ'+XW", "X(Y+Z'+W)")] },
  { id: 't3-b-comp', unit: 't3', level: 'exam', type: 'bool', basedOn: based('llei de complementació', 'ley de complementación', 'complement law'),
    q: L3(`Simplifica ${m("B+C+B'")}.`, `Simplifica ${m("B+C+B'")}.`, `Simplify ${m("B+C+B'")}.`), answer: '1', maxLit: 0,
    steps: [{ x: eq("B+C+B'", "1+C", '1'), why: L3('Commutativa per ajuntar B i B̄, complementació i dominància.', 'Conmutativa para juntar B y B̄, complementación y dominancia.', 'Commutative to bring B and B̄ together, complement and dominance.') }] },
  { id: 't3-b-abs', unit: 't3', level: 'exam', type: 'bool', basedOn: based('llei d\'absorció', 'ley de absorción', 'absorption law'),
    q: L3(`Simplifica ${m("C'(C'+A+B)")}.`, `Simplifica ${m("C'(C'+A+B)")}.`, `Simplify ${m("C'(C'+A+B)")}.`), answer: "C'", maxLit: 1,
    steps: [L3(`Absorció amb ${eq('X', "C'")}: ${eq('X(X+A+B)', 'X')}.`, `Absorción con ${eq('X', "C'")}: ${eq('X(X+A+B)', 'X')}.`, `Absorption with ${eq('X', "C'")}: ${eq('X(X+A+B)', 'X')}.`)] },
  { id: 't3-b-chain', unit: 't3', level: 'hard', type: 'bool',
    q: L3(`Simplifica al màxim ${m("XYZ+XYZ'+XY'Z+XY'Z'")}.`, `Simplifica al máximo ${m("XYZ+XYZ'+XY'Z+XY'Z'")}.`, `Simplify ${m("XYZ+XYZ'+XY'Z+XY'Z'")} as far as possible.`), answer: 'X', maxLit: 1,
    steps: [eq("XYZ+XYZ'+XY'Z+XY'Z'", "XY(Z+Z')+XY'(Z+Z')", "XY+XY'", "X(Y+Y')", 'X')] },
  { id: 't3-b-proof', unit: 't3', level: 'hard', type: 'open', space: 'lines:8',
    q: L3(`Demostra amb les lleis que ${eq("AB+AB'C+AB'C'", 'A')}.`, `Demuestra con las leyes que ${eq("AB+AB'C+AB'C'", 'A')}.`, `Using the laws, prove that ${eq("AB+AB'C+AB'C'", 'A')}.`),
    steps: [
      { x: eq("AB+AB'C+AB'C'", "AB+AB'(C+C')"), why: L3('Factor comú AB̄.', 'Factor común AB̄.', 'Common factor AB̄.') },
      { x: eq("AB+AB'(C+C')", "AB+AB'"), why: L3('Complementació i neutre.', 'Complementación y neutro.', 'Complement and identity.') },
      { x: eq("AB+AB'", "A(B+B')", 'A'), why: L3('Factor comú A, complementació i neutre.', 'Factor común A, complementación y neutro.', 'Common factor A, complement and identity.') },
    ] },
  { id: 't3-b-dual', unit: 't3', level: 'hard', type: 'bool',
    q: L3(`La identitat ${eq("A+A'B", 'A+B')} és certa. Escriu el costat esquerre de la seva dual.`, `La identidad ${eq("A+A'B", 'A+B')} es cierta. Escribe el lado izquierdo de su dual.`, `The identity ${eq("A+A'B", 'A+B')} holds. Write the left-hand side of its dual.`),
    answer: "A(A'+B)", steps: [L3(`Dual: ${eq("A(A'+B)", 'AB')}. El costat esquerre és ${m("A(A'+B)")}.`, `Dual: ${eq("A(A'+B)", 'AB')}. El lado izquierdo es ${m("A(A'+B)")}.`, `Dual: ${eq("A(A'+B)", 'AB')}. The left-hand side is ${m("A(A'+B)")}.`)] },
  // els tipus examen del final de la lliçó també surten a la pràctica i als simulacres
  ...unit.examEnd.map((x) => ({ ...x, unit: 't3', src: 'new' })),
// minuts que calen de veritat (per omplir un simulacre amb prou exercicis)
].map((x) => ({ min: { mcq: 2, nums: 3, match: 3, tt: 5, bool: x.level === 'hard' ? 8 : 4, open: 10 }[x.type], ...x }));

/* ---------- famílies generades ---------- */
const LETTERS = [['A', 'B', 'C'], ['X', 'Y', 'Z'], ['P', 'Q', 'R']];
/** Canvia les lletres d'una plantilla escrita amb A, B, C per les de la tria. */
const rename = (s, set) => s.replace(/[ABC]/g, (c) => set['ABC'.indexOf(c)]);
const OPS2 = [['AND', 'AB'], ['OR', 'A+B'], ['NAND', "(AB)'"], ['NOR', "(A+B)'"], ['XOR', 'A⊕B']];

const families = [
  { id: 't3-f-eval', unit: 't3', level: 'easy', gen: (r) => {
    const [name, f] = r.pick(OPS2), a = r.int(0, 1), b = r.int(0, 1);
    return { type: 'mcq', min: 2, title: L3('Avalua una operació', 'Evalúa una operación', 'Evaluate an operation'),
      q: L3(`Quant val ${m(f)} (${name}) amb A = ${a} i B = ${b}?`, `¿Cuánto vale ${m(f)} (${name}) con A = ${a} y B = ${b}?`, `What is ${m(f)} (${name}) with A = ${a} and B = ${b}?`),
      opts: ['0', '1'], answer: ev(E(f), { A: a, B: b }) };
  } },
  { id: 't3-f-law', unit: 't3', level: 'easy', gen: (r) => {
    const set = r.pick(LETTERS);
    const LAWS = [
      [L3('Absorció', 'Absorción', 'Absorption'), ['A+AB', 'A'], ['A(A+B)', 'A']],
      [L3('Complementació', 'Complementación', 'Complement'), ["A+A'", '1'], ["AA'", '0']],
      [L3('Idempotència', 'Idempotencia', 'Idempotence'), ['A+A', 'A'], ['AA', 'A']],
      [L3('Dominància', 'Dominancia', 'Dominance'), ['A+1', '1'], ['A·0', '0']],
      [L3('Element neutre', 'Elemento neutro', 'Identity element'), ['A+0', 'A'], ['A·1', 'A']],
      [L3('Distributiva', 'Distributiva', 'Distributive'), ['A(B+C)', 'AB+AC'], ['AB+AC', 'A(B+C)']],
      [L3('Involució', 'Involución', 'Involution'), ["A''", 'A'], ["A''", 'A']],
      [L3('Commutativa', 'Conmutativa', 'Commutative'), ['A+B', 'B+A'], ['AB', 'BA']],
    ];
    const order = r.shuffle(LAWS.map((_, i) => i)).slice(0, 4);
    const k = order[r.int(0, 3)];
    const [, x, y] = LAWS[k];
    const [lhs, rhs] = r.int(0, 1) ? x : y;
    return { type: 'mcq', min: 2, title: L3('Quina llei és?', '¿Qué ley es?', 'Which law is it?'),
      q: L3(`Quina llei diu que ${eq(rename(lhs, set), rename(rhs, set))}?`, `¿Qué ley dice que ${eq(rename(lhs, set), rename(rhs, set))}?`, `Which law states that ${eq(rename(lhs, set), rename(rhs, set))}?`),
      opts: order.map((i) => LAWS[i][0]), answer: order.indexOf(k) };
  } },
  { id: 't3-f-tt2', unit: 't3', level: 'easy', gen: (r) => {
    const f = r.pick(["A'B", "AB'", "A'+B", "A+B'", "(AB)'", "(A+B)'", "A'B'", "A⊕B'"]);
    return { type: 'tt', min: 3, expr: f, out: 'S', title: L3('Taula de dues variables', 'Tabla de dos variables', 'Two-variable table'),
      q: L3(`Completa la taula de ${m(f)}.`, `Completa la tabla de ${m(f)}.`, `Complete the table for ${m(f)}.`) };
  } },
  { id: 't3-f-tt3', unit: 't3', level: 'exam', gen: (r) => {
    const set = r.pick(LETTERS);
    const f = rename(r.pick(["A'BC", "AB'+C", "(A+B)C'", "A'(B+C)", "AB+A'C", "(A+B')(B+C)", "A⊕B⊕C", "(AB)'C", "(A+B+C)'", "A'B'+BC"]), set);
    const names = vars(E(f));
    return { type: 'tt', min: 5, expr: f, vars: names, out: 'S', title: L3('Taula de tres variables', 'Tabla de tres variables', 'Three-variable table'),
      q: L3(`Completa la taula de ${m(f)}.`, `Completa la tabla de ${m(f)}.`, `Complete the table for ${m(f)}.`),
      steps: [L3('Sortida, de la fila 000 a la 111: ', 'Salida, de la fila 000 a la 111: ', 'Output, from row 000 to 111: ') + column(E(f), names).join(' ')] };
  } },
  { id: 't3-f-simp', unit: 't3', level: 'exam', gen: (r) => {
    const set = r.pick(LETTERS);
    const [src, ans] = r.pick([["A+A'+B", '1'], ["AA'B", '0'], ['A+AB', 'A'], ['A(A+B)', 'A'], ["AB+AB'", 'A'], ['(A+A)·1', 'A'], ['AB+ABC', 'AB'], ["A(B+B')", 'A'], ["(A+0)(A+A')", 'A'], ["AB'+AB'C", "AB'"]]);
    const s = rename(src, set), a = rename(ans, set);
    return { type: 'bool', min: 4, answer: a, maxLit: literals(E(a)), title: L3('Simplifica', 'Simplifica', 'Simplify'),
      q: L3(`Simplifica al màxim ${m(s)}.`, `Simplifica al máximo ${m(s)}.`, `Simplify ${m(s)} as far as possible.`),
      steps: [eq(s, a)] };
  } },
  { id: 't3-f-dual', unit: 't3', level: 'exam', gen: (r) => {
    const set = r.pick(LETTERS);
    const f = rename(r.pick(['A+BC', 'A(B+C)', "AB+A'C", '(A+B)(A+C)', 'A+0', 'A·1+B', "A+B'C+0", "(A+B)C'"]), set);
    const d = toText(dual(E(f)));
    return { type: 'bool', min: 3, answer: d, title: L3('Escriu la dual', 'Escribe la dual', 'Write the dual'),
      q: L3(`Escriu la dual de ${m(f)}.`, `Escribe la dual de ${m(f)}.`, `Write the dual of ${m(f)}.`),
      steps: [L3(`+ ↔ ·, 0 ↔ 1, mantenint els grups: ${m(d)}.`, `+ ↔ ·, 0 ↔ 1, manteniendo los grupos: ${m(d)}.`, `+ ↔ ·, 0 ↔ 1, keeping the groups: ${m(d)}.`)] };
  } },
  { id: 't3-f-hard', unit: 't3', level: 'hard', gen: (r) => {
    const set = r.pick(LETTERS);
    const [src, ans] = r.pick([["(A+B)(A+B')", 'A'], ["(A+B)(A'+B)", 'B'], ["ABC+ABC'+AB'", 'A'], ["AB+AB'C+AB'C'", 'A'], ["A'B'+A'B+AB'+AB", '1'], ["(AB+AB')(A+C)", 'A'], ["AB'C+AB'C'+A'B'", "B'"]]);
    const s = rename(src, set), a = rename(ans, set);
    return { type: 'bool', min: 7, answer: a, maxLit: literals(E(a)), title: L3('Simplificació en cadena', 'Simplificación en cadena', 'Chained simplification'),
      q: L3(`Simplifica al màxim ${m(s)}, dient quina llei fas servir a cada pas.`, `Simplifica al máximo ${m(s)}, diciendo qué ley usas en cada paso.`, `Simplify ${m(s)} as far as possible, naming the law you use at each step.`),
      steps: [eq(s, a)] };
  } },
  { id: 't3-f-nand3', unit: 't3', level: 'hard', gen: (r) => {
    const set = r.pick(LETTERS);
    const f = rename(r.pick(["(AB'C)'", "(A'+B+C')'", "(A⊕B)'C", "(A'B'C')'", "((A+B)C)'"]), set);
    const env = Object.fromEntries(set.map((n) => [n, r.int(0, 1)]));
    return { type: 'mcq', min: 3, opts: ['0', '1'], answer: ev(E(f), env), title: L3('Negacions encadenades', 'Negaciones encadenadas', 'Chained negations'),
      q: L3(`Quant val ${m(f)} amb ${set.map((n) => n + ' = ' + env[n]).join(', ')}?`, `¿Cuánto vale ${m(f)} con ${set.map((n) => n + ' = ' + env[n]).join(', ')}?`, `What is ${m(f)} with ${set.map((n) => n + ' = ' + env[n]).join(', ')}?`) };
  } },
];

export default { items, families };
