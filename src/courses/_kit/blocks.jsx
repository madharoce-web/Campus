/**
 * Blocs de les lliçons. Cada bloc és { t: tipus, …, mode?: 'direct' | 'explained' }.
 * Sense mode, el bloc surt en els dos modes; amb mode, només en aquell.
 *
 *   p, h            paràgraf, subtítol                  { x }
 *   list            llista                              { items:[x], ordered? }
 *   table           taula                               { head:[x], rows:[[x]], caption? }
 *   def prop rule thm note tip warn summary  requadres  { title?, x | items }
 *   example         exemple resolt                      { title?, q, steps:[x | {x, why}], result? }
 *   diagram         figura SVG pròpia                   { svg, caption?, wide? }
 *   lab             laboratori de l'assignatura          { id, props? }
 *   code            codi (executable si l'assignatura té executor) { lang, src }
 *   check           exercici de comprovació             { ex }
 *   formula         fórmules del formulari              { ids:[…] }
 *   html            contingut importat en HTML           { h }
 *   cols            columnes                            { cols:[[bloc…]] }
 *   details, hr     desplegable, separador              { title, blocks }
 *   lang            blocs diferents per idioma          { ca:[…], es:[…] }
 * Els requadres i els exemples poden portar blocs a dins: { blocks:[…] }.
 */
import { Fragment, Suspense } from 'react';
import Rich from '../../lib/Rich.jsx';
import Boundary from '../_doc/Boundary.jsx';
import { useLang } from '../../lib/i18n.jsx';
import { inline, Tx, useTr } from './text.jsx';
import { useCourse } from './context.js';
import { K } from './strings.js';
import Exercise, { Steps } from './exercise/Exercise.jsx';
import { recordCheck } from './state.js';
import { openDock } from './dockStore.js';

const BOX = ['def', 'prop', 'rule', 'thm', 'note', 'tip', 'warn', 'summary', 'method'];

export const visible = (b, mode) => !b.mode || b.mode === mode;

function Box({ b, mode }) {
  const { ui } = useLang();
  const S = K[ui];
  const tr = useTr();
  return (
    <div className={'kit-box kit-box-' + b.t}>
      <p className="kit-box-t">{S.box[b.t] || ''}{b.title ? <> · <span>{inline(tr(b.title))}</span></> : null}</p>
      {b.x && <div className="kit-box-x"><Tx x={b.x} /></div>}
      {b.items && <ul>{b.items.map((it, i) => <li key={i}><Tx x={it} /></li>)}</ul>}
      {b.blocks && <div className="kit-box-x"><Blocks blocks={b.blocks} mode={mode} /></div>}
    </div>
  );
}

function Example({ b, mode }) {
  const { ui } = useLang();
  const S = K[ui];
  const tr = useTr();
  return (
    <div className="kit-box kit-box-example">
      <p className="kit-box-t">{S.box.example}{b.title ? <> · <span>{inline(tr(b.title))}</span></> : null}</p>
      {b.q && <div className="kit-box-x"><Tx x={b.q} /></div>}
      {b.blocks && <div className="kit-box-x"><Blocks blocks={b.blocks} mode={mode} /></div>}
      {b.steps && <Steps steps={b.steps} startOpen />}
      {b.result && <p className="kit-result"><Tx x={b.result} /></p>}
    </div>
  );
}

/** Llista; un element pot ser { x, items, ordered } per tenir una subllista. */
function List({ b }) {
  const Tag = b.ordered ? 'ol' : 'ul';
  return (
    <Tag className="kit-list">
      {b.items.map((it, i) => (it && typeof it === 'object' && !Array.isArray(it) && it.items
        ? <li key={i}><Tx x={it.x} /><List b={it} /></li>
        : <li key={i}><Tx x={it} /></li>))}
    </Tag>
  );
}

function Table({ b }) {
  return (
    <figure className="kit-fig">
      <div className="kit-tw">
        <table className="kit-table">
          {b.head && <thead><tr>{b.head.map((h, i) => <th key={i} scope="col"><Tx x={h} /></th>)}</tr></thead>}
          <tbody>{b.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}><Tx x={c} /></td>)}</tr>)}</tbody>
        </table>
      </div>
      {b.caption && <figcaption><Tx x={b.caption} /></figcaption>}
    </figure>
  );
}

/** Laboratori de l'assignatura (course.labs[id]: un component, normalment amb React.lazy). */
function Lab({ b }) {
  const course = useCourse();
  const { ui } = useLang();
  const L = course.labs && course.labs[b.id];
  if (!L) return null;
  const Wrap = course.LabWrap || Fragment;
  // dins de l'àmbit d'estils de l'assignatura (data-course), com abans
  return (
    <div className="kit-lab" data-course={course.k} data-lab={b.id}>
      <Boundary>
        <Suspense fallback={<p className="kit-loading">{K[ui].loading}</p>}>
          <Wrap><L {...(b.props || {})} /></Wrap>
        </Suspense>
      </Boundary>
    </div>
  );
}

function Formula({ b }) {
  const course = useCourse();
  const { ui } = useLang();
  return (
    <div className="kit-fref">
      <button type="button" className="kit-link" onClick={() => openDock(course.k, b.ids)}>{K[ui].formulas} →</button>
    </div>
  );
}

function Code({ b }) {
  const course = useCourse();
  const tr = useTr();
  if (course.CodeBlock) return <course.CodeBlock lang={b.lang} src={tr(b.src)} {...(b.props || {})} />;
  return <pre className="kit-code"><code>{tr(b.src)}</code></pre>;
}

export function Block({ b, mode }) {
  const course = useCourse();
  const tr = useTr();
  const { lang } = useLang();
  if (!visible(b, mode)) return null;
  if (BOX.includes(b.t)) return <Box b={b} mode={mode} />;
  switch (b.t) {
    case 'p': return <p className="kit-p"><Tx x={b.x} /></p>;
    case 'h': return <h3 className="kit-h3"><Tx x={b.x} /></h3>;
    case 'list': return <List b={b} />;
    case 'table': return <Table b={b} />;
    case 'example': return <Example b={b} mode={mode} />;
    case 'diagram': return (
      <figure className={'kit-fig kit-diagram' + (b.wide ? ' is-wide' : '')}>
        <div data-course={course.k}><Rich className={'kit-svg ' + (b.cls || '')} html={tr(b.svg)} /></div>
        {b.caption && <figcaption><Tx x={b.caption} /></figcaption>}
      </figure>
    );
    case 'lab': return <Lab b={b} />;
    case 'code': return <Code b={b} />;
    case 'check': return <Exercise ex={b.ex} variant="check" onResult={(r) => recordCheck(course.k, b.ex.id, r.ok)} />;
    case 'formula': return <Formula b={b} />;
    // HTML que encara no s'ha passat a blocs: amb els estils de l'assignatura, com abans
    case 'html': return <div data-course={course.k}><Rich className="kit-html" html={tr(b.h)} /></div>;
    case 'hr': return <hr className="kit-hr" />;
    case 'details': return (
      <details className="kit-details"><summary><Tx x={b.title} /></summary><Blocks blocks={b.blocks} mode={mode} /></details>
    );
    case 'lang': return <Blocks blocks={b[lang] || b.es || b.ca} mode={mode} />;
    case 'cols': return <div className="kit-cols">{b.cols.map((c, i) => <div key={i}>{c.map((x, j) => <Block key={j} b={x} mode={mode} />)}</div>)}</div>;
    default: return null;
  }
}

export function Blocks({ blocks, mode }) {
  return <>{(blocks || []).map((b, i) => <Block key={i} b={b} mode={mode} />)}</>;
}
