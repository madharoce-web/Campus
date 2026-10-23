import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar.jsx';

/** Barra superior + pàgina actual. Torna a dalt en canviar de pàgina. */
export default function Shell() {
  const { pathname } = useLocation();
  const first = pathname.split('/')[1] || '';
  // pestanya activa: Inici (i els graus), Tauler o Els meus cursos (i els cursos); el compte, cap
  const active = ['inici', 'graus'].includes(first) ? 'inici' : ['tauler', 'cursos'].includes(first) ? first
    : ['entrar', 'registre', 'compte', 'auth'].includes(first) ? null : 'cursos';
  useEffect(() => { window.scrollTo(0, 0); }, [first]);
  return (
    <>
      {/* la portada pública (/) té la seva pròpia capçalera */}
      {first !== '' && <Navbar active={active} />}
      <Outlet />
    </>
  );
}
