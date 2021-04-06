import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import TriggeredCounter from "../components/TriggeredCounter.js"
import facepaint from "facepaint"

export default function CountBox(props) {
  const mq = facepaint(props.bp.map(bp => `@media (min-width:${bp})`))

  const CounterOne = styled(TriggeredCounter)`
    ${mq({
      fontSize: ["2em", "3em", "5em", "8em"],
    })}
  `
  const CounterTwo = styled(TriggeredCounter)`
    ${mq({
      fontSize: ["2em", "3em", "5em", "8em"],
    })}
    color: ${props => props.theme.colors.affair}
  `
  const CounterThree = styled(TriggeredCounter)`
    ${mq({
      fontSize: ["4em", "8em", "11em", "15em"],
      transform: ["translatex(4px)", "translatex(8px)", "translatex(32px)"],
    })}
    color: transparent;
    -webkit-text-stroke: 4px black;
  `
  const CounterFour = styled(TriggeredCounter)`
    ${mq({
      fontSize: ["4em", "4em", "8em", "10em"],
    })}
    color: ${props => props.theme.colors.mineShaft}
  `
  const CounterFive = styled(TriggeredCounter)`
    ${mq({
      fontSize: ["3.5em", "3.5em", "8em", "10em"],
    })}
    color: ${props => props.theme.colors.goldenGrass}
  `

  const PercentSign1 = styled.span`
    ${mq({
      fontSize: ["3.5em", "3.5em", "8em", "10em"],
    })}
    color: ${props => props.theme.colors.mineShaft}
  `
  const PercentSign2 = styled.span`
    ${mq({
      fontSize: ["3.5em", "3.5em", "8em", "10em"],
    })}
    color: ${props => props.theme.colors.goldenGrass}
  `

  const Square = styled.div`
    width: 100%;
    @media (min-width: ${props.bp[2]}) {
      border: 16px solid black;
    }
    display: flex;
    flex-direction: column;
    ${mq({ marginLeft: ["-4%", "-2%", "-1%", "0"] })};
    &:after {
      content: "";
      height: 6px;
      width: 50%;
      border: 26px solid ${props => props.theme.colors.valencia};
      position: absolute;
      margin-top: 23%;
      z-index: 999;
      display: none;
    }
  `
  const SquareInner = styled.div`
    margin-right: auto;
    margin-left: auto;
    width: 90%;
    height: 90%;
    display: grid;
    grid: 45% 55% / repeat(6, 1fr);
  `
  const SubSquare = styled.div`
    grid-column: span 2;
    font-family: interstate-condensed;
    color: white;
    z-index: 999;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    font-weight: 600;
    border: 4px solid;
    border-color: transparent white white transparent;
    &:nth-of-type(5n) {
      grid-column: span 3;
      border-color: transparent transparent transparent white;
    }
    &:nth-of-type(5n-1) {
      grid-column: span 3;
      border-color: transparent;
    }
    &:nth-of-type(5n-2) {
      display: flex;
      border-color: transparent transparent white transparent;
      ${mq({
        alignItems: ["center", "center", "flex-end"],
        flexDirection: ["column", "column", "row"],
      })};
    }
  `
  const Label = styled.div`
    ${mq({
      fontSize: ["1em", "1em", "1.5em"],
    })}
    padding-bottom: 17%;
    padding-left: 2rem;
    padding-right: 2rem;
  `
  const Subheader = styled.div`
    font-family: ubuntu;
    ${mq({
      fontSize: ["1.5em", "2em", "3em"],
    })} color: white;
    margin: 0.5em;
  `
  const SubSubheader = styled.div`
    font-family: ubuntu;
    ${mq({
      fontSize: ["1em", "1.25em", "1.5em"],
    })} color: black;
    margin: 0.5em;
    font-weight: 700;
  `

  return (
    <Square className={props.className}>
      <Subheader> First COVID-19 Survey of Its Kind</Subheader>
      <SubSubheader>
        A partnership with the Tow Center for Digital Journalism at Columbia
        University
      </SubSubheader>
      <SquareInner>
        <SubSquare
          css={css`
            padding-top: 20%;
          `}
        >
          <CounterOne val={2073} />
          <Label>JOURNALISTS RESPONDED</Label>
        </SubSquare>
        <SubSquare>
          <CounterTwo val={145} />
          <Label
            css={css`
              text-align: center;
            `}
          >
            <span css={mq({ fontSize: ["1em", "1em", "1.5em", "2em"] })}>
              COUNTRIES
            </span>{" "}
            REPRESENTED
          </Label>
        </SubSquare>
        <SubSquare
          css={css`
            align-items: flex-end;
          `}
        >
          <CounterThree val={7} />
          <Label>LANGUAGES</Label>
        </SubSquare>
        <SubSquare>
          <span
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <CounterFour val={46} />
            <PercentSign1>%</PercentSign1>
          </span>
          <Label>
            identified politicians and elected officials as top sources of
            disinformation
          </Label>
        </SubSquare>
        <SubSquare>
          <span
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <CounterFive val={30} />
            <PercentSign2>%</PercentSign2>
          </span>
          <Label>
            said their organizations did not supply field reporters with
            protective equipment
          </Label>
        </SubSquare>
      </SquareInner>
    </Square>
  )
}
