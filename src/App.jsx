import React, { useEffect } from "react";
import "./App.css";
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
import AllEvents from "./pages/AllEvents";
import AnnouncementDetail from "./pages/AnnouncementDetail";
import AllNews from "./pages/AllNews";
import EmployeeDirectory from "./pages/EmployeeDirectory";
import Polls from "./pages/Polls";
import Flipbook from "./components/dflip";
import Gallery from "./pages/Gallery";

const msalInstance = new PublicClientApplication(msalConfig);

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  // console.log(isAuthenticated);

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
  useEffect(() => {
    const reload = setInterval(() => {
      window.location.reload();
    }, 3600000);

    return () => clearInterval(reload);
  }, []);

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

        <Route path="/ar" element={<ArabicHome />} />

        <Route path="/all-events" element={<AllEvents />} />

        <Route path="/announcement/:id" element={<AnnouncementDetail />} />

        <Route path="/news" element={<AllNews />} />

        <Route path="/all-employees" element={<EmployeeDirectory />} />

        <Route path="/polls" element={<Polls />} />

        <Route path="/pdf" element={<Flipbook />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
