import React from "react";
import { motion } from "framer-motion";
import img2 from "../../../assets/images/image1.jpg";
import img1 from "../../../assets/images/image1.jpg";

const CallCenter = () => {
  return (
    <section className="services">
      <h1>
        Call Center <span>Services</span>
      </h1>
      <p>
        <p>
          24/7 Bilingual call center services (English/French) Inbound, Outbound
          and back office services Dedicated and shared agents when needed
        </p>
      </p>

      <div className="row grid">
        <motion.div whileInView={{ x: [-500, 0] }} className="left">
          <h2>
            Outbound Call Center<span>Services</span>
          </h2>
          <ul>
            <li>Telemarketing Services</li>
            <li>Lead Generation</li>
            <li>Cross Selling and Upselling</li>
            <li>Market Research & Survey</li>
            <li>Appointment Setting</li>
          </ul>
          <button className="btn">Prise de contact</button>
        </motion.div>
        <div className="right">
          <img alt="" src={img2} />
        </div>
      </div>

      <div className="row grid">
        <div className="left">
          <img alt="" src={img1} />
        </div>
        <motion.div whileInView={{ x: [500, 0] }} className="right">
          <h2>
            Inbound Call Center<span>Services</span>
          </h2>

          <ul>
            <li>Order Taking Services</li>
            <li>Email and Chat Support</li>
            <li>Helpdesk Solutions</li>
            <li>Customer Service</li>
            <li>Tech Support Solutions</li>
            <li>Retention Services</li>
            <li>Back Office Services (Transcription Services)</li>
            <li>Inquiry Handling/ Answering Service</li>
          </ul>
          <button className="btn">Prise de contact</button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallCenter;
