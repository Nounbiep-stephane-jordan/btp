import React, { useState } from "react";

import "./style.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
  const [showmenu, setShowmenu] = useState(false);
  return (
    <>
      <nav className="big-menu">
        <div className="logo-box">
          <img src={logo} alt="some" />
        </div>
        <Link to={"/"}>Home</Link>
        <div className="dropdown">
          <Link to={"/services"}>
            Services <i className="fa-sharp fa-solid fa-chevron-down icon"></i>
          </Link>
          
          <div className="dropdown-content">
          <Link to={"/callcenter"}>Travaux Public</Link>
            <Link to={"/marketig"}>Batimen</Link>
            <Link to={"/digital"}>Matériel routier</Link>
            <Link to={"/recruitment"}>Fondation</Link>
          </div>
        </div>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <div className="dropdown">
        <Link to={"/realisation"}>
            Realisation
          </Link>
          
          <div className="dropdown-content">
          <div className="dropdown-content">
          <Link to={"/immeuble"}>Immeuble</Link>
            <Link to={"/appartement"}>Appartement Meuble</Link>
            <Link to={"/maison"}>Maison</Link>
          </div>
          </div>
        </div>
        <button className="btn">Get started</button>
      </nav>

      <nav className="small-menu">
        <div className="s_flex">
          <div className="logo-box">
            <img src={logo} alt="" />
          </div>
          <i
            className="fa-solid fa-bars"
            onClick={() => setShowmenu(!showmenu)}
          ></i>
        </div>
        {showmenu ? (
          <>
            <div className="small-menu-content">
              <a href="">Home</a>
              <div className="dropdown">
                <a href="">
                  Services{" "}
                  <i className="fa-sharp fa-solid fa-chevron-down icon"></i>
                </a>
                <div className="dropdown-content">
                  {/* <a href="#">Call Center Service</a>
                  <a href="#">Marketing Service</a>
                  <a href="#">Digitalization</a>
                  <a href="#">It Solution</a>
                  <a href="#">Recruitment and Placement</a> */}
             
         
            <Link to={"/callcenter"}>Travaux Public</Link>
            <Link to={"/marketig"}>Batimen</Link>
            <Link to={"/digital"}>Matériel routier</Link>
            <Link to={"/recruitment"}>Fondation</Link>
            <div className="dropdown">
        <Link to={"/realisation"}>
            Realisation
          </Link>
          
          <div className="dropdown-content">
          <Link to={"/immeuble"}>Immeuble</Link>
            <Link to={"/appartement"}>Appartement Meuble</Link>
            <Link to={"/maison"}>Maison</Link>
          </div>
        </div>
                </div>
              </div>
              <a href="">About</a>
              <a href="">Contact</a>
            </div>
          </>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};

export default Nav;
