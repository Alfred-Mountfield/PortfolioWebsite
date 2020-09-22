import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from 'gatsby-image'

import { useStaticQuery, graphql } from 'gatsby'

import AppContainer from '../components/appContainer'

import styles from './projects.module.css'

type ProjectsProps = {
  location: Location
}

const Projects: React.FC<ProjectsProps> = props => {
  const bodyRef = React.useRef<HTMLInputElement>(null)

  // get Images
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "tempCoding.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <AppContainer location={props.location}>
      <div className={styles.mainContainer}>
        <Row className="m-1 justify-content-center">
          <Col className="col-md-3 p-0 m-4">
            <Img className="img-fluid fit-image" fluid={data.file.childImageSharp.fluid} />
            <div className={styles.projectTitle}>Coding Snippets and Projects</div>
          </Col>
          <Col className="col-md-3 p-0 m-4">
            <Img className="img-fluid fit-image" fluid={data.file.childImageSharp.fluid} />
            <div className={styles.projectTitle}>Coding Snippets and Projects</div>
          </Col>
          <Col className="col-md-3 p-0 m-4">
            <Img className="img-fluid fit-image" fluid={data.file.childImageSharp.fluid} />
            <div className={styles.projectTitle}>Coding Snippets and Projects</div>
          </Col>
        </Row>
        <Row className="m-1 justify-content-center">
          <Col className="col-md-3 p-0 m-4">
            <Img className="img-fluid fit-image" fluid={data.file.childImageSharp.fluid} />
            <div className={styles.projectTitle}>Coding Snippets and Projects</div>
          </Col>
          <Col className="col-md-3 p-0 m-4">
            <Img className="img-fluid fit-image" fluid={data.file.childImageSharp.fluid} />
            <div className={styles.projectTitle}>Coding Snippets and Projects</div>
          </Col>
          <Col className="col-md-3 p-0 m-4">
            <Img className="img-fluid fit-image" fluid={data.file.childImageSharp.fluid} />
            <div className={styles.projectTitle}>Coding Snippets and Projects</div>
          </Col>
        </Row>
      </div>
    </AppContainer>
  )
}

export default Projects
