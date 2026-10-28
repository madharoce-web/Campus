---
name: add-content
description: Crea o amplia el contingut d'Aula Mada (un tema, una assignatura o un grau nou) a partir de PDF, diapositives o un temari, en el format de la plantilla d'assignatura (src/courses/_kit). Fes-la servir quan calgui escriure una lliçó, laboratoris, exercicis, famílies, mètodes d'examen o el formulari d'una assignatura.
---

# Afegir contingut a Aula Mada

Abans de començar, llegeix `docs/PLANTILLA.md` (format de les dades, blocs i tipus d'exercici) i mira els
models: el T3 de Computadors (`src/courses/comp/kit/t3/`) i Matemàtiques (`src/courses/mates/kit/`).

## Principi

Les lliçons han de ser **molt dinàmiques**, no apunts passats a net. Cada tema porta:

- explicació en **dos modes** (Directe i Explicat);
- **laboratoris interactius** on l'alumne toca i veu el resultat (simuladors, gràfiques que es mouen,
  taules que s'omplen, calculadores pas a pas);
- **diagrames SVG** propis;
- **exemples resolts** amb passos que es revelen un a un;
- **comprovacions** després de cada concepte;
- **exercicis tipus examen** al final (`examEnd`);
- **mètodes d'examen** (`methods.js`);
- pràctica que es genera sense fi (**famílies** amb llavor en els tres nivells);
- simulacre i formulari.

## Normes que no es negocien

- **No copiïs textos ni imatges** de les diapositives, dels PDF ni de cap web. Molt material és
  CC BY-NC-ND (sense obra derivada): fes-lo servir només com a guia del temari i redacta sempre de nou.
- Els exercicis són nous, «basats en» els de classe (`basedOn`), amb escenaris nous.
- **No posis noms de professors.**
- Els PDF originals van a `inbox/<assignatura>/`, que és a `.gitignore` i no es publica.
- Comentaris del codi i missatges de commit en català. Cap nom de model d'IA en commits, codi ni documents.
- Disseny sobri, com una aula virtual Moodle; color de marca verd oliva (`--am-brand`), sense blau.

## Flux per crear un tema a partir de PDF o diapositives

1. **Recull el material.**
   - Extreu el text amb `pdftotext -layout` o amb la skill de PDF.
   - Mira les figures: si cal, converteix les pàgines en imatge i llegeix-les.
   - Anota la llicència.
2. **Fes el mapa del tema.**
   - Objectius.
   - Apartats en un ordre lògic per estudiar (pot no ser el de les diapositives).
   - Definicions i resultats clau.
   - Què s'avalua: busca exàmens anteriors i activitats de classe.
3. **Complementa amb internet** (cerca web):
   - per explicar el que les diapositives donen per sabut;
   - per comprovar definicions i notació estàndard;
   - per trobar exemples i errors típics;
   - per detectar errates del material, que es marquen en un requadre «Matisos i errates».
   - Marca en mode Explicat el que ampliï el temari («ampliació: no surt a les diapositives»).
   - No copiïs textos de webs.
4. **Redacta la lliçó** en el format del kit.
   - `toc.js` amb els apartats (`hard: true` als difícils).
   - La lliçó amb els blocs i els dos modes: l'essencial (definicions, regles, un exemple) sense
     `mode`; explicacions llargues, exemples extra, laboratoris i «per entendre-ho» amb
     `mode: 'explained'`; si cal, un resum compacte amb `mode: 'direct'`.
   - Les fórmules a `formulas.js`.
   - Escriu en un idioma i tradueix als altres dos (vegeu «Idiomes»).
5. **Dissenya els laboratoris** com a components de React a `src/courses/<k>/kit/labs/` (o al costat del tema):
   - pocs controls i resposta immediata;
   - accessibles amb el teclat i usables al mòbil;
   - textos amb `L(ca, es, en)` de `useLang()` i l'idioma amb `ui` (no `lang`);
   - si cal un motor, escriu-lo pur (sense DOM) i amb proves, com `src/courses/comp/kit/t3/boole.js`;
   - registra'ls a `course.labs` a `src/courses/<k>/index.jsx` i fes-los servir amb `{ t: 'lab', id }`.
6. **Exercicis.**
   - Una o dues comprovacions per apartat (`{ t: 'check', ex }`); si hi ha famílies, `ex: { ref, seed }`.
   - De 3 a 6 exercicis tipus examen a `examEnd` (`{ ref }` del banc o nous).
   - Famílies amb llavor en els tres nivells (Fàcil, Tipus examen, Difícil) quan el tipus ho permeti.
   - Exercicis fixos basats en les activitats de classe, amb solucions pas a pas (`steps` amb `why`).
7. **Mètodes d'examen** a `methods.js`: 2 o 3 requadres de trucs, 2 o 3 exercicis resolts i «el dia
   de l'examen» (temps, redacció, comprovacions).
8. **Registra-ho**: `toc.js` i el `load` a `course.js`. Per a una assignatura nova, també
   `src/courses/registry.js` (`COURSES` i `CARDS`) i `src/catalog/degrees.js`.
9. **Valida**:
   - `npm run lint` (ESLint i `tools/validate-courses.mjs`: ids únics, anglès complet, `ref` existents,
     `examEnd` i mètodes a cada tema);
   - `npm run build`;
   - les proves de Playwright de l'assignatura (`npx playwright test tests/e2e/<k>.spec.js --project=escriptori`),
     amb un spec propi si hi ha laboratoris;
   - captures en els tres idiomes, a l'escriptori i al mòbil;
   - després, commit i push.

## Idiomes

Tot text de contingut és un trio `[ca, es, en]`.

- Mòduls nous: escriu el trio directament.
- Mòduls importats o grans:
  `node tools/kit-i18n.mjs todo <mòdul.js>` → escriu `<mòdul>.en.txt` (mateixes línies `@n`, mateix
  marcatge, TeX, `¶` i etiquetes; vigila els espais del principi i del final) →
  `node tools/kit-i18n.mjs done <mòdul.js>`.
- Codi amb `L(ca, es)`: `node tools/l-i18n.mjs todo <nom> <fitxers…>` i `done`.
- Al final, `langs: ['ca', 'es', 'en']` al `toc.js` del tema.

## Grau nou

Primer el catàleg (`src/catalog/`) amb les assignatures a «Properament» i la llista d'espera; després,
cada assignatura amb el flux anterior, començant per la que tingui l'examen abans.
