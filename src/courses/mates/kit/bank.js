/**
 * Banc de Matemàtiques: els exercicis resolts (fulls i CP, exercises.js) i les famílies que generen
 * exercicis nous amb els generadors d'abans (families.js).
 */
import exercises from './exercises.js';
import { bankFamilies, pracFamilies } from './families.js';

export default { items: exercises.items, families: [...pracFamilies(), ...bankFamilies()] };
