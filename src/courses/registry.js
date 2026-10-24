/**
 * Registre de cursos: metadades compartides per la portada, la barra, les capçaleres
 * i les rutes. Cada curs viu a src/courses/<k>/ i es carrega sota demanda.
 */

/** Pàgines de curs (una ruta per pàgina). */
export const COURSES = [
  {
    k: 'mates', path: '/mates', degree: 'informatica', term: 's1', tier: 'free',
    load: () => import('./mates/index.jsx'),
    title: ['Teoria Mates CP1', 'Teoría Mates CP1', 'Maths Theory CP1'],
    sub: ['Matemàtica Computacional', 'Matemática Computacional', 'Computational Mathematics'],
    color: '#1b6fb5', bg: '#e3f0ff', icon: 'mates',
  },
  {
    k: 'logica', path: '/logica', degree: 'informatica', term: 's1', tier: 'free',
    load: () => import('./logica/index.jsx'),
    title: ['Lògica i grafs', 'Lógica y grafos', 'Logic and Graphs'],
    sub: ['Seminari Lògica i grafs', 'Seminario Lógica y grafos', 'Logic and Graphs Seminar'],
    color: '#0f7f80', bg: '#dcf7f7', icon: 'logica',
  },
  {
    k: 'eco', path: '/economia', degree: 'informatica', term: 's1', tier: 'free',
    load: () => import('./eco/index.jsx'), formulas: () => import('./eco/kit/formulas.js'),
    title: ["Principis d'economia", 'Principios de economía', 'Principles of Economics'],
    sub: ["Principis d'economia i empresa", 'Principios de economía y empresa', 'Principles of Economics and Business'],
    color: '#9a6a06', bg: '#fdf2d6', icon: 'eco',
  },
  {
    k: 'comp', path: '/computadors', degree: 'informatica', term: 's1', tier: 'free',
    load: () => import('./comp/index.jsx'), formulas: () => import('./comp/kit/formulas.js'),
    title: ['Computadors CP1', 'Computadores CP1', 'Computers CP1'],
    sub: ['Iniciació als Computadors', 'Iniciación a los Computadores', 'Introduction to Computers'],
    color: '#5b4fd1', bg: '#ecebff', icon: 'comp',
  },
  {
    k: 'prog', path: '/programacio', degree: 'informatica', term: 's1', tier: 'free',
    load: () => import('./prog/index.jsx'),
    title: ['Iniciació a la Programació', 'Iniciación a la Programación', 'Introduction to Programming'],
    sub: ['Programació · teoria, laboratoris i C++', 'Programación · teoría, laboratorios y C++', 'Programming · theory, labs and C++'],
    color: '#00806a', bg: '#d9f5ec', icon: 'pseudo',
  },
  {
    k: 'pseudo', path: '/pseudocodi', degree: 'informatica', term: 's1', tier: 'free',
    load: () => import('./pseudo/index.jsx'), parent: 'prog',
    title: ['Pseudocodi CP1', 'Pseudocódigo CP1', 'Pseudocode CP1'],
    sub: ['Iniciació a la Programació', 'Iniciación a la Programación', 'Introduction to Programming'],
    color: '#00806a', bg: '#d9f5ec', icon: 'pseudo',
  },
  {
    k: 'cpp', path: '/cpp', degree: 'informatica', term: 's1', tier: 'free',
    load: () => import('./cpp/index.jsx'), parent: 'prog',
    title: ['C++ a contrarellotge', 'C++ a contrarreloj', 'C++ against the clock'],
    sub: ['Iniciació a la Programació', 'Iniciación a la Programación', 'Introduction to Programming'],
    color: '#00806a', bg: '#d9f5ec', icon: 'pseudo',
  },
];
export const COURSE_BY_KEY = Object.fromEntries(COURSES.map((c) => [c.k, c]));

/** Adreces de les pàgines de la versió d'un sol fitxer (per redirigir enllaços antics). */
export const LEGACY_PAGES = {
  'index.html': '/cursos',
  'mates.html': '/mates',
  'logica.html': '/logica',
  'economia.html': '/economia',
  'computadors.html': '/computadors',
  'pseudocodi.html': '/pseudocodi',
  'programacio.html': '/programacio',
  'cpp.html': '/cpp',
};

/**
 * Targetes de la portada (els cinc cursos del semestre). «prog» agrupa també el
 * pseudocodi i el C++ a contrarellotge (also), que compten per al darrer accés.
 * Textos en [ca, es, en]. secs: [secció, ca, es, en] → enllaç a /<curs>/<secció>.
 */
