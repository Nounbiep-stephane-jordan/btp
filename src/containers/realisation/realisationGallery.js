import React from 'react'

const RealisationGallery = ({heading,text,images}) => {
  return (
    <div class="realisation gallery">
        {images.map((img,index)=>(
            <div key={index}>
                <img alt="" src={img.src} />
            </div>
        ))}
</div>
  )
}

export default RealisationGallery