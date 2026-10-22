import { useSyncExternalStore } from 'react';

/* un sol rellotge per a tots els components (barra, calaix, avís): avancen alhora */
const ticks = new Set();
let now = Date.now(), timer = null;
function subscribeTick(f) {
  ticks.add(f);
  if (!timer) timer = setInterval(() => { now = Date.now(); ticks.forEach((g) => g()); }, 250);
  return () => {
    ticks.delete(f);
    if (!ticks.size) { clearInterval(timer); timer = null; }
  };
}
const getNow = () => now;
/** Manté el rellotge en marxa mentre el curs és obert (així `now` mai no queda antic). */
export const keepTicking = () => subscribeTick(() => {});

/** Hora actual, que s'actualitza cada 250 ms (per als rellotges). */
export function useNow() {
  return useSyncExternalStore(subscribeTick, getNow);
}

let AC = null;
/** Avís sonor del rellotge: n xiulets curts. */
export function beep(n, sound) {
  if (!sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    for (let i = 0; i < n; i++) {
      const o = AC.createOscillator(), g = AC.createGain(), t = AC.currentTime + i * 0.22;
      o.type = 'sine'; o.frequency.value = n > 1 ? 880 : 660;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
      o.connect(g).connect(AC.destination); o.start(t); o.stop(t + 0.2);
    }
  } catch { /* sense àudio */ }
}
