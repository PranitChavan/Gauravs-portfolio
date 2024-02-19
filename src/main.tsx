import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home.tsx';
import './index.css';
import { ThemeProvider } from './Components/UI/theme-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
