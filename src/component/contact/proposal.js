import React from 'react'
import "./proposal.css"
const Proposal = () => {
  return (
    <section className="contact-section grid">
    <div className="left">
      <h2>
        Prendre un<span> devis</span>
      </h2>

    </div>

    <div className="right">
      <form>
          <input type="text" placeholder="Address mail" />
          <input type="text" placeholder="ObjetS" />
          <input type="text" placeholder="Description" />
        <button className="btn">Envoyer</button>
      </form>
    </div>
  </section>
  )
}

export default Proposal