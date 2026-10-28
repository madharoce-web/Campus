import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { lsGet, lsSet } from './storage.js';

/**
 * Idioma de tota la web. N'hi ha dos de nivells:
 *  - `ui`: idioma de la interfície (closca, portada, catàleg): 'ca' | 'es' | 'en'.
 *  - `lang`: idioma del contingut dels cursos, que de moment només existeix en català i
 *    castellà: 'ca' | 'es' (en anglès, els cursos es mostren en castellà).
 * Els cursos fan servir `lang`, `li` i `L(ca, es, en?)`; les pàgines noves, `ui` i `t(…)`.
 * Es desa a localStorage amb la mateixa clau que la versió original ('sem1-lang').
 */
const LangContext = createContext(null);
const KEY = 'sem1-lang';
export const UI_LANGS = ['ca', 'es', 'en'];

/** Idioma inicial: el desat o, la primera vegada, el del navegador. */
function initialLang() {
  const saved = lsGet(KEY);
  if (UI_LANGS.includes(saved)) return saved;
  let prefs = [];
  try { prefs = navigator.languages?.length ? navigator.languages : [navigator.language]; } catch { /* sense navigator */ }
  for (const p of prefs) {
    const l = String(p || '').toLowerCase().split('-')[0];
    if (l === 'ca') return 'ca';
    if (['es', 'gl', 'eu', 'pt'].includes(l)) return 'es';
    if (l === 'en') return 'en';
  }
  return 'es';
}

export function LangProvider({ children }) {
  const [ui, setUi] = useState(initialLang);
  useEffect(() => {
    document.documentElement.lang = ui;
    lsSet(KEY, ui);
  }, [ui]);
  const setLang = useCallback((l) => setUi(UI_LANGS.includes(l) ? l : 'ca'), []);
  const value = useMemo(() => {
    const lang = ui === 'ca' ? 'ca' : 'es';
    return {
      ui,
      lang,
      setLang,
      /** índex de l'idioma del contingut: 0 = català, 1 = castellà (per a parells [ca, es]) */
      li: lang === 'es' ? 1 : 0,
      /** tria el text de l'idioma del contingut: L('Hola', 'Hola', 'Hello') (sense anglès, el castellà) */
      L: (ca, es, en) => (ui === 'ca' ? ca : ui === 'en' && en != null ? en : es),
      /** tria el text de l'idioma de la interfície: t(['ca', 'es', 'en']) o t({ ca, es, en }) */
      t: (v) => pick(v, ui),
    };
  }, [ui, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang() fora de <LangProvider>');
  return ctx;
}

/**
 * Tria d'un objecte {ca, es, en} o d'una llista [ca, es, en]. Si falta l'anglès,
 * es fa servir el castellà; si falta el castellà, el català.
 */
export function pick(v, lang) {
  if (v == null) return '';
  if (Array.isArray(v)) {
    const i = lang === 'en' ? 2 : lang === 'es' ? 1 : 0;
    return v[i] ?? v[1] ?? v[0];
  }
  if (typeof v === 'object' && ('ca' in v || 'es' in v)) return v[lang] ?? v.es ?? v.ca;
  return v;
}
