/**
 * Figures de grafs en SVG (text), per als blocs { t: 'diagram' } i els enunciats dels exercicis.
 * Els colors van dins del mateix SVG perquè la figura es vegi igual a la web i al PDF del simulacre.
 * La geometria (posicions, corbes, fletxes) també la fa servir el component interactiu GraphView.jsx.
 */
import { neighbours, sameEdge, weight } from './model.js';

export const INK = '#2b2a24', MUTED = '#8b8477', LINE = '#6f6a5c', PAPER = '#fffefb';
export const HL = '#55672a', HL_SOFT = '#e4ead2', BAD = '#a2402c';
/** Colors per acolorir (1, 2, 3…): diferents també en escala de grisos, sense blaus. */
export const PALETTE = ['#cfdba7', '#e7b49a', '#f0d68c', '#c9a3b4', '#a9c9b4', '#d6cfc2', '#e9c7a0', '#b7b38f'];
/** Colors per acolorir costats: més saturats, perquè una línia es vegi. */
export const EDGE_PALETTE = ['#55672a', '#b5562f', '#c99a2e', '#7a2038', '#4f7f6a', '#8a7f6f'];
export const R = 15;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const f1 = (x) => Math.round(x * 10) / 10;

/** Vèrtexs en cercle (el primer a dalt, en sentit horari). */
export function circle(V, { w = 320, h = 230, pad = 30, rot = 0 } = {}) {
  const r = Math.min(w, h) / 2 - pad, cx = w / 2, cy = h / 2;
  if (V.length === 1) return { [V[0]]: [cx, cy] };
  return Object.fromEntries(V.map((v, i) => {
    const a = -Math.PI / 2 + rot + (2 * Math.PI * i) / V.length;
    return [v, [f1(cx + r * Math.cos(a)), f1(cy + r * Math.sin(a))]];
  }));
}
/**
 * Si algun vèrtex (o un bucle) queda fora del dibuix (posicions pensades per a una altra mida), es
 * redueixen i es centren totes les posicions, mantenint la proporció.
 */
