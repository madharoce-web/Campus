import { createContext, useCallback, useContext, useSyncExternalStore } from 'react';

/**
 * Estat en memòria del curs (com l'objecte WS de l'original): laboratoris, apartats dels
 * exercicis, pràctica i simulacre. Es conserva en canviar de pestanya o d'idioma i es
 * perd en sortir del curs o recarregar, igual que abans.
 */
export function createStore() {
  const data = new Map();
  const subs = new Map();
  return {
    has: (k) => data.has(k),
    get: (k) => data.get(k),
    /** valor inicial sense avisar ningú (inicialització mandrosa, com st() de l'original) */
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

export function useStore() {
  return useContext(StoreContext);
}

/**
 * Una casella de l'estat del curs: [valor, actualitza(parcial | funció), substitueix(valor | funció)].
 * actualitza fusiona els objectes; `init` (valor o funció) només s'aplica la primera vegada.
 */
export function useSlot(key, init) {
  const store = useStore();
  store.ensure(key, init);
  const subscribe = useCallback((cb) => store.subscribe(key, cb), [store, key]);
  const value = useSyncExternalStore(subscribe, () => store.get(key));
  const update = useCallback((patch) => {
    store.set(key, (prev) => {
      const p = typeof patch === 'function' ? patch(prev) : patch;
      return p && typeof p === 'object' && !Array.isArray(p) && prev && typeof prev === 'object' ? { ...prev, ...p } : p;
    });
  }, [store, key]);
  const replace = useCallback((v) => store.set(key, v), [store, key]);
  return [value, update, replace];
}
