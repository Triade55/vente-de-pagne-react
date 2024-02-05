import React, { useEffect, useState } from "react";
const useQte = () => {
  const [qte, setQte] = useState();
  useEffect(() => {
    setQte(0);
  }, []);
  return qte, setQte;
};
export default useQte;
