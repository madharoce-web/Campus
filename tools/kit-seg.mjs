/**
 * Segmentació del HTML i l'SVG dels textos de contingut, per traduir només el que es llegeix.
 * Un segment és un tros de text entre etiquetes de bloc (les etiquetes de línia, com <b> o <code>,
 * queden dins del segment), o el valor d'un atribut que es llegeix (aria-label, title, alt, placeholder).
 * split(html) → { parts, segs }: parts és el HTML amb {{n}} on hi ha cada segment; join(parts, segs) el refà.
 */
const INLINE = new Set(['b', 'i', 'em', 'strong', 'code', 'sub', 'sup', 'span', 'a', 'br', 'kbd', 'var', 'u', 'small', 'mark', 'abbr', 'tspan', 's', 'q', 'cite', 'dfn', 'math', 'mi', 'mo', 'mn', 'mrow', 'msub', 'msup', 'mfrac', 'mtext', 'msqrt', 'mover', 'munder', 'mspace', 'semantics', 'annotation', 'mstyle', 'mtable', 'mtr', 'mtd', 'menclose', 'mpadded', 'mphantom', 'munderover', 'msubsup', 'mroot']);
const ATTR = /\s(aria-label|title|alt|placeholder|data-label|data-tip)="([^"]*)"/g;
const SKIPTAG = new Set(['style', 'script']);

const words = (s) => /[A-Za-zÀ-ÿ]{2,}/.test(s.replace(/<[^>]*>/g, '').replace(/&[a-z]+;|&#\d+;/g, ''));

/** Talla el HTML en peces: { tag } o { text }. */
function tokens(html) {
  const out = [];
  const re = /<!--[\s\S]*?-->|<\/?([a-zA-Z][\w:-]*)[^>]*>/g;
  let last = 0, m, skip = null;
  while ((m = re.exec(html))) {
    if (m.index > last) out.push({ text: html.slice(last, m.index), skip: !!skip });
    const name = (m[1] || '').toLowerCase();
    const close = m[0][1] === '/';
    if (SKIPTAG.has(name)) skip = close ? null : name;
    out.push({ tag: m[0], name, close, comment: !m[1] });
    last = re.lastIndex;
  }
  if (last < html.length) out.push({ text: html.slice(last), skip: !!skip });
  return out;
}

export function split(html) {
  const segs = [];
  const parts = [];
  let run = [];
  const flush = () => {
    if (!run.length) return;
    const s = run.join('');
    run = [];
    const lead = s.match(/^\s*/)[0], trail = s.slice(lead.length).match(/\s*$/)[0];
    const core = s.slice(lead.length, s.length - trail.length);
    if (core && words(core)) { parts.push(lead, { n: segs.length }, trail); segs.push(core); } else parts.push(s);
  };
  const attrs = (tag) => tag.replace(ATTR, (all, k, v) => {
    if (!v || !words(v)) return all;
    const n = segs.length;
    segs.push(v);
    return ` ${k}="\u0000${n}\u0000"`;
  });
  for (const t of tokens(html)) {
    if (t.text !== undefined) {
      if (t.skip) { flush(); parts.push(t.text); } else run.push(t.text);
    } else if (!t.comment && INLINE.has(t.name)) {
      run.push(attrs(t.tag));
    } else {
      flush();
      parts.push(t.comment ? t.tag : attrs(t.tag));
    }
  }
  flush();
  return { parts, segs };
}

export function join(parts, segs) {
  return parts.map((p) => (typeof p === 'string' ? p : segs[p.n])).join('')
    .replace(/\u0000(\d+)\u0000/g, (_, n) => segs[+n].replace(/"/g, '&quot;'));
}
