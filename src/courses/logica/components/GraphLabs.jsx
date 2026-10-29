/**
 * Laboratoris de grafs de Lògica i grafs. Fan servir el motor (graphs/model.js) i el dibuix interactiu
 * (graphs/GraphView.jsx). Cada laboratori és autònom: { t: 'lab', id: 'g-…', props? } en una lliçó.
 */
import { useMemo, useState } from 'react';
import { useLang } from '../../../lib/i18n.jsx';
import GraphView from '../graphs/GraphView.jsx';
import {
  adjMatrix, bfs, bipartition, chromatic, components, cpm, crossings, degrees, dfs, dijkstra, eulerInfo, faces, graph,
  hamilton, hierholzer, invariants, isIsomorphism, isomorphism, kruskal, pathTo, planarBounds, prim, sameEdge, welshPowell,
} from '../graphs/model.js';
import { circle, grid, pathEdges, PALETTE } from '../graphs/svg.js';
import { PRESETS, PROJECTE, cycle, make, bipartiteK } from '../graphs/presets.js';
import { connected } from '../graphs/random.js';
import { projectGraph, ganttSvg } from '../graphs/project.js';
import Rich from '../../../lib/Rich.jsx';
import { rngOf, newSeed } from '../../_kit/bank.js';

const W = 340, H = 240;
const posOf = (p) => p.pos || circle(p.G.V, { w: W, h: H });
const scale = (pos) => Object.fromEntries(Object.entries(pos).map(([v, [x, y]]) => [v, [Math.round((x * W) / 320), Math.round((y * H) / 230)]]));
const preset = (k) => ({ G: PRESETS[k].G, pos: scale(posOf(PRESETS[k])) });

function Lab({ id, title, children }) {
  return (
    <div className="gl" data-glab={id}>
      <p className="gl-h">{title}</p>
      {children}
    </div>
  );
}
function Pick({ value, onChange, opts, label }) {
  return (
    <label className="gl-pick"><span>{label}</span>
      <select className="am-input" value={value} onChange={(e) => onChange(e.target.value)}>
        {opts.map(([v, t]) => <option key={v} value={v}>{t}</option>)}
      </select>
    </label>
  );
}
// on: botó de dos estats (aria-pressed); primary: l'acció principal del laboratori
const Btn = ({ children, on, primary, ...p }) => <button type="button" className={'gl-b' + (on || primary ? ' is-on' : '')} aria-pressed={on === undefined ? undefined : !!on} {...p}>{children}</button>;
function Matrix({ V, M }) {
  return (
    <table className="gl-mat"><thead><tr><th />{V.map((v) => <th key={v}>{v}</th>)}</tr></thead>
      <tbody>{M.map((r, i) => <tr key={i}><th>{V[i]}</th>{r.map((x, j) => <td key={j} className={x ? 'is-on' : undefined}>{x}</td>)}</tr>)}</tbody>
    </table>
  );
}

