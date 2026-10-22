import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import CourseScope from '../../app/CourseScope.jsx';
import CourseHeader from '../../app/CourseHeader.jsx';
import SectionTabs from '../../app/SectionTabs.jsx';
import { useLang } from '../../lib/i18n.jsx';
import { lsJSON, lsSetJSON } from '../../lib/storage.js';
import { getContent } from './content/index.js';
import { createStore, StoreContext } from './store.js';
import { CourseContext } from './course.js';
import { TABS, isKey, pathOf, tabOf } from './routes.js';
import Inici from './views/Inici.jsx';
import Doc from './views/Doc.jsx';
import Exercicis from './views/Exercicis.jsx';
import Practica from './views/Practica.jsx';
import Banc from './views/Banc.jsx';
import Exam from './views/Exam.jsx';
import './mates.css';
import './skin.css';

/** Clau i format de l'estat desat de l'original (idioma, pestanya, tema i puntuació de la pràctica). */
const KEY = 'uda-teoria-mates-v1';
function loadSaved() {
  const d = lsJSON(KEY, {});
  return { ok: Number.isFinite(+d.ok) ? +d.ok : 0, n: Number.isFinite(+d.n) ? +d.n : 0, theme: d.theme ?? null };
}

/** Cos del curs (dins del magatzem d'estat). */
function MatesCourse({ tab, routeKey }) {
  const { lang, L } = useLang();
  const loc = useLocation();
  const navigate = useNavigate();
  const [saved, setSaved] = useState(loadSaved);
  const railRef = useRef(null);

  // es desa amb el mateix format que l'original
  useEffect(() => {
    lsSetJSON(KEY, { lang, tab, theme: saved.theme, ok: saved.ok, n: saved.n });
  }, [lang, tab, saved]);

  const record = useCallback((ok) => setSaved((s) => ({ ...s, n: s.n + 1, ok: s.ok + (ok ? 1 : 0) })), []);
  const go = useCallback((t, sec) => navigate(pathOf(sec || t)), [navigate]);

  // en canviar de pestanya, a dalt; amb una secció, fins a la secció (l'índex fa el seu propi desplaçament)
  useEffect(() => {
    if (loc.state && loc.state.keep) return undefined;
    const id = requestAnimationFrame(() => {
      const el = routeKey && routeKey !== tab ? document.getElementById(routeKey) : null;
      if (el) el.scrollIntoView(); else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(id);
  }, [loc.key]); // eslint-disable-line react-hooks/exhaustive-deps

  // la pestanya activa, visible a la barra de pestanyes quan no hi caben totes
  useEffect(() => {
    const rail = railRef.current, act = rail && rail.querySelector('[aria-current="page"]');
    if (act && rail.scrollWidth > rail.clientWidth) rail.scrollLeft = Math.max(0, act.offsetLeft - rail.clientWidth / 2 + act.offsetWidth / 2);
  }, [tab, lang]);

  const names = getContent(lang).TABN();
  const items = TABS.map((k) => ({ k, label: names[k], to: pathOf(k) }));
  const ctx = useMemo(() => ({ record, go, tab }), [record, go, tab]);

  let view;
  if (tab === 'inici') view = <Inici />;
  else if (tab === 'exer') view = <Exercicis />;
  else if (tab === 'prac') view = <Practica />;
  else if (tab === 'banc') view = <Banc />;
  else if (tab === 'exam') view = <Exam />;
  else view = <Doc key={tab} k={tab} />;

  return (
    <CourseContext.Provider value={ctx}>
      <div className="m-page">
        <CourseHeader k="mates"
          extra={<span className="m-score" id="score" title={L('Encerts a la pràctica', 'Aciertos en la práctica')}>{saved.ok}/{saved.n}</span>}
          sub={<p className="m-sub" id="brandsub">{L('Matemàtica Computacional', 'Matemática Computacional')}</p>} />
        <SectionTabs ref={railRef} items={items} current={tab} />
        <main id="main">{view}</main>
      </div>
    </CourseContext.Provider>
  );
}

/** Teoria Mates CP1: /mates (inici) i /mates/<pestanya o secció>. */
export default function Course() {
  const routeKey = useParams()['*'] || '';
  const { hash } = useLocation();
  const [store] = useState(createStore); // un magatzem per visita al curs
  const h = decodeURIComponent((hash || '').replace(/^#/, ''));
  let redirect = null;
  if (h && isKey(h)) redirect = pathOf(h);                 // enllaç antic: /mates#exam
  else if (routeKey === 'inici') redirect = pathOf('');
  else if (routeKey && !isKey(routeKey)) redirect = pathOf('');
  return (
    <CourseScope k="mates">
      <StoreContext.Provider value={store}>
        {redirect ? <Navigate replace to={redirect} /> : <MatesCourse tab={tabOf(routeKey)} routeKey={routeKey} />}
      </StoreContext.Provider>
    </CourseScope>
  );
}
