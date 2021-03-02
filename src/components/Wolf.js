import React from 'react'
import styled from '@emotion/styled'
import ImageQuery from "../components/ImageQuery.js"
import Icon from "../images/quote.svg"

const Card = styled.div`
	width: 100%;
	height: 340px;
	display: flex;
	flex-direction: row;
	background: white;
	overflow: hidden;
	background: ${props=>props.theme.colors.sanMarino}
`

const Name = styled.div`
	font-size: 3em;
	color: white;
	font-family: Ubuntu;
	margin: 1rem 0 0 3rem;
`
const Title = styled.div`
	font-size: 1.5em;
	font-family: interstate condensed;
	margin: 1rem 0 0 3rem;
`
const Bio = styled.div`
	font-size: 2em;
	font-family: interstate condensed;
	margin: 1rem 0 0 2rem;
	padding-right: 2rem;
`
const Headshot = styled.div`
	height: 100%;
	width: 40%;
	overflow: hidden;
	clip-path:polygon(0% 0%, 100% 0%, 65% 100%, 0% 100%);

`
const Info = styled.div`
	color: white;
	margin-top: 4rem
`
const QuoteIcon = styled(Icon)`
		position: absolute;
		z-index: 1;
	`


export default function Wolf(props){
	return(<Card>
			<Headshot><ImageQuery filename={props.image} /></Headshot>
			<Info>
				<Name>{props.name}</Name>
				<Title>{props.title}</Title>
				<QuoteIcon />
				<Bio>{props.bio}</Bio>
			</Info>
		</Card>)
}