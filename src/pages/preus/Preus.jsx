import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { useAuth } from '../../lib/auth.jsx';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import { money, usePlan } from '../../lib/plan.js';
import { FEATURE_NAMES, priceOf, useSettings } from '../../lib/settings.js';
import Page from '../../app/Page.jsx';
import NotFound from '../../app/NotFound.jsx';
import './preus.css';

const S = {
  ca: {
    title: 'Plans i preus', lead: 'Tria les assignatures que estudies i paga només per elles. Pots canviar de pla o cancel·lar la renovació quan vulguis.',
    free: 'Gratuït', basic: 'Bàsic', pro: 'Pro', month: '/ mes', from: 'des de',
    freeP: 'Per conèixer la plataforma.', basicP: 'Les assignatures que tries, amb tot el contingut.', proP: 'Un grau sencer i les eines d’intel·ligència artificial.',
    basicRule: (b, n, x) => `${b} al mes inclou ${n} assignatures; cada assignatura de més, ${x}.`,
    degreeRule: (m) => `Cada grau de més multiplica la tarifa bàsica (×${m}).`,
    basicList: ['Temari en dos modes i laboratoris', 'Pràctica en tres nivells, sense límit', 'Simulacres amb el format real', 'Progrés al teu compte'],
    current: 'El teu pla', choose: 'Tria aquest pla', start: 'Crea un compte',
    trial: (d) => `Prova gratuïta de ${d} dies.`,
    calcH: 'Calcula el teu preu', calcSubj: 'Assignatures', calcDeg: 'Graus', calcBase: 'Tarifa bàsica', calcExtra: 'Assignatures de més', calcTotal: 'Total al mes',
    periods: 'Pagant per semestre, un %s% menys; per curs, un %y% menys.',
    note: 'Preus amb impostos inclosos. Pots cancel·lar la renovació en qualsevol moment des del teu compte i mantens l’accés fins al final del període pagat.',
    soon: 'Els pagaments s’activaran aviat.',
  },
  es: {
    title: 'Planes y precios', lead: 'Elige las asignaturas que estudias y paga solo por ellas. Puedes cambiar de plan o cancelar la renovación cuando quieras.',
    free: 'Gratuito', basic: 'Básico', pro: 'Pro', month: '/ mes', from: 'desde',
    freeP: 'Para conocer la plataforma.', basicP: 'Las asignaturas que elijas, con todo el contenido.', proP: 'Un grado completo y las herramientas de inteligencia artificial.',
    basicRule: (b, n, x) => `${b} al mes incluye ${n} asignaturas; cada asignatura más, ${x}.`,
    degreeRule: (m) => `Cada grado adicional multiplica la tarifa básica (×${m}).`,
    basicList: ['Temario en dos modos y laboratorios', 'Práctica en tres niveles, sin límite', 'Simulacros con el formato real', 'Progreso en tu cuenta'],
    current: 'Tu plan', choose: 'Elegir este plan', start: 'Crear una cuenta',
    trial: (d) => `Prueba gratuita de ${d} días.`,
    calcH: 'Calcula tu precio', calcSubj: 'Asignaturas', calcDeg: 'Grados', calcBase: 'Tarifa básica', calcExtra: 'Asignaturas adicionales', calcTotal: 'Total al mes',
    periods: 'Pagando por semestre, un %s% menos; por curso, un %y% menos.',
    note: 'Precios con impuestos incluidos. Puedes cancelar la renovación en cualquier momento desde tu cuenta y mantienes el acceso hasta el final del periodo pagado.',
    soon: 'Los pagos se activarán pronto.',
  },
  en: {
    title: 'Plans and pricing', lead: 'Choose the subjects you study and pay only for them. You can change plan or cancel the renewal whenever you like.',
    free: 'Free', basic: 'Basic', pro: 'Pro', month: '/ month', from: 'from',
    freeP: 'To get to know the platform.', basicP: 'The subjects you choose, with all the content.', proP: 'A whole degree and the artificial intelligence tools.',
    basicRule: (b, n, x) => `${b} a month includes ${n} subjects; each extra subject, ${x}.`,
    degreeRule: (m) => `Each extra degree multiplies the basic fee (×${m}).`,
    basicList: ['Syllabus in two modes and labs', 'Unlimited practice at three levels', 'Mock exams in the real format', 'Progress saved to your account'],
    current: 'Your plan', choose: 'Choose this plan', start: 'Create an account',
    trial: (d) => `${d}-day free trial.`,
    calcH: 'Work out your price', calcSubj: 'Subjects', calcDeg: 'Degrees', calcBase: 'Basic fee', calcExtra: 'Extra subjects', calcTotal: 'Total per month',
    periods: 'Paying per semester, %s% less; per academic year, %y% less.',
    note: 'Prices include taxes. You can cancel the renewal at any time from your account and keep access until the end of the paid period.',
    soon: 'Payments will be enabled soon.',
  },
};

