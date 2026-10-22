import { Fragment, useEffect, useRef, useState } from 'react';
import { useLang } from '../../../lib/i18n.jsx';
import { useStoredState } from '../../../lib/useStoredState.js';
import { ExCard, useBank } from './Bank.jsx';
import { MODELS, clock, fmtClock, fmtGrade, grade, kindName, newSim, withHistory } from '../engine/sim.js';

const validSim = (v) => (v && Array.isArray(v.ids) && MODELS[v.m] && v.t0 ? v : null);
const validHist = (v, d) => (Array.isArray(v) ? v : d);

/** Rellotge del simulacre: compte enrere d'una hora i mitja (o temps emprat en acabar). */
function Clock({ S }) {
  const { L } = useLang();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (S.fin) return undefined;
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [S.t0, S.fin]);
  const c = clock(S, now, L);
  return <span className={'lx-clock' + (c.cls ? ' ' + c.cls : '')} aria-live="off">{c.text}</span>;
}

/** Simulacre de control (CP1 o CP2): exercicis a l'atzar, rellotge, solucions, autoavaluació i historial. */
export default function Sim() {
  const { lang, L } = useLang();
  const bank = useBank(lang);
  const [S, setS] = useStoredState('lx-sim', null, validSim);
  const [hist, setHist] = useStoredState('lx-sim-hist', [], validHist);
  const box = useRef(null), selfs = useRef([]), pending = useRef(null);

  // després de començar o d'acabar, a l'inici del simulacre; després d'autoavaluar, la fila tocada
  useEffect(() => {
    const p = pending.current;
    pending.current = null;
    if (p === 'box' && box.current) box.current.scrollIntoView({ block: 'start' });
    else if (typeof p === 'number' && selfs.current[p]) selfs.current[p].scrollIntoView({ block: 'nearest' });
  }, [S]);

  if (!bank) return <div className="lx-sim" ref={box} />;
  const byId = (id) => bank.find((x) => x.id === id);

  if (!S || !validSim(S)) {
    return (
      <div className="lx-sim" ref={box}>
        <div className="lx-simh">
          <h2>{L('Tria el control', 'Escoge el control')}</h2>
          <div className="lx-models">
            {Object.keys(MODELS).map((k) => {
              const M = MODELS[k];
              return (
                <button key={k} type="button" className="lx-model" data-m={k} onClick={() => { pending.current = 'box'; setS(newSim(bank, k)); }}>
                  <b>{M.t(L)}</b>
                  <span>{M.slots.map((s, i) => (
                    <Fragment key={i}>{i > 0 && <br />}{L('Ex. ', 'Ej. ') + (i + 1) + ': ' + kindName(s[0], L) + (s[2] === 'b' ? L(' (mètode alternatiu)', ' (método alternativo)') : '') + ' · ' + s[1] + '%'}</Fragment>
                  ))}</span>
                  <span className="lx-dur">1:30:00</span>
                </button>
              );
            })}
          </div>
          <p className="lx-why">{L("Els exercicis surten a l'atzar del banc. Feu-los en paper, com a l'examen, i quan acabeu compareu-los amb la solució.", 'Los ejercicios salen al azar del banco. Hacedlos en papel, como en el examen, y cuando acabéis comparadlos con la solución.')}</p>
          {hist.length > 0 && (
            <>
              <h3>{L('Intents anteriors', 'Intentos anteriores')}</h3>
              <div className="tw">
                <table>
                  <thead><tr><th>{L('Data', 'Fecha')}</th><th>{L('Control', 'Control')}</th><th>{L('Temps', 'Tiempo')}</th><th>{L('Nota', 'Nota')}</th></tr></thead>
                  <tbody>
                    {hist.slice(-8).reverse().map((r, i) => (
                      <tr key={i}>
                        <td>{new Date(r.d).toLocaleString(lang === 'es' ? 'es-ES' : 'ca-ES', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</td>
                        <td>{r.m}</td><td>{fmtClock(r.t)}</td><td><b>{fmtGrade(r.g)}</b> / 10</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  const M = MODELS[S.m];
  const end = () => {
    if (S.fin) { setS(null); return; }
    pending.current = 'box';
    setS({ ...S, fin: Date.now() });
  };
  const assess = (i, v) => {
    const n = { ...S, self: { ...S.self, [i]: v } };
    pending.current = i;
    setS(n);
    setHist((h) => withHistory(h, n));
  };

  return (
    <div className="lx-sim" ref={box}>
      <div className="lx-simbar">
        <Clock S={S} />
        <span>{M.t(L)}</span>
        <button type="button" className="lx-b lx-end" onClick={end}>{S.fin ? L('Nou simulacre', 'Nuevo simulacro') : L('Acaba i corregeix', 'Termina y corrige')}</button>
        {!S.fin && <button type="button" className="lx-b lx-quit" onClick={() => setS(null)}>{L('Abandona', 'Abandona')}</button>}
      </div>
      {S.fin && (
        <div className="lx-grade">
          <b>{fmtGrade(grade(S))}</b> / 10<span>{L('Autoavaluació: marqueu a cada exercici quina part teníeu bé.', 'Autoevaluación: marcad en cada ejercicio qué parte teníais bien.')}</span>
        </div>
      )}
      {M.slots.map((s, i) => {
        const x = byId(S.ids[i]);
        if (!x) return null;
        return (
          <section key={i} className="lx-simex">
            <h2>{L('Exercici ', 'Ejercicio ') + (i + 1) + ' '}<span className="lx-w">{s[1] + '%'}</span></h2>
            <ExCard x={x} sim st2={s[2] === 'b'} parts={s[2] === 'b' ? ['b'] : null} shownAll={!!S.fin} />
            {S.fin && (
              <div className="lx-self" data-i={i} ref={(el) => { selfs.current[i] = el; }}>
                <span>{L('Quina part teníeu bé?', '¿Qué parte teníais bien?')}</span>
                {[0, 25, 50, 75, 100].map((v) => (
                  <button key={v} type="button" data-v={v} aria-pressed={S.self[i] === v} onClick={() => assess(i, v)}>{v + '%'}</button>
                ))}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
