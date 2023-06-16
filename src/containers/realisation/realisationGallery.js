import React from 'react'
import Slider from "react-slick";
import {motion} from "framer-motion"

const RealisationGallery = ({heading,text,images}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    {/* <h2>{heading}</h2>
    <div class="realisation gallery">
        {images.map((img,index)=>(
               <div>
               <img alt="" src={img.src} />
                </div>
        ))}
</div> */}
<section className="services">
      <h1>
        Realisation <span>{heading}</span>
      </h1>
      
        <Slider {...settings}>
           {images.map((img,indexs)=>(
      <div className="row grid" id="slider-id" key={indexs}>
        
        <motion.div animate={{ x: [-500, 0] }} className="left">
          <h2>{img.subheading}</h2>
          <ul>
            <li>
            {img.text}
            </li>
          </ul>
          <button className="btn">Prise de contact</button>
        </motion.div>
        <div className="right">
               <div id="slider-img-right">
               <img alt="" src={img.src} />
                </div>
                </div>
                </div>
       ))}
        </Slider>
       
    </section>
    
    </>
  )
}

export default RealisationGallery