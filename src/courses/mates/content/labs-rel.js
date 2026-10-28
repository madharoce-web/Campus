import { Z } from '../engine/z.js';

/**
 * Ajudes dels laboratoris de relacions: grafs, propietats, congruències, diagrames de Hasse i «demostrar o refutar».
 * Codi original; l'idioma i les dependències arriben pel contenidor $ (un per idioma).
 */
export function makeLabsRel($) {
  const { L, esc, uid } = $;
  /* ============================================================
     LABORATORIS · TEMA 1 (relacions, equivalència, ordre)
     ============================================================ */
  const RPRE = {
    eq: { n: 4, f: (a, b) => a === b, t: '=' }, le: { n: 4, f: (a, b) => a <= b, t: '≤' }, lt: { n: 4, f: (a, b) => a < b, t: '<' },
    ne: { n: 3, f: (a, b) => a !== b, t: '≠' }, md: { n: 4, f: (a, b) => a === b || (a + b === 3 && a !== b), t: L => L('apunts', 'apuntes', 'notes') },
    dv: { n: 4, f: (a, b) => b % a === 0, t: 'a | b' }, m2: { n: 4, f: (a, b) => (a - b) % 2 === 0, t: L => L('mateixa paritat', 'misma paridad', 'same parity') },
    em: { n: 3, f: () => false, t: '∅' }, all: { n: 3, f: () => true, t: 'A × A' },
    dm: { n: 3, f: (a, b) => a === b || a + b === 3 || (a === 2 && b === 3), t: L => L('exemple', 'ejemplo', 'example') }
  };
  function relAnalyse(E, R) {
    const r = { refl: null, antirefl: null, sym: null, asym: null, trans: null, antitrans: null };
    const nr = E.find(a => !R(a, a)); r.refl = nr === undefined ? true : [nr];
    const yr = E.find(a => R(a, a)); r.antirefl = yr === undefined ? true : [yr];
    let ce = null; E.some(a => E.some(b => R(a, b) && !R(b, a) && (ce = [a, b]))); r.sym = ce || true;
    ce = null; E.some(a => E.some(b => a !== b && R(a, b) && R(b, a) && (ce = [a, b]))); r.asym = ce || true;
    ce = null; E.some(a => E.some(b => R(a, b) && E.some(c => R(b, c) && !R(a, c) && (ce = [a, b, c])))); r.trans = ce || true;
    ce = null; E.some(a => E.some(b => R(a, b) && E.some(c => R(b, c) && R(a, c) && (ce = [a, b, c])))); r.antitrans = ce || true;
    return r;
  }
  function arrowDefs(p, cls) { return '<marker id="' + p + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="' + (cls || '') + '"/></marker>'; }
  function relGraph(E, R, hl) {
    const n = E.length, cx = 130, cy = 118, rad = n <= 3 ? 70 : 82, p = 'ar' + (uid());
    const pos = {}; E.forEach((a, i) => { const t = -Math.PI / 2 + 2 * Math.PI * i / n; pos[a] = [cx + rad * Math.cos(t), cy + rad * Math.sin(t)]; });
    const isHl = (a, b) => hl && hl.some(([x, y]) => x === a && y === b);
    let g = '';
    E.forEach(a => E.forEach(b => {
      if (!R(a, b)) return;
      const [x1, y1] = pos[a], [x2, y2] = pos[b];
      if (a === b) { const ux = (x1 - cx) / rad, uy = (y1 - cy) / rad, lx = x1 + ux * 25, ly = y1 + uy * 25; g += '<circle class="edge' + (isHl(a, a) ? ' ce' : '') + '" cx="' + lx + '" cy="' + ly + '" r="10"/>'; return; }
      const dx = x2 - x1, dy = y2 - y1, d = Math.hypot(dx, dy), ux = dx / d, uy = dy / d;
      const sx = x1 + ux * 17, sy = y1 + uy * 17, ex = x2 - ux * 19, ey = y2 - uy * 19;
      const both = R(b, a);
      if (both) { const mx = (sx + ex) / 2 - uy * 16, my = (sy + ey) / 2 + ux * 16; g += '<path class="edge' + (isHl(a, b) ? ' ce' : '') + '" d="M' + sx + ' ' + sy + ' Q' + mx + ' ' + my + ' ' + ex + ' ' + ey + '" marker-end="url(#' + p + ')"/>'; }
      else g += '<path class="edge' + (isHl(a, b) ? ' ce' : '') + '" d="M' + sx + ' ' + sy + ' L' + ex + ' ' + ey + '" marker-end="url(#' + p + ')"/>';
    }));
    E.forEach(a => { const [x, y] = pos[a]; g += '<circle class="node" cx="' + x + '" cy="' + y + '" r="16"/><text x="' + x + '" y="' + y + '">' + a + '</text>'; });
    return '<svg class="rg" viewBox="0 0 260 240" role="img" aria-label="' + L('Graf de la relació', 'Grafo de la relación', 'Graph of the relation') + '"><defs>' + arrowDefs(p) + '</defs>' + g + '</svg>';
  }

  /* ---------- diagrames de Hasse ---------- */
  const HPOS = {
    P3: { E: Z.range(0, 7), leq: (a, b) => (a & ~b) === 0, lab: m => m ? '{' + [1, 2, 3].filter((_, j) => (m >> j) & 1).join(',') + '}' : '∅', t: '𝒫({1,2,3}), ⊆', key: m => m },
    P2: { E: Z.range(0, 3), leq: (a, b) => (a & ~b) === 0, lab: m => m ? '{' + ['a', 'b'].filter((_, j) => (m >> j) & 1).join(',') + '}' : '∅', t: '𝒫({a,b}), ⊆', key: m => m },
    D12: { E: [1, 2, 3, 4, 6, 12], leq: (a, b) => b % a === 0, lab: String, t: L => L('divisors de 12, |', 'divisores de 12, |', 'divisors of 12, |'), key: x => x },
    D30: { E: [1, 2, 3, 5, 6, 10, 15, 30], leq: (a, b) => b % a === 0, lab: String, t: L => L('divisors de 30, |', 'divisores de 30, |', 'divisors of 30, |'), key: x => x },
    L4: { E: [1, 2, 3, 4], leq: (a, b) => a <= b, lab: String, t: '{1,2,3,4}, ≤', key: x => x }
  };
  function hasseSVG(P, stage, sel) {
    const E = P.E, h = Z.hasse(E, P.leq), maxL = Math.max(...E.map(x => h.level[x]));
    const W = 420, H = 70 + maxL * 78, pos = {}, p = 'hm' + (uid());
    for (let l = 0; l <= maxL; l++) { const row = E.filter(x => h.level[x] === l).sort((a, b) => P.key(a) - P.key(b)); row.forEach((x, i) => { pos[x] = [W * (i + 1) / (row.length + 1), H - 35 - l * 78]; }); }
    const isCover = (a, b) => h.cover.some(([x, y]) => x === a && y === b);
    let g = '';
    E.forEach(a => E.forEach(b => {
      if (!P.leq(a, b)) return;
      const [x1, y1] = pos[a], [x2, y2] = pos[b];
      if (a === b) { if (stage === 'all') g += '<circle class="edge lp" cx="' + (x1 + 22) + '" cy="' + (y1 - 16) + '" r="9"/>'; return; }
      const cov = isCover(a, b); if (stage === 'hasse' && !cov) return;
      const dx = x2 - x1, dy = y2 - y1, d = Math.hypot(dx, dy), ux = dx / d, uy = dy / d;
      const sx = x1 + ux * 16, sy = y1 + uy * 16, ex = x2 - ux * 18, ey = y2 - uy * 18;
      if (cov) g += '<path class="edge" d="M' + sx + ' ' + sy + ' L' + ex + ' ' + ey + '" marker-end="url(#' + p + ')"/>';
      else { const off = 18 + 10 * (h.level[b] - h.level[a]), mx = (sx + ex) / 2 - uy * off, my = (sy + ey) / 2 + ux * off; g += '<path class="edge tr" d="M' + sx + ' ' + sy + ' Q' + mx + ' ' + my + ' ' + ex + ' ' + ey + '" marker-end="url(#' + p + ')"/>'; }
    }));
    E.forEach(x => { const [cx, cy] = pos[x], lb = P.lab(x), w = Math.max(30, lb.length * 8.5 + 14); g += '<g class="nd' + (sel.includes(x) ? ' sel' : '') + '" data-node="' + x + '"><rect x="' + (cx - w / 2) + '" y="' + (cy - 14) + '" width="' + w + '" height="28" rx="8"/><text x="' + cx + '" y="' + cy + '">' + esc(lb) + '</text></g>'; });
    return { svg: '<svg class="hs" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Hasse"><defs>' + arrowDefs(p) + '</defs>' + g + '</svg>', h };
  }

  /* ============================================================
     LABORATORI · demostrar o refutar: reflexiva, simètrica, transitiva
     ============================================================ */
  const DH = {
    hip: () => L('Hipòtesi', 'Hipótesis', 'Hypothesis'), hips: () => L('Hipòtesis', 'Hipótesis', 'Hypothesis'), goal: () => L('Vull arribar a', 'Quiero llegar a', 'I want to reach'),
    calc: () => L('Càlcul', 'Cálculo', 'Computation'), conc: () => L('Conclusió', 'Conclusión', 'Conclusion'), tri: () => L('Primer, intenta-ho', 'Primero, inténtalo', 'First, try it yourself'),
    ce: () => L('Contraexemple', 'Contraejemplo', 'Counterexample'), yes: () => L('Es compleix', 'Se cumple', 'Holds'), yes2: () => L('Es compleixen', 'Se cumplen', 'Hold'), no: () => L('No es compleix', 'No se cumple', 'Does not hold')
  };
  const anyX = set => ({ h: DH.hip(), t: L('Cap: agafo un element qualsevol $x ∈ ' + set + '$.', 'Ninguna: tomo un elemento cualquiera $x ∈ ' + set + '$.') });
  const DREL = [
   { k: 'div', chip: 'x | y', set: 'ℕ',
     def: () => L('$x ℛ y ⟺ x$ divideix $y$ (s\'escriu $x | y$)', '$x ℛ y ⟺ x$ divide a $y$ (se escribe $x | y$)', '$x ℛ y ⟺ x$ divides $y$ (written $x | y$)'),
     tr: () => L('y = k · x  amb  k ∈ ℕ', 'y = k · x  con  k ∈ ℕ', 'y = k · x  with  k ∈ ℕ'),
     p: {
      R: { ok: true, s: () => [anyX('ℕ'),
        { h: DH.goal(), m: L('x = k · x  amb  k ∈ ℕ', 'x = k · x  con  k ∈ ℕ', 'x = k · x  with  k ∈ ℕ'), c: 'goal' },
        { h: DH.calc(), m: 'x = 1 · x', w: L('i $1 ∈ ℕ$.', 'y $1 ∈ ℕ$.', 'and $1 ∈ ℕ$.') },
        { h: DH.conc(), t: L('$x ℛ x$ per a tot $x ∈ ℕ$: <b>és reflexiva</b>.', '$x ℛ x$ para todo $x ∈ ℕ$: <b>es reflexiva</b>.', '$x ℛ x$ for every $x ∈ ℕ$: <b>it is reflexive</b>.'), c: 'done' }] },
      S: { ok: false, s: () => [
        { h: DH.tri(), t: L('Suposo $y = k · x$ i voldria $x = (\\it{natural}) · y$. Aïllant surt $x = \\fr{1}{k} · y$, i $\\fr{1}{k}$ només és natural si $k = 1$. Això fa sospitar que falla quan $k ≥ 2$.', 'Supongo $y = k · x$ y querría $x = (\\it{natural}) · y$. Despejando sale $x = \\fr{1}{k} · y$, y $\\fr{1}{k}$ solo es natural si $k = 1$. Eso hace sospechar que falla cuando $k ≥ 2$.', 'I assume $y = k · x$ and I would like $x = (\\it{natural}) · y$. Solving gives $x = \\fr{1}{k} · y$, and $\\fr{1}{k}$ is only natural if $k = 1$. That suggests it fails when $k ≥ 2$.') },
        { h: DH.ce(), m: 'x = 1,   y = 2' },
        { h: DH.yes(), m: '1 ℛ 2', w: L('$2 = 2 · 1$, amb $2 ∈ ℕ$.', '$2 = 2 · 1$, con $2 ∈ ℕ$.', '$2 = 2 · 1$, with $2 ∈ ℕ$.') },
        { h: DH.no(), m: '2 ℛ̸ 1', w: L('$1 = k · 2$ demanaria $k = \\fr{1}{2} ∉ ℕ$.', '$1 = k · 2$ pediría $k = \\fr{1}{2} ∉ ℕ$.', '$1 = k · 2$ would require $k = \\fr{1}{2} ∉ ℕ$.') },
        { h: DH.conc(), t: L('<b>No és simètrica.</b>', '<b>No es simétrica.</b>', '<b>It is not symmetric.</b>'), c: 'neg' }] },
      T: { ok: true, s: () => [
        { h: DH.hips(), m: 'y = k · x,    z = m · y,    k, m ∈ ℕ', w: L('Dues lletres diferents, $k$ i $m$: no tenen per què ser iguals.', 'Dos letras distintas, $k$ y $m$: no tienen por qué ser iguales.', 'Two different letters, $k$ and $m$: they need not be equal.') },
        { h: DH.goal(), m: L('z = (natural) · x', 'z = (natural) · x', 'z = (natural) · x'), c: 'goal' },
        { h: DH.calc(), m: 'z = m · y = m · (k · x) = (m · k) · x', w: L('Substitueixo la $y$ de la primera hipòtesi dins de la segona.', 'Sustituyo la $y$ de la primera hipótesis dentro de la segunda.', 'I substitute the $y$ of the first hypothesis into the second one.') },
        { h: DH.conc(), t: L('$m · k ∈ ℕ$, per tant $x ℛ z$: <b>és transitiva</b>.', '$m · k ∈ ℕ$, por tanto $x ℛ z$: <b>es transitiva</b>.', '$m · k ∈ ℕ$, so $x ℛ z$: <b>it is transitive</b>.'), c: 'done' }] } } },

   { k: 'abs', chip: '|x − y| ≤ 1', set: 'ℤ',
     def: () => L('$x ℛ y ⟺ |x − y| ≤ 1$: «estan com a molt a distància 1»', '$x ℛ y ⟺ |x − y| ≤ 1$: «están como mucho a distancia 1»', '$x ℛ y ⟺ |x − y| ≤ 1$: “they are at distance at most 1”'),
     tr: null,
     p: {
      R: { ok: true, s: () => [anyX('ℤ'),
        { h: DH.goal(), m: '|x − x| ≤ 1', c: 'goal' },
        { h: DH.calc(), m: '|x − x| = |0| = 0 ≤ 1' },
        { h: DH.conc(), t: L('<b>És reflexiva.</b>', '<b>Es reflexiva.</b>', '<b>It is reflexive.</b>'), c: 'done' }] },
      S: { ok: true, s: () => [
        { h: DH.hip(), m: '|x − y| ≤ 1' },
        { h: DH.goal(), m: '|y − x| ≤ 1', c: 'goal' },
        { h: DH.calc(), m: '|y − x| = |−(x − y)| = |x − y| ≤ 1', w: L('El valor absolut no canvia si canvies el signe: $|−a| = |a|$.', 'El valor absoluto no cambia si cambias el signo: $|−a| = |a|$.', 'The absolute value does not change if you change the sign: $|−a| = |a|$.') },
        { h: DH.conc(), t: L('$y ℛ x$: <b>és simètrica</b>.', '$y ℛ x$: <b>es simétrica</b>.', '$y ℛ x$: <b>it is symmetric</b>.'), c: 'done' }] },
      T: { ok: false, s: () => [
        { h: DH.tri(), t: L('De $|x − y| ≤ 1$ i $|y − z| ≤ 1$, la desigualtat triangular dona $|x − z| ≤ |x − y| + |y − z| ≤ 2$. Només surt $≤ 2$, no $≤ 1$: la demostració s\'encalla. Busca el contraexemple just al límit, amb $x$ i $z$ a distància 2.', 'De $|x − y| ≤ 1$ y $|y − z| ≤ 1$, la desigualdad triangular da $|x − z| ≤ |x − y| + |y − z| ≤ 2$. Solo sale $≤ 2$, no $≤ 1$: la demostración se atasca. Busca el contraejemplo justo en el límite, con $x$ y $z$ a distancia 2.', 'From $|x − y| ≤ 1$ and $|y − z| ≤ 1$, the triangle inequality gives $|x − z| ≤ |x − y| + |y − z| ≤ 2$. We only get $≤ 2$, not $≤ 1$: the proof gets stuck. Look for the counterexample right at the limit, with $x$ and $z$ at distance 2.') },
        { h: DH.ce(), m: 'x = 0,   y = 1,   z = 2' },
        { h: DH.yes2(), m: '0 ℛ 1,    1 ℛ 2', w: L('$|0 − 1| = 1 ≤ 1$ i $|1 − 2| = 1 ≤ 1$.', '$|0 − 1| = 1 ≤ 1$ y $|1 − 2| = 1 ≤ 1$.', '$|0 − 1| = 1 ≤ 1$ and $|1 − 2| = 1 ≤ 1$.') },
        { h: DH.no(), m: '0 ℛ̸ 2', w: L('$|0 − 2| = 2 > 1$.', '$|0 − 2| = 2 > 1$.', '$|0 − 2| = 2 > 1$.') },
        { h: DH.conc(), t: L('<b>No és transitiva.</b> És l\'exemple típic de reflexiva i simètrica però no transitiva.', '<b>No es transitiva.</b> Es el ejemplo típico de reflexiva y simétrica pero no transitiva.', '<b>It is not transitive.</b> It is the typical example of a reflexive and symmetric but not transitive relation.'), c: 'neg' }] } } },

   { k: 'prod', chip: 'x · y > 0', set: 'ℤ',
     def: () => L('$x ℛ y ⟺ x · y > 0$: «tenen el mateix signe i cap no és 0»', '$x ℛ y ⟺ x · y > 0$: «tienen el mismo signo y ninguno es 0»', '$x ℛ y ⟺ x · y > 0$: “they have the same sign and neither is 0”'),
     tr: null,
     p: {
      R: { ok: false, s: () => [
        { h: DH.tri(), t: L('Vull $x · x > 0$, és a dir $x^{2} > 0$. És cert si $x ≠ 0$, però $x$ ha de ser <i>qualsevol</i> enter, i el 0 també ho és.', 'Quiero $x · x > 0$, es decir $x^{2} > 0$. Es cierto si $x ≠ 0$, pero $x$ tiene que ser <i>cualquier</i> entero, y el 0 también lo es.', 'I want $x · x > 0$, that is $x^{2} > 0$. It is true if $x ≠ 0$, but $x$ has to be <i>any</i> integer, and 0 is one too.') },
        { h: DH.ce(), m: 'x = 0' },
        { h: DH.no(), m: '0 ℛ̸ 0', w: L('$0 · 0 = 0$, que no és $> 0$.', '$0 · 0 = 0$, que no es $> 0$.', '$0 · 0 = 0$, which is not $> 0$.') },
        { h: DH.conc(), t: L('<b>No és reflexiva.</b> N\'hi ha prou amb un sol element que falli. (A $ℤ ∖ \\{0\\}$ sí que ho seria, i la relació seria d\'equivalència amb dues classes: positius i negatius.)', '<b>No es reflexiva.</b> Basta con un solo elemento que falle. (En $ℤ ∖ \\{0\\}$ sí lo sería, y la relación sería de equivalencia con dos clases: positivos y negativos.)', '<b>It is not reflexive.</b> A single failing element is enough. (On $ℤ ∖ \\{0\\}$ it would be, and the relation would be an equivalence with two classes: positives and negatives.)'), c: 'neg' }] },
      S: { ok: true, s: () => [
        { h: DH.hip(), m: 'x · y > 0' },
        { h: DH.goal(), m: 'y · x > 0', c: 'goal' },
        { h: DH.calc(), m: 'y · x = x · y > 0', w: L('El producte és commutatiu.', 'El producto es conmutativo.', 'The product is commutative.') },
        { h: DH.conc(), t: L('$y ℛ x$: <b>és simètrica</b>.', '$y ℛ x$: <b>es simétrica</b>.', '$y ℛ x$: <b>it is symmetric</b>.'), c: 'done' }] },
      T: { ok: true, s: () => [
        { h: DH.hips(), m: 'x · y > 0,    y · z > 0' },
        { h: DH.goal(), m: 'x · z > 0', c: 'goal' },
        { h: DH.calc(), m: '(x · y) · (y · z) > 0', w: L('El producte de dos positius és positiu.', 'El producto de dos positivos es positivo.', 'The product of two positives is positive.') },
        { h: DH.calc(), m: '(x · y) · (y · z) = (x · z) · y^{2}', w: L('Només he reordenat els factors.', 'Solo he reordenado los factores.', 'I have only reordered the factors.') },
        { h: DH.calc(), m: 'y ≠ 0  ⟹  y^{2} > 0  ⟹  x · z > 0', w: L('$y$ no pot ser 0, perquè llavors $x · y = 0$. Si $(x · z) · y^{2} > 0$ i $y^{2} > 0$, l\'altre factor també ha de ser positiu.', '$y$ no puede ser 0, porque entonces $x · y = 0$. Si $(x · z) · y^{2} > 0$ e $y^{2} > 0$, el otro factor también tiene que ser positivo.', '$y$ cannot be 0, because then $x · y = 0$. If $(x · z) · y^{2} > 0$ and $y^{2} > 0$, the other factor must also be positive.') },
        { h: DH.conc(), t: L('$x ℛ z$: <b>és transitiva</b>.', '$x ℛ z$: <b>es transitiva</b>.', '$x ℛ z$: <b>it is transitive</b>.'), c: 'done' }] } } },

   { k: 'dob', chip: 'y = 2x', set: 'ℤ',
     def: () => L('$x ℛ y ⟺ y = 2x$: «$y$ és el doble de $x$»', '$x ℛ y ⟺ y = 2x$: «$y$ es el doble de $x$»', '$x ℛ y ⟺ y = 2x$: “$y$ is twice $x$”'),
     tr: null,
     p: {
      R: { ok: false, s: () => [
        { h: DH.tri(), t: L('Vull $x = 2x$ per a tot $x$, és a dir, $x = 0$. Només funciona amb el 0.', 'Quiero $x = 2x$ para todo $x$, es decir, $x = 0$. Solo funciona con el 0.', 'I want $x = 2x$ for every $x$, that is, $x = 0$. It only works for 0.') },
        { h: DH.ce(), m: 'x = 1' },
        { h: DH.no(), m: '1 ℛ̸ 1', w: L('$2 · 1 = 2 ≠ 1$.', '$2 · 1 = 2 ≠ 1$.', '$2 · 1 = 2 ≠ 1$.') },
        { h: DH.conc(), t: L('<b>No és reflexiva.</b> Que $0 ℛ 0$ sigui cert no salva res: reflexiva vol dir <i>tots</i> els elements.', '<b>No es reflexiva.</b> Que $0 ℛ 0$ sea cierto no salva nada: reflexiva quiere decir <i>todos</i> los elementos.', '<b>It is not reflexive.</b> That $0 ℛ 0$ is true does not save anything: reflexive means <i>all</i> elements.'), c: 'neg' }] },
      S: { ok: false, s: () => [
        { h: DH.tri(), t: L('Si $y = 2x$, voldria $x = 2y = 4x$, i això només passa si $x = 0$.', 'Si $y = 2x$, querría $x = 2y = 4x$, y eso solo pasa si $x = 0$.', 'If $y = 2x$, I would want $x = 2y = 4x$, and that only happens if $x = 0$.') },
        { h: DH.ce(), m: 'x = 1,   y = 2' },
        { h: DH.yes(), m: '1 ℛ 2', w: L('$2 = 2 · 1$.', '$2 = 2 · 1$.', '$2 = 2 · 1$.') },
        { h: DH.no(), m: '2 ℛ̸ 1', w: L('$2 · 2 = 4 ≠ 1$.', '$2 · 2 = 4 ≠ 1$.', '$2 · 2 = 4 ≠ 1$.') },
        { h: DH.conc(), t: L('<b>No és simètrica.</b>', '<b>No es simétrica.</b>', '<b>It is not symmetric.</b>'), c: 'neg' }] },
      T: { ok: false, s: () => [
        { h: DH.tri(), t: L('Si $y = 2x$ i $z = 2y$, aleshores $z = 4x$, i jo voldria $z = 2x$. Només quadra si $x = 0$.', 'Si $y = 2x$ y $z = 2y$, entonces $z = 4x$, y yo querría $z = 2x$. Solo cuadra si $x = 0$.', 'If $y = 2x$ and $z = 2y$, then $z = 4x$, and I would want $z = 2x$. It only works if $x = 0$.') },
        { h: DH.ce(), m: 'x = 1,   y = 2,   z = 4' },
        { h: DH.yes2(), m: '1 ℛ 2,    2 ℛ 4', w: L('$2 = 2 · 1$ i $4 = 2 · 2$.', '$2 = 2 · 1$ y $4 = 2 · 2$.', '$2 = 2 · 1$ and $4 = 2 · 2$.') },
        { h: DH.no(), m: '1 ℛ̸ 4', w: L('$2 · 1 = 2 ≠ 4$.', '$2 · 1 = 2 ≠ 4$.', '$2 · 1 = 2 ≠ 4$.') },
        { h: DH.conc(), t: L('<b>No és transitiva.</b> Aquesta relació no compleix cap de les tres.', '<b>No es transitiva.</b> Esta relación no cumple ninguna de las tres.', '<b>It is not transitive.</b> This relation satisfies none of the three.'), c: 'neg' }] } } },

   { k: 'sq', chip: 'x² = y²', set: 'ℤ',
     def: () => L('$x ℛ y ⟺ x^{2} = y^{2}$', '$x ℛ y ⟺ x^{2} = y^{2}$', '$x ℛ y ⟺ x^{2} = y^{2}$'),
     tr: null,
     p: {
      R: { ok: true, s: () => [anyX('ℤ'),
        { h: DH.goal(), m: 'x^{2} = x^{2}', c: 'goal' },
        { h: DH.calc(), t: L('És cert: tota cosa és igual a ella mateixa.', 'Es cierto: toda cosa es igual a sí misma.', 'It is true: everything is equal to itself.') },
        { h: DH.conc(), t: L('<b>És reflexiva.</b>', '<b>Es reflexiva.</b>', '<b>It is reflexive.</b>'), c: 'done' }] },
      S: { ok: true, s: () => [
        { h: DH.hip(), m: 'x^{2} = y^{2}' },
        { h: DH.goal(), m: 'y^{2} = x^{2}', c: 'goal' },
        { h: DH.calc(), t: L('Llegeixo la mateixa igualtat de dreta a esquerra.', 'Leo la misma igualdad de derecha a izquierda.', 'I read the same equality from right to left.') },
        { h: DH.conc(), t: L('<b>És simètrica.</b>', '<b>Es simétrica.</b>', '<b>It is symmetric.</b>'), c: 'done' }] },
      T: { ok: true, s: () => [
        { h: DH.hips(), m: 'x^{2} = y^{2},    y^{2} = z^{2}' },
        { h: DH.goal(), m: 'x^{2} = z^{2}', c: 'goal' },
        { h: DH.calc(), m: 'x^{2} = y^{2} = z^{2}', w: L('Encadeno les dues igualtats.', 'Encadeno las dos igualdades.', 'I chain the two equalities.') },
        { h: DH.conc(), t: L('<b>És transitiva</b>, i per tant d\'equivalència. Passa sempre que la relació és «$f(x) = f(y)$»: les tres propietats surten de la igualtat. Aquí les classes són $\\{0\\}$ i $\\{a, −a\\}$ per a cada $a ≥ 1$.', '<b>Es transitiva</b>, y por tanto de equivalencia. Pasa siempre que la relación es «$f(x) = f(y)$»: las tres propiedades salen de la igualdad. Aquí las clases son $\\{0\\}$ y $\\{a, −a\\}$ para cada $a ≥ 1$.', '<b>It is transitive</b>, and therefore an equivalence. This always happens when the relation is “$f(x) = f(y)$”: the three properties come from equality. Here the classes are $\\{0\\}$ and $\\{a, −a\\}$ for each $a ≥ 1$.'), c: 'done' }] } } },

   { k: 'par', chip: '(a,b) ℛ (c,d)', set: 'ℕ × ℕ',
     def: () => L('$(a, b) ℛ (c, d) ⟺ a + d = b + c$', '$(a, b) ℛ (c, d) ⟺ a + d = b + c$', '$(a, b) ℛ (c, d) ⟺ a + d = b + c$'),
     tr: null,
     note: () => L('Els elements són parelles. Per escriure $(c, d) ℛ (e, f)$, posa la primera parella al lloc de $(a, b)$ i la segona al lloc de $(c, d)$: queda $c + f = d + e$.', 'Los elementos son parejas. Para escribir $(c, d) ℛ (e, f)$, pon la primera pareja en el lugar de $(a, b)$ y la segunda en el lugar de $(c, d)$: queda $c + f = d + e$.', 'The elements are pairs. To write $(c, d) ℛ (e, f)$, put the first pair in place of $(a, b)$ and the second in place of $(c, d)$: you get $c + f = d + e$.'),
     p: {
      R: { ok: true, s: () => [
        { h: DH.hip(), t: L('Cap: agafo una parella qualsevol $(a, b) ∈ ℕ × ℕ$.', 'Ninguna: tomo una pareja cualquiera $(a, b) ∈ ℕ × ℕ$.', 'None: I take any pair $(a, b) ∈ ℕ × ℕ$.') },
        { h: DH.goal(), m: L('(a, b) ℛ (a, b),  és a dir,  a + b = b + a', '(a, b) ℛ (a, b),  es decir,  a + b = b + a', '(a, b) ℛ (a, b),  that is,  a + b = b + a'), c: 'goal' },
        { h: DH.calc(), t: L('És la propietat commutativa de la suma.', 'Es la propiedad conmutativa de la suma.', 'It is the commutative property of addition.') },
        { h: DH.conc(), t: L('<b>És reflexiva.</b>', '<b>Es reflexiva.</b>', '<b>It is reflexive.</b>'), c: 'done' }] },
      S: { ok: true, s: () => [
        { h: DH.hip(), m: L('(a, b) ℛ (c, d):    a + d = b + c', '(a, b) ℛ (c, d):    a + d = b + c', '(a, b) ℛ (c, d):    a + d = b + c') },
        { h: DH.goal(), m: L('(c, d) ℛ (a, b):    c + b = d + a', '(c, d) ℛ (a, b):    c + b = d + a', '(c, d) ℛ (a, b):    c + b = d + a'), c: 'goal' },
        { h: DH.calc(), m: 'c + b = b + c = a + d = d + a', w: L('Commutativa, la hipòtesi al mig, i commutativa un altre cop.', 'Conmutativa, la hipótesis en medio, y conmutativa otra vez.', 'Commutativity, the hypothesis in the middle, and commutativity again.') },
        { h: DH.conc(), t: L('<b>És simètrica.</b>', '<b>Es simétrica.</b>', '<b>It is symmetric.</b>'), c: 'done' }] },
      T: { ok: true, s: () => [
        { h: DH.hips(), m: 'a + d = b + c,    c + f = d + e', w: L('Són $(a, b) ℛ (c, d)$ i $(c, d) ℛ (e, f)$.', 'Son $(a, b) ℛ (c, d)$ y $(c, d) ℛ (e, f)$.', 'They are $(a, b) ℛ (c, d)$ and $(c, d) ℛ (e, f)$.') },
        { h: DH.goal(), m: L('(a, b) ℛ (e, f):    a + f = b + e', '(a, b) ℛ (e, f):    a + f = b + e', '(a, b) ℛ (e, f):    a + f = b + e'), c: 'goal' },
        { h: DH.calc(), m: 'a + d + c + f = b + c + d + e', w: L('Sumo les dues igualtats membre a membre.', 'Sumo las dos igualdades miembro a miembro.', 'I add the two equalities side by side.') },
        { h: DH.calc(), m: 'a + f = b + e', w: L('Resto $c + d$ als dos costats. Són les lletres de la parella del mig, que han de desaparèixer.', 'Resto $c + d$ a los dos lados. Son las letras de la pareja de en medio, que tienen que desaparecer.', 'I subtract $c + d$ from both sides. They are the letters of the middle pair, which must disappear.') },
        { h: DH.conc(), t: L('<b>És transitiva</b>, i per tant d\'equivalència: és la construcció de $ℤ$ que es veu al tema 2.', '<b>Es transitiva</b>, y por tanto de equivalencia: es la construcción de $ℤ$ que se ve en el tema 2.', '<b>It is transitive</b>, and therefore an equivalence: it is the construction of $ℤ$ seen in unit 2.'), c: 'done' }] } } }
  ];
  return { RPRE, relAnalyse, arrowDefs, relGraph, HPOS, hasseSVG, DH, anyX, DREL };
}
