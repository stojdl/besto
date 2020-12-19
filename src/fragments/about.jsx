import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Bg from "../components/bg"
import Image from "../components/image"
import Title from "../components/title"
import Text from "../components/text"
import LinkButton from "../components/button"

import Breakpoints from "../utils/breakpoints"

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 27vh;
`
const Content = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  display: flex;
  align-items: center;
      justify-content: center;
  ${Breakpoints.md} {
    max-width: 800px;
  }
  ${Breakpoints.sm} {
    flex-direction: column;
  }
`

const Info = styled.div`
  max-width: 800px;
  padding-right: 96px;
  text-align: center;
  padding-left: 5vw;
  padding-right: 5vw;
  ${Breakpoints.sm} {
    padding-bottom: 5vh;
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      bg1: file(relativePath: { eq: "bg1.svg" }) {
        publicURL
      }
      me: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fluid(maxWidth: 464) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      about: datoCmsAboutMe(slug: { eq: "about" }) {
        title
        text
        button
      }
    }
  `)
  return (
    <>
      <Bg backgroundURL={data.bg1.publicURL} topPosition="-32.5vh" />
      <Wrapper id="aboutme">
        <Content>
          <Info>
            <Title text={data.about.title} />
            <Text text={data.about.text} textAlign="justify" />
            <LinkButton link="/#" text={data.about.button} />
          </Info>
          <Image fluid={data.me.childImageSharp.fluid} />
        </Content>
      </Wrapper>
    </>
  )
}

export default About
