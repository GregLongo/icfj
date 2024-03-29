import { React, useRef, useEffect } from "react"
import styled from "@emotion/styled"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

gsap.registerPlugin(ScrollTrigger)

export default function FrameEmbed(props) {
  const mobile = props.bp[1]

  const FrameContainer = styled.div`
    overflow: visible;
  `
  const Frame = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    overflow: hidden;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `
  const Caption = styled.div`
    width: 100%;
    white-space: nowrap;
  `
  const Text = styled.div`
    display: inline;
    color: white;
    font-family: interstate-condensed;
    margin: 1em;
    margin-right: 0;
    font-size: 0.65em;
    @media (min-width: ${mobile}) {
      font-size: 1.5em;
    }
  `
  const buttonColor = props.buttonColor
  const Button = styled.button`
    height: 24px;
    width: 24px;
    display: inline;
    background: ${props => props.theme.colors[buttonColor]};
    border: none;
    color: white;
    @media (min-width: ${mobile}) {
      height: 48px;
      width: 48px;
    }
  `
  const ref = useRef()

  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom top",
        toggleActions: "play complete none reverse",
      },
    })
  })

  return (
    <FrameContainer ref={ref} className={props.className}>
      <Caption>
        <Button>
          <FontAwesomeIcon icon={faAngleDown} size="1x" />
        </Button>
        <Text>{props.caption}</Text>
      </Caption>
      <Frame>{props.children}</Frame>
    </FrameContainer>
  )
}
