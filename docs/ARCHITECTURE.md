# Arquitectura

Aula Mada és una aplicació de pàgina única (SPA) feta amb **React 19**, **React Router 7** i **Vite**.
Té una part pública (portada i catàleg de graus) i el campus, amb els cursos i l'aspecte de l'aula virtual.

```
src/
  main.jsx               punt d'entrada: router, idioma i forats de la barra
  app/                   closca: barra superior, peu, capçalera de curs, pestanyes, rutes, 404
  catalog/degrees.js     graus i semestres: què està disponible i què arribarà aviat
  pages/landing/         portada pública
  pages/inici/           campus: inici del lloc
  pages/home/            campus: Tauler i Els meus cursos
  pages/graus/           catàleg de graus i pàgina de cada grau
  pages/compte/          entrar, crear un compte i el meu compte
  catalog/progress.js    progrés de cada assignatura per al tauler
  courses/
    registry.js          metadades dels cursos, targetes de la portada i activitats
    _kit/                plantilla d'assignatura: temari en dos modes, mètodes, pràctica, simulacre, formulari
    <curs>/index.jsx     cada curs, carregat sota demanda (un fragment de codi per curs)
    <curs>/kit/          dades del curs per a la plantilla: índex, lliçons, banc, formulari, mètodes
  shared/cpp/            motor de C++ compartit (Clang a WebAssembly + intèrpret de reserva)
  lib/                   utilitats: idioma, localStorage, comptes i sincronització, contingut ric, enllaços interns
  styles/                fitxes de disseny (tokens.css), estils base, de la closca i de les pàgines públiques
public/
  clang/                 binaris del compilador (≈29 MB, només es baixen si s'executa C++)
  compiler/              workers del compilador, de l'executor i de l'intèrpret
tools/
  validate-courses.mjs   validador del contingut de les assignatures (dins de npm run lint)
  kit-i18n.mjs           traducció dels mòduls de contingut (todo / done / report)
  l-i18n.mjs             traducció de les crides L(ca, es) del codi a L(ca, es, en)
  kit-import/            importadors de la versió anterior (ja fets; moduleSource es fa servir per reescriure mòduls)
  postcss-scope-courses.js  connector de PostCSS que aïlla els estils de cada curs
supabase/                migracions de la base de dades (comptes) i proves de RLS
tests/e2e/               proves de Playwright
```

## Rutes

| Ruta | Pàgina |
|---|---|
| `/` | Portada pública (pàgina a part, amb capçalera i peu propis): avantatges, graus i «Crea un compte» |
| `/entrar`, `/registre`, `/auth/callback` | Entrar, crear un compte (el mateix camí) i tornada de Google o del correu |
| `/graus`, `/graus/:grau` | Catàleg de graus, públic (`/grados/…` i `/degrees/…` hi redirigeixen) |
| `/inici` | Campus: inici del lloc (resum, graus, notícies) |
| `/tauler` | Campus: tauler (resum, progrés per assignatura, accedits recentment, calendari) |
| `/cursos` | Campus: els meus cursos |
| `/compte` | Campus: el meu compte |
| `/mates/:secció`, `/logica/:secció`… | Campus: cada curs (`inici`, `temari/:tema`, `metodes`, `practica`, `simulacre`, `simulacre/pdf`) |

Amb els comptes configurats, el campus és només per a qui ha entrat (`app/RequireAccount.jsx`):
qui no ha entrat va a `/entrar` i en sortir torna a la portada. Sense comptes (mode local), és obert.

Els enllaços de la versió antica d'un sol fitxer (`mates.html#exam`) es redirigeixen a
la ruta nova (`/mates/exam`).

## Convencions

