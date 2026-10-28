/**
 * El campus de cada persona: el que tria al registre guiat (/benvinguda) i el tutorial.
 *   { name, year, degrees: [k], subjects: [k], done: ms | null, tour: { [id]: ms } }
 * Es desa a localStorage ('campus-v1'), de manera que se sincronitza amb el compte com la resta del
 * progrés (lib/sync.js); amb sessió, curs, graus i assignatures també es copien al perfil
 * (per a les estadístiques del tauler d'administració).
 */
import { useSyncExternalStore } from 'react';
import { lsJSON, lsSetJSON, onStoredChange } from './storage.js';
import { CARD_BY_KEY } from '../courses/registry.js';
import { DEGREE_BY_KEY } from '../catalog/degrees.js';

export const CAMPUS_KEY = 'campus-v1';
const EMPTY = { name: '', year: null, degrees: [], subjects: [], done: null, tour: {} };

const clean = (v) => {
  if (!v || typeof v !== 'object') return EMPTY;
  const arr = (a, ok) => (Array.isArray(a) ? [...new Set(a.filter((x) => typeof x === 'string' && ok(x)))] : []);
  return {
    name: typeof v.name === 'string' ? v.name.slice(0, 80) : '',
    year: Number.isInteger(v.year) && v.year >= 1 && v.year <= 8 ? v.year : null,
    degrees: arr(v.degrees, (k) => k in DEGREE_BY_KEY),
    subjects: arr(v.subjects, (k) => k in CARD_BY_KEY),
    done: typeof v.done === 'number' ? v.done : null,
    tour: v.tour && typeof v.tour === 'object' ? v.tour : {},
  };
};

let cache = null;
const read = () => (cache ??= clean(lsJSON(CAMPUS_KEY, EMPTY)));
const listeners = new Set();
onStoredChange((k) => { if (k === CAMPUS_KEY) { cache = null; listeners.forEach((f) => f()); } });
// un altre dispositiu (sincronització) o una altra pestanya
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => { if (e.key === CAMPUS_KEY) { cache = null; listeners.forEach((f) => f()); } });
  window.addEventListener('am-remote', () => { cache = null; listeners.forEach((f) => f()); });
}

export function getCampus() { return read(); }

export function useCampus() {
  return useSyncExternalStore((f) => { listeners.add(f); return () => listeners.delete(f); }, read, read);
}

/** Canvia el campus: fn(actual) → nou (o un objecte amb els camps que canvien). */
export function updateCampus(fn) {
  const cur = read();
  const next = clean(typeof fn === 'function' ? fn(cur) : { ...cur, ...fn });
  cache = next;
  lsSetJSON(CAMPUS_KEY, next);
  return next;
}

export const markTour = (id) => updateCampus((c) => ({ ...c, tour: { ...c.tour, [id]: Date.now() } }));
export const resetTour = () => updateCampus((c) => ({ ...c, tour: {} }));

/** Les targetes de «Els meus cursos»: les assignatures triades (totes, si encara no n'ha triat cap). */
export function mySubjects(campus, all) {
  return campus.subjects.length ? all.filter((c) => campus.subjects.includes(c.k)) : all;
}
