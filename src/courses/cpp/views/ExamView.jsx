import { Navigate, useNavigate } from 'react-router-dom';
import { useLang } from '../../../lib/i18n.jsx';
import { BY, EX, TPL, exName, isSolved, levelNames, presets } from '../lib/data.js';
import { getS, newSess, sessOf, putSess, setS, useS } from '../lib/store.js';
import { fmtT, grade2 } from '../lib/format.js';
import { Page } from '../components/Layout.jsx';

const locale = (lang) => (lang === 'ca' ? 'ca-ES' : 'es-ES');

/** Configuració i inici del simulacre d'examen. */
export function ExamView() {
  const { L, lang } = useLang();
  const S = useS();
  const navigate = useNavigate();
  const P = presets(L), pr = P[S.preset] || P.exam, X = S.exam;
  const LVN = levelNames(L);
  const min = S.set.min;

  const startExam = () => {
    const st = getS();
    const pp = presets(L)[st.preset] || presets(L).exam;
    const pool = EX.filter((x) => st.exSrc === 'all' || (st.exSrc === 'todo' ? !isSolved(st.prog, x.id) : x.src === st.exSrc));
    const ids = [];
    pp.lv.forEach((l) => {
      let c = pool.filter((x) => x.lv === l && !ids.includes(x.id));
      if (!c.length) c = EX.filter((x) => x.lv === l && !ids.includes(x.id));
      ids.push(c[Math.floor(Math.random() * c.length)].id);
    });
    setS((x) => {
      const sess = { ...x.sess }, prog = { ...x.prog };
      ids.forEach((id) => {
        sess[id] = { ...newSess(x.set.min), exam: true };
        prog[id] = { ...(prog[id] || {}), code: x.set.tpl ? TPL : '' };
      });
      return { ...x, sess, prog, exam: { ids, i: 0, res: [], t0: Date.now(), done: false, preset: x.preset } };
    }, true);
    navigate('/cpp/' + ids[0]);
  };
  const dropExam = () => {
    setS((x) => {
      const sess = { ...x.sess };
      x.exam.ids.forEach((id) => { if (sess[id] && sess[id].exam) delete sess[id]; });
      return { ...x, sess, exam: null };
    }, true);
  };

  let summary = null;
  if (X && X.done) {
    const n = X.ids.length, tot = X.res.reduce((a, r) => a + (r ? r.grade : 0), 0) / n;
    summary = (
      <>
        <h3 className="h3x">{L('Resum de l\'intent anterior', 'Resumen del intento anterior')}</h3>
        <div className="tblwrap">
          <table className="generaltable">
            <thead><tr><th>{L('Estat', 'Estado')}</th><th>{L('Preguntes', 'Preguntas')}</th><th className="num">{L('Qualificació / 10,00', 'Calificación / 10,00')}</th><th>{L('Revisió', 'Revisión')}</th></tr></thead>
            <tbody><tr>
              <td>{L('Acabat', 'Terminado')}<br /><span className="tiny muted">{new Date(X.t1 || X.t0).toLocaleString(locale(lang))}</span></td>
              <td>{n}</td>
              <td className="num"><b>{(tot / 10).toFixed(2).replace('.', ',')}</b></td>
              <td><a href="#" id="lastSum" onClick={(e) => { e.preventDefault(); navigate('/cpp/sum'); }}>{L('Revisió', 'Revisión')}</a></td>
            </tr></tbody>
          </table>
        </div>
      </>
    );
  }

  return (
    <Page crumbs={[[L('C++ a contrarellotge', 'C++ a contrarreloj'), 'list'], [L('Simulacre', 'Simulacro')]]} icon h1={L('Simulacre d\'examen', 'Simulacro de examen')} tab="exam">
      <div className="box-py">
        <p className="p1">{L('Diverses preguntes seguides, cadascuna amb el seu límit de temps. Quan s\'acaba el temps d\'una pregunta, s\'envia la resposta que tinguis (es fa una comprovació final) i es passa a la següent.', 'Varias preguntas seguidas, cada una con su límite de tiempo. Cuando se acaba el tiempo de una pregunta, se envía la respuesta que tengas (se hace una comprobación final) y se pasa a la siguiente.')}</p>
        <p className="small muted m0">{L('No hi ha pistes, ni solucions, ni proves ocultes visibles, ni pausa.', 'No hay pistas, ni soluciones, ni pruebas ocultas visibles, ni pausa.')}</p>
      </div>
      <div className="quizinfo">
        <div>{L('Límit de temps: ', 'Límite de tiempo: ')}<b>{min + ' min ' + L('per pregunta', 'por pregunta')}</b>{' (' + pr.lv.length * min + ' min ' + L('en total', 'en total') + ')'}</div>
        <div>{L('Mètode de qualificació: totes les proves o res, i un 10% menys per cada comprovació fallida', 'Método de calificación: todas las pruebas o nada, y un 10% menos por cada comprobación fallida')}</div>
      </div>
      {X && !X.done && (
        <div className="alert alert-info mb16">{L('Tens un intent a mitges.', 'Tienes un intento a medias.')}{' '}
          <button type="button" className="btn btn-primary btn-sm" id="resumeExam" onClick={() => navigate('/cpp/' + X.ids[X.i])}>{L('Continua l\'últim intent', 'Continúa el último intento')}</button>{' '}
          <button type="button" className="btn btn-secondary btn-sm" id="dropExam" onClick={dropExam}>{L('Abandona\'l', 'Abandónalo')}</button>
        </div>
      )}
      <h3 className="h3x">{L('Tipus de simulacre', 'Tipo de simulacro')}</h3>
      <div className="radio-list">
        {Object.entries(P).map(([k, q]) => (
          <label key={k}>
            <input type="radio" name="preset" value={k} checked={S.preset === k} onChange={() => setS((x) => ({ ...x, preset: k }))} />
            <span><b>{q.n}</b> · <span className="small">{q.d}</span><br /><span className="tiny muted">{q.lv.map((l) => LVN[l]).join(' · ') + ' — ' + q.lv.length * min + ' min'}</span></span>
          </label>
        ))}
      </div>
      <div className="filters mt14">
        <label htmlFor="x-src">{L('Preguntes', 'Preguntas')}</label>
        <select className="form-select" id="x-src" value={S.exSrc} onChange={(e) => setS((x) => ({ ...x, exSrc: e.target.value }))}>
          {[['all', L('Totes', 'Todas')], ['model', L('Només del professor', 'Solo del profesor')], ['nou', L('Només noves', 'Solo nuevas')], ['todo', L('Les que no he resolt', 'Las que no he resuelto')]].map(([k, t]) => <option key={k} value={k}>{t}</option>)}
        </select>
        <span className="small muted">{L('El temps per pregunta es canvia a Opcions.', 'El tiempo por pregunta se cambia en Opciones.')}</span>
      </div>
      <div className="go-exam"><button type="button" className="btn btn-primary" id="goExam" onClick={startExam}>{L('Comença l\'intent', 'Empieza el intento')}</button></div>
      {summary}
    </Page>
  );
}

