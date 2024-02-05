// util.js
export const getAllColors = (produits) => {
  const toutesLesCouleurs = Array.from(
    new Set(produits.flatMap((produit) => produit.couleurs))
  );
  return toutesLesCouleurs;
};
