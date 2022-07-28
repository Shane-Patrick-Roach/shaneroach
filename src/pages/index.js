import React from 'react'
import Navbar from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import Footer from '../components/Footer'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'




export const Home = () => {

  const [isOpen, setIsOpen] = useState(false)


  const toggle = () => {
    setIsOpen(!isOpen)
  }



  return (
    <>
    <Sidebar isOpen={isOpen}  toggle= {toggle}>

    </Sidebar>
    <Navbar toggle= {toggle}>

    </Navbar>
    <HeroSection></HeroSection>
    <InfoSection {...homeObjOne}></InfoSection>
    <Services></Services>
    <Footer></Footer>
    </>
  )
}
