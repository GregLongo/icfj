import React, { Component } from "react"
import Lottie from "react-lottie-player"
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


 class TriggeredLottie extends Component{

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
			<div ref={this.ref} className={this.props.className}>
				<Lottie 
						play = {this.state.play}
						autoPlay= {false}
						animationData= {this.props.animation}
						loop={this.props.loop}
				/>
			</div>

		)

	}//render
}

export default TriggeredLottie
