import React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/react'
import TriggeredCounter from "../components/TriggeredCounter.js"
import Highlighter from "../components/Highlighter.js"

const CounterOne = styled(TriggeredCounter)`

	font-size: 8em;
`
const CounterTwo = styled(TriggeredCounter)`
	color: ${props=>props.theme.colors.sanMarino}}
	font-size: 8em;
`
const CounterThree = styled(TriggeredCounter)`
	color: transparent;
 	-webkit-text-stroke: 4px black;
	font-size: 15em;
	transform: translatex(32px);
`
const CounterFour = styled(TriggeredCounter)`
	color: ${props=>props.theme.colors.mineShaft}}

	font-size: 10em;
`
const CounterFive = styled(TriggeredCounter)`
	color: ${props=>props.theme.colors.goldenGrass}}

	font-size: 10em;
`
const Square = styled.div`
	width: 100%;
	border: 16px solid black;
	display: flex;
	flex-direction: column;
	&:after{
		content:'';
		height: 6px;
		width: 50%;
		border: 26px solid ${props=>props.theme.colors.valencia};
		position: absolute;
		margin-top: 23%;
		z-index:999;
	}
`
const SquareInner = styled.div`
	margin-right: auto;
	margin-left: auto;
	width: 90%;
	height: 90%;
	display: grid;
	grid: 45% 55% / repeat(6, 1fr);
`
const SubSquare = styled.div`
	grid-column: span 2;
	font-family: interstate condensed;
	color: white;
	z-index: 999;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	font-weight: 600;
	border: 4px solid ;
	border-color: transparent white white transparent;
	&:nth-of-type(5n){
		grid-column: span 3;
		border-color:  transparent transparent transparent white ;
	}
	&:nth-of-type(5n-1){
		grid-column: span 3;
		border-color: transparent;
	}
	&:nth-of-type(5n-2){
		display:flex;
		flex-direction: row;
		border-color: transparent transparent white transparent;
	}
`
const Label= styled.div`
	font-size: 1.5em;
	padding-bottom: 17%;
	padding-left: 2rem;
	padding-right: 2rem;
`
const Subheader = styled.div`
	font-family: ubuntu;
	font-size: 3em;
	color: white;
	margin: 1em;
`


export default function CountBox(props){

		return(
			<Square>
			<Subheader> First Covid-19 Survey of It's Kind</Subheader>
			<SquareInner>
				<SubSquare css={css`padding-top: 20%`}>
					<CounterOne val={2073} />
					<Label >JOURNALISTS RESPONDED</Label>
				</SubSquare>
				<SubSquare>
					<CounterTwo val={145} />
					<Label css={css`text-align:center`}><span css={css`font-size:2em`}>COUNTRIES</span> RESPRESENTED</Label>
				</SubSquare>
				<SubSquare css={css`align-items: flex-end`}>
					<CounterThree val={7} />
					<Label 	>SURVEY LANGUAGES</Label>
				</SubSquare>
				<SubSquare>
					<span css={css`display:flex; align-items: center;`}>
						<CounterFour val={46} />
						<span css={theme =>({
								fontSize: '10em',
								color:theme.colors.mineShaft})}>
							%</span>
					</span>
					<Label>of respondents identified politicians and elected officials as top sources of disinformation</Label>
				</SubSquare>
				<SubSquare>
					<span css={css`display:flex; align-items: center;`}>
						<CounterFive val={30} />
						<span css={theme =>({
								fontSize: '10em',
								color:theme.colors.goldenGrass})}>
							%</span>
					</span>
					<Label>said their organizations did not supply field reporeters with protective equipment.</Label>
				</SubSquare>
			</SquareInner>
			<p css={css`color:white; font-style:italic;margin:3em`}><Highlighter color="mineShaft"> *Research in partnership with the Tow Center for Digital Journalism at Columbia University
			</Highlighter>
			</p>
			</Square>
		)
	
}
