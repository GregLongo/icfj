import React from 'react'
import styled from "@emotion/styled"
import ImageQuery from "../components/ImageQuery.js"

export default function PhotoSlant(props){

	const tablet = props.bp[2];

	const Photo = styled.div`
		height: 300px;
		width:  300px;
		clip-path:${props.right ? 'polygon(35% 0%, 100% 0%, 100% 100%, 0% 100%)': 
									'polygon(0 0%, 100% 0%, 65% 100%, 0% 100%)' 
								};
		@media(min-width: ${tablet}){
			clip-path:polygon(35% 0%, 100% 0%, 65% 100%, 0% 100%);
			height: 400px;
			width:  440px;
		}
		`
	
	return (<Photo className={props.className}>
				<ImageQuery filename={props.src} />
			</Photo>
			)
}