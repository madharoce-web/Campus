// Generat per tools/kit-import/comp.mjs a partir del contingut anterior; a partir d'ara s'edita aquí.
export default {
 "intro": [
  {
   "t": "p",
   "x": [
    "Imatge (píxels, profunditat de color, RGB, compressió i formats), àudio (mostratge, quantificació, canals, bitrate) i vídeo (resolucions, FPS, mida sense comprimir i compressió).",
    "Imagen (píxeles, profundidad de color, RGB, compresión y formatos), audio (muestreo, cuantificación, canales, bitrate) y vídeo (resoluciones, FPS, tamaño sin comprimir y compresión).",
    "Image (pixels, colour depth, RGB, compression and formats), audio (sampling, quantisation, channels, bit rate) and video (resolutions, FPS, uncompressed size and compression)."
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
       "Se describe con",
       "Described with"
      ],
      [
       "formes i fórmules",
       "formas y fórmulas",
       "shapes and formulas"
      ],
      [
       "una matriu de píxels",
       "una matriz de píxeles",
       "a matrix of pixels"
      ]
     ],
     [
      [
       "En ampliar",
       "Al ampliar",
       "When enlarged"
      ],
      [
       "no perd qualitat",
       "no pierde calidad",
       "it does not lose quality"
      ],
      [
       "pixelació",
       "pixelación",
       "pixelation"
      ]
     ],
     [
      [
       "Ús",
       "Uso",
       "Use"
      ],
      [
       "logotips, diagrames",
       "logotipos, diagramas",
       "logos, diagrams"
      ],
      [
       "fotografies",
       "fotografías",
       "photographs"
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
       "La **resolución** es anchura × altura (1920 × 1080 = 2 073 600 píxeles ≈ 2,07 MP). La **profundidad de color** son los bits por píxel: con n bits, 2$^{\\text{n}}$ colores. **Tamaño sin compresión = anchura × altura × bits por píxel** (en bits).",
       "The **resolution** is width × height (1920 × 1080 = 2 073 600 pixels ≈ 2.07 MP). The **colour depth** is the number of bits per pixel: with n bits, 2$^{\\text{n}}$ colours. **Uncompressed size = width × height × bits per pixel** (in bits)."
      ]
     }
    ],
    "t": "def",
    "title": [
     "resolució i profunditat de color",
     "n · resolución y profundidad de color",
     "n · resolution and colour depth"
    ]
   },
   {
    "t": "lab",
    "id": "image",
    "props": {
     "id": "th-image",
     "cfg": {}
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "ref": "g-media",
     "seed": 1
    }
   }
  ],
  "m-rgb": [
   {
    "t": "p",
    "x": [
     "Tres components de llum: vermell, verd i blau. Model **additiu**. En RGB de 24 bits, 8 bits per component: 2⁸ × 2⁸ × 2⁸ = 2²⁴ = 16 777 216 colors.",
     "Tres componentes de luz: rojo, verde y azul. Modelo **aditivo**. En RGB de 24 bits, 8 bits por componente: 2⁸ × 2⁸ × 2⁸ = 2²⁴ = 16 777 216 colores.",
     "Three components of light: red, green and blue. An **additive** model. In 24-bit RGB, 8 bits per component: 2⁸ × 2⁸ × 2⁸ = 2²⁴ = 16 777 216 colours."
    ]
   },
   {
    "t": "lab",
    "id": "rgb",
    "props": {
     "id": "th-rgb",
     "cfg": {}
    },
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "id": "t22-c1",
     "type": "mcq",
     "q": [
      "Quin color és RGB(255, 255, 0)?",
      "¿Qué color es RGB(255, 255, 0)?",
      "What colour is RGB(255, 255, 0)?"
     ],
     "opts": [
      [
       "groc",
       "amarillo",
       "yellow"
      ],
      [
       "blanc",
       "blanco",
       "white"
      ],
      [
       "cian",
       "cian",
       "cyan"
      ],
      [
       "magenta",
       "magenta",
       "magenta"
      ]
     ],
     "answer": 0,
     "sol": [
      {
       "t": "p",
       "x": [
        "Síntesi additiva: vermell + verd = groc.",
        "Síntesis aditiva: rojo + verde = amarillo.",
        "Additive synthesis: red + green = yellow."
       ]
      }
     ]
    }
   }
  ],
  "m-comp": [
   {
    "head": [
     [
      "Format",
      "Formato",
      "Format"
     ],
     [
      "Compressió",
      "Compresión",
      "Compression"
     ],
     [
      "Ús",
      "Uso",
      "Use"
     ]
    ],
    "rows": [
     [
      "JPEG",
      [
       "amb pèrdua",
       "con pérdida",
       "lossy"
      ],
      [
       "fotografies",
       "fotografías",
       "photographs"
      ]
     ],
     [
      "PNG",
      [
       "sense pèrdua",
       "sin pérdida",
       "lossless"
      ],
      [
       "gràfics i transparència",
       "gráficos y transparencia",
       "graphics and transparency"
      ]
     ],
     [
      "GIF",
      [
       "sense pèrdua",
       "sin pérdida",
       "lossless"
      ],
      [
       "imatges simples i animacions",
       "imágenes simples y animaciones",
       "simple images and animations"
      ]
     ],
     [
      "TIFF",
      [
       "habitualment sense pèrdua",
       "habitualmente sin pérdida",
       "usually lossless"
      ],
      [
       "edició i impressió",
       "edición e impresión",
       "editing and printing"
      ]
     ],
     [
      "RAW",
      [
       "sense processament final",
       "sin procesamiento final",
       "without final processing"
      ],
      [
       "fotografia digital",
       "fotografía digital",
       "digital photography"
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
       "**Sin pérdida:** se recupera exactamente el original. **Con pérdida:** se elimina información para reducir mucho más el tamaño, con posible pérdida de calidad. El formato se escoge según el uso.",
       "**Lossless:** the original is recovered exactly. **Lossy:** information is removed to reduce the size much more, with a possible loss of quality. The format is chosen according to the use."
      ]
     }
    ],
    "t": "tip",
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "id": "t22-c2",
     "type": "mcq",
     "q": [
      "Quin format fa servir compressió amb pèrdua?",
      "¿Qué formato usa compresión con pérdida?",
      "Which format uses lossy compression?"
     ],
     "opts": [
      "PNG",
      "JPEG",
      "GIF",
      "TIFF"
     ],
     "answer": 1,
     "sol": [
      {
       "t": "p",
       "x": [
        "JPEG elimina detalls que l'ull no nota; PNG i GIF no perden informació.",
        "JPEG elimina detalles que el ojo no nota; PNG y GIF no pierden información.",
        "JPEG removes details the eye does not notice; PNG and GIF lose no information."
       ]
      }
     ]
    }
   }
  ],
  "m-audio": [
   {
    "head": [
     "Característica",
     [
      "Què és",
      "Qué es",
      "What it is"
     ],
     [
      "Es percep com",
      "Se percibe como",
      "Perceived as"
     ]
    ],
    "rows": [
     [
      [
       "Freqüència (Hz)",
       "Frecuencia (Hz)",
       "Frequency (Hz)"
      ],
      [
       "vibracions per segon",
       "vibraciones por segundo",
       "vibrations per second"
      ],
      [
       "to: greu o agut",
       "tono: grave o agudo",
       "pitch: low or high"
      ]
     ],
     [
      "Amplitud",
      [
       "magnitud de la vibració",
       "magnitud de la vibración",
       "magnitude of the vibration"
      ],
      [
       "intensitat (dB)",
       "intensidad (dB)",
       "loudness (dB)"
      ]
     ],
     [
      "Timbre",
      [
       "el que diferencia instruments",
       "lo que diferencia instrumentos",
       "what distinguishes instruments"
      ],
      [
       "«color» del so",
       "«color» del sonido",
       "the “colour” of the sound"
      ]
     ]
    ],
    "t": "table"
   },
   {
    "t": "p",
    "x": [
     "Un **ADC** converteix el senyal analògic en digital fent dues coses: **mostratge** (mesurar f$_{\\text{s}}$ vegades per segon: 44 100 Hz, 48 000 Hz) i **quantificació** (arrodonir cada mesura a un dels 2$^{\\text{n}}$ nivells de la profunditat). Un **DAC** fa el camí invers.",
     "Un **ADC** convierte la señal analógica en digital haciendo dos cosas: **muestreo** (medir f$_{\\text{s}}$ veces por segundo: 44 100 Hz, 48 000 Hz) y **cuantificación** (redondear cada medida a uno de los 2$^{\\text{n}}$ niveles de la profundidad). Un **DAC** hace el camino inverso.",
     "An **ADC** converts the analogue signal into a digital one by doing two things: **sampling** (measuring f$_{\\text{s}}$ times per second: 44 100 Hz, 48 000 Hz) and **quantisation** (rounding each measurement to one of the 2$^{\\text{n}}$ levels of the bit depth). A **DAC** does the reverse."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "**Mida = d × f × b × c** (bits), amb d en segons, f la freqüència de mostratge, b els bits per mostra i c els canals (mono 1, estèreo 2). **Bitrate = f × b × c** (b/s).",
       "**Tamaño = d × f × b × c** (bits), con d en segundos, f la frecuencia de muestreo, b los bits por muestra y c los canales (mono 1, estéreo 2). **Bitrate = f × b × c** (b/s).",
       "**Size = d × f × b × c** (bits), with d in seconds, f the sampling rate, b the bits per sample and c the channels (mono 1, stereo 2). **Bit rate = f × b × c** (b/s)."
      ]
     }
    ],
    "t": "box",
    "title": [
     "Fórmules",
     "Fórmulas",
     "Formulas"
    ]
   },
   {
    "t": "lab",
    "id": "audio",
    "props": {
     "id": "th-audio",
     "cfg": {}
    },
    "mode": "explained"
   },
   {
    "t": "p",
    "x": [
     "Formats: **FLAC** (sense pèrdua); **MP3, AAC, Vorbis** (amb pèrdua). **MIDI** no guarda l'ona sinó instruccions musicals.",
     "Formatos: **FLAC** (sin pérdida); **MP3, AAC, Vorbis** (con pérdida). **MIDI** no guarda la onda sino instrucciones musicales.",
     "Formats: **FLAC** (lossless); **MP3, AAC, Vorbis** (lossy). **MIDI** does not store the wave but musical instructions."
    ],
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "ref": "g-media",
     "seed": 4
    }
   }
  ],
  "m-video": [
   {
    "t": "p",
    "x": [
     "Un vídeo és una successió de fotogrames: més **FPS** → moviment més fluid. **Progressiu**: fotogrames complets; **entrellaçat**: cada fotograma en dos camps. Resolucions: SD PAL 720 × 576, HD 1280 × 720, Full HD 1920 × 1080, 4K UHD 3840 × 2160.",
     "Un vídeo es una sucesión de fotogramas: más **FPS** → movimiento más fluido. **Progresivo**: fotogramas completos; **entrelazado**: cada fotograma en dos campos. Resoluciones: SD PAL 720 × 576, HD 1280 × 720, Full HD 1920 × 1080, 4K UHD 3840 × 2160.",
     "A video is a sequence of frames: more **FPS** → smoother motion. **Progressive**: complete frames; **interlaced**: each frame in two fields. Resolutions: SD PAL 720 × 576, HD 1280 × 720, Full HD 1920 × 1080, 4K UHD 3840 × 2160."
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "Sense compressió: **mida = amplada × alçada × bits/píxel × FPS × durada**. A partir del bitrate: **mida ≈ bitrate × durada**.",
       "Sin compresión: **tamaño = anchura × altura × bits/píxel × FPS × duración**. A partir del bitrate: **tamaño ≈ bitrate × duración**.",
       "Uncompressed: **size = width × height × bits/pixel × FPS × duration**. From the bit rate: **size ≈ bit rate × duration**."
      ]
     }
    ],
    "t": "box",
    "title": [
     "Fórmules",
     "Fórmulas",
     "Formulas"
    ]
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "L'exemple de la diapositiva (Full HD, 24 bits, 25 FPS, 10 min) dona **≈ 86,9 GiB**, no 89,0: el producte 5,93 × 25 × 600 són MiB i falta dividir entre 1024.",
       "El ejemplo de la diapositiva (Full HD, 24 bits, 25 FPS, 10 min) da **≈ 86,9 GiB**, no 89,0: el producto 5,93 × 25 × 600 son MiB y falta dividir entre 1024.",
       "The example on the slide (Full HD, 24 bits, 25 FPS, 10 min) gives **≈ 86.9 GiB**, not 89.0: the product 5.93 × 25 × 600 is in MiB and must still be divided by 1024."
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
    },
    "mode": "explained"
   },
   {
    "blocks": [
     {
      "t": "p",
      "x": [
       "La compressió elimina la informació **redundant** (el que es repeteix d'un fotograma a l'altre) i, si és amb pèrdues, part de la **irrellevant** (el que l'ull no nota). Més compressió → menys mida i potencialment menys qualitat.",
       "La compresión elimina la información **redundante** (lo que se repite de un fotograma a otro) y, si es con pérdidas, parte de la **irrelevante** (lo que el ojo no nota). Más compresión → menos tamaño y potencialmente menos calidad.",
       "Compression removes **redundant** information (what repeats from one frame to the next) and, if lossy, part of the **irrelevant** information (what the eye does not notice). More compression → smaller size and potentially lower quality."
      ]
     }
    ],
    "t": "tip",
    "mode": "explained"
   },
   {
    "t": "check",
    "ex": {
     "ref": "g-media",
     "seed": 7
    }
   }
  ]
 },
 "examEnd": [
  {
   "ref": "c-mm"
  },
  {
   "ref": "c-mmx"
  },
  {
   "ref": "g-media",
   "seed": 9
  },
  {
   "ref": "g-media-dur",
   "seed": 2
  }
 ]
};
