/**
 * Generadors de preguntes (notació, prioritats, esquemes, teoria) i el simulacre de CP1:
 * creació de l'examen i correcció (70 % jocs de proves i 30 % notació a cada algorisme).
 * Mòdul pur, sense DOM.
 */
import { check, lint, parseExprText, run } from './interp.js';
import { pick, rnd, shuffle, shuffled } from './random.js';
import { EXS } from '../data/exercises.js';
import { ESQ, NOTA, TEO } from '../data/quiz.js';
import { TEMPLATE } from '../data/editor.js';

const B2 = (ca, es) => ({ ca, es });

/* ---------- preguntes de tria ---------- */
export function newNota() { return { it: pick(NOTA), r: shuffled(0, [1, 2, 3]), ans: null, done: false }; }
export function newTeo() { return { it: pick(TEO), r: shuffled(0, [1, 2, 3]), ans: null, done: false }; }
export function newEsq() {
  const it = pick(ESQ), idx = shuffle([...Array(it.o.length).keys()]);
  return { it, r: { opts: idx, gi: idx.indexOf(it.g) }, ans: null, done: false };
}
let seq = 0;
export function newPrio() { return { g: genPrio(), ans: null, done: false, id: ++seq }; }

/* ---------- prioritats ---------- */
export function parenOf(x) {
  const P = { or: 'O', and: 'I', '||': 'O', '+': '+', '-': '−', '·': '·', '/': '/', div: '‖', mod: '|R' };
  if (x.o === 'lit') return typeof x.v === 'boolean' ? (x.v ? 'cert' : 'fals') : String(x.v);
  if (x.o === 'var') return x.v; if (x.o === 'neg') return '−' + parenOf(x.a); if (x.o === 'not') return 'NO ' + parenOf(x.a);
  if (x.o === 'rel') return '(' + parenOf(x.a) + ' ' + x.r + ' ' + parenOf(x.b) + ')';
  return '(' + parenOf(x.a) + ' ' + P[x.o] + ' ' + parenOf(x.b) + ')';
}
export function genPrio() {
  const n = () => 2 + rnd(18), b = () => pick(['cert', 'fals']);
  const T = pick([
    () => n() + ' + ' + n() + ' ‖ ' + (2 + rnd(5)), () => n() + ' ‖ ' + (2 + rnd(4)) + ' · ' + (2 + rnd(4)), () => n() + ' · ' + (2 + rnd(4)) + ' |R ' + (3 + rnd(6)),
    () => '(' + n() + ' + ' + n() + ') |R ' + (3 + rnd(6)), () => (20 + rnd(40)) + ' − ' + n() + ' |R ' + (3 + rnd(5)) + ' + ' + (1 + rnd(9)), () => (20 + rnd(80)) + ' ‖ ' + (2 + rnd(4)) + ' |R ' + (2 + rnd(5)),
    () => (20 + rnd(80)) + ' |R ' + (6 + rnd(9)) + ' ‖ ' + (2 + rnd(3)), () => n() + ' / ' + pick([2, 4, 5, 8]) + ' + ' + n(), () => n() + ' − ' + n() + ' · ' + (2 + rnd(3)) + ' ‖ ' + (2 + rnd(3)),
    () => 'NO ' + b() + ' I ' + b(), () => b() + ' O ' + b() + ' I ' + b(), () => 'NO (' + b() + ' O ' + b() + ') I ' + b(), () => b() + ' I NO ' + b() + ' O ' + b(), () => 'NO ' + b() + ' O NO ' + b() + ' I ' + b()]);
  const e = T(); const r = run('ENTORN\nINICI_SEQÜÈNCIA\nEscriure ' + e + '\nFI_SEQÜÈNCIA', []);
  return { e, v: r.out[0], bool: /cert|fals/.test(r.out[0]), par: parenOf(parseExprText(e, 1)) };
}
/** Resposta correcta? (accepta coma decimal i petites diferències en reals) */
export function prioOk(g, ans) {
  return String(ans).trim().replace(',', '.') === g.v || (!g.bool && Math.abs(parseFloat(String(ans).replace(',', '.')) - parseFloat(g.v)) < 1e-6);
}
/** Avaluació errònia d'esquerra a dreta, per als distractors. */
export function ltr(e) {
  const t = e.split(' ').filter(Boolean); if (t.some((x) => /[()]/.test(x))) return null;
  let v = parseFloat(t[0]); for (let i = 1; i < t.length; i += 2) { const o = t[i], b = parseFloat(t[i + 1]); v = o === '+' ? v + b : o === '−' ? v - b : o === '·' ? v * b : o === '/' ? v / b : o === '‖' ? Math.trunc(v / b) : o === '|R' ? v % b : v; }
  return isFinite(v) ? String(+v.toFixed(4)) : null;
}

