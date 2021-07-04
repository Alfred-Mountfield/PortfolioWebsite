import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Img from 'gatsby-image'

import { useStaticQuery, graphql, Link } from 'gatsby'

import AppContainer from '../../components/appContainer'

import styles from './index.module.scss'
import { FluidObject } from 'gatsby-image/index'

type ProjectsProps = {
  location: Location
}

const Index: React.FC<ProjectsProps> = props => {
  const bodyRef = React.useRef<HTMLInputElement>(null)

  // Get Project Thumbnails
  const projectThumbnailsData = useStaticQuery(graphql`
    query getProjectThumbnails {
      allFile(filter: { extension: { regex: "/(jpg)|(png)/" }, relativeDirectory: { eq: "projects/thumbnails" } }) {
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
      title: "OutbreakSim",
      picture: 'outbreakSim.jpg',
      link: 'outbreak-sim',
    },
    {
      title: "This (Portfolio Website)",
      picture: 'portfolioWebsite.png',
      link: 'portfolio-website',
    },
    {
      title: 'WebGL Particle System',
      picture: 'particles.jpg',
      link: 'web-gl-particles',
    },
    {
      title: 'To-Scale Solar System Space Game',
      picture: 'studentHack.jpg',
      link: 'studenthack-flipping-flying-triangle',
    },
    {
      title: 'Rindr For Teddit',
      picture: 'rinderForTeddit.jpg',
      link: 'oxfordhack-rinder-for-teddit',
    },
    // {
    //   title: 'Purpose',
    //   picture: 'tempCoding.jpg',
    //   link: '',
    // },
    {
      title: 'Centre for Biological Timing App',
      picture: 'hackManchester.jpg',
      link: 'hackmanchester-bio-app',
    },
    {
      title: 'Puzzle Game',
      picture: 'leedsHack.jpg',
      link: 'leedshack-puzzle-game',
    },
    {
      title: 'p5 Graph experiment',
      picture: 'graph.jpg',
      link: 'p5-graph',
    },
    {
      title: 'p5 Snake experiment',
      picture: 'snake.jpg',
      link: 'p5-snake',
    },
  ]

  return (
    <AppContainer location={props.location}>
      <Container className={styles.mainContainer}>
        <Row className="m-1 justify-content-center">
          {projects.map(({ title, picture, link }: { title: string; picture: string; link: string }) => {
            return (
              <Col md={4} lg={3} className={"p-0 m-4"}>
                <div className={styles.projectContainer}>
                  <Link to={link}>
                    <Img
                      className={styles.projectThumbnail}
                      fluid={
                        projectThumbnailsData.allFile.edges.find(
                          ({ node }: { node: { childImageSharp: { fluid: FluidObject & { originalName: string } } } }) =>
                            node.childImageSharp.fluid.originalName === picture
                        ).node.childImageSharp.fluid
                      }
                    />
                    <div className={styles.projectTitle}>{title}</div>
                  </Link>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </AppContainer>
  )
}

export default Index
