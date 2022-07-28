import React from 'react'
import pdf from "../../assets/shane-roach-resume.pdf"
import { CloseIcon, Icon, SidebarBtnWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElements'


export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>

            About
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            Projects

          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>

            Contact
          </SidebarLink>
          
        </SidebarMenu>

        
      </SidebarWrapper>

      <SidebarBtnWrap>
        <SidebarLink href={pdf} target="_blank" rel="noreferrer" > Resume

        </SidebarLink>
        </SidebarBtnWrap>
    </SidebarContainer>
  )
}
