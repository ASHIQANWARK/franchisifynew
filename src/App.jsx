import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import FranchiseModelDevelopment from "./pages/Desservices";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Restaurant from "./pages/Restaurant";
import Retail from "./pages/Retail";
import PrivacyPolicy from "./pages/privacypolicy";
import TermsAndConditions from "./pages/TermsandConditions";
import Wellness from "./pages/Wellness";
import Digital from "./pages/Digital";
import Constructions from "./pages/Construction";
import Solution from "./pages/Solution";
import Jewellery from "./pages/Jewellery";

// ScrollToTop component that will handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly when route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/deservices" element={<FranchiseModelDevelopment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/construction" element={<Constructions />} />
        <Route path="/wellness" element={<Wellness />}/>
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/privacy" element={<PrivacyPolicy />}/>
        <Route path="/terms" element={<TermsAndConditions />}/>
        <Route path="/solutions" element={<Solution />}/>
        <Route path="/jewellery" element={<Jewellery />}/> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;