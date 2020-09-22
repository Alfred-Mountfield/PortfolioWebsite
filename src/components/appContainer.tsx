import React from "react"

import styles from "./appContainer.module.css"
import Footer from './footer'

export const AppContainer: React.FC = props => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.contentsContainer}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default AppContainer
