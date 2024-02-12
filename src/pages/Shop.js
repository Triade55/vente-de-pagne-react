import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import SearchIcon from "../images/svg/search.svg";
import Cartegorie from "../components/Cartegorie";
import { useState } from "react";
import Couleur from "../components/Couleur";
import Shopcard from "../components/Shopcard";
import PAGNES from "../data/pagnes";
import usePagnes from "../hooks/usePagnes";
import ListeCategories from "../components/ListeCategories";
import ListeCouleurs from "../components/ListeCouleurs";
export default function Shop({ qte, setQte, pagnes, setPagnes }) {
  const [rangeValue, setRangeValue] = useState(1000);
  const [couleurValue, setCouleurValue] = useState([]);
  const [categorieValue, setCategorieValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  let filter = [];
  const trierParNom = () => {
    const produitsTries = [...pagnes].sort((a, b) =>
      a.nom.localeCompare(b.nom)
    );
    setPagnes(produitsTries);
  };
  const trierParPrix = () => {
    const produitsTries = [...pagnes].sort((a, b) => a.prix - b.prix);
    setPagnes(produitsTries);
  };
  useEffect(() => {
    const pagnesFiltresName = PAGNES.filter((p) => p.nom.includes(searchValue));
    const pagnesFiltres = pagnesFiltresName.filter((p) =>
      p.categorie.includes(categorieValue)
    );
    const pagnesFiltresParPrix = pagnesFiltres.filter(
      (p) => p.prix >= 0 && p.prix <= rangeValue
    );
    if (couleurValue.length === 0) {
      filter = pagnesFiltresParPrix;
    } else {
      const pagnesFiltresParCouleurs = pagnesFiltresParPrix.filter((p) =>
        p.couleurs.some((couleur) => couleurValue.includes(couleur))
      );
      filter = pagnesFiltresParCouleurs;
    }

    console.log(couleurValue);
    setPagnes(filter);
  }, [categorieValue, rangeValue, couleurValue, searchValue]);
  const reduireTexte = (texte, longueurMax = 100) => {
    if (texte.length <= longueurMax) {
      return texte;
    } else {
      return texte.slice(0, longueurMax) + "...";
    }
  };
  function trierPar(params) {
    let value = params.target.value;
    console.log(value);
    if (value === "Nom") {
      trierParNom();
    }
    if (value === "PC") {
      trierParPrix();
    }
  }
  return (
    <>
      <Breadcrumb />
      <div className="container-fluid pb-4">
        <div className="row">
          <div className="col-3 ">
            <div class="input-group mb-3 col-12">
              {categorieValue ? (
                <button class="input-group-text">{categorieValue}</button>
              ) : null}

              <input
                type="text"
                class="form-control"
                placeholder="Que cherchez vous ?"
                aria-label="Que cherchez vous ?"
                aria-describedby="basic-addon2"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <span class="input-group-text bg-first-color" id="basic-addon2">
                <img src={SearchIcon}></img>
              </span>
            </div>

            <div>
              <div className="h1 my-2">Categorie</div>

              <ListeCategories
                categorieValue={categorieValue}
                setCategorieValue={setCategorieValue}
              />
            </div>
            <div>
              <div className="h1 my-2">Prix</div>
              <div className="row d-flex align-items-center">
                <div className="col-10">
                  <input
                    className="form-range col-10"
                    type="range"
                    min={0}
                    max={1000}
                    value={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                  />
                </div>
                <div className="col-2 h4">{rangeValue}</div>
              </div>
            </div>
            <div>
              <div className="h1 my-2">Couleur</div>
              <ListeCouleurs
                colorValue={couleurValue}
                setColorValue={setCouleurValue}
              />
            </div>
          </div>
          <div className="col-9 row">
            <div className=" offset-8 col-4 pb-2 ">
              <select onChange={(e) => trierPar(e)} className="form-control">
                <option>-------------</option>
                <option value="Nom">Trier Par Nom</option>
                <option value="PC">Trier Par Prix Croissant</option>
              </select>
            </div>
            {pagnes.map((pagne) => (
              <Shopcard
                key={pagne.id}
                title={reduireTexte(pagne.nom, 20)}
                description={reduireTexte(pagne.description)}
                prix={`${pagne.prix} FCFA`}
                id={pagne.id}
                setQte={setQte}
                qte={qte}
                couleur={pagne.couleurs}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
