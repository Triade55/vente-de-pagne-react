import React from "react";

export default function Section({ title, img, text, position = "right" }) {
  let left = "",
    right = "";
  if (position === "left") {
    left = <img src={img} alt="img_card1" className="img w-100" />;
    right = text;
  } else {
    left = text;
    right = <img src={img} alt="img_card1" className="img w-100" />;
  }

  return (
    <section className="text-gray-400 body-font p-4">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="col-12 text-center fs-1 text-uppercase">{title} </div>
        <div className="row pt-4">
          <div className="col-6">{left}</div>
          <div className="col-6">{right}</div>
        </div>
      </div>
    </section>
  );
}