/* ---------- 1. editor ---------- */
export function GEditor() {
  const { L } = useLang();
  const start = preset('casa');
  const [G, setG] = useState(start.G);
  const [pos, setPos] = useState(start.pos);
  const [mode, setMode] = useState('edge');
  const [pick, setPick] = useState(null);
  const free = 'ABCDEFGHI'.split('').find((v) => !G.V.includes(v));
  const setDir = (dir) => setG({ ...G, dir });
  const onBlank = (p) => {
    if (mode !== 'vertex' || !free) return;
    setG({ ...G, V: [...G.V, free].sort() });
    setPos({ ...pos, [free]: p });
  };
  const onVertex = (v) => {
    if (mode === 'del') { setG({ ...G, V: G.V.filter((x) => x !== v), E: G.E.filter((e) => !e.includes(v)) }); return; }
    if (mode !== 'edge') return;
    if (pick == null) { setPick(v); return; }
    setG({ ...G, E: [...G.E, [pick, v]] });
    setPick(null);
  };
  const onEdge = (i) => { if (mode === 'del') setG({ ...G, E: G.E.filter((_, k) => k !== i) }); };
  const d = degrees(G), comps = components(G), bip = bipartition(G), eu = eulerInfo(G);
  const sum = G.dir ? G.E.length : Object.values(d).reduce((a, b) => a + b, 0);
  const euT = { circuit: L('té circuit d\'Euler', 'tiene circuito de Euler', 'has an Euler circuit'), path: L('té camí d\'Euler', 'tiene camino de Euler', 'has an Euler path'), none: L('no en té', 'no tiene', 'has neither') };
  const MODES = [['edge', L('Afegeix costats', 'Añade lados', 'Add edges')], ['vertex', L('Afegeix vèrtexs', 'Añade vértices', 'Add vertices')], ['move', L('Mou', 'Mueve', 'Move')], ['del', L('Esborra', 'Borra', 'Delete')]];
  return (
    <Lab id="g-editor" title={L('Laboratori · Construeix un graf', 'Laboratorio · Construye un grafo', 'Lab · Build a graph')}>
      <div className="gl-bar">
        {MODES.map(([m, t]) => <Btn key={m} on={mode === m} data-m={m} onClick={() => { setMode(m); setPick(null); }}>{t}</Btn>)}
        <label className="gl-chk"><input type="checkbox" checked={!!G.dir} onChange={(e) => setDir(e.target.checked)} /> {L('Dirigit', 'Dirigido', 'Directed')}</label>
        <Btn data-act="clear" onClick={() => { setG(graph([], [], G.dir)); setPos({}); setMode('vertex'); }}>{L('Buida', 'Vacía', 'Clear')}</Btn>
      </div>
      <p className="gl-hint">{mode === 'edge' ? (pick ? L(`Ara clica el segon extrem (el mateix vèrtex fa un bucle). Primer: ${pick}`, `Ahora pulsa el segundo extremo (el mismo vértice hace un bucle). Primero: ${pick}`, `Now click the second end (the same vertex makes a loop). First: ${pick}`) : L('Clica dos vèrtexs per unir-los.', 'Pulsa dos vértices para unirlos.', 'Click two vertices to join them.'))
        : mode === 'vertex' ? L('Clica un espai buit per afegir-hi un vèrtex.', 'Pulsa un espacio vacío para añadir un vértice.', 'Click an empty spot to add a vertex.')
          : mode === 'move' ? L('Arrossega els vèrtexs: el graf és el mateix, només canvia el dibuix.', 'Arrastra los vértices: el grafo es el mismo, solo cambia el dibujo.', 'Drag the vertices: the graph is the same, only the drawing changes.')
            : L('Clica un vèrtex o un costat per esborrar-lo.', 'Pulsa un vértice o un lado para borrarlo.', 'Click a vertex or an edge to delete it.')}</p>
      <div className="gl-body">
        <GraphView G={G} pos={pos} w={W} h={H} sel={pick} onVertex={onVertex} onEdge={mode === 'del' ? onEdge : undefined}
          onMove={mode === 'move' ? (v, p) => setPos({ ...pos, [v]: p }) : undefined} onBlank={onBlank}
          label={L('Graf editable', 'Grafo editable', 'Editable graph')} />
        <div className="gl-panel">
          <p><b>|V| = {G.V.length}</b>, <b>|E| = {G.E.length}</b></p>
          <p className="gl-degs">{G.V.map((v) => <span key={v}>{G.dir ? `${v}: ${d[v].in}↓ ${d[v].out}↑` : `δ(${v}) = ${d[v]}`}</span>)}</p>
          {!G.dir && <p data-out="sum">{L('Suma de valències', 'Suma de valencias', 'Sum of degrees')}: {sum} = 2 · {G.E.length}</p>}
          {G.V.length > 0 && <Matrix V={G.V} M={adjMatrix(G)} />}
          <ul className="gl-facts">
            <li data-out="comps">{comps.length === 1 ? L('Connex', 'Conexo', 'Connected') : L(`${comps.length} components connexes`, `${comps.length} componentes conexas`, `${comps.length} connected components`)}</li>
            {!G.dir && <li data-out="bip">{bip ? L(`Bipartit: {${bip.A.join(',')}} i {${bip.B.join(',')}}`, `Bipartito: {${bip.A.join(',')}} y {${bip.B.join(',')}}`, `Bipartite: {${bip.A.join(',')}} and {${bip.B.join(',')}}`) : L('No és bipartit', 'No es bipartito', 'Not bipartite')}</li>}
            {G.E.length > 0 && <li data-out="euler">Euler: {euT[eu.kind]}</li>}
          </ul>
        </div>
      </div>
    </Lab>
  );
}

