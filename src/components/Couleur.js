import React from "react";

export default function Couleur({ couleur, text, colorValue, setColorValue }) {
  function handlerColor(e) {
    const target = e.target;
    if (target.checked) {
      target.style.backgroundColor = couleur;
      target.style.borderColor = couleur;
      setColorValue([...colorValue, `${text}`]);
    } else {
      target.style.backgroundColor = "";
      const monTableau = colorValue.filter(
        (element) => !`${text}`.includes(element)
      );
      setColorValue(monTableau);
    }
  }
  return (
    <div class="form-check h3">
      <input
        style={{ "border-color": couleur }}
        class="form-check-input  "
        type="checkbox"
        name={couleur}
        id={couleur}
        onClick={(e) => handlerColor(e)}
      />
      <label class="form-check-label" for={couleur}>
        {text}
      </label>
    </div>
  );
}
