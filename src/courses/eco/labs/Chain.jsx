import { useLang } from '../../../lib/i18n.jsx';
import { useSlot } from '../../_doc/store.js';
import { fmt, num } from '../engine/num.js';
import { CH0, CH_G1, CH_G2, chain } from '../engine/labs.js';
import { TC } from '../strings.js';

const KEYS = CH_G1.concat(CH_G2);

/** Text amb subíndexs: les cadenes seguides s'ajunten en un sol node (com l'original). */
function Parts({ p }) {
  const out = [];
  p.forEach((x) => {
    if (typeof x === 'string' && typeof out[out.length - 1] === 'string') out[out.length - 1] += x;
    else out.push(x);
  });
  return out.map((x, i) => (typeof x === 'string' ? x : <sub key={i}>{x.s}</sub>));
}
const init = () => ({ v: { ...CH0 }, raw: Object.fromEntries(KEYS.map((k) => [k, fmt(CH0[k])])) });

/** Calculadora de la cadena de macromagnituds (PIB, PNB, RN, RPD, estalvi i saldo públic). */
export default function Chain() {
  const { lang } = useLang();
  const T = TC[lang], Lc = lang === 'ca';
  const [s, setS] = useSlot('lab-cadena', init);
  const onInput = (k, val) => setS((o) => {
    const raw = { ...o.raw, [k]: val }, v = { ...o.v };
    KEYS.forEach((id) => { const x = num(raw[id]); if (isFinite(x)) v[id] = x; });
    return { v, raw };
  });

  const v = s.v, c = chain(v);
  // cada fila: [magnitud, fórmula, valor]; { s } és un subíndex
  const cf = { s: 'cf' }, pm = { s: 'pm' }, d = { s: 'd' };
  const rows = [
    [['EBE'], [(Lc ? 'lloguers + interessos + beneficis' : 'alquileres + intereses + beneficios') + ' = ' + fmt(v.llo) + ' + ' + fmt(v.int) + ' + ' + fmt(v.ben)], fmt(c.EBE)],
    [['PIB', cf], [(Lc ? 'salaris' : 'salarios') + ' + EBE = ' + fmt(v.sal) + ' + ' + fmt(c.EBE)], fmt(c.PIBcf)],
    [['PIB', pm], ['PIB', cf, ' + ' + (Lc ? 'imp. indirectes − subvencions' : 'imp. indirectos − subvenciones') + ' = ' + fmt(c.PIBcf) + ' + ' + fmt(v.ti) + ' − ' + fmt(v.sub)], fmt(c.PIBpm)],
    [['PNB', cf], ['PIB', cf, ' + rfne − rfen = ' + fmt(c.PIBcf) + ' + ' + fmt(v.rfne) + ' − ' + fmt(v.rfen)], fmt(c.PNBcf)],
    [['PNB', pm], ['PIB', pm, ' + rfne − rfen = ' + fmt(c.PIBpm) + ' + ' + fmt(v.rfne) + ' − ' + fmt(v.rfen)], fmt(c.PNBpm)],
    [['RN = PNN', cf], ['PNB', cf, ' − ' + (Lc ? 'amortitzacions' : 'amortizaciones') + ' = ' + fmt(c.PNBcf) + ' − ' + fmt(v.am)], fmt(c.RN)],
    [[Lc ? 'Renda per càpita' : 'Renta per cápita'], ['RN / ' + (Lc ? 'habitants' : 'habitantes') + ' = ' + fmt(c.RN * 1e6, 0) + ' / ' + fmt(v.hab, 0)], fmt(c.pc, 2) + ' ' + T.pc],
    [['RPD'], ['RN − T', d, ' − SS + Tr = ' + fmt(c.RN) + ' − ' + fmt(v.td) + ' − ' + fmt(v.ss) + ' + ' + fmt(v.tr)], fmt(c.RPD)],
    [['S'], ['RPD − C = ' + fmt(c.RPD) + ' − ' + fmt(v.c)], fmt(c.S)],
    [['T'], [(Lc ? 'imp. directes + imp. indirectes' : 'imp. directos + imp. indirectos') + ' = ' + fmt(v.td) + ' + ' + fmt(v.ti)], fmt(c.Tt)],
    [['SP'], ['T − D − Tr − Subv = ' + fmt(c.Tt) + ' − ' + fmt(v.d) + ' − ' + fmt(v.tr) + ' − ' + fmt(v.sub)], fmt(c.SP) + ' (' + (c.SP > 0 ? T.sup : c.SP < 0 ? T.def : T.eqb) + ')'],
  ];
  const field = (k) => (
    <div key={k} className="lab-f"><label htmlFor={'ch-' + k}>{T.f[k]}</label><input id={'ch-' + k} inputMode="decimal" value={s.raw[k]} onChange={(e) => onInput(k, e.target.value)} /></div>
  );

  return (
    <div className="lab" data-lab="cadena">
      <p className="lab-k">{T.k}</p><p className="lab-t">{T.t}</p><p className="lab-h">{T.h}</p>
      <div className="lab-grid">
        <div className="lab-in">
          <p className="lab-sub">{T.g1}</p>{CH_G1.map(field)}
          <p className="lab-sub">{T.g2}</p>{CH_G2.map(field)}
          <div className="lab-btns"><button type="button" className="btn" id="ch-reset" onClick={() => setS(init())}>{T.reset}</button></div>
        </div>
        <div className="lab-out">
          <ul className="lab-steps" id="ch-steps">
            {rows.map((r, i) => <li key={i}><span className="f"><span className="n"><Parts p={r[0]} /></span><Parts p={[' = '].concat(r[1])} /></span><span className="v">{r[2]}</span></li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
