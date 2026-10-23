/**
 * Conversió de l'HTML dels cursos antics als blocs de la plantilla (src/courses/_kit/blocks.jsx).
 * Es fa servir només en importar (node tools/kit-import/<curs>.mjs); el resultat es desa com a
 * mòduls JS dins de src/courses/<curs>/kit/ i, a partir d'aquí, es treballa sobre aquests mòduls.
 *
 * Inline: <strong>/<b> → **…**, <em>/<i> → *…*, <code> → `…`, <a href> → [..](..), <br> → \n,
 * <math> → $…$ o $$…$$ (vegeu mathml.mjs), <sub>/<sup> → $_{…}$/$^{…}$ si només hi ha text.
 * Si un element té marcatge que no es pot expressar així (spans amb classe, imatges…),
 * el bloc es manté com a { t: 'html' }.
 */
import { parse } from 'node-html-parser';
import { mathToTeX } from './mathml.mjs';

const ESC = /([$*`[\]\\])/g;
const escText = (s) => s.replace(ESC, '\\$1');
const decode = (s) => s.replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&amp;/g, '&');

/** Markup inline d'un node, o null si té coses que no es poden expressar amb el marcatge. */
export function toMarkup(node) {
  let out = '';
  for (const n of node.childNodes) {
    if (n.nodeType === 3) { out += escText(decode(n.rawText)).replace(/\s*\n\s*/g, ' '); continue; }
    if (n.nodeType !== 1) continue;
    const tag = n.tagName.toLowerCase();
    const inner = () => toMarkup(n);
    if (tag === 'strong' || tag === 'b') { const x = inner(); if (x === null) return null; out += x.trim() ? '**' + x + '**' : x; }
    else if (tag === 'em' || tag === 'i') { const x = inner(); if (x === null) return null; out += x.trim() ? '*' + x + '*' : x; }
    else if (tag === 'code') out += '`' + decode(n.text).replace(/`/g, "'") + '`';
    else if (tag === 'br') out += '\n';
    else if (tag === 'math') {
      const m = mathToTeX(n);
      if (!m) return null;
      out += m.display ? '$$' + m.tex + '$$' : '$' + m.tex + '$';
    } else if ((tag === 'sub' || tag === 'sup') && n.childNodes.every((c) => c.nodeType === 3)) {
      const t = decode(n.text).replace(/[\\{}%#&_$^~]/g, (c) => '\\' + c);
      out += '$' + (tag === 'sub' ? '_' : '^') + '{\\text{' + t + '}}$';
    }
    else if (tag === 'a') {
      const href = n.getAttribute('href') || '';
      const x = inner(); if (x === null) return null;
      out += href ? `[${x}](${href})` : x;
    } else if (tag === 'span' && !n.getAttribute('class')) { const x = inner(); if (x === null) return null; out += x; }
    else return null;
  }
  return out;
}

const tidy = (s) => s.replace(/[ \t]+/g, ' ').replace(/ ?\n ?/g, '\n').trim();

/** Una cel·la, un element de llista… en marcatge o, si no es pot, en HTML (marcat amb «html:»). */
function cell(n) {
  const m = toMarkup(n);
  return m === null ? { html: n.innerHTML.trim() } : tidy(m);
}

const isTag = (c, ...tags) => c.nodeType === 1 && tags.includes(c.tagName.toLowerCase());

/**
 * Elements d'una llista: text amb marcatge o { x, items, ordered } si l'element té una subllista.
 * Un <li> amb paràgrafs (llista «solta») s'uneix amb salts de línia. null si no es pot expressar.
 */
function listOf(n) {
  const out = [];
  for (const li of n.childNodes.filter((c) => isTag(c, 'li'))) {
    const subs = li.childNodes.filter((c) => isTag(c, 'ul', 'ol'));
    const rest = li.childNodes.filter((c) => !subs.includes(c));
    if (subs.length > 1 || rest.some((c) => isTag(c, 'div', 'table', 'pre', 'blockquote', 'figure', 'details'))) return null;
    let x;
    if (rest.some((c) => isTag(c, 'p'))) {
      const ps = rest.filter((c) => c.nodeType === 1 || c.rawText.trim());
      if (!ps.every((c) => isTag(c, 'p'))) return null;
      const parts = ps.map(toMarkup);
      if (parts.includes(null)) return null;
      x = parts.map(tidy).join('\n');
    } else {
      const m = toMarkup({ childNodes: rest });
      if (m === null) return null;
      x = tidy(m);
    }
    if (!subs.length) { out.push(x); continue; }
    const sub = listOf(subs[0]);
    if (!sub) return null;
    out.push({ x, items: sub, ordered: isTag(subs[0], 'ol') || undefined });
  }
  return out;
}

const CO = { abstract: 'summary', important: 'prop', info: 'note', note: 'note', tip: 'tip', warning: 'warn', example: 'example', question: 'question' };

/** Converteix una llista de nodes en blocs. ctx.diagramClass: classes de figures (per conservar-les). */
export function toBlocks(nodes, ctx = {}) {
  const out = [];
  const push = (b) => out.push(b);
  for (const n of nodes) {
    if (n.nodeType === 3) { const t = n.rawText.trim(); if (t) push({ t: 'p', x: escText(decode(t)) }); continue; }
    if (n.nodeType !== 1) continue;
    const tag = n.tagName.toLowerCase();
    const cls = n.getAttribute('class') || '';
    if (n.getAttribute && n.getAttribute('data-lab')) { push({ t: 'lab', id: n.getAttribute('data-lab') }); continue; }
    if (tag === 'p') {
      const m = toMarkup(n);
      if (m === null) push({ t: 'html', h: n.outerHTML });
      else if (m.trim()) push({ t: 'p', x: tidy(m) });
    } else if (tag === 'h3' || tag === 'h4') {
      const m = toMarkup(n);
      // sense la numeració antiga («1.1. …»): la plantilla numera els apartats
      push({ t: 'h', id: n.getAttribute('id') || undefined, x: (m === null ? n.text.trim() : tidy(m)).replace(/^\d+(\.\d+)*\.\s+/, '') });
    } else if (tag === 'ul' || tag === 'ol') {
      const items = listOf(n);
      if (!items) push({ t: 'html', h: n.outerHTML });
      else push({ t: 'list', ordered: tag === 'ol' || undefined, items });
    } else if ((tag === 'div' && /\btw\b/.test(cls)) || tag === 'table') {
      const table = tag === 'table' ? n : n.querySelector('table');
      if (!table) { push({ t: 'html', h: n.outerHTML }); continue; }
      const head = table.querySelectorAll('thead th').map(cell);
      const rows = table.querySelectorAll('tbody tr').map((tr) => tr.childNodes.filter((c) => c.nodeType === 1).map(cell));
      if ([...head, ...rows.flat()].some((c) => typeof c !== 'string')) push({ t: 'html', h: n.outerHTML });
      else push({ t: 'table', head: head.length ? head : undefined, rows });
    } else if (tag === 'div' && /\bco\b/.test(cls)) {
      const kind = (cls.match(/co-([a-z]+)/) || [])[1];
      const titleEl = n.querySelector('.co-t');
      const title = titleEl ? tidy(toMarkup(titleEl.querySelectorAll('span').pop() || titleEl) ?? titleEl.text) : undefined;
      const body = n.querySelector('.co-b');
      const inner = body ? toBlocks(body.childNodes, ctx) : [];
      const t = CO[kind] || 'note';
      if (t === 'question') {
        // pregunta d'autocomprovació: l'enunciat fins al <hr> o <details>, la resposta després
        const cut = inner.findIndex((b) => b.t === 'hr' || b.t === 'details');
        const q = cut >= 0 ? inner.slice(0, cut) : inner;
        const a = cut >= 0 ? inner.slice(cut + 1).flatMap((b) => (b.t === 'details' ? b.blocks : [b])) : [];
        push({ t: 'question', title, q, a });
      } else push({ t, title, blocks: inner });
    } else if (tag === 'hr') push({ t: 'hr' });
    else if (tag === 'details' && /\bco-question\b/.test(cls)) {
      // pregunta de repàs plegable: el <summary> és l'enunciat i el cos, la resposta
      const sum = n.querySelector('summary');
      const qx = sum ? tidy(toMarkup(sum.querySelectorAll('span').pop() || sum) ?? sum.text) : '';
      const body = n.querySelector('.co-b');
      push({ t: 'question', q: qx ? [{ t: 'p', x: qx }] : [], a: body ? toBlocks(body.childNodes, ctx) : [] });
    } else if (tag === 'details') {
      const sum = n.querySelector('summary');
      const rest = n.childNodes.filter((c) => c !== sum);
      push({ t: 'details', title: sum ? tidy(toMarkup(sum) ?? sum.text) : '', blocks: toBlocks(rest, ctx) });
    } else if (tag === 'figure' || (tag === 'div' && /\bvz\b/.test(cls))) {
      const cap = n.querySelector('figcaption');
      const svgHost = cap ? (() => { const c = n.clone(); c.querySelector('figcaption')?.remove(); return c; })() : n;
      push({ t: 'diagram', svg: svgHost.innerHTML.trim(), cls: cls || undefined, caption: cap ? tidy(toMarkup(cap) ?? cap.text) : undefined });
    } else if (tag === 'blockquote') push({ t: 'summary', blocks: toBlocks(n.childNodes, ctx) });
    else if (tag === 'pre') push({ t: 'code', lang: ctx.codeLang || 'text', src: decode(n.text) });
    else if (tag === 'h2' || tag === 'h1') push({ t: 'h', id: n.getAttribute('id') || undefined, x: tidy(toMarkup(n) ?? n.text) });
    else push({ t: 'html', h: n.outerHTML });
  }
  return out;
}

/** Talla un HTML per <h2>: [{ id, title, nodes }] (el que hi ha abans del primer h2 va a «intro»). */
export function splitSections(html) {
  const root = parse(html, { comment: false, blockTextElements: { script: true, style: true, pre: true } });
  const secs = [];
  let cur = { id: null, title: null, nodes: [] };
  for (const n of root.childNodes) {
    if (n.nodeType === 1 && n.tagName.toLowerCase() === 'h2') {
      secs.push(cur);
      cur = { id: n.getAttribute('id'), title: tidy(toMarkup(n) ?? n.text), nodes: [] };
    } else cur.nodes.push(n);
  }
  secs.push(cur);
  return secs;
}

export { parse };

/**
 * Passa les preguntes d'autocomprovació a exercicis de comprovació de la plantilla
 * ({ t: 'check', ex: { id, type: 'open', title, qb, sol } }), amb un id estable per apartat.
 */
export function finalize(blocks, secId) {
  let n = 0;
  const walk = (list) => list.map((b) => {
    if (b.t === 'question') {
      n++;
      return { t: 'check', ex: { id: secId + '-q' + n, type: 'open', title: b.title, qb: b.q, sol: b.a && b.a.length ? b.a : undefined } };
    }
    return b.blocks ? { ...b, blocks: walk(b.blocks) } : b;
  });
  return walk(blocks);
}
