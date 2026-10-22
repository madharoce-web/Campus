import { Z } from '../engine/z.js';

/**
 * Banc · tema 3: matrius i determinants.
 * Codi original; l'idioma i les dependències arriben pel contenidor $ (un per idioma).
 */
export function makeBankMat($) {
  const { BKORD, BKT, C, L, M, P, Q, SAR, aij, invSteps, kDone, kS, kT, mAdd, mCof, mDet, mEq, mId, mInv, mMinorM, mMul, mQ, mRank, mSc, mSubM, mT, mTx, md, ng, pr, qPar, qa, qd, qeq, qm, qneg, qnum, qtx, qz, ri, rnz } = $;
  /* ---------- BANC · TEMA 3: matrius i determinants ---------- */
  const k3M = (m, n, lo, hi) => Array.from({ length: m }, () => Array.from({ length: n }, () => Q(ri(lo, hi))));
  const k3Num = A => A.map(r => r.map(qnum));
  const k3Mat = A => ({ k: 'mat', v: k3Num(A), show: () => M(mTx(A)) });
  const k3Fm = (A, lab) => ({ k: 'mat', lab, v: k3Num(A) });
  const k3I = (i, j) => (i + 1) + '' + (j + 1);
  const k3Tr = A => A.reduce((a, r, i) => qa(a, r[i]), Q(0));
  function k3Inv2(lo, hi, dets) {   // 2×2 amb determinant dins de dets
    for (let t = 0; t < 400; t++) { const A = k3M(2, 2, lo, hi), d = mDet(A); if (dets.includes(qnum(d))) return A; }
    return mQ([[3, 1], [4, 2]]);
  }
  function k3Inv3(dets) {
    for (let t = 0; t < 4000; t++) { const A = k3M(3, 3, -2, 3), d = mDet(A); if (dets.includes(qnum(d)) && A.flat().filter(qz).length <= 3) return A; }
    return mQ([[1, 2, 3], [0, 1, 4], [5, 6, 0]]);
  }
  /* classificació de quadrades (per a l'exercici de tipus) */
  function k3Kinds(A) {
    const n = A.length, all = f => { for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (!f(i, j)) return false; return true; };
    const diag = all((i, j) => i === j || qz(A[i][j]));
    return { diag, esc: diag && all((i, j) => i !== j || qeq(A[i][i], A[0][0])), sup: all((i, j) => i <= j || qz(A[i][j])), inf: all((i, j) => i >= j || qz(A[i][j])), sim: all((i, j) => qeq(A[i][j], A[j][i])), anti: all((i, j) => qeq(A[i][j], qneg(A[j][i]))) };
  }

  /* ===== Matrius · nivell 1 ===== */
  function bkMxSizeGen() {
    const m = ri(2, 4), n = Z.pick([2, 3, 4].filter(x => x !== m)), A = k3M(m, n, -5, 9), i = ri(0, m - 1), j = ri(0, n - 1);
    return { q: () => md(L(`Sigui $A = ${mTx(A)}$. Quantes files i quantes columnes té, i quant val $${aij(i, j)}$?`, `Sea $A = ${mTx(A)}$. ¿Cuántas filas y cuántas columnas tiene, y cuánto vale $${aij(i, j)}$?`)),
      hint: () => P(L('A $a_{ij}$ el primer índex és la fila i el segon la columna; a $m × n$, $m$ són les files.', 'En $a_{ij}$ el primer índice es la fila y el segundo la columna; en $m × n$, $m$ son las filas.')),
      sol: () => [kS(L('Mida', 'Tamaño'), m + ' × ' + n, L(m + ' files (horitzontals) i ' + n + ' columnes (verticals)', m + ' filas (horizontales) y ' + n + ' columnas (verticales)')), kDone(aij(i, j) + ' = ' + qtx(A[i][j]), L('fila ' + (i + 1) + ', columna ' + (j + 1), 'fila ' + (i + 1) + ', columna ' + (j + 1)))],
      a: { k: 'multi', f: [{ k: 'num', lab: () => L('Files', 'Filas'), v: m }, { k: 'num', lab: () => L('Columnes', 'Columnas'), v: n }, { k: 'num', lab: () => M(aij(i, j)), v: qnum(A[i][j]) }] } };
  }
  function bkMxLinGen() {
    const r = 2, c = Z.pick([2, 3]), A = k3M(r, c, -4, 6), B = k3M(r, c, -4, 6), k1 = Z.pick([2, 3, -1, -2]), k2 = Z.pick([1, -1, 2, 3]);
    const kA = mSc(Q(k1), A), kB = mSc(Q(k2), B), R = mAdd(kA, kB);
    const ex = (k1 === 1 ? '' : k1 === -1 ? '−' : ng(k1)) + 'A ' + (k2 < 0 ? '− ' : '+ ') + (Math.abs(k2) === 1 ? '' : Math.abs(k2)) + 'B';
    return { q: () => md(L(`Amb $A = ${mTx(A)}$ i $B = ${mTx(B)}$, calcula $${ex}$.`, `Con $A = ${mTx(A)}$ y $B = ${mTx(B)}$, calcula $${ex}$.`)),
      hint: () => P(L('Primer multiplica cada element per l\'escalar; després suma posició a posició.', 'Primero multiplica cada elemento por el escalar; después suma posición a posición.')),
      sol: () => [kS(L('Producte per escalars', 'Producto por escalares'), ng(k1) + 'A = ' + mTx(kA) + ',   ' + ng(k2) + 'B = ' + mTx(kB)), kDone(ex + ' = ' + mTx(R), L('cada posició: ' + ng(k1) + ' · a_{ij} + ' + pr(k2) + ' · b_{ij}', 'cada posición: ' + ng(k1) + ' · a_{ij} + ' + pr(k2) + ' · b_{ij}'))],
      a: k3Mat(R) };
  }
  function bkMxTrGen() {
    const [m, n] = Z.pick([[2, 3], [3, 2], [2, 4], [3, 4], [1, 3], [4, 1]]), A = k3M(m, n, -5, 9), T = mT(A);
    return { q: () => md(L(`Calcula la transposada de $A = ${mTx(A)}$.`, `Calcula la traspuesta de $A = ${mTx(A)}$.`)),
      hint: () => P(L('Les files d\'A passen a ser les columnes d\'Aᵀ. Si A és m × n, Aᵀ és n × m.', 'Las filas de A pasan a ser las columnas de Aᵀ. Si A es m × n, Aᵀ es n × m.')),
      sol: () => [kS(L('Mida', 'Tamaño'), m + ' × ' + n + ' → ' + n + ' × ' + m), kS(L('Cada fila es fa columna', 'Cada fila se hace columna'), '(A^{T})_{ij} = a_{ji}'), kDone('A^{T} = ' + mTx(T))], a: k3Mat(T) };
  }
  function bkMxTraceGen() {
    const n = Z.pick([3, 4]), A = k3M(n, n, -6, 9), t = k3Tr(A);
    return { q: () => md(L(`Calcula la traça de $A = ${mTx(A)}$.`, `Calcula la traza de $A = ${mTx(A)}$.`)),
      hint: () => P(L('Només compta la diagonal principal: a₁₁, a₂₂, …', 'Solo cuenta la diagonal principal: a₁₁, a₂₂, …')),
      sol: () => [kDone('tr A = ' + A.map((r, i) => qPar(r[i])).join(' + ') + ' = ' + qtx(t), L('suma de la diagonal principal', 'suma de la diagonal principal'))], a: { k: 'num', v: qnum(t), show: () => M(qtx(t)) } };
  }
  function bkMxProdSizeGen() {
    const m = ri(1, 4), p = ri(1, 4), n = ri(1, 4), ok = Z.rnd(3) > 0, q = ok ? p : Z.pick([1, 2, 3, 4].filter(x => x !== p));
    const opts = [ok ? m + ' × ' + n : 'no', ok ? 'no' : m + ' × ' + n, p + ' × ' + q, n + ' × ' + m, m + ' × ' + p, q + ' × ' + n];
    const lab = o => o === 'no' ? L('No existeix', 'No existe') : M(o);
    const used = []; opts.forEach(o => { if (!used.includes(o)) used.push(o); });
    const fin = used.slice(0, 4);
    return { q: () => md(L(`$A$ és una matriu $${m} × ${p}$ i $B$ és $${q} × ${n}$. Quina mida té $AB$?`, `$A$ es una matriz $${m} × ${p}$ y $B$ es $${q} × ${n}$. ¿Qué tamaño tiene $AB$?`)),
      sol: () => [kS(L('Regla de les mides', 'Regla de los tamaños'), '(' + m + ' × ' + p + ') · (' + q + ' × ' + n + ')', ok ? L('els de dins coincideixen (' + p + ' = ' + q + ')', 'los de dentro coinciden (' + p + ' = ' + q + ')') : L('els de dins no coincideixen (' + p + ' ≠ ' + q + ')', 'los de dentro no coinciden (' + p + ' ≠ ' + q + ')')), ok ? kDone('AB: ' + m + ' × ' + n, L('els de fora donen la mida', 'los de fuera dan el tamaño')) : kT(L('Resultat', 'Resultado'), L('El producte <b>no existeix</b>.', 'El producto <b>no existe</b>.'), 'done')],
      a: { k: 'mc', o: fin.map(o => () => lab(o)), c: 0 } };
  }

  /* ===== Matrius · nivell 2 ===== */
  function bkMxProdGen() {
    const [m, p, n] = Z.pick([[2, 2, 2], [2, 3, 2], [2, 2, 3], [3, 2, 2], [2, 3, 1], [3, 3, 1]]), A = k3M(m, p, -3, 4), B = k3M(p, n, -3, 4), C = mMul(A, B);
    return { q: () => md(L(`Calcula $AB$ amb $A = ${mTx(A)}$ i $B = ${mTx(B)}$.`, `Calcula $AB$ con $A = ${mTx(A)}$ y $B = ${mTx(B)}$.`)),
      hint: () => P(L('Fila i d\'A per columna j de B dóna l\'element c_ij. El resultat és ' + m + ' × ' + n + '.', 'Fila i de A por columna j de B da el elemento c_ij. El resultado es ' + m + ' × ' + n + '.')),
      sol: () => [kS(L('Mida', 'Tamaño'), '(' + m + ' × ' + p + ') · (' + p + ' × ' + n + ') = ' + m + ' × ' + n)].concat(C.flatMap((r, i) => r.map((x, j) => kS('', 'c_{' + k3I(i, j) + '} = ' + A[i].map((a, k) => qPar(a) + ' · ' + qPar(B[k][j])).join(' + ') + ' = ' + qtx(x))))).concat([kDone('AB = ' + mTx(C))]),
      a: k3Mat(C) };
  }
  function bkMxCommGen() {
    const A = k3M(2, 2, -3, 4);
    let B = k3M(2, 2, -3, 4);
    if (Z.rnd(4) === 0) { const al = Z.pick([1, 2, -1]), be = Z.pick([1, -2, 3]); B = mAdd(mSc(Q(al), A), mSc(Q(be), mId(2))); }
    const AB = mMul(A, B), BA = mMul(B, A), eq = mEq(AB, BA);
    return { q: () => md(L(`Amb $A = ${mTx(A)}$ i $B = ${mTx(B)}$, calcula $AB$ i $BA$. Commuten?`, `Con $A = ${mTx(A)}$ y $B = ${mTx(B)}$, calcula $AB$ y $BA$. ¿Conmutan?`)),
      hint: () => P(L('Fes els dos productes per separat: a BA són les files de B per les columnes d\'A.', 'Haz los dos productos por separado: en BA son las filas de B por las columnas de A.')),
      sol: () => [kS('AB', mTx(A) + mTx(B) + ' = ' + mTx(AB)), kS('BA', mTx(B) + mTx(A) + ' = ' + mTx(BA)), kDone(eq ? 'AB = BA' : 'AB ≠ BA', eq ? L('Aquestes sí que commuten (B és una combinació de A i I), però en general no passa.', 'Estas sí conmutan (B es una combinación de A e I), pero en general no pasa.') : L('El producte de matrius no és commutatiu.', 'El producto de matrices no es conmutativo.'))],
      a: { k: 'multi', f: [k3Fm(AB, () => 'AB'), k3Fm(BA, () => 'BA'), { k: 'tf', lab: () => L('Commuten (AB = BA)?', '¿Conmutan (AB = BA)?'), v: eq }] } };
  }
  function bkMxPowGen() {
    const A = k3M(2, 2, -2, 3), e = Z.pick([2, 3]), A2 = mMul(A, A), R = e === 2 ? A2 : mMul(A, A2);
    return { q: () => md(L(`Calcula $A^{${e}}$ amb $A = ${mTx(A)}$.`, `Calcula $A^{${e}}$ con $A = ${mTx(A)}$.`)),
      hint: () => P(L('A² = A · A amb el producte de matrius, no elevant cada element.', 'A² = A · A con el producto de matrices, no elevando cada elemento.')),
      sol: () => [kS('A^{2} = A · A', mTx(A) + mTx(A) + ' = ' + mTx(A2))].concat(e === 3 ? [kS('A^{3} = A · A^{2}', mTx(A) + mTx(A2) + ' = ' + mTx(R))] : []).concat([kDone('A^{' + e + '} = ' + mTx(R))]),
      a: k3Mat(R) };
  }
  function bkMxTypeGen() {
    const kind = Z.pick(['sim', 'anti', 'sup', 'inf', 'diag', 'esc', 'gen']);
    const v = () => Q(rnz(-5, 6));
    let A = k3M(3, 3, -4, 6);
    if (kind === 'sim') for (let i = 0; i < 3; i++) for (let j = 0; j < i; j++) A[i][j] = A[j][i];
    if (kind === 'anti') for (let i = 0; i < 3; i++) for (let j = 0; j <= i; j++) A[i][j] = i === j ? Q(0) : qneg(A[j][i]);
    if (kind === 'sup') for (let i = 0; i < 3; i++) for (let j = 0; j < i; j++) A[i][j] = Q(0);
    if (kind === 'inf') for (let i = 0; i < 3; i++) for (let j = i + 1; j < 3; j++) A[i][j] = Q(0);
    if (kind === 'diag' || kind === 'esc') { const k = v(); A = A.map((r, i) => r.map((x, j) => i === j ? (kind === 'esc' ? k : v()) : Q(0))); }
    const K = k3Kinds(A), nm = { diag: L('Diagonal', 'Diagonal'), esc: L('Escalar', 'Escalar'), sup: L('Triangular superior', 'Triangular superior'), inf: L('Triangular inferior', 'Triangular inferior'), sim: L('Simètrica', 'Simétrica'), anti: L('Antisimètrica', 'Antisimétrica') };
    const keys = ['diag', 'esc', 'sup', 'inf', 'sim', 'anti'];
    const why = {
      diag: () => K.diag ? L('fora de la diagonal tot és 0', 'fuera de la diagonal todo es 0') : L('hi ha elements no nuls fora de la diagonal', 'hay elementos no nulos fuera de la diagonal'),
      esc: () => K.esc ? L('diagonal amb tota la diagonal igual', 'diagonal con toda la diagonal igual') : (K.diag ? L('diagonal, però la diagonal no és constant', 'diagonal, pero la diagonal no es constante') : L('ni tan sols és diagonal', 'ni siquiera es diagonal')),
      sup: () => K.sup ? L('zeros per sota de la diagonal', 'ceros por debajo de la diagonal') : L('hi ha algun element no nul per sota de la diagonal', 'hay algún elemento no nulo por debajo de la diagonal'),
      inf: () => K.inf ? L('zeros per sobre de la diagonal', 'ceros por encima de la diagonal') : L('hi ha algun element no nul per sobre de la diagonal', 'hay algún elemento no nulo por encima de la diagonal'),
      sim: () => K.sim ? 'a_{ij} = a_{ji}' : L('no és igual a la seva transposada', 'no es igual a su traspuesta'),
      anti: () => K.anti ? 'a_{ij} = −a_{ji}' : L('cal diagonal nul·la i aᵢⱼ = −aⱼᵢ', 'hace falta diagonal nula y aᵢⱼ = −aⱼᵢ') };
    return { q: () => md(L(`Digues de quins tipus és $A = ${mTx(A)}$.`, `Di de qué tipos es $A = ${mTx(A)}$.`)),
      hint: () => P(L('Compara A amb Aᵀ i mira on són els zeros. Una matriu pot ser de diversos tipus alhora.', 'Compara A con Aᵀ y mira dónde están los ceros. Una matriz puede ser de varios tipos a la vez.')),
      sol: () => [kS('A^{T}', mTx(mT(A)))].concat(keys.map(k => kS(nm[k] + ': ' + (K[k] ? L('sí', 'sí') : 'no'), '', why[k]()))),
      a: { k: 'tf', yes: () => L('Sí', 'Sí'), no: () => 'No', items: keys.map(k => ({ t: () => '<b>' + nm[k] + '</b>', v: K[k] })) } };
  }
  function bkMxEqGen() {
    const k = Z.pick([2, 3, -2]), x = rnz(-4, 5), y = rnz(-4, 5), p = ri(-3, 4), q = ri(-3, 4), B = k3M(2, 2, -4, 5);
    const X = mQ([[x, p], [q, y]]), R = mAdd(mSc(Q(k), X), B);
    const Ltx = ng(k) + ' · \\mat{x & ' + ng(p) + '; ' + ng(q) + ' & y} + ' + mTx(B) + ' = ' + mTx(R);
    return { q: () => md(L(`Troba $x$ i $y$ si $${Ltx}$.`, `Encuentra $x$ e $y$ si $${Ltx}$.`)),
      hint: () => P(L('Una igualtat de matrius són quatre igualtats de nombres: iguala posició a posició.', 'Una igualdad de matrices son cuatro igualdades de números: iguala posición a posición.')),
      sol: () => [kS(L('Posició (1, 1)', 'Posición (1, 1)'), ng(k) + 'x + ' + qPar(B[0][0]) + ' = ' + qtx(R[0][0]) + '  ⟹  x = ' + ng(x)), kS(L('Posició (2, 2)', 'Posición (2, 2)'), ng(k) + 'y + ' + qPar(B[1][1]) + ' = ' + qtx(R[1][1]) + '  ⟹  y = ' + ng(y)), kDone('x = ' + ng(x) + ',  y = ' + ng(y), L('les altres dues posicions es compleixen sense incògnites', 'las otras dos posiciones se cumplen sin incógnitas'))],
      a: { k: 'multi', f: [{ k: 'num', lab: () => M('x'), v: x }, { k: 'num', lab: () => M('y'), v: y }] } };
  }

  /* ===== Matrius · nivell 3 ===== */
  function bkMxDecompGen() {
    const A = k3M(3, 3, -4, 6), At = mT(A), S = mSc(Q(1, 2), mAdd(A, At)), K = mSc(Q(1, 2), mSubM(A, At));
    return { q: () => md(L(`Escriu $A = ${mTx(A)}$ com a suma d'una matriu simètrica $S$ i una antisimètrica $K$.`, `Escribe $A = ${mTx(A)}$ como suma de una matriz simétrica $S$ y una antisimétrica $K$.`)),
      hint: () => P(L('S = ½(A + Aᵀ) i K = ½(A − Aᵀ). Poden sortir fraccions.', 'S = ½(A + Aᵀ) y K = ½(A − Aᵀ). Pueden salir fracciones.')),
      sol: () => [kS('A^{T}', mTx(At)), kS('S = \\fr{1}{2}(A + A^{T})', '\\fr{1}{2}' + mTx(mAdd(A, At)) + ' = ' + mTx(S), L('és simètrica perquè Sᵀ = ½(Aᵀ + A) = S', 'es simétrica porque Sᵀ = ½(Aᵀ + A) = S')), kS('K = \\fr{1}{2}(A − A^{T})', '\\fr{1}{2}' + mTx(mSubM(A, At)) + ' = ' + mTx(K), L('antisimètrica: Kᵀ = ½(Aᵀ − A) = −K', 'antisimétrica: Kᵀ = ½(Aᵀ − A) = −K')), kDone('S + K = A', L('comprovació: suma les dues', 'comprobación: suma las dos'))],
      a: { k: 'multi', f: [k3Fm(S, () => 'S'), k3Fm(K, () => 'K')] } };
  }
  const K3TF = [
    [() => '(AB)^{T} = A^{T}B^{T}', false, () => L('Fals: és $(AB)^{T} = B^{T}A^{T}$. Amb mides 2 × 3 i 3 × 4, $A^{T}B^{T}$ ni tan sols existeix.', 'Falso: es $(AB)^{T} = B^{T}A^{T}$. Con tamaños 2 × 3 y 3 × 4, $A^{T}B^{T}$ ni siquiera existe.')],
    [() => '(AB)^{T} = B^{T}A^{T}', true, () => L('Cert: propietat 4 de la transposada.', 'Cierto: propiedad 4 de la traspuesta.')],
    [() => '(A + B)^{2} = A^{2} + 2AB + B^{2}', false, () => L('Fals en general: $(A + B)^{2} = A^{2} + AB + BA + B^{2}$, i $AB ≠ BA$.', 'Falso en general: $(A + B)^{2} = A^{2} + AB + BA + B^{2}$, y $AB ≠ BA$.')],
    [() => 'tr(AB) = tr(BA)', true, () => L('Cert, encara que $AB ≠ BA$.', 'Cierto, aunque $AB ≠ BA$.')],
    [() => L('AB = 0 ⟹ A = 0 o B = 0', 'AB = 0 ⟹ A = 0 o B = 0'), false, () => L('Fals: $\\mat{1 & 1; 1 & 1}\\mat{1 & −1; −1 & 1} = 0$.', 'Falso: $\\mat{1 & 1; 1 & 1}\\mat{1 & −1; −1 & 1} = 0$.')],
    [() => '(A^{T})^{T} = A', true, () => L('Cert: transposar dues vegades torna a l\'original.', 'Cierto: trasponer dos veces vuelve al original.')],
    [() => L('A + A^{T} és simètrica', 'A + A^{T} es simétrica'), true, () => L('Cert: $(A + A^{T})^{T} = A^{T} + A$.', 'Cierto: $(A + A^{T})^{T} = A^{T} + A$.')],
    [() => L('A − A^{T} és simètrica', 'A − A^{T} es simétrica'), false, () => L('Fals: és antisimètrica, $(A − A^{T})^{T} = −(A − A^{T})$.', 'Falso: es antisimétrica, $(A − A^{T})^{T} = −(A − A^{T})$.')],
    [() => 'AB = BA', false, () => L('Fals en general: el producte no és commutatiu.', 'Falso en general: el producto no es conmutativo.')],
    [() => 'tr(kA) = k + tr A', false, () => L('Fals: $\\it{tr}(kA) = k · \\it{tr} A$.', 'Falso: $\\it{tr}(kA) = k · \\it{tr} A$.')],
    [() => 'tr(A + B) = tr A + tr B', true, () => L('Cert: propietat 1 de la traça.', 'Cierto: propiedad 1 de la traza.')],
    [() => L('A antisimètrica ⟹ diagonal nul·la', 'A antisimétrica ⟹ diagonal nula'), true, () => L('Cert: $a_{ii} = −a_{ii}$ obliga que $a_{ii} = 0$.', 'Cierto: $a_{ii} = −a_{ii}$ obliga a que $a_{ii} = 0$.')],
    [() => '(A + B)(A − B) = A^{2} − B^{2}', false, () => L('Fals en general: surt $A^{2} − AB + BA − B^{2}$.', 'Falso en general: sale $A^{2} − AB + BA − B^{2}$.')],
    [() => L('A, B triangulars superiors ⟹ AB triangular superior', 'A, B triangulares superiores ⟹ AB triangular superior'), true, () => L('Cert: proposició de les triangulars.', 'Cierto: proposición de las triangulares.')],
    [() => '(kA)^{T} = kA^{T}', true, () => L('Cert: propietat 3 de la transposada.', 'Cierto: propiedad 3 de la traspuesta.')]
  ];
  function bkMxPropGen() {
    const pick = Z.shuffle(K3TF).slice(0, 5);
    return { q: () => md(L('Siguin $A$ i $B$ matrius quadrades del mateix ordre i $k ∈ ℝ$. Digues si cada afirmació és <b>sempre</b> certa.', 'Sean $A$ y $B$ matrices cuadradas del mismo orden y $k ∈ ℝ$. Di si cada afirmación es <b>siempre</b> cierta.')),
      sol: () => pick.map(([t, v, w]) => kS('', t(), w())),
      a: { k: 'tf', items: pick.map(([t, v]) => ({ t: () => M(t()), v })) } };
  }
  function bkMxPowNGen() {
    const kind = Z.pick(['shear', 'diag', 'swap', 'ones']);
    let A, n, R, pat;
    if (kind === 'shear') { const k = rnz(-3, 4); n = ri(5, 40); A = mQ([[1, k], [0, 1]]); R = mQ([[1, n * k], [0, 1]]); pat = '\\mat{1 & ' + ng(k) + 'n; 0 & 1}'; }
    else if (kind === 'diag') { const a = Z.pick([-1, 2, -2, 3]), b = Z.pick([-1, 1, 2, -2].filter(x => x !== a)); n = ri(4, 7); A = mQ([[a, 0], [0, b]]); R = mQ([[a ** n, 0], [0, b ** n]]); pat = '\\mat{' + pr(a) + '^{n} & 0; 0 & ' + pr(b) + '^{n}}'; }
    else if (kind === 'swap') { n = ri(10, 61); A = mQ([[0, 1], [1, 0]]); R = n % 2 ? A : mId(2); pat = L('I si n és parell, A si n és senar', 'I si n es par, A si n es impar'); }
    else { n = ri(3, 8); A = mQ([[1, 1], [1, 1]]); const t = 2 ** (n - 1); R = mQ([[t, t], [t, t]]); pat = '2^{n−1}\\mat{1 & 1; 1 & 1}'; }
    const A2 = mMul(A, A), A3 = mMul(A, A2);
    return { q: () => md(L(`Calcula $A^{${n}}$ amb $A = ${mTx(A)}$.`, `Calcula $A^{${n}}$ con $A = ${mTx(A)}$.`)),
      hint: () => P(L('Calcula A², A³… fins que vegis el patró. A l\'examen el patró es demostra per inducció.', 'Calcula A², A³… hasta que veas el patrón. En el examen el patrón se demuestra por inducción.')),
      sol: () => [kS('A^{2}', mTx(A2)), kS('A^{3}', mTx(A3)), kS(L('Patró', 'Patrón'), 'A^{n} = ' + (kind === 'swap' ? '' : pat), kind === 'swap' ? pat : L('es comprova per inducció: A^{n+1} = A · A^{n}', 'se comprueba por inducción: A^{n+1} = A · A^{n}')), kDone('A^{' + n + '} = ' + mTx(R))],
      a: k3Mat(R) };
  }
  const K3PR = [
    { e: () => L('Si $A$ és quadrada, $A + A^{T}$ és simètrica.', 'Si $A$ es cuadrada, $A + A^{T}$ es simétrica.'), s: () => [kS(L('Cal veure', 'Hay que ver'), '(A + A^{T})^{T} = A + A^{T}'), kS(L('Transposada d\'una suma', 'Traspuesta de una suma'), '(A + A^{T})^{T} = A^{T} + (A^{T})^{T}', L('propietat 1', 'propiedad 1')), kS('', '= A^{T} + A', L('propietat 2: (Aᵀ)ᵀ = A', 'propiedad 2: (Aᵀ)ᵀ = A')), kS('', '= A + A^{T}', L('la suma de matrius és commutativa', 'la suma de matrices es conmutativa'), 'done')] },
    { e: () => L('Si $A$ és quadrada, $A − A^{T}$ és antisimètrica.', 'Si $A$ es cuadrada, $A − A^{T}$ es antisimétrica.'), s: () => [kS(L('Cal veure', 'Hay que ver'), '(A − A^{T})^{T} = −(A − A^{T})'), kS('', '(A − A^{T})^{T} = A^{T} − (A^{T})^{T} = A^{T} − A', L('propietats 1, 3 (amb k = −1) i 2', 'propiedades 1, 3 (con k = −1) y 2')), kS('', '= −(A − A^{T})', '', 'done')] },
    { e: () => L('Per a tota matriu $A$, $AA^{T}$ és simètrica.', 'Para toda matriz $A$, $AA^{T}$ es simétrica.'), s: () => [kS(L('Existeix', 'Existe'), '(m × n)(n × m) = m × m', L('és quadrada', 'es cuadrada')), kS(L('Transposada d\'un producte', 'Traspuesta de un producto'), '(AA^{T})^{T} = (A^{T})^{T}A^{T}', L('propietat 4: l\'ordre es gira', 'propiedad 4: el orden se gira')), kS('', '= AA^{T}', L('propietat 2', 'propiedad 2'), 'done')] },
    { e: () => L('Si $A$ és antisimètrica, tots els elements de la seva diagonal són 0.', 'Si $A$ es antisimétrica, todos los elementos de su diagonal son 0.'), s: () => [kS(L('Definició', 'Definición'), 'a_{ij} = −a_{ji}  ∀ i, j'), kS(L('Prenem i = j', 'Tomamos i = j'), 'a_{ii} = −a_{ii}'), kS('', '2a_{ii} = 0  ⟹  a_{ii} = 0', '', 'done')] },
    { e: () => L('Si $AB = BA$, aleshores $(A + B)^{2} = A^{2} + 2AB + B^{2}$.', 'Si $AB = BA$, entonces $(A + B)^{2} = A^{2} + 2AB + B^{2}$.'), s: () => [kS(L('Distributives', 'Distributivas'), '(A + B)(A + B) = A(A + B) + B(A + B) = A^{2} + AB + BA + B^{2}'), kS(L('Hipòtesi', 'Hipótesis'), 'BA = AB'), kS('', '= A^{2} + 2AB + B^{2}', L('sense la hipòtesi no es podrien ajuntar', 'sin la hipótesis no se podrían juntar'), 'done')] },
    { e: () => L('$\\it{tr}(A + B) = \\it{tr} A + \\it{tr} B$.', '$\\it{tr}(A + B) = \\it{tr} A + \\it{tr} B$.'), s: () => [kS(L('Diagonal de la suma', 'Diagonal de la suma'), '(A + B)_{ii} = a_{ii} + b_{ii}'), kS('', 'tr(A + B) = ∑_{i=1}^{n}(a_{ii} + b_{ii}) = ∑_{i=1}^{n} a_{ii} + ∑_{i=1}^{n} b_{ii} = tr A + tr B', L('reordenant una suma finita de reals', 'reordenando una suma finita de reales'), 'done')] }
  ];
  function bkMxProofGen() {
    const p = Z.pick(K3PR);
    return { q: () => '<p><b>' + L('Demostra:', 'Demuestra:') + '</b> ' + md(p.e()) + '</p>', hint: () => P(L('Fes servir les propietats de la transposada (o de la traça) i justifica cada igualtat.', 'Usa las propiedades de la traspuesta (o de la traza) y justifica cada igualdad.')), sol: p.s, a: { k: 'self' } };
  }

  /* ===== Determinants · nivell 1 ===== */
  function bkDt2Gen() {
    const A = k3M(2, 2, -6, 9), d = mDet(A);
    return { q: () => md(L(`Calcula $${mTx(A, 'd')}$.`, `Calcula $${mTx(A, 'd')}$.`)), hint: () => P(L('Diagonal que baixa menys diagonal que puja: a₁₁a₂₂ − a₂₁a₁₂.', 'Diagonal que baja menos diagonal que sube: a₁₁a₂₂ − a₂₁a₁₂.')),
      sol: () => [kDone(qPar(A[0][0]) + ' · ' + qPar(A[1][1]) + ' − ' + qPar(A[1][0]) + ' · ' + qPar(A[0][1]) + ' = ' + qtx(d))], a: { k: 'num', v: qnum(d), show: () => M(qtx(d)) } };
  }
  function k3SarSteps(A) {
    const pr_ = SAR.map(([sg, cells]) => ({ sg, cells, v: cells.reduce((p, [r, c]) => qm(p, A[r][c]), Q(1)) }));
    const P_ = pr_.slice(0, 3).reduce((a, x) => qa(a, x.v), Q(0)), N_ = pr_.slice(3).reduce((a, x) => qa(a, x.v), Q(0));
    return [kS(L('Diagonals que baixen', 'Diagonales que bajan'), pr_.slice(0, 3).map(x => x.cells.map(([r, c]) => qPar(A[r][c])).join(' · ')).join(' + ') + ' = ' + qtx(P_)), kS(L('Diagonals que pugen', 'Diagonales que suben'), pr_.slice(3).map(x => x.cells.map(([r, c]) => qPar(A[r][c])).join(' · ')).join(' + ') + ' = ' + qtx(N_)), kDone('|A| = ' + qtx(P_) + ' − ' + qPar(N_) + ' = ' + qtx(mDet(A)))];
  }
  function bkDtSarGen() {
    const A = k3M(3, 3, -3, 5), d = mDet(A);
    return { q: () => md(L(`Calcula $${mTx(A, 'd')}$.`, `Calcula $${mTx(A, 'd')}$.`)), hint: () => P(L('Regla de Sarrus: copia les dues primeres columnes a la dreta; tres diagonals sumen i tres resten.', 'Regla de Sarrus: copia las dos primeras columnas a la derecha; tres diagonales suman y tres restan.')),
      sol: () => k3SarSteps(A), a: { k: 'num', v: qnum(d), show: () => M(qtx(d)) } };
  }
  function bkDtMinGen() {
    const A = k3M(3, 3, -4, 7), i = ri(0, 2), j = ri(0, 2), Mm = mMinorM(A, i, j), Mv = mDet(Mm), mv = (i + j) % 2 ? qneg(Mv) : Mv;
    return { q: () => md(L(`Amb $A = ${mTx(A)}$, calcula el menor complementari $M_{${k3I(i, j)}}$ i l'adjunt $m_{${k3I(i, j)}}$.`, `Con $A = ${mTx(A)}$, calcula el menor complementario $M_{${k3I(i, j)}}$ y el adjunto $m_{${k3I(i, j)}}$.`)),
      hint: () => P(L('Suprimeix la fila ' + (i + 1) + ' i la columna ' + (j + 1) + '. L\'adjunt porta el signe (−1)^(i+j).', 'Suprime la fila ' + (i + 1) + ' y la columna ' + (j + 1) + '. El adjunto lleva el signo (−1)^(i+j).')),
      sol: () => [kS(L('Suprimim fila ' + (i + 1) + ' i columna ' + (j + 1), 'Suprimimos fila ' + (i + 1) + ' y columna ' + (j + 1)), 'M_{' + k3I(i, j) + '} = ' + mTx(Mm, 'd') + ' = ' + qtx(Mv)), kDone('m_{' + k3I(i, j) + '} = (−1)^{' + (i + 1) + '+' + (j + 1) + '} · ' + qPar(Mv) + ' = ' + qtx(mv), (i + j) % 2 ? L('casella negativa del tauler', 'casilla negativa del tablero') : L('casella positiva del tauler', 'casilla positiva del tablero'))],
      a: { k: 'multi', f: [{ k: 'num', lab: () => M('M_{' + k3I(i, j) + '}'), v: qnum(Mv) }, { k: 'num', lab: () => M('m_{' + k3I(i, j) + '}'), v: qnum(mv) }] } };
  }
  function bkDtTriGen() {
    const n = Z.pick([3, 4]), up = Z.rnd(2) === 0, A = k3M(n, n, -4, 7).map((r, i) => r.map((x, j) => (up ? i > j : i < j) ? Q(0) : (i === j && qz(x) ? Q(rnz(-3, 4)) : x))), d = mDet(A);
    return { q: () => md(L(`Calcula $${mTx(A, 'd')}$.`, `Calcula $${mTx(A, 'd')}$.`)), hint: () => P(L('Mira on són els zeros abans de començar a multiplicar.', 'Mira dónde están los ceros antes de empezar a multiplicar.')),
      sol: () => [kS(L('És triangular ' + (up ? 'superior' : 'inferior'), 'Es triangular ' + (up ? 'superior' : 'inferior')), '', L('propietat 10: el determinant és el producte de la diagonal', 'propiedad 10: el determinante es el producto de la diagonal')), kDone(A.map((r, i) => qPar(r[i])).join(' · ') + ' = ' + qtx(d))], a: { k: 'num', v: qnum(d), show: () => M(qtx(d)) } };
  }

  /* ===== Determinants · nivell 2 ===== */
  function bkDtLapGen() {
    const A = k3M(4, 4, -2, 3), row = Z.rnd(2) === 0, k = ri(0, 3), keep = ri(0, 3);
    for (let t = 0; t < 4; t++) if (t !== keep) { if (row) A[k][t] = Q(0); else A[t][k] = Q(0); }
    const [r0, c0] = row ? [k, keep] : [keep, k];
    if (qz(A[r0][c0])) A[r0][c0] = Q(rnz(-3, 3));
    const Mm = mMinorM(A, r0, c0), Mv = mDet(Mm), d = mDet(A), sg = (r0 + c0) % 2 ? -1 : 1;
    return { q: () => md(L(`Calcula $${mTx(A, 'd')}$.`, `Calcula $${mTx(A, 'd')}$.`)), hint: () => P(L('Desenvolupa per la fila o la columna que té tres zeros.', 'Desarrolla por la fila o la columna que tiene tres ceros.')),
      sol: () => [kS(L('Triem la ' + (row ? 'fila ' : 'columna ') + (k + 1), 'Elegimos la ' + (row ? 'fila ' : 'columna ') + (k + 1)), '|A| = ' + (sg > 0 ? '+' : '−') + qPar(A[r0][c0]) + ' · M_{' + k3I(r0, c0) + '}', L('només hi ha un element no nul; signe (−1)^(' + (r0 + 1) + '+' + (c0 + 1) + ')', 'solo hay un elemento no nulo; signo (−1)^(' + (r0 + 1) + '+' + (c0 + 1) + ')')), kS('M_{' + k3I(r0, c0) + '}', mTx(Mm, 'd') + ' = ' + qtx(Mv), L('Sarrus', 'Sarrus')), kDone('|A| = ' + (sg > 0 ? '' : '−') + qPar(A[r0][c0]) + ' · ' + qPar(Mv) + ' = ' + qtx(d))],
      a: { k: 'num', v: qnum(d), show: () => M(qtx(d)) } };
  }
  function bkDtPropGen() {
    const n = Z.pick([2, 3, 4]), d = rnz(-5, 5), e = rnz(-4, 4), k = Z.pick([2, 3, -1, -2]);
    const pool = [
      { lab: '|' + ng(k) + 'A|', v: k ** n * d, w: () => L('|λA| = λⁿ|A| amb n = ' + n, '|λA| = λⁿ|A| con n = ' + n), m: pr(k) + '^{' + n + '} · ' + pr(d) },
      { lab: '|A^{T}|', v: d, w: () => L('|Aᵀ| = |A|', '|Aᵀ| = |A|'), m: ng(d) },
      { lab: '|A^{−1}|', v: 1 / d, w: () => L('|A⁻¹| = 1/|A|', '|A⁻¹| = 1/|A|'), m: Z.fracTx(1, d) },
      { lab: '|AB|', v: d * e, w: () => L('|AB| = |A| · |B|', '|AB| = |A| · |B|'), m: pr(d) + ' · ' + pr(e) },
      { lab: '|A^{2}|', v: d * d, w: () => L('|A²| = |A| · |A|', '|A²| = |A| · |A|'), m: pr(d) + '^{2}' },
      { lab: '|A^{T}B^{−1}|', v: d / e, w: () => L('|Aᵀ| · |B⁻¹| = |A| / |B|', '|Aᵀ| · |B⁻¹| = |A| / |B|'), m: Z.fracTx(d, e) }];
    const pick = Z.shuffle(pool).slice(0, 4);
    return { q: () => md(L(`$A$ i $B$ són matrius quadrades d'ordre ${n} amb $|A| = ${ng(d)}$ i $|B| = ${ng(e)}$. Calcula:`, `$A$ y $B$ son matrices cuadradas de orden ${n} con $|A| = ${ng(d)}$ y $|B| = ${ng(e)}$. Calcula:`)),
      hint: () => P(L('Compte amb |λA|: cada una de les n files treu un λ.', 'Cuidado con |λA|: cada una de las n filas saca un λ.')),
      sol: () => pick.map(x => kS(x.lab, x.lab + ' = ' + x.m + ' = ' + Z.fracTx(Math.round(x.v * Math.abs(e) * Math.abs(d)), Math.abs(e) * Math.abs(d)), x.w())),
      a: { k: 'multi', f: pick.map(x => ({ k: 'num', lab: () => M(x.lab), v: x.v })) } };
  }
  function bkDtInv2Gen() {
    const A = k3Inv2(-4, 6, [1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), d = mDet(A), I = mInv(A), [[a, b], [c, e]] = A;
    return { q: () => md(L(`Calcula la inversa de $A = ${mTx(A)}$.`, `Calcula la inversa de $A = ${mTx(A)}$.`)), hint: () => P(L('Per a ordre 2: intercanvia la diagonal principal, canvia el signe dels altres dos i divideix per ad − bc.', 'Para orden 2: intercambia la diagonal principal, cambia el signo de los otros dos y divide por ad − bc.')),
      sol: () => [kS('|A|', qPar(a) + ' · ' + qPar(e) + ' − ' + qPar(c) + ' · ' + qPar(b) + ' = ' + qtx(d), L('≠ 0: és invertible', '≠ 0: es invertible')), kS(L('Fórmula', 'Fórmula'), 'A^{−1} = \\fr{1}{' + qtx(d) + '}' + mTx([[e, qneg(b)], [qneg(c), a]])), kDone('A^{−1} = ' + mTx(I)), kS(L('Comprovació', 'Comprobación'), 'A · A^{−1} = ' + mTx(mMul(A, I)))],
      a: k3Mat(I) };
  }
  function bkDtInvQGen() {
    let A = k3M(3, 3, -3, 4);
    if (Z.rnd(2) === 0) { const l = rnz(-2, 2), mu = ri(-2, 2), t = ri(0, 2), o = [0, 1, 2].filter(x => x !== t); A[t] = A[o[0]].map((x, j) => qa(qm(Q(l), x), qm(Q(mu), A[o[1]][j]))); }
    const d = mDet(A), inv = !qz(d);
    return { q: () => md(L(`Calcula $|A|$ amb $A = ${mTx(A)}$. És invertible?`, `Calcula $|A|$ con $A = ${mTx(A)}$. ¿Es invertible?`)), hint: () => P(L('Invertible ⟺ |A| ≠ 0. Abans de fer Sarrus, mira si alguna fila és combinació de les altres.', 'Invertible ⟺ |A| ≠ 0. Antes de hacer Sarrus, mira si alguna fila es combinación de las otras.')),
      sol: () => k3SarSteps(A).concat([kT(L('Conclusió', 'Conclusión'), inv ? L('$|A| ≠ 0$: és invertible.', '$|A| ≠ 0$: es invertible.') : L('$|A| = 0$: no és invertible (una fila és combinació de les altres).', '$|A| = 0$: no es invertible (una fila es combinación de las otras).'), 'done')]),
      a: { k: 'multi', f: [{ k: 'num', lab: () => M('|A|'), v: qnum(d) }, { k: 'tf', lab: () => L('És invertible?', '¿Es invertible?'), v: inv }] } };
  }
  function bkDtRankGen() {
    const wide = Z.rnd(2) === 0, n = wide ? 4 : 3, r = Z.pick([1, 2, 2, 3]);
    let A;
    for (let t = 0; t < 200; t++) {
      const base = k3M(r, n, -3, 4), rows = base.slice();
      while (rows.length < 3) { const co = base.map(() => Q(ri(-2, 2))); rows.push(base[0].map((_, j) => base.reduce((s, row, k) => qa(s, qm(co[k], row[j])), Q(0)))); }
      A = Z.shuffle(rows);
      if (mRank(A).r === r && A.flat().filter(qz).length < 7) break;
    }
    const R = mRank(A);
    return { q: () => md(L(`Calcula el rang de $A = ${mTx(A)}$.`, `Calcula el rango de $A = ${mTx(A)}$.`)), hint: () => P(L('Busca el menor no nul més gran. Comença pel més gran possible i baixa.', 'Busca el menor no nulo más grande. Empieza por el más grande posible y baja.')),
      sol: () => (R.r < 3 ? [kS(L('Menors d\'ordre ' + (R.r + 1), 'Menores de orden ' + (R.r + 1)), L('tots 0', 'todos 0'), L('n\'hi ha ' + R.nUp + '; alguna fila és combinació de les altres', 'hay ' + R.nUp + '; alguna fila es combinación de las otras'))] : []).concat([kS(L('Menor no nul d\'ordre ' + R.r, 'Menor no nulo de orden ' + R.r), mTx(R.S, 'd') + ' = ' + qtx(R.d), L('files ' + R.R.map(x => x + 1).join(', ') + ', columnes ' + R.C.map(x => x + 1).join(', '), 'filas ' + R.R.map(x => x + 1).join(', ') + ', columnas ' + R.C.map(x => x + 1).join(', '))), kDone('rang A = ' + R.r)]),
      a: { k: 'num', v: R.r, show: () => M(String(R.r)) } };
  }
  function bkDtColGen() {
    const d = rnz(-6, 6), k = Z.pick([2, 3, -2, 5]), l = rnz(-3, 3), byRow = Z.rnd(2) === 0, c = byRow ? 'f' : 'c', nm = byRow ? L('files', 'filas') : L('columnes', 'columnas');
    const pool = [
      { lab: '|' + c + '_{2}, ' + c + '_{1}, ' + c + '_{3}|', v: -d, w: () => L('permutar-ne dues canvia el signe', 'permutar dos cambia el signo') },
      { lab: '|' + ng(k) + c + '_{1}, ' + c + '_{2}, ' + c + '_{3}|', v: k * d, w: () => L('linealitat: el ' + ng(k) + ' surt fora', 'linealidad: el ' + ng(k) + ' sale fuera') },
      { lab: '|' + c + '_{1} + ' + (l < 0 ? '(' + ng(l) + ')' : l) + c + '_{2}, ' + c + '_{2}, ' + c + '_{3}|', v: d, w: () => L('sumar un múltiple d\'una altra no el canvia', 'sumar un múltiplo de otra no lo cambia') },
      { lab: '|' + c + '_{1}, ' + c + '_{2}, ' + c + '_{1} + ' + c + '_{2}|', v: 0, w: () => L('una és combinació de les altres', 'una es combinación de las otras') },
      { lab: '|2' + c + '_{1}, 3' + c + '_{2}, ' + c + '_{3}|', v: 6 * d, w: () => L('surten el 2 i el 3: 6|A|', 'salen el 2 y el 3: 6|A|') },
      { lab: '|' + c + '_{3}, ' + c + '_{1}, ' + c + '_{2}|', v: d, w: () => L('dues permutacions: el signe canvia dues vegades', 'dos permutaciones: el signo cambia dos veces') },
      { lab: '|−A|', v: -d, w: () => L('|−A| = (−1)³|A|', '|−A| = (−1)³|A|') }];
    const pick = Z.shuffle(pool).slice(0, 4);
    return { q: () => md(L(`$A$ és $3 × 3$ amb ${nm} $${c}_{1}, ${c}_{2}, ${c}_{3}$ i $|A| = |${c}_{1}, ${c}_{2}, ${c}_{3}| = ${ng(d)}$. Calcula:`, `$A$ es $3 × 3$ con ${nm} $${c}_{1}, ${c}_{2}, ${c}_{3}$ y $|A| = |${c}_{1}, ${c}_{2}, ${c}_{3}| = ${ng(d)}$. Calcula:`)),
      hint: () => P(L('Propietats 1–5: linealitat, permutació, combinacions. Valen igual per a files i per a columnes.', 'Propiedades 1–5: linealidad, permutación, combinaciones. Valen igual para filas y para columnas.')),
      sol: () => pick.map(x => kS(x.lab, x.lab + ' = ' + ng(x.v), x.w())), a: { k: 'multi', f: pick.map(x => ({ k: 'num', lab: () => M(x.lab), v: x.v })) } };
  }

  /* ===== Determinants · nivell 3 ===== */
  function bkDtInv3Gen() {
    const A = k3Inv3([1, -1, 2, -2]), I = mInv(A);
    return { q: () => md(L(`Calcula la inversa de $A = ${mTx(A)}$ amb la matriu adjunta.`, `Calcula la inversa de $A = ${mTx(A)}$ con la matriz adjunta.`)), hint: () => P(L('A⁻¹ = (1/|A|)(Adj A)ᵀ. Són nou adjunts: compte amb el signe de cada casella.', 'A⁻¹ = (1/|A|)(Adj A)ᵀ. Son nueve adjuntos: cuidado con el signo de cada casilla.')),
      sol: () => invSteps(A), a: k3Mat(I) };
  }
  const K3PAR = [
    { A: '\\mat{a & 1 & 1; 1 & a & 1; 1 & 1 & a}', det: '(a − 1)^{2}(a + 2)', r: [1, -2] },
    { A: '\\mat{1 & 1 & 1; 1 & a & 1; 1 & 1 & a}', det: '(a − 1)^{2}', r: [1] },
    { A: '\\mat{a & 2; 2 & a}', det: 'a^{2} − 4', r: [2, -2] },
    { A: '\\mat{a & 0 & 1; 0 & a & 0; 1 & 0 & a}', det: 'a(a^{2} − 1)', r: [0, 1, -1] },
    { A: '\\mat{1 & a & 0; a & 1 & 0; 0 & 0 & 2}', det: '2(1 − a^{2})', r: [1, -1] },
    { A: '\\mat{a & 1 & 0; 0 & a & 1; 1 & 0 & a}', det: 'a^{3} + 1', r: [-1] }];
  function bkDtParGen() {
    if (Z.rnd(5) < 2) {
      const p = Z.pick(K3PAR);
      return { q: () => md(L(`Per a quins valors de $a$ la matriu $A = ${p.A}$ <b>no</b> és invertible?`, `¿Para qué valores de $a$ la matriz $A = ${p.A}$ <b>no</b> es invertible?`)), hint: () => P(L('Calcula |A| en funció de a, iguala a 0 i resol.', 'Calcula |A| en función de a, iguala a 0 y resuelve.')),
        sol: () => [kS('|A|', '|A| = ' + p.det, L('Sarrus i factoritzar', 'Sarrus y factorizar')), kS('|A| = 0', p.det + ' = 0'), kDone('a ∈ \\{' + p.r.map(ng).join(', ') + '\\}', L('per a la resta de valors, |A| ≠ 0 i és invertible', 'para el resto de valores, |A| ≠ 0 y es invertible'))],
        a: { k: 'set', v: p.r.map(x => C(x)), show: () => M('\\{' + p.r.map(ng).join(', ') + '\\}'), help: () => L('Escriu els valors entre claus: {1, −2}.', 'Escribe los valores entre llaves: {1, −2}.') } };
    }
    for (let t = 0; t < 500; t++) {
      const B = k3M(3, 3, -3, 4), i = ri(0, 2), j = ri(0, 2), cf = mCof(B)[i][j];
      if (qz(cf)) continue;
      B[i][j] = Q(0); const rest = mDet(B), a0 = qd(qneg(rest), cf);
      if (a0.d !== 1 || Math.abs(a0.n) > 9) continue;
      const S = B.map((r, x) => r.map((v, y) => x === i && y === j ? 'a' : qtx(v)));
      const At = '\\mat{' + S.map(r => r.join(' & ')).join('; ') + '}';
      const dt = (qnum(cf) === 1 ? '' : qnum(cf) === -1 ? '−' : qtx(cf)) + 'a' + (qz(rest) ? '' : (rest.n < 0 ? ' − ' + qtx(qneg(rest)) : ' + ' + qtx(rest)));
      return { q: () => md(L(`Per a quin valor de $a$ la matriu $A = ${At}$ <b>no</b> és invertible?`, `¿Para qué valor de $a$ la matriz $A = ${At}$ <b>no</b> es invertible?`)), hint: () => P(L('Desenvolupa per la fila o la columna de a: |A| surt de primer grau en a.', 'Desarrolla por la fila o la columna de a: |A| sale de primer grado en a.')),
        sol: () => [kS(L('Desenvolupant per la fila ' + (i + 1), 'Desarrollando por la fila ' + (i + 1)), '|A| = ' + dt, L('a multiplica el seu adjunt m_{' + k3I(i, j) + '} = ' + qtx(cf), 'a multiplica su adjunto m_{' + k3I(i, j) + '} = ' + qtx(cf))), kDone('|A| = 0 ⟺ a = ' + qtx(a0))],
        a: { k: 'num', v: qnum(a0), show: () => M(qtx(a0)) } };
    }
    return null;
  }
  function bkDtEqGen() {
    const A = k3Inv2(-3, 4, [1, -1, 2, -2]), left = Z.rnd(2) === 0, B = left ? k3M(2, Z.pick([1, 2]), -4, 5) : k3M(Z.pick([1, 2]), 2, -4, 5), I = mInv(A), X = left ? mMul(I, B) : mMul(B, I);
    const eq = left ? 'AX = B' : 'XA = B';
    return { q: () => md(L(`Resol l'equació matricial $${eq}$ amb $A = ${mTx(A)}$ i $B = ${mTx(B)}$.`, `Resuelve la ecuación matricial $${eq}$ con $A = ${mTx(A)}$ y $B = ${mTx(B)}$.`)),
      hint: () => P(left ? L('Multiplica per A⁻¹ per l\'esquerra: X = A⁻¹B.', 'Multiplica por A⁻¹ por la izquierda: X = A⁻¹B.') : L('Multiplica per A⁻¹ per la dreta: X = BA⁻¹. L\'ordre importa.', 'Multiplica por A⁻¹ por la derecha: X = BA⁻¹. El orden importa.')),
      sol: () => [kS('|A| = ' + qtx(mDet(A)), 'A^{−1} = ' + mTx(I), L('≠ 0, per tant A és invertible', '≠ 0, por tanto A es invertible')), kS(L('Aïllem X', 'Despejamos X'), left ? 'A^{−1}AX = A^{−1}B  ⟹  X = A^{−1}B' : 'XAA^{−1} = BA^{−1}  ⟹  X = BA^{−1}', left ? L('per l\'esquerra', 'por la izquierda') : L('per la dreta', 'por la derecha')), kDone('X = ' + (left ? mTx(I) + mTx(B) : mTx(B) + mTx(I)) + ' = ' + mTx(X))],
      a: k3Mat(X) };
  }
  const K3PRD = [
    { e: () => L('Si $A$ és invertible, $|A^{−1}| = \\fr{1}{|A|}$.', 'Si $A$ es invertible, $|A^{−1}| = \\fr{1}{|A|}$.'), s: () => [kS(L('Partim de', 'Partimos de'), 'AA^{−1} = I'), kS(L('Determinant als dos costats', 'Determinante a los dos lados'), '|A| · |A^{−1}| = |I| = 1', L('|AB| = |A||B|', '|AB| = |A||B|')), kS('', '|A^{−1}| = \\fr{1}{|A|}', L('|A| ≠ 0 perquè el producte val 1', '|A| ≠ 0 porque el producto vale 1'), 'done')] },
    { e: () => L('Si $A$ és antisimètrica d\'ordre senar, $|A| = 0$.', 'Si $A$ es antisimétrica de orden impar, $|A| = 0$.'), s: () => [kS(L('Hipòtesi', 'Hipótesis'), 'A^{T} = −A'), kS(L('Determinants', 'Determinantes'), '|A| = |A^{T}| = |−A| = (−1)^{n}|A| = −|A|', L('|Aᵀ| = |A|, |λA| = λⁿ|A| i n senar', '|Aᵀ| = |A|, |λA| = λⁿ|A| y n impar')), kS('', '2|A| = 0  ⟹  |A| = 0', '', 'done')] },
    { e: () => L('Si $A$ és invertible, $(A^{T})^{−1} = (A^{−1})^{T}$.', 'Si $A$ es invertible, $(A^{T})^{−1} = (A^{−1})^{T}$.'), s: () => [kS(L('Cal veure', 'Hay que ver'), 'A^{T}(A^{−1})^{T} = I', L('i el mateix per l\'altre costat', 'y lo mismo por el otro lado')), kS('', 'A^{T}(A^{−1})^{T} = (A^{−1}A)^{T} = I^{T} = I', L('(BC)ᵀ = CᵀBᵀ llegit al revés', '(BC)ᵀ = CᵀBᵀ leído al revés')), kS('', '(A^{−1})^{T}A^{T} = (AA^{−1})^{T} = I', L('la inversa és única: és (Aᵀ)⁻¹', 'la inversa es única: es (Aᵀ)⁻¹'), 'done')] },
    { e: () => L('Si $A$ és invertible i $A^{2} = A$, aleshores $A = I$.', 'Si $A$ es invertible y $A^{2} = A$, entonces $A = I$.'), s: () => [kS(L('Multipliquem per A⁻¹ per l\'esquerra', 'Multiplicamos por A⁻¹ por la izquierda'), 'A^{−1}A^{2} = A^{−1}A'), kS('', '(A^{−1}A)A = I  ⟹  IA = I', L('associativa', 'asociativa')), kS('', 'A = I', '', 'done')] },
    { e: () => L('Si $A$ i $B$ són quadrades del mateix ordre i $AB = I$, aleshores $|A| ≠ 0$ i $|B| ≠ 0$.', 'Si $A$ y $B$ son cuadradas del mismo orden y $AB = I$, entonces $|A| ≠ 0$ y $|B| ≠ 0$.'), s: () => [kS(L('Determinants', 'Determinantes'), '|A| · |B| = |AB| = |I| = 1'), kS('', L('si un dels dos fos 0, el producte seria 0', 'si uno de los dos fuera 0, el producto sería 0'), '', 'done')] }
  ];
  function bkDtProofGen() {
    const p = Z.pick(K3PRD);
    return { q: () => '<p><b>' + L('Demostra:', 'Demuestra:') + '</b> ' + md(p.e()) + '</p>', hint: () => P(L('Les eines són |AB| = |A||B|, |Aᵀ| = |A|, |λA| = λⁿ|A| i la definició d\'inversa.', 'Las herramientas son |AB| = |A||B|, |Aᵀ| = |A|, |λA| = λⁿ|A| y la definición de inversa.')), sol: p.s, a: { k: 'self' } };
  }

  BKT.mat = { n: () => L('Matrius', 'Matrices'), lv: {
    1: [{ n: () => L('Mida i elements', 'Tamaño y elementos'), g: bkMxSizeGen }, { n: () => L('Suma i escalar', 'Suma y escalar'), g: bkMxLinGen }, { n: () => L('Transposada', 'Traspuesta'), g: bkMxTrGen }, { n: () => L('Traça', 'Traza'), g: bkMxTraceGen }, { n: () => L('Mida d\'un producte', 'Tamaño de un producto'), g: bkMxProdSizeGen }],
    2: [{ n: () => L('Producte', 'Producto'), g: bkMxProdGen }, { n: () => L('AB i BA', 'AB y BA'), g: bkMxCommGen }, { n: () => L('Potència', 'Potencia'), g: bkMxPowGen }, { n: () => L('Tipus de matriu', 'Tipo de matriz'), g: bkMxTypeGen }, { n: () => L('Igualtat amb incògnites', 'Igualdad con incógnitas'), g: bkMxEqGen }],
    3: [{ n: () => L('Simètrica + antisimètrica', 'Simétrica + antisimétrica'), g: bkMxDecompGen }, { n: () => L('Cert o fals', 'Cierto o falso'), g: bkMxPropGen }, { n: () => L('Potència n-èsima', 'Potencia n-ésima'), g: bkMxPowNGen }, { n: () => L('Demostracions', 'Demostraciones'), g: bkMxProofGen }]
  } };
  BKT.det = { n: () => L('Determinants', 'Determinantes'), lv: {
    1: [{ n: () => L('Ordre 2', 'Orden 2'), g: bkDt2Gen }, { n: () => L('Sarrus', 'Sarrus'), g: bkDtSarGen }, { n: () => L('Menor i adjunt', 'Menor y adjunto'), g: bkDtMinGen }, { n: () => L('Triangular', 'Triangular'), g: bkDtTriGen }],
    2: [{ n: () => L('Desenvolupament 4 × 4', 'Desarrollo 4 × 4'), g: bkDtLapGen }, { n: () => L('Propietats', 'Propiedades'), g: bkDtPropGen }, { n: () => L('Files i columnes', 'Filas y columnas'), g: bkDtColGen }, { n: () => L('Inversa 2 × 2', 'Inversa 2 × 2'), g: bkDtInv2Gen }, { n: () => L('És invertible?', '¿Es invertible?'), g: bkDtInvQGen }, { n: () => L('Rang', 'Rango'), g: bkDtRankGen }],
    3: [{ n: () => L('Inversa 3 × 3', 'Inversa 3 × 3'), g: bkDtInv3Gen }, { n: () => L('Paràmetre', 'Parámetro'), g: bkDtParGen }, { n: () => L('Equació matricial', 'Ecuación matricial'), g: bkDtEqGen }, { n: () => L('Demostracions', 'Demostraciones'), g: bkDtProofGen }]
  } };
  BKORD.push('mat', 'det');
  return { k3M, k3Num, k3Mat, k3Fm, k3I, k3Tr, k3Inv2, k3Inv3, k3Kinds, bkMxSizeGen, bkMxLinGen, bkMxTrGen, bkMxTraceGen, bkMxProdSizeGen, bkMxProdGen, bkMxCommGen, bkMxPowGen, bkMxTypeGen, bkMxEqGen, bkMxDecompGen, K3TF, bkMxPropGen, bkMxPowNGen, K3PR, bkMxProofGen, bkDt2Gen, k3SarSteps, bkDtSarGen, bkDtMinGen, bkDtTriGen, bkDtLapGen, bkDtPropGen, bkDtInv2Gen, bkDtInvQGen, bkDtRankGen, bkDtColGen, bkDtInv3Gen, K3PAR, bkDtParGen, bkDtEqGen, K3PRD, bkDtProofGen };
}
