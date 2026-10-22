import { useState } from 'react';
import { useLang } from '../../../lib/i18n.jsx';
import { newEsq, newNota, newPrio, newTeo, prioOk } from '../engine/quiz.js';
import { usePseudo } from '../store.js';
import { Fb, Head, Hl, Mcq, OkTxt, useTr } from '../ui.jsx';

/** C++/Python → pseudocodi: tria com s'escriu al pseudocodi del curs. */
export function Notacio() {
  const { L } = useLang();
  const { s, dispatch } = usePseudo();
  const { it, r, ans } = s.nt;
  const ok = ans === r.gi;
  return (
    <div className="stack">
      <Head eb={L('Hàbits de programador', 'Hábitos de programador')} t={L('De C++ i Python al pseudocodi', 'De C++ y Python al pseudocódigo')} lead={L('Tria com s\'escriu al pseudocodi del curs.', 'Elige cómo se escribe en el pseudocódigo del curso.')} />
      <div className="card stack">
        <pre className="ps">{it.c}</pre>
        <Mcq id="nt-q" opts={r.opts.map((i) => <span className="f"><Hl code={it.o[i]} /></span>)} gi={r.gi} ans={ans}
          onPick={(i) => dispatch({ type: 'quiz/answer', key: 'nt', mod: 'notacio', ans: i, ok: i === r.gi })} />
        <div id="nt-fb">{ans != null && <Fb k={ok ? 'ok' : 'bad'}><OkTxt ok={ok} />{L('Resposta: ', 'Respuesta: ')}<span className="f"><Hl code={it.o[0]} /></span></Fb>}</div>
        <div className="row"><button type="button" className="btn ghost" id="nt-next" onClick={() => dispatch({ type: 'quiz/new', key: 'nt', item: newNota() })}>{L('Següent', 'Siguiente')}</button></div>
      </div>
    </div>
  );
}

/** Prioritats dels operadors: avaluar una expressió amb la taula del curs. */
export function Prior() {
  const { L } = useLang();
  const { s, dispatch } = usePseudo();
  const { g, ans, id } = s.pr;
  const answer = (a) => dispatch({ type: 'quiz/answer', key: 'pr', mod: 'prior', ans: a, ok: prioOk(g, a) });
  const ok = ans != null && prioOk(g, ans);
  return (
    <div className="stack">
      <Head eb={L('Tema 2.2', 'Tema 2.2')} t={L('Prioritats dels operadors', 'Prioridades de los operadores')} lead={L('Avalua amb la taula del curs: NO; després · / ‖ |R I; després + − O; i a igual prioritat, d\'esquerra a dreta.', 'Evalúa con la tabla del curso: NO; después · / ‖ |R I; después + − O; y a igual prioridad, de izquierda a derecha.')} />
      <div className="card stack">
        <div className="formula-box f big p-tc"><Hl code={g.e} /></div>
        {g.bool
          ? <div className="row"><button type="button" className="btn" data-a="cert" onClick={() => answer('cert')}>cert</button><button type="button" className="btn" data-a="fals" onClick={() => answer('fals')}>fals</button></div>
          : <PriorInput key={id} initial={ans} onAnswer={answer} />}
        <div id="pr-fb">{ans != null && <Fb k={ok ? 'ok' : 'bad'}><OkTxt ok={ok} /><span className="f">{g.par + ' = ' + g.v}</span></Fb>}</div>
        <div className="row"><button type="button" className="btn ghost" id="pr-next" onClick={() => dispatch({ type: 'quiz/new', key: 'pr', item: newPrio() })}>{L('Una altra', 'Otra')}</button></div>
      </div>
    </div>
  );
}

function PriorInput({ initial, onAnswer }) {
  const { L } = useLang();
  const [v, setV] = useState(initial ?? '');
  return (
    <div className="row">
      <input type="text" className="num" id="pr-in" placeholder="?" value={v} onChange={(e) => setV(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') onAnswer(v); }} />
      <button type="button" className="btn primary" id="pr-ok" onClick={() => onAnswer(v)}>{L('Comprovar', 'Comprobar')}</button>
    </div>
  );
}

/** Esquemes: recorregut o cerca. */
export function Esquemes() {
  const { L } = useLang();
  const tr = useTr();
  const { s, dispatch } = usePseudo();
  const { it, r, ans } = s.es;
  const ok = ans === r.gi;
  return (
    <div className="stack">
      <Head eb={L('Tema 2.3', 'Tema 2.3')} t={L('Recorregut o cerca', 'Recorrido o búsqueda')} lead="" />
      <div className="card stack">
        <p>{tr(it.q)}</p>
        <Mcq id="es-q" opts={r.opts.map((i) => tr(it.o[i]))} gi={r.gi} ans={ans}
          onPick={(i) => dispatch({ type: 'quiz/answer', key: 'es', mod: 'esquemes', ans: i, ok: i === r.gi })} />
        <div id="es-fb">{ans != null && <Fb k={ok ? 'ok' : 'bad'}><OkTxt ok={ok} />{tr(it.w)}</Fb>}</div>
        <div className="row"><button type="button" className="btn ghost" id="es-next" onClick={() => dispatch({ type: 'quiz/new', key: 'es', item: newEsq() })}>{L('Següent', 'Siguiente')}</button></div>
      </div>
    </div>
  );
}

/** Preguntes de teoria dels temes 2.1, 2.2 i 2.3. */
export function Teoria() {
  const { L } = useLang();
  const tr = useTr();
  const { s, dispatch } = usePseudo();
  const { it, r, ans } = s.tq;
  const ok = ans === r.gi;
  return (
    <div className="stack">
      <Head eb={L('Temes 2.1, 2.2 i 2.3', 'Temas 2.1, 2.2 y 2.3')} t={L('Preguntes de teoria', 'Preguntas de teoría')} lead="" />
      <div className="card stack">
        <p className="m">{tr(it.q)}</p>
        <Mcq id="tq-q" opts={r.opts.map((i) => tr(it.o[i]))} gi={r.gi} ans={ans}
          onPick={(i) => dispatch({ type: 'quiz/answer', key: 'tq', mod: 'teoria', ans: i, ok: i === r.gi })} />
        <div id="tq-fb">{ans != null && <Fb k={ok ? 'ok' : 'bad'}><OkTxt ok={ok} />{tr(it.o[0])}</Fb>}</div>
        <div className="row"><button type="button" className="btn ghost" id="tq-next" onClick={() => dispatch({ type: 'quiz/new', key: 'tq', item: newTeo() })}>{L('Següent', 'Siguiente')}</button></div>
      </div>
    </div>
  );
}
