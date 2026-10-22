import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { lsGet, lsSet } from './storage.js';

/**
 * Idioma de tota la web (ca/es). Es comparteix entre cursos i es desa a localStorage
 * amb la mateixa clau que la versió original ('sem1-lang').
 */
const LangContext = createContext(null);
const KEY = 'sem1-lang';

function initialLang() {
  const saved = lsGet(KEY);
  if (saved === 'ca' || saved === 'es') return saved;
  return 'ca';
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);
  useEffect(() => {
    document.documentElement.lang = lang;
    lsSet(KEY, lang);
  }, [lang]);
  const setLang = useCallback((l) => setLangState(l === 'es' ? 'es' : 'ca'), []);
  const value = useMemo(() => ({
    lang,
    setLang,
    /** índex de l'idioma: 0 = català, 1 = castellà (per a parells [ca, es]) */
    li: lang === 'es' ? 1 : 0,
    /** tria el text de l'idioma actual: L('Hola', 'Hola') */
    L: (ca, es) => (lang === 'es' ? es : ca),
  }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang() fora de <LangProvider>');
  return ctx;
}

/** Tria d'un objecte bilingüe {ca, es} o d'un parell [ca, es]. */
export function pick(v, lang) {
  if (v == null) return '';
  if (Array.isArray(v)) return v[lang === 'es' ? 1 : 0];
  if (typeof v === 'object' && ('ca' in v || 'es' in v)) return v[lang] ?? v.ca;
  return v;
}
