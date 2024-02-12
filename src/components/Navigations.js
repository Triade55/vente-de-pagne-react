import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "../images/svg/cart.svg";

export default function Navigations({ qte }) {
  return (
    <>
      <div className="">
        <div
          class="container topbar d-none d-lg-block p-4"
          style={{ background: "#f8d8c1" }}
        >
          <div class="d-flex justify-content-between">
            <div class="top-info ps-2">
              <small class="me-3">
                <i class="fas fa-map-marker-alt me-2 text-secondary"></i>
                <a href="#" class="text-white">
                  123 Street, New York
                </a>
              </small>
              <small class="me-3">
                <i class="fas fa-envelope me-2 text-secondary"></i>
                <a href="#" class="text-white">
                  Email@Example.com
                </a>
              </small>
            </div>
            <div class="top-link pe-2">
              <a href="#" class="text-white">
                <small class="text-white mx-2">Privacy Policy</small>/
              </a>
              <a href="#" class="text-white">
                <small class="text-white mx-2">Terms of Use</small>/
              </a>
              <a href="#" class="text-white">
                <small class="text-white ms-2">Sales and Refunds</small>
              </a>
            </div>
          </div>
        </div>
      </div>
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
