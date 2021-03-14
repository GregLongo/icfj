import { React } from 'react'
import styled from '@emotion/styled'


export default function ParagraphSlant(props){

	const mobile = props.bp[1];
	const tablet = props.bp[2];

	const Slanted = styled.div`
		font-family: interstate condensed;
		font-size: 1em;
		color: black;
		text-align: justify;
		@media(min-width: ${mobile}){
			font-size: 1.7em;			
		}
  		&:before{
	  		content:'';
		  	float: left !important;
		 	shape-outside: polygon(100% 0%, 15% 100%, 0% 100%);
			width: 220px;
		 	height: 100vh;
		 	@media(min-width: ${tablet}){
			 	shape-outside: polygon(100% 0%, 25% 100%, 0% 100%);
				width: 400px;
		 		height: 90vh;	 		
		 	}
		}
		`
	return <Slanted className={props.className}>{props.children}</Slanted>
}