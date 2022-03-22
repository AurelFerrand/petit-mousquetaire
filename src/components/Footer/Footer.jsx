import React from "react";
import "./Footer.css";

const yearActual = new Date();
const dates = yearActual.getFullYear();

const Footer = () => {
  return (
    <div>
      <div className="main_class"></div>
      <footer className="footer">
        <p>
          © <span className="footer-year">{dates}</span> - Site crée par
          Aurelien Ferrand a but non lucratif !
        </p>
      </footer>
    </div>
  );
};

export default Footer;
