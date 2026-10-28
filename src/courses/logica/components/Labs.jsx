import { useLang } from '../../../lib/i18n.jsx';
import { useSlot } from '../../_doc/store.js';
import Txt from '../../_doc/Txt.jsx';
import { Q0, QF, Q_PRESETS, R0, RF, R_NAMES, qEval, qTagNote, qWhy, rEval, rGraph, rPreset, vennPlaces } from '../engine/quantificadors.js';

const Pill = ({ v }) => <span className={'lb-pill ' + (v ? 't' : 'f')}>{v ? 'T' : 'F'}</span>;

/** Laboratori: ∀ i ∃ en un món de cinc persones (taula E/T, diagrama de Venn i fórmules). */
export function QuantLab() {
  const { lang, L } = useLang();
  const [Q, setQ] = useSlot('lab-quant', Q0);
  const sel = QF[Q.sel], rs = qEval(Q.people, sel);
  const toggle = (i, k) => setQ((o) => ({ ...o, people: o.people.map((p, j) => (j === i ? { ...p, [k]: !p[k] } : p)) }));
  const preset = (k) => setQ((o) => ({ ...o, people: o.people.map((p, i) => ({ ...p, E: !!Q_PRESETS[k][i][0], T: !!Q_PRESETS[k][i][1] })) }));

  return (
    <div className="lab" data-lab="quant">
      <p className="lb-title">{L('Laboratori: ∀ i ∃ en un món de cinc persones', 'Laboratorio: ∀ y ∃ en un mundo de cinco personas', 'Lab: ∀ and ∃ in a world of five people')}</p>
      <p className="lb-help">{L('Decideix qui és estudiant (E) i qui treballa (T). Tria una fórmula: el diagrama pinta de verd els que fan certa la part de dins i de vermell els que la fan falsa.', 'Decide quién es estudiante (E) y quién trabaja (T). Elige una fórmula: el diagrama pinta de verde a quien hace cierta la parte de dentro y de rojo a quien la hace falsa.', 'Decide who is a student (E) and who works (T). Choose a formula: the diagram colours green whoever makes the inner part true and red whoever makes it false.')}</p>
      <div className="lb-row">
        <div className="lb-people">
          <div className="lb-ph"><span></span><span>E</span><span>T</span></div>
          {Q.people.map((p, i) => (
            <div key={p.n} className="lb-pr">
              <span className="lb-name">{p.n}</span>
              {['E', 'T'].map((k) => (
                <button key={k} type="button" className={'lb-tg' + (p[k] ? ' on' : '')} data-i={i} data-k={k} aria-pressed={p[k]} aria-label={p.n + ' ' + k} onClick={() => toggle(i, k)}>
                  {p[k] ? 'T' : 'F'}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="lb-venn">
          <svg viewBox="0 0 380 222" role="img" aria-label={L('Diagrama dels conjunts E i T amb les cinc persones', 'Diagrama de los conjuntos E y T con las cinco personas', 'Diagram of the sets E and T with the five people')}>
            <rect x="2" y="2" width="376" height="218" rx="14" className="vz-dom" />
            <circle cx="140" cy="112" r="84" className="vz-setI" /><circle cx="240" cy="112" r="84" className="vz-setT" />
            <text x="64" y="40" className="vz-lab vz-tI" textAnchor="middle">E</text><text x="316" y="40" className="vz-lab vz-tT" textAnchor="middle">T</text>
            {vennPlaces(Q.people).map(({ i, x, y }) => (
              <g key={i}>
                <circle cx={x} cy={y} r="7" className={rs.vals[i] ? 'lb-dotT' : 'lb-dotF'} />
                <text x={x + 11} y={y + 4} className="vz-sm" textAnchor="start">{Q.people[i].n}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
      <div className="lb-ctrl">
        <span className="lb-lbl">{L('Notació', 'Notación', 'Notation')}</span>
        <div className="lb-seg" role="group">
          <button type="button" data-n="std" aria-pressed={Q.notation === 'std'} onClick={() => setQ((o) => ({ ...o, notation: 'std' }))}>{L('Estàndard', 'Estándar', 'Standard')}</button>
          <button type="button" data-n="col" aria-pressed={Q.notation === 'col'} onClick={() => setQ((o) => ({ ...o, notation: 'col' }))}>{L('Dos punts', 'Dos puntos', 'Colon')}</button>
        </div>
        <span className="lb-lbl">{L('Exemples', 'Ejemplos', 'Examples')}</span>
        <div className="lb-seg" role="group">
          {[L('Inicial', 'Inicial', 'Initial'), L('Ningú estudia', 'Nadie estudia', 'Nobody studies'), L('Tots estudien', 'Todos estudian', 'Everybody studies')].map((t, k) => (
            <button key={k} type="button" data-p={k} onClick={() => preset(k)}>{t}</button>
          ))}
        </div>
      </div>
      <div className="lb-forms">
        {QF.map((f, i) => {
          const r = qEval(Q.people, f), note = qTagNote(f, L);
          return (
            <button key={i} type="button" className={'lb-f' + (i === Q.sel ? ' sel' : '') + (f.tag && f.tag.indexOf('trap') === 0 ? ' trap' : '')} data-f={i}
              onClick={() => setQ((o) => ({ ...o, sel: i }))}>
              <span className="lb-fx">{Q.notation === 'std' ? f.std : f.col}</span>
              <span className="lb-fr">{'«' + (lang === 'es' ? f.es : f.ca) + '»'}</span>
              <span className="lb-fv">
                <Pill v={r.v} />
                <span className="lb-cells" aria-hidden="true">
                  <span className="lb-op">{f.q === 'A' ? '∧' : '∨'}</span>
                  {r.vals.map((v, j) => <span key={j} className={'lb-c ' + (v ? 't' : 'f')} title={Q.people[j].n}>{Q.people[j].n.charAt(0)}</span>)}
                </span>
              </span>
              {i === Q.sel && <span className="lb-why"><Txt v={qWhy(Q.people, f, r, L)} />{note && <><br /><Txt v={note} /></>}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Laboratori: l'ordre dels quantificadors amb la relació «x admira y» (graella, graf i fórmules). */
export function OrderLab() {
  const { lang, L } = useLang();
  const [R, setR] = useSlot('lab-order', R0);
  const cur = rEval(R.m, RF[R.sel].k, L);
  const g = rGraph(R.m, cur.v ? cur.hl : []);
  const flip = (i, j) => setR((o) => ({ ...o, m: o.m.map((row, a) => (a === i ? row.map((x, b) => (b === j ? (x ? 0 : 1) : x)) : row)) }));

  return (
    <div className="lab" data-lab="order">
      <p className="lb-title">{L("Laboratori: l'ordre dels quantificadors", 'Laboratorio: el orden de los cuantificadores', 'Lab: the order of quantifiers')}</p>
      <p className="lb-help">{L('A(x, y) vol dir «x admira y». Activa o treu fletxes a la graella (fila = qui admira, columna = qui és admirat) i mira com canvien les fórmules. Toca una fórmula per veure al graf les fletxes que la fan certa.', 'A(x, y) significa «x admira a y». Activa o quita flechas en la cuadrícula (fila = quien admira, columna = quien es admirado) y mira cómo cambian las fórmulas. Toca una fórmula para ver en el grafo las flechas que la hacen cierta.', 'A(x, y) means “x admires y”. Turn arrows on or off in the grid (row = who admires, column = who is admired) and see how the formulas change. Tap a formula to see in the graph the arrows that make it true.')}</p>
      <div className="lb-row">
        <div className="lb-grid">
          <table className="lb-mx">
            <thead><tr><th scope="col"><span className="lb-xy">x \ y</span></th>{R_NAMES.map((n) => <th key={n} scope="col">{n.charAt(0)}</th>)}</tr></thead>
            <tbody>
              {R_NAMES.map((n, i) => (
                <tr key={n}>
                  <th scope="row">{n}</th>
                  {R_NAMES.map((m, j) => (
                    <td key={m}>
                      <button type="button" className={'lb-tg' + (R.m[i][j] ? ' on' : '')} data-i={i} data-j={j} aria-pressed={!!R.m[i][j]} aria-label={n + ' → ' + m} onClick={() => flip(i, j)}>
                        {R.m[i][j] ? 'T' : 'F'}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="lb-graph">
          <svg viewBox="0 0 340 280" role="img" aria-label={L('Graf de la relació A(x, y): x admira y', 'Grafo de la relación A(x, y): x admira a y', 'Graph of the relation A(x, y): x admires y')}>
            <defs>
              <marker id="lbm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path className="vz-ah" d="M0 0 L10 5 L0 10 z" /></marker>
              <marker id="lbmA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path className="vz-ahA" d="M0 0 L10 5 L0 10 z" /></marker>
            </defs>
            {g.edges.map((e) => <path key={e.i + '-' + e.j} d={e.d} className={e.h ? 'vz-lnA lb-thick' : 'vz-ln'} markerEnd={'url(#' + (e.h ? 'lbmA' : 'lbm') + ')'} />)}
            {g.nodes.map((p) => (
              <g key={p.i}>
                <circle cx={p.x} cy={p.y} r="9" className="vz-dot" />
                <text x={p.x} y={p.ty} className="vz-t vz-b" textAnchor="middle">{R_NAMES[p.i]}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
      <div className="lb-ctrl">
        <span className="lb-lbl">{L('Exemples', 'Ejemplos', 'Examples')}</span>
        <div className="lb-seg" role="group">
          {[L('Cercle', 'Círculo', 'Circle'), L('Un ídol', 'Un ídolo', 'An idol'), L('Una admiradora', 'Una admiradora', 'An admirer')].map((t, k) => (
            <button key={k} type="button" data-p={k} onClick={() => setR((o) => ({ ...o, m: rPreset(k) }))}>{t}</button>
          ))}
        </div>
      </div>
      <div className="lb-forms">
        {RF.map((f, i) => {
          const r = i === R.sel ? cur : rEval(R.m, f.k, L);
          return (
            <button key={i} type="button" className={'lb-f' + (i === R.sel ? ' sel' : '')} data-f={i} onClick={() => setR((o) => ({ ...o, sel: i }))}>
              <span className="lb-fx">{f.f}</span><span className="lb-fr">{'«' + (lang === 'es' ? f.es : f.ca) + '»'}</span>
              <span className="lb-fv"><Pill v={r.v} /></span>
              {i === R.sel && <span className="lb-why"><Txt v={r.txt} /></span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
