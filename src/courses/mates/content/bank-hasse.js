import { Z } from '../engine/z.js';

/**
 * Banc · ordres i diagrames de Hasse.
 * Codi original; l'idioma i les dependències arriben pel contenidor $ (un per idioma).
 */
export function makeBankHasse($) {
  const { ASWARN, BKORD, BKT, C, FXORDDEF, FXT, L, M, P, UL, arrowDefs, bkFxExtr, bkFxHasse, esc, kDone, kS, kT, md, nsKey, nsTx, ri, sOf, sTx, uid, uniq } = $;
  /* ============================================================
     BANC · ORDRES I DIAGRAMES DE HASSE (tema propi, 3 nivells)
     ============================================================ */
  /* ---------- conjunts ordenats ---------- */
  const hzDivP = E => ({ E: E.slice(), leq: (a, b) => b % a === 0, lab: String, key: x => x });
  const hzSubLab = (m, base) => m ? '{' + base.filter((_, j) => (m >> j) & 1).join(',') + '}' : '∅';
  const hzSubP = (E, base) => ({ E: E.slice(), leq: (a, b) => (a & ~b) === 0, lab: m => hzSubLab(m, base), key: m => m });
  const hzBits = (m, base) => base.filter((_, j) => (m >> j) & 1);
  function hzProdP(p, q) {
    const E = []; for (let x = 1; x <= p; x++) for (let y = 1; y <= q; y++) E.push(10 * x + y);
    return { E, leq: (u, v) => Math.floor(u / 10) <= Math.floor(v / 10) && u % 10 <= v % 10, lab: u => '(' + Math.floor(u / 10) + ',' + (u % 10) + ')', key: u => u };
  }
  /* ordre aleatori: m elements amb noms 1..m barrejats; nivells 0..nl-1 */
  function hzRand(m, nl) {
    const lvl = []; for (let i = 0; i < m; i++) lvl.push(i < nl ? i : Z.rnd(nl));
    const R = []; for (let i = 0; i < m; i++) { R.push([]); for (let j = 0; j < m; j++) R[i].push(i === j); }
    for (let i = 0; i < m; i++) if (lvl[i] > 0) {
      const below = Z.range(0, m - 1).filter(j => lvl[j] === lvl[i] - 1), deeper = Z.range(0, m - 1).filter(j => lvl[j] < lvl[i] - 1);
      const k = Math.min(below.length, Z.rnd(10) < 6 ? 1 : 2);
      Z.shuffle(below).slice(0, k).forEach(j => { R[j][i] = true; });
      if (deeper.length && Z.rnd(5) === 0) R[Z.pick(deeper)][i] = true;
    }
    for (let k = 0; k < m; k++) for (let i = 0; i < m; i++) for (let j = 0; j < m; j++) if (R[i][k] && R[k][j]) R[i][j] = true;
    const names = Z.shuffle(Z.range(1, m)), inv = {};
    names.forEach((nm, i) => { inv[nm] = i; });
    return { E: Z.range(1, m), leq: (a, b) => R[inv[a]][inv[b]], lab: String, key: a => inv[a] };
  }
  const hzLetters = po => Object.assign(po, { lab: x => 'abcdefgh'[x - 1] });
  const hzTx = (po, x) => String(po.lab(x)).replace(/[{}]/g, c => '\\' + c);            // etiqueta dins de $…$
  const hzSetTx = (po, arr) => arr.length ? '\\{' + arr.map(x => hzTx(po, x)).join(', ') + '\\}' : '∅';
  const hzPairs = cov => cov.length ? cov.map(([a, b]) => '(' + a + ',' + b + ')').join(', ') : '∅';
  const hzArrows = (po, cov) => cov.map(([a, b]) => hzTx(po, a) + ' → ' + hzTx(po, b)).join(',   ');
  const hzUp = (po, x) => po.E.filter(y => po.leq(x, y));
  const hzLong = (po, h) => { const out = []; po.E.forEach(a => po.E.forEach(b => { if (a !== b && po.leq(a, b) && !h.cover.some(c => c[0] === a && c[1] === b)) out.push([a, b]); })); return out; };
  const hzInc = po => { const out = []; po.E.forEach(a => po.E.forEach(b => { if (a < b && !po.leq(a, b) && !po.leq(b, a)) out.push([a, b]); })); return out; };
  const hzRowMax = (po, h) => { const c = {}; po.E.forEach(x => { c[h.level[x]] = (c[h.level[x]] || 0) + 1; }); return Math.max(...Object.values(c)); };
  /* camí de pujada de a a b per les fletxes del Hasse */
  function hzPath(h, a, b) {
    const prev = new Map([[a, null]]), qq = [a];
    while (qq.length) { const x = qq.shift(); if (x === b) break; h.cover.forEach(([u, v]) => { if (u === x && !prev.has(v)) { prev.set(v, x); qq.push(v); } }); }
    if (!prev.has(b)) return null;
    const out = []; for (let x = b; x != null; x = prev.get(x)) out.unshift(x); return out;
  }
  /* entrada de fletxes: (1,2), (2,4) o 1→2 */
  function hzParse(s, E) {
    s = String(s == null ? '' : s).trim(); if (/^[∅Ø]$/.test(s) || /^\{\s*\}$/.test(s)) return [];
    const out = [], re = /\(\s*(\d+)\s*[,;]\s*(\d+)\s*\)|(\d+)\s*(?:→|->|⟶)\s*(\d+)/g; let m;
    while ((m = re.exec(s))) { const a = +(m[1] || m[3]), b = +(m[2] || m[4]); if (!E.includes(a) || !E.includes(b)) throw new Error('el'); out.push(a + ',' + b); }
    if (!out.length) throw new Error('empty');
    return uniq(out);
  }
  const hzSameCov = (G, h) => G.length === h.cover.length && h.cover.every(([a, b]) => G.includes(a + ',' + b));
  const HZH = {
    cov: () => L('Escriu les fletxes com a parelles: (1,2), (2,4)… Només les del Hasse, sense bucles ni dreceres. També val 1→2.', 'Escribe las flechas como pares: (1,2), (2,4)… Solo las del Hasse, sin bucles ni atajos. También vale 1→2.', 'Write the arrows as pairs: (1,2), (2,4)… Only those of the Hasse diagram, without loops or shortcuts. 1→2 is also accepted.'),
    set: () => L('Entre claus i separats per comes: {2, 3}. Si no n\'hi ha cap, ∅.', 'Entre llaves y separados por comas: {2, 3}. Si no hay ninguno, ∅.', 'In braces and separated by commas: {2, 3}. If there are none, ∅.'),
    one: () => L('Entre claus: {12}. Si no existeix, ∅.', 'Entre llaves: {12}. Si no existe, ∅.', 'In braces: {12}. If it does not exist, ∅.'),
    fam: () => L('Conjunt de conjunts: {{1}, {2, 3}}. Pots fer servir ∅.', 'Conjunto de conjuntos: {{1}, {2, 3}}. Puedes usar ∅.', 'A set of sets: {{1}, {2, 3}}. You can use ∅.')
  };

  /* ---------- dibuix: nivells i baricentre per reduir encreuaments ---------- */
  function hzSVG(po, o) {
    o = o || {};
    const E = po.E, h = Z.hasse(E, po.leq), lv = h.level, maxL = Math.max(0, ...E.map(x => lv[x]));
    /* nodes virtuals a les cobertures que salten nivells: reserven lloc i eviten que la fletxa travessi un altre node */
    const wOf = x => Math.max(30, String(po.lab(x)).length * 8.5 + 14);
    const lvl = new Map(), wid = new Map(), up = new Map(), dn = new Map(), chains = [];
    E.forEach(x => { lvl.set(x, lv[x]); wid.set(x, wOf(x)); up.set(x, []); dn.set(x, []); });
    let vk = 0;
    h.cover.forEach(([a, b]) => {
      const ch = [a]; let prev = a;
      for (let l = lv[a] + 1; l < lv[b]; l++) { const v = 'v' + (vk++); lvl.set(v, l); wid.set(v, 16); up.set(v, []); dn.set(v, []); up.get(prev).push(v); dn.get(v).push(prev); ch.push(v); prev = v; }
      up.get(prev).push(b); dn.get(b).push(prev); ch.push(b); chains.push(ch);
    });
    const k0 = x => typeof x === 'string' ? 1e9 + +x.slice(1) : po.key(x), all = Array.from(lvl.keys());
    const rows = []; for (let l = 0; l <= maxL; l++) rows.push(all.filter(x => lvl.get(x) === l).sort((a, b) => k0(a) - k0(b)));
    const idx = new Map(), setIdx = r => r.forEach((x, i) => idx.set(x, (i + 1) / (r.length + 1)));
    rows.forEach(setIdx);
    const bary = (x, nb) => { const v = nb.get(x); return v.length ? v.reduce((s, y) => s + idx.get(y), 0) / v.length : idx.get(x); };
    const sortRow = (l, nb) => { const r = rows[l], b = new Map(r.map(x => [x, bary(x, nb)])), o0 = new Map(r.map(x => [x, idx.get(x)])); r.sort((x, y) => b.get(x) - b.get(y) || o0.get(x) - o0.get(y)); setIdx(r); };
    for (let it = 0; it < 6; it++) { for (let l = 1; l <= maxL; l++) sortRow(l, dn); for (let l = maxL - 1; l >= 0; l--) sortRow(l, up); }
    const gap = 24, need = r => Math.max(...r.map(x => wid.get(x))) + gap;
    const W = Math.round(Math.max(300, ...rows.map(r => (r.length - 1) * need(r) + Math.max(...r.map(x => wid.get(x))) + 2 * gap)));
    const H = 70 + maxL * 78, pos = new Map(), p = 'hz' + (uid());
    rows.forEach((r, l) => { const sp = Math.max(W / (r.length + 1), need(r)); r.forEach((x, i) => pos.set(x, [W / 2 + (i - (r.length - 1) / 2) * sp, H - 35 - l * 78])); });
    const f1 = v => Math.round(v * 10) / 10, P2 = q => f1(q[0]) + ' ' + f1(q[1]);
    const unit = (q, r) => { const dx = r[0] - q[0], dy = r[1] - q[1], d = Math.hypot(dx, dy); return [dx / d, dy / d]; };
    const chainPath = ch => {
      const pts = ch.map(x => pos.get(x)), n = pts.length, u0 = unit(pts[0], pts[1]), u1 = unit(pts[n - 2], pts[n - 1]);
      const st = [pts[0][0] + u0[0] * 16, pts[0][1] + u0[1] * 16], en = [pts[n - 1][0] - u1[0] * 18, pts[n - 1][1] - u1[1] * 18];
      if (n === 2) return 'M' + P2(st) + ' L' + P2(en);
      const q = [st].concat(pts.slice(1, n - 1)).concat([en]), mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      let d = 'M' + P2(q[0]) + ' L' + P2(mid(q[0], q[1]));
      for (let i = 1; i < q.length - 1; i++) d += ' Q' + P2(q[i]) + ' ' + P2(mid(q[i], q[i + 1]));
      return d + ' L' + P2(q[q.length - 1]);
    };
    let g = '';
    const stage = o.stage || 'hasse', hl = o.hl || [], hl2 = o.hl2 || [], hl3 = o.hl3 || [];
    chains.forEach(ch => { g += '<path class="edge" d="' + chainPath(ch) + '" marker-end="url(#' + p + ')"/>'; });
    if (stage !== 'hasse') E.forEach(a => E.forEach(b => {
      if (!po.leq(a, b)) return;
      if (a === b) { if (stage === 'all') { const [x1, y1] = pos.get(a); g += '<circle class="edge lp" cx="' + f1(x1 + 22) + '" cy="' + f1(y1 - 16) + '" r="9"/>'; } return; }
      if (h.cover.some(([x, y]) => x === a && y === b)) return;
      const [x1, y1] = pos.get(a), [x2, y2] = pos.get(b), [ux, uy] = unit([x1, y1], [x2, y2]), bend = 18 + 10 * (lv[b] - lv[a]);
      const sx = x1 + ux * 16, sy = y1 + uy * 16, ex = x2 - ux * 18, ey = y2 - uy * 18, mx = (sx + ex) / 2 - uy * bend, my = (sy + ey) / 2 + ux * bend;
      g += '<path class="' + (o.plain ? 'edge' : 'edge tr') + '" d="M' + f1(sx) + ' ' + f1(sy) + ' Q' + f1(mx) + ' ' + f1(my) + ' ' + f1(ex) + ' ' + f1(ey) + '" marker-end="url(#' + p + ')"/>';
    }));
    E.forEach(x => {
      const [cx, cy] = pos.get(x), lb = po.lab(x), w = wid.get(x);
      const cls = 'nd' + (hl.includes(x) ? ' sel' : '') + (hl2.includes(x) ? ' up' : '') + (hl3.includes(x) ? ' dn' : '');
      g += '<g class="' + cls + '"><rect x="' + f1(cx - w / 2) + '" y="' + f1(cy - 14) + '" width="' + f1(w) + '" height="28" rx="8"/><text x="' + f1(cx) + '" y="' + f1(cy) + '">' + esc(String(lb)) + '</text></g>';
    });
    return { svg: '<div class="hzbox"><svg class="hs hz" viewBox="0 0 ' + W + ' ' + H + '" style="max-width:' + Math.min(W, 560) + 'px" role="img" aria-label="Hasse"><defs>' + arrowDefs(p) + '</defs>' + g + '</svg></div>', h };
  }
  const hzLeg = items => '<div class="hzleg">' + items.map(([c, t]) => '<span><i class="' + c + '"></i>' + t + '</span>').join('') + '</div>';

  /* ---------- guies «només amb el formulari» ---------- */
  const HZFX = {
    read: () => ({ on: ['Rord', 'Rtra'], plan: L('Al diagrama de Hasse, $x ≼ y$ vol dir que $x = y$ o que hi ha un camí de pujada de $x$ a $y$. Les fletxes que no es dibuixen surten de Rtra: si $x ≼ y$ i $y ≼ z$, aleshores $x ≼ z$.', 'En el diagrama de Hasse, $x ≼ y$ significa que $x = y$ o que hay un camino de subida de $x$ a $y$. Las flechas que no se dibujan salen de Rtra: si $x ≼ y$ e $y ≼ z$, entonces $x ≼ z$.', 'In the Hasse diagram, $x ≼ y$ means that $x = y$ or that there is an upward path from $x$ to $y$. The arrows that are not drawn come from Rtra: if $x ≼ y$ and $y ≼ z$, then $x ≼ z$.'), compte: [L('Que dos elements no estiguin units per una fletxa no vol dir que siguin incomparables: mira si hi ha un camí de pujada. I el sentit importa: si el camí va de $y$ a $x$, el que tens és $y ≼ x$.', 'Que dos elementos no estén unidos por una flecha no significa que sean incomparables: mira si hay un camino de subida. Y el sentido importa: si el camino va de $y$ a $x$, lo que tienes es $y ≼ x$.', 'That two elements are not joined by an arrow does not mean they are incomparable: check whether there is an upward path. And the direction matters: if the path goes from $y$ to $x$, what you have is $y ≼ x$.'), FXORDDEF()], fora: [] }),
    prune: () => ({ on: ['Rord', 'Rref', 'Rtra'], plan: L('Rref posa un bucle a cada element i Rtra hi afegeix totes les dreceres. El diagrama de Hasse les omet: esborra cada fletxa $x → z$ per a la qual hi ha un camí més llarg $x → y → … → z$.', 'Rref pone un bucle en cada elemento y Rtra añade todos los atajos. El diagrama de Hasse los omite: borra cada flecha $x → z$ para la que hay un camino más largo $x → y → … → z$.', 'Rref puts a loop on each element and Rtra adds all the shortcuts. The Hasse diagram leaves them out: delete each arrow $x → z$ for which there is a longer path $x → y → … → z$.'), compte: [FXORDDEF()], fora: [] }),
    total: () => ({ on: ['Rord'], plan: L('«Total» no és al formulari: és una definició. Per veure que un ordre és total, comprova que el diagrama és una sola cadena; per negar-ho, n\'hi ha prou amb dos elements no comparables.', '«Total» no está en el formulario: es una definición. Para ver que un orden es total, comprueba que el diagrama es una sola cadena; para negarlo, basta con dos elementos no comparables.', '“Total” is not on the formula sheet: it is a definition. To see that an order is total, check that the diagram is a single chain; to deny it, two non-comparable elements are enough.'), compte: [FXORDDEF()], fora: [] }),
    sub: () => ({ on: ['Rord'], plan: L('La divisibilitat és un ordre (Rord). Al Hasse de $S$, $x → y$ si $x | y$, $x ≠ y$ i <b>cap element de $S$</b> queda entremig. Els minimals no tenen cap fletxa que hi arribi i els maximals no en tenen cap que en surti.', 'La divisibilidad es un orden (Rord). En el Hasse de $S$, $x → y$ si $x | y$, $x ≠ y$ y <b>ningún elemento de $S$</b> queda en medio. Los minimales no tienen ninguna flecha que llegue y los maximales no tienen ninguna que salga.', 'Divisibility is an order (Rord). In the Hasse diagram of $S$, $x → y$ if $x | y$, $x ≠ y$ and <b>no element of $S$</b> lies in between. Minimal elements have no incoming arrow and maximal elements have no outgoing one.'), compte: [L('A $D(n)$ complet, $x → y$ quan $y/x$ és primer. En un subconjunt això ja no val: $2 → 12$ és una fletxa si ni 4 ni 6 són a $S$.', 'En $D(n)$ completo, $x → y$ cuando $y/x$ es primo. En un subconjunto eso ya no vale: $2 → 12$ es una flecha si ni 4 ni 6 están en $S$.', 'In the whole of $D(n)$, $x → y$ when $y/x$ is prime. In a subset that no longer holds: $2 → 12$ is an arrow if neither 4 nor 6 is in $S$.'), FXORDDEF()], fora: [] }),
    graph: () => ({ on: ['Rord', 'Rref', 'Rtra'], plan: L('El graf conté totes les parelles. Treu-ne els bucles (hi són tots perquè és reflexiva, Rref) i les parelles $(x, z)$ que s\'obtenen encadenant $(x, y)$ i $(y, z)$ (surten per Rtra). El que queda són les fletxes del Hasse.', 'El grafo contiene todos los pares. Quítale los bucles (están todos porque es reflexiva, Rref) y los pares $(x, z)$ que se obtienen encadenando $(x, y)$ e $(y, z)$ (salen por Rtra). Lo que queda son las flechas del Hasse.', 'The graph contains all the pairs. Remove the loops (they are all there because it is reflexive, Rref) and the pairs $(x, z)$ obtained by chaining $(x, y)$ and $(y, z)$ (they come from Rtra). What is left are the arrows of the Hasse diagram.'), compte: [FXORDDEF()], fora: [] }),
    fam: () => ({ on: ['Rord'], plan: L('La inclusió és un ordre: és l\'exemple dels apunts, i l\'antisimetria és la doble inclusió. Al Hasse, $X → Y$ si $X ⊊ Y$ i cap altre conjunt de $ℱ$ queda entremig.', 'La inclusión es un orden: es el ejemplo de los apuntes, y la antisimetría es la doble inclusión. En el Hasse, $X → Y$ si $X ⊊ Y$ y ningún otro conjunto de $ℱ$ queda en medio.', 'Inclusion is an order: it is the example in the notes, and antisymmetry is double inclusion. In the Hasse diagram, $X → Y$ if $X ⊊ Y$ and no other set of $ℱ$ lies in between.'), compte: [L('No n\'hi ha prou amb mirar si $Y$ té un element més que $X$: dins d\'una família, una fletxa pot afegir dos elements o més si els conjunts intermedis no hi són.', 'No basta con mirar si $Y$ tiene un elemento más que $X$: dentro de una familia, una flecha puede añadir dos elementos o más si los conjuntos intermedios no están.', 'It is not enough to check whether $Y$ has one more element than $X$: within a family, an arrow can add two or more elements if the intermediate sets are not there.'), FXORDDEF()], fora: [FXT.dbl()] }),
    prod: () => ({ on: ['Rord'], plan: L('L\'ordre producte és un ordre (es demostra amb les tres files del §3, com als exercicis de relacions). Al Hasse, $(a, b) → (c, d)$ quan una coordenada puja exactament 1 i l\'altra queda igual.', 'El orden producto es un orden (se demuestra con las tres filas del §3, como en los ejercicios de relaciones). En el Hasse, $(a, b) → (c, d)$ cuando una coordenada sube exactamente 1 y la otra queda igual.', 'The product order is an order (it is proved with the three rows of §3, as in the relations exercises). In the Hasse diagram, $(a, b) → (c, d)$ when one coordinate goes up by exactly 1 and the other stays the same.'), compte: [FXORDDEF()], fora: [L('Comptar parelles amb el principi del producte: no és al formulari. El nombre de parelles $(a, c)$ amb $a ≤ c$ a $\\{1, …, p\\}$ és $1 + 2 + … + p = \\fr{p(p + 1)}{2}$; i $(a, b) ≼ (c, d)$ vol dir triar una parella per a cada coordenada.', 'Contar pares con el principio del producto: no está en el formulario. El número de pares $(a, c)$ con $a ≤ c$ en $\\{1, …, p\\}$ es $1 + 2 + … + p = \\fr{p(p + 1)}{2}$; y $(a, b) ≼ (c, d)$ significa elegir un par para cada coordenada.', 'Counting pairs with the product rule: it is not on the formula sheet. The number of pairs $(a, c)$ with $a ≤ c$ in $\\{1, …, p\\}$ is $1 + 2 + … + p = \\fr{p(p + 1)}{2}$; and $(a, b) ≼ (c, d)$ means choosing one pair for each coordinate.')] }),
    count: () => ({ on: ['Rord', 'Rref', 'Rtra'], plan: L('$G(≼)$ conté totes les parelles: els bucles (Rref), les fletxes del dibuix i les que surten per Rtra. Compta, per a cada $x$, quants elements hi ha per sobre seu amb un camí de pujada, comptant-hi el mateix $x$.', '$G(≼)$ contiene todos los pares: los bucles (Rref), las flechas del dibujo y las que salen por Rtra. Cuenta, para cada $x$, cuántos elementos hay por encima de él con un camino de subida, contando el propio $x$.', '$G(≼)$ contains all the pairs: the loops (Rref), the arrows of the drawing and those that come from Rtra. Count, for each $x$, how many elements lie above it with an upward path, counting $x$ itself.'), compte: [FXORDDEF()], fora: [] }),
    bounds: div => ({ on: ['Rord', 'NOT'], plan: L('Cota superior de $B$: un $x$ amb $b ≼ x$ per a tot $b ∈ B$. Suprem: la cota superior més petita (la que està per sota de totes les altres), si n\'hi ha. Amb l\'ínfim, igual però per sota. Al diagrama: les cotes superiors són els elements als quals arriba un camí de pujada des de <b>tots</b> els elements de $B$.', 'Cota superior de $B$: un $x$ con $b ≼ x$ para todo $b ∈ B$. Supremo: la cota superior más pequeña (la que está por debajo de todas las demás), si la hay. Con el ínfimo, igual pero por debajo. En el diagrama: las cotas superiores son los elementos a los que llega un camino de subida desde <b>todos</b> los elementos de $B$.', 'Upper bound of $B$: an $x$ with $b ≼ x$ for every $b ∈ B$. Supremum: the smallest upper bound (the one below all the others), if there is one. For the infimum, the same but below. In the diagram: the upper bounds are the elements reached by an upward path from <b>all</b> the elements of $B$.'),
      compte: [L('El suprem no ha de ser de $B$. I si les cotes superiors minimals són dues de no comparables, no hi ha suprem.', 'El supremo no tiene por qué ser de $B$. Y si las cotas superiores minimales son dos no comparables, no hay supremo.', 'The supremum need not belong to $B$. And if there are two minimal upper bounds that are not comparable, there is no supremum.')].concat(div ? [] : [L('Dins d\'un subconjunt $S$ el suprem pot no ser el mcm: si el mcm no és de $S$, s\'ha de buscar entre les cotes que sí que hi són.', 'Dentro de un subconjunto $S$ el supremo puede no ser el mcm: si el mcm no está en $S$, hay que buscarlo entre las cotas que sí están.', 'Within a subset $S$ the supremum may not be the lcm: if the lcm is not in $S$, you must look for it among the bounds that are.')]),
      fora: [L('Cota superior, cota inferior, suprem i ínfim d\'un subconjunt no són al formulari (§5 només té intervals): escriu la definició abans de fer-les servir.', 'Cota superior, cota inferior, supremo e ínfimo de un subconjunto no están en el formulario (§5 solo tiene intervalos): escribe la definición antes de usarlas.', 'Upper bound, lower bound, supremum and infimum of a subset are not on the formula sheet (§5 only has intervals): write the definition before using them.')].concat(div ? [L('$a | x$ i $b | x$ $⟺$ $mcm(a, b) | x$, i $x | a$ i $x | b$ $⟺$ $x | mcd(a, b)$: no hi és. Justificació amb la factorització en primers: l\'exponent de cada primer a $x$ ha de ser més gran (o més petit) que el de $a$ i el de $b$.', '$a | x$ y $b | x$ $⟺$ $mcm(a, b) | x$, y $x | a$ y $x | b$ $⟺$ $x | mcd(a, b)$: no está. Justificación con la factorización en primos: el exponente de cada primo en $x$ tiene que ser mayor (o menor) que el de $a$ y el de $b$.', '$a | x$ and $b | x$ $⟺$ $lcm(a, b) | x$, and $x | a$ and $x | b$ $⟺$ $x | gcd(a, b)$: it is not there. Justification with the prime factorisation: the exponent of each prime in $x$ must be greater (or smaller) than that in $a$ and in $b$.')] : []) }),
    build: () => ({ on: ['Rord', 'Rref', 'Rasim', 'Rtra'], plan: L('Un diagrama sense cicles sempre defineix un ordre: hi afegeixes els bucles (Rref) i les fletxes per transitivitat (Rtra), i l\'antisimetria (Rasim) es compleix perquè cap camí de pujada no torna enrere. Per tant, n\'hi ha prou amb dibuixar un Hasse amb la forma que demanen.', 'Un diagrama sin ciclos siempre define un orden: le añades los bucles (Rref) y las flechas por transitividad (Rtra), y la antisimetría (Rasim) se cumple porque ningún camino de subida vuelve atrás. Por tanto, basta con dibujar un Hasse con la forma que piden.', 'A diagram without cycles always defines an order: you add the loops (Rref) and the arrows by transitivity (Rtra), and antisymmetry (Rasim) holds because no upward path goes back. So it is enough to draw a Hasse diagram with the shape they ask for.'), compte: [ASWARN(), FXORDDEF()], fora: [] }),
    iso: () => ({ on: ['Rord'], plan: L('Cap entrada ho resol: compara primer el nombre d\'elements i de fletxes (si no coincideixen, la forma és diferent). Si coincideixen, descriu la forma: els divisors de $p^{a} q^{b}$ són $p^{i} q^{j}$ i formen una graella $(a + 1) × (b + 1)$; $𝒫$ d\'un conjunt de 2 elements és un quadrat i el de 3, un cub.', 'Ninguna entrada lo resuelve: compara primero el número de elementos y de flechas (si no coinciden, la forma es distinta). Si coinciden, describe la forma: los divisores de $p^{a} q^{b}$ son $p^{i} q^{j}$ y forman una cuadrícula $(a + 1) × (b + 1)$; $𝒫$ de un conjunto de 2 elementos es un cuadrado y el de 3, un cubo.', 'No entry solves it: first compare the number of elements and of arrows (if they do not match, the shape is different). If they match, describe the shape: the divisors of $p^{a} q^{b}$ are $p^{i} q^{j}$ and form an $(a + 1) × (b + 1)$ grid; $𝒫$ of a 2-element set is a square and that of a 3-element set, a cube.'), compte: [L('Tenir el mateix nombre d\'elements no basta: $D(24)$, $𝒫(\\{a, b, c\\})$ i $\\{1, …, 8\\}$ amb $≤$ en tenen 8 i són tres formes diferents.', 'Tener el mismo número de elementos no basta: $D(24)$, $𝒫(\\{a, b, c\\})$ y $\\{1, …, 8\\}$ con $≤$ tienen 8 y son tres formas distintas.', 'Having the same number of elements is not enough: $D(24)$, $𝒫(\\{a, b, c\\})$ and $\\{1, …, 8\\}$ with $≤$ have 8 and are three different shapes.')], fora: [L('Que $D(p^{a} q^{b})$ té forma de graella no és al formulari: justifica-ho amb la factorització (cada divisor és $p^{i} q^{j}$, i una fletxa del Hasse multiplica per un sol primer).', 'Que $D(p^{a} q^{b})$ tiene forma de cuadrícula no está en el formulario: justifícalo con la factorización (cada divisor es $p^{i} q^{j}$, y una flecha del Hasse multiplica por un solo primo).', 'That $D(p^{a} q^{b})$ has the shape of a grid is not on the formula sheet: justify it with the factorisation (each divisor is $p^{i} q^{j}$, and an arrow of the Hasse diagram multiplies by a single prime).')] }),
    conc: () => ({ on: ['Rord', 'Rest'], plan: L('Per refutar una afirmació general n\'hi ha prou amb un contraexemple petit (dos o tres elements). Per confirmar-la, raona amb les definicions per a un conjunt ordenat qualsevol.', 'Para refutar una afirmación general basta con un contraejemplo pequeño (dos o tres elementos). Para confirmarla, razona con las definiciones para un conjunto ordenado cualquiera.', 'To refute a general statement a small counterexample is enough (two or three elements). To confirm it, reason with the definitions for an arbitrary ordered set.'), compte: [FXORDDEF()], fora: [] })
  };

  /* ================= NIVELL 1 ================= */
  /* fletxes del Hasse de D(n) */
  function bkHzDivCovGen() {
    const n = Z.pick([6, 8, 10, 12, 14, 15, 16, 18, 20, 21, 22, 27, 28, 44, 45, 50]), E = Z.divisors(n), po = hzDivP(E), h = Z.hasse(E, po.leq), ex = hzPairs(h.cover);
    return {
      q: () => md(L(`Considera $D(${n}) = ${sTx(E)}$ amb l'ordre de la divisibilitat. Escriu les fletxes del diagrama de Hasse com a parelles $(x, y)$, on $(x, y)$ vol dir una fletxa de $x$ a $y$.`, `Considera $D(${n}) = ${sTx(E)}$ con el orden de la divisibilidad. Escribe las flechas del diagrama de Hasse como pares $(x, y)$, donde $(x, y)$ significa una flecha de $x$ a $y$.`, `Consider $D(${n}) = ${sTx(E)}$ with the divisibility order. Write the arrows of the Hasse diagram as pairs $(x, y)$, where $(x, y)$ means an arrow from $x$ to $y$.`)),
      hint: () => P(L('Amb tots els divisors, $x → y$ és una fletxa del Hasse quan $y/x$ és primer: si fos compost, hi hauria un divisor entremig.', 'Con todos los divisores, $x → y$ es una flecha del Hasse cuando $y/x$ es primo: si fuera compuesto, habría un divisor en medio.', 'With all the divisors, $x → y$ is an arrow of the Hasse diagram when $y/x$ is prime: if it were composite, there would be a divisor in between.')),
      fx: bkFxHasse,
      sol: () => E.filter(x => h.cover.some(c => c[0] === x)).map(x => kS(L('Des de ', 'Desde ', 'From ') + x, h.cover.filter(c => c[0] === x).map(c => x + ' → ' + c[1] + '  (' + c[1] + '/' + x + ' = ' + (c[1] / x) + ')').join(',   '))).concat([
        kT(L('Diagrama', 'Diagrama', 'Diagram'), hzSVG(po).svg), kDone(h.cover.length + ' ' + L('fletxes', 'flechas', 'arrows'), L('Sense bucles i sense les fletxes que surten per transitivitat.', 'Sin bucles y sin las flechas que salen por transitividad.', 'Without loops and without the arrows that come from transitivity.'))]),
      a: { k: 'rel', test: raw => hzSameCov(hzParse(raw, E), h), ex, help: HZH.cov, show: () => M(ex) }
    };
  }
  /* llegir el diagrama: x ≼ y? */
  function bkHzReadGen() {
    let po, h, t = 0;
    do { po = hzRand(ri(6, 7), ri(3, 4)); h = Z.hasse(po.E, po.leq); } while ((h.total || h.cover.length < 5 || !hzLong(po, h).length || !hzInc(po).length || hzRowMax(po, h) > 4) && ++t < 400);
    hzLetters(po);
    const lab = x => po.lab(x), cov = Z.pick(h.cover), lg = Z.pick(hzLong(po, h)), inc = Z.pick(hzInc(po));
    const rev = Z.rnd(2) ? [lg[1], lg[0]] : [cov[1], cov[0]];
    const pairs = Z.shuffle([[cov[0], cov[1], 'cov'], [lg[0], lg[1], 'long'], [rev[0], rev[1], 'rev'], Z.rnd(2) ? [inc[0], inc[1], 'inc'] : [inc[1], inc[0], 'inc']]);
    const why = ([a, b, k]) => {
      if (k === 'cov') return L(`Cert: hi ha una fletxa directa $${lab(a)} → ${lab(b)}$.`, `Cierto: hay una flecha directa $${lab(a)} → ${lab(b)}$.`, `True: there is a direct arrow $${lab(a)} → ${lab(b)}$.`);
      if (k === 'long') return L(`Cert: no hi ha fletxa directa, però hi ha el camí de pujada $${hzPath(h, a, b).map(lab).join(' → ')}$ (transitivitat).`, `Cierto: no hay flecha directa, pero hay el camino de subida $${hzPath(h, a, b).map(lab).join(' → ')}$ (transitividad).`, `True: there is no direct arrow, but there is the upward path $${hzPath(h, a, b).map(lab).join(' → ')}$ (transitivity).`);
      if (k === 'rev') return L(`Fals: és al revés. El camí $${hzPath(h, b, a).map(lab).join(' → ')}$ puja de $${lab(b)}$ a $${lab(a)}$, així que $${lab(b)} ≼ ${lab(a)}$.`, `Falso: es al revés. El camino $${hzPath(h, b, a).map(lab).join(' → ')}$ sube de $${lab(b)}$ a $${lab(a)}$, así que $${lab(b)} ≼ ${lab(a)}$.`, `False: it is the other way round. The path $${hzPath(h, b, a).map(lab).join(' → ')}$ goes up from $${lab(b)}$ to $${lab(a)}$, so $${lab(b)} ≼ ${lab(a)}$.`);
      return L(`Fals: no hi ha cap camí de pujada entre $${lab(a)}$ i $${lab(b)}$ en cap sentit. Són incomparables.`, `Falso: no hay ningún camino de subida entre $${lab(a)}$ y $${lab(b)}$ en ningún sentido. Son incomparables.`, `False: there is no upward path between $${lab(a)}$ and $${lab(b)}$ in either direction. They are incomparable.`);
    };
    const names = po.E.map(lab).sort();
    return {
      q: () => md(L(`El diagrama de Hasse representa un ordre $≼$ a $A = \\{${names.join(', ')}\\}$. Digues si cada afirmació és certa o falsa.`, `El diagrama de Hasse representa un orden $≼$ en $A = \\{${names.join(', ')}\\}$. Di si cada afirmación es cierta o falsa.`, `The Hasse diagram represents an order $≼$ on $A = \\{${names.join(', ')}\\}$. Say whether each statement is true or false.`)) + hzSVG(po).svg,
      hint: () => P(L('$x ≼ y$ si pots anar de $x$ a $y$ seguint fletxes cap amunt (una o diverses). Les fletxes no es poden recórrer cap avall.', '$x ≼ y$ si puedes ir de $x$ a $y$ siguiendo flechas hacia arriba (una o varias). Las flechas no se pueden recorrer hacia abajo.', '$x ≼ y$ if you can go from $x$ to $y$ following arrows upwards (one or several). Arrows cannot be followed downwards.')),
      fx: HZFX.read,
      sol: () => pairs.map(pr_ => kT(md('$' + lab(pr_[0]) + ' ≼ ' + lab(pr_[1]) + '$'), md(why(pr_)), po.leq(pr_[0], pr_[1]) ? 'done' : 'neg')),
      a: { k: 'tf', items: pairs.map(([a, b]) => ({ t: () => M(lab(a) + ' ≼ ' + lab(b)), v: po.leq(a, b) })) }
    };
  }
  /* minimals, maximals, mínim i màxim llegint el diagrama */
  function bkHzExtrGen() {
    const div = Z.rnd(2) === 0;
    let po, h, n, t = 0;
    do {
      if (div) { n = Z.pick([24, 36, 48, 60, 72, 90]); po = hzDivP(sOf(Z.shuffle(Z.divisors(n)).slice(0, ri(5, 7)))); }
      else po = hzRand(ri(6, 7), ri(3, 4));
      h = Z.hasse(po.E, po.leq);
    } while ((h.total || h.cover.length < 3 || hzRowMax(po, h) > 4 || (Z.rnd(3) === 0 && h.min == null && h.max == null)) && ++t < 400);
    const E = po.E;
    const intro = div ? L(`Al conjunt $S = ${sTx(E)}$ ordenat per la divisibilitat`, `En el conjunto $S = ${sTx(E)}$ ordenado por la divisibilidad`, `In the set $S = ${sTx(E)}$ ordered by divisibility`) : L(`A $A = ${sTx(E)}$ amb l'ordre $≼$ del diagrama (no és l'ordre $≤$ dels nombres)`, `En $A = ${sTx(E)}$ con el orden $≼$ del diagrama (no es el orden $≤$ de los números)`, `In $A = ${sTx(E)}$ with the order $≼$ of the diagram (it is not the order $≤$ of the numbers)`);
    const extTx = (lst, one, wMin) => one != null ? L(`Sí: $${one}$ és ${wMin ? 'a sota de tots' : 'a sobre de tots'} (és l'únic ${wMin ? 'minimal' : 'maximal'}).`, `Sí: $${one}$ está ${wMin ? 'debajo de todos' : 'encima de todos'} (es el único ${wMin ? 'minimal' : 'maximal'}).`, `Yes: $${one}$ is ${wMin ? 'below all the others' : 'above all the others'} (it is the only ${wMin ? 'minimal' : 'maximal'} element).`) : L(`No: hi ha ${lst.length} ${wMin ? 'minimals' : 'maximals'}, i cap no és ${wMin ? 'a sota' : 'a sobre'} dels altres.`, `No: hay ${lst.length} ${wMin ? 'minimales' : 'maximales'}, y ninguno está ${wMin ? 'debajo' : 'encima'} de los demás.`, `No: there are ${lst.length} ${wMin ? 'minimal' : 'maximal'} elements, and none of them is ${wMin ? 'below' : 'above'} the others.`);
    return {
      q: () => md(intro + L(', quins són els elements minimals i els maximals? Té mínim? Té màxim?', ', ¿cuáles son los elementos minimales y los maximales? ¿Tiene mínimo? ¿Tiene máximo?', ', what are the minimal and the maximal elements? Does it have a minimum? Does it have a maximum?')) + hzSVG(po).svg,
      hint: () => P(L('Minimal: no hi arriba cap fletxa (ningú a sota). Maximal: no en surt cap fletxa (ningú a sobre). Mínim: un element a sota de <b>tots</b>; només existeix si hi ha un sol minimal.', 'Minimal: no llega ninguna flecha (nadie debajo). Maximal: no sale ninguna flecha (nadie encima). Mínimo: un elemento debajo de <b>todos</b>; solo existe si hay un solo minimal.', 'Minimal: no arrow comes in (nobody below). Maximal: no arrow goes out (nobody above). Minimum: an element below <b>all</b> the others; it only exists if there is a single minimal element.')),
      fx: bkFxExtr,
      sol: () => [kS(L('Minimals', 'Minimales', 'Minimal elements'), sTx(h.minimal), L('no hi arriba cap fletxa', 'no llega ninguna flecha', 'no arrow comes in')), kS(L('Maximals', 'Maximales', 'Maximal elements'), sTx(h.maximal), L('no en surt cap fletxa', 'no sale ninguna flecha', 'no arrow goes out')),
        kT(L('Mínim', 'Mínimo', 'Minimum'), md(extTx(h.minimal, h.min, true)), h.min != null ? 'done' : 'neg'), kT(L('Màxim', 'Máximo', 'Maximum'), md(extTx(h.maximal, h.max, false)), h.max != null ? 'done' : 'neg'),
        kT(L('Al diagrama', 'En el diagrama', 'In the diagram'), hzSVG(po, { hl3: h.minimal, hl2: h.maximal }).svg + hzLeg([['dn', L('minimals', 'minimales', 'minimal')], ['up', L('maximals', 'maximales', 'maximal')]]))],
      a: { k: 'multi', f: [{ lab: () => L('Minimals', 'Minimales', 'Minimal elements'), k: 'set', v: h.minimal.map(x => C(x)), help: HZH.set }, { lab: () => L('Maximals', 'Maximales', 'Maximal elements'), k: 'set', v: h.maximal.map(x => C(x)), help: HZH.set }, { lab: () => L('Té mínim', 'Tiene mínimo', 'Has a minimum'), k: 'tf', v: h.min != null }, { lab: () => L('Té màxim', 'Tiene máximo', 'Has a maximum'), k: 'tf', v: h.max != null }],
        show: () => M(L('minimals ', 'minimales ', 'minimal ') + sTx(h.minimal) + ';  ' + L('maximals ', 'maximales ', 'maximal ') + sTx(h.maximal)) }
    };
  }
  /* conjunts ordenats petits amb nom, per als exercicis de dibuix i de forma */
  function hzNamed(kind) {
    if (kind === 'D') { const n = Z.pick([12, 18, 20, 28, 44, 75, 8, 16, 27, 50, 45]); return { po: hzDivP(Z.divisors(n)), nm: () => `$(D(${n}), |)$` }; }
    if (kind === 'P3') { const base = ['a', 'b', 'c']; return { po: hzSubP(Z.range(0, 7), base), nm: () => '$(𝒫(\\{a, b, c\\}), ⊆)$' }; }
    if (kind === 'P2') { const base = ['a', 'b']; return { po: hzSubP(Z.range(0, 3), base), nm: () => '$(𝒫(\\{a, b\\}), ⊆)$' }; }
    const [p, q] = Z.pick([[2, 3], [3, 2], [2, 2]]);
    return { po: hzProdP(p, q), nm: () => `$\\{${Z.range(1, p).join(', ')}\\} × \\{${Z.range(1, q).join(', ')}\\}$ ` + L('amb l\'ordre producte', 'con el orden producto', 'with the product order') };
  }
  /* del dibuix complet (sense bucles) al Hasse */
  function bkHzPruneGen() {
    const X = hzNamed(Z.pick(['D', 'D', 'D', 'D', 'P2', 'X'])), po = X.po, h = Z.hasse(po.E, po.leq), lg = hzLong(po, h);
    const nonloop = h.cover.length + lg.length;
    return {
      q: () => md(L(`El dibuix mostra totes les parelles $x ≼ y$ amb $x ≠ y$ de ${X.nm()} (els bucles no hi són). Quantes fletxes té el diagrama de Hasse? Quantes fletxes del dibuix s'han d'esborrar per obtenir-lo?`, `El dibujo muestra todos los pares $x ≼ y$ con $x ≠ y$ de ${X.nm()} (los bucles no están). ¿Cuántas flechas tiene el diagrama de Hasse? ¿Cuántas flechas del dibujo hay que borrar para obtenerlo?`, `The drawing shows all the pairs $x ≼ y$ with $x ≠ y$ of ${X.nm()} (the loops are not shown). How many arrows does the Hasse diagram have? How many arrows of the drawing must be deleted to get it?`)) + hzSVG(po, { stage: 'noloop', plain: true }).svg,
      hint: () => P(L('Una fletxa $x → z$ sobra si pots anar de $x$ a $z$ passant per un altre element: $x → y → z$. Compta les que queden.', 'Una flecha $x → z$ sobra si puedes ir de $x$ a $z$ pasando por otro elemento: $x → y → z$. Cuenta las que quedan.', 'An arrow $x → z$ is superfluous if you can go from $x$ to $z$ through another element: $x → y → z$. Count the ones that remain.')),
      fx: HZFX.prune,
      sol: () => [kS(L('Fletxes del dibuix', 'Flechas del dibujo', 'Arrows in the drawing'), String(nonloop)),
        kT(L('Sobren (dreceres)', 'Sobran (atajos)', 'Superfluous (shortcuts)'), md(lg.map(([a, b]) => '$' + hzTx(po, a) + ' → ' + hzTx(po, b) + '$ ' + L('(per ', '(por ', '(via ') + '$' + hzPath(h, a, b).map(x => hzTx(po, x)).join(' → ') + '$)').join(';  ')), 'neg'),
        kT(L('Diagrama de Hasse', 'Diagrama de Hasse', 'Hasse diagram'), hzSVG(po).svg),
        kDone(h.cover.length + ' ' + L('fletxes al Hasse', 'flechas en el Hasse', 'arrows in the Hasse diagram') + ';  ' + lg.length + ' ' + L('esborrades', 'borradas', 'deleted'), nonloop + ' − ' + lg.length + ' = ' + h.cover.length)],
      a: { k: 'multi', f: [{ lab: () => L('Fletxes del Hasse', 'Flechas del Hasse', 'Arrows of the Hasse diagram'), k: 'num', v: h.cover.length }, { lab: () => L('Fletxes esborrades', 'Flechas borradas', 'Deleted arrows'), k: 'num', v: lg.length }], show: () => M(h.cover.length + ';  ' + lg.length) }
    };
  }
  /* quin ordre és total? */
  function hzChainOpt() {
    const k = Z.rnd(3);
    if (k === 0) { const pk = Z.pick([4, 8, 16, 9, 27, 25, 32, 81, 49, 125]); return { po: hzDivP(Z.divisors(pk)), nm: () => `$(D(${pk}), |)$` }; }
    if (k === 1) { let x = Z.pick([1, 2, 3, 5]); const E = [x]; for (let i = 0; i < 3; i++) { x *= Z.pick([2, 3, 5]); E.push(x); } return { po: hzDivP(E), nm: () => `$(${sTx(E)}, |)$` }; }
    const base = [1, 2, 3], perm = Z.shuffle([0, 1, 2]), E = [0, 1 << perm[0], (1 << perm[0]) | (1 << perm[1]), 7], po = hzSubP(E, base);
    return { po, nm: () => '$(' + hzSetTx(po, E) + ', ⊆)$' };
  }
  function hzNonChainOpt(k) {
    if (k === 0) { const n = Z.pick([6, 10, 12, 15, 18, 20, 14, 21]); return { po: hzDivP(Z.divisors(n)), nm: () => `$(D(${n}), |)$` }; }
    if (k === 1) { let E, po; do { const n = Z.pick([24, 36, 48, 72]); E = sOf(Z.shuffle(Z.divisors(n)).slice(0, 4)); po = hzDivP(E); } while (Z.hasse(E, po.leq).total); return { po, nm: () => `$(${sTx(E)}, |)$` }; }
    if (k === 2) return { po: hzSubP(Z.range(0, 3), ['a', 'b']), nm: () => '$(𝒫(\\{a, b\\}), ⊆)$' };
    if (k === 3) return { po: hzProdP(2, 2), nm: () => '$\\{1, 2\\} × \\{1, 2\\}$ ' + L('amb l\'ordre producte', 'con el orden producto', 'with the product order') };
    const base = [1, 2, 3], E = Z.pick([[0, 1, 3, 5], [0, 1, 2, 3], [1, 3, 5, 7], [0, 2, 3, 6]]), po = hzSubP(E, base);
    return { po, nm: () => '$(' + hzSetTx(po, E) + ', ⊆)$' };
  }
  function bkHzTotalGen() {
    const good = hzChainOpt(), bad = Z.shuffle([0, 1, 2, 3, 4]).slice(0, 3).map(hzNonChainOpt), opts = [good].concat(bad);
    const solOf = X => { const h = Z.hasse(X.po.E, X.po.leq), ord = X.po.E.slice().sort((a, b) => h.level[a] - h.level[b]);
      return h.total ? L('Total: és una cadena, ', 'Total: es una cadena, ', 'Total: it is a chain, ') + '$' + ord.map(x => hzTx(X.po, x)).join(' ≼ ') + '$.' : L('Parcial: ', 'Parcial: ', 'Partial: ') + '$' + hzTx(X.po, h.inc[0]) + '$' + L(' i ', ' y ', ' and ') + '$' + hzTx(X.po, h.inc[1]) + '$' + L(' no són comparables.', ' no son comparables.', ' are not comparable.'); };
    return {
      q: () => md(L('Quin d\'aquests conjunts ordenats té un ordre <b>total</b>?', '¿Cuál de estos conjuntos ordenados tiene un orden <b>total</b>?', 'Which of these ordered sets has a <b>total</b> order?')),
      hint: () => P(L('Total vol dir que per a qualsevol parella, un dels dos està per sota de l\'altre: el diagrama de Hasse és una sola cadena. Per descartar una opció, busca dos elements no comparables.', 'Total significa que para cualquier par, uno de los dos está por debajo del otro: el diagrama de Hasse es una sola cadena. Para descartar una opción, busca dos elementos no comparables.', 'Total means that for any pair, one of the two lies below the other: the Hasse diagram is a single chain. To rule out an option, look for two non-comparable elements.')),
      fx: HZFX.total,
      sol: () => opts.map((X, j) => kT(md(X.nm()), md(solOf(X)), j === 0 ? 'done' : 'neg')).concat([kT(L('Diagrama de l\'ordre total', 'Diagrama del orden total', 'Diagram of the total order'), hzSVG(good.po).svg)]),
      a: { k: 'mc', o: opts.map(X => () => md(X.nm())), c: 0 }
    };
  }

  /* ================= NIVELL 2 ================= */
  /* Hasse d'un subconjunt amb la divisibilitat (la trampa: fletxes amb quocient compost) */
  function bkHzDivSubGen() {
    let n, E, po, h, comp, t = 0;
    do {
      n = Z.pick([60, 72, 84, 90, 120, 180, 144, 108]); E = sOf(Z.shuffle(Z.divisors(n).filter(x => x > 1)).slice(0, ri(6, 7)));
      po = hzDivP(E); h = Z.hasse(E, po.leq); comp = h.cover.filter(([a, b]) => !Z.isPrime(b / a));
    } while ((h.total || h.cover.length < 5 || !comp.length || hzRowMax(po, h) > 4 || (h.minimal.length < 2 && h.maximal.length < 2)) && ++t < 600);
    const ex = hzPairs(h.cover);
    const between = ([a, b]) => Z.divisors(b / a).filter(d => d > 1 && d < b / a).map(d => a * d);
    return {
      q: () => md(L(`Sigui $S = ${sTx(E)}$ amb l'ordre de la divisibilitat. Dibuixa el diagrama de Hasse i escriu-ne les fletxes com a parelles $(x, y)$. Quins són els elements minimals i els maximals?`, `Sea $S = ${sTx(E)}$ con el orden de la divisibilidad. Dibuja el diagrama de Hasse y escribe sus flechas como pares $(x, y)$. ¿Cuáles son los elementos minimales y los maximales?`, `Let $S = ${sTx(E)}$ with the divisibility order. Draw the Hasse diagram and write its arrows as pairs $(x, y)$. What are the minimal and the maximal elements?`)),
      hint: () => P(L('Per a cada $x$, mira quins elements de $S$ són múltiples seus i queda\'t amb els més petits: aquells que no tenen cap altre element de $S$ entremig.', 'Para cada $x$, mira qué elementos de $S$ son múltiplos suyos y quédate con los más pequeños: aquellos que no tienen ningún otro elemento de $S$ en medio.', 'For each $x$, check which elements of $S$ are multiples of it and keep the smallest ones: those with no other element of $S$ in between.')),
      fx: HZFX.sub,
      sol: () => E.filter(x => h.cover.some(c => c[0] === x)).map(x => kS(L('Des de ', 'Desde ', 'From ') + x, h.cover.filter(c => c[0] === x).map(c => x + ' → ' + c[1]).join(',   '), L('múltiples de ', 'múltiplos de ', 'multiples of ') + x + L(' a S: ', ' en S: ', ' in S: ') + E.filter(y => y !== x && y % x === 0).join(', '))).concat([
        kT(L('Compte amb el quocient', 'Cuidado con el cociente', 'Careful with the quotient'), md(comp.map(c => { const bw = between(c), one = bw.length === 1, lst = bw.slice(0, -1).join(', ') + (bw.length > 1 ? L(' i ', ' y ', ' and ') : '') + bw[bw.length - 1];
          return L(`$${c[0]} → ${c[1]}$ és fletxa encara que $${c[1]}/${c[0]} = ${c[1] / c[0]}$ no és primer: entremig només ${one ? 'hi podria anar ' + lst + ', que no és de $S$' : 'hi podrien anar ' + lst + ', i cap no és de $S$'}.`, `$${c[0]} → ${c[1]}$ es flecha aunque $${c[1]}/${c[0]} = ${c[1] / c[0]}$ no es primo: en medio solo ${one ? 'podría ir ' + lst + ', que no está en $S$' : 'podrían ir ' + lst + ', y ninguno está en $S$'}.`, `$${c[0]} → ${c[1]}$ is an arrow even though $${c[1]}/${c[0]} = ${c[1] / c[0]}$ is not prime: in between ${one ? 'there could only be ' + lst + ', which is not in $S$' : 'there could only be ' + lst + ', and none of them is in $S$'}.`); }).join(' '))),
        kT(L('Diagrama', 'Diagrama', 'Diagram'), hzSVG(po, { hl3: h.minimal, hl2: h.maximal }).svg + hzLeg([['dn', L('minimals', 'minimales', 'minimal')], ['up', L('maximals', 'maximales', 'maximal')]])),
        kDone(L('minimals ', 'minimales ', 'minimal ') + sTx(h.minimal) + ';  ' + L('maximals ', 'maximales ', 'maximal ') + sTx(h.maximal), h.cover.length + ' ' + L('fletxes', 'flechas', 'arrows'))]),
      a: { k: 'multi', f: [{ lab: () => L('Fletxes del Hasse', 'Flechas del Hasse', 'Arrows of the Hasse diagram'), k: 'rel', test: raw => hzSameCov(hzParse(raw, E), h), help: HZH.cov }, { lab: () => L('Minimals', 'Minimales', 'Minimal elements'), k: 'set', v: h.minimal.map(x => C(x)), help: HZH.set }, { lab: () => L('Maximals', 'Maximales', 'Maximal elements'), k: 'set', v: h.maximal.map(x => C(x)), help: HZH.set }],
        show: () => M(ex + ';  ' + L('minimals ', 'minimales ', 'minimal ') + sTx(h.minimal) + ';  ' + L('maximals ', 'maximales ', 'maximal ') + sTx(h.maximal)), ex }
    };
  }
  /* del graf G(≼) al Hasse */
  function bkHzGraphGen() {
    let po, h, t = 0; const m = ri(5, 6);
    do { po = hzRand(m, 3); h = Z.hasse(po.E, po.leq); } while ((h.total || h.cover.length < 4 || hzLong(po, h).length < 2) && ++t < 400);
    const E = po.E, G = []; E.forEach(a => E.forEach(b => { if (po.leq(a, b)) G.push([a, b]); }));
    const lg = hzLong(po, h), ex = hzPairs(h.cover);
    const gTx = '\\{' + G.map(([a, b]) => '(' + a + ', ' + b + ')').join(', ') + '\\}';
    return {
      q: () => md(L(`A $A = ${sTx(E)}$, la relació d'ordre $≼$ té el graf $G(≼) = ${gTx}$. Escriu les fletxes del diagrama de Hasse i digues quins són els elements minimals i els maximals.`, `En $A = ${sTx(E)}$, la relación de orden $≼$ tiene el grafo $G(≼) = ${gTx}$. Escribe las flechas del diagrama de Hasse y di cuáles son los elementos minimales y los maximales.`, `On $A = ${sTx(E)}$, the order relation $≼$ has the graph $G(≼) = ${gTx}$. Write the arrows of the Hasse diagram and say which are the minimal and the maximal elements.`)),
      hint: () => P(L('Treu els bucles $(x, x)$. Després, per a cada parella $(x, z)$ mira si hi ha un $y$ amb $(x, y)$ i $(y, z)$ al graf: si n\'hi ha, és una drecera i no va al Hasse.', 'Quita los bucles $(x, x)$. Después, para cada par $(x, z)$ mira si hay un $y$ con $(x, y)$ e $(y, z)$ en el grafo: si lo hay, es un atajo y no va al Hasse.', 'Remove the loops $(x, x)$. Then, for each pair $(x, z)$ check whether there is a $y$ with $(x, y)$ and $(y, z)$ in the graph: if there is, it is a shortcut and does not go into the Hasse diagram.')),
      fx: HZFX.graph,
      sol: () => [kS(L('Bucles (fora)', 'Bucles (fuera)', 'Loops (out)'), E.map(x => '(' + x + ', ' + x + ')').join(', ')),
        kT(L('Dreceres (fora)', 'Atajos (fuera)', 'Shortcuts (out)'), md(lg.map(([a, b]) => '$(' + a + ', ' + b + ')$ ' + L('per ', 'por ', 'via ') + '$' + hzPath(h, a, b).join(' → ') + '$').join(';  ')), 'neg'),
        kS(L('Fletxes del Hasse', 'Flechas del Hasse', 'Arrows of the Hasse diagram'), h.cover.map(([a, b]) => a + ' → ' + b).join(',   ')),
        kT(L('Diagrama', 'Diagrama', 'Diagram'), hzSVG(po, { hl3: h.minimal, hl2: h.maximal }).svg + hzLeg([['dn', L('minimals', 'minimales', 'minimal')], ['up', L('maximals', 'maximales', 'maximal')]])),
        kDone(L('minimals ', 'minimales ', 'minimal ') + sTx(h.minimal) + ';  ' + L('maximals ', 'maximales ', 'maximal ') + sTx(h.maximal), G.length + ' = ' + E.length + ' ' + L('bucles', 'bucles', 'loops') + ' + ' + lg.length + ' ' + L('dreceres', 'atajos', 'shortcuts') + ' + ' + h.cover.length + ' ' + L('fletxes', 'flechas', 'arrows'))],
      a: { k: 'multi', f: [{ lab: () => L('Fletxes del Hasse', 'Flechas del Hasse', 'Arrows of the Hasse diagram'), k: 'rel', test: raw => hzSameCov(hzParse(raw, E), h), help: HZH.cov }, { lab: () => L('Minimals', 'Minimales', 'Minimal elements'), k: 'set', v: h.minimal.map(x => C(x)), help: HZH.set }, { lab: () => L('Maximals', 'Maximales', 'Maximal elements'), k: 'set', v: h.maximal.map(x => C(x)), help: HZH.set }],
        show: () => M(ex + ';  ' + sTx(h.minimal) + ';  ' + sTx(h.maximal)), ex }
    };
  }
  /* família de subconjunts amb ⊆ */
  function bkHzFamGen() {
    const base = [1, 2, 3, 4], pc = m => hzBits(m, base).length;
    let F, po, h, t = 0;
    do { F = Z.shuffle(Z.range(0, 15)).slice(0, 6).sort((a, b) => pc(a) - pc(b) || a - b); po = hzSubP(F, base); h = Z.hasse(F, po.leq); }
    while ((h.total || h.cover.length < 5 || !h.cover.some(([a, b]) => pc(b) - pc(a) >= 2) || hzRowMax(po, h) > 3) && ++t < 600);
    const arr = m => hzBits(m, base), mins = h.minimal.map(arr), maxs = h.maximal.map(arr);
    const fTx = hzSetTx(po, F);
    return {
      q: () => md(L(`Sigui $ℱ = ${fTx} ⊆ 𝒫(\\{1, 2, 3, 4\\})$, ordenada per la inclusió $⊆$. Quantes fletxes té el diagrama de Hasse? Quins són els elements minimals i els maximals?`, `Sea $ℱ = ${fTx} ⊆ 𝒫(\\{1, 2, 3, 4\\})$, ordenada por la inclusión $⊆$. ¿Cuántas flechas tiene el diagrama de Hasse? ¿Cuáles son los elementos minimales y los maximales?`, `Let $ℱ = ${fTx} ⊆ 𝒫(\\{1, 2, 3, 4\\})$, ordered by inclusion $⊆$. How many arrows does the Hasse diagram have? What are the minimal and the maximal elements?`)),
      hint: () => P(L('Ordena els conjunts per mida. $X → Y$ si $X ⊊ Y$ i no hi ha cap conjunt de $ℱ$ estrictament entremig. Els elements minimals i maximals són conjunts: escriu-los com a conjunt de conjunts.', 'Ordena los conjuntos por tamaño. $X → Y$ si $X ⊊ Y$ y no hay ningún conjunto de $ℱ$ estrictamente en medio. Los elementos minimales y maximales son conjuntos: escríbelos como conjunto de conjuntos.', 'Sort the sets by size. $X → Y$ if $X ⊊ Y$ and there is no set of $ℱ$ strictly in between. The minimal and maximal elements are sets: write them as a set of sets.')),
      fx: HZFX.fam,
      sol: () => F.filter(x => h.cover.some(c => c[0] === x)).map(x => kS(L('Des de ', 'Desde ', 'From ') + '$' + hzTx(po, x) + '$', h.cover.filter(c => c[0] === x).map(c => hzTx(po, x) + ' → ' + hzTx(po, c[1])).join(',   '))).concat([
        kT(L('Diagrama', 'Diagrama', 'Diagram'), hzSVG(po, { hl3: h.minimal, hl2: h.maximal }).svg + hzLeg([['dn', L('minimals', 'minimales', 'minimal')], ['up', L('maximals', 'maximales', 'maximal')]])),
        kDone(h.cover.length + ' ' + L('fletxes', 'flechas', 'arrows') + ';  ' + L('minimals ', 'minimales ', 'minimal ') + nsTx(mins) + ';  ' + L('maximals ', 'maximales ', 'maximal ') + nsTx(maxs))]),
      a: { k: 'multi', f: [{ lab: () => L('Fletxes del Hasse', 'Flechas del Hasse', 'Arrows of the Hasse diagram'), k: 'num', v: h.cover.length }, { lab: () => L('Minimals', 'Minimales', 'Minimal elements'), k: 'nset', v: nsKey(mins), help: HZH.fam }, { lab: () => L('Maximals', 'Maximales', 'Maximal elements'), k: 'nset', v: nsKey(maxs), help: HZH.fam }],
        show: () => M(h.cover.length + ';  ' + nsTx(mins) + ';  ' + nsTx(maxs)) }
    };
  }
  /* ordre producte en una graella */
  function bkHzProdGen() {
    const [p, q] = Z.pick([[2, 3], [3, 2], [3, 3], [2, 4], [4, 2], [3, 4], [4, 3]]), po = hzProdP(p, q), h = Z.hasse(po.E, po.leq);
    const arrows = p * (q - 1) + q * (p - 1), tp = p * (p + 1) / 2, tq = q * (q + 1) / 2, pairs = tp * tq;
    let u, v; const inc = Z.rnd(2) === 0;
    do { u = Z.pick(po.E); v = Z.pick(po.E); } while (u === v || (inc ? (po.leq(u, v) || po.leq(v, u)) : !(po.leq(u, v) || po.leq(v, u))));
    const cmp = !inc, lu = po.lab(u), lv = po.lab(v);
    const sp = Z.range(1, p).join(', '), sq = Z.range(1, q).join(', ');
    return {
      q: () => md(L(`A $A = \\{${sp}\\} × \\{${sq}\\}$ considera l'ordre producte: $(a, b) ≼ (c, d) ⟺ a ≤ c ∧ b ≤ d$. Quantes fletxes té el diagrama de Hasse? Quantes parelles té $G(≼)$? Són comparables $${lu}$ i $${lv}$?`, `En $A = \\{${sp}\\} × \\{${sq}\\}$ considera el orden producto: $(a, b) ≼ (c, d) ⟺ a ≤ c ∧ b ≤ d$. ¿Cuántas flechas tiene el diagrama de Hasse? ¿Cuántos pares tiene $G(≼)$? ¿Son comparables $${lu}$ y $${lv}$?`, `On $A = \\{${sp}\\} × \\{${sq}\\}$ consider the product order: $(a, b) ≼ (c, d) ⟺ a ≤ c ∧ b ≤ d$. How many arrows does the Hasse diagram have? How many pairs does $G(≼)$ have? Are $${lu}$ and $${lv}$ comparable?`)),
      hint: () => P(L('Al Hasse, una fletxa fa pujar una sola coordenada en 1. Per comptar $G(≼)$, tria per separat una parella $a ≤ c$ i una parella $b ≤ d$.', 'En el Hasse, una flecha hace subir una sola coordenada en 1. Para contar $G(≼)$, elige por separado un par $a ≤ c$ y un par $b ≤ d$.', 'In the Hasse diagram, an arrow raises a single coordinate by 1. To count $G(≼)$, choose separately a pair $a ≤ c$ and a pair $b ≤ d$.')),
      fx: HZFX.prod,
      sol: () => [kS(L('Cobertures', 'Coberturas', 'Covers'), '(a, b) → (a + 1, b),   (a, b) → (a, b + 1)', L('entremig no hi cap res', 'en medio no cabe nada', 'nothing fits in between')),
        kS(L('Fletxes', 'Flechas', 'Arrows'), p + ' · ' + (q - 1) + ' + ' + q + ' · ' + (p - 1) + ' = ' + arrows, L(`${p} files amb ${q - 1} fletxes horitzontals i ${q} columnes amb ${p - 1}`, `${p} filas con ${q - 1} flechas horizontales y ${q} columnas con ${p - 1}`, `${p} rows with ${q - 1} horizontal arrows and ${q} columns with ${p - 1}`)),
        kS(L('Parelles de G(≼)', 'Pares de G(≼)', 'Pairs of G(≼)'), '\\fr{' + p + ' · ' + (p + 1) + '}{2} · \\fr{' + q + ' · ' + (q + 1) + '}{2} = ' + tp + ' · ' + tq + ' = ' + pairs, L('parelles a ≤ c a la primera coordenada, per parelles b ≤ d a la segona', 'pares a ≤ c en la primera coordenada, por pares b ≤ d en la segunda', 'pairs a ≤ c in the first coordinate, times pairs b ≤ d in the second')),
        kT(L('Comparables?', '¿Comparables?', 'Comparable?'), md(cmp ? L(`Sí: ${po.leq(u, v) ? `$${lu} ≼ ${lv}$` : `$${lv} ≼ ${lu}$`}, perquè les dues coordenades van en el mateix sentit.`, `Sí: ${po.leq(u, v) ? `$${lu} ≼ ${lv}$` : `$${lv} ≼ ${lu}$`}, porque las dos coordenadas van en el mismo sentido.`, `Yes: ${po.leq(u, v) ? `$${lu} ≼ ${lv}$` : `$${lv} ≼ ${lu}$`}, because both coordinates go in the same direction.`) : L('No: una coordenada puja i l\'altra baixa, així que cap dels dos és a sota de l\'altre.', 'No: una coordenada sube y la otra baja, así que ninguno está debajo del otro.', 'No: one coordinate goes up and the other goes down, so neither is below the other.')), cmp ? 'done' : 'neg'),
        kT(L('Diagrama', 'Diagrama', 'Diagram'), hzSVG(po, { hl: [u, v] }).svg),
        kDone(arrows + ' ' + L('fletxes', 'flechas', 'arrows') + ';  |G(≼)| = ' + pairs)],
      a: { k: 'multi', f: [{ lab: () => L('Fletxes del Hasse', 'Flechas del Hasse', 'Arrows of the Hasse diagram'), k: 'num', v: arrows }, { lab: () => L('Parelles de G(≼)', 'Pares de G(≼)', 'Pairs of G(≼)'), k: 'num', v: pairs }, { lab: () => L('Són comparables', 'Son comparables', 'They are comparable'), k: 'tf', v: cmp }],
        show: () => M(arrows + ';  ' + pairs + ';  ' + (cmp ? L('comparables', 'comparables', 'comparable') : L('no comparables', 'no comparables', 'not comparable'))) }
    };
  }
  /* comptar parelles a partir del diagrama */
  function bkHzCountGen() {
    let po, h, t = 0;
    do { po = hzRand(ri(5, 7), ri(3, 4)); h = Z.hasse(po.E, po.leq); } while ((h.total || h.cover.length < 5 || hzLong(po, h).length < 2 || hzRowMax(po, h) > 4) && ++t < 400);
    hzLetters(po);
    const E = po.E, lab = x => po.lab(x), ups = E.map(x => hzUp(po, x)), tot = ups.reduce((a, u) => a + u.length, 0), hidden = tot - h.cover.length;
    const names = E.map(lab).sort();
    return {
      q: () => md(L(`El diagrama de Hasse representa un ordre $≼$ a $A = \\{${names.join(', ')}\\}$. Quantes parelles té el graf $G(≼)$? Quantes d'aquestes parelles no es veuen com a fletxa al dibuix (bucles inclosos)?`, `El diagrama de Hasse representa un orden $≼$ en $A = \\{${names.join(', ')}\\}$. ¿Cuántos pares tiene el grafo $G(≼)$? ¿Cuántos de esos pares no se ven como flecha en el dibujo (bucles incluidos)?`, `The Hasse diagram represents an order $≼$ on $A = \\{${names.join(', ')}\\}$. How many pairs does the graph $G(≼)$ have? How many of those pairs are not shown as an arrow in the drawing (loops included)?`)) + hzSVG(po).svg,
      hint: () => P(L('Per a cada element $x$, compta quants elements pots assolir pujant (inclòs el mateix $x$): cadascun és una parella $(x, y)$ de $G(≼)$.', 'Para cada elemento $x$, cuenta cuántos elementos puedes alcanzar subiendo (incluido el propio $x$): cada uno es un par $(x, y)$ de $G(≼)$.', 'For each element $x$, count how many elements you can reach going up (including $x$ itself): each one is a pair $(x, y)$ of $G(≼)$.')),
      fx: HZFX.count,
      sol: () => E.slice().sort((a, b) => lab(a) < lab(b) ? -1 : 1).map(x => kS('$' + lab(x) + '$', lab(x) + ' ≼ ' + hzUp(po, x).map(lab).sort().join(', ') + '   →   ' + hzUp(po, x).length)).concat([
        kS('|G(≼)|', E.slice().sort((a, b) => lab(a) < lab(b) ? -1 : 1).map(x => hzUp(po, x).length).join(' + ') + ' = ' + tot),
        kDone(tot + ' ' + L('parelles', 'pares', 'pairs') + ';  ' + hidden + ' ' + L('no dibuixades', 'no dibujadas', 'not drawn'), tot + ' − ' + h.cover.length + ' ' + L('fletxes', 'flechas', 'arrows') + ' = ' + hidden + ' (' + E.length + ' ' + L('bucles', 'bucles', 'loops') + ' + ' + (hidden - E.length) + ' ' + L('per transitivitat', 'por transitividad', 'by transitivity') + ')')]),
      a: { k: 'multi', f: [{ lab: () => '|G(≼)|', k: 'num', v: tot }, { lab: () => L('Parelles sense fletxa al dibuix', 'Pares sin flecha en el dibujo', 'Pairs without an arrow in the drawing'), k: 'num', v: hidden }], show: () => M(tot + ';  ' + hidden) }
    };
  }

  /* ================= NIVELL 3 ================= */
  /* cotes, suprem i ínfim a D(n): mcm i mcd */
  function bkHzDivBoundsGen() {
    let n, D, B, t = 0;
    do {
      n = Z.pick([36, 60, 72, 90, 84, 100, 48, 126, 150, 108, 80]); D = Z.divisors(n);
      const inner = D.filter(x => x > 1 && x < n);
      B = sOf(Z.shuffle(inner).slice(0, Z.rnd(10) < 7 ? 2 : 3));
    } while ((!B.some(a => B.some(b => a !== b && a % b !== 0 && b % a !== 0))) && ++t < 400);
    const lc = B.reduce((a, b) => Z.lcm(a, b)), gc = B.reduce((a, b) => Z.gcd(a, b));
    const U = D.filter(x => x % lc === 0), Lo = D.filter(x => gc % x === 0), po = hzDivP(D);
    const bt = sTx(B), bl = B.join(', ');
    return {
      q: () => md(L(`A $(D(${n}), |)$ considera $B = ${bt}$. Troba les cotes superiors i les cotes inferiors de $B$, i el suprem i l'ínfim.`, `En $(D(${n}), |)$ considera $B = ${bt}$. Encuentra las cotas superiores y las cotas inferiores de $B$, y el supremo y el ínfimo.`, `In $(D(${n}), |)$ consider $B = ${bt}$. Find the upper bounds and the lower bounds of $B$, and the supremum and the infimum.`)),
      hint: () => P(L('Cota superior: un divisor de ' + n + ' que sigui múltiple de tots els elements de $B$. Pensa en el mcm i el mcd.', 'Cota superior: un divisor de ' + n + ' que sea múltiplo de todos los elementos de $B$. Piensa en el mcm y el mcd.')),
      fx: () => HZFX.bounds(true),
      sol: () => [kS(L('Cotes superiors', 'Cotas superiores', 'Upper bounds'), B.map(b => b + ' | x').join(' ∧ ') + '  ⟺  mcm(' + bl + ') = ' + lc + ' | x', L('x ha de ser de D(' + n + ')', 'x tiene que ser de D(' + n + ')')),
        kS('', L('cotes sup. = ', 'cotas sup. = ', 'upper bounds = ') + sTx(U)),
        kS(L('Suprem', 'Supremo', 'Supremum'), 'sup B = mcm(' + bl + ') = ' + lc, L('és cota superior i divideix totes les altres: és la més petita', 'es cota superior y divide a todas las demás: es la más pequeña', 'is an upper bound and divides all the others: it is the smallest') + (B.includes(lc) ? '' : L('. No és de B, i no cal que ho sigui.', '. No es de B, y no hace falta que lo sea.', '. It is not in B, and it does not have to be.'))),
        kS(L('Cotes inferiors', 'Cotas inferiores', 'Lower bounds'), B.map(b => 'x | ' + b).join(' ∧ ') + '  ⟺  x | mcd(' + bl + ') = ' + gc),
        kS('', L('cotes inf. = ', 'cotas inf. = ', 'lower bounds = ') + sTx(Lo)),
        kS(L('Ínfim', 'Ínfimo', 'Infimum'), 'inf B = mcd(' + bl + ') = ' + gc, L('és cota inferior i totes les altres el divideixen', 'es cota inferior y todas las demás lo dividen', 'is a lower bound and all the others divide it')),
        kT(L('Al diagrama', 'En el diagrama', 'In the diagram'), hzSVG(po, { hl: B, hl2: U, hl3: Lo }).svg + hzLeg([['sel', 'B'], ['up', L('cotes superiors', 'cotas superiores', 'upper bounds')], ['dn', L('cotes inferiors', 'cotas inferiores', 'lower bounds')]])),
        kDone('sup B = ' + lc + ',   inf B = ' + gc)],
      a: { k: 'multi', f: [{ lab: () => L('Cotes superiors', 'Cotas superiores', 'Upper bounds'), k: 'set', v: U.map(x => C(x)), help: HZH.set }, { lab: () => L('Suprem', 'Supremo', 'Supremum'), k: 'num', v: lc }, { lab: () => L('Cotes inferiors', 'Cotas inferiores', 'Lower bounds'), k: 'set', v: Lo.map(x => C(x)), help: HZH.set }, { lab: () => L('Ínfim', 'Ínfimo', 'Infimum'), k: 'num', v: gc }],
        show: () => M(sTx(U) + ';  sup = ' + lc + ';  ' + sTx(Lo) + ';  inf = ' + gc) }
    };
  }
  /* cotes i suprem dins d'un subconjunt: poden no existir */
  function hzSupIn(E, X, up) {   // element de X que és a sota (up) / a sobre de tots els de X
    return X.find(x => X.every(y => up ? y % x === 0 : x % y === 0));
  }
  function bkHzSubBoundsGen() {
    const want = Z.pick(['nosup', 'noub', 'notlcm', 'noinf', 'nosup']);
    let best = null, t = 0;
    while (t++ < 900) {
      const n = Z.pick([36, 60, 72, 90, 84, 48, 120, 180]), E = sOf(Z.shuffle(Z.divisors(n)).slice(0, ri(6, 8)));
      const po = hzDivP(E), h = Z.hasse(E, po.leq); if (h.total || hzRowMax(po, h) > 4) continue;
      const pairs = hzInc(po); if (!pairs.length) continue;
      const B = Z.pick(pairs).slice().sort((a, b) => a - b);
      const U = E.filter(x => B.every(b => x % b === 0)), Lo = E.filter(x => B.every(b => b % x === 0));
      const sup = hzSupIn(E, U, true), inf = hzSupIn(E, Lo, false), lc = Z.lcm(B[0], B[1]);
      best = { E, po, h, B, U, Lo, sup, inf };
      if (want === 'nosup' ? (U.length >= 2 && sup == null) : want === 'noub' ? (!U.length && Lo.length > 0) : want === 'notlcm' ? (sup != null && sup !== lc) : (Lo.length >= 2 && inf == null)) break;
    }
    const { E, po, h, B, U, Lo, sup, inf } = best;
    const lc = Z.lcm(B[0], B[1]), gc = Z.gcd(B[0], B[1]);
    const supTxt = () => !U.length ? L('No hi ha cap cota superior dins de $S$, així que no hi ha suprem.', 'No hay ninguna cota superior dentro de $S$, así que no hay supremo.', 'There is no upper bound within $S$, so there is no supremum.')
      : sup == null ? (() => { const mu = U.filter(x => !U.some(y => y !== x && x % y === 0)); return L(`Les cotes superiors més petites són $${mu.join('$ i $')}$, i no són comparables: cap no està per sota de totes les altres. No hi ha suprem.`, `Las cotas superiores más pequeñas son $${mu.join('$ y $')}$, y no son comparables: ninguna está por debajo de todas las demás. No hay supremo.`, `The smallest upper bounds are $${mu.join('$ and $')}$, and they are not comparable: none of them is below all the others. There is no supremum.`); })()
        : L(`$sup B = ${sup}$: és cota superior i divideix totes les altres.`, `$sup B = ${sup}$: es cota superior y divide a todas las demás.`, `$sup B = ${sup}$: it is an upper bound and divides all the others.`) + (sup !== lc ? L(` Fixa't que no és $mcm(${B[0]}, ${B[1]}) = ${lc}$: el mcm no és de $S$.`, ` Fíjate en que no es $mcm(${B[0]}, ${B[1]}) = ${lc}$: el mcm no está en $S$.`, ` Note that it is not $lcm(${B[0]}, ${B[1]}) = ${lc}$: the lcm is not in $S$.`) : '');
    const infTxt = () => !Lo.length ? L('No hi ha cap cota inferior dins de $S$, així que no hi ha ínfim.', 'No hay ninguna cota inferior dentro de $S$, así que no hay ínfimo.', 'There is no lower bound within $S$, so there is no infimum.')
      : inf == null ? (() => { const ml = Lo.filter(x => !Lo.some(y => y !== x && y % x === 0)); return L(`Les cotes inferiors més grans són $${ml.join('$ i $')}$, i no són comparables. No hi ha ínfim.`, `Las cotas inferiores más grandes son $${ml.join('$ y $')}$, y no son comparables. No hay ínfimo.`, `The largest lower bounds are $${ml.join('$ and $')}$, and they are not comparable. There is no infimum.`); })()
        : L(`$inf B = ${inf}$: és cota inferior i totes les altres el divideixen.`, `$inf B = ${inf}$: es cota inferior y todas las demás lo dividen.`, `$inf B = ${inf}$: it is a lower bound and all the others divide it.`) + (inf !== gc ? L(` No és $mcd(${B[0]}, ${B[1]}) = ${gc}$, que no és de $S$.`, ` No es $mcd(${B[0]}, ${B[1]}) = ${gc}$, que no está en $S$.`, ` It is not $gcd(${B[0]}, ${B[1]}) = ${gc}$, which is not in $S$.`) : '');
    const opt = x => x == null ? '∅' : '\\{' + x + '\\}';
    return {
      q: () => md(L(`Sigui $S = ${sTx(E)}$ amb la divisibilitat i $B = \\{${B[0]}, ${B[1]}\\}$ (destacat al diagrama). Troba les cotes superiors i inferiors de $B$ <b>dins de $S$</b>, i el suprem i l'ínfim si existeixen.`, `Sea $S = ${sTx(E)}$ con la divisibilidad y $B = \\{${B[0]}, ${B[1]}\\}$ (destacado en el diagrama). Encuentra las cotas superiores e inferiores de $B$ <b>dentro de $S$</b>, y el supremo y el ínfimo si existen.`, `Let $S = ${sTx(E)}$ with divisibility and $B = \\{${B[0]}, ${B[1]}\\}$ (highlighted in the diagram). Find the upper and lower bounds of $B$ <b>within $S$</b>, and the supremum and the infimum if they exist.`)) + hzSVG(po, { hl: B }).svg,
      hint: () => P(L('Les cotes superiors són els elements als quals arriba un camí de pujada des dels dos elements de $B$. El suprem és la cota superior que està per sota de totes les altres; si n\'hi ha dues de mínimes i no comparables, no existeix.', 'Las cotas superiores son los elementos a los que llega un camino de subida desde los dos elementos de $B$. El supremo es la cota superior que está por debajo de todas las demás; si hay dos mínimas y no comparables, no existe.', 'The upper bounds are the elements reached by an upward path from both elements of $B$. The supremum is the upper bound that lies below all the others; if there are two smallest ones that are not comparable, it does not exist.')),
      fx: () => HZFX.bounds(false),
      sol: () => [kS(L('Cotes superiors a S', 'Cotas superiores en S', 'Upper bounds in S'), sTx(U), L('elements de S múltiples de ', 'elementos de S múltiplos de ', 'elements of S that are multiples of ') + B[0] + L(' i de ', ' y de ', ' and of ') + B[1]),
        kT(L('Suprem', 'Supremo', 'Supremum'), md(supTxt()), sup != null ? 'done' : 'neg'),
        kS(L('Cotes inferiors a S', 'Cotas inferiores en S', 'Lower bounds in S'), sTx(Lo), L('elements de S que divideixen ', 'elementos de S que dividen a ', 'elements of S that divide ') + B[0] + L(' i ', ' y ', ' and ') + B[1]),
        kT(L('Ínfim', 'Ínfimo', 'Infimum'), md(infTxt()), inf != null ? 'done' : 'neg'),
        kT(L('Al diagrama', 'En el diagrama', 'In the diagram'), hzSVG(po, { hl: B, hl2: U, hl3: Lo }).svg + hzLeg([['sel', 'B'], ['up', L('cotes superiors', 'cotas superiores', 'upper bounds')], ['dn', L('cotes inferiors', 'cotas inferiores', 'lower bounds')]]))],
      a: { k: 'multi', f: [{ lab: () => L('Cotes superiors', 'Cotas superiores', 'Upper bounds'), k: 'set', v: U.map(x => C(x)), help: HZH.set }, { lab: () => L('Suprem', 'Supremo', 'Supremum'), k: 'set', v: sup == null ? [] : [C(sup)], help: HZH.one }, { lab: () => L('Cotes inferiors', 'Cotas inferiores', 'Lower bounds'), k: 'set', v: Lo.map(x => C(x)), help: HZH.set }, { lab: () => L('Ínfim', 'Ínfimo', 'Infimum'), k: 'set', v: inf == null ? [] : [C(inf)], help: HZH.one }],
        show: () => M(sTx(U) + ';  sup ' + opt(sup) + ';  ' + sTx(Lo) + ';  inf ' + opt(inf)) }
    };
  }
  /* construeix un ordre amb propietats donades (resposta oberta, es comprova calculant-la) */
  function hzClosure(E, G) {
    const ix = new Map(E.map((x, i) => [x, i])), m = E.length, R = E.map((_, i) => E.map((__, j) => i === j));
    G.forEach(s => { const [a, b] = s.split(',').map(Number); R[ix.get(a)][ix.get(b)] = true; });
    for (let k = 0; k < m; k++) for (let i = 0; i < m; i++) for (let j = 0; j < m; j++) if (R[i][k] && R[k][j]) R[i][j] = true;
    for (let i = 0; i < m; i++) for (let j = 0; j < m; j++) if (i !== j && R[i][j] && R[j][i]) return null;
    return (a, b) => R[ix.get(a)][ix.get(b)];
  }
  const HZPROP = {
    nmin: (h) => h.minimal.length, nmax: (h) => h.maximal.length, min: (h) => h.min != null, max: (h) => h.max != null, ncov: (h) => h.cover.length, tot: (h) => h.total
  };
  function hzPropTx(k, v) {
    const s = v > 1;
    if (k === 'nmin') return L(`té exactament ${v} element${s ? 's' : ''} minimal${s ? 's' : ''}`, `tiene exactamente ${v} elemento${s ? 's' : ''} minimal${s ? 'es' : ''}`, `has exactly ${v} minimal element${s ? 's' : ''}`);
    if (k === 'nmax') return L(`té exactament ${v} element${s ? 's' : ''} maximal${s ? 's' : ''}`, `tiene exactamente ${v} elemento${s ? 's' : ''} maximal${s ? 'es' : ''}`, `has exactly ${v} maximal element${s ? 's' : ''}`);
    if (k === 'min') return v ? L('té mínim', 'tiene mínimo', 'has a minimum') : L('no té mínim', 'no tiene mínimo', 'has no minimum');
    if (k === 'max') return v ? L('té màxim', 'tiene máximo', 'has a maximum') : L('no té màxim', 'no tiene máximo', 'has no maximum');
    if (k === 'ncov') return L(`el seu diagrama de Hasse té exactament ${v} fletxes`, `su diagrama de Hasse tiene exactamente ${v} flechas`, `its Hasse diagram has exactly ${v} arrows`);
    return v ? L('és un ordre total', 'es un orden total', 'is a total order') : L('no és un ordre total', 'no es un orden total', 'is not a total order');
  }
  function bkHzBuildGen() {
    const m = ri(4, 5);
    let po, h, t = 0;
    do { po = hzRand(m, ri(2, 3)); h = Z.hasse(po.E, po.leq); } while ((h.total || h.cover.length < 3) && ++t < 400);
    const E = po.E, keys = ['ncov'].concat(Z.shuffle(['nmin', 'nmax', 'min', 'max', 'tot']).slice(0, 2)), props = keys.map(k => [k, HZPROP[k](h)]);
    const ex = hzPairs(h.cover);
    const test = raw => { const G = hzParse(raw, E), leq = hzClosure(E, G); if (!leq) return false; const hh = Z.hasse(E, leq); return props.every(([k, v]) => HZPROP[k](hh) === v); };
    return {
      q: () => md(L(`Dona una relació d'ordre $≼$ a $A = ${sTx(E)}$ que compleixi alhora aquestes condicions, i escriu-la donant les fletxes del seu diagrama de Hasse com a parelles $(x, y)$:`, `Da una relación de orden $≼$ en $A = ${sTx(E)}$ que cumpla a la vez estas condiciones, y escríbela dando las flechas de su diagrama de Hasse como pares $(x, y)$:`, `Give an order relation $≼$ on $A = ${sTx(E)}$ that satisfies all these conditions at once, and write it by giving the arrows of its Hasse diagram as pairs $(x, y)$:`)) + UL(props.map(([k, v]) => hzPropTx(k, v))),
      hint: () => P(L('Dibuixa primer la forma: posa els minimals a baix i els maximals a dalt, i ajusta les fletxes fins que en tinguis les que demanen. Els noms dels elements els poses al final, com vulguis.', 'Dibuja primero la forma: pon los minimales abajo y los maximales arriba, y ajusta las flechas hasta que tengas las que piden. Los nombres de los elementos los pones al final, como quieras.', 'First draw the shape: put the minimal elements at the bottom and the maximal ones at the top, and adjust the arrows until you have the ones required. Put the names of the elements at the end, however you like.')),
      fx: HZFX.build,
      sol: () => [kT(L('Un exemple que funciona', 'Un ejemplo que funciona', 'An example that works'), md('$' + h.cover.map(([a, b]) => a + ' → ' + b).join(',  ') + '$') + hzSVG(po, { hl3: h.minimal, hl2: h.maximal }).svg + hzLeg([['dn', L('minimals', 'minimales', 'minimal')], ['up', L('maximals', 'maximales', 'maximal')]])),
        kT(L('Comprovació', 'Comprobación', 'Check'), UL(props.map(([k, v]) => {
          const det = k === 'nmin' ? '$' + sTx(h.minimal) + '$' : k === 'nmax' ? '$' + sTx(h.maximal) + '$' : k === 'min' ? (v ? String(h.min) : L('hi ha ' + h.minimal.length + ' minimals', 'hay ' + h.minimal.length + ' minimales')) : k === 'max' ? (v ? String(h.max) : L('hi ha ' + h.maximal.length + ' maximals', 'hay ' + h.maximal.length + ' maximales')) : k === 'ncov' ? String(h.cover.length) : (h.inc ? L(h.inc[0] + ' i ' + h.inc[1] + ' no són comparables', h.inc[0] + ' y ' + h.inc[1] + ' no son comparables') : '');
          return hzPropTx(k, v) + ': ' + det;
        }))),
        kT(L('Per què és un ordre', 'Por qué es un orden', 'Why it is an order'), md(L('Un diagrama sense cicles, amb els bucles i les fletxes per transitivitat afegits, és reflexiu, antisimètric i transitiu. Hi ha moltes respostes correctes: la teva es comprova calculant-ne les propietats.', 'Un diagrama sin ciclos, con los bucles y las flechas por transitividad añadidos, es reflexivo, antisimétrico y transitivo. Hay muchas respuestas correctas: la tuya se comprueba calculando sus propiedades.', 'A diagram without cycles, with the loops and the arrows by transitivity added, is reflexive, antisymmetric and transitive. There are many correct answers: yours is checked by computing its properties.')), 'done')],
      a: { k: 'rel', test, ex, help: HZH.cov, show: () => M(L('per exemple ', 'por ejemplo ', 'for example ') + ex) }
    };
  }
  /* mateix diagrama de Hasse? (forma) */
  const HZSIG = { cnt: s => s.reduce((a, e) => a * (e + 1), 1), arr: s => s.reduce((a, e, i) => a + e * s.reduce((b, f, j) => j === i ? b : b * (f + 1), 1), 0) };
  function hzShape(s) {
    if (s.length === 1) return L(`una cadena de ${s[0] + 1} elements`, `una cadena de ${s[0] + 1} elementos`, `a chain of ${s[0] + 1} elements`);
    if (s.length === 3 && s.every(e => e === 1)) return L('un cub', 'un cubo', 'a cube');
    if (s.length === 2 && s[0] === 1 && s[1] === 1) return L('un quadrat (rombe)', 'un cuadrado (rombo)', 'a square (rhombus)');
    return L('una graella ', 'una cuadrícula ', 'a grid ') + s.map(e => e + 1).join(' × ');
  }
  function hzStruct(s, kind, alt) {
    const sig = s.join(',');
    if (kind === 'D') {
      const ps = alt && s.length > 1 ? [3, 2, 5] : alt ? [3] : [2, 3, 5], n = s.reduce((a, e, i) => a * ps[i] ** e, 1);
      const fac = s.map((e, i) => ps[i] + (e > 1 ? '^{' + e + '}' : '')).join(' · ');
      return { sig, key: 'D' + n, ok: n <= 400, po: () => hzDivP(Z.divisors(n)), nm: () => `$(D(${n}), |)$`, why: () => L(`$${n} = ${fac}$: els divisors són ${s.length > 1 ? 'productes de potències d\'aquests primers' : 'les potències del primer'}`, `$${n} = ${fac}$: los divisores son ${s.length > 1 ? 'productos de potencias de estos primos' : 'las potencias del primo'}`, `$${n} = ${fac}$: the divisors are ${s.length > 1 ? 'products of powers of these primes' : 'the powers of the prime'}`) };
    }
    if (kind === 'P') { const lt = ['a', 'b', 'c'].slice(0, s.length); return { sig, key: 'P' + s.length, ok: s.every(e => e === 1), po: () => hzSubP(Z.range(0, 2 ** s.length - 1), lt), nm: () => '$(𝒫(\\{' + lt.join(', ') + '\\}), ⊆)$', why: () => L(`$2^{${s.length}} = ${2 ** s.length}$ subconjunts; cada fletxa afegeix un element`, `$2^{${s.length}} = ${2 ** s.length}$ subconjuntos; cada flecha añade un elemento`, `$2^{${s.length}} = ${2 ** s.length}$ subsets; each arrow adds one element`) }; }
    if (kind === 'X') { const [a, b] = alt ? [s[1], s[0]] : s; return { sig, key: 'X' + a + b, ok: s.length === 2, po: () => hzProdP(a + 1, b + 1), nm: () => `$\\{${Z.range(1, a + 1).join(', ')}\\} × \\{${Z.range(1, b + 1).join(', ')}\\}$ ` + L('amb l\'ordre producte', 'con el orden producto', 'with the product order'), why: () => L('cada fletxa fa pujar una coordenada', 'cada flecha hace subir una coordenada', 'each arrow raises one coordinate') }; }
    return { sig, key: 'C' + s[0], ok: s.length === 1, po: () => ({ E: Z.range(1, s[0] + 1), leq: (x, y) => x <= y, lab: String, key: x => x }), nm: () => `$(\\{${Z.range(1, s[0] + 1).join(', ')}\\}, ≤)$`, why: () => L('tots els elements són comparables', 'todos los elementos son comparables', 'all the elements are comparable') };
  }
  function hzRandStruct(s, avoid) {
    for (let t = 0; t < 60; t++) {
      const kinds = ['D', 'D'].concat(s.every(e => e === 1) && s.length <= 3 ? ['P', 'P'] : []).concat(s.length === 2 ? ['X'] : []).concat(s.length === 1 ? ['C'] : []);
      const X = hzStruct(s, Z.pick(kinds), Z.rnd(2) === 1);
      if (X.ok && !avoid.includes(X.key)) return X;
    }
    return null;
  }
  function bkHzIsoGen() {
    const TR = { '1,1': [[3], [2], [2, 1]], '2,1': [[5], [1, 1, 1], [1, 1], [3, 1]], '1,1,1': [[3, 1], [7], [2, 1], [2, 2]], '3,1': [[1, 1, 1], [7], [2, 2], [2, 1]], '2,2': [[8], [3, 1], [1, 1, 1], [2, 1]] };
    let tg, items, t = 0;
    do {
      const s = Z.pick([[1, 1], [2, 1], [1, 1, 1], [3, 1], [2, 2]]); tg = hzRandStruct(s, []); items = [];
      const keys = [tg.key], nt = ri(1, 2);
      for (let i = 0; i < nt; i++) { const X = hzRandStruct(s, keys); if (X) { items.push(X); keys.push(X.key); } }
      Z.shuffle(TR[tg.sig]).forEach(f => { if (items.length < 4) { const X = hzRandStruct(f, keys); if (X) { items.push(X); keys.push(X.key); } } });
    } while ((items.length < 4 || !items.some(X => X.sig === tg.sig) || !items.some(X => X.sig !== tg.sig)) && ++t < 50);
    items = Z.shuffle(items);
    const sOfSig = X => X.sig.split(',').map(Number), ts = sOfSig(tg);
    const desc = X => { const s = sOfSig(X); return L('És ', 'Es ', 'It is ') + hzShape(s) + ': ' + HZSIG.cnt(s) + L(' elements i ', ' elementos y ', ' elements and ') + HZSIG.arr(s) + L(' fletxes', ' flechas', ' arrows') + ' (' + X.why() + ').'; };
    return {
      q: () => md(L(`Quins d'aquests conjunts ordenats tenen el mateix diagrama de Hasse que ${tg.nm()}? «Mateix diagrama» vol dir la mateixa forma, canviant només els noms dels elements.`, `¿Cuáles de estos conjuntos ordenados tienen el mismo diagrama de Hasse que ${tg.nm()}? «Mismo diagrama» significa la misma forma, cambiando solo los nombres de los elementos.`, `Which of these ordered sets have the same Hasse diagram as ${tg.nm()}? “Same diagram” means the same shape, changing only the names of the elements.`)),
      hint: () => P(L('Compta elements i fletxes de cada un: si no coincideixen, la forma és diferent. Si coincideixen, descriu la forma: cadena, quadrat, graella, cub…', 'Cuenta elementos y flechas de cada uno: si no coinciden, la forma es distinta. Si coinciden, describe la forma: cadena, cuadrado, cuadrícula, cubo…', 'Count the elements and arrows of each one: if they do not match, the shape is different. If they match, describe the shape: chain, square, grid, cube…')),
      fx: HZFX.iso,
      sol: () => [kT(md(L('Model: ', 'Modelo: ', 'Model: ') + tg.nm()), md(desc(tg)))].concat(items.map(X => kT(md(X.nm()), md((X.sig === tg.sig ? L('<b>Mateix diagrama.</b> ', '<b>Mismo diagrama.</b> ', '<b>Same diagram.</b> ') : L('<b>Diferent.</b> ', '<b>Distinto.</b> ', '<b>Different.</b> ')) + desc(X) + (X.sig !== tg.sig && HZSIG.cnt(sOfSig(X)) === HZSIG.cnt(ts) ? L(' Té el mateix nombre d\'elements que el model, però no la mateixa forma.', ' Tiene el mismo número de elementos que el modelo, pero no la misma forma.', ' It has the same number of elements as the model, but not the same shape.') : '')), X.sig === tg.sig ? 'done' : 'neg')))
        .concat([kT(L('Diagrama del model', 'Diagrama del modelo', 'Diagram of the model'), hzSVG(tg.po()).svg)]),
      a: { k: 'tf', items: items.map(X => ({ t: () => md(X.nm()), v: X.sig === tg.sig })), yes: () => L('Mateix', 'Mismo', 'Same'), no: () => L('Diferent', 'Distinto', 'Different') },
      _d: { tg, items }
    };
  }
  /* cert o fals conceptual */
  const HZTF = [
    [true, () => L('Tot conjunt ordenat finit i no buit té almenys un element minimal.', 'Todo conjunto ordenado finito y no vacío tiene al menos un elemento minimal.', 'Every finite non-empty ordered set has at least one minimal element.'), () => L('Parteix de qualsevol element i baixa pel diagrama mentre puguis. Com que és finit i no hi ha cicles (antisimètrica), t\'acabes aturant en un element sense ningú a sota: un minimal.', 'Parte de cualquier elemento y baja por el diagrama mientras puedas. Como es finito y no hay ciclos (antisimétrica), acabas parando en un elemento sin nadie debajo: un minimal.', 'Start from any element and go down the diagram as long as you can. Since it is finite and there are no cycles (antisymmetric), you end up stopping at an element with nobody below: a minimal element.')],
    [true, () => L('Si un conjunt ordenat finit té un únic element minimal, aquest element és el mínim.', 'Si un conjunto ordenado finito tiene un único elemento minimal, ese elemento es el mínimo.', 'If a finite ordered set has a single minimal element, that element is the minimum.'), () => L('Des de qualsevol $x$, baixant pel diagrama s\'arriba a un minimal, que ha de ser l\'únic, $m$: per tant $m ≼ x$ per a tot $x$. Amb conjunts infinits pot fallar.', 'Desde cualquier $x$, bajando por el diagrama se llega a un minimal, que tiene que ser el único, $m$: por tanto $m ≼ x$ para todo $x$. Con conjuntos infinitos puede fallar.', 'From any $x$, going down the diagram you reach a minimal element, which must be the only one, $m$: so $m ≼ x$ for every $x$. With infinite sets it can fail.')],
    [false, () => L('Tot element maximal és un màxim.', 'Todo elemento maximal es un máximo.', 'Every maximal element is a maximum.'), () => L('A $\\{2, 3\\}$ amb la divisibilitat, 2 i 3 són maximals (cap no divideix l\'altre) i no hi ha màxim.', 'En $\\{2, 3\\}$ con la divisibilidad, 2 y 3 son maximales (ninguno divide al otro) y no hay máximo.', 'In $\\{2, 3\\}$ with divisibility, 2 and 3 are maximal (neither divides the other) and there is no maximum.')],
    [true, () => L('Si un conjunt ordenat té màxim, aquest és l\'únic element maximal.', 'Si un conjunto ordenado tiene máximo, este es el único elemento maximal.', 'If an ordered set has a maximum, it is the only maximal element.'), () => L('Si $M$ és el màxim i $x$ és maximal, $x ≼ M$; com que $x$ és maximal, $x = M$.', 'Si $M$ es el máximo y $x$ es maximal, $x ≼ M$; como $x$ es maximal, $x = M$.', 'If $M$ is the maximum and $x$ is maximal, $x ≼ M$; since $x$ is maximal, $x = M$.')],
    [false, () => L('Si dos elements no estan units per cap fletxa del diagrama de Hasse, no són comparables.', 'Si dos elementos no están unidos por ninguna flecha del diagrama de Hasse, no son comparables.', 'If two elements are not joined by any arrow of the Hasse diagram, they are not comparable.'), () => L('Poden estar units per un camí: a $D(8)$ no hi ha la fletxa $1 → 8$, però $1 → 2 → 4 → 8$ i $1 | 8$.', 'Pueden estar unidos por un camino: en $D(8)$ no está la flecha $1 → 8$, pero $1 → 2 → 4 → 8$ y $1 | 8$.', 'They can be joined by a path: in $D(8)$ the arrow $1 → 8$ is not there, but $1 → 2 → 4 → 8$ and $1 | 8$.')],
    [true, () => L('Dos elements minimals diferents no són mai comparables.', 'Dos elementos minimales distintos nunca son comparables.', 'Two distinct minimal elements are never comparable.'), () => L('Si $a ≼ b$ amb $a ≠ b$, $a$ seria a sota de $b$ i $b$ no seria minimal.', 'Si $a ≼ b$ con $a ≠ b$, $a$ estaría debajo de $b$ y $b$ no sería minimal.', 'If $a ≼ b$ with $a ≠ b$, $a$ would be below $b$ and $b$ would not be minimal.')],
    [false, () => L('El suprem d\'un subconjunt $B$, si existeix, pertany a $B$.', 'El supremo de un subconjunto $B$, si existe, pertenece a $B$.', 'The supremum of a subset $B$, if it exists, belongs to $B$.'), () => L('A $(D(6), |)$, el suprem de $B = \\{2, 3\\}$ és $6 ∉ B$.', 'En $(D(6), |)$, el supremo de $B = \\{2, 3\\}$ es $6 ∉ B$.', 'In $(D(6), |)$, the supremum of $B = \\{2, 3\\}$ is $6 ∉ B$.')],
    [true, () => L('A $(D(n), |)$, el suprem de $\\{a, b\\}$ és $mcm(a, b)$.', 'En $(D(n), |)$, el supremo de $\\{a, b\\}$ es $mcm(a, b)$.', 'In $(D(n), |)$, the supremum of $\\{a, b\\}$ is $lcm(a, b)$.'), () => L('$x$ és cota superior $⟺$ $a | x$ i $b | x$ $⟺$ $mcm(a, b) | x$. A més, $mcm(a, b) | n$, així que és de $D(n)$ i és la cota superior més petita.', '$x$ es cota superior $⟺$ $a | x$ y $b | x$ $⟺$ $mcm(a, b) | x$. Además, $mcm(a, b) | n$, así que está en $D(n)$ y es la cota superior más pequeña.', '$x$ is an upper bound $⟺$ $a | x$ and $b | x$ $⟺$ $lcm(a, b) | x$. Moreover, $lcm(a, b) | n$, so it is in $D(n)$ and it is the smallest upper bound.')],
    [true, () => L('$(ℕ, |)$ té mínim.', '$(ℕ, |)$ tiene mínimo.', '$(ℕ, |)$ has a minimum.'), () => L('1 divideix tots els naturals.', '1 divide a todos los naturales.', '1 divides every natural number.')],
    [false, () => L('$(ℕ, ≤)$ té algun element maximal.', '$(ℕ, ≤)$ tiene algún elemento maximal.', '$(ℕ, ≤)$ has some maximal element.'), () => L('Per a cada $n$, $n + 1$ és més gran.', 'Para cada $n$, $n + 1$ es mayor.', 'For each $n$, $n + 1$ is greater.')],
    [false, () => L('Un ordre amb un únic minimal i un únic maximal és total.', 'Un orden con un único minimal y un único maximal es total.', 'An order with a single minimal and a single maximal element is total.'), () => L('A $(D(6), |)$ hi ha mínim (1) i màxim (6), però 2 i 3 no són comparables.', 'En $(D(6), |)$ hay mínimo (1) y máximo (6), pero 2 y 3 no son comparables.', 'In $(D(6), |)$ there is a minimum (1) and a maximum (6), but 2 and 3 are not comparable.')],
    [true, () => L('El diagrama de Hasse de $(𝒫(\\{1, 2, 3\\}), ⊆)$ té 12 fletxes.', 'El diagrama de Hasse de $(𝒫(\\{1, 2, 3\\}), ⊆)$ tiene 12 flechas.', 'The Hasse diagram of $(𝒫(\\{1, 2, 3\\}), ⊆)$ has 12 arrows.'), () => L('Cada subconjunt té una fletxa per cada element que li falta: $3 + 3 · 2 + 3 · 1 = 12$.', 'Cada subconjunto tiene una flecha por cada elemento que le falta: $3 + 3 · 2 + 3 · 1 = 12$.', 'Each subset has one arrow for each element it is missing: $3 + 3 · 2 + 3 · 1 = 12$.')],
    [true, () => L('Si $p$ és primer, el diagrama de Hasse de $(D(p^{k}), |)$ és una cadena.', 'Si $p$ es primo, el diagrama de Hasse de $(D(p^{k}), |)$ es una cadena.', 'If $p$ is prime, the Hasse diagram of $(D(p^{k}), |)$ is a chain.'), () => L('Els divisors són $1 | p | p^{2} | … | p^{k}$: tots són comparables.', 'Los divisores son $1 | p | p^{2} | … | p^{k}$: todos son comparables.', 'The divisors are $1 | p | p^{2} | … | p^{k}$: they are all comparable.')],
    [false, () => L('A $\\{1, 2\\} × \\{1, 2\\}$ amb l\'ordre producte, $(1, 2)$ i $(2, 1)$ són comparables.', 'En $\\{1, 2\\} × \\{1, 2\\}$ con el orden producto, $(1, 2)$ y $(2, 1)$ son comparables.', 'In $\\{1, 2\\} × \\{1, 2\\}$ with the product order, $(1, 2)$ and $(2, 1)$ are comparable.'), () => L('Caldria $1 ≤ 2$ i $2 ≤ 1$, o bé $2 ≤ 1$ i $1 ≤ 2$: cap de les dues opcions es compleix.', 'Haría falta $1 ≤ 2$ y $2 ≤ 1$, o bien $2 ≤ 1$ y $1 ≤ 2$: ninguna de las dos opciones se cumple.', 'We would need $1 ≤ 2$ and $2 ≤ 1$, or $2 ≤ 1$ and $1 ≤ 2$: neither option holds.')],
    [false, () => L('$(ℕ ∖ \\{1\\}, |)$ té mínim.', '$(ℕ ∖ \\{1\\}, |)$ tiene mínimo.', '$(ℕ ∖ \\{1\\}, |)$ has a minimum.'), () => L('Els primers són minimals (només els divideixen 1 i ells mateixos) i n\'hi ha més d\'un: 2 i 3 no són comparables.', 'Los primos son minimales (solo los dividen 1 y ellos mismos) y hay más de uno: 2 y 3 no son comparables.', 'The primes are minimal (only 1 and themselves divide them) and there is more than one: 2 and 3 are not comparable.')],
    [false, () => L('La relació $<$ a $ℕ$ és una relació d\'ordre.', 'La relación $<$ en $ℕ$ es una relación de orden.', 'The relation $<$ on $ℕ$ is an order relation.'), () => L('No és reflexiva ($1 < 1$ és fals). És un ordre estricte: antireflexiva, antisimètrica i transitiva.', 'No es reflexiva ($1 < 1$ es falso). Es un orden estricto: antirreflexiva, antisimétrica y transitiva.', 'It is not reflexive ($1 < 1$ is false). It is a strict order: irreflexive, antisymmetric and transitive.')],
    [true, () => L('Si un ordre és total, de cada element surt com a màxim una fletxa del diagrama de Hasse.', 'Si un orden es total, de cada elemento sale como máximo una flecha del diagrama de Hasse.', 'If an order is total, at most one arrow of the Hasse diagram leaves each element.'), () => L('En un ordre total el diagrama és una cadena: cada element només està cobert pel següent.', 'En un orden total el diagrama es una cadena: cada elemento solo está cubierto por el siguiente.', 'In a total order the diagram is a chain: each element is only covered by the next one.')],
    [true, () => L('Un conjunt ordenat pot tenir infinits elements minimals.', 'Un conjunto ordenado puede tener infinitos elementos minimales.', 'An ordered set can have infinitely many minimal elements.'), () => L('A $(ℕ ∖ \\{1\\}, |)$ tots els primers són minimals, i n\'hi ha infinits.', 'En $(ℕ ∖ \\{1\\}, |)$ todos los primos son minimales, y hay infinitos.', 'In $(ℕ ∖ \\{1\\}, |)$ all the primes are minimal, and there are infinitely many.')]
  ];
  function bkHzTFGen() {
    let pick; do { pick = Z.shuffle(HZTF).slice(0, 5); } while (pick.every(x => x[0]) || pick.every(x => !x[0]));
    return {
      q: () => md(L('Digues si cada afirmació és certa o falsa. Si és falsa, busca un contraexemple petit.', 'Di si cada afirmación es cierta o falsa. Si es falsa, busca un contraejemplo pequeño.', 'Say whether each statement is true or false. If it is false, look for a small counterexample.')),
      hint: () => P(L('Els contraexemples més útils: $\\{2, 3\\}$ amb la divisibilitat (dos elements incomparables), $D(6)$ (un rombe) i $(ℕ, ≤)$ (infinit).', 'Los contraejemplos más útiles: $\\{2, 3\\}$ con la divisibilidad (dos elementos incomparables), $D(6)$ (un rombo) y $(ℕ, ≤)$ (infinito).', 'The most useful counterexamples: $\\{2, 3\\}$ with divisibility (two incomparable elements), $D(6)$ (a rhombus) and $(ℕ, ≤)$ (infinite).')),
      fx: HZFX.conc,
      sol: () => pick.map(([v, t, w]) => kT(md(t()), md((v ? L('<b>Cert.</b> ', '<b>Cierto.</b> ', '<b>True.</b> ') : L('<b>Fals.</b> ', '<b>Falso.</b> ', '<b>False.</b> ')) + w()), v ? 'done' : 'neg')),
      a: { k: 'tf', items: pick.map(([v, t]) => ({ t: () => md(t()), v })) }
    };
  }

  /* ---------- registre del tema ---------- */
  BKT.hasse = { n: () => L('Ordres i Hasse', 'Órdenes y Hasse', 'Orders and Hasse diagrams'), lv: {
    1: [{ n: () => L('Fletxes del Hasse de D(n)', 'Flechas del Hasse de D(n)', 'Hasse arrows of D(n)'), g: bkHzDivCovGen }, { n: () => L('Llegir el diagrama', 'Leer el diagrama', 'Reading the diagram'), g: bkHzReadGen }, { n: () => L('Minimals i maximals al dibuix', 'Minimales y maximales en el dibujo', 'Minimal and maximal in the drawing'), g: bkHzExtrGen }, { n: () => L('Esborrar dreceres', 'Borrar atajos', 'Deleting shortcuts'), g: bkHzPruneGen }, { n: () => L('Total o parcial', 'Total o parcial', 'Total or partial'), g: bkHzTotalGen }],
    2: [{ n: () => L('Hasse d\'un subconjunt', 'Hasse de un subconjunto', 'Hasse diagram of a subset'), g: bkHzDivSubGen }, { n: () => L('Del graf al Hasse', 'Del grafo al Hasse', 'From the graph to the Hasse diagram'), g: bkHzGraphGen }, { n: () => L('Família de subconjunts', 'Familia de subconjuntos', 'Family of subsets'), g: bkHzFamGen }, { n: () => L('Ordre producte', 'Orden producto', 'Product order'), g: bkHzProdGen }, { n: () => L('Comptar parelles', 'Contar pares', 'Counting pairs'), g: bkHzCountGen }],
    3: [{ n: () => L('Suprem i ínfim a D(n)', 'Supremo e ínfimo en D(n)', 'Supremum and infimum in D(n)'), g: bkHzDivBoundsGen }, { n: () => L('Suprem que pot no existir', 'Supremo que puede no existir', 'A supremum that may not exist'), g: bkHzSubBoundsGen }, { n: () => L('Construeix l\'ordre', 'Construye el orden', 'Build the order'), g: bkHzBuildGen }, { n: () => L('Mateix diagrama?', '¿Mismo diagrama?', 'Same diagram?'), g: bkHzIsoGen }, { n: () => L('Cert o fals sobre ordres', 'Cierto o falso sobre órdenes', 'True or false about orders'), g: bkHzTFGen }]
  } };
  BKORD.splice(BKORD.indexOf('rel') + 1, 0, 'hasse');
  return { hzDivP, hzSubLab, hzSubP, hzBits, hzProdP, hzRand, hzLetters, hzTx, hzSetTx, hzPairs, hzArrows, hzUp, hzLong, hzInc, hzRowMax, hzPath, hzParse, hzSameCov, HZH, hzSVG, hzLeg, HZFX, bkHzDivCovGen, bkHzReadGen, bkHzExtrGen, hzNamed, bkHzPruneGen, hzChainOpt, hzNonChainOpt, bkHzTotalGen, bkHzDivSubGen, bkHzGraphGen, bkHzFamGen, bkHzProdGen, bkHzCountGen, bkHzDivBoundsGen, hzSupIn, bkHzSubBoundsGen, hzClosure, HZPROP, hzPropTx, bkHzBuildGen, HZSIG, hzShape, hzStruct, hzRandStruct, bkHzIsoGen, HZTF, bkHzTFGen };
}
