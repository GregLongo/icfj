import { React, useRef, useEffect } from "react"
import styled from "@emotion/styled"
import Icon from "../svg/quote.svg"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import facepaint from "facepaint"

gsap.registerPlugin(ScrollTrigger)

export default function Quote(props) {
  const mq = facepaint(props.bp.map(bp => `@media (min-width:${bp})`))

  const Text = styled.div`
    font-family: interstate-condensed;
    font-weight: 500;
    padding-left: 4rem;
    z-index: 2;
    color: ${props.light ? "white" : ""};
    ${mq({
      fontSize: ["1.5em", "1.5em", "1.75em", "2.5em"],
    })}
  `
  const QuoteContainer = styled.div`
    height: fit-content;
    display: flex;
    align-items: center;
  `

  const QuoteIcon = styled(Icon)`
    position: absolute;
    ${mq({
      transform: ["translateY(-80px)", "translateY(-60px)", "translateY(-60px)", "translateY(-60px)"],
      width: ["60px", "60px", "150px", "150px"],
      left: ["24px", "24px", "-30px", "-26px"],
    })}
    z-index: 1;
  `

  const ref = useRef()

  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      y: "4rem",
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom top",
        toggleActions: "play complete none reverse",
        markers: false,
      },
    })
  })

  return (
    <QuoteContainer ref={ref} className={props.className}>
      <QuoteIcon />
      <Text>{props.children}</Text>
    </QuoteContainer>
  )
}
