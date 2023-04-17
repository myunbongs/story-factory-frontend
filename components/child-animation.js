import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '/public/child-animation.json'

export default function ChildAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}