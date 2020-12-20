import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Footer from "./footer"

import styled from "styled-components"

const Page = styled.div`
  width: 100%;
`

const Layout = ({ children }) => {
  //spustí smooth scroll
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }
  
  return (
    <>
      <Page>
        <main>{children}</main>
        <Footer />
      </Page>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
