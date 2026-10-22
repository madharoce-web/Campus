import { useState } from 'react';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { tx } from '../engine/z.js';
import { useSlot, useStore } from '../store.js';
import { Html, LabShell, Stepper, Tog, useContent } from '../ui.jsx';

/* ---------- matriu editable (mxEd + mxWire + mxHlEd de l'original) ---------- */
/** Una casella: el text es manté mentre s'escriu; si no és un racional, es marca en vermell i la matriu no canvia. */
function MxIn({ k, i, j, x, onCell }) {
  const { qStr, qParse } = useContent();
  const shown = qStr(x);
  const [txt, setTxt] = useState(shown);
  const [prev, setPrev] = useState(shown);
  const [bad, setBad] = useState(false);
  if (shown !== prev) { setPrev(shown); setTxt(shown); setBad(false); }
  return (
    <input className={'mxin' + (bad ? ' bad' : '')} data-mx={k} data-ij={i + ',' + j} value={txt} autoComplete="off" spellCheck="false" aria-label={k + ' ' + (i + 1) + ',' + (j + 1)}
      onChange={(e) => { const t = e.target.value; setTxt(t); const v = qParse(t); setBad(!v); if (v) { setPrev(qStr(v)); onCell(i, j, v, 'input'); } }}
      onFocus={() => onCell(i, j, null, 'focus')} />
  );
}
/** Matriu de camps; hl(i, j) dona la classe de ressaltat de cada casella; onCell(i, j, valor | null, 'input' | 'focus'). */
function MxEd({ k, A, hl, onCell }) {
  const n = A[0].length;
  return (
    <span className="mx p lx ed"><span className="mxg" style={{ gridTemplateColumns: 'repeat(' + n + ',auto)' }}>
      {A.map((r, i) => r.map((x, j) => (
        <span key={i + ',' + j} data-cell={k + '|' + i + ',' + j} className={(hl && hl(i, j)) || undefined}>
          <MxIn k={k} i={i} j={j} x={x} onCell={onCell} />
        </span>
      )))}
    </span></span>
  );
}
/** Canvia un element d'una matriu (sense tocar l'original). */
const setAt = (A, i, j, v) => A.map((r, a) => (a === i ? r.map((y, b) => (b === j ? v : y)) : r));
/** Clic a un element d'una matriu de resultat (botons data-pk dins de l'HTML). */
const pickOf = (e) => { const b = e.target.closest && e.target.closest('[data-pk]'); return b ? b.dataset.pk.split(',').map(Number) : null; };

/* ---------- 1. anatomia d'una matriu i transposada ---------- */
export function Mxanat({ id }) {
  const { L } = useLang();
  const C = useContent();
  const { M, mQ, mT, aij, qtx, mTx, mxH, mResize, rndQM } = C;
  const [s, set] = useSlot(id, () => ({ m: 2, n: 3, A: mQ([[4, -1, 0], [7, 2, 5]]), i: 1, j: 2, nm: false, tr: true }));
  const { m, n, A } = s; const i = Math.min(s.i, m - 1), j = Math.min(s.j, n - 1);
  const shown = s.nm ? A.map((r, a) => r.map((_, b) => aij(a, b))) : A;
  const hl = (r, c) => (r === i && c === j ? 'hx' : r === i ? 'hr' : c === j ? 'hc' : '');
  const kind = m === 1 && n === 1 ? L('una matriu 1 × 1 (un sol nombre)', 'una matriz 1 × 1 (un solo número)') : m === 1 ? L('un <b>vector fila</b>', 'un <b>vector fila</b>') : n === 1 ? L('un <b>vector columna</b>', 'un <b>vector columna</b>') : m === n ? L('una matriu <b>quadrada d\'ordre ' + n + '</b>', 'una matriz <b>cuadrada de orden ' + n + '</b>') : L('una matriu rectangular', 'una matriz rectangular');
  const At = mT(shown);
  const pick = (e) => { const p = pickOf(e); if (p) set({ i: p[0], j: p[1] }); };
  return (
    <LabShell title={L('Files, columnes i posicions', 'Filas, columnas y posiciones')}>
      <div className="row">
        <span className="small"><b>{L('Files', 'Filas')}</b></span>
        <Tog attr="m" items={[1, 2, 3, 4].map((x) => [x, String(x)])} value={m} onChange={(v) => set({ m: v, A: mResize(s.A, v, s.n), i: Math.min(s.i, v - 1) })} />
        <span className="small"><b>{L('Columnes', 'Columnas')}</b></span>
        <Tog attr="n" items={[1, 2, 3, 4].map((x) => [x, String(x)])} value={n} onChange={(v) => set({ n: v, A: mResize(s.A, s.m, v), j: Math.min(s.j, v - 1) })} />
      </div>
      <div className="row">
        <button type="button" className="chipbtn" data-t="nm" aria-pressed={s.nm} onClick={() => set({ nm: !s.nm })}>{L('Mostra els noms', 'Muestra los nombres') + ' '}<Html as="span" html={M('a_{ij}')} /></button>
        <button type="button" className="chipbtn" data-t="tr" aria-pressed={s.tr} onClick={() => set({ tr: !s.tr })}>{L('Mostra la transposada', 'Muestra la traspuesta')}</button>
        <button type="button" className="chipbtn" data-t="rnd" onClick={() => set({ A: rndQM(s.m, s.n, -5, 9) })}>{L('Altres nombres', 'Otros números')}</button>
      </div>
      <Rich className="mxeq" onClick={pick} html={'<span class="m">A = </span>' + mxH(shown, { hl, pick: 1 }) + (s.tr ? '<span class="m" style="margin-left:14px">A<sup>T</sup> = </span>' + mxH(At, { hl: (r, c) => (r === j && c === i ? 'hx' : c === i ? 'hr' : r === j ? 'hc' : '') }) : '')} />
      <Html html={'<div class="kv"><span>' + L('mida', 'tamaño') + '</span><span>' + M(m + ' × ' + n) + ' · ' + L(m + (m === 1 ? ' fila' : ' files') + ' i ' + n + (n === 1 ? ' columna' : ' columnes') + ': és ' + kind + '.', m + (m === 1 ? ' fila' : ' filas') + ' y ' + n + (n === 1 ? ' columna' : ' columnas') + ': es ' + kind + '.') + '</span>' +
        '<span>' + L('element', 'elemento') + '</span><span>' + M(aij(i, j) + ' = ' + qtx(A[i][j])) + ' · ' + L('fila ' + (i + 1) + ' (primer índex), columna ' + (j + 1) + ' (segon índex)', 'fila ' + (i + 1) + ' (primer índice), columna ' + (j + 1) + ' (segundo índice)') + '</span>' +
        '<span>' + L('fila ', 'fila ') + (i + 1) + '</span><span>' + M('(' + A[i].map(qtx).join(', ') + ')') + '</span>' +
        '<span>' + L('columna ', 'columna ') + (j + 1) + '</span><span>' + M(mTx(A.map((r) => [r[j]]))) + '</span>' +
        (s.tr ? '<span>' + L('transposada', 'traspuesta') + '</span><span>' + L('Mida ', 'Tamaño ') + M(n + ' × ' + m) + '. ' + L('L\'element ', 'El elemento ') + M(aij(i, j)) + L(' passa a la posició ', ' pasa a la posición ') + M('(' + (j + 1) + ', ' + (i + 1) + ')') + ': ' + M('(A^{T})_{' + (j + 1) + (i + 1) + '} = ' + aij(i, j)) + L('. La fila ' + (i + 1) + ' d\'A és la columna ' + (i + 1) + ' d\'A', '. La fila ' + (i + 1) + ' de A es la columna ' + (i + 1) + ' de A') + M('^{T}') + '.</span>' : '') + '</div>' +
        '<p class="tiny muted">' + L('Toca un element de A per veure la seva fila, la seva columna i on va a parar quan transposes.', 'Toca un elemento de A para ver su fila, su columna y adónde va a parar cuando traspones.') + '</p>'} />
    </LabShell>
  );
}

