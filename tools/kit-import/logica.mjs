/**
 * Importa «Lògica i grafs» (src/courses/logica/data/{docs,bank}.{ca,es}.json) a la plantilla:
 *   src/courses/logica/kit/toc.js        temes: unitats 0–9 de lògica i tres de grafs (10–12)
 *   src/courses/logica/kit/units/*.js    blocs de cada tema (qüestionaris → comprovacions, calculadores → laboratoris)
 *   src/courses/logica/kit/bank.js       els 46 exercicis (d'examen i nous) amb la solució per passos
 *   src/courses/logica/kit/formulas.js   el formulari de l'examen (regles, equivalències, quantificadors)
 * Les taules amb colors (taules de veritat, deducció natural…), les llistes (a), (b)… i els arbres
 * es queden en HTML amb els estils del curs. Ús: node tools/kit-import/logica.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { finalize, parse, splitSections, toBlocks, toMarkup } from './html.mjs';
import { clean, moduleSource, zipBlocks, zipValue } from './zip.mjs';

const root = new URL('../../src/courses/logica/', import.meta.url);
const read = (f) => JSON.parse(readFileSync(new URL('data/' + f, root), 'utf8'));
const DOC = { ca: read('docs.ca.json'), es: read('docs.es.json') };
const BANK = { ca: read('bank.ca.json'), es: read('bank.es.json') };
const out = (p, v, h) => { mkdirSync(new URL('.', new URL(p, root)), { recursive: true }); writeFileSync(new URL(p, root), moduleSource(v, h)); };
const HEAD = "// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.";
const tidy = (s) => s.replace(/[ \t]+/g, ' ').replace(/ ?\n ?/g, '\n').trim();
const mk = (h) => { const r = parse('<p>' + h + '</p>'); const m = toMarkup(r.firstChild); return m === null ? null : tidy(m); };
const stripNum = (s) => s.replace(/^\d+\s*·\s*/, '').replace(/^\d+(\.\d+)*\.?\s+/, '');

/* ---------- elements propis: es queden en HTML (amb els estils del curs) ---------- */
const hasClass = (n) => !!(n.getAttribute && n.getAttribute('class'));
function lgBlock(n, sub, objs) {
  const tag = n.tagName.toLowerCase(), cls = n.getAttribute('class') || '';
  const obj = n.getAttribute('data-obj');
  if (obj != null) return objBlock(objs[+obj]);
  const table = tag === 'table' ? n : tag === 'div' && /\btw\b/.test(cls) ? n.querySelector('table') : null;
  if (table) {
    const fancy = hasClass(table) || table.querySelectorAll('tr, td, th').some(hasClass) || table.querySelector('span.tv');
    return fancy ? { t: 'html', h: n.outerHTML } : undefined;
  }
  if ((tag === 'ol' || tag === 'ul') && (cls || n.getAttribute('type'))) return { t: 'html', h: n.outerHTML };
  if (tag === 'p' && /\blx-/.test(cls)) {
    if (/\blx-why\b/.test(cls)) { const m = mk(n.innerHTML); return m !== null ? { t: 'note', x: m } : { t: 'html', h: n.outerHTML }; }
    return { t: 'html', h: n.outerHTML };
  }
  if (tag === 'p' && /\blead\b/.test(cls)) { const m = mk(n.innerHTML); return m !== null ? { t: 'p', x: m } : { t: 'html', h: n.outerHTML }; }
  if (tag === 'div' && /\blx-/.test(cls)) return { t: 'html', h: n.outerHTML };
  if (tag === 'figure' && /\blx-fig\b/.test(cls)) return { t: 'diagram', svg: n.innerHTML.trim() };
  if (tag === 'details' && /\blx-det\b/.test(cls)) {
    const sum = n.querySelector('summary');
    return { t: 'details', title: sum ? mk(sum.innerHTML) ?? sum.text.trim() : '', blocks: sub(n.childNodes.filter((c) => c !== sum)) };
  }
  return undefined;
}

