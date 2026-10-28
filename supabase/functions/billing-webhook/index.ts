/**
 * Webhook del proveïdor de pagaments (esquelet, sense activar).
 *
 * Rep els avisos de subscripció del proveïdor, en verifica la signatura i actualitza
 * `public.subscriptions` i `public.profiles.plan` amb la clau de servei (el navegador no pot
 * canviar mai el pla). Proveïdor recomanat: Paddle o Lemon Squeezy (fan de «merchant of record» i
 * gestionen l'IVA europeu); alternativa: Stripe Billing amb Stripe Tax.
 *
 * Posada en marxa (quan s'activi el pla Pro):
 *   1. Tria el proveïdor i posa'l a BILLING_PROVIDER ('paddle' | 'lemonsqueezy' | 'stripe').
 *   2. Secrets: `npx supabase secrets set BILLING_PROVIDER=paddle BILLING_WEBHOOK_SECRET=…`
 *      (SUPABASE_URL i SUPABASE_SERVICE_ROLE_KEY ja hi són a les Edge Functions).
 *   3. `npx supabase functions deploy billing-webhook --no-verify-jwt` (el proveïdor no porta JWT:
 *      l'autenticació és la signatura).
 *   4. Al panell del proveïdor, l'URL del webhook és https://<ref>.supabase.co/functions/v1/billing-webhook
 *   5. Al checkout, passa l'id de l'usuari de Supabase com a dada pròpia (Paddle: custom_data.user_id;
 *      Lemon Squeezy: checkout_data.custom.user_id; Stripe: client_reference_id o metadata.user_id).
 *   6. Activa VITE_PRO_ENABLED=true i VITE_PRO_PRICE a Cloudflare Pages.
 */
import { createClient } from 'npm:@supabase/supabase-js@2';

type Status = 'trialing' | 'active' | 'past_due' | 'canceled' | 'paused';
type Event = {
  userId: string;
  customerId: string | null;
  subscriptionId: string;
  status: Status;
  periodEnd: string | null;
};

const PROVIDER = Deno.env.get('BILLING_PROVIDER') ?? '';
const SECRET = Deno.env.get('BILLING_WEBHOOK_SECRET') ?? '';

const enc = new TextEncoder();
async function hmacHex(key: string, data: string): Promise<string> {
  const k = await crypto.subtle.importKey('raw', enc.encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', k, enc.encode(data));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}
/** Comparació en temps constant. */
function same(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

/** Verifica la signatura i tradueix l'avís al format comú (null: avís que no ens interessa). */
async function parse(req: Request, body: string): Promise<Event | null> {
  if (PROVIDER === 'paddle') {
    // Paddle-Signature: ts=…;h1=… (HMAC-SHA256 de «ts:body»)
    const h = Object.fromEntries((req.headers.get('paddle-signature') ?? '').split(';').map((p) => p.split('=')));
    if (!h.ts || !h.h1 || !same(await hmacHex(SECRET, h.ts + ':' + body), h.h1)) throw new Error('signatura');
    const e = JSON.parse(body);
    if (!String(e.event_type).startsWith('subscription.')) return null;
    const d = e.data;
    return {
      userId: d.custom_data?.user_id, customerId: d.customer_id ?? null, subscriptionId: d.id,
      status: d.status === 'canceled' ? 'canceled' : d.status, periodEnd: d.current_billing_period?.ends_at ?? null,
    };
  }
  if (PROVIDER === 'lemonsqueezy') {
    // X-Signature: HMAC-SHA256 del cos en hexadecimal
    if (!same(await hmacHex(SECRET, body), req.headers.get('x-signature') ?? '')) throw new Error('signatura');
    const e = JSON.parse(body);
    if (!String(e.meta?.event_name).startsWith('subscription_')) return null;
    const a = e.data.attributes;
    const map: Record<string, Status> = { on_trial: 'trialing', active: 'active', past_due: 'past_due', unpaid: 'past_due', paused: 'paused', cancelled: 'canceled', expired: 'canceled' };
    return {
      userId: e.meta.custom_data?.user_id, customerId: String(a.customer_id ?? ''), subscriptionId: String(e.data.id),
      status: map[a.status] ?? 'canceled', periodEnd: a.renews_at ?? a.ends_at ?? null,
    };
  }
  // Stripe: verifica amb la seva biblioteca (stripe.webhooks.constructEventAsync) abans de fer-lo servir
  throw new Error('proveïdor no configurat');
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') return new Response('method', { status: 405 });
  const body = await req.text();
  let ev: Event | null;
  try {
    ev = await parse(req, body);
  } catch (e) {
    return new Response(String((e as Error).message), { status: 400 });
  }
  if (!ev) return new Response('ignorat', { status: 200 });
  if (!ev.userId) return new Response('falta user_id', { status: 400 });

  const sb = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, { auth: { persistSession: false } });
  const { error: e1 } = await sb.from('subscriptions').upsert({
    user_id: ev.userId, provider: PROVIDER, provider_customer_id: ev.customerId,
    provider_subscription_id: ev.subscriptionId, plan: 'pro', status: ev.status, current_period_end: ev.periodEnd,
  });
  // el pla Pro dura mentre la subscripció estigui en prova, activa o pendent de cobrament
  const plan = ['trialing', 'active', 'past_due'].includes(ev.status) ? 'pro' : 'free';
  const { error: e2 } = await sb.from('profiles').update({ plan }).eq('id', ev.userId);
  if (e1 || e2) return new Response('bd', { status: 500 });
  return new Response('ok', { status: 200 });
});