/* ---------- 2. suma, resta i producte per un escalar ---------- */
export function Mxops({ id }) {
  const { L } = useLang();
  const C = useContent();
  const { mQ, Q, mAdd, mSubM, mSc, mxH, aij, qtx, qPar, mg, stepRow, mResize } = C;
  const [s, set] = useSlot(id, () => ({ r: 2, c: 3, A: mQ([[1, 2, 0], [3, 4, -1]]), B: mQ([[0, 1, 5], [-1, 2, 2]]), op: '+', k: 3, i: 0, j: 0 }));
  const [kt, setKt] = useState(String(s.k));
  const [kbad, setKbad] = useState(false);
  const Cm = s.op === '+' ? mAdd(s.A, s.B) : s.op === '−' ? mSubM(s.A, s.B) : mSc(Q(s.k), s.A);
  const i = s.i, j = s.j, a = s.A[i][j], b = s.B[i][j], c = Cm[i][j];
  const hl = (r, q) => (r === i && q === j ? 'hx' : '');
  const f = s.op === '+' ? 'c_{' + (i + 1) + (j + 1) + '} = ' + aij(i, j) + ' + b_{' + (i + 1) + (j + 1) + '} = ' + qtx(a) + ' + ' + qPar(b) + ' = ' + qtx(c)
    : s.op === '−' ? 'c_{' + (i + 1) + (j + 1) + '} = ' + aij(i, j) + ' − b_{' + (i + 1) + (j + 1) + '} = ' + qtx(a) + ' − ' + qPar(b) + ' = ' + qtx(c)
      : 'c_{' + (i + 1) + (j + 1) + '} = k · ' + aij(i, j) + ' = ' + mg(s.k) + ' · ' + qPar(a) + ' = ' + qtx(c);
  const cell = (key) => (r, q, v) => set((o) => (v ? { [key]: setAt(o[key], r, q, v), i: r, j: q } : { i: r, j: q }));
  const pick = (e) => { const p = pickOf(e); if (p) set({ i: p[0], j: p[1] }); };
  const kIn = (e) => { const t = e.target.value; setKt(t); const v = +t.replace('−', '-'); const bad = !isFinite(v) || t.trim() === ''; setKbad(bad); if (!bad) set({ k: v }); };
  const edA = <MxEd k={id + 'A'} A={s.A} hl={hl} onCell={cell('A')} />;
  return (
    <LabShell title={L('Suma, resta i producte per un escalar', 'Suma, resta y producto por un escalar')}>
      <div className="row">
        <Tog attr="sz" items={[['2x2', '2 × 2'], ['2x3', '2 × 3'], ['3x3', '3 × 3']]} value={s.r + 'x' + s.c} onChange={(v) => { const [r, cc] = v.split('x').map(Number); set({ r, c: cc, A: mResize(s.A, r, cc), B: mResize(s.B, r, cc), i: 0, j: 0 }); }} />
        <Tog attr="op" items={[['+', 'A + B'], ['−', 'A − B'], ['k', 'k · A']]} value={s.op} onChange={(op) => set({ op })} />
      </div>
      <div className="mxeq">
        {s.op === 'k'
          ? <><input className={'mxin kin' + (kbad ? ' bad' : '')} id={id + '-k'} value={kt} aria-label="k" onChange={kIn} /><span className="m opm">·</span>{edA}</>
          : <>{edA}<span className="m opm">{s.op}</span><MxEd k={id + 'B'} A={s.B} hl={hl} onCell={cell('B')} /></>}
        <span className="m opm">=</span>
        <Rich as="span" className="mx-out" onClick={pick} html={mxH(Cm, { hl, pick: 1 })} />
      </div>
      <Rich className="mx-f" html={'<div class="steps">' + stepRow({ h: L('Posició ', 'Posición ') + '(' + (i + 1) + ', ' + (j + 1) + ')', m: f, w: s.op === 'k' ? L('Es multiplica <b>cada</b> element per k.', 'Se multiplica <b>cada</b> elemento por k.') : L('Es fa posició a posició: només intervenen els dos elements que ocupen el mateix lloc.', 'Se hace posición a posición: solo intervienen los dos elementos que ocupan el mismo lugar.') }, 0) + '</div>'} />
      <p className="tiny muted">{L('Pots canviar qualsevol nombre (també fraccions com 1/2). Toca un element del resultat per veure d\'on surt.', 'Puedes cambiar cualquier número (también fracciones como 1/2). Toca un elemento del resultado para ver de dónde sale.')}</p>
    </LabShell>
  );
}

