import React from "react"
import styled from "@emotion/styled"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import facepaint from "facepaint"

gsap.registerPlugin(ScrollTrigger)

const PendantContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  overflow-x: hidden;
`

export default function PendantLeft(props) {
  const mq = facepaint(props.bp.map(bp => `@media (min-width:${bp})`))
  const color = props.color
  const Pendant = styled.div`
    font-family: ubuntu;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors[color]};
    position: relative;
    @media(max-width:330px){
      padding-left: 1.5rem; 
    }
    ${mq({
      paddingLeft: [".5rem", "1rem",  "0rem","calc((100vw - 1024px) / 1.97)"],
      maxWidth: ["85vw", "89vw", "auto"],
    })}
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${props => props.theme.colors[color]};
      transform-origin: 0 100%;
      transform: skew(-25deg);
      z-index: -1;
    }
  `
  return (
    <PendantContainer>
      <Pendant>{props.children}</Pendant>
    </PendantContainer>
  )
}
