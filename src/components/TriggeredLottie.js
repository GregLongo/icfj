import React, { Component } from "react"
import Lottie from "react-lottie"
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {css} from "@emotion/react"

gsap.registerPlugin(ScrollTrigger)


 class TriggeredLottie extends Component{

	constructor(props){
		super(props);
		this.state = {
			isStopped: true ,
			isPaused: false
		}
		this.ref = React.createRef();
	}

  	triggerAnim = () => {
    this.setState({isStopped:false})
  }
  
	stopAnim = () => {
    this.setState({isStopped:true})
  }

  componentDidMount(){

		ScrollTrigger.create({
			trigger: this.ref.current,
			start: 'top center',
			end: 'bottom top',
			onEnter: this.triggerAnim,
			onLeaveBack: this.stopAnim,
			toggleActions:'play complete reverse reset',
			markers: false
		})

  }
	render(){

		const defaultOptions = {
			autoplay: false,
			loop: this.props.loop,
			animationData: this.props.animation,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice'
			}
			
		};

		return(
			<div css={css`@media(max-width:480px){transform: scale(1.5)}`} ref={this.ref} className={this.props.className}>
				<Lottie options = { defaultOptions } 
						isStopped = {this.state.isStopped}
				/>
			</div>

		)

	}//render
}

export default TriggeredLottie
