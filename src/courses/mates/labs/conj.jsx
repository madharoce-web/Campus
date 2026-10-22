import { useRef } from 'react';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { Z, tx } from '../engine/z.js';
import { useSlot } from '../store.js';
import { Chips, Field, Html, KeyInput, Keys, LabShell, Tog, useContent, useKeys, useLag } from '../ui.jsx';

/* ---------- ∅, {∅}, … com a caixes ---------- */
export function Caixes({ id, cfg }) {
  const { L } = useLang();
  const C = useContent();
  const { M, esc, fb, yes, no, hAst, hEval, hShow, hbox, EX2 } = C;
  const [s, set] = useSlot(id, () => ({ e: cfg.e || EX2[0], ed: cfg.e || EX2[0] }));
  useLag(s.e, s.ed, 350, (v) => set({ ed: v }));
  let out = '', ast = null, err = '';
  try { ast = hAst(s.ed); } catch (e) { err = e.message; }
  if (ast) {
    const v = hEval(ast);
    out += '<div class="lbl-s">' + L('Resultat', 'Resultado') + '</div><div class="row"><span class="m big">' + esc(hShow(ast)) + ' = ' + esc(v) + '</span></div>' +
      '<div class="hbwrap">' + hbox(v) + '<span class="small muted">' + L('cardinal', 'cardinal') + ' ' + M('|·| = ' + Z.helems(v).length) + '</span></div>';
    if (ast.o !== 'l') {
      const X = hEval(ast.a), Y = hEval(ast.b), all = Z.hcanon(Z.helems(X).concat(Z.helems(Y)));
      const rule = { '∪': L('hi és si és a X <b>o</b> a Y', 'está si está en X <b>o</b> en Y'), '∩': L('hi és si és a X <b>i</b> a Y alhora', 'está si está en X <b>y</b> en Y a la vez'), '∖': L('hi és si és a X i <b>no</b> és a Y', 'está si está en X y <b>no</b> está en Y') }[ast.o];
      out += '<div class="lbl-s">' + L('Element per element', 'Elemento a elemento') + '</div>' +
        '<p class="small">X = ' + M(X) + ', &nbsp;Y = ' + M(Y) + '. ' + L('Un element del resultat ', 'Un elemento del resultado ') + rule + '.</p>' +
        '<div class="tbl"><table class="etab"><thead><tr><th>' + L('element', 'elemento') + '</th><th>∈ X?</th><th>∈ Y?</th><th>∈ X ' + ast.o + ' Y?</th></tr></thead><tbody>' +
        (Z.helems(all).length ? Z.helems(all).map((x) => { const a = Z.hIn(x, X), b = Z.hIn(x, Y), r = Z.hIn(x, v); return '<tr><td>' + M(x) + ' &nbsp;' + hbox(x) + '</td><td>' + (a ? yes() : no()) + '</td><td>' + (b ? yes() : no()) + '</td><td>' + (r ? yes() : no()) + '</td></tr>'; }).join('')
          : '<tr><td colspan="4" class="muted">' + L('Cap dels dos conjunts té elements: el resultat és ∅.', 'Ninguno de los dos conjuntos tiene elementos: el resultado es ∅.') + '</td></tr>') + '</tbody></table></div>';
    }
    const els = Z.helems(v);
    out += '<div class="explain">' +
      '<span>' + M('∅ ∈ ' + v) + ' ' + (Z.hIn('∅', v) ? yes() : no()) + ' — ' + (Z.hIn('∅', v) ? L('la capsa buida és un dels elements.', 'la caja vacía es uno de los elementos.') : L('cap element és la capsa buida.', 'ningún elemento es la caja vacía.')) + '</span>' +
      '<span>' + M('∅ ⊆ ' + v) + ' ' + yes() + ' — ' + L('sempre: ∅ no té cap element que pugui fallar.', 'siempre: ∅ no tiene ningún elemento que pueda fallar.') + '</span>' +
      '<span>' + L('Elements', 'Elementos') + ' (' + els.length + '): ' + (els.length ? els.map(M).join(', ') : L('cap', 'ninguno')) + '</span></div>';
  }
  return (
    <LabShell title={L('Capses dins de capses: ∅, {∅}, {∅, {∅}}', 'Cajas dentro de cajas: ∅, {∅}, {∅, {∅}}')}>
      <p className="small">{L('Cada parell de claus és una capsa. ∅ és una capsa buida; {∅} és una capsa que en conté una de buida. Escriu un conjunt o una operació (∪ ∩ ∖), o tria un apartat de l\'exercici 2.', 'Cada par de llaves es una caja. ∅ es una caja vacía; {∅} es una caja que contiene una vacía. Escribe un conjunto o una operación (∪ ∩ ∖), o elige un apartado del ejercicio 2.')}</p>
      <Chips items={EX2.map((e, i) => [i, '2.' + (i + 1)])} value={EX2.indexOf(s.e)} attr="ex" onChange={(i) => set({ e: EX2[i], ed: EX2[i] })} />
      <KeyInput id={id + '-in'} value={s.e} aria-label={L('Conjunt', 'Conjunto')} syms={['∅', '{', '}', ',', '∪', '∩', '∖', '(', ')', '⌫']}
        onChange={(v) => set({ e: v })} onKey={(v) => set({ e: v, ed: v })} />
      <Html html={(err ? fb('warn', esc(err) + '. ' + L('Exemple vàlid: {∅, {∅}} ∖ {{∅}}', 'Ejemplo válido: {∅, {∅}} ∖ {{∅}}')) : '') + out} />
    </LabShell>
  );
}

