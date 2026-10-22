import { Z } from '../engine/z.js';

/**
 * Ajudes dels laboratoris del tema 2 (nombres reals, inducció, ℤ i ℚ com a quocients, suprem, intervals) i dades de les induccions.
 * Codi original; l'idioma i les dependències arriben pel contenidor $ (un per idioma).
 */
export function makeLabsNomb($) {
  const { L, fmt, md } = $;
  /* ============================================================
     LABORATORIS · TEMA 2 (nombres reals, inducció, ℤ i ℚ com a quocients)
     ============================================================ */
  const RANKN = { N: 0, Z: 1, Q: 2, I: 3, C: 4 };
  const NUMPRE = [
    { t: 'π', k: 'I', w: () => L('π no és cap quocient d\'enters: és irracional.', 'π no es ningún cociente de enteros: es irracional.') },
    { t: '3', k: 'N', w: () => L('Serveix per comptar: és natural.', 'Sirve para contar: es natural.') },
    { t: '0,\\ov{4}', k: 'Q', w: () => L('Decimal periòdic: 0,444… = 4/9, un quocient d\'enters.', 'Decimal periódico: 0,444… = 4/9, un cociente de enteros.') },
    { t: '\\sq{2}', k: 'I', w: () => L('No hi ha cap racional amb quadrat 2 (teorema de les diapositives).', 'No hay ningún racional con cuadrado 2 (teorema de las diapositivas).') },
    { t: '\\sq{2} · i', k: 'C', w: () => L('El seu quadrat és −2 < 0: no és real.', 'Su cuadrado es −2 < 0: no es real.') },
    { t: '−4', k: 'Z', w: () => L('Enter negatiu: no és natural.', 'Entero negativo: no es natural.') },
    { t: '|−5|', k: 'N', w: () => L('|−5| = 5: primer calcula el valor absolut.', '|−5| = 5: primero calcula el valor absoluto.') },
    { t: '0', k: 'Z', w: () => L('Al curs ℕ = {1, 2, 3, …}: el 0 és enter però no natural.', 'En el curso ℕ = {1, 2, 3, …}: el 0 es entero pero no natural.') },
    { t: '−\\fr{1}{2}', k: 'Q', w: () => L('Quocient d\'enters que no és enter.', 'Cociente de enteros que no es entero.') },
    { t: '\\sq{9}', k: 'N', w: () => L('√9 = 3: l\'arrel és exacta.', '√9 = 3: la raíz es exacta.') },
    { t: 'i^{2}', k: 'Z', w: () => L('i² = −1: és un enter negatiu, encara que s\'escrigui amb i.', 'i² = −1: es un entero negativo, aunque se escriba con i.') },
    { t: '2 + 3i', k: 'C', w: () => L('Part imaginària 3 ≠ 0: complex no real.', 'Parte imaginaria 3 ≠ 0: complejo no real.') },
    { t: '0,25', k: 'Q', w: () => L('Decimal finit: 0,25 = 1/4.', 'Decimal finito: 0,25 = 1/4.') },
    { t: '\\fr{8}{4}', k: 'N', w: () => L('8/4 = 2: simplifica abans de classificar.', '8/4 = 2: simplifica antes de clasificar.') }
  ];
  function classifyFree(s) {
    s = s.replace(/\s+/g, '').replace(/,/g, '.').replace(/−/g, '-').replace(/sqrt\(?(\d+)\)?/g, '√$1');
    let m;
    if (/^-?\d+$/.test(s)) { const v = +s; return { k: v > 0 ? 'N' : 'Z', w: v > 0 ? L('Enter positiu: natural.', 'Entero positivo: natural.') : L('Enter no positiu: no és natural.', 'Entero no positivo: no es natural.') }; }
    if ((m = /^(-?\d+)\/(-?\d+)$/.exec(s)) && +m[2] !== 0) { const [p, q] = Z.frac(+m[1], +m[2]); if (q === 1) return { k: p > 0 ? 'N' : 'Z', w: L('Simplifica a ', 'Simplifica a ') + p + '.' }; return { k: 'Q', w: L('Fracció irreductible ', 'Fracción irreducible ') + p + '/' + q + L(': racional no enter.', ': racional no entero.') }; }
    if (/^-?\d*\.\d+$/.test(s)) { const v = +s; if (Number.isInteger(v)) return { k: v > 0 ? 'N' : 'Z', w: L('És un enter escrit amb decimals.', 'Es un entero escrito con decimales.') }; return { k: 'Q', w: L('Decimal finit: és una fracció amb denominador potència de 10.', 'Decimal finito: es una fracción con denominador potencia de 10.') }; }
    if ((m = /^(-?)√(\d+)$/.exec(s))) { const n = +m[2], r = Math.round(Math.sqrt(n)); if (r * r === n) return { k: m[1] ? (r ? 'Z' : 'Z') : (r ? 'N' : 'Z'), w: L('Arrel exacta: ', 'Raíz exacta: ') + (m[1] ? '−' : '') + r + '.' }; return { k: 'I', w: L('Arrel no exacta d\'un natural: irracional.', 'Raíz no exacta de un natural: irracional.') }; }
    if (/^(π|pi|e)$/i.test(s)) return { k: 'I', w: L('Irracional.', 'Irracional.') };
    if ((m = /^\|(-?\d+)\|$/.exec(s))) { const v = Math.abs(+m[1]); return { k: v > 0 ? 'N' : 'Z', w: '|' + m[1] + '| = ' + v + '.' }; }
    if (/i/.test(s) && /^[-+\d.√/i]+$/.test(s)) return { k: 'C', w: L('Té part imaginària no nul·la: no és real.', 'Tiene parte imaginaria no nula: no es real.') };
    return null;
  }

  /* ---------- axiomes P1–P12 en cada conjunt ---------- */
  const AXR = [
    ['P1', 'a + b = b + a'], ['P2', 'a + (b + c) = (a + b) + c'], ['P3', 'a + 0 = a'], ['P4', 'a + (−a) = 0'], ['P5', 'a · b = b · a'], ['P6', 'a · (b · c) = (a · b) · c'],
    ['P7', 'a · 1 = a, 1 ≠ 0'], ['P8', 'a · a^{−1} = 1 (a ≠ 0)'], ['P9', 'a · (b + c) = a · b + a · c'], ['P10', L => L('a = 0, 0 < a o 0 < −a (només una)', 'a = 0, 0 < a o 0 < −a (solo una)')], ['P11', '0 < a, 0 < b ⟹ 0 < a + b, 0 < a · b'], ['P12', L => L('a < b ⟺ a − b < 0', 'a < b ⟺ a − b < 0')],
    ['sup', L => L('axioma del suprem', 'axioma del supremo')]
  ];
  const AXF = {   // [fila, conjunt] -> explicació del fallo
    'P3N': () => L('0 ∉ ℕ: no hi ha element neutre de la suma.', '0 ∉ ℕ: no hay elemento neutro de la suma.'),
    'P4N': () => L('2 ∈ ℕ però −2 ∉ ℕ: no hi ha oposats.', '2 ∈ ℕ pero −2 ∉ ℕ: no hay opuestos.'),
    'P8N': () => L('2 ∈ ℕ però 1/2 ∉ ℕ.', '2 ∈ ℕ pero 1/2 ∉ ℕ.'), 'P8Z': () => L('2 ∈ ℤ però 1/2 ∉ ℤ: per això les diapositives diuen que ℤ no satisfà la (P8).', '2 ∈ ℤ pero 1/2 ∉ ℤ: por eso las diapositivas dicen que ℤ no satisface la (P8).'),
    'P10C': () => L('ℂ no és un conjunt ordenat: no té sentit dir si 0 < i.', 'ℂ no es un conjunto ordenado: no tiene sentido decir si 0 < i.'), 'P11C': () => L('ℂ no és ordenat.', 'ℂ no es ordenado.'), 'P12C': () => L('ℂ no és ordenat.', 'ℂ no es ordenado.'),
    'supQ': () => L('X = {x ∈ ℚ | x² < 2} és no buit i fitat, però el seu suprem seria √2, que no és de ℚ.', 'X = {x ∈ ℚ | x² < 2} es no vacío y acotado, pero su supremo sería √2, que no es de ℚ.'),
    'supN': () => L('A ℕ tot subconjunt fitat i no buit té màxim, però la propietat es formula per a ℝ.', 'En ℕ todo subconjunto acotado y no vacío tiene máximo, pero la propiedad se formula para ℝ.'),
    'supZ': () => L('Com a ℕ: la propietat es formula per a ℝ.', 'Como en ℕ: la propiedad se formula para ℝ.'), 'supC': () => L('ℂ no és ordenat: no hi ha cotes ni suprem.', 'ℂ no es ordenado: no hay cotas ni supremo.')
  };
  const AXOK = { 'supN': 'na', 'supZ': 'na' };

  /* ---------- demostracions per inducció (dades compartides amb els exercicis) ---------- */
  const IND = {
    cubs9: { src: () => L('Full 2 · ex. 2', 'Hoja 2 · ej. 2'), stmt: 'n^{3} + (n + 1)^{3} + (n + 2)^{3} ' + '= 9m',
      q: () => md(L('Demostreu per inducció que per tot $n ∈ ℕ$, $n^{3} + (n + 1)^{3} + (n + 2)^{3}$ és divisible entre 9.', 'Demostrad por inducción que para todo $n ∈ ℕ$, $n^{3} + (n + 1)^{3} + (n + 2)^{3}$ es divisible entre 9.')),
      cols: () => ['n', 'n^{3} + (n+1)^{3} + (n+2)^{3}', L('÷ 9', '÷ 9')], row: n => { const v = n ** 3 + (n + 1) ** 3 + (n + 2) ** 3; return [n, v, v / 9]; },
      steps: () => [
        { h: L('Cas base (n = 1)', 'Caso base (n = 1)'), m: '1^{3} + 2^{3} + 3^{3} = 1 + 8 + 27 = 36 = 9 · 4', w: L('És múltiple de 9.', 'Es múltiplo de 9.') },
        { h: L('Hipòtesi d\'inducció', 'Hipótesis de inducción'), m: 'k^{3} + (k + 1)^{3} + (k + 2)^{3} = 9m,   m ∈ ℤ', w: L('Suposem que és cert per a un k ∈ ℕ qualsevol.', 'Suponemos que es cierto para un k ∈ ℕ cualquiera.') },
        { h: L('Objectiu', 'Objetivo'), m: '(k + 1)^{3} + (k + 2)^{3} + (k + 3)^{3} = 9 · (' + L('enter', 'entero') + ')', c: 'goal', w: L('El mateix enunciat amb k + 1 al lloc de n.', 'El mismo enunciado con k + 1 en lugar de n.') },
        { h: L('Fes aparèixer la HI', 'Haz aparecer la HI'), m: '(k+1)^{3} + (k+2)^{3} + (k+3)^{3} = [k^{3} + (k+1)^{3} + (k+2)^{3}] + (k+3)^{3} − k^{3}', w: L('Sumem i restem k³: els tres primers termes formen l\'expressió de la HI.', 'Sumamos y restamos k³: los tres primeros términos forman la expresión de la HI.') },
        { h: L('Aplica la HI', 'Aplica la HI'), m: '= 9m + (k+3)^{3} − k^{3}', c: 'hi', w: L('Substituïm el claudàtor per 9m.', 'Sustituimos el corchete por 9m.') },
        { h: L('Desenvolupa la resta', 'Desarrolla el resto'), m: '(k+3)^{3} − k^{3} = 9k^{2} + 27k + 27 = 9(k^{2} + 3k + 3)', w: '(k + 3)³ = k³ + 9k² + 27k + 27.' },
        { h: L('Conclusió', 'Conclusión'), m: '= 9(m + k^{2} + 3k + 3)', c: 'done', w: L('És múltiple de 9. Pel principi d\'inducció, és cert per a tot n ∈ ℕ. ∎', 'Es múltiplo de 9. Por el principio de inducción, es cierto para todo n ∈ ℕ. ∎') }
      ] },
    geo: { src: () => L('Full 2 · ex. 3', 'Hoja 2 · ej. 3'), param: true,
      q: () => md(L('Demostreu per inducció que per tot $r ∈ ℝ$, $r ≠ 1$ i $n ∈ ℕ$: $1 + r + r^{2} + … + r^{n} = \\fr{1 − r^{n+1}}{1 − r}$.', 'Demostrad por inducción que para todo $r ∈ ℝ$, $r ≠ 1$ y $n ∈ ℕ$: $1 + r + r^{2} + … + r^{n} = \\fr{1 − r^{n+1}}{1 − r}$.')),
      cols: () => ['n', '1 + r + … + r^{n}', '\\fr{1 − r^{n+1}}{1 − r}'], row: (n, r) => { let a = 0; for (let i = 0; i <= n; i++) a += r ** i; return [n, a, (1 - r ** (n + 1)) / (1 - r)]; },
      steps: () => [
        { h: L('Cas base (n = 1)', 'Caso base (n = 1)'), m: '1 + r   ' + L('i', 'y') + '   \\fr{1 − r^{2}}{1 − r} = \\fr{(1 − r)(1 + r)}{1 − r} = 1 + r', w: L('Es pot simplificar perquè r ≠ 1, és a dir 1 − r ≠ 0.', 'Se puede simplificar porque r ≠ 1, es decir 1 − r ≠ 0.') },
        { h: L('Hipòtesi d\'inducció', 'Hipótesis de inducción'), m: '1 + r + … + r^{k} = \\fr{1 − r^{k+1}}{1 − r}' },
        { h: L('Objectiu', 'Objetivo'), m: '1 + r + … + r^{k+1} = \\fr{1 − r^{k+2}}{1 − r}', c: 'goal' },
        { h: L('Separa l\'últim terme', 'Separa el último término'), m: '1 + r + … + r^{k+1} = (1 + r + … + r^{k}) + r^{k+1}', w: L('El parèntesi és exactament la suma de la HI.', 'El paréntesis es exactamente la suma de la HI.') },
        { h: L('Aplica la HI', 'Aplica la HI'), m: '= \\fr{1 − r^{k+1}}{1 − r} + r^{k+1}', c: 'hi' },
        { h: L('Denominador comú', 'Denominador común'), m: '= \\fr{1 − r^{k+1} + r^{k+1}(1 − r)}{1 − r} = \\fr{1 − r^{k+1} + r^{k+1} − r^{k+2}}{1 − r}' },
        { h: L('Conclusió', 'Conclusión'), m: '= \\fr{1 − r^{k+2}}{1 − r}', c: 'done', w: L('És l\'objectiu. Per inducció, és cert per a tot n ∈ ℕ. ∎', 'Es el objetivo. Por inducción, es cierto para todo n ∈ ℕ. ∎') }
      ] },
    tele: { src: () => L('Full 2 · ex. 4', 'Hoja 2 · ej. 4'),
      q: () => md(L('Demostreu per inducció que per tot $n ∈ ℕ$: $\\fr{1}{1·2} + \\fr{1}{2·3} + … + \\fr{1}{n(n+1)} = \\fr{n}{n+1}$.', 'Demostrad por inducción que para todo $n ∈ ℕ$: $\\fr{1}{1·2} + \\fr{1}{2·3} + … + \\fr{1}{n(n+1)} = \\fr{n}{n+1}$.')),
      cols: () => ['n', '\\fr{1}{1·2} + … + \\fr{1}{n(n+1)}', '\\fr{n}{n+1}'], row: n => { let p = 0, q = 1; for (let i = 1; i <= n; i++) { const d = i * (i + 1); [p, q] = Z.frac(p * d + q, q * d); } return [n, Z.fracStr(p, q), Z.fracStr(n, n + 1)]; },
      steps: () => [
        { h: L('Cas base (n = 1)', 'Caso base (n = 1)'), m: '\\fr{1}{1 · 2} = \\fr{1}{2} = \\fr{1}{1 + 1}' },
        { h: L('Hipòtesi d\'inducció', 'Hipótesis de inducción'), m: '\\fr{1}{1·2} + … + \\fr{1}{k(k+1)} = \\fr{k}{k+1}' },
        { h: L('Objectiu', 'Objetivo'), m: '\\fr{1}{1·2} + … + \\fr{1}{(k+1)(k+2)} = \\fr{k+1}{k+2}', c: 'goal' },
        { h: L('Separa l\'últim terme i aplica la HI', 'Separa el último término y aplica la HI'), m: '= \\fr{k}{k+1} + \\fr{1}{(k+1)(k+2)}', c: 'hi' },
        { h: L('Denominador comú', 'Denominador común'), m: '= \\fr{k(k+2) + 1}{(k+1)(k+2)} = \\fr{k^{2} + 2k + 1}{(k+1)(k+2)}' },
        { h: L('Reconeix el quadrat', 'Reconoce el cuadrado'), m: '= \\fr{(k+1)^{2}}{(k+1)(k+2)} = \\fr{k+1}{k+2}', c: 'done', w: L('Simplifiquem k + 1 ≠ 0. Per inducció, cert per a tot n ∈ ℕ. ∎', 'Simplificamos k + 1 ≠ 0. Por inducción, cierto para todo n ∈ ℕ. ∎') }
      ] },
    fact: { src: () => L('Full 2 · ex. 5', 'Hoja 2 · ej. 5'),
      q: () => md(L('Demostreu per inducció que per tot $n ∈ ℕ$: $2^{n+3} < (n + 3)!$', 'Demostrad por inducción que para todo $n ∈ ℕ$: $2^{n+3} < (n + 3)!$')),
      cols: () => ['n', '2^{n+3}', '(n+3)!'], row: n => [n, 2 ** (n + 3), Z.range(1, n + 3).reduce((a, b) => a * b, 1)],
      steps: () => [
        { h: L('Cas base (n = 1)', 'Caso base (n = 1)'), m: '2^{4} = 16 < 24 = 4!' },
        { h: L('Hipòtesi d\'inducció', 'Hipótesis de inducción'), m: '2^{k+3} < (k + 3)!' },
        { h: L('Objectiu', 'Objetivo'), m: '2^{k+4} < (k + 4)!', c: 'goal' },
        { h: L('Aplica la HI', 'Aplica la HI'), m: '2^{k+4} = 2 · 2^{k+3} < 2 · (k + 3)!', c: 'hi', w: L('Multiplicar una desigualtat per 2 > 0 la conserva (P11).', 'Multiplicar una desigualdad por 2 > 0 la conserva (P11).') },
        { h: L('Compara 2 amb k + 4', 'Compara 2 con k + 4'), m: '2 < k + 4 ⟹ 2 · (k + 3)! < (k + 4) · (k + 3)!', w: L('Cert perquè k ≥ 1.', 'Cierto porque k ≥ 1.') },
        { h: L('Definició de factorial', 'Definición de factorial'), m: '(k + 4) · (k + 3)! = (k + 4)!', w: 'n! = (n − 1)! · n.' },
        { h: L('Conclusió', 'Conclusión'), m: '2^{k+4} < 2 · (k + 3)! < (k + 4)!', c: 'done', w: L('Encadenem les desigualtats. Per inducció, cert per a tot n ∈ ℕ. ∎', 'Encadenamos las desigualdades. Por inducción, cierto para todo n ∈ ℕ. ∎') }
      ] },
    n35n: { src: () => L('Full 2 · ex. 6', 'Hoja 2 · ej. 6'),
      q: () => md(L('Demostreu per inducció que per tot $n ∈ ℕ$, $n^{3} + 5n$ és divisible entre 6.', 'Demostrad por inducción que para todo $n ∈ ℕ$, $n^{3} + 5n$ es divisible entre 6.')),
      cols: () => ['n', 'n^{3} + 5n', '÷ 6'], row: n => [n, n ** 3 + 5 * n, (n ** 3 + 5 * n) / 6],
      steps: () => [
        { h: L('Cas base (n = 1)', 'Caso base (n = 1)'), m: '1 + 5 = 6 = 6 · 1' },
        { h: L('Hipòtesi d\'inducció', 'Hipótesis de inducción'), m: 'k^{3} + 5k = 6m,   m ∈ ℤ' },
        { h: L('Objectiu', 'Objetivo'), m: '(k + 1)^{3} + 5(k + 1) = 6 · (' + L('enter', 'entero') + ')', c: 'goal' },
        { h: L('Desenvolupa i agrupa', 'Desarrolla y agrupa'), m: '(k+1)^{3} + 5(k+1) = k^{3} + 3k^{2} + 3k + 1 + 5k + 5 = (k^{3} + 5k) + 3k(k + 1) + 6' },
        { h: L('Aplica la HI', 'Aplica la HI'), m: '= 6m + 3k(k + 1) + 6', c: 'hi' },
        { h: L('Lema: k(k + 1) és parell', 'Lema: k(k + 1) es par'), m: 'k(k + 1) = 2t  ⟹  3k(k + 1) = 6t', w: L('De dos enters consecutius, un és parell. L\'examen demana demostrar els resultats auxiliars: escriu aquesta línia.', 'De dos enteros consecutivos, uno es par. El examen pide demostrar los resultados auxiliares: escribe esta línea.') },
        { h: L('Conclusió', 'Conclusión'), m: '= 6(m + t + 1)', c: 'done', w: L('Múltiple de 6. Per inducció, cert per a tot n ∈ ℕ. ∎', 'Múltiplo de 6. Por inducción, cierto para todo n ∈ ℕ. ∎') }
      ] },
    cubsum: { src: () => 'CP2-2025 · ex. 2',
      q: () => md(L('Demostreu per inducció que $1^{3} + 2^{3} + 3^{3} + … + n^{3} = (\\fr{n(n+1)}{2})^{2}$ per tot $n ∈ ℕ$.', 'Demostrad por inducción que $1^{3} + 2^{3} + 3^{3} + … + n^{3} = (\\fr{n(n+1)}{2})^{2}$ para todo $n ∈ ℕ$.')),
      cols: () => ['n', '1^{3} + … + n^{3}', '(\\fr{n(n+1)}{2})^{2}'], row: n => { let a = 0; for (let i = 1; i <= n; i++) a += i ** 3; return [n, a, (n * (n + 1) / 2) ** 2]; },
      steps: () => [
        { h: L('Cas base (n = 1)', 'Caso base (n = 1)'), m: '1^{3} = 1 = (\\fr{1 · 2}{2})^{2}' },
        { h: L('Hipòtesi d\'inducció', 'Hipótesis de inducción'), m: '1^{3} + … + k^{3} = \\fr{k^{2}(k + 1)^{2}}{4}' },
        { h: L('Objectiu', 'Objetivo'), m: '1^{3} + … + (k + 1)^{3} = \\fr{(k + 1)^{2}(k + 2)^{2}}{4}', c: 'goal' },
        { h: L('Separa l\'últim terme i aplica la HI', 'Separa el último término y aplica la HI'), m: '= \\fr{k^{2}(k + 1)^{2}}{4} + (k + 1)^{3}', c: 'hi' },
        { h: L('Treu factor comú (k + 1)²', 'Saca factor común (k + 1)²'), m: '= \\fr{(k + 1)^{2}(k^{2} + 4(k + 1))}{4} = \\fr{(k + 1)^{2}(k^{2} + 4k + 4)}{4}' },
        { h: L('Conclusió', 'Conclusión'), m: '= \\fr{(k + 1)^{2}(k + 2)^{2}}{4} = (\\fr{(k + 1)(k + 2)}{2})^{2}', c: 'done', w: L('k² + 4k + 4 = (k + 2)². Per inducció, cert per a tot n ∈ ℕ. ∎', 'k² + 4k + 4 = (k + 2)². Por inducción, cierto para todo n ∈ ℕ. ∎') }
      ] }
  };
  const IND_ORDER = ['cubs9', 'geo', 'tele', 'fact', 'n35n', 'cubsum'];
  function indSteps(k) { return IND[k].steps().map(x => x.c === 'hi' ? Object.assign({}, x, { h: x.h + ' <span class="tagHI">HI</span>' }) : x); }

  /* ---------- suprem i ínfim ---------- */
  const SUPS = {
    inv: { t: '\\{\\fr{1}{n} | n ∈ ℕ\\}', min: -0.25, max: 1.25, pts: Z.range(1, 60).map(n => 1 / n), sup: 1, supIn: true, inf: 0, infIn: false, wit: (e, sup) => sup ? { v: 1, t: '1 = \\fr{1}{1}' } : (() => { const n = Math.floor(1 / e) + 1; return { v: 1 / n, t: '\\fr{1}{' + n + '}' }; })() },
    oc: { t: '(0, 1)', min: -0.25, max: 1.25, seg: [0, 1], sup: 1, supIn: false, inf: 0, infIn: false, wit: (e, sup) => sup ? { v: 1 - e / 2, t: fmt(1 - e / 2, 3) } : { v: e / 2, t: fmt(e / 2, 3) } },
    one: { t: '\\{1 − \\fr{1}{n} | n ∈ ℕ\\}', min: -0.25, max: 1.25, pts: Z.range(1, 60).map(n => 1 - 1 / n), sup: 1, supIn: false, inf: 0, infIn: true, wit: (e, sup) => sup ? (() => { const n = Math.floor(1 / e) + 1; return { v: 1 - 1 / n, t: '1 − \\fr{1}{' + n + '}' }; })() : { v: 0, t: '0 = 1 − \\fr{1}{1}' } },
    sq2: { t: '\\{x ∈ ℚ | x^{2} < 2\\}', min: -1.8, max: 1.8, seg: [-Math.SQRT2, Math.SQRT2], sup: Math.SQRT2, supIn: false, inf: -Math.SQRT2, infIn: false, irr: true,
      wit: (e, sup) => { let d = 1; while (Math.SQRT2 - Math.floor(Math.SQRT2 * 10 ** d) / 10 ** d >= e) d++; const v = Math.floor(Math.SQRT2 * 10 ** d) / 10 ** d; return { v: sup ? v : -v, t: (sup ? '' : '−') + v.toFixed(d).replace('.', ',') }; } }
  };
  return { RANKN, NUMPRE, classifyFree, AXR, AXF, AXOK, IND, IND_ORDER, indSteps, SUPS };
}
