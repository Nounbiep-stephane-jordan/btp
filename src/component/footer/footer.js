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
          <h4> DIC ENGINEERING, spécialiste de tout vos ouvrage en 
            <span>BTP</span></h4>
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
          <p>Travaux Public</p>
          <p>Batiment</p>
          <p>Matériel routier</p>
          <p>Fondation</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
