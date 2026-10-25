import { html as mtexHTML } from '../kit/mtex.js';

/* ============================================================
   MOTOR MATEMÀTIC
   ============================================================ */
export const Z = (() => {
  /* ---------- aleatorietat ---------- */
  const rnd = n => Math.floor(Math.random() * n);
  const pick = a => a[rnd(a.length)];
  const shuffle = a => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = rnd(i + 1); [r[i], r[j]] = [r[j], r[i]]; } return r; };
  const range = (a, b) => { const r = []; for (let i = a; i <= b; i++) r.push(i); return r; };

  /* ---------- tipografia: \ov{} \fr{}{} \sq{} \rt{}{} \mat{} ^{} _{} → MathML (kit/mtex.js) ---------- */
  const escH = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const tx = src => mtexHTML(src);

  /* ---------- aritmètica entera i racional ---------- */
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const lcm = (a, b) => a / gcd(a, b) * b;
  const mod = (a, n) => ((a % n) + n) % n;
  const divisors = n => range(1, n).filter(d => n % d === 0);
  const isPrime = n => n > 1 && range(2, Math.floor(Math.sqrt(n))).every(d => n % d);
  function frac(p, q) { if (q < 0) { p = -p; q = -q; } const g = gcd(p, q) || 1; return [p / g, q / g]; }
  function fracStr(p, q) { [p, q] = frac(p, q); return q === 1 ? String(p) : p + '/' + q; }
  function fracTx(p, q) { [p, q] = frac(p, q); return q === 1 ? String(p).replace('-', '−') : (p < 0 ? '−' : '') + '\\fr{' + Math.abs(p) + '}{' + q + '}'; }
  /* decimal periòdic I,a(p) -> fracció */
  function periodic(I, a, p) {
    const la = a.length, lp = p.length;
    const num = Number((a + p) || '0') - Number(a || '0'), den = Math.pow(10, la) * (Math.pow(10, lp) - 1);
    return frac(I * den + num, den);
  }

  /* ---------- nombres complexos ---------- */
  const Cx = (re, im) => ({ re: re, im: im || 0 });
  const cadd = (a, b) => Cx(a.re + b.re, a.im + b.im);
  const csub = (a, b) => Cx(a.re - b.re, a.im - b.im);
  const cmul = (a, b) => Cx(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
  const cdiv = (a, b) => { const d = b.re * b.re + b.im * b.im; return Cx((a.re * b.re + a.im * b.im) / d, (a.im * b.re - a.re * b.im) / d); };
  const cabs = a => Math.hypot(a.re, a.im);
  const carg = a => Math.atan2(a.im, a.re);
  const cpol = (r, t) => Cx(r * Math.cos(t), r * Math.sin(t));
  const cconj = a => Cx(a.re, -a.im);
  function cpow(a, b) {
    if (b.im === 0 && Number.isInteger(b.re) && Math.abs(b.re) <= 1e6) {
      let r = Cx(1, 0), base = a, n = Math.abs(b.re);
      while (n > 0) { if (n & 1) r = cmul(r, base); base = cmul(base, base); n = Math.floor(n / 2); }
      return b.re < 0 ? cdiv(Cx(1, 0), r) : r;
    }
    if (a.re === 0 && a.im === 0) return Cx(0, 0);
    const lr = Math.log(cabs(a)), th = carg(a);      // a^b = e^{b·log a}
    const x = cmul(b, Cx(lr, th));
    return cpol(Math.exp(x.re), x.im);
  }
  const csqrt = a => cpol(Math.sqrt(cabs(a)), carg(a) / 2);
  const ceq = (a, b, tol) => cabs(csub(a, b)) <= (tol || 1e-6) * Math.max(1, cabs(a), cabs(b));
  function froots(w, n) { const r = Math.pow(cabs(w), 1 / n), t = carg(w); return range(0, n - 1).map(k => cpol(r, (t + 2 * Math.PI * k) / n)); }
  /* argument segons el material: 2·arctan((|z|−a)/b) si b≠0 */
  function argMaterial(z) {
    if (Math.abs(z.im) < 1e-12) return z.re > 0 ? 0 : (z.re < 0 ? Math.PI : NaN);
    return 2 * Math.atan((cabs(z) - z.re) / z.im);
  }
  const fmtNum = (x, d) => { d = d == null ? 4 : d; if (Math.abs(x) < 5e-10) x = 0; let s = (+x.toFixed(d)).toString(); return s.replace('-', '−'); };
  function fmtC(z, d) {
    const a = Math.abs(z.re) < 1e-9 ? 0 : z.re, b = Math.abs(z.im) < 1e-9 ? 0 : z.im;
    if (b === 0) return fmtNum(a, d);
    const bs = Math.abs(b), bt = Math.abs(bs - 1) < 1e-9 ? 'i' : fmtNum(bs, d) + 'i';
    if (a === 0) return (b < 0 ? '−' : '') + bt;
    return fmtNum(a, d) + (b < 0 ? ' − ' : ' + ') + bt;
  }

  /* ---------- avaluador d'expressions (reals i complexes) ---------- */
  const FUN = {
    sqrt: x => csqrt(x), '√': x => csqrt(x), abs: x => Cx(cabs(x)), sin: x => Cx(Math.sin(x.re)), cos: x => Cx(Math.cos(x.re)),
    tan: x => Cx(Math.tan(x.re)), arctan: x => Cx(Math.atan(x.re)), atan: x => Cx(Math.atan(x.re)), ln: x => Cx(Math.log(x.re)),
    log: x => Cx(Math.log10(x.re)), exp: x => cpol(Math.exp(x.re), x.im), cbrt: x => Cx(Math.cbrt(x.re)), conj: x => cconj(x)
  };
  function tokenize(s) {
    s = String(s).replace(/\s+/g, '').replace(/−/g, '-').replace(/[·×⋅]/g, '*').replace(/÷/g, '/').replace(/²/g, '^2').replace(/³/g, '^3')
      .replace(/π/g, 'pi').replace(/√/g, 'sqrt');
    const out = []; let i = 0;
    while (i < s.length) {
      const c = s[i];
      let m;
      if ((m = /^\d+(\.\d+)?/.exec(s.slice(i)))) { out.push({ t: 'n', v: parseFloat(m[0]) }); i += m[0].length; continue; }
      if ((m = /^(sqrt|abs|sin|cos|tan|arctan|atan|ln|log|exp|cbrt|conj)(?=\()/.exec(s.slice(i)))) { out.push({ t: 'f', v: m[1] }); i += m[0].length; continue; }
      if (/^sqrt/.test(s.slice(i))) { out.push({ t: 'f', v: 'sqrt' }); i += 4; continue; }
      if (/^pi/.test(s.slice(i))) { out.push({ t: 'c', v: Math.PI }); i += 2; continue; }
      if (c === 'i') { out.push({ t: 'i' }); i++; continue; }
      if (c === 'e') { out.push({ t: 'c', v: Math.E }); i++; continue; }
      if (/[a-hj-z]/i.test(c)) { out.push({ t: 'v', v: c }); i++; continue; }
      if ('+-*/^()|!'.includes(c)) { out.push({ t: c }); i++; continue; }
      throw new Error('tok:' + c);
    }
    /* multiplicació implícita */
    const res = []; let absOpen = 0;
    const endish = t => ['n', 'c', 'i', 'v', ')', '!'].includes(t.t) || (t.t === '|' && t.close);
    const startish = t => ['n', 'c', 'i', 'v', '(', 'f'].includes(t.t) || (t.t === '|' && !t.close);
    out.forEach(t => {
      if (t.t === '|') { t.close = absOpen > 0 && res.length && endish(res[res.length - 1]); if (t.close) absOpen--; else absOpen++; }
      if (res.length && endish(res[res.length - 1]) && startish(t) && !(res[res.length - 1].t === 'n' && t.t === 'n')) res.push({ t: '*' });
      res.push(t);
    });
    return res;
  }
  function parseExpr(s) {
    const tk = tokenize(s); let p = 0;
    const peek = () => tk[p], eat = t => { if (!tk[p] || tk[p].t !== t) throw new Error('exp:' + t); return tk[p++]; };
    function E() { let n = Tm(); while (peek() && (peek().t === '+' || peek().t === '-')) { const o = tk[p++].t; n = { o, a: n, b: Tm() }; } return n; }
    function Tm() { let n = U(); while (peek() && (peek().t === '*' || peek().t === '/')) { const o = tk[p++].t; n = { o, a: n, b: U() }; } return n; }
    function U() { if (peek() && peek().t === '-') { p++; return { o: 'neg', a: U() }; } if (peek() && peek().t === '+') { p++; return U(); } return Pw(); }
    function Pw() { let b = Post(); if (peek() && peek().t === '^') { p++; return { o: '^', a: b, b: U() }; } return b; }
    function Post() { let a = A(); while (peek() && peek().t === '!') { p++; a = { o: '!', a }; } return a; }
    function A() {
      const t = peek(); if (!t) throw new Error('eof');
      if (t.t === 'n' || t.t === 'c') { p++; return { o: 'num', v: t.v }; }
      if (t.t === 'i') { p++; return { o: 'i' }; }
      if (t.t === 'v') { p++; return { o: 'var', v: t.v }; }
      if (t.t === '(') { p++; const n = E(); eat(')'); return n; }
      if (t.t === '|') { p++; const n = E(); if (!peek() || peek().t !== '|') throw new Error('abs'); p++; return { o: 'f', f: 'abs', a: n }; }
      if (t.t === 'f') {
        p++;
        if (peek() && peek().t === '(') { p++; const n = E(); eat(')'); return { o: 'f', f: t.v, a: n }; }
        return { o: 'f', f: t.v, a: Pw() };
      }
      throw new Error('atom');
    }
    const n = E(); if (p !== tk.length) throw new Error('trail'); return n;
  }
  function fact(n) { let r = 1; for (let k = 2; k <= n; k++) r *= k; return r; }
  function evalN(n, env) {
    switch (n.o) {
      case 'num': return Cx(n.v);
      case 'i': return Cx(0, 1);
      case 'var': { if (!env || !(n.v in env)) throw new Error('var:' + n.v); const v = env[n.v]; return typeof v === 'number' ? Cx(v) : v; }
      case 'neg': { const a = evalN(n.a, env); return Cx(-a.re, -a.im); }
      case '+': return cadd(evalN(n.a, env), evalN(n.b, env));
      case '-': return csub(evalN(n.a, env), evalN(n.b, env));
      case '*': return cmul(evalN(n.a, env), evalN(n.b, env));
      case '/': return cdiv(evalN(n.a, env), evalN(n.b, env));
      case '^': return cpow(evalN(n.a, env), evalN(n.b, env));
      case '!': { const a = evalN(n.a, env); return Cx(fact(Math.round(a.re))); }
      case 'f': return FUN[n.f](evalN(n.a, env));
    }
    throw new Error('op');
  }
  function evalStr(s, env) { return evalN(parseExpr(s), env); }
  function tryEval(s, env) { try { const v = evalStr(s, env); return isFinite(v.re) && isFinite(v.im) ? v : null; } catch { return null; } }
  /* igualtat de dues expressions en k (polinomis, potències…) per avaluació */
  function sameFn(u, v, vars, pts) {
    pts = pts || [1, 2, 3, 4, 5, 7, 10];
    try {
      const pu = parseExpr(u), pv = typeof v === 'function' ? null : parseExpr(v);
      return pts.every(x => {
        const env = {}; (vars || ['k']).forEach(w => env[w] = x);
        const a = evalN(pu, env), b = pv ? evalN(pv, env) : Cx(v(x));
        return ceq(a, b, 1e-7);
      });
    } catch { return false; }
  }
  /* llista de nombres "1, -2, 3+i" */
  function parseList(s) {
    s = String(s).trim().replace(/^\{|\}$/g, '').trim();
    if (!s || s === '∅' || s === 'Ø' || s === '0̸') return [];
    return s.split(/[,;]/).map(x => x.trim()).filter(Boolean).map(x => { const v = tryEval(x); if (!v) throw new Error('item:' + x); return v; });
  }
  function sameMultiset(a, b, tol) {
    if (a.length !== b.length) return false;
    const used = b.map(() => false);
    return a.every(x => { const j = b.findIndex((y, k) => !used[k] && ceq(x, y, tol || 1e-4)); if (j < 0) return false; used[j] = true; return true; });
  }
  function sameSet(a, b, tol) {   // ignora repeticions
    const uniq = arr => arr.filter((x, k) => arr.findIndex(y => ceq(x, y, tol || 1e-4)) === k);
    return sameMultiset(uniq(a), uniq(b), tol);
  }

  /* ---------- valors exactes d'angles múltiples de 15° ---------- */
  const COS15 = [[1, 1, 1], 'c15', [1, 3, 2], [1, 2, 2], [1, 1, 2], 'c75', [0, 1, 1]]; // [num, radicand, den]
  function trig(deg) {            // retorna {c:[s,num,rad,den]|str, s:…} per a múltiples de 30 i 45
    deg = mod(Math.round(deg), 360);
    const base = d => { // cos d per a d en [0,90] múltiple de 15
      const v = COS15[d / 15]; return v;
    };
    function cosv(d) {
      d = mod(d, 360); let sg = 1;
      if (d > 180) d = 360 - d;
      if (d > 90) { d = 180 - d; sg = -1; }
      const v = base(d); return typeof v === 'string' ? null : [sg * v[0], v[1], v[2]];
    }
    return { c: cosv(deg), s: cosv(deg - 90) };
  }
  /* r·(num·√rad/den) amb r enter -> text tx */
  function sqfree(m) { let s = 1, t = m; for (let d = 2; d * d <= t; d++) while (t % (d * d) === 0) { t /= d * d; s *= d; } return [s, t]; }
  function coefTx(r, v) {
    if (!v) return null;
    let [num, rad, den] = v; if (num === 0) return '0';
    const rn = Array.isArray(r) ? r[0] : r, rr = Array.isArray(r) ? r[1] : 1;
    const [so, si] = sqfree(rr * rad); rad = si;
    let p = rn * num * so, q = den; const g = gcd(p, q); p /= g; q /= g;
    const sg = p < 0 ? '−' : ''; p = Math.abs(p);
    const rs = rad === 1 ? '' : '√' + rad;
    if (q === 1) return sg + (rad === 1 ? String(p) : (p === 1 ? rs : p + rs));
    const top = rad === 1 ? String(p) : (p === 1 ? rs : p + rs);
    return sg + '\\fr{' + top + '}{' + q + '}';
  }
  function binExact(r, deg) {       // r enter, deg múltiple de 30 o 45 -> "a + bi" en tx, o null
    if (!(Number.isInteger(r) || Array.isArray(r)) || Math.abs(deg - Math.round(deg)) > 1e-9 || Math.round(deg) % 15 !== 0) return null;
    const t = trig(deg); if (!t.c || !t.s) return null;
    const a = coefTx(r, t.c), b = coefTx(r, t.s);
    if (a === null || b === null) return null;
    const bNeg = b[0] === '−', bAbs = bNeg ? b.slice(1) : b;
    const bi = bAbs === '0' ? '' : (bAbs === '1' ? 'i' : (/[√\\]/.test(bAbs) ? bAbs + ' i' : bAbs + 'i'));
    if (bi === '') return a;
    if (a === '0') return (bNeg ? '−' : '') + bi;
    return a + (bNeg ? ' − ' : ' + ') + bi;
  }
  /* angle com a fracció de π */
  function piTx(p, q) {           // angle = p/q · π
    [p, q] = frac(p, q); if (p === 0) return '0';
    const sg = p < 0 ? '−' : ''; p = Math.abs(p);
    const top = (p === 1 ? '' : p) + 'π';
    return q === 1 ? sg + top : sg + '\\fr{' + top + '}{' + q + '}';
  }
  function degOf(p, q) { return p / q * 180; }

  /* ---------- àlgebra de conjunts (regions de Venn) ---------- */
  /* sintaxi d'autor: A B C D, O = Ω, 0 = ∅, ' complementari, & ∩, | ∪, - ∖, ^ △, x producte, P(…) parts */
  function sparse(s) {
    const tk = s.replace(/\s+/g, '').split(''); let p = 0;
    const peek = () => tk[p];
    function E() { let n = Tm(); while (['|', '-', '^'].includes(peek())) { const o = tk[p++]; n = { o, a: n, b: Tm() }; } return n; }
    function Tm() { let n = X(); while (peek() === '&') { p++; n = { o: '&', a: n, b: X() }; } return n; }
    function X() { let n = Pf(); while (peek() === 'x') { p++; n = { o: 'x', a: n, b: Pf() }; } return n; }
    function Pf() { let n = At(); while (peek() === "'") { p++; n = { o: "'", a: n }; } return n; }
    function At() {
      const c = tk[p++];
      if (c === '(') { const n = E(); if (tk[p++] !== ')') throw new Error('par'); return n; }
      if (c === 'P' && peek() === '(') { p++; const n = E(); if (tk[p++] !== ')') throw new Error('parP'); return { o: 'P', a: n }; }
      if ('ABCD'.includes(c)) return { o: 'v', v: c };
      if (c === 'O') return { o: 'O' };
      if (c === '0') return { o: '0' };
      throw new Error('set:' + c);
    }
    const n = E(); if (p !== tk.length) throw new Error('trail'); return n;
  }
  const OPS = { '|': ' ∪ ', '&': ' ∩ ', '-': ' ∖ ', '^': ' △ ', 'x': ' × ' };
  function sshow(n, parent) {      // -> text per a tx()
    switch (n.o) {
      case 'v': return n.v;
      case 'O': return 'Ω';
      case '0': return '∅';
      case "'": return '\\ov{' + sshow(n.a, null) + '}';
      case 'P': return '𝒫(' + sshow(n.a, null) + ')';
      default: {
        const inner = sshow(n.a, n) + OPS[n.o] + sshow(n.b, n);
        if (!parent) return inner;
        if (parent.o === n.o && (n.o === '|' || n.o === '&') && parent.a === n) return inner;
        if (parent.o === n.o && (n.o === '|' || n.o === '&')) return inner;
        return '(' + inner + ')';
      }
    }
  }
  const disp = s => sshow(typeof s === 'string' ? sparse(s) : s, null);
  function sstr(n) {                 // AST -> sintaxi d'autor
    switch (n.o) { case 'v': return n.v; case 'O': return 'O'; case '0': return '0';
      case "'": return (n.a.o === 'v' || n.a.o === 'O' || n.a.o === '0' ? sstr(n.a) : '(' + sstr(n.a) + ')') + "'";
      case 'P': return 'P(' + sstr(n.a) + ')';
      default: return '(' + sstr(n.a) + n.o + sstr(n.b) + ')'; }
  }
  function varsOf(n, acc) { acc = acc || new Set(); if (n.o === 'v') acc.add(n.v); if (n.a) varsOf(n.a, acc); if (n.b) varsOf(n.b, acc); return acc; }
  function smask(n, k) {           // k variables A.. -> màscara sobre 2^k regions
    const full = (1 << (1 << k)) - 1;
    const vm = j => { let m = 0; for (let r = 0; r < (1 << k); r++) if ((r >> (k - 1 - j)) & 1) m |= 1 << r; return m; };
    const go = x => {
      switch (x.o) {
        case 'v': return vm('ABCD'.indexOf(x.v));
        case 'O': return full; case '0': return 0;
        case "'": return full & ~go(x.a);
        case '|': return go(x.a) | go(x.b);
        case '&': return go(x.a) & go(x.b);
        case '-': return go(x.a) & ~go(x.b);
        case '^': return go(x.a) ^ go(x.b);
      }
      throw new Error('no booleà');
    };
    return go(typeof n === 'string' ? sparse(n) : n);
  }
  function isBool(n) { if (n.o === 'x' || n.o === 'P') return false; return (!n.a || isBool(n.a)) && (!n.b || isBool(n.b)); }
  function nvars(...exprs) { const s = new Set(); exprs.forEach(e => varsOf(typeof e === 'string' ? sparse(e) : e, s)); return Math.max(1, ...[...s].map(v => 'ABCD'.indexOf(v) + 1)); }
  /* equivalència sota hipòtesis [['A','B','sub'|'eq'|'empty'],…] */
  function sEquiv(l, r, hyps) {
    const k = nvars(l, r, ...(hyps || []).flatMap(h => h.slice(0, 2).filter(Boolean)));
    let allowed = (1 << (1 << k)) - 1;
    (hyps || []).forEach(([x, y, t]) => {
      const mx = smask(x, k), my = y ? smask(y, k) : 0;
      if (t === 'sub') allowed &= ~(mx & ~my);
      if (t === 'eq') allowed &= ~(mx ^ my);
      if (t === 'empty') allowed &= ~mx;
    });
    return ((smask(l, k) ^ smask(r, k)) & allowed) === 0;
  }
  /* regió on difereixen -> descripció */
  function sCounter(l, r) {
    const k = nvars(l, r), d = smask(l, k) ^ smask(r, k);
    for (let reg = 0; reg < (1 << k); reg++) if ((d >> reg) & 1) {
      const inL = (smask(l, k) >> reg) & 1;
      return { reg, k, bits: range(0, k - 1).map(j => (reg >> (k - 1 - j)) & 1), inL, inR: 1 - inL };
    }
    return null;
  }
  /* subexpressions per a la taula de pertinença */
  function subexprs(n, acc) {
    acc = acc || [];
    if (n.a) subexprs(n.a, acc); if (n.b) subexprs(n.b, acc);
    if (n.o !== 'v' && n.o !== 'O' && n.o !== '0') { const key = disp(n); if (!acc.some(x => disp(x) === key)) acc.push(n); }
    return acc;
  }
  function memberTable(l, r) {
    const L = sparse(l), R = sparse(r), k = nvars(L, R);
    const cols = [];
    subexprs(L).concat(subexprs(R)).forEach(c => { if (!cols.some(x => disp(x) === disp(c))) cols.push(c); });
    const rows = range(0, (1 << k) - 1).map(reg => ({
      bits: range(0, k - 1).map(j => (reg >> (k - 1 - j)) & 1),
      vals: cols.map(c => (smask(c, k) >> reg) & 1)
    }));
    return { vars: 'ABCD'.slice(0, k).split(''), cols: cols.map(c => disp(c)), rows, li: cols.findIndex(c => disp(c) === disp(L)), ri: cols.findIndex(c => disp(c) === disp(R)) };
  }
  /* mutacions plausibles però falses (distractors) */
  function clone(n) { return JSON.parse(JSON.stringify(n)); }
  function mutations(n) {
    const out = [];
    const nodes = []; (function walk(x, path) { nodes.push(path); if (x.a) walk(x.a, path.concat('a')); if (x.b) walk(x.b, path.concat('b')); })(n, []);
    const at = (root, path) => path.reduce((x, k) => x[k], root);
    const setAt = (root, path, v) => { if (!path.length) return v; const par = at(root, path.slice(0, -1)); par[path[path.length - 1]] = v; return root; };
    nodes.forEach(path => {
      const x = at(n, path);
      const swaps = { '|': ['&', '-'], '&': ['|', '-'], '-': ['&', '|'], '^': ['|', '-'] };
      if (swaps[x.o]) swaps[x.o].forEach(o => { const c = clone(n); at(c, path).o = o; out.push(c); });
      if (x.o === '-') { const c = clone(n); const y = at(c, path); [y.a, y.b] = [y.b, y.a]; out.push(c); }
      if (x.o === "'") { const c = clone(n); out.push(setAt(c, path, clone(x.a))); }
      if (x.o === "'" && (x.a.o === '|' || x.a.o === '&')) {   // De Morgan mal aplicat
        const c = clone(n); out.push(setAt(c, path, { o: x.a.o, a: { o: "'", a: clone(x.a.a) }, b: { o: "'", a: clone(x.a.b) } }));
      }
      if (x.o === 'v' && !(path.length && at(n, path.slice(0, -1)).o === "'")) { const c = clone(n); out.push(setAt(c, path, { o: "'", a: clone(x) })); }
    });
    return out;
  }
  function distractors(target, count, hyps) {
    const T = typeof target === 'string' ? sparse(target) : target, seen = new Set([disp(T)]), res = [];
    shuffle(mutations(T)).forEach(m => {
      const d = disp(m);
      if (seen.has(d) || res.length >= count) return;
      if (!sEquiv(m, T, hyps)) { seen.add(d); res.push(d); }
    });
    if (res.length < count) {
      const k = nvars(T, ...(hyps || []).flatMap(h => h.slice(0, 2).filter(Boolean)));
      const pool = ['A', 'B', "A'", "B'", '0', 'O', 'A&B', 'A|B', 'A-B', 'B-A', "A'&B", "A'|B", "A|B'"].concat(k > 2 ? ['C', 'A&C', 'B|C', "C'"] : []);
      shuffle(pool).forEach(p => { const d = disp(p); if (res.length < count && !seen.has(d) && !sEquiv(p, T, hyps)) { seen.add(d); res.push(d); } });
    }
    return res;
  }

  /* ---------- conjunts concrets (amb parells i parts) ---------- */
  const key = x => typeof x === 'string' ? x : JSON.stringify(x);
  function cset(arr) { const m = new Map(); arr.forEach(x => m.set(key(x), x)); return [...m.values()]; }
  function ceval(n, env) {
    switch (n.o) {
      case 'v': return env[n.v];
      case 'O': return env.O; case '0': return [];
      case "'": { const a = ceval(n.a, env), ks = new Set(a.map(key)); return env.O.filter(x => !ks.has(key(x))); }
      case '|': return cset(ceval(n.a, env).concat(ceval(n.b, env)));
      case '&': { const b = new Set(ceval(n.b, env).map(key)); return ceval(n.a, env).filter(x => b.has(key(x))); }
      case '-': { const b = new Set(ceval(n.b, env).map(key)); return ceval(n.a, env).filter(x => !b.has(key(x))); }
      case '^': { const a = ceval(n.a, env), b = ceval(n.b, env), ka = new Set(a.map(key)), kb = new Set(b.map(key)); return a.filter(x => !kb.has(key(x))).concat(b.filter(x => !ka.has(key(x)))); }
      case 'x': { const a = ceval(n.a, env), b = ceval(n.b, env), r = []; a.forEach(x => b.forEach(y => r.push([x, y]))); return r; }
      case 'P': { const a = ceval(n.a, env), r = []; for (let m = 0; m < (1 << a.length); m++) r.push(sortK(a.filter((_, j) => (m >> j) & 1))); return r; }
    }
  }
  const sortK = arr => arr.slice().sort((x, y) => key(x) < key(y) ? -1 : 1);
  const csame = (a, b) => { const ka = new Set(a.map(key)), kb = new Set(b.map(key)); return ka.size === kb.size && [...ka].every(x => kb.has(x)); };
  const cIsSub = (a, b) => { const kb = new Set(b.map(key)); return a.every(x => kb.has(key(x))); };
  /* cerca de contraexemple per força bruta, rel = 'eq' | 'sub' */
  function bruteCheck(l, r, rel, hyp, trials) {
    const L = sparse(l), R = sparse(r), U = [1, 2, 3];
    for (let t = 0; t < (trials || 1500); t++) {
      const env = { O: U }; 'ABCD'.split('').forEach(v => env[v] = U.filter(() => Math.random() < .5));
      if (hyp && !hyp(env)) continue;
      const a = ceval(L, env), b = ceval(R, env);
      const ok = rel === 'sub' ? cIsSub(a, b) : csame(a, b);
      if (!ok) return { ok: false, env, a, b };
    }
    return { ok: true };
  }
  function showC(x) {
    if (Array.isArray(x)) return x.length === 2 && !Array.isArray(x[0]) && x.isPair ? '(' + x.map(showC).join(',') + ')' : '{' + x.map(showC).join(', ') + '}';
    return String(x);
  }
  function showConcrete(arr, isProd) {
    if (!arr.length) return '∅';
    return '{' + sortK(arr).map(x => Array.isArray(x) ? (isProd ? '(' + x.join(',') + ')' : (x.length ? '{' + x.join(',') + '}' : '∅')) : x).join(', ') + '}';
  }

  /* ---------- conjunts hereditàriament finits (∅, {∅}, …) ---------- */
  const HE = '∅';
  function hcanon(arr) { const u = [...new Set(arr)]; u.sort((a, b) => a.length - b.length || (a < b ? -1 : a > b ? 1 : 0)); return u.length ? '{' + u.join(', ') + '}' : HE; }
  function helems(s) {                  // canònic -> array d'elements canònics
    if (s === HE) return [];
    const body = s.slice(1, -1); const out = []; let d = 0, cur = '';
    for (let i = 0; i < body.length; i++) {
      const c = body[i];
      if (c === '{') d++; if (c === '}') d--;
      if (c === ',' && d === 0) { out.push(cur.trim()); cur = ''; continue; }
      cur += c;
    }
    if (cur.trim()) out.push(cur.trim());
    return out;
  }
  function hparse(s) {                  // text d'usuari -> canònic
    s = String(s).replace(/\s+/g, '').replace(/[Ø0]/g, HE).replace(/\{\}/g, HE);
    let p = 0;
    function V() {
      if (s[p] === HE) { p++; return HE; }
      if (s[p] !== '{') throw new Error('hf');
      p++; const els = [];
      if (s[p] === '}') { p++; return HE; }
      for (;;) { els.push(V()); if (s[p] === ',') { p++; continue; } if (s[p] === '}') { p++; break; } throw new Error('hf2'); }
      return hcanon(els);
    }
    const r = V(); if (p !== s.length) throw new Error('hftrail'); return r;
  }
  const hU = (a, b) => hcanon(helems(a).concat(helems(b)));
  const hI = (a, b) => hcanon(helems(a).filter(x => helems(b).includes(x)));
  const hD = (a, b) => hcanon(helems(a).filter(x => !helems(b).includes(x)));
  const hS = (a, b) => hU(hD(a, b), hD(b, a));
  const hIn = (x, a) => helems(a).includes(x);
  const hSub = (a, b) => helems(a).every(x => helems(b).includes(x));
  function hP(a) { const e = helems(a), r = []; for (let m = 0; m < (1 << e.length); m++) r.push(hcanon(e.filter((_, j) => (m >> j) & 1))); return hcanon(r); }
  const hCard = a => helems(a).length;

  /* ---------- relacions finites i ordres ---------- */
  function relProps(E, R) {            // E elements, R(a,b) booleà
    const res = { r: null, s: null, as: null, t: null };
    const ref = E.find(a => !R(a, a)); res.r = ref === undefined ? true : { ce: [ref] };
    let ce = null; E.some(a => E.some(b => R(a, b) && !R(b, a) && (ce = [a, b]))); res.s = ce ? { ce } : true;
    ce = null; E.some(a => E.some(b => a !== b && R(a, b) && R(b, a) && (ce = [a, b]))); res.as = ce ? { ce } : true;
    ce = null; E.some(a => E.some(b => R(a, b) && E.some(c => R(b, c) && !R(a, c) && (ce = [a, b, c])))); res.t = ce ? { ce } : true;
    return res;
  }
  function classes(E, R) { const out = []; E.forEach(a => { const c = out.find(cl => R(cl[0], a)); if (c) c.push(a); else out.push([a]); }); return out; }
  function hasse(E, leq) {             // E: array d'etiquetes; leq(a,b)
    const lt = (a, b) => a !== b && leq(a, b);
    const cover = [];
    E.forEach(a => E.forEach(b => { if (lt(a, b) && !E.some(c => lt(a, c) && lt(c, b))) cover.push([a, b]); }));
    const level = {}; const lv = x => { if (level[x] != null) return level[x]; const below = cover.filter(e => e[1] === x).map(e => lv(e[0])); return (level[x] = below.length ? 1 + Math.max(...below) : 0); };
    E.forEach(lv);
    const minimal = E.filter(x => !E.some(y => lt(y, x))), maximal = E.filter(x => !E.some(y => lt(x, y)));
    const min = E.find(x => E.every(y => leq(x, y))), max = E.find(x => E.every(y => leq(y, x)));
    let inc = null; E.some(a => E.some(b => a !== b && !leq(a, b) && !leq(b, a) && (inc = [a, b])));
    return { cover, level, minimal, maximal, min: min === undefined ? null : min, max: max === undefined ? null : max, inc, total: !inc };
  }

  return {
    rnd, pick, shuffle, range, tx, escH, gcd, lcm, mod, divisors, isPrime, frac, fracStr, fracTx, periodic,
    Cx, cadd, csub, cmul, cdiv, cabs, carg, cpol, cconj, cpow, csqrt, ceq, froots, argMaterial, fmtNum, fmtC,
    parseExpr, evalStr, tryEval, sqfree, sameFn, parseList, sameMultiset, sameSet, trig, coefTx, binExact, piTx, degOf,
    sparse, disp, sstr, smask, sEquiv, sCounter, memberTable, mutations, distractors, nvars, isBool,
    ceval, csame, bruteCheck, showConcrete, sortK,
    hcanon, helems, hparse, hU, hI, hD, hS, hIn, hSub, hP, hCard,
    relProps, classes, hasse
  };
})();
export const tx = Z.tx;
