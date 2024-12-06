  import React from "react";
import Beranda from "./Beranda";
import About from "./About";
import Container from "./Container";
import Contact from "./Contact";

function HomeApp() {
  return (
    <main>
        <Beranda />
        <About /> 
        <Container />
        <Contact />
    </main>
  );
}

export default HomeApp;
