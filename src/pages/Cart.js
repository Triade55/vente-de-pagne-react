import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { obtenirPanier } from "../useful";
import PAGNES from "../data/pagnes";
export default function Cart() {
  const [panierTr, SetPanierTr] = useState(obtenirPanier());
  const [pa, setPa] = useState([]);
  function getId() {
    return panierTr.map((panie) => panie.id);
  }
  function getQte(id) {
    const produitPanier = panierTr.find((prod) => prod.id === id);
    return produitPanier ? produitPanier.qte : 0;
  }
  function SelectionnerProduitParID() {
    const LesId = getId();
    return PAGNES.filter((pagne) => LesId.includes(pagne.id));
  }
  const produitSelectionner = SelectionnerProduitParID();
  const produit = produitSelectionner.map((produit) => {
    return {
      ...produit,
      qte: getQte(produit.id),
      total: produit.prix * getQte(produit.id),
    };
  });

  useEffect(() => {
    setPa(produit);
  }, [pa]);
  return (
    <>
      <Breadcrumb />
      <div className="container-fluid">
        <table className="table">
          <thead>
            <tr>
              <th className="col-3">Nom</th>
              <th className="col-1">Prix</th>
              <th className="col-1">Quantité</th>
              <th className="col-2">Total</th>
              <th className="col-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {pa.map((panier) => (
              <tr>
                <td className="col-3">{panier.nom} </td>
                <td className="col-1">{panier.prix} FCFA </td>
                <td className="col-1"> {panier.qte} </td>
                <td className="col-2"> {panier.total} FCFA</td>
                <td className="col-1">Action</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
