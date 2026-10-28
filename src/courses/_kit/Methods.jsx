import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLang } from '../../lib/i18n.jsx';
import { inline, Tx, useTr } from './text.jsx';
import { useCourse } from './context.js';
import { K } from './strings.js';
import { Blocks } from './blocks.jsx';
import { Stem, Steps } from './exercise/Exercise.jsx';
import { useModule } from './useAsync.js';
import { useMode } from './Mode.jsx';
import { useEx } from './refs.js';

/**
 * Mètodes d'examen d'un tema: { tricks:[blocs], solved:[{ id, srcName, q, steps, day? }], day:[blocs] }.
 * Un exercici resolt pot citar el banc: { ref, seed?, day? } (vegeu refs.js).
 * course.methods() → { [tema]: … }
 */
/** Exercici resolt pas a pas, amb el consell per al dia de l'examen. */
function Solved({ x: raw }) {
  const { ui } = useLang();
  const tr = useTr();
  const [mode] = useMode();
  const [sol, setSol] = useState(false);
  const x = useEx(raw);
  if (!x) return null;
  const src = x.srcName || x.basedOn;
  return (
    <article className="kit-solved">
      {src && <p className="kit-solved-src">{inline(tr(src))}</p>}
      <Stem ex={x} />
      <Steps steps={x.steps} />
      {x.sol && (sol
        ? <div className="kit-steps"><p className="kit-steps-h">{K[ui].solution}</p><Blocks blocks={x.sol} mode={mode} /></div>
        : <button type="button" className="kit-link kit-steps-open" onClick={() => setSol(true)}>{K[ui].showSol}</button>)}
      {x.day && <div className="kit-box kit-box-day"><p className="kit-box-t">{K[ui].dayH}</p><div className="kit-box-x"><Tx x={x.day} /></div></div>}
    </article>
  );
}

export default function Methods({ unitId }) {
  const course = useCourse();
  const { ui } = useLang();
  const S = K[ui];
  const tr = useTr();
  const [mode] = useMode();
  const all = useModule(course.k + ':methods', course.methods);
  const unit = course.units.find((u) => u.id === unitId) || course.units[0];
  const m = all && all[unit.id];
  return (
    <div className="kit-methods">
      <h2 className="kit-h2">{S.methodsH}</h2>
      <p className="kit-lead">{S.methodsP}</p>
      <nav className="kit-chips kit-unitpick" aria-label={S.units}>
        {course.units.map((u) => (
          <Link key={u.id} to={course.path + '/metodes/' + u.id} className={'kit-chip' + (u.id === unit.id ? ' is-on' : '')} aria-current={u.id === unit.id ? 'page' : undefined}>
            {S.unit} {u.n}
          </Link>
        ))}
      </nav>
      <h3 className="kit-unit-sep">{S.unit} {unit.n} · {inline(tr(unit.t))}</h3>
      {course.methods && !all ? <p className="kit-loading">{S.loading}</p> : !m ? <p className="kit-muted">{S.noMethods}</p> : (
        <>
          {m.tricks && m.tricks.length > 0 && (
            <section className="kit-msec" id="kit-tricks">
              <h3 className="kit-h3">{S.tricksH}</h3>
              <Blocks blocks={m.tricks} mode={mode} />
            </section>
          )}
          {m.solved && m.solved.length > 0 && (
            <section className="kit-msec" id="kit-solved">
              <h3 className="kit-h3">{m.solvedH ? inline(tr(m.solvedH)) : S.solvedH}</h3>
              {m.solved.map((x) => <Solved key={x.id || x.ref} x={x} />)}
            </section>
          )}
          {m.day && m.day.length > 0 && (
            <section className="kit-msec kit-day" id="kit-day">
              <h3 className="kit-h3">{S.dayH}</h3>
              <Blocks blocks={m.day} mode={mode} />
            </section>
          )}
        </>
      )}
    </div>
  );
}
