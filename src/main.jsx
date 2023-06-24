import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global.js';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import { AuthProvider } from './context/auth';
import { CartProvider } from './context/cart';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <React.StrictMode>
      <AuthProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </AuthProvider>
    </React.StrictMode>
  </ThemeProvider>
);
