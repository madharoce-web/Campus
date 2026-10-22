import { Z } from '../engine/z.js';

/**
 * Ajudes dels laboratoris del tema 1 (conjunts): capses, comprensió, parts, Venn, particions i producte cartesià.
 * Codi original; l'idioma i les dependències arriben pel contenidor $ (un per idioma).
 */
export function makeLabsConj($) {
  const { L, M, esc, uid } = $;
  const NSY = { N: 'ℕ', Z: 'ℤ', Q: 'ℚ', R: 'ℝ', C: 'ℂ' };

  /* ---------- ∅, {∅}, … com a caixes ---------- */
  function hbox(c) { const els = Z.helems(c); if (!els.length) return '<span class="hb empty">∅</span>'; return '<span class="hb">' + els.map(hbox).join('') + '</span>'; }
  function hAst(s) {
    s = String(s).replace(/\s+/g, '').replace(/[Ø]/g, '∅').replace(/\\/g, '∖').replace(/-/g, '∖'); let p = 0;
    function lit() {
      if (s[p] === '∅') { p++; return { o: 'l', v: '∅' }; }
      if (s[p] === '{') { let d = 0, q = p; for (; q < s.length; q++) { if (s[q] === '{') d++; else if (s[q] === '}') { d--; if (!d) break; } } const t = s.slice(p, q + 1); p = q + 1; return { o: 'l', v: Z.hparse(t) }; }
      if (s[p] === '(') { p++; const v = E(); if (s[p++] !== ')') throw new Error(')'); v.par = true; return v; }
      throw new Error(L('No entenc el conjunt', 'No entiendo el conjunto'));
    }
    function E() { let v = lit(); while (p < s.length && '∪∩∖'.includes(s[p])) { const o = s[p++]; v = { o, a: v, b: lit() }; } return v; }
    const v = E(); if (p !== s.length) throw new Error(L('Sobra text al final', 'Sobra texto al final')); return v;
  }
  function hEval(n) { if (n.o === 'l') return n.v; const a = hEval(n.a), b = hEval(n.b); return n.o === '∪' ? Z.hU(a, b) : n.o === '∩' ? Z.hI(a, b) : Z.hD(a, b); }
  function hShow(n) { if (n.o === 'l') return n.v; const s = hShow(n.a) + ' ' + n.o + ' ' + hShow(n.b); return n.par ? '(' + s + ')' : s; }

  const EX2 = ['{∅, {∅}} ∪ {{∅}}', '{∅, {∅}} ∩ {{∅}}', '{∅, {∅}} ∖ {{∅}}', '({∅} ∪ {∅}) ∖ ∅', '({∅} ∪ {∅}) ∖ {∅}', '∅ ∪ ∅', '{∅} ∪ ∅', '{∅, {∅}} ∪ {∅}'];

  /* ---------- conjunts per comprensió ---------- */
  function sqrtParts(k) { const r = Math.round(Math.sqrt(Math.abs(k))); return r * r === Math.abs(k) ? { exact: true, r } : { exact: false, r: Math.sqrt(Math.abs(k)) }; }
  function eqCands(k) {   // solucions de x^2 = k a ℂ, amb el conjunt més petit
    if (k === 0) return [{ t: '0', v: 0, re: true, kind: 'Z0' }];
    const q = sqrtParts(k);
    if (k > 0) return q.exact ? [{ t: String(q.r), v: q.r, re: true, kind: 'N' }, { t: '−' + q.r, v: -q.r, re: true, kind: 'Z' }]
      : [{ t: '\\sq{' + k + '}', v: q.r, re: true, kind: 'R' }, { t: '−\\sq{' + k + '}', v: -q.r, re: true, kind: 'R' }];
    const im = q.exact ? (q.r === 1 ? 'i' : q.r + 'i') : '\\sq{' + (-k) + '}·i';
    return [{ t: im, v: null, re: false, kind: 'C' }, { t: '−' + im, v: null, re: false, kind: 'C' }];
  }
  function memberWhy(c, U) {
    const R = { N: 0, Z0: 1, Z: 1, Q: 2, R: 3, C: 4 }[c.kind], need = { N: 0, Z: 1, Q: 2, R: 3, C: 4 }[U];
    const ok = R <= need;
    let why;
    if (ok) why = { N: L('és un natural', 'es un natural'), Z0: L('és un enter', 'es un entero'), Z: L('és un enter', 'es un entero'), R: L('és real', 'es real'), C: L('és complex', 'es complejo') }[c.kind];
    else if (c.kind === 'Z0') why = L('al curs ℕ = {1, 2, 3, …}: el 0 no és natural', 'en el curso ℕ = {1, 2, 3, …}: el 0 no es natural');
    else if (c.kind === 'Z') why = L('és negatiu i ℕ només té positius', 'es negativo y ℕ solo tiene positivos');
    else if (c.kind === 'R') why = L('és irracional: no és cap quocient m/n', 'es irracional: no es ningún cociente m/n');
    else why = L('no és real: el seu quadrat és negatiu', 'no es real: su cuadrado es negativo');
    return { ok, why };
  }
  const IMG = {
    h: { dom: [1, 3, 5, 7, 9, 11], f: n => n % 2 ? -1 : 1, ft: n => '(−1)^{' + n + '}', more: true },
    i: { dom: [1, 2, 4, -4, -55, 0], f: n => n * n * n, ft: n => '(' + String(n).replace('-', '−') + ')^{3}' },
    j: { dom: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], f: n => [1, n], ft: n => '\\fr{1}{' + n + '}' },
    q: { dom: [-2, -1, 0, 1, 2], f: n => n * n, ft: n => '(' + String(n).replace('-', '−') + ')^{2}' }
  };

  /* ---------- 𝒫(A): pertinença contra inclusió ---------- */
  const PA = { '0': [], 'a': ['a'], 'ab': ['a', 'b'], '123': ['1', '2', '3'] };
  const setTx = arr => arr.length ? '\\{' + arr.join(', ') + '\\}' : '∅';
  function tfItems(A) {
    const n = A.length, x = A[0], y = n === 3 ? '4' : 'c', At = setTx(A), out = [];
    const add = (s, v, why) => out.push({ s, v, why });
    if (n) {
      add(x + ' ∈ ' + At, true, L('x és un dels elements de la llista.', 'x es uno de los elementos de la lista.'));
      add('\\{' + x + '\\} ∈ ' + At, false, L('els elements d\'A són ' + A.join(', ') + ', no conjunts. {' + x + '} no és a la llista.', 'los elementos de A son ' + A.join(', ') + ', no conjuntos. {' + x + '} no está en la lista.'));
      add('\\{' + x + '\\} ⊆ ' + At, true, L('l\'únic element de {' + x + '} és ' + x + ', i ' + x + ' ∈ A.', 'el único elemento de {' + x + '} es ' + x + ', y ' + x + ' ∈ A.'));
      add(x + ' ∈ 𝒫(A)', false, L('els elements de 𝒫(A) són conjunts (subconjunts d\'A); ' + x + ' és un nombre.', 'los elementos de 𝒫(A) son conjuntos (subconjuntos de A); ' + x + ' es un número.'));
      add('\\{' + x + '\\} ∈ 𝒫(A)', true, L('B ∈ 𝒫(A) ⟺ B ⊆ A, i {' + x + '} ⊆ A.', 'B ∈ 𝒫(A) ⟺ B ⊆ A, y {' + x + '} ⊆ A.'));
      add('\\{' + x + ', ' + y + '\\} ⊆ ' + At, false, L(y + ' ∈ {' + x + ', ' + y + '} però ' + y + ' ∉ A: un sol element que falla trenca la inclusió.', y + ' ∈ {' + x + ', ' + y + '} pero ' + y + ' ∉ A: un solo elemento que falla rompe la inclusión.'));
      add('A ⊆ 𝒫(A)', false, L(x + ' ∈ A però ' + x + ' ∉ 𝒫(A), perquè 𝒫(A) només conté conjunts.', x + ' ∈ A pero ' + x + ' ∉ 𝒫(A), porque 𝒫(A) solo contiene conjuntos.'));
      add('∅ ∈ ' + At, false, L('cap element d\'A és el conjunt buit.', 'ningún elemento de A es el conjunto vacío.'));
      add('∅ ⊊ ' + At, false, L('la definició de classe de subconjunt propi demana A ≠ ∅: el buit queda exclòs.', 'la definición de clase de subconjunto propio pide A ≠ ∅: el vacío queda excluido.'));
      add('A ⊊ A', false, L('propi demana A ≠ B, i aquí són el mateix conjunt.', 'propio pide A ≠ B, y aquí son el mismo conjunto.'));
    }
    if (n >= 2) add('\\{' + x + '\\} ⊊ ' + At, true, L('{' + x + '} ⊆ A, no és buit i és diferent d\'A.', '{' + x + '} ⊆ A, no es vacío y es distinto de A.'));
    add('∅ ∈ 𝒫(A)', true, L('∅ ⊆ A sempre, per tant ∅ és un element de 𝒫(A).', '∅ ⊆ A siempre, por tanto ∅ es un elemento de 𝒫(A).'));
    add('∅ ⊆ 𝒫(A)', true, L('el buit és subconjunt de qualsevol conjunt.', 'el vacío es subconjunto de cualquier conjunto.'));
    add('A ∈ 𝒫(A)', true, L('A ⊆ A, per tant A és un dels subconjunts.', 'A ⊆ A, por tanto A es uno de los subconjuntos.'));
    add('\\{∅\\} ⊆ 𝒫(A)', true, L('l\'únic element de {∅} és ∅, i ∅ ∈ 𝒫(A).', 'el único elemento de {∅} es ∅, y ∅ ∈ 𝒫(A).'));
    add('|𝒫(A)| = ' + (1 << n), true, L('|𝒫(A)| = 2^{|A|} = 2^' + n + '.', '|𝒫(A)| = 2^{|A|} = 2^' + n + '.'));
    if (n) add('\\{∅\\} ∈ 𝒫(A)', false, L('{∅} ∈ 𝒫(A) voldria dir {∅} ⊆ A, és a dir ∅ ∈ A, i no és cert.', '{∅} ∈ 𝒫(A) querría decir {∅} ⊆ A, es decir ∅ ∈ A, y no es cierto.'));
    else add('𝒫(∅) = ∅', false, L('𝒫(∅) = {∅}: té un element, el buit.', '𝒫(∅) = {∅}: tiene un elemento, el vacío.'));
    return out;
  }

  /* ---------- Venn ---------- */
  const VG = {
    3: { c: [[115, 95, 62], [185, 95, 62], [150, 150, 60]], lab: [[46, 40, 'A'], [254, 40, 'B'], [226, 224, 'C']], rc: { 0: [28, 224], 4: [86, 80], 2: [214, 80], 1: [150, 194], 6: [150, 63], 5: [112, 141], 3: [188, 141], 7: [150, 113] } },
    2: { c: [[115, 120, 74], [185, 120, 74]], lab: [[38, 40, 'A'], [262, 40, 'B']], rc: { 0: [28, 224], 2: [80, 120], 1: [220, 120], 3: [150, 120] } }
  };
  const SETV = ['var(--setA)', 'var(--setB)', 'var(--setC)'];
  function vennSVG(k, mask, o) {
    o = o || {}; const g = VG[k], p = 'v' + (uid()) + '-';
    let defs = '';
    g.c.forEach(([x, y, r], j) => {
      defs += '<clipPath id="' + p + 'c' + j + '"><circle cx="' + x + '" cy="' + y + '" r="' + r + '"/></clipPath>' +
        '<mask id="' + p + 'm' + j + '" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="245"><rect x="0" y="0" width="300" height="245" fill="#fff"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#000"/></mask>';
    });
    const reg = (r, cls) => { let inner = '<rect x="5" y="5" width="290" height="235" class="' + cls + '"/>'; for (let j = k - 1; j >= 0; j--) { const on = (r >> (k - 1 - j)) & 1; inner = '<g ' + (on ? 'clip-path' : 'mask') + '="url(#' + p + (on ? 'c' : 'm') + j + ')">' + inner + '</g>'; } return inner; };
    let body = '';
    for (let r = 0; r < (1 << k); r++) if ((mask >> r) & 1) body += reg(r, o.cls || 'reg');
    if (o.sel != null) body += reg(o.sel, 'regsel');
    body += '<rect class="u" x="5" y="5" width="290" height="235" rx="6"/>';
    g.c.forEach(([x, y, r], j) => { body += '<circle class="o" cx="' + x + '" cy="' + y + '" r="' + r + '" style="stroke:' + SETV[j] + '"/>'; });
    if (!o.mini) { g.lab.forEach(([x, y, t]) => { body += '<text x="' + x + '" y="' + y + '" text-anchor="middle">' + t + '</text>'; }); body += '<text x="279" y="232" text-anchor="middle">Ω</text>'; }
    if (o.nums) Object.entries(g.rc).forEach(([r, [x, y]]) => { body += '<text class="rn" x="' + x + '" y="' + (y + 4) + '" text-anchor="middle">' + r + '</text>'; });
    return '<svg class="venn' + (o.mini ? ' mini' : '') + (o.hit ? ' hit' : '') + '" viewBox="0 0 300 245" role="img" aria-label="' + esc(o.label || 'Venn') + '"><defs>' + defs + '</defs>' + body + '</svg>';
  }
  function regionAt(k, x, y) { const g = VG[k]; let r = 0; g.c.forEach(([cx, cy, rr], j) => { if ((x - cx) ** 2 + (y - cy) ** 2 <= rr * rr) r |= 1 << (k - 1 - j); }); return r; }
  function svgPoint(svg, ev) { const pt = svg.createSVGPoint(); pt.x = ev.clientX; pt.y = ev.clientY; return pt.matrixTransform(svg.getScreenCTM().inverse()); }
  function toAuth(s) { return String(s).replace(/\s+/g, '').replace(/∪/g, '|').replace(/∩/g, '&').replace(/[∖\\]/g, '-').replace(/Ω/g, 'O').replace(/∅/g, '0').replace(/[ᶜ‾’]/g, "'").replace(/×/g, 'x'); }
  function sParse(s) { const n = Z.sparse(toAuth(s)); if (!Z.isBool(n)) throw new Error('×'); return n; }
  function subsOf(n, acc) { acc = acc || []; if (n.a) subsOf(n.a, acc); if (n.b) subsOf(n.b, acc); if (!['v', 'O', '0'].includes(n.o)) { const k = Z.disp(n); if (!acc.some(x => Z.disp(x) === k)) acc.push(n); } return acc; }
  const inR = (n, r, k) => (Z.smask(n, k) >> r) & 1;
  function regBits(r, k) { return 'ABC'.slice(0, k).split('').map((v, j) => 'x ' + (((r >> (k - 1 - j)) & 1) ? '∈ ' : '∉ ') + v); }
  function whyNode(n, r, k) {
    const v = inR(n, r, k), me = Z.disp(n), D = x => Z.disp(x);
    if (n.o === 'v') return M('x ' + (v ? '∈ ' : '∉ ') + n.v);
    if (n.o === 'O') return M('x ∈ Ω'); if (n.o === '0') return M('x ∉ ∅');
    const a = n.a ? inR(n.a, r, k) : 0, b = n.b ? inR(n.b, r, k) : 0, IN = (x, t) => M('x ' + (t ? '∈ ' : '∉ ') + D(x));
    const AND = L(' i ', ' y '), BEC = L(' perquè ', ' porque ');
    let r2;
    if (n.o === "'") r2 = IN(n.a, !v);
    else if (n.o === '&') r2 = v ? IN(n.a, 1) + AND + IN(n.b, 1) : (a ? IN(n.b, 0) : IN(n.a, 0));
    else if (n.o === '|') r2 = v ? (a ? IN(n.a, 1) : IN(n.b, 1)) : IN(n.a, 0) + AND + IN(n.b, 0);
    else if (n.o === '-') r2 = v ? IN(n.a, 1) + AND + IN(n.b, 0) : (a ? IN(n.b, 1) : IN(n.a, 0));
    else r2 = '';
    return M('x ' + (v ? '∈ ' : '∉ ') + me) + BEC + r2;
  }
  const VPRE = [
    ['3a', 'B∖A', 'B∩Aᶜ'], ['3b', '(A∖B)∖C', 'A∖(B∪C)'], ['4a', 'A∩(A∩B)ᶜ', 'A∩Bᶜ'], ['4b', '(Aᶜ∩B)∪(A∩B)∪(Aᶜ∩Bᶜ)', 'Aᶜ∪B'], ['4c', 'A∪(B∖C)', '(A∪B)∖(C∖A)'],
    ['CP1 1.1', '(A∪B)ᶜ∪(Aᶜ∩B)∪(A∩Bᶜ)', 'Aᶜ∪Bᶜ'], ['De Morgan', '(A∪B)ᶜ', 'Aᶜ∩Bᶜ'], ['Distrib.', 'A∩(B∪C)', '(A∩B)∪(A∩C)'], ['Absorció', 'A∩(A∪B)', 'A'],
    ['?', 'A∖(B∖C)', '(A∖B)∖C'], ['??', 'A∪(B∩C)', '(A∪B)∩C']
  ];

  /* ---------- particions ---------- */
  const PPRE = [
    ['ok', [[1, 2, 3], [4, 5, 6, 7], [8, 9, 10], []]], ['solap', [[1, 2, 3], [3, 4, 5, 6, 7], [8, 9, 10], []]], ['falta', [[1, 2, 3], [4, 5, 6], [], []]],
    ['par', [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9], [], []]], ['mod3', [[3, 6, 9], [1, 4, 7, 10], [2, 5, 8], []]]
  ];
  return { NSY, hbox, hAst, hEval, hShow, EX2, sqrtParts, eqCands, memberWhy, IMG, PA, setTx, tfItems, VG, SETV, vennSVG, regionAt, svgPoint, toAuth, sParse, subsOf, inR, regBits, whyNode, VPRE, PPRE };
}