export function fit(pos, G, w, h) {
  const pts = Object.entries(pos);
  const loopy = new Set(G.E.filter((e) => e[0] === e[1]).map((e) => e[0]));
  const m = (v) => R + 4 + (loopy.has(v) ? 26 : 0);
  if (pts.every(([v, [x, y]]) => x >= m(v) && x <= w - m(v) && y >= m(v) && y <= h - m(v))) return pos;
  const xs = pts.map(([, p]) => p[0]), ys = pts.map(([, p]) => p[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  const pad = R + 6 + (loopy.size ? 22 : 0);
  const k = Math.min((w - 2 * pad) / Math.max(1, x1 - x0), (h - 2 * pad) / Math.max(1, y1 - y0), 1);
  const ox = (w - (x1 - x0) * k) / 2, oy = (h - (y1 - y0) * k) / 2;
  return Object.fromEntries(pts.map(([v, [x, y]]) => [v, [f1(ox + (x - x0) * k), f1(oy + (y - y0) * k)]]));
}

/** Arbre per nivells des de l'arrel (recorregut en amplada), centrat. */
export function layered(G, root = G.V[0], { w = 320, h = 230, pad = 28 } = {}) {
  const N = neighbours({ ...G, dir: false }), lev = { [root]: 0 }, rows = [[root]], q = [root];
  while (q.length) {
    const v = q.shift();
    for (const x of N.get(v)) if (!(x in lev)) { lev[x] = lev[v] + 1; (rows[lev[x]] ||= []).push(x); q.push(x); }
  }
  for (const v of G.V) if (!(v in lev)) (rows[rows.length] ||= []).push(v);
  const dy = rows.length > 1 ? (h - 2 * pad) / (rows.length - 1) : 0;
  const pos = {};
  rows.forEach((row, i) => row.forEach((v, j) => { pos[v] = [f1(pad + ((w - 2 * pad) * (j + 0.5)) / row.length), f1(pad + i * dy)]; }));
  return pos;
}
/** Posicions donades en una quadrícula de 0..10 × 0..10 (més còmodes d'escriure a mà). */
export function grid(spec, { w = 320, h = 230, pad = 26 } = {}) {
  return Object.fromEntries(Object.entries(spec).map(([v, [x, y]]) => [v, [f1(pad + ((w - 2 * pad) * x) / 10), f1(pad + ((h - 2 * pad) * y) / 10)]]));
}

/**
 * Geometria de cada costat: { i, e, d (camí SVG), mid [x, y] per al pes, arrow (punts del triangle) | null }.
 * Els costats múltiples entre dos vèrtexs es corben a banda i banda; un bucle és un cercle petit cap a fora.
 */
export function edgeGeometry(G, pos) {
  const xs = Object.values(pos), cx = xs.reduce((s, p) => s + p[0], 0) / xs.length, cy = xs.reduce((s, p) => s + p[1], 0) / xs.length;
  const groups = new Map();
  G.E.forEach((e, i) => {
    const key = [e[0], e[1]].sort().join('\u0000');
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(i);
  });
  const out = [];
  for (const idx of groups.values()) {
    idx.forEach((i, k) => {
      const e = G.E[i], [a, b] = e, p = pos[a], q = pos[b];
      if (a === b) {
        let ux = p[0] - cx, uy = p[1] - cy;
        const L = Math.hypot(ux, uy) || 1;
        ux /= L; uy /= L;
        const rr = 10 + 5 * k, ox = p[0] + ux * (R + rr - 4), oy = p[1] + uy * (R + rr - 4);
        out.push({ i, e, d: `M${f1(ox + rr)} ${f1(oy)}A${rr} ${rr} 0 1 0 ${f1(ox - rr)} ${f1(oy)}A${rr} ${rr} 0 1 0 ${f1(ox + rr)} ${f1(oy)}`, mid: [f1(ox + ux * (rr + 9)), f1(oy + uy * (rr + 9))], arrow: null, loop: true });
        return;
      }
      // desplaçament de la corba: 0 si és l'únic costat; si no, repartits a banda i banda
      const m = idx.length, flip = a > b ? -1 : 1;
      const off = m === 1 ? 0 : (k - (m - 1) / 2) * 34 * flip;
      const dx = q[0] - p[0], dy = q[1] - p[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L;
      const c = [(p[0] + q[0]) / 2 + nx * off, (p[1] + q[1]) / 2 + ny * off];
      const d = off ? `M${p[0]} ${p[1]}Q${f1(c[0])} ${f1(c[1])} ${q[0]} ${q[1]}` : `M${p[0]} ${p[1]}L${q[0]} ${q[1]}`;
      const mid = off ? [f1(0.25 * p[0] + 0.5 * c[0] + 0.25 * q[0]), f1(0.25 * p[1] + 0.5 * c[1] + 0.25 * q[1])] : [f1((p[0] + q[0]) / 2), f1((p[1] + q[1]) / 2)];
      let arrow = null;
      if (G.dir) {
        // la punta toca la vora del cercle del destí, en la direcció d'arribada
        const from = off ? c : p, ux = q[0] - from[0], uy = q[1] - from[1], U = Math.hypot(ux, uy) || 1;
        const tx = q[0] - (ux / U) * (R + 1), ty = q[1] - (uy / U) * (R + 1), bx = tx - (ux / U) * 10, by = ty - (uy / U) * 10;
        arrow = `${f1(tx)},${f1(ty)} ${f1(bx + (uy / U) * 4.5)},${f1(by - (ux / U) * 4.5)} ${f1(bx - (uy / U) * 4.5)},${f1(by + (ux / U) * 4.5)}`;
      }
      out.push({ i, e, d, mid, arrow, loop: false });
    });
  }
  return out.sort((x, y) => x.i - y.i);
}

/** Índexs dels costats que coincideixen amb una llista de parells (o índexs). */
export function edgeSet(G, list = []) {
  const s = new Set();
  for (const x of list) {
    if (typeof x === 'number') { s.add(x); continue; }
    const i = G.E.findIndex((e, k) => !s.has(k) && sameEdge(G, e, x));
    if (i >= 0) s.add(i);
  }
  return s;
}
/** Parells consecutius d'un camí ['A', 'B', 'C'] → [['A','B'], ['B','C']]. */
export const pathEdges = (walk) => walk.slice(1).map((v, k) => [walk[k], v]);

/**
 * SVG d'un graf. Opcions:
 *   pos | layout ('circle' | 'tree') + root, w, h          posicions
 *   weights (true si hi ha pesos)                          escriu el pes de cada costat
 *   hlV, hlE, badE, dimE                                   vèrtexs i costats destacats, errats o atenuats
 *   col: { v: 1.. }                                        colors dels vèrtexs (acoloriment)
 *   ecol: { índex: 1.. }                                   colors dels costats
 *   tag: { v: text }, tagAbove                             etiqueta petita al costat del vèrtex (o a sobre)
 *   names: { v: text }                                     nom que es mostra dins del vèrtex
 *   elab: { índex: text }                                  nom del costat (e₁, e₂…)
 *   label                                                  descripció per a lectors de pantalla
 */
export function graphSvg(G, o = {}) {
  const w = o.w || 320, h = o.h || 230;
  const pos = fit(o.pos || (o.layout === 'tree' ? layered(G, o.root, { w, h }) : circle(G.V, { w, h, rot: o.rot || 0 })), G, w, h);
  const hlE = edgeSet(G, o.hlE), badE = edgeSet(G, o.badE), dimE = edgeSet(G, o.dimE), hlV = new Set(o.hlV || []);
  const showW = o.weights ?? G.E.some((e) => e[2] != null);
  const parts = [];
  for (const g of edgeGeometry(G, pos)) {
    const c = o.ecol && o.ecol[g.i] ? EDGE_PALETTE[(o.ecol[g.i] - 1) % EDGE_PALETTE.length] : null;
    const stroke = badE.has(g.i) ? BAD : hlE.has(g.i) ? HL : c || LINE;
    const sw = hlE.has(g.i) || badE.has(g.i) || c ? 3.4 : 1.8;
    const op = dimE.has(g.i) ? ' stroke-opacity=".28"' : '';
    const dash = badE.has(g.i) ? ' stroke-dasharray="5 4"' : '';
    parts.push(`<path d="${g.d}" fill="none" stroke="${stroke}" stroke-width="${sw}"${op}${dash} stroke-linecap="round"/>`);
    if (g.arrow) parts.push(`<polygon points="${g.arrow}" fill="${stroke}"${op}/>`);
  }
  // pesos i noms dels costats per sobre de les línies
  for (const g of edgeGeometry(G, pos)) {
    const t = o.elab && o.elab[g.i] != null ? o.elab[g.i] : showW ? weight(g.e) : null;
    if (t == null) continue;
    const s = String(t), bw = 7 * s.length + 8;
    parts.push(`<rect x="${f1(g.mid[0] - bw / 2)}" y="${f1(g.mid[1] - 9)}" width="${bw}" height="17" rx="4" fill="${PAPER}" stroke="${hlE.has(g.i) ? HL : '#ddd8c9'}"/>`
      + `<text x="${g.mid[0]}" y="${f1(g.mid[1] + 4)}" text-anchor="middle" font-size="11.5" fill="${INK}">${esc(s)}</text>`);
  }
  for (const v of G.V) {
    const [x, y] = pos[v];
    const fill = o.col && o.col[v] ? PALETTE[(o.col[v] - 1) % PALETTE.length] : hlV.has(v) ? HL_SOFT : PAPER;
    const stroke = hlV.has(v) ? HL : INK;
    parts.push(`<circle cx="${x}" cy="${y}" r="${R}" fill="${fill}" stroke="${stroke}" stroke-width="${hlV.has(v) ? 2.6 : 1.6}"/>`
      + `<text x="${x}" y="${f1(y + 4.5)}" text-anchor="middle" font-size="13" font-weight="600" fill="${INK}">${esc(o.names?.[v] ?? v)}</text>`);
    if (o.tag && o.tag[v] != null) {
      // tagAbove: l'etiqueta centrada a sobre del vèrtex (quan els costats surten pels costats, com als projectes)
      const t = String(o.tag[v]), bw = 6.4 * t.length + 8, tx = o.tagAbove ? x - bw / 2 : x + R - 2, ty = o.tagAbove ? y - R - 18 : y - R - 13;
      parts.push(`<rect x="${f1(tx)}" y="${f1(ty)}" width="${f1(bw)}" height="15" rx="7.5" fill="${HL}"/>`
        + `<text x="${f1(tx + bw / 2)}" y="${f1(ty + 11)}" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="600">${esc(t)}</text>`);
    }
  }
  const label = esc(o.label || `${G.V.length} vèrtexs, ${G.E.length} costats`);
  return `<svg viewBox="0 0 ${w} ${h}" width="${w}" role="img" aria-label="${label}" font-family="inherit">${parts.join('')}</svg>`;
}

/** Diverses figures petites en files de perRow (galeria): [{ svg, cap }] amb la mateixa mida. */
export function gallery(items, { w = 150, h = 150, perRow = 3 } = {}) {
  const cols = Math.min(perRow, items.length), rows = Math.ceil(items.length / cols), rh = h + 26;
  const W = w * cols;
  const inner = items.map((it, i) => {
    const body = it.svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
    return `<g transform="translate(${(i % cols) * w} ${Math.floor(i / cols) * rh})">${body}<text x="${w / 2}" y="${h + 16}" text-anchor="middle" font-size="13" fill="${MUTED}">${esc(it.cap)}</text></g>`;
  }).join('');
  return `<svg viewBox="0 0 ${W} ${rows * rh}" width="${W}" role="img" aria-label="${esc(items.map((x) => x.cap).join(', '))}" font-family="inherit">${inner}</svg>`;
}
