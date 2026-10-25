/**
 * Laboratoris del T3 (àlgebra de Boole). Es pinten dins de l'àmbit d'estils de Computadors
 * (classes lab, lab-h, lab-b) i desen l'estat de la visita amb useSlot, com els altres laboratoris.
 *   Gates   «Portes en viu»: interruptors A, B (i C) i les sis operacions
 *   Truth   «Taula de veritat»: escriu una expressió i en veus la taula, amb els passos
 *   Equiv   «Són equivalents?»: dues expressions, la taula de cadascuna i la fila on difereixen
 */
import { useContext } from 'react';
import { useLang } from '../../../../lib/i18n.jsx';
import { LabContext } from '../../ui.jsx';
import { TeX } from '../../../_kit/text.jsx';
import { useSlot } from '../../store.js';
import { column, equivalent, errText, ev, parse, rows, steps, toTeX, vars } from './boole.js';

const LI = { ca: 0, es: 1, en: 2 };
const W = {
  lab: ['Laboratori', 'Laboratorio', 'Lab'],
  gatesT: ['Portes en viu: les sis operacions', 'Puertas en vivo: las seis operaciones', 'Live gates: the six operations'],
  gatesP: ['Activa i desactiva les entrades: cada operació s’encén quan val 1. Tria una operació per veure’n tota la taula, amb la fila actual marcada.', 'Activa y desactiva las entradas: cada operación se enciende cuando vale 1. Elige una operación para ver toda su tabla, con la fila actual marcada.', 'Switch the inputs on and off: each operation lights up when it is 1. Pick an operation to see its whole table, with the current row marked.'],
  three: ['Tres entrades (A, B, C)', 'Tres entradas (A, B, C)', 'Three inputs (A, B, C)'],
  op: ['Operació', 'Operación', 'Operation'],
  expr: ['Expressió', 'Expresión', 'Expression'],
  val: ['Valor', 'Valor', 'Value'],
  rule: ['Quan val 1', 'Cuándo vale 1', 'When it is 1'],
  truthT: ['Taula de veritat d’una expressió', 'Tabla de verdad de una expresión', 'Truth table of an expression'],
  truthP: ["Escriu una expressió (A' per a la negació, AB o A·B per al producte, A+B per a la suma, A⊕B per a la o exclusiva). La taula es construeix fila a fila en ordre binari.", "Escribe una expresión (A' para la negación, AB o A·B para el producto, A+B para la suma, A⊕B para la o exclusiva). La tabla se construye fila a fila en orden binario.", "Type an expression (A' for NOT, AB or A·B for the product, A+B for the sum, A⊕B for XOR). The table is built row by row in binary order."],
  stepsL: ['Mostra les columnes intermèdies', 'Muestra las columnas intermedias', 'Show the intermediate columns'],
  ones: ['La sortida val 1 a %n de %t files.', 'La salida vale 1 en %n de %t filas.', 'The output is 1 in %n of %t rows.'],
  tooMany: ['Com a màxim 5 variables.', 'Como máximo 5 variables.', 'At most 5 variables.'],
  equivT: ['Són equivalents? Comprova una llei', '¿Son equivalentes? Comprueba una ley', 'Are they equivalent? Check a law'],
  equivP: ['Dues expressions són equivalents si tenen la mateixa taula de veritat. Tria una llei o escriu-ne dues de teves.', 'Dos expresiones son equivalentes si tienen la misma tabla de verdad. Elige una ley o escribe dos tuyas.', 'Two expressions are equivalent if they have the same truth table. Pick a law or type two of your own.'],
  preset: ['Exemple', 'Ejemplo', 'Example'],
  yes: ['Són equivalents: les dues columnes coincideixen a totes les files.', 'Son equivalentes: las dos columnas coinciden en todas las filas.', 'They are equivalent: both columns match in every row.'],
  no: ['No són equivalents: difereixen a les files marcades.', 'No son equivalentes: difieren en las filas marcadas.', 'They are not equivalent: they differ in the marked rows.'],
  left: ['Expressió 1', 'Expresión 1', 'Expression 1'],
  right: ['Expressió 2', 'Expresión 2', 'Expression 2'],
};
const t = (k, li) => W[k][li];

function Shell({ title, children }) {
  const { ui } = useLang();
  const lab = useContext(LabContext);
  return (
    <div className="lab bl-lab" data-w={lab ? lab.w : undefined} data-id={lab ? lab.id : undefined}>
      <div className="lab-h"><span className="tag">{t('lab', LI[ui])}</span><span className="tt">{title}</span></div>
      <div className="lab-b">{children}</div>
    </div>
  );
}

/** Camp d'expressió amb la lectura en fórmula a sota (o l'error). */
function ExprField({ id, value, onChange, label, li }) {
  const r = parse(value);
  return (
    <div className="bl-field">
      <label htmlFor={id}>{label}</label>
      <input id={id} className="bl-in" value={value} spellCheck="false" autoComplete="off" autoCapitalize="characters" onChange={(e) => onChange(e.target.value)} />
      <div className="bl-prev">{r.ast ? <TeX tex={toTeX(r.ast)} /> : <span className="bl-err">{errText(r, li)}</span>}</div>
    </div>
  );
}

