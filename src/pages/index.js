import React from 'react'

import {createGlobalStyle} from 'styled-components'
import { GlobalStyle } from '../styles/global-styles';
import { Container, SideBar, MediaZone, MainContent, TopNav, Title, Article } from '../styles/layout-styles';

import NgsMenu from '../components/menu'; 
import Hero from '../components/hero';
import Header from '../components/header';

import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketches/white_bubble';

const IndexPage = () => (
  <Container>
    <GlobalStyle/>
    <Header/>
    <SideBar>
      <NgsMenu></NgsMenu>
    </SideBar>
    <MainContent>
      <TopNav>
        <Title>nickgs</Title>
      </TopNav>
      <Article>
        <Hero></Hero>
      </Article>

    </MainContent>
    <MediaZone id="myCanvas">
      <P5Wrapper sketch={sketch}></P5Wrapper>
    </MediaZone>
  </Container>
)

export default IndexPage
