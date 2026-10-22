import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n.jsx';
import { useNavbarSlots } from './NavbarSlots.jsx';
import { T } from './strings.js';
import { Chevron, ChevronLeft, ChevronRight, MenuIcon } from './icons.jsx';

const PRIMARY = [['inici', '/inici', 'home'], ['tauler', '/tauler', 'dash'], ['cursos', '/cursos', 'mycourses']];

/**
 * Barra superior amb l'aspecte de l'aula virtual: marca, navegació primària,
 * eines del curs obert, menú d'usuari (amb el canvi d'idioma) i menú mòbil.
 * active: 'inici' | 'tauler' | 'cursos'
 */
export default function Navbar({ active }) {
  const { lang, setLang } = useLang();
  const S = T[lang];
  const slots = useNavbarSlots();
  const [menu, setMenu] = useState(null); // null | 'user' | 'nav'
  const [panel, setPanel] = useState('main'); // 'main' | 'lang'
  const ubtn = useRef(null), mbtn = useRef(null), umenu = useRef(null), mmenu = useRef(null);

  // tanca els menús amb un clic a fora o amb Escape
  useEffect(() => {
    if (!menu) return undefined;
    const onDoc = (e) => {
      if (umenu.current?.contains(e.target) || mmenu.current?.contains(e.target)) return;
      if (ubtn.current?.contains(e.target) || mbtn.current?.contains(e.target)) return;
      setMenu(null);
    };
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      const wasUser = menu === 'user';
      setMenu(null);
      (wasUser ? ubtn : mbtn).current?.focus();
    };
    document.addEventListener('click', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('click', onDoc); document.removeEventListener('keydown', onKey); };
  }, [menu]);

  // en obrir un panell del menú d'usuari, el focus va al primer element
  useEffect(() => {
    if (menu !== 'user') return;
    const first = umenu.current?.querySelector(panel === 'main' ? '#m-up-main a, #m-up-main button' : '#m-up-lang button');
    first?.focus();
  }, [menu, panel]);

  const links = PRIMARY.map(([v, to, key]) => (
    <Link key={v} to={to} data-view={v} aria-current={v === active ? 'page' : undefined} onClick={() => setMenu(null)}>
      {S[key]}
    </Link>
  ));
  const toggle = (which) => (e) => {
    e.stopPropagation();
    setMenu((m) => (m === which ? null : which));
    setPanel('main');
  };
  const choose = (l) => { setMenu(null); setLang(l); ubtn.current?.focus(); };
  const course = slots?.course || undefined;

  return (
    <nav className="m-navbar" aria-label={S.nav}>
      <div className="m-in">
        <button ref={mbtn} className="m-ib m-menubtn" id="m-menubtn" type="button" aria-expanded={menu === 'nav'} aria-controls="m-menu" aria-label={S.menu} onClick={toggle('nav')}>
          <MenuIcon />
        </button>
        <Link className="m-brand" to="/cursos" aria-label="Semestre 1">
          <span className="m-mark">S1</span>
          <span className="m-wm"><span>Semestre 1</span><span>{S.wm2}</span></span>
        </Link>
        <div className="m-pnav">{links}</div>
        <div className="m-spacer" />
        <div className="m-tools" ref={slots?.setToolsNode} data-course={course} />
        <div className="m-user">
          <button ref={ubtn} className="m-ubtn" id="m-ubtn" type="button" aria-haspopup="menu" aria-expanded={menu === 'user'} aria-controls="m-umenu" aria-label={S.user} onClick={toggle('user')}>
            <span className="m-av">Md</span><Chevron />
          </button>
          <div ref={umenu} className="m-umenu" id="m-umenu" role="menu" hidden={menu !== 'user'}>
            <div id="m-up-main" hidden={panel !== 'main'}>
              <div className="m-uhead">{S.uhead}</div>
              <Link to="/tauler" role="menuitem" onClick={() => setMenu(null)}>{S.dash}</Link>
              <Link to="/cursos" role="menuitem" onClick={() => setMenu(null)}>{S.mycourses}</Link>
              <div className="m-udiv" />
              <button type="button" id="m-ulang" role="menuitem" onClick={(e) => { e.stopPropagation(); setPanel('lang'); }}>
                <span>{S.lang}</span><ChevronRight />
              </button>
            </div>
            <div id="m-up-lang" hidden={panel !== 'lang'}>
              <button type="button" id="m-uback" className="m-uback" role="menuitem" onClick={(e) => { e.stopPropagation(); setPanel('main'); }}>
                <ChevronLeft /><span>{S.langback}</span>
              </button>
              <div className="m-udiv" />
              <button type="button" className="m-uopt" role="menuitemradio" data-lang="ca" aria-checked={lang === 'ca'} onClick={() => choose('ca')}>Català ‎(ca)‎</button>
              <button type="button" className="m-uopt" role="menuitemradio" data-lang="es" aria-checked={lang === 'es'} onClick={() => choose('es')}>Español ‎(es)‎</button>
            </div>
          </div>
        </div>
      </div>
      <div ref={mmenu} className="m-menu" id="m-menu" hidden={menu !== 'nav'}>{links}</div>
      <div className="m-below" ref={slots?.setBelowNode} data-course={course} />
    </nav>
  );
}
