import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { inline, Tx, useTr } from './text.jsx';
import { useCourse } from './context.js';
import { K } from './strings.js';
import { useKit } from './state.js';
import { openDock } from './dockStore.js';
import Tour from '../../app/Tour.jsx';
import { TOUR_COURSE } from '../../app/tours.js';
import { useCampus } from '../../lib/campus.js';
import { dueCounts, useReview } from '../../lib/review.js';

/** Inici de l'assignatura: resum, temes amb el progrés, «continua on ho vas deixar» i accessos. */
export default function Home() {
  const course = useCourse();
  const { ui } = useLang();
  const S = K[ui];
  const tr = useTr();
  const st = useKit(course.k);
  const nsec = course.units.reduce((n, u) => n + u.sections.length, 0);
  const last = st.last && course.units.find((u) => u.id === st.last.unit);
  const go = last ? course.path + '/temari/' + last.id + '#' + st.last.sec : course.path + '/temari/' + course.units[0].id;
  const done = Object.values(st.practice).filter((p) => p && p.ok).length;
  const campus = useCampus();
  const due = dueCounts(useReview())[course.k] || 0;
  return (
    <div className="kit-home">
      {/* tutorial de la primera assignatura que s'obre, un cop configurat el campus */}
      <Tour id="course" steps={TOUR_COURSE} when={!!campus.done} />
      {course.summary && <div className="kit-lead"><Tx x={course.summary} /></div>}
      <dl className="am-stats kit-stats">
        <div className="am-stat"><dt className="am-sr">{S.homeStats.units}</dt><dd><b>{course.units.length}</b><span>{S.homeStats.units}</span></dd></div>
        <div className="am-stat"><dt className="am-sr">{S.homeStats.sections}</dt><dd><b>{Object.keys(st.read).length}/{nsec}</b><span>{S.homeStats.sections} · {S.read}</span></dd></div>
        <div className="am-stat"><dt className="am-sr">{S.homeStats.ex}</dt><dd><b>{done}{st.tot ? '/' + st.tot.ex : ''}</b><span>{S.homeStats.ex} · {S.done.toLowerCase()}</span></dd></div>
        <div className="am-stat"><dt className="am-sr">{S.homeStats.exams}</dt><dd><b>{st.exams.length}</b><span>{S.homeStats.exams}</span></dd></div>
      </dl>
      {due > 0 && (
        <p className="kit-review-note" id="kit-review-note">
          <span>{S.reviewNote.replace('%d', due)}</span>
          <Link className="am-btn am-btn-primary" to={course.path + '/repas'}>{S.tabs.repas}</Link>
        </p>
      )}
      <div className="am-btn-row kit-home-go">
        <Link className="am-btn am-btn-primary" id="kit-continue" to={go}>{last ? S.continue : S.start}</Link>
        <Link className="am-btn am-btn-secondary" to={course.path + '/practica'}>{S.quick.practice}</Link>
        <Link className="am-btn am-btn-secondary" to={course.path + '/simulacre'}>{S.quick.exam}</Link>
        {course.formulas && <button type="button" className="am-btn am-btn-secondary" onClick={() => openDock(course.k)}>{S.quick.formulas}</button>}
      </div>
      <h2 className="kit-h2">{S.homeH}</h2>
      <ol className="kit-units">
        {course.units.map((u) => {
          const r = u.sections.filter((s) => st.read[s.id]).length;
          const pct = u.sections.length ? Math.round((r / u.sections.length) * 100) : 0;
          return (
            <li key={u.id} data-unit={u.id}>
              <span className="kit-units-n">{u.n}</span>
              <div className="kit-units-b">
                <Link to={course.path + '/temari/' + u.id} className="kit-units-t">{inline(tr(u.t))}</Link>
                {u.d && <p>{inline(tr(u.d))}</p>}
                <div className="kit-units-m">
                  <span className="am-bar"><span style={{ width: pct + '%' }} /></span>
                  <small>{S.readOf.replace('%a', r).replace('%b', u.sections.length)}</small>
                  <Link to={course.path + '/metodes/' + u.id} className="kit-units-l">{S.tabs.metodes}</Link>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
