/** @jsx jsx */

import { useEffect } from "react"

//Libraries
import { Global, css, jsx, ThemeProvider} from "@emotion/react"
import styled from "@emotion/styled"
import facepaint from 'facepaint'
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"


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
// import UncontrolledLottie from "../components/UncontrolledLottie.js"
import TriggeredBgColor from "../components/TriggeredBgColor.js"
import TriggeredLottie from "../components/TriggeredLottie.js"

//Animations
// import animationMasthead from "../lotties/mastheadnu.json"
import animationCameras from "../lotties/cameras.json"
import animationPenPaper from "../lotties/penpaper.json"
import animationAudio from "../lotties/audio.json"
import animationTweet from "../lotties/tweet.json"
import animationAfrica from "../lotties/africa.json"
import animationAfrica2 from "../lotties/africa2.json"
import animationSouthAmerica from "../lotties/southamerica.json"
import animationPie from "../lotties/piechart.json"
import animationTribute from "../lotties/tribute.json"

//svg
import Platinum from "../svg/platinum.svg"
import Signature from "../svg/jsignature.svg"

//patterns

import PatternTools from "../images/Pattern_Tools.png"
import PatternCountries from "../images/Pattern_Countries.png"
import PatternLanguages from "../images/Pattern_Languages.png"
import PatternCovid from "../images/Pattern_Covid.png"
import Languages from "../images/languages_ticker.png"
import Masthead from "../images/masthead.gif"

//Themes
import theme from "../themes/theme.js"

// Constants, Queries

