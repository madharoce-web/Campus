/**
 * Motor matemàtic (subconjunt): aleatorietat, tipografia tx() i avaluador d'expressions
 * reals i complexes que fa servir readNum(). Codi original sense canvis.
 */
/* ---------- aleatorietat ---------- */
const rnd = n => Math.floor(Math.random() * n);
const pick = a => a[rnd(a.length)];
const shuffle = a => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = rnd(i + 1); [r[i], r[j]] = [r[j], r[i]]; } return r; };
const range = (a, b) => { const r = []; for (let i = a; i <= b; i++) r.push(i); return r; };
/* ---------- tipografia: \ov{} \fr{}{} \sq{} \rt{}{} ^{} _{} ---------- */
const escH = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function tx(src) {
  src = String(src); let i = 0;
  function group() {               // llegeix {…} després d'una ordre
    if (src[i] !== '{') { const ch = src[i++]; return ch === undefined ? '' : escH(ch); }
    i++; const h = seq(true); if (src[i] === '}') i++; return h;
  }
  function seq(inGroup) {
    let out = '';
    while (i < src.length) {
      const c = src[i];
      if (c === '}' && inGroup) return out;
      if (c === '\\' && (src[i + 1] === '{' || src[i + 1] === '}')) { out += src[i + 1]; i += 2; continue; }
      if (c === '\\') {
        const m = /^\\(ov|fr|sq|rt|b|it)/.exec(src.slice(i));
        if (m) {
          i += m[0].length;
          if (m[1] === 'ov') out += '<span class="ov">' + group() + '</span>';
          else if (m[1] === 'fr') { const a = group(), b = group(); out += '<span class="frac"><span>' + a + '</span><span>' + b + '</span></span>'; }
          else if (m[1] === 'sq') out += '<span class="sqrt">√<span class="rad">' + group() + '</span></span>';
          else if (m[1] === 'rt') { const n = group(), x = group(); out += '<span class="sqrt"><sup class="rti">' + n + '</sup>√<span class="rad">' + x + '</span></span>'; }
          else if (m[1] === 'b') out += '<b>' + group() + '</b>';
          else if (m[1] === 'it') out += '<i>' + group() + '</i>';
          continue;
        }
        out += '∖'; i++; continue;    // una barra sola és la diferència de conjunts
      }
      if (c === '^' || c === '_') { i++; const g = group(); out += c === '^' ? '<sup>' + g + '</sup>' : '<sub>' + g + '</sub>'; continue; }
      if (c === '{') { i++; out += '{' + seq(true) + '}'; if (src[i] === '}') i++; continue; }
      out += escH(c); i++;
    }
    return out;
  }
  return seq(false);
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
const fmtNum = (x, d) => { d = d == null ? 4 : d; if (Math.abs(x) < 5e-10) x = 0; let s = (+x.toFixed(d)).toString(); return s.replace('-', '−'); };
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

export { rnd, pick, shuffle, range, escH, tx, fmtNum, tryEval, evalStr, parseExpr };
