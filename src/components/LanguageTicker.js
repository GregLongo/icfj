import React from 'react'
import styled from '@emotion/styled'
import Marquee from 'react-double-marquee'



export default function LanguageTicker(props){

	const Ticker = styled.div`
	    white-space: nowrap;
	    overflow-x: hidden;	
	    background: deeppink;
		padding-top: 24px;
		padding-bottom: 24px;
	`
	// const Languages = styled(Marquee)`

	// `
	return <Ticker>
				<Marquee>{props.children}</Marquee>
			</Ticker>
}