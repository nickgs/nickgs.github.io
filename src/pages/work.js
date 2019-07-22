import React from 'react'
import { Link } from 'gatsby'

// import Layout from '../components/layout'
// import Image from '../components/image'
// import SEO from '../components/seo'

import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketches/square_wall';

import styled, {createGlobalStyle} from 'styled-components'
import { GlobalStyle } from '../styles/global-styles'
import { Container, SideBar, MediaZone, MainContent, TopNav, Title, Article, BigHello } from '../styles/layout-styles';


import NgsMenu from '../components/menu'; 


const IndexPage = () => (
  <Container>
    <GlobalStyle/>
    <SideBar>
      <NgsMenu></NgsMenu>
    </SideBar>
    <MainContent>
      <TopNav>
        <Title><Link to="/">nickgs</Link></Title>
      </TopNav>
      <Article>
        <BigHello>Work</BigHello>
        <p>I have the privilege to work with a talanted team of creative folks at Sego Solutions. We build web solutions in various platforms for clients with unique needs.</p>
        <p>Check us out at the link below: </p>
        <ul>
          <li><a target="_blank" href="https://segosolutions.com">Sego Solutions</a></li>
        </ul>
        <p>In addition to Sego, I am Director of IT at the leading medical device manufacturer, American Diagnostic. In my time at ADC I have been able to build various solutions to meet the needs of a growing international business. </p>
        <ul>
          <li><a target="_blank" href="https://www.adctoday.com">American Diagnostic Corp.</a></li>
        </ul>
      </Article>
    </MainContent>
    <MediaZone id="myCanvas">
      <P5Wrapper sketch={sketch}></P5Wrapper>
    </MediaZone>
  </Container>
)

export default IndexPage
