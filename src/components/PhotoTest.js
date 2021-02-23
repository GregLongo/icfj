import React from "react"
import { StaticQuery , graphql } from "gatsby"
import Img from "gatsby-image"

const PhotoTest = ({ data }) => (

  <div>
      <StaticQuery 
      query={graphql`
        query{
          deer: file(relativePath:{eq:"deer.jpg"}){
            ...tallImage
          },
          bus: file(relativePath:{eq:"bus.jpg"}){
            ...tallImage
          }
        }
      

    `}
    />
    <Img fixed={data.deer.childImageSharp.fixed} />
  </div>
)

export const tallImage = graphql`
  fragment tallImage on File {
      childImageSharp {
        fixed(width: 300, height: 600) {
          ...GatsbyImageSharpFixed
        }
      }
  }
`



export default PhotoTest