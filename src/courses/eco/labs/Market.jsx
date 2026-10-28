import { useLang } from '../../../lib/i18n.jsx';
import { useSlot } from '../../_doc/store.js';
import { fmt, nice, num } from '../engine/num.js';
import { MK0, MK_PRESETS, marketCalc, marketModel, shiftStep } from '../engine/labs.js';
import { TM } from '../strings.js';
import { Plot } from './Plot.jsx';

const IDS = ['a', 'b', 'c', 'e'];
const withRaw = (mk) => ({ ...mk, raw: Object.fromEntries(IDS.map((k) => [k, fmt(mk[k])])) });
/** Preu i control lliscant que es mostren: sense equilibri vàlid es queden com estaven (com l'original). */
function withDisp(n, prev) {
  const m = marketModel(n);
  return { ...n, disp: m.r.ok ? { pv: fmt(m.p), rng: Math.round(m.p / m.pm * 1000) } : (prev && prev.disp) || { pv: '', rng: 500 } };
}

/** Laboratori «Mercat en viu»: equilibri, excedents, desplaçaments i preu fora d'equilibri. */
export default function Market() {
  const { ui } = useLang();
  const T = TM[ui] || TM.es;
  const [mk, setMk0] = useSlot('lab-mercat', () => withDisp(withRaw(MK0)));
  const setMk = (f) => setMk0((o) => withDisp(typeof f === 'function' ? f(o) : f, o));

  const onCoef = (k, v) => setMk((o) => {
    const raw = { ...o.raw, [k]: v }, n = { ...o, raw, p: null };
    IDS.forEach((id) => { const x = num(raw[id]); if (isFinite(x)) n[id] = x; });
    return n;
  });
  const onPrice = (v) => setMk((o) => ({ ...o, p: +v / 1000 * Math.max(marketCalc(o).Pmax, 0) }));
  const shift = (k) => setMk((o) => {
    const step = shiftStep(o.a), n = { ...o, p: null };
    if (k === 'a+') n.a += step; if (k === 'a-') n.a -= step;
    if (k === 'e+') n.e += step; if (k === 'e-') n.e -= step;
    return withRaw(n);
  });

  const m = marketModel(mk);
  let svg = null, res = null, msg;
  if (!m.r.ok) {
    msg = <div className="lab-msg warn" id="mk-msg">{T.bad}</div>;
  } else {
    const { r, pm, p } = m, { a, c, e } = mk;
    const P = new Plot(470, 320, [56, 22, 24, 40], [0, m.qmax], [0, m.ymax]);
    P.axes('q', 'P', nice(m.qmax / 1.08).slice(0, 7), [r.Pe].concat(r.Pmin > 0 ? [r.Pmin] : []).concat([pm]));
    P.poly([[0, pm], [0, r.Pe], [r.Qe, r.Pe]], 'g-fec', true);
    P.poly([[0, r.Pe], [0, m.pmn], [m.q0, m.pmn], [r.Qe, r.Pe]], 'g-fep', true);
    P.line(0, pm, a, 0, 'g-dem g-w3');
    const qtop = c * m.ymax + e; P.line(m.q0, m.pmn, qtop, m.ymax, 'g-sup g-w3');
    P.text(a, 0, 'D', 'g-s g-cdem g-b', 'end', -4, -8);
    P.text(qtop, m.ymax, 'O', 'g-s g-csup g-b', 'end', -6, 12);
    P.line(r.Qe, r.Pe, r.Qe, 0, 'g-gd'); P.line(r.Qe, r.Pe, 0, r.Pe, 'g-gd');
    P.dot(r.Qe, r.Pe, 'g-pt', 4.5); P.text(r.Qe, r.Pe, 'E', 'g-t g-b', 'start', 8, -6);
    if (Math.abs(p - r.Pe) > 1e-6) {
      P.line(0, p, Math.max(m.qd, m.qo, 0) * 1.05 + m.qmax * 0.02, p, 'g-red g-dash');
      if (m.qd >= 0) P.dot(m.qd, p, 'g-ptd', 4);
      if (m.qo >= 0) P.dot(m.qo, p, 'g-pto', 4);
    }
    svg = P.svg(T.t);
    const kv = [[T.pe, r.Pe], [T.qe, r.Qe], [T.pmax, r.Pmax], [T.pmin, r.Pmin], [T.ec, m.EC], [T.ep, m.EP], [T.bs, m.EC + m.EP]];
    res = kv.map(([k, v]) => <div key={k} className="lab-kv"><span>{k}</span><b>{fmt(v)}</b></div>);
    if (m.atEq) msg = <div className="lab-msg" id="mk-msg">{T.eqm}</div>;
    else {
      const dif = m.qo - m.qd, tr = Math.max(0, Math.min(m.qd, m.qo));
      msg = (
        <div className="lab-msg" id="mk-msg">
          {T.at + fmt(p) + ': Qd = ' + fmt(m.qd) + ', Qo = ' + fmt(m.qo) + '. Qo − Qd = ' + fmt(dif) + ' → '}
          <b>{(dif < 0 ? T.xd : T.xo) + ' ' + fmt(Math.abs(dif))}</b>
          {'; ' + T.trade + ' ' + fmt(tr) + ' ' + T.u + ' ' + T.and + ' ' + (dif < 0 ? T.up : T.down) + '.'}
        </div>
      );
    }
  }

  return (
    <div className="lab" data-lab="mercat">
      <p className="lab-k">{T.k}</p><p className="lab-t">{T.t}</p><p className="lab-h">{T.h}</p>
      <div className="lab-grid">
        <div className="lab-in">
          <p className="lab-sub">{T.fd}</p>
          {['a', 'b'].map((k) => <div key={k} className="lab-f"><label htmlFor={'mk-' + k}>{k}</label><input id={'mk-' + k} inputMode="decimal" value={mk.raw[k]} onChange={(e) => onCoef(k, e.target.value)} /></div>)}
          <p className="lab-sub">{T.fo}</p>
          {['c', 'e'].map((k) => <div key={k} className="lab-f"><label htmlFor={'mk-' + k}>{k}</label><input id={'mk-' + k} inputMode="decimal" value={mk.raw[k]} onChange={(e) => onCoef(k, e.target.value)} /></div>)}
          <div className="lab-rng">
            <label htmlFor="mk-p">{T.price + ': '}<b id="mk-pv">{mk.disp.pv}</b></label>
            <input type="range" id="mk-p" min="0" max="1000" step="1" value={mk.disp.rng} onChange={(e) => onPrice(e.target.value)} />
          </div>
          <div className="lab-btns"><button type="button" className="btn" id="mk-eq" onClick={() => setMk((o) => ({ ...o, p: null }))}>{T.eqp}</button></div>
          <p className="lab-sub">{T.sh}</p>
          <div className="lab-btns">
            {[['a+', T.dp], ['a-', T.dm], ['e+', T.op], ['e-', T.om]].map(([k, t]) => <button key={k} type="button" className="btn" data-sh={k} onClick={() => shift(k)}>{t}</button>)}
          </div>
          <p className="lab-sub">{T.pre}</p>
          <div className="lab-btns">
            {[['1', T.p1], ['2', T.p2]].map(([k, t]) => <button key={k} type="button" className="btn" data-pre={k} onClick={() => setMk(withRaw(MK_PRESETS[k]))}>{t}</button>)}
          </div>
        </div>
        <div className="lab-out">
          <div id="mk-svg">{svg}</div>
          <div className="lab-res" id="mk-res">{res}</div>
          {msg}
        </div>
      </div>
    </div>
  );
}
