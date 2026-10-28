// Mètodes d'examen de Computadors, per tema (vegeu src/courses/_kit/Methods.jsx).
import t3 from './t3/methods.js';

const L3 = (ca, es, en) => [ca, es, en];
const tricks = (title, items) => ({ t: 'method', title, items });
const day = (items) => [{ t: 'list', items }];
const H = L3('Exercicis tipus examen resolts', 'Ejercicios tipo examen resueltos', 'Exam-style exercises, solved');

const t1 = {
  solvedH: H,
  tricks: [
    tricks(L3('Canvis d\'unitats sense errors', 'Cambios de unidades sin errores', 'Unit conversions without mistakes'), [
      L3('Tres passos: **prefix → unitat base**, **bits ↔ bytes** (× 8 o ÷ 8), **unitat base → prefix demanat**.', 'Tres pasos: **prefijo → unidad base**, **bits ↔ bytes** (× 8 o ÷ 8), **unidad base → prefijo pedido**.', 'Three steps: **prefix → base unit**, **bits ↔ bytes** (× 8 or ÷ 8), **base unit → requested prefix**.'),
      L3('Amb «i» (KiB, MiB…) són potències de 2; sense «i», de 10.', 'Con «i» (KiB, MiB…) son potencias de 2; sin «i», de 10.', 'With “i” (KiB, MiB…) they are powers of 2; without “i”, powers of 10.'),
      L3('**b** minúscula és bit; **B** majúscula, byte.', '**b** minúscula es bit; **B** mayúscula, byte.', 'Lower-case **b** is bit; upper-case **B**, byte.'),
    ]),
    tricks(L3('Velocitat de transferència', 'Velocidad de transferencia', 'Transfer rate'), [
      L3('`t = mida ÷ velocitat`, les dues en bits. Les velocitats sempre amb prefix decimal.', '`t = tamaño ÷ velocidad`, las dos en bits. Las velocidades siempre con prefijo decimal.', '`t = size ÷ rate`, both in bits. Rates always with a decimal prefix.'),
      L3('Si el resultat surt 8 vegades massa gran o massa petit, t\'has deixat el factor 8.', 'Si el resultado sale 8 veces demasiado grande o pequeño, te has dejado el factor 8.', 'If the result is 8 times too large or too small, you forgot the factor of 8.'),
    ]),
  ],
  solved: [{ ref: 'c-p-mida', day: L3('Escriu cada pas amb la unitat: la correcció mira el procediment.', 'Escribe cada paso con la unidad: la corrección mira el procedimiento.', 'Write each step with its unit: the marking looks at the procedure.') }, { ref: 'c-a4' }],
  day: day([
    L3('**Calculadora:** fes servir potències (2¹⁰, 10⁶) i no arrodoneixis fins al final.', '**Calculadora:** usa potencias (2¹⁰, 10⁶) y no redondees hasta el final.', '**Calculator:** use powers (2¹⁰, 10⁶) and do not round until the end.'),
    L3('**Comprovació:** l\'ordre de magnitud ha de tenir sentit (un fitxer de 500 MB a 100 Mb/s triga segons, no hores).', '**Comprobación:** el orden de magnitud tiene que tener sentido (un fichero de 500 MB a 100 Mb/s tarda segundos, no horas).', '**Check:** the order of magnitude must make sense (a 500 MB file at 100 Mb/s takes seconds, not hours).'),
  ]),
};

