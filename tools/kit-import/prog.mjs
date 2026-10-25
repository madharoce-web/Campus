/**
 * Importa «Iniciació a la Programació» a la plantilla, amb el pseudocodi i el C++ a contrarellotge:
 *   src/courses/prog/kit/toc.js           temes 1–2.3, pràctiques S2–S7 i la xuleta de pseudocodi (annex)
 *   src/courses/prog/kit/units/*.js       blocs de cada pàgina (codi executable, qüestionaris → comprovacions,
 *                                         laboratori d'expressions, exercicis de la setmana)
 *   src/courses/prog/kit/exercises.js     els 71 exercicis de C++ (amb proves) i els 29 de pseudocodi (amb jocs de proves)
 *   src/courses/prog/kit/formulas.js      les taules de la xuleta (tipus, accions, operadors i prioritats…)
 * Les preguntes curtes de pseudocodi (notació, teoria, esquemes, prioritats) es generen a families.js.
 * Ús: node tools/kit-import/prog.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { finalize, parse, splitSections, toBlocks, toMarkup } from './html.mjs';
import { clean, moduleSource, zipBlocks, zipValue } from './zip.mjs';
import { EXS } from '../../src/courses/pseudo/data/exercises.js';
import { XU } from '../../src/courses/pseudo/data/xuleta.js';

const root = new URL('../../src/courses/prog/', import.meta.url);
const read = (p) => JSON.parse(readFileSync(new URL(p, root), 'utf8'));
const META = read('data/meta.json');
const CPP = JSON.parse(readFileSync(new URL('../cpp/data/exercises.json', root), 'utf8'));
const FIRST = ['t', 'id', 'n', 'mode', 'title', 'label', 'x', 'q', 'qb'];
const order = (v) => {
  if (Array.isArray(v)) return v.map(order);
  if (!v || typeof v !== 'object') return v;
  const ks = Object.keys(v).sort((a, b) => (FIRST.indexOf(a) + 1 || 99) - (FIRST.indexOf(b) + 1 || 99));
  return Object.fromEntries(ks.map((k) => [k, order(v[k])]));
};
const out = (p, v, h) => { mkdirSync(new URL('.', new URL(p, root)), { recursive: true }); writeFileSync(new URL(p, root), moduleSource(order(v), h)); };
const HEAD = "// Generat per tools/kit-import/prog.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.";
const tidy = (s) => s.replace(/[ \t]+/g, ' ').replace(/ ?\n ?/g, '\n').trim();
const mk = (h) => { const r = parse('<p>' + h + '</p>'); const m = toMarkup(r.firstChild); return m === null ? null : tidy(m); };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const tr2 = (o) => (o == null ? undefined : typeof o === 'string' ? o : zipValue(o.ca, o.es ?? o.ca));
const stats = { html: 0 };

/* ---------- unitats: les pàgines de teoria i de pràctica ---------- */
const UNIT_OF_WK = { 2: 's2', 3: 's3', 4: 's4', 5: 's5', 6: 's6', 7: 's7' };
const PS_UNIT = { 2: 't21', 3: 't22', 4: 't23' };
/** Enllaços de la versió anterior → adreces de la plantilla. */
function relink(href) {
  if (/^\/pseudocodi\/escriu/.test(href)) return '/programacio/practica?unit=t21';
  if (/^\/pseudocodi\/esquemes/.test(href)) return '/programacio/practica?unit=t23';
  if (/^\/pseudocodi/.test(href)) return '/programacio/temari/xu';
  if (/^\/cpp\/exam/.test(href)) return '/programacio/simulacre';
  if (/^\/cpp\/?$/.test(href)) return '/programacio/practica';
  const m = /^\/programacio\/([\w-]+)(?:\/([\w-]+))?$/.exec(href);
  if (m) return '/programacio/temari/' + m[1] + (m[2] ? '#' + m[2] : '');
  return href;
}
const attrs = (a) => Object.entries(a || {}).map(([k, v]) => ' ' + k + '="' + esc(k === 'href' ? relink(v) : v) + '"').join('');
/** Arbre de la pàgina → HTML; els blocs interactius queden com a marques <div data-pn="i">. */
function toHtml(nodes, objs) {
  return (nodes || []).map((n) => {
    if (typeof n === 'string') return esc(n);
    if (n.k) { objs.push(n); return `<div data-pn="${objs.length - 1}"></div>`; }
    const inner = n.h !== undefined ? n.h.replace(/href="([^"]*)"/g, (x, h) => 'href="' + relink(h) + '"') : toHtml(n.c, objs);
    return `<${n.t}${attrs(n.a)}>${inner}</${n.t}>`;
  }).join('');
}

