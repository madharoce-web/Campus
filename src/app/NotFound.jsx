import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n.jsx';
import { useDocumentTitle } from '../lib/useDocumentTitle.js';
import { T } from './strings.js';

export default function NotFound() {
  const { ui: lang } = useLang();
  const S = T[lang];
  useDocumentTitle(S.notFound);
  return (
    <main className="app-page app-404">
      <h1 className="app-h1">{S.notFound}</h1>
      <p className="app-muted">{S.notFoundHint}</p>
      <p><Link className="app-btn" to="/cursos">{S.backHome}</Link></p>
    </main>
  );
}
