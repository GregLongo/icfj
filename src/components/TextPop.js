import React, { Component } from "react"
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {keyframes, css} from '@emotion/react'

gsap.registerPlugin(ScrollTrigger)

class TextPop extends Component{

	constructor(props){
		super(props);
		this.state = {
			pop: false
		}
		this.ref = React.createRef();
	}

	createTriggers(){
			ScrollTrigger.refresh();
			ScrollTrigger.create({
			trigger: this.ref.current,		
			start: 'top center',
			end:'bottom top',
			toggleActions:'play complete reverse reset',
			onEnter: () => {this.setState({pop:true})},
			onLeave: () => {this.setState({pop:false})},
			markers: false
		})	
	}
	 componentDidMount(){
		this.createTriggers();
	  }

	render(){
		const color = this.props.color
		const  popAnim = keyframes`
			50%  {transform: scale(1.2) translate(0px, -2px);
			text-shadow: 4px 10px 20px ${color}}
			};
		`
		const  popFlare = keyframes`
			50%  {transform: scale(1.7) translate(0px, -10px) ;
			text-shadow: 4px 10px 20px ${color};
			}
			80% {
				opacity: 0;
			}
			100% {
				opacity: 0;
			}
		`

		const pop = css`
			display: inline-block;
			color: ${color};
     		animation: ${this.state.pop ? popAnim : ''} 1.2s ease ;
     		&:before{
     			content: '${this.props.children}';
     			position: absolute;
     			opacity: .3;
         		animation: ${this.state.pop ? popFlare : ''} 1s ease  			
     		}
			`

	return <span className={this.props.className} css={css`${pop}`} ref={this.ref}>{this.props.children}</span>
	}
}

TextPop.defaultProps = {
	color: 'white'
}

export default TextPop