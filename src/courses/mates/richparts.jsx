import { createElement, memo, useMemo } from 'react';
import Rich from '../../lib/Rich.jsx';
import { MARK } from './content/marks.js';

/**
 * HTML del contingut amb elements interactius marcats (MARK + JSON + MARK): laboratoris i passos.
 * Les marques poden ser dins d'altres elements (p. ex. uns passos dins d'una caixa d'exemple):
 * els elements que contenen una marca es fan elements de React i la resta de l'HTML es pinta
 * tal qual amb <Rich> (en un contenidor amb display:contents, classe rc).
 */
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
const INLINE = new Set(['p', 'span', 'b', 'i', 'em', 'strong', 'a', 'label', 'summary', 'small', 'sup', 'sub', 'button', 'h1', 'h2', 'h3', 'h4']);
const TOKEN = new RegExp('<!--[\\s\\S]*?-->|<(/?)([a-zA-Z][\\w:-]*)((?:[^>"\']|"[^"]*"|\'[^\']*\')*)>|' + MARK + '([^' + MARK + ']*)' + MARK, 'g');
const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', '#39': "'" };
const unent = (s) => s.replace(/&(#?\w+);/g, (m, e) => ENT[e] ?? (e[0] === '#' ? String.fromCodePoint(e[1] === 'x' ? parseInt(e.slice(2), 16) : +e.slice(1)) : m));
const ATTR = /([^\s=/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
const RENAME = { class: 'className', for: 'htmlFor', colspan: 'colSpan', rowspan: 'rowSpan', tabindex: 'tabIndex', readonly: 'readOnly' };

function attrsOf(src) {
  const out = {};
  for (const m of src.matchAll(ATTR)) {
    const name = m[1], raw = m[2] ?? m[3] ?? m[4];
    const v = raw == null ? true : unent(raw);
    if (name === 'style') {
      const st = {};
      String(v).split(';').forEach((d) => {
        const i = d.indexOf(':'); if (i < 0) return;
        const k = d.slice(0, i).trim(), val = d.slice(i + 1).trim();
        if (k) st[k.startsWith('--') ? k : k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = val;
      });
      out.style = st;
    } else out[RENAME[name] || name] = v;
  }
  return out;
}

/** Arbre mínim: només interessen els elements que contenen marques; la resta són trossos de text. */
function parse(html) {
  const root = { tag: null, inner: 0, children: [] };
  const stack = [root];
  TOKEN.lastIndex = 0;
  let m;
  while ((m = TOKEN.exec(html))) {
    const top = stack[stack.length - 1];
    if (m[4] != null) {
      top.children.push({ mark: JSON.parse(m[4]), start: m.index, end: TOKEN.lastIndex });
      stack.forEach((n) => { n.has = true; });
    } else if (m[2]) {
      const tag = m[2].toLowerCase();
      if (m[1]) {
        // tancament: puja fins a l'element que es tanca
        for (let i = stack.length - 1; i > 0; i--) {
          if (stack[i].tag === tag) { const n = stack[i]; n.innerEnd = m.index; n.end = TOKEN.lastIndex; stack.length = i; break; }
        }
      } else if (!VOID.has(tag) && !/\/\s*$/.test(m[3])) {
        const n = { tag, attrs: m[3], start: m.index, inner: TOKEN.lastIndex, children: [], has: false };
        top.children.push(n);
        stack.push(n);
      }
    }
  }
  root.innerEnd = html.length;
  return root;
}

/** Contingut d'un node: trossos d'HTML, elements amb marques (recursiu) i components. */
function build(html, node, renderMark, keyp) {
  const out = [];
  const wrap = node.tag && INLINE.has(node.tag) ? 'span' : 'div';
  let pos = node.inner, nh = 0, ne = 0;
  // claus per ordre (no per posició): en canviar d'idioma els components no es tornen a muntar
  const flush = (to) => {
    const s = html.slice(pos, to);
    if (s.trim()) out.push(<Rich key={keyp + 'h' + nh++} as={wrap} className="rc" html={s} />);
  };
  node.children.forEach((c) => {
    if (c.mark) { flush(c.start); out.push(renderMark(c.mark, c.mark.join('|'))); pos = c.end; return; }
    if (!c.has) return;
    flush(c.start);
    const k = keyp + 'e' + ne++;
    out.push(createElement(c.tag, { key: k, ...attrsOf(c.attrs) }, ...build(html, c, renderMark, k + '.')));
    pos = c.end ?? html.length;
  });
  flush(node.innerEnd ?? html.length);
  return out;
}

/** HTML amb marques: renderMark(dades, key) torna el component de cada marca. */
export const RichParts = memo(function RichParts({ html, renderMark }) {
  return useMemo(() => {
    if (!html) return null;
    if (!html.includes(MARK)) return <Rich className="rc" html={html} />;
    return build(html, parse(html), renderMark, '');
  }, [html, renderMark]);
});
