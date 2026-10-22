import { Z, tx } from '../engine/z.js';

/**
 * Banc d'exercicis: utilitats, lectura i correcció de respostes, formats i generació amb llavor.
 * Codi original; l'idioma i les dependències arriben pel contenidor $ (un per idioma).
 */
export function makeBank($) {
  const { L, P, UL, fref } = $;
  /* ============================================================
     BANC D'EXERCICIS PER NIVELLS: tema × nivell (fàcil, mitjà, extrem)
     Cada plantilla genera un exercici nou amb paràmetres aleatoris.
     ============================================================ */
  const BKT = {};                       // tema -> { n: () => nom, lv: {1: [...], 2: [...], 3: [...]} }
  const BKORD = ['conj', 'rel', 'nomb', 'ind', 'cx', 'arr'];

  const LVN = () => ({ 1: L('Fàcil', 'Fácil'), 2: L('Mitjà', 'Medio'), 3: L('Extrem', 'Extremo') });
  const LVD = () => ({
    1: L('Aplicar una definició o una fórmula directament. Per agafar soltesa abans de l\'examen.', 'Aplicar una definición o una fórmula directamente. Para coger soltura antes del examen.'),
    2: L('Com els exercicis del CP: diversos passos, i alguna trampa típica.', 'Como los ejercicios del CP: varios pasos, y alguna trampa típica.'),
    3: L('Per treure un 10: demostracions completes, casos límit i exercicis que barregen conceptes.', 'Para sacar un 10: demostraciones completas, casos límite y ejercicios que mezclan conceptos.')
  });
  /* ---------- utilitats ---------- */
  const ri = (a, b) => a + Z.rnd(b - a + 1);
  const rnz = (a, b) => { let x; do { x = ri(a, b); } while (x === 0); return x; };
  const ng = x => String(x).replace(/-/g, '−');
  const pr = x => x < 0 ? '(' + ng(x) + ')' : String(x);
  const sOf = arr => Array.from(new Set(arr)).sort((a, b) => a - b);
  const sTx = arr => arr.length ? '\\{' + arr.map(ng).join(', ') + '\\}' : '∅';
  const randSub = (U, k) => sOf(Z.shuffle(U).slice(0, k));
  const kS = (h, m, w, c) => ({ h, m, w, c });              // pas amb fórmula
  const kT = (h, t, c) => ({ h, t, c });                    // pas amb text
  const kDone = (m, w) => ({ h: L('Resultat', 'Resultado'), m, w, c: 'done' });
  const kF = (s, f, nf) => Object.assign(s, f && f.length ? { f } : {}, nf ? { nf } : {});   // pas amb entrades del formulari
  const uniq = arr => Array.from(new Set(arr));
  /* textos reutilitzables per a les guies «només amb el formulari» */
  const FXT = {
    diff: () => L('$X ∖ Y = X ∩ \\ov{Y}$ no és al formulari. Enuncia-la i demostra-la abans de fer-la servir: $x ∈ X ∖ Y ⟺ x ∈ X ∧ x ∉ Y ⟺ x ∈ X ∧ x ∈ \\ov{Y} ⟺ x ∈ X ∩ \\ov{Y}$.', '$X ∖ Y = X ∩ \\ov{Y}$ no está en el formulario. Enúnciala y demuéstrala antes de usarla: $x ∈ X ∖ Y ⟺ x ∈ X ∧ x ∉ Y ⟺ x ∈ X ∧ x ∈ \\ov{Y} ⟺ x ∈ X ∩ \\ov{Y}$.'),
    omega: () => L('$X ∪ \\ov{X} = Ω$ no hi és escrit així, però surt de Complementari (7), $A ∪ B = Ω ⇔ \\ov{A} ⊆ B$, amb $A = X$ i $B = \\ov{X}$: com que $\\ov{X} ⊆ \\ov{X}$, tenim $X ∪ \\ov{X} = Ω$.', '$X ∪ \\ov{X} = Ω$ no está escrito así, pero sale de Complementari (7), $A ∪ B = Ω ⇔ \\ov{A} ⊆ B$, con $A = X$ y $B = \\ov{X}$: como $\\ov{X} ⊆ \\ov{X}$, tenemos $X ∪ \\ov{X} = Ω$.'),
    inOmega: () => L('$X ∩ Ω = X$: Intersecció (6), perquè tot conjunt és dins de l\'univers ($X ⊆ Ω$).', '$X ∩ Ω = X$: Intersecció (6), porque todo conjunto está dentro del universo ($X ⊆ Ω$).'),
    emptySub: () => L('$∅ ⊆ X$ no hi és escrit, però surt de Unió (6): $∅ ⊆ X ⇔ ∅ ∪ X = X$, i $∅ ∪ X = X ∪ ∅ = X$ per Unió (2) i (4).', '$∅ ⊆ X$ no está escrito, pero sale de Unió (6): $∅ ⊆ X ⇔ ∅ ∪ X = X$, y $∅ ∪ X = X ∪ ∅ = X$ por Unió (2) y (4).'),
    logic: () => L('Les lleis de la lògica (De Morgan lògic $¬(p ∨ q) ≡ ¬p ∧ ¬q$, les distributives de ∧ i ∨, $p ∧ ¬p$ sempre fals) no són al formulari de conjunts, però són lògica del tema 0: les pots fer servir citant-les.', 'Las leyes de la lógica (De Morgan lógico $¬(p ∨ q) ≡ ¬p ∧ ¬q$, las distributivas de ∧ y ∨, $p ∧ ¬p$ siempre falso) no están en el formulario de conjuntos, pero son lógica del tema 0: puedes usarlas citándolas.'),
    defs: () => L('Les definicions de ∪, ∩, ∖, complementari i ⊆ no són al formulari, però són definicions: es fan servir sense demostrar ($x ∈ A ∪ B ⟺ x ∈ A ∨ x ∈ B$, i així amb les altres).', 'Las definiciones de ∪, ∩, ∖, complementario y ⊆ no están en el formulario, pero son definiciones: se usan sin demostrar ($x ∈ A ∪ B ⟺ x ∈ A ∨ x ∈ B$, y así con las demás).'),
    nat: () => L('Que ℕ comença a 1 no hi és escrit, però ho confirma §4: la inducció arrenca a «$1 ∈ S$».', 'Que ℕ empieza en 1 no está escrito, pero lo confirma §4: la inducción arranca en «$1 ∈ S$».'),
    dbl: () => L('Doble inclusió: $X = Y ⟺ X ⊆ Y$ i $Y ⊆ X$. És la definició d\'igualtat de conjunts; no cal demostrar-la.', 'Doble inclusión: $X = Y ⟺ X ⊆ Y$ e $Y ⊆ X$. Es la definición de igualdad de conjuntos; no hay que demostrarla.'),
    realCx: () => L('Truc: tot real és un complex amb part imaginària 0 ($x = x + 0 · i$), i aleshores el mòdul de §6 és el valor absolut: $|x| = \\sq{x^{2} + 0^{2}} = \\sq{x^{2}}$. Per això les propietats de §6.3 valen per a ℝ: $|xy| = |x| · |y|$, $|x + y| ≤ |x| + |y|$, $|x| = |−x|$.', 'Truco: todo real es un complejo con parte imaginaria 0 ($x = x + 0 · i$), y entonces el módulo de §6 es el valor absoluto: $|x| = \\sq{x^{2} + 0^{2}} = \\sq{x^{2}}$. Por eso las propiedades de §6.3 valen para ℝ: $|xy| = |x| · |y|$, $|x + y| ≤ |x| + |y|$, $|x| = |−x|$.')
  };
  const fracTxS = (p, q) => Z.fracTx(p, q);                 // \fr o enter
  const C = (re, im) => Z.Cx(re, im || 0);
  /* complex exacte amb parts racionals: (pr/d) + (pi/d) i */
  function cxFrTx(p1, q1, p2, q2) {
    const a = Z.frac(p1, q1), b = Z.frac(p2, q2);
    const at = a[0] === 0 ? '' : Z.fracTx(a[0], a[1]);
    if (b[0] === 0) return at || '0';
    const bAbs = Z.fracTx(Math.abs(b[0]), b[1]), bi = bAbs === '1' ? 'i' : bAbs + (/fr/.test(bAbs) ? ' i' : 'i');
    if (!at) return (b[0] < 0 ? '−' : '') + bi;
    return at + (b[0] < 0 ? ' − ' : ' + ') + bi;
  }
  const cxTx = z => Z.fmtC(z, 4);
  /* entrada de l'usuari: comes decimals, menys llarg, forma polar r_(θ) o r_{θ} */
  function bkPolarIn(s) {
    return s.replace(/(\d+(?:\.\d+)?|sqrt\(\d+\)|√\(?\d+\)?|\([^()]*\))\s*_\s*[{(]([^{}()]*(?:\([^()]*\)[^{}()]*)*)[})]/g, '($1)*exp(i*($2))');
  }
  function bkPrep(s, keepComma) {
    s = String(s == null ? '' : s).trim().replace(/−/g, '-').replace(/[·×]/g, '*').replace(/\u00a0/g, ' ');
    if (!keepComma) s = s.replace(/,/g, '.');
    return bkPolarIn(s);
  }
  function bkEval(s) { const v = Z.tryEval(bkPrep(s)); return v; }
  function bkList(s) {
    s = String(s == null ? '' : s).trim().replace(/^\{/, '').replace(/\}$/, '').trim();
    if (!s || /^[∅Ø]$/.test(s)) return [];
    const parts = s.includes(';') ? s.split(';') : s.split(',');
    return parts.map(x => x.trim()).filter(Boolean).map(x => { const v = bkEval(x); if (!v) throw new Error('item'); return v; });
  }
  function bkUniq(arr, tol) { return arr.filter((x, k) => arr.findIndex(y => Z.ceq(x, y, tol)) === k); }
  function angEq(a, b, tol) { const d = ((a - b) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI); return d < tol || 2 * Math.PI - d < tol; }
  /* matriu escrita com «1 2; 3 4» (files amb ; i elements amb espais o comes) */
  function bkMat(raw) {
    let t = String(raw == null ? '' : raw).trim();
    if (!t) return null;
    if (t.includes('[')) t = t.replace(/\]\s*,\s*\[/g, ';').replace(/[[\]]/g, '');
    const rows = t.split(/;|\n/).map(r => r.trim()).filter(Boolean).map(r => r.split(/[\s,]+/).filter(Boolean));
    if (!rows.length || rows.some(r => r.length !== rows[0].length)) return null;
    const vals = rows.map(r => r.map(x => { const v = bkEval(x); return v && Math.abs(v.im) < 1e-9 ? v.re : NaN; }));
    if (vals.some(r => r.some(x => !isFinite(x)))) return null;
    return { vals, toks: rows };
  }
  function bkMatPrev(raw) {
    if (raw == null || !String(raw).trim()) return '';
    const X = bkMat(raw);
    if (!X) return '<span class="tiny muted">' + L('Encara no és una matriu: files separades per «;» i totes amb el mateix nombre d\'elements.', 'Todavía no es una matriz: filas separadas por «;» y todas con el mismo número de elementos.') + '</span>';
    return '<span class="m">' + tx('\\mat{' + X.toks.map(r => r.map(x => x.replace(/[\\{}&;]/g, '').replace(/-/g, '−')).join(' & ')).join('; ') + '}') + '</span><span class="tiny muted"> ' + X.vals.length + ' × ' + X.vals[0].length + '</span>';
  }
  /* comprova un valor segons el tipus */
  function bkOk(k, raw, v, o) {
    o = o || {};
    if (raw == null || String(raw).trim() === '') return null;
    try {
      if (k === 'num' || k === 'ang') {
        const x = bkEval(raw); if (!x || Math.abs(x.im) > 1e-7) return false;
        const tol = o.tol || 1e-6 * Math.max(1, Math.abs(v));
        return k === 'ang' ? angEq(x.re, v, o.tol || 1e-4) : Math.abs(x.re - v) <= tol;
      }
      if (k === 'cx') { const x = bkEval(raw); return !!x && Z.ceq(x, v, o.tol || 1e-9); }
      if (k === 'list' || k === 'set') {
        let a = bkList(raw), b = v; const tol = o.tol || 1e-5;
        if (k === 'set') { a = bkUniq(a, tol); b = bkUniq(b, tol); }
        return Z.sameMultiset(a, b, tol);
      }
      if (k === 'hset') return Z.hparse(raw) === v;
      if (k === 'nset') return nsKey(nsParse(raw)) === v;
      if (k === 'rel') return o.test(raw);
      if (k === 'mat') { const X = bkMat(raw); if (!X) return false; const A = X.vals; return A.length === v.length && A[0].length === v[0].length && A.every((r, i) => r.every((x, j) => Math.abs(x - v[i][j]) <= 1e-6 * Math.max(1, Math.abs(v[i][j])))); }
    } catch { return false; }
    return false;
  }
  /* ---------- conjunts niats amb nombres i lletres: {1, {1, a}, ∅} ---------- */
  function nsParse(s) {
    s = String(s).replace(/Ø/g, '∅').replace(/\s+/g, ''); let i = 0;
    function el() {
      if (s[i] === '∅') { i++; return []; }
      if (s[i] === '{') {
        i++; const out = [];
        if (s[i] === '}') { i++; return out; }
        for (;;) { out.push(el()); if (s[i] === ',') { i++; continue; } if (s[i] === '}') { i++; return out; } throw new Error('ns'); }
      }
      const m = /^(-?\d+|[a-z])/.exec(s.slice(i)); if (!m) throw new Error('ns'); i += m[0].length; return /\d/.test(m[0]) ? +m[0] : m[0];
    }
    const r = el(); if (i !== s.length) throw new Error('ns'); return r;
  }
  function nsKey(x) { if (!Array.isArray(x)) return String(x); const ks = Array.from(new Set(x.map(nsKey))).sort(); return '{' + ks.join(',') + '}'; }
  function nsTx(x) { if (!Array.isArray(x)) return ng(x); if (!x.length) return '∅'; return '\\{' + x.map(nsTx).join(', ') + '\\}'; }
  const nsIn = (x, A) => A.some(y => nsKey(y) === nsKey(x));
  const nsSub = (X, A) => X.every(y => nsIn(y, A));
  function nsPow(A) { const out = []; const n = A.length; for (let m = 0; m < (1 << n); m++) out.push(A.filter((_, j) => (m >> j) & 1)); return out; }

  /* ---------- format de les respostes ---------- */
  const BKHELP = () => ({
    num: L('Pots escriure enters, fraccions (3/4), arrels (√2, 2√3) i π.', 'Puedes escribir enteros, fracciones (3/4), raíces (√2, 2√3) y π.'),
    ang: L('Angle en radians: π/3, −3π/4, 2π/3… Val qualsevol angle equivalent.', 'Ángulo en radianes: π/3, −3π/4, 2π/3… Vale cualquier ángulo equivalente.'),
    cx: L('Forma a + bi (3 − 2i, √3 + i, 1/2 + 3/2 i) o polar r_(θ), com 2_(π/6).', 'Forma a + bi (3 − 2i, √3 + i, 1/2 + 3/2 i) o polar r_(θ), como 2_(π/6).'),
    list: L('Separa els valors amb «;». Cada un en binòmica (√3 + i) o en polar (2_(π/6)). L\'ordre no importa.', 'Separa los valores con «;». Cada uno en binómica (√3 + i) o en polar (2_(π/6)). El orden no importa.'),
    set: L('Escriu els elements entre claus, separats per comes: {1, 4, 9}. Si és buit, ∅.', 'Escribe los elementos entre llaves, separados por comas: {1, 4, 9}. Si es vacío, ∅.'),
    hset: L('Fes servir ∅ i claus: {∅, {∅}}.', 'Usa ∅ y llaves: {∅, {∅}}.'),
    nset: L('Fes servir claus, ∅, nombres i lletres: {∅, {1}, {1, a}}.', 'Usa llaves, ∅, números y letras: {∅, {1}, {1, a}}.'),
    rel: L('Escriu les parelles: (1,1), (1,2), (2,1). Si no n\'hi ha cap, ∅.', 'Escribe los pares: (1,1), (1,2), (2,1). Si no hay ninguno, ∅.'),
    mat: L('Files separades per «;» i elements per espais o comes: 1 2; 3 4. Fraccions sense espais: 1/2, −3/4.', 'Filas separadas por «;» y elementos por espacios o comas: 1 2; 3 4. Fracciones sin espacios: 1/2, −3/4.')
  });
  const BKKEYS = { num: ['√', 'π', '/', '^', '(', ')', '−', '⌫'], ang: ['π', '/', '−', '(', ')', '⌫'], cx: ['i', '√', 'π', '/', '^', '(', ')', '_', '−', '⌫'], list: ['i', '√', 'π', '/', ';', '(', ')', '_', '−', '⌫'], set: ['{', '}', ',', '∅', 'i', '√', '−', '⌫'], hset: ['∅', '{', '}', ',', '⌫'], nset: ['∅', '{', '}', ',', '⌫'], rel: ['(', ')', ',', '∅', '⌫'], mat: [';', ',', '/', '−', '⌫'] };

  /* ---------- generació d'una tanda ---------- */
  /* generador amb llavor: el mateix exercici es pot tornar a generar en l'altre idioma */
  function bkSeeded(seed, f) {
    const R = Math.random; let a = seed | 0;
    Math.random = () => { a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
    try { return f(); } finally { Math.random = R; }
  }

  /* com resoldre-ho només amb el formulari: g = { on: [claus], plan, compte: [...], fora: [...] } */
  function bkFormBox(g) {
    const compte = g.compte || [], fora = g.fora || [];
    return '<div class="bx form"><div class="bh">' + L('Només amb el formulari', 'Solo con el formulario') + '</div>' +
      (g.on && g.on.length ? '<div class="small"><b>' + L('Entrades que fas servir', 'Entradas que usas') + ':</b></div>' + fref(g.on) : '<div class="small"><b>' + L('Cap entrada del formulari resol aquest exercici directament.', 'Ninguna entrada del formulario resuelve este ejercicio directamente.') + '</b></div>') +
      (g.plan ? P(g.plan) : '') +
      (compte.length ? '<div class="small"><b>' + L('Compte', 'Cuidado') + '</b></div>' + UL(compte) : '') +
      (fora.length ? '<div class="small"><b>' + L('No és al formulari: enuncia-ho i justifica-ho així', 'No está en el formulario: enúncialo y justifícalo así') + '</b></div>' + UL(fora) : '<p class="small">' + L('Tot el que cal és al formulari o és una definició: n\'hi ha prou amb citar-ho.', 'Todo lo necesario está en el formulario o es una definición: basta con citarlo.') + '</p>') + '</div>';
  }
  return { BKT, BKORD, LVN, LVD, ri, rnz, ng, pr, sOf, sTx, randSub, kS, kT, kDone, kF, uniq, FXT, fracTxS, C, cxFrTx, cxTx, bkPolarIn, bkPrep, bkEval, bkList, bkUniq, angEq, bkMat, bkMatPrev, bkOk, nsParse, nsKey, nsTx, nsIn, nsSub, nsPow, BKHELP, BKKEYS, bkSeeded, bkFormBox };
}
