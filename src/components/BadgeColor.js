import React from "react";
import CircleColor from "./CircleColor";

export default function BadgeColor(couleurs) {
  function getSvgwithcolor(couleur) {
    return (
      "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-circle-fill' viewBox='0 0 16 16'>" +
      '<circle cx="8" cy="8" r="8" /></svg>'
    );
  }
  console.log(typeof couleurs.couleur);

  return (
    <div className="">
      {couleurs.couleur.map((couleur, index) => (
        <CircleColor key={index} couleur={couleur} />
      ))}
    </div>
  );
}
