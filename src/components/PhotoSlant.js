import React from 'react'
import styled from "@emotion/styled"
import ImageQuery from "../components/ImageQuery.js"

export default function PhotoHalfSlant(props){

	const Photo = styled.div({
		height: '400px',
		width:  '400px',
		clipPath:'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'
	})
	
	return (<Photo>
				<ImageQuery filename={props.src} />
			</Photo>
			)
}