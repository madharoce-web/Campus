import { useEffect, useRef } from 'react';
import Rich from '../../../lib/Rich.jsx';
import { useLang } from '../../../lib/i18n.jsx';
import CE from '../engine/ce.js';
import { getContent } from '../content/index.js';
import { MUNITS, VRES } from '../content/consts.js';
import { useSlot } from '../store.js';
import { Field, Html, LabShell, Sel } from '../ui.jsx';

/** Etiqueta + camp numèric (numIn de l'original): accepta valors positius. */
function NumIn({ id, k, s, set, label, w = 100 }) {
  const { ui: lang } = useLang();
  const C = getContent(lang).C;
  return (
    <>
      <label htmlFor={id} className="small">{label}</label>
      <Field sync={s} className={'sm p-w' + w} id={id} value={String(s[k]).replace('.', ',')}
        onCommit={(t) => { const v = C.readNum(t); if (v != null && v > 0) { set({ [k]: v }); return true; } return false; }} />
    </>
  );
}

/* ---------- imatge: profunditat de color i mida ---------- */
export function Image({ id, cfg }) {
  const { ui: lang, L } = useLang();
  const C = getContent(lang).C;
  const [s, set] = useSlot(id, () => ({ bpp: 8, w: 4000, h: 3000, b: 24, u: 'MiB', ...cfg }));
  const W = 24, H = 14, cells = [];
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const t = x / (W - 1), u = y / (H - 1);
    let r = Math.round(255 * t), g = Math.round(255 * (1 - Math.abs(2 * u - 1))), bl = Math.round(255 * (1 - t) * u + 60);
    const d = Math.hypot(x - 7, y - 6); if (d < 4) { r = 250; g = 210; bl = 40; }
    bl = Math.min(255, bl);
    let col;
    if (s.bpp === 24) col = 'rgb(' + r + ',' + g + ',' + bl + ')';
    else if (s.bpp === 1) { const lum = (0.3 * r + 0.59 * g + 0.11 * bl) / 255; col = lum > 0.5 ? '#fff' : '#000'; }
    else { const lv = 2 ** s.bpp, lum = (0.3 * r + 0.59 * g + 0.11 * bl) / 255, q = Math.round(lum * (lv - 1)) / (lv - 1), c = Math.round(q * 255); col = 'rgb(' + c + ',' + c + ',' + c + ')'; }
    cells.push(col);
  }
  const R = CE.image(s.w, s.h, s.b, s.u);
  return (
    <LabShell title={L('Píxels, profunditat de color i mida', 'Píxeles, profundidad de color y tamaño', 'Pixels, colour depth and size')}>
      <div className="ctrl"><span className="lbl-s">{L('bits per píxel', 'bits por píxel', 'bits per pixel')}</span>
        {[1, 2, 4, 8, 24].map((b) => <button key={b} type="button" className="chipbtn" aria-pressed={s.bpp === b} onClick={() => set({ bpp: b })}>{b}</button>)}
      </div>
      <div className="lab-split">
        <div><div className="pixgrid" style={{ gridTemplateColumns: 'repeat(' + W + ',minmax(0,1fr))' }}>{cells.map((c, i) => <span key={i} style={{ background: c }}></span>)}</div></div>
        <div className="explain">
          <span>{s.bpp} bits → 2<sup>{s.bpp}</sup> = <b>{CE.fint(2 ** s.bpp)}</b> {s.bpp === 24 ? L('colors (8 bits per R, G i B)', 'colores (8 bits por R, G y B)', 'colours (8 bits for R, G and B)') : s.bpp === 1 ? L('valors: blanc o negre', 'valores: blanco o negro', 'values: black or white') : L('nivells de gris', 'niveles de gris', 'grey levels')}.</span>
          <span>{L('Amb pocs bits apareixen «graons» on hi hauria d\'haver un degradat suau: cada píxel s\'ha d\'arrodonir al valor representable més proper.', 'Con pocos bits aparecen «escalones» donde debería haber un degradado suave: cada píxel se tiene que redondear al valor representable más cercano.', 'With few bits, “steps” appear where there should be a smooth gradient: each pixel has to be rounded to the nearest representable value.')}</span>
          <span>{L('Aquesta graella té ', 'Esta cuadrícula tiene ', 'This grid has ')}{W} × {H} = {W * H}{L(' píxels i ocupa ', ' píxeles y ocupa ', ' pixels and takes ')}{CE.fint(W * H * s.bpp)} bits = {CE.fnum(W * H * s.bpp / 8, 2)} B.</span>
        </div>
      </div>
      <hr className="sep" /><div className="lbl-s">{L('Calculadora de mida', 'Calculadora de tamaño', 'Size calculator')}</div>
      <div className="ctrl">
        <NumIn id={id + '-w'} k="w" s={s} set={set} label={L('amplada', 'anchura', 'width')} />
        <NumIn id={id + '-h'} k="h" s={s} set={set} label={L('alçada', 'altura', 'height')} />
        <NumIn id={id + '-b'} k="b" s={s} set={set} label="bits/px" w={70} />
        <Sel id={id + '-u'} opts={MUNITS} value={s.u} onChange={(u) => set({ u })} />
      </div>
      <Html html={C.stepsE(R.steps)} />
    </LabShell>
  );
}

