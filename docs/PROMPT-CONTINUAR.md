# Prompt para continuar el trabajo en otro chat

Copia todo lo que hay debajo de la línea en un chat nuevo de Claude Code, abierto sobre el repositorio
`madharoce-web/Campus`.

---

Eres el desarrollador principal de **Aula Mada**, un campus de estudio universitario. Es una SPA hecha con React 19, React Router 7 y Vite, y está en el repositorio `madharoce-web/Campus`. El documento `docs/PROMPT-CONTINUAR.md` contiene este prompt; el plan general está en `docs/PLAN.md`, la arquitectura en `docs/ARCHITECTURE.md` y las cuentas en `docs/COMPTES.md`. Léelos antes de empezar.

## Normas de trabajo (obligatorias)

- **Idiomas:**
  - Respóndeme siempre en **castellano**.
  - Los **mensajes de commit** van en **catalán**, igual que los comentarios del código.
  - No escribas nombres de modelos de IA en commits, código ni documentos.
- **Git:**
  - Trabaja en la rama que te indique la sesión, o crea una a partir de `main`.
  - Un commit por asignatura o por bloque coherente.
  - Sube los cambios con `git push -u origin <rama>`.
  - No abras PR salvo que te lo pida.
- **Antes de cada commit:**
  - `npm run lint`: 0 errores; hay 8 avisos que ya existían.
  - `npm run build`.
  - Las pruebas de Playwright de lo que hayas tocado: `PW_CHROMIUM=/opt/pw-browsers/chromium npx playwright test tests/e2e/<x>.spec.js --project=escriptori`, con `npx vite preview --port 4173 --strictPort` en marcha.
  - Si una prueba falla porque el cambio era intencionado, actualiza la prueba y dilo.
- **Licencias y privacidad:**
  - **No copies textos ni imágenes de las diapositivas ni de los PDF.** Muchos son CC BY-NC-ND: reescribe siempre con redacción propia.
  - Los ejercicios son nuevos, «basados en» los de clase.
  - No pongas nombres de profesores.
  - Los PDF originales van en `inbox/<asignatura>/`. Esa carpeta está en `.gitignore` y nunca se publica.
- **Diseño:**
  - Estilo académico y sobrio, como el aula virtual Moodle.
  - Color de marca **verde oliva** (`--am-brand:#696e2e`).
  - Los botones principales también son oliva (`--am-primary` en `src/styles/tokens.css`). No uses azul.
- **Avisos:** dame un aviso corto en castellano cada cierto tiempo. No me hagas preguntas si puedes decidir con sentido común.

## Qué hay hecho

### 1. Plantilla única de asignatura («kit»): `src/courses/_kit/`

Todas las asignaturas usan el mismo motor:

- **Temario**: índice a la izquierda y lecciones con un selector de modo **Directo ↔ Explicado** con la animación «Adaptando la lección».
  - Cada bloque puede llevar `mode: 'direct' | 'explained'`. Sin `mode`, sale en los dos modos.
  - Directo = «Al grano: los conceptos, las reglas y algún ejemplo».
  - Explicado = «Paso a paso: más ejemplos, esquemas, tablas y laboratorios».
- **Comprobaciones** (`{t:'check', ex}`) dentro de la lección, y **«Ejercicios tipo examen»** al final de cada tema (`examEnd`).
- **Métodos de examen** (`kit/methods.js`): trucos, ejercicios resueltos paso a paso y «el día del examen».
- **Práctica** en tres niveles (Fácil · Tipo examen · Difícil), con ejercicios fijos y **familias** con semilla que generan ejercicios nuevos sin fin.
- **Simulacro** de 45, 60, 90 o 120 min, con reloj, corrección, **PDF imprimible** con espacio para responder y formatos de examen reales (`formats`).
- **Formulario flotante** (FormulaDock) en toda la web.
- **Progreso** en `localStorage` (`kit-<k>-v1`), con migración del progreso de las versiones antiguas.
- **Ejercicios citados del banco:** en `check.ex`, `examEnd` y `methods.solved` se puede escribir `{ ref: 'id-del-banco', seed?: n }` en vez de copiar el ejercicio (`src/courses/_kit/refs.js`). Con una familia y una semilla fija sale siempre el mismo enunciado.

### 2. Las 5 asignaturas en la plantilla

