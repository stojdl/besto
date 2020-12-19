import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from "../fragments/welcome"
import About from "../fragments/about"
import Contact from "../fragments/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Moje portfolio" />
    <Welcome />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
