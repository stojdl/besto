import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Footer from "./footer"

import styled from "styled-components"

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "BACKGROUND.svg" }) {
        publicURL
      }
    }
  `)

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
