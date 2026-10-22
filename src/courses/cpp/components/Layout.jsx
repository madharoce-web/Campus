import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../../lib/i18n.jsx';
import { updFilt } from '../lib/store.js';

/* icones de la versió original */
export const QuizIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
    <path d="M7 8.5h5M7 12h5M7 15.5h5M14.5 8.2l1.2 1.2 2.1-2.4M14.5 11.8l1.2 1.2 2.1-2.4M14.5 15.4l1.2 1.2 2.1-2.4" />
  </svg>
);
export const FlagIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 15V2h8.5l-1.5 3 1.5 3H3" />
  </svg>
);
export const ChevIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2.5 4.5L6 8l3.5-3.5" />
  </svg>
);
export const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
  </svg>
);

/** Ruta d'una vista del curs. */
export const to = (v) => (v === 'list' ? '/cpp' : '/cpp/' + v);

/**
 * Molles de pa de l'activitat: [text, destí]. El destí és una vista ('list', 'exam'…),
 * 'lv:N' (llista filtrada pel nivell N) o res (element actual).
 */
export function Crumbs({ items }) {
  const { L } = useLang();
  const all = [[L('Els meus cursos', 'Mis cursos'), '@/cursos'], [L('Iniciació a la Programació', 'Iniciación a la Programación'), '@/programacio']].concat(items);
  return (
    <nav className="crumbs" aria-label={L('Ruta de navegació', 'Ruta de navegación')}>
      {all.map(([t, dest], i) => (
        <Fragment key={i}>
          {i > 0 && <span className="sep">/</span>}
          {!dest ? <span>{t}</span>
            : dest[0] === '@' ? <Link to={dest.slice(1)}>{t}</Link>
              : dest.startsWith('lv:') ? <Link to="/cpp" onClick={() => updFilt({ lv: +dest.slice(3) })}>{t}</Link>
                : <Link to={to(dest)}>{t}</Link>}
        </Fragment>
      ))}
    </nav>
  );
}

/** Pestanyes de l'activitat (Exercicis · Simulacre · Pati de proves · El meu progrés). */
export function Tabs({ cur }) {
  const { L } = useLang();
  const T = [['list', L('Exercicis', 'Ejercicios')], ['exam', L('Simulacre', 'Simulacro')], ['pati', L('Pati de proves', 'Patio de pruebas')], ['prog', L('El meu progrés', 'Mi progreso')]];
  return (
    <nav className="m-snav" id="tabs" aria-label={L('Seccions de l\'activitat', 'Secciones de la actividad')}>
      {T.map(([k, t]) => <Link key={k} to={to(k)} data-v={k} aria-current={cur === k ? 'page' : undefined}>{t}</Link>)}
    </nav>
  );
}

/**
 * Pàgina amb el calaix de blocs a la dreta (com la versió original):
 * molles, capçalera (icona opcional i h1), pestanyes i contingut.
 */
export function Page({ crumbs, h1, icon = false, tab, drawer, drawerCls = '', children }) {
  const { L } = useLang();
  return (
    <div className={'page' + (drawer ? '' : ' nodrawer')}>
      <div className="main">
        <div className="main-in">
          <Crumbs items={crumbs} />
          <div className="ph">{icon && <span className="act-ico"><QuizIcon /></span>}<h1>{h1}</h1></div>
          <Tabs cur={tab} />
          {children}
        </div>
      </div>
      {drawer && (
        <aside className={'drawer ' + drawerCls} aria-label={L('Blocs', 'Bloques')}>
          <div className="stick">{drawer}</div>
        </aside>
      )}
    </div>
  );
}
