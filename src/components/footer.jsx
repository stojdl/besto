import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Bg from "../components/bg"
import Text from "../components/text"

const Wrapper = styled.section`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Content = styled.div`
  width: 100%;
  padding-left: 5vw;
  padding-right: 5vw;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      footer: file(relativePath: { eq: "footer.svg" }) {
        publicURL
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Bg
        backgroundURL={data.footer.publicURL}
        topPosition="-70vh"
        height="90vh"
      />
      <Content>
        <Text
          text="Vytvořeno v Reactu framewrokem Gatsby, navrhnuto ve Figmě,
        implementováno přes Styled components, obsah je spravován na DatoCMS a
        stránka je hostovaná přes Netlify."
        />
        <Text text={`© ${data.site.siteMetadata.author}`} />
      </Content>
    </Wrapper>
  )
}

export default Footer
