import React, { useState } from "react";

import "./style.css";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [showmenu, setShowmenu] = useState(false);
  return (
    <>
      <nav id="menu-a" className="big-menu">
        <div className="logo-box">
          <img src={logo} alt="some" />
        </div>
        <NavLink to={"/"}>Accueil</NavLink>
        <div className="dropdown">
          <NavLink to={"/services"}>
            Services <i className="fa-sharp fa-solid fa-chevron-down icon"></i>
          </NavLink>
          
          <div className="dropdown-content">
          <NavLink to={"/callcenter"}>Travaux Public</NavLink>
            <NavLink to={"/marketig"}>Batiment</NavLink>
            <NavLink to={"/digital"}>Matériel routier</NavLink>
            <NavLink to={"/recruitment"}>Fondation</NavLink>
          </div>
        </div>
        <NavLink to={"/about"}>A propos</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
  
          <div className="dropdown">
          <NavLink >
            Realisation
          </NavLink>
          
          <div className="dropdown-content">
          <NavLink to={"/immeuble"}>Immeuble</NavLink>
            <NavLink to={"/maison"}>Maison</NavLink>
            <NavLink to={"/appartement"}>Appartement</NavLink>
          </div>
          </div>
        {/* <button className="btn">Get started</button> */}
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
            <NavLink to={"/"}>Accueil</NavLink>
              <div className="dropdown">
              <NavLink to={"/services"}>
            Services <i className="fa-sharp fa-solid fa-chevron-down icon"></i>
          </NavLink>
                <div className="dropdown-content">
            <NavLink to={"/callcenter"}>Travaux Public</NavLink>
            <NavLink to={"/marketig"}>Batimen</NavLink>
            <NavLink to={"/digital"}>Matériel routier</NavLink>
            <NavLink to={"/recruitment"}>Fondation</NavLink>
      
            <div className="dropdown">
          <NavLink >
            Realisation
          </NavLink>
          
          <div className="dropdown-content">
          <NavLink to={"/immeuble"}>Immeuble</NavLink>
            <NavLink to={"/maison"}>Maison</NavLink>
            <NavLink to={"/appartement"}>Appartement</NavLink>
          </div>
          </div>
          
      
      
                </div>
              </div>
        <NavLink to={"/about"}>A propos</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
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
