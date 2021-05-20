import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HourLocationPage = () => (
  <Layout>
    <Seo title="Hour and Location" />
    <div className="container-md d-flex flex-column justify-content-center text-center">
      <h1 className="display-3 text-uppercase fw-bolder text-primary">
        Hours and Location
      </h1>
      <section className="fs-6 my-5">
        <address>
          <a
            href="https://www.google.com/maps/place/The+Butcher's+Cut/@32.7121796,-117.1602808,21z/data=!4m8!1m2!3m1!2sThe+Butcher's+Cut!3m4!1s0x80d9535322443a11:0x26730f1397b244e9!8m2!3d32.712178!4d-117.1602846"
            class="text-uppercase link-light"
          >
            <p>
              644 Fifth Ave <br />
              San Diego, CA 92101
            </p>
          </a>
          <a href="tel:+16192358144" class="text-uppercase link-light">
            <p>{`(619) 235 8144`}</p>
          </a>
        </address>
      </section>
      <section>
        <p class="fs-4 text-primary fw-bold">Tuesday - Sunday:</p>
        <p>4PM - 10PM</p>
      </section>
    </div>
  </Layout>
)

export default HourLocationPage
