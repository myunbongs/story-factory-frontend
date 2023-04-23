import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '/public/134807-book-opening-best-lottie.json'

export default function BookAnimation() {
    return (
        <Lottie
            loop
            animationData={lottieJson}
            play
        />
    )
}