/**
 * Intèrpret de pseudocodi (notació d'Iniciació a la Programació).
 * Analitza, executa, revisa la notació i comprova amb jocs de proves.
 * Mòdul pur: sense accés al DOM. Els missatges d'error de l'intèrpret són en català,
 * com a l'original.
 */
const strip = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const KEY = s => strip(s).toLowerCase();
const TYPES = { enter: 'Enter', natural: 'Natural', real: 'Real', caracter: 'Caràcter', logic: 'Lògic', logica: 'Lògic', boolea: 'Lògic', booleà: 'Lògic', cadena: 'Cadena' };
const typeOf = w => TYPES[KEY(w)] || null;
export class PErr extends Error { constructor(msg, line) { super(msg); this.line = line; } }

/* ---------- preprocés: comentaris i asserts {…} ---------- */
function prep(src) {
  let s = String(src).replace(/\r/g, '').replace(/\t/g, '    ').replace(/[“”«»]/g, '"').replace(/[‘’]/g, "'");
  let out = '', asserts = 0, i = 0, inStr = null;
  while (i < s.length) {
    const c = s[i];
    if (inStr) { out += c; if (c === inStr) inStr = null; i++; continue; }
    if (c === '"') { inStr = c; out += c; i++; continue; }
    if (c === '/' && s[i + 1] === '/') { while (i < s.length && s[i] !== '\n') i++; continue; }
    if (c === '{') {
      let j = i + 1, d = 1; while (j < s.length && d) { if (s[j] === '{') d++; if (s[j] === '}') d--; j++; }
      const inner = s.slice(i + 1, j - 1);
      if (/←|<-/.test(inner) || /^\s*(llegir|escriure)\b/i.test(inner)) out += ' ' + inner + ' ';
      else { asserts++; out += inner.replace(/[^\n]/g, ' '); }
      i = j; continue;
    }
    out += c; i++;
  }
  return { lines: out.split('\n').map((t, k) => ({ n: k + 1, txt: t.trim(), raw: s.split('\n')[k] || '' })), asserts };
}

