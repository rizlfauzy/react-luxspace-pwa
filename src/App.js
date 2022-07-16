import React, { useEffect, useState } from "react";
import Arrived from "./components/pages/Arrived";
import Browse from "./components/pages/Browse";
import Clients from "./components/pages/Clients";
import Header from "./components/layouts/Header";
import Hero from "./components/pages/Hero";
import AsideMenu from "./components/layouts/AsideMenu";
import Footer from "./components/layouts/Footer";
import "./css/Output.css";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const request = await fetch("https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_API_KEY,
        },
      });
      const { nodes } = await request.json();
      setItems(nodes);
      setLoading(false)
      console.log(nodes)
    })()
  },[])
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} loading={loading} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
