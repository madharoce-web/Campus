/**
 * Valida el contingut de les assignatures de la plantilla (src/courses/<k>/kit/). Forma part de `npm run lint`.
 *   node tools/validate-courses.mjs [k…]
 * Comprova, per a cada assignatura:
 *   - ids únics: exercicis del banc i famílies, exercicis escrits dins els temes i els mètodes, i apartats de cada tema;
 *   - que els temes que declaren l'anglès (langs amb 'en') no tinguin cap text sense traduir (parelles [ca, es]);
 *   - que totes les { ref } (comprovacions, tipus examen, mètodes) existeixin al banc;
 *   - que cada tema tingui exercicis tipus examen al final (examEnd) i mètodes d'examen.
 * Surt amb codi 1 si hi ha errors.
 */
import { readdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = join(ROOT, 'src/courses');
// les mateixes claus de text que tools/kit-i18n.mjs
const TEXT = new Set(['x', 't', 'title', 'q', 'hint', 'note', 'caption', 'label', 'srcName', 'basedOn', 'why', 'svg', 'h', 'result', 'summary', 'sub', 'desc', 'tex', 'day', 'suffix', 'nf', 'ft']);
const LIST = new Set(['items', 'head', 'opts', 'o', 'steps']);
const SKIP = new Set(['answer', 'id', 'type', 'unit', 'level', 'src', 'ids', 'code', 'orig', 'n', 'tol', 'rel', 'langs', 'mode', 'lang', 'cls', 'props']);
const isPair = (v) => Array.isArray(v) && v.length === 2 && v.every((s) => typeof s === 'string');

/** Camins dels textos que només tenen [ca, es]. */
function missingEn(node, path = '', out = []) {
  if (Array.isArray(node)) { node.forEach((x, i) => missingEn(x, path + '[' + i + ']', out)); return out; }
  if (!node || typeof node !== 'object') return out;
  if (node.t === 'lang') return out;
  for (const [k, v] of Object.entries(node)) {
    if (SKIP.has(k)) continue;
    const p = path + '.' + k;
    if (TEXT.has(k)) { if (isPair(v)) out.push(p); else if (v && typeof v === 'object' && !Array.isArray(v)) missingEn(v, p, out); }
    else if (LIST.has(k) && Array.isArray(v)) v.forEach((x, i) => (isPair(x) ? out.push(p + '[' + i + ']') : missingEn(x, p + '[' + i + ']', out)));
    else if (k === 'rows' && Array.isArray(v)) v.forEach((r, i) => Array.isArray(r) && r.forEach((c, j) => { if (isPair(c)) out.push(p + '[' + i + '][' + j + ']'); }));
    else missingEn(v, p, out);
  }
  return out;
}

/** Recorre un valor i crida f(objecte, camí) per a cada objecte. */
function eachObj(node, f, path = '') {
  if (Array.isArray(node)) { node.forEach((x, i) => eachObj(x, f, path + '[' + i + ']')); return; }
  if (!node || typeof node !== 'object') return;
  f(node, path);
  for (const [k, v] of Object.entries(node)) eachObj(v, f, path + '.' + k);
}

const load = async (p) => (await import(pathToFileURL(p).href)).default;

async function validate(k) {
  const errs = [];
  const err = (m) => errs.push(m);
  const course = await load(join(BASE, k, 'kit/course.js'));
  const bank = course.bank ? (await course.bank()).default : { items: [] };
  const methods = course.methods ? (await course.methods()).default : null;

  // ids del banc
  const ids = new Map();
  const own = (id, where) => { if (ids.has(id)) err(`id repetit «${id}»: ${ids.get(id)} i ${where}`); else ids.set(id, where); };
  for (const f of bank.families || []) own(f.id, 'família del banc');
  for (const x of bank.items || []) own(x.id, 'banc');
  const exists = (ref) => (bank.families || []).some((f) => f.id === ref) || (bank.items || []).some((x) => x.id === ref);

  // exercicis escrits a mà dins un tema o als mètodes: ids únics i refs existents
  const exercises = (node, where) => eachObj(node, (o, p) => {
    if (o.ref && typeof o.ref === 'string') { if (!exists(o.ref)) err(`${where}${p}: la ref «${o.ref}» no és al banc`); }
    else if (o.type && o.id && (o.q || o.qb || o.steps)) {
      // el mateix exercici publicat també al banc (com el tipus examen del T3 de Computadors) no és un duplicat
      const b = (bank.items || []).find((x) => x.id === o.id);
      if (b && b.type === o.type && JSON.stringify(b.q ?? b.qb) === JSON.stringify(o.q ?? o.qb)) return;
      own(o.id, where + p);
    }
  });

  for (const u of course.units) {
    const where = `${u.id}`;
    if (!u.load) { err(`${where}: el tema no té mòdul`); continue; }
    const mod = (await u.load()).default;
    const secs = Object.keys(mod.sections || {});
    const seen = new Set();
    for (const s of u.sections || []) { if (seen.has(s.id)) err(`${where}: apartat repetit «${s.id}»`); seen.add(s.id); }
    for (const s of secs) if (!seen.has(s)) err(`${where}: l'apartat «${s}» no és a l'índex (toc)`);
    if ((u.langs || []).includes('en')) {
      const miss = missingEn(mod);
      if (miss.length) err(`${where}: ${miss.length} textos sense anglès (p. ex. ${miss[0]})`);
    }
    exercises(mod, where);
    if (!mod.examEnd || !mod.examEnd.length) err(`${where}: no té exercicis tipus examen (examEnd)`);
    if (!methods || !methods[u.id]) err(`${where}: no té mètodes d'examen (methods.js)`);
  }
  if (methods) for (const [id, m] of Object.entries(methods)) exercises(m, `mètodes ${id}`);
  return errs;
}

const only = process.argv.slice(2);
const courses = readdirSync(BASE).filter((k) => existsSync(join(BASE, k, 'kit/course.js')) && (!only.length || only.includes(k)));
let total = 0;
for (const k of courses) {
  let errs;
  try { errs = await validate(k); } catch (e) { errs = ['no s\'ha pogut carregar: ' + e.message]; }
  total += errs.length;
  console.log(errs.length ? `✖ ${k}: ${errs.length} errors` : `✓ ${k}`);
  for (const e of errs.slice(0, 30)) console.log('   ' + e);
  if (errs.length > 30) console.log(`   … i ${errs.length - 30} més`);
}
process.exit(total ? 1 : 0);
