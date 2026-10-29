import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { useAuth } from '../../lib/auth.jsx';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import { agoText, cardVisitOf } from '../../lib/visits.js';
import { DEGREES, DEGREE_BY_KEY } from '../../catalog/degrees.js';
import { CARD_BY_KEY } from '../../courses/registry.js';
import Page from '../../app/Page.jsx';
import { NavBlock } from '../../app/blocks.jsx';
import NotFound from '../../app/NotFound.jsx';
import Pattern from '../home/Pattern.jsx';
import DegreeCard from './DegreeCard.jsx';
import { DegreeIcon } from './icons.jsx';
import { S } from './strings.js';
import './graus.css';

function Crumbs({ Lx, children }) {
  return (
    <nav className="am-crumbs" aria-label={Lx.crumbs}>
      <Link to="/inici">{Lx.home}</Link><span className="am-sep">/</span>{children}
    </nav>
  );
}

/** Llista de graus (/graus), com «Els meus cursos». */
function DegreeList({ Lx }) {
  useDocumentTitle(Lx.title);
  return (
    <>
      <Crumbs Lx={Lx}><span>{Lx.title}</span></Crumbs>
      <h1 className="am-h1">{Lx.title}</h1>
      <section aria-labelledby="gr-ovh">
        <h2 className="am-h2" id="gr-ovh">{Lx.overview}</h2>
        <hr className="am-hr" />
        <ul className="am-cgrid">{DEGREES.map((d) => <DegreeCard key={d.k} d={d} Lx={Lx} />)}</ul>
      </section>
    </>
  );
}

/** Targeta d'una assignatura disponible, com a «Els meus cursos». */
function Subject({ card, Lx }) {
  const { t } = useLang();
  const last = cardVisitOf(card);
  return (
    <li className="am-card" data-subject={card.k}>
      <Link className="am-cimgw" to={card.to} tabIndex={-1} aria-hidden="true"><Pattern card={card} className="am-cimg" /></Link>
      <div className="am-cbody">
        <h3 className="am-cname"><Link to={card.to}>{t(card.name)}</Link></h3>
        <div className="am-ccat">{t(card.cat)}</div>
        <p className="am-cmeta">{last ? Lx.last + agoText(last, Lx) : Lx.never}</p>
      </div>
    </li>
  );
}

/** «Avisa'm quan estigui disponible» (llista d'espera; només si la web té comptes). */
function Notify({ d, Lx }) {
  const auth = useAuth();
  const [email, setEmail] = useState(auth.user?.email || '');
  const [state, setState] = useState(null); // null | busy | done | bad | error
  if (!auth.enabled) return null;
  const submit = async (e) => {
    e.preventDefault();
    const em = email.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) { setState('bad'); return; }
    setState('busy');
    try { await auth.joinWaitlist(em, d.k); setState('done'); } catch { setState('error'); }
  };
  return (
    <section className="am-block gr-notify-block" aria-labelledby="gr-notify-h">
      <h2 className="am-bt" id="gr-notify-h">{Lx.notifyH}</h2>
      {state === 'done' ? <div className="am-alert am-alert-success gr-notified" role="status">{Lx.notified}</div> : (
        <form className="gr-notify" onSubmit={submit} noValidate>
          <p>{Lx.notifyP}</p>
          <div className="gr-notify-row">
            <label className="am-sr" htmlFor="gr-email">{Lx.email}</label>
            <input id="gr-email" className="am-input" type="email" inputMode="email" autoComplete="email" placeholder={Lx.emailPh}
              value={email} onChange={(e) => { setEmail(e.target.value); setState(null); }} aria-invalid={state === 'bad'} />
            <button type="submit" className="am-btn am-btn-primary" disabled={state === 'busy'}>{state === 'busy' ? Lx.notifying : Lx.notify}</button>
          </div>
          {state === 'bad' && <p className="am-invalid gr-err" role="alert">{Lx.errEmail}</p>}
          {state === 'error' && <p className="am-invalid gr-err" role="alert">{Lx.errNotify}</p>}
        </form>
      )}
    </section>
  );
}

/** Pàgina d'un grau (/graus/:grau). */
function Degree({ d, Lx }) {
  const { t } = useLang();
  const live = d.status === 'live';
  useDocumentTitle(t(d.name));
  return (
    <>
      <Crumbs Lx={Lx}><Link to="/graus">{Lx.title}</Link><span className="am-sep">/</span><span>{t(d.short)}</span></Crumbs>
      <div className="am-ph">
        <span className="am-ico"><DegreeIcon name={d.icon} /></span>
        <h1 className="am-h1">{t(d.name)}</h1>
        <span className={'am-badge' + (live ? ' am-badge-live' : '')}>{live ? Lx.live : Lx.soon}</span>
      </div>
      <p className="am-sub">{t(d.desc)}</p>
      {live ? d.terms.map((term) => (
        <section key={term.k} className="am-section" data-term={term.k} aria-labelledby={'gr-t-' + term.k}>
          <div className="am-shead">
            <h2 className="am-h2" id={'gr-t-' + term.k}>{t(term.name)}</h2>
            <span className={'am-badge' + (term.status === 'live' ? ' am-badge-live' : '')}>{term.status === 'live' ? Lx.live : Lx.soon}</span>
          </div>
          <hr className="am-hr" />
          {term.status === 'live'
            ? <ul className="am-cgrid">{term.subjects.map((k) => <Subject key={k} card={CARD_BY_KEY[k]} Lx={Lx} />)}</ul>
            : <p className="am-muted">{Lx.termSoon}</p>}
        </section>
      )) : (
        <>
          <div className="am-alert am-alert-info gr-soon" role="note">
            <h2 className="gr-soon-h">{Lx.soonH}</h2>
            <p>{Lx.soonP}</p>
            <div className="am-btn-row">
              <Link className="am-btn am-btn-primary" to="/graus/informatica">{Lx.seeLive}</Link>
              <Link className="am-btn am-btn-secondary" to="/graus">{Lx.allDeg}</Link>
            </div>
          </div>
          <Notify d={d} Lx={Lx} />
        </>
      )}
    </>
  );
}

/** Catàleg de graus: la llista (/graus) i cada grau (/graus/:grau). */
export default function Graus() {
  const { ui } = useLang();
  const { grau } = useParams();
  const Lx = S[ui];
  if (grau && !DEGREE_BY_KEY[grau]) return <NotFound />;
  return (
    <Page name="graus" blocks={<NavBlock />}>
      {grau ? <Degree d={DEGREE_BY_KEY[grau]} Lx={Lx} /> : <DegreeList Lx={Lx} />}
    </Page>
  );
}
