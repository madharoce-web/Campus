import { useCourse } from './context.js';
import { useModule } from './useAsync.js';
import { instance } from './bank.js';

/**
 * Exercicis citats del banc de l'assignatura, per no escriure'ls dues vegades (comprovacions,
 * tipus examen del final del tema, exercicis resolts dels mètodes):
 *   { ref: 'id del banc', seed?, id?, … }  → l'exercici del banc, o una instància de la família amb la
 *   llavor (la mateixa llavor dona sempre el mateix enunciat). Els altres camps substitueixen els del banc.
 * L'exercici resolt conserva ref: el progrés de pràctica es desa amb l'id del banc (o de la família).
 */
const byId = new WeakMap();
function index(bank) {
  if (!byId.has(bank)) {
    const m = new Map();
    for (const f of bank.families || []) m.set(f.id, { fam: f });
    for (const x of bank.items || []) m.set(x.id, { item: x });
    byId.set(bank, m);
  }
  return byId.get(bank);
}

export function resolveRef(bank, ex) {
  if (!ex || !ex.ref) return ex;
  if (!bank) return null;
  const { ref, seed, ...over } = ex;
  const hit = index(bank).get(ref);
  if (!hit) return null;
  const base = hit.item || instance(hit.fam, seed ?? 1);
  return { ...base, ...over, ref, id: over.id || (hit.fam ? ref + '@' + (seed ?? 1) : ref) };
}

/** L'exercici, amb la referència resolta (null mentre es carrega el banc). */
export function useEx(ex) {
  const course = useCourse();
  const bank = useModule(course.k + ':bank', ex && ex.ref ? course.bank : null);
  return resolveRef(bank, ex);
}
