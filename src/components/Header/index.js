import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ children }) => (
  <div style={{ display: "grid" }}>
    {/* You can use a GatsbyImage component if the image is dynamic */}
    <StaticImage
      style={{
        gridArea: "1/1",
        // You can set a maximum height for the image, if you wish.
        maxHeight: '100vh',
      }}
      layout="fullWidth"
      // You can optionally force an aspect ratio for the generated image
      aspectRatio={5/ 4}
      // This is a presentational image, so the alt should be an empty string
      alt=""
      // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
      src={"../../images/SplashGallery/RestaurantFront.jpg"}
      transformOptions={{
        grayscale: true,
        cropFocus: "top",
      }}
      formats={["auto", "webp", "avif"]}
    />
    <div
      style={{
        // By using the same grid area for both, they are stacked on top of each other
        gridArea: "1/1",
        position: "relative",
        // This centers the other elements inside the hero component
        placeItems: "end center",
        display: "grid",
      }}
    >
      <h1 className="display-2 fw-bolder text-primary">{children}</h1>
    </div>
  </div>
)

export default Header
