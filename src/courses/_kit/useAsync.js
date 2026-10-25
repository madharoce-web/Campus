import { useEffect, useState } from 'react';

const cache = new Map();

/** Carrega un mòdul de contingut (import() dinàmic) i el recorda. key: identificador estable. */
export function useModule(key, load) {
  const [data, setData] = useState(() => (cache.has(key) ? cache.get(key) : null));
  const [err, setErr] = useState(null);
  useEffect(() => {
    if (!load) return undefined;
    if (cache.has(key)) { setData(cache.get(key)); return undefined; }
    let alive = true;
    setData(null);
    load().then((m) => {
      const v = m && 'default' in m ? m.default : m;
      cache.set(key, v);
      if (alive) setData(v);
    }, (e) => { if (alive) setErr(e); });
    return () => { alive = false; };
  }, [key, load]);
  if (err) throw err;
  return data;
}

/** Carrega una llista de mòduls alhora (p. ex. tots els temes, per al cercador o el simulacre). */
export function useModules(key, loads) {
  return useModule(key, loads ? () => Promise.all(loads.map((l) => l())) : null);
}
