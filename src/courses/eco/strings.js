/** Textos de la interfície d'Economia (els mateixos de l'original). */

export const SUBJ = ['t1', 't2', 't3', 'prac'];

export const NAMES = {
  ca: { t1: 'Conceptes bàsics', t2: 'Demanda i oferta', t3: 'Magnituds agregades', prac: 'Pràctica' },
  es: { t1: 'Conceptos básicos', t2: 'Demanda y oferta', t3: 'Magnitudes agregadas', prac: 'Práctica' },
};
export const TAGS = {
  ca: { t1: 'Tema 1', t2: 'Tema 2', t3: 'Tema 3', prac: 'Pràctica' },
  es: { t1: 'Tema 1', t2: 'Tema 2', t3: 'Tema 3', prac: 'Práctica' },
};
export const STR = {
  ca: { eyebrow: "Seminari principis d'economia i empresa · Bàtxelor en Informàtica", ph: 'Cerca a tota la teoria i els exercicis…',
    none: 'Cap resultat', secs: 'seccions', ex: 'exercicis', lv: 'fàcil · mitjà · difícil' },
  es: { eyebrow: 'Seminario principios de economía y empresa · Bachelor en Informática', ph: 'Busca en toda la teoría y los ejercicios…',
    none: 'Sin resultados', secs: 'secciones', ex: 'ejercicios', lv: 'fácil · medio · difícil' },
};

/* laboratori de la FPP */
export const TX = {
  ca: { k: 'Laboratori', t: 'La FPP, en viu', h: "Edita la taula de combinacions eficients, mira com canvia el cost d'oportunitat i classifica qualsevol punt. El control de millora tecnològica desplaça la frontera només per al bé X.",
    X: 'Blat (X)', Y: 'Tractors (Y)', pt: 'Punt a classificar', tech: 'Millora tecnològica en X', co: "Cost d'oportunitat de cada tram",
    per: 'per unitat de X', eff: 'eficient: és sobre la frontera', ine: 'ineficient: és a dins de la frontera; es podria produir més dels dos béns', ina: 'inabastable: és fora de la frontera; calen més recursos o més tecnologia',
    out: 'fora del rang de la taula (X més gran que el màxim de la frontera)', conc: "El cost d'oportunitat creix a cada tram: la FPP és còncava.", lin: "El cost d'oportunitat és constant: la FPP és una recta.", noconc: "El cost d'oportunitat no creix a cada tram: amb aquestes dades la FPP no és còncava.",
    reset: 'Exemple del material', bad: 'Ordena els punts amb X creixent i Y decreixent perquè sigui una frontera.', newf: 'FPP nova' },
  es: { k: 'Laboratorio', t: 'La FPP, en vivo', h: 'Edita la tabla de combinaciones eficientes, mira cómo cambia el coste de oportunidad y clasifica cualquier punto. El control de mejora tecnológica desplaza la frontera solo para el bien X.',
    X: 'Trigo (X)', Y: 'Tractores (Y)', pt: 'Punto a clasificar', tech: 'Mejora tecnológica en X', co: 'Coste de oportunidad de cada tramo',
    per: 'por unidad de X', eff: 'eficiente: está sobre la frontera', ine: 'ineficiente: está dentro de la frontera; se podría producir más de los dos bienes', ina: 'inalcanzable: está fuera de la frontera; hacen falta más recursos o más tecnología',
    out: 'fuera del rango de la tabla (X mayor que el máximo de la frontera)', conc: 'El coste de oportunidad crece en cada tramo: la FPP es cóncava.', lin: 'El coste de oportunidad es constante: la FPP es una recta.', noconc: 'El coste de oportunidad no crece en cada tramo: con estos datos la FPP no es cóncava.',
    reset: 'Ejemplo del material', bad: 'Ordena los puntos con X creciente e Y decreciente para que sea una frontera.', newf: 'FPP nueva' },
};

