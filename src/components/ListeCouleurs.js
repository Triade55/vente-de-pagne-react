// Votre composant principal
import React from "react";
import PAGNES from "../data/pagnes";
import { getAllColors } from "../useful";
import Couleur from "./Couleur";

const ListeCouleurs = ({ colorValue, setColorValue }) => {
  const toutesLesCouleurs = getAllColors(PAGNES);

  return (
    <div>
      {toutesLesCouleurs.map((couleur, index) => (
        <Couleur
          key={index}
          couleur={couleur}
          colorValue={colorValue}
          setColorValue={setColorValue}
          text={couleur}
        />
      ))}
    </div>
  );
};

export default ListeCouleurs;
