import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'

import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
  
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br /> design and code React apps</h1>
        <p>Complete courses about best tools and design systems. Proptotype and build apps with React and Figma.</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
        <Wave />
      </div>
      <div className="Cards">
        <h2>11 courses, more comming</h2>
        <div className="CardGroup">
          <Card 
            title='React for Designers' 
            text='12 sections'
            image={require('../images/wallpaper2.jpg')}
          />
          <Card 
            title='Design Systems' 
            text='10 sections'
            image={require('../images/wallpaper.jpg')}
          />
          <Card 
            title='Sound Design' 
            text='5 sections'
            image={require('../images/wallpaper4.jpg')}
          />
          <Card 
            title='ARKit 2' 
            text='10 sections'
            image={require('../images/wallpaper4.jpg')}
          />
          <Card 
            title='Figma for Designers' 
            text='11 sections'
            image={require('../images/wallpaper2.jpg')}
          />
          <Card 
            title='Modern CSS' 
            text='14 sections'
            image={require('../images/wallpaper.jpg')}
          />
        </div>
      </div>
      <Section 
        image={require('../images/wallpaper2.jpg')}
        logo={require('../images/logo-react.png')}
        title="React for Designers"
        text='Learn how to buid a modern site using React and most efficient libraries to get your site/product online. 
        Get familiar with components, CSS Grid, animations, interactions, 
        dynamic data with Contentful and deploying your site with Netlify.'
      />
      <SectionCaption>12 sections - 5 hours</SectionCaption>
      <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell
          title={cell.title}
          image={cell.image}
        />
      ))}
      </SectionCellGroup>
    </div>
  </Layout>
)

export default IndexPage


