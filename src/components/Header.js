import React from "react";
import header_img from "../images/header.jpg";

export default function Header() {
  return (
    <header className="header">
      <img src={header_img} alt="header" className="img-header" />
    </header>
  );
}
