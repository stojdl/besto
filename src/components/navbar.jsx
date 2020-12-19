import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Breakpoints from "../utils/breakpoints"

const Nav = styled.nav`
  width: 100%;
  max-width: 1440px;
  height: 128px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${Breakpoints.sm} {
    height: 64px;
  }
`

const NavLink = styled(Link)`
  display: block;
  color: #dfeaff;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  font-family: "Quicksand";
  ${Breakpoints.md} {
    font-size: 14px;
    line-height: 19px;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/#aboutme">O mně</NavLink>
      <NavLink to="/#contact">Kontakt</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </Nav>
  )
}

export default Navbar
