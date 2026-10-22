/**
 * Ressaltat de paraules clau del pseudocodi, com a segments de text:
 * [{ t: 'txt' | 'kw' | 'muted', s }]. Les cadenes "…" i els asserts {…} van en gris.
 * Les línies se separen amb un segment { t: 'txt', s: '\n' }.
 */
const KW_RE = /(^|[^\wÀ-ÿ_/])(ENTORN|INICI_SEQÜÈNCIA|FI_SEQÜÈNCIA|FI_SEGONS_SIGUI|SEGONS_SIGUI|FI_SI|LLAVORS|ALTRAMENT|SI|FI_MENTRE|MENTRE|FER|REPETEIX|FINS_QUE|FI_DES_DE|DES_DE|FINS|Increment|Llegir|Escriure|NO|I|O)(?![\wÀ-ÿ_])/g;

function plain(p, out) {
  let last = 0;
  for (const m of p.matchAll(KW_RE)) {
    const at = m.index + m[1].length;
    if (at > last) out.push({ t: 'txt', s: p.slice(last, at) });
    out.push({ t: 'kw', s: m[2] });
    last = at + m[2].length;
  }
  if (last < p.length) out.push({ t: 'txt', s: p.slice(last) });
}

export function highlight(code) {
  const out = [];
  String(code).split('\n').forEach((line, li) => {
    if (li) out.push({ t: 'txt', s: '\n' });
    line.split(/("[^"]*"|\{[^}]*\})/).forEach((p, i) => {
      if (!p) return;
      if (i % 2) out.push({ t: 'muted', s: p });
      else plain(p, out);
    });
  });
  return out;
}