export const CARDS = [
  { k: 'mates', to: '/mates', color: '#74b9ff', pat: 'plus',
    cat: ['Matemàtica Computacional', 'Matemática Computacional', 'Computational Mathematics'],
    name: ['Teoria Mates CP1', 'Teoría Mates CP1', 'Maths Theory CP1'],
    desc: ["Conjunts i relacions, nombres reals i complexos, inducció, matrius i determinants, amb laboratoris interactius, exercicis resolts, banc d'exercicis i simulacre d'examen.",
      'Conjuntos y relaciones, números reales y complejos, inducción, matrices y determinantes, con laboratorios interactivos, ejercicios resueltos, banco de ejercicios y simulacro de examen.',
      'Sets and relations, real and complex numbers, induction, matrices and determinants, with interactive labs, solved exercises, an exercise bank and a mock exam.'],
    secs: [['conj', 'T1 · Conjunts', 'T1 · Conjuntos', 'T1 · Sets'], ['rel', 'T1 · Relacions', 'T1 · Relaciones', 'T1 · Relations'], ['nomb', 'T2 · Nombres', 'T2 · Números', 'T2 · Numbers'], ['cx', 'T2 · Complexos', 'T2 · Complejos', 'T2 · Complex numbers'],
      ['mat', 'T3 · Matrius', 'T3 · Matrices', 'T3 · Matrices'], ['det', 'T3 · Determinants', 'T3 · Determinantes', 'T3 · Determinants'], ['exer', 'Exercicis', 'Ejercicios', 'Exercises'], ['banc', "Banc d'exercicis", 'Banco de ejercicios', 'Exercise bank'],
      ['exam', "Simulacre d'examen", 'Simulacro de examen', 'Mock exam'], ['prac', 'Pràctica', 'Práctica', 'Practice']] },
  { k: 'logica', to: '/logica', color: '#81ecec', pat: 'rings',
    cat: ['Seminari Lògica i grafs', 'Seminario Lógica y grafos', 'Logic and Graphs Seminar'],
    name: ['Lògica i grafs', 'Lógica y grafos', 'Logic and Graphs'],
    desc: ["Lògica de proposicions i de predicats en deu unitats, amb exemples, diagrames, calculadores i 46 exercicis tipus control resolts pas a pas, a més d'un simulacre amb rellotge. Teoria de grafs des dels conceptes bàsics fins a camins, acoloriment i arbres.",
      'Lógica de proposiciones y de predicados en diez unidades, con ejemplos, diagramas, calculadoras y 46 ejercicios tipo control resueltos paso a paso, además de un simulacro con reloj. Teoría de grafos desde los conceptos básicos hasta caminos, coloreado y árboles.',
      'Propositional and predicate logic in ten units, with examples, diagrams, calculators and 46 test-style exercises solved step by step, plus a timed mock exam. Graph theory from the basics to paths, colouring and trees.'],
    secs: [['logica', 'Lògica', 'Lógica', 'Logic'], ['xr', 'Exercicis de lògica', 'Ejercicios de lógica', 'Logic exercises'], ['sim', 'Simulacre de lògica', 'Simulacro de lógica', 'Logic mock exam'], ['grafs', 'Grafs', 'Grafos', 'Graphs']] },
  { k: 'eco', to: '/economia', color: '#fdcb6e', pat: 'hex',
    cat: ["Principis d'economia i empresa", 'Principios de economía y empresa', 'Principles of Economics and Business'],
    name: ["Principis d'economia", 'Principios de economía', 'Principles of Economics'],
    desc: ['Conceptes bàsics, demanda, oferta i mercat, i magnituds agregades, amb gràfics interactius i una pràctica de 43 exercicis per nivells.',
      'Conceptos básicos, demanda, oferta y mercado, y magnitudes agregadas, con gráficos interactivos y una práctica de 43 ejercicios por niveles.',
      'Basic concepts, supply, demand and markets, and aggregate measures, with interactive charts and a 43-exercise practice set by level.'],
    secs: [['t1', 'Tema 1 · Conceptes bàsics', 'Tema 1 · Conceptos básicos', 'Unit 1 · Basic concepts'], ['t2', 'Tema 2 · Demanda i oferta', 'Tema 2 · Demanda y oferta', 'Unit 2 · Supply and demand'], ['t3', 'Tema 3 · Magnituds agregades', 'Tema 3 · Magnitudes agregadas', 'Unit 3 · Aggregate measures'], ['prac', 'Pràctica', 'Práctica', 'Practice']] },
  { k: 'comp', to: '/computadors', color: '#a29bfe', pat: 'squares',
    cat: ['Iniciació als Computadors', 'Iniciación a los Computadores', 'Introduction to Computers'],
    name: ['Computadors CP1', 'Computadores CP1', 'Computers CP1'],
    desc: ['Introducció als computadors, representació de la informació i multimèdia, amb laboratoris de bits, exercicis resolts, pràctica i simulacre.',
      'Introducción a los computadores, representación de la información y multimedia, con laboratorios de bits, ejercicios resueltos, práctica y simulacro.',
      'Introduction to computers, data representation and multimedia, with bit labs, solved exercises, practice and a mock exam.'],
    secs: [['t1', 'T1 · Introducció', 'T1 · Introducción', 'T1 · Introduction'], ['t21', 'T2.1 · Representació', 'T2.1 · Representación', 'T2.1 · Representation'], ['t22', 'T2.2 · Multimèdia', 'T2.2 · Multimedia', 'T2.2 · Multimedia'], ['exer', 'Exercicis', 'Ejercicios', 'Exercises'], ['prac', 'Pràctica', 'Práctica', 'Practice'], ['exam', 'Simulacre', 'Simulacro', 'Mock exam']] },
  { k: 'prog', to: '/programacio', color: '#00b894', pat: 'diamonds', also: ['pseudo', 'cpp'],
    cat: ['Programació · teoria, laboratoris i C++', 'Programación · teoría, laboratorios y C++', 'Programming · theory, labs and C++'],
    name: ['Iniciació a la Programació', 'Iniciación a la Programación', 'Introduction to Programming'],
    desc: ["Teoria dels temes 1 a 2.3 i pràctiques setmanals de C++ explicades pas a pas, amb exemples que s'executen i es tracen, diagrames i qüestionaris. Inclou el Pseudocodi CP1 i el C++ a contrarellotge, amb compilador, exercicis per setmana i pati de proves.",
      'Teoría de los temas 1 a 2.3 y prácticas semanales de C++ explicadas paso a paso, con ejemplos que se ejecutan y se trazan, diagramas y cuestionarios. Incluye el Pseudocódigo CP1 y el C++ a contrarreloj, con compilador, ejercicios por semana y patio de pruebas.',
      'Theory for units 1 to 2.3 and weekly C++ labs explained step by step, with runnable and traceable examples, diagrams and quizzes. Includes Pseudocode CP1 and C++ against the clock, with a compiler, weekly exercises and a playground.'],
    secs: [['t1', 'T1 · Evolució', 'T1 · Evolución', 'T1 · Evolution'], ['t21', 'T2.1 · Algorismes', 'T2.1 · Algoritmos', 'T2.1 · Algorithms'], ['t22', 'T2.2 · Dades i control', 'T2.2 · Datos y control', 'T2.2 · Data and control'], ['t23', 'T2.3 · Seqüències', 'T2.3 · Secuencias', 'T2.3 · Sequences'],
      ['s3', 'Lab · Condicionals', 'Lab · Condicionales', 'Lab · Conditionals'], ['s4', 'Lab · Bucles', 'Lab · Bucles', 'Lab · Loops'], ['s6', 'Lab · Disseny descendent', 'Lab · Diseño descendente', 'Lab · Top-down design'], ['s7', 'Lab · Funcions', 'Lab · Funciones', 'Lab · Functions'], ['progres', 'Progrés', 'Progreso', 'Progress']] },
];
export const CARD_BY_KEY = Object.fromEntries(CARDS.map((c) => [c.k, c]));