/* laboratori del mercat */
export const TM = {
  ca: { k: 'Laboratori', t: 'Mercat en viu: equilibri i excedents', h: 'Canvia els coeficients de les funcions lineals, desplaça les corbes i mou el preu de mercat. Tot es recalcula amb les fórmules del tema.',
    fd: 'Demanda: Qd = a − b·P', fo: 'Oferta: Qo = c·P + e', price: 'Preu de mercat', eqp: 'Preu = P*',
    sh: 'Desplaçaments', dp: 'Demanda +', dm: 'Demanda −', op: 'Oferta +', om: 'Oferta −',
    pre: 'Exemples', p1: 'Batuts (material)', p2: 'Exercici extra', pe: 'P*', qe: 'Q*', pmax: 'Preu màxim (Qd = 0)', pmin: 'Preu mínim (Qo = 0)',
    ec: 'Excedent del consumidor', ep: 'Excedent del productor', bs: 'Benestar social',
    bad: 'Amb aquests coeficients no hi ha un equilibri amb preu i quantitat positius: cal b > 0, c > 0 i que el preu màxim sigui més alt que el mínim.',
    at: 'A P = ', xd: 'excés de demanda', xo: "excés d'oferta", eqm: 'El mercat és en equilibri: Qd = Qo.',
    trade: "només s'intercanvien", up: 'el preu tendeix a pujar', down: 'el preu tendeix a baixar', u: 'unitats', and: 'i' },
  es: { k: 'Laboratorio', t: 'Mercado en vivo: equilibrio y excedentes', h: 'Cambia los coeficientes de las funciones lineales, desplaza las curvas y mueve el precio de mercado. Todo se recalcula con las fórmulas del tema.',
    fd: 'Demanda: Qd = a − b·P', fo: 'Oferta: Qo = c·P + e', price: 'Precio de mercado', eqp: 'Precio = P*',
    sh: 'Desplazamientos', dp: 'Demanda +', dm: 'Demanda −', op: 'Oferta +', om: 'Oferta −',
    pre: 'Ejemplos', p1: 'Batidos (material)', p2: 'Ejercicio extra', pe: 'P*', qe: 'Q*', pmax: 'Precio máximo (Qd = 0)', pmin: 'Precio mínimo (Qo = 0)',
    ec: 'Excedente del consumidor', ep: 'Excedente del productor', bs: 'Bienestar social',
    bad: 'Con estos coeficientes no hay un equilibrio con precio y cantidad positivos: hace falta b > 0, c > 0 y que el precio máximo sea mayor que el mínimo.',
    at: 'A P = ', xd: 'exceso de demanda', xo: 'exceso de oferta', eqm: 'El mercado está en equilibrio: Qd = Qo.',
    trade: 'solo se intercambian', up: 'el precio tiende a subir', down: 'el precio tiende a bajar', u: 'unidades', and: 'y' },
};

/* calculadora de la cadena */
export const TC = {
  ca: { k: 'Laboratori', t: 'Calculadora de la cadena', h: "Introdueix les dades (en milions d'euros, excepte els habitants) i segueix cada pas amb la seva fórmula. Els valors inicials són els de l'exemple de la secció 3.7.",
    f: { sal: "Salaris (remuneració d'assalariats)", llo: 'Lloguers', int: 'Interessos', ben: 'Beneficis', ti: 'Impostos indirectes', sub: 'Subvencions', rfne: 'rfne', rfen: 'rfen', am: 'Amortitzacions', td: 'Impostos directes', ss: 'Seguretat Social', tr: 'Transferències', c: 'Consum de les famílies (C)', d: 'Despesa pública (D)', hab: 'Habitants' },
    g1: 'Producció i renda', g2: 'Sector públic i famílies', reset: 'Exemple de la secció 3.7', pc: '€ per habitant', sup: 'superàvit', def: 'dèficit', eqb: 'equilibri' },
  es: { k: 'Laboratorio', t: 'Calculadora de la cadena', h: 'Introduce los datos (en millones de euros, excepto los habitantes) y sigue cada paso con su fórmula. Los valores iniciales son los del ejemplo de la sección 3.7.',
    f: { sal: 'Salarios (remuneración de asalariados)', llo: 'Alquileres', int: 'Intereses', ben: 'Beneficios', ti: 'Impuestos indirectos', sub: 'Subvenciones', rfne: 'rfne', rfen: 'rfen', am: 'Amortizaciones', td: 'Impuestos directos', ss: 'Seguridad Social', tr: 'Transferencias', c: 'Consumo de las familias (C)', d: 'Gasto público (D)', hab: 'Habitantes' },
    g1: 'Producción y renta', g2: 'Sector público y familias', reset: 'Ejemplo de la sección 3.7', pc: '€ por habitante', sup: 'superávit', def: 'déficit', eqb: 'equilibrio' },
};

/* pràctica */
export const TP = {
  ca: { tema: 'Tema', niv: 'Nivell', all: 'Tots', f: 'Fàcil', m: 'Mitjà', d: 'Difícil', check: 'Comprova', clear: 'Esborra', prog: 'resolts', reset: 'Reinicia el progrés',
    ok: 'Correcte.', part: 'Gairebé: revisa les caselles marcades en vermell.', ko: 'No és correcte. Torna-ho a provar o mira la pista.', empty: 'Escriu una resposta abans de comprovar.',
    choose: 'Tria una opció.', none: 'Cap exercici amb aquests filtres.', solved: 'resolt', filt: 'Filtres' },
  es: { tema: 'Tema', niv: 'Nivel', all: 'Todos', f: 'Fácil', m: 'Medio', d: 'Difícil', check: 'Comprobar', clear: 'Borrar', prog: 'resueltos', reset: 'Reiniciar el progreso',
    ok: 'Correcto.', part: 'Casi: revisa las casillas marcadas en rojo.', ko: 'No es correcto. Vuelve a intentarlo o mira la pista.', empty: 'Escribe una respuesta antes de comprobar.',
    choose: 'Elige una opción.', none: 'Ningún ejercicio con estos filtros.', solved: 'resuelto', filt: 'Filtros' },
};