/* ---------- 2. Euler i Hamilton ---------- */
export function GEuler({ graphs = ['casa', 'konigsberg', 'sobre', 'k5', 'w5'] }) {
  const { L } = useLang();
  const NAMES = { casa: L('La caseta', 'La casita', 'The little house'), konigsberg: L('Ponts de Königsberg', 'Puentes de Königsberg', 'Bridges of Königsberg'), sobre: L('El sobre', 'El sobre', 'The envelope'), k5: 'K₅', w5: L('Roda W₅', 'Rueda W₅', 'Wheel W₅'), petersen: 'Petersen' };
  const [k, setK] = useState(graphs[0]);
  const { G, pos } = useMemo(() => preset(k), [k]);
  const [trail, setTrail] = useState([]);
  const [used, setUsed] = useState([]);
  const [show, setShow] = useState(null); // null | 'theory' | 'hier' | 'ham'
  const reset = (nk) => { if (nk) setK(nk); setTrail([]); setUsed([]); setShow(null); };
  const cur = trail[trail.length - 1];
  const tryEdge = (i) => {
    if (cur == null || used.includes(i)) return;
    const [a, b] = G.E[i];
    if (a !== cur && b !== cur) return;
    setTrail([...trail, a === cur ? b : a]);
    setUsed([...used, i]);
  };
  const onVertex = (v) => {
    if (cur == null) { setTrail([v]); return; }
    const i = G.E.findIndex((e, j) => !used.includes(j) && sameEdge(G, e, [cur, v]));
    if (i >= 0) tryEdge(i);
  };
  const left = G.E.length - used.length;
  const stuck = cur != null && left > 0 && !G.E.some((e, j) => !used.includes(j) && e.includes(cur));
  const info = eulerInfo(G), hier = hierholzer(G), ham = hamilton(G);
  const d = degrees(G);
  return (
    <Lab id="g-euler" title={L('Laboratori · Recorre tots els costats', 'Laboratorio · Recorre todos los lados', 'Lab · Travel every edge')}>
      <div className="gl-bar">
        <Pick label={L('Graf', 'Grafo', 'Graph')} value={k} onChange={reset} opts={graphs.map((g) => [g, NAMES[g]])} />
        <Btn onClick={() => { setTrail(trail.slice(0, -1)); setUsed(used.slice(0, -1)); }} disabled={!trail.length}>{L('Desfés', 'Deshaz', 'Undo')}</Btn>
        <Btn onClick={() => reset()}>{L('Torna a començar', 'Vuelve a empezar', 'Start again')}</Btn>
      </div>
      <p className="gl-hint">{cur == null ? L('Tria un vèrtex per començar i després ves clicant costats (o el vèrtex veí). Cada costat només es pot fer servir una vegada.', 'Elige un vértice para empezar y luego ve pulsando lados (o el vértice vecino). Cada lado solo se puede usar una vez.', 'Choose a vertex to start, then click edges (or the neighbouring vertex). Each edge can be used only once.')
        : L(`Ets a ${cur}. Queden ${left} costats.`, `Estás en ${cur}. Quedan ${left} lados.`, `You are at ${cur}. ${left} edges left.`)}</p>
      <div className="gl-body">
        <GraphView G={G} pos={pos} w={W} h={H} onVertex={onVertex} onEdge={tryEdge} sel={cur}
          hlE={show === 'hier' && hier ? pathEdges(hier.walk) : show === 'ham' && ham ? pathEdges(ham) : used}
          hlV={show === 'theory' ? info.odd : []} label={NAMES[k]} />
        <div className="gl-panel">
          <p className="gl-trail" data-out="trail">{trail.join(' → ') || '—'}</p>
          {left === 0 && trail.length > 1 && <p className="gl-ok" data-out="done">{trail[0] === cur ? L('Circuit d\'Euler: has passat per tots els costats i has tornat a l\'inici.', 'Circuito de Euler: has pasado por todos los lados y has vuelto al inicio.', 'Euler circuit: you used every edge and came back to the start.') : L('Camí d\'Euler: tots els costats, una vegada cadascun.', 'Camino de Euler: todos los lados, una vez cada uno.', 'Euler path: every edge, once each.')}</p>}
          {stuck && <p className="gl-bad" data-out="stuck">{L(`T'has encallat a ${cur}: no hi ha cap costat lliure. Desfés o torna a començar.`, `Te has atascado en ${cur}: no hay ningún lado libre. Deshaz o vuelve a empezar.`, `You are stuck at ${cur}: no free edge. Undo or start again.`)}</p>}
          <div className="gl-bar">
            <Btn on={show === 'theory'} onClick={() => setShow(show === 'theory' ? null : 'theory')}>{L('Què diu el teorema?', '¿Qué dice el teorema?', 'What does the theorem say?')}</Btn>
            <Btn on={show === 'hier'} onClick={() => setShow(show === 'hier' ? null : 'hier')} disabled={!hier}>{L('Circuits parcials', 'Circuitos parciales', 'Partial circuits')}</Btn>
            <Btn on={show === 'ham'} onClick={() => setShow(show === 'ham' ? null : 'ham')}>Hamilton</Btn>
          </div>
          {show === 'theory' && (
            <div className="gl-note" data-out="theory">
              <p>{G.V.map((v) => `δ(${v})=${d[v]}`).join('  ')}</p>
              <p>{info.odd.length === 0 ? L('Connex i totes les valències parelles ⇒ té circuit d\'Euler (pots començar a qualsevol vèrtex).', 'Conexo y todas las valencias pares ⇒ tiene circuito de Euler (puedes empezar en cualquier vértice).', 'Connected and every degree even ⇒ it has an Euler circuit (start anywhere).')
                : info.odd.length === 2 ? L(`Exactament dos vèrtexs de valència senar (${info.odd.join(' i ')}) ⇒ camí d'Euler que comença en un i acaba en l'altre.`, `Exactamente dos vértices de valencia impar (${info.odd.join(' y ')}) ⇒ camino de Euler que empieza en uno y acaba en el otro.`, `Exactly two odd vertices (${info.odd.join(' and ')}) ⇒ an Euler path from one to the other.`)
                  : L(`${info.odd.length} vèrtexs de valència senar ⇒ no hi ha ni circuit ni camí d'Euler: no t'hi esforcis.`, `${info.odd.length} vértices de valencia impar ⇒ no hay ni circuito ni camino de Euler: no te esfuerces.`, `${info.odd.length} odd vertices ⇒ no Euler circuit or path: don't bother trying.`)}</p>
            </div>
          )}
          {show === 'hier' && hier && (
            <ol className="gl-note" data-out="hier">
              {hier.parts.map((p, i) => <li key={i}>{p.join(' ')}</li>)}
              <li className="gl-ok">{L('Enganxats', 'Enganchados', 'Spliced')}: {hier.walk.join(' ')}</li>
            </ol>
          )}
          {show === 'ham' && <p className="gl-note" data-out="ham">{ham ? L(`Cicle de Hamilton (cada vèrtex una vegada): ${ham.join(' ')}`, `Ciclo de Hamilton (cada vértice una vez): ${ham.join(' ')}`, `Hamilton cycle (each vertex once): ${ham.join(' ')}`) : L('No té cap cicle de Hamilton (s\'han provat tots els ordres).', 'No tiene ningún ciclo de Hamilton (se han probado todos los órdenes).', 'It has no Hamilton cycle (every order was tried).')}</p>}
        </div>
      </div>
    </Lab>
  );
}

