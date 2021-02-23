import React, { Component } from "react"
import Lottie from "react-lottie-player"
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


 class TriggeredLoopLottie extends Component{

	constructor(props){
		super(props);
		this.state = {
			play: false ,
		}
		this.ref = React.createRef();
	}

  	triggerAnim = () => {
    this.setState({play:true})
  }
  
	stopAnim = () => {
    this.setState({play:false})
  }

  componentDidMount(){

		ScrollTrigger.create({
			trigger: this.ref.current,
			start: 'top center',
			onEnter: this.triggerAnim,
			onLeaveBack: this.stopAnim
		})

  }
	render(){
		return(
			<div ref={this.ref}>
				<Lottie 
						height = { this.props.height }
						width = { this.props.width }
						play = {this.state.play}
						animationData = {this.props.animation}
						loop={true}
						segments = {[[0,20],[20,40]]} />
			</div>

		)

	}//render
}

export default TriggeredLoopLottie