- **Idioma**: la interfície i el contingut tenen tres idiomes (`ui`: `ca`, `es`, `en`). El contingut
  dels cursos són trios `[ca, es, en]`; un tema que encara no té anglès no declara `'en'` a `langs` i
  es mostra en castellà amb un avís. Als cursos: `const { ui, L } = useLang()` i
  `L('text en català', 'texto en castellano', 'English text')` (`lang` només val `ca` o `es`: és per
  al codi antic). A les pàgines noves i a la closca: `const { ui, t } = useLang()` i
  `t(['ca', 'es', 'en'])` o `t({ ca, es, en })` (si falta l'anglès, es mostra el castellà).
- **Plantilla d'assignatura**: totes les assignatures fan servir `courses/_kit/`; el format de les dades,
  els blocs, els tipus d'exercici i com afegir un tema són a [PLANTILLA.md](PLANTILLA.md).
  Tot es torna a pintar en canviar l'idioma, sense perdre l'estat. El primer cop es tria l'idioma del navegador.
- **Estat desat**: `lib/storage.js` i `lib/useStoredState.js` (sempre amb `try/catch`:
  en mode privat `localStorage` pot fallar). **Totes les escriptures han de passar per
  `lsSet`/`lsSetJSON`/`lsDel`**: és com la sincronització amb el compte (`lib/sync.js`) sap què
  ha canviat. No crideu `localStorage.setItem` directament des d'un curs. Les claus que no s'han de
  sincronitzar (preferències del dispositiu) van a `LOCAL_ONLY` de `lib/sync.js`.
- **Comptes**: `const { status, user, profile } = useAuth()` (`status`: `disabled`, `loading`,
  `guest` o `user`). Sense les variables `VITE_SUPABASE_*` la web funciona sense comptes. Vegeu
  [COMPTES.md](COMPTES.md).
- **Catàleg**: una assignatura nova s'afegeix a `src/courses/registry.js` (`COURSES` i `CARDS`, amb
  `degree` i `term`) i a la llista `subjects` del seu semestre a `src/catalog/degrees.js`.
- **Disseny**: el campus té l'aspecte d'una aula virtual acadèmica (Moodle): fons blanc pla, línies
  fines, enllaços i botons oliva, icones turquesa i lila, targetes amb patró i el calaix de blocs a la
  dreta. Totes les pàgines del campus fan servir `app/Page.jsx` (contingut + calaix) i els blocs de
  `app/blocks.jsx` (navegació, calendari, llistes d'enllaços). La portada pública és a part, amb els
  mateixos colors. Res de degradats, ombres grans ni tipografies decoratives. Fitxes `--am-*` a
  `src/styles/tokens.css`; peces `am-*` a `src/styles/site.css`.
- **Progrés al tauler**: `catalog/progress.js` llegeix l'estat que ja desen els cursos. Un curs nou que
  desi el progrés hi afegeix la seva funció (i el total a la prova `tests/e2e/progress.spec.js`).
- **Estils**: cada curs importa el seu CSS des de `src/courses/<curs>/`. El connector
  `tools/postcss-scope-courses.js` prefixa tots els selectors amb `[data-course="<curs>"]`,
  l'atribut que la plantilla posa al contingut del curs (lliçons, laboratoris, exercicis), de manera
  que els estils d'un curs no afecten els altres. El mateix passa amb `src/pages/<pàgina>/` i `[data-page]`.
- **Barra superior**: un curs pot posar eines a la barra amb `<NavbarTools>` i una franja
  a sota amb `<NavbarBelow>`; tots dos forats porten el `data-course` del curs obert.
- **Contingut ric**: la teoria i els enunciats amb marcatge es guarden com a HTML i es
  pinten amb `<Rich html={…} />`. Tot el que és interactiu (botons, entrades, laboratoris,
  qüestionaris, rellotges) són components de React. No s'assigna `innerHTML`, no hi ha
  atributs `onclick` dins l'HTML ni funcions globals a `window`.
- **Lògica pura** (generadors d'exercicis, motors matemàtics, intèrprets, correctors):
  mòduls ES sense accés al DOM, importats pels components.
- **Noms de fitxer**: en desenvolupament el navegador demana cada mòdul pel seu nom, i els
  bloquejadors de publicitat (uBlock Origin, AdGuard… amb la llista EasyPrivacy) bloquegen noms
  com `quant.js`, `ads.js`, `analytics.js` o `track.js`. Feu servir noms descriptius en català
  (`quantificadors.js`) i comproveu-ho si un mòdul no es carrega en un navegador amb bloquejador.
- **Dades grans**: fitxers JSON dins del curs, carregats amb `import()` dinàmic quan
  convé (per exemple, un fitxer per idioma).

## Desenvolupament

```bash
npm install
npm run dev          # http://localhost:5173
npm run lint         # ESLint i el validador de les assignatures (tools/validate-courses.mjs)
npm run build        # genera dist/
npm run preview      # serveix dist/ a http://localhost:4173
npm run test:e2e     # proves de Playwright sobre dist/ (i dist-comptes, amb Supabase simulat)
npm run test:db      # la migració de supabase/ en un Postgres amb Docker
```

Per tenir diversos servidors de desenvolupament alhora, cadascun amb la seva memòria
cau: `VITE_CACHE_DIR=node_modules/.vite-2 npx vite --port 5174`.
