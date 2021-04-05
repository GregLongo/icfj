import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons'


export default function Social(props){

const mobile = props.bp[1];

const SocialText = styled.a`
    font-size: 1em;
    text-decoration: none;
    float: right;
    @media (min-width: ${mobile}) {
      font-size: 2em;
    }
    &:nth-of-type(1) {
      color: #149ee7;
    }
    &:nth-of-type(2) {
      color: white;
    }
  `

const SocialWrapper = styled.div`
  color: white;
  white-space: nowrap;
  font-family: ubuntu;
  display: grid;
  grid-column-gap: 2rem;
  align-items: center;
  justify-content: end;
  grid-template-columns: repeat(4, auto);    
`
const SocialLink = styled.a`
  color: white;
`

	return(
	  <SocialWrapper className={props.className}>
		  <SocialText href="https://www.icfj.org/donate-icfj" rel="noreferrer" target="_blank">Donate to ICFJ</SocialText>
		  <SocialText href="http://icfj.org" rel="noreferrer" target="_blank">Share</SocialText>
		  <SocialLink href='https://www.facebook.com/icfjorg/' rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebookF} size="2x" /></SocialLink>
		  <SocialLink href="https://twitter.com/ICFJ" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></SocialLink>
	  </SocialWrapper>
  )
}