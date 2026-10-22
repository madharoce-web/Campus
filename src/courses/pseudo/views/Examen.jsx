import { useEffect, useState } from 'react';
import { useLang } from '../../../lib/i18n.jsx';
import { clockText, dayMonth, newExam } from '../engine/quiz.js';
import { TEMPLATE } from '../data/editor.js';
import { usePseudo } from '../store.js';
import { CodeEditor, Fb, Hl, Msgs, Ps, TestsTable, useTr } from '../ui.jsx';
import { useKinds } from './Escriu.jsx';

/** Rellotge del temps que queda (s'actualitza cada segon). */
function Clock({ end }) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  return <span className="score" id="xm-clock">{clockText(end, now)}</span>;
}

/**
 * Editor d'un exercici de l'examen. El text que es veu és el que es corregeix
 * (com a l'original, un exercici sense tocar es corregeix amb la plantilla).
 */
function ExamEditor({ k, initial, stored, readOnly }) {
  const { dispatch } = usePseudo();
  const [code, setCode] = useState(initial);
  useEffect(() => {
    if (stored !== initial && !readOnly) dispatch({ type: 'exam/code', k, code: initial });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps -- només en obrir l'editor
  return (
    <CodeEditor id={'xe-' + k} value={code} readOnly={readOnly} label={'Pseudocodi ' + (k + 1)}
      onChange={(v) => { setCode(v); dispatch({ type: 'exam/code', k, code: v }); }} />
  );
}

/** Simulacre de CP1: tres algorismes i vuit preguntes curtes, amb 90 minuts. */
export default function Examen() {
  const { L } = useLang();
  const tr = useTr();
  const kn = useKinds();
  const { s, dispatch } = usePseudo();
  const xm = s.xm;
  // el primer cop que s'obre el simulacre, es crea l'examen (i comença el temps)
  useEffect(() => {
    if (!xm) dispatch({ type: 'exam/new', ifEmpty: true, xm: newExam(Date.now()) });
  }, [xm, dispatch]);
  if (!xm) return null;
  const R = xm.res;
  return (
    <div className="stack">
      <div className="examhead">
        <div><div className="eyebrow">{L('Simulacre', 'Simulacro') + ' · ' + L('Iniciació a la Programació', 'Iniciació a la Programació')}</div><h2 className="sec-title">{'CP1 · ' + L('algorísmica en pseudocodi', 'algorítmica en pseudocódigo')}</h2></div>
        <div className="row"><Clock end={xm.end} /><button type="button" className="btn primary" id="xm-new" onClick={() => dispatch({ type: 'exam/new', xm: newExam(Date.now()) })}>{L('Examen nou', 'Examen nuevo')}</button></div>
      </div>
      <div className="note">{L('Tres algorismes (seqüencial o condicional, recorregut i cerca) i vuit preguntes curtes. No s\'executa res fins que el lliuris, com a l\'examen en paper. Correcció orientativa: 70 % jocs de proves i 30 % notació a cada algorisme.', 'Tres algoritmos (secuencial o condicional, recorrido y búsqueda) y ocho preguntas cortas. No se ejecuta nada hasta que lo entregues, como en el examen en papel. Corrección orientativa: 70 % juegos de pruebas y 30 % notación en cada algoritmo.')}</div>
      {s.exams.length ? (
        <div className="ptsbar"><span className="tiny muted">{L('Últims:', 'Últimos:')}</span>
          {s.exams.slice(-5).map((x, i) => <span key={i} className="pts">{x.d + ' · ' + x.n.toFixed(1)}</span>)}</div>
      ) : null}
      {xm.ex.map((ex, k) => {
        const x = R && R.ex[k];
        return (
          <div key={k} className="card stack">
            <div className="row p-sb"><div className="eyebrow">{L('Exercici ', 'Ejercicio ') + (k + 1) + ' · 25 % · ' + kn[ex.k]}</div><span className="pts" id={'xs-' + k}>{x ? (x.score * 2.5).toFixed(2) + ' / 2.5' : null}</span></div>
            <h3 className="p-h3">{tr(ex.t)}</h3><p>{tr(ex.q)}</p>
            <ExamEditor key={xm.id + '-' + k} k={k} initial={xm.code[k] || TEMPLATE} stored={xm.code[k]} readOnly={xm.done} />
            <div id={'xr-' + k}>
              {x ? (
                <div className="stack p-gap8">
                  <Msgs msgs={x.lt.msgs} /><TestsTable c={x.c} />
                  <details className="acc"><summary>{L('Solució model', 'Solución modelo')}</summary><div className="inner"><Ps code={ex.sol} /></div></details>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
      <div className="card stack">
        <div className="eyebrow">{L('Preguntes curtes · 25 %', 'Preguntas cortas · 25 %')}</div>
        {xm.mc.map((q, j) => (
          <div key={j} className="stack p-gap6">
            <div className="small"><b>{j + 1}.</b> {tr(q.q)}</div>
            {q.code ? <pre className="ps">{q.code}</pre> : null}
            <div className="opts">
              {q.opts.map((o, i) => {
                const sel = xm.ans[j] === i;
                const cls = 'opt xq' + (sel ? ' sel' : '') + (xm.done && i === q.gi ? ' ok' : '') + (xm.done && sel && i !== q.gi ? ' bad' : '');
                return (
                  <button key={i} type="button" className={cls} data-j={j} data-i={i} disabled={xm.done}
                    onClick={() => dispatch({ type: 'exam/ans', j, i })}>
                    <span className="k">{'abcd'[i]}</span>
                    {q.mono ? <span className="body f"><Hl code={tr(o)} /></span> : <span className="body">{tr(o)}</span>}
                  </button>
                );
              })}
            </div>
            <div id={'xqf-' + j}>{xm.done ? <div className="tiny muted">{q.mono ? <span className="f">{tr(q.w)}</span> : tr(q.w)}</div> : null}</div>
          </div>
        ))}
      </div>
      <div className="card stack">
        <div className="row"><button type="button" className="btn primary" id="xm-grade" disabled={xm.done} onClick={() => dispatch({ type: 'exam/grade', d: dayMonth(new Date()) })}>{L('Lliurar i corregir', 'Entregar y corregir')}</button></div>
        <div id="xm-res">
          {R ? (
            <>
              <Fb k={R.total >= 5 ? 'ok' : 'bad'}><b>{L('Nota orientativa', 'Nota orientativa') + ': ' + R.total.toFixed(2) + ' / 10'}</b></Fb>
              <div className="ptsbar p-mt8">
                {R.ex.map((x, k) => <span key={k} className={'pts' + (x.score > .99 ? ' done' : '')}>{L('Ex. ', 'Ej. ') + (k + 1) + ': ' + (x.score * 2.5).toFixed(2)}</span>)}
                <span className="pts">{L('Preguntes', 'Preguntas') + ': ' + R.mc.filter(Boolean).length + '/' + R.mc.length}</span>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
