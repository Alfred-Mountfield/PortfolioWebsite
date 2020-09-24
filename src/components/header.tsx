import React from 'react'
import Row from 'react-bootstrap/Row'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'

import styles from './header.module.css'

const Header: React.FC = props => {
  return (
    <Row className={classNames(styles.fullName, "align-items-center", "m-0")}>
        <Link to={"/"}>
          <span className={styles.firstName}>Alfred</span>
          <span className={styles.lastName}>Mountfield</span>
        </Link>
        <Link to={"/"} className={styles.homeButton} style={{display: 'flex', marginLeft: 'auto'}}>
          <FontAwesomeIcon icon={faHome} size={'lg'}/>
        </Link>
    </Row>
  )
}

export default Header
