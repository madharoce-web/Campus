import { createContext, useContext, useState } from 'react';
import Rich from '../../lib/Rich.jsx';
import { useLang } from '../../lib/i18n.jsx';

/** Nom i identificador del laboratori que s'està pintant (atributs data-w i data-id). */
export const LabContext = createContext(null);

/** Marc d'un laboratori: capçalera («Laboratori» + títol) i cos. */
export function LabShell({ title, children }) {
  const { L } = useLang();
  const lab = useContext(LabContext);
  return (
    <div className="lab" data-w={lab ? lab.w : undefined} data-id={lab ? lab.id : undefined}>
      <div className="lab-h"><span className="tag">{L('Laboratori', 'Laboratorio', 'Lab')}</span><span className="tt">{title}</span></div>
      <div className="lab-b">{children}</div>
    </div>
  );
}

/** HTML ja preparat (passos, solucions, avisos) sense caixa pròpia: els fills entren a la maquetació del pare. */
export function Html({ html }) {
  return html ? <Rich className="rc" html={html} /> : null;
}

/**
 * Camp de text o numèric que, com l'event «change» de l'original, només aplica el valor
 * en sortir del camp o en prémer Retorn (i, als numèrics, amb les fletxes).
 * onCommit(text) retorna true si el valor s'ha acceptat: llavors el camp torna a mostrar
 * el valor desat (p. ex. «1.5» → «1,5»). `sync` és l'estat del laboratori: com quan l'original
 * el tornava a pintar, qualsevol canvi d'estat torna a posar al camp el valor desat.
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

/** Desplegable d'opcions de text. */
export function Sel({ id, opts, value, onChange, label }) {
  return (
    <select id={id} value={value} onChange={(e) => onChange(e.target.value)} aria-label={label}>
      {opts.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}
