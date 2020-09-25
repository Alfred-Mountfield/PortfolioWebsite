import React, { useEffect } from 'react'
import Img from 'gatsby-image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import useWindowWidthBreakpoints from 'use-window-width-breakpoints'
import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image/index'

import styles from './photoGallery.module.css'
import classNames from 'classnames'

export type Ref = HTMLDivElement

type Props = {
  children?: any
  setModalPicture: React.Dispatch<React.SetStateAction<FluidObject>>
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const PhotoGallery = React.forwardRef<Ref, Props>((props, ref) => {
  // Get All Images
  const allImagesData = useStaticQuery(graphql`
    query GetAllGalleryPhotos {
      allFile(filter: { extension: { regex: "/(jpg)|(png)/" }, relativeDirectory: { regex: "/gallery*/" } }) {
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

  const photos = allImagesData.allFile.edges.map(
    ({ node }: { node: { childImageSharp: { fluid: FluidObject | FluidObject[] } } }) => node.childImageSharp.fluid
  )
  const breakpoint = useWindowWidthBreakpoints()
  let numCols = 3
  let photoCols: Array<FluidObject[]> = []

  function calculateColumns() {
    numCols = breakpoint.up.lg ? 3 : 2
    photoCols = []
    chunk_array(photoCols, photos, numCols)
  }

  calculateColumns()

  useEffect(() => {
    calculateColumns()
  }, [breakpoint])

  function chunk_array(output_arr: Array<FluidObject[]>, arr: Array<FluidObject>, num_sub_arrays: number) {
    let i = 0,
      n = arr.length
    let len = n / num_sub_arrays
    while (i < n) {
      output_arr.push(arr.slice(i, (i += len)))
    }
  }

  return (
    <Container className={classNames(styles.galleryContainer, 'm-0')} ref={ref}>
      <Row>
        {photoCols.map(photoCol => (
          <Col className={styles.galleryColumn} xs={6} lg={4}>
            {photoCol.map(photo => (
              <div
                onClick={() => {
                  props.setModalPicture(photo)
                  props.setShowModal(true)
                }}
              >
                <Img style={{ flexGrow: 1 }} fluid={photo} />
              </div>
            ))}
          </Col>
        ))}
      </Row>
    </Container>
  )
})

export default PhotoGallery
