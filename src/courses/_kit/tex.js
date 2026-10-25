/**
 * TeX → MathML amb Temml, sense React (també el fan servir els generadors d'exercicis i els
 * importadors en Node). El component <TeX> i el marcatge són a text.jsx.
 */
import temml from 'temml';

const mathCache = new Map();
/** TeX → MathML (en memòria cau; un error es mostra com el TeX original). */
export function texToMathML(src, display = false) {
  const key = (display ? 'D' : 'I') + src;
  if (!mathCache.has(key)) {
    let out;
    try { out = temml.renderToString(src, { displayMode: display, throwOnError: true }); } catch { out = '<code class="kit-texerr">' + src.replace(/[<&]/g, (c) => (c === '<' ? '&lt;' : '&amp;')) + '</code>'; }
    if (mathCache.size > 5000) mathCache.clear();
    mathCache.set(key, out);
  }
  return mathCache.get(key);
}
