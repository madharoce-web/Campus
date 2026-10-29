import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useLang, pick } from '../../lib/i18n.jsx';
import { recordVisit } from '../../lib/visits.js';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import CourseHeader from '../../app/CourseHeader.jsx';
import SectionTabs from '../../app/SectionTabs.jsx';
import { NavbarTools, useActiveCourse } from '../../app/NavbarSlots.jsx';
import { KitContext, useCourse } from './context.js';
import { K } from './strings.js';
import { migrateOnce, setTotals } from './state.js';
import { useModule } from './useAsync.js';
import { toggleDock } from './dockStore.js';
import Home from './Home.jsx';
import Lesson from './Lesson.jsx';
import Methods from './Methods.jsx';
import Practice from './Practice.jsx';
import Exam from './Exam.jsx';
import PrintExam from './PrintExam.jsx';
import './kit.css';

export const TABS = ['inici', 'temari', 'metodes', 'practica', 'simulacre'];

/** Botó del formulari flotant (a la barra superior; el portal conserva el context). */
function DockButton() {
  const course = useCourse();
  const { ui } = useLang();
  if (!course.formulas) return null;
  return (
    <button type="button" className="kit-dockbtn" id="kit-dockbtn" onClick={() => toggleDock(course.k)}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14v16H5z" /><path d="M8 8h3M8 12h8M8 16h5M14 7l2 2m0-2-2 2" /></svg>
      <span>{K[ui].formulas}</span>
    </button>
  );
}

/**
 * Plantilla d'assignatura. Totes les assignatures tenen la mateixa estructura:
 *   /<curs>                 Inici            /<curs>/temari/<tema>   Temari (lliçons)
 *   /<curs>/metodes/<tema>  Mètodes d'examen /<curs>/practica        Pràctica
 *   /<curs>/simulacre       Simulacre        /<curs>/simulacre/pdf   Versió per imprimir
 * course: la configuració de l'assignatura (src/courses/<k>/kit/course.js); vegeu docs/PLANTILLA.md.
 */
export default function CourseKit({ course }) {
  const { ui } = useLang();
  const S = K[ui];
  const { pathname, hash } = useLocation();
  const rest = pathname.slice(course.path.length).split('/').filter(Boolean);
  const tab = rest[0] || 'inici';
  const arg = rest[1];
  const bank = useModule(course.k + ':bank', course.bank);
  useActiveCourse(course.k);
  useEffect(() => { recordVisit(course.k); }, [course.k]);
  useEffect(() => { migrateOnce(course.k, course.migrate); }, [course]);
  useEffect(() => {
    if (!bank) return;
    const nsec = course.units.reduce((n, u) => n + u.sections.length, 0);
    setTotals(course.k, { sections: nsec, ex: (bank.items || []).length + (bank.families || []).length });
  }, [bank, course]);
  const title = pick(course.title, ui);
  useDocumentTitle(tab === 'inici' ? title : S.tabs[tab] ? S.tabs[tab] + ' · ' + title : title);

  // adreces antigues (/mates/conj, /logica/u5…) → la secció corresponent de la plantilla
  // (també /economia#t3 i /economia.html#àncora, que arriben com a /economia#…)
  if (tab === 'inici' && !rest.length && hash.length > 1 && course.legacy) {
    const to = course.legacy(decodeURIComponent(hash.slice(1)), [], '');
    if (to) return <Navigate replace to={to} />;
  }
  // un tema que ja no existeix (s'ha reorganitzat el temari): l'assignatura diu on és ara
  if ((tab === 'temari' || tab === 'metodes') && arg && course.legacy && !course.units.some((u) => u.id === arg)) {
    const to = course.legacy(arg, rest.slice(1), hash);
    if (to) return <Navigate replace to={tab === 'metodes' ? to.replace('/temari/', '/metodes/').replace(/#.*$/, '') : to} />;
  }
  if (!TABS.includes(tab)) {
    const to = course.legacy && course.legacy(tab, rest, hash);
    return <Navigate replace to={to || course.path} />;
  }

  // en anglès: avís als temes (o a les pestanyes amb temes) que encara no tenen la traducció
  const hasEn = (u) => !!(u && u.langs && u.langs.includes('en'));
  const unitTab = tab === 'temari' || tab === 'metodes';
  const enReady = unitTab ? hasEn(course.units.find((u) => u.id === arg) || course.units[0]) : course.units.every(hasEn);
  const items = TABS.map((k) => ({ k, label: S.tabs[k], to: course.path + (k === 'inici' ? '' : '/' + k) }));
  let body;
  if (tab === 'temari') body = <Lesson unitId={arg || course.units[0].id} />;
  else if (tab === 'metodes') body = <Methods unitId={arg || course.units[0].id} />;
  else if (tab === 'practica') body = <Practice />;
  else if (tab === 'simulacre') body = arg === 'pdf' ? <PrintExam /> : <Exam />;
  else body = <Home />;

  return (
    <KitContext.Provider value={course}>
      {ui === 'en' && !enReady && <p className="app-langnote" role="note">{unitTab ? S.noEnUnit : S.noEnCourse}</p>}
      <div className="am-site kit" data-kit={course.k} data-tab={tab}>
        <div className="kit-wrap">
          <CourseHeader k={course.k} title={title} sub={course.sub !== undefined ? (course.sub ? <p className="m-sub">{pick(course.sub, ui)}</p> : null) : undefined} />
          <SectionTabs items={items} current={tab} id="kit-tabs" />
          <div className="kit-body">{body}</div>
        </div>
      </div>
      <NavbarTools><DockButton /></NavbarTools>
    </KitContext.Provider>
  );
}
