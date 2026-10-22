import { useState } from 'react';
import { useLang } from '../../../lib/i18n.jsx';
import { check, lint, run } from '../engine/interp.js';
import { EXS } from '../data/exercises.js';
import { TEMPLATE } from '../data/editor.js';
import { usePseudo } from '../store.js';
import { CodeEditor, Fb, Head, Msgs, Ps, TestsTable, useTr } from '../ui.jsx';

/** Noms dels tipus d'exercici. */
export function useKinds() {
  const { L } = useLang();
  return { seq: L('seqüencial', 'secuencial'), cond: L('condicional', 'condicional'), rec: L('recorregut', 'recorrido'), cerca: L('cerca', 'búsqueda') };
}

const inFilter = (filt) => (e) => filt === 'all' || (filt === 's2' && e.wk === 2) || (filt === 's3' && e.wk === 3) || (filt === 'rec' && e.k === 'rec') || (filt === 'cerca' && e.k === 'cerca');

/** Escriu i prova: llista d'exercicis, editor i comprovació amb jocs de proves. */
export default function Escriu() {
  const { L } = useLang();
  const tr = useTr();
  const kn = useKinds();
  const { s, dispatch } = usePseudo();
  const { filt } = s.wr;
  const list = EXS.filter(inFilter(filt));
  const id = s.wr.id && EXS.find((e) => e.id === s.wr.id) ? s.wr.id : list[0].id;
  const ex = EXS.find((e) => e.id === id);
  const filters = [['all', L('Tots', 'Todos')], ['s2', 'S2 · ' + kn.seq], ['s3', 'S3 · ' + kn.cond], ['rec', 'S4 · ' + kn.rec], ['cerca', 'S4 · ' + kn.cerca]];
  return (
    <div className="stack">
      <Head eb={L('Setmanes 2, 3 i 4', 'Semanas 2, 3 y 4')} t={L('Escriu i prova', 'Escribe y prueba')}
        lead={L('Escriu l\'algorisme amb la notació del curs. «Comprovar» revisa la notació i l\'executa amb els jocs de proves. Teclat: <- val per ←, <= per ≤, >= per ≥, * per ·, div per ‖, mod per |R.', 'Escribe el algoritmo con la notación del curso. «Comprobar» revisa la notación y lo ejecuta con los juegos de pruebas. Teclado: <- vale por ←, <= por ≤, >= por ≥, * por ·, div por ‖, mod por |R.')} />
      <div className="tabs2" id="wr-f">
        {filters.map(([k, n]) => (
          <button key={k} type="button" data-k={k} aria-pressed={k === filt} onClick={() => dispatch({ type: 'wr', wr: { filt: k, id: null } })}>{n}</button>
        ))}
      </div>
      <div className="split">
        <div className="lst">
          {list.map((e) => (
            <button key={e.id} type="button" className={'exi' + (s.done[e.id] ? ' done' : '')} data-id={e.id} aria-current={String(e.id === id)}
              onClick={() => dispatch({ type: 'wr', wr: { id: e.id } })}>
              <span>{tr(e.t)}</span><span className="tg">{(s.done[e.id] ? '✓ ' : '') + 'S' + e.wk}</span>
            </button>
          ))}
        </div>
        <Exercise key={filt + ':' + ex.id} ex={ex} />
      </div>
    </div>
  );
}

