import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import AppContainer from '../components/appContainer'
import HomePageLinks from '../components/homePageLinks'

import styles from './index.module.css'

type HomeProps = {
  location: Location
}

const Home: React.FC<HomeProps> = props => {
  const imageData = useStaticQuery(graphql`
      query GetHomeBackground {
          homeBackground: file(relativePath: { eq: "homeBackground.jpg" }) {
              id
              childImageSharp {
                  fluid(maxWidth: 3000, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                      ...GatsbyImageSharpFluidLimitPresentationSize
                  }
              }
          }
      }
  `)
  const homeImage = imageData.homeBackground.childImageSharp.fluid
  const bodyRef = React.useRef<HTMLInputElement>(null)

  function scrollDown() {
    bodyRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <AppContainer location={props.location}>
      <BackgroundImage className={styles.headPic} fluid={homeImage}>
        <div className={styles.fullName}>
          <span className={styles.firstName}>Alfred</span>
          <span className={styles.lastName}>Mountfield</span>
        </div>
        <div className={styles.caption}>
          <span className={styles.border} id="scroll" onClick={scrollDown} style={{ cursor: 'pointer' }}>
            Scroll Down
          </span>
        </div>
      </BackgroundImage>
      <HomePageLinks location={props.location} ref={bodyRef}/>
    </AppContainer>
  )
}

export default Home
