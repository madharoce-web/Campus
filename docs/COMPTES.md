# Cuentas y progreso en la nube (Supabase)

Aula Mada funciona **sin cuentas** mientras no se configuren las variables de Supabase: el campus
es abierto y el progreso se guarda en el navegador. Con Supabase configurado, **el campus pide
cuenta**: la portada invita a crearla (`/registre`), quien no ha entrado va a `/entrar` y, al salir,
vuelve a la portada. Aparecen también **Mi cuenta** y el «Avísame» de los grados que aún no están.

- **Entrar**: con Google o con el correo (se envía un enlace y un código de 6 cifras; si la persona
  no tiene cuenta, se crea). No hay contraseñas que recordar ni que filtrar.
- **Progreso**: todo lo que los cursos guardan en `localStorage` se sincroniza con la tabla
  `user_state` (una fila por clave). Al entrar se fusiona el progreso del navegador con el de la
  cuenta, clave por clave, ganando la escritura más reciente. Al cerrar la sesión, el progreso se
  borra de ese navegador (sigue en la cuenta).
- **Mi cuenta**: nombre, grado, idioma, estado de la sincronización, plan, descargar los datos
  (JSON) y borrar la cuenta (derechos de acceso y de supresión del RGPD).

## 1. Crear el proyecto

