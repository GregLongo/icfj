/** @jsx jsx */

//Libraries
import { Global, css, jsx, ThemeProvider} from "@emotion/react"
import styled from "@emotion/styled"
import facepaint from 'facepaint'

//UI
import Header from "../components/Header.js"
import PendantLeft from "../components/PendantLeft.js"
import TriggeredPendantRight from "../components/TriggeredPendantRight.js"
import TriggeredPendantLeft from "../components/TriggeredPendantLeft.js"
import TriggeredTextBlock from "../components/TriggeredTextBlock.js"
import TriggeredHeadline from "../components/TriggeredHeadline.js"
import PhotoSlant from "../components/PhotoSlant.js"
import ParagraphSlant from "../components/ParagraphSlant.js"
import TextPop from "../components/TextPop.js"
import Highlighter from "../components/Highlighter.js"
import Quote from "../components/Quote.js"
import FrameEmbed from "../components/FrameEmbed.js"
import AnimatedColumn from "../components/AnimatedColumn.js"
import TriggeredCounter from "../components/TriggeredCounter.js"
import ImageQuery from "../components/ImageQuery.js"
import LanguageTicker from "../components/LanguageTicker.js"
import CountBox from "../components/CountBox.js"
import WinnerLeft from "../components/WinnerLeft.js"
import WinnerRight from "../components/WinnerRight.js"
import Wolf from "../components/Wolf.js"
import ReadMore from "../components/ReadMore.js"

//Animation Players
import UncontrolledLottie from "../components/UncontrolledLottie.js"
import TriggeredBgColor from "../components/TriggeredBgColor.js"
import TriggeredLottie from "../components/TriggeredLottie.js"

//Animations
import animationMasthead from "../lotties/testchicken7.json"
import animationCameras from "../lotties/cameras.json"
import animationPenPaper from "../lotties/penpaper.json"
import animationAudio from "../lotties/audio.json"
import animationTweet from "../lotties/tweet.json"
import animationAfrica from "../lotties/africa.json"
import animationAfrica2 from "../lotties/africa2.json"
import animationSouthAmerica from "../lotties/southamerica.json"
import animationPie from "../lotties/piechart.json"

//svg
import Platinum from "../images/platinum.svg"

//Themes
import theme from "../themes/theme.js"

// Constants, Queries

const smol = '200px',
	  mobile = '480px',
	  tablet = '1024px',
	  desktop ='1200px',
	  xl = '1920px';

const breakpoints = [ smol, mobile, tablet, desktop, xl];

const mq = facepaint(
	breakpoints.map(bp => `@media (min-width:${bp})`)
)

//Layout Styles 
const Container = styled.div`
	margin-right: auto;
	margin-left: auto;
	margin-top: 15rem;
	${mq({
	 maxWidth: ['90%','90%','90%','1024px'],
	 marginTop: ['5rem','5rem','15rem']
	})}
	&:first-of-type {
		margin-top: 0;
	}
`
const Section = styled.div`
	width: 100%;
`
const Subheader = styled.div`
	font-family: ubuntu;
	font-size: 3em;
`

