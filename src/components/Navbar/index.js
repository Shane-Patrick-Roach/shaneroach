import React, { useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLogo, NavBarContainer, Nav, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink } from './NavbarElements'
import { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import pdf from "../../assets/shane-roach-resume.pdf"



const Navbar = ({ toggle }) => {


  const [scrollNav, setScrollNav] = useState(false)


  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }
  )

  const toggleHome = () => {
    scroll.scrollToTop();
  }


  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to='/' onClick={toggleHome}>Shane Roach</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLink
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                activeClass="active">
                About

              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='projects'

                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                activeClass="active">
                Projects

              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='contact'

                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                activeClass="active">
                Contact

              </NavLink>
            </NavItem>

          </NavMenu>

          <NavBtn>

            <NavBtnLink href={pdf} target="_blank" rel="noreferrer" > Resume

            </NavBtnLink>


          </NavBtn>
        </NavBarContainer>



      </Nav>
    </>

  )
}

export default Navbar
