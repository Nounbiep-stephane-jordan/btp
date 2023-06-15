import React from "react";

import "./style.css";
import about1 from "../../assets/images/image1.jpg";
import about2 from "../../assets/images/image1.jpg";
import about3 from "../../assets/images/image1.jpg";
import Contact from "../../component/contact/contact";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="about">
        <h1>
          À propos de <span>Emerix</span>
        </h1>
        <div className="row grid">
          <div className="left">
            <h2>
              Depuis <span>quand ?</span>
            </h2>
            <p>
              Emerix est née fin 2017 du rapprochement de deux centres de
              contacts (Adexium et Contactel) qui ont suivi une évolution très
              comparable depuis leur création, au tout début des années 80.
            </p>
            <p>
              Sur la base d’une expérience de presque quarante ans d’accueil
              téléphonique, l’idée était de constituer un centre de contacts
              plus grand pour fluidifier la gestion de la volumétrie d’appels et
              plus sécurisé en permettant de répartir le traitement des contacts
              sur deux sites distants.
            </p>
            <div className="f_flex">
              <button className="btn">Demander un devis</button>
              <button className="btn">Nous contacter</button>
            </div>
          </div>
          <div className="right">
            <img alt="" src={about1} />
          </div>
        </div>
      </section>
      <section className="blue-section blue-about">
        <h1>Quoi ?</h1>
        <motion.div
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          className="grid"
        >
          <p>
            En capitalisant sur leur expérience d’origine (prise de rendez-vous
            pour les médecins, gestion des interventions d’astreintes pour les
            sociétés de service) les deux sites ont progressivement étendu leurs
            plages horaire pour évoluer vers le 24/7. Ils ont également élargi
            leur capacité de traitement à d’autre média que le téléphone : fax,
            mail, sms, alarmes, automatismes, ..)
          </p>
          <p>
            Nous sommes aujourd’hui spécialistes de l’accueil externalisé,
            opérationnels 24h/24, 7j/7 : gestion des interventions, accueil
            téléphonique, help desk, pharmacovigilance, gestion d’agendas.
          </p>
        </motion.div>
      </section>

      <section className="white">
        <div className="grid">
          <div className="left">
            <img alt="" src={about2} />
          </div>
          <div className="right">
            <h2>
              Avec <span>qui ?</span>
            </h2>
            <p>
              Bien qu’occitans pour les uns et bretons pour les autres, notre
              ADN est commun et s’illustre de la façon la plus juste par les
              trois mots : esprit de service.
            </p>
            <p>
              Mais si notre implantation locale est réelle et profonde, c’est
              bien à partir de tous les horizons que nos équipes se sont
              étoffées pour représenter aujourd’hui un groupe d’une centaine de
              personnes, provenant de 9 nationalités différentes.
            </p>
          </div>
        </div>
      </section>

      <section className="blue-section blue-about orange">
        <h1>Quoi ?</h1>
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          className="grid"
        >
          <p>
            En capitalisant sur leur expérience d’origine (prise de rendez-vous
            pour les médecins, gestion des interventions d’astreintes pour les
            sociétés de service) les deux sites ont progressivement étendu leurs
            plages horaire pour évoluer vers le 24/7. Ils ont également élargi
            leur capacité de traitement à d’autre média que le téléphone : fax,
            mail, sms, alarmes, automatismes, ..)
          </p>
          <p>
            Nous sommes aujourd’hui spécialistes de l’accueil externalisé,
            opérationnels 24h/24, 7j/7 : gestion des interventions, accueil
            téléphonique, help desk, pharmacovigilance, gestion d’agendas.
          </p>
        </motion.div>
      </section>

      <section className="about w-white">
        <h1>
          <span>Comment ?</span>
        </h1>
        <div className="row grid">
          <div className="left">
            <p>
              Notre prestation se caractérise par sa double dimension humaine
              (chaleur de l’accueil) et technique (infrastructure robuste et
              innovante). L’esprit de service est au cœur de ce qui motive
              chacun d’entre nous, chaque jour.
            </p>
            <p>
              En pratique, cela se traduit par un accueil chaleureux,
              empathique, souriant. Et cela s’entend. Mais cet accueil naturel,
              fluide, qui caractérise nos opérateurs(trices), est assisté par
              une infrastructure I.T. robuste, efficace et innovante. Nos
              systèmes à Haute Disponibilité (99,9%), formatés à vos « mesures »
              intègrent pour certains process des briques de RPA (Robotic
              Process Automation) et d’Intelligence Artificielle.
            </p>
            <div className="f_flex">
              <button className="btn">Demander un devis</button>
              <button className="btn">Nous contacter</button>
            </div>
          </div>
          <div className="right">
            <img alt="" src={about3} />
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default About;
