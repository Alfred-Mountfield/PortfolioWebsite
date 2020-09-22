import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Img from 'gatsby-image'
import { FluidObject } from 'gatsby-image/index'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { graphql, useStaticQuery } from 'gatsby'

import AppContainer from '../components/appContainer'
import PhotoGallery from '../components/photoGallery'

import styles from './photos.module.scss'

type PhotosProps = {
  location: Location
}

const Photos: React.FC<PhotosProps> = props => {
  const bodyRef = React.useRef<HTMLInputElement>(null)

  function scrollDown() {
    bodyRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  // Get Carousel Images
  const carouselImagesData = useStaticQuery(graphql`
      query getCarouselPhotos {
          allFile(filter: { extension: { regex: "/(jpg)|(png)/" }, relativeDirectory: { eq: "gallery/carousel" } }) {
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

  return (
    <AppContainer location={props.location}>
      <Container className={styles.carouselContainer}>
        <Carousel>
          {carouselImagesData.allFile.edges.map(({ node }: { node: { childImageSharp: { fluid: FluidObject | FluidObject[] } } }) => (
            <Carousel.Item>
              <Img fluid={node.childImageSharp.fluid} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      <Row className={classNames(styles.downArrow, 'justify-content-md-center m-0 p-0')}>
        <Col lg={2} className="my-auto text-center">
          <FontAwesomeIcon icon={faChevronDown} onClick={scrollDown} className={'align-middle'} size={'2x'} style={{ cursor: 'pointer' }} />
        </Col>
      </Row>
      <PhotoGallery ref={bodyRef} />
    </AppContainer>
  )
}

export default Photos
