/**
 * Text amb èmfasi que retornen els mòduls de lògica pura: una cadena o una llista de
 * trossos, on { b: '…' } va en negreta i { br: 1 } és un salt de línia.
 */
export default function Txt({ v }) {
  if (v == null) return null;
  if (!Array.isArray(v)) return v;
  return v.map((x, i) => (typeof x === 'string' ? x : x.br ? <br key={i} /> : <b key={i}>{x.b}</b>));
}
