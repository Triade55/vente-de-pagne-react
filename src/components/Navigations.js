import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../images/svg/cart.svg";

export default function Navigations({ qte }) {
  return (
    <div className="navbar">
      <div className="d-flex justify-content-between align-items-center container">
        <div className="site-title">IvoirCloth</div>
        <nav>
          <Link to="/" className="lien">
            Home
          </Link>
          <Link to="/shop" className="lien">
            Shop
          </Link>
          <Link to="/blog" className="lien">
            Blog
          </Link>
          <Link to="/contact" className="lien">
            Contact
          </Link>
        </nav>
        <Link to="/cart" class="position-relative">
          <img src={CartIcon} />
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-first-color">
            {qte}
          </span>
        </Link>
      </div>
    </div>
  );
}
