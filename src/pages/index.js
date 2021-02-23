/** @jsx jsx */

import {Global, css , jsx} from "@emotion/react"
import styled from "@emotion/styled"
import ScrubbedLottie from "../components/ScrubbedLottie.js"
import TriggeredLottie from "../components/TriggeredLottie.js"
import TriggeredTextBlock from "../components/TriggeredTextBlock.js"
import WorldMap from "../components/WorldMap.js"
import MenuSlant from "../components/MenuSlant.js"
import PhotoGridSlant from "../components/PhotoGridSlant.js"
import TriggeredPendantRight from "../components/TriggeredPendantRight.js"
import TriggeredHeadline from "../components/TriggeredHeadline.js"
import animationData1 from '../lotties/piechart.json'
import animationCameras from "../lotties/cameras.json"
import animationMasthead from "../lotties/testchicken7.json"

import ParagraphSlant from "../components/ParagraphSlant.js"
import PhotoSlant from "../components/PhotoSlant.js"
import TriggeredBgColor from "../components/TriggeredBgColor.js"
import Highlighter from "../components/Highlighter.js"
import TriggeredCounter from "../components/TriggeredCounter.js"
import TextPop from "../components/TextPop.js"
import TriggeredLoopLottie from "../components/TriggeredLoopLottie.js"
import LanguageTicker from "../components/LanguageTicker.js"
import AnimatedColumn from "../components/AnimatedColumn.js"
import DonutFloat from "../components/DonutFloat.js"
import UncontrolledLottie from "../components/UncontrolledLottie.js"

const desktop = `@media(min-width : 1200px)`;

// const bg = "url(https://www.icfj.org/sites/default/files/styles/scale_485px_height/public/2018-04/IMG_0010%20%282%29%20copy.JPG?itok=HF-1lobL)"


const Container  = styled.div`
	display: grid;
	top: 0;
	justify-content: start;
	grid-template-columns: repeat(1, 1fr);
	align-items: center;
	padding: 0 10rem 0 10rem;
	height: 50em;
	${desktop}{
		grid-template-columns: repeat(2, 2fr);
	}
`


export default function Home() {


	return (
		<div>
			<Global styles={css`

				`}
			/>
			<DonutFloat donuts={10} />
			<MenuSlant />
			<div
				css={css`
					height: 50em;

					color: white;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					`} >
					<TriggeredBgColor color='#fff' />
					<UncontrolledLottie animation={animationMasthead}/>
			</div>
			<div>
				<TriggeredPendantRight>Section Title</TriggeredPendantRight>
				<TriggeredHeadline
					heading='Lorem Isum Dolor it Amet'
					subheading='Redonculum Rex'
				/>
			</div>
			<TriggeredBgColor color='#DDAF24' />
			<Container>
				<TriggeredLoopLottie
					width={400}
					height={400}
					animation={animationData1}
				 />
				<TriggeredTextBlock>
					<h1>This is Title </h1>
					<p>	While publications reporting the news to the general public in a standardized fashion only beganto appear in the 17th century and later, governments as early as Han dynasty China made use of regularly published news bulletins. These bulletins, however, were intended only for government officials, and thus were not journalistic news publications in the modern sense of the term.
					</p> 
				</TriggeredTextBlock>
			</Container>
			<TriggeredBgColor color='#149EE7' />
			<div
				css={css`
					`} >
					<WorldMap />
					<TriggeredLottie animation={animationCameras} loop={true} />
			</div>
			<Container>
				<TriggeredTextBlock>
					<h1>This is Title </h1>
					<p>	While publications reporting the news to the general public in a standardized fashion only beganto appear in the 17th century and later, governments as early as Han dynasty China made use of regularly published news bulletins. These bulletins, however, were intended only for government officials, and thus were not journalistic news publications in the modern sense of the term.
					</p> 
				</TriggeredTextBlock>
				<ScrubbedLottie
					width={400}
					height={400}
					animation={animationData1}
				 />
			</Container>
						<TriggeredBgColor color='#4E954B' />
			<div
				css={css`
					height: 50em;
					`} />
			<PhotoGridSlant />
			<div css={css`
				 display: flex;
				`}>
			<div css={css`
				width: 50vw;
				`}><PhotoSlant src="bridge.jpg" right /></div>
			<ParagraphSlant css={css`
				`}>
				Chartbeat tweets <Highlighter>WordPress Colbert</Highlighter> bump discuss <TextPop>Dan Fleckner</TextPop> recontextualize Facebook, curmudgeon tablets linking inverted pyramid TBD gutter libel lawyer, the medium is the <TextPop>message masthead</TextPop> digital first syndicated natural-born blogger kitchen table of the future. in the slot Pulse metered model rubber cement Julian Assange linkbait data <TextPop>journalism</TextPop> iPhone app backpack journalist tablets newsonomics, backpack journalist audience atomization overcome newsonomics got drudged bloggers in their mother's basement Jurgen Habermas the medium is the message backpack journalist experiment Jay Rosen, linkbait retweet every dog loves food <Highlighter>linkbait newspaper shoot </Highlighter>a photo AP Pictures of Goats section the medium is the massage.
			</ParagraphSlant>
			</div>
			<Container>
			<TriggeredCounter val='2000'/>

			</Container>
			<div css={css`
				display: flex;
				margin-bottom: 300px;
			`}>
			<AnimatedColumn
				 image="https://media.istockphoto.com/vectors/seamless-pattern-with-donuts-vector-id606711392"
				 color="#DDAF24"
				 title='donuts'
				 val='200'
				 />
			<AnimatedColumn
				 image="https://media.istockphoto.com/vectors/seamless-pattern-with-donuts-vector-id606711392"
				 color="#149EE7"
				title='donuts'
				val='200'
				 />
				 <AnimatedColumn
				 image="https://media.istockphoto.com/vectors/seamless-pattern-with-donuts-vector-id606711392"
				 color="#47609F"
				 title='donuts'
				 val='200'
				 />
				 <AnimatedColumn
				 image="https://media.istockphoto.com/vectors/seamless-pattern-with-donuts-vector-id606711392"
				 color="#D44934"
				 title='donuts'
				 val='200'
				 />
			</div>
			<LanguageTicker>While publications reporting the news to the general public in a standardized fashion only beganto appear in the 17th century and later, governments as early as Han dynasty China made use of regularly published news bulletins. These bulletins, however, were intended only for government officials, and thus were not journalistic news publications in the modern sense of the term.
</LanguageTicker>
		</div>	
	)
}
