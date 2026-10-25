/** Motor de C++ preferit (es tria a cada exercici): Clang real (29 MB el primer cop) o l'intèrpret lleuger. */
import { lsJSON, lsSetJSON } from '../../../lib/storage.js';

const ENG = 'prog-cpp-eng';
export const engPref = () => (lsJSON(ENG, 'clang') === 'interp' ? 'interp' : 'clang');
export const setEngPref = (v) => lsSetJSON(ENG, v === 'interp' ? 'interp' : 'clang');
