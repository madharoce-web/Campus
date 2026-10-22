import { createElement, memo } from 'react';

/**
 * Contingut ric (HTML ja preparat: teoria, enunciats, solucions, figures SVG).
 * És l'únic lloc on s'insereix HTML directament. El contingut és propi de la web
 * (no ve de l'usuari); si mai s'hi posa text de l'usuari, s'ha d'escapar abans (lib/html.js).
 *
 * Per a botons dins del contingut, feu servir atributs data-* i un onClick delegat
 * al component pare, en lloc d'atributs onclick dins de l'HTML.
 */
function Rich({ html, as = 'div', ref, ...rest }) {
  return createElement(as, { ...rest, ref, dangerouslySetInnerHTML: { __html: html ?? '' } });
}
export default memo(Rich);