/* qüestionaris, calculadores i laboratoris del cos de les unitats */
let unitId = '';
function objBlock(o) {
  if (!o) return null;
  if (o.quiz) return { t: 'quiz', quiz: o.quiz };
  if (o.tool === 'tt') return { t: 'lab', id: 'tt', props: { id: unitId + '-tt', f: o.f } };
  if (o.tool === 'unif') return { t: 'lab', id: 'unif', props: { id: unitId + '-unif', a: o.a, b: o.b } };
  if (o.lab) return { t: 'lab', id: o.lab };
  return null; // banc i simulacre: ara són la Pràctica i el Simulacre de la plantilla
}

const segHtml = (body) => body.map((seg, i) => (typeof seg === 'string' ? seg : `<div data-obj="${i}"></div>`)).join('\n');
const blocksOf = (nodes, objs) => toBlocks(nodes, { block: (n, sub) => lgBlock(n, sub, objs) });

/** Un qüestionari (ca, es) → comprovació de tipus mcq. */
function quizCheck(qa, qe, id) {
  const opts = qa.opts.map((o, i) => zipValue(mk(o) ?? o, mk(qe.opts[i]) ?? qe.opts[i]));
  return clean({
    t: 'check',
    ex: {
      id, type: 'mcq', q: zipValue(mk(qa.q) ?? qa.q, mk(qe.q) ?? qe.q), opts, answer: 'abcdef'.indexOf(qa.ok),
      sol: qa.why ? zipBlocks(blocksOf(parse(qa.why).childNodes, []), blocksOf(parse(qe.why).childNodes, [])) : undefined,
    },
  });
}

function unitFrom(u, hca, hes, objsCa, objsEs) {
  const ca = splitSections(hca), es = splitSections(hes);
  if (ca.length !== es.length) throw new Error(u + ': apartats diferents ca/es');
  const sections = [], blocks = {};
  ca.forEach((s, i) => {
    const id = s.id ? s.id : u + '-intro';
    const bca = blocksOf(s.nodes, objsCa), bes = blocksOf(es[i].nodes, objsEs);
    // qüestionaris: es converteixen junts (ca, es) en comprovacions
    let n = 0;
    const qa = bca.map((x, j) => (x.t === 'quiz' && bes[j] && bes[j].t === 'quiz' ? quizCheck(x.quiz, bes[j].quiz, id + '-q' + ++n) : x));
    const qe = bes.map((x, j) => (x.t === 'quiz' && qa[j] && qa[j].t === 'check' ? qa[j] : x));
    const b = finalize(zipBlocks(qa, qe), id);
    if (!s.id) { if (b.length) blocks.__intro = b; return; }
    sections.push(clean({ id, t: zipValue(stripNum(s.title), stripNum(es[i].title)) }));
    blocks[id] = b;
  });
  return { sections, blocks };
}

const toc = [];
/* ---------- lògica: unitats 0–9 ---------- */
const LU = DOC.ca.logica.units.filter((x) => /^u\d$/.test(x.u));
for (const ua of LU) {
  const ue = DOC.es.logica.units.find((x) => x.u === ua.u);
  unitId = ua.u;
  const { sections, blocks } = unitFrom(ua.u, segHtml(ua.body), segHtml(ue.body), ua.body, ue.body);
  const { __intro, ...secs } = blocks;
  toc.push({ id: ua.u, n: ua.u.slice(1), t: zipValue(stripNum(parse(ua.h1.html).text), stripNum(parse(ue.h1.html).text)), langs: ['ca', 'es'], sections });
  out('kit/units/' + ua.u + '.js', clean({ intro: __intro, sections: secs, examEnd: [] }), HEAD);
}

/* ---------- grafs: tres mòduls (h1) → temes 10, 11 i 12 ---------- */
const splitH1 = (h) => { const parts = h.split(/(?=<h1[\s>])/); return parts.map((p) => p.replace(/^<h1[^>]*>[\s\S]*?<\/h1>/, '')); };
const titlesH1 = (doc) => [parse(doc.h1.html).text, ...(doc.body[0].match(/<h1[^>]*>([\s\S]*?)<\/h1>/g) || []).map((x) => parse(x).text)];
const gca = splitH1(DOC.ca.grafs.body[0]), ges = splitH1(DOC.es.grafs.body[0]);
const tca = titlesH1(DOC.ca.grafs), tes = titlesH1(DOC.es.grafs);
gca.forEach((h, i) => {
  const id = 'g' + (i + 1);
  const { sections, blocks } = unitFrom(id, h, ges[i], [], []);
  const { __intro, ...secs } = blocks;
  // àncores de dins de cada apartat (h3), per als enllaços antics
  const anchors = (html) => (html.match(/<h3 id="([^"]+)"/g) || []).map((x) => x.slice(8, -1));
  const sec2 = splitSections(h);
  sections.forEach((s) => { const raw = sec2.find((x) => x.id === s.id); const al = raw ? anchors(raw.nodes.map((nd) => nd.outerHTML || '').join('')) : []; if (al.length) s.aliases = al; });
  const strip = (s) => s.replace(/^Mòdul\s+\S+\s+—\s+|^Módulo\s+\S+\s+—\s+/, '');
  toc.push({ id, n: String(10 + i), t: zipValue(strip(tca[i]), strip(tes[i])), langs: ['ca', 'es'], sections });
  out('kit/units/' + id + '.js', clean({ intro: __intro, sections: secs, examEnd: [] }), HEAD);
});
out('kit/toc.js', toc, HEAD);

/* ---------- formulari (unitat fs) ---------- */
function formulas(lang) {
  const fs = DOC[lang].logica.units.find((x) => x.u === 'fs');
  return splitSections(fs.body.filter((x) => typeof x === 'string').join('\n')).filter((s) => s.id).map((s) => {
    const html = s.nodes.map((n) => n.outerHTML || '').join('');
    const rows = parse(html).querySelectorAll('tbody tr').map((tr) => tr.querySelectorAll('td'));
    return {
      t: s.title,
      items: rows.map((td, i) => {
        const cells = td.map((c) => tidy(toMarkup(c) ?? c.text));
        // [nom, regla, en paraules] o [regla, en paraules]
        return cells.length >= 3 ? { id: s.id + '-' + i, t: cells[0], x: cells[1], note: cells[2] } : { id: s.id + '-' + i, t: cells[1], x: cells[0] };
      }),
    };
  });
}
const fca = formulas('ca'), fes = formulas('es');
out('kit/formulas.js', { groups: fca.map((g, i) => clean({ unit: 'u3', t: zipValue(g.t, fes[i].t), items: g.items.map((it, j) => clean(zipValue(it, fes[i].items[j]))) })) }, HEAD);

/* ---------- banc d'exercicis ---------- */
const KIND_UNIT = { A: 'u1', B: 'u2', R: 'u3', E: 'u5', F: 'u8' };
const LEVEL = { A: 'easy', B: 'easy', R: 'exam', E: 'exam', F: 'hard' };
const solOf = (sol) => sol.flatMap((st) => [{ t: 'h', x: mk(st.t) ?? st.t, part: st.p }, ...blocksOf(parse(st.h).childNodes, [])]);
const items = BANK.ca.map((a) => {
  const e = BANK.es.find((x) => x.id === a.id);
  const qa = blocksOf(parse(a.st).childNodes, []), qe = blocksOf(parse(e.st).childNodes, []);
  return clean({
    id: 'lg-' + a.id, unit: KIND_UNIT[a.kind], kind: a.kind, level: a.src === 'exam' ? 'exam' : LEVEL[a.kind], type: 'open',
    src: a.src === 'exam' ? 'exam' : 'new', srcName: a.src === 'exam' ? zipValue(a.srcname, e.srcname) : undefined,
    title: zipValue(a.title, e.title), qb: zipBlocks(qa, qe), sol: zipBlocks(solOf(a.sol), solOf(e.sol)), space: 'lines:14',
  });
});
out('kit/bank.js', { items, families: [] }, HEAD);
console.log('logica:', toc.map((u) => u.id + ' (' + u.sections.length + ')').join(', '), '·', items.length, 'exercicis ·', fca.reduce((n, g) => n + g.items.length, 0), 'fórmules');
