# Plan: de "Campus Semestre 1" a una plataforma de estudio multi-grado con usuarios

## Contexto

Hoy el repo es una SPA estática (React 19 + React Router 7 + Vite) con 7 cursos del 1er semestre de
Informática (`/mates`, `/logica`, `/economia`, `/computadors`, `/programacio`, `/pseudocodi`, `/cpp`),
en ca/es, sin servidor. Puntos clave del análisis:

- **Registro central** `src/courses/registry.js` (`COURSES`, `CARDS`, `ACTIVITIES`) alimenta rutas
  (`src/app/App.jsx`), portada (`src/pages/home/Home.jsx`) y barra. Es el punto natural para añadir grados.
- **Progreso solo en `localStorage`**, con claves dispersas por curso (`sem1-*`, `lx-*`, `eco-prac`,
  `ip-curs-v1`, `uda-pseudo-v1`, `cpp-contrarellotge-v1`, `ip-pati-*`), casi todo a través de
  `src/lib/storage.js` (`lsGet/lsSet/lsJSON/lsSetJSON`) y `src/lib/useStoredState.js`.
  → Se puede sincronizar con la nube **sin tocar los cursos**, interceptando esa capa.
- **Formatos de contenido heterogéneos**: mates en módulos JS, prog en JSON por página e idioma,
  eco en `docs.{ca,es}.json`, cpp en `exercises.json` con tests, etc. Funciona, pero no escala a
  decenas de asignaturas ni a grados no técnicos (ADE, Enfermería, Magisterio).
- i18n con `useLang()` → `L(ca, es)` / `li` (0/1) y pares `[ca, es]` en el registro.
- Despliegue ya preparado (nginx, Docker, AWS, `public/_headers` para Cloudflare/Netlify, CI con
  lint + build + Playwright). El compilador C++ son ficheros ≤ 8 MB (caben en Cloudflare Pages, límite 25 MiB/fichero).
- La portada actual es un "aula virtual" (Mis cursos / Tablero), no una landing de producto.

Objetivo: web profesional con marca propia neutral, landing pública, cuentas (email + Google) con
progreso guardado en la nube, catálogo de grados (Informática S1 disponible; ADE, Enfermería y
Magisterio "próximamente"), ca/es/en, panel de admin, estructura preparada (no activada) para plan
Gratis/Pro, y un flujo repetible para que Claude Code integre nuevos temarios a partir de PDFs/diapositivas.

Decisiones tomadas con el usuario: **Supabase** (región UE) · **marca propia neutral** (sin nombre ni
logos de la universidad) · **ca + es + en** · **naming por definir** (se proponen opciones).

---

## Fase 0 — Marca, legal y cimientos (antes de abrir a otros alumnos)

1. **Naming**: marca elegida **Aula Mada**. Comprobación (23-10-2026): `aulamada.com`, `aulamada.app`,
   `aulamada.es` y `aulamada.eu` aparecen libres; `mada.com`, `mada.es`, `mada.eu`, `mada.app` ya
   están registrados ("mada" es además la red de pagos de Arabia Saudí). Registrar `aulamada.com`
   (principal) y `aulamada.es` (redirige); reservar `@aulamada` en redes. Antes de invertir en la
   marca, buscar "Aula Mada" en el buscador de marcas de la OEPM y en TMview (EUIPO).
2. **Contenidos y derechos de autor** (riesgo principal del proyecto):
   - Reescribir siempre con palabras propias; no copiar diapositivas, figuras ni enunciados literales
     de exámenes; ejercicios "estilo examen" reformulados (otros datos, otra redacción).
   - Quitar referencias identificables (claves como `uda-*` pueden quedarse internas; nada visible:
     nombres de profesores, logos, códigos oficiales). Usar nombres de asignatura genéricos.
   - Página "Aviso legal / Contenidos" + canal de retirada (email) por si un titular reclama.
3. **RGPD / LSSI-CE** (España/UE): política de privacidad, aviso legal, términos de uso, borrado y
   exportación de cuenta (derecho de acceso/supresión), DPA de Supabase, datos en región UE.
   Analítica sin cookies (Cloudflare Web Analytics o Plausible/Umami) → evita banner de cookies;
   las sesiones de Supabase usan almacenamiento técnico (exento).
4. **Cobrar en el futuro** (solo dejarlo anotado): vender suscripciones requiere alta fiscal
   (autónomo, IVA OSS). Recomendado usar un *Merchant of Record* (Paddle o Lemon Squeezy) que
   gestiona el IVA europeo, o Stripe Billing + Stripe Tax si ya hay autónomo.

## Fase 1 — Hosting y dominio (recomendación)

| Pieza | Recomendado | Por qué | Coste |
|---|---|---|---|
| Web estática | **Cloudflare Pages** (conectado a GitHub) | Ancho de banda ilimitado, CDN, HTTPS, `_headers` ya existe en el repo, permite uso comercial (Vercel Hobby no) | 0 € |
| Backend | **Supabase**, región **Frankfurt (eu-central-1)** | Auth email/magic link + Google, Postgres con RLS, Storage, Edge Functions | 0 € (free: 50k MAU, 500 MB BD; se pausa tras 7 días sin actividad → pasar a Pro 25 $/mes al tener usuarios reales) |
| Email transaccional | **Resend** o **Brevo** como SMTP de Supabase | El SMTP por defecto de Supabase está muy limitado | 0 € (tier gratis) |
| Dominio | **GitHub Student Developer Pack** (Namecheap `.me` o Name.com/.TECH gratis 1 año) para empezar; a la larga `.com`/`.es`/`.eu` en **Cloudflare Registrar** (a precio de coste, ~10 €/año) | Ventaja de estudiante; `.es`/`.eu` dan confianza en España/UE | 0–12 €/año |
| Créditos extra | Pack de estudiante: Azure for Students, DigitalOcean (verificar ofertas vigentes en education.github.com/pack) | Por si algún día hace falta VPS | 0 € |
| CI | GitHub Actions (ya existe `ci.yml`) | — | 0 € |

Alternativa descartada: AWS (guía ya en `docs/DESPLIEGUE.md`) — funciona pero sin dominio gratis
y con más configuración; mantener el Dockerfile como plan B.

