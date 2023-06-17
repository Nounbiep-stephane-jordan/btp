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

  const settings2 ={
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false
  }



  return (
    <>
 
<section className="services" id="slider-services">
      <h1 className='h1-slider'>
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
               {/* <div id="slider-img-right">
               <img alt="" src={img.src} />
                </div> */}
               <Slider {...settings2}>
    {images.map((img2,index2) => (
     
       <div id="slider-img-right" key={index2} >
       <img alt="" src={img2.src} />
        </div>
      
     ))}
               </Slider>
                </div>
        </div>
       ))}
        </Slider>
       
    </section>
    
    </>
  )
}

export default RealisationGallery