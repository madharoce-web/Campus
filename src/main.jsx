import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LangProvider } from './lib/i18n.jsx';
import { NavbarSlotsProvider } from './app/NavbarSlots.jsx';
import App from './app/App.jsx';
import './styles/base.css';
import './styles/shell.css';

// basename: la web pot viure a l'arrel del domini o en una subcarpeta (BASE_PATH).
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <LangProvider>
        <NavbarSlotsProvider>
          <App />
        </NavbarSlotsProvider>
      </LangProvider>
    </BrowserRouter>
  </StrictMode>,
);
