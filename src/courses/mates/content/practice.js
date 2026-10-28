import { Z } from '../engine/z.js';

/**
 * Pràctica: tipus d'exercici curt i generador (prGen).
 * Codi original; l'idioma i les dependències arriben pel contenidor $ (un per idioma).
 */
export function makePractice($) {
  const { IND, IND_ORDER, L, NUMPRE, eqCands, hAst, hEval, sParse } = $;
  const PRK = () => [['comp', L('Comprensió', 'Comprensión', 'Set-builder notation')], ['buit', '∅ · {∅}'], ['venn', L('Pinta el Venn', 'Pinta el Venn', 'Shade the Venn diagram')], ['ident', L('Identitat?', '¿Identidad?', 'Identity?')], ['rel', L('Propietats', 'Propiedades', 'Properties')], ['mod', L('Classes mòdul n', 'Clases módulo n', 'Classes modulo n')], ['hasse', 'Hasse'], ['num', L('Nombres', 'Números', 'Numbers')], ['cx', L('Complexos', 'Complejos', 'Complex numbers')], ['ind', L('Inducció', 'Inducción', 'Induction')]];
  const VPOOL = ['A∩(B∪C)', '(A∪B)∖C', 'A∖(B∩C)', '(A∩B)ᶜ∩C', 'Aᶜ∩Bᶜ', '(A∖B)∪(B∖A)', 'A∪(Bᶜ∩C)', '(A∪B)ᶜ', 'A∩Bᶜ∩Cᶜ', '(A∩B)∪(Bᶜ∩C)', 'C∖(A∪B)', '(A∪C)∩(B∪C)', '(A∖C)∪(C∖B)', 'B∩(A∪C)ᶜ'];
  const IPOOL = [['A∖(B∪C)', '(A∖B)∖C'], ['A∩(B∖C)', '(A∩B)∖C'], ['(A∪B)∖C', '(A∖C)∪(B∖C)'], ['A∖(B∩C)', '(A∖B)∪(A∖C)'], ['(Aᶜ∪B)ᶜ', 'A∖B'], ['A∪(Aᶜ∩B)', 'A∪B'], ['(A∩B)∪(A∩Bᶜ)', 'A'], ['(A∩B)ᶜ', 'Aᶜ∪Bᶜ'],
    ['A∖(B∖C)', '(A∖B)∖C'], ['A∪(B∩C)', '(A∪B)∩C'], ['(A∪B)∖C', 'A∪(B∖C)'], ['A∖(B∪C)', '(A∖B)∪(A∖C)'], ['(A∩B)ᶜ', 'Aᶜ∩Bᶜ'], ['A∖B', 'B∖A'], ['A∪(B∖A)', 'B'], ['(A∖B)∪B', 'A'], ['A∩(B∪C)', '(A∩B)∪C'], ['(A∖B)∩C', 'A∩(C∖B)']];
  const HOPS = [['{∅, {∅}}', '∪', '{{{∅}}}'], ['{∅, {∅}}', '∩', '{∅}'], ['{{∅}}', '∖', '{∅}'], ['{∅, {{∅}}}', '∖', '{{∅}}'], ['{∅}', '∩', '{{∅}}'], ['{∅, {∅}}', '∖', '{∅, {∅}}'], ['{{∅}, {{∅}}}', '∩', '{∅, {∅}}'], ['∅', '∪', '{∅}'], ['{∅, {∅, {∅}}}', '∪', '{{∅}}'], ['{{∅, {∅}}}', '∖', '{∅, {∅}}']];
  const NUMX = NUMPRE.concat([{ t: '\\fr{6}{3}', k: 'N' }, { t: '−\\sq{16}', k: 'Z' }, { t: '\\sq{5}', k: 'I' }, { t: '1,2\\ov{3}', k: 'Q' }, { t: '−7i', k: 'C' }, { t: '\\fr{22}{7}', k: 'Q' }, { t: 'e', k: 'I' }, { t: '(\\sq{3})^{2}', k: 'N' }, { t: '|−\\fr{1}{3}|', k: 'Q' }]);
  function prGen(k) {
    const R = Z.rnd, pick = Z.pick;
    if (k === 'comp') { const kk = pick([-9, -4, -2, 0, 1, 2, 4, 9, 15, 16, 25, 7, 49]); const U = pick(['N', 'Z', 'Q', 'R', 'C']); return { kk, U, cands: eqCands(kk), sel: [] }; }
    if (k === 'buit') { const [x, o, y] = pick(HOPS); return { x, o, y, ans: hEval(hAst(x + ' ' + o + ' ' + y)) }; }
    if (k === 'venn') { const e = pick(VPOOL); return { e, m: Z.smask(sParse(e), 3), sel: 0 }; }
    if (k === 'ident') { const [l, r] = pick(IPOOL); const sw = R(2); return { l: sw ? r : l, r: sw ? l : r }; }
    if (k === 'rel') { const E = [1, 2, 3]; let G; do { G = []; E.forEach(a => E.forEach(b => { if (Math.random() < (a === b ? 0.7 : 0.35)) G.push(a + ',' + b); })); } while (!G.length); return { G, ans: {} }; }
    if (k === 'mod') { const n = 3 + R(7), a = R(70) - 30; return { n, a }; }
    if (k === 'hasse') { const n = pick([12, 18, 20, 24, 30, 36, 8, 16, 45]); return { n, E: Z.divisors(n) }; }
    if (k === 'num') return { it: pick(NUMX) };
    if (k === 'cx') { let a, b; do { a = R(9) - 4; b = R(9) - 4; } while (!a && !b); return { z: { re: a, im: b }, f: R(2) ? 'mod' : 'arg' }; }
    if (k === 'ind') { const key = pick(IND_ORDER); const st_ = IND[key].steps(); const ask = pick(['goal', 'hi']); return { key, ask, st_ }; }
  }
  return { PRK, VPOOL, IPOOL, HOPS, NUMX, prGen };
}
