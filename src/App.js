import React from "react";
import Arrived from "./components/pages/Arrived";
import Browse from "./components/pages/Browse";
import Clients from "./components/pages/Clients";
import Header from "./components/layouts/Header";
import Hero from "./components/pages/Hero";
import AsideMenu from "./components/layouts/AsideMenu";
import Footer from "./components/layouts/Footer";
import "./css/Output.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
