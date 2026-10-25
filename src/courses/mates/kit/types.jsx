/**
 * Tipus d'exercici propis de Matemàtiques (course.types de la plantilla). Tots fan servir els
 * generadors d'abans (content/), que es tornen a executar amb la llavor en l'idioma de la pàgina
 * (català o castellà; en anglès, en castellà fins que els generadors tinguin la traducció).
 *   mbank  una plantilla del banc per nivells { t, lv, i, seed }: resposta numèrica, conjunt, complex,
 *          matriu, cert/fals, opcions o demostració (autoavaluada), amb pista i solució pas a pas.
 *   mprac  pràctica ràpida { k, seed }: Venn, ∅ i {∅}, classes mòdul n, Hasse… (vegeu prac.jsx).
 *   mexam  un exercici del simulacre { mode, i, seed }: apartats amb punts, solució i rúbrica.
 */
import { useRef, useState } from 'react';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { K, num } from '../../_kit/strings.js';
import { rngOf } from '../../_kit/bank.js';
import { getContent } from '../content/index.js';
import { bkCheck, bkInst } from '../bankmodel.js';
import { Keys, useKeys } from '../ui.jsx';
import { MPRAC } from './prac.jsx';

export const genLang = (ui) => (ui === 'ca' ? 'ca' : 'es');
const MS = {
  ca: { warn: 'Escriu una resposta (o tria les opcions) abans de comprovar-la.', answer: 'Resposta', fail: "No s'ha pogut generar aquest exercici.", yes: 'Sí', no: 'No', t: 'Cert', f: 'Fals', okSelf: "L'havies fet bé?", partly: 'No del tot', model: 'Mostra la solució model', rub: 'Com es puntua', pts: 'punts', pt: 'punt' },
  es: { warn: 'Escribe una respuesta (o elige las opciones) antes de comprobarla.', answer: 'Respuesta', fail: 'No se ha podido generar este ejercicio.', yes: 'Sí', no: 'No', t: 'Cierto', f: 'Falso', okSelf: '¿Lo habías hecho bien?', partly: 'No del todo', model: 'Mostrar la solución modelo', rub: 'Cómo se puntúa', pts: 'puntos', pt: 'punto' },
  en: { warn: 'Write an answer (or choose the options) before checking it.', answer: 'Answer', fail: 'This exercise could not be generated.', yes: 'Yes', no: 'No', t: 'True', f: 'False', okSelf: 'Did you get it right?', partly: 'Not quite', model: 'Show the model solution', rub: 'How it is marked', pts: 'points', pt: 'point' },
};
const strip = (h) => String(h || '').replace(/<annotation[^>]*>[\s\S]*?<\/annotation>/g, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

/* ---------- banc per nivells ---------- */
/** Instància d'una plantilla (si una llavor no en genera cap, es prova amb les següents). */
export function bankInst(C, ex) {
  for (let k = 0; k < 6; k++) {
    const I = bkInst(C, { t: ex.t, lv: ex.lv, i: ex.i, seed: ex.seed + k });
    if (I) return I;
  }
  return null;
}
const orderOf = (ex, I) => rngOf(ex.seed).shuffle(I.a.o.map((_, j) => j));
/** Correcció: true/false, una fracció (exercicis amb diversos camps) o null (falta resposta / autoavaluació). */
function bankCheck(C, I, v) {
  const a = I.a;
  if (a.k === 'self') return null;
  if (a.k === 'mc') return v && v[0] != null ? v[0] === a.c : null;
  const n = bkCheck(C, I, { v: v || {} });
  if (n.warn) return null;
  if (n.ok) return true;
  return n.res ? n.res.filter(Boolean).length / n.res.length : false;
}

function BkInput({ C, ex, j, k, ph, keys, v, onV, onEnter, disabled }) {
  const ref = useRef(null);
  const insert = useKeys(ref, v || '', (t) => onV(j, t));
  const id = 'mb-' + ex.id + '-' + (ex.seed || 0) + '-' + j;
  return (
    <>
      <input ref={ref} type="text" className="bkin am-input" id={id} data-j={j} data-k={k || ''} value={v || ''} spellCheck="false" autoComplete="off" disabled={disabled}
        placeholder={ph || (k === 'mat' ? '1 2; 3 4' : undefined)} onChange={(e) => onV(j, e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onEnter(); }} />
      {k === 'mat' && <Rich className="bkprev" html={C.bkMatPrev(v || '')} />}
      {!disabled && <Keys syms={keys} onKey={insert} htmlFor={id} />}
    </>
  );
}

function Tog2({ cur, done, ok, yes, no, onPick, disabled }) {
  return (
    <div className={'tog' + (done ? (ok ? ' ok' : ' bad') : '')} role="group">
      <button type="button" data-v="1" aria-pressed={cur === true} disabled={disabled} onClick={() => onPick(true)}>{yes}</button>
      <button type="button" data-v="0" aria-pressed={cur === false} disabled={disabled} onClick={() => onPick(false)}>{no}</button>
    </div>
  );
}

function MBank({ ex, value, onChange, disabled, checked, onCheck, exam }) {
  const { ui } = useLang();
  const S = K[ui], M = MS[ui];
  const C = getContent(genLang(ui));
  const I = bankInst(C, ex);
  const [st, setSt] = useState({ r: null, warn: false, sol: false, hint: false, self: null });
  if (!I) return <p className="kit-fb is-ko">{M.fail}</p>;
  const a = I.a, H = C.BKHELP(), v = value || {};
  const keys = (k) => C.BKKEYS[k] || C.BKKEYS.num;
  // en el simulacre, la correcció surt en lliurar; a la pràctica, en comprovar
  const r = exam ? (checked ? bankCheck(C, I, v) : null) : st.r;
  const done = exam ? checked : st.r !== null;
  const lock = disabled || (!exam && done && r === true);
  const res = exam ? (checked && a.k === 'multi' ? bkCheck(C, I, { v }).res : null) : st.res;
  const set = (j, x) => { onChange({ ...v, [j]: x }); if (!exam) setSt((o) => ({ ...o, r: null, res: null, warn: false })); };
  const check = (vv = v) => {
    if (a.k === 'self') return;
    const n = a.k === 'mc' ? null : bkCheck(C, I, { v: vv });
    if (n && n.warn) { setSt((o) => ({ ...o, warn: true })); return; }
    const x = bankCheck(C, I, vv);
    setSt((o) => ({ ...o, r: x, res: n && n.res, warn: false, sol: x === true ? o.sol : true }));
    onCheck?.(x);
  };
  let ans = null;
  if (['num', 'ang', 'cx', 'list', 'set', 'hset', 'nset', 'rel', 'mat'].includes(a.k)) {
    ans = (
      <div className="stack p-g6 mb-ans">
        <BkInput C={C} ex={ex} j={0} k={a.k} ph={a.ph} keys={keys(a.k)} v={v[0]} onV={set} onEnter={() => !exam && check()} disabled={lock} />
        <Rich as="span" className="tiny muted" html={a.help ? a.help() : H[a.k]} />
      </div>
    );
  } else if (a.k === 'multi') {
    ans = (
      <div className="stack p-g8 mb-ans">
        {a.f.map((f, j) => (f.k === 'tf'
          ? <div key={j} className="prow"><Rich as="b" html={f.lab()} /><Tog2 cur={v[j]} done={!!res} ok={res && res[j]} yes={M.yes} no={M.no} disabled={lock} onPick={(x) => set(j, x)} /></div>
          : (
            <div key={j} className="stack p-g4">
              <label className="small"><Rich as="b" html={f.lab()} />{res ? (res[j] ? <> <span className="yes">✓</span></> : <> <span className="no">✗</span></>) : null}</label>
              <BkInput C={C} ex={ex} j={j} k={f.k} keys={keys(f.k)} v={v[j]} onV={set} onEnter={() => !exam && check()} disabled={lock} />
              <Rich as="span" className="tiny muted" html={f.help ? f.help() : H[f.k]} />
            </div>
          )))}
      </div>
    );
  } else if (a.k === 'tf') {
    ans = (
      <div className="props mb-ans">
        {a.items.map((x, j) => (
          <div key={j} className="prow"><Rich as="span" html={x.t()} />
            <Tog2 cur={v[j]} done={done} ok={v[j] === x.v} yes={a.yes ? a.yes() : M.t} no={a.no ? a.no() : M.f} disabled={lock} onPick={(y) => set(j, y)} />
          </div>
        ))}
      </div>
    );
  } else if (a.k === 'mc') {
    const ord = orderOf(ex, I);
    ans = (
      <div className="kit-opts mb-ans">
        {ord.map((j, n) => (
          <button key={j} type="button" disabled={disabled || (!exam && done)} aria-pressed={v[0] === j}
            className={'kit-opt' + (v[0] === j ? ' is-on' : '') + (done ? (j === a.c ? ' is-right' : v[0] === j ? ' is-wrong' : '') : '')}
            onClick={() => { const nv = { 0: j }; onChange(nv); if (!exam) check(nv); }}>
            <span className="kit-opt-l">{'abcdef'[n]})</span><Rich as="span" html={a.o[j]()} />
          </button>
        ))}
      </div>
    );
  }
  const showAns = a.show ? a.show() : '';
  const sol = () => { const S_ = I.sol(); return (I.fx ? C.bkFormBox(I.fx()) : '') + (Array.isArray(S_) ? '<div class="steps">' + S_.map(C.stepRow).join('') + '</div>' : S_); };
  const canSol = exam ? checked : true;
  return (
    <div className="mb" data-k={a.k}>
      <div className="mb-in" data-course="mates">
        <div className="mb-q"><Rich html={I.q()} /></div>
        {ans}
      </div>
      {!exam && (
        <div className="kit-ex-acts">
          {a.k !== 'self' && a.k !== 'mc' && !(done && r === true) && <button type="button" className="am-btn am-btn-primary kit-check" onClick={() => check()}>{S.checkBtn}</button>}
          {I.hint && <button type="button" className="kit-link mb-hintbtn" aria-expanded={st.hint} onClick={() => setSt((o) => ({ ...o, hint: !o.hint }))}>{S.hint}</button>}
          <button type="button" className="kit-link mb-solbtn" aria-expanded={st.sol} onClick={() => setSt((o) => ({ ...o, sol: !o.sol }))}>{a.k === 'self' ? M.model : S.showSteps}</button>
        </div>
      )}
      {exam && canSol && <div className="kit-ex-acts"><button type="button" className="kit-link mb-solbtn" aria-expanded={st.sol} onClick={() => setSt((o) => ({ ...o, sol: !o.sol }))}>{S.solution}</button></div>}
      {st.warn && <p className="kit-fb is-mid" role="status">{M.warn}</p>}
      {r !== null && a.k !== 'self' && (
        <p className={'kit-fb ' + (r === true ? 'is-ok' : r > 0 ? 'is-mid' : 'is-ko')} role="status">
          {r === true ? S.ok : r > 0 ? S.part : S.ko0}{showAns && a.k !== 'mc' ? <> <b>{M.answer}:</b> <Rich as="span" html={showAns} /></> : null}
        </p>
      )}
      {st.hint && I.hint && <div className="kit-hint" data-course="mates"><Rich html={I.hint()} /></div>}
      {st.sol && <div className="kit-steps mb-sol"><p className="kit-steps-h">{S.solution}</p><Rich data-course="mates" html={sol()} /></div>}
      {!exam && a.k === 'self' && st.sol && st.self === null && (
        <div className="kit-self" role="group"><span>{M.okSelf}</span>
          <button type="button" className="kit-self-b" onClick={() => { setSt((o) => ({ ...o, self: true })); onCheck?.(true); }}>{M.yes}</button>
          <button type="button" className="kit-self-b" onClick={() => { setSt((o) => ({ ...o, self: false })); onCheck?.(false); }}>{M.partly}</button>
        </div>
      )}
    </div>
  );
}

