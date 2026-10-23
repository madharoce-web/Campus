import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { safeNext, useAuth } from '../../lib/auth.jsx';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import SiteFooter from '../../app/SiteFooter.jsx';
import { GoogleIcon, MailIcon, Spinner } from './ui.jsx';
import { S } from './strings.js';
import './compte.css';

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const COOLDOWN = 60;

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
  const auth = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const next = safeNext(params.get('next'));
  const [step, setStep] = useState('email'); // email | code
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(null); // null | 'google' | 'send' | 'verify'
  const [err, setErr] = useState('');
  const [wait, setWait] = useState(0);
  const codeRef = useRef(null);
  useDocumentTitle(signup ? Lx.signupTitle : Lx.loginTitle);
  const q = '?next=' + encodeURIComponent(next);

  const { status, ensureClient } = auth;
  // la biblioteca de comptes es baixa mentre la persona escriu
  useEffect(() => { if (status === 'guest') ensureClient(); }, [status, ensureClient]);
  useEffect(() => { if (status === 'user') navigate(next, { replace: true }); }, [status, next, navigate]);
  useEffect(() => {
    if (wait <= 0) return undefined;
    const id = setTimeout(() => setWait((w) => w - 1), 1000);
    return () => clearTimeout(id);
  }, [wait]);
  useEffect(() => { if (step === 'code') codeRef.current?.focus(); }, [step]);

  const google = async () => {
    setErr(''); setBusy('google');
    try { await auth.signInWithGoogle(next); } catch { setErr(Lx.errGoogle); setBusy(null); }
  };
  const send = async (e) => {
    e?.preventDefault();
    const em = email.trim();
    if (!EMAIL_RE.test(em)) { setErr(Lx.errEmail); return; }
    setErr(''); setBusy('send');
    try {
      await auth.signInWithEmail(em, next);
      setEmail(em); setStep('code'); setWait(COOLDOWN);
    } catch { setErr(Lx.errSend); }
    setBusy(null);
  };
  const verify = async (e) => {
    e.preventDefault();
    const c = code.replace(/\D/g, '');
    if (c.length < 6) { setErr(Lx.errCode); return; }
    setErr(''); setBusy('verify');
    try { await auth.verifyCode(email, c); } catch { setErr(Lx.errCode); setBusy(null); }
  };

  let card;
  if (status === 'disabled') {
    card = (
      <div className="ac-card" data-state="off">
        <Logo />
        <h1 className="ac-h">{Lx.offH}</h1>
        <p className="ac-sub">{Lx.offP}</p>
        <Link className="am-btn am-btn-primary am-btn-block" to="/cursos">{Lx.offCta}</Link>
      </div>
    );
  } else if (step === 'email') {
    card = (
      <div className="ac-card" data-state="email">
        <Logo />
        <h1 className="ac-h">{signup ? Lx.signupH : Lx.loginH}</h1>
        <p className="ac-sub">{signup ? Lx.signupSub : Lx.loginSub}</p>
        <form onSubmit={send} noValidate>
          <div className="am-field">
            <label className="am-label" htmlFor="ac-email">{Lx.email}</label>
            <input id="ac-email" className="am-input" type="email" inputMode="email" autoComplete="email" placeholder={Lx.emailPh}
              value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!err} aria-describedby={err ? 'ac-err' : undefined} />
            {err && <p className="am-invalid" id="ac-err" role="alert">{err}</p>}
          </div>
          <button type="submit" className="am-btn am-btn-primary am-btn-block ac-submit" disabled={!!busy}>
            {busy === 'send' ? <><Spinner />{Lx.sending}</> : Lx.send}
          </button>
        </form>
        <div className="ac-or"><span>{Lx.or}</span></div>
        <button type="button" className="am-btn am-btn-outline am-btn-block ac-google" onClick={google} disabled={!!busy || status === 'loading'}>
          {busy === 'google' ? <Spinner /> : <GoogleIcon />}<span>{Lx.google}</span>
        </button>
        <p className="ac-switch">{signup ? <Link to={'/entrar' + q}>{Lx.toLogin}</Link> : <Link to={'/registre' + q}>{Lx.toSignup}</Link>}</p>
        <p className="ac-fine">{Lx.privacy}</p>
      </div>
    );
  } else {
    card = (
      <div className="ac-card" data-state="code">
        <Logo />
        <h1 className="ac-h"><MailIcon />{Lx.sentH}</h1>
        <p className="ac-sub">{Lx.sentP.split('%s')[0]}<b>{email}</b>{Lx.sentP.split('%s')[1]}</p>
        <form onSubmit={verify} noValidate>
          <div className="am-field">
            <label className="am-label" htmlFor="ac-code">{Lx.code}</label>
            <input id="ac-code" ref={codeRef} className="am-input ac-code" inputMode="numeric" autoComplete="one-time-code" maxLength={10} placeholder={Lx.codePh}
              value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))} aria-invalid={!!err} aria-describedby={err ? 'ac-err' : undefined} />
            {err && <p className="am-invalid" id="ac-err" role="alert">{err}</p>}
          </div>
          <button type="submit" className="am-btn am-btn-primary am-btn-block ac-submit" disabled={!!busy}>
            {busy === 'verify' ? <><Spinner />{Lx.verifying}</> : Lx.verify}
          </button>
        </form>
        <div className="ac-links">
          <button type="button" className="ac-link" onClick={() => send()} disabled={wait > 0 || !!busy}>
            {wait > 0 ? Lx.resendIn.replace('%d', wait) : Lx.resend}
          </button>
          <button type="button" className="ac-link" onClick={() => { setStep('email'); setCode(''); setErr(''); }}>{Lx.change}</button>
        </div>
      </div>
    );
  }

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
