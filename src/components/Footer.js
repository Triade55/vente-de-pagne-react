import React from "react";
import fBicon from "../images/svg/facebook.svg";
import TiktokIcon from "../images/svg/tiktok.svg";
import whatsappIcon from "../images/svg/whatsapp.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <h3>IvoryCloth</h3>
      <div className="p-1">
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
      </div>
      <div className="p-3">
        <img src={fBicon} className="mx-3" alt="facebook icon" />
        <img src={TiktokIcon} className="mx-3" alt="Tiktok icon" />
        <img src={whatsappIcon} className="mx-3" alt="whatsap" />
      </div>
      <p className="footer-copyright">
        Copyright &copy; Ivory Cloth Co. All rights reserved.
      </p>
    </div>
  );
}
