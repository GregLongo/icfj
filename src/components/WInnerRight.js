import React from 'react'
import styled from '@emotion/styled'
import ImageQuery from "../components/ImageQuery.js"

export default function WinnerRight(props){

const tablet = props.bp[1];

const Card = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column-reverse;
	overflow: hidden;
	padding-bottom: 2rem;
	@media(min-width:${tablet}){
		flex-direction: row;
		height: 340px;		
		padding-bottom: unset;
	}
`

const Award = styled.div`
	background: ${props=>props.theme.colors.curiousBlue};
	color: white;
	font-family: interstate condensed;
	font-size: 1.5em;
	padding-right: 8rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	width: 120%;
	text-align: center;
`

const Name = styled.div`
	font-size: 3em;
	color: ${props=>props.theme.colors.curiousBlue};
	font-family: Ubuntu;
	margin: 1rem 0 0 0;
	text-align: right;
`
const Title = styled.div`
	font-size: 1.5em;
	font-family: interstate condensed;
	margin: 1rem 0 0 0;
	text-align: right;
`
const Bio = styled.div`
	font-size: 2em;
	font-family: interstate condensed;
	margin: 1rem 0 0 0;
	padding-left: 2rem;
	padding-right: 2rem;
	text-align: right;
`
const Headshot = styled.div`
	height: 100%;
	width: 100%;
	@media(min-width:${tablet}){
		width: 40%;
	}
	overflow: hidden;
	clip-path:polygon(35% 0%, 100% 0%, 100% 100%, 0% 100%)
`
const Info = styled.div`
	
`
const Image = styled(ImageQuery)`
	height: 100%
`

	return(<Card>
			<Info>
				<Award>{props.award}</Award>
				<Name>{props.name}</Name>
				<Title>{props.title}</Title>
				<Bio>{props.bio}</Bio>
			</Info>
			<Headshot><Image filename={props.image} /></Headshot>

		</Card>)
}