import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { exStats, useCppProgress } from './state.js';
import { I } from './icons.jsx';

/** Exercicis de la setmana amb compilador i proves (enllacen amb el C++ a contrarellotge). */
export default function ExList({ wk }) {
  const { L } = useLang();
  const S = useCppProgress();
  const { n, done, list } = exStats(S, wk);
  const LVN = { 1: L('Fàcil', 'Fácil'), 2: L('Mitjà', 'Medio'), 3: L('Difícil', 'Difícil'), 4: L('Extrem', 'Extremo') };
  return (
    <div className="ip-exs" data-wk={wk}>
      <div className="ip-exsh">
        <b>{L('Exercicis de la setmana amb compilador i proves', 'Ejercicios de la semana con compilador y pruebas')}</b>
        <span className={'ip-badge' + (done === n && n ? ' done' : '')}>{done + ' / ' + n + L(' resolts', ' resueltos')}</span>
        <Link className="ip-btn out sm" to={'/cpp/s' + wk}>{I.ext}{L('Obre la llista al C++', 'Abre la lista en el C++')}</Link>
      </div>
      {list.map((x) => {
        const p = S.prog && S.prog[x.id], ss = S.sess && S.sess[x.id];
        return (
          <div className="ip-exrow" key={x.id}>
            <span className="ip-actico quiz">{I.quiz}</span>
            <div className="ip-actb"><Link to={'/cpp/' + x.id}>{x.t}</Link><div className="ip-actd">{x.d}</div></div>
            <span className={'ip-badge lv' + x.lv}>{LVN[x.lv]}</span>
            {p && p.solved ? <span className="ip-badge done">{I.check}{L('Resolt', 'Resuelto')}</span>
              : ss && ss.started ? <span className="ip-badge">{L('En curs', 'En curso')}</span>
                : <span className="ip-badge">{L('Per fer', 'Por hacer')}</span>}
          </div>
        );
      })}
    </div>
  );
}
