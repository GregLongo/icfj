import React, { Component } from "react"
import styled from "@emotion/styled"
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Pop = styled.span`
	color: pink;
`

class TextPop extends Component{
  
  	constructor(props){
        super(props);
        this.ref = React.createRef();
        }
  	 componentDidMount(){
      ScrollTrigger.create({
        trigger: this.ref.current,
        start: 'top center',			
        markers: true
      })
	  }
    render(){
      return(
        <Pop ref={this.ref} className="pop">{this.props.children}</Pop>
      
      )
      
    }
  
  }


export default TextPop