/**
 * Pràctica ràpida de Matemàtiques (tipus mprac): els deu exercicis curts de la pestanya
 * «Pràctica» d'abans, amb la mateixa correcció. L'exercici surt de la llavor (prGen amb bkSeeded):
 * en canviar d'idioma és el mateix. La resposta és { a, sel, ans }.
 */
import { useState } from 'react';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { K } from '../../_kit/strings.js';
import { rngOf } from '../../_kit/bank.js';
import { Z, tx } from '../engine/z.js';
import { getContent } from '../content/index.js';
import { Html, KeyInput } from '../ui.jsx';

const genLang = (ui) => (ui === 'ca' ? 'ca' : 'es');
const qOf = (C, ex) => C.bkSeeded(ex.seed, () => C.prGen(ex.k));
const ordOf = (ex) => rngOf(ex.seed).shuffle([0, 1, 2]);
const empty = (k) => ({ a: null, sel: k === 'comp' ? [] : k === 'venn' ? 0 : null, ans: {} });

/** Opcions de l'exercici d'inducció: [línies, la bona]. */
function indOpts(q) {
  const st_ = q.st_, goal = st_.find((x) => x.c === 'goal'), hi = st_.find((x) => x.c === 'hi');
  return q.ask === 'goal' ? [[goal.m, st_[1].m, st_[0].m], goal.m] : [[hi.m, goal.m, st_[0].m], hi.m];
}

/** La correcció de l'original (botó «Comprova»). */
function isOk(C, ex, q, v) {
  const { memberWhy, sParse, relAnalyse, argSteps } = C;
  const a = v.a, k = ex.k;
  if (k === 'comp') { const good = q.cands.filter((c) => memberWhy(c, q.U).ok).map((c) => c.t); return q.cands.every((c, i) => good.includes(c.t) === v.sel.includes(i)); }
  if (k === 'buit') { try { return Z.hparse(a || '') === q.ans; } catch { return false; } }
  if (k === 'venn') return v.sel === q.m;
  if (k === 'ident') { const nl = sParse(q.l), nr = sParse(q.r), n = Math.max(2, Z.nvars(nl, nr)); return a === (Z.smask(nl, n) === Z.smask(nr, n)); }
  if (k === 'rel') { const an = relAnalyse([1, 2, 3], (x, y) => q.G.includes(x + ',' + y)); return v.ans.r === (an.refl === true) && v.ans.s === (an.sym === true) && v.ans.as === (an.asym === true) && v.ans.t === (an.trans === true); }
  if (k === 'mod') return a !== '' && a != null && +a === Z.mod(q.a, q.n);
  if (k === 'hasse') { const h = Z.hasse(q.E, (x, y) => y % x === 0); return !!a && +a.e === h.cover.length && (a.o === 't') === h.total; }
  if (k === 'num') return a === q.it.k;
  if (k === 'cx') {
    const A = argSteps(q.z), x = Z.tryEval(String(a || '').replace(/,/g, '.').replace(/arctan/g, 'atan')), t = q.f === 'mod' ? A.mod : A.al;
    if (!x || Math.abs(x.im) > 1e-9) return false;
    return q.f === 'mod' ? Math.abs(x.re - t) < 0.01 : [0, 2 * Math.PI, -2 * Math.PI].some((d) => Math.abs(x.re - t - d) < 0.01);
  }
  if (k === 'ind') { const [opts, good] = indOpts(q); return a != null && opts[a] === good; }
  return false;
}
const answered = (k, v) => (k === 'comp' || k === 'venn' ? true : k === 'rel' ? ['r', 's', 'as', 't'].every((p) => v.ans[p] != null) : k === 'hasse' ? !!v.a && v.a.e != null && v.a.e !== '' && !!v.a.o : v.a != null && v.a !== '');

