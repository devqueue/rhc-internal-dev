import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';
import { PublicClientApplication } from '@azure/msal-browser';

const msalInstance = new PublicClientApplication(msalConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>,
)
