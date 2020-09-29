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
      query getSnakePhotos {
          allFile(filter: { extension: { regex: "/(jpg)|(png)/" }, relativeDirectory: { regex: "/projects/snake*/" } }) {
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

  const description = "One of the first projects I wrote, trying to mess about with OOP principles in Javascript by implementing a basic " +
    "version of Snake, utilising pure p5.js.\n\n" +
    "Some of the implementation ended up being relatively tricky at the time, with the grid expanding to fit the size of the window while " +
    "maintaining cells as squares.\n\n" +
    "This project lead to p5 being one of my predominant tools in future experiments through the early days as it made it really easy " +
    "to quickly add graphics and animations."

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
