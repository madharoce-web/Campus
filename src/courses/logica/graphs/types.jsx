/**
 * Tipus d'exercici propis dels grafs (course.types de Lògica i grafs), amb el contracte de
 * _kit/exercise/types.jsx: Input, check, space, Print?, key.
 *   seq     una successió de vèrtexs («A B C A»). ex.want diu què ha de ser:
 *             'euler'    recorre tots els costats una sola vegada (ex.closed: ha de tornar a l'inici)
 *             'hamilton' passa per tots els vèrtexs una sola vegada i torna a l'inici
 *             'min'      camí de ex.from a ex.to de longitud mínima (ex.best)
 *             'exact'    exactament ex.answer (p. ex. l'ordre d'un recorregut)
 *   colour  acolorir els vèrtexs d'ex.G amb ex.k colors com a màxim (clicant-los)
 *   matrix  omplir la matriu d'adjacència d'ex.G
 * Els exercicis porten el graf a ex.G (i el dibuix a ex.pos, si no és en cercle).
 */
import { useLang } from '../../../lib/i18n.jsx';
import GraphView from './GraphView.jsx';
import { adjMatrix, chromatic, isProperColouring } from './model.js';
import { checkSeq } from './check.js';
import { circle, PALETTE } from './svg.js';

function SeqInput({ value, onChange, disabled }) {
  const { L } = useLang();
  return (
    <span className="kit-line">
      <input className="am-input kit-in gl-seq" value={value ?? ''} disabled={disabled} spellCheck={false} autoCapitalize="characters"
        placeholder={L('p. ex. A B C A', 'p. ej. A B C A', 'e.g. A B C A')} aria-label={L('Successió de vèrtexs', 'Sucesión de vértices', 'Sequence of vertices')}
        onChange={(e) => onChange(e.target.value)} />
    </span>
  );
}

function ColourInput({ ex, value = {}, onChange, disabled }) {
  const { L } = useLang();
  const pos = ex.pos || circle(ex.G.V);
  const pen = value.__pen || 1;
  const col = Object.fromEntries(Object.entries(value).filter(([k]) => k !== '__pen'));
  const bad = ex.G.E.map((e, i) => [e, i]).filter(([[a, b]]) => col[a] && col[a] === col[b]).map(([, i]) => i);
  return (
    <div className="gl-colour">
      <span className="gl-pens" role="group" aria-label={L('Color', 'Color', 'Colour')}>
        {Array.from({ length: ex.k }, (_, i) => i + 1).map((c) => (
          <button key={c} type="button" disabled={disabled} className={'gl-pen' + (pen === c ? ' is-on' : '')} aria-pressed={pen === c}
            style={{ background: PALETTE[c - 1] }} onClick={() => onChange({ ...value, __pen: c })}>{c}</button>
        ))}
      </span>
      <GraphView G={ex.G} pos={pos} col={col} badE={bad} label={L('Graf per acolorir', 'Grafo para colorear', 'Graph to colour')}
        onVertex={disabled ? undefined : (v) => onChange({ ...value, [v]: col[v] === pen ? undefined : pen })} />
    </div>
  );
}

function MatrixInput({ ex, value = [], onChange, disabled }) {
  const { L } = useLang();
  const V = ex.G.V;
  const at = (i, j) => (value[i] && value[i][j] != null ? value[i][j] : '');
  const set = (i, j, x) => {
    const n = V.map((_, a) => V.map((__, b) => at(a, b)));
    n[i][j] = x.replace(/[^0-9]/g, '').slice(0, 1);
    // en un graf no dirigit la matriu és simètrica: s'omple també la casella simètrica
    if (!ex.G.dir) n[j][i] = n[i][j];
    onChange(n);
  };
  return (
    <div className="gl-tw">
      <table className="gl-mat gl-matin"><thead><tr><th />{V.map((v) => <th key={v}>{v}</th>)}</tr></thead>
        <tbody>{V.map((a, i) => (
          <tr key={a}><th>{a}</th>{V.map((b, j) => (
            <td key={b}><input className="gl-cell" inputMode="numeric" value={at(i, j)} disabled={disabled} aria-label={L(`fila ${a}, columna ${b}`, `fila ${a}, columna ${b}`, `row ${a}, column ${b}`)} onChange={(e) => set(i, j, e.target.value)} /></td>
          ))}</tr>
        ))}</tbody>
      </table>
    </div>
  );
}
function PrintMatrix({ ex }) {
  const V = ex.G.V;
  return (
    <table className="gl-mat"><thead><tr><th />{V.map((v) => <th key={v}>{v}</th>)}</tr></thead>
      <tbody>{V.map((a) => <tr key={a}><th>{a}</th>{V.map((b) => <td key={b} />)}</tr>)}</tbody>
    </table>
  );
}

const colourKey = (ex) => {
  const c = chromatic(ex.G).col;
  return c ? ex.G.V.map((v) => `${v}:${c[v]}`).join(' ') : '—';
};

export const GRAPH_TYPES = {
  seq: {
    Input: SeqInput, check: checkSeq, space: 'lines:3',
    key: (ex) => (ex.answer ? ex.answer.join(' ') : ''),
  },
  colour: {
    Input: ColourInput,
    check: (ex, v = {}) => {
      const col = Object.fromEntries(Object.entries(v).filter(([k, x]) => k !== '__pen' && x != null));
      return ex.G.V.every((x) => col[x]) && new Set(Object.values(col)).size <= ex.k && isProperColouring(ex.G, col);
    },
    space: 'lines:2', key: colourKey,
  },
  matrix: {
    Input: MatrixInput, Print: PrintMatrix, space: 'none',
    check: (ex, v = []) => adjMatrix(ex.G).every((r, i) => r.every((x, j) => String(x) === String(v[i]?.[j] || '0'))),
    key: (ex) => adjMatrix(ex.G).map((r) => r.join(' ')).join(' / '),
  },
};
