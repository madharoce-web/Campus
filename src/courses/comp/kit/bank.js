// Banc de Computadors: exercicis resolts (activitats i model d'examen), famílies generades i el T3.
import ex from './exercises.js';
import { families } from './families.js';
import t3 from './t3/bank.js';

// minuts d'un exercici amb apartats (per omplir un simulacre personalitzat)
const items = ex.items.map((x) => ({ ...x, min: Math.min(30, 3 + 2 * x.parts.length) }));

export default { items: [...items, ...t3.items], families: [...families, ...t3.families] };
