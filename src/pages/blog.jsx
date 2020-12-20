import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Title from "../components/title"
import Back from "../components/back"
import Bg from "../components/bg"

const Wrapper = styled.section`
  width: 100%;
  min-height: 220vh;
  padding: 2.5rem;
`

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bgBlog.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <Layout>
      <Bg backgroundURL={data.bg.publicURL} height="220vh" bgPos="top left"/>
      <Wrapper>
        
        <Title text="Blog" />
        <Back to="/" />
      </Wrapper>
    </Layout>
  )
}

export default Blog
