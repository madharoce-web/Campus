import { useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { useLang } from '../lib/i18n.jsx';

/**
 * Teló de transició entre pantalles (entrar al campus, del registre guiat al campus): un panell oliva
 * amb la marca que puja i tapa la pantalla, es queda mentre es decideix on anar, i s'aixeca per
 * descobrir la pàgina nova. Així no es veu mai una pàgina a mig carregar ni la que no toca.
 *
 *   cover(label)   puja i tapa (torna una promesa quan ha tapat)
 *   hold(label)    tapa de cop, sense animació, i el reté fins que es crida la funció que torna
 *                  (p. ex. la porta del registre guiat mentre es carrega el perfil)
 *   reveal()       s'aixeca, quan ningú no el reté (la closca el crida a cada canvi de pàgina)
 * Fases: off · in (pujant) · on (tapant) · out (aixecant-se). Amb «redueix el moviment», sense animació.
 */
const IN_MS = 520, OUT_MS = 650;
let st = { phase: 'off', label: null };
const subs = new Set();
const set = (p) => { st = { ...st, ...p }; subs.forEach((f) => f()); };
const reduced = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let timer = 0, waitIn = null;

export function cover(label = null) {
  // ja tapa (o està pujant): la mateixa espera, sense tornar a començar
  if (st.phase === 'on' || st.phase === 'in') { set({ label: label ?? st.label }); return waitIn || Promise.resolve(); }
  clearTimeout(timer);
  if (reduced()) { set({ phase: 'on', label }); return Promise.resolve(); }
  set({ phase: 'in', label });
  waitIn = new Promise((res) => { timer = setTimeout(() => { waitIn = null; set({ phase: 'on' }); res(); }, IN_MS); });
  return waitIn;
}
let holders = 0, pending = false;
export function hold(label = null) {
  holders++;
  if (st.phase === 'off' || st.phase === 'out') { clearTimeout(timer); set({ phase: 'on', label }); }
  let done = false;
  return () => {
    if (done) return;
    done = true;
    holders--;
    if (!holders && pending) reveal();
  };
}
export function reveal() {
  if (holders) { pending = true; return; }
  pending = false;
  if (st.phase === 'off' || st.phase === 'out') return;
  const go = () => {
    if (reduced()) { set({ phase: 'off', label: null }); return; }
    set({ phase: 'out' });
    timer = setTimeout(() => set({ phase: 'off', label: null }), OUT_MS);
  };
  // si encara està pujant, s'aixeca quan acabi
  if (waitIn) waitIn.then(go); else go();
}
export const getCurtain = () => st;
export function useCurtain() {
  return useSyncExternalStore((f) => { subs.add(f); return () => subs.delete(f); }, getCurtain, getCurtain);
}

/** Mentre `on` és cert, el teló es queda (si ja hi era, o tapa de cop). */
export function useHold(on, label) {
  useEffect(() => (on ? hold(label) : undefined), [on, label]);
}

const T = { ca: 'Carregant…', es: 'Cargando…', en: 'Loading…' };
export const ENTERING = ['Entrant al teu campus…', 'Entrando en tu campus…', 'Entering your campus…'];
export const PREPARING = ['Preparant el teu campus…', 'Preparando tu campus…', 'Getting your campus ready…'];

export default function Curtain() {
  const { phase, label } = useCurtain();
  const { ui, t } = useLang();
  if (phase === 'off') return null;
  return createPortal(
    <div className={'am-curtain is-' + phase} role="status" aria-live="polite">
      <div className="am-curtain-in">
        <span className="am-curtain-mark" aria-hidden="true">AM</span>
        <p>{label ? t(label) : T[ui]}</p>
        <span className="am-curtain-dots" aria-hidden="true"><i /><i /><i /></span>
      </div>
    </div>,
    document.body,
  );
}
