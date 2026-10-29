/**
 * Grafs · G9. Planificació de projectes: tasques, anterioritats i nivells; mètode C.P.M. (dates early i
 * last); marges i camí crític, amb el diagrama de Gantt.
 */
import { D, X, L3, p, h, box, boxi, table, lab, check, ref, example, fig, steps, hr } from '../../graphs/lesson.js';
import { cpm } from '../../graphs/model.js';
import { PROJECTE } from '../../graphs/presets.js';
import { projectGraph, ganttSvg } from '../../graphs/project.js';
import { EX } from '../../graphs/fixed.js';

const T = PROJECTE, r = cpm(T);
const PG = projectGraph(T, r);
const dur = Object.fromEntries(T.map((t) => [t.id, t.d]));
const pre = (id) => T.find((t) => t.id === id).pre;
const succ = (id) => r.succ.get(id);
const taskTable = (cols) => table(
  [L3('Tasca', 'Tarea', 'Task'), L3('Durada', 'Duración', 'Duration'), L3('Immediatament anteriors', 'Inmediatamente anteriores', 'Immediately before'), ...cols.map((c) => c[0])],
  T.map((t) => [`**${t.id}**`, String(t.d), t.pre.join(', ') || '—', ...cols.map((c) => String(c[1](t.id)))]),
);
const earlyLine = (id) => (pre(id).length ? `T_${id} = max(${pre(id).map((x) => `${r.early[x]} + ${dur[x]}`).join(', ')}) = ${r.early[id]}` : `T_${id} = 0`);
const lateLine = (id) => (succ(id).length ? `T'_${id} = min(${succ(id).map((y) => `${r.late[y]} − ${dur[id]}`).join(', ')}) = ${r.late[id]}` : `T'_${id} = ${r.duration} − ${dur[id]} = ${r.late[id]}`);
const byLevel = [...T].sort((a, b) => r.level[a.id] - r.level[b.id]).map((t) => t.id);