/* ---------- 3. Dijkstra ---------- */
function randomWeighted(seed) {
  const r = rngOf(seed);
  const n = r.int(6, 7);
  const g = connected(r, n, n + r.int(2, 4), { weights: [1, 9], w: W, h: H });
  return g;
}
export function GDijkstra() {
  const { L } = useLang();
  const [seed, setSeed] = useState(0);
  const { G, pos } = useMemo(() => (seed ? randomWeighted(seed) : preset('ciutats')), [seed]);
  const s = G.V[0], t = G.V[G.V.length - 1];
  const run = useMemo(() => dijkstra(G, s), [G, s]);
  const [k, setK] = useState(0);
  const [guess, setGuess] = useState(false);
  const [msg, setMsg] = useState(null);
  const steps = run.steps.slice(0, k);
  const last = steps[steps.length - 1];
  const done = k >= run.steps.length;
  const fixed = last ? last.done : [];
  const tag = last ? Object.fromEntries(G.V.filter((v) => last.labels[v]).map((v) => [v, String(last.labels[v][0])])) : { [s]: '0' };
  const next = () => { setK(k + 1); setMsg(null); };
  const onVertex = (v) => {
    if (!guess || done) return;
    if (v === run.steps[k].fix) { setMsg(['ok', L(`Sí: ${v} té l'etiqueta provisional més petita i passa a definitiva.`, `Sí: ${v} tiene la etiqueta provisional más pequeña y pasa a definitiva.`, `Yes: ${v} has the smallest temporary label and becomes permanent.`)]); setK(k + 1); }
    else setMsg(['bad', L(`${v} no. Busca, entre els vèrtexs no definitius, l'etiqueta més petita.`, `${v} no. Busca, entre los vértices no definitivos, la etiqueta más pequeña.`, `Not ${v}. Look for the smallest label among the non-permanent vertices.`)]);
  };
  const path = done ? pathTo(run.prev, t) : [];
  return (
    <Lab id="g-dijkstra" title={L('Laboratori · Algorisme de Dijkstra pas a pas', 'Laboratorio · Algoritmo de Dijkstra paso a paso', 'Lab · Dijkstra\'s algorithm step by step')}>
      <div className="gl-bar">
        <Btn primary data-act="step" onClick={next} disabled={done || guess}>{L('Pas següent', 'Paso siguiente', 'Next step')}</Btn>
        <label className="gl-chk"><input type="checkbox" checked={guess} onChange={(e) => setGuess(e.target.checked)} /> {L('Endevina el vèrtex que es fixa', 'Adivina el vértice que se fija', 'Guess the vertex that is fixed')}</label>
        <Btn onClick={() => { setK(0); setMsg(null); }}>{L('Reinicia', 'Reinicia', 'Restart')}</Btn>
        <Btn data-act="new" onClick={() => { setSeed(newSeed()); setK(0); setMsg(null); }}>{L('Graf nou', 'Grafo nuevo', 'New graph')}</Btn>
      </div>
      <p className="gl-hint">{L(`Camí més curt de ${s} a ${t}. L'etiqueta de cada vèrtex és la millor distància trobada fins ara; els vèrtexs remarcats ja són definitius.`, `Camino más corto de ${s} a ${t}. La etiqueta de cada vértice es la mejor distancia encontrada hasta ahora; los vértices resaltados ya son definitivos.`, `Shortest path from ${s} to ${t}. Each label is the best distance found so far; highlighted vertices are permanent.`)}</p>
      <div className="gl-body">
        <GraphView G={G} pos={pos} w={W} h={H} tag={tag} hlV={fixed} hlE={pathEdges(path)} onVertex={guess ? onVertex : undefined} label={L('Graf ponderat', 'Grafo ponderado', 'Weighted graph')} />
        <div className="gl-panel">
          {msg && <p className={msg[0] === 'ok' ? 'gl-ok' : 'gl-bad'}>{msg[1]}</p>}
          <div className="gl-tw">
            <table className="gl-dij" data-out="table">
              <thead><tr><th>{L('Pas', 'Paso', 'Step')}</th>{G.V.map((v) => <th key={v}>{v}</th>)}</tr></thead>
              <tbody>
                <tr><td>0</td>{G.V.map((v) => <td key={v}>{v === s ? '(0, –)' : '∞'}</td>)}</tr>
                {steps.map((st, i) => (
                  <tr key={i}><td>{i + 1}</td>{G.V.map((v) => {
                    const lab = st.labels[v], wasFixed = i > 0 && steps[i - 1].done.includes(v);
                    return <td key={v} className={st.fix === v ? 'is-fix' : wasFixed ? 'is-old' : undefined}>{wasFixed ? '' : lab ? `(${lab[0]}, ${lab[1] ?? '–'})` : '∞'}{st.fix === v ? ' *' : ''}</td>;
                  })}</tr>
                ))}
              </tbody>
            </table>
          </div>
          {done && <p className="gl-ok" data-out="result">{L(`Camí més curt: ${path.join(' → ')}, longitud ${run.dist[t]}.`, `Camino más corto: ${path.join(' → ')}, longitud ${run.dist[t]}.`, `Shortest path: ${path.join(' → ')}, length ${run.dist[t]}.`)}</p>}
          <p className="gl-small">{L('(L, a): L és la distància provisional i a, el vèrtex anterior. * marca el vèrtex que es fixa en aquell pas.', '(L, a): L es la distancia provisional y a, el vértice anterior. * marca el vértice que se fija en ese paso.', '(L, a): L is the temporary distance and a the previous vertex. * marks the vertex fixed at that step.')}</p>
        </div>
      </div>
    </Lab>
  );
}

