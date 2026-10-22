/* Estat desat del curs (mateixa clau i format que l'original) i progrés del C++ a contrarellotge. */
import { useCallback, useEffect, useRef, useState } from 'react';
import { lsJSON, lsSetJSON } from '../../lib/storage.js';
import { EX } from './data.js';

const KEY = 'ip-curs-v1';
const CPP_KEY = 'cpp-contrarellotge-v1';
const obj = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v : {});

function load() {
  const v = obj(lsJSON(KEY, {}));
  return { done: obj(v.done), coll: obj(v.coll), ci: obj(v.ci) };
}

/**
 * { done: {id: true}, coll: {setmana: bool}, ci: {setmana: bool} }
 * done: pàgines fetes; coll: setmanes plegades a la pàgina del curs; ci: setmanes de l'índex (false = plegada).
 */
export function useCourseState() {
  const [st, setSt] = useState(load);
  const saved = useRef(st);
  useEffect(() => {
    if (saved.current === st) return;
    saved.current = st;
    lsSetJSON(KEY, st);
  }, [st]);
  const setDone = useCallback((id, on) => setSt((s) => {
    const done = { ...s.done };
    if (on) done[id] = true; else delete done[id];
    return { ...s, done };
  }), []);
  const toggleColl = useCallback((w) => setSt((s) => ({ ...s, coll: { ...s.coll, [w]: !s.coll[w] } })), []);
  const toggleCi = useCallback((w) => setSt((s) => ({ ...s, ci: { ...s.ci, [w]: s.ci[w] === false } })), []);
  return { st, setDone, toggleColl, toggleCi };
}

const readCpp = () => obj(lsJSON(CPP_KEY, {}));

/** Estat del C++ a contrarellotge (exercicis resolts), actualitzat si canvia en una altra pestanya. */
export function useCppProgress() {
  const [S, setS] = useState(readCpp);
  useEffect(() => {
    const on = (e) => { if (!e.key || e.key === CPP_KEY) setS(readCpp()); };
    window.addEventListener('storage', on);
    return () => window.removeEventListener('storage', on);
  }, []);
  return S;
}

/** Exercicis d'una setmana (o de totes amb wk = 0) i quants n'hi ha de resolts. */
export function exStats(S, wk) {
  const list = EX.filter((x) => !wk || x.wk === wk);
  return { n: list.length, done: list.filter((x) => S.prog && S.prog[x.id] && S.prog[x.id].solved).length, list };
}
