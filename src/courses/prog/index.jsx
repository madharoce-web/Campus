import { useEffect, useLayoutEffect, useState } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import CourseScope from '../../app/CourseScope.jsx';
import { useLang } from '../../lib/i18n.jsx';
import { setEngineLang } from '../../shared/cpp/engine.js';
import { PG, tx } from './data.js';
import { useCourseState, useCppProgress } from './state.js';
import { SvgDefs } from './icons.jsx';
import CourseIndex from './CourseIndex.jsx';
import CoursePage from './CoursePage.jsx';
import ProgressPage from './ProgressPage.jsx';
import ActivityPage from './ActivityPage.jsx';
import './prog.css';

/*
 * Iniciació a la Programació. Rutes (les claus de la versió original):
 *   /programacio                  pàgina del curs (#curs)
 *   /programacio/progres          progrés (#progres)
 *   /programacio/<pàgina>         teoria o pràctica (t1, t21, s2, t22, s3, t23, s4, s5, s6, s7)
 *   /programacio/<pàgina>/<id>    apartat d'una pàgina
 */
export default function Course() {
  const rest = useParams()['*'] || '';
  const { hash } = useLocation();
  const parts = rest.split('/').filter(Boolean);
  const view = parts[0] || '';
  // enllaços antics amb # (/programacio#s3/s3-2)
  if (!view && hash) {
    const h = hash.slice(1);
    if (/^[\w-]+(\/[\w-]+)?$/.test(h) && h !== 'curs') return <Navigate replace to={'/programacio/' + h} />;
  }
  if (view === 'curs' || (view && view !== 'progres' && !PG[view])) return <Navigate replace to="/programacio" />;
  if (parts.length > (PG[view] ? 2 : 1) || (view === 'progres' && parts.length > 1)) {
    return <Navigate replace to={'/programacio' + (view ? '/' + view : '')} />;
  }
  return <CourseView view={view || 'curs'} anchor={PG[view] ? parts[1] || '' : ''} />;
}

function CourseView({ view, anchor }) {
  const { lang, L } = useLang();
  const { st, setDone, toggleColl, toggleCi } = useCourseState();
  const cpp = useCppProgress();
  const [ci, setCi] = useState(false); // índex obert (pantalles estretes)
  const page = PG[view];

  useEffect(() => { setEngineLang(lang); }, [lang]);
  // en canviar de vista es torna a dalt (si hi ha un apartat, hi va la pàgina quan s'ha carregat)
  useLayoutEffect(() => { if (!anchor) window.scrollTo(0, 0); }, [view]); // eslint-disable-line react-hooks/exhaustive-deps
  // Escape tanca l'índex
  useEffect(() => {
    if (!ci) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setCi(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [ci]);

  const course = L('Iniciació a la Programació', 'Iniciación a la Programación');
  const open = () => setCi(true), close = () => setCi(false);
  let body;
  if (page) body = <ActivityPage id={view} anchor={anchor} done={!!st.done[view]} onDone={setDone} onOpenCI={open} />;
  else if (view === 'progres') body = <ProgressPage st={st} cpp={cpp} onOpenCI={open} />;
  else body = <CoursePage st={st} cpp={cpp} onDone={(id) => setDone(id, true)} onToggle={toggleColl} onOpenCI={open} />;

  return (
    <CourseScope k="prog" title={page ? tx(page.t, lang) + ' · ' + course : course}>
      <SvgDefs />
      <div className="ip-wrap">
        <CourseIndex open={ci} cur={view} st={st} cpp={cpp} onToggle={toggleCi} onClose={close} />
        <div className={'ip-scrim' + (ci ? ' on' : '')} onClick={close} />
        <main className="ip-main"><div className="ip-in" id="ip-in">{body}</div></main>
      </div>
    </CourseScope>
  );
}
