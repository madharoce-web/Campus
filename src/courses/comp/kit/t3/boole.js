/**
 * Àlgebra de Boole: lectura d'expressions, avaluació, taules de veritat i equivalència.
 * (Mateix estil que l'analitzador de lògica de proposicions de src/courses/logica/engine/cp0.js.)
 *
 * Escriptura acceptada (lletres = variables, majúscules o minúscules):
 *   producte   A·B   A*B   A.B   AB   A(B+C)   (A+B)(A+C)
 *   suma       A+B   A|B
 *   o exclusiva A⊕B  A^B   A xor B
 *   negació    A'   !A   ¬A   ~A   (A+B)'   Ā (lletra amb barra)
 *   constants  0  1
 * Prioritat: negació > producte > o exclusiva > suma (els parèntesis i les barres agrupen).
 *
 * Arbre: { k: 'var', v } | { k: 'const', v: 0|1 } | { k: 'not', a } | { k: 'and'|'or'|'xor', xs: [...] }
 */

const MACRON = { 'Ā': "A'", 'Ē': "E'", 'Ī': "I'", 'Ō': "O'", 'Ū': "U'", 'Ȳ': "Y'", 'Ḡ': "G'" };

/** Errors de lectura (en tres idiomes). */
const ERR = {
  empty: ['Escriu una expressió.', 'Escribe una expresión.', 'Type an expression.'],
  char: ['Caràcter que no s’entén: ', 'Carácter que no se entiende: ', 'Unrecognised character: '],
  close: ['Falta tancar un parèntesi.', 'Falta cerrar un paréntesis.', 'A parenthesis is not closed.'],
  open: ['Sobra un parèntesi de tancar.', 'Sobra un paréntesis de cierre.', 'There is an extra closing parenthesis.'],
  operand: ['Falta una variable o un parèntesi després de ', 'Falta una variable o un paréntesis después de ', 'A variable or parenthesis is missing after '],
  start: ['L’expressió no pot començar amb ', 'La expresión no puede empezar con ', 'The expression cannot start with '],
};

function tokenize(src) {
  let s = String(src ?? '').replace(/[ĀĒĪŌŪȲḠ]/g, (c) => MACRON[c]).replace(/([A-Za-z0-1)])̅/g, "$1'");
  s = s.replace(/\bxor\b/gi, '⊕').replace(/\band\b/gi, '·').replace(/\bor\b/gi, '+').replace(/\bnot\b/gi, '¬');
  const out = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (/\s/.test(c)) continue;
    if (/[A-Za-z]/.test(c)) out.push({ t: 'var', v: c.toUpperCase(), i });
    else if (c === '0' || c === '1') out.push({ t: 'const', v: +c, i });
    else if ('·*.∙⋅∧&'.includes(c)) out.push({ t: 'and', i });
    else if ('+|∨'.includes(c)) out.push({ t: 'or', i });
    else if ('⊕^'.includes(c)) out.push({ t: 'xor', i });
    else if ('¬!~'.includes(c)) out.push({ t: 'not', i });
    else if ("'’′`".includes(c)) out.push({ t: 'post', i });
    else if (c === '(' || c === '[') out.push({ t: '(', i });
    else if (c === ')' || c === ']') out.push({ t: ')', i });
    else return { err: 'char', arg: c, i };
  }
  return { toks: out };
}

/** Llegeix una expressió. Retorna { ast } o { err, arg } (err: clau d'ERR). */
export function parse(src) {
  const tk = tokenize(src);
  if (tk.err) return tk;
  const t = tk.toks;
  if (!t.length) return { err: 'empty' };
  let p = 0;
  const peek = () => t[p] && t[p].t;
  const fail = (err, arg) => { const e = new Error(err); e.k = err; e.arg = arg; throw e; };
  const SYM = { and: '·', or: '+', xor: '⊕', not: '¬', post: "'", ')': ')' };
  const startsPrimary = () => ['var', 'const', '(', 'not'].includes(peek());
  function nary(k, xs) { const flat = []; xs.forEach((x) => (x.k === k ? flat.push(...x.xs) : flat.push(x))); return flat.length === 1 ? flat[0] : { k, xs: flat }; }
  function orE() {
    const xs = [xorE()];
    while (peek() === 'or') { p++; if (!startsPrimary()) fail('operand', '+'); xs.push(xorE()); }
    return nary('or', xs);
  }
  function xorE() {
    const xs = [andE()];
    while (peek() === 'xor') { p++; if (!startsPrimary()) fail('operand', '⊕'); xs.push(andE()); }
    return nary('xor', xs);
  }
  function andE() {
    const xs = [unary()];
    for (;;) {
      if (peek() === 'and') { p++; if (!startsPrimary()) fail('operand', '·'); xs.push(unary()); }
      else if (startsPrimary()) xs.push(unary()); // juxtaposició: AB, A(B+C)
      else break;
    }
    return nary('and', xs);
  }
  function unary() {
    if (peek() === 'not') { p++; if (!startsPrimary()) fail('operand', '¬'); return { k: 'not', a: unary() }; }
    let a = primary();
    while (peek() === 'post') { p++; a = { k: 'not', a }; }
    return a;
  }
  function primary() {
    const x = t[p];
    if (!x) fail('operand', SYM[t[p - 1]?.t] || '');
    if (x.t === 'var') { p++; return { k: 'var', v: x.v }; }
    if (x.t === 'const') { p++; return { k: 'const', v: x.v }; }
    if (x.t === '(') {
      p++;
      const e = orE();
      if (peek() !== ')') fail('close');
      p++;
      return e;
    }
    if (x.t === ')') fail(p === 0 ? 'start' : 'open', ')');
    fail(p === 0 ? 'start' : 'operand', SYM[x.t] || x.t);
    return null;
  }
  try {
    const ast = orE();
    if (p < t.length) fail(t[p].t === ')' ? 'open' : 'operand', SYM[t[p].t] || '');
    return { ast };
  } catch (e) {
    if (!e.k) throw e;
    return { err: e.k, arg: e.arg };
  }
}