Cambios en repo: actualizar `docs/DESPLIEGUE.md` (sección Cloudflare Pages + Supabase como opción
principal), añadir el dominio de Supabase a `connect-src` de la CSP en `public/_headers` y
`deploy/nginx.conf`, variables `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` (`.env.example`).

## Fase 2 — Reestructurar la información: web pública + catálogo de grados

**Rutas nuevas** (`src/app/App.jsx`):

| Ruta | Página | Acceso |
|---|---|---|
| `/` | Landing (propósito, cómo funciona, "gratis", grados, FAQ; sección Pro oculta tras flag) | pública |
| `/grados`, `/grados/:grado` | Catálogo: Informática (1er semestre disponible), ADE / Enfermería / Magisterio "Próximamente" (+ formulario "avísame" que guarda email en Supabase) | pública |
| `/precios` | Preparada, oculta mientras `PRO_ENABLED=false` | pública |
| `/entrar`, `/registro`, `/auth/callback` | Login email (magic link/contraseña) y Google | pública |
| `/campus` (+ `/campus/tablero`) | La portada actual "Mis cursos" / tablero, ahora con progreso de la cuenta | usuario |
| `/mates/…`, `/logica/…` (rutas actuales) | Cursos | gratis/pro según metadatos |
| `/cuenta` | Perfil, grado, idioma, exportar/borrar datos | usuario |
| `/admin` | Panel admin | rol admin |
| `/legal/*` | Privacidad, aviso legal, términos | pública |

**Hecho (fase 2):** los cursos conservan sus rutas cortas (`/mates/...`): hay más de 200 enlaces
internos escritos a mano en los cursos y en sus datos, y cambiarlos rompería marcadores sin aportar
nada. Las asignaturas nuevas usarán un *slug* único (p. ej. `/ade-comptabilitat`) y el grado se lee
del catálogo. Las rutas públicas son `/graus` y `/graus/:grau`; `/grados/…` y `/degrees/…` redirigen. Decisión de producto: el contenido gratis puede seguir abierto sin cuenta (mejor
SEO y conversión) y la cuenta sirve para guardar progreso — recomendado; se puede cerrar luego con un flag.

**Catálogo**: nuevo `src/catalog/` (sustituye y envuelve `registry.js`):
- `degrees.js`: `{ k:'informatica', name:{ca,es,en}, status:'live'|'soon', terms:[{k:'s1', subjects:['mates','logica',...]}] }`
  y `ade`, `enfermeria`, `magisterio` con `status:'soon'`.
- Cada asignatura de `COURSES` gana `degree`, `term`, `tier:'free'|'pro'` (todo `free` ahora) y
  títulos `{ca,es,en}`. `CARDS`/`ACTIVITIES` se derivan por grado.
- Escalabilidad: cada asignatura sigue siendo un *chunk* cargado con `import()` → añadir 200
  asignaturas no engorda la carga inicial.

**Diseño profesional**: sistema de tokens CSS (`src/styles/tokens.css`: colores, tipografía, espaciado,
modo oscuro) usado por landing, auth, cuenta y admin; landing en `src/pages/landing/` con el mismo
aislamiento `[data-page]` que ya usa `tools/postcss-scope-courses.js`. SEO: `<title>`/meta por ruta
(ya existe `useDocumentTitle`), Open Graph, `sitemap.xml`, `robots.txt`; prerender estático de las
páginas públicas (`/`, `/grados`, `/legal/*`) en el build con un script Playwright sobre `dist/`
(ya hay Playwright) para que Google las indexe.

## Fase 3 — Cuentas y progreso en la nube (Supabase)

**Esquema** (`supabase/migrations/*.sql`, gestionado con Supabase CLI, todo con RLS):

```
profiles      (id → auth.users, display_name, degree, lang, role 'user'|'admin', plan 'free'|'pro', created_at)
user_state    (user_id, key, value jsonb, updated_at, PK(user_id,key))   -- espejo de las claves de localStorage
activity      (id, user_id, subject, item_id, kind, correct bool, score, duration_ms, created_at) -- intentos, para estadísticas y repaso adaptativo
subscriptions (user_id, provider, status, current_period_end, ...)       -- vacía; preparada para Pro
waitlist      (email, degree, created_at)                                -- "avísame" de grados próximos
```
RLS: cada usuario lee/escribe solo sus filas; `role='admin'` (función `is_admin()`) lee agregados.
`plan` y `role` solo modificables por service role / webhook, nunca desde el cliente.
Trigger `on auth.users insert` → crea `profiles`.

**Hecho (fase 3):** migración `supabase/migrations/20261023120000_comptes.sql` (probada con
`npm run test:db`), entrar con correo (enlace + código de 6 cifras, sin contraseñas) o Google,
sincronización de `localStorage`, `/compte` (perfil, exportar, borrar), «Avísame» en los grados
próximos y pruebas con un Supabase simulado. `user_state.value` es `text` (no `jsonb`): no todas las
claves guardan JSON. Pendiente: llamar a `activity` desde los correctores de los cursos (fase 5).
Guía de configuración: `docs/COMPTES.md`.

**Frontend**:
- `src/lib/supabase.js` (cliente; si faltan las variables la web sigue funcionando en modo local).
- `src/lib/auth.jsx`: `AuthProvider` + `useAuth()` (`user`, `profile`, `signInWithEmail`, `signInWithGoogle`, `signOut`).
- `src/lib/sync.js`: **sincronización transparente** — `lsSet` de `src/lib/storage.js` notifica a un
  listener; las claves de progreso (lista blanca de prefijos: `sem1-`, `lx-`, `eco-`, `ip-`, `uda-`, `cpp-`)
  se suben con *debounce* a `user_state`. Al iniciar sesión: descarga, fusiona por `updated_at`
  (el progreso local previo al registro se conserva y sube), escribe en localStorage y emite
  evento `storage` para que los stores existentes (p. ej. `src/courses/prog/state.js`, que ya escucha `storage`) se refresquen.
  Revisar los pocos accesos directos a `localStorage` fuera de `storage.js` y pasarlos por él.
- `src/lib/track.js` → **nombre descriptivo** (p. ej. `intents.js`, por la convención de bloqueadores
  de `docs/ARCHITECTURE.md`): `logAttempt({subject,item,correct,...})` llamado desde los correctores
  de práctica/examen (incremental, curso a curso).
