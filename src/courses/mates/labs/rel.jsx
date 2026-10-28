import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { Z, tx } from '../engine/z.js';
import { useSlot } from '../store.js';
import { Chips, Field, Html, LabShell, Stepper, Tog, useContent } from '../ui.jsx';

/* ---------- relació binària: matriu, graf i propietats ---------- */
const relG = (pr) => { const E = Z.range(1, pr.n); const G = []; E.forEach((a) => E.forEach((b) => { if (pr.f(a, b)) G.push(a + ',' + b); })); return G; };
export function Relacio({ id, cfg }) {
  const { L } = useLang();
  const C = useContent();
  const { M, fb, setTx, RPRE, relAnalyse, relGraph } = C;
  const [s, set] = useSlot(id, () => { const pr = RPRE[cfg.pre || 'md']; return { n: pr.n, G: relG(pr), pre: cfg.pre || 'md', hl: null }; });
  const E = Z.range(1, s.n), R = (a, b) => s.G.includes(a + ',' + b), an = relAnalyse(E, R);
  const pairs = s.G.slice().sort().map((x) => '(' + x + ')');
  const ceTx = { refl: (c) => '(' + c[0] + ',' + c[0] + ') ∉ G', antirefl: (c) => '(' + c[0] + ',' + c[0] + ') ∈ G', sym: (c) => '(' + c[0] + ',' + c[1] + ') ∈ G ' + L('però', 'pero', 'but') + ' (' + c[1] + ',' + c[0] + ') ∉ G', asym: (c) => '(' + c[0] + ',' + c[1] + ') ' + L('i', 'y', 'and') + ' (' + c[1] + ',' + c[0] + ') ∈ G ' + L('amb', 'con', 'with') + ' ' + c[0] + ' ≠ ' + c[1], trans: (c) => '(' + c[0] + ',' + c[1] + '), (' + c[1] + ',' + c[2] + ') ∈ G ' + L('però', 'pero', 'but') + ' (' + c[0] + ',' + c[2] + ') ∉ G', antitrans: (c) => '(' + c[0] + ',' + c[1] + '), (' + c[1] + ',' + c[2] + ') ' + L('i', 'y', 'and') + ' (' + c[0] + ',' + c[2] + ') ∈ G' };
  const hlPairs = (k) => { const c = an[k]; if (c === true) return null; if (k === 'refl' || k === 'antirefl') return [[c[0], c[0]]]; if (k === 'sym') return [[c[0], c[1]]]; if (k === 'asym') return [[c[0], c[1]], [c[1], c[0]]]; return [[c[0], c[1]], [c[1], c[2]], [c[0], c[2]]]; };
  const hl = s.hl ? hlPairs(s.hl) : null;
  const row = (k, name, okTxt, extra) => (
    <button key={k} type="button" className="prow p-tl" data-hl={k} aria-pressed={s.hl === k} onClick={() => set({ hl: s.hl === k ? null : k })}>
      <Html as="span" html={'<b>' + (an[k] === true ? '<span class="yes">✓</span> ' : '<span class="no">✗</span> ') + name + '</b><span class="why">' + (an[k] === true ? okTxt : M(ceTx[k](an[k]))) + (extra || '') + '</span>'} />
    </button>
  );
  const refl = an.refl === true, sym = an.sym === true, asym = an.asym === true, trans = an.trans === true, antirefl = an.antirefl === true;
  const isEq = refl && sym && trans, isOrd = refl && asym && trans, isStrict = antirefl && asym && trans;
  let verdict = '';
  if (isEq) {
    const cls = Z.classes(E, R);
    verdict += fb('ok', '<b>' + L('Relació d\'equivalència', 'Relación de equivalencia', 'Equivalence relation') + '</b> (' + L('reflexiva, simètrica i transitiva', 'reflexiva, simétrica y transitiva', 'reflexive, symmetric and transitive') + ').') +
      '<div class="classes">' + cls.map((c, i) => '<div class="crow k' + (i % 9) + '"><span class="m">' + tx('[' + c[0] + '] = ' + setTx(c)) + '</span><span class="small muted">' + (c.length > 1 ? L('també ', 'también ', 'also ') + c.slice(1).map((x) => M('[' + x + ']')).join(', ') : '') + '</span></div>').join('') + '</div>' +
      '<p class="small">' + L('Conjunt quocient: ', 'Conjunto cociente: ', 'Quotient set: ') + M('A/ℛ = \\{' + cls.map(setTx).join(', ') + '\\}') + '. ' + L('Fixa\'t que és una partició d\'A.', 'Fíjate en que es una partición de A.', 'Notice that it is a partition of A.') + '</p>';
  }
  if (isOrd || isStrict) {
    const leq = (a, b) => (isOrd ? R(a, b) : (a === b || R(a, b))); const h = Z.hasse(E, leq);
    verdict += fb('ok', '<b>' + (isOrd ? L('Relació d\'ordre', 'Relación de orden', 'Order relation') : L('Relació d\'ordre estricte', 'Relación de orden estricto', 'Strict order relation')) + '</b> (' + (isOrd ? L('reflexiva, antisimètrica i transitiva', 'reflexiva, antisimétrica y transitiva', 'reflexive, antisymmetric and transitive') : L('antireflexiva, antisimètrica i transitiva', 'antirreflexiva, antisimétrica y transitiva', 'irreflexive, antisymmetric and transitive')) + '). ' +
      (h.total ? L('<b>Total</b>: qualsevol parell d\'elements és comparable.', '<b>Total</b>: cualquier par de elementos es comparable.', '<b>Total</b>: any pair of elements is comparable.') : L('<b>Parcial</b>: ', '<b>Parcial</b>: ', '<b>Partial</b>: ') + M(h.inc[0] + ' ' + L('i', 'y', 'and') + ' ' + h.inc[1]) + L(' no són comparables.', ' no son comparables.', ' are not comparable.')));
  }
  if (!isEq && !isOrd && !isStrict) verdict += fb('info', L('No és ni d\'equivalència ni d\'ordre. Toca una propietat amb ✗ per veure el contraexemple al graf.', 'No es ni de equivalencia ni de orden. Toca una propiedad con ✗ para ver el contraejemplo en el grafo.', 'It is neither an equivalence nor an order. Tap a property marked ✗ to see the counterexample in the graph.'));
  const flip = (a, b) => { const k = a + ',' + b; set({ G: s.G.includes(k) ? s.G.filter((x) => x !== k) : s.G.concat(k), pre: null, hl: null }); };
  return (
    <LabShell title={L('Relació binària: matriu, graf i propietats', 'Relación binaria: matriz, grafo y propiedades', 'Binary relation: matrix, graph and properties')}>
      <div className="ctrl">
        <Chips wrap={false} attr="pre" items={Object.keys(RPRE).map((k) => { const t = RPRE[k].t; return [k, typeof t === 'function' ? t(L) : t]; })} value={s.pre}
          onChange={(k) => { const pr = RPRE[k]; set({ n: pr.n, pre: k, G: relG(pr), hl: null }); }} />
        <span className="lbl-s p-ml6">|A|</span>
        <Chips wrap={false} attr="n" items={[3, 4, 5].map((n) => [n, String(n)])} value={s.n}
          onChange={(n) => set({ n, G: s.G.filter((x) => x.split(',').every((v) => +v <= n)), pre: null, hl: null })} />
      </div>
      <div className="lab-split">
        <div className="stack p-g8">
          <Html html={'<div class="small">' + L('Fila x, columna y: toca per posar o treure ', 'Fila x, columna y: toca para poner o quitar ', 'Row x, column y: tap to add or remove ') + M('(x, y)') + '.</div>'} />
          <div className="tbl p-b0"><table className="grid-x">
            <thead><tr><th>x \ y</th>{E.map((b) => <th key={b}>{b}</th>)}</tr></thead>
            <tbody>{E.map((a) => (
              <tr key={a}><th>{a}</th>{E.map((b) => (
                <td key={b}><button type="button" className={'mxb' + (a === b ? ' diag' : '') + (hl && hl.some(([x, y]) => x === a && y === b) ? ' ce' : '')} data-on={R(a, b) ? 1 : 0} data-a={a} data-b={b} aria-label={'(' + a + ',' + b + ')'} onClick={() => flip(a, b)}>{R(a, b) ? '1' : '0'}</button></td>
              ))}</tr>
            ))}</tbody>
          </table></div>
          <Rich className="small m p-wrap" html={'G(ℛ) = ' + tx(pairs.length ? '\\{' + pairs.join(', ') + '\\}' : '∅')} />
        </div>
        <Rich html={relGraph(E, R, hl)} />
      </div>
      <div className="props">
        {row('refl', L('Reflexiva', 'Reflexiva', 'Reflexive'), L('tots els (x, x) hi són (diagonal plena)', 'todos los (x, x) están (diagonal llena)', 'all the (x, x) are there (full diagonal)'), an.refl !== true ? (antirefl ? ' · ' + L('de fet, <b>antireflexiva</b>: cap (x, x)', 'de hecho, <b>antirreflexiva</b>: ningún (x, x)', 'in fact, <b>irreflexive</b>: no (x, x)') : ' · ' + L('<b>no reflexiva</b>, però tampoc antireflexiva', '<b>no reflexiva</b>, pero tampoco antirreflexiva', '<b>not reflexive</b>, but not irreflexive either')) : '')}
        {row('sym', L('Simètrica', 'Simétrica', 'Symmetric'), L('cada fletxa té la de tornada (matriu simètrica)', 'cada flecha tiene la de vuelta (matriz simétrica)', 'each arrow has its return arrow (symmetric matrix)'))}
        {row('asym', L('Antisimètrica', 'Antisimétrica', 'Skew-symmetric'), L('mai hi ha anada i tornada entre elements diferents', 'nunca hay ida y vuelta entre elementos distintos', 'there is never a going and coming back between distinct elements'))}
        {row('trans', L('Transitiva', 'Transitiva', 'Transitive'), L('sempre que x→y→z, també x→z', 'siempre que x→y→z, también x→z', 'whenever x→y→z, also x→z'))}
      </div>
      <Html html={verdict} />
    </LabShell>
  );
}

