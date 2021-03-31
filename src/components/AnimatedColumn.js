import React, { Component } from "react"
import styled from "@emotion/styled"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TriggeredCounter from "../components/TriggeredCounter.js"
import { keyframes, css } from "@emotion/react"
import facepaint from "facepaint"
import { isIOS} from "react-device-detect"

gsap.registerPlugin(ScrollTrigger)

const loop = keyframes`
	from { background-position: 0 0; }
  to { background-position: -400px 0; }
`

const Inner = styled.div`
  position: absolute;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  width: 100%;
  height: 100%;
  white-space: nowrap;
  background-color: hotpink;
`

const Labels = styled.div`
  font-family: interstate-condensed;
  color: white;
  margin: auto;
  position: absolute;
  z-index: 999;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-weight: 600;
`

class AnimatedColumn extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }
  componentDidMount() {
    gsap.from(this.ref.current, {
      clipPath: "polygon(0% 100%, 75% 100%, 75% 100%, 0% 100%)",
      duration: 1,
      scrollTrigger: {
        trigger: this.ref.current,
        start: "top center",
        end: "bottom top",
        toggleActions: "play complete reverse reverse",
        markers: false,
      },
    })
  }
  render() {
    const mq = facepaint(this.props.bp.map(bp => `@media (min-width:${bp})`))

    const color = this.props.color
    const Content = styled.div`
      margin-top: -24px;
      background-image: url(${this.props.image});
      background-size: contain;
      background-blend-mode: soft-light;
      background-color: ${props => props.theme.colors[color]};
      animation: ${loop} 20s linear infinite;
      ${isIOS&& css`
        animation: none;
        background-repeat: no-repeat
      `}
      ${mq({
        width: ["300px", "400px", "400px", "400px"],
        height: ["300px", "400px", "400px", "400px"],
      })}
    `

    const Column = styled.div`
      position: relative;
      ${mq({
        width: ["160px", "180px", "240px", "240px"],
        height: ["160px", "180px", "240px", "240px"],
      })}
    `

    const CounterSmol = styled(TriggeredCounter)`
      padding-top: 25%;
      ${mq({ fontSize: ["2em", "2em", "3em", "3em"] })};
    `

    const Title = styled.div`
      text-align: center;
      ${mq({ fontSize: ["1em", "1.5em", "1.5em", "2em"] })};
    `

    const Sign = styled.span`
      position: absolute;
      ${mq({
        fontSize: ["3em", "3em", "3em", "3em"],
        transform: [
          "translate(40px, 30px)",
          "translate(45px, 30px)",
          "translate(50px, 60px)",
          "translate(55px, 60px)",
        ],
      })};
    `

    return (
      <Column>
        <Labels>
          <CounterSmol val={this.props.val} />
          <Sign>{this.props.sign}</Sign>
          <Title>{this.props.title}</Title>
        </Labels>
        <Inner ref={this.ref}>
          <Content />
        </Inner>
      </Column>
    )
  }
}

export default AnimatedColumn
