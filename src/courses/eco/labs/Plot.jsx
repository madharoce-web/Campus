import { fmt } from '../engine/num.js';

/**
 * Gràfic SVG dels laboratoris (mateixa geometria que l'original): es van afegint línies,
 * punts, polígons i textos en coordenades de dades i svg() en retorna l'element.
 */
export class Plot {
  constructor(W, H, pad, xr, yr) {
    this.W = W; this.H = H; this.l = pad[0]; this.r = pad[1]; this.t = pad[2]; this.b = pad[3]; this.xr = xr; this.yr = yr;
    this.els = [];
  }
  X(v) { return this.l + (v - this.xr[0]) / (this.xr[1] - this.xr[0]) * (this.W - this.l - this.r); }
  Y(v) { return this.H - this.b - (v - this.yr[0]) / (this.yr[1] - this.yr[0]) * (this.H - this.t - this.b); }
  add(make) { this.els.push(make(this.els.length)); return this; }
  line(x1, y1, x2, y2, cls) {
    return this.add((k) => <line key={k} x1={this.X(x1).toFixed(1)} y1={this.Y(y1).toFixed(1)} x2={this.X(x2).toFixed(1)} y2={this.Y(y2).toFixed(1)} className={cls} />);
  }
  text(x, y, t, cls, anchor, dx, dy) {
    return this.add((k) => <text key={k} x={(this.X(x) + (dx || 0)).toFixed(1)} y={(this.Y(y) + (dy || 0)).toFixed(1)} className={cls || 'g-s'} textAnchor={anchor || 'start'}>{t}</text>);
  }
  dot(x, y, cls, r) {
    return this.add((k) => <circle key={k} cx={this.X(x).toFixed(1)} cy={this.Y(y).toFixed(1)} r={r || 4} className={cls || 'g-pt'} />);
  }
  poly(pts, cls, closed) {
    const p = pts.map((q) => this.X(q[0]).toFixed(1) + ',' + this.Y(q[1]).toFixed(1)).join(' ');
    return this.add((k) => (closed ? <polygon key={k} points={p} className={cls} /> : <polyline key={k} points={p} className={cls} />));
  }
  axes(xl, yl, xt, yt) {
    const x0 = this.l, y0 = this.H - this.b, x1 = this.W - this.r + 8, y1 = this.t - 8;
    this.add((k) => <line key={k} x1={x0} y1={y0} x2={x1} y2={y0} className="g-ax" />);
    this.add((k) => <line key={k} x1={x0} y1={y0} x2={x0} y2={y1} className="g-ax" />);
    this.add((k) => <text key={k} x={x1} y={y0 + 30} className="g-s" textAnchor="end">{xl}</text>);
    this.add((k) => <text key={k} x={x0 + 6} y={y1 - 4} className="g-s">{yl}</text>);
    (xt || []).forEach((v) => {
      const X = this.X(v).toFixed(1);
      this.add((k) => <line key={k} x1={X} y1={y0} x2={X} y2={y0 + 4} className="g-ax" />);
      this.add((k) => <text key={k} x={X} y={y0 + 16} className="g-s" textAnchor="middle">{fmt(v, 1)}</text>);
    });
    (yt || []).forEach((v) => {
      const Y = this.Y(v);
      this.add((k) => <line key={k} x1={x0 - 4} y1={Y.toFixed(1)} x2={x0} y2={Y.toFixed(1)} className="g-ax" />);
      this.add((k) => <text key={k} x={x0 - 7} y={(Y + 4).toFixed(1)} className="g-s" textAnchor="end">{fmt(v, 2)}</text>);
    });
    return this;
  }
  svg(label) {
    return <svg viewBox={'0 0 ' + this.W + ' ' + this.H} role="img" aria-label={label}>{this.els}</svg>;
  }
}
