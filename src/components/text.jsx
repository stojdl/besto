import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Breakpoints from "../utils/breakpoints"

const ResponziveText = styled.p`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  text-align: ${({ textAlign }) => textAlign};
  letter-spacing: 0.3px;
  color: rgba(223, 234, 255, 0.85);
  ${Breakpoints.md} {
    font-size: 14px;
    line-height: 19px;
  }
  ${Breakpoints.sm} {
    font-size: 13px;
    line-height: 16px;
  }
`

const Text = ({ text, textAlign }) => {
  return (
    <ResponziveText textAlign={textAlign}>
      <div
        dangerouslySetInnerHTML={{
          __html: text.replace("\n", "<br /><br />"),
        }}
      />
    </ResponziveText>
  )
}

export default Text

Text.propTypes = {
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string,
}

Text.defaultProps = {
  text: "Něco by tu mělo být...",
  textAlign: "center",
}
