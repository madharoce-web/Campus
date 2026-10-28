import { Z } from '../engine/z.js';

/**
 * Banc · tema 2: arrels n-èssimes amb k i polinomis.
 * Codi original; l'idioma i les dependències arriben pel contenidor $ (un per idioma).
 */
export function makeBankArr($) {
  const { BKT, C, FXC, L, M, P, TBL, aTx, cxTx, degN, fxC, kDone, kF, kS, kT, md, ng, niceZ, rNum, rPow, rTx, ri } = $;
  /* ---------- BANC · TEMA 2: arrels n-èssimes amb k i polinomis ---------- */
  const NTHC = { 2: 'quadrades', 3: 'cúbiques', 4: 'quartes', 5: 'cinquenes', 6: 'sisenes', 7: 'setenes', 8: 'vuitenes' }, NTHE = { 2: 'cuadradas', 3: 'cúbicas', 4: 'cuartas', 5: 'quintas', 6: 'sextas', 7: 'séptimas', 8: 'octavas' };
  const nthC = n => NTHC[n] || n + '-èssimes', nthE = n => NTHE[n] || n + '-ésimas';
  const nthC1 = n => n === 3 ? 'cúbica' : nthC(n).replace(/es$/, 'a'), nthE1 = n => nthE(n).replace(/s$/, '');
  const KR = n => n <= 4 ? Z.range(0, n - 1).join(', ') : '0, 1, …, ' + (n - 1);
  /* arrels de w = (m^n)_{dw}: m enter o [a, q] (= a√q), dw en graus */
  function rootsData(m, n, dw) {
    const W = rPow(m, n), list = Z.range(0, n - 1).map(k => {
      const ang = (dw + 360 * k) / n, bx = Number.isInteger(ang) ? Z.binExact(m, ang) : null;
      return { k, ang, raw: dw + 360 * k, pol: rTx(m) + '_{' + aTx(ang) + '}', bx, v: Z.cpol(rNum(m), ang * Math.PI / 180) };
    });
    const wb = Z.binExact(W, dw), wtx = wb || (rTx(W) + '_{' + aTx(dw) + '}');
    return { W, list, wtx, wpol: rTx(W) + '_{' + aTx(dw) + '}' };
  }
  const rtShow = R => R.list.map(r => r.bx || r.pol).join(';  ');
  function rootSteps(R, m, n, dw) {
    return [kS(L('w en forma polar', 'w en forma polar', 'w in polar form'), 'w = ' + R.wtx + ' = ' + R.wpol, L('mòdul ', 'módulo ', 'modulus ') + rTx(R.W) + L(', argument ', ', argumento ', ', argument ') + aTx(dw)),
      kS(L('Fórmula de les arrels', 'Fórmula de las raíces', 'Root formula'), '\\rt{' + n + '}{w} = (\\rt{' + n + '}{' + rTx(R.W) + '})_{\\fr{' + aTx(dw) + ' + 2πk}{' + n + '}},   k = ' + KR(n)),
      kS(L('Mòdul de totes', 'Módulo de todas', 'Modulus of all of them'), '\\rt{' + n + '}{' + rTx(R.W) + '} = ' + rTx(m)),
      kT(L('Una arrel per a cada k', 'Una raíz para cada k', 'One root for each k'), TBL(['k', L('angle', 'ángulo', 'angle'), L('polar', 'polar', 'polar'), L('binòmica', 'binómica', 'binomial')], R.list.map(r => [String(r.k), '$\\fr{' + aTx(r.raw) + '}{' + n + '} = ' + aTx(r.ang) + '$', '$' + r.pol + '$', r.bx ? '$' + r.bx + '$' : '$≈ ' + Z.fmtC(r.v, 3) + '$']))),
      kDone(n + L(' arrels: ', ' raíces: ', ' roots: ') + rtShow(R), L(`Totes tenen mòdul ${rTx(m).replace(/\\sq\{(\d+)\}/, '√$1')} i estan separades ${aTx(360 / n)}: formen un polígon regular de ${n} costats.`, `Todas tienen módulo ${rTx(m).replace(/\\sq\{(\d+)\}/, '√$1')} y están separadas ${aTx(360 / n)}: forman un polígono regular de ${n} lados.`, `All of them have modulus ${rTx(m).replace(/\\sq\{(\d+)\}/, '√$1')} and are separated by ${aTx(360 / n)}: they form a regular polygon with ${n} sides.`))];
  }
  const RTHELP = () => L('Escriu les arrels separades per «;», en binòmica (√3 + i) o en polar (2_(π/6)). L\'ordre no importa.', 'Escribe las raíces separadas por «;», en binómica (√3 + i) o en polar (2_(π/6)). El orden no importa.', 'Write the roots separated by “;”, in binomial form (√3 + i) or in polar form (2_(π/6)). The order does not matter.');
  function bkRootRealGen() {
    const n = Z.pick([2, 3, 4, 6]), m = n === 6 ? Z.pick([1, 2]) : n === 4 ? Z.pick([1, 2, 3]) : Z.pick([2, 3]), neg = Z.rnd(2) === 1, dw = neg ? 180 : 0, R = rootsData(m, n, dw), wv = (neg ? -1 : 1) * m ** n;
    return { q: () => md(L(`Calcula les arrels ${n === 2 ? 'quadrades' : n === 3 ? 'cúbiques' : n === 4 ? 'quartes' : 'sisenes'} de $w = ${ng(wv)}$, és a dir, resol $z^{${n}} = ${ng(wv)}$ a $ℂ$.`, `Calcula las raíces ${n === 2 ? 'cuadradas' : n === 3 ? 'cúbicas' : n === 4 ? 'cuartas' : 'sextas'} de $w = ${ng(wv)}$, es decir, resuelve $z^{${n}} = ${ng(wv)}$ en $ℂ$.`, `Compute the ${n === 2 ? 'square' : n === 3 ? 'cube' : n === 4 ? 'fourth' : 'sixth'} roots of $w = ${ng(wv)}$, that is, solve $z^{${n}} = ${ng(wv)}$ in $ℂ$.`)),
      hint: () => P(L(`Un real positiu té argument 0 i un de negatiu, π. Hi ha ${n} arrels, una per a cada k = ${KR(n)}.`, `Un real positivo tiene argumento 0 y uno negativo, π. Hay ${n} raíces, una para cada k = ${KR(n)}.`, `A positive real has argument 0 and a negative one, π. There are ${n} roots, one for each k = ${KR(n)}.`)),
      sol: () => rootSteps(R, m, n, dw), a: { k: 'list', v: R.list.map(r => r.v), tol: 1e-4, show: () => M(rtShow(R)), help: RTHELP } };
  }
  function bkRootUnityGen() {
    const n = Z.pick([3, 4, 6, 8]), R = rootsData(1, n, 0);
    return { q: () => md(L(`Troba les arrels ${nthC(n)} de la unitat: totes les solucions de $z^{${n}} = 1$.`, `Encuentra las raíces ${nthE(n)} de la unidad: todas las soluciones de $z^{${n}} = 1$.`, `Find the ${nthE(n)} roots of unity: all the solutions of $z^{${n}} = 1$.`)),
      hint: () => P(L(`1 = 1_0. Les arrels tenen mòdul 1 i angles 2πk/${n}.`, `1 = 1_0. Las raíces tienen módulo 1 y ángulos 2πk/${n}.`, `1 = 1_0. The roots have modulus 1 and angles 2πk/${n}.`)),
      sol: () => rootSteps(R, 1, n, 0), a: { k: 'list', v: R.list.map(r => r.v), tol: 1e-4, show: () => M(rtShow(R)), help: RTHELP } };
  }
  const RTW = [[90, 2], [90, 3], [-90, 3], [180, 4], [120, 2], [-120, 2], [60, 2], [-60, 2], [90, 6], [180, 6], [60, 4], [120, 4], [135, 3], [45, 3], [180, 3], [-90, 2]];
  function pickRootW() { const [dw, n] = Z.pick(RTW), m = n >= 6 ? 1 : n === 4 ? Z.pick([1, 2]) : Z.pick([1, 2, 3]); return { dw, n, m }; }
  function bkRootConceptGen() {
    const { dw, n, m } = pickRootW(), R = rootsData(m, n, dw);
    return { q: () => md(L(`Sense calcular-les, digues quantes arrels ${nthC(n)} té $w = ${R.wtx}$, quin és el seu mòdul i quin angle hi ha entre dues de consecutives.`, `Sin calcularlas, di cuántas raíces ${nthE(n)} tiene $w = ${R.wtx}$, cuál es su módulo y qué ángulo hay entre dos consecutivas.`, `Without computing them, say how many ${nthE(n)} roots $w = ${R.wtx}$ has, what their modulus is and what angle there is between two consecutive ones.`)),
      hint: () => P(L('Sempre n arrels (si w ≠ 0), totes amb mòdul ⁿ√|w|, repartides uniformement en la circumferència.', 'Siempre n raíces (si w ≠ 0), todas con módulo ⁿ√|w|, repartidas uniformemente en la circunferencia.', 'Always n roots (if w ≠ 0), all with modulus ⁿ√|w|, evenly spread on the circle.')),
      sol: () => [kS(L('Quantes', 'Cuántas', 'How many'), n + ' ' + L('arrels', 'raíces', 'roots'), L('una per a cada k = 0, …, n − 1', 'una para cada k = 0, …, n − 1', 'one for each k = 0, …, n − 1')), kS(L('Mòdul', 'Módulo', 'Modulus'), '|w| = ' + rTx(R.W) + ' ⟹ \\rt{' + n + '}{' + rTx(R.W) + '} = ' + rTx(m)), kS(L('Separació', 'Separación', 'Separation'), '\\fr{2π}{' + n + '} = ' + aTx(360 / n), L('el 2πk/n de la fórmula', 'el 2πk/n de la fórmula', 'the 2πk/n of the formula'))],
      a: { k: 'multi', f: [{ lab: () => L('Nombre d\'arrels', 'Número de raíces', 'Number of roots'), k: 'num', v: n }, { lab: () => L('Mòdul de les arrels', 'Módulo de las raíces', 'Modulus of the roots'), k: 'num', v: rNum(m) }, { lab: () => L('Angle entre consecutives (radians)', 'Ángulo entre consecutivas (radianes)', 'Angle between consecutive ones (radians)'), k: 'num', v: 2 * Math.PI / n }], show: () => M(n + ';  ' + rTx(m) + ';  ' + aTx(360 / n)) } };
  }
  function bkRootCxGen(asEq) {
    const { dw, n, m } = pickRootW(), R = rootsData(m, n, dw);
    const neg = Z.cpol(rNum(R.W), (dw + 180) * Math.PI / 180), negTx = Z.binExact(R.W, dw + 180);
    const eqTx = asEq && negTx ? 'z^{' + n + '} + ' + (/^[−-]/.test(negTx) ? '(' + negTx + ')' : negTx) + ' = 0' : 'z^{' + n + '} = ' + R.wtx;
    return { q: () => md(asEq ? L(`Resol a $ℂ$ l'equació $${eqTx}$.`, `Resuelve en $ℂ$ la ecuación $${eqTx}$.`, `Solve the equation $${eqTx}$ in $ℂ$.`) : L(`Calcula les arrels ${nthC(n)} de $w = ${R.wtx}$.`, `Calcula las raíces ${nthE(n)} de $w = ${R.wtx}$.`, `Compute the ${nthE(n)} roots of $w = ${R.wtx}$.`)),
      hint: () => P(L('Passa w a polar (mòdul i argument). Després fórmula amb k = 0, 1, …, n − 1. Si un angle no és «bonic», deixa l\'arrel en polar.', 'Pasa w a polar (módulo y argumento). Después fórmula con k = 0, 1, …, n − 1. Si un ángulo no es «bonito», deja la raíz en polar.', 'Write w in polar form (modulus and argument). Then apply the formula with k = 0, 1, …, n − 1. If an angle is not a “nice” one, leave the root in polar form.')),
      sol: () => (asEq && negTx ? [kS(L('Aïllem', 'Despejamos', 'We isolate'), eqTx + ' ⟺ z^{' + n + '} = ' + R.wtx)] : []).concat(rootSteps(R, m, n, dw)), a: { k: 'list', v: R.list.map(r => r.v), tol: 1e-3, show: () => M(rtShow(R)), help: RTHELP } };
  }
  function bkRootCheckGen() {
    const Q = niceZ(), n = ri(2, 6), rp = rPow(Q.r, n), dn = degN(Q.d * n), wv = Z.cpow(Q.v, C(n));
    const lie = Z.rnd(2) === 1, shown = lie ? Z.pick([C(-wv.re, -wv.im), C(wv.re, -wv.im), Z.cmul(wv, C(0, 1))]) : wv;
    const really = Z.ceq(shown, wv, 1e-6), stx = Z.binExact(rp, degN(Math.atan2(shown.im, shown.re) * 180 / Math.PI)) || cxTx(shown);
    return { q: () => md(L(`És $u = ${Q.tx}$ una arrel ${nthC1(n)} de $w = ${stx}$?`, `¿Es $u = ${Q.tx}$ una raíz ${nthE1(n)} de $w = ${stx}$?`, `Is $u = ${Q.tx}$ a ${nthE1(n)} root of $w = ${stx}$?`)),
      hint: () => P(L('Calcula uⁿ en polar i compara-ho amb w.', 'Calcula uⁿ en polar y compáralo con w.', 'Compute uⁿ in polar form and compare it with w.')),
      sol: () => [kS(L('u en polar', 'u en polar', 'u in polar form'), 'u = ' + rTx(Q.r) + '_{' + aTx(Q.d) + '}'), kS('$u^{' + n + '}$', '(' + rTx(Q.r) + '^{' + n + '})_{' + aTx(Q.d * n) + '} = ' + rTx(rp) + '_{' + aTx(dn) + '} = ' + (Z.binExact(rp, dn) || cxTx(wv))), kDone(really ? L('Sí: uⁿ = w', 'Sí: uⁿ = w', 'Yes: uⁿ = w') : L('No: uⁿ ≠ w', 'No: uⁿ ≠ w', 'No: uⁿ ≠ w'))],
      a: { k: 'mc', o: [() => L('Sí, ho és', 'Sí, lo es', 'Yes, it is'), () => L('No, no ho és', 'No, no lo es', 'No, it is not')], c: really ? 0 : 1 } };
  }
  /* ---------- extrem ---------- */
  const BKFAC = [[4, [1, 2], 1], [4, 2, -1], [3, 2, -1], [3, 3, 1], [6, 1, -1], [4, 1, 1], [6, 2, 1], [4, 1, -1], [3, 1, 1], [6, 1, 1]];
  function quadOf(m, ang) {      // (x − m_a)(x − m_{−a}) = x² − 2m cos(a) x + m²
    const t = Z.trig(ang), cf = Z.coefTx(Array.isArray(m) ? [2 * m[0], m[1]] : 2 * m, t.c), m2 = rPow(m, 2);
    if (cf === '0') return 'x^{2} + ' + m2;
    const neg = cf[0] === '−', abs = neg ? cf.slice(1) : cf;
    return 'x^{2} ' + (neg ? '+ ' : '− ') + (abs === '1' ? '' : abs) + 'x + ' + m2;
  }
  function bkFactorGen() {
    const [n, m, s] = Z.pick(BKFAC), dw = s > 0 ? 180 : 0, R = rootsData(m, n, dw), W = R.W;
    const poly = 'x^{' + n + '} ' + (s > 0 ? '+ ' : '− ') + W;
    const reals = R.list.filter(r => r.ang % 180 === 0), cpx = R.list.filter(r => r.ang % 180 !== 0 && r.ang < 180);
    const linR = reals.map(r => r.ang === 0 ? '(x − ' + rTx(m) + ')' : '(x + ' + rTx(m) + ')');
    const quads = cpx.map(r => '(' + quadOf(m, r.ang) + ')');
    const facC = R.list.map(r => { const b = r.bx; if (!b) return '(x − ' + r.pol + ')'; if (/[+−]/.test(b.slice(1))) return '(x − (' + b + '))'; return b[0] === '−' ? '(x + ' + b.slice(1) + ')' : '(x − ' + b + ')'; }).join('');
    return { q: () => md(L(`Factoritza $p(x) = ${poly}$ a $ℂ$ i a $ℝ$. Quantes arrels reals té i quants factors irreductibles de grau 2 té a $ℝ$?`, `Factoriza $p(x) = ${poly}$ en $ℂ$ y en $ℝ$. ¿Cuántas raíces reales tiene y cuántos factores irreducibles de grado 2 tiene en $ℝ$?`, `Factor $p(x) = ${poly}$ over $ℂ$ and over $ℝ$. How many real roots does it have and how many irreducible degree-2 factors does it have over $ℝ$?`)),
      hint: () => P(L(`Les arrels de p són les arrels ${nthC(n)} de ${s > 0 ? '−' : ''}${W}. Agrupa cada arrel no real amb la seva conjugada: (x − w)(x − w̄) = x² − 2·Re(w)·x + |w|².`, `Las raíces de p son las raíces ${nthE(n)} de ${s > 0 ? '−' : ''}${W}. Agrupa cada raíz no real con su conjugada: (x − w)(x − w̄) = x² − 2·Re(w)·x + |w|².`, `The roots of p are the ${nthE(n)} roots of ${s > 0 ? '−' : ''}${W}. Pair each non-real root with its conjugate: (x − w)(x − w̄) = x² − 2·Re(w)·x + |w|².`)),
      sol: () => [kS(L('Arrels', 'Raíces', 'Roots'), 'p(x) = 0 ⟺ x^{' + n + '} = ' + (s > 0 ? '−' : '') + W, '')].concat(rootSteps(R, m, n, dw).slice(1, 4)).concat([
        kS(L('A ℂ', 'En ℂ', 'Over ℂ'), 'p(x) = ' + facC, L('teorema fonamental de l\'àlgebra', 'teorema fundamental del álgebra', 'fundamental theorem of algebra')),
        kS(L('Parelles conjugades', 'Parejas conjugadas', 'Conjugate pairs'), cpx.length ? cpx.map(r => '(x − ' + rTx(m) + '_{' + aTx(r.ang) + '})(x − ' + rTx(m) + '_{' + aTx(-r.ang) + '}) = ' + quadOf(m, r.ang)).join(';   ') : L('no n\'hi ha', 'no hay', 'there are none'), 'x^{2} − 2|w| cos(α) x + |w|^{2}'),
        kDone('p(x) = ' + linR.concat(quads).join(''), reals.length + L(' arrels reals i ', ' raíces reales y ', ' real roots and ') + quads.length + L(' factors de grau 2 a ℝ', ' factores de grado 2 en ℝ', ' degree-2 factors over ℝ'))]),
      a: { k: 'multi', f: [{ lab: () => L('Arrels reals', 'Raíces reales', 'Real roots'), k: 'num', v: reals.length }, { lab: () => L('Factors irreductibles de grau 2 a ℝ', 'Factores irreducibles de grado 2 en ℝ', 'Irreducible degree-2 factors over ℝ'), k: 'num', v: quads.length }], show: () => M('p(x) = ' + linR.concat(quads).join('')) } };
  }
  function bkZConjGen() {
    const n = Z.pick([2, 3, 4, 5]), R = rootsData(1, n + 1, 0), tot = n + 2;
    return { q: () => md(L(`Quantes solucions té $z^{${n}} = \\ov{z}$ a $ℂ$? Troba-les.`, `¿Cuántas soluciones tiene $z^{${n}} = \\ov{z}$ en $ℂ$? Encuéntralas.`, `How many solutions does $z^{${n}} = \\ov{z}$ have in $ℂ$? Find them.`)),
      hint: () => P(L('Pren mòduls: |z|ⁿ = |z|. Separa el cas z = 0. Si |z| = 1, aleshores z̄ = 1/z.', 'Toma módulos: |z|ⁿ = |z|. Separa el caso z = 0. Si |z| = 1, entonces z̄ = 1/z.', 'Take moduli: |z|ⁿ = |z|. Treat the case z = 0 separately. If |z| = 1, then z̄ = 1/z.')),
      sol: () => [kS(L('Mòduls', 'Módulos', 'Moduli'), '|z|^{' + n + '} = |z| ⟹ |z| = 0 \\it{o} |z| = 1', L('|z|(|z|^{' + (n - 1) + '} − 1) = 0', '|z|(|z|^{' + (n - 1) + '} − 1) = 0')), kS(L('Cas z = 0', 'Caso z = 0', 'Case z = 0'), '0^{' + n + '} = 0 = \\ov{0}', L('és solució', 'es solución', 'is a solution')), kS(L('Cas |z| = 1', 'Caso |z| = 1', 'Case |z| = 1'), '\\ov{z} = \\fr{1}{z} ⟹ z^{' + n + '} = \\fr{1}{z} ⟹ z^{' + (n + 1) + '} = 1', L('arrels ' + nthC(n + 1) + ' de la unitat', 'raíces ' + nthE(n + 1) + ' de la unidad')), kS(L('Arrels de la unitat', 'Raíces de la unidad', 'Roots of unity'), R.list.map(r => r.bx || r.pol).join(',  ')), kDone(tot + ' ' + L('solucions', 'soluciones', 'solutions'), L('0 i les ' + (n + 1) + ' arrels de la unitat.', '0 y las ' + (n + 1) + ' raíces de la unidad.'))],
      a: { k: 'num', v: tot, show: () => M(String(tot)) } };
  }
  function bkSumProdGen() {
    const { dw, n, m } = pickRootW(), R = rootsData(m, n, dw), wv = Z.cpol(rNum(R.W), dw * Math.PI / 180), prod = n % 2 ? wv : C(-wv.re, -wv.im);
    const ptx = Z.binExact(R.W, n % 2 ? dw : dw + 180) || cxTx(prod);
    return { q: () => md(L(`Siguin $${n <= 3 ? Z.range(0, n - 1).map(k => 'z_{' + k + '}').join(', ') : 'z_{0}, …, z_{' + (n - 1) + '}'}$ les arrels ${nthC(n)} de $w = ${R.wtx}$. Calcula la seva suma i el seu producte sense calcular-les.`, `Sean $${n <= 3 ? Z.range(0, n - 1).map(k => 'z_{' + k + '}').join(', ') : 'z_{0}, …, z_{' + (n - 1) + '}'}$ las raíces ${nthE(n)} de $w = ${R.wtx}$. Calcula su suma y su producto sin calcularlas.`, `Let $${n <= 3 ? Z.range(0, n - 1).map(k => 'z_{' + k + '}').join(', ') : 'z_{0}, …, z_{' + (n - 1) + '}'}$ be the ${nthE(n)} roots of $w = ${R.wtx}$. Compute their sum and their product without computing them.`)),
      hint: () => P(L('Són les arrels del polinomi zⁿ − w = (z − z₀)⋯(z − zₙ₋₁). Compara coeficients: el de zⁿ⁻¹ i el terme independent.', 'Son las raíces del polinomio zⁿ − w = (z − z₀)⋯(z − zₙ₋₁). Compara coeficientes: el de zⁿ⁻¹ y el término independiente.', 'They are the roots of the polynomial zⁿ − w = (z − z₀)⋯(z − zₙ₋₁). Compare coefficients: that of zⁿ⁻¹ and the constant term.')),
      sol: () => {
        const zi = Z.range(0, n - 1).map(k => 'z_{' + k + '}'), few = n <= 3, zp = n - 1 === 1 ? 'z' : 'z^{' + (n - 1) + '}';
        const fac = few ? zi.map(z => '(z − ' + z + ')').join('') : '(z − z_{0})(z − z_{1}) ⋯ (z − z_{' + (n - 1) + '})';
        const sum = few ? zi.join(' + ') : 'z_{0} + z_{1} + … + z_{' + (n - 1) + '}', prd = few ? zi.join(' · ') : 'z_{0} · z_{1} ⋯ z_{' + (n - 1) + '}';
        return [kS(L('Polinomi', 'Polinomio', 'Polynomial'), 'z^{' + n + '} − w = ' + fac, L('les arrels de zⁿ − w són exactament les zₖ', 'las raíces de zⁿ − w son exactamente las zₖ', 'the roots of zⁿ − w are exactly the zₖ')),
          kS(L('Coeficient de $' + zp + '$', 'Coeficiente de $' + zp + '$'), '0 = −(' + sum + ')', L('a l\'esquerra no hi ha terme en $' + zp + '$; a la dreta, en desenvolupar, el coeficient és menys la suma', 'a la izquierda no hay término en $' + zp + '$; a la derecha, al desarrollar, el coeficiente es menos la suma')),
          kS(L('Terme independent', 'Término independiente', 'Constant term'), '−w = (−1)^{' + n + '} · ' + prd + '   ⟹   ' + prd + ' = (−1)^{' + (n + 1) + '} w = ' + (n % 2 ? 'w' : '−w')),
          kDone(L('suma = 0,   producte = ', 'suma = 0,   producto = ', 'sum = 0,   product = ') + ptx, L('Geomètricament: els vèrtexs d\'un polígon regular centrat a l\'origen sumen 0.', 'Geométricamente: los vértices de un polígono regular centrado en el origen suman 0.', 'Geometrically: the vertices of a regular polygon centred at the origin add up to 0.'))];
      },
      a: { k: 'multi', f: [{ lab: () => L('Suma', 'Suma', 'Sum'), k: 'cx', v: C(0) }, { lab: () => L('Producte', 'Producto', 'Product'), k: 'cx', v: prod }], show: () => M('0;  ' + ptx) } };
  }
  const S3 = Math.sqrt(3), S2 = Math.SQRT2, S6 = Math.sqrt(6);
  const BKBQ = [
    { e: 'z^{4} − 2z^{2} + 4 = 0', u: 'u^{2} − 2u + 4 = 0 ⟹ u = 1 ± \\sq{3} i = 2_{±\\fr{π}{3}}', z: 'z = ±\\sq{2}_{\\fr{π}{6}},  ±\\sq{2}_{−\\fr{π}{6}}', st: '±(\\fr{\\sq{6}}{2} + \\fr{\\sq{2}}{2} i),  ±(\\fr{\\sq{6}}{2} − \\fr{\\sq{2}}{2} i)', v: [C(S6 / 2, S2 / 2), C(-S6 / 2, -S2 / 2), C(S6 / 2, -S2 / 2), C(-S6 / 2, S2 / 2)], p: z => Z.cadd(Z.csub(Z.cpow(z, C(4)), Z.cmul(C(2), Z.cpow(z, C(2)))), C(4)) },
    { e: 'z^{4} + 2z^{2} + 4 = 0', u: 'u^{2} + 2u + 4 = 0 ⟹ u = −1 ± \\sq{3} i = 2_{±\\fr{2π}{3}}', z: 'z = ±\\sq{2}_{\\fr{π}{3}},  ±\\sq{2}_{−\\fr{π}{3}}', st: '±(\\fr{\\sq{2}}{2} + \\fr{\\sq{6}}{2} i),  ±(\\fr{\\sq{2}}{2} − \\fr{\\sq{6}}{2} i)', v: [C(S2 / 2, S6 / 2), C(-S2 / 2, -S6 / 2), C(S2 / 2, -S6 / 2), C(-S2 / 2, S6 / 2)], p: z => Z.cadd(Z.cadd(Z.cpow(z, C(4)), Z.cmul(C(2), Z.cpow(z, C(2)))), C(4)) },
    { e: 'z^{6} − 9z^{3} + 8 = 0', u: 'u^{2} − 9u + 8 = 0 ⟹ u = 1 \\it{o} u = 8', z: 'z^{3} = 1 \\it{o} z^{3} = 8', st: '1, −\\fr{1}{2} ± \\fr{\\sq{3}}{2} i, 2, −1 ± \\sq{3} i', v: [C(1), C(-0.5, S3 / 2), C(-0.5, -S3 / 2), C(2), C(-1, S3), C(-1, -S3)], p: z => Z.cadd(Z.csub(Z.cpow(z, C(6)), Z.cmul(C(9), Z.cpow(z, C(3)))), C(8)) },
    { e: 'z^{4} + 5z^{2} + 4 = 0', u: 'u^{2} + 5u + 4 = 0 ⟹ u = −1 \\it{o} u = −4', z: 'z^{2} = −1 \\it{o} z^{2} = −4', st: '±i, ±2i', v: [C(0, 1), C(0, -1), C(0, 2), C(0, -2)], p: z => Z.cadd(Z.cadd(Z.cpow(z, C(4)), Z.cmul(C(5), Z.cpow(z, C(2)))), C(4)) },
    { e: 'z^{4} − 3z^{2} − 4 = 0', u: 'u^{2} − 3u − 4 = 0 ⟹ u = 4 \\it{o} u = −1', z: 'z^{2} = 4 \\it{o} z^{2} = −1', st: '±2, ±i', v: [C(2), C(-2), C(0, 1), C(0, -1)], p: z => Z.csub(Z.csub(Z.cpow(z, C(4)), Z.cmul(C(3), Z.cpow(z, C(2)))), C(4)) },
    { e: 'z^{4} + 4z^{2} + 16 = 0', u: 'u^{2} + 4u + 16 = 0 ⟹ u = −2 ± 2\\sq{3} i = 4_{±\\fr{2π}{3}}', z: 'z = ±2_{\\fr{π}{3}},  ±2_{−\\fr{π}{3}}', st: '±(1 + \\sq{3} i),  ±(1 − \\sq{3} i)', v: [C(1, S3), C(-1, -S3), C(1, -S3), C(-1, S3)], p: z => Z.cadd(Z.cadd(Z.cpow(z, C(4)), Z.cmul(C(4), Z.cpow(z, C(2)))), C(16)) }
  ];
  function bkBiquadGen() {
    const it = Z.pick(BKBQ);
    return { q: () => md(L(`Resol a $ℂ$: $${it.e}$.`, `Resuelve en $ℂ$: $${it.e}$.`, `Solve in $ℂ$: $${it.e}$.`)),
      hint: () => P(L('Canvi de variable u = z² (o u = z³): queda una equació de segon grau. Després, arrels de cada u amb la fórmula de k.', 'Cambio de variable u = z² (o u = z³): queda una ecuación de segundo grado. Después, raíces de cada u con la fórmula de k.', 'Change of variable u = z² (or u = z³): you get a quadratic equation. Then the roots of each u with the k formula.')),
      sol: () => [kS(L('Canvi de variable', 'Cambio de variable', 'Change of variable'), it.u), kS(L('Tornem a z', 'Volvemos a z', 'Back to z'), it.z, L('arrels amb la fórmula de k', 'raíces con la fórmula de k', 'roots with the k formula')), kDone('z ∈ \\{' + it.st + '\\}', L('Grau ' + it.v.length + ' ⟹ ' + it.v.length + ' solucions.', 'Grado ' + it.v.length + ' ⟹ ' + it.v.length + ' soluciones.'))],
      a: { k: 'list', v: it.v, tol: 1e-4, show: () => M(it.st), help: RTHELP } };
  }
  const BKPV = [[2, 0], [2, 90], [[1, 2], 45], [2, 30], [[2, 2], 45], [2, 120], [3, 0], [1, 60]];
  function bkPolygonGen() {
    const [m, d] = Z.pick(BKPV), n = Z.pick([3, 4, 6]), vtx = Z.binExact(m, d);
    const list = Z.range(0, n - 1).map(k => { const a = d + 360 * k / n; return { a, bx: Z.binExact(m, a), v: Z.cpol(rNum(m), a * Math.PI / 180) }; });
    const show = list.map(x => x.bx || (rTx(m) + '_{' + aTx(x.a) + '}')).join(';  ');
    return { q: () => md(L(`Un ${n === 3 ? 'triangle equilàter' : n === 4 ? 'quadrat' : 'hexàgon regular'} centrat a l'origen té un vèrtex a $${vtx}$. Troba tots els vèrtexs.`, `Un ${n === 3 ? 'triángulo equilátero' : n === 4 ? 'cuadrado' : 'hexágono regular'} centrado en el origen tiene un vértice en $${vtx}$. Encuentra todos los vértices.`, `A ${n === 3 ? 'equilateral triangle' : n === 4 ? 'square' : 'regular hexagon'} centred at the origin has a vertex at $${vtx}$. Find all the vertices.`)),
      hint: () => P(L(`Els vèrtexs són les arrels ${nthC(n)} d'un mateix nombre: es passa d'un a l'altre girant 2π/${n}, és a dir, multiplicant per $1_{2π/${n}}$.`, `Los vértices son las raíces ${nthE(n)} de un mismo número: se pasa de uno a otro girando 2π/${n}, es decir, multiplicando por $1_{2π/${n}}$.`, `The vertices are the ${nthE(n)} roots of the same number: you go from one to the next by rotating 2π/${n}, that is, multiplying by $1_{2π/${n}}$.`)),
      sol: () => [kS(L('Vèrtex donat en polar', 'Vértice dado en polar', 'Given vertex in polar form'), vtx + ' = ' + rTx(m) + '_{' + aTx(d) + '}'), kS(L('Gir', 'Giro', 'Rotation'), '\\fr{2π}{' + n + '} = ' + aTx(360 / n)), kT(L('Vèrtexs', 'Vértices', 'Vertices'), TBL(['k', L('angle', 'ángulo', 'angle'), L('vèrtex', 'vértice', 'vertex')], list.map((x, k) => [String(k), '$' + aTx(x.a) + '$', '$' + (x.bx || rTx(m) + '_{' + aTx(x.a) + '}') + '$']))), kDone(show, L(`Són les arrels ${nthC(n)} de $(${vtx})^{${n}}$.`, `Son las raíces ${nthE(n)} de $(${vtx})^{${n}}$.`, `They are the ${nthE(n)} roots of $(${vtx})^{${n}}$.`))],
      a: { k: 'list', v: list.map(x => x.v), tol: 1e-3, show: () => M(show), help: RTHELP } };
  }
  BKT.arr = { n: () => L('Arrels amb k i polinomis', 'Raíces con k y polinomios', 'Roots with k and polynomials'), lv: {
    1: [{ n: () => L('Arrels d\'un real', 'Raíces de un real', 'Roots of a real number'), g: bkRootRealGen }, { n: () => L('Arrels de la unitat', 'Raíces de la unidad', 'Roots of unity'), g: bkRootUnityGen }, { n: () => L('Quantes i quin mòdul', 'Cuántas y qué módulo', 'How many and what modulus'), g: bkRootConceptGen }],
    2: [{ n: () => L('Arrels d\'un complex', 'Raíces de un complejo', 'Roots of a complex number'), g: () => bkRootCxGen(false) }, { n: () => L('Equació zⁿ = w', 'Ecuación zⁿ = w', 'Equation zⁿ = w'), g: () => bkRootCxGen(true) }, { n: () => L('És una arrel?', '¿Es una raíz?', 'Is it a root?'), g: bkRootCheckGen }],
    3: [{ n: () => L('Factoritzar a ℂ i a ℝ', 'Factorizar en ℂ y en ℝ', 'Factor over ℂ and over ℝ'), g: bkFactorGen }, { n: () => L('zⁿ = z̄', 'zⁿ = z̄', 'zⁿ = z̄'), g: bkZConjGen }, { n: () => L('Suma i producte de les arrels', 'Suma y producto de las raíces', 'Sum and product of the roots'), g: bkSumProdGen }, { n: () => L('Biquadrades', 'Bicuadradas', 'Biquadratic equations'), g: bkBiquadGen }, { n: () => L('Polígon regular', 'Polígono regular', 'Regular polygon'), g: bkPolygonGen }]
  } };

  /* ---------- només amb el formulari: guies d'arrels i polinomis ---------- */
  const ARFX = {
    1: [() => fxC(['CXarg', 'CXpow', 'CXinv'], L('Un real positiu té argument 0 i un de negatiu, π: és la fórmula de l\'argument de §6 amb $b = 0$. Les arrels surten de la potència de §6.1 (a sota, com) i es tornen a binòmica amb el pas contrari.', 'Un real positivo tiene argumento 0 y uno negativo, π: es la fórmula del argumento de §6 con $b = 0$. Las raíces salen de la potencia de §6.1 (abajo, cómo) y se vuelven a binómica con el paso contrario.', 'A positive real has argument 0 and a negative one, π: it is the argument formula of §6 with $b = 0$. The roots come from the power in §6.1 (below, how) and are turned back into binomial form with the reverse step.'), [], [FXC.root(), FXC.trig()]),
      () => fxC(['CXarg', 'CXpow', 'CXinv'], L('$1 = 1_{0}$ (argument 0 per §6). Les arrels surten de la potència de §6.1 i es tornen a binòmica amb el pas contrari.', '$1 = 1_{0}$ (argumento 0 por §6). Las raíces salen de la potencia de §6.1 y se vuelven a binómica con el paso contrario.', '$1 = 1_{0}$ (argument 0 by §6). The roots come from the power in §6.1 and are turned back into binomial form with the reverse step.'), [], [FXC.root(), FXC.trig()]),
      () => fxC(['CXmod', 'CXpow'], L('Del formulari en surt tot: $|w|$ amb §6, i la potència de §6.1 explica per què hi ha $n$ arrels, totes de mòdul $\\rt{n}{|w|}$ i separades $\\fr{2π}{n}$.', 'Del formulario sale todo: $|w|$ con §6, y la potencia de §6.1 explica por qué hay $n$ raíces, todas de módulo $\\rt{n}{|w|}$ y separadas $\\fr{2π}{n}$.', 'Everything comes from the formula sheet: $|w|$ with §6, and the power in §6.1 explains why there are $n$ roots, all with modulus $\\rt{n}{|w|}$ and separated by $\\fr{2π}{n}$.'), [], [FXC.root()])],
    2: [() => fxC(['CXmod', 'CXarg', 'CXpow', 'CXinv'], L('w a polar amb les fórmules de §6; les arrels, amb la potència de §6.1 llegida al revés (a sota); i cada arrel a binòmica amb el pas contrari, si l\'angle és notable.', 'w a polar con las fórmulas de §6; las raíces, con la potencia de §6.1 leída al revés (abajo); y cada raíz a binómica con el paso contrario, si el ángulo es notable.', 'w to polar form with the formulas of §6; the roots, with the power of §6.1 read backwards (below); and each root back to binomial form with the reverse step, if the angle is a standard one.'), [], [FXC.root(), FXC.trig()]),
      () => fxC(['CXmod', 'CXarg', 'CXpow', 'CXinv'], L('Resoldre $z^{n} = w$ és buscar les arrels n-èssimes de $w$: polar amb §6, potència de §6.1 al revés (a sota) i pas contrari.', 'Resolver $z^{n} = w$ es buscar las raíces n-ésimas de $w$: polar con §6, potencia de §6.1 al revés (abajo) y paso contrario.', 'Solving $z^{n} = w$ means finding the n-th roots of $w$: polar form with §6, the power of §6.1 backwards (below) and the reverse step.'), [], [FXC.root(), FXC.trig()]),
      () => fxC(['CXmod', 'CXarg', 'CXpow'], L('Aquí no cal la fórmula de les arrels: n\'hi ha prou amb la potència de §6.1. Passa $u$ a polar, calcula $u^{n} = (|u|^{n})_{n·α}$ i compara amb $w$.', 'Aquí no hace falta la fórmula de las raíces: basta con la potencia de §6.1. Pasa $u$ a polar, calcula $u^{n} = (|u|^{n})_{n·α}$ y compara con $w$.', 'You do not need the root formula here: the power in §6.1 is enough. Write $u$ in polar form, compute $u^{n} = (|u|^{n})_{n·α}$ and compare with $w$.'), [], [FXC.polEq()])],
    3: [() => fxC(['CXpow', 'CXinv', 'MDzz', 'CJsum', 'CJprod'], L('Les arrels de $p$ són les arrels n-èssimes (a sota, com surten de §6.1). Per factoritzar a ℝ, ajunta cada arrel no real $w$ amb la conjugada: $(x − w)(x − \\ov{w}) = x^{2} − (w + \\ov{w})x + w\\ov{w} = x^{2} − 2a x + |w|^{2}$, on $w\\ov{w} = |w|^{2}$ és de §6.3 i $a = |w| \\it{cos}(α)$ és el pas contrari.', 'Las raíces de $p$ son las raíces n-ésimas (abajo, cómo salen de §6.1). Para factorizar en ℝ, junta cada raíz no real $w$ con la conjugada: $(x − w)(x − \\ov{w}) = x^{2} − (w + \\ov{w})x + w\\ov{w} = x^{2} − 2a x + |w|^{2}$, donde $w\\ov{w} = |w|^{2}$ es de §6.3 y $a = |w| \\it{cos}(α)$ es el paso contrario.', 'The roots of $p$ are the n-th roots (below, how they come from §6.1). To factor over ℝ, pair each non-real root $w$ with its conjugate: $(x − w)(x − \\ov{w}) = x^{2} − (w + \\ov{w})x + w\\ov{w} = x^{2} − 2a x + |w|^{2}$, where $w\\ov{w} = |w|^{2}$ is from §6.3 and $a = |w| \\it{cos}(α)$ is the reverse step.'),
        [L('Que les arrels no reals van per parelles conjugades surt de §6.2: si $p(w) = 0$ i els coeficients són reals, conjugant ($\\ov{z + w} = \\ov{z} + \\ov{w}$, $\\ov{z · w} = \\ov{z} · \\ov{w}$) surt $p(\\ov{w}) = 0$.', 'Que las raíces no reales van por parejas conjugadas sale de §6.2: si $p(w) = 0$ y los coeficientes son reales, conjugando ($\\ov{z + w} = \\ov{z} + \\ov{w}$, $\\ov{z · w} = \\ov{z} · \\ov{w}$) sale $p(\\ov{w}) = 0$.', 'That non-real roots come in conjugate pairs follows from §6.2: if $p(w) = 0$ and the coefficients are real, conjugating ($\\ov{z + w} = \\ov{z} + \\ov{w}$, $\\ov{z · w} = \\ov{z} · \\ov{w}$) gives $p(\\ov{w}) = 0$.')],
        [FXC.root(), L('Teorema fonamental de l\'àlgebra (un polinomi de grau $n$ té $n$ arrels a ℂ i es descompon en $n$ factors de grau 1): no és al formulari, enuncia\'l.', 'Teorema fundamental del álgebra (un polinomio de grado $n$ tiene $n$ raíces en ℂ y se descompone en $n$ factores de grado 1): no está en el formulario, enúncialo.', 'Fundamental theorem of algebra (a polynomial of degree $n$ has $n$ roots in ℂ and splits into $n$ factors of degree 1): it is not on the formula sheet, state it.')]),
      () => fxC(['MDprod', 'MDconj', 'MDinv', 'MDpos'], L('Pren mòduls: $|z^{n}| = |z|^{n}$ (producte de §6.3 repetit) i $|\\ov{z}| = |z|$. Surt $|z| = 0$, és a dir $z = 0$ (§6.3), o $|z| = 1$. Amb $|z| = 1$, §6.3 dona $\\ov{z} = \\fr{1}{z}$ i l\'equació passa a ser $z^{n + 1} = 1$.', 'Toma módulos: $|z^{n}| = |z|^{n}$ (producto de §6.3 repetido) y $|\\ov{z}| = |z|$. Sale $|z| = 0$, es decir $z = 0$ (§6.3), o $|z| = 1$. Con $|z| = 1$, §6.3 da $\\ov{z} = \\fr{1}{z}$ y la ecuación pasa a ser $z^{n + 1} = 1$.', 'Take moduli: $|z^{n}| = |z|^{n}$ (the product of §6.3 repeated) and $|\\ov{z}| = |z|$. You get $|z| = 0$, that is $z = 0$ (§6.3), or $|z| = 1$. With $|z| = 1$, §6.3 gives $\\ov{z} = \\fr{1}{z}$ and the equation becomes $z^{n + 1} = 1$.'), [], [FXC.root()]),
      () => fxC(['CXpow', 'CXprod'], L('Cap fila ho dona directament. Via de la solució: comparar coeficients a $z^{n} − w = (z − z_{0}) ⋯ (z − z_{n − 1})$. Via amb el formulari: per la potència i el producte en polar de §6.1, $z_{k} = z_{0} · u^{k}$ amb $u = 1_{\\fr{2π}{n}}$, i el producte de totes té mòdul $|w|$.', 'Ninguna fila lo da directamente. Vía de la solución: comparar coeficientes en $z^{n} − w = (z − z_{0}) ⋯ (z − z_{n − 1})$. Vía con el formulario: por la potencia y el producto en polar de §6.1, $z_{k} = z_{0} · u^{k}$ con $u = 1_{\\fr{2π}{n}}$, y el producto de todas tiene módulo $|w|$.', 'No row gives it directly. Solution route: compare coefficients in $z^{n} − w = (z − z_{0}) ⋯ (z − z_{n − 1})$. Formula-sheet route: by the power and the product in polar form of §6.1, $z_{k} = z_{0} · u^{k}$ with $u = 1_{\\fr{2π}{n}}$, and the product of all of them has modulus $|w|$.'), [], [L('Escriure $z^{n} − w$ com a producte dels $(z − z_{k})$ i comparar coeficients (relacions de Cardano-Vieta): no és al formulari, enuncia-ho.', 'Escribir $z^{n} − w$ como producto de los $(z − z_{k})$ y comparar coeficientes (relaciones de Cardano-Vieta): no está en el formulario, enúncialo.', 'Writing $z^{n} − w$ as the product of the $(z − z_{k})$ and comparing coefficients (Vieta\'s formulas): it is not on the formula sheet, state it.'), FXC.root()]),
      () => fxC(['CXmod', 'CXarg', 'CXpow', 'CXinv'], L('Canvi de variable ($u = z^{2}$ o $u = z^{3}$) i equació de segon grau; després, arrels de cada $u$ amb la potència de §6.1 al revés i pas contrari.', 'Cambio de variable ($u = z^{2}$ o $u = z^{3}$) y ecuación de segundo grado; después, raíces de cada $u$ con la potencia de §6.1 al revés y paso contrario.', 'Change of variable ($u = z^{2}$ or $u = z^{3}$) and a quadratic equation; then the roots of each $u$ with the power of §6.1 backwards and the reverse step.'), [], [FXC.quad(), FXC.root()]),
      () => fxC(['CXprod', 'CXpol', 'CXinv'], L('Girar un angle $β$ és multiplicar per $1_{β}$: pel producte en polar de §6.1, el mòdul queda igual i a l\'angle se li suma $β$. Els vèrtexs són $v_{k} = v_{0} · 1_{\\fr{2πk}{n}}$; després, pas contrari.', 'Girar un ángulo $β$ es multiplicar por $1_{β}$: por el producto en polar de §6.1, el módulo queda igual y al ángulo se le suma $β$. Los vértices son $v_{k} = v_{0} · 1_{\\fr{2πk}{n}}$; después, paso contrario.', 'Rotating by an angle $β$ means multiplying by $1_{β}$: by the polar product of §6.1, the modulus stays the same and $β$ is added to the angle. The vertices are $v_{k} = v_{0} · 1_{\\fr{2πk}{n}}$; then, the reverse step.'), [L('També són les arrels n-èssimes de $v_{0}^{n}$.', 'También son las raíces n-ésimas de $v_{0}^{n}$.', 'They are also the n-th roots of $v_{0}^{n}$.')], [FXC.trig()])]
  };
  const ARTAG = [[/^w en forma polar/, ['CXmod', 'CXarg'], null], [/^(Fórmula de les arrels|Fórmula de las raíces)/, ['CXpow'], () => L('la fórmula de les arrels no hi és: surt de la potència de §6.1 (vegeu a dalt)', 'la fórmula de las raíces no está: sale de la potencia de §6.1 (ver arriba)', 'the root formula is not there: it comes from the power in §6.1 (see above)')], [/^(Una arrel per a cada k|Una raíz para cada k)/, ['CXinv'], null], [/^(u en polar)/, ['CXmod', 'CXarg'], null], [/^\$u\^\{/, ['CXpow'], null], [/^(Parelles conjugades|Parejas conjugadas)/, ['MDzz'], null]];
  [1, 2, 3].forEach(l => BKT.arr.lv[l].forEach((tp, i) => {
    const g0 = tp.g;
    tp.g = () => {
      const I = g0(); if (!I) return I;
      const s0 = I.sol;
      I.sol = () => { const r = s0(); return Array.isArray(r) ? r.map(st => { const h = String(st.h || ''), t = ARTAG.find(([re]) => re.test(h)); return t ? kF(Object.assign({}, st), t[1], t[2] ? t[2]() : null) : st; }) : r; };
      I.fx = () => ARFX[l][i](I);
      return I;
    };
  }));
  return { NTHC, NTHE, nthC, nthE, nthC1, nthE1, KR, rootsData, rtShow, rootSteps, RTHELP, bkRootRealGen, bkRootUnityGen, RTW, pickRootW, bkRootConceptGen, bkRootCxGen, bkRootCheckGen, BKFAC, quadOf, bkFactorGen, bkZConjGen, bkSumProdGen, S3, S2, S6, BKBQ, bkBiquadGen, BKPV, bkPolygonGen, ARFX, ARTAG };
}