/* ---------- 4. isomorfisme ---------- */
const ISO = {
  pentagrama: () => [{ G: cycle(['A', 'B', 'C', 'D', 'E']) }, { G: make('PQRST', 'PR RT TQ QS SP') }],
  hexagon: () => [{ G: make('ABCDEF', 'AB BC CD DE EF FA AD BE CF') }, { G: bipartiteK(['P', 'Q', 'R'], ['S', 'T', 'U']), pos: grid({ P: [1, 1], Q: [5, 1], R: [9, 1], S: [1, 9], T: [5, 9], U: [9, 9] }, { w: W, h: H }) }],
  prisma: () => [{ G: PRESETS.prisma.G, pos: scale(PRESETS.prisma.pos) }, { G: bipartiteK(['P', 'Q', 'R'], ['S', 'T', 'U']), pos: grid({ P: [1, 1], Q: [5, 1], R: [9, 1], S: [1, 9], T: [5, 9], U: [9, 9] }, { w: W, h: H }) }],
  corda: () => [{ G: make('ABCDEF', 'AB BC CD DE EF FA AD') }, { G: make('PQRSTU', 'PQ QR RS ST TU UP PR') }],
};
export function GIso() {
  const { L } = useLang();
  const NAMES = { pentagrama: L('Pentàgon i estrella', 'Pentágono y estrella', 'Pentagon and star'), hexagon: L('Hexàgon amb diàmetres i K₃,₃', 'Hexágono con diámetros y K₃,₃', 'Hexagon with diameters and K₃,₃'), prisma: L('Prisma i K₃,₃', 'Prisma y K₃,₃', 'Prism and K₃,₃'), corda: L('Hexàgon amb una corda', 'Hexágono con una cuerda', 'Hexagon with one chord') };
  const [k, setK] = useState('pentagrama');
  const [A, B] = useMemo(() => ISO[k]().map((x) => ({ G: x.G, pos: x.pos || circle(x.G.V, { w: W, h: H }) })), [k]);
  const [f, setF] = useState({});
  const [sel, setSel] = useState(null);
  const [res, setRes] = useState(null);
  const ia = invariants(A.G), ib = invariants(B.G);
  const ROWS = [['n', L('Vèrtexs', 'Vértices', 'Vertices')], ['m', L('Costats', 'Lados', 'Edges')], ['seq', L('Valències', 'Valencias', 'Degrees')], ['triangles', L('Triangles', 'Triángulos', 'Triangles')], ['bipartite', L('Bipartit', 'Bipartito', 'Bipartite')], ['comps', L('Components', 'Componentes', 'Components')]];
  const yes = (x) => (typeof x === 'boolean' ? (x ? L('sí', 'sí', 'yes') : 'no') : String(x));
  const choose = (nk) => { setK(nk); setF({}); setSel(null); setRes(null); };
  const onB = (w) => {
    if (sel == null) return;
    const nf = Object.fromEntries(Object.entries(f).filter(([a, b]) => b !== w && a !== sel));
    nf[sel] = w;
    setF(nf); setSel(null); setRes(null);
  };
  const full = Object.keys(f).length === A.G.V.length;
  return (
    <Lab id="g-iso" title={L('Laboratori · Són el mateix graf?', 'Laboratorio · ¿Son el mismo grafo?', 'Lab · Are they the same graph?')}>
      <div className="gl-bar">
        <Pick label={L('Parella', 'Pareja', 'Pair')} value={k} onChange={choose} opts={Object.keys(ISO).map((x) => [x, NAMES[x]])} />
        <Btn onClick={() => { setF({}); setRes(null); }}>{L('Esborra la correspondència', 'Borra la correspondencia', 'Clear the mapping')}</Btn>
      </div>
      <p className="gl-hint">{L('Compara primer els invariants. Si coincideixen, construeix la correspondència: clica un vèrtex de l\'esquerra i després el de la dreta que li correspon.', 'Compara primero los invariantes. Si coinciden, construye la correspondencia: pulsa un vértice de la izquierda y después el de la derecha que le corresponde.', 'Compare the invariants first. If they match, build the mapping: click a vertex on the left and then its partner on the right.')}</p>
      <div className="gl-two">
        <GraphView G={A.G} pos={A.pos} w={W} h={H} sel={sel} hlV={Object.keys(f)} onVertex={(v) => setSel(v)} label="G₁" />
        <GraphView G={B.G} pos={B.pos} w={W} h={H} hlV={Object.values(f)} onVertex={onB} label="G₂" />
      </div>
      <div className="gl-panel">
        <table className="gl-inv"><thead><tr><th /><th>G₁</th><th>G₂</th><th /></tr></thead>
          <tbody>{ROWS.map(([key, t]) => <tr key={key}><th>{t}</th><td>{yes(ia[key])}</td><td>{yes(ib[key])}</td><td className={ia[key] === ib[key] ? 'gl-ok' : 'gl-bad'}>{ia[key] === ib[key] ? '=' : '≠'}</td></tr>)}</tbody>
        </table>
        <p className="gl-trail" data-out="map">{Object.entries(f).map(([a, b]) => `${a}→${b}`).join('  ') || '—'}</p>
        <div className="gl-bar">
          <Btn primary data-act="check" disabled={!full} onClick={() => setRes(isIsomorphism(A.G, B.G, f) ? 'ok' : 'bad')}>{L('Comprova', 'Comprueba', 'Check')}</Btn>
          <Btn onClick={() => { const g = isomorphism(A.G, B.G); setRes(g ? 'shown' : 'none'); if (g) setF(g); }}>{L('Mostra\'n una', 'Muestra una', 'Show one')}</Btn>
        </div>
        {res === 'ok' && <p className="gl-ok" data-out="res">{L('És un isomorfisme: conserva totes les adjacències.', 'Es un isomorfismo: conserva todas las adyacencias.', 'It is an isomorphism: every adjacency is preserved.')}</p>}
        {res === 'bad' && <p className="gl-bad" data-out="res">{L('Aquesta correspondència no conserva les adjacències (no vol dir que no n\'hi hagi cap altra).', 'Esta correspondencia no conserva las adyacencias (no quiere decir que no haya ninguna otra).', 'This mapping does not preserve adjacency (that does not mean no other one does).')}</p>}
        {res === 'none' && <p className="gl-bad" data-out="res">{L('No són isomorfs: cap correspondència no funciona. Algun invariant ja ho delata.', 'No son isomorfos: ninguna correspondencia funciona. Algún invariante ya lo delata.', 'Not isomorphic: no mapping works. Some invariant already shows it.')}</p>}
      </div>
    </Lab>
  );
}

