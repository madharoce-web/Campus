/**
 * Estat del formulari flotant (una sola finestra per a tota la web).
 *   { open, k: assignatura, focus: [ids de fórmules a destacar], x, y, w, h, min }
 * La posició i la mida es recorden en aquest dispositiu ('kit-dock', no es sincronitza).
 */
import { useSyncExternalStore } from 'react';
import { lsJSON, lsSetJSON } from '../../lib/storage.js';

const KEY = 'kit-dock';
const subs = new Set();
let st = null;

function get() {
  if (!st) {
    const v = lsJSON(KEY, {});
    st = { open: false, k: null, focus: [], x: null, y: null, w: 380, h: 480, min: false, ...(v && typeof v === 'object' ? v : {}) };
    st.focus = [];
  }
  return st;
}
function set(patch) {
  st = { ...get(), ...patch };
  const { focus: _f, ...keep } = st;
  lsSetJSON(KEY, keep);
  subs.forEach((f) => f());
}

export const openDock = (k, focus = []) => set({ open: true, k, focus, min: false });
export const closeDock = () => set({ open: false, focus: [] });
export const toggleDock = (k) => (get().open && get().k === k ? closeDock() : openDock(k));
export const moveDock = (patch) => set(patch);
export const getDock = get;
export function useDock() {
  return useSyncExternalStore((f) => { subs.add(f); return () => subs.delete(f); }, get);
}
