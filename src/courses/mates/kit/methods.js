/**
 * Mètodes d'examen de Matemàtiques, per tema (vegeu src/courses/_kit/Methods.jsx): trucs, exercicis
 * resolts pas a pas (els dels CP i els fulls, citats del banc, i alguns de nous) i què fer el dia de l'examen.
 */
const r = String.raw;
const L3 = (ca, es, en) => [ca, es, en];
const tricks = (title, items) => ({ t: 'method', title, items });
const day = (items) => [{ t: 'list', items }];
const H = L3('Exercicis tipus examen resolts', 'Ejercicios tipo examen resueltos', 'Exam-style exercises, solved');

const conj = {
  solvedH: H,
  tricks: [
    tricks(L3('Demostrar una igualtat de conjunts', 'Demostrar una igualdad de conjuntos', 'Proving a set identity'), [
      L3('Hi ha dues vies: la **doble inclusió** (un element de l\'esquerra és de la dreta, i al revés) o una **cadena de lleis** (De Morgan, distributiva, complementari), amb el nom de la llei a cada pas.',
        'Hay dos vías: la **doble inclusión** (un elemento de la izquierda es de la derecha, y al revés) o una **cadena de leyes** (De Morgan, distributiva, complementario), con el nombre de la ley en cada paso.',
        'There are two routes: **double inclusion** (an element of the left side is in the right side, and vice versa) or a **chain of laws** (De Morgan, distributive, complement), naming the law at every step.'),
      L3(r`Si hi ha diferències, passa-les primer a intersecció: $A \setminus B = A \cap \overline{B}$. Després només queden $\cup$, $\cap$ i complementaris.`,
        r`Si hay diferencias, pásalas primero a intersección: $A \setminus B = A \cap \overline{B}$. Después solo quedan $\cup$, $\cap$ y complementarios.`,
        r`If there are differences, turn them into intersections first: $A \setminus B = A \cap \overline{B}$. Then only $\cup$, $\cap$ and complements remain.`),
      L3(r`Davant del complementari d'una unió o d'una intersecció, De Morgan abans de res: $\overline{A \cup B} = \overline{A} \cap \overline{B}$.`,
        r`Ante el complementario de una unión o de una intersección, De Morgan antes que nada: $\overline{A \cup B} = \overline{A} \cap \overline{B}$.`,
        r`Faced with the complement of a union or an intersection, De Morgan first: $\overline{A \cup B} = \overline{A} \cap \overline{B}$.`),
      L3('Abans de demostrar, comprova-ho amb un Venn o amb conjunts petits. Si no surt igual, el que cal és un contraexemple.',
        'Antes de demostrar, compruébalo con un Venn o con conjuntos pequeños. Si no sale igual, lo que hace falta es un contraejemplo.',
        'Before proving it, check it with a Venn diagram or with small sets. If the two sides differ, what you need is a counterexample.'),
    ]),
    tricks(L3('Implicacions, inclusions i cert o fals', 'Implicaciones, inclusiones y cierto o falso', 'Implications, inclusions and true or false'), [
      L3(r`Per demostrar «$A \subseteq B$ implica…», escriu la hipòtesi com $x \in A \Rightarrow x \in B$ i fes-la servir just al pas on cal.`,
        r`Para demostrar «$A \subseteq B$ implica…», escribe la hipótesis como $x \in A \Rightarrow x \in B$ y úsala justo en el paso donde hace falta.`,
        r`To prove «$A \subseteq B$ implies…», write the hypothesis as $x \in A \Rightarrow x \in B$ and use it exactly at the step that needs it.`),
      L3(r`Per veure que un conjunt és tot $\Omega$, n'hi ha prou amb $\supseteq$: l'altra inclusió sempre és certa.`,
        r`Para ver que un conjunto es todo $\Omega$, basta con $\supseteq$: la otra inclusión siempre es cierta.`,
        r`To show that a set is all of $\Omega$, $\supseteq$ is enough: the other inclusion always holds.`),
      L3('Si l\'afirmació és falsa, n\'hi ha prou amb **un** contraexemple concret, amb conjunts de dos o tres elements.',
        'Si la afirmación es falsa, basta con **un** contraejemplo concreto, con conjuntos de dos o tres elementos.',
        'If the statement is false, **one** concrete counterexample is enough, with sets of two or three elements.'),
    ]),
    tricks(L3('Parts, cardinals i producte cartesià', 'Partes, cardinales y producto cartesiano', 'Power sets, cardinalities and Cartesian products'), [
      L3(r`$|\mathcal{P}(A)| = 2^{|A|}$, i $\emptyset$ i $A$ sempre en són elements.`,
        r`$|\mathcal{P}(A)| = 2^{|A|}$, y $\emptyset$ y $A$ siempre son elementos suyos.`,
        r`$|\mathcal{P}(A)| = 2^{|A|}$, and $\emptyset$ and $A$ are always elements of it.`),
      L3(r`$|A \times B| = |A| \cdot |B|$, i l'ordre de la parella importa: $(a, b) \ne (b, a)$ si $a \ne b$.`,
        r`$|A \times B| = |A| \cdot |B|$, y el orden del par importa: $(a, b) \ne (b, a)$ si $a \ne b$.`,
        r`$|A \times B| = |A| \cdot |B|$, and the order inside the pair matters: $(a, b) \ne (b, a)$ if $a \ne b$.`),
      L3(r`$\emptyset \subseteq X$ sempre és cert; $\emptyset \in X$ només si $\emptyset$ és un dels elements de $X$.`,
        r`$\emptyset \subseteq X$ siempre es cierto; $\emptyset \in X$ solo si $\emptyset$ es uno de los elementos de $X$.`,
        r`$\emptyset \subseteq X$ is always true; $\emptyset \in X$ only if $\emptyset$ is one of the elements of $X$.`),
      L3(r`Amb productes cartesians, la doble inclusió es fa amb parelles: $(x, y) \in (A \setminus B) \times C \iff x \in A,\ x \notin B,\ y \in C$.`,
        r`Con productos cartesianos, la doble inclusión se hace con pares: $(x, y) \in (A \setminus B) \times C \iff x \in A,\ x \notin B,\ y \in C$.`,
        r`With Cartesian products, double inclusion works with pairs: $(x, y) \in (A \setminus B) \times C \iff x \in A,\ x \notin B,\ y \in C$.`),
    ]),
  ],
  solved: [
    { ref: 'm-cp1e11', day: L3('Escriu el nom de la llei a cada igualtat: és el que es puntua.', 'Escribe el nombre de la ley en cada igualdad: es lo que se puntúa.', 'Write the name of the law at each equality: that is what earns the marks.') },
    { ref: 'm-cp1e2' },
    { ref: 'm-cp1e12' },
  ],
  day: day([
    L3('**Redacció:** una llei per pas, amb el nom. Una igualtat sense justificar no puntua.', '**Redacción:** una ley por paso, con el nombre. Una igualdad sin justificar no puntúa.', '**Write-up:** one law per step, with its name. An unjustified equality earns nothing.'),
    L3('**Comprovació:** un Venn ràpid al marge abans de passar-ho en net.', '**Comprobación:** un Venn rápido en el margen antes de pasarlo a limpio.', '**Check:** a quick Venn diagram in the margin before writing the final version.'),
    L3(r`**Convenció del curs:** $\mathbb{N} = \{1, 2, 3, \ldots\}$; el 0 no és natural.`, r`**Convención del curso:** $\mathbb{N} = \{1, 2, 3, \ldots\}$; el 0 no es natural.`, r`**Course convention:** $\mathbb{N} = \{1, 2, 3, \ldots\}$; 0 is not a natural number.`),
    L3('**Si s\'encalla:** canvia de via (doble inclusió ↔ lleis) en lloc d\'insistir.', '**Si se atasca:** cambia de vía (doble inclusión ↔ leyes) en lugar de insistir.', '**If you get stuck:** switch routes (double inclusion ↔ laws) instead of insisting.'),
  ]),
};

