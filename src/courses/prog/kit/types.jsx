/**
 * Tipus d'exercici propis de Programació (course.types de la plantilla).
 *   cpp     programa de C++ amb proves, com el CodeRunner de l'examen: editor, «Executa» amb una entrada,
 *           «Prova els exemples» (sense compromís) i «Comprova» (exemples + proves ocultes). Només puntua
 *           si passa totes les proves. Fa servir el motor compartit (Clang en WebAssembly o l'intèrpret lleuger).
 *   pseudo  algorisme en el pseudocodi del curs: l'intèrpret en revisa la notació i l'executa amb els jocs
 *           de proves. Al simulacre: 70 % proves i 30 % notació, com el CP.
 * El valor de la resposta és { code, res }: res és el resultat de la darrera comprovació.
 */
import { useEffect, useRef, useState } from 'react';
import { useLang } from '../../../lib/i18n.jsx';
import { lsJSON, lsSetJSON } from '../../../lib/storage.js';
import { compile, getSnapshot, restart, run, start } from '../../../shared/cpp/engine.js';
import { useCppEngine } from '../../../shared/cpp/useCppEngine.js';
import CodeEditor from '../../cpp/components/CodeEditor.jsx';
import { ConsoleParts, DiffGot, Vis, runParts, waitKey } from '../../cpp/components/Output.jsx';
import { errLinesOf, mmss, norm, trapMsg } from '../../cpp/lib/format.js';
import { review } from '../../cpp/lib/review.js';
import { TPL } from '../../cpp/lib/data.js';
import { check as psCheck, lint as psLint, run as psRun } from '../../pseudo/engine/interp.js';
import { TEMPLATE as PS_TPL } from '../../pseudo/data/editor.js';
import { engPref, setEngPref } from './eng.js';
import { CodeEditor as PsEditor, Msgs, TestsTable } from '../../pseudo/ui.jsx';

