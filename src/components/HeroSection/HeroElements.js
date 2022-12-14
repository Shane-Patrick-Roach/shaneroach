import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'



export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 6vw 20vw;
  height: 800px;
  
  position: relative;
  z-index: 1;
  font-family: 'Poppins'
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
`
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34
`

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  


`


export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 60px;
  

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }


`

export const HeroP = styled.p`
  
  color: #fff;
  font-size: 26px;
  
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;

  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const HeroPsub = styled.p`
  
  color: #00B0FF;
  font-size: 26px;
  
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;

  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`


export const HeroBtnWrapper = styled.div`
  margin-top: 10px;
  max-width: fit-content;
  margin-top: 60px;
  
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`

  margin-left: 8px;
  font-size: 20px;

`

export const ArrowRight = styled(MdKeyboardArrowRight)`

  margin-left: 8px;
  font-size: 20px;
  
`
