import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinkTitle, FooterWrap, FootLinksWrapper, WebsiteRights } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer id='contact'>
      <FooterWrap>
        <FooterLinksContainer>
          <FootLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Links</FooterLinkTitle>
                <FooterLink href="https://github.com/Shane-Patrick-Roach" target="_blank">Github</FooterLink>
                <FooterLink href="https://www.linkedin.com/in/shane-patrick-roach" target="_blank">LinkedIn</FooterLink>
                <FooterLink href="mailto: roach.patrick.shane@gmail.com" target="_blank">Email</FooterLink>

              
            </FooterLinkItems>
          </FootLinksWrapper>

            

          
        </FooterLinksContainer>
        
          
            <WebsiteRights>Shane Roach {new Date().getFullYear()} All rights Reserved</WebsiteRights>
            
        
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
