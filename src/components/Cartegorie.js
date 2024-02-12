import React from "react";

export default function Cartegorie({
  categorie,
  count,
  categorieValue,
  setCategorieValue,
}) {
  function handlerCategorie() {
    if (!categorieValue) {
      setCategorieValue(categorie);
    } else {
      if (categorie === categorieValue) {
        setCategorieValue("");
      } else {
        setCategorieValue(categorie);
      }
    }
  }
  return (
    <div className="row m-2 pointer" onClick={() => handlerCategorie()}>
      <div className="col-8">{categorie} </div>
      <div className="col-4 text-end">{`(${count})`} </div>
    </div>
  );
}
