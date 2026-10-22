import { useEffect } from 'react';
import { useLang, pick } from '../lib/i18n.jsx';
import { recordVisit } from '../lib/visits.js';
import { useDocumentTitle } from '../lib/useDocumentTitle.js';
import { COURSE_BY_KEY } from '../courses/registry.js';
import { useActiveCourse } from './NavbarSlots.jsx';

/**
 * Arrel de cada curs: aplica l'àmbit dels estils (data-course), apunta el darrer accés
 * per al tauler, posa el títol de la pestanya i marca el curs actiu a la barra.
 */
export default function CourseScope({ k, title, className = '', children, ...rest }) {
  const { lang } = useLang();
  useActiveCourse(k);
  useEffect(() => { recordVisit(k); }, [k]);
  useDocumentTitle(title ?? pick(COURSE_BY_KEY[k].title, lang));
  return (
    <div data-course={k} className={('course ' + className).trim()} {...rest}>
      {children}
    </div>
  );
}
