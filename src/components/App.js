import React, { useEffect, useState } from "react";
import Navigations from "./Navigations";
import Header from "./Header";
import Section from "./Section";
import card1 from "../images/card1.jpeg";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NoPage from "../pages/NoPage";
import Layout from "../pages/Layout";
import Shop from "../pages/Shop";
import useQte from "../hooks/useQte";
import usePagnes from "../hooks/usePagnes";
import PAGNES from "../data/pagnes";
import Cart from "../pages/Cart";
import { ajouterAuPanier, obtenirPanier, obtenirQte } from "../useful";
export default function App() {
  const [pagnes, setPagnes] = useState(PAGNES);

  // Filtrer les produits dont la catégorie est "Électronique"

  const localQte = obtenirQte();
  const [qte, setQte] = useState(localQte);

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
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
