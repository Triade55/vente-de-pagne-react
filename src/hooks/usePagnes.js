import React, { useEffect, useState } from "react";
import PAGNES from "../data/pagnes";
const usePagnes = (liste = []) => {
  const [pagnes, setPagnes] = useState(liste);
  useEffect(() => {
    setPagnes(PAGNES);
  }, []);
  return pagnes;
};
export default usePagnes;
