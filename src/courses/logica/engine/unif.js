import { tokenize } from './cp0.js';

/** Unificació d'àtoms del CP1 (algorisme de la diferència, amb comprovació d'ocurrència). */

const VAR = /^[u-z][0-9']*$/;

export function parseAtom(s, L) {
  const t = tokenize(s, L);
  let p = 0;
  const pk = () => (t[p] ? t[p].v : null);
  const eat = (v) => { if (pk() !== v) throw new Error(L("S'esperava ", 'Se esperaba ', 'Expected ') + v); p++; };
  function args() { const a = [term()]; while (pk() === ',') { p++; a.push(term()); } eat(')'); return a; }
  function term() {
    if (!t[p] || t[p].k !== 'id') throw new Error(L("S'esperava un terme", 'Se esperaba un término', 'Expected a term'));
    const n = t[p++].v;
    if (pk() === '(') { p++; return { k: 'fn', n, a: args() }; }
    return VAR.test(n) ? { k: 'var', n } : { k: 'const', n };
  }
  let neg = false;
  if (pk() === '¬') { neg = true; p++; }
  if (!t[p] || t[p].k !== 'id' || !/^[A-Z]/.test(t[p].v)) throw new Error(L("Un àtom comença amb el nom d'un predicat en majúscula", 'Un átomo empieza con el nombre de un predicado en mayúscula', 'An atom starts with a predicate name in capitals'));
  const name = t[p++].v;
  eat('(');
  const a = { k: 'fn', n: name, a: args(), neg };
  if (p !== t.length) throw new Error(L('Sobra text', 'Sobra texto', 'Extra text'));
  return a;
}

export function ts(t) { return t.k === 'fn' ? t.n + '(' + t.a.map(ts).join(',') + ')' : t.n; }
function occurs(v, t) { return t.k === 'var' ? t.n === v : (t.k === 'fn' ? t.a.some((x) => occurs(v, x)) : false); }
function sub(t, v, r) {
  if (t.k === 'var') return t.n === v ? r : t;
  if (t.k === 'fn') return { k: 'fn', n: t.n, a: t.a.map((x) => sub(x, v, r)) };
  return t;
}
function diff(a, b) {
  if (ts(a) === ts(b)) return null;
  if (a.k !== 'fn' || b.k !== 'fn' || a.n !== b.n || a.a.length !== b.a.length) return [a, b];
  for (let i = 0; i < a.a.length; i++) { const d = diff(a.a[i], b.a[i]); if (d) return d; }
  return null;
}

export function unifySteps(a, b, L) {
  const steps = [];
  let phi = [];
  if (a.n !== b.n || a.a.length !== b.a.length) return { ok: false, why: L("Predicats diferents o amb diferent nombre d'arguments.", 'Predicados distintos o con distinto número de argumentos.', 'Different predicates or different numbers of arguments.'), steps };
  for (let guard = 0; guard < 30; guard++) {
    const d = diff(a, b);
    if (!d) return { ok: true, steps, phi };
    const x = d[0], y = d[1];
    let v, r;
    if (x.k === 'var' && !occurs(x.n, y)) { v = x.n; r = y; }
    else if (y.k === 'var' && !occurs(y.n, x)) { v = y.n; r = x; }
    else {
      const why = (x.k === 'var' || y.k === 'var') ? L("la variable apareix dins de l'altre terme (comprovació d'ocurrència)", 'la variable aparece dentro del otro término (comprobación de ocurrencia)', 'the variable occurs inside the other term (occurs check)') : L('cap dels dos elements és una variable', 'ninguno de los dos elementos es una variable', 'neither of the two elements is a variable');
      steps.push({ d, fail: why });
      return { ok: false, steps, why };
    }
    phi = phi.map((pp) => [pp[0], sub(pp[1], v, r)]); phi.push([v, r]);
    a = sub(a, v, r); b = sub(b, v, r);
    steps.push({ d, v, r, phi: phi.slice(), a: ts(a), b: ts(b) });
  }
  return { ok: false, steps, why: '?' };
}

export function phiStr(phi) { return phi.length ? '{' + phi.map((p) => p[0] + ' ← ' + ts(p[1])).join(', ') + '}' : 'ε'; }

/** Unifica dos àtoms escrits: { err } o { a, b, r } (r: resultat de unifySteps). */
export function unify(sa, sb, L) {
  try {
    const a = parseAtom(sa, L), b = parseAtom(sb, L);
    return { a, b, r: unifySteps(a, b, L) };
  } catch (e) {
    return { err: e.message };
  }
}
