# Plantilla d'assignatura (kit)

Totes les assignatures fan servir el mateix motor, a `src/courses/_kit/`. Una assignatura només aporta
**dades** (índex, lliçons, banc, formulari, mètodes) i, si cal, **peces pròpies** (laboratoris i tipus
d'exercici). El model complet és el T3 de Computadors (`src/courses/comp/kit/t3/`); Matemàtiques
(`src/courses/mates/kit/`) és el model d'una assignatura amb generadors propis.

## Què veu l'alumne

| Pestanya | Ruta | Què hi ha |
|---|---|---|
| Inici | `/<curs>` | Temes, progrés i accessos |
| Temari | `/<curs>/temari/<tema>` | Índex a l'esquerra i la lliçó, amb el selector **Directe ↔ Explicat**; comprovacions dins la lliçó i «Exercicis tipus examen» al final |
| Mètodes | `/<curs>/metodes` | Per tema: trucs, exercicis resolts pas a pas i «el dia de l'examen» |
| Pràctica | `/<curs>/practica` | Tres nivells (Fàcil · Tipus examen · Difícil), exercicis fixos i famílies que en generen de nous |
| Simulacre | `/<curs>/simulacre` | 45, 60, 90 o 120 min, amb rellotge, correcció, historial i PDF imprimible (amb annex de solucions) |

A tot el lloc hi ha el **formulari flotant** (FormulaDock). El progrés es desa a `localStorage`
(`kit-<k>-v1`) i se sincronitza amb el compte (vegeu [COMPTES.md](COMPTES.md)).

## Fitxers d'una assignatura

```
src/courses/<k>/
  index.jsx            component del curs: <CourseKit course={…}> amb labs, LabWrap, types i formats
  kit/
    course.js          metadades i càrrega de les peces (vegeu més avall)
    toc.js             índex: temes i apartats
    units/<tema>.js    una lliçó per tema (o, com el T3 de comp, una carpeta per tema)
    bank.js            banc d'exercicis: { items, families }
    formulas.js        formulari: { groups: [{ unit, t, items: [{ id, t, tex | x, note }] }] }
    methods.js         mètodes d'examen per tema
    types.jsx          (opcional) tipus d'exercici propis
    labs/…             (opcional) laboratoris
```

### `course.js`

```js
export default {
  k: 'eco', path: '/economia',
  title: [ca, es, en], sub: [ca, es, en], summary: [ca, es, en],
  units,                                   // toc amb load: () => import('./units/t1.js')
  bank: () => import('./bank.js'),
  formulas: () => import('./formulas.js'),
  methods: () => import('./methods.js'),
  formats,                                 // (opcional) models d'examen reals per al simulacre
  legacy, migrate, legacyClass,            // (opcional) adreces, progrés i estils de la versió anterior
};
```

`index.jsx` hi afegeix el que són components: `labs` (`{ id: React.lazy(…) }`), `LabWrap` (context dels
laboratoris), `types` (tipus propis) i, si cal, `formats` calculats.

### `toc.js`

```js
{ id: 't1', n: 1, t: [ca, es, en], langs: ['ca', 'es', 'en'],
  sections: [{ id: 't1-1-que-es', t: [ca, es, en], hard?: true }] }
```

`langs` diu en quins idiomes està el tema. Si no hi ha `'en'`, la interfície anglesa mostra el castellà
amb un avís.

### Una lliçó (`units/<tema>.js`)

```js
export default {
  intro: [blocs…],
  sections: { 't1-1-que-es': [blocs…], … },   // les mateixes claus que l'índex
  examEnd: [{ ref: 't1-m-01' }, { id, type, q, … }],
};
```

## Textos i idiomes

- Tot text de contingut és un **trio** `[ca, es, en]`. Un text igual en tots els idiomes pot ser una
  cadena sola. Si falta l'anglès, `pick()` mostra el castellà.
- Marcatge mínim: `**negreta**`, `*cursiva*`, `` `codi` ``, `$TeX$` i `$$TeX$$` (Temml), `[text](url)`.
- Als components: `const { ui, L } = useLang()`; `ui` és `ca`, `es` o `en`, i `L(ca, es, en)` tria el text.
  Els laboratoris han de fer servir `ui` (no `lang`, que només val `ca` o `es`).

### Traduir

S'escriu en un idioma i es generen els altres dos.

- **Mòduls de dades** (lliçons, banc, índex, formulari): `node tools/kit-i18n.mjs todo <mòdul.js>…`
  crea `inbox/i18n/<k>/…/<mòdul>.todo.txt` (línies `@n text`); s'escriu `<mòdul>.en.txt` amb les mateixes
  línies traduïdes (mateix marcatge, TeX, `¶` i etiquetes) i `node tools/kit-i18n.mjs done <mòdul.js>…`
  les aplica. `node tools/kit-i18n.mjs report` mostra la cobertura.
- **Codi** (laboratoris, generadors): `node tools/l-i18n.mjs todo <nom> <fitxers…>` i `done`, que
  converteixen `L(ca, es)` en `L(ca, es, en)`.

`inbox/` és a `.gitignore`: els fitxers de traducció i els PDF originals no es publiquen.

## Blocs

Cada bloc és `{ t, …, mode? }`. Sense `mode` surt en els dos modes; amb `mode: 'direct'` o
`mode: 'explained'`, només en aquell.

| Bloc | Camps |
|---|---|
| `p`, `h` | `{ x }` |
| `list` | `{ items, ordered? }` |
| `table` | `{ head, rows, caption? }` |
| `def` `prop` `rule` `thm` `note` `tip` `warn` `summary` `method` `box` | `{ title?, x \| items \| blocks, label? }` |
| `example` | `{ title?, q, steps: [x \| { x, why }], result? }` |
| `diagram` | `{ svg, caption?, wide? }` (SVG propi, amb els textos traduïbles) |
| `lab` | `{ id, props? }` (un laboratori de `course.labs`) |
| `code` | `{ lang, src }` (executable si l'assignatura té executor) |
| `check` | `{ ex }` (un exercici o `{ ref, seed? }`) |
| `formula` | `{ ids }` (fórmules del formulari) |
| `steps` | `{ steps, reveal? }` (passos que es mostren un a un) |
| `details`, `cols`, `hr`, `html`, `lang` | desplegable, columnes, separador, HTML importat, blocs per idioma |

**Dos modes.** Allò essencial (definicions, regles, un exemple) va sense `mode`. Les explicacions
llargues, els exemples de més, els laboratoris i els «per entendre-ho» porten `mode: 'explained'`. Un
resum compacte («d'un cop d'ull») pot portar `mode: 'direct'`.

## Exercicis

Un exercici: `{ id, unit, level: 'easy' | 'exam' | 'hard', type, q | qb, …, steps | sol, src, srcName?, basedOn?, min?, pts? }`.

- **Tipus de base** (`_kit/exercise/types.jsx`): `mcq`, `multi`, `tf`, `num`, `nums`, `match`, `short`, `open`.
- **Tipus propis** (`course.types`): `tt` i `bool` a Computadors; `mbank`, `mprac` i `mexam` a
  Matemàtiques; `cpp` i `pseudo` a Programació; `seq` (successió de vèrtexs: circuit d'Euler, de
  Hamilton, camí més curt o recorregut), `colour` (acolorir els vèrtexs clicant-los) i `matrix` (matriu
  d'adjacència) a Lògica i grafs (`src/courses/logica/graphs/types.jsx`). Un tipus té `Input`, `check`, `space` i, per al PDF,
  `Print` i la clau de solucions: `key(ex, tr)` (text) o `Key({ ex })` (component, per a solucions
  per apartats o jocs de proves).
- **Famílies**: `{ id, unit, level, gen(rng, seed) → exercici }`. La mateixa llavor dona sempre el mateix
  enunciat; la pràctica en genera de nous sense fi. Cada tema hauria de tenir famílies dels tres nivells.
- **Citar el banc**: a `check.ex`, `examEnd` i `methods.solved` es pot posar `{ ref: 'id', seed? }` en
  lloc de copiar l'exercici (`_kit/refs.js`).
- **Rúbrica** (opcional, als de nivell examen): `rubric: [{ pts, x: [ca, es, en] }]`, què puntua cada
  part de la resposta. La farà servir la correcció d'exàmens en paper.
- **Llavors deterministes**: un generador només pot fer servir el `rng` que rep, mai `Math.random` ni
  una ordenació amb una comparació aleatòria (el resultat dependria del navegador).

## Figures de grafs

Lògica i grafs té un motor de grafs (`src/courses/logica/graphs/model.js`: valències, matrius, Euler,
Hamilton, Dijkstra, arbres generadors, recorreguts, acoloriment, isomorfisme, planaritat i C.P.M.) i
`graphSvg(G, opcions)` (`graphs/svg.js`), que dibuixa un graf com a SVG per a un bloc `diagram` o un
enunciat: posicions en cercle, per nivells o donades (`grid`), pesos, fletxes, bucles, costats múltiples i
vèrtexs o costats remarcats. Les lliçons de grafs ho fan servir amb les ajudes de `graphs/lesson.js`
(`fig`, `figs`, `galleryFig`); els laboratoris són a `components/GraphLabs.jsx`.

## Mètodes d'examen (`methods.js`)

```js
export default {
  t1: {
    solvedH: [ca, es, en],
    tricks: [{ t: 'method', title, items: [text…] }],         // 2 o 3 requadres
    solved: [{ ref, day? } | { id, q, steps: [x | { x, why }] }], // 2 o 3 resolts
    day: [{ t: 'list', items: [text…] }],                     // el dia de l'examen
  },
};
```

## Afegir un tema

1. Afegeix l'entrada a `toc.js` (amb els apartats) i el `load` a `course.js`.
2. Escriu `units/<tema>.js`: blocs en els dos modes, una o dues comprovacions per apartat i de 3 a 6
   exercicis a `examEnd`.
3. Afegeix-ne les fórmules a `formulas.js`, els exercicis i les famílies a `bank.js` i els mètodes a `methods.js`.
4. Si té laboratoris, registra'ls a `course.labs` (a `index.jsx`).
5. Tradueix-lo i posa `langs: ['ca', 'es', 'en']`.
6. `npm run lint` (inclou el validador), `npm run build` i les proves de Playwright de l'assignatura.

La guia completa per crear lliçons a partir de PDF o diapositives és a la skill
`.claude/skills/add-content/SKILL.md`.

## Validador

`node tools/validate-courses.mjs [k…]` (dins de `npm run lint`) comprova, per a cada assignatura:

- que els ids dels exercicis (banc, famílies, comprovacions i mètodes) i dels apartats siguin únics;
- que els apartats de cada lliçó siguin a l'índex;
- que els temes amb `'en'` a `langs` no tinguin cap text sense anglès;
- que totes les `ref` existeixin al banc;
- que cada tema tingui `examEnd` i mètodes d'examen.
