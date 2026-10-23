import { useLang } from '../../lib/i18n.jsx';
import { useStoredState } from '../../lib/useStoredState.js';
import { K } from './strings.js';

export const MODES = ['direct', 'explained'];

/** Mode d'explicació de l'usuari (es desa i es sincronitza amb el compte). */
export function useMode() {
  return useStoredState('kit-mode', 'explained', (v, d) => (MODES.includes(v) ? v : d));
}

/** Interruptor Directe ⟷ Explicat. */
export function ModeSwitch({ mode, onChange, disabled }) {
  const { ui } = useLang();
  const S = K[ui];
  return (
    <div className="kit-mode" role="radiogroup" aria-label={S.modeLabel}>
      <span className="kit-mode-l">{S.modeLabel}</span>
      <div className={'kit-mode-sw is-' + mode}>
        {MODES.map((m) => (
          <button key={m} type="button" role="radio" aria-checked={mode === m} data-mode={m} disabled={disabled}
            onClick={() => mode !== m && onChange(m)}>{S[m]}</button>
        ))}
        <span className="kit-mode-knob" aria-hidden="true" />
      </div>
      <span className="kit-mode-h">{S.modeHint[mode]}</span>
    </div>
  );
}

/** Capa «Adaptant la lliçó…» mentre es canvia de mode. */
export function Adapting({ to }) {
  const { ui } = useLang();
  const S = K[ui];
  return (
    <div className="kit-adapt" role="status" aria-live="polite">
      <div className="kit-adapt-card">
        <p className="kit-adapt-t">{S.adapting}</p>
        <div className="kit-adapt-bar"><span /></div>
        <p className="kit-adapt-h">{S[to]} · {S.modeHint[to]}</p>
        <div className="kit-adapt-sk" aria-hidden="true"><i /><i /><i /><i /></div>
      </div>
    </div>
  );
}