const CO = { key: 'summary', warn: 'warn', bad: 'warn', info: 'note', tip: 'tip', def: 'def' };
let PAGE = '';
function pgBlock(n, sub, objs, lang) {
  const tag = n.tagName.toLowerCase(), cls = n.getAttribute('class') || '';
  const pn = n.getAttribute('data-pn');
  if (pn != null) return objBlock(objs[+pn], lang);
  if (tag === 'div' && /\bipquiz\b/.test(cls)) return sub(n.childNodes);
  if (tag === 'div' && /\bip-co\b/.test(cls)) {
    const kind = (cls.match(/ip-co\s+(\w+)/) || [])[1];
    const cot = n.querySelector('.ip-cot');
    const title = cot ? (cot.querySelector('span') || cot).text.trim() : undefined;
    return { t: CO[kind] || 'note', title, blocks: sub(n.childNodes.filter((c) => c !== cot)) };
  }
  if (tag === 'p' && /\bip-lead\b/.test(cls)) { const m = mk(n.innerHTML); return m !== null ? { t: 'p', x: m } : undefined; }
  if (tag === 'div' && /\bip-tw\b/.test(cls)) {
    const table = n.querySelector('table');
    const fancy = !table || table.getAttribute('class') || table.querySelectorAll('td, th').some((c) => /\b(hl|ip-v|ip-f)\b/.test(c.getAttribute('class') || ''));
    if (fancy) return { t: 'html', h: n.outerHTML };
    return sub([table]);
  }
  if (tag === 'figure' && /\bip-fig\b/.test(cls)) return { t: 'html', h: n.outerHTML };
  // columnes i parelles (pseudocodi | C++): columnes de la plantilla, amb el codi executable a dins
  if (tag === 'div' && /\bip-(cols|pair)\b/.test(cls) && n.querySelector('[data-pn]')) {
    const kids = n.childNodes.filter((c) => c.nodeType === 1);
    return { t: 'cols', cols: kids.map((c) => (c.getAttribute('data-pn') != null ? [objBlock(objs[+c.getAttribute('data-pn')], lang)]
      : c.tagName.toLowerCase() === 'div' ? sub(c.childNodes) : sub([c]))) };
  }
  if (tag === 'div' && /\bip-(cols|pair|card|map)\b/.test(cls)) return { t: 'html', h: n.outerHTML };
  return undefined;
}
/** Blocs interactius: codi, laboratori d'expressions, exercicis de la setmana i qüestionaris. */
function objBlock(o, lang) {
  if (o.k === 'code') { const { k, lang: lg, src, ...props } = o; return clean({ t: 'code', lang: lg, src, props: Object.keys(props).length ? props : undefined }); }
  if (o.k === 'xp') return { t: 'lab', id: 'expr', props: { expr: o.expr, vars: o.vars } };
  if (o.k === 'ex') return { t: 'lab', id: 'exlist', props: { wk: o.wk } };
  if (o.k === 'quiz') return { t: 'quiz', quiz: o, lang };
  return null;
}
const blocksOf = (html, objs, lang) => {
  const bl = toBlocks(parse(html).childNodes, { block: (n, sub) => pgBlock(n, sub, objs, lang), codeLang: 'txt' });
  const walk = (l) => l.forEach((b) => { if (b.t === 'html') stats.html++; if (b.blocks) walk(b.blocks); });
  walk(bl);
  return bl;
};
/** Qüestionari (ca, es) → comprovació mcq. */
function quizCheck(qa, qe, id) {
  const stem = (q) => blocksOf(toHtml(q.stem, []), [], '');
  const why = (q) => blocksOf(toHtml(q.why, []), [], '');
  return clean({
    t: 'check',
    ex: {
      id, type: 'mcq', qb: zipBlocks(stem(qa), stem(qe)),
      opts: qa.opts.map((o, i) => zipValue(mk(o) ?? o, mk(qe.opts[i]) ?? qe.opts[i])),
      answer: 'abcdefg'.indexOf(qa.ok), sol: zipBlocks(why(qa), why(qe)),
    },
  });
}

