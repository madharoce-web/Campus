import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Rich from '../../lib/Rich.jsx';
import { useLang } from '../../lib/i18n.jsx';
import { getContent } from './content/index.js';
import { useSlot } from './store.js';

/** Nom i identificador del laboratori que s'està pintant (atributs data-w i data-id). */
export const LabContext = createContext(null);

/** Marc d'un laboratori: capçalera («Laboratori» + títol) i cos (labShell de l'original). */
export function LabShell({ title, children }) {
  const { L } = useLang();
  const lab = useContext(LabContext);
  return (
    <div className="lab" data-w={lab ? lab.w : undefined} data-id={lab ? lab.id : undefined}>
      <div className="lab-h"><span className="tag">{L('Laboratori', 'Laboratorio', 'Lab')}</span><Rich as="span" className="tt" html={title} /></div>
      <div className="lab-b">{children}</div>
    </div>
  );
}

/** HTML ja preparat (passos, taules, figures, avisos) sense caixa pròpia: entra a la maquetació del pare. */
export function Html({ html, as }) {
  return html ? <Rich as={as} className="rc" html={html} /> : null;
}

/** Contingut del laboratori en l'idioma de la pàgina (getContent: ca, es o en). */
export function useContent() {
  return getContent(useLang().ui);
}

/**
 * Passos que es revelen un a un (stepper de l'original). L'estat (quants se'n veuen) es desa
 * a la casella 'stp:<id>', com WS['stp:<id>']. `gen` torna la llista de passos; per defecte,
 * la registrada pel contingut amb stepper(id, gen, opts). `bare`: sense el <div class="stepper">
 * (quan ja el posa l'HTML del contingut).
 */
export function Stepper({ id, gen, all, bare }) {
  const { L } = useLang();
  const C = useContent();
  const reg = C.STEPS[id];
  const g = gen || (reg && reg.gen);
  const steps = g ? g() : [];
  const [k0, , setK] = useSlot('stp:' + id, () => ((all ?? (reg && reg.opts.all)) ? steps.length : 1));
  const k = Math.min(k0, steps.length), done = k >= steps.length;
  const body = (
    <>
      <Html html={'<div class="steps">' + steps.slice(0, k).map(C.stepRow).join('') + '</div>'} />
      <div className="row p-mt8">
        {!done && <button type="button" className="btn primary" data-stp="next" onClick={() => setK((x) => (x || 1) + 1)}>{L('Següent pas', 'Siguiente paso', 'Next step') + ' (' + k + '/' + steps.length + ')'}</button>}
        {!done && <button type="button" className="btn ghost" data-stp="all" onClick={() => setK(steps.length)}>{L('Mostra-ho tot', 'Muéstralo todo', 'Show it all')}</button>}
        {k > 1 && <button type="button" className="btn ghost" data-stp="reset" onClick={() => setK(1)}>{L('Torna a començar', 'Vuelve a empezar', 'Start again')}</button>}
      </div>
    </>
  );
  return bare ? body : <div className="stepper" id={'stp-' + id}>{body}</div>;
}

/**
 * Teclat de símbols d'un camp de text (keypad + wireKeys de l'original): insereix el símbol
 * on és el cursor (⌫ esborra) i torna el focus al camp amb el cursor al lloc.
 */
export function useKeys(ref, value, onChange) {
  const caret = useRef(null);
  useLayoutEffect(() => {
    const t = ref.current, c = caret.current;
    if (t && c != null) { caret.current = null; t.focus(); t.selectionStart = t.selectionEnd = c; }
  });
  return useCallback((s) => {
    const t = ref.current, v = String(value ?? '');
    let nv, c;
    if (s === '⌫') {
      const i = (t && t.selectionStart) || v.length, j = (t && t.selectionEnd) || i;
      nv = v.slice(0, Math.max(0, i - 1)) + v.slice(j); c = Math.max(0, i - 1);
    } else {
      const i = t && t.selectionStart != null ? t.selectionStart : v.length, j = t && t.selectionEnd != null ? t.selectionEnd : i;
      nv = v.slice(0, i) + s + v.slice(j); c = i + s.length;
    }
    caret.current = c;
    onChange(nv);
  }, [ref, value, onChange]);
}

