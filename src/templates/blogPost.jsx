import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Back from "../components/back"
import Title from "../components/title"
import Text from "../components/text"
import Bg from "../components/bg"

const Wrapper = styled.section`
  min-height: 225vh;
  padding: 2.5rem;
`
const Content = styled.div`
  width: 100%;
  margin-top: 5rem;
`

const ImageWrapper = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, #090c15 0%, rgba(223, 234, 255, 0) 100%);
`

const Image = styled.img``

const TextArea = styled.div`
  width: 100%;
  padding: 5%;
  margin-bottom: 40vh;
`

export const query = graphql`
  query($slug: String!) {
    datoCmsBlog(slug: { eq: $slug }, locale: { eq: "en" }) {
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
    bg: file(relativePath: { eq: "bgBlog.svg" }) {
      publicURL
    }
  }
`

const BlogPost = props => {
  let url = ""
  if (props.data.datoCmsBlog.image != null) {
    url = props.data.datoCmsBlog.image.url
  }

  const createdAt = new Date(props.data.datoCmsBlog.meta.createdAt)
  const publishedAt = new Date(props.data.datoCmsBlog.meta.publishedAt)
  return (
    <Layout>
      <Bg
        backgroundURL={props.data.bg.publicURL}
        height="220vh"
        bgPos="top left"
      />
      <Wrapper>
        <SEO title={props.data.datoCmsBlog.title} />
        <Back to="/blog" />
        <Title text={props.data.datoCmsBlog.title} />
        <Content>
          <ImageWrapper>
            <Image src={url}></Image>
          </ImageWrapper>
          <TextArea>
            <Text text={props.data.datoCmsBlog.content} textAlign="justify" />
          </TextArea>
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default BlogPost
