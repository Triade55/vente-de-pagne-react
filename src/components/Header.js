import React from "react";
import header_img from "../images/header.jpg";
import SalutationEnFonctionDeLHeure from "./SalutationEnFonctionDeLHeure";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="header">
        <img src={header_img} alt="header" className="img-header" />
        <div className="text-header">
          <div className="title-header h1">Bienvenue dans notre boutique</div>
          <div className="msg-header h6">
            <SalutationEnFonctionDeLHeure /> et bienvenue sur Ivoircloth -
            l'endroit idéal pour découvrir des pagnes uniques et élégants qui
            célèbrent la richesse de notre culture. Parcourez notre boutique en
            ligne pour explorer notre collection exclusive, ou rendez-vous dans
            notre magasin physique pour vivre une expérience immersive. Que vous
            préfériez faire votre shopping depuis chez vous ou découvrir nos
            pagnes en personne, IvoirCloth vous invite à embrasser la beauté de
            l'artisanat traditionnel.
            <div className="mt-4">
              <Link to="#next" className="btn btn-warning mx-2 p-3">
                En savoir plus{" "}
              </Link>
              <Link to="/shop" className="btn btn-success mx-2 p-3">
                Ma boutique{" "}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
