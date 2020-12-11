import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { ProjectDisplayPageProps } from "../../components/projectPagesCommon";
import ProjectDisplay from '../../components/projectDisplay'
import AppContainer from '../../components/appContainer'

import styles from './common.module.css'

const HackManchesterBioTiming: React.FC<ProjectDisplayPageProps> = props => {
  // Get All Images
  const imageData = useStaticQuery(graphql`
      query getHackManchesterPhotos {
          allFile(filter: { extension: { regex: "/(jpg)|(png)/" }, relativeDirectory: { regex: "/projects/hackManchesterBioTiming*/" } }) {
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

  // const photos = allImagesData.allFile.edges.map(
  //   ({ node }: { node: { childImageSharp: { fluid: FluidObject | FluidObject[] } } }) => node.childImageSharp.fluid
  // )

  const description = "For HackManchester's Centre for Biological Timing Challenge, a friend and I created a responsive web-app. " +
    "The app analyses data exported from common sleep apps, and had prototype implementations of short games for a user to track their " +
    "response times and mental acuity scores over a day.\n\n" +
    "The app was made over about 20 hours, with a large part of the time spent teaching my friend JavaScript and other technologies " +
    "used, (he had very limited programming experience and didn't study CS)"

  return (
    <AppContainer location={props.location}>
      <ProjectDisplay
        projectImage={imageData.allFile.edges[0].node.childImageSharp.fluid}
        title={'Interactive Graph Experiment'}
        description={description}
        techStack={['Javascript', 'p5.js']}
      />
    </AppContainer>
  )
}

export default HackManchesterBioTiming