/* ---------- conjunts per comprensió ---------- */
export function Compr({ id, cfg }) {
  const { L } = useLang();
  const C = useContent();
  const { M, esc, fmt, NSY, NL, stepRow, eqCands, memberWhy, IMG } = C;
  const [s, set] = useSlot(id, () => ({ mode: cfg.mode || 'eq', k: cfg.k == null ? 15 : cfg.k, U: cfg.U || 'N', f: cfg.f || 'h' }));
  let body;
  if (s.mode === 'eq') {
    const cands = eqCands(s.k), res = cands.filter((c) => memberWhy(c, s.U).ok);
    const eqTx = s.k < 0 ? 'x^{2} + ' + (-s.k) + ' = 0' : 'x^{2} = ' + s.k;
    let html = '<div class="disp">' + tx('\\{x ∈ ' + NSY[s.U] + ' | ' + eqTx + '\\}') + '</div>' +
      '<div class="steps">' +
      stepRow({ h: L('Pas 1 · Resol l\'equació sense mirar l\'univers', 'Paso 1 · Resuelve la ecuación sin mirar el universo'), m: 'x^{2} = ' + s.k + ' ⟹ x ∈ \\{' + cands.map((c) => c.t).join(', ') + '\\}', w: s.k < 0 ? L('Un quadrat de real mai és negatiu: les solucions només existeixen a ℂ.', 'Un cuadrado de real nunca es negativo: las soluciones solo existen en ℂ.') : '' }, 0) +
      stepRow({ h: L('Pas 2 · Filtra pel conjunt ', 'Paso 2 · Filtra por el conjunto ') + NSY[s.U], t: cands.map((c) => { const w = memberWhy(c, s.U); return M(c.t + (w.ok ? ' ∈ ' : ' ∉ ') + NSY[s.U]) + ' — ' + w.why; }).join('<br>') }, 1) +
      stepRow({ h: L('Resultat', 'Resultado'), m: '\\{x ∈ ' + NSY[s.U] + ' | ' + eqTx + '\\} = ' + (res.length ? '\\{' + res.map((c) => c.t).join(', ') + '\\}' : '∅'), c: 'done' }, 2) + '</div>';
    const reals = cands.filter((c) => c.re);
    if (reals.length) {
      const mx = Math.max(4, Math.ceil(Math.max(...reals.map((c) => Math.abs(c.v))) + 1)), nl = NL(-mx, mx, 640, 64);
      let g = nl.axis(mx > 8 ? 2 : 1, (v) => fmt(v, 0));
      reals.forEach((c) => { const ok = memberWhy(c, s.U).ok, x = nl.X(c.v); g += ok ? '<circle class="pt" cx="' + x + '" cy="' + nl.y0 + '" r="6"/>' : '<path class="mk" d="M' + (x - 6) + ' ' + (nl.y0 - 6) + 'l12 12M' + (x + 6) + ' ' + (nl.y0 - 6) + 'l-12 12"/>'; g += '<text class="big" x="' + x + '" y="' + (nl.y0 - 12) + '">' + esc(c.t.replace('\\sq{', '√').replace('}', '')) + '</text>'; });
      html += '<svg class="nl" viewBox="0 0 640 64" role="img" aria-label="' + L('Recta real', 'Recta real') + '">' + g + '</svg>';
    }
    body = (
      <>
        <div className="ctrl">
          <span className="lbl-s">k</span>
          <Chips wrap={false} attr="k" items={[-2, -4, 0, 4, 9, 15].map((k) => [k, k < 0 ? 'x²+' + (-k) + '=0' : 'x²=' + k])} value={s.k} onChange={(k) => set({ k })} />
          <Field sync={s} type="number" id={id + '-k'} value={s.k} min="-50" max="200" aria-label="k"
            onCommit={(t) => { const v = Math.round(+t); if (isFinite(v) && Math.abs(v) <= 400) { set({ k: v }); return true; } return false; }} />
        </div>
        <div className="ctrl">
          <span className="lbl-s">{L('univers', 'universo')}</span>
          <Chips wrap={false} attr="u" items={'NZQRC'.split('').map((u) => [u, NSY[u]])} value={s.U} onChange={(U) => set({ U })} />
        </div>
        <Html html={html} />
      </>
    );
  } else {
    const F = IMG[s.f]; const seen = []; const rows = F.dom.map((n) => { const v = F.f(n); const key = JSON.stringify(v); const dup = seen.includes(key); if (!dup) seen.push(key); return { n, v, dup }; });
    const vt = (v) => (Array.isArray(v) ? '\\fr{' + v[0] + '}{' + v[1] + '}' : String(v).replace('-', '−'));
    const head = { h: '\\{(−1)^{n} | n ∈ ℕ, ' + L('n no divisible entre 2', 'n no divisible entre 2') + '\\}', i: '\\{n^{3} | n ∈ \\{1, 2, 4, −4, −55, 0\\}\\}', j: '\\{\\fr{1}{n} | n ∈ ℕ, 3 < n < 16\\}', q: '\\{n^{2} | n ∈ \\{−2, −1, 0, 1, 2\\}\\}' }[s.f];
    const resTx = '\\{' + rows.filter((r) => !r.dup).map((r) => vt(r.v)).join(', ') + '\\}';
    const html = '<div class="disp">' + tx(head) + '</div>' +
      '<p class="small">' + L('Recorre cada valor permès de n, calcula la fórmula i apunta el resultat. Si un valor ja hi era, no s\'afegeix: un conjunt no té repeticions.', 'Recorre cada valor permitido de n, calcula la fórmula y apunta el resultado. Si un valor ya estaba, no se añade: un conjunto no tiene repeticiones.') + '</p>' +
      '<div class="tbl"><table class="etab"><thead><tr><th>n</th><th>' + L('càlcul', 'cálculo') + '</th><th>' + L('valor', 'valor') + '</th><th></th></tr></thead><tbody>' +
      rows.map((r) => '<tr><td>' + M(String(r.n).replace('-', '−')) + '</td><td>' + M(F.ft(r.n)) + '</td><td>' + M(vt(r.v)) + '</td><td class="small ' + (r.dup ? 'muted' : 'yes') + '">' + (r.dup ? L('ja hi és', 'ya está') : L('nou', 'nuevo')) + '</td></tr>').join('') +
      (F.more ? '<tr><td colspan="4" class="small muted">' + L('… i així per a tots els senars: sempre surt −1.', '… y así para todos los impares: siempre sale −1.') + '</td></tr>' : '') + '</tbody></table></div>' +
      '<div class="explain"><span>' + M(head + ' = ' + resTx) + '</span><span>' + L('Cardinal: ', 'Cardinal: ') + M(String(rows.filter((r) => !r.dup).length)) +
      (s.f === 'h' ? L('. Infinits valors de n, però un sol element.', '. Infinitos valores de n, pero un solo elemento.') : s.f === 'j' ? L('. Els n permesos són 4, 5, …, 15 (estricte: ni 3 ni 16).', '. Los n permitidos son 4, 5, …, 15 (estricto: ni 3 ni 16).') : s.f === 'q' ? L('. Cinc valors de n, però només tres resultats diferents.', '. Cinco valores de n, pero solo tres resultados distintos.') : L('. Sis valors de n i sis cubs diferents (el cub conserva el signe).', '. Seis valores de n y seis cubos distintos (el cubo conserva el signo).')) + '</span></div>';
    body = (
      <>
        <Chips attr="f" items={[['h', '1h'], ['i', '1i'], ['j', '1j'], ['q', L('repetits', 'repetidos')]]} value={s.f} onChange={(f) => set({ f })} />
        <Html html={html} />
      </>
    );
  }
  return (
    <LabShell title={L('Conjunts per comprensió, pas a pas', 'Conjuntos por comprensión, paso a paso')}>
      <Tog attr="mode" items={[['eq', L('Equació en un univers', 'Ecuación en un universo')], ['img', L('Fórmula aplicada a n', 'Fórmula aplicada a n')]]} value={s.mode} onChange={(mode) => set({ mode })} />
      {body}
    </LabShell>
  );
}

