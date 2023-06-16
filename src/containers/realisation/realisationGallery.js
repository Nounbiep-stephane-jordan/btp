import React from 'react'

const RealisationGallery = ({heading,text,images}) => {
  return (
    <>
    <h2>{heading}</h2>
    <div class="realisation gallery">
        {images.map((img,index)=>(
               <div>
               <img alt="" src={img.src} />
                </div>
        ))}
</div>
    </>
  )
}

export default RealisationGallery