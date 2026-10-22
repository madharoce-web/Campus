import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLang } from '../../../lib/i18n.jsx';
import { EX, LEVELS, TARGET, WEEK_NUMS, firstSentence, isSolved, levelList, levelNames, weekName } from '../lib/data.js';
import { elapsed, setS, updFilt, useS } from '../lib/store.js';
import { fmtT, mmss } from '../lib/format.js';
import { ChevIcon, Page, QuizIcon } from '../components/Layout.jsx';

/** Estat d'un exercici a la llista. */
function statusOf(x, S, L) {
  const p = S.prog[x.id] || {}, ss = S.sess[x.id];
  if (p.solved) return { k: 'done', t: L('Fet: resolt en ', 'Hecho: resuelto en ') + fmtT(p.best) };
  if (ss && ss.started) return { k: 'prog', t: L('En curs · ', 'En curso · ') + mmss(elapsed(ss)) };
  return { k: '', t: L('Per fer', 'Por hacer') };
}

function Activity({ x, S }) {
  const { L } = useLang();
  const LVN = levelNames(L), st = statusOf(x, S, L), p = S.prog[x.id] || {};
  return (
    <div className="activity">
      <span className="act-ico box"><QuizIcon /></span>
      <div className="body">
        <div className="type">{L('Pràctica', 'Práctica') + ' · ' + (x.src === 'model' ? L('del professor', 'del profesor') : L('nova', 'nueva'))}</div>
        <Link to={'/cpp/' + x.id} className="name">{x.title || firstSentence(x)}</Link>
        {x.title && <div className="desc">{firstSentence(x)}</div>}
        <div className="tags">
          <span className={'badge-c lv' + x.lv}>{LVN[x.lv]}</span>
          {x.wk ? <span className="badge-c">{L('Setmana ', 'Semana ') + x.wk}</span> : null}
          {(x.tags || []).slice(0, 3).map((t, i) => <span key={i} className="badge-c">{t}</span>)}
          {p.flag && <span className="badge-c flagged">{L('marcada', 'marcada')}</span>}
        </div>
      </div>
      <div className="right"><span className={'badge-c ' + st.k}>{st.t}</span></div>
    </div>
  );
}

