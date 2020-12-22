import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Title from "../components/title"
import Text from "../components/text"
import Bg from "../components/bg"

import Breakpoints from "../utils/breakpoints"

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
`

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #dfeaff;
  padding-top: 23vh;
  padding-bottom: 30vh;
`

const Info = styled.span`
  width: 50%;
  display: flex;
  justify-content: space-around;
  ${Breakpoints.sm} {
    width: 70%;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      bg2: file(relativePath: { eq: "bg2.svg" }) {
        publicURL
      }
      contact: datoCmsContact(slug: { eq: "contact" }) {
        title
        text
        email
        github
      }
    }
  `)
  return (
    <Wrapper id="contact">
      <Bg backgroundURL={data.bg2.publicURL} topPosition="-47vh" />
      <Content>
        <Title text={data.contact.title} />
        <Text text={data.contact.text} />
        <Info>
          <Text text={`E-mail:&nbsp;&nbsp;&nbsp;${data.contact.email}`} />
          <Text
            text={`Github:&nbsp;&nbsp;&nbsp;<a href="https://github.com/stojdl" target="_blank">${data.contact.github}</a>`}
          />
        </Info>
      </Content>
    </Wrapper>
  )
}

export default Contact