const rel = {
  solvedH: H,
  tricks: [
    tricks(L3('Les quatre propietats', 'Las cuatro propiedades', 'The four properties'), [
      L3(r`**Reflexiva:** $x \mathcal{R} x$ per a tot $x$ (al graf, un bucle a cada vèrtex). **Simètrica:** si $x \mathcal{R} y$, aleshores $y \mathcal{R} x$.`,
        r`**Reflexiva:** $x \mathcal{R} x$ para todo $x$ (en el grafo, un bucle en cada vértice). **Simétrica:** si $x \mathcal{R} y$, entonces $y \mathcal{R} x$.`,
        r`**Reflexive:** $x \mathcal{R} x$ for every $x$ (in the graph, a loop at every vertex). **Symmetric:** if $x \mathcal{R} y$, then $y \mathcal{R} x$.`),
      L3(r`**Antisimètrica:** si $x \mathcal{R} y$ i $y \mathcal{R} x$, aleshores $x = y$. **Transitiva:** si $x \mathcal{R} y$ i $y \mathcal{R} z$, aleshores $x \mathcal{R} z$.`,
        r`**Antisimétrica:** si $x \mathcal{R} y$ e $y \mathcal{R} x$, entonces $x = y$. **Transitiva:** si $x \mathcal{R} y$ e $y \mathcal{R} z$, entonces $x \mathcal{R} z$.`,
        r`**Antisymmetric:** if $x \mathcal{R} y$ and $y \mathcal{R} x$, then $x = y$. **Transitive:** if $x \mathcal{R} y$ and $y \mathcal{R} z$, then $x \mathcal{R} z$.`),
      L3('Per demostrar una propietat, lletres generals; per negar-la, **un contraexemple** amb nombres.', 'Para demostrar una propiedad, letras generales; para negarla, **un contraejemplo** con números.', 'To prove a property, use general letters; to refute it, **one counterexample** with numbers.'),
      L3('Simètrica i antisimètrica no són contràries: la igualtat és les dues coses, i n\'hi ha que no són cap.', 'Simétrica y antisimétrica no son contrarias: la igualdad es las dos cosas, y hay relaciones que no son ninguna.', 'Symmetric and antisymmetric are not opposites: equality is both, and some relations are neither.'),
    ]),
    tricks(L3('Equivalència i classes', 'Equivalencia y clases', 'Equivalence and classes'), [
      L3('Demostra reflexiva, simètrica i transitiva per separat, cadascuna amb la definició aplicada.', 'Demuestra reflexiva, simétrica y transitiva por separado, cada una con la definición aplicada.', 'Prove reflexive, symmetric and transitive separately, each one by applying the definition.'),
      L3(r`«Mateix residu mòdul $n$» o «$n$ divideix $x - y$»: escriu $x - y = n k$ amb $k \in \mathbb{Z}$. Hi ha $n$ classes: $[0], [1], \ldots, [n - 1]$.`,
        r`«Mismo resto módulo $n$» o «$n$ divide a $x - y$»: escribe $x - y = n k$ con $k \in \mathbb{Z}$. Hay $n$ clases: $[0], [1], \ldots, [n - 1]$.`,
        r`«Same remainder modulo $n$» or «$n$ divides $x - y$»: write $x - y = n k$ with $k \in \mathbb{Z}$. There are $n$ classes: $[0], [1], \ldots, [n - 1]$.`),
      L3('Les classes formen una partició: cap no és buida, són disjuntes dues a dues i la unió és tot el conjunt.', 'Las clases forman una partición: ninguna es vacía, son disjuntas dos a dos y la unión es todo el conjunto.', 'The classes form a partition: none is empty, they are pairwise disjoint and their union is the whole set.'),
      L3(r`Compte amb els negatius: $-3 = 5 \cdot (-1) + 2$, així que $-3 \in [2]$ mòdul 5.`, r`Cuidado con los negativos: $-3 = 5 \cdot (-1) + 2$, así que $-3 \in [2]$ módulo 5.`, r`Watch out for negatives: $-3 = 5 \cdot (-1) + 2$, so $-3 \in [2]$ modulo 5.`),
    ]),
    tricks(L3('Ordres i diagrames de Hasse', 'Órdenes y diagramas de Hasse', 'Orders and Hasse diagrams'), [
      L3('Ordre = reflexiva + antisimètrica + transitiva. És **total** si dos elements qualssevol són comparables; si no, **parcial**.', 'Orden = reflexiva + antisimétrica + transitiva. Es **total** si dos elementos cualesquiera son comparables; si no, **parcial**.', 'Order = reflexive + antisymmetric + transitive. It is **total** if any two elements are comparable; otherwise **partial**.'),
      L3('Hasse: només les relacions immediates, sense bucles ni dreceres, i el més petit a baix.', 'Hasse: solo las relaciones inmediatas, sin bucles ni atajos, y el más pequeño abajo.', 'Hasse: only the immediate relations, with no loops or shortcuts, and the smallest element at the bottom.'),
      L3('Minimal: no té res a sota. Mínim: és a sota de tots (pot no existir). El mateix per a maximal i màxim.', 'Minimal: no tiene nada debajo. Mínimo: está debajo de todos (puede no existir). Lo mismo para maximal y máximo.', 'Minimal: nothing below it. Minimum: below every element (it may not exist). The same for maximal and maximum.'),
    ]),
  ],
  solved: [
    { ref: 'm-cp1e4', day: L3('Dona els elements de cada classe amb negatius inclosos: demostra que entens el residu.', 'Da los elementos de cada clase con negativos incluidos: demuestra que entiendes el resto.', 'List elements of each class including negatives: it shows you understand remainders.') },
    { ref: 'm-cp1e51' },
    { ref: 'm-f1e6' },
  ],
  day: day([
    L3('**Redacció:** per a cada propietat, la definició aplicada i la conclusió, en dues o tres línies.', '**Redacción:** para cada propiedad, la definición aplicada y la conclusión, en dos o tres líneas.', '**Write-up:** for each property, the definition applied and the conclusion, in two or three lines.'),
    L3('**Hasse:** abans de lliurar, revisa que no quedi cap drecera (si hi ha a → b → c, no hi va a → c).', '**Hasse:** antes de entregar, revisa que no quede ningún atajo (si hay a → b → c, no va a → c).', '**Hasse:** before handing in, check there are no shortcuts left (if there is a → b → c, a → c does not go in).'),
    L3('**Temps:** una equivalència completa amb classes són 10–12 minuts; no t\'hi entretinguis més.', '**Tiempo:** una equivalencia completa con clases son 10–12 minutos; no te entretengas más.', '**Time:** a full equivalence with its classes takes 10–12 minutes; do not linger beyond that.'),
  ]),
};

