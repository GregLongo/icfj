import React from "react"
import styled from "@emotion/styled"
import ImageQuery from "../components/ImageQuery.js"
import Icon from "../svg/quote.svg"
import facepaint from "facepaint"

export default function Wolf(props) {
  const mq = facepaint(props.bp.map(bp => `@media (min-width:${bp})`))

  const tablet = props.bp[1]

  const Card = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: white;
    overflow: hidden;
    background: ${props => props.theme.colors.sanMarino};
    padding-bottom: 2rem;
    margin-top: 4rem;
    @media (min-width: ${tablet}) {
      flex-direction: row;
      height: 340px;
      padding-bottom: unset;
    }
  `

  const Name = styled.div`
    color: white;
    font-family: Ubuntu;
    margin: 1rem 0 0 3rem;
    font-size: 2em;
    @media (min-width: ${tablet}) {
      font-size: 3em;
    }
  `
  const Title = styled.div`
    font-size: 1.5em;
    font-family: interstate-condensed;
    margin: 1rem 0 0 3rem;
  `
  const Bio = styled.div`
    font-family: interstate-condensed;
    margin: 1rem 0 0 2rem;
    padding-right: 2rem;
    ${mq({
      fontSize: ["1em", "1.2em", "2em"],
    })}
  `
  const Headshot = styled.div`
    height: 100%;
    overflow: hidden;
    clip-path: polygon(0% 0%, 100% 0%, 65% 100%, 0% 100%);
    ${mq({
      width: ["100%", "100%", "60%"],
    })}
  `
  const Info = styled.div`
    color: white;
    ${mq({ marginTop: ["0", "0", "4em"] })}
  `
  const QuoteIcon = styled(Icon)`
    position: absolute;
    z-index: 1;
  `

  return (
    <Card>
      <Headshot>
        <ImageQuery filename={props.image} />
      </Headshot>
      <Info>
        <Name>{props.name}</Name>
        <Title>{props.title}</Title>
        <QuoteIcon />
        <Bio>{props.bio}</Bio>
      </Info>
    </Card>
  )
}
