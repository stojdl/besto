import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Breakpoints from "../utils/breakpoints"

const Button = styled(Link)`
  font-family: "Baloo 2";
  font-weight: normal;
  font-size: 19px;
  display: block;
  width: fit-content;
  height: 64px;
  width: fit-content;
  background: #dfeaff;
  border: 1px solid #090c15;
  box-sizing: border-box;
  border-radius: 32px;
  line-height: 64px;
  color: #090c15;
  margin-left: auto;
  margin-right: auto;
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 32px;
  transition: box-shadow 0.15s ease-in-out;
  text-align: center;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 3px 20px rgba(223, 234, 255, 0.3);
  }

  ${Breakpoints.md} {
    height: 48px;
    line-height: 48px;
    font-size: 0.9em;
  }
`

const LinkButton = ({ link, text }) => {
  return <Button to={link}>{text}</Button>
}

export default LinkButton

LinkButton.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
}

LinkButton.defaultProps = {
  link: "/#",
  text: "Co asi dělám?",
}
