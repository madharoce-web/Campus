import { lazy } from 'react';
import CourseKit from '../_kit/CourseKit.jsx';
import { createStore, StoreContext } from '../_doc/store.js';
import course from './kit/course.js';
import { GRAPH_TYPES } from './graphs/types.jsx';
import './logica.css';
import './skin.css';
import './graphs/graphs.css';

// estat de les calculadores i dels laboratoris durant la visita
const store = createStore();
function LabWrap({ children }) {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

const tools = () => import('./components/Tools.jsx'), labs = () => import('./components/Labs.jsx'), glabs = () => import('./components/GraphLabs.jsx');
const pick = (load, name) => lazy(() => load().then((m) => ({ default: m[name] })));

const LOGICA = {
  ...course,
  labs: { tt: pick(tools, 'TruthTool'), unif: pick(tools, 'UnifyTool'), quant: pick(labs, 'QuantLab'), order: pick(labs, 'OrderLab'),
    'g-editor': pick(glabs, 'GEditor'), 'g-euler': pick(glabs, 'GEuler'), 'g-dijkstra': pick(glabs, 'GDijkstra'), 'g-iso': pick(glabs, 'GIso'),
    'g-planar': pick(glabs, 'GPlanar'), 'g-color': pick(glabs, 'GColor'), 'g-tree': pick(glabs, 'GTree'), 'g-cpm': pick(glabs, 'GCpm'),
  },
  LabWrap,
  types: GRAPH_TYPES,
};

/** Lògica i grafs: /logica (vegeu src/courses/_kit/CourseKit.jsx per a les rutes). */
export default function Course() {
  return <CourseKit course={LOGICA} />;
}
