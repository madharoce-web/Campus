import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useLang } from '../../lib/i18n.jsx';
import { xpEval, xpPar, xpParse, xpShow, xpTokens } from './engine/expr.js';

const KEYS = ['·', '/', '‖', '|R', 'I', 'O', 'NO', '=', '≠', '<', '≤', '>', '≥', '(', ')'];

/** Avaluació pas a pas (es calcula en pintar perquè els missatges segueixin l'idioma). */
function Result({ vals, names, ex }) {
  const { L } = useLang();
  const vars = {};
  names.forEach((k, i) => {
    const raw = vals[i] ?? '', t = raw.trim().toUpperCase();
    vars[k] = t === 'V' || t === 'CERT' ? true : t === 'F' || t === 'FALS' ? false : parseFloat(raw.replace(',', '.'));
  });
  const stepRows = (steps) => steps.map((s, i) => <div key={i} className="ip-xpst"><span className="n">{i + 1}</span><span>{s}</span></div>);
  const errRow = (m) => <div className="ip-xpst err"><span className="n">!</span><span>{m}</span></div>;
  let e;
  try { e = xpParse(xpTokens(ex, L), L); } catch (err) { return errRow(err.message); }
  const par = xpPar(e, true).map((p, i) => (typeof p === 'string' ? p : <span key={i} className="pl">{p.pl}</span>));
  const steps = [];
  let r, fail = null;
  try { r = xpEval(e, vars, steps, L); } catch (err) { fail = err.message; }
  return (
    <>
      <div className="ip-xppar">{L('Com la llegeix el curs: ', 'Cómo la lee el curso: ')}{par}</div>
      {stepRows(steps)}
      {fail != null ? errRow(fail) : (
        <div className="ip-xpst fin"><span className="n">=</span><span>{L('Resultat: ', 'Resultado: ')}<b>{xpShow(r)}</b>{typeof r === 'boolean' ? L(' (expressió booleana)', ' (expresión booleana)') : L(' (expressió numèrica)', ' (expresión numérica)')}</span></div>
      )}
    </>
  );
}

/** Laboratori: avalua una expressió amb les prioritats del curs. */
export default function ExprLab({ expr, vars }) {
  const { L } = useLang();
  const vars0 = useMemo(() => (vars || 'a=9,b=5').split(',').map((x) => x.split('=').map((y) => y.trim())).filter((x) => x[0]), [vars]);
  const names = vars0.map((v) => v[0]);
  const [vals, setVals] = useState(() => vars0.map((v) => v[1] ?? ''));
  const [ex, setEx] = useState(expr || 'a ‖ b + a |R b');
  const [shown, setShown] = useState(() => ({ vals: vars0.map((v) => v[1] ?? ''), ex: expr || 'a ‖ b + a |R b' }));
  const exRef = useRef(null), caret = useRef(null);

  useLayoutEffect(() => {
    if (caret.current == null || !exRef.current) return;
    exRef.current.focus();
    exRef.current.setSelectionRange(caret.current, caret.current);
    caret.current = null;
  });

  const go = () => setShown({ vals, ex });
  const onEnter = (e) => { if (e.key === 'Enter') go(); };
  const insert = (k) => {
    const el = exRef.current;
    const s = el.selectionStart || ex.length, end = el.selectionEnd || s, t = ' ' + k + ' ';
    setEx(ex.slice(0, s) + t + ex.slice(end));
    caret.current = s + t.length;
  };

  return (
    <div className="ip-xp">
      <div className="ip-xph">{L('Laboratori: avalua una expressió amb les prioritats del curs', 'Laboratorio: evalúa una expresión con las prioridades del curso')}</div>
      <div className="ip-xpb">
        <div className="ip-xprow">
          {names.map((k, i) => (
            <label key={k}>{k} = <input className="var" data-v={k} value={vals[i]} spellCheck={false} onKeyDown={onEnter}
              onChange={(e) => { const v = [...vals]; v[i] = e.target.value; setVals(v); }} /></label>
          ))}
        </div>
        <div className="ip-xprow">
          <input ref={exRef} className="ex" spellCheck={false} aria-label={L('Expressió', 'Expresión')} value={ex} onChange={(e) => setEx(e.target.value)} onKeyDown={onEnter} />
          <button type="button" className="ip-btn pri sm" onClick={go}>{L('Avalua', 'Evalúa')}</button>
        </div>
        <div className="ip-xpkeys">
          {KEYS.map((k) => <button key={k} type="button" data-k={k} onClick={() => insert(k)}>{k}</button>)}
        </div>
        <div className="ip-xpout" aria-live="polite"><Result vals={shown.vals} names={names} ex={shown.ex} /></div>
      </div>
    </div>
  );
}
