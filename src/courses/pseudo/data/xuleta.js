/**
 * Xuleta de pseudocodi: seccions amb blocs.
 * p: paràgraf · c: codi · n: nota · d: [terme, definició] · tb: capçaleres + rows (taula)
 */
const B2 = (ca, es) => ({ ca, es });

export const XU = [
  { t: B2('1. Estructura d\'un algorisme', '1. Estructura de un algoritmo'), b: [
    { p: B2('Tres parts: NOU TIPUS (més endavant), ENTORN amb totes les dades, i les accions entre INICI_SEQÜÈNCIA i FI_SEQÜÈNCIA. Les asserts entre claus expressen l\'estat inicial i el final.', 'Tres partes: NOU TIPUS (más adelante), ENTORN con todos los datos, y las acciones entre INICI_SEQÜÈNCIA y FI_SEQÜÈNCIA. Las aserciones entre llaves expresan el estado inicial y el final.') },
    { c: `ENTORN
  E/S   IDENTIFICADOR   TIPUS     DESCRIPCIÓ
   E      Base          Real      Base del rectangle
   E      Altura        Real      Altura del rectangle
   S      Àrea          Real      Àrea del rectangle

INICI_SEQÜÈNCIA
    Llegir Base
    Llegir Altura
    {Base ≥ 0 i Altura ≥ 0}        ← estat inicial
    Àrea ← Base · Altura
    {Àrea = Base · Altura}         ← estat final
    Escriure "L'àrea del rectangle és ", Àrea
FI_SEQÜÈNCIA` } ] },
  { t: B2('2. Tipus i accions', '2. Tipos y acciones'), b: [
    { tb: [B2('Tipus', 'Tipo'), B2('Exemple', 'Ejemplo')], rows: [['Enter', '10, −200'], ['Natural', '24, 800'], ['Real', '3,24; −705,65'], ['Caràcter', "'a'"], ['Lògic', 'cert, fals'], ['Cadena', '"hola amics"'], [B2('Subrang, Enumeratiu', 'Subrango, Enumerado'), B2('definits pel programador', 'definidos por el programador')]] },
    { tb: [B2('Acció', 'Acción'), B2('Com s\'escriu', 'Cómo se escribe')], rows: [[B2('Entrada', 'Entrada'), 'Llegir A    ·    Llegir N1, N2, N3'], [B2('Assignació', 'Asignación'), 'A ← expressió'], [B2('Sortida', 'Salida'), 'Escriure "text ", A']] } ] },
  { t: B2('3. Operadors i prioritats', '3. Operadores y prioridades'), b: [
    { tb: [B2('Operació', 'Operación'), B2('Símbol', 'Símbolo'), 'a = 9, b = 5'], rows: [['Suma / resta', '+  −', '14 / 4'], [B2('Producte', 'Producto'), '·', '45'], [B2('Divisió', 'División'), '/', '1,8'], [B2('Quocient enter', 'Cociente entero'), '‖  (div)', '1'], [B2('Residu', 'Resto'), '|R  (mod)', '4'], [B2('Lògics', 'Lógicos'), 'I   O   NO', ''], [B2('Relacionals', 'Relacionales'), '=  ≠  <  >  ≤  ≥', '']] },
    { tb: [B2('Prioritat', 'Prioridad'), B2('Operadors', 'Operadores')], rows: [['1a', 'NO'], ['2a', '·   /   ‖   |R   I'], ['3a', '+   −   O'], [B2('4a (la més baixa)', '4a (la más baja)'), '=  <  >  ≤  ≥  ≠']] },
    { n: B2('Els relacionals van al final: a < b I c = d no vol dir el que sembla. Escriu sempre (a < b) I (c = d). A igual prioritat, d\'esquerra a dreta: 20 ‖ 3 |R 4 = (20 ‖ 3) |R 4 = 2.', 'Los relacionales van al final: a < b I c = d no significa lo que parece. Escribe siempre (a < b) I (c = d). A igual prioridad, de izquierda a derecha: 20 ‖ 3 |R 4 = (20 ‖ 3) |R 4 = 2.') } ] },
  { t: B2('4. Estructures de control', '4. Estructuras de control'), b: [
    { c: `SI condició LLAVORS                 SEGONS_SIGUI variable FER
    accions                             Valor 1: acció
ALTRAMENT                               Valor 2: acció
    accions                         ALTRAMENT
FI_SI                                   acció
                                    FI_SEGONS_SIGUI

MENTRE condició FER                 REPETEIX
    accions                             accions
FI_MENTRE                           FINS_QUE condició
{en sortir, la condició és falsa}   {com a mínim una volta}

DES_DE i ← 1 FINS n Increment 1 FER
    accions
FI_DES_DE` },
    { n: B2('DES_DE només quan saps el nombre de voltes abans d\'entrar. Dins del bucle no es toca la variable de control. Amb Increment −1 compta cap avall.', 'DES_DE solo cuando sabes el número de vueltas antes de entrar. Dentro del bucle no se toca la variable de control. Con Increment −1 cuenta hacia abajo.') } ] },
  { t: B2('5. Esquemes de recorregut i de cerca', '5. Esquemas de recorrido y de búsqueda'), b: [
    { c: `RECORREGUT                              CERCA
INICI_SEQÜÈNCIA                         INICI_SEQÜÈNCIA
    obtenir primer element                  obtenir primer element
    inici tractament                        trobat ← fals
    MENTRE no fi seqüència FER              inici tractament
        tractar element                     MENTRE (no fi seqüència) I (NO trobat) FER
        obtenir següent element                 SI condició de cerca LLAVORS
    FI_MENTRE                                       trobat ← cert
    final tractament                            ALTRAMENT
FI_SEQÜÈNCIA                                        obtenir següent element
                                                FI_SI
                                            FI_MENTRE
                                            SI trobat LLAVORS
                                                cerca amb èxit
                                            ALTRAMENT
                                                cerca fallida
                                            FI_SI
                                        FI_SEQÜÈNCIA` },
    { p: B2('A l\'entrada, obtenir element és Llegir, i la fi es detecta amb una marca:', 'En la entrada, obtener elemento es Llegir, y el fin se detecta con una marca:') },
    { c: `Llegir A
inici tractament
MENTRE A ≠ marca FER
    tractar A
    Llegir A
FI_MENTRE
final tractament` },
    { n: B2('A la cerca només s\'avança a l\'ALTRAMENT: si avances sempre, l\'element trobat queda enrere del capçal. Recorregut: tots els elements. Cerca: para quan troba.', 'En la búsqueda solo se avanza en el ALTRAMENT: si avanzas siempre, el elemento encontrado queda detrás del cabezal. Recorrido: todos los elementos. Búsqueda: para cuando encuentra.') } ] },
  { t: B2('6. De C++ i Python al pseudocodi', '6. De C++ y Python al pseudocódigo'), b: [
    { tb: ['C++', 'Python', B2('Pseudocodi del curs', 'Pseudocódigo del curso')], rows: [['x = 5;', 'x = 5', 'x ← 5'], ['==   !=', '==   !=', '=   ≠'], ['&&  ||  !', 'and  or  not', 'I   O   NO'], ['a / b   (ints)', 'a // b', 'a ‖ b'], ['a % b', 'a % b', 'a |R b'], ['cin >> x;', 'x = int(input())', 'Llegir x'], ['cout << x;', 'print(x)', 'Escriure x'], ['true / false', 'True / False', 'cert / fals'], ['for (i=1;i<=n;i++)', 'for i in range(1, n+1)', 'DES_DE i ← 1 FINS n Increment 1 FER'], ['do { } while (c);', '—', 'REPETEIX … FINS_QUE NO c'], ['switch', 'match', 'SEGONS_SIGUI'], ['break', 'break', B2('trobat ← cert i NO trobat al MENTRE', 'trobat ← cert y NO trobat en el MENTRE')], ['int x;', '—', B2('fila a l\'ENTORN: x  Enter', 'fila en el ENTORN: x  Enter')]] } ] },
  { t: B2('7. Teoria del tema 2.1 en un minut', '7. Teoría del tema 2.1 en un minuto'), b: [
    { d: [B2('Algorisme', 'Algoritmo'), B2('Seqüència ordenada i finita d\'accions que dona un mètode per resoldre un problema.', 'Secuencia ordenada y finita de acciones que da un método para resolver un problema.')] },
    { d: [B2('Característiques', 'Características'), B2('Finit, definibilitat, eficient, simplicitat.', 'Finito, definibilidad, eficiente, simplicidad.')] },
    { d: [B2('Entorn, acció, procés, processador', 'Entorno, acción, proceso, procesador'), B2('Objectes de la tasca; esdeveniment finit amb efecte previst; execució d\'accions; entitat que entén i executa l\'algorisme.', 'Objetos de la tarea; suceso finito con efecto previsto; ejecución de acciones; entidad que entiende y ejecuta el algoritmo.')] },
    { d: [B2('Fases', 'Fases'), B2('Enunciat → disseny → codificació → verificació i depuració (jocs de proves).', 'Enunciado → diseño → codificación → verificación y depuración (juegos de pruebas).')] },
    { d: [B2('Equació fonamental', 'Ecuación fundamental'), 'Programa = Algorisme + Estructures de dades'] },
    { d: [B2('Programació estructurada', 'Programación estructurada'), B2('Només tres composicions: seqüencial, alternativa (simple, doble, múltiple) i iterativa (MENTRE, REPETEIX…FINS_QUE, DES_DE).', 'Solo tres composiciones: secuencial, alternativa (simple, doble, múltiple) e iterativa (MENTRE, REPETEIX…FINS_QUE, DES_DE).')] } ] }
];
