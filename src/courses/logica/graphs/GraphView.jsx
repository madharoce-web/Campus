import { useRef } from 'react';
import { edgeGeometry, edgeSet, BAD, EDGE_PALETTE, HL, HL_SOFT, INK, LINE, PALETTE, PAPER, R } from './svg.js';
import { weight } from './model.js';

/**
 * Graf interactiu dels laboratoris: la mateixa geometria que les figures (svg.js), però amb vèrtexs i
 * costats que es poden clicar (o activar amb el teclat) i vèrtexs que es poden arrossegar.
 *   G, pos                  graf i posicions { v: [x, y] }
 *   onVertex(v), onEdge(i)  clic en un vèrtex o un costat
 *   onMove(v, [x, y])       arrossegar un vèrtex (si no hi és, no es poden moure)
 *   onBlank([x, y])         clic en un espai buit
 *   hlV, hlE, badE, dimE, col, ecol, tag, sel   com a graphSvg; sel: vèrtex seleccionat
 */
export default function GraphView({ G, pos, w = 320, h = 230, onVertex, onEdge, onMove, onBlank, hlV = [], hlE = [], badE = [], dimE = [], col, ecol, tag, tagAbove, sel, weights, label, vLabel = (v) => v, eLabel }) {
  const svg = useRef(null);
  const drag = useRef(null);
  const H = edgeSet(G, hlE), B = edgeSet(G, badE), D = edgeSet(G, dimE), HV = new Set(hlV);
  const showW = weights ?? G.E.some((e) => e[2] != null);
  const geo = edgeGeometry(G, pos);

  const toSvg = (ev) => {
    const el = svg.current, pt = el.createSVGPoint();
    pt.x = ev.clientX; pt.y = ev.clientY;
    const p = pt.matrixTransform(el.getScreenCTM().inverse());
    return [Math.max(R, Math.min(w - R, Math.round(p.x))), Math.max(R, Math.min(h - R, Math.round(p.y)))];
  };
  const down = (v) => (ev) => {
    if (!onMove) return;
    drag.current = { v, moved: false };
    ev.currentTarget.setPointerCapture?.(ev.pointerId);
  };
  const move = (ev) => {
    if (!drag.current) return;
    drag.current.moved = true;
    onMove(drag.current.v, toSvg(ev));
  };
  const up = (v) => () => {
    const d = drag.current;
    drag.current = null;
    if (!d || !d.moved) onVertex?.(v);
  };
  const key = (f) => (ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); f(); } };

  return (
    <svg ref={svg} className="gv" viewBox={`0 0 ${w} ${h}`} role="group" aria-label={label}
      onPointerMove={move} onPointerDown={(ev) => { if (ev.target === svg.current && onBlank) onBlank(toSvg(ev)); }}>
      {geo.map((g) => {
        const c = ecol && ecol[g.i] ? EDGE_PALETTE[(ecol[g.i] - 1) % EDGE_PALETTE.length] : null;
        const stroke = B.has(g.i) ? BAD : H.has(g.i) ? HL : c || LINE;
        return (
          <g key={g.i} className={'gv-e' + (onEdge ? ' is-click' : '')} opacity={D.has(g.i) ? 0.28 : 1}
            {...(onEdge ? { role: 'button', tabIndex: 0, 'aria-label': (eLabel ? eLabel(g.i) : `${g.e[0]}–${g.e[1]}`), onClick: () => onEdge(g.i), onKeyDown: key(() => onEdge(g.i)) } : {})}>
            {onEdge && <path d={g.d} fill="none" stroke="transparent" strokeWidth="16" />}
            <path d={g.d} fill="none" stroke={stroke} strokeWidth={H.has(g.i) || B.has(g.i) || c ? 3.6 : 1.8} strokeDasharray={B.has(g.i) ? '5 4' : undefined} strokeLinecap="round" />
            {g.arrow && <polygon points={g.arrow} fill={stroke} />}
          </g>
        );
      })}
      {geo.map((g) => {
        const t = eLabel && !onEdge ? eLabel(g.i) : showW ? weight(g.e) : null;
        if (t == null) return null;
        const s = String(t), bw = 7 * s.length + 8;
        return (
          <g key={'w' + g.i} pointerEvents="none">
            <rect x={g.mid[0] - bw / 2} y={g.mid[1] - 9} width={bw} height="17" rx="4" fill={PAPER} stroke={H.has(g.i) ? HL : '#ddd8c9'} />
            <text x={g.mid[0]} y={g.mid[1] + 4} textAnchor="middle" fontSize="11.5" fill={INK}>{s}</text>
          </g>
        );
      })}
      {G.V.map((v) => {
        const [x, y] = pos[v];
        const on = HV.has(v) || sel === v;
        const fill = col && col[v] ? PALETTE[(col[v] - 1) % PALETTE.length] : on ? HL_SOFT : PAPER;
        return (
          <g key={v} className={'gv-v' + (onVertex || onMove ? ' is-click' : '') + (sel === v ? ' is-sel' : '')}
            {...(onVertex ? { role: 'button', tabIndex: 0, 'aria-label': vLabel(v), 'aria-pressed': sel === v || undefined, onKeyDown: key(() => onVertex(v)) } : {})}
            onPointerDown={down(v)} onPointerUp={onMove ? up(v) : undefined} onClick={onMove ? undefined : () => onVertex?.(v)}>
            <circle cx={x} cy={y} r={R + (sel === v ? 2 : 0)} fill={fill} stroke={on ? HL : INK} strokeWidth={on ? 2.8 : 1.6} />
            <text x={x} y={y + 4.5} textAnchor="middle" fontSize="13" fontWeight="600" fill={INK} pointerEvents="none">{v}</text>
            {tag && tag[v] != null && (() => {
              const t = String(tag[v]), bw = 6.4 * t.length + 8, tx = tagAbove ? x - bw / 2 : x + R - 2, ty = tagAbove ? y - R - 18 : y - R - 13;
              return (
                <g pointerEvents="none">
                  <rect x={tx} y={ty} width={bw} height="15" rx="7.5" fill={HL} />
                  <text x={tx + bw / 2} y={ty + 11} textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#fff">{t}</text>
                </g>
              );
            })()}
          </g>
        );
      })}
    </svg>
  );
}
