import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  //spustí smooth scroll
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
