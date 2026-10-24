// Generat per tools/kit-import/logica.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "groups": [
  {
   "unit": "u3",
   "t": [
    "Implicacions lògiques (regles d'inferència)",
    "Implicaciones lógicas (reglas de inferencia)"
   ],
   "items": [
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-implicacions-logiques-regles-d-inferencia-0",
      "t": "Eliminació de la conjunció (simplificació)",
      "x": "`A ∧ B ⇒ A`",
      "note": "si tinc les dues coses, en tinc cadascuna"
     },
     "es": {
      "id": "fs-implicaciones-logicas-reglas-de-inferencia-0",
      "t": "Eliminación de la conjunción (simplificación)",
      "x": "`A ∧ B ⇒ A`",
      "note": "si tengo las dos cosas, tengo cada una"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-implicacions-logiques-regles-d-inferencia-1",
      "t": "Introducció de la disjunció (addició)",
      "x": "`A ⇒ A ∨ B`",
      "note": "si A és cert, «A o el que sigui» també"
     },
     "es": {
      "id": "fs-implicaciones-logicas-reglas-de-inferencia-1",
      "t": "Introducción de la disyunción (adición)",
      "x": "`A ⇒ A ∨ B`",
      "note": "si A es cierto, «A o lo que sea» también"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-implicacions-logiques-regles-d-inferencia-2",
      "t": "Eliminació de la implicació (*modus ponens*)",
      "x": "`A ∧ (A → B) ⇒ B`",
      "note": "es compleix la condició: es compleix el resultat"
     },
     "es": {
      "id": "fs-implicaciones-logicas-reglas-de-inferencia-2",
      "t": "Eliminación de la implicación (*modus ponens*)",
      "x": "`A ∧ (A → B) ⇒ B`",
      "note": "se cumple la condición: se cumple el resultado"
     }
    },
    {
     "id": "fs-implicacions-logiques-regles-d-inferencia-3",
     "note": [
      "no hi ha resultat: no hi havia condició",
      "no hay resultado: no había condición"
     ],
     "t": "*Modus tollens*",
     "x": "`(A → B) ∧ ¬B ⇒ ¬A`"
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-implicacions-logiques-regles-d-inferencia-4",
      "t": "Sil·logisme disjuntiu",
      "x": "`(A ∨ B) ∧ ¬A ⇒ B`",
      "note": "de dues opcions, si una falla, l'altra"
     },
     "es": {
      "id": "fs-implicaciones-logicas-reglas-de-inferencia-4",
      "t": "Silogismo disyuntivo",
      "x": "`(A ∨ B) ∧ ¬A ⇒ B`",
      "note": "de dos opciones, si una falla, la otra"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-implicacions-logiques-regles-d-inferencia-5",
      "t": "Transitivitat (sil·logisme hipotètic)",
      "x": "`(A → B) ∧ (B → C) ⇒ (A → C)`",
      "note": "encadenar implicacions"
     },
     "es": {
      "id": "fs-implicaciones-logicas-reglas-de-inferencia-5",
      "t": "Transitividad (silogismo hipotético)",
      "x": "`(A → B) ∧ (B → C) ⇒ (A → C)`",
      "note": "encadenar implicaciones"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-implicacions-logiques-regles-d-inferencia-6",
      "t": "Dilema constructiu",
      "x": "`(A → B) ∧ (C → D) ⇒ [(A ∨ C) → (B ∨ D)]`",
      "note": "si passa una de les causes, passa un dels efectes"
     },
     "es": {
      "id": "fs-implicaciones-logicas-reglas-de-inferencia-6",
      "t": "Dilema constructivo",
      "x": "`(A → B) ∧ (C → D) ⇒ [(A ∨ C) → (B ∨ D)]`",
      "note": "si pasa una de las causas, pasa uno de los efectos"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-implicacions-logiques-regles-d-inferencia-7",
      "t": "Dilema constructiu",
      "x": "`(A → B) ∧ (C → D) ⇒ [(A ∧ C) → (B ∧ D)]`",
      "note": "si passen les dues causes, passen els dos efectes"
     },
     "es": {
      "id": "fs-implicaciones-logicas-reglas-de-inferencia-7",
      "t": "Dilema constructivo",
      "x": "`(A → B) ∧ (C → D) ⇒ [(A ∧ C) → (B ∧ D)]`",
      "note": "si pasan las dos causas, pasan los dos efectos"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-implicacions-logiques-regles-d-inferencia-8",
      "t": "Dilema destructiu",
      "x": "`(A → B) ∧ (C → D) ⇒ [(¬B ∨ ¬D) → (¬A ∨ ¬C)]`",
      "note": "si falla un efecte, falla una causa"
     },
     "es": {
      "id": "fs-implicaciones-logicas-reglas-de-inferencia-8",
      "t": "Dilema destructivo",
      "x": "`(A → B) ∧ (C → D) ⇒ [(¬B ∨ ¬D) → (¬A ∨ ¬C)]`",
      "note": "si falla un efecto, falla una causa"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-implicacions-logiques-regles-d-inferencia-9",
      "t": "Dilema destructiu",
      "x": "`(A → B) ∧ (C → D) ⇒ [(¬B ∧ ¬D) → (¬A ∧ ¬C)]`",
      "note": "si fallen els dos efectes, fallen les dues causes"
     },
     "es": {
      "id": "fs-implicaciones-logicas-reglas-de-inferencia-9",
      "t": "Dilema destructivo",
      "x": "`(A → B) ∧ (C → D) ⇒ [(¬B ∧ ¬D) → (¬A ∧ ¬C)]`",
      "note": "si fallan los dos efectos, fallan las dos causas"
     }
    }
   ]
  },
  {
   "unit": "u3",
   "t": [
    "Equivalències lògiques",
    "Equivalencias lógicas"
   ],
   "items": [
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-equivalencies-logiques-0",
      "t": "Doble negació",
      "x": "`¬¬A ⇔ A`",
      "note": "netejar negacions"
     },
     "es": {
      "id": "fs-equivalencias-logicas-0",
      "t": "Doble negación",
      "x": "`¬¬A ⇔ A`",
      "note": "limpiar negaciones"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-equivalencies-logiques-1",
      "t": "Idempotència",
      "x": "`A ∧ A ⇔ A` · `A ∨ A ⇔ A`",
      "note": "acabar una deducció: de `S ∨ S`, `S`"
     },
     "es": {
      "id": "fs-equivalencias-logicas-1",
      "t": "Idempotencia",
      "x": "`A ∧ A ⇔ A` · `A ∨ A ⇔ A`",
      "note": "acabar una deducción: de `S ∨ S`, `S`"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-equivalencies-logiques-2",
      "t": "Implicació",
      "x": "`A → B ⇔ ¬A ∨ B`",
      "note": "pas 1 de la forma clausal; passar de → a ∨"
     },
     "es": {
      "id": "fs-equivalencias-logicas-2",
      "t": "Implicación",
      "x": "`A → B ⇔ ¬A ∨ B`",
      "note": "paso 1 de la forma clausal; pasar de → a ∨"
     }
    },
    {
     "id": "fs-equivalencies-logiques-3",
     "note": [
      "girar una implicació per encadenar-la",
      "girar una implicación para encadenarla"
     ],
     "t": "Contrapositiva",
     "x": "`A → B ⇔ ¬B → ¬A`"
    },
    {
     "id": "fs-equivalencies-logiques-4",
     "note": [
      "ficar negacions cap a dins",
      "meter las negaciones hacia dentro"
     ],
     "t": "De Morgan",
     "x": "`¬(A ∧ B) ⇔ ¬A ∨ ¬B` · `¬(A ∨ B) ⇔ ¬A ∧ ¬B`"
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-equivalencies-logiques-5",
      "t": "Condicions alternatives",
      "x": "`(A → C) ∧ (B → C) ⇔ (A ∨ B) → C`",
      "note": "trencar una condició amb «o»"
     },
     "es": {
      "id": "fs-equivalencias-logicas-5",
      "t": "Condiciones alternativas",
      "x": "`(A → C) ∧ (B → C) ⇔ (A ∨ B) → C`",
      "note": "romper una condición con «o»"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-equivalencies-logiques-6",
      "t": "Resultats conjunts",
      "x": "`(A → B) ∧ (A → C) ⇔ A → (B ∧ C)`",
      "note": "trencar un resultat amb «i»"
     },
     "es": {
      "id": "fs-equivalencias-logicas-6",
      "t": "Resultados conjuntos",
      "x": "`(A → B) ∧ (A → C) ⇔ A → (B ∧ C)`",
      "note": "romper un resultado con «y»"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-equivalencies-logiques-7",
      "t": "Exportació",
      "x": "`(A ∧ B) → C ⇔ A → (B → C)`",
      "note": "separar dues condicions"
     },
     "es": {
      "id": "fs-equivalencias-logicas-7",
      "t": "Exportación",
      "x": "`(A ∧ B) → C ⇔ A → (B → C)`",
      "note": "separar dos condiciones"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-equivalencies-logiques-8",
      "t": "Identitat",
      "x": "`A ∧ B ⇔ B` si A és tautologia · `A ∨ B ⇔ B` si A és insatisfactible · `T ∨ A ⇔ T` · `F ∧ A ⇔ F`",
      "note": "eliminar parts sempre certes o sempre falses"
     },
     "es": {
      "id": "fs-equivalencias-logicas-8",
      "t": "Identidad",
      "x": "`A ∧ B ⇔ B` si A es tautología · `A ∨ B ⇔ B` si A es insatisfacible · `T ∨ A ⇔ T` · `F ∧ A ⇔ F`",
      "note": "eliminar partes siempre ciertas o siempre falsas"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-equivalencies-logiques-9",
      "t": "Reducció a l'absurd",
      "x": "`(A → B) ⇔ (A ∧ ¬B) → F`",
      "note": "la idea de la refutació"
     },
     "es": {
      "id": "fs-equivalencias-logicas-9",
      "t": "Reducción al absurdo",
      "x": "`(A → B) ⇔ (A ∧ ¬B) → F`",
      "note": "la idea de la refutación"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-equivalencies-logiques-10",
      "t": "Commutativa, associativa, distributiva",
      "x": "`A ∨ (B ∧ C) ⇔ (A ∨ B) ∧ (A ∨ C)`, …",
      "note": "reordenar; passar a FNC"
     },
     "es": {
      "id": "fs-equivalencias-logicas-10",
      "t": "Conmutativa, asociativa, distributiva",
      "x": "`A ∨ (B ∧ C) ⇔ (A ∨ B) ∧ (A ∨ C)`, …",
      "note": "reordenar; pasar a FNC"
     }
    }
   ]
  },
  {
   "unit": "u3",
   "t": [
    "Propietats dels quantificadors",
    "Propiedades de los cuantificadores"
   ],
   "items": [
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-propietats-dels-quantificadors-0",
      "t": "la negació travessa el quantificador i el canvia",
      "x": "`¬∀x A ⇔ ∃x ¬A` · `¬∃x A ⇔ ∀x ¬A`"
     },
     "es": {
      "id": "fs-propiedades-de-los-cuantificadores-0",
      "t": "la negación atraviesa el cuantificador y lo cambia",
      "x": "`¬∀x A ⇔ ∃x ¬A` · `¬∃x A ⇔ ∀x ¬A`"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-propietats-dels-quantificadors-1",
      "t": "dos quantificadors iguals es poden permutar",
      "x": "`∀x ∀y A ⇔ ∀y ∀x A` · `∃x ∃y A ⇔ ∃y ∃x A`"
     },
     "es": {
      "id": "fs-propiedades-de-los-cuantificadores-1",
      "t": "dos cuantificadores iguales se pueden permutar",
      "x": "`∀x ∀y A ⇔ ∀y ∀x A` · `∃x ∃y A ⇔ ∃y ∃x A`"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-propietats-dels-quantificadors-2",
      "t": "∀ es reparteix sobre ∧ (no sobre ∨)",
      "x": "`∀x (A(x) ∧ B(x)) ⇔ ∀x A(x) ∧ ∀x B(x)`"
     },
     "es": {
      "id": "fs-propiedades-de-los-cuantificadores-2",
      "t": "∀ se reparte sobre ∧ (no sobre ∨)",
      "x": "`∀x (A(x) ∧ B(x)) ⇔ ∀x A(x) ∧ ∀x B(x)`"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-propietats-dels-quantificadors-3",
      "t": "∃ es reparteix sobre ∨ (no sobre ∧)",
      "x": "`∃x (A(x) ∨ B(x)) ⇔ ∃x A(x) ∨ ∃x B(x)`"
     },
     "es": {
      "id": "fs-propiedades-de-los-cuantificadores-3",
      "t": "∃ se reparte sobre ∨ (no sobre ∧)",
      "x": "`∃x (A(x) ∨ B(x)) ⇔ ∃x A(x) ∨ ∃x B(x)`"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-propietats-dels-quantificadors-4",
      "t": "si B no té x, el quantificador la pot englobar",
      "x": "`∃x A(x) ∨ B ⇔ ∃x (A(x) ∨ B)` · `∀x A(x) ∨ B ⇔ ∀x (A(x) ∨ B)`"
     },
     "es": {
      "id": "fs-propiedades-de-los-cuantificadores-4",
      "t": "si B no contiene x, el cuantificador puede englobarla",
      "x": "`∃x A(x) ∨ B ⇔ ∃x (A(x) ∨ B)` · `∀x A(x) ∨ B ⇔ ∀x (A(x) ∨ B)`"
     }
    },
    {
     "__mismatch": true,
     "ca": {
      "id": "fs-propietats-dels-quantificadors-5",
      "t": "el mateix amb ∧ (és el pas 5 de la forma clausal)",
      "x": "`∃x A(x) ∧ B ⇔ ∃x (A(x) ∧ B)` · `∀x A(x) ∧ B ⇔ ∀x (A(x) ∧ B)`"
     },
     "es": {
      "id": "fs-propiedades-de-los-cuantificadores-5",
      "t": "lo mismo con ∧ (es el paso 5 de la forma clausal)",
      "x": "`∃x A(x) ∧ B ⇔ ∃x (A(x) ∧ B)` · `∀x A(x) ∧ B ⇔ ∀x (A(x) ∧ B)`"
     }
    }
   ]
  }
 ]
};
