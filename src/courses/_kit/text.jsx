/**
 * Text de la plantilla: un valor pot ser una cadena, un trio [ca, es, en] (o encara una parella
 * [ca, es], mentre no hi hagi la traducció) o { ca, es, en }.
 * Dins del text hi ha un marcatge mínim, perquè el contingut s'escrigui de pressa i sense HTML:
 *   $x^2$  fórmula (TeX → MathML amb Temml)     $$…$$  fórmula destacada
 *   **negreta**   *cursiva*   `codi`   [enllaç](/ruta)   salt de línia: \n
 *   \$ \* \` \[ \] \\  el caràcter tal qual (sense marcatge)
 * El contingut importat que encara és HTML va en blocs { t: 'html' } (vegeu blocks.jsx).
 */
import { memo } from 'react';
import { Link } from 'react-router-dom';
import 'temml/dist/Temml-Local.css';
import { pick, useLang } from '../../lib/i18n.jsx';
import Rich from '../../lib/Rich.jsx';
import { texToMathML } from './tex.js';

export { texToMathML };

export const TeX = memo(function TeX({ tex, display }) {
  return <Rich as="span" className={display ? 'kit-math kit-math-d' : 'kit-math'} html={texToMathML(tex, display)} />;
});

const TOKEN = /(\\[$*`[\]\\]|\$\$[\s\S]+?\$\$|\$[^$\n]+?\$|\*\*[^*]+?\*\*|`[^`]+?`|\[[^\]]+?\]\([^)\s]+?\)|\*[^*\n]+?\*|\n)/g;

/** Converteix una cadena amb el marcatge en elements de React. */
export function inline(s, key = 'i') {
  if (s == null) return null;
  s = String(s);
  const out = [];
  let last = 0, n = 0;
  s.replace(TOKEN, (m, _t, at) => {
    if (at > last) out.push(s.slice(last, at));
    const k = key + '-' + n++;
    if (m === '\n') out.push(<br key={k} />);
    else if (m[0] === '\\') out.push(m[1]);
    else if (m.startsWith('$$')) out.push(<TeX key={k} tex={m.slice(2, -2).trim()} display />);
    else if (m.startsWith('$')) out.push(<TeX key={k} tex={m.slice(1, -1)} />);
    else if (m.startsWith('**')) out.push(<strong key={k}>{inline(m.slice(2, -2), k)}</strong>);
    else if (m.startsWith('`')) out.push(<code key={k} className="kit-ic">{m.slice(1, -1)}</code>);
    else if (m.startsWith('[')) {
      const i = m.indexOf('](');
      const href = m.slice(i + 2, -1), label = inline(m.slice(1, i), k);
      out.push(href.startsWith('/') ? <Link key={k} to={href}>{label}</Link> : <a key={k} href={href} target="_blank" rel="noopener noreferrer">{label}</a>);
    } else out.push(<em key={k}>{inline(m.slice(1, -1), k)}</em>);
    last = at + m.length;
    return m;
  });
  if (last < s.length) out.push(s.slice(last));
  return out;
}

/**
 * Tria l'idioma del text: [ca, es, en] (o { ca, es, en }). El contingut de la plantilla es
 * tradueix sencer a l'anglès; on encara falti, pick() fa servir el castellà.
 */
export function useTr() {
  const { ui } = useLang();
  return (x) => pick(x, ui);
}

/** Text amb marcatge en l'idioma actual. */
export function Tx({ x }) {
  const tr = useTr();
  return <>{inline(tr(x))}</>;
}

/** Text pla (sense marcatge) en l'idioma actual, per a atributs i cerques. */
export function plain(s) {
  return String(s ?? '')
    .replace(/(^|[^\\])\$\$?([^$]+?)\$\$?/g, '$1$2')
    .replace(/(^|[^\\])(\*\*|\*|`)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\\([$*`[\]\\])/g, '$1');
}
