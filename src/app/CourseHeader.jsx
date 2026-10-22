import { Link } from 'react-router-dom';
import { useLang, pick } from '../lib/i18n.jsx';
import { COURSE_BY_KEY } from '../courses/registry.js';
import { CourseIcon } from './icons.jsx';
import { T } from './strings.js';

/**
 * Capçalera del curs: molles de pa, icona, títol, contingut extra (puntuació, cercador…)
 * i subtítol. `before` es posa abans de la icona (per exemple, el botó del calaix).
 */
export default function CourseHeader({ k, title, before, extra, sub, children }) {
  const { lang } = useLang();
  const c = COURSE_BY_KEY[k];
  const parent = c.parent && COURSE_BY_KEY[c.parent];
  const t = title ?? pick(c.title, lang);
  return (
    <header className="m-hd">
      <nav className="m-crumbs" aria-label={T[lang].crumbs}>
        <Link to="/cursos">{T[lang].crumb}</Link>
        {parent && <><span className="m-sep">/</span><Link to={parent.path}>{pick(parent.title, lang)}</Link></>}
        <span className="m-sep">/</span><span>{t}</span>
      </nav>
      <div className="m-ph">
        {before}
        <span className="m-cico" style={{ '--m-ci': c.color, '--m-ci-bg': c.bg }}><CourseIcon name={c.icon} /></span>
        <h1>{t}</h1>
        {extra}
      </div>
      {sub !== undefined ? sub : <p className="m-sub">{pick(c.sub, lang)}</p>}
      {children}
    </header>
  );
}
