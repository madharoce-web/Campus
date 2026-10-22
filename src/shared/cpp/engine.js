/**
 * Motor de C++ compartit (curs de Programació i C++ a contrarellotge).
 *
 * - Clang 22 real compilat a WebAssembly, dins d'un Web Worker (public/compiler/clang-worker.js).
 *   Els fitxers del compilador (≈29 MB) són a public/clang/ i només es baixen el primer cop.
 * - Els programes compilats (wasm32-wasi) s'executen en un altre worker (run-worker.js).
 * - Si el navegador no pot carregar Clang, es fa servir l'intèrpret JSCPP (interp-worker.js).
 *
 * L'estat és un «store» extern: subscribe() + getSnapshot() (vegeu useCppEngine.js).
 */

export const RUN_LIMIT = 4000;
export const INTERP_LIMIT = 8000;

const WARM = '#include <iostream>\n#include <iomanip>\n#include <cmath>\nusing namespace std;\nint main() { int a = 0; cin >> a; cout << fixed << setprecision(2) << sqrt(a + 1.0) << endl; return 0; }\n';
const base = () => new URL(import.meta.env.BASE_URL, window.location.href).href;
const workerUrl = (name) => base() + 'compiler/' + name;

let lang = 'ca';
/** Idioma dels missatges que genera el motor. */
export function setEngineLang(l) { lang = l === 'es' ? 'es' : 'ca'; }
const t = (ca, es) => (lang === 'es' ? es : ca);

/* ---------------------------------------------------------------- estat */
const E = {
  cw: null, rw: null, iw: null, seq: 0, pend: new Map(), readyP: null, done: null,
  lastKey: null, lastRes: null,
};
let snap = { mode: null, state: 'off', pct: 0, err: '', why: '' };
const subs = new Set();
function set(patch) {
  snap = { ...snap, ...patch };
  subs.forEach((f) => { try { f(); } catch { /* subscriptor trencat */ } });
}
export function subscribe(fn) { subs.add(fn); return () => subs.delete(fn); }
export function getSnapshot() { return snap; }

/* ---------------------------------------------------------------- arrencada */
/**
 * Arrenca el motor (si no ho està). prefer: 'clang' (per defecte) o 'interp'.
 * Torna una promesa que es resol a true si Clang està llest, false si es fa servir l'intèrpret.
 */
export function start(prefer = 'clang') {
  if (E.readyP) return E.readyP;
  if (prefer === 'interp') { startInterp(''); return E.readyP; }
  if (typeof WebAssembly !== 'object' || typeof Worker !== 'function') { startInterp('nowasm'); return E.readyP; }
  startClang();
  return E.readyP;
}

/** Torna a arrencar el motor (p. ex. quan l'usuari canvia entre Clang i l'intèrpret). */
export function restart(prefer = 'clang') {
  if (E.cw) { try { E.cw.terminate(); } catch { /* ja aturat */ } E.cw = null; }
  if (E.done) { const d = E.done; E.done = null; d(false); }
  E.readyP = null; E.lastKey = null; E.lastRes = null;
  return start(prefer);
}

function startClang() {
  set({ mode: 'clang', state: 'loading', pct: 0, err: '', why: '' });
  E.readyP = new Promise((r) => { E.done = r; });
  let cw;
  try { cw = new Worker(workerUrl('clang-worker.js')); } catch { startInterp('worker'); return; }
  E.cw = cw;
  cw.onmessage = (ev) => {
    const m = ev.data;
    if (E.cw !== cw) return;
    if (m.type === 'progress') set({ pct: m.p });
    else if (m.type === 'ready') { set({ state: 'warming' }); cw.postMessage({ type: 'compile', id: 0, code: WARM }); }
    else if (m.type === 'initError') { set({ err: m.error }); startInterp('init'); }
    else if (m.type === 'compiled') {
      if (m.id === 0) {
        if (!m.ok) { set({ err: (m.diags || []).join('\n') }); startInterp('init'); return; }
        set({ state: 'ready' });
        const d = E.done; E.done = null; if (d) d(true);
        return;
      }
      const p = E.pend.get(m.id);
      if (p) { E.pend.delete(m.id); p(m); }
    }
  };
  cw.onerror = (e) => { if (E.cw === cw) { set({ err: String(e.message || 'worker') }); startInterp('worker'); } };
  cw.postMessage({ type: 'init', base: base() + 'clang/' });
}

function startInterp(why) {
  if (E.cw) { try { E.cw.terminate(); } catch { /* ja aturat */ } E.cw = null; }
  for (const [, p] of E.pend) p({ ok: false, diags: [t("El compilador no s'ha pogut carregar.", 'El compilador no se ha podido cargar.')] });
  E.pend.clear();
  set({ mode: 'interp', state: 'ready', why });
  const d = E.done; E.done = null; if (d) d(false);
  if (!E.readyP) E.readyP = Promise.resolve(false);
}