- **Computadores** (`/computadors`):
  - T1, T2.1 y T2.2 importados.
  - **T3 Álgebra de Boole** completo: es **el modelo a seguir**, en dos modos, tres idiomas, con comprobaciones, tipo examen, métodos, laboratorios y familias. Está en `src/courses/comp/kit/t3/`.
- **Lógica y grafos** (`/logica`): u0–u9 y g1–g3.
- **Matemáticas CP1** (`/mates`):
  - Conjuntos, relaciones, reales e inducción, complejos, matrices y determinantes.
  - **Ya está completo en contenido**: modos, comprobaciones con los generadores, tipo examen, métodos (`mates/kit/methods.js`), formulario en tres idiomas y **todo el texto de los temas y de los ejercicios en inglés**.
- **Programación** (`/programacio`): teoría, pseudocódigo y C++ en una sola asignatura. `/pseudocodi` y `/cpp` redirigen. Incluye un compilador C++ (Clang en WebAssembly o el intérprete JSCPP).
- **Economía** (`/economia`): t1–t3.

### 3. Portada y cuentas

- Portada con el registro en la cabecera.
- `/entrar`, `/registre`, `/auth/callback` y `/compte`.
- Código de Supabase ya escrito: `src/lib/supabase.js`, `auth.jsx`, `sync.js` y `syncplan.js`.
- Migración `supabase/migrations/20261023120000_comptes.sql` con las tablas `profiles`, `user_state`, `activity`, `subscriptions` y `waitlist`, RLS y las funciones `join_waitlist` y `delete_my_account`. Tiene pruebas en `supabase/tests/`.
- Sin variables de entorno la web funciona sin cuentas.

## Herramientas de contenido (úsalas)

### Formato de los textos

Todo texto de contenido es un trío `[ca, es, en]`. Si falta el inglés, `pick()` usa el castellano.

- Un tema declara `langs: ['ca','es','en']` en su `toc.js` cuando ya tiene inglés. Si no lo declara, en inglés sale un aviso.
- El marcado es mínimo:
  - `**negrita**`, `*cursiva*` y `` `código` ``;
  - `$TeX$` en línea y `$$TeX$$` destacado (se renderiza con Temml);
  - `[texto](url)`;
  - `¶` = salto de línea en los ficheros de traducción.

### Traducir el contenido de los temas

Usa `tools/kit-i18n.mjs`:

- `node tools/kit-i18n.mjs report` muestra la cobertura del inglés por módulo.
- `node tools/kit-i18n.mjs todo <módulo.js>…` genera `inbox/i18n/<k>/…/<módulo>.todo.txt`.
  - Son líneas `@n texto` en castellano, sin repetidos.
  - Del HTML y del SVG solo salen los trozos que se leen.
- Escribe `…/<módulo>.en.txt` con las mismas líneas `@n traducción`.
  - Conserva **exactamente** el marcado, el TeX, los `¶` y las etiquetas `<b>`.
- `node tools/kit-i18n.mjs done <módulo.js>…` aplica las traducciones y reescribe el módulo.

### Traducir laboratorios y generadores

Usa `tools/l-i18n.mjs`, que convierte las llamadas `L(ca, es)` del código en `L(ca, es, en)`:

