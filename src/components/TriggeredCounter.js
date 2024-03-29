import React, { Component } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled from "@emotion/styled"
//
gsap.registerPlugin(ScrollTrigger)

class TriggeredCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
    this.ref = React.createRef()
  }
  countNumbers() {
    const target = {
      value: this.state.value,
    }
    gsap.to(target, {
      duration: 1,
      value: this.props.val,
      roundProps: "value",
      onUpdate: () => {
        this.setState({ value: target.value.toLocaleString() })
      },
      scrollTrigger: {
        trigger: this.ref.current,
        start: "top center",
        end: "bottom top",
        toggleActions: "play complete none none",
        markers: false,
      },
    })
  }
  componentDidMount() {
    this.countNumbers()
  }

  render() {
    const Counter = styled.div`
      font-size: 160px;
    `
    return (
      <Counter className={this.props.className} ref={this.ref}>
        {" "}
        {this.state.value}
      </Counter>
    )
  }
}

export default TriggeredCounter
