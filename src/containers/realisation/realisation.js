import React from 'react'
import image1 from "../../assets/images/truc1.jpg"
import image2 from "../../assets/images/truc2.jpg"
import image3 from "../../assets/images/building.jpg"
import image4 from "../../assets/images/helmet.jpg"
import { motion } from "framer-motion";
import "./realisation.css"
const Realisation = () => {
  return (
<>

<motion.section
    initial={{ opacity: 0 }}
    transition={{ duration: 1.2 ,delayChildren:1}}
    whileInView={{ opacity: [0, 1] }}
    className="grid banner bg-head-2"
  >
    <div className="left c_flex">
      <motion.h2
      initial={{ opacity: 0, y:50 }}
      // transition={{ duration: 1.2 }}
      whileInView={{ opacity: [0, 1],y:[50,0]}}
      >
        Emerix, spécialiste de l’accueil externalisé{" "}
        <span>sur mesure</span>
      </motion.h2>
    </div>
 
  </motion.section>
    <div class="realisation-row">
  <div className='realisation-card'>
  <img alt="" src={image1} />
  </div>

  <div className='realisation-card'>
  <img alt="" src={image2} />
  </div>

  <div className='realisation-card'>
  <img alt="" src={image2} />
  </div>

  <div className='realisation-card'>
  <img alt="" src={image3} />
  </div>

  <div className='realisation-card'>
  <img alt="" src={image4} />
  </div>
   

</div>
</>
  )
}

export default Realisation