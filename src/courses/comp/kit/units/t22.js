// Generat per tools/kit-import/comp.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Imatge (píxels, profunditat de color, RGB, compressió i formats), àudio (mostratge, quantificació, canals, bitrate) i vídeo (resolucions, FPS, mida sense comprimir i compressió).",
    "Imagen (píxeles, profundidad de color, RGB, compresión y formatos), audio (muestreo, cuantificación, canales, bitrate) y vídeo (resoluciones, FPS, tamaño sin comprimir y compresión)."
   ]
  }
 ],
 "sections": {
  "m-img": [
   {
    "head": [
     "",
     "Vectorial",
     "Mapa de bits"
    ],
    "rows": [
     [
      [
       "Es descriu amb",
       "Se describe con"
      ],
      [
       "formes i fórmules",
       "formas y fórmulas"
      ],
      [
       "una matriu de píxels",
       "una matriz de píxeles"
      ]
     ],
     [
      [
       "En ampliar",
       "Al ampliar"
      ],
      [
       "no perd qualitat",
       "no pierde calidad"
      ],
      [
       "pixelació",
       "pixelación"
      ]
     ],
     [
      [
       "Ús",
       "Uso"
      ],
      [
       "logotips, diagrames",
       "logotipos, diagramas"
      ],
      [
       "fotografies",
       "fotografías"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "La **resolució** és amplada × alçada (1920 × 1080 = 2 073 600 píxels ≈ 2,07 MP). La **profunditat de color** són els bits per píxel: amb n bits, 2$^{\\text{n}}$ colors. **Mida sense compressió = amplada × alçada × bits per píxel** (en bits).",
       "La **resolución** es anchura × altura (1920 × 1080 = 2 073 600 píxeles ≈ 2,07 MP). La **profundidad de color** son los bits por píxel: con n bits, 2$^{\\text{n}}$ colores. **Tamaño sin compresión = anchura × altura × bits por píxel** (en bits)."
      ]
     }
    ],
    "t": "def",
    "title": [
     "resolució i profunditat de color",
     "n · resolución y profundidad de color"
    ]
   },
   {
    "t": "lab",
    "id": "image",
    "props": {
     "id": "th-image",
     "cfg": {}
    }
   }
  ],
  "m-rgb": [
   {
    "t": "p",
    "x": [
     "Tres components de llum: vermell, verd i blau. Model **additiu**. En RGB de 24 bits, 8 bits per component: 2⁸ × 2⁸ × 2⁸ = 2²⁴ = 16 777 216 colors.",
     "Tres componentes de luz: rojo, verde y azul. Modelo **aditivo**. En RGB de 24 bits, 8 bits por componente: 2⁸ × 2⁸ × 2⁸ = 2²⁴ = 16 777 216 colores."
    ]
   },
   {
    "t": "lab",
    "id": "rgb",
    "props": {
     "id": "th-rgb",
     "cfg": {}
    }
   }
  ],
  "m-comp": [
   {
    "head": [
     [
      "Format",
      "Formato"
     ],
     [
      "Compressió",
      "Compresión"
     ],
     [
      "Ús",
      "Uso"
     ]
    ],
    "rows": [
     [
      "JPEG",
      [
       "amb pèrdua",
       "con pérdida"
      ],
      [
       "fotografies",
       "fotografías"
      ]
     ],
     [
      "PNG",
      [
       "sense pèrdua",
       "sin pérdida"
      ],
      [
       "gràfics i transparència",
       "gráficos y transparencia"
      ]
     ],
     [
      "GIF",
      [
       "sense pèrdua",
       "sin pérdida"
      ],
      [
       "imatges simples i animacions",
       "imágenes simples y animaciones"
      ]
     ],
     [
      "TIFF",
      [
       "habitualment sense pèrdua",
       "habitualmente sin pérdida"
      ],
      [
       "edició i impressió",
       "edición e impresión"
      ]
     ],
     [
      "RAW",
      [
       "sense processament final",
       "sin procesamiento final"
      ],
      [
       "fotografia digital",
       "fotografía digital"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Sense pèrdua:** es recupera exactament l'original. **Amb pèrdua:** s'elimina informació per reduir molt més la mida, amb possible pèrdua de qualitat. El format s'escull segons l'ús.",
       "**Sin pérdida:** se recupera exactamente el original. **Con pérdida:** se elimina información para reducir mucho más el tamaño, con posible pérdida de calidad. El formato se escoge según el uso."
      ]
     }
    ],
    "t": "tip"
   }
  ],
  "m-audio": [
   {
    "head": [
     "Característica",
     [
      "Què és",
      "Qué es"
     ],
     [
      "Es percep com",
      "Se percibe como"
     ]
    ],
    "rows": [
     [
      [
       "Freqüència (Hz)",
       "Frecuencia (Hz)"
      ],
      [
       "vibracions per segon",
       "vibraciones por segundo"
      ],
      [
       "to: greu o agut",
       "tono: grave o agudo"
      ]
     ],
     [
      "Amplitud",
      [
       "magnitud de la vibració",
       "magnitud de la vibración"
      ],
      [
       "intensitat (dB)",
       "intensidad (dB)"
      ]
     ],
     [
      "Timbre",
      [
       "el que diferencia instruments",
       "lo que diferencia instrumentos"
      ],
      [
       "«color» del so",
       "«color» del sonido"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "Un **ADC** converteix el senyal analògic en digital fent dues coses: **mostratge** (mesurar f$_{\\text{s}}$ vegades per segon: 44 100 Hz, 48 000 Hz) i **quantificació** (arrodonir cada mesura a un dels 2$^{\\text{n}}$ nivells de la profunditat). Un **DAC** fa el camí invers.",
     "Un **ADC** convierte la señal analógica en digital haciendo dos cosas: **muestreo** (medir f$_{\\text{s}}$ veces por segundo: 44 100 Hz, 48 000 Hz) y **cuantificación** (redondear cada medida a uno de los 2$^{\\text{n}}$ niveles de la profundidad). Un **DAC** hace el camino inverso."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Mida = d × f × b × c** (bits), amb d en segons, f la freqüència de mostratge, b els bits per mostra i c els canals (mono 1, estèreo 2). **Bitrate = f × b × c** (b/s).",
       "**Tamaño = d × f × b × c** (bits), con d en segundos, f la frecuencia de muestreo, b los bits por muestra y c los canales (mono 1, estéreo 2). **Bitrate = f × b × c** (b/s)."
      ]
     }
    ],
    "t": "box",
    "title": [
     "Fórmules",
     "Fórmulas"
    ]
   },
   {
    "t": "lab",
    "id": "audio",
    "props": {
     "id": "th-audio",
     "cfg": {}
    }
   },
   {
    "t": "p",
    "x": [
     "Formats: **FLAC** (sense pèrdua); **MP3, AAC, Vorbis** (amb pèrdua). **MIDI** no guarda l'ona sinó instruccions musicals.",
     "Formatos: **FLAC** (sin pérdida); **MP3, AAC, Vorbis** (con pérdida). **MIDI** no guarda la onda sino instrucciones musicales."
    ]
   }
  ],
  "m-video": [
   {
    "t": "p",
    "x": [
     "Un vídeo és una successió de fotogrames: més **FPS** → moviment més fluid. **Progressiu**: fotogrames complets; **entrellaçat**: cada fotograma en dos camps. Resolucions: SD PAL 720 × 576, HD 1280 × 720, Full HD 1920 × 1080, 4K UHD 3840 × 2160.",
     "Un vídeo es una sucesión de fotogramas: más **FPS** → movimiento más fluido. **Progresivo**: fotogramas completos; **entrelazado**: cada fotograma en dos campos. Resoluciones: SD PAL 720 × 576, HD 1280 × 720, Full HD 1920 × 1080, 4K UHD 3840 × 2160."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Sense compressió: **mida = amplada × alçada × bits/píxel × FPS × durada**. A partir del bitrate: **mida ≈ bitrate × durada**.",
       "Sin compresión: **tamaño = anchura × altura × bits/píxel × FPS × duración**. A partir del bitrate: **tamaño ≈ bitrate × duración**."
      ]
     }
    ],
    "t": "box",
    "title": [
     "Fórmules",
     "Fórmulas"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "L'exemple de la diapositiva (Full HD, 24 bits, 25 FPS, 10 min) dona **≈ 86,9 GiB**, no 89,0: el producte 5,93 × 25 × 600 són MiB i falta dividir entre 1024.",
       "El ejemplo de la diapositiva (Full HD, 24 bits, 25 FPS, 10 min) da **≈ 86,9 GiB**, no 89,0: el producto 5,93 × 25 × 600 son MiB y falta dividir entre 1024."
      ]
     }
    ],
    "t": "warn"
   },
   {
    "t": "lab",
    "id": "video",
    "props": {
     "id": "th-video",
     "cfg": {}
    }
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "La compressió elimina la informació **redundant** (el que es repeteix d'un fotograma a l'altre) i, si és amb pèrdues, part de la **irrellevant** (el que l'ull no nota). Més compressió → menys mida i potencialment menys qualitat.",
       "La compresión elimina la información **redundante** (lo que se repite de un fotograma a otro) y, si es con pérdidas, parte de la **irrelevante** (lo que el ojo no nota). Más compresión → menos tamaño y potencialmente menos calidad."
      ]
     }
    ],
    "t": "tip"
   }
  ]
 },
 "examEnd": []
};
