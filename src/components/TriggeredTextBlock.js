import React, {  useRef, useEffect } from "react"
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function TriggeredTextBlock(props){
		
		const ref = useRef(null);
		useEffect(()=>{
			gsap.from(ref.current,{
					opacity: 0,
					duration: 2,
					scrollTrigger:{
						trigger:ref.current,
						start: 'top center',
						end: 'top top',
					    toggleActions: 'play complete none reverse',
						}
					}
				)
		})
		return(
			<div ref={ref} className={props.className}>
				{props.children}
			</div>
		)
}

