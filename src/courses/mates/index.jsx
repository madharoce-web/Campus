import { cloneElement, lazy } from 'react';
import CourseKit from '../_kit/CourseKit.jsx';
import { createStore, StoreContext } from './store.js';
import { LabContext } from './ui.jsx';
import course from './kit/course.js';
import { MATES_TYPES } from './kit/types.jsx';
import { formats } from './kit/families.js';
import './mates.css';
import './skin.css';
import './kit/kit.css';

// estat dels laboratoris durant la visita (es conserva en canviar de tema o de pestanya)
const store = createStore();
function LabWrap({ lab, props, children }) {
  // LabContext: data-w i data-id del marc del laboratori; cfg: la configuració inicial (o res)
  return (
    <StoreContext.Provider value={store}>
      <LabContext.Provider value={{ w: lab, id: props && props.id }}>{cloneElement(children, { cfg: (props && props.cfg) || {} })}</LabContext.Provider>
    </StoreContext.Provider>
  );
}

const conj = () => import('./labs/conj.jsx'), rel = () => import('./labs/rel.jsx'), nomb = () => import('./labs/nomb.jsx'), cx = () => import('./labs/cx.jsx'), mat = () => import('./labs/mat.jsx');
const lab = (load, name) => lazy(() => load().then((m) => ({ default: m[name] })));
const LABS = {
  caixes: lab(conj, 'Caixes'), compr: lab(conj, 'Compr'), parts: lab(conj, 'Parts'), venn: lab(conj, 'Venn'), particio: lab(conj, 'Particio'), producte: lab(conj, 'Producte'),
  relacio: lab(rel, 'Relacio'), congru: lab(rel, 'Congru'), hasse: lab(rel, 'Hasse'), demorel: lab(rel, 'Demorel'),
  nombres: lab(nomb, 'Nombres'), axiomes: lab(nomb, 'Axiomes'), absval: lab(nomb, 'Absval'), domino: lab(nomb, 'Domino'), indprova: lab(nomb, 'Indprova'),
  recursiu: lab(nomb, 'Recursiu'), quocient: lab(nomb, 'Quocient'), suprem: lab(nomb, 'Suprem'), reals: lab(nomb, 'Reals'), interval: lab(nomb, 'Interval'),
  complex: lab(cx, 'Complex'), polinomi: lab(cx, 'Polinomi'),
  mxanat: lab(mat, 'Mxanat'), mxops: lab(mat, 'Mxops'), mxprod: lab(mat, 'Mxprod'), mxtype: lab(mat, 'Mxtype'), mxsarrus: lab(mat, 'Mxsarrus'),
  mxminor: lab(mat, 'Mxminor'), mxinv: lab(mat, 'Mxinv'), mxrank: lab(mat, 'Mxrank'),
};

const MATES = { ...course, labs: LABS, LabWrap, types: MATES_TYPES, formats };

/** Teoria Mates CP1: /mates (vegeu src/courses/_kit/CourseKit.jsx per a les rutes). */
export default function Course() {
  return <CourseKit course={MATES} />;
}