/* ---------- expressions ---------- */
const OPS = ['<-', '<=', '>=', '<>', '==', '!=', '&&', '||', '|R', '|r', '++', '+=', '-=', '←', '≠', '≤', '≥', '·', '‖', '−', '+', '-', '*', '/', '%', '=', '<', '>', '(', ')', ',', '!', ':', '^'];
function tokenize(t, line) {
  const out = []; let i = 0;
  while (i < t.length) {
    const c = t[i];
    if (/\s/.test(c)) { i++; continue; }
    if (c === '"') { const j = t.indexOf('"', i + 1); if (j < 0) throw new PErr('Falten unes cometes de tancament', line); out.push({ k: 'str', v: t.slice(i + 1, j) }); i = j + 1; continue; }
    if (c === "'" && t[i + 2] === "'") { out.push({ k: 'chr', v: t[i + 1] }); i += 3; continue; }
    let m = /^\d+(\.\d+)?/.exec(t.slice(i));
    if (m) { out.push({ k: 'num', v: parseFloat(m[0]), isInt: !m[1] }); i += m[0].length; continue; }
    m = /^[A-Za-zÀ-ÖØ-öø-ÿ_](?:[A-Za-zÀ-ÖØ-öø-ÿ_0-9]|[lL]·(?=[lL]))*/.exec(t.slice(i));
    if (m) { out.push({ k: 'id', v: m[0] }); i += m[0].length; continue; }
    const op = OPS.find(o => t.startsWith(o, i));
    if (op) { out.push({ k: 'op', v: op === '|r' ? '|R' : op === '−' ? '-' : op }); i += op.length; continue; }
    throw new PErr('Símbol no reconegut: «' + c + '»', line);
  }
  return out;
}
function parseExpr(toks, line) {
  let p = 0;
  const pk = () => toks[p], isOp = v => pk() && pk().k === 'op' && pk().v === v, isW = w => pk() && pk().k === 'id' && KEY(pk().v) === w;
  function OR() { let a = AND(); while (isW('o') || isW('or') || (isOp('||'))) { const raw = toks[p++].v; a = { o: raw === '||' ? '||' : 'or', a, b: AND(), raw }; } return a; }
  function AND() { let a = REL(); while (isW('i') || isW('and') || isOp('&&')) { const raw = toks[p++].v; a = { o: 'and', a, b: REL(), raw }; } return a; }
  function REL() {
    let a = ADD();
    const rel = ['=', '==', '≠', '!=', '<>', '<', '>', '≤', '<=', '≥', '>='];
    if (pk() && pk().k === 'op' && rel.includes(pk().v)) { const o = toks[p++].v; a = { o: 'rel', r: { '==': '=', '!=': '≠', '<>': '≠', '<=': '≤', '>=': '≥' }[o] || o, raw: o, a, b: ADD() }; }
    return a;
  }
  function ADD() { let a = MUL(); while (isOp('+') || isOp('-')) { const o = toks[p++].v; a = { o, a, b: MUL() }; } return a; }
  function MUL() {
    let a = UN();
    for (;;) {
      if (isOp('·') || isOp('*') || isOp('/') || isOp('‖') || isOp('|R') || isOp('%')) { const o = toks[p++].v; a = { o: { '*': '·', '%': 'mod', '|R': 'mod', '‖': 'div' }[o] || o, raw: o, a, b: UN() }; continue; }
      if (isW('div') || isW('mod')) { const o = KEY(toks[p++].v); a = { o, raw: o, a, b: UN() }; continue; }
      return a;
    }
  }
  function UN() {
    if (isW('no') || isW('not') || isOp('!')) { const raw = toks[p++].v; return { o: 'not', a: UN(), raw }; }
    if (isOp('-')) { p++; return { o: 'neg', a: UN() }; }
    if (isOp('+')) { p++; return UN(); }
    return PR();
  }
  function PR() {
    const t = toks[p++]; if (!t) throw new PErr('Expressió incompleta', line);
    if (t.k === 'num') return { o: 'lit', v: t.v, isInt: t.isInt };
    if (t.k === 'str') return { o: 'lit', v: t.v };
    if (t.k === 'chr') return { o: 'lit', v: t.v };
    if (t.k === 'id') {
      const w = KEY(t.v);
      if (w === 'cert' || w === 'veritat' || w === 'vertader') return { o: 'lit', v: true };
      if (w === 'fals') return { o: 'lit', v: false };
      if (w === 'true' || w === 'false') return { o: 'lit', v: w === 'true', bad: t.v };
      return { o: 'var', v: t.v };
    }
    if (t.k === 'op' && t.v === '(') { const e = OR(); if (!isOp(')')) throw new PErr('Falta un parèntesi de tancament', line); p++; return e; }
    throw new PErr('Expressió mal formada a prop de «' + t.v + '»', line);
  }
  const e = OR(); if (p < toks.length) throw new PErr('Sobra «' + toks[p].v + '» a l\'expressió', line); return e;
}
function splitTop(toks) { const parts = [[]]; let d = 0; toks.forEach(t => { if (t.k === 'op' && t.v === '(') d++; if (t.k === 'op' && t.v === ')') d--; if (t.k === 'op' && t.v === ',' && d === 0) parts.push([]); else parts[parts.length - 1].push(t); }); return parts.filter(x => x.length); }
const E = (s, line) => parseExpr(tokenize(s, line), line);