function Exercise({ ex }) {
  const { L } = useLang();
  const tr = useTr();
  const kn = useKinds();
  const { s, dispatch } = usePseudo();
  const [input, setInput] = useState('');
  const [out, setOut] = useState(null);   // { k: 'sol' | 'run' | 'check', … }
  // com a l'original, l'esborrany buit torna a mostrar la plantilla en tornar-hi
  const [code, setCodeLocal] = useState(() => s.drafts[ex.id] || TEMPLATE);
  const setCode = (v) => { setCodeLocal(v); dispatch({ type: 'draft', id: ex.id, code: v }); };

  const doCheck = () => {
    const lt = lint(code), c = check(code, ex.tests), errs = lt.msgs.filter((x) => x.lv === 'E').length;
    const ok = c.parsed && c.all && !errs;
    dispatch({ type: 'escriu/check', id: ex.id, ok });
    setOut({ k: 'check', lt, c, ok, errs });
  };
  const doRun = () => setOut({ k: 'run', r: run(code, input) });

  return (
    <div className="card stack p-minw0">
      <div className="row"><span className="chip acc">{'S' + ex.wk + ' · ' + kn[ex.k]}</span>{ex.src ? <span className="chip">{tr(ex.src)}</span> : null}</div>
      <h3 className="p-h3">{tr(ex.t)}</h3><p>{tr(ex.q)}</p>
      <div className="tiny muted">{L('Exemple: entrada ', 'Ejemplo: entrada ')}<span className="f">{ex.tests[0].in.join(' ')}</span>{' → ' + L('ha de sortir ', 'debe salir ')}<span className="f">{ex.tests[0].out.join(' … ')}</span></div>
      {ex.tip ? <details className="acc"><summary>{L('Pista', 'Pista')}</summary><div className="inner small">{tr(ex.tip)}</div></details> : null}
      <CodeEditor id="ed" value={code} onChange={setCode} label="Pseudocodi" />
      <div className="row">
        <button type="button" className="btn primary" id="wr-check" onClick={doCheck}>{L('Comprovar', 'Comprobar')}</button>
        <button type="button" className="btn ghost" id="wr-sol" onClick={() => setOut({ k: 'sol' })}>{L('Solució model', 'Solución modelo')}</button>
        <button type="button" className="btn ghost" id="wr-reset" onClick={() => setCode(TEMPLATE)}>{L('Plantilla buida', 'Plantilla vacía')}</button>
      </div>
      <div className="row">
        <span className="small">{L('Prova amb una entrada pròpia:', 'Prueba con una entrada propia:')}</span>
        <input type="text" id="wr-in" className="p-in" placeholder="5 7 9 -1" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="button" className="btn" id="wr-run" onClick={doRun}>{L('Executar', 'Ejecutar')}</button>
      </div>
      <div id="wr-out" className="stack p-gap10">{out && <Output out={out} ex={ex} />}</div>
    </div>
  );
}

function Output({ out, ex }) {
  const { L } = useLang();
  if (out.k === 'sol') return (
    <div className="model"><b>{L('Una solució possible', 'Una solución posible')}</b><Ps code={ex.sol} />
      <div className="tiny muted">{L('N\'hi pot haver d\'altres de correctes: el que compta és l\'esquema i la notació.', 'Puede haber otras correctas: lo que cuenta es el esquema y la notación.')}</div></div>
  );
  if (out.k === 'run') {
    const { r } = out;
    if (r.ok) return (
      <Fb k="info"><b>{L('Sortida', 'Salida')}</b><pre className="ps p-mt6">{r.out.join('\n') || '—'}</pre>
        {r.left ? <div className="tiny">{L('Han sobrat ', 'Han sobrado ') + r.left + L(' dades d\'entrada sense llegir.', ' datos de entrada sin leer.')}</div> : null}</Fb>
    );
    return <Fb k="bad">{r.err + (r.line ? ' (' + L('línia ', 'línea ') + r.line + ')' : '')}{r.out.length ? <pre className="ps p-mt6">{r.out.join('\n')}</pre> : null}</Fb>;
  }
  const { lt, c, ok, errs } = out;
  return (
    <>
      <Fb k={ok ? 'ok' : 'bad'}>
        {ok ? <><b>{L('Tot correcte.', 'Todo correcto.')}</b>{L(' Passa tots els jocs de proves i la notació és la del curs.', ' Pasa todos los juegos de pruebas y la notación es la del curso.')}</>
          : <><b>{c.parsed ? c.results.filter((r) => r.ok).length + '/' + c.results.length + L(' proves superades', ' pruebas superadas') : L('Error de sintaxi', 'Error de sintaxis')}</b>{errs ? ' · ' + errs + L(' errors de notació', ' errores de notación') : null}</>}
      </Fb>
      <Msgs msgs={lt.msgs} />
      <TestsTable c={c} />
    </>
  );
}
