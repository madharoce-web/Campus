/**
 * Marca d'un element interactiu dins de l'HTML del contingut: MARK + JSON + MARK.
 * ['lab', nom, id, cfg] és un laboratori i ['stp', id] uns passos que es revelen un a un;
 * la vista (RichParts) els substitueix pels components de React.
 */
export const MARK = '\u0001';

/** Identificador únic per als <defs> dels SVG (marcadors de fletxa, retalls…). */
let n = 0;
export const nextUid = () => n++;
