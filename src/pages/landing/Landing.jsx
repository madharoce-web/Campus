import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { useAuth } from '../../lib/auth.jsx';
import { AUTH_ENABLED } from '../../lib/supabase.js';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import { DEGREES } from '../../catalog/degrees.js';
import SiteFooter from '../../app/SiteFooter.jsx';
import DegreeCard from '../graus/DegreeCard.jsx';
import { FeatureIcon } from '../graus/icons.jsx';
import { S } from './strings.js';
import './landing.css';

/** Color de cada icona de característica (els de les activitats de l'aula). */
const FEAT_COLOR = { notes: '#0d8ba1', lab: '#399be2', steps: '#836fff', clock: '#c4307b', exam: '#c4307b', code: '#0d8ba1' };

/** Portada del lloc: què és Aula Mada, graus, com funciona i preguntes; blocs a la dreta. */
export default function Landing() {
  const { ui } = useLang();
  const L = S[ui];
  const { status } = useAuth();
  const { hash } = useLocation();
  useDocumentTitle(L.title);

  // enllaços a una secció (/#preguntes): un cop pintada la pàgina
  useEffect(() => {
    if (!hash) return undefined;
    const id = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 0);
    return () => clearTimeout(id);
  }, [hash]);

  return (
    <div data-page="landing" className="am-site">
      <div className="am-layout am-with-blocks">
        <main className="am-main">
          <div className="am-main-in">
            <h1 className="am-h1">Aula Mada</h1>
            <p className="am-lead">{L.lead}</p>
            <div className="am-btn-row lp-ctas">
              <Link className="am-btn am-btn-primary" to="/cursos">{L.cta}</Link>
              <Link className="am-btn am-btn-secondary" to="/graus">{L.cta2}</Link>
            </div>

            <section className="am-section" id="graus" aria-labelledby="lp-deg">
              <h2 className="am-h2" id="lp-deg">{L.degH}</h2>
              <hr className="am-hr" />
              <ul className="am-cgrid">{DEGREES.map((d) => <DegreeCard key={d.k} d={d} Lx={L} />)}</ul>
            </section>

            <section className="am-section" id="com-funciona" aria-labelledby="lp-how">
              <h2 className="am-h2" id="lp-how">{L.howH}</h2>
              <hr className="am-hr" />
              <ol className="lp-steps">
                {L.how.map(([h, p], i) => (
                  <li key={h}><span className="lp-n">{i + 1}</span><div><h3 className="am-h3">{h}</h3><p>{p}</p></div></li>
                ))}
              </ol>
            </section>

            <section className="am-section" aria-labelledby="lp-feat">
              <h2 className="am-h2" id="lp-feat">{L.featH}</h2>
              <hr className="am-hr" />
              <ul className="lp-feats">
                {L.feats.map(([ico, h, p]) => (
                  <li key={h}>
                    <span className="lp-fico" style={{ color: FEAT_COLOR[ico] }}><FeatureIcon name={ico} /></span>
                    <div><h3 className="am-h3">{h}</h3><p>{p}</p></div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="am-section" id="preguntes" aria-labelledby="lp-faq">
              <h2 className="am-h2" id="lp-faq">{L.faqH}</h2>
              <hr className="am-hr" />
              <div className="lp-faq">
                {L.faq.map(([q, a, withAccounts]) => (
                  <details key={q}><summary>{q}</summary><p>{AUTH_ENABLED && withAccounts ? withAccounts : a}</p></details>
                ))}
              </div>
            </section>
          </div>
        </main>

        <aside className="am-blocks" aria-label={L.accessH}>
          <section className="am-block" aria-labelledby="lp-b-access">
            <h2 className="am-bt" id="lp-b-access">{L.accessH}</h2>
            {status !== 'user' && <p>{status === 'guest' ? L.accessOn : L.access}</p>}
            <div className="am-btn-row">
              {status === 'guest' && <Link className="am-btn am-btn-primary" to="/entrar?next=%2Fcursos">{L.signIn}</Link>}
              <Link className={'am-btn ' + (status === 'guest' ? 'am-btn-secondary' : 'am-btn-primary')} to="/cursos">{L.myCourses}</Link>
            </div>
          </section>
          <section className="am-block" aria-labelledby="lp-b-news">
            <h2 className="am-bt" id="lp-b-news">{L.newsH}</h2>
            <ul className="lp-news">
              {L.news.map(([when, what]) => <li key={what}><span className="am-muted">{when}</span><span>{what}</span></li>)}
            </ul>
          </section>
          <section className="am-block" id="preu" aria-labelledby="lp-b-price">
            <h2 className="am-bt" id="lp-b-price">{L.priceH}</h2>
            <p className="lp-price">{L.price}</p>
            <ul className="lp-plain">{L.priceList.map((x) => <li key={x}>{x}</li>)}</ul>
          </section>
        </aside>
      </div>
      <SiteFooter />
    </div>
  );
}