/* ---------- congruència mòdul n ---------- */
const ng = (v) => String(v).replace('-', '−');
export function Congru({ id, cfg }) {
  const { L } = useLang();
  const C = useContent();
  const { M, fb } = C;
  const [s, set] = useSlot(id, () => ({ n: cfg.n || 5, pick: cfg.pick == null ? -13 : cfg.pick, a: 17, b: -3 }));
  const n = s.n, lo = -12, hi = 22, md_ = (a) => Z.mod(a, n);
  const r = md_(s.pick), q = (s.pick - r) / n;
  const cls = Z.range(0, n - 1);
  const sample = (k) => [k - 2 * n, k - n, k, k + n, k + 2 * n];
  const d = s.a - s.b, div = d % n === 0;
  const num = (k) => (t) => { const v = Math.round(+t); if (isFinite(v)) { set({ [k]: v }); return true; } return false; };
  return (
    <LabShell title={L('Classes mòdul n sobre ℤ', 'Clases módulo n sobre ℤ', 'Classes modulo n on ℤ')}>
      <div className="ctrl"><span className="lbl-s">n</span>
        <Chips wrap={false} attr="n" items={Z.range(2, 9).map((k) => [k, String(k)])} value={n} onChange={(k) => set({ n: k })} />
      </div>
      <Html html={'<p class="small">' + M('x ℛ y ⟺ x − y = ' + n + 'k') + L(' per a algun ', ' para algún ', ' for some ') + M('k ∈ ℤ') + ' ⟺ ' + L('x i y tenen el mateix residu en dividir per ', 'x e y tienen el mismo resto al dividir por ', 'x and y have the same remainder on division by ') + n + '. ' + L('Cada color és una classe. Toca un enter.', 'Cada color es una clase. Toca un entero.', 'Each colour is a class. Tap an integer.') + '</p>'} />
      <div className="strip" role="group">
        {Z.range(lo, hi).map((x) => <button key={x} type="button" className={'zc k' + md_(x) + (md_(x) !== r ? ' dim' : '') + (x === s.pick ? ' pick' : '')} data-x={x} onClick={() => set({ pick: x })}>{ng(x)}</button>)}
      </div>
      <Html html={'<div class="explain"><span>' + L('Divisió entera: ', 'División entera: ', 'Integer division: ') + M(ng(s.pick) + ' = ' + n + ' · (' + ng(q) + ') + ' + r) + L(', amb ', ', con ', ', with ') + M('0 ≤ ' + r + ' < ' + n) + '.</span>' +
        (s.pick < 0 ? '<span class="small">' + L('Amb negatius el residu també ha de ser ≥ 0: per això el quocient baixa fins a ', 'Con negativos el resto también tiene que ser ≥ 0: por eso el cociente baja hasta ', 'With negatives the remainder must also be ≥ 0: that is why the quotient goes down to ') + M(ng(q)) + L(' i no queda un residu negatiu.', ' y no queda un resto negativo.', ' and no negative remainder is left.') + '</span>' : '') +
        '<span>' + M(ng(s.pick) + ' ∈ [' + r + '] = \\{…, ' + sample(r).map(ng).join(', ') + ', …\\}') + '</span></div>' +
        '<div class="classes">' + cls.map((k) => '<div class="crow k' + k + '"><span class="m">' + tx('[' + k + ']') + '</span><span class="m small">' + tx('\\{…, ' + sample(k).map(ng).join(', ') + ', …\\}') + '</span></div>').join('') + '</div>' +
        '<p class="small">' + M('ℤ/ℛ = \\{' + cls.map((k) => '[' + k + ']').join(', ') + '\\}') + ': ' + n + L(' classes, cadascuna infinita. No se solapen i cobreixen ℤ: és una partició.', ' clases, cada una infinita. No se solapan y cubren ℤ: es una partición.', ' classes, each one infinite. They do not overlap and they cover ℤ: it is a partition.') + '</p>'} />
      <div className="ctrl"><span className="lbl-s">{L('Comprova', 'Comprueba', 'Check')}</span>
        <Field sync={s} type="number" id={id + '-a'} value={s.a} aria-label="x" onCommit={num('a')} />
        <span className="m">ℛ ?</span>
        <Field sync={s} type="number" id={id + '-b'} value={s.b} aria-label="y" onCommit={num('b')} />
      </div>
      <Html html={fb(div ? 'ok' : 'bad', M(ng(s.a) + ' − ' + (s.b < 0 ? '(' + ng(s.b) + ')' : s.b) + ' = ' + ng(d)) + (div ? ' = ' + n + ' · ' + ng(d / n) : L(', que no és múltiple de ', ', que no es múltiplo de ', ', which is not a multiple of ') + n) + ' → ' + (div ? L('<b>relacionats</b>: residus ', '<b>relacionados</b>: restos ', '<b>related</b>: remainders ') : L('<b>no relacionats</b>: residus ', '<b>no relacionados</b>: restos ', '<b>not related</b>: remainders ')) + M(md_(s.a) + (div ? ' = ' : ' ≠ ') + md_(s.b)) + '.')} />
    </LabShell>
  );
}

