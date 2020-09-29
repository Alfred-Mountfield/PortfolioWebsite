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
      query getGraphPhotos {
          allFile(filter: { extension: { regex: "/(jpg)|(png)/" }, relativeDirectory: { regex: "/projects/graph*/" } }) {
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

  const description = "An early, small experiment into creating a graphing utility in pure p5.js. This was to be the beginnings of a project that " +
    "would have been something like an extended Desmos; allowing the user to modify the basis vectors of the plane itself."

  return (
    <AppContainer location={props.location}>
      <ProjectDisplay
        projectImage={imageData.allFile.edges[0].node.childImageSharp.fluid}
        title={'P5 Graphing Utility'}
        description={description}
        techStack={['Javascript', 'p5.js']}
        codeLink={"https://github.com/Alfred-Mountfield/p5-graph"}
      />
    </AppContainer>
  )
}

export default P5Graph
