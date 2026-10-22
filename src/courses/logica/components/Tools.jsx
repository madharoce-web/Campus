import { useLayoutEffect, useMemo, useRef } from 'react';
import { useLang } from '../../../lib/i18n.jsx';
import { useSlot } from '../../_doc/store.js';
import Txt from '../../_doc/Txt.jsx';
import { truthTable } from '../engine/cp0.js';
import { phiStr, ts, unify } from '../engine/unif.js';

const Pill = ({ v }) => <span className={'tv ' + (v ? 't' : 'f')}>{v ? 'T' : 'F'}</span>;
const KB = ['¬', '∧', '∨', '→', '↔', '(', ')', '⇒', ';'];

/** Calculadora de taules de veritat (fórmula o raonament «premisses ⇒ conclusió»). */
export function TruthTool({ id, f }) {
  const { L } = useLang();
  const init = f || '(P → Q) ∧ ¬Q';
  const [st, setSt] = useSlot('tt-' + id, { val: init, ran: init });
  const inp = useRef(null), caret = useRef(null);
  const res = useMemo(() => truthTable(st.ran, L), [st.ran, L]);

  // després d'inserir un símbol des del teclat, el cursor queda just darrere
  useLayoutEffect(() => {
    if (caret.current === null || !inp.current) return;
    inp.current.focus();
    inp.current.selectionStart = inp.current.selectionEnd = caret.current;
    caret.current = null;
  }, [st.val]);

  const insert = (k) => {
    const el = inp.current, a = el.selectionStart, e = el.selectionEnd;
    caret.current = a + k.length;
    setSt((o) => ({ ...o, val: o.val.slice(0, a) + k + o.val.slice(e) }));
  };
  const run = () => setSt((o) => ({ ...o, ran: o.val }));

  return (
    <div className="lx-tool" data-tool="tt">
      <div className="lt-h">
        <b>{L('Calculadora de taules de veritat', 'Calculadora de tablas de verdad')}</b>
        <span className="lt-s">{L('Una fórmula, o premisses separades per ; i ⇒ (o =>) abans de la conclusió', 'Una fórmula, o premisas separadas por ; y ⇒ (o =>) antes de la conclusión')}</span>
      </div>
      <div className="lt-row">
        <input ref={inp} className="lt-in" type="text" spellCheck="false" autoComplete="off" aria-label={L('Fórmula', 'Fórmula')}
          value={st.val} onChange={(e) => setSt((o) => ({ ...o, val: e.target.value }))}
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); run(); } }} />
        <button type="button" className="lt-go" onClick={run}>{L('Calcula', 'Calcula')}</button>
      </div>
      <div className="lt-kb">{KB.map((k) => <button key={k} type="button" data-k={k} onClick={() => insert(k)}>{k}</button>)}</div>
      <div className="lt-out" aria-live="polite">
        {res.err ? <p className="lt-err">{res.err}</p> : (
          <>
            <p className="lt-v"><Txt v={res.verdict} /></p>
            <div className="tw">
              <table className="lx-tt">
                <thead><tr>
                  {res.names.map((n) => <th key={'n' + n}>{n}</th>)}
                  {res.cols.map((c, i) => <th key={i} className={c.cls || undefined}>{c.s}</th>)}
                </tr></thead>
                <tbody>
                  {res.rows.map((r, j) => (
                    <tr key={j} className={r.cls || undefined}>
                      {r.I.map((v, i) => <td key={'n' + i}><Pill v={v} /></td>)}
                      {r.v.map((v, i) => <td key={i} className={res.cols[i].cls || undefined}><Pill v={v} /></td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/** Calculadora d'unificació: l'algorisme pas a pas fins a l'UMG o el motiu del fracàs. */
export function UnifyTool({ id, a, b }) {
  const { L } = useLang();
  const A0 = a || 'P(x, a, f(y))', B0 = b || 'P(u, v, f(g(z)))';
  const [st, setSt] = useSlot('un-' + id, { a: A0, b: B0, ran: [A0, B0] });
  const res = useMemo(() => unify(st.ran[0], st.ran[1], L), [st.ran, L]);
  const run = () => setSt((o) => ({ ...o, ran: [o.a, o.b] }));
  const onKey = (e) => { if (e.key === 'Enter') { e.preventDefault(); run(); } };

  let out;
  if (res.err) out = <p className="lt-err">{res.err}</p>;
  else {
    const r = res.r, last = r.steps[r.steps.length - 1];
    out = (
      <>
        <p className="lt-v">
          {r.ok ? (
            <>
              <b>{L('Unifiquen.', 'Unifican.')}</b> UMG = <span className="lf">{phiStr(r.steps.length ? last.phi : [])}</span>
              {r.steps.length ? <> → <span className="lf">{last.a}</span></> : L(' (ja eren iguals)', ' (ya eran iguales)')}
            </>
          ) : <><b>{L('No unifiquen', 'No unifican')}</b>{': ' + r.why}</>}
        </p>
        <div className="tw">
          <table className="lx-un">
            <thead><tr><th>i</th><th>D<sub>i</sub></th><th>{L('substitució', 'sustitución')}</th><th>φ</th></tr></thead>
            <tbody>
              <tr><td>0</td><td colSpan="2">{'E₀ = { ' + ts(res.a) + ' , ' + ts(res.b) + ' }'}</td><td>ε</td></tr>
              {r.steps.map((s, i) => (s.fail
                ? <tr key={i} className="bad"><td>{i + 1}</td><td>{'{' + ts(s.d[0]) + ', ' + ts(s.d[1]) + '}'}</td><td colSpan="2">{s.fail}</td></tr>
                : <tr key={i}><td>{i + 1}</td><td>{'{' + ts(s.d[0]) + ', ' + ts(s.d[1]) + '}'}</td><td>{s.v + ' ← ' + ts(s.r)}</td><td>{phiStr(s.phi)}</td></tr>))}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  return (
    <div className="lx-tool" data-tool="unif">
      <div className="lt-h">
        <b>{L("Calculadora d'unificació", 'Calculadora de unificación')}</b>
        <span className="lt-s">{L('Variables: x, y, z, u, v, w (i amb números). La resta són constants.', 'Variables: x, y, z, u, v, w (y con números). El resto son constantes.')}</span>
      </div>
      <div className="lt-row">
        <input className="lt-in" data-i="a" type="text" spellCheck="false" autoComplete="off" aria-label={L('Primer àtom', 'Primer átomo')}
          value={st.a} onChange={(e) => setSt((o) => ({ ...o, a: e.target.value }))} onKeyDown={onKey} />
        <input className="lt-in" data-i="b" type="text" spellCheck="false" autoComplete="off" aria-label={L('Segon àtom', 'Segundo átomo')}
          value={st.b} onChange={(e) => setSt((o) => ({ ...o, b: e.target.value }))} onKeyDown={onKey} />
        <button type="button" className="lt-go" onClick={run}>{L('Unifica', 'Unifica')}</button>
      </div>
      <div className="lt-out" aria-live="polite">{out}</div>
    </div>
  );
}
