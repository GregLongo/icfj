import {React, useRef, useEffect } from "react"
import styled from "@emotion/styled"
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function FrameEmbed(props){
		
		const mobile = props.bp[1];

		const FrameContainer =styled.div`

		`
		const Frame =styled.div`
			position: relative;
			height:0
			iframe{
			  position: absolute;
			  top: 0;
			  left: 0;
			  width: 100%;
			  height: 100%;	
			}
		`
		const Caption =styled.div`
			width: 100%;
		`
		const Text =styled.div`
			display: inline;
			color: white;
			font-family: Interstate Condensed;
			margin: 1em;
			font-size: 1em;
			@media(min-width: ${mobile}){
				font-size: 1.5em;
			}
		`
		const buttonColor = props.buttonColor;
		const Button = styled.button`
			height: 64px;
			width: 64px;
			display: inline;
			background: ${props=>props.theme.colors[buttonColor]};
			border: none;
		`
		const ref = useRef();

		useEffect(()=>{
			gsap.from(ref.current,{
					opacity: 0,
					scrollTrigger:{
						trigger:ref.current,
						start: "top center",
						toggleActions:"play complete none reverse",
						}
					}
				)
		})


	return(
		<FrameContainer ref={ref} className={props.className}>
			<Caption><Button /><Text>{props.caption}</Text></Caption>
			<Frame>
				{props.children}
			</Frame>
		</FrameContainer>
	) 	
}

