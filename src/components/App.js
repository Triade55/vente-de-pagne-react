import React, { useEffect, useState } from "react";
import Navigations from "./Navigations";
import Header from "./Header";
import Section from "./Section";
import card1 from "../images/card1.jpeg";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import NoPage from "../pages/NoPage";
import Layout from "../pages/Layout";
import Shop from "../pages/Shop";
import useQte from "../hooks/useQte";
import usePagnes from "../hooks/usePagnes";
import PAGNES from "../data/pagnes";
export default function App() {
  const [pagnes, setPagnes] = useState(PAGNES);

  // Filtrer les produits dont la catégorie est "Électronique"

  let localQte = localStorage.getItem("Qte");
  if (localQte == null) {
    localQte = 0;
  }
  const [qte, setQte] = useState(localQte);
  useEffect(() => {
    localStorage.setItem("Qte", qte);
  }, [qte]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout qte={qte} />}>
          <Route index element={<Home />} />
          <Route
            path="shop"
            element={
              <Shop
                qte={qte}
                setQte={setQte}
                pagnes={pagnes}
                setPagnes={setPagnes}
              />
            }
          />
          <Route path="blog" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
