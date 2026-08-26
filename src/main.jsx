import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@mantine/core/styles.css';
import './index.css';
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { MantineProvider } from '@mantine/core';
import { theme } from './styles/theme.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider theme={theme}>
       <BrowserRouter>
      
            <App /> 
          
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)
