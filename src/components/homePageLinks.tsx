import React, { PropsWithChildren, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import styles from './homePageLinks.module.css'

type HomePageLinksProps = {
  location: Location
}

const HomePageLinks = React.forwardRef<HTMLDivElement, PropsWithChildren<HomePageLinksProps>>((props, ref) => {
  const [_, setState] = useState(0)
  React.useEffect(() => {
    setState(1)
  }, []) // force re-render of this component on page load due to Gatsby's preloading

  const imageData = useStaticQuery(graphql`
    query GetPageLinkPictures {
      about: file(relativePath: { eq: "tempAbout.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1100, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      coding: file(relativePath: { eq: "tempCoding.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1100, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      gallery: file(relativePath: { eq: "gallery/carousel/Steel Wool Spinning on Bridge.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1100, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  const aboutImage = imageData.about.childImageSharp.fluid
  const codingImage = imageData.coding.childImageSharp.fluid
  const galleryImage = imageData.gallery.childImageSharp.fluid

  type visObserverInfo = {
    observer?: IntersectionObserver
    ref: React.RefObject<HTMLInputElement>
  }

  const getVisObserverInfo = () => {
    const ref = React.useRef<HTMLInputElement>(null)
    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        ref.current?.classList.add(styles.inViewMobile)
        ref.current?.classList.remove(styles.notMobile)
      } else {
        ref.current?.classList.remove(styles.inViewMobile)
      }
    }
    const observer =
      typeof window !== `undefined` && 'ontouchstart' in window
        ? new IntersectionObserver(callback, {
            root: null,
            threshold: [1],
          })
        : undefined

    if (ref.current) {
      observer?.observe(ref.current)
    }

    return {
      observer: observer,
      ref: ref,
    }
  }

  type links = 'about' | 'projects' | 'gallery'
  const mobileLinkVisObservers: Record<links, visObserverInfo> = {
    about: getVisObserverInfo(),
    projects: getVisObserverInfo(),
    gallery: getVisObserverInfo(),
  }

  return (
    <Container id="content" ref={ref} fluid>
      <Row className={styles.pageLinks}>
        <Col md={4} ref={mobileLinkVisObservers.about.ref} className={styles.notMobile}>
          <Link to={'/about'}>
            <Img fluid={aboutImage} />
            <div className={styles.overlayContainer}>
              <div className={styles.textOverlay}>
                <div className={styles.overlayText}>About</div>
              </div>
            </div>
          </Link>
        </Col>
        <Col md={4} ref={mobileLinkVisObservers.projects.ref} className={styles.notMobile}>
          <Link to={'/projects'}>
            <Img fluid={codingImage} />
            <div className={styles.overlayContainer}>
              <div className={styles.textOverlay}>
                <div className={styles.overlayText}>Coding Snippets and Projects</div>
              </div>
            </div>
          </Link>
        </Col>
        <Col md={4} ref={mobileLinkVisObservers.gallery.ref} className={styles.notMobile}>
          <Link to={'/photos'}>
            <Img fluid={galleryImage} />
            <div className={styles.overlayContainer}>
              <div className={styles.textOverlay}>
                <div className={styles.overlayText}>Photography</div>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  )
})

export default HomePageLinks
