import React from "react";
import img1 from "../../../assets/images/image1.jpg";
import img2 from "../../../assets/images/image1.jpg";
import { motion } from "framer-motion";
const Marketing = () => {
  return (
    <section className="services">
      <h1>
        Marketing <span>Services</span>
      </h1>

      <div className="row grid">
        <motion.div whileInView={{ x: [-500, 0] }} className="left">
          <h2>
            We Take Care Of All Your <span>Business Online Presence</span>
          </h2>
          <p>
            Digital marketing is with no doubt one of the most evolving forms of
            marketing. Marketing as whole is detrimental to a business’s
            survival. This is because client acquisition is the base for company
            benefits. Because of the advancement in technology, digital
            marketing has become one of the most efficient ways to massively
            reach out to a variety of age groups. The demand for this service
            has been increasing because of the digital evolution.
          </p>

          <ul>
            {[
              ` Our job will be marketing on these platforms on behalf of our
              customers in order to increase convergence.
            `,
              ` 
              We offer digital marketing services such as video, digital adds on
            variety of platforms such as Facebook, Instagram, Snapchat, email
            marketing etc. We will focus on Instagram, Facebook, Twitter,
            LinkedIn, Snap chat.
        `,
            ].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <button className="btn">Prise de contact</button>
        </motion.div>
        <div className="right">
          <img alt="" src={img1} />
        </div>
      </div>

      <div className="row grid">
        <div className="left">
          <img alt="" src={img2} />
        </div>
        <motion.div whileInView={{ x: [500, 0] }} className="right">
          <h2>
            Website Creation And <span>Maintainance</span>
          </h2>
          <h2>
            Leave To Professionals Your Website Handling{" "}
            <span>And Social Media Presence</span>
          </h2>
          <ul>
            {[
              `SEM (Search Engine Marketing)
              SEO (Search Engine Optimization)`,
              ` 
              SMM (Social Media Marketing)`,
              ` 
              Facebook, Snapchat, Instagram, Twitter Marketing
              Viral Marketing
              Influencer Affiliate Marketing`,
              ` 
              Television advertising`,
              "Email Marketing",
              "Mobile Advertising",
              "Radio advertising",
            ].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <button className="btn">Prise de contact</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Marketing;
