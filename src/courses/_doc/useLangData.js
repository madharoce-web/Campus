import { useCallback, useEffect, useState } from 'react';

/** Dades carregades sota demanda (un fitxer per idioma), compartides entre visites. */
const cache = new Map();

function load(loader) {
  let e = cache.get(loader);
  if (!e) {
    e = { v: null };
    e.p = loader().then((m) => { e.v = m && m.default !== undefined ? m.default : m; return e.v; });
    e.p.catch(() => cache.delete(loader));
    cache.set(loader, e);
  }
  return e;
}

/**
 * Dades de l'idioma actual: { data, lang, err, retry }. Mentre es carrega l'altre idioma
 * es continuen mostrant les dades de l'anterior (el canvi d'idioma no buida la pàgina).
 * loaders: { ca: () => import(...), es: () => import(...) }
 */
export function useLangData(loaders, lang) {
  const loader = loaders[lang];
  const [st, setSt] = useState({ data: null, lang: null, err: null });
  const [tries, setTries] = useState(0);
  useEffect(() => {
    let alive = true;
    load(loader).p.then(
      (data) => { if (alive) setSt({ data, lang, err: null }); },
      (err) => { if (alive) setSt((s) => ({ ...s, err })); },
    );
    return () => { alive = false; };
  }, [loader, lang, tries]);
  const retry = useCallback(() => setTries((n) => n + 1), []);
  const e = cache.get(loader);
  if (e && e.v) return { data: e.v, lang, err: null, retry };
  return { ...st, retry };
}
