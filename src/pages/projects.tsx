import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Img from 'gatsby-image'

import { useStaticQuery, graphql } from 'gatsby'

import AppContainer from '../components/appContainer'

import styles from './projects.module.css'
import { FluidObject } from 'gatsby-image/index'

type ProjectsProps = {
  location: Location
}

const Projects: React.FC<ProjectsProps> = props => {
  const bodyRef = React.useRef<HTMLInputElement>(null)

  // Get Project Thumbnails
  const projectThumbnailsData = useStaticQuery(graphql`
    query getProjectThumbnails {
      allFile(filter: { extension: { regex: "/(jpg)|(png)/" }, relativeDirectory: { eq: "projectThumbnails" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 800, quality: 70) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluid_withWebp
                ...GatsbyImageSharpFluidLimitPresentationSize
                originalName
              }
            }
          }
        }
      }
    }
  `)

  const projects = [
    {
      title: 'This website',
      picture: 'personalWebsite.png',
    },
    {
      title: 'Purpose',
      picture: 'tempCoding.jpg',
    },
    {
      title: 'KachiMoro Cli',
      picture: 'tempCoding.jpg',
    },
    {
      title: 'TODO',
      picture: 'tempCoding.jpg',
    },
    {
      title: 'Potato',
      picture: 'tempCoding.jpg',
    },
  ]

  return (
    <AppContainer location={props.location}>
      <Container className={styles.mainContainer}>
        <Row className="m-1 justify-content-center">
          {projects.map(({ title, picture }: { title: string; picture: string }) => {
            return (
              <Col md={4} lg={3} className="p-0 m-4">
                <Img
                  className={styles.projectThumbnail}
                  fluid={projectThumbnailsData.allFile.edges.find(
                    ({ node }: { node: { childImageSharp: { fluid: FluidObject & { originalName: string } } } }) =>
                      node.childImageSharp.fluid.originalName === picture
                  ).node.childImageSharp.fluid}
                />
                <div className={styles.projectTitle}>{title}</div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </AppContainer>
  )
}

export default Projects
