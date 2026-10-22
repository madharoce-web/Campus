import { useLang } from '../../../lib/i18n.jsx';
import { useSlot } from '../../_doc/store.js';
import { fmt, nice, num } from '../engine/num.js';
import { FPP0, fppModel } from '../engine/labs.js';
import { TX } from '../strings.js';
import { Plot } from './Plot.jsx';

const LET = 'ABCDEFG';
const raw0 = () => ({
  x: FPP0.pts.map((p) => fmt(p[0])), y: FPP0.pts.map((p) => fmt(p[1])),
  tx: fmt(FPP0.test[0]), ty: fmt(FPP0.test[1]), tech: FPP0.tech,
});

/** Laboratori «La FPP, en viu»: taula editable, cost d'oportunitat i classificació d'un punt. */
export default function Fpp() {
  const { lang } = useLang();
  const T = TX[lang];
  const [s, setS] = useSlot('lab-fpp', raw0);
  const set = (patch) => setS((o) => ({ ...o, ...patch }));
  const setXY = (k, i, v) => setS((o) => ({ ...o, [k]: o[k].map((x, j) => (j === i ? v : x)) }));

  const pts = s.x.map((x, i) => [num(x), num(s.y[i])]);
  const test = [num(s.tx), num(s.ty)];
  const m = fppModel(pts, test, s.tech);

  let svg = null, msg;
  if (m.ok) {
    const P = new Plot(460, 300, [52, 24, 24, 40], [0, m.xmax], [0, m.ymax]);
    P.axes(T.X, T.Y, nice(m.xmax / 1.12).slice(0, 8), nice(m.ymax / 1.15).slice(0, 8));
    P.poly([[0, 0]].concat(pts).concat([[pts[pts.length - 1][0], 0]]), 'g-area', true);
    if (s.tech > 0) P.poly(m.np, 'g-acc g-w2 g-dash');
    P.poly(pts, 'g-acc g-w3');
    pts.forEach((p, i) => { P.dot(p[0], p[1], 'g-pt', 3.8); P.text(p[0], p[1], LET[i], 'g-t g-b', 'start', 6, -6); });
    if (s.tech > 0) P.text(m.np[m.np.length - 1][0], m.np[m.np.length - 1][1], T.newf, 'g-s g-cacc', 'end', -4, -8);
    if (m.hasPt) {
      P.dot(test[0], test[1], m.cls, 5.5);
      P.text(test[0], test[1], '(' + fmt(test[0]) + ', ' + fmt(test[1]) + ')', 'g-s g-b', 'start', 8, 14);
    }
    svg = P.svg(T.t);
    msg = (
      <div className="lab-msg" id="fpp-msg">
        {m.label && <b>{'(' + fmt(test[0]) + ', ' + fmt(test[1]) + ')'}</b>}
        {(m.label ? ': ' + T[m.label] + '. ' : '') + T[m.shape]}
      </div>
    );
  } else {
    msg = <div className="lab-msg warn" id="fpp-msg">{T.bad}</div>;
  }

  return (
    <div className="lab" data-lab="fpp">
      <p className="lab-k">{T.k}</p><p className="lab-t">{T.t}</p><p className="lab-h">{T.h}</p>
      <div className="lab-grid">
        <div className="lab-in">
          <table className="lab-tbl">
            <thead><tr><th></th><th>{T.X}</th><th>{T.Y}</th></tr></thead>
            <tbody>
              {s.x.map((x, i) => (
                <tr key={i}>
                  <td><b>{LET[i]}</b></td>
                  <td><input id={'fpp-x' + i} inputMode="decimal" aria-label={'X ' + LET[i]} value={x} onChange={(e) => setXY('x', i, e.target.value)} /></td>
                  <td><input id={'fpp-y' + i} inputMode="decimal" aria-label={'Y ' + LET[i]} value={s.y[i]} onChange={(e) => setXY('y', i, e.target.value)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="lab-sub">{T.pt}</p>
          <div className="lab-f"><label htmlFor="fpp-tx">X</label><input id="fpp-tx" inputMode="decimal" value={s.tx} onChange={(e) => set({ tx: e.target.value })} /></div>
          <div className="lab-f"><label htmlFor="fpp-ty">Y</label><input id="fpp-ty" inputMode="decimal" value={s.ty} onChange={(e) => set({ ty: e.target.value })} /></div>
          <div className="lab-rng">
            <label htmlFor="fpp-tech">{T.tech + ': '}<b id="fpp-tv">{'+' + s.tech + ' %'}</b></label>
            <input type="range" id="fpp-tech" min="0" max="50" step="5" value={s.tech} onChange={(e) => set({ tech: +e.target.value })} />
          </div>
          <div className="lab-btns"><button type="button" className="btn" id="fpp-reset" onClick={() => setS(raw0())}>{T.reset}</button></div>
        </div>
        <div className="lab-out">
          <div id="fpp-svg">{svg}</div>
          <p className="lab-sub">{T.co}</p>
          <ul className="lab-steps" id="fpp-co">
            {m.ok && m.costs.map((c) => (
              <li key={c.j}>
                <span className="f"><span className="n">{LET[c.j] + ' → ' + LET[c.j + 1]}</span>{' · ΔY = ' + fmt(pts[c.j][1]) + ' − ' + fmt(pts[c.j + 1][1]) + ' = ' + fmt(c.dy) + '; ΔX = ' + fmt(c.dx)}</span>
                <span className="v">{fmt(c.c, 3) + ' ' + T.per}</span>
              </li>
            ))}
          </ul>
          {msg}
        </div>
      </div>
    </div>
  );
}
