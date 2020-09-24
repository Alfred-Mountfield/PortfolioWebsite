import React from 'react'
import Row from 'react-bootstrap/Row'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'

import styles from './header.module.css'

type HeaderProps = {
  location: Location
}

const Header: React.FC<HeaderProps> = props => {
  return (
    <Row className={styles.headerContainer}>
      <Link className={styles.name} to={'/'}>
        <span className={styles.firstName}>Alfred</span>
        <span className={styles.lastName}>Mountfield</span>
      </Link>
      <span className={styles.location}>{props.location.pathname}</span>
      <Link to={'/'} className={styles.homeButton}>
        <FontAwesomeIcon icon={faHome} size={'lg'} />
      </Link>
    </Row>
  )
}

export default Header
