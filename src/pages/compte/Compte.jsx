import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { useAuth } from '../../lib/auth.jsx';
import { getSyncStatus, onSyncStatus } from '../../lib/sync.js';
import { agoText } from '../../lib/visits.js';
import { initials } from '../../lib/initials.js';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import { DEGREES } from '../../catalog/degrees.js';
import SiteFooter from '../../app/SiteFooter.jsx';
import { Crumbs, Spinner } from './ui.jsx';
import { S } from './strings.js';
import './compte.css';

function SyncLine({ Lx }) {
  const st = useSyncExternalStore(onSyncStatus, getSyncStatus);
  const text = st.state === 'syncing' ? Lx.syncing
    : st.state === 'error' ? Lx.syncErr
    : st.state === 'ok' ? Lx.syncAgo.replace('%s', agoText(st.at, Lx))
    : Lx.syncIdle;
  return <p className={'ac-sync is-' + st.state} role="status"><span className="ac-sync-dot" aria-hidden="true" />{text}</p>;
}

function Profile({ Lx }) {
  const { t, ui, setLang } = useLang();
  const { profile, updateProfile } = useAuth();
  const [name, setName] = useState(profile?.display_name || '');
  const [degree, setDegree] = useState(profile?.degree || '');
  const [state, setState] = useState(null); // null | saving | saved | error
  useEffect(() => {
    setName(profile?.display_name || '');
    setDegree(profile?.degree || '');
  }, [profile?.display_name, profile?.degree]);
  const save = async (e) => {
    e.preventDefault();
    setState('saving');
    try {
      await updateProfile({ display_name: name.trim() || null, degree: degree || null });
      setState('saved');
    } catch { setState('error'); }
  };
  return (
    <form className="ac-form" onSubmit={save}>
      <div className="am-field">
        <label className="am-label" htmlFor="ac-name">{Lx.name}</label>
        <input id="ac-name" className="am-input" maxLength={80} autoComplete="name" placeholder={Lx.namePh} value={name}
          onChange={(e) => { setName(e.target.value); setState(null); }} />
      </div>
      <div className="am-field">
        <label className="am-label" htmlFor="ac-degree">{Lx.degree}</label>
        <select id="ac-degree" className="am-input" value={degree} onChange={(e) => { setDegree(e.target.value); setState(null); }}>
          <option value="">{Lx.noDegree}</option>
          {DEGREES.map((d) => <option key={d.k} value={d.k}>{t(d.name)}</option>)}
        </select>
      </div>
      <div className="am-field">
        <label className="am-label" htmlFor="ac-lang">{Lx.lang}</label>
        <select id="ac-lang" className="am-input" value={ui} onChange={(e) => setLang(e.target.value)}>
          {Lx.langs.map(([k, n]) => <option key={k} value={k}>{n}</option>)}
        </select>
      </div>
      <div className="ac-actions">
        <button type="submit" className="am-btn am-btn-primary" disabled={state === 'saving' || !profile}>
          {state === 'saving' ? <><Spinner />{Lx.saving}</> : Lx.save}
        </button>
        {state === 'saved' && <span className="ac-ok" role="status">{Lx.saved}</span>}
        {state === 'error' && <span className="am-invalid" role="alert">{Lx.errSave}</span>}
      </div>
    </form>
  );
}

function Danger({ Lx }) {
  const { user, deleteAccount } = useAuth();
  const [open, setOpen] = useState(false);
  const [typed, setTyped] = useState('');
  const [state, setState] = useState(null); // null | deleting | error
  const ok = typed.trim().toLowerCase() === (user?.email || '').toLowerCase();
  const del = async (e) => {
    e.preventDefault();
    if (!ok) return;
    setState('deleting');
    try { await deleteAccount(); } catch { setState('error'); }
  };
  if (!open) return <div className="ac-actions"><button type="button" className="am-btn am-btn-outline-danger ac-danger-btn" onClick={() => setOpen(true)}>{Lx.del}</button></div>;
  return (
    <form className="ac-form" onSubmit={del}>
      <div className="am-field">
        <label className="am-label" htmlFor="ac-del">{Lx.delConfirm}</label>
        <input id="ac-del" className="am-input" type="email" autoComplete="off" placeholder={user?.email} value={typed} onChange={(e) => setTyped(e.target.value)} />
      </div>
      <div className="ac-actions">
        <button type="submit" className="am-btn am-btn-danger ac-danger-solid" disabled={!ok || state === 'deleting'}>
          {state === 'deleting' ? <><Spinner />{Lx.deleting}</> : Lx.delGo}
        </button>
        <button type="button" className="am-btn am-btn-secondary" onClick={() => { setOpen(false); setTyped(''); setState(null); }}>{Lx.cancel}</button>
        {state === 'error' && <span className="am-invalid" role="alert">{Lx.errDel}</span>}
      </div>
    </form>
  );
}

