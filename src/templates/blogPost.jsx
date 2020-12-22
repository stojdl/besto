import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Back from "../components/back"
import Title from "../components/title"
import Text from "../components/text"
import Bg from "../components/bg"
import Breakpoints from "../utils/breakpoints"

const Wrapper = styled.section`
  min-height: 225vh;
  padding: 2.5rem;
`
const Content = styled.div`
  width: 100%;
  margin-top: 5rem;
    margin-bottom: 40vh;
`

const ImageWrapper = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.4rem;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, #090c15 0%, #13192b 49.38%, #090c15 100%);
  /* border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px; */
  border-radius: 10px;
`

const Image = styled.div`
  padding: 0.5%;
`

const TextArea = styled.div`
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 5rem;

  h3 {
    font-family: "Quicksand";
    font-size: 30px;
    font-weight: normal;
    line-height: 40px;
    color: #dfeaff;

    ${Breakpoints.md} {
      font-size: 24px;
      line-height: 30px;
    }
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Info = styled.div`
  width: 90%;
  height: 0px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.7rem;
  border-top: 1px groove #dfeaff;
`

export const query = graphql`
  query($slug: String!) {
    datoCmsBlog(slug: { eq: $slug }, locale: { eq: "en" }) {
      meta {
        createdAt
        publishedAt
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
    placeholder: file(relativePath: { eq: "cardPlaceholder.png" }) {
      publicURL
    }
  }
`

const BlogPost = props => {
  let url = props.data.placeholder.publicURL
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
            <Image><img src={url} /></Image> 
          </ImageWrapper>
          <TextArea>
            <Text text={props.data.datoCmsBlog.content} textAlign="justify" />
          </TextArea>
          <Info>
<Text text={`<i>aktualizováno:</i>&nbsp;&nbsp;${new Intl.DateTimeFormat("cs-CZ").format(publishedAt)},&nbsp;&nbsp;&nbsp;<i>vytvořeno:</i>&nbsp;&nbsp;${new Intl.DateTimeFormat("cs-CZ").format(createdAt)}`} textAlign="right" />
          </Info>
            
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default BlogPost
