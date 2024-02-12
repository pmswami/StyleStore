import React from "react";
import "./Footer.css";
import footerLogo from "../Assets/logo_big.png";
import instagramIcon from "../Assets/instagram_icon.png";
import pinterestIcon from "../Assets/pintester_icon.png";
import whatsappIcon from "../Assets/whatsapp_icon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="The Footer Logo" />
        <p>StyleStore</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagramIcon} alt="The Instagram Icon" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterestIcon} alt="The Pinterest Icon" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsappIcon} alt="The WhatsApp Icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};