- Navbar: avatar/menú de cuenta y botón "Entrar"; tablero `/campus/tablero` con progreso por asignatura y racha.
- Google OAuth: proyecto en Google Cloud, pantalla de consentimiento con dominio propio, URL de
  redirección de Supabase; Email: plantillas en ca/es/en con SMTP de Resend.

## Fase 4 — Planes Gratis/Pro (preparado, sin activar)

- `src/lib/plan.js`: `PRO_ENABLED = import.meta.env.VITE_PRO_ENABLED === 'true'`, `useEntitlement(feature)`,
  componente `<ProGate>` (si Pro desactivado → siempre permite).
- Metadatos `tier` en asignaturas/secciones y lista de features candidatas a Pro: simulacros
  ilimitados, repaso adaptativo de errores, exámenes personalizados, estadísticas avanzadas,
  descarga PDF de apuntes, generación de ejercicios con IA (futuro).
- `/precios` y bloque Pro de la landing listos pero ocultos.
- Aviso técnico documentado: el contenido que va en el *bundle* estático es público; el contenido
  Pro real deberá servirse desde Supabase (Storage/tabla con RLS por `plan`) o una Edge Function.
- Hueco para pagos: `supabase/functions/billing-webhook/` (esqueleto comentado) que actualizará
  `subscriptions` y `profiles.plan` cuando se elija Paddle/Lemon Squeezy/Stripe.

## Fase 5 — Panel de administración

`/admin` (solo `role='admin'`, protegido por RLS, no solo por la UI): usuarios (altas por día, por
grado, plan), actividad (intentos por asignatura, % aciertos por ejercicio → detecta ejercicios mal
planteados), lista de espera por grado, estado del catálogo (asignaturas, nº temas/ejercicios, idiomas
completos). Solo lectura; la creación de contenido se hace por el flujo de la Fase 6.

## Fase 6 — Flujo para añadir contenidos con Claude Code (Opus, esfuerzo alto)

1. **Formato común para asignaturas nuevas** ("kit"): `src/courses/_kit/` con componentes genéricos
   (teoría con índice y buscador — reutilizar `src/courses/_doc/` DocShell/Search/Txt —, ejercicios
   resueltos paso a paso, banco con filtros, test tipo test, problemas numéricos con generadores
   paramétricos, simulacro con reloj, repaso de errores) y un esquema de datos:
   `src/courses/<k>/content/{units.json, theory.<lang>.json, exercises.json, exam.json, generators.js}`
   con cada ejercicio etiquetado `{unit, topic, difficulty, type, source:'examen-2023-ord' (interno), lang}`.
   Los 7 cursos actuales **no se reescriben**; el kit sirve para nuevos y es la base de ADE/Enfermería/Magisterio.
2. **Validación**: `tools/validate-content.js` (esquema + ids únicos + todos los idiomas + soluciones
   presentes) ejecutado en `npm run lint` y CI; test Playwright genérico que abre cada asignatura del catálogo.
3. **Skill de proyecto** `.claude/skills/add-content/SKILL.md` + guía `docs/CONTENIDOS.md`:
   - Entrada: PDFs/diapositivas/exámenes en `inbox/<grado>/<asignatura>/` (en `.gitignore`, nunca se publica el original).
   - Pasos: extraer texto/figuras → mapa del temario (unidades/objetivos) → redactar teoría propia
     (ca/es/en) → ejemplos → ejercicios estilo examen reformulados con solución paso a paso →
     generadores cuando el tipo lo permita → registrar en `degrees.js` → validar → build + e2e → commit.
   - Reglas de calidad y legales de la Fase 0 integradas en la skill.
   Así, "agrega estos contenidos" + 60 diapositivas → un PR revisable con la lección integrada.
4. **Repaso a medida**: con `activity` + etiquetas de ejercicios, un modo "Repaso" que prioriza temas
   con más fallos (repetición espaciada simple) y genera simulacros con la distribución de temas de
   exámenes pasados (candidato a Pro).

## Fase 7 — i18n a tres idiomas

- Extender `src/lib/i18n.jsx`: `lang ∈ {ca, es, en}`, detección por navegador, nuevo helper
  `T({ca, es, en})` con *fallback* `en → es`; `L(ca, es)` y `li` siguen funcionando (compatibilidad
  con todo el código actual; `li` para `en` cae a castellano).
- Shell, landing, auth, cuenta, legal y catálogo: 100 % en tres idiomas. Contenido de los cursos
  actuales: ca/es (inglés progresivamente vía la skill de contenidos).

## Orden de ejecución sugerido (PRs pequeños)

1. Fase 0 (naming + textos legales) y Fase 1 (Cloudflare Pages + dominio) → la web actual ya online con marca.
2. Fase 2: catálogo + rutas nuevas + redirecciones + landing + tokens de diseño + i18n en (Fase 7 parte shell).
3. Fase 3: Supabase (migraciones, auth, sync de localStorage, cuenta, borrado/exportación).
4. Fase 5: admin. 5. Fase 4: estructura Pro. 6. Fase 6: kit + skill + validador; primera asignatura nueva como prueba.
7. Abrir a compañeros (beta cerrada), luego anunciar grados nuevos según la lista de espera.

## Verificación

- `npm run lint`, `npm run build`, `npm run test:e2e` en cada PR (CI existente).
- Nuevos e2e Playwright: landing y catálogo (grados "Próximamente"), redirecciones de rutas antiguas,
  cambio ca/es/en, modo sin Supabase (sin variables → la web funciona como hoy).
- Supabase local (`supabase start` con Docker): tests de RLS (un usuario no lee datos de otro; no
  puede cambiarse `plan`/`role`), flujo login email (Inbucket local) y sync: progreso hecho como
  invitado → registro → aparece en otro navegador.
- Google OAuth y emails reales probados en un proyecto Supabase de *staging* + despliegue *preview* de Cloudflare Pages.
- Comprobar CSP en producción (consola sin errores al conectar con Supabase y al compilar C++).
- Lighthouse en la landing (rendimiento, accesibilidad, SEO ≥ 90).

---

# Academia: fases A–I (desde el 29-10-2026)

Las fases 0–7 de arriba están hechas. Lo que sigue es el plan de la academia: registro guiado, portada, panel de precios y textos ya publicados (commits 188f974 y 4bf4c9b); quedan las fases A–I.

