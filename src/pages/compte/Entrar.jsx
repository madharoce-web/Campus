import { useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { safeNext, useAuth } from '../../lib/auth.jsx';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import SiteFooter from '../../app/SiteFooter.jsx';
import AuthForm from './AuthForm.jsx';
import { S } from './strings.js';
import './compte.css';

/** Marca a dalt de la targeta d'entrar, com a la barra. */
const Logo = () => (
  <div className="ac-logo" aria-hidden="true">
    <span className="ac-mark">AM</span><span className="ac-wm"><span>Aula</span><span>Mada</span></span>
  </div>
);

/** Entrar (/entrar) o crear un compte (/registre): Google o correu amb enllaç i codi. És el mateix camí. */
export default function Entrar({ signup = false }) {
  const { ui } = useLang();
  const Lx = S[ui];
  const { status } = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const next = safeNext(params.get('next'));
  useDocumentTitle(signup ? Lx.signupTitle : Lx.loginTitle);
  useEffect(() => { if (status === 'user') navigate(next, { replace: true }); }, [status, next, navigate]);

  const card = status === 'disabled'
    ? (
      <div className="ac-card" data-state="off">
        <Logo />
        <h1 className="ac-h">{Lx.offH}</h1>
        <p className="ac-sub">{Lx.offP}</p>
        <Link className="am-btn am-btn-primary am-btn-block" to="/cursos">{Lx.offCta}</Link>
      </div>
    )
    : <AuthForm signup={signup} next={next} head={<Logo />} />;

  return (
    <div data-page="compte" className="am-site">
      <main className="ac-login">
        {card}
        {status !== 'disabled' && (
          <section className="ac-perks" aria-labelledby="ac-perks-h">
            <h2 id="ac-perks-h">{Lx.perksH}</h2>
            <ul>{Lx.perks.map((p) => <li key={p}>{p}</li>)}</ul>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
