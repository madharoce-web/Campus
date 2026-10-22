import { createContext, useContext, useEffect, useReducer, useRef } from 'react';
import { lsJSON, lsSet } from '../../lib/storage.js';
import { gradeExam, newEsq, newNota, newPrio, newTeo } from './engine/quiz.js';

/**
 * Estat del curs. Es desa a localStorage amb la mateixa clau i el mateix format que
 * l'original ({ lang, prog, done, drafts, exams, theme }). La ratxa i l'estat de cada
 * vista (exercici triat, pregunta actual, examen en curs) duren mentre el curs és obert.
 */
export const KEY = 'uda-pseudo-v1';
export const MODS = ['escriu', 'notacio', 'prior', 'esquemes', 'teoria'];

function load() {
  const S = { prog: {}, done: {}, drafts: {}, exams: [], theme: null };
  MODS.forEach((m) => { S.prog[m] = [0, 0]; });
  const o = lsJSON(KEY, null);
  if (o && typeof o === 'object') {
    if (o.prog) MODS.forEach((k) => { if (Array.isArray(o.prog[k])) S.prog[k] = o.prog[k]; });
    if (o.done && typeof o.done === 'object') S.done = o.done;
    if (o.drafts && typeof o.drafts === 'object') S.drafts = o.drafts;
    if (Array.isArray(o.exams)) S.exams = o.exams.slice(-20);
    S.theme = o.theme === 'dark' || o.theme === 'light' ? o.theme : null;
  }
  return S;
}

function init() {
  return {
    ...load(), streak: 0,
    wr: { filt: 'all', id: null },          // escriu: filtre i exercici triat
    nt: newNota(), pr: newPrio(), es: newEsq(), tq: newTeo(),
    xm: null,                                // simulacre (es crea en obrir-lo)
  };
}

function recordIn(s, m, ok) {
  const p = s.prog[m];
  return { ...s, prog: { ...s.prog, [m]: [p[0] + (ok ? 1 : 0), p[1] + 1] }, streak: ok ? s.streak + 1 : 0 };
}

function reducer(s, a) {
  switch (a.type) {
    case 'draft': return { ...s, drafts: { ...s.drafts, [a.id]: a.code } };
    case 'escriu/check': {
      const n = recordIn(s, 'escriu', a.ok);
      return a.ok ? { ...n, done: { ...n.done, [a.id]: 1 } } : n;
    }
    case 'wr': return { ...s, wr: { ...s.wr, ...a.wr } };
    case 'quiz/new': return { ...s, [a.key]: a.item };
    case 'quiz/answer': {
      // només compta la primera resposta de cada pregunta
      const q = s[a.key], n = { ...s, [a.key]: { ...q, ans: a.ans, done: true } };
      return q.done ? n : recordIn(n, a.mod, a.ok);
    }
    case 'exam/new': return a.ifEmpty && s.xm ? s : { ...s, xm: a.xm };
    case 'exam/code': return s.xm ? { ...s, xm: { ...s.xm, code: { ...s.xm.code, [a.k]: a.code } } } : s;
    case 'exam/ans': return s.xm && !s.xm.done ? { ...s, xm: { ...s.xm, ans: { ...s.xm.ans, [a.j]: a.i } } } : s;
    case 'exam/grade': {
      if (!s.xm || s.xm.done) return s;
      const res = gradeExam(s.xm);
      return { ...s, xm: { ...s.xm, done: true, res }, exams: [...s.exams, { d: a.d, n: Math.round(res.total * 10) / 10 }] };
    }
    default: return s;
  }
}

/** Estat del curs amb persistència (els esborranys es desen amb un retard de 400 ms). */
export function usePseudoStore(lang) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const last = useRef(null), lastMeta = useRef(null), latest = useRef(null), timer = useRef(0);
  const meta = JSON.stringify([lang, s.prog, s.done, s.exams, s.theme]);
  const json = JSON.stringify({ lang, prog: s.prog, done: s.done, drafts: s.drafts, exams: s.exams, theme: s.theme });

  useEffect(() => {
    latest.current = json;
    if (last.current === null) { last.current = json; lastMeta.current = meta; return; }   // estat llegit: no cal desar-lo
    if (json === last.current) return;
    clearTimeout(timer.current); timer.current = 0;
    const save = () => { timer.current = 0; last.current = latest.current; lsSet(KEY, latest.current); };
    // un canvi només d'esborrany s'endarrereix; la resta es desa de seguida
    if (meta === lastMeta.current) timer.current = setTimeout(save, 400);
    else { lastMeta.current = meta; save(); }
  }, [json, meta]);

  // en sortir del curs o tancar la pestanya, es desa el que quedi pendent
  useEffect(() => {
    const flush = () => {
      if (!timer.current) return;
      clearTimeout(timer.current); timer.current = 0;
      last.current = latest.current; lsSet(KEY, latest.current);
    };
    window.addEventListener('pagehide', flush);
    return () => { window.removeEventListener('pagehide', flush); flush(); };
  }, []);

  return [s, dispatch];
}

export const PseudoCtx = createContext(null);
export function usePseudo() { return useContext(PseudoCtx); }
