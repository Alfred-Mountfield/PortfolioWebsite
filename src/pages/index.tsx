import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'gatsby'

import AppContainer from '../components/appContainer'

import styles from './index.module.css'

type HomeProps = {
  location: Location
}

const Home: React.FC<HomeProps> = props => {
  const bodyRef = React.useRef<HTMLInputElement>(null)
  function scrollDown() {
    bodyRef.current?.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <AppContainer location={props.location}>
      <div className={styles.headPic}>
        <div className={styles.fullName}>
          <span className={styles.firstName}>Alfred</span>
          <span className={styles.lastName}>Mountfield</span>
        </div>
        <div className={styles.caption}>
          <span
            className={styles.border}
            id="scroll"
            onClick={scrollDown}
            style={{ cursor: 'pointer' }}
          >
            Scroll Down
          </span>
        </div>
      </div>
      <Container id="content" ref={bodyRef} fluid>
        <Row className={styles.pageLinks}>
          <Col md={4} className="p-0">
            <Link to={"/about"} style={{ backgroundColor: '#262626' }}>
              <img
                className="img-fluid fit-image"
                src="../../../assets/images/tempPerson.jpg"
              />
              <div className={styles.overlayContainer}>
                <div className={styles.textOverlay}>
                  <div className={styles.overlayText}>About</div>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={4} className="p-0">
            <Link to={"/projects"} style={{ backgroundColor: '#595959' }}>
              <img
                className="img-fluid fit-image"
                src="../../../assets/images/tempCoding.jpg"
              />
              <div className={styles.overlayContainer}>
                <div className={styles.textOverlay}>
                  <div className={styles.overlayText}>
                    Coding Snippets and Projects
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={4} className="p-0">
            <Link to={"/photos"} style={{ backgroundColor: '#8C8C8C' }}>
              <img
                className="img-fluid fit-image"
                src="../../../assets/images/tempCamera.png"
              />
              <div className={styles.overlayContainer}>
                <div className={styles.textOverlay}>
                  <div className={styles.overlayText}>Photography</div>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </AppContainer>
  )
}

export default Home
