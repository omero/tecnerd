import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import Img from "gatsby-image"

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-full xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`
class Index extends React.Component {
  render() {
    const { data } = this.props
    const speakers = data.allGoogleSpreadsheetSheet1.edges;
    return (
      <>
        <Layout />
        <Parallax pages={10}>
          <Hero offset={0}>
            <BigTitle>
              Hola, <br /> Bienvenidos a TecNerd.
        </BigTitle>
            <Subtitle>Conociendo las nuevas tendencias tecnologicas</Subtitle>
          </Hero>

          <Projects offset={0}>
            <Title>Expositores</Title>
            <ProjectsWrapper>
              {speakers.map(({ node }) => {
                const speaker = node;
                console.log(speaker.avatar);
                return (
                  <ProjectCard
                    key={speaker.id}
                    title={speaker.name}
                    link={speaker.website}
                    bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                  >
                    <Img
                      fluid={speaker.childrenFile[0].childImageSharp.fluid}
                      alt={speaker.name}
                      imgStyle={{
                        borderRadius: `50%`,
                      }}
                    />

                    <center><h2 style={{ fontSize: '2.5em' }}>{speaker.name}</h2></center>

                    <p>{speaker.bio}</p>
                    <p><strong>Tema:</strong> {speaker.topic}</p>
                    <p><strong>Fecha:</strong> {speaker.date}</p>
                  </ProjectCard>
                )
              })}

            </ProjectsWrapper>
          </Projects>
        </Parallax>
      </>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    allGoogleSpreadsheetSheet1(
     sort: { fields: [date], order: ASC }
  ) {
      edges {
        node {
          id
          name
          bio
          twitter
          website
          topic
          date(formatString: "LLLL")
          childrenFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`