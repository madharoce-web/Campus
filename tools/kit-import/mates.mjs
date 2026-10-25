/**
 * Importa «Teoria Mates CP1» (src/courses/mates/content/*.js, en català i castellà) a la plantilla:
 *   src/courses/mates/kit/toc.js        temes: 1.1 conjunts, 1.2 relacions, 2.1 nombres, 2.2 complexos, 3.1 matrius, 3.2 determinants
 *   src/courses/mates/kit/units/*.js    blocs de cada tema («Per entendre-ho» → mode Explicat; passos → passos un a un)
 *   src/courses/mates/kit/formulas.js   el formulari de l'examen (Formulari 1), amb els mateixos identificadors (U5, C7…)
 *   src/courses/mates/kit/exercises.js  els exercicis resolts (fulls 1 i 2, CP1-2025 i CP2-2025)
 * Les fórmules del format dels apunts (\ov, \fr, \mat…) passen a TeX amb src/courses/mates/kit/mtex.js.
 * Els generadors (banc per nivells, pràctica i simulacre) no s'importen: es fan servir tal qual
 * (vegeu src/courses/mates/kit/families.js). Ús: node tools/kit-import/mates.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { parse, toBlocks, toMarkup } from './html.mjs';
import { clean, moduleSource, zipBlocks, zipValue } from './zip.mjs';
import { mk, mkToHTML, render, tex } from '../../src/courses/mates/kit/mtex.js';

// les fórmules es queden com a marcatge (no com a MathML) dins de l'HTML que generen els apunts
const ENC = (m) => '<kit-mk x="' + encodeURIComponent(m) + '"></kit-mk>';
render.inline = (src) => ENC(mk(src));
render.display = (src) => ENC('$$' + tex(src) + '$$');
const { getContent } = await import('../../src/courses/mates/content/index.js');
const { MARK } = await import('../../src/courses/mates/content/marks.js');

const C = { ca: getContent('ca'), es: getContent('es') };
const root = new URL('../../src/courses/mates/', import.meta.url);
// claus en un ordre llegible (t, id, mode, title, x… primer), perquè els mòduls s'editin bé
const FIRST = ['t', 'id', 'n', 'mode', 'title', 'label', 'x', 'q', 'qb'];
const order = (v) => {
  if (Array.isArray(v)) return v.map(order);
  if (!v || typeof v !== 'object') return v;
  const ks = Object.keys(v).sort((a, b) => (FIRST.indexOf(a) + 1 || 99) - (FIRST.indexOf(b) + 1 || 99));
  return Object.fromEntries(ks.map((k) => [k, order(v[k])]));
};
const out = (p, v, h) => { mkdirSync(new URL('.', new URL(p, root)), { recursive: true }); writeFileSync(new URL(p, root), moduleSource(order(v), h)); };
const HEAD = "// Generat per tools/kit-import/mates.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.";
const tidy = (s) => s.replace(/[ \t]+/g, ' ').replace(/ ?\n ?/g, '\n').trim();
let LANG = 'ca';
const stats = { html: 0, stepHtml: 0 };

/* ---------- HTML dels apunts → HTML net per convertir ---------- */
const MARKS = new RegExp(MARK + '([^' + MARK + ']*)' + MARK, 'g');
function prep(h) {
  return String(h)
    .replace(/<span class="(?:disp )?m">((?:<kit-mk x="[^"]*"><\/kit-mk>)+)<\/span>/g, '$1')
    .replace(/<div class="(?:disp )?m">((?:<kit-mk x="[^"]*"><\/kit-mk>)+)<\/div>/g, '<p>$1</p>')
    .replace(MARKS, (m, j) => { const a = JSON.parse(j); return a[0] === 'lab' ? `<div data-mlab="${encodeURIComponent(j)}"></div>` : `<div data-mstp="${a[1]}"></div>`; });
}
/** HTML en línia → marcatge (null si no es pot). */
function mkHtml(h) {
  const r = parse('<p>' + prep(h) + '</p>');
  const m = toMarkup(r.firstChild);
  return m === null ? null : tidy(m);
}

/* ---------- passos (stepper i solucions) ---------- */
const FORM = C.ca.FORM;
const fname = (k) => (FORM[k] ? FORM[k][0] : k);
function stepOf(s) {
  const $ = C[LANG];
  const out = {};
  const parts = [];
  if (s.h) parts.push('**' + (mkHtml($.md(s.h)) ?? s.h) + '**');
  if (s.m) parts.push(mk(s.m));
  if (s.t) {
    const h = $.smart(s.t);
    const m = mkHtml(h);
    if (m !== null) parts.push(m);
    else {
      // taula o figura dins d'un pas
      const bl = toBlocks(parse(prep(h)).childNodes, { block: mtBlock });
      const tb = bl.find((b) => b.t === 'table');
      const ps = bl.filter((b) => b.t === 'p').map((b) => b.x);
      parts.push(...ps);
      if (tb) out.table = { head: tb.head || [], rows: tb.rows };
      const rest = bl.filter((b) => b.t !== 'table' && b.t !== 'p');
      if (rest.length) { out.blocks = rest; stats.stepHtml++; }
    }
  }
  out.x = parts.join('\n');
  if (s.w) out.why = mkHtml($.smart(s.w)) ?? s.w;
  if (s.f && s.f.length) { out.f = s.f; out.ft = s.f.map(fname).join(' · '); }
  if (s.nf) out.nf = mkHtml($.smart(s.nf)) ?? s.nf;
  if (s.c === 'done') out.done = true;
  return out;
}
const stepsOf = (arr) => (arr || []).map(stepOf);

/* ---------- elements propis dels apunts ---------- */
const BXK = { def: 'def', thm: 'thm', warn: 'warn', ex: 'example', form: 'box', rub: 'note' };
const DEFAULT_HEAD = /^(Definició|Definición|Compte|Cuidado|Exemple|Ejemplo|Per entendre-ho|Para entenderlo)$/;
function mtBlock(n, sub) {
  const tag = n.tagName.toLowerCase(), cls = n.getAttribute('class') || '';
  const lab = n.getAttribute('data-mlab');
  if (lab) { const a = JSON.parse(decodeURIComponent(lab)); return { t: 'lab', id: a[1], props: { id: a[2], cfg: a[3] && Object.keys(a[3]).length ? a[3] : undefined } }; }
  const stp = n.getAttribute('data-mstp') || (tag === 'div' && /\bstepper\b/.test(cls) && n.querySelector('[data-mstp]')?.getAttribute('data-mstp'));
  if (stp) return { t: 'steps', reveal: true, steps: stepsOf(C[LANG].STEPS[stp].gen()) };
  if (tag === 'div' && /\bbx\b/.test(cls)) {
    const kind = (cls.match(/\bbx\s+(\w+)/) || [])[1];
    const bh = n.querySelector('.bh');
    const head = bh ? mkHtml(bh.innerHTML) ?? bh.text.trim() : '';
    const blocks = sub(n.childNodes.filter((c) => c !== bh));
    if (kind === 'tip') return { t: 'box', title: head, mode: 'explained', blocks };
    if (kind === 'def') return { t: 'def', title: head.replace(/^(Definición|Definició)( · )?/, '') || undefined, blocks };
    const t = BXK[kind] || 'note';
    const title = DEFAULT_HEAD.test(head) ? undefined : head || undefined;
    if (t === 'example') return { t: 'example', title, blocks };
    return { t, title, label: t === 'thm' || t === 'box' ? false : undefined, blocks };
  }
  if (tag === 'div' && /\b(row|noprint)\b/.test(cls) && n.querySelector('[data-hzgo]')) return null; // enllaços a l'antic banc
  if ((tag === 'table' || (tag === 'div' && /\btbl\b/.test(cls))) && n.querySelector('.fref')) {
    // referències al formulari dins d'una cel·la: en línia
    n.querySelectorAll('.fref').forEach((fr) => fr.replaceWith(parse('<span>' + fr.querySelectorAll('.fk').map((fk) => fk.innerHTML).join(' · ') + '</span>').firstChild));
    n.querySelectorAll('.fk, span.muted').forEach((x) => x.removeAttribute('class'));
  }
  if (tag === 'div' && /\btbl\b/.test(cls)) return sub(n.childNodes);
  if (tag === 'kit-mk') return { t: 'p', x: mkHtml(n.outerHTML) };
  if (tag === 'div' && /\b(small|disp)\b/.test(cls)) {
    const kids = n.childNodes.filter((c) => c.nodeType === 1 || c.rawText.trim());
    // una graella de fórmules (a) …, b) …): llista
    if (kids.length > 2 && kids.every((c) => c.nodeType === 1 && c.tagName.toLowerCase() === 'kit-mk')) return { t: 'list', items: kids.map((c) => mkHtml(c.outerHTML)) };
    const m = mkHtml(n.innerHTML);
    if (m !== null) return { t: 'p', x: m };
  }
  if (tag === 'div' && /\bfref\b/.test(cls)) {
    return { t: 'list', items: n.querySelectorAll('.fk').map((fk) => { const b = fk.querySelector('b'); const rest = fk.childNodes.filter((c) => c !== b); return '**' + b.text.trim() + '** ' + tidy(toMarkup({ childNodes: rest }) ?? ''); }) };
  }
  if (tag === 'div' && /\bfno\b/.test(cls)) { const m = mkHtml(n.innerHTML); return m !== null ? { t: 'p', x: m } : undefined; }
  if (tag === 'div' && /\bsteps\b/.test(cls)) {
    // passos ja pintats (stepRow): una fila .st per pas
    const steps = n.querySelectorAll('.st').map((st) => {
      const body = st.querySelector('.body');
      const why = body.querySelector('.why');
      const x = tidy(toMarkup({ childNodes: body.childNodes.filter((c) => c !== why) }) ?? body.text);
      return clean({ x, why: why ? tidy(toMarkup(why) ?? why.text) : undefined, done: /\bdone\b/.test(st.getAttribute('class') || '') || undefined });
    });
    return { t: 'steps', steps };
  }
  if (tag === 'div' && !cls && n.childNodes.every((c) => c.nodeType !== 1 || /^(p|ul|ol|table|div|h3|h4)$/i.test(c.tagName))) return sub(n.childNodes);
  return undefined;
}
const KITMK = /<kit-mk x="([^"]*)"><\/kit-mk>/g;
const blocksOf = (html) => {
  const bl = toBlocks(parse(prep(html)).childNodes, { block: mtBlock });
  // el que es queda en HTML porta les fórmules ja en MathML
  const walk = (l) => l.forEach((b) => { if (b.t === 'html') { stats.html++; b.h = b.h.replace(KITMK, (m, x) => mkToHTML(decodeURIComponent(x))); } if (b.blocks) walk(b.blocks); });
  walk(bl);
  return bl;
};
const both = (f) => { LANG = 'ca'; const a = f(C.ca); LANG = 'es'; const b = f(C.es); LANG = 'ca'; return [a, b]; };

/* ---------- temes ---------- */
const UNITS = [['conj', '1.1'], ['rel', '1.2'], ['nomb', '2.1'], ['cx', '2.2'], ['mat', '3.1'], ['det', '3.2']];
const toc = [];
for (const [k, n] of UNITS) {
  const [pa, pe] = both(($) => $.PAGE[k]());
  const sections = [], blocks = {};
  C.ca.TH[k].forEach((s, i) => {
    const [ta, te] = both(($) => mkHtml($.TH[k][i].t()) ?? $.TH[k][i].t());
    const [ba, be] = both(($) => blocksOf($.TH[k][i].b()));
    sections.push(clean({ id: s.id, t: zipValue(ta, te), lab: s.lab ? true : undefined }));
    blocks[s.id] = zipBlocks(ba, be);
  });
  toc.push({ id: k, n, t: zipValue(pa[1], pe[1]), sub: zipValue(pa[0], pe[0]), langs: ['ca', 'es'], sections: sections.map(({ lab, ...x }) => x) });
  out('kit/units/' + k + '.js', clean({ intro: [{ t: 'p', x: zipValue(mkHtml(pa[2]), mkHtml(pe[2])) }], sections: blocks, examEnd: [] }), HEAD);
}
out('kit/toc.js', toc, HEAD);

/* ---------- formulari ---------- */
const GROUPS = [
  ['conj', ['Notacions · §1', 'Notaciones · §1'], ['NOT', 'NUM']],
  ['conj', '§2 Unió', ['U1', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7']],
  ['conj', '§2 Intersecció', ['I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7']],
  ['conj', '§2 Diferència', ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9']],
  ['conj', '§2 Complementari', ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9']],
  ['conj', '§2 Relacions · De Morgan', ['R1', 'R2', 'M1', 'M2']],
  ['rel', ['§3 Relacions binàries', '§3 Relaciones binarias'], ['Rref', 'Rsim', 'Rtra', 'Rnoref', 'Rnosim', 'Rnotra', 'Raref', 'Rasim', 'Ratra', 'Req', 'Rord', 'Rest']],
  ['nomb', ['§4 Inducció', '§4 Inducción'], ['IND1', 'IND2', 'IND']],
  ['nomb', ['§5 Intervals', '§5 Intervalos'], ['INTc', 'INTo', 'INTsd', 'INTse']],
];
const used = new Set(GROUPS.flatMap((g) => g[2]));
const cxKeys = Object.keys(FORM).filter((k) => !used.has(k));
GROUPS.push(['cx', ['§6 Nombres complexos', '§6 Números complejos'], cxKeys]);
// el full del CP és en català: els noms i les fórmules es queden com al full
const formulas = {
  groups: GROUPS.map(([unit, t, keys]) => ({
    unit, t,
    items: keys.map((k) => ({ id: k, t: FORM[k][0].replace(/^§\d+(\.\d+)?\s*/, ''), x: mk(FORM[k][1]) })),
  })),
};
out('kit/formulas.js', formulas, HEAD);

/* ---------- exercicis resolts → banc ---------- */
const UNIT_OF = { f1e1: 'conj', f1e2: 'conj', f1e3a: 'conj', f1e3b: 'conj', f1e4a: 'conj', f1e4b: 'conj', f1e4c: 'conj', f1e5: 'rel', f1e6: 'rel',
  cp1e11: 'conj', cp1e12: 'conj', cp1e2: 'conj', cp1e4: 'rel', cp1e51: 'rel', cp2e1: 'cx', cp2e2: 'nomb' };
const METHOD = {
  ca: { m1: 'Mètode 1 · cadena de lleis', m1b: 'Mètode 1 · doble inclusió', m2: 'Mètode 2 · element a element (doble inclusió)', m2b: 'Mètode 2 · Complementari (7) del formulari' },
  es: { m1: 'Método 1 · cadena de leyes', m1b: 'Método 1 · doble inclusión', m2: 'Método 2 · elemento a elemento (doble inclusión)', m2b: 'Método 2 · Complementari (7) del formulario' },
};
const items = [];
C.ca.EXG.forEach((g, gi) => {
  const [gca, ges] = both(($) => $.EXG[gi].g());
  const exam = /^CP/.test(gca);
  g.items.forEach((it, ii) => {
    if (it.out) return;
    const [ex1, ex2] = both(($) => {
      const x = $.EXG[gi].items[ii];
      const M = METHOD[$.lang];
      const sol = [];
      const fb = $.formBox(x);
      if (fb) sol.push(...blocksOf(fb));
      if (x.solH) sol.push(...blocksOf(x.solH()));
      else {
        const two = x.id === 'cp1e2';
        if (x.sol2) sol.push({ t: 'h', x: two ? M.m1b : M.m1 });
        sol.push({ t: 'steps', steps: stepsOf(x.sol()) });
        if (x.sol2) sol.push({ t: 'h', x: two ? M.m2b : M.m2 }, { t: 'steps', steps: stepsOf(x.sol2()) });
      }
      const qh = x.q();
      return {
        qb: blocksOf(/^\s*</.test(qh) ? qh : '<p>' + qh + '</p>'),
        hint: x.hint ? mkHtml($.smart(x.hint())) ?? undefined : undefined,
        sol,
        note: x.labNote ? mkHtml(x.labNote()) : undefined,
      };
    });
    const src = String(it.src).replace(/<[^>]+>/g, '');
    items.push(clean({
      id: 'm-' + it.id, unit: UNIT_OF[it.id] || 'conj', level: 'exam', type: 'open',
      src: exam ? 'exam' : 'new',
      srcName: exam ? zipValue(gca.replace(/ ·.*$/, '').replace(/ \(.*\)$/, '') + ' · ex. ' + src, ges.replace(/ ·.*$/, '').replace(/ \(.*\)$/, '') + ' · ej. ' + src) : undefined,
      basedOn: exam ? undefined : zipValue(gca.replace(/ ·.*$/, '') + ' · ex. ' + src, ges.replace(/ ·.*$/, '') + ' · ej. ' + src),
      qb: zipBlocks(ex1.qb, ex2.qb), hint: ex1.hint ? zipValue(ex1.hint, ex2.hint) : undefined,
      sol: zipBlocks(ex1.sol, ex2.sol),
      lab: it.lab ? { id: it.lab[0], props: { id: 'exl-' + it.id, cfg: Object.keys(it.lab[1] || {}).length ? it.lab[1] : undefined }, note: ex1.note ? zipValue(ex1.note, ex2.note) : undefined } : undefined,
      space: 'lines:16', min: 15,
    }));
  });
});
out('kit/exercises.js', { items }, HEAD);
console.log('mates:', toc.map((u) => u.id + ' (' + u.sections.length + ')').join(', '), '·', items.length, 'exercicis ·',
  formulas.groups.reduce((n, g) => n + g.items.length, 0), 'fórmules · html', stats.html, '· passos amb html', stats.stepHtml);