/* ---------- 3. producte de matrius ---------- */
export function Mxprod({ id }) {
  const { L } = useLang();
  const C = useContent();
  const { M, mQ, mMul, mEq, mxH, aij, qtx, qPar, stepRow, mResize, PRODSZ } = C;
  const [s, set] = useSlot(id, () => ({ z: 1, A: mQ([[1, 2], [3, 4]]), B: mQ([[0, 1], [-1, 2]]), i: 0, j: 0, ba: true }));
  const [m, p, q, n] = PRODSZ[s.z], ok = p === q;
  // en canviar el producte, les matrius prenen la mida que toca (com el draw de l'original)
  const choose = (z) => { const [m2, p2, q2, n2] = PRODSZ[z]; set((o) => ({ z, A: o.A.length !== m2 || o.A[0].length !== p2 ? mResize(o.A, m2, p2) : o.A, B: o.B.length !== q2 || o.B[0].length !== n2 ? mResize(o.B, q2, n2) : o.B })); };
  const rule = '<span class="m">(' + m + ' × <b class="' + (ok ? 'yes' : 'no') + '">' + p + '</b>) · (<b class="' + (ok ? 'yes' : 'no') + '">' + q + '</b> × ' + n + ')</span> ' + (ok ? '→ ' + M(m + ' × ' + n) + L(': els de dins coincideixen i els de fora donen la mida.', ': los de dentro coinciden y los de fuera dan el tamaño.') : '→ ' + L('<b>no existeix</b>: el nombre de columnes d\'A (' + p + ') no és el nombre de files de B (' + q + ').', '<b>no existe</b>: el número de columnas de A (' + p + ') no es el número de filas de B (' + q + ').'));
  let outH, fH = '', hlA = () => '', hlB = () => '';
  if (!ok) outH = '<span class="pill out">' + L('no existeix', 'no existe') + '</span>';
  else {
    const i = Math.min(s.i, m - 1), j = Math.min(s.j, n - 1);
    const Cm = mMul(s.A, s.B);
    hlA = (r) => (r === i ? 'hr' : ''); hlB = (r, c) => (c === j ? 'hc' : '');
    outH = mxH(Cm, { hl: (r, c) => (r === i && c === j ? 'hx' : ''), pick: 1 });
    const terms = s.A[i].map((a, k) => qPar(a) + ' · ' + qPar(s.B[k][j]));
    const sym = s.A[i].map((_, k) => aij(i, k) + 'b_{' + (k + 1) + (j + 1) + '}');
    fH = '<div class="steps">' + stepRow({ h: L('Fila ' + (i + 1) + ' d\'A per columna ' + (j + 1) + ' de B', 'Fila ' + (i + 1) + ' de A por columna ' + (j + 1) + ' de B'), m: 'c_{' + (i + 1) + (j + 1) + '} = ' + sym.join(' + ') }, 0) + stepRow({ m: '= ' + terms.join(' + ') + ' = ' + qtx(Cm[i][j]) }, 1) + '</div>';
    if (s.ba) {
      if (n === m && q === p) {
        const D = mMul(s.B, s.A);
        fH += '<div class="mxeq"><span class="m">BA = </span>' + mxH(D) + '<span class="small">' + (mEq(Cm, D) ? L('Aquí AB = BA, però és una casualitat d\'aquestes matrius.', 'Aquí AB = BA, pero es una casualidad de estas matrices.') : (Cm.length === D.length ? L('<b>AB ≠ BA</b>: el producte no és commutatiu.', '<b>AB ≠ BA</b>: el producto no es conmutativo.') : L('BA existeix però és ' + D.length + ' × ' + D.length + ' i AB és ' + m + ' × ' + n + ': ni tan sols tenen la mateixa mida.', 'BA existe pero es ' + D.length + ' × ' + D.length + ' y AB es ' + m + ' × ' + n + ': ni siquiera tienen el mismo tamaño.'))) + '</span></div>';
      } else fH += '<p class="small">' + L('BA: ', 'BA: ') + M('(' + q + ' × ' + n + ') · (' + m + ' × ' + p + ')') + L(' no existeix, perquè ' + n + ' ≠ ' + m + '. Que AB existeixi no vol dir que BA també.', ' no existe, porque ' + n + ' ≠ ' + m + '. Que AB exista no quiere decir que BA también.') + '</p>';
    }
  }
  const pick = (e) => { const pk = pickOf(e); if (pk) set({ i: pk[0], j: pk[1] }); };
  return (
    <LabShell title={L('Producte de matrius: fila per columna', 'Producto de matrices: fila por columna')}>
      <Tog attr="z" items={PRODSZ.map((z, k) => [k, '(' + z[0] + '×' + z[1] + ')·(' + z[2] + '×' + z[3] + ')'])} value={s.z} onChange={choose} />
      <div className="row"><button type="button" className="chipbtn" data-t="ba" aria-pressed={s.ba} onClick={() => set({ ba: !s.ba })}>{L('Calcula també BA', 'Calcula también BA')}</button></div>
      <Rich className="mx-rule small" html={rule} />
      <div className="mxeq">
        <MxEd k={id + 'A'} A={s.A} hl={hlA} onCell={(r, c, v) => set((o) => (v ? { A: setAt(o.A, r, c, v), i: r } : { i: r }))} />
        <span className="m opm">·</span>
        <MxEd k={id + 'B'} A={s.B} hl={hlB} onCell={(r, c, v) => set((o) => (v ? { B: setAt(o.B, r, c, v), j: c } : { j: c }))} />
        <span className="m opm">=</span>
        <Rich as="span" className="mx-out" onClick={pick} html={outH} />
      </div>
      <Rich className="mx-f" html={fH} />
      <p className="tiny muted">{L('Toca un element del resultat: es marquen la fila d\'A i la columna de B que el formen.', 'Toca un elemento del resultado: se marcan la fila de A y la columna de B que lo forman.')}</p>
    </LabShell>
  );
}

