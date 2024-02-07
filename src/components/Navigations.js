import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "../images/svg/cart.svg";

export default function Navigations({ qte }) {
  return (
    <>
      <div>f</div>
      <div className="navbar">
        <div className="d-flex justify-content-between align-items-center container">
          <div className="site-title">IvoirCloth</div>
          <nav>
            <NavLink to="/" exact className="lien" activeClassName="active">
              Accueil
            </NavLink>
            <NavLink to="/shop" exact className="lien" activeClassName="active">
              Shop
            </NavLink>

            <NavLink
              to="/contact"
              exact
              className="lien"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </nav>
          <Link to="/cart" class="position-relative">
            <img src={CartIcon} />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-first-color">
              {qte}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
