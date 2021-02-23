import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
	box-sizing: border-box;
	width: 200px;
	height: 50px;
	position: absolute;
	top:50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: white
`

const ButtonLabel = styled.div`
	color: white;
	position: absolute;
	width: 100%;
	height: 100%;
	line-height: 50px;
	text-align: center;
	font-size: 35px;
	font-family: Trebuchet MS;
	font-weight: bold;
`
const Button = styled.div`
	position: absolute;
	background: deeppink;
	width: 100%;
	height: 100%;
`

const ButtonWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	margin-bottom: 25px;
	cursor: pointer;
	&:hover{
		transform: scale(1.8);
		filter: url("#shake0");
		${ButtonLabel}{
			color: lime !important;
		}
		${Button}{
			background: white;
		}
	}
`

const scribble = () =>(
	<div>
	<Container>
		<ButtonWrapper>
			<Button />
			<ButtonLabel>Aboat</ButtonLabel>
		</ButtonWrapper>
		<ButtonWrapper>
			<Button />
			<ButtonLabel>Artworks</ButtonLabel>
		</ButtonWrapper>		<ButtonWrapper>
			<Button />
			<ButtonLabel>Contact</ButtonLabel>
		</ButtonWrapper>		<ButtonWrapper>
			<Button />
			<ButtonLabel>Shop</ButtonLabel>
		</ButtonWrapper>
	</Container>
	<svg>
		<defs>
			<filter id ='shake0'>
				<feTurbulence id="turbulence" baseFrequency="0.04" numOctaves="4" seed="4" />
				<feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="7" />
			</filter>
		</defs>
	</svg>
	</div>
)

export default scribble