/* ---------- 4. tipus de matrius quadrades ---------- */
export function Mxtype({ id }) {
  const { L } = useLang();
  const C = useContent();
  const { M, Q, mQ, mT, mAdd, mSubM, mSc, qa, qz, qeq, qneg, qtx, qPar, aij, mTx, TYPRE } = C;
  const [s, set] = useSlot(id, () => ({ A: mQ(TYPRE.qual), pre: 'qual' }));
  const A = s.A, n = A.length, idx = [];
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) idx.push([i, j]);
  const find = (f) => idx.find(([i, j]) => f(i, j));
  const nzOff = find((i, j) => i !== j && !qz(A[i][j])), low = find((i, j) => i > j && !qz(A[i][j])), up = find((i, j) => i < j && !qz(A[i][j]));
  const dneq = find((i, j) => i === j && !qeq(A[i][i], A[0][0]));
  const nsym = find((i, j) => !qeq(A[i][j], A[j][i])), nanti = find((i, j) => !qeq(A[i][j], qneg(A[j][i])));
  const why0 = (p) => M(aij(p[0], p[1]) + ' = ' + qtx(A[p[0]][p[1]]) + ' ≠ 0');
  const T = [
    [L('Diagonal', 'Diagonal'), !nzOff, nzOff ? why0(nzOff) : L('zeros fora de la diagonal', 'ceros fuera de la diagonal')],
    [L('Escalar', 'Escalar'), !nzOff && !dneq, nzOff ? L('no és diagonal', 'no es diagonal') : dneq ? M(aij(dneq[0], dneq[0]) + ' = ' + qtx(A[dneq[0]][dneq[0]]) + ' ≠ ' + qtx(A[0][0]) + ' = a_{11}') : M(qtx(A[0][0]) + ' · I_{' + n + '}')],
    [L('Identitat', 'Identidad'), !nzOff && !dneq && qeq(A[0][0], Q(1)), !nzOff && !dneq ? (qeq(A[0][0], Q(1)) ? M('I_{' + n + '}') : L('escalar però amb k = ', 'escalar pero con k = ') + M(qtx(A[0][0]))) : L('no és escalar', 'no es escalar')],
    [L('Triangular superior', 'Triangular superior'), !low, low ? why0(low) + L(' (sota la diagonal)', ' (bajo la diagonal)') : L('zeros sota la diagonal', 'ceros bajo la diagonal')],
    [L('Triangular inferior', 'Triangular inferior'), !up, up ? why0(up) + L(' (sobre la diagonal)', ' (sobre la diagonal)') : L('zeros sobre la diagonal', 'ceros sobre la diagonal')],
    [L('Simètrica', 'Simétrica'), !nsym, nsym ? M(aij(nsym[0], nsym[1]) + ' = ' + qtx(A[nsym[0]][nsym[1]]) + ' ≠ ' + qtx(A[nsym[1]][nsym[0]]) + ' = ' + aij(nsym[1], nsym[0])) : M('A = A^{T}')],
    [L('Antisimètrica', 'Antisimétrica'), !nanti, nanti ? (nanti[0] === nanti[1] ? M(aij(nanti[0], nanti[0]) + ' = ' + qtx(A[nanti[0]][nanti[0]]) + ' ≠ 0') + L(' a la diagonal', ' en la diagonal') : M(aij(nanti[0], nanti[1]) + ' = ' + qtx(A[nanti[0]][nanti[1]]) + ' ≠ −(' + qtx(A[nanti[1]][nanti[0]]) + ')')) : M('A = −A^{T}')],
  ];
  const tr = A.reduce((a, r, i) => qa(a, r[i]), Q(0)), At = mT(A), half = Q(1, 2);
  const Sm = mSc(half, mAdd(A, At)), Km = mSc(half, mSubM(A, At));
  return (
    <LabShell title={L('Quin tipus de matriu és?', '¿Qué tipo de matriz es?')}>
      <Tog attr="pre" items={[['qual', L('qualsevol', 'cualquiera')], ['id', 'I₃'], ['esc', L('escalar', 'escalar')], ['diag', L('diagonal', 'diagonal')], ['sup', L('triang. sup.', 'triang. sup.')], ['inf', L('triang. inf.', 'triang. inf.')], ['sim', L('simètrica', 'simétrica')], ['anti', L('antisimètrica', 'antisimétrica')]]} value={s.pre} onChange={(pre) => set({ pre, A: mQ(TYPRE[pre]) })} />
      <div className="lab-split">
        <div className="mxeq"><span className="m">A = </span><MxEd k={id} A={s.A} onCell={(i, j, v) => set((o) => (v ? { A: setAt(o.A, i, j, v), pre: '' } : { pre: '' }))} /></div>
        <Html html={'<div class="mx-f stack" style="gap:10px"><div class="tytab">' + T.map(([nm, ok, why]) => '<div class="tyrow ' + (ok ? 'ok' : 'ko') + '"><span class="tyk">' + (ok ? '✓' : '✗') + '</span><b>' + nm + '</b><span class="small">' + why + '</span></div>').join('') + '</div>' +
          '<div class="kv"><span>' + L('traça', 'traza') + '</span><span>' + M('tr A = ' + A.map((r, i) => qPar(r[i])).join(' + ') + ' = ' + qtx(tr)) + '</span><span>' + L('transposada', 'traspuesta') + '</span><span>' + M('A^{T} = ' + mTx(At)) + '</span></div>' +
          '<p class="small"><b>' + L('Descomposició en simètrica + antisimètrica', 'Descomposición en simétrica + antisimétrica') + '</b></p><div class="disp m">' + tx('A = ' + mTx(Sm) + ' + ' + mTx(Km)) + '</div></div>'} />
      </div>
      <p className="tiny muted">{L('Canvia nombres i mira quins tipus es guanyen o es perden. Una mateixa matriu pot ser de diversos tipus alhora.', 'Cambia números y mira qué tipos se ganan o se pierden. Una misma matriz puede ser de varios tipos a la vez.')}</p>
    </LabShell>
  );
}

