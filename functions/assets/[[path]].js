// Cloudflare Pages: un fitxer de /assets/ que no existeix (per exemple, si es demana just mentre es publica)
// respondria amb index.html i la memòria cau el guardaria un any amb el nom del fitxer, i la web quedaria trencada.
// Aquí aquesta resposta passa a ser un 404 que no es guarda; la resta de fitxers surten igual, amb la memòria cau llarga.
export async function onRequest({ next }) {
  const res = await next();
  if ((res.headers.get('content-type') || '').includes('text/html')) {
    return new Response('Not found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
    });
  }
  const out = new Response(res.body, res);
  // les capçaleres de public/_headers no s'apliquen sempre a les respostes de les funcions
  out.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  out.headers.set('X-Content-Type-Options', 'nosniff');
  return out;
}