### Orden recomendado

| Fase | Qué | Depende de | Sesiones aprox. |
|---|---|---|---|
| **A** | Correo profesional (Resend y plantilla) | Nada (guiada, en paralelo) | 1 corta |
| **B** | **Grafos: temario nuevo con figuras, laboratorios y ejercicios** | Nada | 4–6 |
| **C** | Repaso a medida | Nada (aprovecha los ejercicios nuevos de B) | 1–2 |
| **D** | Base de la IA (servidor, cuotas y gasto) | Tu clave de Anthropic | 1 |
| **E** | Tutor IA en las lecciones | D | 2 |
| **F** | Corrección de exámenes en papel con IA | D | 2–3 |
| **G** | Pasarela de pago Redsys | Contrato con el banco (**en espera**) | 2–3 |
| **H** | Contenido continuo (PDF → lecciones) | Tus PDF en `inbox/` | Continuo |
| **I** | Apertura al público | A, G y la revisión legal | 1 |

**Por qué este orden:**
- **A** solo requiere tus pasos en Resend, y la puedes hacer mientras yo trabajo en B.
- **B** va primero porque es contenido que los alumnos usan ya y no depende de nada. Además, sus ejercicios con generador alimentan el repaso (C) y la corrección con IA (F).
- **D–F** se construyen y prueban antes de cobrar. La IA tiene su propio interruptor y, mientras no haya cobros, solo la usan los administradores y una lista de beta. Hoy `useEntitlement` lo permite todo mientras `billing.enabled` es falso, y para la IA eso sería un agujero de costes.
- **G** cuando digas.

---

### Fase A · Correo profesional (Resend)

**Objetivo:** correos de acceso sin marca de agua, con el código de 6 cifras y la estética de la web.

**Lo que haces tú (te guío pantalla a pantalla):**
1. Crear una cuenta en resend.com y añadir el dominio `aulamada.tech`.
2. Copiar a Cloudflare DNS los registros que da Resend (MX y TXT de SPF y DKIM en `send.aulamada.tech`, y DMARC `_dmarc`).
3. Esperar a que Resend marque el dominio como verificado.
4. Crear una API key con permiso *Sending access* y pegarla **directamente** en Supabase → Authentication → Emails → SMTP Settings. Los datos son:
   - host `smtp.resend.com`, puerto `465`, usuario `resend`;
   - remitente `Aula Mada <hola@aulamada.tech>`.
5. Pegar `supabase/templates/acces.html` en las plantillas «Confirm sign up» y «Magic link or OTP», con el asunto `Aula Mada · Codi d'accés · Código de acceso · Sign-in code`.
6. Subir el límite de envíos en Auth → Rate Limits (por ejemplo, 30 por hora).

**Lo que hago yo:**
- `docs/COMPTES.md`: cambiar `aulamada.com` por `aulamada.tech` y poner las Redirect URLs reales.
- Comprobar con una cuenta de prueba en los tres idiomas que el código llega y funciona.

**Hecho cuando:** el correo llega con el logotipo y el código, en el idioma de la web, y no va a spam en Gmail ni en Outlook.

---

### Fase B · Grafos en «Lógica y grafos»: rehacerlo entero

#### Diagnóstico de lo que hay

- **Tres temas desequilibrados.** Viene todo de la importación antigua:
  - `g1` «Teoría de grafos» tiene 13 apartados en un solo tema (3 233 líneas en `src/courses/logica/kit/units/g1.js`): conceptos, especiales, operaciones, representación, caminos, conexión, conectividad dirigida, Euler, Hamilton, camino más corto, isomorfismo, planaridad y coloreado.
  - `g2` «Árboles» tiene árboles, árboles generadores y recorridos.
  - `g3` es planificación de proyectos más cuestiones de repaso.
- **Sin un solo grafo dibujado.** Hay 0 bloques `diagram`. Los grafos se describen con texto y bloques `code` en ASCII (`e₁={A,B}…`, matrices con `⎡ ⎤`).
- **Sin laboratorios de grafos.** `index.jsx` solo registra `tt`, `unif`, `quant` y `order`, que son de lógica.
- **Ningún ejercicio de grafos en el banco.** En `kit/bank.js` hay 46 ítems, todos de lógica (tipos R, A, B, E y F). Solo hay unas 30 comprobaciones sueltas dentro de las lecciones.
- **No hay simulacro de grafos.** `MODELS` en `kit/course.js` solo tiene CP1 y CP2.

#### Lo que se construye

**1. Motor de grafos.** Lógica pura, probada en `src/courses/logica/graphs/model.js`:
- Grafo `{V, E, directed, weights}` y funciones:
  - grados y lema de los apretones de manos; matrices de adyacencia e incidencia; listas de adyacencia;
  - componentes conexas y fuertemente conexas; bipartición;
  - Euler (condición de grados y Hierholzer paso a paso);
  - Hamilton (búsqueda para n ≤ 10 y condiciones de Dirac y Ore);
  - Dijkstra con la tabla de etiquetas paso a paso, como se hace en el examen;
  - invariantes de isomorfismo y comprobación de una biyección;
  - planaridad: cotas e ≤ 3v−6 y e ≤ 2v−4, fórmula de Euler, contador de cruces;
  - coloreado de Welsh–Powell y número cromático para grafos pequeños;
  - BFS y DFS con cola y pila; Kruskal y Prim paso a paso;
  - planificación de proyectos: tiempos *early* y *late*, holguras y camino crítico.
- Todos los algoritmos «paso a paso» devuelven la lista de pasos. La misma lista sirve para la explicación, el laboratorio y la corrección.
- Generadores con semilla, con `rngOf` de `src/courses/_kit/bank.js`: grafos aleatorios conexos, ponderados, eulerianos o no, planares o no, árboles y proyectos.

**2. Figuras de verdad.** `src/courses/logica/graphs/svg.js`, `graphSvg(spec)`, devuelve un SVG para los bloques `diagram` que ya existen:
- disposición circular, en capas (árboles) o con posiciones dadas;
- aristas dirigidas con flecha, bucles, aristas múltiples curvas y pesos;
- resaltado de vértices, aristas y caminos; paleta de colores para el coloreado.
- Colores con clases (`.gr-v`, `.gr-e`, `.gr-hl`…) en `logica.css`, con los tokens de la marca. Así se ven bien en modo claro y oscuro, en el móvil y al imprimir el PDF del examen.
- Los ejercicios ya admiten bloques en el enunciado (`ex.qb` en `exercise/Exercise.jsx`), así que los enunciados llevan su figura.
- Las matrices pasan de ASCII a LaTeX `pmatrix`, que el kit ya convierte a MathML con `tex.js`, o a tablas.

