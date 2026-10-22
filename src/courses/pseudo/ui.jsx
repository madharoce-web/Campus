import { useLayoutEffect, useRef } from 'react';
import { useLang } from '../../lib/i18n.jsx';
import { highlight } from './engine/highlight.js';
import { SNIPS, SYMS } from './data/editor.js';

/** Text bilingüe {ca, es} o cadena. */
export function useTr() {
  const { lang } = useLang();
  return (o) => (o == null ? '' : typeof o === 'string' ? o : (o[lang] != null ? o[lang] : o.ca));
}

/** Capçalera d'una secció: avantítol, títol, contingut a la dreta i entradeta. */
export function Head({ eb, t, lead, extra }) {
  return (
    <>
      <div className="row p-head"><div><div className="eyebrow">{eb}</div><h2 className="sec-title">{t}</h2></div>{extra}</div>
      {lead ? <p className="lead">{lead}</p> : null}
    </>
  );
}

export function Fb({ k, children }) {
  return <div className={'fb ' + k}>{children}</div>;
}

export function OkTxt({ ok }) {
  const { L } = useLang();
  return <><b>{ok ? L('Correcte', 'Correcto') : L('Incorrecte', 'Incorrecto')}.</b>{' '}</>;
}

/** Pseudocodi amb les paraules clau ressaltades. */
export function Hl({ code }) {
  return highlight(code).map((g, i) => (g.t === 'kw' ? <span key={i} className="kw">{g.s}</span>
    : g.t === 'muted' ? <span key={i} className="muted">{g.s}</span> : g.s));
}
export function Ps({ code }) {
  return <pre className="ps"><Hl code={code} /></pre>;
}

/**
 * Pregunta de tria. opts: continguts ja preparats; gi: índex bo; ans: índex triat (o null).
 * Un cop contestada, totes les opcions queden desactivades i es marca la bona i la triada.
 */
export function Mcq({ id, opts, gi, ans, onPick }) {
  const answered = ans != null;
  return (
    <div className="opts" id={id}>
      {opts.map((o, i) => (
        <button key={i} type="button" data-i={i} disabled={answered}
          className={'opt' + (answered && i === gi ? ' ok' : '') + (answered && i === ans && i !== gi ? ' bad' : '')}
          onClick={() => onPick(i)}>
          <span className="k">{'abcd'[i]}</span><span className="body">{o}</span>
        </button>
      ))}
    </div>
  );
}

/** Missatges de la revisió de notació. */
export function Msgs({ msgs }) {
  const { lang, L } = useLang();
  if (!msgs.length) return <Fb k="ok">{L('Notació: cap problema detectat.', 'Notación: ningún problema detectado.')}</Fb>;
  const nm = { E: 'ERROR', W: L('AVÍS', 'AVISO'), I: L('CONSELL', 'CONSEJO') };
  return (
    <div className="stack p-gap6">
      {msgs.map((m, i) => (
        <div key={i} className={'msg ' + m.lv}><span className="lv">{nm[m.lv]}</span>
          <span>{(m.n ? L('línia ', 'línea ') + m.n + ': ' : '') + (lang === 'ca' ? m.ca : m.es)}</span></div>
      ))}
    </div>
  );
}

/** Resultat dels jocs de proves. */
export function TestsTable({ c }) {
  const { L } = useLang();
  if (!c.parsed) return <Fb k="bad">{L('No es pot executar: ', 'No se puede ejecutar: ') + c.err + (c.line ? ' (' + L('línia ', 'línea ') + c.line + ')' : '')}</Fb>;
  return (
    <div className="tablewrap"><table>
      <thead><tr><th>{L('Entrada', 'Entrada')}</th><th>{L('Ha de sortir', 'Debe salir')}</th><th>{L('Sortida', 'Salida')}</th><th /></tr></thead>
      <tbody>
        {c.results.map((r, i) => (
          <tr key={i}>
            <td className="mono">{r.in.join(' ')}</td>
            <td className="mono">{r.exp.join(' … ')}</td>
            <td className="mono">{r.out.join('\n')}{r.err ? <div className="p-err">{r.err + (r.line ? ' (' + L('línia ', 'línea ') + r.line + ')' : '')}</div> : null}</td>
            <td>{r.ok ? '✓' : '✗'}</td>
          </tr>
        ))}
      </tbody>
    </table></div>
  );
}

/**
 * Editor de pseudocodi: àrea de text (Tab insereix quatre espais), tecles de símbols
 * i fragments d'estructures que respecten el sagnat de la línia.
 */
export function CodeEditor({ id, value, onChange, readOnly, label }) {
  const ref = useRef(null), caret = useRef(null);
  // després d'inserir, el cursor queda just després del text inserit
  useLayoutEffect(() => {
    const ta = ref.current;
    if (caret.current == null || !ta) return;
    ta.focus(); ta.selectionStart = ta.selectionEnd = caret.current; caret.current = null;
  });
  const insert = (s) => {
    const ta = ref.current;
    if (!ta || readOnly) return;
    const i = ta.selectionStart, j = ta.selectionEnd;
    caret.current = i + s.length;
    onChange(ta.value.slice(0, i) + s + ta.value.slice(j));
  };
  const snip = (s) => {
    const ta = ref.current;
    if (!ta) return;
    const line = ta.value.slice(0, ta.selectionStart).split('\n').pop();
    const ind = (line.match(/^\s*/) || [''])[0];
    insert(s.split('\n').join('\n' + ind));
  };
  return (
    <>
      <textarea className="code" id={id} ref={ref} spellCheck={false} autoComplete="off" aria-label={label}
        value={value} readOnly={readOnly} onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Tab' && !readOnly) { e.preventDefault(); insert('    '); } }} />
      <div className="keys" data-ta={id}>
        {SYMS.map((s) => <button key={s} type="button" data-s={s} onClick={() => insert(/^[A-Za-z|]/.test(s) ? ' ' + s + ' ' : s)}>{s}</button>)}
      </div>
      <div className="snips" data-ta={id}>
        {SNIPS.map(([n, s], i) => <button key={i} type="button" data-i={i} onClick={() => snip(s)}>{n}</button>)}
      </div>
    </>
  );
}
