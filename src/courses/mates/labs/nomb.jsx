import { useEffect, useState } from 'react';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { Z, tx } from '../engine/z.js';
import { useSlot } from '../store.js';
import { Chips, Html, LabShell, Stepper, Tog, useContent } from '../ui.jsx';

const ng = (v) => String(v).replace('-', '−');
const reduceMotion = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Lliscador amb la seva etiqueta (label + input range de l'original). */
function Slider({ id, label, value, min, max, step, onChange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="range" id={id} min={min} max={max} step={step} value={value} onChange={(e) => onChange(+e.target.value)} />
    </>
  );
}

/* ---------- a quins conjunts pertany? ---------- */
export function Nombres({ id }) {
  const { L } = useLang();
  const C = useContent();
  const { M, md, fb, yes, no, NUMPRE, RANKN, classifyFree } = C;
  const [s, set] = useSlot(id, () => ({ i: 0, free: '', fr: null }));
  const [free, setFree] = useState(s.free);
  // l'explicació d'un nombre escrit es torna a calcular en l'idioma actual
  const fr = s.fr ? (() => { const r = classifyFree(s.fr.src); return r ? { t: s.fr.t, k: r.k, w: r.w } : null; })() : null;
  const cur = fr || { t: NUMPRE[s.i].t, k: NUMPRE[s.i].k, w: NUMPRE[s.i].w() }, rk = RANKN[cur.k];
  const inN = rk === 0, inZ = rk <= 1, inQ = rk <= 2, inR = rk <= 3;
  const dot = { N: [118, 172], Z: [210, 182], Q: [272, 168], I: [352, 160], C: [392, 26] }[cur.k];
  const rings = '<svg class="rings" viewBox="0 0 440 270" role="img" aria-label="ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ ⊆ ℂ">' +
    '<rect class="on" x="6" y="6" width="428" height="258" rx="14"/><text x="18" y="28">ℂ</text>' +
    '<rect class="' + (inR ? 'on' : '') + '" x="24" y="40" width="392" height="208" rx="12"/><text x="36" y="62">ℝ</text>' +
    '<rect class="irr' + (cur.k === 'I' ? ' on' : '') + '" x="312" y="74" width="92" height="160" rx="10"/><text class="sm" x="322" y="94">' + L('irracionals', 'irracionales') + '</text><text class="sm" x="322" y="108">ℝ ∖ ℚ</text>' +
    '<rect class="' + (inQ ? 'on' : '') + '" x="40" y="74" width="262" height="160" rx="10"/><text x="52" y="96">ℚ</text>' +
    '<rect class="' + (inZ ? 'on' : '') + '" x="56" y="108" width="190" height="112" rx="10"/><text x="68" y="130">ℤ</text>' +
    '<rect class="' + (inN ? 'on' : '') + '" x="72" y="140" width="98" height="66" rx="9"/><text x="84" y="162">ℕ</text>' +
    '<circle cx="' + dot[0] + '" cy="' + dot[1] + '" r="7"/></svg>';
  const memb = [['ℕ', inN], ['ℤ', inZ], ['ℚ', inQ], ['ℝ', inR], ['ℂ', true]];
  const go = () => { const r = classifyFree(free); set({ free, err: !r, ...(r ? { fr: { t: free.replace(/sqrt\(?(\d+)\)?/g, '√$1'), src: free } } : null) }); };
  return (
    <LabShell title={L('A quins conjunts pertany?', '¿A qué conjuntos pertenece?')}>
      <Chips attr="i" items={NUMPRE.map((p, i) => [i, M(p.t)])} value={s.fr ? -1 : s.i} onChange={(i) => set({ i, fr: null, err: false })} />
      <div className="ctrl">
        <input className="sm p-w200" type="text" id={id + '-f'} value={free} placeholder={L('p. ex. 7/3, √12, -2, 3i', 'p. ej. 7/3, √12, -2, 3i')} aria-label={L('Nombre', 'Número')}
          onChange={(e) => setFree(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') go(); }} />
        <button type="button" className="btn" data-go="" onClick={go}>{L('Classifica', 'Clasifica')}</button>
      </div>
      <Html html={s.err ? fb('warn', L('No sé llegir aquest nombre. Prova enters, fraccions, decimals, √n, π o 3i.', 'No sé leer este número. Prueba enteros, fracciones, decimales, √n, π o 3i.')) : ''} />
      <div className="lab-split">
        <Rich html={rings} />
        <Html html={'<div class="stack" style="gap:8px"><div class="disp">' + tx(cur.t) + '</div>' +
          '<div class="props">' + memb.map(([n, v]) => '<div class="prow" style="grid-template-columns:60px 1fr"><b>∈ ' + n + '?</b><span>' + (v ? yes() : no()) + '</span></div>').join('') + '</div>' +
          '<div class="explain"><span>' + md(cur.w) + '</span><span>' + L('El conjunt més petit és ', 'El conjunto más pequeño es ') + '<b>' + { N: 'ℕ', Z: 'ℤ', Q: 'ℚ', I: 'ℝ', C: 'ℂ' }[cur.k] + '</b>' + L('; com que ', '; como ') + M('ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ ⊆ ℂ') + L(', també pertany a tots els que el contenen.', ', también pertenece a todos los que lo contienen.') + '</span></div></div>'} />
      </div>
    </LabShell>
  );
}

/* ---------- axiomes P1–P12 en cada conjunt ---------- */
export function Axiomes({ id }) {
  const { L } = useLang();
  const C = useContent();
  const { M, md, esc, NSY, AXR, AXF, AXOK } = C;
  const [s, set] = useSlot(id, () => ({ cell: 'P8Z' }));
  const sets = ['N', 'Z', 'Q', 'R', 'C'];
  const val = (k) => (AXOK[k] === 'na' ? 'na' : AXF[k] ? 'no' : 'ok');
  const why = (k) => (AXF[k] ? AXF[k]() : (k.startsWith('sup') ? L('És precisament la propietat que distingeix ℝ de ℚ.', 'Es precisamente la propiedad que distingue ℝ de ℚ.') : L('Es compleix: és una propietat de les operacions que aquest conjunt hereta.', 'Se cumple: es una propiedad de las operaciones que este conjunto hereda.')));
  return (
    <LabShell title={L('Quins axiomes compleix cada conjunt?', '¿Qué axiomas cumple cada conjunto?')}>
      <p className="small">{L('Toca una casella per veure per què hi és o per què falla.', 'Toca una casilla para ver por qué está o por qué falla.')}</p>
      <div className="tbl"><table>
        <thead><tr><th></th><th></th>{sets.map((x) => <th key={x} className="c">{NSY[x]}</th>)}</tr></thead>
        <tbody>{AXR.map(([k, f]) => (
          <tr key={k}><th>{k === 'sup' ? L('Suprem', 'Supremo') : k}</th><Rich as="td" className="small" html={M(typeof f === 'function' ? f(L) : f)} />
            {sets.map((x) => { const key = k + x, v = val(key); return <td key={x} className="c"><button type="button" className={'mxb p-w34' + (s.cell === key ? ' ce' : '')} data-c={key} data-on={v === 'ok' ? 1 : 0} onClick={() => set({ cell: key })}>{v === 'ok' ? '✓' : v === 'no' ? '✗' : '·'}</button></td>; })}
          </tr>
        ))}</tbody>
      </table></div>
      <Html html={'<div class="explain"><b>' + esc(s.cell.replace(/(N|Z|Q|R|C)$/, (m) => ' · ' + NSY[m])) + '</b><span>' + md(why(s.cell)) + '</span></div>' +
        '<p class="small">' + L('Lectura: ℤ falla la (P8); ℚ i ℝ compleixen (P1)–(P12); el que ℝ té de més és l\'axioma del suprem. ℂ manté les operacions però no és ordenat.', 'Lectura: ℤ falla la (P8); ℚ y ℝ cumplen (P1)–(P12); lo que ℝ tiene de más es el axioma del supremo. ℂ mantiene las operaciones pero no es ordenado.') + '</p>'} />
    </LabShell>
  );
}

/* ---------- valor absolut i desigualtat triangular ---------- */
export function Absval({ id }) {
  const { L } = useLang();
  const C = useContent();
  const { M, fmt, NL } = C;
  const [s, set] = useSlot(id, () => ({ a: 3, b: -2 }));
  const a = s.a, b = s.b, nl = NL(-12, 12, 640, 120, 40);
  const bar = (y, len, cls, lab) => '<line class="' + cls + '" x1="' + nl.X(0) + '" y1="' + y + '" x2="' + nl.X(len) + '" y2="' + y + '"/><text x="' + (nl.X(len) + 6) + '" y="' + (y + 4) + '" style="text-anchor:start">' + lab + '</text>';
  const g = nl.axis(2, (v) => fmt(v, 0)) + '<circle class="pt" cx="' + nl.X(a) + '" cy="40" r="6"/><text class="big" x="' + nl.X(a) + '" y="24">a</text><circle class="pt2" cx="' + nl.X(b) + '" cy="40" r="6"/><text class="big" x="' + nl.X(b) + '" y="24">b</text>' +
    bar(82, Math.abs(a + b), 'seg', '|a + b| = ' + fmt(Math.abs(a + b), 1)) + bar(104, Math.abs(a) + Math.abs(b), 'seg2', '|a| + |b| = ' + fmt(Math.abs(a) + Math.abs(b), 1));
  const eq = Math.abs(Math.abs(a + b) - Math.abs(a) - Math.abs(b)) < 1e-9;
  return (
    <LabShell title={L('Valor absolut i desigualtat triangular', 'Valor absoluto y desigualdad triangular')}>
      <div className="ctrl">
        <Slider id={id + '-a'} label={'a = ' + fmt(a, 1)} min="-6" max="6" step="0.5" value={a} onChange={(v) => set({ a: v })} />
        <Slider id={id + '-b'} label={'b = ' + fmt(b, 1)} min="-6" max="6" step="0.5" value={b} onChange={(v) => set({ b: v })} />
      </div>
      <Html html={'<svg class="nl" viewBox="0 0 640 120" role="img" aria-label="|a+b| ≤ |a|+|b|">' + g + '</svg>' +
        '<div class="explain"><span>' + M('|a| = ' + (a >= 0 ? 'a = ' + fmt(a, 1) : '−a = ' + fmt(-a, 1)) + ', |b| = ' + (b >= 0 ? 'b = ' + fmt(b, 1) : '−b = ' + fmt(-b, 1))) + L(' (la definició canvia el signe quan el nombre és negatiu).', ' (la definición cambia el signo cuando el número es negativo).') + '</span>' +
        '<span>' + M('|a + b| = ' + fmt(Math.abs(a + b), 1) + (eq ? ' = ' : ' < ') + fmt(Math.abs(a) + Math.abs(b), 1) + ' = |a| + |b|') + '. ' + (eq ? L('Igualtat: a i b no tenen signes contraris, no es compensen.', 'Igualdad: a y b no tienen signos contrarios, no se compensan.') : L('Estricta: a i b tenen signes contraris i una part es compensa.', 'Estricta: a y b tienen signos contrarios y una parte se compensa.')) + '</span></div>'} />
    </LabShell>
  );
}

/* ---------- dominó de la inducció ---------- */
const NDOM = 14;
export function Domino({ id }) {
  const { L } = useLang();
  const C = useContent();
  const { M } = C;
  const [s, set] = useSlot(id, () => ({ base: true, step: 'ok', fallen: 0, run: 0 }));
  const reach = !s.base ? 0 : s.step === 'ok' ? NDOM : s.step === 'k5' ? 5 : 1;
  // animació: cau una fitxa cada 140 ms fins a la darrera que arriba la cadena
  useEffect(() => {
    if (s.run !== 1) return undefined;
    const t = setTimeout(() => set((o) => { const f = o.fallen + 1; return f >= reach ? { fallen: f, run: 2 } : { fallen: f }; }), s.fallen === 0 ? 0 : 140);
    return () => clearTimeout(t);
  }, [s.run, s.fallen, reach, set]);
  const push = () => { if (reduceMotion() || !reach) set({ fallen: reach, run: 2 }); else set({ fallen: 0, run: 1 }); };
  return (
    <LabShell title={L('Per què calen les dues parts', 'Por qué hacen falta las dos partes')}>
      <div className="lab-split">
        <div className="stack p-g8"><Rich as="span" className="lbl-s" html={L('Cas base', 'Caso base') + ' · ' + M('1 ∈ S')} />
          <Tog attr="b" items={[['1', L('es compleix', 'se cumple')], ['0', L('no es compleix', 'no se cumple')]]} value={s.base ? '1' : '0'} onChange={(v) => set({ base: v === '1', fallen: 0, run: 0 })} /></div>
        <div className="stack p-g8"><Rich as="span" className="lbl-s" html={L('Pas inductiu', 'Paso inductivo') + ' · ' + M('k ∈ S ⟹ k + 1 ∈ S')} />
          <Tog attr="s" items={[['ok', L('per a tot k', 'para todo k')], ['k5', L('falla a k = 5', 'falla en k = 5')], ['no', L('no demostrat', 'no demostrado')]]} value={s.step} onChange={(v) => set({ step: v, fallen: 0, run: 0 })} /></div>
      </div>
      <div className="row">
        <button type="button" className="btn primary" data-push="" onClick={push}>{L('Empeny el primer', 'Empuja el primero')}</button>
        <button type="button" className="btn ghost" data-reset="" onClick={() => set({ fallen: 0, run: 0 })}>{L('Torna a posar', 'Vuelve a colocar')}</button>
      </div>
      <div className="dominoes" aria-label={L('Fitxes de dòmino 1 a ', 'Fichas de dominó 1 a ') + NDOM}>
        {Z.range(1, NDOM).map((i) => <div key={i} className={'dom' + (i <= s.fallen ? ' fall' : '') + (s.run === 2 && i === s.fallen + 1 && s.fallen < NDOM ? ' stuck' : '')}><span>{i}</span></div>)}
      </div>
      <Html html={'<div class="explain"><span>' + (s.run < 2 ? L('Cada fitxa és un nombre natural; «caure» vol dir «la propietat és certa per a aquest n».', 'Cada ficha es un número natural; «caer» quiere decir «la propiedad es cierta para este n».') :
        !s.base ? L('<b>Sense cas base no cau cap fitxa</b>: el pas inductiu només diu «si una cau, cau la següent», però ningú fa caure la primera.', '<b>Sin caso base no cae ninguna ficha</b>: el paso inductivo solo dice «si una cae, cae la siguiente», pero nadie hace caer la primera.') :
          s.step === 'ok' ? L('<b>Cauen totes</b>: 1 ∈ S i cada k ∈ S arrossega k + 1. Pel principi d\'inducció, S = ℕ.', '<b>Caen todas</b>: 1 ∈ S y cada k ∈ S arrastra k + 1. Por el principio de inducción, S = ℕ.') :
            s.step === 'k5' ? L('<b>S\'atura a la 5</b>: si el pas falla per a un sol k, la cadena es trenca. Per això el pas s\'ha de demostrar per a un k <i>qualsevol</i>, no per a uns quants.', '<b>Se para en la 5</b>: si el paso falla para un solo k, la cadena se rompe. Por eso el paso se tiene que demostrar para un k <i>cualquiera</i>, no para unos cuantos.') :
              L('<b>Només cau la primera</b>: comprovar casos (1, 2, 3…) no demostra res per a tots els n.', '<b>Solo cae la primera</b>: comprobar casos (1, 2, 3…) no demuestra nada para todos los n.')) + '</span></div>'} />
    </LabShell>
  );
}

/* ---------- demostració per inducció, comprovada i pas a pas ---------- */
export function Indprova({ id, cfg }) {
  const { L } = useLang();
  const C = useContent();
  const { M, fmt, IND, IND_ORDER, indSteps } = C;
  const [s, set] = useSlot(id, () => ({ k: cfg.k || 'cubs9', r: 2, nmax: 6 }));
  const D = IND[s.k];
  const rows = Z.range(1, s.nmax).map((n) => D.row(n, s.r));
  const okRow = (r) => (D.cols().length === 3 && (s.k === 'cubs9' || s.k === 'n35n') ? Number.isInteger(r[2]) : (s.k === 'fact' ? r[1] < r[2] : String(r[1]) === String(r[2]) || Math.abs(r[1] - r[2]) < 1e-9));
  return (
    <LabShell title={L('Demostració per inducció, comprovada i pas a pas', 'Demostración por inducción, comprobada y paso a paso')}>
      <Chips attr="k" items={IND_ORDER.map((k) => [k, IND[k].src()])} value={s.k} onChange={(k) => set({ k })} />
      <Rich as="p" html={D.q()} />
      <div className="ctrl">
        <span className="lbl-s">{L('Comprova els primers casos', 'Comprueba los primeros casos')}</span>
        {D.param && <><label>r</label><Chips wrap={false} attr="r" items={[2, 3, -2].map((r) => [r, ng(r)])} value={s.r} onChange={(r) => set({ r })} /></>}
        <Slider id={id + '-n'} label={'n ≤ ' + s.nmax} min="2" max="10" value={s.nmax} onChange={(v) => set({ nmax: v })} />
      </div>
      <Html html={'<div class="tbl"><table class="etab"><thead><tr>' + D.cols().map((c) => '<th>' + M(c) + '</th>').join('') + '<th></th></tr></thead><tbody>' +
        rows.map((r) => '<tr>' + r.map((v) => '<td>' + M(String(typeof v === 'number' ? fmt(v, 4) : v)) + '</td>').join('') + '<td>' + (okRow(r) ? '<span class="yes">✓</span>' : '<span class="no">✗</span>') + '</td></tr>').join('') + '</tbody></table></div>' +
        '<p class="tiny muted">' + L('La taula convenç, però no demostra: només mira uns quants n. La demostració és això:', 'La tabla convence, pero no demuestra: solo mira unos cuantos n. La demostración es esto:') + '</p>'} />
      <Stepper key={s.k} id={'ind-' + id + '-' + s.k} gen={() => indSteps(s.k)} />
    </LabShell>
  );
}

/* ---------- definicions recursives: a^n i n! ---------- */
export function Recursiu({ id }) {
  const { L } = useLang();
  const C = useContent();
  const { M, stepRow } = C;
  const [s, set] = useSlot(id, () => ({ n: 5, a: 2, f: 'fact' }));
  const n = s.n, a = s.a; const lines = [];
  if (s.f === 'fact') { let cur = n + '!'; lines.push(cur); for (let k = n; k > 1; k--) { cur = cur.replace(k + '!', '(' + (k - 1) + '! · ' + k + ')'); lines.push(cur); } lines.push(cur.replace('1!', '1')); }
  else { let cur = a + '^{' + n + '}'; lines.push(cur); for (let k = n; k > 1; k--) { cur = cur.replace(a + '^{' + k + '}', '(' + a + '^{' + (k - 1) + '} · ' + a + ')'); lines.push(cur); } lines.push(cur.replace(a + '^{1}', String(a))); }
  const val = s.f === 'fact' ? Z.range(1, n).reduce((x, y) => x * y, 1) : a ** n;
  return (
    <LabShell title={L('Definir amb inducció: desplega la definició', 'Definir con inducción: despliega la definición')}>
      <div className="ctrl">
        <Tog attr="f" items={[['fact', 'n!'], ['pow', 'a^n']]} value={s.f} onChange={(f) => set({ f })} />
        {s.f === 'pow' && <Slider id={id + '-a'} label={'a = ' + a} min="2" max="5" value={a} onChange={(v) => set({ a: v })} />}
        <Slider id={id + '-n'} label={'n = ' + n} min="1" max="7" value={n} onChange={(v) => set({ n: v })} />
      </div>
      <Html html={'<div class="steps">' + lines.map((l, i) => stepRow({ m: (i ? '= ' : '') + l, n: '' }, i)).join('') + stepRow({ m: '= ' + val, c: 'done' }, 0) + '</div>' +
        '<p class="small">' + (s.f === 'fact' ? L('Cada pas aplica ', 'Cada paso aplica ') + M('n! = (n − 1)! · n') + L(' fins arribar al cas inicial ', ' hasta llegar al caso inicial ') + M('1! = 1') + '. ' + L('Conveni: ', 'Convenio: ') + M('0! = 1') + '.' : L('Cada pas aplica ', 'Cada paso aplica ') + M('a^{n} = a^{n−1} · a') + L(' fins al cas inicial ', ' hasta el caso inicial ') + M('a^{1} = a') + '.') + L(' És la mateixa estructura que una demostració per inducció: un cas inicial i una regla per passar de n − 1 a n.', ' Es la misma estructura que una demostración por inducción: un caso inicial y una regla para pasar de n − 1 a n.') + '</p>'} />
    </LabShell>
  );
}

/* ---------- ℤ i ℚ com a conjunts quocient ---------- */
export function Quocient({ id, cfg }) {
  const { L } = useLang();
  const C = useContent();
  const { M } = C;
  const [s, set] = useSlot(id, () => ({ mode: cfg.mode || 'Z', pz: [5, 2], pq: [2, 3] }));
  const pickZ = (x, y) => set({ pz: [x, y] }), pickQ = (x, y) => { if (x !== 0) set({ pq: [x, y] }); };
  const f1 = <button type="button" className="btn ghost" data-f1="" onClick={() => set({ showf: !s.showf })}>{(s.showf ? L('Amaga', 'Oculta') : L('Mostra', 'Muestra')) + (s.mode === 'Z' ? ' f' : ' f(n) = (n, 1)')}</button>;
  let grid, info;
  if (s.mode === 'Z') {
    const [a, b] = s.pz, d = a - b, R = 8;
    grid = (
      <table className="grid-x"><tbody>
        {Z.range(1, R).reverse().map((y) => (
          <tr key={y}><th>{y}</th>{Z.range(1, R).map((x) => {
            const on = x - y === d, sel = x === a && y === b, f = y === 1 && x >= 2;
            return <td key={x}><button type="button" className={'gx p-gz' + (on ? ' on' : '') + (sel ? ' sel' : '') + (f && s.showf ? ' on2' : '')} data-x={x} data-y={y} aria-label={'(' + x + ',' + y + ')'} onClick={() => pickZ(x, y)}>{on ? ng(x - y) : ''}</button></td>;
          })}</tr>
        ))}
        <tr><th></th>{Z.range(1, R).map((x) => <th key={x}>{x}</th>)}</tr>
      </tbody></table>
    );
    const cls = Z.range(1, R).map((y) => [y + d, y]).filter(([x]) => x >= 1 && x <= R);
    info = (
      <>
        <Html html={'<span>' + M('(a, b) ℛ (c, d) ⟺ a − b = c − d') + '. ' + L('Columna = primera coordenada a, fila = segona b.', 'Columna = primera coordenada a, fila = segunda b.') + '</span>' +
          '<span>' + L('Classe de ', 'Clase de ') + M('(' + a + ', ' + b + ')') + ': ' + M('\\{' + cls.map(([x, y]) => '(' + x + ', ' + y + ')').join(', ') + ', …\\}') + '</span>' +
          '<span>' + L('Totes aquestes parelles «valen» el mateix: ', 'Todos estos pares «valen» lo mismo: ') + M('a − b = ' + ng(d)) + '. ' + L('Aquesta classe <b>és</b> l\'enter ', 'Esta clase <b>es</b> el entero ') + M(ng(d)) + '. ' + L('Així es construeixen els negatius només amb naturals.', 'Así se construyen los negativos solo con naturales.') + '</span>'} />
        <span className="small"><Html as="span" html={M('f(n) = (1 + n, 1)') + L(' tria el representant de la fila 1 per a cada natural n: és la inclusió ℕ ⊆ ℤ.', ' elige el representante de la fila 1 para cada natural n: es la inclusión ℕ ⊆ ℤ.') + ' '} />{f1}</span>
      </>
    );
  } else {
    const [a, b] = s.pq, R = 6;
    grid = (
      <table className="grid-x"><tbody>
        {Z.range(-R, R).reverse().filter((y) => y !== 0).map((y) => (
          <tr key={y}><th>{ng(y)}</th>{Z.range(-R, R).map((x) => {
            const on = x * b === a * y, sel = x === a && y === b, f = y === 1 && s.showf;
            return <td key={x}><button type="button" className={'gx p-gq' + (on ? ' on' : '') + (sel ? ' sel' : '') + (f ? ' on2' : '')} data-x={x} data-y={y} aria-label={'(' + x + ',' + y + ')'} onClick={() => pickQ(x, y)}></button></td>;
          })}</tr>
        ))}
        <tr><th></th>{Z.range(-R, R).map((x) => <th key={x} className="tiny">{ng(x)}</th>)}</tr>
      </tbody></table>
    );
    const cls = []; Z.range(-R, R).forEach((x) => Z.range(-R, R).forEach((y) => { if (y && x * b === a * y) cls.push([x, y]); }));
    info = (
      <>
        <Html html={'<span>' + M('(a, b) ℛ (c, d) ⟺ a · d = c · b') + L(' a ', ' en ') + M('ℤ × (ℤ ∖ \\{0\\})') + '. ' + L('Columna = a, fila = b (no hi ha fila 0).', 'Columna = a, fila = b (no hay fila 0).') + '</span>' +
          '<span>' + L('Classe de ', 'Clase de ') + M('(' + a + ', ' + b + ')') + ': ' + M('\\{' + cls.slice(0, 6).map(([x, y]) => '(' + ng(x) + ', ' + ng(y) + ')').join(', ') + ', …\\}') + '</span>' +
          '<span>' + L('Són totes les maneres d\'escriure la fracció ', 'Son todas las maneras de escribir la fracción ') + M(Z.fracTx(a, b)) + L(': els punts queden sobre una recta que passa per l\'origen. Aquesta classe <b>és</b> el racional.', ': los puntos quedan sobre una recta que pasa por el origen. Esta clase <b>es</b> el racional.') + '</span>'} />
        <span className="small">{L('Per què es treu el 0 de la segona coordenada? Si hi fos, (0, 0) estaria relacionat amb tot i la transitivitat fallaria: (1, 2) ℛ (0, 0) i (0, 0) ℛ (3, 5), però 1 · 5 ≠ 3 · 2.', '¿Por qué se quita el 0 de la segunda coordenada? Si estuviera, (0, 0) estaría relacionado con todo y la transitividad fallaría: (1, 2) ℛ (0, 0) y (0, 0) ℛ (3, 5), pero 1 · 5 ≠ 3 · 2.') + ' '}{f1}</span>
      </>
    );
  }
  return (
    <LabShell title={L('ℤ i ℚ construïts com a conjunts quocient', 'ℤ y ℚ construidos como conjuntos cociente')}>
      <Tog attr="m" items={[['Z', 'ℤ = (ℕ × ℕ)/ℛ'], ['Q', 'ℚ = (ℤ × (ℤ∖{0}))/ℛ']]} value={s.mode} onChange={(mode) => set({ mode })} />
      <p className="small">{L('Toca una parella per pintar tota la seva classe.', 'Toca un par para pintar toda su clase.')}</p>
      <div className="tbl p-b0">{grid}</div>
      <div className="explain">{info}</div>
    </LabShell>
  );
}

/* ---------- suprem i ínfim ---------- */
export function Suprem({ id, cfg }) {
  const { L } = useLang();
  const C = useContent();
  const { M, fmt, NL, SUPS } = C;
  const [s, set] = useSlot(id, () => ({ k: cfg.k || 'inv', side: 'sup', y: 1.1, e: 0.15 }));
  const A = SUPS[s.k], sup = s.side === 'sup', b = sup ? A.sup : A.inf, bIn = sup ? A.supIn : A.infIn;
  const nl = NL(A.min, A.max, 640, 96, 52);
  let g = '';
  g += '<rect class="zone" x="' + (sup ? nl.X(b) : nl.X(A.min) - 12) + '" y="18" width="' + (sup ? nl.X(A.max) + 12 - nl.X(b) : nl.X(b) - nl.X(A.min) + 12) + '" height="20" rx="4"/>';
  g += '<text x="' + (sup ? (nl.X(b) + nl.X(A.max)) / 2 : (nl.X(A.min) + nl.X(b)) / 2) + '" y="32">' + (sup ? L('cotes superiors', 'cotas superiores') : L('cotes inferiors', 'cotas inferiores')) + '</text>';
  g += nl.axis(A.max - A.min > 2 ? 0.5 : 0.25, (v) => fmt(v, 2));
  if (A.seg) g += '<line class="seg" x1="' + nl.X(A.seg[0]) + '" y1="52" x2="' + nl.X(A.seg[1]) + '" y2="52"/>';
  if (A.pts) A.pts.forEach((v) => { g += '<circle class="pt" cx="' + nl.X(v) + '" cy="52" r="3.4"/>'; });
  const eLo = sup ? b - s.e : b, eHi = sup ? b : b + s.e;
  g += '<line class="seg2" x1="' + nl.X(eLo) + '" y1="70" x2="' + nl.X(eHi) + '" y2="70"/>';
  const w = A.wit(s.e, sup);
  g += '<circle class="pt2" cx="' + nl.X(w.v) + '" cy="70" r="5"/>';
  g += '<circle class="' + (bIn ? 'ptc' : 'pto') + '" cx="' + nl.X(b) + '" cy="52" r="6"/>';
  const yOk = sup ? s.y >= b - 1e-12 : s.y <= b + 1e-12;
  g += '<line class="mk" x1="' + nl.X(s.y) + '" y1="40" x2="' + nl.X(s.y) + '" y2="62" style="stroke:var(--ink)"/><text x="' + nl.X(s.y) + '" y="92">y</text>';
  const name = sup ? L('suprem', 'supremo') : L('ínfim', 'ínfimo'), bt = A.irr ? (sup ? '\\sq{2}' : '−\\sq{2}') : fmt(b, 2);
  const yFor = (k, side) => { const A2 = SUPS[k]; return side === 'sup' ? Math.min(A2.max, A2.sup + 0.1) : Math.max(A2.min, A2.inf - 0.1); };
  return (
    <LabShell title={L('Suprem i ínfim: la millor cota', 'Supremo e ínfimo: la mejor cota')}>
      <Chips attr="k" items={Object.keys(SUPS).map((k) => [k, M(SUPS[k].t)])} value={s.k} onChange={(k) => set({ k, y: yFor(k, s.side) })} />
      <div className="ctrl">
        <Tog attr="side" items={[['sup', L('suprem', 'supremo')], ['inf', L('ínfim', 'ínfimo')]]} value={s.side} onChange={(side) => set({ side, y: yFor(s.k, side) })} />
        <Slider id={id + '-y'} label={'y = ' + fmt(s.y, 2)} min={A.min} max={A.max} step="0.01" value={s.y} onChange={(v) => set({ y: v })} />
        <Slider id={id + '-e'} label={'ε = ' + fmt(s.e, 3)} min="0.005" max="0.5" step="0.005" value={s.e} onChange={(v) => set({ e: v })} />
      </div>
      <Html html={'<svg class="nl" viewBox="0 0 640 96" role="img" aria-label="' + name + '">' + g + '</svg>' +
        '<div class="explain">' +
        '<span>' + L('Conjunt: ', 'Conjunto: ') + M('A = ' + A.t) + '. ' + L('El ', 'El ') + name + ' ' + L('és ', 'es ') + M(bt) + ' ' + (bIn ? L('i <b>és</b> d\'A (llavors és el ' + (sup ? 'màxim' : 'mínim') + ').', 'y <b>es</b> de A (entonces es el ' + (sup ? 'máximo' : 'mínimo') + ').') : L('i <b>no és</b> d\'A: el ' + name + ' no ha de pertànyer al conjunt.', 'y <b>no es</b> de A: el ' + name + ' no tiene por qué pertenecer al conjunto.')) + '</span>' +
        '<span>' + M('y = ' + fmt(s.y, 2)) + (yOk ? L(' <b>és</b> una cota ' + (sup ? 'superior' : 'inferior') + ': cap element d\'A queda ' + (sup ? 'per sobre' : 'per sota') + '.', ' <b>es</b> una cota ' + (sup ? 'superior' : 'inferior') + ': ningún elemento de A queda ' + (sup ? 'por encima' : 'por debajo') + '.') : L(' <b>no és</b> cota: hi ha elements d\'A ' + (sup ? 'més grans' : 'més petits') + '.', ' <b>no es</b> cota: hay elementos de A ' + (sup ? 'mayores' : 'menores') + '.')) + L(' El ' + name + ' és la ' + (sup ? 'més petita' : 'més gran') + ' de les cotes (zona verda).', ' El ' + name + ' es la ' + (sup ? 'menor' : 'mayor') + ' de las cotas (zona verde).') + '</span>' +
        '<span>' + L('Condició 4 de les diapositives: per a ', 'Condición 4 de las diapositivas: para ') + M('ε = ' + fmt(s.e, 3)) + L(' hi ha un element d\'A a ', ' hay un elemento de A en ') + M(sup ? '(' + bt + ' − ε, ' + bt + ']' : '[' + bt + ', ' + bt + ' + ε)') + ': ' + M(w.t) + '. ' + L('Fes ε tan petit com vulguis: sempre en trobaràs un.', 'Haz ε tan pequeño como quieras: siempre encontrarás uno.') + '</span>' +
        (A.irr ? '<span><b>' + L('Per què ℝ i no ℚ', 'Por qué ℝ y no ℚ') + '</b>: ' + L('dins de ℚ aquest conjunt no té ' + name + ', perquè ', 'dentro de ℚ este conjunto no tiene ' + name + ', porque ') + M('\\sq{2} ∉ ℚ') + L('. L\'axioma del suprem és el que omple aquests forats.', '. El axioma del supremo es lo que llena estos huecos.') + '</span>' : '') + '</div>'} />
    </LabShell>
  );
}

/* ---------- propietats de ℝ: part sencera, arquimediana, densitat ---------- */
export function Reals({ id }) {
  const { L } = useLang();
  const C = useContent();
  const { M, fmt, NL } = C;
  const [s, set] = useSlot(id, () => ({ m: 'ent', x: 2.6, ax: 0.7, ay: 4.2, a: 0.31, b: 0.36 }));
  const sl = (k, label, min, max, step) => <Slider id={id + '-' + k} label={label} min={min} max={max} step={step} value={s[k]} onChange={(v) => set({ [k]: v })} />;
  let ctrl, html;
  if (s.m === 'ent') {
    const z = Math.floor(s.x), nl = NL(-4, 4, 640, 70, 40);
    ctrl = sl('x', 'x = ' + fmt(s.x, 2), '-3.9', '3.9', '0.05');
    html = '<svg class="nl" viewBox="0 0 640 70" role="img" aria-label="[x]">' + nl.axis(1, (v) => fmt(v, 0)) + '<line class="seg" x1="' + nl.X(z) + '" y1="40" x2="' + nl.X(z + 1) + '" y2="40"/><circle class="ptc" cx="' + nl.X(z) + '" cy="40" r="5"/><circle class="pto" cx="' + nl.X(z + 1) + '" cy="40" r="5"/><circle class="pt2" cx="' + nl.X(s.x) + '" cy="40" r="6"/><text class="big" x="' + nl.X(s.x) + '" y="22">x</text></svg>' +
      '<div class="explain"><span>' + M('[' + fmt(s.x, 2) + '] = ' + fmt(z, 0)) + ': ' + L('l\'únic enter z amb ', 'el único entero z con ') + M(fmt(z, 0) + ' ≤ ' + fmt(s.x, 2) + ' < ' + fmt(z + 1, 0)) + '.</span>' + (s.x < 0 ? '<span>' + L('Amb negatius, la part sencera va cap a l\'esquerra: ', 'Con negativos, la parte entera va hacia la izquierda: ') + M('[' + fmt(s.x, 2) + '] = ' + fmt(z, 0)) + L(', no ', ', no ') + M(fmt(Math.trunc(s.x), 0)) + '.</span>' : '') + '</div>';
  } else if (s.m === 'arq') {
    const n = Math.max(1, Math.ceil(s.ay / s.ax - 1e-12)), nl = NL(-0.5, 11, 640, 80, 46);
    let g = nl.axis(1, (v) => fmt(v, 0));
    for (let k = 0; k < n; k++) g += '<path d="M' + nl.X(k * s.ax) + ' 46 Q' + nl.X((k + 0.5) * s.ax) + ' 20 ' + nl.X((k + 1) * s.ax) + ' 46" fill="none" style="stroke:var(--accent);stroke-width:1.6"/>';
    g += '<line class="mk" x1="' + nl.X(s.ay) + '" y1="30" x2="' + nl.X(s.ay) + '" y2="60" style="stroke:var(--false)"/><text class="big" x="' + nl.X(s.ay) + '" y="76">y</text>';
    ctrl = <>{sl('ax', 'x = ' + fmt(s.ax, 2), '0.2', '2', '0.05')}{sl('ay', 'y = ' + fmt(s.ay, 2), '0.5', '10', '0.1')}</>;
    html = '<svg class="nl" viewBox="0 0 640 80" role="img" aria-label="' + L('Propietat arquimediana', 'Propiedad arquimediana') + '">' + g + '</svg>' +
      '<div class="explain"><span>' + L('Per petit que sigui el pas ', 'Por pequeño que sea el paso ') + M('x > 0') + L(', amb prou passos se supera qualsevol ', ', con suficientes pasos se supera cualquier ') + M('y') + ': ' + M('n = ' + n) + L(' compleix ', ' cumple ') + M(fmt(s.ay, 2) + ' ≤ ' + n + ' · ' + fmt(s.ax, 2) + ' = ' + fmt(n * s.ax, 2)) + '.</span></div>';
  } else {
    const a = Math.min(s.a, s.b - 0.005), b = s.b, n = Math.floor(1 / (b - a)) + 1, m = Math.floor(a * n) + 1, nl = NL(0, 1, 640, 70, 40);
    const g = nl.axis(0.1, (v) => fmt(v, 1)) + '<line class="seg2" x1="' + nl.X(a) + '" y1="40" x2="' + nl.X(b) + '" y2="40"/><circle class="pto" cx="' + nl.X(a) + '" cy="40" r="4"/><circle class="pto" cx="' + nl.X(b) + '" cy="40" r="4"/><circle class="pt" cx="' + nl.X(m / n) + '" cy="40" r="5"/><text class="big" x="' + nl.X(m / n) + '" y="22">m/n</text>';
    ctrl = <>{sl('a', 'a = ' + fmt(a, 3), '0', '0.99', '0.005')}{sl('b', 'b = ' + fmt(b, 3), '0.01', '1', '0.005')}</>;
    html = '<svg class="nl" viewBox="0 0 640 70" role="img" aria-label="' + L('Densitat de ℚ', 'Densidad de ℚ') + '">' + g + '</svg>' +
      '<div class="explain"><span>' + L('Entre ', 'Entre ') + M('a = ' + fmt(a, 3)) + L(' i ', ' y ') + M('b = ' + fmt(b, 3)) + L(' hi ha el racional ', ' está el racional ') + M('\\fr{' + m + '}{' + n + '} ≈ ' + fmt(m / n, 4)) + '. ' + L('Per estret que facis l\'interval, sempre n\'hi ha un (densitat de ℚ dins ℝ); i també un irracional.', 'Por estrecho que hagas el intervalo, siempre hay uno (densidad de ℚ dentro de ℝ); y también un irracional.') + '</span></div>';
  }
  return (
    <LabShell title={L('Propietats de ℝ que surten de l\'axioma del suprem', 'Propiedades de ℝ que salen del axioma del supremo')}>
      <Tog attr="m" items={[['ent', L('part sencera', 'parte entera')], ['arq', L('arquimediana', 'arquimediana')], ['den', L('densitat', 'densidad')]]} value={s.m} onChange={(m) => set({ m })} />
      <div className="ctrl">{ctrl}</div>
      <Html html={html} />
    </LabShell>
  );
}

/* ---------- intervals i entorns ---------- */
export function Interval({ id }) {
  const { L } = useLang();
  const C = useContent();
  const { M, fmt, NL } = C;
  const [s, set] = useSlot(id, () => ({ m: 'int', a: -1, b: 3, lc: true, rc: false, inf: '', c: 1, r: 1.5, x: 2 }));
  const sl = (k, label, min, max, step) => <Slider id={id + '-' + k} label={label} min={min} max={max} step={step} value={s[k]} onChange={(v) => set({ [k]: v })} />;
  const nl = NL(-6, 6, 640, 76, 44); let g = nl.axis(1, (v) => fmt(v, 0)), ctrl, info;
  if (s.m === 'int') {
    const a = Math.min(s.a, s.b), b = Math.max(s.a, s.b), lInf = s.inf === 'l', rInf = s.inf === 'r';
    const xl = lInf ? nl.X(-6) - 12 : nl.X(a), xr = rInf ? nl.X(6) + 12 : nl.X(b);
    g += '<line class="seg" x1="' + xl + '" y1="44" x2="' + xr + '" y2="44"/>';
    if (!lInf) g += '<circle class="' + (s.lc ? 'ptc' : 'pto') + '" cx="' + nl.X(a) + '" cy="44" r="6"/>';
    if (!rInf) g += '<circle class="' + (s.rc ? 'ptc' : 'pto') + '" cx="' + nl.X(b) + '" cy="44" r="6"/>';
    const inside = (lInf || (s.lc ? s.x >= a : s.x > a)) && (rInf || (s.rc ? s.x <= b : s.x < b));
    g += '<circle class="pt2" cx="' + nl.X(s.x) + '" cy="22" r="5"/><text x="' + nl.X(s.x) + '" y="12">x</text>';
    const L1 = lInf ? '(−∞' : (s.lc ? '[' : '(') + a, R1 = rInf ? '∞)' : b + (s.rc ? ']' : ')');
    const cond = (lInf ? '' : a + (s.lc ? ' ≤ ' : ' < ')) + 'x' + (rInf ? '' : (s.rc ? ' ≤ ' : ' < ') + b);
    const name = lInf ? (s.rc ? L('semirecta tancada d\'extrem b', 'semirrecta cerrada de extremo b') : L('semirecta oberta d\'extrem b', 'semirrecta abierta de extremo b')) : rInf ? (s.lc ? L('semirecta tancada d\'origen a', 'semirrecta cerrada de origen a') : L('semirecta oberta d\'origen a', 'semirrecta abierta de origen a')) :
      s.lc && s.rc ? L('interval tancat', 'intervalo cerrado') : !s.lc && !s.rc ? L('interval obert', 'intervalo abierto') : s.lc ? L('semiobert per la dreta', 'semiabierto por la derecha') : L('semiobert per l\'esquerra', 'semiabierto por la izquierda');
    const nat = !lInf && !rInf ? Z.range(Math.max(1, Math.ceil(a)), Math.floor(b)).filter((n) => (s.lc ? n >= a : n > a) && (s.rc ? n <= b : n < b)) : null;
    ctrl = (
      <>
        <div className="ctrl">{sl('a', 'a = ' + a, '-5', '5', '1')}{sl('b', 'b = ' + b, '-5', '5', '1')}{sl('x', 'x = ' + fmt(s.x, 1), '-6', '6', '0.5')}</div>
        <div className="ctrl">
          <button type="button" className="chipbtn" data-lc="" aria-pressed={s.lc} onClick={() => set({ lc: !s.lc })}>{L('a inclòs', 'a incluido')}</button>
          <button type="button" className="chipbtn" data-rc="" aria-pressed={s.rc} onClick={() => set({ rc: !s.rc })}>{L('b inclòs', 'b incluido')}</button>
          <button type="button" className="chipbtn" data-inf="l" aria-pressed={lInf} onClick={() => set({ inf: s.inf === 'l' ? '' : 'l' })}>−∞</button>
          <button type="button" className="chipbtn" data-inf="r" aria-pressed={rInf} onClick={() => set({ inf: s.inf === 'r' ? '' : 'r' })}>+∞</button>
        </div>
      </>
    );
    info = '<span>' + M(L1 + ', ' + R1 + ' = \\{x ∈ ℝ | ' + cond + '\\}') + ' · ' + name + '.</span><span>' + M('x = ' + fmt(s.x, 1)) + (inside ? L(' hi pertany.', ' pertenece.') : L(' no hi pertany.', ' no pertenece.')) + ' ' + L('Punt ple = extrem inclòs; punt buit = extrem exclòs.', 'Punto lleno = extremo incluido; punto vacío = extremo excluido.') + '</span>' +
      (nat ? '<span>' + L('El mateix interval dins de ℕ: ', 'El mismo intervalo dentro de ℕ: ') + M(nat.length ? '\\{' + nat.join(', ') + '\\}' : '∅') + L(' (un conjunt finit).', ' (un conjunto finito).') + '</span>' : '');
  } else {
    const c = s.c, r = s.r, d = Math.abs(s.x - c);
    g += '<line class="seg" x1="' + nl.X(c - r) + '" y1="44" x2="' + nl.X(c + r) + '" y2="44"/><circle class="' + (s.cl ? 'ptc' : 'pto') + '" cx="' + nl.X(c - r) + '" cy="44" r="6"/><circle class="' + (s.cl ? 'ptc' : 'pto') + '" cx="' + nl.X(c + r) + '" cy="44" r="6"/><circle class="pt" cx="' + nl.X(c) + '" cy="44" r="3"/><text x="' + nl.X(c) + '" y="30">a</text>' +
      '<circle class="pt2" cx="' + nl.X(s.x) + '" cy="20" r="5"/><text x="' + nl.X(s.x) + '" y="12">x</text>';
    const inside = s.cl ? d <= r + 1e-9 : d < r - 1e-9;
    ctrl = (
      <div className="ctrl">{sl('c', 'a = ' + fmt(c, 1), '-4', '4', '0.5')}{sl('r', 'r = ' + fmt(r, 1), '0.5', '3', '0.5')}{sl('x', 'x = ' + fmt(s.x, 1), '-6', '6', '0.5')}
        <button type="button" className="chipbtn" data-cl="" aria-pressed={!!s.cl} onClick={() => set({ cl: !s.cl })}>{L('tancat', 'cerrado')}</button></div>
    );
    info = '<span>' + M('B_{' + fmt(r, 1) + '}(' + fmt(c, 1) + ') = \\{x ∈ ℝ | |x − ' + fmt(c, 1) + '| ' + (s.cl ? '≤' : '<') + ' ' + fmt(r, 1) + '\\} = ' + (s.cl ? '[' : '(') + fmt(c - r, 1) + ', ' + fmt(c + r, 1) + (s.cl ? ']' : ')')) + '</span>' +
      '<span>' + M('|x − a| = |' + fmt(s.x, 1) + ' − ' + fmt(c, 1) + '| = ' + fmt(d, 1)) + ' ' + (inside ? (s.cl ? '≤' : '<') : (s.cl ? '>' : '≥')) + ' ' + fmt(r, 1) + ' → ' + (inside ? L('dins de l\'entorn', 'dentro del entorno') : L('fora', 'fuera')) + '. ' + L('|x − a| és la distància entre x i a.', '|x − a| es la distancia entre x y a.') + '</span>';
  }
  return (
    <LabShell title={L('Intervals i entorns a la recta real', 'Intervalos y entornos en la recta real')}>
      <Tog attr="m" items={[['int', L('intervals', 'intervalos')], ['ent', L('entorns', 'entornos')]]} value={s.m} onChange={(m) => set({ m })} />
      {ctrl}
      <Html html={'<svg class="nl" viewBox="0 0 640 76" role="img" aria-label="' + L('Recta real', 'Recta real') + '">' + g + '</svg><div class="explain">' + info + '</div>'} />
    </LabShell>
  );
}
