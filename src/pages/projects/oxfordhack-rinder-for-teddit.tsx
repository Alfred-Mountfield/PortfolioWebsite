import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import ProjectDisplay from '../../components/projectDisplay'
import AppContainer from '../../components/appContainer'

import styles from './common.module.css'

type PortfolioWebsiteProps = {
  location: Location
}

const OxfordHack: React.FC<PortfolioWebsiteProps> = props => {
  // Get All Images
  const imageData = useStaticQuery(graphql`
      query getOxfordHackPhotos {
          allFile(filter: { extension: { regex: "/(jpg)|(png)/" }, relativeDirectory: { regex: "/projects/oxfordHackRinder*/" } }) {
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

  const mainDescription = "OxfordHack 2018 had a platinum sponsorship from Microsoft, whose challenge involved integrating the Microsoft Azure " +
    "platform into an 'innovative' application. We (I and two coursemates) built a tinder-like app over 24 hours that integrated with the " +
    "Reddit API to match you with people's true selves. \n\n" +
    "The application extracted a random user, displayed their top subreddits, and extracted their Karma score. We then utilised " +
    "Microsoft's Azure Cognitive Services to extract the sentiment and key-phrases of the user's post history, finally pairing up the " +
    "top subreddits with pictures extracted from Bing to be displayed to the user. \n\n"

  const description =<div>{mainDescription}<i>Unfortunately an interactive version can't be included due to the use of Azure API credits</i></div>

  return (
    <AppContainer location={props.location}>
      <ProjectDisplay
        projectImage={imageData.allFile.edges[0].node.childImageSharp.fluid}
        title={'Rinder For Teddit - OxfordHack'}
        description={description}
        techStack={['Node.js', 'Javascript', 'MongoDB', 'Express', 'Socket.io', 'p5.js', 'Azure Cognitive Services', 'Snoowrap']}
      />
    </AppContainer>
  )
}

export default OxfordHack
