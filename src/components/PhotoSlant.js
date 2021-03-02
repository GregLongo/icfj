import React from 'react'
import styled from "@emotion/styled"
import ImageQuery from "../components/ImageQuery.js"

export default function PhotoHalfSlant(props){

	const Photo = styled.div({
		height: '400px',
		width:  '440px',
		clipPath:'polygon(35% 0%, 100% 0%, 65% 100%, 0% 100%)'
	})
	
	return (<Photo className={props.className}>
				<ImageQuery filename={props.src} />
			</Photo>
			)
}