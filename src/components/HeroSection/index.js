import React, { useState } from 'react'
import { Button } from '../Button'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP } from './HeroElements'

const HeroSection = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'>

        </VideoBg> */}
        {/* <ImgBg src={bgImg} alt="nature">
        </ImgBg> */}
      </HeroBg>
      <HeroContent>
        <HeroP >
          Hi, my name is 
        </HeroP>
        <HeroH1>Shane Roach</HeroH1>
        <HeroH1 style={{color: '#cccccc'}}>I build things for the web.</HeroH1>
        <HeroP style={{color: '#aaaaaa'}}>
          I am a software engineer who loves to create immersive, aesthetic, accessible user experiences.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='projects' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            {hover ? <ArrowForward /> : <ArrowRight></ArrowRight>} View Work
          </Button>


        </HeroBtnWrapper>
      </HeroContent>




    </HeroContainer>
  )
}

export default HeroSection
