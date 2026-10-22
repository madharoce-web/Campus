import { createContext, useCallback, useContext, useSyncExternalStore } from 'react';

/**
 * Estat en memòria d'una visita al curs (com les variables del mòdul de l'original:
 * laboratoris, respostes, filtres…). Es conserva en canviar de document o d'idioma i
 * es perd en sortir del curs o recarregar la pàgina.
 */
export function createStore() {
  const data = new Map();
  const subs = new Map();
  return {
    get: (k) => data.get(k),
    ensure(k, init) {
      if (!data.has(k)) data.set(k, typeof init === 'function' ? init() : init);
      return data.get(k);
    },
    set(k, v) {
      const prev = data.get(k);
      const next = typeof v === 'function' ? v(prev) : v;
      if (next === prev) return;
      data.set(k, next);
      (subs.get(k) || []).slice().forEach((f) => f());
    },
    subscribe(k, f) {
      if (!subs.has(k)) subs.set(k, []);
      subs.get(k).push(f);
      return () => { const a = subs.get(k); const i = a.indexOf(f); if (i >= 0) a.splice(i, 1); };
    },
  };
}

export const StoreContext = createContext(null);

/**
 * Una casella de l'estat de la visita: [valor, actualitza(valor | funció)].
 * `init` (valor o funció) només s'aplica la primera vegada.
 */
export function useSlot(key, init) {
  const store = useContext(StoreContext);
  store.ensure(key, init);
  const subscribe = useCallback((cb) => store.subscribe(key, cb), [store, key]);
  const value = useSyncExternalStore(subscribe, () => store.get(key));
  const set = useCallback((v) => store.set(key, v), [store, key]);
  return [value, set];
}
