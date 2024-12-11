import React from "react";
import Header from "./Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeApp from "./Home/HomeApp";
import AppDevelopment from "./Development/AppDevelopment";
import PartnerApp from "./Partner/PartnerApp";
import Footer from "./Footer/Footer";
import ContactUsApp from "./contactUS/ContactUSApp";
import ContractorApp from "./contractor/ContractorApp";
import ScrollToTop from "./Home/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes basename="/EdgeProperty">
        <Route path="/" element={<HomeApp />} />
        <Route path="/development" element={<AppDevelopment />} />
        <Route path="/contractor" element={<ContractorApp />} />
        <Route path="/partner" element={<PartnerApp />} />
        <Route path="/contactUS" element={<ContactUsApp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
