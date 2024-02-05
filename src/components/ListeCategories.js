import React from "react";
import PAGNES from "../data/pagnes";
import Cartegorie from "./Cartegorie";

const ListeCategories = ({ categorieValue, setCategorieValue }) => {
  var produits = PAGNES;
  // Count occurrences of each category
  const categoriesCount = produits.reduce((acc, produit) => {
    const categorie = produit.categorie;

    // Count occurrences of each category
    acc[categorie] = (acc[categorie] || 0) + 1;
    return acc;
  }, {});

  // Extract unique categories
  const toutesLesCategories = Object.keys(categoriesCount);

  return (
    <>
      {toutesLesCategories.map((categorie, index) => (
        <Cartegorie
          key={index}
          categorie={categorie}
          count={categoriesCount[categorie]}
          categorieValue={categorieValue}
          setCategorieValue={setCategorieValue}
        />
      ))}
    </>
  );
};

export default ListeCategories;