/* ---------- 𝒫(A): pertinença contra inclusió ---------- */
export function Parts({ id, cfg }) {
  const { L } = useLang();
  const C = useContent();
  const { M, md, fb, okTxt, PA, setTx, tfItems } = C;
  const [s, set] = useSlot(id, () => { const A = cfg.A || '123'; return { A, q: Z.rnd(tfItems(PA[A]).length), ans: null }; });
  const A = PA[s.A], n = A.length, subs = [];
  for (let m = 0; m < (1 << n); m++) subs.push(A.filter((_, j) => (m >> j) & 1));
  const rows = []; for (let k = 0; k <= n; k++) rows.push(subs.filter((x) => x.length === k));
  const items = tfItems(A);
  const it = items[s.q] || items[0];
  const tf = (v) => {
    if (v === 'n') { let q; do { q = Z.rnd(items.length); } while (items.length > 1 && q === s.q); set({ q, ans: null }); }
    else if (s.ans == null) set({ ans: v === '1' });
  };
  return (
    <LabShell title={L('𝒫(A): els elements són conjunts', '𝒫(A): los elementos son conjuntos')}>
      <div className="ctrl">
        <span className="lbl-s">A =</span>
        <Chips wrap={false} attr="a" items={Object.keys(PA).map((k) => [k, M(setTx(PA[k]))])} value={s.A} onChange={(k) => set({ A: k, q: Z.rnd(tfItems(PA[k]).length), ans: null })} />
      </div>
      <div className="lab-split">
        <Html html={'<div class="stack" style="gap:8px">' +
          rows.map((r, k) => '<div class="hrow"><span class="lbl small">' + k + ' ' + L('elem.', 'elem.') + ' (' + r.length + ')</span><div class="row">' + r.map((x) => '<span class="chip">' + M(setTx(x)) + '</span>').join('') + '</div></div>').join('') +
          '<p class="small">' + M('𝒫(' + setTx(A) + ')') + ' ' + L('té', 'tiene') + ' ' + M('2^{' + n + '} = ' + (1 << n)) + ' ' + L('elements. Cada subconjunt es fa decidint, per a cada element d\'A, si hi és o no: dues opcions per element.', 'elementos. Cada subconjunto se hace decidiendo, para cada elemento de A, si está o no: dos opciones por elemento.') + '</p></div>'} />
        <div className="stack p-g10">
          <div className="lbl-s">{L('Cert o fals?', '¿Cierto o falso?')}</div>
          <Rich className="disp" html={tx(it.s)} />
          <div className="row">
            <button type="button" className="btn" data-tf="1" onClick={() => tf('1')}>{L('Cert', 'Cierto')}</button>
            <button type="button" className="btn" data-tf="0" onClick={() => tf('0')}>{L('Fals', 'Falso')}</button>
            <button type="button" className="btn ghost" data-tf="n" onClick={() => tf('n')}>{L('Una altra', 'Otra')}</button>
          </div>
          <Html html={s.ans == null ? '' : fb(s.ans === it.v ? 'ok' : 'bad', okTxt(s.ans === it.v) + L('És ', 'Es ') + (it.v ? L('cert', 'cierto') : L('fals', 'falso')) + ': ' + md(it.why))} />
          <p className="tiny muted">{L('Regla: ∈ mira dins la llista d\'elements; ⊆ comprova que cada element de l\'esquerra és a la dreta.', 'Regla: ∈ mira dentro de la lista de elementos; ⊆ comprueba que cada elemento de la izquierda está a la derecha.')}</p>
        </div>
      </div>
    </LabShell>
  );
}

