import { Route, Routes } from 'react-router-dom';
import Shell from './Shell.jsx';
import CourseRoute from './CourseRoute.jsx';
import LegacyRedirect from './LegacyRedirect.jsx';
import NotFound from './NotFound.jsx';
import Home from '../pages/home/Home.jsx';
import { COURSES } from '../courses/registry.js';

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<Home view="cursos" />} />
        <Route path="inici" element={<Home view="inici" />} />
        <Route path="tauler" element={<Home view="tauler" />} />
        <Route path="cursos" element={<Home view="cursos" />} />
        {COURSES.map((c) => (
          <Route key={c.k} path={c.path.slice(1) + '/*'} element={<CourseRoute course={c} />} />
        ))}
        <Route path=":file" element={<LegacyRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
