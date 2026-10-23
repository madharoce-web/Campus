import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar.jsx';

/** Barra superior + pàgina actual. Torna a dalt en canviar de pàgina. */
export default function Shell() {
  const { pathname } = useLocation();
  const first = pathname.split('/')[1] || '';
  const active = first === '' ? 'inici' : first === 'graus' || first === 'tauler' ? first : 'cursos';
  useEffect(() => { window.scrollTo(0, 0); }, [first]);
  return (
    <>
      <Navbar active={active} />
      <Outlet />
    </>
  );
}