const titleOf = (p, lang) => p.t[lang].replace(/^Tema [\d.]+\.\s*/, '').replace(/^Pràctica:\s*|^Práctica:\s*/, '');
const toc = [];
for (const p of META.pages) {
  PAGE = p.id;
  const pages = { ca: read('data/pages/ca-' + p.id + '.json'), es: read('data/pages/es-' + p.id + '.json') };
  const objs = { ca: [], es: [] };
  const html = { ca: toHtml(pages.ca.nodes, objs.ca), es: toHtml(pages.es.nodes, objs.es) };
  const ca = splitSections(html.ca), es = splitSections(html.es);
  if (ca.length !== es.length) throw new Error(p.id + ': apartats diferents');
  const sections = [], blocks = {};
  let intro = [];
  ca.forEach((s, i) => {
    const id = s.id || p.id + '-intro';
    const bca = toBlocks(s.nodes, { block: (n, sub) => pgBlock(n, sub, objs.ca, 'ca') }), bes = toBlocks(es[i].nodes, { block: (n, sub) => pgBlock(n, sub, objs.es, 'es') });
    let nq = 0;
    const qa = bca.map((x, j) => (x.t === 'quiz' && bes[j] && bes[j].t === 'quiz' ? quizCheck(x.quiz, bes[j].quiz, id + '-q' + ++nq) : x));
    const qe = bes.map((x, j) => (x.t === 'quiz' && qa[j] && qa[j].t === 'check' ? qa[j] : x));
    const walk = (l) => l.forEach((b) => { if (b.t === 'html') stats.html++; if (b.blocks) walk(b.blocks); });
    walk(qa);
    const b = finalize(zipBlocks(qa, qe), id);
    if (!s.id) { intro = b; return; }
    sections.push(clean({ id, t: zipValue(s.title.replace(/^\d+(\.\d+)*\.\s*/, ''), es[i].title.replace(/^\d+(\.\d+)*\.\s*/, '')) }));
    blocks[id] = b;
  });
  if (p.id === 's2') {
    sections.push({ id: 'pati', t: ['Pati de proves', 'Patio de pruebas'] });
    blocks.pati = [
      { t: 'p', x: ["Un espai lliure per escriure i executar qualsevol programa de C++, sense proves. Els exemples de la teoria s'obren aquí amb el botó «Pati». El codi i l'entrada es desen en aquest navegador.", 'Un espacio libre para escribir y ejecutar cualquier programa de C++, sin pruebas. Los ejemplos de la teoría se abren aquí con el botón «Patio». El código y la entrada se guardan en este navegador.'] },
      { t: 'lab', id: 'pati' },
    ];
  }
  const lab = p.kind === 'lab';
  // la fitxa de la pàgina (setmana, documentació, llibre) va al començament
  const meta = { t: 'list', items: p.meta.map(([k, v]) => zipValue('**' + k.ca + ':** ' + v.ca, '**' + k.es + ':** ' + v.es)) };
  toc.push(clean({
    id: p.id, n: lab ? 'S' + p.wk : p.id.replace(/^t(\d)(\d)?$/, (m, a, b) => (b ? a + '.' + b : a)),
    t: zipValue(titleOf(p, 'ca'), titleOf(p, 'es')), sub: lab ? ['Pràctica · setmana ' + p.wk, 'Práctica · semana ' + p.wk] : ['Teoria · setmana ' + p.wk, 'Teoría · semana ' + p.wk],
    langs: ['ca', 'es'], sections,
  }));
  out('kit/units/' + p.id + '.js', clean({ intro: [{ t: 'p', x: zipValue(p.d.ca, p.d.es) }, meta, ...intro], sections: blocks, examEnd: [] }), HEAD);
}