/** El meu compte (/compte): perfil, sincronització, dades, sessió i esborrat. */
export default function Compte() {
  const { ui } = useLang();
  const Lx = S[ui];
  const auth = useAuth();
  const { status, user, profile } = auth;
  const [dl, setDl] = useState(null); // null | busy | error
  useDocumentTitle(Lx.title);

  const download = async () => {
    setDl('busy');
    try {
      const data = await auth.exportData();
      const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
      const a = Object.assign(document.createElement('a'), { href: url, download: 'aula-mada-dades.json' });
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setDl(null);
    } catch { setDl('error'); }
  };

  let body;
  if (status === 'loading') {
    body = <div className="ac-wait" role="status"><Spinner /></div>;
  } else if (status !== 'user') {
    body = (
      <div className="am-block ac-guest" data-state="guest">
        <h2 className="am-bt">{Lx.guestH}</h2>
        <p>{Lx.guestP}</p>
        <div className="am-btn-row"><Link className="am-btn am-btn-primary" to="/entrar?next=%2Fcompte">{Lx.guestCta}</Link></div>
      </div>
    );
  } else {
    const plan = profile?.plan === 'pro' ? Lx.planPro : Lx.planFree;
    body = (
      <div className="ac-grid">
        <section className="am-block" aria-labelledby="ac-h-profile">
          <h2 className="am-bt" id="ac-h-profile">{Lx.profileH}</h2>
          <Profile Lx={Lx} />
        </section>
        <div className="ac-col">
          <section className="am-block" aria-labelledby="ac-h-sync">
            <h2 className="am-bt" id="ac-h-sync">{Lx.syncH}</h2>
            <p className="ac-p">{Lx.syncP}</p>
            <SyncLine Lx={Lx} />
          </section>
          <section className="am-block" aria-labelledby="ac-h-plan">
            <h2 className="am-bt" id="ac-h-plan">{Lx.planH} <span className="am-badge am-badge-live">{plan}</span></h2>
            <p className="ac-p">{Lx.planP}</p>
          </section>
          <section className="am-block" aria-labelledby="ac-h-data">
            <h2 className="am-bt" id="ac-h-data">{Lx.dataH}</h2>
            <p className="ac-p">{Lx.dataP}</p>
            <div className="ac-actions">
              <button type="button" className="am-btn am-btn-secondary" onClick={download} disabled={dl === 'busy'}>
                {dl === 'busy' ? <><Spinner />{Lx.preparing}</> : Lx.download}
              </button>
              {dl === 'error' && <span className="am-invalid" role="alert">{Lx.errData}</span>}
            </div>
          </section>
        </div>
        <section className="am-block" aria-labelledby="ac-h-session">
          <h2 className="am-bt" id="ac-h-session">{Lx.sessionH}</h2>
          <p className="ac-p">{Lx.sessionP}</p>
          <div className="ac-actions">
            <button type="button" className="am-btn am-btn-secondary" id="ac-signout" onClick={() => auth.signOut()}>{Lx.signOut}</button>
          </div>
        </section>
        <section className="am-block ac-danger" aria-labelledby="ac-h-danger">
          <h2 className="am-bt" id="ac-h-danger">{Lx.dangerH}</h2>
          <p className="ac-p">{Lx.dangerP}</p>
          <Danger Lx={Lx} />
        </section>
      </div>
    );
  }

  return (
    <div data-page="compte" className="am-site">
      <div className="am-layout">
        <main className="am-main">
          <div className="am-main-in">
            <Crumbs Lx={Lx}><span>{Lx.title}</span></Crumbs>
            <div className="am-ph ac-head">
              {status === 'user' && <span className="ac-avatar" aria-hidden="true">{initials(profile?.display_name, user?.email)}</span>}
              <div>
                <h1 className="am-h1">{status === 'user' && profile?.display_name ? profile.display_name : Lx.title}</h1>
                {status === 'user' && <p className="ac-email">{user?.email}</p>}
              </div>
            </div>
            {body}
          </div>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
