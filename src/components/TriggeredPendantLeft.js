import { React, useRef, useEffect} from "react"
import styled from "@emotion/styled"
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)

const PendantContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	overflow-x: visible;
`
export default function TriggeredPendantRight(props){
	const color = props.color;
	const Pendant = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-family: ubuntu;
	background: ${props => props.theme.colors[color]};
	width: fit-content;
	height: 80px;
	position: relative;
	font-size: 3em;

	padding-right: 96px;
	&:after{
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 200%;
		height: 100%;
		background: ${props => props.theme.colors[color]};
		transform-origin: 0 100%;
		transform: skew(-25deg);
		z-index: -1;
	}
	`

		
		const ref = useRef(null);
		useEffect(()=>{
			gsap.from(ref.current,{
					x: '-115%',
					duration: .5,
					scrollTrigger:{
						trigger:ref.current,
						start: "bottom bottom",
						end: "top top",
						toggleActions:"play complete reverse reverse"
						}
					}
				)
		})
		return(
			<PendantContainer>
				<Pendant ref={ref} >
					{props.children}
				</Pendant>
			</PendantContainer>
		)
}

