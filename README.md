# Aula Mada

Web de estudio universitaria: apuntes, laboratorios interactivos, ejercicios resueltos paso a paso
y simulacros de examen. Ahora mismo incluye el primer semestre de Ingeniería Informática; ADE,
Enfermería y Magisterio aparecen como «próximamente». La interfaz está en catalán, castellano e
inglés; el contenido de los cursos, en catalán y castellano. Con Supabase configurado hay cuentas
(correo o Google) y el progreso se guarda en la nube; sin configurar, se guarda en el navegador
(ver [docs/COMPTES.md](docs/COMPTES.md)).

| Página | Ruta |
|---|---|
| Portada pública (qué es, cómo funciona, grados, precio, preguntas) | `/` |
| Catálogo de grados y página de cada grado | `/graus`, `/graus/:grau` (`/grados/…` y `/degrees/…` redirigen) |
| Mis cursos y área personal | `/cursos`, `/tauler` |
| Entrar y Mi cuenta | `/entrar`, `/compte` |

Cursos del primer semestre de Informática:

| Curso | Ruta | Contenido |
|---|---|---|
| Teoria Mates CP1 | `/mates` | Conjuntos, relaciones, números reales y complejos, inducción, matrices y determinantes. 30 laboratorios, ejercicios resueltos, banco de ejercicios, práctica y simulacro con reloj. |
| Lògica i grafs | `/logica` | Lógica de proposiciones y de predicados en diez unidades, herramientas (tablas de verdad, unificación), banco de 46 ejercicios tipo control, simulacro y teoría de grafos. |
| Principis d'economia | `/economia` | Tres temas con gráficos interactivos y una práctica de 43 ejercicios por niveles. |
| Computadors CP1 | `/computadors` | Introducción, representación de la información y multimedia, 19 laboratorios, práctica y simulacro. |
| Iniciació a la Programació | `/programacio` | Teoría y prácticas semanales de C++ con ejemplos que se compilan y ejecutan en el navegador, trazador paso a paso y cuestionarios. |
| Pseudocodi CP1 | `/pseudocodi` | Chuleta, editor con intérprete y juegos de pruebas, examen con corrección de notación y salida. |
| C++ a contrarellotge | `/cpp` | Ejercicios cronometrados con pruebas ocultas, simulacro de examen, progreso y patio de pruebas. |

El progreso se guarda en el navegador de cada persona (`localStorage`); la web no necesita
servidor ni base de datos.

## Tecnología

- [React 19](https://react.dev) + [React Router 7](https://reactrouter.com) + [Vite](https://vite.dev)
- JavaScript (JSX) sin dependencias de interfaz externas; CodeMirror 5 para el editor de C++
- Compilador de C++ real (Clang 22 compilado a WebAssembly) que se ejecuta en un Web Worker
- Pruebas de punta a punta con [Playwright](https://playwright.dev), ESLint

## Puesta en marcha

Necesitas [Node.js](https://nodejs.org) 20 o superior.

```bash
npm install
npm run dev            # servidor de desarrollo en http://localhost:5173
```

| Script | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve `dist/` en http://localhost:4173 (con las mismas cabeceras de seguridad que producción) |
| `npm run lint` | Revisa el código con ESLint |
| `npm run test:e2e` | Pruebas de Playwright sobre `dist/` (la primera vez: `npx playwright install chromium`) |
| `npm run test:db` | Prueba la migración de la base de datos en un Postgres con Docker |

## Publicarla

`npm run build` genera una web estática (`dist/`, unos 35 MB, de los que 29 MB son el
compilador de C++, que solo se descarga si alguien ejecuta código). Se puede servir desde
cualquier alojamiento estático que devuelva `index.html` para las rutas que no son archivos.

La guía completa, con alojamiento local, Docker, AWS (Amplify o S3 + CloudFront),
Cloudflare Pages y dominio propio, está en **[docs/DESPLIEGUE.md](docs/DESPLIEGUE.md)**.

## Estructura

```
src/
  app/            barra superior, pie, cabecera de curso, rutas
  catalog/        grados y semestres (qué hay disponible y qué llegará)
  pages/landing/  portada pública
  pages/graus/    catálogo de grados
  pages/compte/   entrar y Mi cuenta
  pages/home/     Mis cursos y área personal
  courses/<curso> cada curso, cargado bajo demanda
  shared/cpp/     motor de C++ compartido
  lib/            idioma, almacenamiento, utilidades
public/
  clang/          compilador de C++ (WebAssembly)
  compiler/       workers del compilador, del ejecutor y del intérprete
deploy/           nginx, AWS
supabase/         base de datos de las cuentas (migraciones y pruebas)
tests/e2e/        pruebas de Playwright
```

Las convenciones del código están en [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
Los componentes de terceros del compilador y sus licencias están en
[public/compiler/README.md](public/compiler/README.md).