/** Missatge d'error en l'idioma: li = 0 (ca), 1 (es), 2 (en). */
export const errText = (r, li) => (ERR[r.err] ? ERR[r.err][li] + (r.arg != null && r.err !== 'close' && r.err !== 'open' && r.err !== 'empty' ? '«' + r.arg + '»' : '') : '');

/** Variables d'una expressió, per ordre alfabètic. */
export function vars(ast, acc = new Set()) {
  if (ast.k === 'var') acc.add(ast.v);
  else if (ast.k === 'not') vars(ast.a, acc);
  else if (ast.xs) ast.xs.forEach((x) => vars(x, acc));
  return [...acc].sort();
}

/** Valor (0 o 1) amb els valors de les variables env = { A: 0|1, … }. */
export function ev(ast, env) {
  switch (ast.k) {
    case 'var': return env[ast.v] ? 1 : 0;
    case 'const': return ast.v;
    case 'not': return 1 - ev(ast.a, env);
    case 'and': return ast.xs.every((x) => ev(x, env)) ? 1 : 0;
    case 'or': return ast.xs.some((x) => ev(x, env)) ? 1 : 0;
    case 'xor': return ast.xs.reduce((s, x) => s ^ ev(x, env), 0);
    default: return 0;
  }
}

/** Combinacions de les variables en ordre binari (000, 001, …): [{ A: 0, B: 0, … }]. */
export function rows(names) {
  const n = names.length, out = [];
  for (let r = 0; r < 1 << n; r++) out.push(Object.fromEntries(names.map((v, j) => [v, (r >> (n - 1 - j)) & 1])));
  return out;
}

/** Columna de sortida d'una expressió (en l'ordre de rows(names)). */
export const column = (ast, names) => rows(names).map((env) => ev(ast, env));

/** Literals (aparicions de variables, negades o no): mesura de com de simplificada és una expressió. */
export function literals(ast) {
  if (ast.k === 'var') return 1;
  if (ast.k === 'const') return 0;
  if (ast.k === 'not') return literals(ast.a);
  return ast.xs.reduce((n, x) => n + literals(x), 0);
}

/**
 * Són equivalents? Compara les taules amb les variables de totes dues.
 * { eq: true } o { eq: false, env, a, b } (la primera fila on difereixen).
 */
export function equivalent(a, b) {
  const names = [...new Set([...vars(a), ...vars(b)])].sort();
  for (const env of rows(names)) {
    const x = ev(a, env), y = ev(b, env);
    if (x !== y) return { eq: false, env, a: x, b: y, names };
  }
  return { eq: true, names };
}

/* ---------- escriptura ---------- */
const PREC = { or: 1, xor: 2, and: 3 };

/** TeX (amb \overline per a la negació) per pintar-la amb la plantilla ($…$). */
export function toTeX(ast, ctx = 0) {
  switch (ast.k) {
    case 'var': return ast.v;
    case 'const': return String(ast.v);
    case 'not': return '\\overline{' + toTeX(ast.a, 0) + '}';
    default: {
      const sep = ast.k === 'and' ? '\\cdot ' : ast.k === 'or' ? '+' : '\\oplus ';
      const s = ast.xs.map((x) => toTeX(x, PREC[ast.k])).join(sep);
      return ctx > PREC[ast.k] ? '(' + s + ')' : s;
    }
  }
}

/** Text pla (amb ' per a la negació), per a missatges i camps de resposta. */
export function toText(ast, ctx = 0) {
  switch (ast.k) {
    case 'var': return ast.v;
    case 'const': return String(ast.v);
    case 'not': return (ast.a.k === 'var' || ast.a.k === 'const' || ast.a.k === 'not' ? toText(ast.a, 9) : '(' + toText(ast.a, 0) + ')') + "'";
    default: {
      const sep = ast.k === 'and' ? '·' : ast.k === 'or' ? ' + ' : ' ⊕ ';
      const s = ast.xs.map((x) => toText(x, PREC[ast.k])).join(sep);
      return ctx > PREC[ast.k] ? '(' + s + ')' : s;
    }
  }
}

/** Subexpressions (sense variables soles), de dins cap a fora: les columnes intermèdies d'una taula. */
export function steps(ast, acc = []) {
  if (ast.k === 'var' || ast.k === 'const') return acc;
  if (ast.k === 'not') steps(ast.a, acc);
  else ast.xs.forEach((x) => steps(x, acc));
  const tex = toTeX(ast);
  if (!acc.some((x) => toTeX(x) === tex)) acc.push(ast);
  return acc;
}

/** Expressió dual: + ↔ ·, 0 ↔ 1; les variables i les negacions es queden (la o exclusiva no en té). */
export function dual(ast) {
  switch (ast.k) {
    case 'var': return ast;
    case 'const': return { k: 'const', v: 1 - ast.v };
    case 'not': return { k: 'not', a: dual(ast.a) };
    case 'and': return { k: 'or', xs: ast.xs.map(dual) };
    case 'or': return { k: 'and', xs: ast.xs.map(dual) };
    default: return ast;
  }
}

/** Comoditat: expressió en text → arbre (o llança un error si està mal escrita; per a dades del curs). */
export function E(src) {
  const r = parse(src);
  if (!r.ast) throw new Error('Expressió mal escrita: ' + src + ' (' + r.err + ')');
  return r.ast;
}