const t21 = {
  solvedH: H,
  tricks: [
    tricks(L3('Canvis de base', 'Cambios de base', 'Base conversions'), [
      L3('Entre 2, 8 i 16, **agrupa bits des de la coma** (3 o 4). Entre altres bases, passa per base 10.', 'Entre 2, 8 y 16, **agrupa bits desde la coma** (3 o 4). Entre otras bases, pasa por base 10.', 'Between 2, 8 and 16, **group bits from the point** (3 or 4). Between other bases, go through base 10.'),
      L3('Part entera: divisions, residus de **baix a dalt**. Part fraccionària: multiplicacions, parts enteres de **dalt a baix**.', 'Parte entera: divisiones, restos de **abajo arriba**. Parte fraccionaria: multiplicaciones, partes enteras de **arriba abajo**.', 'Integer part: divisions, remainders from **bottom to top**. Fractional part: multiplications, integer parts from **top to bottom**.'),
      L3('Si torna a sortir una fracció ja vista, has trobat el període: escriu-lo entre parèntesis.', 'Si vuelve a salir una fracción ya vista, has encontrado el periodo: escríbelo entre paréntesis.', 'If a fraction already seen comes up again, you have found the period: write it in parentheses.'),
    ]),
    tricks(L3('Enters amb signe', 'Enteros con signo', 'Signed integers'), [
      L3('Comprova primer el rang: SM i C1 fins a ±(2ᴺ⁻¹ − 1); C2 i CE de −2ᴺ⁻¹ a 2ᴺ⁻¹ − 1.', 'Comprueba primero el rango: SM y C1 hasta ±(2ᴺ⁻¹ − 1); C2 y CE de −2ᴺ⁻¹ a 2ᴺ⁻¹ − 1.', 'Check the range first: SM and 1C up to ±(2ᴺ⁻¹ − 1); 2C and excess from −2ᴺ⁻¹ to 2ᴺ⁻¹ − 1.'),
      L3('C2 ràpid: copia des de la dreta fins al primer 1 i inverteix la resta.', 'C2 rápido: copia desde la derecha hasta el primer 1 e invierte el resto.', 'Quick 2C: copy from the right up to the first 1 and invert the rest.'),
      L3('Excés del curs: E = 2ᴺ⁻¹ (128 amb 8 bits), no el 127 de l\'IEEE.', 'Exceso del curso: E = 2ᴺ⁻¹ (128 con 8 bits), no el 127 del IEEE.', 'Course excess: E = 2ᴺ⁻¹ (128 with 8 bits), not the 127 of IEEE.'),
    ]),
    tricks(L3('IEEE 754', 'IEEE 754', 'IEEE 754'), [
      L3('Signe → binari → normalitza (1,F · 2ᵉ) → E = e + 127 → fracció sense l\'1 implícit, fins a 23 bits.', 'Signo → binario → normaliza (1,F · 2ᵉ) → E = e + 127 → fracción sin el 1 implícito, hasta 23 bits.', 'Sign → binary → normalise (1.F · 2ᵉ) → E = e + 127 → fraction without the implicit 1, up to 23 bits.'),
      L3('Per comprovar, passa els 32 bits a hexadecimal: 8 dígits.', 'Para comprobar, pasa los 32 bits a hexadecimal: 8 dígitos.', 'To check, convert the 32 bits to hexadecimal: 8 digits.'),
    ]),
  ],
  solved: [{ ref: 'c-p-base' }, { ref: 'c-p-c2', day: L3('Escriu tots els bits, també els zeros de l\'esquerra.', 'Escribe todos los bits, también los ceros de la izquierda.', 'Write all the bits, including the zeros on the left.') }, { ref: 'c-p-ie' }],
  day: day([
    L3('**Comprovació creuada:** després d\'una operació en base b, refés-la en decimal.', '**Comprobación cruzada:** después de una operación en base b, rehazla en decimal.', '**Cross-check:** after an operation in base b, redo it in decimal.'),
    L3('**Notació:** posa el subíndex de la base a cada resultat (`1011₍₂₎`).', '**Notación:** pon el subíndice de la base en cada resultado (`1011₍₂₎`).', '**Notation:** put the base subscript on every result (`1011₍₂₎`).'),
    L3('**Temps:** el CP1 té sis blocs; no passis de 10 minuts en cap.', '**Tiempo:** el CP1 tiene seis bloques; no pases de 10 minutos en ninguno.', '**Time:** Test 1 has six blocks; do not spend more than 10 minutes on any of them.'),
  ]),
};

const t22 = {
  solvedH: H,
  tricks: [
    tricks(L3('Mida de fitxers multimèdia', 'Tamaño de ficheros multimedia', 'Multimedia file size'), [
      L3('Imatge: amplada × alçada × bits/píxel. Àudio: durada × freqüència × bits × canals. Vídeo: fotograma × FPS × durada.', 'Imagen: anchura × altura × bits/píxel. Audio: duración × frecuencia × bits × canales. Vídeo: fotograma × FPS × duración.', 'Image: width × height × bits/pixel. Audio: duration × frequency × bits × channels. Video: frame × FPS × duration.'),
      L3('Durada sempre en **segons**; el resultat surt en bits: ÷ 8 i després el prefix.', 'Duración siempre en **segundos**; el resultado sale en bits: ÷ 8 y después el prefijo.', 'Duration always in **seconds**; the result comes out in bits: ÷ 8 and then the prefix.'),
      L3('n bits per píxel ⟹ 2ⁿ colors; 24 bits ⟹ 16 777 216 colors.', 'n bits por píxel ⟹ 2ⁿ colores; 24 bits ⟹ 16 777 216 colores.', 'n bits per pixel ⟹ 2ⁿ colours; 24 bits ⟹ 16 777 216 colours.'),
    ]),
  ],
  solved: [{ ref: 'c-mm' }, { ref: 'c-mmx' }],
  day: day([
    L3('**Unitats:** mira si demanen MB o MiB; és el canvi de prefix el que més errors dona.', '**Unidades:** mira si piden MB o MiB; es el cambio de prefijo lo que más errores da.', '**Units:** check whether they ask for MB or MiB; the prefix change is the most common source of mistakes.'),
  ]),
};

export default { t1, t21, t22, t3 };
