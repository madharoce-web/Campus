/**
 * MathML (el que genera pandoc) → TeX, per escriure les fórmules amb el marcatge de la plantilla
 * ($…$ i $$…$$, que src/courses/_kit/text.jsx torna a convertir en MathML amb Temml).
 * Cobreix el que fan servir els cursos: mrow, mi, mn, mo, mtext, mspace, msub, msup, msubsup,
 * mfrac, msqrt, mroot, munder/mover/munderover, mtable (aligned) i mstyle. Si troba una altra
 * etiqueta torna null i el contingut es queda com a HTML.
 */
const MO = {
  '⋅': '\\cdot ', '·': '\\cdot ', '−': '-', '×': '\\times ', '÷': '\\div ', '→': '\\to ', '←': '\\leftarrow ', '↔': '\\leftrightarrow ',
  '⇒': '\\Rightarrow ', '⇔': '\\Leftrightarrow ', '≈': '\\approx ', '≤': '\\le ', '≥': '\\ge ', '≠': '\\ne ', '±': '\\pm ',
  '%': '\\%', '{': '\\{', '}': '\\}', '…': '\\ldots ', '∑': '\\sum ', '∏': '\\prod ', '∞': '\\infty ', '∈': '\\in ', '∉': '\\notin ',
  '⊆': '\\subseteq ', '⊂': '\\subset ', '∪': '\\cup ', '∩': '\\cap ', '∅': '\\emptyset ', '¬': '\\neg ', '∧': '\\land ', '∨': '\\lor ',
  '∀': '\\forall ', '∃': '\\exists ', '∣': '\\mid ', '|': '|', '#': '\\#', '&': '\\&', '_': '\\_', '~': '\\sim ', '∼': '\\sim ',
  '⁡': '', '⁢': '', '⁣': ',',
};
const TEXT_ESC = { '\\': '\\textbackslash{}', '{': '\\{', '}': '\\}', '%': '\\%', '#': '\\#', '&': '\\&', '_': '\\_', '$': '\\$', '^': '\\^{}', '~': '\\~{}' };
const decode = (s) => s.replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&amp;/g, '&');

const SPECIAL = (t) => t.replace(/[%#&_{}$]/g, (c) => '\\' + c);
const kids = (n) => n.childNodes.filter((c) => c.nodeType === 1);
const grp = (s) => (s.length === 1 || /^\\[a-zA-Z]+ ?$/.test(s) ? s.trim() : '{' + s.trim() + '}');

function conv(n) {
  if (n.nodeType === 3) return decode(n.rawText).trim() ? decode(n.rawText).trim() : '';
  const tag = n.tagName.toLowerCase();
  const all = () => {
    const parts = kids(n).map(conv);
    return parts.includes(null) ? null : parts.join('');
  };
  const two = () => {
    const k = kids(n).map(conv);
    return k.includes(null) ? null : k;
  };
  switch (tag) {
    case 'math': case 'semantics': case 'mrow': case 'mstyle': case 'mpadded': case 'mphantom': {
      const k = kids(n).filter((c) => c.tagName.toLowerCase() !== 'annotation' && c.tagName.toLowerCase() !== 'annotation-xml');
      const parts = k.map(conv);
      return parts.includes(null) ? null : parts.join('');
    }
    case 'mn': return SPECIAL(decode(n.text)).replace(/(\d),(?=\d)/g, '$1{,}');
    case 'mi': {
      const t = SPECIAL(decode(n.text).trim());
      if (t.length <= 1 || /^\\.$/.test(t)) return n.getAttribute('mathvariant') === 'normal' ? '\\mathrm{' + t + '}' : t;
      return '\\mathrm{' + t + '}';
    }
    case 'mo': {
      const t = decode(n.text).trim();
      return t in MO ? MO[t] : t;
    }
    case 'mtext': {
      const t = decode(n.text).replace(/[\\{}%#&_$^~]/g, (c) => TEXT_ESC[c]);
      return t.trim() ? '\\text{' + t + '}' : '\\ ';
    }
    case 'mspace': {
      const w = parseFloat(n.getAttribute('width') || '0');
      return w >= 1.9 ? '\\qquad ' : w >= 0.9 ? '\\quad ' : w > 0.2 ? '\\; ' : '';
    }
    case 'msub': { const k = two(); return k && grp(k[0]) + '_' + grp(k[1]); }
    case 'msup': { const k = two(); return k && grp(k[0]) + '^' + grp(k[1]); }
    case 'msubsup': case 'munderover': { const k = two(); return k && grp(k[0]) + '_' + grp(k[1]) + '^' + grp(k[2]); }
    case 'munder': { const k = two(); return k && grp(k[0]) + '_' + grp(k[1]); }
    case 'mover': {
      const k = two(); if (!k) return null;
      if (k[1] === '¯' || k[1] === '‾' || k[1] === '_') return '\\overline{' + k[0] + '}';
      if (k[1] === '^' || k[1] === '\\^{}') return '\\hat{' + k[0] + '}';
      if (k[1] === '\\to ' || k[1] === '→') return '\\vec{' + k[0] + '}';
      return grp(k[0]) + '^' + grp(k[1]);
    }
    case 'mfrac': { const k = two(); return k && '\\frac{' + k[0] + '}{' + k[1] + '}'; }
    case 'msqrt': { const x = all(); return x === null ? null : '\\sqrt{' + x + '}'; }
    case 'mroot': { const k = two(); return k && '\\sqrt[' + k[1] + ']{' + k[0] + '}'; }
    case 'mfenced': {
      const x = all(); if (x === null) return null;
      return '\\left' + (n.getAttribute('open') ?? '(') + x + '\\right' + (n.getAttribute('close') ?? ')');
    }
    case 'mtable': {
      const rows = kids(n).filter((r) => r.tagName.toLowerCase() === 'mtr');
      const cells = rows.map((r) => kids(r).map((c) => { const k = kids(c).map(conv); return k.includes(null) ? null : k.join(''); }));
      if (cells.flat().includes(null)) return null;
      const aligned = rows.every((r) => kids(r).every((c, i) => (c.getAttribute('columnalign') || '') === (i % 2 ? 'left' : 'right')));
      const env = aligned ? 'aligned' : 'matrix';
      return '\\begin{' + env + '}' + cells.map((r) => r.join(' & ')).join(' \\\\ ') + '\\end{' + env + '}';
    }
    default: return null;
  }
}

/** { tex, display } d'un element <math>, o null si no es pot passar a TeX. */
export function mathToTeX(node) {
  const tex = conv(node);
  if (tex === null) return null;
  return { tex: tex.replace(/\s+/g, ' ').replace(/\s+([_^}])/g, '$1').trim(), display: node.getAttribute('display') === 'block' };
}