/* ---------------------------------------------------------------- compilar i executar */
export const cleanDiags = (lines) => (lines || []).filter((l) =>
  (!/^Error: process exited with code/.test(l) && !/^clang(\+\+)?: error: (clang frontend command failed|linker command failed)/.test(l) && !/^wasm-ld: /.test(l)) || /undefined symbol/.test(l));

/**
 * Compila el codi. Amb l'intèrpret no hi ha compilació: torna { ok, interp: true, code }.
 * Amb Clang: { ok, bytes, diags, ms, key }. El darrer resultat queda en memòria cau.
 */
export async function compile(code) {
  await start();
  if (snap.mode === 'interp') return { ok: true, interp: true, code, diags: [], ms: 0 };
  if (snap.state !== 'ready') {
    const ok = await E.readyP;
    if (!ok && snap.mode !== 'interp') return { ok: false, diags: [t('El compilador no està disponible.', 'El compilador no está disponible.')], ms: 0 };
    return compile(code);
  }
  if (E.lastKey === code && E.lastRes) return E.lastRes;
  const id = ++E.seq;
  const m = await new Promise((res) => {
    E.pend.set(id, res);
    setTimeout(() => {
      if (E.pend.has(id)) { E.pend.delete(id); res({ ok: false, diags: [t('La compilació ha trigat massa.', 'La compilación ha tardado demasiado.')], ms: 60000 }); }
    }, 60000);
    E.cw.postMessage({ type: 'compile', id, code });
  });
  const r = { ok: m.ok, bytes: m.bytes, diags: cleanDiags(m.diags), ms: m.ms, key: 'k' + id };
  if (m.ok || (m.diags || []).some((d) => /error/.test(d))) { E.lastKey = code; E.lastRes = r; }
  return r;
}

/**
 * Executa un programa compilat amb l'entrada donada.
 * Resultat: { kind: 'ok'|'timeout'|'output'|'trap'|'compile'|'fatal', stdout, stderr, output?, exitCode, error?, ms }
 */
export function run(c, stdin) {
  if (c.interp) return runInterp(c.code, stdin);
  return new Promise((res) => {
    if (!E.rw) E.rw = new Worker(workerUrl('run-worker.js'));
    const w = E.rw, id = ++E.seq;
    const to = setTimeout(() => {
      try { w.terminate(); } catch { /* ja aturat */ }
      if (E.rw === w) E.rw = null;
      res({ kind: 'timeout', stdout: '', stderr: '', exitCode: null, ms: RUN_LIMIT });
    }, RUN_LIMIT);
    w.onmessage = (ev) => { if (ev.data.id !== id) return; clearTimeout(to); res(ev.data); };
    w.onerror = (ev) => {
      clearTimeout(to);
      try { w.terminate(); } catch { /* ja aturat */ }
      if (E.rw === w) E.rw = null;
      res({ kind: 'fatal', error: String(ev.message || 'worker'), stdout: '', stderr: '', exitCode: null, ms: 0 });
    };
    w.postMessage({ id, key: c.key, bytes: c.bytes, stdin });
  });
}

function runInterp(code, stdin) {
  return new Promise((res) => {
    if (!E.iw) E.iw = new Worker(workerUrl('interp-worker.js'));
    const w = E.iw, id = ++E.seq;
    const to = setTimeout(() => {
      try { w.terminate(); } catch { /* ja aturat */ }
      if (E.iw === w) E.iw = null;
      res({ kind: 'timeout', stdout: '', stderr: '', exitCode: null, ms: INTERP_LIMIT });
    }, INTERP_LIMIT);
    w.onmessage = (ev) => { if (ev.data.id !== id) return; clearTimeout(to); res(ev.data); };
    w.postMessage({ id, code, stdin });
  });
}

/** Missatge d'error d'execució per a l'usuari. */
export function trapMsg(r) {
  const e = String(r.error || '');
  const lim = (snap.mode === 'interp' ? INTERP_LIMIT : RUN_LIMIT) / 1000;
  if (r.kind === 'timeout') return t(`Temps límit excedit (${lim} s): potser hi ha un bucle infinit o el programa espera més dades.`, `Tiempo límite excedido (${lim} s): quizá hay un bucle infinito o el programa espera más datos.`);
  if (r.kind === 'output') return t('El programa escriu massa: segurament és un bucle infinit.', 'El programa escribe demasiado: seguramente es un bucle infinito.');
  if (/divide by zero|division by zero/i.test(e)) return t("Error d'execució: divisió entera per zero.", 'Error de ejecución: división entera por cero.');
  if (/out of bounds/i.test(e)) return t("Error d'execució: accés a memòria fora de límits.", 'Error de ejecución: acceso a memoria fuera de límites.');
  return t("Error d'execució: ", 'Error de ejecución: ') + e;
}
