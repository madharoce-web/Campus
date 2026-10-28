import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { useAuth } from '../../lib/auth.jsx';
import { useDocumentTitle } from '../../lib/useDocumentTitle.js';
import { FEATURES, PRO_ENABLED, PRO_PRICE, usePlan } from '../../lib/plan.js';
import Page from '../../app/Page.jsx';
import NotFound from '../../app/NotFound.jsx';
import './preus.css';

const S = {
  ca: {
    title: 'Plans', lead: 'Totes les assignatures són gratuïtes. El pla Pro afegeix eines per estudiar amb més precisió.',
    free: 'Gratuït', pro: 'Pro', month: '/ mes', soon: 'Aviat',
    freeList: ['Totes les assignatures disponibles', 'Lliçons en dos modes, laboratoris i exercicis resolts', 'Pràctica en tres nivells', 'Simulacres amb un límit setmanal', 'Progrés al teu compte'],
    proPlus: 'Tot el del pla gratuït, i a més:', current: 'El teu pla', cta: 'Passa a Pro', ctaSoon: 'Disponible aviat', start: 'Crea un compte',
    note: 'Pots cancel·lar quan vulguis. Els preus inclouen l’IVA.',
  },
  es: {
    title: 'Planes', lead: 'Todas las asignaturas son gratuitas. El plan Pro añade herramientas para estudiar con más precisión.',
    free: 'Gratuito', pro: 'Pro', month: '/ mes', soon: 'Pronto',
    freeList: ['Todas las asignaturas disponibles', 'Lecciones en dos modos, laboratorios y ejercicios resueltos', 'Práctica en tres niveles', 'Simulacros con un límite semanal', 'Progreso en tu cuenta'],
    proPlus: 'Todo lo del plan gratuito y, además:', current: 'Tu plan', cta: 'Pasar a Pro', ctaSoon: 'Disponible pronto', start: 'Crear una cuenta',
    note: 'Puedes cancelar cuando quieras. Los precios incluyen el IVA.',
  },
  en: {
    title: 'Plans', lead: 'Every subject is free. The Pro plan adds tools to study more precisely.',
    free: 'Free', pro: 'Pro', month: '/ month', soon: 'Soon',
    freeList: ['Every available subject', 'Lessons in two modes, labs and solved exercises', 'Practice at three levels', 'Mock exams with a weekly limit', 'Progress saved to your account'],
    proPlus: 'Everything in the free plan, plus:', current: 'Your plan', cta: 'Upgrade to Pro', ctaSoon: 'Available soon', start: 'Create an account',
    note: 'Cancel at any time. Prices include VAT.',
  },
};

const CHECK = <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3 7-7" /></svg>;

/** /preus: pla gratuït i pla Pro. Només existeix amb VITE_PRO_ENABLED=true (lib/plan.js). */
export default function Preus() {
  const { ui, t } = useLang();
  const { status } = useAuth();
  const plan = usePlan();
  const L = S[ui] || S.es;
  useDocumentTitle(L.title);
  if (!PRO_ENABLED) return <NotFound />;
  const signedIn = status === 'user';
  return (
    <Page name="preus">
      <h1 className="am-h1">{L.title}</h1>
      <p className="pr-lead">{L.lead}</p>
      <div className="pr-grid">
        <section className="pr-plan" aria-labelledby="pr-free">
          <div className="pr-head"><h2 id="pr-free">{L.free}</h2><b>0 €</b></div>
          <ul>{L.freeList.map((x) => <li key={x}>{CHECK}{x}</li>)}</ul>
          {signedIn
            ? plan === 'free' && <p className="pr-cur">{L.current}</p>
            : <Link className="am-btn am-btn-outline am-btn-block" to="/registre">{L.start}</Link>}
        </section>
        <section className="pr-plan pr-pro" aria-labelledby="pr-pro">
          <div className="pr-head"><h2 id="pr-pro">{L.pro}</h2><b>{PRO_PRICE ? <>{PRO_PRICE} <small>{L.month}</small></> : L.soon}</b></div>
          <p className="pr-plus">{L.proPlus}</p>
          <ul>{Object.entries(FEATURES).map(([id, f]) => <li key={id}>{CHECK}{t(f.t)}</li>)}</ul>
          {plan === 'pro'
            ? <p className="pr-cur">{L.current}</p>
            : <button type="button" className="am-btn am-btn-primary am-btn-block" disabled>{L.ctaSoon}</button>}
        </section>
      </div>
      <p className="pr-note">{L.note}</p>
    </Page>
  );
}
