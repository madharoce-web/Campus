import { useState } from 'react';
import { useLang } from '../lib/i18n.jsx';
import { lsGet, lsSet } from '../lib/storage.js';
import SiteFooter from './SiteFooter.jsx';
import { T } from './strings.js';

const XICO = <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9" /></svg>;
const DRAWERICO = <svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="3.5" width="15" height="13" rx="1.5" /><path d="M12.5 3.5v13M8.5 8l-2 2 2 2" /></svg>;

/**
 * Pàgina del campus amb l'estructura de l'aula virtual: contingut al centre i, a la dreta,
 * el calaix de blocs (que es pot tancar; l'estat es desa a 'sem1-drawer'). La fan servir
 * Inici, Tauler, Els meus cursos, Graus i El meu compte.
 * name: valor de data-page (àmbit dels estils de la pàgina) · blocks: blocs del calaix
 */
export default function Page({ name, blocks, children }) {
  const { ui } = useLang();
  const S = T[ui];
  const [open, setOpenState] = useState(() => {
    const v = lsGet('sem1-drawer');
    return v ? v === 'open' : window.innerWidth >= 1000;
  });
  const setOpen = (o) => { setOpenState(o); lsSet('sem1-drawer', o ? 'open' : 'closed'); };
  const withBlocks = !!blocks;
  return (
    <div data-page={name} className="am-site">
      <div className={'am-layout' + (withBlocks && open ? ' am-dopen' : '')}>
        <div className="am-main"><main className="am-main-in">{children}</main></div>
        {withBlocks && <>
          <aside className="am-drawer" id="am-drawer" aria-label={S.blocks}>
            <div className="am-dhead">
              <button type="button" className="am-dclose" id="am-dclose" aria-label={S.closeBlocks} title={S.closeBlocks} onClick={() => setOpen(false)}>{XICO}</button>
            </div>
            {blocks}
          </aside>
          <button type="button" className="am-dopenbtn" id="am-dopen" aria-label={S.openBlocks} title={S.openBlocks} aria-controls="am-drawer" aria-expanded={open} onClick={() => setOpen(true)}>{DRAWERICO}</button>
          <div className="am-dscrim" onClick={() => setOpen(false)} />
        </>}
      </div>
      <SiteFooter />
    </div>
  );
}
