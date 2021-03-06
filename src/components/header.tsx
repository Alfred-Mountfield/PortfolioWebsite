import React from 'react'
import Row from 'react-bootstrap/Row'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'

import styles from './header.module.scss'

type HeaderProps = {
  location: Location
}

const Header: React.FC<HeaderProps> = props => {
  return (
    <Row className={styles.headerContainer}>
      <Link to={'/'} className={styles.name}>
        <span className={styles.firstName}>Alfred</span>
        <span className={styles.lastName}>Mountfield</span>
      </Link>
      <div className={styles.location}>
        <span >{props.location.pathname}</span>
      </div>
      <Link to={'/'} className={styles.homeButton}>
        <FontAwesomeIcon icon={faHome} size={'lg'} />
      </Link>
    </Row>
  )
}

export default Header
