import React from "react";
import Header from "./Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeApp from "./Home/HomeApp";
import DevelopmentApp from "./Development/DevelopmentApp"; 
import PartnerApp from "./Partner/PartnerApp";
import Footer from "./Footer/Footer";
import ContactUsApp from "./contactUS/ContactUSApp";
import ContractorApp from "./contractor/ContractorApp";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/development" element={<DevelopmentApp />} />
        <Route path="/contractor" element={<ContractorApp />} />
        <Route path="/partner" element={<PartnerApp />} />
        <Route path="/contactUS" element={<ContactUsApp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
