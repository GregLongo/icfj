import { React, useRef, useEffect} from "react"
import styled from "@emotion/styled"
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)

const PendantContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	overflow-x: hidden;
`

const Pendant = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: #149EE7;
width: fit-content;
height: 80px;
position: relative;
font-size: 3em;
padding-left: 96px;
padding-right: 96px;
&:after{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #149EE7;
	transform-origin: 100% 0;
	transform: skew(-25deg);
	z-index: -1;
}
`

export default function TriggeredPendantRight(props){
		
		const ref = useRef(null);
		useEffect(()=>{
			gsap.from(ref.current,{
					x: '115%',
					duration: .5,
					scrollTrigger:{
						trigger:ref.current,
						start: "bottom bottom",
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

