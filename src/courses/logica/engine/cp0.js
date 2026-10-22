/**
 * Lògica de proposicions (CP0): analitzador de fórmules, avaluació i taula de veritat.
 * L(ca, es) tria el text dels missatges en l'idioma actual.
 */

export function tokenize(s, L) {
  const out = [];
  let i = 0, m;
  s = s.replace(/<->|<=>|↔/g, '↔').replace(/->|=>|→/g, '→').replace(/&|∧|\^/g, '∧').replace(/\|\||\||∨/g, '∨').replace(/~|!|¬/g, '¬').replace(/\[/g, '(').replace(/\]/g, ')');
  while (i < s.length) {
    const c = s[i];
    if (/\s/.test(c)) { i++; continue; }
    if ('¬∧∨→↔(),'.indexOf(c) >= 0) { out.push({ k: 's', v: c }); i++; continue; }
    if ((m = /^[A-Za-zÀ-ÿ0-9_']+/.exec(s.slice(i)))) { out.push({ k: 'id', v: m[0] }); i += m[0].length; continue; }
    throw new Error(L('Caràcter inesperat: ', 'Carácter inesperado: ') + c);
  }
  return out;
}

export function parseCP0(s, L) {
  const t = tokenize(s, L);
  let p = 0;
  const pk = () => (t[p] ? t[p].v : null);
  const eat = (v) => { if (pk() !== v) throw new Error(L("S'esperava ", 'Se esperaba ') + v); p++; };
  function iff() { let a = imp(); while (pk() === '↔') { p++; a = { k: 'iff', a, b: imp() }; } return a; }
  function imp() { const a = or(); if (pk() === '→') { p++; return { k: 'imp', a, b: imp() }; } return a; }
  function or() { let a = and(); while (pk() === '∨') { p++; a = { k: 'or', a, b: and() }; } return a; }
  function and() { let a = un(); while (pk() === '∧') { p++; a = { k: 'and', a, b: un() }; } return a; }
  function un() { if (pk() === '¬') { p++; return { k: 'not', a: un() }; } return prim(); }
  function prim() {
    if (pk() === '(') { p++; const f = iff(); eat(')'); return f; }
    if (t[p] && t[p].k === 'id' && /^[A-Z]/.test(t[p].v)) return { k: 'at', v: t[p++].v };
    throw new Error(L('Fórmula mal formada', 'Fórmula mal formada') + (t[p] ? ' (' + t[p].v + ')' : ''));
  }
  const f = iff();
  if (p !== t.length) throw new Error(L('Sobra text: ', 'Sobra texto: ') + t[p].v);
  return f;
}

const PR = { iff: 1, imp: 2, or: 3, and: 4 };
const SY = { iff: ' ↔ ', imp: ' → ', or: ' ∨ ', and: ' ∧ ' };

/** Fórmula com a text, amb els parèntesis justos. */
export function fs(f, ctx) {
  ctx = ctx || 0;
  if (f.k === 'at') return f.v;
  if (f.k === 'not') return '¬' + fs(f.a, 9);
  const s = fs(f.a, 5) + SY[f.k] + fs(f.b, 5);
  return ctx > PR[f.k] ? '(' + s + ')' : s;
}
export function atoms(f, acc) {
  acc = acc || [];
  if (f.k === 'at') { if (acc.indexOf(f.v) < 0) acc.push(f.v); } else { atoms(f.a, acc); if (f.b) atoms(f.b, acc); }
  return acc;
}
export function ev(f, I) {
  switch (f.k) {
    case 'at': return I[f.v];
    case 'not': return !ev(f.a, I);
    case 'and': return ev(f.a, I) && ev(f.b, I);
    case 'or': return ev(f.a, I) || ev(f.b, I);
    case 'imp': return !ev(f.a, I) || ev(f.b, I);
    case 'iff': return ev(f.a, I) === ev(f.b, I);
    default: return undefined;
  }
}
/** Subfórmules (sense àtoms) en l'ordre en què es calculen. */
export function subs(f, acc) {
  acc = acc || [];
  if (f.k !== 'at') {
    subs(f.a, acc); if (f.b) subs(f.b, acc);
    const s = fs(f);
    if (!acc.some((x) => fs(x) === s)) acc.push(f);
  }
  return acc;
}

/**
 * Taula de veritat d'una fórmula o d'un raonament «P1; P2 ⇒ C».
 * Retorna { err } o { names, cols: [{ s, cls }], rows: [{ cls, I: [bool], v: [bool] }], verdict }.
 * verdict: trossos de text (una cadena o { b }) per pintar amb <Txt>.
 */
export function truthTable(src, L) {
  try {
    src = src.trim();
    const parts = src.split(/⇒|=>|\|-|⊢/);
    let prem = [], concl = null;
    if (parts.length > 2) throw new Error(L('Només hi pot haver un ⇒', 'Solo puede haber un ⇒'));
    if (parts.length === 2) { prem = parts[0].split(/;/).filter((x) => x.trim()).map((x) => parseCP0(x, L)); concl = parseCP0(parts[1], L); }
    else prem = [parseCP0(src, L)];
    const all = prem.concat(concl ? [concl] : []), names = [];
    all.forEach((f) => atoms(f, names)); names.sort();
    if (names.length > 6) throw new Error(L('Massa àtoms (màxim 6)', 'Demasiados átomos (máximo 6)'));
    const cols = [];
    all.forEach((f) => subs(f).forEach((s) => { if (!cols.some((c) => fs(c) === fs(s))) cols.push(s); }));
    const clsOf = (c) => (concl && fs(c) === fs(concl) ? 'cc' : prem.some((p) => fs(p) === fs(c)) ? 'pc' : '');
    const colInfo = cols.map((c) => ({ s: fs(c), cls: clsOf(c) }));
    let nT = 0, nRows = 0, bad = 0, good = 0;
    const rows = [];
    for (let r = 0; r < (1 << names.length); r++) {
      const I = {};
      names.forEach((n, j) => { I[n] = !!(r >> (names.length - 1 - j) & 1); });
      const pv = prem.every((p) => ev(p, I)), cv = concl ? ev(concl, I) : null;
      const cls = concl ? (pv && !cv ? 'bad' : (pv ? 'ok' : '')) : '';
      if (concl && pv) { good++; if (!cv) bad++; }
      if (!concl && ev(prem[0], I)) nT++;
      nRows++;
      rows.push({ cls, I: names.map((n) => I[n]), v: cols.map((c) => ev(c, I)) });
    }
    let verdict;
    if (concl) {
      verdict = bad
        ? L([{ b: 'No és vàlid' }, ': hi ha ' + bad + ' fila(es) amb les premisses certes i la conclusió falsa (en vermell).'], [{ b: 'No es válido' }, ': hay ' + bad + ' fila(s) con las premisas ciertas y la conclusión falsa (en rojo).'])
        : L([{ b: 'És vàlid' }, ': a totes les files amb les premisses certes (' + good + '), la conclusió també ho és.'], [{ b: 'Es válido' }, ': en todas las filas con las premisas ciertas (' + good + '), la conclusión también lo es.']);
    } else {
      verdict = nT === nRows ? L([{ b: 'Tautologia' }, ': certa a totes les files.'], [{ b: 'Tautología' }, ': cierta en todas las filas.'])
        : nT === 0 ? L([{ b: 'Insatisfactible' }, ': falsa a totes les files.'], [{ b: 'Insatisfacible' }, ': falsa en todas las filas.'])
          : L([{ b: 'Satisfactible no vàlida' }, ': certa a ' + nT + ' de ' + nRows + ' files.'], [{ b: 'Satisfacible no válida' }, ': cierta en ' + nT + ' de ' + nRows + ' filas.']);
    }
    return { names, cols: colInfo, rows, verdict };
  } catch (e) {
    return { err: e.message };
  }
}