**3. Temario reorganizado en 8 temas cortos**, con un objetivo claro cada uno. Los ids de los apartados se mantienen, para no perder el progreso «leído» ni los enlaces antiguos.

| Tema | Apartados (ids actuales que se mueven) | Novedades |
|---|---|---|
| **G1 Qué es un grafo** | `1-conceptes-basics`, `2-grafs-especials`, `3-operacions-amb-grafs` | Galería de grafos especiales (Kₙ, Cₙ, Wₙ, Qₙ, Kₘ,ₙ) dibujados; lema de los apretones de manos con demostración visual |
| **G2 Representación** | `4-representacio-de-grafs` | Mismo grafo en dibujo, matriz de adyacencia e incidencia y lista; ida y vuelta entre ellas |
| **G3 Caminos y conexión** | `5-camins-i-circuits`, `6-connexio`, `7-connectivitat-en-grafs-dirigits` | Componentes coloreadas, puentes y vértices de corte, conexión fuerte y débil |
| **G4 Euler y Hamilton** | `8-circuits-d-euler`, `9-circuits-de-hamilton` | Puentes de Königsberg dibujados; Hierholzer paso a paso; por qué Hamilton es difícil |
| **G5 Camino más corto** | `10-cami-mes-curt` | Dijkstra con la tabla de examen paso a paso y el árbol de caminos resultante |
| **G6 Isomorfismo y planaridad** | `11-grafs-isomorfs`, `12-grafs-planars` | Invariantes en una lista para comprobar; K₅ y K₃,₃; fórmula de Euler; caras dibujadas |
| **G7 Coloreado** | `13-acoloriment` | Welsh–Powell paso a paso; aplicaciones (horarios, mapas) |
| **G8 Árboles y recorridos** | `14-arbres`, `15-arbres-generadors`, `16-recorreguts-d-un-graf` | BFS y DFS con cola y pila visibles; Kruskal y Prim |
| **G9 Planificación de proyectos** | `17-planificacio-de-projectes` | Grafo del proyecto, tiempos, holguras y camino crítico resaltado, más un diagrama de Gantt |
| **Repaso de grafos** | `18-questions-de-repas`, `font` | Preguntas de repaso por tema |

Cada apartado sigue la misma estructura en los dos modos de lección:
- intuición con un ejemplo, solo en el modo explicado;
- definición o teorema formal;
- una o varias figuras;
- ejemplo resuelto con pasos (`example` con `steps`);
- errores típicos (`warn`);
- una comprobación (`check`).

Cada tema acaba con `examEnd`: 2–3 ejercicios tipo examen del banco.

**Reescritura:** el contenido actual se reescribe y se amplía en los tres idiomas con ejemplos propios. No copio diapositivas ni PDF. Si tienes los apuntes o un control real de grafos, déjalos en `inbox/logica/grafs/` como referencia del nivel y del formato.

**Ids y enlaces antiguos:**
- Los temas nuevos usan ids `gr1`…`gr9` y `grr`.
- `legacy()` de `kit/course.js` redirige `/logica/temari/g1|g2|g3` y `/logica/grafs#…` al tema donde está ahora cada apartado, con `findAnchor`, que ya existe.
- Si `setLast` del progreso guardado apunta a `g1`–`g3`, se traduce al tema nuevo.

**4. Laboratorios interactivos.** Nuevo fichero `src/courses/logica/components/GraphLabs.jsx`, con carga diferida y registrado en `labs` de `src/courses/logica/index.jsx`:

| Id | Laboratorio | Qué hace el alumno |
|---|---|---|
| `g-editor` | Editor de grafos | Añade y mueve vértices, dibuja aristas (dirigidas o no, con pesos); ve en directo grados, matriz, lista, componentes y si es bipartito |
| `g-euler` | Euler y Hamilton | Intenta recorrer el grafo clicando aristas; el laboratorio dice si existe circuito o camino de Euler (y por qué) y muestra Hierholzer |
| `g-dijkstra` | Dijkstra | Grafo aleatorio; avanza paso a paso rellenando la tabla de etiquetas, con corrección de cada paso y el árbol de caminos final |
| `g-iso` | Isomorfismo | Dos grafos; compara invariantes y arrastra la biyección; el laboratorio comprueba si respeta las aristas |
| `g-planar` | Planaridad | Arrastra vértices para eliminar cruces (contador de cruces); comprueba v−e+f=2 y las cotas |
| `g-color` | Coloreado | Colorea clicando; detecta conflictos; compara con Welsh–Powell y el número cromático |
| `g-tree` | Recorridos y árboles generadores | BFS y DFS con cola y pila animadas; Kruskal y Prim paso a paso |
| `g-cpm` | Planificación | Tabla de actividades editable; calcula tiempos, holguras, camino crítico y Gantt |

Todos los laboratorios usan el motor (1) y el mismo componente de dibujo `graphs/GraphView.jsx`, el SVG de (2) pero interactivo. Son accesibles con teclado y funcionan en el móvil (tocar y arrastrar). Respetan `prefers-reduced-motion`.

**5. Ejercicios con generador.** Banco nuevo, tres niveles por familia (básico, medio y examen); también cubre las «familias en tres niveles» que teníamos pendientes:
- **Tipos nuevos de respuesta** en `course.types` de Lógica, con el contrato `Input/check/space/Print/key` de `exercise/types.jsx`:
  - `seq`: una secuencia de vértices; se corrige comprobando que sea válida (un camino, un circuito de Euler, un orden BFS) y, si se pide, óptima;
  - `matrix`: rellenar una matriz de adyacencia;
  - `colour`: colorear clicando, con un máximo de k colores.
- **Familias:**
  - grados y número de aristas; matriz ↔ dibujo; conexo o no;
  - ¿tiene circuito o camino de Euler?, encontrarlo;
  - distancia y camino mínimo (Dijkstra);
  - isomorfos sí o no con justificación;
  - planar sí o no; número cromático;
  - número de aristas de un árbol; peso del árbol generador mínimo; orden BFS y DFS;
  - duración mínima y camino crítico.
