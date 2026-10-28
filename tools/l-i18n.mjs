/**
 * L'anglès de les crides L(ca, es) del codi dels cursos (laboratoris, generadors, motors):
 * cada crida amb dos textos literals passa a L(ca, es, en).
 *
 *   node tools/l-i18n.mjs todo <nom> <fitxer>…   textos en castellà sense anglès → inbox/i18n/L/<nom>.todo.txt
 *   node tools/l-i18n.mjs done <nom> <fitxer>…   llegeix inbox/i18n/L/<nom>.en.txt i afegeix el tercer argument
 *
 * Al .txt, «@n text» és un text literal (sense cometes ni escapaments, salts de línia com ¶) i «@n` text»,
 * una plantilla `…${x}…` tal com és al codi (els ${…} es copien igual). Els textos repetits surten un cop.
 * --fn=L,T tria els noms de funció (per defecte L).
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as espree from 'espree';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const NL = '¶';
const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const opt = Object.fromEntries(process.argv.slice(2).filter((a) => a.startsWith('--')).map((a) => a.slice(2).split('=')));
const FN = new Set((opt.fn || 'L').split(','));
const [cmd, name, ...files] = args;

const parse = (src) => espree.parse(src, { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true }, range: true });
const isStr = (n) => n && ((n.type === 'Literal' && typeof n.value === 'string') || n.type === 'TemplateLiteral');

/** Crides L(a, b) amb dos textos i sense tercer argument. */
function calls(src) {
  const out = [];
  const visit = (n) => {
    if (!n || typeof n.type !== 'string') return;
    if (n.type === 'CallExpression' && n.callee.type === 'Identifier' && FN.has(n.callee.name) && n.arguments.length === 2 && n.arguments.every(isStr)) out.push(n);
    for (const k in n) {
      if (k === 'parent') continue;
      const v = n[k];
      if (Array.isArray(v)) v.forEach(visit);
      else if (v && typeof v.type === 'string') visit(v);
    }
  };
  visit(parse(src));
  return out;
}

/** Clau d'un argument: «text» (literal, el valor) o «`text» (plantilla, el codi de dins). */
const keyOf = (src, a) => (a.type === 'Literal' ? a.value : '`' + src.slice(a.range[0] + 1, a.range[1] - 1));

function quote(s, q) {
  const body = s.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t');
  return q + body.split(q).join('\\' + q) + q;
}

const todoFile = join(ROOT, 'inbox/i18n/L', name + '.todo.txt');
const enFile = join(ROOT, 'inbox/i18n/L', name + '.en.txt');

if (cmd === 'todo' && name && files.length) {
  const seen = new Map();
  let skipped = 0;
  for (const f of files) {
    const src = readFileSync(f, 'utf8');
    for (const c of calls(src)) {
      const k = keyOf(src, c.arguments[1]);
      if (!seen.has(k)) seen.set(k, seen.size);
    }
    skipped += (src.match(/\bL\(/g) || []).length;
  }
  mkdirSync(dirname(todoFile), { recursive: true });
  const lines = [...seen.keys()].map((k, i) => '@' + i + (k[0] === '`' ? '` ' + k.slice(1) : ' ' + k).replace(/\n/g, NL));
  writeFileSync(todoFile, lines.join('\n') + '\n');
  console.log(seen.size, 'textos →', todoFile.replace(ROOT + '/', ''), `(${[...seen.keys()].reduce((a, k) => a + k.length, 0)} caràcters)`);
} else if (cmd === 'done' && name && files.length) {
  const todo = readFileSync(todoFile, 'utf8');
  const keys = [];
  for (const m of todo.matchAll(/^@(\d+)(`?) (.*)$/gm)) keys[+m[1]] = (m[2] ? '`' : '') + m[3].replace(new RegExp(NL, 'g'), '\n');
  const tr = new Map();
  for (const m of readFileSync(enFile, 'utf8').matchAll(/^@(\d+)`? ?(.*)$/gm)) {
    const t = m[2].replace(new RegExp(NL, 'g'), '\n').replace(/\r$/, '');
    if (keys[+m[1]] !== undefined && t.trim()) tr.set(keys[+m[1]], t);
  }
  let n = 0, miss = 0;
  for (const f of files) {
    let src = readFileSync(f, 'utf8');
    const cs = calls(src).sort((a, b) => b.range[0] - a.range[0]);
    for (const c of cs) {
      const es = c.arguments[1];
      const t = tr.get(keyOf(src, es));
      if (t === undefined) { miss++; continue; }
      const lit = es.type === 'TemplateLiteral' ? '`' + t + '`' : quote(t, src[es.range[0]]);
      src = src.slice(0, es.range[1]) + ', ' + lit + src.slice(es.range[1]);
      n++;
    }
    parse(src); // que encara sigui codi vàlid
    writeFileSync(f, src);
  }
  console.log(n, 'crides amb anglès', miss ? '· ' + miss + ' sense traducció' : '');
} else {
  console.log('Ús: node tools/l-i18n.mjs todo|done <nom> <fitxer>… [--fn=L]');
  process.exit(1);
}
