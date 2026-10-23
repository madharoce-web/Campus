/**
 * Accés segur a localStorage: en mode privat, amb les dades del lloc bloquejades
 * o en previsualitzacions pot fallar, i la web ha de funcionar igualment.
 *
 * Totes les escriptures de la web passen per aquí: onStoredChange() permet saber-les
 * (la sincronització amb el compte, src/lib/sync.js, les envia al núvol).
 */
const listeners = new Set();

/** Avisa de cada escriptura o esborrat: fn(clau, valor | null). Torna la funció per desapuntar-se. */
export function onStoredChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
function changed(key, value) {
  for (const fn of listeners) {
    try { fn(key, value); } catch (e) { console.error(e); }
  }
}

export function lsGet(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
export function lsSet(key, value) {
  try { localStorage.setItem(key, value); } catch { return; }
  changed(key, String(value));
}
export function lsDel(key) {
  try { localStorage.removeItem(key); } catch { return; }
  changed(key, null);
}
export function lsJSON(key, fallback) {
  try {
    const v = JSON.parse(localStorage.getItem(key));
    return v == null ? fallback : v;
  } catch { return fallback; }
}
export function lsSetJSON(key, value) {
  lsSet(key, JSON.stringify(value));
}
/** Totes les claus desades (per a la sincronització). */
export function lsKeys() {
  try { return Object.keys(localStorage); } catch { return []; }
}