/* ---------- Venn ---------- */
const regList = (m, k) => { const a = []; for (let r = 0; r < (1 << k); r++) if ((m >> r) & 1) a.push(r); return a.length ? a.join(', ') : '—'; };
export function Venn({ id, cfg }) {
  const { L } = useLang();
  const C = useContent();
  const { M, esc, fb, vennSVG, sParse, subsOf, inR, regBits, whyNode, regionAt, svgPoint, VPRE } = C;
  const init = () => { const e1 = cfg.e1 || 'A∩(B∪C)', e2 = cfg.e2 == null ? '(A∩B)∪(A∩C)' : cfg.e2; return { e1, e2, d1: e1, d2: e2, sel: null, sub: null, nums: true, focus: 'e1' }; };
  const [s, set] = useSlot(id, init);
  useLag(s.e1 + '\u0000' + s.e2, s.d1 + '\u0000' + s.d2, 450, () => set({ d1: s.e1, d2: s.e2 }));
  const r1 = useRef(null), r2 = useRef(null);
  const focus = s.focus || 'e1';
  const insert = useKeys(focus === 'e1' ? r1 : r2, s[focus], (v) => set({ [focus]: v, ['d' + focus[1]]: v, sub: null }));
  let n1 = null, n2 = null, err = '';
  try { n1 = sParse(s.d1); } catch { err = L('No entenc l\'expressió de l\'esquerra.', 'No entiendo la expresión de la izquierda.'); }
  if (s.d2.trim()) { try { n2 = sParse(s.d2); } catch { err = L('No entenc l\'expressió de la dreta.', 'No entiendo la expresión de la derecha.'); } }
  const k = Math.max(2, Z.nvars(...[n1, n2].filter(Boolean)));
  const m1 = n1 ? Z.smask(n1, k) : 0, m2 = n2 ? Z.smask(n2, k) : 0;
  const subMask = s.sub != null ? (() => { try { return Z.smask(sParse(s.sub), k); } catch { return null; } })() : null;
  let venns = '', cmp = '', follow = '', subs = null;
  if (n1) {
    const big = (n, m, lab) => '<div class="stack" style="gap:6px;align-items:center"><span class="m">' + tx(Z.disp(n)) + '</span>' + vennSVG(k, m, { nums: s.nums, sel: s.sel, hit: true, label: lab }) + '</div>';
    venns = '<div class="' + (n2 ? 'lab-split' : '') + '" data-venns>' + big(n1, subMask != null && !n2 ? subMask : m1, 'L') + (n2 ? big(n2, m2, 'R') : '') + '</div>';
    if (n2) {
      if (m1 === m2) cmp = fb('ok', '<b>' + L('Mateixes regions', 'Mismas regiones') + '.</b> ' + L('Les dues expressions pinten exactament les mateixes zones, per tant la igualtat és certa per a qualsevol A, B, C. A l\'examen això no és una demostració: cal escriure la doble inclusió o la cadena de lleis.', 'Las dos expresiones pintan exactamente las mismas zonas, por tanto la igualdad es cierta para cualquier A, B, C. En el examen esto no es una demostración: hay que escribir la doble inclusión o la cadena de leyes.'));
      else {
        const d = m1 ^ m2, regs = []; for (let r = 0; r < (1 << k); r++) if ((d >> r) & 1) regs.push(r);
        const r0 = regs[0], bits = regBits(r0, k), inL = (m1 >> r0) & 1;
        const ex = 'Ω = \\{x\\}, ' + 'ABC'.slice(0, k).split('').map((v, j) => v + ' = ' + (((r0 >> (k - 1 - j)) & 1) ? '\\{x\\}' : '∅')).join(', ');
        cmp = fb('bad', '<b>' + L('No són iguals', 'No son iguales') + '.</b> ' + L('Difereixen a la regió ', 'Difieren en la región ') + regs.join(', ') + '. ' + L('A la regió ', 'En la región ') + r0 + ' (' + M(bits.join(', ')) + ') ' + L('l\'element és a ', 'el elemento está en ') + (inL ? L('l\'esquerra i no a la dreta', 'la izquierda y no en la derecha') : L('la dreta i no a l\'esquerra', 'la derecha y no en la izquierda')) + '. ' + L('Contraexemple: ', 'Contraejemplo: ') + M(ex) + '.');
      }
    }
    /* segueix un element */
    const r = s.sel;
    follow = '<div class="lbl-s">' + L('Segueix un element', 'Sigue un elemento') + '</div>';
    if (r == null) follow += '<p class="small muted">' + L('Toca una zona del diagrama (o un número de regió) per veure, pas a pas, si un element d\'aquella zona és a cada subexpressió. Aquest és el raonament de la doble inclusió.', 'Toca una zona del diagrama (o un número de región) para ver, paso a paso, si un elemento de esa zona está en cada subexpresión. Este es el razonamiento de la doble inclusión.') + '</p>';
    else {
      const lines = [n1, n2].filter(Boolean).map((n) => subsOf(n).map((x) => '<div class="st' + (x === n ? ' goal' : '') + '"><span class="n">' + (inR(x, r, k) ? '∈' : '∉') + '</span><div class="body"><span>' + whyNode(x, r, k) + '</span></div></div>').join(''));
      follow += '<div class="small">' + L('Regió ', 'Región ') + '<b>' + r + '</b>: ' + M(regBits(r, k).join(', ')) + '</div>' +
        '<div class="' + (n2 ? 'lab-split' : '') + '">' + lines.map((h) => '<div class="steps">' + h + '</div>').join('') + '</div>';
    }
    /* subexpressions */
    if (!n2) {
      subs = (
        <>
          <div className="lbl-s">{L('Construcció per parts', 'Construcción por partes')}</div>
          <div className="sub-list">
            {subsOf(n1).map((x) => {
              const d = Z.disp(x), key = Z.sstr(x);
              return (
                <button key={key} type="button" className="sub-row" data-sub={key} aria-pressed={s.sub === key} onClick={() => set({ sub: s.sub === key ? null : key })}>
                  <Html as="span" html={vennSVG(k, Z.smask(x, k), { mini: true, label: d }) + '<span class="m">' + tx(d) + '</span><span class="tiny muted">' + L('regions ', 'regiones ') + regList(Z.smask(x, k), k) + '</span>'} />
                </button>
              );
            })}
          </div>
        </>
      );
    }
  }
  // clic a una zona del diagrama: la regió del punt (coordenades de l'SVG)
  const onVenn = (ev) => {
    const sv = ev.target.closest && ev.target.closest('svg.venn.hit'); if (!sv) return;
    const p = svgPoint(sv, ev); if (p.x < 5 || p.x > 295 || p.y < 5 || p.y > 240) return;
    const r = regionAt(k, p.x, p.y); set({ sel: s.sel === r ? null : r });
  };
  const live = (key) => (v) => set({ [key]: v, sub: null });
  const pre = VPRE.findIndex((p) => s.e1 === p[1] && s.e2 === p[2]);
  return (
    <LabShell title={L('Diagrama de Venn amb expressions', 'Diagrama de Venn con expresiones')}>
      <Chips attr="pre" items={VPRE.map((p, i) => [i, p[0] === 'Absorció' ? L('Absorció', 'Absorción') : p[0] === '?' || p[0] === '??' ? L('Trampa ', 'Trampa ') + p[0].length : p[0]])} value={pre}
        onChange={(i) => { const p = VPRE[i]; set({ e1: p[1], e2: p[2], d1: p[1], d2: p[2], sel: null, sub: null }); }} />
      <div className="lab-split">
        <div className="stack p-g6"><label className="small" htmlFor={id + '-e1'}>{L('Esquerra', 'Izquierda')}</label>
          <input ref={r1} type="text" id={id + '-e1'} value={s.e1} spellCheck="false" autoComplete="off" onChange={(e) => live('e1')(e.target.value)} onFocus={() => set({ focus: 'e1' })} /></div>
        <div className="stack p-g6"><label className="small" htmlFor={id + '-e2'}>{L('Dreta (opcional, per comparar)', 'Derecha (opcional, para comparar)')}</label>
          <input ref={r2} type="text" id={id + '-e2'} value={s.e2} spellCheck="false" autoComplete="off" onChange={(e) => live('e2')(e.target.value)} onFocus={() => set({ focus: 'e2' })} /></div>
      </div>
      <div className="row">
        <Keys syms={['A', 'B', 'C', 'Ω', '∅', '∪', '∩', '∖', 'ᶜ', '(', ')', '⌫']} onKey={insert} htmlFor={id + '-' + focus} />
        <button type="button" className="btn ghost" data-swap="" onClick={() => { const f = focus === 'e1' ? 'e2' : 'e1'; set({ focus: f }); (f === 'e1' ? r1 : r2).current?.focus(); }}>{focus === 'e1' ? L('Teclat → dreta', 'Teclado → derecha') : L('Teclat → esquerra', 'Teclado → izquierda')}</button>
      </div>
      <Html html={'<p class="tiny muted">' + L('ᶜ és el complementari: Aᶜ = ', 'ᶜ es el complementario: Aᶜ = ') + M('\\ov{A}') + L(' i (A∪B)ᶜ = ', ' y (A∪B)ᶜ = ') + M('\\ov{A ∪ B}') + '. ' + L('Fes servir parèntesis: ∖ i ∪ tenen la mateixa prioritat.', 'Usa paréntesis: ∖ y ∪ tienen la misma prioridad.') + '</p>' + (err ? fb('warn', esc(err)) : '')} />
      {n1 && <div className="rc" onClick={onVenn}><Html html={venns} /></div>}
      <Html html={cmp + follow} />
      {subs}
    </LabShell>
  );
}

