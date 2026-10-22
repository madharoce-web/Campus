import { Navigate, useLocation, useParams } from 'react-router-dom';
import { LEGACY_PAGES } from '../courses/registry.js';
import NotFound from './NotFound.jsx';

/**
 * Enllaços de la versió d'un sol fitxer: /mates.html#exam → /mates/exam,
 * /index.html#tauler → /tauler, /logica.html#u5 → /logica/u5.
 */
export default function LegacyRedirect() {
  const { file } = useParams();
  const { hash } = useLocation();
  const to = LEGACY_PAGES[file];
  if (!to) return <NotFound />;
  const h = (hash || '').replace(/^#/, '');
  if (file === 'index.html') {
    return <Navigate replace to={['inici', 'tauler', 'cursos'].includes(h) ? '/' + h : '/cursos'} />;
  }
  return <Navigate replace to={h && /^[\w-]+$/.test(h) ? to + '/' + h : to} />;
}
