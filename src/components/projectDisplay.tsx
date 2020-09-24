import React from 'react'
import Img from 'gatsby-image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { FluidObject } from 'gatsby-image/index'
import classNames from 'classnames'

import styles from './projectDisplay.module.scss'

type ProjectDisplayProps = {
  projectImage: FluidObject
  title: string
  description: string
  techStack: string[]
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = props => {
  return (
    <div className={classNames(styles.contentContainer)}>
      <Container>
        <Row>
          <Col sm={12} lg={6} className={classNames(styles.projectImage)}>
            <Img style={{ flexGrow: 1 }} fluid={props.projectImage}></Img>
          </Col>
          <Col className={styles.projectTextContainer}>
            <Row className={styles.title}>{props.title}</Row>
            <hr className={styles.sectionBreak} />
            <Row className={styles.techStack}>{props.techStack.reduce((out: string, tech: string) => out + ', ' + tech)}</Row>
            <hr className={styles.sectionBreak} />
            <Row className={styles.description}>{props.description}</Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProjectDisplay
