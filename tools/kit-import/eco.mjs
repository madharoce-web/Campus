/**
 * Importa «Principis d'economia» (src/courses/eco/data/docs.{ca,es}.json) a la plantilla:
 *   src/courses/eco/kit/toc.js       temes i apartats (per a l'índex)
 *   src/courses/eco/kit/units/*.js   blocs de cada tema
 *   src/courses/eco/kit/bank.js      els 43 exercicis de la pràctica
 * Ús: node tools/kit-import/eco.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { finalize, parse, splitSections, toBlocks, toMarkup } from './html.mjs';
import { clean, moduleSource, zipBlocks, zipValue } from './zip.mjs';

const root = new URL('../../src/courses/eco/', import.meta.url);
const read = (l) => JSON.parse(readFileSync(new URL('data/docs.' + l + '.json', root), 'utf8'));
const CA = read('ca'), ES = read('es');
const out = (p, v, h) => { mkdirSync(new URL('.', new URL(p, root)), { recursive: true }); writeFileSync(new URL(p, root), moduleSource(v, h)); };
const HEAD = '// Generat per tools/kit-import/eco.mjs a partir del contingut anterior; a partir d\'ara s\'edita aquí.';

const stripNum = (s) => s.replace(/^(Tema\s+\d+\s*[:.·-]\s*)/i, '').replace(/^\d+(\.\d+)*\.?\s+/, '');
const bodyHtml = (doc) => doc.body.map((seg) => (typeof seg === 'string' ? seg : seg.lab ? `<div data-lab="${seg.lab}"></div>` : '')).join('\n');

const UNITS = ['t1', 't2', 't3'];
const toc = [];
for (const [n, u] of UNITS.entries()) {
  const ca = splitSections(bodyHtml(CA.docs[u])), es = splitSections(bodyHtml(ES.docs[u]));
  if (ca.length !== es.length) throw new Error(`${u}: apartats diferents ca/es`);
  const sections = [], blocks = {};
  ca.forEach((s, i) => {
    const id = s.id ? u + '-' + s.id : u + '-intro';
    const b = finalize(zipBlocks(toBlocks(s.nodes), toBlocks(es[i].nodes)), id);
    if (!s.id) { if (b.length) blocks.__intro = b; return; }
    sections.push({ id, orig: s.id, t: zipValue(stripNum(s.title), stripNum(es[i].title)) });
    blocks[id] = b;
  });
  const h1 = zipValue(stripNum(parse(CA.docs[u].h1.html).text), stripNum(parse(ES.docs[u].h1.html).text));
  // langs: idiomes del tema (l'anglès s'afegeix en traduir-lo; vegeu tools/kit-i18n.mjs)
  toc.push({ id: u, n: n + 1, t: h1, langs: ['ca', 'es'], sections });
  const { __intro, ...secs } = blocks;
  out('kit/units/' + u + '.js', clean({ intro: __intro, sections: secs, examEnd: [] }), HEAD);
}
out('kit/toc.js', toc, HEAD);

/* ---------- pràctica → banc ---------- */
const LV = { facil: 'easy', mitja: 'exam', dificil: 'hard' };
const blocksOf = (html) => (html ? toBlocks(parse(html).childNodes) : undefined);
const labelOf = (html) => { const r = parse(html); const li = r.querySelector('li'); return (toMarkup(li || r) ?? r.text).trim(); };
function exercise(e) {
  const det = (s) => (e.det || []).find((d) => d.s.startsWith(s));
  const ex = {
    id: e.id, unit: 't' + e.tema, level: LV[e.nivell], src: 'new', title: e.title, code: e.code,
    qb: blocksOf(e.q),
    hintb: blocksOf(det('Pista')?.h),
    sol: blocksOf(det('Soluci')?.h),
  };
  if (e.tipus === 'mc') Object.assign(ex, { type: 'mcq', opts: e.opts.map((o) => (toMarkup(parse(o)) ?? o).trim()), answer: e.a.c });
  else if (e.tipus === 'multi') Object.assign(ex, { type: 'match', items: e.items.map((it) => ({ q: (toMarkup(parse(it.q)) ?? it.q).trim().replace(/^\*\*\d+\.\*\*\s*/, ''), o: it.o })), answer: e.a.c });
  else Object.assign(ex, { type: 'nums', parts: e.num.map((h, i) => ({ label: labelOf(h), answer: e.a.r[i], tol: e.a.t[i] })) });
  return ex;
}
const exCa = CA.docs.prac.items.filter((x) => x.ex).map((x) => exercise(x.ex));
const exEs = ES.docs.prac.items.filter((x) => x.ex).map((x) => exercise(x.ex));
const items = exCa.map((a, i) => {
  const b = exEs[i];
  const z = { ...zipValue({ ...a, qb: undefined, hintb: undefined, sol: undefined }, { ...b, qb: undefined, hintb: undefined, sol: undefined }) };
  for (const k of ['qb', 'hintb', 'sol']) if (a[k]) z[k] = zipBlocks(a[k], b[k]);
  return clean(z);
});
out('kit/bank.js', { items, families: [] }, HEAD);
console.log('eco:', toc.map((u) => u.id + ' (' + u.sections.length + ' apartats)').join(', '), '·', items.length, 'exercicis');
