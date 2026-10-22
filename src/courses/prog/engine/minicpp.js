/* ============================================================
   MiniCpp · intèrpret traçable del subconjunt de C++ del curs
   (int/long/double/char/bool, cin/cout amb fixed/setprecision/setw,
   if/else, switch, while, do-while, for, funcions amb pas per valor i
   per referència). Serveix per a la «Traça pas a pas»; l'execució real
   la fa Clang. Cada pas guarda la línia que s'executarà, les variables
   de cada marc de la pila, la sortida i la posició de l'entrada.
   ============================================================ */
const MiniCpp = (() => {
  'use strict';
  class CErr extends Error { constructor(msg, line, kind) { super(msg); this.line = line; this.kind = kind || 'compile'; } }
  const KW = new Set(['int', 'long', 'short', 'unsigned', 'signed', 'double', 'float', 'char', 'bool', 'void', 'const', 'if', 'else', 'while', 'do', 'for', 'switch', 'case', 'default', 'break', 'continue', 'return', 'true', 'false', 'using', 'namespace', 'static_cast', 'string', 'auto']);
  const TYPES = ['int', 'long', 'short', 'unsigned', 'signed', 'double', 'float', 'char', 'bool', 'void', 'string', 'auto'];
  const ESC = { n: '\n', t: '\t', r: '\r', '0': '\0', '\\': '\\', "'": "'", '"': '"', a: '\x07', b: '\b', f: '\f', v: '\v', '?': '?' };
  const OPS = ['<<=', '>>=', '<<', '>>', '<=', '>=', '==', '!=', '&&', '||', '++', '--', '+=', '-=', '*=', '/=', '%=', '::', '->', '+', '-', '*', '/', '%', '<', '>', '=', '!', '&', '|', '^', '~', '?', ':', ';', ',', '(', ')', '{', '}', '[', ']', '.'];

  /* ---------- anàlisi lèxica ---------- */
  function lex(src) {
    const toks = []; let i = 0, line = 1; const n = src.length;
    while (i < n) {
      const c = src[i];
      if (c === '\n') { line++; i++; continue; }
      if (/\s/.test(c)) { i++; continue; }
      if (c === '/' && src[i + 1] === '/') { while (i < n && src[i] !== '\n') i++; continue; }
      if (c === '/' && src[i + 1] === '*') { i += 2; while (i < n && !(src[i] === '*' && src[i + 1] === '/')) { if (src[i] === '\n') line++; i++; } i += 2; continue; }
      if (c === '#') { while (i < n && src[i] !== '\n') i++; continue; }
      if (/[A-Za-z_]/.test(c)) {
        let j = i; while (j < n && /[A-Za-z0-9_]/.test(src[j])) j++;
        const w = src.slice(i, j);
        if (w === 'std' && src.startsWith('::', j)) { i = j + 2; continue; }
        toks.push({ k: KW.has(w) ? 'kw' : 'id', v: w, line }); i = j; continue;
      }
      if (/[0-9]/.test(c) || (c === '.' && /[0-9]/.test(src[i + 1]))) {
        let j = i, isF = false;
        while (j < n && /[0-9]/.test(src[j])) j++;
        if (src[j] === '.') { isF = true; j++; while (j < n && /[0-9]/.test(src[j])) j++; }
        if (/[eE]/.test(src[j] || '') && /[0-9+-]/.test(src[j + 1] || '')) { isF = true; j++; if (/[+-]/.test(src[j])) j++; while (j < n && /[0-9]/.test(src[j])) j++; }
        const num = parseFloat(src.slice(i, j)); let suf = '';
        while (j < n && /[uUlLfF]/.test(src[j])) suf += src[j++];
        if (/[fF]/.test(suf)) isF = true;
        toks.push({ k: 'num', v: num, f: isF, l: /[lL]/.test(suf), line }); i = j; continue;
      }
      if (c === "'") {
        let j = i + 1, ch;
        if (src[j] === '\\') { ch = ESC[src[j + 1]] != null ? ESC[src[j + 1]] : src[j + 1]; j += 2; } else { ch = src[j]; j++; }
        if (src[j] !== "'") throw new CErr('Literal de caràcter mal format', line);
        toks.push({ k: 'char', v: ch.charCodeAt(0), line }); i = j + 1; continue;
      }
      if (c === '"') {
        let j = i + 1, s = '';
        while (j < n && src[j] !== '"') {
          if (src[j] === '\\') { s += ESC[src[j + 1]] != null ? ESC[src[j + 1]] : src[j + 1]; j += 2; }
          else { if (src[j] === '\n') throw new CErr('Cadena de text sense tancar', line); s += src[j++]; }
        }
        toks.push({ k: 'str', v: s, line }); i = j + 1; continue;
      }
      const op = OPS.find(o => src.startsWith(o, i));
      if (!op) throw new CErr('Símbol desconegut: «' + c + '»', line);
      toks.push({ k: 'op', v: op, line }); i += op.length;
    }
    toks.push({ k: 'eof', v: '', line });
    return toks;
  }

  /* ---------- anàlisi sintàctica ---------- */
  function parse(src) {
    const toks = lex(src); let p = 0;
    const peek = (o) => toks[p + (o || 0)], nx = () => toks[p++];
    const isOp = (v, o) => { const t = peek(o); return t.k === 'op' && t.v === v; };
    const isKw = (v, o) => { const t = peek(o); return t.k === 'kw' && t.v === v; };
    const want = v => { if (!isOp(v)) throw new CErr('S\'esperava «' + v + '» i hi ha «' + (peek().v === '' ? 'el final' : peek().v) + '»', peek().line); return nx(); };
    const isTypeStart = o => { const t = peek(o); return t.k === 'kw' && (TYPES.includes(t.v) || t.v === 'const'); };
    function parseType() {
      let c = false; const names = [];
      if (isKw('const')) { nx(); c = true; }
      while (peek().k === 'kw' && TYPES.includes(peek().v)) names.push(nx().v);
      if (isKw('const')) { nx(); c = true; }
      if (!names.length) throw new CErr('S\'esperava un tipus', peek().line);
      const base = names.includes('double') || names.includes('float') ? 'double' : names.includes('char') ? 'char' : names.includes('bool') ? 'bool'
        : names.includes('void') ? 'void' : names.includes('string') ? 'string' : names.filter(x => x === 'long').length ? 'long' : 'int';
      return { base, c, text: (c ? 'const ' : '') + names.join(' ') };
    }
    const prog = { funcs: {}, globals: [] };
    function parseDeclRest(ty) {
      const line = peek().line, vars = [];
      for (;;) {
        const nt = nx(); if (nt.k !== 'id') throw new CErr('S\'esperava el nom d\'una variable', nt.line);
        if (isOp('[')) throw new CErr('Les taules (arrays) no es poden traçar amb aquesta eina', nt.line);
        let init = null;
        if (isOp('=')) { nx(); init = parseAssign(); } else if (isOp('(')) { nx(); init = parseAssign(); want(')'); }
        vars.push({ name: nt.v, init, line: nt.line });
        if (isOp(',')) { nx(); continue; } break;
      }
      want(';');
      return { s: 'decl', ty, vars, line };
    }
    function parseBlock() {
      const l = want('{').line, body = [];
      while (!isOp('}')) { if (peek().k === 'eof') throw new CErr('Falta tancar un bloc amb «}»', l); body.push(parseStmt()); }
      const end = nx().line;
      return { s: 'block', body, line: l, end };
    }
    function parseStmt() {
      const t = peek(), line = t.line;
      if (isOp('{')) return parseBlock();
      if (isOp(';')) { nx(); return { s: 'empty', line }; }
      if (isTypeStart()) return parseDeclRest(parseType());
      if (isKw('if')) { nx(); want('('); const c = parseExpr(); want(')'); const th = parseStmt(); let el = null; if (isKw('else')) { nx(); el = parseStmt(); } return { s: 'if', c, th, el, line }; }
      if (isKw('while')) { nx(); want('('); const c = parseExpr(); want(')'); return { s: 'while', c, b: parseStmt(), line }; }
      if (isKw('do')) { nx(); const b = parseStmt(); if (!isKw('while')) throw new CErr('Al do li falta el while', peek().line); const wl = nx().line; want('('); const c = parseExpr(); want(')'); want(';'); return { s: 'do', b, c, line, wl }; }
      if (isKw('for')) {
        nx(); want('('); let init = null;
        if (!isOp(';')) { if (isTypeStart()) init = parseDeclRest(parseType()); else { init = { s: 'expr', e: parseExpr(), line }; want(';'); } } else nx();
        const c = isOp(';') ? null : parseExpr(); want(';');
        const st = isOp(')') ? null : parseExpr(); want(')');
        return { s: 'for', init, c, st, b: parseStmt(), line };
      }
      if (isKw('switch')) {
        nx(); want('('); const e = parseExpr(); want(')'); want('{'); const items = [];
        while (!isOp('}')) {
          if (peek().k === 'eof') throw new CErr('Falta tancar el switch amb «}»', line);
          if (isKw('case')) { const cl = nx().line; const v = parseTernary(); want(':'); items.push({ lab: 'case', v, line: cl }); }
          else if (isKw('default')) { const cl = nx().line; want(':'); items.push({ lab: 'default', line: cl }); }
          else items.push(parseStmt());
        }
        nx(); return { s: 'switch', e, items, line };
      }
      if (isKw('break')) { nx(); want(';'); return { s: 'break', line }; }
      if (isKw('continue')) { nx(); want(';'); return { s: 'continue', line }; }
      if (isKw('return')) { nx(); const e = isOp(';') ? null : parseExpr(); want(';'); return { s: 'return', e, line }; }
      const e = parseExpr(); want(';'); return { s: 'expr', e, line };
    }
    const parseExpr = () => parseAssign();
    function parseAssign() {
      const l = parseTernary();
      if (peek().k === 'op' && ['=', '+=', '-=', '*=', '/=', '%='].includes(peek().v)) {
        const op = nx().v, r = parseAssign();
        if (l.e !== 'var') throw new CErr('A l\'esquerra de «' + op + '» hi ha d\'haver una variable', l.line);
        return { e: 'assign', op, l, r, line: l.line };
      }
      return l;
    }
    function parseTernary() {
      const c = parseBin(0);
      if (isOp('?')) { nx(); const a = parseAssign(); want(':'); const b = parseAssign(); return { e: 'cond', c, a, b, line: c.line }; }
      return c;
    }
    const LEVELS = [['||'], ['&&'], ['==', '!='], ['<', '>', '<=', '>='], ['<<', '>>'], ['+', '-'], ['*', '/', '%']];
    function parseBin(lv) {
      if (lv >= LEVELS.length) return parseUnary();
      let l = parseBin(lv + 1);
      while (peek().k === 'op' && LEVELS[lv].includes(peek().v)) { const op = nx().v; const r = parseBin(lv + 1); l = { e: 'bin', op, l, r, line: l.line }; }
      return l;
    }
    function parseUnary() {
      const t = peek();
      if (t.k === 'op' && ['!', '-', '+', '~'].includes(t.v)) { nx(); return { e: 'un', op: t.v, a: parseUnary(), line: t.line }; }
      if (t.k === 'op' && (t.v === '++' || t.v === '--')) { nx(); const a = parseUnary(); if (a.e !== 'var') throw new CErr('«' + t.v + '» necessita una variable', t.line); return { e: 'pre', op: t.v, a, line: t.line }; }
      if (isOp('(') && isTypeStart(1)) { nx(); const ty = parseType(); want(')'); return { e: 'cast', ty: ty.base, a: parseUnary(), line: t.line }; }
      if (isKw('static_cast')) { nx(); want('<'); const ty = parseType(); want('>'); want('('); const a = parseExpr(); want(')'); return parsePost({ e: 'cast', ty: ty.base, a, line: t.line }); }
      return parsePost(parsePrimary());
    }
    function parsePost(x) {
      for (;;) {
        if (isOp('++') || isOp('--')) { const op = nx().v; if (x.e !== 'var') throw new CErr('«' + op + '» necessita una variable', x.line); x = { e: 'post', op, a: x, line: x.line }; continue; }
        return x;
      }
    }
    function parsePrimary() {
      const t = nx();
      if (t.k === 'num') return { e: 'lit', t: t.f ? 'double' : t.l ? 'long' : 'int', v: t.v, line: t.line };
      if (t.k === 'char') return { e: 'lit', t: 'char', v: t.v, line: t.line };
      if (t.k === 'str') return { e: 'lit', t: 'str', v: t.v, line: t.line };
      if (t.k === 'kw' && (t.v === 'true' || t.v === 'false')) return { e: 'lit', t: 'bool', v: t.v === 'true' ? 1 : 0, line: t.line };
      if (t.k === 'id') {
        if (isOp('(')) { nx(); const args = []; if (!isOp(')')) { for (;;) { args.push(parseAssign()); if (isOp(',')) { nx(); continue; } break; } } want(')'); return { e: 'call', name: t.v, args, line: t.line }; }
        return { e: 'var', name: t.v, line: t.line };
      }
      if (t.k === 'op' && t.v === '(') { const e = parseExpr(); want(')'); return e; }
      throw new CErr('Expressió no vàlida a prop de «' + (t.v === '' ? 'el final' : t.v) + '»', t.line);
    }
    while (peek().k !== 'eof') {
      if (isKw('using')) { while (!isOp(';') && peek().k !== 'eof') nx(); nx(); continue; }
      if (isTypeStart()) {
        const ty = parseType(); const nameTok = peek();
        if (nameTok.k === 'id' && isOp('(', 1)) {
          nx(); nx(); const params = [];
          if (!isOp(')')) {
            if (isKw('void') && isOp(')', 1)) nx();
            else for (;;) { const pt = parseType(); let ref = false; if (isOp('&')) { nx(); ref = true; } const pn = nx(); if (pn.k !== 'id') throw new CErr('S\'esperava el nom d\'un paràmetre', pn.line); params.push({ ty: pt, ref, name: pn.v }); if (isOp(',')) { nx(); continue; } break; }
          }
          want(')');
          if (isOp(';')) { nx(); continue; }
          const body = parseBlock();
          prog.funcs[nameTok.v] = { name: nameTok.v, ret: ty, params, body, line: nameTok.line };
          continue;
        }
        prog.globals.push(parseDeclRest(ty)); continue;
      }
      throw new CErr('Declaració no reconeguda: «' + peek().v + '»', peek().line);
    }
    if (!prog.funcs.main) throw new CErr('Falta la funció main()', 1);
    return prog;
  }

  /* ---------- formats de sortida ---------- */
  function fmtG(x, prec) {
    if (!isFinite(x)) return isNaN(x) ? 'nan' : (x < 0 ? '-inf' : 'inf');
    if (x === 0) return Object.is(x, -0) ? '-0' : '0';
    const P = prec === 0 ? 1 : prec;
    const ex = x.toExponential(P - 1); const E = parseInt(ex.split('e')[1], 10);
    if (E < -4 || E >= P) { const m = ex.split('e')[0].replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, ''); return m + 'e' + (E < 0 ? '-' : '+') + String(Math.abs(E)).padStart(2, '0'); }
    const f = x.toFixed(Math.max(0, P - 1 - E));
    return f.indexOf('.') >= 0 ? f.replace(/0+$/, '').replace(/\.$/, '') : f;
  }
  function showVal(t, v) {
    if (v === undefined) return '?';
    if (t === 'double') return fmtG(v, 6).replace(/^(-?\d+)$/, '$1');
    if (t === 'char') return v === 10 ? "'\\n'" : v === 32 ? "' '" : "'" + String.fromCharCode(v) + "'";
    if (t === 'bool') return v ? 'true' : 'false';
    if (t === 'string') return '"' + v + '"';
    return String(v);
  }

  /* ---------- execució amb traça ---------- */
  function run(src, input, opts) {
    opts = opts || {};
    const LIMIT = opts.limit || 4000, record = !!opts.trace;
    const steps = []; let out = '', nsteps = 0;
    const inp = String(input == null ? '' : input); let ip = 0, cinFail = false;
    const os = { fixed: false, prec: 6, w: 0, fill: ' ' };
    let prog;
    try { prog = parse(src); } catch (e) { return { ok: false, out: '', steps: [], err: { msg: e.message, line: e.line, kind: 'compile' } }; }
    const stack = [];
    const globals = { fn: 'global', scopes: [new Map()], order: [] };
    function lookup(name, line) {
      const fr = stack[stack.length - 1];
      for (let i = fr.scopes.length - 1; i >= 0; i--) if (fr.scopes[i].has(name)) return fr.scopes[i].get(name);
      if (globals.scopes[0].has(name)) return globals.scopes[0].get(name);
      if (['cout', 'cin', 'endl', 'fixed'].includes(name)) return { t: 'special', v: name };
      throw new CErr('La variable «' + name + '» no està declarada', line);
    }
    function declare(fr, name, cell, line) {
      const sc = fr.scopes[fr.scopes.length - 1];
      if (sc.has(name)) throw new CErr('La variable «' + name + '» ja està declarada en aquest bloc', line);
      sc.set(name, cell); fr.order.push({ name, cell, depth: fr.scopes.length - 1 });
    }
    function snapshot() {
      const frames = [];
      const one = fr => {
        const seen = new Map();
        fr.order.forEach(o => { if (o.depth < fr.scopes.length && fr.scopes[o.depth].get(o.name) === o.cell) seen.set(o.name, o); });
        return { fn: fr.fn, vars: [...seen.values()].map(o => ({ n: o.name, t: o.cell.t, v: showVal(o.cell.t, o.cell.v), raw: o.cell.v, ref: o.alias || null, c: !!o.cell.cst })) };
      };
      if (globals.order.length) frames.push(one(globals));
      stack.forEach(fr => frames.push(one(fr)));
      return frames;
    }
    function step(line) {
      if (++nsteps > LIMIT) throw new CErr('S\'han superat ' + LIMIT + ' passos: segurament hi ha un bucle infinit (o l\'entrada és massa llarga per traçar-la)', line, 'run');
      if (record) steps.push({ line, frames: snapshot(), out, ip, depth: stack.length });
    }
    const isNum = t => ['int', 'long', 'double', 'char', 'bool'].includes(t);
    function conv(t, val, line) {
      if (t === 'string') { if (val.t !== 'str' && val.t !== 'string') throw new CErr('No es pot convertir a string', line); return val.v; }
      if (!isNum(val.t)) throw new CErr('Aquest valor no és un nombre', line);
      const x = val.v;
      if (typeof x === 'bigint') {
        if (t === 'long') return x;
        if (t === 'double') return Number(x);
        if (t === 'bool') return x !== 0n ? 1 : 0;
        const w = Number(BigInt.asIntN(32, x));
        if (t === 'char') { let c = w & 255; return c > 127 ? c - 256 : c; }
        return w;
      }
      if (t === 'double') return +x;
      if (t === 'bool') return x ? 1 : 0;
      if (t === 'char') { let c = Math.trunc(x) & 255; return c > 127 ? c - 256 : c; }
      if (t === 'long') return BigInt.asIntN(64, BigInt(Math.trunc(isFinite(x) ? x : 0)));
      return Math.trunc(x) | 0;
    }
    const truthy = (v, line) => { if (v.t === 'special' && v.v === 'cin') return !cinFail; if (!isNum(v.t)) throw new CErr('Aquesta condició no és un valor lògic', line); return typeof v.v === 'bigint' ? v.v !== 0n : v.v !== 0; };
    function arith(op, a, b, line) {
      if (!isNum(a.t) || !isNum(b.t)) {
        if (op === '+' && (a.t === 'string' || b.t === 'string')) return { t: 'string', v: String(a.v) + String(b.v) };
        throw new CErr('L\'operador «' + op + '» no es pot aplicar a aquests valors', line);
      }
      const dbl = a.t === 'double' || b.t === 'double', lng = !dbl && (a.t === 'long' || b.t === 'long');
      let x = a.v, y = b.v;
      if (dbl) { x = Number(x); y = Number(y); }
      else if (lng) { x = typeof x === 'bigint' ? x : BigInt(x); y = typeof y === 'bigint' ? y : BigInt(y); }
      if (['==', '!=', '<', '>', '<=', '>='].includes(op)) {
        const r = op === '==' ? x === y : op === '!=' ? x !== y : op === '<' ? x < y : op === '>' ? x > y : op === '<=' ? x <= y : x >= y;
        return { t: 'bool', v: r ? 1 : 0 };
      }
      if (dbl) {
        if (op === '%') throw new CErr('L\'operador % només funciona amb enters', line);
        const r = op === '+' ? x + y : op === '-' ? x - y : op === '*' ? x * y : x / y;
        return { t: 'double', v: r };
      }
      if (lng) {
        if ((op === '/' || op === '%') && y === 0n) throw new CErr('Divisió entera per zero', line, 'run');
        const r = op === '+' ? x + y : op === '-' ? x - y : op === '*' ? x * y : op === '/' ? x / y : x % y;
        return { t: 'long', v: BigInt.asIntN(64, r) };
      }
      if ((op === '/' || op === '%') && y === 0) throw new CErr('Divisió entera per zero', line, 'run');
      let r = op === '+' ? x + y : op === '-' ? x - y : op === '*' ? Math.imul(x, y) : op === '/' ? Math.trunc(x / y) : x % y;
      r = r | 0;
      return { t: 'int', v: r === 0 ? 0 : r };
    }
    function printVal(v) {
      let s;
      if (v.t === 'str' || v.t === 'string') s = v.v;
      else if (v.t === 'double') s = os.fixed ? v.v.toFixed(os.prec) : fmtG(v.v, os.prec);
      else if (v.t === 'char') s = String.fromCharCode(v.v < 0 ? v.v + 256 : v.v);
      else if (v.t === 'bool') s = v.v ? '1' : '0';
      else s = String(v.v);
      if (os.w) { while (s.length < os.w) s = os.fill + s; os.w = 0; }
      out += s;
      if (out.length > 200000) throw new CErr('El programa escriu massa: segurament hi ha un bucle infinit', null, 'run');
    }
    function readInto(cell) {
      if (cinFail) return;
      const rest = inp.slice(ip), ws = rest.match(/^\s*/)[0].length, r = rest.slice(ws);
      let m;
      if (cell.t === 'char') { if (!r.length) { cinFail = true; return; } cell.v = r.charCodeAt(0); ip += ws + 1; return; }
      if (cell.t === 'string') { m = r.match(/^\S+/); if (!m) { cinFail = true; return; } cell.v = m[0]; ip += ws + m[0].length; return; }
      if (cell.t === 'double') m = r.match(/^[+-]?(\d+\.?\d*([eE][+-]?\d+)?|\.\d+([eE][+-]?\d+)?)/);
      else m = r.match(/^[+-]?\d+/);
      if (!m) { cinFail = true; cell.v = cell.t === 'long' ? 0n : 0; return; }
      ip += ws + m[0].length;
      cell.v = cell.t === 'double' ? parseFloat(m[0]) : cell.t === 'bool' ? (parseInt(m[0], 10) ? 1 : 0) : (cell.t === 'long' ? BigInt.asIntN(64, BigInt(m[0])) : parseInt(m[0], 10) | 0);
    }
    function lvalue(x, line) {
      if (x.e !== 'var') throw new CErr('Aquí hi ha d\'anar una variable', line);
      const c = lookup(x.name, x.line);
      if (c.t === 'special') throw new CErr('«' + x.name + '» no és una variable', x.line);
      return c;
    }
    const MATH = {
      sqrt: a => Math.sqrt(a), pow: (a, b) => Math.pow(a, b), fabs: a => Math.abs(a), floor: a => Math.floor(a), ceil: a => Math.ceil(a),
      round: a => Math.sign(a) * Math.round(Math.abs(a)), trunc: a => Math.trunc(a), exp: a => Math.exp(a), log: a => Math.log(a), log10: a => Math.log10(a)
    };
    function ev(x) {
      switch (x.e) {
        case 'lit': return { t: x.t, v: x.v };
        case 'var': { const c = lookup(x.name, x.line); if (c.t === 'special') return c; if (c.v === undefined) return { t: c.t, v: c.t === 'long' ? 0n : 0, garbage: true }; return { t: c.t, v: c.v }; }
        case 'assign': {
          const c = lvalue(x.l, x.line); if (c.cst) throw new CErr('«' + x.l.name + '» és constant i no es pot modificar', x.line);
          let r = ev(x.r);
          if (x.op !== '=') r = arith(x.op[0], { t: c.t, v: c.v === undefined ? (c.t === 'long' ? 0n : 0) : c.v }, r, x.line);
          c.v = conv(c.t, r, x.line); return { t: c.t, v: c.v };
        }
        case 'cond': return truthy(ev(x.c), x.line) ? ev(x.a) : ev(x.b);
        case 'un': {
          const a = ev(x.a);
          if (x.op === '!') return { t: 'bool', v: truthy(a, x.line) ? 0 : 1 };
          if (!isNum(a.t)) throw new CErr('Operador no vàlid', x.line);
          const t = a.t === 'double' ? 'double' : a.t === 'long' ? 'long' : 'int';
          if (x.op === '-') return { t, v: t === 'int' ? (-a.v) | 0 : t === 'long' ? BigInt.asIntN(64, -a.v) : -a.v };
          if (x.op === '~') return { t: 'int', v: ~Number(a.v) };
          return { t, v: a.v };
        }
        case 'pre': case 'post': {
          const c = lvalue(x.a, x.line); const old = c.v === undefined ? (c.t === 'long' ? 0n : 0) : c.v;
          c.v = conv(c.t, arith(x.op[0], { t: c.t, v: old }, { t: 'int', v: 1 }, x.line), x.line);
          return { t: c.t, v: x.e === 'pre' ? c.v : old };
        }
        case 'cast': { const a = ev(x.a); return { t: x.ty === 'string' ? 'string' : x.ty, v: conv(x.ty, a, x.line) }; }
        case 'bin': {
          if (x.op === '<<' || x.op === '>>') {
            const l = ev(x.l);
            if (l.t === 'special' && l.v === 'cout' && x.op === '<<') {
              if (x.r.e === 'var' && x.r.name === 'endl') { out += '\n'; return l; }
              if (x.r.e === 'var' && x.r.name === 'fixed') { os.fixed = true; return l; }
              if (x.r.e === 'call' && x.r.name === 'setprecision') { os.prec = conv('int', ev(x.r.args[0]), x.line); return l; }
              if (x.r.e === 'call' && x.r.name === 'setw') { os.w = conv('int', ev(x.r.args[0]), x.line); return l; }
              if (x.r.e === 'call' && x.r.name === 'setfill') { os.fill = String.fromCharCode(conv('int', ev(x.r.args[0]), x.line)); return l; }
              const v = ev(x.r); if (v.t === 'special') throw new CErr('No es pot escriure «' + v.v + '»', x.line); printVal(v); return l;
            }
            if (l.t === 'special' && l.v === 'cin' && x.op === '>>') { readInto(lvalue(x.r, x.line), x.line); return l; }
            const r = ev(x.r); if (!isNum(l.t) || !isNum(r.t)) throw new CErr('Operador «' + x.op + '» mal usat (cout << … o cin >> …)', x.line);
            return { t: 'int', v: x.op === '<<' ? Number(l.v) << Number(r.v) : Number(l.v) >> Number(r.v) };
          }
          if (x.op === '&&') { const a = ev(x.l); if (!truthy(a, x.line)) return { t: 'bool', v: 0 }; return { t: 'bool', v: truthy(ev(x.r), x.line) ? 1 : 0 }; }
          if (x.op === '||') { const a = ev(x.l); if (truthy(a, x.line)) return { t: 'bool', v: 1 }; return { t: 'bool', v: truthy(ev(x.r), x.line) ? 1 : 0 }; }
          return arith(x.op, ev(x.l), ev(x.r), x.line);
        }
        case 'call': return call(x);
      }
      throw new CErr('Expressió no suportada', x.line);
    }
    function call(x) {
      const f = prog.funcs[x.name];
      if (!f) {
        const args = x.args.map(a => ev(a));
        if (MATH[x.name]) return { t: 'double', v: MATH[x.name](...args.map(a => Number(a.v))) };
        if (x.name === 'abs') { const a = args[0]; return a.t === 'double' ? { t: 'double', v: Math.abs(a.v) } : a.t === 'long' ? { t: 'long', v: a.v < 0n ? -a.v : a.v } : { t: 'int', v: Math.abs(a.v) | 0 }; }
        if (x.name === 'max' || x.name === 'min') { const [a, b] = args; const t = a.t === 'double' || b.t === 'double' ? 'double' : 'int'; const A = Number(a.v), Bv = Number(b.v); return { t, v: x.name === 'max' ? Math.max(A, Bv) : Math.min(A, Bv) }; }
        throw new CErr('La funció «' + x.name + '» no existeix', x.line);
      }
      if (x.args.length !== f.params.length) throw new CErr('La funció «' + f.name + '» espera ' + f.params.length + ' paràmetre(s) i en rep ' + x.args.length, x.line);
      const caller = stack[stack.length - 1];
      const cells = f.params.map((pa, i) => {
        if (pa.ref) {
          const c = lvalue(x.args[i], x.line);
          if (c.t !== pa.ty.base) throw new CErr('El paràmetre per referència «' + pa.name + '» és ' + pa.ty.base + ' i la variable és ' + c.t, x.line);
          return { cell: c, alias: x.args[i].name + ' (' + caller.fn + ')' };
        }
        const v = ev(x.args[i]); return { cell: { t: pa.ty.base, v: conv(pa.ty.base, v, x.line), cst: pa.ty.c } };
      });
      if (stack.length > 200) throw new CErr('Massa crides niades (recursió sense final?)', x.line, 'run');
      const fr = { fn: f.name, scopes: [new Map()], order: [] };
      f.params.forEach((pa, i) => {
        const c = cells[i];
        if (pa.ref) { fr.scopes[0].set(pa.name, c.cell); fr.order.push({ name: pa.name, cell: c.cell, depth: 0, alias: c.alias }); }
        else declare(fr, pa.name, c.cell, x.line);
      });
      stack.push(fr);
      let r;
      try { r = execList(f.body.body, true); } finally { stack.pop(); }
      if (r && r.ret) { if (f.ret.base === 'void') return { t: 'void', v: 0 }; return { t: f.ret.base, v: conv(f.ret.base, r.v, x.line) }; }
      if (f.ret.base !== 'void' && f.name !== 'main') throw new CErr('La funció «' + f.name + '» ha acabat sense fer return', f.body.end, 'run');
      return { t: 'void', v: 0 };
    }
    function decl(d) {
      const fr = stack[stack.length - 1] || globals;
      d.vars.forEach(v => {
        const cell = { t: d.ty.base, v: undefined, cst: d.ty.c };
        if (v.init) cell.v = conv(cell.t, ev(v.init), v.line);
        else if (fr === globals) cell.v = cell.t === 'string' ? '' : cell.t === 'long' ? 0n : 0;
        else if (cell.t === 'string') cell.v = '';
        declare(fr, v.name, cell, v.line);
      });
    }
    function execList(list, own) {
      const fr = stack[stack.length - 1];
      if (!own) fr.scopes.push(new Map());
      try {
        for (const s of list) { const r = exec(s); if (r) return r; }
      } finally { if (!own) { fr.scopes.pop(); fr.order = fr.order.filter(o => o.depth < fr.scopes.length); } }
      return null;
    }
    function exec(s) {
      switch (s.s) {
        case 'block': return execList(s.body, false);
        case 'empty': return null;
        case 'decl': step(s.line); decl(s); return null;
        case 'expr': step(s.line); ev(s.e); return null;
        case 'if': step(s.line); if (truthy(ev(s.c), s.line)) return exec(s.th); return s.el ? exec(s.el) : null;
        case 'while':
          for (;;) {
            step(s.line); if (!truthy(ev(s.c), s.line)) return null;
            const r = exec(s.b); if (r) { if (r.brk) return null; if (r.cont) continue; return r; }
          }
        case 'do':
          for (;;) {
            const r = exec(s.b); if (r) { if (r.brk) return null; if (!r.cont) return r; }
            step(s.wl); if (!truthy(ev(s.c), s.wl)) return null;
          }
        case 'for': {
          const fr = stack[stack.length - 1]; fr.scopes.push(new Map());
          try {
            if (s.init) { if (s.init.s === 'decl') { step(s.line); decl(s.init); } else { step(s.line); ev(s.init.e); } }
            for (;;) {
              if (s.c) { step(s.line); if (!truthy(ev(s.c), s.line)) return null; }
              const r = exec(s.b); if (r) { if (r.brk) return null; if (!r.cont) return r; }
              if (s.st) { step(s.line); ev(s.st); }
            }
          } finally { fr.scopes.pop(); fr.order = fr.order.filter(o => o.depth < fr.scopes.length); }
        }
        case 'switch': {
          step(s.line); const v = ev(s.e);
          let start = s.items.findIndex(it => it.lab === 'case' && Number(ev(it.v).v) === Number(v.v));
          if (start < 0) start = s.items.findIndex(it => it.lab === 'default');
          if (start < 0) return null;
          const fr = stack[stack.length - 1]; fr.scopes.push(new Map());
          try {
            for (let i = start; i < s.items.length; i++) { const it = s.items[i]; if (it.lab) continue; const r = exec(it); if (r) { if (r.brk) return null; return r; } }
          } finally { fr.scopes.pop(); fr.order = fr.order.filter(o => o.depth < fr.scopes.length); }
          return null;
        }
        case 'break': step(s.line); return { brk: true };
        case 'continue': step(s.line); return { cont: true };
        case 'return': step(s.line); return { ret: true, v: s.e ? ev(s.e) : { t: 'void', v: 0 } };
      }
      throw new CErr('Instrucció no suportada', s.line);
    }
    let err = null, endFrames = null;
    try {
      stack.push(globals);
      prog.globals.forEach(g => decl(g));
      stack.pop();
      const mainFr = { fn: 'main', scopes: [new Map()], order: [] };
      stack.push(mainFr);
      execList(prog.funcs.main.body.body, true);
      if (record) endFrames = snapshot();
      stack.pop();
    } catch (e0) {
      const e = e0 instanceof CErr ? e0 : new CErr(String((e0 && e0.message) || e0), null, 'run');
      err = { msg: e.message, line: e.line, kind: e.kind };
      if (record) { try { endFrames = snapshot(); } catch { endFrames = []; } }
    }
    if (record) steps.push({ line: err ? err.line : null, frames: endFrames || [], out, ip, end: true, error: !!err });
    return { ok: !err, out, steps, err, inputUsed: ip };
  }
  return { run, parse, fmtG };
})();
export default MiniCpp;
