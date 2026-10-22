import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import CourseScope from '../../app/CourseScope.jsx';
import { NavbarBelow, NavbarTools } from '../../app/NavbarSlots.jsx';
import { useLang } from '../../lib/i18n.jsx';
import { getSnapshot, restart, start } from '../../shared/cpp/engine.js';
import { BY } from './lib/data.js';
import { flush, getS, setS, updFilt, useS } from './lib/store.js';
import { keepTicking } from './lib/hooks.js';
import { HClock } from './components/Clock.jsx';
import { EngPill, Settings, SettingsButton } from './components/Tools.jsx';
import ListView from './views/ListView.jsx';
import ExerciseView from './views/ExerciseView.jsx';
import { ExamView, SummaryView } from './views/ExamView.jsx';
import ProgressView from './views/ProgressView.jsx';
import PatiView from './views/PatiView.jsx';
import './cpp.css';

const VIEWS = ['list', 'exam', 'sum', 'prog', 'pati'];

/**
 * Vista a partir de l'adreça (/cpp/<vista>):
 *   ''|list → llista · s2…s7 → llista d'una setmana · exam · sum (revisió de l'intent) · prog · pati · <id> → pregunta
 */
function parseRoute(sec) {
  if (!sec || sec === 'list') return { view: 'list' };
  const m = /^s([2-7])$/.exec(sec);
  if (m) return { view: 'list', wk: +m[1] };
  if (VIEWS.includes(sec)) return { view: sec };
  if (BY[sec]) return { view: 'ex', id: sec };
  return null;
}

/** Arrenca el motor de C++ segons l'opció triada (Clang o intèrpret), com feia l'original en carregar. */
function useEngineStart() {
  useEffect(() => {
    const pref = getS().set.eng === 'interp' ? 'interp' : 'clang';
    const e = getSnapshot();
    if (e.state === 'off') start(pref);
    else if (pref === 'interp' ? e.mode !== 'interp' : e.mode === 'interp' && !e.why) restart(pref);
  }, []);
}

function CppApp() {
  const { lang } = useLang();
  const S = useS();
  const sec = useParams()['*'] || '';
  const loc = useLocation();
  const route = parseRoute(sec);
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const close = useCallback(() => setOpen(false), []);
  useEngineStart();
  useEffect(keepTicking, []);

  const view = route ? route.view : null, cur = route ? route.id : null, wk = route ? route.wk : null;
  const keep = !!(loc.state && loc.state.keep);

  // la llista d'una setmana (/cpp/s3) aplica el filtre en arribar, com l'antic #s3
  useLayoutEffect(() => {
    if (wk && !keep) updFilt({ wk, lv: 0, src: 'all', st: 'all' });
  }, [loc.key, wk, keep]);

  // vista actual al mateix format que l'original (S.view, S.cur)
  useEffect(() => {
    if (!view) return;
    setS((st) => (st.view === view && (!cur || st.cur === cur) ? st : { ...st, view, cur: cur || st.cur }));
  }, [view, cur]);

  // idioma desat també dins l'estat (S.lang), com l'original
  useEffect(() => { setS((st) => (st.lang === lang ? st : { ...st, lang })); }, [lang]);

  // a dalt de tot en canviar de vista (no en canviar el filtre de setmana)
  useEffect(() => { if (!keep) window.scrollTo(0, 0); }, [loc.key, keep]);

  // desa el que quedi pendent en sortir del curs o tancar la pàgina
  useEffect(() => {
    window.addEventListener('pagehide', flush);
    window.addEventListener('beforeunload', flush);
    return () => { flush(); window.removeEventListener('pagehide', flush); window.removeEventListener('beforeunload', flush); };
  }, []);

  // adreces antigues amb # (/cpp#exam, /cpp#model-eco)
  const h = (loc.hash || '').slice(1);
  if (!sec && h && /^[\w-]+$/.test(h) && parseRoute(h)) return <Navigate replace to={'/cpp/' + h} />;
  if (!route) return <Navigate replace to="/cpp" />;

  let body;
  if (view === 'ex') body = <ExerciseView key={cur} id={cur} />;
  else if (view === 'exam') body = <ExamView />;
  else if (view === 'sum') body = <SummaryView />;
  else if (view === 'prog') body = <ProgressView />;
  else if (view === 'pati') body = <PatiView />;
  else body = <ListView />;

  return (
    <>
      <NavbarTools>
        {view === 'ex' && S.sess[cur] && <HClock id={cur} />}
        <EngPill />
        <SettingsButton ref={btnRef} open={open} onToggle={() => setOpen((o) => !o)} />
      </NavbarTools>
      <NavbarBelow>{open && <Settings onClose={close} btnRef={btnRef} />}</NavbarBelow>
      <div id="main">{body}</div>
    </>
  );
}

export default function Course() {
  return (
    <CourseScope k="cpp">
      <CppApp />
    </CourseScope>
  );
}
