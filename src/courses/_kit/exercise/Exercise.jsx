import { useState } from 'react';
import { useLang } from '../../../lib/i18n.jsx';
import { inline, Tx, useTr } from '../text.jsx';
import { useCourse } from '../context.js';
import { K } from '../strings.js';
import { typeOf } from './types.jsx';
import { Blocks } from '../blocks.jsx';
import { useMode } from '../Mode.jsx';

/**
 * Solució pas a pas: cada pas es mostra quan es demana. Un pas pot ser text o
 * { x, why, table: { head, rows }, done } (why: per què es fa, desplegable; done: el resultat).
 * bare: sense el títol «Solució» (quan ja n'hi ha un a sobre).
 */
export function Steps({ steps, startOpen = false, bare = false }) {
  const { ui } = useLang();
  const S = K[ui];
  const tr = useTr();
  const [n, setN] = useState(startOpen && steps ? steps.length : 0);
  if (!steps || !steps.length) return null;
  if (n === 0) return <button type="button" className="kit-link kit-steps-open" onClick={() => setN(1)}>{S.showSteps}</button>;
  return (
    <div className={'kit-steps' + (bare ? ' is-bare' : '')}>
      {!bare && <p className="kit-steps-h">{S.solution}</p>}
      <ol>
        {steps.slice(0, n).map((st, i) => {
          const x = st && typeof st === 'object' && !Array.isArray(st) && 'x' in st ? st : { x: st };
          return (
            <li key={i} className={x.done ? 'is-res' : undefined}>
              <div>{inline(tr(x.x))}</div>
              {x.table && (
                <div className="kit-tw">
                  <table className="kit-table kit-steptab">
                    <thead><tr>{x.table.head.map((h, j) => <th key={j}>{tr(h)}</th>)}</tr></thead>
                    <tbody>{x.table.rows.map((r, j) => <tr key={j}>{r.map((c, k) => <td key={k}>{tr(c)}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              )}
              {x.why && <details className="kit-why"><summary>{S.why}</summary><div>{inline(tr(x.why))}</div></details>}
            </li>
          );
        })}
      </ol>
      {n < steps.length && (
        <div className="kit-steps-more">
          <button type="button" className="am-btn am-btn-secondary" onClick={() => setN(n + 1)}>{S.nextStep}</button>
          <button type="button" className="kit-link" onClick={() => setN(steps.length)}>{S.allSteps}</button>
        </div>
      )}
    </div>
  );
}

/** Autoavaluació 0–4 (exercicis oberts o sense correcció automàtica). */
export function SelfGrade({ value, onChange }) {
  const { ui } = useLang();
  const S = K[ui];
  return (
    <div className="kit-self" role="group" aria-label={S.selfH}>
      <span>{S.selfH}</span>
      {S.self.map((l, i) => (
        <button key={i} type="button" className={'kit-self-b' + (value === i ? ' is-on' : '')} aria-pressed={value === i} onClick={() => onChange(i)}>{l}</button>
      ))}
    </div>
  );
}

/** Enunciat d'un exercici: títol (opcional) i text (q) o blocs (qb). */
export function Stem({ ex }) {
  const tr = useTr();
  const [mode] = useMode();
  return (
    <>
      {ex.title && <p className="kit-ex-title">{inline(tr(ex.title))}</p>}
      <div className="kit-ex-q">{ex.qb ? <Blocks blocks={ex.qb} mode={mode} /> : <Tx x={ex.q} />}</div>
      {ex.note && <p className="kit-ex-note">{inline(tr(ex.note))}</p>}
    </>
  );
}

/** Solució completa (després d'entregar un simulacre): passos i blocs de solució. */
export function Solution({ ex }) {
  const { ui } = useLang();
  const [mode] = useMode();
  return (
    <>
      <Steps steps={ex.steps} startOpen />
      {ex.sol && <div className="kit-steps"><p className="kit-steps-h">{K[ui].solution}</p><Blocks blocks={ex.sol} mode={mode} /></div>}
    </>
  );
}

/** Etiquetes d'un exercici: nivell, origen (examen real) i «basat en». */
export function ExTags({ ex }) {
  const { ui } = useLang();
  const S = K[ui];
  const tr = useTr();
  return (
    <div className="kit-tags">
      {ex.level && <span className={'kit-lv kit-lv-' + ex.level}>{S.levels[ex.level]}</span>}
      {ex.src === 'exam' && ex.srcName && <span className="kit-src">{S.fromExam}{tr(ex.srcName)}</span>}
      {ex.src !== 'exam' && ex.basedOn && <span className="kit-src">{S.basedOn}{tr(ex.basedOn)}</span>}
    </div>
  );
}

/**
 * Un exercici: enunciat, resposta, «Comprova», pista i solució pas a pas.
 * variant: 'check' (dins la lliçó) | 'practice' | 'end' (tipus examen al final del tema)
 * onResult({ ok, self }) quan es comprova (o s'autoavalua).
 * check(ex, valor) pot tornar true/false, null (autoavaluació) o una fracció 0–1 (correcte en part).
 * Els tipus amb `inline` (p. ex. exercicis amb apartats) es comproven des del seu propi control: onCheck(r).
 */
export default function Exercise({ ex, variant = 'practice', n, onResult, done }) {
  const { ui } = useLang();
  const S = K[ui];
  const tr = useTr();
  const course = useCourse();
  const T = typeOf(ex, course.types);
  const [value, setValue] = useState(undefined);
  const [res, setRes] = useState(null); // null | true | false | fracció
  const [hint, setHint] = useState(false);
  const [self, setSelf] = useState(null);
  const [sol, setSol] = useState(false);
  const [mode] = useMode();
  const auto = T.check !== undefined && ex.type !== 'open';
  const report = (r) => {
    if (r === null || r === undefined) return;
    setRes(r);
    onResult?.({ ok: r === true || r === 1 });
  };
  const verify = () => report(T.check(ex, value));
  const full = res === true || res === 1, part = typeof res === 'number' && res > 0 && res < 1;
  const onSelf = (v) => { setSelf(v); onResult?.({ ok: v >= 3, self: v }); };
  return (
    <article className={'kit-ex kit-ex-' + variant + (done ? ' is-done' : '')} data-ex={ex.id} data-level={ex.level} data-type={ex.type}>
      <header className="kit-ex-h">
        <span className="kit-ex-t">{variant === 'check' ? S.check : (n != null ? `${S.q} ${n}` : S.q)}</span>
        {variant !== 'check' && <ExTags ex={ex} />}
        {done && <span className="kit-done">✓ {S.done}</span>}
      </header>
      <Stem ex={ex} />
      {T.Input && <T.Input ex={ex} value={value} onChange={(v) => { setValue(v); if (!T.inline) setRes(null); }} disabled={false} checked={res !== null} onCheck={report} />}
      <div className="kit-ex-acts">
        {auto && T.Input && !T.inline && <button type="button" className="am-btn am-btn-primary kit-check" onClick={verify} disabled={value === undefined || value === ''}>{S.checkBtn}</button>}
        {(ex.hint || ex.hintb) && <button type="button" className="kit-link" aria-expanded={hint} onClick={() => setHint(!hint)}>{S.hint}</button>}
      </div>
      {res !== null && !T.inline && <p className={'kit-fb ' + (full ? 'is-ok' : part ? 'is-mid' : 'is-ko')} role="status">{full ? S.ok : part ? S.part : ex.hint || ex.hintb ? S.ko : S.ko0}</p>}
      {hint && ex.hint && <p className="kit-hint">{inline(tr(ex.hint))}</p>}
      {hint && ex.hintb && <div className="kit-hint"><Blocks blocks={ex.hintb} mode={mode} /></div>}
      <Steps steps={ex.steps} />
      {ex.sol && (sol
        ? <div className="kit-steps"><p className="kit-steps-h">{S.solution}</p><Blocks blocks={ex.sol} mode={mode} /></div>
        : <button type="button" className="kit-link kit-steps-open" onClick={() => setSol(true)}>{S.showSol}</button>)}
      {!auto && (ex.steps || ex.sol) && (ex.sol ? sol : true) && <SelfGrade value={self} onChange={onSelf} />}
    </article>
  );
}
