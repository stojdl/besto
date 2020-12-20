import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Navbar from "../components/navbar"
import Image from "../components/image"
import Title from "../components/title"
import Text from "../components/text"
import LinkButton from "../components/button"

import Breakpoints from "../utils/breakpoints"

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100%;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 128px);
  padding-left: 5vw;
  padding-right: 5vw;
  ${Breakpoints.sm} {
    flex-direction: column;
  }
`

const Info = styled.div`
  padding-left: 96px;
  text-align: center;
  ${Breakpoints.sm} {
    padding: 5vh 0 0 0;
  }
`

const Welcome = () => {
  const data = useStaticQuery(graphql`
    query {
      gradient: file(relativePath: { eq: "gradient.svg" }) {
        publicURL
      }
      smile: file(relativePath: { eq: "smile.png" }) {
        childImageSharp {
          fluid(maxWidth: 464) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      welcome: datoCmsWelcome(slug: { eq: "welcome" }) {
        title
        subtitle
        button
      }
    }
  `)

  return (
    <Wrapper background={data.gradient.publicURL}>
      <Navbar />
      <Content>
        <Image fluid={data.smile.childImageSharp.fluid} />
        <Info>
          <Title text={data.welcome.title} />
          <Text text={data.welcome.subtitle} />
          <LinkButton link="/#" text={data.welcome.button} />
        </Info>
      </Content>
    </Wrapper>
  )
}

export default Welcome
