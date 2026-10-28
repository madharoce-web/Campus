import { useEffect, useRef, useState } from 'react';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import CE from '../engine/ce.js';
import { range } from '../engine/z.js';
import { getContent } from '../content/index.js';
import { UNITS_B } from '../content/consts.js';
import { useSlot } from '../store.js';
import { Field, Html, LabShell, Sel } from '../ui.jsx';

const reduceMotion = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- bits i combinacions ---------- */
export function Bits({ id }) {
  const { L } = useLang();
  const [s, set] = useSlot(id, { n: 3, N: 65536 });
  const n = s.n, tot = 2 ** n;
  const N = Math.max(1, Math.round(s.N)), k = N <= 1 ? 0 : Math.ceil(Math.log2(N) - 1e-12);
  return (
    <LabShell title={L('Quantes combinacions donen n bits?', '¿Cuántas combinaciones dan n bits?', 'How many combinations do n bits give?')}>
      <div className="ctrl"><label htmlFor={id + '-n'}>n = {n} bits</label><input type="range" id={id + '-n'} min="1" max="32" value={n} onChange={(e) => set({ n: +e.target.value })} /></div>
      <div className="bigmono">2<sup>{n}</sup> = {CE.fint(tot)}{L(' combinacions', ' combinaciones', ' combinations')}</div>
      {n <= 4 && <div className="slots">{range(0, tot - 1).map((v) => <span key={v} className="slot">{v.toString(2).padStart(n, '0')}</span>)}</div>}
      <p className="small">{L('Cada bit nou duplica la llista: es copien totes les combinacions anteriors, un cop amb un 0 al davant i un cop amb un 1.', 'Cada bit nuevo duplica la lista: se copian todas las combinaciones anteriores, una vez con un 0 delante y otra con un 1.', 'Each new bit doubles the list: all the previous combinations are copied, once with a 0 in front and once with a 1.')}</p>
      <hr className="sep" />
      <div className="ctrl">
        <label htmlFor={id + '-N'}>{L('Quants bits calen per a', '¿Cuántos bits hacen falta para', 'How many bits are needed for')}</label>
        <Field sync={s} type="number" id={id + '-N'} min="1" value={N} onCommit={(t) => { const v = +t; if (v >= 1 && v < 2 ** 53) { set({ N: v }); return true; } return false; }} />
        <span className="small">{L('valors diferents?', 'valores distintos?', 'different values?')}</span>
      </div>
      <div className="explain">
        <span>{L('Busquem la n més petita amb ', 'Buscamos la n más pequeña con ', 'We look for the smallest n with ')}2<sup>n</sup> ≥ {CE.fint(N)}: <b>n = {k}</b> (2<sup>{k}</sup> = {CE.fint(2 ** k)}{k ? <>, 2<sup>{k - 1}</sup> = {CE.fint(2 ** (k - 1))}{L(' no n\'hi ha prou', ' no basta', ' is not enough')}</> : null}).</span>
        {2 ** k === N
          ? <span>{L('És una potència exacta de 2: és el cas del repte de l\'activitat 1 (65 536 = 2¹⁶ → 16 bits).', 'Es una potencia exacta de 2: es el caso del reto de la actividad 1 (65 536 = 2¹⁶ → 16 bits).', 'It is an exact power of 2: it is the case of the challenge in activity 1 (65 536 = 2¹⁶ → 16 bits).')}</span>
          : <span>{L('No és potència de 2: sobren ', 'No es potencia de 2: sobran ', 'It is not a power of 2: there are ')}{CE.fint(2 ** k - N)}{L(' combinacions, però amb un bit menys no hi cabrien.', ' combinaciones, pero con un bit menos no cabrían.', ' spare combinations, but with one bit fewer they would not fit.')}</span>}
      </div>
    </LabShell>
  );
}

