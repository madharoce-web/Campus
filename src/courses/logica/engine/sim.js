/** Banc d'exercicis i simulacre de control: models, tria a l'atzar, rellotge i nota. */

export function kindName(k, L) {
  return {
    A: L('Formalització en CP0', 'Formalización en CP0'), B: L('Taula de veritat', 'Tabla de verdad'), R: L('Raonament en CP0', 'Razonamiento en CP0'),
    E: L('Formalització en CP1', 'Formalización en CP1'), F: L('Resolució en CP1', 'Resolución en CP1'),
  }[k];
}

/** Models de control: exercicis [tipus, pes en %, parts de la solució ('b': només el mètode alternatiu)]. */
export const MODELS = {
  cp1: { n: 'CP1', t: (L) => L('CP1 · Lògica de proposicions', 'CP1 · Lógica de proposiciones'), slots: [['R', 50, 'ab'], ['A', 30, null], ['B', 20, null]] },
  cp2: { n: 'CP2', t: (L) => L('CP2 · Lògica de predicats', 'CP2 · Lógica de predicados'), slots: [['R', 20, 'b'], ['E', 40, null], ['F', 40, null]] },
};
export const DURATION = 5400; // una hora i mitja

/** Un exercici del tipus donat a l'atzar, si es pot diferent dels de avoid. */
export function pickId(bank, kind, avoid, rnd = Math.random) {
  const c = bank.filter((x) => x.kind === kind);
  let free = c.filter((x) => (avoid || []).indexOf(x.id) < 0);
  if (!free.length) free = c;
  return free[Math.floor(rnd() * free.length)].id;
}

/** Un simulacre nou del model m: { m, ids, t0, fin, self }. */
export function newSim(bank, m, now = Date.now(), rnd = Math.random) {
  const M = MODELS[m], used = [];
  const ids = M.slots.map((s) => { const id = pickId(bank, s[0], used, rnd); used.push(id); return id; });
  return { m, ids, t0: now, fin: null, self: {} };
}

export function fmtClock(s) {
  s = Math.max(0, Math.round(s));
  const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), ss = s % 60;
  return h + ':' + String(m).padStart(2, '0') + ':' + String(ss).padStart(2, '0');
}

/** Nota sobre 10 a partir de l'autoavaluació (percentatge de cada exercici). */
export function grade(S) {
  let g = 0;
  MODELS[S.m].slots.forEach((s, i) => { g += (S.self[i] || 0) / 100 * s[1] / 10; });
  return g;
}

export const fmtGrade = (g) => g.toFixed(1).replace('.', ',');

/** Afegeix o actualitza l'intent a l'historial quan ja s'han autoavaluat tots els exercicis. */
export function withHistory(hist, S) {
  if (Object.keys(S.self).length !== MODELS[S.m].slots.length) return hist;
  const h = hist.slice(), last = h[h.length - 1];
  const rec = { d: S.t0, m: MODELS[S.m].n, t: (S.fin - S.t0) / 1000, g: grade(S) };
  if (last && last.d === S.t0) h[h.length - 1] = rec; else h.push(rec);
  return h.slice(-30);
}

/** Estat del rellotge: text i classe (warn: menys de 10 minuts; over: temps esgotat; fin: acabat). */
export function clock(S, now, L) {
  const el = ((S.fin || now) - S.t0) / 1000, left = DURATION - el;
  const text = S.fin ? L('Temps emprat ', 'Tiempo empleado ') + fmtClock(el) : (left >= 0 ? fmtClock(left) : '+' + fmtClock(-left));
  const cls = S.fin ? 'fin' : left < 0 ? 'over' : left < 600 ? 'warn' : '';
  return { text, cls };
}
