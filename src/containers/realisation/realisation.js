import React from 'react'
import image1 from "../../assets/images/site.jpg"
import im1 from "../../assets/images/immeuble1.jpg"
import im2 from "../../assets/images/immeuble2.jpg"
import im3 from "../../assets/images/immeuble3.jpg"
import ma1 from "../../assets/images/maison1.jpg"
import ma2 from "../../assets/images/maison2.jpg"
import ma3 from "../../assets/images/maison3.jpg"
import ap1 from "../../assets/images/appartement1.jpg"
import ap2 from "../../assets/images/appartement2.jpg"
import ap3 from "../../assets/images/appartement3.jpg"
import { motion } from "framer-motion";
import "./realisation.css"
import RealisationGallery from './realisationGallery'
const Realisation = () => {
  const Immeuble = [{src:im1},{src:im2},{src:im3}];
  const Maison = [{src:ma1},{src:ma2},{src:ma3}];
  const Appartement = [{src:ap1},{src:ap2},{src:ap3}];
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
    DIC ENGINEERING, spécialiste de tout vos ouvrage en 
            <span>BTP</span>
      </motion.h2>
    </div>
 
  </motion.section>
  <div class="realisation-row">
 <RealisationGallery heading={"Immeuble"} images={Immeuble}/>
 <RealisationGallery heading={"Appartement"} images={Appartement}/>
 <RealisationGallery heading={"Maison"} images={Maison}/>
</div>
</>
  )
}

export default Realisation