export default function Home() {
	return (
		<div>
		<ThemeProvider theme={theme}>
		<Global styles={css`
			body,html{
				margin: 0;
				overflow-x: hidden;
				width: 100vw
			}
			`}
		/>
		<TriggeredBgColor color='white' />
		<Header bp={breakpoints}/>
		<PendantLeft bp={breakpoints} color="mineShaft">
			<div css={mq({
				fontFamily:'interstate condensed',
				fontSize: ['1em', '1.2em','1.5em','2.5em'],
				maxWidth: '130px',
				lineHeight: '1',
				fontWeight: '200',
				textAlign: 'center',
				wordSpacing: '999999px',
				paddingTop: '1rem ',
				paddingBottom: '1rem',
				paddingRight: ['1rem', '1rem', '1rem', '4rem'],
				paddingLeft: '0',
			})}>
				ANNUAL REVIEW
			</div>
			<span css={mq({
					paddingRight: '3rem',
					whiteSpace: 'noWrap',
					fontSize: ['1em', '2em','3em','4em']
			})}> 
				It Takes a Journalist 
			</span> 
		</PendantLeft>
		<Container css={mq({marginTop:['2rem','2rem','3rem'],marginBottom:'-1.2rem',maxWidth:['100%','100%','100%','1024px']})}>
			<UncontrolledLottie animation={animationMasthead}/>
		</Container>
		<TriggeredBgColor color='white' />
		<Section name="Mission" css={theme => ({background: theme.colors.mineShaft})}>
			<Container css={css`
				color: white;
				height: 40rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				text-align: left;
				margin-top: 0;
				margin-bottom: 5rem;			
				@media(min-width:${tablet}){
					margin-bottom: 15rem;		
				}	
				`}>
				<TriggeredTextBlock>
					<div css={mq({
						fontSize:['2em', '3em', '3em', '4em'],
						fontFamily:'ubuntu',
						linHeight:'2'})}
					>Mission</div>
					<div css={mq({
						fontSize:['1em', '1.75em', '2em'],
						fontFamily:'interstate condensed',
						lineHeight: 1.5}
					)}>We empower an unparalleled global network of journalists to produce news  reports that lead to better governments, stronger economies, more vibrant  societies and healthier lives.
					</div>
				</TriggeredTextBlock>
				<TriggeredBgColor color='goldenGrass' />
			</Container>
		</Section>
		<Section name="Joyce">
			<Container>
				<TriggeredPendantRight bp={breakpoints} color='curiousBlue'>
					A Letter From the President
				</TriggeredPendantRight>
				<div css={css`
					display: grid;
					grid-template-columns: 5% 95%;
					margin-bottom: 2rem;
					margin-top: 5rem;
					@media(min-width:${tablet}){
						margin-top: 15rem;		
					}
					`}>
					<PhotoSlant bp={breakpoints} css={css`transform:translatex(-35%)`} src="Joyce.jpg" />
					<ParagraphSlant bp={breakpoints}>
						<p css={css`margin-top:-.5rem`}>
						Over <TextPop>36 years</TextPop>, ICFJ has provided more than <TextPop>150,000 journalists</TextPop> from 180 countries with valuable programs and resources. But we’ve never had a <TextPop>year like 2020</TextPop>.
						</p>
						<p>						
						The pandemic that raged across the globe would have been much worse if journalists had not fulfilled their vital role of providing audiences with accurate, lifesaving news, and doing it while combating the spread of false information. 
						</p>
						<p>
						We at ICFJ are doing our best to help journalists better cover the story of the century. At the onset of COVID-19, we galvanized quickly to help them gain access to top epidemiologists and health practitioners, to the world’s best trainers in digital journalism techniques, to disinformation and media sustainability experts. As you’ll see below, tens of thousands of journalists are benefiting from that effort.
						</p>
						<ReadMore>
						<p>
							I'm a Placeholder for the Accordian
						</p>
						</ReadMore>
					</ParagraphSlant>
				</div>
			</Container>
			<TriggeredBgColor color='goldenGrass' />
		</Section>
		<Section name="Change">
			<TriggeredBgColor color='curiousBlue' />
				<TriggeredLottie css={css`opacity:0.5`} animation={animationCameras} loop={true} />
				<Container>
					<TriggeredPendantLeft bp={breakpoints} color="boulder">Our Vast Network </TriggeredPendantLeft>
					<div css={css`
						display:grid;
						grid-template-columns: 100%;	
						grid-column-gap: 4rem;
						margin-top: 4rem;
						@media(min-width:${tablet}){
							grid-template-columns: 70% 30%;
						}
						`
					}>
					<TriggeredHeadline bp={breakpoints}>Journalists<span css={css`color:#fff`}> Change The World</span></TriggeredHeadline>
					<TriggeredTextBlock css={css`
						color: white;
						font-family: interstate condensed;
						font-size: 1.5em;
						line-height: 2;
						`
					}>
						The thousands of journalists in our global network produce news reports that lead to better governments, economies, societies and lives.
					</TriggeredTextBlock>
					</div>
					<Quote bp={breakpoints} css={mq({
						height: ['20rem'],
						display:'flex',
						alignItems: 'center',
						width: 'fit-content',
						marginLeft:'auto',
						marginRight: 'auto'})
					}>
						 "ICFJ has helped us improve the lives of the poorest of the poor by bringing them reliable, crowdsourced news for the first time." - Devansh Mehta, CGNET Swara
					</Quote>
					<FrameEmbed bp={breakpoints}  buttonColor='goldenGrass'
						caption="ICFJ is giving reporters the skills to cover the most pressing issues of the day."
						 css={css`
						margin-top:4rem
						width: 100%;
						max-height: 600px;
						overflow: hidden;
						`}  >
						<iframe title='vidtwo' width='100%' height='570px' src="https://www.youtube.com/embed/f1SBTk3CXhI" frameBorder="0" allowFullScreen></iframe>
					</FrameEmbed>
					<FrameEmbed bp={breakpoints}  height='570px' buttonColor='goldenGrass'
						caption="ICFJ is giving reporters the skills to cover the most pressing issues of the day."
						 css={css`
						margin-top:4rem
						width: 100%;
						max-height: 600px;
						overflow: hidden;
						`}  >
						<iframe title='vidthree' width='100%' height='570px' src="https://www.youtube.com/embed/f1SBTk3CXhI" frameBorder="0" allowFullScreen></iframe>
					</FrameEmbed>
				</Container>
			<TriggeredBgColor color='curiousBlue' />
		</Section>
		<Section name="Resources">
				<TriggeredBgColor color='boulder' />
				<TriggeredLottie css={css`opacity:0.5`} animation={animationPenPaper} loop={true} />
				<Container>
					<TriggeredPendantRight bp={breakpoints} color="fruitSalad">New Resources </TriggeredPendantRight>
					<div css={css`
						margin-top: 4rem`
					}>
					<TriggeredHeadline bp={breakpoints} right><span css={css`color:#fff`}> Serving Journalists </span>In A Crisis</TriggeredHeadline>
					<TriggeredTextBlock css={css`
						color: white;
						font-family: interstate condensed;
						font-size: 1.25em;
						line-height: 2;
						text-align: right;
						@media(min-width:${mobile}){
							font-size: 1.7em;							
						}
						`}>ICFJ acted fast to help the journalists in our global network provide accurate,life-saving information on the COVID-19 pandemic. The program connects journalists with experts, information and each other in five languages,through weekly webinars, Facebook groups and resources published by our <Highlighter color="fruitSalad">International Journalists’ Network (IJNet).</Highlighter>
					</TriggeredTextBlock>
				</div>
				<FrameEmbed bp={breakpoints}  height='570px' buttonColor='fruitSalad'
						caption="ICFJ is giving reporters the skills to cover the most pressing issues of the day."
						 css={css`
						margin-top:4rem;
						width: 100%;
						max-height: 600px;
						overflow: hidden;
						`}  >
					<iframe title='vidfour' width='100%' height='570px' src="https://www.youtube.com/embed/f1SBTk3CXhI" frameBorder="0" allowFullScreen></iframe>
				</FrameEmbed>
				<div css={css`
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-row-gap: 3rem;
				margin-top: 15rem;
				@media(min-width:${tablet}){
					grid-template-columns: repeat(4, 1fr);					
				}
			`}>
			<AnimatedColumn
				bp={breakpoints}
				image="https://media.istockphoto.com/vectors/seamless-pattern-with-donuts-vector-id606711392"
				color="valencia"
				title='Forum Members'
				val='10200'
				 />
			<AnimatedColumn
				bp={breakpoints}
				image="https://media.istockphoto.com/vectors/seamless-pattern-with-donuts-vector-id606711392"
				color="goldenGrass"
				title='Countries'
				val='100'
				 />
				 <AnimatedColumn
				bp={breakpoints}
				image="https://media.istockphoto.com/vectors/seamless-pattern-with-donuts-vector-id606711392"
				color="curiousBlue"
				title='Languages'
				val='5'
				 />
				 <AnimatedColumn
				bp={breakpoints}
				image="https://media.istockphoto.com/vectors/seamless-pattern-with-donuts-vector-id606711392"
				color="sanMarino"
				title='Covid-19 Resources'
				val='840+'
				 />
			</div>
				<Quote bp={breakpoints} css={css`
						display:flex;
						align-items: center;
						width: fit-content;
						margin-left:auto;
						margin-right: auto;
						margin-top: 10rem;
						margin-bottom: 10rem;		
						@media(min-width:${tablet}){
						marginTop: 15rem;
						marginBottom: 15rem							
						}
					`}>
						“ICFJ gave me and my listeners a global perspective of how other countries were handling the pandemic. ” - Chidera Rosecamille Aneke, Darling FM
				</Quote>
				<div css={css`
					display: grid;
					grid-template-columns: repeat(2, auto);
					grid-column-gap: 2rem;
					grid-row-gap: 2rem;
				`}>
					<ImageQuery filename='Sid.jpg' />
					<ImageQuery filename='redshoes.jpg' />
					<ImageQuery filename='maskgirlcrop.png' />
					<ImageQuery filename='docwhite.png' />
					<ImageQuery filename='docblue.png' />
					<ImageQuery filename='agnes.png' />
				</div>
				<div css={css`color:white;margin-top:10rem;margin-bottom:10rem`}>
					<Subheader>The Go-To Site for Journalists WorldWide</Subheader>
					<p>Offering Expert Advice, Tools & Opportunities for Journalists</p>
				</div>
				<div css={css`width:60%; margin-right:auto;margin-left:auto`} >
					<ImageQuery filename='ijnet.png' />
				</div>
			</Container>
		<LanguageTicker css={css`margin-top:10rem;margin-bottom:10rem`}>Arabic Chinese English French Persian Portuguese Russian Spanish Arabic Chinese English French Persian Portuguese Russian Spanish Arabic Chinese English French Persian Portuguese Russian Spanish </LanguageTicker>
				<Container css={css`
					display:grid; 
					font-family: interstate condensed;
					grid-template-columns: 40% 60%;
					grid-column-gap: 2rem;
					@media(min-width:${tablet}){
						grid-template-columns: 2fr 20% 20% 40%;
					}
					div{
						transform: scale(.7);						
						text-align:center;
					}
					span{
						color: white;
						font-size: 2em;
					}
					`}>
					<div>
						<TriggeredCounter css={theme=>({color:theme.colors.white})} val={8} />
						<span>Languages</span>
					</div>
					<div>
						<TriggeredCounter css={theme=>({color:theme.colors.goldenGrass})} val={99} />
						<span>Countries</span>
					</div>
					<div>
						<TriggeredCounter css={theme=>({color:theme.colors.curiousBlue})} val={99} />
						<span>Resources</span>
					</div>
					<div>
						<TriggeredCounter css={theme=>({color:theme.colors.fruitSalad})}val={182000} />
						<span>Average Monthly Visitors</span>
					</div>
				</Container>
				<TriggeredBgColor color='boulder' />
		</Section>
		<Section>
			<TriggeredBgColor color='fruitSalad' />
			<TriggeredLottie css={css`opacity:0.5`} animation={animationAudio} loop={true} />
			<Container>
				<TriggeredPendantLeft bp={breakpoints} color="mineShaft">Investigative Networks</TriggeredPendantLeft>
				<div css={css`
					margin-top: 4rem`
				}>
				<TriggeredHeadline bp={breakpoints}><span css={css`color:#fff`}> Holding the Powerful to Account</span> When It Matters Most </TriggeredHeadline>
				</div>
				<Subheader>Journalism with Impact </Subheader> 
				<div css={css`
					display: grid;
					grid-template-columns: 5% 95%;
					margin-top: 5rem;
					margin-bottom:0;					
					@media(min-width:${tablet}){
						margin-top: 10rem;
					 	margin-bottom: -25vh;
					}
				`}>
					<PhotoSlant  bp={breakpoints} css={css`transform:translatex(-35%)`}src="Fabiola.jpg" />
					<ParagraphSlant bp={breakpoints} css={css`
						
						`}>
						Peru-based <span css={theme=>({color:theme.colors.goldenGrass})}>ICFJ Knight Fellow Fabiola Torres</span> created a health news outlet that is uncovering corruption during COVID-19. They exposed inflated prices for face shields, environmental violations by corporations and wasted protective gear spending,prompting government action.
					</ParagraphSlant>
				</div>
				<ImageQuery filename='bigeye.jpg' />
				<div css={css`margin-top: 5rem;color:white`}>
					<div css={css`
						color: white;
						`
					}>
						<Subheader>More from Journalists in the ICFJ Network</Subheader>
						<div css={css`
								color: white;
								font-family: interstate condensed;
								font-size: 1.25em;
								line-height: 2;
								@media(min-width:${mobile}){
									font-size: 1.7em;							
								}
							`
						}>
							<p>
								Stories by ICFJ partner, the Organized Crime and Corruption Reporting Project (OCCRP), based in Eastern Europe, have co tributed to more than <span css={theme=>({color:theme.colors.mineShaft})}>$7.3 billion in illicitly acquired funds </span>that have since been recovered.
							</p>
							<p>Journalists in the Latin-American Connectas network, which  ICFJ helped launch, have produced more than <TextPop color="#DDAF24">27/4 in-depth stories</TextPop> exposing is managementof billions of dollars in public funds.
							</p>
						</div>
					</div>
				</div>

			</Container>
			<TriggeredBgColor color='fruitSalad' />
		</Section>
		<Section name="Networks">
			<TriggeredBgColor color='mineShaft' />
			<TriggeredLottie css={css`opacity:0.5`} animation={animationCameras} loop={true} />
			<Container>
				<TriggeredPendantRight bp={breakpoints} color="sanMarino">Investigative Networks</TriggeredPendantRight>
				<div css={css`
					margin-top: 4rem`
				}>
				<TriggeredHeadline bp={breakpoints} right ><span css={css`color:#999`}>Pioneering New Ways To <span css={css`color:#fff`}> Get the Truth Out</span> in a Pandemic</span></TriggeredHeadline>
				</div>
				<div css={css`
					display: grid;
					margin-top: 15rem;
					height: 560px;
					grid-template-columns: 50% 50%;
					@media(min-width${tablet}){
						grid-template-columns: 40% 60%;						
					}
				`}>
				<div>
					<PhotoSlant bp={breakpoints}  css={css`
						z-index: 1;
						transform:translatex(-15%);						
						@media(min-width${tablet}){
							transform:translatex(-35%);						
						}
					`}
						src="Hannah.jpg" />
					<TriggeredLottie
					 animation={animationAfrica}
					 loop={false}
					 css={css`
					 	transform: translate(20%, -50%);
					 	z-index: -1;
					`} />					
				</div>
				<TriggeredTextBlock css={mq({
					zIndex: '2',
					color: 'white',											
					fontFamily: 'interstate condensed',
					fontSize: ['1em', '1.2em', '1.5em'],
					lineHeight: ['1','1.5','2'],
					textAlign: 'left',
					marginTop:['1em','2em','4em']})
				}>Journalists, fact checkers and social media influencers ––	including a government minister	and Nollywood star -- are teaming up to combat misinformation about health and other issues that matter	to people’s lives, a project led by <span css={theme=>({color:theme.colors.valencia})}>ICFJ Knight Fellow Hannah Ajakaiye.</span>
				</TriggeredTextBlock>
				</div>
				<div css={css`
					display: grid;
					margin-top: 5rem;
					height: 560px;
					grid-template-columns: 50% 50%;
					@media(min-width${tablet}){
						grid-template-columns: 40% 60%;						
					}
				`}>

				<TriggeredTextBlock css={mq({
					zIndex: '2',
					color: 'white',											
					fontFamily: 'interstate condensed',
					fontSize: ['1em', '1.2em', '1.5em'],
					lineHeight: ['1','1.5','2'],
					textAlign: 'right',
					paddingTop:['1em','2em','4em']})
				}>
						Women journalists and data analysts from five countries shed light on marginalized groups -- such as domestic workers and HIV/AIDS patients -- hardest hit by the pandemic, as part of the Africa Women’s Journalism Project, led by <span css={theme=>({color:theme.colors.goldenGrass})}>ICFJ Knight Fellow Catherine Gicheru.</span>
				</TriggeredTextBlock>
				<div>
				<PhotoSlant right bp={breakpoints} css={css`
						z-index: 1
						transform:translatex(15%);						
						@media(min-width${tablet}){
							transform:translatex(35%);						
						}
					 `}
					 src="Catherine.jpg" />
					<TriggeredLottie
					 animation={animationAfrica2}
					 loop={false}
					 css={css`
					 	transform: translate(-20%, -50%);
					 	z-index: -1;
					 `} />					
				</div>
				</div>
				<div css={css`
					display: grid;
					margin-top: 5rem;
					grid-template-columns: 50% 50%;
					@media(min-width${tablet}){
						grid-template-columns: 40% 60%;						
					}
				`}>
				<div>
					<PhotoSlant bp={breakpoints} css={css`
						z-index: 1;
						transform:translatex(-15%);						
						@media(min-width${tablet}){
							transform:translatex(-35%);						
						}`}
						src="Sergio.jpg" />
					<TriggeredLottie
					 animation={animationSouthAmerica}
					 loop={false}
					 css={css`
					 	transform: translate(20%, -50%);
					 	z-index: -1;
					 `} />					
				</div>
				<TriggeredTextBlock css={mq({
					zIndex: '2',
					color: 'white',											
					fontFamily: 'interstate condensed',
					fontSize: ['1em', '1.2em', '1.5em'],
					lineHeight: ['1','1.5','2'],
					textAlign: 'left',
					paddingTop:['1em','2em','4em']})
				}>
						Journalists can more quickly find expert sources of scientific information thanks to Science Pulse, a free tool created by a <span css={theme=>({color:theme.colors.sanMarino})}>ICFJ Knight Fellow ergio Spagnuolo </span>that features the latest updates from more than 1,300 verified scientists and scientific organizations tweeting in English, Portuguese and Spanish.
				</TriggeredTextBlock>
				</div>
			</Container>
			<TriggeredBgColor color='mineShaft' />
		</Section>
		<Section name="Sustainability">
			<TriggeredBgColor color='sanMarino' />
			<TriggeredLottie css={css`opacity:0.5`} animation={animationTweet} loop={true} />
			<Container>
				<TriggeredPendantLeft bp={breakpoints} color="valencia">Sustainability</TriggeredPendantLeft>
				<div css={css`
					margin-top: 4rem`
				}>
				<TriggeredHeadline bp={breakpoints}><span css={css`color:#999`}>Helping</span> <span css={css`color:#fff`}>Independent News Thrive</span></TriggeredHeadline>
				</div>
				<TriggeredTextBlock css={css`
						color: white;
						font-family: interstate condensed;
						font-size: 1.25em;
						line-height: 2;
						@media(min-width:${mobile}){
							font-size: 1.7em;							
						}
						`
					}>Even in a year as devastating as COVID-19, we helped newsrooms in 32 countries strengthen their bottom lines.
				</TriggeredTextBlock>
				<div css={css`margin-top:5rem`}>
					<ImageQuery css={css`height: 510px`} filename='conference.jpeg' />
					<div css={css`
							color: white;
							font-family: interstate condensed;
							font-size: 1.2em;
							line-height: 2;
							padding-top: 1em;
							padding-left: 2rem;
							padding-right: 2rem;`
						}>
						Media entrepreneurs in the Middle East and North Africa who have taken their media startups to the next level through our <Highlighter color="goldenGrass">IJNet Mentoring Center</Highlighter>, supported by the National Endowment for Democracy over the past six years.
					</div>
				</div>
				<div css={css`margin-top:5rem`}>
					<ImageQuery css={css`height: 510px`} filename='bigeye.jpg' />
					<div css={css`
							color: white;
							font-family: interstate condensed;
							font-size: 1.2em;
							line-height: 2;
							padding-top: 1em;
							padding-left: 2rem;
							padding-right: 2rem;`
						}>
						Registered users that local newsrooms in Brazil added while participating in the <Highlighter color="curiousBlue">Local News Accelerator</Highlighter> with ICFJ and the Facebook Journalism Project. It is one of several initiatives across the world between ICFJ and FJP helping newsrooms solve business challenges.
					</div>
				</div>
				<div css={css`margin-top:5rem`}>
					<ImageQuery css={css`height: 510px`} filename='Pitazo.jpeg' />
					<div css={css`
							color: white;
							font-family: interstate condensed;
							font-size: 1.2em;
							line-height: 2;
							padding-top: 1em;
							padding-left: 2rem;
							padding-right: 2rem;`
						}>
						New revenue generated in just six months by 10 Latin American participating in Velocidad, an accelerator program with ICFJ and SembraMedia, supported by Luminate Group. They did it primarily through paid content, advertising and other client services -- and it’s just the beginning.
					</div>
				</div>
			<Quote bp={breakpoints} css={css`
				margin-top: 5rem;
						height: 20rem;
						display:flex;
						align-items: center;
						width: fit-content;
						margin-left:auto;
						margin-right: auto;`} light > “With IJNet's help, I empowered more women and made my news outlet stronger financially.” - Sheikha Aldosary, Saudi Women's Stories
			</Quote>
			</Container>
			<TriggeredBgColor color='sanMarino' />
		</Section>
		<Section name="Leadership">
			<TriggeredBgColor color='valencia' />
			<TriggeredLottie css={css`opacity:0.5`} animation={animationCameras} loop={true} />
			<Container>
				<TriggeredPendantRight bp={breakpoints} color="goldenGrass">Thought Leadership</TriggeredPendantRight>
				<div css={css`
					margin-top: 4rem`
				}>
				<TriggeredHeadline bp={breakpoints} right ><span css={css`color:#fff`}>Shaping the Future</span> Of Journalism </TriggeredHeadline>
				</div>
				<TriggeredTextBlock css={css`
					margin-top: 3rem;
					margin-bottom: 3rem;
					color: white;
					font-family: interstate condensed;
					font-size: 1.25em;
					line-height: 2;
					@media(min-width:${mobile}){
						font-size: 1.7em;							
					}
					`
				}>During a tumultous year, ICFJ identified the impact of the pandemic on journalism worldwide as well as the escalating problem of online violence against women journalists.
				</TriggeredTextBlock>
				<CountBox bp={breakpoints} css={css`transform:scale(1)`}/>
				<div css={theme=>({
					width: '100%',
					height: '780px',
					'@media(min-width:1024px)': {
						border: '16px solid',
						marginTop: '10rem'
					},
					borderColor: theme.colors.goldenGrass,
					display: 'flex',
					flexDirection: 'column',
					position: 'relative'
					})
				}>	
					<div css={css`
					 flex-grow: 1;
					 display: flex;
					 align-items: center;
					 justify-content: center;
					 padding: 2rem;
					 color: white;
					 `}><Subheader css={css`font-size:1.65em;`}>The most Comprehensive, Geographically Diverse Survey on Online Violence against Women Journalists</Subheader>
					</div>
					<div css={css`
						background: rgba(212, 73, 52, .6);
						position: absolute;
						bottom: 0;
						right: 0;
						z-index: 999;
						font-family: interstate condensed;
						color: white;
						${mq({
							padding: ['1rem 1rem 1rem 1rem','1rem 1rem 1rem 1rem','2rem 1rem 3rem 1rem'],
							fontSize: ['1em','1.2em','1.5em'],
							width: ['160px','180px','212px']
						})}
					`}>
						Political actors were the second most common sources of abuse <TextPop color="#DDAF24">(37%)</TextPop> after “anonymous or unknown attackers” <TextPop color="#DDAF24">(57%)</TextPop>.
					</div>
					<div css={css`
						background: rgba(221, 175, 36, .6);
						position: absolute;
						z-index: 999;
						font-family: interstate condensed;
						${mq({
							padding: ['1rem 1rem 1rem 1rem','1rem 1rem 1rem 1rem','2rem 1rem 3rem 1rem'],
							fontSize: ['1em','1.2em','1.5em'],
							width: ['160px','180px','212px'],
							right: ['80px','80px','280px'],
							top: ['380px','380px','280px']
						})}					`}>
						<span css={theme=>({color:theme.colors.valencia})}>One in five </span>women respondents said they had been attacked or abused offline in incidents seeded online.
					</div>
					<ImageQuery css={mq({height: ['200px','400px','510px']})} filename='Anna.jpeg' />
				</div>
				<p css={css`color:white; font-style:italic;margin:3em`}><Highlighter color="mineShaft"> *Research in partnership with the Tow Center for Digital Journalism at Columbia University
			</Highlighter>
			</p>
			</Container>
			<TriggeredBgColor color='valencia' />
		</Section>
		<Section name="Honorees">
			<TriggeredBgColor color='white' />
			<TriggeredLottie css={css`opacity:0.5`} animation={animationCameras} loop={true} />
			<Container>
				<TriggeredPendantLeft bp={breakpoints} color="sanMarino">Honorees</TriggeredPendantLeft>
				<div css={css`
					margin-top: 4rem`
				}>
				<TriggeredHeadline bp={breakpoints} right >Standing With <span css={css`color:#999`}>Intrepid Journalists</span> </TriggeredHeadline>
					<TriggeredTextBlock css={css`
						font-family: interstate condensed;
						font-size: 1.7em;
						line-height: 2;
						text-align: right;
						margin-top: 5rem;
						`
					}>At a time when attacks on journalists are spiking globally, ICFJ’s annual Tribute to Jounalists brings heightened visibility to winners, whose outstanding reporting has had tremendous impact.
				</TriggeredTextBlock>
				</div>
				<ImageQuery filename="TributeLogo.png" css={css`
						margin-top: 5rem;
						margin-bottom: 5rem;
						`
				}/>
				<Wolf
					bp={breakpoints}
					image= "Wolf.png"
					name="Wolf Blitzer"
					title= "Lead Political Anchor, CNN"
					bio="ICFJ is doing more than any organization I know to support great journalism worldwide."
				/>
				<WinnerRight
					bp={breakpoints}
					image= "Fareed.png"
					award="Founders Award"
					name="Fareed Z"
					title= "host,cnn"
					bio="I am a news guy lots of news lots and lots of it"
				/>
				<WinnerLeft 
					bp={breakpoints}
					image= "Fareed.png"
					award="Founders Award"
					name="Fareed Z"
					title="host,cnn"
					bio="I am a news guy lots of news lots and lots of it"
				/>
				<WinnerRight
					bp={breakpoints}
					image= "Fareed.png"
					award="Founders Award"
					name="Fareed Z"
					title= "host,cnn"
					bio="I am a news guy lots of news lots and lots of it"
				/>
				<WinnerLeft 
					bp={breakpoints}
					image= "Fareed.png"
					award="Founders Award"
					name="Fareed Z"
					title="host,cnn"
					bio="I am a news guy lots of news lots and lots of it"
				/>
				<FrameEmbed bp={breakpoints} buttonColor='goldenGrass'
						caption="ICFJ is giving reporters the skills to cover the most pressing issues of the day."
						 css={css`
						margin-top:4rem
						width: 100%;
						height: 
						`}  >
						<iframe title='vidone' width='100%' height='570px' src="https://www.youtube.com/embed/f1SBTk3CXhI" frameBorder="0" allowFullScreen></iframe>
					</FrameEmbed>
			</Container>
				<TriggeredBgColor color='white' />
		</Section>
		<Section name="Financials">
			<TriggeredBgColor color='curiousBlue' />
			<TriggeredLottie css={css`opacity:0.5`} animation={animationCameras} loop={true} />
			<Container>
				<TriggeredPendantRight bp={breakpoints} color="boulder">Financials</TriggeredPendantRight>	
				<Subheader css={css`color:white;margin-top: 10rem;`}>2020 Revenue: $19.9 million</Subheader>
				<Subheader css={css`color:white`}>2020 Expense Breakdown:</Subheader>
				<TriggeredLottie 
					css={css`
					width: 80%;
					@media(min-width:${tablet}){
						width: 60%;						
					}
					margin-right:auto;
					margin-left:auto;
					margin-top: 5rem;`
				}
					animation={animationPie} loop={false}
				 />
				<ImageQuery filename="fourstar.png" css={css`
					margin-top: 10rem;
					margin-bottom: 10rem;
				`} />
				 <Subheader css={mq({color:'white',fontSize:['1em','2em','3em']})}>ICFJ’s four-star track record with Charity Navigator places us among the top 2 percent of nonprofits evaluated.</Subheader>
				<div css={css`
					display: flex;
					justify-content: center;
					`}>
					<Platinum css={css`
					width: 40%;
					margin-top: 10rem;
					margin-bottom: 10rem;
				`}/>
				</div>
				 <Subheader css={mq({color:'white',fontSize:['1em','2em','3em']})}>ICFJ also has a platinum-level rating from GuideStar, the highest ranking given.</Subheader>
			</Container>
				<TriggeredBgColor color='curiousBlue' />
		</Section>
		<Section name="BoardMembers">
			<TriggeredBgColor color='fruitSalad' />
			<TriggeredLottie css={css`opacity:0.5`}animation={animationCameras} loop={true} />
			<Container>
				<TriggeredPendantLeft bp={breakpoints} color="goldenGrass">Board Members</TriggeredPendantLeft>
				<div css={css`
					display:grid;
					grid-template-columns: repeat(2, 1fr);
					margin-top: 5rem;
					color: white;
				`}>
					<div>
						<Subheader>Board of Directors</Subheader>
							<div css={css`
								height: 10rem`
								}/>		
					</div>
					<div>
						<Subheader>Advisory Board</Subheader>
							<div css={css`
								height: 10rem`
								}/>		
					</div>
				</div>
				<TriggeredPendantLeft bp={breakpoints} color="goldenGrass">Donors</TriggeredPendantLeft>
				<div css={css`
					display:grid;
					grid-template-columns: repeat(1, 1fr);
					margin-top: 5rem;
					color: white;
					font-family: interstate condensed;
					font-size: 2em;
					@media(min-width:${tablet}){
						grid-template-columns: repeat(2, 1fr);						
					}
				`}>
					<ul css={css`
							list-style: none;
						`}>
						<li css={theme=>({
							fontSize:'48px',
							color:theme.colors.goldenGrass,
							fontFamily: 'ubuntu',
							})}>
							Chairman’s Circle
						</li>
						<li>Ahmed Charai</li>
						<li>Pamela Howard</li>
						<li>Rodman and Alice Moorhead</li>
						<li>The Reilly Family</li>

						<li css={theme=>({
							fontSize:'48px',
							color:theme.colors.goldenGrass,
							fontFamily: 'ubuntu',
							marginTop: '5rem',
							})}>
							President’s Circle</li>
						<li>The Ewing Family</li>
						<li>Anonymous</li>
						<li>Anonymous 2</li>

						<li css={theme=>({
							fontSize:'48px',
							color:theme.colors.goldenGrass,
							fontFamily: 'ubuntu',
							marginTop: '5rem'})}>
						Benefactors</li>
						<li>Michael and Anne Golden</li>
						<li>John Maxwell Hamilton</li>

						<li css={theme=>({
							fontSize:'48px',
							color:theme.colors.goldenGrass,
							fontFamily: 'ubuntu',
							marginTop: '5rem',
							})}>
							Leaders</li>
						<li>Elizabeth Ballantine and Paul Leavitt</li>
						<li>Joyce Barnathan and Steven Strasser</li>
						<li>Lauretta J. Bruno</li>
						<li>David Callaway</li>
						<li>Vint Cerf</li>
						<li>Patricia Dunnington</li>
						<li>John Harris</li>
						<li>James F. Hoge Jr. and Kathleen Lacey</li>
						<li>Martina Hund-Mejean and Bruno Mejean</li>
						<li>Alex S. Jones</li>
						<li>Marci and Mike McCue</li>
						<li>Rob and Maureen Rehg</li>
						<li>John Towriss, Envoy Strategy Group</li>
						<li>Alexandra Wrage</li>
						<li>Jason H. Wright</li>

						<li css={theme=>({
							fontSize:'48px',
							color:theme.colors.goldenGrass,
							fontFamily: 'ubuntu',
							marginTop: '5rem',
							})}>
							Champions</li>
						<li>David Elliot Cohen and Laureen Seeger</li>
						<li>Richard Gingras</li>
						<li>Marcy McGinnis</li>
						<li>Nicholas Tzitzon</li>
						<li>Matthew and Lisa Winkler</li>
						<li>Anonymous</li>

						<p><i>* For contributions made in 2019. Donations
						below $5,000 are acknowledged elsewhere
						on our website.</i></p>

					</ul>
					<ul css={css`
							list-style: none;
						`}>
						<li css={theme=>({
							fontSize:'48px',
							color:theme.colors.goldenGrass,
							fontFamily: 'ubuntu',
							})}>
							Foundations</li>
						<li>John S. and James L. Knight Foundation</li>
						<li>Bill & Melinda Gates Foundation</li>
						<li>Luminate</li>
						<li>Arnold Ventures</li>
						<li>Bloomberg Philanthropies</li>
						<li>National Endowment for Democracy</li>
						<li>The Brooks and Joan Fortune Family Foundation, Inc.</li>
						<li>Scripps Howard Foundation</li>
						<li>The Ambrose Monell Foundation</li>
						<li>Samuel I. Newhouse Foundation, Inc.</li>
						<li>Gannett Foundation</li>

						<li css={theme=>({
							fontSize:'48px',
							color:theme.colors.goldenGrass,
							fontFamily: 'ubuntu',
							marginTop: '5rem',
							})}>
							Corporations</li>
						<li>Facebook Journalism Project</li>
						<li>Dow Jones/News Corp</li>
						<li>Microsoft</li>
						<li>Google News Initiative</li>
						<li>Al Jazeera Media Network</li>
						<li>Apple News</li>
						<li>Edelman</li>
						<li>National Geographic</li>
						<li>BakerHostetler</li>
						<li>Univision</li>
						<li>Associated Press</li>
						<li>APCO Worldwide</li>
						<li>CBS News</li>
						<li>CNN</li>
						<li>Discovery</li>
						<li>Fox</li>
						<li>GRF CPAs & Advisors</li>
						<li>Mannheim LLC</li>
						<li>McKinsey & Company</li>
						<li>POLITICO</li>
						<li>The New York Times Company</li>
						<li>The Washington Post</li>
						<li>TRACE International</li>
						<li>Ernst & Young</li>
						<li>Cision</li>
						<li>Cresa</li>
						<li>UBS</li>
						<li>Anonymous</li>

						<li css={theme=>({
							fontSize:'48px',
							color:theme.colors.goldenGrass,
							fontFamily: 'ubuntu',
							marginTop: '5rem',
							})}>
							Government Agencies</li>
						<li>U.S. Department of State</li>
						<li>United States Agency for International Development</li>

						<li css={theme=>({
							fontSize:'48px',
							color:theme.colors.goldenGrass,
							fontFamily: 'ubuntu',
							marginTop: '5rem',
							})}>
							Organizations</li>
						<li>World Health Organization</li>
						<li>Radio Free Asia</li>
						<li>Freedom House</li>
						<li>Northwestern University in Qatar</li>
						<li>Stanford University</li>
						<li>Arthur F. Burns Fellowship Program Inc</li>
					</ul>
				</div>
			</Container>
		</Section>
		<div css={css`
			height: 30rem`
			}/>
		<div css={theme=>({
			background: theme.colors.mineShaft,
			color: 'white',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '64px',
			fontFamily: 'ubuntu',
			fontSize: '2.5em'
		})} > ICFJ.org </div>
		</ThemeProvider>
		</div>
	)
}
