import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import ProjectDisplay from '../../components/projectDisplay'
import AppContainer from '../../components/appContainer'

import styles from './common.module.css'

const WebGLParticles: React.FC<ProjectDisplayPageProps> = props => {
  // Get All Images
  const imageData = useStaticQuery(graphql`
      query getWebGLParticlesPhotos {
          allFile(filter: { extension: { regex: "/(jpg)|(png)/" }, relativeDirectory: { regex: "/projects/webGLParticles*/" } }) {
              edges {
                  node {
                      childImageSharp {
                          fluid(maxWidth: 2000, quality: 90) {
                              ...GatsbyImageSharpFluid
                              ...GatsbyImageSharpFluid_withWebp
                              ...GatsbyImageSharpFluidLimitPresentationSize
                          }
                      }
                  }
              }
          }
      }
  `)

  const mainDescription = "Something of a tech demo, an interactive particle system written in Three.js. Utilising the GPU, the system can " +
    "simulate tens of millions of particles according to a selection of physics simulations written as shaders. The main implementations include a " +
    "variety of strange attractors, although it may be revisited at some point to add fluid dynamics and gravitational or collision simulations. \n\n" +
    "A series of different starting shapes show the ability to load particle positions from textures (and although unimplemented, easily read " +
    "mesh geometries). \n\n"

  const description = <div>{mainDescription}<i>n.b. Definitely <b>not</b> mobile-friendly!</i></div>

  return (
    <AppContainer location={props.location}>
      <ProjectDisplay
        projectImage={imageData.allFile.edges[0].node.childImageSharp.fluid}
        title={'WebGL Particle System'}
        description={description}
        techStack={['Typescript', 'Three.js', 'WebGL', 'Babel']}
        link={'/particles'}
        codeLink={'https://github.com/Alfred-Mountfield/WebGLParticles'}
      />
    </AppContainer>
  )
}

export default WebGLParticles
