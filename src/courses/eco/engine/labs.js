/** Càlculs dels laboratoris d'economia (FPP, mercat i cadena de macromagnituds). */

/* ---------------------------------------------------------------- FPP */
export const FPP0 = { pts: [[0, 20], [10, 18], [20, 14], [30, 8], [40, 0]], test: [15, 14], tech: 0 };

/** Y de la frontera per a una X (interpolació lineal per trams), o null fora del rang. */
export function fppY(pts, x) {
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1];
    if (x >= a[0] - 1e-9 && x <= b[0] + 1e-9) return a[1] + (b[1] - a[1]) * (x - a[0]) / ((b[0] - a[0]) || 1);
  }
  return null;
}

/**
 * Model de la FPP: validesa de la taula, frontera desplaçada per la tecnologia, classificació
 * del punt (eff | ine | ina | out) i costos d'oportunitat de cada tram (forma: lin | conc | noconc).
 */
export function fppModel(pts, test, tech) {
  let ok = pts.every((p) => isFinite(p[0]) && isFinite(p[1]) && p[0] >= 0 && p[1] >= 0);
  for (let i = 0; i < pts.length - 1 && ok; i++) if (!(pts[i + 1][0] > pts[i][0] && pts[i + 1][1] <= pts[i][1])) ok = false;
  if (!ok) return { ok };
  const k = 1 + tech / 100, np = pts.map((p) => [p[0] * k, p[1]]);
  const xmax = Math.max(pts[pts.length - 1][0] * k, test[0] || 0) * 1.12, ymax = Math.max(pts[0][1], test[1] || 0) * 1.15;
  const [tx, ty] = test;
  let cls = 'g-ptw', label = null;
  const hasPt = isFinite(tx) && isFinite(ty);
  if (hasPt) {
    const yf = fppY(pts, tx);
    if (yf === null) { label = 'out'; cls = 'g-ptr'; }
    else if (Math.abs(ty - yf) <= Math.max(1e-6, 0.005 * ymax)) { label = 'eff'; cls = 'g-pt'; }
    else if (ty < yf) { label = 'ine'; cls = 'g-ptw'; }
    else { label = 'ina'; cls = 'g-ptr'; }
  }
  const costs = [];
  for (let j = 0; j < pts.length - 1; j++) {
    const dy = pts[j][1] - pts[j + 1][1], dx = pts[j + 1][0] - pts[j][0];
    costs.push({ j, dy, dx, c: dy / dx });
  }
  const inc = costs.every((c, i) => i === 0 || c.c > costs[i - 1].c + 1e-9);
  const cst = costs.every((c) => Math.abs(c.c - costs[0].c) < 1e-9);
  return { ok, np, xmax, ymax, hasPt, cls, label, costs, shape: cst ? 'lin' : inc ? 'conc' : 'noconc' };
}

/* ---------------------------------------------------------------- mercat */
export const MK0 = { a: 1000, b: 100, c: 200, e: -20, p: null };
export const MK_PRESETS = { 1: { a: 1000, b: 100, c: 200, e: -20, p: null }, 2: { a: 500, b: 50, c: 100, e: -100, p: null } };

/** Equilibri de Qd = a − b·P i Qo = c·P + e. */
export function marketCalc({ a, b, c, e }) {
  const Pmax = a / b, Pmin = -e / c, Pe = (a - e) / (b + c), Qe = a - b * Pe;
  const ok = b > 0 && c > 0 && a > 0 && Pmax > Math.max(Pmin, 0) && Qe > 0;
  return { ok, Pmax, Pmin, Pe, Qe };
}

/** Tot el que dibuixa i explica el laboratori del mercat per al preu triat (p = null: equilibri). */
export function marketModel(mk) {
  const r = marketCalc(mk);
  if (!r.ok) return { r };
  const { a, b, c, e } = mk, pm = Math.max(r.Pmax, 0);
  const p = mk.p === null || mk.p > pm ? r.Pe : mk.p;
  const qmax = Math.max(a, c * pm + e) * 1.08, ymax = pm * 1.12;
  const pmn = Math.max(r.Pmin, 0), q0 = c * pmn + e;
  let EC = r.Qe * (r.Pmax - r.Pe) / 2, EP = r.Qe * (r.Pe - r.Pmin) / 2;
  if (r.Pmin < 0) EP = (q0 + r.Qe) / 2 * r.Pe; // l'oferta talla l'eix de quantitats: trapezi
  const qd = a - b * p, qo = c * p + e;
  return { r, pm, p, qmax, ymax, pmn, q0, EC, EP, qd, qo, atEq: Math.abs(p - r.Pe) <= 1e-6 };
}

/** Pas dels botons de desplaçament de les corbes. */
export const shiftStep = (a) => Math.max(1, Math.round(Math.abs(a) * 0.1));

/* ---------------------------------------------------------------- cadena */
export const CH0 = { sal: 1200, llo: 150, int: 90, ben: 360, ti: 220, sub: 50, rfne: 65, rfen: 125, am: 140, td: 310, ss: 190, tr: 150, c: 1050, d: 380, hab: 80000 };
export const CH_G1 = ['sal', 'llo', 'int', 'ben', 'ti', 'sub', 'rfne', 'rfen', 'am'];
export const CH_G2 = ['td', 'ss', 'tr', 'c', 'd', 'hab'];

/** La cadena de macromagnituds a partir de les dades. */
export function chain(v) {
  const EBE = v.llo + v.int + v.ben, PIBcf = v.sal + EBE, PIBpm = PIBcf + v.ti - v.sub, PNBcf = PIBcf + v.rfne - v.rfen, PNBpm = PIBpm + v.rfne - v.rfen;
  const RN = PNBcf - v.am, pc = RN * 1e6 / v.hab, RPD = RN - v.td - v.ss + v.tr, S = RPD - v.c, Tt = v.td + v.ti, SP = Tt - v.d - v.tr - v.sub;
  return { EBE, PIBcf, PIBpm, PNBcf, PNBpm, RN, pc, RPD, S, Tt, SP };
}
