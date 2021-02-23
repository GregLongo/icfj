import { React, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled from '@emotion/styled'
// 
gsap.registerPlugin(ScrollTrigger)

export default function Highlighter(props){
	const Highlighted = styled.span`
  			background-image: linear-gradient(#ffd900, #ffd900);
			background-repeat: no-repeat;
			background-position: 0% 100%;
			background-size: 0%  100%;	
			  `
	const ref = useRef(null);
	useEffect(()=>{
		gsap.to(ref.current,{
			backgroundSize: "100% 100%",
			duration: .3,
			scrollTrigger:{
				trigger:ref.current,
				start: "top center",
				toggleActions:"play complete reverse reverse"		,
				// markers:true		
			}
		})
	})
	return <Highlighted ref={ref}> {props.children}</Highlighted>
}