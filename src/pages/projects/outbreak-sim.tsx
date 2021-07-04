import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { ProjectDisplayPageProps } from "../../components/projectPagesCommon";
import ProjectDisplay from '../../components/projectDisplay'
import AppContainer from '../../components/appContainer'

import styles from './common.module.css'

const WebGLParticles: React.FC<ProjectDisplayPageProps> = props => {
  // Get All Images
  const imageData = useStaticQuery(graphql`
      query getOutbreakSimPhotos {
          allFile(filter: { extension: { regex: "/(jpg)|(png)/" }, relativeDirectory: { regex: "/projects/outbreakSim*/" } }) {
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

  const description = <div>A large-scale epidemiological agent-based model, created as the final project of undergraduate. Consists of
    three components:
    <br/><br/>
    <i>Synthetic Environment Generator</i><br/>
    A pipeline that manipulates and combines open-source datasets to create representative artificial populations of given UK geographies.
    <br/><br/>
    <i>Simulation Runner</i><br/>
    An efficient low-level agent-based model written in Rust. Utilises the synthetic environments created by the generator, and is capable of
    simulating tens of millions of agents at those extremely-fine granularities. Includes a visualisation of the population and geography
    during simulation execution.
    <br/><br/>
    <i>Reporting Utilities</i><br/>
    A selection of Jupyter notebooks to parse, visualise, and work with, the outputs of the simulation runner. Used for analysing transmission
    dynamics and other metrics.
  </div>

  return (
    <AppContainer location={props.location}>
      <ProjectDisplay
        projectImage={imageData.allFile.edges[0].node.childImageSharp.fluid}
        title={'Outbreak-Sim'}
        description={description}
        techStack={['Rust', 'Python', 'Jupyter', 'Flatbuffers']}
        codeLink={'https://github.com/Alfred-Mountfield/outbreak-sim'}
      />
    </AppContainer>
  )
}

export default WebGLParticles