/* ---------- unitats: SI contra IEC ---------- */
export function Units({ id, cfg }) {
  const { ui: lang, L } = useLang();
  const C = getContent(lang).C;
  const [s, set] = useSlot(id, () => ({ x: cfg.x || 8000, a: cfg.a || 'Kb', b: cfg.b || 'KiB' }));
  let r = null; try { r = CE.convUnits(s.x, s.a, s.b); } catch { /* unitat desconeguda */ }
  const rows = [['K', 'Ki', 10, 3], ['M', 'Mi', 20, 6], ['G', 'Gi', 30, 9], ['T', 'Ti', 40, 12]];
  return (
    <LabShell title={L('Convertidor d\'unitats pas a pas', 'Convertidor de unidades paso a paso', 'Step-by-step unit converter')}>
      <div className="ctrl">
        <Field sync={s} id={id + '-x'} value={String(s.x).replace('.', ',')} aria-label={L('quantitat', 'cantidad', 'amount')}
          onCommit={(t) => { const v = C.readNum(t); if (v != null && v >= 0) { set({ x: v }); return true; } return false; }} />
        <Sel id={id + '-a'} opts={UNITS_B} value={s.a} onChange={(v) => set({ a: v })} />
        <span>→</span>
        <Sel id={id + '-b'} opts={UNITS_B} value={s.b} onChange={(v) => set({ b: v })} />
      </div>
      <Html html={r ? C.stepsE(r.steps) : C.fb('warn', L('Escriu un nombre.', 'Escribe un número.', 'Type a number.'))} />
      <Rich as="p" className="small" html={L('Mètode: <b>primer a bits o bytes</b> (multiplicant pel prefix), <b>després bits ↔ bytes</b> (× 8 o ÷ 8) i <b>finalment a la unitat demanada</b> (dividint pel prefix).', 'Método: <b>primero a bits o bytes</b> (multiplicando por el prefijo), <b>después bits ↔ bytes</b> (× 8 o ÷ 8) y <b>finalmente a la unidad pedida</b> (dividiendo por el prefijo).', 'Method: <b>first to bits or bytes</b> (multiplying by the prefix), <b>then bits ↔ bytes</b> (× 8 or ÷ 8) and <b>finally to the requested unit</b> (dividing by the prefix).')} />
      <div className="lbl-s">{L('La diferència entre prefixos creix', 'La diferencia entre prefijos crece', 'The difference between prefixes grows')}</div>
      <div className="tbl"><table className="ladder">
        <thead><tr><th></th><th>{L('binari (bytes)', 'binario (bytes)', 'binary (bytes)')}</th><th>{L('decimal (bytes)', 'decimal (bytes)', 'decimal (bytes)')}</th><th>{L('diferència', 'diferencia', 'difference')}</th><th></th></tr></thead>
        <tbody>
          {rows.map(([d, bn, e2, e10]) => {
            const pct = (2 ** e2 / 10 ** e10 - 1) * 100;
            return <tr key={d}><td>1 {bn}B / 1 {d}B</td><td>{CE.fint(2 ** e2)}</td><td>{CE.fint(10 ** e10)}</td><td>+{CE.fnum(pct, 2)} %</td><td className="p-tl"><span className="gap" style={{ width: Math.round(pct * 9) + 'px' }}></span></td></tr>;
          })}
        </tbody>
      </table></div>
      <p className="small">{L('Per això un disc de «1 TB» el sistema operatiu el mostra com ≈ 931 GiB: no falta res, és el mateix nombre de bytes comptat amb potències de 2.', 'Por eso un disco de «1 TB» el sistema operativo lo muestra como ≈ 931 GiB: no falta nada, es el mismo número de bytes contado con potencias de 2.', 'That is why a “1 TB” disk is shown by the operating system as ≈ 931 GiB: nothing is missing, it is the same number of bytes counted with powers of 2.')}</p>
    </LabShell>
  );
}

