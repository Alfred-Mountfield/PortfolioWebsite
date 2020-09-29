import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import ProjectDisplay from '../../components/projectDisplay'
import AppContainer from '../../components/appContainer'

import styles from './common.module.css'

type PortfolioWebsiteProps = {
  location: Location
}

const P5Graph: React.FC<PortfolioWebsiteProps> = props => {
  // Get All Images
  const imageData = useStaticQuery(graphql`
      query getLeedsHackPhotos {
          allFile(filter: { extension: { regex: "/(jpg)|(png)/" }, relativeDirectory: { regex: "/projects/leedsHackPuzzle*/" } }) {
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

  const description = "LeedsHack was my first hackathon, I attended with one other first-year student with zero experience between us. " +
    "We decided to write a puzzle-game, where the player would progress to each subsequent level by completing the challenge. The game " +
    "had a general theme of teaching Computer Science related concepts, ranging from cryptography to some basic programming.\n\n" +
    "We utilised p5.js for visuals, and wrote the logic in JavaScript, and over 24 hours wrote 7 levels. The final level was left " +
    "unfinished unfortunately but was the one I was most excited for, in the last hour of the twenty-four I thought about implementing a " +
    "'turtle' level where the player would programme a route into an agent on the screen to walk on buttons and open doors and such.\n\n" +
    "We went on to win the Sky Sports Betting and Gaming Sponsorship Challenge."

  return (
    <AppContainer location={props.location}>
      <ProjectDisplay
        projectImage={imageData.allFile.edges[0].node.childImageSharp.fluid}
        title={'Snake Experiment'}
        description={description}
        techStack={['Javascript', 'p5.js']}
      />
    </AppContainer>
  )
}

export default P5Graph
