/**
 * Ajustos de la web (taula public.site_settings): preus i plans, límits del pla gratuït, funcions de
 * cada pla, dades de l'empresa i textos de la portada. Els llegeix tothom; només els administradors
 * els canvien (/admin). Sense comptes configurats, o mentre es carreguen, valen els DEFAULTS.
 *
 * Cada clau de la taula és una secció (billing, free, features, company, about); el valor desat se
 * superposa als valors per defecte, de manera que un camp nou del codi sempre té valor.
 */
import { useSyncExternalStore } from 'react';
import { AUTH_ENABLED, getSupabase } from './supabase.js';

export const DEFAULTS = {
  billing: {
    enabled: false,          // mentre sigui false, tot és gratuït i no es veuen preus
    currency: 'EUR',
    basePrice: 5,            // pla Bàsic: preu mensual…
    baseSubjects: 2,         // …per a aquestes assignatures
    extraSubject: 2,         // cada assignatura de més
    degreeMultiplier: 2,     // cada grau de més multiplica la tarifa bàsica
    proPrice: 30,            // pla Pro (un grau sencer i la IA)
    trialDays: 14,
    discounts: { semester: 10, year: 20 },   // % de descompte del pagament semestral i anual
    taxNote: '',
  },
  free: {
    degrees: 0,              // 0 = sense límit
    subjects: 0,
    examsPerWeek: 0,
  },
  features: {
    // funció → plans que la tenen
    'all-subjects': { free: true, basic: false, pro: true },
    'exam-unlimited': { free: true, basic: true, pro: true },
    'pdf-exams': { free: true, basic: true, pro: true },
    'ai-tutor': { free: false, basic: false, pro: true },
    'ai-grading': { free: false, basic: false, pro: true },
    'adaptive-review': { free: false, basic: false, pro: true },
  },
  company: {
    name: '', nrt: '', address: '', city: 'Andorra la Vella', country: 'Andorra', email: '', phone: '',
  },
  about: {
    ca: 'Aula Mada és un projecte nascut a les aules de la Universitat d’Andorra. Fem el material d’estudi que ens hauria agradat tenir: temari complet i ordenat, exercicis resolts pas a pas i simulacres amb el format dels exàmens reals.',
    es: 'Aula Mada es un proyecto nacido en las aulas de la Universitat d’Andorra. Hacemos el material de estudio que nos habría gustado tener: temario completo y ordenado, ejercicios resueltos paso a paso y simulacros con el formato de los exámenes reales.',
    en: 'Aula Mada is a project born in the classrooms of the University of Andorra. We make the study material we wish we had had: a complete, well-organised syllabus, exercises solved step by step and mock exams in the format of the real ones.',
  },
};

/** Funcions que es poden assignar als plans (noms en tres idiomes). */
export const FEATURE_NAMES = {
  'all-subjects': ['Totes les assignatures del grau', 'Todas las asignaturas del grado', 'Every subject in the degree'],
  'exam-unlimited': ['Simulacres sense límit', 'Simulacros sin límite', 'Unlimited mock exams'],
  'pdf-exams': ['Simulacres en PDF per imprimir', 'Simulacros en PDF para imprimir', 'Printable PDF mock exams'],
  'ai-tutor': ['Assistent d’IA a les lliçons', 'Asistente de IA en las lecciones', 'AI assistant in the lessons'],
  'ai-grading': ['Correcció d’exàmens amb fotos', 'Corrección de exámenes con fotos', 'Exam grading from photos'],
  'adaptive-review': ['Repàs a mida dels errors', 'Repaso a medida de los errores', 'Personalised review of mistakes'],
};

const merge = (base, over) => {
  if (!over || typeof over !== 'object' || Array.isArray(over)) return over === undefined ? base : over;
  const out = { ...base };
  for (const [k, v] of Object.entries(over)) out[k] = base && typeof base[k] === 'object' && !Array.isArray(base[k]) ? merge(base[k], v) : v;
  return out;
};

let state = { ready: !AUTH_ENABLED, values: DEFAULTS };
const listeners = new Set();
const emit = () => listeners.forEach((f) => f());
let loading = null;

/** Carrega els ajustos (una sola vegada; reload: true per tornar-los a llegir). */
export function loadSettings({ reload = false } = {}) {
  if (!AUTH_ENABLED) return Promise.resolve(state.values);
  if (loading && !reload) return loading;
  loading = (async () => {
    try {
      const sb = await getSupabase();
      const { data, error } = await sb.from('site_settings').select('key,value');
      if (error) throw error;
      let v = DEFAULTS;
      for (const row of data || []) if (row.key in DEFAULTS) v = { ...v, [row.key]: merge(DEFAULTS[row.key], row.value) };
      state = { ready: true, values: v };
    } catch {
      state = { ready: true, values: state.values };
    }
    emit();
    return state.values;
  })();
  return loading;
}

const subscribe = (f) => { listeners.add(f); if (!loading) loadSettings(); return () => listeners.delete(f); };
const snapshot = () => state;

/** { ready, values }: els ajustos de la web (es carreguen la primera vegada que es demanen). */
export function useSettings() {
  return useSyncExternalStore(subscribe, snapshot, snapshot);
}

/** Desa una secció (només administradors; la RLS ho comprova al servidor). */
export async function saveSetting(sb, key, value) {
  if (!(key in DEFAULTS)) throw new Error('clau desconeguda: ' + key);
  const { error } = await sb.from('site_settings').upsert({ key, value });
  if (error) throw error;
  state = { ready: true, values: { ...state.values, [key]: merge(DEFAULTS[key], value) } };
  emit();
}

/**
 * Preu mensual d'una selecció: { subjects, degrees, plan } → { base, extra, total } en euros.
 * Bàsic: la tarifa bàsica (basePrice) inclou baseSubjects assignatures; amb més graus, la tarifa
 * bàsica es multiplica (×degreeMultiplier per al segon grau, ×(1 + 2·(mult−1)) per al tercer…) i
 * també les assignatures incloses; cada assignatura de més costa extraSubject. Pro: proPrice per grau.
 */
export function priceOf(billing, { subjects = 0, degrees = 1, plan = 'basic' }) {
  const d = Math.max(1, degrees);
  if (plan === 'pro') return { base: billing.proPrice * d, extra: 0, total: billing.proPrice * d };
  const base = billing.basePrice * (1 + (d - 1) * (billing.degreeMultiplier - 1));
  const extra = Math.max(0, subjects - billing.baseSubjects * d) * billing.extraSubject;
  return { base, extra, total: base + extra };
}
