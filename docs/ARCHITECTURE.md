# Arquitectura

Aula Mada és una aplicació de pàgina única (SPA) feta amb **React 19**, **React Router 7** i **Vite**.
Té una part pública (portada i catàleg de graus) i el campus, amb els cursos i l'aspecte de l'aula virtual.

```
src/
  main.jsx               punt d'entrada: router, idioma i forats de la barra
  app/                   closca: barra superior, peu, capçalera de curs, pestanyes, rutes, 404
  catalog/degrees.js     graus i semestres: què està disponible i què arribarà aviat
  pages/landing/         portada pública
  pages/graus/           catàleg de graus i pàgina de cada grau
  pages/compte/          entrar, tornada de l'inici de sessió i el meu compte
  pages/home/            campus: Tauler i Els meus cursos
  courses/
    registry.js          metadades dels cursos, targetes de la portada i activitats
    <curs>/index.jsx     cada curs, carregat sota demanda (un fragment de codi per curs)
  shared/cpp/            motor de C++ compartit (Clang a WebAssembly + intèrpret de reserva)
  lib/                   utilitats: idioma, localStorage, comptes i sincronització, contingut ric, enllaços interns
  styles/                fitxes de disseny (tokens.css), estils base, de la closca i de les pàgines públiques
public/
  clang/                 binaris del compilador (≈29 MB, només es baixen si s'executa C++)
  compiler/              workers del compilador, de l'executor i de l'intèrpret
tools/                   connector de PostCSS que aïlla els estils de cada curs
supabase/                migracions de la base de dades (comptes) i proves de RLS
tests/e2e/               proves de Playwright
```

## Rutes

| Ruta | Pàgina |
|---|---|
| `/` | Portada pública |
| `/graus`, `/graus/:grau` | Catàleg de graus (`/grados/…` i `/degrees/…` hi redirigeixen) |
| `/cursos`, `/tauler` | Els meus cursos i tauler |
| `/inici` | Redirigeix a `/graus/informatica` |
| `/entrar`, `/auth/callback`, `/compte` | Entrar, tornada de Google o del correu, el meu compte |
| `/mates/:secció` | Teoria Mates CP1 |
| `/logica/:secció` | Lògica i grafs |
| `/economia/:secció` | Principis d'economia |
| `/computadors/:secció` | Computadors CP1 |
| `/programacio/:pàgina` | Iniciació a la Programació |
| `/pseudocodi/:secció` | Pseudocodi CP1 |
| `/cpp/:vista` | C++ a contrarellotge |

Els enllaços de la versió antica d'un sol fitxer (`mates.html#exam`) es redirigeixen a
la ruta nova (`/mates/exam`).

## Convencions

- **Idioma**: la interfície té tres idiomes (`ui`: `ca`, `es`, `en`) i el contingut dels cursos, dos
  (`lang`: `ca`, `es`; en anglès els cursos es mostren en castellà, amb un avís).
  Als cursos: `const { lang, L, li } = useLang()` i `L('text en català', 'texto en castellano')`.
  A les pàgines noves i a la closca: `const { ui, t } = useLang()` i `t(['ca', 'es', 'en'])` o
  `t({ ca, es, en })` (si falta l'anglès, es mostra el castellà).
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
- **Disseny**: les pàgines públiques fan servir les fitxes `--am-*` de `src/styles/tokens.css` i les
  peces comunes `am-*` de `src/styles/site.css` (botons, insígnies, peu).
- **Estils**: cada curs importa el seu CSS des de `src/courses/<curs>/`. El connector
  `tools/postcss-scope-courses.js` prefixa tots els selectors amb `[data-course="<curs>"]`,
  l'atribut de l'element arrel del curs (`<CourseScope>`), de manera que els estils d'un curs
  no afecten els altres. El mateix passa amb `src/pages/<pàgina>/` i `[data-page]`.
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
npm run lint
npm run build        # genera dist/
npm run preview      # serveix dist/ a http://localhost:4173
npm run test:e2e     # proves de Playwright sobre dist/ (i dist-comptes, amb Supabase simulat)
npm run test:db      # la migració de supabase/ en un Postgres amb Docker
```

Per tenir diversos servidors de desenvolupament alhora, cadascun amb la seva memòria
cau: `VITE_CACHE_DIR=node_modules/.vite-2 npx vite --port 5174`.
