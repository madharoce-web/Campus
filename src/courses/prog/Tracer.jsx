import { useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useLang } from '../../lib/i18n.jsx';
import { codeLines } from './engine/highlight.js';
import { diffText, stripCells, traceOf } from './engine/trace.js';
import CodeLines from './CodeLines.jsx';
import { I } from './icons.jsx';

/** Marc de la pila (o ENTORN del pseudocodi) amb les variables; en groc les que han canviat. */
function Frame({ f, prevF, top }) {
  const { L } = useLang();
  const pv = {};
  if (prevF) prevF.vars.forEach((v) => { pv[v.n] = v.v; });
  const title = f.fn === 'global' ? L('globals', 'globales') : f.fn === 'algorisme' ? L('ENTORN · variables', 'ENTORN · variables') : f.fn + (f.fn === 'main' ? '()' : '(…)');
  return (
    <div className={'ip-frame' + (top ? ' top' : '')}>
      <div className="ip-frameh"><span>{title}</span>{top && f.fn !== 'algorisme' ? <span>{L('marc actiu', 'marco activo')}</span> : null}</div>
      <table>
        <tbody>
          {f.vars.length ? f.vars.map((v, i) => {
            const chg = prevF ? (pv[v.n] === undefined || pv[v.n] !== v.v) : false;
            return (
              <tr key={i} className={chg ? 'chg' : ''}>
                <td>{v.n}{v.ref ? <> <span className="ref">→ {v.ref}</span></> : null}</td>
                <td className="ty">{v.t || ''}</td>
                <td>{v.v}</td>
              </tr>
            );
          }) : <tr><td className="emp" colSpan={3}>{L('(encara cap variable)', '(todavía ninguna variable)')}</td></tr>}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Traça pas a pas d'un bloc de codi: línia actual, variables de cada marc, entrada amb el capçal
 * i sortida. MiniCpp per al C++ i l'intèrpret PS per al pseudocodi.
 */
export default function Tracer({ lang, src, input, strip, onInput }) {
  const { L } = useLang();
  const uid = useId();
  const [inp, setInp] = useState(() => String(input).replace(/\n/g, ' ').trim());
  const [traced, setTraced] = useState(inp);
  const [k, setK] = useState(0);
  const tr = useMemo(() => traceOf(lang, src, traced), [lang, src, traced]);
  const lines = useMemo(() => codeLines(src, lang), [src, lang]);
  const boxRef = useRef(null), lineRef = useRef(null);
  const n = tr.steps.length;
  const kk = Math.max(0, Math.min(k, n - 1));
  const s = tr.steps[kk], prev = kk > 0 ? tr.steps[kk - 1] : null;

  // la línia actual es manté visible dins del requadre del codi
  useLayoutEffect(() => {
    const l = lineRef.current, c = boxRef.current;
    if (!l || !c) return;
    const off = l.getBoundingClientRect().top - c.getBoundingClientRect().top + c.scrollTop;
    const top = off - c.clientHeight / 2;
    if (top > c.scrollTop + c.clientHeight - 40 || off < c.scrollTop) c.scrollTop = Math.max(0, top);
  }, [kk, tr]);

  const rebuild = () => { onInput(inp); setTraced(inp); setK(0); };
  const go = (to) => setK(Math.max(0, Math.min(to, n - 1)));
  const onKey = (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight') { e.preventDefault(); go(kk + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(kk - 1); }
  };

  let note;
  const srcLines = src.split('\n');
  if (!n || (tr.err && n <= 1 && !tr.steps[0].frames.length)) note = <span className="ip-trerr">{L("No s'ha pogut traçar: ", 'No se ha podido trazar: ') + (tr.err ? tr.err.msg : '')}</span>;
  else if (s.end) note = s.error
    ? <span className="ip-trerr">{L("El programa s'atura amb un error", 'El programa se detiene con un error') + (s.line ? ' (' + L('línia', 'línea') + ' ' + s.line + ')' : '') + ': ' + tr.err.msg}</span>
    : <><b>{L('Fi del programa.', 'Fin del programa.')}</b>{prev ? <span className="chg">{L('Efecte de la línia ', 'Efecto de la línea ') + prev.line + ': ' + diffText(prev, s, tr.tokens, L)}</span> : null}</>;
  else note = (
    <>
      <b>{L("Ara s'executa la línia ", 'Ahora se ejecuta la línea ')}{s.line}</b>: <code>{(srcLines[s.line - 1] || '').trim()}</code>
      <span className="chg">{prev ? L('Efecte de la línia ', 'Efecto de la línea ') + prev.line + ': ' + diffText(prev, s, tr.tokens, L) : L("Encara no s'ha executat res.", 'Todavía no se ha ejecutado nada.')}</span>
    </>
  );

  const frames = s ? s.frames : [], prevFrames = prev ? prev.frames : null;
  const sc = stripCells(strip, s || { frames: [] });
  const toks = tr.tokens || [], used = s ? s.used : 0;
  const outTxt = s ? s.out : '', prevOut = prev ? prev.out : '';
  const mark = s && s.line ? s.line : 0;

  return (
    <div className="ip-tr" onKeyDown={onKey}>
      <div className="ip-trbar">
        <label htmlFor={uid}>{L('Entrada', 'Entrada')}</label>
        <input id={uid} type="text" spellCheck={false} aria-label={L('Entrada', 'Entrada')} value={inp}
          onChange={(e) => setInp(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); rebuild(); } }} />
        <button type="button" className="ip-btn out sm" data-t="re" onClick={rebuild}>{L('Torna a traçar', 'Vuelve a trazar')}</button>
        <span className="ip-cbsp" />
        <button type="button" className="ip-btn out sm" data-t="first" aria-label={L('Primer pas', 'Primer paso')} disabled={kk === 0} onClick={() => go(0)}>{I.first}</button>
        <button type="button" className="ip-btn out sm" data-t="prev" aria-label={L('Pas anterior', 'Paso anterior')} disabled={kk === 0} onClick={() => go(kk - 1)}>{I.prev}</button>
        <span className="ip-trn" aria-live="polite">{n ? L('Pas ', 'Paso ') + (kk + 1) + ' / ' + n : ''}</span>
        <button type="button" className="ip-btn pri sm" data-t="next" aria-label={L('Pas següent', 'Paso siguiente')} disabled={kk >= n - 1} onClick={() => go(kk + 1)}>{I.next}{L('Següent', 'Siguiente')}</button>
        <button type="button" className="ip-btn out sm" data-t="last" aria-label={L('Últim pas', 'Último paso')} disabled={kk >= n - 1} onClick={() => go(n - 1)}>{I.last}</button>
      </div>
      <div className="ip-trg">
        <div className="ip-trc" ref={boxRef}>
          <pre className="ip-code"><CodeLines lines={lines} cur={s && !s.error ? mark : 0} err={s && s.error ? mark : 0} markRef={lineRef} /></pre>
        </div>
        <div className="ip-trs">
          <div className="ip-trnote">{note}</div>
          {sc ? (
            <div>
              <div className="ip-trlab">{L('Seqüència i capçal (', 'Secuencia y cabezal (') + sc.vn + ')'}</div>
              <div className="ip-strip withhead">{sc.cells.map((c) => <span key={c.x} className={c.cls}>{c.x}</span>)}</div>
            </div>
          ) : null}
          <div>
            <div className="ip-trlab">{L('Variables', 'Variables')}</div>
            <div className="ip-frames">
              {frames.length ? frames.map((f, i) => {
                const pf = prevFrames ? (prevFrames.find((p) => p.fn === f.fn && prevFrames.indexOf(p) === Math.min(i, prevFrames.length - 1)) || prevFrames.find((p) => p.fn === f.fn)) : null;
                return <Frame key={i} f={f} prevF={pf} top={i === frames.length - 1} />;
              }) : <div className="ip-frame"><div className="emp">{L('(cap)', '(ninguna)')}</div></div>}
            </div>
          </div>
          <div>
            <div className="ip-trlab">{L('Entrada (el capçal ▲ marca la dada següent)', 'Entrada (el cabezal ▲ marca el dato siguiente)')}</div>
            <div className={'ip-strip' + (toks.length ? ' withhead' : '')}>
              {toks.length ? toks.map((t, i) => <span key={i} className={i < used ? 'used' : i === used ? 'head' : ''}>{t}</span>) : <span className="none">{L('(sense entrada)', '(sin entrada)')}</span>}
            </div>
          </div>
          <div>
            <div className="ip-trlab">{L('Sortida', 'Salida')}</div>
            <pre className="ip-trout">
              {outTxt.startsWith(prevOut) && outTxt.length > prevOut.length ? <>{prevOut}<span className="new">{outTxt.slice(prevOut.length)}</span></> : outTxt}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