/* ---------- sentències ---------- */
const KW = s => strip(s).toUpperCase().replace(/[\s_]+/g, '');
function classify(txt) {
  const k = KW(txt.split(/\s+/).slice(0, 2).join(' '));
  const k1 = KW(txt.split(/\s+/)[0] || '');
  const tests = [['INICISEQUENCIA', 'start'], ['FISEQUENCIA', 'end'], ['ENTORN', 'entorn'], ['FISI', 'fisi'], ['FIMENTRE', 'fimentre'], ['FIDESDE', 'fidesde'], ['FISEGONSSIGUI', 'fisegons'], ['FISEGONS', 'fisegons'],
    ['FINSQUE', 'finsque'], ['SEGONSSIGUI', 'segons'], ['DESDE', 'desde'], ['REPETEIX', 'repeteix'], ['ALTRAMENT', 'altrament'], ['MENTRE', 'mentre'], ['LLEGIR', 'llegir'], ['ESCRIURE', 'escriure'], ['SI', 'si']];
  for (const [w, c] of tests) { if (k.startsWith(w) && (w.length > 3 || k1 === w)) { if (w === 'SI' && k1 !== 'SI') continue; if (w === 'MENTRE' && k1 !== 'MENTRE') continue; return c; } }
  if (/(←|<-|:=)/.test(txt)) return 'assign';
  return 'other';
}
function parseProgram(src) {
  const { lines, asserts } = prep(src);
  const L = lines.filter(l => l.txt);
  let i = 0, entorn = [], hasEntorn = false, hasStart = false, hasEnd = false;
  const decl = {};
  /* ENTORN */
  const si = L.findIndex(l => classify(l.txt) === 'start');
  const ei = L.findIndex(l => classify(l.txt) === 'entorn');
  if (ei >= 0) { hasEntorn = true; const stop = si >= 0 ? si : L.length; for (let k = ei + 1; k < stop; k++) entorn.push(L[k]); }
  entorn.forEach(l => {
    const words = l.txt.replace(/[:,;]/g, ' ').split(/\s+/).filter(Boolean);
    const ti = words.findIndex(w => typeOf(w));
    if (ti < 0) return;
    const t = typeOf(words[ti]);
    let before = words.slice(0, ti).filter(w => !/^(-|—|–|IDENTIFICADOR|TIPUS|DESCRIPCIÓ|DESCRIPCIO|CONST|CONSTANT)$/i.test(w));
    if (before.length >= 2 && /^(E|S|E\/S|ES)$/i.test(before[0])) before = before.slice(1);
    before.forEach(v => { if (/^[A-Za-zÀ-ÿ_]/.test(v)) decl[KEY(v)] = { name: v, type: t, line: l.n }; });
  });
  let body;
  if (si >= 0) { hasStart = true; const end = L.findIndex((l, k) => k > si && classify(l.txt) === 'end'); hasEnd = end >= 0; body = L.slice(si + 1, end >= 0 ? end : L.length); }
  else body = L.filter((l, k) => k > (ei >= 0 ? ei + entorn.length : -1) && classify(l.txt) !== 'end');
  i = 0;
  function block(stops) {
    const out = [];
    while (i < body.length) {
      const l = body[i], c = classify(l.txt);
      if (stops.includes(c)) return out;
      out.push(stmt()); 
    }
    if (stops.length) throw new PErr('Falta ' + ({ fisi: 'FI_SI', fimentre: 'FI_MENTRE', fidesde: 'FI_DES_DE', finsque: 'FINS_QUE', fisegons: 'FI_SEGONS_SIGUI' }[stops.find(s => s !== 'altrament')] || 'tancar un bloc'), body[body.length - 1] ? body[body.length - 1].n : 0);
    return out;
  }
  function after(txt, n) { return txt.split(/\s+/).slice(n).join(' '); }
  function stmt() {
    const l = body[i], t = l.txt, c = classify(t);
    if (c === 'si') {
      const m = /^\S+\s+(.*?)\s+LLAVORS\b(.*)$/i.exec(t); if (!m) throw new PErr('Al SI hi falta LLAVORS', l.n);
      const cond = E(m[1], l.n), rest = m[2].trim();
      i++;
      if (rest) {          // SI c LLAVORS acció [ALTRAMENT acció] FI_SI en una línia
        const mm = /^(.*?)(?:\s+ALTRAMENT\s+(.*?))?\s+FI_?\s?SI\s*$/i.exec(rest);
        if (!mm) throw new PErr('SI d\'una línia sense FI_SI', l.n);
        return { t: 'if', c: cond, then: [inline(mm[1], l.n)], els: mm[2] ? [inline(mm[2], l.n)] : [], line: l.n };
      }
      const th = block(['altrament', 'fisi']); let els = [];
      if (body[i] && classify(body[i].txt) === 'altrament') { const r = after(body[i].txt, 1); i++; els = r ? [inline(r, body[i - 1].n)].concat(block(['fisi'])) : block(['fisi']); }
      if (!body[i]) throw new PErr('Falta FI_SI', l.n); i++;
      return { t: 'if', c: cond, then: th, els, line: l.n };
    }
    if (c === 'mentre') {
      const m = /^\S+\s+(.*?)\s+FER\s*$/i.exec(t); if (!m) throw new PErr('Al MENTRE hi falta FER', l.n);
      i++; const b = block(['fimentre']); if (!body[i]) throw new PErr('Falta FI_MENTRE', l.n); i++;
      return { t: 'while', c: E(m[1], l.n), body: b, line: l.n };
    }
    if (c === 'repeteix') {
      i++; const b = block(['finsque']); if (!body[i]) throw new PErr('Falta FINS_QUE', l.n);
      const ft = body[i].txt.replace(/^FINS[ _]?QUE\s*/i, ''); const ln = body[i].n; i++;
      return { t: 'repeat', body: b, c: E(ft, ln), line: l.n };
    }
    if (c === 'desde') {
      const m = /^DES[ _]?DE\s+([A-Za-zÀ-ÿ_][\wÀ-ÿ]*)\s*(?:←|<-|:=|=)\s*(.*?)\s+FINS\s+(.*?)(?:\s+INCREMENT\s+(.*?))?\s+FER\s*$/i.exec(t);
      if (!m) throw new PErr('Format: DES_DE v ← inici FINS final Increment 1 FER', l.n);
      i++; const b = block(['fidesde']); if (!body[i]) throw new PErr('Falta FI_DES_DE', l.n); i++;
      return { t: 'for', v: m[1], a: E(m[2], l.n), b: E(m[3], l.n), step: m[4] ? E(m[4], l.n) : null, body: b, line: l.n };
    }
    if (c === 'segons') {
      const m = /^SEGONS[ _]?SIGUI\s+(.*?)\s+FER\s*$/i.exec(t); if (!m) throw new PErr('Format: SEGONS_SIGUI variable FER', l.n);
      const sel = E(m[1], l.n); i++; const cases = []; let els = null, cur = null;
      while (i < body.length && classify(body[i].txt) !== 'fisegons') {
        const lt = body[i].txt, ln = body[i].n;
        if (classify(lt) === 'altrament') { const r = after(lt, 1).replace(/^:\s*/, ''); els = r ? [inline(r, ln)] : []; cur = els; i++; continue; }
        const cm = /^([^:←]+?)\s*:\s*(.*)$/.exec(lt);
        if (cm && !/←|<-/.test(cm[1])) {
          const vals = splitTop(tokenize(cm[1], ln)).map(tk => parseExpr(tk, ln));
          const cs = { vals, body: [] }; cases.push(cs); cur = cs.body; if (cm[2]) cur.push(inline(cm[2], ln)); i++; continue;
        }
        if (!cur) throw new PErr('Dins del SEGONS_SIGUI cada cas comença amb «valor:»', ln);
        cur.push(stmt());
      }
      if (!body[i]) throw new PErr('Falta FI_SEGONS_SIGUI', l.n); i++;
      return { t: 'case', e: sel, cases, els: els || [], line: l.n };
    }
    if (c === 'llegir') {
      let r = t.replace(/^Llegir\s*/i, '').trim(); const paren = /^\(.*\)$/.test(r); if (paren) r = r.slice(1, -1);
      const vars = r.split(',').map(x => x.trim()).filter(Boolean); if (!vars.length) throw new PErr('Llegir sense variable', l.n);
      vars.forEach(v => { if (!/^[A-Za-zÀ-ÿ_][\wÀ-ÿ]*$/.test(v)) throw new PErr('A Llegir només hi van variables: «' + v + '»', l.n); });
      i++; return { t: 'read', vars, line: l.n, paren };
    }
    if (c === 'escriure') {
      let r = t.replace(/^Escriure\s*/i, '').trim(); const paren = /^\(.*\)$/.test(r) && !/^\(.*\)\s*[,+]/.test(r); if (paren) r = r.slice(1, -1);
      i++; return { t: 'write', es: splitTop(tokenize(r, l.n)).map(tk => parseExpr(tk, l.n)), line: l.n, paren };
    }
    if (c === 'assign') { i++; return inline(t, l.n); }
    if (['fisi', 'fimentre', 'fidesde', 'finsque', 'fisegons', 'altrament'].includes(c)) throw new PErr('«' + t.split(/\s+/)[0] + '» sense el bloc corresponent', l.n);
    throw new PErr('No entenc aquesta línia: «' + t + '»', l.n);
  }
  function inline(t, n) {
    t = t.trim();
    const c = classify(t);
    if (c === 'assign') {
      const m = /^([A-Za-zÀ-ÿ_][\wÀ-ÿ]*)\s*(←|<-|:=)\s*(.*)$/.exec(t); if (!m) throw new PErr('Assignació mal formada', n);
      return { t: 'assign', v: m[1], e: E(m[3], n), line: n, op: m[2] };
    }
    if (c === 'llegir' || c === 'escriure') { const save = body, si2 = i; body = [{ n, txt: t }]; i = 0; const s = stmt(); body = save; i = si2; return s; }
    throw new PErr('Dins d\'una línia només hi pot anar una assignació, Llegir o Escriure: «' + t + '»', n);
  }
  const prog = block([]);
  return { prog, decl, hasEntorn, hasStart, hasEnd, asserts, lines };
}

