import { createContext, useContext } from 'react';

/**
 * Accions del curs per a les vistes i els laboratoris: record(ok) (puntuació de la pràctica i del banc),
 * go(pestanya, secció) (navegació com el go() de l'original) i tab (pestanya activa).
 */
export const CourseContext = createContext(null);
export const useCourse = () => useContext(CourseContext);
