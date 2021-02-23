import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const gallery = ({ data }) => (
  <div>
    <Img fixed={data.deer.childImageSharp.fixed} />
    <Img fixed={data.bus.childImageSharp.fixed} />
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

export const query = graphql`
  query{
    deer: file(relativePath:{eq:"deer.jpg"}){
      ...tallImage
    },
    bus: file(relativePath:{eq:"bus.jpg"}){
      ...tallImage
    }
  }

`

export default gallery