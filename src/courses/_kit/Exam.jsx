import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { lsDel } from '../../lib/storage.js';
import { inline, useTr } from './text.jsx';
import { useCourse } from './context.js';
import { K, num } from './strings.js';
import { typeOf } from './exercise/types.jsx';
import { ExTags, SelfGrade, Solution, Stem } from './exercise/Exercise.jsx';
import { addExam, useKit } from './state.js';
import { useModule } from './useAsync.js';
import { newSeed } from './bank.js';
import { buildExam, buildFormat, DURATIONS, examExercises, loadSim, saveSim, simKey } from './examBuild.js';

const fmt = (ms) => {
  const neg = ms < 0, s = Math.floor(Math.abs(ms) / 1000);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), ss = s % 60;
  return (neg ? '−' : '') + (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(ss).padStart(2, '0');
};
const SELF = [0, 0.25, 0.5, 0.75, 1];

function Config({ onStart }) {
  const course = useCourse();
  const { ui } = useLang();
  const S = K[ui];
  const tr = useTr();
  const st = useKit(course.k);
  const formats = course.formats || [];
  // amb formats d'examen real, el primer és el que surt d'entrada; «custom»: per temes
  const [fmt, setFmt] = useState(formats.length ? formats[0].id : 'custom');
  const F = formats.find((f) => f.id === fmt);
  const [min, setMin] = useState(F ? F.min : 90);
  const [units, setUnits] = useState(course.units.map((u) => u.id));
  const toggle = (id) => setUnits(units.includes(id) ? units.filter((x) => x !== id) : course.units.map((u) => u.id).filter((x) => x === id || units.includes(x)));
  const pickFmt = (id) => { setFmt(id); const f = formats.find((x) => x.id === id); if (f) setMin(f.min); };
  const ready = F || units.length > 0;
  return (
    <div className="kit-examcfg">
      <h2 className="kit-h2">{S.examH}</h2>
      <p className="kit-lead">{S.examP}</p>
      {formats.length > 0 && (
        <div className="kit-chips kit-fmt" id="kit-fmt" role="radiogroup" aria-label={S.examType}>
          {formats.map((f) => (
            <button key={f.id} type="button" role="radio" aria-checked={fmt === f.id} data-fmt={f.id} className={'kit-chip' + (fmt === f.id ? ' is-on' : '')} onClick={() => pickFmt(f.id)}>{tr(f.t)}</button>
          ))}
          <button type="button" role="radio" aria-checked={fmt === 'custom'} data-fmt="custom" className={'kit-chip' + (fmt === 'custom' ? ' is-on' : '')} onClick={() => pickFmt('custom')}>{S.examCustom}</button>
        </div>
      )}
      <div className="kit-cfg-grid">
        <fieldset className="kit-fs">
          <legend>{S.duration}</legend>
          <div className="kit-chips" id="kit-dur">
            {DURATIONS.map((m) => (
              <button key={m} type="button" role="radio" aria-checked={min === m} data-min={m} className={'kit-chip' + (min === m ? ' is-on' : '')} onClick={() => setMin(m)}>
                {m >= 60 && m % 60 === 0 ? (m / 60) + ' h' : m + ' ' + S.min}
              </button>
            ))}
          </div>
        </fieldset>
        {F ? (
          <fieldset className="kit-fs">
            <legend>{tr(F.t)}</legend>
            <p className="kit-fmt-d">{inline(tr(F.desc))}</p>
            <p className="kit-muted">{S.unitsPick}: {F.units.map((id) => course.units.find((u) => u.id === id)?.n).join(', ')}</p>
          </fieldset>
        ) : (
          <fieldset className="kit-fs">
            <legend>{S.unitsPick}</legend>
            {course.units.map((u) => (
              <label key={u.id} className="kit-cb">
                <input type="checkbox" checked={units.includes(u.id)} onChange={() => toggle(u.id)} />
                <span>{u.n}. {inline(tr(u.t))}</span>
              </label>
            ))}
          </fieldset>
        )}
      </div>
      <div className="am-btn-row">
        <button type="button" className="am-btn am-btn-primary" id="kit-start" disabled={!ready} onClick={() => onStart({ min, units, print: false, format: F })}>{S.startExam}</button>
        <button type="button" className="am-btn am-btn-secondary" id="kit-pdf" disabled={!ready} onClick={() => onStart({ min, units, print: true, format: F })}>{S.pdf}</button>
      </div>
      <section className="kit-hist">
        <h3 className="kit-h3">{S.history}</h3>
        {!st.exams.length ? <p className="kit-muted">{S.noHistory}</p> : (
          <table className="kit-table kit-hist-t">
            <thead><tr><th>{S.printDate}</th><th>{S.duration}</th><th>{S.q}</th><th>{S.mark}</th></tr></thead>
            <tbody>{st.exams.slice().reverse().map((e) => (
              <tr key={e.at}><td>{new Date(e.at).toLocaleDateString(ui)}</td><td>{e.min} {S.min}</td><td>{e.n}</td><td><b>{num(e.mark, ui)}</b></td></tr>
            ))}</tbody>
          </table>
        )}
      </section>
    </div>
  );
}

