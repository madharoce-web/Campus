import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { inline, useTr } from './text.jsx';
import { Blocks } from './blocks.jsx';
import { Stem } from './exercise/Exercise.jsx';
import { useMode } from './Mode.jsx';
import { useCourse } from './context.js';
import { K, num } from './strings.js';
import { typeOf } from './exercise/types.jsx';
import { useModule } from './useAsync.js';
import { examExercises, loadSim } from './examBuild.js';

/** Espai de resposta: 'lines:N' (pautat), 'grid:N' (quadrícula), 'code:N' (codi), 'none'. */
function Space({ spec }) {
  const [kind, n] = String(spec || 'lines:8').split(':');
  const rows = Math.max(1, Number(n) || 8);
  if (kind === 'none') return null;
  return <div className={'kp-space kp-' + kind} style={{ '--rows': rows }} aria-hidden="true" />;
}

/** Versió per imprimir (o desar en PDF) del simulacre en curs: enunciats i espai per respondre. */
export default function PrintExam() {
  const course = useCourse();
  const { ui } = useLang();
  const S = K[ui];
  const tr = useTr();
  const bank = useModule(course.k + ':bank', course.bank);
  const [sim] = useState(() => loadSim(course.k));
  const [sol, setSol] = useState(false);
  const [mode] = useMode();
  const exs = useMemo(() => (bank && sim ? examExercises(bank, sim, course) : []), [bank, sim, course]);
  useEffect(() => { document.documentElement.classList.add('kit-printing'); return () => document.documentElement.classList.remove('kit-printing'); }, []);

  if (!sim) {
    return (
      <div className="kit-examcfg">
        <p>{S.examP}</p>
        <Link className="am-btn am-btn-primary" to={course.path + '/simulacre'}>{S.examH}</Link>
      </div>
    );
  }
  const title = tr(course.title);
  return (
    <div className="kp">
      <div className="kp-tools">
        <button type="button" className="am-btn am-btn-primary" id="kit-print" onClick={() => window.print()}>{S.printBtn}</button>
        <label className="kit-cb"><input type="checkbox" checked={sol} onChange={(e) => setSol(e.target.checked)} /><span>{S.printSol}</span></label>
        <Link className="kit-link" to={course.path + '/simulacre'}>← {S.back}</Link>
        <p className="kit-muted">{S.printHint}</p>
      </div>
      <article className="kp-sheet" id="kit-sheet">
        <header className="kp-head">
          <div className="kp-brand"><span className="kp-mark">AM</span><span>Aula Mada</span></div>
          <h1>{S.printTitle} · {inline(title)}</h1>
          <table className="kp-meta">
            <tbody>
              <tr><th>{S.printName}</th><td className="kp-fill" colSpan={3} /></tr>
              <tr><th>{S.printDate}</th><td className="kp-fill" /><th>{S.printDur}</th><td>{sim.min} {S.min}</td></tr>
            </tbody>
          </table>
        </header>
        {!bank ? <p>{S.loading}</p> : exs.map((ex, i) => {
          const T = typeOf(ex, course.types);
          return (
            <section key={ex.id + (ex.seed || '')} className="kp-q" data-ex={ex.id}>
              <h2><span>{S.q} {i + 1}</span><small>({num(ex.pts, ui, 0)} {ex.pts === 1 ? S.pt : S.pts})</small></h2>
              <div className="kp-stem"><Stem ex={ex} /></div>
              {T.Print && <T.Print ex={ex} />}
              <Space spec={ex.space || T.space} />
            </section>
          );
        })}
        {sol && bank && (
          <section className="kp-sols">
            <h2>{S.solutionsH}</h2>
            {exs.map((ex, i) => {
              const T = typeOf(ex, course.types);
              return (
                <div key={ex.id + (ex.seed || '')} className="kp-sol">
                  <h3>{S.q} {i + 1}</h3>
                  {/* T.Key (component) per als tipus amb una clau rica: solució per apartats, jocs de proves… */}
                  {T.Key ? <T.Key ex={ex} /> : T.key && <p className="kp-key">{inline(T.key(ex, tr))}</p>}
                  {ex.steps && <ol>{ex.steps.map((st, j) => <li key={j}>{inline(tr(st && st.x !== undefined ? st.x : st))}</li>)}</ol>}
                  {ex.sol && <Blocks blocks={ex.sol} mode={mode} />}
                </div>
              );
            })}
          </section>
        )}
      </article>
    </div>
  );
}
