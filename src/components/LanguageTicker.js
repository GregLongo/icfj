import React from "react"
import styled from "@emotion/styled"
import Marquee from "react-double-marquee"

export default function LanguageTicker(props) {
  const Ticker = styled.div`
    color: white;
    font-size: 1.7em;
    font-family: interstate-condensed;
    white-space: nowrap;
    overflow-x: hidden;
    background: ${props => props.theme.colors.curiousBlue};
    padding-top: 24px;
    padding-bottom: 24px;
    word-spacing: 3em;
  `
  return (
    <Ticker className={props.className}>
      <Marquee speed={0.06}>{props.children}</Marquee>
    </Ticker>
  )
}
