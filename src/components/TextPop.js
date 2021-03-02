import React, { Component } from "react"
import styled from "@emotion/styled"
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {keyframes } from '@emotion/react'

gsap.registerPlugin(ScrollTrigger)

class TextPop extends Component{

	constructor(props){
		super(props);
		this.state = {
			pop: false
		}
		this.ref = React.createRef();
	}


	popUp = () => {this.setState({pop:true})}
	fallDown = () => {this.setState({pop:false})}

	 componentDidMount(){
		ScrollTrigger.create({
			trigger: this.ref.current,
			start: 'top center',			
			end: 'top top',
			onEnter: this.popUp,
			onLeave: this.fallDown
		})
	  }

	render(){

		const color = this.props.color;

		const  popAnim = keyframes`
			50%  {transform: scale(1.2) translate(0px, -2px);
			text-shadow: 4px 10px 20px ${props => props.theme.colors[color]}
			};
		`
		const  popFlare = keyframes`
			50%  {transform: scale(1.7) translate(0px, -10px) ;
			text-shadow: 0px 0px 20px ${props => props.theme.colors[color]};
			}
			80% {
				opacity: 0;
			}
			100% {
				opacity: 0;
			}
		`

		const Pop = styled.span`
			display: inline-block;
			color: ${props => props.theme.colors[color]};
     		animation: ${this.state.pop ? popAnim : ''} 1.2s ease ;
     		&:before{
     			content: '${this.props.children}';
     			position: absolute;
     			opacity: .3;
         		animation: ${this.state.pop ? popFlare : ''} 1s ease  			
     		}
			`

	return <Pop ref={this.ref}>{this.props.children}</Pop>
	}
}


TextPop.defaultProps = {
	color: 'white'
}

export default TextPop