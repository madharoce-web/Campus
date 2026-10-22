/**
 * Revisió estàtica del codi (el que el professor comprova a mà): llibreries prohibides,
 * subprogrames, bucles i switch que demana l'enunciat, includes que falten…
 * Torna una llista de { k: 'ok' | 'no' | 'wa', t: text }.
 */
export function stripCode(src) {
  let out = '', i = 0; const n = src.length;
  while (i < n) {
    if (src.startsWith('//', i)) { const j = src.indexOf('\n', i); i = j < 0 ? n : j; }
    else if (src.startsWith('/*', i)) { const j = src.indexOf('*/', i + 2); i = j < 0 ? n : j + 2; }
    else if (src[i] === '"' || src[i] === "'") {
      const q = src[i]; let j = i + 1;
      while (j < n && src[j] !== q && src[j] !== '\n') j += src[j] === '\\' ? 2 : 1;
      out += q + q; i = j + 1;
    } else { out += src[i]; i++; }
  }
  return out;
}

const constructs = (L) => ({ while: L('un bucle while', 'un bucle while'), dowhile: L('un do...while', 'un do...while'), for: L('un bucle for', 'un bucle for'), switch: L('un switch', 'un switch'), loops: L('bucles', 'bucles') });

export function review(code, ex, L) {
  const s = stripCode(code), out = [], C = constructs(L);
  const bad = [];
  if (/#\s*include\s*<\s*vector/.test(s) || /\bvector\s*</.test(s)) bad.push('vector');
  if (/#\s*include\s*<\s*algorithm/.test(s)) bad.push('algorithm');
  if (/\bstruct\b/.test(s)) bad.push('struct');
  if (/\bclass\b/.test(s)) bad.push('class');
  if (/\bstring\b/.test(s)) bad.push('string');
  out.push(bad.length ? { k: 'no', t: L('Fa servir ', 'Usa ') + bad.join(', ') + L(': a l\'enunciat no està permès.', ': en el enunciado no está permitido.') } : { k: 'ok', t: L('No fa servir vector, algorithm, struct, class ni string.', 'No usa vector, algorithm, struct, class ni string.') });
  const fns = [];
  const re = /\b(?:int|void|double|float|char|bool|long|unsigned|short|auto)\s+\**\s*(\w+)\s*\([^;{)]*\)\s*\{/g; let m;
  while ((m = re.exec(s))) if (m[1] !== 'main' && !/^(if|while|for|switch)$/.test(m[1])) fns.push(m[1]);
  const rf = ex.rules || {};
  if (rf.fn) {
    out.push(fns.length ? { k: 'ok', t: L('Fa servir subprogrames (', 'Usa subprogramas (') + fns.join(', ') + ').' } : { k: 'no', t: L('L\'enunciat demana fer-ho amb subprogrames (funcions o procediments).', 'El enunciado pide hacerlo con subprogramas (funciones o procedimientos).') });
    (rf.fnames || []).forEach((fn) => { if (!fns.includes(fn)) out.push({ k: 'no', t: L('Falta el subprograma ', 'Falta el subprograma ') + fn + L(' que demana l\'enunciat.', ' que pide el enunciado.') }); });
    if (rf.nodiv) out.push(/[/%]/.test(s) ? { k: 'no', t: L('Fa servir / o %: l\'enunciat demana calcular-ho restant.', 'Usa / o %: el enunciado pide calcularlo restando.') } : { k: 'ok', t: L('No fa servir / ni %.', 'No usa / ni %.') });
  } else {
    out.push(fns.length ? { k: 'no', t: L('Defineix funcions (', 'Define funciones (') + fns.join(', ') + L('): encara no s\'han vist, tot ha d\'anar dins el main().', '): aún no se han visto, todo tiene que ir dentro del main().') } : { k: 'ok', t: L('Tot el codi és dins el main().', 'Todo el código está dentro del main().') });
  }
  if (/\b(?:int|double|float|char|bool|long)\s+\w+\s*\[[^\]]*\]/.test(s)) out.push({ k: 'wa', t: L('Fa servir taules (arrays): al curs encara no s\'han vist.', 'Usa tablas (arrays): en el curso aún no se han visto.') });
  const nDo = (s.match(/\bdo\b/g) || []).length, nWhile = (s.match(/\bwhile\b/g) || []).length - nDo, nFor = (s.match(/\bfor\b/g) || []).length;
  const has = { while: nWhile > 0, dowhile: nDo > 0, for: nFor > 0, switch: /\bswitch\b/.test(s), loops: nWhile + nDo + nFor > 0 };
  (rf.use || []).forEach((u) => out.push(has[u] ? { k: 'ok', t: L('Fa servir ', 'Usa ') + C[u] + L(', com demana l\'enunciat.', ', como pide el enunciado.') } : { k: 'no', t: L('L\'enunciat demana fer-ho amb ', 'El enunciado pide hacerlo con ') + C[u] + '.' }));
  (rf.avoid || []).forEach((a) => out.push(!has[a] ? { k: 'ok', t: L('No fa servir ', 'No usa ') + C[a] + L(', com demana l\'enunciat.', ', como pide el enunciado.') } : { k: 'no', t: L('L\'enunciat demana fer-ho sense ', 'El enunciado pide hacerlo sin ') + C[a] + '.' }));
  if (/\b(setprecision|setw|setfill)\s*\(/.test(s) && !/#\s*include\s*<\s*iomanip/.test(s)) out.push({ k: 'wa', t: L('Fa servir setprecision/setw sense #include <iomanip>: amb g++ pot no compilar.', 'Usa setprecision/setw sin #include <iomanip>: con g++ puede no compilar.') });
  if (/\b(sqrt|pow|fabs|floor|ceil|round)\s*\(/.test(s) && !/#\s*include\s*<\s*(cmath|math\.h)/.test(s)) out.push({ k: 'wa', t: L('Fa servir funcions matemàtiques sense #include <cmath>.', 'Usa funciones matemáticas sin #include <cmath>.') });
  return out;
}