/** Calaix de la llista i del progrés: progrés per nivell i accés al simulacre. */
export function DrawerProgress() {
  const { L } = useLang();
  const S = useS();
  const navigate = useNavigate();
  const LVN = levelNames(L);
  return (
    <>
      <div className="block">
        <h5>{L('El meu progrés', 'Mi progreso')}</h5>
        <div className="levelstat">
          {LEVELS.map((l) => {
            const all = EX.filter((x) => x.lv === l), s = all.filter((x) => isSolved(S.prog, x.id)).length;
            return (
              <div key={l}>
                <div className="row"><span>{LVN[l]}</span><span className="muted">{s}/{all.length}</span></div>
                <div className="progress"><i style={{ width: (s / all.length * 100) + '%' }} /></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="block">
        <h5>{L('Simulacre d\'examen', 'Simulacro de examen')}</h5>
        <p className="small dr-p">{L('Diverses preguntes seguides, cadascuna amb el seu límit de temps, sense pistes ni pausa.', 'Varias preguntas seguidas, cada una con su límite de tiempo, sin pistas ni pausa.')}</p>
        <button type="button" className="btn btn-secondary btn-sm" id="dr-exam" onClick={() => navigate('/cpp/exam')}>{L('Prepara un simulacre', 'Prepara un simulacro')}</button>
      </div>
    </>
  );
}

/** Pàgina del curs: la llista d'exercicis amb filtres. */
export default function ListView() {
  const { L, lang } = useLang();
  const S = useS();
  const navigate = useNavigate();
  const f = S.filt, coll = S.coll || {};
  const LVN = levelNames(L);

  // la versió original crea S.coll en obrir la llista
  useEffect(() => { if (!S.coll) setS((st) => (st.coll ? st : { ...st, coll: {} })); }, [S.coll]);

  const match = (x) => (!f.wk || x.wk === f.wk) && (f.src === 'all' || x.src === f.src) && (f.st === 'all' || (f.st === 'done') === isSolved(S.prog, x.id));
  const lvs = f.lv ? [f.lv] : LEVELS;
  const solved = EX.filter((x) => isSolved(S.prog, x.id)).length;
  // la setmana es reflecteix a l'adreça (/cpp/s3); els altres filtres només es desen
  const setWeek = (wk) => {
    updFilt({ wk });
    navigate(wk ? '/cpp/s' + wk : '/cpp', { replace: true, state: { keep: true } });
  };

  return (
    <Page crumbs={[[L('C++ a contrarellotge', 'C++ a contrarreloj'), 'list'], [L('Exercicis', 'Ejercicios')]]} h1={L('Pràctica cronometrada de C++', 'Práctica cronometrada de C++')}
      tab="list" drawer={<DrawerProgress />}>
      <div className="course-summary">
        <p>{L('Exercicis com els dels qüestionaris de pràctiques i de l\'examen, amb un compilador de C++ real dins el navegador. Cada pregunta té un límit de ', 'Ejercicios como los de los cuestionarios de prácticas y del examen, con un compilador de C++ real dentro del navegador. Cada pregunta tiene un límite de ')}
          <b>{L('15 minuts', '15 minutos')}</b>{L(': el rellotge arrenca quan obres l\'enunciat.', ': el reloj arranca cuando abres el enunciado.')}</p>
        <p className="small muted">{L('«Executa» i «Prova els exemples» no penalitzen. «Comprova» passa també les proves ocultes i, com a CodeRunner, cada comprovació fallida resta un 10%.', '«Ejecuta» y «Prueba los ejemplos» no penalizan. «Comprueba» pasa también las pruebas ocultas y, como en CodeRunner, cada comprobación fallida resta un 10%.')}</p>
        {f.wk ? (
          <p className="small wkline">
            {L('Mostrant els exercicis de la ', 'Mostrando los ejercicios de la ')}<b>{L('setmana ', 'semana ') + f.wk}</b>{' (' + weekName(f.wk, lang) + '). '}
            <Link to={'/programacio/s' + f.wk}>{L('Teoria i pràctica de la setmana', 'Teoría y práctica de la semana')}</Link>{' · '}
            <a href="#" id="wk-all" onClick={(e) => { e.preventDefault(); setWeek(0); }}>{L('Mostra totes les setmanes', 'Muestra todas las semanas')}</a>
          </p>
        ) : null}
      </div>
      <div className="snav" role="tablist">
        {[0, ...LEVELS].map((l) => (
          <button key={l} type="button" data-lv={l} aria-current={String(f.lv === l)} onClick={() => updFilt({ lv: l })}>
            {l ? LVN[l] : L('Tots', 'Todos')} <span className="muted small">{EX.filter((x) => (!l || x.lv === l) && (!f.wk || x.wk === f.wk)).length}</span>
          </button>
        ))}
      </div>
      <div className="filters">
        <label htmlFor="f-wk">{L('Setmana', 'Semana')}</label>
        <select className="form-select" id="f-wk" value={f.wk} onChange={(e) => setWeek(+e.target.value)}>
          {[0, ...WEEK_NUMS].map((w) => <option key={w} value={w}>{w ? 'S' + w + ' · ' + weekName(w, lang) : L('Totes', 'Todas')}</option>)}
        </select>
        <label htmlFor="f-src">{L('Origen', 'Origen')}</label>
        <select className="form-select" id="f-src" value={f.src} onChange={(e) => updFilt({ src: e.target.value })}>
          {[['all', L('Tots', 'Todos')], ['model', L('Del professor', 'Del profesor')], ['nou', L('Nous', 'Nuevos')]].map(([k, t]) => <option key={k} value={k}>{t}</option>)}
        </select>
        <label htmlFor="f-st">{L('Estat', 'Estado')}</label>
        <select className="form-select" id="f-st" value={f.st} onChange={(e) => updFilt({ st: e.target.value })}>
          {[['all', L('Tots', 'Todos')], ['todo', L('Per fer', 'Por hacer')], ['done', L('Fets', 'Hechos') + ' (' + solved + ')']].map(([k, t]) => <option key={k} value={k}>{t}</option>)}
        </select>
      </div>
      {lvs.map((lv) => {
        const items = levelList(lv).filter(match), open = !coll[lv];
        return (
          <section key={lv} className="section">
            <button type="button" className="sechead" data-coll={lv} aria-expanded={open}
              onClick={() => setS((st) => ({ ...st, coll: { ...(st.coll || {}), [lv]: !(st.coll || {})[lv] } }))}>
              <span className="chev"><ChevIcon /></span><h3>{LVN[lv]}</h3>
              <span className="cnt">{L('objectiu ', 'objetivo ') + TARGET[lv] + ' min · ' + items.length + L(' exercicis', ' ejercicios')}</span>
            </button>
            {open && (
              <div className="acts">
                {items.length ? items.map((x) => <Activity key={x.id} x={x} S={S} />)
                  : <p className="small muted none">{L('Cap exercici amb aquests filtres.', 'Ningún ejercicio con estos filtros.')}</p>}
              </div>
            )}
          </section>
        );
      })}
    </Page>
  );
}
