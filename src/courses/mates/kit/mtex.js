/**
 * Fórmules de Matemàtiques: del format propi dels apunts al TeX de la plantilla (Temml).
 *
 * El format dels apunts és text amb ordres curtes i símbols Unicode, i hi pot haver paraules:
 *   \ov{A}  \fr{a}{b}  \sq{x}  \rt{n}{x}  \b{x}  \it{text}  ^{…}  _{…}  \{ \}
 *   \mat{1 & 2; 3 & 4} (parèntesis)  \dt{…} (determinant)  \sis{…; …} (sistema)
 *   una barra sola és la diferència de conjunts (∖); ℛ̸ (U+0338) és «no relacionat».
 *
 *   tex(s)  una sola fórmula (les paraules van dins de \text{})
 *   mk(s)   marcatge de la plantilla: les frases van com a text i la resta com a $…$
 *           («Ajuntant els tres casos: [0, 5]» → «Ajuntant els tres casos: $[0, 5]$»)
 *   html(s) l'HTML de mk(s) (text escapat i fórmules en MathML): és el tx() dels generadors i laboratoris
 * Es fa servir en importar els apunts (tools/kit-import/mates.mjs) i en generar exercicis.
 */
import { texToMathML } from '../../_kit/tex.js';

/* ---------- símbols ---------- */
const SYM = {
  '−': '-', '·': '\\cdot ', '×': '\\times ', '∈': '\\in ', '∉': '\\notin ', '∪': '\\cup ', '∩': '\\cap ', '⊆': '\\subseteq ', '⊇': '\\supseteq ',
  '⊊': '\\subsetneq ', '⊂': '\\subset ', '⊄': '\\not\\subset ', '⊈': '\\nsubseteq ', '∅': '\\emptyset ', 'Ø': '\\emptyset ', '∖': '\\setminus ',
  'ℕ': '\\mathbb{N}', 'ℤ': '\\mathbb{Z}', 'ℚ': '\\mathbb{Q}', 'ℝ': '\\mathbb{R}', 'ℂ': '\\mathbb{C}', 'ℛ': '\\mathcal{R}', 'ℱ': '\\mathcal{F}', '𝒫': '\\mathcal{P}',
  '⟺': '\\iff ', '⟹': '\\implies ', '⟸': '\\impliedby ', '⇔': '\\Leftrightarrow ', '⇒': '\\Rightarrow ', '→': '\\to ', '↦': '\\mapsto ', '↔': '\\leftrightarrow ',
  '≤': '\\le ', '≥': '\\ge ', '⩽': '\\leqslant ', '≠': '\\ne ', '≈': '\\approx ', '≡': '\\equiv ', '≅': '\\cong ', '≼': '\\preccurlyeq ', '≺': '\\prec ',
  '∧': '\\wedge ', '∨': '\\vee ', '¬': '\\neg ', '∀': '\\forall ', '∃': '\\exists ', '∞': '\\infty ', '±': '\\pm ', '∤': '\\nmid ',
  '…': '\\ldots ', '⋯': '\\cdots ', '⋮': '\\vdots ', '⋱': '\\ddots ', '∑': '\\sum ', '⋂': '\\bigcap ', '⋃': '\\bigcup ', '∎': '\\blacksquare ',
  'π': '\\pi ', 'α': '\\alpha ', 'β': '\\beta ', 'γ': '\\gamma ', 'θ': '\\theta ', 'λ': '\\lambda ', 'μ': '\\mu ', 'ε': '\\varepsilon ', 'Δ': '\\Delta ', 'Ω': '\\Omega ',
  '°': '^{\\circ}', '²': '^{2}', '³': '^{3}', 'ⁿ': '^{n}', '′': "'", '✓': '\\checkmark ', '✗': '\\text{✗}', '«': '\\text{«}', '»': '\\text{»}',
  '#': '\\#', '%': '\\%', '&': '\\&', '~': '\\sim ', ' ': ' ',
};
for (const k in SYM) SYM[k] = SYM[k].trimEnd();
/* negats amb U+0338 */
const NEG = { 'ℛ': '\\mathrel{\\cancel{\\mathcal{R}}}', '≼': '\\not\\preccurlyeq', '=': '\\ne', '∈': '\\notin', '⊆': '\\nsubseteq', '|': '\\nmid' };

