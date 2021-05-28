import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Form } from "react-bootstrap"

const ReservePage = () => (
  <Layout>
    <Seo title="Reservation" />
    <h1>Reservation placeholder</h1>
    <p>Including a form for reservation</p>
    <Form>
      <Form.Group controlId="numberOfSeats">
        <Form.Label>Number of People</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="date">
        <Form.Label>Date:</Form.Label>
        <Form.Control as="date"></Form.Control>
      </Form.Group>
      <Form.Group controlId="time">
        <Form.Label>Time:</Form.Label>
        <Form.Control as="time"></Form.Control>
      </Form.Group>
    </Form>
  </Layout>
)

export default ReservePage
