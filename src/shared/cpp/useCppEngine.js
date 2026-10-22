import { useEffect, useSyncExternalStore } from 'react';
import { useLang } from '../../lib/i18n.jsx';
import { getSnapshot, setEngineLang, subscribe } from './engine.js';

/**
 * Estat del motor de C++ per als components: { mode, state, pct, err, why }.
 * mode: null | 'clang' | 'interp'; state: 'off' | 'loading' | 'warming' | 'ready'.
 * Per arrencar-lo, crideu start() del mòdul engine.js (p. ex. en prémer «Executa»).
 */
export function useCppEngine() {
  const { lang } = useLang();
  useEffect(() => { setEngineLang(lang); }, [lang]);
  return useSyncExternalStore(subscribe, getSnapshot);
}