1. Entra en [supabase.com](https://supabase.com) → **New project**.
2. Nombre `aula-mada`, región **West EU (Paris)** (`eu-west-3`: datos en la UE y la más cercana a
   Andorra; en «Need a specific region?») y una contraseña de base de datos larga (guárdala en tu
   gestor de contraseñas). Sin conectar GitHub de momento (las migraciones se aplican a mano, paso 2).
   En *Security*: Data API activada, *Automatically expose new tables* desactivado (la migración da
   los permisos tabla por tabla) y *Enable automatic RLS* activado.
3. Plan **Free**. Ten en cuenta que un proyecto gratuito se pausa tras 7 días sin actividad; cuando
   haya alumnos de verdad, pasa a Pro (25 $/mes) para evitar pausas y tener copias de seguridad diarias.

## 2. Crear las tablas

Opción sencilla: **SQL Editor** → pega el contenido de cada fichero de `supabase/migrations/`, por orden
(`20261023120000_comptes.sql`, `20261028120000_admin.sql` y `20261029120000_campus.sql`) → **Run**.

Opción con la terminal (recomendada a la larga, guarda el historial de migraciones):

```bash
npx supabase login
npx supabase init            # solo la primera vez (crea supabase/config.toml)
npx supabase link --project-ref <REF_DEL_PROYECTO>
npx supabase db push
```

Qué crea: `profiles` (nombre, grado, idioma, rol, plan), `user_state` (progreso), `activity`
(intentos, para estadísticas), `subscriptions` (preparada para el plan Pro), `waitlist` (avísame) y
las funciones `join_waitlist` y `delete_my_account`; la segunda migración añade las funciones del panel
`/admin` (`admin_signups`, `admin_item_stats` y `admin_waitlist`), que solo responden a administradores. Todas las tablas tienen RLS: cada persona solo
ve sus filas; el rol y el plan solo los cambia el servidor.

Para probar la migración en local (necesita Docker): `npm run test:db`.

## 3. Direcciones de la web

**Authentication → URL Configuration**:

- **Site URL**: la dirección pública, p. ej. `https://aulamada.com` (o la de Cloudflare Pages
  mientras no haya dominio, `https://aula-mada.pages.dev`).
- **Redirect URLs** (una por línea):
  ```
  https://aulamada.com/auth/callback
  https://*.aula-mada.pages.dev/auth/callback
  http://localhost:5173/auth/callback
  http://localhost:4173/auth/callback
  ```

## 4. Entrar con el correo

**Authentication → Sign In / Providers → Email**: activado, *Confirm email* activado,
*Email OTP Length* = 6.

**Plantillas: Authentication → Emails → Templates.** En el plan Free, Supabase solo deja editarlas
con un SMTP propio (ver «Envío de correos» más abajo): hasta entonces los correos salen con su plantilla
por defecto, con marca de agua y solo el enlace (sin el código). El correo de acceso está en
[`supabase/templates/acces.html`](../supabase/templates/acces.html): logotipo y colores de la web, el
código de 6 cifras grande, el botón de entrar y los textos en catalán, castellano o inglés según el
idioma de la web (si la cuenta no tiene idioma, en catalán). Pega el fichero entero en **dos** plantillas:

- **Confirm signup** (el primer correo de una cuenta nueva).
- **Magic Link** (los accesos siguientes).

Asunto de las dos: `Aula Mada · Codi d'accés · Código de acceso · Sign-in code`. Deja la caducidad del
código en una hora (*Email OTP Expiration* = 3600), que es lo que dice el correo.

**Envío de correos.** El servidor de correo que trae Supabase solo envía unos pocos correos por
hora y solo sirve para probar. Antes de abrir la web a otros alumnos configura un SMTP propio en
**Authentication → Emails → SMTP Settings**, por ejemplo [Resend](https://resend.com) (gratis hasta
3 000 correos al mes): verifica el dominio en Resend, crea una clave de API y pon `smtp.resend.com`,
puerto `465`, usuario `resend`, contraseña = la clave, remitente `Aula Mada <hola@aulamada.com>`.

## 5. Entrar con Google

1. [Google Cloud Console](https://console.cloud.google.com) → crea un proyecto `Aula Mada`.
2. **APIs & Services → OAuth consent screen**: tipo *External*, nombre de la app `Aula Mada`, correo
   de soporte, logo (opcional), dominios autorizados `supabase.co` y tu dominio. Ámbitos: `email`,
   `profile`, `openid`. Publica la app (*In production*).
3. **Credentials → Create credentials → OAuth client ID** → *Web application*:
   - *Authorized JavaScript origins*: tu dominio (y `http://localhost:5173` para probar).
   - *Authorized redirect URIs*: `https://<REF_DEL_PROYECTO>.supabase.co/auth/v1/callback`.
4. Copia el *Client ID* y el *Client secret* en Supabase → **Authentication → Sign In / Providers →
   Google** y actívalo.

## 6. Conectar la web

En Supabase → **Project Settings → API Keys** copia la URL del proyecto y la **publishable key**
(la clave `anon` antigua también sirve; nunca uses la `service_role` / *secret* en la web).

- **En tu ordenador**: copia `.env.example` como `.env.local`, rellénalo y reinicia `npm run dev`.
- **Cloudflare Pages**: **Settings → Variables and Secrets** → añade `VITE_SUPABASE_URL` y
  `VITE_SUPABASE_PUBLISHABLE_KEY` (Production y Preview) y vuelve a desplegar: Vite las incrusta
  al compilar.

La CSP de `public/_headers`, `deploy/nginx.conf` y `vite.config.js` ya permite conectar con
`https://*.supabase.co`. Si algún día usas un dominio propio para Supabase, añádelo a `connect-src`.

## 7. Hacerte administrador

Entra una vez en la web con tu cuenta y, en el **SQL Editor**:

```sql
update public.profiles set role = 'admin'
where id = (select id from auth.users where email = 'tu-correo@ejemplo.com');
```

Después, vuelve a entrar: en `/admin` verás las altas, los intentos y aciertos por ejercicio (ordenados
de menos a más aciertos, para encontrar ejercicios mal planteados), la lista de espera y el estado del
catálogo. Es de solo lectura; la seguridad está en las funciones del servidor, no en la página.

## 8. Registro de actividad

Con sesión, cada ejercicio comprobado (práctica, comprobaciones de las lecciones y simulacros) se guarda
en `activity` (`src/lib/intents.js`, en lotes cada pocos segundos). Sin cuenta no se guarda nada. Sirve
para el panel `/admin` y, más adelante, para el repaso a medida.

## 9. Planes, precios y textos (panel `/admin`)

Todo se configura en **`/admin`**, sin tocar código (tabla `site_settings`):

- **Planes y precios**: interruptor *Cobros activados*, tarifa básica (5 € por 2 asignaturas),
  asignatura adicional (+2 €), multiplicador por grado adicional (×2), plan Pro (30 €), días de prueba,
  descuentos semestral y anual, y límites del plan gratuito (grados, asignaturas, simulacros por semana).
- **Funciones**: qué funciones tiene cada plan (gratuito, básico, pro).
- **Empresa y textos**: razón social, NRT, dirección, correo… (salen en el aviso legal, la privacidad y
  el contacto) y el texto de «Sobre nosotros» en tres idiomas.
- **Mensajes**: lo que llega por el formulario de contacto de la portada.

Mientras *Cobros activados* esté desactivado, todo es gratuito: `/preus` no existe y la portada no
muestra precios. **Actívalo solo cuando la pasarela de pago esté integrada** (TPV virtual Redsys del
banco; pendiente). Revisa entonces el texto «Simulacres d’examen sense límit» del plan gratuito de la
portada (`src/pages/landing/strings.js`) y que un asesor revise los textos legales (`src/pages/legal/docs.js`).

Ojo: el contenido que va en el *bundle* es público. Si alguna vez hay contenido solo de pago, tiene que
servirse desde Supabase (Storage o una tabla con RLS por `plan`) o desde una Edge Function.

## Cómo se prueba

- `npm run test:db`: la migración en un Postgres con Docker (RLS, privilegios, funciones).
- `npx playwright test --project=comptes`: compila una copia de la web con Supabase configurado
  (`dist-comptes`) y prueba entrar con código y con Google, la sincronización entre navegadores,
  cerrar sesión, Mi cuenta (perfil, descarga y borrado), la lista de espera, el registro de actividad
  y el panel `/admin` contra un Supabase
  simulado (`tests/e2e/supabase-mock.js`).
- Antes de abrir la web a otros alumnos, prueba el flujo real en un proyecto de pruebas: entrar con
  el correo (enlace y código), con Google, y abrir la misma cuenta en el móvil.

## Código

| Archivo | Qué hace |
|---|---|
| `src/lib/supabase.js` | Cliente de Supabase, cargado solo cuando hace falta |
| `src/lib/auth.jsx` | `AuthProvider` y `useAuth()`: sesión, perfil, entrar, salir, exportar y borrar |
| `src/lib/sync.js` | Sincronización de `localStorage` con `user_state` |
| `src/lib/syncplan.js` | Regla de fusión (pura, con pruebas en `tests/e2e/syncplan.spec.js`) |
| `src/lib/intents.js` | Registro de intentos en `activity` (`logAttempt`) |
| `src/lib/plan.js` | Plan Gratuito / Pro: `PRO_ENABLED`, `useEntitlement`, `<ProGate>` |
| `src/pages/admin/` | Panel `/admin` (solo lectura) |
| `src/pages/preus/` | Página de planes `/preus` (solo con Pro activado) |
| `supabase/functions/billing-webhook/` | Webhook de pagos (esqueleto) |
| `src/pages/compte/` | Páginas `/entrar`, `/auth/callback` y `/compte` |
| `supabase/migrations/` | Esquema de la base de datos |
