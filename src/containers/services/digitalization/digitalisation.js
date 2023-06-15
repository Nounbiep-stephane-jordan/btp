import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../assets/images/image1.jpg";

const Digitalisation = () => {
  return (
    <section className="services">
      <h1>
        Digitalization <span>Services</span>
      </h1>

      <div className="row grid">
        <motion.div whileInView={{ x: [-500, 0] }} className="left">
          <h2>Digitalization</h2>
          <ul>
            <li>
              Many companies operating in developing countries such as Cameroon
              still use paper archiving of important information. We will
              provide services in order for these companies to store all that
              important data digitally so they can save on money, time and
              space.
            </li>
          </ul>
          <button className="btn">Prise de contact</button>
        </motion.div>
        <div className="right">
          <img alt="" src={img1} />
        </div>
      </div>
    </section>
  );
};

export default Digitalisation;