function PrintBank({ ex }) {
  const { ui } = useLang();
  const M = MS[ui];
  const C = getContent(genLang(ui));
  const I = bankInst(C, ex);
  if (!I) return null;
  const a = I.a;
  return (
    <div className="kp-gen" data-course="mates">
      <Rich html={I.q()} />
      {a.k === 'mc' && <ol className="kp-opts">{orderOf(ex, I).map((j, n) => <li key={j}><span className="kp-box" />{'abcdef'[n]}) <Rich as="span" html={a.o[j]()} /></li>)}</ol>}
      {a.k === 'tf' && <ol className="kp-opts">{a.items.map((x, j) => <li key={j}><Rich as="span" html={x.t()} /> <span className="kp-box" />{a.yes ? a.yes() : M.t} <span className="kp-box" />{a.no ? a.no() : M.f}</li>)}</ol>}
      {a.k === 'multi' && <ol className="kp-opts">{a.f.map((f, j) => <li key={j}><Rich as="span" html={f.lab()} /> {f.k === 'tf' ? <><span className="kp-box" />{M.yes} <span className="kp-box" />{M.no}</> : <span className="kp-blank" />}</li>)}</ol>}
      {!['mc', 'tf', 'multi'].includes(a.k) && <div className="kp-space kp-lines" style={{ '--rows': a.k === 'self' ? 12 : 3 }} />}
    </div>
  );
}