/* ---------- velocitat de transferència ---------- */
export function Transfer({ id, cfg }) {
  const { ui: lang, L } = useLang();
  const C = getContent(lang).C;
  const [s, set] = useSlot(id, () => ({ size: 1.5, su: 'GiB', v: 200, vu: 'Mb', eff: 100, run: false, ...cfg }));
  const [prog, setProg] = useState(0);
  const timer = useRef(null);
  useEffect(() => () => clearInterval(timer.current), []);
  let r = null; try { r = CE.transfer(s.size, s.su, s.v, s.vu); } catch { /* unitat desconeguda */ }
  const real = r ? r.t / (s.eff / 100) : 0;
  // com a l'original, qualsevol canvi torna a pintar la barra buida
  const change = (patch) => { setProg(0); set(patch); };
  const run = () => {
    clearInterval(timer.current); setProg(0);
    const dur = Math.min(Math.max(real, 0.5), 6) * 1000, t0 = performance.now();
    timer.current = setInterval(() => { const f = Math.min(1, (performance.now() - t0) / dur); setProg(f); if (f >= 1) clearInterval(timer.current); }, 40);
  };
  return (
    <LabShell title={L('Quant tardarà la descàrrega?', '¿Cuánto tardará la descarga?', 'How long will the download take?')}>
      <div className="ctrl"><span className="lbl-s">{L('Fitxer', 'Fichero', 'File')}</span>
        <Field sync={s} id={id + '-s'} value={String(s.size).replace('.', ',')} onCommit={(t) => { const x = C.readNum(t); if (x > 0) { change({ size: x }); return true; } return false; }} />
        <Sel id={id + '-su'} opts={['KB', 'MB', 'GB', 'TB', 'KiB', 'MiB', 'GiB', 'TiB', 'Mb', 'Gb']} value={s.su} onChange={(v) => change({ su: v })} />
      </div>
      <div className="ctrl"><span className="lbl-s">{L('Connexió', 'Conexión', 'Connection')}</span>
        <Field sync={s} id={id + '-v'} value={String(s.v).replace('.', ',')} onCommit={(t) => { const x = C.readNum(t); if (x > 0) { change({ v: x }); return true; } return false; }} />
        <Sel id={id + '-vu'} opts={['Kb', 'Mb', 'Gb', 'KB', 'MB']} value={s.vu} onChange={(v) => change({ vu: v })} /><span>/s</span>
      </div>
      {r && <Html html={C.stepsE(r.steps)} />}
      <div className="ctrl">
        <label htmlFor={id + '-e'}>{L('Velocitat real', 'Velocidad real', 'Actual speed')} = {s.eff} %</label>
        <input type="range" id={id + '-e'} min="40" max="100" step="5" value={s.eff} onChange={(e) => change({ eff: +e.target.value })} />
        <button className="btn" type="button" onClick={run}>{L('Simula la descàrrega', 'Simula la descarga', 'Simulate the download')}</button>
      </div>
      <div className="prog"><i id={id + '-p'} style={{ width: prog * 100 + '%' }}></i></div>
      <div className="explain">
        <span>{L('Temps teòric: ', 'Tiempo teórico: ', 'Theoretical time: ')}<b>{r ? CE.fnum(r.t, 2) : '—'} s</b>. {L(`Amb un ${s.eff} % de la velocitat: `, `Con un ${s.eff} % de la velocidad: `, `At ${s.eff} % of the speed: `)}<b>{CE.fnum(real, 2)} s</b>.</span>
        <span>{L('La velocitat que anuncia l\'operador és el màxim teòric; la real sempre és inferior (és el repte de 600 Mb/s i 60 MB/s). La simulació va accelerada si el temps és llarg.', 'La velocidad que anuncia el operador es el máximo teórico; la real siempre es inferior (es el reto de 600 Mb/s y 60 MB/s). La simulación va acelerada si el tiempo es largo.', 'The speed advertised by the provider is the theoretical maximum; the real one is always lower (it is the challenge of 600 Mb/s and 60 MB/s). The simulation is sped up if the time is long.')}</span>
      </div>
    </LabShell>
  );
}

