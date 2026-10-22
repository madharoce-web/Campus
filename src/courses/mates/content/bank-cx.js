import { Z } from '../engine/z.js';

/**
 * Banc · tema 2: nombres complexos.
 * Codi original; l'idioma i les dependències arriben pel contenidor $ (un per idioma).
 */
export function makeBankCx($) {
  const { BKT, C, L, M, P, argSteps, cxFrTx, cxTx, esc, fmt, kDone, kF, kS, kT, md, ng, pr, ri, rnz, sqrtTx } = $;
  /* ---------- BANC · TEMA 2: nombres complexos ---------- */
  const zI = (a, b) => Z.fmtC(C(a, b), 0);                         // a + bi amb enters
  const rTx = r => Array.isArray(r) ? (r[0] === 1 ? '' : r[0]) + '\\sq{' + r[1] + '}' : String(r);
  const rNum = r => Array.isArray(r) ? r[0] * Math.sqrt(r[1]) : r;
  const degN = d => { d = ((d % 360) + 360) % 360; return d > 180 ? d - 360 : d; };     // a (−180, 180]
  const aTx = d => Z.piTx(d, 180);
  /* complexos amb angle bonic: r (enter o [n, radicand]) i angle en graus */
  const BKNZ = [[[1, 2], 45], [[1, 2], -45], [[1, 2], 135], [[1, 2], -135], [2, 30], [2, -30], [2, 150], [2, -150], [2, 60], [2, -60], [2, 120], [2, -120], [2, 90], [3, -90], [2, 180], [3, 0], [[2, 2], 45], [[3, 2], 135], [4, 90], [[2, 2], -135]];
  function niceZ() { const [r, d] = Z.pick(BKNZ); return { r, d, v: Z.cpol(rNum(r), d * Math.PI / 180), tx: Z.binExact(r, d) }; }
  /* potència de r = m o m√q */
  function rPow(r, n) {
    if (!Array.isArray(r)) return r ** n;
    const [m, q] = r; return n % 2 === 0 ? m ** n * q ** (n / 2) : [m ** n * q ** ((n - 1) / 2), q];
  }
  function bkCxOpsGen() {
    const a = rnz(-6, 6), b = rnz(-6, 6), c = rnz(-6, 6), d = rnz(-6, 6), op = Z.pick(['+', '−', '·', '·', 'zz']);
    const z = zI(a, b), w = zI(c, d);
    let res, steps, qtx;
    if (op === '+') { res = C(a + c, b + d); qtx = '(' + z + ') + (' + w + ')'; steps = [kS(L('Parts reals i imaginàries per separat', 'Partes reales e imaginarias por separado'), '(' + ng(a) + ' + ' + pr(c) + ') + (' + ng(b) + ' + ' + pr(d) + ')i')]; }
    else if (op === '−') { res = C(a - c, b - d); qtx = '(' + z + ') − (' + w + ')'; steps = [kS(L('Restem part a part', 'Restamos parte a parte'), '(' + ng(a) + ' − ' + pr(c) + ') + (' + ng(b) + ' − ' + pr(d) + ')i')]; }
    else if (op === '·') { res = C(a * c - b * d, a * d + b * c); qtx = '(' + z + ') · (' + w + ')'; steps = [kS(L('Fórmula del producte', 'Fórmula del producto'), '(ac − bd) + (ad + bc)i', L('surt de multiplicar com polinomis i fer i² = −1', 'sale de multiplicar como polinomios y hacer i² = −1')), kS(L('Substituïm', 'Sustituimos'), '(' + pr(a) + ' · ' + pr(c) + ' − ' + pr(b) + ' · ' + pr(d) + ') + (' + pr(a) + ' · ' + pr(d) + ' + ' + pr(b) + ' · ' + pr(c) + ')i')]; }
    else { res = C(a * a + b * b, 0); qtx = '(' + z + ') · \\ov{(' + z + ')}'; steps = [kS(L('Propietat', 'Propiedad'), 'z · \\ov{z} = |z|^{2} = a^{2} + b^{2}', L('sempre és un real ≥ 0', 'siempre es un real ≥ 0')), kS('', pr(a) + '^{2} + ' + pr(b) + '^{2}')]; }
    return { op, q: () => md(L(`Calcula $${qtx}$ en forma binòmica.`, `Calcula $${qtx}$ en forma binómica.`)),
      hint: () => P(L('Opera com amb polinomis en i i substitueix i² = −1.', 'Opera como con polinomios en i y sustituye i² = −1.')),
      sol: () => steps.concat([kDone(cxTx(res))]), a: { k: 'cx', v: res, show: () => M(cxTx(res)) } };
  }
  function bkCxModGen() {
    const tr = Z.pick([[3, 4], [5, 12], [6, 8], [8, 15], [1, 1], [2, 3], [1, 2], [2, 2], [3, 3], [1, 3]]), sa = Z.rnd(2) ? 1 : -1, sb = Z.rnd(2) ? 1 : -1, sw = Z.rnd(2);
    const a = sa * tr[sw], b = sb * tr[1 - sw], N = a * a + b * b, mt = sqrtTx(N);
    return { q: () => md(L(`Calcula el mòdul de $z = ${zI(a, b)}$.`, `Calcula el módulo de $z = ${zI(a, b)}$.`)),
      hint: () => P(L('|z| = √(a² + b²): és la distància de z a l\'origen (Pitàgores). Els signes no importen.', '|z| = √(a² + b²): es la distancia de z al origen (Pitágoras). Los signos no importan.')),
      sol: () => [kS(L('Fórmula', 'Fórmula'), '|z| = \\sq{a^{2} + b^{2}} = \\sq{' + pr(a) + '^{2} + ' + pr(b) + '^{2}} = \\sq{' + N + '}'), kDone('|z| = ' + mt)], a: { k: 'num', v: Math.sqrt(N), show: () => M(mt) } };
  }
  function bkIPowGen() {
    const neg = Z.rnd(4) === 0, n = ri(5, 150), e = neg ? -n : n, r = Z.mod(e, 4), vals = ['1', 'i', '−1', '−i'], res = [C(1), C(0, 1), C(-1), C(0, -1)][r];
    return { q: () => md(L(`Calcula $i^{${ng(e)}}$.`, `Calcula $i^{${ng(e)}}$.`)),
      hint: () => P(L('Les potències de i es repeteixen cada 4: i⁰ = 1, i¹ = i, i² = −1, i³ = −i. Només importa el residu de dividir l\'exponent per 4.', 'Las potencias de i se repiten cada 4: i⁰ = 1, i¹ = i, i² = −1, i³ = −i. Solo importa el resto de dividir el exponente por 4.')),
      sol: () => [kS(L('Divisió entera', 'División entera'), ng(e) + ' = 4 · ' + pr((e - r) / 4) + ' + ' + r, neg ? L('amb exponent negatiu, el residu també ha de ser entre 0 i 3', 'con exponente negativo, el resto también tiene que estar entre 0 y 3') : ''), kS(L('Per tant', 'Por tanto'), 'i^{' + ng(e) + '} = (i^{4})^{' + ng((e - r) / 4) + '} · i^{' + r + '} = i^{' + r + '}', 'i^{4} = 1'), kDone(vals[r])], a: { k: 'cx', v: res, show: () => M(vals[r]) } };
  }
  function bkPol2BinGen() {
    const r = ri(1, 4), d = Z.pick([0, 30, 45, 60, 90, 120, 135, 150, 180, -30, -45, -60, -90, -120, -135, -150, 210, 240, 270, 300, 315, 330]);
    const bx = Z.binExact(r, d), v = Z.cpol(r, d * Math.PI / 180), t = Z.trig(d);
    const cosT = Z.coefTx(1, t.c) || fmt(Math.cos(d * Math.PI / 180), 4), sinT = Z.coefTx(1, t.s) || fmt(Math.sin(d * Math.PI / 180), 4);
    return { q: () => md(L(`Escriu $z = ${r}_{${aTx(d)}}$ en forma binòmica.`, `Escribe $z = ${r}_{${aTx(d)}}$ en forma binómica.`)),
      hint: () => P(L('a = |z| cos α, b = |z| sin α. Situa l\'angle al quadrant per saber els signes.', 'a = |z| cos α, b = |z| sin α. Sitúa el ángulo en el cuadrante para saber los signos.')),
      sol: () => [kS(L('Fórmules', 'Fórmulas'), 'a = |z| cos α,   b = |z| sin α'), kS(L('Valors', 'Valores'), 'cos(' + aTx(d) + ') = ' + cosT + ',   sin(' + aTx(d) + ') = ' + sinT), kDone('z = ' + r + ' · (' + cosT + ') + ' + r + ' · (' + sinT + ') i = ' + bx)], a: { k: 'cx', v, show: () => M(bx) } };
  }
  function bkConjGen() {
    const a = rnz(-7, 7), b = rnz(-7, 7), z = zI(a, b);
    return { q: () => md(L(`Sigui $z = ${z}$. Escriu $\\ov{z}$, $−z$ i $−\\ov{z}$.`, `Sea $z = ${z}$. Escribe $\\ov{z}$, $−z$ y $−\\ov{z}$.`)),
      hint: () => P(L('El conjugat canvia el signe de la part imaginària; l\'oposat canvia els dos signes. Al pla: simetria respecte de l\'eix real, respecte de l\'origen i respecte de l\'eix imaginari.', 'El conjugado cambia el signo de la parte imaginaria; el opuesto cambia los dos signos. En el plano: simetría respecto del eje real, respecto del origen y respecto del eje imaginario.')),
      sol: () => [kS('$\\ov{z}$', '\\ov{z} = ' + zI(a, -b), L('simetria respecte de l\'eix real', 'simetría respecto del eje real')), kS('−z', '−z = ' + zI(-a, -b), L('simetria respecte de l\'origen', 'simetría respecto del origen')), kS('$−\\ov{z}$', '−\\ov{z} = ' + zI(-a, b), L('simetria respecte de l\'eix imaginari', 'simetría respecto del eje imaginario'))],
      a: { k: 'multi', f: [{ lab: () => M('\\ov{z}'), k: 'cx', v: C(a, -b) }, { lab: () => M('−z'), k: 'cx', v: C(-a, -b) }, { lab: () => M('−\\ov{z}'), k: 'cx', v: C(-a, b) }], show: () => M(zI(a, -b) + ';  ' + zI(-a, -b) + ';  ' + zI(-a, b)) } };
  }
  /* ---------- mitjà ---------- */
  function bkCxDivGen() {
    const a = rnz(-6, 6), b = rnz(-6, 6), c = rnz(-5, 5), d = rnz(-5, 5), den = c * c + d * d, nr = a * c + b * d, ni = b * c - a * d;
    const res = C(nr / den, ni / den), rt = cxFrTx(nr, den, ni, den);
    return { q: () => md(L(`Calcula $\\fr{${zI(a, b)}}{${zI(c, d)}}$ en forma binòmica.`, `Calcula $\\fr{${zI(a, b)}}{${zI(c, d)}}$ en forma binómica.`)),
      hint: () => P(L('Multiplica numerador i denominador pel conjugat del denominador: a baix queda un real.', 'Multiplica numerador y denominador por el conjugado del denominador: abajo queda un real.')),
      sol: () => [kS(L('Pel conjugat', 'Por el conjugado'), '\\fr{(' + zI(a, b) + ')(' + zI(c, -d) + ')}{(' + zI(c, d) + ')(' + zI(c, -d) + ')}'), kS(L('Denominador', 'Denominador'), pr(c) + '^{2} + ' + pr(d) + '^{2} = ' + den), kS(L('Numerador', 'Numerador'), '(' + pr(a) + ' · ' + pr(c) + ' + ' + pr(b) + ' · ' + pr(d) + ') + (' + pr(b) + ' · ' + pr(c) + ' − ' + pr(a) + ' · ' + pr(d) + ')i = ' + zI(nr, ni), '(ac + bd) + (bc − ad)i'), kDone(rt)],
      a: { k: 'cx', v: res, show: () => M(rt) } };
  }
  function bkArgGen() {
    const nice = Z.rnd(3) !== 0; let z, ex, tol, zshow;
    if (nice) { const Q = niceZ(); z = Q.v; ex = aTx(degN(Q.d)); tol = 1e-4; zshow = Q.tx; }
    else { let a, b; do { a = rnz(-6, 6); b = rnz(-6, 6); } while (Math.abs(a) === Math.abs(b)); z = C(a, b); ex = fmt(Z.argMaterial(z), 4); tol = 0.006; zshow = zI(a, b); }
    const A = argSteps(z);
    return { q: () => md(L(`Calcula l'argument de $z = ${zshow}$ amb la fórmula del material (en radians).`, `Calcula el argumento de $z = ${zshow}$ con la fórmula del material (en radianes).`)),
      hint: () => P(L('α = 2 · arctan((|z| − a)/b) si b ≠ 0. Calcula primer |z|. Comprova el quadrant al final.', 'α = 2 · arctan((|z| − a)/b) si b ≠ 0. Calcula primero |z|. Comprueba el cuadrante al final.')),
      sol: () => A.out.concat([kDone('α = ' + ex + (nice ? '' : ' rad'))]), a: { k: 'ang', v: A.al, tol, show: () => M('α = ' + ex), help: () => L('Angle en radians (π/3, −3π/4…) o decimal amb 2 xifres. Val qualsevol angle equivalent.', 'Ángulo en radianes (π/3, −3π/4…) o decimal con 2 cifras. Vale cualquier ángulo equivalente.') } };
  }
  function bkBin2PolGen() {
    const Q = niceZ(), A = argSteps(Q.v), d = degN(Q.d);
    return { q: () => md(L(`Escriu $z = ${Q.tx}$ en forma polar.`, `Escribe $z = ${Q.tx}$ en forma polar.`)),
      hint: () => P(L('Necessites el mòdul (Pitàgores) i l\'argument (fórmula del material). La forma polar és |z|_α.', 'Necesitas el módulo (Pitágoras) y el argumento (fórmula del material). La forma polar es |z|_α.')),
      sol: () => A.out.concat([kDone('z = ' + rTx(Q.r) + '_{' + aTx(d) + '}')]),
      a: { k: 'multi', f: [{ lab: () => L('Mòdul', 'Módulo'), k: 'num', v: rNum(Q.r) }, { lab: () => L('Argument', 'Argumento'), k: 'ang', v: d * Math.PI / 180 }], show: () => M(rTx(Q.r) + '_{' + aTx(d) + '}') } };
  }
  function bkCxPowGen() {
    const Q = niceZ(), n = ri(3, 10), rp = rPow(Q.r, n), dn = degN(Q.d * n), v = Z.cpow(Q.v, C(n)), bx = Z.binExact(rp, dn) || cxTx(v);
    return { q: () => md(L(`Calcula $(${Q.tx})^{${n}}$ i dona el resultat en forma binòmica.`, `Calcula $(${Q.tx})^{${n}}$ y da el resultado en forma binómica.`)),
      hint: () => P(L('Passa a polar: $(|z|_{α})^{n} = (|z|^{n})_{nα}$. Després redueix l\'angle restant voltes de 2π i torna a binòmica.', 'Pasa a polar: $(|z|_{α})^{n} = (|z|^{n})_{nα}$. Después reduce el ángulo restando vueltas de 2π y vuelve a binómica.')),
      sol: () => [kS(L('En polar', 'En polar'), Q.tx + ' = ' + rTx(Q.r) + '_{' + aTx(Q.d) + '}'), kS(L('Potència', 'Potencia'), '(' + rTx(Q.r) + '_{' + aTx(Q.d) + '})^{' + n + '} = (' + rTx(Q.r) + '^{' + n + '})_{' + aTx(Q.d * n) + '} = ' + rTx(rp) + '_{' + aTx(Q.d * n) + '}', L('el mòdul s\'eleva i l\'angle es multiplica', 'el módulo se eleva y el ángulo se multiplica')), kS(L('Reduïm l\'angle', 'Reducimos el ángulo'), aTx(Q.d * n) + ' ≡ ' + aTx(dn), L('restem múltiples de 2π', 'restamos múltiplos de 2π')), kDone(bx)],
      a: { k: 'cx', v, show: () => M(bx) } };
  }
  function bkQuadGen() {
    const p = ri(-4, 4), q = ri(1, 5), b = -2 * p, c = p * p + q * q, D = b * b - 4 * c;
    const eq = 'z^{2}' + (b ? (b > 0 ? ' + ' : ' − ') + (Math.abs(b) === 1 ? '' : Math.abs(b)) + 'z' : '') + ' + ' + c + ' = 0';
    return { q: () => md(L(`Resol a $ℂ$: $${eq}$.`, `Resuelve en $ℂ$: $${eq}$.`)),
      hint: () => P(L('Fórmula de segon grau. El discriminant és negatiu: √(−m) = i√m.', 'Fórmula de segundo grado. El discriminante es negativo: √(−m) = i√m.')),
      sol: () => [kS(L('Discriminant', 'Discriminante'), 'Δ = ' + pr(b) + '^{2} − 4 · ' + c + ' = ' + ng(D)), kS(L('Arrel de Δ', 'Raíz de Δ'), '\\sq{' + ng(D) + '} = ' + (2 * q === 1 ? '' : 2 * q) + 'i'), kS(L('Solucions', 'Soluciones'), 'z = \\fr{' + ng(-b) + ' ± ' + 2 * q + 'i}{2}'), kDone('z = ' + zI(p, q) + ',   z = ' + zI(p, -q), L('Són conjugades: passa sempre amb coeficients reals.', 'Son conjugadas: pasa siempre con coeficientes reales.'))],
      a: { k: 'list', v: [C(p, q), C(p, -q)], show: () => M(zI(p, q) + ';  ' + zI(p, -q)) } };
  }
  function bkEqLinGen() {
    const a1 = rnz(-4, 4), a2 = rnz(-4, 4), x = rnz(-5, 5), y = rnz(-5, 5), b1 = ri(-6, 6), b2 = ri(-6, 6);
    const E = Z.cadd(Z.cmul(C(a1, a2), C(x, y)), C(b1, b2)), e1 = E.re, e2 = E.im;
    return { q: () => md(L(`Resol a $ℂ$: $(${zI(a1, a2)}) · z + (${zI(b1, b2)}) = ${zI(e1, e2)}$.`, `Resuelve en $ℂ$: $(${zI(a1, a2)}) · z + (${zI(b1, b2)}) = ${zI(e1, e2)}$.`)),
      hint: () => P(L('Aïlla z com en una equació de primer grau: resta i després divideix (multiplicant pel conjugat).', 'Despeja z como en una ecuación de primer grado: resta y después divide (multiplicando por el conjugado).')),
      sol: () => [kS(L('Restem', 'Restamos'), '(' + zI(a1, a2) + ') · z = ' + zI(e1 - b1, e2 - b2)), kS(L('Dividim', 'Dividimos'), 'z = \\fr{' + zI(e1 - b1, e2 - b2) + '}{' + zI(a1, a2) + '} = \\fr{(' + zI(e1 - b1, e2 - b2) + ')(' + zI(a1, -a2) + ')}{' + (a1 * a1 + a2 * a2) + '}'), kDone('z = ' + zI(x, y))],
      a: { k: 'cx', v: C(x, y), show: () => M(zI(x, y)) } };
  }
  /* ---------- extrem ---------- */
  function bkComboGen() {
    const p = ri(2, 6), q = ri(2, 5), r = ri(2, 6);
    const e2 = p + 2 * q - 2 * r, d = degN(45 * p - 60 * q - 30 * r), mod = 2 ** (e2 / 2);
    const eTx = e2 % 2 === 0 ? String(e2 / 2) : Z.fracTx(e2, 2), mTx = e2 % 2 === 0 ? (e2 >= 0 ? String(2 ** (e2 / 2)) : '\\fr{1}{' + 2 ** (-e2 / 2) + '}') : '2^{' + eTx + '}';
    return { q: () => md(L(`Calcula en forma polar $w = \\fr{(1 + i)^{${p}} · (1 − \\sq{3} i)^{${q}}}{(\\sq{3} + i)^{${r}}}$.`, `Calcula en forma polar $w = \\fr{(1 + i)^{${p}} · (1 − \\sq{3} i)^{${q}}}{(\\sq{3} + i)^{${r}}}$.`)),
      hint: () => P(L('Passa cada factor a polar. Els mòduls es multipliquen i divideixen; els angles se sumen i resten. Mai no ho facis en binòmica.', 'Pasa cada factor a polar. Los módulos se multiplican y dividen; los ángulos se suman y restan. Nunca lo hagas en binómica.')),
      sol: () => [kS(L('Cada factor en polar', 'Cada factor en polar'), '1 + i = \\sq{2}_{\\fr{π}{4}},   1 − \\sq{3} i = 2_{−\\fr{π}{3}},   \\sq{3} + i = 2_{\\fr{π}{6}}'),
        kS(L('Mòdul', 'Módulo'), '|w| = \\fr{(\\sq{2})^{' + p + '} · 2^{' + q + '}}{2^{' + r + '}} = 2^{\\fr{' + p + '}{2} + ' + q + ' − ' + r + '} = 2^{' + eTx + '}' + (mTx !== '2^{' + eTx + '}' ? ' = ' + mTx : '')),
        kS(L('Argument', 'Argumento'), p + ' · \\fr{π}{4} + ' + q + ' · (−\\fr{π}{3}) − ' + r + ' · \\fr{π}{6} = ' + aTx(45 * p - 60 * q - 30 * r) + ' ≡ ' + aTx(d), L('reduït a (−π, π]', 'reducido a (−π, π]')), kDone('w = ' + (/^[0-9]+$/.test(mTx) ? mTx : '(' + mTx + ')') + '_{' + aTx(d) + '}')],
      a: { k: 'multi', f: [{ lab: () => L('Mòdul de w', 'Módulo de w'), k: 'num', v: mod, tol: 1e-6 }, { lab: () => L('Argument de w', 'Argumento de w'), k: 'ang', v: d * Math.PI / 180 }], show: () => M('(' + mTx + ')_{' + aTx(d) + '}') } };
  }
  function bkSqrtBinGen() {
    let p, q; do { p = rnz(-5, 5); q = rnz(-5, 5); } while (Math.abs(p) === Math.abs(q));
    if (p < 0) { p = -p; q = -q; }
    const A = p * p - q * q, B = 2 * p * q, M2 = p * p + q * q;
    return { q: () => md(L(`Troba les arrels quadrades de $w = ${zI(A, B)}$ en forma binòmica, sense passar a polar.`, `Encuentra las raíces cuadradas de $w = ${zI(A, B)}$ en forma binómica, sin pasar a polar.`)),
      hint: () => P(L('Busca z = x + yi amb z² = w: iguala parts reals i imaginàries. Afegeix |z|² = |w| per resoldre el sistema fàcilment.', 'Busca z = x + yi con z² = w: iguala partes reales e imaginarias. Añade |z|² = |w| para resolver el sistema fácilmente.')),
      sol: () => [kS(L('Sistema', 'Sistema'), 'x^{2} − y^{2} = ' + ng(A) + ',   2xy = ' + ng(B)), kS(L('Mòduls', 'Módulos'), 'x^{2} + y^{2} = |w| = \\sq{' + pr(A) + '^{2} + ' + pr(B) + '^{2}} = ' + M2), kS(L('Sumant i restant', 'Sumando y restando'), 'x^{2} = \\fr{' + M2 + ' + ' + pr(A) + '}{2} = ' + p * p + ',   y^{2} = \\fr{' + M2 + ' − ' + pr(A) + '}{2} = ' + q * q), kS(L('Signes', 'Signos'), 'x = ±' + p + ',  y = ±' + Math.abs(q), L('2xy = ' + ng(B) + (B > 0 ? ' > 0: x i y amb el mateix signe' : ' < 0: x i y amb signes contraris'), '2xy = ' + ng(B) + (B > 0 ? ' > 0: x e y con el mismo signo' : ' < 0: x e y con signos contrarios'))), kDone('z = ±(' + zI(p, q) + ')')],
      a: { k: 'list', v: [C(p, q), C(-p, -q)], show: () => M(zI(p, q) + ';  ' + zI(-p, -q)) } };
  }
  const H3 = '\\fr{\\sq{3}}{2}';
  const BKCSP = [
    { e: '\\ov{z} = z^{2}', sols: [C(0), C(1), C(-0.5, Math.sqrt(3) / 2), C(-0.5, -Math.sqrt(3) / 2)], st: () => '0, 1, −\\fr{1}{2} ± ' + H3 + ' i', ch: () => [['|z|^{2} = |z| ⟹ |z| = 0 \\it{o} |z| = 1', L('mòduls dels dos costats', 'módulos de los dos lados')], ['|z| = 1 ⟹ \\ov{z} = \\fr{1}{z} ⟹ z^{3} = 1', L('perquè z · \\ov{z} = |z|^{2} = 1', 'porque z · \\ov{z} = |z|^{2} = 1')], ['z = 1_{\\fr{2πk}{3}},  k = 0, 1, 2', L('arrels cúbiques de 1', 'raíces cúbicas de 1')]] },
    { e: 'z^{2} = 2i\\ov{z}', sols: [C(0), C(Math.sqrt(3), 1), C(-Math.sqrt(3), 1), C(0, -2)], st: () => '0, \\sq{3} + i, −\\sq{3} + i, −2i', ch: () => [['|z|^{2} = 2|z| ⟹ |z| = 0 \\it{o} |z| = 2', ''], ['|z| = 2 ⟹ \\ov{z} = \\fr{4}{z} ⟹ z^{3} = 8i', ''], ['8i = 8_{\\fr{π}{2}} ⟹ z = 2_{\\fr{π}{6} + \\fr{2πk}{3}}', L('angles π/6, 5π/6, 3π/2', 'ángulos π/6, 5π/6, 3π/2')]] },
    { e: 'z^{2} + \\ov{z} = 0', sols: [C(0), C(-1), C(0.5, Math.sqrt(3) / 2), C(0.5, -Math.sqrt(3) / 2)], st: () => '0, −1, \\fr{1}{2} ± ' + H3 + ' i', ch: () => [['|z|^{2} = |z| ⟹ |z| = 0 \\it{o} |z| = 1', ''], ['|z| = 1 ⟹ z^{2} = −\\fr{1}{z} ⟹ z^{3} = −1', ''], ['−1 = 1_{π} ⟹ z = 1_{\\fr{π}{3} + \\fr{2πk}{3}}', L('angles π/3, π, 5π/3', 'ángulos π/3, π, 5π/3')]] },
    { e: 'z + |z| = 2 + i', sols: [C(0.75, 1)], st: () => '\\fr{3}{4} + i', ch: () => [['z = a + bi: (a + \\sq{a^{2} + b^{2}}) + bi = 2 + i', ''], ['b = 1,   \\sq{a^{2} + 1} = 2 − a', L('cal 2 − a ≥ 0', 'hace falta 2 − a ≥ 0')], ['a^{2} + 1 = 4 − 4a + a^{2} ⟹ a = \\fr{3}{4}', L('compleix 2 − a ≥ 0', 'cumple 2 − a ≥ 0')]] },
    { e: '|z| − z = 1 + 2i', sols: [C(1.5, -2)], st: () => '\\fr{3}{2} − 2i', ch: () => [['z = a + bi: (\\sq{a^{2} + b^{2}} − a) − bi = 1 + 2i', ''], ['b = −2,   \\sq{a^{2} + 4} = 1 + a', ''], ['a^{2} + 4 = 1 + 2a + a^{2} ⟹ a = \\fr{3}{2}', L('i 1 + a > 0', 'y 1 + a > 0')]] }
  ];
  function bkCxSpecialGen() {
    if (Z.rnd(3) === 0) {
      const k = Z.pick([2, 3, -2, -3]), a = rnz(-5, 5), b = rnz(-5, 5), cr = (1 + k) * a, ci = (1 - k) * b;
      return { lin: 1, q: () => md(L(`Resol a $ℂ$: $z ${k > 0 ? '+ ' + k : '− ' + (-k)}\\ov{z} = ${zI(cr, ci)}$.`, `Resuelve en $ℂ$: $z ${k > 0 ? '+ ' + k : '− ' + (-k)}\\ov{z} = ${zI(cr, ci)}$.`)),
        hint: () => P(L('Escriu $z = a + bi$ i $\\ov{z} = a − bi$, i iguala parts reals i imaginàries.', 'Escribe $z = a + bi$ y $\\ov{z} = a − bi$, e iguala partes reales e imaginarias.')),
        sol: () => [kS(L('Substituïm', 'Sustituimos'), '(a + bi) ' + (k > 0 ? '+ ' + k : '− ' + (-k)) + '(a − bi) = ' + (1 + k) + 'a + ' + pr(1 - k) + 'bi'), kS(L('Igualem', 'Igualamos'), (1 + k) + 'a = ' + ng(cr) + ',   ' + (1 - k) + 'b = ' + ng(ci)), kDone('z = ' + zI(a, b))],
        a: { k: 'list', v: [C(a, b)], show: () => M(zI(a, b)), help: () => L('Escriu totes les solucions separades per «;».', 'Escribe todas las soluciones separadas por «;».') } };
    }
    const it = Z.pick(BKCSP);
    return { it, q: () => md(L(`Troba totes les solucions de $${it.e}$.`, `Encuentra todas las soluciones de $${it.e}$.`)),
      hint: () => P(L('Si hi ha $\\ov{z}$ i potències, pren mòduls dels dos costats: et dona $|z|$. Si hi ha $|z|$, escriu $z = a + bi$ i iguala parts.', 'Si hay $\\ov{z}$ y potencias, toma módulos de los dos lados: te da |z|. Si hay |z|, escribe z = a + bi e iguala partes.')),
      sol: () => it.ch().map(([m_, w]) => kS('', m_, w)).concat([kDone('z ∈ \\{' + it.st() + '\\}')]),
      a: { k: 'list', v: it.sols, tol: 1e-4, show: () => M(it.st()), help: () => L('Escriu totes les solucions separades per «;» (p. ex. 0; 1; −1/2 + √3/2 i).', 'Escribe todas las soluciones separadas por «;» (p. ej. 0; 1; −1/2 + √3/2 i).') } };
  }
  const BKREG = [
    { s: '\\{z | |z − 1| = |z + 1|\\}', c: 'imag', w: () => L('Punts a la mateixa distància de 1 i de −1: la mediatriu, que és l\'eix imaginari (Re z = 0).', 'Puntos a la misma distancia de 1 y de −1: la mediatriz, que es el eje imaginario (Re z = 0).') },
    { s: '\\{z | |z − i| = |z + 1|\\}', c: 'ymx', w: () => L('Amb z = x + yi: x² + (y − 1)² = (x + 1)² + y² ⟹ −2y = 2x ⟹ y = −x.', 'Con z = x + yi: x² + (y − 1)² = (x + 1)² + y² ⟹ −2y = 2x ⟹ y = −x.') },
    { s: '\\{z | \\it{Re}(z^{2}) = 0\\}', c: 'diag', w: () => L('Re(z²) = x² − y² = 0 ⟹ y = x o y = −x: dues rectes.', 'Re(z²) = x² − y² = 0 ⟹ y = x o y = −x: dos rectas.') },
    { s: '\\{z | \\it{Im}(z^{2}) = 2\\}', c: 'hyp', w: () => L('Im(z²) = 2xy = 2 ⟹ xy = 1: una hipèrbola.', 'Im(z²) = 2xy = 2 ⟹ xy = 1: una hipérbola.') },
    { s: '\\{z | z · \\ov{z} = 4\\}', c: 'circ', w: () => L('z · \\ov{z} = |z|² = 4 ⟹ |z| = 2: circumferència de centre 0 i radi 2.', 'z · \\ov{z} = |z|² = 4 ⟹ |z| = 2: circunferencia de centro 0 y radio 2.') },
    { s: '\\{z | \\ov{z} = z\\}', c: 'real', w: () => L('\\ov{z} = z ⟺ la part imaginària és 0: l\'eix real.', '\\ov{z} = z ⟺ la parte imaginaria es 0: el eje real.') },
    { s: '\\{z | \\ov{z} = −z\\}', c: 'imag', w: () => L('\\ov{z} = −z ⟺ la part real és 0: l\'eix imaginari.', '\\ov{z} = −z ⟺ la parte real es 0: el eje imaginario.') },
    { s: '\\{z | |z − 2i| ≤ 1\\}', c: 'disc', w: () => L('Distància a 2i com a molt 1: el disc tancat de centre 2i i radi 1.', 'Distancia a 2i como mucho 1: el disco cerrado de centro 2i y radio 1.') }
  ];
  const REGN = () => ({ imag: L('l\'eix imaginari', 'el eje imaginario'), real: L('l\'eix real', 'el eje real'), ymx: L('la recta y = −x', 'la recta y = −x'), diag: L('les rectes y = x i y = −x', 'las rectas y = x e y = −x'), hyp: L('la hipèrbola xy = 1', 'la hipérbola xy = 1'), circ: L('la circumferència de centre 0 i radi 2', 'la circunferencia de centro 0 y radio 2'), disc: L('el disc de centre 2i i radi 1', 'el disco de centro 2i y radio 1'), yx: L('la recta y = x', 'la recta y = x') });
  function bkRegionGen() {
    const it = Z.pick(BKREG), keys = Object.keys(REGN()).filter(k => k !== it.c), ds = Z.shuffle(keys).slice(0, 3);
    return { it, q: () => md(L(`Quin conjunt del pla és $${it.s}$?`, `¿Qué conjunto del plano es $${it.s}$?`)),
      hint: () => P(L('Escriu z = x + yi i tradueix la condició a una equació en x i y. |z − a| és la distància de z a a.', 'Escribe z = x + yi y traduce la condición a una ecuación en x e y. |z − a| es la distancia de z a a.')),
      sol: () => [kT(L('Traducció', 'Traducción'), md(it.w()), 'done')], a: { k: 'mc', o: [it.c].concat(ds).map(k => () => esc(REGN()[k])), c: 0 } };
  }
  const BKCXP = [
    { s: '\\ov{z · w} = \\ov{z} · \\ov{w}', ch: () => [['z = a + bi,  w = c + di', ''], ['z · w = (ac − bd) + (ad + bc)i ⟹ \\ov{z · w} = (ac − bd) − (ad + bc)i', ''], ['\\ov{z} · \\ov{w} = (a − bi)(c − di) = (ac − bd) + (−ad − bc)i', L('les dues expressions coincideixen', 'las dos expresiones coinciden')]] },
    { s: 'z · \\ov{z} = |z|^{2}', ch: () => [['(a + bi)(a − bi) = a^{2} − abi + abi − b^{2}i^{2}', ''], ['= a^{2} + b^{2} = |z|^{2}', 'i^{2} = −1']] },
    { s: '|z · w| = |z| · |w|', ch: () => [['|zw|^{2} = (zw)\\ov{(zw)} = z w \\ov{z} \\ov{w}', L('propietat anterior i conjugat del producte', 'propiedad anterior y conjugado del producto')], ['= (z\\ov{z})(w\\ov{w}) = |z|^{2} |w|^{2}', L('commutativa', 'conmutativa')], ['|zw| = |z| · |w|', L('arrels quadrades de nombres ≥ 0', 'raíces cuadradas de números ≥ 0')]] },
    { s: 'z ∈ ℝ ⟺ \\ov{z} = z', ch: () => [['\\ov{z} = z ⟺ a − bi = a + bi', ''], ['⟺ 2bi = 0 ⟺ b = 0 ⟺ z ∈ ℝ', '']] },
    { s: '\\fr{1}{z} = \\fr{\\ov{z}}{|z|^{2}}   (z ≠ 0)', ch: () => [['z · \\fr{\\ov{z}}{|z|^{2}} = \\fr{z\\ov{z}}{|z|^{2}} = \\fr{|z|^{2}}{|z|^{2}} = 1', ''], [L('per tant \\fr{\\ov{z}}{|z|^{2}} és l\'invers de z', 'por tanto \\fr{\\ov{z}}{|z|^{2}} es el inverso de z'), L('l\'invers és únic', 'el inverso es único')]] },
    { s: L => L('(r_{α})^{n} = (r^{n})_{nα} per a tot n ∈ ℕ (De Moivre)', '(r_{α})^{n} = (r^{n})_{nα} para todo n ∈ ℕ (De Moivre)'), ch: () => [['n = 1:  (r_{α})^{1} = r_{α}', L('cas base', 'caso base')], ['(r_{α})^{k} = (r^{k})_{kα}', L('hipòtesi', 'hipótesis')], ['(r_{α})^{k + 1} = (r_{α})^{k} · r_{α} = (r^{k})_{kα} · r_{α}', ''], ['= (r^{k} · r)_{kα + α} = (r^{k + 1})_{(k + 1)α}', L('producte en polar: mòduls es multipliquen, angles se sumen', 'producto en polar: módulos se multiplican, ángulos se suman')]] }
  ];
  function bkCxProofGen() {
    const it = Z.pick(BKCXP), s = () => typeof it.s === 'function' ? it.s(L) : it.s;
    return { it, q: () => md(L(`Demostra: $${s()}$.`, `Demuestra: $${s()}$.`)),
      hint: () => P(L('Escriu z = a + bi (i w = c + di) i calcula els dos costats, o fes servir propietats ja demostrades ($z · \\ov{z} = |z|^{2}$).', 'Escribe z = a + bi (y w = c + di) y calcula los dos lados, o usa propiedades ya demostradas ($z · \\ov{z} = |z|^{2}$).')),
      sol: () => it.ch().map(([m_, w]) => kS('', m_, w)).concat([kT(L('Conclusió', 'Conclusión'), md(L('Queda demostrat.', 'Queda demostrado.')), 'done')]), a: { k: 'self' } };
  }
  BKT.cx = { n: () => L('Complexos', 'Complejos'), lv: {
    1: [{ n: () => L('Operacions', 'Operaciones'), g: bkCxOpsGen }, { n: () => L('Mòdul', 'Módulo'), g: bkCxModGen }, { n: () => L('Potències de i', 'Potencias de i'), g: bkIPowGen }, { n: () => L('De polar a binòmica', 'De polar a binómica'), g: bkPol2BinGen }, { n: () => L('Conjugat i oposat', 'Conjugado y opuesto'), g: bkConjGen }],
    2: [{ n: () => L('Quocient', 'Cociente'), g: bkCxDivGen }, { n: () => L('Argument', 'Argumento'), g: bkArgGen }, { n: () => L('De binòmica a polar', 'De binómica a polar'), g: bkBin2PolGen }, { n: () => L('Potència amb De Moivre', 'Potencia con De Moivre'), g: bkCxPowGen }, { n: () => L('Equació de 2n grau', 'Ecuación de 2.º grado'), g: bkQuadGen }, { n: () => L('Equació lineal', 'Ecuación lineal'), g: bkEqLinGen }],
    3: [{ n: () => L('Producte i quocient de potències', 'Producto y cociente de potencias'), g: bkComboGen }, { n: () => L('Arrel quadrada en binòmica', 'Raíz cuadrada en binómica'), g: bkSqrtBinGen }, { n: () => L('Equacions amb z̄ i |z|', 'Ecuaciones con z̄ y |z|'), g: bkCxSpecialGen }, { n: () => L('Regions del pla', 'Regiones del plano'), g: bkRegionGen }, { n: () => L('Demostracions', 'Demostraciones'), g: bkCxProofGen }]
  } };

  /* ---------- només amb el formulari: guies de complexos ---------- */
  const FXC = {
    trig: () => L('Els valors de cos i sin dels angles notables ($\\fr{π}{6}$, $\\fr{π}{4}$, $\\fr{π}{3}$ i els dels altres quadrants) no són al formulari: aprèn-te\'ls o dedueix-los del triangle equilàter i del quadrat.', 'Los valores de cos y sin de los ángulos notables ($\\fr{π}{6}$, $\\fr{π}{4}$, $\\fr{π}{3}$ y los de los otros cuadrantes) no están en el formulario: apréndetelos o dedúcelos del triángulo equilátero y del cuadrado.'),
    atan: () => L('Els arctan dels valors notables ($\\it{arctan}(1) = \\fr{π}{4}$, $\\it{arctan}(\\sq{3}) = \\fr{π}{3}$, $\\it{arctan}(\\fr{\\sq{3}}{3}) = \\fr{π}{6}$; amb signe menys, l\'oposat) no són al formulari.', 'Los arctan de los valores notables ($\\it{arctan}(1) = \\fr{π}{4}$, $\\it{arctan}(\\sq{3}) = \\fr{π}{3}$, $\\it{arctan}(\\fr{\\sq{3}}{3}) = \\fr{π}{6}$; con signo menos, el opuesto) no están en el formulario.'),
    polEq: () => L('Reduir l\'angle (restar voltes de $2π$) no hi és escrit: es justifica amb el pas contrari, $a = |z| \\it{cos}(α)$, $b = |z| \\it{sin}(α)$, perquè cos i sin tenen període $2π$. Dos complexos en polar són iguals si tenen el mateix mòdul i els angles difereixen en un múltiple de $2π$.', 'Reducir el ángulo (restar vueltas de $2π$) no está escrito: se justifica con el paso contrario, $a = |z| \\it{cos}(α)$, $b = |z| \\it{sin}(α)$, porque cos y sin tienen período $2π$. Dos complejos en polar son iguales si tienen el mismo módulo y los ángulos difieren en un múltiplo de $2π$.'),
    root: () => L('La fórmula de les arrels n-èssimes no és al formulari, però surt de la potència de §6.1: si $w = r_{θ}$ compleix $w^{n} = |z|_{α}$, aleshores $(r^{n})_{nθ} = |z|_{α}$. Mòduls iguals: $r = \\rt{n}{|z|}$. Angles iguals llevat de voltes: $nθ = α + 2πk$, és a dir, $θ = \\fr{α + 2πk}{n}$, amb $k = 0, 1, …, n − 1$ (a partir de $k = n$ es repeteixen).', 'La fórmula de las raíces n-ésimas no está en el formulario, pero sale de la potencia de §6.1: si $w = r_{θ}$ cumple $w^{n} = |z|_{α}$, entonces $(r^{n})_{nθ} = |z|_{α}$. Módulos iguales: $r = \\rt{n}{|z|}$. Ángulos iguales salvo vueltas: $nθ = α + 2πk$, es decir, $θ = \\fr{α + 2πk}{n}$, con $k = 0, 1, …, n − 1$ (a partir de $k = n$ se repiten).'),
    quad: () => L('La fórmula de segon grau no és al formulari: enuncia-la. Que $\\sq{−m} = i\\sq{m}$ (amb $m > 0$) es comprova amb $(i\\sq{m})^{2} = i^{2} m = −m$.', 'La fórmula de segundo grado no está en el formulario: enúnciala. Que $\\sq{−m} = i\\sq{m}$ (con $m > 0$) se comprueba con $(i\\sq{m})^{2} = i^{2} m = −m$.'),
    parts: () => L('Dos complexos en binòmica són iguals si i només si tenen la mateixa part real i la mateixa part imaginària: és la definició d\'igualtat, es fa servir sense demostrar.', 'Dos complejos en binómica son iguales si y solo si tienen la misma parte real y la misma parte imaginaria: es la definición de igualdad, se usa sin demostrar.'),
    cite: () => L('És una fila del formulari: en un exercici la cites directament. Si el que et demanen és <b>demostrar-la</b>, no la pots fer servir (seria circular): cal el càlcul de la solució.', 'Es una fila del formulario: en un ejercicio la citas directamente. Si lo que te piden es <b>demostrarla</b>, no la puedes usar (sería circular): hace falta el cálculo de la solución.')
  };
  const fxC = (on, plan, compte, fora) => ({ on, plan, compte: compte || [], fora: fora || [] });
  const CXFX = {
    1: [I => I.op === 'zz' ? fxC(['MDzz', 'CXmod'], L('§6.3 diu $z · \\ov{z} = |z|^{2}$, i §6 diu $|z| = \\sq{a^{2} + b^{2}}$: el resultat és $a^{2} + b^{2}$ sense multiplicar res.', '§6.3 dice $z · \\ov{z} = |z|^{2}$, y §6 dice $|z| = \\sq{a^{2} + b^{2}}$: el resultado es $a^{2} + b^{2}$ sin multiplicar nada.'))
        : I.op === '·' ? fxC(['CXprodB'], L('Producte en binòmica de §6.1: identifica $a, b, c, d$ amb el seu signe i substitueix a $ac − bd + (ad + bc) · i$.', 'Producto en binómica de §6.1: identifica $a, b, c, d$ con su signo y sustituye en $ac − bd + (ad + bc) · i$.'), [L('Els signes: si $b = −3$, aleshores $bd$ és $(−3) · d$. Posa parèntesis.', 'Los signos: si $b = −3$, entonces $bd$ es $(−3) · d$. Pon paréntesis.')])
        : fxC(['CXsum'], I.op === '+' ? L('Suma de §6.1: parts reals amb parts reals i imaginàries amb imaginàries.', 'Suma de §6.1: partes reales con partes reales e imaginarias con imaginarias.') : L('La resta és sumar l\'oposat: $z − w = z + (−w)$, amb $−w = −c − d · i$. Després, la suma de §6.1.', 'La resta es sumar el opuesto: $z − w = z + (−w)$, con $−w = −c − d · i$. Después, la suma de §6.1.')),
      () => fxC(['CXmod'], L('És la fórmula del mòdul de §6: $|z| = \\sq{a^{2} + b^{2}}$. Simplifica l\'arrel si pots.', 'Es la fórmula del módulo de §6: $|z| = \\sq{a^{2} + b^{2}}$. Simplifica la raíz si puedes.')),
      () => fxC(['CXarg', 'CXpow', 'CXinv'], L('Només amb el formulari: $i = 0 + 1 · i$ té mòdul 1 i, per la fórmula de l\'argument amb $a = 0$, $b = 1$, argument $2 \\it{arctan}(1) = \\fr{π}{2}$. La potència de §6.1 dona $i^{n} = 1_{\\fr{nπ}{2}}$: redueix l\'angle i torna a binòmica amb el pas contrari.', 'Solo con el formulario: $i = 0 + 1 · i$ tiene módulo 1 y, por la fórmula del argumento con $a = 0$, $b = 1$, argumento $2 \\it{arctan}(1) = \\fr{π}{2}$. La potencia de §6.1 da $i^{n} = 1_{\\fr{nπ}{2}}$: reduce el ángulo y vuelve a binómica con el paso contrario.'), [L('La via de la solució ($i^{4} = 1$ i el residu de dividir per 4) és la mateixa idea: cada 4 potències l\'angle fa una volta.', 'La vía de la solución ($i^{4} = 1$ y el resto de dividir por 4) es la misma idea: cada 4 potencias el ángulo da una vuelta.')], [FXC.polEq()]),
      () => fxC(['CXpol', 'CXinv'], L('És el pas contrari de §6: $a = |z| \\it{cos}(α)$, $b = |z| \\it{sin}(α)$.', 'Es el paso contrario de §6: $a = |z| \\it{cos}(α)$, $b = |z| \\it{sin}(α)$.'), [], [FXC.trig()]),
      () => fxC(['CXbin', 'MDconj', 'CJcc'], L('El formulari fa servir el conjugat però no el defineix: $\\ov{a + b · i} = a − b · i$ (definició). L\'oposat és $−z = −a − b · i$. Comprovació amb §6.3: tots tres tenen el mateix mòdul que $z$.', 'El formulario usa el conjugado pero no lo define: $\\ov{a + b · i} = a − b · i$ (definición). El opuesto es $−z = −a − b · i$. Comprobación con §6.3: los tres tienen el mismo módulo que $z$.'))],
    2: [() => fxC(['CXquoB', 'MDinv'], L('Dues maneres, totes dues del formulari: (1) la fórmula del quocient en binòmica de §6.1 amb $a, b, c, d$; (2) multiplicar dalt i baix pel conjugat, que és fer servir $\\fr{1}{w} = \\fr{\\ov{w}}{|w|^{2}}$ de §6.3.', 'Dos maneras, las dos del formulario: (1) la fórmula del cociente en binómica de §6.1 con $a, b, c, d$; (2) multiplicar arriba y abajo por el conjugado, que es usar $\\fr{1}{w} = \\fr{\\ov{w}}{|w|^{2}}$ de §6.3.')),
      () => fxC(['CXmod', 'CXarg'], L('Primer $|z|$ amb §6 i després la fórmula de l\'argument de §6, en el cas que toqui segons $b$. Dona directament un angle de $(−π, π]$: no cal mirar el quadrant.', 'Primero $|z|$ con §6 y después la fórmula del argumento de §6, en el caso que toque según $b$. Da directamente un ángulo de $(−π, π]$: no hace falta mirar el cuadrante.'), [], [FXC.atan()]),
      () => fxC(['CXmod', 'CXarg', 'CXpol'], L('Mòdul i argument amb les dues fórmules de §6; la forma polar és $|z|_{α}$.', 'Módulo y argumento con las dos fórmulas de §6; la forma polar es $|z|_{α}$.'), [], [FXC.atan()]),
      () => fxC(['CXmod', 'CXarg', 'CXpow', 'CXinv'], L('Tres passos del formulari: passa a polar (§6), aplica la potència de §6.1 ($(|z|_{α})^{n} = (|z|^{n})_{n·α}$) i torna a binòmica amb el pas contrari (§6).', 'Tres pasos del formulario: pasa a polar (§6), aplica la potencia de §6.1 ($(|z|_{α})^{n} = (|z|^{n})_{n·α}$) y vuelve a binómica con el paso contrario (§6).'), [], [FXC.polEq(), FXC.trig()]),
      () => fxC(['CXbin'], L('El formulari no té la fórmula de segon grau: l\'has d\'enunciar. El resultat s\'escriu en forma binòmica.', 'El formulario no tiene la fórmula de segundo grado: hay que enunciarla. El resultado se escribe en forma binómica.'), [L('Amb coeficients reals, les arrels no reals surten conjugades: si $z$ és solució, conjugant l\'equació amb §6.2 ($\\ov{z + w} = \\ov{z} + \\ov{w}$, $\\ov{z · w} = \\ov{z} · \\ov{w}$) també ho és $\\ov{z}$.', 'Con coeficientes reales, las raíces no reales salen conjugadas: si $z$ es solución, conjugando la ecuación con §6.2 ($\\ov{z + w} = \\ov{z} + \\ov{w}$, $\\ov{z · w} = \\ov{z} · \\ov{w}$) también lo es $\\ov{z}$.')], [FXC.quad()]),
      () => fxC(['CXsum', 'CXquoB'], L('Com una equació de primer grau: resta (suma de §6.1 amb l\'oposat) i divideix (quocient de §6.1).', 'Como una ecuación de primer grado: resta (suma de §6.1 con el opuesto) y divide (cociente de §6.1).'))],
    3: [() => fxC(['CXmod', 'CXarg', 'CXpow', 'CXprod', 'CXquoP'], L('Tot és del formulari: cada factor a polar (§6), la potència de §6.1 a cada un, i el producte i el quocient en polar de §6.1 (mòduls que es multipliquen i divideixen, angles que se sumen i resten).', 'Todo es del formulario: cada factor a polar (§6), la potencia de §6.1 a cada uno, y el producto y el cociente en polar de §6.1 (módulos que se multiplican y dividen, ángulos que se suman y restan).'), [], [FXC.polEq(), FXC.atan()]),
      () => fxC(['CXprodB', 'MDprod', 'CXmod'], L('Busques $z = x + y · i$ amb $z^{2} = w$. El producte de §6.1 amb $z · z$ dona $z^{2} = (x^{2} − y^{2}) + 2xy · i$: iguala-ho a $w$. Per §6.3, $|z^{2}| = |z| · |z| = |z|^{2}$, i com que $z^{2} = w$, $x^{2} + y^{2} = |w|$: és la tercera equació que fa fàcil el sistema.', 'Buscas $z = x + y · i$ con $z^{2} = w$. El producto de §6.1 con $z · z$ da $z^{2} = (x^{2} − y^{2}) + 2xy · i$: iguálalo a $w$. Por §6.3, $|z^{2}| = |z| · |z| = |z|^{2}$, y como $z^{2} = w$, $x^{2} + y^{2} = |w|$: es la tercera ecuación que hace fácil el sistema.'), [FXC.parts()]),
      I => I.lin ? fxC(['CXbin', 'CXsum'], L('Escriu $z = a + b · i$ i $\\ov{z} = a − b · i$, opera amb la suma de §6.1 i iguala parts reals i imaginàries.', 'Escribe $z = a + b · i$ y $\\ov{z} = a − b · i$, opera con la suma de §6.1 e iguala partes reales e imaginarias.'), [FXC.parts()])
        : BKCSP.indexOf(I.it) <= 2 ? fxC(['MDprod', 'MDconj', 'MDinv', 'CXpow'], L('Pren mòduls als dos costats: per §6.3, $|z^{2}| = |z|^{2}$ (producte) i $|\\ov{z}| = |z|$. Surt $|z| = 0$ o un valor $r > 0$. Si $|z| = r$, §6.3 dona $\\ov{z} = \\fr{r^{2}}{z}$ (de $\\fr{1}{z} = \\fr{\\ov{z}}{|z|^{2}}$), i l\'equació passa a ser del tipus $z^{n} = w$.', 'Toma módulos en los dos lados: por §6.3, $|z^{2}| = |z|^{2}$ (producto) y $|\\ov{z}| = |z|$. Sale $|z| = 0$ o un valor $r > 0$. Si $|z| = r$, §6.3 da $\\ov{z} = \\fr{r^{2}}{z}$ (de $\\fr{1}{z} = \\fr{\\ov{z}}{|z|^{2}}$), y la ecuación pasa a ser del tipo $z^{n} = w$.'), [L('Separa el cas $z = 0$: §6.3, $|z| = 0 ⇔ z = 0$.', 'Separa el caso $z = 0$: §6.3, $|z| = 0 ⇔ z = 0$.')], [FXC.root()])
        : fxC(['CXbin', 'CXmod'], L('Escriu $z = a + b · i$ i $|z| = \\sq{a^{2} + b^{2}}$ (§6). Iguala parts reals i imaginàries: surt un sistema amb una arrel.', 'Escribe $z = a + b · i$ y $|z| = \\sq{a^{2} + b^{2}}$ (§6). Iguala partes reales e imaginarias: sale un sistema con una raíz.'), [FXC.parts()], [L('Elevar al quadrat $\\sq{…} = t$ només és equivalent si $t ≥ 0$: comprova la solució al final.', 'Elevar al cuadrado $\\sq{…} = t$ solo es equivalente si $t ≥ 0$: comprueba la solución al final.')]),
      I => { const j = BKREG.indexOf(I.it), on = [['CXmod'], ['CXmod'], ['CXprodB'], ['CXprodB'], ['MDzz'], ['CJre'], ['CJim'], ['CXmod']][j] || ['CXmod'];
        return fxC(['CXbin'].concat(on), L('Escriu $z = x + y · i$ i tradueix la condició a una equació en $x$ i $y$. ', 'Escribe $z = x + y · i$ y traduce la condición a una ecuación en $x$ e $y$. ') + (j === 5 || j === 6 ? L('Aquí no cal ni calcular: és literalment una fila de §6.2.', 'Aquí no hace falta ni calcular: es literalmente una fila de §6.2.') : j === 4 ? L('§6.3 diu $z · \\ov{z} = |z|^{2}$: la condició és $|z| = 2$.', '§6.3 dice $z · \\ov{z} = |z|^{2}$: la condición es $|z| = 2$.') : j === 2 || j === 3 ? L('$z^{2}$ amb el producte de §6.1: $(x^{2} − y^{2}) + 2xy · i$.', '$z^{2}$ con el producto de §6.1: $(x^{2} − y^{2}) + 2xy · i$.') : L('$|z − w|$ és el mòdul de §6 de la diferència: la distància entre $z$ i $w$.', '$|z − w|$ es el módulo de §6 de la diferencia: la distancia entre $z$ y $w$.'))); },
      I => { const j = BKCXP.indexOf(I.it), on = [['CJprod', 'CXprodB'], ['MDzz'], ['MDprod', 'MDzz', 'CJprod'], ['CJre'], ['MDinv', 'MDzz'], ['CXpow', 'CXprod', 'IND1', 'IND2', 'IND']][j];
        const extra = j === 2 ? [L('Per demostrar-la pots fer servir altres files ($z · \\ov{z} = |z|^{2}$ i el conjugat del producte): això no és circular.', 'Para demostrarla puedes usar otras filas ($z · \\ov{z} = |z|^{2}$ y el conjugado del producto): eso no es circular.')] : j === 4 ? [L('Pots fer servir $z · \\ov{z} = |z|^{2}$ (una altra fila) i $|z| ≠ 0$ per $z ≠ 0$ (§6.3).', 'Puedes usar $z · \\ov{z} = |z|^{2}$ (otra fila) y $|z| ≠ 0$ por $z ≠ 0$ (§6.3).')] : j === 5 ? [L('És la potència de §6.1. Per demostrar-la: inducció (§4) i, al pas, el producte en polar de §6.1.', 'Es la potencia de §6.1. Para demostrarla: inducción (§4) y, en el paso, el producto en polar de §6.1.')] : [L('Per demostrar-la: $z = a + b · i$ (i $w = c + d · i$) i càlcul en binòmica amb §6.1.', 'Para demostrarla: $z = a + b · i$ (y $w = c + d · i$) y cálculo en binómica con §6.1.')];
        return fxC(on, FXC.cite(), extra); }]
  };
  const CXTAG = {
    '1-0': [[/^(Parts|Partes|Restem|Restamos)/, ['CXsum']], [/^Fórmula del produc/, ['CXprodB']], [/^(Propietat|Propiedad)/, ['MDzz']]],
    '1-1': [[/^Fórmula/, ['CXmod']]], '1-3': [[/^Fórmul/, ['CXinv']]],
    '2-0': [[/^(Pel conjugat|Por el conjugado)/, ['MDinv']]], '2-1': [[/^(Mòdul|Módulo)/, ['CXmod']], [/^(Argument|Argumento)/, ['CXarg']]], '2-2': [[/^(Mòdul|Módulo)/, ['CXmod']], [/^(Argument|Argumento)/, ['CXarg']]],
    '2-3': [[/^En polar/, ['CXmod', 'CXarg']], [/^(Potència|Potencia)/, ['CXpow']]], '2-5': [[/^(Dividim|Dividimos)/, ['CXquoB']]],
    '3-0': [[/^Cada factor/, ['CXmod', 'CXarg']], [/^(Mòdul|Módulo)/, ['CXpow', 'CXprod', 'CXquoP']], [/^(Argument|Argumento)/, ['CXpow', 'CXprod', 'CXquoP']]],
    '3-1': [[/^Sistema/, ['CXprodB']], [/^(Mòduls|Módulos)/, ['MDprod', 'CXmod']]]
  };
  [1, 2, 3].forEach(l => BKT.cx.lv[l].forEach((tp, i) => {
    const g0 = tp.g, tags = CXTAG[l + '-' + i];
    tp.g = () => {
      const I = g0(); if (!I) return I;
      if (tags) { const s0 = I.sol; I.sol = () => { const r = s0(); return Array.isArray(r) ? r.map(st => { const t = tags.find(([re]) => re.test(String(st.h || ''))); return t ? kF(Object.assign({}, st), t[1]) : st; }) : r; }; }
      I.fx = () => CXFX[l][i](I);
      return I;
    };
  }));
  return { zI, rTx, rNum, degN, aTx, BKNZ, niceZ, rPow, bkCxOpsGen, bkCxModGen, bkIPowGen, bkPol2BinGen, bkConjGen, bkCxDivGen, bkArgGen, bkBin2PolGen, bkCxPowGen, bkQuadGen, bkEqLinGen, bkComboGen, bkSqrtBinGen, H3, BKCSP, bkCxSpecialGen, BKREG, REGN, bkRegionGen, BKCXP, bkCxProofGen, FXC, fxC, CXFX, CXTAG };
}
