/**
 * Mètodes d'examen de Principis d'economia, per tema (vegeu src/courses/_kit/Methods.jsx): trucs, exercicis
 * resolts pas a pas (citats del banc o escrits aquí) i què fer el dia de l'examen.
 */
const L3 = (ca, es, en) => [ca, es, en];
const tricks = (title, items) => ({ t: 'method', title, items });
const day = (items) => [{ t: 'list', items }];
const H = L3('Exercicis tipus examen resolts', 'Ejercicios tipo examen resueltos', 'Exam-style exercises, solved');
const step = (x, why) => (why ? { x, why } : x);

const t1 = {
  solvedH: H,
  tricks: [
    tricks(L3('Classificar afirmacions', 'Clasificar afirmaciones', 'Classifying statements'), [
      L3('**Positiva o normativa:** es pot comprovar amb dades? «És», «va ser», «si… aleshores…» → positiva; «hauria de», «cal», «és injust» → normativa.', '**Positiva o normativa:** ¿se puede comprobar con datos? «Es», «fue», «si… entonces…» → positiva; «debería», «hay que», «es injusto» → normativa.', '**Positive or normative:** can it be checked with data? “Is”, “was”, “if… then…” → positive; “should”, “must”, “it is unfair” → normative.'),
      L3('**Micro o macro:** un agent concret (una empresa, una persona) → micro; una variable de tot el país (inflació, PIB, salari mitjà) → macro.', '**Micro o macro:** un agente concreto (una empresa, una persona) → micro; una variable de todo el país (inflación, PIB, salario medio) → macro.', '**Micro or macro:** a specific agent (a firm, a person) → micro; a variable for the whole country (inflation, GDP, average wage) → macro.'),
      L3('Són dos criteris independents: aplica\'ls per separat.', 'Son dos criterios independientes: aplícalos por separado.', 'They are two independent criteria: apply them separately.'),
    ]),
    tricks(L3('Cost d\'oportunitat i FPP', 'Coste de oportunidad y FPP', 'Opportunity cost and the PPF'), [
      L3('El cost d\'oportunitat és la **millor alternativa** a què renuncies, no el preu ni la suma de totes les alternatives.', 'El coste de oportunidad es la **mejor alternativa** a la que renuncias, no el precio ni la suma de todas las alternativas.', 'Opportunity cost is the **best alternative** you give up, not the price or the sum of all alternatives.'),
      L3('A la taula de la FPP: cost d\'una unitat més de X = el que **baixa** Y. Si els costos creixen, la FPP és còncava; si són constants, és una recta.', 'En la tabla de la FPP: coste de una unidad más de X = lo que **baja** Y. Si los costes crecen, la FPP es cóncava; si son constantes, es una recta.', 'In the PPF table: cost of one more unit of X = how much Y **falls**. If costs increase, the PPF is concave; if they are constant, it is a straight line.'),
      L3('Punt sobre la corba = eficient; a dins = ineficient (es pot produir més **sense cost**); a fora = inassolible.', 'Punto sobre la curva = eficiente; dentro = ineficiente (se puede producir más **sin coste**); fuera = inalcanzable.', 'Point on the curve = efficient; inside = inefficient (more can be produced **at no cost**); outside = unattainable.'),
      L3('La FPP només es desplaça si canvien els recursos o la tecnologia; aprofitar recursos ociosos no la mou.', 'La FPP solo se desplaza si cambian los recursos o la tecnología; aprovechar recursos ociosos no la mueve.', 'The PPF only shifts if resources or technology change; using idle resources does not move it.'),
    ]),
    tricks(L3('Béns i sistemes', 'Bienes y sistemas', 'Goods and systems'), [
      L3('La categoria d\'un bé la decideix **l\'ús**: el mateix portàtil pot ser bé de capital o de consum durador.', 'La categoría de un bien la decide **el uso**: el mismo portátil puede ser bien de capital o de consumo duradero.', 'A good\'s category is decided by **its use**: the same laptop can be a capital good or a durable consumer good.'),
      L3('Capital (dura) ≠ intermedi (s\'incorpora al producte); capital físic (coses) ≠ capital financer (diners).', 'Capital (dura) ≠ intermedio (se incorpora al producto); capital físico (cosas) ≠ capital financiero (dinero).', 'Capital (lasts) ≠ intermediate (becomes part of the product); physical capital (things) ≠ financial capital (money).'),
    ]),
  ],
  solved: [
    { ref: 't1-m-03' },
    { id: 'eco-m-t1-1', q: L3('Amb una FPP on passar de C a D costa 6 webs i de E a F en costa 10, què indica això sobre la forma de la frontera?', 'Con una FPP en la que pasar de C a D cuesta 6 webs y de E a F cuesta 10, ¿qué indica esto sobre la forma de la frontera?', 'With a PPF where moving from C to D costs 6 websites and from E to F costs 10, what does this say about the shape of the frontier?'),
      steps: [
        step(L3('Compara els costos: cada unitat nova costa més que l\'anterior.', 'Compara los costes: cada unidad nueva cuesta más que la anterior.', 'Compare the costs: each new unit costs more than the previous one.')),
        step(L3('Cost d\'oportunitat creixent → la FPP és **còncava**.', 'Coste de oportunidad creciente → la FPP es **cóncava**.', 'Increasing opportunity cost → the PPF is **concave**.'), L3('Els recursos no són igual de bons per a tot: els últims que es traslladen eren els millors en l\'altre bé.', 'Los recursos no son igual de buenos para todo: los últimos que se trasladan eran los mejores en el otro bien.', 'Resources are not equally good for everything: the last ones moved were the best at the other good.')),
      ] },
  ],
  day: day([
    L3('**Definicions:** escriu la definició abans de l\'exemple; després aplica-la al cas de l\'enunciat.', '**Definiciones:** escribe la definición antes del ejemplo; después aplícala al caso del enunciado.', '**Definitions:** write the definition before the example; then apply it to the case in the problem.'),
    L3('**Taules de la FPP:** fes totes les restes en una columna; és la manera més ràpida de veure la forma de la corba.', '**Tablas de la FPP:** haz todas las restas en una columna; es la manera más rápida de ver la forma de la curva.', '**PPF tables:** do all the subtractions in one column; it is the quickest way to see the shape of the curve.'),
  ]),
};

