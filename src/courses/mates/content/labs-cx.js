import { Z } from '../engine/z.js';

/**
 * Ajudes dels laboratoris de complexos: pla complex, argument amb la fórmula del material, arrels i polinomis.
 * Codi original; l'idioma i les dependències arriben pel contenidor $ (un per idioma).
 */
export function makeLabsCx($) {
  const { L, fmt } = $;
  const CU = 36, CO = 210;
  const cP = z => [CO + z.re * CU, CO - z.im * CU];
  const snapH = v => Math.max(-5.5, Math.min(5.5, Math.round(v * 2) / 2));
  function sqrtTx(N) {   // √N exacte quan 4N és enter
    const q = Math.round(N * 4); if (Math.abs(q - N * 4) > 1e-9) return fmt(Math.sqrt(N), 4);
    const intN = q % 4 === 0;
    const [o, i] = Z.sqfree(intN ? q / 4 : q);
    const core = i === 1 ? String(o) : (o === 1 ? '' : o) + '\\sq{' + i + '}';
    if (intN) return core;
    if (i === 1) return Z.fracTx(o, 2);
    return '\\fr{' + core + '}{2}';
  }
  function angTxR(rad) {   // angle en radians: π-fracció si és bonic
    const deg = rad * 180 / Math.PI, r = Math.round(deg);
    if (Math.abs(deg - r) < 1e-6 && r % 15 === 0) return Z.piTx(r, 180);
    return fmt(rad, 4);
  }
  const degTx = rad => fmt(rad * 180 / Math.PI, 2) + '°';
  function planeSVG(inner, extra) {
    let g = '';
    for (let k = -5; k <= 5; k++) { const p = CO + k * CU; g += '<line class="g" x1="' + p + '" y1="12" x2="' + p + '" y2="408"/><line class="g" x1="12" y1="' + p + '" x2="408" y2="' + p + '"/>'; if (k && k % 1 === 0) g += '<text x="' + (p - 3) + '" y="' + (CO + 13) + '">' + String(k).replace('-', '−') + '</text><text x="' + (CO + 4) + '" y="' + (CO - k * CU + 4) + '">' + String(k).replace('-', '−') + 'i</text>'; }
    g += '<line class="ax" x1="8" y1="' + CO + '" x2="412" y2="' + CO + '"/><line class="ax" x1="' + CO + '" y1="8" x2="' + CO + '" y2="412"/><text x="396" y="' + (CO - 6) + '">Re</text><text x="' + (CO + 6) + '" y="20">Im</text>';
    return '<svg class="cp" viewBox="0 0 420 420" role="img" aria-label="' + L('Pla complex', 'Plano complejo', 'Complex plane') + '">' + (extra || '') + g + inner + '</svg>';
  }
  function vec(z, cls, lab, dx, dy) { const [x, y] = cP(z); return '<line class="' + cls + '" x1="' + CO + '" y1="' + CO + '" x2="' + x + '" y2="' + y + '"/>' + (lab ? '<text class="lb" x="' + (x + (dx || 8)) + '" y="' + (y + (dy || -8)) + '">' + lab + '</text>' : ''); }
  function arcPath(r, a0, a1) { const p0 = [CO + r * Math.cos(a0), CO - r * Math.sin(a0)], p1 = [CO + r * Math.cos(a1), CO - r * Math.sin(a1)]; const large = Math.abs(a1 - a0) > Math.PI ? 1 : 0, sweep = a1 > a0 ? 0 : 1; return '<path class="arc" d="M' + p0[0] + ' ' + p0[1] + ' A' + r + ' ' + r + ' 0 ' + large + ' ' + sweep + ' ' + p1[0] + ' ' + p1[1] + '"/>'; }
  const inPlane = z => Math.abs(z.re) <= 5.6 && Math.abs(z.im) <= 5.6;
  function zTx(z) { return Z.fmtC(z, 3); }
  function argSteps(z) {   // passos de la fórmula del material
    const a = z.re, b = z.im, m2 = a * a + b * b, mt = sqrtTx(m2), mod = Math.sqrt(m2), out = [];
    const pr = v => v < 0 ? '(' + fmt(v, 2) + ')' : fmt(v, 2);
    out.push({ h: L('Mòdul', 'Módulo', 'Modulus'), m: '|z| = \\sq{a^{2} + b^{2}} = \\sq{' + pr(a) + '^{2} + ' + pr(b) + '^{2}} = \\sq{' + fmt(m2, 4) + '} = ' + mt + (/\\/.test(mt) ? ' ≈ ' + fmt(mod, 4) : '') });
    if (Math.abs(b) > 1e-12) {
      const t = (mod - a) / b, al = 2 * Math.atan(t);
      out.push({ h: L('Argument (b ≠ 0)', 'Argumento (b ≠ 0)', 'Argument (b ≠ 0)'), m: 'α = 2 · arctan(\\fr{|z| − a}{b}) = 2 · arctan(\\fr{' + mt + ' − ' + pr(a) + '}{' + fmt(b, 2) + '}) = 2 · arctan(' + fmt(t, 4) + ')', w: L('És la fórmula del material: funciona igual a tots els quadrants.', 'Es la fórmula del material: funciona igual en todos los cuadrantes.', 'It is the formula from the course material: it works the same in every quadrant.') });
      out.push({ h: '', m: 'α = ' + angTxR(al) + (angTxR(al) !== fmt(al, 4) ? ' ≈ ' + fmt(al, 4) : '') + ' rad = ' + degTx(al) + (al < 0 ? '   (' + L('o bé', 'o bien', 'or') + ' ' + angTxR(al + 2 * Math.PI) + ' ' + L('a', 'en', 'in') + ' [0, 2π))' : '') });
      return { out, al, mod, mt };
    }
    if (a > 0) out.push({ h: L('Argument (b = 0, a > 0)', 'Argumento (b = 0, a > 0)', 'Argument (b = 0, a > 0)'), m: 'α = 0' });
    else if (a < 0) out.push({ h: L('Argument (b = 0, a < 0)', 'Argumento (b = 0, a < 0)', 'Argument (b = 0, a < 0)'), m: 'α = π' });
    else out.push({ h: L('Argument', 'Argumento', 'Argument'), m: 'z = 0 ⟹ α ' + L('indefinit', 'indefinido', 'undefined') });
    return { out, al: a > 0 ? 0 : a < 0 ? Math.PI : NaN, mod, mt };
  }
  const RTPRE = [[81, 0, 'x^{4} − 81 = 0', 4], [16, 0, 'x^{4} = 16', 4], [-1, 0, 'x^{2} = −1', 2], [0, 1, 'x^{2} = i', 2], [8, 0, 'x^{3} = 8', 3], [-8, 0, 'x^{3} = −8', 3], [1, 0, 'x^{6} = 1', 6]];

  /* ---------- arrels d'un polinomi i factorització ---------- */
  const POLYS = [
    { p: 'x^{4} − 81', src: 'CP2-2025 · ex. 1', roots: [[3, 0, 1, '3', 'N', '3_{0}'], [-3, 0, 1, '−3', 'Z', '3_{π}'], [0, 3, 1, '3i', 'C', '3_{\\fr{π}{2}}'], [0, -3, 1, '−3i', 'C', '3_{−\\fr{π}{2}}']], fc: '(x − 3)(x + 3)(x − 3i)(x + 3i)', fr: '(x − 3)(x + 3)(x^{2} + 9)',
      how: () => L('x⁴ − 81 = 0 ⟺ x⁴ = 81 = 81_{0}: arrels quartes de 81, mòdul ∜81 = 3 i angles 0, π/2, π, 3π/2.', 'x⁴ − 81 = 0 ⟺ x⁴ = 81 = 81_{0}: raíces cuartas de 81, módulo ∜81 = 3 y ángulos 0, π/2, π, 3π/2.', 'x⁴ − 81 = 0 ⟺ x⁴ = 81 = 81_{0}: fourth roots of 81, modulus ∜81 = 3 and angles 0, π/2, π, 3π/2.') },
    { p: 'x^{2} + 4', roots: [[0, 2, 1, '2i', 'C', '2_{\\fr{π}{2}}'], [0, -2, 1, '−2i', 'C', '2_{−\\fr{π}{2}}']], fc: '(x − 2i)(x + 2i)', fr: 'x^{2} + 4', how: () => L('x² = −4: cap real, dues arrels imaginàries conjugades. A ℝ el polinomi és irreductible (grau 2).', 'x² = −4: ningún real, dos raíces imaginarias conjugadas. En ℝ el polinomio es irreducible (grado 2).', 'x² = −4: no real root, two conjugate imaginary roots. Over ℝ the polynomial is irreducible (degree 2).') },
    { p: 'x^{2} − 2x + 5', roots: [[1, 2, 1, '1 + 2i', 'C', '\\sq{5}_{1.1071}'], [1, -2, 1, '1 − 2i', 'C', '\\sq{5}_{−1.1071}']], fc: '(x − 1 − 2i)(x − 1 + 2i)', fr: 'x^{2} − 2x + 5', how: () => L('Fórmula de segon grau: x = (2 ± √(4 − 20))/2 = 1 ± 2i.', 'Fórmula de segundo grado: x = (2 ± √(4 − 20))/2 = 1 ± 2i.', 'Quadratic formula: x = (2 ± √(4 − 20))/2 = 1 ± 2i.') },
    { p: 'x^{3} − 8', roots: [[2, 0, 1, '2', 'N', '2_{0}'], [-1, Math.sqrt(3), 1, '−1 + \\sq{3}i', 'C', '2_{\\fr{2π}{3}}'], [-1, -Math.sqrt(3), 1, '−1 − \\sq{3}i', 'C', '2_{−\\fr{2π}{3}}']], fc: '(x − 2)(x + 1 − \\sq{3}i)(x + 1 + \\sq{3}i)', fr: '(x − 2)(x^{2} + 2x + 4)', how: () => L('Arrels cúbiques de 8 = 8_{0}: mòdul 2 i angles 0, 2π/3, 4π/3.', 'Raíces cúbicas de 8 = 8_{0}: módulo 2 y ángulos 0, 2π/3, 4π/3.', 'Cube roots of 8 = 8_{0}: modulus 2 and angles 0, 2π/3, 4π/3.') },
    { p: 'x^{4} − 1', roots: [[1, 0, 1, '1', 'N', '1_{0}'], [-1, 0, 1, '−1', 'Z', '1_{π}'], [0, 1, 1, 'i', 'C', '1_{\\fr{π}{2}}'], [0, -1, 1, '−i', 'C', '1_{−\\fr{π}{2}}']], fc: '(x − 1)(x + 1)(x − i)(x + i)', fr: '(x − 1)(x + 1)(x^{2} + 1)', how: () => L('Arrels quartes de 1.', 'Raíces cuartas de 1.', 'Fourth roots of 1.') },
    { p: '(x − 1)^{2}(x^{2} + 1)', roots: [[1, 0, 2, '1', 'N', '1_{0}'], [0, 1, 1, 'i', 'C', '1_{\\fr{π}{2}}'], [0, -1, 1, '−i', 'C', '1_{−\\fr{π}{2}}']], fc: '(x − 1)^{2}(x − i)(x + i)', fr: '(x − 1)^{2}(x^{2} + 1)', how: () => L('Grau 4 però només 3 arrels diferents: x = 1 té multiplicitat 2, perquè (x − 1)² divideix el polinomi i el que queda, x² + 1, no s\'anul·la a 1.', 'Grado 4 pero solo 3 raíces distintas: x = 1 tiene multiplicidad 2, porque (x − 1)² divide el polinomio y lo que queda, x² + 1, no se anula en 1.', 'Degree 4 but only 3 distinct roots: x = 1 has multiplicity 2, because (x − 1)² divides the polynomial and what is left, x² + 1, does not vanish at 1.') },
    { p: 'x^{2} − 2', roots: [[Math.SQRT2, 0, 1, '\\sq{2}', 'I', '\\sq{2}_{0}'], [-Math.SQRT2, 0, 1, '−\\sq{2}', 'I', '\\sq{2}_{π}']], fc: '(x − \\sq{2})(x + \\sq{2})', fr: '(x − \\sq{2})(x + \\sq{2})', how: () => L('Arrels reals però irracionals.', 'Raíces reales pero irracionales.', 'Real but irrational roots.') }
  ];
  return { CU, CO, cP, snapH, sqrtTx, angTxR, degTx, planeSVG, vec, arcPath, inPlane, zTx, argSteps, RTPRE, POLYS };
}
