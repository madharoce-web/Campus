import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UI_LANGS, useLang } from '../../lib/i18n.jsx';
import { useAuth } from '../../lib/auth.jsx';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import { DEGREES } from '../../catalog/degrees.js';
import { CARDS } from '../../courses/registry.js';
import { BlockIcon } from '../../app/blocks.jsx';
import { BRAND } from '../../app/strings.js';
import DegreeCard from '../graus/DegreeCard.jsx';
import Pattern from '../home/Pattern.jsx';
import { S } from './strings.js';
import './landing.css';

const CHECK = <svg className="lp-check" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3 7-7" /></svg>;

/** Botons d'accés segons l'estat: sense comptes, convidat o amb sessió. */
function useCtas(L) {
  const { status } = useAuth();
  if (status === 'disabled') return { primary: ['/tauler', L.openCampus], secondary: null, header: [['/tauler', L.openCampus, true]] };
  if (status === 'user') return { primary: ['/tauler', L.toCampus], secondary: null, header: [['/tauler', L.toCampus, true]] };
  return {
    primary: ['/registre?next=%2Ftauler', L.heroCta], secondary: ['/entrar?next=%2Ftauler', L.signIn],
    header: [['/entrar?next=%2Ftauler', L.signIn, false], ['/registre?next=%2Ftauler', L.signUp, true]],
  };
}

