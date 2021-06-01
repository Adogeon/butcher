/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"

import MainNav from "./MainNav"
import { Modal, Button, Form } from "react-bootstrap"
import "./layout.css"

const Layout = ({ children }) => {
  const [show, setShow] = useState(false)
  const handleOpen = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <>
      <MainNav handleReserveModal={handleOpen} />
      <main className="bg-dark">{children}</main>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Book your table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Find a table</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Layout
