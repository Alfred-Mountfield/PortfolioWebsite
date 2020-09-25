import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal'
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

  const [showModal, setShowModal] = useState(false)
  const handleClose = () => setShowModal(false)
  const [modalPicture, setModalPicture] = useState<FluidObject>(carouselImagesData.allFile.edges[0].fluid)

  return (
    <AppContainer location={props.location}>
      <Modal onClick={handleClose} show={showModal} onHide={handleClose} animation={false} className={styles.modal} centered>
        <Modal.Body>
          <Img fluid={modalPicture} />
        </Modal.Body>
      </Modal>
      <Container className={styles.carouselContainer}>
        <Carousel>
          {carouselImagesData.allFile.edges.map(({ node }: { node: { childImageSharp: { fluid: FluidObject | FluidObject[] } } }) => {
            const imageFluid = Array.isArray(node.childImageSharp.fluid) ? node.childImageSharp.fluid[0] : node.childImageSharp.fluid
            return (
              <Carousel.Item
                onClick={() => {
                  setModalPicture(imageFluid)
                  setShowModal(true)
                }}
              >
                <Img fluid={imageFluid} />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </Container>
      <Row className={classNames(styles.downArrow, 'justify-content-md-center m-0 p-0')}>
        <Col lg={2} className="my-auto text-center">
          <FontAwesomeIcon icon={faChevronDown} onClick={scrollDown} className={'align-middle'} size={'2x'} style={{ cursor: 'pointer' }} />
        </Col>
      </Row>
      <PhotoGallery ref={bodyRef} setModalPicture={setModalPicture} setShowModal={setShowModal} />
    </AppContainer>
  )
}

export default Photos