/* ---------- Von Neumann contra Harvard ---------- */
const VNPROG = [['LOAD R1, A', 'r'], ['LOAD R2, B', 'r'], ['ADD R3, R1, R2', ''], ['STORE R3, C', 'w']];
function vnCycles(harv) {
  const cyc = [];
  if (!harv) VNPROG.forEach((p, i) => { cyc.push({ f: i }); if (p[1]) cyc.push({ d: i }); });
  else { let pend = null; VNPROG.forEach((p, i) => { cyc.push({ f: i, d: pend }); pend = p[1] ? i : null; }); if (pend != null) cyc.push({ d: pend }); cyc.forEach((c) => { if (c.d == null) delete c.d; }); }
  return cyc;
}
export function VonNeumann({ id }) {
  const { L } = useLang();
  const [s, set] = useSlot(id, { harv: false, k: 0 });
  const cyc = vnCycles(s.harv), k = Math.min(s.k, cyc.length), cur = k ? cyc[k - 1] : null;
  const fOn = cur && cur.f != null, dOn = cur && cur.d != null;
  let msg;
  if (!cur) msg = L('Prem «Cicle següent». Cada cicle, la CPU pot fer servir el camí cap a la memòria una vegada.', 'Pulsa «Ciclo siguiente». En cada ciclo, la CPU puede usar el camino hacia la memoria una vez.', 'Press “Next cycle”. In each cycle, the CPU can use the path to memory once.');
  else if (cur.f != null && cur.d != null) msg = L(`Cicle ${k}: llegeix la instrucció I${cur.f + 1} <b>i alhora</b> accedeix a la dada de I${cur.d + 1}, perquè hi ha dos camins.`, `Ciclo ${k}: lee la instrucción I${cur.f + 1} <b>y a la vez</b> accede al dato de I${cur.d + 1}, porque hay dos caminos.`, `Cycle ${k}: it reads instruction I${cur.f + 1} <b>and at the same time</b> accesses the data of I${cur.d + 1}, because there are two paths.`);
  else if (cur.f != null) msg = L(`Cicle ${k}: la CPU obté la instrucció I${cur.f + 1} (${VNPROG[cur.f][0]}).`, `Ciclo ${k}: la CPU obtiene la instrucción I${cur.f + 1} (${VNPROG[cur.f][0]}).`, `Cycle ${k}: the CPU fetches instruction I${cur.f + 1} (${VNPROG[cur.f][0]}).`) + (!s.harv && VNPROG[cur.f][1] ? L(' Al cicle següent necessitarà la dada pel mateix camí.', ' En el ciclo siguiente necesitará el dato por el mismo camino.', ' In the next cycle it will need the data along the same path.') : '');
  else msg = L(`Cicle ${k}: accés a la dada de I${cur.d + 1}.`, `Ciclo ${k}: acceso al dato de I${cur.d + 1}.`, `Cycle ${k}: data access for I${cur.d + 1}.`) + (!s.harv ? L(' Mentrestant <b>no</b> es pot anar a buscar la instrucció següent: és el coll d\'ampolla.', ' Mientras tanto <b>no</b> se puede ir a buscar la instrucción siguiente: es el cuello de botella.', ' Meanwhile the next instruction <b>cannot</b> be fetched: it is the bottleneck.') : '');
  return (
    <LabShell title={L('Von Neumann i Harvard, cicle a cicle', 'Von Neumann y Harvard, ciclo a ciclo', 'Von Neumann and Harvard, cycle by cycle')}>
      <div className="tog" role="group">
        <button type="button" aria-pressed={!s.harv} onClick={() => set({ harv: false, k: 0 })}>Von Neumann</button>
        <button type="button" aria-pressed={s.harv} onClick={() => set({ harv: true, k: 0 })}>Harvard</button>
      </div>
      <div className="codeL">
        {VNPROG.map((p, i) => (
          <div key={i} className={cur && (cur.f === i || cur.d === i) ? 'cur' : ''}><span>I{i + 1}</span><span>{p[0]}</span><span className="muted">{p[1] === 'r' ? L('llegeix una dada', 'lee un dato', 'reads a piece of data') : p[1] === 'w' ? L('escriu una dada', 'escribe un dato', 'writes a piece of data') : L('sense dada de memòria', 'sin dato de memoria', 'no memory data')}</span></div>
        ))}
      </div>
      <svg className="bus" viewBox="0 0 560 200" role="img" aria-label={s.harv ? 'Harvard' : 'Von Neumann'}>
        <rect className={'blk' + (cur ? ' on' : '')} x="20" y="60" width="130" height="80" rx="10" /><text x="85" y="92">CPU</text><text className="sm" x="85" y="116">R1 R2 R3</text>
        {!s.harv ? (
          <>
            <line className={'ln' + (fOn ? ' on' : dOn ? ' on2' : '')} x1="150" y1="100" x2="380" y2="100" /><text className="sm" x="265" y="84">{L('un sol camí', 'un solo camino', 'a single path')}</text>
            <rect className={'blk' + (cur ? ' on' : '')} x="380" y="30" width="160" height="140" rx="10" /><text x="460" y="56">{L('Memòria', 'Memoria', 'Memory')}</text><text className="sm" x="460" y="84">{L('instruccions', 'instrucciones', 'instructions')}</text><text className="sm" x="460" y="104">+</text><text className="sm" x="460" y="124">{L('dades A, B, C', 'datos A, B, C', 'data A, B, C')}</text>
          </>
        ) : (
          <>
            <line className={'ln' + (fOn ? ' on' : '')} x1="150" y1="80" x2="380" y2="50" /><line className={'ln' + (dOn ? ' on2' : '')} x1="150" y1="120" x2="380" y2="150" />
            <rect className={'blk' + (fOn ? ' on' : '')} x="380" y="15" width="160" height="70" rx="10" /><text x="460" y="40">{L('Mem. instruccions', 'Mem. instrucciones', 'Instr. memory')}</text><text className="sm" x="460" y="62">I1 … I4</text>
            <rect className={'blk' + (dOn ? ' on' : '')} x="380" y="115" width="160" height="70" rx="10" /><text x="460" y="140">{L('Mem. dades', 'Mem. datos', 'Data memory')}</text><text className="sm" x="460" y="162">A, B, C</text>
          </>
        )}
      </svg>
      <div className="lanes">
        <div className="lane"><span>{L('Instruccions', 'Instrucciones', 'Instructions')}</span><div className="cells">{cyc.map((c, i) => <span key={i} className={i < k && c.f != null ? 'done' : ''}>{c.f != null ? 'I' + (c.f + 1) : ''}</span>)}</div></div>
        <div className="lane"><span>{L('Dades', 'Datos', 'Data')}</span><div className="cells">{cyc.map((c, i) => <span key={i} className={i < k && c.d != null ? 'alt' : ''}>{c.d != null ? 'D' + (c.d + 1) : ''}</span>)}</div></div>
        <div className="lane"><span>{L('Cicle', 'Ciclo', 'Cycle')}</span><div className="cells">{cyc.map((c, i) => <span key={i}>{i + 1}</span>)}</div></div>
      </div>
      <div className="row">
        <button type="button" className="btn primary" disabled={k >= cyc.length} onClick={() => set({ k: k + 1 })}>{L('Cicle següent', 'Ciclo siguiente', 'Next cycle')}</button>
        <button type="button" className="btn ghost" onClick={() => set({ k: cyc.length })}>{L('Tot', 'Todo', 'All')}</button>
        <button type="button" className="btn ghost" onClick={() => set({ k: 0 })}>{L('Reinicia', 'Reinicia', 'Restart')}</button>
      </div>
      <div className="explain">
        <Rich as="span" html={msg} />
        {k >= cyc.length && <span><b>{cyc.length}{L(' cicles', ' ciclos', ' cycles')}</b> {s.harv ? L('amb Harvard, contra 7 amb Von Neumann: la lectura d\'instruccions i l\'accés a dades se solapen.', 'con Harvard, contra 7 con Von Neumann: la lectura de instrucciones y el acceso a datos se solapan.', 'with Harvard, against 7 with Von Neumann: instruction fetch and data access overlap.') : L('amb Von Neumann. Prova Harvard: el mateix programa en fa 5.', 'con Von Neumann. Prueba Harvard: el mismo programa hace 5.', 'with Von Neumann. Try Harvard: the same program takes 5.')}</span>}
      </div>
    </LabShell>
  );
}

