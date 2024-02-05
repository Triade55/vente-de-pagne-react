import React from "react";
import Navigations from "./Navigations";
import Header from "./Header";
import Section from "./Section";
import card1 from "../images/card1.jpeg";
import Footer from "./Footer";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navigations />
      <Header />
      <Section
        title="title section"
        img={card1}
        position="left"
        text="zzzzzzzz"
      />
      <Section
        title="title section"
        img={card1}
        position="right"
        text="zzzzzzzz"
      />
      <Footer />
    </>
  );
}
