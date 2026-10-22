/**
 * Exercicis (setmanes 2, 3 i 4) amb jocs de proves i solució model.
 * Els marcats «en l'estil de» són variants pròpies, no l'enunciat oficial.
 * k: seq | cond | rec | cerca; tests: [{ in, out }] (out: valors que han d'aparèixer en ordre).
 */
const B2 = (ca, es) => ({ ca, es });

export const EXS = [
 /* ---------- setmana 2: seqüencial ---------- */
 { id: 'area', wk: 2, k: 'seq', t: B2('Àrea i perímetre d\'un rectangle', 'Área y perímetro de un rectángulo'),
   q: B2('Llegiu la base i l\'altura d\'un rectangle (reals) i escriviu-ne l\'àrea i el perímetre.', 'Leed la base y la altura de un rectángulo (reales) y escribid su área y su perímetro.'),
   tests: [{ in: [3, 4.5], out: [13.5, 15] }, { in: [2, 2], out: [4, 8] }, { in: [0.5, 10], out: [5, 21] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS  DESCRIPCIÓ
  E    Base           Real   Base del rectangle
  E    Altura         Real   Altura del rectangle
  S    Area           Real   Àrea del rectangle
  S    Perimetre      Real   Perímetre del rectangle
INICI_SEQÜÈNCIA
    Llegir Base
    Llegir Altura
    {Base ≥ 0 i Altura ≥ 0}
    Area ← Base · Altura
    Perimetre ← 2 · (Base + Altura)
    {Area = Base · Altura i Perimetre = 2 · (Base + Altura)}
    Escriure "Àrea: ", Area
    Escriure "Perímetre: ", Perimetre
FI_SEQÜÈNCIA` },
 { id: 'temps', wk: 2, k: 'seq', t: B2('Segons a h, min i s', 'Segundos a h, min y s'),
   q: B2('Llegiu una quantitat de segons T (natural) i escriviu-la en hores, minuts i segons.', 'Leed una cantidad de segundos T (natural) y escribidla en horas, minutos y segundos.'),
   tests: [{ in: [3725], out: [1, 2, 5] }, { in: [59], out: [0, 0, 59] }, { in: [86399], out: [23, 59, 59] }],
   tip: B2('Quocient enter ‖ i residu |R.', 'Cociente entero ‖ y resto |R.'),
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    T              Natural  Segons totals
  S    H              Natural  Hores
  S    M              Natural  Minuts
  S    S              Natural  Segons
INICI_SEQÜÈNCIA
    Llegir T
    {T ≥ 0}
    H ← T ‖ 3600
    M ← (T |R 3600) ‖ 60
    S ← T |R 60
    {T = 3600 · H + 60 · M + S}
    Escriure H, " h ", M, " min ", S, " s"
FI_SEQÜÈNCIA` },
 { id: 'igi', wk: 2, k: 'seq', t: B2('Preu amb IGI', 'Precio con IGI'),
   q: B2('Llegiu el preu d\'un producte (real) i escriviu el preu final amb l\'IGI general del 4,5 %.', 'Leed el precio de un producto (real) y escribid el precio final con el IGI general del 4,5 %.'),
   tests: [{ in: [100], out: [104.5] }, { in: [20], out: [20.9] }, { in: [0], out: [0] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS  DESCRIPCIÓ
  E    Preu           Real   Preu sense impost
  S    Total          Real   Preu amb l'IGI
INICI_SEQÜÈNCIA
    Llegir Preu
    {Preu ≥ 0}
    Total ← Preu + Preu · 4.5 / 100
    {Total = Preu · 1,045}
    Escriure "Preu final: ", Total
FI_SEQÜÈNCIA` },
 { id: 'swap', wk: 2, k: 'seq', t: B2('Intercanvi de dues variables', 'Intercambio de dos variables'),
   q: B2('Llegiu dos enters A i B, intercanvieu-ne els valors i escriviu A i B.', 'Leed dos enteros A y B, intercambiad sus valores y escribid A y B.'),
   tests: [{ in: [3, 8], out: [8, 3] }, { in: [-1, 5], out: [5, -1] }],
   tip: B2('Cal una variable auxiliar: no hi ha l\'a, b = b, a de Python.', 'Hace falta una variable auxiliar: no existe el a, b = b, a de Python.'),
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS  DESCRIPCIÓ
  E/S  A              Enter  Primer valor
  E/S  B              Enter  Segon valor
       Aux            Enter  Auxiliar per a l'intercanvi
INICI_SEQÜÈNCIA
    Llegir A, B
    Aux ← A
    A ← B
    B ← Aux
    Escriure A, " ", B
FI_SEQÜÈNCIA` },
 { id: 'pilotes', wk: 2, k: 'seq', src: B2('en l\'estil de S02 · La Fàbrica de Pilotes', 'al estilo de S02 · La Fàbrica de Pilotes'), t: B2('Pilotes en capses', 'Pelotas en cajas'),
   q: B2('Una fàbrica posa les pilotes en capses de 6. Llegiu el nombre de pilotes N i escriviu quantes capses s\'omplen i quantes pilotes sobren.', 'Una fábrica pone las pelotas en cajas de 6. Leed el número de pelotas N y escribid cuántas cajas se llenan y cuántas pelotas sobran.'),
   tests: [{ in: [20], out: [3, 2] }, { in: [6], out: [1, 0] }, { in: [5], out: [0, 5] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    N              Natural  Nombre de pilotes
  S    Capses         Natural  Capses plenes
  S    Sobren         Natural  Pilotes que sobren
INICI_SEQÜÈNCIA
    Llegir N
    Capses ← N ‖ 6
    Sobren ← N |R 6
    {N = 6 · Capses + Sobren i Sobren < 6}
    Escriure "Capses: ", Capses, " Sobren: ", Sobren
FI_SEQÜÈNCIA` },
 { id: 'xif3', wk: 2, k: 'seq', t: B2('Suma de les xifres d\'un nombre de 3 xifres', 'Suma de las cifras de un número de 3 cifras'),
   q: B2('Llegiu un natural de tres xifres i escriviu la suma de les seves xifres.', 'Leed un natural de tres cifras y escribid la suma de sus cifras.'),
   tests: [{ in: [472], out: [13] }, { in: [100], out: [1] }, { in: [999], out: [27] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    N              Natural  Nombre de tres xifres
  S    Suma           Natural  Suma de les xifres
INICI_SEQÜÈNCIA
    Llegir N
    {100 ≤ N ≤ 999}
    Suma ← N ‖ 100 + (N ‖ 10) |R 10 + N |R 10
    Escriure "Suma de xifres: ", Suma
FI_SEQÜÈNCIA` },
 /* ---------- setmana 3: condicionals ---------- */
 { id: 'max3', wk: 3, k: 'cond', t: B2('Màxim de tres nombres', 'Máximo de tres números'),
   q: B2('Llegiu tres naturals i escriviu el més gran (exemple de la teoria).', 'Leed tres naturales y escribid el mayor (ejemplo de la teoría).'),
   tests: [{ in: [3, 9, 4], out: [9] }, { in: [7, 2, 1], out: [7] }, { in: [1, 2, 8], out: [8] }, { in: [5, 5, 5], out: [5] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    N1             Natural  Primer número
  E    N2             Natural  Segon número
  E    N3             Natural  Tercer número
  S    Max            Natural  Màxim dels tres números
INICI_SEQÜÈNCIA
    Llegir N1, N2, N3
    {N1 ≥ 0 i N2 ≥ 0 i N3 ≥ 0}
    Max ← N1
    SI N2 > Max LLAVORS
        Max ← N2
    FI_SI
    SI N3 > Max LLAVORS
        Max ← N3
    FI_SI
    {Max = màxim(N1, N2, N3)}
    Escriure "El màxim és ", Max
FI_SEQÜÈNCIA` },
 { id: 'parell', wk: 3, k: 'cond', t: B2('Parell o senar', 'Par o impar'),
   q: B2('Llegiu un enter i escriviu «parell» o «senar».', 'Leed un entero y escribid «parell» o «senar».'),
   tests: [{ in: [8], out: ['parell'] }, { in: [7], out: ['senar'] }, { in: [0], out: ['parell'] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS  DESCRIPCIÓ
  E    N              Enter  Nombre
INICI_SEQÜÈNCIA
    Llegir N
    SI N |R 2 = 0 LLAVORS
        Escriure "parell"
    ALTRAMENT
        Escriure "senar"
    FI_SI
FI_SEQÜÈNCIA` },
 { id: 'traspas', wk: 3, k: 'cond', t: B2('Any de traspàs', 'Año bisiesto'),
   q: B2('Llegiu un any i escriviu «Sí» si és de traspàs i «No» si no ho és. És de traspàs si és múltiple de 4 i no de 100, o bé si és múltiple de 400.', 'Leed un año y escribid «Sí» si es bisiesto y «No» si no lo es. Es bisiesto si es múltiplo de 4 y no de 100, o bien si es múltiplo de 400.'),
   tests: [{ in: [2024], out: ['si'] }, { in: [1900], out: ['no'] }, { in: [2000], out: ['si'] }, { in: [2026], out: ['no'] }],
   tip: B2('Amb les prioritats del curs, cada comparació entre parèntesis.', 'Con las prioridades del curso, cada comparación entre paréntesis.'),
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    Any            Natural  Any que es comprova
       Traspas        Lògic    Cert si és de traspàs
INICI_SEQÜÈNCIA
    Llegir Any
    Traspas ← ((Any |R 4 = 0) I (Any |R 100 ≠ 0)) O (Any |R 400 = 0)
    SI Traspas LLAVORS
        Escriure "Sí"
    ALTRAMENT
        Escriure "No"
    FI_SI
FI_SEQÜÈNCIA` },
 { id: 'nota', wk: 3, k: 'cond', t: B2('Qualificació amb SEGONS_SIGUI', 'Calificación con SEGONS_SIGUI'),
   q: B2('Llegiu una nota entera de 0 a 10 i escriviu: 0–4 «Suspès», 5–6 «Aprovat», 7–8 «Notable», 9 «Excel·lent», 10 «Matrícula»; qualsevol altre valor, «Error».', 'Leed una nota entera de 0 a 10 y escribid: 0–4 «Suspès», 5–6 «Aprovat», 7–8 «Notable», 9 «Excel·lent», 10 «Matrícula»; cualquier otro valor, «Error».'),
   tests: [{ in: [3], out: ['Suspes'] }, { in: [6], out: ['Aprovat'] }, { in: [8], out: ['Notable'] }, { in: [9], out: ['Excel'] }, { in: [10], out: ['Matricula'] }, { in: [12], out: ['Error'] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS  DESCRIPCIÓ
  E    Nota           Enter  Nota numèrica
INICI_SEQÜÈNCIA
    Llegir Nota
    SEGONS_SIGUI Nota FER
        0, 1, 2, 3, 4: Escriure "Suspès"
        5, 6: Escriure "Aprovat"
        7, 8: Escriure "Notable"
        9: Escriure "Excel·lent"
        10: Escriure "Matrícula"
    ALTRAMENT
        Escriure "Error"
    FI_SEGONS_SIGUI
FI_SEQÜÈNCIA` },
 { id: 'quadrant', wk: 3, k: 'cond', src: B2('en l\'estil de S03 · Quadrant', 'al estilo de S03 · Quadrant'), t: B2('Quadrant d\'un punt', 'Cuadrante de un punto'),
   q: B2('Llegiu les coordenades enteres x i y d\'un punt i escriviu el quadrant (1, 2, 3 o 4), o 0 si és sobre un eix.', 'Leed las coordenadas enteras x e y de un punto y escribid el cuadrante (1, 2, 3 o 4), o 0 si está sobre un eje.'),
   tests: [{ in: [3, 5], out: [1] }, { in: [-3, 5], out: [2] }, { in: [-3, -5], out: [3] }, { in: [3, -5], out: [4] }, { in: [0, 7], out: [0] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    X              Enter    Abscissa
  E    Y              Enter    Ordenada
  S    Q              Natural  Quadrant (0 si és sobre un eix)
INICI_SEQÜÈNCIA
    Llegir X, Y
    SI (X = 0) O (Y = 0) LLAVORS
        Q ← 0
    ALTRAMENT
        SI X > 0 LLAVORS
            SI Y > 0 LLAVORS
                Q ← 1
            ALTRAMENT
                Q ← 4
            FI_SI
        ALTRAMENT
            SI Y > 0 LLAVORS
                Q ← 2
            ALTRAMENT
                Q ← 3
            FI_SI
        FI_SI
    FI_SI
    Escriure "Quadrant: ", Q
FI_SEQÜÈNCIA` },
 { id: 'ous', wk: 3, k: 'cond', src: B2('en l\'estil de S03 · La Botiga dels Ous', 'al estilo de S03 · La Botiga dels Ous'), t: B2('Preu dels ous', 'Precio de los huevos'),
   q: B2('La dotzena d\'ous costa 2,40 € i l\'ou solt 0,25 €. Llegiu quants ous es compren i escriviu el preu, cobrant les dotzenes senceres com a dotzena.', 'La docena de huevos cuesta 2,40 € y el huevo suelto 0,25 €. Leed cuántos huevos se compran y escribid el precio, cobrando las docenas enteras como docena.'),
   tests: [{ in: [30], out: [6.3] }, { in: [12], out: [2.4] }, { in: [5], out: [1.25] }, { in: [0], out: [0] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    N              Natural  Nombre d'ous
  S    Preu           Real     Preu total en euros
INICI_SEQÜÈNCIA
    Llegir N
    Preu ← (N ‖ 12) · 2.40 + (N |R 12) · 0.25
    Escriure "Preu: ", Preu, " €"
FI_SEQÜÈNCIA` },
 { id: 'parking', wk: 3, k: 'cond', src: B2('en l\'estil de S03 · El Pàrking', 'al estilo de S03 · El Pàrking'), t: B2('Tarifa d\'un pàrquing', 'Tarifa de un parking'),
   q: B2('La primera hora (fins a 60 min) costa 2 €; cada fracció de 30 min addicional, 1 € més; el màxim diari és de 15 €. Llegiu els minuts i escriviu el preu.', 'La primera hora (hasta 60 min) cuesta 2 €; cada fracción de 30 min adicional, 1 € más; el máximo diario es de 15 €. Leed los minutos y escribid el precio.'),
   tests: [{ in: [45], out: [2] }, { in: [61], out: [3] }, { in: [90], out: [3] }, { in: [91], out: [4] }, { in: [1000], out: [15] }],
   tip: B2('Les fraccions es compten per excés: (minuts − 60 + 29) ‖ 30.', 'Las fracciones se cuentan por exceso: (minutos − 60 + 29) ‖ 30.'),
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    Minuts         Natural  Temps d'estada
  S    Preu           Natural  Preu en euros
INICI_SEQÜÈNCIA
    Llegir Minuts
    SI Minuts ≤ 60 LLAVORS
        Preu ← 2
    ALTRAMENT
        Preu ← 2 + (Minuts - 60 + 29) ‖ 30
        SI Preu > 15 LLAVORS
            Preu ← 15
        FI_SI
    FI_SI
    Escriure "Preu: ", Preu, " €"
FI_SEQÜÈNCIA` },
 { id: 'eq2', wk: 3, k: 'cond', t: B2('Solucions d\'una equació de segon grau', 'Soluciones de una ecuación de segundo grado'),
   q: B2('Llegiu a, b i c (enters, a ≠ 0) i escriviu quantes solucions reals té a·x² + b·x + c = 0.', 'Leed a, b y c (enteros, a ≠ 0) y escribid cuántas soluciones reales tiene a·x² + b·x + c = 0.'),
   tests: [{ in: [1, -3, 2], out: [2] }, { in: [1, 2, 1], out: [1] }, { in: [1, 0, 1], out: [0] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    A              Enter    Coeficient de x²
  E    B              Enter    Coeficient de x
  E    C              Enter    Terme independent
       D              Enter    Discriminant
  S    Sol            Natural  Nombre de solucions reals
INICI_SEQÜÈNCIA
    Llegir A, B, C
    {A ≠ 0}
    D ← B · B - 4 · A · C
    SI D > 0 LLAVORS
        Sol ← 2
    ALTRAMENT
        SI D = 0 LLAVORS
            Sol ← 1
        ALTRAMENT
            Sol ← 0
        FI_SI
    FI_SI
    Escriure "Solucions reals: ", Sol
FI_SEQÜÈNCIA` },
 /* ---------- setmana 4: recorregut ---------- */
 { id: 'sumaN', wk: 4, k: 'rec', t: B2('Suma dels N primers naturals', 'Suma de los N primeros naturales'),
   q: B2('Llegiu N i escriviu 1 + 2 + … + N (exemple de la teoria, amb DES_DE).', 'Leed N y escribid 1 + 2 + … + N (ejemplo de la teoría, con DES_DE).'),
   tests: [{ in: [5], out: [15] }, { in: [0], out: [0] }, { in: [100], out: [5050] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    N              Natural  Quantitat de nombres
  S    Resultat       Natural  Suma
       i              Natural  Índex (capçal)
INICI_SEQÜÈNCIA
    Llegir N
    Resultat ← 0
    DES_DE i ← 1 FINS N Increment 1 FER
        Resultat ← Resultat + i
    FI_DES_DE
    {Resultat = 1 + 2 + … + N}
    Escriure "Suma: ", Resultat
FI_SEQÜÈNCIA` },
 { id: 'fact', wk: 4, k: 'rec', t: B2('Factorial', 'Factorial'),
   q: B2('Llegiu un natural N i escriviu N! (0! = 1).', 'Leed un natural N y escribid N! (0! = 1).'),
   tests: [{ in: [5], out: [120] }, { in: [0], out: [1] }, { in: [1], out: [1] }, { in: [10], out: [3628800] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    N              Natural  Nombre
  S    F              Natural  Factorial de N
       i              Natural  Índex
INICI_SEQÜÈNCIA
    Llegir N
    F ← 1
    DES_DE i ← 2 FINS N Increment 1 FER
        F ← F · i
    FI_DES_DE
    Escriure N, "! = ", F
FI_SEQÜÈNCIA` },
 { id: 'mitjana', wk: 4, k: 'rec', t: B2('Mitjana d\'una seqüència amb marca', 'Media de una secuencia con marca'),
   q: B2('Llegiu notes (reals) fins a la marca −1 i escriviu-ne la mitjana. Si no n\'hi ha cap, escriviu «No hi ha notes».', 'Leed notas (reales) hasta la marca −1 y escribid su media. Si no hay ninguna, escribid «No hi ha notes».'),
   tests: [{ in: [5, 7, 9, -1], out: [7] }, { in: [-1], out: ['No'] }, { in: [4.5, 6, -1], out: [5.25] }],
   tip: B2('Recorregut sobre l\'entrada: Llegir abans del MENTRE i al final del cos. Compte a dividir entre zero.', 'Recorrido sobre la entrada: Llegir antes del MENTRE y al final del cuerpo. Cuidado con dividir entre cero.'),
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    Nota           Real     Element actual de la seqüència
  S    Mitjana        Real     Mitjana de les notes
       Suma           Real     Acumulador
       Quantes        Natural  Comptador
INICI_SEQÜÈNCIA
    Llegir Nota
    Suma ← 0
    Quantes ← 0
    MENTRE Nota ≠ -1 FER
        Suma ← Suma + Nota
        Quantes ← Quantes + 1
        Llegir Nota
    FI_MENTRE
    SI Quantes > 0 LLAVORS
        Mitjana ← Suma / Quantes
        Escriure "Mitjana: ", Mitjana
    ALTRAMENT
        Escriure "No hi ha notes"
    FI_SI
FI_SEQÜÈNCIA` },
 { id: 'maxseq', wk: 4, k: 'rec', t: B2('Màxim d\'una seqüència', 'Máximo de una secuencia'),
   q: B2('Llegiu naturals fins a la marca 0 i escriviu el més gran. Si la seqüència és buida, escriviu «Buida».', 'Leed naturales hasta la marca 0 y escribid el mayor. Si la secuencia está vacía, escribid «Buida».'),
   tests: [{ in: [4, 17, 9, 0], out: [17] }, { in: [0], out: ['Buida'] }, { in: [8, 0], out: [8] }],
   tip: B2('El màxim s\'inicialitza amb el primer element, no amb 0.', 'El máximo se inicializa con el primer elemento, no con 0.'),
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    A              Natural  Element actual
  S    Max            Natural  Màxim de la seqüència
INICI_SEQÜÈNCIA
    Llegir A
    SI A = 0 LLAVORS
        Escriure "Buida"
    ALTRAMENT
        Max ← A
        Llegir A
        MENTRE A ≠ 0 FER
            SI A > Max LLAVORS
                Max ← A
            FI_SI
            Llegir A
        FI_MENTRE
        Escriure "Màxim: ", Max
    FI_SI
FI_SEQÜÈNCIA` },
 { id: 'parells', wk: 4, k: 'rec', t: B2('Comptar parells', 'Contar pares'),
   q: B2('Llegiu naturals fins a la marca 0 i escriviu quants són parells.', 'Leed naturales hasta la marca 0 y escribid cuántos son pares.'),
   tests: [{ in: [4, 7, 10, 3, 0], out: [2] }, { in: [0], out: [0] }, { in: [1, 3, 5, 0], out: [0] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    A              Natural  Element actual
  S    Parells        Natural  Comptador de parells
INICI_SEQÜÈNCIA
    Llegir A
    Parells ← 0
    MENTRE A ≠ 0 FER
        SI A |R 2 = 0 LLAVORS
            Parells ← Parells + 1
        FI_SI
        Llegir A
    FI_MENTRE
    Escriure "Parells: ", Parells
FI_SEQÜÈNCIA` },
 { id: 'xifres', wk: 4, k: 'rec', t: B2('Nombre de xifres', 'Número de cifras'),
   q: B2('Llegiu un natural i escriviu quantes xifres té.', 'Leed un natural y escribid cuántas cifras tiene.'),
   tests: [{ in: [7], out: [1] }, { in: [1234], out: [4] }, { in: [1000], out: [4] }, { in: [0], out: [1] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    N              Natural  Nombre
  S    Xifres         Natural  Nombre de xifres
INICI_SEQÜÈNCIA
    Llegir N
    Xifres ← 1
    MENTRE N ≥ 10 FER
        N ← N ‖ 10
        Xifres ← Xifres + 1
    FI_MENTRE
    Escriure "Xifres: ", Xifres
FI_SEQÜÈNCIA` },
 { id: 'invertir', wk: 4, k: 'rec', t: B2('Invertir les xifres', 'Invertir las cifras'),
   q: B2('Llegiu un natural i escriviu-lo amb les xifres al revés (1230 dona 321).', 'Leed un natural y escribidlo con las cifras al revés (1230 da 321).'),
   tests: [{ in: [123], out: [321] }, { in: [1230], out: [321] }, { in: [5], out: [5] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    N              Natural  Nombre
  S    Inv            Natural  Nombre invertit
INICI_SEQÜÈNCIA
    Llegir N
    Inv ← 0
    MENTRE N > 0 FER
        Inv ← Inv · 10 + N |R 10
        N ← N ‖ 10
    FI_MENTRE
    Escriure "Invertit: ", Inv
FI_SEQÜÈNCIA` },
 { id: 'taula', wk: 4, k: 'rec', t: B2('Taula de multiplicar', 'Tabla de multiplicar'),
   q: B2('Llegiu N i escriviu la seva taula de multiplicar de l\'1 al 10, una línia per producte.', 'Leed N y escribid su tabla de multiplicar del 1 al 10, una línea por producto.'),
   tests: [{ in: [7], out: [7, 14, 21, 28, 35, 42, 49, 56, 63, 70] }, { in: [1], out: [1, 2, 3, 10] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    N              Natural  Nombre de la taula
       i              Natural  Multiplicador
INICI_SEQÜÈNCIA
    Llegir N
    DES_DE i ← 1 FINS 10 Increment 1 FER
        Escriure N, " · ", i, " = ", N · i
    FI_DES_DE
FI_SEQÜÈNCIA` },
 { id: 'rock', wk: 4, k: 'rec', src: B2('en l\'estil de S04 · El Concert de Rock', 'al estilo de S04 · El Concert de Rock'), t: B2('Edats al concert', 'Edades en el concierto'),
   q: B2('Llegiu les edats dels assistents fins a la marca 0. Escriviu quants són menors d\'edat (< 18) i l\'edat més gran.', 'Leed las edades de los asistentes hasta la marca 0. Escribid cuántos son menores de edad (< 18) y la edad mayor.'),
   tests: [{ in: [25, 16, 40, 17, 0], out: [2, 40] }, { in: [18, 0], out: [0, 18] }, { in: [12, 0], out: [1, 12] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    Edat           Natural  Edat actual
  S    Menors         Natural  Comptador de menors
  S    Gran           Natural  Edat màxima
INICI_SEQÜÈNCIA
    Llegir Edat
    {la seqüència té almenys una edat}
    Menors ← 0
    Gran ← Edat
    MENTRE Edat ≠ 0 FER
        SI Edat < 18 LLAVORS
            Menors ← Menors + 1
        FI_SI
        SI Edat > Gran LLAVORS
            Gran ← Edat
        FI_SI
        Llegir Edat
    FI_MENTRE
    Escriure "Menors: ", Menors, " Edat màxima: ", Gran
FI_SEQÜÈNCIA` },
 { id: 'run', wk: 4, k: 'rec', src: B2('en l\'estil d\'AndorraRun', 'al estilo de AndorraRun'), t: B2('Temps d\'una cursa', 'Tiempos de una carrera'),
   q: B2('Llegiu els temps en minuts dels corredors fins a la marca −1. Escriviu el millor temps i quants han baixat de 60 minuts.', 'Leed los tiempos en minutos de los corredores hasta la marca −1. Escribid el mejor tiempo y cuántos han bajado de 60 minutos.'),
   tests: [{ in: [72, 58, 65, 49, -1], out: [49, 2] }, { in: [61, -1], out: [61, 0] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    T              Enter    Temps actual
  S    Millor         Enter    Temps mínim
  S    Rapids         Natural  Corredors per sota de 60 min
INICI_SEQÜÈNCIA
    Llegir T
    {hi ha almenys un corredor}
    Millor ← T
    Rapids ← 0
    MENTRE T ≠ -1 FER
        SI T < Millor LLAVORS
            Millor ← T
        FI_SI
        SI T < 60 LLAVORS
            Rapids ← Rapids + 1
        FI_SI
        Llegir T
    FI_MENTRE
    Escriure "Millor: ", Millor, " Per sota de 60: ", Rapids
FI_SEQÜÈNCIA` },
 /* ---------- setmana 4: cerca ---------- */
 { id: 'acaba3', wk: 4, k: 'cerca', t: B2('Primer nombre acabat en 3', 'Primer número acabado en 3'),
   q: B2('Llegiu dos naturals N1 ≤ N2 i escriviu el primer nombre entre N1 i N2 que acaba en 3, o −1 si no n\'hi ha (exemple de la teoria).', 'Leed dos naturales N1 ≤ N2 y escribid el primer número entre N1 y N2 que acaba en 3, o −1 si no hay (ejemplo de la teoría).'),
   tests: [{ in: [5, 20], out: [13] }, { in: [14, 22], out: [-1] }, { in: [3, 3], out: [3] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    N1             Natural  Inici de l'interval
  E    N2             Natural  Final de l'interval
  S    Resultat       Enter    Nombre trobat o -1
       i              Natural  Capçal
       Trobat         Lògic    Cert si s'ha trobat
INICI_SEQÜÈNCIA
    Llegir N1, N2
    i ← N1
    Trobat ← fals
    MENTRE (i ≤ N2) I (NO Trobat) FER
        SI i |R 10 = 3 LLAVORS
            Trobat ← cert
        ALTRAMENT
            i ← i + 1
        FI_SI
    FI_MENTRE
    SI Trobat LLAVORS
        Resultat ← i
    ALTRAMENT
        Resultat ← -1
    FI_SI
    Escriure Resultat
FI_SEQÜÈNCIA` },
 { id: 'primer', wk: 4, k: 'cerca', src: B2('en l\'estil d\'Els primers', 'al estilo de Els primers'), t: B2('És primer?', '¿Es primo?'),
   q: B2('Llegiu un natural N i escriviu «Sí» si és primer i «No» si no ho és. Feu-ho com una cerca d\'un divisor.', 'Leed un natural N y escribid «Sí» si es primo y «No» si no lo es. Hacedlo como una búsqueda de un divisor.'),
   tests: [{ in: [2], out: ['si'] }, { in: [9], out: ['no'] }, { in: [13], out: ['si'] }, { in: [1], out: ['no'] }, { in: [97], out: ['si'] }],
   tip: B2('És una cerca: es busca un divisor entre 2 i N − 1; si no se\'n troba cap, és primer.', 'Es una búsqueda: se busca un divisor entre 2 y N − 1; si no se encuentra ninguno, es primo.'),
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    N              Natural  Nombre a comprovar
       D              Natural  Possible divisor (capçal)
       Trobat         Lògic    Cert si hi ha un divisor
INICI_SEQÜÈNCIA
    Llegir N
    D ← 2
    Trobat ← fals
    MENTRE (D < N) I (NO Trobat) FER
        SI N |R D = 0 LLAVORS
            Trobat ← cert
        ALTRAMENT
            D ← D + 1
        FI_SI
    FI_MENTRE
    SI (N > 1) I (NO Trobat) LLAVORS
        Escriure "Sí"
    ALTRAMENT
        Escriure "No"
    FI_SI
FI_SEQÜÈNCIA` },
 { id: 'negatiu', wk: 4, k: 'cerca', t: B2('Primer negatiu d\'una seqüència', 'Primer negativo de una secuencia'),
   q: B2('Llegiu enters fins a la marca 0 i escriviu la posició (1, 2, …) del primer negatiu, o −1 si no n\'hi ha. No cal llegir la resta de la seqüència un cop trobat.', 'Leed enteros hasta la marca 0 y escribid la posición (1, 2, …) del primer negativo, o −1 si no hay. No hace falta leer el resto de la secuencia una vez encontrado.'),
   tests: [{ in: [4, 7, -2, 5, -8, 0], out: [3] }, { in: [1, 2, 0], out: [-1] }, { in: [-5, 0], out: [1] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    A              Enter    Element actual
  S    Pos            Enter    Posició del primer negatiu o -1
       Trobat         Lògic    Cert si s'ha trobat
INICI_SEQÜÈNCIA
    Llegir A
    Pos ← 1
    Trobat ← fals
    MENTRE (A ≠ 0) I (NO Trobat) FER
        SI A < 0 LLAVORS
            Trobat ← cert
        ALTRAMENT
            Llegir A
            Pos ← Pos + 1
        FI_SI
    FI_MENTRE
    SI NO Trobat LLAVORS
        Pos ← -1
    FI_SI
    Escriure "Posició: ", Pos
FI_SEQÜÈNCIA` },
 { id: 'multiple', wk: 4, k: 'cerca', t: B2('Primer múltiple en un interval', 'Primer múltiplo en un intervalo'),
   q: B2('Llegiu K, N1 i N2 i escriviu el primer múltiple de K entre N1 i N2, o −1 si no n\'hi ha.', 'Leed K, N1 y N2 y escribid el primer múltiplo de K entre N1 y N2, o −1 si no hay.'),
   tests: [{ in: [7, 20, 30], out: [21] }, { in: [7, 22, 27], out: [-1] }, { in: [5, 10, 12], out: [10] }],
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    K              Natural  Divisor
  E    N1             Natural  Inici
  E    N2             Natural  Final
  S    Res            Enter    Múltiple trobat o -1
       i              Natural  Capçal
       Trobat         Lògic    Cert si s'ha trobat
INICI_SEQÜÈNCIA
    Llegir K, N1, N2
    {K > 0}
    i ← N1
    Trobat ← fals
    MENTRE (i ≤ N2) I (NO Trobat) FER
        SI i |R K = 0 LLAVORS
            Trobat ← cert
        ALTRAMENT
            i ← i + 1
        FI_SI
    FI_MENTRE
    SI Trobat LLAVORS
        Res ← i
    ALTRAMENT
        Res ← -1
    FI_SI
    Escriure Res
FI_SEQÜÈNCIA` },
 { id: 'endevina', wk: 4, k: 'rec', src: B2('en l\'estil de S04 · Endevina el Nombre', 'al estilo de S04 · Endevina el Nombre'), t: B2('Endevina el nombre', 'Adivina el número'),
   q: B2('Llegiu el nombre secret S i després intents fins que algun coincideixi. Escriviu quants intents s\'han necessitat. Feu-ho amb REPETEIX … FINS_QUE.', 'Leed el número secreto S y después intentos hasta que alguno coincida. Escribid cuántos intentos han hecho falta. Hacedlo con REPETEIX … FINS_QUE.'),
   tests: [{ in: [42, 50, 30, 42], out: [3] }, { in: [7, 7], out: [1] }],
   tip: B2('Com a mínim es fa un intent: és el cas típic de REPETEIX.', 'Como mínimo se hace un intento: es el caso típico de REPETEIX.'),
   sol: `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    S              Natural  Nombre secret
  E    X              Natural  Intent actual
  S    Intents        Natural  Comptador d'intents
INICI_SEQÜÈNCIA
    Llegir S
    Intents ← 0
    REPETEIX
        Llegir X
        Intents ← Intents + 1
    FINS_QUE X = S
    Escriure "Intents: ", Intents
FI_SEQÜÈNCIA` }
];