- `node tools/l-i18n.mjs todo <nombre> <ficheros…>` genera `inbox/i18n/L/<nombre>.todo.txt`.
  - `@n` es un literal.
  - `` @n` `` es una plantilla `` `…${x}…` ``: copia igual los `${…}`.
  - Respeta los espacios iniciales y finales.
- Escribe `inbox/i18n/L/<nombre>.en.txt` y ejecuta `node tools/l-i18n.mjs done <nombre> <ficheros…>`.
- `useLang().L(ca, es, en)` ya devuelve el inglés en la interfaz inglesa.
- En Matemáticas, `getContent('en')` también funciona.

### Otras piezas

- **Cambios de estructura:** carga el módulo, modifícalo y escríbelo con `moduleSource` (`tools/kit-import/zip.mjs`). Los módulos de `units/*.js` ya son la fuente: se editan directamente.
- **Bloques disponibles** (`src/courses/_kit/blocks.jsx`):
  - texto: `p`, `h`, `list`, `table`;
  - recuadros: `def`, `prop`, `rule`, `thm`, `note`, `tip`, `warn`, `summary`, `method`, `box`;
  - ejemplos y figuras: `example` (con `steps`), `diagram` (SVG propio), `steps`;
  - interactivos: `lab` (laboratorio), `code` (ejecutable), `check`;
  - otros: `formula`, `details`, `cols`, `lang`.
- **Tipos de ejercicio:**
  - base: `mcq`, `multi`, `tf`, `num`, `nums`, `match`, `short` y `open`;
  - propios: `tt` y `bool` en comp, `mbank`, `mprac` y `mexam` en mates, `cpp` y `pseudo` en prog.

## Lo que queda por hacer (en este orden)

### A. Paso 4: contenido tema a tema en las asignaturas que faltan

Hay que hacerlo en **Lógica, Programación, Computadores T1–T2.2 y Economía**, y terminar el inglés de los laboratorios y generadores de Matemáticas.

Para **cada tema**, toma como modelo `src/courses/comp/kit/t3/` y `src/courses/mates/kit/`:

1. **Reescribe la lección en los dos modos, «Explicado» (detallado) y «Directo».**
   - Lo esencial (definiciones, reglas, un ejemplo) va sin `mode`.
   - Las explicaciones largas, los ejemplos extra, los laboratorios y los «Para entenderlo» llevan `mode:'explained'`.
   - Si hace falta, añade un resumen compacto con `mode:'direct'` (por ejemplo, una tabla «en una mirada»).
   - Revisa también si hay contenido perdido en la importación: pasos sin fórmulas o textos pegados del tipo «kkángulopolar…». Reescríbelo bien.
2. **Escribe en un idioma y traduce automáticamente los otros dos**, sin revisión manual.
   - Redacta en castellano (o en catalán) y genera las otras dos versiones tú mismo: con `todo` y `done` para los módulos importados, o escribiendo el trío directamente en los módulos nuevos.
   - Al terminar, pon `langs: ['ca','es','en']` en el `toc.js`.
3. **Comprobaciones** (`check`) después de cada concepto nuevo o difícil: 1 o 2 por apartado.
   - Si hay familias en el banco, úsalas como `{ref, seed}`.
   - Si no, crea ejercicios cortos (`mcq`, `tf`, `num`, `short`).
4. **`examEnd`**: de 3 a 6 ejercicios tipo examen al final de cada tema. Pueden ser `{ref}` del banco o ejercicios nuevos «basados en» los de clase.
5. **Métodos de examen** en `kit/methods.js`, registrado en `course.js` con `methods: () => import('./methods.js')`. Por tema:
   - `tricks`: 2 o 3 recuadros `method` con elementos;
   - `solved`: 2 o 3 ejercicios resueltos paso a paso, con `ref` o escritos a mano;
   - `day`: qué hacer el día del examen (tiempo, redacción, comprobaciones).
6. **Etiquetas de los laboratorios en inglés**: pasa sus `L(ca, es)` a tres idiomas con `l-i18n`. En Economía, las tablas de textos de `eco/strings.js` ganan `en`.
7. **Formularios y variantes de práctica**: repásalos. Las fórmulas deben estar en tres idiomas y las familias tienen que cubrir los tres niveles.
8. **Cierre**: pruebas, commit y push por asignatura.

**Estado de Matemáticas:**

- Contenido terminado.
- Falta el inglés de los generadores y laboratorios: unas 2.200 llamadas `L()`. Ejecuta:

  ```bash
  node tools/l-i18n.mjs todo mates src/courses/mates/content/core.js src/courses/mates/content/labs-*.js src/courses/mates/content/bank*.js src/courses/mates/content/exam.js src/courses/mates/content/practice.js src/courses/mates/kit/prac.jsx src/courses/mates/labs/*.jsx src/courses/mates/ui.jsx
  ```

- Los ficheros `theory-t*.js`, `formulari.js`, `exercises.js` y `pages.js` de `mates/content/` ya no se muestran: no hace falta traducirlos y se pueden borrar en el paso 5.

**Volumen aproximado de texto pendiente** (lo que da el `todo`):

| Asignatura | Caracteres | Notas |
|---|---|---|
| Lógica | 250 K | `bank.js` 56 K |
| Programación | 200 K | |
| Computadores T1–T2.2 + ejercicios | 50 K | |
| Economía | 230 K | |

### B. Paso 3: huecos pequeños

1. **Anexo de soluciones del PDF del simulacro.** Para `mexam` (mates), `cpp` y `pseudo` (prog), la clave sale como «—».
   - Añade un `T.Key` opcional (un componente) a los tipos.
   - Úsalo en `src/courses/_kit/PrintExam.jsx`.
2. **Interfaz inglesa de los tipos propios:** completa `PS.en` en `prog/kit/types.jsx` y revisa `MS.en` en `mates/kit/types.jsx`.
3. **Economía:** cuando el usuario pase un modelo de examen real, añade su `format`.

### C. Paso 5: limpieza y documentación

- **Borra el código antiguo**, comprobando antes con `grep` que no se usa:
  - `src/courses/comp/views/`;
  - `src/courses/eco/Practice.jsx`;
  - lo que no se use de `src/courses/_doc/`;
  - de `mates/content/`, los ficheros de teoría antiguos.
- **Documentación:**
  - `docs/PLANTILLA.md`: el formato del kit, los tres idiomas y cómo añadir un tema.
  - Actualiza `docs/ARCHITECTURE.md`.
- **Herramientas:**
  - Skill `.claude/skills/add-content/SKILL.md`, con la guía de la sección E.
  - Validador `tools/validate-courses.mjs` dentro de `npm run lint`. Debe comprobar ids únicos, que los temas con `en` tengan tríos completos, que las `ref` existan y que cada tema tenga `examEnd` y métodos.

### D. Cuentas, Supabase, Google y el plan de pago

El código ya está hecho. Falta ponerlo en marcha y completar lo que sigue.

1. **Proyecto Supabase** (lo hace el usuario; tú le guías con `docs/COMPTES.md`):
   - Crear el proyecto `aula-mada` en la región Frankfurt (plan Free; Pro a 25 $/mes cuando haya alumnos).
   - Aplicar la migración con el SQL Editor o con `npx supabase link` y `db push`.
   - Configurar Site URL y Redirect URLs (`/auth/callback` en producción, en las previews de Cloudflare Pages y en localhost).
   - Rellenar `.env.local` con `VITE_SUPABASE_URL` y `VITE_SUPABASE_PUBLISHABLE_KEY`, y poner lo mismo en Cloudflare Pages.
2. **Entrar con Google:**
   - Crear un proyecto en Google Cloud Console.
   - Configurar la pantalla de consentimiento con el dominio propio.
   - Crear un ID de cliente OAuth web con la redirección `https://<ref>.supabase.co/auth/v1/callback`.
   - En Supabase, activar Authentication → Providers → Google.
   - Probarlo en un *preview*.
   - El correo funciona con enlace y código de 6 cifras: configura SMTP con Resend y las plantillas en ca, es y en.
3. **Comprobar en real:**
   - registro con correo y con Google;
   - sincronización del progreso entre dos navegadores (invitado → registro → aparece en el otro);
   - borrar la cuenta y descargar los datos;
   - que la CSP no dé errores con Supabase ni con el compilador de C++;
   - `npm run test:db` (con Docker).
4. **Registro de actividad:**
   - Crea `logAttempt({subject, item, correct})` en un fichero de nombre descriptivo (por ejemplo `src/lib/intents.js`).
   - Llámalo desde los correctores de Práctica, Simulacro y comprobaciones del kit, y guarda los intentos en la tabla `activity`.
5. **Plan de pago (Gratis / Pro)**, preparado y sin activar (Fase 4 de `docs/PLAN.md`):
   - `src/lib/plan.js` con `PRO_ENABLED = import.meta.env.VITE_PRO_ENABLED === 'true'`, `useEntitlement(feature)` y `<ProGate>`. Si Pro está desactivado, deja pasar siempre.
   - Funciones candidatas a Pro:
     - simulacros ilimitados;
     - repaso adaptativo de errores;
     - exámenes personalizados;
     - estadísticas avanzadas;
     - PDF de apuntes;
     - ejercicios generados con IA.
   - Página `/precios` y bloque Pro de la portada, preparados pero ocultos.
   - Esqueleto de `supabase/functions/billing-webhook/`, que actualizará `subscriptions` y `profiles.plan`.
     - Proveedor recomendado: **Paddle** o **Lemon Squeezy**, que gestionan el IVA europeo.
     - Alternativa: Stripe Billing con Stripe Tax si ya hay alta de autónomo.
   - `plan` y `role` solo los cambia el servidor.
   - Ojo: el contenido que va en el *bundle* es público. El contenido Pro de verdad tiene que servirse desde Supabase (Storage o una tabla con RLS por `plan`) o desde una Edge Function.
6. **Panel `/admin`** (solo `role='admin'`, protegido por RLS), de solo lectura:
   - altas por día, por grado y por plan;
   - intentos y porcentaje de aciertos por ejercicio (para detectar ejercicios mal planteados);
   - lista de espera por grado;
   - estado del catálogo.
7. **Repaso a medida** (candidato a Pro): con `activity`, priorizar los temas con más fallos (repetición espaciada) y generar simulacros con la distribución de temas de los exámenes pasados.

### E. Guía para lecciones nuevas (temas, asignaturas o grados nuevos)

**Principio: las lecciones tienen que ser muy dinámicas, no apuntes pasados a limpio.** Cada tema lleva:

- explicación en dos modos;
- **laboratorios interactivos** donde el alumno toca y ve el resultado (simuladores, gráficas que se mueven, tablas que se rellenan, calculadoras paso a paso);
- diagramas SVG propios;
- ejemplos resueltos con pasos que se revelan uno a uno;
- comprobaciones después de cada concepto;
- tipo examen al final;
- métodos de examen;
- práctica que se genera sin fin;
- simulacro y formulario.

Los modelos son el T3 de Computadores y Matemáticas.

**Flujo para crear un tema a partir de PDF o diapositivas:**

1. **Recoge el material.** El usuario deja los PDF en `inbox/<asignatura>/`.
   - Extrae el texto con `pdftotext -layout` o con la skill de PDF.
   - Mira las figuras: convierte las páginas a imagen si hace falta y léelas.
   - Anota la licencia. Si es CC BY-NC-ND, no hay obra derivada: solo se usa el temario como guía.
2. **Haz el mapa del tema:**
   - objetivos;
   - apartados en un orden lógico para estudiar, que puede no ser el de las diapositivas;
   - definiciones y resultados clave;
   - lo que se evalúa: busca exámenes anteriores y actividades de clase.
3. **Complementa con internet** (búsqueda web) para:
   - explicar mejor lo que las diapositivas dan por sabido;
   - comprobar definiciones y notación estándar;
   - encontrar ejemplos y errores típicos;
   - detectar erratas del material, que se señalan en un recuadro «Matices y erratas».
   - Marca en modo Explicado lo que amplíe el temario («ampliación: no sale en las diapositivas»).
   - No copies textos de webs: redacta siempre de nuevo.
4. **Redacta la lección** en el formato del kit:
   - `toc.js` con los apartados y `hard` si son difíciles;
   - `unit.js` con los bloques y los dos modos;
   - fórmulas en `formulas.js`.
   - Escribe en un idioma y traduce automáticamente a los otros dos.
5. **Diseña los laboratorios** como componentes React en `src/courses/<k>/kit/labs/`:
   - pocos controles y respuesta inmediata;
   - accesibles con teclado;
   - que funcionen en el móvil;
   - con textos `L(ca, es, en)`.
   - Si hace falta un motor, escríbelo puro y con pruebas (como `comp/kit/boole.js`).
6. **Ejercicios:**
   - comprobaciones por apartado;
   - 3–6 tipo examen al final;
   - familias con semilla en los tres niveles (Fácil, Tipo examen, Difícil) cuando el tipo lo permita;
   - ejercicios fijos «basados en» las actividades de clase, con escenarios nuevos y soluciones paso a paso (`steps` con `why`).
7. **Métodos de examen**: trucos, 2–3 resueltos y «el día del examen».
8. **Regístralo** en `course.js` y `toc.js`. Para una asignatura nueva, también en `src/courses/registry.js` y `src/catalog/`.
9. **Valida:** lint, build, Playwright (con un spec propio si hay laboratorios) y capturas en los tres idiomas (escritorio y móvil). Después, commit y push.

**Para un grado nuevo** (ADE, Enfermería, Magisterio…): primero el catálogo (`src/catalog/`) con las asignaturas en «Próximamente» y la lista de espera; después, cada asignatura con el flujo anterior, empezando por la que tenga examen antes.

## Cómo empezar

1. Lee `docs/PLAN.md`, `docs/ARCHITECTURE.md`, `docs/COMPTES.md` y los modelos (`src/courses/comp/kit/t3/` y `src/courses/mates/kit/`).
2. Ejecuta `node tools/kit-i18n.mjs report` para ver el estado del inglés.
3. Continúa por la sección **A**: primero el inglés de los generadores de Matemáticas, después Lógica, Programación, Computadores T1–T2.2 y Economía. Sigue luego con **B**, **C** y **D** en este orden, salvo que el usuario pida otra cosa (por ejemplo, poner en marcha Supabase primero).
