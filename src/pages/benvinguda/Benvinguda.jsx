import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { safeNext, useAuth } from '../../lib/auth.jsx';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import { useCampus, updateCampus } from '../../lib/campus.js';
import { money } from '../../lib/plan.js';
import { priceOf, useSettings } from '../../lib/settings.js';
import { DEGREES, DEGREE_BY_KEY } from '../../catalog/degrees.js';
import { CARD_BY_KEY, COURSES } from '../../courses/registry.js';
import { CourseIcon } from '../../app/icons.jsx';
import { DegreeIcon } from '../graus/icons.jsx';
import { BRAND } from '../../app/strings.js';
import { S } from './strings.js';
import './benvinguda.css';

const COURSE = Object.fromEntries(COURSES.map((c) => [c.k, c]));
const CHECK = <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3 7-7" /></svg>;

/** Les assignatures disponibles d'un grau, per semestres: [{ term, subjects: [k] }]. */
const termsOf = (d) => d.terms.filter((t) => (t.subjects || []).length).map((t) => ({ term: t, subjects: t.subjects.filter((k) => CARD_BY_KEY[k]) }));

function Steps({ step, labels }) {
  return (
    <ol className="bv-steps" aria-label={labels.aria}>
      {labels.list.map((l, i) => (
        <li key={l} className={i < step ? 'is-done' : i === step ? 'is-on' : ''} aria-current={i === step ? 'step' : undefined}>
          <span className="bv-dot">{i < step ? CHECK : i + 1}</span><span className="bv-sl">{l}</span>
        </li>
      ))}
    </ol>
  );
}

/**
 * Registre guiat (/benvinguda): nom i curs, graus (se'n poden triar diversos) i assignatures.
 * Amb ?edit=1 comença als graus i torna a «Els meus cursos». En acabar, el campus mostra només el
 * que s'ha triat (lib/campus.js) i, amb sessió, es desa al perfil; dels graus que encara no hi són,
 * la persona entra a la llista d'espera.
 */
