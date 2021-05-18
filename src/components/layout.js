/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import MainNav from "./MainNav"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <MainNav />
      <main class="bg-dark">{children}</main>
    </>
  )
}

export default Layout
