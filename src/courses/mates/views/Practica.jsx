import { useMemo } from 'react';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { Z, tx } from '../engine/z.js';
import { getContent } from '../content/index.js';
import { newSeed } from '../engine/seed.js';
import { useSlot } from '../store.js';
import { useCourse } from '../course.js';
import { Html, KeyInput } from '../ui.jsx';

/**
 * Pràctica: l'exercici es genera a partir d'una llavor (prGen amb bkSeeded), de manera que en
 * canviar d'idioma surt el mateix exercici amb els mateixos nombres. Les respostes (a, sel, ans)
 * es desen apart, com les mutacions de PR i PR.q de l'original.
 */
const fresh = (k) => ({ k, seed: newSeed(), a: null, done: false, sel: k === 'comp' ? [] : k === 'venn' ? 0 : null, ans: {}, order: k === 'ind' ? Z.shuffle([0, 1, 2]) : null });

export default function Practica() {
  const { lang, L } = useLang();
  const C = getContent(lang);
  const { M, md, fb, okTxt, NSY, memberWhy, vennSVG, sParse, regionAt, svgPoint, regBits, relAnalyse, relGraph, hasseSVG, argSteps, zTx, stepRow, IND } = C;
  const { record } = useCourse();
  const [pr, set, replace] = useSlot('pr', () => fresh('venn'));
  const q = useMemo(() => C.bkSeeded(pr.seed, () => C.prGen(pr.k)), [C, pr.seed, pr.k]);
  const a = pr.a, done = pr.done;
  const setA = (v) => set({ a: v });

  // correcció (la mateixa lògica que el botó «Comprova» de l'original)
  const isOk = () => {
    if (pr.k === 'comp') { const good = q.cands.filter((c) => memberWhy(c, q.U).ok).map((c) => c.t); return q.cands.every((c, i) => good.includes(c.t) === pr.sel.includes(i)); }
    if (pr.k === 'buit') { try { return Z.hparse(a || '') === q.ans; } catch { return false; } }
    if (pr.k === 'venn') return pr.sel === q.m;
    if (pr.k === 'ident') { const nl = sParse(q.l), nr = sParse(q.r), k = Math.max(2, Z.nvars(nl, nr)); return a === (Z.smask(nl, k) === Z.smask(nr, k)); }
    if (pr.k === 'rel') { const an = relAnalyse([1, 2, 3], (x, y) => q.G.includes(x + ',' + y)); return pr.ans.r === (an.refl === true) && pr.ans.s === (an.sym === true) && pr.ans.as === (an.asym === true) && pr.ans.t === (an.trans === true); }
    if (pr.k === 'mod') return a !== '' && a != null && +a === Z.mod(q.a, q.n);
    if (pr.k === 'hasse') { const h = Z.hasse(q.E, (x, y) => y % x === 0); return !!a && +a.e === h.cover.length && (a.o === 't') === h.total; }
    if (pr.k === 'num') return a === q.it.k;
    if (pr.k === 'cx') { const A = argSteps(q.z), v = Z.tryEval(String(a || '').replace(/,/g, '.')); const t = q.f === 'mod' ? A.mod : A.al; return !!v && Math.abs(v.im) < 1e-9 && (Math.abs(v.re - t) < 0.01 || (q.f !== 'mod' && Math.abs(Math.abs(v.re - t) - 2 * Math.PI) < 0.01)); }
    if (pr.k === 'ind') { const st_ = q.st_, good = q.ask === 'goal' ? st_.find((x) => x.c === 'goal').m : st_.find((x) => x.c === 'hi').m; const opts = q.ask === 'goal' ? [st_.find((x) => x.c === 'goal').m, st_[1].m, st_[0].m] : [st_.find((x) => x.c === 'hi').m, st_.find((x) => x.c === 'goal').m, st_[0].m]; return opts[a] === good; }
    return false;
  };
  const check = () => { const ok = isOk(); set({ done: true }); record(ok); };
  const enter = (e) => { if (e.key === 'Enter' && !done) check(); };

  let body = null, res = '';
  if (pr.k === 'comp') {
    const eqTx = q.kk < 0 ? 'x^{2} + ' + (-q.kk) + ' = 0' : 'x^{2} = ' + q.kk;
    const good = q.cands.filter((c) => memberWhy(c, q.U).ok).map((c) => c.t);
    body = (
      <>
        <p>{L('Tria els elements del conjunt (si no en tria cap, és ∅):', 'Elige los elementos del conjunto (si no eliges ninguno, es ∅):')}</p>
        <Rich className="disp" html={tx('\\{x ∈ ' + NSY[q.U] + ' | ' + eqTx + '\\}')} />
        <div className="ctrl">{q.cands.map((c, i) => (
          <button key={i} type="button" className={'pick' + (done ? (good.includes(c.t) ? (pr.sel.includes(i) ? ' ok' : ' miss') : (pr.sel.includes(i) ? ' bad' : '')) : '')} data-c={i} aria-pressed={pr.sel.includes(i)}
            onClick={() => { if (!done) set({ sel: pr.sel.includes(i) ? pr.sel.filter((x) => x !== i) : pr.sel.concat(i) }); }}><Html as="span" html={M(c.t)} /></button>
        ))}</div>
      </>
    );
    if (done) { const ok = q.cands.every((c, i) => good.includes(c.t) === pr.sel.includes(i)); res = fb(ok ? 'ok' : 'bad', okTxt(ok) + M('= ' + (good.length ? '\\{' + good.join(', ') + '\\}' : '∅')) + '. ' + q.cands.map((c) => { const w = memberWhy(c, q.U); return M(c.t + (w.ok ? ' ∈ ' : ' ∉ ') + NSY[q.U]) + ': ' + w.why; }).join('; ') + '.'); }
  } else if (pr.k === 'buit') {
    body = (
      <>
        <p>{L('Calcula i escriu el resultat:', 'Calcula y escribe el resultado:')}</p>
        <Rich className="disp" html={tx(q.x + ' ' + q.o + ' ' + q.y)} />
        <KeyInput id="pr-in" value={a || ''} onChange={setA} syms={['∅', '{', '}', ',', '⌫']} onEnter={() => { if (!done) check(); }} />
      </>
    );
    if (done) { let ok = false; try { ok = Z.hparse(a || '') === q.ans; } catch { /* resposta il·legible */ } res = fb(ok ? 'ok' : 'bad', okTxt(ok) + L('Resultat: ', 'Resultado: ') + M(q.ans) + '. ' + L('Elements de l\'esquerra: ', 'Elementos de la izquierda: ') + M(Z.helems(q.x).join(', ') || '—') + '; ' + L('de la dreta: ', 'de la derecha: ') + M(Z.helems(q.y).join(', ') || '—') + '.'); }
  } else if (pr.k === 'venn') {
    const n = sParse(q.e);
    const onVenn = (ev) => {
      if (done) return;
      const sv = ev.target.closest && ev.target.closest('svg'); if (!sv) return;
      const p = svgPoint(sv, ev); if (p.x < 5 || p.x > 295 || p.y < 5 || p.y > 240) return;
      set({ sel: pr.sel ^ (1 << regionAt(3, p.x, p.y)) });
    };
    body = (
      <>
        <Rich as="p" html={L('Toca les zones que formen ', 'Toca las zonas que forman ') + M(Z.disp(n)) + '.'} />
        <Rich id="pr-venn" onClick={onVenn} html={vennSVG(3, pr.sel, { hit: true, nums: true })} />
      </>
    );
    if (done) { const ok = pr.sel === q.m; res = fb(ok ? 'ok' : 'bad', okTxt(ok) + (ok ? '' : L('Així és la correcta:', 'Así es la correcta:'))) + (ok ? '' : vennSVG(3, q.m, { nums: true })); }
  } else if (pr.k === 'ident') {
    const nl = sParse(q.l), nr = sParse(q.r), k = Math.max(2, Z.nvars(nl, nr)), truth = Z.smask(nl, k) === Z.smask(nr, k);
    body = (
      <>
        <p>{L('És certa per a tots els conjunts A, B, C?', '¿Es cierta para todos los conjuntos A, B, C?')}</p>
        <Rich className="disp" html={tx(Z.disp(nl) + ' = ' + Z.disp(nr))} />
        <div className="row">
          <button type="button" className={'btn' + (a === true ? ' primary' : '')} data-tf="1" onClick={() => { if (!done) setA(true); }}>{L('Certa', 'Cierta')}</button>
          <button type="button" className={'btn' + (a === false ? ' primary' : '')} data-tf="0" onClick={() => { if (!done) setA(false); }}>{L('Falsa', 'Falsa')}</button>
        </div>
      </>
    );
    if (done) {
      const ok = a === truth; let extra;
      if (!truth) { const d = Z.smask(nl, k) ^ Z.smask(nr, k); let r0 = 0; while (!((d >> r0) & 1)) r0++; extra = L(' Contraexemple: un element amb ', ' Contraejemplo: un elemento con ') + M(regBits(r0, k).join(', ')) + L(' és a un costat però no a l\'altre.', ' está en un lado pero no en el otro.'); }
      else extra = L(' Les dues bandes pinten les mateixes zones; a l\'examen ho demostraries per doble inclusió.', ' Los dos lados pintan las mismas zonas; en el examen lo demostrarías por doble inclusión.');
      res = fb(ok ? 'ok' : 'bad', okTxt(ok) + L('És ', 'Es ') + (truth ? L('certa', 'cierta') : L('falsa', 'falsa')) + '.' + extra) + '<div class="lab-split">' + vennSVG(k, Z.smask(nl, k), { nums: true }) + vennSVG(k, Z.smask(nr, k), { nums: true }) + '</div>';
    }
  } else if (pr.k === 'rel') {
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
              <div className={'tog' + (done ? (pr.ans[p] === truth[p] ? ' ok' : ' bad') : '')} role="group">
                <button type="button" data-p={p} data-v="1" aria-pressed={pr.ans[p] === true} onClick={() => { if (!done) set({ ans: { ...pr.ans, [p]: true } }); }}>{L('Sí', 'Sí')}</button>
                <button type="button" data-p={p} data-v="0" aria-pressed={pr.ans[p] === false} onClick={() => { if (!done) set({ ans: { ...pr.ans, [p]: false } }); }}>No</button>
              </div>
            </div>
          ))}</div>
        </div>
      </>
    );
    if (done) { const ok = Object.keys(names).every((p) => pr.ans[p] === truth[p]); res = fb(ok ? 'ok' : 'bad', okTxt(ok) + Object.keys(names).map((p) => '<b>' + names[p] + '</b>: ' + (truth[p] ? L('sí', 'sí') : L('no', 'no') + ' (' + M(ce[p]()) + ')')).join(' · ')); }
  } else if (pr.k === 'mod') {
    const r = Z.mod(q.a, q.n), qq = (q.a - r) / q.n, ng = (v) => String(v).replace('-', '−');
    body = (
      <>
        <Rich as="p" html={L('A ℤ amb la congruència mòdul ', 'En ℤ con la congruencia módulo ') + q.n + L(': a quina classe [r], amb 0 ≤ r < ', ': ¿a qué clase [r], con 0 ≤ r < ') + q.n + L(', pertany ', ', pertenece ') + M(ng(q.a)) + '?'} />
        <div className="ctrl"><span className="m">[</span><input className="sm" type="number" id="pr-in" value={a == null ? '' : a} aria-label="r" onChange={(e) => setA(e.target.value)} onKeyDown={enter} /><span className="m">]</span></div>
      </>
    );
    if (done) { const ok = +a === r && a !== ''; res = fb(ok ? 'ok' : 'bad', okTxt(ok) + M(ng(q.a) + ' = ' + q.n + ' · (' + ng(qq) + ') + ' + r) + L(', per tant ', ', por tanto ') + M(ng(q.a) + ' ∈ [' + r + '] = \\{…, ' + [r - q.n, r, r + q.n, r + 2 * q.n].map(ng).join(', ') + ', …\\}') + '.'); }
  } else if (pr.k === 'hasse') {
    const h = Z.hasse(q.E, (x, y) => y % x === 0);
    const A = a || {};
    body = (
      <>
        <Rich as="p" html={L('Divisors de ', 'Divisores de ') + q.n + L(' ordenats per la divisibilitat: ', ' ordenados por la divisibilidad: ') + M('\\{' + q.E.join(', ') + '\\}') + '.'} />
        <div className="ctrl"><label htmlFor="pr-in">{L('Quantes fletxes té el diagrama de Hasse?', '¿Cuántas flechas tiene el diagrama de Hasse?')}</label><input className="sm" type="number" id="pr-in" value={A.e != null ? A.e : ''} onChange={(e) => setA({ ...A, e: e.target.value })} onKeyDown={enter} /></div>
        <div className="ctrl"><span className="small">{L('L\'ordre és…', 'El orden es…')}</span>
          <div className="tog" role="group">
            <button type="button" data-o="t" aria-pressed={!!a && A.o === 't'} onClick={() => { if (!done) setA({ ...A, o: 't' }); }}>total</button>
            <button type="button" data-o="p" aria-pressed={!!a && A.o === 'p'} onClick={() => { if (!done) setA({ ...A, o: 'p' }); }}>{L('parcial', 'parcial')}</button>
          </div>
        </div>
      </>
    );
    if (done) { const ok = !!a && +A.e === h.cover.length && (A.o === 't') === h.total; res = fb(ok ? 'ok' : 'bad', okTxt(ok) + h.cover.length + L(' fletxes; ', ' flechas; ') + (h.total ? L('total (una cadena).', 'total (una cadena).') : L('parcial: ', 'parcial: ') + M(h.inc[0] + ' ∤ ' + h.inc[1]) + L(' i ', ' y ') + M(h.inc[1] + ' ∤ ' + h.inc[0]) + '.')) + hasseSVG({ E: q.E, leq: (x, y) => y % x === 0, lab: String, key: (x) => x }, 'hasse', []).svg; }
  } else if (pr.k === 'num') {
    const opts = [['N', 'ℕ'], ['Z', L('ℤ (no ℕ)', 'ℤ (no ℕ)')], ['Q', L('ℚ (no ℤ)', 'ℚ (no ℤ)')], ['I', L('ℝ ∖ ℚ', 'ℝ ∖ ℚ')], ['C', L('ℂ ∖ ℝ', 'ℂ ∖ ℝ')]];
    body = (
      <>
        <p>{L('Quin és el conjunt més petit que conté aquest nombre?', '¿Cuál es el conjunto más pequeño que contiene este número?')}</p>
        <Rich className="disp" html={tx(q.it.t)} />
        <div className="ctrl">{opts.map(([k, t]) => (
          <button key={k} type="button" className={'pick' + (done ? (k === q.it.k ? ' ok' : (a === k ? ' bad' : '')) : '')} data-n={k} aria-pressed={a === k} onClick={() => { if (!done) setA(k); }}>{t}</button>
        ))}</div>
      </>
    );
    if (done) { const ok = a === q.it.k; res = fb(ok ? 'ok' : 'bad', okTxt(ok) + (q.it.w ? md(q.it.w()) : '')); }
  } else if (pr.k === 'cx') {
    const z = q.z, A = argSteps(z);
    body = (
      <>
        <Rich as="p" html={(q.f === 'mod' ? L('Calcula el mòdul de ', 'Calcula el módulo de ') : L('Calcula l\'argument (en radians, a (−π, π]) de ', 'Calcula el argumento (en radianes, en (−π, π]) de ')) + M('z = ' + zTx(z)) + '.'} />
        <KeyInput id="pr-in" value={a || ''} onChange={setA} placeholder={q.f === 'mod' ? 'p. ex. √13, 5' : 'p. ex. 3π/4, -0.93'} syms={['√', 'π', '/', '(', ')', '−', '⌫']} onEnter={() => { if (!done) check(); }} />
      </>
    );
    if (done) {
      const v = Z.tryEval(String(a || '').replace(/,/g, '.').replace(/arctan/g, 'atan'));
      const target = q.f === 'mod' ? A.mod : A.al; let ok = false;
      if (v && Math.abs(v.im) < 1e-9) ok = q.f === 'mod' ? Math.abs(v.re - target) < 0.01 : (Math.abs(v.re - target) < 0.01 || Math.abs(v.re - target - 2 * Math.PI) < 0.01 || Math.abs(v.re - target + 2 * Math.PI) < 0.01);
      res = fb(ok ? 'ok' : 'bad', okTxt(ok)) + '<div class="steps">' + A.out.map(stepRow).join('') + '</div>';
    }
  } else if (pr.k === 'ind') {
    const D = IND[q.key], goal = q.st_.find((x) => x.c === 'goal'), hi = q.st_.find((x) => x.c === 'hi'), base = q.st_[0], hip = q.st_[1];
    let opts, good;
    if (q.ask === 'goal') { opts = [goal.m, hip.m, base.m]; good = goal.m; } else { opts = [hi.m, goal.m, base.m]; good = hi.m; }
    body = (
      <>
        <Rich as="p" html={D.q()} />
        <p className="small"><b>{q.ask === 'goal' ? L('Quina línia és l\'objectiu del pas inductiu, P(k + 1)?', '¿Qué línea es el objetivo del paso inductivo, P(k + 1)?') : L('En quina línia s\'aplica la hipòtesi d\'inducció?', '¿En qué línea se aplica la hipótesis de inducción?')}</b></p>
        <div className="opts">{pr.order.map((i) => (
          <button key={i} type="button" className={'opt' + (done ? (opts[i] === good ? ' ok' : (a === i ? ' bad' : '')) : (a === i ? ' sel' : ''))} data-o={i} onClick={() => { if (!done) setA(i); }}>
            <Rich as="span" className="body m" html={tx(opts[i])} />
          </button>
        ))}</div>
      </>
    );
    if (done) { const ok = opts[a] === good; res = fb(ok ? 'ok' : 'bad', okTxt(ok) + L('Mira la demostració completa a la pestanya Exercicis.', 'Mira la demostración completa en la pestaña Ejercicios.')); }
  }

  return (
    <>
      <div className="pagehead">
        <div className="eyebrow">{L('Pràctica', 'Práctica')}</div>
        <h2>{L('Exercicis generats', 'Ejercicios generados')}</h2>
        <p className="lead">{L('Cada botó «Un altre» en crea un de nou. Per a exàmens complets cronometrats, fes servir l\'app ', 'Cada botón «Otro» crea uno nuevo. Para exámenes completos cronometrados, usa la app ')}<a href="https://claude.ai/artifact/CRtE7krrLC1JbSokvxb6wG" target="_blank" rel="noopener">Matemàtica Computacional</a>.</p>
      </div>
      <div className="tabs2" id="prk">
        {C.PRK().map(([k, n]) => <button key={k} type="button" data-k={k} aria-pressed={pr.k === k} onClick={() => replace(fresh(k))}>{n}</button>)}
      </div>
      <div className="card stack p-mt12">
        {body}
        <div className="row">
          {!done && <button type="button" className="btn primary" id="pr-check" onClick={check}>{L('Comprova', 'Comprueba')}</button>}
          <button type="button" className="btn ghost" id="pr-new" onClick={() => replace(fresh(pr.k))}>{L('Un altre', 'Otro')}</button>
        </div>
        <Html html={res} />
      </div>
    </>
  );
}
