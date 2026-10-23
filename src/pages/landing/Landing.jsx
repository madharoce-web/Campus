import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { AUTH_ENABLED } from '../../lib/supabase.js';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import { DEGREES, subjectsOf } from '../../catalog/degrees.js';
import SiteFooter from '../../app/SiteFooter.jsx';
import { DegreeIcon, FeatureIcon, CheckIcon, ArrowIcon } from '../graus/icons.jsx';
import { S } from './strings.js';
import './landing.css';

/** Maqueta del producte per a la capçalera: una pregunta de simulacre ja corregida. */
function Mock({ L }) {
  return (
    <div className="lp-mock" aria-hidden="true">
      <div className="lp-win">
        <div className="lp-win-bar"><i /><i /><i /><span>{L.mockCourse}</span></div>
        <div className="lp-win-body">
          <div className="lp-q-head"><span className="lp-chip">{L.mockKind}</span><span className="lp-timer">24:13</span></div>
          <div className="lp-q-meta">{L.mockQ}</div>
          <div className="lp-progress"><span style={{ width: '40%' }} /></div>
          <p className="lp-q-stem">{L.mockStem}</p>
          <ul className="lp-opts">
            <li>¬p ∧ q</li>
            <li className="is-ok">p ∧ ¬q <CheckIcon /></li>
            <li>¬p ∨ ¬q</li>
            <li>q → p</li>
          </ul>
          <div className="lp-feedback">{L.mockOk}</div>
        </div>
      </div>
      <div className="lp-float lp-float-a">
        <span className="lp-float-ico"><FeatureIcon name="steps" /></span>
        <span>{L.mockSteps}</span>
      </div>
      <div className="lp-float lp-float-b">
        <span className="lp-dot" />
        <span>{L.mockStreak}</span>
      </div>
    </div>
  );
}

/** Portada pública: què és Aula Mada, com funciona, graus, preu i preguntes. */
export default function Landing() {
  const { ui, t } = useLang();
  const L = S[ui];
  const { hash } = useLocation();
  useDocumentTitle(L.title);

  // enllaços a una secció (/#preguntes): un cop pintada la pàgina
  useEffect(() => {
    if (!hash) return undefined;
    const id = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 0);
    return () => clearTimeout(id);
  }, [hash]);

  return (
    <div data-page="landing">
      <main className="lp">
        <section className="lp-hero">
          <div className="lp-wrap lp-hero-in">
            <div className="lp-hero-copy">
              <p className="lp-eyebrow">{L.eyebrow}</p>
              <h1>{L.h1a} <em>{L.h1b}</em></h1>
              <p className="lp-lead">{L.lead}</p>
              <div className="lp-ctas">
                <Link className="am-btn am-btn-primary am-btn-lg" to="/cursos">{L.cta}<ArrowIcon /></Link>
                <Link className="am-btn am-btn-ghost am-btn-lg" to="/graus">{L.cta2}</Link>
              </div>
              <p className="lp-trust">{L.trust}</p>
            </div>
            <Mock L={L} />
          </div>
        </section>

        <section className="lp-stats" aria-label="Aula Mada">
          <dl className="lp-wrap lp-stats-in">
            {L.stats.map(([n, label]) => <div key={label}><dt>{n}</dt><dd>{label}</dd></div>)}
          </dl>
        </section>

        <section className="lp-sec" id="com-funciona" aria-labelledby="lp-how">
          <div className="lp-wrap">
            <p className="lp-kicker">{L.howK}</p>
            <h2 id="lp-how">{L.howH}</h2>
            <ol className="lp-steps">
              {L.how.map(([h, p], i) => (
                <li key={h}><span className="lp-step-n">{i + 1}</span><h3>{h}</h3><p>{p}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="lp-sec lp-sec-tint" aria-labelledby="lp-feat">
          <div className="lp-wrap">
            <p className="lp-kicker">{L.featK}</p>
            <h2 id="lp-feat">{L.featH}</h2>
            <ul className="lp-feats">
              {L.feats.map(([ico, h, p]) => (
                <li key={h}><span className="lp-feat-ico"><FeatureIcon name={ico} /></span><h3>{h}</h3><p>{p}</p></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="lp-sec" id="graus" aria-labelledby="lp-deg">
          <div className="lp-wrap">
            <p className="lp-kicker">{L.degK}</p>
            <h2 id="lp-deg">{L.degH}</h2>
            <p className="lp-sec-lead">{L.degLead}</p>
            <ul className="lp-degs">
              {DEGREES.map((d) => {
                const live = d.status === 'live';
                return (
                  <li key={d.k} className={'lp-deg' + (live ? ' is-live' : '')} style={{ '--dc': d.color, '--dbg': d.bg }}>
                    <div className="lp-deg-top">
                      <span className="lp-deg-ico"><DegreeIcon name={d.icon} /></span>
                      <span className={'am-badge' + (live ? ' am-badge-live' : '')}>{live ? L.live : L.soon}</span>
                    </div>
                    <h3>{t(d.name)}</h3>
                    <p>{t(d.desc)}</p>
                    <div className="lp-deg-foot">
                      {live && <span className="lp-deg-n">{L.subjects.replace('%d', subjectsOf(d).length)}</span>}
                      <Link to={'/graus/' + d.k} className="lp-deg-link">{live ? L.explore : L.soonCta}<ArrowIcon /></Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="lp-sec lp-sec-tint" id="preu" aria-labelledby="lp-free">
          <div className="lp-wrap lp-free">
            <div>
              <p className="lp-kicker">{L.freeK}</p>
              <h2 id="lp-free">{L.freeH}</h2>
              <p className="lp-sec-lead">{L.freeLead}</p>
            </div>
            <div className="lp-plan">
              <div className="lp-plan-price"><span>0 €</span></div>
              <ul>{L.freeList.map((x) => <li key={x}><CheckIcon />{x}</li>)}</ul>
              <Link className="am-btn am-btn-primary am-btn-block" to="/cursos">{L.freeCta}</Link>
            </div>
          </div>
        </section>

        <section className="lp-sec" id="preguntes" aria-labelledby="lp-faq">
          <div className="lp-wrap lp-faq-wrap">
            <div>
              <p className="lp-kicker">{L.faqK}</p>
              <h2 id="lp-faq">{L.faqH}</h2>
            </div>
            <div className="lp-faq">
              {L.faq.map(([q, a, withAccounts]) => (
                <details key={q}><summary>{q}</summary><p>{AUTH_ENABLED && withAccounts ? withAccounts : a}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section className="lp-end">
          <div className="lp-wrap lp-end-in">
            <h2>{L.endH}</h2>
            <p>{L.endLead}</p>
            <Link className="am-btn am-btn-light am-btn-lg" to="/cursos">{L.cta}<ArrowIcon /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