/* ---------- 5. regla de Sarrus ---------- */
const X = (c) => 46 + c * 64, Yr = (r) => 44 + r * 48;
export function Mxsarrus({ id }) {
  const { L } = useLang();
  const C = useContent();
  const { Q, mQ, qm, qa, qtx, qPar, qPlain, aij, mDet, stepRow, rndQM, SAR } = C;
  const [s, set] = useSlot(id, () => ({ A: mQ([[1, 2, 3], [0, 1, 4], [5, 6, 0]]), t: 0 }));
  const A = s.A;
  let g = '';
  for (let c = 0; c < 5; c++) for (let r = 0; r < 3; r++) g += '<text class="' + (c > 2 ? 'cp' : '') + '" x="' + X(c) + '" y="' + (Yr(r) + 5) + '">' + qPlain(A[r][c % 3]) + '</text>';
  g += '<line class="sep" x1="' + (X(2) + 32) + '" y1="18" x2="' + (X(2) + 32) + '" y2="' + (Yr(2) + 24) + '"/>';
  g += '<line class="bar" x1="' + (X(0) - 30) + '" y1="18" x2="' + (X(0) - 30) + '" y2="' + (Yr(2) + 24) + '"/>';
  const lines = SAR.map(([sg], k) => { const st0 = k % 3; const x1 = X(st0) - 24, x2 = X(st0 + 2) + 24; const yA = Yr(0) - 18, yB = Yr(2) + 18; return '<line class="' + (sg > 0 ? 'dp' : 'dn') + (s.t === k ? ' on' : (s.t >= 0 ? ' dim' : '')) + '" data-tk="' + k + '" x1="' + x1 + '" y1="' + (sg > 0 ? yA : yB) + '" x2="' + x2 + '" y2="' + (sg > 0 ? yB : yA) + '"/>'; }).join('');
  const marks = SAR.map(([sg], k) => { const x = X(k % 3) - 24; return '<text class="sg ' + (sg > 0 ? 'dp' : 'dn') + '" x="' + x + '" y="' + (sg > 0 ? Yr(0) - 24 : Yr(2) + 36) + '">' + (sg > 0 ? '+' : '−') + '</text>'; }).join('');
  const hi = s.t >= 0 ? SAR[s.t][1].map(([r]) => { const k = s.t % 3; const cc = SAR[s.t][0] > 0 ? k + r : k + (2 - r); return '<circle class="hc' + (SAR[s.t][0] > 0 ? ' p' : ' n') + '" cx="' + X(cc) + '" cy="' + Yr(r) + '" r="17"/>'; }).join('') : '';
  const svg = '<svg class="sar" viewBox="0 0 ' + (X(4) + 46) + ' ' + (Yr(2) + 52) + '" role="img" aria-label="' + L('Diagrama de Sarrus', 'Diagrama de Sarrus') + '">' + hi + lines + marks + g + '</svg>';
  const prods = SAR.map(([sg, cells]) => { const v = cells.reduce((p, [r, c]) => qm(p, A[r][c]), Q(1)); return { sg, cells, v }; });
  const P = prods.filter((x) => x.sg > 0).reduce((a, x) => qa(a, x.v), Q(0)), N = prods.filter((x) => x.sg < 0).reduce((a, x) => qa(a, x.v), Q(0));
  const d = mDet(A);
  const tk = (k) => set({ t: s.t === k ? -1 : k });
  const onSvg = (e) => { const l = e.target.closest && e.target.closest('[data-tk]'); if (l) tk(+l.dataset.tk); };
  return (
    <LabShell title={L('Regla de Sarrus', 'Regla de Sarrus')}>
      <div className="lab-split">
        <div className="stack p-g8">
          <Rich className="sar-svg" onClick={onSvg} html={svg} />
          <div className="mxeq"><span className="m">A = </span><MxEd k={id} A={A} onCell={(i, j, v) => { if (v) set((o) => ({ A: setAt(o.A, i, j, v) })); }} />
            <button type="button" className="chipbtn" data-t="rnd" onClick={() => set({ A: rndQM(3, 3, -4, 6) })}>{L('Altres nombres', 'Otros números')}</button></div>
        </div>
        <div className="stack p-g8">
          <div className="sar-t trms">
            {prods.map((x, k) => (
              <button key={k} type="button" className={'chipbtn trm ' + (x.sg > 0 ? 'p' : 'n')} data-tk={k} aria-pressed={s.t === k} onClick={() => tk(k)}>
                <Rich as="span" className="m" html={(x.sg > 0 ? '+' : '−') + ' ' + tx(x.cells.map(([r, c]) => aij(r, c)).join('')) + ' = ' + tx(x.cells.map(([r, c]) => qPar(A[r][c])).join(' · ')) + ' = ' + tx(qtx(x.v))} />
              </button>
            ))}
          </div>
          <Rich className="mx-f" html={'<div class="steps">' + stepRow({ h: L('Diagonals que baixen (sumen)', 'Diagonales que bajan (suman)'), m: prods.slice(0, 3).map((x) => qPar(x.v)).join(' + ') + ' = ' + qtx(P) }, 0) + stepRow({ h: L('Diagonals que pugen (resten)', 'Diagonales que suben (restan)'), m: prods.slice(3).map((x) => qPar(x.v)).join(' + ') + ' = ' + qtx(N) }, 1) +
            stepRow({ h: L('Determinant', 'Determinante'), m: '|A| = ' + qtx(P) + ' − ' + qPar(N) + ' = ' + qtx(d), c: 'done' }, 2) + '</div>'} />
        </div>
      </div>
      <p className="tiny muted">{L('Toca un producte (o una diagonal) per marcar-lo al dibuix. Les dues columnes de la dreta són còpia de les dues primeres.', 'Toca un producto (o una diagonal) para marcarlo en el dibujo. Las dos columnas de la derecha son copia de las dos primeras.')}</p>
    </LabShell>
  );
}

