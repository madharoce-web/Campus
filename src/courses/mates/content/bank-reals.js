import { Z } from '../engine/z.js';

/**
 * Banc · tema 2: nombres reals, valor absolut, intervals i suprem.
 * Codi original; l'idioma i les dependències arriben pel contenidor $ (un per idioma).
 */
export function makeBankReals($) {
  const { BKT, C, FXT, L, M, NUMX, P, esc, kDone, kS, kT, md, ng, pr, ri, rnz, sOf, sTx } = $;
  /* ---------- BANC · TEMA 2: nombres reals, valor absolut, intervals, suprem ---------- */
  /* racionals exactes [p, q] i intervals */
  const qn = (p, q) => Z.frac(p, q || 1);
  const qv = x => x === Infinity || x === -Infinity ? x : x[0] / x[1];
  const qTx = x => x === Infinity ? '+∞' : x === -Infinity ? '−∞' : Z.fracTx(x[0], x[1]);
  const IV = (l, r, lc, rc) => ({ l, r, lc: l === -Infinity ? false : lc, rc: r === Infinity ? false : rc });
  const ivTx = I => (I.lc ? '[' : '(') + qTx(I.l) + ', ' + qTx(I.r) + (I.rc ? ']' : ')');
  const unTx = arr => arr.length ? arr.map(ivTx).join(' ∪ ') : '∅';
  /* x − a  o  x + |a| */
  const xm = a => a === 0 ? 'x' : (a > 0 ? 'x − ' + a : 'x + ' + (-a));
  function linTx(p, c) { const px = p === 1 ? 'x' : p === -1 ? '−x' : ng(p) + 'x'; return c === 0 ? px : px + (c > 0 ? ' + ' + c : ' − ' + (-c)); }
  function ivMc(correct, ds) {
    const seen = new Set([correct]), opts = [correct];
    ds.forEach(d => { if (!seen.has(d)) { seen.add(d); opts.push(d); } });
    return { k: 'mc', o: opts.slice(0, 4).map(t => () => M(t)), c: 0 };
  }
  function bkAbsLeGen() {
    const a = rnz(-6, 6), b = ri(1, 7), strict = Z.rnd(2) === 1, rel = strict ? '<' : '≤', lo = qn(a - b), hi = qn(a + b);
    const cor = ivTx(IV(lo, hi, !strict, !strict));
    return { q: () => md(L(`Resol $|${xm(a)}| ${rel} ${b}$ i escriu el resultat com a interval.`, `Resuelve $|${xm(a)}| ${rel} ${b}$ y escribe el resultado como intervalo.`)),
      hint: () => P(L(`$|x − a|$ és la distància de x a a. Ha de ser ${strict ? 'menor que' : 'com a molt'} ${b}: els punts a prop de ${ng(a)}.`, `$|x − a|$ es la distancia de x a a. Tiene que ser ${strict ? 'menor que' : 'como mucho'} ${b}: los puntos cerca de ${ng(a)}.`)),
      fx: bkFxAbsLe,
      sol: () => [kS(L('Definició', 'Definición'), '|' + xm(a) + '| ' + rel + ' ' + b + ' ⟺ −' + b + ' ' + rel + ' ' + xm(a) + ' ' + rel + ' ' + b, '|u| ' + rel + ' r ⟺ −r ' + rel + ' u ' + rel + ' r'), kS(L('Sumem ' + ng(a) + ' a les tres bandes', 'Sumamos ' + ng(a) + ' a las tres bandas'), ng(a - b) + ' ' + rel + ' x ' + rel + ' ' + ng(a + b)), kDone('x ∈ ' + cor, strict ? L('Desigualtat estricta: extrems oberts.', 'Desigualdad estricta: extremos abiertos.') : L('Amb ≤ els extrems hi entren.', 'Con ≤ los extremos entran.'))],
      a: ivMc(cor, [ivTx(IV(lo, hi, strict, strict)), ivTx(IV(qn(-a - b), qn(-a + b), !strict, !strict)), unTx([IV(-Infinity, lo, false, strict), IV(hi, Infinity, strict, false)]), ivTx(IV(qn(-b), qn(b), !strict, !strict))]) };
  }
  function bkAbsEqGen() {
    const a = rnz(-7, 7), b = Z.pick([ri(1, 8), ri(1, 8), ri(1, 8), 0, -ri(1, 5)]);
    const res = b < 0 ? [] : b === 0 ? [a] : [a - b, a + b];
    return { q: () => md(L(`Troba totes les solucions reals de $|${xm(a)}| = ${ng(b)}$.`, `Encuentra todas las soluciones reales de $|${xm(a)}| = ${ng(b)}$.`)),
      hint: () => P(L('Un valor absolut mai és negatiu. Si és positiu, hi ha dos casos: el de dins és +b o −b.', 'Un valor absoluto nunca es negativo. Si es positivo, hay dos casos: lo de dentro es +b o −b.')),
      fx: () => bkFxAbsEq(b),
      sol: () => b < 0 ? [kT(L('Signe', 'Signo'), md(L(`$|u| ≥ 0$ sempre, i ${ng(b)} < 0: no hi ha cap solució.`, `$|u| ≥ 0$ siempre, y ${ng(b)} < 0: no hay ninguna solución.`)), 'neg'), kDone('∅')] : b === 0 ? [kS(L('Únic cas', 'Único caso'), '|u| = 0 ⟺ u = 0 ⟺ ' + xm(a) + ' = 0'), kDone(sTx(res))] : [kS(L('Dos casos', 'Dos casos'), xm(a) + ' = ' + b + '   ' + L('o', 'o') + '   ' + xm(a) + ' = −' + b), kDone('x ∈ ' + sTx(sOf(res)))],
      a: { k: 'set', v: res.map(x => C(x)), show: () => M(sTx(sOf(res))) } };
  }
  function bkIntOpsGen() {
    const l1 = ri(-6, 0), l2 = l1 + ri(1, 3), r1 = l2 + ri(1, 3), r2 = r1 + ri(1, 3), b = () => Z.rnd(2) === 1;
    const A = IV(qn(l1), qn(r1), b(), b()), B = IV(qn(l2), qn(r2), b(), b()), op = Z.pick(['∩', '∪', 'c']);
    let res, ds, how;
    if (op === '∩') { res = ivTx(IV(B.l, A.r, B.lc, A.rc)); ds = [ivTx(IV(A.l, B.r, A.lc, B.rc)), ivTx(IV(B.l, A.r, !B.lc, !A.rc)), ivTx(IV(A.l, A.r, A.lc, A.rc))]; how = () => L('Els punts que són als dos: de l\'extrem esquerre més gran a l\'extrem dret més petit, cada un amb el seu claudàtor.', 'Los puntos que están en los dos: del extremo izquierdo mayor al extremo derecho menor, cada uno con su corchete.'); }
    else if (op === '∪') { res = ivTx(IV(A.l, B.r, A.lc, B.rc)); ds = [ivTx(IV(B.l, A.r, B.lc, A.rc)), ivTx(IV(A.l, B.r, !A.lc, !B.rc)), unTx([A, B])]; how = () => L('Com que se solapen, la unió és un sol interval: de l\'extrem esquerre més petit al dret més gran.', 'Como se solapan, la unión es un solo intervalo: del extremo izquierdo menor al derecho mayor.'); }
    else { res = unTx([IV(-Infinity, A.l, false, !A.lc), IV(A.r, Infinity, !A.rc, false)]); ds = [unTx([IV(-Infinity, A.l, false, A.lc), IV(A.r, Infinity, A.rc, false)]), ivTx(IV(A.l, A.r, !A.lc, !A.rc)), unTx([IV(-Infinity, A.l, false, true), IV(A.r, Infinity, true, false)])]; how = () => L('El complementari canvia cada claudàtor: el que era tancat a l\'interval queda obert al complementari, i al revés.', 'El complementario cambia cada corchete: lo que era cerrado en el intervalo queda abierto en el complementario, y al revés.'); }
    const qtx = op === 'c' ? 'ℝ ∖ ' + ivTx(A) : ivTx(A) + ' ' + op + ' ' + ivTx(B);
    return { q: () => md(L(`Calcula $${qtx}$.`, `Calcula $${qtx}$.`)), hint: () => P(L('Dibuixa els intervals sobre la recta, amb punt ple als extrems tancats i buit als oberts.', 'Dibuja los intervalos sobre la recta, con punto lleno en los extremos cerrados y vacío en los abiertos.')),
      fx: () => bkFxIntOps(op),
      sol: () => [kT(L('Idea', 'Idea'), md(how())), kDone(qtx + ' = ' + res)], a: ivMc(res, ds) };
  }
  function bkClassifyGen() {
    const it = Z.pick(NUMX), opts = [['N', 'ℕ'], ['Z', L('ℤ (però no ℕ)', 'ℤ (pero no ℕ)')], ['Q', L('ℚ (però no ℤ)', 'ℚ (pero no ℤ)')], ['I', L('ℝ ∖ ℚ (irracional)', 'ℝ ∖ ℚ (irracional)')], ['C', L('ℂ ∖ ℝ', 'ℂ ∖ ℝ')]];
    const c = opts.findIndex(o => o[0] === it.k), names = () => [['N', 'ℕ'], ['Z', L('ℤ (però no ℕ)', 'ℤ (pero no ℕ)')], ['Q', L('ℚ (però no ℤ)', 'ℚ (pero no ℤ)')], ['I', L('ℝ ∖ ℚ (irracional)', 'ℝ ∖ ℚ (irracional)')], ['C', L('ℂ ∖ ℝ', 'ℂ ∖ ℝ')]];
    return { q: () => md(L('Quin és el conjunt més petit que conté $' + it.t + '$?', '¿Cuál es el conjunto más pequeño que contiene $' + it.t + '$?')),
      hint: () => P(L('Simplifica primer: arrels exactes, fraccions que són enters, potències. Recorda que ℕ comença a 1.', 'Simplifica primero: raíces exactas, fracciones que son enteros, potencias. Recuerda que ℕ empieza en 1.')),
      fx: bkFxClassify,
      sol: () => [kT(L('Raonament', 'Razonamiento'), it.w ? md(it.w()) : md(L('Mira el valor simplificat.', 'Mira el valor simplificado.'))), kDone(it.t + ' → ' + names()[c][1])],
      a: { k: 'mc', o: Z.range(0, 4).map(j => () => esc(names()[j][1])), c } };
  }
  function bkPeriodicGen() {
    const I = ri(0, 9), la = Z.pick([0, 0, 1, 2]), lp = Z.pick([1, 1, 2]);
    const digs = n => Z.range(1, n).map(() => ri(0, 9)).join('');
    let a = digs(la), p; do { p = digs(lp); } while (/^9+$/.test(p) || /^0+$/.test(p) || (lp === 2 && p[0] === p[1]));
    const N1 = Number(String(I) + a + p), N0 = Number(String(I) + a), den = 10 ** la * (10 ** lp - 1), num = N1 - N0, [fp, fq] = Z.frac(num, den);
    const dec = I + ',' + a + '\\ov{' + p + '}', big = 10 ** (la + lp), small = 10 ** la;
    return { q: () => md(L(`Escriu $${dec}$ com a fracció irreductible.`, `Escribe $${dec}$ como fracción irreducible.`)),
      hint: () => P(L('Anomena x el nombre. Multiplica per una potència de 10 que mogui la coma fins després del primer període, i per una altra que la deixi just abans del període. Resta.', 'Llama x al número. Multiplica por una potencia de 10 que mueva la coma hasta después del primer período, y por otra que la deje justo antes del período. Resta.')),
      fx: bkFxPeriodic,
      sol: () => [kS(L('Nom', 'Nombre'), 'x = ' + dec), kS(L('Dues còpies', 'Dos copias'), big + 'x = ' + N1 + ',\\ov{' + p + '}' + (la ? ',   ' + small + 'x = ' + N0 + ',\\ov{' + p + '}' : '')), kS(L('Restem', 'Restamos'), (big - small) + 'x = ' + N1 + ' − ' + N0 + ' = ' + num, L('les parts periòdiques s\'anul·len', 'las partes periódicas se anulan')), kDone('x = \\fr{' + num + '}{' + den + '} = ' + Z.fracTx(fp, fq))],
      a: { k: 'num', v: fp / fq, show: () => M(Z.fracTx(fp, fq)) } };
  }
  /* ---------- mitjà ---------- */
  function bkAbsGeGen() {
    const a = rnz(-6, 6), b = ri(1, 7), strict = Z.rnd(2) === 1, rel = strict ? '>' : '≥', lo = qn(a - b), hi = qn(a + b);
    const cor = unTx([IV(-Infinity, lo, false, !strict), IV(hi, Infinity, !strict, false)]);
    return { q: () => md(L(`Resol $|${xm(a)}| ${rel} ${b}$.`, `Resuelve $|${xm(a)}| ${rel} ${b}$.`)),
      hint: () => P(L('Ara volem els punts <b>lluny</b> de a: hi ha dues bandes, i el resultat és una unió.', 'Ahora queremos los puntos <b>lejos</b> de a: hay dos lados, y el resultado es una unión.')),
      fx: bkFxAbsGe,
      sol: () => [kS(L('Dos casos', 'Dos casos'), xm(a) + ' ' + rel + ' ' + b + '   ' + L('o', 'o') + '   ' + xm(a) + ' ' + (strict ? '<' : '≤') + ' −' + b, '|u| ' + rel + ' r ⟺ u ' + rel + ' r ∨ u ' + (strict ? '<' : '≤') + ' −r'), kS('', 'x ' + rel + ' ' + ng(a + b) + '   ' + L('o', 'o') + '   x ' + (strict ? '<' : '≤') + ' ' + ng(a - b)), kDone('x ∈ ' + cor)],
      a: ivMc(cor, [ivTx(IV(lo, hi, !strict, !strict)), unTx([IV(-Infinity, lo, false, strict), IV(hi, Infinity, strict, false)]), unTx([IV(-Infinity, qn(-a - b), false, !strict), IV(qn(-a + b), Infinity, !strict, false)])]) };
  }
  function bkAbsLinGen() {
    const p = ri(2, 5), c = rnz(-6, 6), b = ri(1, 9), strict = Z.rnd(2) === 1, rel = strict ? '<' : '≤';
    const lo = qn(-b - c, p), hi = qn(b - c, p), cor = ivTx(IV(lo, hi, !strict, !strict));
    return { q: () => md(L(`Resol $|${linTx(p, c)}| ${rel} ${b}$.`, `Resuelve $|${linTx(p, c)}| ${rel} ${b}$.`)),
      hint: () => P(L('Treu el valor absolut amb −b ≤ u ≤ b, resta la constant i divideix per ', 'Quita el valor absoluto con −b ≤ u ≤ b, resta la constante y divide por ') + p + L(' (positiu: el sentit no canvia).', ' (positivo: el sentido no cambia).')),
      fx: bkFxAbsLin,
      sol: () => [kS(L('Sense valor absolut', 'Sin valor absoluto'), '−' + b + ' ' + rel + ' ' + linTx(p, c) + ' ' + rel + ' ' + b), kS(L('Restem ' + ng(c), 'Restamos ' + ng(c)), ng(-b - c) + ' ' + rel + ' ' + p + 'x ' + rel + ' ' + ng(b - c)), kS(L('Dividim per ' + p, 'Dividimos por ' + p), qTx(lo) + ' ' + rel + ' x ' + rel + ' ' + qTx(hi)), kDone('x ∈ ' + cor)],
      a: ivMc(cor, [ivTx(IV(qn(-b - c), qn(b - c), !strict, !strict)), ivTx(IV(qn(-b + c, p), qn(b + c, p), !strict, !strict)), unTx([IV(-Infinity, lo, false, strict), IV(hi, Infinity, strict, false)]), ivTx(IV(lo, hi, strict, strict))]) };
  }
  const BKSUP = [
    { s: '\\{\\fr{1}{n} | n ∈ ℕ\\}', sup: 1, inf: 0, max: true, min: false, w: () => L('Els valors són 1, 1/2, 1/3… El primer és el més gran (màxim 1). S\'acosten a 0 sense arribar-hi: ínfim 0, sense mínim.', 'Los valores son 1, 1/2, 1/3… El primero es el mayor (máximo 1). Se acercan a 0 sin llegar: ínfimo 0, sin mínimo.') },
    { s: '\\{1 − \\fr{1}{n} | n ∈ ℕ\\}', sup: 1, inf: 0, max: false, min: true, w: () => L('Valors 0, 1/2, 2/3, 3/4… El mínim és 0 (n = 1). Creixen cap a 1 sense arribar-hi: suprem 1, sense màxim.', 'Valores 0, 1/2, 2/3, 3/4… El mínimo es 0 (n = 1). Crecen hacia 1 sin llegar: supremo 1, sin máximo.') },
    { s: '\\{\\fr{(−1)^{n}}{n} | n ∈ ℕ\\}', sup: 0.5, inf: -1, max: true, min: true, w: () => L('Valors −1, 1/2, −1/3, 1/4… El més petit és −1 (n = 1) i el més gran és 1/2 (n = 2). Tots dos s\'assoleixen.', 'Valores −1, 1/2, −1/3, 1/4… El menor es −1 (n = 1) y el mayor es 1/2 (n = 2). Los dos se alcanzan.') },
    { s: '\\{\\fr{n}{n + 1} | n ∈ ℕ\\}', sup: 1, inf: 0.5, max: false, min: true, w: () => L('Valors 1/2, 2/3, 3/4… Mínim 1/2. Creixen cap a 1 sense arribar-hi.', 'Valores 1/2, 2/3, 3/4… Mínimo 1/2. Crecen hacia 1 sin llegar.') },
    { s: '\\{(−1)^{n} + \\fr{1}{n} | n ∈ ℕ\\}', sup: 1.5, inf: -1, max: true, min: false, w: () => L('Senars: −1 + 1/n = 0, −2/3, −4/5… s\'acosten a −1 sense arribar-hi. Parells: 1 + 1/n = 3/2, 5/4… el més gran és 3/2 (n = 2).', 'Impares: −1 + 1/n = 0, −2/3, −4/5… se acercan a −1 sin llegar. Pares: 1 + 1/n = 3/2, 5/4… el mayor es 3/2 (n = 2).') },
    { s: '\\{2 − \\fr{1}{n^{2}} | n ∈ ℕ\\}', sup: 2, inf: 1, max: false, min: true, w: () => L('Valors 1, 7/4, 17/9… Mínim 1. Creixen cap a 2 sense arribar-hi.', 'Valores 1, 7/4, 17/9… Mínimo 1. Crecen hacia 2 sin llegar.') },
    { s: '\\{x ∈ ℝ | x^{2} < 4\\}', sup: 2, inf: -2, max: false, min: false, w: () => L('És l\'interval obert (−2, 2): els extrems són suprem i ínfim, però no en formen part.', 'Es el intervalo abierto (−2, 2): los extremos son supremo e ínfimo, pero no forman parte.') },
    { s: '\\{x ∈ ℚ | 0 < x ≤ 3\\}', sup: 3, inf: 0, max: true, min: false, w: () => L('El 3 hi és (és racional): màxim. El 0 no hi és, però hi ha racionals tan a prop com vulguis: ínfim 0 sense mínim.', 'El 3 está (es racional): máximo. El 0 no está, pero hay racionales tan cerca como quieras: ínfimo 0 sin mínimo.') },
    { s: '(−1, 5] ∪ \\{7\\}', sup: 7, inf: -1, max: true, min: false, w: () => L('El 7 és el més gran i hi és: màxim 7. Per baix, −1 no hi és: ínfim −1 sense mínim.', 'El 7 es el mayor y está: máximo 7. Por abajo, −1 no está: ínfimo −1 sin mínimo.') },
    { s: '\\{x ∈ ℝ | |x − 3| ≤ 2\\}', sup: 5, inf: 1, max: true, min: true, w: () => L('És [1, 5]: tancat, conté els dos extrems.', 'Es [1, 5]: cerrado, contiene los dos extremos.') }
  ];
  function bkSupGen() {
    const it = Z.pick(BKSUP), t2 = x => Number.isInteger(x) ? ng(x) : (x === 0.5 ? '\\fr{1}{2}' : x === 1.5 ? '\\fr{3}{2}' : ng(x));
    return { q: () => md(L(`Per a $S = ${it.s}$, troba el suprem i l'ínfim, i digues si té màxim i mínim.`, `Para $S = ${it.s}$, encuentra el supremo y el ínfimo, y di si tiene máximo y mínimo.`)),
      hint: () => P(L('Escriu els primers elements. El suprem és la cota superior més petita; només és màxim si pertany a S.', 'Escribe los primeros elementos. El supremo es la cota superior más pequeña; solo es máximo si pertenece a S.')),
      fx: bkFxSup,
      sol: () => [kT(L('Elements', 'Elementos'), md(it.w())), kS(L('Suprem', 'Supremo'), 'sup S = ' + t2(it.sup) + (it.max ? '   (' + L('és màxim', 'es máximo') + ')' : '   (' + L('no és màxim', 'no es máximo') + ')')), kS(L('Ínfim', 'Ínfimo'), 'inf S = ' + t2(it.inf) + (it.min ? '   (' + L('és mínim', 'es mínimo') + ')' : '   (' + L('no és mínim', 'no es mínimo') + ')'), ''), kDone('sup = ' + t2(it.sup) + ',  inf = ' + t2(it.inf))],
      a: { k: 'multi', f: [{ lab: () => L('Suprem', 'Supremo'), k: 'num', v: it.sup }, { lab: () => L('Ínfim', 'Ínfimo'), k: 'num', v: it.inf }, { lab: () => L('Té màxim', 'Tiene máximo'), k: 'tf', v: it.max }, { lab: () => L('Té mínim', 'Tiene mínimo'), k: 'tf', v: it.min }], show: () => M('sup = ' + t2(it.sup) + ', inf = ' + t2(it.inf)) } };
  }
  function bkDistGen() {
    let a, b; do { a = ri(-6, 6); b = ri(-6, 6); } while (a === b || (a + b) % 2);
    const m = (a + b) / 2, near = a < b, cor = near ? ivTx(IV(-Infinity, qn(m), false, false)) : ivTx(IV(qn(m), Infinity, false, false));
    return { q: () => md(L(`Resol $|${xm(a)}| < |${xm(b)}|$.`, `Resuelve $|${xm(a)}| < |${xm(b)}|$.`)),
      hint: () => P(L(`Vol dir «x és més a prop de ${ng(a)} que de ${ng(b)}». Els dos costats són ≥ 0: pots elevar al quadrat.`, `Quiere decir «x está más cerca de ${ng(a)} que de ${ng(b)}». Los dos lados son ≥ 0: puedes elevar al cuadrado.`)),
      fx: bkFxDist,
      sol: () => [kS(L('Elevem al quadrat', 'Elevamos al cuadrado'), '(' + xm(a) + ')^{2} < (' + xm(b) + ')^{2}', L('vàlid perquè els dos costats són ≥ 0', 'válido porque los dos lados son ≥ 0')), kS(L('Simplifiquem', 'Simplificamos'), ng(-2 * a) + 'x + ' + pr(a * a) + ' < ' + ng(-2 * b) + 'x + ' + pr(b * b) + ' ⟺ ' + ng(2 * (b - a)) + 'x < ' + ng(b * b - a * a), L('les x² s\'anul·len', 'las x² se anulan')), kS('', 'x ' + (near ? '<' : '>') + ' ' + ng(m), near ? '' : L('dividim per un negatiu: el sentit canvia', 'dividimos por un negativo: el sentido cambia')), kDone('x ∈ ' + cor, L(`${ng(m)} és el punt mitjà entre ${ng(a)} i ${ng(b)}.`, `${ng(m)} es el punto medio entre ${ng(a)} y ${ng(b)}.`))],
      a: ivMc(cor, [near ? ivTx(IV(qn(m), Infinity, false, false)) : ivTx(IV(-Infinity, qn(m), false, false)), ivTx(IV(qn(Math.min(a, b)), qn(Math.max(a, b)), false, false)), near ? ivTx(IV(-Infinity, qn(a), false, false)) : ivTx(IV(qn(a), Infinity, false, false))]) };
  }
  function bkEntGen() {
    const c = ri(-8, 6), d = c + ri(1, 9);
    const ctr = (c + d) / 2, r = (d - c) / 2, t = x => Number.isInteger(x) ? ng(x) : Z.fracTx(x * 2, 2);
    return { q: () => md(L(`L'interval $(${ng(c)}, ${ng(d)})$ és un entorn $E(a, r) = (a − r, a + r)$. Troba el centre $a$ i el radi $r$.`, `El intervalo $(${ng(c)}, ${ng(d)})$ es un entorno $E(a, r) = (a − r, a + r)$. Encuentra el centro $a$ y el radio $r$.`)),
      hint: () => P(L('El centre és el punt mitjà; el radi, la meitat de la longitud.', 'El centro es el punto medio; el radio, la mitad de la longitud.')),
      fx: bkFxEnt,
      sol: () => [kS(L('Centre', 'Centro'), 'a = \\fr{' + ng(c) + ' + ' + pr(d) + '}{2} = ' + t(ctr)), kS(L('Radi', 'Radio'), 'r = \\fr{' + ng(d) + ' − ' + pr(c) + '}{2} = ' + t(r)), kDone('(' + ng(c) + ', ' + ng(d) + ') = E(' + t(ctr) + ', ' + t(r) + ')', L('Equivalent: |x − a| < r.', 'Equivalente: |x − a| < r.'))],
      a: { k: 'multi', f: [{ lab: () => L('Centre a', 'Centro a'), k: 'num', v: ctr }, { lab: () => L('Radi r', 'Radio r'), k: 'num', v: r }], show: () => M('a = ' + t(ctr) + ', r = ' + t(r)) } };
  }
  /* ---------- extrem ---------- */
  function bkAbsSumGen() {
    let a = ri(-6, 3), b = a + ri(2, 6); const d = b - a, c = Z.pick([d + 2 * ri(1, 4), d + 2 * ri(1, 4), d, d - ri(1, Math.max(1, d - 1))]);
    const lo = qn(a + b - c, 2), hi = qn(a + b + c, 2), cor = c < d ? '∅' : c === d ? ivTx(IV(qn(a), qn(b), true, true)) : ivTx(IV(lo, hi, true, true));
    return { q: () => md(L(`Resol $|${xm(a)}| + |${xm(b)}| ≤ ${c}$.`, `Resuelve $|${xm(a)}| + |${xm(b)}| ≤ ${c}$.`)),
      hint: () => P(L(`Els valors absoluts canvien de forma a x = ${ng(a)} i a x = ${ng(b)}. Separa en tres casos. Pista geomètrica: és la suma de distàncies a ${ng(a)} i a ${ng(b)}, que com a mínim val ${d}.`, `Los valores absolutos cambian de forma en x = ${ng(a)} y en x = ${ng(b)}. Separa en tres casos. Pista geométrica: es la suma de distancias a ${ng(a)} y a ${ng(b)}, que como mínimo vale ${d}.`)),
      fx: bkFxAbsSum,
      sol: () => [kS(L('Cas x < ' + ng(a), 'Caso x < ' + ng(a)), '−(' + xm(a) + ') − (' + xm(b) + ') = −2x + ' + pr(a + b) + ' ≤ ' + c + ' ⟺ x ≥ ' + qTx(lo)),
        kS(L('Cas ' + ng(a) + ' ≤ x ≤ ' + ng(b), 'Caso ' + ng(a) + ' ≤ x ≤ ' + ng(b)), '(' + xm(a) + ') − (' + xm(b) + ') = ' + d + ' ≤ ' + c, c >= d ? L('sempre cert: tot el tros hi entra', 'siempre cierto: todo el trozo entra') : L('mai cert', 'nunca cierto')),
        kS(L('Cas x > ' + ng(b), 'Caso x > ' + ng(b)), '(' + xm(a) + ') + (' + xm(b) + ') = 2x − ' + pr(a + b) + ' ≤ ' + c + ' ⟺ x ≤ ' + qTx(hi)),
        kDone(L('Ajuntant els tres casos: ', 'Juntando los tres casos: ') + cor, c < d ? L(`La suma de distàncies mai és menor que ${d}.`, `La suma de distancias nunca es menor que ${d}.`) : '')],
      a: ivMc(cor, ['∅', ivTx(IV(qn(a), qn(b), true, true)), ivTx(IV(lo, hi, true, true)), ivTx(IV(qn(a - c), qn(b + c), true, true)), unTx([IV(-Infinity, lo, false, true), IV(hi, Infinity, true, false)])].filter(x => x !== cor)) };
  }
  const BKABSQ = [
    { q: '|2x − 1| > |x + 1|', ch: ['(2x − 1)^{2} > (x + 1)^{2}', '4x^{2} − 4x + 1 > x^{2} + 2x + 1', '3x^{2} − 6x > 0 ⟺ 3x(x − 2) > 0'], r: '(−∞, 0) ∪ (2, +∞)', d: ['(0, 2)', '(−∞, 0] ∪ [2, +∞)', '(2, +∞)'] },
    { q: '|x − 3| < |2x|', ch: ['(x − 3)^{2} < 4x^{2}', 'x^{2} − 6x + 9 < 4x^{2}', '0 < 3x^{2} + 6x − 9 = 3(x + 3)(x − 1)'], r: '(−∞, −3) ∪ (1, +∞)', d: ['(−3, 1)', '(1, +∞)', '(−∞, −1) ∪ (3, +∞)'] },
    { q: '|x + 2| ≤ |x − 4|', ch: ['(x + 2)^{2} ≤ (x − 4)^{2}', 'x^{2} + 4x + 4 ≤ x^{2} − 8x + 16', '12x ≤ 12 ⟺ x ≤ 1'], r: '(−∞, 1]', d: ['[1, +∞)', '[−2, 4]', '(−∞, 1)'] },
    { q: '|3x − 2| ≤ |x|', ch: ['(3x − 2)^{2} ≤ x^{2}', '9x^{2} − 12x + 4 ≤ x^{2}', '8x^{2} − 12x + 4 ≤ 0 ⟺ 4(2x − 1)(x − 1) ≤ 0'], r: '[\\fr{1}{2}, 1]', d: ['(\\fr{1}{2}, 1)', '(−∞, \\fr{1}{2}] ∪ [1, +∞)', '[\\fr{2}{3}, 1]'] },
    { q: '|x − 1| ≥ |x + 5|', ch: ['(x − 1)^{2} ≥ (x + 5)^{2}', 'x^{2} − 2x + 1 ≥ x^{2} + 10x + 25', '−12x ≥ 24 ⟺ x ≤ −2'], r: '(−∞, −2]', d: ['[−2, +∞)', '(−∞, −2)', '[−5, 1]'] }
  ];
  function bkAbsSqGen() {
    const it = Z.pick(BKABSQ);
    return { q: () => md(L(`Resol $${it.q}$.`, `Resuelve $${it.q}$.`)),
      hint: () => P(L('Els dos costats són ≥ 0, així que la desigualtat equival a la dels quadrats. Després és una inequació de segon grau (o de primer).', 'Los dos lados son ≥ 0, así que la desigualdad equivale a la de los cuadrados. Después es una inecuación de segundo grado (o de primero).')),
      fx: bkFxAbsSq,
      sol: () => it.ch.map((m_, j) => kS(j ? '' : L('Elevem al quadrat', 'Elevamos al cuadrado'), m_, j ? '' : L('|u| < |v| ⟺ u² < v² perquè tots dos són ≥ 0', '|u| < |v| ⟺ u² < v² porque los dos son ≥ 0'))).concat([kDone('x ∈ ' + it.r, L('Mira el signe del producte: positiu fora de les arrels, negatiu entre elles.', 'Mira el signo del producto: positivo fuera de las raíces, negativo entre ellas.'))]),
      a: ivMc(it.r, it.d) };
  }
  const BKABSP = [
    { s: '|x| − |y| ≤ |x − y|', ch: () => [['x = (x − y) + y', L('sumem i restem y', 'sumamos y restamos y')], ['|x| = |(x − y) + y| ≤ |x − y| + |y|', L('desigualtat triangular', 'desigualdad triangular')], ['|x| − |y| ≤ |x − y|', L('restem |y|', 'restamos |y|')]] },
    { s: '|x + y| ≤ |x| + |y|', ch: () => [['−|x| ≤ x ≤ |x|,   −|y| ≤ y ≤ |y|', L('per definició de valor absolut', 'por definición de valor absoluto')], ['−(|x| + |y|) ≤ x + y ≤ |x| + |y|', L('sumem les dues', 'sumamos las dos')], ['|x + y| ≤ |x| + |y|', L('perquè |u| ≤ r ⟺ −r ≤ u ≤ r', 'porque |u| ≤ r ⟺ −r ≤ u ≤ r')]] },
    { s: L => L('|x| ≤ a ⟺ −a ≤ x ≤ a   (a ≥ 0)', '|x| ≤ a ⟺ −a ≤ x ≤ a   (a ≥ 0)'), ch: () => [[L('(⟹) Si x ≥ 0: x = |x| ≤ a i −a ≤ 0 ≤ x. Si x < 0: −x = |x| ≤ a, és a dir, x ≥ −a, i x < 0 ≤ a.', '(⟹) Si x ≥ 0: x = |x| ≤ a y −a ≤ 0 ≤ x. Si x < 0: −x = |x| ≤ a, es decir, x ≥ −a, y x < 0 ≤ a.'), L('per casos', 'por casos')], [L('(⟸) Si x ≥ 0, |x| = x ≤ a. Si x < 0, |x| = −x ≤ a perquè −a ≤ x.', '(⟸) Si x ≥ 0, |x| = x ≤ a. Si x < 0, |x| = −x ≤ a porque −a ≤ x.'), '']] },
    { s: '|xy| = |x| · |y|', ch: () => [[L('Si x, y ≥ 0: xy ≥ 0 i |xy| = xy = |x||y|.', 'Si x, y ≥ 0: xy ≥ 0 y |xy| = xy = |x||y|.'), ''], [L('Si x ≥ 0 > y: xy ≤ 0 i |xy| = −xy = x · (−y) = |x||y|.', 'Si x ≥ 0 > y: xy ≤ 0 y |xy| = −xy = x · (−y) = |x||y|.'), L('el cas x < 0 ≤ y és simètric', 'el caso x < 0 ≤ y es simétrico')], [L('Si x, y < 0: xy > 0 i |xy| = xy = (−x)(−y) = |x||y|.', 'Si x, y < 0: xy > 0 y |xy| = xy = (−x)(−y) = |x||y|.'), '']] },
    { s: '\\it{max}(x, y) = \\fr{x + y + |x − y|}{2}', ch: () => [[L('Si x ≥ y: |x − y| = x − y i el costat dret és (x + y + x − y)/2 = x = max(x, y).', 'Si x ≥ y: |x − y| = x − y y el lado derecho es (x + y + x − y)/2 = x = max(x, y).'), ''], [L('Si x < y: |x − y| = y − x i el costat dret és (x + y + y − x)/2 = y = max(x, y).', 'Si x < y: |x − y| = y − x y el lado derecho es (x + y + y − x)/2 = y = max(x, y).'), '']] }
  ];
  function bkAbsProofGen() {
    const it = Z.pick(BKABSP), s = () => typeof it.s === 'function' ? it.s(L) : it.s;
    return { q: () => md(L(`Demostra que per a tot $x, y ∈ ℝ$: $${s()}$.`, `Demuestra que para todo $x, y ∈ ℝ$: $${s()}$.`)),
      hint: () => P(L('O bé separes per casos segons el signe, o bé fas servir la desigualtat triangular amb un «sumar i restar» ben triat.', 'O bien separas por casos según el signo, o bien usas la desigualdad triangular con un «sumar y restar» bien elegido.')),
      fx: () => bkFxAbsProof(BKABSP.indexOf(it)),
      sol: () => it.ch().map(([m_, w]) => kS('', m_, w)).concat([kT(L('Conclusió', 'Conclusión'), md(L('Queda demostrat per a qualsevol $x, y$.', 'Queda demostrado para cualquier $x, y$.')), 'done')]), a: { k: 'self' } };
  }
  const BKIRR = [
    { s: '\\sq{2} ∉ ℚ', ch: () => [[L('Suposem \\sq{2} = \\fr{p}{q} amb p, q ∈ ℕ sense factors comuns.', 'Supongamos \\sq{2} = \\fr{p}{q} con p, q ∈ ℕ sin factores comunes.'), L('reducció a l\'absurd', 'reducción al absurdo')], ['p^{2} = 2q^{2}', L('elevem al quadrat', 'elevamos al cuadrado')], [L('p^{2} és parell ⟹ p és parell: p = 2m', 'p^{2} es par ⟹ p es par: p = 2m'), L('si p fos senar, p² seria senar', 'si p fuera impar, p² sería impar')], ['4m^{2} = 2q^{2} ⟹ q^{2} = 2m^{2}', L('i per tant q també és parell', 'y por tanto q también es par')], [L('p i q parells: contradicció amb «sense factors comuns».', 'p y q pares: contradicción con «sin factores comunes».'), '']] },
    { s: '\\sq{3} ∉ ℚ', ch: () => [[L('Suposem \\sq{3} = \\fr{p}{q} irreductible.', 'Supongamos \\sq{3} = \\fr{p}{q} irreducible.'), ''], ['p^{2} = 3q^{2}', ''], [L('3 | p^{2} ⟹ 3 | p: p = 3m', '3 | p^{2} ⟹ 3 | p: p = 3m'), L('3 és primer: si divideix un producte, divideix algun factor', '3 es primo: si divide un producto, divide algún factor')], ['9m^{2} = 3q^{2} ⟹ q^{2} = 3m^{2} ⟹ 3 | q', ''], [L('3 divideix p i q: contradicció.', '3 divide a p y a q: contradicción.'), '']] },
    { s: L => L('si r ∈ ℚ i x ∉ ℚ, aleshores r + x ∉ ℚ', 'si r ∈ ℚ y x ∉ ℚ, entonces r + x ∉ ℚ'), ch: () => [[L('Suposem r + x = s ∈ ℚ.', 'Supongamos r + x = s ∈ ℚ.'), L('reducció a l\'absurd', 'reducción al absurdo')], ['x = s − r', ''], [L('La resta de dos racionals és racional: x ∈ ℚ. Contradicció.', 'La resta de dos racionales es racional: x ∈ ℚ. Contradicción.'), L('ℚ és tancat per la suma i l\'oposat', 'ℚ es cerrado por la suma y el opuesto')]] },
    { s: '\\sq{2} + \\sq{3} ∉ ℚ', ch: () => [[L('Suposem \\sq{2} + \\sq{3} = r ∈ ℚ.', 'Supongamos \\sq{2} + \\sq{3} = r ∈ ℚ.'), ''], ['r^{2} = 2 + 2\\sq{6} + 3 = 5 + 2\\sq{6}', L('elevem al quadrat', 'elevamos al cuadrado')], ['\\sq{6} = \\fr{r^{2} − 5}{2} ∈ ℚ', ''], [L('Però \\sq{6} ∉ ℚ (mateix argument que \\sq{2}: p² = 6q² obliga p i q parells). Contradicció.', 'Pero \\sq{6} ∉ ℚ (mismo argumento que \\sq{2}: p² = 6q² obliga a p y q pares). Contradicción.'), '']] },
    { s: L => L('entre dos racionals diferents sempre hi ha un altre racional', 'entre dos racionales distintos siempre hay otro racional'), ch: () => [[L('Siguin p < q racionals.', 'Sean p < q racionales.'), ''], ['m = \\fr{p + q}{2} ∈ ℚ', L('ℚ és tancat per la suma i per dividir per 2', 'ℚ es cerrado por la suma y por dividir por 2')], ['p = \\fr{p + p}{2} < \\fr{p + q}{2} < \\fr{q + q}{2} = q', L('per tant p < m < q', 'por tanto p < m < q')]] }
  ];
  function bkIrrGen() {
    const it = Z.pick(BKIRR), s = () => typeof it.s === 'function' ? it.s(L) : it.s;
    return { fx: () => bkFxIrr(BKIRR.indexOf(it)), q: () => md(L(`Demostra: $${s()}$.`, `Demuestra: $${s()}$.`)),
      hint: () => P(L('Gairebé sempre és per reducció a l\'absurd: suposa que és racional, escriu-lo com a fracció irreductible i arriba a una contradicció.', 'Casi siempre es por reducción al absurdo: supón que es racional, escríbelo como fracción irreducible y llega a una contradicción.')),
      sol: () => it.ch().map(([m_, w]) => kS('', m_, w)).concat([kT(L('Conclusió', 'Conclusión'), md(L('Queda demostrat.', 'Queda demostrado.')), 'done')]), a: { k: 'self' } };
  }
  const BKSUPP = [
    { s: '\\it{sup}\\{1 − \\fr{1}{n} | n ∈ ℕ\\} = 1', ch: () => [[L('Cota superior: 1 − \\fr{1}{n} < 1 per a tot n.', 'Cota superior: 1 − \\fr{1}{n} < 1 para todo n.'), ''], [L('És la més petita: sigui ε > 0. Per la propietat arquimediana hi ha n amb \\fr{1}{n} < ε.', 'Es la más pequeña: sea ε > 0. Por la propiedad arquimediana hay n con \\fr{1}{n} < ε.'), ''], [L('Llavors 1 − \\fr{1}{n} > 1 − ε: cap 1 − ε no és cota superior.', 'Entonces 1 − \\fr{1}{n} > 1 − ε: ningún 1 − ε es cota superior.'), L('per tant sup = 1, i no és màxim perquè no s\'assoleix', 'por tanto sup = 1, y no es máximo porque no se alcanza')]] },
    { s: '\\it{inf}\\{\\fr{1}{n} | n ∈ ℕ\\} = 0', ch: () => [[L('Cota inferior: \\fr{1}{n} > 0.', 'Cota inferior: \\fr{1}{n} > 0.'), ''], [L('És la més gran: per a ε > 0 hi ha n amb \\fr{1}{n} < ε, així que ε no és cota inferior.', 'Es la mayor: para ε > 0 hay n con \\fr{1}{n} < ε, así que ε no es cota inferior.'), L('propietat arquimediana', 'propiedad arquimediana')], [L('inf = 0, que no és mínim: 0 ≠ \\fr{1}{n} per a cap n.', 'inf = 0, que no es mínimo: 0 ≠ \\fr{1}{n} para ningún n.'), '']] },
    { s: '\\it{sup}\\,(a, b) = b', ch: () => [[L('b és cota superior: tot x ∈ (a, b) compleix x < b.', 'b es cota superior: todo x ∈ (a, b) cumple x < b.'), ''], [L('Si c < b fos cota, prenem x = \\it{max}(c, a) i el punt mitjà m = \\fr{x + b}{2}.', 'Si c < b fuera cota, tomamos x = \\it{max}(c, a) y el punto medio m = \\fr{x + b}{2}.'), ''], [L('m ∈ (a, b) i m > c: c no és cota. Per tant sup = b, i b ∉ (a, b): no és màxim.', 'm ∈ (a, b) y m > c: c no es cota. Por tanto sup = b, y b ∉ (a, b): no es máximo.'), '']] }
  ];
  function bkSupProofGen() {
    const it = Z.pick(BKSUPP);
    return { fx: () => bkFxSupProof(BKSUPP.indexOf(it)), q: () => md(L(`Demostra: $${it.s}$.`, `Demuestra: $${it.s}$.`)),
      hint: () => P(L('Dues parts: (1) és una cota; (2) qualsevol valor una mica més petit (o més gran, per a l\'ínfim) ja no ho és. Per a la segona, fes servir un ε > 0.', 'Dos partes: (1) es una cota; (2) cualquier valor un poco más pequeño (o mayor, para el ínfimo) ya no lo es. Para la segunda, usa un ε > 0.')),
      sol: () => it.ch().map(([m_, w]) => kS('', m_, w)).concat([kT(L('Conclusió', 'Conclusión'), md(L('Queda demostrat.', 'Queda demostrado.')), 'done')]), a: { k: 'self' } };
  }
  BKT.nomb = { n: () => L('Reals i valor absolut', 'Reales y valor absoluto'), lv: {
    1: [{ n: () => L('|x − a| ≤ b', '|x − a| ≤ b'), g: bkAbsLeGen }, { n: () => L('Equació amb valor absolut', 'Ecuación con valor absoluto'), g: bkAbsEqGen }, { n: () => L('Operacions amb intervals', 'Operaciones con intervalos'), g: bkIntOpsGen }, { n: () => L('Conjunt més petit', 'Conjunto más pequeño'), g: bkClassifyGen }, { n: () => L('Decimal periòdic', 'Decimal periódico'), g: bkPeriodicGen }],
    2: [{ n: () => L('|x − a| ≥ b', '|x − a| ≥ b'), g: bkAbsGeGen }, { n: () => L('|px + c| < b', '|px + c| < b'), g: bkAbsLinGen }, { n: () => L('Suprem i ínfim', 'Supremo e ínfimo'), g: bkSupGen }, { n: () => L('Més a prop de…', 'Más cerca de…'), g: bkDistGen }, { n: () => L('Entorns', 'Entornos'), g: bkEntGen }],
    3: [{ n: () => L('Suma de valors absoluts', 'Suma de valores absolutos'), g: bkAbsSumGen }, { n: () => L('|u| < |v| elevant al quadrat', '|u| < |v| elevando al cuadrado'), g: bkAbsSqGen }, { n: () => L('Demostració amb valor absolut', 'Demostración con valor absoluto'), g: bkAbsProofGen }, { n: () => L('Irracionals', 'Irracionales'), g: bkIrrGen }, { n: () => L('Demostrar un suprem', 'Demostrar un supremo'), g: bkSupProofGen }]
  } };

  /* ---------- només amb el formulari: guies de reals, valor absolut i suprem ---------- */
  const FXN = {
    absLe: () => L('$|u| ≤ r ⟺ −r ≤ u ≤ r$ (amb $r ≥ 0$) no és al formulari. Demostració per casos amb la definició ($|u| = u$ si $u ≥ 0$; $|u| = −u$ si $u < 0$): si $u ≥ 0$, $|u| ≤ r$ és $u ≤ r$, i $−r ≤ 0 ≤ u$ ja es compleix; si $u < 0$, $|u| ≤ r$ és $−u ≤ r$, és a dir $u ≥ −r$, i $u < 0 ≤ r$. Amb $<$ és igual.', '$|u| ≤ r ⟺ −r ≤ u ≤ r$ (con $r ≥ 0$) no está en el formulario. Demostración por casos con la definición ($|u| = u$ si $u ≥ 0$; $|u| = −u$ si $u < 0$): si $u ≥ 0$, $|u| ≤ r$ es $u ≤ r$, y $−r ≤ 0 ≤ u$ ya se cumple; si $u < 0$, $|u| ≤ r$ es $−u ≤ r$, es decir $u ≥ −r$, y $u < 0 ≤ r$. Con $<$ es igual.'),
    absGe: () => L('$|u| ≥ r ⟺ u ≥ r ∨ u ≤ −r$: no hi és, però és la negació de $|u| < r ⟺ −r < u < r$ (De Morgan lògic). Demostra primer aquesta o fes els dos casos de signe.', '$|u| ≥ r ⟺ u ≥ r ∨ u ≤ −r$: no está, pero es la negación de $|u| < r ⟺ −r < u < r$ (De Morgan lógico). Demuestra primero esa o haz los dos casos de signo.'),
    ord: () => L('Sumar el mateix nombre a totes les bandes, o multiplicar per un positiu, conserva la desigualtat; multiplicar per un negatiu la gira. Són propietats de l\'ordre de ℝ (axiomes dels apunts), no del formulari: cita-les.', 'Sumar el mismo número a todos los lados, o multiplicar por un positivo, conserva la desigualdad; multiplicar por un negativo la gira. Son propiedades del orden de ℝ (axiomas de los apuntes), no del formulario: cítalas.'),
    inf: () => L('§5 només té intervals acotats. Els que tenen $±∞$ s\'escriuen igual, sempre amb parèntesi obert a l\'infinit: $(−∞, a] = \\{x ∈ ℝ | x ≤ a\\}$.', '§5 solo tiene intervalos acotados. Los que tienen $±∞$ se escriben igual, siempre con paréntesis abierto en el infinito: $(−∞, a] = \\{x ∈ ℝ | x ≤ a\\}$.'),
    intw: () => L('El formulari t\'ajuda a escriure el resultat: §5 diu quina doble desigualtat és cada interval (≤ amb claudàtor, < amb parèntesi).', 'El formulario te ayuda a escribir el resultado: §5 dice qué doble desigualdad es cada intervalo (≤ con corchete, < con paréntesis).'),
    sqrtUp: () => L('L\'arrel quadrada és creixent: per a $p, q ≥ 0$, $p < q ⟺ \\sq{p} < \\sq{q}$. Propietat de l\'ordre, no del formulari: enuncia-la.', 'La raíz cuadrada es creciente: para $p, q ≥ 0$, $p < q ⟺ \\sq{p} < \\sq{q}$. Propiedad del orden, no del formulario: enúnciala.'),
    sign: () => L('El signe d\'un producte $(x − p)(x − q)$ amb $p < q$: positiu fora de $[p, q]$ i negatiu entre $p$ i $q$ (regla dels signes). No hi és: justifica-ho amb una taula de signes.', 'El signo de un producto $(x − p)(x − q)$ con $p < q$: positivo fuera de $[p, q]$ y negativo entre $p$ y $q$ (regla de los signos). No está: justifícalo con una tabla de signos.'),
    arch: () => L('Propietat arquimediana: per a tot $ε > 0$ hi ha $n ∈ ℕ$ amb $\\fr{1}{n} < ε$. No és al formulari: enuncia-la quan la facis servir.', 'Propiedad arquimediana: para todo $ε > 0$ hay $n ∈ ℕ$ con $\\fr{1}{n} < ε$. No está en el formulario: enúnciala cuando la uses.'),
    supDef: () => L('Cota, suprem, ínfim, màxim i mínim no són al formulari: són definicions. Suprem = la cota superior més petita; és màxim només si pertany al conjunt.', 'Cota, supremo, ínfimo, máximo y mínimo no están en el formulario: son definiciones. Supremo = la cota superior más pequeña; es máximo solo si pertenece al conjunto.'),
    euclid: () => L('Si un primer $p$ divideix $a^{2}$, divideix $a$ (lema d\'Euclides), i tot racional es pot escriure com a fracció irreductible: no són al formulari, enuncia\'ls.', 'Si un primo $p$ divide a $a^{2}$, divide a $a$ (lema de Euclides), y todo racional se puede escribir como fracción irreducible: no están en el formulario, enúncialos.'),
    qClosed: () => L('ℚ és tancat per la suma, la resta, el producte i la divisió per un no nul: propietat dels racionals, enuncia-la.', 'ℚ es cerrado por la suma, la resta, el producto y la división por un no nulo: propiedad de los racionales, enúnciala.')
  };
  const INTK = ['INTc', 'INTo', 'INTsd', 'INTse'];
  function bkFxAbsLe() { return { on: INTK, plan: L('La traducció del valor absolut no és al formulari (mira a sota); un cop la tens, §5 et diu com s\'escriu el resultat: $a ≤ x ≤ b$ és $[a, b]$ i $a < x < b$ és $(a, b)$.', 'La traducción del valor absoluto no está en el formulario (mira abajo); una vez la tienes, §5 te dice cómo se escribe el resultado: $a ≤ x ≤ b$ es $[a, b]$ y $a < x < b$ es $(a, b)$.'), compte: [], fora: [FXN.absLe(), FXN.ord()] }; }
  function bkFxAbsEq(b) { return { on: ['MDpos'], plan: (b <= 0 ? L(`§6.3 diu $|z| ≥ 0$, amb $|z| = 0 ⇔ z = 0$. ${b < 0 ? 'Com que el costat dret és negatiu, no hi ha solució.' : 'Per tant el de dins ha de ser 0.'}`, `§6.3 dice $|z| ≥ 0$, con $|z| = 0 ⇔ z = 0$. ${b < 0 ? 'Como el lado derecho es negativo, no hay solución.' : 'Por tanto lo de dentro tiene que ser 0.'}`) : L('Amb $b > 0$, el de dins és $b$ o $−b$ (per casos amb la definició de $|u|$).', 'Con $b > 0$, lo de dentro es $b$ o $−b$ (por casos con la definición de $|u|$).')), compte: [FXT.realCx()], fora: b > 0 ? [L('$|u| = b ⟺ u = b ∨ u = −b$ (amb $b > 0$): no hi és; surt dels dos casos de la definició.', '$|u| = b ⟺ u = b ∨ u = −b$ (con $b > 0$): no está; sale de los dos casos de la definición.')] : [] }; }
  function bkFxIntOps(op) { return { on: INTK, plan: L('§5 defineix cada interval com un conjunt $\\{x ∈ ℝ | …\\}$. Aleshores ' + (op === '∩' ? 'la intersecció és ajuntar les dues condicions amb «i»' : op === '∪' ? 'la unió és ajuntar les condicions amb «o»' : 'el complementari és negar la condició: $¬(a ≤ x) ⟺ x < a$, per això cada claudàtor canvia') + '.', '§5 define cada intervalo como un conjunto $\\{x ∈ ℝ | …\\}$. Entonces ' + (op === '∩' ? 'la intersección es juntar las dos condiciones con «y»' : op === '∪' ? 'la unión es juntar las condiciones con «o»' : 'el complementario es negar la condición: $¬(a ≤ x) ⟺ x < a$, por eso cada corchete cambia') + '.'), compte: op === 'c' ? [FXN.inf()] : [], fora: [] }; }
  function bkFxClassify() { return { on: ['NUM'], plan: L('§1 només et dona els noms. Fes servir que $ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ ⊆ ℂ$: simplifica el nombre i mira quin és el primer conjunt de la cadena que el conté.', '§1 solo te da los nombres. Usa que $ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ ⊆ ℂ$: simplifica el número y mira cuál es el primer conjunto de la cadena que lo contiene.'), compte: [FXT.nat()], fora: [L('Que un nombre concret és irracional ($\\sq{2}$, $\\sq{3}$…) no és al formulari: si et demanen justificar-ho, cal la demostració per l\'absurd.', 'Que un número concreto es irracional ($\\sq{2}$, $\\sq{3}$…) no está en el formulario: si te piden justificarlo, hace falta la demostración por el absurdo.')] }; }
  function bkFxPeriodic() { return { on: [], plan: L('El formulari no diu res dels decimals. El mètode de les dues còpies (multiplicar per potències de 10 i restar perquè s\'anul·li el període) és la justificació: escriu-lo sencer.', 'El formulario no dice nada de los decimales. El método de las dos copias (multiplicar por potencias de 10 y restar para que se anule el período) es la justificación: escríbelo entero.'), compte: [L('Per fer-la irreductible, divideix numerador i denominador pel màxim comú divisor.', 'Para hacerla irreducible, divide numerador y denominador por el máximo común divisor.')], fora: [] }; }
  function bkFxAbsGe() { return { on: INTK, plan: FXN.intw(), compte: [FXN.inf()], fora: [FXN.absGe(), FXN.ord()] }; }
  function bkFxAbsLin() { return { on: INTK, plan: FXN.intw(), compte: [L('Dividir per un positiu no gira la desigualtat.', 'Dividir por un positivo no gira la desigualdad.')], fora: [FXN.absLe(), FXN.ord()] }; }
  function bkFxSup() { return { on: INTK, plan: L('Escriu els primers elements (o, si és un interval, llegeix-ne els extrems amb §5). El suprem i l\'ínfim són els extrems; són màxim o mínim només si pertanyen al conjunt: §5 et diu si l\'extrem hi és (claudàtor) o no (parèntesi).', 'Escribe los primeros elementos (o, si es un intervalo, lee sus extremos con §5). El supremo y el ínfimo son los extremos; son máximo o mínimo solo si pertenecen al conjunto: §5 te dice si el extremo está (corchete) o no (paréntesis).'), compte: [FXN.supDef()], fora: [L('Per justificar que el suprem és exactament aquest valor (i no un de més petit) cal la propietat arquimediana; vegeu el nivell extrem.', 'Para justificar que el supremo es exactamente ese valor (y no uno más pequeño) hace falta la propiedad arquimediana; ver el nivel extremo.')] }; }
  function bkFxDist() { return { on: ['MDsq', 'MDpos'], plan: L('Per §6.3, $|u| = \\sq{u · \\ov{u}}$, i per a un real $\\ov{u} = u$: $|u| = \\sq{u^{2}}$. Com que els dos costats són $≥ 0$, $|u| < |v| ⟺ u^{2} < v^{2}$. Després és una inequació de primer grau.', 'Por §6.3, $|u| = \\sq{u · \\ov{u}}$, y para un real $\\ov{u} = u$: $|u| = \\sq{u^{2}}$. Como los dos lados son $≥ 0$, $|u| < |v| ⟺ u^{2} < v^{2}$. Después es una inecuación de primer grado.'), compte: [FXT.realCx(), FXN.inf()], fora: [FXN.sqrtUp(), FXN.ord()] }; }
  function bkFxEnt() { return { on: ['INTo'], plan: L('L\'entorn $E(a, r) = (a − r, a + r)$ és una definició dels apunts; §5 diu que $(c, d) = \\{x | c < x < d\\}$. Iguala extrems: $a − r = c$ i $a + r = d$; sumant i restant surten $a$ i $r$.', 'El entorno $E(a, r) = (a − r, a + r)$ es una definición de los apuntes; §5 dice que $(c, d) = \\{x | c < x < d\\}$. Iguala extremos: $a − r = c$ y $a + r = d$; sumando y restando salen $a$ y $r$.'), compte: [], fora: [] }; }
  function bkFxAbsSum() { return { on: ['MDtri', 'MDconj', 'INTc'], plan: L('Separa en tres casos segons el signe de cada valor absolut (definició). La triangular de §6.3 explica per què de vegades no hi ha solució: $|b − a| = |(x − a) + (b − x)| ≤ |x − a| + |x − b|$ (amb $|b − x| = |x − b|$, §6.3), així que la suma mai és menor que la distància entre $a$ i $b$.', 'Separa en tres casos según el signo de cada valor absoluto (definición). La triangular de §6.3 explica por qué a veces no hay solución: $|b − a| = |(x − a) + (b − x)| ≤ |x − a| + |x − b|$ (con $|b − x| = |x − b|$, §6.3), así que la suma nunca es menor que la distancia entre $a$ y $b$.'), compte: [FXT.realCx()], fora: [FXN.ord()] }; }
  function bkFxAbsSq() { return { on: ['MDsq', 'MDpos'], plan: L('Per §6.3 (amb el truc dels reals), $|u| = \\sq{u^{2}}$, i com que els dos costats són $≥ 0$ la desigualtat entre valors absoluts equival a la dels quadrats. Després, inequació de segon grau.', 'Por §6.3 (con el truco de los reales), $|u| = \\sq{u^{2}}$, y como los dos lados son $≥ 0$ la desigualdad entre valores absolutos equivale a la de los cuadrados. Después, inecuación de segundo grado.'), compte: [FXT.realCx(), FXN.inf()], fora: [FXN.sqrtUp(), FXN.sign()] }; }
  const BKABSP_F = [
    { on: ['MDtri'], plan: () => L('Només amb el formulari: la triangular de §6.3 amb $z = x − y$ i $w = y$ dona $|x| = |(x − y) + y| ≤ |x − y| + |y|$. Resta $|y|$.', 'Solo con el formulario: la triangular de §6.3 con $z = x − y$ y $w = y$ da $|x| = |(x − y) + y| ≤ |x − y| + |y|$. Resta $|y|$.') },
    { on: ['MDtri'], plan: () => L('És la triangular de §6.3 (els reals són complexos): en un exercici la pots citar. Si et demanen <b>demostrar-la</b> per a reals, cal l\'argument de la solució.', 'Es la triangular de §6.3 (los reales son complejos): en un ejercicio la puedes citar. Si te piden <b>demostrarla</b> para reales, hace falta el argumento de la solución.') },
    { on: [], plan: () => L('No és al formulari: es demostra per casos amb la definició de $|x|$, com a la solució.', 'No está en el formulario: se demuestra por casos con la definición de $|x|$, como en la solución.') },
    { on: ['MDprod'], plan: () => L('És $|zw| = |z| · |w|$ de §6.3 aplicat a reals: la pots citar. Per demostrar-la només per a reals, fes els casos de signe de la solució.', 'Es $|zw| = |z| · |w|$ de §6.3 aplicado a reales: la puedes citar. Para demostrarla solo para reales, haz los casos de signo de la solución.') },
    { on: [], plan: () => L('No és al formulari: dos casos, $x ≥ y$ i $x < y$, amb la definició de $|x − y|$.', 'No está en el formulario: dos casos, $x ≥ y$ y $x < y$, con la definición de $|x − y|$.') }
  ];
  function bkFxAbsProof(j) { const f = BKABSP_F[j]; return { on: f.on, plan: f.plan(), compte: f.on.length ? [FXT.realCx()] : [], fora: [] }; }
  function bkFxIrr(j) { return { on: ['NUM'], plan: L('El formulari no hi ajuda: és una reducció a l\'absurd. Suposa que és racional, escriu-lo com a fracció i arriba a una contradicció.', 'El formulario no ayuda: es una reducción al absurdo. Supón que es racional, escríbelo como fracción y llega a una contradicción.'), compte: [], fora: j === 2 || j === 4 ? [FXN.qClosed()] : j === 3 ? [FXN.qClosed(), L('Que $\\sq{6} ∉ ℚ$: mateix argument que $\\sq{2}$ (enuncia\'l o demostra\'l).', 'Que $\\sq{6} ∉ ℚ$: mismo argumento que $\\sq{2}$ (enúncialo o demuéstralo).')] : [FXN.euclid()] }; }
  function bkFxSupProof(j) { return { on: j === 2 ? ['INTo'] : [], plan: L('Dues parts: (1) és una cota (per a tots els elements); (2) cap valor més petit (o més gran, per a l\'ínfim) ho és, amb un $ε > 0$.', 'Dos partes: (1) es una cota (para todos los elementos); (2) ningún valor más pequeño (o mayor, para el ínfimo) lo es, con un $ε > 0$.'), compte: [FXN.supDef()], fora: j === 2 ? [] : [FXN.arch()] }; }
  return { qn, qv, qTx, IV, ivTx, unTx, xm, linTx, ivMc, bkAbsLeGen, bkAbsEqGen, bkIntOpsGen, bkClassifyGen, bkPeriodicGen, bkAbsGeGen, bkAbsLinGen, BKSUP, bkSupGen, bkDistGen, bkEntGen, bkAbsSumGen, BKABSQ, bkAbsSqGen, BKABSP, bkAbsProofGen, BKIRR, bkIrrGen, BKSUPP, bkSupProofGen, FXN, INTK, bkFxAbsLe, bkFxAbsEq, bkFxIntOps, bkFxClassify, bkFxPeriodic, bkFxAbsGe, bkFxAbsLin, bkFxSup, bkFxDist, bkFxEnt, bkFxAbsSum, bkFxAbsSq, BKABSP_F, bkFxAbsProof, bkFxIrr, bkFxSupProof };
}