const PS = {
  ca: {
    run: 'Executa', examples: 'Prova els exemples', check: 'Comprova', input: 'Entrada del programa', output: 'Sortida', reset: 'Plantilla buida',
    allOk: 'Totes les proves superades.', exOk: 'Els exemples surten bé. Ara prem «Comprova» per passar també les proves ocultes.', exKo: (a, b) => a + '/' + b + ' exemples correctes.',
    allKo: (a, b) => a + '/' + b + ' proves superades. Ha de superar-les totes per puntuar.', cerr: 'Error de compilació.', hidden: 'Prova oculta', example: 'Exemple',
    showHidden: 'Mostra les proves ocultes', expected: 'Esperat', got: 'Obtingut', test: 'Prova', forExample: 'Per exemple:', result: 'Resultat',
    hidOk: 'superada', hidKo: 'no superada', running: 'Executant les proves…', compiling: 'Compilant…', review: 'Revisió de l\'enunciat',
    target: (m) => 'objectiu ' + m + ' min', engine: 'Motor', clang: 'Clang 22 (real, 29 MB el primer cop)', interp: 'Intèrpret lleuger',
    examNote: 'Prem «Comprova» abans de lliurar: com al CodeRunner, la pregunta només puntua si passa totes les proves.',
    psOk: 'Tot correcte: passa tots els jocs de proves i la notació és la del curs.', psSyn: 'Error de sintaxi', psNot: (n) => n + ' errors de notació',
    psPass: (a, b) => a + '/' + b + ' proves superades', ownIn: 'Prova amb una entrada pròpia:', left: (n) => 'Han sobrat ' + n + ' dades d\'entrada sense llegir.',
    psExample: 'Exemple: entrada', psMust: 'ha de sortir', psLabel: 'Pseudocodi',
  },
  es: {
    run: 'Ejecuta', examples: 'Prueba los ejemplos', check: 'Comprueba', input: 'Entrada del programa', output: 'Salida', reset: 'Plantilla vacía',
    allOk: 'Todas las pruebas superadas.', exOk: 'Los ejemplos salen bien. Ahora pulsa «Comprueba» para pasar también las pruebas ocultas.', exKo: (a, b) => a + '/' + b + ' ejemplos correctos.',
    allKo: (a, b) => a + '/' + b + ' pruebas superadas. Tiene que superarlas todas para puntuar.', cerr: 'Error de compilación.', hidden: 'Prueba oculta', example: 'Ejemplo',
    showHidden: 'Muestra las pruebas ocultas', expected: 'Esperado', got: 'Obtenido', test: 'Prueba', forExample: 'Por ejemplo:', result: 'Resultado',
    hidOk: 'superada', hidKo: 'no superada', running: 'Ejecutando las pruebas…', compiling: 'Compilando…', review: 'Revisión del enunciado',
    target: (m) => 'objetivo ' + m + ' min', engine: 'Motor', clang: 'Clang 22 (real, 29 MB la primera vez)', interp: 'Intérprete ligero',
    examNote: 'Pulsa «Comprueba» antes de entregar: como en el CodeRunner, la pregunta solo puntúa si pasa todas las pruebas.',
    psOk: 'Todo correcto: pasa todos los juegos de pruebas y la notación es la del curso.', psSyn: 'Error de sintaxis', psNot: (n) => n + ' errores de notación',
    psPass: (a, b) => a + '/' + b + ' pruebas superadas', ownIn: 'Prueba con una entrada propia:', left: (n) => 'Han sobrado ' + n + ' datos de entrada sin leer.',
    psExample: 'Ejemplo: entrada', psMust: 'debe salir', psLabel: 'Pseudocódigo',
  },
};
PS.en = {
  run: 'Run', examples: 'Try the examples', check: 'Check', input: 'Program input', output: 'Output', reset: 'Empty template',
  allOk: 'All tests passed.', exOk: 'The examples come out right. Now press “Check” to run the hidden tests too.', exKo: (a, b) => a + '/' + b + ' examples correct.',
  allKo: (a, b) => a + '/' + b + ' tests passed. It must pass them all to score.', cerr: 'Compilation error.', hidden: 'Hidden test', example: 'Example',
  showHidden: 'Show the hidden tests', expected: 'Expected', got: 'Obtained', test: 'Test', forExample: 'For example:', result: 'Result',
  hidOk: 'passed', hidKo: 'not passed', running: 'Running the tests…', compiling: 'Compiling…', review: 'Review of the statement',
  target: (m) => 'target ' + m + ' min', engine: 'Engine', clang: 'Clang 22 (real, 29 MB the first time)', interp: 'Lightweight interpreter',
  examNote: 'Press “Check” before handing in: as in CodeRunner, the question only scores if it passes all the tests.',
  psOk: 'All correct: it passes all the test sets and the notation is the course one.', psSyn: 'Syntax error', psNot: (n) => n + ' notation errors',
  psPass: (a, b) => a + '/' + b + ' tests passed', ownIn: 'Try your own input:', left: (n) => n + ' input data items were left unread.',
  psExample: 'Example: input', psMust: 'must output', psLabel: 'Pseudocode',
};

/* esborranys: el codi de cada exercici es desa en aquest dispositiu */
const DRAFTS = 'kit-prog-drafts';
const draftOf = (id) => (lsJSON(DRAFTS, {}) || {})[id];
const saveDraft = (id, code) => { const d = lsJSON(DRAFTS, {}) || {}; d[id] = code; lsSetJSON(DRAFTS, d); };


function EngLine() {
  const { ui, L } = useLang();
  const P = PS[ui];
  const e = useCppEngine();
  const pref = engPref();
  const state = e.mode === 'interp' ? P.interp : e.state === 'loading' ? 'Clang · ' + Math.round(e.pct * 100) + '%' : e.state === 'warming' ? 'Clang…' : e.state === 'ready' ? 'Clang 22 · C++17' : '';
  return (
    <label className="pg-eng">
      <span>{P.engine}</span>
      <select className="am-input" value={pref} onChange={(ev) => { setEngPref(ev.target.value); restart(ev.target.value); }} aria-label={P.engine}>
        <option value="clang">{P.clang}</option>
        <option value="interp">{P.interp}</option>
      </select>
      {state && <span className="pg-engst">{state}</span>}
      {e.mode === 'interp' && e.why ? <span className="pg-engst">{L("(Clang no s'ha pogut carregar)", '(Clang no se ha podido cargar)', '(Clang could not be loaded)')}</span> : null}
    </label>
  );
}

