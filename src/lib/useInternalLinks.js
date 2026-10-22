import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Dins d'un contenidor amb HTML (<Rich>), fa que els enllaços interns (href="/...")
 * naveguin amb el router (sense recarregar la pàgina). Els externs no es toquen.
 */
export function useInternalLinks(ref) {
  const navigate = useNavigate();
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest && e.target.closest('a[href]');
      if (!a || !el.contains(a) || a.target === '_blank' || a.hasAttribute('download')) return;
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('/') || href.startsWith('//')) return;
      e.preventDefault();
      navigate(href);
    };
    el.addEventListener('click', onClick);
    return () => el.removeEventListener('click', onClick);
  }, [ref, navigate]);
}

/** Converteix enllaços de la versió d'un sol fitxer (mates.html#exam) a rutes (/mates/exam). */
const LEGACY = {
  'index.html': '/cursos', 'mates.html': '/mates', 'logica.html': '/logica', 'economia.html': '/economia',
  'computadors.html': '/computadors', 'pseudocodi.html': '/pseudocodi', 'programacio.html': '/programacio', 'cpp.html': '/cpp',
};
export function legacyHref(href) {
  const m = /^([a-z]+\.html)(?:#([\w-]+))?$/.exec(href || '');
  if (!m || !LEGACY[m[1]]) return href;
  if (m[1] === 'index.html') return m[2] && ['inici', 'tauler', 'cursos'].includes(m[2]) ? '/' + m[2] : '/cursos';
  return LEGACY[m[1]] + (m[2] ? '/' + m[2] : '');
}