const smol = '400px',
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
	${mq({
	 maxWidth: ['90%','90%','90%','1024px'],
	 marginTop: ['5rem','5rem','10rem']
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
	font-size: 2.5em;
	@media(min-width:${mobile}){
		font-size: 3em;
	}
`
const SmallSubheader = styled.div`
	font-family: ubuntu;
	font-size: 1.5em;
	font-weight: 700;
	margin: -1em 0em 2em 2em;
`
const Credits = styled.div`
	font-family: ubuntu;
	font-size: 1em;
	color: white;
	`

const OrgPeople = styled.li`
	font-family: ubuntu;
	font-size: 2em;
	color: ${props => props.theme.colors.goldenGrass};
	margin-top: 2rem;
	@media(min-width:${mobile}){
		font-size: 2.5em;
	}
`

const OrgPeopleDesc = styled.li`
	font-family: interstate condensed;
	font-size: 1.7em;
	color: white;
	@media(min-width:${mobile}){
		font-size: 2em;
	}
`

const Link = styled.a`
	color: white;
`

//add scroll to internal anchor links

// if (typeof window !== "undefined") {
//   // eslint-disable-next-line global-require
//   require("smooth-scroll")('a[href*="#"]')
// }

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

	useEffect(() => {
	  const timer = setTimeout(() => {
	    ScrollTrigger.refresh(true);
	  }, 1000);
	  return () => clearTimeout(timer);
	}, []);

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
					fontSize: ['1.5em', '2em','3em','4em']
			})}>
				It Takes a Journalist
			</span>
		</PendantLeft>
		<Container css={mq({
			marginTop:['2rem','2rem','3rem'],
			marginBottom:'-1.2rem',
			maxWidth:['100%','100%','100%','1024px']})
		}>
			<img css={css`width:100%;`}alt="masthead" src={Masthead} />
		</Container>
		<TriggeredBgColor color='white' />
		<Section id="Mission" name="Mission" css={theme => ({background: theme.colors.mineShaft})}>
			<Container css={css`
				color: white;
				height: 20rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				text-align: left;
				margin-top: 0;
				margin-bottom: 5rem;
				@media(min-width:${smol}){
					height: 30rem;
				}
				@media(min-width:${tablet}){
					height: 40rem;
					margin-bottom: 15rem;
				}

				`}>
				<TriggeredTextBlock css={css`				
					@media(max-width:${tablet}){
					opacity: 1 important!
				}`}>
					<div css={mq({
						fontSize:['2em', '3em', '3em', '4em'],
						fontFamily:'ubuntu',
						linHeight:'2',
						opacity: '1'})}
					>Mission</div>
					<div css={mq({
						fontSize:['1.2em', '1.5em', '2em'],
						fontFamily:'interstate condensed',
						lineHeight: 1.5}
					)}>We empower an unparalleled global network of journalists to produce news reports that lead to better governments, stronger economies, more vibrant societies and healthier lives.
					</div>
				</TriggeredTextBlock>
				<TriggeredBgColor color='goldenGrass' />
			</Container>
		</Section>
		<Section   name="Joyce">
			<Container id="Joyce">
				<TriggeredPendantRight css={css`@media(max-width:${mobile}){font-size:.6em}`} bp={breakpoints} color='curiousBlue'>
					A Letter From the President
				</TriggeredPendantRight>
				<div css={css`
					display: grid;
					grid-template-columns: 5% 95%;
					margin-top: 5rem;
					@media(min-width:${tablet}){
						margin-top: 10rem;
					}
					`}>
					<PhotoSlant bp={breakpoints} css={css`transform:translatex(-35%)`} src="Joyce.jpg" />
					<ParagraphSlant bp={breakpoints} css={css`
						margin-bottom: 5rem;			
						@media(min-width:${tablet}){
							margin-bottom: -15rem}`
						}>
						<p css={css`margin-top:-.5rem`}>
						Over 36 years, ICFJ has provided more than <TextPop>150,000 journalists</TextPop> from <TextPop>180 countries</TextPop> with <TextPop css={mq({
							display:['block','block','inline-block']
						})}>valuable programs and resources</TextPop>. But we’ve never had a year like 2020.
						</p>
						<p>
						The pandemic that raged across the globe would have been much worse if journalists had not fulfilled their vital role of providing audiences with accurate, lifesaving news, and doing it while combating the spread of false information.
						</p>
						<p>
						We at ICFJ are doing our best to help journalists better cover the story of the century. At the onset of COVID-19, we galvanized quickly to help them gain access to top epidemiologists and health practitioners, to the world’s best trainers in digital journalism techniques, to disinformation and media sustainability experts. As you’ll see below, tens of thousands of journalists are benefiting from that effort.
						</p>
						</ParagraphSlant>

					</div>
						<ReadMore bp={breakpoints}>
							<p>
							In other ICFJ programs, investigative journalists in our networks are collaborating to uncover corruption by those seeking to get rich from the pandemic. Pioneers in media innovation are creating new data and social media tools to help journalists tell the stories of COVID-19 better. And sustainability experts are helping news outlets improve the bottom line in a time when economic and political forces threaten to shut down independent voices.
							</p>
							<p>
							Our motto is It Takes a Journalist. Whether the story is a global pandemic, racial injustice, climate change or government malfeasance, it takes a journalist to bring the public factual information that can mean the difference between life and death. And whatever the story, ICFJ will be there to support and empower the journalists who are helping make our world a better place.
							</p>
							<p>
							Joyce Barnathan, President
							</p>
							<Signature />
						</ReadMore>
			</Container>
			<TriggeredBgColor color='goldenGrass' />
		</Section>
		<Section  name="Change">
			<TriggeredBgColor color='curiousBlue' />
				<TriggeredLottie css={css`opacity:0.5`} animation={animationPenPaper} loop={true} />
				<Container id="Change">
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
						Tens of thousands of journalists in our global network produce news reports that lead to better governments, economies, societies and lives.
					</TriggeredTextBlock>
					</div>
					<FrameEmbed bp={breakpoints}  buttonColor='goldenGrass'
						caption="Learn how ICFJ is giving reporters the skills to cover today's most pressing issues."
						 css={css`
						margin-top:10rem;
						width: 100%;
						height: 600px;
						overflow: hidden;
						@media(min-width:${tablet}){
							margin-top:15rem;
						}	
						`}  >
						<iframe title='vidtwo' width='100%' height='570px' src="https://www.youtube.com/embed/f1SBTk3CXhI" frameBorder="0" allowFullScreen></iframe>
					</FrameEmbed>
					<FrameEmbed bp={breakpoints}  height='570px' buttonColor='goldenGrass'
						caption="Click on this photo to meet members of our inspiring network."
						 css={css`
						width: 100%;
						height: 765px;
						overflow: hidden;
						margin-top:10rem;
						margin-bottom:-15rem;
						@media(min-width:${tablet}){
							margin-top:15rem;
							margin-bottom:0;
						}	
						`}  >
					<iframe title="mosaic" width='100%' height='765px' src="https://icfjmosaic.com" frameBorder="0" margin="0" padding="0" scrolling="no" allowFullScreen="" ></iframe>
					</FrameEmbed>
					<Quote bp={breakpoints} css={mq({
						height: ['25rem','20rem','35rem','40rem'],
						display:'flex',
						alignItems: 'center',
						width: 'fit-content',
						// marginTop: '15rem',
						marginLeft:'auto',
						marginRight: 'auto'})
					}>
						“With ICFJ’s support, we are improving the lives of the poorest of the poor by bringing them reliable, crowdsourced news for the first time." - Devansh Mehta, CGNet Swara, India
					</Quote>
				</Container>
			<TriggeredBgColor color='curiousBlue' />
		</Section>
		<Section name="Resources">
				<TriggeredBgColor color='boulder' />
				<TriggeredLottie css={css`opacity:0.5`} animation={animationAudio} loop={true} />
				<Container id="Resources">
					<TriggeredPendantRight bp={breakpoints} color="fruitSalad">New Resources </TriggeredPendantRight>
					<div css={css`
						margin-top: 4rem`
					}>
					<TriggeredHeadline bp={breakpoints} right><span css={css`color:#fff`}> Serving Journalists </span>During A Crisis</TriggeredHeadline>
					<TriggeredTextBlock css={css`
						color: white;
						font-family: interstate condensed;
						font-size: 1.25em;
						line-height: 2;
						text-align: right;
						margin-top: 2rem;
						@media(min-width:${mobile}){
							font-size: 1.7em;
						}
						`}>ICFJ acted fast to help the journalists in our global network provide vital information on the COVID-19 pandemic. The program connects journalists with experts, information and each other in five languages,through weekly webinars, Facebook groups and resources published by our <Highlighter color="fruitSalad">International Journalists’ Network (IJNet).</Highlighter>
					</TriggeredTextBlock>
				</div>
				<FrameEmbed bp={breakpoints}  height='570px' buttonColor='fruitSalad'
						caption="Learn more about our Global Health Crisis Reporting Forum, the most far-reaching COVID-19 journalism initiative."
						 css={css`
						margin-top:10rem;
						width: 100%;
						max-height: 600px;
						@media(min-width:${mobile}){
						margin-top:15rem;
						}						
						`}  >
					<iframe title='vidfour' width='100%' height='570px' src="https://www.youtube.com/embed/UoshtxBZhGs" frameBorder="0" allowFullScreen></iframe>
				</FrameEmbed>
				<div css={css`
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-row-gap: 3rem;
				margin-top: 12rem;
				@media(min-width:${tablet}){
					margin-top: 15rem;
					grid-template-columns: repeat(2, 1fr);
				}
			`}>
			<AnimatedColumn
				bp={breakpoints}
				image={PatternTools}
				color="valencia"
				title='Forum Members'
				val='10200'
				 />
			<AnimatedColumn
				bp={breakpoints}
				image={PatternCountries}
				color="goldenGrass"
				title='Countries'
				val='100'
				 />
				 <AnimatedColumn
				bp={breakpoints}
				image={PatternLanguages}
				color="curiousBlue"
				title='Languages'
				val='5'
				 />
				 <AnimatedColumn
				bp={breakpoints}
				image={PatternCovid}
				color="sanMarino"
				title='Covid-19 Resources'
				val='840'
				sign='+'
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
						margin-top: 15rem;
						margin-bottom: 15rem
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
				<Credits> Credits (clockwise): Siddharth Bokolia (top left), John Gitonga (top right), Lucina Paternesi Meloni (middle left), Amit Chakraborty (middle right), Carolyn Sung (bottom left), Agnes Penda (bottom right)</Credits>
			<div css={css`
					color:white;
					margin-top:10rem;
					margin-bottom:10rem;				
					@media(min-width: ${tablet}){
						margin-top:15rem;
						margin-bottom:15rem	;				
					}
				`}>
					<Subheader>The World's Most Comprehensive Site for Journalists</Subheader>
					<p css={css`font-family: interstate condensed; font-size: 1.75em`}>Offering expert advice, tools and opportunities for the news media</p>
				</div>
				<div css={css`width:60%;
						margin-right:auto;
						margin-left:auto;
						margin-top:10rem;
						@media(min-width:${tablet}){
							margin-top:15rem;							
						}
					`}>
					<ImageQuery filename='ijnet.png' />
				</div>
			</Container>
				<Container css={css`
					margin-top:10rem;
					display:grid;
					font-family: interstate condensed;
					grid-template-columns: 100%;
					@media(min-width:${tablet}){
						margin-top:15rem;
						grid-template-columns: 20% 40% 40%;
					}
					div{
						text-align:center;
						justify-content: center;
						display: flex;
						flex-direction: column;
					}
					span{
						color: white;
						font-size: 2em;
					}
					`}>
					<div css={css`@media(min-width:${tablet}){border: 10px solid black;padding: 2rem;}`}>
						<TriggeredCounter css={theme=>({color:theme.colors.white})} val={"8"} />
						<span>Languages</span>
					</div>
					<div css={css`@media(min-width:${tablet}){border: 10px solid black;padding: 2rem;}`}>
						<TriggeredCounter css={theme=>({color:theme.colors.curiousBlue, fontSize:'8em'})} val={"1725"} />
						<span>Resources</span>
					</div>
					<div css={css`@media(min-width:${tablet}){border: 10px solid black;padding: 2rem;}`}>
						<TriggeredCounter css={theme=>({color:theme.colors.fruitSalad, fontSize:'6em'})}val={"182000"} />
						<span>Average Monthly Visitors</span>
					</div>

				</Container>
				<LanguageTicker css={css`margin-top:10rem; margin-bottom:5rem`}><img css={css`width:120vw;`} alt="languages" src={Languages}/></LanguageTicker>
				<TriggeredBgColor color='boulder' />
		</Section>
		<Section name="Networks">
			<TriggeredBgColor color='fruitSalad' />
			<TriggeredLottie css={css`opacity:0.5`} animation={animationCameras} loop={true} />
			<Container id="Networks">
				<TriggeredPendantLeft bp={breakpoints} color="mineShaft">Investigative Networks</TriggeredPendantLeft>
				<div css={css`
					margin-top: 4rem;
					margin-bottom: 2rem`
				}>
				<TriggeredHeadline bp={breakpoints}><span css={css`color:#fff`}> Holding the Powerful to Account</span> When It Matters Most </TriggeredHeadline>
				</div>
				<TriggeredTextBlock>
					<Subheader>Journalism with Impact </Subheader>
				</TriggeredTextBlock>
				<div css={css`
					display: grid;
					grid-template-columns: 5% 95%;
					margin-top: 10rem;
					margin-bottom: -20rem;
					@media(min-width:${tablet}){
						margin-top: 10rem;
					 	margin-bottom: -20rem;
					}
				`}>
					<PhotoSlant  bp={breakpoints} css={css`transform:translatex(-35%)`}src="Fabiola.jpg" />
					<ParagraphSlant bp={breakpoints} css={css`
							@media(min-width:${tablet}){
								margin-top: 5rem;
							}
						`}>
						Peru-based <TextPop color="#DDAF24" css={mq({display:['block','block','inline-block']})}>ICFJ Knight Fellow Fabiola Torres</TextPop> created Salud con Lupa, a health news outlet that is uncovering corruption during COVID-19. They exposed inflated prices for face shields, environmental violations by corporations and wasted protective gear spending,prompting government action.
					</ParagraphSlant>
				</div>
				<ImageQuery filename='bigeye.jpg' />
				<div css={css`margin-top: 5rem;color:white`}>
					<div css={css`
						color: white;
						`
					}>
						<Subheader>Journalists in Our Network Are Uncovering Corruption</Subheader>
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
								Stories by ICFJ partner, the Organized Crime and Corruption Reporting Project (OCCRP), based in Eastern Europe, have co tributed to more than <TextPop color="#313131">$7.3 billion in illicitly acquired funds </TextPop>that have since been recovered.
							</p>
							<p>ICFJ helped launch the Latin-American Connectas, which has produced more than <TextPop color="#DDAF24">274 in-depth stories</TextPop> exposing mismanagement of billions of dollars in public funds.
							</p>
						</div>
					</div>
				</div>
				<Quote bp={breakpoints} css={mq({
					height: ['20rem','25rem','25rem','30rem'],
					display:'flex',
					alignItems: 'center',
					width: 'fit-content',
					marginLeft:'auto',
					marginRight: 'auto'})
				}>
				“We exposed corruption and human rights abuses working in a cross-border network supported by ICFJ.” -- Lisseth Boon, Connectas, Venezuela
				</Quote>

			</Container>
			<TriggeredBgColor color='fruitSalad' />
		</Section>
		<Section  name="Innovation">
			<TriggeredBgColor color='mineShaft' />
			<TriggeredLottie css={css`opacity:0.5`} animation={animationTweet} loop={true} />
			<Container id="Innovation">
				<TriggeredPendantRight bp={breakpoints} color="sanMarino">Innovation</TriggeredPendantRight>
				<div css={css`
					margin-top: 4rem`
				}>
				<TriggeredHeadline bp={breakpoints} right ><span css={css`color:#999`}>Pioneering Ways To <span css={css`color:#fff`}> Get the Truth Out</span> in a Pandemic</span></TriggeredHeadline>
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
				}>In Nigeria, journalists, fact checkers and social media influencers ––	including a government minister	and a Nollywood star -- are teaming up to combat misinformation about health and other issues that matter	to people’s lives, a project led by <TextPop color="#D44934">ICFJ Knight Fellow Hannah Ajakaiye.</TextPop>
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
						Women journalists and data analysts from five countries shed light on marginalized groups -- such as domestic workers and HIV/AIDS patients -- hardest hit by the pandemic, as part of the <Link href="https://urldefense.com/v3/__https:/theawjp.org/__;!!Ie25XFjv7UPO!4QFkJUrcVekppLkvEruzM2TiStyjctG8zz8IV7SGT2ah_DeDeH2DmSK44qtt$">Africa Women’s Journalism Project</Link>, led by Brazil-based <TextPop color="#DDAF24">ICFJ Knight Fellow Catherine Gicheru.</TextPop>
				</TriggeredTextBlock>
				<div>
				<PhotoSlant right bp={breakpoints} css={css`
						z-index: 1

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
					margin-bottom: 15rem;
					grid-template-columns: 50% 50%;
					@media(min-width${tablet}){
						grid-template-columns: 40% 60%;
						margin-bottom: 0;
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
						Journalists can more quickly find expert sources of scientific information thanks to <Link href="https://urldefense.com/v3/__https:/sciencepulse.org/about__;!!Ie25XFjv7UPO!4QFkJUrcVekppLkvEruzM2TiStyjctG8zz8IV7SGT2ah_DeDeH2DmfhbEiCV$">Science Pulse</Link>, a free tool created by a <TextPop color="#47609F">ICFJ Knight Fellow Sergio Spagnuolo </TextPop>that features the latest updates from more than 1,600 verified scientists and scientific organizations tweeting in English, Portuguese and Spanish.
				</TriggeredTextBlock>
				</div>
			</Container>
			<TriggeredBgColor color='mineShaft' />
		</Section>
		<Section name="Sustainability">
			<TriggeredBgColor color='sanMarino' />
			<TriggeredLottie css={css`opacity:0.5`} animation={animationPenPaper} loop={true} />
			<Container id="Sustainability">
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
						margin-top: 2rem;
						@media(min-width:${mobile}){
							font-size: 1.7em;
						}
						`
					}>Even in the devastating time of COVID-19, we helped newsrooms in 32 countries strengthen their bottom lines.
				</TriggeredTextBlock>
				<div css={css`margin-top:5rem`}>
					<ImageQuery css={css`height: 510px`} filename='conference.jpeg' />
					<Credits>Credit: Ibrahim Thunian/Saudi Women Stories</Credits>
					<div css={css`
							color: white;
							font-family: interstate condensed;
							line-height: 2;
							padding-top: 1em;
							padding-left: 2rem;
							padding-right: 2rem;
							font-size: 1.25em;
							@media(min-width:${mobile}){
								font-size: 1.5em;
							}`
						}>
							Media entrepreneurs in the Middle East and North Africa have improved the business prospects of their startups through our <Link href="https://ijnet.org/en/story/meet-our-ijnet-arabic-2020-mentoring-center-participants"><Highlighter color="goldenGrass">IJNet Mentoring Center</Highlighter></Link>, supported by the National Endowment for Democracy over the past six years.
					</div>
				</div>
				<div css={css`margin-top:5rem`}>
					<ImageQuery css={css`height: 510px`} filename='bigeye.jpg' />
					<Credits>Credit: Rocío Urtecho</Credits>
					<div css={css`
							color: white;
							font-family: interstate condensed;
							line-height: 2;
							padding-top: 1em;
							padding-left: 2rem;
							padding-right: 2rem;
							font-size: 1.25em;
							@media(min-width:${mobile}){
								font-size: 1.5em;
							}
							`
						}>
							Local newsrooms in Brazil increase their readers while participating in the <Highlighter color="curiousBlue"><Link href="https://www.facebook.com/journalismproject/programs/accelerator/brazilian-publishers-thriving">Local News Accelerator</Link></Highlighter> with ICFJ and the Facebook Journalism Project. It is one of many initiatives across the world between ICFJ and FJP helping newsrooms solve business challenges.
					</div>
				</div>
				<div css={css`margin-top:5rem`}>
					<ImageQuery css={css`height: 510px`} filename='Pitazo.jpeg' />
					<Credits>Credit: Ruth Lara Castillo/El Pitazo</Credits>
					<div css={css`
							color: white;
							font-family: interstate condensed;
							line-height: 2;
							padding-top: 1em;
							padding-left: 2rem;
							padding-right: 2rem;
							font-size: 1.25em;
							@media(min-width:${mobile}){
								font-size: 1.5em;
							}
							`
						}>
						Despite the pandemic, ten Latin American digital news startups significantly increased their revenue in just six months, as part of Velocidad. They did it primarily through paid content, advertising and other client services -- and <Link href="https://www.icfj.org/news/velocidad-helps-news-startups-grow-membership-and-revenue-program-enters-second-phase">it's just the beginning</Link>. This accelerator program with ICFJ and SembraMedia is supported by Luminate Group.
					</div>
				</div>
			<Quote bp={breakpoints} css={css`
				margin-top: 5rem;
						height: 20rem;
						display:flex;
						align-items: center;
						width: fit-content;
						margin-left:auto;
						margin-right: auto;`} light > “With the help of IJNet mentors, I empowered more women and made my news outlet stronger financially.” - Sheikha Aldosary, Saudi Women's Stories, Saudi Arabia
			</Quote>
			</Container>
			<TriggeredBgColor color='sanMarino' />
		</Section>
		<Section name="Leadership">
			<TriggeredBgColor color='valencia' />
			<TriggeredLottie css={css`opacity:0.5`} animation={animationAudio} loop={true} />
			<Container id="Leadership">
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
				}>During a tumultous year, ICFJ and its partners identified the <Link href="https://www.icfj.org/news/new-global-survey-raises-red-flags-journalism-covid-19-era">impact of the pandemic on journalism</Link> as well as the escalating problem of <Link href="https://www.icfj.org/news/icfj-unesco-study-online-violence-fueled-disinformation-and-political-attacks-deeply-harms">online violence against women journalists</Link>.
				</TriggeredTextBlock>
				<CountBox bp={breakpoints} css={css`transform:scale(1)`}/>
				<div css={theme=>({
					width: '100%',
					'@media(min-width:1024px)': {
						border: '16px solid',
						marginTop: '10rem',
						height: '780px',
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
					 `}><Subheader css={css`font-size:1.65em;`}>Most Comprehensive Survey on Online Violence against Women Journalists*</Subheader>
						</div>
						<SmallSubheader>A UNESCO-ICFJ partnership</SmallSubheader>
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
						<TextPop color="#DDAF24">More than one third </TextPop> of respondents said political actors were a common source of abuse.
					</div>
					<div css={css`
						background: rgba(221, 175, 36, .6);
						position: absolute;
						z-index: 999;
						font-family: interstate condensed;
						${mq({
							padding: ['1rem 1rem 1rem 1rem','1rem 1rem 1rem 1rem','2rem 1rem 3rem 1rem'],
							fontSize: ['1em','1.2em','1.5em'],
							width: ['200px','180px','212px'],
							right: ['60px','80px','280px'],
							top: ['260px','380px','280px']
						})}					`}>
						<TextPop color="#D44934">One in five</TextPop> women said they suffered attacks or abuse offline in the physical world stemming from online harassment.
					</div>
					<ImageQuery css={mq({height: ['200px','400px','510px']})} filename='Anna.jpeg' />
				</div>
				<Credits>Credit: Anna Cunningham</Credits>
				<p css={css`color:white; font-style:italic;margin:3em`}><Highlighter color="mineShaft"> *Findings based on 714 responses from women journalists across 113 countries.
			</Highlighter>
			</p>
			</Container>
			<TriggeredBgColor color='valencia' />
		</Section>
		<Section  name="Honorees">
			<TriggeredBgColor color='white' />
			<TriggeredLottie css={css`opacity:0.5`} animation={animationCameras} loop={true} />
			<Container id="Honorees" css={mq({maxWidth:['100%', '100%', '90%', '1024px']})}>
				<TriggeredPendantLeft bp={breakpoints} color="sanMarino"> Honorees</TriggeredPendantLeft>
				<div css={css`
					margin-top: 4rem;
					padding-left: 2rem;
					padding-right: 2rem;
					@media(min-width:${tablet}){
						padding-left: 0;
						padding-right: 0;
					}					
				`}>
				<TriggeredHeadline bp={breakpoints} right >Standing With <span css={css`color:#999`}>Intrepid Journalists</span> </TriggeredHeadline>
					<TriggeredTextBlock css={css`
						font-family: interstate condensed;
						font-size: 1.2em;
						line-height: 2;
						text-align: right;
						margin-top: 5rem;
						@media(min-width:${tablet}){
							font-size: 1.7em;						
						}
						`
					}>At a time when attacks on journalists are spiking globally, <Link css={css`color: black;`} href="https://www.icfj.org/calendar/icfj-tribute-journalists-2020">ICFJ’s annual awards</Link> brings heightened visibility to winners, whose outstanding reporting has had tremendous impact.
				</TriggeredTextBlock>
				</div>
				<TriggeredLottie animation={animationTribute} loop={false} css={css`
						margin-top: 5rem;
						margin-bottom: 5rem;
						`
				}/>
				<FrameEmbed  bp={breakpoints} buttonColor='goldenGrass'
						caption="Watch the Speeches"
						 css={css`
						margin-top:4rem;
						width: 100%;
						background:black !important;
						padding-bottom:-20px;
						`}  >
						<iframe title='vidone' width='100%' height='570px' src="https://www.youtube.com/embed/jIialLILHq8" frameBorder="0" allowFullScreen></iframe>

					</FrameEmbed>
				<Wolf
					bp={breakpoints}
					image= "Wolf.png"
					award="Master of Ceremonies"
					name="Wolf Blitzer, CNN"
					title= ""
					bio="ICFJ is doing more than any organization I know to support great journalism worldwide."
				/>
				<WinnerRight
					bp={breakpoints}
					image= "Fareed.png"
					award="ICFJ Founders Award for Excellence in Journalism"
					name="Fareed Zakaria, CNN"
					title= ""
					bio="Zakaria's expert analysis helps us understand complex global issues."
				/>
				<WinnerLeft
					bp={breakpoints}
					image= "Roman.png"
					award="ICFJ Knight Trailblazer Award"
					name="Roman Anin"
					title="host,cnn"
					bio="Anin’s collaborative news site is exposing corruption under Vladimir Putin."
				/>
				<WinnerRight
					bp={breakpoints}
					image= "Lina.png"
					award="ICFJ Knight International Journalism Award"
					name="Lina Attalah"
					title= "Mada Masr, Egypt"
					bio="Attalah leads a fearless team of reporters at one of the last independent news outlets in her country."
				/>
				<WinnerLeft
					bp={breakpoints}
					image= "Maria.png"
					award="2018 ICFJ Knight Award Winner"
					name="Maria Ressa"
					title="Rappler, Philippines"
					bio="Despite relentless persecution, Ressa and her team shine a light on injustices."
				/>
				</Container>
				<div css={css`@media(min-width:${tablet}){margin-bottom:20rem}`} />
				<TriggeredBgColor color='white' />
		</Section>
		<Section  name="Financials">
			<TriggeredBgColor color='curiousBlue' />
			<TriggeredLottie css={css`opacity:0.5`} animation={animationTweet} loop={true} />
			<Container id="Financials">
				<TriggeredPendantRight bp={breakpoints} color="boulder">Financials</TriggeredPendantRight>
				<SmallSubheader css={css`
					color:white;
					margin: 3em 0 0 0;
					@media(min-width:${tablet}){margin: initial};
					`}>We are careful stewards of our donors’ funds.</SmallSubheader>
				<Subheader css={css`
					color:white;
					margin-top: 10rem;`
				}>Total Reveue for 2019: $19.9 million</Subheader>
				<Subheader css={css`color:white`}>2019 Expense Breakdown:</Subheader>
				<TriggeredLottie
					css={css`
					width: 60%;
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
				<div css={{textAlign:'center'}} >
				<Subheader css={mq({color:'white', fontWeight:'bold', fontSize:['3em','3em','5em']})}>95.36<sup>%</sup></Subheader>
				<Subheader css={mq({color:'white', fontWeight:'bold', fontSize:['2em','2.2em','3.2em']})}>Charity Navigator Ranking</Subheader>
				 <Subheader css={mq({color:'white',fontSize:['2em','2em','3em']})}>ICFJ’s four-star track record with Charity Navigator places us among the top 2 percent of nonprofits evaluated.</Subheader>
				</div>
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
				<div css={{textAlign:'center'}} >
				<Subheader css={mq({color:'white', fontWeight:'bold', fontSize:['3em','3em','5em']})}>Platinum</Subheader>
				<Subheader css={mq({color:'white', fontWeight:'bold', fontSize:['2em','2.2em','3.2em']})}>Guidestar Rating</Subheader>
				<Subheader css={mq({color:'white',fontSize:['2em','2em','3em']})}>ICFJ also has a platinum-level rating from GuideStar, the highest ranking given.</Subheader>
				</div>
			</Container>
		</Section>
		<Section name="BoardMembers">
			<TriggeredBgColor color='fruitSalad' />
			<TriggeredLottie css={css`opacity:0.5`}animation={animationCameras} loop={true} />
			<Container id="Board">
				<TriggeredPendantLeft bp={breakpoints} color="goldenGrass">Board Members</TriggeredPendantLeft>
				<div css={css`
					margin-top: 5rem;
					display:grid;
					grid-template-columns: repeat(1, 1fr);
					color: white;
					font-family: interstate condensed;
					@media(min-width:${tablet}){
						grid-template-columns: repeat(2, 1fr);
						margin-top: 10rem;
					}
				`}>
				<div>
					<Subheader css={css`
						font-size:3.25em;
						margin-bottom: 5rem;
						`}>
						Officers
					</Subheader>
					<ul css={css`
							list-style: none;
							padding-left: 0;
						`}>
						<OrgPeople>MICHAEL GOLDEN</OrgPeople>
						<OrgPeopleDesc>Chairman, ICFJ</OrgPeopleDesc>
						<OrgPeopleDesc>Former Vice Chairman, The New York Times Company</OrgPeopleDesc>

						<OrgPeople>JAMES F. HOGE JR.</OrgPeople>
						<OrgPeopleDesc>Vice Chair, ICFJ</OrgPeopleDesc>
						<OrgPeopleDesc>Senior Advisor, Teneo Intelligence</OrgPeopleDesc>

						<OrgPeople>PAMELA HOWARD</OrgPeople>
						<OrgPeopleDesc>Vice Chair, ICFJ</OrgPeopleDesc>
						<OrgPeopleDesc>Trustee, Scripps Howard Foundation</OrgPeopleDesc>

						<OrgPeople>MATTHEW WINKLER</OrgPeople>
						<OrgPeopleDesc>Vice Chair, ICFJ</OrgPeopleDesc>
						<OrgPeopleDesc>Editor-in-Chief Emeritus, Bloomberg News</OrgPeopleDesc>

						<OrgPeople>JOHN MAXWELL HAMILTON</OrgPeople>
						<OrgPeopleDesc>Treasurer, ICFJ</OrgPeopleDesc>
						<OrgPeopleDesc>Professor of Journalism and Founding Dean, Manship School of Mass Communication, Louisiana State University</OrgPeopleDesc>

						<OrgPeople>JASON WRIGHT</OrgPeople>
						<OrgPeopleDesc>Development Chair, ICFJ</OrgPeopleDesc>
						<OrgPeopleDesc>Principal, Geer Mountain Holdings LLC</OrgPeopleDesc>

						<OrgPeople>MARCY MCGINNIS</OrgPeople>
						<OrgPeopleDesc>Nominating Chair, ICFJ</OrgPeopleDesc>
						<OrgPeopleDesc>Journalist</OrgPeopleDesc>

						<OrgPeople>WENDELL REILLY</OrgPeople>
						<OrgPeopleDesc>Chair, Audit Committee, ICFJ</OrgPeopleDesc>
						<OrgPeopleDesc>Chairman, Berman Capital Advisors</OrgPeopleDesc>

						<OrgPeople>JOYCE BARNATHAN</OrgPeople>
						<OrgPeopleDesc>President, ICFJ</OrgPeopleDesc>
					</ul>
					</div>
					<div>
					<Subheader css={css`
						font-size:3.25em;
						margin-bottom: 5rem;
						margin-top: 5rem;
						`}>
						Board of Directors
					</Subheader>
					<ul css={css`
							list-style: none;
							padding-left: 0;
						`}>
						<OrgPeople>MARK BAILEN</OrgPeople>
						<OrgPeopleDesc>Partner, BakerHostetler LLP</OrgPeopleDesc>

						<OrgPeople>CARRIE BUDOFF BROWN</OrgPeople>
						<OrgPeopleDesc>Editor, Politico</OrgPeopleDesc>

						<OrgPeople>DAVID CALLAWAY</OrgPeople>
						<OrgPeopleDesc>Founder, Editor, Callaway Climate Insights</OrgPeopleDesc>

						<OrgPeople>AHMED CHARAI</OrgPeople>
						<OrgPeopleDesc>Chairman and CEO, Global Media Holding</OrgPeopleDesc>

						<OrgPeople>DAVID ELLIOT COHEN</OrgPeople>
						<OrgPeopleDesc>Author and Publisher</OrgPeopleDesc>

						<OrgPeople>JOHN DANISZEWSKI</OrgPeople>
						<OrgPeopleDesc>Vice President and Editor at Large for Standards, Associated Press</OrgPeopleDesc>

						<OrgPeople>RICHARD GINGRAS</OrgPeople>
						<OrgPeopleDesc>Vice President, News, Google</OrgPeopleDesc>

						<OrgPeople>MICHAEL GREENSPON</OrgPeople>
						<OrgPeopleDesc>Global Head, Licensing and Print Innovation, The New York Times</OrgPeopleDesc>

						<OrgPeople>JOHN HEILEMANN</OrgPeople>
						<OrgPeopleDesc>Co-host, creator, and executive producer of Showtime's The Circus; National Affairs Analyst, MSNBC and NBC News; Co-founder and Editor-in-Chief, The Recount</OrgPeopleDesc>

						<OrgPeople>ALEX S. JONES</OrgPeople>
						<OrgPeopleDesc>Journalist, former director of the Shorenstein Center on Media, Politics and Public Policy at Harvard's John F. Kennedy School of Government</OrgPeopleDesc>

						<OrgPeople>ANNE KORNBLUT</OrgPeople>
						<OrgPeopleDesc>Global Head of Curation, Facebook</OrgPeopleDesc>

						<OrgPeople>ISAAC LEE</OrgPeople>
						<OrgPeopleDesc>Founder, Exile Content</OrgPeopleDesc>

						<OrgPeople>JOANNE LEEDOM-ACKERMAN</OrgPeople>
						<OrgPeopleDesc>Novelist and Journalist</OrgPeopleDesc>

						<OrgPeople>MARCI MCCUE</OrgPeople>
						<OrgPeopleDesc>Founding Team Member and Head of Marketing, Flipboard</OrgPeopleDesc>

						<OrgPeople>RODMAN MOORHEAD</OrgPeople>
						<OrgPeopleDesc>Former General Partner and Managing Director, Warburg Pincus & Co.</OrgPeopleDesc>

						<OrgPeople>ROB REHG</OrgPeople>
						<OrgPeopleDesc>Vice Chair, Global Client Strategy, Edelman</OrgPeopleDesc>

						<OrgPeople>MARY ANN STERNBERG</OrgPeople>
						<OrgPeopleDesc>Freelance Writer and Author</OrgPeopleDesc>

						<OrgPeople>JOHN TOWRISS</OrgPeople>
						<OrgPeopleDesc>Principal, Envoy Strategy Group</OrgPeopleDesc>
						</ul>
				</div>
				</div>
				</Container>
				</Section>

				<Section name="AdvisoryBoard">
					<TriggeredBgColor color='fruitSalad' />
					<Container>
						<TriggeredPendantLeft bp={breakpoints} color="goldenGrass">Advisory Board</TriggeredPendantLeft>
						<div css={css`
							display:grid;
							grid-template-columns: repeat(1, 1fr);
							margin-bottom: 15rem;
							color: white;
							font-family: interstate condensed;
							@media(min-width:${tablet}){
								grid-template-columns: repeat(2, 1fr);
							}
						`}>
						<div>
						<Subheader css={css`
								font-size:3.25em;
								margin-bottom: 5rem;
								margin-top: 5rem;
								@media(min-width:${tablet}){
									margin-top: 10rem;
								}
							`}>
								Officers
						</Subheader>
							<ul css={css`
									list-style: none;
									padding-left: 0;
								`}>
								<OrgPeople>FRANK BENNACK</OrgPeople>
								<OrgPeopleDesc>Executive Vice Chairman, Hearst</OrgPeopleDesc>

								<OrgPeople>LAURETTA BRUNO</OrgPeople>
								<OrgPeopleDesc>President, Gramercy Partners LLC</OrgPeopleDesc>

								<OrgPeople>ANDY BURNESS</OrgPeople>
								<OrgPeopleDesc>President, Burness Communications</OrgPeopleDesc>

								<OrgPeople>PAUL COHEN</OrgPeople>
								<OrgPeopleDesc>Partner, Senior Vice President, Ketchum</OrgPeopleDesc>

								<OrgPeople>FRANK COMES</OrgPeople>
								<OrgPeopleDesc>Editor, McKinsey Quarterly, McKinsey & Co. Inc.</OrgPeopleDesc>

								<OrgPeople>PETER COPELAND</OrgPeople>
								<OrgPeopleDesc>Writer, Editor and Media Consultant</OrgPeopleDesc>

								<OrgPeople>THOMAS EWING</OrgPeople>
								<OrgPeopleDesc>Principal, Ewing Controls</OrgPeopleDesc>

								<OrgPeople>CRAIG FORMAN</OrgPeople>
								<OrgPeopleDesc>President and Chief Executive Officer, McClatchy</OrgPeopleDesc>

								<OrgPeople>SUSAN FRIEDMAN</OrgPeople>
								<OrgPeopleDesc>Former NBC News Producer; Former Knight Fellow</OrgPeopleDesc>

								<OrgPeople>BOBBY GHOSH</OrgPeople>
								<OrgPeopleDesc>Columnist, Bloomberg News</OrgPeopleDesc>

								<OrgPeople>PETER OSNOS</OrgPeople>
								<OrgPeopleDesc>Founder and Editor-at-Large, PublicAffairs</OrgPeopleDesc>

								<OrgPeople>CAROL PASMORE</OrgPeople>
								<OrgPeopleDesc>Vice President, Cognizant Technology Solutions</OrgPeopleDesc>

								<OrgPeople>GARY PRUITT</OrgPeople>
								<OrgPeopleDesc>President and CEO, Associated Press</OrgPeopleDesc>

								<OrgPeople>JAMES ROUSMANIERE</OrgPeople>
								<OrgPeopleDesc>Former Editor and President, Keene Sentinel</OrgPeopleDesc>

								<OrgPeople>JANE SASSEEN</OrgPeople>
								<OrgPeopleDesc>Executive Director, McGraw Center for Business Journalism, CUNY Graduate School of Journalism</OrgPeopleDesc>

								<OrgPeople>SUSAN TALALAY</OrgPeople>
								<OrgPeopleDesc>Former Director, Knight International Journalism Fellowships</OrgPeopleDesc>

								<OrgPeople>EDUARDO ULIBARRI</OrgPeople>
								<OrgPeopleDesc>Permanent Representative of Costa Rica to the United Nations</OrgPeopleDesc>

								<OrgPeople>AMY WEBB</OrgPeople>
								<OrgPeopleDesc>CEO, Webbmedia Group</OrgPeopleDesc>

								<OrgPeople>MARGARET WINSHIP</OrgPeople>
								<OrgPeopleDesc>ICFJ Founders Family</OrgPeopleDesc>
								</ul>
						</div>
					</div>
		</Container>
		</Section>
		<Section  name="Donors" >
		<Container id="Donors">
		<TriggeredPendantLeft bp={breakpoints} color="goldenGrass">Donors</TriggeredPendantLeft>
				<div css={css`
					display:grid;
					grid-template-columns: repeat(1, 1fr);
					margin-top: 5rem;
					color: white;
					font-family: interstate condensed;
					@media(min-width:${tablet}){
						grid-template-columns: repeat(2, 1fr);
					}
				`}>
					<ul css={css`
							list-style: none;
							padding-left: 0;
						`}>
						<OrgPeople>Chairman’s Circle</OrgPeople>
						<OrgPeopleDesc>Ahmed Charai</OrgPeopleDesc>
						<OrgPeopleDesc>Pamela Howard</OrgPeopleDesc>
						<OrgPeopleDesc>Rodman and Alice Moorhead</OrgPeopleDesc>
						<OrgPeopleDesc>The Reilly Family</OrgPeopleDesc>
						<OrgPeople>President’s Circle</OrgPeople>
						<OrgPeopleDesc>The Ewing Family</OrgPeopleDesc>
						<OrgPeopleDesc>Anonymous</OrgPeopleDesc>
						<OrgPeopleDesc>Anonymous 2</OrgPeopleDesc>
						<OrgPeople>Benefactors</OrgPeople>
						<OrgPeopleDesc>Michael and Anne Golden</OrgPeopleDesc>
						<OrgPeopleDesc>John Maxwell Hamilton</OrgPeopleDesc>
						<OrgPeople>Leaders</OrgPeople>
						<OrgPeopleDesc>Elizabeth Ballantine and Paul Leavitt</OrgPeopleDesc>
						<OrgPeopleDesc>Joyce Barnathan and Steven Strasser</OrgPeopleDesc>
						<OrgPeopleDesc>Lauretta J. Bruno</OrgPeopleDesc>
						<OrgPeopleDesc>David Callaway</OrgPeopleDesc>
						<OrgPeopleDesc>Vint Cerf</OrgPeopleDesc>
						<OrgPeopleDesc>Patricia Dunnington</OrgPeopleDesc>
						<OrgPeopleDesc>John Harris</OrgPeopleDesc>
						<OrgPeopleDesc>James F. Hoge Jr. and Kathleen Lacey</OrgPeopleDesc>
						<OrgPeopleDesc>Martina Hund-Mejean and Bruno Mejean</OrgPeopleDesc>
						<OrgPeopleDesc>Alex S. Jones</OrgPeopleDesc>
						<OrgPeopleDesc>Marci and Mike McCue</OrgPeopleDesc>
						<OrgPeopleDesc>Rob and Maureen Rehg</OrgPeopleDesc>
						<OrgPeopleDesc>John Towriss, Envoy Strategy Group</OrgPeopleDesc>
						<OrgPeopleDesc>Alexandra Wrage</OrgPeopleDesc>
						<OrgPeopleDesc>Jason H. Wright</OrgPeopleDesc>
						<OrgPeople>Champions</OrgPeople>
						<OrgPeopleDesc>David Elliot Cohen and Laureen Seeger</OrgPeopleDesc>
						<OrgPeopleDesc>Richard Gingras</OrgPeopleDesc>
						<OrgPeopleDesc>Marcy McGinnis</OrgPeopleDesc>
						<OrgPeopleDesc>Nicholas Tzitzon</OrgPeopleDesc>
						<OrgPeopleDesc>Matthew and Lisa Winkler</OrgPeopleDesc>
						<OrgPeopleDesc>Anonymous</OrgPeopleDesc>

						<p><i>* For contributions made in 2019. Donations
						below $5,000 are acknowledged elsewhere
						on our website.</i></p>

					</ul>
					<ul css={css`
							list-style: none;
							padding-left: 0;
						`}>
						<OrgPeople>Foundations</OrgPeople>
						<OrgPeopleDesc>John S. and James L. Knight Foundation</OrgPeopleDesc>
						<OrgPeopleDesc>Bill & Melinda Gates Foundation</OrgPeopleDesc>
						<OrgPeopleDesc>Luminate</OrgPeopleDesc>
						<OrgPeopleDesc>Arnold Ventures</OrgPeopleDesc>
						<OrgPeopleDesc>Bloomberg Philanthropies</OrgPeopleDesc>
						<OrgPeopleDesc>National Endowment for Democracy</OrgPeopleDesc>
						<OrgPeopleDesc>The Brooks and Joan Fortune Family Foundation, Inc.</OrgPeopleDesc>
						<OrgPeopleDesc>Scripps Howard Foundation</OrgPeopleDesc>
						<OrgPeopleDesc>The Ambrose Monell Foundation</OrgPeopleDesc>
						<OrgPeopleDesc>Samuel I. Newhouse Foundation, Inc.</OrgPeopleDesc>
						<OrgPeopleDesc>Gannett Foundation</OrgPeopleDesc>
						<OrgPeople>Corporations</OrgPeople>
						<OrgPeopleDesc>Facebook Journalism Project</OrgPeopleDesc>
						<OrgPeopleDesc>Dow Jones/News Corp</OrgPeopleDesc>
						<OrgPeopleDesc>Microsoft</OrgPeopleDesc>
						<OrgPeopleDesc>Google News Initiative</OrgPeopleDesc>
						<OrgPeopleDesc>Al Jazeera Media Network</OrgPeopleDesc>
						<OrgPeopleDesc>Apple News</OrgPeopleDesc>
						<OrgPeopleDesc>Edelman</OrgPeopleDesc>
						<OrgPeopleDesc>National Geographic</OrgPeopleDesc>
						<OrgPeopleDesc>BakerHostetler</OrgPeopleDesc>
						<OrgPeopleDesc>Univision</OrgPeopleDesc>
						<OrgPeopleDesc>Associated Press</OrgPeopleDesc>
						<OrgPeopleDesc>APCO Worldwide</OrgPeopleDesc>
						<OrgPeopleDesc>CBS News</OrgPeopleDesc>
						<OrgPeopleDesc>CNN</OrgPeopleDesc>
						<OrgPeopleDesc>Discovery</OrgPeopleDesc>
						<OrgPeopleDesc>Fox</OrgPeopleDesc>
						<OrgPeopleDesc>GRF CPAs & Advisors</OrgPeopleDesc>
						<OrgPeopleDesc>Mannheim LLC</OrgPeopleDesc>
						<OrgPeopleDesc>McKinsey & Company</OrgPeopleDesc>
						<OrgPeopleDesc>POLITICO</OrgPeopleDesc>
						<OrgPeopleDesc>The New York Times Company</OrgPeopleDesc>
						<OrgPeopleDesc>The Washington Post</OrgPeopleDesc>
						<OrgPeopleDesc>TRACE International</OrgPeopleDesc>
						<OrgPeopleDesc>Ernst & Young</OrgPeopleDesc>
						<OrgPeopleDesc>Cision</OrgPeopleDesc>
						<OrgPeopleDesc>Cresa</OrgPeopleDesc>
						<OrgPeopleDesc>UBS</OrgPeopleDesc>
						<OrgPeopleDesc>Anonymous</OrgPeopleDesc>
						<OrgPeople>Government Agencies</OrgPeople>
						<OrgPeopleDesc>U.S. Department of State</OrgPeopleDesc>
						<OrgPeopleDesc>United States Agency for International Development</OrgPeopleDesc>
						<OrgPeople>Organizations</OrgPeople>
						<OrgPeopleDesc>World Health Organization</OrgPeopleDesc>
						<OrgPeopleDesc>Radio Free Asia</OrgPeopleDesc>
						<OrgPeopleDesc>Freedom House</OrgPeopleDesc>
						<OrgPeopleDesc>Northwestern University in Qatar</OrgPeopleDesc>
						<OrgPeopleDesc>Stanford University</OrgPeopleDesc>
						<OrgPeopleDesc>Arthur F. Burns Fellowship Program Inc</OrgPeopleDesc>
					</ul>
				</div>
			</Container>
		</Section>
		<div css={css`
			height: 15rem`
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
