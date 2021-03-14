import React, {  Component } from 'react'
import styled from '@emotion/styled'
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TriggeredCounter from "../components/TriggeredCounter.js"
import {keyframes } from '@emotion/react'
import facepaint from 'facepaint'

gsap.registerPlugin(ScrollTrigger)

const loop = keyframes`
	from { background-position: 0 0; }
    to { background-position: -400px 0; }
`

const Inner = styled.div`
	position: absolute;
	clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
	clip:rect(0px,100%,100%,0px);
	width: 100%;
	height: 100%;
	white-space: nowrap;
	background-color: hotpink;
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



class AnimatedColumn extends Component{
	constructor(props){
		super(props);
		this.ref = React.createRef();
	}
	componentDidMount(){
		gsap.from(this.ref.current,{
		clip:"rect(100%,100%,100%,0px)",
		duration: 1,
		scrollTrigger:{
				trigger:this.ref.current,
				// start: "top center",
				// toggleActions:"play complete none reverse",
				markers: false
			}
		})
	}
	render(){

	const mq = facepaint(
		this.props.bp.map(bp => `@media (min-width:${bp})`)
	);

	const color = this.props.color;
	const Content =styled.div`
		margin-top: -24px;
		background-image: url(${this.props.image});
		background-size: contain; 
		background-blend-mode: soft-light;
		background-color: ${props=> props.theme.colors[color]};
		animation: ${loop} 20s linear infinite;
		${mq({
			width: ['300px','400px','600px','800px'],
			height: ['300px','400px','600px','800px']
		})}
	`

	const Column = styled.div`
		position: relative;
		${mq({
			width: ['160px','160px','320px','480px'],
			height: ['160px','160px','320px','480px']
		})}
	`

	const CounterSmol = styled(TriggeredCounter)`
		padding-top: 25%;
		${mq({fontSize: ['2em','3em','3em','5em']})};
	`

	const Title= styled.div`
		${mq({fontSize: ['1em','1.5em','1.5em','3em']})};
	`

	const Sign = styled.span`
		position:absolute;
		${mq({
			fontSize: ['3em','3em','3em','5em'],
			transform: ['translate(50px, 65px)','translate(50px, 65px)','translate(50px, 85px)','translate(90px, 120px)']
		})};
	`

		return(
			<Column>
				<Labels>
					<CounterSmol val={this.props.val} /><Sign>{this.props.sign}</Sign>
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