import { Z, tx } from '../engine/z.js';

/**
 * Racionals exactes, matrius de racionals i ajudes dels laboratoris del tema 3 (matrius i determinants).
 * Codi original; l'idioma i les dependències arriben pel contenidor $ (un per idioma).
 */
export function makeLabsMat($) {
  const { L } = $;
  /* ============================================================
     LABORATORIS · TEMA 3: MATRIUS I DETERMINANTS
     ============================================================ */
  /* ---------- racionals exactes ---------- */
  const Q = (n, d) => { d = d == null ? 1 : d; if (d < 0) { n = -n; d = -d; } const g = Z.gcd(n, d) || 1; return { n: n / g, d: d / g }; };
  const qa = (a, b) => Q(a.n * b.d + b.n * a.d, a.d * b.d);
  const qs = (a, b) => Q(a.n * b.d - b.n * a.d, a.d * b.d);
  const qm = (a, b) => Q(a.n * b.n, a.d * b.d);
  const qd = (a, b) => Q(a.n * b.d, a.d * b.n);
  const qneg = a => Q(-a.n, a.d);
  const qz = a => a.n === 0;
  const qeq = (a, b) => a.n === b.n && a.d === b.d;
  const qnum = a => a.n / a.d;
  const mg = x => String(x).replace(/-/g, '−');
  const qtx = a => a.d === 1 ? mg(a.n) : (a.n < 0 ? '−' : '') + '\\fr{' + Math.abs(a.n) + '}{' + a.d + '}';
  const qPar = a => a.n < 0 ? '(' + qtx(a) + ')' : qtx(a);
  const qStr = a => a.d === 1 ? String(a.n) : a.n + '/' + a.d;
  const qPlain = a => mg(qStr(a));
  function qParse(s) {
    s = String(s).trim().replace(/−/g, '-').replace(/\s+/g, '').replace(',', '.');
    if (/^[+-]?\d+$/.test(s)) return Q(+s);
    const m = /^([+-]?\d+)\/([+-]?\d+)$/.exec(s); if (m && +m[2] !== 0) return Q(+m[1], +m[2]);
    if (/^[+-]?\d*\.\d+$/.test(s)) { const p = s.split('.')[1].length, d = 10 ** p; return Q(Math.round(+s * d), d); }
    return null;
  }
  /* ---------- matrius de racionals ---------- */
  const mQ = A => A.map(r => r.map(x => typeof x === 'object' ? x : Q(x)));
  const mT = A => A[0].map((_, j) => A.map(r => r[j]));
  const mAdd = (A, B) => A.map((r, i) => r.map((x, j) => qa(x, B[i][j])));
  const mSubM = (A, B) => A.map((r, i) => r.map((x, j) => qs(x, B[i][j])));
  const mSc = (k, A) => A.map(r => r.map(x => qm(k, x)));
  const mMul = (A, B) => A.map(r => B[0].map((_, j) => r.reduce((s, x, k) => qa(s, qm(x, B[k][j])), Q(0))));
  const mMinorM = (A, i, j) => A.filter((_, r) => r !== i).map(r => r.filter((_, c) => c !== j));
  function mDet(A) {
    const n = A.length; if (n === 1) return A[0][0];
    if (n === 2) return qs(qm(A[0][0], A[1][1]), qm(A[1][0], A[0][1]));
    let s = Q(0);
    for (let j = 0; j < n; j++) { if (qz(A[0][j])) continue; const t = qm(A[0][j], mDet(mMinorM(A, 0, j))); s = j % 2 ? qs(s, t) : qa(s, t); }
    return s;
  }
  const mCof = A => A.length === 1 ? [[Q(1)]] : A.map((r, i) => r.map((_, j) => { const M = mDet(mMinorM(A, i, j)); return (i + j) % 2 ? qneg(M) : M; }));
  function mInv(A) { const d = mDet(A); if (qz(d)) return null; return mT(mCof(A)).map(r => r.map(x => qd(x, d))); }
  const mEq = (A, B) => A.length === B.length && A[0].length === B[0].length && A.every((r, i) => r.every((x, j) => qeq(x, B[i][j])));
  const mId = n => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => Q(i === j ? 1 : 0)));
  function combs(N, k) { const out = []; const rec = (s, a) => { if (a.length === k) { out.push(a); return; } for (let x = s; x < N; x++) rec(x + 1, a.concat(x)); }; rec(0, []); return out; }
  function mRank(A) {
    const m = A.length, n = A[0].length;
    for (let k = Math.min(m, n); k >= 1; k--) {
      const RR = combs(m, k), CC = combs(n, k);
      for (const R of RR) for (const C of CC) { const S = R.map(i => C.map(j => A[i][j])); const d = mDet(S); if (!qz(d)) return { r: k, R, C, d, S, nUp: k < Math.min(m, n) ? combs(m, k + 1).length * combs(n, k + 1).length : 0 }; }
    }
    return { r: 0, R: [], C: [], nUp: combs(m, 1).length * combs(n, 1).length };
  }
  /* ---------- text: \mat{…} a partir d'una matriu ---------- */
  const mTx = (A, k) => '\\' + (k === 'd' ? 'dt' : 'mat') + '{' + A.map(r => r.map(x => typeof x === 'object' ? qtx(x) : String(x)).join(' & ')).join('; ') + '}';
  const aij = (i, j) => 'a_{' + (i + 1) + (j + 1) + '}';
  /* ---------- matriu en HTML amb ressaltats (o editable) ---------- */
  function mxH(A, o) {
    o = o || {}; const n = A[0].length;
    return '<span class="mx ' + (o.k || 'p') + ' lx"><span class="mxg" style="grid-template-columns:repeat(' + n + ',auto)">' +
      A.map((r, i) => r.map((x, j) => {
        const c = o.hl ? o.hl(i, j) || '' : '';
        const v = typeof x === 'object' ? tx(qtx(x)) : tx(String(x));
        return o.pick ? '<span class="' + c + '"><button type="button" class="mxk" data-pk="' + i + ',' + j + '" aria-label="' + aij(i, j) + '">' + v + '</button></span>' : '<span class="' + c + '">' + v + '</span>';
      }).join('')).join('') + '</span></span>';
  }

  const rndQM = (m, n, lo, hi) => Array.from({ length: m }, () => Array.from({ length: n }, () => Q(lo + Z.rnd(hi - lo + 1))));
  const mResize = (A, m, n) => Array.from({ length: m }, (_, i) => Array.from({ length: n }, (_, j) => A[i] && A[i][j] ? A[i][j] : Q(Z.rnd(9) - 3)));

  const chess = (n, i, j) => '<span class="mx p lx chs"><span class="mxg" style="grid-template-columns:repeat(' + n + ',auto)">' + Array.from({ length: n * n }, (_, k) => { const r = Math.floor(k / n), c = k % n; return '<span class="' + (r === i && c === j ? 'hx' : '') + '">' + ((r + c) % 2 ? '−' : '+') + '</span>'; }).join('') + '</span></span>';
  const sgnTx = (i, j) => (i + j) % 2 ? '−' : '+';

  /* ---------- 3. producte de matrius ---------- */
  const PRODSZ = [[2, 3, 3, 2], [2, 2, 2, 2], [3, 2, 2, 3], [1, 3, 3, 1], [3, 3, 3, 1], [2, 3, 2, 3]];

  /* ---------- 4. tipus de matrius quadrades ---------- */
  const TYPRE = { qual: [[1, 2, 0], [4, 3, 1], [0, 5, 2]], id: [[1, 0, 0], [0, 1, 0], [0, 0, 1]], esc: [[3, 0, 0], [0, 3, 0], [0, 0, 3]], diag: [[2, 0, 0], [0, -5, 0], [0, 0, 1]], sup: [[1, 4, 2], [0, 2, 7], [0, 0, 3]], inf: [[1, 0, 0], [4, 2, 0], [2, 7, 3]], sim: [[1, 7, -2], [7, 0, 4], [-2, 4, 5]], anti: [[0, 3, -1], [-3, 0, 2], [1, -2, 0]] };

  /* ---------- 5. regla de Sarrus ---------- */
  const SAR = [[1, [[0, 0], [1, 1], [2, 2]]], [1, [[0, 1], [1, 2], [2, 0]]], [1, [[0, 2], [1, 0], [2, 1]]], [-1, [[2, 0], [1, 1], [0, 2]]], [-1, [[2, 1], [1, 2], [0, 0]]], [-1, [[2, 2], [1, 0], [0, 1]]]];

  /* ---------- 7. la inversa pas a pas ---------- */
  const INVPRE = { t2: [[3, 1], [4, 2]], t3: [[1, 2, 3], [0, 1, 4], [5, 6, 0]], s2: [[2, -3], [4, -6]], s3: [[1, 2, 3], [2, 4, 6], [1, 0, 1]], f3: [[2, 0, 1], [1, 1, 0], [0, 3, 1]] };
  function invSteps(A) {
    const n = A.length, d = mDet(A), out = [];
    out.push({ h: L('1. Determinant', '1. Determinante'), m: '|A| = ' + mTx(A, 'd') + ' = ' + qtx(d), w: n === 2 ? L('ad − bc', 'ad − bc') : L('Sarrus o desenvolupament per una fila o columna', 'Sarrus o desarrollo por una fila o columna'), c: qz(d) ? 'bad' : '' });
    if (qz(d)) { out.push({ h: L('Conclusió', 'Conclusión'), t: L('$|A| = 0$: la matriu <b>no és invertible</b>. Aquí s\'acaba.', '$|A| = 0$: la matriz <b>no es invertible</b>. Aquí se acaba.'), c: 'done' }); return out; }
    const Cf = mCof(A);
    if (n === 2) out.push({ h: L('2. Adjunts', '2. Adjuntos'), m: 'm_{11} = ' + qtx(A[1][1]) + ',  m_{12} = −' + qPar(A[1][0]) + ' = ' + qtx(Cf[0][1]) + ',  m_{21} = −' + qPar(A[0][1]) + ' = ' + qtx(Cf[1][0]) + ',  m_{22} = ' + qtx(A[0][0]), w: L('A ordre 2 cada menor complementari és un sol nombre.', 'En orden 2 cada menor complementario es un solo número.') });
    else out.push({ h: L('2. Adjunts', '2. Adjuntos'), t: '<div class="adjg">' + Cf.map((r, i) => r.map((v, j) => '<span class="m">' + tx('m_{' + (i + 1) + (j + 1) + '} = ' + sgnTx(i, j) + mTx(mMinorM(A, i, j), 'd') + ' = ' + qtx(v)) + '</span>').join('')).join('') + '</div>', w: L('Menor complementari amb el signe del tauler d\'escacs.', 'Menor complementario con el signo del tablero de ajedrez.') });
    out.push({ h: L('3. Matriu adjunta', '3. Matriz adjunta'), m: 'Adj A = ' + mTx(Cf) });
    out.push({ h: L('4. Transposem', '4. Trasponemos'), m: '(Adj A)^{T} = ' + mTx(mT(Cf)) });
    const Inv = mInv(A);
    out.push({ h: L('5. Dividim pel determinant', '5. Dividimos por el determinante'), m: 'A^{−1} = ' + qtx(qd(Q(1), d)) + ' · ' + mTx(mT(Cf)) + ' = ' + mTx(Inv), w: L('multipliquem cada element per 1/|A|', 'multiplicamos cada elemento por 1/|A|'), c: 'done' });
    out.push({ h: L('6. Comprovació', '6. Comprobación'), m: 'A · A^{−1} = ' + mTx(mMul(A, Inv)) + ' = I_{' + n + '}', w: mEq(mMul(A, Inv), mId(n)) ? L('Surt la identitat: la inversa és correcta.', 'Sale la identidad: la inversa es correcta.') : '' });
    return out;
  }

  /* ---------- 8. rang ---------- */
  const RKPRE = { r1: [[1, 2, 3], [2, 4, 6], [3, 6, 9]], r2: [[1, 2, 3], [2, 4, 6], [1, 0, 1]], r3: [[1, 2, 3], [0, 1, 4], [5, 6, 0]], w2: [[1, 2, 0, 3], [2, 4, 0, 6], [0, 1, 1, 1]], w3: [[1, 0, 2, 1], [0, 1, 1, 2], [1, 1, 0, 0]] };
  return { Q, qa, qs, qm, qd, qneg, qz, qeq, qnum, mg, qtx, qPar, qStr, qPlain, qParse, mQ, mT, mAdd, mSubM, mSc, mMul, mMinorM, mDet, mCof, mInv, mEq, mId, combs, mRank, mTx, aij, mxH, rndQM, mResize, chess, sgnTx, PRODSZ, TYPRE, SAR, INVPRE, invSteps, RKPRE };
}
