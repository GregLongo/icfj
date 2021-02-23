import { React } from 'react'
import styled from '@emotion/styled'

export default function ParagraphSlant(props){
	const Slanted = styled.div`
		font-size: 28px;
		color: black;
  		&:before{
	  		content:'';
		  	float: left !important;
		 	shape-outside: polygon(100% 0%, 25% 100%, 0% 100%);
			width: 400px;
		 	height: 100vh;
		}
		`
	return <Slanted>{props.children}</Slanted>
}