import { React, useRef, useEffect } from "react"
import styled from "@emotion/styled"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import facepaint from "facepaint"

gsap.registerPlugin(ScrollTrigger)

export default function TriggeredHeadline(props) {
  const mq = facepaint(props.bp.map(bp => `@media (min-width:${bp})`))

  const HeadlineContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ubuntu;
    font-weight: bold;
    text-transform: uppercase;
    text-align: ${props.right ? "right" : "left"};
    line-height: 1;
    ${mq({
      fontSize: ["2.5em", "3em", "3em", "5em"],
    })}
  `

  const ref = useRef(null)

  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom top",
        toggleActions: "play complete none reverse",
        markers: false,
      },
    })
  })
  return <HeadlineContainer ref={ref}>{props.children}</HeadlineContainer>
}
