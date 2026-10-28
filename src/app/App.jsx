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
import Inici from '../pages/inici/Inici.jsx';
import Preus from '../pages/preus/Preus.jsx';
import Admin from '../pages/admin/Admin.jsx';
import Benvinguda from '../pages/benvinguda/Benvinguda.jsx';
import OnboardingGate from './OnboardingGate.jsx';
import Legal from '../pages/legal/Legal.jsx';
import RequireAccount from './RequireAccount.jsx';
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
        <Route path="registre" element={<Entrar signup />} />
        <Route path="login" element={<Navigate replace to="/entrar" />} />
        <Route path="auth/callback" element={<Callback />} />
        {/* plans: només amb els cobraments activats a /admin (si no, «no s'ha trobat») */}
        <Route path="preus" element={<Preus />} />
        <Route path="legal/:doc" element={<Legal />} />
        <Route path="precios" element={<Navigate replace to="/preus" />} />
        <Route path="pricing" element={<Navigate replace to="/preus" />} />
        <Route path="admin" element={<RequireAccount><Admin /></RequireAccount>} />
        {/* el campus: amb comptes configurats, només per a qui ha entrat */}
        <Route path="benvinguda" element={<RequireAccount><Benvinguda /></RequireAccount>} />
        <Route path="inici" element={<RequireAccount><OnboardingGate><Inici /></OnboardingGate></RequireAccount>} />
        <Route path="tauler" element={<RequireAccount><OnboardingGate><Home view="tauler" /></OnboardingGate></RequireAccount>} />
        <Route path="cursos" element={<RequireAccount><OnboardingGate><Home view="cursos" /></OnboardingGate></RequireAccount>} />
        <Route path="compte" element={<RequireAccount><Compte /></RequireAccount>} />
        <Route path="campus" element={<Navigate replace to="/tauler" />} />
        {COURSES.map((c) => (
          <Route key={c.k} path={c.path.slice(1) + '/*'} element={<RequireAccount><CourseRoute course={c} /></RequireAccount>} />
        ))}
        <Route path=":file" element={<LegacyRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
