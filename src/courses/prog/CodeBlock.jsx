import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../lib/i18n.jsx';
import { lsSet } from '../../lib/storage.js';
import { compile, getSnapshot, run as runBin, trapMsg } from '../../shared/cpp/engine.js';
import { useCppEngine } from '../../shared/cpp/useCppEngine.js';
import PS from './engine/ps.js';
import { codeLines } from './engine/highlight.js';
import CodeLines from './CodeLines.jsx';
import Tracer from './Tracer.jsx';
import { I } from './icons.jsx';

/** Estat del compilador sota el botó d'executar (només C++). */
function EngStatus() {
  const { L } = useLang();
  const e = useCppEngine();
  const pct = Math.round(e.pct * 100);
  if (e.state === 'loading') return (
    <div className="ip-eng">
      <span className="ip-spin" />
      <span>{L('Carregant el compilador Clang', 'Cargando el compilador Clang')} · {pct}% {L('(uns 29 MB, només el primer cop)', '(unos 29 MB, solo la primera vez)')}</span>
      <span className="bar"><i style={{ width: pct + '%' }} /></span>
    </div>
  );
  if (e.state === 'warming') return <div className="ip-eng"><span className="ip-spin" /><span>{L('Preparant el compilador…', 'Preparando el compilador…')}</span></div>;
  if (e.mode === 'interp') return <div className="ip-eng"><span>{L("Clang no s'ha pogut carregar: s'usa l'intèrpret lleuger.", 'Clang no se ha podido cargar: se usa el intérprete ligero.')}</span></div>;
  if (e.state === 'ready') return <div className="ip-eng"><span>{L('Clang 22 · C++17 · compilat al navegador', 'Clang 22 · C++17 · compilado en el navegador')}</span></div>;
  return <div className="ip-eng"><span>{L('El compilador es carrega quan premeu «Executa».', 'El compilador se carga cuando pulsáis «Ejecuta».')}</span></div>;
}

/** Contingut de la consola a partir de l'estat de l'execució (es repinta en canviar d'idioma). */
function Console({ con }) {
  const { L } = useLang();
  const none = <span className="sys">{L('(el programa no ha escrit res)', '(el programa no ha escrito nada)')}</span>;
  if (!con) return null;
  switch (con.s) {
    case 'compiling': return <span className="sys">{L('Compilant…', 'Compilando…')}</span>;
    case 'waiting': return <span className="sys">{L('Esperant el compilador…', 'Esperando el compilador…')}</span>;
    case 'running': return <span className="sys">{L('Executant…', 'Ejecutando…')}</span>;
    case 'cerr': return <span className="err">{L('Error de compilació:', 'Error de compilación:') + '\n' + (con.diags || []).join('\n')}</span>;
    case 'ps': {
      const r = con.r;
      const lines = r.out.length > 400 ? r.out.slice(0, 400).concat([L('… (', '… (') + (r.out.length - 400) + L(' línies més)', ' líneas más)')]) : r.out;
      const txt = lines.join('\n');
      if (!r.ok) return <>{txt}{txt ? '\n' : ''}<span className="err">{L('Error', 'Error') + (r.line ? ' (' + L('línia', 'línea') + ' ' + r.line + ')' : '') + ': ' + r.err}</span></>;
      if (!txt && !r.left) return none;
      return <>{txt}{r.left ? <>{'\n'}<span className="sys">{L('(han sobrat ' + r.left + " dades d'entrada sense llegir)", '(han sobrado ' + r.left + ' datos de entrada sin leer)')}</span></> : null}</>;
    }
    case 'out': {
      const r = con.r, txt = r.stdout || '';
      let tail;
      if (r.kind === 'ok') tail = r.exitCode && r.exitCode !== 0 ? <>{'\n'}<span className="sys">{L('(el programa ha acabat amb codi ', '(el programa ha terminado con código ') + r.exitCode + ')'}</span></> : null;
      else if (r.kind === 'compile') tail = <span className="err">{r.error || ''}</span>;
      else tail = <>{txt ? '\n' : ''}<span className="err">{con.trap}</span></>;
      if (!txt && !tail) return none;
      return <>{txt}{tail}</>;
    }
    default: return null;
  }
}

