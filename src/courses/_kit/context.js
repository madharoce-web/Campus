import { createContext, useContext } from 'react';

/** L'assignatura oberta: la configuració (course.js) i el seu idioma de textos. */
export const KitContext = createContext(null);

export function useCourse() {
  const c = useContext(KitContext);
  if (!c) throw new Error('useCourse() fora de <CourseKit>');
  return c;
}