/* ---------- simulacre: un exercici amb apartats ---------- */
export const examData = (lang, ex) => {
  const C = getContent(lang);
  return C.bkSeeded(ex.seed, () => C.exBuild(ex.mode))[ex.i];
};

function MExam({ ex, checked }) {
  const { ui } = useLang();
  const S = K[ui], M = MS[ui];
  const lang = genLang(ui);
  const C = getContent(lang);
  const e = examData(lang, ex);
  const [open, setOpen] = useState({});
  if (!e) return null;
  return (
    <div className="mx">
      {e.parts.map((p, j) => (
        <div key={j} className="mx-part">
          <div className="mx-q" data-course="mates">
            {e.parts.length > 1 && <b className="mx-l">{'abcd'[j]})</b>}
            <span className="mx-pts">{num(p.pts, ui, 0)} {p.pts === 1 ? M.pt : M.pts}</span>
            <Rich className="mx-qt" html={p.q()} />
          </div>
          {checked && <button type="button" className="kit-link mb-solbtn" aria-expanded={!!open[j]} onClick={() => setOpen((o) => ({ ...o, [j]: !o[j] }))}>{S.solution}</button>}
          {checked && open[j] && (() => {
            const S_ = p.sol();
            return (
              <div className="kit-steps mb-sol" data-course="mates">
                <Rich html={(p.fx ? C.bkFormBox(p.fx()) : '') + (Array.isArray(S_) ? '<div class="steps">' + S_.map(C.stepRow).join('') + '</div>' : S_)} />
                <div className="bx rub"><div className="bh">{M.rub} ({num(p.pts, ui, 0)} {M.pts})</div>
                  <ul>{p.rub.map(([f, t], k) => <li key={k}><b>{Math.round(f * 100)} %</b> · <Rich as="span" html={C.md(t)} /></li>)}</ul>
                </div>
              </div>
            );
          })()}
        </div>
      ))}
    </div>
  );
}

