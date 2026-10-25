/**
 * Uneix el contingut català i castellà (mateixa estructura, traduïda) en un sol valor:
 * els textos que canvien es tornen parelles [ca, es]; si l'estructura no coincideix,
 * el bloc es desa per idioma ({ t: 'lang', ca: […], es: […] }).
 */
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const MISMATCH = (ca, es) => ({ __mismatch: true, ca, es });
const bad = (v) => v && typeof v === 'object' && v.__mismatch;

export function zipValue(a, b) {
  if (same(a, b)) return a;
  if (typeof a === 'string' && typeof b === 'string') return [a, b];
  if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
    const o = a.map((x, i) => zipValue(x, b[i]));
    return o.some(bad) ? MISMATCH(a, b) : o;
  }
  if (a && b && typeof a === 'object' && typeof b === 'object' && !Array.isArray(a) && !Array.isArray(b)) {
    const ka = Object.keys(a).sort(), kb = Object.keys(b).sort();
    if (same(ka, kb) && (a.t === undefined || a.t === b.t)) {
      const o = {};
      for (const k of ka) o[k] = k === 't' || k === 'id' || k === 'type' || k === 'answer' ? a[k] : zipValue(a[k], b[k]);
      return Object.values(o).some(bad) ? MISMATCH(a, b) : o;
    }
  }
  return MISMATCH(a, b);
}

/** Uneix dues llistes de blocs; els que no casen queden com a blocs per idioma. */
export function zipBlocks(ca, es) {
  if (ca.length !== es.length || ca.some((b, i) => b.t !== es[i].t)) return [{ t: 'lang', ca, es }];
  return ca.map((b, i) => {
    const z = zipValue(b, es[i]);
    return z && z.__mismatch ? { t: 'lang', ca: [b], es: [es[i]] } : clean(z);
  });
}

/** Treu els camps undefined (perquè el JSON sigui net). */
export function clean(v) {
  if (Array.isArray(v)) return v.map(clean);
  if (v && typeof v === 'object') {
    const o = {};
    for (const [k, x] of Object.entries(v)) if (x !== undefined) o[k] = clean(x);
    return o;
  }
  return v;
}

/** Escriu un mòdul JS amb un valor (llegible: una clau per línia als nivells alts). */
export function moduleSource(value, header = '') {
  return (header ? header.trim() + '\n' : '') + 'export default ' + JSON.stringify(value, null, 1) + ';\n';
}