const t2 = {
  solvedH: H,
  tricks: [
    tricks(L3('Equilibri en quatre passos', 'Equilibrio en cuatro pasos', 'Equilibrium in four steps'), [
      L3('Iguala $Q_d=Q_o$, aïlla $P$, substitueix per trobar $Q$ i **comprova amb l\'altra funció**.', 'Iguala $Q_d=Q_o$, despeja $P$, sustituye para hallar $Q$ y **comprueba con la otra función**.', 'Set $Q_d=Q_o$, solve for $P$, substitute to find $Q$ and **check with the other function**.'),
      L3('Desequilibri: resta «el que hi ha menys el que es vol» ($Q_o-Q_d$). Positiu → excés d\'oferta, el preu baixa; negatiu → excés de demanda, el preu puja.', 'Desequilibrio: resta «lo que hay menos lo que se quiere» ($Q_o-Q_d$). Positivo → exceso de oferta, el precio baja; negativo → exceso de demanda, el precio sube.', 'Disequilibrium: subtract “what there is minus what is wanted” ($Q_o-Q_d$). Positive → excess supply, the price falls; negative → excess demand, the price rises.'),
      L3('Amb un preu fixat, s\'intercanvia la quantitat **més petita** de les dues.', 'Con un precio fijado, se intercambia la cantidad **más pequeña** de las dos.', 'With a fixed price, the **smaller** of the two quantities is traded.'),
    ]),
    tricks(L3('Excedents', 'Excedentes', 'Surpluses'), [
      L3('Troba els talls amb l\'eix de preus fent $Q=0$: $P_{\\max}$ a la demanda i $P_{\\min}$ a l\'oferta.', 'Halla los cortes con el eje de precios haciendo $Q=0$: $P_{\\max}$ en la demanda y $P_{\\min}$ en la oferta.', 'Find the price-axis intercepts by setting $Q=0$: $P_{\\max}$ for demand and $P_{\\min}$ for supply.'),
      L3('Cada excedent és un triangle: $Q^*$ × diferència de preus / 2. Benestar social = EC + EP + recaptació.', 'Cada excedente es un triángulo: $Q^*$ × diferencia de precios / 2. Bienestar social = EC + EP + recaudación.', 'Each surplus is a triangle: $Q^*$ × price difference / 2. Social welfare = CS + PS + revenue.'),
      L3('Si la funció canvia, recalcula també el tall amb l\'eix.', 'Si la función cambia, recalcula también el corte con el eje.', 'If the function changes, recalculate the axis intercept too.'),
    ]),
    tricks(L3('Moviments i desplaçaments', 'Movimientos y desplazamientos', 'Movements and shifts'), [
      L3('El preu del **propi bé** et mou sobre la corba; qualsevol altre factor mou la corba.', 'El precio del **propio bien** te mueve sobre la curva; cualquier otro factor mueve la curva.', 'The price of the **good itself** moves you along the curve; any other factor moves the curve.'),
      L3('Si es mou la demanda, $P^*$ i $Q^*$ van en el mateix sentit; si es mou l\'oferta, en sentits contraris.', 'Si se mueve la demanda, $P^*$ y $Q^*$ van en el mismo sentido; si se mueve la oferta, en sentidos contrarios.', 'If demand moves, $P^*$ and $Q^*$ go in the same direction; if supply moves, in opposite directions.'),
      L3('Si es mouen les dues corbes, una de les dues variables queda **ambigua**: fes la taula d\'efectes.', 'Si se mueven las dos curvas, una de las dos variables queda **ambigua**: haz la tabla de efectos.', 'If both curves move, one of the two variables is **ambiguous**: make the table of effects.'),
    ]),
  ],
  solved: [
    { ref: 't2-m-02' },
    { ref: 't2-d-02', day: L3('Justifica cada desplaçament amb el seu determinant abans de concloure.', 'Justifica cada desplazamiento con su determinante antes de concluir.', 'Justify each shift with its determinant before concluding.') },
  ],
  day: day([
    L3('**Dibuix:** fes sempre un esbós de les dues corbes; t\'evita errors de signe.', '**Dibujo:** haz siempre un esbozo de las dos curvas; te evita errores de signo.', '**Drawing:** always sketch the two curves; it saves you sign mistakes.'),
    L3('**Vocabulari:** «baixa la quantitat demandada» no és el mateix que «baixa la demanda».', '**Vocabulario:** «baja la cantidad demandada» no es lo mismo que «baja la demanda».', '**Vocabulary:** “the quantity demanded falls” is not the same as “demand falls”.'),
  ]),
};

