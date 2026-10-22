import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import CourseScope from '../../app/CourseScope.jsx';
import CourseHeader from '../../app/CourseHeader.jsx';
import SectionTabs from '../../app/SectionTabs.jsx';
import { useLang } from '../../lib/i18n.jsx';
import { lsJSON, lsSetJSON } from '../../lib/storage.js';
import { TABS, getContent, examQuestions } from './content/index.js';
import { createStore, StoreContext, useSlot, useStore } from './store.js';
import { CourseContext } from './course.js';
import { isKey, pathOf, tabOf } from './routes.js';
import Inici from './views/Inici.jsx';
import Doc from './views/Doc.jsx';
import Exercicis from './views/Exercicis.jsx';
import Practica from './views/Practica.jsx';
import Exam, { EX0 } from './views/Exam.jsx';
import './comp.css';
import './skin.css';

/** Clau i format de l'estat desat de l'original (puntuació, notes dels simulacres…). */
const KEY = 'uda-computadors-cp1-v1';
function loadSaved() {
  const d = lsJSON(KEY, {});
  return {
    ok: Number.isFinite(+d.ok) ? +d.ok : 0, n: Number.isFinite(+d.n) ? +d.n : 0,
    hist: Array.isArray(d.hist) ? d.hist : [], theme: d.theme ?? null,
  };
}

const TABN = (L) => ({ inici: L('Inici', 'Inicio'), t1: L('T1 · Introducció', 'T1 · Introducción'), t21: L('T2.1 · Representació', 'T2.1 · Representación'), t22: L('T2.2 · Multimèdia', 'T2.2 · Multimedia'), exer: L('Exercicis', 'Ejercicios'), prac: L('Pràctica', 'Práctica'), exam: L('Simulacre', 'Simulacro') });

/** Cos del curs (dins del magatzem d'estat). */
function CompCourse({ tab, routeKey }) {
  const { lang, L } = useLang();
  const loc = useLocation();
  const [saved, setSaved] = useState(loadSaved);
  const [ex, setEx] = useSlot('ex', EX0);
  const railRef = useRef(null);
  const tabRef = useRef(tab);
  useEffect(() => { tabRef.current = tab; }, [tab]);

  // es desa amb el mateix format que l'original
  useEffect(() => {
    lsSetJSON(KEY, { lang, tab, theme: saved.theme, ok: saved.ok, n: saved.n, hist: saved.hist });
  }, [lang, tab, saved]);

  const record = useCallback((ok) => setSaved((s) => ({ ...s, n: s.n + 1, ok: s.ok + (ok ? 1 : 0) })), []);

  // entrega del simulacre (també automàtica quan s'acaba el temps, encara que s'estigui en una altra pestanya)
  const exRef = useRef(ex);
  useEffect(() => { exRef.current = ex; }, [ex]);
  const store = useStore();
  const submitExam = useCallback((auto) => {
    const e = exRef.current;
    if (!e || e.phase !== 'run') return;
    const ans = store.get('exans') || {};
    const { C } = getContent(lang);
    const qs = examQuestions(lang, e.seed);
    let g = 0; const per = {}; const okList = [];
    qs.forEach((q, i) => {
      const ok = C.ansOK(q.a, ans[i]); okList.push(ok);
      if (ok) g += q.pts;
      per[q.blk] = per[q.blk] || [0, 0]; per[q.blk][0] += ok ? q.pts : 0; per[q.blk][1] += q.pts;
    });
    const grade = Math.round(g * 100) / 100;
    exRef.current = { ...e, phase: 'done' };
    setEx({ phase: 'done', grade, per, auto: !!auto, used: (Date.now() - e.t0) / 1000, ok: okList });
    const nOk = okList.filter(Boolean).length;
    setSaved((s) => ({ ...s, n: s.n + okList.length, ok: s.ok + nOk, hist: s.hist.concat([{ d: new Date().toISOString().slice(0, 10), g: grade }]).slice(-8) }));
    if (tabRef.current === 'exam') window.scrollTo(0, 0);
  }, [lang, setEx, store]);

  useEffect(() => {
    if (ex.phase !== 'run' || !ex.end) return undefined;
    const t = setInterval(() => { if (Date.now() >= ex.end) submitExam(true); }, 1000);
    return () => clearInterval(t);
  }, [ex.phase, ex.end, submitExam]);

  // en canviar de pestanya, a dalt; amb una secció, fins a la secció (l'índex fa el seu propi desplaçament)
  useEffect(() => {
    if (loc.state && loc.state.toc) return undefined;
    const id = requestAnimationFrame(() => {
      const el = routeKey && routeKey !== tab ? document.getElementById(routeKey) : null;
      if (el) el.scrollIntoView(); else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(id);
  }, [loc.key]); // eslint-disable-line react-hooks/exhaustive-deps

  // la pestanya activa, visible a la barra de pestanyes quan no hi cap
  useEffect(() => {
    const rail = railRef.current, act = rail && rail.querySelector('[aria-current="page"]');
    if (act && rail.scrollWidth > rail.clientWidth) rail.scrollLeft = Math.max(0, act.offsetLeft - rail.clientWidth / 2 + act.offsetWidth / 2);
  }, [tab, lang]);

  const names = TABN(L);
  const items = TABS.map((k) => ({ k, label: names[k], to: pathOf(k) }));
  const ctx = useMemo(() => ({ record, submitExam, hist: saved.hist, tab }), [record, submitExam, saved.hist, tab]);

  let view;
  if (tab === 'inici') view = <Inici />;
  else if (tab === 'exer') view = <Exercicis />;
  else if (tab === 'prac') view = <Practica />;
  else if (tab === 'exam') view = <Exam />;
  else view = <Doc key={tab} k={tab} />;

  return (
    <CourseContext.Provider value={ctx}>
      <div className="m-page">
        <CourseHeader k="comp"
          extra={<span className="m-score" id="score" title={L('Encerts a la pràctica', 'Aciertos en la práctica')}>{saved.ok}/{saved.n}</span>}
          sub={<p className="m-sub" id="brandsub">{L('Iniciació als Computadors', 'Iniciación a los Computadores')}</p>} />
        <SectionTabs ref={railRef} items={items} current={tab} />
        <main id="main">{view}</main>
      </div>
    </CourseContext.Provider>
  );
}

/** Computadors CP1: /computadors (inici) i /computadors/<pestanya o secció>. */
export default function Course() {
  const routeKey = useParams()['*'] || '';
  const { hash } = useLocation();
  const [store] = useState(createStore); // un magatzem per visita al curs
  const h = decodeURIComponent((hash || '').replace(/^#/, ''));
  let redirect = null;
  if (h && isKey(h)) redirect = pathOf(h);                 // enllaç antic: /computadors#exam
  else if (routeKey === 'inici') redirect = pathOf('');
  else if (routeKey && !isKey(routeKey)) redirect = pathOf('');
  return (
    <CourseScope k="comp">
      <StoreContext.Provider value={store}>
        {redirect ? <Navigate replace to={redirect} /> : <CompCourse tab={tabOf(routeKey)} routeKey={routeKey} />}
      </StoreContext.Provider>
    </CourseScope>
  );
}
