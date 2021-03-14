import {React, useRef, useEffect } from "react"
import styled from "@emotion/styled"
import Icon from "../svg/quote.svg"
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"
import facepaint from 'facepaint'

gsap.registerPlugin(ScrollTrigger)

export default function Quote(props){

	const mq = facepaint(
			props.bp.map(bp => `@media (min-width:${bp})`)
		);
	
	const Text = styled.div`
		font-family: interstate;
		padding-left: 4rem;
		z-index: 2;
		color: ${props.light ? 'white' : ''};
		${mq({
			fontSize: ['1.5em', '1.5em', '2em', '2.5em']		
		})}
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
						start: "top 75%",
						end: "top top",
						toggleActions:"play complete reverse reset",
						markers: false
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

