import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { useAuth } from '../../lib/auth.jsx';
import { GoogleIcon, MailIcon, Spinner } from './ui.jsx';
import { S } from './strings.js';

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const COOLDOWN = 60;

/**
 * Formulari d'entrar o de crear un compte: Google o correu (enllaç i codi de 6 xifres).
 * El fan servir la pàgina /entrar (i /registre) i la capçalera de la portada.
 *   signup  textos de «crea el teu compte»   next  on es va després d'entrar
 *   head    capçalera de la targeta (logo…)  h     etiqueta del títol (h1 a /entrar, h2 a la portada)
 *   title   títol propi (si no, el de signup / entrar)
 */
export default function AuthForm({ signup = false, next = '/tauler', head = null, h: H = 'h1', title, switchLink = true }) {
  const { ui } = useLang();
  const Lx = S[ui];
  const auth = useAuth();
  const [step, setStep] = useState('email'); // email | code
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(null); // null | 'google' | 'send' | 'verify'
  const [err, setErr] = useState('');
  const [wait, setWait] = useState(0);
  const codeRef = useRef(null);
  const { status, ensureClient } = auth;
  const q = '?next=' + encodeURIComponent(next);
  // la biblioteca de comptes es baixa mentre la persona escriu
  useEffect(() => { if (status === 'guest') ensureClient(); }, [status, ensureClient]);
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

  if (step === 'email') {
    return (
      <div className="ac-card" data-state="email">
        {head}
        <H className="ac-h">{title || (signup ? Lx.signupH : Lx.loginH)}</H>
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
        {switchLink && <p className="ac-switch">{signup ? <Link to={'/entrar' + q}>{Lx.toLogin}</Link> : <Link to={'/registre' + q}>{Lx.toSignup}</Link>}</p>}
        <p className="ac-fine">{Lx.privacy}</p>
      </div>
    );
  }
  return (
    <div className="ac-card" data-state="code">
      {head}
      <H className="ac-h"><MailIcon />{Lx.sentH}</H>
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
