import React from "react";
import "./style.css";
import service1 from "../../assets/images/image1.jpg";
import service2 from "../../assets/images/image1.jpg";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="services">
      <h1>
        company Specialty Services <span>DIC ENGINEERING</span> ?
      </h1>

      <div className="row grid">
        <motion.div whileInView={{ x: [-500, 0] }} className="left">
          <h2>
            Stress-Free Services <span>For Your Business</span>
          </h2>
          <p>
            Emerik company can help you focus on what is important for your
            business’ growth while taking care of the tasks that help you
            achieve your goals. Tell us all about the special and unique aspects
            of your company during a free consultation. I am friendly and
            knowledgeable! We are available to create the service package that
            is right for your brand.{" "}
          </p>
          <ul>
            <li>
              <span>Basic Service</span>– Our experience offer industry
              expertise for basic services carried out with a smile and superior
              customer service!
            </li>
            <li>
              <span>Complex Service</span> – For more complex projects that
              require extra planning and support, We provide valuable know-how
              and technical skills that helps your business stand out in the
              area.{" "}
            </li>
            <li>
              <span>Full Service</span> – Our finest package with all the
              frills! Business owners know they can trust our expertise to
              uphold the highest industry standards.
            </li>
          </ul>
          <button className="btn">Prise de contact</button>
        </motion.div>
        <div className="right">
          <img alt="" src={service1} />
        </div>
      </div>

      <div className="row grid">
        <div className="left">
          <img alt="" src={service2} />
        </div>
        <motion.div whileInView={{ x: [500, 0] }} className="right">
          <h2>
            Personalized Service And <span>Industry Expertise</span>
          </h2>
          <p>
            As a leading provider of specialty services in the area, DIC ENGINEERING
            Outsourcing begins the process with a thorough analysis to determine
            how your company can benefit from our list of services. We will then
            develop the most cost-effective service plan that includes the most
            appropriate options and the most practical application.
          </p>
          <p>
            We use the latest technologies and make the safety and success of
            your company our number one priority. DIC ENGINEERING Outsourcing takes great
            pride in completing each project on-time and within budget, and
            always in a professional manner. Our agents have received extensive
            training to ensure your complete satisfaction.
          </p>
          {/* 
          <h2>
            The Bottom <span>Line</span>
          </h2>
          <p>
            Some projects are just too complex to handle on your own and others
            are too detailed and take up too much time when you could be working
            on developing your business. This is where we can help. We can
            provide you with the most valuable resource—time—at rates that suit
            your budget and your company’s bottom line.
          </p> */}

          <ul>
            {[
              "Complete line of services",
              "Complete company analysis and tailored strategies",
              "Quality control protocols",
              "Regular training upgrades",
              "Efficient and prompt responses to all inquiries",
              "High safety and security standards",
              "Highly rated industry services and practices",
              "Free quotes and consultations",
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

export default Services;
