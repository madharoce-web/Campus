/**
 * Editor de pseudocodi: plantilla buida, tecles de símbols i fragments d'estructures.
 * (La plantilla té espais al final d'algunes línies, com a l'original.)
 */
export const TEMPLATE = `ENTORN
  E/S  IDENTIFICADOR  TIPUS    DESCRIPCIÓ
  E    
  S    
INICI_SEQÜÈNCIA
    
FI_SEQÜÈNCIA`;
export const SYMS = ['←', '≠', '≤', '≥', '·', '‖', '|R', 'I', 'O', 'NO', 'cert', 'fals'];
export const SNIPS = [['SI', 'SI  LLAVORS\n    \nFI_SI'], ['SI…ALTRAMENT', 'SI  LLAVORS\n    \nALTRAMENT\n    \nFI_SI'], ['MENTRE', 'MENTRE  FER\n    \nFI_MENTRE'], ['DES_DE', 'DES_DE i ← 1 FINS n Increment 1 FER\n    \nFI_DES_DE'], ['REPETEIX', 'REPETEIX\n    \nFINS_QUE '], ['SEGONS_SIGUI', 'SEGONS_SIGUI  FER\n    1: \nALTRAMENT\n    \nFI_SEGONS_SIGUI'], ['Llegir', 'Llegir '], ['Escriure', 'Escriure ""']];
