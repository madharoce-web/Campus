/**
 * Tipus d'exercici propis de Computadors (course.types de la plantilla).
 *   cparts  exercici amb apartats (activitats i model d'examen): cada apartat té la seva resposta
 *           (num, int, dig, bits, ieee, mc), la seva solució pas a pas i, si escau, un laboratori.
 *           Es corregeix amb ansOK (answers.js); la nota és la fracció d'apartats correctes.
 *   cgen    exercici generat (pràctica i simulacre del CP1): { k, hard, seed } o { exq, seed }.
 *           Es torna a construir amb els generadors del curs en l'idioma actual (català o castellà;
 *           en anglès, en castellà fins que els generadors tinguin la traducció) i es corregeix amb prIsOK.
 */
import { useMemo, useState } from 'react';
import { examQuestions, getContent, practiceQuestion } from '../content/index.js';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import { inline, plain, useTr } from '../../_kit/text.jsx';
import { Blocks } from '../../_kit/blocks.jsx';
import { useMode } from '../../_kit/Mode.jsx';
import { K } from '../../_kit/strings.js';
import { ansOK, missHint, placeholder, showAnswer } from './answers.js';

const CS = {
  ca: { lab: 'Laboratori', result: 'Resultat', notYet: 'Encara no.', retry: 'Torna-ho a provar o obre la solució.', min: 'mínim', max: 'màxim', oor: 'No es pot representar' },
  es: { lab: 'Laboratorio', result: 'Resultado', notYet: 'Todavía no.', retry: 'Vuelve a intentarlo o abre la solución.', min: 'mínimo', max: 'máximo', oor: 'No se puede representar' },
  en: { lab: 'Lab', result: 'Result', notYet: 'Not yet.', retry: 'Try again or open the solution.', min: 'minimum', max: 'maximum', oor: 'Cannot be represented' },
};

/** Text d'un enunciat: marcatge o, si no s'ha pogut convertir, HTML ({ html }). */
function Q({ x }) {
  const tr = useTr();
  if (x && typeof x === 'object' && !Array.isArray(x) && 'html' in x) return <Rich as="span" html={tr(x.html)} />;
  return <>{inline(tr(x))}</>;
}

function Part({ p, i, exId, val, setVal, st, setSt, exam, checked, disabled, onPartCheck }) {
  const { ui } = useLang();
  const S = K[ui], C = CS[ui];
  const tr = useTr();
  const [mode] = useMode();
  const a = p.a;
  const r = exam ? (checked ? ansOK(a, val) : null) : st.r ?? null;
  const shown = exam ? checked : true;
  const check = (v = val) => { if (String(v ?? '').trim() === '') return; onPartCheck(i, ansOK(a, v), v); };
  const hint = r === false && a.k !== 'mc' ? missHint(a, exam ? val : st.chk) : null;
  const id = 'cp-' + exId + '-' + i;
  return (
    <div className={'cp-part' + (r === true ? ' is-ok' : r === false ? ' is-ko' : '')} data-part={i}>
      <div className="cp-row">
        {p.l && <span className="cp-l">{tr(p.l)}</span>}
        <span className="cp-q"><Q x={p.q} /></span>
        {a.k !== 'mc' && (
          <input id={id} className="am-input cp-in" type="text" value={val ?? ''} disabled={disabled} spellCheck="false" autoComplete="off"
            placeholder={tr(placeholder(a))} aria-label={S.answer + (p.l ? ' ' + tr(p.l) : '')}
            onChange={(e) => { setVal(e.target.value); if (!exam) setSt({ r: null }); }}
            onKeyDown={(e) => { if (e.key === 'Enter' && !exam) { e.preventDefault(); check(); } }} />
        )}
        <span className="cp-acts">
          {!exam && a.k !== 'mc' && <button type="button" className="am-btn am-btn-secondary am-btn-sm cp-check" onClick={() => check()}>{S.checkBtn}</button>}
          {shown && (p.sol || a) && <button type="button" className="kit-link cp-solbtn" aria-expanded={!!st.sol} onClick={() => setSt({ sol: !st.sol })}>{S.solution}</button>}
          {!exam && p.lab && <button type="button" className="kit-link cp-labbtn" aria-expanded={!!st.lab} onClick={() => setSt({ lab: !st.lab })}>{C.lab}</button>}
        </span>
      </div>
      {a.k === 'mc' && (
        <div className="kit-opts kit-opts-row cp-mc">
          {a.opts.map((o, j) => (
            <button key={j} type="button" disabled={disabled} aria-pressed={String(val) === String(j)}
              className={'kit-opt' + (String(val) === String(j) ? ' is-on' : '') + (r !== null && String(val) === String(j) ? (j === a.v ? ' is-right' : ' is-wrong') : '')}
              onClick={() => { setVal(String(j)); if (!exam) check(String(j)); }}><Q x={o} /></button>
          ))}
        </div>
      )}
      {r === true && <p className="kit-fb is-ok cp-fb">{S.ok} {a.k !== 'mc' && <span className="cp-res">{showAnswer(a, tr)}</span>}</p>}
      {r === false && <p className="kit-fb is-ko cp-fb">{C.notYet} {hint ? inline(tr(hint)) : null} {!exam && C.retry}</p>}
      {st.sol && (
        <div className="cp-sol">
          <p><b>{C.result}:</b> <span className="cp-res">{showAnswer(a, tr)}</span></p>
          {p.sol && <Blocks blocks={p.sol} mode={mode} />}
        </div>
      )}
      {st.lab && p.lab && <Blocks blocks={[{ t: 'lab', id: p.lab.id, props: p.lab.props }]} mode={mode} />}
    </div>
  );
}

