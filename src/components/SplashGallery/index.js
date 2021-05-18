import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./SplashGallery.scss"

const Gallery = ({ images }) => {
  return (
    <div className="splash-gallery">
      {images.map(image => {
        return <GatsbyImage image={getImage(image)} alt="" key={image.id} />
      })}
    </div>
  )
}

export default Gallery
