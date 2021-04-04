import React from "react"
import styled from "@emotion/styled"
import Logo from "../images/icfj-logo.png"
import MenuSlant from "../components/MenuSlant.js"

export default function Header(props) {
  const mobile = props.bp[1]
  const tablet = props.bp[2]

  const HeaderContainer = styled.div`
    max-width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    margin-left: .5rem;
    margin-right: 1rem;
    height: 6rem;
    @media (min-width: ${mobile}) {
      margin-left: 2rem;
      margin-right: 2rem;
    }
    @media (min-width: ${tablet}) {
      margin-left: 4rem;
      margin-right: 4rem;
    }
  `
  const LogoMd = styled.img`
    justify-self: center;
    width: 150px;
    margin-left: 1rem;
    @media (min-width: ${mobile}) {
      width: 300px;
    }
  `
  return (
    <HeaderContainer>
      <MenuSlant />
      <LogoMd src ={Logo}/>
    </HeaderContainer>
  )
}
