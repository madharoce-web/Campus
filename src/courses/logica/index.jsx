import { lazy } from 'react';
import CourseKit from '../_kit/CourseKit.jsx';
import { createStore, StoreContext } from '../_doc/store.js';
import course from './kit/course.js';
import './logica.css';
import './skin.css';

// estat de les calculadores i dels laboratoris durant la visita
const store = createStore();
function LabWrap({ children }) {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

const tools = () => import('./components/Tools.jsx'), labs = () => import('./components/Labs.jsx');
const pick = (load, name) => lazy(() => load().then((m) => ({ default: m[name] })));

const LOGICA = {
  ...course,
  labs: { tt: pick(tools, 'TruthTool'), unif: pick(tools, 'UnifyTool'), quant: pick(labs, 'QuantLab'), order: pick(labs, 'OrderLab') },
  LabWrap,
};

/** Lògica i grafs: /logica (vegeu src/courses/_kit/CourseKit.jsx per a les rutes). */
export default function Course() {
  return <CourseKit course={LOGICA} />;
}