/* ---------- 5. planaritat ---------- */
export function GPlanar({ graphs = ['k4creu', 'prismaCreuat', 'cubEnredat', 'k5', 'k33'] }) {
  const { L } = useLang();
  const NAMES = { k4creu: 'K₄', prismaCreuat: L('Prisma', 'Prisma', 'Prism'), cubEnredat: L('Cub Q₃', 'Cubo Q₃', 'Cube Q₃'), k5: 'K₅', k33: 'K₃,₃' };
  const [k, setK] = useState(graphs[0]);
  const base = useMemo(() => preset(k), [k]);
  const [pos, setPos] = useState(base.pos);
  const [hint, setHint] = useState(false);
  const G = base.G;
  const X = crossings(G, pos);
  const bad = [...new Set(X.flat())];
  const b = planarBounds(G);
  const choose = (nk) => { setK(nk); setPos(preset(nk).pos); setHint(false); };
  return (
    <Lab id="g-planar" title={L('Laboratori · Desfés els encreuaments', 'Laboratorio · Deshaz los cruces', 'Lab · Untangle the crossings')}>
      <div className="gl-bar">
        <Pick label={L('Graf', 'Grafo', 'Graph')} value={k} onChange={choose} opts={graphs.map((g) => [g, NAMES[g]])} />
        <Btn onClick={() => setPos(base.pos)}>{L('Torna a començar', 'Vuelve a empezar', 'Start again')}</Btn>
        <Btn on={hint} onClick={() => setHint(!hint)}>{L('Comprova les cotes', 'Comprueba las cotas', 'Check the bounds')}</Btn>
      </div>
      <p className="gl-hint">{L('Arrossega els vèrtexs fins que cap costat no en talli un altre.', 'Arrastra los vértices hasta que ningún lado corte a otro.', 'Drag the vertices until no edge crosses another.')}</p>
      <div className="gl-body">
        <GraphView G={G} pos={pos} w={W} h={H} badE={bad} onMove={(v, p) => setPos({ ...pos, [v]: p })} label={NAMES[k]} />
        <div className="gl-panel">
          <p data-out="cross" className={X.length ? 'gl-bad' : 'gl-ok'}>{X.length ? L(`Encreuaments: ${X.length}`, `Cruces: ${X.length}`, `Crossings: ${X.length}`)
            : L(`Dibuix pla! v − e + c = 2 ⇒ ${b.v} − ${b.e} + c = 2 ⇒ c = ${faces(G)} cares (comptant l'exterior).`, `¡Dibujo plano! v − e + c = 2 ⇒ ${b.v} − ${b.e} + c = 2 ⇒ c = ${faces(G)} caras (contando la exterior).`, `Plane drawing! v − e + f = 2 ⇒ ${b.v} − ${b.e} + f = 2 ⇒ f = ${faces(G)} faces (counting the outer one).`)}</p>
          {hint && (
            <ul className="gl-note" data-out="bounds">
              <li>v = {b.v}, e = {b.e}</li>
              <li>e ≤ 3v − 6 = {b.max3}: {b.ok3 ? '✓' : L('✗ ⇒ no és planar', '✗ ⇒ no es planar', '✗ ⇒ not planar')}</li>
              {b.triFree && <li>{L('Sense triangles', 'Sin triángulos', 'No triangles')}: e ≤ 2v − 4 = {b.max2}: {b.ok2 ? '✓' : L('✗ ⇒ no és planar', '✗ ⇒ no es planar', '✗ ⇒ not planar')}</li>}
              {b.ok3 && b.ok2 && <li>{L('Les cotes es compleixen: no proven res. Si és planar, el trobaràs.', 'Las cotas se cumplen: no prueban nada. Si es planar, lo encontrarás.', 'The bounds hold: they prove nothing. If it is planar, you will find it.')}</li>}
            </ul>
          )}
        </div>
      </div>
    </Lab>
  );
}

