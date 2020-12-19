import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Parent = styled.div`
  position: relative;
  top: ${({ topPosition }) => topPosition};
  width: 100%;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: ${({ height }) => height};
  z-index: -1;
  background: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100%;

  @media screen and (max-width: 1420px) {
    background-size: cover;
  }
`

const Bg = ({ backgroundURL, topPosition, height }) => {
  return (
    <Parent topPosition={topPosition}>
      <Background background={backgroundURL} height={height} />
    </Parent>
  )
}

Bg.propTypes = {
  backgroundURL: PropTypes.string.isRequired,
  topPosition: PropTypes.string.isRequired,
  height: PropTypes.string,
}

Bg.defaultProps = {
  backgroundURL: null,
  topPosition: 0,
  height: "75vh",
}

export default Bg
