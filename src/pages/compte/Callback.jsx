import { useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { safeNext, useAuth } from '../../lib/auth.jsx';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import { Spinner } from './ui.jsx';
import { S } from './strings.js';
import './compte.css';

/**
 * Tornada de Google o de l'enllaç del correu (/auth/callback?code=…&next=…).
 * Supabase canvia el codi per la sessió en carregar-se; aquí només s'espera i es redirigeix.
 */
export default function Callback() {
  const { ui } = useLang();
  const Lx = S[ui];
  const { status } = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const next = safeNext(params.get('next'));
  const failed = status === 'guest' || status === 'disabled' || params.has('error') || params.has('error_description');
  useDocumentTitle(Lx.cbTitle);

  useEffect(() => { if (status === 'user') navigate(next, { replace: true }); }, [status, next, navigate]);

  return (
    <div data-page="compte">
      <main className="ac ac-auth">
        <div className="ac-auth-in ac-auth-solo">
          {failed && status !== 'user' ? (
            <div className="ac-card" data-state="error" role="alert">
              <h1>{Lx.cbErrH}</h1>
              <p className="ac-sub">{Lx.cbErrP}</p>
              <Link className="am-btn am-btn-primary am-btn-block am-btn-lg" to={'/entrar?next=' + encodeURIComponent(next)}>{Lx.cbRetry}</Link>
            </div>
          ) : (
            <div className="ac-card ac-wait" role="status"><Spinner /><span>{Lx.cbWait}</span></div>
          )}
        </div>
      </main>
    </div>
  );
}
