import React from 'react'
import "./proposal.css"

import image1 from "../../assets/images/proposal1.jpg"
const Proposal = () => {
  return (
    <section className="contact-section grid proposal-section">
       
    <div className="left">
    <h2>
        Prendre un<span> devis</span>
      </h2>
      <img src={image1} alt=""/>

    </div>

    <div className="right">
    <h2>
        Formulaire
      </h2>
      <form>
          <input type="text" placeholder="Address mail" />
          <input type="text" placeholder="ObjetS" />
          <textarea type="text" col="5" row="5" placeholder="Description">
          </textarea>
        <button className="btn">Envoyer</button>
      </form>
    </div>
  </section>
  )
}

export default Proposal