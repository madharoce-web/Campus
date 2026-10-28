import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import DockHost from './DockHost.jsx';

/** Barra superior + pàgina actual. Torna a dalt en canviar de pàgina. */
export default function Shell() {
  const { pathname } = useLocation();
  const first = pathname.split('/')[1] || '';
  // pestanya activa: Inici (i els graus), Tauler o Els meus cursos (i els cursos); el compte, cap
  const active = ['inici', 'graus'].includes(first) ? 'inici' : ['tauler', 'cursos'].includes(first) ? first
    : ['entrar', 'registre', 'compte', 'auth', 'legal', 'preus', 'admin'].includes(first) ? null : 'cursos';
  useEffect(() => { window.scrollTo(0, 0); }, [first]);
  return (
    <>
      {/* la portada pública (/) i el registre guiat (/benvinguda) tenen la seva pròpia capçalera */}
      {first !== '' && first !== 'benvinguda' && <Navbar active={active} />}
      <Outlet />
      <DockHost />
    </>
  );
}
