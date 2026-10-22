import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { WEEKS, WEEK_NUMS, pagesOf, tx } from './data.js';
import { exStats } from './state.js';
import { I } from './icons.jsx';

/** Índex del curs (calaix esquerre): pàgina del curs, progrés i les pàgines de cada setmana. */
export default function CourseIndex({ open, cur, st, cpp, onToggle, onClose }) {
  const { lang, L } = useLang();
  const link = (to, on, label, extra) => (
    <Link to={to} aria-current={on ? 'page' : undefined} onClick={onClose}><span className="ip-citx">{label}</span>{extra}</Link>
  );
  return (
    <aside className={'ip-ci' + (open ? ' open' : '')} id="ip-ci" aria-label={L('Índex del curs', 'Índice del curso')}>
      <div className="ip-cihead">
        <b>{L('Índex del curs', 'Índice del curso')}</b>
        <button type="button" className="ip-ciclose" aria-label={L("Tanca l'índex", 'Cierra el índice')} onClick={onClose}>{I.x}</button>
      </div>
      <div className="ip-cisec">
        <ul className="ip-cilist top">
          <li>{link('/programacio', cur === 'curs', L('Pàgina del curs', 'Página del curso'))}</li>
          <li>{link('/programacio/progres', cur === 'progres', L('Progrés', 'Progreso'))}</li>
        </ul>
      </div>
      {WEEK_NUMS.map((w) => {
        const wopen = st.ci[w] !== false, pages = pagesOf(w), has = pages.some((p) => p.id === cur), ex = exStats(cpp, w);
        return (
          <div className="ip-cisec" key={w}>
            <button type="button" className={'ip-cisech' + (has ? ' on' : '')} aria-expanded={wopen} onClick={() => onToggle(w)}>
              <span className="ip-chev">{I.chev}</span>
              <span>{L('Setmana ', 'Semana ') + w + ' · ' + tx(WEEKS[w].short || WEEKS[w].topic, lang)}</span>
            </button>
            {wopen ? (
              <ul className="ip-cilist">
                {pages.map((p) => {
                  const done = !!st.done[p.id];
                  return (
                    <li key={p.id}>
                      {link('/programacio/' + p.id, p.id === cur, tx(p.t, lang), (
                        <svg className={'ip-cidone' + (done ? '' : ' no')} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                          role={done ? 'img' : undefined} aria-label={done ? L('Fet', 'Hecho') : undefined} aria-hidden={done ? undefined : 'true'}>
                          <path d="M5 12.5l4.5 4.5L19 7" />
                        </svg>
                      ))}
                    </li>
                  );
                })}
                {ex.n ? <li>{link('/cpp/s' + w, false, L('Exercicis de C++', 'Ejercicios de C++') + ' (' + ex.done + '/' + ex.n + ')')}</li> : null}
              </ul>
            ) : null}
          </div>
        );
      })}
    </aside>
  );
}
