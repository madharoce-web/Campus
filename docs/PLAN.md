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
