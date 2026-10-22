import { useEffect, useMemo } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import CourseScope from '../../app/CourseScope.jsx';
import CourseHeader from '../../app/CourseHeader.jsx';
import SectionTabs from '../../app/SectionTabs.jsx';
import { useLang } from '../../lib/i18n.jsx';
import { COURSE_BY_KEY } from '../registry.js';
import { dayMonth } from './engine/quiz.js';
import { MODS, PseudoCtx, usePseudoStore } from './store.js';
import Xuleta from './views/Xuleta.jsx';
import Escriu from './views/Escriu.jsx';
import Examen from './views/Examen.jsx';
import { Esquemes, Notacio, Prior, Teoria } from './views/Quizzes.jsx';
import './pseudo.css';
import './skin.css';

const BASE = COURSE_BY_KEY.pseudo.path;
const TABS = ['xuleta', 'escriu', 'examen', 'notacio', 'prior', 'esquemes', 'teoria'];
const VIEWS = { xuleta: Xuleta, escriu: Escriu, examen: Examen, notacio: Notacio, prior: Prior, esquemes: Esquemes, teoria: Teoria };

/** Pseudocodi CP1: xuleta, editor amb intèrpret, simulacre, notació, prioritats, esquemes i teoria. */
export default function Course() {
  const { lang, L } = useLang();
  const sub = useParams()['*'] || '';
  const { hash } = useLocation();
  const [s, dispatch] = usePseudoStore(lang);
  const ctx = useMemo(() => ({ s, dispatch }), [s, dispatch]);
  const tab = sub || 'xuleta';
  const known = TABS.includes(tab);

  // en canviar de secció, a dalt de tot (com feia l'original)
  useEffect(() => { window.scrollTo(0, 0); }, [tab]);

  // el simulacre es corregeix sol quan s'acaba el temps, sigui quina sigui la secció oberta
  const xmEnd = s.xm && !s.xm.done ? s.xm.end : 0;
  useEffect(() => {
    if (!xmEnd) return undefined;
    const t = setInterval(() => { if (Date.now() >= xmEnd) dispatch({ type: 'exam/grade', d: dayMonth(new Date()) }); }, 1000);
    return () => clearInterval(t);
  }, [xmEnd, dispatch]);

  // enllaços antics: /pseudocodi#examen → /pseudocodi/examen
  const h = hash.replace(/^#/, '');
  if (!sub && TABS.includes(h)) return <Navigate replace to={BASE + '/' + h} />;
  if (!known) return <Navigate replace to={BASE} />;

  let a = 0, b = 0;
  MODS.forEach((m) => { a += s.prog[m][0]; b += s.prog[m][1]; });
  const names = { xuleta: L('Xuleta', 'Chuleta'), escriu: L('Escriu i prova', 'Escribe y prueba'), examen: L('Examen', 'Examen'), notacio: L('C++/Python → pseudocodi', 'C++/Python → pseudocódigo'), prior: L('Prioritats', 'Prioridades'), esquemes: L('Esquemes', 'Esquemas'), teoria: L('Teoria', 'Teoría') };
  const View = VIEWS[tab];
  return (
    <CourseScope k="pseudo">
      <PseudoCtx.Provider value={ctx}>
        <div className="m-page">
          <CourseHeader k="pseudo"
            extra={<span className="m-score" id="score">{a + '/' + b + '  ·  ' + L('ratxa', 'racha') + ' ' + s.streak}</span>}
            sub={<p className="m-sub" id="brandsub">{L('Iniciació a la Programació · CP1', 'Iniciación a la Programación · CP1')}</p>} />
          <SectionTabs items={TABS.map((k) => ({ k, label: names[k], to: BASE + '/' + k }))} current={tab} />
          <main id="main"><View /></main>
        </div>
      </PseudoCtx.Provider>
    </CourseScope>
  );
}