- Cada ejercicio lleva la figura generada en el enunciado (`qb`), la solución paso a paso (`steps`) y una **rúbrica**, que hará falta para la corrección con IA de la fase F.
- **Simulacro «Control de grafos»:** nuevo modelo en `MODELS` de `kit/course.js`, con puntos por tipo. Lo ajusto al formato real si me pasas un control.
- **Métodos** (`kit/methods.js`):
  - cómo rellenar la tabla de Dijkstra;
  - cómo decidir Euler;
  - cómo demostrar que dos grafos no son isomorfos;
  - cómo demostrar que un grafo no es planar;
  - Welsh–Powell, Kruskal y Prim, y el camino crítico.
- **Formulario** (`kit/formulas.js`): grados, |E(Kₙ)|, |E(Kₘ,ₙ)|, árboles |E|=|V|−1, fórmula de Euler y cotas de planaridad.

#### Commits de la fase B

1. «Grafs: motor d'algorismes i figures SVG», con sus pruebas.
2. «Grafs: temari reorganitzat en nou temes, amb redireccions».
3. Al menos tres commits de contenido por bloques de temas: G1–G3, G4–G6 y G7–G9.
4. «Grafs: laboratoris interactius».
5. «Grafs: exercicis amb generador, tipus nous, mètodes, formulari i simulacre».

#### Pruebas de la fase B

- `tests/e2e/grafs.spec.js`:
  - algoritmos puros contra casos conocidos: Königsberg sin circuito de Euler, K₅ y K₃,₃ no planares, Dijkstra en un grafo de referencia, camino crítico de un proyecto de referencia;
  - los generadores producen siempre ejercicios válidos para 200 semillas.
- Laboratorios:
  - Dijkstra paso a paso hasta el final;
  - colorear con conflicto y sin conflicto;
  - editor: añadir aristas y ver la matriz.
- Enlaces antiguos: `/logica/grafs#8-circuits-d-euler` lleva al tema G4.
- `tools/validate-courses.mjs`, es decir, `npm run lint`: todos los temas, ids, figuras y rúbricas son válidos.
- Revisión visual con capturas de Playwright de las figuras en modo claro, oscuro, móvil y PDF del simulacro.
- `shell.spec.js`: el total de la barra de progreso de Lógica se recalcula solo a partir del índice y el banco.

---

### Fase C · Repaso a medida

**Objetivo:** cada día, una lista corta de ejercicios para repasar según lo que se falló y el tiempo que ha pasado (repetición espaciada).

- **Algoritmo puro**, `src/lib/review.js`. Usa repetición espaciada con «cajas» (Leitner con 5 cajas e intervalos de 1, 3, 7, 16 y 35 días):
  - un fallo devuelve el ejercicio a la caja 1;
  - un acierto lo sube una caja.
  - Funciones:
    - `nextState(card, correct, now)`
    - `dueToday(cards, now)`
    - `pickSession(cards, {max:10})`, que reparte el repaso entre asignaturas y prioriza lo más vencido.
- **Estado:**
  - Clave `localStorage` `review-v1`.
  - Se sincroniza sola con `user_state` mediante `src/lib/sync.js`, como `campus-v1`.
  - Sin tabla nueva.
- **Captura:** junto a `logAttempt`, en `recordCheck`, `recordPractice` y `addExam` de `src/courses/_kit/state.js`. Los ejercicios `{ref, seed}` usan el `ref` como id estable, y se guarda la semilla para repetir el mismo enunciado.
- **Interfaz:**
  - **Tauler** (`src/pages/home/Home.jsx`): tarjeta «Para repasar hoy · N», limitada a `mySubjects(campus)`.
  - **Ruta `/repas`** (`src/pages/repas/`): sesión con `Exercise` y `useEx`, cargando el `bank` de cada asignatura mediante `src/courses/registry.js`.
  - **Dentro de cada asignatura** (`_kit/Home.jsx`): aviso «Repaso (N)».
  - Racha y ejercicios «dominados».
- **Plan:** `useEntitlement('adaptive-review')`, que ya existe. Nuevo límite `free.reviewPerDay` en `src/lib/settings.js` y en `PlansSettings` de `src/pages/admin/AdminSettings.jsx`.

**Pruebas:**
- `tests/e2e/review.spec.js`, pruebas puras del algoritmo.
- En `shell.spec.js`: fallar en `/logica` → 1 pendiente en el Tauler → se corrige en `/repas` y desaparece.
- Proyecto `mobil` sin desbordamiento.

---

### Fase D · Base de la IA (servidor, cuotas y control del gasto)

**Antes de escribir código** cargo la skill `claude-api`. Modelos acordados:
- `claude-haiku-5-5` para el tutor;
- `claude-sonnet-5-5` para corregir.

**Lo que haces tú:**
- Cuenta de Anthropic Console con facturación por uso y **límite de gasto mensual**.
- Pegar la API key en Supabase Secrets como `ANTHROPIC_API_KEY`. **Yo no la veo nunca.**

**Base de datos**, migración `..._ia.sql`:
- `ai_usage(id, user_id, kind, model, input_tokens, output_tokens, cost_micro_eur, created_at)`:
  - RLS: lo mío, o todo si es administrador;
  - solo escribe el servidor.
- Función `ai_month_usage(uid)` y `admin_ai_usage()`.
- Columna `profiles.ai_beta`, que solo cambia el administrador.
- Casos nuevos en `supabase/tests/rls.sql`.

**Ajustes:** bloque `ai` en `site_settings`, en DEFAULTS de `src/lib/settings.js`:
```
ai: { enabled:false, betaOnly:true, tutorPerDay:40, gradesPerMonth:20, monthlyCapEur:3,
      tutorModel:'claude-haiku-5-5', gradeModel:'claude-sonnet-5-5' }
```
- Pestaña «IA» en `AdminSettings.jsx`, con el gasto del mes total y por alumno, y la lista de beta.

**Edge Functions:**
- `supabase/functions/_shared/ai.ts`:
  - JWT del alumno;
  - lectura de los ajustes y del plan con la clave de servicio del entorno;
  - cuota;
  - llamada a Anthropic con *prompt caching* de la parte fija;
  - anotación en `ai_usage`.