/* ---------- portes en viu ---------- */
const OPS = [
  ['NOT', "A'", ['inverteix l’entrada', 'invierte la entrada', 'inverts the input']],
  ['AND', 'AB', ['totes valen 1', 'todas valen 1', 'all inputs are 1']],
  ['OR', 'A+B', ['almenys una val 1', 'al menos una vale 1', 'at least one input is 1']],
  ['NAND', "(AB)'", ['almenys una val 0', 'al menos una vale 0', 'at least one input is 0']],
  ['NOR', "(A+B)'", ['totes valen 0', 'todas valen 0', 'all inputs are 0']],
  ['XOR', 'A⊕B', ['nombre senar d’uns', 'número impar de unos', 'odd number of ones']],
];
const with3 = (e) => e.replace('AB', 'ABC').replace('A+B', 'A+B+C').replace('A⊕B', 'A⊕B⊕C');

export function Gates({ id = 'bl-gates' }) {
  const { ui } = useLang();
  const li = LI[ui];
  const [s, set] = useSlot(id, { A: 0, B: 1, C: 0, three: false, op: 'AND' });
  const names = s.three ? ['A', 'B', 'C'] : ['A', 'B'];
  const ops = OPS.map(([n, e, r]) => [n, parse(s.three && n !== 'NOT' ? with3(e) : e).ast, r]);
  const sel = ops.find((o) => o[0] === s.op) || ops[1];
  const selNames = sel[0] === 'NOT' ? ['A'] : names;
  const cur = rows(selNames).findIndex((env) => selNames.every((n) => env[n] === s[n]));
  return (
    <Shell title={t('gatesT', li)}>
      <p className="small">{t('gatesP', li)}</p>
      <div className="bl-switches" role="group" aria-label="A, B, C">
        {names.map((n) => (
          <button key={n} type="button" className={'bl-sw' + (s[n] ? ' is-on' : '')} aria-pressed={!!s[n]} data-var={n} onClick={() => set({ [n]: s[n] ? 0 : 1 })}>
            <span className="bl-sw-n">{n}</span><span className="bl-sw-v">{s[n]}</span>
          </button>
        ))}
        <label className="bl-three"><input type="checkbox" checked={s.three} onChange={(e) => set({ three: e.target.checked })} /> {t('three', li)}</label>
      </div>
      <div className="tbl">
        <table className="bl-ops">
          <thead><tr><th>{t('op', li)}</th><th>{t('expr', li)}</th><th>{t('rule', li)}</th><th className="c">{t('val', li)}</th></tr></thead>
          <tbody>
            {ops.map(([n, ast, r]) => {
              const v = ev(ast, s);
              return (
                <tr key={n} className={s.op === n ? 'is-sel' : undefined} data-op={n}>
                  <td><button type="button" className="bl-opbtn" aria-pressed={s.op === n} onClick={() => set({ op: n })}>{n}</button></td>
                  <td><TeX tex={toTeX(ast)} /></td>
                  <td className="small">{r[li]}</td>
                  <td className="c"><span className={'bl-led' + (v ? ' is-on' : '')} data-v={v}>{v}</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="tbl bl-mini">
        <table>
          <thead><tr>{selNames.map((n) => <th key={n} className="c">{n}</th>)}<th className="c"><TeX tex={toTeX(sel[1])} /></th></tr></thead>
          <tbody>{rows(selNames).map((env, i) => (
            <tr key={i} className={i === cur ? 'is-cur' : undefined}>{selNames.map((n) => <td key={n} className="c">{env[n]}</td>)}<td className="c"><b>{ev(sel[1], env)}</b></td></tr>
          ))}</tbody>
        </table>
      </div>
    </Shell>
  );
}

/* ---------- taula de veritat ---------- */
export function Truth({ id = 'bl-truth', cfg = {} }) {
  const { ui } = useLang();
  const li = LI[ui];
  const [s, set] = useSlot(id, { e: cfg.e || "A·B' + C", steps: true });
  const r = parse(s.e);
  const names = r.ast ? vars(r.ast) : [];
  const cols = r.ast ? (s.steps ? steps(r.ast) : [r.ast]) : [];
  const out = r.ast && names.length <= 5 ? column(r.ast, names) : [];
  return (
    <Shell title={t('truthT', li)}>
      <p className="small">{t('truthP', li)}</p>
      <ExprField id={id + '-e'} value={s.e} onChange={(e) => set({ e })} label={t('expr', li)} li={li} />
      <label className="bl-three"><input type="checkbox" checked={s.steps} onChange={(e) => set({ steps: e.target.checked })} /> {t('stepsL', li)}</label>
      {r.ast && names.length > 5 && <p className="bl-err">{t('tooMany', li)}</p>}
      {r.ast && names.length <= 5 && (
        <>
          <div className="tbl">
            <table className="bl-truth">
              <thead><tr>
                {names.map((n) => <th key={n} className="c">{n}</th>)}
                {cols.map((c, j) => <th key={j} className={'c' + (j === cols.length - 1 ? ' bl-final' : '')}><TeX tex={toTeX(c)} /></th>)}
              </tr></thead>
              <tbody>{rows(names).map((env, i) => (
                <tr key={i} className={out[i] ? 'is-one' : undefined}>
                  {names.map((n) => <td key={n} className="c">{env[n]}</td>)}
                  {cols.map((c, j) => <td key={j} className={'c' + (j === cols.length - 1 ? ' bl-final' : '')}>{ev(c, env)}</td>)}
                </tr>
              ))}</tbody>
            </table>
          </div>
          <p className="small" id={id + '-sum'}>{t('ones', li).replace('%n', out.filter(Boolean).length).replace('%t', out.length)}</p>
        </>
      )}
    </Shell>
  );
}

/* ---------- són equivalents? ---------- */
const PRESETS = [
  ['abs1', 'A+AB', 'A', ['Absorció', 'Absorción', 'Absorption']],
  ['abs2', 'A(A+B)', 'A', ['Absorció (dual)', 'Absorción (dual)', 'Absorption (dual)']],
  ['dist', 'A(B+C)', 'AB+AC', ['Distributiva', 'Distributiva', 'Distributive']],
  ['dist2', 'A+BC', '(A+B)(A+C)', ['Distributiva dual (ampliació)', 'Distributiva dual (ampliación)', 'Dual distributive (extension)']],
  ['comp', "A+A'B", 'A+B', ['A + ĀB = A + B (ampliació)', 'A + ĀB = A + B (ampliación)', 'A + ĀB = A + B (extension)']],
  ['xor', 'A⊕B', "A'B+AB'", ['XOR amb operacions bàsiques', 'XOR con operaciones básicas', 'XOR with basic operations']],
  ['morgan', "(AB)'", "A'+B'", ['De Morgan (ampliació)', 'De Morgan (ampliación)', 'De Morgan (extension)']],
  ['bad1', "(AB)'", "A'B'", ['Error típic: NAND ≠ Ā·B̄', 'Error típico: NAND ≠ Ā·B̄', 'Common mistake: NAND ≠ Ā·B̄']],
  ['bad2', 'A+BC', '(A+B)C', ['Error típic: oblidar la prioritat', 'Error típico: olvidar la prioridad', 'Common mistake: ignoring precedence']],
];

export function Equiv({ id = 'bl-equiv', cfg = {} }) {
  const { ui } = useLang();
  const li = LI[ui];
  const [s, set] = useSlot(id, { a: cfg.a || 'A+AB', b: cfg.b || 'A', p: cfg.a ? '' : 'abs1' });
  const ra = parse(s.a), rb = parse(s.b);
  const ok = ra.ast && rb.ast;
  const names = ok ? [...new Set([...vars(ra.ast), ...vars(rb.ast)])].sort() : [];
  const res = ok && names.length <= 5 ? equivalent(ra.ast, rb.ast) : null;
  return (
    <Shell title={t('equivT', li)}>
      <p className="small">{t('equivP', li)}</p>
      <label className="bl-field">
        <span>{t('preset', li)}</span>
        <select className="bl-sel" value={s.p} onChange={(e) => { const p = PRESETS.find((x) => x[0] === e.target.value); if (p) set({ p: p[0], a: p[1], b: p[2] }); else set({ p: '' }); }}>
          <option value="">—</option>
          {PRESETS.map(([k, , , n]) => <option key={k} value={k}>{n[li]}</option>)}
        </select>
      </label>
      <div className="lab-split">
        <ExprField id={id + '-a'} value={s.a} onChange={(a) => set({ a, p: '' })} label={t('left', li)} li={li} />
        <ExprField id={id + '-b'} value={s.b} onChange={(b) => set({ b, p: '' })} label={t('right', li)} li={li} />
      </div>
      {res && (
        <>
          <p className={'bl-verdict ' + (res.eq ? 'is-yes' : 'is-no')} id={id + '-v'}>{t(res.eq ? 'yes' : 'no', li)}</p>
          <div className="tbl">
            <table className="bl-truth">
              <thead><tr>{names.map((n) => <th key={n} className="c">{n}</th>)}<th className="c"><TeX tex={toTeX(ra.ast)} /></th><th className="c"><TeX tex={toTeX(rb.ast)} /></th></tr></thead>
              <tbody>{rows(names).map((env, i) => {
                const x = ev(ra.ast, env), y = ev(rb.ast, env);
                return (
                  <tr key={i} className={x !== y ? 'is-diff' : undefined}>
                    {names.map((n) => <td key={n} className="c">{env[n]}</td>)}<td className="c">{x}</td><td className="c">{y}</td>
                  </tr>
                );
              })}</tbody>
            </table>
          </div>
        </>
      )}
    </Shell>
  );
}
