/** Correcció dels exercicis de tipus seq (vegeu types.jsx). Pur, per poder-ho provar sense navegador. */
import { classifyWalk, walkEdges, weight } from './model.js';

/** Llegeix una successió de vèrtexs: «A B C», «A-B-C», «A,B,C», «ABC» (si tots els noms són d'una lletra). */
export function readSeq(s, V) {
  const t = String(s ?? '').toUpperCase().trim();
  if (!t) return [];
  const toks = t.split(/[^A-Z0-9α-ω]+/u).filter(Boolean);
  if (toks.length === 1 && V && V.every((v) => v.length === 1) && toks[0].length > 1) return toks[0].split('');
  return toks;
}

export function checkSeq(ex, value) {
  const G = ex.G, w = readSeq(value, G.V);
  if (w.length < 2 || w.some((v) => !G.V.includes(v))) return false;
  if (ex.want === 'exact') return w.join(' ') === ex.answer.join(' ');
  const c = classifyWalk(G, w);
  if (c === 'none') return false;
  if (ex.want === 'euler') return c.trail && w.length - 1 === G.E.length && (!ex.closed || c.closed) && (!ex.from || w[0] === ex.from);
  if (ex.want === 'hamilton') return c.closed && c.path && w.length - 1 === G.V.length;
  if (ex.want === 'min') {
    if (w[0] !== ex.from || w[w.length - 1] !== ex.to || !c.path) return false;
    const idx = walkEdges(G, w);
    // entre dos vèrtexs pot haver-hi costats de pesos diferents: es compta el més lleuger
    const len = w.slice(1).reduce((s, v, k) => s + Math.min(...G.E.filter((e) => (e[0] === w[k] && e[1] === v) || (!G.dir && e[0] === v && e[1] === w[k])).map(weight)), 0);
    return !!idx && len === ex.best;
  }
  return false;
}

