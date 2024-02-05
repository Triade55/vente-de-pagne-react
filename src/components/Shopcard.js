import React from "react";
import Pagne1 from "../images/pagne1.jpeg";
export default function Shopcard({
  title,
  description,
  prix,
  id,
  setQte,
  qte,
  couleur,
}) {
  const style = { width: "100%" };
  function handlerBuy(id) {
    localStorage.setItem("q", { id: id });
    const d = JSON.stringify(localStorage.getItem("q"));
    console.log(d);
    setQte(parseInt(qte, 10) + 1);
  }

  return (
    <div className="col-4 my-1">
      <div className="card" style={style}>
        <img src={Pagne1} className="image-card w-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary" onClick={() => handlerBuy(id)}>
              Acheter
            </button>

            <div className="h5">{prix}</div>
          </div>
          <div>{couleur} </div>
        </div>
      </div>
    </div>
  );
}
