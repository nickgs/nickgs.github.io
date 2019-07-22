import React from 'react'
import { Link } from 'gatsby'

// import Layout from '../components/layout'
// import Image from '../components/image'
// import SEO from '../components/seo'

import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketches/sketch1';

import styled, {createGlobalStyle} from 'styled-components'
import GlobalStyle from '../styles/global-styles';
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
        <BigHello>Contact</BigHello>
        <p>If you have a project you have been thinking about developing. Have a idea you want to explore. Or just want to talk shop. I would love to connect.</p>
        <p>I am connected on the social platforms below.</p>
        <ul>
          <li><a target="_blank" href="https:/twitter.com/direct">@direct on Twitter.</a></li>
          <li><a target="_blank" href="https:/linkedin.com/in/nickgs">nickgs on LinkedIn.</a></li>
          <li><a target="_blank" href="https://github.com/nickgs">nickgs on Github.</a></li>
        </ul>
        <p>Or just shoot me an email at <a href="mailto:nick@segosolutions.com">nick@segosolutions.com</a></p>
      </Article>
    </MainContent>
    <MediaZone id="myCanvas">
      <P5Wrapper sketch={sketch}></P5Wrapper>
    </MediaZone>
  </Container>
)

export default IndexPage
