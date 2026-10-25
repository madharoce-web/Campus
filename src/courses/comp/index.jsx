import { lazy } from 'react';
import CourseKit from '../_kit/CourseKit.jsx';
import { createStore, StoreContext } from './store.js';
import { LabContext } from './ui.jsx';
import course from './kit/course.js';
import { COMP_TYPES } from './kit/types.jsx';
import { BOOLE_TYPES } from './kit/t3/types.jsx';
import { formats } from './kit/families.js';
import { examQuestions } from './content/index.js';
import './comp.css';
import './skin.css';

// estat dels laboratoris durant la visita (es conserva en canviar de tema o de pestanya)
const store = createStore();
function LabWrap({ lab, props, children }) {
  // LabContext: data-w i data-id del marc del laboratori, com abans
  return <StoreContext.Provider value={store}><LabContext.Provider value={{ w: lab, id: props && props.id }}>{children}</LabContext.Provider></StoreContext.Provider>;
}

const t1 = () => import('./labs/t1.jsx'), t21 = () => import('./labs/t21.jsx'), t22 = () => import('./labs/t22.jsx'), bl = () => import('./kit/t3/labs.jsx');
const lab = (load, name) => lazy(() => load().then((m) => ({ default: m[name] })));
const LABS = {
  bits: lab(t1, 'Bits'), units: lab(t1, 'Units'), transfer: lab(t1, 'Transfer'), vonneumann: lab(t1, 'VonNeumann'),
  cache: lab(t1, 'Cache'), flynn: lab(t1, 'Flynn'), compila: lab(t1, 'Compila'),
  tfn: lab(t21, 'Tfn'), conv: lab(t21, 'Conv'), group: lab(t21, 'Group'), arith: lab(t21, 'Arith'), signed: lab(t21, 'Signed'),
  encode: lab(t21, 'Encode'), ieee: lab(t21, 'Ieee'), norm: lab(t21, 'Norm'),
  image: lab(t22, 'Image'), rgb: lab(t22, 'Rgb'), audio: lab(t22, 'Audio'), video: lab(t22, 'Video'),
  'boole-gates': lab(bl, 'Gates'), 'boole-truth': lab(bl, 'Truth'), 'boole-equiv': lab(bl, 'Equiv'),
};

const COMP = { ...course, labs: LABS, LabWrap, types: { ...COMP_TYPES, ...BOOLE_TYPES }, formats: formats(examQuestions) };

/** Computadors CP1: /computadors (vegeu src/courses/_kit/CourseKit.jsx per a les rutes). */
export default function Course() {
  return <CourseKit course={COMP} />;
}
