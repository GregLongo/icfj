/** @jsx jsx */

import { useEffect } from "react"

//Libraries
import { Global, css, jsx, ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import facepaint from "facepaint"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import LazyLoad from "react-lazy-load"

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
import Social from "../components/Social.js"

//Animation Players
import UncontrolledLottie from "../components/UncontrolledLottie.js"
import TriggeredBgColor from "../components/TriggeredBgColor.js"
import TriggeredLottie from "../components/TriggeredLottie.js"

//Animations
import animationMasthead from "../lotties/Masthead_CompressedStrips_V02"
import animationCameras from "../lotties/cameras.json"
import animationPenPaper from "../lotties/penpaper.json"
import animationAudio from "../lotties/audio.json"
import animationTweet from "../lotties/tweet.json"
import animationAfrica from "../lotties/africa.json"
import animationAfrica2 from "../lotties/africa2.json"
import animationBrazil from "../lotties/brazil.json"
import animationSouthAmerica from "../lotties/southamerica.json"
import animationPie from "../lotties/pie_nu.json"
import animationTribute from "../lotties/tribute.json"
import animationMiddleEast from "../lotties/northafrica_middleeast.json"

//svg
import Platinum from "../svg/platinum.svg"

//patterns

import PatternTools from "../images/Pattern_Tools_Kuler.jpg"
import PatternCountries from "../images/Pattern_Countries_Kuler.jpg"
import PatternLanguages from "../images/Pattern_Languages_Kuler.jpg"
import PatternCovid from "../images/Pattern_Covid_Kuler.jpg"
import Languages from "../images/languages_ticker.png"

//Themes
import theme from "../themes/theme.js"

// Constants, Queries

const smol = "400px",
  mobile = "480px",
  tablet = "1024px",
  desktop = "1200px",
  xl = "1920px"

const breakpoints = [smol, mobile, tablet, desktop, xl]

const mq = facepaint(breakpoints.map(bp => `@media (min-width:${bp})`))

//Layout Styles
const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  ${mq({
    maxWidth: ["90%", "90%", "90%", "1024px"],
    marginTop: ["10rem", "10rem", "10rem"],
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
  @media (min-width: ${mobile}) {
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
  opacity: 0.4;
`
const Link = styled.a`
  color: white;
`
const OrgPeople = styled.li`
  font-family: ubuntu;
  font-size: 1.5em;
  color: ${props => props.theme.colors.goldenGrass};
  margin-top: 1.5rem;
  @media (min-width: ${mobile}) {
    font-size: 1.75em;
  }
`
const OrgPeopleDesc = styled.li`
  font-family: interstate-condensed;
  font-size: 1.5em;
  font-weight: 500;
  color: white;
  @media (min-width: ${mobile}) {
    font-size: 1.5em;
  }
`
const DonorTitle = styled(OrgPeople)``

const Donor = styled(OrgPeopleDesc)``

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    //Creates CORS error when not on ICFJ domain. Uncomment For Production
    const pmFrame = new window.Pmframe({
      element: "mosaics",
      page: "https://icfjmosaic.com",
      minWidth: "300",
      pmBrand: 1,
    })
    pmFrame.init()

    const timer = setTimeout(() => {
      ScrollTrigger.refresh(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            body,
            html {
              margin: 0;
              overflow-x: hidden;
              width: 100vw;
            }
          `}
        />
        <TriggeredBgColor color="white" />
        <Header bp={breakpoints} />
        <PendantLeft bp={breakpoints} color="mineShaft">
          <div
            css={mq({
              display: "table-caption",
              fontFamily: "interstate-condensed",
              fontSize: [".75em", ".85em", "1.25em", "1.5em"],
              maxWidth: ["fit-content", "fit-content", "fit-content", "130px"],
              lineHeight: "1",
              fontWeight: "200",
              textAlign: "center",
              wordSpacing: "999999px",
              paddingTop: "1rem ",
              paddingBottom: "1rem",
              paddingRight: ["1rem", "1.5rem", "1.5rem", "4rem"],
            })}
          >
            ANNUAL REVIEW
          </div>
          <span
            css={mq({
              paddingRight: ["1rem", "2rem", "2rem", "3rem"],
              whiteSpace: "noWrap",
              fontSize: ["1.7em", "2em", "2.5em", "3em"],
            })}
          >
            It Takes a Journalist
          </span>
        </PendantLeft>
        <Container
          css={mq({
            marginTop: ["2rem", "2rem", "3rem"],
            marginBottom: ["-.6rem", "-.7rem", "-1rem", "-1.2rem"],
            maxWidth: ["100%", "100%", "100%", "1024px"],
          })}
        >
          <UncontrolledLottie  animation={animationMasthead} />
        </Container>
        <TriggeredBgColor color="white" />
        <Section
          id="Mission"
          name="Mission"
          css={theme => ({ background: theme.colors.mineShaft })}
        >
          <Container
            css={css`
              color: white;
              height: 15rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              text-align: left;
              margin-top: 0;
              margin-bottom: 3rem;
              @media (min-width: ${smol}) {
                height: 20rem;
              }
              @media (min-width: ${tablet}) {
                height: 30rem;
                margin-bottom: 5rem;
              }
            `}
          >
            <TriggeredTextBlock
              css={css`
                @media (max-width: ${tablet}) {
                  opacity: 1 !important;
                }
              `}
            >
              <div
                css={mq({
                  fontSize: ["1.5em", "3em", "3em", "4em"],
                  fontFamily: "ubuntu",
                  lineHeight: "1.5",
                  opacity: "1",
                })}
                id="Mission-To"
              >
                Mission
              </div>
              <div
                css={mq({
                  fontSize: ["1em", "1.5em", "1.7em", "2em"],
                  fontFamily: "interstate-condensed",
                  lineHeight: 1.5,
                  fontWeight: "500",
                })}
              >
                We empower an unparalleled global network of journalists to
                produce news reports that lead to better governments, stronger
                economies, more vibrant societies and healthier lives.
              </div>
            </TriggeredTextBlock>
            <TriggeredBgColor color="goldenGrass" />
          </Container>
        </Section>
        <Section name="Joyce">
          <Container id="Joyce">
            <TriggeredPendantRight
              css={css`
                @media (max-width: ${smol}) {
                  font-size: 1em;
                }
                @media (max-width: ${tablet}) {
                  font-size: 0.6em;
                }
              `}
              bp={breakpoints}
              color="curiousBlue"
              id="Joyce-To"
            >
              A Letter from the President
            </TriggeredPendantRight>
            <div
              css={css`
                display: grid;
                grid-template-columns: 5% 95%;
                margin-top: 3rem;
                @media (min-width: ${tablet}) {
                  margin-top: 5rem;
                }
              `}
            >
              <PhotoSlant
                bp={breakpoints}
                css={css`
                  transform: translatex(-35%);
                `}
                src="Joyce.jpg"
              />
              <ParagraphSlant
                bp={breakpoints}
                css={css`
                  margin-bottom: 5rem;
                  @media (min-width: ${tablet}) {
                    margin-bottom: 5rem;
                  }
                `}
              >
                <p
                  css={css`
                    margin-top: -0.5rem;
                  `}
                >
                  Over 36 years, ICFJ has provided more than{" "}
                  <TextPop>150,000 journalists</TextPop> from{" "}
                  <TextPop> 180 countries</TextPop> with valuable programs and
                  resources. But we’ve never had a year like 2020.
                </p>
                <p>
                  The pandemic that raged across the globe would have been much
                  worse if journalists had not fulfilled their vital role of
                  providing audiences with{" "}
                  <TextPop>accurate, lifesaving news,</TextPop> and doing it
                  while combating the spread of false information.
                </p>
                <p
                  css={css`
                    margin-bottom: 0;
                  `}
                >
                  We at ICFJ are doing our best to help journalists better cover
                  the <TextPop>story of the century.</TextPop> At the onset of
                  COVID-19, we galvanized quickly to help them gain access to
                  top epidemiologists and health practitioners, to the world’s
                  best trainers in digital journalism techniques, to
                  disinformation and media sustainability experts. As you’ll see
                  below, tens of thousands of journalists are benefiting from
                  that effort.
                </p>
                <p>
                  In other ICFJ programs, investigative journalists in our
                  networks are collaborating to uncover corruption by those
                  seeking to get rich from the pandemic.{" "}
                  <TextPop>Pioneers in media innovation</TextPop> are creating
                  new data and social media tools to help journalists tell the
                  stories of COVID-19 better. And sustainability experts are
                  helping news outlets improve the bottom line in a time when
                  economic and political forces threaten to shut down
                  independent voices.
                </p>
                <p>
                  Our motto is <TextPop>It Takes a Journalist.</TextPop> Whether
                  the story is a global pandemic, racial injustice, climate
                  change or government malfeasance, it takes a journalist to
                  bring the public factual information that can mean the
                  difference between life and death. And whatever the story,
                  ICFJ will be there to support and empower the journalists who
                  are helping make our world a better place.
                </p>
                <p
                  css={css`
                    font-size: 1.5em;
                  `}
                >
                  Joyce Barnathan, President
                </p>
                <ImageQuery
                  filename="sig.png"
                  css={css`
                    transform:scale(.7)
                      @media(min-width:${mobile}) {
                      margin-left: 5rem;
                      transform: scale(0.8);
                    }
                    @media (min-width: ${desktop}) {
                      margin-left: 5rem;
                      margin-bottom: -10rem;
                      transform-origin: top left;
                      transform: scale(.7);
                    }
                  `}
                />
              </ParagraphSlant>
            </div>
          </Container>
          <TriggeredBgColor color="goldenGrass" />
        </Section>
        <Section name="Change">
          <TriggeredBgColor color="curiousBlue" />
          <TriggeredLottie
            css={css`
              opacity: 0.7;
            `}
            animation={animationPenPaper}
            loop={true}
          />
          <Container id="Change">
            <TriggeredPendantLeft
              bp={breakpoints}
              color="boulder"
              id="Change-To"
            >
              Our Vast Network{" "}
            </TriggeredPendantLeft>
            <div
              css={css`
                display: grid;
                grid-template-columns: 100%;
                grid-column-gap: 3rem;
                margin-top: 2rem;
                @media (min-width: ${tablet}) {
                  grid-template-columns: 60% 40%;
                }
              `}
            >
              <TriggeredHeadline bp={breakpoints}>
                Journalists
                <span
                  css={css`
                    color: #fff;
                  `}
                >
                  {" "}
                  Change the <br></br>World
                </span>
              </TriggeredHeadline>
              <TriggeredTextBlock
                css={css`
                  color: white;
                  font-family: interstate-condensed;
                  font-size: 1.5em;
                  line-height: 1.65;
                  font-weight: 500;
                  transition-delay: 10ms;
                  @media (min-width: ${mobile}) {
                    font-size: 1.7em;
                  }
                `}
              >
                Tens of thousands of journalists in our global network produce
                news reports that lead to better governments, economies,
                societies and lives.
              </TriggeredTextBlock>
            </div>
            <FrameEmbed
              bp={breakpoints}
              buttonColor="goldenGrass"
              caption="Click on this photo to meet members of our inspiring network."
              css={css`
                width: 100%;
                max-height: 620px;
                overflow: hidden;
                margin-top: 3rem;
                @media (min-width: ${tablet}) {
                  margin-top: 5rem;
                  max-height: 765px;
                }
              `}
            >
            <div id="mosaics"></div>
            </FrameEmbed>
            <div
              css={css`
                color: white;
                font-family: interstate-condensed;
                font-weight: 700;
                font-size: 1.5em;
                line-height: 2;
                @media (min-width: ${mobile}) {
                  font-size: 2.25em;
                }
              `}
            >
              Better Journalism, Better Lives
            </div>
            <FrameEmbed
              bp={breakpoints}
              buttonColor="goldenGrass"
              caption="Learn how ICFJ is giving reporters the skills to cover today's most pressing issues."
              css={css`
                margin-top: 1.75rem;
                width: 100%;
                @media (min-width: ${mobile}) {
                  margin-top: 5.5rem;
                }
                @media (min-width: ${tablet}) {
                  margin-top: 2.5rem;
                }
              `}
            >
              <LazyLoad debounce={false} offsetTop={200}>
                <iframe
                  title="vidtwo"
                  src="https://www.youtube.com/embed/f1SBTk3CXhI"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </LazyLoad>
            </FrameEmbed>
            <Quote
              bp={breakpoints}
              css={mq({
                height: ["25rem", "20rem", "35rem", "40rem"],
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                // marginTop: '15rem',
                marginLeft: "auto",
                marginRight: "auto",
              })}
            >
              With ICFJ’s support, we are partnering with under-resourced
              communities to change lives with reliable, crowdsourced news."
              <br></br>
              <span
                css={css`
                  opacity: 0.5;
                `}
              >
                &mdash; Devansh Mehta, CGNet Swara, India{" "}
              </span>
            </Quote>
          </Container>
          <TriggeredBgColor color="curiousBlue" />
        </Section>
        <Section name="Resources">
          <TriggeredBgColor color="boulder" />
          <TriggeredLottie
            css={css`
              opacity: 0.7;
            `}
            animation={animationAudio}
            loop={true}
          />
          <Container id="Resources">
            <TriggeredPendantRight
              bp={breakpoints}
              color="fruitSalad"
              id="Resources-To"
            >
              New Resources{" "}
            </TriggeredPendantRight>
            <div
              css={css`
                margin-top: 3rem;
              `}
            >
              <TriggeredHeadline bp={breakpoints} right>
                <span
                  css={css`
                    color: #fff;
                  `}
                >
                  {" "}
                  Serving Journalists{" "}
                </span>
                During A Crisis
              </TriggeredHeadline>
              <TriggeredTextBlock
                css={css`
                  color: white;
                  font-family: interstate-condensed;
                  font-size: 1.15em;
                  line-height: 1.75;
                  text-align: right;
                  margin-top: 2rem;
                  font-weight: 500;
                  @media (min-width: ${mobile}) {
                    font-size: 1.7em;
                  }
                `}
              >
                ICFJ acted fast to help the journalists in our global network
                provide vital information on the COVID-19 pandemic. The program
                connects journalists with experts, information and each other in
                five languages, through weekly webinars, Facebook groups and
                resources published by our <br></br>
                <Highlighter color="fruitSalad">
                  International Journalists’ Network (IJNet).
                </Highlighter>
              </TriggeredTextBlock>
            </div>
            <FrameEmbed
              bp={breakpoints}
              height="570px"
              buttonColor="fruitSalad"
              caption="Learn more about ICFJ’s world-leading COVID-19 journalism initiative."
              css={css`
                margin-top: 5rem;
                width: 100%;
                max-height: 600px;
                @media (min-width: ${mobile}) {
                  margin-top: 5rem;
                }
              `}
            >
              <LazyLoad debounce={false} offsetTop={200}>
                <iframe
                  title="vidfour"
                  width="100%"
                  height="570px"
                  src="https://www.youtube.com/embed/UoshtxBZhGs"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </LazyLoad>
            </FrameEmbed>
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-row-gap: 2rem;
                margin-top: 3rem;
                @media (min-width: ${tablet}) {
                  margin-top: 10rem;
                  grid-template-columns: repeat(4, 1fr);
                }
              `}
            >
              <AnimatedColumn
                bp={breakpoints}
                image={PatternTools}
                color="valencia"
                title="Forum Members"
                val="10200"
              />
              <AnimatedColumn
                bp={breakpoints}
                image={PatternCountries}
                color="goldenGrass"
                title="Countries"
                val="100"
              />
              <AnimatedColumn
                bp={breakpoints}
                image={PatternLanguages}
                color="fruitSalad"
                title="Languages"
                val="5"
              />
              <AnimatedColumn
                bp={breakpoints}
                image={PatternCovid}
                color="affair"
                title="COVID-19 Resources"
                val="840"
                sign="+"
              />
            </div>
            <Quote
              bp={breakpoints}
              css={css`
                display: flex;
                align-items: center;
                width: fit-content;
                margin-left: auto;
                margin-right: auto;
                margin-top: 5rem;
                margin-bottom: 5rem;
                @media (min-width: ${tablet}) {
                  margin-top: 7rem;
                  margin-bottom: 7rem;
                }
              `}
            >
              ICFJ gave me and my listeners a global perspective of how other
              countries were handling the pandemic. ”<br></br>
              <span
                css={css`
                  opacity: 0.5;
                `}
              >
                &mdash; Chidera Rosecamille Aneke, Darling FM, Nigeria{" "}
              </span>
            </Quote>
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(2, auto);
                grid-column-gap: 2rem;
                grid-row-gap: 2rem;
              `}
            >
              <ImageQuery filename="Sid.jpg" />
              <ImageQuery filename="redshoes.jpg" />
              <ImageQuery filename="maskgirlcrop.png" />
              <ImageQuery filename="docwhite.jpg" />
              <ImageQuery filename="docblue.png" />
              <ImageQuery filename="agnes.png" />
            </div>
            <Credits>
              {" "}
              Credits: Siddharth Bokolia (top left), John Gitonga (top right),
              Lucina Paternesi Meloni (middle left), Carolyn Sung (middle
              right), Amit Chakraborty (bottom left), Agnes Penda (bottom right)
            </Credits>
            <div
              css={css`
                color: white;
                margin-top: 3rem;
                margin-bottom: 1rem;
                @media (min-width: ${tablet}) {
                  margin-top: 5rem;
                  margin-bottom: 2.5rem;
                }
              `}
            >
              <div
                css={css`
                  display: grid;
                  grid-template-columns: 100%;
                  grid-column-gap: 1.5rem;
                  margin-top: 2rem;
                  @media (min-width: ${tablet}) {
                    grid-template-columns: 6fr 4fr;
                  }
                `}
              >
                <div>
                  <Subheader>
                    <span
                      css={theme => ({
                        color: theme.colors.curiousBlue,
                        fontWeight: "800",
                      })}
                    >
                      The World's Most Comprehensive Site for Journalists{" "}
                    </span>
                  </Subheader>
                  <p
                    css={css`
                      font-family: interstate-condensed;
                      font-size: 1.75em;
                      font-weight: 500;
                    `}
                  >
                    Offering expert advice, tools and opportunities for the news
                    media
                  </p>
                </div>
                <div css={css``}>
                  <a
                    href="https://ijnet.org"
                    aria-label="IJNet Link"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <ImageQuery
                      css={css`
                        @media (max-width: ${tablet}) {
                          max-width: 60%;
                          margin: auto;
                        }
                      `}
                      filename="ijnet.png"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              css={css`
                margin-top: 2rem;
                display: grid;
                font-family: interstate-condensed;
                font-weight: 500;
                grid-template-columns: 100%;
                @media (min-width: ${tablet}) {
                  margin-top: 2.5rem;
                  grid-template-columns: 25% 35% 40%;
                }
                div {
                  text-align: center;
                  justify-content: center;
                  display: flex;
                  flex-direction: column;
                }
                span {
                  color: white;
                  font-size: 2em;
                }
              `}
            >
              <div
                css={css`
                  @media (min-width: ${tablet}) {
                    border: 20px solid #149ee7;
                    padding: 2rem;
                  }
                `}
              >
                <TriggeredCounter
                  css={theme => ({ color: theme.colors.black })}
                  val={"8"}
                />
                <span>Languages</span>
              </div>
              <div
                css={css`
                  @media (min-width: ${tablet}) {
                    border: 20px solid black;
                    padding: 2rem;
                  }
                `}
              >
                <TriggeredCounter
                  css={theme => ({
                    color: theme.colors.curiousBlue,
                    fontSize: "8em",
                  })}
                  val={"1725"}
                />
                <span>Resources</span>
              </div>
              <div
                css={css`
                  @media (min-width: ${tablet}) {
                    border: 20px solid #149ee7;
                    padding: 2rem;
                  }
                `}
              >
                <TriggeredCounter
                  css={theme => ({
                    color: theme.colors.black,
                    fontSize: "6em",
                  })}
                  val={"182000"}
                />
                <span>Average Monthly Visitors</span>
              </div>
            </div>
          </Container>
          <LanguageTicker
            css={css`
              margin-top: 5rem;
              margin-bottom: 0rem;
            `}
          >
            <img
              css={css`
                width: 120vw;
              `}
              alt="languages"
              src={Languages}
            />
          </LanguageTicker>
          <TriggeredBgColor color="boulder" />
        </Section>
        <Section name="Networks">
          <TriggeredBgColor color="fruitSalad" />
          <TriggeredLottie
            css={css`
              opacity: 0.7;
            `}
            animation={animationCameras}
            loop={true}
          />
          <Container id="Networks">
            <TriggeredPendantLeft
              bp={breakpoints}
              color="mineShaft"
              id="Networks-To"
            >
              Investigative Networks
            </TriggeredPendantLeft>
            <div
              css={css`
                margin-top: 4rem;
                margin-bottom: 2rem;
              `}
            >
              <TriggeredHeadline bp={breakpoints}>
                <span
                  css={css`
                    color: #fff;
                  `}
                >
                  {" "}
                  Holding the Powerful to Account
                </span>{" "}
                When It Matters Most{" "}
              </TriggeredHeadline>
            </div>
            <TriggeredTextBlock>
              <Subheader>
                <div
                  css={css`
                    color: #fff;
                  `}
                >
                  Journalism With Impact
                </div>{" "}
              </Subheader>
            </TriggeredTextBlock>
            <div
              css={css`
                display: grid;
                grid-template-columns: 5% 95%;
                margin-top: 3rem;
                margin-bottom: -15rem;
                @media (min-width: ${mobile}) {
                  margin-bottom: -10rem;
                }
                @media (min-width: ${tablet}) {
                  margin-top: 4rem;
                  margin-bottom: -40rem;
                }
              `}
            >
              <PhotoSlant
                bp={breakpoints}
                css={css`
                  transform: translatex(-35%);
                `}
                src="Fabiola.jpg"
              />
              <ParagraphSlant
                bp={breakpoints}
                css={css`
                  color: white;
                  @media (min-width: ${tablet}) {
                    margin-top: 2rem;
                  }
                `}
              >
                <p>
                  Peru-based{" "}
                  <TextPop
                    color="#DDAF24"
                    css={mq({
                      display: ["block", "block", "block", "inline-block"],
                    })}
                  >
                    ICFJ Knight Fellow Fabiola Torres
                  </TextPop>{" "}
                  created Salud con Lupa, a health news outlet that is
                  uncovering corruption during COVID-19.
                </p>
                <p>
                  They exposed inflated prices for face shields, environmental
                  violations by corporations and wasted protective-gear
                  spending, prompting government action.
                </p>
              </ParagraphSlant>
            </div>
            <div
              css={css`
                display: grid;
                grid-template-columns: 100%;
                grid-column-gap: 3rem;
                margin-top: 2rem;
                @media (min-width: ${tablet}) {
                  grid-template-columns: repeat(2, 1fr);
                  margin-top: 0rem;
                }
              `}
            >
              <div
                css={css`
                  color: white;
                `}
              >
                <Subheader>
                  Journalists in the ICFJ Network Are Uncovering Corruption
                </Subheader>
              </div>
              <div>
                <ImageQuery
                  css={css`
                    max-width: 100%;
                    max-height: 280px;
                  `}
                  filename="bigeye.jpg"
                />
                <Credits>Credit: Rocío Urtecho</Credits>
              </div>
            </div>

            <div
              css={css`
                color: white;
                font-family: interstate-condensed;
                font-weight: 500;
                font-size: 1.25em;
                line-height: 2;
                @media (min-width: ${mobile}) {
                  font-size: 1.7em;
                }
              `}
            >
              <p>
                Stories by ICFJ partner, the Organized Crime and Corruption
                Reporting Project (OCCRP), based in Eastern Europe, have
                contributed to the recovery of more than{" "}
                <TextPop color="#DDAF24">
                  $7.3 billion in illicitly acquired funds.
                </TextPop>
              </p>
              <p>
                In Latin America, ICFJ helped launch Connectas, which has
                produced more than &nbsp;
                <TextPop color="#DDAF24">274 in-depth stories</TextPop> exposing
                mismanagement of billions of dollars in public funds.
              </p>
            </div>
            <Quote
              bp={breakpoints}
              css={mq({
                height: ["20rem", "25rem", "25rem", "30rem"],
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                marginLeft: "auto",
                marginRight: "auto",
              })}
            >
              <span
                css={css`
                  color: white;
                `}
              >
                We exposed corruption and human rights abuses working in a
                cross-border network supported by ICFJ.”<br></br>
                <span
                  css={css`
                    opacity: 0.5;
                  `}
                >
                  &mdash; Lisseth Boon, Connectas, Venezuela{" "}
                </span>
              </span>
            </Quote>
          </Container>
          <TriggeredBgColor color="fruitSalad" />
        </Section>
        <Section name="Innovation">
          <TriggeredBgColor color="mineShaft" />
          <TriggeredLottie
            css={css`
              opacity: 1;
            `}
            animation={animationTweet}
            loop={true}
          />
          <Container id="Innovation">
            <TriggeredPendantRight
              bp={breakpoints}
              color="affair"
              id="Innovation-To"
            >
              Innovation
            </TriggeredPendantRight>
            <div
              css={css`
                margin-top: 4rem;
              `}
            >
              <TriggeredHeadline bp={breakpoints} right>
                <span
                  css={css`
                    color: #999;
                  `}
                >
                  Pioneering Ways To{" "}
                  <span
                    css={css`
                      color: #fff;
                    `}
                  >
                    {" "}
                    Get the Truth Out
                  </span>{" "}
                  in a Pandemic
                </span>
              </TriggeredHeadline>
            </div>
            <div
              css={css`
                display: grid;
                margin-top: 5rem;
                height: 560px;
                grid-template-columns: 50% 50%;
                @media (min-width${tablet}) {
                  grid-template-columns: 40% 60%;
                }
              `}
            >
              <div>
                <PhotoSlant
                  bp={breakpoints}
                  css={css`
                    z-index: 1;
                    transform: translatex(-15%);
                    @media (min-width${tablet}) {
                      transform: translatex(-35%);
                    }
                  `}
                  src="Hannah.jpg"
                />
                <TriggeredLottie
                  animation={animationAfrica}
                  loop={false}
                  css={css`
                    transform: translate(15%, -50%);
                    z-index: -1;
                  `}
                />
              </div>
              <TriggeredTextBlock
                css={mq({
                  zIndex: "2",
                  color: "white",
                  fontFamily: "interstate-condensed",
                  fontWeight: "500",
                  fontSize: ["1em", "1.2em", "1.5em"],
                  lineHeight: ["1", "1.5", "2"],
                  textAlign: "right",
                  marginTop: ["1em", "2em", "2em", "4em"],
                })}
              >
                In Nigeria, journalists, fact checkers and social media
                influencers &mdash; including a government minister and a
                Nollywood star &mdash; are teaming up to combat misinformation
                about health and other issues that matter to people’s lives, a
                project led by{" "}
                <TextPop color="#D44934">
                  ICFJ Knight Fellow Hannah Ajakaiye.
                </TextPop>
              </TriggeredTextBlock>
            </div>
            <div
              css={css`
                display: grid;
                margin-top: 5rem;
                height: 560px;
                grid-template-columns: 50% 50%;
                @media (min-width${tablet}) {
                  grid-template-columns: 40% 60%;
                }
              `}
            >
              <TriggeredTextBlock
                css={mq({
                  zIndex: "2",
                  color: "white",
                  fontFamily: "interstate-condensed",
                  fontWeight: "500",
                  fontSize: ["1em", "1.2em", "1.5em"],
                  lineHeight: ["1", "1.5", "2"],
                  textAlign: "left",
                  paddingTop: ["1em", "2em", "4em"],
                })}
              >
                Women journalists and data analysts from five countries shed
                light on marginalized groups &mdash; such as domestic workers
                and HIV/AIDS patients &mdash; hardest hit by the pandemic, as
                part of the{" "}
                <Link
                  href="https://urldefense.com/v3/__https:/theawjp.org/__;!!Ie25XFjv7UPO!4QFkJUrcVekppLkvEruzM2TiStyjctG8zz8IV7SGT2ah_DeDeH2DmSK44qtt$"
                  rel="noreferrer"
                  target="_blank"
                >
                  Africa Women Journalism Project
                </Link>
                , led by{" "}
                <TextPop color="#DDAF24">
                  ICFJ Knight Fellow Catherine Gicheru.
                </TextPop>
              </TriggeredTextBlock>
              <div>
                <PhotoSlant
                  right
                  bp={breakpoints}
                  css={css`
                    z-index: 1;
                  `}
                  src="Catherine.jpg"
                />
                <TriggeredLottie
                  animation={animationAfrica2}
                  loop={false}
                  css={css`
                    transform: translate(-20%, -50%);
                    z-index: -1;
                  `}
                />
              </div>
            </div>
            <div
              css={css`
                display: grid;
                margin-top: 5rem;
                margin-bottom: 3rem;
                grid-template-columns: 50% 50%;
                @media (min-width${tablet}) {
                  grid-template-columns: 40% 60%;
                  margin-bottom: 0rem;
                }
              `}
            >
              <div>
                <PhotoSlant
                  bp={breakpoints}
                  css={css`
                    z-index: 1;
                    transform: translatex(-15%);
                    @media (min-width${tablet}) {
                      transform: translatex(-35%);
                    }
                  `}
                  src="Sergio.jpg"
                />
                <TriggeredLottie
                  animation={animationBrazil}
                  loop={false}
                  css={css`
                    transform: translate(20%, -50%);
                    z-index: -1;
                  `}
                />
              </div>
              <TriggeredTextBlock
                css={mq({
                  zIndex: "2",
                  color: "white",
                  fontFamily: "interstate-condensed",
                  fontSize: ["1em", "1.2em", "1.5em"],
                  fontWeight: "500",
                  lineHeight: ["1", "1.5", "2"],
                  textAlign: "right",
                  paddingTop: ["1em", "2em", "4em"],
                })}
              >
                Journalists can more quickly find expert sources of scientific
                information thanks to{" "}
                <Link
                  href="https://urldefense.com/v3/__https:/sciencepulse.org/about__;!!Ie25XFjv7UPO!4QFkJUrcVekppLkvEruzM2TiStyjctG8zz8IV7SGT2ah_DeDeH2DmfhbEiCV$"
                  rel="noreferrer"
                  target="_blank"
                >
                  Science Pulse
                </Link>
                , a free tool created by Brazil-based &nbsp;
                <TextPop color="#149EE7">
                  ICFJ Knight Fellow Sergio Spagnuolo &nbsp;
                </TextPop>
                that features the latest updates from more than 1,600 verified
                scientists and scientific organizations tweeting in English,
                Portuguese and Spanish.
              </TriggeredTextBlock>
            </div>
          </Container>
          <TriggeredBgColor color="mineShaft" />
        </Section>
        <Section name="Sustainability">
          <TriggeredBgColor color="affair" />
          <TriggeredLottie
            css={css`
              opacity: 0.8;
            `}
            animation={animationPenPaper}
            loop={true}
          />
          <Container id="Sustainability">
            <TriggeredPendantLeft
              bp={breakpoints}
              color="valencia"
              id="Sustainability-To"
            >
              Sustainability
            </TriggeredPendantLeft>
            <div
              css={css`
                margin-top: 4rem;
              `}
            >
              <TriggeredHeadline bp={breakpoints}>
                <span
                  css={css`
                    color: #999;
                  `}
                >
                  Helping
                </span>{" "}
                <span
                  css={css`
                    color: #fff;
                  `}
                >
                  Independent News Thrive
                </span>
              </TriggeredHeadline>
            </div>
            <TriggeredTextBlock
              css={css`
                color: white;
                font-family: interstate-condensed;
                font-size: 1.25em;
                line-height: 2;
                margin-top: 2rem;
                font-weight: 500;
                @media (min-width: ${mobile}) {
                  font-size: 1.7em;
                }
              `}
            >
              Even in the devastating time of COVID-19, we helped newsrooms in
              32 countries strengthen their bottom lines.
            </TriggeredTextBlock>
            <div
              css={css`
                margin-top: 5rem;
              `}
            >
              <div
                css={css`
                  position: relative;
                `}
              >
                <ImageQuery
                  css={css`
                    height: 510px;
                  `}
                  filename="conference.jpeg"
                />
                <div
                  css={css`
                    background: rgba(221, 175, 36, 0.6);
                    position: absolute;
                    bottom: 50px;
                    padding: 16px 32px;
                    font-family: interstate-condensed;
                    font-size: 1.7em;
                    color: white;
                    @media (min-width: ${mobile}) {
                      font-size: 2.5em;
                    }
                  `}
                >
                  <TextPop>47 Media Entrepreneurs</TextPop>
                </div>
                <TriggeredLottie
                  css={css`
                    position: absolute;
                    background: rgba(221, 175, 36, 0.6);
                    clip-path: inset(20% 0% 20% 0%);
                    width: 120px;
                    top: 0;
                    right: 0;
                    margin-right: 30px;
                    @media (min-width: ${mobile}) {
                      width: 260px;
                      margin-right: 0px;
                      margin-bottom: -32px;
                      margin-top: -6px;
                    }
                    @media (min-width: ${tablet}) {
                      bottom: 0;
                      top: auto;
                    }
                  `}
                  animation={animationMiddleEast}
                  loop={false}
                />
                <Credits>Credit: Ibrahim Thunian/Saudi Women's Stories</Credits>
              </div>
              <div
                css={css`
                  color: white;
                  font-family: interstate-condensed;
                  font-weight: 500;
                  line-height: 2;
                  padding-top: 1em;
                  padding-left: 2rem;
                  padding-right: 2rem;
                  font-size: 1.25em;
                  @media (min-width: ${mobile}) {
                    font-size: 1.5em;
                  }
                `}
              >
                Media entrepreneurs in the Middle East and North Africa have
                improved the business prospects of their startups through our{" "}
                <Link
                  href="https://ijnet.org/en/story/meet-our-ijnet-arabic-2020-mentoring-center-participants"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Highlighter color="goldenGrass">
                    IJNet Arabic Mentoring Center
                  </Highlighter>
                </Link>
                , supported by the National Endowment for Democracy over the
                past six years.
              </div>
            </div>
            <div
              css={css`
                margin-top: 5rem;
              `}
            >
              <div
                css={css`
                  position: relative;
                `}
              >
                <ImageQuery
                  css={css`
                    height: 510px;
                  `}
                  filename="FacebookAccelerator.jpg"
                />
                <TriggeredLottie
                  css={css`
                    position: absolute;
                    background: rgba(20, 158, 231, 0.6);
                    clip-path: inset(8% 10% 10% 20%);
                    width: 120px;
                    top: 0;
                    right: 0;
                    margin-right: 12px;
                    margin-top: 16px;
                    @media (min-width: ${mobile}) {
                      width: 260px;
                      margin-right: -27px;
                      margin-bottom: -26px;
                    }
                    @media (min-width: ${tablet}) {
                      bottom: 0;
                      top: auto;
                    }
                  `}
                  animation={animationBrazil}
                  loop={false}
                />
                <div
                  css={css`
                    background: rgba(20, 158, 231, 0.7);
                    position: absolute;
                    bottom: 50px;
                    padding: 16px 32px;
                    font-family: interstate-condensed;
                    font-weight: 700;
                    font-size: 1.7em;
                    color: white;
                    @media (min-width: ${mobile}) {
                      font-size: 2.5em;
                    }
                  `}
                >
                  <TextPop>600,000 Registered Users</TextPop>
                </div>
              </div>
              <div
                css={css`
                  color: white;
                  font-family: interstate-condensed;
                  line-height: 2;
                  padding-top: 1em;
                  padding-left: 2rem;
                  padding-right: 2rem;
                  font-size: 1.25em;
                  font-weight: 500;
                  overflow: hidden;
                  @media (min-width: ${mobile}) {
                    font-size: 1.5em;
                  }
                `}
              >
                Local newsrooms in Brazil increased their readership while
                participating in the{" "}
                <Highlighter color="curiousBlue">
                  <Link
                    href="https://www.facebook.com/journalismproject/programs/accelerator/brazilian-publishers-thriving"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Local News Accelerator
                  </Link>
                </Highlighter>{" "}
                with ICFJ and the Facebook Journalism Project. It is one of many
                initiatives across the world between ICFJ and FJP helping
                newsrooms solve business challenges.
              </div>
            </div>
            <div
              css={css`
                margin-top: 5rem;
              `}
            >
              <div
                css={css`
                  position: relative;
                `}
              >
                <ImageQuery
                  css={css`
                    height: 510px;
                  `}
                  filename="Pitazo.jpeg"
                />
                <div
                  css={css`
                    background: rgba(212, 73, 52, 0.6);
                    position: absolute;
                    padding: 16px 32px;
                    font-family: interstate-condensed;
                    font-size: 1.7em;
                    color: white;
                    bottom: 50px;
                    font-weight: 700;
                    @media (min-width: ${mobile}) {
                      font-size: 2.5em;
                    }
                  `}
                >
                  <TextPop>$350,000 in New Revenue</TextPop>
                </div>
                <TriggeredLottie
                  css={css`
                    position: absolute;
                    background: rgba(212, 73, 52, 0.6);
                    clip-path: inset(8% 10% 0% 20%);
                    width: 120px;
                    top: 0;
                    right: 0;
                    margin-right: 12px;
                    margin-top: 16px;
                    @media (min-width: ${mobile}) {
                      width: 260px;
                      margin-right: -27px;
                      margin-bottom: 16px;
                    }
                    @media (min-width: ${tablet}) {
                      bottom: 0;
                      top: auto;
                    }
                  `}
                  animation={animationSouthAmerica}
                  loop={false}
                />
                <Credits>Credit: Ruth Lara Castillo/El Pitazo</Credits>
              </div>
              <div
                css={css`
                  color: white;
                  font-family: interstate-condensed;
                  line-height: 2;
                  padding-top: 1em;
                  padding-left: 2rem;
                  padding-right: 2rem;
                  font-size: 1.25em;
                  font-weight: 500;
                  @media (min-width: ${mobile}) {
                    font-size: 1.5em;
                  }
                `}
              >
                Despite the pandemic, ten Latin American digital news startups
                significantly increased their revenue in just six months, as
                part of Velocidad. They did it primarily through paid content,
                advertising and other client services &mdash; and{" "}
                <Link
                  href="https://www.icfj.org/news/velocidad-helps-news-startups-grow-membership-and-revenue-program-enters-second-phase"
                  rel="noreferrer"
                  target="_blank"
                >
                  it's just the beginning
                </Link>
                . This accelerator program with ICFJ and SembraMedia is
                supported by Luminate Group.
              </div>
            </div>
            <Quote
              bp={breakpoints}
              css={css`
                margin-top: 5rem;
                height: 20rem;
                display: flex;
                align-items: center;
                width: fit-content;
                margin-left: auto;
                margin-right: auto;
              `}
              light
            >
              {" "}
              With the help of IJNet mentors, I empowered more women and made my
              news outlet stronger financially.”<br></br>
              <span
                css={css`
                  opacity: 0.5;
                `}
              >
                &mdash; Sheikha Aldosary, Saudi Women's Stories, Saudi Arabia{" "}
              </span>
            </Quote>
          </Container>
          <TriggeredBgColor color="affair" />
        </Section>
        <Section name="Leadership">
          <TriggeredBgColor color="valencia" />
          <TriggeredLottie
            css={css`
              opacity: 0.8;
            `}
            animation={animationAudio}
            loop={true}
          />
          <Container id="Leadership">
            <TriggeredPendantRight
              bp={breakpoints}
              color="affair"
              id="Leadership-To"
              css={css`
                @media (max-width: ${mobile}) {
                  font-size: 0.7em;
                }
              `}
            >
              <span
                css={css`
                  color: "white";
                `}
              >
                {" "}
                Thought Leadership
              </span>
            </TriggeredPendantRight>
            <div
              css={css`
                margin-top: 4rem;
              `}
            >
              <TriggeredHeadline bp={breakpoints} right>
                <span
                  css={css`
                    color: #fff;
                  `}
                >
                  Shaping the Future
                </span>{" "}
                Of Journalism{" "}
              </TriggeredHeadline>
            </div>
            <TriggeredTextBlock
              css={css`
                margin-top: 3rem;
                margin-bottom: 3rem;
                color: white;
                font-family: interstate-condensed;
                font-size: 1.25em;
                line-height: 2;
                font-weight: 500;
                @media (min-width: ${mobile}) {
                  font-size: 1.7em;
                }
              `}
            >
              During a tumultuous year, ICFJ and its partners identified the{" "}
              <Link
                href="https://www.icfj.org/news/new-global-survey-raises-red-flags-journalism-covid-19-era"
                rel="noreferrer"
                target="_blank"
              >
                impact of the pandemic on journalism
              </Link>{" "}
              as well as the escalating problem of{" "}
              <Link
                href="https://www.icfj.org/news/icfj-unesco-study-online-violence-fueled-disinformation-and-political-attacks-deeply-harms"
                rel="noreferrer"
                target="_blank"
              >
                online violence against women journalists
              </Link>
              .
            </TriggeredTextBlock>
            <CountBox
              bp={breakpoints}
              css={css`
                transform: scale(1);
              `}
            />
            <div
              css={theme => ({
                width: "100%",
                "@media(min-width:1024px)": {
                  border: "16px solid",
                  marginTop: "10rem",
                  height: "780px",
                },
                borderColor: theme.colors.goldenGrass,
                display: "flex",
                flexDirection: "column",
                position: "relative",
              })}
            >
              <div
                css={css`
                  flex-grow: 1;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  padding: 2rem;
                  color: white;
                `}
              >
                <Subheader
                  css={css`
                    font-size: 1.65em;
                  `}
                >
                  Most Comprehensive Survey on Online Violence Against Women
                  Journalists*
                </Subheader>
              </div>
              <SmallSubheader>A UNESCO-ICFJ partnership</SmallSubheader>
              <div
                css={css`
                  position: relative;
                `}
              >
                <div
                  css={css`
                    background: rgba(212, 73, 52, 0.6);
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    z-index: 999;
                    font-family: interstate-condensed;
                    color: white;
                    font-weight: 500;
                    ${mq({
                      padding: [
                        "1rem 1rem 1rem 1rem",
                        "1rem 1rem 1rem 1rem",
                        "2rem 1rem 3rem 1rem",
                      ],
                      fontSize: ["1em", "1.2em", "1.5em"],
                      width: ["160px", "180px", "212px"],
                    })}
                  `}
                >
                  <TextPop color="#DDAF24">More than one third </TextPop> of
                  respondents said political actors were a common source of
                  abuse.
                </div>
                <div
                  css={css`
                    background: rgba(221, 175, 36, 0.6);
                    position: absolute;
                    z-index: 999;
                    font-family: interstate-condensed;
                    font-weight: 500;
                    ${mq({
                      padding: [
                        ".5rem .5rem .5rem .5rem",
                        "1rem 1rem 1rem 1rem",
                        "2rem 1rem 3rem 1rem",
                      ],
                      fontSize: ["1em", "1.2em", "1.5em"],
                      width: ["200px", "180px", "212px"],
                      right: ["0px", "0px", "0px", "260px"],
                      top: ["0px", "0px", "0px", "60px"],
                    })}
                  `}
                >
                  <TextPop color="#D44934">One in five</TextPop> women said they
                  suffered attacks or abuse offline in the physical world
                  stemming from online harassment.
                </div>
                <ImageQuery
                  css={mq({ height: ["200px", "400px", "510px"] })}
                  filename="Anna.jpeg"
                />
              </div>
            </div>
            <Credits>Credit: Anna Cunningham</Credits>
            <p
              css={css`
                font-family: ubuntu;
                color: white;
                font-style: italic;
                margin: 1.5em;
              `}
            >
              <Highlighter color="mineShaft">
                {" "}
                *Findings based on 714 responses from women journalists across
                113 countries.
              </Highlighter>
            </p>
          </Container>
          <TriggeredBgColor color="valencia" />
        </Section>
        <Section name="Honorees">
          <TriggeredBgColor color="white" />
          <TriggeredLottie
            css={css`
              opacity: 1;
            `}
            animation={animationCameras}
            loop={true}
          />
          <Container
            id="Honorees"
            css={mq({ maxWidth: ["100%", "100%", "90%", "1024px"], marginBottom:"5rem" })}
          >
            <TriggeredPendantLeft
              bp={breakpoints}
              color="sanMarino"
              id="Honorees-To"
            >
              <span
                css={mq({
                  paddingLeft: ["40%", "40%", 0],
                  paddingRight: ["20%", "20%", 0],
                })}
              >
                Honorees
              </span>
            </TriggeredPendantLeft>
            <div
              css={css`
                margin-top: 4rem;
                padding-left: 2rem;
                padding-right: 2rem;
                @media (min-width: ${tablet}) {
                  padding-left: 0;
                  padding-right: 0;
                }
              `}
            >
              <TriggeredHeadline bp={breakpoints} right>
                Standing With{" "}
                <span
                  css={css`
                    color: #999;
                  `}
                >
                  Intrepid Journalists
                </span>{" "}
              </TriggeredHeadline>
              <TriggeredTextBlock
                css={css`
                  font-family: interstate-condensed;
                  font-size: 1.2em;
                  font-weight: 500;
                  line-height: 2;
                  text-align: right;
                  margin-top: 5rem;
                  @media (min-width: ${tablet}) {
                    font-size: 1.7em;
                  }
                `}
              >
                At a time when attacks on journalists are spiking globally,{" "}
                <Link
                  css={css`
                    color: black;
                  `}
                  href="https://www.icfj.org/calendar/icfj-tribute-journalists-2020"
                  rel="noreferrer"
                  target="_blank"
                >
                  ICFJ’s annual awards
                </Link>{" "}
                bring heightened visibility to winners, whose outstanding
                reporting has had tremendous impact.
              </TriggeredTextBlock>
            </div>
            <TriggeredLottie
              animation={animationTribute}
              loop={false}
              css={css`
                margin-top: 5rem;
                margin-bottom: 5rem;
                transform: scale(1) !important;
              `}
            />
            <FrameEmbed
              bp={breakpoints}
              buttonColor="goldenGrass"
              caption="Watch the Speeches"
              css={css`
                margin-top: 4rem;
                width: 100%;
                background: black !important;
                padding-bottom: -20px;
              `}
            >
              <LazyLoad debounce={false} offsetTop={200}>
                <iframe
                  title="vidone"
                  width="100%"
                  height="570px"
                  src="https://www.youtube.com/embed/jIialLILHq8"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </LazyLoad>
            </FrameEmbed>
            <Wolf
              bp={breakpoints}
              image="Wolf.png"
              award="Master of Ceremonies"
              name="Wolf Blitzer, CNN"
              title=""
              bio="ICFJ is doing more than any organization I know to support great journalism worldwide."
            />
            <WinnerRight
              bp={breakpoints}
              image="Fareed.jpg"
              award="ICFJ Founders Award for Excellence in Journalism"
              name="Fareed Zakaria"
              title="Host, CNN"
              bio="Zakaria's expert analysis helps us understand complex global issues."
            />
            <WinnerLeft
              bp={breakpoints}
              image="Roman.png"
              award="ICFJ Knight Trailblazer Award"
              name="Roman Anin"
              title="IStories, Russia"
              bio="Anin’s collaborative news site is exposing corruption under Vladimir Putin."
            />
            <WinnerRight
              bp={breakpoints}
              image="Lina.png"
              award="ICFJ Knight International Journalism Award"
              name="Lina Attalah"
              title="Mada Masr, Egypt"
              bio="Attalah leads a fearless team of reporters at one of the last independent news outlets in her country."
            />
            <WinnerLeft
              bp={breakpoints}
              image="Maria.png"
              award="2018 ICFJ Knight Award Winner"
              name="Maria Ressa"
              title="Rappler, Philippines"
              bio="Despite relentless persecution, Ressa and her team shine a light on injustices."
            />
          </Container>
          <TriggeredBgColor color="white" />
        </Section>
        <Section name="Financials">
          <TriggeredBgColor color="curiousBlue" />
          <TriggeredLottie
            css={css`
              opacity: 0.7;
            `}
            animation={animationTweet}
            loop={true}
          />
          <Container id="Financials">
            <TriggeredPendantRight
              bp={breakpoints}
              color="boulder"
              id="Financials-To"
            >
              Financials
            </TriggeredPendantRight>
            <SmallSubheader
              css={css`
                color: white;
                @media (min-width: ${tablet}) {
                  margin: initial;
                }
                text-align: right;
                margin-top: 4rem !important;
              `}
            >
              We are careful stewards of our donors’ funds.
            </SmallSubheader>

            <Subheader
              css={css`
                color: black;
                font-weight: bold;
                margin-top: 10rem;
                text-align: left;
              `}
            >
              Total Revenue for 2019:
              <span
                css={css`
                  color: white;
                  font-weight: normal;
                `}
              >
                {" "}
                $19.9 million
              </span>
            </Subheader>

            <div
              css={css`
                display: grid;
                grid-template-columns: 100%;
                @media (min-width: ${tablet}) {
                  grid-template-columns: 20% 80%;
                  margin-top: 3rem;
                }
              `}
            >
              <div>
                <Subheader
                  css={mq({
                    color: "black",
                    fontWeight: "bold",
                    fontSize: ["2em", "2.5em", "3em"],
                  })}
                >
                  <br></br>
                  <br></br> Expense Breakdown for 2019:
                </Subheader>
              </div>
              <div>
                <TriggeredLottie
                  css={css`
                    width: 60%;
                    @media (min-width: ${tablet}) {
                      width: 60%;
                    }
                    margin-right: auto;
                    margin-left: auto;
                    margin-top: 3rem;
                  `}
                  animation={animationPie}
                  loop={false}
                />
              </div>
            </div>

            <div
              css={css`
                display: grid;
                grid-template-columns: 100%;
                @media (min-width: ${tablet}) {
                  grid-template-columns: 50% 50%;
                  margin-top: 3rem;
                }
              `}
            >
              <div>
                <ImageQuery
                  filename="fourstar.png"
                  css={css`
                    margin-top: 4.5rem;
                    margin-bottom: 3rem;
                  `}
                />
                <div css={{ textAlign: "center" }}>
                  <Subheader
                    css={mq({
                      color: "white",
                      fontWeight: "bold",
                      fontSize: ["2em", "2.5em", "4em"],
                    })}
                  >
                    95.36%
                  </Subheader>
                  <Subheader
                    css={mq({
                      color: "white",
                      fontWeight: "bold",
                      fontSize: ["1.5em", "1.8em", "2.7em"],
                      marginBottom: "2rem",
                    })}
                  >
                    Charity Navigator Ranking
                  </Subheader>
                  <Subheader
                    css={mq({
                      color: "white",
                      fontSize: ["1.5em", "1.5em", "1.5em"],
                    })}
                  >
                    {" "}
                    ICFJ’s four-star track record with Charity Navigator places
                    us among the top 2 percent of nonprofits evaluated.
                  </Subheader>
                </div>
              </div>
              <div>
                <div
                  css={css`
                    display: flex;
                    justify-content: center;
                  `}
                >
                  <Platinum
                    css={css`
                      width: 40%;
                      margin-top: 2rem;
                      margin-bottom: 2rem;
                    `}
                  />
                </div>
                <div css={{ textAlign: "center" }}>
                  <Subheader
                    css={mq({
                      color: "white",
                      fontWeight: "bold",
                      fontSize: ["2em", "2.5em", "4em"],
                    })}
                  >
                    Platinum
                  </Subheader>
                  <Subheader
                    css={mq({
                      color: "white",
                      fontWeight: "bold",
                      fontSize: ["1.5em", "1.8em", "2.7em"],
                      marginBottom: "2rem",
                    })}
                  >
                    GuideStar
                    <br /> Rating
                  </Subheader>
                  <Subheader
                    css={mq({
                      color: "white",
                      fontSize: ["1.5em", "1.5em", "1.5em"],
                    })}
                  >
                    ICFJ also has a platinum-level rating from GuideStar, the
                    highest ranking given.
                  </Subheader>
                </div>
              </div>
            </div>
          </Container>
          <TriggeredBgColor color="curiousBlue" />
          <div
            css={css`
             margin-bottom: 0rem;
            `}
          />
        </Section>
        <Section name="BoardMembers">
          <TriggeredBgColor color="fruitSalad" />
          <TriggeredLottie
            css={css`
              opacity: 0.7;
            `}
            animation={animationCameras}
            loop={true}
          />
          <Container id="Board">
            <TriggeredPendantLeft
              bp={breakpoints}
              color="goldenGrass"
              id="Board-To"
            >
              Board of Directors
            </TriggeredPendantLeft>
            <Subheader
              css={css`
                color: white;
                font-weight: 500;
                margin-top: 4rem;
                font-size: 3.25em;
                margin-bottom: 2rem;
              `}
            >
              Officers
            </Subheader>
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                grid-column-gap: 0.5rem;
                color: white;
                font-family: interstate-condensed;
                font-weight: 500;
                @media (min-width: ${tablet}) {
                  grid-template-columns: repeat(2, 1fr);
                  margin-top: 2rem;
                }
              `}
            >
              <div>
                <ul
                  css={css`
                    list-style: none;
                    padding-left: 0;
                  `}
                >
                  <OrgPeople>MICHAEL GOLDEN</OrgPeople>
                  <OrgPeopleDesc>Chairman, ICFJ</OrgPeopleDesc>
                  <OrgPeopleDesc>
                    Former Vice Chairman, The New York Times Company
                  </OrgPeopleDesc>
                  <OrgPeople>JAMES F. HOGE JR.</OrgPeople>
                  <OrgPeopleDesc>Vice Chair, ICFJ</OrgPeopleDesc>
                  <OrgPeopleDesc>
                    Senior Advisor, Teneo Intelligence
                  </OrgPeopleDesc>
                  <OrgPeople>PAMELA HOWARD</OrgPeople>
                  <OrgPeopleDesc>Vice Chair, ICFJ</OrgPeopleDesc>
                  <OrgPeopleDesc>
                    Trustee, Scripps Howard Foundation
                  </OrgPeopleDesc>
                  <OrgPeople>MATTHEW WINKLER</OrgPeople>
                  <OrgPeopleDesc>Vice Chair, ICFJ</OrgPeopleDesc>
                  <OrgPeopleDesc>
                    Editor-in-Chief Emeritus, Bloomberg News
                  </OrgPeopleDesc>
                  <OrgPeople>JOHN MAXWELL HAMILTON</OrgPeople>
                  <OrgPeopleDesc>Treasurer, ICFJ</OrgPeopleDesc>
                  <OrgPeopleDesc>
                    Professor of Journalism and Founding Dean, Manship School of
                    Mass Communication, Louisiana State University
                  </OrgPeopleDesc>
                </ul>
              </div>
              <div>
                <ul
                  css={css`
                    list-style: none;
                    padding-left: 0;
                  `}
                >
                  <OrgPeople>JASON H. WRIGHT</OrgPeople>
                  <OrgPeopleDesc>Development Chair, ICFJ</OrgPeopleDesc>
                  <OrgPeopleDesc>
                    Principal, Geer Mountain Holdings LLC
                  </OrgPeopleDesc>
                  <OrgPeople>MARCY MCGINNIS</OrgPeople>
                  <OrgPeopleDesc>Nominating Chair, ICFJ</OrgPeopleDesc>
                  <OrgPeopleDesc>Journalist</OrgPeopleDesc>
                  <OrgPeople>WENDELL REILLY</OrgPeople>
                  <OrgPeopleDesc>Chair, Audit Committee, ICFJ</OrgPeopleDesc>
                  <OrgPeopleDesc>
                    Chairman, Berman Capital Advisors
                  </OrgPeopleDesc>
                  <OrgPeople>JOYCE BARNATHAN</OrgPeople>
                  <OrgPeopleDesc>President, ICFJ</OrgPeopleDesc>
                </ul>
              </div>
            </div>
            <Subheader
              css={css`
                color: white;
                font-weight: 500;
                margin-top: 2rem;
                font-size: 3.25em;
                margin-bottom: 2rem;
              `}
            >
              Directors
            </Subheader>
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                grid-column-gap: 0.5rem;
                color: white;
                font-family: interstate-condensed;
                font-weight: 500;
                margin-top: 2rem;
                @media (min-width: ${tablet}) {
                  grid-template-columns: repeat(2, 1fr);
                }
              `}
            >
              <div>
                {" "}
                <ul
                  css={css`
                    list-style: none;
                    padding-left: 0;
                  `}
                >
                  <OrgPeople>MARK BAILEN</OrgPeople>
                  <OrgPeopleDesc>Partner, BakerHostetler LLP</OrgPeopleDesc>
                  <OrgPeopleDesc> </OrgPeopleDesc>

                  <OrgPeople>CARRIE BUDOFF BROWN</OrgPeople>
                  <OrgPeopleDesc>Editor, Politico</OrgPeopleDesc>

                  <OrgPeople>DAVID CALLAWAY</OrgPeople>
                  <OrgPeopleDesc>
                    Founder, Editor, Callaway Climate Insights
                  </OrgPeopleDesc>

                  <OrgPeople>AHMED CHARAI</OrgPeople>
                  <OrgPeopleDesc>
                    Chairman and CEO, Global Media Holding
                  </OrgPeopleDesc>

                  <OrgPeople>DAVID ELLIOT COHEN</OrgPeople>
                  <OrgPeopleDesc>Author and Publisher</OrgPeopleDesc>

                  <OrgPeople>JOHN DANISZEWSKI</OrgPeople>
                  <OrgPeopleDesc>
                    Vice President and Editor at Large for Standards, Associated
                    Press
                  </OrgPeopleDesc>

                  <OrgPeople>RICHARD GINGRAS</OrgPeople>
                  <OrgPeopleDesc>Vice President, News, Google</OrgPeopleDesc>

                  <OrgPeople>MICHAEL GREENSPON</OrgPeople>
                  <OrgPeopleDesc>
                    Global Head, Licensing and Print Innovation, The New York
                    Times
                  </OrgPeopleDesc>

                  <OrgPeople>JOHN HEILEMANN</OrgPeople>
                  <OrgPeopleDesc>
                    Co-host, creator, and executive producer of Showtime's The
                    Circus; National Affairs Analyst, MSNBC and NBC News;
                    Co-founder and Editor-in-Chief, The Recount
                  </OrgPeopleDesc>

                  <OrgPeople>ALEX S. JONES</OrgPeople>
                  <OrgPeopleDesc>
                    Journalist, former director of the Shorenstein Center on
                    Media, Politics and Public Policy at Harvard's John F.
                    Kennedy School of Government
                  </OrgPeopleDesc>

                  <OrgPeople>Brent JONES</OrgPeople>
                  <OrgPeopleDesc>
                    Editor of Culture, Training and Outreach, The Wall Street
                    Journal
                  </OrgPeopleDesc>
                </ul>
              </div>

              <div>
                <ul
                  css={css`
                    list-style: none;
                    padding-left: 0;
                  `}
                >
                  <OrgPeople>RIK KIRKLAND</OrgPeople>
                  <OrgPeopleDesc>
                    Formerly, Director of Publishing, McKinsey and Co.
                  </OrgPeopleDesc>

                  <OrgPeople>ANNE KORNBLUT</OrgPeople>
                  <OrgPeopleDesc>
                    Global Head of Curation, Facebook
                  </OrgPeopleDesc>

                  <OrgPeople>ISAAC LEE</OrgPeople>
                  <OrgPeopleDesc>Founder, Exile Content</OrgPeopleDesc>

                  <OrgPeople>JOANNE LEEDOM-ACKERMAN</OrgPeople>
                  <OrgPeopleDesc>Novelist and Journalist</OrgPeopleDesc>

                  <OrgPeople>MARCI MCCUE</OrgPeople>
                  <OrgPeopleDesc>
                    Founding Team Member and Head of Marketing, Flipboard
                  </OrgPeopleDesc>

                  <OrgPeople>RODMAN MOORHEAD</OrgPeople>
                  <OrgPeopleDesc>
                    Former General Partner and Managing Director, Warburg Pincus
                    & Co.
                  </OrgPeopleDesc>

                  <OrgPeople>ROB REHG</OrgPeople>
                  <OrgPeopleDesc>
                    Chair, U.S. Client Services, Edelman
                  </OrgPeopleDesc>

                  <OrgPeople>SOPHIE SCHMIDT</OrgPeople>
                  <OrgPeopleDesc>Founder Rest of World</OrgPeopleDesc>

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
          <TriggeredBgColor color="fruitSalad" />
          <Container>
            <TriggeredPendantLeft bp={breakpoints} color="goldenGrass">
              Advisory Board
            </TriggeredPendantLeft>
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                margin-bottom: 15rem;
                color: white;
                font-family: interstate-condensed;
                margin-top: 2rem;
                font-weight: 500;
                @media (min-width: ${tablet}) {
                  grid-template-columns: repeat(2, 1fr);
                }
              `}
            >
              <div>
                <ul
                  css={css`
                    list-style: none;
                    padding-left: 0;
                  `}
                >
                  <OrgPeople>FRANK BENNACK</OrgPeople>
                  <OrgPeopleDesc>Executive Vice Chairman, Hearst</OrgPeopleDesc>

                  <OrgPeople>LAURETTA J. BRUNO</OrgPeople>
                  <OrgPeopleDesc>
                    President, Gramercy Partners LLC
                  </OrgPeopleDesc>

                  <OrgPeople>ANDY BURNESS</OrgPeople>
                  <OrgPeopleDesc>
                    President, Burness Communications
                  </OrgPeopleDesc>

                  <OrgPeople>PAUL COHEN</OrgPeople>
                  <OrgPeopleDesc>
                    Principal, Prospect Strategies Group
                  </OrgPeopleDesc>

                  <OrgPeople>FRANK COMES</OrgPeople>
                  <OrgPeopleDesc>
                    Editor, McKinsey Quarterly, McKinsey & Co. Inc.
                  </OrgPeopleDesc>

                  <OrgPeople>PETER COPELAND</OrgPeople>
                  <OrgPeopleDesc>
                    Writer, Editor and Media Consultant
                  </OrgPeopleDesc>

                  <OrgPeople>THOMAS EWING</OrgPeople>
                  <OrgPeopleDesc>
                    Principal, Ewing Controls, ICFJ Founders Family
                  </OrgPeopleDesc>

                  <OrgPeople>CRAIG FORMAN</OrgPeople>
                  <OrgPeopleDesc>
                    General Partner, NextNews Ventures
                  </OrgPeopleDesc>

                  <OrgPeople>SUSAN FRIEDMAN</OrgPeople>
                  <OrgPeopleDesc>
                    Former NBC News Producer; Former Knight Fellow
                  </OrgPeopleDesc>

                  <OrgPeople>BOBBY GHOSH</OrgPeople>
                  <OrgPeopleDesc>Editor, Bloomberg Opinion</OrgPeopleDesc>
                </ul>
              </div>

              <div>
                <ul
                  css={css`
                    list-style: none;
                    padding-left: 0;
                  `}
                >
                  <OrgPeople>PETER OSNOS</OrgPeople>
                  <OrgPeopleDesc>
                    Founder and Editor-at-Large, PublicAffairs
                  </OrgPeopleDesc>

                  <OrgPeople>CAROL PASMORE</OrgPeople>
                  <OrgPeopleDesc>
                    Vice President, Cognizant Technology Solutions
                  </OrgPeopleDesc>

                  <OrgPeople>GARY PRUITT</OrgPeople>
                  <OrgPeopleDesc>
                    President and CEO, Associated Press
                  </OrgPeopleDesc>

                  <OrgPeople>JAMES ROUSMANIERE</OrgPeople>
                  <OrgPeopleDesc>
                    Former Editor and President, Keene Sentinel
                  </OrgPeopleDesc>

                  <OrgPeople>JANE SASSEEN</OrgPeople>
                  <OrgPeopleDesc>
                    Executive Director, McGraw Center for Business Journalism,
                    CUNY Graduate School of Journalism
                  </OrgPeopleDesc>

                  <OrgPeople>SUSAN TALALAY</OrgPeople>
                  <OrgPeopleDesc>
                    Former Director, Knight International Journalism Fellowships
                  </OrgPeopleDesc>

                  <OrgPeople>EDUARDO ULIBARRI</OrgPeople>
                  <OrgPeopleDesc>
                    Permanent Representative of Costa Rica to the United Nations
                  </OrgPeopleDesc>

                  <OrgPeople>AMY WEBB</OrgPeople>
                  <OrgPeopleDesc>
                    Founder and CEO, Future Today Institute
                  </OrgPeopleDesc>

                  <OrgPeople>MARGARET WINSHIP</OrgPeople>
                  <OrgPeopleDesc>ICFJ Founders Family</OrgPeopleDesc>
                </ul>
              </div>
            </div>
          </Container>
        </Section>
        <Section name="Donors">
          <Container id="Donors">
            <TriggeredPendantLeft
              bp={breakpoints}
              color="goldenGrass"
              id="Donors-To"
            >
              Donors
            </TriggeredPendantLeft>
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                margin-top: 2rem;
                color: white;
                font-family: interstate-condensed;
                font-weight: 500;
                @media (min-width: ${tablet}) {
                  grid-template-columns: repeat(2, 1fr);
                }
              `}
            >
              <ul
                css={css`
                  list-style: none;
                  padding-left: 0;
                `}
              >
                <DonorTitle>Chairman’s Circle</DonorTitle>
                <Donor>Ahmed Charai</Donor>
                <Donor>Pamela Howard</Donor>
                <Donor>Rodman and Alice Moorhead</Donor>
                <Donor>The Reilly Family</Donor>
                <DonorTitle>President’s Circle</DonorTitle>
                <Donor>The Ewing Family</Donor>
                <Donor>Anonymous</Donor>
                <Donor>Anonymous 2</Donor>
                <DonorTitle>Benefactors</DonorTitle>
                <Donor>Michael and Anne Golden</Donor>
                <Donor>John Maxwell Hamilton</Donor>
                <DonorTitle>Leaders</DonorTitle>
                <Donor>Elizabeth Ballantine and Paul Leavitt</Donor>
                <Donor>Joyce Barnathan and Steven Strasser</Donor>
                <Donor>Lauretta J. Bruno</Donor>
                <Donor>David Callaway</Donor>
                <Donor>Vint Cerf</Donor>
                <Donor>Patricia Dunnington</Donor>
                <Donor>John Harris</Donor>
                <Donor>James F. Hoge Jr. and Kathleen Lacey</Donor>
                <Donor>Martina Hund-Mejean and Bruno Mejean</Donor>
                <Donor>Alex S. Jones</Donor>
                <Donor>Marci and Mike McCue</Donor>
                <Donor>Rob and Maureen Rehg</Donor>
                <Donor>John Towriss, Envoy Strategy Group</Donor>
                <Donor>Alexandra Wrage</Donor>
                <Donor>Jason H. Wright</Donor>
                <Donor>Champions</Donor>
                <Donor>David Elliot Cohen and Laureen Seeger</Donor>
                <Donor>Richard Gingras</Donor>
                <Donor>Marcy McGinnis</Donor>
                <Donor>Nicholas Tzitzon</Donor>
                <Donor>Matthew and Lisa Winkler</Donor>
                <Donor>Anonymous</Donor>
                <p>
                  <i>
                    * For contributions made in 2019. Donations below $5,000 are
                    acknowledged elsewhere on our website.
                  </i>
                </p>
              </ul>
              <ul
                css={css`
                  list-style: none;
                  padding-left: 0;
                `}
              >
                <DonorTitle>Foundations</DonorTitle>
                <Donor>John S. and James L. Knight Foundation</Donor>
                <Donor>Bill & Melinda Gates Foundation</Donor>
                <Donor>Luminate</Donor>
                <Donor>Arnold Ventures</Donor>
                <Donor>Bloomberg Philanthropies</Donor>
                <Donor>National Endowment for Democracy</Donor>
                <Donor>
                  The Brooks and Joan Fortune Family Foundation, Inc.
                </Donor>
                <Donor>Scripps Howard Foundation</Donor>
                <Donor>The Ambrose Monell Foundation</Donor>
                <Donor>Samuel I. Newhouse Foundation, Inc.</Donor>
                <Donor>Gannett Foundation</Donor>
                <DonorTitle>Corporations</DonorTitle>
                <Donor>Facebook Journalism Project</Donor>
                <Donor>Dow Jones/News Corp</Donor>
                <Donor>Microsoft</Donor>
                <Donor>Google News Initiative</Donor>
                <Donor>Al Jazeera Media Network</Donor>
                <Donor>Apple News</Donor>
                <Donor>Edelman</Donor>
                <Donor>National Geographic</Donor>
                <Donor>BakerHostetler</Donor>
                <Donor>Univision</Donor>
                <Donor>Associated Press</Donor>
                <Donor>APCO Worldwide</Donor>
                <Donor>CBS News</Donor>
                <Donor>CNN</Donor>
                <Donor>Discovery</Donor>
                <Donor>Fox</Donor>
                <Donor>GRF CPAs & Advisors</Donor>
                <Donor>Mannheim LLC</Donor>
                <Donor>McKinsey & Company</Donor>
                <Donor>POLITICO</Donor>
                <Donor>The New York Times Company</Donor>
                <Donor>The Washington Post</Donor>
                <Donor>TRACE International</Donor>
                <Donor>Ernst & Young</Donor>
                <Donor>Cision</Donor>
                <Donor>Cresa</Donor>
                <Donor>UBS</Donor>
                <Donor>Anonymous</Donor>
                <OrgPeople>Government Agencies</OrgPeople>
                <Donor>U.S. Department of State</Donor>
                <Donor>
                  United States Agency for International Development
                </Donor>
                <DonorTitle>Organizations</DonorTitle>
                <Donor>World Health Organization</Donor>
                <Donor>Radio Free Asia</Donor>
                <Donor>Freedom House</Donor>
                <Donor>Northwestern University in Qatar</Donor>
                <Donor>Stanford University</Donor>
                <Donor>Arthur F. Burns Fellowship Program Inc.</Donor>
              </ul>
            </div>
            <TriggeredPendantLeft
              css={css`
                margin-top: 10rem;
                margin-bottom: 10rem;
              `}
              bp={breakpoints}
              color="boulder"
            >
              Thank You
            </TriggeredPendantLeft>
            <SmallSubheader
              css={css`
                color: white;
                margin-left: 0;
              `}
            >
              All of us at ICFJ thank you for your support.
            </SmallSubheader>
            <FrameEmbed
              bp={breakpoints}
              buttonColor="fruitSalad"
              css={css`
                width: 100%;
                overflow: hidden;
                opacity: 1 !important;
                clip-path: inset(32px);
              `}
            >
              <LazyLoad debounce={false} offsetTop={200}>
                <iframe
                  title="vidthree"
                  width="100%"
                  height="570px"
                  src="https://www.youtube.com/embed/Td6AYW3zyo8?"
                  frameBorder="0"
                  allowFullScreen
                  autoPlay="true"
                  loop
                  loading="lazy"
                ></iframe>
              </LazyLoad>
            </FrameEmbed>
          </Container>
        </Section>
        <div
          css={css`
            height: 15rem;
          `}
        />
        <div
          css={theme => ({
            background: theme.colors.mineShaft,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: "180px",
          })}
        >
          <div css={css`
            align-items: center;
            flex-direction: column;     
            display: inline-flex;    
            @media(min-width:${tablet}){
              flex-direction: row;
            }
           `}>
          <a href="http://icfj.org" rel="noreferrer" target="_blank" css={css`
            color: white;
            font-family: ubuntu;
            font-size: 2.5em;
            margin-right: 2rem;
            text-decoration: none;
            `}> 
              ICFJ.org
            </a>
            <Social bp={breakpoints}/>
            </div>
          <div
            css={css`
              margin: 1rem;
              font-size: 1.7em;
              color: white;
              font-family: ubuntu;
            `}
          >
            {" "}
            Site by <Link href="https://tappingbones.com/" rel="noreferrer" target="_blank">TappingBones </Link> Ⓣ 
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}
