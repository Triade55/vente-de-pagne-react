import React from "react";

export default function CircleColor({ couleur }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill={couleur}
      class="bi bi-circle-fill mx-1"
      viewBox="0 0 16 16"
    >
      <circle cx="8" cy="8" r="8" />
    </svg>
  );
}
