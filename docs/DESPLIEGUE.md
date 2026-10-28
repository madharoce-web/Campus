# Cómo alojar y publicar la web

La web es **estática**: `npm run build` genera la carpeta `dist/` con HTML, JavaScript, CSS y
los archivos del compilador de C++. No hay servidor de aplicaciones ni base de datos, así que
vale cualquier alojamiento de archivos estáticos que cumpla dos condiciones:

1. **Devolver `index.html` en las rutas que no son archivos** (`/mates/exam`, `/logica/u5`…).
   Es lo que se llama *SPA fallback*; sin esto, recargar una página interna da error 404.
2. Servir por **HTTPS** (todos los alojamientos de abajo lo hacen gratis).

Las cabeceras de seguridad recomendadas (CSP, etc.) están en `deploy/nginx.conf` y
`public/_headers`. La CSP incluye `'wasm-unsafe-eval'`, necesario para el compilador de C++.

---

## 1. En tu ordenador (sin publicar)

**Para trabajar en la web**

```bash
npm install
npm run dev                  # http://localhost:5173
```

**La versión de producción**

```bash
npm run build
npm run preview              # http://localhost:4173
```

Para abrirla desde el móvil u otro ordenador **de la misma red Wi-Fi**:

```bash
npm run preview -- --host    # muestra una dirección del tipo http://192.168.1.20:4173
```

**Con Docker** (la misma imagen sirve luego para cualquier servidor):

```bash
docker build -t campus .
docker run -d --name campus -p 8080:80 --restart unless-stopped campus
# http://localhost:8080
```

La imagen compila la web y la sirve con nginx usando `deploy/nginx.conf`
(rutas de la aplicación, caché larga para los archivos con hash y el compilador, cabeceras de seguridad).

---

## 2. AWS

### Opción A: AWS Amplify Hosting (lo más sencillo dentro de AWS)

1. En la consola de AWS, abre **Amplify → Create new app → GitHub** y autoriza el repositorio
   `madharoce-web/Campus`, rama `main`.
2. Amplify detecta Vite. Comprueba que la configuración de compilación sea:

   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. En **Hosting → Rewrites and redirects** añade una regla para las rutas de la aplicación,
   con *Target address* `/index.html`, *Type* `200 (Rewrite)` y esta *Source address*:

   ```
   </^[^.]+$|\.(?!(css|gif|ico|jpg|jpeg|js|png|txt|svg|woff|woff2|ttf|map|json|wasm|webp)$)([^.]+$)/>
   ```
4. En **Hosting → Custom headers** puedes copiar las cabeceras de `public/_headers`.
5. **Dominio propio**: Hosting → Custom domains → Add domain. Si el dominio está en Route 53,
   Amplify crea los registros solo; si está en otro registrador, te da los registros CNAME
   que tienes que copiar allí. El certificado HTTPS es gratuito y automático.

Ten en cuenta que, una vez conectado, **Amplify publica cada vez que haces `git push` a `main`**.

### Opción B: S3 + CloudFront (control total, la configuración «clásica»)

1. **S3**: crea un bucket (por ejemplo `campus-web`) con *Block all public access* activado.
   No hace falta activar «Static website hosting».
2. **Certificado**: en **AWS Certificate Manager, región `us-east-1`** (obligatorio para CloudFront),
   pide un certificado público para `campus.tudominio.com` (o el dominio que uses) con validación DNS.
3. **CloudFront**: crea una distribución con
   - origen: el bucket S3, con *Origin access control (OAC)*; acepta que la consola actualice la política del bucket;
   - *Viewer protocol policy*: Redirect HTTP to HTTPS; compresión activada;
   - *Default root object*: `index.html`;
   - *Alternate domain name*: tu dominio, y el certificado del paso 2;
   - una **CloudFront Function** con el código de `deploy/aws/cloudfront-spa.js`,
     asociada al evento *Viewer request* del comportamiento por defecto;
   - opcional: una *Response headers policy* con las cabeceras de `deploy/nginx.conf`.
