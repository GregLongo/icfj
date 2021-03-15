import React from "react"
import styled from "@emotion/styled"
import ImageQuery from "../components/ImageQuery.js"

export default function WinnerLeft(props) {
  const tablet = props.bp[1]

  const Card = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-bottom: 2rem;
    @media (min-width: ${tablet}) {
      flex-direction: row;
      height: 340px;
      padding-bottom: unset;
    }
  `

  const Award = styled.div`
    background: ${props => props.theme.colors.sanMarino};
    color: white;
    font-family: interstate condensed;
    font-size: 1em;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-left: -5rem;
    margin-right: -1rem;
    text-align: center;
    @media (min-width: ${tablet}) {
      font-size: 1.5em;
    }
  `

  const Name = styled.div`
    color: ${props => props.theme.colors.sanMarino};
    font-family: Ubuntu;
    margin: 1rem 0 0 3rem;
    font-size: 2em;
    padding-left: 2rem;
    @media (min-width: ${tablet}) {
      padding-left: 0;
      font-size: 3em;
    }
  `
  const Title = styled.div`
    font-size: 1.5em;
    font-family: interstate condensed;
    margin: 1rem 0 0 3rem;
  `
  const Bio = styled.div`
    font-family: interstate condensed;
    margin: 1rem 0 0 2rem;
    padding-right: 2rem;
    font-size: 1.5em;
    @media (min-width: ${tablet}) {
      font-size: 2em;
    }
  `
  const Headshot = styled.div`
    height: 100%;
    width: 100%;
    @media (min-width: ${tablet}) {
      width: 40%;
    }
    overflow: hidden;
    clip-path: polygon(0% 0%, 100% 0%, 65% 100%, 0% 100%);
  `
  const Image = styled(ImageQuery)`
    height: 100%;
  `
  const Info = styled.div``

  return (
    <Card>
      <Headshot>
        <Image filename={props.image} />
      </Headshot>
      <Info>
        <Award>{props.award}</Award>
        <Name>{props.name}</Name>
        <Title>{props.title}</Title>
        <Bio>{props.bio}</Bio>
      </Info>
    </Card>
  )
}
