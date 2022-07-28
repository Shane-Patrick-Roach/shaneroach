import React from 'react'


import { ServicesCard, ServicesContainer, ServicesH1, ServicesIcon,ServicesH2, ServicesWrapper, ServicesP,  Icon, ServicesHeader, ServicesLinkIcon, ServicesLinkWrapper, ServicesTools } from './ServicesElements'
import { projects } from './data'
import { FaGit, FaGithub, FaLandmark, FaRegCaretSquareRight } from 'react-icons/fa'

const Services = () => {
  return (
    <ServicesContainer id="projects">
      <ServicesH1>Projects</ServicesH1>
      <ServicesWrapper>

        {projects.map(project => (


          <ServicesCard>
            <ServicesHeader>
              
              <ServicesIcon>
                <Icon></Icon>
              </ServicesIcon>

              <ServicesLinkWrapper>
                <ServicesLinkIcon href={project.sourceCode} target="_blank">
                  <FaGithub style={{color: '#000'}}></FaGithub>
                </ServicesLinkIcon>
                <ServicesLinkIcon href={project.link} target="_blank">
                  <FaRegCaretSquareRight style={{color: '#000'}}></FaRegCaretSquareRight>
                </ServicesLinkIcon>
              </ServicesLinkWrapper>

              
              
            </ServicesHeader>

            <ServicesH2>{project.title}</ServicesH2>
            <ServicesP>{project.description}</ServicesP>
            <ServicesTools>{project.subtitle}</ServicesTools>

            



          </ServicesCard>


        ))}


      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