const CHECK = <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3 7-7" /></svg>;

function Plan({ id, name, price, desc, items, cta, current, featured }) {
  return (
    <section className={'pr-plan' + (featured ? ' pr-pro' : '')} aria-labelledby={'pr-' + id}>
      <div className="pr-head"><h2 id={'pr-' + id}>{name}</h2><b>{price}</b></div>
      <p className="pr-plus">{desc}</p>
      <ul>{items.map((x) => <li key={x}>{CHECK}{x}</li>)}</ul>
      {current ? <p className="pr-cur">{current}</p> : cta}
    </section>
  );
}

/** /preus: plans i calculadora del preu. Només es veu amb els cobraments activats (/admin). */
export default function Preus() {
  const { ui, t } = useLang();
  const { status } = useAuth();
  const { values: V } = useSettings();
  const plan = usePlan();
  const L = S[ui] || S.es;
  const B = V.billing;
  const [subjects, setSubjects] = useState(B.baseSubjects + 1);
  const [degrees, setDegrees] = useState(1);
  useDocumentTitle(L.title);
  if (!B.enabled) return <NotFound />;
  const m = (n) => money(n, ui);
  const signedIn = status === 'user';
  const cta = (p) => (signedIn
    ? <button type="button" className={'am-btn am-btn-block ' + (p === 'pro' ? 'am-btn-primary' : 'am-btn-outline')} disabled title={L.soon}>{L.choose}</button>
    : <Link className={'am-btn am-btn-block ' + (p === 'pro' ? 'am-btn-primary' : 'am-btn-outline')} to="/registre">{L.start}</Link>);
  const featList = (p) => Object.entries(V.features).filter(([, f]) => f[p]).map(([id]) => t(FEATURE_NAMES[id] || [id, id, id]));
  const calc = priceOf(B, { subjects, degrees });
  const disc = L.periods.replace('%s', B.discounts.semester).replace('%y', B.discounts.year);

  return (
    <Page name="preus">
      <h1 className="am-h1">{L.title}</h1>
      <p className="pr-lead">{L.lead}</p>
      {B.trialDays > 0 && <p className="pr-trial">{L.trial(B.trialDays)}</p>}
      <div className="pr-grid">
        <Plan id="free" name={L.free} price={m(0)} desc={L.freeP} items={featList('free')}
          current={signedIn && plan === 'free' ? L.current : null} cta={signedIn ? null : cta('free')} />
        <Plan id="basic" name={L.basic} price={<>{L.from} {m(B.basePrice)} <small>{L.month}</small></>} desc={L.basicP}
          items={[L.basicRule(m(B.basePrice), B.baseSubjects, m(B.extraSubject)), L.degreeRule(B.degreeMultiplier), ...L.basicList]}
          current={plan === 'basic' ? L.current : null} cta={cta('basic')} />
        <Plan id="pro" featured name={L.pro} price={<>{m(B.proPrice)} <small>{L.month}</small></>} desc={L.proP}
          items={featList('pro')} current={plan === 'pro' ? L.current : null} cta={cta('pro')} />
      </div>

      <section className="pr-calc" aria-labelledby="pr-calc">
        <h2 id="pr-calc">{L.calcH}</h2>
        <div className="pr-calc-in">
          <label>{L.calcSubj}<input type="range" min="1" max="12" value={subjects} onChange={(e) => setSubjects(Number(e.target.value))} /><b>{subjects}</b></label>
          <label>{L.calcDeg}<input type="range" min="1" max="4" value={degrees} onChange={(e) => setDegrees(Number(e.target.value))} /><b>{degrees}</b></label>
          <dl>
            <dt>{L.calcBase}</dt><dd>{m(calc.base)}</dd>
            <dt>{L.calcExtra}</dt><dd>{m(calc.extra)}</dd>
            <dt className="pr-tot">{L.calcTotal}</dt><dd className="pr-tot">{m(calc.total)}</dd>
          </dl>
        </div>
        <p className="pr-note">{disc}</p>
      </section>
      <p className="pr-note">{L.note}</p>
    </Page>
  );
}
