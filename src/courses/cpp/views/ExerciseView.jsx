import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLang } from '../../../lib/i18n.jsx';
import Rich from '../../../lib/Rich.jsx';
import { esc } from '../../../lib/html.js';
import { compile, getSnapshot, run } from '../../../shared/cpp/engine.js';
import { useCppEngine } from '../../../shared/cpp/useCppEngine.js';
import { BY, TARGET, TPL, exName, levelList, levelNames, nextEx } from '../lib/data.js';
import {
  elapsed, getS, gradeNow, newSess, pauseClock, putProg, putSess, sessOf, setS, startClock, updExam, updProg, updSess, useS,
} from '../lib/store.js';
import { errLinesOf, grade2, inl, mmss, norm, trapMsg } from '../lib/format.js';
import { review } from '../lib/review.js';
import { beep } from '../lib/hooks.js';
import CodeEditor from '../components/CodeEditor.jsx';
import { ConsoleParts, DiffGot, Diags, Vis, runParts, waitKey } from '../components/Output.jsx';
import { DrawerTimer, OverBanner } from '../components/Clock.jsx';
import { FlagIcon, Page } from '../components/Layout.jsx';

/** L'exercici és la pregunta actual d'un simulacre en curs? */
export const isExam = (st, id) => !!(st.exam && !st.exam.done && st.exam.ids[st.exam.i] === id);
const codeOf = (st, id) => {
  const p = st.prog[id] || {};
  return p.code ?? (st.set.tpl ? TPL : '');
};

/** Enunciat amb la taula d'exemples (contingut estàtic de l'exercici). */
function statementHTML(ex, L) {
  let h = ex.title ? '<div class="ttl">' + esc(ex.title) + '</div>' : '';
  ex.body.forEach((b) => {
    if (b.p != null) h += '<p>' + inl(b.p) + '</p>';
    else if (b.pre != null) h += '<pre>' + esc(b.pre) + '</pre>';
    else if (b.ul) h += '<ul>' + b.ul.map((x) => '<li>' + inl(x) + '</li>').join('') + '</ul>';
  });
  const named = ex.examples.some((e) => e.name);
  h += '<p><b>' + L('Per exemple:', 'Por ejemplo:') + '</b></p><div class="tblwrap"><table class="extab"><thead><tr>' + (named ? '<th>' + L('Prova', 'Prueba') + '</th>' : '') + '<th>' + L('Entrada', 'Entrada') + '</th><th>' + L('Resultat', 'Resultado') + '</th></tr></thead><tbody>' +
    ex.examples.map((e) => '<tr>' + (named ? '<td><pre>' + esc(e.name || '') + '</pre></td>' : '') + '<td><pre>' + esc(e.in.replace(/\n$/, '')) + '</pre></td><td><pre>' + esc(e.out.replace(/\n$/, '')) + '</pre></td></tr>').join('') + '</tbody></table></div>';
  return h;
}