function Parts({ ex, value, onChange, disabled, checked, onCheck, exam }) {
  const [st, setSt] = useState({});
  const vals = value || {};
  const onPartCheck = (i, r, v) => {
    const next = { ...st, [i]: { ...(st[i] || {}), r, chk: v } };
    setSt(next);
    const n = ex.parts.filter((_, j) => next[j]?.r === true).length;
    onCheck?.(n === ex.parts.length ? true : n / ex.parts.length);
  };
  return (
    <div className="cp-parts">
      {ex.parts.map((p, i) => (
        <Part key={i} p={p} i={i} exId={ex.id} val={vals[i]} st={st[i] || {}} exam={exam} checked={checked} disabled={disabled}
          setVal={(v) => onChange({ ...vals, [i]: v })} setSt={(patch) => setSt((s) => ({ ...s, [i]: { ...(s[i] || {}), ...patch } }))}
          onPartCheck={onPartCheck} />
      ))}
    </div>
  );
}

function PrintParts({ ex }) {
  const tr = useTr();
  return (
    <ol className="kp-cparts">
      {ex.parts.map((p, i) => (
        <li key={i}>
          <span className="kp-cl">{p.l ? tr(p.l) + ')' : ''}</span>
          <span className="kp-cq"><Q x={p.q} /></span>
          {p.a.k === 'mc'
            ? <span className="kp-cmc">{p.a.opts.map((o, j) => <span key={j}><span className="kp-box" /><Q x={o} /></span>)}</span>
            : <span className="kp-blank" />}
        </li>
      ))}
    </ol>
  );
}

/* ---------- exercicis generats ---------- */
const genLang = (ui) => (ui === 'ca' ? 'ca' : 'es');
export const genQ = (lang, ex) => (ex.exq != null
  ? examQuestions(lang, ex.seed)[ex.exq]
  : practiceQuestion(lang, { k: ex.k, lvl: ex.hard ? 'dur' : 'normal', seed: ex.seed, seen: [] }).q);
const emptyGen = (q, v) => v == null || v === '' || (q.range && (!v.min || !v.max));