/* ---------- simulacre ---------- */
export const EXAM_MIN = 90;
/** Examen nou: tres algorismes (seqüencial o condicional, recorregut i cerca) i vuit preguntes curtes. */
export function newExam(now) {
  const byK = (k) => shuffle(EXS.filter((e) => k.includes(e.k)))[0];
  const ex = [byK(['seq', 'cond']), byK(['rec']), byK(['cerca'])];
  const mc = [];
  shuffle(TEO).slice(0, 3).forEach((it) => { const r = shuffled(0, [1, 2, 3]); mc.push({ q: it.q, opts: r.opts.map((i) => it.o[i]), gi: r.gi, w: it.o[0], src: 'teo' }); });
  shuffle(NOTA).slice(0, 2).forEach((it) => { const r = shuffled(0, [1, 2, 3]); mc.push({ q: B2('Com s\'escriu al pseudocodi del curs?', '¿Cómo se escribe en el pseudocódigo del curso?'), code: it.c, opts: r.opts.map((i) => it.o[i]), gi: r.gi, w: it.o[0], mono: true }); });
  shuffle(ESQ).slice(0, 2).forEach((it) => { const idx = shuffle([...Array(it.o.length).keys()]); mc.push({ q: it.q, opts: idx.map((i) => it.o[i]), gi: idx.indexOf(it.g), w: it.w }); });
  let g; do g = genPrio(); while (g.bool);
  const alts = [ltr(g.e), String(+g.v + 1), String(+g.v - 1), String(+g.v + 2)].filter((x, i, a) => x != null && x !== g.v && a.indexOf(x) === i).slice(0, 3);
  const r = shuffled(g.v, alts); mc.push({ q: B2('Quant val aquesta expressió?', '¿Cuánto vale esta expresión?'), code: g.e, opts: r.opts, gi: r.gi, w: g.par + ' = ' + g.v, mono: true });
  return { id: ++seq, ex, mc, ans: {}, code: {}, done: false, res: null, end: now + EXAM_MIN * 60000 };
}
/** Correcció: cada algorisme val 2,5 (0,7 proves + 0,3 notació) i les preguntes, 2,5 en total. */
export function gradeExam(xm) {
  const ex = xm.ex.map((e, k) => {
    const src = xm.code[k] || '', lt = lint(src), c = check(src, e.tests);
    const E = lt.msgs.filter((m) => m.lv === 'E').length, W = lt.msgs.filter((m) => m.lv === 'W').length;
    const pass = c.parsed ? c.results.filter((r) => r.ok).length / c.results.length : 0, nota = src.trim() === TEMPLATE.trim() || !src.trim() ? 0 : Math.max(0, 1 - .25 * E - .1 * W);
    return { lt, c, score: .7 * pass + .3 * nota };
  });
  const mc = xm.mc.map((q, j) => xm.ans[j] === q.gi);
  const total = ex.reduce((a, x) => a + x.score * 2.5, 0) + mc.filter(Boolean).length * 2.5 / mc.length;
  return { ex, mc, total };
}
/** Data curta dd/mm per a l'historial d'exàmens. */
export function dayMonth(d) {
  return String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0');
}
/** Rellotge mm:ss del temps que queda. */
export function clockText(end, now) {
  const s = Math.max(0, Math.round((end - now) / 1000));
  return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
}
