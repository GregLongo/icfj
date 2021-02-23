import { React, useRef, useEffect} from 'react'
import styled from "@emotion/styled"
import gsap from "gsap"
import donut from '../images/donut.svg'




export default function Donut(){

	const OneDonut = styled.div`
		height: 200px;
		width: 200px;
		position: absolute;
		background-image: url(${donut});
		z-index: 1;
	`
	const ref = useRef(null)
		useEffect(()=>{
		gsap.fromTo(ref.current,100,{
			rotation: 'random(0,100)',
			x: 'random(0,'+(window.innerWidth-200)+')',		
			y: 'random(0,10000)',												
		},
		{
		rotation: 'random(0,100)',
			x: 'random(0,'+(window.innerWidth-200)+')',		
			y: 'random(0,10000)',												
			repeat: -1,				
		})
	})
	
	return <OneDonut ref={ref} />
}