export default function Benvinguda() {
  const { ui, t } = useLang();
  const L = S[ui];
  const auth = useAuth();
  const campus = useCampus();
  const { values: V } = useSettings();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const edit = params.has('edit');
  const next = safeNext(params.get('next') || '/cursos');
  useDocumentTitle(L.title);

  const [step, setStep] = useState(edit ? 2 : 0);
  const [name, setName] = useState(campus.name || auth.profile?.display_name || '');
  const [year, setYear] = useState(campus.year || auth.profile?.study_year || null);
  const [degrees, setDegrees] = useState(campus.degrees.length ? campus.degrees : auth.profile?.degree ? [auth.profile.degree] : []);
  const [subjects, setSubjects] = useState(campus.subjects);
  const [ready, setReady] = useState(0); // passos de l'animació final
  useEffect(() => { if (!name && auth.profile?.display_name) setName(auth.profile.display_name); }, [auth.profile?.display_name]); // eslint-disable-line react-hooks/exhaustive-deps

  const live = degrees.map((k) => DEGREE_BY_KEY[k]).filter((d) => d && d.status === 'live');
  const soon = degrees.map((k) => DEGREE_BY_KEY[k]).filter((d) => d && d.status !== 'live');
  const available = [...new Set(live.flatMap((d) => termsOf(d).flatMap((x) => x.subjects)))];
  const chosen = subjects.filter((k) => available.includes(k));
  const free = V.free, B = V.billing;
  const maxDeg = B.enabled && free.degrees > 0 ? free.degrees : 0;

  const toggleDeg = (k) => setDegrees((ds) => (ds.includes(k) ? ds.filter((x) => x !== k) : [...ds, k]));
  const toggleSub = (k) => setSubjects((ss) => (ss.includes(k) ? ss.filter((x) => x !== k) : [...ss, k]));

  const finish = async () => {
    setStep(4);
    const data = { name: name.trim(), year, degrees, subjects: chosen, done: campus.done || Date.now() };
    updateCampus((c) => ({ ...c, ...data }));
    if (auth.status === 'user') {
      auth.updateProfile({ display_name: data.name || null, study_year: year, degrees, subjects: chosen, degree: degrees[0] || null, onboarded_at: new Date().toISOString() }).catch(() => {});
      const email = auth.user?.email;
      if (email) for (const d of soon) auth.joinWaitlist(email, d.k).catch(() => {});
    }
  };
  // «preparant el teu campus»: cada línia apareix al cap d'un moment
  useEffect(() => {
    if (step !== 4) return undefined;
    const id = setInterval(() => setReady((r) => (r < 4 ? r + 1 : r)), 450);
    return () => clearInterval(id);
  }, [step]);

  const canNext = [true, true, degrees.length > 0 && (!maxDeg || degrees.length <= maxDeg), true][step];
  const go = (n) => { setStep(n); window.scrollTo(0, 0); };
  const firstName = name.trim().split(/\s+/)[0];

  return (
    <div data-page="benvinguda" className="am-site"><div className="bv">
      <header className="bv-top">
        <Link className="m-brand" to="/" aria-label={BRAND}>
          <span className="m-mark" aria-hidden="true">AM</span>
          <span className="m-wm" aria-hidden="true"><span>Aula</span><span>Mada</span></span>
        </Link>
        {step > 0 && step < 4 && <Steps step={step - 1} labels={L.steps} />}
        {edit && step < 4 && <Link className="bv-skip" to={next}>{L.cancel}</Link>}
      </header>

      <main className="bv-main">
        {step === 0 && (
          <section className="bv-card bv-hello" key="s0" aria-labelledby="bv-h0">
            <div className="bv-mark" aria-hidden="true"><span>AM</span></div>
            <p className="bv-kicker">{L.kicker}</p>
            <h1 id="bv-h0">{L.helloH}</h1>
            <p className="bv-lead">{L.helloP}</p>
            <ul className="bv-points">{L.helloList.map((x, i) => <li key={x} style={{ '--i': i }}>{CHECK}{x}</li>)}</ul>
            <div className="bv-acts">
              <button type="button" className="am-btn am-btn-primary bv-big" id="bv-start" onClick={() => go(1)}>{L.start}</button>
            </div>
            <p className="bv-small">{L.time}</p>
          </section>
        )}

        {step === 1 && (
          <section className="bv-card" key="s1" aria-labelledby="bv-h1">
            <h1 id="bv-h1">{L.aboutH}</h1>
            <p className="bv-lead">{L.aboutP}</p>
            <div className="am-field">
              <label className="am-label" htmlFor="bv-name">{L.name}</label>
              <input id="bv-name" className="am-input" maxLength={80} autoComplete="name" placeholder={L.namePh} value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <fieldset className="bv-fs">
              <legend className="am-label">{L.year}</legend>
              <div className="bv-chips" role="radiogroup" aria-label={L.year}>
                {L.years.map(([v, label]) => (
                  <button key={v} type="button" role="radio" aria-checked={year === v} className={'bv-chip' + (year === v ? ' is-on' : '')} onClick={() => setYear(year === v ? null : v)}>{label}</button>
                ))}
              </div>
            </fieldset>
            <div className="bv-acts">
              <button type="button" className="am-btn am-btn-outline" onClick={() => go(0)}>{L.back}</button>
              <button type="button" className="am-btn am-btn-primary" id="bv-next" onClick={() => go(2)}>{L.next}</button>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="bv-card bv-wide" key="s2" aria-labelledby="bv-h2">
            <h1 id="bv-h2">{L.degH}</h1>
            <p className="bv-lead">{L.degP}{maxDeg ? ' ' + L.degMax.replace('%d', maxDeg) : ''}</p>
            <ul className="bv-degs">
              {DEGREES.map((d, i) => {
                const on = degrees.includes(d.k);
                return (
                  <li key={d.k} style={{ '--i': i }}>
                    <button type="button" className={'bv-deg' + (on ? ' is-on' : '')} aria-pressed={on} data-degree={d.k} onClick={() => toggleDeg(d.k)}
                      style={{ '--dc': d.color, '--db': d.bg }}>
                      <span className="bv-dico"><DegreeIcon name={d.icon} /></span>
                      <span className="bv-dtx"><b>{t(d.name)}</b><small>{d.status === 'live' ? L.live : L.soon}</small></span>
                      <span className="bv-tick" aria-hidden="true">{CHECK}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            {soon.length > 0 && <p className="bv-note" role="status">{L.soonNote}</p>}
            <div className="bv-acts">
              {!edit && <button type="button" className="am-btn am-btn-outline" onClick={() => go(1)}>{L.back}</button>}
              <button type="button" className="am-btn am-btn-primary" id="bv-next" disabled={!canNext} onClick={() => go(3)}>{L.next}</button>
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="bv-card bv-wide" key="s3" aria-labelledby="bv-h3">
            <h1 id="bv-h3">{L.subH}</h1>
            <p className="bv-lead">{L.subP}</p>
            {!live.length && <p className="bv-note">{L.noLive}</p>}
            {live.map((d) => (
              <div key={d.k} className="bv-dgroup">
                <h2>{t(d.name)}</h2>
                {termsOf(d).map(({ term, subjects: ks }) => (
                  <div key={term.k} className="bv-term">
                    <div className="bv-termh">
                      <h3>{t(term.name)}</h3>
                      <button type="button" className="kit-link" onClick={() => setSubjects((ss) => (ks.every((k) => ss.includes(k)) ? ss.filter((k) => !ks.includes(k)) : [...new Set([...ss, ...ks])]))}>
                        {ks.every((k) => subjects.includes(k)) ? L.none : L.all}
                      </button>
                    </div>
                    <ul className="bv-subs">
                      {ks.map((k, i) => {
                        const c = CARD_BY_KEY[k], r = COURSE[k] || {};
                        const on = subjects.includes(k);
                        return (
                          <li key={k} style={{ '--i': i }}>
                            <button type="button" className={'bv-sub' + (on ? ' is-on' : '')} aria-pressed={on} data-subject={k} onClick={() => toggleSub(k)}>
                              <span className="bv-sico" style={{ '--m-ci': r.color, '--m-ci-bg': r.bg }}><CourseIcon name={r.icon} /></span>
                              <span className="bv-stx"><b>{t(c.name)}</b><small>{t(c.cat)}</small></span>
                              <span className="bv-tick" aria-hidden="true">{CHECK}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
            <div className="bv-sum" aria-live="polite">
              <span>{L.chosen.replace('%d', chosen.length)}</span>
              {B.enabled && chosen.length > 0 && <span>{L.price} <b>{money(priceOf(B, { subjects: chosen.length, degrees: live.length || 1 }).total, ui)}</b> {L.month}{B.trialDays > 0 ? ' · ' + L.trial.replace('%d', B.trialDays) : ''}</span>}
            </div>
            <div className="bv-acts">
              <button type="button" className="am-btn am-btn-outline" onClick={() => go(2)}>{L.back}</button>
              <button type="button" className="am-btn am-btn-primary" id="bv-finish" disabled={live.length > 0 && !chosen.length} onClick={finish}>{edit ? L.save : L.finish}</button>
            </div>
          </section>
        )}

        {step === 4 && (
          <section className="bv-card bv-done" key="s4" aria-labelledby="bv-h4">
            <div className="bv-ring" aria-hidden="true"><svg viewBox="0 0 52 52"><circle cx="26" cy="26" r="23" /><path d="M15 27l7 7 15-15" /></svg></div>
            <h1 id="bv-h4">{edit ? L.savedH : firstName ? L.readyH.replace('%s', firstName) : L.readyH0}</h1>
            <ul className="bv-prep" role="status">
              {L.prep.map((x, i) => <li key={x} className={i < ready ? 'is-on' : ''}>{CHECK}{x.replace('%d', chosen.length)}</li>)}
            </ul>
            <div className="bv-acts">
              <button type="button" className="am-btn am-btn-primary bv-big" id="bv-go" disabled={ready < 3} onClick={() => navigate(next, { replace: true })}>{L.go}</button>
            </div>
          </section>
        )}
      </main>
    </div></div>
  );
}
