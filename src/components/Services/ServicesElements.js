import styled from "styled-components";
import { FaFolder } from 'react-icons/fa'


export const ServicesContainer = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  font-family: 'Poppins';
  padding: 26px;

  @media screen and (max-width:768px) {
    height: max-content;
  }

  @media sceen and (max-width: 480px) {
    height: max-content;
  }
`


export const ServicesWrapper = styled.div`
  max-width: 1000px;
  height: max-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 50px;

  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border-radius: 10px;
  min-height: 350px;
  max-height: 350px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border: 5px solid #00B0FF;
  }
`

export const ServicesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  

`


export const ServicesIcon = styled.div`
  font-size: 3rem;

  
`
export const Icon = styled(FaFolder)`
  color: #000;
`

export const ServicesLinkWrapper = styled.div`
  float: right;
  justify-content: space-between;
  align-items: center;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    color: white;
  }
  
`

export const ServicesLinkIcon = styled.a`
  color: #fff;
  font-size: 24px;
  margin: 0.5rem;

`



// export const ServicesIcon = styled.img`
//   height: 160px;
//   width: 160px;
//   margin-bottom: 10px;
// `

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`


export const ServicesH2 = styled.h2`
  font-size: 1.5rem;

  margin-top: 10px;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  color: #808080;
  margin-top: 10px;
  
`

export const ServicesTools = styled.p`
  font-size: 1rem;

  color: #aaaaaa;
  margin-top: 10px;
  
  
`

