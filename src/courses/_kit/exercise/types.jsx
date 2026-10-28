/**
 * Tipus d'exercici de la plantilla. Cada tipus té:
 *   Input({ ex, value, onChange, disabled })  el control de resposta
 *   check(ex, value) → true | false | null      null: no es pot corregir sol (autoavaluació)
 *   space                                       espai de resposta per defecte al PDF
 *   Print({ ex })                               (opcional) la resposta al PDF: opcions per marcar…
 *   key(ex, tr) → text                          (opcional) la resposta correcta, per al full de solucions
 *   Key({ ex })                                 (opcional) el mateix com a component, quan la clau no cap
 *                                               en una línia (solució per apartats, jocs de proves…); té prioritat
 * Una assignatura pot afegir-ne de propis (course.types), p. ex. «set», «bits» o «cpp».
 */
import { useId } from 'react';
import { fold } from '../../../lib/html.js';
import { inline, plain, useTr } from '../text.jsx';
import { K } from '../strings.js';
import { useLang } from '../../../lib/i18n.jsx';

const norm = (s) => fold(String(s ?? '')).replace(/\s+/g, ' ').trim();
const alts = (a) => (Array.isArray(a) ? a : [a]);

/** Lectures possibles d'un nombre escrit a mà: «1.480,5», «1480.5», «−20», «3/4», «12 %». */
export function readNums(s) {
  let t = String(s ?? '').trim().replace(/\s/g, '').replace(/[−–]/g, '-').replace(/[%€$]|M€/g, '');
  if (!t) return [];
  if (/^-?\d+\/\d+$/.test(t)) { const [a, b] = t.split('/').map(Number); return b ? [a / b] : []; }
  const out = [];
  if (t.includes(',') && t.includes('.')) out.push(t.replace(/\./g, '').replace(',', '.'));
  else if (t.includes(',')) out.push(t.replace(',', '.'));
  else if (/^-?\d{1,3}(\.\d{3})+$/.test(t)) { out.push(t.replace(/\./g, '')); out.push(t); }
  else out.push(t);
  return out.map(Number).filter((x) => Number.isFinite(x));
}
const near = (v, a, tol) => readNums(v).some((x) => Math.abs(x - a) <= (tol ?? 1e-6) + 1e-9);

function Mcq({ ex, value, onChange, disabled }) {
  const tr = useTr();
  const name = useId();
  return (
    <div className="kit-opts" role="radiogroup">
      {ex.opts.map((o, i) => (
        <label key={i} className={'kit-opt' + (value === i ? ' is-on' : '')}>
          <input type="radio" name={name} checked={value === i} disabled={disabled} onChange={() => onChange(i)} />
          <span className="kit-opt-l">{String.fromCharCode(97 + i)})</span><span>{inline(tr(o))}</span>
        </label>
      ))}
    </div>
  );
}

function Multi({ ex, value = [], onChange, disabled }) {
  const tr = useTr();
  const set = new Set(value);
  return (
    <div className="kit-opts">
      {ex.opts.map((o, i) => (
        <label key={i} className={'kit-opt' + (set.has(i) ? ' is-on' : '')}>
          <input type="checkbox" checked={set.has(i)} disabled={disabled}
            onChange={() => { const n = new Set(set); if (n.has(i)) n.delete(i); else n.add(i); onChange([...n].sort((a, b) => a - b)); }} />
          <span className="kit-opt-l">{String.fromCharCode(97 + i)})</span><span>{inline(tr(o))}</span>
        </label>
      ))}
    </div>
  );
}

function Tf({ value, onChange, disabled }) {
  const { ui } = useLang();
  const S = K[ui];
  const name = useId();
  return (
    <div className="kit-opts kit-opts-row" role="radiogroup">
      {[[true, S.trueL], [false, S.falseL]].map(([v, l]) => (
        <label key={l} className={'kit-opt' + (value === v ? ' is-on' : '')}>
          <input type="radio" name={name} checked={value === v} disabled={disabled} onChange={() => onChange(v)} /><span>{l}</span>
        </label>
      ))}
    </div>
  );
}

function Line({ ex, value = '', onChange, disabled, inputMode }) {
  const { ui } = useLang();
  return (
    <div className="kit-line">
      <input className="am-input kit-in" value={value} disabled={disabled} inputMode={inputMode} aria-label={K[ui].yourAnswer}
        placeholder={K[ui].yourAnswer} onChange={(e) => onChange(e.target.value)} />
      {ex.suffix && <span className="kit-suffix">{ex.suffix}</span>}
    </div>
  );
}

function Open({ value = '', onChange, disabled }) {
  const { ui } = useLang();
  return <textarea className="am-input kit-open" rows={4} value={value} disabled={disabled} placeholder={K[ui].yourAnswer} aria-label={K[ui].yourAnswer} onChange={(e) => onChange(e.target.value)} />;
}

