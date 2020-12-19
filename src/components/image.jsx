import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Breakpoints from "../utils/breakpoints"

const ResponziveImage = styled(Img)`
  width: 100%;
  max-width: 464px;
  min-width: 300px;
  ${Breakpoints.md} {
    max-width: 300px;
  }
`

const Image = ({ fluid }) => {
  return <ResponziveImage fluid={fluid} />
}

export default Image

Image.propTypes = {
  fluid: PropTypes.object.isRequired,
}

Image.defaultProps = {
  fluid: null,
}
