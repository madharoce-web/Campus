import { test, expect } from '@playwright/test';
import { E, column, dual, equivalent, errText, literals, parse, toTeX, toText } from '../../src/courses/comp/kit/t3/boole.js';
import bank from '../../src/courses/comp/kit/t3/bank.js';
import { rngOf } from '../../src/courses/_kit/bank.js';

// Motor de l'àlgebra de Boole del T3 de Computadors (sense navegador).

test('lectura: notacions, prioritat i errors', () => {
  const t = (s) => toText(E(s));
  expect(t("A'BC")).toBe("A'·B·C");
  expect(t('A·B*C.D')).toBe('A·B·C·D');
  expect(t('A(B+C)')).toBe('A·(B + C)');
  expect(t("(A+B)'")).toBe("(A + B)'");
  expect(t('!A + ~B + ¬C')).toBe("A' + B' + C'");
  expect(t('a^b')).toBe('A ⊕ B');
  expect(t('Ā·B')).toBe("A'·B");
  expect(t("A''")).toBe("A''");
  // prioritat: negació > producte > o exclusiva > suma
  expect(column(E('A+BC'), ['A', 'B', 'C']).join('')).toBe('00011111');
  expect(t('A⊕BC')).toBe('A ⊕ B·C');
  for (const [s, err] of [['', 'empty'], ['A+', 'operand'], ['(A+B', 'close'], ['A+B)', 'open'], ['A#B', 'char'], ['·A', 'start']]) {
    const r = parse(s);
    expect(r.err, s).toBe(err);
    expect(errText(r, 2).length).toBeGreaterThan(5);
  }
});

test('lleis: totes les identitats del tema són equivalències', () => {
  const laws = [['A+B', 'B+A'], ['AB', 'BA'], ['(A+B)+C', 'A+(B+C)'], ['(AB)C', 'A(BC)'], ['A(B+C)', 'AB+AC'], ['A+0', 'A'], ['A·1', 'A'],
    ['A+1', '1'], ['A·0', '0'], ["A+A'", '1'], ["AA'", '0'], ['A+A', 'A'], ['AA', 'A'], ["A''", 'A'], ['A+AB', 'A'], ['A(A+B)', 'A'],
    ['A⊕B', "A'B+AB'"], ['A+BC', '(A+B)(A+C)'], ["(AB)'", "A'+B'"], ["(A+B)'", "A'B'"]];
  for (const [a, b] of laws) {
    expect(equivalent(E(a), E(b)).eq, a + ' = ' + b).toBe(true);
    // i la seva dual també (principi de dualitat), quan no hi ha o exclusiva
    if (!a.includes('⊕')) expect(equivalent(dual(E(a)), dual(E(b))).eq, 'dual ' + a).toBe(true);
  }
  const no = equivalent(E("(AB)'"), E("A'B'"));
  expect(no.eq).toBe(false);
  expect(no.env).toEqual({ A: 0, B: 1 });
});

test('TeX, literals i taules', () => {
  expect(toTeX(E("(A+B)'C"))).toBe('\\overline{A+B}\\cdot C');
  expect(toTeX(E("A'"))).toBe('\\overline{A}');
  expect(literals(E("AB'+A'B"))).toBe(4);
  expect(column(E("A'BC"), ['A', 'B', 'C']).join('')).toBe('00010000');
  expect(column(E('A⊕B⊕C'), ['A', 'B', 'C']).join('')).toBe('01101001');
  expect(toText(dual(E('A+BC')))).toBe('A·(B + C)');
});

test('banc del T3: respostes ben escrites i famílies estables', () => {
  for (const ex of bank.items) {
    if (ex.type === 'bool') expect(parse(ex.answer).ast, ex.id).toBeTruthy();
    if (ex.type === 'tt') expect(parse(ex.expr).ast, ex.id).toBeTruthy();
  }
  for (const f of bank.families) {
    const a = f.gen(rngOf(7), 7), b = f.gen(rngOf(7), 7);
    expect(a, f.id).toEqual(b);
    if (a.type === 'bool') expect(parse(a.answer).ast, f.id).toBeTruthy();
  }
});
