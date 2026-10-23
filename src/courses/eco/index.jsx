import { lazy } from 'react';
import CourseKit from '../_kit/CourseKit.jsx';
import { createStore, StoreContext } from '../_doc/store.js';
import course from './kit/course.js';
import './eco.css';
import './skin.css';

// estat dels laboratoris durant la visita (es conserva en canviar de tema o de pestanya)
const store = createStore();
function LabWrap({ children }) {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

const ECO = {
  ...course,
  labs: {
    fpp: lazy(() => import('./labs/Fpp.jsx')),
    mercat: lazy(() => import('./labs/Market.jsx')),
    cadena: lazy(() => import('./labs/Chain.jsx')),
  },
  LabWrap,
};

/** Principis d'economia: /economia (vegeu src/courses/_kit/CourseKit.jsx per a les rutes). */
export default function Course() {
  return <CourseKit course={ECO} />;
}
