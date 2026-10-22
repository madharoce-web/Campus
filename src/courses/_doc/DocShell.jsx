import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CourseHeader from '../../app/CourseHeader.jsx';
import { NavbarBelow } from '../../app/NavbarSlots.jsx';
import { T as SHELL_T } from '../../app/strings.js';
import { useLang } from '../../lib/i18n.jsx';
import { useInternalLinks } from '../../lib/useInternalLinks.js';

/** Desplaça fins a l'element amb aquest id quan existeix i és visible (reintenta uns quants fotogrames). */
function scrollToId(id) {
  let n = 0, raf = 0;
  const step = () => {
    const el = document.getElementById(id);
    if (el && el.getClientRects().length) { el.scrollIntoView(); return; }
    if (++n < 60) raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);
  return () => cancelAnimationFrame(raf);
}

/** Barra de progrés de la lectura, a sota de la barra superior. */
function Progress({ dep }) {
  const [w, setW] = useState(0);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      setW(h > 0 ? Math.min(100, scrollY / h * 100) : 0);
    };
    f();
    addEventListener('scroll', f, { passive: true });
    return () => removeEventListener('scroll', f);
  }, [dep]);
  return <NavbarBelow><div className="prog" id="prog" style={{ width: w + '%' }} /></NavbarBelow>;
}

/**
 * Visor de documents de la família «doc» (Economia, Lògica i grafs): índex lateral que en
 * pantalles estretes és un calaix, cercador, selector de documents, barra de progrés,
 * seguiment de la lectura a l'índex, àncores de secció i peu.
 *
 *  k        curs (capçalera)              page    clau de la pàgina visible (document o unitat)
 *  lang     idioma del contingut visible  ready   el contingut ja és a la pàgina
 *  picker   [{ k, to, name, ct, c, b }]   current document actiu del selector
 *  toc      [{ part } | { to, text, li, a?, cls?, cur? }]
 *  anchors  àncores de l'índex en ordre (per conservar la secció en canviar d'idioma)
 *  search   cercador (element)            foot    text del peu
 *  tocScroll 'center' | 'nearest'         children cos del document (dins d'article.doc)
 */
export default function DocShell({ k, page, lang, ready, picker, current, toc, anchors, search, foot, tocScroll = 'center', children }) {
  const { lang: uiLang, L } = useLang();
  const loc = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [on, setOn] = useState(null);
  const docRef = useRef(null), sideRef = useRef(null);
  const links = useRef({});
  const onRef = useRef(on);
  useInternalLinks(docRef);

  useEffect(() => { onRef.current = on; }, [on]);

  // el calaix es tanca en navegar
  useEffect(() => { setOpen(false); }, [loc.key]);

  // àncores: en arribar o navegar amb #secció, s'hi va; en canviar de pàgina sense àncora, a dalt
  const prevPage = useRef(null);
  useEffect(() => {
    if (!ready) return undefined;
    const changed = prevPage.current !== null && prevPage.current !== page;
    prevPage.current = page;
    if (changed) setOn(null);
    const id = decodeURIComponent(loc.hash.replace(/^#/, ''));
    if (id) return scrollToId(id);
    if (changed) window.scrollTo(0, 0);
    return undefined;
  }, [loc.key, page, ready]); // eslint-disable-line react-hooks/exhaustive-deps

  // canvi d'idioma: es torna a la mateixa secció de l'índex (o a dalt), com l'original
  const prevLang = useRef({ lang, anchors, page });
  useEffect(() => {
    const p = prevLang.current;
    prevLang.current = { lang, anchors, page };
    if (!p.lang || p.lang === lang || p.page !== page) return undefined;
    const i = p.anchors.indexOf(onRef.current);
    const a = i >= 0 ? anchors[i] : null;
    if (loc.hash) navigate(loc.pathname + (a ? '#' + a : ''), { replace: true });
    if (a) return scrollToId(a);
    window.scrollTo(0, 0);
    return undefined;
  }, [lang, anchors, page]); // eslint-disable-line react-hooks/exhaustive-deps

  // seguiment de la lectura: marca a l'índex la secció que es llegeix
  useEffect(() => {
    if (!ready || !docRef.current || !('IntersectionObserver' in window)) return undefined;
    const set = new Set(anchors);
    const io = new IntersectionObserver((en) => {
      en.forEach((x) => { if (x.isIntersecting && set.has(x.target.id)) setOn(x.target.id); });
    }, { rootMargin: '-14% 0px -74% 0px' });
    docRef.current.querySelectorAll('h2[id],h3[id]').forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [ready, page, lang, anchors]);

  // l'entrada marcada, visible dins de l'índex
  useEffect(() => {
    const a = on && links.current[on], side = sideRef.current;
    if (!a || !side) return;
    const sr = a.getBoundingClientRect(), pr = side.getBoundingClientRect();
    if (sr.top < pr.top + 60 || sr.bottom > pr.bottom - 20) a.scrollIntoView({ block: tocScroll });
  }, [on, tocScroll]);

  const close = () => setOpen(false);
  const burger = (
    <button type="button" className="icobtn" id="burger" aria-label={L('Índex', 'Índice')} aria-expanded={open} aria-controls="side"
      onClick={() => setOpen((o) => !o)}>
      <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
    </button>
  );

  return (
    <div className="shell">
      <Progress dep={page + lang + (ready ? 1 : 0)} />
      <aside className={'side' + (open ? ' open' : '')} id="side" ref={sideRef}>
        <p className="toclab" id="toclab">{L('Contingut', 'Contenido')}</p>
        <ul className="toc" id="toc">
          {toc.map((t, i) => (t.part !== undefined
            ? <li key={i} className="part">{t.part}</li>
            : (
              <li key={i} className={t.li}>
                <Link to={t.to} className={[t.cls, t.a && t.a === on ? 'on' : ''].filter(Boolean).join(' ') || undefined}
                  data-a={t.a} aria-current={t.cur ? 'page' : undefined} onClick={close}
                  ref={t.a ? (el) => { links.current[t.a] = el; } : undefined}>
                  {t.text}
                </Link>
              </li>
            )))}
        </ul>
      </aside>
      <div className={'scrim' + (open ? ' on' : '')} id="scrim" onClick={close} />
      <main className="main">
        <CourseHeader k={k} before={burger} extra={search} />
        <nav className="m-snav m-pick" aria-label={SHELL_T[uiLang].secs}>
          {picker.map((p) => (
            <Link key={p.k} to={p.to} className="pk" id={'pk-' + p.k} data-s={p.k} aria-current={p.k === current ? 'page' : undefined}
              style={{ '--c': p.c, '--b': p.b }} onClick={close}>
              <span className="dot" /><span className="nm" id={'nm-' + p.k}>{p.name}</span><span className="ct" id={'ct-' + p.k}>{p.ct}</span>
            </Link>
          ))}
        </nav>
        <article className="doc" id="doc" ref={docRef}>{children}</article>
        <div className="foot">
          <span id="footsrc">{foot}</span>
          <button type="button" className="top" id="totop" onClick={() => window.scrollTo({ top: 0 })}>{L('↑ Amunt', '↑ Arriba')}</button>
        </div>
      </main>
    </div>
  );
}
