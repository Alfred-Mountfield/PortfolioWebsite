import React from "react"

import styles from "./appContainer.module.css"
import Footer from './footer'
import Header from './header'

type AppContainerProps = {
  location: Location
}
declare var __PATH_PREFIX__: string


export const AppContainer: React.FC<AppContainerProps> = props => {
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <div className={styles.appContainer}>
      {props.location.pathname !== rootPath ? <Header /> : null}
      <div className={styles.contentsContainer}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default AppContainer
