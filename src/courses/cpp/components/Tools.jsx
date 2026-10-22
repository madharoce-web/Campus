import { useEffect, useRef } from 'react';
import { useLang } from '../../../lib/i18n.jsx';
import { restart } from '../../../shared/cpp/engine.js';
import { useCppEngine } from '../../../shared/cpp/useCppEngine.js';
import { updSet, useS } from '../lib/store.js';
import { beep } from '../lib/hooks.js';
import { SettingsIcon } from './Layout.jsx';

/** Estat del compilador a la barra superior. */
export function EngPill() {
  const { L } = useLang();
  const e = useCppEngine();
  let cls = 'eng ' + (e.state === 'ready' ? (e.mode === 'clang' ? 'ok' : 'wait') : 'wait'), txt, title = '';
  const loadTitle = L('Es descarrega el compilador (uns 29 MB, només la primera vegada).', 'Se descarga el compilador (unos 29 MB, solo la primera vez).');
  if (e.mode === 'interp') {
    cls = 'eng ' + (e.why ? 'bad' : 'ok');
    txt = L('Intèrpret lleuger', 'Intérprete ligero');
    title = e.why ? L('No s\'ha pogut carregar Clang en aquest navegador; s\'usa l\'intèrpret.', 'No se ha podido cargar Clang en este navegador; se usa el intérprete.') + (e.err ? '\n' + e.err.slice(0, 300) : '') : '';
  } else if (e.state === 'off') txt = '…';
  else if (e.state === 'loading') { txt = 'Clang · ' + L('baixant', 'bajando') + ' ' + Math.round(e.pct * 100) + '%'; title = loadTitle; }
  else if (e.state === 'warming') { txt = 'Clang · ' + L('preparant', 'preparando'); title = loadTitle; }
  else { txt = L('Clang 22 llest', 'Clang 22 listo'); title = L('Compilador real (Clang 22, C++17) que s\'executa al navegador.', 'Compilador real (Clang 22, C++17) que se ejecuta en el navegador.'); }
  return <span className={cls} id="engpill" title={title}><span className="dot" /><span className="t" id="engtxt">{txt}</span></span>;
}

/** Botó d'opcions (roda dentada). */
export function SettingsButton({ open, onToggle, ref }) {
  const { L } = useLang();
  return (
    <button ref={ref} className="icon-btn" id="setbtn" type="button" aria-label={L('Opcions', 'Opciones')} title={L('Opcions', 'Opciones')}
      aria-expanded={open} aria-controls="settings" onClick={onToggle}>
      <SettingsIcon />
    </button>
  );
}

/** Desplegable d'opcions (sota la barra): temps, comparació, so, plantilla i compilador. */
export function Settings({ onClose, btnRef }) {
  const { L } = useLang();
  const S = useS();
  const set = S.set;
  const box = useRef(null);

  // es tanca amb Escape o amb un clic a fora
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    const onDoc = (e) => {
      if (box.current?.contains(e.target) || btnRef.current?.contains(e.target)) return;
      onClose();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onDoc);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onDoc); };
  }, [onClose, btnRef]);

  return (
    <div className="dropdown" id="settings" ref={box}>
      <div className="btn-row sp"><b>{L('Opcions', 'Opciones')}</b><button type="button" className="btn btn-secondary btn-sm" id="setclose" onClick={onClose}>{L('Tanca', 'Cierra')}</button></div>
      <div className="r">
        <label className="lbl" htmlFor="o-min">{L('Temps per pregunta', 'Tiempo por pregunta')}</label>
        <select className="form-select" id="o-min" value={set.min} onChange={(e) => updSet({ min: +e.target.value })}>
          {[5, 10, 15, 20, 30].map((m) => <option key={m} value={m}>{m} min</option>)}
        </select>
        <span className="tiny muted">{L('S\'aplica a les preguntes que encara no has començat.', 'Se aplica a las preguntas que aún no has empezado.')}</span>
      </div>
      <label className="form-check">
        <input type="checkbox" id="o-strict" checked={!!set.strict} onChange={(e) => updSet({ strict: e.target.checked })} />
        <span>{L('Comparació estricta de la sortida', 'Comparación estricta de la salida')}<br /><span className="tiny muted">{L('També compten els espais i salts de línia del final.', 'También cuentan los espacios y saltos de línea del final.')}</span></span>
      </label>
      <label className="form-check">
        <input type="checkbox" id="o-sound" checked={!!set.sound} onChange={(e) => { updSet({ sound: e.target.checked }); if (e.target.checked) beep(1, true); }} />
        <span>{L('Avisos sonors del rellotge', 'Avisos sonoros del reloj')}<br /><span className="tiny muted">{L('A 5 min, a 1 min i quan s\'acaba.', 'A 5 min, a 1 min y cuando se acaba.')}</span></span>
      </label>
      <label className="form-check">
        <input type="checkbox" id="o-tpl" checked={!!set.tpl} onChange={(e) => updSet({ tpl: e.target.checked })} />
        <span>{L('Començar amb la plantilla', 'Empezar con la plantilla')}<br /><span className="tiny muted">#include, using namespace std, main()</span></span>
      </label>
      <div className="r">
        <label className="lbl" htmlFor="o-eng">{L('Compilador', 'Compilador')}</label>
        <select className="form-select" id="o-eng" value={set.eng !== 'interp' ? 'auto' : 'interp'}
          onChange={(e) => { updSet({ eng: e.target.value }); restart(e.target.value === 'interp' ? 'interp' : 'clang'); }}>
          <option value="auto">{L('Clang (real)', 'Clang (real)')}</option>
          <option value="interp">{L('Intèrpret lleuger', 'Intérprete ligero')}</option>
        </select>
        <span className="tiny muted">{L('Clang compila de veritat (com g++ a l\'examen), però la primera vegada baixa uns 29 MB. L\'intèrpret és instantani però no accepta tot el C++.', 'Clang compila de verdad (como g++ en el examen), pero la primera vez baja unos 29 MB. El intérprete es instantáneo pero no acepta todo el C++.')}</span>
      </div>
    </div>
  );
}
