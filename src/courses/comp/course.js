import { createContext, useContext } from 'react';

/**
 * Accions del curs per a les vistes: record(ok) (puntuació de la pràctica),
 * submitExam(auto) (entrega del simulacre), hist (notes anteriors) i tab (pestanya activa).
 */
export const CourseContext = createContext(null);
export const useCourse = () => useContext(CourseContext);
