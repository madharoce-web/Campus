import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../lib/auth.jsx';
import { useCampus } from '../lib/campus.js';

/**
 * Un compte nou passa primer pel registre guiat (/benvinguda) abans d'entrar a l'inici, al tauler o
 * a «Els meus cursos». Compta com a fet si el perfil té onboarded_at o el campus (sincronitzat) té
 * done. Sense comptes (mode local) no s'obliga: «Els meus cursos» ho ofereix.
 */
export default function OnboardingGate({ children }) {
  const { status, profile } = useAuth();
  const campus = useCampus();
  const { pathname, search } = useLocation();
  if (status !== 'user' || !profile || profile.onboarded_at || campus.done) return children;
  return <Navigate replace to={'/benvinguda?next=' + encodeURIComponent(pathname + search)} />;
}
