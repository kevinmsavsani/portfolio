import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LanguageProvider } from "./context/Context.tsx";
import { HashRouter } from "react-router-dom";
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <LanguageProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LanguageProvider>
  </HashRouter>
)