4. **Subir la web** (con el AWS CLI configurado):

   ```bash
   BUCKET=campus-web DISTRIBUTION_ID=E1234567890 ./deploy/aws/deploy-s3.sh
   ```

   El script compila, sube cada tipo de archivo con su `Cache-Control` e invalida la caché de CloudFront.
5. **DNS**: en Route 53, un registro `A` (y `AAAA`) de tipo *Alias* que apunte a la distribución.
   Si el dominio está en otro registrador, un `CNAME` hacia `dxxxx.cloudfront.net`.

Para el tráfico de una web personal, el coste suele ser de céntimos al mes (lo que más pesa es la
zona DNS de Route 53, si la usas). Revisa la calculadora de precios de AWS antes de empezar.

### Opción C: un servidor propio (EC2, Lightsail o cualquier VPS)

Instala Docker y ejecuta la imagen del apartado 1 detrás de un proxy con HTTPS
(por ejemplo Caddy, que obtiene el certificado solo), o instala nginx con `deploy/nginx.conf`
y obtén el certificado con certbot. Es la opción que más mantenimiento pide.

---

## 3. Otras opciones gratuitas

| Servicio | Configuración |
|---|---|
| **Cloudflare Workers** (el que se usa) | **Workers y Pages → Crear → Importar un repositorio** → `madharoce-web/Campus`. Comando de compilación `npm run build`, comando de implementación `npx wrangler deploy` (lee `wrangler.jsonc`: sirve `dist/`, las rutas de la aplicación devuelven `index.html` y aplica `public/_headers`). En **Configuración → Compilación → Variables y secretos** (de compilación, no de tiempo de ejecución): `NODE_VERSION=22`, `VITE_SUPABASE_URL` y `VITE_SUPABASE_PUBLISHABLE_KEY`. Dominio: **Configuración → Dominios y rutas → Agregar → Dominio personalizado**. Cada push a `main` publica la web. Para probarlo en local: `npm run build && npx wrangler dev`. |
| **Cloudflare Pages** | Conecta el repositorio. Build command `npm run build`, output `dist`. Las rutas de la aplicación funcionan sin configurar nada y aplica `public/_headers`. Dominio: Pages → Custom domains. |
| **Netlify** | Build `npm run build`, publish `dist`. Añade un archivo `public/_redirects` con la línea `/* /index.html 200`. Aplica `public/_headers`. |
| **Vercel** | Framework Vite. Añade un `vercel.json` con `{"rewrites":[{"source":"/(.*)","destination":"/index.html"}]}`. |
| **GitHub Pages** | Sin dominio propio la web vive en `https://madharoce-web.github.io/Campus/`: compila con `BASE_PATH=/Campus/ npm run build` y copia `dist/index.html` a `dist/404.html` para las rutas internas. Con dominio propio no hace falta `BASE_PATH`. En cuentas gratuitas el repositorio tiene que ser público. |

---

## 4. Dominio propio

1. **Compra el dominio** en un registrador (Cloudflare Registrar, Route 53, Porkbun, Namecheap…).
   Un `.com` suele costar entre 10 y 15 € al año; compara también el precio de renovación.
2. **Decide la dirección**: un subdominio (`campus.tudominio.com`) es lo más fácil de apuntar
   a cualquier servicio con un `CNAME`. El dominio raíz (`tudominio.com`) necesita un registro
   `A`/`ALIAS`, que cada servicio explica en su panel.
3. **Añade el dominio en el servicio** donde alojes la web (Amplify, CloudFront, Cloudflare Pages…)
   y copia en tu registrador los registros DNS que te indique.
4. Espera a que se propague el DNS (de minutos a unas horas). El certificado HTTPS se emite solo.

---

## Antes de hacerla pública

- Los apuntes están redactados de nuevo, pero algunos ejercicios se basan en enunciados de examen
  de la universidad. Si la web va a ser pública, conviene reformular los que sean casi literales.
- El compilador de C++ (≈29 MB) solo se descarga cuando alguien ejecuta código, y después queda
  en la caché del navegador.
