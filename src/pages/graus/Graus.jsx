import { Link, useParams } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import { agoText, cardVisitOf } from '../../lib/visits.js';
import { DEGREES, DEGREE_BY_KEY, subjectsOf } from '../../catalog/degrees.js';
import { CARD_BY_KEY } from '../../courses/registry.js';
import SiteFooter from '../../app/SiteFooter.jsx';
import NotFound from '../../app/NotFound.jsx';
import Pattern from '../home/Pattern.jsx';
import { ArrowIcon, DegreeIcon } from './icons.jsx';
import { S } from './strings.js';
import './graus.css';

function Crumbs({ Lx, children }) {
  return (
    <nav className="gr-crumbs" aria-label={Lx.crumbs}>
      <Link to="/">{Lx.home}</Link><span aria-hidden="true">/</span>{children}
    </nav>
  );
}

/** Llista de graus (/graus). */
function DegreeList({ Lx }) {
  const { t } = useLang();
  useDocumentTitle(Lx.title);
  return (
    <>
      <header className="gr-hero">
        <div className="gr-wrap">
          <Crumbs Lx={Lx}><span>{Lx.title}</span></Crumbs>
          <h1>{Lx.title}</h1>
          <p className="gr-lead">{Lx.lead}</p>
        </div>
      </header>
      <div className="gr-wrap gr-body">
        <ul className="gr-degs">
          {DEGREES.map((d) => {
            const live = d.status === 'live';
            return (
              <li key={d.k} className={'gr-deg' + (live ? ' is-live' : '')} data-degree={d.k} style={{ '--dc': d.color, '--dbg': d.bg }}>
                <span className="gr-deg-ico"><DegreeIcon name={d.icon} /></span>
                <div className="gr-deg-main">
                  <div className="gr-deg-head">
                    <h2><Link to={'/graus/' + d.k}>{t(d.name)}</Link></h2>
                    <span className={'am-badge' + (live ? ' am-badge-live' : '')}>{live ? Lx.live : Lx.soon}</span>
                  </div>
                  <p>{t(d.desc)}</p>
                  {live && <p className="gr-deg-n">{Lx.subjects.replace('%d', subjectsOf(d).length)}</p>}
                </div>
                <Link className="gr-deg-go" to={'/graus/' + d.k} aria-hidden="true" tabIndex={-1}><ArrowIcon /></Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

/** Targeta d'una assignatura disponible. */
function Subject({ card, Lx }) {
  const { t } = useLang();
  const last = cardVisitOf(card);
  return (
    <li className="gr-sub" data-subject={card.k}>
      <Link className="gr-sub-img" to={card.to} tabIndex={-1} aria-hidden="true"><Pattern card={card} className="gr-pat" /></Link>
      <div className="gr-sub-body">
        <p className="gr-sub-cat">{t(card.cat)}</p>
        <h3><Link to={card.to}>{t(card.name)}</Link></h3>
        <p className="gr-sub-desc">{t(card.desc)}</p>
        <ul className="gr-secs">
          {card.secs.map((s) => <li key={s[0]}><Link to={card.to + '/' + s[0]}>{t(s.slice(1))}</Link></li>)}
        </ul>
        <div className="gr-sub-foot">
          <Link className="am-btn am-btn-primary" to={card.to}>{Lx.enter}</Link>
          <span className="gr-last">{last ? Lx.last + agoText(last, Lx) : Lx.never}</span>
        </div>
      </div>
    </li>
  );
}

/** Pàgina d'un grau (/graus/:grau). */
function Degree({ d, Lx }) {
  const { t } = useLang();
  const live = d.status === 'live';
  useDocumentTitle(t(d.name));
  return (
    <>
      <header className="gr-hero" style={{ '--dc': d.color, '--dbg': d.bg }}>
        <div className="gr-wrap">
          <Crumbs Lx={Lx}><Link to="/graus">{Lx.title}</Link><span aria-hidden="true">/</span><span>{t(d.short)}</span></Crumbs>
          <div className="gr-title">
            <span className="gr-deg-ico gr-deg-ico-lg"><DegreeIcon name={d.icon} /></span>
            <h1>{t(d.name)}</h1>
            <span className={'am-badge' + (live ? ' am-badge-live' : '')}>{live ? Lx.live : Lx.soon}</span>
          </div>
          <p className="gr-lead">{t(d.desc)}</p>
        </div>
      </header>
      <div className="gr-wrap gr-body">
        {live ? d.terms.map((term) => (
          <section key={term.k} className="gr-term" data-term={term.k} aria-labelledby={'gr-t-' + term.k}>
            <div className="gr-term-head">
              <h2 id={'gr-t-' + term.k}>{t(term.name)}</h2>
              <span className={'am-badge' + (term.status === 'live' ? ' am-badge-live' : '')}>{term.status === 'live' ? Lx.live : Lx.soon}</span>
            </div>
            {term.status === 'live'
              ? <ul className="gr-subs">{term.subjects.map((k) => <Subject key={k} card={CARD_BY_KEY[k]} Lx={Lx} />)}</ul>
              : <p className="gr-muted">{Lx.termSoon}</p>}
          </section>
        )) : (
          <div className="gr-soon">
            <h2>{Lx.soonH}</h2>
            <p>{Lx.soonP}</p>
            <div className="gr-soon-ctas">
              <Link className="am-btn am-btn-primary" to="/graus/informatica">{Lx.seeLive}<ArrowIcon /></Link>
              <Link className="am-btn am-btn-ghost" to="/graus">{Lx.allDeg}</Link>
            </div>
          </div>
        )}
      </div>
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
    <div data-page="graus">
      <main className="gr">
        {grau ? <Degree d={DEGREE_BY_KEY[grau]} Lx={Lx} /> : <DegreeList Lx={Lx} />}
      </main>
      <SiteFooter />
    </div>
  );
}
