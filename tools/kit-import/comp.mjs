/**
 * Importa «Computadors CP1» (src/courses/comp/content) a la plantilla:
 *   src/courses/comp/kit/toc.js         temes T1, T2.1 i T2.2 (el T3 s'escriu a mà a kit/units/t3.js)
 *   src/courses/comp/kit/units/*.js     teoria de cada tema, amb els laboratoris
 *   src/courses/comp/kit/exercises.js   exercicis resolts (activitats i model d'examen), en apartats
 * El contingut es genera amb el codi del curs (makeCore/makeTheory/makeExercises) en català i en
 * castellà i es converteix en blocs. Ús: node tools/kit-import/comp.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { makeCore, LABM } from '../../src/courses/comp/content/core.js';
import { makeTheory } from '../../src/courses/comp/content/theory.js';
import { makeExercises } from '../../src/courses/comp/content/exercises.js';
import { parse, toBlocks, toMarkup } from './html.mjs';
import { clean, moduleSource, zipBlocks, zipValue } from './zip.mjs';

const root = new URL('../../src/courses/comp/', import.meta.url);
const out = (p, v, h) => { mkdirSync(new URL('.', new URL(p, root)), { recursive: true }); writeFileSync(new URL(p, root), moduleSource(v, h)); };
const HEAD = "// Generat per tools/kit-import/comp.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.";
const html = (b) => (Array.isArray(b) ? b.join('') : String(b ?? ''));
const tidy = (s) => s.replace(/[ \t]+/g, ' ').replace(/ ?\n ?/g, '\n').trim();
const mk = (n) => { const m = toMarkup(n); return m === null ? null : tidy(m); };

/* ---------- passos del motor (stepsE / hand) → bloc { t: 'steps' } ---------- */
const SM = '\u0002';
function withSteps(C, lang) {
  const TT = (x) => (x == null ? '' : typeof x === 'string' ? x : x[lang] != null ? x[lang] : x.ca);
  const step = (s) => {
    const h = TT(s.h), m = TT(s.m), t = TT(s.t), w = TT(s.w);
    const parts = [];
    if (h) parts.push('**' + h.replace(/([*`$[\]\\])/g, '\\$1') + '**');
    if (m) parts.push('`' + m.replace(/`/g, "'") + '`');
    if (t) parts.push(t.replace(/([*`$[\]\\])/g, '\\$1'));
    const o = { x: parts.join('\n') };
    if (w) o.why = w.replace(/([*`$[\]\\])/g, '\\$1');
    if (s.table) o.table = { head: s.table.head.map(TT), rows: s.table.rows.map((r) => r.map(TT)) };
    if (s.c === 'done') o.done = true;
    return o;
  };
  const stepsE = (arr) => SM + JSON.stringify(arr.map(step)) + SM;
  return { ...C, stepsE, hand: (rows) => stepsE(rows.map(([h, m, w, c]) => ({ h, m, w, c }))) };
}

/* ---------- elements propis de comp: caixes .bx, taules .tbl, avisos .fb, passos ---------- */
const BXK = { def: 'def', tip: 'tip', warn: 'warn', ex: 'example', thm: 'box' };
function compBlock(n, sub) {
  const tag = n.tagName.toLowerCase(), cls = n.getAttribute('class') || '';
  if (tag === 'div' && /\bbx\b/.test(cls)) {
    const kind = (cls.match(/\bbx\s+(\w+)/) || [])[1];
    const bh = n.querySelector('.bh');
    let title = bh ? mk(bh) ?? bh.text.trim() : '';
    const body = sub(n.childNodes.filter((c) => c !== bh));
    const t = BXK[kind] || 'note';
    if (t === 'def') title = title.replace(/^(Definició|Definición)\s*·?\s*/, '');
    if (t === 'example') title = title.replace(/^(Exemple|Ejemplo)\s*:?\s*/, '');
    if (t === 'tip' || t === 'warn') title = '';
    if (t === 'box' && /^(Recepta|Receta)/.test(title)) return { t: 'method', title, blocks: body };
    return { t, title: title || undefined, blocks: body };
  }
  if (tag === 'div' && /\btbl\b/.test(cls) && n.querySelector('table')) return sub([n.querySelector('table')]);
  // passos ja pintats en HTML (p. ex. dins de «Una altra manera»)
  if (tag === 'div' && /\bstepsE\b/.test(cls)) {
    const esc = (t) => t.replace(/([*`$[\]\\])/g, '\\$1');
    const steps = n.querySelectorAll('.st').map((st) => {
      const body = st.querySelector('.body');
      const h = body.querySelector('.small'), m = body.querySelector('.mm'), w = body.querySelector('.why'), tb = body.querySelector('table');
      const t = body.childNodes.filter((c) => c.nodeType === 1 && c.tagName === 'DIV' && !(c.getAttribute('class') || '').trim()).map((c) => c.text.trim()).join(' ');
      const x = [h && '**' + esc(h.text.trim()) + '**', m && '`' + m.text.trim().replace(/`/g, "'") + '`', t && esc(t)].filter(Boolean).join('\n');
      const o = { x };
      if (w) o.why = esc(w.text.trim());
      if (tb) o.table = { head: tb.querySelectorAll('thead th').map((c) => c.text.trim()), rows: tb.querySelectorAll('tbody tr').map((r) => r.querySelectorAll('td').map((c) => c.text.trim())) };
      if (/\bdone\b/.test(st.getAttribute('class') || '')) o.done = true;
      return o;
    });
    return { t: 'steps', steps };
  }
  if (tag === 'div' && /\bfb\b/.test(cls)) {
    const k = /\bwarn\b/.test(cls) ? 'warn' : /\bok\b/.test(cls) ? 'tip' : 'note';
    const m = mk(n);
    return m !== null ? { t: k, x: m } : { t: k, blocks: sub(n.childNodes) };
  }
  if (tag === 'div' && /\blbl-s\b/.test(cls)) return { t: 'h', x: mk(n) ?? n.text.trim() };
  if (tag === 'details' && /\bacc\b/.test(cls)) {
    const sum = n.querySelector('summary'), inner = n.querySelector('.inner') || n;
    return { t: 'details', title: sum ? mk(sum) ?? sum.text.trim() : '', blocks: sub(inner.childNodes.filter((c) => c !== sum)) };
  }
  return undefined;
}

/** HTML (amb marques de laboratori i de passos) → blocs. */
function blocksOf(h, labId) {
  const res = [];
  h.split(LABM).forEach((part, i) => {
    if (i % 2) { const [w, id, cfg] = JSON.parse(part); res.push(clean({ t: 'lab', id: w, props: { id: labId ? labId(id) : id, cfg: cfg || {} } })); return; }
    part.split(SM).forEach((seg, j) => {
      if (j % 2) { res.push({ t: 'steps', steps: JSON.parse(seg) }); return; }
      if (seg.trim()) res.push(...toBlocks(parse(seg).childNodes, { block: compBlock }));
    });
  });
  return res;
}

/* ---------- teoria ---------- */
const LANGS = ['ca', 'es'];
const C = Object.fromEntries(LANGS.map((l) => [l, makeCore(l)]));
const TH = Object.fromEntries(LANGS.map((l) => [l, makeTheory(C[l])]));
const UNITS = [['t1', '1'], ['t21', '2.1'], ['t22', '2.2']];
const toc = [];
for (const [u, n] of UNITS) {
  const [ebCa, tCa, leadCa] = TH.ca.PAGE[u](), [, tEs, leadEs] = TH.es.PAGE[u]();
  void ebCa;
  const sections = [], blocks = {};
  TH.ca.TH[u].forEach((s, i) => {
    const se = TH.es.TH[u][i];
    sections.push(clean({ id: s.id, t: zipValue(s.t(), se.t()), lab: s.lab ? true : undefined }));
    blocks[s.id] = zipBlocks(blocksOf(html(s.b())), blocksOf(html(se.b())));
  });
  const intro = zipBlocks(toBlocks(parse('<p>' + leadCa + '</p>').childNodes), toBlocks(parse('<p>' + leadEs + '</p>').childNodes));
  toc.push({ id: u, n, t: zipValue(tCa, tEs), langs: ['ca', 'es'], sections });
  out('kit/units/' + u + '.js', clean({ intro, sections: blocks, examEnd: [] }), HEAD);
}

/* ---------- exercicis resolts ---------- */
const EX = Object.fromEntries(LANGS.map((l) => [l, makeExercises(withSteps(C[l], l))]));
const GROUP_UNIT = { g1: 't1', g2: 't1', g3: 't21', g4: 't21', g5: 't22' };
const PART_UNIT = { 'p-mida': 't1' };
const fnv = (f) => (typeof f === 'function' ? f() : f);
const markup = (h) => { const r = parse('<p>' + h + '</p>'); const m = toMarkup(r.firstChild); return m === null ? { html: h } : tidy(m); };
const zipText = (a, b) => {
  const x = markup(a), y = markup(b);
  if (typeof x === 'string' && typeof y === 'string') return zipValue(x, y);
  return { html: zipValue(a, b) };
};
function answer(a, ae) {
  if (!a) return undefined;
  const o = { k: a.k };
  if (a.k === 'ieee') Object.assign(o, { bits: a.bits, hex: a.hex });
  else o.v = a.v;
  if (a.k === 'mc') o.opts = a.opts().map((t, i) => zipText(t, ae.opts()[i]));
  if (a.show != null) o.show = zipValue(String(fnv(a.show)), String(fnv(ae.show)));
  if (a.ph) o.ph = zipValue(a.ph(), ae.ph());
  if (a.alt) o.alt = a.alt.map(([v, msg], i) => ({ v, msg: zipValue(msg(), ae.alt[i][1]()) }));
  return o;
}
const items = [];
EX.ca.EXG.forEach((g, gi) => {
  const ge = EX.es.EXG[gi];
  g.items.forEach((c, ci) => {
    const ce = ge.items[ci];
    const unit = PART_UNIT[c.id] || GROUP_UNIT[g.id] || (/^p-(base|op|sm|c1|c2|ce|ie)$/.test(c.id) ? 't21' : 't1');
    const parts = c.parts.map((p, pi) => {
      const pe = ce.parts[pi];
      const labId = (id) => 'exl-' + c.id + '-' + pi + (id ? '' : '');
      const sol = zipBlocks(blocksOf(html(p.sol ? p.sol() : '')), blocksOf(html(pe.sol ? pe.sol() : '')));
      return clean({
        l: zipValue(String(fnv(p.l) ?? ''), String(fnv(pe.l) ?? '')),
        q: zipText(html(p.q()), html(pe.q())),
        a: answer(p.a, pe.a),
        sol: sol.length ? sol : undefined,
        lab: p.lab ? { id: p.lab[0], props: { id: labId(), cfg: p.lab[1] } } : undefined,
      });
    });
    const exam = g.id === 'g6';
    items.push(clean({
      id: 'c-' + c.id, unit, level: exam ? 'exam' : 'easy', type: 'cparts', src: exam ? 'exam' : 'new',
      srcName: exam ? ["Model d'examen CP1", 'Modelo de examen CP1'] : undefined,
      basedOn: exam ? undefined : zipValue(g.g() + (c.src ? ' · ' + markupPlain(fnv(c.src)) : ''), ge.g() + (ce.src ? ' · ' + markupPlain(fnv(ce.src)) : '')),
      title: c.src ? zipValue(markupPlain(fnv(c.src)), markupPlain(fnv(ce.src))) : undefined,
      q: c.q ? zipText(html(c.q()), html(ce.q())) : undefined,
      hint: c.hint ? zipText(c.hint(), ce.hint()) : undefined,
      note: g.note ? zipText(g.note(), ge.note()) : undefined,
      parts,
    }));
  });
});
function markupPlain(h) { return parse('<p>' + h + '</p>').text.trim(); }

out('kit/toc.js', toc, HEAD);
out('kit/exercises.js', { items }, HEAD);
console.log('comp:', toc.map((u) => u.id + ' (' + u.sections.length + ' apartats)').join(', '), '·', items.length, 'exercicis resolts,', items.reduce((n, x) => n + x.parts.length, 0), 'apartats');