const t3 = {
  solvedH: H,
  tricks: [
    tricks(L3('Preus i inflació', 'Precios e inflación', 'Prices and inflation'), [
      L3('IPC ponderat: $\\sum g_i\\cdot p_{it}/p_{i0}$, sempre amb el preu de l\'**any base**. Comprova que els pesos sumen 100.', 'IPC ponderado: $\\sum g_i\\cdot p_{it}/p_{i0}$, siempre con el precio del **año base**. Comprueba que los pesos suman 100.', 'Weighted CPI: $\\sum g_i\\cdot p_{it}/p_{i0}$, always with the **base-year** price. Check that the weights add up to 100.'),
      L3('La inflació d\'un any es divideix per l\'índex de l\'**any anterior**. Nivell (110) ≠ taxa (5 %) ≠ punts (5,5).', 'La inflación de un año se divide por el índice del **año anterior**. Nivel (110) ≠ tasa (5 %) ≠ puntos (5,5).', 'A year\'s inflation is divided by the **previous year\'s** index. Level (110) ≠ rate (5 %) ≠ points (5.5).'),
      L3('PIB real: quantitats de l\'any, preus de l\'any base. Deflactor = nominal / real × 100.', 'PIB real: cantidades del año, precios del año base. Deflactor = nominal / real × 100.', 'Real GDP: the year\'s quantities, base-year prices. Deflator = nominal / real × 100.'),
    ]),
    tricks(L3('La cadena de macromagnituds', 'La cadena de macromagnitudes', 'The macro-magnitude chain'), [
      L3('PIBcf → +ind. − subv. → PIBpm; + rfne − rfen → PNB; − amortitzacions → net. RN = PNNcf.', 'PIBcf → +ind. − subv. → PIBpm; + rfne − rfen → PNB; − amortizaciones → neto. RN = PNNcf.', 'GDPfc → +ind. − subs. → GDPmp; + rfne − rfen → GNP; − depreciation → net. NI = NNPfc.'),
      L3('RPD = RN − directes − SS + transferències; S = RPD − C; SP = T − D − Tr − Subv.', 'RPD = RN − directos − SS + transferencias; S = RPD − C; SP = T − D − Tr − Subv.', 'PDI = NI − direct taxes − SS + transfers; S = PDI − C; PB = T − D − Tr − Subs.'),
      L3('Indirectes → pm; directes → RPD. No barregis una magnitud a cf amb una a pm.', 'Indirectos → pm; directos → RPD. No mezcles una magnitud a cf con una a pm.', 'Indirect → mp; direct → PDI. Do not mix a magnitude at fc with one at mp.'),
      L3('Renda per càpita: passa els milions a euros abans de dividir.', 'Renta per cápita: pasa los millones a euros antes de dividir.', 'Per capita income: convert millions into euros before dividing.'),
    ]),
    tricks(L3('Mercat de treball', 'Mercado de trabajo', 'Labour market'), [
      L3('Aturat = sense feina **i** disponible **i** buscant activament; si en falla una, és inactiu.', 'Parado = sin trabajo **y** disponible **y** buscando activamente; si falla una, es inactivo.', 'Unemployed = no job **and** available **and** actively looking; if any one fails, they are inactive.'),
      L3('Taxa d\'atur = PD / **PA**, mai / PT. Taxa d\'activitat = PA / PT.', 'Tasa de paro = PD / **PA**, nunca / PT. Tasa de actividad = PA / PT.', 'Unemployment rate = UP / **LF**, never / TP. Activity rate = LF / TP.'),
      L3('Tipus d\'atur: època de l\'any → estacional; perfil que no encaixa → estructural; entre feines → friccional; recessió → cíclic.', 'Tipos de paro: época del año → estacional; perfil que no encaja → estructural; entre trabajos → friccional; recesión → cíclico.', 'Types of unemployment: time of year → seasonal; profile that does not fit → structural; between jobs → frictional; recession → cyclical.'),
    ]),
  ],
  solved: [
    { ref: 't3-d-01', day: L3('Escriu la fórmula a cada pas i comprova el PIB per dos mètodes si l\'enunciat ho permet.', 'Escribe la fórmula en cada paso y comprueba el PIB por dos métodos si el enunciado lo permite.', 'Write the formula at each step and check GDP by two methods if the problem allows it.') },
    { ref: 't3-m-01' },
    { ref: 't3-d-04' },
  ],
  day: day([
    L3('**Unitats:** indica sempre si treballes en milions, en euros o en persones, i a quina valoració (cf o pm).', '**Unidades:** indica siempre si trabajas en millones, en euros o en personas, y con qué valoración (cf o pm).', '**Units:** always state whether you are working in millions, euros or people, and at which valuation (fc or mp).'),
    L3('**Taxes:** escriu primer la fórmula amb lletres i després els números; així es veu de seguida si el denominador és el correcte.', '**Tasas:** escribe primero la fórmula con letras y después los números; así se ve enseguida si el denominador es el correcto.', '**Rates:** write the formula with letters first and then the numbers; that way you see at once whether the denominator is right.'),
  ]),
};

export default { t1, t2, t3 };
