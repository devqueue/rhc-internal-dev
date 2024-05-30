import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  MsalAuthenticationTemplate,
  MsalProvider,
  useIsAuthenticated,
  useMsal,
} from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import Home from "./pages/home";
import ArabicHome from "./pages/ArabicHome";
import { msalConfig, loginRequest } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return (
      <MsalAuthenticationTemplate
        interactionType="redirect"
        authenticationRequest={loginRequest}
      >
        {children}
      </MsalAuthenticationTemplate>
    );
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />

            </PrivateRoute>
            
          }
        />

        <Route
          path="/ar"
          element={
          
              <ArabicHome />
            
          }
        />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
