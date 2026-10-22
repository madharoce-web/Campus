import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../../lib/i18n.jsx';
import { EX, LEVELS, TARGET, exName, isSolved, levelNames } from '../lib/data.js';
import { setS, useS } from '../lib/store.js';
import { fmtT, grade2, mmss } from '../lib/format.js';
import { Page } from '../components/Layout.jsx';
import { DrawerProgress } from './ListView.jsx';

/** El meu progrés: resum per nivell i darrers intents correctes. */
export default function ProgressView() {
  const { L, lang } = useLang();
  const S = useS();
  const [confirm, setConfirm] = useState(false);
  const LVN = levelNames(L);
  const solved = EX.filter((x) => isSolved(S.prog, x.id));
  const byLv = LEVELS.map((l) => {
    const all = EX.filter((x) => x.lv === l), s = all.filter((x) => isSolved(S.prog, x.id)), times = s.map((x) => S.prog[x.id].best).filter((t) => t != null);
    return { l, n: all.length, s: s.length, avg: times.length ? times.reduce((a, b) => a + b, 0) / times.length : null, under: times.filter((t) => t <= TARGET[l] * 60).length };
  });
  const hist = [];
  EX.forEach((x) => ((S.prog[x.id] || {}).hist || []).forEach((hh) => hist.push({ x, ...hh })));
  hist.sort((a, b) => b.d - a.d);
  const fmtD = (d) => new Date(d).toLocaleString(lang === 'ca' ? 'ca-ES' : 'es-ES', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

  return (
    <Page crumbs={[[L('C++ a contrarellotge', 'C++ a contrarreloj'), 'list'], [L('El meu progrés', 'Mi progreso')]]} h1={L('El meu progrés', 'Mi progreso')} tab="prog" drawer={<DrawerProgress />}>
      <p>{solved.length + L(' de ', ' de ') + EX.length + L(' preguntes resoltes. El millor temps només compta si la resols dins del límit i sense mirar la pista ni la solució.', ' preguntas resueltas. El mejor tiempo solo cuenta si la resuelves dentro del límite y sin mirar la pista ni la solución.')}</p>
      <div className="tblwrap">
        <table className="generaltable">
          <thead><tr><th>{L('Nivell', 'Nivel')}</th><th className="num">{L('Resoltes', 'Resueltas')}</th><th className="num">{L('Temps mitjà', 'Tiempo medio')}</th><th className="num">{L('Objectiu', 'Objetivo')}</th><th className="num">{L('Dins l\'objectiu', 'Dentro del objetivo')}</th></tr></thead>
          <tbody>
            {byLv.map((b) => (
              <tr key={b.l}>
                <td><span className={'badge-c lv' + b.l}>{LVN[b.l]}</span></td>
                <td className="num">{b.s}/{b.n}</td>
                <td className="num">{fmtT(b.avg)}</td>
                <td className="num">{TARGET[b.l]} min</td>
                <td className="num">{b.under}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="h3x mt24">{L('Darrers intents correctes', 'Últimos intentos correctos')}</h3>
      <div className="tblwrap">
        <table className="generaltable">
          <thead><tr><th>{L('Data', 'Fecha')}</th><th>{L('Pregunta', 'Pregunta')}</th><th className="num">{L('Temps', 'Tiempo')}</th><th className="num">{L('Comprov.', 'Comprob.')}</th><th className="num">{L('Punts', 'Puntos')}</th></tr></thead>
          <tbody>
            {hist.length ? hist.slice(0, 40).map((hh, i) => (
              <tr key={i}>
                <td className="small">{fmtD(hh.d)}</td>
                <td>
                  <Link to={'/cpp/' + hh.x.id}>{exName(hh.x)}</Link> <span className={'badge-c lv' + hh.x.lv}>{LVN[hh.x.lv]}</span>
                  {hh.help && <> <span className="badge-c">{L('amb ajuda', 'con ayuda')}</span></>}
                </td>
                <td className="num">{mmss(hh.t) + (hh.over ? ' ⚑' : '')}</td>
                <td className="num">{hh.c}</td>
                <td className="num">{grade2(hh.g)}</td>
              </tr>
            )) : <tr><td colSpan={5} className="muted">{L('Encara no has resolt cap pregunta.', 'Aún no has resuelto ninguna pregunta.')}</td></tr>}
          </tbody>
        </table>
      </div>
      <div className="btn-row mt16" id="resetzone">
        {confirm ? (
          <span className="confirm">{L('S\'esborraran els temps, el codi i els simulacres.', 'Se borrarán los tiempos, el código y los simulacros.')}
            <button type="button" className="btn btn-primary btn-sm" id="ra-y" onClick={() => { setS((x) => ({ ...x, prog: {}, sess: {}, exam: null }), true); setConfirm(false); }}>{L('Esborra', 'Borra')}</button>
            <button type="button" className="btn btn-secondary btn-sm" id="ra-n" onClick={() => setConfirm(false)}>{L('Cancel·la', 'Cancela')}</button>
          </span>
        ) : <button type="button" className="btn btn-secondary btn-sm" id="resetAll" onClick={() => setConfirm(true)}>{L('Esborra tot el progrés', 'Borra todo el progreso')}</button>}
      </div>
    </Page>
  );
}
