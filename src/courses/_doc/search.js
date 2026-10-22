/** Cerca a l'índex de seccions dels documents (mateix algorisme que el visor original). */

export function norm(s) {
  return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

/** Índex preparat: cada entrada amb el títol i el text normalitzats. */
export function prepare(index) {
  return index.map((e) => ({ e, nh: norm(e.h), nt: norm(e.t) }));
}

/**
 * Resultats per a la consulta v (com a màxim 24): [{ e, pos, snip }], o null si la
 * consulta és massa curta. snip: [{ t, m }] trossos de text, m = coincidència.
 */
export function search(prepared, v) {
  const n = norm(String(v).trim());
  if (n.length < 2) return null;
  const hits = [];
  prepared.forEach(({ e, nh, nt }) => {
    const ph = nh.indexOf(n), pt = nt.indexOf(n);
    if (ph < 0 && pt < 0) return;
    hits.push({ e, score: (ph >= 0 ? 0 : 1) * 100 + (ph >= 0 ? ph : pt), pos: pt });
  });
  hits.sort((a, b) => a.score - b.score).splice(24);
  return hits.map((h) => ({ e: h.e, snip: h.pos >= 0 ? snippet(h.e.t, h.pos, n) : null }));
}

function snippet(t, pos, n) {
  const s = Math.max(0, pos - 58), raw = t.slice(s, s + 190);
  const re = new RegExp('(' + n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
  const plain = norm(raw), out = [];
  let li = 0, m;
  while ((m = re.exec(plain)) !== null) {
    out.push({ t: raw.slice(li, m.index), m: false });
    out.push({ t: raw.slice(m.index, m.index + n.length), m: true });
    li = m.index + n.length;
    if (re.lastIndex <= m.index) re.lastIndex = m.index + 1;
  }
  out.push({ t: raw.slice(li), m: false });
  if (s > 0) out[0].t = '…' + out[0].t; // com l'original, «…» va amb el primer tros
  return out;
}
