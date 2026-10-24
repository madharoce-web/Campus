import { lazy } from 'react';
import CourseKit from '../_kit/CourseKit.jsx';
import course from './kit/course.js';
import { PROG_TYPES } from './kit/types.jsx';
import { formats } from './kit/families.js';
import CodeBlock from './CodeBlock.jsx';
import { SvgDefs } from './icons.jsx';
import './prog.css';
import '../cpp/cpp.css';
import '../pseudo/pseudo.css';
import './kit/kit.css';

const labs = () => import('./kit/labs.jsx');
const LABS = {
  expr: lazy(() => import('./ExprLab.jsx')),
  exlist: lazy(() => labs().then((m) => ({ default: m.ExList }))),
  pati: lazy(() => labs().then((m) => ({ default: m.Pati }))),
};

/** Codi del contingut: es pot copiar, editar, executar (Clang o l'intèrpret de pseudocodi) i traçar. */
function Code(props) {
  return <div data-course="prog" className="pg-code"><CodeBlock {...props} /></div>;
}

const PROG = { ...course, labs: LABS, CodeBlock: Code, types: PROG_TYPES, formats };

/** Iniciació a la Programació (amb el pseudocodi i el C++): /programacio (vegeu src/courses/_kit/CourseKit.jsx). */
export default function Course() {
  return (
    <>
      <div data-course="prog" className="pg-defs"><SvgDefs /></div>
      <CourseKit course={PROG} />
    </>
  );
}