function Gen({ ex, value, onChange, disabled, checked, onCheck, exam }) {
  const { ui } = useLang();
  const S = K[ui], CC = CS[ui];
  const lang = genLang(ui);
  const { C, prIsOK } = getContent(lang);
  const q = useMemo(() => genQ(lang, ex), [lang, ex]);
  const [st, setSt] = useState({ r: null, sol: false });
  const v = value ?? (q.range ? { min: '', max: '' } : '');
  const r = exam ? (checked ? prIsOK(q, v) : null) : st.r;
  const verify = (x = v) => { if (emptyGen(q, x)) return; const ok = prIsOK(q, x); setSt((o) => ({ ...o, r: ok })); onCheck?.(ok); };
  const set = (x) => { onChange(x); if (!exam) setSt((o) => ({ ...o, r: null })); };
  const enter = (e) => { if (e.key === 'Enter' && !exam) { e.preventDefault(); verify(); } };
  let ui2;
  if (q.mc) {
    ui2 = (
      <div className="kit-opts">
        {q.order.map((i, j) => (
          <button key={i} type="button" disabled={disabled} aria-pressed={v === i}
            className={'kit-opt' + (v === i ? ' is-on' : '') + (r !== null ? (i === 0 ? ' is-right' : v === i ? ' is-wrong' : '') : '')}
            onClick={() => { set(i); if (!exam) verify(i); }}>
            <span className="kit-opt-l">{'abcd'[j]})</span><Rich as="span" html={q.o()[i]} />
          </button>
        ))}
      </div>
    );
  } else if (q.range) {
    ui2 = (
      <div className="kit-line cg-range">
        <label>{CC.min} <input className="am-input cp-in" value={v.min} disabled={disabled} onChange={(e) => set({ ...v, min: e.target.value })} onKeyDown={enter} /></label>
        <label>{CC.max} <input className="am-input cp-in" value={v.max} disabled={disabled} onChange={(e) => set({ ...v, max: e.target.value })} onKeyDown={enter} /></label>
      </div>
    );
  } else {
    ui2 = (
      <div className="kit-line cg-line">
        <input className="am-input cp-in" value={v === C.OOR ? '' : v} disabled={disabled || v === C.OOR} spellCheck="false" autoComplete="off" aria-label={S.answer}
          placeholder={tr3(placeholder(q.a.k === 'oor' ? { k: 'bits' } : q.a), ui)} onChange={(e) => set(e.target.value)} onKeyDown={enter} />
        {q.oor && <button type="button" className={'am-btn ' + (v === C.OOR ? 'am-btn-primary' : 'am-btn-secondary')} disabled={disabled} aria-pressed={v === C.OOR} onClick={() => set(v === C.OOR ? '' : C.OOR)}>{CC.oor}</button>}
      </div>
    );
  }
  // els generadors (i els seus avisos) són en català i castellà
  const hint = r === false && !q.mc && !q.range && v !== C.OOR && q.a.k !== 'oor' ? C.missHint(q.a, v) : null;
  const res = q.mc ? null : q.range ? '[' + C.sgn(q.range[0]) + ', ' + C.sgn(q.range[1]) + ']' : C.ansShow(q.a);
  return (
    <div className="cg">
      <div className="cg-q" data-course="comp"><Rich html={q.p()} /></div>
      {ui2}
      <div className="kit-ex-acts">
        {!exam && !q.mc && <button type="button" className="am-btn am-btn-primary kit-check" onClick={() => verify()} disabled={emptyGen(q, v)}>{S.checkBtn}</button>}
        {(!exam || checked) && <button type="button" className="kit-link cp-solbtn" aria-expanded={st.sol} onClick={() => setSt((o) => ({ ...o, sol: !o.sol }))}>{S.solution}</button>}
      </div>
      {r === true && <p className="kit-fb is-ok">{S.ok} {res && <span className="cp-res">{res}</span>}</p>}
      {r === false && <p className="kit-fb is-ko">{CC.notYet} {hint}</p>}
      {st.sol && (
        <div className="cp-sol" data-course="comp">
          {res && <p><b>{CC.result}:</b> <span className="cp-res">{res}</span></p>}
          <Rich html={q.mc ? q.w() : q.sol ? q.sol() : ''} />
        </div>
      )}
    </div>
  );
}

function PrintGen({ ex }) {
  const { ui } = useLang();
  const q = genQ(genLang(ui), ex);
  return (
    <div className="kp-gen">
      <div data-course="comp"><Rich html={q.p()} /></div>
      {q.mc
        ? <ol className="kp-opts">{q.order.map((i, j) => <li key={i}><span className="kp-box" />{'abcd'[j]}) <Rich as="span" html={q.o()[i]} /></li>)}</ol>
        : <div className="kp-space kp-lines" style={{ '--rows': q.range ? 2 : 3 }} />}
    </div>
  );
}

const tr3 = (x, ui) => (Array.isArray(x) ? x[ui === 'en' ? 2 : ui === 'es' ? 1 : 0] ?? x[1] : x);

export const COMP_TYPES = {
  cparts: {
    inline: true,
    Input: Parts,
    check: (ex, v = {}) => {
      const n = ex.parts.filter((p, i) => ansOK(p.a, v[i])).length;
      return n === ex.parts.length ? true : n / ex.parts.length;
    },
    space: 'none',
    Print: PrintParts,
    key: (ex, tr) => ex.parts.map((p) => (p.l ? tr(p.l) + ') ' : '') + plain(showAnswer(p.a, tr))).join(' · '),
  },
  cgen: {
    inline: true,
    Input: Gen,
    check: (ex, v) => { const q = genQ('ca', ex); return !emptyGen(q, v) && getContent('ca').prIsOK(q, v); },
    space: 'none',
    Print: PrintGen,
    key: (ex, tr) => {
      const lang = tr(['ca', 'es', 'es']);
      const { C } = getContent(lang);
      const q = genQ(lang, ex);
      return q.mc ? 'abcd'[q.order.indexOf(0)] + ')' : q.range ? '[' + C.sgn(q.range[0]) + ', ' + C.sgn(q.range[1]) + ']' : plain(C.ansShow(q.a));
    },
  },
};
