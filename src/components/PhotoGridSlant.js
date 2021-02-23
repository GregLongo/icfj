import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"



const PhotoGrid = styled.div`
  display:grid;
  grid-template-columns: repeat(4,1fr);
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 40%;

`

const angle ="20"

const StyledImg = styled(Img)`
    clip-path: polygon(0 ${angle}%, 100% 0, 100% ${100-angle}%, 0 100%);
    margin-top:-${angle*2}%;
    &:nth-child(4n){
      transform: translateY(-0%);
    }
    &:nth-child(4n+1){
      transform: translateY(-${angle}%);
    }
    &:nth-child(4n+2){
      transform: translateY(-${angle*2}%);
    }

    &:nth-child(4n+3){
      transform: translateY(-${angle*3}%);
    }

    &:nth-child(4n+4){
      transform: translateY(-${angle*4}%);
    }
`


const PhotoGridSlant = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
                fluid(
                    toFormat: PNG
                    )
                {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <PhotoGrid>
      {data.allFile.edges.map(image => (
        <StyledImg
          fluid={image.node.childImageSharp.fluid}
        />
      ))}
    </PhotoGrid>
  )
}

export default PhotoGridSlant