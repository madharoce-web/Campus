/** Icones de traç (24×24) de les pàgines públiques: graus i característiques. */
const DEGREE = {
  code: <><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" /><path d="M13.5 4.5l-3 15" /></>,
  chart: <><path d="M4 20h16" /><path d="M7 16v-4M12 16V7M17 16v-7" /></>,
  heart: <><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /><path d="M9 11h2l1-2 1.5 4 1-2h1.5" /></>,
  book: <><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z" /><path d="M13 4h5.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H13z" /></>,
};
const FEATURE = {
  notes: <><path d="M7 3.5h7l4 4v13H7z" /><path d="M14 3.5v4h4M10 12h5M10 15.5h5" /></>,
  lab: <><path d="M9.5 3.5h5M10.5 3.5v5.5L5 18.5a1.5 1.5 0 0 0 1.3 2h11.4a1.5 1.5 0 0 0 1.3-2L13.5 9V3.5" /><path d="M7.5 14.5h9" /></>,
  steps: <><path d="M5 6.5h3M5 12h3M5 17.5h3" /><path d="M11 6.5h8M11 12h8M11 17.5h5" /></>,
  clock: <><circle cx="12" cy="13" r="7.5" /><path d="M12 9v4l2.5 2M10 3h4" /></>,
  exam: <><path d="M6 3.5h12v17H6z" /><path d="M9 8.5l1.5 1.5L13 7.5M9 14h6M9 17h4" /></>,
  code: <><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" /></>,
};

export const DegreeIcon = ({ name }) => <svg viewBox="0 0 24 24" aria-hidden="true">{DEGREE[name] || DEGREE.book}</svg>;
export const FeatureIcon = ({ name }) => <svg viewBox="0 0 24 24" aria-hidden="true">{FEATURE[name] || FEATURE.notes}</svg>;
export const CheckIcon = () => <svg className="am-check" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>;
export const ArrowIcon = () => <svg className="am-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
