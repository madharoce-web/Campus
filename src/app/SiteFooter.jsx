import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n.jsx';
import { BRAND, T } from './strings.js';

/** Peu de les pàgines del campus: una línia, com a l'aula virtual. */
export default function SiteFooter() {
  const { ui } = useLang();
  const S = T[ui];
  return (
    <footer className="am-foot">
      <div className="am-foot-in">
        <span>© {new Date().getFullYear()} {BRAND} · {S.fLegal}</span>
        <nav aria-label={BRAND}>
          <Link to="/">{S.fSite}</Link>
          <Link to="/graus">{S.degrees}</Link>
          <Link to="/#preguntes">{S.fFaq}</Link>
        </nav>
      </div>
    </footer>
  );
}
