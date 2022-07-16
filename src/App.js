import React, { useEffect, useState } from "react";
import Arrived from "./components/pages/Arrived";
import Browse from "./components/pages/Browse";
import Clients from "./components/pages/Clients";
import Header from "./components/layouts/Header";
import Hero from "./components/pages/Hero";
import AsideMenu from "./components/layouts/AsideMenu";
import Footer from "./components/layouts/Footer";
import "./css/Output.css";
import OfflineAlert from "./components/layouts/OfflineAlert";
import Splash from "./components/layouts/Splash";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);
  const [isLoading,setIsLoading]=useState(true);

  const handleOffline = () => setOfflineStatus(!navigator.onLine);

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
      setLoading(false);
      const script = document.createElement("script");
      script.src = "./js/carousel.js";
      script.async = false
      document.body.appendChild(script);
      console.log(script);

      handleOffline();
      window.addEventListener("online", handleOffline);
      window.addEventListener("offline", handleOffline);

      const cto = setTimeout(() => setIsLoading(false), 1500);

      return () => {
        window.removeEventListener("online", handleOffline);
        window.removeEventListener("offline", handleOffline);

        clearTimeout(cto);
      }
    })()
  },[offlineStatus,isLoading]);
  return (
    <>
      {isLoading ? (
        <Splash />
      ) : (
        <>
          {offlineStatus && <OfflineAlert />}
          <Header />
          <Hero />
          <Browse />
          <Arrived items={items} loading={loading} />
          <Clients />
          <AsideMenu />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
