// util.js
export const getAllColors = (produits) => {
  const toutesLesCouleurs = Array.from(
    new Set(produits.flatMap((produit) => produit.couleurs))
  );
  return toutesLesCouleurs;
};
// Fonction pour ajouter un produit au panier
export const ajouterAuPanier = (id) => {
  // Récupérer le panier existant depuis le stockage local
  const panierExistants = JSON.parse(localStorage.getItem("panier")) || [];

  // Vérifier si le produit avec le même id existe déjà dans le panier
  const produitExistant = panierExistants.find((p) => p.id === id);

  if (produitExistant) {
    // Si le produit existe déjà, incrémenter la quantité
    produitExistant.qte += 1;
  } else {
    // Sinon, ajouter le produit avec une quantité initiale de 1
    panierExistants.push({ id, qte: 1 });
  }

  // Sauvegarder le panier mis à jour dans le stockage local
  localStorage.setItem("panier", JSON.stringify(panierExistants));
};

const estIdDansPanier = (panier, idRecherche) => {
  // Utiliser la méthode some pour vérifier si l'id est présent dans le panier
  return panier.some((produit) => produit.id === idRecherche);
};
// Fonction pour récupérer le panier depuis le stockage local
export const obtenirPanier = () => {
  return JSON.parse(localStorage.getItem("panier")) || [];
};

export const obtenirQte = () => {
  // Utiliser la méthode reduce pour calculer la somme des qte
  const produits = obtenirPanier();
  const sommeQte = produits.reduce((acc, produit) => acc + produit.qte, 0);

  return sommeQte;
};

// Fonction pour vider le panier
const viderPanier = () => {
  localStorage.removeItem("panier");
};