/** Pestanya «Proves»: resultats de «Prova els exemples» / «Comprova». */
function Results({ R, ex, ss, exam, hid, onShowHidden, onGoto, onDiag }) {
  const { L } = useLang();
  const S = useS();
  const eng = useCppEngine();
  const strict = S.set.strict;
  if (!R) return <p className="small m0">{L('«Prova els exemples» passa els exemples de l\'enunciat, sense penalització. «Comprova» passa també les proves ocultes; cada comprovació fallida resta un 10% (si la pregunta té règim de penalització).', '«Prueba los ejemplos» pasa los ejemplos del enunciado, sin penalización. «Comprueba» pasa también las pruebas ocultas; cada comprobación fallida resta un 10% (si la pregunta tiene régimen de penalización).')}</p>;
  const lateOk = hid || ss.fin || elapsed(ss) >= ss.lim;
  const showAllHidden = !exam && lateOk;
  const rowName = (r) => r.name || (r.hidden ? L('Oculta ', 'Oculta ') : L('Exemple ', 'Ejemplo ')) + r.n;
  const errMsg = (e) => (e.trap ? trapMsg(e.trap, L, eng.mode) : L('El programa ha acabat amb el codi ', 'El programa ha terminado con el código ') + e.exit + L(' (hauria de ser 0).', ' (debería ser 0).'));
  const errShort = (e) => (e.trap ? (e.trap.kind === 'timeout' ? L('temps límit', 'tiempo límite') : L('error d\'execució', 'error de ejecución')) : L('codi ', 'código ') + e.exit);
  const running = R.running && (R.running.k === 'waitc' ? L('Esperant el compilador…', 'Esperando al compilador…')
    : R.running.k === 'compiling' ? L('Compilant…', 'Compilando…')
      : L('Executant la prova ', 'Ejecutando la prueba ') + R.running.i + L(' de ', ' de ') + R.running.n + '…');
  const tgt = TARGET[ex.lv] * 60;
  const V = R.verdict;
  return (
    <>
      {running && <div className="btn-row"><span className="spin" /><span>{running}</span></div>}
      {R.compileErr && (
        <>
          <div className="msg-bad">{L('Error de sintaxi', 'Error de sintaxis')}</div>
          <pre className="console"><Diags diags={R.diags} onGoto={onDiag} /></pre>
          {R.kind === 'all' && (
            <div className="fb-lines"><span><span className="correctness incorrect">{L('Incorrecta', 'Incorrecta')}</span></span>
              <span>{L('Punts per a aquest enviament: 0,00/1,00.', 'Puntos para este envío: 0,00/1,00.')}</span></div>
          )}
        </>
      )}
      {R.rows && R.rows.length > 0 && (
        <>
          <div className="tblwrap">
            <table className="coderunner-test-results">
              <thead><tr><th /><th>{L('Prova', 'Prueba')}</th><th>{L('Entrada', 'Entrada')}</th><th>{L('Esperat', 'Esperado')}</th><th>{L('Obtingut', 'Obtenido')}</th><th /></tr></thead>
              <tbody>
                {R.rows.map((r, i) => {
                  const hide = r.hidden && !showAllHidden;
                  const ic = <td className={'ic ' + (r.pass ? 'p' : 'f')}>{r.pass ? '✓' : '✗'}</td>;
                  return (
                    <tr key={i} className={r.pass ? 'pass' : 'fail'}>
                      {ic}<td>{rowName(r)}</td>
                      {hide
                        ? <td colSpan={3} className="small">{r.pass ? L('Prova oculta superada', 'Prueba oculta superada') : L('Prova oculta no superada', 'Prueba oculta no superada') + (r.err ? ' · ' + errShort(r.err) : '')}</td>
                        : (
                          <>
                            <td><pre>{r.in.replace(/\n$/, '')}</pre></td>
                            <td><pre><Vis s={norm(r.exp, strict)} /></pre></td>
                            <td><pre>{r.err
                              ? <><span className="rerr">{errMsg(r.err)}</span>{r.got ? <>{'\n'}<Vis s={r.got} /></> : null}</>
                              : r.pass ? <Vis s={norm(r.got, strict)} /> : <DiffGot exp={norm(r.exp, strict)} got={norm(r.got, strict)} />}</pre></td>
                          </>
                        )}
                      {ic}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {!R.running && R.rows.some((r) => r.hidden && !r.pass) && !showAllHidden && <div className="msg-bad small">{L('Algunes proves ocultes han fallat.', 'Algunas pruebas ocultas han fallado.')}</div>}
        </>
      )}
      {V && V.t === 'allok' && (
        <div className="fb-lines">
          <span className="msg-ok">{L('Totes les proves superades! ✔', '¡Todas las pruebas superadas! ✔')}</span>
          <span><span className="correctness correct">{L('Correcta', 'Correcta')}</span></span>
          <span>{L('Punts per a aquest enviament: 1,00/1,00.', 'Puntos para este envío: 1,00/1,00.') + (V.grade < 100 ? ' ' + L('Tenint en compte les penalitzacions anteriors, això dona ', 'Teniendo en cuenta las penalizaciones anteriores, esto da ') + grade2(V.grade) + '/1,00.' : '')}</span>
          <span>{L('Resolt en ', 'Resuelto en ')}<b>{mmss(V.time)}</b>{' · ' + (V.time <= tgt ? L('dins de l\'objectiu de ', 'dentro del objetivo de ') + TARGET[ex.lv] + ' min' : V.time <= V.lim ? L('per sobre de l\'objectiu de ', 'por encima del objetivo de ') + TARGET[ex.lv] + ' min' : L('fora de temps', 'fuera de tiempo'))}</span>
          {!V.exam && (
            <div className="btn-row mt6">
              <button type="button" className="btn btn-secondary btn-sm" data-goto="list" onClick={() => onGoto('list')}>{L('Torna a la llista', 'Vuelve a la lista')}</button>
              {V.nxt && <button type="button" className="btn btn-primary btn-sm" data-goto={V.nxt} onClick={() => onGoto(V.nxt)}>{L('Pregunta següent', 'Pregunta siguiente')}</button>}
            </div>
          )}
        </div>
      )}
      {V && V.t === 'allbad' && (
        <div className="fb-lines">
          <span className="msg-bad">{L('El teu codi ha de superar totes les proves per obtenir cap punt. Torna-ho a provar.', 'Tu código tiene que superar todas las pruebas para obtener algún punto. Vuelve a intentarlo.')}</span>
          <span><span className="correctness incorrect">{L('Incorrecta', 'Incorrecta')}</span></span>
          <span>{L('Punts per a aquest enviament: 0,00/1,00.', 'Puntos para este envío: 0,00/1,00.') + (V.fin ? '' : ' ' + L('Puntuació màxima a partir d\'ara: ', 'Puntuación máxima a partir de ahora: ') + grade2(V.gmax) + '.')}</span>
          <span className="small">{V.nOk + '/' + V.total + L(' proves superades.', ' pruebas superadas.')}</span>
        </div>
      )}
      {V && V.t === 'ex' && (
        <div className="fb-lines">
          <span className={V.ok ? 'msg-ok' : 'msg-bad'}>{V.ok ? L('Els exemples surten bé.', 'Los ejemplos salen bien.') : V.nOk + '/' + V.total + L(' exemples correctes.', ' ejemplos correctos.')}</span>
          <span className="small">{V.ok ? L('Ara prem «Comprova» per passar també les proves ocultes.', 'Ahora pulsa «Comprueba» para pasar también las pruebas ocultas.') : L('Sense penalització: només eren els exemples.', 'Sin penalización: solo eran los ejemplos.')}</span>
        </div>
      )}
      {R.rows && R.rows.some((r) => r.hidden) && !exam && !lateOk && (
        <div className="btn-row">
          <button type="button" className="btn btn-secondary btn-sm" id="showhid" onClick={onShowHidden}>{L('Mostra les proves ocultes', 'Muestra las pruebas ocultas')}</button>
          <span className="tiny muted">{L('A l\'examen no les veuràs.', 'En el examen no las verás.')}</span>
        </div>
      )}
      {R.rows && R.rows.length > 0 && (
        <p className="tiny muted m0">{strict
          ? L('Comparació estricta: cada caràcter compta, també els espais i salts de línia finals.', 'Comparación estricta: cada carácter cuenta, también los espacios y saltos de línea finales.')
          : L('Com CodeRunner: només s\'ignoren els espais i salts de línia del final de tot. Els espais es veuen com · i els salts de línia com ↵.', 'Como CodeRunner: solo se ignoran los espacios y saltos de línea del final de todo. Los espacios se ven como · y los saltos de línea como ↵.')}</p>
      )}
    </>
  );
}

/** Calaix de la pregunta: rellotge, navegació, pausa i lliurament (simulacre). */
function QuizDrawer({ id, ex, ss, exam, askClock, setAskClock, finConf, setFinConf, passing, act }) {
  const { L } = useLang();
  const S = useS();
  const navigate = useNavigate();
  const LVN = levelNames(L);
  const X = S.exam;
  const p = S.prog[id] || {};
  const ids = exam ? X.ids : levelList(ex.lv).map((x) => x.id);
  return (
    <>
      <div className="block">
        <h5>{L('Navegació pel qüestionari', 'Navegación por el cuestionario')}</h5>
        <DrawerTimer id={id} lv={ex.lv} />
        <div className="qn" id="qn">
          {ids.map((qid, i) => {
            const qp = S.prog[qid] || {}, qs = S.sess[qid];
            let st;
            if (exam) { const r = X.res[i]; st = r ? (r.ok ? 'correct' : 'incorrect') : (qs && qs.started ? 'started' : ''); }
            else st = qp.solved ? 'correct' : qs && qs.checks ? 'incorrect' : qs && qs.started ? 'started' : '';
            return (
              <button key={qid} type="button" className={'qnbutton ' + st + (qid === id ? ' cur' : '') + (qp.flag ? ' flagged' : '')} data-q={qid}
                title={exName(BY[qid])} disabled={exam && qid !== id} onClick={() => { if (!exam && qid !== id) navigate('/cpp/' + qid); }}>
                {i + 1}<span className="st" />
              </button>
            );
          })}
        </div>
        <div className="ctl" id="clockbtns">
          {askClock ? (
            <div className="confirm">{L('Es reinicia el rellotge i s\'esborra el codi.', 'Se reinicia el reloj y se borra el código.')}
              <button type="button" className="btn btn-primary btn-sm" id="rs-y" onClick={() => act.current.resetAll()}>{L('Reinicia', 'Reinicia')}</button>
              <button type="button" className="btn btn-secondary btn-sm" id="rs-n" onClick={() => setAskClock(false)}>{L('Cancel·la', 'Cancela')}</button>
            </div>
          ) : (
            <>
              {!exam && ss.started && !ss.fin && (ss.on
                ? <button type="button" className="btn btn-secondary btn-sm" id="cpause" onClick={() => act.current.pause()}>{L('Pausa', 'Pausa')}</button>
                : <button type="button" className="btn btn-secondary btn-sm" id="cplay" onClick={() => act.current.play()}>{L('Continua', 'Continúa')}</button>)}
              {!exam && ss.started && <button type="button" className="btn btn-secondary btn-sm" id="creset" onClick={() => setAskClock(true)}>{L('Torna a començar', 'Vuelve a empezar')}</button>}
            </>
          )}
        </div>
        {exam ? (
          <>
            <button type="button" className="btn btn-secondary btn-sm" id="deliver" disabled={passing} onClick={() => act.current.examDeliver()}>
              {passing ? L('Correcta! Passant a la següent…', '¡Correcta! Pasando a la siguiente…')
                : X.i + 1 < X.ids.length ? L('Lliura i passa a la següent', 'Entrega y pasa a la siguiente') : L('Lliura l\'última pregunta', 'Entrega la última pregunta')}
            </button>
            <div id="finconf">
              {finConf && (
                <div className="confirm finconf">{L('S\'enviaran totes les respostes i s\'acabarà el simulacre.', 'Se enviarán todas las respuestas y terminará el simulacro.')}
                  <button type="button" className="btn btn-primary btn-sm" id="fin-y" onClick={() => { updExam({ finishAll: true }); act.current.examDeliver(); }}>{L('Envia-ho tot i acaba', 'Envíalo todo y termina')}</button>
                  <button type="button" className="btn btn-secondary btn-sm" id="fin-n" onClick={() => setFinConf(false)}>{L('Cancel·la', 'Cancela')}</button>
                </div>
              )}
            </div>
            <a href="#" id="finish" className="small" onClick={(e) => { e.preventDefault(); setFinConf(true); }}>{L('Acaba l\'intent...', 'Termina el intento...')}</a>
          </>
        ) : <Link to="/cpp" className="small">{L('Torna a la llista d\'exercicis', 'Vuelve a la lista de ejercicios')}</Link>}
      </div>
      <div className="block">
        <h5>{L('Aquesta pregunta', 'Esta pregunta')}</h5>
        <div className="meta" id="qmeta">
          <span>{L('Nivell: ', 'Nivel: ')}<b>{LVN[ex.lv]}</b>{' · ' + L('objectiu ', 'objetivo ') + TARGET[ex.lv] + ' min'}</span>
          <span>{L('Comprovacions: ', 'Comprobaciones: ') + ss.checks + (ss.fails ? ' (' + ss.fails + L(' fallides)', ' fallidas)') : '')}</span>
          {p.best != null && <span>{L('Millor temps: ', 'Mejor tiempo: ') + mmss(p.best)}</span>}
          <span>{ex.src === 'model' ? L('Exercici del professor', 'Ejercicio del profesor') : L('Exercici nou', 'Ejercicio nuevo')}</span>
        </div>
      </div>
    </>
  );
}

/** Pregunta oberta: enunciat, editor, execució, proves, revisió, pistes i rellotge. */
export default function ExerciseView({ id }) {
  const { L } = useLang();
  const S = useS();
  const eng = useCppEngine();
  const navigate = useNavigate();
  const ex = BY[id];
  const LVN = levelNames(L);
  const exam = isExam(S, id);
  const ss = sessOf(S, id);
  const p = S.prog[id] || {};
  const code = codeOf(S, id);

  // estat de la pregunta oberta (es conserva en canviar d'idioma)
  const [tab, setTab] = useState('cons');
  const [res, setResS] = useState(null);
  const [out, setOut] = useState(null);
  const [hid, setHid] = useState(false);
  const [stdin, setStdinS] = useState(() => (ex.examples[0] || {}).in || '');
  const [showHint, setShowHint] = useState(false);
  const [showSol, setShowSol] = useState(false);
  const [askSol, setAskSol] = useState(false);
  const [busy, setBusyS] = useState(false);
  const [errLines, setErrLines] = useState([]);
  const [rsconf, setRsconf] = useState(false);
  const [askClock, setAskClock] = useState(false);
  const [finConf, setFinConf] = useState(false);
  const [passing, setPassing] = useState(false);

  const alive = useRef(false);
  const busyRef = useRef(false);
  const resRef = useRef(null);
  const stdinRef = useRef(stdin);
  const edRef = useRef(null);
  const act = useRef({});

  const setBusy = (b) => { busyRef.current = b; setBusyS(b); };
  const setRes = (r) => { resRef.current = r; setResS(r); };
  const setStdin = (v) => { stdinRef.current = v; setStdinS(v); };
  const getCode = () => codeOf(getS(), id);
  const inExamNow = () => alive.current && isExam(getS(), id);
  /** Com quan la versió original tornava a pintar la pregunta sencera. */
  const repaint = () => { setAskSol(false); setRsconf(false); setFinConf(false); setAskClock(false); };

  /* ---------- executar ---------- */
  async function doRun() {
    if (busyRef.current) return;
    setBusy(true); setTab('cons');
    const src = getCode(), input = stdinRef.current;
    setOut([['sys', waitKey(getSnapshot())]]);
    const c = await compile(src);
    if (!alive.current) return;
    const o = [];
    if (c.diags && c.diags.length) o.push(['diags', c.diags], ['nl']);
    if (!c.ok) { o.push(['nocompile']); setErrLines(errLinesOf(c.diags)); setOut(o); }
    else {
      setErrLines([]);
      if (!c.interp) o.push(['compiled', c.ms], ['nl']);
      setOut([...o, ['sys', 'executing']]);
      const r = await run(c, input);
      if (!alive.current) return;
      setOut(runParts(o, r));
    }
    setBusy(false);
    if (inExamNow() && getS().exam.pendingDeliver) doSuite('all');
  }

  async function doSuite(kind) {
    if (!alive.current || busyRef.current) return;
    const s0 = sessOf(getS(), id);
    if (!s0.started || (!s0.on && !s0.fin && !inExamNow())) return;
    setBusy(true); setTab('res');
    const src = getCode();
    const tests = ex.examples.map((t, i) => ({ name: t.name || null, n: i + 1, in: t.in, exp: t.out, hidden: false }))
      .concat(kind === 'all' ? ex.tests.map((t, i) => ({ name: null, n: i + 1, in: t.in, exp: t.out, hidden: true })) : []);
    const snap = getSnapshot();
    let R = { kind, rows: [], total: tests.length, running: { k: snap.mode === 'clang' && snap.state !== 'ready' ? 'waitc' : 'compiling' } };
    setRes(R);
    const c = await compile(src);
    if (!alive.current) return;
    if (!c.ok) {
      R = { kind, compileErr: true, diags: c.diags, rows: [], total: tests.length };
      setErrLines(errLinesOf(c.diags)); setOut([['diags', c.diags]]);
      finishSuite(kind, false, R); return;
    }
    setErrLines([]);
    if (c.diags && c.diags.length) setOut([['diags', c.diags]]);
    for (let i = 0; i < tests.length; i++) {
      const t = tests[i];
      R = { ...R, running: { k: 'test', i: i + 1, n: tests.length } }; setRes(R);
      const r = await run(c, t.in);
      if (!alive.current) return;
      if (r.kind === 'compile') { R = { kind, compileErr: true, diags: [String(r.error)], rows: [], total: tests.length }; finishSuite(kind, false, R); return; }
      const got = r.stdout || '';
      let err = null;
      if (r.kind !== 'ok') err = { trap: { kind: r.kind, error: r.error } };
      else if (r.exitCode) err = { exit: r.exitCode };
      const strict = getS().set.strict;
      const pass = !err && norm(got, strict) === norm(t.exp, strict);
      R = { ...R, rows: [...R.rows, { ...t, got, pass, err, ms: r.ms }] };
    }
    finishSuite(kind, R.rows.every((r) => r.pass), R);
  }

  function finishSuite(kind, ok, R0) {
    const R = { ...R0 }; delete R.running;
    const nOk = R.rows.filter((r) => r.pass).length;
    let fresh = false;
    const st = getS();
    let s = sessOf(st, id);
    if (kind === 'all' && !s.fin) {
      s = { ...s, checks: s.checks + 1 };
      let prog = null;
      if (ok) {
        fresh = true;
        s = pauseClock({ ...s, fin: true, solvedAt: elapsed(s) });
        s = { ...s, grade: gradeNow(ex, s) };
        const over = s.solvedAt > s.lim;
        const q = { ...(st.prog[id] || {}) };
        q.solved = true;
        q.hist = (q.hist || []).concat([{ d: Date.now(), t: Math.round(s.solvedAt), g: s.grade, c: s.checks, over, help: !!s.help }]).slice(-20);
        if (!over && !s.help && (q.best == null || s.solvedAt < q.best)) q.best = Math.round(s.solvedAt);
        if (q.best == null) q.best = Math.round(s.solvedAt);
        q.grade = s.grade;
        prog = q;
        beep(1, st.set.sound);
      } else s = { ...s, fails: s.fails + 1 };
      const fin = s;
      setS((x) => { const n = putSess(x, id, fin); return prog ? { ...n, prog: { ...n.prog, [id]: prog } } : n; }, true);
    }
    const inEx = inExamNow();
    if (kind === 'all') {
      if (ok) { const nx = nextEx(ex, getS().prog); R.verdict = { t: 'allok', time: s.solvedAt, lim: s.lim, grade: s.grade, nxt: nx && nx.id, exam: inEx }; }
      else if (!R.compileErr) R.verdict = { t: 'allbad', nOk, total: R.total, fin: s.fin, gmax: gradeNow(ex, s) };
    } else if (!R.compileErr) R.verdict = { t: 'ex', ok, nOk, total: R.total };
    setBusy(false);
    if (inEx && getS().exam.pendingDeliver) {
      if (kind === 'all') { updExam({ pendingDeliver: false }, true); setRes(R); examRecordAndNext(ok, false); return; }
      setRes(R);
      doSuite('all');
      return;
    }
    setRes(R);
    setAskClock(false);
    if (fresh && inEx) examRecordAndNext(true, true);
  }

  /* ---------- simulacre ---------- */
  function examRecordAndNext(ok, delay) {
    const st = getS(), X = st.exam;
    if (!X) return;
    const qid = X.ids[X.i], qex = BY[qid];
    const s = pauseClock(sessOf(st, qid));
    const R = qid === id ? resRef.current : null;
    const rec = {
      id: qid, ok: !!ok, grade: ok ? s.grade : 0, time: Math.round(ok ? s.solvedAt : elapsed(s)), checks: s.checks,
      passed: R && R.rows ? R.rows.filter((r) => r.pass).length : 0, total: qex.examples.length + qex.tests.length,
      over: ok ? s.solvedAt > s.lim : elapsed(s) > s.lim,
    };
    setS((x) => {
      const n = putSess(x, qid, s);
      const rs = x.exam.res.slice(); rs[x.exam.i] = rec;
      return { ...n, exam: { ...x.exam, res: rs } };
    }, true);
    const finish = () => {
      setS((x) => (x.exam ? { ...x, exam: { ...x.exam, done: true, t1: Date.now() } } : x), true);
      navigate('/cpp/sum');
    };
    const next = () => {
      const Y = getS().exam;
      if (!Y) return;
      if (Y.finishAll || Y.i + 1 >= Y.ids.length) { finish(); return; }
      updExam({ i: Y.i + 1 }, true);
      navigate('/cpp/' + Y.ids[Y.i + 1]);
    };
    if (delay) { setPassing(true); setTimeout(next, 2200); } else next();
  }

  function examDeliver() {
    if (!inExamNow()) return;
    const s = sessOf(getS(), id);
    if (s.fin) { examRecordAndNext(true); return; }
    if (busyRef.current) { updExam({ pendingDeliver: true }); return; }
    const src = getCode().trim();
    if (!src || src === TPL.trim()) { examRecordAndNext(false); return; }
    updExam({ pendingDeliver: true });
    doSuite('all');
  }

  /* ---------- rellotge ---------- */
  const actions = {
    doRun, doSuite, examDeliver,
    pause: () => { updSess(id, (x) => ({ ...pauseClock(x), mp: true })); repaint(); },
    play: () => { updSess(id, (x) => startClock({ ...x, mp: false })); repaint(); },
    start: () => { updSess(id, (x) => startClock({ ...x, mp: false })); repaint(); },
    resetAll: () => {
      setS((x) => {
        const sess = { ...x.sess }; delete sess[id];
        sess[id] = newSess(x.set.min);
        return putProg({ ...x, sess }, id, { code: x.set.tpl ? TPL : '' });
      }, true);
      setRes(null); setOut(null); repaint();
    },
  };
  useLayoutEffect(() => { act.current = actions; });

  // en obrir la pregunta: crea la sessió, arrenca el rellotge (simulacre o represa) i desa el codi inicial
  useLayoutEffect(() => {
    alive.current = true;
    setS((st) => {
      const ex0 = isExam(st, id);
      let s = sessOf(st, id);
      if (ex0 && !s.started) s = startClock(s);
      if (!ex0 && s.started && !s.on && !s.fin && !s.mp) s = startClock(s);
      let n = st.sess[id] === s ? st : putSess(st, id, s);
      if ((st.prog[id] || {}).code == null) n = putProg(n, id, { code: st.set.tpl ? TPL : '' });
      return n;
    });
    const st = getS(), s = sessOf(st, id);
    const t = isExam(st, id) && !s.fin && elapsed(s) >= s.lim ? setTimeout(() => act.current.examDeliver(), 400) : null;
    return () => {
      alive.current = false;
      clearTimeout(t);
      // en sortir de la pregunta (fora del simulacre) el rellotge es posa en pausa
      const x = getS();
      if (x.sess[id] && !isExam(x, id)) updSess(id, pauseClock);
    };
  }, [id]);

  // avisos sonors i temps esgotat
  useEffect(() => {
    const t = setInterval(() => {
      const st = getS(), s = st.sess[id];
      if (!s || !s.on || s.fin) return;
      const rem = s.lim - elapsed(s);
      const b0 = s.beeps || {};
      let b = b0, up = false;
      if (rem <= 300 && rem > 290 && !b.b5) { b = { ...b, b5: 1 }; beep(1, st.set.sound); }
      if (rem <= 60 && !b.b1) { b = { ...b, b1: 1 }; beep(2, st.set.sound); }
      if (rem <= 0 && !b.b0) { b = { ...b, b0: 1 }; beep(3, st.set.sound); up = true; }
      if (b !== b0) updSess(id, (x) => ({ ...x, beeps: b }));
      if (up && isExam(getS(), id)) act.current.examDeliver();
    }, 250);
    return () => clearInterval(t);
  }, [id]);

  const statement = useMemo(() => statementHTML(ex, L), [ex, L]);
  const rv = review(code, ex, L);
  const nNo = rv.filter((x) => x.k === 'no').length, nWa = rv.filter((x) => x.k === 'wa').length;
  const gate = !ss.started || (!exam && ss.started && !ss.on && !ss.fin);
  const off = busy || !ss.started || (ss.started && !ss.on && !ss.fin && !exam);
  const qn = exam ? S.exam.i + 1 : levelList(ex.lv).findIndex((x) => x.id === id) + 1;
  const pen = ex.penalty || '10, 20, ... %';
  const state = !ss.started ? L('Encara no s\'ha respost', 'Aún no se ha respondido') : ss.fin ? L('Correcta', 'Correcta') : ss.checks ? L('Incorrecta', 'Incorrecta')
    : (code.trim() && code !== TPL ? L('Resposta incompleta o no comprovada', 'Respuesta incompleta o no comprobada') : L('Encara no s\'ha respost', 'Aún no se ha respondido'));
  const resOk = res && res.rows && !res.running ? res.rows.filter((r) => r.pass).length : 0;
  const resBadge = res && res.rows && !res.running ? { t: resOk + '/' + res.total, c: res.compileErr ? 'bad' : resOk === res.total && res.rows.length === res.total ? 'ok' : 'bad' } : { t: '', c: '' };
  const goto = (l, c) => edRef.current?.focusAt(l, c);
  const onCode = (v) => {
    setErrLines((e) => (e.length ? [] : e));
    if (v !== getCode()) updProg(id, { code: v });
  };
  const canSol = () => { const s = sessOf(getS(), id); return s.fin || elapsed(s) >= s.lim; };
  const markHelp = () => updSess(id, (x) => ({ ...x, help: true }));

  const crumbs = exam
    ? [[L('C++ a contrarellotge', 'C++ a contrarreloj'), 'list'], [L('Simulacre', 'Simulacro'), 'exam'], [L('Pregunta ', 'Pregunta ') + qn]]
    : [[L('C++ a contrarellotge', 'C++ a contrarreloj'), 'list'], [L('Exercicis', 'Ejercicios'), 'list'], [LVN[ex.lv], 'lv:' + ex.lv], [ex.title || L('Exercici curt', 'Ejercicio corto')]];

  return (
    <Page crumbs={crumbs} icon h1={exam ? L('Simulacre d\'examen', 'Simulacro de examen') : L('Pràctica · Nivell ', 'Práctica · Nivel ') + LVN[ex.lv].toLowerCase()}
      tab={exam ? 'exam' : 'list'}
      drawer={<QuizDrawer id={id} ex={ex} ss={ss} exam={exam} askClock={askClock} setAskClock={setAskClock} finConf={finConf} setFinConf={setFinConf} passing={passing} act={act} />}>
      {!exam && <button type="button" className="btn btn-secondary" id="back" onClick={() => navigate('/cpp')}>{L('Enrere', 'Atrás')}</button>}
      <OverBanner id={id} exam={exam} />
      <div className="que coderunner">
        <div className="info" id="qinfo">
          <h3 className="no">{L('Pregunta ', 'Pregunta ')}<b>{qn}</b></h3>
          <div>{state}</div>
          <div>{ss.fin ? L('Puntuació ', 'Puntuación ') + grade2(ss.grade) + L(' sobre ', ' sobre ') + '1,00' : L('Puntuat sobre ', 'Puntuado sobre ') + '1,00'}</div>
          <div className="lv">{LVN[ex.lv]}</div>
          <button type="button" className={'flag' + (p.flag ? ' on' : '')} id="qflag" onClick={() => updProg(id, (q) => ({ flag: !q.flag }))}>
            <FlagIcon />{p.flag ? L('Treu la marca', 'Quita la marca') : L('Marca la pregunta', 'Marca la pregunta')}
          </button>
        </div>
        <div className="content">
          <div className="formulation" id="formul">
            <Rich className="qtext" html={statement} />
            <div className="ans-head"><b>{L('Resposta:', 'Respuesta:')}</b>({L('règim de penalització: ', 'régimen de penalización: ') + pen})</div>
            <button type="button" className="btn btn-secondary" id="b-reset" disabled={off} onClick={() => setRsconf(true)}>{L('Reinicia la resposta', 'Reinicia la respuesta')}</button>
            <span id="rsconf">
              {rsconf && (
                <>{' '}<span className="confirm">{L('Es tornarà a la plantilla inicial. El rellotge continua.', 'Se volverá a la plantilla inicial. El reloj continúa.')}
                  <button type="button" className="btn btn-primary btn-sm" id="ra-y" onClick={() => { setRsconf(false); updProg(id, { code: getS().set.tpl ? TPL : '' }); }}>{L('Reinicia', 'Reinicia')}</button>
                  <button type="button" className="btn btn-secondary btn-sm" id="ra-n" onClick={() => setRsconf(false)}>{L('Cancel·la', 'Cancela')}</button>
                </span></>
              )}
            </span>
            <div className="edbox">
              <CodeEditor id="ed" ref={edRef} value={code} onChange={onCode} readOnly={gate ? 'nocursor' : false} errLines={errLines} focusTpl={TPL}
                onRun={() => act.current.doSuite('ex')} onCheck={() => act.current.doSuite('all')} />
            </div>
            <div className="im-controls">
              <button type="button" className="btn btn-secondary" id="b-run" disabled={off} title={L('Compila i executa amb l\'entrada de la consola', 'Compila y ejecuta con la entrada de la consola')} onClick={() => doRun()}>{L('Executa', 'Ejecuta')}</button>
              <button type="button" className="btn btn-secondary" id="b-ex" disabled={off} title="Ctrl+Enter" onClick={() => doSuite('ex')}>{L('Prova els exemples', 'Prueba los ejemplos')}</button>
              <button type="button" className="btn btn-secondary" id="b-chk" disabled={off} title="Ctrl+Shift+Enter" onClick={() => doSuite('all')}>{L('Comprova', 'Comprueba')}</button>
              <span className="grade" id="ainfo">
                {ss.fin ? <>{L('Puntuació: ', 'Puntuación: ')}<b>{grade2(ss.grade)}</b>/1,00</>
                  : ss.checks ? <>{L('Puntuació màxima ara: ', 'Puntuación máxima ahora: ')}<b>{grade2(gradeNow(ex, ss))}</b></> : null}
              </span>
            </div>
            {gate && (
              <div className="gate">
                <div className="box">
                  <h4>{ss.started ? L('En pausa', 'En pausa') : L('Pregunta ', 'Pregunta ') + qn + ' · ' + LVN[ex.lv]}</h4>
                  <div className="small muted">{ss.started ? L('Temps restant', 'Tiempo restante') : L('Límit de temps', 'Límite de tiempo')}</div>
                  <div className="big">{ss.started ? mmss(Math.max(0, ss.lim - elapsed(ss))) : mmss(ss.lim)}</div>
                  <p className="small muted gate-p">{ss.started
                    ? L('A l\'examen el rellotge no s\'atura. Fes servir la pausa només per a interrupcions.', 'En el examen el reloj no se para. Usa la pausa solo para interrupciones.')
                    : L('El rellotge comença quan obres l\'enunciat, igual que a l\'examen. Objectiu per a aquest nivell: ', 'El reloj empieza cuando abres el enunciado, igual que en el examen. Objetivo para este nivel: ') + TARGET[ex.lv] + ' min.'}</p>
                  <button type="button" className="btn btn-primary" id="startbtn" onClick={() => act.current.start()}>{ss.started ? L('Continua', 'Continúa') : L('Comença', 'Empieza')}</button>
                </div>
              </div>
            )}
          </div>
          <div className="outcome">
            <div className="ntabs" role="tablist">
              <button type="button" role="tab" data-t="cons" aria-selected={tab === 'cons'} onClick={() => setTab('cons')}>{L('Consola', 'Consola')}</button>
              <button type="button" role="tab" data-t="res" aria-selected={tab === 'res'} onClick={() => setTab('res')}>{L('Proves', 'Pruebas')}<span className={'badge ' + resBadge.c} id="bdg-res">{resBadge.t}</span></button>
              <button type="button" role="tab" data-t="rev" aria-selected={tab === 'rev'} onClick={() => setTab('rev')}>{L('Revisió de l\'enunciat', 'Revisión del enunciado')}<span className={'badge ' + (nNo ? 'bad' : nWa ? 'warn' : '')} id="bdg-rev">{nNo || nWa || ''}</span></button>
            </div>
            <div className="pane" id="pane">
              {tab === 'cons' && (
                <>
                  <div className="lblrow">
                    <label htmlFor="stdin">{L('Entrada del programa (stdin)', 'Entrada del programa (stdin)')}</label>
                    <div className="btn-row">
                      {ex.examples.map((e, i) => <button key={i} type="button" className="btn btn-secondary btn-sm" data-exin={i} onClick={() => setStdin(e.in)}>{L('Exemple ', 'Ejemplo ') + (i + 1)}</button>)}
                    </div>
                  </div>
                  <textarea className="stdin" id="stdin" spellCheck={false} value={stdin} onChange={(e) => setStdin(e.target.value)} />
                  <div className="lblrow"><span className="lbl">{L('Sortida', 'Salida')}</span><span className="tiny muted">{eng.mode === 'interp' ? L('intèrpret JSCPP', 'intérprete JSCPP') : 'clang++ -std=gnu++17 -Wall'}</span></div>
                  <pre className="console" id="console">{out ? <ConsoleParts parts={out} onGoto={goto} /> : <ConsoleParts parts={[['sys', 'placeholder']]} />}</pre>
                </>
              )}
              {tab === 'res' && <Results R={res} ex={ex} ss={ss} exam={exam} hid={hid} onShowHidden={() => setHid((h) => !h)} onDiag={goto}
                onGoto={(g) => navigate(g === 'list' ? '/cpp' : '/cpp/' + g)} />}
              {tab === 'rev' && (
                <>
                  <p className="small m0">{L('CodeRunner només mira la sortida, però el professor també revisa que hagis seguit l\'enunciat. Aquesta revisió és automàtica i aproximada.', 'CodeRunner solo mira la salida, pero el profesor también revisa que hayas seguido el enunciado. Esta revisión es automática y aproximada.')}</p>
                  <div className="checks">
                    {rv.map((x, i) => <div key={i} className={x.k}><span className="i">{x.k === 'ok' ? '✓' : x.k === 'no' ? '✗' : '!'}</span><span>{x.t}</span></div>)}
                  </div>
                </>
              )}
            </div>
          </div>
          <div id="helpzone">
            {!exam && ss.started && (
              <div className="genfb">
                <div className="btn-row">
                  <button type="button" className="btn btn-link" id="h-hint" onClick={() => { const v = !showHint; setShowHint(v); if (v) markHelp(); }}>
                    {showHint ? L('Amaga la pista', 'Oculta la pista') : L('Mostra una pista', 'Muestra una pista')}
                  </button>
                  <button type="button" className="btn btn-link" id="h-sol" onClick={() => {
                    if (showSol) { setShowSol(false); return; }
                    if (canSol()) { setShowSol(true); markHelp(); } else setAskSol(true);
                  }}>
                    {showSol ? L('Amaga la solució', 'Oculta la solución') : L('Mostra una solució de referència', 'Muestra una solución de referencia')}
                  </button>
                  {askSol && (
                    <span className="confirm">{L('Encara tens temps. La vols veure igualment?', 'Aún tienes tiempo. ¿La quieres ver igualmente?')}
                      <button type="button" className="btn btn-primary btn-sm" id="sol-y" onClick={() => { setAskSol(false); setShowSol(true); markHelp(); }}>{L('Sí', 'Sí')}</button>
                      <button type="button" className="btn btn-secondary btn-sm" id="sol-n" onClick={() => setAskSol(false)}>No</button>
                    </span>
                  )}
                </div>
                {showHint && <><div className="h mt8">{L('Pista', 'Pista')}</div><Rich html={inl(ex.hint)} /></>}
                {showSol && <><div className="h mt10">{L('Una solució possible', 'Una solución posible')}</div><CodeEditor id="solcm" viewer value={ex.sol} /></>}
              </div>
            )}
          </div>
        </div>
      </div>
    </Page>
  );
}
