import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SplashGallery from "../components/SplashGallery"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <SplashGallery images={data?.allFile?.nodes ?? []} />
      <div className="w-100 py-5 my-3 bg-primary">
        <p className="fs-3 fw-bold fst-italic text-center my-3 text-light  ">
          A rustic and vintage contemporary grill and steakhouse in Gaslamp
        </p>
      </div>
      <div className="container-md my-5">
        <div className="row justify-content-between">
          <div className="col-6">
            <div className="row">
              <h2 className="text-light">Menus</h2>
            </div>
            <div className="row">
              <p className="fs-6 text-light ">
                Our menu demonstrates an authentic variety of meats in all
                forms, originated from the very best beef and lamb producers.
                Don’t settle for less ! You will find Tomahawk Steaks, Prime
                Porterhouse Steaks, and T-bone Steaks, all cut by hand in-house
                then dry-aged for a minimum of 21 days. The process brings out
                extraordinary flavors that will exceed your expectations and
                leave you wanting more!
              </p>
            </div>
            <div className="row">
              <div>
                <Link to="/menus" className="btn btn-primary btn-lg ">
                  Menus
                </Link>
              </div>
            </div>
          </div>
          <div className="col-5">
            <StaticImage src="../images/dryagedsteak.jpg" />
          </div>
        </div>
      </div>
      <div className="container-md pb-5">
        <div className="row justify-content-between">
          <div className="col-5">
            <StaticImage src="../images/outsidesitting.jpg" height={400} />
          </div>
          <div className="col-6">
            <div className="row justify-content-end">
              <h2 className="text-light">Reservation</h2>
            </div>
            <div className="row">
              <p className="fs-6 text-light ">
                The Butcher’s Cut Steakhouse, located in the heart of the
                Gaslamp Quarter, is proud to offer its facility to the public
                for any daytime function. Butcher’s Cut offers private dining
                experiences for corporate lunches, business meetings or anything
                you desire in a gorgeous, rustic setting.
              </p>
            </div>
            <div className="row">
              <div className="d-flex justify-content-end">
                <Link to="/menus" className="btn btn-primary btn-lg ">
                  Make a Reservation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "Gallery" } }) {
      nodes {
        id
        childImageSharp {
          gatsbyImageData(quality: 90, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default IndexPage
