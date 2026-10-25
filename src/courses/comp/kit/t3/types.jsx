/**
 * Tipus d'exercici del T3 (àlgebra de Boole):
 *   tt    completar la columna de sortida d'una taula de veritat: { expr, vars?, out? }
 *   bool  escriure una expressió: { answer, maxLit? } (es corregeix per equivalència i, si cal,
 *         amb un màxim de literals, per als exercicis de simplificar)
 * Les expressions s'escriuen amb la notació de boole.js (A', AB, A+B, A⊕B).
 */
import { useMemo } from 'react';
import { useLang } from '../../../../lib/i18n.jsx';
import { TeX } from '../../../_kit/text.jsx';
import { E, column, equivalent, errText, literals, parse, rows, toTeX, toText, vars } from './boole.js';

const LI = { ca: 0, es: 1, en: 2 };
const W = {
  out: ['Sortida', 'Salida', 'Output'],
  cell: ['Clica per posar 1 o 0', 'Pulsa para poner 1 o 0', 'Click to set 1 or 0'],
  help: ["Negació: A' · producte: AB o A·B · suma: A+B · o exclusiva: A⊕B o A^B", "Negación: A' · producto: AB o A·B · suma: A+B · o exclusiva: A⊕B o A^B", "NOT: A' · product: AB or A·B · sum: A+B · XOR: A⊕B or A^B"],
  reads: ['Es llegeix:', 'Se lee:', 'Reads as:'],
  simpler: ['És equivalent, però encara es pot simplificar: té %a literals i n’hi ha prou amb %b.', 'Es equivalente, pero aún se puede simplificar: tiene %a literales y basta con %b.', 'It is equivalent, but it can still be simplified: it has %a literals and %b are enough.'],
  differs: ['No és equivalent: amb %v la teva expressió val %a i hauria de valer %b.', 'No es equivalente: con %v tu expresión vale %a y debería valer %b.', 'Not equivalent: with %v your expression gives %a but it should give %b.'],
  ok: ['Equivalent i prou simplificada.', 'Equivalente y bastante simplificada.', 'Equivalent and simplified enough.'],
};

/* ---------- tt: taula de veritat ---------- */
const ttVars = (ex) => ex.vars || vars(E(ex.expr));

function TruthInput({ ex, value, onChange, disabled, checked }) {
  const { ui } = useLang();
  const li = LI[ui];
  const names = useMemo(() => ttVars(ex), [ex]);
  const good = useMemo(() => column(E(ex.expr), names), [ex, names]);
  const v = value || [];
  const set = (i) => { const n = good.map((_, j) => v[j] ?? null); n[i] = n[i] === 1 ? 0 : n[i] === 0 ? null : 1; onChange(n); };
  return (
    <div className="kit-tw bl-ttwrap">
      <table className="kit-table bl-tt">
        <thead><tr>{names.map((n) => <th key={n} scope="col">{n}</th>)}<th scope="col" className="bl-out">{ex.out ? <TeX tex={ex.out + '=' + toTeX(E(ex.expr))} /> : W.out[li]}</th></tr></thead>
        <tbody>
          {rows(names).map((env, i) => {
            const mark = checked && v[i] != null ? (v[i] === good[i] ? ' is-ok' : ' is-ko') : checked ? ' is-ko' : '';
            return (
              <tr key={i}>
                {names.map((n) => <td key={n}>{env[n]}</td>)}
                <td className={'bl-out' + mark}>
                  <button type="button" className="bl-cell" disabled={disabled} title={W.cell[li]} aria-label={W.out[li] + ' ' + (i + 1)} onClick={() => set(i)}>{v[i] ?? '·'}</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function PrintTruth({ ex }) {
  const names = ttVars(ex);
  return (
    <table className="kp-tt">
      <thead><tr>{names.map((n) => <th key={n}>{n}</th>)}<th>{ex.out ? <TeX tex={ex.out} /> : 'S'}</th></tr></thead>
      <tbody>{rows(names).map((env, i) => <tr key={i}>{names.map((n) => <td key={n}>{env[n]}</td>)}<td /></tr>)}</tbody>
    </table>
  );
}

/* ---------- bool: escriure una expressió ---------- */
function BoolInput({ ex, value, onChange, disabled, checked }) {
  const { ui } = useLang();
  const li = LI[ui];
  const r = value ? parse(value) : null;
  let detail = null;
  if (checked && r && r.ast) {
    const target = E(ex.answer);
    const q = equivalent(r.ast, target);
    if (!q.eq) {
      const env = q.names.map((n) => n + ' = ' + q.env[n]).join(', ');
      detail = <p className="kit-fb is-ko bl-why">{W.differs[li].replace('%v', env).replace('%a', q.a).replace('%b', q.b)}</p>;
    } else if (ex.maxLit && literals(r.ast) > ex.maxLit) {
      detail = <p className="kit-fb is-mid bl-why">{W.simpler[li].replace('%a', literals(r.ast)).replace('%b', ex.maxLit)}</p>;
    }
  }
  return (
    <div className="bl-bool">
      <input className="am-input bl-in" value={value ?? ''} disabled={disabled} spellCheck="false" autoComplete="off" autoCapitalize="characters"
        placeholder="A'B + C" aria-label={W.help[li]} onChange={(e) => onChange(e.target.value)} />
      <p className="bl-prev" aria-live="polite">
        {!value ? <span className="kit-muted">{W.help[li]}</span>
          : r.ast ? <>{W.reads[li]} <TeX tex={toTeX(r.ast)} /></>
            : <span className="bl-err">{errText(r, li)}</span>}
      </p>
      {detail}
    </div>
  );
}

export const BOOLE_TYPES = {
  tt: {
    Input: TruthInput,
    check: (ex, v = []) => {
      const good = column(E(ex.expr), ttVars(ex));
      const n = good.filter((g, i) => v[i] === g).length;
      return n === good.length ? true : n / good.length;
    },
    space: 'none',
    Print: PrintTruth,
    key: (ex) => (ex.out || 'S') + ' = ' + column(E(ex.expr), ttVars(ex)).join(''),
  },
  bool: {
    Input: BoolInput,
    check: (ex, v) => {
      const r = parse(v);
      if (!r.ast) return false;
      return equivalent(r.ast, E(ex.answer)).eq && (!ex.maxLit || literals(r.ast) <= ex.maxLit);
    },
    space: 'lines:3',
    key: (ex) => toText(E(ex.answer)),
  },
};