/** Portada pública: presentació, avantatges, com funciona, graus, accés gratuït i preguntes. */
export default function Landing() {
  const { ui, setLang, t } = useLang();
  const L = S[ui];
  const cta = useCtas(L);
  const { hash } = useLocation();
  const { farewell, clearFarewell } = useAuth();
  useDocumentTitle(L.title);
  // ja som a la portada després de sortir: la propera visita al campus torna a demanar d'entrar
  useEffect(() => { if (farewell) clearFarewell(); }, [farewell, clearFarewell]);

  // enllaços a una secció (/#preguntes): un cop pintada la pàgina
  useEffect(() => {
    if (!hash) return undefined;
    const id = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 0);
    return () => clearTimeout(id);
  }, [hash]);

  return (
    <div data-page="landing" className="am-site">
      <header className="lp-top">
        <div className="lp-wrap lp-top-in">
          <Link className="m-brand lp-brand" to="/" aria-label={BRAND}>
            <span className="m-mark" aria-hidden="true">AM</span>
            <span className="m-wm" aria-hidden="true"><span>Aula</span><span>Mada</span></span>
          </Link>
          <nav className="lp-nav" aria-label={L.nav}>
            <a href="#avantatges">{L.navAdv}</a>
            <a href="#com-funciona">{L.navHow}</a>
            <a href="#graus">{L.navDeg}</a>
            <a href="#preguntes">{L.navFaq}</a>
          </nav>
          <div className="lp-langs" role="group" aria-label="Idioma · Language">
            {UI_LANGS.map((l) => (
              <button key={l} type="button" data-lang={l} aria-pressed={ui === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
            ))}
          </div>
          <div className="lp-acts">
            {cta.header.map(([to, label, main]) => (
              <Link key={to} className={main ? 'am-btn am-btn-primary' : 'lp-signin'} to={to}>{label}</Link>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="lp-hero">
          <div className="lp-wrap lp-hero-in">
            <div>
              <p className="lp-kicker">{L.kicker}</p>
              <h1 className="lp-h1">{L.h1}</h1>
              <p className="lp-lead">{L.lead}</p>
              <div className="am-btn-row lp-ctas">
                <Link className="am-btn am-btn-primary lp-btn-lg" to={cta.primary[0]}>{cta.primary[1]}</Link>
                {cta.secondary && <Link className="am-btn am-btn-secondary lp-btn-lg" to={cta.secondary[0]}>{cta.secondary[1]}</Link>}
              </div>
              <p className="lp-note">{L.heroNote}</p>
            </div>
            <figure className="lp-preview" aria-hidden="true">
              <figcaption>{L.preview}</figcaption>
              <div className="lp-preview-grid">
                {CARDS.slice(0, 4).map((c) => (
                  <div key={c.k} className="am-card">
                    <div className="am-cimgw"><Pattern card={c} className="lp-pimg" /></div>
                    <div className="am-cbody"><span className="lp-pname">{t(c.name)}</span><span className="am-ccat">{t(c.cat)}</span></div>
                  </div>
                ))}
              </div>
            </figure>
          </div>
        </section>

        <section className="lp-sec" id="avantatges" aria-labelledby="lp-adv">
          <div className="lp-wrap">
            <h2 className="lp-h2" id="lp-adv">{L.advH}</h2>
            <p className="lp-sub">{L.advSub}</p>
            <ul className="lp-adv">
              {L.adv.map(([ico, h, p]) => (
                <li key={h}><BlockIcon name={ico} /><div><h3>{h}</h3><p>{p}</p></div></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="lp-sec lp-sec-gray" id="com-funciona" aria-labelledby="lp-how">
          <div className="lp-wrap">
            <h2 className="lp-h2" id="lp-how">{L.howH}</h2>
            <ol className="lp-steps">
              {L.how.map(([h, p], i) => (
                <li key={h}><span className="lp-n">{i + 1}</span><h3>{h}</h3><p>{p}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="lp-sec" id="graus" aria-labelledby="lp-deg">
          <div className="lp-wrap">
            <h2 className="lp-h2" id="lp-deg">{L.degH}</h2>
            <p className="lp-sub">{L.degSub}</p>
            <ul className="am-cgrid lp-degs">{DEGREES.map((d) => <DegreeCard key={d.k} d={d} Lx={L} />)}</ul>
          </div>
        </section>

        <section className="lp-sec lp-sec-gray" id="acces" aria-labelledby="lp-plan">
          <div className="lp-wrap lp-plan">
            <div>
              <h2 className="lp-h2" id="lp-plan">{L.planH}</h2>
              <p className="lp-sub">{L.planSub}</p>
            </div>
            <div className="lp-plan-box">
              <div className="lp-plan-head"><h3>{L.planName}</h3><b>{L.planPrice}</b></div>
              <ul>{L.planList.map((x) => <li key={x}>{CHECK}{x}</li>)}</ul>
              <Link className="am-btn am-btn-primary am-btn-block" to={cta.primary[0]}>{cta.primary[1]}</Link>
            </div>
          </div>
        </section>

        <section className="lp-sec" id="preguntes" aria-labelledby="lp-faq">
          <div className="lp-wrap lp-faq-wrap">
            <h2 className="lp-h2" id="lp-faq">{L.faqH}</h2>
            <div className="lp-faq">
              {L.faq.map(([q, a]) => <details key={q} className="am-fold"><summary>{q}</summary><div>{a}</div></details>)}
            </div>
          </div>
        </section>

        <section className="lp-end" aria-labelledby="lp-endh">
          <div className="lp-wrap lp-end-in">
            <div>
              <h2 id="lp-endh">{L.endH}</h2>
              <p>{L.endP}</p>
            </div>
            <Link className="am-btn lp-btn-light lp-btn-lg" to={cta.primary[0]}>{cta.primary[1]}</Link>
          </div>
        </section>
      </main>

      <footer className="lp-foot">
        <div className="lp-wrap lp-foot-in">
          <div className="lp-foot-brand">
            <span className="m-mark lp-foot-mark" aria-hidden="true">AM</span>
            <p><b>{BRAND}</b><br />{L.fLegal}</p>
          </div>
          <nav aria-label={L.fCampus}>
            <h2>{L.fCampus}</h2>
            <Link to="/tauler">{L.fDash}</Link>
            <Link to="/cursos">{L.fCourses}</Link>
            <Link to="/graus">{L.navDeg}</Link>
          </nav>
          <nav aria-label={L.fAbout}>
            <h2>{L.fAbout}</h2>
            <a href="#avantatges">{L.navAdv}</a>
            <a href="#com-funciona">{L.navHow}</a>
            <a href="#preguntes">{L.navFaq}</a>
          </nav>
        </div>
        <div className="lp-wrap lp-copy">© {new Date().getFullYear()} {BRAND}</div>
      </footer>
    </div>
  );
}