/** Botons del teclat de símbols. */
export function Keys({ syms, onKey, htmlFor }) {
  return (
    <div className="keys" data-for={htmlFor}>
      {syms.map((s) => <button key={s} type="button" data-k={s} onMouseDown={(e) => e.preventDefault()} onClick={() => onKey(s)}>{s}</button>)}
    </div>
  );
}

/** Camp de text amb el seu teclat de símbols just a sota (onKey: canvi fet amb el teclat, si s'ha de tractar diferent). */
export function KeyInput({ value, onChange, onKey, syms, id, onEnter, inputRef, ...rest }) {
  const own = useRef(null);
  const ref = inputRef || own;
  const insert = useKeys(ref, value, onKey || onChange);
  return (
    <>
      <input ref={ref} type="text" id={id} value={value} spellCheck="false" autoComplete="off" {...rest}
        onChange={(e) => onChange(e.target.value)} onKeyDown={onEnter ? (e) => { if (e.key === 'Enter') onEnter(e); } : undefined} />
      {syms && <Keys syms={syms} onKey={insert} htmlFor={id} />}
    </>
  );
}

/**
 * Camp que, com l'event «change» de l'original, només aplica el valor en sortir del camp,
 * en prémer Retorn o (als numèrics) amb les fletxes. onCommit(text) torna true si l'accepta.
 * `sync`: l'estat del laboratori; qualsevol canvi torna a posar al camp el valor desat.
 */
export function Field({ value, onCommit, sync, type = 'text', className = 'sm', ...rest }) {
  const shown = String(value);
  const [txt, setTxt] = useState(shown);
  const [prev, setPrev] = useState(shown);
  const [prevSync, setPrevSync] = useState(sync);
  const [reset, setReset] = useState(false);
  if (shown !== prev || sync !== prevSync) { setPrev(shown); setPrevSync(sync); setReset(false); setTxt(shown); }
  else if (reset) { setReset(false); setTxt(shown); }
  const commit = (v) => { if (v !== prev && onCommit(v) === true) setReset(true); };
  const numeric = type === 'number';
  return (
    <input
      {...rest}
      className={className || undefined}
      type={type}
      value={txt}
      onChange={(e) => setTxt(e.target.value)}
      onBlur={(e) => commit(e.target.value)}
      onKeyDown={(e) => { if (e.key === 'Enter') commit(e.currentTarget.value); }}
      onKeyUp={numeric ? (e) => { if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && e.currentTarget.value !== '') commit(e.currentTarget.value); } : undefined}
      onMouseUp={numeric ? (e) => { if (e.currentTarget.value !== '') commit(e.currentTarget.value); } : undefined}
    />
  );
}

/** Grup de botons amb un d'actiu: <div class="tog"> (items: [[valor, etiqueta]]). Les etiquetes poden ser HTML. */
export function Tog({ items, value, onChange, className = 'tog', attr }) {
  return (
    <div className={className} role="group">
      {items.map(([v, lab]) => (
        <button key={String(v)} type="button" {...(attr ? { ['data-' + attr]: v } : null)} aria-pressed={String(value) === String(v)} onClick={() => onChange(v)}>
          {typeof lab === 'string' && /[<&]/.test(lab) ? <Rich as="span" className="rc" html={lab} /> : lab}
        </button>
      ))}
    </div>
  );
}

/** Botons «chip» en una fila de controls (chips() de l'original). */
export function Chips({ items, value, onChange, attr, wrap = true }) {
  const btns = items.map(([v, lab]) => (
    <button key={String(v)} type="button" className="chipbtn" {...(attr ? { ['data-' + attr]: v } : null)} aria-pressed={String(value) === String(v)} onClick={() => onChange(v)}>
      {typeof lab === 'string' && /[<&]/.test(lab) ? <Rich as="span" className="rc" html={lab} /> : lab}
    </button>
  ));
  return wrap ? <div className="ctrl" role="group">{btns}</div> : btns;
}

/**
 * Camp que es pinta amb retard (com el setTimeout de l'original mentre s'escriu): `live` és el text
 * del camp i `drawn` el que ja s'ha dibuixat; passats `ms` sense canvis es crida commit(live).
 */
export function useLag(live, drawn, ms, commit) {
  const fn = useRef(commit);
  useLayoutEffect(() => { fn.current = commit; });
  useEffect(() => {
    if (live === drawn) return undefined;
    const t = setTimeout(() => fn.current(live), ms);
    return () => clearTimeout(t);
  }, [live, drawn, ms]);
}