function PrintExam({ ex }) {
  const { ui } = useLang();
  const M = MS[ui];
  const lang = genLang(ui);
  const C = getContent(lang);
  const e = examData(lang, ex);
  if (!e) return null;
  return (
    <div className="kp-gen" data-course="mates">
      {e.parts.map((p, j) => (
        <div key={j}>
          <p>{e.parts.length > 1 ? <b>{'abcd'[j]}) </b> : null}({num(p.pts, ui, 0)} {p.pts === 1 ? M.pt : M.pts})</p>
          <Rich html={p.q()} />
          <div className="kp-space kp-lines" style={{ '--rows': Math.round(6 + p.pts * 8) }} />
        </div>
      ))}
    </div>
  );
}

export const MATES_TYPES = {
  mbank: {
    inline: true,
    Input: MBank,
    check: (ex, v) => { const C = getContent('ca'); const I = bankInst(C, ex); return I ? bankCheck(C, I, v) ?? (I.a.k === 'self' ? null : false) : false; },
    space: 'none',
    Print: PrintBank,
    key: (ex, tr) => {
      const C = getContent(tr(['ca', 'es', 'es']));
      const I = bankInst(C, ex);
      if (!I) return '';
      const a = I.a;
      if (a.k === 'mc') return 'abcdef'[orderOf(ex, I).indexOf(a.c)] + ')';
      if (a.k === 'tf') return a.items.map((x, j) => (j + 1) + ') ' + (x.v ? 'C' : 'F')).join(' · ');
      return a.show ? strip(a.show()) : '—';
    },
  },
  mprac: MPRAC,
  mexam: {
    inline: true,
    Input: MExam,
    check: () => null,
    space: 'none',
    Print: PrintExam,
    key: () => '—',
  },
};
