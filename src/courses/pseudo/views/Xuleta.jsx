import { useLang } from '../../../lib/i18n.jsx';
import { XU } from '../data/xuleta.js';
import { Head, Ps, useTr } from '../ui.jsx';

/** Xuleta: notació exacta dels temes 2.1, 2.2 i 2.3 (les cinc primeres seccions, obertes). */
export default function Xuleta() {
  const { L } = useLang();
  const tr = useTr();
  return (
    <div className="stack">
      <Head eb={'CP1 · ' + L('dilluns 5, 9.30 h, aula 3.1', 'lunes 5, 9.30 h, aula 3.1')} t={L('Xuleta de pseudocodi', 'Chuleta de pseudocódigo')}
        lead={L('Notació exacta dels temes 2.1, 2.2 i 2.3 del curs.', 'Notación exacta de los temas 2.1, 2.2 y 2.3 del curso.')} />
      {XU.map((sec, i) => (
        <details key={i} className="acc" open={i < 5}>
          <summary>{tr(sec.t)}</summary>
          <div className="inner">
            {sec.b.map((b, j) => (
              <Block key={j} b={b} tr={tr} />
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}

function Block({ b, tr }) {
  return (
    <>
      {b.p && <p className="small">{tr(b.p)}</p>}
      {b.c && <Ps code={b.c} />}
      {b.n && <div className="note">{tr(b.n)}</div>}
      {b.d && <div className="def"><b>{tr(b.d[0])}</b><div className="small p-mt3">{tr(b.d[1])}</div></div>}
      {b.tb && (
        <div className="tablewrap"><table>
          <thead><tr>{b.tb.map((h, k) => <th key={k}>{tr(h)}</th>)}</tr></thead>
          <tbody>{b.rows.map((r, k) => <tr key={k}>{r.map((c, m) => <td key={m} className="mono">{tr(c)}</td>)}</tr>)}</tbody>
        </table></div>
      )}
    </>
  );
}
