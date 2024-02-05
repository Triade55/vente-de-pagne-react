import React from "react";
import ImageHero from "../images/hero.jpg";
export default function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" className="breadcrumb-link">
            Home /
          </a>
        </li>
        <li class="breadcrumb-item">
          <a href="#" className="breadcrumb-link">
            Library
          </a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Data
        </li>
      </ol>
    </nav>
  );
}
