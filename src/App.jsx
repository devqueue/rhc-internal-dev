import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  MsalAuthenticationTemplate,
  useIsAuthenticated,
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
import GalleryView from "./pages/GalleryView";
import AllEventsAr from "./pages/AllEventsAr";
import AnnouncementDetailAr from "./pages/AnnouncementDetailAr";
import AllNewsAr from "./pages/AllNewsAr";
import EmployeeDirectoryAr from "./pages/EmployeeDirectoryAr";
import GalleryAr from "./pages/GalleryAr";
import PollsAr from "./pages/PollAr";
import GalleryviewAr from "./pages/GalleryViewAr";
import FAQ from "./pages/FaqEng";
import FAQar from "./pages/FaqAr";

const msalInstance = new PublicClientApplication(msalConfig);

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  const [popupOpened, setPopupOpened] = useState(false);

  const openPopup = () => {
    const popup = window
      .open(
        "https://riyadhholding.sharepoint.com/sites/Shamil/Assets/DONOTDELETE2.png",
        "_blank",
        "width=0,height=0"
      )
      .focus();

    if (popup) {
      popup.onload = () => {
        popup.close();
      };
    }
    setPopupOpened(true);
  };

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

  return (
    <>
      {children}
    </>
  );
};

const App = () => {
  useEffect(() => {
    const reload = setInterval(() => {
      window.location.reload();
    }, 3600000);

    return () => {
      clearInterval(reload);
    };
  }, []);

  return (
    <Router>
      <PrivateRoute>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ar" element={<ArabicHome />} />
          <Route path="/all-events" element={<AllEvents />} />
          <Route path="/ar/all-events" element={<AllEventsAr />} />
          <Route path="/announcement/:id" element={<AnnouncementDetail />} />
          <Route
            path="/ar/announcement/:id"
            element={<AnnouncementDetailAr />}
          />
          <Route path="/news" element={<AllNews />} />
          <Route path="/ar/news" element={<AllNewsAr />} />
          <Route path="/all-employees" element={<EmployeeDirectory />} />
          <Route path="/ar/all-employees" element={<EmployeeDirectoryAr />} />
          <Route path="/all-polls" element={<Polls />} />
          <Route path="/ar/all-polls" element={<PollsAr />} />
          <Route path="/pdf" element={<Flipbook />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ar/gallery" element={<GalleryAr />} />
          <Route path="/galleryview/:id" element={<GalleryView />} />
          <Route path="/ar/galleryview/:id" element={<GalleryviewAr />} />
          <Route path="/faq-eng/:siteID" element={<FAQ />} />
          <Route path="/faq-ar/:siteID" element={<FAQar />} />
        </Routes>
      </PrivateRoute>
    </Router>
  );
};

export default App;