/* funcions i operadors amb nom */
const OPS = {
  arctan: '\\arctan', sin: '\\sin', cos: '\\cos', tan: '\\tan', sup: '\\sup', inf: '\\inf', max: '\\max', min: '\\min', det: '\\det',
  log: '\\log', ln: '\\ln', exp: '\\exp', lim: '\\lim', arg: '\\arg', dim: '\\dim',
};
for (const w of ['mcd', 'mcm', 'Adj', 'adj', 'tr', 'rad', 'Re', 'Im', 'rang', 'rg', 'Card', 'mod', 'Arg']) OPS[w] = '\\operatorname{' + w + '}';

/* paraules curtes que són text si toquen una altra paraula de text */
const CONN = new Set(['i', 'o', 'y', 'e', 'a', 'u', 'no', 'hi', 'ha', 'de', 'la', 'el', 'un', 'es', 'si', 'en', 'su', 'al', 'di', 'se', 'ni', 'lo', 'les', 'els', 'los', 'las', 'per', 'por', 'amb', 'con', 'que', 'tot', 'cap', 'De', 'No', 'Si', 'La', 'El', 'Es']);
const LETTER = /[A-Za-zÀ-ÖØ-öø-ÿ]/;
const isMathWord = (w) => w.length === 1 || /^[A-Z]{2,4}$/.test(w) || (/^[a-z]{2}$/.test(w) && !CONN.has(w)) || /^[a-z][A-Z]$/.test(w);

/* ---------- lectura: àtoms ---------- */
// { k: 'w', s } paraula · { k: 'n', s } nombre · { k: 's', n } espais · { k: 'p', s } puntuació
// { k: 'm', tex } fórmula · { k: 'it', s } text en cursiva (\it) · { k: 'ob' } \{ · { k: 'cb' } \}
const PUNCT = new Set([',', '.', ':', ';', '!', '?', '(', ')', '[', ']', "'"]);

function rawGroup(src, i) {
  if (src[i] !== '{') return { s: '', i };
  let d = 0, j = i;
  for (; j < src.length; j++) {
    if (src[j] === '\\') { j++; continue; }
    if (src[j] === '{') d++;
    else if (src[j] === '}' && --d === 0) break;
  }
  return { s: src.slice(i + 1, j), i: j + 1 };
}

/* divideix per un caràcter al nivell de dalt (fora de {…}) */
function splitTop(s, ch) {
  const out = []; let d = 0, cur = '';
  for (let k = 0; k < s.length; k++) {
    const c = s[k];
    if (c === '\\' && k + 1 < s.length) { cur += c + s[k + 1]; k++; continue; }
    if (c === '{') d++; else if (c === '}') d--;
    if (c === ch && d === 0) { out.push(cur); cur = ''; } else cur += c;
  }
  out.push(cur);
  return out;
}