/** Taula d'exemples de l'enunciat (entrada → resultat). */
function Examples({ ex }) {
  const { ui } = useLang();
  const P = PS[ui];
  const named = ex.examples.some((e) => e.name);
  return (
    <>
      <p className="pg-exh"><b>{P.forExample}</b></p>
      <div className="kit-tw">
        <table className="kit-table pg-extab">
          <thead><tr>{named && <th>{P.test}</th>}<th>{P.input}</th><th>{P.result}</th></tr></thead>
          <tbody>{ex.examples.map((e, i) => (
            <tr key={i}>{named && <td><pre>{e.name}</pre></td>}<td><pre>{e.in.replace(/\n$/, '')}</pre></td><td><pre>{e.out.replace(/\n$/, '')}</pre></td></tr>
          ))}</tbody>
        </table>
      </div>
    </>
  );
}

/** Executa els exemples (i, amb all, les proves ocultes): { ok, nOk, total, rows, compileErr, diags }. */
async function suite(ex, code, all, onRow) {
  await start(engPref());
  const tests = ex.examples.map((t, i) => ({ name: t.name || null, n: i + 1, in: t.in, exp: t.out, hidden: false }))
    .concat(all ? (ex.tests || []).map((t, i) => ({ n: i + 1, in: t.in, exp: t.out, hidden: true })) : []);
  const c = await compile(code);
  if (!c.ok) return { all, ok: false, nOk: 0, total: tests.length, compileErr: true, diags: c.diags, rows: [] };
  const rows = [];
  for (const t of tests) {
    const r = await run(c, t.in);
    if (r.kind === 'compile') return { all, ok: false, nOk: 0, total: tests.length, compileErr: true, diags: [String(r.error)], rows: [] };
    const got = r.stdout || '';
    const err = r.kind !== 'ok' ? { trap: r } : r.exitCode ? { exit: r.exitCode } : null;
    rows.push({ ...t, got, err, pass: !err && norm(got) === norm(t.exp) });
    onRow?.(rows.length, tests.length);
  }
  const nOk = rows.filter((r) => r.pass).length;
  return { all, ok: nOk === tests.length, nOk, total: tests.length, rows, diags: c.diags };
}

function Results({ R, exam }) {
  const { ui, L } = useLang();
  const P = PS[ui];
  const e = useCppEngine();
  const [showHid, setShowHid] = useState(false);
  if (R.compileErr) return <pre className="console pg-console"><span className="err">{P.cerr + '\n' + (R.diags || []).join('\n')}</span></pre>;
  const errMsg = (x) => (x.trap ? trapMsg(x.trap, L, e.mode) : L('El programa ha acabat amb el codi ', 'El programa ha terminado con el código ', 'The program ended with code ') + x.exit);
  const hidOpen = showHid && !exam;
  return (
    <>
      <div className="tblwrap">
        <table className="coderunner-test-results">
          <thead><tr><th /><th>{P.test}</th><th>{P.input}</th><th>{P.expected}</th><th>{P.got}</th></tr></thead>
          <tbody>{R.rows.map((r, i) => (
            <tr key={i} className={r.pass ? 'pass' : 'fail'}>
              <td className={'ic ' + (r.pass ? 'p' : 'f')}>{r.pass ? '✓' : '✗'}</td>
              <td>{r.name || (r.hidden ? P.hidden : P.example) + ' ' + r.n}</td>
              {r.hidden && !hidOpen
                ? <td colSpan={3} className="small">{P.hidden + ' ' + (r.pass ? P.hidOk : P.hidKo)}</td>
                : (
                  <>
                    <td><pre>{r.in.replace(/\n$/, '')}</pre></td>
                    <td><pre><Vis s={norm(r.exp)} /></pre></td>
                    <td><pre>{r.err ? <><span className="rerr">{errMsg(r.err)}</span>{r.got ? <>{'\n'}<Vis s={r.got} /></> : null}</> : r.pass ? <Vis s={norm(r.got)} /> : <DiffGot exp={norm(r.exp)} got={norm(r.got)} />}</pre></td>
                  </>
                )}
            </tr>
          ))}</tbody>
        </table>
      </div>
      {!exam && R.rows.some((r) => r.hidden) && !showHid && <button type="button" className="kit-link pg-showhid" onClick={() => setShowHid(true)}>{P.showHidden}</button>}
    </>
  );
}

