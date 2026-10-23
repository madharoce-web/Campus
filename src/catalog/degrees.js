/**
 * Catàleg de graus: què hi ha a Aula Mada i què arribarà aviat. Les assignatures d'un
 * semestre són claus de CARDS (src/courses/registry.js); cada assignatura nova s'hi afegeix
 * aquí i al registre. Textos en [ca, es, en].
 *
 * status: 'live' (disponible) | 'soon' (properament)
 */
import { CARD_BY_KEY } from '../courses/registry.js';

export const DEGREES = [
  {
    k: 'informatica', status: 'live', icon: 'code', color: '#2f6f5e', bg: '#e3f2ec',
    name: ['Enginyeria Informàtica', 'Ingeniería Informática', 'Computer Engineering'],
    short: ['Informàtica', 'Informática', 'Computer Science'],
    desc: [
      'Matemàtiques, lògica, programació, computadors i economia: tot el primer semestre, amb laboratoris interactius i un compilador de C++ al navegador.',
      'Matemáticas, lógica, programación, computadores y economía: todo el primer semestre, con laboratorios interactivos y un compilador de C++ en el navegador.',
      'Maths, logic, programming, computers and economics: the whole first semester, with interactive labs and a C++ compiler in the browser.',
    ],
    terms: [
      { k: 's1', status: 'live', name: ['1r curs · 1r semestre', '1.º curso · 1.er semestre', 'Year 1 · Semester 1'],
        subjects: ['mates', 'logica', 'prog', 'comp', 'eco'] },
      { k: 's2', status: 'soon', name: ['1r curs · 2n semestre', '1.º curso · 2.º semestre', 'Year 1 · Semester 2'] },
      { k: 'y2', status: 'soon', name: ['2n, 3r i 4t curs', '2.º, 3.º y 4.º curso', 'Years 2, 3 and 4'] },
    ],
  },
  {
    k: 'ade', status: 'soon', icon: 'chart', color: '#9a6a06', bg: '#fdf2d6',
    name: ["Administració i Direcció d'Empreses", 'Administración y Dirección de Empresas', 'Business Administration'],
    short: ['ADE', 'ADE', 'Business'],
    desc: [
      'Comptabilitat, economia, estadística, finances i màrqueting, amb casos pràctics i exercicis numèrics resolts pas a pas.',
      'Contabilidad, economía, estadística, finanzas y marketing, con casos prácticos y ejercicios numéricos resueltos paso a paso.',
      'Accounting, economics, statistics, finance and marketing, with case studies and numerical exercises solved step by step.',
    ],
    terms: [],
  },
  {
    k: 'infermeria', status: 'soon', icon: 'heart', color: '#b4365a', bg: '#fbe4ea',
    name: ['Infermeria', 'Enfermería', 'Nursing'],
    short: ['Infermeria', 'Enfermería', 'Nursing'],
    desc: [
      'Anatomia, fisiologia, farmacologia i cures, amb esquemes clars, preguntes tipus test i càlculs de dosis.',
      'Anatomía, fisiología, farmacología y cuidados, con esquemas claros, preguntas tipo test y cálculo de dosis.',
      'Anatomy, physiology, pharmacology and care, with clear diagrams, multiple-choice questions and dosage calculations.',
    ],
    terms: [],
  },
  {
    k: 'magisteri', status: 'soon', icon: 'book', color: '#5b4fd1', bg: '#ecebff',
    name: ['Magisteri', 'Magisterio', 'Teacher Education'],
    short: ['Magisteri', 'Magisterio', 'Teaching'],
    desc: [
      'Psicologia de l\'educació, didàctiques i organització escolar, amb resums, mapes conceptuals i preguntes d\'examen.',
      'Psicología de la educación, didácticas y organización escolar, con resúmenes, mapas conceptuales y preguntas de examen.',
      'Educational psychology, teaching methods and school organisation, with summaries, concept maps and exam questions.',
    ],
    terms: [],
  },
];

export const DEGREE_BY_KEY = Object.fromEntries(DEGREES.map((d) => [d.k, d]));

/** Targetes (CARDS) de les assignatures disponibles d'un grau. */
export function subjectsOf(degree) {
  return degree.terms.flatMap((t) => (t.subjects || []).map((k) => CARD_BY_KEY[k]).filter(Boolean));
}
