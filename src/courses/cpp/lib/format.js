/** Formats de temps i notes, missatges d'execució i comparació de sortides (sense DOM). */
import { esc } from '../../../lib/html.js';
import { INTERP_LIMIT, RUN_LIMIT } from '../../../shared/cpp/engine.js';

export const mmss = (s) => {
  const neg = s < 0; s = Math.abs(Math.round(s));
  return (neg ? '+' : '') + String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
};
export const fmtT = (s) => (s == null ? '—' : mmss(s));
export const hms = (s) => {
  s = Math.max(0, Math.round(s));
  return Math.floor(s / 3600) + ':' + String(Math.floor(s % 3600 / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
};
export const grade2 = (g) => (g / 100).toFixed(2).replace('.', ',');

/** Marcatge en línia dels enunciats: `codi` i **negreta** (text escapat). */
export const inl = (s) => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');

/** Comparació de sortides com CodeRunner: només s'ignoren els espais finals (llevat del mode estricte). */
export const norm = (s, strict) => {
  s = String(s || '').replace(/\r\n/g, '\n');
  return strict ? s : s.replace(/\s+$/, '');
};

/** Missatge d'un error d'execució (com a la versió original, amb l'equivalent de g++). */
export function trapMsg(r, L, mode) {
  const e = String(r.error || '');
  const lim = (mode === 'interp' ? INTERP_LIMIT : RUN_LIMIT) / 1000;
  if (r.kind === 'timeout') return L('Temps límit excedit (' + lim + ' s): potser hi ha un bucle infinit o el programa espera més dades.', 'Tiempo límite excedido (' + lim + ' s): quizá hay un bucle infinito o el programa espera más datos.');
  if (r.kind === 'output') return L('El programa escriu massa (més de 256 KB): segurament és un bucle infinit.', 'El programa escribe demasiado (más de 256 KB): seguramente es un bucle infinito.');
  if (/divide by zero|division by zero/i.test(e)) return L('Error d\'execució: divisió entera per zero (a g++ seria «Floating point exception»).', 'Error de ejecución: división entera por cero (en g++ sería «Floating point exception»).');
  if (/out of bounds/i.test(e)) return L('Error d\'execució: accés a memòria fora de límits (a g++ seria «Segmentation fault»).', 'Error de ejecución: acceso a memoria fuera de límites (en g++ sería «Segmentation fault»).');
  if (/call stack|stack overflow/i.test(e)) return L('Error d\'execució: desbordament de la pila.', 'Error de ejecución: desbordamiento de la pila.');
  if (/unreachable|abort/i.test(e)) return L('Error d\'execució: el programa ha avortat.', 'Error de ejecución: el programa ha abortado.');
  if (r.kind === 'fatal') return L('Error intern en executar: ', 'Error interno al ejecutar: ') + e;
  return L('Error d\'execució: ', 'Error de ejecución: ') + e;
}

/** Línia d'un diagnòstic de Clang: { l, c, cls } si apunta a main.cpp. */
export function parseDiag(d) {
  const m = /^main\.cpp:(\d+):(\d+): (error|warning|note)/.exec(d);
  if (m) return { l: +m[1], c: +m[2], cls: m[3] === 'error' ? 'err' : m[3] === 'warning' ? 'wrn' : 'sys' };
  return { l: 0, c: 0, cls: /error/i.test(d) ? 'err' : '' };
}
/** Línies (base 0) amb error, per marcar-les a l'editor. */
export const errLinesOf = (diags) => (diags || []).map((d) => /^main\.cpp:(\d+):\d+: error/.exec(d)).filter(Boolean).map((m) => +m[1] - 1);
