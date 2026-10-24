/**
 * Ajudes per escriure el contingut del T3: les fórmules s'escriuen amb la notació de boole.js
 * (A', AB, A+B, A⊕B) i es converteixen a TeX, de manera que totes surten igual.
 */
import { E, toTeX } from './boole.js';

export const L3 = (ca, es, en) => [ca, es, en];
const tex = (s) => (/^[01]$/.test(s) ? s : toTeX(E(s)));
/** fórmula en línia: m("A'B") → $\overline{A}\cdot B$ */
export const m = (s) => '$' + tex(s) + '$';
/** igualtat en línia: eq("A+AB", "A") → $A+A\cdot B=A$ */
export const eq = (...xs) => '$' + xs.map(tex).join('=') + '$';
/** igualtat destacada (en un bloc a part) */
export const eqd = (...xs) => '$$' + xs.map(tex).join('=') + '$$';
/** dues identitats destacades, una al costat de l'altra (una llei i la seva dual) */
export const pair = (a, b) => '$$' + a.map(tex).join('=') + '\\qquad ' + b.map(tex).join('=') + '$$';

/* ---------- esquemes: interruptors en sèrie (AND) i en paral·lel (OR) ---------- */
const INK = '#1d2125', MUTED = '#6a737b';
const sw = (x, y, label) => `<circle cx="${x}" cy="${y}" r="3" fill="${INK}"/><circle cx="${x + 46}" cy="${y}" r="3" fill="${INK}"/><path d="M${x} ${y} L${x + 42} ${y - 18}"/><text x="${x + 18}" y="${y - 24}" font-size="15" font-weight="700" fill="${INK}" stroke="none">${label}</text>`;
const lamp = (x, y) => `<circle cx="${x}" cy="${y}" r="15"/><path d="M${x - 10} ${y - 10} L${x + 10} ${y + 10} M${x + 10} ${y - 10} L${x - 10} ${y + 10}"/><text x="${x - 5}" y="${y + 36}" font-size="15" font-weight="700" fill="${INK}" stroke="none">S</text>`;
const battery = (x, y) => `<path d="M${x} ${y - 14} V${y + 14} M${x + 8} ${y - 7} V${y + 7}" stroke-width="3"/>`;

export const SVG_AND = `<svg viewBox="0 0 440 130" width="440" role="img" aria-label="A · B"><g fill="none" stroke="${INK}" stroke-width="2">${battery(30, 60)}<path d="M38 60 H100"/>${sw(100, 60, 'A')}<path d="M146 60 H210"/>${sw(210, 60, 'B')}<path d="M256 60 H335"/>${lamp(350, 60)}<path d="M365 60 H410 V110 H30 V74"/></g><text x="300" y="125" font-size="12" fill="${MUTED}">S = A · B</text></svg>`;
export const SVG_OR = `<svg viewBox="0 0 440 150" width="440" role="img" aria-label="A + B"><g fill="none" stroke="${INK}" stroke-width="2">${battery(30, 75)}<path d="M38 75 H90 V40 H130 M90 75 V110 H130"/>${sw(130, 40, 'A')}${sw(130, 110, 'B')}<path d="M176 40 H230 V110 H176 M230 75 H335"/>${lamp(350, 75)}<path d="M365 75 H410 V140 H30 V89"/></g><text x="300" y="138" font-size="12" fill="${MUTED}">S = A + B</text></svg>`;
