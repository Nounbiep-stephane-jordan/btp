import React from "react";
import "./style.css";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="">
      <div className="footer-row">
        <div className="box">
          <div className="img-box">
            <img alt="" src={logo} />
          </div>
          <h4>Spécialiste de l’accueil externalisé sur mesure</h4>
          <p className="">
            <i className="fa-solid fa-envelope"></i> contact@ENGINEERING.fr
          </p>
        </div>
        <div className="box links">
          <p>
            <a href="#">Accueil</a>
          </p>
          <p>
            <a>A propos</a>
          </p>
          <p>
            <a>Service</a>
          </p>
        </div>
        <div className="links box">
          <h4>Services</h4>
          <p>Call Center Service</p>
          <p>Marketing Service</p>
          <p>Digitalization</p>
          <p>It Solution</p>
          <p>Recruitment and Placement</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
