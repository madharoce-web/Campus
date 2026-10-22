import { useCallback, useEffect, useRef, useState } from 'react';
import { lsJSON, lsSetJSON } from './storage.js';

/**
 * Com useState, però el valor es desa a localStorage (JSON) amb la clau donada.
 * `validate(v)` pot normalitzar un valor llegit (per exemple, d'una versió antiga).
 */
export function useStoredState(key, initial, validate) {
  const init = () => {
    const fallback = typeof initial === 'function' ? initial() : initial;
    const v = lsJSON(key, undefined);
    if (v === undefined) return fallback;
    return validate ? validate(v, fallback) : v;
  };
  const [value, setValue] = useState(init);
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    lsSetJSON(key, value);
  }, [key, value]);
  const set = useCallback((v) => setValue(v), []);
  return [value, set];
}
