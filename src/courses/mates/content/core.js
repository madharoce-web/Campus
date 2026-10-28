import { Z, tx } from '../engine/z.js';
import { htmlDisp } from '../kit/mtex.js';
import { MARK, nextUid } from './marks.js';

/**
 * Nucli del contingut: idioma, tipografia ($…$), caixes de teoria, taules, passos, marques de laboratori i de passos, recta real.
 * Codi original; l'idioma i les dependències arriben pel contenidor $ (un per idioma).
 */
export function makeCore($) {
  const { lang } = $;
  const uid = nextUid;
  const L = (ca, es, en) => lang === 'ca' ? ca : lang === 'en' && en != null ? en : es;
  const esc = Z.escH;

  const fmt = (x, d) => Z.fmtNum(x, d == null ? 4 : d);

  /* $…$ en línia, $$…$$ destacat; la resta és HTML escrit a mà */
  function md(s) {
    return String(s).replace(/\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g, (m, d, i) => d != null ? '<span class="disp m">' + htmlDisp(d) + '</span>' : '<span class="m">' + tx(i) + '</span>');
  }
  const M = s => '<span class="m">' + tx(s) + '</span>';
  const P = s => '<p>' + md(s) + '</p>';
  const UL = arr => '<ul>' + arr.map(x => '<li>' + md(x) + '</li>').join('') + '</ul>';
  const OL = arr => '<ol>' + arr.map(x => '<li>' + md(x) + '</li>').join('') + '</ol>';
  function BX(kind, head, body) { return '<div class="bx ' + kind + '"><div class="bh">' + head + '</div>' + body + '</div>'; }
  const bodyH = b => Array.isArray(b) ? b.join('') : (/^\s*<(div|ul|ol|p|table|section)[\s>]/.test(b) ? b : P(b));
  const DEF = (name, body) => BX('def', L('Definició', 'Definición') + (name ? ' · ' + name : ''), bodyH(body));
  const THM = (label, body) => BX('thm', md(label), bodyH(body));
  const TIP = body => BX('tip', L('Per entendre-ho', 'Para entenderlo'), bodyH(body));
  const WARN = body => BX('warn', L('Compte', 'Cuidado'), bodyH(body));
  const EXB = (head, body) => BX('ex', head ? md(head) : L('Exemple', 'Ejemplo'), bodyH(body));
  function TBL(head, rows, cls) {
    return '<div class="tbl"><table class="' + (cls || '') + '"><thead><tr>' + head.map(h => '<th>' + md(h) + '</th>').join('') + '</tr></thead><tbody>' +
      rows.map(r => '<tr>' + r.map(c => '<td>' + md(c) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
  }
  const yes = () => '<span class="yes">' + L('Sí', 'Sí') + '</span>';
  const no = () => '<span class="no">No</span>';

  function LAB(w, id, cfg) { return MARK + JSON.stringify(['lab', w, id, cfg || {}]) + MARK; }

  /* ---------- passos que es revelen un a un ---------- */
  const STEPS = {};
  function stepper(id, gen, opts) {
    STEPS[id] = { gen, opts: opts || {} };
    return '<div class="stepper" id="stp-' + id + '">' + MARK + JSON.stringify(['stp', id]) + MARK + '</div>';
  }
  const smart = s => /\$/.test(s) ? md(s) : /\\(ov|fr|sq|rt)\{|\^\{|_\{/.test(s) ? '<span class="m">' + tx(s) + '</span>' : md(s);
  function stepRow(s, i) {
    return '<div class="st ' + (s.c || '') + '"><span class="n">' + (s.n != null ? s.n : (i + 1)) + '</span><div class="body">' +
      (s.h ? '<div class="small" style="font-weight:600">' + md(s.h) + '</div>' : '') +
      (s.m ? '<span class="m">' + tx(s.m) + '</span>' : '') + (s.t ? '<div>' + smart(s.t) + '</div>' : '') +
      (s.w ? '<div class="why">' + smart(s.w) + '</div>' : '') + (s.f && s.f.length && typeof $.fref === 'function' ? $.fref(s.f) : '') + (s.nf && typeof $.fno === 'function' ? $.fno(s.nf) : '') + '</div></div>';
  }

  const fb = (k, h) => '<div class="fb ' + k + '">' + h + '</div>';
  const okTxt = ok => '<b>' + (ok ? L('Correcte', 'Correcto') : L('Incorrecte', 'Incorrecto')) + '.</b> ';

  /* ---------- recta real en SVG ---------- */
  function NL(min, max, W, H, y0) {
    W = W || 640; H = H || 70; y0 = y0 == null ? H - 26 : y0;
    const pad = 22, X = v => pad + (v - min) / (max - min) * (W - 2 * pad);
    return { X, W, H, y0, min, max,
      axis(step, lab, every) {
        let s = '<line class="ax" x1="' + (pad - 10) + '" y1="' + y0 + '" x2="' + (W - pad + 10) + '" y2="' + y0 + '"/>';
        const first = Math.ceil(min / step) * step;
        for (let v = first, i = 0; v <= max + 1e-9; v += step, i++) {
          const x = X(v); s += '<line class="tk" x1="' + x + '" y1="' + (y0 - 4) + '" x2="' + x + '" y2="' + (y0 + 4) + '"/>';
          if (lab !== false && (!every || Math.round((v - first) / step) % every === 0)) s += '<text x="' + x + '" y="' + (y0 + 17) + '">' + (typeof lab === 'function' ? lab(v) : fmt(v, 2)) + '</text>';
        }
        return s;
      } };
  }
  return { L, esc, fmt, md, M, P, UL, OL, BX, bodyH, DEF, THM, TIP, WARN, EXB, TBL, yes, no, LAB, STEPS, stepper, smart, stepRow, fb, okTxt, NL, uid };
}
