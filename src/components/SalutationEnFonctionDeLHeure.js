import React, { useEffect, useState } from "react";

const SalutationEnFonctionDeLHeure = () => {
  const [heure, setHeure] = useState(new Date().getHours());
  const [salutation, setSalutation] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setHeure(new Date().getHours());
    }, 1000); // Rafraîchir l'heure toutes les secondes

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (heure >= 5 && heure < 12) {
      setSalutation("Bonjour");
    } else if (heure >= 12 && heure < 18) {
      setSalutation("Bon après-midi");
    } else {
      setSalutation("Bonsoir");
    }
  }, [heure]);

  return <>{salutation}</>;
};

export default SalutationEnFonctionDeLHeure;