/** Revisió de l'intent acabat. */
export function SummaryView() {
  const { L, lang } = useLang();
  const S = useS();
  const navigate = useNavigate();
  const X = S.exam;
  if (!X) return <Navigate replace to="/cpp/exam" />;
  const LVN = levelNames(L);
  const n = X.ids.length, pts = X.res.reduce((a, r) => a + (r ? r.grade / 100 : 0), 0), tot = pts / n * 10;
  const used = X.res.reduce((a, r) => a + (r && r.time ? r.time : 0), 0);
  const fmtD = (d) => new Date(d).toLocaleString(locale(lang), { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  // obrir una pregunta la revisa en mode pràctica (amb el temps ja esgotat si no es va resoldre)
  const review = (id) => {
    setS((x) => {
      let ss = { ...sessOf(x, id), exam: false };
      if (!ss.fin) ss = { ...ss, started: true, acc: Math.max(ss.acc, ss.lim), on: false, mp: false };
      return putSess(x, id, ss);
    });
    navigate('/cpp/' + id);
  };
  return (
    <Page crumbs={[[L('C++ a contrarellotge', 'C++ a contrarreloj'), 'list'], [L('Simulacre', 'Simulacro'), 'exam'], [L('Revisió de l\'intent', 'Revisión del intento')]]} icon h1={L('Simulacre d\'examen', 'Simulacro de examen')} tab="exam">
      <div className="tblwrap">
        <table className="generaltable summary-table">
          <tbody>
            <tr><th>{L('Començat el', 'Comenzado el')}</th><td>{fmtD(X.t0)}</td></tr>
            <tr><th>{L('Estat', 'Estado')}</th><td>{L('Acabat', 'Terminado')}</td></tr>
            <tr><th>{L('Completat el', 'Completado el')}</th><td>{fmtD(X.t1 || Date.now())}</td></tr>
            <tr><th>{L('Temps emprat', 'Tiempo empleado')}</th><td>{Math.floor(used / 60) + ' min ' + (used % 60) + ' s'}</td></tr>
            <tr><th>{L('Punts', 'Puntos')}</th><td>{pts.toFixed(2).replace('.', ',') + '/' + n + ',00'}</td></tr>
            <tr><th>{L('Qualificació', 'Calificación')}</th><td><b>{tot.toFixed(2).replace('.', ',')}</b>{' ' + L('sobre', 'sobre') + ' 10,00 ('}<b>{Math.round(tot * 10)}</b>%)</td></tr>
          </tbody>
        </table>
      </div>
      <h3 className="h3x mt22">{L('Preguntes', 'Preguntas')}</h3>
      <div className="tblwrap">
        <table className="generaltable">
          <thead><tr><th>#</th><th>{L('Pregunta', 'Pregunta')}</th><th>{L('Estat', 'Estado')}</th><th className="num">{L('Comprovacions', 'Comprobaciones')}</th><th className="num">{L('Temps', 'Tiempo')}</th><th className="num">{L('Punts', 'Puntos')}</th></tr></thead>
          <tbody>
            {X.ids.map((id, i) => {
              const r = X.res[i], ex = BY[id];
              const st = !r ? L('No contestada', 'No contestada')
                : r.ok ? <span className="correctness correct">{L('Correcta', 'Correcta')}</span>
                  : <><span className="correctness incorrect">{L('Incorrecta', 'Incorrecta')}</span> <span className="tiny muted">{(r.passed || 0) + '/' + r.total}</span></>;
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td><a href={'/cpp/' + id} data-rev={id} onClick={(e) => { e.preventDefault(); review(id); }}>{exName(ex)}</a> <span className={'badge-c lv' + ex.lv}>{LVN[ex.lv]}</span></td>
                  <td>{st}</td>
                  <td className="num">{r ? r.checks : 0}</td>
                  <td className="num">{r ? fmtT(r.time) + (r.over ? ' ⚑' : '') : '—'}</td>
                  <td className="num">{(r ? grade2(r.grade) : '0,00') + '/1,00'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="tiny muted">{L('⚑ = fora de temps. Obrir una pregunta la revisa en mode pràctica, amb les proves ocultes i la solució.', '⚑ = fuera de tiempo. Abrir una pregunta la revisa en modo práctica, con las pruebas ocultas y la solución.')}</p>
      <div className="btn-row mt12">
        <button type="button" className="btn btn-primary" id="again" onClick={() => navigate('/cpp/exam')}>{L('Un altre simulacre', 'Otro simulacro')}</button>
        <button type="button" className="btn btn-secondary" data-nav="list" onClick={() => navigate('/cpp')}>{L('Torna als exercicis', 'Vuelve a los ejercicios')}</button>
      </div>
    </Page>
  );
}
