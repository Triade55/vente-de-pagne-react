import { Outlet } from "react-router-dom";
import React from "react";
import Navigations from "../components//Navigations";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Layout = ({ qte }) => {
  return (
    <>
      <>
        <Navigations qte={qte} />

        <Outlet />
        <Footer />
      </>
    </>
  );
};

export default Layout;
