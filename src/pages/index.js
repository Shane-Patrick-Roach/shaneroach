import React, { useState } from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import { Sidebar } from '../components/Sidebar'




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
