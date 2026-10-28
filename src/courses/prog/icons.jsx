/* Icones de la pàgina del curs (les mateixes que l'original). */
export const I = {
  page: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.5h7l4 4v13H7z" /><path d="M14 3.5v4h4M9.8 11.5h5.4M9.8 14.5h5.4M9.8 17.5h3.4" /></svg>,
  lab: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2" /><path d="M7.5 9.5l3 2.5-3 2.5M12.5 15h4" /></svg>,
  quiz: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="3" /><path d="M7 8.5h5M7 12h5M7 15.5h5M14.5 8.2l1.2 1.2 2.1-2.4M14.5 11.8l1.2 1.2 2.1-2.4M14.5 15.4l1.2 1.2 2.1-2.4" /></svg>,
  tool: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 6.5a4 4 0 0 0-5.3 5.3l-5.7 5.7 2 2 5.7-5.7a4 4 0 0 0 5.3-5.3l-2.4 2.4-2-2z" /></svg>,
  check: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" /></svg>,
  chev: <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5L6 8l3.5-3.5" /></svg>,
  x: <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9" /></svg>,
  idx: <svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="3.5" width="15" height="13" rx="1.5" /><path d="M7.5 3.5v13M10.5 8h4M10.5 11h4" /></svg>,
  play: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5v14l12-7z" fill="currentColor" stroke="none" /></svg>,
  step: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h8M4 12h12M4 18h6" /><path d="M17 15l3 3-3 3" /></svg>,
  copy: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8.5" y="8.5" width="11" height="11" rx="1.5" /><path d="M15.5 8.5v-3a1.5 1.5 0 0 0-1.5-1.5H6a1.5 1.5 0 0 0-1.5 1.5V14A1.5 1.5 0 0 0 6 15.5h2.5" /></svg>,
  edit: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z" /></svg>,
  ext: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>,
  first: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5v14M18 6l-8 6 8 6z" /></svg>,
  prev: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>,
  next: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>,
  last: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 5v14M6 6l8 6-8 6z" /></svg>,
};

/** Fletxes compartides per les figures SVG del contingut (marker-end="url(#ah)"…). */
export function SvgDefs() {
  const m = (id, fill) => (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0L10 5L0 10z" fill={fill} />
    </marker>
  );
  return (
    <svg className="ip-defs" width="0" height="0" aria-hidden="true">
      <defs>{m('ah', '#495057')}{m('aha', '#696e2e')}{m('aho', '#357a32')}{m('ahb', '#ca3120')}{m('ahq', '#c4307b')}</defs>
    </svg>
  );
}