- `_shared/schema.ts`: validador de bloques compartido con las pruebas.
- Errores `quota`, `disabled`, `plan` y `upstream`, que la web traduce.

**Web:**
- `src/lib/ai.js`: `callAI()` con `supabase.functions.invoke`, y `useAI()` → `{allowed, remaining, reason}`.
- La CSP no cambia, porque `*.supabase.co` ya está permitido.

**Privacidad:**
- Sección nueva en `src/pages/legal/docs.js`, en los tres idiomas: proveedor de IA de EE. UU. como encargado del tratamiento, sin entrenamiento con los datos, qué se envía y cuánto se guarda.

**Pruebas:**
- El mock (`tests/e2e/supabase-mock.js`) simula `functions/v1/ai-*`.
- En `comptes.spec.js`:
  - sin beta, no hay botones;
  - el administrador sí los ve;
  - con la cuota agotada sale el aviso.

---

### Fase E · Tutor IA en las lecciones (Pro)

**Experiencia:**
- Junto a cada bloque de la lección aparece un botón discreto «Tutor». Menú:
  - **Más fácil**
  - **Más formal**
  - **Otro ejemplo**
  - **Ejercicio parecido**
  - **Pregunta libre**
- La respuesta se inserta debajo del bloque en una caja «Para ti · Tutor IA». Botones:
  - **Ocultar**
  - **Deshacer**
  - **Regenerar**
  - **Fijar**
- Panel «Tus notas del tutor» con el historial, donde se puede **restaurar** lo deshecho.
- Funciona en los tres idiomas y en los dos modos de lección.

**«Laboratorios por usuario»:**
- La IA no genera código ejecutable.
- Genera **ejercicios interactivos y secuencias paso a paso** con los tipos del kit (`num`, `choice`, `text`, `steps` y, en grafos, `seq`). Reutilizan la corrección automática.

**Implementación:**
- **Anclaje:** `Blocks` (`src/courses/_kit/blocks.jsx`) pasa un `anchor = apartado:índice` y un hash del contenido. Si la lección cambia, la nota se marca «puede estar desactualizada».
- **Serialización:** `src/courses/_kit/aiContext.js` convierte el bloque y sus vecinos a texto con LaTeX, con `plain` y `useTr`. Solo se envía contenido propio de la web.
- **Función `ai-tutor`:**
  - instrucciones fijas en caché;
  - salida JSON en el subconjunto de bloques del kit, que valida `schema.ts`;
  - si la salida no es válida, un reintento; si vuelve a fallar, un error amable.
- **Tabla `lesson_notes`:**
  - columnas `id, user_id, subject, unit, anchor, content_hash, action, prompt, blocks, pinned, hidden, created_at`, con RLS «solo lo mío»;
  - límite de 300 notas por alumno con un trigger.
  - La exportación del RGPD (`exportData` de `src/lib/auth.jsx`) las incluye, y se borran en cascada con la cuenta.
- **Interfaz:**
  - `useLessonNotes` en `Lesson.jsx`;
  - `<TutorNote>` y `<TutorMenu>`, con el patrón de portal de `src/app/Tour.jsx`;
  - estilos en `kit.css`.
- **Plan:** `useEntitlement('ai-tutor')` y `tutorPerDay`. Sin acceso, aparece `ProNote`.

**Pruebas** (`comptes.spec.js` con el mock):
- insertar una nota → recargar → deshacer → restaurar;
- el ejercicio generado se corrige;
- una respuesta inválida da un error amable;
- en el móvil no hay desbordamiento.

Después, prueba real en 5 apartados para revisar calidad y coste.

---

### Fase F · Corrección de exámenes en papel con IA (Pro)

**Experiencia:**
1. El alumno imprime un simulacro (`Exam.jsx` y `PrintExam.jsx`) y lo resuelve en papel.
2. Pulsa **«Corregir con IA»**:
   - **en el móvil**, se abre la cámara;
   - **en el ordenador**, aparece un **código QR** que abre `/corregir/<código>` en el móvil, sin tener que entrar con la cuenta.
3. Hace de 1 a 8 fotos, que se comprimen en el móvil (lado largo 1600 px, JPEG al 80 %).
4. El ordenador, que espera en tiempo real, y el móvil muestran:
   - nota global y por ejercicio;
   - qué está bien y dónde está el error;
   - enlace al apartado de la lección;
   - botón «Añadir los fallos al repaso» (fase C).

**Implementación:**
- **Rúbrica:**
  - campo opcional `rubric` en los ejercicios, documentado en `types.jsx`;
  - validado en `tools/validate-courses.mjs`;
  - si falta, se usa `key` o `Key`.
  - La skill `add-content` aprende a escribir rúbricas. Los ejercicios de grafos de la fase B ya las llevan.
- **Instantánea del examen:** `_kit/gradeSnapshot.js`, a partir de `examExercises` de `examBuild.js`.
- **Base de datos:**
  - tabla `grading_sessions`:
    - columnas `id, user_id, code, subject, snapshot, status, result, score, expires_at, created_at`;
    - RLS: el dueño la lee; el resultado solo lo escribe el servidor.
  - **Storage:** bucket privado `exam-photos/<uid>/<sesión>/`.
  - Las fotos se borran a los 30 días con `pg_cron`.
- **Funciones:**
  - `grade-upload-url`: URLs firmadas que caducan, solo para ese código, con un máximo de 8 fotos.
  - `ai-grade`:
    - envía las fotos y la instantánea a `claude-sonnet-5-5` y pide JSON por ejercicio;
    - valida la salida;
    - registra `activity` (`exam`, `score`) y `ai_usage`;
    - si una foto es ilegible, pide repetirla.
- **Web:**
  - `src/pages/corregir/` con las vistas ordenador, móvil y resultado;
  - QR generado en el navegador (librería pequeña, sin servicios externos);
  - Supabase Realtime, con *polling* cada 3 s como alternativa.
- **Avisos:** «Corrección orientativa» y botón «No estoy de acuerdo», que se revisa en `/admin`.

**Pruebas:**
- Flujo completo con el mock, en dos pestañas (ordenador y móvil); el código caducado da error.
- `rls.sql`: un alumno no ve las sesiones ni las fotos de otro.
- Prueba real con tres exámenes hechos a mano: uno bien, uno con fallos y uno mal fotografiado.

