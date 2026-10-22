import { Z } from '../engine/z.js';

/**
 * Simulacre d'examen: nivells, rúbriques i construcció de l'examen a partir d'una llavor.
 * Codi original; l'idioma i les dependències arriben pel contenidor $ (un per idioma).
 */
export function makeExam($) {
  const { ARFX, ARTAG, BKDIV, BKINEQ, BKPROD, BKPROOF, BKSIMP, BKSIMP_F, CXFX, CXTAG, FXCLS, FXDIV, FXORDDEF, FXT, INDFX, L, P, bkAbsProofGen, bkAbsSqGen, bkAbsSumGen, bkBuildGen, bkComboGen, bkCxSpecialGen, bkEqProofGen0, bkFactorGen, bkFxEq, bkFxHasse, bkFxOrd, bkFxProdProof, bkFxProof, bkFxSimp, bkIdTfGen, bkIndDivHardGen, bkIndIneqGen, bkIndRecGen, bkIrrGen, bkOrdProofGen0, bkPowProofGen, bkRootCxGen, bkSumF, bkSupGen, bkSupProofGen, bkZConjGen, fxInd, hasseSVG, indProof, indTag, kDone, kF, kS, kT, md, ng, pr, ri, rootSteps, rootsData, sParse, sTx } = $;
  const fmtP = x => String(Math.round(x * 100) / 100).replace('.', ',');
  const EXM = () => ({
    cp: { n: L('Com el CP de l\'any passat', 'Como el CP del año pasado'), min: 90,
      d: L('Mateixa estructura i dificultat que els exercicis del CP1-2025 i del CP2-2025 que entren enguany: una igualtat de conjunts i un producte cartesià, una implicació amb conjunts, una relació d\'equivalència amb les classes, un ordre amb el diagrama de Hasse, les arrels d\'un polinomi i una inducció.', 'Misma estructura y dificultad que los ejercicios del CP1-2025 y del CP2-2025 que entran este año: una igualdad de conjuntos y un producto cartesiano, una implicación con conjuntos, una relación de equivalencia con las clases, un orden con el diagrama de Hasse, las raíces de un polinomio y una inducción.') },
    hard: { n: L('Difícil', 'Difícil'), min: 105,
      d: L('Els mateixos temes un pas més enllà: igualtats amb tres conjunts, decidir si una igualtat és certa, equivalències amb fórmules mixtes, l\'ordre producte, arrels de complexos no reals, divisibilitat per inducció i un exercici de valor absolut i suprem.', 'Los mismos temas un paso más allá: igualdades con tres conjuntos, decidir si una igualdad es cierta, equivalencias con fórmulas mixtas, el orden producto, raíces de complejos no reales, divisibilidad por inducción y un ejercicio de valor absoluto y supremo.') },
    ext: { n: L('Extrem', 'Extremo'), min: 120,
      d: L('Per treure un 10: contraexemples, el conjunt de les parts, equivalències amb parelles, construir relacions, equacions amb $\\ov{z}$, factoritzar a ℝ, desigualtats per inducció i demostracions de suprem o d\'irracionalitat.', 'Para sacar un 10: contraejemplos, el conjunto de las partes, equivalencias con pares, construir relaciones, ecuaciones con $\\ov{z}$, factorizar en ℝ, desigualdades por inducción y demostraciones de supremo o de irracionalidad.') }
  });
  /* ---------- rúbriques: [fracció dels punts de l'apartat, què es valora] ---------- */
  const RUB = {
    proof: () => [[0.25, L('Planteja què cal demostrar: cadena d\'igualtats, doble inclusió o les dues implicacions.', 'Plantea qué hay que demostrar: cadena de igualdades, doble inclusión o las dos implicaciones.')], [0.5, L('Cada pas és correcte i porta la seva justificació (fila del formulari, definició o resultat enunciat).', 'Cada paso es correcto y lleva su justificación (fila del formulario, definición o resultado enunciado).')], [0.25, L('Conclusió escrita.', 'Conclusión escrita.')]],
    decide: () => [[0.25, L('Decisió correcta: és certa o és falsa.', 'Decisión correcta: es cierta o es falsa.')], [0.75, L('Justificació: demostració completa si és certa; contraexemple concret i comprovat si és falsa.', 'Justificación: demostración completa si es cierta; contraejemplo concreto y comprobado si es falsa.')]],
    eq: () => [[0.25, L('Reflexiva, amb la fila del §3 aplicada a tot x.', 'Reflexiva, con la fila del §3 aplicada a todo x.')], [0.25, L('Simètrica.', 'Simétrica.')], [0.3, L('Transitiva (amb enters diferents per a cada hipòtesi).', 'Transitiva (con enteros distintos para cada hipótesis).')], [0.2, L('Conclusió: és d\'equivalència.', 'Conclusión: es de equivalencia.')]],
    cls: () => [[0.5, L('Totes les classes, ben descrites.', 'Todas las clases, bien descritas.')], [0.25, L('Tres elements de cadascuna (també algun negatiu).', 'Tres elementos de cada una (también algún negativo).')], [0.25, L('La classe del nombre demanat, amb la divisió entera.', 'La clase del número pedido, con la división entera.')]],
    eqcls: () => [[0.2, L('Reflexiva.', 'Reflexiva.')], [0.2, L('Simètrica.', 'Simétrica.')], [0.3, L('Transitiva.', 'Transitiva.')], [0.3, L('Classes (o el que demani l\'enunciat sobre les classes).', 'Clases (o lo que pida el enunciado sobre las clases).')]],
    ord: () => [[0.25, L('Reflexiva.', 'Reflexiva.')], [0.3, L('Antisimètrica (en la forma x ℛ y ∧ y ℛ x ⇒ x = y).', 'Antisimétrica (en la forma x ℛ y ∧ y ℛ x ⇒ x = y).')], [0.3, L('Transitiva.', 'Transitiva.')], [0.15, L('Conclusió: és d\'ordre.', 'Conclusión: es de orden.')]],
    hasse: () => [[0.4, L('Parcial o total, amb dos elements no comparables (o justificant que tots ho són).', 'Parcial o total, con dos elementos no comparables (o justificando que todos lo son).')], [0.6, L('Diagrama de Hasse correcte: només cobertures, sense bucles ni dreceres.', 'Diagrama de Hasse correcto: solo coberturas, sin bucles ni atajos.')]],
    roots: () => [[0.25, L('Planteja: w en polar i d\'on surten les arrels (potència de §6.1).', 'Plantea: w en polar y de dónde salen las raíces (potencia de §6.1).')], [0.5, L('Totes les solucions, una per a cada k.', 'Todas las soluciones, una para cada k.')], [0.25, L('Formes binòmica i polar, i conjunts on són.', 'Formas binómica y polar, y conjuntos donde están.')]],
    ind: () => [[0.2, L('Cas base.', 'Caso base.')], [0.2, L('Hipòtesi d\'inducció escrita.', 'Hipótesis de inducción escrita.')], [0.45, L('Pas inductiu: fa servir la hipòtesi i arriba a P(k + 1).', 'Paso inductivo: usa la hipótesis y llega a P(k + 1).')], [0.15, L('Conclusió amb el principi d\'inducció (§4).', 'Conclusión con el principio de inducción (§4).')]],
    calc: () => [[0.5, L('Procediment correcte i justificat.', 'Procedimiento correcto y justificado.')], [0.5, L('Resultat correcte i ben escrit.', 'Resultado correcto y bien escrito.')]],
    sup: () => [[0.25, L('Suprem.', 'Supremo.')], [0.25, L('Ínfim.', 'Ínfimo.')], [0.5, L('Màxim i mínim, justificant si pertanyen al conjunt.', 'Máximo y mínimo, justificando si pertenecen al conjunto.')]],
    build: () => [[0.5, L('Un graf que compleix totes les condicions.', 'Un grafo que cumple todas las condiciones.')], [0.5, L('Comprovació de cada propietat amb la seva fila del §3.', 'Comprobación de cada propiedad con su fila del §3.')]]
  };
  const exPart = (pts, I, rub, q) => ({ pts, q: q || I.q, sol: I.sol, fx: I.fx, rub });
  const tagWith = (st, tags) => Array.isArray(st) ? st.map(s => { const t = tags.find(([re]) => re.test(String(s.h || ''))); return t ? kF(Object.assign({}, s), t[1], t[2] ? t[2]() : null) : s; }) : st;
  const withSol = (I, f) => { const s0 = I.sol; I.sol = () => f(s0()); return I; };

  /* ---------- implicacions amb conjunts ---------- */
  const EXIMP = [
    { lv: 'cp', s: () => L('Siguin $A, B ⊆ Ω$. Demostreu que $A ⊆ B$ implica $\\ov{A} ∪ B = Ω$.', 'Sean $A, B ⊆ Ω$. Demostrad que $A ⊆ B$ implica $\\ov{A} ∪ B = Ω$.'),
      st: () => [{ h: L('Fila del formulari', 'Fila del formulario'), m: 'X ∪ Y = Ω ⟺ \\ov{X} ⊆ Y', f: ['C7'] }, { t: L('Amb $X = \\ov{A}$ i $Y = B$: $\\ov{A} ∪ B = Ω ⟺ \\ov{\\ov{A}} ⊆ B ⟺ A ⊆ B$.', 'Con $X = \\ov{A}$ e $Y = B$: $\\ov{A} ∪ B = Ω ⟺ \\ov{\\ov{A}} ⊆ B ⟺ A ⊆ B$.'), f: ['C2'] }, { t: L('Com que $A ⊆ B$ per hipòtesi, $\\ov{A} ∪ B = Ω$. ∎', 'Como $A ⊆ B$ por hipótesis, $\\ov{A} ∪ B = Ω$. ∎'), c: 'done' }],
      on: ['C7', 'C2'], plan: () => L('Busca al formulari una fila amb «$= Ω$»: és Complementari (7). També es pot fer per doble inclusió ($⊆$ és gratis; per a $⊇$, casos $x ∈ A$ i $x ∉ A$).', 'Busca en el formulario una fila con «$= Ω$»: es Complementari (7). También se puede hacer por doble inclusión ($⊆$ es gratis; para $⊇$, casos $x ∈ A$ y $x ∉ A$).') },
    { lv: 'cp', s: () => L('Siguin $A, B ⊆ Ω$. Demostreu que si $A ⊆ B$, aleshores $A ∩ \\ov{B} = ∅$.', 'Sean $A, B ⊆ Ω$. Demostrad que si $A ⊆ B$, entonces $A ∩ \\ov{B} = ∅$.'),
      st: () => [{ h: L('Fila del formulari', 'Fila del formulario'), m: 'X ∩ Y = ∅ ⟺ X ⊆ \\ov{Y}', f: ['C6'] }, { t: L('Amb $X = A$ i $Y = \\ov{B}$: $A ∩ \\ov{B} = ∅ ⟺ A ⊆ \\ov{\\ov{B}} = B$.', 'Con $X = A$ e $Y = \\ov{B}$: $A ∩ \\ov{B} = ∅ ⟺ A ⊆ \\ov{\\ov{B}} = B$.'), f: ['C2'] }, { t: L('Com que $A ⊆ B$, queda $A ∩ \\ov{B} = ∅$. ∎', 'Como $A ⊆ B$, queda $A ∩ \\ov{B} = ∅$. ∎'), c: 'done' }],
      on: ['C6', 'C2'], plan: () => L('Complementari (6) relaciona «intersecció buida» amb una inclusió. Aplica-la amb $Y = \\ov{B}$ i treu el doble complementari.', 'Complementari (6) relaciona «intersección vacía» con una inclusión. Aplícala con $Y = \\ov{B}$ y quita el doble complementario.') },
    { lv: 'cp', s: () => L('Siguin $A, B ⊆ Ω$. Demostreu que si $A ⊆ B$, aleshores $A ∪ (B ∖ A) = B$.', 'Sean $A, B ⊆ Ω$. Demostrad que si $A ⊆ B$, entonces $A ∪ (B ∖ A) = B$.'),
      st: () => [{ h: '(⊆)', t: L('$A ⊆ B$ (hipòtesi) i $B ∖ A ⊆ B$ (Diferència (1)). Per Unió (7), $A ∪ (B ∖ A) ⊆ B$.', '$A ⊆ B$ (hipótesis) y $B ∖ A ⊆ B$ (Diferència (1)). Por Unió (7), $A ∪ (B ∖ A) ⊆ B$.'), f: ['D1', 'U7'] }, { h: '(⊇)', t: L('Sigui $x ∈ B$. Si $x ∈ A$, és a $A ⊆ A ∪ (B ∖ A)$. Si $x ∉ A$, és a $B ∖ A ⊆ A ∪ (B ∖ A)$.', 'Sea $x ∈ B$. Si $x ∈ A$, está en $A ⊆ A ∪ (B ∖ A)$. Si $x ∉ A$, está en $B ∖ A ⊆ A ∪ (B ∖ A)$.'), f: ['U5'] }, { t: L('Per doble inclusió, $A ∪ (B ∖ A) = B$. ∎', 'Por doble inclusión, $A ∪ (B ∖ A) = B$. ∎'), c: 'done' }],
      on: ['D1', 'U7', 'U5'], plan: () => L('Doble inclusió. La primera surt directament del formulari; la segona, per casos.', 'Doble inclusión. La primera sale directamente del formulario; la segunda, por casos.'), fora: () => [FXT.dbl()] },
    { lv: 'cp', s: () => L('Siguin $A, B, C ⊆ Ω$. Demostreu que si $A ⊆ B$, aleshores $A ∖ C ⊆ B ∖ C$.', 'Sean $A, B, C ⊆ Ω$. Demostrad que si $A ⊆ B$, entonces $A ∖ C ⊆ B ∖ C$.'),
      st: () => [{ t: L('Sigui $x ∈ A ∖ C$: és a dir, $x ∈ A$ i $x ∉ C$.', 'Sea $x ∈ A ∖ C$: es decir, $x ∈ A$ y $x ∉ C$.') }, { t: L('Com que $A ⊆ B$, $x ∈ B$. Per tant $x ∈ B$ i $x ∉ C$: $x ∈ B ∖ C$.', 'Como $A ⊆ B$, $x ∈ B$. Por tanto $x ∈ B$ y $x ∉ C$: $x ∈ B ∖ C$.') }, { t: L('Com que $x$ era qualsevol, $A ∖ C ⊆ B ∖ C$. ∎', 'Como $x$ era cualquiera, $A ∖ C ⊆ B ∖ C$. ∎'), c: 'done' }],
      on: [], plan: () => L('Cap fila del formulari ho dona: agafa un element qualsevol i fes servir la definició de $∖$ i la hipòtesi.', 'Ninguna fila del formulario lo da: toma un elemento cualquiera y usa la definición de $∖$ y la hipótesis.') },
    { lv: 'cp', s: () => L('Siguin $A, B, C ⊆ Ω$. Demostreu que si $A ⊆ B$, aleshores $A ∩ C ⊆ B ∩ C$.', 'Sean $A, B, C ⊆ Ω$. Demostrad que si $A ⊆ B$, entonces $A ∩ C ⊆ B ∩ C$.'),
      st: () => [{ t: L('Per Intersecció (7), cal veure que $A ∩ C ⊆ B$ i $A ∩ C ⊆ C$.', 'Por Intersecció (7), hay que ver que $A ∩ C ⊆ B$ y $A ∩ C ⊆ C$.'), f: ['I7'] }, { t: L('$A ∩ C ⊆ A ⊆ B$ (Intersecció (5) i hipòtesi) i $A ∩ C ⊆ C$ (Intersecció (5)).', '$A ∩ C ⊆ A ⊆ B$ (Intersecció (5) e hipótesis) y $A ∩ C ⊆ C$ (Intersecció (5)).'), f: ['I5'] }, { t: L('Per tant $A ∩ C ⊆ B ∩ C$. ∎', 'Por tanto $A ∩ C ⊆ B ∩ C$. ∎'), c: 'done' }],
      on: ['I7', 'I5'], plan: () => L('Intersecció (7) diu com es demostra que un conjunt és dins d\'una intersecció: és dins de cadascun.', 'Intersecció (7) dice cómo se demuestra que un conjunto está dentro de una intersección: está dentro de cada uno.'), fora: () => [L('Transitivitat de ⊆: immediata per la definició.', 'Transitividad de ⊆: inmediata por la definición.')] },
    { lv: 'hard', s: () => L('Siguin $A, B ⊆ Ω$. Demostreu que si $A ∩ B = A ∪ B$, aleshores $A = B$.', 'Sean $A, B ⊆ Ω$. Demostrad que si $A ∩ B = A ∪ B$, entonces $A = B$.'),
      st: () => [{ m: 'A ⊆ A ∪ B = A ∩ B ⊆ B', f: ['U5', 'I5'] }, { m: 'B ⊆ A ∪ B = A ∩ B ⊆ A', f: ['U5', 'I5'] }, { t: L('Per doble inclusió, $A = B$. ∎', 'Por doble inclusión, $A = B$. ∎'), c: 'done' }],
      on: ['U5', 'I5'], plan: () => L('Només amb el formulari: encadena Unió (5), la hipòtesi i Intersecció (5).', 'Solo con el formulario: encadena Unió (5), la hipótesis e Intersecció (5).'), fora: () => [FXT.dbl()] },
    { lv: 'hard', s: () => L('Siguin $A, B ⊆ Ω$. Demostreu que $A ⊆ B ⟺ A ∪ B = B$.', 'Sean $A, B ⊆ Ω$. Demostrad que $A ⊆ B ⟺ A ∪ B = B$.'),
      st: () => [{ h: '(⟹)', t: L('$⊆$: $A ⊆ B$ i $B ⊆ B$, i per Unió (7) $A ∪ B ⊆ B$. $⊇$: $B ⊆ A ∪ B$ (Unió (5)). Per doble inclusió, $A ∪ B = B$.', '$⊆$: $A ⊆ B$ y $B ⊆ B$, y por Unió (7) $A ∪ B ⊆ B$. $⊇$: $B ⊆ A ∪ B$ (Unió (5)). Por doble inclusión, $A ∪ B = B$.'), f: ['U7', 'U5'] }, { h: '(⟸)', t: L('$A ⊆ A ∪ B = B$ (Unió (5)). ∎', '$A ⊆ A ∪ B = B$ (Unió (5)). ∎'), f: ['U5'], c: 'done' }],
      on: ['U7', 'U5'], plan: () => L('Les dues implicacions per separat, amb Unió (5) i (7).', 'Las dos implicaciones por separado, con Unió (5) y (7).'), compte: () => [L('És exactament Unió (6): com que et demanen demostrar-la, no la pots citar.', 'Es exactamente Unió (6): como te piden demostrarla, no la puedes citar.')], fora: () => [FXT.dbl()] },
    { lv: 'hard', s: () => L('Siguin $A, B ⊆ Ω$. Demostreu que $A ∖ B = ∅ ⟺ A ⊆ B$.', 'Sean $A, B ⊆ Ω$. Demostrad que $A ∖ B = ∅ ⟺ A ⊆ B$.'),
      st: () => [{ h: '(⟹)', t: L('Sigui $x ∈ A$. Si fos $x ∉ B$, tindríem $x ∈ A ∖ B = ∅$: impossible. Per tant $x ∈ B$.', 'Sea $x ∈ A$. Si fuera $x ∉ B$, tendríamos $x ∈ A ∖ B = ∅$: imposible. Por tanto $x ∈ B$.') }, { h: '(⟸)', t: L('Si hi hagués $x ∈ A ∖ B$, seria $x ∈ A ⊆ B$ i $x ∉ B$: impossible. Per tant $A ∖ B$ no té elements. ∎', 'Si hubiera $x ∈ A ∖ B$, sería $x ∈ A ⊆ B$ y $x ∉ B$: imposible. Por tanto $A ∖ B$ no tiene elementos. ∎'), c: 'done' }],
      on: [], plan: () => L('Les dues implicacions, cadascuna per reducció a l\'absurd amb un element.', 'Las dos implicaciones, cada una por reducción al absurdo con un elemento.'), compte: () => [L('És Diferència (8): com que et demanen demostrar-la, no la pots citar.', 'Es Diferència (8): como te piden demostrarla, no la puedes citar.')] },
    { lv: 'hard', s: () => L('Siguin $A, B, C ⊆ Ω$. Demostreu que si $A ∪ B = A ∩ C$, aleshores $B ⊆ A ⊆ C$.', 'Sean $A, B, C ⊆ Ω$. Demostrad que si $A ∪ B = A ∩ C$, entonces $B ⊆ A ⊆ C$.'),
      st: () => [{ m: 'B ⊆ A ∪ B = A ∩ C ⊆ A', f: ['U5', 'I5'] }, { m: 'A ⊆ A ∪ B = A ∩ C ⊆ C', f: ['U5', 'I5'] }, { t: L('Per tant $B ⊆ A ⊆ C$. ∎', 'Por tanto $B ⊆ A ⊆ C$. ∎'), c: 'done' }],
      on: ['U5', 'I5'], plan: () => L('El truc és passar per la hipòtesi: cada conjunt és dins d\'una unió (Unió (5)) i una intersecció és dins de cada factor (Intersecció (5)).', 'El truco es pasar por la hipótesis: cada conjunto está dentro de una unión (Unió (5)) y una intersección está dentro de cada factor (Intersecció (5)).') },
    { lv: 'ext', s: () => L('Siguin $A, B ⊆ Ω$ amb $A ∪ B = Ω$ i $A ∩ B = ∅$. Demostreu que $B = \\ov{A}$.', 'Sean $A, B ⊆ Ω$ con $A ∪ B = Ω$ y $A ∩ B = ∅$. Demostrad que $B = \\ov{A}$.'),
      st: () => [{ t: L('$A ∪ B = Ω ⟺ \\ov{A} ⊆ B$.', '$A ∪ B = Ω ⟺ \\ov{A} ⊆ B$.'), f: ['C7'] }, { t: L('$A ∩ B = ∅$, és a dir $B ∩ A = ∅$, i això és $B ⊆ \\ov{A}$.', '$A ∩ B = ∅$, es decir $B ∩ A = ∅$, y eso es $B ⊆ \\ov{A}$.'), f: ['I2', 'C6'] }, { t: L('Per doble inclusió, $B = \\ov{A}$. ∎', 'Por doble inclusión, $B = \\ov{A}$. ∎'), c: 'done' }],
      on: ['C7', 'C6', 'I2'], plan: () => L('Cada hipòtesi és una fila del formulari llegida en un sentit: Complementari (7) dona una inclusió i Complementari (6) l\'altra.', 'Cada hipótesis es una fila del formulario leída en un sentido: Complementari (7) da una inclusión y Complementari (6) la otra.'), fora: () => [FXT.dbl()] },
    { lv: 'ext', s: () => L('Siguin $A, B ⊆ Ω$. Demostreu que si $A ∖ B = B ∖ A$, aleshores $A = B$.', 'Sean $A, B ⊆ Ω$. Demostrad que si $A ∖ B = B ∖ A$, entonces $A = B$.'),
      st: () => [{ m: 'A ∖ B = (A ∖ B) ∩ (A ∖ B) = (A ∖ B) ∩ (B ∖ A) = ∅', w: L('Intersecció (1), hipòtesi i Diferència (5)', 'Intersecció (1), hipótesis y Diferència (5)'), f: ['I1', 'D5'] }, { t: L('$A ∖ B = ∅$ dona $A ⊆ B$.', '$A ∖ B = ∅$ da $A ⊆ B$.'), f: ['D8'] }, { t: L('Igual, $B ∖ A = A ∖ B = ∅$ dona $B ⊆ A$. Per doble inclusió, $A = B$. ∎', 'Igual, $B ∖ A = A ∖ B = ∅$ da $B ⊆ A$. Por doble inclusión, $A = B$. ∎'), f: ['D8'], c: 'done' }],
      on: ['I1', 'D5', 'D8'], plan: () => L('Només amb el formulari: Diferència (5) diu que $A ∖ B$ i $B ∖ A$ no comparteixen res; si són iguals, han de ser buits. Després Diferència (8).', 'Solo con el formulario: Diferència (5) dice que $A ∖ B$ y $B ∖ A$ no comparten nada; si son iguales, tienen que ser vacíos. Después Diferència (8).'), fora: () => [FXT.dbl()] },
    { lv: 'ext', s: () => L('Siguin $A, B, C ⊆ Ω$ amb $A ∩ B = A ∩ C$ i $A ∪ B = A ∪ C$. Demostreu que $B = C$.', 'Sean $A, B, C ⊆ Ω$ con $A ∩ B = A ∩ C$ y $A ∪ B = A ∪ C$. Demostrad que $B = C$.'),
      st: () => [{ h: '(⊆)', t: L('Sigui $x ∈ B$. Si $x ∈ A$: $x ∈ A ∩ B = A ∩ C$, per tant $x ∈ C$. Si $x ∉ A$: $x ∈ A ∪ B = A ∪ C$ i $x ∉ A$, per tant $x ∈ C$.', 'Sea $x ∈ B$. Si $x ∈ A$: $x ∈ A ∩ B = A ∩ C$, por tanto $x ∈ C$. Si $x ∉ A$: $x ∈ A ∪ B = A ∪ C$ y $x ∉ A$, por tanto $x ∈ C$.') }, { h: '(⊇)', t: L('El mateix canviant els papers de $B$ i $C$.', 'Lo mismo cambiando los papeles de $B$ y $C$.') }, { t: L('Per doble inclusió, $B = C$. ∎', 'Por doble inclusión, $B = C$. ∎'), c: 'done' }],
      on: [], plan: () => L('Doble inclusió i, per a cada element, dos casos: és a $A$ o no hi és. Cada cas fa servir una de les dues hipòtesis.', 'Doble inclusión y, para cada elemento, dos casos: está en $A$ o no está. Cada caso usa una de las dos hipótesis.'), compte: () => [L('Cap de les dues hipòtesis sola no n\'hi ha prou: totes dues són necessàries.', 'Ninguna de las dos hipótesis sola es suficiente: las dos son necesarias.')], fora: () => [FXT.dbl()] }
  ];
  function exImp(lv) {
    const it = Z.pick(EXIMP.filter(x => x.lv === lv));
    return { q: () => md(it.s()), sol: () => it.st(), fx: () => ({ on: it.on, plan: it.plan(), compte: (it.compte ? it.compte() : []).concat([FXT.defs()]), fora: it.fora ? it.fora() : [] }) };
  }

  /* ---------- exercici 1: conjunts ---------- */
  function exSets(lv) {
    if (lv === 'cp') {
      const j = Z.rnd(BKSIMP.length), it = BKSIMP[j], F = BKSIMP_F[j], ne = sParse(it.e), nr = sParse(it.r);
      const a = { pts: 1, q: () => md(L(`Demostreu, fent servir les lleis del formulari, que $${Z.disp(ne)} = ${Z.disp(nr)}$.`, `Demostrad, usando las leyes del formulario, que $${Z.disp(ne)} = ${Z.disp(nr)}$.`)),
        sol: () => it.ch().map(([m_, w], i) => kF(kS('', m_, w), F.k[i], F.d && !F.k[i].length ? L('passar la diferència a intersecció amb el complementari (vegeu a dalt)', 'pasar la diferencia a intersección con el complementario (ver arriba)') : null)).concat([kDone(Z.disp(ne) + ' = ' + Z.disp(nr) + '   ∎')]), fx: () => bkFxSimp(j), rub: RUB.proof() };
      const p = Z.pick(BKPROD.filter(x => x.ok));
      const b = { pts: 1, q: () => md(L(`Demostreu que $${p.s}$.`, `Demostrad que $${p.s}$.`)), sol: () => p.ch().map(([m_, w]) => kS('', m_, w)).concat([kT(L('Conclusió', 'Conclusión'), md(L('Per a cada parella, les dues condicions són equivalents: els conjunts són iguals. ∎', 'Para cada par, las dos condiciones son equivalentes: los conjuntos son iguales. ∎')), 'done')]), fx: () => bkFxProdProof(true), rub: RUB.proof() };
      return { t: () => L('Conjunts', 'Conjuntos'), parts: [a, b] };
    }
    if (lv === 'hard') {
      const j = Z.rnd(8), it = BKPROOF[j], p = Z.pick(BKPROD);
      return { t: () => L('Conjunts', 'Conjuntos'), parts: [
        { pts: 0.75, q: () => md(L(`Demostreu que, per a conjunts qualssevol $A, B, C ⊆ Ω$, $${it.s}$.`, `Demostrad que, para conjuntos cualesquiera $A, B, C ⊆ Ω$, $${it.s}$.`)), sol: () => it.ch().map(([m_, w]) => kS('', m_, w)).concat([kT(L('Conclusió', 'Conclusión'), md(L('Com que $x$ era qualsevol, els dos conjunts tenen els mateixos elements. ∎', 'Como $x$ era cualquiera, los dos conjuntos tienen los mismos elementos. ∎')), 'done')]), fx: () => bkFxProof(j), rub: RUB.proof() },
        { pts: 0.75, q: () => md(L(`Decidiu si és certa per a conjunts qualssevol i justifiqueu-ho: $${p.s}$.`, `Decidid si es cierta para conjuntos cualesquiera y justificadlo: $${p.s}$.`)), sol: () => p.ch().map(([m_, w]) => kS('', m_, w)).concat([kT(L('Conclusió', 'Conclusión'), md(p.ok ? L('<b>És certa</b>.', '<b>Es cierta</b>.') : L('<b>No és certa</b> en general: només hi ha la inclusió ⊆.', '<b>No es cierta</b> en general: solo hay la inclusión ⊆.')), p.ok ? 'done' : 'neg')]), fx: () => bkFxProdProof(p.ok), rub: RUB.decide() }] };
    }
    const A = bkIdTfGen(), B = bkPowProofGen();
    return { t: () => L('Conjunts', 'Conjuntos'), parts: [
      exPart(0.75, A, RUB.decide(), () => A.q() + P(L('Si és certa, demostreu-la; si no, doneu un contraexemple.', 'Si es cierta, demostradla; si no, dad un contraejemplo.'))),
      exPart(0.75, B, RUB.proof())] };
  }
  /* ---------- exercici 3: equivalència ---------- */
  function exEq(lv) {
    if (lv === 'cp') {
      const n = ri(3, 7), a = -ri(n + 1, 4 * n), r = Z.mod(a, n), q = (a - r) / n, same = Z.rnd(2) === 0;
      const def = () => same ? L(`$a$ i $b$ tenen el mateix residu en dividir entre ${n}`, `$a$ y $b$ tienen el mismo resto al dividir entre ${n}`) : L(`$a − b$ és múltiple de ${n}`, `$a − b$ es múltiplo de ${n}`);
      const cls = Z.range(0, n - 1).map(k => '[' + k + '] = \\{…, ' + [k - 2 * n, k - n, k, k + n, k + 2 * n].map(ng).join(', ') + ', …\\}');
      const pa = { pts: 1.25, q: () => md(L(`A $ℤ$ es defineix $a ℛ b$ si i només si ${def()}. Demostreu que $ℛ$ és una relació d'equivalència.`, `En $ℤ$ se define $a ℛ b$ si y solo si ${def()}. Demostrad que $ℛ$ es una relación de equivalencia.`)),
        sol: () => same ? [kF({ h: L('Notació', 'Notación'), m: 'a = ' + n + 'q + r(a),   0 ≤ r(a) ≤ ' + (n - 1) + ';   a ℛ b ⟺ r(a) = r(b)' }, [], FXDIV()), kF(kS(L('Reflexiva', 'Reflexiva'), 'r(a) = r(a) ⟹ a ℛ a'), ['Rref']), kF(kS(L('Simètrica', 'Simétrica'), 'r(a) = r(b) ⟹ r(b) = r(a) ⟹ b ℛ a'), ['Rsim']), kF(kS(L('Transitiva', 'Transitiva'), 'r(a) = r(b),  r(b) = r(c) ⟹ r(a) = r(c)'), ['Rtra']), kF(kT(L('Conclusió', 'Conclusión'), md(L('És reflexiva, simètrica i transitiva: és d\'equivalència. ∎', 'Es reflexiva, simétrica y transitiva: es de equivalencia. ∎')), 'done'), ['Req'])]
          : [kF(kS(L('Reflexiva', 'Reflexiva'), 'a − a = 0 = ' + n + ' · 0'), ['Rref']), kF(kS(L('Simètrica', 'Simétrica'), 'a − b = ' + n + 'k ⟹ b − a = ' + n + ' · (−k)', '−k ∈ ℤ'), ['Rsim']), kF(kS(L('Transitiva', 'Transitiva'), 'a − b = ' + n + 'k,  b − c = ' + n + 'm ⟹ a − c = ' + n + '(k + m)', L('dues lletres diferents, k i m', 'dos letras distintas, k y m')), ['Rtra']), kF(kT(L('Conclusió', 'Conclusión'), md(L('És reflexiva, simètrica i transitiva: és d\'equivalència. ∎', 'Es reflexiva, simétrica y transitiva: es de equivalencia. ∎')), 'done'), ['Req'])],
        fx: () => ({ on: ['Req', 'Rref', 'Rsim', 'Rtra'], plan: same ? L('La relació és «$r(a) = r(b)$»: les tres propietats surten de les de la igualtat. Escriu cada una amb la seva fila del §3.', 'La relación es «$r(a) = r(b)$»: las tres propiedades salen de las de la igualdad. Escribe cada una con su fila del §3.') : L('Escriu «múltiple de n» com una igualtat amb un enter ($a − b = nk$) i fes cada propietat amb la seva fila del §3.', 'Escribe «múltiplo de n» como una igualdad con un entero ($a − b = nk$) y haz cada propiedad con su fila del §3.'), compte: [], fora: same ? [FXDIV()] : [] }), rub: RUB.eq() };
      const pb = { pts: 0.75, q: () => md(L(`Doneu les classes d'equivalència, amb com a mínim 3 elements de cadascuna. A quina classe pertany $${ng(a)}$?`, `Dad las clases de equivalencia, con como mínimo 3 elementos de cada una. ¿A qué clase pertenece $${ng(a)}$?`)),
        sol: () => [kF(kS(L('Classes', 'Clases'), cls.join(';   '), L(`Una per a cada residu possible: ${n} classes, i formen una partició de ℤ.`, `Una para cada resto posible: ${n} clases, y forman una partición de ℤ.`)), [], null), kF(kS(L('Divisió entera', 'División entera'), ng(a) + ' = ' + n + ' · ' + pr(q) + ' + ' + r, L('el residu ha de ser ≥ 0: el quocient s\'arrodoneix cap avall', 'el resto tiene que ser ≥ 0: el cociente se redondea hacia abajo')), [], FXDIV()), kDone(ng(a) + ' ∈ [' + r + ']')],
        fx: () => ({ on: ['Req'], plan: L('Cada residu possible ($0, 1, …, n − 1$) dona una classe. Per trobar tres elements, suma i resta $n$.', 'Cada resto posible ($0, 1, …, n − 1$) da una clase. Para encontrar tres elementos, suma y resta $n$.'), compte: [FXCLS()], fora: [FXDIV()] }), rub: RUB.cls() };
      return { t: () => L('Relació d\'equivalència', 'Relación de equivalencia'), parts: [pa, pb] };
    }
    const kind = lv === 'hard' ? Z.pick(['mix', 'mix', 'sq']) : Z.pick(['frac', 'pair', 'real']), I = bkEqProofGen0(kind);
    const pk = { Reflexiva: 'Rref', Simètrica: 'Rsim', Simétrica: 'Rsim', Transitiva: 'Rtra' };
    withSol(I, st => st.map(s => pk[s.h] ? kF(Object.assign({}, s), [pk[s.h]]) : s)); I.fx = () => bkFxEq(kind);
    return { t: () => L('Relació d\'equivalència', 'Relación de equivalencia'), parts: [exPart(lv === 'hard' ? 1.75 : 1.5, I, RUB.eqcls())] };
  }
  /* ---------- exercici 4: ordre i Hasse ---------- */
  function exHasseStep(Pp) { const { svg, h } = hasseSVG(Pp, 'hasse', []); return { svg, h }; }
  function exOrd(lv) {
    if (lv === 'cp') {
      const sub = Z.rnd(3) === 0;
      let Pp, qa, steps, inc;
      if (sub) {
        const k = 3, lt = ['a', 'b', 'c'];
        Pp = { E: Z.range(0, 7), leq: (x, y) => (x & ~y) === 0, lab: m => m ? '{' + lt.filter((_, j) => (m >> j) & 1).join(',') + '}' : '∅', key: m => m };
        qa = () => L('Sigui $A = \\{a, b, c\\}$ i, a $𝒫(A)$, la relació $X ≼ Y ⟺ X ⊆ Y$.', 'Sea $A = \\{a, b, c\\}$ y, en $𝒫(A)$, la relación $X ≼ Y ⟺ X ⊆ Y$.');
        steps = () => [kF(kS(L('Reflexiva', 'Reflexiva'), 'X ⊆ X'), ['Rref']), kF(kS(L('Antisimètrica', 'Antisimétrica'), 'X ⊆ Y ∧ Y ⊆ X ⟹ X = Y', L('doble inclusió', 'doble inclusión')), ['Rasim']), kF(kS(L('Transitiva', 'Transitiva'), 'X ⊆ Y ∧ Y ⊆ W ⟹ X ⊆ W', L('si x ∈ X, x ∈ Y i per tant x ∈ W', 'si x ∈ X, x ∈ Y y por tanto x ∈ W')), ['Rtra']), kF(kT(L('Conclusió', 'Conclusión'), md(L('És d\'ordre. ∎', 'Es de orden. ∎')), 'done'), ['Rord'])];
      } else {
        const n = Z.pick([12, 18, 20, 30, 28, 45, 50, 8, 27, 16]), E = Z.divisors(n);
        Pp = { E, leq: (x, y) => y % x === 0, lab: String, key: x => x };
        qa = () => L(`Sigui $D(${n}) = ${sTx(E)}$, el conjunt dels divisors positius de ${n}, amb la relació $x ≼ y ⟺ x \\it{divideix} y$.`, `Sea $D(${n}) = ${sTx(E)}$, el conjunto de los divisores positivos de ${n}, con la relación $x ≼ y ⟺ x \\it{divide a} y$.`);
        steps = () => [kF(kS(L('Reflexiva', 'Reflexiva'), 'x = 1 · x ⟹ x | x'), ['Rref']), kF(kS(L('Antisimètrica', 'Antisimétrica'), 'x | y ∧ y | x ⟹ x ≤ y ∧ y ≤ x ⟹ x = y', L('per a naturals, si x | y aleshores x ≤ y', 'para naturales, si x | y entonces x ≤ y')), ['Rasim'], L('Que $x | y ⟹ x ≤ y$ a ℕ no hi és: $y = kx$ amb $k ≥ 1$.', 'Que $x | y ⟹ x ≤ y$ en ℕ no está: $y = kx$ con $k ≥ 1$.')), kF(kS(L('Transitiva', 'Transitiva'), 'y = kx,  z = my ⟹ z = (mk)x'), ['Rtra']), kF(kT(L('Conclusió', 'Conclusión'), md(L('És d\'ordre. ∎', 'Es de orden. ∎')), 'done'), ['Rord'])];
      }
      const H = () => exHasseStep(Pp);
      const pa = { pts: 0.75, q: () => md(qa() + ' ' + L('Demostreu que $≼$ és una relació d\'ordre.', 'Demostrad que $≼$ es una relación de orden.')), sol: steps, fx: () => bkFxOrd(sub ? 'sub' : 'div'), rub: RUB.ord() };
      const pb = { pts: 0.75, q: () => md(L('És un ordre parcial o total? Dibuixeu-ne el diagrama de Hasse.', '¿Es un orden parcial o total? Dibujad su diagrama de Hasse.')),
        sol: () => { const { svg, h } = H(); return [kT(L('Parcial o total?', '¿Parcial o total?'), md(h.total ? L('<b>Total</b>: tots els elements són comparables (formen una cadena).', '<b>Total</b>: todos los elementos son comparables (forman una cadena).') : L(`<b>Parcial</b>: $${Pp.lab(h.inc[0]).replace(/[{}]/g, m => '\\' + m)}$ i $${Pp.lab(h.inc[1]).replace(/[{}]/g, m => '\\' + m)}$ no són comparables.`, `<b>Parcial</b>: $${Pp.lab(h.inc[0]).replace(/[{}]/g, m => '\\' + m)}$ y $${Pp.lab(h.inc[1]).replace(/[{}]/g, m => '\\' + m)}$ no son comparables.`)), h.total ? 'done' : 'neg'), kT(L('Diagrama de Hasse', 'Diagrama de Hasse'), '<div style="max-width:420px">' + svg + '</div>' + P(L(`${h.cover.length} fletxes (cobertures). Sense bucles ni dreceres.`, `${h.cover.length} flechas (coberturas). Sin bucles ni atajos.`)), 'done')]; },
        fx: bkFxHasse, rub: RUB.hasse() };
      return { t: () => L('Relació d\'ordre', 'Relación de orden'), parts: [pa, pb] };
    }
    const pk = { Reflexiva: 'Rref', Antisimètrica: 'Rasim', Antisimétrica: 'Rasim', Transitiva: 'Rtra' };
    if (lv === 'hard') {
      const I = bkOrdProofGen0('prod'); withSol(I, st => st.map(s => pk[s.h] ? kF(Object.assign({}, s), [pk[s.h]]) : s)); I.fx = () => bkFxOrd('prod');
      const [p, q] = Z.pick([[3, 2], [2, 3], [2, 2], [3, 3]]), E = [];
      for (let x = 1; x <= p; x++) for (let y = 1; y <= q; y++) E.push(10 * x + y);
      const Pp = { E, leq: (u, v) => Math.floor(u / 10) <= Math.floor(v / 10) && u % 10 <= v % 10, lab: u => '(' + Math.floor(u / 10) + ',' + (u % 10) + ')', key: u => u };
      const setTx = (k) => '\\{' + Z.range(1, k).join(', ') + '\\}';
      const pb = { pts: 0.5, q: () => md(L(`Dibuixeu el diagrama de Hasse de la restricció a $${setTx(p)} × ${setTx(q)}$ i digueu quins són el mínim i el màxim.`, `Dibujad el diagrama de Hasse de la restricción a $${setTx(p)} × ${setTx(q)}$ y decid cuáles son el mínimo y el máximo.`)),
        sol: () => { const { svg, h } = exHasseStep(Pp); return [kT(L('Diagrama de Hasse', 'Diagrama de Hasse'), '<div style="max-width:420px">' + svg + '</div>' + P(L(`${h.cover.length} fletxes: una parella cobreix l'altra quan una coordenada puja 1 i l'altra queda igual.`, `${h.cover.length} flechas: un par cubre al otro cuando una coordenada sube 1 y la otra queda igual.`))), kDone(L('mínim (1, 1), màxim (' + p + ', ' + q + ')', 'mínimo (1, 1), máximo (' + p + ', ' + q + ')'))]; },
        fx: () => ({ on: ['Rord'], plan: L('Per l\'apartat a) ja saps que és d\'ordre. Al Hasse, $(a, b) → (c, d)$ quan una coordenada puja exactament 1 i l\'altra queda igual: entremig no hi cap res. El mínim és la parella amb les dues coordenades més petites i el màxim, la de les més grans.', 'Por el apartado a) ya sabes que es de orden. En el Hasse, $(a, b) → (c, d)$ cuando una coordenada sube exactamente 1 y la otra queda igual: en medio no cabe nada. El mínimo es el par con las dos coordenadas más pequeñas y el máximo, el de las más grandes.'), compte: [FXORDDEF()], fora: [] }),
        rub: [[0.6, L('Diagrama de Hasse correcte: només cobertures, sense bucles ni dreceres.', 'Diagrama de Hasse correcto: solo coberturas, sin bucles ni atajos.')], [0.4, L('Mínim i màxim, justificats.', 'Mínimo y máximo, justificados.')]] };
      return { t: () => L('Relació d\'ordre', 'Relación de orden'), parts: [exPart(0.75, I, RUB.ord()), pb] };
    }
    const I = bkOrdProofGen0('div'); withSol(I, st => st.map(s => pk[s.h] ? kF(Object.assign({}, s), [pk[s.h]]) : s)); I.fx = () => bkFxOrd('div');
    const B = bkBuildGen();
    return { t: () => L('Relacions', 'Relaciones'), parts: [exPart(0.75, I, RUB.ord()), exPart(0.5, B, RUB.build())] };
  }
  /* ---------- exercici 5: complexos ---------- */
  function exCx(lv) {
    if (lv === 'cp') {
      const n = Z.pick([3, 4, 4, 6]), m = n === 6 ? Z.pick([1, 2]) : Z.pick([1, 2, 3]), neg = Z.rnd(2) === 1, dw = neg ? 180 : 0, R = rootsData(m, n, dw), c = m ** n;
      const eq = 'x^{' + n + '} ' + (neg ? '+ ' : '− ') + c + ' = 0';
      const sets = () => R.list.map(r => { const v = r.bx || r.pol; if (r.ang % 360 === 0) return '$' + v + ' ∈ ℕ$'; if (r.ang % 180 === 0) return '$' + v + ' ∈ ℤ$ ' + L('(no natural)', '(no natural)'); return '$' + v + ' ∈ ℂ ∖ ℝ$'; }).join('; ');
      const I = { q: () => md(L(`Trobeu totes les solucions de $${eq}$. Indiqueu a quins conjunts numèrics pertanyen i escriviu les que no siguin reals en forma binòmica i en forma polar.`, `Encontrad todas las soluciones de $${eq}$. Indicad a qué conjuntos numéricos pertenecen y escribid las que no sean reales en forma binómica y en forma polar.`)),
        sol: () => tagWith(rootSteps(R, m, n, dw), ARTAG).concat([kF(kT(L('Conjunts', 'Conjuntos'), md(sets() + '. ' + L('Recorda: $ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ ⊆ ℂ$, així que cada real també és de tots els conjunts més grans.', 'Recuerda: $ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ ⊆ ℂ$, así que cada real también está en todos los conjuntos más grandes.')), 'done'), ['NUM'])]),
        fx: () => ARFX[1][0]() };
      return { t: () => L('Nombres complexos', 'Números complejos'), parts: [exPart(1.5, I, RUB.roots())] };
    }
    if (lv === 'hard') {
      const A = withSol(bkRootCxGen(true), st => tagWith(st, ARTAG)); A.fx = () => ARFX[2][1]();
      const B = withSol(bkComboGen(), st => tagWith(st, CXTAG['3-0'])); B.fx = () => CXFX[3][0](B);
      return { t: () => L('Nombres complexos', 'Números complejos'), parts: [exPart(1, A, RUB.roots()), exPart(0.75, B, RUB.calc())] };
    }
    let A;
    if (Z.rnd(2) === 0) { do { A = bkCxSpecialGen(); } while (A.lin); A.fx = () => CXFX[3][2](A); }
    else { A = withSol(bkZConjGen(), st => tagWith(st, ARTAG)); A.fx = () => ARFX[3][1](); }
    const B = withSol(bkFactorGen(), st => tagWith(st, ARTAG)); B.fx = () => ARFX[3][0]();
    return { t: () => L('Nombres complexos', 'Números complejos'), parts: [exPart(1, A, RUB.roots()), exPart(0.75, B, RUB.calc())] };
  }
  /* ---------- exercici 6: inducció ---------- */
  function exInd(lv) {
    let I;
    if (lv === 'cp') {
      const F = Z.pick(bkSumF().filter(f => f.id !== 'fact'));
      I = { q: () => md(L(`Demostreu per inducció que, per a tot $n ∈ ℕ$, $${F.lhs('n')} = ${F.rhs('n')}$.`, `Demostrad por inducción que, para todo $n ∈ ℕ$, $${F.lhs('n')} = ${F.rhs('n')}$.`)), sol: () => indProof(F), fx: () => fxInd() };
    } else if (lv === 'hard') { I = bkIndDivHardGen(); const j = BKDIV.indexOf(I.it); I.fx = () => INDFX[3][0](j); }
    else if (Z.rnd(3) < 2) { I = bkIndIneqGen(); const j = BKINEQ.indexOf(I.it); I.fx = () => INDFX[3][1](j); }
    else { I = bkIndRecGen(); I.fx = () => INDFX[3][2](); }
    withSol(I, st => Array.isArray(st) ? indTag(st) : st);
    return { t: () => L('Inducció', 'Inducción'), parts: [exPart(lv === 'cp' ? 1.5 : 1.25, I, RUB.ind())] };
  }
  /* ---------- exercici 7: reals (només difícil i extrem) ---------- */
  function exReals(lv) {
    if (lv === 'hard') {
      const A = bkAbsSumGen(), B = bkSupGen();
      return { t: () => L('Nombres reals', 'Números reales'), parts: [exPart(0.75, A, RUB.calc(), () => A.q() + P(L('Escriviu la solució com a interval o unió d\'intervals.', 'Escribid la solución como intervalo o unión de intervalos.'))), exPart(0.75, B, RUB.sup(), () => B.q() + P(L('Justifiqueu-ho.', 'Justificadlo.')))] };
    }
    const A = Z.rnd(2) === 0 ? bkAbsSqGen() : bkAbsProofGen(), B = Z.rnd(2) === 0 ? bkSupProofGen() : bkIrrGen();
    return { t: () => L('Nombres reals', 'Números reales'), parts: [exPart(0.75, A, A.a && A.a.k === 'self' ? RUB.proof() : RUB.calc()), exPart(0.75, B, RUB.proof())] };
  }
  function exBuild(mode) {
    const ex = [exSets(mode), { t: () => L('Conjunts: implicació', 'Conjuntos: implicación'), parts: [exPart(mode === 'cp' ? 1.5 : mode === 'hard' ? 1 : 1.25, exImp(mode), RUB.proof())] }, exEq(mode), exOrd(mode), exCx(mode), exInd(mode)];
    if (mode !== 'cp') ex.push(exReals(mode));
    return ex;
  }
  return { fmtP, EXM, RUB, exPart, tagWith, withSol, EXIMP, exImp, exSets, exEq, exHasseStep, exOrd, exCx, exInd, exReals, exBuild };
}