/* ---------- 6. menors, adjunts i desenvolupament ---------- */
export function Mxminor({ id, cfg }) {
  const { L } = useLang();
  const C = useContent();
  const { M, Q, mQ, qz, qa, qm, qneg, qtx, qPar, aij, mDet, mMinorM, mTx, chess, sgnTx, stepRow } = C;
  const [s, set] = useSlot(id, () => ({ n: 3, A: mQ([[1, 2, 3], [0, 1, 4], [5, 6, 0]]), i: 0, j: 1, md: cfg.m || 'menor', ln: 'c0' }));
  const A = s.A, n = A.length, i = Math.min(s.i, n - 1), j = Math.min(s.j, n - 1);
  let hl, out;
  if (s.md === 'menor') {
    const Mm = mMinorM(A, i, j), Mv = mDet(Mm), mv = (i + j) % 2 ? qneg(Mv) : Mv;
    hl = (r, c) => (r === i && c === j ? 'hx' : (r === i || c === j) ? 'off' : '');
    out = <Html html={'<div class="mxeq"><span class="small">' + L('Signe', 'Signo') + '</span>' + chess(n, i, j) + '<span class="small">' + L('Toca un element de la matriu', 'Toca un elemento de la matriz') + '</span></div>' +
      '<div class="steps">' + stepRow({ h: L('Suprimim la fila ' + (i + 1) + ' i la columna ' + (j + 1), 'Suprimimos la fila ' + (i + 1) + ' y la columna ' + (j + 1)), m: 'M_{' + (i + 1) + (j + 1) + '} = ' + mTx(Mm, 'd') + ' = ' + qtx(Mv), w: n === 4 ? L('És un determinant d\'ordre 3: Sarrus o un altre desenvolupament.', 'Es un determinante de orden 3: Sarrus u otro desarrollo.') : '' }, 0) +
      stepRow({ h: L('Adjunt: el menor amb el signe de la seva casella', 'Adjunto: el menor con el signo de su casilla'), m: 'm_{' + (i + 1) + (j + 1) + '} = (−1)^{' + (i + 1) + '+' + (j + 1) + '} · M_{' + (i + 1) + (j + 1) + '} = (' + ((i + j) % 2 ? '−1' : '+1') + ') · ' + qPar(Mv) + ' = ' + qtx(mv), c: 'done' }, 1) + '</div>'} />;
  } else {
    const isRow = s.ln[0] === 'r', k = Math.min(+s.ln.slice(1), n - 1);
    const cells = Array.from({ length: n }, (_, t) => (isRow ? [k, t] : [t, k]));
    hl = (r, c) => ((isRow ? r === k : c === k) ? 'hr' : '');
    const zeros = [];
    for (let t = 0; t < n; t++) { zeros.push(['r' + t, A[t].filter(qz).length]); }
    for (let t = 0; t < n; t++) { zeros.push(['c' + t, A.filter((r) => qz(r[t])).length]); }
    const best = zeros.reduce((a, b) => (b[1] > a[1] ? b : a));
    const lnTx = (v) => (v[0] === 'r' ? L('F', 'F') : 'C') + (+v.slice(1) + 1);
    let tot = Q(0);
    const rows = cells.map(([r, c], t) => {
      const a = A[r][c];
      if (qz(a)) return stepRow({ h: M(aij(r, c) + ' = 0'), t: L('Aquest terme val 0: no cal calcular el menor.', 'Este término vale 0: no hace falta calcular el menor.') }, t);
      const Mv = mDet(mMinorM(A, r, c)), term = qm(a, (r + c) % 2 ? qneg(Mv) : Mv); tot = qa(tot, term);
      const mv = (r + c) % 2 ? qneg(Mv) : Mv;
      return stepRow({ h: M(aij(r, c) + ' · m_{' + (r + 1) + (c + 1) + '}'), m: qPar(a) + ' · (' + sgnTx(r, c) + mTx(mMinorM(A, r, c), 'd') + ') = ' + qPar(a) + ' · ' + qPar(mv) + ' = ' + qtx(term) }, t);
    });
    out = (
      <>
        <div className="row"><Tog attr="ln" items={zeros.map(([v, z]) => [v, lnTx(v) + (z ? ' · ' + z + '×0' : '')])} value={s.ln} onChange={(ln) => set({ ln })} /></div>
        <Html html={'<p class="small">' + L('La que té més zeros és ', 'La que tiene más ceros es ') + '<b>' + lnTx(best[0]) + '</b>' + (best[1] ? L(' (' + best[1] + (best[1] === 1 ? ' zero' : ' zeros') + ')', ' (' + best[1] + (best[1] === 1 ? ' cero' : ' ceros') + ')') : '') + '.</p>' +
          '<div class="steps">' + rows.join('') + stepRow({ h: L('Suma', 'Suma'), m: '|A| = ' + qtx(tot), w: L('Dóna el mateix triant qualsevol fila o columna.', 'Da lo mismo eligiendo cualquier fila o columna.'), c: 'done' }, n) + '</div>'} />
      </>
    );
  }
  return (
    <LabShell title={L('Menors, adjunts i desenvolupament', 'Menores, adjuntos y desarrollo')}>
      <div className="row">
        <Tog attr="nn" items={[[3, '3 × 3'], [4, '4 × 4']]} value={s.n} onChange={(v) => set({ n: v, A: v === 4 ? mQ([[2, 0, 1, 3], [0, 1, 0, 0], [1, 0, 3, 2], [0, 0, 1, 1]]) : mQ([[1, 2, 3], [0, 1, 4], [5, 6, 0]]), ln: v === 4 ? 'r1' : 'c0' })} />
        <Tog attr="md" items={[['menor', L('menor i adjunt', 'menor y adjunto')], ['lap', L('desenvolupament', 'desarrollo')]]} value={s.md} onChange={(md) => set({ md })} />
      </div>
      <div className="mxeq"><span className="m">A = </span><MxEd k={id} A={A} hl={hl} onCell={(r, c, v) => set((o) => (v ? { A: setAt(o.A, r, c, v), i: r, j: c } : { i: r, j: c }))} /></div>
      <div className="mx-f">{out}</div>
      <p className="tiny muted">{s.md === 'menor' ? L('Toca (o edita) un element: es ratllen la seva fila i la seva columna i el que queda és el menor complementari.', 'Toca (o edita) un elemento: se tachan su fila y su columna y lo que queda es el menor complementario.') : L('Tria una fila (F) o una columna (C). Cada element es multiplica pel seu adjunt; els zeros s\'emporten un menor sencer.', 'Elige una fila (F) o una columna (C). Cada elemento se multiplica por su adjunto; los ceros se llevan un menor entero.')}</p>
    </LabShell>
  );
}