const texEsc = (s) => s.replace(/\\/g, '∖').replace(/[{}$&#%_^~]/g, (c) => (c === '~' ? '\\textasciitilde ' : '\\' + c));

function matrix(raw, kind) {
  const rows = splitTop(raw, ';').map((r) => splitTop(r, '&').map((x) => tex(x.trim())));
  const env = kind === 'mat' ? 'pmatrix' : kind === 'dt' ? 'vmatrix' : 'cases';
  return '\\begin{' + env + '}' + rows.map((r) => r.join(' & ')).join(' \\\\ ') + '\\end{' + env + '}';
}

/** Llegeix src des de i fins al final o fins a la } que tanca el grup. */
function atoms(src, i = 0, inGroup = false) {
  const out = [];
  const push = (a) => out.push(a);
  const group = () => {   // {…} o un sol caràcter després d'una ordre
    if (src[i] === '{') { const r = atoms(src, i + 1, true); i = r.i; return texOf(r.out); }
    const ch = src[i++];
    return ch === undefined ? '' : texOf(atoms(ch).out);
  };
  while (i < src.length) {
    const c = src[i];
    if (c === '}' && inGroup) return { out, i: i + 1 };
    if (c === '\\') {
      const nx = src[i + 1];
      if (nx === '{') { push({ k: 'ob' }); i += 2; continue; }
      if (nx === '}') { push({ k: 'cb' }); i += 2; continue; }
      if (nx === ',' || nx === ';' || nx === '!') { push({ k: 'm', tex: '\\' + nx }); i += 2; continue; }
      const m = /^\\(ov|fr|sq|rt|mat|dt|sis|b|it)(?![a-z])/.exec(src.slice(i)) || /^\\(ov|fr|sq|rt|mat|dt|sis|b|it)/.exec(src.slice(i));
      if (m) {
        i += m[0].length;
        const cmd = m[1];
        if (cmd === 'mat' || cmd === 'dt' || cmd === 'sis') { const g = rawGroup(src, i); i = g.i; push({ k: 'm', tex: matrix(g.s, cmd) }); continue; }
        if (cmd === 'it') {
          const g = rawGroup(src, i); i = g.i;
          const w = g.s.trim();
          if (OPS[w]) push({ k: 'm', tex: OPS[w] });
          else push({ k: 'it', s: g.s });
          continue;
        }
        if (cmd === 'ov') { push({ k: 'm', tex: '\\overline{' + group() + '}' }); continue; }
        if (cmd === 'fr') { const a = group(), b = group(); push({ k: 'm', tex: '\\frac{' + a + '}{' + b + '}' }); continue; }
        if (cmd === 'sq') { push({ k: 'm', tex: '\\sqrt{' + group() + '}' }); continue; }
        if (cmd === 'rt') { const n = group(), x = group(); push({ k: 'm', tex: '\\sqrt[' + n + ']{' + x + '}' }); continue; }
        if (cmd === 'b') { push({ k: 'm', tex: '\\boldsymbol{' + group() + '}' }); continue; }
      }
      push({ k: 'm', tex: '\\setminus' }); i++; continue;   // una barra sola és la diferència de conjunts
    }
    if (c === '^' || c === '_') {
      i++;
      const g = group();
      // l'exponent s'enganxa al que té davant (que, per tant, és fórmula)
      const prev = out[out.length - 1];
      if (prev) prev.math = true;
      push({ k: 'm', tex: c + '{' + g + '}', script: true });
      continue;
    }
    if (c === '{') { const r = atoms(src, i + 1, true); i = r.i; push({ k: 'm', tex: '\\{' + texOf(r.out) + '\\}' }); continue; }
    if (src[i + 1] === '̸') { push({ k: 'm', tex: NEG[c] || '\\not ' + (SYM[c] || c) }); i += 2; continue; }
    if (c === '√') {
      i++;
      while (src[i] === ' ') i++;
      if (src[i] === '(') {   // √(…)
        let d = 0, j = i;
        for (; j < src.length; j++) { if (src[j] === '(') d++; else if (src[j] === ')' && --d === 0) break; }
        push({ k: 'm', tex: '\\sqrt{' + tex(src.slice(i + 1, j)) + '}' }); i = j + 1; continue;
      }
      const m = /^(\d+|[A-Za-z]|\\[a-z]+\{[^{}]*\}|.)/u.exec(src.slice(i));
      const arg = m ? m[0] : '';
      i += arg.length;
      push({ k: 'm', tex: '\\sqrt{' + tex(arg) + '}' });
      continue;
    }
    if (/\s/.test(c)) { let j = i; while (j < src.length && /\s/.test(src[j])) j++; push({ k: 's', n: j - i }); i = j; continue; }
    if (/\d/.test(c)) { const m = /^\d+/.exec(src.slice(i)); push({ k: 'n', s: m[0] }); i += m[0].length; continue; }
    if (LETTER.test(c)) {
      // una paraula (amb la l·l catalana)
      // (amb la l·l i els apòstrofs del català: l'eix, d'A)
      const m = /^(?:[dlmnsDLMNS]'(?=[A-Za-zÀ-ÖØ-öø-ÿ]))?[A-Za-zÀ-ÖØ-öø-ÿ]+(?:·l[A-Za-zÀ-ÖØ-öø-ÿ]*)*/.exec(src.slice(i));
      push({ k: 'w', s: m[0] }); i += m[0].length; continue;
    }
    if (PUNCT.has(c)) { push({ k: 'p', s: c }); i++; continue; }
    if (c === '|') {
      const sp = out.length && out[out.length - 1].k === 's' && /\s/.test(src[i + 1] || '');
      push({ k: 'm', tex: sp ? '\\mid' : '|' }); i++; continue;
    }
    // símbol (un caràcter, també fora del pla bàsic)
    const ch = String.fromCodePoint(src.codePointAt(i));
    push({ k: 'm', tex: SYM[ch] ?? ch });
    i += ch.length;
  }
  return { out, i };
}

/* ---------- paper de cada paraula: operador, variable o text ---------- */
const OPER = (x) => !!x && x.k === 'm' && /^(?:[-+=<>]|\\(?:cdot|times|le|ge|ne))$/.test(x.tex);
const sideOf = (out, j, dir) => { let k = j + dir; while (out[k] && out[k].k === 's') k += dir; return out[k]; };
/* «abi» a «a² − abi + abi»: lletres de variable entre operadors */
const varProduct = (out, j) => /^[a-dijkmnp-z]{3,4}$/.test(out[j].s) && OPER(sideOf(out, j, -1)) && OPER(sideOf(out, j, 1));

function roles(out) {
  const ws = out.map((a, j) => (a.k === 'w' ? j : -1)).filter((j) => j >= 0);
  for (const j of ws) {
    const a = out[j], nx = out[j + 1];
    if (a.math) a.role = OPS[a.s] ? 'op' : 'mv';
    else if (OPS[a.s] && !(nx && nx.k === 'p' && nx.s === '.') && !(nx && nx.k === 's' && out[j + 2] && out[j + 2].k === 'w' && out[j + 2].s.length > 2 && !OPS[out[j + 2].s])) a.role = 'op';
    else if (/[^A-Za-z]/.test(a.s) && !/^[A-Za-z]+$/.test(a.s)) a.role = 'pr';   // amb accents: és text
    else if (CONN.has(a.s)) a.role = /^[A-Z]/.test(a.s) || a.s.length > 2 ? 'pr' : 'conn';
    else a.role = isMathWord(a.s) || varProduct(out, j) ? 'mv' : 'pr';
  }
  // les paraules curtes, separades per espais d'una paraula de text, també són text
  const near = (j, dir) => {
    let k = j + dir, sp = false;
    while (out[k] && (out[k].k === 's' || (out[k].k === 'p' && /[,:;]/.test(out[k].s)))) { if (out[k].k === 's') sp = true; k += dir; }
    return sp && out[k] && out[k].k === 'w' ? out[k] : null;
  };
  for (let changed = true; changed;) {
    changed = false;
    for (const j of ws) {
      const a = out[j];
      if (a.role !== 'conn') continue;
      const p = near(j, -1), n = near(j, 1);
      if ((p && p.role === 'pr') || (n && n.role === 'pr')) { a.role = 'pr'; changed = true; }
    }
  }
  // «x ≥ 4   o   x ≤ −4», «p y q», «x = 5 i y = 1»: una conjunció entre espais, sense operadors
  // als costats, també és text (x · y no: y té operadors al costat)
  const side = (j, dir) => { let k = j + dir; while (out[k] && out[k].k === 's') k += dir; return out[k]; };
  const operand = (x) => x && (x.k === 'w' || x.k === 'n' || x.k === 'cb' || (x.k === 'p' && /[)\],]/.test(x.s)));
  for (const j of ws) {
    const a = out[j], p = out[j - 1], n = out[j + 1];
    if (a.role !== 'conn' || !p || !n || p.k !== 's' || n.k !== 's') continue;
    if ((p.n >= 2 && n.n >= 2) || (/^[ioyeu]$/.test(a.s) && operand(side(j, -1)) && operand(side(j, 1)) && side(j, 1).k !== 'p')) a.role = 'pr';
  }
  for (const j of ws) if (out[j].role === 'conn') out[j].role = out[j].s.length <= 2 ? 'mv' : 'pr';
  return out;
}

/* ---------- una sola fórmula ---------- */
function texOf(out) {
  roles(out);
  let s = '', bracket = 0, txt = null;
  // una ordre (\\in) i una lletra després necessiten un espai entremig
  const add = (t) => { if (/\\[a-zA-Z]+$/.test(s) && /^[a-zA-Z]/.test(t)) s += ' '; s += t; };
  const flush = () => { if (txt !== null) { add('\\text{' + texEsc(txt) + '}'); txt = null; } };
  out.forEach((a, j) => {
    if (a.k === 'w' && a.role === 'pr') {
      // les paraules seguides (amb els espais entre elles) van en un sol \text{}
      if (txt === null) { txt = ''; const p = out[j - 1]; if (p && p.k === 's' && j > 1) { txt = ' '; s = s.replace(/ $/, ''); } }
      txt += a.s;
      return;
    }
    if (txt !== null && a.k === 's') {
      const nx = out[j + 1];
      if (nx && nx.k === 'w' && nx.role === 'pr') { txt += ' '; return; }
      if (nx) txt += ' ';
      flush();
      return;
    }
    flush();
    if (a.k === 'w') { add(a.role === 'op' ? OPS[a.s] : a.s); return; }
    if (a.k === 'n') {
      // coma decimal (1,5) fora de parèntesis i claus; a dins és una llista: {1,2}
      const p = out[j - 1], pp = out[j - 2];
      if (p && p.k === 'p' && p.s === ',' && pp && pp.k === 'n' && bracket === 0 && s.endsWith(',')) s = s.slice(0, -1) + '{,}';
      add(a.s);
      return;
    }
    // els espais es conserven (TeX no els mostra; dos o més són una separació)
    if (a.k === 's') { if (j > 0 && j < out.length - 1) s += a.n >= 2 ? '\\quad ' : ' '; return; }
    if (a.k === 'p') {
      if (a.s === '(' || a.s === '[') bracket++;
      if (a.s === ')' || a.s === ']') bracket--;
      add(a.s);
      return;
    }
    if (a.k === 'ob') { bracket++; add('\\{'); return; }
    if (a.k === 'cb') { bracket--; add('\\}'); return; }
    if (a.k === 'it') {
      const p = out[j - 1], n = out[j + 1];
      const pre = p && p.k === 's' && j > 1, post = n && n.k === 's' && j < out.length - 2;
      if (pre) s = s.replace(/ $/, '');
      add('\\text{' + (pre || /^\s/.test(a.s) ? ' ' : '') + texEsc(a.s.trim()) + (post || /\s$/.test(a.s) ? ' ' : '') + '}');
      if (post) out[j + 1] = { k: 's', n: 0 };
      return;
    }
    add(a.tex);
  });
  flush();
  return s.replace(/\\quad $/, '').trim();
}

/** Una sola fórmula en TeX. */
export function tex(src) {
  return texOf(atoms(String(src)).out);
}

/* ---------- marcatge: frases com a text, la resta com a $…$ ---------- */
const mkEsc = (s) => s.replace(/([$*`[\]\\])/g, '\\$1');
const OPEN = new Set(['(', '«']), CLOSE = new Set([',', '.', ':', ';', '!', '?', ')', '»']);

/** Fórmula amb frases → marcatge de la plantilla. */
export function mk(src) {
  const out = roles(atoms(String(src)).out);
  // on hi pot haver text: fora de \{…\}
  const depth = []; let d = 0;
  out.forEach((a) => { if (a.k === 'ob') d++; depth.push(d); if (a.k === 'cb') d--; });
  const isPr = (j) => out[j] && out[j].k === 'w' && out[j].role === 'pr' && depth[j] === 0;
  const inText = new Array(out.length).fill(false);
  // trams de text: d'una paraula de text a l'altra, amb espais, puntuació, nombres i « » entremig
  const prs = out.map((_, j) => j).filter(isPr);
  for (let a = 0; a < prs.length; a++) {
    inText[prs[a]] = true;
    const b = prs[a + 1];
    if (b == null) break;
    let ok = true;
    for (let k = prs[a] + 1; k < b; k++) {
      const x = out[k];
      if (!(x.k === 's' || x.k === 'n' || (x.k === 'p' && x.s !== '[' && x.s !== ']') || (x.k === 'm' && /^\\text\{[«»]\}$/.test(x.tex))) || x.math) { ok = false; break; }
    }
    if (ok) for (let k = prs[a] + 1; k < b; k++) inText[k] = true;
  }
  // puntuació enganxada al text: «(» davant, «, . : ; ) »» darrere
  for (let j = 0; j < out.length; j++) {
    if (!inText[j]) continue;
    const p = out[j - 1], n = out[j + 1];
    if (p && !inText[j - 1] && ((p.k === 'p' && OPEN.has(p.s)) || (p.k === 'm' && p.tex === '\\text{«}'))) inText[j - 1] = true;
    if (n && !inText[j + 1] && ((n.k === 'p' && CLOSE.has(n.s)) || (n.k === 'm' && n.tex === '\\text{»}'))) inText[j + 1] = true;
  }
  // amb frases, «: », «; » i «. » separen fórmules («m > c: c no és cota»)
  if (prs.length) for (let j = 0; j < out.length; j++) {
    const a = out[j], n = out[j + 1];
    if (a.k === 'p' && /^[.:;]$/.test(a.s) && depth[j] === 0 && n && n.k === 's' && !inText[j]) {
      let b = 0;
      for (let k = 0; k < j; k++) if (out[k].k === 'p') b += out[k].s === '(' || out[k].s === '[' ? 1 : out[k].s === ')' || out[k].s === ']' ? -1 : 0;
      if (b <= 0) inText[j] = true;
    }
  }
  // espais entre text i fórmula: al text
  for (let j = 0; j < out.length; j++) if (out[j].k === 's' && !inText[j] && (inText[j - 1] || inText[j + 1])) inText[j] = true;
  let s = '', run = [];
  const asText = (r) => mkEsc(r.map((a) => (a.k === 's' ? ' ' : a.s)).join(''));
  const flush = () => {
    if (!run.length) return;
    // la puntuació final no és de la fórmula: «.», «,», «;», «:» o un «)» que no tanca res de dins
    const tail = [];
    for (;;) {
      let k = run.length - 1;
      while (k >= 0 && run[k].k === 's') k--;
      if (k < 0) break;
      const a = run[k], cnt = (ch) => run.filter((x) => x.k === 'p' && x.s === ch).length;
      if (a.k === 'p' && (/^[.,;:]$/.test(a.s) || (a.s === ')' && cnt(')') > cnt('(')))) tail.unshift(...run.splice(k));
      else break;
    }
    const only = run.filter((a) => a.k !== 's');
    // un tram de fórmula que només és puntuació va com a text
    if (only.length && only.every((a) => a.k === 'p')) s += asText(run);
    else if (only.length) s += '$' + texOf(run) + '$';
    if (tail.length) s += asText(tail);
    run = [];
  };
  out.forEach((a, j) => {
    if (!inText[j]) { run.push(a); return; }
    flush();
    if (a.k === 's') s += a.n >= 2 && j > 0 && j < out.length - 1 ? ' ' : ' ';
    else if (a.k === 'm') s += a.tex === '\\text{«}' ? '«' : '»';
    else s += mkEsc(a.s);
  });
  flush();
  return s.trim();
}

/**
 * Text dels apunts amb $…$ i $$…$$ (format de md()): cada fórmula es converteix.
 * Les fórmules en línia poden quedar partides en text i fórmula (mk); les destacades, una sola.
 */
export function mdToMk(s) {
  return String(s).replace(/\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g, (m, dsp, inl) => (dsp != null ? '$$' + tex(dsp) + '$$' : mk(inl)));
}

/* ---------- HTML ---------- */
const htmlEsc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/** Marcatge (text i $…$) → HTML: el text escapat i les fórmules en MathML. */
export function mkToHTML(m) {
  let out = '', last = 0;
  m.replace(/\\([$*`[\]\\])|\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g, (x, esc, dsp, inl, at) => {
    out += htmlEsc(m.slice(last, at));
    out += esc ? htmlEsc(esc) : texToMathML(dsp ?? inl, dsp != null);
    last = at + x.length;
    return x;
  });
  return out + htmlEsc(m.slice(last));
}

/**
 * Com es pinten les fórmules dels apunts i dels generadors. L'importador ho canvia per
 * conservar-les com a marcatge (render.inline) o TeX (render.display).
 */
export const render = {
  inline: (src) => mkToHTML(mk(src)),
  display: (src) => texToMathML(tex(src), true),
};
export const html = (src) => render.inline(src);
export const htmlDisp = (src) => render.display(src);
