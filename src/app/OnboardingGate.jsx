import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../lib/auth.jsx';
import { useCampus } from '../lib/campus.js';
import { useHold } from './Curtain.jsx';

/**
 * Un compte nou passa primer pel registre guiat (/benvinguda) abans d'entrar a l'inici, al tauler o
 * a «Els meus cursos». Compta com a fet si el perfil té onboarded_at o el campus (sincronitzat) té
 * done. Sense comptes (mode local) no s'obliga: «Els meus cursos» ho ofereix.
 * Mentre es carrega el perfil d'un compte que acaba d'entrar, el teló de transició tapa la pantalla:
 * així no es veu un instant el campus abans d'anar al registre guiat.
 */
export default function OnboardingGate({ children }) {
  const { status, profile, profileReady } = useAuth();
  const campus = useCampus();
  const { pathname, search } = useLocation();
  const deciding = status === 'user' && !profileReady && !campus.done;
  const needs = status === 'user' && !!profile && !profile.onboarded_at && !campus.done;
  useHold(deciding || needs);
  if (deciding) return null;
  if (needs) return <Navigate replace to={'/benvinguda?next=' + encodeURIComponent(pathname + search)} />;
  return children;
}
