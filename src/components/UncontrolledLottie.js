// UncontrolledLottie.jsx
import React, { Component } from "react"
import Lottie from "react-lottie"

class UncontrolledLottie extends Component {
  render() {
    const defaultOptions = {
      autoplay: true,
      loop: true,
      animationData: this.props.animation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }
    return (
      <div className={this.props.className}>
        <Lottie options={defaultOptions} />
      </div>
    )
  }
}

export default UncontrolledLottie
