import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'

import styles from './footer.module.css'

// todo on hover instagram
const Footer: React.FC = props => {
  return (
    <Container className={classNames(styles.footerContainer, 'p-3')} fluid>
      <footer>
        <Row className={classNames(styles.social, 'justify-content-center', 'p-2')}>
          <div className={classNames(styles.socialBubbles)} >
            <a href="https://www.linkedin.com/in/alfred-mountfield/" className={styles.icoLinkedin} title="LinkedIn" target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faLinkedin} size={'lg'} />
            </a>
            <a href="mailto:alfredmountfield@gmail.com" className={styles.icoEmail} title="E-Mail" target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faEnvelope} size={'lg'} />
            </a>
            <a
              href="https://github.com/Alfred-Mountfield" className={styles.icoGithub} title="GitHub" target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faGithub} size={'lg'} />
            </a>
            <a href="https://www.instagram.com/alfred_mountfield/" className={styles.icoInstagram} title="Instagram" target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faInstagram} size={'lg'} />
            </a>
          </div>
        </Row>
        <Row className="justify-content-md-center p-2">
          <Col lg={4} className=" col col-lg-4 copyright">
            <p className="text-center my-auto">Copyright © 2020. Alfred Mountfield. All rights reserved.</p>
          </Col>
        </Row>
      </footer>
    </Container>
  )
}

export default Footer