/* ---------- execució ---------- */
function fmt(v) { if (typeof v === 'boolean') return v ? 'cert' : 'fals'; if (typeof v === 'number') return Number.isInteger(v) ? String(v) : String(+v.toFixed(4)); return String(v); }
function run(src, input, opts) {
  opts = opts || {};
  const P = typeof src === 'string' ? parseProgram(src) : src;
  const env = {}, out = [], q = (Array.isArray(input) ? input : String(input || '').split(/[\s,;]+/)).filter(x => x !== '').map(String);
  let steps = 0; const LIMIT = opts.limit || 200000;
  const decl = P.decl;
  const tick = n => { if (++steps > LIMIT) throw new PErr('S\'han superat ' + LIMIT + ' passos: segurament és un bucle infinit', n); };
  function get(name, n) { const k = KEY(name); if (!(k in env)) throw new PErr('Fas servir «' + name + '» abans de donar-li valor (falta inicialitzar-la?)', n); return env[k]; }
  function set(name, v, n) {
    const k = KEY(name), d = decl[k];
    if (d) {
      const T = d.type;
      if ((T === 'Enter' || T === 'Natural') && (typeof v !== 'number' || !Number.isInteger(+v.toFixed(9)))) throw new PErr('«' + name + '» és ' + T + ' i hi assignes ' + fmt(v) + (typeof v === 'number' ? ' (un real: potser cal ‖ en lloc de /, o declarar-la Real)' : ''), n);
      if (T === 'Natural' && v < 0) throw new PErr('«' + name + '» és Natural i hi assignes un negatiu (' + v + ')', n);
      if (T === 'Real' && typeof v !== 'number') throw new PErr('«' + name + '» és Real i hi assignes ' + fmt(v), n);
      if (T === 'Lògic' && typeof v !== 'boolean') throw new PErr('«' + name + '» és Lògic i hi assignes ' + fmt(v), n);
      if ((T === 'Cadena' || T === 'Caràcter') && typeof v !== 'string') throw new PErr('«' + name + '» és ' + T + ' i hi assignes ' + fmt(v), n);
      if ((T === 'Enter' || T === 'Natural') && typeof v === 'number') v = Math.round(v);
    }
    env[k] = v;
  }
  const num = (v, n, op) => { if (typeof v !== 'number') throw new PErr('L\'operador ' + op + ' necessita nombres i ha rebut ' + fmt(v), n); return v; };
  const bool = (v, n, op) => { if (typeof v !== 'boolean') throw new PErr('L\'operador ' + op + ' necessita valors lògics i ha rebut ' + fmt(v) + '. Segons les prioritats del curs, posa parèntesis a les comparacions.', n); return v; };
  function ev(x, n) {
    switch (x.o) {
      case 'lit': return x.v;
      case 'var': return get(x.v, n);
      case 'neg': return -num(ev(x.a, n), n, '−');
      case 'not': return !bool(ev(x.a, n), n, 'NO');
      case 'and': { const a = bool(ev(x.a, n), n, 'I'); return bool(ev(x.b, n), n, 'I') && a; }
      case 'or': { const a = bool(ev(x.a, n), n, 'O'); return bool(ev(x.b, n), n, 'O') || a; }
      case '||': { const a = ev(x.a, n), b = ev(x.b, n); if (typeof a === 'number' && typeof b === 'number') { if (!b) throw new PErr('Divisió entre zero', n); return Math.trunc(a / b); } return bool(a, n, 'O') || bool(b, n, 'O'); }
      case '+': { const a = ev(x.a, n), b = ev(x.b, n); if (typeof a === 'string' && typeof b === 'string') return a + b; return num(a, n, '+') + num(b, n, '+'); }
      case '-': return num(ev(x.a, n), n, '−') - num(ev(x.b, n), n, '−');
      case '·': return num(ev(x.a, n), n, '·') * num(ev(x.b, n), n, '·');
      case '/': { const b = num(ev(x.b, n), n, '/'); if (!b) throw new PErr('Divisió entre zero', n); return num(ev(x.a, n), n, '/') / b; }
      case 'div': { const a = num(ev(x.a, n), n, '‖'), b = num(ev(x.b, n), n, '‖'); if (!b) throw new PErr('Divisió entre zero', n); if (!Number.isInteger(a) || !Number.isInteger(b)) throw new PErr('El quocient enter ‖ necessita enters', n); return Math.trunc(a / b); }
      case 'mod': { const a = num(ev(x.a, n), n, '|R'), b = num(ev(x.b, n), n, '|R'); if (!b) throw new PErr('Residu entre zero', n); if (!Number.isInteger(a) || !Number.isInteger(b)) throw new PErr('El residu |R necessita enters', n); return a % b; }
      case 'rel': {
        const a = ev(x.a, n), b = ev(x.b, n);
        if (typeof a !== typeof b) throw new PErr('Compares ' + fmt(a) + ' amb ' + fmt(b) + ', de tipus diferents', n);
        switch (x.r) { case '=': return a === b; case '≠': return a !== b; case '<': return a < b; case '>': return a > b; case '≤': return a <= b; case '≥': return a >= b; }
      }
    }
    throw new PErr('Operació desconeguda', n);
  }
  function exec(list) {
    for (const s of list) {
      tick(s.line);
      switch (s.t) {
        case 'assign': set(s.v, ev(s.e, s.line), s.line); break;
        case 'read': s.vars.forEach(v => {
          if (!q.length) throw new PErr('Llegir ' + v + ': no queden dades d\'entrada (falta la marca de fi, o llegeixes de més)', s.line);
          const raw = q.shift(), d = decl[KEY(v)], T = d ? d.type : null; let val;
          if (T === 'Enter' || T === 'Natural' || T === 'Real' || (!T && /^-?\d+(\.\d+)?$/.test(raw))) { val = parseFloat(raw.replace(',', '.')); if (isNaN(val)) throw new PErr('S\'esperava un nombre per a «' + v + '» i s\'ha llegit «' + raw + '»', s.line); }
          else if (T === 'Lògic') val = /^(cert|veritat|v|1|true)$/i.test(raw);
          else if (T === 'Caràcter') val = raw[0];
          else val = raw;
          set(v, val, s.line);
        }); break;
        case 'write': out.push(s.es.map(e => fmt(ev(e, s.line))).join('')); break;
        case 'if': exec(bool(ev(s.c, s.line), s.line, 'SI') ? s.then : s.els); break;
        case 'case': { const v = ev(s.e, s.line); const c = s.cases.find(cs => cs.vals.some(e => { const w = ev(e, s.line); return w === v; })); exec(c ? c.body : s.els); break; }
        case 'while': while (bool(ev(s.c, s.line), s.line, 'MENTRE')) { tick(s.line); exec(s.body); } break;
        case 'repeat': do { tick(s.line); exec(s.body); } while (!bool(ev(s.c, s.line), s.line, 'FINS_QUE')); break;
        case 'for': {
          const a = num(ev(s.a, s.line), s.line, 'DES_DE'), b = num(ev(s.b, s.line), s.line, 'FINS'), st = s.step ? num(ev(s.step, s.line), s.line, 'Increment') : 1;
          if (!st) throw new PErr('Increment 0: el bucle no acabaria mai', s.line);
          set(s.v, a, s.line);
          while (st > 0 ? get(s.v, s.line) <= b : get(s.v, s.line) >= b) { tick(s.line); exec(s.body); set(s.v, get(s.v, s.line) + st, s.line); }
          break;
        }
      }
    }
  }
  try { exec(P.prog); return { ok: true, out, left: q.length, steps }; }
  catch (e) { return { ok: false, out, err: e.message, line: e.line, steps }; }
}

