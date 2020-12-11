import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import { ProjectDisplayPageProps } from "../../components/projectPagesCommon";
import ProjectDisplay from '../../components/projectDisplay'
import AppContainer from '../../components/appContainer'

import styles from './common.module.css'

const StudentHack: React.FC<ProjectDisplayPageProps> = props => {
  // Get All Images
  const imageData = useStaticQuery(graphql`
      query getStudentHackPhotos {
          allFile(filter: { extension: { regex: "/(jpg)|(png)/" }, relativeDirectory: { regex: "/projects/studentHackSpace*/" } }) {
              edges {
                  node {
                      childImageSharp {
                          fluid(maxWidth: 2000, quality: 90) {
                              ...GatsbyImageSharpFluid
                              ...GatsbyImageSharpFluid_withWebp
                              ...GatsbyImageSharpFluidLimitPresentationSize
                          }
                      }
                  }
              }
          }
      }
  `)

  const description = "StudentHack 2018 had a \"Space Hack\" challenge which basically just meant the hackathon project needed to be " +
    "space themed. It was the second hackathon I had attended, joining up with three other, relatively inexperienced, first-years. " +
    "I had a look around some space-related APIs and found a Nasa JPL API which gave locations of near-earth objects. " +
    "From this we (I and two other teammates) decided to build a solar-system exploration game, where a player could fly from Earth to " +
    "asteroids, the main appeal (and technical challenge) being that the solar system would be to scale.\n\n" +
    "During the development process I found the Asterank API, which ties Nasa JPL information with spectral analysis of asteroids to " +
    "give composition (and therefore estimate worth) of them. This lead to the eventual idea of the player progressively exploring " +
    "further from Earth, mining asteroids to then buy upgrades to their ship, therefore allowing them to go faster and further.\n\n" +
    "The entire app was written in JavaScript (using p5.js), and that came with its own challenges. We needed to hold the information of " +
    "thousands of asteroids, as well as being able to render the entire solar system to scale, in the web-browser. I utilised a " +
    "quad-tree to selectively render nearby objects, and we used IndexedDB to store the asteroid data extracted from the API at start-up."


  return (
    <AppContainer location={props.location}>
      <ProjectDisplay
        projectImage={imageData.allFile.edges[0].node.childImageSharp.fluid}
        title={'Flipping Flying Triangle - StudentHack'}
        description={description}
        techStack={['Javascript', 'p5.js', 'MongoDB']}
      />
    </AppContainer>
  )
}

export default StudentHack
