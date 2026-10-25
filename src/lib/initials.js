/** Inicials per a l'avatar: «Ana Martí» → AM, «bru@exemple.com» → B. */
export function initials(name, email) {
  const src = (name || '').trim();
  if (src) return src.split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  return (email || '?')[0].toUpperCase();
}