/* ---------- memòria cau: encerts i fallades ---------- */
const CPAT = { loop3: 'A B C A B C A B C A B C', seq: 'A B C D E F G H I J K L', loop6: 'A B C D E F A B C D E F', mix: 'A B A C A D A B A C A D' };
export function Cache({ id }) {
  const { L } = useLang();
  const [s, set] = useSlot(id, { p: 'loop3', k: 0 });
  const seq = CPAT[s.p].split(' '), cap = 4; const cache = []; const res = []; let snap = null;
  seq.forEach((x, i) => { const at = cache.indexOf(x); if (at >= 0) { cache.splice(at, 1); cache.push(x); res.push(1); } else { if (cache.length >= cap) cache.shift(); cache.push(x); res.push(0); } if (i === s.k - 1) snap = cache.slice(); });
  const k = s.k, h = res.slice(0, k).filter((x) => x).length;
  const END = { loop3: L('Després de les 3 primeres fallades, tot són encerts: els bucles repeteixen dades, i per això la cau val la pena.', 'Después de los 3 primeros fallos, todo son aciertos: los bucles repiten datos, y por eso la caché vale la pena.', 'After the first 3 misses, everything is a hit: loops repeat data, and that is why the cache is worth it.'), mix: L('La dada A es fa servir tota l\'estona i sempre hi és.', 'El dato A se usa todo el rato y siempre está.', 'Data item A is used all the time and is always there.'), seq: L('Si mai es repeteix res, la cau no ajuda gens: tot són fallades.', 'Si nunca se repite nada, la caché no ayuda nada: todo son fallos.', 'If nothing ever repeats, the cache does not help at all: everything is a miss.'), loop6: L('El bucle té 6 dades i la cau només 4: cada dada surt just abans de tornar-la a necessitar. Per això hi ha nivells més grans (L2, L3).', 'El bucle tiene 6 datos y la caché solo 4: cada dato sale justo antes de volver a necesitarlo. Por eso hay niveles más grandes (L2, L3).', 'The loop has 6 data items and the cache only 4: each item leaves just before it is needed again. That is why there are larger levels (L2, L3).') };
  return (
    <LabShell title={L('Per què la memòria cau funciona', 'Por qué la memoria caché funciona', 'Why cache memory works')}>
      <div className="ctrl">
        {[['loop3', L('bucle de 3 dades', 'bucle de 3 datos', '3-item loop')], ['mix', L('una dada molt usada', 'un dato muy usado', 'one heavily used item')], ['seq', L('recorregut sense repetir', 'recorrido sin repetir', 'traversal without repeats')], ['loop6', L('bucle massa gran', 'bucle demasiado grande', 'loop too large')]].map(([kk, t]) => (
          <button key={kk} type="button" className="chipbtn" aria-pressed={s.p === kk} onClick={() => set({ p: kk, k: 0 })}>{t}</button>
        ))}
      </div>
      <Rich as="p" className="small" html={L('La CPU demana aquestes dades en ordre. La cau té 4 posicions: si la dada ja hi és, és un <b>encert</b> (ràpid); si no, una <b>fallada</b> i cal anar a la RAM (lent). Quan és plena, surt la que fa més temps que no s\'usa.', 'La CPU pide estos datos en orden. La caché tiene 4 posiciones: si el dato ya está, es un <b>acierto</b> (rápido); si no, un <b>fallo</b> y hay que ir a la RAM (lento). Cuando está llena, sale la que hace más tiempo que no se usa.', 'The CPU requests these data in order. The cache has 4 slots: if the item is already there, it is a <b>hit</b> (fast); if not, a <b>miss</b> and you have to go to the RAM (slow). When it is full, the least recently used item leaves.')} />
      <div className="slots">{seq.map((x, i) => <span key={i} className={'slot' + (i < k ? (res[i] ? ' hit' : ' miss') : '') + (i === k - 1 ? ' cur' : '')}>{x}</span>)}</div>
      <div className="ctrl"><span className="lbl-s">{L('Contingut de la cau', 'Contenido de la caché', 'Cache contents')}</span><div className="slots">{range(0, 3).map((i) => <span key={i} className="slot">{(snap || [])[i] || '—'}</span>)}</div></div>
      <div className="row">
        <button type="button" className="btn primary" disabled={k >= seq.length} onClick={() => set({ k: k + 1 })}>{L('Accés següent', 'Acceso siguiente', 'Next access')}</button>
        <button type="button" className="btn ghost" onClick={() => set({ k: seq.length })}>{L('Tot', 'Todo', 'All')}</button>
        <button type="button" className="btn ghost" onClick={() => set({ k: 0 })}>{L('Reinicia', 'Reinicia', 'Restart')}</button>
      </div>
      <div className="explain">
        <span>{L('Encerts: ', 'Aciertos: ', 'Hits: ')}<b>{h} / {k}</b>{k ? ' (' + Math.round(h / k * 100) + ' %)' : ''}.</span>
        {k >= seq.length && <span>{END[s.p]}</span>}
      </div>
    </LabShell>
  );
}

