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
2. Nombre `aula-mada`, región **Central EU (Frankfurt)** (datos en la UE) y una contraseña de base
   de datos larga (guárdala en tu gestor de contraseñas).
3. Plan **Free**. Ten en cuenta que un proyecto gratuito se pausa tras 7 días sin actividad; cuando
   haya alumnos de verdad, pasa a Pro (25 $/mes) para evitar pausas y tener copias de seguridad diarias.

## 2. Crear las tablas

Opción sencilla: **SQL Editor** → pega el contenido de
`supabase/migrations/20261023120000_comptes.sql` → **Run**.

Opción con la terminal (recomendada a la larga, guarda el historial de migraciones):

```bash
npx supabase login
npx supabase init            # solo la primera vez (crea supabase/config.toml)
npx supabase link --project-ref <REF_DEL_PROYECTO>
npx supabase db push
```

Qué crea: `profiles` (nombre, grado, idioma, rol, plan), `user_state` (progreso), `activity`
(intentos, para estadísticas), `subscriptions` (preparada para el plan Pro), `waitlist` (avísame) y
las funciones `join_waitlist` y `delete_my_account`. Todas las tablas tienen RLS: cada persona solo
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

**Authentication → Emails → Templates → Magic Link** (el mismo correo sirve para entrar y para
crear la cuenta). Asunto: `Tu acceso a Aula Mada · El teu accés · Your sign-in`. Cuerpo:

```html
{{ if eq .Data.lang "en" }}
<h2>Sign in to Aula Mada</h2>
<p><a href="{{ .ConfirmationURL }}">Sign in</a> or enter this code: <strong>{{ .Token }}</strong></p>
<p>If you didn't ask for it, you can ignore this email.</p>
{{ else if eq .Data.lang "es" }}
<h2>Entra en Aula Mada</h2>
<p><a href="{{ .ConfirmationURL }}">Entrar</a> o escribe este código: <strong>{{ .Token }}</strong></p>
<p>Si no lo has pedido tú, puedes ignorar este correo.</p>
{{ else }}
<h2>Entra a Aula Mada</h2>
<p><a href="{{ .ConfirmationURL }}">Entra</a> o escriu aquest codi: <strong>{{ .Token }}</strong></p>
<p>Si no ho has demanat tu, pots ignorar aquest correu.</p>
{{ end }}
```

Copia el mismo cuerpo en **Confirm signup** (el primer correo de una cuenta nueva).

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

## Cómo se prueba

- `npm run test:db`: la migración en un Postgres con Docker (RLS, privilegios, funciones).
- `npx playwright test --project=comptes`: compila una copia de la web con Supabase configurado
  (`dist-comptes`) y prueba entrar con código y con Google, la sincronización entre navegadores,
  cerrar sesión, Mi cuenta (perfil, descarga y borrado) y la lista de espera contra un Supabase
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
| `src/pages/compte/` | Páginas `/entrar`, `/auth/callback` y `/compte` |
| `supabase/migrations/` | Esquema de la base de datos |
