import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../lib/i18n.jsx';
import { useAuth } from '../lib/auth.jsx';
import { initials } from '../lib/initials.js';
import { useNavbarSlots } from './NavbarSlots.jsx';
import { BRAND, T } from './strings.js';
import { Chevron, ChevronLeft, ChevronRight, MenuIcon, UserIcon } from './icons.jsx';

const PRIMARY = [['inici', '/inici', 'home'], ['tauler', '/tauler', 'dash'], ['cursos', '/cursos', 'mycourses']];
const LANGS = [['ca', 'Català ‎(ca)‎'], ['es', 'Español ‎(es)‎'], ['en', 'English ‎(en)‎']];

/**
 * Barra superior amb l'aspecte de l'aula virtual: marca, navegació primària,
 * eines del curs obert, botó d'entrar, menú d'usuari (compte, idioma, sortir) i menú mòbil.
 * active: 'inici' | 'tauler' | 'cursos' | null
 */
export default function Navbar({ active }) {
  const { ui, setLang } = useLang();
  const S = T[ui];
  const slots = useNavbarSlots();
  const auth = useAuth();
  const { pathname } = useLocation();
  const signedIn = auth.status === 'user';
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
      (wasUser ? ubtn : mbtn).current?.focus({ preventScroll: true });
    };
    document.addEventListener('click', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('click', onDoc); document.removeEventListener('keydown', onKey); };
  }, [menu]);

  // en obrir un panell del menú d'usuari, el focus va al primer element
  useEffect(() => {
    if (menu !== 'user') return;
    const first = umenu.current?.querySelector(panel === 'main' ? '#m-up-main a, #m-up-main button' : '#m-up-lang button');
    first?.focus({ preventScroll: true });
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
  const choose = (l) => { setMenu(null); setLang(l); ubtn.current?.focus({ preventScroll: true }); };
  const course = slots?.course || undefined;
  const loginTo = '/entrar?next=' + encodeURIComponent(pathname);
  const name = auth.profile?.display_name;

  return (
    <nav className="m-navbar" aria-label={S.nav}>
      <div className="m-in">
        <button ref={mbtn} className="m-ib m-menubtn" id="m-menubtn" type="button" aria-expanded={menu === 'nav'} aria-controls="m-menu" aria-label={S.menu} onClick={toggle('nav')}>
          <MenuIcon />
        </button>
        <Link className="m-brand" to="/inici" aria-label={BRAND}>
          <span className="m-mark" aria-hidden="true">AM</span>
          <span className="m-wm" aria-hidden="true"><span>Aula</span><span>Mada</span></span>
        </Link>
        <div className="m-pnav">{links}</div>
        <div className="m-spacer" />
        <div className="m-tools" ref={slots?.setToolsNode} data-course={course} />
        {auth.status === 'guest' && !['/entrar', '/registre'].includes(pathname) && (
          <Link className="m-login" id="m-login" to={loginTo}>{S.signIn}</Link>
        )}
        <div className="m-user">
          <button ref={ubtn} className="m-ubtn" id="m-ubtn" type="button" aria-haspopup="menu" aria-expanded={menu === 'user'} aria-controls="m-umenu" aria-label={S.user} onClick={toggle('user')}>
            <span className={'m-av' + (signedIn ? ' m-av-on' : '')}>{signedIn ? initials(name, auth.user?.email) : <UserIcon />}</span><Chevron />
          </button>
          <div ref={umenu} className="m-umenu" id="m-umenu" role="menu" hidden={menu !== 'user'}>
            <div id="m-up-main" hidden={panel !== 'main'}>
              {signedIn ? (
                <div className="m-uhead m-uwho">{name && <b>{name}</b>}<span>{auth.user?.email}</span></div>
              ) : <div className="m-uhead">{S.uhead}</div>}
              {signedIn && <Link to="/compte" role="menuitem" onClick={() => setMenu(null)}>{S.account}</Link>}
              {auth.status === 'guest' && <Link to={loginTo} role="menuitem" onClick={() => setMenu(null)}>{S.signInLong}</Link>}
              <Link to="/tauler" role="menuitem" onClick={() => setMenu(null)}>{S.dash}</Link>
              <Link to="/cursos" role="menuitem" onClick={() => setMenu(null)}>{S.mycourses}</Link>
              <div className="m-udiv" />
              <button type="button" id="m-ulang" role="menuitem" onClick={(e) => { e.stopPropagation(); setPanel('lang'); }}>
                <span>{S.lang}</span><ChevronRight />
              </button>
              {signedIn && <>
                <div className="m-udiv" />
                <button type="button" id="m-usignout" role="menuitem" onClick={() => { setMenu(null); auth.signOut(); }}>{S.signOut}</button>
              </>}
            </div>
            <div id="m-up-lang" hidden={panel !== 'lang'}>
              <button type="button" id="m-uback" className="m-uback" role="menuitem" onClick={(e) => { e.stopPropagation(); setPanel('main'); }}>
                <ChevronLeft /><span>{S.langback}</span>
              </button>
              <div className="m-udiv" />
              {LANGS.map(([l, name]) => (
                <button key={l} type="button" className="m-uopt" role="menuitemradio" data-lang={l} aria-checked={ui === l} onClick={() => choose(l)}>{name}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div ref={mmenu} className="m-menu" id="m-menu" hidden={menu !== 'nav'}>{links}</div>
      <div className="m-below" ref={slots?.setBelowNode} data-course={course} />
    </nav>
  );
}