const nomb = {
  solvedH: H,
  tricks: [
    tricks(L3('Inducció en quatre passos', 'Inducción en cuatro pasos', 'Induction in four steps'), [
      L3(r`**Cas base:** comprova $P(1)$ (al curs, el primer natural és 1).`, r`**Caso base:** comprueba $P(1)$ (en el curso, el primer natural es 1).`, r`**Base case:** check $P(1)$ (in this course, the first natural number is 1).`),
      L3(r`**Hipòtesi d'inducció:** suposa $P(k)$ i escriu-la sencera.`, r`**Hipótesis de inducción:** supón $P(k)$ y escríbela entera.`, r`**Induction hypothesis:** assume $P(k)$ and write it out in full.`),
      L3(r`**Pas:** escriu $P(k + 1)$, que és on vols arribar, i parteix d'un costat.`, r`**Paso:** escribe $P(k + 1)$, que es adonde quieres llegar, y parte de un lado.`, r`**Step:** write $P(k + 1)$, which is where you want to arrive, and start from one side.`),
      L3('Fes servir la hipòtesi (digues on: «per HI») i opera fins a l\'altre costat. Conclusió: «per inducció, es compleix per a tot n ∈ ℕ».', 'Usa la hipótesis (di dónde: «por HI») y opera hasta el otro lado. Conclusión: «por inducción, se cumple para todo n ∈ ℕ».', 'Use the hypothesis (say where: «by IH») and work until you reach the other side. Conclusion: «by induction, it holds for every n ∈ ℕ».'),
    ]),
    tricks(L3('Sumes i divisibilitat', 'Sumas y divisibilidad', 'Sums and divisibility'), [
      L3(r`En una suma, $S_{k+1} = S_k + (\text{terme nou})$: substitueix $S_k$ per la hipòtesi.`, r`En una suma, $S_{k+1} = S_k + (\text{término nuevo})$: sustituye $S_k$ por la hipótesis.`, r`In a sum, $S_{k+1} = S_k + (\text{new term})$: replace $S_k$ using the hypothesis.`),
      L3(r`En divisibilitat, escriu la hipòtesi com una igualtat ($a^k - 1 = m q$) i aïlla la potència ($a^k = m q + 1$).`, r`En divisibilidad, escribe la hipótesis como una igualdad ($a^k - 1 = m q$) y despeja la potencia ($a^k = m q + 1$).`, r`For divisibility, write the hypothesis as an equation ($a^k - 1 = m q$) and isolate the power ($a^k = m q + 1$).`),
      L3('Treu factor comú abans de desenvolupar: menys comptes i menys errors.', 'Saca factor común antes de desarrollar: menos cuentas y menos errores.', 'Factor out before expanding: fewer calculations and fewer mistakes.'),
    ]),
    tricks(L3('Valor absolut, intervals i suprem', 'Valor absoluto, intervalos y supremo', 'Absolute value, intervals and supremum'), [
      L3(r`$|x - a| \le b \iff a - b \le x \le a + b$: els punts a distància com a molt $b$ de $a$.`, r`$|x - a| \le b \iff a - b \le x \le a + b$: los puntos a distancia como mucho $b$ de $a$.`, r`$|x - a| \le b \iff a - b \le x \le a + b$: the points at distance at most $b$ from $a$.`),
      L3(r`$|x - a| \ge b$ són dos trossos: $x \le a - b$ o bé $x \ge a + b$.`, r`$|x - a| \ge b$ son dos trozos: $x \le a - b$ o bien $x \ge a + b$.`, r`$|x - a| \ge b$ is two pieces: $x \le a - b$ or $x \ge a + b$.`),
      L3('Suprem: la cota superior més petita. No cal que sigui del conjunt; si ho és, és el màxim.', 'Supremo: la cota superior más pequeña. No hace falta que sea del conjunto; si lo es, es el máximo.', 'Supremum: the least upper bound. It need not belong to the set; if it does, it is the maximum.'),
    ]),
  ],
  solved: [
    { ref: 'm-cp2e2', day: L3('Marca amb «per HI» el pas on fas servir la hipòtesi: sense això, la demostració no compta.', 'Marca con «por HI» el paso donde usas la hipótesis: sin eso, la demostración no cuenta.', 'Mark the step where you use the hypothesis with «by IH»: without it, the proof does not count.') },
    { id: 'nomb-m-1', srcName: L3('Tipus examen · divisibilitat per inducció', 'Tipo examen · divisibilidad por inducción', 'Exam style · divisibility by induction'),
      q: L3(r`Demostreu per inducció que $3^n - 1$ és múltiple de 2 per a tot $n \in \mathbb{N}$.`, r`Demostrad por inducción que $3^n - 1$ es múltiplo de 2 para todo $n \in \mathbb{N}$.`, r`Prove by induction that $3^n - 1$ is a multiple of 2 for every $n \in \mathbb{N}$.`),
      steps: [
        L3(r`**Cas base** ($n = 1$): $3^1 - 1 = 2$, que és múltiple de 2.`, r`**Caso base** ($n = 1$): $3^1 - 1 = 2$, que es múltiplo de 2.`, r`**Base case** ($n = 1$): $3^1 - 1 = 2$, which is a multiple of 2.`),
        L3(r`**Hipòtesi:** $3^k - 1 = 2q$ per a algun $q \in \mathbb{Z}$; és a dir, $3^k = 2q + 1$.`, r`**Hipótesis:** $3^k - 1 = 2q$ para algún $q \in \mathbb{Z}$; es decir, $3^k = 2q + 1$.`, r`**Hypothesis:** $3^k - 1 = 2q$ for some $q \in \mathbb{Z}$; that is, $3^k = 2q + 1$.`),
        { x: L3(r`**Pas:** $3^{k+1} - 1 = 3 \cdot 3^k - 1 = 3(2q + 1) - 1 = 6q + 2 = 2(3q + 1)$.`, r`**Paso:** $3^{k+1} - 1 = 3 \cdot 3^k - 1 = 3(2q + 1) - 1 = 6q + 2 = 2(3q + 1)$.`, r`**Step:** $3^{k+1} - 1 = 3 \cdot 3^k - 1 = 3(2q + 1) - 1 = 6q + 2 = 2(3q + 1)$.`),
          why: L3(r`La hipòtesi entra en substituir $3^k$ per $2q + 1$.`, r`La hipótesis entra al sustituir $3^k$ por $2q + 1$.`, r`The hypothesis comes in when $3^k$ is replaced by $2q + 1$.`) },
        L3(r`$3q + 1 \in \mathbb{Z}$, així que $3^{k+1} - 1$ és múltiple de 2. **Per inducció**, es compleix per a tot $n \in \mathbb{N}$.`, r`$3q + 1 \in \mathbb{Z}$, así que $3^{k+1} - 1$ es múltiplo de 2. **Por inducción**, se cumple para todo $n \in \mathbb{N}$.`, r`$3q + 1 \in \mathbb{Z}$, so $3^{k+1} - 1$ is a multiple of 2. **By induction**, it holds for every $n \in \mathbb{N}$.`),
      ],
      day: L3('En divisibilitat, el truc sempre és el mateix: aïllar la potència de la hipòtesi i substituir-la.', 'En divisibilidad, el truco siempre es el mismo: despejar la potencia de la hipótesis y sustituirla.', 'For divisibility the trick is always the same: isolate the power from the hypothesis and substitute it.') },
  ],
  day: day([
    L3('**Cas base:** amb el primer natural del curs (1, no 0).', '**Caso base:** con el primer natural del curso (1, no 0).', '**Base case:** with the course\'s first natural number (1, not 0).'),
    L3('**Hipòtesi:** escrita sencera, amb k, abans de començar el pas.', '**Hipótesis:** escrita entera, con k, antes de empezar el paso.', '**Hypothesis:** written out in full, with k, before starting the step.'),
    L3('**Comprovació:** amb n = 2, la fórmula ha de donar el mateix que la suma feta a mà.', '**Comprobación:** con n = 2, la fórmula tiene que dar lo mismo que la suma hecha a mano.', '**Check:** with n = 2, the formula must give the same as the sum done by hand.'),
  ]),
};

