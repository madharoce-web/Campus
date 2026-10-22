/** Format i lectura de nombres a la manera catalana (coma decimal, punt de milers). */

export function fmt(v, dec) {
  if (!isFinite(v)) return '—';
  dec = dec == null ? 2 : dec;
  let r = Math.round(v * Math.pow(10, dec)) / Math.pow(10, dec);
  const neg = r < 0; r = Math.abs(r);
  const s = r.toFixed(dec).split('.');
  const ip = s[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const dp = s[1] ? s[1].replace(/0+$/, '') : '';
  return (neg ? '−' : '') + ip + (dp ? ',' + dp : '');
}

/** Valor d'un camp dels laboratoris («1.480,5», «−20», «3,4»). */
export function num(v) {
  if (typeof v === 'number') return v;
  let s = String(v).trim().replace(/\s/g, '').replace(/[−–]/g, '-');
  if (s.indexOf(',') >= 0) s = s.replace(/\./g, '').replace(',', '.');
  return parseFloat(s);
}

/** Lectures possibles d'una resposta de la pràctica («1.480» pot ser 1480 o 1,48). */
export function parses(s) {
  s = String(s).trim().replace(/\s/g, '').replace(/[−–]/g, '-').replace(/[%€]|M€/g, '');
  if (!s) return [];
  const out = [];
  if (s.indexOf(',') >= 0 && s.indexOf('.') >= 0) out.push(s.replace(/\./g, '').replace(',', '.'));
  else if (s.indexOf(',') >= 0) out.push(s.replace(',', '.'));
  else if (/^-?\d{1,3}(\.\d{3})+$/.test(s)) { out.push(s.replace(/\./g, '')); out.push(s); }
  else out.push(s);
  return out.map(parseFloat).filter((x) => isFinite(x));
}

/** Marques «rodones» per als eixos d'un gràfic fins a max. */
export function nice(max) {
  const e = Math.pow(10, Math.floor(Math.log10(max))), m = max / e;
  const st = m <= 2 ? 0.5 : m <= 5 ? 1 : 2;
  const out = [], step = st * e;
  for (let v = step; v <= max * 1.0001; v += step) out.push(+v.toFixed(6));
  return out;
}