/* ---------- 7. la inversa pas a pas ---------- */
export function Mxinv({ id }) {
  const { L } = useLang();
  const C = useContent();
  const store = useStore();
  const { mQ, invSteps, INVPRE } = C;
  const [s, set] = useSlot(id, () => ({ pre: 't2', A: mQ(INVPRE.t2) }));
  return (
    <LabShell title={L('La inversa pas a pas', 'La inversa paso a paso')}>
      <Tog attr="pre" items={[['t2', L('2 × 2 de la teoria', '2 × 2 de la teoría')], ['t3', L('3 × 3 de la teoria', '3 × 3 de la teoría')], ['f3', L('3 × 3 amb fraccions', '3 × 3 con fracciones')], ['s2', L('no invertible', 'no invertible')], ['s3', L('no invertible 3 × 3', 'no invertible 3 × 3')]]} value={s.pre}
        onChange={(pre) => { store.set('stp:' + id + 'st', 1); set({ pre, A: mQ(INVPRE[pre]) }); }} />
      <div className="mxeq"><span className="m">A = </span><MxEd k={id} A={s.A} onCell={(i, j, v) => { if (v) set((o) => ({ A: setAt(o.A, i, j, v) })); }} /></div>
      <div className="mx-f"><Stepper id={id + 'st'} gen={() => invSteps(s.A)} /></div>
      <p className="tiny muted">{L('Pots editar la matriu: els passos es recalculen sols. Ves revelant-los un a un i intenta fer cada pas abans de veure\'l.', 'Puedes editar la matriz: los pasos se recalculan solos. Ve revelándolos uno a uno e intenta hacer cada paso antes de verlo.')}</p>
    </LabShell>
  );
}