/** Simulacre: configuració → examen amb rellotge → lliurament → correcció i nota. */
export default function Exam() {
  const course = useCourse();
  const { ui } = useLang();
  const S = K[ui];
  const bank = useModule(course.k + ':bank', course.bank);
  const [sim, setSimState] = useState(() => loadSim(course.k));
  const [now, setNow] = useState(Date.now());
  const setSim = (v) => { setSimState(v); if (v) saveSim(course.k, v); else lsDel(simKey(course.k)); };
  const exs = useMemo(() => (bank && sim ? examExercises(bank, sim, course) : []), [bank, sim, course]);

  const running = sim && sim.t0 && !sim.delivered;
  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [running]);
  const left = running ? sim.t0 + sim.min * 60000 - now : 0;
  // s'acaba el temps: es lliura sol
  useEffect(() => { if (running && left <= 0) setSim({ ...sim, delivered: Date.now() }); }, [running, left <= 0]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!bank) return <p className="kit-loading">{S.loading}</p>;

  const start = ({ min, units, print, format }) => {
    const seed = newSeed();
    const built = format ? buildFormat(format, { min, seed }) : buildExam(bank, { units, min, seed });
    if (print) { setSim({ ...built, t0: null }); return; }
    setSim({ ...built, t0: Date.now(), answers: {}, self: {} });
    window.scrollTo(0, 0);
  };

  if (!sim) return <Config onStart={start} />;

  // simulacre creat per imprimir (sense rellotge)
  if (!sim.t0) {
    return (
      <div className="kit-examcfg">
        <h2 className="kit-h2">{S.examH}</h2>
        <p className="kit-lead">{S.printHint}</p>
        <div className="am-btn-row">
          <Link className="am-btn am-btn-primary" id="kit-topdf" to={course.path + '/simulacre/pdf'}>{S.pdf}</Link>
          <button type="button" className="am-btn am-btn-secondary" onClick={() => setSim({ ...sim, t0: Date.now(), answers: {}, self: {} })}>{S.startExam}</button>
          <button type="button" className="kit-link" onClick={() => setSim(null)}>{S.back}</button>
        </div>
      </div>
    );
  }

  const answer = (id, v) => setSim({ ...sim, answers: { ...sim.answers, [id]: v } });
  const graded = sim.delivered ? exs.map((ex) => {
    const T = typeOf(ex, course.types);
    const auto = ex.type !== 'open' ? T.check(ex, sim.answers?.[ex.id]) : null;
    // true/false o una fracció (exercicis amb apartats); null: autoavaluació
    const frac = auto === null || auto === undefined ? (sim.self?.[ex.id] != null ? SELF[sim.self[ex.id]] : null) : (typeof auto === 'number' ? auto : auto ? 1 : 0);
    return { ex, auto, frac };
  }) : [];
  const pending = graded.filter((g) => g.frac === null).length;
  const mark = graded.reduce((n, g) => n + (g.frac || 0) * g.ex.pts, 0);

  return (
    <div className="kit-exam">
      <div className={'kit-exam-bar' + (running && left < 5 * 60000 ? ' is-low' : '')}>
        <span>{S.examH} · {sim.min} {S.min}</span>
        {running ? <span className="kit-clock" id="kit-clock" role="timer" aria-label={S.timeLeft}>{fmt(left)}</span>
          : <span className="kit-clock is-done">{sim.result != null ? S.mark + ': ' + num(sim.result, ui) : S.timeUp}</span>}
        <span className="kit-exam-acts">
          <Link className="am-btn am-btn-secondary" to={course.path + '/simulacre/pdf'}>{S.pdf}</Link>
          {running && <button type="button" className="am-btn am-btn-primary" id="kit-deliver" onClick={() => window.confirm(S.confirmDeliver) && setSim({ ...sim, delivered: Date.now() })}>{S.deliver}</button>}
        </span>
      </div>
      {sim.delivered && sim.result == null && <p className="am-alert am-alert-info">{S.selfGrade}</p>}
      {exs.map((ex, i) => {
        const T = typeOf(ex, course.types);
        const g = graded[i];
        return (
          <article key={ex.id + (ex.seed || '')} className="kit-ex kit-ex-exam" data-ex={ex.id}>
            <header className="kit-ex-h">
              <span className="kit-ex-t">{S.q} {i + 1}</span>
              <span className="kit-pts">{num(ex.pts, ui, 0)} {ex.pts === 1 ? S.pt : S.pts}</span>
              <ExTags ex={ex} />
              {g && g.frac !== null && <span className={'kit-gr ' + (g.frac === 1 ? 'is-ok' : g.frac === 0 ? 'is-ko' : 'is-mid')}>{num(g.frac * ex.pts, ui)} / {num(ex.pts, ui, 0)}</span>}
            </header>
            <Stem ex={ex} />
            {T.Input && <T.Input ex={ex} value={sim.answers?.[ex.id]} disabled={!!sim.delivered} onChange={(v) => answer(ex.id, v)} checked={!!sim.delivered} exam />}
            {sim.delivered && (
              <>
                <Solution ex={ex} />
                {(g.auto === null || g.auto === undefined) && sim.result == null && (
                  <SelfGrade value={sim.self?.[ex.id]} onChange={(v) => setSim({ ...sim, self: { ...sim.self, [ex.id]: v } })} />
                )}
              </>
            )}
          </article>
        );
      })}
      {sim.delivered && (
        <div className="kit-exam-end">
          {sim.result == null ? (
            <button type="button" className="am-btn am-btn-primary" id="kit-finish" disabled={pending > 0}
              onClick={() => { addExam(course.k, { min: sim.min, mark, n: exs.length }); setSim({ ...sim, result: mark }); window.scrollTo(0, 0); }}>{S.finish}</button>
          ) : (
            <p className="kit-mark" id="kit-mark">{S.mark}: <b>{num(sim.result, ui)}</b> / 10</p>
          )}
          <button type="button" className="am-btn am-btn-secondary" onClick={() => setSim(null)}>{S.again}</button>
        </div>
      )}
    </div>
  );
}
