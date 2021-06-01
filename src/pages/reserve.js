import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/Header"
import { Form } from "react-bootstrap"

const ReservePage = () => (
  <Layout>
    <Seo title="Reservation" />
    <Header>Reservation</Header>
    <div className="container-md fs-6 my-3">
      <p>Including a form for reservation</p>
    </div>
    
  </Layout>
)

export default ReservePage
