import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n.jsx';
import { DEGREES } from '../catalog/degrees.js';
import { BRAND, T } from './strings.js';

/** Peu de les pàgines públiques (portada i graus). */
export default function SiteFooter() {
  const { ui, t } = useLang();
  const S = T[ui];
  return (
    <footer className="am-foot">
      <div className="am-foot-in">
        <div className="am-foot-brand">
          <Link to="/" className="am-foot-logo" aria-label={BRAND}>
            <span className="am-logo-mark" aria-hidden="true">AM</span><span>{BRAND}</span>
          </Link>
          <p>{S.fTag}</p>
        </div>
        <nav className="am-foot-col" aria-label={S.degrees}>
          <h2>{S.degrees}</h2>
          <ul>{DEGREES.map((d) => <li key={d.k}><Link to={'/graus/' + d.k}>{t(d.short)}</Link></li>)}</ul>
        </nav>
        <nav className="am-foot-col" aria-label={S.fStudy}>
          <h2>{S.fStudy}</h2>
          <ul>
            <li><Link to="/cursos">{S.mycourses}</Link></li>
            <li><Link to="/tauler">{S.dash}</Link></li>
          </ul>
        </nav>
        <nav className="am-foot-col" aria-label={S.fAbout}>
          <h2>{S.fAbout}</h2>
          <ul>
            <li><Link to="/#com-funciona">{S.fHow}</Link></li>
            <li><Link to="/#preguntes">{S.fFaq}</Link></li>
          </ul>
        </nav>
      </div>
      <div className="am-foot-legal">
        <span>© {new Date().getFullYear()} {BRAND}</span>
        <span>{S.fIndep}</span>
      </div>
    </footer>
  );
}
