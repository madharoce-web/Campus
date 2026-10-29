import { useEffect, useImperativeHandle, useLayoutEffect, useRef } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/clike/clike.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/selection/active-line.js';
import 'codemirror/addon/comment/comment.js';

const indentOrSpaces = (cm) => (cm.somethingSelected() ? cm.indentSelection('add') : cm.replaceSelection('    ', 'end'));

/**
 * Editor de C++ (CodeMirror 5, com a la versió original).
 * - value / onChange: el codi (l'editor només es reescriu si el valor canvia de fora).
 * - readOnly: false | true | 'nocursor' (bloquejat mentre el rellotge no corre).
 * - onRun (Ctrl+Enter) i onCheck (Ctrl+Maj+Enter).
 * - errLines: línies (base 0) marcades en vermell.
 * - focusTpl: si el codi és aquesta plantilla, en obrir-se es posa el cursor a la línia buida.
 * - viewer: visor de només lectura amb alçada automàtica (solució de referència).
 * ref: { focusAt(línia, columna) } (base 1), per anar a un error del compilador.
 */
export default function CodeEditor({ value, onChange, readOnly = false, onRun, onCheck, errLines, focusTpl, viewer = false, id, ref }) {
  const host = useRef(null);
  const cmRef = useRef(null);
  const cb = useRef({});
  useLayoutEffect(() => { cb.current = { onChange, onRun, onCheck }; });

  // crea l'editor en muntar-lo i el treu en desmuntar-lo
  useEffect(() => {
    const opts = viewer
      ? { value: value ?? '', mode: 'text/x-c++src', readOnly: true, lineNumbers: true }
      : {
        value: value ?? '', mode: 'text/x-c++src', lineNumbers: true, indentUnit: 4, tabSize: 4, indentWithTabs: false, smartIndent: true,
        matchBrackets: true, autoCloseBrackets: true, styleActiveLine: true, readOnly, inputStyle: 'contenteditable',
        spellcheck: false, autocorrect: false, autocapitalize: false,
        extraKeys: {
          Tab: indentOrSpaces, 'Shift-Tab': (cm) => cm.indentSelection('subtract'),
          'Ctrl-Enter': () => cb.current.onRun?.(), 'Cmd-Enter': () => cb.current.onRun?.(),
          'Shift-Ctrl-Enter': () => cb.current.onCheck?.(), 'Shift-Cmd-Enter': () => cb.current.onCheck?.(),
          'Ctrl-/': 'toggleComment', 'Cmd-/': 'toggleComment',
        },
      };
    const cm = CodeMirror(host.current, opts);
    cmRef.current = cm;
    if (viewer) cm.setSize(null, 'auto');
    cm.on('change', () => cb.current.onChange?.(cm.getValue()));
    const t = setTimeout(() => cm.refresh(), 0);
    return () => {
      clearTimeout(t);
      cmRef.current = null;
      cm.getWrapperElement().remove();
    };
    // l'editor es crea un sol cop; els canvis de props es sincronitzen a sota
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewer]);

  // valor canviat de fora (reinici de la resposta, plantilla…)
  useEffect(() => {
    const cm = cmRef.current;
    if (cm && value != null && cm.getValue() !== value) cm.setValue(value);
  }, [value]);

  // només lectura (porta del rellotge) i, en obrir-se, cursor a la plantilla
  useEffect(() => {
    const cm = cmRef.current;
    if (!cm || viewer) return undefined;
    cm.setOption('readOnly', readOnly);
    if (readOnly) return undefined;
    const t = setTimeout(() => {
      if (cmRef.current !== cm) return;
      cm.refresh();
      const code = cm.getValue();
      const ln = code.split('\n').findIndex((l) => /^\s*$/.test(l) && l.length > 0);
      // només si l'editor ja és a la vista: en una llista d'exercicis, enfocar-lo faria saltar la pàgina
      const r = host.current && host.current.getBoundingClientRect();
      const inView = r && r.top >= 0 && r.bottom <= window.innerHeight;
      if (focusTpl != null && ln >= 0 && code === focusTpl && inView) { cm.focus(); cm.setCursor({ line: ln, ch: 4 }); }
    }, 0);
    return () => clearTimeout(t);
  }, [readOnly, viewer, focusTpl]);

  // línies amb error
  useEffect(() => {
    const cm = cmRef.current;
    if (!cm || !errLines || !errLines.length) return undefined;
    const marks = errLines.map((l) => cm.addLineClass(l, 'background', 'cm-errline')).filter(Boolean);
    return () => { if (cmRef.current === cm) marks.forEach((h) => cm.removeLineClass(h, 'background', 'cm-errline')); };
  }, [errLines]);

  useImperativeHandle(ref, () => ({
    focusAt(line, col) {
      const cm = cmRef.current;
      if (!cm) return;
      cm.focus();
      cm.setCursor({ line: line - 1, ch: Math.max(0, col - 1) });
    },
  }), []);

  return <div id={id} ref={host} />;
}
