// Entrada de l'índex (toc) del T3; la lliçó és a unit.js i es carrega quan s'obre.
import { L3 } from './h.js';

export default {
  id: 't3', n: '3', langs: ['ca', 'es', 'en'],
  t: L3("Àlgebra de Boole", 'Álgebra de Boole', 'Boolean algebra'),
  sections: [
    { id: 't3-var', t: L3('Variables i funcions lògiques', 'Variables y funciones lógicas', 'Logic variables and functions') },
    { id: 't3-basic', t: L3('NOT, AND i OR', 'NOT, AND y OR', 'NOT, AND and OR'), hard: true },
    { id: 't3-der', t: L3('NAND, NOR i XOR', 'NAND, NOR y XOR', 'NAND, NOR and XOR') },
    { id: 't3-multi', t: L3('Més de dues entrades', 'Más de dos entradas', 'More than two inputs') },
    { id: 't3-laws1', t: L3('Commutativa, associativa i distributiva', 'Conmutativa, asociativa y distributiva', 'Commutative, associative and distributive') },
    { id: 't3-const', t: L3('Neutres, dominància, complementació, idempotència i involució', 'Neutros, dominancia, complementación, idempotencia e involución', 'Identity, dominance, complement, idempotence and involution') },
    { id: 't3-abs', t: L3('Absorció', 'Absorción', 'Absorption') },
    { id: 't3-dual', t: L3('Principi de dualitat', 'Principio de dualidad', 'Duality principle') },
    { id: 't3-simp', t: L3('Simplificar pas a pas', 'Simplificar paso a paso', 'Simplifying step by step'), hard: true },
  ],
};
