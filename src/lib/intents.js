/**
 * Registre d'intents (taula `activity` de Supabase): cada exercici comprovat a la pràctica, a les
 * comprovacions de les lliçons i al simulacre. Serveix per a les estadístiques, el repàs a mida i el
 * tauler d'administració (ejercicis amb un percentatge d'encerts anòmal).
 *
 * Només s'envia amb sessió (auth.jsx crida setActivityUser); sense compte no es desa res. Els intents
 * s'agrupen i s'envien en lots per no fer una petició per clic; en tancar la pàgina s'envia el que queda.
 */

const MAX_QUEUE = 200;
const FLUSH_MS = 4000;

let target = null; // { sb, uid }
let queue = [];
let timer = null;

const clip = (s, n) => String(s ?? '').slice(0, n);

/** Comença (sb, uid) o deixa (null) d'enviar els intents d'aquest compte. */
export function setActivityUser(sb, uid) {
  if (target && (!uid || target.uid !== uid)) flushActivity();
  target = sb && uid ? { sb, uid } : null;
  if (!target) queue = [];
}

/**
 * Un intent: { subject, item, correct?, score?, kind?, durationMs? }.
 *   subject  assignatura (k del curs), item  id de l'exercici (o de la família),
 *   kind     'exercise' (per defecte), 'quiz' (comprovació), 'exam' (simulacre), 'lab' o 'code'.
 */
export function logAttempt({ subject, item, correct = null, score = null, kind = 'exercise', durationMs = null }) {
  if (!target || !subject || !item) return;
  queue.push({
    user_id: target.uid,
    subject: clip(subject, 60),
    item: clip(item, 200),
    kind,
    correct: correct == null ? null : !!correct,
    score: score == null || !Number.isFinite(score) ? null : Math.round(score * 100) / 100,
    duration_ms: Number.isFinite(durationMs) ? Math.max(0, Math.round(durationMs)) : null,
  });
  if (queue.length > MAX_QUEUE) queue = queue.slice(-MAX_QUEUE);
  clearTimeout(timer);
  timer = setTimeout(flushActivity, FLUSH_MS);
}

/** Envia els intents pendents (si falla, es perden: no són dades de progrés). */
export function flushActivity() {
  clearTimeout(timer);
  if (!target || !queue.length) return Promise.resolve();
  const rows = queue;
  queue = [];
  return Promise.resolve(target.sb.from('activity').insert(rows)).then(() => {}, () => {});
}

if (typeof window !== 'undefined') {
  window.addEventListener('pagehide', () => { flushActivity(); });
}
