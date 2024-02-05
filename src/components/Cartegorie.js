import React from "react";

export default function Cartegorie({
  categorie,
  count,
  categorieValue,
  setCategorieValue,
}) {
  return (
    <div
      className="row m-2 pointer"
      onClick={() => setCategorieValue(`${categorie}`)}
    >
      <div className="col-8">{categorie} </div>
      <div className="col-4 text-end">{`(${count})`} </div>
    </div>
  );
}