const cx = {
  solvedH: H,
  tricks: [
    tricks(L3('Forma binòmica', 'Forma binómica', 'Binomial form'), [
      L3(r`Opera com amb polinomis en $i$ i substitueix $i^2 = -1$.`, r`Opera como con polinomios en $i$ y sustituye $i^2 = -1$.`, r`Work as with polynomials in $i$ and substitute $i^2 = -1$.`),
      L3('Per dividir, multiplica dalt i baix pel **conjugat** del denominador.', 'Para dividir, multiplica arriba y abajo por el **conjugado** del denominador.', 'To divide, multiply top and bottom by the **conjugate** of the denominator.'),
      L3(r`Potències de $i$: només compta el residu de l'exponent entre 4 ($i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$).`, r`Potencias de $i$: solo cuenta el resto del exponente entre 4 ($i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$).`, r`Powers of $i$: only the remainder of the exponent divided by 4 matters ($i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$).`),
    ]),
    tricks(L3('Mòdul, argument i forma polar', 'Módulo, argumento y forma polar', 'Modulus, argument and polar form'), [
      L3(r`$|z| = \sqrt{a^2 + b^2}$. Per a l'argument, **dibuixa el punt** i mira el quadrant abans de fer l'arctangent.`, r`$|z| = \sqrt{a^2 + b^2}$. Para el argumento, **dibuja el punto** y mira el cuadrante antes de hacer la arcotangente.`, r`$|z| = \sqrt{a^2 + b^2}$. For the argument, **plot the point** and check the quadrant before taking the arctangent.`),
      L3('Producte: es multipliquen els mòduls i se sumen els arguments. Quocient: es divideixen i es resten.', 'Producto: se multiplican los módulos y se suman los argumentos. Cociente: se dividen y se restan.', 'Product: multiply the moduli and add the arguments. Quotient: divide them and subtract.'),
      L3(r`De Moivre: $(r_\alpha)^n = (r^n)_{n\alpha}$. Redueix l'angle a $[0, 2\pi)$.`, r`De Moivre: $(r_\alpha)^n = (r^n)_{n\alpha}$. Reduce el ángulo a $[0, 2\pi)$.`, r`De Moivre: $(r_\alpha)^n = (r^n)_{n\alpha}$. Reduce the angle to $[0, 2\pi)$.`),
    ]),
    tricks(L3('Arrels i polinomis', 'Raíces y polinomios', 'Roots and polynomials'), [
      L3(r`Un complex no nul té exactament **$n$ arrels $n$-èssimes**, totes amb mòdul $\sqrt[n]{r}$.`, r`Un complejo no nulo tiene exactamente **$n$ raíces $n$-ésimas**, todas con módulo $\sqrt[n]{r}$.`, r`A nonzero complex number has exactly **$n$ $n$-th roots**, all with modulus $\sqrt[n]{r}$.`),
      L3(r`Arguments: $\frac{\alpha + 2\pi k}{n}$ amb $k = 0, \ldots, n - 1$. Al pla formen un polígon regular.`, r`Argumentos: $\frac{\alpha + 2\pi k}{n}$ con $k = 0, \ldots, n - 1$. En el plano forman un polígono regular.`, r`Arguments: $\frac{\alpha + 2\pi k}{n}$ with $k = 0, \ldots, n - 1$. In the plane they form a regular polygon.`),
      L3('Si el polinomi té coeficients reals, les arrels no reals surten per parelles conjugades.', 'Si el polinomio tiene coeficientes reales, las raíces no reales salen por parejas conjugadas.', 'If the polynomial has real coefficients, the non-real roots come in conjugate pairs.'),
    ]),
  ],
  solved: [
    { ref: 'm-cp2e1' },
    { id: 'cx-m-1', srcName: L3('Tipus examen · potència amb De Moivre', 'Tipo examen · potencia con De Moivre', 'Exam style · power with De Moivre'),
      q: L3(r`Calculeu $(1 + i)^8$ passant a forma polar.`, r`Calculad $(1 + i)^8$ pasando a forma polar.`, r`Compute $(1 + i)^8$ by converting to polar form.`),
      steps: [
        L3(r`$|1 + i| = \sqrt{2}$. El punt és al primer quadrant amb $a = b$: $\alpha = \frac{\pi}{4}$. Per tant, $1 + i = (\sqrt{2})_{\pi/4}$.`, r`$|1 + i| = \sqrt{2}$. El punto está en el primer cuadrante con $a = b$: $\alpha = \frac{\pi}{4}$. Por tanto, $1 + i = (\sqrt{2})_{\pi/4}$.`, r`$|1 + i| = \sqrt{2}$. The point is in the first quadrant with $a = b$: $\alpha = \frac{\pi}{4}$. Hence $1 + i = (\sqrt{2})_{\pi/4}$.`),
        L3(r`De Moivre: $(1 + i)^8 = ((\sqrt{2})^8)_{8\pi/4} = 16_{2\pi}$.`, r`De Moivre: $(1 + i)^8 = ((\sqrt{2})^8)_{8\pi/4} = 16_{2\pi}$.`, r`De Moivre: $(1 + i)^8 = ((\sqrt{2})^8)_{8\pi/4} = 16_{2\pi}$.`),
        L3(r`$2\pi$ és el mateix angle que 0: $(1 + i)^8 = 16$.`, r`$2\pi$ es el mismo ángulo que 0: $(1 + i)^8 = 16$.`, r`$2\pi$ is the same angle as 0: $(1 + i)^8 = 16$.`),
        L3(r`Comprovació: $(1 + i)^2 = 2i$ i $(2i)^4 = 16\, i^4 = 16$. ✓`, r`Comprobación: $(1 + i)^2 = 2i$ y $(2i)^4 = 16\, i^4 = 16$. ✓`, r`Check: $(1 + i)^2 = 2i$ and $(2i)^4 = 16\, i^4 = 16$. ✓`),
      ] },
  ],
  day: day([
    L3('**Argument:** dibuixa sempre el complex abans de donar-lo; és l\'error més freqüent.', '**Argumento:** dibuja siempre el complejo antes de darlo; es el error más frecuente.', '**Argument:** always plot the number before giving it; it is the most common mistake.'),
    L3('**Forma del resultat:** la que demana l\'enunciat (binòmica, polar o totes dues).', '**Forma del resultado:** la que pide el enunciado (binómica, polar o ambas).', '**Form of the answer:** the one the question asks for (binomial, polar or both).'),
    L3('**Comprovació:** eleva una de les arrels a n i mira que torni el número de partida.', '**Comprobación:** eleva una de las raíces a n y mira que vuelva el número de partida.', '**Check:** raise one of the roots to the n-th power and see that you get the original number back.'),
  ]),
};

