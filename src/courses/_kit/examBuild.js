/**
 * Construcció d'un simulacre a partir del banc: tria exercicis dels temes escollits fins a
 * omplir la durada (els de nivell «examen» primer, després difícils i fàcils) i reparteix
 * 10 punts segons el temps estimat de cada exercici (en quarts de punt).
 */
import { instance, minutesOf, rngOf } from './bank.js';
import { lsJSON, lsSetJSON } from '../../lib/storage.js';

export const DURATIONS = [45, 60, 90, 120];
const ORDER = { exam: 0, hard: 1, easy: 2 };

export function buildExam(bank, { units, min, seed }) {
  const rng = rngOf(seed);
  const pool = [
    ...(bank.items || []).map((ex) => ({ ref: { id: ex.id }, ex })),
    ...(bank.families || []).map((f, i) => { const s = (seed + i * 7919) >>> 0; return { ref: { id: f.id, seed: s }, ex: instance(f, s) }; }),
  ].filter((p) => (!units || !units.length || units.includes(p.ex.unit)) && p.ex.examOk !== false);
  const shuffled = rng.shuffle(pool).sort((a, b) => (ORDER[a.ex.level] ?? 3) - (ORDER[b.ex.level] ?? 3));
  const pick = [];
  let total = 0;
  const target = min * 0.85;
  // primer, un exercici de cada tema (si hi caben), perquè el simulacre els cobreixi tots
  const seen = new Set();
  for (const p of shuffled) {
    if (seen.has(p.ex.unit) || total + minutesOf(p.ex) > min) continue;
    seen.add(p.ex.unit); pick.push(p); total += minutesOf(p.ex);
  }
  for (const p of shuffled) {
    if (total >= target) break;
    if (pick.includes(p) || total + minutesOf(p.ex) > min * 1.05) continue;
    pick.push(p); total += minutesOf(p.ex);
  }
  // ordre del temari
  const unitOrder = (u) => (units || []).indexOf(u);
  pick.sort((a, b) => unitOrder(a.ex.unit) - unitOrder(b.ex.unit));
  const sum = pick.reduce((n, p) => n + minutesOf(p.ex), 0) || 1;
  let pts = pick.map((p) => Math.max(0.25, Math.round((minutesOf(p.ex) / sum) * 10 * 4) / 4));
  // ajusta l'arrodoniment perquè sumi exactament 10
  const diff = Math.round((10 - pts.reduce((a, b) => a + b, 0)) * 4) / 4;
  if (pts.length) pts[pts.length - 1] = Math.max(0.25, pts[pts.length - 1] + diff);
  return { min, units, seed, items: pick.map((p, i) => ({ ...p.ref, pts: pts[i] })) };
}

/**
 * Simulacre amb el format d'un examen real (course.formats): { id, t, desc, units, min, build(seed) → exercicis amb pts }.
 */
export function buildFormat(f, { min, seed }) {
  return { format: f.id, min, units: f.units, seed, items: f.build(seed).map((e) => ({ id: e.id, pts: e.pts })) };
}

/** Exercicis concrets d'un simulacre desat. */
export function examExercises(bank, sim, course) {
  const f = sim.format && course && (course.formats || []).find((x) => x.id === sim.format);
  if (f) return f.build(sim.seed);
  const byId = new Map((bank.items || []).map((x) => [x.id, x]));
  const fams = new Map((bank.families || []).map((f) => [f.id, f]));
  return sim.items.map((it) => {
    const ex = it.seed != null && fams.has(it.id) ? instance(fams.get(it.id), it.seed) : byId.get(it.id);
    return ex ? { ...ex, pts: it.pts } : null;
  }).filter(Boolean);
}

/* simulacre en curs (sobreviu a canviar de pestanya o recarregar) */
export const simKey = (k) => `kit-${k}-sim`;
export const loadSim = (k) => { const v = lsJSON(simKey(k), null); return v && Array.isArray(v.items) ? v : null; };
export const saveSim = (k, sim) => lsSetJSON(simKey(k), sim);
