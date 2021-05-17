import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Nav, Navbar } from "react-bootstrap"
import "./MainNav.scss"

const MainNav = () => (
  <Navbar bg="info" variant="dark" expand="md" className={"sidebar"}>
    <Navbar.Brand as={Link}>Butcher</Navbar.Brand>
    <Navbar.Toggle aria-controls="dropdown-navbar" />
    <Navbar.Collapse id="dropdown-navbar">
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link as={Link} to="/hour-and-location">
            Hours and Location
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/menu">
            Menus
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/about">
            Meat Us
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/private-dining">
            Private Dining
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.doordash.com/store/the-butcher-s-cut-san-diego-701330">
            Order Online
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/Reserve">
            Reseve
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default MainNav