/* ---------- 6. acoloriment ---------- */
export function GColor({ graphs = ['mapa', 'c5', 'w5', 'petersen', 'cub'] }) {
  const { L } = useLang();
  const NAMES = { mapa: L('Mapa de cinc països', 'Mapa de cinco países', 'Map of five countries'), c5: 'C₅', w5: L('Roda W₅', 'Rueda W₅', 'Wheel W₅'), petersen: 'Petersen', cub: L('Cub Q₃', 'Cubo Q₃', 'Cube Q₃') };
  const [k, setK] = useState(graphs[0]);
  const { G, pos } = useMemo(() => preset(k), [k]);
  const [col, setCol] = useState({});
  const [pen, setPen] = useState(1);
  const [wp, setWp] = useState(0);
  const [chi, setChi] = useState(false);
  const run = useMemo(() => welshPowell(G), [G]);
  const conflicts = G.E.map((e, i) => [e, i]).filter(([[a, b]]) => col[a] && col[a] === col[b]).map(([, i]) => i);
  const used = new Set(Object.values(col)).size;
  const all = G.V.every((v) => col[v]);
  const choose = (nk) => { setK(nk); setCol({}); setWp(0); setChi(false); };
  const stepWP = () => {
    const n = wp + 1, c = {};
    for (const st of run.steps.slice(0, n)) for (const v of st.vs) c[v] = st.c;
    setCol(c); setWp(n);
  };
  return (
    <Lab id="g-color" title={L('Laboratori · Acoloreix els vèrtexs', 'Laboratorio · Colorea los vértices', 'Lab · Colour the vertices')}>
      <div className="gl-bar">
        <Pick label={L('Graf', 'Grafo', 'Graph')} value={k} onChange={choose} opts={graphs.map((g) => [g, NAMES[g]])} />
        <span className="gl-pens" role="group" aria-label={L('Color', 'Color', 'Colour')}>
          {[1, 2, 3, 4].map((c) => <button key={c} type="button" className={'gl-pen' + (pen === c ? ' is-on' : '')} aria-pressed={pen === c} style={{ background: PALETTE[c - 1] }} onClick={() => setPen(c)}>{c}</button>)}
        </span>
        <Btn onClick={() => { setCol({}); setWp(0); }}>{L('Esborra', 'Borra', 'Clear')}</Btn>
      </div>
      <p className="gl-hint">{L('Tria un color i clica els vèrtexs. Dos vèrtexs units no poden tenir el mateix color. Fes-ho amb tan pocs colors com puguis.', 'Elige un color y pulsa los vértices. Dos vértices unidos no pueden tener el mismo color. Hazlo con tan pocos colores como puedas.', 'Pick a colour and click the vertices. Two joined vertices cannot share a colour. Use as few colours as you can.')}</p>
      <div className="gl-body">
        <GraphView G={G} pos={pos} w={W} h={H} col={col} badE={conflicts} onVertex={(v) => setCol({ ...col, [v]: col[v] === pen ? undefined : pen })} label={NAMES[k]} />
        <div className="gl-panel">
          <p data-out="state" className={conflicts.length ? 'gl-bad' : all ? 'gl-ok' : undefined}>
            {conflicts.length ? L(`${conflicts.length} costats amb els dos extrems del mateix color.`, `${conflicts.length} lados con los dos extremos del mismo color.`, `${conflicts.length} edges with both ends the same colour.`)
              : all ? L(`Acoloriment correcte amb ${used} colors.`, `Coloración correcta con ${used} colores.`, `Proper colouring with ${used} colours.`) : L(`Colors fets servir: ${used}.`, `Colores usados: ${used}.`, `Colours used: ${used}.`)}
          </p>
          <div className="gl-bar">
            <Btn data-act="wp" onClick={stepWP} disabled={wp >= run.steps.length}>{L('Welsh–Powell: pas següent', 'Welsh–Powell: paso siguiente', 'Welsh–Powell: next step')}</Btn>
            <Btn on={chi} onClick={() => setChi(!chi)}>{L('Nombre cromàtic', 'Número cromático', 'Chromatic number')}</Btn>
          </div>
          {wp > 0 && (
            <ol className="gl-note" data-out="wp">
              <li>{L('Ordre per valència', 'Orden por valencia', 'Order by degree')}: {run.order.join(', ')}</li>
              {run.steps.slice(0, wp).map((s) => <li key={s.c}>{L('Color', 'Color', 'Colour')} {s.c}: {s.vs.join(', ')}</li>)}
            </ol>
          )}
          {chi && <p className="gl-note" data-out="chi">γ(G) = {chromatic(G).k}{run.k > chromatic(G).k ? L(` (Welsh–Powell en fa servir ${run.k}: no sempre troba el mínim)`, ` (Welsh–Powell usa ${run.k}: no siempre encuentra el mínimo)`, ` (Welsh–Powell uses ${run.k}: it does not always find the minimum)`) : ''}</p>}
        </div>
      </div>
    </Lab>
  );
}

/* ---------- 7. recorreguts i arbres generadors ---------- */
export function GTree({ algo: a0 = 'bfs' }) {
  const { L } = useLang();
  const [algo, setAlgo] = useState(a0);
  const [seed, setSeed] = useState(0);
  const { G, pos } = useMemo(() => (seed ? randomWeighted(seed) : preset('ciutats')), [seed]);
  const weighted = algo === 'kruskal' || algo === 'prim';
  const run = useMemo(() => (algo === 'bfs' ? bfs(G, G.V[0]) : algo === 'dfs' ? dfs(G, G.V[0]) : algo === 'kruskal' ? kruskal(G) : prim(G, G.V[0])), [G, algo]);
  const [k, setK] = useState(0);
  const n = run.steps.length;
  const st = run.steps.slice(0, k);
  let hlE, badE = [], hlV = [], info;
  if (algo === 'bfs' || algo === 'dfs') {
    const seen = new Set([G.V[0]]);
    for (const s of st) if (s.visit) seen.add(s.visit);
    hlV = [...seen];
    hlE = run.tree.filter(([, w]) => (algo === 'bfs' ? st.some((s) => s.queue.includes(w)) || st.some((s) => s.visit === w) : seen.has(w)));
    const lastS = st[st.length - 1];
    info = algo === 'bfs'
      ? <p data-out="ds">{L('Cua', 'Cola', 'Queue')}: [{lastS ? lastS.queue.join(', ') : G.V[0]}] · {L('Ordre', 'Orden', 'Order')}: {st.map((s) => s.visit).join(', ')}</p>
      : <p data-out="ds">{L('Pila', 'Pila', 'Stack')}: [{lastS ? lastS.stack.join(', ') : G.V[0]}] · {L('Ordre', 'Orden', 'Order')}: {[...seen].join(', ')}{lastS && lastS.back ? L(` · torna enrere des de ${lastS.back}`, ` · vuelve atrás desde ${lastS.back}`, ` · backtrack from ${lastS.back}`) : ''}</p>;
  } else {
    hlE = st.filter((s) => s.ok !== false).map((s) => s.edge);
    badE = algo === 'kruskal' ? st.filter((s) => s.ok === false).map((s) => s.edge) : [];
    const tot = hlE.reduce((x, e) => x + e[2], 0);
    info = (
      <>
        <ol className="gl-note" data-out="ds">{st.map((s, i) => <li key={i} className={s.ok === false ? 'gl-bad' : undefined}>{s.edge[0]}{s.edge[1]} ({s.edge[2]}){s.ok === false ? L(' · fa cicle: no', ' · hace ciclo: no', ' · makes a cycle: no') : ''}</li>)}</ol>
        <p>{L('Pes de l\'arbre', 'Peso del árbol', 'Tree weight')}: {tot}{k >= n ? ' ✓' : ''}</p>
      </>
    );
  }
  const ALG = [['bfs', L('Amplada (BFS)', 'Anchura (BFS)', 'Breadth-first (BFS)')], ['dfs', L('Profunditat (DFS)', 'Profundidad (DFS)', 'Depth-first (DFS)')], ['kruskal', 'Kruskal'], ['prim', 'Prim']];
  return (
    <Lab id="g-tree" title={L('Laboratori · Recorreguts i arbres generadors', 'Laboratorio · Recorridos y árboles generadores', 'Lab · Traversals and spanning trees')}>
      <div className="gl-bar">
        <Pick label={L('Algorisme', 'Algoritmo', 'Algorithm')} value={algo} onChange={(x) => { setAlgo(x); setK(0); }} opts={ALG} />
        <Btn primary data-act="step" onClick={() => setK(k + 1)} disabled={k >= n}>{L('Pas següent', 'Paso siguiente', 'Next step')}</Btn>
        <Btn onClick={() => setK(n)} disabled={k >= n}>{L('Fins al final', 'Hasta el final', 'To the end')}</Btn>
        <Btn onClick={() => setK(0)}>{L('Reinicia', 'Reinicia', 'Restart')}</Btn>
        <Btn onClick={() => { setSeed(newSeed()); setK(0); }}>{L('Graf nou', 'Grafo nuevo', 'New graph')}</Btn>
      </div>
      <p className="gl-hint">{weighted ? L('Els costats verds formen l\'arbre; els discontinus s\'han rebutjat perquè farien un cicle.', 'Los lados verdes forman el árbol; los discontinuos se han rechazado porque harían un ciclo.', 'Green edges form the tree; dashed ones were rejected because they would close a cycle.')
        : L(`Es comença per ${G.V[0]} i els veïns es visiten per ordre alfabètic.`, `Se empieza por ${G.V[0]} y los vecinos se visitan por orden alfabético.`, `Start at ${G.V[0]}; neighbours are visited in alphabetical order.`)}</p>
      <div className="gl-body">
        <GraphView G={G} pos={pos} w={W} h={H} weights={weighted} hlV={hlV} hlE={hlE} badE={badE} label={L('Graf', 'Grafo', 'Graph')} />
        <div className="gl-panel">{info}</div>
      </div>
    </Lab>
  );
}

