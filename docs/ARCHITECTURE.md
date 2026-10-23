# Arquitectura

Campus és una aplicació de pàgina única (SPA) feta amb **React 19**, **React Router 7** i **Vite**.
Reuneix els cursos del primer semestre amb l'aspecte de l'aula virtual.

```
src/
  main.jsx               punt d'entrada: router, idioma i forats de la barra
  app/                   closca: barra superior, capçalera de curs, pestanyes, rutes, 404
  pages/home/            portada (Inici, Tauler, Els meus cursos)
  courses/
    registry.js          metadades dels cursos, targetes de la portada i activitats
    <curs>/index.jsx     cada curs, carregat sota demanda (un fragment de codi per curs)
  shared/cpp/            motor de C++ compartit (Clang a WebAssembly + intèrpret de reserva)
  lib/                   utilitats: idioma, localStorage, contingut ric, enllaços interns
  styles/                estils base i de la closca
public/
  clang/                 binaris del compilador (≈29 MB, només es baixen si s'executa C++)
  compiler/              workers del compilador, de l'executor i de l'intèrpret
tools/                   connector de PostCSS que aïlla els estils de cada curs
tests/e2e/               proves de Playwright
```

## Rutes

| Ruta | Pàgina |
|---|---|
| `/`, `/cursos` | Els meus cursos |
| `/inici`, `/tauler` | Inici del lloc i tauler |
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

- **Idioma**: `const { lang, L, li } = useLang()`. `L('text en català', 'texto en castellano')`.
  Tot es torna a pintar en canviar l'idioma, sense perdre l'estat.
- **Estat desat**: `lib/storage.js` i `lib/useStoredState.js` (sempre amb `try/catch`:
  en mode privat `localStorage` pot fallar).
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
npm run test:e2e     # proves de Playwright sobre dist/
```

Per tenir diversos servidors de desenvolupament alhora, cadascun amb la seva memòria
cau: `VITE_CACHE_DIR=node_modules/.vite-2 npx vite --port 5174`.
