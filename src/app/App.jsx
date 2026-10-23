import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import Shell from './Shell.jsx';
import CourseRoute from './CourseRoute.jsx';
import LegacyRedirect from './LegacyRedirect.jsx';
import NotFound from './NotFound.jsx';
import Landing from '../pages/landing/Landing.jsx';
import Graus from '../pages/graus/Graus.jsx';
import Home from '../pages/home/Home.jsx';
import Entrar from '../pages/compte/Entrar.jsx';
import Callback from '../pages/compte/Callback.jsx';
import Compte from '../pages/compte/Compte.jsx';
import { COURSES } from '../courses/registry.js';

/** /grados/ade i /degrees/ade → /graus/ade */
function ToGraus() {
  const { grau } = useParams();
  return <Navigate replace to={grau ? '/graus/' + grau : '/graus'} />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<Landing />} />
        <Route path="graus" element={<Graus />} />
        <Route path="graus/:grau" element={<Graus />} />
        {['grados', 'degrees'].map((p) => [
          <Route key={p} path={p} element={<ToGraus />} />,
          <Route key={p + '/:grau'} path={p + '/:grau'} element={<ToGraus />} />,
        ])}
        <Route path="entrar" element={<Entrar />} />
        <Route path="login" element={<Navigate replace to="/entrar" />} />
        <Route path="auth/callback" element={<Callback />} />
        <Route path="compte" element={<Compte />} />
        <Route path="tauler" element={<Home view="tauler" />} />
        <Route path="cursos" element={<Home view="cursos" />} />
        {/* l'antiga pàgina d'inici del semestre és ara la pàgina del grau */}
        <Route path="inici" element={<Navigate replace to="/graus/informatica" />} />
        <Route path="campus" element={<Navigate replace to="/cursos" />} />
        {COURSES.map((c) => (
          <Route key={c.k} path={c.path.slice(1) + '/*'} element={<CourseRoute course={c} />} />
        ))}
        <Route path=":file" element={<LegacyRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
