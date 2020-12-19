import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Breakpoints from "../utils/breakpoints"

const H1 = styled.h1`
  font-family: "Baloo 2";
  font-size: 55px;
  font-weight: normal;
  line-height: 56px;
  color: #dfeaff;
  margin-bottom: 32px;

  ${Breakpoints.md} {
    font-size: 42px;
    line-height: 45px;
  }
`

const Title = ({ text }) => {
  return <H1>{text}</H1>
}

export default Title

Title.propTypes = {
  text: PropTypes.string,
}

Title.defaultProps = {
  text: "Jsem nadpis!",
}
