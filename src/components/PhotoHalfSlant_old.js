import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"


export default function PhotoHalfSlant(props){
	const data = useStaticQuery(graphql`
	  query {
		file(relativePath: { eq:  "bridge.hp="  }) {
	      childImageSharp {
	        fluid(maxWidth: 400, maxHeight: 400) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
	  }
	`)


	const Photo = styled.div({
		height: '400px',
		width:  '400px',
		clipPath: props.right ? 'polygon(35% 0, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0 0%, 100% 0%, 65% 100%, 0% 100%)' 
	})
	
	return (<Photo>
				<Img
					fluid={data.file.childImageSharp.fluid}
					/>
			</Photo>
			)
}