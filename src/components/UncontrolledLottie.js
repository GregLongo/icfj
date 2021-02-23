// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie-player'

class UncontrolledLottie extends Component {


  render(){



    return(
      <div>
        <Lottie 
        speed={.4}
      play={true}
      loop={true}
      animationData={this.props.animation}
        />
      </div>
    )
  }
}

export default UncontrolledLottie