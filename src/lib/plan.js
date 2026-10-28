/**
 * Plans Gratuït / Bàsic / Pro. Tot es configura a /admin (lib/settings.js): mentre els cobraments no
 * estiguin activats (billing.enabled), tot és gratuït i useEntitlement() sempre deixa passar.
 *
 * Avís: el que va dins del bundle (lliçons, bancs, laboratoris) és públic, encara que una porta
 * l'amagui a la interfície. El contingut de pagament de veritat (IA, correcció) es fa al servidor,
 * que torna a comprovar el pla. `profiles.plan` el canvia només el servidor.
 */
import { createElement as h } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './auth.jsx';
import { useLang } from './i18n.jsx';
import { FEATURE_NAMES, useSettings } from './settings.js';

/** Els cobraments estan activats? (i, amb ells, els preus, la pàgina de plans i els límits) */
export function useBilling() {
  const { values } = useSettings();
  return values.billing;
}

/** El pla de qui mira la pàgina: 'pro', 'basic' o 'free' (sense compte, 'free'). */
export function usePlan() {
  const { profile } = useAuth();
  return ['pro', 'basic'].includes(profile?.plan) ? profile.plan : 'free';
}

/**
 * Pot fer servir la funció `feature`? { allowed, plan, limit }.
 * limit: els límits del pla gratuït (p. ex. { examsPerWeek: 3 }) quan s'apliquen; qui la crida els aplica.
 */
export function useEntitlement(feature) {
  const { values } = useSettings();
  const plan = usePlan();
  if (!values.billing.enabled) return { allowed: true, plan, limit: null };
  const f = values.features[feature];
  const allowed = !f || !!f[plan];
  return { allowed, plan, limit: plan === 'free' ? values.free : null };
}

const MSG = {
  ca: { h: 'Funció del pla Pro', p: 'Aquesta eina forma part del pla Pro.', cta: 'Mira els plans' },
  es: { h: 'Función del plan Pro', p: 'Esta herramienta forma parte del plan Pro.', cta: 'Ver los planes' },
  en: { h: 'Pro plan feature', p: 'This tool is part of the Pro plan.', cta: 'See the plans' },
};

/** Mostra els fills si es pot fer servir `feature`; si no, l'avís del pla (o fallback). */
export function ProGate({ feature, children, fallback }) {
  const { allowed } = useEntitlement(feature);
  if (allowed) return children;
  return fallback !== undefined ? fallback : h(ProNote, { feature });
}

/** Avís «funció del pla Pro» amb l'enllaç a /preus (p. ex. quan s'arriba al límit del pla gratuït). */
export function ProNote({ feature }) {
  const { ui, t } = useLang();
  const M = MSG[ui] || MSG.es;
  const name = FEATURE_NAMES[feature];
  return h('div', { className: 'am-pro-gate', role: 'note' },
    h('p', null, h('b', null, M.h), name ? ' · ' + t(name) : null),
    h('p', null, M.p),
    h(Link, { className: 'am-btn am-btn-primary', to: '/preus' }, M.cta));
}

/** Import en euros amb l'idioma de la pàgina (5 → «5 €», 7.5 → «7,50 €»). */
export function money(n, ui) {
  const opts = { style: 'currency', currency: 'EUR', minimumFractionDigits: Number.isInteger(n) ? 0 : 2 };
  return new Intl.NumberFormat(ui === 'en' ? 'en-IE' : ui === 'es' ? 'es-ES' : 'ca-AD', opts).format(n);
}
