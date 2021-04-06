import { React, useRef, useEffect } from "react"
import styled from "@emotion/styled"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import facepaint from "facepaint"

gsap.registerPlugin(ScrollTrigger)

const PendantContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: visible;
`
export default function TriggeredPendantRight(props) {
  const color = props.color
  const id = props.id
  const mq = facepaint(props.bp.map(bp => `@media (min-width:${bp})`))
  const Pendant = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: ubuntu;
    background: ${props => props.theme.colors[color]};
    width: fit-content;
    height: 80px;
    position: relative;
    ${mq({
      fontSize: ["1.7em", "2em", "2.2em", "3em"],
      paddingRight: [".5em", ".8em", "1em", "3em"],
    })}
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: -180%;
      width: 280%;
      height: 100%;
      background: ${props => props.theme.colors[color]};
      transform-origin: 0 100%;
      transform: skew(-25deg);
      z-index: -1;
    }
  `

  const ref = useRef(null)
  useEffect(() => {
    gsap.from(ref.current, {
      x: "-280%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom top",
        toggleActions: "play complete none reverse",
        markers: false,
      },
    })
    ScrollTrigger.refresh(true)
  }, [])
  return (
    <PendantContainer className={props.className} id={id}>
      <Pendant ref={ref}>{props.children}</Pendant>
    </PendantContainer>
  )
}