/* ---------- diagrames de Hasse ---------- */
export function Hasse({ id, cfg }) {
  const { L } = useLang();
  const C = useContent();
  const { M, fb, HPOS, hasseSVG } = C;
  const [s, set] = useSlot(id, () => ({ P: cfg.P || 'P3', stage: 'hasse', sel: [] }));
  const P = HPOS[s.P], { svg, h } = hasseSVG(P, s.stage, s.sel);
  const pairs = P.E.reduce((acc, a) => acc + P.E.filter((b) => P.leq(a, b)).length, 0), loops = P.E.length;
  let msg;
  if (s.sel.length === 2) {
    const [a, b] = s.sel, la = P.lab(a), lb = P.lab(b);
    msg = P.leq(a, b) ? fb('ok', M(la + ' ≼ ' + lb) + L(': comparables (hi ha camí de pujada de ', ': comparables (hay camino de subida de ', ': comparable (there is an upward path from ') + M(la) + L(' a ', ' a ', ' to ') + M(lb) + ').')
      : P.leq(b, a) ? fb('ok', M(lb + ' ≼ ' + la) + L(': comparables.', ': comparables.', ': comparable.'))
        : fb('warn', M(la) + L(' i ', ' y ', ' and ') + M(lb) + L(' <b>no són comparables</b>: cap dels dos és a sota de l\'altre. Això ja fa que l\'ordre sigui parcial.', ' <b>no son comparables</b>: ninguno está debajo del otro. Esto ya hace que el orden sea parcial.', ' <b>are not comparable</b>: neither is below the other. This alone makes the order partial.'));
  } else msg = '<p class="small muted">' + L('Toca dos elements per saber si són comparables.', 'Toca dos elementos para saber si son comparables.', 'Tap two elements to find out whether they are comparable.') + '</p>';
  // clic a un node del diagrama (atribut data-node)
  const onNode = (e) => {
    const g = e.target.closest && e.target.closest('[data-node]'); if (!g) return;
    const x = +g.dataset.node;
    let sel = s.sel.includes(x) ? s.sel.filter((y) => y !== x) : s.sel.concat(x);
    if (sel.length > 2) sel = sel.slice(1);
    set({ sel });
  };
  return (
    <LabShell title={L('Del graf de la relació al diagrama de Hasse', 'Del grafo de la relación al diagrama de Hasse', 'From the graph of the relation to the Hasse diagram')}>
      <Chips attr="p" items={Object.keys(HPOS).map((k) => { const t = HPOS[k].t; return [k, typeof t === 'function' ? t(L) : t]; })} value={s.P} onChange={(k) => set({ P: k, sel: [] })} />
      <Tog attr="stage" items={[['all', L('1 · totes les fletxes', '1 · todas las flechas', '1 · all the arrows')], ['noloop', L('2 · sense bucles', '2 · sin bucles', '2 · without loops')], ['hasse', L('3 · Hasse', '3 · Hasse', '3 · Hasse')]]} value={s.stage} onChange={(stage) => set({ stage })} />
      <div className="rc" onClick={onNode}><Html html={svg} /></div>
      <Html html={'<div class="explain">' + (s.stage === 'all' ? '<span>' + L('La relació té ', 'La relación tiene ', 'The relation has ') + '<b>' + pairs + '</b>' + L(' parelles (x, y) amb x ≼ y. Els bucles (verd) són la reflexivitat; les fletxes discontínues es dedueixen per transitivitat.', ' pares (x, y) con x ≼ y. Los bucles (verde) son la reflexividad; las flechas discontinuas se deducen por transitividad.', ' pairs (x, y) with x ≼ y. The loops (green) are reflexivity; the dashed arrows follow from transitivity.') + '</span>'
        : s.stage === 'noloop' ? '<span>' + L('Traiem els ', 'Quitamos los ', 'We remove the ') + loops + L(' bucles: sabem que és reflexiva, no cal dibuixar-los. Queden les fletxes discontínues, que surten soles per transitivitat.', ' bucles: sabemos que es reflexiva, no hace falta dibujarlos. Quedan las flechas discontinuas, que salen solas por transitividad.', ' loops: we know it is reflexive, there is no need to draw them. The dashed arrows remain, which follow automatically by transitivity.') + '</span>'
          : '<span>' + L('Només queden les ', 'Solo quedan las ', 'Only the ') + '<b>' + h.cover.length + '</b>' + L(' fletxes entre elements «consecutius» (sense ningú entremig). Qualsevol altra parella x ≼ y es llegeix com un camí de pujada.', ' flechas entre elementos «consecutivos» (sin nadie en medio). Cualquier otro par x ≼ y se lee como un camino de subida.', ' arrows between “consecutive” elements (with nobody in between) remain. Any other pair x ≼ y is read as an upward path.') + '</span>') +
        '<span>' + (h.total ? L('<b>Ordre total</b>: el diagrama és una cadena.', '<b>Orden total</b>: el diagrama es una cadena.', '<b>Total order</b>: the diagram is a chain.') : L('<b>Ordre parcial</b>: el diagrama és ramificat; per exemple ', '<b>Orden parcial</b>: el diagrama es ramificado; por ejemplo ', '<b>Partial order</b>: the diagram branches; for example ') + M(P.lab(h.inc[0]) + L(' i ', ' y ', ' and ') + P.lab(h.inc[1])) + L(' no són comparables.', ' no son comparables.', ' are not comparable.')) + '</span></div>' + msg} />
    </LabShell>
  );
}