/* ---------- RGB ---------- */
export function Rgb({ id }) {
  const { L } = useLang();
  const [s, set] = useSlot(id, { r: 255, g: 140, b: 0 });
  const hx = (v) => v.toString(16).toUpperCase().padStart(2, '0'), bn = (v) => v.toString(2).padStart(8, '0');
  return (
    <LabShell title={L('Un color RGB de 24 bits', 'Un color RGB de 24 bits', 'A 24-bit RGB colour')}>
      <div className="lab-split">
        <div className="stack p-g8">
          {[['r', L('vermell (R)', 'rojo (R)', 'red (R)')], ['g', L('verd (G)', 'verde (G)', 'green (G)')], ['b', L('blau (B)', 'azul (B)', 'blue (B)')]].map(([k, t]) => (
            <div key={k} className="ctrl"><label htmlFor={id + '-' + k} className="p-mw90">{t} = {s[k]}</label><input type="range" id={id + '-' + k} min="0" max="255" value={s[k]} onChange={(e) => set({ [k]: +e.target.value })} /></div>
          ))}
        </div>
        <div className="row p-aic">
          <div className="swatch" style={{ background: 'rgb(' + s.r + ',' + s.g + ',' + s.b + ')' }}></div>
          <div className="kv"><span>hex</span><span className="mono">#{hx(s.r) + hx(s.g) + hx(s.b)}</span><span>{L('binari', 'binario', 'binary')}</span><span className="mono p-fs12">{bn(s.r) + ' ' + bn(s.g) + ' ' + bn(s.b)}</span></div>
        </div>
      </div>
      <div className="explain"><Rich as="span" html={L('Cada component té 8 bits (0–255), és a dir, <b>dos dígits hexadecimals</b>. En total 24 bits: 2<sup>24</sup> = 16 777 216 colors. Model <b>additiu</b>: si puges els tres al màxim surt blanc.', 'Cada componente tiene 8 bits (0–255), es decir, <b>dos dígitos hexadecimales</b>. En total 24 bits: 2<sup>24</sup> = 16 777 216 colores. Modelo <b>aditivo</b>: si subes los tres al máximo sale blanco.', 'Each component has 8 bits (0–255), that is, <b>two hexadecimal digits</b>. 24 bits in total: 2<sup>24</sup> = 16 777 216 colours. <b>Additive</b> model: if you raise all three to the maximum you get white.')} /></div>
    </LabShell>
  );
}

