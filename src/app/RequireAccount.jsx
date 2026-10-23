import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../lib/auth.jsx';
import { useLang } from '../lib/i18n.jsx';
import { T } from './strings.js';

/**
 * El campus és per a qui té compte: amb els comptes configurats, qui no ha entrat va a
 * /entrar (i hi torna després); qui acaba de sortir, a la portada. Sense comptes configurats
 * (mode local), el campus és obert.
 */
export default function RequireAccount({ children }) {
  const { status, farewell } = useAuth();
  const { pathname, search, hash } = useLocation();
  const { ui } = useLang();
  if (status === 'disabled' || status === 'user') return children;
  if (status === 'loading') {
    return <div className="app-loading" role="status"><span className="app-spin" aria-hidden="true" />{T[ui].loading}</div>;
  }
  if (farewell) return <Navigate replace to="/" />;
  return <Navigate replace to={'/entrar?next=' + encodeURIComponent(pathname + search + hash)} />;
}
