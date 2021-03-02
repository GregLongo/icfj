import {React, useRef, useEffect } from "react"
import styled from "@emotion/styled"
import Icon from "../images/quote.svg"
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Quote(props){

	const Text = styled.div`
		font-family: interstate;
		font-size: 2.5em;
		font-weight: bold;
		padding-left: 4rem;
		z-index: 2;
		color: ${props.light ? 'white' : ''};
		font-style: italic;
	`
	const QuoteContainer = styled.div`
		height: fit-content;
		display: flex;
		align-items: center;
	`

	const QuoteIcon = styled(Icon)`
		position: absolute;
		z-index: 1;
	`

		const ref = useRef();

		useEffect(()=>{
			gsap.from(ref.current,{
					opacity: 0,
					y: '4rem',
					scrollTrigger:{
						trigger:ref.current,
						start: "top center",
						end: "top top",
						toggleActions:"play complete reverse reverse",
						}
					}
				)


		})


	return(
		<QuoteContainer  ref={ref} className={props.className}>
			<QuoteIcon />
			<Text>
				{props.children}
			</Text>
		</QuoteContainer>
	) 	
}

