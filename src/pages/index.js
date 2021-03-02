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
// import AnimatedColumn from "../components/AnimatedColumn.js"
// import TriggeredCounter from "../components/TriggeredCounter.js"
import ImageQuery from "../components/ImageQuery.js"
import LanguageTicker from "../components/LanguageTicker.js"
// import CountBox from "../components/CountBox.js"
import WinnerLeft from "../components/WinnerLeft.js"
import WinnerRight from "../components/WinnerRight.js"
import Wolf from "../components/Wolf.js"

//Animation Players
import UncontrolledLottie from "../components/UncontrolledLottie.js"
import TriggeredBgColor from "../components/TriggeredBgColor.js"
import TriggeredLottie from "../components/TriggeredLottie.js"

//Animations
import animationMasthead from "../lotties/testchicken7.json"
import animationCameras from "../lotties/cameras.json"
import animationAfrica from "../lotties/africa.json"
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
	 maxWidth: ['90%','90%','90%','1024px',]	
	})}
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
				paddingRight: ['1rem', '1rem', '1rem', '4rem']
			})}>
				ANNUAL REVIEW
			</div>
			<span css={mq({
					paddingRight: '2rem',
					whiteSpace: 'noWrap',
					fontSize: ['1em', '2em','3em','4em']
			})}> 
				It Takes a Journalist 
			</span> 
		</PendantLeft>
		<Container css={css`margin-top:3rem;margin-bottom:-1.1rem`}>
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
				`}>
				<TriggeredTextBlock>
					<div css={css`
						font-size:4em;
						font-family:ubuntu;
						line-height:2`
					}>Mission</div>
					<div css={css`
						font-size: 2em;
						font-family:
						interstate condensed;
						line-height: 1.5`
					}>We empower an unparalleled global network of journalists to produce news  reports that lead to better governments, stronger economies, more vibrant  societies and healthier lives.
					</div>
				</TriggeredTextBlock>
			</Container>
		</Section>
		<Section name="Joyce">
			<TriggeredBgColor color='goldenGrass' />
			<Container>
				<TriggeredPendantRight color='curiousBlue'>
					A Letter From the President
				</TriggeredPendantRight>
				<div css={css`
					display: grid;
					grid-template-columns: 5% 95%;
					margin-bottom: 2rem;
					margin-top: 15rem;
					`}>
					<PhotoSlant css={css`transform:translatex(-35%)`} src="Joyce.jpg" />
					<ParagraphSlant>
						<p css={css`margin-top:-.5rem`}>
						Over <TextPop>36 years</TextPop>, ICFJ has provided more than <TextPop>150,000 journalists</TextPop> from 180 countries with valuable programs and resources. But we’ve never had a <TextPop>year like 2020</TextPop>.
						</p>
						<p>						
						The pandemic that raged across the globe would have been much worse if journalists had not fulfilled their vital role of providing audiences with accurate, lifesaving news, and doing it while combating the spread of false information. 
						</p>
						<p>
						We at ICFJ are doing our best to help journalists better cover the story of the century. At the onset of COVID-19, we galvanized quickly to help them gain access to top epidemiologists and health practitioners, to the world’s best trainers in digital journalism techniques, to disinformation and media sustainability experts. As you’ll see below, tens of thousands of journalists are benefiting from that effort.
						</p>
						<p>
							I'm a Placeholder for the Accordian
						</p>
					</ParagraphSlant>
				</div>
			</Container>
			<TriggeredBgColor color='goldenGrass' />
		</Section>
		<Section name="Change">
			<TriggeredBgColor color='curiousBlue' />
				<TriggeredLottie animation={animationCameras} loop={true} />
				<Container>
					<TriggeredPendantLeft color="boulder">Our Vast Network </TriggeredPendantLeft>
					<div css={css`
						display:grid;
						grid-template-columns: 70% 30%;
						grid-column-gap: 4rem;
						margin-top: 4rem`
					}>
					<TriggeredHeadline  heading="Journalists" 
					subheading="Change The World" />
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
					<Quote css={css`
						height: 20rem;
						display:flex;
						align-items: center;
						width: fit-content;
						margin-left:auto;
						margin-right: auto;`}>
						 "ICFJ has helped us improve the lives of the poorest of the poor by bringing them reliable, crowdsourced news for the first time." - Devansh Mehta, CGNET Swara
					</Quote>
					<FrameEmbed buttonColor='goldenGrass' css={css`margin-top:4rem`} caption="ICFJ is giving reporters the skills to cover the most pressing issues of the day." >
						<div css={css`height:640px;width:100%;background:deeppink`} />
					</FrameEmbed>
					<FrameEmbed buttonColor='goldenGrass' css={css`margin-top:4rem`} caption="ICFJ is giving reporters the skills to cover the most pressing issues of the day." >
						<div css={css`height:640px;width:100%;background:lime`} />
					</FrameEmbed>
				</Container>
			<TriggeredBgColor color='curiousBlue' />
		</Section>
		<Section name="Resources">
				<TriggeredBgColor color='boulder' />
				<TriggeredLottie animation={animationCameras} loop={true} />
				<Container>
					<TriggeredPendantRight color="fruitSalad">New Resources </TriggeredPendantRight>
					<div css={css`
						margin-top: 4rem`
					}>
					<TriggeredHeadline right heading="Serving Journalists" 
					subheading="In A Crisis" />
					<TriggeredTextBlock css={css`
						color: white;
						font-family: interstate condensed;
						font-size: 1.7em;
						line-height: 2;
						text-align: right;
						`
					}>ICFJ acted fast to help the journalists in our global network provide accurate,life-saving information on the COVID-19 pandemic. The program connectsjournalists with experts, information and each other in five languages,through weekly webinars, Facebook groups and resources published by our <Highlighter color="fruitSalad">International Journalists’ Network (IJNet).</Highlighter>
					</TriggeredTextBlock>
				</div>
				<FrameEmbed buttonColor="fruitSalad" css={css`margin-top:4rem`} caption="ICFJ is giving reporters the skills to cover the most pressing issues of the day." >
						<div css={css`height:640px;width:100%;background:deeppink`} />
				</FrameEmbed>
				<Quote css={css`
						display:flex;
						align-items: center;
						width: fit-content;
						margin-left:auto;
						margin-right: auto;
						margin-bottom: 15em;`}>
						“ICFJ gave me and my listeners a global perspective of how other countries were handling the pandemic. ” - Chidera Rosecamille Aneke, Darling FM
				</Quote>
				<div css={css`
					display: grid;
					grid-template-columns: repeat(2, auto);
					grid-column-gap: 2rem;
					grid-row-gap: 2rem;
				`}>
					<ImageQuery filename='Joyce.jpg' />
					<ImageQuery filename='Joyce.jpg' />
					<ImageQuery filename='Joyce.jpg' />
					<ImageQuery filename='Joyce.jpg' />
					<ImageQuery filename='Joyce.jpg' />
					<ImageQuery filename='Joyce.jpg' />
				</div>
				<div css={css`color:white;margin-top:15rem;margin-bottom:10rem`}>
					<Subheader>The Go-To Site for Journalists WorldWide</Subheader>
					<p>Offering Expert Advice, Tools & Opportunities for Journalists</p>
				</div>
				<div css={css`width:60%; margin-right:auto;margin-left:auto`} >
					<ImageQuery filename='ijnet.png' />
				</div>
			</Container>
		<LanguageTicker css={css`margin-top:10rem;margin-bottom:10rem`}>Arabic Chinese English French Persian Portuguese Russian Spanish Arabic Chinese English French Persian Portuguese Russian Spanish Arabic Chinese English French Persian Portuguese Russian Spanish </LanguageTicker>
				<TriggeredBgColor color='boulder' />
		</Section>
		<Section>
			<TriggeredBgColor color='fruitSalad' />
			<TriggeredLottie animation={animationCameras} loop={true} />
			<Container>
				<TriggeredPendantLeft color="mineShaft">Investigative Networks</TriggeredPendantLeft>
				<div css={css`
					margin-top: 4rem`
				}>
				<TriggeredHeadline heading="Holding the Power to Account" 
				subheading="when It Matters Most" />
				</div>
				<Subheader>Journalism with Impact </Subheader> 
				<div css={css`
					display: inline-grid;
					grid-template-columns: 5% 95%;
					margin-top: 10rem;
					margin-bottom: -50vh;
				`}>
					<PhotoSlant  css={css`transform:translatex(-35%)`}src="Fabiola.jpg" />
					<ParagraphSlant css={css`padding-top:3.5rem`}>Peru-based <span css={theme=>({color:theme.colors.goldenGrass})}>ICFJ Knight Fellow Fabiola Torres</span> created a health news outlet that is uncovering corruption during COVID-19. They exposed inflated prices for face shields, environmental violations by corporations and wasted protective gear spending,prompting government action.
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
							font-family: interstate condensed;
							font-size: 1.5em;
							line-height: 2;`
						}>
							<p>
								Stories by ICFJ partner, the Organized Crime and Corruption Reporting Project (OCCRP), based in Eastern Europe, have co tributed to more than <span css={theme=>({color:theme.colors.mineShaft})}>$7.3 billion in illicitly acquired funds </span>that have since been recovered.
							</p>
							<p>Journalists in the Latin-American Connectas network, which  ICFJ helped launch, have produced more than <TextPop color="goldenGrass">27/4 in-depth stories</TextPop> exposing is managementof billions of dollars in public funds.
							</p>
						</div>
					</div>
				</div>

			</Container>
			<TriggeredBgColor color='fruitSalad' />
		</Section>
		<Section name="Networks">
			<TriggeredBgColor color='mineShaft' />
			<TriggeredLottie animation={animationCameras} loop={true} />
			<Container>
				<TriggeredPendantRight color="sanMarino">Investigative Networks</TriggeredPendantRight>
				<div css={css`
					margin-top: 4rem`
				}>
				<TriggeredHeadline right heading="Pioneering New Ways" 
				subheading="To Get the Truth Out in a Pandemic" />
				</div>
				<div css={css`
					display: grid;
					grid-template-columns: 40% 60%;
					margin-top: 15rem;
				`}>
				<div>
					<PhotoSlant  css={css`transform:translatex(-35%); z-index: 1`}src="Hannah.jpg" />
					<TriggeredLottie
					 animation={animationAfrica}
					 loop={false}
					 css={css`
					 	transform: translate(20%, -40%);
					 	z-index: -1;
					 `} />					
				</div>
				<TriggeredTextBlock css={css`
						color: white;
						font-family: interstate condensed;
						font-size: 1.5em;
						line-height: 2;
						text-align: left;
						padding-top: 4em;
						`
					}>
						Journalists, fact checkers and social media influencers ––	including a government minister	and Nollywood star -- are teaming up to combat misinformation about health and other issues that matter	to people’s lives, a project led by <span css={theme=>({color:theme.colors.valencia})}>ICFJ Knight Fellow Hannah Ajakaiye.</span>
				</TriggeredTextBlock>
				</div>
				<div css={css`
					display: grid;
					grid-template-columns: 60% 40%;
					margin-top: 5rem;
				`}>

				<TriggeredTextBlock css={css`
						color: white;
						font-family: interstate condensed;
						font-size: 1.5em;
						line-height: 2;
						text-align: right;
						`
					}>
						Women journalists and data analysts from five countries shed light on marginalized groups -- such as domestic workers and HIV/AIDS patients -- hardest hit by the pandemic, as part of the Africa Women’s Journalism Project, led by <span css={theme=>({color:theme.colors.goldenGrass})}>ICFJ Knight Fellow Catherine Gicheru.</span>
				</TriggeredTextBlock>
				<div>
				<PhotoSlant  css={css`transform:translatex(35%); z-index: 1`}src="Catherine.jpg" />
					<TriggeredLottie
					 animation={animationAfrica}
					 loop={false}
					 css={css`
					 	transform: translate(-20%, -40%);
					 	z-index: -1;
					 `} />					
				</div>
				</div>
								<div css={css`
					display: grid;
					grid-template-columns: 40% 60%;
					margin-top: 5rem;
				`}>
				<div>
					<PhotoSlant  css={css`transform:translatex(-35%); z-index: 1`}src="Sergio.jpg" />
					<TriggeredLottie
					 animation={animationAfrica}
					 loop={false}
					 css={css`
					 	transform: translate(20%, -40%);
					 	z-index: -1;
					 `} />					
				</div>
				<TriggeredTextBlock css={css`
						color: white;
						font-family: interstate condensed;
						font-size: 1.5em;
						line-height: 2;
						text-align: left;
						padding-top: 2em;
						`
					}>
						Journalists can more quickly find expert sources of scientific information thanks to Science Pulse, a free tool created by a <span css={theme=>({color:theme.colors.sanMarino})}>ICFJ Knight Fellow ergio Spagnuolo </span>that features the latest updates from more than 1,300 verified scientists and scientific organizations tweeting in English, Portuguese and Spanish.
				</TriggeredTextBlock>
				</div>
			</Container>

			<TriggeredBgColor color='mineShaft' />
		</Section>
		<Section name="Sustainability">
			<TriggeredBgColor color='sanMarino' />
			<TriggeredLottie animation={animationCameras} loop={true} />
			<Container>
				<TriggeredPendantLeft color="valencia">Sustainability</TriggeredPendantLeft>
				<div css={css`
					margin-top: 4rem`
				}>
				<TriggeredHeadline  heading="Helping Independent" 
				subheading="News Thrive" />
				</div>
				<TriggeredTextBlock css={css`
						color: white;
						font-family: interstate condensed;
						font-size: 2em;
						line-height: 2;
						padding-top: 2em;
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
			<Quote css={css`
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
			<TriggeredLottie animation={animationCameras} loop={true} />
			<Container>
				<TriggeredPendantRight color="goldenGrass">Thought Leadership</TriggeredPendantRight>
				<div css={css`
					margin-top: 4rem`
				}>
				<TriggeredHeadline right heading="Shaping the Future" 
				subheading="Of Journalism" />
				</div>
				<TriggeredTextBlock css={css`
					color: white;
					font-family: interstate condensed;
					font-size: 1.7em;
					line-height: 2;
					margin-top: 3rem
					`
				}>During a tumultous year, ICFJ identified the impact of the pandemic on journalism worldwide as well as the escalating problem of online violence against women journalists.
				</TriggeredTextBlock>
				<div css={theme=>({
					width: '100%',
					height: '780px',
					border: '16px solid',
					borderColor: theme.colors.goldenGrass,
					marginTop: '10rem',
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
					 `}><Subheader>Most Comprehensive, Geographically Diverse Survey on Online Violence against Women Journalists</Subheader>
					</div>
					<div css={css`
						background: rgba(212, 73, 52, .6);
						width: 212px;
						position: absolute;
						bottom: 0;
						right: 0;
						z-index: 999;
						padding: 2rem 1rem 3rem 1rem;
						font-family: interstate condensed;
						font-size: 1.5em;
						color: white;
					`}>
						Political actors were the second most common sources of abuse <TextPop color="goldenGrass">(37%)</TextPop> after “anonymous or unknown attackers” <TextPop color="goldenGrass">(57%)</TextPop>.
					</div>
					<div css={css`
						background: rgba(221, 175, 36, .6);
						width: 212px;
						position: absolute;
						top: 280px;
						right: 280px;
						z-index: 999;
						padding: 2rem 1rem 3rem 1rem;
						font-family: interstate condensed;
						font-size: 1.5em;
					`}>
						<span css={theme=>({color:theme.colors.valencia})}>One in five </span>women respondents said they had been attacked or abused offline in incidents seeded online.
					</div>
					<ImageQuery css={css`height: 510px`} filename='Anna.jpeg' />
				</div>
				<p css={css`color:white; font-style:italic;margin:3em`}><Highlighter color="mineShaft"> *Research in partnership with the Tow Center for Digital Journalism at Columbia University
			</Highlighter>
			</p>
			</Container>
			<TriggeredBgColor color='valencia' />
		</Section>
		<Section name="Honorees">
			<TriggeredBgColor color='white' />
			<TriggeredLottie animation={animationCameras} loop={true} />
			<Container>
				<TriggeredPendantLeft color="sanMarino">Honorees</TriggeredPendantLeft>
				<div css={css`
					margin-top: 4rem`
				}>
				<TriggeredHeadline right heading="Standing With" 
				subheading="Intrepid Journalists" />
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
					image= "Wolf.png"
					name="Wolf Blitzer"
					title= "Lead Political Anchor, CNN"
					bio="I am a news guy lots of news lots and lots of it"
				/>
				<WinnerRight
					image= "Fareed.png"
					award="Founders Award"
					name="Fareed Z"
					title= "host,cnn"
					bio="I am a news guy lots of news lots and lots of it"
				/>
				<WinnerLeft 
					image= "Fareed.png"
					award="Founders Award"
					name="Fareed Z"
					title="host,cnn"
					bio="I am a news guy lots of news lots and lots of it"
				/>
				<WinnerRight
					image= "Fareed.png"
					award="Founders Award"
					name="Fareed Z"
					title= "host,cnn"
					bio="I am a news guy lots of news lots and lots of it"
				/>
				<WinnerLeft 
					image= "Fareed.png"
					award="Founders Award"
					name="Fareed Z"
					title="host,cnn"
					bio="I am a news guy lots of news lots and lots of it"
				/>
				<div css={css`margin-top: 10rem;height:640px;width:100%;background:navy`} />
			</Container>
				<TriggeredBgColor color='white' />
		</Section>
		<Section name="Financials">
			<TriggeredBgColor color='curiousBlue' />
			<TriggeredLottie animation={animationCameras} loop={true} />
			<Container>
				<TriggeredPendantRight color="boulder">Financials</TriggeredPendantRight>	
				<Subheader css={css`color:white;margin-top: 10rem;`}>2020 Revenue: $19.9 million</Subheader>
				<Subheader css={css`color:white`}>2020 Expense Breakdown:</Subheader>
				<TriggeredLottie 
					css={css`
					width: 80%;
					margin-right:auto;
					margin-left:auto;
					margin-top: 10rem;`}
					animation={animationPie} loop={false}
				 />
				<ImageQuery filename="fourstar.png" css={css`
					margin-top: 10rem;
					margin-bottom: 10rem;
				`} />
				 <Subheader css={css`color:white`}>ICFJ’s four-star track record with Charity Navigator places us among the top 2 percent of nonprofits evaluated.</Subheader>
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
				 <Subheader css={css`color:white`}>ICFJ also has a platinum-level rating from GuideStar, the highest ranking given.</Subheader>
			</Container>
				<TriggeredBgColor color='curiousBlue' />
		</Section>
		<Section name="BoardMembers">
			<TriggeredBgColor color='fruitSalad' />
			<TriggeredLottie animation={animationCameras} loop={true} />
			<Container>
				<TriggeredPendantLeft color="goldenGrass">Board Members</TriggeredPendantLeft>
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
				<TriggeredPendantLeft color="goldenGrass">Donors</TriggeredPendantLeft>
				<div css={css`
					display:grid;
					grid-template-columns: repeat(2, 1fr);
					margin-top: 5rem;
					color: white;
					font-family: interstate condensed;
					font-size: 2em;
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