/* ---------- demostrar o refutar: reflexiva, simètrica, transitiva ---------- */
const FK = { R: 'Rref', S: 'Rsim', T: 'Rtra' }, NK = { R: 'Rnoref', S: 'Rnosim', T: 'Rnotra' };
export function Demorel({ id }) {
  const { L } = useLang();
  const C = useContent();
  const { M, md, fb, okTxt, fref, DREL } = C;
  const [s, set] = useSlot(id, () => ({ r: 0, p: 'R', ans: {}, hits: 0, tries: 0 }));
  const pn = { R: L('reflexiva', 'reflexiva', 'reflexive'), S: L('simètrica', 'simétrica', 'symmetric'), T: L('transitiva', 'transitiva', 'transitive') };
  const R = DREL[s.r], key = R.k + '-' + s.p, a = s.ans[key], P = R.p[s.p];
  const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);
  const verdict = P.ok ? '<b>' + L('Sí que és ', 'Sí es ', 'It is ') + pn[s.p] + '</b>. ' : '<b>' + L('No és ', 'No es ', 'It is not ') + pn[s.p] + '</b>. ';
  const how = P.ok ? L('Es demostra amb lletres, per a elements qualssevol:', 'Se demuestra con letras, para elementos cualesquiera:', 'It is proved with letters, for arbitrary elements:') : L('N\'hi ha prou amb un contraexemple amb números:', 'Basta con un contraejemplo con números:', 'A counterexample with numbers is enough:');
  const answer = (v) => set((o) => ({ ans: { ...o.ans, [key]: v }, ...(v !== 'skip' ? { tries: o.tries + 1, hits: o.hits + ((v === '1') === P.ok ? 1 : 0) } : null) }));
  let res;
  if (a == null) {
    res = (
      <>
        <div className="small">{L('Abans de mirar la solució, decideix: ℛ és ', 'Antes de mirar la solución, decide: ¿ℛ es ', 'Before looking at the solution, decide: is ℛ ')}<b>{pn[s.p]}</b>?</div>
        <div className="row">
          <button type="button" className="btn primary" data-ans="1" onClick={() => answer('1')}>{L('Sí, ho és', 'Sí, lo es', 'Yes, it is')}</button>
          <button type="button" className="btn primary" data-ans="0" onClick={() => answer('0')}>{L('No, no ho és', 'No, no lo es', 'No, it is not')}</button>
          <button type="button" className="btn ghost" data-ans="skip" onClick={() => answer('skip')}>{L('Mostra la solució', 'Muestra la solución', 'Show the solution')}</button>
        </div>
      </>
    );
  } else {
    const right = a !== 'skip' && ((a === '1') === P.ok);
    res = (
      <>
        <Html html={fb(a === 'skip' ? 'info' : right ? 'ok' : 'bad', (a === 'skip' ? '' : okTxt(right)) + verdict + how) + fref([P.ok ? FK[s.p] : NK[s.p]])} />
        <Stepper key={key} id={'dr-' + key} gen={P.s} />
      </>
    );
  }
  const order = []; DREL.forEach((r, i) => ['R', 'S', 'T'].forEach((p) => order.push([i, p])));
  const next = () => { const i = order.findIndex(([r, p]) => r === s.r && p === s.p), nx = order[(i + 1) % order.length]; set({ r: nx[0], p: nx[1] }); };
  return (
    <LabShell title={L('Demostra o refuta: reflexiva, simètrica, transitiva', 'Demuestra o refuta: reflexiva, simétrica, transitiva', 'Prove or refute: reflexive, symmetric, transitive')}>
      <div className="ctrl"><span className="lbl-s">ℛ</span>
        <Chips wrap={false} attr="r" items={DREL.map((r, i) => [i, '<span class="m">' + tx(r.chip) + '</span>'])} value={s.r} onChange={(i) => set({ r: i, p: 'R' })} />
      </div>
      <Html html={'<div class="explain"><span>' + L('A ', 'En ', 'On ') + M(R.set) + ': ' + md(R.def()) + '</span>' +
        (R.tr ? '<span>' + L('Traduïda: ', 'Traducida: ', 'Translated: ') + M('x ℛ y ⟺ ' + R.tr()) + '</span>' : '') + (R.note ? '<span class="small">' + md(R.note()) + '</span>' : '') + '</div>'} />
      <div className="ctrl"><span className="lbl-s">{L('Propietat', 'Propiedad', 'Property')}</span>
        <Chips wrap={false} attr="p" items={['R', 'S', 'T'].map((p) => { const done = s.ans[R.k + '-' + p] != null; return [p, cap(pn[p]) + (done ? (R.p[p].ok ? ' · ' + L('sí', 'sí', 'yes') : ' · no') : '')]; })} value={s.p} onChange={(p) => set({ p })} />
      </div>
      {res}
      <div className="row p-jsb">
        <span className="small muted">{L('Encerts: ', 'Aciertos: ', 'Correct: ') + s.hits + ' / ' + s.tries + ' · ' + L('18 casos: 6 relacions × 3 propietats.', '18 casos: 6 relaciones × 3 propiedades.', '18 cases: 6 relations × 3 properties.')}</span>
        <button type="button" className="btn ghost" data-next="1" onClick={next}>{L('Següent cas', 'Siguiente caso', 'Next case')} →</button>
      </div>
    </LabShell>
  );
}
