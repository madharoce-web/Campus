/**
 * Laboratoris propis de Programació dins de la plantilla:
 *   exlist  els exercicis de C++ de la setmana, amb el que ja està resolt (enllacen amb la Pràctica)
 *   pati    el pati de proves: C++ lliure amb una entrada, sense proves (el codi i l'entrada es desen)
 */
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../../lib/i18n.jsx';
import { lsGet, lsSet } from '../../../lib/storage.js';
import { compile, getSnapshot, run, start } from '../../../shared/cpp/engine.js';
import { useCppEngine } from '../../../shared/cpp/useCppEngine.js';
import { useKit } from '../../_kit/state.js';
import { useTr } from '../../_kit/text.jsx';
import CodeEditor from '../../cpp/components/CodeEditor.jsx';
import { ConsoleParts, runParts, waitKey } from '../../cpp/components/Output.jsx';
import { TPL } from '../../cpp/lib/data.js';
import exercises from './exercises.js';
import { engPref } from './eng.js';

const CPP = exercises.items.filter((x) => x.type === 'cpp');
export const PATI_CODE = 'ip-pati-code';
export const PATI_IN = 'ip-pati-in';

/** Primera frase de l'enunciat (per als exercicis sense títol). */
const nameOf = (x, tr) => tr(x.title) || String(tr((x.qb.find((b) => b.t === 'p') || {}).x) || '').replace(/\*\*|`/g, '').replace(/^(.{68}).+$/, '$1…');

export function ExList({ wk }) {
  const { L } = useLang();
  const tr = useTr();
  const st = useKit('prog');
  const unit = 's' + wk;
  const list = CPP.filter((x) => x.unit === unit);
  const done = list.filter((x) => st.practice[x.id]?.ok).length;
  const LVN = { 1: L('Fàcil', 'Fácil', 'Easy'), 2: L('Mitjà', 'Medio', 'Medium'), 3: L('Difícil', 'Difícil', 'Hard'), 4: L('Extrem', 'Extremo', 'Extreme') };
  return (
    <div className="ip-exs" data-wk={wk}>
      <div className="ip-exsh">
        <b>{L('Exercicis de la setmana amb compilador i proves', 'Ejercicios de la semana con compilador y pruebas', 'This week\'s exercises with a compiler and tests')}</b>
        <span className={'ip-badge' + (done === list.length && list.length ? ' done' : '')}>{done + ' / ' + list.length + L(' resolts', ' resueltos', ' solved')}</span>
        <Link className="ip-btn out sm" to={'/programacio/practica?unit=' + unit}>{L('Obre-los a la Pràctica', 'Ábrelos en la Práctica', 'Open them in Practice')}</Link>
      </div>
      {list.map((x) => (
        <div className="ip-exrow" key={x.id}>
          <div className="ip-actb"><Link to={'/programacio/practica?unit=' + unit + '&ex=' + x.id}>{nameOf(x, tr)}</Link><div className="ip-actd">{(x.tags || []).join(', ')}</div></div>
          <span className={'ip-badge lv' + x.lv}>{LVN[x.lv]}</span>
          <span className={'ip-badge' + (st.practice[x.id]?.ok ? ' done' : '')}>{st.practice[x.id]?.ok ? L('Resolt', 'Resuelto', 'Solved') : L('Per fer', 'Por hacer', 'To do')}</span>
        </div>
      ))}
    </div>
  );
}

export function Pati() {
  const { L } = useLang();
  const eng = useCppEngine();
  const [code, setCode] = useState(() => lsGet(PATI_CODE) || TPL);
  const [inp, setInp] = useState(() => lsGet(PATI_IN) || '');
  const [out, setOut] = useState(null);
  const [busy, setBusy] = useState(false);
  const cur = useRef({ code, inp });
  const alive = useRef(true);
  const edRef = useRef(null);
  const runRef = useRef(null);
  useEffect(() => () => { alive.current = false; }, []);
  const save = (c, i) => { cur.current = { code: c, inp: i }; lsSet(PATI_CODE, c); lsSet(PATI_IN, i); };
  const onCode = (v) => { if (v === cur.current.code) return; setCode(v); save(v, cur.current.inp); };
  const onInp = (v) => { setInp(v); save(cur.current.code, v); };
  async function patiRun() {
    if (busy) return;
    setBusy(true);
    const { code: src, inp: stdin } = cur.current;
    await start(engPref());
    setOut([['sys', waitKey(getSnapshot())]]);
    const c = await compile(src);
    if (!alive.current) return;
    const o = [];
    if (c.diags && c.diags.length) o.push(['diags', c.diags], ['nl']);
    if (!c.ok) { o.push(['nocompile']); setOut(o); }
    else {
      if (!c.interp) o.push(['compiled', c.ms], ['nl']);
      setOut([...o, ['sys', 'executing']]);
      const r = await run(c, stdin);
      if (!alive.current) return;
      setOut(runParts(o, r));
    }
    setBusy(false);
  }
  useLayoutEffect(() => { runRef.current = patiRun; });
  const restart = () => { setCode(TPL); setInp(''); save(TPL, ''); setOut([]); };
  return (
    <div className="pg-pati" data-course="cpp">
      <div className="edbox"><CodeEditor id="ped" ref={edRef} value={code} onChange={onCode} onRun={() => runRef.current?.()} /></div>
      <div className="pg-acts">
        <button type="button" className="btn btn-primary" id="p-run" title="Ctrl+Enter" disabled={busy} onClick={() => patiRun()}>{L('Executa', 'Ejecuta', 'Run')}</button>
        <button type="button" className="btn btn-secondary" id="p-tpl" onClick={restart}>{L('Comença de nou', 'Empieza de nuevo', 'Start again')}</button>
        <span className="tiny muted">{eng.mode === 'interp' ? L('intèrpret lleuger', 'intérprete ligero', 'lightweight interpreter') : 'clang++ -std=gnu++17 -Wall'}</span>
      </div>
      <label className="small" htmlFor="pin">{L('Entrada del programa (stdin)', 'Entrada del programa (stdin)', 'Program input (stdin)')}</label>
      <textarea className="stdin" id="pin" spellCheck={false} value={inp} onChange={(e) => onInp(e.target.value)} />
      <pre className="console" id="pcon"><ConsoleParts parts={out || [['sys', 'placeholder']]} onGoto={(l, c) => edRef.current?.focusAt(l, c)} /></pre>
    </div>
  );
}
