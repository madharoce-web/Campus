// Formulari de Computadors (finestra flotant). Una fórmula: { id, t, tex | x, note }; els textos en [ca, es, en].
import boole from './t3/formulas.js';

export default {
  groups: [
    {
      unit: 't1', t: ['T1 · Informació i unitats', 'T1 · Información y unidades', 'U1 · Information and units'],
      items: [
        { id: 'comb', t: ['Combinacions amb n bits', 'Combinaciones con n bits', 'Combinations with n bits'], tex: '2^{n}', note: ['Per a N valors calen $n = \\lceil \\log_2 N \\rceil$ bits.', 'Para N valores hacen falta $n = \\lceil \\log_2 N \\rceil$ bits.', 'N values need $n = \\lceil \\log_2 N \\rceil$ bits.'] },
        { id: 'byte', t: ['Bit i byte', 'Bit y byte', 'Bit and byte'], tex: '1\\ \\text{B}=8\\ \\text{b}' },
        { id: 'pref', t: ['Prefixos', 'Prefijos', 'Prefixes'], tex: '\\text{K}=10^{3}\\quad \\text{M}=10^{6}\\quad \\text{G}=10^{9}\\qquad \\text{Ki}=2^{10}\\quad \\text{Mi}=2^{20}\\quad \\text{Gi}=2^{30}',
          note: ['Amb «i», potències de 2 (1 024); sense, de 10 (1 000). Baixar de nivell multiplica; pujar divideix.', 'Con «i», potencias de 2 (1 024); sin, de 10 (1 000). Bajar de nivel multiplica; subir divide.', 'With «i», powers of 2 (1,024); without, powers of 10 (1,000). Going down a level multiplies; going up divides.'] },
        { id: 'tr', t: ['Temps de transferència', 'Tiempo de transferencia', 'Transfer time'], tex: ['t=\\frac{\\text{mida (bits)}}{\\text{velocitat (b/s)}}', 't=\\frac{\\text{tamaño (bits)}}{\\text{velocidad (b/s)}}', 't=\\frac{\\text{size (bits)}}{\\text{speed (b/s)}}'],
          note: ['Les velocitats van en bits per segon i amb prefixos decimals: 1 Mb/s = 10⁶ b/s.', 'Las velocidades van en bits por segundo y con prefijos decimales: 1 Mb/s = 10⁶ b/s.', 'Speeds are in bits per second with decimal prefixes: 1 Mb/s = 10⁶ b/s.'] },
      ],
    },
    {
      unit: 't21', t: ['T2.1 · Representació', 'T2.1 · Representación', 'U2.1 · Data representation'],
      items: [
        { id: 'tfn', t: ['Teorema fonamental de la numeració', 'Teorema fundamental de la numeración', 'Positional notation'], tex: 'N=\\sum_{i} d_i\\cdot b^{i}', note: ['De base b a base 10. Les xifres decimals tenen exponents negatius.', 'De base b a base 10. Las cifras decimales tienen exponentes negativos.', 'From base b to base 10. Fractional digits have negative exponents.'] },
        { id: 'div', t: ['De base 10 a base b', 'De base 10 a base b', 'From base 10 to base b'], x: ['Part entera: **divisions successives** (residus de baix a dalt). Part decimal: **multiplicacions successives** (parts enteres de dalt a baix).', 'Parte entera: **divisiones sucesivas** (restos de abajo arriba). Parte decimal: **multiplicaciones sucesivas** (partes enteras de arriba abajo).', 'Integer part: **repeated division** (remainders bottom to top). Fractional part: **repeated multiplication** (integer parts top to bottom).'] },
        { id: 'grp', t: ['Binari ↔ octal i hexadecimal', 'Binario ↔ octal y hexadecimal', 'Binary ↔ octal and hexadecimal'], x: ['Grups de **3** bits (octal) o **4** bits (hex), des de la coma cap a fora.', 'Grupos de **3** bits (octal) o **4** bits (hex), desde la coma hacia fuera.', 'Groups of **3** bits (octal) or **4** bits (hex), from the point outwards.'] },
        { id: 'rsm', t: ['Rang SM i C1 (N bits)', 'Rango SM y C1 (N bits)', 'SM and C1 range (N bits)'], tex: '-(2^{N-1}-1)\\ \\dots\\ +(2^{N-1}-1)' },
        { id: 'rc2', t: ['Rang C2 i excés (N bits)', 'Rango C2 y exceso (N bits)', 'C2 and excess range (N bits)'], tex: '-2^{N-1}\\ \\dots\\ +(2^{N-1}-1)', note: ["Excés del curs: $E = 2^{N-1}$ (el d'IEEE 754 és $2^{7}-1 = 127$).", 'Exceso del curso: $E = 2^{N-1}$ (el de IEEE 754 es $2^{7}-1 = 127$).', 'Course excess: $E = 2^{N-1}$ (IEEE 754 uses $2^{7}-1 = 127$).'] },
        { id: 'c2', t: ['Negatiu en C2', 'Negativo en C2', 'Negative in C2'], x: ['Escriu el positiu, inverteix tots els bits i **suma 1**.', 'Escribe el positivo, invierte todos los bits y **suma 1**.', 'Write the positive value, invert every bit and **add 1**.'] },
        { id: 'ieee', t: ['IEEE 754 simple', 'IEEE 754 simple', 'IEEE 754 single precision'], tex: '(-1)^{s}\\cdot 1{,}f\\cdot 2^{e-127}', note: ['1 bit de signe, 8 d\'exponent (excés 127) i 23 de fracció.', '1 bit de signo, 8 de exponente (exceso 127) y 23 de fracción.', '1 sign bit, 8 exponent bits (excess 127) and 23 fraction bits.'] },
      ],
    },
    {
      unit: 't22', t: ['T2.2 · Multimèdia', 'T2.2 · Multimedia', 'U2.2 · Multimedia'],
      items: [
        { id: 'img', t: ['Mida d\'una imatge', 'Tamaño de una imagen', 'Image size'], tex: ['\\text{amplada}\\times\\text{alçada}\\times\\text{bits/px}', '\\text{ancho}\\times\\text{alto}\\times\\text{bits/px}', '\\text{width}\\times\\text{height}\\times\\text{bits/px}'] },
        { id: 'colors', t: ['Colors amb b bits/píxel', 'Colores con b bits/píxel', 'Colours with b bits/pixel'], tex: '2^{b}', note: ['RGB de 24 bits: 8 bits per canal, $2^{24}$ colors.', 'RGB de 24 bits: 8 bits por canal, $2^{24}$ colores.', '24-bit RGB: 8 bits per channel, $2^{24}$ colours.'] },
        { id: 'aud', t: ["Mida d'un àudio", 'Tamaño de un audio', 'Audio size'], tex: 'd\\times f\\times b\\times c', note: ['durada (s) × freqüència de mostreig (Hz) × bits per mostra × canals.', 'duración (s) × frecuencia de muestreo (Hz) × bits por muestra × canales.', 'duration (s) × sampling rate (Hz) × bits per sample × channels.'] },
        { id: 'rate', t: ['Bitrate', 'Bitrate', 'Bit rate'], tex: 'f\\times b\\times c', note: ['Mida = bitrate × durada.', 'Tamaño = bitrate × duración.', 'Size = bit rate × duration.'] },
        { id: 'vid', t: ['Mida d\'un vídeo', 'Tamaño de un vídeo', 'Video size'], tex: ['\\text{fotograma}\\times\\text{FPS}\\times\\text{durada}', '\\text{fotograma}\\times\\text{FPS}\\times\\text{duración}', '\\text{frame}\\times\\text{FPS}\\times\\text{duration}'] },
      ],
    },
    ...boole.groups,
  ],
};
