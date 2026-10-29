/**
 * Dibuix d'un projecte (mètode C.P.M.): el graf de tasques per nivells, d'esquerra a dreta, amb una tasca
 * inicial α i una final ω, i el diagrama de Gantt. Ho fan servir la lliçó G9 i el laboratori g-cpm.
 */
import { graph } from './model.js';
import { HL } from './svg.js';

/**
 * Graf de tasques: un arc X → Y per cada anterioritat, amb el pes = durada de X (la tasca d'origen).
 * r és el resultat de cpm(tasks). Torna { G, pos, hlE (arcs del camí crític), tag (early|last) }.
 */
export function projectGraph(tasks, r, { w = 460, h = 280 } = {}) {
  const dur = Object.fromEntries(tasks.map((t) => [t.id, t.d]));
  const V = ['α', ...tasks.map((t) => t.id), 'ω'];
  const E = [
    ...tasks.filter((t) => !t.pre.length).map((t) => ['α', t.id, 0]),
    ...tasks.flatMap((t) => t.pre.map((p) => [p, t.id, dur[p]])),
    ...tasks.filter((t) => !r.succ.get(t.id).length).map((t) => [t.id, 'ω', t.d]),
  ];
  const maxL = Math.max(...Object.values(r.level)), cols = maxL + 3;
  const pos = { α: [24, Math.round(h / 2)], ω: [w - 30, Math.round(h / 2)] };
  for (let l = 0; l <= maxL; l++) {
    const row = tasks.filter((t) => r.level[t.id] === l);
    row.forEach((t, i) => { pos[t.id] = [Math.round(24 + ((w - 54) * (l + 1)) / (cols - 1)), Math.round(40 + ((h - 60) * (i + 0.5)) / row.length)]; });
  }
  const crit = new Set(r.critical);
  const tight = ([a, b]) => (a === 'α' ? r.early[b] === 0 : b === 'ω' ? r.early[a] + dur[a] === r.duration : r.early[b] === r.early[a] + dur[a]);
  const hlE = E.filter((e) => (e[0] === 'α' || crit.has(e[0])) && (e[1] === 'ω' || crit.has(e[1])) && tight(e));
  const tag = Object.fromEntries(tasks.map((t) => [t.id, `${r.early[t.id]}|${r.late[t.id]}`]));
  tag.ω = `${r.duration}|${r.duration}`;
  return { G: graph(V, E, true), pos, hlE, tag };
}

/** Diagrama de Gantt en SVG (text): cada tasca comença a la data early; la franja clara és el marge total. */
export function ganttSvg(tasks, r, { w = 420, label = 'Gantt' } = {}) {
  const x = (t) => 30 + (t * (w - 50)) / r.duration;
  const H = tasks.length * 22;
  const crit = new Set(r.critical);
  const grid = Array.from({ length: r.duration + 1 }, (_, t) => `<line x1="${x(t)}" x2="${x(t)}" y1="0" y2="${H}" stroke="#e9e5da"/>`).join('');
  const bars = tasks.map((t, i) => {
    const y = i * 22 + 5;
    const slack = r.total[t.id] > 0 ? `<rect x="${x(r.early[t.id])}" y="${y}" width="${x(r.late[t.id] + t.d) - x(r.early[t.id])}" height="12" rx="3" fill="#efede4" stroke="#ddd8c9"/>` : '';
    return `<text x="8" y="${i * 22 + 15}" font-size="12" fill="#2b2a24">${t.id}</text>${slack}<rect x="${x(r.early[t.id])}" y="${y}" width="${x(r.early[t.id] + t.d) - x(r.early[t.id])}" height="12" rx="3" fill="${crit.has(t.id) ? HL : '#b7b38f'}"/>`;
  }).join('');
  const ticks = [0, Math.round(r.duration / 2), r.duration].map((t) => `<text x="${x(t)}" y="${H + 16}" font-size="11" text-anchor="middle" fill="#8b8477">${t}</text>`).join('');
  return `<svg viewBox="0 0 ${w} ${H + 22}" width="${w}" role="img" aria-label="${label}" font-family="inherit">${grid}${bars}${ticks}</svg>`;
}