/** Ona, mostres i graons de quantificació en un canvas (colors de les variables del curs). */
function Wave({ id, spp, bits, label }) {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const cs = getComputedStyle(cv);
    const col = (v) => cs.getPropertyValue(v).trim() || '#888';
    const W = cv.width, H = cv.height, mid = H / 2, A = H * 0.4, per = 2;
    const fn = (t) => Math.sin(2 * Math.PI * per * t) * 0.8 + 0.2 * Math.sin(2 * Math.PI * per * 3 * t);
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = col('--line'); ctx.lineWidth = 1; const lv = 2 ** bits;
    for (let q = 0; q < lv; q++) { const y = mid - A + (2 * A) * q / (lv - 1 || 1); ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    ctx.strokeStyle = col('--ink-3'); ctx.lineWidth = 2; ctx.beginPath();
    for (let x = 0; x <= W; x++) { const y = mid - A * fn(x / W); if (x) ctx.lineTo(x, y); else ctx.moveTo(x, y); } ctx.stroke();
    const N = spp * per; const qv = (v) => { const k = Math.round((v + 1) / 2 * (lv - 1)); return k / (lv - 1) * 2 - 1; };
    ctx.strokeStyle = col('--accent'); ctx.lineWidth = 2.5; ctx.beginPath();
    for (let i = 0; i <= N; i++) { const x = W * i / N, y = mid - A * qv(fn(i / N)), x2 = W * (i + 1) / N; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); if (i < N) ctx.lineTo(x2, y); } ctx.stroke();
    ctx.fillStyle = col('--false');
    for (let i = 0; i <= N; i++) { const x = W * i / N, y = mid - A * qv(fn(i / N)); ctx.beginPath(); ctx.arc(x, y, 3.5, 0, 7); ctx.fill(); ctx.strokeStyle = col('--line-2'); ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  }, [spp, bits]);
  return <canvas ref={ref} className="wave" id={id} width="720" height="240" aria-label={label}></canvas>;
}

/* ---------- àudio: mostratge i quantificació ---------- */
export function Audio({ id, cfg }) {
  const { ui: lang, L } = useLang();
  const C = getContent(lang).C;
  const [s, set] = useSlot(id, () => ({ spp: 10, bits: 3, d: 300, f: 44100, b: 16, c: 2, u: 'MiB', ...cfg }));
  const R = CE.audio(s.d, s.f, s.b, s.c, s.u);
  return (
    <LabShell title={L('Del so analògic a les mostres', 'Del sonido analógico a las muestras', 'From analogue sound to samples')}>
      <div className="ctrl">
        <label htmlFor={id + '-spp'}>{L('mostres per període', 'muestras por periodo', 'samples per period')} = {s.spp}</label><input type="range" id={id + '-spp'} min="2" max="40" value={s.spp} onChange={(e) => set({ spp: +e.target.value })} />
        <label htmlFor={id + '-bits'}>{L('bits per mostra', 'bits por muestra', 'bits per sample')} = {s.bits} ({2 ** s.bits}{L(' nivells', ' niveles', ' levels')})</label><input type="range" id={id + '-bits'} min="1" max="8" value={s.bits} onChange={(e) => set({ bits: +e.target.value })} />
      </div>
      <Wave id={id + '-cv'} spp={s.spp} bits={s.bits} label={L('Ona i mostres', 'Onda y muestras', 'Wave and samples')} />
      <div className="explain">
        <Rich as="span" html={L('<b>Mostratge</b> (línies verticals): quantes vegades per segon es mesura. <b>Quantificació</b> (graons): a quants nivells s\'arrodoneix cada mesura. La línia gris és l\'ona real; l\'escala és el que guarda l\'ordinador.', '<b>Muestreo</b> (líneas verticales): cuántas veces por segundo se mide. <b>Cuantificación</b> (escalones): a cuántos niveles se redondea cada medida. La línea gris es la onda real; la escalera es lo que guarda el ordenador.', '<b>Sampling</b> (vertical lines): how many times per second it is measured. <b>Quantisation</b> (steps): how many levels each measurement is rounded to. The grey line is the real wave; the staircase is what the computer stores.')} />
        {s.spp <= 2 && <span>{L('Amb 2 mostres per període o menys l\'ona ja no es pot reconstruir: cal mostrejar a més del doble de la freqüència més alta.', 'Con 2 muestras por periodo o menos la onda ya no se puede reconstruir: hay que muestrear a más del doble de la frecuencia más alta.', 'With 2 samples per period or fewer the wave can no longer be reconstructed: you must sample at more than twice the highest frequency.')}</span>}
      </div>
      <hr className="sep" /><div className="lbl-s">{L('Mida = d × f × b × c', 'Tamaño = d × f × b × c', 'Size = d × f × b × c')}</div>
      <div className="ctrl">
        <NumIn id={id + '-d'} k="d" s={s} set={set} label="d (s)" />
        <NumIn id={id + '-f'} k="f" s={s} set={set} label="f (Hz)" />
        <NumIn id={id + '-b'} k="b" s={s} set={set} label="b (bits)" w={70} />
        <NumIn id={id + '-c'} k="c" s={s} set={set} label="c" w={60} />
        <Sel id={id + '-u'} opts={MUNITS} value={s.u} onChange={(u) => set({ u })} />
      </div>
      <div className="ctrl">
        {[[300, 44100, 16, 2, 'MiB', L('5 min CD', '5 min CD', '5 min CD')], [900, 48000, 18, 1, 'MB', L('activitat 3', 'actividad 3', 'activity 3')], [15, 48000, 24, 2, 'MB', L('activitat 4', 'actividad 4', 'activity 4')]].map((p) => (
          <button key={p[0]} type="button" className="chipbtn" onClick={() => set({ d: p[0], f: p[1], b: p[2], c: p[3], u: p[4] })}>{p[5]}</button>
        ))}
      </div>
      <Html html={C.stepsE(R.steps)} />
      <p className="small">Bitrate = f × b × c = {CE.fint(R.bitrate)} b/s = {CE.fnum(R.bitrate / 1000, 1)} Kb/s.</p>
    </LabShell>
  );
}

