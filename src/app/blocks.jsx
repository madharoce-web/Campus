import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n.jsx';
import { studyDays } from '../lib/visits.js';
import { T } from './strings.js';

/** Icones de les llistes de blocs (com les de les activitats de l'aula): [color, traç]. */
export const BLOCK_ICONS = {
  quiz: ['var(--am-pink)', <><path d="M6 4.5h12v15H6z" /><path d="M9 9h6M9 12.5h6M9 16h3.5" /></>],
  assign: ['var(--am-purple)', <><path d="M7 3.5h7l4 4v13H7z" /><path d="M14 3.5v4h4M10 13l2 2 3.5-4" /></>],
  code: ['var(--am-teal)', <path d="M9 7.5l-4.5 4.5L9 16.5M15 7.5l4.5 4.5-4.5 4.5" />],
  page: ['var(--am-teal)', <><path d="M7 3.5h10v17H7z" /><path d="M10 8h4M10 11.5h4M10 15h4" /></>],
  news: ['var(--am-purple)', <><path d="M5 5.5h14v10H9l-4 3.5z" /><path d="M8.5 9h7M8.5 12h5" /></>],
  link: ['var(--am-teal)', <><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1" /><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1" /></>],
  dash: ['var(--am-teal)', <><rect x="4" y="4" width="7" height="7" rx="1" /><rect x="13" y="4" width="7" height="4" rx="1" /><rect x="13" y="10" width="7" height="10" rx="1" /><rect x="4" y="13" width="7" height="7" rx="1" /></>],
  courses: ['var(--am-teal)', <><path d="M4 6.5 12 3l8 3.5-8 3.5z" /><path d="M7 8.5v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5" /></>],
  user: ['var(--am-teal)', <><circle cx="12" cy="8.5" r="3.8" /><path d="M4.5 20c1.2-3.7 4-5.6 7.5-5.6s6.3 1.9 7.5 5.6" /></>],
  help: ['var(--am-teal)', <><circle cx="12" cy="12" r="8.5" /><path d="M9.8 9.5a2.3 2.3 0 1 1 3.2 2.1c-.6.3-1 .8-1 1.5v.4M12 16.6v.4" /></>],
};

export function BlockIcon({ name }) {
  const [color, d] = BLOCK_ICONS[name] || BLOCK_ICONS.link;
  return <span className="am-aico" style={{ color }}><svg viewBox="0 0 24 24" aria-hidden="true">{d}</svg></span>;
}

/** Bloc amb una llista d'enllaços amb icona. items: [{ to, label, sub?, icon }] */
export function LinksBlock({ id, title, items }) {
  return (
    <section className="am-block" id={id} aria-labelledby={id + '-h'}>
      <h2 className="am-bt" id={id + '-h'}>{title}</h2>
      <ul className="am-acts">
        {items.map((it) => (
          <li key={it.to + it.label}>
            <Link to={it.to}>
              <BlockIcon name={it.icon} />
              <span className="am-atx"><span>{it.label}</span>{it.sub && <small>{it.sub}</small>}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Bloc de navegació del campus (el mateix a totes les pàgines que no en tenen un de propi). */
export function NavBlock() {
  const { ui } = useLang();
  const S = T[ui];
  return (
    <LinksBlock id="am-nav" title={S.navBlock} items={[
      { to: '/inici', label: S.home, icon: 'news' },
      { to: '/tauler', label: S.dash, icon: 'dash' },
      { to: '/cursos', label: S.mycourses, icon: 'courses' },
      { to: '/graus', label: S.degrees, icon: 'link' },
      { to: '/compte', label: S.account, icon: 'user' },
    ]} />
  );
}

const pad = (n) => String(n).padStart(2, '0');
const isoDay = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/** Calendari del mes amb els dies que s'ha estudiat (s'ha obert algun curs). */
export function CalendarBlock() {
  const { ui } = useLang();
  const S = T[ui];
  const today = new Date();
  const [shift, setShift] = useState(0);
  const days = useMemo(() => new Set(studyDays()), []);
  const first = new Date(today.getFullYear(), today.getMonth() + shift, 1);
  const title = new Intl.DateTimeFormat(ui, { month: 'long', year: 'numeric' }).format(first);
  const lead = (first.getDay() + 6) % 7; // setmana de dilluns a diumenge
  const inMonth = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
  const cells = [...Array(lead).fill(null), ...Array.from({ length: inMonth }, (_, i) => i + 1)];
  while (cells.length % 7) cells.push(null);
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  const todayIso = isoDay(today);
  const wd = Array.from({ length: 7 }, (_, i) => new Intl.DateTimeFormat(ui, { weekday: 'narrow' }).format(new Date(2024, 0, 1 + i)));
  return (
    <section className="am-block" id="am-cal" aria-labelledby="am-cal-h">
      <h2 className="am-bt" id="am-cal-h">{S.calendar}</h2>
      <div className="am-cal-head">
        <button type="button" className="am-cal-nav" aria-label={S.prevMonth} onClick={() => setShift((s) => s - 1)}><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M7.5 2.5 4 6l3.5 3.5" /></svg></button>
        <span className="am-cal-title">{title.charAt(0).toUpperCase() + title.slice(1)}</span>
        <button type="button" className="am-cal-nav" aria-label={S.nextMonth} onClick={() => setShift((s) => s + 1)} disabled={shift >= 0}><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M4.5 2.5 8 6l-3.5 3.5" /></svg></button>
      </div>
      <table className="am-cal">
        <thead><tr>{wd.map((d, i) => <th key={i} scope="col">{d}</th>)}</tr></thead>
        <tbody>
          {weeks.map((w, i) => (
            <tr key={i}>
              {w.map((n, j) => {
                if (!n) return <td key={j} />;
                const iso = isoDay(new Date(first.getFullYear(), first.getMonth(), n));
                const cls = [days.has(iso) && 'is-study', iso === todayIso && 'is-today'].filter(Boolean).join(' ');
                return <td key={j} className={cls || undefined}><span>{n}</span></td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="am-cal-legend"><i aria-hidden="true" />{S.studyDay}</p>
    </section>
  );
}
