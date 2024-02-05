import React from "react";
import ReactDOM from "react-dom/client";
// src/index.js or src/index.jsx
import "bootstrap/dist/css/bootstrap.min.css";
// src/index.js or src/index.jsx
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/css.css";
import App from "./components/App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
