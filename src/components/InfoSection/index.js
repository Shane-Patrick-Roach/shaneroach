import React from 'react'
import { Column2, ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img } from './InfoElements'
import { Button } from '../Button'


const InfoSection = ({lightBg, id, imgStart, topLine,lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText = {lightText}>{headLine}</Heading>
              <Subtitle darkText = {darkText}>{description}</Subtitle>
              <TopLine>Here are a few technologies I’ve been working with recently:</TopLine>
              <Subtitle>JavaScript, React, Python, and Java</Subtitle>

            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt}>
              </Img>
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