const mat = {
  solvedH: H,
  tricks: [
    tricks(L3('Mides i producte', 'Tamaños y producto', 'Sizes and product'), [
      L3(r`$A_{m \times n} \cdot B_{n \times p} = C_{m \times p}$: les mides del mig han de coincidir.`, r`$A_{m \times n} \cdot B_{n \times p} = C_{m \times p}$: los tamaños del medio tienen que coincidir.`, r`$A_{m \times n} \cdot B_{n \times p} = C_{m \times p}$: the inner sizes must match.`),
      L3(r`L'element $c_{ij}$ és la fila $i$ de $A$ per la columna $j$ de $B$: multiplica terme a terme i suma.`, r`El elemento $c_{ij}$ es la fila $i$ de $A$ por la columna $j$ de $B$: multiplica término a término y suma.`, r`Entry $c_{ij}$ is row $i$ of $A$ times column $j$ of $B$: multiply term by term and add.`),
      L3(r`En general $AB \ne BA$: $(A + B)^2 = A^2 + AB + BA + B^2$, no $A^2 + 2AB + B^2$.`, r`En general $AB \ne BA$: $(A + B)^2 = A^2 + AB + BA + B^2$, no $A^2 + 2AB + B^2$.`, r`In general $AB \ne BA$: $(A + B)^2 = A^2 + AB + BA + B^2$, not $A^2 + 2AB + B^2$.`),
    ]),
    tricks(L3('Transposada i tipus de matrius', 'Traspuesta y tipos de matrices', 'Transpose and types of matrices'), [
      L3(r`$(AB)^t = B^t A^t$: l'ordre s'inverteix.`, r`$(AB)^t = B^t A^t$: el orden se invierte.`, r`$(AB)^t = B^t A^t$: the order is reversed.`),
      L3(r`Simètrica: $A^t = A$. Antisimètrica: $A^t = -A$ (i la diagonal és de zeros).`, r`Simétrica: $A^t = A$. Antisimétrica: $A^t = -A$ (y la diagonal es de ceros).`, r`Symmetric: $A^t = A$. Antisymmetric: $A^t = -A$ (and the diagonal is all zeros).`),
      L3(r`Tota matriu quadrada és $\frac{A + A^t}{2} + \frac{A - A^t}{2}$: simètrica més antisimètrica.`, r`Toda matriz cuadrada es $\frac{A + A^t}{2} + \frac{A - A^t}{2}$: simétrica más antisimétrica.`, r`Every square matrix is $\frac{A + A^t}{2} + \frac{A - A^t}{2}$: symmetric plus antisymmetric.`),
    ]),
    tricks(L3('Potències', 'Potencias', 'Powers'), [
      L3(r`Calcula $A^2$ i $A^3$ i busca el patró; si demanen $A^n$, demostra'l per inducció.`, r`Calcula $A^2$ y $A^3$ y busca el patrón; si piden $A^n$, demuéstralo por inducción.`, r`Compute $A^2$ and $A^3$ and look for the pattern; if $A^n$ is asked for, prove it by induction.`),
      L3('Una matriu diagonal s\'eleva element a element de la diagonal.', 'Una matriz diagonal se eleva elemento a elemento de la diagonal.', 'A diagonal matrix is raised to a power entry by entry along the diagonal.'),
    ]),
  ],
  solved: [
    { id: 'mat-m-1', srcName: L3('Tipus examen · potència n-èssima', 'Tipo examen · potencia n-ésima', 'Exam style · n-th power'),
      q: L3(r`Sigui $A = \begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}$. Calculeu $A^n$ per a tot $n \in \mathbb{N}$.`, r`Sea $A = \begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}$. Calculad $A^n$ para todo $n \in \mathbb{N}$.`, r`Let $A = \begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}$. Compute $A^n$ for every $n \in \mathbb{N}$.`),
      steps: [
        L3(r`$A^2 = \begin{pmatrix}1 & 2\\ 0 & 1\end{pmatrix}$, $A^3 = A^2 A = \begin{pmatrix}1 & 3\\ 0 & 1\end{pmatrix}$.`, r`$A^2 = \begin{pmatrix}1 & 2\\ 0 & 1\end{pmatrix}$, $A^3 = A^2 A = \begin{pmatrix}1 & 3\\ 0 & 1\end{pmatrix}$.`, r`$A^2 = \begin{pmatrix}1 & 2\\ 0 & 1\end{pmatrix}$, $A^3 = A^2 A = \begin{pmatrix}1 & 3\\ 0 & 1\end{pmatrix}$.`),
        L3(r`Patró: $A^n = \begin{pmatrix}1 & n\\ 0 & 1\end{pmatrix}$.`, r`Patrón: $A^n = \begin{pmatrix}1 & n\\ 0 & 1\end{pmatrix}$.`, r`Pattern: $A^n = \begin{pmatrix}1 & n\\ 0 & 1\end{pmatrix}$.`),
        { x: L3(r`Inducció: per a $n = 1$ és $A$. Si $A^k = \begin{pmatrix}1 & k\\ 0 & 1\end{pmatrix}$, aleshores $A^{k+1} = A^k A = \begin{pmatrix}1 & k + 1\\ 0 & 1\end{pmatrix}$.`, r`Inducción: para $n = 1$ es $A$. Si $A^k = \begin{pmatrix}1 & k\\ 0 & 1\end{pmatrix}$, entonces $A^{k+1} = A^k A = \begin{pmatrix}1 & k + 1\\ 0 & 1\end{pmatrix}$.`, r`Induction: for $n = 1$ it is $A$. If $A^k = \begin{pmatrix}1 & k\\ 0 & 1\end{pmatrix}$, then $A^{k+1} = A^k A = \begin{pmatrix}1 & k + 1\\ 0 & 1\end{pmatrix}$.`),
          why: L3('Un patró vist en tres casos no és una demostració: cal la inducció.', 'Un patrón visto en tres casos no es una demostración: hace falta la inducción.', 'A pattern seen in three cases is not a proof: induction is needed.') },
      ] },
    { id: 'mat-m-2', srcName: L3('Tipus examen · simètrica més antisimètrica', 'Tipo examen · simétrica más antisimétrica', 'Exam style · symmetric plus antisymmetric'),
      q: L3(r`Escriviu $A = \begin{pmatrix}1 & 4\\ 2 & 3\end{pmatrix}$ com a suma d'una matriu simètrica i una antisimètrica.`, r`Escribid $A = \begin{pmatrix}1 & 4\\ 2 & 3\end{pmatrix}$ como suma de una matriz simétrica y una antisimétrica.`, r`Write $A = \begin{pmatrix}1 & 4\\ 2 & 3\end{pmatrix}$ as the sum of a symmetric and an antisymmetric matrix.`),
      steps: [
        L3(r`$A^t = \begin{pmatrix}1 & 2\\ 4 & 3\end{pmatrix}$.`, r`$A^t = \begin{pmatrix}1 & 2\\ 4 & 3\end{pmatrix}$.`, r`$A^t = \begin{pmatrix}1 & 2\\ 4 & 3\end{pmatrix}$.`),
        L3(r`$S = \frac{A + A^t}{2} = \begin{pmatrix}1 & 3\\ 3 & 3\end{pmatrix}$, que és simètrica.`, r`$S = \frac{A + A^t}{2} = \begin{pmatrix}1 & 3\\ 3 & 3\end{pmatrix}$, que es simétrica.`, r`$S = \frac{A + A^t}{2} = \begin{pmatrix}1 & 3\\ 3 & 3\end{pmatrix}$, which is symmetric.`),
        L3(r`$T = \frac{A - A^t}{2} = \begin{pmatrix}0 & 1\\ -1 & 0\end{pmatrix}$, que és antisimètrica. I $S + T = A$. ✓`, r`$T = \frac{A - A^t}{2} = \begin{pmatrix}0 & 1\\ -1 & 0\end{pmatrix}$, que es antisimétrica. Y $S + T = A$. ✓`, r`$T = \frac{A - A^t}{2} = \begin{pmatrix}0 & 1\\ -1 & 0\end{pmatrix}$, which is antisymmetric. And $S + T = A$. ✓`),
      ] },
  ],
  day: day([
    L3('**Mides:** escriu-les al costat de cada matriu abans de multiplicar.', '**Tamaños:** escríbelos junto a cada matriz antes de multiplicar.', '**Sizes:** write them next to each matrix before multiplying.'),
    L3(r`**Comprovació:** recalcula un element del resultat per separat (per exemple, $c_{11}$).`, r`**Comprobación:** recalcula un elemento del resultado por separado (por ejemplo, $c_{11}$).`, r`**Check:** recompute one entry of the result separately (for example, $c_{11}$).`),
    L3(r`**Demostracions:** amb elements genèrics $a_{ij}$, mai amb un exemple.`, r`**Demostraciones:** con elementos genéricos $a_{ij}$, nunca con un ejemplo.`, r`**Proofs:** with generic entries $a_{ij}$, never with an example.`),
  ]),
};

