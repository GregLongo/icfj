import { React, useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled from "@emotion/styled"
//
gsap.registerPlugin(ScrollTrigger)

export default function Highlighter(props) {
  const color = props.color
  const Highlighted = styled.span`
    background-image: linear-gradient(
      ${props => props.theme.colors[color]},
      ${props => props.theme.colors[color]}
    );
    background-repeat: no-repeat;
    background-position: 0% 100%;
    background-size: 0% 100%;
  `
  const ref = useRef(null)
  useEffect(() => {
    gsap.to(ref.current, {
      backgroundSize: "100% 100%",
      duration: 0.6,
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: 0,
        toggleActions: "play complete reverse reset",
        markers: false,
      },
    })
  })
  return <Highlighted ref={ref}> {props.children}</Highlighted>
}
