import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LangProvider } from './lib/i18n.jsx';
import { AuthProvider } from './lib/auth.jsx';
import { NavbarSlotsProvider } from './app/NavbarSlots.jsx';
import App from './app/App.jsx';
import './styles/tokens.css';
import './styles/base.css';
import './styles/shell.css';
import './styles/site.css';

// basename: la web pot viure a l'arrel del domini o en una subcarpeta (BASE_PATH).
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';
// versió publicada (vite.config.js), per saber quina versió veu cadascú
document.documentElement.dataset.build = import.meta.env.VITE_BUILD;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <LangProvider>
        <AuthProvider>
          <NavbarSlotsProvider>
            <App />
          </NavbarSlotsProvider>
        </AuthProvider>
      </LangProvider>
    </BrowserRouter>
  </StrictMode>,
);
