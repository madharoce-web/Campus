
/**
 * Pestanyes i capçaleres de les pàgines de teoria.
 * Codi original; l'idioma i les dependències arriben pel contenidor $ (un per idioma).
 */
export function makePages($) {
  const { L } = $;
  /* ============================================================
     PESTANYES, ÍNDEX, PÀGINES DE TEORIA I ARRENCADA
     ============================================================ */
  const TABS = ['inici', 'conj', 'rel', 'nomb', 'cx', 'mat', 'det', 'exer', 'banc', 'exam', 'prac'];
  const TABN = () => ({ inici: L('Inici', 'Inicio'), conj: L('T1 · Conjunts', 'T1 · Conjuntos'), rel: L('T1 · Relacions', 'T1 · Relaciones'), nomb: L('T2 · Nombres', 'T2 · Números'), cx: L('T2 · Complexos', 'T2 · Complejos'), mat: L('T3 · Matrius', 'T3 · Matrices'), det: L('T3 · Determinants', 'T3 · Determinantes'), exer: L('Exercicis', 'Ejercicios'), banc: L('Banc d\'exercicis', 'Banco de ejercicios'), exam: L('Simulacre d\'examen', 'Simulacro de examen'), prac: L('Pràctica', 'Práctica') });
  const PAGE = {
    conj: () => [L('Tema 1 · Teoria de conjunts', 'Tema 1 · Teoría de conjuntos'), L('Conjunts i operacions', 'Conjuntos y operaciones'), L('Seccions 1–11 dels apunts. Les definicions són les de classe; els blocs «Per entendre-ho» expliquen el mateix amb més detall, i els laboratoris et deixen provar-ho.', 'Secciones 1–11 de los apuntes. Las definiciones son las de clase; los bloques «Para entenderlo» explican lo mismo con más detalle, y los laboratorios te dejan probarlo.')],
    rel: () => [L('Tema 1 · Teoria de conjunts', 'Tema 1 · Teoría de conjuntos'), L('Relacions binàries', 'Relaciones binarias'), L('Seccions 12–14 dels apunts: propietats, equivalència, ordre i diagrames de Hasse.', 'Secciones 12–14 de los apuntes: propiedades, equivalencia, orden y diagramas de Hasse.')],
    nomb: () => [L('Tema 2 · Conjunt de nombres', 'Tema 2 · Conjunto de números'), L('Nombres reals i inducció', 'Números reales e inducción'), L('Axiomes, valor absolut, principi d\'inducció, construcció de ℤ i ℚ, axioma del suprem, intervals i entorns.', 'Axiomas, valor absoluto, principio de inducción, construcción de ℤ y ℚ, axioma del supremo, intervalos y entornos.')],
    cx: () => [L('Tema 2 · Conjunt de nombres', 'Tema 2 · Conjunto de números'), L('Nombres complexos', 'Números complejos'), L('Operacions, mòdul i argument amb la fórmula del material, forma polar, arrels n-èssimes i factorització de polinomis.', 'Operaciones, módulo y argumento con la fórmula del material, forma polar, raíces n-ésimas y factorización de polinomios.')],
    mat: () => [L('Tema 3 · Matrius, determinants i sistemes lineals', 'Tema 3 · Matrices, determinantes y sistemas lineales'), L('Matrius i operacions', 'Matrices y operaciones'), L('Sessió del 15 d\'octubre. Definicions, suma i producte per un escalar, producte de matrius, transposada, potències, traça i tipus de matrius quadrades.', 'Sesión del 15 de octubre. Definiciones, suma y producto por un escalar, producto de matrices, traspuesta, potencias, traza y tipos de matrices cuadradas.')],
    det: () => [L('Tema 3 · Matrius, determinants i sistemes lineals', 'Tema 3 · Matrices, determinantes y sistemas lineales'), L('Determinants, inversa i rang', 'Determinantes, inversa y rango'), L('Ordre 2 i 3 (Sarrus), menors i adjunts, desenvolupament per files o columnes, propietats, matriu adjunta, inversa i rang. Al final, l\'avançament de sistemes i les errates del material.', 'Orden 2 y 3 (Sarrus), menores y adjuntos, desarrollo por filas o columnas, propiedades, matriz adjunta, inversa y rango. Al final, el adelanto de sistemas y las erratas del material.')]
  };
  return { TABS, TABN, PAGE };
}
