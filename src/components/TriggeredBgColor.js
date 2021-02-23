import { React, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function TriggeredBgColor(props){
	const ref = useRef(null);
	useEffect(()=>{
		const color= props.color;
		ScrollTrigger.create({
		trigger: ref.current,
		start:'top center',
		onEnter: () => gsap.to(document.body, {backgroundColor:color, duration: 1}),  
		onEnterBack: () => gsap.to(document.body, {backgroundColor:color, duration: 1}),  
		// markers:true
		});
	})
	return <div ref={ref} />
}