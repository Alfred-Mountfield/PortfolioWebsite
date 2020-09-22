import React from "react"
import AppContainer from '../components/appContainer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import classNames from 'classnames'

import styles from './about.module.css'

type AboutProps = {
  location: Location
}

export const About: React.FC<AboutProps> = props => {
  return (
    <AppContainer location={props.location}>
      <Row className="mt-5">
        <Col xs={10} lg={6} className="m-0 mb-4 ml-lg-5 ml-2">
          <h1 className={styles.paraHeader}>Lorem Ipsum Dolor Sit Amet</h1>
          <p className={styles.paraContent}>"Computer Science, Software Engineering, Problem-Solving, Photography, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
        </Col>
      </Row>
      <Row className="row m-0 justify-content-end">
        <Col className="col-10 col-lg-6 mb-4 mr-lg-5 mr-2">
          <h1 className={styles.paraHeader}>Lorem Ipsum Dolor Sit Amet</h1>
          <p className={styles.paraContent}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </Col>
      </Row>
      <Row className="m-0">
        <Col className="m-0 col-10 col-lg-6 mb-4 ml-lg-5 ml-2">
          <h1 className={styles.paraHeader}>Lorem Ipsum Dolor Sit Amet</h1>
          <p className={styles.paraContent}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </Col>
      </Row>

      <h1 className={classNames(styles.sectionHeader, "mt-5 mb-5")}>——— Experience ———</h1>

      <Row className={classNames("m-0 mt-1 justify-content-center")}>
        <Col className={classNames("col-md-2", styles.experienceLocation)}>Bavarian International School gAG</Col>
        <Col className={classNames("col-lg-4 col-md-6", styles.experienceLocation)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        </Col>
      </Row>
      <Row className={classNames("m-0 mt-1 justify-content-center")}>
        <Col className={classNames("col-md-2", styles.experienceLocation)}>University of Manchester</Col>
        <Col className={classNames("col-lg-4", "col-md-6", styles.experienceLocation)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        </Col>
      </Row>
      <Row className={classNames("m-0 mt-1 justify-content-center")}>
        <Col className={classNames("col-md-2", styles.experienceLocation)}>Morgan Stanley</Col>
        <Col className={classNames("col-lg-4", "col-md-6", styles.experienceLocation)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        </Col>
      </Row>
      <Row className="spacer mt-5"/>
    </AppContainer>
  )
}

export default About
