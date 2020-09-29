import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import ProjectDisplay from '../../components/projectDisplay'
import AppContainer from '../../components/appContainer'

import styles from './common.module.css'

type PortfolioWebsiteProps = {
  location: Location
}

const PortfolioWebsite: React.FC<PortfolioWebsiteProps> = props => {
  // Get All Images
  const imageData = useStaticQuery(graphql`
    query GetPersonalWebsitePhoto {
      picture: file(relativePath: { eq: "projects/portfolioWebsite.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  const description = "The very website you're on! This is a place for me to shove code, photos, and feel some freedom from the bounds of a " +
    "C.V. It's designed to be mobile-friendly and fully responsive, don't be afraid to poke around on the developer tools. \n\n" +
    "I first built this as an exploration into the world of web-development. If you look through the Git history you'll see " +
    "that this started off as an Angular app (not necessarily because it was the right tool for the job but because I learn best when " +
    "trying things practically, and I was learning the framework at the time). Upon using React at Improbable I decided to convert the " +
    "whole project, and while setting up the project I read about alternatives to create-react-app deciding on Gatsby.\n\n" +
    "As the website is largely static content, and serves a large amount of photos, Gatsby was selected, focusing especially for the " +
    "optimisations it has regarding image delivery."

  return (
    <AppContainer location={props.location}>
      <ProjectDisplay
        projectImage={imageData.allFile.edges[0].node.childImageSharp.fluid}
        title={'Portfolio Website'}
        description={description}
        techStack={['React', 'Gatsby']}
        link={'/'}
        codeLink={'https://github.com/Alfred-Mountfield/PortfolioWebsite'}
      />
      <Link className={styles.backButton} to={".."}>Back</Link>
    </AppContainer>
  )
}

export default PortfolioWebsite
