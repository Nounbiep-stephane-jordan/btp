import React from "react";

const Contact = () => {
  return (
    <section className="contact-section grid">
      <div className="left">
        <h2>
          Comment vous<span> aider ?</span>
        </h2>
        {/*  <p>
          <i className="fa-solid fa-location-arrow"></i>{" "}
          <span className="span">Emerix</span> -7,rue Pierre et Marie
          Curie,22400 Lamballe
        </p>
        <p>
          <i className="fa-solid fa-location-arrow"></i>{" "}
          <span className="span">Emerix</span> -84 voie du Toec, 31300 Toulouse
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i> contact@emerixcompagnie.fr
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i> support@emerixcompagnie.fr
        </p>
        <h4>Planifier un rendez-vous téléphonique </h4> */}
        <button className="btn">
          <i className="fa-solid fa-calendar"></i> Prendre rendez-vous
        </button>
        <h4>Devis</h4>
        <button className="btn">
          <i className="fa-solid fa-calendar"></i> Demander un devis
        </button>
        <h4>Suiver nous sur linkedin</h4>
        <div className="circle">
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>

      <div className="right">
        <form>
          <input type="text" placeholder="Societe" />
          <div className="s_flex">
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Prenom" />
          </div>
          <div className="s_flex">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Telephone" />
          </div>
          <input type="text" placeholder="Message" />
          <p>
            <input type="checkbox" name="" id="" /> Emerix s'engage à protéger
            et à respecter votre vie privée. Nous n'utiliserons vos données
            personnelles que pour administrer votre compte et vous fournir les
            produits et services demandés. Nous aimerions vous contacter
            ponctuellement au sujet de nos produits et services, ainsi que
            d'autres contenus susceptibles de vous intéresser. Si vous consentez
            à ce que nous vous contactions à cette fin, veuillez nous indiquer
            votre accord en cochant la case *
          </p>
          <button className="btn">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