/* ---------- Flynn: SISD, SIMD, MIMD ---------- */
export function Flynn({ id }) {
  const { L } = useLang();
  const [s, set] = useSlot(id, { m: 'SISD', k: 0 });
  const timer = useRef(null);
  useEffect(() => () => clearInterval(timer.current), []);
  const PLAN = { SISD: { cyc: 8, lanes: [['Nucli 1', 1, 8]] }, SIMD: { cyc: 2, lanes: [['Nucli 1', 4, 8]] }, MIMD: { cyc: 3, lanes: [['Nucli 1', 1, 3, L('brillantor', 'brillo', 'brightness')], ['Nucli 2', 1, 3, L('comprimir', 'comprimir', 'compress')], ['Nucli 3', 1, 3, L('música', 'música', 'music')], ['Nucli 4', 1, 3, L('navegador', 'navegador', 'browser')]] } };
  const P = PLAN[s.m], k = s.k;
  const go = () => {
    clearInterval(timer.current); set({ k: 0 });
    let kk = 0; const cyc = P.cyc;
    timer.current = setInterval(() => { kk++; set({ k: kk }); if (kk >= cyc) clearInterval(timer.current); }, reduceMotion() ? 1 : 450);
  };
  const TXT = { SISD: L('<b>Una instrucció, una dada.</b> Cal sumar 10 als 8 píxels p1…p8: un sol flux fa un píxel per cicle.', '<b>Una instrucción, un dato.</b> Hay que sumar 10 a los 8 píxeles p1…p8: un solo flujo hace un píxel por ciclo.', '<b>One instruction, one data item.</b> 10 must be added to the 8 pixels p1…p8: a single stream does one pixel per cycle.'), SIMD: L('<b>Una instrucció, moltes dades.</b> La mateixa ordre «suma 10» s\'aplica a 4 píxels alhora.', '<b>Una instrucción, muchos datos.</b> La misma orden «suma 10» se aplica a 4 píxeles a la vez.', '<b>One instruction, many data items.</b> The same “add 10” command is applied to 4 pixels at once.'), MIMD: L('<b>Moltes instruccions, moltes dades.</b> Quatre nuclis fan feines diferents al mateix temps.', '<b>Muchas instrucciones, muchos datos.</b> Cuatro núcleos hacen trabajos distintos al mismo tiempo.', '<b>Many instructions, many data items.</b> Four cores do different jobs at the same time.') };
  const END = { SISD: L('8 cicles per a 8 píxels.', '8 ciclos para 8 píxeles.', '8 cycles for 8 pixels.'), SIMD: L('2 cicles per a 8 píxels: per això les GPU (SIMD) són tan bones amb imatges i matrius.', '2 ciclos para 8 píxeles: por eso las GPU (SIMD) son tan buenas con imágenes y matrices.', '2 cycles for 8 pixels: that is why GPUs (SIMD) are so good with images and matrices.'), MIMD: L('Cada nucli té el seu flux d\'instruccions. Si comparteixen la RAM és un multiprocessador; si són ordinadors en xarxa, un clúster.', 'Cada núcleo tiene su flujo de instrucciones. Si comparten la RAM es un multiprocesador; si son ordenadores en red, un clúster.', 'Each core has its own instruction stream. If they share the RAM it is a multiprocessor; if they are networked computers, a cluster.') };
  return (
    <LabShell title={L('Classificació per paral·lelisme', 'Clasificación por paralelismo', 'Classification by parallelism')}>
      <div className="tog" role="group">
        {['SISD', 'SIMD', 'MIMD'].map((m) => <button key={m} type="button" aria-pressed={s.m === m} onClick={() => { clearInterval(timer.current); set({ m, k: 0 }); }}>{m}</button>)}
      </div>
      <Rich as="p" className="small" html={TXT[s.m]} />
      <div className="lanes">
        {P.lanes.map(([nm, per, tot, task]) => (
          <div key={nm} className="lane"><span>{nm.replace('Nucli', L('Nucli', 'Núcleo', 'Core')) + (task ? ' · ' + task : '')}</span><div className="cells">{range(1, tot).map((j) => <span key={j} className={j <= k * per ? (task ? 'alt' : 'done') : ''}>{task ? '' : 'p' + j}</span>)}</div></div>
        ))}
      </div>
      <div className="row"><button type="button" className="btn primary" onClick={go}>{L('Executa', 'Ejecuta', 'Runs')}</button><span className="small muted">{L('Cicles: ', 'Ciclos: ', 'Cycles: ')}{k} / {P.cyc}</span></div>
      {k >= P.cyc && <div className="fb info">{END[s.m]}</div>}
    </LabShell>
  );
}