---

### Fase G · Pasarela de pago Redsys (EN ESPERA hasta tu aviso)

Solo se empieza cuando el banco te dé el TPV virtual: **MoraBanc** o **Creand**.

**Lo que necesito del banco** (las claves van solo a Supabase):
- FUC, terminal y moneda.
- Clave SHA-256 de pruebas y, más tarde, la de real.
- Que te activen:
  - COF (tokenización);
  - pagos MIT;
  - Bizum, Google Pay y Apple Pay;
  - validación de tarjeta sin cargo.

**Diseño:**
- **Alta:**
  1. `/preus` → `pay-start`, que calcula el importe en el servidor (`_shared/price.ts`, la misma lógica que `priceOf`).
  2. Crea `orders` y firma el formulario Redsys con HMAC-SHA256 y la clave derivada por pedido.
  3. La tarjeta **nunca** pasa por la web.
- **Prueba de 14 días:** tokenización sin cargo (`COF_INI=S`, identificador `REQUIRED`). Si el banco no admite 0 €, cargo mínimo y devolución automática.
- **Notificación:** `pay-notify`, con `--no-verify-jwt`:
  - verifica la firma;
  - guarda el token;
  - actualiza `subscriptions` (provider `redsys`) y `profiles.plan`.
  - Es idempotente.
- **Renovaciones:** `pg_cron` → `pay-renew`:
  - cobro MIT con el token;
  - reintentos a los 1, 3 y 7 días;
  - después, `past_due` → vuelta al plan gratuito con aviso por correo.
- **Facturas:**
  - tabla `invoices`, con numeración correlativa sin huecos;
  - datos de la empresa de `/admin`;
  - IGI del 4,5 % y el IVA de la UE según tu gestor, con los tipos configurables;
  - PDF con `pdf-lib`, guardado en Storage privado y enviado con la API de Resend (secreto `RESEND_API_KEY`, que pegas tú).
- **Mi cuenta:** plan, renovación, tarjeta (últimos 4 dígitos), cancelar, cambiar de plan (efectivo en la próxima renovación) y facturas.
- **Admin:** suscripciones, ingresos y cobros fallidos.
- **Migración:** `provider` añade `redsys`; tablas nuevas `orders`, `payment_tokens` e `invoices`; casos en `rls.sql`. Se retira `supabase/functions/billing-webhook` (Paddle).
- **Activación:**
  1. Entorno de pruebas de Redsys.
  2. Claves reales.
  3. Interruptor «Cobros activados».
  4. Revisar el texto del plan gratuito y las condiciones (desistimiento de 14 días y renuncia al empezar a usar el contenido digital).

**Pruebas:**
- Firma con los vectores de ejemplo de la documentación del banco, y `priceOf`.
- Mock de la pasarela: alta, renovación, fallo y cancelación.
- Prueba real en el entorno de pruebas del banco antes de activar.

---

### Fase H · Contenido continuo

**Flujo:**
1. Dejas los PDF en `inbox/<asignatura>/`, que no se publica.
2. Uso la skill `add-content`: contenido propio en tres idiomas, sin copiar material y sin nombres de profesores.
3. Validador, pruebas y publicación.

**Pendientes:**
- Familias de ejercicios en tres niveles para **Programación**. Las de grafos ya están en la fase B, y después vendrán las de la parte de lógica.
- Formato del examen de **Economía**: necesito un control real.
- Rúbricas en los ejercicios de examen existentes, para la fase F.
- Grados «Próximamente», que se activan en `src/catalog/degrees.js` cuando lleguen los PDF.
- **Aplicar la fórmula de grafos al resto:** figuras, laboratorios y ejercicios con generador allí donde hoy solo hay texto.

**Recomendación de modelo de negocio:** las lecciones siguen públicas (ayudan al SEO) y se cobran las funciones. El contenido solo de pago tendría que servirse desde Supabase, porque todo lo que va en el *bundle* es público.

---

### Fase I · Apertura al público (checklist)

- [ ] Datos de la empresa en `/admin` → «Empresa y textos».
- [ ] Revisión legal de los textos, incluidas la IA y los pagos.
- [ ] Google Cloud → Audience → **Publish app**.
- [ ] Supabase **Pro** (25 $ al mes): sin pausas y con copias diarias.
- [ ] Precios y límites definitivos; IA con `betaOnly=false` cuando haya cobros.
- [ ] Prueba completa con dos navegadores y el móvil: registro, sincronización, tutor, corrección, pago de prueba, factura y borrado de la cuenta.
- [ ] Límite de gasto y alertas en Anthropic.
- [ ] Renovación del dominio `.tech` (octubre de 2027) o paso a `.com`.

---

### Reglas de trabajo en todas las fases

- Rama `claude/tender-brown-h3x9nt`, con un commit por bloque coherente (mensaje en catalán con el trailer de coautoría). Push a la rama; `main` solo avanza cuando digas «publícalo».
- Antes de cada commit:
  - `npm run lint`: 0 errores, incluye el validador de cursos;
  - `npm run build`;
  - las pruebas Playwright de la fase (`escriptori`, `mobil` y `comptes`).
- Migraciones: las aplicas tú en el SQL Editor y yo las compruebo por la API REST.
- Claves secretas: siempre las pegas tú en Supabase. El código solo usa `Deno.env.get`.
- Estética: oliva, sobria, sin azul. Tres idiomas. Sin copiar material de clase.
- Documentación: `docs/IA.md` (D–F), `docs/PAGOS.md` (G), `docs/COMPTES.md` (A) y `docs/PLANTILLA.md` (tipos nuevos, `rubric` y figuras de grafos, B).

### Verificación global

- Al acabar cada fase: lint, build y la suite completa de Playwright en verde.
- Despliegue: `aulamada.tech` sirve el *bundle* nuevo, sin errores de consola ni de CSP en una pestaña limpia.
- Fase B: revisión visual de todas las figuras y laboratorios en claro, oscuro y móvil, y del PDF del simulacro de grafos.
- Fases D–F: coste real en `/admin` → IA frente a la estimación (1–3 € al mes por alumno Pro).
- Fase G: ciclo completo en el entorno de pruebas de Redsys, con la factura recibida, antes de activar los cobros reales.
