import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { safeNext, useAuth } from '../../lib/auth.jsx';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import SiteFooter from '../../app/SiteFooter.jsx';
import { CheckIcon } from '../graus/icons.jsx';
import { GoogleIcon, MailIcon, Spinner } from './ui.jsx';
import { S } from './strings.js';
import './compte.css';

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const COOLDOWN = 60;

/** Entrar o crear un compte (/entrar): Google o correu amb enllaç i codi. */
export default function Entrar() {
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
  useDocumentTitle(Lx.loginTitle);

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
        <h1>{Lx.offH}</h1>
        <p className="ac-sub">{Lx.offP}</p>
        <Link className="am-btn am-btn-primary am-btn-block am-btn-lg" to="/cursos">{Lx.offCta}</Link>
      </div>
    );
  } else if (step === 'email') {
    card = (
      <div className="ac-card" data-state="email">
        <span className="am-logo-mark ac-mark" aria-hidden="true">AM</span>
        <h1>{Lx.loginH}</h1>
        <p className="ac-sub">{Lx.loginSub}</p>
        <button type="button" className="am-btn ac-google am-btn-block am-btn-lg" onClick={google} disabled={!!busy || status === 'loading'}>
          {busy === 'google' ? <Spinner /> : <GoogleIcon />}<span>{Lx.google}</span>
        </button>
        <div className="ac-or"><span>{Lx.or}</span></div>
        <form onSubmit={send} noValidate>
          <label className="ac-label" htmlFor="ac-email">{Lx.email}</label>
          <input id="ac-email" className="ac-input" type="email" inputMode="email" autoComplete="email" placeholder={Lx.emailPh}
            value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!err} aria-describedby={err ? 'ac-err' : undefined} />
          {err && <p className="ac-err" id="ac-err" role="alert">{err}</p>}
          <button type="submit" className="am-btn am-btn-primary am-btn-block am-btn-lg" disabled={!!busy}>
            {busy === 'send' ? <><Spinner />{Lx.sending}</> : Lx.send}
          </button>
        </form>
        <p className="ac-fine">{Lx.privacy}</p>
      </div>
    );
  } else {
    card = (
      <div className="ac-card" data-state="code">
        <span className="ac-mailmark"><MailIcon /></span>
        <h1>{Lx.sentH}</h1>
        <p className="ac-sub">{Lx.sentP.split('%s')[0]}<b>{email}</b>{Lx.sentP.split('%s')[1]}</p>
        <form onSubmit={verify} noValidate>
          <label className="ac-label" htmlFor="ac-code">{Lx.code}</label>
          <input id="ac-code" ref={codeRef} className="ac-input ac-code" inputMode="numeric" autoComplete="one-time-code" maxLength={10} placeholder={Lx.codePh}
            value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))} aria-invalid={!!err} aria-describedby={err ? 'ac-err' : undefined} />
          {err && <p className="ac-err" id="ac-err" role="alert">{err}</p>}
          <button type="submit" className="am-btn am-btn-primary am-btn-block am-btn-lg" disabled={!!busy}>
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
    <div data-page="compte">
      <main className="ac ac-auth">
        <div className="ac-auth-in">
          <section className="ac-perks" aria-labelledby="ac-perks-h">
            <h2 id="ac-perks-h">{Lx.perksH}</h2>
            <ul>{Lx.perks.map((p) => <li key={p}><span className="ac-perk-ico"><CheckIcon /></span>{p}</li>)}</ul>
          </section>
          {card}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
