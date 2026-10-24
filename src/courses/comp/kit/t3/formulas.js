// Formulari del T3 (àlgebra de Boole): operacions i lleis, cadascuna amb la seva forma dual.
const L3 = (ca, es, en) => [ca, es, en];

export default {
  groups: [
    {
      unit: 't3', t: L3('T3 · Operacions lògiques', 'T3 · Operaciones lógicas', 'U3 · Logic operations'),
      items: [
        { id: 'not', t: L3('NOT (negació)', 'NOT (negación)', 'NOT (complement)'), tex: '\\overline{0}=1\\qquad \\overline{1}=0', note: L3("També s'escriu $A'$.", "También se escribe $A'$.", "Also written $A'$.") },
        { id: 'and', t: L3('AND (producte)', 'AND (producto)', 'AND (product)'), tex: L3('A\\cdot B=1 \\iff A=1 \\text{ i } B=1', 'A\\cdot B=1 \\iff A=1 \\text{ y } B=1', 'A\\cdot B=1 \\iff A=1 \\text{ and } B=1'), note: L3('Amb n entrades: 1 només si **totes** valen 1.', 'Con n entradas: 1 solo si **todas** valen 1.', 'With n inputs: 1 only if **all** are 1.') },
        { id: 'or', t: L3('OR (suma)', 'OR (suma)', 'OR (sum)'), tex: L3('A+B=0 \\iff A=0 \\text{ i } B=0', 'A+B=0 \\iff A=0 \\text{ y } B=0', 'A+B=0 \\iff A=0 \\text{ and } B=0'), note: L3('Amb n entrades: 1 si **almenys una** val 1.', 'Con n entradas: 1 si **al menos una** vale 1.', 'With n inputs: 1 if **at least one** is 1.') },
        { id: 'nand', t: L3('NAND', 'NAND', 'NAND'), tex: '\\overline{A\\cdot B}', note: L3('0 només si totes les entrades valen 1.', '0 solo si todas las entradas valen 1.', '0 only if every input is 1.') },
        { id: 'nor', t: L3('NOR', 'NOR', 'NOR'), tex: '\\overline{A+B}', note: L3('1 només si totes les entrades valen 0.', '1 solo si todas las entradas valen 0.', '1 only if every input is 0.') },
        { id: 'xor', t: L3('XOR (o exclusiva)', 'XOR (o exclusiva)', 'XOR (exclusive or)'), tex: 'A\\oplus B=\\overline{A}\\,B+A\\,\\overline{B}', note: L3('Amb n entrades: 1 si hi ha un nombre **senar** d\'uns.', 'Con n entradas: 1 si hay un número **impar** de unos.', 'With n inputs: 1 if there is an **odd** number of ones.') },
        { id: 'prec', t: L3('Ordre de les operacions', 'Orden de las operaciones', 'Order of operations'), x: L3('Primer la **negació**, després el **producte** (·) i al final la **suma** (+). Els parèntesis i les barres llargues agrupen.', 'Primero la **negación**, después el **producto** (·) y al final la **suma** (+). Los paréntesis y las barras largas agrupan.', 'First **NOT**, then the **product** (·) and finally the **sum** (+). Parentheses and long bars group.') },
      ],
    },
    {
      unit: 't3', t: L3("T3 · Lleis de l'àlgebra de Boole", 'T3 · Leyes del álgebra de Boole', 'U3 · Laws of Boolean algebra'),
      items: [
        { id: 'conm', t: L3('Commutativa', 'Conmutativa', 'Commutative'), tex: 'A+B=B+A\\qquad A\\cdot B=B\\cdot A' },
        { id: 'asoc', t: L3('Associativa', 'Asociativa', 'Associative'), tex: '(A+B)+C=A+(B+C)\\qquad (A\\cdot B)\\cdot C=A\\cdot (B\\cdot C)' },
        { id: 'dist', t: L3('Distributiva', 'Distributiva', 'Distributive'), tex: 'A\\cdot (B+C)=A\\cdot B+A\\cdot C', note: L3('La dual, $A+B\\cdot C=(A+B)\\cdot(A+C)$, també és certa (ampliació).', 'La dual, $A+B\\cdot C=(A+B)\\cdot(A+C)$, también es cierta (ampliación).', 'Its dual, $A+B\\cdot C=(A+B)\\cdot(A+C)$, also holds (extension).') },
        { id: 'neut', t: L3('Elements neutres', 'Elementos neutros', 'Identity elements'), tex: 'A+0=A\\qquad A\\cdot 1=A' },
        { id: 'dom', t: L3('Dominància', 'Dominancia', 'Dominance (null elements)'), tex: 'A+1=1\\qquad A\\cdot 0=0' },
        { id: 'comp', t: L3('Complementació', 'Complementación', 'Complement'), tex: 'A+\\overline{A}=1\\qquad A\\cdot \\overline{A}=0' },
        { id: 'idem', t: L3('Idempotència', 'Idempotencia', 'Idempotence'), tex: 'A+A=A\\qquad A\\cdot A=A' },
        { id: 'inv', t: L3('Involució', 'Involución', 'Involution'), tex: '\\overline{\\overline{A}}=A' },
        { id: 'abs', t: L3('Absorció', 'Absorción', 'Absorption'), tex: 'A+A\\cdot B=A\\qquad A\\cdot (A+B)=A' },
        { id: 'dual', t: L3('Principi de dualitat', 'Principio de dualidad', 'Duality principle'), x: L3('Canvia $+ \\leftrightarrow \\cdot$ i $0 \\leftrightarrow 1$; les variables i les barres es queden. Si una identitat és certa, la dual també.', 'Cambia $+ \\leftrightarrow \\cdot$ y $0 \\leftrightarrow 1$; las variables y las barras se quedan. Si una identidad es cierta, la dual también.', 'Swap $+ \\leftrightarrow \\cdot$ and $0 \\leftrightarrow 1$; variables and bars stay. If an identity holds, so does its dual.') },
        { id: 'morgan', t: L3('De Morgan (ampliació)', 'De Morgan (ampliación)', 'De Morgan (extension)'), tex: '\\overline{A\\cdot B}=\\overline{A}+\\overline{B}\\qquad \\overline{A+B}=\\overline{A}\\cdot \\overline{B}' },
      ],
    },
  ],
};
