import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Title from "../components/title"
import Text from "../components/text"
import Back from "../components/back"
import Bg from "../components/bg"
import Breakpoints from "../utils/breakpoints"
import SEO from "../components/seo"

const Wrapper = styled.section`
  width: 100%;
  min-height: 220vh;
  padding: 2.5rem;
`

const Content = styled.div`
  width: 90%;
  height: 100%;
  margin: 5rem auto 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Card = styled.div`
  width: 100%;
  height: 65vh;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background: linear-gradient(180deg, #090c15 0%, #0e1322 100%);

  transition: box-shadow 0.1s ease-in-out;
  &:hover {
    box-shadow: 0px 3px 20px rgba(223, 234, 255, 0.3);
  }
`

const CardTitle = styled.h3`
  font-family: "Baloo 2";
  font-size: 30px;
  font-weight: normal;
  line-height: 40px;
  color: #dfeaff;
  text-align: center;
  margin-top: 0.7rem;
  margin-bottom: 0rem;

  ${Breakpoints.md} {
    font-size: 25px;
    line-height: 30px;
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
`
const CardText = styled.div`
  max-height: 30%;
  overflow: hidden;
  padding: 5%;
`

const CardDate = styled.div`
  padding-right: 5%;
`

const CardLink = styled(Link)`
  width: 30%;
  margin-bottom: 3rem;
  text-decoration: none;

  ${Breakpoints.md} {
    width: 45%;
  }

  ${Breakpoints.sm} {
    width: 90%;
  }
`

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bgBlog.svg" }) {
        publicURL
      }
      allDatoCmsBlog(filter: { locale: { eq: "en" } }) {
        edges {
          node {
            meta {
              createdAt
            }
            title
            content
            image {
              url
            }
            slug
          }
        }
      }
    }
  `)

  const karty = data.allDatoCmsBlog.edges.map(article => {
    let url = ""
    if (article.node.image != null) {
      url = article.node.image.url
    }

    const createdAt = new Date(article.node.meta.createdAt)

    return (
      <CardLink to={`/blog/${article.node.slug}`}>
        <Card>
          <CardTitle>{article.node.title}</CardTitle>
          <CardImage src={url} alt="420" />
          <CardText>
            <Text text={article.node.content} textAlign="justify" />
          </CardText>
          <CardDate>
            <Text
              text={new Intl.DateTimeFormat("cs-CZ").format(createdAt)}
              textAlign="right"
            />
          </CardDate>
        </Card>
      </CardLink>
    )
  })

  return (
    <Layout>
      <SEO title="Blog" />
      <Bg backgroundURL={data.bg.publicURL} height="220vh" bgPos="top left" />
      <Wrapper>
        <Back to="/" />
        <Title text="Blog" />
        <Content>{karty}</Content>
      </Wrapper>
    </Layout>
  )
}

export default Blog