/* ---------- particions ---------- */
export function Particio({ id }) {
  const { L } = useLang();
  const C = useContent();
  const { M, fb, setTx, PPRE } = C;
  const [s, set] = useSlot(id, () => ({ rows: JSON.parse(JSON.stringify(PPRE[0][1])) }));
  const A = Z.range(1, 10), used = s.rows.map((r, i) => [r, i]).filter(([r]) => r.length);
  const cnt = A.map((x) => s.rows.filter((r) => r.includes(x)).length);
  const over = A.filter((x, i) => cnt[i] > 1), miss = A.filter((x, i) => cnt[i] === 0);
  const ok = !over.length && !miss.length;
  const Ctx = '\\{' + used.map(([r]) => setTx(r.slice().sort((a, b) => a - b))).join(', ') + '\\}';
  const toggle = (i, x) => set({ rows: s.rows.map((r, j) => (j !== i ? r : r.includes(x) ? r.filter((y) => y !== x) : r.concat(x))) });
  const names = { ok: L('exemple vàlid', 'ejemplo válido'), solap: L('se solapen', 'se solapan'), falta: L('no cobreix', 'no cubre'), par: L('parells / senars', 'pares / impares'), mod3: L('residu mòdul 3', 'resto módulo 3') };
  return (
    <LabShell title={L('Particions: trossos que no se solapen i ho cobreixen tot', 'Particiones: trozos que no se solapan y lo cubren todo')}>
      <div className="ctrl">{PPRE.map((p, i) => <button key={i} type="button" className="chipbtn" data-pp={i} onClick={() => set({ rows: JSON.parse(JSON.stringify(p[1])) })}>{names[p[0]]}</button>)}</div>
      <p className="small">{L('A = {1, …, 10}. Toca les caselles per decidir quins elements van a cada tros.', 'A = {1, …, 10}. Toca las casillas para decidir qué elementos van a cada trozo.')}</p>
      <div className="tbl p-b0"><table className="grid-x">
        <thead><tr><th></th>{A.map((x, i) => <th key={x} className={cnt[i] !== 1 ? 'no' : ''}>{x}</th>)}</tr></thead>
        <tbody>
          {s.rows.map((r, i) => (
            <tr key={i}><Rich as="th" html={M('C_{' + (i + 1) + '}')} />
              {A.map((x) => <td key={x}><button type="button" className="mxb p-w34" data-on={r.includes(x) ? 1 : 0} data-r={i} data-x={x} aria-label={'C' + (i + 1) + ' ' + x} onClick={() => toggle(i, x)}>{r.includes(x) ? '●' : ''}</button></td>)}
            </tr>
          ))}
          <tr><th className="tiny muted">{L('vegades', 'veces')}</th>{cnt.map((c, i) => <td key={i} className="tiny p-tc"><span className={c === 1 ? 'yes' : 'no'}>{c}</span></td>)}</tr>
        </tbody>
      </table></div>
      <Html html={'<div class="m">C = ' + tx(Ctx) + '</div>' +
        '<div class="props">' +
        '<div class="prow"><b>(1) ' + M('C_{i} ∩ C_{j} = ∅') + '</b><span class="why">' + (over.length ? '<span class="no">✗</span> ' + L('Es repeteix: ', 'Se repite: ') + over.map((x) => M(String(x)) + ' (' + s.rows.map((r, i) => (r.includes(x) ? 'C' + (i + 1) : '')).filter(Boolean).join(L(' i ', ' y ')) + ')').join(', ') : '<span class="yes">✓</span> ' + L('cap element és a dos trossos', 'ningún elemento está en dos trozos')) + '</span></div>' +
        '<div class="prow"><b>(2) ' + M('⋃ C_{i} = A') + '</b><span class="why">' + (miss.length ? '<span class="no">✗</span> ' + L('Falten: ', 'Faltan: ') + M(miss.join(', ')) : '<span class="yes">✓</span> ' + L('tots els elements són en algun tros', 'todos los elementos están en algún trozo')) + '</span></div></div>' +
        fb(ok ? 'ok' : 'bad', ok ? '<b>' + L('És una partició d\'A.', 'Es una partición de A.') + '</b> ' + L('Cada element és exactament a un tros (la fila «vegades» és tota d\'uns).', 'Cada elemento está exactamente en un trozo (la fila «veces» es toda de unos).') : '<b>' + L('No és una partició.', 'No es una partición.') + '</b> ' + L('Perquè ho sigui, cada columna ha de tenir exactament un punt.', 'Para que lo sea, cada columna tiene que tener exactamente un punto.'))} />
    </LabShell>
  );
}

