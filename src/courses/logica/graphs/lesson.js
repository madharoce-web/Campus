/**
 * Ajudes per escriure les lliçons de grafs (kit/units/gr*.js): blocs de la plantilla amb els textos en
 * [ca, es, en] i figures fetes amb graphSvg. D = mode directe, X = mode explicat.
 */
import { graphSvg, gallery } from './svg.js';

export const D = 'direct', X = 'explained';
export const L3 = (ca, es, en) => [ca, es, en];
export const p = (ca, es, en, mode) => ({ t: 'p', x: [ca, es, en], mode });
export const h = (ca, es, en, mode) => ({ t: 'h', x: [ca, es, en], mode });
export const box = (t, title, x, mode) => ({ t, title, x, mode });
export const boxi = (t, title, items, mode) => ({ t, title, items, mode });
export const list = (items, mode, ordered) => ({ t: 'list', items, mode, ordered });
export const table = (head, rows, mode, caption) => ({ t: 'table', head, rows, mode, caption });
export const lab = (id, props, mode = X) => ({ t: 'lab', id, props, mode });
export const check = (ex) => ({ t: 'check', ex });
export const ref = (r, seed) => ({ t: 'check', ex: seed == null ? { ref: r } : { ref: r, seed } });
export const steps = (s, mode, reveal = true) => ({ t: 'steps', steps: s, mode, reveal });
export const example = (title, q, s, result, mode) => ({ t: 'example', title, q, steps: s, result, mode });
export const hr = () => ({ t: 'hr' });
/** Figura d'un graf: { G, pos } o G, opcions de graphSvg i peu [ca, es, en]. */
export const fig = (g, o = {}, caption, mode) => {
  const G = g.G || g, pos = g.pos || o.pos;
  return { t: 'diagram', svg: graphSvg(G, { ...o, pos }), caption, mode };
};
/** Diverses figures en columnes, cadascuna amb el seu peu. */
export const figs = (items, mode) => ({ t: 'cols', mode, cols: items.map(([g, o, cap]) => [fig(g, o, cap)]) });
export const galleryFig = (items, caption, mode, o) => ({ t: 'diagram', svg: gallery(items, o), caption, mode, wide: true });
export const ext = L3('Ampliació (no surt a les diapositives)', 'Ampliación (no sale en las diapositivas)', 'Extension (not in the slides)');
