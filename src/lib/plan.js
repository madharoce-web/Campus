/**
 * Plans Gratuït / Pro (preparat, sense activar). Mentre VITE_PRO_ENABLED no sigui 'true', tot és
 * gratuït: useEntitlement() sempre deixa passar i <ProGate> mostra sempre el contingut.
 *
 * Avís: el que va dins del bundle (lliçons, bancs, laboratoris) és públic, encara que una porta Pro
 * l'amagui a la interfície. El contingut Pro de veritat s'ha de servir des de Supabase (Storage o una
 * taula amb RLS per `profiles.plan`) o des d'una Edge Function. Aquí només es decideix què es mostra.
 *
 * `profiles.plan` el canvia només el servidor (supabase/functions/billing-webhook/).
 */
import { createElement as h } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './auth.jsx';
import { useLang } from './i18n.jsx';

export const PRO_ENABLED = import.meta.env.VITE_PRO_ENABLED === 'true';
/** Preu del pla Pro tal com es mostra (p. ex. «4,99 €»); sense, la pàgina de preus diu «Aviat». */
export const PRO_PRICE = import.meta.env.VITE_PRO_PRICE || '';

/** Funcions candidates a Pro: { id: { t: nom [ca, es, en], free?: límit del pla gratuït } }. */
export const FEATURES = {
  'exam-unlimited': { t: ['Simulacres il·limitats', 'Simulacros ilimitados', 'Unlimited mock exams'], free: { perWeek: 3 } },
  'adaptive-review': { t: ['Repàs adaptatiu dels errors', 'Repaso adaptativo de los errores', 'Adaptive review of mistakes'] },
  'custom-exam': { t: ['Exàmens a mida', 'Exámenes a medida', 'Custom exams'] },
  stats: { t: ['Estadístiques avançades', 'Estadísticas avanzadas', 'Advanced statistics'] },
  'pdf-notes': { t: ['Apunts en PDF', 'Apuntes en PDF', 'Notes as PDF'] },
  'ai-exercises': { t: ['Exercicis generats amb IA', 'Ejercicios generados con IA', 'AI-generated exercises'] },
};

/** El pla de qui mira la pàgina: 'pro' o 'free' (sense compte, 'free'). */
export function usePlan() {
  const { profile } = useAuth();
  return profile?.plan === 'pro' ? 'pro' : 'free';
}

/**
 * Pot fer servir la funció `feature`? { allowed, plan, limit }.
 * limit és el límit del pla gratuït (p. ex. { perWeek: 3 }) quan no hi ha Pro; qui la crida l'aplica.
 */
export function useEntitlement(feature) {
  const plan = usePlan();
  const f = FEATURES[feature];
  if (!PRO_ENABLED || plan === 'pro' || !f) return { allowed: true, plan, limit: null };
  return { allowed: !!f.free, plan, limit: f.free || null };
}

const MSG = {
  ca: { h: 'Funció del pla Pro', p: 'Aquesta eina forma part del pla Pro.', cta: 'Mira els plans' },
  es: { h: 'Función del plan Pro', p: 'Esta herramienta forma parte del plan Pro.', cta: 'Ver los planes' },
  en: { h: 'Pro plan feature', p: 'This tool is part of the Pro plan.', cta: 'See the plans' },
};

/** Mostra els fills si es pot fer servir `feature`; si no, l'avís del pla Pro (o fallback). */
export function ProGate({ feature, children, fallback }) {
  const { allowed } = useEntitlement(feature);
  if (allowed) return children;
  return fallback !== undefined ? fallback : h(ProNote, { feature });
}

/** Avís «funció del pla Pro» amb l'enllaç a /preus (p. ex. quan s'arriba al límit del pla gratuït). */
export function ProNote({ feature }) {
  const { ui, t } = useLang();
  const M = MSG[ui] || MSG.es;
  const f = FEATURES[feature];
  return h('div', { className: 'am-pro-gate', role: 'note' },
    h('p', null, h('b', null, M.h), f ? ' · ' + t(f.t) : null),
    h('p', null, M.p),
    h(Link, { className: 'am-btn am-btn-primary', to: '/preus' }, M.cta));
}