const s1 = [
  table([L3('Concepte', 'Concepto', 'Concept'), L3('Definició', 'Definición', 'Definition')], [
    [L3('**Projecte**', '**Proyecto**', '**Project**'), L3('Conjunt de tasques que s\'han de fer seguint un cert ordre', 'Conjunto de tareas que hay que hacer siguiendo un cierto orden', 'A set of tasks to be done in a certain order')],
    [L3('**Tasca**', '**Tarea**', '**Task**'), L3('Activitat que consumeix **temps** (la durada) i **recursos**', 'Actividad que consume **tiempo** (la duración) y **recursos**', 'An activity using **time** (its duration) and **resources**')],
    [L3('**Etapa**', '**Etapa**', '**Milestone**'), L3('Data que marca l\'inici o el final d\'una o més tasques; no consumeix temps ni recursos', 'Fecha que marca el inicio o el final de una o más tareas; no consume tiempo ni recursos', 'A date marking the start or end of tasks; it uses no time or resources')],
    [L3('**Planificar**', '**Planificar**', '**Planning**'), L3('Fer un calendari que respecti les restriccions i doni la durada mínima', 'Hacer un calendario que respete las restricciones y dé la duración mínima', 'Building a schedule that respects the constraints and gives the minimum duration')],
  ]),
  boxi('def', L3('restriccions i tipus de tasques', 'restricciones y tipos de tareas', 'constraints and kinds of tasks'), [
    L3('**De successió:** una tasca no pot començar fins que n\'acaba una altra. **De localització temporal:** una tasca ha de començar o acabar en una data fixada.', '**De sucesión:** una tarea no puede empezar hasta que acaba otra. **De localización temporal:** una tarea debe empezar o acabar en una fecha fijada.', '**Precedence:** a task cannot start until another ends. **Time-fixed:** a task must start or end on a set date.'),
    L3('A és **anterior** a B si B no pot començar fins que A acaba; **immediatament anterior** si, a més, no hi ha cap tasca entremig.', 'A es **anterior** a B si B no puede empezar hasta que A acaba; **inmediatamente anterior** si, además, no hay ninguna tarea en medio.', 'A **precedes** B if B cannot start until A ends; **immediately** if there is no task in between.'),
    L3('**Tasques inicials:** sense anteriors. **Tasques finals:** cap tasca no les té com a anteriors. Dues tasques sense relació poden ser **simultànies**.', '**Tareas iniciales:** sin anteriores. **Tareas finales:** ninguna tarea las tiene como anteriores. Dos tareas sin relación pueden ser **simultáneas**.', '**Initial tasks:** nothing before them. **Final tasks:** nothing comes after them. Unrelated tasks can run **in parallel**.'),
  ]),
  example(L3('el projecte del tema', 'el proyecto del tema', 'the unit\'s project'), L3('Muntar una petita aplicació: 8 tasques, durades en dies.', 'Montar una pequeña aplicación: 8 tareas, duraciones en días.', 'Building a small app: 8 tasks, durations in days.'), [
    L3('A: requisits · B: disseny de dades · C: maqueta · D: API · E: base de dades · F: pantalles · G: proves de dades · H: publicació.', 'A: requisitos · B: diseño de datos · C: maqueta · D: API · E: base de datos · F: pantallas · G: pruebas de datos · H: publicación.', 'A: requirements · B: data design · C: mock-up · D: API · E: database · F: screens · G: data tests · H: release.'),
  ], undefined, X),
  taskTable([]),
  h('Nivell d\'una tasca', 'Nivel de una tarea', 'Level of a task'),
  p('Per dibuixar el projecte en ordre s\'assigna a cada tasca un **nivell**: tota tasca té un nivell més alt que les seves anteriors.', 'Para dibujar el proyecto en orden se asigna a cada tarea un **nivel**: toda tarea tiene un nivel más alto que sus anteriores.', 'To draw the project in order, each task gets a **level**: every task has a higher level than the tasks before it.'),
  steps([
    L3('**Nivell 0:** les tasques inicials (sense anteriors).', '**Nivel 0:** las tareas iniciales (sin anteriores).', '**Level 0:** the initial tasks (nothing before).'),
    L3('**Nivell i:** treu les tasques dels nivells 0, …, i − 1; les que es queden sense anteriors són de nivell i.', '**Nivel i:** quita las tareas de los niveles 0, …, i − 1; las que se quedan sin anteriores son de nivel i.', '**Level i:** remove the tasks of levels 0, …, i − 1; those left with nothing before are level i.'),
  ]),
  table([L3('Nivell', 'Nivel', 'Level'), L3('Tasques', 'Tareas', 'Tasks')], [...new Set(Object.values(r.level))].map((l) => [String(l), T.filter((t) => r.level[t.id] === l).map((t) => t.id).join(', ')])),
  ref('gr9-nivells', 2),
];

