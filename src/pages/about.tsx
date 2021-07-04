import React from 'react'
import AppContainer from '../components/appContainer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import classNames from 'classnames'

import styles from './about.module.css'

type AboutProps = {
  location: Location
}

export const About: React.FC<AboutProps> = props => {
  type ExperienceRowProps = {
    place: string
    dates: string
    description: string
    tech: string
  }

  const ExperienceRow = (rowProps: ExperienceRowProps) => {
    return (
      <Row className={classNames(styles.locationExplanationRow, 'justify-content-center')}>
        <Col>
          <div className={styles.experienceHeader}>
            <span className={styles.location}>
              {rowProps.place}
              <br />
              <span className={styles.dates}>{rowProps.dates}</span>
            </span>
            <span className={styles.tech}>{rowProps.tech}</span>
          </div>
          <hr className={styles.sectionBreak} />
          <div className={styles.explanation}>
            {rowProps.description}
          </div>
        </Col>
      </Row>
    )
  }

  return (
    <AppContainer location={props.location}>
      <Container>
        <h1 className={classNames(styles.sectionHeader, 'mt-5 mb-5')}>——— Experience ———</h1>
        <ExperienceRow
          place={'Improbable Worlds Limited'}
          dates={'June 2020 - September 2020'}
          description={'Worked in a team focusing on complex orchestration of game servers across cloud providers for multiplayer games. '}
          tech={'Golang, React (Typescript, JSX), Kubernetes, Helm, Agones, Docker'}
        />
        <ExperienceRow
          place={'Morgan Stanley'}
          dates={'January 2020 - June 2020'}
          description={' Worked in a Kanban team in Prime Brokerage Technology focusing on API solutions to pave the way to cloud within the division and firm.'}
          tech={'Java (Boot, Cloud, Reactive), Python, Network Security (OAuth, HTTPS, Kerberos)'}
        />
        <ExperienceRow
          place={'Morgan Stanley'}
          dates={'June 2019 - January 2020'}
          description={'Worked in a Scrum Team focusing on a regulatory process in Corporate Finance Technology.'}
          tech={'Java (Spring, JAXB), Python (Pandas, Flask, SQLAlchemy), AppDynamics, Splunk'}
        />
      </Container>
      <Container>
        <h1 className={classNames(styles.sectionHeader, 'mt-5 mb-5')}>——— Education ———</h1>
        <Row className={classNames(styles.locationExplanationRow, 'm-0 mt-1 justify-content-center')}>
          <Col md={2} className={styles.location}>
            University of Manchester
            <br />
            <span className={styles.dates}>2016-2021</span>
          </Col>
          <Col lg={4} md={6} className={styles.explanation}>
            BSc (Hons) Computer Science and Mathematics with Industrial Experience
          </Col>
        </Row>
        <div className={'w-100'} />
        <Row className={classNames(styles.locationExplanationRow, 'm-0 mt-1 justify-content-center')}>
          <Col md={2} className={styles.location}>
            Bavarian International School gAG
            <br />
            <span className={styles.dates}>2012-2016</span>
          </Col>
          <Col lg={4} md={6} className={styles.explanation}>
            International Baccalaureate DP (Diploma Programme) and MYP (Middle Years Programme)
          </Col>
        </Row>
        <Row className="spacer mt-5" />
      </Container>
    </AppContainer>
  )
}

export default About
