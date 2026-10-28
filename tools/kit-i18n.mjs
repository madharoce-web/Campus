/**
 * Traducció del contingut de la plantilla (src/courses/<k>/kit/) a l'anglès.
 * Cada text és un trio [ca, es, en]; mentre falta l'anglès és una parella [ca, es].
 *
 *   node tools/kit-i18n.mjs report                      cobertura de l'anglès per assignatura i mòdul
 *   node tools/kit-i18n.mjs extract <mòdul.js>          textos sense anglès → inbox/i18n/<k>/<mòdul>.todo.json
 *   node tools/kit-i18n.mjs apply <mòdul.js> <en.json>  afegeix les traduccions ({ ruta: "text" }) al mòdul
 *   node tools/kit-i18n.mjs todo <mòdul.js>…            el mateix que extract, però en segments numerats i sense
 *                                                       repetits → inbox/i18n/<k>/<mòdul>.todo.txt (@n text);
 *                                                       del HTML i l'SVG només surt el text que es llegeix
 *   node tools/kit-i18n.mjs done <mòdul.js>…            llegeix <mòdul>.en.txt (@n traducció) i l'aplica
 * Als fitxers .txt els salts de línia s'escriuen ¶.
 *
 * Els textos es reconeixen per la clau on són (x, t, title, q, items…); answer, id, type… no es toquen.
 * El marcatge ($…$, **…**, `…`, [..](..)) s'ha de conservar tal qual a la traducció.
 * apply reescriu el mòdul (només els generats per tools/kit-import; els escrits a mà es tradueixen a mà).
 */
import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, relative, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { moduleSource } from './kit-import/zip.mjs';
import { join as joinSeg, split as splitSeg } from './kit-seg.mjs';

const ROOT = resolve(dirname(new URL(import.meta.url).pathname), '..');
const TEXT = new Set(['x', 't', 'title', 'q', 'hint', 'note', 'caption', 'label', 'srcName', 'basedOn', 'why', 'svg', 'h', 'result', 'summary', 'sub', 'desc', 'tex', 'day', 'suffix', 'nf', 'ft']);
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

const MARKUP = new Set(['h', 'svg']);
const NL = '¶';
const inboxOf = (file, ext) => join(ROOT, 'inbox/i18n', relative(join(ROOT, 'src/courses'), resolve(file)).replace(/\.js$/, ext));

/**
 * Segments d'un mòdul: per a cada text sense anglès, o el text sencer o (HTML/SVG) els seus trossos llegibles.
 * Els trossos iguals en català i en castellà (noms, fórmules) no es tradueixen.
 */
function segments(value) {
  const ids = new Map();
  const list = [];
  const idOf = (es) => {
    if (!ids.has(es)) { ids.set(es, list.length); list.push(es); }
    return ids.get(es);
  };
  const texts = [];
  walk(value, [], (p, v) => {
    if (v.length === 3) return;
    const [ca, es] = v;
    if (MARKUP.has(p[p.length - 1])) {
      const S = splitSeg(es), C = splitSeg(ca);
      const same = C.segs.length === S.segs.length;
      texts.push({ p, markup: S, seg: S.segs.map((x, i) => (same && C.segs[i] === x ? null : idOf(x))) });
    } else texts.push({ p, seg: idOf(es) });
  }, () => {});
  return { list, texts };
}

function setAt(value, p, v) {
  let o = value;
  for (const k of p.slice(0, -1)) o = o[k];
  o[p[p.length - 1]] = v;
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
} else if (cmd === 'todo' && file) {
  for (const f of process.argv.slice(3)) {
    const { list } = segments(await load(f));
    const out = inboxOf(f, '.todo.txt');
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, list.map((x, i) => '@' + i + ' ' + x.replace(/\n/g, NL)).join('\n') + '\n');
    console.log(String(list.length).padStart(5), 'segments', String(list.reduce((a, x) => a + x.length, 0)).padStart(7), 'caràcters →', relative(ROOT, out));
  }
} else if (cmd === 'done' && file) {
  for (const f of process.argv.slice(3)) {
    const value = await load(f);
    const { list, texts } = segments(value);
    const raw = readFileSync(inboxOf(f, '.en.txt'), 'utf8');
    const tr = [];
    for (const m of raw.matchAll(/^@(\d+) ?(.*)$/gm)) tr[+m[1]] = m[2].replace(new RegExp(NL, 'g'), '\n').trimEnd();
    const ok = (n) => typeof tr[n] === 'string' && tr[n].trim() !== '';
    let n = 0, miss = 0;
    for (const t of texts) {
      const v = (() => { let o = value; for (const k of t.p) o = o[k]; return o; })();
      if (t.markup) {
        if (!t.seg.every((i) => i === null || ok(i))) { miss++; continue; }
        setAt(value, t.p, [v[0], v[1], joinSeg(t.markup.parts, t.markup.segs.map((x, i) => (t.seg[i] === null ? x : tr[t.seg[i]])))]);
      } else {
        if (!ok(t.seg)) { miss++; continue; }
        setAt(value, t.p, [v[0], v[1], tr[t.seg]]);
      }
      n++;
    }
    const extra = tr.length > list.length ? ' (el fitxer té ' + tr.length + ' segments i el mòdul ' + list.length + ': revisa-ho)' : '';
    const src = readFileSync(f, 'utf8');
    const head = src.startsWith('//') ? src.split('\n')[0] : '';
    writeFileSync(f, moduleSource(value, head));
    console.log(basename(f) + ':', n, 'textos traduïts', miss ? '· ' + miss + ' sense traducció' : '', extra);
  }
} else {
  console.log('Ús: node tools/kit-i18n.mjs report | extract <mòdul.js> | apply <mòdul.js> <en.json> | todo <mòdul.js>… | done <mòdul.js>…');
  process.exit(1);
}