/* ---------- producte cartesià ---------- */
const U1 = [1, 2, 3, 4], U2 = ['x', 'y', 'z'];
export function Producte({ id }) {
  const { L } = useLang();
  const C = useContent();
  const { M, yes, no, setTx } = C;
  const [s, set] = useSlot(id, () => ({ A: [1, 2, 3], B: [2, 4], C: ['x', 'y'], view: 'cmp', cell: null }));
  const inA = (a) => s.A.includes(a), inB = (a) => s.B.includes(a), inC = (c) => s.C.includes(c);
  const L1 = (a, c) => inA(a) && !inB(a) && inC(c), R1 = (a, c) => (inA(a) && inC(c)) && !(inB(a) && inC(c));
  const V = { AC: (a, c) => inA(a) && inC(c), BC: (a, c) => inB(a) && inC(c), L: L1, R: R1, cmp: L1 };
  const f = V[s.view];
  const tog = (k, U) => (
    <div className="ctrl"><span className="lbl-s p-mw24">{k}</span>
      {U.map((v) => <button key={v} type="button" className="chipbtn" data-t={k} data-v={v} aria-pressed={s[k].includes(v)}
        onClick={() => set({ [k]: s[k].includes(v) ? s[k].filter((x) => x !== v) : s[k].concat(v) })}>{v}</button>)}
    </div>
  );
  const sorted = (arr) => arr.slice().sort();
  let detail = '';
  if (s.cell) {
    const [a, c] = s.cell, A_ = inA(a), B_ = inB(a), C_ = inC(c);
    detail = '<div class="explain"><b>' + M('(' + a + ', ' + c + ')') + '</b>' +
      '<span>' + M(a + (A_ ? ' ∈ ' : ' ∉ ') + 'A, ' + a + (B_ ? ' ∈ ' : ' ∉ ') + 'B, ' + c + (C_ ? ' ∈ ' : ' ∉ ') + 'C') + '</span>' +
      '<span>' + L('Esquerra: ', 'Izquierda: ') + M('(' + a + ', ' + c + ') ∈ (A ∖ B) × C ⟺ ' + a + ' ∈ A ∖ B ' + L('i', 'y') + ' ' + c + ' ∈ C') + ' → ' + (L1(a, c) ? yes() : no()) + '</span>' +
      '<span>' + L('Dreta: ', 'Derecha: ') + M('(' + a + ', ' + c + ') ∈ A × C ' + L('i', 'y') + ' (' + a + ', ' + c + ') ∉ B × C') + ' → ' + (R1(a, c) ? yes() : no()) + '</span>' +
      (C_ && inA(a) ? '<span class="small">' + L('Com que ', 'Como ') + M(c + ' ∈ C') + L(', «no ser a B × C» només pot fallar per la primera coordenada: ', ', «no estar en B × C» solo puede fallar por la primera coordenada: ') + M('(' + a + ', ' + c + ') ∉ B × C ⟺ ' + a + ' ∉ B') + '. ' + L('Aquest és el pas clau de la demostració.', 'Este es el paso clave de la demostración.') + '</span>' : '') + '</div>';
  }
  return (
    <LabShell title={L('Producte cartesià en una graella', 'Producto cartesiano en una cuadrícula')}>
      <div className="lab-split">
        <div className="stack p-g6">{tog('A', U1)}{tog('B', U1)}{tog('C', U2)}
          <Rich className="small muted" html={M('A = ' + setTx(sorted(s.A)) + ', B = ' + setTx(sorted(s.B)) + ', C = ' + setTx(sorted(s.C)))} /></div>
        <div className="stack p-g6"><span className="lbl-s">{L('Mostra', 'Muestra')}</span>
          <Chips attr="view" items={[['AC', 'A × C'], ['BC', 'B × C'], ['L', '(A ∖ B) × C'], ['R', '(A × C) ∖ (B × C)'], ['cmp', L('les dues', 'las dos')]]} value={s.view} onChange={(view) => set({ view })} /></div>
      </div>
      <div className="tbl p-b0"><table className="grid-x">
        <thead><tr><th></th>{U2.map((c) => <th key={c}>{c}{inC(c) ? null : <span className="tiny muted"> ∉C</span>}</th>)}</tr></thead>
        <tbody>{U1.map((a) => (
          <tr key={a}><th>{a}</th>{U2.map((c) => {
            const on = f(a, c), on2 = s.view === 'cmp' && R1(a, c), sel = s.cell && s.cell[0] === a && s.cell[1] === c;
            return <td key={c}><button type="button" className={'gx' + (on ? ' on' : '') + (on2 ? ' on2' : '') + (sel ? ' sel' : '')} data-a={a} data-c={c} onClick={() => set({ cell: [a, c] })}>({a},{c})</button></td>;
          })}</tr>
        ))}</tbody>
      </table></div>
      <Html html={(s.view === 'cmp' ? '<p class="small">' + L('Fons pintat: ', 'Fondo pintado: ') + M('(A ∖ B) × C') + '. ' + L('Barra inferior: ', 'Barra inferior: ') + M('(A × C) ∖ (B × C)') + '. ' + L('Canvia A, B i C: sempre coincideixen.', 'Cambia A, B y C: siempre coinciden.') + '</p>' : '') +
        '<p class="small">' + M('|A × C| = |A| · |C| = ' + s.A.length + ' · ' + s.C.length + ' = ' + s.A.length * s.C.length) + '. ' + L('Toca una casella per veure el raonament per a aquell parell.', 'Toca una casilla para ver el razonamiento para ese par.') + '</p>' + detail} />
    </LabShell>
  );
}