const det = {
  solvedH: H,
  tricks: [
    tricks(L3('Calcular determinants', 'Calcular determinantes', 'Computing determinants'), [
      L3(r`Ordre 2: $ad - bc$. Ordre 3: Sarrus (tres productes amb signe + i tres amb signe −).`, r`Orden 2: $ad - bc$. Orden 3: Sarrus (tres productos con signo + y tres con signo −).`, r`Order 2: $ad - bc$. Order 3: Sarrus (three products with + sign and three with − sign).`),
      L3('Ordre 4 o més: desenvolupa per la fila o la columna amb **més zeros**; si no n\'hi ha, fes-ne amb operacions de files.', 'Orden 4 o más: desarrolla por la fila o la columna con **más ceros**; si no los hay, créalos con operaciones de filas.', 'Order 4 or more: expand along the row or column with **the most zeros**; if there are none, create them with row operations.'),
      L3(r`Signe de l'adjunt: $(-1)^{i+j}$, com un tauler d'escacs (+, −, +…).`, r`Signo del adjunto: $(-1)^{i+j}$, como un tablero de ajedrez (+, −, +…).`, r`Sign of the cofactor: $(-1)^{i+j}$, like a chessboard (+, −, +…).`),
    ]),
    tricks(L3('Propietats que estalvien comptes', 'Propiedades que ahorran cuentas', 'Properties that save work'), [
      L3('Sumar a una fila un múltiple d\'una altra no canvia el determinant; intercanviar dues files li canvia el signe.', 'Sumar a una fila un múltiplo de otra no cambia el determinante; intercambiar dos filas le cambia el signo.', 'Adding a multiple of one row to another does not change the determinant; swapping two rows changes its sign.'),
      L3('Una fila de zeros, o dues files proporcionals: determinant 0.', 'Una fila de ceros, o dos filas proporcionales: determinante 0.', 'A row of zeros, or two proportional rows: determinant 0.'),
      L3(r`$\det(AB) = \det A \cdot \det B$, $\det(A^t) = \det A$ i $\det(kA) = k^n \det A$ ($n$ = ordre).`, r`$\det(AB) = \det A \cdot \det B$, $\det(A^t) = \det A$ y $\det(kA) = k^n \det A$ ($n$ = orden).`, r`$\det(AB) = \det A \cdot \det B$, $\det(A^t) = \det A$ and $\det(kA) = k^n \det A$ ($n$ = order).`),
    ]),
    tricks(L3('Inversa i rang', 'Inversa y rango', 'Inverse and rank'), [
      L3(r`$A$ és invertible $\iff \det A \ne 0$, i $A^{-1} = \frac{1}{\det A}\, \mathrm{Adj}(A)^t$.`, r`$A$ es invertible $\iff \det A \ne 0$, y $A^{-1} = \frac{1}{\det A}\, \mathrm{Adj}(A)^t$.`, r`$A$ is invertible $\iff \det A \ne 0$, and $A^{-1} = \frac{1}{\det A}\, \mathrm{Adj}(A)^t$.`),
      L3(r`Comprova sempre $A A^{-1} = I$, encara que sigui només amb una fila.`, r`Comprueba siempre $A A^{-1} = I$, aunque sea solo con una fila.`, r`Always check $A A^{-1} = I$, even if only with one row.`),
      L3('Rang: l\'ordre del menor més gran amb determinant no nul.', 'Rango: el orden del menor más grande con determinante no nulo.', 'Rank: the order of the largest minor with nonzero determinant.'),
    ]),
  ],
  solved: [
    { id: 'det-m-1', srcName: L3('Tipus examen · inversa 2 × 2', 'Tipo examen · inversa 2 × 2', 'Exam style · 2 × 2 inverse'),
      q: L3(r`Calculeu la inversa de $A = \begin{pmatrix}2 & 1\\ 5 & 3\end{pmatrix}$.`, r`Calculad la inversa de $A = \begin{pmatrix}2 & 1\\ 5 & 3\end{pmatrix}$.`, r`Compute the inverse of $A = \begin{pmatrix}2 & 1\\ 5 & 3\end{pmatrix}$.`),
      steps: [
        L3(r`$\det A = 2 \cdot 3 - 1 \cdot 5 = 1 \ne 0$: és invertible.`, r`$\det A = 2 \cdot 3 - 1 \cdot 5 = 1 \ne 0$: es invertible.`, r`$\det A = 2 \cdot 3 - 1 \cdot 5 = 1 \ne 0$: it is invertible.`),
        L3(r`Adjunts: $A_{11} = 3$, $A_{12} = -5$, $A_{21} = -1$, $A_{22} = 2$.`, r`Adjuntos: $A_{11} = 3$, $A_{12} = -5$, $A_{21} = -1$, $A_{22} = 2$.`, r`Cofactors: $A_{11} = 3$, $A_{12} = -5$, $A_{21} = -1$, $A_{22} = 2$.`),
        L3(r`$A^{-1} = \frac{1}{1} \begin{pmatrix}3 & -1\\ -5 & 2\end{pmatrix} = \begin{pmatrix}3 & -1\\ -5 & 2\end{pmatrix}$ (l'adjunta, transposada).`, r`$A^{-1} = \frac{1}{1} \begin{pmatrix}3 & -1\\ -5 & 2\end{pmatrix} = \begin{pmatrix}3 & -1\\ -5 & 2\end{pmatrix}$ (la adjunta, traspuesta).`, r`$A^{-1} = \frac{1}{1} \begin{pmatrix}3 & -1\\ -5 & 2\end{pmatrix} = \begin{pmatrix}3 & -1\\ -5 & 2\end{pmatrix}$ (the adjugate, transposed).`),
        L3(r`Comprovació: $A A^{-1} = \begin{pmatrix}6 - 5 & -2 + 2\\ 15 - 15 & -5 + 6\end{pmatrix} = I$. ✓`, r`Comprobación: $A A^{-1} = \begin{pmatrix}6 - 5 & -2 + 2\\ 15 - 15 & -5 + 6\end{pmatrix} = I$. ✓`, r`Check: $A A^{-1} = \begin{pmatrix}6 - 5 & -2 + 2\\ 15 - 15 & -5 + 6\end{pmatrix} = I$. ✓`),
      ] },
    { id: 'det-m-2', srcName: L3('Tipus examen · paràmetre', 'Tipo examen · parámetro', 'Exam style · parameter'),
      q: L3(r`Per a quins valors de $k$ la matriu $\begin{pmatrix}1 & 1 & 1\\ 1 & k & 1\\ 1 & 1 & k\end{pmatrix}$ no és invertible?`, r`¿Para qué valores de $k$ la matriz $\begin{pmatrix}1 & 1 & 1\\ 1 & k & 1\\ 1 & 1 & k\end{pmatrix}$ no es invertible?`, r`For which values of $k$ is the matrix $\begin{pmatrix}1 & 1 & 1\\ 1 & k & 1\\ 1 & 1 & k\end{pmatrix}$ not invertible?`),
      steps: [
        L3(r`Sarrus, positius: $1 \cdot k \cdot k + 1 \cdot 1 \cdot 1 + 1 \cdot 1 \cdot 1 = k^2 + 2$.`, r`Sarrus, positivos: $1 \cdot k \cdot k + 1 \cdot 1 \cdot 1 + 1 \cdot 1 \cdot 1 = k^2 + 2$.`, r`Sarrus, positive terms: $1 \cdot k \cdot k + 1 \cdot 1 \cdot 1 + 1 \cdot 1 \cdot 1 = k^2 + 2$.`),
        L3(r`Negatius: $1 \cdot k \cdot 1 + 1 \cdot 1 \cdot 1 + 1 \cdot 1 \cdot k = 2k + 1$.`, r`Negativos: $1 \cdot k \cdot 1 + 1 \cdot 1 \cdot 1 + 1 \cdot 1 \cdot k = 2k + 1$.`, r`Negative terms: $1 \cdot k \cdot 1 + 1 \cdot 1 \cdot 1 + 1 \cdot 1 \cdot k = 2k + 1$.`),
        L3(r`$\det = k^2 + 2 - (2k + 1) = k^2 - 2k + 1 = (k - 1)^2$.`, r`$\det = k^2 + 2 - (2k + 1) = k^2 - 2k + 1 = (k - 1)^2$.`, r`$\det = k^2 + 2 - (2k + 1) = k^2 - 2k + 1 = (k - 1)^2$.`),
        { x: L3(r`No és invertible $\iff \det = 0 \iff k = 1$.`, r`No es invertible $\iff \det = 0 \iff k = 1$.`, r`It is not invertible $\iff \det = 0 \iff k = 1$.`),
          why: L3('Comprovació: amb k = 1 les tres files són iguals, i dues files iguals donen determinant 0.', 'Comprobación: con k = 1 las tres filas son iguales, y dos filas iguales dan determinante 0.', 'Check: with k = 1 the three rows are equal, and two equal rows give determinant 0.') },
      ] },
  ],
  day: day([
    L3('**Abans de desenvolupar:** busca zeros, o fes-ne amb operacions de files. Menys comptes, menys errors.', '**Antes de desarrollar:** busca ceros, o créalos con operaciones de filas. Menos cuentas, menos errores.', '**Before expanding:** look for zeros, or create them with row operations. Fewer calculations, fewer mistakes.'),
    L3('**Signes:** escriu el signe de cada adjunt abans de calcular-lo.', '**Signos:** escribe el signo de cada adjunto antes de calcularlo.', '**Signs:** write the sign of each cofactor before computing it.'),
    L3(r`**Inversa:** la comprovació $A A^{-1} = I$ costa un minut i salva l'exercici.`, r`**Inversa:** la comprobación $A A^{-1} = I$ cuesta un minuto y salva el ejercicio.`, r`**Inverse:** checking $A A^{-1} = I$ takes a minute and saves the exercise.`),
  ]),
};

export default { conj, rel, nomb, cx, mat, det };
