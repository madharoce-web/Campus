/* Avaluador d'expressions amb la taula de prioritats del curs (I i O al nivell de · i +).
   Les funcions reben L(ca, es) per als missatges d'error. */

export function xpTokens(s, L) {
  const out = []; let i = 0;
  const OPS = ['<=', '>=', '<>', '!=', '==', '‖', '|R', '·', '*', '/', '+', '-', '−', '=', '≠', '<', '>', '≤', '≥', '(', ')'];
  while (i < s.length) {
    const c = s[i];
    if (/\s/.test(c)) { i++; continue; }
    let m = s.slice(i).match(/^\d+([.,]\d+)?/);
    if (m) { out.push({ k: 'num', v: parseFloat(m[0].replace(',', '.')) }); i += m[0].length; continue; }
    m = s.slice(i).match(/^[A-Za-zÀ-ÿ_][A-Za-zÀ-ÿ_0-9]*/);
    if (m) {
      const w = m[0], u = w.toUpperCase();
      if (u === 'I' || u === 'AND') out.push({ k: 'op', v: 'I' }); else if (u === 'O' || u === 'OR') out.push({ k: 'op', v: 'O' }); else if (u === 'NO' || u === 'NOT') out.push({ k: 'op', v: 'NO' });
      else if (u === 'DIV') out.push({ k: 'op', v: '‖' }); else if (u === 'MOD') out.push({ k: 'op', v: '|R' });
      else if (u === 'CERT' || u === 'V') out.push({ k: 'bool', v: true }); else if (u === 'FALS' || u === 'F') out.push({ k: 'bool', v: false });
      else out.push({ k: 'id', v: w });
      i += w.length; continue;
    }
    const op = OPS.find((o) => s.startsWith(o, i));
    if (!op) throw new Error(L('Símbol no reconegut: «', 'Símbolo no reconocido: «') + c + '»');
    const map = { '*': '·', '−': '-', '<=': '≤', '>=': '≥', '<>': '≠', '!=': '≠', '==': '=' };
    out.push({ k: 'op', v: map[op] || op }); i += op.length;
  }
  return out;
}

export function xpParse(toks, L) {
  let p = 0;
  const pk = () => toks[p], isOp = (...v) => pk() && pk().k === 'op' && v.includes(pk().v);
  const L4 = ['=', '≠', '<', '>', '≤', '≥'], L3 = ['+', '-', 'O'], L2 = ['·', '/', '‖', '|R', 'I'];
  function lv(ops, next) { let a = next(); while (isOp(...ops)) { const o = toks[p++].v; a = { o, a, b: next() }; } return a; }
  const rel = () => lv(L4, add), add = () => lv(L3, mul), mul = () => lv(L2, un);
  function un() {
    if (isOp('NO')) { p++; return { o: 'NO', a: un() }; }
    if (isOp('-')) { p++; return { o: 'neg', a: un() }; }
    const t = toks[p++];
    if (!t) throw new Error(L("L'expressió està incompleta", 'La expresión está incompleta'));
    if (t.k === 'num' || t.k === 'bool') return { lit: t.v };
    if (t.k === 'id') return { id: t.v };
    if (t.k === 'op' && t.v === '(') { const e = rel(); if (!isOp(')')) throw new Error(L('Falta un parèntesi de tancament', 'Falta un paréntesis de cierre')); p++; return { par: e }; }
    throw new Error(L("No s'esperava «", 'No se esperaba «') + t.v + '»');
  }
  const e = rel(); if (p < toks.length) throw new Error(L('Sobra «', 'Sobra «') + toks[p].v + '»'); return e;
}

export function xpShow(v) { return typeof v === 'boolean' ? (v ? 'V' : 'F') : Number.isInteger(v) ? String(v) : String(+v.toFixed(4)).replace('.', ','); }

export function xpEval(e, vars, steps, L) {
  if (e.par) return xpEval(e.par, vars, steps, L);
  if ('lit' in e) return e.lit;
  if (e.id) { if (!(e.id in vars)) throw new Error(L('La variable «', 'La variable «') + e.id + L('» no té valor', '» no tiene valor')); return vars[e.id]; }
  if (e.o === 'NO') { const a = xpEval(e.a, vars, steps, L); if (typeof a !== 'boolean') throw new Error(L('NO necessita un valor lògic i ha rebut ', 'NO necesita un valor lógico y ha recibido ') + xpShow(a)); steps.push('NO ' + xpShow(a) + ' = ' + xpShow(!a)); return !a; }
  if (e.o === 'neg') { const a = xpEval(e.a, vars, steps, L); if (typeof a !== 'number') throw new Error(L('El signe − necessita un nombre', 'El signo − necesita un número')); return -a; }
  const a = xpEval(e.a, vars, steps, L), b = xpEval(e.b, vars, steps, L), o = e.o;
  const num = (x) => { if (typeof x !== 'number') throw new Error(L("L'operador ", 'El operador ') + o + L(' necessita nombres i ha rebut ', ' necesita números y ha recibido ') + xpShow(x) + L(' (un valor lògic). Amb les prioritats del curs, cal posar parèntesis.', ' (un valor lógico). Con las prioridades del curso, hay que poner paréntesis.')); return x; };
  const bool = (x) => { if (typeof x !== 'boolean') throw new Error(L("L'operador ", 'El operador ') + o + L(' necessita valors lògics i ha rebut ', ' necesita valores lógicos y ha recibido ') + xpShow(x) + L('. Amb les prioritats del curs, cal posar parèntesis a les comparacions.', '. Con las prioridades del curso, hay que poner paréntesis en las comparaciones.')); return x; };
  let r;
  switch (o) {
    case '+': r = num(a) + num(b); break; case '-': r = num(a) - num(b); break; case '·': r = num(a) * num(b); break;
    case '/': if (num(b) === 0) throw new Error(L('Divisió per zero', 'División por cero')); r = num(a) / b; break;
    case '‖': if (!Number.isInteger(num(a)) || !Number.isInteger(num(b))) throw new Error(L('‖ necessita enters', '‖ necesita enteros')); if (b === 0) throw new Error(L('Divisió per zero', 'División por cero')); r = Math.trunc(a / b); break;
    case '|R': if (!Number.isInteger(num(a)) || !Number.isInteger(num(b))) throw new Error(L('|R necessita enters', '|R necesita enteros')); if (b === 0) throw new Error(L('Divisió per zero', 'División por cero')); r = a % b; break;
    case 'I': r = bool(a) && bool(b); break; case 'O': r = bool(a) || bool(b); break;
    case '=': r = a === b; break; case '≠': r = a !== b; break;
    case '<': r = num(a) < num(b); break; case '>': r = num(a) > num(b); break; case '≤': r = num(a) <= num(b); break; case '≥': r = num(a) >= num(b); break;
  }
  steps.push(xpShow(a) + ' ' + o + ' ' + xpShow(b) + ' = ' + xpShow(r));
  return r;
}

/** Com llegeix el curs l'expressió: fragments de text i parèntesis implícits ({ pl: '(' }). */
export function xpPar(e, top) {
  if (e.par) return xpPar(e.par, top);
  if ('lit' in e) return [xpShow(e.lit)];
  if (e.id) return [e.id];
  if (e.o === 'NO') return [{ pl: '(' }, 'NO ', ...xpPar(e.a), { pl: ')' }];
  if (e.o === 'neg') return ['−', ...xpPar(e.a)];
  const inner = [...xpPar(e.a), ' ' + e.o + ' ', ...xpPar(e.b)];
  return top ? inner : [{ pl: '(' }, ...inner, { pl: ')' }];
}