/* ---------- vídeo: fotograma × FPS × durada ---------- */
export function Video({ id, cfg }) {
  const { ui: lang, L } = useLang();
  const C = getContent(lang).C;
  const [s, set] = useSlot(id, () => ({ r: 'Full HD', bpp: 24, fps: 25, min: 10, u: 'GiB', br: 8, ...cfg }));
  const [w, h] = VRES[s.r], sec = Math.round(s.min * 60), R = CE.video(w, h, s.bpp, s.fps, sec, s.u);
  const raw = w * h * s.bpp * s.fps, comp = s.br * 1e6, ratio = raw / comp;
  return (
    <LabShell title={L('Mida d\'un vídeo i per què cal comprimir', 'Tamaño de un vídeo y por qué hay que comprimir', 'Size of a video and why it has to be compressed')}>
      <div className="ctrl">{Object.keys(VRES).map((k) => <button key={k} type="button" className="chipbtn" aria-pressed={s.r === k} onClick={() => set({ r: k })}>{k}</button>)}</div>
      <div className="ctrl">
        <NumIn id={id + '-bpp'} k="bpp" s={s} set={set} label="bits/px" w={60} />
        <NumIn id={id + '-fps'} k="fps" s={s} set={set} label="FPS" w={60} />
        <NumIn id={id + '-min'} k="min" s={s} set={set} label={L('minuts', 'minutos', 'minutes')} w={70} />
        <Sel id={id + '-u'} opts={MUNITS} value={s.u} onChange={(u) => set({ u })} />
      </div>
      <Html html={C.stepsE(R.steps)} />
      <hr className="sep" />
      <div className="ctrl"><NumIn id={id + '-br'} k="br" s={s} set={set} label={L('bitrate comprimit (Mb/s)', 'bitrate comprimido (Mb/s)', 'compressed bit rate (Mb/s)')} w={70} /></div>
      <div className="explain">
        <span>{L('Sense comprimir, el vídeo necessita ', 'Sin comprimir, el vídeo necesita ', 'Uncompressed, the video needs ')}<b>{CE.fnum(raw / 1e6, 1)} Mb/s</b>. {L('Amb un bitrate de ', 'Con un bitrate de ', 'With a bit rate of ')}{s.br} Mb/s, {L('mida ≈ bitrate × durada = ', 'tamaño ≈ bitrate × duración = ', 'size ≈ bit rate × duration = ')}{CE.fnum(s.br * sec / 8, 0)} MB ≈ {CE.fnum(s.br * sec / 8 / 1000, 2)} GB.</span>
        <span>{L('La compressió divideix les dades per ', 'La compresión divide los datos entre ', 'Compression divides the data by ')}<b>{CE.fnum(ratio, 0)}</b>. {L('Ho aconsegueix eliminant la informació redundant (el que no canvia d\'un fotograma al següent) i part de la irrellevant.', 'Lo consigue eliminando la información redundante (lo que no cambia de un fotograma al siguiente) y parte de la irrelevante.', 'It achieves this by removing redundant information (what does not change from one frame to the next) and part of the irrelevant information.')}</span>
      </div>
    </LabShell>
  );
}
