import React from 'react'
import { Link } from 'gatsby'

// import Layout from '../components/layout'
// import Image from '../components/image'
// import SEO from '../components/seo'

import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketches/connector.js';

import styled, {createGlobalStyle} from 'styled-components'
import { GlobalStyle } from '../styles/global-styles'
import { Container, SideBar, MediaZone, MainContent, TopNav, Title, Article, BigHello } from '../styles/layout-styles';


import NgsMenu from '../components/menu'; 
import Header from '../components/header';


const IndexPage = () => (
  <Container>
    <GlobalStyle/>
    <Header/>
    <SideBar>
      <NgsMenu></NgsMenu>
    </SideBar>
    <MainContent>
      <TopNav>
        <Title><Link to="/">nickgs</Link></Title>
      </TopNav>
      <Article>
        <BigHello>Speaking / Teaching</BigHello>
        <p>Below is a list of talks I've given. Some are longer form full day trainings, some turned into full semester curriculums.</p>
        <ul>
            <li><a target="_blank" href="http://nickgs.com/drupal8-testdrive-module/#/">Drupal 8 Module Development</a></li>
            <li><a target="_blank" href="http://nickgs.com/smart-contracts/#/">Getting Started with Ethereum Smart Contracts</a></li>
            <li><a target="_blank" href="http://nickgs.com/code2art-talk/#/">Introduction to Creative Coding with P5.js</a></li>
            <li><a target="_blank" href="http://nickgs.com/hello-docker/">Hello Docker</a></li>
            <li><a target="_blank" href="http://nickgs.com/php-oo-slides/#/">Object Oriented Programming in PHP</a></li>
            <li><a target="_blank" href="http://nickgs.com/hello-gatsby/">Hello GatsbyJS</a></li>
            <li><a target="_blank" href="https://erc20.surge.sh">Create your own Cryto - An exploration of the ERC20 token standard.</a></li>
        </ul>
        <p>I really like putting these together. If you have an event and looking for speakers, <a href="/contact">reach out.</a></p>
      </Article>
    </MainContent>
    <MediaZone id="myCanvas">
      <P5Wrapper sketch={sketch}></P5Wrapper>
    </MediaZone>
  </Container>
)

export default IndexPage