const s2 = [
  p('El mètode **C.P.M.** (*Critical Path Method*) representa el projecte amb un **graf dirigit i ponderat**:', 'El método **C.P.M.** (*Critical Path Method*) representa el proyecto con un **grafo dirigido y ponderado**:', 'The **CPM** (*Critical Path Method*) represents the project as a **weighted directed graph**:'),
  boxi('def', L3('el graf del projecte', 'el grafo del proyecto', 'the project graph'), [
    L3('Cada **vèrtex** és una tasca. S\'hi afegeixen una tasca inicial **α** i una de final **ω**, de durada 0.', 'Cada **vértice** es una tarea. Se añaden una tarea inicial **α** y una final **ω**, de duración 0.', 'Each **vertex** is a task. A start task **α** and an end task **ω**, of duration 0, are added.'),
    L3('Hi ha un **arc** X → Y si X és immediatament anterior a Y (i α → tasques inicials, tasques finals → ω).', 'Hay un **arco** X → Y si X es inmediatamente anterior a Y (y α → tareas iniciales, tareas finales → ω).', 'There is an **arc** X → Y if X immediately precedes Y (plus α → initial tasks and final tasks → ω).'),
    L3('El **pes** de l\'arc X → Y és la **durada de X**, la tasca que cal acabar: $t(X, Y) = d(X)$.', 'El **peso** del arco X → Y es la **duración de X**, la tarea que hay que acabar: $t(X, Y) = d(X)$.', 'The **weight** of arc X → Y is the **duration of X**, the task that must finish: $t(X, Y) = d(X)$.'),
    L3('Es dibuixa per nivells, d\'esquerra a dreta. A cada tasca s\'hi escriu $[T_X \\mid T\'_X]$.', 'Se dibuja por niveles, de izquierda a derecha. En cada tarea se escribe $[T_X \\mid T\'_X]$.', 'It is drawn level by level, left to right. Each task shows $[T_X \\mid T\'_X]$.'),
  ]),
  fig(PG, { w: 460, h: 280, hlE: PG.hlE, hlV: r.critical, tag: PG.tag, tagAbove: true }, L3('Graf del projecte. A cada tasca, [early | last]; en verd, el camí crític.', 'Grafo del proyecto. En cada tarea, [early | last]; en verde, el camino crítico.', 'Project graph. On each task, [early | last]; in green, the critical path.')),
  h('Data early', 'Fecha early', 'Early date'),
  box('def', L3('data early', 'fecha early', 'early date'), L3(
    '$T_X$ és la data **més aviat** en què pot començar la tasca X: totes les seves anteriors han d\'haver acabat. $T_\\alpha = 0$ i les tasques de nivell 0 tenen $T = 0$. Si C és el conjunt de les immediatament anteriors a Y: $$T_Y = \\max_{X \\in C} \\left[ T_X + t(X, Y) \\right].$$ Es calcula **endavant**, per nivells creixents.',
    '$T_X$ es la fecha **más temprana** en que puede empezar la tarea X: todas sus anteriores deben haber acabado. $T_\\alpha = 0$ y las tareas de nivel 0 tienen $T = 0$. Si C es el conjunto de las inmediatamente anteriores a Y: $$T_Y = \\max_{X \\in C} \\left[ T_X + t(X, Y) \\right].$$ Se calcula **hacia delante**, por niveles crecientes.',
    '$T_X$ is the **earliest** date task X can start: all its predecessors must be finished. $T_\\alpha = 0$ and level-0 tasks have $T = 0$. If C is the set of tasks immediately before Y: $$T_Y = \\max_{X \\in C} \\left[ T_X + t(X, Y) \\right].$$ It is computed **forwards**, by increasing level.')),
  example(L3('dates early', 'fechas early', 'early dates'), L3('Calcula-les per al projecte del tema.', 'Calcúlalas para el proyecto del tema.', 'Compute them for the unit\'s project.'),
    [...byLevel.map((id) => earlyLine(id)), { x: L3(`La durada del projecte és la data early de ω: max de (early + durada) de les tasques finals = **${r.duration}** dies.`, `La duración del proyecto es la fecha early de ω: max de (early + duración) de las tareas finales = **${r.duration}** días.`, `The project duration is the early date of ω: the max of (early + duration) over final tasks = **${r.duration}** days.`), done: true }],
    undefined),
  box('note', L3('Per què el màxim?', '¿Por qué el máximo?', 'Why the maximum?'), L3('Y ha d\'esperar l\'anterior que acaba **més tard**: n\'hi ha prou que una no hagi acabat perquè Y no pugui començar.', 'Y tiene que esperar a la anterior que acaba **más tarde**: basta con que una no haya acabado para que Y no pueda empezar.', 'Y must wait for the predecessor that finishes **last**: one unfinished task is enough to block Y.'), X),
  h('Data last', 'Fecha last', 'Last date'),
  box('def', L3('data last', 'fecha last', 'last date'), L3(
    '$T\'_X$ és la data **més tardana** en què pot començar X sense endarrerir el projecte. Per a ω, $T\'_\\omega = T_\\omega$ (la durada). Si C\' és el conjunt de les immediatament posteriors a X: $$T\'_X = \\min_{Y \\in C\'} \\left[ T\'_Y - t(X, Y) \\right].$$ Es calcula **enrere**, des del final.',
    '$T\'_X$ es la fecha **más tardía** en que puede empezar X sin retrasar el proyecto. Para ω, $T\'_\\omega = T_\\omega$ (la duración). Si C\' es el conjunto de las inmediatamente posteriores a X: $$T\'_X = \\min_{Y \\in C\'} \\left[ T\'_Y - t(X, Y) \\right].$$ Se calcula **hacia atrás**, desde el final.',
    '$T\'_X$ is the **latest** date X can start without delaying the project. For ω, $T\'_\\omega = T_\\omega$ (the duration). If C\' is the set of tasks immediately after X: $$T\'_X = \\min_{Y \\in C\'} \\left[ T\'_Y - t(X, Y) \\right].$$ It is computed **backwards**, from the end.')),
  example(L3('dates last', 'fechas last', 'last dates'), L3('Calcula-les, començant per les tasques finals.', 'Calcúlalas, empezando por las tareas finales.', 'Compute them, starting from the final tasks.'),
    [...[...byLevel].reverse().map((id) => lateLine(id))], L3('El mínim: X ha d\'acabar a temps per a la posterior que comença **més aviat**.', 'El mínimo: X tiene que acabar a tiempo para la posterior que empieza **más pronto**.', 'The minimum: X must finish in time for the successor that starts **earliest**.')),
  taskTable([[L3('Nivell', 'Nivel', 'Level'), (id) => r.level[id]], ['T', (id) => r.early[id]], ['T′', (id) => r.late[id]]]),
  check(EX['g3-x1']),
  ref('gr9-cpm', 5),
];