/* ---------- revisió de notació ---------- */
function lint(src) {
  const msgs = []; const add = (lv, n, ca, es) => msgs.push({ lv, n, ca, es });
  let P = null, perr = null; try { P = parseProgram(src); } catch (e) { perr = e; }
  const raw = prep(src).lines;
  raw.forEach(l => {
    const t = l.txt; if (!t) return;
    const noStr = t.replace(/"[^"]*"/g, '""');
    const chk = (re, ca, es, lv) => { if (re.test(noStr)) add(lv || 'E', l.n, ca, es); };
    if (classify(t) === 'other' && /^[A-Za-zÀ-ÿ_][\wÀ-ÿ]*\s*=[^=]/.test(t)) add('E', l.n, 'Per assignar s\'escriu ←, no =', 'Para asignar se escribe ←, no =');
    chk(/==/, '== és de C++/Python: la igualtat s\'escriu =', '== es de C++/Python: la igualdad se escribe =');
    chk(/!=/, '!= és de C++/Python: escriu ≠', '!= es de C++/Python: escribe ≠');
    chk(/&&/, '&& és de C++: escriu I', '&& es de C++: escribe I');
    chk(/(^|[^<>=])!(?!=)/, '! és de C++: escriu NO', '! es de C++: escribe NO');
    chk(/%/, '% és de C++/Python: el residu s\'escriu |R (o mod)', '% es de C++/Python: el resto se escribe |R (o mod)');
    chk(/\+\+|--(?!-)|\+=|-=|\*=|\/=/, 'Operadors com ++ o += no existeixen: escriu x ← x + 1', 'Operadores como ++ o += no existen: escribe x ← x + 1');
    chk(/;\s*$/, 'Al pseudocodi no es posa ; al final de línia', 'En pseudocódigo no se pone ; al final de línea', 'W');
    chk(/\b(print|input|cin|cout|printf|scanf|range|elif|def|return|break|continue)\b/i, 'Paraula de C++/Python: fes servir les accions i estructures del curs', 'Palabra de C++/Python: usa las acciones y estructuras del curso');
    chk(/^\s*(for|while|if|else|do)\b/i, 'Estructura de C++/Python: fes servir DES_DE, MENTRE, SI…', 'Estructura de C++/Python: usa DES_DE, MENTRE, SI…');
    chk(/\b(true|false|True|False)\b/, 'Els valors lògics del curs són cert i fals', 'Los valores lógicos del curso son cert y fals');
    chk(/\b(and|or|not)\b/, 'and/or/not són de Python: escriu I, O, NO', 'and/or/not son de Python: escribe I, O, NO');
    chk(/<>/, 'Al curs, diferent s\'escriu ≠', 'En el curso, distinto se escribe ≠', 'W');
    chk(/:=/, 'Al curs, l\'assignació s\'escriu ←', 'En el curso, la asignación se escribe ←', 'W');
    const first = t.split(/\s+/)[0], fk = KW(first);
    if (['SI', 'MENTRE', 'ALTRAMENT', 'REPETEIX', 'FISI', 'FIMENTRE', 'FIDESDE', 'DESDE', 'SEGONSSIGUI', 'FISEGONSSIGUI', 'FINSQUE', 'ENTORN', 'INICISEQUENCIA', 'FISEQUENCIA'].includes(fk) && first !== first.toUpperCase())
      add('W', l.n, 'Les paraules clau s\'escriuen en majúscules: ' + first.toUpperCase(), 'Las palabras clave se escriben en mayúsculas: ' + first.toUpperCase());
    if (/^FI\s+(SI|MENTRE)|^DES\s+DE|^FINS\s+QUE|^FI\s+DES/i.test(t)) add('W', l.n, 'S\'escriu amb guió baix: FI_SI, FI_MENTRE, DES_DE, FINS_QUE, FI_DES_DE', 'Se escribe con guion bajo: FI_SI, FI_MENTRE, DES_DE, FINS_QUE, FI_DES_DE');
    if (/^DES[ _]?DE\b/i.test(t) && !/\bIncrement\b/i.test(t)) add('I', l.n, 'Al curs el DES_DE porta l\'Increment: DES_DE i ← 1 FINS n Increment 1 FER', 'En el curso el DES_DE lleva el Increment: DES_DE i ← 1 FINS n Increment 1 FER');
    if (/\b(I|O)\b/.test(noStr.replace(/^\S+/, '')) && /[<>=≠≤≥]/.test(noStr) && !/\([^()]*[<>=≠≤≥][^()]*\)/.test(noStr) && /^(SI|MENTRE|FINS)/i.test(t))
      add('I', l.n, 'Segons la taula de prioritats del curs, I i O van abans que els relacionals: posa parèntesis a cada comparació', 'Según la tabla de prioridades del curso, I y O van antes que los relacionales: pon paréntesis en cada comparación');
  });
  if (perr) { add('E', perr.line, 'Sintaxi: ' + perr.message, 'Sintaxis: ' + perr.message); return { msgs, P: null }; }
  if (!P.hasEntorn) add('E', 0, 'Falta l\'ENTORN amb les variables (E/S, identificador, tipus, descripció)', 'Falta el ENTORN con las variables (E/S, identificador, tipo, descripción)');
  if (!P.hasStart || !P.hasEnd) add('E', 0, 'Les accions van entre INICI_SEQÜÈNCIA i FI_SEQÜÈNCIA', 'Las acciones van entre INICI_SEQÜÈNCIA y FI_SEQÜÈNCIA');
  /* variables declarades i usades */
  const used = new Map();
  const walkE = (x, n) => { if (!x) return; if (x.o === 'var') used.set(KEY(x.v), used.get(KEY(x.v)) || { name: x.v, n }); walkE(x.a, n); walkE(x.b, n); };
  const forVars = [];
  const walk = (list) => list.forEach(s => {
    if (s.t === 'assign') { used.set(KEY(s.v), used.get(KEY(s.v)) || { name: s.v, n: s.line }); walkE(s.e, s.line); forVars.forEach(fv => { if (KEY(fv.v) === KEY(s.v)) add('E', s.line, 'No modifiquis la variable de control del DES_DE (' + s.v + ') dins del bucle', 'No modifiques la variable de control del DES_DE (' + s.v + ') dentro del bucle'); }); }
    if (s.t === 'read') s.vars.forEach(v => used.set(KEY(v), used.get(KEY(v)) || { name: v, n: s.line }));
    if (s.t === 'read' && s.paren) add('I', s.line, 'Al curs s\'escriu Llegir A, sense parèntesis', 'En el curso se escribe Llegir A, sin paréntesis');
    if (s.t === 'write') { s.es.forEach(e => walkE(e, s.line)); if (s.paren) add('I', s.line, 'Al curs s\'escriu Escriure "text", A, sense parèntesis', 'En el curso se escribe Escriure "text", A, sin paréntesis'); }
    if (s.t === 'if') { walkE(s.c, s.line); walk(s.then); walk(s.els); }
    if (s.t === 'while' || s.t === 'repeat') { walkE(s.c, s.line); walk(s.body); }
    if (s.t === 'case') { walkE(s.e, s.line); s.cases.forEach(c => walk(c.body)); walk(s.els); }
    if (s.t === 'for') { used.set(KEY(s.v), used.get(KEY(s.v)) || { name: s.v, n: s.line }); walkE(s.a, s.line); walkE(s.b, s.line); forVars.push(s); walk(s.body); forVars.pop(); }
  });
  walk(P.prog);
  if (P.hasEntorn) {
    used.forEach((u, k) => { if (!P.decl[k]) add('E', u.n, '«' + u.name + '» no està declarada a l\'ENTORN', '«' + u.name + '» no está declarada en el ENTORN'); });
    Object.entries(P.decl).forEach(([k, d]) => { if (!used.has(k)) add('I', d.line, '«' + d.name + '» és a l\'ENTORN però no es fa servir', '«' + d.name + '» está en el ENTORN pero no se usa'); });
  }
  /* cerca: només s'avança a l'ALTRAMENT */
  const walkS = list => list.forEach(s => {
    if (s.t === 'while') {
      const cv = []; (function f(x) { if (!x) return; if (x.o === 'not' && x.a.o === 'var') cv.push(KEY(x.a.v)); f(x.a); f(x.b); })(s.c);
      const setsTrue = cv.filter(v => s.body.some(b => b.t === 'if' && b.then.some(x => x.t === 'assign' && KEY(x.v) === v && x.e.o === 'lit' && x.e.v === true)));
      if (setsTrue.length) {
        const top = s.body.filter(b => b.t === 'read' || (b.t === 'assign' && b.e.o === '+' && b.e.a && b.e.a.o === 'var' && KEY(b.e.a.v) === KEY(b.v)));
        if (top.length) add('W', top[0].line, 'Esquema de cerca: només s\'avança al següent element a la branca ALTRAMENT; si avances sempre, l\'element trobat queda enrere', 'Esquema de búsqueda: solo se avanza al siguiente elemento en la rama ALTRAMENT; si avanzas siempre, el elemento encontrado se queda atrás');
      }
      walkS(s.body);
    }
    if (s.t === 'if') { walkS(s.then); walkS(s.els); } if (s.t === 'for' || s.t === 'repeat') walkS(s.body); if (s.t === 'case') { s.cases.forEach(c => walkS(c.body)); walkS(s.els); }
  });
  walkS(P.prog);
  if (!P.asserts) add('I', 0, 'Bon hàbit del curs: anota l\'estat inicial i el final entre claus, {…}', 'Buen hábito del curso: anota el estado inicial y el final entre llaves, {…}');
  return { msgs, P };
}

/* ---------- comprovació amb jocs de proves ---------- */
function tokensOut(lines) { return lines.join(' ').match(/-?\d+(?:\.\d+)?|[A-Za-zÀ-ÿ']+/g) || []; }
function matchOut(out, exp) {
  const got = tokensOut(out); let j = 0;
  for (const e of exp) {
    let found = false;
    while (j < got.length) {
      const g = got[j++];
      if (typeof e === 'number') { if (/^-?\d/.test(g) && Math.abs(parseFloat(g) - e) < 1e-3) { found = true; break; } }
      else if (KEY(g) === KEY(String(e))) { found = true; break; }
    }
    if (!found) return false;
  }
  return true;
}
function check(src, tests) {
  let P; try { P = parseProgram(src); } catch (e) { return { parsed: false, err: e.message, line: e.line, results: [] }; }
  const results = tests.map(t => { const r = run(P, t.in); return { in: t.in, exp: t.out, out: r.out, ok: r.ok && matchOut(r.out, t.out), err: r.err, line: r.line }; });
  return { parsed: true, results, all: results.every(r => r.ok) };
}

// parseExprText: expressió a partir de text (per a les prioritats)
export { parseProgram, run, lint, check, fmt, tokenize, KEY, E as parseExprText };
