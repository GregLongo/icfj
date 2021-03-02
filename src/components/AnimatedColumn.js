import React, {  Component } from 'react'
import styled from '@emotion/styled'
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TriggeredCounter from "../components/TriggeredCounter.js"
import {keyframes } from '@emotion/react'

gsap.registerPlugin(ScrollTrigger)

const loop = keyframes`
	from { background-position: 0 0; }
    to { background-position: -400px 0; }
`

const Column = styled.div`
	position: relative;
	width: 256px;
	height: 256px;
`
const Inner = styled.div`
	position: absolute;
	clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
	clip:rect(0px,256px,256px,0px);
	width: 100%;
	height: 100%;
	white-space: nowrap;
	background-color: hotpink;

`

const CounterSmol = styled(TriggeredCounter)`
	padding-top: 25%;
	font-size: 3em;
`

const Labels = styled.div`
	font-family: interstate condensed;
	color: white;
	margin: auto;
	position: absolute;
	z-index: 999;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	font-weight: 600;
`
const Title= styled.div`
	font-size: 1.5em;
`

class AnimatedColumn extends Component{
	constructor(props){
		super(props);
		this.ref = React.createRef();
	}
	componentDidMount(){
		gsap.from(this.ref.current,{
		clip:"rect(256px,256px,256px,0px)",
		duration: 1,
		scrollTrigger:{
				trigger:this.ref.current,
				start: "top center",
				toggleActions:"play complete restart reverse"
			}
		})
	}
	render(){
	const color = this.props.color;
	const Content =styled.div`
		width: 400px;
		height: 400px;
		margin-top: -24px;
		background-image: url(${this.props.image});
		background-size: contain; 
		background-blend-mode: soft-light;
		background-color: ${props=> props.theme.colors[color]};
		animation: ${loop} 20s linear infinite;
	`

		return(
			<Column>
				<Labels>
					<CounterSmol val={this.props.val} />
					<Title>{this.props.title}</Title>
				</Labels>
				<Inner ref={this.ref}>
					<Content />
				</Inner>
			</Column>
		)
	}
}

export default AnimatedColumn