/** Enunciat, controls i correcció explicada (HTML de l'original). */
function Prac({ ex, value, onChange, disabled, onCheck }) {
  const { ui } = useLang();
  const S = K[ui];
  const C = getContent(genLang(ui));
  const { L, M, md, fb, okTxt, NSY, memberWhy, vennSVG, sParse, regionAt, svgPoint, regBits, relAnalyse, relGraph, hasseSVG, argSteps, zTx, stepRow, IND } = C;
  const q = qOf(C, ex);
  const v = { ...empty(ex.k), ...(value || {}) };
  const [done, setDone] = useState(false);
  const set = (patch) => { if (!done && !disabled) onChange({ ...v, ...patch }); };
  const setA = (a) => set({ a });
  const check = () => { if (!answered(ex.k, v)) return; const ok = isOk(C, ex, q, v); setDone(true); onCheck?.(ok); };
  const again = () => { setDone(false); onChange(empty(ex.k)); };
  const a = v.a;
  let body = null, res = '';
  const ok = done ? isOk(C, ex, q, v) : null;
  if (ex.k === 'comp') {
    const eqTx = q.kk < 0 ? 'x^{2} + ' + (-q.kk) + ' = 0' : 'x^{2} = ' + q.kk;
    const good = q.cands.filter((c) => memberWhy(c, q.U).ok).map((c) => c.t);
    body = (
      <>
        <p>{L('Tria els elements del conjunt (si no en tria cap, és ∅):', 'Elige los elementos del conjunto (si no eliges ninguno, es ∅):')}</p>
        <Rich className="disp" html={tx('\\{x ∈ ' + NSY[q.U] + ' | ' + eqTx + '\\}')} />
        <div className="ctrl">{q.cands.map((c, i) => (
          <button key={i} type="button" className={'pick' + (done ? (good.includes(c.t) ? (v.sel.includes(i) ? ' ok' : ' miss') : (v.sel.includes(i) ? ' bad' : '')) : '')} data-c={i} aria-pressed={v.sel.includes(i)}
            onClick={() => set({ sel: v.sel.includes(i) ? v.sel.filter((x) => x !== i) : v.sel.concat(i) })}><Html as="span" html={M(c.t)} /></button>
        ))}</div>
      </>
    );
    if (done) res = fb(ok ? 'ok' : 'bad', okTxt(ok) + M('= ' + (good.length ? '\\{' + good.join(', ') + '\\}' : '∅')) + '. ' + q.cands.map((c) => { const w = memberWhy(c, q.U); return M(c.t + (w.ok ? ' ∈ ' : ' ∉ ') + NSY[q.U]) + ': ' + w.why; }).join('; ') + '.');
  } else if (ex.k === 'buit') {
    body = (
      <>
        <p>{L('Calcula i escriu el resultat:', 'Calcula y escribe el resultado:')}</p>
        <Rich className="disp" html={tx(q.x + ' ' + q.o + ' ' + q.y)} />
        <KeyInput id={'pr-in-' + ex.seed} className="am-input" value={a || ''} onChange={setA} disabled={done} syms={['∅', '{', '}', ',', '⌫']} onEnter={() => { if (!done) check(); }} />
      </>
    );
    if (done) res = fb(ok ? 'ok' : 'bad', okTxt(ok) + L('Resultat: ', 'Resultado: ') + M(q.ans) + '. ' + L('Elements de l\'esquerra: ', 'Elementos de la izquierda: ') + M(Z.helems(q.x).join(', ') || '—') + '; ' + L('de la dreta: ', 'de la derecha: ') + M(Z.helems(q.y).join(', ') || '—') + '.');
  } else if (ex.k === 'venn') {
    const n = sParse(q.e);
    const onVenn = (ev) => {
      if (done) return;
      const sv = ev.target.closest && ev.target.closest('svg'); if (!sv) return;
      const p = svgPoint(sv, ev); if (p.x < 5 || p.x > 295 || p.y < 5 || p.y > 240) return;
      set({ sel: v.sel ^ (1 << regionAt(3, p.x, p.y)) });
    };
    body = (
      <>
        <Rich as="p" html={L('Toca les zones que formen ', 'Toca las zonas que forman ') + M(Z.disp(n)) + '.'} />
        <Rich className="pr-venn" onClick={onVenn} html={vennSVG(3, v.sel, { hit: true, nums: true })} />
      </>
    );
    if (done) res = fb(ok ? 'ok' : 'bad', okTxt(ok) + (ok ? '' : L('Així és la correcta:', 'Así es la correcta:'))) + (ok ? '' : vennSVG(3, q.m, { nums: true }));
  } else if (ex.k === 'ident') {
    const nl = sParse(q.l), nr = sParse(q.r), n = Math.max(2, Z.nvars(nl, nr)), truth = Z.smask(nl, n) === Z.smask(nr, n);
    body = (
      <>
        <p>{L('És certa per a tots els conjunts A, B, C?', '¿Es cierta para todos los conjuntos A, B, C?')}</p>
        <Rich className="disp" html={tx(Z.disp(nl) + ' = ' + Z.disp(nr))} />
        <div className="row">
          <button type="button" className={'am-btn ' + (a === true ? 'am-btn-primary' : 'am-btn-secondary')} data-tf="1" aria-pressed={a === true} onClick={() => setA(true)}>{L('Certa', 'Cierta')}</button>
          <button type="button" className={'am-btn ' + (a === false ? 'am-btn-primary' : 'am-btn-secondary')} data-tf="0" aria-pressed={a === false} onClick={() => setA(false)}>{L('Falsa', 'Falsa')}</button>
        </div>
      </>
    );
    if (done) {
      let extra;
      if (!truth) { const d = Z.smask(nl, n) ^ Z.smask(nr, n); let r0 = 0; while (!((d >> r0) & 1)) r0++; extra = L(' Contraexemple: un element amb ', ' Contraejemplo: un elemento con ') + M(regBits(r0, n).join(', ')) + L(' és a un costat però no a l\'altre.', ' está en un lado pero no en el otro.'); }
      else extra = L(' Les dues bandes pinten les mateixes zones; a l\'examen ho demostraries per doble inclusió.', ' Los dos lados pintan las mismas zonas; en el examen lo demostrarías por doble inclusión.');
      res = fb(ok ? 'ok' : 'bad', okTxt(ok) + L('És ', 'Es ') + (truth ? L('certa', 'cierta') : L('falsa', 'falsa')) + '.' + extra) + '<div class="lab-split">' + vennSVG(n, Z.smask(nl, n), { nums: true }) + vennSVG(n, Z.smask(nr, n), { nums: true }) + '</div>';
    }
  } else if (ex.k === 'rel') {
    const E = [1, 2, 3], R = (x, y) => q.G.includes(x + ',' + y), an = relAnalyse(E, R);
    const truth = { r: an.refl === true, s: an.sym === true, as: an.asym === true, t: an.trans === true };
    const names = { r: L('Reflexiva', 'Reflexiva'), s: L('Simètrica', 'Simétrica'), as: L('Antisimètrica', 'Antisimétrica'), t: L('Transitiva', 'Transitiva') };
    const ce = { r: () => '(' + an.refl[0] + ',' + an.refl[0] + ') ∉ G', s: () => '(' + an.sym.join(',') + ') ∈ G, (' + an.sym[1] + ',' + an.sym[0] + ') ∉ G', as: () => '(' + an.asym.join(',') + '), (' + an.asym[1] + ',' + an.asym[0] + ') ∈ G', t: () => '(' + an.trans[0] + ',' + an.trans[1] + '), (' + an.trans[1] + ',' + an.trans[2] + ') ∈ G, (' + an.trans[0] + ',' + an.trans[2] + ') ∉ G' };
    body = (
      <>
        <Rich as="p" html={L('Relació a A = {1, 2, 3}: ', 'Relación en A = {1, 2, 3}: ') + M('G(ℛ) = \\{' + q.G.slice().sort().map((x) => '(' + x + ')').join(', ') + '\\}')} />
        <div className="lab-split">
          <Rich html={relGraph(E, R, null)} />
          <div className="props">{Object.keys(names).map((p) => (
            <div key={p} className="prow"><b>{names[p]}</b>
              <div className={'tog' + (done ? (v.ans[p] === truth[p] ? ' ok' : ' bad') : '')} role="group">
                <button type="button" data-p={p} data-v="1" aria-pressed={v.ans[p] === true} onClick={() => set({ ans: { ...v.ans, [p]: true } })}>{L('Sí', 'Sí')}</button>
                <button type="button" data-p={p} data-v="0" aria-pressed={v.ans[p] === false} onClick={() => set({ ans: { ...v.ans, [p]: false } })}>No</button>
              </div>
            </div>
          ))}</div>
        </div>
      </>
    );
    if (done) res = fb(ok ? 'ok' : 'bad', okTxt(ok) + Object.keys(names).map((p) => '<b>' + names[p] + '</b>: ' + (truth[p] ? L('sí', 'sí') : L('no', 'no') + ' (' + M(ce[p]()) + ')')).join(' · '));
  } else if (ex.k === 'mod') {
    const r = Z.mod(q.a, q.n), qq = (q.a - r) / q.n, ng = (x) => String(x).replace('-', '−');
    body = (
      <>
        <Rich as="p" html={L('A ℤ amb la congruència mòdul ', 'En ℤ con la congruencia módulo ') + q.n + L(': a quina classe [r], amb 0 ≤ r < ', ': ¿a qué clase [r], con 0 ≤ r < ') + q.n + L(', pertany ', ', pertenece ') + M(ng(q.a)) + '?'} />
        <div className="ctrl"><span className="m">[</span><input className="sm am-input" type="number" value={a == null ? '' : a} aria-label="r" disabled={done} onChange={(e) => setA(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && !done) check(); }} /><span className="m">]</span></div>
      </>
    );
    if (done) res = fb(ok ? 'ok' : 'bad', okTxt(ok) + M(ng(q.a) + ' = ' + q.n + ' · (' + ng(qq) + ') + ' + r) + L(', per tant ', ', por tanto ') + M(ng(q.a) + ' ∈ [' + r + '] = \\{…, ' + [r - q.n, r, r + q.n, r + 2 * q.n].map(ng).join(', ') + ', …\\}') + '.');
  } else if (ex.k === 'hasse') {
    const h = Z.hasse(q.E, (x, y) => y % x === 0);
    const A = a || {};
    body = (
      <>
        <Rich as="p" html={L('Divisors de ', 'Divisores de ') + q.n + L(' ordenats per la divisibilitat: ', ' ordenados por la divisibilidad: ') + M('\\{' + q.E.join(', ') + '\\}') + '.'} />
        <div className="ctrl"><label>{L('Quantes fletxes té el diagrama de Hasse?', '¿Cuántas flechas tiene el diagrama de Hasse?')} <input className="sm am-input" type="number" value={A.e != null ? A.e : ''} disabled={done} onChange={(e) => setA({ ...A, e: e.target.value })} /></label></div>
        <div className="ctrl"><span className="small">{L('L\'ordre és…', 'El orden es…')}</span>
          <div className="tog" role="group">
            <button type="button" data-o="t" aria-pressed={A.o === 't'} onClick={() => setA({ ...A, o: 't' })}>total</button>
            <button type="button" data-o="p" aria-pressed={A.o === 'p'} onClick={() => setA({ ...A, o: 'p' })}>{L('parcial', 'parcial')}</button>
          </div>
        </div>
      </>
    );
    if (done) res = fb(ok ? 'ok' : 'bad', okTxt(ok) + h.cover.length + L(' fletxes; ', ' flechas; ') + (h.total ? L('total (una cadena).', 'total (una cadena).') : L('parcial: ', 'parcial: ') + M(h.inc[0] + ' ∤ ' + h.inc[1]) + L(' i ', ' y ') + M(h.inc[1] + ' ∤ ' + h.inc[0]) + '.')) + hasseSVG({ E: q.E, leq: (x, y) => y % x === 0, lab: String, key: (x) => x }, 'hasse', []).svg;
  } else if (ex.k === 'num') {
    const opts = [['N', 'ℕ'], ['Z', L('ℤ (no ℕ)', 'ℤ (no ℕ)')], ['Q', L('ℚ (no ℤ)', 'ℚ (no ℤ)')], ['I', 'ℝ ∖ ℚ'], ['C', 'ℂ ∖ ℝ']];
    body = (
      <>
        <p>{L('Quin és el conjunt més petit que conté aquest nombre?', '¿Cuál es el conjunto más pequeño que contiene este número?')}</p>
        <Rich className="disp" html={tx(q.it.t)} />
        <div className="ctrl">{opts.map(([k, t]) => (
          <button key={k} type="button" className={'pick' + (done ? (k === q.it.k ? ' ok' : (a === k ? ' bad' : '')) : '')} data-n={k} aria-pressed={a === k} onClick={() => setA(k)}>{t}</button>
        ))}</div>
      </>
    );
    if (done) res = fb(ok ? 'ok' : 'bad', okTxt(ok) + (q.it.w ? md(q.it.w()) : ''));
  } else if (ex.k === 'cx') {
    const z = q.z, A = argSteps(z);
    body = (
      <>
        <Rich as="p" html={(q.f === 'mod' ? L('Calcula el mòdul de ', 'Calcula el módulo de ') : L('Calcula l\'argument (en radians, a (−π, π]) de ', 'Calcula el argumento (en radianes, en (−π, π]) de ')) + M('z = ' + zTx(z)) + '.'} />
        <KeyInput id={'pr-in-' + ex.seed} className="am-input" value={a || ''} onChange={setA} disabled={done} placeholder={q.f === 'mod' ? 'p. ex. √13, 5' : 'p. ex. 3π/4, -0.93'} syms={['√', 'π', '/', '(', ')', '−', '⌫']} onEnter={() => { if (!done) check(); }} />
      </>
    );
    if (done) res = fb(ok ? 'ok' : 'bad', okTxt(ok)) + '<div class="steps">' + A.out.map(stepRow).join('') + '</div>';
  } else if (ex.k === 'ind') {
    const D = IND[q.key], [opts, good] = indOpts(q);
    body = (
      <>
        <Rich as="p" html={D.q()} />
        <p className="small"><b>{q.ask === 'goal' ? L('Quina línia és l\'objectiu del pas inductiu, P(k + 1)?', '¿Qué línea es el objetivo del paso inductivo, P(k + 1)?') : L('En quina línia s\'aplica la hipòtesi d\'inducció?', '¿En qué línea se aplica la hipótesis de inducción?')}</b></p>
        <div className="kit-opts">{ordOf(ex).map((i, n) => (
          <button key={i} type="button" className={'kit-opt' + (a === i ? ' is-on' : '') + (done ? (opts[i] === good ? ' is-right' : (a === i ? ' is-wrong' : '')) : '')} data-o={i} aria-pressed={a === i} onClick={() => setA(i)}>
            <span className="kit-opt-l">{'abc'[n]})</span><Rich as="span" html={tx(opts[i])} />
          </button>
        ))}</div>
      </>
    );
    if (done) res = fb(ok ? 'ok' : 'bad', okTxt(ok));
  }
  return (
    <div className="mprac" data-k={ex.k}>
      <div className="mp-in" data-course="mates">{body}</div>
      <div className="kit-ex-acts">
        {!done && <button type="button" className="am-btn am-btn-primary kit-check" disabled={!answered(ex.k, v)} onClick={check}>{S.checkBtn}</button>}
        {done && <button type="button" className="kit-link mp-again" onClick={again}>{L('Torna-hi', 'Vuelve a intentarlo')}</button>}
      </div>
      {res && <div data-course="mates"><Html html={res} /></div>}
    </div>
  );
}

export const MPRAC = {
  inline: true,
  Input: Prac,
  check: (ex, v) => { const C = getContent('ca'); const val = { ...empty(ex.k), ...(v || {}) }; return answered(ex.k, val) ? isOk(C, ex, qOf(C, ex), val) : null; },
  space: 'none',
  Print: () => null,
  key: () => '—',
};