/**
 * Bloc de codi del contingut: copiar, editar, executar (Clang o l'intèrpret de pseudocodi)
 * i traçar pas a pas. Les propietats venen de <pre class="ipc" data-…> de l'original.
 */
export default function CodeBlock({ lang = 'txt', src, title, run, trace, nonum, in: input0 = '', strip }) {
  const { L } = useLang();
  const uid = useId();
  const canRun = !!run && lang !== 'txt', canTrace = !!trace && lang !== 'txt';
  const name = { cpp: 'C++', ps: L('Pseudocodi', 'Pseudocódigo'), txt: L('Text', 'Texto') }[lang] || lang;
  const [edited, setEdited] = useState(null); // codi confirmat amb «Fet»
  const [draft, setDraft] = useState(null); // text de l'editor (null: no s'edita)
  const [input, setInput] = useState(input0);
  const [copied, setCopied] = useState(false);
  const [runOpen, setRunOpen] = useState(false);
  const [con, setCon] = useState(null);
  const [busy, setBusy] = useState(false);
  const [errLine, setErrLine] = useState(0);
  const [tracing, setTracing] = useState(false);
  const codeRef = useRef(null), taRef = useRef(null), caret = useRef(null), alive = useRef(true);
  const cur = edited ?? src;
  const editing = draft !== null;
  const lines = useMemo(() => codeLines(cur, lang), [cur, lang]);

  useEffect(() => { alive.current = true; return () => { alive.current = false; }; }, []);
  useEffect(() => {
    if (!copied) return undefined;
    const t = setTimeout(() => setCopied(false), 1400);
    return () => clearTimeout(t);
  }, [copied]);
  // en començar a editar, el focus va a l'editor
  useEffect(() => { if (editing) taRef.current?.focus(); }, [editing]);
  // després d'inserir una tabulació, el cursor va al final del text inserit
  useLayoutEffect(() => {
    if (caret.current == null || !taRef.current) return;
    taRef.current.setSelectionRange(caret.current, caret.current);
    caret.current = null;
  });

  const getSrc = () => (editing ? draft : cur);

  const selectCode = () => {
    if (editing) { taRef.current?.select(); return; }
    const el = codeRef.current; if (!el) return;
    const r = document.createRange(); r.selectNodeContents(el);
    const s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
  };
  const copy = () => {
    try { navigator.clipboard.writeText(getSrc()).then(() => setCopied(true), selectCode); } catch { selectCode(); }
  };

  const toggleEdit = () => {
    if (!editing) { setDraft(cur); setTracing(false); }
    else { setEdited(draft.replace(/\s+$/, '')); setDraft(null); }
  };
  const onTab = (e) => {
    if (e.key !== 'Tab') return;
    e.preventDefault();
    const ta = e.currentTarget, s = ta.selectionStart, end = ta.selectionEnd;
    setDraft(ta.value.slice(0, s) + '    ' + ta.value.slice(end));
    caret.current = s + 4;
  };

  async function doRun() {
    const code = getSrc(), stdin = input;
    setErrLine(0);
    if (lang === 'ps') {
      const r = PS.run(code, stdin, { limit: 20000 });
      setCon({ s: 'ps', r });
      if (!r.ok && !editing && r.line) setErrLine(r.line);
      return;
    }
    setBusy(true);
    setCon({ s: getSnapshot().state === 'ready' ? 'compiling' : 'waiting' });
    try {
      const c = await compile(code);
      if (!alive.current) return;
      if (!c.ok) {
        setCon({ s: 'cerr', diags: c.diags });
        const m = (c.diags || []).join('\n').match(/main\.cpp:(\d+):/);
        if (m && !editing) setErrLine(+m[1]);
        return;
      }
      setCon({ s: 'running' });
      const r = await runBin(c, stdin);
      if (!alive.current) return;
      setCon({ s: 'out', r, trap: r.kind !== 'ok' && r.kind !== 'compile' ? trapMsg(r) : '' });
    } finally {
      if (alive.current) setBusy(false);
    }
  }
  const onRun = () => { setRunOpen(true); doRun(); };

  return (
    <div className="ip-cb" data-lang={lang}>
      <div className="ip-cbh">
        <span className="ip-cbl">{name}</span>
        {title ? <span className="ip-cbt">{title}</span> : null}
        <span className="ip-cbsp" />
        <button type="button" className="ip-btn out sm" data-a="copy" title={L('Copia el codi', 'Copia el código')} onClick={copy}>
          {copied ? <>{I.check}{L('Copiat', 'Copiado')}</> : <>{I.copy}{L('Copia', 'Copia')}</>}
        </button>
        {canRun || canTrace ? (
          <button type="button" className="ip-btn out sm" data-a="edit" onClick={toggleEdit}>
            {editing ? <>{I.check}{L('Fet', 'Hecho')}</> : <>{I.edit}{L('Edita', 'Edita')}</>}
          </button>
        ) : null}
        {canTrace ? (
          <button type="button" className="ip-btn out sm" data-a="trace" onClick={() => { if (editing) toggleEdit(); setTracing((t) => !t); }}>
            {tracing ? <>{I.x}{L('Tanca la traça', 'Cierra la traza')}</> : <>{I.step}{L('Traça pas a pas', 'Traza paso a paso')}</>}
          </button>
        ) : null}
        {canRun ? (
          <button type="button" className="ip-btn pri sm" data-a="run" disabled={busy} onClick={onRun}>{I.play}{L('Executa', 'Ejecuta')}</button>
        ) : null}
        {lang === 'cpp' && canRun ? (
          <Link className="ip-btn out sm" data-a="pati" to="/cpp/pati" title={L('Obre el codi al pati de proves del C++', 'Abre el código en el patio de pruebas del C++')}
            onClick={() => { lsSet('ip-pati-code', getSrc()); lsSet('ip-pati-in', input); }}>
            {I.ext}{L('Pati', 'Patio')}
          </Link>
        ) : null}
      </div>
      <div className="ip-cbb" style={tracing ? { display: 'none' } : undefined}>
        {editing ? (
          <textarea ref={taRef} className="ip-ed" spellCheck={false} rows={Math.min(30, cur.split('\n').length + 1)}
            aria-label={L('Codi editable', 'Código editable')} value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={onTab} />
        ) : (
          <pre ref={codeRef} className={'ip-code' + (nonum ? ' nonum' : '')}><CodeLines lines={lines} err={errLine} /></pre>
        )}
      </div>
      {tracing ? <Tracer lang={lang} src={cur} input={input} strip={strip} onInput={setInput} /> : null}
      {runOpen ? (
        <div className="ip-run">
          <div className="ip-runrow">
            <div className="ip-runin">
              <label htmlFor={uid + 'in'}>{L('Entrada (stdin)', 'Entrada (stdin)')}</label>
              <textarea id={uid + 'in'} className="ip-stdin" spellCheck={false} value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            <button type="button" className="ip-btn pri" data-a="go" disabled={busy} onClick={doRun}>{I.play}{L('Executa', 'Ejecuta')}</button>
          </div>
          {lang === 'cpp' ? <EngStatus /> : null}
          <div>
            <label className="ip-trlab">{L('Consola', 'Consola')}</label>
            <pre className="ip-con" aria-live="polite"><Console con={con} /></pre>
          </div>
        </div>
      ) : null}
    </div>
  );
}
