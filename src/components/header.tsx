import React from 'react'
import Row from 'react-bootstrap/Row'
import classNames from 'classnames'

import styles from './header.module.css'
import { Link } from 'gatsby'

const Header: React.FC = props => {
  return (
    <Row className={classNames(styles.fullName, "align-items-center", "m-0")}>
        <Link to={"/"} style={{textDecoration: 'none'}}>
          <span className={styles.firstName}>Alfred</span>
          <span className={styles.lastName}>Mountfield</span>
        </Link>
    </Row>
  )
}

export default Header
