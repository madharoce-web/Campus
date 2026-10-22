/**
 * PostCSS: aïlla el CSS de cada curs.
 *
 * Cada curs (src/courses/<curs>/) porta el CSS de la web original, amb selectors
 * globals com `:root`, `body`, `.card` o `.btn`. Per evitar que els estils d'un curs
 * afectin els altres quan es navega dins l'aplicació, tots els selectors dels fitxers
 * CSS d'un curs es prefixen amb [data-course="<curs>"], l'atribut que porta
 * l'element arrel de cada curs (i els forats que el curs ocupa a la barra superior).
 *
 *   :root, html, body      ->  [data-course="mates"]
 *   body .x, html .x       ->  [data-course="mates"] .x
 *   .card                  ->  [data-course="mates"] .card
 *   *                      ->  [data-course="mates"], [data-course="mates"] *
 *
 * Es respecten @keyframes i @font-face. Un fitxer que comenci amb el comentari
 * `/* scope:off *\/` no es toca; una regla precedida de `/* global *\/` tampoco.
 */
import path from 'node:path';

const ROOT_SEL = /^(?::root|html|body)(?=$|[\s.:#[>+~(])/;

function scopeSelector(sel, pre) {
  const s = sel.trim();
  if (!s || s.includes('[data-course') || s.includes('[data-page')) return s;
  if (/^(?:from|to|\d+(?:\.\d+)?%)$/.test(s)) return s; // passos de @keyframes
  // html body .x / :root .x / body::before / :root[data-x]
  let rest = s;
  let matched = false;
  for (;;) {
    const m = ROOT_SEL.exec(rest);
    if (!m) break;
    matched = true;
    rest = rest.slice(m[0].length);
    // permet un segon html/body: "html body .x"
    const sp = /^\s+/.exec(rest);
    if (sp && ROOT_SEL.test(rest.slice(sp[0].length))) { rest = rest.slice(sp[0].length); continue; }
    break;
  }
  if (matched) return pre + rest;
  if (s === '*') return `${pre}, ${pre} *`;
  return `${pre} ${s}`;
}

function splitSelectors(selector) {
  // separa per comes que no siguin dins de () o []
  const out = []; let depth = 0, cur = '';
  for (const ch of selector) {
    if (ch === '(' || ch === '[') depth++;
    else if (ch === ')' || ch === ']') depth--;
    if (ch === ',' && depth === 0) { out.push(cur); cur = ''; continue; }
    cur += ch;
  }
  out.push(cur);
  return out;
}

export default function scopeCourses(opts = {}) {
  // [{ dir: 'src/courses', attr: 'data-course' }, { dir: 'src/pages', attr: 'data-page' }]
  const scopes = (opts.scopes || [{ dir: 'src/courses', attr: 'data-course' }])
    .map((x) => ({ dir: path.resolve(x.dir), attr: x.attr }));
  return {
    postcssPlugin: 'scope-courses',
    Once(root, { result }) {
      const from = result.opts.from && path.resolve(result.opts.from.split('?')[0]);
      if (!from) return;
      const sc = scopes.find((x) => from.startsWith(x.dir + path.sep));
      if (!sc) return;
      const name = from.slice(sc.dir.length + 1).split(path.sep)[0];
      if (!name || name.startsWith('_') || name.includes('.')) return;
      const first = root.first;
      if (first && first.type === 'comment' && /scope:off/.test(first.text)) return;
      const pre = `[${sc.attr}="${name}"]`;
      root.walkRules((rule) => {
        let p = rule.parent;
        while (p && p.type !== 'root') {
          if (p.type === 'atrule' && /keyframes$/i.test(p.name)) return;
          p = p.parent;
        }
        const prev = rule.prev();
        if (prev && prev.type === 'comment' && /^\s*global\s*$/.test(prev.text)) return;
        rule.selector = splitSelectors(rule.selector).map((x) => scopeSelector(x, pre)).join(',\n');
      });
    },
  };
}
scopeCourses.postcss = true;
