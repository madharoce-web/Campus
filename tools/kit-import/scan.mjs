// Eina per preparar un importador: compta les etiquetes i classes de l'HTML d'un JSON (node tools/kit-import/scan.mjs fitxer.json [ruta.dins])
import { readFileSync } from 'node:fs';
import { parse } from './html.mjs';
const [file, path] = process.argv.slice(2);
let d = JSON.parse(readFileSync(file, 'utf8'));
const html = [];
const walk = (v) => { if (typeof v === 'string') { if (v.includes('<')) html.push(v); } else if (Array.isArray(v)) v.forEach(walk); else if (v && typeof v === 'object') Object.values(v).forEach(walk); };
walk(path ? path.split('.').reduce((o, k) => o[k], d) : d);
const cnt = new Map();
for (const h of html) for (const el of parse(h).querySelectorAll('*')) { const k = el.tagName.toLowerCase() + (el.getAttribute('class') ? '.' + el.getAttribute('class').trim().split(/\s+/).join('.') : ''); cnt.set(k, (cnt.get(k) || 0) + 1); }
console.log([...cnt].sort((a, b) => b[1] - a[1]).map(([k, v]) => k + ':' + v).join('  '));
