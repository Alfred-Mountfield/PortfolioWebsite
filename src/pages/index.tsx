import React, { Dispatch, SetStateAction, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { graphql, Link, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

import AppContainer from '../components/appContainer'

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
                  fluid(maxWidth: 2000, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                      ...GatsbyImageSharpFluidLimitPresentationSize
                  }
              }
          }
          about: file(relativePath: { eq: "tempCoding.jpg" }) {
              id
              childImageSharp {
                  fluid(maxWidth: 700, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                      ...GatsbyImageSharpFluidLimitPresentationSize
                  }
              }
          }
          coding: file(relativePath: { eq: "tempCoding.jpg" }) {
              id
              childImageSharp {
                  fluid(maxWidth: 700, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                      ...GatsbyImageSharpFluidLimitPresentationSize
                  }
              }
          }
          gallery: file(relativePath: { eq: "gallery/carousel/Lying Rabbit.jpg" }) {
              id
              childImageSharp {
                  fluid(maxWidth: 700, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                      ...GatsbyImageSharpFluidLimitPresentationSize
                  }
              }
          }
      }
  `)
  const homeImage = imageData.homeBackground.childImageSharp.fluid
  const aboutImage = imageData.about.childImageSharp.fluid
  const codingImage = imageData.coding.childImageSharp.fluid
  const galleryImage = imageData.gallery.childImageSharp.fluid

  const bodyRef = React.useRef<HTMLInputElement>(null)


  type visObserverInfo = {
    observer?: IntersectionObserver,
    ref: React.RefObject<HTMLInputElement>
  }

  const getVisObserverInfo = () => {
    const ref = React.useRef<HTMLInputElement>(null)
    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        ref.current?.classList.add(styles.inViewMobile)
        ref.current?.classList.remove(styles.notMobile)
      }
      else {
        ref.current?.classList.remove(styles.inViewMobile)
      }
    }
    const observer = ('ontouchstart' in window) ? new IntersectionObserver(callback, {
      root: null,
      threshold: [1]
    }) : undefined

    if (ref.current) {
      observer?.observe(ref.current)
    }

    return {
      observer: observer,
      ref: ref
    }
  }

  type links = 'about' | 'projects' | 'gallery'
  const mobileLinkVisObservers: Record<links, visObserverInfo> = {
    'about': getVisObserverInfo(),
    'projects': getVisObserverInfo(),
    'gallery': getVisObserverInfo(),
  }

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
      <Container id="content" ref={bodyRef} fluid>
        <Row className={styles.pageLinks}>
          <Col md={4} ref={mobileLinkVisObservers.about.ref} className={styles.notMobile}>
            <Link to={'/about'}>
              <Img fluid={aboutImage}/>
              <div className={styles.overlayContainer}>
                <div className={styles.textOverlay}>
                  <div className={styles.overlayText}>About</div>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={4} ref={mobileLinkVisObservers.projects.ref} className={styles.notMobile}>
            <Link to={'/projects'}>
              <Img fluid={codingImage}/>
              <div className={styles.overlayContainer}>
                <div className={styles.textOverlay}>
                  <div className={styles.overlayText}>Coding Snippets and Projects</div>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={4} ref={mobileLinkVisObservers.gallery.ref} className={styles.notMobile}>
            <Link to={'/photos'}>
              <Img fluid={galleryImage}/>
              <div className={styles.overlayContainer}>
                <div className={styles.textOverlay}>
                  <div className={styles.overlayText}>Photography</div>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </AppContainer>
  )
}

export default Home
