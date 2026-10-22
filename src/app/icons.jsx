/** Icones de traç (24×24) de la closca i dels cursos. */
const COURSE_ICONS = {
  home: <><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z" /><path d="M13 4h5.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H13z" /></>,
  mates: <path d="M17 5H7l6 7-6 7h10" />,
  logica: <><circle cx="6" cy="7" r="2.2" /><circle cx="18" cy="7" r="2.2" /><circle cx="12" cy="18" r="2.2" /><path d="M8.2 7h7.6M7.1 9l3.8 7M16.9 9l-3.8 7" /></>,
  eco: <><path d="M4 19h16" /><path d="M5 5c3 9 9 12 14 12" /><path d="M5 17c4-1 9-5 13-12" /></>,
  comp: <><rect x="6" y="6" width="12" height="12" rx="1.5" /><rect x="9.5" y="9.5" width="5" height="5" /><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" /></>,
  pseudo: <path d="M8 6l-5 6 5 6M16 6l5 6-5 6M13.5 4l-3 16" />,
};

export function CourseIcon({ name }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true">{COURSE_ICONS[name] || COURSE_ICONS.home}</svg>;
}

export const MenuIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
export const Chevron = ({ className = 'm-chev' }) => <svg className={className} viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" /></svg>;
export const ChevronRight = () => <svg className="m-chev m-unext" viewBox="0 0 12 12" aria-hidden="true"><path d="M4.5 2.5 8 6l-3.5 3.5" /></svg>;
export const ChevronLeft = () => <svg className="m-chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M7.5 2.5 4 6l3.5 3.5" /></svg>;
