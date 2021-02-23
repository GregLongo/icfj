import { React, useRef, useEffect} from "react"
import styled from "@emotion/styled"
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)

const HeadlineContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: bold;
	font-size: 4em;
	text-transform: uppercase;
	text-align: right;
	padding-right: 96px;
	padding-top: 24px;
	line-height: 1;
`

const HeadlineWhite = styled.div`
	color: white;
	z-index: 1;
`
const HeadlineBlack = styled.div`
	color: black;
	z-index: 2;
	margin-top: -8px;
	opacity: 0;
`



export default function TriggeredHeadline(props){
		
		const boop = useRef(null);

		useEffect(()=>{
			gsap.to(boop.current,{
					opacity: 1,
					y: '-35%',
					// duration: 2,
					scrollTrigger:{
						trigger:boop.current,
						start: "top 75%",
						toggleActions:"play complete reverse reverse",
						scrub: true
						}
					}
				)
		})
		return(
			<HeadlineContainer >
				<HeadlineWhite  >
					{props.heading}
				</HeadlineWhite>
				<HeadlineBlack ref={boop} >
					{props.subheading }
				</HeadlineBlack>
			</HeadlineContainer>
		)
}

