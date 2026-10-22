import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLang } from '../../../lib/i18n.jsx';
import { lsGet, lsSet } from '../../../lib/storage.js';
import { compile, getSnapshot, run } from '../../../shared/cpp/engine.js';
import { useCppEngine } from '../../../shared/cpp/useCppEngine.js';
import { TPL } from '../lib/data.js';
import { PATI_CODE, PATI_IN } from '../lib/store.js';
import CodeEditor from '../components/CodeEditor.jsx';
import { ConsoleParts, runParts, waitKey } from '../components/Output.jsx';
import { Page } from '../components/Layout.jsx';

/** Pati de proves: codi lliure, sense rellotge ni proves (el codi i l'entrada es desen). */
export default function PatiView() {
  const { L } = useLang();
  const eng = useCppEngine();
  const [code, setCode] = useState(() => lsGet(PATI_CODE) || TPL);
  const [inp, setInp] = useState(() => lsGet(PATI_IN) || '');
  const [out, setOut] = useState(null);
  const [busy, setBusy] = useState(false);
  const cur = useRef({ code, inp });
  const alive = useRef(false);
  const busyRef = useRef(false);
  const edRef = useRef(null);
  const runRef = useRef(null);

  const save = (c, i) => { cur.current = { code: c, inp: i }; lsSet(PATI_CODE, c); lsSet(PATI_IN, i); };
  const onCode = (v) => { if (v === cur.current.code) return; setCode(v); save(v, cur.current.inp); };
  const onInp = (v) => { setInp(v); save(cur.current.code, v); };

  async function patiRun() {
    if (!alive.current || busyRef.current) return;
    busyRef.current = true; setBusy(true);
    const { code: src, inp: stdin } = cur.current;
    save(src, stdin);
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
    busyRef.current = false; setBusy(false);
  }
  useLayoutEffect(() => { runRef.current = patiRun; });
  useEffect(() => {
    alive.current = true;
    return () => { alive.current = false; };
  }, []);

  const restart = () => { setCode(TPL); setInp(''); save(TPL, ''); setOut([]); };

  return (
    <Page crumbs={[[L('C++ a contrarellotge', 'C++ a contrarreloj'), 'list'], [L('Pati de proves', 'Patio de pruebas')]]} h1={L('Pati de proves', 'Patio de pruebas')} tab="pati">
      <div className="course-summary">
        <p>{L('Un espai lliure per escriure i executar qualsevol programa de C++, sense rellotge ni proves. Els exemples de la teoria s\'obren aquí amb el botó «Pati». El codi i l\'entrada es desen en aquest navegador.', 'Un espacio libre para escribir y ejecutar cualquier programa de C++, sin reloj ni pruebas. Los ejemplos de la teoría se abren aquí con el botón «Patio». El código y la entrada se guardan en este navegador.')}</p>
      </div>
      <div className="edbox">
        <CodeEditor id="ped" ref={edRef} value={code} onChange={onCode} onRun={() => runRef.current?.()} />
      </div>
      <div className="im-controls">
        <button type="button" className="btn btn-primary" id="p-run" title="Ctrl+Enter" disabled={busy} onClick={() => patiRun()}>{L('Executa', 'Ejecuta')}</button>
        <button type="button" className="btn btn-secondary" id="p-tpl" onClick={restart}>{L('Comença de nou', 'Empieza de nuevo')}</button>
        <span className="grade tiny muted">{eng.mode === 'interp' ? L('intèrpret JSCPP', 'intérprete JSCPP') : 'clang++ -std=gnu++17 -Wall'}</span>
      </div>
      <div className="outcome mt14">
        <div className="pane">
          <div className="lblrow"><label htmlFor="pin">{L('Entrada del programa (stdin)', 'Entrada del programa (stdin)')}</label></div>
          <textarea className="stdin" id="pin" spellCheck={false} value={inp} onChange={(e) => onInp(e.target.value)} />
          <div className="lblrow"><span className="lbl">{L('Sortida', 'Salida')}</span></div>
          <pre className="console" id="pcon"><ConsoleParts parts={out || [['sys', 'placeholder']]} onGoto={(l, c) => edRef.current?.focusAt(l, c)} /></pre>
        </div>
      </div>
    </Page>
  );
}
