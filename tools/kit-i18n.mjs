/**
 * Traducció del contingut de la plantilla (src/courses/<k>/kit/) a l'anglès.
 * Cada text és un trio [ca, es, en]; mentre falta l'anglès és una parella [ca, es].
 *
 *   node tools/kit-i18n.mjs report                      cobertura de l'anglès per assignatura i mòdul
 *   node tools/kit-i18n.mjs extract <mòdul.js>          textos sense anglès → inbox/i18n/<k>/<mòdul>.todo.json
 *   node tools/kit-i18n.mjs apply <mòdul.js> <en.json>  afegeix les traduccions ({ ruta: "text" }) al mòdul
 *
 * Els textos es reconeixen per la clau on són (x, t, title, q, items…); answer, id, type… no es toquen.
 * El marcatge ($…$, **…**, `…`, [..](..)) s'ha de conservar tal qual a la traducció.
 * apply reescriu el mòdul (només els generats per tools/kit-import; els escrits a mà es tradueixen a mà).
 */
import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, relative, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { moduleSource } from './kit-import/zip.mjs';

const ROOT = resolve(dirname(new URL(import.meta.url).pathname), '..');
const TEXT = new Set(['x', 't', 'title', 'q', 'hint', 'note', 'caption', 'label', 'srcName', 'basedOn', 'why', 'svg', 'h', 'result', 'summary', 'sub', 'desc', 'tex', 'day', 'suffix']);
const LIST = new Set(['items', 'head', 'opts', 'o', 'steps']);
const SKIP = new Set(['answer', 'id', 'type', 'unit', 'level', 'src', 'ids', 'code', 'orig', 'n', 'tol', 'rel', 'langs', 'mode', 'lang', 'cls', 'props']);

const isText = (v) => Array.isArray(v) && (v.length === 2 || v.length === 3) && v.every((s) => typeof s === 'string');

/** Recorre un mòdul i crida f(ruta, valor) per a cada text; langBlock(ruta, bloc) per als blocs per idioma. */
function walk(node, path, f, langBlock) {
  if (Array.isArray(node)) { node.forEach((x, i) => walk(x, [...path, i], f, langBlock)); return; }
  if (!node || typeof node !== 'object') return;
  if (node.t === 'lang') { langBlock(path, node); return; }
  for (const [k, v] of Object.entries(node)) {
    const p = [...path, k];
    if (SKIP.has(k)) continue;
    if (TEXT.has(k)) { if (isText(v)) f(p, v); else if (v && typeof v === 'object') walk(v, p, f, langBlock); }
    else if (LIST.has(k) && Array.isArray(v)) {
      v.forEach((x, i) => (isText(x) ? f([...p, i], x) : walk(x, [...p, i], f, langBlock)));
    } else if (k === 'rows' && Array.isArray(v)) {
      v.forEach((r, i) => r.forEach((c, j) => { if (isText(c)) f([...p, i, j], c); }));
    } else walk(v, p, f, langBlock);
  }
}

const load = async (file) => (await import(pathToFileURL(resolve(file)).href + '?t=' + Date.now())).default;
const key = (p) => p.map((x) => (typeof x === 'number' ? '[' + x + ']' : '.' + x)).join('').replace(/^\./, '');

function scan(value) {
  const r = { total: 0, en: 0, missing: [], lang: 0 };
  walk(value, [], (p, v) => { r.total++; if (v.length === 3) r.en++; else r.missing.push({ p: key(p), ca: v[0], es: v[1] }); }, (p, b) => { if (!b.en) r.lang++; });
  return r;
}

function modules() {
  const out = [];
  const base = join(ROOT, 'src/courses');
  for (const k of readdirSync(base)) {
    const dir = join(base, k, 'kit');
    try { if (!statSync(dir).isDirectory()) continue; } catch { continue; }
    const rec = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); if (statSync(p).isDirectory()) rec(p); else if (/\.js$/.test(f) && f !== 'course.js') out.push(p); });
    rec(dir);
  }
  return out.sort();
}

const [cmd, file, enFile] = process.argv.slice(2);
if (cmd === 'report') {
  let T = 0, E = 0;
  for (const m of modules()) {
    let v;
    try { v = await load(m); } catch { continue; }
    if (!v || typeof v !== 'object') continue;
    const r = scan(v);
    T += r.total; E += r.en;
    console.log(relative(ROOT, m).padEnd(48), String(r.en).padStart(5), '/', String(r.total).padEnd(5), r.total ? Math.round((100 * r.en) / r.total) + ' %' : '', r.lang ? '· ' + r.lang + ' blocs per idioma sense en' : '');
  }
  console.log('total'.padEnd(48), String(E).padStart(5), '/', T, T ? Math.round((100 * E) / T) + ' %' : '');
} else if (cmd === 'extract' && file) {
  const r = scan(await load(file));
  const rel = relative(join(ROOT, 'src/courses'), resolve(file));
  const out = join(ROOT, 'inbox/i18n', rel.replace(/\.js$/, '.todo.json'));
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, JSON.stringify(r.missing, null, 1));
  console.log(r.missing.length + ' textos sense anglès →', relative(ROOT, out), r.lang ? '(+ ' + r.lang + ' blocs per idioma, a mà)' : '');
} else if (cmd === 'apply' && file && enFile) {
  const value = await load(file);
  const raw = JSON.parse(readFileSync(enFile, 'utf8'));
  const tr = Array.isArray(raw) ? Object.fromEntries(raw.map((x) => [x.p, x.en])) : raw;
  let n = 0;
  walk(value, [], (p, v) => {
    const t = tr[key(p)];
    if (typeof t !== 'string' || !t.trim()) return;
    let o = value;
    for (const k of p.slice(0, -1)) o = o[k];
    o[p[p.length - 1]] = [v[0], v[1], t];
    n++;
  }, () => {});
  const src = readFileSync(file, 'utf8');
  const head = src.startsWith('//') ? src.split('\n')[0] : '';
  writeFileSync(file, moduleSource(value, head));
  console.log(n + ' traduccions afegides a', basename(file));
} else {
  console.log('Ús: node tools/kit-i18n.mjs report | extract <mòdul.js> | apply <mòdul.js> <en.json>');
  process.exit(1);
}