/**
 * Activitats d'avaluació i pràctica (calaix de blocs de la portada).
 * [curs de la targeta, ruta, tipus, ca, es, en]
 */
export const ACTIVITIES = [
  ['mates', '/mates/exam', 'quiz', "Simulacre d'examen", 'Simulacro de examen', 'Mock exam'],
  ['mates', '/mates/banc', 'assign', "Banc d'exercicis", 'Banco de ejercicios', 'Exercise bank'],
  ['comp', '/computadors/exam', 'quiz', 'Simulacre del CP1', 'Simulacro del CP1', 'CP1 mock exam'],
  ['comp', '/computadors/prac', 'assign', 'Pràctica amb nivells', 'Práctica con niveles', 'Practice by levels'],
  ['prog', '/cpp', 'code', 'C++ a contrarellotge', 'C++ a contrarreloj', 'C++ against the clock'],
  ['prog', '/cpp/exam', 'quiz', 'Simulacre del CP1 de C++', 'Simulacro del CP1 de C++', 'C++ CP1 mock exam'],
  ['prog', '/pseudocodi/examen', 'quiz', 'Examen de pseudocodi', 'Examen de pseudocódigo', 'Pseudocode exam'],
  ['prog', '/pseudocodi/escriu', 'code', 'Escriu i prova el pseudocodi', 'Escribe y prueba el pseudocódigo', 'Write and test pseudocode'],
  ['eco', '/economia/prac', 'assign', 'Pràctica: 43 exercicis', 'Práctica: 43 ejercicios', 'Practice: 43 exercises'],
  ['logica', '/logica/sim', 'quiz', 'Simulacre de lògica (CP1 i CP2)', 'Simulacro de lógica (CP1 y CP2)', 'Logic mock exam (CP1 and CP2)'],
  ['logica', '/logica/xf', 'assign', 'Exercicis de resolució en CP1', 'Ejercicios de resolución en CP1', 'Resolution exercises in CP1'],
  ['logica', '/logica/grafs', 'page', 'Teoria de grafs', 'Teoría de grafos', 'Graph theory'],
];
