import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * Forats de la barra superior que pot ocupar el curs obert:
 *  - <NavbarTools>: eines a la dreta de la barra (rellotge, estat del compilador, opcions…)
 *  - <NavbarBelow>: franja just a sota de la barra, dins la barra fixa (barra de progrés, desplegables…)
 * Els contenidors porten data-course del curs actiu perquè hi apliquin els seus estils.
 */
const SlotsContext = createContext(null);

export function NavbarSlotsProvider({ children }) {
  const [toolsNode, setToolsNode] = useState(null);
  const [belowNode, setBelowNode] = useState(null);
  const [course, setCourse] = useState(null);
  const value = useMemo(() => ({ toolsNode, setToolsNode, belowNode, setBelowNode, course, setCourse }),
    [toolsNode, belowNode, course]);
  return <SlotsContext.Provider value={value}>{children}</SlotsContext.Provider>;
}

export function useNavbarSlots() {
  return useContext(SlotsContext);
}

export function NavbarTools({ children }) {
  const s = useNavbarSlots();
  return s && s.toolsNode ? createPortal(children, s.toolsNode) : null;
}

export function NavbarBelow({ children }) {
  const s = useNavbarSlots();
  return s && s.belowNode ? createPortal(children, s.belowNode) : null;
}

/** Marca el curs actiu (per a data-course dels forats de la barra). */
export function useActiveCourse(k) {
  const s = useNavbarSlots();
  const setCourse = s && s.setCourse;
  useEffect(() => {
    if (!setCourse) return undefined;
    setCourse(k);
    return () => setCourse(null);
  }, [k, setCourse]);
}
