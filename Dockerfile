# Imatge de producció: compila la web i la serveix amb nginx.
#   docker build -t campus .
#   docker run --rm -p 8080:80 campus      →  http://localhost:8080

FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