/* ---------- C++ ---------- */
function Cpp({ ex, value, onChange, disabled, checked, onCheck, exam }) {
  const { ui, L } = useLang();
  const P = PS[ui];
  const v = value || {};
  const [code, setCode] = useState(() => v.code ?? (exam ? null : draftOf(ex.id)) ?? TPL);
  const [stdin, setStdin] = useState(() => (ex.examples[0] || {}).in || '');
  const [out, setOut] = useState(null);
  const [R, setR] = useState(v.res || null);
  const [busy, setBusy] = useState(null);
  const [errLines, setErrLines] = useState([]);
  const [t0, setT0] = useState(null);
  const [t1, setT1] = useState(null);
  const [now, setNow] = useState(Date.now());
  const edRef = useRef(null);
  const alive = useRef(true);
  useEffect(() => () => { alive.current = false; }, []);
  const solved = R && R.all && R.ok;
  // rellotge de l'exercici (a la pràctica): comença en escriure i s'atura en resoldre'l
  useEffect(() => {
    if (exam || !t0 || solved) return undefined;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [exam, t0, solved]);
  const edit = (c) => {
    if (c === code) return;
    setCode(c);
    if (!t0) setT0(Date.now());
    if (!exam) saveDraft(ex.id, c);
    onChange({ ...v, code: c, res: exam ? v.res : null });
  };
  const doRun = async () => {
    if (busy) return;
    setBusy('run');
    await start(engPref());
    setOut([['sys', waitKey(getSnapshot())]]);
    const c = await compile(code);
    if (!alive.current) return;
    const o = [];
    if (c.diags && c.diags.length) o.push(['diags', c.diags], ['nl']);
    if (!c.ok) { o.push(['nocompile']); setErrLines(errLinesOf(c.diags)); setOut(o); }
    else {
      setErrLines([]);
      if (!c.interp) o.push(['compiled', c.ms], ['nl']);
      setOut([...o, ['sys', 'executing']]);
      const r = await run(c, stdin);
      if (!alive.current) return;
      setOut(runParts(o, r));
    }
    setBusy(null);
  };
  const doSuite = async (all) => {
    if (busy) return;
    setBusy(all ? 'check' : 'examples');
    const res = await suite(ex, code, all);
    if (!alive.current) return;
    setErrLines(res.compileErr ? errLinesOf(res.diags) : []);
    setR(res);
    setBusy(null);
    if (all) {
      if (res.ok && !t1) setT1(Date.now());
      onChange({ ...v, code, res: { all: true, ok: res.ok, nOk: res.nOk, total: res.total } });
      if (!exam) onCheck?.(res.ok);
    }
  };
  const elapsed = t0 ? Math.round(((solved && t1) || now) - t0) / 1000 : 0;
  const rev = R && R.all && ex.rules ? review(code, ex, L) : null;
  return (
    <div className="pg-cpp" data-course="cpp">
      <Examples ex={ex} />
      <div className="edbox"><CodeEditor ref={edRef} value={code} onChange={edit} readOnly={disabled ? 'nocursor' : false} errLines={errLines} focusTpl={TPL}
        onRun={() => doRun()} onCheck={() => doSuite(true)} /></div>
      <div className="pg-acts">
        <button type="button" className="btn btn-secondary pg-run" disabled={!!busy || disabled} onClick={doRun}>{P.run}</button>
        <button type="button" className="btn btn-secondary pg-ex" disabled={!!busy || disabled} onClick={() => doSuite(false)}>{P.examples}</button>
        <button type="button" className="btn btn-primary pg-chk" disabled={!!busy || disabled} onClick={() => doSuite(true)}>{P.check}</button>
        {!exam && ex.lv && <span className="pg-clock" title={P.target(ex.min || 10)}>⏱ {mmss(elapsed)} · {P.target(ex.min || 10)}</span>}
      </div>
      {exam && !checked && <p className="pg-note">{P.examNote}</p>}
      <EngLine />
      <details className="pg-io">
        <summary>{P.input} · {P.output}</summary>
        <textarea className="stdin pg-stdin" spellCheck={false} value={stdin} disabled={disabled} onChange={(e) => setStdin(e.target.value)} aria-label={P.input} />
        <pre className="console pg-console"><ConsoleParts parts={out || [['sys', 'placeholder']]} onGoto={(l, c) => edRef.current?.focusAt(l, c)} /></pre>
      </details>
      {busy && busy !== 'run' && <p className="pg-busy"><span className="spin" /> {getSnapshot().state === 'ready' || getSnapshot().mode === 'interp' ? P.running : P.compiling}</p>}
      {R && !busy && R.rows && (
        <div className="pg-res">
          <p className={'kit-fb ' + (R.ok ? 'is-ok' : 'is-ko')} role="status">
            {R.compileErr ? P.cerr : R.all ? (R.ok ? P.allOk : P.allKo(R.nOk, R.total)) : R.ok ? P.exOk : P.exKo(R.nOk, R.total)}
          </p>
          <Results R={R} exam={exam && !checked} />
        </div>
      )}
      {rev && (
        <div className="pg-rev"><p><b>{P.review}</b></p>
          <ul className="checks">{rev.map((x, i) => <li key={i} className={x.k}>{x.k === 'ok' ? '✓ ' : x.k === 'no' ? '✗ ' : '! '}{x.t}</li>)}</ul>
        </div>
      )}
    </div>
  );
}

function PrintCpp({ ex }) {
  return (
    <div className="kp-gen">
      <Examples ex={ex} />
      <div className="kp-space kp-lines" style={{ '--rows': ex.lv >= 3 ? 22 : 14 }} />
    </div>
  );
}

/* ---------- pseudocodi ---------- */
/** Nota com al CP: 70 % jocs de proves i 30 % notació (0 si és la plantilla buida). */
export function psGrade(ex, code) {
  const src = code || '';
  if (!src.trim() || src.trim() === PS_TPL.trim()) return { score: 0, pass: 0 };
  const lt = psLint(src), c = psCheck(src, ex.tests);
  const E = lt.msgs.filter((m) => m.lv === 'E').length, W = lt.msgs.filter((m) => m.lv === 'W').length;
  const pass = c.parsed ? c.results.filter((r) => r.ok).length / c.results.length : 0;
  return { score: 0.7 * pass + 0.3 * Math.max(0, 1 - 0.25 * E - 0.1 * W), pass, ok: c.parsed && c.all && !E, lt, c, errs: E };
}

function Pseudo({ ex, value, onChange, disabled, checked, onCheck, exam }) {
  const { ui } = useLang();
  const P = PS[ui];
  const v = value || {};
  const [code, setCode] = useState(() => v.code ?? (exam ? null : draftOf(ex.id)) ?? PS_TPL);
  const [input, setInput] = useState('');
  const [out, setOut] = useState(null);
  const edit = (c) => { setCode(c); if (!exam) saveDraft(ex.id, c); onChange({ ...v, code: c }); };
  const doCheck = () => {
    const g = psGrade(ex, code);
    setOut({ k: 'check', ...g });
    if (!exam) onCheck?.(!!g.ok);
  };
  const doRun = () => setOut({ k: 'run', r: psRun(code, input) });
  const shown = exam && checked ? { k: 'check', ...psGrade(ex, code) } : out;
  return (
    <div className="pg-ps" data-course="pseudo">
      <div className="tiny muted">{P.psExample} <span className="f">{ex.tests[0].in.join(' ')}</span> → {P.psMust} <span className="f">{ex.tests[0].out.join(' … ')}</span></div>
      <PsEditor id={'ed-' + ex.id} value={code} onChange={edit} readOnly={disabled} label={P.psLabel} />
      {!disabled && (
        <div className="row">
          <button type="button" className="btn primary pg-chk" onClick={doCheck}>{P.check}</button>
          <button type="button" className="btn ghost pg-reset" onClick={() => edit(PS_TPL)}>{P.reset}</button>
        </div>
      )}
      {!disabled && (
        <div className="row">
          <span className="small">{P.ownIn}</span>
          <input type="text" className="p-in pg-in" placeholder="5 7 9 -1" value={input} onChange={(e) => setInput(e.target.value)} />
          <button type="button" className="btn pg-run" onClick={doRun}>{P.run}</button>
        </div>
      )}
      {shown && shown.k === 'run' && (shown.r.ok
        ? <div className="fb info"><b>{P.output}</b><pre className="ps p-mt6">{shown.r.out.join('\n') || '—'}</pre>{shown.r.left ? <div className="tiny">{P.left(shown.r.left)}</div> : null}</div>
        : <div className="fb bad">{shown.r.err}{shown.r.out.length ? <pre className="ps p-mt6">{shown.r.out.join('\n')}</pre> : null}</div>)}
      {shown && shown.k === 'check' && shown.c && (
        <>
          <div className={'fb ' + (shown.ok ? 'ok' : 'bad')}>{shown.ok ? P.psOk : <><b>{shown.c.parsed ? P.psPass(shown.c.results.filter((r) => r.ok).length, shown.c.results.length) : P.psSyn}</b>{shown.errs ? ' · ' + P.psNot(shown.errs) : null}</>}</div>
          <Msgs msgs={shown.lt.msgs} />
          <TestsTable c={shown.c} />
        </>
      )}
    </div>
  );
}

function PrintPseudo({ ex }) {
  const { ui } = useLang();
  const P = PS[ui];
  return (
    <div className="kp-gen">
      <p className="tiny">{P.psExample} {ex.tests[0].in.join(' ')} → {P.psMust} {ex.tests[0].out.join(' … ')}</p>
      <div className="kp-space kp-lines" style={{ '--rows': 18 }} />
    </div>
  );
}

/** Clau del full de solucions: tots els jocs de proves (exemples i ocults) amb la sortida esperada. */
function KeyTests({ ex }) {
  const { ui } = useLang();
  const P = PS[ui];
  const ps = ex.type === 'pseudo';
  const rows = ps
    ? ex.tests.map((t) => [t.in.join(' '), t.out.join(' ')])
    : ex.examples.concat(ex.tests || []).map((t) => [t.in.replace(/\n$/, ''), t.out.replace(/\n$/, '')]);
  return (
    <div className="kit-tw">
      <table className="kit-table pg-extab">
        <thead><tr><th>{P.test}</th><th>{P.input}</th><th>{P.expected}</th></tr></thead>
        <tbody>{rows.map(([i, o], n) => <tr key={n}><td>{n + 1}</td><td><pre>{i}</pre></td><td><pre>{o}</pre></td></tr>)}</tbody>
      </table>
    </div>
  );
}

export const PROG_TYPES = {
  cpp: {
    inline: true,
    Input: Cpp,
    // com al CodeRunner: tot o res, segons la darrera comprovació
    check: (ex, v) => (v && v.res && v.res.all ? v.res.ok : false),
    space: 'none',
    Print: PrintCpp,
    Key: KeyTests,
  },
  pseudo: {
    inline: true,
    Input: Pseudo,
    check: (ex, v) => { const g = psGrade(ex, v && v.code); return g.ok ? true : g.score; },
    space: 'none',
    Print: PrintPseudo,
    Key: KeyTests,
  },
};
