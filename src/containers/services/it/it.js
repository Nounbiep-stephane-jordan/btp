import React from "react";
import img3 from "../../../assets/images/image1.jpg";
import img2 from "../../../assets/images/image1.jpg";
import img1 from "../../../assets/images/image1.jpg";
import img4 from "../../../assets/images/image1.jpg";
import { motion } from "framer-motion";
const It = () => {
  return (
    <section className="services">
      <h1>
        IT <span>Solutions</span>
      </h1>

      <div className="row grid">
        <motion.div whileInView={{ x: [-500, 0] }} className="left">
          <h2>Managed IT</h2>
          <p>
            A managed IT service provider is a company that takes care of your
            IT needs remotely for a fraction of the expense of hiring an
            in-house team. Operating with a managed service provider enables
            knowledgeable specialists to work proactively to maintain your IT
            needs as well as assist in the development of an ongoing plan to
            ensure your infrastructure, systems, and security remain in perfect
            working order.
          </p>
          <p>
            Emerix Outsourcing's Managed Service Provider (MSP) programs can
            assist organizations of all sizes in this area. Our MSP plan makes
            skilled IT management teams' experience, technology, and training
            available to organizations of all sizes.
          </p>

          <ul>
            {[
              `Dedicated IT services`,
              `
Complete IT services`,
              `
Essential IT Services`,
              `
Remote IT Services`,
              `
IT Consulting`,
              `
Managed IT`,
            ].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <button className="btn">Prise de contact</button>
        </motion.div>
        <div className="right">
          <img alt="" src={img4} />
        </div>
      </div>

      <div className="row grid">
        <div className="left">
          <img alt="" src={img1} />
        </div>
        <motion.div whileInView={{ x: [500, 0] }} className="right">
          <h2>Cloud Services</h2>
          <p>
            Many businesses are opting for cloud service providers. Cloud
            computing is highly available and scalable with minimal downtime.
            Emerix outsourcing Inc provides the following cloud services.
          </p>
          <ul>
            {[
              `Infrastructure as a Service Iaas`,
              ` 
Virtual Desktop Infrastructure`,
              ` 
Cloud & Hosted IT Services`,
              ` 
Virtualization Services`,
            ].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <button className="btn">Prise de contact</button>
        </motion.div>
      </div>

      <div className="row grid">
        <motion.div whileInView={{ x: [-500, 0] }} className="left">
          <h2>Cyber Security Services</h2>
          <p>
            Our Cyber Security Support Services offers desktop technical
            support, network maintenance, and application support around the
            clock support, 24 hours a day, 7 days a week – 365 days per year.
          </p>
          <ul>
            {[
              `Cybersecurity Assessment Services`,
              `
Cybersecurity 24hr/ Support`,
              ` 
Cybersecurity Monitoring`,
              ` 
Cybersecurity Overview`,
            ].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <button className="btn">Prise de contact</button>
        </motion.div>
        <div className="right">
          <img alt="" src={img3} />
        </div>
      </div>

      <div className="row grid">
        <div className="left">
          <img alt="" src={img2} />
        </div>
        <motion.div whileInView={{ x: [500, 0] }} className="right">
          <h2>Data Science And Analytics Services</h2>
          <p>
            Today’s business performance strongly depends on the business
            ability to collect and process data in order to make smart business
            decisions. Take advantage of our team of experts who can help your
            business make the most out of its data.
          </p>
          <ul>
            {[
              ` Real time data analysis and predictive expertise`,
              `
Data Management, Visualization and insights`,
              ` 
Big Data Analysis and Behavioral Analytics`,
              `
AI & ML – Powered Analytics`,
              ` 
Business Intelligence`,
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

export default It;
