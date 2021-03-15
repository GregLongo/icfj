import { React, useRef, useEffect } from "react"
import styled from "@emotion/styled"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function TriggeredHeadline(props) {
  const HeadlineContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ubuntu;
    font-weight: bold;
    font-size: 5em;
    text-transform: uppercase;
    text-align: ${props.right ? "right" : "left"};
    line-height: 1;
  `

  const HeadlineWhite = styled.div`
    display: block;
    color: white;
    z-index: 1;
  `
  const HeadlineBlack = styled.div`
    color: black;
    z-index: 2;
    margin-top: -8px;
  `

  const ref = useRef(null)

  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      // duration: 2,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 75%",
        toggleActions: "play complete reverse reverse",
      },
    })
  })
  return (
    <HeadlineContainer ref={ref}>
      <HeadlineBlack>{props.heading}</HeadlineBlack>
      <HeadlineWhite>{props.subheading}</HeadlineWhite>
    </HeadlineContainer>
  )
}
