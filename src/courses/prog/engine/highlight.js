/* Ressaltat de sintaxi de C++ i del pseudocodi del curs.
   codeLines(src, lang) torna les línies com a llistes de fragments [classe | null, text]. */

const CPPK = new Set(['if', 'else', 'while', 'do', 'for', 'switch', 'case', 'default', 'break', 'continue', 'return', 'using', 'namespace', 'const', 'true', 'false', 'static_cast', 'void']);
const CPPT = new Set(['int', 'long', 'short', 'unsigned', 'double', 'float', 'char', 'bool', 'string', 'auto']);
const CPPB = new Set(['cin', 'cout', 'endl', 'fixed', 'setprecision', 'setw', 'setfill', 'std', 'main', 'sqrt', 'pow', 'abs']);

function hlCpp(src) {
  const o = []; let i = 0; const n = src.length;
  const sp = (c, t) => o.push([c, t]);
  while (i < n) {
    const c = src[i], rest = src.slice(i);
    let m;
    if (c === '#' && (i === 0 || src[i - 1] === '\n' || /^\s*$/.test(src.slice(src.lastIndexOf('\n', i - 1) + 1, i)))) { m = rest.match(/^[^\n]*/)[0]; sp('p', m); i += m.length; continue; }
    if (rest.startsWith('//')) { m = rest.match(/^[^\n]*/)[0]; sp('c', m); i += m.length; continue; }
    if (rest.startsWith('/*')) { const e = rest.indexOf('*/'); m = e < 0 ? rest : rest.slice(0, e + 2); sp('c', m); i += m.length; continue; }
    if (c === '"') { m = rest.match(/^"(?:\\.|[^"\\\n])*"?/)[0]; sp('s', m); i += m.length; continue; }
    if (c === "'") { m = rest.match(/^'(?:\\.|[^'\\\n])*'?/)[0]; sp('s', m); i += m.length; continue; }
    if ((m = rest.match(/^\d+(\.\d+)?([eE][+-]?\d+)?/))) { sp('n', m[0]); i += m[0].length; continue; }
    if ((m = rest.match(/^[A-Za-z_]\w*/))) { const w = m[0]; sp(CPPK.has(w) ? 'k' : CPPT.has(w) ? 't' : CPPB.has(w) ? 'b' : null, w); i += w.length; continue; }
    sp(null, c); i++;
  }
  return o;
}

const PSK = ['INICI_SEQÜÈNCIA', 'FI_SEQÜÈNCIA', 'ENTORN', 'NOU TIPUS', 'SI', 'LLAVORS', 'ALTRAMENT', 'FI_SI', 'MENTRE', 'FER', 'FI_MENTRE', 'REPETEIX', 'FINS_QUE', 'DES_DE', 'FINS', 'Increment', 'FI_DES_DE', 'SEGONS_SIGUI', 'FI_SEGONS_SIGUI', 'I', 'O', 'NO', 'div', 'mod', 'E/S', 'IDENTIFICADOR', 'TIPUS', 'DESCRIPCIÓ'];
const PSA = ['Llegir', 'Escriure'], PST = ['Enter', 'Natural', 'Real', 'Caràcter', 'Lògic', 'Cadena', 'cert', 'fals'];

function hlPs(src) {
  const o = []; let i = 0; const n = src.length;
  const sp = (c, t) => o.push([c, t]);
  while (i < n) {
    const c = src[i], rest = src.slice(i);
    let m;
    if (rest.startsWith('//')) { m = rest.match(/^[^\n]*/)[0]; sp('c', m); i += m.length; continue; }
    if (c === '{') { const e = rest.indexOf('}'); m = e < 0 ? rest : rest.slice(0, e + 1); sp('c', m); i += m.length; continue; }
    if (c === '"' || c === '«') { const cl = c === '"' ? '"' : '»'; const e = rest.indexOf(cl, 1); m = e < 0 ? rest : rest.slice(0, e + 1); sp('s', m); i += m.length; continue; }
    if ('←‖·≤≥≠'.includes(c)) { sp('o', c); i++; continue; }
    if (rest.startsWith('|R')) { sp('o', '|R'); i += 2; continue; }
    if ((m = rest.match(/^\d+([.,]\d+)?/))) { sp('n', m[0]); i += m[0].length; continue; }
    if ((m = rest.match(/^[A-Za-zÀ-ÿ_][A-Za-zÀ-ÿ_0-9·]*(\/[A-Z]+)?/))) {
      let w = m[0];
      if (w === 'NOU' && rest.startsWith('NOU TIPUS')) w = 'NOU TIPUS';
      sp(PSK.includes(w) ? 'k' : PSA.includes(w) ? 'b' : PST.includes(w) ? 't' : null, w); i += w.length; continue;
    }
    sp(null, c); i++;
  }
  return o;
}

/** Línies de codi amb els fragments ressaltats (les marques que creuen línies es reparteixen). */
export function codeLines(src, lang) {
  const toks = lang === 'cpp' ? hlCpp(src) : lang === 'ps' ? hlPs(src) : [[null, src]];
  const lines = [[]];
  const push = (c, t) => {
    if (!t) return;
    const line = lines[lines.length - 1], last = line[line.length - 1];
    if (last && last[0] === c) last[1] += t; else line.push([c, t]);
  };
  for (const [c, t] of toks) {
    const parts = t.split('\n');
    parts.forEach((p, i) => { if (i > 0) lines.push([]); push(c, p); });
  }
  return lines;
}
