import React from "react"
import styled from "@emotion/styled"
import Logo from "../svg/logo-md.svg"
import MenuSlant from "../components/MenuSlant.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons'

export default function Header(props){ 

const mobile = props.bp[1];
const desktop = props.bp[2];

const HeaderContainer = styled.div`
  max-width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 1rem;
  margin-right: 1rem;
  height: 6rem;
  @media(min-width: ${mobile}){
    margin-left: 4rem;
    margin-right: 4rem;
    height: 10rem;
  }
`
const LogoMd = styled(Logo)`
  justify-self: center;
  width: 160px;
  @media(min-width: ${mobile}){
    width: 300px;
  }
`
const Social = styled.div`
  white-space: nowrap;
  font-family: ubuntu;
  display: grid;
  grid-column-gap: 1rem;
  align-items: start;
  justify-content: end;
  grid-template-columns: repeat(4, auto);    

`

const SocialText = styled.a`
  font-size: 1.2em;
  text-decoration: none;
  @media(min-width: ${mobile}){
      font-size: 1.5em;   
  }
  &:nth-of-type(1){
    color: #149ee7;
    grid-column-start: span 4;
    @media(min-width: ${desktop}){
      grid-column-start: span 1
      }
    }
  &:nth-of-type(2){
      color: black
  }
   `
  return (
    <HeaderContainer>
      <MenuSlant />
      <LogoMd />
      <Social>
              <SocialText href="http://icfj.org">Donate to ICFJ</SocialText>
              <SocialText  href="http://icfj.org">Share</SocialText>
              <FontAwesomeIcon icon={faFacebookF} size="1x" />
              <FontAwesomeIcon icon={faTwitter} size="1x" />
      </Social>
    </HeaderContainer>
    )
}