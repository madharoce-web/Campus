// CloudFront Function (esdeveniment «viewer request») per a S3 + CloudFront.
// Les rutes de l'aplicació (/mates/exam, /logica/u5…) no són fitxers del bucket:
// es reescriuen a /index.html i React Router mostra la pàgina que toca.
// També les adreces antigues d'un sol fitxer (/mates.html#exam), que l'aplicació redirigeix.
// eslint-disable-next-line no-unused-vars -- CloudFront crida aquesta funció pel seu nom
function handler(event) {
  var req = event.request;
  var uri = req.uri;
  var last = uri.substring(uri.lastIndexOf('/') + 1);
  var isFile = last.indexOf('.') !== -1;
  var legacyPage = /\.html$/.test(uri) && uri !== '/index.html';
  if (!isFile || legacyPage) req.uri = '/index.html';
  return req;
}
