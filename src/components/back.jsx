import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const GoBack = styled.div`
  position: relative;
  top: -64px;
  left: 64px;
  display: inline-block;
`

const BackLink = styled(Link)`
  color: #dfeaff;
  text-decoration: none;
  font-family: "Baloo 2";
  font-weight: normal;
  background: url(${({ triangle }) => triangle});
  background-repeat: no-repeat;
  background-position: left;
  padding-left: 32px;
  &:hover {
    text-shadow: 0px 3px 20px rgba(223, 234, 255, 0.3);
  }
`

const Back = ({ to }) => {
  const data = useStaticQuery(graphql`
    query {
      back: file(relativePath: { eq: "back.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <GoBack>
      <BackLink to={to} triangle={data.back.publicURL}>
        Zpět
      </BackLink>
    </GoBack>
  )
}

export default Back

Back.propTypes = {
  to: PropTypes.string,
}

Back.defaultProps = {
  to: "/",
}
