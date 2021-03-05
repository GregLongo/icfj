import { React, useRef, useEffect } from "react"
import styled from "@emotion/styled"
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"
import facepaint from 'facepaint'

gsap.registerPlugin(ScrollTrigger)

const PendantContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	overflow-x: visible;
`
export default function TriggeredPendantRight(props){
	const color = props.color;
	const mq = facepaint(
			props.bp.map(bp => `@media (min-width:${bp})`)
		);
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
	${mq({
		fontSize: ['1.5em','1.5em', '3em', '3em'],
		paddingLeft: ['1em','1em','3em']
	})}
	&:after{
		content: '';
		position: absolute;
		top: 0;
		right: -160%;
		width: 260%;
		height: 100%;
		background: ${(props) => props.theme.colors[color]};
		transform-origin: 100% 0;
		transform: skew(-25deg);
		z-index: -1;
	}
	`

		
		const ref = useRef(null);
		useEffect(()=>{
			gsap.from(ref.current,{
					x: '260%',
					duration: .5,
					scrollTrigger:{
						trigger:ref.current,
						start: "top center",
						end: "top top",
						toggleActions:"play complete reverse reset"
						}
					}
				)
		})
		return(
			<PendantContainer>
				<Pendant  ref={ref} >
					{props.children}
				</Pendant>
			</PendantContainer>
		)
}