const s3 = [
  table([L3('Marge', 'Margen', 'Slack'), L3('Què indica', 'Qué indica', 'Meaning'), L3('Fórmula', 'Fórmula', 'Formula')], [
    [L3('**Total** $M^T(X)$', '**Total** $M^T(X)$', '**Total** $M^T(X)$'), L3('Quant es pot endarrerir o allargar X **sense allargar el projecte**', 'Cuánto se puede retrasar o alargar X **sin alargar el proyecto**', 'How much X can be delayed or extended **without delaying the project**'), "$T'_X - T_X$"],
    [L3('**Lliure** $M^L(X)$', '**Libre** $M^L(X)$', '**Free** $M^L(X)$'), L3('Quant es pot endarrerir X **sense moure la data early de cap posterior**', 'Cuánto se puede retrasar X **sin mover la fecha early de ninguna posterior**', 'How much X can be delayed **without moving any successor\'s early date**'), '$\\min_{Y \\in C\'} [T_Y] - T_X - d(X)$'],
  ]),
  box('def', L3('tasca crítica i camí crític', 'tarea crítica y camino crítico', 'critical task and critical path'), L3(
    'Una tasca és **crítica** si el seu marge total és 0: qualsevol retard endarrereix tot el projecte. Les tasques crítiques formen el **camí crític** de α a ω, el camí **més llarg** del graf: la seva longitud és la durada del projecte.',
    'Una tarea es **crítica** si su margen total es 0: cualquier retraso retrasa todo el proyecto. Las tareas críticas forman el **camino crítico** de α a ω, el camino **más largo** del grafo: su longitud es la duración del proyecto.',
    'A task is **critical** if its total slack is 0: any delay delays the whole project. Critical tasks form the **critical path** from α to ω, the **longest** path in the graph: its length is the project duration.')),
  taskTable([['T', (id) => r.early[id]], ['T′', (id) => r.late[id]], ['Mᵀ', (id) => r.total[id]], ['Mᴸ', (id) => r.free[id]]]),
  p(`Camí crític: **${r.paths[0].join(' → ')}**, de durada ${r.paths[0].map((id) => dur[id]).join(' + ')} = ${r.duration}. La tasca C té marge total ${r.total.C}: pot començar entre el dia ${r.early.C} i el ${r.late.C} sense que el projecte s'allargui.`,
    `Camino crítico: **${r.paths[0].join(' → ')}**, de duración ${r.paths[0].map((id) => dur[id]).join(' + ')} = ${r.duration}. La tarea C tiene margen total ${r.total.C}: puede empezar entre el día ${r.early.C} y el ${r.late.C} sin que el proyecto se alargue.`,
    `Critical path: **${r.paths[0].join(' → ')}**, of length ${r.paths[0].map((id) => dur[id]).join(' + ')} = ${r.duration}. Task C has total slack ${r.total.C}: it can start any day from ${r.early.C} to ${r.late.C} without delaying the project.`),
  { t: 'diagram', svg: ganttSvg(T, r, { w: 420, label: 'Gantt' }), wide: true, caption: L3('Diagrama de Gantt: cada barra comença a la data early; la franja clara és el marge total. Les barres verdes són el camí crític.', 'Diagrama de Gantt: cada barra empieza en la fecha early; la franja clara es el margen total. Las barras verdes son el camino crítico.', 'Gantt chart: each bar starts at the early date; the pale band is the total slack. Green bars are the critical path.') },
  boxi('warn', L3('Errors habituals', 'Errores habituales', 'Common mistakes'), [
    L3('Posar a l\'arc X → Y la durada de Y: és la de **X**.', 'Poner en el arco X → Y la duración de Y: es la de **X**.', 'Labelling arc X → Y with the duration of Y: it is that of **X**.'),
    L3('Fer el mínim a les early o el màxim a les last: endavant és **màxim**, enrere és **mínim**.', 'Hacer el mínimo en las early o el máximo en las last: hacia delante es **máximo**, hacia atrás es **mínimo**.', 'Taking the min for early dates or the max for last dates: forwards is **max**, backwards is **min**.'),
    L3('Oblidar que la durada del projecte inclou la durada de l\'última tasca.', 'Olvidar que la duración del proyecto incluye la duración de la última tarea.', 'Forgetting that the project duration includes the last task\'s duration.'),
  ]),
  lab('g-cpm'),
  check(EX['g3-x2']),
  check(EX['g3-x3']),
  ref('gr9-critic', 3),
];