function Nums({ ex, value = [], onChange, disabled }) {
  const tr = useTr();
  return (
    <div className="kit-nums">
      {ex.parts.map((p, i) => (
        <label key={i} className="kit-nums-r">
          <span className="kit-nums-l">{inline(tr(p.label))}</span>
          <span className="kit-line">
            <input className="am-input kit-in" inputMode="decimal" value={value[i] ?? ''} disabled={disabled}
              onChange={(e) => { const n = ex.parts.map((_, j) => value[j] ?? ''); n[i] = e.target.value; onChange(n); }} />
            {p.suffix && <span className="kit-suffix">{p.suffix}</span>}
          </span>
        </label>
      ))}
    </div>
  );
}

function Match({ ex, value = [], onChange, disabled }) {
  const tr = useTr();
  return (
    <ol className="kit-match">
      {ex.items.map((it, i) => (
        <li key={i}>
          <div className="kit-match-q">{inline(tr(it.q))}</div>
          <div className="kit-chips">
            {it.o.map((o, j) => (
              <button key={j} type="button" disabled={disabled} aria-pressed={value[i] === j} className={'kit-chip' + (value[i] === j ? ' is-on' : '')}
                onClick={() => { const n = ex.items.map((_, k) => value[k] ?? null); n[i] = j; onChange(n); }}>{inline(tr(o))}</button>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ---------- versió impresa ---------- */
const letter = (i) => String.fromCharCode(97 + i);

function PrintOpts({ ex }) {
  const tr = useTr();
  const { ui } = useLang();
  const opts = ex.type === 'tf' ? [K[ui].trueL, K[ui].falseL] : ex.opts;
  return <ol className="kp-opts">{opts.map((o, i) => <li key={i}><span className="kp-box" />{letter(i)}) {inline(tr(o))}</li>)}</ol>;
}

function PrintMatch({ ex }) {
  const tr = useTr();
  return (
    <ol className="kp-match">
      {ex.items.map((it, i) => (
        <li key={i}>
          <div>{inline(tr(it.q))}</div>
          <div className="kp-match-o">{it.o.map((o, j) => <span key={j}><span className="kp-box" />{inline(tr(o))}</span>)}</div>
        </li>
      ))}
    </ol>
  );
}

function PrintNums({ ex }) {
  const tr = useTr();
  return (
    <div className="kp-nums">
      {ex.parts.map((p, i) => (
        <div key={i} className="kp-nums-r"><span>{inline(tr(p.label))}</span><span className="kp-blank" />{p.suffix && <span>{p.suffix}</span>}</div>
      ))}
    </div>
  );
}

const fmtNum = (x) => (typeof x === 'number' ? x.toLocaleString('ca-ES', { maximumFractionDigits: 6 }) : String(x));

export const BASE_TYPES = {
  mcq: { Input: Mcq, check: (ex, v) => (v == null ? false : v === ex.answer), space: 'none', Print: PrintOpts, key: (ex) => letter(ex.answer) + ')' },
  multi: {
    Input: Multi, check: (ex, v) => JSON.stringify([...(v || [])].sort()) === JSON.stringify([...ex.answer].sort()),
    space: 'none', Print: PrintOpts, key: (ex) => [...ex.answer].sort().map((i) => letter(i) + ')').join(' '),
  },
  tf: { Input: Tf, check: (ex, v) => v === ex.answer, space: 'none', Print: PrintOpts, key: (ex) => (ex.answer ? 'a)' : 'b)') },
  num: {
    Input: (p) => <Line {...p} inputMode="decimal" />,
    check: (ex, v) => alts(ex.answer).some((a) => near(v, a, ex.rel ? (ex.tol ?? 0) * Math.abs(a) : ex.tol)),
    space: 'lines:3',
    key: (ex) => fmtNum(alts(ex.answer)[0]) + (ex.suffix ? ' ' + ex.suffix : ''),
  },
  // diversos resultats numèrics: parts [{ label, answer, tol?, suffix? }]
  nums: {
    Input: Nums,
    check: (ex, v = []) => ex.parts.every((p, i) => near(v[i], p.answer, p.tol)),
    space: 'lines:4', Print: PrintNums,
    key: (ex, tr) => ex.parts.map((p) => plain(tr(p.label)) + ' ' + fmtNum(p.answer) + (p.suffix ? ' ' + p.suffix : '')).join(' · '),
  },
  // classificar: items [{ q, o:[opcions] }], answer [opció de cada ítem]
  match: {
    Input: Match,
    check: (ex, v = []) => ex.items.every((_, i) => v[i] === ex.answer[i]),
    space: 'none', Print: PrintMatch,
    key: (ex, tr) => ex.items.map((it, i) => (i + 1) + ': ' + plain(tr(it.o[ex.answer[i]]))).join(' · '),
  },
  short: { Input: Line, check: (ex, v) => alts(ex.answer).some((a) => norm(a) === norm(v)), space: 'lines:2', key: (ex) => String(alts(ex.answer)[0]) },
  open: { Input: Open, check: () => null, space: 'lines:10' },
};

/** Tipus d'un exercici: primer els de l'assignatura, després els de base. */
export function typeOf(ex, courseTypes) {
  return (courseTypes && courseTypes[ex.type]) || BASE_TYPES[ex.type] || BASE_TYPES.open;
}
