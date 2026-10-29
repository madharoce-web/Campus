/**
 * Grafs · repàs. Les qüestions de repàs obertes (es conserven els ids) i la font del temari.
 */
import { L3, p, boxi, check } from '../../graphs/lesson.js';
import { REPAS } from '../../graphs/fixed.js';

export default {
  intro: [
    p('Preguntes curtes per repassar tots els temes de grafs abans del control. Respon-les de memòria, en dues o tres línies, i després compara amb la solució.',
      'Preguntas cortas para repasar todos los temas de grafos antes del control. Respóndelas de memoria, en dos o tres líneas, y después compara con la solución.',
      'Short questions to review every graph unit before the test. Answer them from memory in two or three lines, then compare with the solution.'),
  ],
  sections: {
    '18-questions-de-repas': REPAS.map((ex) => check(ex)),
    font: [
      p('Temari basat en *Grafs Part 1 i 2* del Seminari Lògica i grafs (BInfo-1), Bàtxelor en Informàtica, Universitat d\'Andorra: teoria de grafs, teoria d\'arbres i planificació de projectes. La redacció, les figures, els laboratoris i els exercicis són propis d\'Aula Mada.',
        'Temario basado en *Grafs Part 1 i 2* del Seminario Lógica y grafos (BInfo-1), Bachelor en Informática, Universitat d\'Andorra: teoría de grafos, teoría de árboles y planificación de proyectos. La redacción, las figuras, los laboratorios y los ejercicios son propios de Aula Mada.',
        'Syllabus based on *Grafs Part 1 i 2* from the Logic and Graphs seminar (BInfo-1), Bachelor in Computer Science, Universitat d\'Andorra: graph theory, tree theory and project planning. The text, figures, labs and exercises are Aula Mada\'s own.'),
      boxi('note', L3('Per saber-ne més', 'Para saber más', 'Further reading'), [
        L3('Qualsevol manual de matemàtica discreta (capítols de grafs i arbres) segueix el mateix ordre que aquest temari.', 'Cualquier manual de matemática discreta (capítulos de grafos y árboles) sigue el mismo orden que este temario.', 'Any discrete mathematics textbook (graph and tree chapters) follows the same order as this syllabus.'),
        L3('Els laboratoris de cada tema permeten generar grafs nous i comprovar els resultats.', 'Los laboratorios de cada tema permiten generar grafos nuevos y comprobar los resultados.', 'Each unit\'s labs let you generate new graphs and check your results.'),
      ]),
    ],
  },
  examEnd: [{ ref: 'gr4-tipus', seed: 21 }, { ref: 'gr6-cota', seed: 2 }, { ref: 'gr8-arbres', seed: 8 }, { ref: 'gr5-dijkstra', seed: 20 }],
};