export default {
  intro: [
    p('Un projecte (una obra, un programa, un viatge) és un graf de tasques amb dependències. El mètode C.P.M. respon tres preguntes: quant durarà com a mínim, quan pot començar cada tasca i quines tasques no es poden endarrerir.',
      'Un proyecto (una obra, un programa, un viaje) es un grafo de tareas con dependencias. El método C.P.M. responde tres preguntas: cuánto durará como mínimo, cuándo puede empezar cada tarea y qué tareas no se pueden retrasar.',
      'A project (a building, a program, a trip) is a graph of tasks with dependencies. CPM answers three questions: the minimum duration, when each task can start and which tasks cannot be delayed.'),
    boxi('summary', L3('D\'un cop d\'ull', 'De un vistazo', 'At a glance'), [
      L3('Arc X → Y amb pes $d(X)$. Nivells: 0 sense anteriors.', 'Arco X → Y con peso $d(X)$. Niveles: 0 sin anteriores.', 'Arc X → Y weighted $d(X)$. Levels: 0 for no predecessors.'),
      L3('Early (endavant): $T_Y = \\max [T_X + d(X)]$. Last (enrere): $T\'_X = \\min [T\'_Y] - d(X)$.', 'Early (hacia delante): $T_Y = \\max [T_X + d(X)]$. Last (hacia atrás): $T\'_X = \\min [T\'_Y] - d(X)$.', 'Early (forwards): $T_Y = \\max [T_X + d(X)]$. Last (backwards): $T\'_X = \\min [T\'_Y] - d(X)$.'),
      L3('$M^T = T\' - T$; crítiques: $M^T = 0$; camí crític = camí més llarg.', '$M^T = T\' - T$; críticas: $M^T = 0$; camino crítico = camino más largo.', '$M^T = T\' - T$; critical: $M^T = 0$; critical path = longest path.'),
    ], D),
    hr(),
  ],
  sections: { '17-planificacio-de-projectes': s1, 'gr9-cpm': s2, 'gr9-marges': s3 },
  examEnd: [{ ref: 'gr9-cpm', seed: 3 }, { ref: 'gr9-cpm', seed: 12 }, { ref: 'gr9-critic', seed: 6 }],
};
