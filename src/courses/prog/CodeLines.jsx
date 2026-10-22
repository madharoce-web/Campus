/** Línies numerades d'un bloc de codi; cur i err marquen una línia (pas actual o error). */
export default function CodeLines({ lines, cur = 0, err = 0, markRef }) {
  return lines.map((parts, i) => {
    const n = i + 1;
    const mark = n === cur || n === err;
    return (
      <span key={i} className={'l' + (n === cur ? ' cur' : '') + (n === err ? ' err' : '')} data-n={n} ref={mark ? markRef : undefined}>
        {parts.length ? parts.map(([c, t], j) => (c ? <span key={j} className={c}>{t}</span> : t)) : ' '}
      </span>
    );
  });
}
