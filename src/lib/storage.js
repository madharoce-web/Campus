/**
 * Accés segur a localStorage: en mode privat, amb les dades del lloc bloquejades
 * o en previsualitzacions pot fallar, i la web ha de funcionar igualment.
 */
export function lsGet(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
export function lsSet(key, value) {
  try { localStorage.setItem(key, value); } catch { /* sense emmagatzematge */ }
}
export function lsDel(key) {
  try { localStorage.removeItem(key); } catch { /* sense emmagatzematge */ }
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