/* ---------- la xuleta de pseudocodi: un annex i el formulari ---------- */
const xuSecs = [], xuBlocks = {};
const xuBlock = (b) => {
  if (b.p) return { t: 'p', x: tr2(b.p) };
  if (b.c) return { t: 'code', lang: 'ps', src: b.c, props: { nonum: true } };
  if (b.n) return { t: 'note', x: tr2(b.n) };
  if (b.d) return { t: 'def', title: tr2(b.d[0]), x: tr2(b.d[1]) };
  if (b.tb) return { t: 'table', head: b.tb.map(tr2), rows: b.rows.map((r) => r.map((c) => (typeof c === 'string' ? '`' + c.replace(/`/g, "'") + '`' : tr2(c)))) };
  return null;
};
XU.forEach((s, i) => {
  const id = 'xu-' + (i + 1);
  xuSecs.push({ id, t: zipValue(s.t.ca.replace(/^\d+\.\s*/, ''), s.t.es.replace(/^\d+\.\s*/, '')) });
  xuBlocks[id] = s.b.map(xuBlock).filter(Boolean);
});
toc.push({ id: 'xu', n: 'A', t: ['Xuleta de pseudocodi', 'Chuleta de pseudocódigo'], sub: ['Annex · notació del curs', 'Anexo · notación del curso'], langs: ['ca', 'es'], sections: xuSecs });
out('kit/units/xu.js', clean({ intro: [{ t: 'p', x: ['La notació exacta dels temes 2.1, 2.2 i 2.3, per tenir-la a mà mentre escrius algorismes.', 'La notación exacta de los temas 2.1, 2.2 y 2.3, para tenerla a mano mientras escribes algoritmos.'] }], sections: xuBlocks, examEnd: [] }), HEAD);
out('kit/toc.js', toc, HEAD);

// formulari: cada taula de la xuleta és un grup; cada fila, una entrada
const groups = [];
XU.forEach((s, i) => s.b.forEach((b, j) => {
  if (!b.tb) return;
  const t = zipValue(s.t.ca.replace(/^\d+\.\s*/, '') + ' · ' + b.tb[0].ca, s.t.es.replace(/^\d+\.\s*/, '') + ' · ' + (b.tb[0].es || b.tb[0].ca));
  groups.push({
    unit: 'xu', t,
    items: b.rows.map((r, k) => clean({
      id: 'xu' + (i + 1) + '-' + j + '-' + k, t: tr2(r[0]),
      x: r.length > 1 ? (typeof r[1] === 'string' ? '`' + r[1].replace(/`/g, "'") + '`' : tr2(r[1])) : undefined,
      note: r.length > 2 ? tr2(r[2]) : undefined,
    })),
  });
}));
out('kit/formulas.js', { groups }, HEAD);

/* ---------- exercicis: C++ (amb proves) i pseudocodi (amb jocs de proves) ---------- */
const LV = { 1: 'easy', 2: 'exam', 3: 'hard', 4: 'hard' };
const MIN = { 1: 5, 2: 10, 3: 15, 4: 15 };
const cppBody = (body) => body.map((b) => (b.p != null ? { t: 'p', x: b.p } : b.pre != null ? { t: 'code', lang: 'txt', src: b.pre, props: { nonum: true } } : { t: 'list', items: b.ul }));
const cpp = CPP.map((e) => clean({
  id: 'cpp-' + e.id, unit: UNIT_OF_WK[e.wk], level: LV[e.lv], lv: e.lv, type: 'cpp',
  src: e.src === 'model' ? 'exam' : 'new', srcName: e.src === 'model' ? ['Model de pregunta del CP', 'Modelo de pregunta del CP'] : undefined,
  title: e.title || undefined, tags: e.tags, qb: cppBody(e.body), examples: e.examples, tests: e.tests,
  rules: e.rules && (e.rules.use.length || e.rules.avoid.length) ? e.rules : undefined,
  hint: e.hint || undefined, sol: [{ t: 'code', lang: 'cpp', src: e.sol }], min: MIN[e.lv],
}));
const LVPS = { seq: 'easy', cond: 'exam', rec: 'exam', cerca: 'hard' };
const ps = EXS.map((e) => clean({
  id: 'ps-' + e.id, unit: PS_UNIT[e.wk], level: LVPS[e.k], kind: e.k, type: 'pseudo',
  basedOn: e.src ? tr2(e.src) : undefined,
  title: tr2(e.t), q: tr2(e.q), hint: e.tip ? tr2(e.tip) : undefined, tests: e.tests, sol: [{ t: 'code', lang: 'ps', src: e.sol, props: { nonum: true } }], min: 15,
}));
out('kit/exercises.js', { items: [...ps, ...cpp] }, HEAD);
console.log('prog:', toc.map((u) => u.id + ' (' + u.sections.length + ')').join(', '), '·', cpp.length, 'C++ ·', ps.length, 'pseudocodi ·', groups.reduce((n, g) => n + g.items.length, 0), 'fórmules · html', stats.html);