/* ---------- 8. planificació (C.P.M.) ---------- */
export function GCpm() {
  const { L } = useLang();
  const [tasks, setTasks] = useState(PROJECTE);
  const r = useMemo(() => cpm(tasks), [tasks]);
  const { G, pos, hlE, tag } = projectGraph(tasks, r);
  const crit = new Set(r.critical);
  const setD = (id, d) => setTasks(tasks.map((t) => (t.id === id ? { ...t, d: Math.max(1, Math.min(20, +d || 1)) } : t)));
  return (
    <Lab id="g-cpm" title={L('Laboratori · Camí crític d\'un projecte', 'Laboratorio · Camino crítico de un proyecto', 'Lab · Critical path of a project')}>
      <p className="gl-hint">{L('Canvia les durades i mira com es mouen les dates, els marges i el camí crític. A cada tasca: data early | data last.', 'Cambia las duraciones y mira cómo se mueven las fechas, los márgenes y el camino crítico. En cada tarea: fecha early | fecha last.', 'Change the durations and watch the dates, slacks and critical path move. On each task: early date | last date.')}</p>
      <GraphView G={G} pos={pos} w={460} h={280} weights hlE={hlE} hlV={r.critical} tag={tag} tagAbove label={L('Graf del projecte', 'Grafo del proyecto', 'Project graph')} />
      <div className="gl-tw">
        <table className="gl-cpm" data-out="table">
          <thead><tr><th>{L('Tasca', 'Tarea', 'Task')}</th><th>{L('Anteriors', 'Anteriores', 'Before')}</th><th>{L('Durada', 'Duración', 'Duration')}</th><th>{L('Nivell', 'Nivel', 'Level')}</th><th>T</th><th>T′</th><th>Mᵀ</th><th>Mᴸ</th></tr></thead>
          <tbody>{tasks.map((t) => (
            <tr key={t.id} className={crit.has(t.id) ? 'is-crit' : undefined}>
              <th>{t.id}</th><td>{t.pre.join(', ') || '—'}</td>
              <td><input className="am-input gl-num" type="number" min="1" max="20" value={t.d} aria-label={L(`Durada de ${t.id}`, `Duración de ${t.id}`, `Duration of ${t.id}`)} onChange={(e) => setD(t.id, e.target.value)} /></td>
              <td>{r.level[t.id]}</td><td>{r.early[t.id]}</td><td>{r.late[t.id]}</td><td>{r.total[t.id]}</td><td>{r.free[t.id]}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <p className="gl-ok" data-out="dur">{L(`Durada del projecte: ${r.duration}. Camí crític: ${r.paths.map((p) => p.join(' → ')).join(' ; ')}.`, `Duración del proyecto: ${r.duration}. Camino crítico: ${r.paths.map((p) => p.join(' → ')).join(' ; ')}.`, `Project duration: ${r.duration}. Critical path: ${r.paths.map((p) => p.join(' → ')).join(' ; ')}.`)}</p>
      <Rich className="gl-gantt" html={ganttSvg(tasks, r, { w: W + 80, label: L('Diagrama de Gantt', 'Diagrama de Gantt', 'Gantt chart') })} />
    </Lab>
  );
}