/* ---------- 8. rang ---------- */
export function Mxrank({ id }) {
  const { L } = useLang();
  const C = useContent();
  const { M, mQ, mRank, mTx, qtx, stepRow, RKPRE } = C;
  const [s, set] = useSlot(id, () => ({ pre: 'r2', A: mQ(RKPRE.r2) }));
  const A = s.A, m = A.length, n = A[0].length, R = mRank(A), mx = Math.min(m, n);
  const st_ = [];
  if (R.r < mx) st_.push({ h: L('Ordre ' + (R.r + 1), 'Orden ' + (R.r + 1)), t: L('Hi ha ' + R.nUp + ' menors d\'ordre ' + (R.r + 1) + ' i <b>tots valen 0</b>.', 'Hay ' + R.nUp + ' menores de orden ' + (R.r + 1) + ' y <b>todos valen 0</b>.') + (m === n && R.r + 1 === n ? ' ' + L('(Aquí és només el determinant: $|A| = 0$.)', '(Aquí es solo el determinante: $|A| = 0$.)') : '') });
  if (R.r > 0) st_.push({ h: L('Ordre ' + R.r, 'Orden ' + R.r), m: mTx(R.S, 'd') + ' = ' + qtx(R.d) + ' ≠ 0', w: L('files ' + R.R.map((x) => x + 1).join(', ') + ' i columnes ' + R.C.map((x) => x + 1).join(', ') + ' (marcades a la matriu)', 'filas ' + R.R.map((x) => x + 1).join(', ') + ' y columnas ' + R.C.map((x) => x + 1).join(', ') + ' (marcadas en la matriz)') });
  st_.push({ h: L('Rang', 'Rango'), m: 'rang A = ' + R.r, w: (R.r === mx ? L('És el màxim possible per a una matriu ' + m + ' × ' + n + ': ', 'Es el máximo posible para una matriz ' + m + ' × ' + n + ': ') + M('min(' + m + ', ' + n + ') = ' + mx) + '.' : '') + (m === n ? ' ' + (R.r === n ? L('Com que és ' + n + ', $|A| ≠ 0$ i A és invertible.', 'Como es ' + n + ', $|A| ≠ 0$ y A es invertible.') : L('Com que és menor que ' + n + ', A no és invertible.', 'Como es menor que ' + n + ', A no es invertible.')) : ''), c: 'done' });
  return (
    <LabShell title={L('El rang amb menors', 'El rango con menores')}>
      <Tog attr="pre" items={[['r1', L('rang 1', 'rango 1')], ['r2', L('rang 2', 'rango 2')], ['r3', L('rang 3', 'rango 3')], ['w2', '3 × 4 (a)'], ['w3', '3 × 4 (b)']]} value={s.pre} onChange={(pre) => set({ pre, A: mQ(RKPRE[pre]) })} />
      <div className="mxeq"><span className="m">A = </span><MxEd k={id} A={A} hl={(i, j) => (R.R.includes(i) && R.C.includes(j) ? 'hx' : '')} onCell={(i, j, v) => { if (v) set((o) => ({ A: setAt(o.A, i, j, v) })); }} /></div>
      <Rich className="mx-f" html={'<div class="steps">' + st_.map(stepRow).join('') + '</div>'} />
      <p className="tiny muted">{L('Es busca el menor no nul més gran. Canvia un nombre i mira com canvia el rang: n\'hi ha prou amb trencar una proporcionalitat.', 'Se busca el menor no nulo más grande. Cambia un número y mira cómo cambia el rango: basta con romper una proporcionalidad.')}</p>
    </LabShell>
  );
}
