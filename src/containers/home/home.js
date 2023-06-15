import React, { useState } from "react";

import "./style.css";
import homeImg from "../../assets/images/truc1.jpg";
import blog from "../../assets/images/helmet.jpg";
import Contact from "../../component/contact/contact";
import { motion } from "framer-motion";
const Home = () => {
  const [showaccordion, setShowAccordion] = useState(false);
  const allbox = [
  {head:"Travaux Public",text:"1er acteur indépendant au cameroon",delay:1},
  {text:"4e acteur du bâtiment en cameroon ",head:"Batiment",delay:1.5},
  {text:"Leader mondial du matériel routier.",head:"Matériel routier",delay:1.8},
  {text:"Experts en fondations",head:"Fondation",delay:2}]
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 ,delayChildren:1}}
        whileInView={{ opacity: [0, 1] }}
        className="grid banner bg-head"
      >
        <div className="left c_flex">
          <motion.h2
          initial={{ opacity: 0, y:50 }}
          // transition={{ duration: 1.2 }}
          whileInView={{ opacity: [0, 1],y:[50,0]}}
          >
            DIC ENGINEERING, spécialiste de tout vos ouvrage en 
            <span>BTP</span>
          </motion.h2>
          <motion.h3
          initial={{ opacity: 0, y:30 }}
          transition={{ duration: 1,delay:1 }}
          whileInView={{ opacity: [0, 1],y:[30,0]}}
          >Opérationnel 24/7</motion.h3>
          <div className="btn-box ">
            {/* <motion.button 
            initial={{ opacity: 0, x:-30 }}
            transition={{ duration: 1,delay:0.5 }}
            whileInView={{ opacity: [0, 1],x:[-30,0]}}
            className="btn">Demander un devis</motion.button> */}
            {/* rredirect to contact */}
            <motion.button
             initial={{ opacity: 0, x:-30 }}
             transition={{ duration: 1,delay:0.5}}
             whileInView={{ opacity: [0, 1],x:[-30,0]}}
            className="btn">Nous contacter</motion.button>
          </div>
        </div>
        {/*
        <div className="left c_flex">
          <motion.h2
          initial={{ opacity: 0, y:50 }}
          // transition={{ duration: 1.2 }}
          whileInView={{ opacity: [0, 1],y:[50,0]}}
          >
            DIC ENGINEERING, spécialiste de l’accueil externalisé{" "}
            <span>sur mesure</span>
          </motion.h2>
          <motion.h3
          initial={{ opacity: 0, y:30 }}
          transition={{ duration: 1,delay:1 }}
          whileInView={{ opacity: [0, 1],y:[30,0]}}
          >Opérationnel 24/7</motion.h3>
          <div className="btn-box ">
            <motion.button 
            initial={{ opacity: 0, x:-30 }}
            transition={{ duration: 1,delay:0.5 }}
            whileInView={{ opacity: [0, 1],x:[-30,0]}}
            className="btn">Demander un devis</motion.button>
            <motion.button
             initial={{ opacity: 0, x:-30 }}
             transition={{ duration: 1,delay:0.5}}
             whileInView={{ opacity: [0, 1],x:[-30,0]}}
            className="btn">Nous contacter</motion.button>
          </div>
        </div>

          <div className="right">
          <img alt="" src={homeImg} />
        </div> */}
      </motion.section>
      <section className="white-section">
        <motion.h3
        initial={{ opacity: 0, y:30 }}
        transition={{ duration: 1.2,delay:1 }}
        whileInView={{ opacity: [0, 1],y:[30,0]}}
        >
          <span>+ de 300</span> clients nous font confiance
        </motion.h3>
        <div className="grid white-container">
          <div className="white-left c_flex">
            <motion.h3
            initial={{ opacity: 0, x:-200 }}
            transition={{ duration: 1.2,delay:2 }}
            whileInView={{ opacity: [0, 1],x:[-200,0]}}
            >
              Les métiers de <span>DIC ENGINEERING</span>
            </motion.h3>
            <p>
              DIC ENGINEERING réalise un bon nombre de prestation, dans les domaine 
              de l'ingénierie du batiment et des travaux public.
            </p>
            <button className="btn ">Nos Services</button>
          </div>
          <div className="white-right">
            <div className="accordion s_flex">
              <p>Gestion des interventions</p>
              <i
                onClick={() => setShowAccordion(!showaccordion)}
                className={
                  showaccordion
                    ? "fa-sharp fa-solid fa-chevron-up icon"
                    : "fa-sharp fa-solid fa-chevron-down icon"
                }
              ></i>
            </div>
            {showaccordion ? (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: [-20, 0], opacity: [0, 1] }}
                className="accordion-content"
              >
                <p>
                  Nous vous accompanion dans tous vos projet , de l'etude a 
                  la conception ainsi que la realisation en tenant compte des delais
                </p>
                <a href="">En savoir +</a>
              </motion.div>
            ) : (
              ""
            )}
          </div>
        </div>

        <h3>
          DIC ENGINEERING, <span>en chiffres</span>
        </h3>
        <p>
          DIC ENGINEERING c’est une infrastructure d'ingénierie au service de sa clientele
        </p>
      </section>
      <section className="blue-section ">
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: [500, 0], opacity: [0, 1] }}
          className="box-row s_flex"
        >
          <div className="box">
            <div className="blue icon-box">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="text">
              <span>plus de</span>
              <h2>300</h2>
              <p>Client nous font confiance</p>
            </div>
          </div>
          <div className="box">
            <div className="yellow icon-box">
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className="text">
              <span>plus de</span>
              <h2>67</h2>
              <p>projet réalisé</p>
            </div>
          </div>
          <div className="box">
            <div className="orange icon-box">
              <i className="fa-solid fa-desktop"></i>
            </div>
            <div className="text">
              <span>plus de</span>
              <h2>120</h2>
              <p>Etude effectuée</p>
            </div>
          </div>
          <div className="box">
            <div className="light icon-box">
              <i className="fa-solid fa-calendar"></i>
            </div>
            <div className="text">
              <div className="text">
                <span>plus de</span>
                <h2>95%</h2>
                <p>Des prestation réalisé dans les delais</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="left">
          <img alt="blog" src={blog} />
        </div>
        <div className="right">
          <h2>Tout savoir sur nos procedure d'execution !</h2>
          <p>
            Depuis les années 1990, les organisations choisissent de
            sous-traiter certaines fonctions périphériques de leur activité afin
            de se concentrer sur leur cœur de métier. L’externalisation de ces
            aspects secondaires peut porter sur la sécurité, la comptabilité,
            l’accueil téléphonique des appels entrants, etc. En confiant ces
            tâches à des sociétés spécialisées, les entreprises gagnent en
            productivité, en flexibilité et en notoriété.{" "}
          </p>
          <button className="btn">Voir le blog</button>
        </div>
      </section>

      <section className="white-section  row">
        <h2>
          Les arguments de <span>DIC ENGINEERING</span>
        </h2>
        <div className="grid">
          <div className="left">
            <p className="para">
              DIC ENGINEERING est une entreprise spécialisé dans les travaux de <span>BTP</span> 
              .Nous realison les etude ,la conception,la livraison final de tous vos projet,
               nous somme basés au cameroon 
            </p>
            <p className="bold">
              Les bases de nos prestations reposent sur trois fondamentaux
              solides
            </p>

            <ul>
              <li>
                <span>Qualité :</span>  
              </li>
              <li>
                <span>Sécurité :</span>  
              </li>
              <li>
                <span>Technicité :</span> 
              </li>
            </ul>

            <button className="btn">Nos services</button>
          </div>
          <div className="right">
            {/* replace with image */}
          {/* <div className="f_flex">
            <motion.div 
            initial={{ opacity: 0 }}
            transition={{ duration: 1,ease:"easeInOut",delay:0.3 }}
            whileInView={{ opacity: [0, 1],scale:[2,1]}}
            className="img-i">
              <i className="fa-solid fa-users"></i>
            </motion.div>
            <p>L'esprit de service</p>
          </div>
          <div className="f_flex">
            <motion.div 
              initial={{ opacity: 0 }}
              transition={{ duration: 1,delay:1,ease:"easeInOut" }}
              whileInView={{ opacity: [0, 1],scale:[2,1]}}
            className="img-i">
              <i className="fa-solid fa-smile"></i>
            </motion.div>
            <p>L'esprit de service</p>
          </div>
          <div className="f_flex">
            <motion.div 
            initial={{ opacity: 0 }}
              transition={{ duration: 1,delay:1.6 ,ease:"easeInOut"}}
              whileInView={{ opacity: [0, 1],scale:[2,1]}}
            
            className="img-i">
              <i className="fa-solid fa-laptop"></i>
            </motion.div>
            <p>L'esprit de service</p>
          </div> */}
          </div>
        </div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: [500, 0], opacity: [0, 1] }}
          className=""
        >
          <h2 className="center">
            Ils nous font <span>avancer</span>
          </h2>
          <p className="last">
            DIC ENGINEERING appuie son développement sur une collaboration étroite avec
            sa clientele, pour mieux comprendre le besoin et assurait un rendu satisfesant
          </p>
        </motion.div>
      </section>
      <section className="all-activity-section">
      <div className="all-activity">
      </div>
      <h2>
            Activiter
          </h2>
        <div className="all-box-activity">
          {/* change the background image */}
          {allbox.map((box,index)=>
            <motion.div
            initial={{ y: 100, opacity: 0 }}
            transition={{delay:box.delay,ease:"easeInOut",duration:1.4}}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            key={index}>
              <h3>{box.head}</h3>
              <p>{box.text}</p>
            </motion.div>)}
        </div>
       
      </section>
      {/* <Contact /> */}
    </>
  );
};

export default Home;