/* ---------- compilar o interpretar ---------- */
export function Compila({ id }) {
  const { L } = useLang();
  const [s, set] = useSlot(id, { m: 'c', fixed: false, out: null });
  const lines = ['print("Inici")', 'print("Calculant...")', s.fixed ? 'print(resultat)' : 'print(resultt)', 'print("Final")'];
  // la sortida es torna a escriure en l'idioma actual
  let out = null;
  if (s.out) {
    const err = (t) => <span className="err">{t}</span>;
    if (s.out.m === 'c') out = s.out.fixed ? <>{L('$ compilar programa → programa traduït creat\n$ executar\n', '$ compilar programa → programa traducido creado\n$ ejecutar\n', '$ compile program → translated program created\n$ run\n')}{'Inici\nCalculant...\n42\nFinal'}</> : <>{L('$ compilar programa\n', '$ compilar programa\n', '$ compile program\n')}{err(L('error a la línia 3: «resultt» no està declarat\ncap programa traduït: no s\'executa res', 'error en la línea 3: «resultt» no está declarado\nningún programa traducido: no se ejecuta nada', 'error on line 3: “resultt” is not declared\nno translated program: nothing runs'))}</>;
    else out = <>{'Inici\nCalculant...\n'}{s.out.fixed ? '42\nFinal' : err(L('error a la línia 3: el nom «resultt» no existeix', 'error en la línea 3: el nombre «resultt» no existe', 'error on line 3: the name “resultt” does not exist'))}</>;
  }
  return (
    <LabShell title={L('Compilació i interpretació davant d\'un error', 'Compilación e interpretación ante un error', 'Compilation and interpretation when there is an error')}>
      <div className="ctrl">
        <div className="tog" role="group">
          <button type="button" aria-pressed={s.m === 'c'} onClick={() => set({ m: 'c', out: null })}>{L('Compilat', 'Compilado', 'Compiled')}</button>
          <button type="button" aria-pressed={s.m === 'i'} onClick={() => set({ m: 'i', out: null })}>{L('Interpretat', 'Interpretado', 'Interpreted')}</button>
        </div>
        <button type="button" className="chipbtn" aria-pressed={s.fixed} onClick={() => set({ fixed: !s.fixed, out: null })}>{L('Error corregit', 'Error corregido', 'Error fixed')}</button>
      </div>
      <div className="codeL">{lines.map((t, i) => <div key={i} className={!s.fixed && i === 2 ? 'bad' : ''}><span>{i + 1}</span><span>{t}</span></div>)}</div>
      <div className="row"><button type="button" className="btn primary" onClick={() => set({ out: { m: s.m, fixed: s.fixed } })}>{L('Executa', 'Ejecuta', 'Runs')}</button></div>
      <div className="console" aria-live="polite">{out}</div>
      <Rich as="p" className="small" html={L('<b>Compilat:</b> el traductor llegeix el programa sencer <i>abans</i> d\'executar res; amb un error no es genera el programa traduït i no s\'executa cap línia. <b>Interpretat:</b> l\'intèrpret tradueix i executa línia a línia; l\'error apareix quan s\'hi arriba.', '<b>Compilado:</b> el traductor lee el programa entero <i>antes</i> de ejecutar nada; con un error no se genera el programa traducido y no se ejecuta ninguna línea. <b>Interpretado:</b> el intérprete traduce y ejecuta línea a línea; el error aparece al llegar a ella.', '<b>Compiled:</b> the translator reads the whole program <i>before</i> running anything; with an error the translated program is not produced and no line runs. <b>Interpreted:</b> the interpreter translates and runs line by line; the error appears when that line is reached.')} />
    </LabShell>
  );
}
